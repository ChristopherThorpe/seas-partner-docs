# Approach A: owner's edits, November 10 (round 6)

The owner's edit, the reading applied, and the instructions for the drafter. The decisions are R39 to R44 in `approach-a-2026-11-06-decisions-to-confirm.md`, which also lists the drafter's and reviewer's later choices for the owner to confirm.

## The owner's edit

This came right after a discussion of Exhibit B, Part 1, step 3 (equity for losing bidders) and a proposal to give every project participant an advisor-level grant in a purchase of unused work.

**Owner's text:**

> I think both this and the partner buyback scenario need to be moved out as separate "scenario" documents to discuss with counsel about whether we want to force students to agree on those terms up front.
>
> I'm just not sure it's appropriate for the course to push students into that (versus providing them an addendum they can "add on" to the course documents and fits cleanly with the course documents.)
>
> I like showing them why it matters, and recommending that they agree on _something_, but I think creating a default for those things creates trouble.

## The owner's follow-up: the decision for counsel

After seeing R39 to R44, the owner set the scenario documents' starting point.

**Owner's text:**

> I think that's where we should start, with a decision for counsel to help us think through this here, and whether a sensible fair default is something we do want to enforce — while making it easier for them to do anything else if they don't like it.

So each scenario document opens with that decision (E5, item 3): should the agreements enforce a sensible, fair default, while making it easy for the people affected to choose anything else? A default with an easy way out becomes the first option, ahead of an optional add-on and a recommendation only.

## How it is read (R39, for the owner to confirm)

"This and the partner buyback scenario" is read as both of the Course Agreement's default procedures for later commercial use:

1. **The teammate buyout:** Course Agreement Section 5.5 and Exhibit B, Part 2.
2. **The right to purchase unused work** (the partner buyback): Course Agreement Section 5.7 and Exhibit B, Part 1, including the losing bidders' equity (step 3) and the advisor-level grant for every participant that was proposed but never applied.

Both are taken out of the binding documents, and Exhibit B is deleted. Their text as of commit 92a4268 is kept, word for word, in the scenario documents. If the owner meant only the purchase of unused work, Section 5.5 and Exhibit B, Part 2 come back unchanged.

## Edits for the drafter

### E1. Remove the defaults (R39)

- Delete Course Agreement Section 5.5 (buyout of an inactive co-owner), Section 5.7 (right to purchase unused work), and Exhibit B, with their notes for counsel. The notes move to the scenario documents (E5).
- Delete Project Agreement Section 4.5(g) (Partner agrees to the right to purchase), and the "5.7 and Exhibit B" item in Section 1.2.

### E2. What stays (R40)

These are unchanged in substance: the Student Company (5.2), Teammate licenses with no duty to account (5.3), separate companies and later work (5.4), copies and credit (5.6), and irrevocable licenses (now 5.7). Work a Partner owns stays the Partner's, with no right to purchase unless an Add-On Agreement (E3) gives one.

### E3. A short hook for optional add-ons (R41)

Replace Section 5.5 with a short section that sets no default, recommends that each team agree on something, and lets an optional agreement fit cleanly. A best guess at the wording, which the drafter may tighten:

> **5.5 Agreements about later use.** These agreements do not decide what happens if some of a team's students want to build a business on its Project Work Product and others do not, or if work that a Partner owns goes unused. The Course recommends, but does not require, that each team agree on this in writing early in the project, with its Partner if it has one. [The Course offers optional forms for doing so.] A written agreement about these questions among some or all of a project's students, and its Partner if it signs (an "**Add-On Agreement**"), binds only those who sign it. Among them, it governs over this agreement and their Project Terms. It cannot reduce the rights of anyone who does not sign it, including a Teammate, a Partner, a Student Company, or the public under a public license.

