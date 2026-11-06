# Review of approach B ("tiered short forms")

Files reviewed (none edited, no git run), all in `/home/user/seas-partner-docs/agreements/v0.6/approach-b/`: `course-rules.md` (CR), `open-science-agreement.md` (SF), `restricted-project-addendum.md` (RA), `team-project-form.md` (TPF), `harvard-approval.md` (HA), and `README.md`. I checked them against the brief, the scenarios, the decision register, the relevant parts of v0.5, and the shared Student Guide.

I checked every cross-reference in the five documents and in the README tables, and each one exists. The findings below are about substance, not broken citations.

## Findings, most important first

**1. The buyout may not complete against the holdout it is designed for. DECISION.**
- **Where:** CR §5.3(c) and (d), and CR §1.3.
- **Text:** "the teammate assigns their ownership share in that work to the company when the company pays the price … This section is the assignment, and the teammate must sign documents confirming it." Also: "Everyone bound by these rules may enforce them against each other."
- **Problems:**
  - (a) **Payment can be blocked.** The assignment only takes effect on payment. Under Alternative 1 the price is usually equity: limb (ii) is equity, and founders are usually paid in shares. Issuing shares normally needs the recipient's signed subscription agreement, and raises securities-law issues. A scenario-8 holdout "won't sign anything", so they can stop the payment and the assignment never happens. The README's claim that the share passes "without their signature" does not hold under Alternative 1.
  - (b) **The company cannot enforce.** The Student Company is not a party to the CR and is not named in CR §1.3. So the company, which is the assignee, cannot enforce §5.3 or the duty to sign confirming documents.
  - (c) **The company is not bound.** For an FSL assignment, RA §4.2(f) and TPF §3(g) require the company to agree in writing first to be bound. The buyout has no such condition, so the company would take the share free of the Project Agreement's confidentiality terms. Partner's and teammates' written non-exclusive licenses probably survive under 17 U.S.C. § 205(e).
  - (d) **No fallback.** If the holdout won't sign confirming documents, nothing lets anyone sign for them.
- **Fix:**
  - Replace (c) with: "Otherwise, the teammate assigns to the company all their right, title, and interest in that work, including intellectual property rights, when the company pays or tenders the price[, or under Alternative 2 promises in writing to pay it]. If the price includes equity and the teammate does not accept it within 30 days after a written offer, the company may instead pay its fair market value in cash. This section is the assignment. The teammate must sign documents confirming it, and appoints the company as their attorney-in-fact, coupled with an interest, to sign them if they have not done so within 30 days after a request."
  - Add (f): "Before the assignment takes effect, the company must agree in writing to be bound by the Project Agreement as the teammate was."
  - Add to CR §1.3: "A Student Company may enforce Section 5.3 as it benefits that company."
  - Add to the note for counsel: "(5) whether a forced transfer at this price, in rules every student must accept, is unconscionable; (6) whether 'actively developing' and 'using it commercially' are definite enough; (7) the power of attorney and the cash alternative."

**2. The teammates' license does not say that no co-owner owes another an accounting of profits. MECHANICAL.**
- **Where:** CR §5.1.
- **Text:** "each student grants each teammate a perpetual, irrevocable, worldwide, non-exclusive, royalty-free license to use and exploit it for any purpose."
- **Problem:** A co-author's duty to account comes from co-ownership, not from any license. So "royalty-free" does not clearly waive it. Only the FSL terms waive it (RA §4.2(e) and TPF §3(e)), so the waiver is missing in the scenario 8 and 9 cases where it matters most. The shared Student Guide already tells students this (line 54, a bracketed sentence plus a note for counsel at line 85). Under the brief, the agreements must not depend on the Guide. The grant also does not say it is made "under their rights".
- **Fix:** Replace §5.1 with: "Whenever students own their Project Work Product, alone or jointly with a partner, each student grants each teammate a perpetual, irrevocable, worldwide, non-exclusive, royalty-free license, under the student's rights in it, to use and exploit it for any purpose. No student owes another an accounting of profits, or any other payment, for any use or licensing of that work that these rules or the Project Agreement allow. A teammate may not transfer or sublicense the license, except that it extends to their Student Company (Section 5.2). It is subject to Section 5.3 and to the Project Agreement."
- Add a note for counsel asking counsel to confirm that this displaces the duty to account. Then TPF §3(e) can be deleted. Keep RA §4.2(e), because it covers Partner.

