# Review 5: the trimming pass on approach A

Compared commit 01db855 with the current `course-agreement.md` (CA) and `project-agreement.md` (PA), paragraph by paragraph, against the brief, the register, both owner-edits files, and `SCENARIOS.md`.

**Unchanged, as claimed (checked mechanically):** every piece of owner-approved text the task lists (CA 1.4, 2.2, the first sentences of 2.3, 2.4, the consent sentence in 3.2, 3.4, 4.2, 5.5, 5.6(c), 7.1, and 7.3; PA intro, the cover page, 2.2, 3.4, and 5.5). Also unchanged: the course details, the roster, the Project Election, Exhibits A and B, and the PA cover and joinder pages. The earlier departures from the owner's wording (PA 2.2(b) "subject to Section 2.3(c)", and PA 3.4(b) "Partner, if an individual,") predate the trim and are recorded in the README.

## Problems

Most important first. "Before" is 01db855 and "After" is the current text.

1. **CA 5.1: "commercial use" was widened.** MECHANICAL.
   - Before: "In this Section 5, use in any product, service, or business operation, including internal use, is commercial use."
   - After: "In this Section 5, commercial use includes internal use and use in any product, service, or business operation."
   - Problem: before, "internal use" was one kind of business use, matching R15. Now it stands alone. A holdout Teammate can argue that running the code on a personal laptop is "internal use", so they are "using the work commercially" and CA 5.5(b) cannot reach them. That is the hostage case the buyout exists to cure. The same widening affects the CA 5.7(b) trigger.
   - Fix: restore the "before" sentence.

2. **CA 1.2: "Project Work Product" lost its list.** MECHANICAL.
   - Before: "is the results, reports, presentations, posters, videos, software, data, designs, and other work that a project's students create for it."
   - After: "is all work that a project's students create for it, except materials that others own, ..."
   - Problem: "work" alone can be read as works of authorship. The list is what brought in results, data, and designs, meaning inventions and data that copyright does not cover. Several rules depend on Project Work Product covering inventions:
     - PA 4.5(a)'s assignment, which 35 U.S.C. § 261 requires to be in writing;
     - PA 4.5(b)'s patent duties;
     - CA 5.7(e), under which patents transfer with the work.
   - Fix: ""**Project Work Product**" is the results, reports, presentations, posters, videos, software, data, designs, and other work that a project's students create for it, except materials that others own, such as open-source software, a Partner's materials, or a current or former employer's code, which keep their own owners and licenses."

3. **PA 3.1: the examples of private academic uses are no longer marked "private".** MECHANICAL.
   - Before: "in privately submitted coursework, private class presentations, private poster sessions, private video showcases, and similar private academic uses."
   - After: "in private academic uses, such as privately submitted coursework, class presentations, poster sessions, and video showcases."
   - Problem: "such as" now names every poster session and video showcase as a private academic use. A student could therefore show a Partner-owned invention at a public fair without consent, and Section 3.3 ("does not apply to these uses") would not apply, risking the patent that review protects. Register D3 covers only private sessions.
   - Fix: "in private academic uses, such as privately submitted coursework and private class presentations, poster sessions, and video showcases."

4. **CA 5.7(b): the non-use test was weakened and its timing re-anchored.** MECHANICAL.
   - Before: "At any time from [2] years after the end of the Duration, the project's Partner, or any of its students, ... may give notice ... It may do so only if no one has used the work commercially during the previous [2] years."
   - After: "From [2] years after the end of the Duration, if no one has used the work commercially during the previous [2] years, the project's Partner or any of its students, ... may give notice ..."
   - Problem 1: "only if" became "if", so non-use reads as a sufficient condition, not a necessary one.
   - Problem 2: "previous [2] years" now follows the start date, so it can be read as the two years before that date, a one-time test at Duration plus two years. R5 tests non-use on the date of the notice.
   - Fix: "(b) From [2] years after the end of the Duration, the project's Partner or any of its students, alone or through an existing or prospective Student Company, may give notice that it wishes to purchase the work, but only if no one has used the work commercially during the [2] years before the notice. A patent application, provisional or not, is not use."

