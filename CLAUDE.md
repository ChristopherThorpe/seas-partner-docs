# Project notes for Claude

## Writing style

- Always use the Oxford (serial) comma before the final "and" or "or" in a list of three or more: "students, partners, and staff", not "students, partners and staff". It removes ambiguity: "we saw the strippers, JFK, and Stalin" lists three groups; without the comma, JFK and Stalin read as the strippers.
- This applies everywhere in this repository: agreement and exhibit text, documentation, GitHub issues, pull requests, commit messages, and code comments.

## Drafting conventions (agreements)

- Capitalize every defined term wherever it is used, so a lowercase word always has its ordinary meaning. Define each term once, at first use, as `"**Term**"`.
- Use "must" for duties, "may" for permissions, and "will" for future facts. Do not use "shall".
- Plain English and short sentences. Avoid cross-references; check each one that remains against the section it cites.
- Notes for counsel begin exactly `> **Note for counsel:**`. Bracket only real drafting choices or counsel placeholders.
- Markdown: never a line made only of underscores (it renders as a rule); put a label before every blank; write email fields as "Email (ending in harvard.edu): ____"; use a trailing `\` for line breaks inside a block.

## Where decisions live

- Decisions are recorded in files, not only in chat: the version's `agreements/<version>/BRIEF.md`, `agreements/decision-register.md`, `agreements/<version>/owner-edits/` (each round of the owner's edits, with the owner's wording quoted), and `agreements/<version>/reviews/` (independent reviews).
- Tag `v0.5` is the last single-document letter agreement and the source of the earlier decisions.

## Workflow

- For a revision, use the `/agreement-revision` skill: record the owner's edits, have the `agreement-drafter` agent apply them, get a fresh `agreement-reviewer` close read, fix the findings, then commit and produce a redline (`agreements/tools/redline.py`) and a Word copy (pandoc).
- Ask before applying any interpretation of the owner's edits that the owner hasn't approved.
- Work on a branch and push it. Open a pull request only when asked, and never merge without the owner's explicit request.
