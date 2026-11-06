# Review of approach A (v0.6): Course Agreement and Project Agreement

Approach A carries every decision in the brief, but nine findings need fixing before counsel review. The worst is that the Course Agreement's enforcement clause shuts out Student Companies, and partners as assignees.

I read BRIEF.md, SCENARIOS.md, the decision register, the outline, the v0.5 sections I needed, and all four approach-a files in full. I edited no files and ran no git.

**Checked and clean:**
- No "shall", no AI model names, and no lines made only of underscores.
- Every blank has a label, and the harvard.edu email fields use the brief's wording.
- The README tables are well formed.
- A scripted scan plus a manual check of every hit found no missing Oxford commas.
- Every section the agreements cite exists and says what is claimed, except as noted in findings 1 and 13.
- The README word counts are accurate. My counts: Course Agreement 3,319 words plus 306 for the roster and Project Election; Project Agreement cover and joinder 760 plus 3,968 for the standard terms; Harvard approval 461.

Below, CA is the Course Agreement and PA the Project Agreement.

## Findings, most important first

**1. CA 8.3 shuts out people the Course Agreement gives rights to.** DECISION (strongly recommended)
- **Quote:** "Each partner of a project in the Course may enforce Sections 2.3, 3, and 4.3 as they protect that partner's information, and Harvard may enforce Sections 7.2 and 7.4. No one else has rights under this agreement."
- **Problem (a), the buyout (scenario 8):** A Student Company is not a signer. Yet CA 5.2 extends licenses to it, and in CA 5.5 it gives the notice, receives the assignment, and asks for documents. Under 8.3 it "has no rights", so the company the buyout exists for cannot enforce it.
- **Problem (b), reassignment (scenario 11):** In CA 2.3 a reassigned student "hereby assigns or licenses" work to the first project's partner. That partner may enforce 2.3 only "as [it] protect[s] that partner's information", and the IP half is not about information.
  - So register H2 ("a project a student left may enforce the reassignment terms") is lost, although brief item 11 keeps it.
  - "No one else has rights" also invites the argument that a non-party partner cannot claim through the assignment at all.
- **Problem (c), Course Staff (scenario 24):** Under "Partner owns", CA 4.1's fallback grant by Course Staff runs to a partner that has no rights under the CA.
- **Fix:** "**8.3 Enforcement.** Signers, including teammates, may enforce this agreement against each other directly. Each partner of a project in the Course may enforce Sections 3 and 4.3 as they protect that partner's information, and Sections 2.3 and 4.1 as they apply to that partner's project. A Student Company may enforce Sections 5.2 to 5.5 as they benefit it. Harvard may enforce Sections 7.2 and 7.4. No one else has rights under this agreement, apart from rights under a public license granted under Section 6.3." The rest of 8.3 stays as it is.

**2. Teammates' licenses never say that no co-owner owes another an accounting.** MECHANICAL for the waiver; DECISION for the licensing rule
- **Location:** CA 5.2. "Accounting" appears only in CA 6.4(d) (FSL without a partner) and PA 4.4(e) (FSL with a partner).
- **Problem:** Under "Students own", and for a team without a partner that chooses "None", teammates usually co-own the code they wrote together.
  - For copyright (unlike patents, 35 U.S.C. § 262), each co-owner who uses or licenses the work owes the others an accounting of profits.
  - A "royalty-free" license does not clearly displace a duty that comes from co-ownership itself. A Student Company may then owe non-founders a share of its profits. That undercuts "What a Student Company builds afterwards is its own" (CA 5.4) and scenarios 8 and 9.
  - CA 5.2's "may not ... be sublicensed without the granting student's written consent" does not stop a co-owner licensing as an owner. For joint works the restriction does nothing.
- **Fix:** Append to CA 5.2: "No student owes another student an accounting of profits, or any other payment, for any use or licensing of the team's Project Work Product, by the student or their Student Company, that this Section 5 or the Project Terms permit."
- **Decision:** Should a co-owner be able to license outsiders? I recommend not, matching CA 6.4(c) and PA 4.4(d): "Except through their Student Company, no student may license the team's Project Work Product beyond its Project Terms without the other owners' written consent."