5. **CA 5.6(b): the duty to credit became unclear.** MECHANICAL.
   - Before: "The student must credit any Teammate who is not a co-author in the acknowledgments, unless they ask not to be named."
   - After: "... unless the material covers substantial work done after the Duration, and must credit any other Teammate in the acknowledgments unless they ask not to be named."
   - Problem: "any other Teammate" has no clear comparison, because the sentence has just required an offer to "each Teammate". When the post-Duration exception applies, no one is offered co-authorship. The duty can then be read as reaching no one, or as falling inside the exception. It also no longer matches PA 3.4(a), the owner's text "who is not a co-author".
   - Fix: end the first sentence after "the Duration." and restore the "before" sentence.

6. **PA 6.3 and 6.7: the instructor's approval is no longer required, only certified.** DECISION.
   - PA 6.3 before: "If the result is not Open Science, the Course instructor must approve it in writing or by email, and Partner certifies that approval in the change."
   - PA 6.3 after: "If the result is not Open Science, Partner certifies in the change that the Course instructor approved it in writing or by email."
   - PA 6.7 before: "Partner certifies the Course instructor's approvals as the cover page and Section 6.3 require." This was cut.
   - Problem: Partner is not bound by CA 2.1, which PA 1.2 does not list. PA 6.3 was therefore Partner's only statement that a change needs the approval. PA 6.7 was the certification that still applied if Partner left the cover-page box unchecked. Register B3 ("Partner warrants it") and the README's open point ("the certification is Partner's warranty") rely on both.
   - Recommendation: restore both. For PA 6.3: "If the result is not Open Science, the change needs the Course instructor's approval in writing or by email, which Partner certifies in the change." For PA 6.7, put the cut sentence back.

