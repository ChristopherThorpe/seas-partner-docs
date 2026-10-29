# Questionnaire format

Administrators write each questionnaire as one Markdown file. There's no widely adopted standard for forms in Markdown, so this format combines existing conventions, and a questionnaire still reads sensibly in any Markdown viewer:

- **YAML front matter**, as in Jekyll, Hugo and Pandoc, for settings.
- **Headings** for sections (`#`) and questions (`##`).
- **Task-list items** (`- [ ]`, from GitHub-flavored Markdown) for checkbox options, and `- ( )` for radio options.
- **Attribute blocks** (`{#LABEL key=value}`, from Pandoc, kramdown and markdown-it-attrs) for labels and settings.

The parser is `src/core/questionnaire.ts`. A complete example is [`test/fixtures/questionnaires/student-research.md`](../test/fixtures/questionnaires/student-research.md).

## Example

```markdown
---
id: student-research-agreement
title: Student Research Agreement
date-defaults:
  TERM_START:
    - { from: 03-01, to: 09-30, date: 09-01 } # September 1 this year
    - { from: 10-01, to: 12-31, date: 01-01, year: +1 } # January 1 next year
    - { from: 01-01, to: 02-29, date: 01-01 } # January 1 this year
---

Answer these questions to generate the agreement.

# Partner

## Effective date {#EFFECTIVE_DATE type=date required default=TERM_START}

## Partner signatory {#SIGNATORY_PARTNER type=line required placeholder="Full name"}

Full name of the person signing on behalf of the partner.

## Agreement type {#AGREEMENT_TYPE type=radio required}

- (x) Sponsored research {#SPONSORED}
- ( ) Unfunded collaboration {#COLLABORATION}

# Funding {show-if="SPONSORED"}

## Sponsored amount {#AMOUNT_SPONSORED type=currency required}

# Terms

## Additional terms {#TERMS type=checkbox}

- [ ] Student retains IP {#IP_STUDENT}
- [x] Confidentiality agreement required {#NDA}

## Harvard signs this agreement {#HARVARD_SIGNS type=checkbox}

## Harvard signatory {#SIGNATORY_HARVARD type=line required show-if=HARVARD_SIGNS}
```

## File layout

1. **Front matter** between `---` lines at the very top of the file.
2. **Introduction:** any text before the first heading, shown at the top of the form.
3. **Sections:** a `#` heading starts a section (a page or group in the form). Text under it, before its first question, is the section's description. Questions before the first `#` heading go in an untitled section.
4. **Questions:** a `##` heading starts a question. Text under it is help text, which may use Markdown such as **bold** and links.
5. **Options:** list items under a radio or checkbox question.

Only `#` and `##` headings are allowed; `###` and deeper are errors.

## Front matter