**3. The SF's integration clause could wipe out the CR among the Students. MECHANICAL.**
- **Where:** SF §1.1, SF §1.4, and SF §7.4.
- **Text:**
  - SF §1.1: "It is the only agreement for the Project."
  - SF §7.4: "This agreement, with any Restricted Project Addendum, is the entire agreement between the parties about the Project."
  - SF §1.4: "Every Student has agreed to the Course Rules for the Course".
- **Problems:**
  - The Students are parties to each other under the SF. Its entire-agreement clause leaves out the CR, which is the prior agreement among those same Students about this Project's work: teammates' licenses, the buyout, copies, and credit. A holdout could argue that the SF superseded CR §5.
  - Nothing says which document governs if the CR and the SF conflict (register A13). CR §1.2 only says a Project Agreement "may add to these rules".
  - SF §1.4 is only a recital. A Student who never completed the electronic acknowledgment is not bound to the CR at all.
- **Fix:**
  - SF §1.1: change to "Together with the Course Rules, it is the only agreement for the Project."
  - SF §7.4: change to "This agreement, with any Restricted Project Addendum and the Course Rules, is the entire agreement between the parties about the Project. The Course Rules continue to apply among the Students. If they conflict with this agreement, this agreement governs, but it does not reduce the Course Rules' protection of anyone who did not sign it."
  - SF §1.4: change to "Every Student has agreed, and by signing this agreement agrees again, to the Course Rules for the Course".
  - TPF: add a matching sentence to the opening paragraph.
  - Re-signing through Acrobat Sign also gives a second signed writing for the CR's conditional assignments under 17 U.S.C. § 204(a).

**4. Contract formation under the CR's electronic acknowledgment is under-specified.**
- **Where:** CR §7.2, the CR Acknowledgment, CR §4.2, and CR §4.3.
- **Text:**
  - Acknowledgment: "I agree to these Course Rules with every other student and member of the Course Staff in the Course."
  - CR §7.2: "Electronic signatures and acknowledgments … are valid. Each signer confirms that they are of the age of majority."
- **Problems and fixes:**
  - (a) **MECHANICAL.** Hundreds of people acknowledge at different times, and nothing binds an early signer to later ones. There is no counterparts clause.
    - Add to CR §7.2: "These rules form one agreement among everyone who acknowledges them for the same offering, whenever they do so. Each acknowledgment is a counterpart."
    - Add to the acknowledgment: ", including those who agree later".
  - (b) **MECHANICAL.** The README lists four conditions that make an electronic acknowledgment valid: full text shown, an affirmative step after a Harvard login, a record kept and a copy given, and done before choosing a Project. None of them appears in any operative document, and the CR does not require acknowledgment before choosing a Project.
    - Add to CR §4.2: "Each student must acknowledge these rules before choosing a Project."
    - Put the four conditions in a note for counsel at the acknowledgment, or as a condition in HA §1.
    - Electronic assent can satisfy § 204(a) under the federal electronic-signatures law (see *Metropolitan Regional Information Systems v. American Home Realty Network*, 722 F.3d 591 (4th Cir. 2013)). But a conditional transfer of future work, signed before the work exists, still needs counsel's confirmation.
  - (c) **MECHANICAL.** CR §4.3 ("they assign or license that work accordingly") is a conditional assignment made through the electronic acknowledgment, but it has no note for counsel. The brief requires one wherever a draft relies on a legal assumption. Add one.
  - (d) **DECISION.** Nothing says what happens if a student refuses to acknowledge the CR. Recommend: "A student who does not acknowledge these rules may not take part in a Project."
  - (e) **DECISION.** The CR is now required of every student, and some Harvard students are under 18, so the age-of-majority confirmation will be false for some of them. Recommend a note for counsel on minors.

**5. The RA's default rule does not work with its own layout. MECHANICAL.**
- **Where:** RA §1.1, and TPF §1.
- **Text:**
  - RA §1.1: "If a choice is left blank, or more than one box is checked on a line, the default applies."
  - TPF §1: "or more than one box is checked (other than MIT and Apache together)"