**3. The buyout's mechanics are not enforceable as written.** DECISION
- **Location:** CA 5.5(b) to (d), and its note for counsel.
- **Quote (d):** "the teammate must assign their ownership share in the work to the company ..., and hereby does so, effective when the company pays the price or ... gives the teammate its signed written promise to pay it. The teammate must sign documents reasonably needed to record the assignment".
- **Problems:**
  - **Signed writing:** 17 U.S.C. § 204(a) for copyright, and 35 U.S.C. § 261 for patents, require a writing signed by the owner. The only writing the holdout signs is the roster (see finding 4). It predates the transferee, names it only by description, and takes effect on a condition the transferee controls. A court may treat this as a promise to assign, which needs a further signed writing or a court order. The note does not raise § 204(a) or § 261.
  - **Recording:** In scenario 8 the holdout "won't sign anything", and there is no fallback. The Copyright Office and patent office records stay in the holdout's name.
  - **Competing notices:** Nothing says which company prevails if two Student Companies both give notice to the same teammate.
  - **Unclear subject:** "ownership share in the work" is unclear where the holdout wrote separate files rather than part of a joint work.
  - **Adhesion:** The buyout sits in an agreement every student must sign to take the Course. That raises adhesion and unconscionability questions the note does not mention.
- **Fix:**
  - In (d), replace "their ownership share in the work" with "all of their rights in the work".
  - Add to (d): "If the teammate does not sign those documents within [15] business days after the company's written request, the teammate appoints the company as their attorney-in-fact, coupled with an interest, to sign them in the teammate's name."
  - Add a new (g): "If more than one Student Company gives notice to the same teammate, the first notice the teammate receives governs."
  - Extend the note: "...including whether the present assignment satisfies 17 U.S.C. § 204(a) and 35 U.S.C. § 261 when the transferee does not yet exist, whether the power of attorney is enforceable, and whether the buyout is enforceable against a student who had to sign this agreement to take the Course."

**4. The signature roster has no words of agreement and no version, yet it is the writing that carries the assignments.** MECHANICAL, plus a DECISION on CA 8.4
- **Quote:** "Each signer completes one entry, and may sign a separate copy of this roster. Repeat the entry below for each signer."
- **Problem:**
  - A separately signed page that never says the signer agrees to anything is weak proof of assent. It is also a weak signed writing for the assignments in CA 2.3, 5.5(d), and 6.4(a).
  - For an agreement signed at different times by many people, nothing requires later signers to sign the same version, or says who keeps the roster.
  - CA 8.4 ("may be changed only in a writing signed by every signer") means no error can be fixed during an offering.
  - The counsel note at CA 1.1 raises accession but none of these points.
- **Fix:** Replace the roster's opening sentence with: "By signing below, each signer agrees to this Course Agreement, version [____], for the Course named in the course details, with every other signer, whenever each signs, including the licenses and assignments in Sections 2.3, 5, and 6. Each signer may sign a separate copy of this roster. The Course Staff keep the signed roster with this agreement, and every later signer signs the same version."
- **Decision:** Ask counsel whether CA 8.4 should allow a corrected version for new signers without every earlier signer.

**5. A later assignment cannot both end and preserve teammates' licenses.** DECISION
- **Quotes:**
  - CA 5.1: "but not to work that Project Terms assign, or later assign, to a partner".
  - CA 5.2: "irrevocable except under Section 5.5".
  - PA 6.3: "A change binds only those who sign it, and cannot take back rights that others already received".
- **Problem:** Take a student who left the project, or moved rather than sign a change. CA 5.1 ends their license in work done before the change; CA 5.2 and PA 6.3 say it cannot end.
  - The README contradicts itself the same way. Its scenario 12 answer says "Teammates' licenses fall away for work the change assigns"; its scenario 10 answer says "later changes do not bind them".
  - Also, "work that Project Terms assign ... to a partner" can be read to cover FSL software, because PA 4.4(a) assigns Partner an undivided interest. That reading would remove teammates' licenses under FSL, although the next sentence of CA 5.1 assumes they exist.
- **Fix (recommended):** Protect those who don't sign, as PA 6.3 intends. Replace the first sentence of CA 5.1 with: "Sections 5.2 to 5.5 apply to Project Work Product that a team's students own or co-own, including under an FSL license, with or without a partner, but not to work that a partner owns outright. If Project Terms are changed to assign work to a partner, the licenses under this Section 5 in that work end only for students who sign the change."