| Key             | Required | Meaning                                                                   |
| --------------- | -------- | ------------------------------------------------------------------------- |
| `id`            | yes      | Lowercase letters, digits and hyphens, e.g. `student-research-agreement`. |
| `title`         | yes      | The questionnaire's name.                                                 |
| `date-defaults` | no       | Named rules for date defaults (see [Date defaults](#date-defaults)).      |

Other keys are kept as written, for other parts of the app to use.

## Questions

```markdown
## Question text {#LABEL type=TYPE attribute attribute=value}
```

Every question needs a label (`#LABEL`) and a `type`:

| Type       | Form control                                 | Notes                                  |
| ---------- | -------------------------------------------- | -------------------------------------- |
| `text`     | multi-line text                              |                                        |
| `line`     | one line of text                             |                                        |
| `email`    | email address                                |                                        |
| `phone`    | phone number, any country                    | stored in international form           |
| `currency` | amount with its currency                     | e.g. `USD 50,000`, `$50,000`, `€1,200` |
| `date`     | date picker                                  |                                        |
| `radio`    | one choice from its options                  |                                        |
| `checkbox` | any number of its options, or one yes/no box | with no options it's a single checkbox |

Validation and formatting of each type's answers are specified in #11.

Attributes:

| Attribute         | Applies to                                   | Meaning                                                         |
| ----------------- | -------------------------------------------- | --------------------------------------------------------------- |
| `required`        | all                                          | Must be answered. For checkboxes, at least one must be checked. |
| `show-if="…"`     | all, and sections                            | Show only when the [condition](#conditions-show-if) holds.      |
| `default=…`       | text types, `date`, single checkbox          | Pre-filled answer (see [Defaults](#defaults)).                  |
| `placeholder="…"` | `text`, `line`, `email`, `phone`, `currency` | Hint shown in an empty field.                                   |
| `maxlength=N`     | `text`, `line`                               | Maximum number of characters.                                   |
| `min=…`, `max=…`  | `date`                                       | Earliest and latest allowed dates, as `YYYY-MM-DD`.             |

Values containing spaces must be quoted with `"…"`, `'…'` or curly quotes. An attribute that doesn't apply to the question's type is ignored with a warning.

## Options

```markdown
## Agreement type {#AGREEMENT_TYPE type=radio required}

- (x) Sponsored research {#SPONSORED}
- ( ) Unfunded collaboration {#COLLABORATION}
```

- Radio options are written `- ( )`; checkbox options `- [ ]`. Using the wrong marker for the question's type is an error.
- `(x)` and `[x]` mark options selected by default. A radio question can have at most one.
- Every option needs its own label.
- A radio question needs options; one with a single option gets a warning.
- A `checkbox` question with **no options** is a single yes/no box. Its own label is the answer, and it's unchecked unless the question has `default=checked`.

## Labels

Labels name answers, so templates can use them (`{{ENTITY_PARTNER}}`, `{{IF NDA}}`).

- Capital letters, digits and underscores, starting with a letter: `^[A-Z][A-Z0-9_]*$`.
- Unique across all questions **and** options in the questionnaire.
- These words are reserved: `IF`, `ELSE`, `ENDIF`, `CASE`, `WHEN`, `ENDCASE`, `NEW_DOCUMENT`, `EXPECT`, `TODAY`, `PAGE_BREAK`, `ATTACH`, `ENDATTACH`, `NOT`, `AND`, `OR`.

## Defaults

| Type                                | `default=`                                                    |
| ----------------------------------- | ------------------------------------------------------------- |
| `text`, `line` and other text types | any text                                                      |
| `date`                              | `TODAY`, a date like `2026-09-01`, or the name of a date rule |
| single `checkbox`                   | `checked` or `unchecked` (the default)                        |
| `radio`, `checkbox` with options    | not allowed; mark options with `(x)` or `[x]` instead         |

### Date defaults

A date rule maps month-day ranges of "today" to a default date:

```yaml
date-defaults:
  TERM_START:
    - { from: 03-01, to: 09-30, date: 09-01 } # March 1 – September 30 → September 1 this year
    - { from: 10-01, to: 12-31, date: 01-01, year: +1 } # October 1 – December 31 → January 1 next year
    - { from: 01-01, to: 02-29, date: 01-01 } # January 1 – end of February → January 1 this year
```

- `from` and `to` are inclusive month-days (`MM-DD`). `02-29` means the last day of February, so the rule works in leap and non-leap years.
- `date` is the default's month-day, and `year` an optional offset in years from today's year (`+1` for next year).
- The rows must cover every day of the year exactly once. A range can't cross the new year: split it into two rows, as above.
- `date` can't be `02-29`, since most years don't have one.
- Rule names follow the same rules as labels. A `date` question uses a rule with `default=RULE_NAME`.

"Today" is the date in the script's time zone (America/New_York) when a creator starts a new submission. The default is filled in then, the creator can change it, and it's never silently recomputed. If a draft is resumed after the rule would give a different date, submitting it raises a warning (#11).

## Conditions (`show-if`)

A question or a whole section can depend on earlier answers:

```markdown
# Funding {show-if="SPONSORED"}

## Indirect-cost waiver? {#WAIVER type=radio show-if="AMOUNT_SPONSORED > USD 50000"}

## Student email {#EMAIL_STUDENT type=email show-if="IP_STUDENT OR NDA"}
```

| Form                                               | True when                                                      |
| -------------------------------------------------- | -------------------------------------------------------------- |
| `LABEL`                                            | the question is answered, or the option is selected            |
| `NOT x`, `x AND y`, `x OR y`, `( … )`              | as usual; `NOT` binds tightest, then `AND`, then `OR`          |
| `RADIO = OPTION`, `RADIO != OPTION`                | the radio question's selected option is (or isn't) that option |
| `AMOUNT > 50000` (also `<`, `<=`, `>=`, `=`, `!=`) | the currency amount compares that way, in any currency         |
| `AMOUNT > USD 50,000`, `AMOUNT > $50,000`          | as above, and the answer is in that currency                   |

- `AND`, `OR`, `NOT` and labels are written in capitals.
- A condition may only use answers to **earlier** questions, so the form can update as the user answers and conditions never form a loop. A question can't depend on its own answer or options.
- When currencies differ, a comparison is false and the form shows a warning.
- A hidden question is never required, and its answer is discarded on submit. Templates see it as empty, which counts as false.

## How labels behave in templates

| Question type | `{{LABEL}}` inserts                     | In conditions                                                                 |
| ------------- | --------------------------------------- | ----------------------------------------------------------------------------- |
| text types    | the formatted answer (#11)              | true if answered                                                              |
| `date`        | the date, e.g. `September 1, 2026`      | true if answered                                                              |
| `radio`       | the selected option's text              | `CASE LABEL` matches option labels; each option label is a boolean            |
| `checkbox`    | selected options' text, comma-separated | each option label is a boolean; the question label is true if any is selected |
| single box    | nothing useful; use it in conditions    | true if checked                                                               |

## Errors and warnings

The editor shows each problem with its line number. Errors block publishing; warnings don't. Among the errors:

- missing or invalid front matter, `id` or `title`
- headings deeper than `##`; options outside a question
- missing, invalid, reserved or duplicate labels
- missing or unknown `type`; options on a non-choice question; a radio question with no options or more than one `(x)`; the wrong option marker
- invalid `default`, `min`, `max` or `maxlength` values
- conditions that don't parse, use unknown labels, use later answers, or compare the wrong kinds of answers
- date rules with invalid rows, gaps or overlaps

Warnings cover attributes that don't apply to a question's type, labels on sections, empty sections, and radio questions with a single option.
