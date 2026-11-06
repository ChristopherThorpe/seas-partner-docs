---
name: agreement-revision
description: Run one revision cycle on the SEAS course project agreements. It records the owner's edits, has the agreement-drafter apply them, gets an independent agreement-reviewer close read, fixes the findings, then commits and produces a redline and a Word copy. Use when the owner sends edits to an agreement draft, or asks for a revision or another review.
---

# Agreement revision cycle

The agreements are Markdown files under `agreements/`. Decisions live in files, never only in chat:

- the version's `BRIEF.md` and `agreements/decision-register.md`;
- `owner-edits/` for each round of the owner's edits;
- `reviews/` for each independent review.

## 1. Record the owner's edits

- Write the owner's edits and decisions to `agreements/<version>/owner-edits/<document>-<YYYY-MM-DD>.md`.
- Quote the owner's own wording as **Owner's text**, and keep one item per edit.
- Before writing, ask the owner (with AskUserQuestion) wherever their intent is ambiguous, or an edit would change a recorded decision. Never apply an interpretation the owner hasn't approved.
- If a request asks you to propose wording first, propose it and get approval before it goes into the edits file.
- If the owner states a general preference (for example, a style rule), add it to the brief's style rules, and suggest adding it to `CLAUDE.md`.
- Commit and push the edits file to the working branch.

## 2. Apply

Start the `agreement-drafter` agent. Give it:

- the edits file;
- the folders it may write;
- an instruction to update the approach README.

## 3. Review

Start a fresh `agreement-reviewer` agent, never the drafter, on the revised documents. Tell it where to write its report.

## 4. Decide and fix

- Read the review.
- For each DECISION finding, decide from the brief, the register, the owner-edits files, and the owner's past answers.
- If a decision would change a recorded owner decision, ask the owner instead.
- Send the drafter the review file and your decisions (SendMessage if it is still running; otherwise start a new `agreement-drafter`).

## 5. Finish

- **Commit and push** to the working branch, never `main`. Use the attribution lines the session requires.
- **Redline** each changed document against the last version the owner saw:
  `python3 -I agreements/tools/redline.py OLD.md NEW.md OUT.html "Title" "Subtitle"`.
  Extract the old version with `git show <commit>:<path>`. Write outputs to the scratchpad, not the repository.
- **Word copy:**
  `pandoc -f gfm+raw_attribute -t docx IN.md -o OUT.docx`.
  To combine several documents, put a page break between them:
  ` ```{=openxml} ` / `<w:p><w:r><w:br w:type="page"/></w:r></w:p>` / ` ``` `.
- **Report to the owner:**
  - what changed;
  - which drafter and reviewer decisions need their approval;
  - the redline and the Word copy.
- Open a pull request only when asked, and never merge without the owner's explicit request.