Add a note for counsel: whether this hook is enough for an Add-On Agreement to work (including one that assigns a student's rights or ends their Teammate license), whether forms the Course offers need Harvard's approval, and whether an Add-On Agreement signed by only some Teammates is workable.

Make the rest fit, so that nothing in the course documents blocks an Add-On Agreement:

- **CA 1.5:** the conflict rule gives way to an Add-On Agreement, among its signers, as Section 5.5 allows.
- **CA 5.3, 5.4, and 5.7 (old 5.8):** the references to Section 5.5 become references to an Add-On Agreement that the holder of the license signs. For example, the Teammate license "is irrevocable except under Section 5.1, or an Add-On Agreement that its holder signs".
- **PA:** add a sentence that Partner and any student Signers may sign an Add-On Agreement under Course Agreement Section 5.5, and that it binds only those who sign it. Section 6.8's entire-agreement sentence also covers any Add-On Agreement that Partner signs. In Section 4.3(f), remove the reference to the buyout.

### E4. Consequential edits (R42)

- **Numbering:** Section 5.8 becomes 5.7. PA Section 4.5(h) becomes (g). Check every reference to them, in both agreements, Exhibit A, the Student Guide, and the README.
- **CA 5.1:** cut the references to 5.5 and 5.7. Keep the definition of commercial use only if something still uses it.
- **CA 8.3:** cut the references to Section 5.7 and Exhibit B. A Student Company may still enforce the sections that benefit it, and an Add-On Agreement may say who may enforce it.
- **CA 8.5(f):** cut "or to any other later owner under Section 5.7". Notices to Student Companies stay.
- **Signature roster:** cut "and the power of attorney in Exhibit B".
- **Exhibit A** (`harvard-approval.md`): cut "and its Exhibit B (default procedures)".
- **Any other mention** of the buyout, the right to purchase, Exhibit B, or Part 1 or 2, including notes for counsel.

### E5. Two scenario documents for counsel (R43)

Create `agreements/v0.6/approach-a/scenarios/teammate-buyout.md` and `agreements/v0.6/approach-a/scenarios/purchase-of-unused-work.md`. Each begins with a note that it is a discussion paper for counsel, not part of the agreements, and not for signature. Each covers:

1. **The situation,** with a short example (for the buyout, SCENARIOS.md 8, the holdout teammate; for the purchase, work a Partner owns and shelves).
2. **Why it matters,** to students, Partners, and investors. For example, co-owners can each use and license the work, so no one has exclusive rights; investors usually want clean title; and a shelved patent blocks everyone.
3. **The decision for counsel, first:** should the agreements enforce a sensible, fair default, while making it easy for the people affected to choose anything else if they don't like it? Ask counsel to help judge whether the drafted terms are fair enough to enforce, especially against a student who had to sign to take the Course.
4. **Three options,** with their advantages and risks:
    - **a fair default with an easy way out:** the drafted terms apply unless the people affected choose otherwise. Sketch how easy the way out can be, for example a choice on the Project Election or the Project Agreement's cover page ("the default terms", "none", or "our own agreement, attached"), and a rule that any later written agreement among the people affected replaces the default for them;
    - **an optional Add-On Agreement** that a team opts into;
    - **a recommendation only,** explained in the Student Guide.
    For the first option, list what already makes the drafted terms fair (for example, for the buyout: only a Teammate not using the work, fully vested equity at parity with founders and advisors, cash at fair market value, and no buyout while two groups compete), and what may not be (for example, the power of attorney and a forced assignment).
5. **The owner's decisions so far** that shaped the drafted terms, by number (for example, R14 to R17, R20, R22 to R25, B3, C3, C6, C7, and R1), each in a sentence.
6. **Open choices.** For the purchase, these include:
    - the losing bidders' equity (Exhibit B, Part 1, step 3), and its incentive to split bids;
    - the owner's later proposal that every participant, student or Partner, get at least an advisor-level grant in the winner's equity, with the four questions it raised (who counts, fully vested, whether vesting founder equity counts, and one grant to a Partner that is also the owner), and the practical point about many small holders.
    For the buyout, these include an Add-On Agreement signed by only some Teammates: a holdout who never signs keeps their license, so the company still lacks exclusive rights.
7. **Questions for counsel:** the notes for counsel removed from Sections 5.5 and 5.7, plus adhesion and required courses, students under 18, and securities and tax.
8. **Appendix 1:** the removed text, word for word as of commit 92a4268, including the related lines elsewhere (CA 5.1's definition of commercial use, the 8.3 and 8.5(f) references, PA 1.2 and 4.5(g)).
9. **Appendix 2: a draft Add-On Agreement** that fits the course documents. It keeps the removed terms' substance, rewritten to bind only its signers. It uses the agreements' defined terms and Section 8.5 notices, and ends with signature blocks that follow the drafting conventions (contact details as CA 8.5(a) requires). For the purchase, it is signed by the Partner and the students, and brackets the two equity alternatives (losing bidders only, or every participant). Mark any new substance as a drafting choice.

Keep each document readable on its own, in the agreements' plain style.

### E6. Student Guide (R44)

Replace the buyout section ("use it or lose it") and the purchase text with a short section on planning ahead. It should:

- explain why it matters, with an example or two;
- recommend that each team agree on something early, in writing, and say the agreements don't decide it for them;
- list a few common approaches, such as assigning the work to a company at founding for equity, a buyout like the draft add-on, or everyone joining or releasing their rights;
- for work a Partner owns, suggest asking for a right to purchase unused work when the Project Agreement is signed;
- point to the optional add-on forms[, if the Course offers them].

Update the choice tables ("With none, the buyout can apply"), the notices bullet, the FSL line, and anything else that mentions the buyout or the purchase. Update `student-guide-sources.md` if it mentions them.

### E7. READMEs

- **`approach-a/README.md`:** update the signing table (the Student Company row), the scenario answers (at least 8, 9, and 13, and any others that rely on 5.5 or 5.7), and the questions for counsel (6 and 7 now point to the scenario documents). Add a "Round 6" section listing these changes and every choice the drafter made.
- **`agreements/v0.6/README.md`:** update "Approach A after the owner's review".