**6. PA 6.3's "every signer still taking part" leaves two gaps.** MECHANICAL
- **Quote:** "may be changed only in a writing signed by Partner's authorized officer and every signer still taking part in the Project".
- **Problem (a):** After the Duration no one is still taking part. Read literally, Partner plus any willing students could then change the cover page for themselves, while other terms need "every signer". Combined with CA 5.1, a teammate who did not sign would lose their license.
- **Problem (b):** "Signer" includes Course Staff who signed only to see Confidential Information. Their signature becomes necessary to change IP terms that do not bind them (PA 1.1).
- **Fix:** "...signed by Partner's authorized officer and every student signer, other than one who stopped taking part in the Project before the end of the Duration."

**7. The buyout reaches documentation under joint ownership, which brief decision 6 rules out.** MECHANICAL
- **Location:**
  - PA 4.4(g): "Other Work Product is owned and licensed as Section 4.3 provides".
  - The PA cover page allows "None" for "License for all other Project Work Product if Students own or own jointly".
  - CA 5.5(a) excludes only "work owned jointly with a partner, work under an FSL license, or work a partner owns".
- **Problem:** Under joint ownership with "None" for other work, documentation is owned by the students with no public license, so the buyout applies to it. The brief says "The buyout does not apply under joint ownership (FSL)". This follows from drafter decision 1.
- **Fix:** Second sentence of CA 5.5(a): "It does not apply to any Project Work Product of a project whose Project Terms choose joint ownership with a partner or Partner ownership."

**8. Course and Duration are blanks in both documents.** MECHANICAL
- **Location:** The CA course details define "Course" and "Duration". The PA cover page has the same two blanks.
- **Problem:** PA 1.2 imports both terms from the CA. End Date, the Confidentiality Period, and the Enabling License all run from the CA's Duration, yet a partner can write a different Duration on the PA, and nothing says which governs. This matters most for scenario 23 (fall, J-Term, and spring).
- **Fix:** Replace the PA's two lines with: "Course (number and title, as in the Course Agreement's course details, which set the Course and its Duration): ____".

**9. A partner, or a student, reading only the PA is bound to the Course Agreement only piecemeal.** DECISION
- **Location:** The PA intro ("which is provided with it"), PA 1.2 ("The Course Agreement's rules apply alongside this agreement"), and Partner's agreements to CA 8.2 (PA 2.1), CA 3.1 (PA 2.4), CA 7.4 (PA 5.5), and CA 7.2 (PA 6.6).
- **Problems:**
  - Nothing identifies which version of the CA is incorporated.
  - A student who never signed the CA (the README's first weakness) is not bound by CA 2.3, 3, or 5. Teammates' rights then run one way: signers grant to "each teammate", and the non-signer grants nothing back.
  - Partner's four agreements are scattered across four sections.
- **Fix:** Rewrite PA 1.2 as: "**1.2 Course Agreement.** The "Course Agreement" is the Course Agreement for the Course, version [____], which Partner has received. Terms defined there have the same meanings here. Partner agrees to Course Agreement Sections 3.1, 7.2, 7.4, and 8.2 as if it had signed it. Each student signer agrees with Partner and every other signer to Course Agreement Sections 2.3, 3, 5, and 8, whether or not they have signed it. If the two differ about the Project, this agreement governs, but it does not reduce the protection that the Course Agreement gives anyone outside the Project." Then delete the separate incorporations: PA 2.1 (second sentence), 2.4 (last sentence), 5.5, and 6.6 (second sentence).

**10. PA 5.4 and 6.5 still assume a two-sided agreement.** DECISION (inside the counsel placeholder)
- **Quotes:**
  - PA 5.4: "[...neither Partner nor any signer is liable to the other, or to any other partner in the Course, ...]".
  - PA 6.5: "may cause Partner irreparable harm, and Partner may seek an injunction".
- **Problem:** Now that students are parties to each other, "liable to the other" can be read to cap liability between students too.
  - A teammate's ordinary breach of PA 4.4(d) could then be enforced only by injunction, and 6.5 recognizes injunctions for Partner alone.
  - In "[This exception also covers a signer's ordinary breach of Section 2.]", "This exception" has no clear antecedent, because another sentence intervenes.
- **Fix:**
  - PA 5.4: "[...Partner is not liable to any signer, and no signer is liable to Partner or to any other partner in the Course, ... except for liability resulting from that party's gross negligence, willful misconduct, or worse[, or from a signer's ordinary breach of Section 2]. This Section 5.4 does not limit injunctions under Section 6.5 or Partner's release in Section 5.3.]"
  - PA 6.5: "A breach of Section 2, 3, or 4 may cause irreparable harm, and Partner or any student signer may seek an injunction or other equitable relief in addition to any other remedy."

**11. CA 4.1's fallback grant by Course Staff is unwise.** DECISION (drafter decision 12)
- **Quote:** "If a member of the Course Staff contributes material anyway, they claim no ownership of it and grant whatever rights they hold in it on the same terms as the project's students grant theirs."
- **Problem:** Under "Partner owns", this makes a TA assign IP to a company. v0.5 §8.4 keeps Course Staff out of exactly that ("generally do not sign corporate NDAs or private IP assignments"). It adds an obligation nobody asked for, may conflict with Harvard owning employees' work (as the drafter's own note says), and Partner cannot enforce it (finding 1).
- **Fix:** "If a member of the Course Staff contributes material anyway, they will not assert any right in it against the project's students, its partner, or anyone who receives the work under its Project Terms." Keep the counsel note, and add 4.1 to partners' rights in CA 8.3.