- **Problem:**
  - Box A and box B put each option on its own rendered line (`\` line breaks). Checking two options in box A or box B is never "more than one box … on a line", so the brief's default rule never applies to them.
  - The joint-ownership line holds three boxes. Correctly checking "jointly own" plus one FSL variant is two boxes on one line, which literally triggers the default.
  - Drafter decision 6 (no FSL variant checked means FSL-1.1-MIT) exists only as a "(default)" label, not in the text.
  - The README's open question about checking both Course Private boxes is therefore not settled either way by the text.
  - In the TPF, "more than one box" with no scope could be read across the whole form.
- **Fix:**
  - RA §1.1: "If a box (A to D) is left blank, or more than one option is checked in it, that box's default applies. Each line of box C is a separate choice. If joint ownership is checked with neither or both FSL variants, FSL-1.1-MIT applies."
  - TPF §1: "If box A, B, or C is left blank, or more than one option is checked in it (other than MIT and Apache together), that box's default applies."

**6. The SF has no third-party-beneficiary clause, so other partners and Harvard rely on an indirect chain. MECHANICAL.**
- **Where:** SF §1.4, and the HA note for counsel.
- **Text:** SF §1.4: "Sections 2.1 …, 2.5 …, and 6.3 … bind Partner as if it had signed the Course Rules." The HA note says Harvard relies on CR §6.3 "as a third-party beneficiary … of each Open Science Project Agreement".
- **Problem:** No SF clause lets anyone outside the SF enforce it against Partner. In v0.5, §11.7(a) let other partners enforce the inadvertent-disclosure rule against Partner, and §11.7(c) did the same for Harvard and Course Staff on §9.3 (register H2). Here those rights depend on reading "as if it had signed" together with CR §1.3.
- **Fix:** Add to SF §1.4: "Each other partner in the Course may enforce Course Rules Section 2.1 against Partner as it protects that partner's information, and Harvard and each member of the Course Staff may enforce Course Rules Section 6.3 against Partner."

**7. Partners are not bound to keep other projects' Course Private Information. DECISION.**
- **Where:** SF §1.4 and CR §2.2.
- **Problem:** Partner representatives attend the poster session as invited guests and see every team's Course Private posters. CR §2.2 binds only students and Course Staff, and SF §1.4 does not bring CR §2.2 in for Partner. So nothing stops a partner using a rival project's Course Private Information. v0.5 had the same gap. The brief says the course-wide rules "protect every project".
- **Fix (recommended):** add CR §2.2 to SF §1.4, "as it applies to information Partner receives through the Course". Also add CR §2.2 to the enforcement sentence in finding 6. If this is not adopted, add it to the R-8 note.

**8. CR §6.3 is now a release that every student and staff member must give, and it shields Course Staff from their own CR duties. DECISION.**
- **Where:** CR §6.3.
- **Text:** "neither Harvard nor any member of the Course Staff is liable to any student, staff member, or partner for any loss arising out of these rules, a Project, a Project Agreement, or Project information … It also does not protect a staff member who intentionally misuses information in breach of a Project Agreement they signed".
- **Problems:**
  - In v0.5 this release bound only project signers. Now every enrolled student and every TA gives it, and it covers tort and employment claims "arising out of … a Project". Drafter decision 14 narrowed it from "the Course" to Projects, which is good, but it is still this broad.
  - The carve-out covers only Project Agreements. So a TA who deliberately leaks another project's Course Private Information (CR §2.2), shares grades (CR §3.2), or ignores a reassignment request (CR §4.3) is protected.
- **Fix:**
  - Narrow to "any loss arising out of the use or disclosure of Project information or Project Work Product, or out of anyone else's breach of these rules or a Project Agreement".
  - Widen the carve-out to: "It also does not protect a staff member who intentionally breaches these rules or misuses information in breach of a Project Agreement they signed, or prevent an injunction against them under these rules or that agreement."
  - Extend the R-5/R-6 note to cover whether a mandatory release is enforceable, and whether it should exclude personal-injury and employment claims.

**9. The liability-limit placeholder now reaches disputes between Students under the CR. DECISION.**
- **Where:** SF §6.3 and SF §6.4.
- **Text:** "neither Partner nor any Student is liable to the other, or to any other partner in the Course, for any claim … arising out of this agreement, the Project, or the Course". SF §6.4 lets only Partner seek an injunction.
- **Problem:** The Students are now parties to each other, and "the Course" covers CR §5. If counsel adopts this text, teammates lose damages for breaches of the teammate license, the copies duty, credit, or the buyout. They also get no express injunction right. "to the other" is wrong when there are several Students.
- **Fix:**
  - Change the scope to "arising out of this agreement or the Project", and "to the other" to "to each other".
  - Add: "This section does not apply to claims between Students under the Course Rules."
  - Make SF §6.4 apply to every party for the intellectual property terms.
  - Flag this interaction in the bracketed note for counsel.

**10. Drafter decision 19 widens publication review beyond v0.5 for every review case. DECISION.**
- **Where:** RA §3.2.
- **Text:** "any publication, presentation, or other public disclosure about the Project".
- **Problem:** v0.5 §5.2 (kept by brief items 5 and 11) reviewed only disclosures "relating in any way to information provided by Partner". The drafter's reason ("review is automatic when Partner owns") justifies the wider scope only when Partner owns. When a partner merely opts into review on a students-own project, it now reviews the students' own work.
- **Fix (recommended):** "any publication, presentation, or other public disclosure that relates to Partner Information or, if Partner owns the Project Work Product, to Project Work Product".

**11. New personal duties for Course Staff that nobody asked for (drafter decisions 12 and 13). DECISION.**
- **Where:** CR §2.2 and CR §4.3.
- **Text:**
  - CR §2.2: "The Course Staff must tell attendees at each Private Course Event not to record or share Course Private Information."
  - The definition in CR §2.2 includes "such as a class".
  - CR §4.3: "The Course Staff must honor the request, if necessary by approving an individual Project."
- **Problem:**
  - These are contractual duties of each TA and instructor. Every student can enforce them, and partners can enforce the §2.2 duty (CR §1.3).
  - Because Private Course Events include every class, the warning is due at every class.
  - The §4.3 duty takes away the instructor's discretion to approve individual projects, which the brief preserves.
  - The brief says the Course Staff "will honor" reassignment, which states a fact rather than creating a personal duty.
- **Fix (recommended):**
  - CR §2.2: "Attendees at each poster session, video session, or other Private Course Event open to guests will be told not to record or share Course Private Information."
  - CR §4.3: "The Course Staff will honor the request, by assigning the student to another Project or, with the instructor's approval, to an individual Project."

**12. "Signer" in the RA is ambiguous: it literally includes Partner and may exclude later joiners. MECHANICAL.**
- **Where:** RA §2.3, §2.4, and §2.6.
- **Text:** "only to the signers of this addendum: the Students and any Course Staff who sign it", "Each signer must: use Restricted Information only for the Project and the Course", and "each signer must: delete or destroy all Confidential Information".
- **Problem:** Partner signs the RA, so on a literal reading it must use its own data only for the Project and delete its own Confidential Information. Students who join later sign the SF joinder page, not the RA.
- **Fix:** In RA §2.3, write "the Students (including any who join later) and any Course Staff who sign this addendum (each, a "**Recipient**")", and use "Recipient" in place of "signer" in RA §2.3 to §2.6.

**13. The SF still calls the Project Open Science after an RA is signed, and the RA's precedence rule is ambiguous. MECHANICAL, plus one DECISION.**
- **Where:** the SF preamble, RA §1.1, the RA header, and RA §1.3.
- **Text:**
  - SF preamble: "The Project is Open Science."
  - RA §1.1: "This addendum changes the Short Form only where it says so, and governs where the two differ."
- **Problems:**
  - With an RA attached, the SF preamble is false.
  - "Only where it says so" works against "governs where the two differ". For example, RA §4.3(a) assigns the work to Partner but never says it replaces SF §3.2 ("The Students own their Project Work Product").
  - Nothing deals with a second RA, although RA §1.3 allows the RA to be "change[d] later".
  - DECISION: a blank Addendum Date on an RA signed mid-course defaults to the Effective Date. That reaches back over the whole Open period, which drafter decision 20 meant to avoid.
- **Fix:**
  - SF preamble: "The Project is Open Science unless Partner and the Students sign a Restricted Project Addendum, which then becomes part of this agreement and governs where the two differ."
  - RA §1.1: "This addendum governs where it differs from the Short Form."
  - Add: "A later addendum replaces any earlier one from its Addendum Date."
  - Change the blank-date default to "the date the last party signs this addendum, or the Short Form's Effective Date if both are signed together."

**14. If a TA contributes code anyway, the documents do not say who owns it (scenario 24). DECISION.**
- **Where:** CR §3.1 and CR §1.2.
- **Text:** "They contribute no intellectual property to any Project and claim no rights in Project Work Product." The definition reads: "'Project Work Product' means all work that students create".
- **Problem:** A TA's code is not Project Work Product, so it is not licensed or assigned. Harvard, as the TA's employer, may own it, which clouds title.
- **Fix:** "They must not contribute intellectual property to any Project. If one does, they [license / assign] their rights in the contribution on the same terms as the Project's students, to the extent they own them." Add a note for counsel on Harvard's rights as employer.

**15. The TPF has no governing law, electronic-signature, severability, or age terms. MECHANICAL.**
- **Where:** TPF §6.
- **Problem:** CR §7.2 covers only "these rules". Exhibit D in v0.5 brought in §11.1, §11.5, §11.8, and §11.10.
- **Fix:** Add to TPF §6: "Course Rules Section 7.2 applies to this form."

**16. On a joint-ownership project, the buyout reaches non-software work. DECISION.**
- **Where:** CR §5.3 and the last line of RA §4.2.
- **Text:**
  - CR §5.3: "It never applies to software under an FSL license, or when a partner owns or co-owns the work."
  - RA §4.2: "The Students own the rest of the Project Work Product".
- **Problem:** On a joint-ownership project with box C "None" for everything else, the buyout applies to documentation and data. The brief says "The buyout does not apply under joint ownership (FSL)." The README does not flag this consequence of drafter decision 5.
- **Fix (recommended, following the brief):** "It never applies to a Project with joint ownership under an FSL license, or when a partner owns the work."

**17. Smaller buyout drafting points. MECHANICAL.**
- **Where:** CR §5.3.
- **Fixes:**
  - (a) In (c), "or under Alternative 2 promises in writing to pay it" must be bracketed, or it survives once Alternative 1 is chosen.
  - (b) In (d)(ii), add "measured on the date of the notice".
  - (c) "(if the amounts differ, the average)" is the drafter's choice, so bracket it.
  - (d) "Ownership share in that work" leaves out patents. The fix in finding 1 uses "all their right, title, and interest … including intellectual property rights".
  - (e) In (a), add "The notice must state the price and the terms on which the teammate may join."

**18. Student Company sublicensing is unclear and conflicts with the FSL limits. MECHANICAL.**
- **Where:** CR §5.1 and §5.2, RA §4.2(d), and TPF §3(d).
- **Text:** "except through a Student Company" (CR §5.1) and "A Student Company may give its customers the rights they need to use its products" (CR §5.2), against "No joint owner may license or distribute the Project Software except under the checked FSL license" (RA §4.2(d)).
- **Fix:** Use the §5.1 wording in finding 2. In §5.2, add: ", subject to any limits in the Project Agreement on licensing jointly owned software."

**19. Changes now need only the Students "then taking part" (drafter decision 10). DECISION, low.**
- **Where:** SF §7.2 and TPF §6.
- **Problem:** Register B5 requires "every signer". The change is sensible, since leavers are not bound, but brief item 11 keeps the register unchanged in substance.
- **Recommendation:** Keep it, and record it as an owner-approved change to B5.

**20. Errors in the README. MECHANICAL.**
- **Scenario 7:** "Other disclosures wait 30 days plus the Publication Hold Period (RA §3.2)" is wrong. Under RA §3.2 the hold runs from Partner's receipt of the copy, at the same time as the 30 days. Replace with: "Other public disclosures need a copy to Partner at least 30 days before submission, and wait until Partner consents or the Publication Hold Period (which runs from Partner's receipt) ends."
- **Scenario 13:** "On a share purchase or merger, Partner stays the party" is in no document, and it is wrong for a merger in which Partner does not survive. Replace with "On a share purchase, Partner stays the party; on a merger, the survivor succeeds by law (counsel to confirm)."
- **Who-signs table:** "Course instructor | Nothing" contradicts the row above it, because instructors sign the CR. Write "Nothing beyond the CR".
- **Weaknesses:** "enforces the rest as a third-party beneficiary" overstates CR §1.3, which lists only §2.1, §2.2, §2.4, and §4.3. Write "enforces CR §2.1, §2.2, §2.4, and §4.3".

**21. Small drafting fixes. MECHANICAL.**
- CR §5.2: "no competitor of the partner may control it" reads as a ban on third parties. Change to "the company must not be controlled by a competitor of the partner."
- CR §2.4: "everyone must use Harvard accounts and Harvard's generative AI tools, unless a partner provides its own tools" reads as an order to use AI, and "a partner" means any partner. Change to "Anyone who uses generative AI for Course work must use Harvard accounts and Harvard's tools, unless a partner provides its own tools for its Project."
- SF §2.2, third bullet: "Partner must disregard and delete any that it receives" could cover the Students' own work. Change to "ask for any student's grades or other education records. If Partner receives any, other than work the Students give it under this agreement, it must disregard and delete them."
- SF §2.2, second bullet: "that Project's partner and students consent" leaves out projects without a partner. Add "(or, without a partner, its students)".
- CR §2.5: the list mixes its subjects. Change to "is or becomes public through no breach; was known to them without restriction before they received it; came from a third party that was free to share it; or was developed by them independently, without using it."
- RA §4.2(f) and TPF §3(g): "carries" is a duty. Change to "must carry".
- RA §2.2: "Partner must not give Confidential Information" is circular, because Confidential Information cannot exist under that choice. Change to "must not give anything that it needs kept more confidential than Course Private Information."
- CR §2.2: "never give it to a partner" literally includes the project's own partner. Change to "to any other partner".

**22. Capstone wording now adds "where the program allows" (register B7). DECISION, low.**
- **Where:** CR §4.3.
- **Recommendation:** Confirm that the qualifier is intended. v0.5 said the student "was given the opportunity" to write a thesis.

**23. Defined terms. MECHANICAL.**
- **Where:** the SF cover, CR §1.1, CR §5.4, and the license names throughout.
- **Problems:**
  - "Partner Contacts" and "Effective Date" are cover-page labels that are never defined.
  - "Harvard" is used in CR §1.1 but defined in §6.1. "End Date" is used in CR §5.4 but defined in §7.1.
  - "FSL" is never spelled out anywhere, and no license is identified by its full name (v0.5 used "Creative Commons Attribution 4.0 International (CC BY 4.0)", "Functional Source License, Version 1.1 …").
- **Fix:**
  - Define the terms at first use: for example, "Partner Contacts (individuals who act for Partner on the Project; the "**Partner Contacts**")", and move the definition of Harvard into §1.1.
  - Give each license's full name once, in CR §4.1 and RA box B.

**24. The v0.5 §11.9 definition of reasonable care was dropped. DECISION, low.**
- **Where:** CR §2.1.
- **Problem:** CR §2.1 keeps the safe harbor ("Doing this promptly is reasonable care") but drops the standard itself: "considering the recipient's role in the Course, the nature of the information, and when the recipient learned it was not meant for them".
- **Fix:** Recommend restoring it as one sentence.

**25. Notes for counsel do not start with the required text. MECHANICAL.**
- **Where:** CR (two notes) and RA (one note).
- **Text:** "> **Note for counsel (R-8):**", "> **Note for counsel (R-5, R-6):**", and "> **Note for counsel (R-7):**".
- **Problem:** The brief requires notes to begin `> **Note for counsel:**`. A strip-before-use search on that exact text would miss these three.
- **Fix:** Change them to "> **Note for counsel:** (R-8) …", and the same for the other two.

## Scenarios

The documents give the answer the README claims, and the cited sections say it, for scenarios 1 to 6, 9 to 12, 14 to 18, and 23. The exceptions are below.

- **7:** The README states the hold timing wrongly (finding 20).
- **8:** The answer is unclear. The share may never pass if the price is equity, the company cannot enforce, and patents may not be covered (findings 1 and 17).
- **12:** This works, but nothing deals with a second RA, and a blank Addendum Date reaches back over the Open period (finding 13).
- **13:** The merger statement has no support in the documents (finding 20).
- **19:** Correct as far as it goes. But partner representatives are invited guests who are bound by nothing (finding 7).
- **20:** CR §2.3 covers only "confidential information". The risk that a current employer owns what the student writes appears only in the non-binding Guide.
- **21:** This now depends on "where the program allows" (finding 22).
- **22:** Correct. However, the partner learns that Harvard has rights only from the CR §6.2 checkbox. Consider a line on the SF cover.
- **24:** The rule is stated, but what happens if the TA contributes anyway is not (finding 14).

## Simplicity

**26. The common case is short to sign but not short to read. DECISION.**
- **Problem:** The SF relies on the CR for Project Work Product, Course Community, Course Private Information, Confidential Information, Duration, End Date, and Confidentiality Period, and it binds Partner to three CR sections. An Open Science partner therefore really reads about 4,000 words, not the README's "about 2,100 … never sees terms it does not use".
- **Recommendation:**
  - In SF §1.4, list the CR terms and sections Partner relies on (§1.2, §2.1, §2.2, §2.5, §6.3, and §7.1).
  - Correct the README claim.

**27. Text stated twice, which can be cut. MECHANICAL.**
- RA §2.4: "These duties last for the Confidentiality Period." CR §7.1 already says this.
- SF §7.4: "Sections 4.1 and 4.2 have no time limit." The sentence before it already says the agreement continues.
- TPF §3(e), once finding 2 is adopted.

**28. The TPF's project-type box is redundant. DECISION.**
- **Problem:** The box is redundant because "the number of signers governs" (drafter decision 21).
- **Recommendation:** Delete the box and write "With one signer, this is an individual project."

**29. Confusing passages. MECHANICAL.**
- **SF §4.3** ("with every Student treated as Partner's teammate … as if they were teammates"). Rewrite as: "When Partner publishes about Project Work Product, it must follow Course Rules Section 5.4 as if every Student were its teammate. When a Student publishes, Partner's employees who contributed are offered credit as teammates are."
- **CR §2.2:** It holds the course-wide definitions under the heading "Other Projects' information", where no reader will look. Move the definitions to §1.2.
- **CR §5.3(c) and (d):** Each is a single long sentence. Split them after the price alternative is chosen.

**30. FSL mechanics are written out twice. DECISION.**
- **Problem:** RA §4.2 and TPF §3 each spell out the FSL mechanics, at about 230 words each.
- **Recommendation:** Accept the duplication, since TPF readers should not need the RA. Shorten TPF §3 once the no-accounting rule moves to the CR.

## Style and Markdown

**31. No problems found apart from findings 21 and 25.**
- I scanned all six files, by script and by reading.
- I found no "shall", and no AI model names or identifiers.
- No line is made only of underscores, every blank is labeled, and harvard.edu email fields use the required form.
- Every README table has consistent columns. No trailing `\` ends a paragraph, and no binding document addresses the reader as "you".
- I found no list of three or more missing its Oxford comma. Every candidate the scan raised was a two-item list or a clause comma.

## Overall assessment

**Strengths:**
- The tiering works. A partner that stays Open Science signs one short form with two license choices.
- Restrictions are opt-in, with defaults printed on the form.
- Course-wide rules are stated once, and every student and staff member signs them.
- Students enforce the rules among themselves directly, and reassignment is now covered by rules the student signed before any project work.
- The TPF reuses the same license choices as the partner forms.
- Cross-references are accurate, and the style rules are followed closely.

**Weaknesses:**
- The architecture's legal weight rests on two links that the draft leaves under-built.
  - The first is the CR's electronic, many-party acknowledgment. It now carries conditional copyright transfers and a release that every student must give.
  - The second is how the SF incorporates the CR. Partners are bound to only three sections, no clause lets other partners or Harvard enforce against Partner, and the SF's entire-agreement clause leaves the CR out.
- The buyout, the term most likely to be litigated, can be stalled by exactly the holdout it targets.
- A few drafter additions create new personal duties for Course Staff, or widen partner review beyond v0.5.

Most fixes are short and mechanical (findings 2, 3, 5, 6, 12, 13, and 15). Findings 1, 7, 8, and 11 need an owner's decision before counsel review.
