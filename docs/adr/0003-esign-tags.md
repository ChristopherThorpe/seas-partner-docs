# ADR 0003: Dropbox Sign text tags in generated Google Docs

- **Status:** Proposed. The API side is verified. **The Dropbox Sign web app ignores text tags** (result 9), so automatic placement needs the API. The choice between platforms is open in #22. Still pending: the Apps Script export path (see [Open items](#open-items)).
- **Issue:** [#5](https://github.com/ChristopherThorpe/seas-partner-docs/issues/5)
- **Date:** 2026-10-28

## Context

`{{EXPECT …}}` directives (#14, #16) become Dropbox Sign text tags, such as `[sig|req|signer1|Label|id]`, written in white text in the generated Google Doc. Signers and fields should then be placed automatically when the PDF reaches Dropbox Sign. There's no paid Dropbox Sign API plan (#1), so the experiment used a free developer account in test mode.

## Experiment

1. Built a one-page test agreement as a Google Doc: three signers; signature, initials, text, date, and checkbox tags; some tags inside a two-column table. Tags were set in white, 12 pt Arial, and padded with ordinary spaces. The Doc was created from HTML via Drive, then the tags were put in with Docs `replaceAllText` so the padding spaces survive.
2. Exported it with Google's own PDF export (Drive export; the producer is `Skia/PDF … Google Docs Renderer`).
3. Checked the text with `pdftotext`, rendered the page to confirm the tags are invisible, and ran `POST /v3/document/detect_fields` with `detection_mode=text_tags` using [`scripts/detect-text-tags.mjs`](../../scripts/detect-text-tags.mjs).
4. Fixed what the first run showed, then repeated it.

The final artifacts are in [`docs/spikes/esign-tags/`](../spikes/esign-tags/):

- `texttags-test.pdf`: the exported PDF
- `detect-fields-result.json`: Dropbox Sign's detection result
- `fields-overlay.png`: the detected fields drawn on the page
- `v1-warnings.json`: the first run's warnings

## Results

| #   | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Tags survive Google's PDF export** as extractable text, and white text doesn't show in the rendered page. A tag inside a table cell works too.                                                                                                                                                                                                                                                                                                        |
| 2   | **Free accounts need `test_mode=1` even for `detect_fields`.** Without it the API answers HTTP 402 `payment_required`. Detection never sends anything.                                                                                                                                                                                                                                                                                                  |
| 3   | **Valid tag types are `sig`, `initial`, `text`, `text-merge`, `check`, `checkbox-merge`, `date`.** `date_signed` and `checkbox`, used in the API glossary, are rejected with a `form_fields_error` warning, and the field is dropped. The _detected_ fields report the API's own names (`signature`, `initials`, `text`, `date_signed`, `checkbox`).                                                                                                    |
| 4   | **Field width comes from the tag's rendered width, padding included.** The PDF stores the padding as positioning rather than space characters (`pdftotext -raw` shows a single space), but the width carries through: a 57-character padded `sig` tag gave a 307 pt field, and a 34-character one gave 170 pt, and a 27-character one 131 pt. A tag with a long label and ID makes a wide field even without padding (date fields came out 257–276 pt). |
| 5   | **Heights are fixed by type:** `sig` and `initial` are 27 pt, `text` and `date` 14 pt, `check` 16 × 16 pt.                                                                                                                                                                                                                                                                                                                                              |
| 6   | **`sig` and `initial` fields are bottom-aligned to the tag's line and extend about 13 pt above it.** In the first run they covered the "Signature:" label and the end of the paragraph above. With 18 pt of space above each tag paragraph, nothing overlapped (see the overlay).                                                                                                                                                                       |
| 7   | **A tag without an ID gets an automatic one** (`detected_0_6`). Labels and IDs given in the tag come through as the field's `name` and `api_id`.                                                                                                                                                                                                                                                                                                        |
| 8   | **Signer numbers come back 0-based** in the result: `signer1` is `"0"`.                                                                                                                                                                                                                                                                                                                                                                                 |
| 9   | **The Dropbox Sign web app ignores text tags.** Uploading the same PDF through sign.dropbox.com and adding three signers produced no fields. AI Auto-place Fields placed them poorly. Tags only take effect through the API with `use_text_tags=1`, which for real (non-test) requests needs a paid API plan.                                                                                                                                           |

## Decision

For #15 and #16:

- **Tag types:** `SIGNATURE_<ROLE>` → `sig`, `SIGNATURE_DATE_<ROLE>` → `date`, `INITIALS_<ROLE>` → `initial`, `TEXT_<ROLE>` → `text`, `CHECKBOX_<ROLE>` → `check`. Keep this table in one place in code.
- **Always emit a label and a unique ID** (`[A-Za-z0-9_]`). Keep date labels short, because labels and IDs widen the field.
- **Tag runs:** foreground `#FFFFFF`, 12 pt, the body font. Never wrap a tag. The renderer estimates the tag's width and pads it with ordinary spaces to the field width it wants.
- **Paragraphs holding a `sig` or `initial` tag get at least 18 pt of space above.** Put the visible cue, such as a rule line, below the tag paragraph, with captions ("Signature", "Name") under the rule or well above the tag.
- **Pre-flight:** golden PDFs from the template engine are checked with `scripts/detect-text-tags.mjs` (exit code 1 on any warning or error) wherever a `DROPBOX_SIGN_API_KEY` is available. The app's own integrity check (#16) doesn't depend on the API.
- **Keep generating tags even while documents are sent by hand.** They're invisible and cost nothing, and switching to API sending (#22) then needs no template changes.
- **Keep the tag syntax behind one interface in code.** If SEAS chooses a different e-signature platform, only the tag builder changes, not the templates.
- **Make manual placement easy.** Until tags are used, a person places fields in the Dropbox Sign editor. The visible cues ("Signature", rule lines) and the signer manifest (signer order, names, emails) shown on the document page are what guide them.

## Open items

- [x] **Dropbox Sign web app.** Done: no fields appeared, and AI Auto-place Fields did poorly (result 9).
- [ ] **Apps Script export path.** Repeat the check with a PDF from `DriveApp.getFileById(id).getAs('application/pdf')` once the web app is deployed (#3). It's expected to use the same renderer as Drive export.