**12. CA 3.3 may not cover sharing with a partner.** MECHANICAL
- **Quote:** "A signer must not share with anyone in the Course, or use in a project, confidential information that they are not authorized to share or use".
- **Problem:** v0.5 §3.9 named Partner. Elsewhere the CA speaks of partners as "of a project in the Course" (CA 8.3), so it is arguable whether a partner is "in the Course". This bears on scenario 20.
- **Fix:** "A signer must not share with any partner or anyone else in the Course, or use in a project, ..."

**13. CA 2.3 (reassignment) has three problems.** DECISION
- **Quote:** "Work the student already contributed to the project they leave stays under its Project Terms, as if the student had signed them ..., and the student hereby assigns or licenses that work accordingly. The student must keep that project's partner information within the Course Community as Course Private Information".
- **Problem (a):** Under the Open choice, the student who leaves is held to a stricter rule than the students who stay, who owe nothing for that information (drafter decision 21). Under Open nothing is confidential, so the brief does not require this.
- **Problem (b):** "its Project Terms" is ambiguous after a change (scenario 12). Applying the terms as later changed would contradict PA 6.3.
- **Problem (c):** The assignment runs to a partner that is not a party to the CA, by reference to a Project Agreement the student never signed. Counsel should look at this under § 204(a), and there is no note.
- **Fix:** "Work the student already contributed to the project they leave stays under its Project Terms as they stood when the student left, as if the student had signed them, and the student hereby assigns or licenses that work accordingly. The student must keep that project's Course Private Information and Confidential Information as its signers must." Add a note for counsel on § 204(a).

**14. For a project without a partner, "Course Private" conflicts with the default public licenses.** DECISION (scenario 18)
- **Quotes:**
  - CA 6.2: "what the students share about the project with classmates and the Course Staff is Course Private Information".
  - CA 6.3: "Each student licenses their rights in the project's software, to everyone who receives a copy, under the MIT License (the default)".
- **Problem:** A classmate who receives the code inside the Course receives it under MIT, which allows redistribution, while CA 3.2 forbids it. PA 4.2 avoids this for partner projects ("any release remains subject to Sections 2 and 3"), but CA 6 has nothing equivalent.
- **Fix:** Add to CA 6.2: "Under "Course Private", the licenses in Section 6.3 apply to a copy only once one of the project's students releases it outside the Course Community."

**15. PA 2.2(c) carries over 2.2(b)'s duty not to give confidential information.** MECHANICAL
- **Quotes:**
  - 2.2(b): "Partner must use reasonable efforts not to give information it considers confidential."
  - 2.2(c): "Paragraph (b) applies, except that Partner may mark Partner Information as Confidential Information".
- **Problem:** Read literally, a partner that chose the Confidential option must still try not to give confidential information.
- **Fix:** Last sentence of 2.2(b): "Unless the Course Private and Confidential choice applies, Partner must use reasonable efforts not to give information it considers confidential."

**16. CA 7.4 may leave Course Staff duties unenforceable.** DECISION
- **Quote:** "No signer may assert such a claim. This Section 7.4 does not protect a member of the Course Staff who intentionally misuses information in breach of a Project Agreement they signed, or stop a partner from seeking an injunction against them."
- **Problem:** Brief decision 7 makes the course-wide rules bind every member of the Course Staff. But the only stated route to an injunction is a partner suing staff who signed a Project Agreement. A TA who passes a team's Course Private Information to a partner (CA 3.2), or discloses grades (CA 4.2), arguably faces no remedy.
- **Fix:** "This Section 7.4 does not stop anyone entitled to enforce Section 3 or 4 from seeking an injunction against a member of the Course Staff, and does not protect a member of the Course Staff who intentionally misuses information in breach of this agreement or a Project Agreement they signed."