7. **PA 6.1: Partner's duty to update its contacts got narrower.** MECHANICAL.
   - Before (PA 6.2): "... using the contact details on the cover page and in the signature entries, as updated. Partner must keep its details current ..."
   - After (PA 6.1): "Partner must keep its contact details for notices current."
   - Problem: PA 6.3 uses "contact details for notices" for Partner's own address, as distinct from "the Partner Contacts". The duty now arguably skips the Partner Contacts' emails and telephones, yet CA 8.5(f) sends every notice to a Partner to those (R13, R21; the owner's C5: "All parties need an obligation to notify ...").
   - Fix: "Partner must keep its Partner Contacts' details and its own contact details for notices current. It may replace or add Partner Contacts, or change any of those details, by notice to the Signers, and that is not a change to this agreement."

8. **CA 8.5(d): "delivered to that telephone number" became "reaches the recipient's telephone".** MECHANICAL.
   - Before: "... until a text message or voicemail has been delivered to that telephone number, unless the recipient gave no number, or the number no longer works ..."
   - After: "... until a text message or voicemail reaches the recipient's telephone, unless they gave no number, or it no longer works ..."
   - Problem: this departs from the owner's words in R4 and R14 ("delivered to the telephone number given"). It invites the argument that the message must reach the person's handset, or any phone they own.
   - Fix: see item (c) below, which also settles the Partner question.

9. **CA 3.2: the express permission to show Course Private Information was lost.** MECHANICAL.
   - Before: "A project's students may show its Course Private Information at a Private Course Event. They must use Reasonable Care ..."
   - After: "Students who show their project's Course Private Information at a Private Course Event must use Reasonable Care ..."
   - Problem: showing now rests only on CA 1.3, which covers only the attendees it lists. If counsel strikes "[members of the SEAS community]", showing at a poster session that SEAS members attend would breach PA 2.2(b) ("and nowhere else"). README scenario 19 still cites CA 3.2 for this permission.
   - Fix: "A project's students may show its Course Private Information at a Private Course Event, but must use Reasonable Care to ask anyone seen recording it to stop and delete the recording. They are not responsible for what attendees who are not Signers do with it."

10. **PA 2.3(d) was cut.** DECISION.
    - Before: "(d) follow Course Agreement Section 3.4 on generative AI tools."
    - Problem: the duty itself survives through CA 3.4. But a generative-AI breach is no longer a breach of PA Section 2, so the bracketed exception in PA 5.4, "[, or from a Signer's ordinary breach of Section 2]", no longer reaches it. For example, pasting Course Private Information into a Harvard tool that Partner has not approved breaches CA 3.4 but arguably not PA 2.2(b).
    - Recommendation: restore (d), which is 11 words. The alternative is to make the PA 5.4 bracket read "Section 2 or Course Agreement Section 3".

11. **PA 3.5: recording without consent is no longer permitted.** MECHANICAL.
    - Before: "A student Signer may also record video demonstrations, with Confidential Information removed, and share them non-publicly ... That sharing needs Partner's consent ..."
    - After: "With Partner's consent, ... a student Signer may also share recorded video demonstrations ..."
    - Problem: the permission to record without consent is gone. Recording a demo that shows Course Private Information, for later job use, now arguably breaches PA 2.3(a).
    - Fix: "A student Signer may also record video demonstrations, with Confidential Information removed, and, with Partner's consent, which Partner must not unreasonably withhold, share them non-publicly (for example, on a password-protected website)."

12. **CA 6.1: the bracket lost its closing comma.** MECHANICAL.
    - After: "certify the Course instructor's permission for the project[, unless Section 2.4(b) applies] and approval of every choice that is not Open Science."
    - Problem: with the bracket kept, the sentence reads "unless Section 2.4(b) applies and approval of every choice", so the capstone exception appears to swallow the approval rule. The "before" text closed the clause with a comma.
    - Fix: "[, unless Section 2.4(b) applies,] and approval".

13. **PA 1.3: the sponsorship sentence was cut.** MECHANICAL.
    - Before: "Partner sponsors the Project as part of an academic course."
    - Problem: PA 5.5, the owner's text, rests consideration on "its sponsorship". This sentence was the only place the PA said Partner sponsors the Project. The PA defines "Partner" in its intro as "the partner named below", not through CA 1.2's "sponsor".
    - Fix: "**1.3 Coursework.** Partner sponsors the Project, which is coursework. The Course Staff alone ..."

14. **CA 7.4 and the PA 5.4 bracket: "arising out of" now limits the exclusion.** DECISION.
    - Before: "... or other loss or damage. This covers anything arising out of or relating to ..."
    - After: "... or other loss or damage arising out of or relating to ..."
    - Problem: before, the first sentence had no limit. Now the exclusion is limited to losses connected with the Course. This narrows it, but it is probably how a court would have read the earlier text, and it is more enforceable.
    - Recommendation: keep the trimmed text, and record it in the README as a clarification.

15. **CA 7.4 bracket: "that member" has no antecedent.** MECHANICAL.
    - After: "... or protect one who intentionally misuses information ... [Nor does it cover liability resulting from the gross negligence or willful misconduct of that member of the Course Staff or of Harvard.]"
    - Problem: "one" replaced "a member of the Course Staff", so "that member" now points to nothing. Before, it pointed to the member who misused information, which was also wrong. "Nor does it" is otherwise fine.
    - Fix: "[Nor does it cover the liability of Harvard, or of a member of the Course Staff, for their own gross negligence or willful misconduct.]"

16. **Smaller wording losses.** MECHANICAL. Restore as shown.
    - (a) **CA 5.7(e):** "Patents and patent applications on the work transfer with it" became "Patents and patent applications transfer with the work", and "ends any exclusive license in the work" became "ends any exclusive license". Put back "on the work" and "in the work".
    - (b) **CA 8.5(f):** "to the email and telephone it gave" became "to its own email and telephone". Put back "the email and telephone it gave".
    - (c) **PA 3.6:** "... or disclose that data, or disclose the software's source code without Partner's written consent" now lets the consent attach to the limits on data too. Fix: "... or disclose that data, or, without Partner's written consent, disclose the software's source code."
    - (d) **PA 1.4:** "any Signer, Harvard, or anyone else in the Course" became "anyone". It can now be read to conflict with a Partner that buys under CA 5.7(d). Restore the "before" words.
    - (e) **CA 8.4:** in "and its "current" students", "its" can refer back to "A reference". Use "a project's "current" students".
    - (f) **CA 1.2:** in "from evaluating that project's work", "that project" lost its antecedent when "the Partner of a project in the Course" became "a Partner". Use "from evaluating that Partner's project".
    - (g) **PA 3.3:** in "... the "Publication Hold Period" ends, which starts when ...", the "which" clause is hard to follow. Fix: "... ends. That period starts when ...".

17. **README.** MECHANICAL.
    - Scenario rows 3 and 10 cite PA 1.5 for signing times that PA 1.5 no longer states. In row 10, cite CA 2.2 instead; in row 3, drop PA 1.5.
    - Row 19 relies on CA 3.2's permission, which item 9 restores, and on PA 1.2's list of who may enforce, which the trim cut. Cite CA 8.3 as well.
    - The trimming list leaves out two changes. PA 1.1 dropped "and no one answers for a Teammate"; this is register A3, and "responsible only for their own acts" still carries it. PA 4.2 got a new heading.
    - The two word-count tables disagree: 4,380, 530, and 145 in one; 4,382, 532, and 144 in the other.

**Checked and found faithful:**
- the Course Staff rules in CA 1.2 (the Section 4.1 exclusion now matches R8);
- CA 8.3, which gives the same rights in a new order;
- PA 6.1's cut list of the Partner Contacts' powers. The general authority covers each power, and the specific grants remain in PA 2.5 and 3.6, CA 5.6(c), and the joinder page;
- PA 4.3(c), merged and renumbered. The scenario rows that cite PA 4.3 (1, 4, 5, and 8) are correct, and nothing else cites the old 4.3(e), 4.3(f), or 2.3(d);
- PA 1.2's cut list of who may enforce against Partner (CA 8.3 gives the same result);
- CA 2.1, 3.1, 6.2, 6.3, 8.2, and CA 8.5(a), (b), (c), and (e);
- PA 4.4, 4.5(e), and 4.5(f).

**Style:** no "shall"; every note for counsel has the correct opening; no line is only underscores; every changed list has its Oxford comma; no AI model names. Several merges, though, made sentences of 45 to 50 words, against the brief's rule of short sentences: CA 5.7(f), PA 3.6's first sentence, and PA 6.3's first sentence.

## The five points the drafter left alone

**(a) Who may receive Confidential Information.** DECISION.
- **CA 1.3 against PA 2.2(c).** The CA governs conflicts (CA 1.5 and PA 1.2). So CA 1.3's "only that agreement's signers may receive it" would override the owner's "or as Partner approves in writing" in PA 2.2(c).
  - Fix CA 1.3: "A Partner may also mark information as "Confidential Information" under its Project Agreement, which says who may receive it." This is shorter. CA 4.3 still keeps out Course Staff who have not signed.
  - Leave the cover page as it is: it is the owner's text, and PA 2.2(c) is the operative rule in the same document.
- **PA 2.5(b) against PA 2.2(b).** PA 2.5(b) requires keeping retained Course Private Information within the Course Community, with no exception for Partner's approval.
  - Recommendation: delete PA 2.5(b). PA 2.2(b) and 2.3 still apply for the Confidentiality Period, register C13 does not list this step, and no document cites PA 2.5's paragraphs.
  - Alternative: "(b) share any Course Private Information they retain only as Section 2.2(b) allows;".

**(b) Copies for publication review.** DECISION.
- CA 8.5(c) treats "a written offer or request that starts a period for a response" as a notice, needing three tries and a text. The PA 3.3 copy starts both the 30 days and the Publication Hold Period, and the CA governs. So a student who relies on PA 6.2's "count as received when emailed" may find the copy never counted.
- Recommendation, consistent with R14 ("every notice gets three tries"): treat copies that start a period as notices. Fix PA 6.2's second sentence: "Copies and requests for consent go to the Partner Contacts. One that starts a period for a response, such as a copy under Section 3.3, is a notice; any other counts as received when emailed to the addresses Partner most recently gave."
- Alternative, if the owner wants such copies to count when emailed: the exception must go in CA 8.5(c) itself, because the CA governs.

**(c) A text to one Partner Contact's phone.** DECISION.
- Recommendation: yes, delivery to any one Partner Contact's number should be enough; under CA 8.5(f) the sender must still text all of them. Also, a Partner that lets every number lapse without updating them should not be able to stall, which is R18's logic.
- Fix CA 8.5(d): "(d) An unacknowledged notice does not count until a text message or voicemail has been delivered to the telephone number the recipient gave (for a Partner, to at least one of its Partner Contacts' numbers), unless the recipient gave no number, or the number no longer works and the recipient did not report a change as these agreements require."
- Pair this with problem 7.

**(d) An unnamed "Other license" on the Project Election.** MECHANICAL.
- Mirror the rule in the PA intro. Fix CA 6.1: "A blank choice, more than one checked choice (other than the MIT License and the Apache License 2.0 together), an "Other license" that is not named, or a team-only choice on an individual project gives way to the default."

**(e) "Reasonable Care" is used one sentence before its definition.** MECHANICAL.
- Define it where it is first used, at no cost in words. Fix CA 3.1: "A Signer who receives one must use "**Reasonable Care**" (what a reasonable person in their position would do, given their role, the information, and when they learned it was not meant for them) to (a) tell the person who disclosed it; (b) not copy, forward, or otherwise use it; and (c) permanently delete every copy, including notes, files, and photos. Taking steps (a) to (c) promptly after learning of the disclosure is Reasonable Care."
- The last factor fits CA 3.2 and PA 2.3(b) poorly, but this does no harm.

## Further cuts

The drafter's list of cut options was not among the files I was given. The README says only that going further "would mean dropping decisions or moving binding text into exhibits or forms". I have therefore assessed the candidates myself.

**Safe (no rule changes):**
- Delete PA 2.5(b), as in (a): about 10 words saved, and a conflict removed.
- Reduce CA 1.5 to "**1.5 Conflicts.** If Project Terms conflict with this agreement, this agreement governs." That saves about 20 words. The rule that Project Terms add to the CA and do not change it follows from this, and PA 1.2 repeats it.
- In CA 3.1, cut ", but intentional use or disclosure afterwards is not protected". Step (b) already forbids any use. About 9 words saved.

**Not safe without the owner:**
- moving binding text into forms or exhibits;
- cutting CA 5.4 (brief decision 6 states its points);
- shortening PA 1.2's list of what binds Partner;
- shortening Exhibit B.

Further cuts to the notes for counsel save nothing that counts: the notes are removed before use.

**Net effect of the fixes:** they add about 45 words to the CA and about 50 to the PA, so the trim still saves about 320 and about 310 words respectively.

## Overall assessment

The trim mostly did what it promised. The owner's text, the forms, and the exhibits are untouched. The renumbering is clean, and most merges keep their meaning. But about fifteen merges changed a rule slightly, and five of them matter:
- the widened "commercial use", which gives a holdout a defense;
- the loss of the Project Work Product list, which puts the patent assignment at risk;
- the unmarked "private" academic uses, which put patents at risk;
- the weakened trigger for the right to purchase;
- the unclear duty to credit Teammates.

Each is fixed by restoring the earlier words, at little cost. Of the five points the drafter left alone, (a) and (b) are real conflicts that the CA's governing rule would resolve against the owner's approved PA text, so they should be fixed rather than left.