**17. "Signer" is defined twice, with different meanings.** MECHANICAL
- **Location:** CA 1.1 defines a signer of the Course Agreement; PA 1.1 defines a signer of the Project Agreement.
- **Problem:** The CA itself also uses "signer" for Project Agreement signers: 1.3 "that agreement's signers", 2.3 "requires of signers", and 4.3 "duties of a signer". Meanwhile the CA sections the PA incorporates (3.1 and 7.4) use it in the Course Agreement sense.
- **Fix:** Add to PA 1.2: "In this agreement "signer" means a signer of this agreement; in a Course Agreement section, it means a signer of the Course Agreement."

**18. Outside PA 1.1, the PA still reads as two-sided.** MECHANICAL
- **Quotes:**
  - Intro: "This agreement is made between the company named below ("Partner") and each individual who signs it".
  - PA 6.8: "the entire agreement between Partner and the signers".
- **Fix:**
  - Intro: "This agreement is made among the company named below ("Partner") and each individual who signs it, and each student who signs it agrees with Partner and with every other student who signs it".
  - PA 6.8: "among Partner and the signers".
- PA 1.1 otherwise achieves brief decision 1 ("Partner and each student signer agree with each other, and each student signer also agrees with every other student signer").

**19. A partner cannot see from the PA whether Harvard has rights.** DECISION (scenario 22)
- **Problem:** The boxes appear only in the CA's course details. Yet they decide whether the informal exception applies, and so whether an assignment to Partner is worth anything.
- **Fix:** Add to PA 6.6: "Partner confirms that it has received the Course Agreement with its course details completed, including the boxes under "Harvard's rights in students' work"."

**20. Students under 18.** DECISION (note for counsel)
- **Quote:** CA 8.4: "Each signer confirms that they have reached the age of majority".
- **Problem:** Approach A requires every student in the Course to sign (CA 1.1), not only students on partner projects as in v0.5. A 17-year-old first-year cannot sign truthfully, and their licenses, FSL assignments, and buyout would be voidable.
- **Fix:** Add a note for counsel on how students under 18 sign, for example with a parent's co-signature.

**21. The poster session when Partner owns the work.** DECISION (scenario 7)
- **Problem:** PA 3.2 lets a student present at a private course event with a copy to Partner "no later than when it is ... presented", and says Section 3.4 (review) does not apply. That leaves Partner no time to file a patent. The Student Guide, meanwhile, tells students to "treat every course event as public".
- The README's answer matches the text, and the drafter flagged the risk in a counsel note.
- **Recommendation:** When Partner owns, require the copy [10] business days before the event. This changes register D3, so it is the owner's decision.

**22. When a change of information choice takes effect.** DECISION (scenario 12)
- **Problem:** PA 6.3 does not say whether a move from Open to Course Private covers information already given under Open.
- **Fix:** Add: "A change to the information choice applies only to Partner Information given after the change, unless the change says otherwise."

**23. A new duty for presenters in CA 3.2.** DECISION, low (drafter decision 13)
- **Quote:** "They must use reasonable care to ask anyone seen recording it to stop and delete the recording".
- **Problem:** This is a new obligation, and partners can enforce it under CA 8.3.
- **Recommendation:** Keep it; "reasonable care" limits it.

**24. Simplicity: several decisions are stated more than once.** MECHANICAL
- **Generative AI** is in CA 3.4 and PA 2.3(d). Cut PA 2.3(d) to "follow Course Agreement Section 3.4 on generative AI tools", and move the line about Partner Contacts approving tools into PA 6.1.
- **The Confidentiality Period** is in CA 8.1 and PA 2.6. Cut PA 2.6. As drafted, it also limits Partner's own duties in PA 2.4 by an End Date that Partner does not have.
- **Signing before receiving information** is in CA 2.2 and PA 1.5.
- **Showing Course Private Information at course events** is in CA 3.2 (second sentence) and PA 3.1.
- **Changing the credit process** has two differently worded rules. CA 5.6(c) says "a project's students and its partner ... in writing, including by email"; PA 3.5(c) says "a Partner Contact and all of the student signers ... by email". Keep CA 5.6(c) as "all of a project's students and a Partner Contact", and cut the PA sentence.
- **"Harvard is not a party"** appears in CA 7.1, PA 1.1, PA 6.6, and the Harvard approval. Cut it from PA 1.1.
- **The instructor's approval** is in CA 2.1, the PA cover page, PA 6.3, and PA 6.7. Cut the cover page's restatement ("Any other choice, now or in a later change, needs ... The instructor does not sign.").
- **FSL** is explained in CA 5.1, CA 6.4, and PA 4.4(b). Define it once in CA 2.1, next to CC BY 4.0.
- **Continued use** overlaps between PA 3.6 (first sentence) and PA 4.5(d).
- **The Harvard approval** restates five CA terms, and its summary of 7.4 already drops the intentional-misuse carve-out. Cite the sections instead.
- **PA 1.2's list of 14 terms** can become "Terms defined in the Course Agreement have the same meanings here."
- **Long sentences** against the brief's 25-word aim: PA 3.2 (68 words), CA 7.4 (65), CA 5.2 (61), PA 3.6 (56), CA 5.3 (55), and PA 3.4 (52).
- **Hard for partners to follow without an example:** CA 5.1's second sentence on FSL limits, and PA 2.2(a)'s rule turning Open-choice information that Partner identifies as confidential into an Inadvertent Disclosure.

**25. Minor items.** MECHANICAL unless noted
- **Student Guide title:** CA 1.4 and the roster say "SEAS Student Guide for course projects", but the file is titled "Student Guide to Course Project Agreements".
- **CA 1.3(d):** Deleting the bracket leaves "(d) and invited guests". Move "and" inside: "(d) [members of the SEAS community, meaning the students, faculty, and staff of SEAS, and] invited guests".
- **README signing table:** The row "Course instructor | Nothing." contradicts the row that has instructors sign the CA roster. Change it to "Nothing beyond the Course Agreement."
- **README length targets:** "2,000 to 3,000 aimed for" and "3,000 to 4,000 aimed for" are not in the brief. Cite a source or drop them.
- **"Assigns" versus "hereby assigns" (DECISION):** PA 4.4(a), PA 4.5(a), and CA 6.4(a) say "assigns"; CA 2.3 and 5.5(d) say "hereby". For future inventions (*Stanford v. Roche*), I recommend "hereby assigns" throughout.

## Scenarios

- **Answered as the README claims, in the sections it cites:** 1, 2, 3, 4, 5, 6, 9, 13, 14, 15, 16, 17, 19, 20, and 21.
- **Not fully supported, or unclear:**
  - 7: accurately described, but see finding 21.
  - 8: findings 1, 2, and 3.
  - 10: finding 5.
  - 11: findings 1 and 13.
  - 12: findings 5, 6, and 22.
  - 18: finding 14.
  - 22: finding 19.
  - 23: finding 8.
  - 24: findings 1 and 11.

## The drafter's own decisions (README table)

- **Sound:** 2, 3 (with finding 15), 4, 5, 6, 8, 10 (with finding 2), 11, 14, 16, 19, and 23.
- **Flagged:**
  - 1 (finding 7).
  - 7 (finding 5).
  - 9 (finding 3). Waiting until after the teammate's End Date is a sensible addition.
  - 12 (finding 11).
  - 13 (finding 23).
  - 15 (finding 6).
  - 17 (finding 1).
  - 18 (finding 19).
  - 20 (finding 14).
  - 21 (finding 13).
  - 22 (finding 4).

## Overall assessment

**Strengths:**
- The draft carries every decision in the brief.
- Each course-wide rule is stated once (CA 3) and binds every student and staff member directly. That removes v0.5's third-party lists and Exhibit D's references.
- The PA cover page is clean, labeled, and shows each default.
- The information choices and IP dials map one to one onto PA 2.2 and 4.3 to 4.5.
- Style and cross-references are clean.

**Weaknesses:**
- The split between the two documents creates seams the draft does not close.
- CA 8.3 shuts out the people who receive rights: Student Companies, and partners as assignees.
- The PA relies on the Course Agreement without naming its version or binding students to it.
- Teammates' rights lack the accounting waiver that makes them work.
- The buyout's self-executing assignment rests on a roster signature with no words of agreement.
- Later assignment, changes after the Duration, and Course and Duration are each stated in two places that disagree.

Most fixes are a sentence or two. The structure is sound once findings 1 to 9 are resolved.
