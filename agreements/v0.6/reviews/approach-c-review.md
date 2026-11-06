# Review of approach C (course master agreement and project schedules)

Scope: `approach-c/master-agreement.md` (MA), `project-schedule.md` (PS), `partner-joinder.md` (PJ), `harvard-approval.md` (HA), and `README.md`, checked against `BRIEF.md`, `SCENARIOS.md`, `decision-register.md`, and v0.5 (`course-project-letter-agreement.md`). Each finding was checked against the text before it was included. Quotations are exact.

Tags: **MECHANICAL** means there is one obvious fix. **DECISION** means the fix needs judgment, and a recommendation is given.

Totals: 37 findings, 15 MECHANICAL and 22 DECISION. Findings 1 to 12 matter most.

## Findings, most important first

1. **The buyout does not actually transfer anything, and the power of attorney cannot fill the gap.** `DECISION`
   - **Where:** MA 7.4(c) and (d); README scenario 8 and drafter decision 13.
   - **Text:** "Otherwise, the teammate must assign their ownership share in that work to the company for the price in paragraph (d). The assignment takes effect when that period ends and the company has paid the price, or has promised in writing to pay it when due. The teammate appoints the company as their attorney-in-fact to sign documents confirming the assignment."
   - **Problem:** "must assign" is a promise to assign later. The next sentence then speaks of "The assignment" taking effect, but the text never makes one. Compare MA 5.8(a) and 5.9(a), which use present words ("assigns"). Under 17 U.S.C. § 204(a), a copyright transfer needs a writing of conveyance signed by the owner or the owner's authorized agent. Patents need a written assignment under 35 U.S.C. § 261. If the holdout "won't sign anything" (scenario 8), the company has only a claim for specific performance. The power of attorney covers only "documents confirming the assignment", not the transfer itself, so it cannot cure this. Three more problems:
     - The transfer takes effect on a bare promise to pay. Under Alternative 2, payment may never come, and the teammate has no way to get the interest back.
     - "ownership share" is undefined. A co-author owns an undivided interest in the whole work, not a share.
     - In (d), Alternative 1 says "what each founding student received". That is unclear when founders received different amounts, or equity instead of cash.
   - **Fix:** Replace the last three sentences of 7.4(c) with: "If the teammate does not join, the teammate assigns to the company all of their ownership interest in that work. The assignment takes effect when that period ends and the company has [paid the price in paragraph (d)] [given the teammate a signed promise to pay the price in paragraph (d) when due]. [If the company does not pay the price when due, the assignment ends and the interest returns to the teammate.] The teammate appoints the company, by a power coupled with an interest, as their attorney-in-fact to sign, deliver, and record any document that makes, confirms, or perfects that assignment, including for patents." In (d)(i), write: "the [lowest] [average] value that any founding student received, in cash or equity, for assigning their own rights in the work to the company". Add these questions to the counsel note after 7.4:
     - whether an assignment in a master agreement signed before the work exists satisfies § 204(a) and § 261;
     - whether the power of attorney is irrevocable;
     - whether payment by promise is acceptable;
     - tax: for example, whether 26 U.S.C. § 1221(a)(3) makes the price ordinary income for a student who wrote the code.

2. **An individual project with a partner never needs the instructor's approval, although the brief says "always".** `DECISION`
   - **Where:** MA 2.2; PS "Open Science and instructor approval"; README drafter decision 11.
   - **Text:** MA 2.2: "An individual project (one Project Student) without a Partner always needs it." PS: "Any other choice, and any individual project without a Partner, needs a Course instructor's approval". README: "A single student on a partner project needs approval only for choices other than Open Science."
   - **Problem:** Brief decision 4 says "an individual project always needs it". The register's stakeholder table says instructors "Approve options other than Open Science, and individual projects", with no partner limit. The drafter narrowed this to projects without a partner. The narrowing leaves out the case where oversight matters most: one student alone with a company. The shared Student Guide (line 44) puts the same sentence under "Projects without a partner", so the two documents must be aligned whichever reading wins.
   - **Fix (recommended: follow the brief literally):**
     - MA 2.2: "An individual project (one Project Student) always needs it, with or without a Partner."
     - PS: "Any other choice, and any individual project, needs a Course instructor's approval in writing, and email is enough (Section 2.2)."
     - PS certification: "With a Partner, Partner certifies, by its authorized officer's signature below, that this instructor approved every choice on this Schedule that is not Open Science and, for an individual project, the project itself."
     - Update README decision 11 and the scenario table. Ask the Student Guide's owner to align guide line 44. If the brief's author meant the narrower reading, change the brief instead.

3. **Under joint ownership, the Teammate License lets a student escape the FSL restrictions.** `MECHANICAL`
   - **Where:** MA 7.1, 7.2, and 5.8(c); README scenario 17.
   - **Text:** 7.1: "This Section 7 applies to every Project with two or more Project Students, with or without a Partner, unless Partner owns the Project Work Product." 7.2: "a license under their rights in the Project Work Product with the same scope as Partner's license in Section 5.7(c), including for products and services sold to customers". 5.8(c): "No joint owner may license or distribute the Project Software other than under the FSL license, except to an entity through which paragraph (b) lets it use the software".
   - **Problem:** The 5.7(c) scope includes "distribute ... sell ... for any purpose". Under joint ownership, a student can rely on their Teammate License, rather than on co-ownership, to distribute the Project Software on non-FSL terms. That is exactly what 5.8(c) forbids. It removes the protection that Partner chose FSL to get.
   - **Fix:** Add to 7.2: "Under joint ownership, the Teammate License does not cover the Project Software, which Section 5.8 governs." In README scenario 17, say that Teammate Licenses cover only the non-software work.

4. **A competitor can buy a Student Company and keep its rights, including FSL "no competing use" status.** `DECISION`
   - **Where:** MA 5.4 (used by 5.8(b) and 7.2); README scenario 13.
   - **Text:** "in each case when it first uses the Project Work Product. For a Project with a Partner, no competitor of Partner may control it at that time."
   - **Problem:** The brief describes a company "that no competitor of Partner controls". That is present tense and ongoing. The draft tests competitor control only at first use. A competitor of Partner can then acquire a Student Company and keep both its Teammate License and, under joint ownership, its exemption from the FSL's competing-use bar (5.8(b): "No such use is a competing use under the FSL license"). That defeats the FSL's two-year protection, and a partner's lawyer would refuse it. Testing the founding and 25% tests at first use is sensible, because later fundraising dilutes the founders. The competitor test is different.
   - **Fix:** "A "**Student Company**" of a Project Student is a company that the student founded or co-founded, or in which the Project Students together held at least 25% of the voting equity when it first used the Project Work Product. For a Project with a Partner, a company is not a Student Company while a competitor of Partner controls it[, unless it became a competitor only because of Partner's own later merger or acquisition]." The bracket keeps the README's answer to scenario 13. "Competitor" is undefined here, as in v0.5. Add it to a counsel note.

5. **The Student Company that runs the buyout has no rights under the agreement, and is not bound after it takes a share.** `DECISION`
   - **Where:** MA 12.10, 12.3, 7.4(b) and (c), 7.2, and 5.7(b); README "Who signs what" row for Student Company.
   - **Text:** 12.10: "No one else has rights under this Master Agreement." 12.3: "Students and Course Staff may not assign this Master Agreement, except to a Student Company under Section 5.8(e) or 7.4." README: "A written agreement to be bound, only if it takes an assignment of FSL interests".
   - **Problem:**
     - Rights: the company gives the buyout notice, receives the assignment, and holds the power of attorney, but it is not a party (MA 1.1). Under 12.10 it has no rights. The same goes for the Teammate License's extension to a Student Company in 7.2. Read literally, 12.10 also undercuts the public licenses that 5.7(b) grants to "everyone who receives a copy".
     - The 12.3 exception is muddled. Under 7.4 the selling teammate transfers intellectual property, not "this Master Agreement", and keeps their own duties.
     - Duties: unlike 5.8(e), 7.4 never requires the company to agree to be bound. After a buyout, a non-party can hold a share of the work free of the Section 7.2 profit waiver and the confidentiality terms.
   - **Fix:** In 12.10, replace the last sentence with: "A Student Company may enforce Sections 5.8, 7.2, and 7.4 as far as they benefit it. Recipients of a public license have the rights that license gives. No one else has rights under this Master Agreement." Replace the first sentence of 12.3 with: "Students and Course Staff may not assign this Master Agreement. A Student Company that takes an interest under Section 5.8(e) or 7.4 must first agree in writing to be bound as the students it takes from were." (Recommended: require this for 7.4 as well.) Update the README row to cover the buyout.

6. **A buyout notice can go to a dead harvard.edu address and start the clock unseen.** `DECISION`
   - **Where:** MA 12.2, 7.4(b) and (c), and Signature Roster; scenario 8.
   - **Text:** 12.2: "others go to the email addresses on the signed documents, or to another address given by notice." The Roster and PS collect only "Email (ending in harvard.edu)".
   - **Problem:** A buyout may come years after the Course. A student's harvard.edu address may stop working after they leave Harvard. Combined with a self-executing transfer (finding 1), a teammate who "has taken a job elsewhere" could lose ownership without ever seeing the notice. That is unfair and puts enforcement at risk.
   - **Fix:** Add to each Roster entry: "Personal email for notices after the Course (optional; may be changed by notice): ____". Add to 7.4(b): "The company must send the notice to every email address the teammate has given under Section 12.2. The period in paragraph (c) starts when the teammate receives the notice, or [30] days after it is sent, whichever is earlier."

7. **The bracketed roster check conflicts with FERPA and with MA 8.3, so partners have no clean way to prove another student signed.** `DECISION`
   - **Where:** MA 12.11, 8.3, and the 1.4 counsel note.
   - **Text:** 12.11: "Partners do not receive the Signature Roster or other Projects' documents. [On a Partner's request about a suspected breach of Section 3, the Course Staff must confirm whether a named person has signed the Signature Roster.]" 8.3: "Course Staff must not share students' grades or other education records ... with any Partner."
   - **Problem:** The drafter's own note says the Roster may be an education record. If it is, confirming that a named student signed discloses their enrollment without consent. That would breach FERPA unless an exception applies, and it would breach MA 8.3. Without the bracket, a partner can learn whether a student on another project is bound to it only by subpoena once a suit is under way (34 C.F.R. § 99.31(a)(9)). Section 3's protection for partners, which the README presents as a main strength, is then hard to use.
   - **Fix (recommended):** Get consent at signing. Add to the Roster text: "Each student consents to the Course instructors' disclosing to any Partner in the Course, on its written request about a suspected breach of Section 3, a copy of that student's signed entry on this Roster, so that the Partner may enforce this Master Agreement." Counsel should confirm this meets 34 C.F.R. § 99.30, which asks for a signed and dated consent naming the records, the purpose, and the recipients. Replace the bracket in 12.11 with: "On a Partner's written request about a suspected breach of Section 3, the Course instructors will give it a copy of a named student's signed Roster entry, as that student consented on the Roster." Add to 8.3: "except as a student consents on the Signature Roster".

8. **Every party represents facts about every other signer.** `MECHANICAL`
   - **Where:** MA 12.7.
   - **Text:** "Each party represents that it may lawfully sign and perform this Master Agreement, that each individual signer has reached the age of majority, and that anyone signing for a Partner is authorized to do so."
   - **Problem:** In a multi-party instrument this makes each student represent that every Partner's officer has authority. It also makes each Partner represent that every student in the Course is an adult. No partner will give that.
   - **Fix:** "Each party represents that it may lawfully sign and perform this Master Agreement. Each individual party represents that they have reached the age of majority. Each individual who signs for a Partner represents that they are authorized to do so."

9. **The "Course Private and Confidential" choice drops the rule for information given by mistake.** `MECHANICAL`
   - **Where:** MA 4.4 (compare 4.3).
   - **Text:** 4.4: "All Partner Information is Course Private Information unless Partner clearly marks it as Confidential Information: in writing when it is given or, for an oral or visual disclosure, at the time, with written confirmation within ten business days."
   - **Problem:** Brief decision 2 defines this choice as "as above, plus Partner may mark information". "As above" includes the Course Private rule that students delete mistaken material on request, and that earlier permitted uses are not a breach. Section 4.4 does not carry that rule. A Partner that forgets to mark a document has no remedy, and students have no safe harbor.
   - **Fix:** After 4.4's first sentence, add: "The rule in Section 4.3 for something given by mistake also applies."

10. **Students may not share Course Private Information with the Partner that gave it.** `MECHANICAL`
    - **Where:** MA 3.2.
    - **Text:** "Course Private Information" may be shared only within the Course Community.
    - **Problem:** Partner is not in the Course Community, except as an invited guest at an event. Read literally, students cannot send Partner results that contain its own data. Yet 4.8 and 6.2(b) require copies to Partner. v0.5 §3.3 allowed disclosure to "Partner and members of the Course Community".
    - **Fix:** "Course Private Information" may be shared only with its Partner and within the Course Community.

11. **The independent-development exclusion lost its qualifier.** `MECHANICAL`
    - **Where:** MA 3.7.
    - **Text:** "came from a third party with no duty of confidentiality, or was independently developed."
    - **Problem:** v0.5 §3.4(d) required development "without use of Partner Information" (register C5). Without that qualifier, a recipient who used the information can still say they "developed" the result. Any partner's lawyer will insist on the qualifier.
    - **Fix:** "or was independently developed without use of or reference to it."

12. **After the Duration, choices can change without the instructor's approval.** `DECISION`
    - **Where:** MA 11.2 and 11.3.
    - **Text:** 11.2: "During the Duration, a Project's choices and blanks may change only by a changed Schedule". 11.3: "After the Duration, a Project's Partner, through its authorized officer, and all its Project Signers may agree in writing to other terms for their Project, if those terms affect no one else's rights."
    - **Problem:** Brief decision 4 requires approval "for any later change". Under 11.3, the parties could move to assignment after the Course with no approval. 11.2 cannot simply drop "During the Duration". After the Duration every End Date has passed, so Partner alone would sign.
    - **Fix (recommended):** Add to 11.3: "A change that leaves the Project other than Open Science still needs the certification in Section 11.2." Alternatively, confirm with the brief's author that no approval is needed after the Course.

13. **Nothing says what happens when approval is missing, and the certification may not cover publication review or the hold period.** `DECISION`
    - **Where:** MA 2.2; PS "Open Science and instructor approval".
    - **Text:** PS: "Approving instructor's name (leave blank if no approval is needed)" and "Partner certifies ... that this instructor approved every choice on this Schedule that is not Open Science."
    - **Problem:**
      - If a Schedule picks assignment and leaves the instructor's name blank, it is unclear whether the choice is void or valid with Partner in breach.
      - Publication review and the Publication Hold Period are not part of the Open Science definition (MA 2.1). So "every choice ... that is not Open Science" arguably does not cover them. v0.5 §11.10 covered both expressly. A blank hold period means an indefinite hold, which the instructor should see.
    - **Fix (recommended):** Add to MA 2.2: "If a choice that needs approval has no approval recorded on the Schedule, its default applies." The document generator can enforce that rule. In the PS certification, write: "that this instructor approved every choice on this Schedule, and the Publication Hold Period, if the Project is not Open Science".

14. **Students and Course Staff are bound by other projects' choices they cannot see.** `DECISION`
    - **Where:** MA 3.4 and 12.11.
    - **Text:** 3.4: "Each student and member of the Course Staff must keep the Course Private Information of any Project whose Schedule they have not signed within the Course Community". 12.11: "Partners do not receive ... other Projects' documents" (students do not receive them either).
    - **Problem:** Whether another team's information is Course Private depends on a Schedule that a classmate never sees. The duty is strict and has no knowledge standard. That is unfair to the classmate, and it gives the protected partner a contested case: "I didn't know."
    - **Fix (recommended):** Add to 3.4: "This applies to information that the person knows, or has reason to know, is Course Private Information. The Course Staff will tell the Course Community which Projects have chosen Course Private." Another option is to require Course Private materials to be labeled.

15. **A TA's contribution is outside every grant, and "claim no rights" moves no title.** `DECISION`
    - **Where:** MA 8.2 and 1.2; README drafter decision 14 and scenario 24.
    - **Text:** 8.2: "They must not contribute intellectual property to any Project, and they claim no rights in Project Work Product. ... and Project Students and Partners may use their suggestions freely." README: "keeps title clear if a TA contributes anyway".
    - **Problem:**
      - "Project Work Product" covers only what Project Students create (1.2). A TA's code is therefore outside every license and assignment.
      - "Claim no rights" is a disclaimer, not a transfer under § 204(a).
      - Course Staff are Harvard employees, so their work may belong to Harvard, which a TA cannot waive.
      - Under "Partner owns", Partner does not get the TA's code. The README's claim of clear title is wrong.
    - **Fix:** Replace 8.2's second and third sentences with: "They must not contribute intellectual property to any Project. Their evaluations, grades, and feedback are not Project Work Product. If a member of the Course Staff contributes anyway, they grant the Project Students and Partner a perpetual, irrevocable, non-exclusive, royalty-free license, so far as they can, to use that contribution for any purpose, and they claim no other rights in it." Add a counsel note: does Harvard own staff work, and should Harvard's approval license or disclaim it for the listed courses? Correct README decision 14 and scenario 24.

16. **The reassignment rule deems a signature but grants nothing.** `MECHANICAL`
    - **Where:** MA 3.8; README scenario 11.
    - **Text:** "Work the student did on the first Project stays under its terms, as if the student had signed its Schedule."
    - **Problem:** If the first Project is "Partner owns", the student's work must be assigned. v0.5 §11.11 said "Participant hereby assigns or licenses it as that letter agreement's intellectual property option provides". The deeming clause has no words of conveyance (§ 204(a); see finding 1). It also does not say which version of a later-changed Schedule applies.
    - **Fix:** "Work the student did on the first Project stays under its terms as they stood when the student left it, as if the student had signed its Schedule, and the student assigns or licenses that work as those terms provide."

17. **"Never exclusive" contradicts the buyout.** `DECISION`
    - **Where:** MA 5.4, 7.3, and 7.4(e).
    - **Text:** 5.4: "A Student Company's rights in Project Work Product are never exclusive." 7.3: "Course work stays non-exclusive." 7.4(e), first bracket: "The sale ends the teammate's Teammate License in that work".
    - **Problem:** If the first bracket in (e) is chosen, a company that buys out every non-founder ends up with exclusive rights, especially on a project without a Partner. The outline gives this as the reason for that option. The Student Guide agrees: "If it doesn't, the seller keeps their license, so the company's rights stay non-exclusive."
    - **Fix:** 5.4: "Apart from a buyout under Section 7.4, a Student Company's rights in Project Work Product are non-exclusive. What it builds afterwards is its own." Delete "Course work stays non-exclusive." from 7.3.

18. **A partner joins "one agreement" whose other parts and parties it cannot see.** `DECISION`
    - **Where:** MA 12.6, 12.9, and 12.11; PJ 4.
    - **Text:** 12.6: "Together they form one agreement." 12.9: "This Master Agreement, with the Signature Roster, the Partner Joinders, and the Schedules, is the parties' entire agreement on its subject." 12.11: "Partners do not receive the Signature Roster or other Projects' documents."
    - **Problem:** Section 1.4 limits each Partner to its own Project. But 12.6 and 12.9 say each Partner's whole agreement includes Schedules it may not read, made with counterparties it cannot identify. A partner's lawyer will object. Its compliance team may also be unable to screen counterparties. Partners will most likely refuse this point, together with findings 4 and 8.
    - **Fix:** Replace 12.9's first sentence with: "For each Project, this Master Agreement, the Signature Roster, and that Project's Partner Joinder and Schedule are the parties' entire agreement on that Project. A Partner is bound by no other Project's Schedule." Delete 12.6's "Together they form one agreement." Add counterparty screening to the 1.4 counsel note.

19. **The list of a Partner's course-wide terms is incomplete, and Partner can act only through one named officer.** `MECHANICAL`
    - **Where:** MA 1.4 and 3.1; scenario 13.
    - **Text:** "plus the course-wide terms that bind or protect partners: Sections 3.3, 3.4, 3.7, 8.3, 10.4, and 10.5." and "A Partner acts through the authorized officer who signs its Partner Joinder and Schedule".
    - **Problem:**
      - The closed list leaves out 3.1 (enforcement), 3.6 (the generative AI rule that protects a Partner's information), 3.8 (reassignment), 9.2, and Section 12 (law, courts, and notices). That invites arguments, for example that a Partner cannot enforce 3.6 against a student on another project.
      - Tying Partner to "the" officer who signed leaves no clear signer for a changed Schedule after that person leaves, or after an acquisition (scenario 13).
    - **Fix:** "... plus Sections 3, 8.3, 9, 10, and 12 as they apply to Partners." and "A Partner acts through its authorized officers, and through the individuals its Partner Joinder names as its "**Partner Contacts**"." Then delete 3.1's "Sections 3.3 and 3.4 also bind Partners."

20. **The no-sublicensing rule can stop Partner, or a Student Company, from selling to customers.** `DECISION`
    - **Where:** MA 5.7(c) and 7.2.
    - **Text:** 5.7(c): "Partner may not sublicense it without the consent of the Project Students whose rights are involved." 7.2: "including for products and services sold to customers ... otherwise may not be transferred or sublicensed without the grantor's written consent."
    - **Problem:** Shipping software to customers normally means granting an end-user license, which is a sublicense. The brief keeps "no sublicensing without the students' consent", so the rule should be clarified, not removed.
    - **Fix:** Add to 5.7(c): "Providing the Project Work Product, or products or services that include it, to customers and users on ordinary end-user terms is not sublicensing." Section 7.2 picks this up through "same scope".

21. **The liability limit does not cover claims between students, who are now parties to each other.** `DECISION`
    - **Where:** MA 10.4.
    - **Text:** "no Partner is liable to any student or other Partner, and no student is liable to any Partner".
    - **Problem:** Take a student who leaks another team's Course Private Information (3.4). Their liability to that team's Partner is capped, but their liability to its students is not. Disputes among teammates over licenses or the buyout have no cap either. Brief decision 1 created student-to-student contracts, so this gap is new.
    - **Fix (recommended, inside the counsel placeholder):** "... no student is liable to any Partner [or to another student] ...", and end the paragraph: "This Section 10.4 does not limit injunctions, the release in Section 10.3, or the price under Section 7.4."

22. **The profit-sharing waiver does not bind anyone a student sells to.** `DECISION`
    - **Where:** MA 7.2 (last sentence), 5.8(d), and 12.3.
    - **Text:** "No teammate owes another a share of profits from a use that this Master Agreement permits."
    - **Problem:** As a contract term among parties, the waiver is likely effective, subject to counsel (the 7.4 note asks). But 12.3 restricts only assigning "this Master Agreement", not transferring ownership of Project Work Product. A buyer, heir, or creditor of a student's interest is not a party and could demand an accounting from a teammate's company. Rules on co-ownership outside the U.S. may also ignore the waiver.
    - **Fix:** Add to 12.3: "A Project Student may transfer an ownership interest in Project Work Product only to someone who first agrees in writing to be bound by Sections 5 and 7 as that student is." Add the transferee and foreign-law points to the 7.4 counsel note.

23. **No mid-offering corrections, even by agreement.** `DECISION`
    - **Where:** MA 11.1 and 11.3; README open question 13.
    - **Text:** 11.1: "no one may amend them for this offering; the next offering will use a new master agreement."
    - **Problem:** An error counsel finds in week 3 stays in force for the whole offering. For a 101a and 101b sequence, that is a full academic year. The README's reason (partners resist a non-party's power to change their contract) argues against a general errata power. It does not argue against a correction that a project's own parties choose to adopt.
    - **Fix (recommended):** Rename 11.3 "Corrections and later terms" and replace it with: "During the Duration, a Project's Partner, through its authorized officer, and all its current Project Signers may adopt for their Project a correction to this Master Agreement that Harvard has approved in writing. After the Duration, they and its other Project Signers may agree in writing to other terms for their Project. Neither may affect anyone else's rights." Keep the sentence from finding 12.

24. **Partner-consent terms can never be satisfied on projects without a partner.** `MECHANICAL`
    - **Where:** MA 6.3, 6.7, and 12.8.
    - **Text:** 6.3: "Without Partner's written consent, they may not publish it in writing or distribute copies or links." 6.7: "share them non-publicly ... with Partner's consent". 12.8: "In terms about a Project, "Partner" means that Project's Partner."
    - **Problem:** A team without a partner that chose Course Private can never publish its final poster, because no Partner exists to consent. That conflicts with MA 4.5 ("unless all of them agree otherwise"). Only 5.7(d) and 5.8(f) say how Partner references work without a Partner.
    - **Fix:** Add to 12.8: "For a Project without a Partner, a term that requires Partner's consent or gives Partner a right does not apply, and a term that requires the consent of Partner and others requires only the others' consent." The 5.8(f) words "and references to Partner do not apply", and the first sentence of 5.7(d), can then be deleted.

25. **The generative AI rule reads as a requirement to use AI.** `MECHANICAL`
    - **Where:** MA 3.6.
    - **Text:** "Students must use their Harvard accounts and Harvard-provided generative AI tools for Course work, unless the Course Staff allow otherwise or a Partner asks its Project to use the Partner's tools at its expense."
    - **Fix:** "Students must use their Harvard accounts for Course work and, if they use generative AI tools, Harvard-provided ones, unless the Course Staff allow otherwise or a Partner asks its Project to use the Partner's tools at its expense."

26. **"Another Partner" is ambiguous.** `MECHANICAL`
    - **Where:** MA 3.4; README scenario 18.
    - **Text:** "and never pass it to another Partner, unless that Project's Partner and Project Students ... consent in writing."
    - **Problem:** "Another" could mean a Partner other than the reader's own, or other than the protected Project's. The rule intended by register C9 is the second.
    - **Fix:** "and never pass it to any Partner other than that Project's own".

27. **The End Date sentence is ambiguous.** `MECHANICAL`
    - **Where:** MA 2.5.
    - **Text:** "For Section 3, the date they leave the Course counts instead, and a Partner's End Date is the end of the Duration."
    - **Problem:** It is unclear whether "For Section 3" also governs the Partner clause. "Leave the Course" is also unclear for a student who completes the Course.
    - **Fix:** "For duties under Section 3, a person's End Date is the earlier of the end of the Duration and the date they leave the Course. A Partner's End Date is always the end of the Duration."

28. **Course Staff take on personal duties they cannot control.** `DECISION`
    - **Where:** MA 3.8, the 12.11 bracket, 11.2, and 6.1.
    - **Text:** 3.8: "and the Course Staff must honor the request". 12.11: "the Course Staff must confirm".
    - **Problem:** Each TA signs personally (8.1), so "must" makes each one answerable for course administration they do not run. The brief says the Course Staff "will honor" a request. Separately, a TA who signs a Schedule to see Confidential Information becomes a Project Signer. That TA then must sign every ownership or license change (11.2), and must consent to public disclosure (6.1). TAs "take no part in the IP terms" (v0.5 Exhibit A.DS §3).
    - **Fix (recommended):** In 3.8, write "and the Course instructors will honor the request", and use the same wording in 12.11. Optionally, add to 11.2: "Course Staff who signed need sign only a change to the information choice."

29. **"Released copies" does not match whom the public license reaches, so "clean title" is overstated.** `MECHANICAL`
    - **Where:** MA 11.2 and 5.7(b); README drafter decision 6 and scenario 12.
    - **Text:** 11.2: "No change withdraws a public license for copies already released." 5.7(b): "Each Project Student licenses those rights to everyone who receives a copy". README: "gives Partner clean title after an agreed assignment".
    - **Problem:** The license reaches everyone who received a copy, including teammates, TAs, and poster visitors, not only "released" copies, and "released" is undefined. Students who left before the change also keep Teammate Licenses in earlier work (5.6, 11.2). After a midstream switch to assignment, Partner takes title subject to all of these.
    - **Fix:** In 11.2, write: "No change withdraws a public license already granted to anyone who received a copy." In README decision 6 and scenario 12, say: "Partner takes title subject to public licenses already granted, and to the Teammate Licenses of students who left before the change."

30. **README scenario answers that the documents do not support.** `MECHANICAL`
    - Scenario 13: "The successor becomes party only for this project (MA 1.4)." Section 1.4 says nothing about successors. Add to MA 12.3: "An assignee becomes the Partner for that Project only." Then cite 12.3.
    - Scenario 15: "Pasting it into a public tool would also post it in a public forum (MA 4.6(c))." A chatbot prompt is not clearly "post or store it in any public forum, such as a public website, code repository, or social media". MA 3.6 already answers the scenario, so delete the sentence.
    - Scenario 4: "may be published, subject to any publication review Partner requested and the credit rules". The answer leaves out that Course Private Information cannot appear in the paper without consent (MA 4.6(d), 6.1). Add that.
    - Scenarios 8, 17, and 24, and the "Who signs" row for Student Company: see findings 1, 3, 5, 6, and 15.

31. **Unlisted drafter decision: under assignment, publication review covers all Project Work Product.** `DECISION`
    - **Where:** MA 6.4.
    - **Text:** "relating to Partner Information or, if Partner owns, to the Project Work Product".
    - **Problem:** v0.5 §5.2 covered disclosures relating to information Partner provided. The extension makes sense for patents, but it is a new duty, and README's list of drafter decisions omits it.
    - **Fix (recommended):** Keep the extension, and add it to the README's drafter decisions with the reason.

32. **Two drafter decisions need confirming.** `DECISION`
    - Decision 7 (MA 5.6, "gets no rights ... in work created after their End Date"): this narrows the brief's license "to the team's Project Work Product" for students who leave. It is reasonable, but the brief's author should confirm it.
    - Decision 10 (MA 2.1, "or is not available to the Project, its default applies"): "Course Private and Confidential" on a Schedule without a partner falls back to Open, the least protective choice, although the team clearly wanted confidentiality. Recommended: add to 2.1 "except that Course Private and Confidential without a Partner means Course Private."

33. **A Schedule that names a Partner binds students even if that Partner never signs.** `DECISION`
    - **Where:** MA 2.4 (v0.5 had an Effective Date, §10.1).
    - **Text:** "Each person is bound from the date they sign".
    - **Problem:** Students who sign first are bound to license (5.7(c)) or assign (5.9(a)) to a "Partner" that may never become a party.
    - **Fix (recommended):** Add to 2.4: "A Schedule that names a Partner binds no one until that Partner signs it and its Partner Joinder." The second clause of 2.4 already covers information given earlier.

34. **Joint ownership leaves shares and late joiners unclear.** `DECISION`
    - **Where:** MA 5.8(a) and (e).
    - **Text:** "Each Project Student assigns to Partner, and to each teammate, an undivided interest in their rights in the Project Software."
    - **Problem:** The size of each interest is not stated. It is also unclear whether a student who joins later gets an interest in code written before they joined. The 5.8(e) notice, which names "the Project Students", may then not match the real owners.
    - **Fix:** Have counsel choose, for example "an equal undivided interest", and state whether later joiners take interests in earlier code. Add both points to the R-2 and R-7 note.

35. **Small wording fixes.** `MECHANICAL`
    - MA 10.1: "and no student is liable to it for that use" ("that use" has nothing to refer back to). Fix: "Each Partner accepts its Project's work, including all Project Work Product, as-is, uses it at its own risk, and no student is liable to it for that use."
    - MA 6.4: "Its end ends no duty to protect Restricted Information." Fix: "The end of the Publication Hold Period does not end any duty to protect Restricted Information."
    - MA 3.3: "reaches someone in the Course who is not authorized to receive it". Fix: "reaches anyone, in connection with the Course, who is not authorized to receive it". This makes it clear that a Partner's representative is covered, as 3.3's next sentence assumes.
    - MA 3.5: "share with anyone in the Course". Fix: "share with any Partner or anyone else in the Course" (v0.5 §3.9 named Partner).
    - MA 4.2: "Partner must not give any Restricted Information". This is circular, because under Open nothing can be Restricted Information. Fix: "Partner must not give any information that it needs kept confidential".
    - MA 7.1: "Teammates may enforce it, and Sections 4.8 and 6.6". Register H1 includes the IP terms. Fix: "and Sections 4.8, 5, and 6.6".
    - MA 12.1: "Sections 2.5 and 3 to 12 survive". The definitions and the limits in 1.3 and 1.4 must survive too. Fix: "Sections 1, 2.5, and 3 to 12 survive".
    - MA 7.2: "with the same scope as Partner's license in Section 5.7(c)". Section 5.7(d) says (c) "does not apply" without a Partner. Fix: add "(whether or not there is a Partner)".
    - PS C: "none applies if Partner owns" can be confused with the "None" box. Fix: "no software license applies if Partner owns".
    - PJ 2: "Partner owes other partners nothing else". Fix: "other Partners".
    - HA: "approves these templates, version 0.6," (0.6 is a draft label). Fix: "version [number],".

36. **Notes for counsel do not use the required opening.** `MECHANICAL`
    - **Where:** MA lines 63, 135, 223, and 227.
    - **Text:** "> **Note for counsel (review note R-8):**", "> **Note for counsel (review notes R-2 and R-7):**", "> **Note for counsel (v0.5 §7.5):**", and "> **Note for counsel (review notes R-5 and R-6):**".
    - **Problem:** The brief says these blockquotes must begin `> **Note for counsel:**`.
    - **Fix:** For example: "> **Note for counsel:** (Review note R-8.) Please settle ...". Do the same for the other three.

37. **Simplicity: merge the joinder into the schedule, make specific cuts, and add a reading map.** `DECISION`
    - **Merge the PJ into the PS (recommended).** Each part of the PJ restates the master:
      - PJ 2 restates MA 1.4.
      - PJ 3 restates MA 12.2, but with a narrower list. It omits giving and identifying Partner Information, the Enabling License, and requesting edits, so a reader of the PJ alone gets a different list.
      - PJ 4 restates MA 12.11, and PJ 5 restates MA 12.7.

      The officer already signs both documents in one envelope (README decision 2). Instead, add a Partner box to the PS with the legal name, entity type, and Partner Contacts, plus this sentence: "By signing, Partner joins the Master Agreement as this Project's Partner, for this Project only (Section 1.4)." That removes a document and about 280 words, and loses no decision. If the PJ stays, cut PJ 3 to: "Partner names the individuals below as its Partner Contacts, with the authority in Master Agreement Section 12.2." Cut PJ 2, 4, and 5 to similar cross-references.
    - **Cuts to the master, with approximate words saved:**
      - Delete 4.1, and start 4.4 with "This choice needs a Partner." (15)
      - Delete 5.9(d) and 5.9(e); Sections 6.4, 6.5, and 5.5 already say both. (33)
      - Delete "Publication review then does not apply." at the start of 6.5. (5)
      - Replace 5.7(b) with: "(b) Each Project Student licenses those rights to everyone who receives a copy, under the public licenses chosen on the Schedule for software and for everything else. If MIT and Apache 2.0 are both chosen, each recipient chooses. Any release remains subject to Sections 3, 4, and 6." The choices and defaults are already printed on the Schedule. (30)
      - Delete 2.3's "A student may ask to be assigned to an Open Science project or a Project without a Partner.", and start 3.8 with "A student may ask to be assigned or moved to another Project, ...". (14)
      - In 11.2, replace the certification sentence with "It must carry any certification that Section 2.2 requires.", and delete the last sentence, which 3.8 already covers. (40)
      - Delete 9.1's second sentence; 9.1's first sentence and HA already say it. (13)
      - Delete 4.4's last sentence; 3.2 and 8.4 already say it. (18)
      - Delete 8.4's last sentence; only signers can be Project Signers. (15)
      - In 4.2, delete "but Partner is still masked where Section 6 requires"; Section 6 applies on its own terms. (9)
      - Delete 8.1's "Their signatures do not bind Harvard." (6)
      - Fold 1.5 and 12.6's last sentence into 12.9. (20)
      - Fold 7.3 into 7.2 (see finding 17). (8)
      - Delete 3.1's second sentence (see finding 19). (7)
      - In 3.2, define the bracketed SEAS community once and reuse it. (8)

      These cuts save about 240 words. The fixes above add roughly 250 to 300, so the master will stay near 6,000 words of agreement text. Recommended: accept that figure, since the master replaces two documents in approach A, and judge the master on readability rather than word count.
    - **Readability for each stakeholder:**
      - A TA who signs no Schedule is bound by about 1,500 words (Sections 1, 2.5, 3, 8, 10.5, and 12), but must sign all 6,000.
      - A partner's lawyer needs about two-thirds of the text.
      - Students meet 5.8 (302 words) and 7.4 (269 words), the densest parts, before they know their project.

      Move Section 8 (Course Staff) to follow Section 3, so the course-wide terms sit together. Put a non-binding one-page reading map (which sections each reader needs) in the Student Guide and in the partner cover email, not in the master. Split the sentences over 50 words: 3.4, 5.7(b), 6.2, the "parties" bullet in 1.1, the "Course Community" bullet in 3.2, 10.4, and 10.5. For example, 3.4 could read: "Each student and member of the Course Staff must keep the Course Private Information of any Project whose Schedule they have not signed within the Course Community, and use it only for the Course. They must never pass it to any Partner other than that Project's own. That Project's Partner and Project Students (or, without a Partner, its Project Students) may consent otherwise in writing. No Partner may ask anyone for another Project's Restricted Information without that consent."

## Scenario check

| # | Scenario | Does the draft give the README's answer? |
| --- | --- | --- |
| 1 | Defaults | Yes. |
| 2 | Course Private, open licenses | Yes. See finding 13 on what the certification covers. |
| 3 | TA needs Confidential Information | Yes. The signing TA also gains a say over later changes (finding 28). |
| 4 | Closed code, open paper | Partly. The answer omits the Course Private limits on the paper (finding 30). |
| 5 | Dual-licensed software | Yes. |
| 6 | FSL with a startup | Yes for these facts. If a competitor later acquires the company, see finding 4. |
| 7 | Assignment and a patent | Yes. The counsel note on poster-session patent risk is apt. |
| 8 | Holdout teammate | No, as drafted. The transfer is not effective, the company cannot enforce, and the notice may not arrive (findings 1, 5, and 6). |
| 9 | Two startups | Yes. |
| 10 | Late joiner and early leaver | Yes. Under joint ownership, see finding 34. |
| 11 | Reassignment | Yes, but the grant needs operative words (finding 16). |
| 12 | Change of mind | Partly. "Clean title" is overstated (finding 29). |
| 13 | New Partner Contact; partner acquired | Partly. The citation for the successor is wrong, the officer is tied to one person, and the Student Company test is at issue (findings 30, 19, and 4). |
| 14 | Demonstrations after the Course | Yes. |
| 15 | Generative AI | Yes on MA 3.6. The "public forum" claim is unsupported, and 3.6's wording needs fixing (findings 30 and 25). |
| 16 | Individual project, keep all rights | Yes. |
| 17 | Team project with FSL | No. Teammate Licenses override the FSL restrictions (finding 3). |
| 18 | Team project, Course Private | Yes, subject to findings 14 and 26. |
| 19 | Inadvertent disclosure | Yes. The README is candid that outside guests are not bound. |
| 20 | Employer's information | Yes. Not addressed: a part-time employer's invention-assignment agreement may claim the student's project work. Consider a warning in the Student Guide. |
| 21 | Capstone student | Yes. |
| 22 | Harvard has rights | Yes. |
| 23 | Two-term course | Yes. A correction cannot be made for a whole year (finding 23). |
| 24 | Course Staff | Partly. The grades answer is right, but "title clear" is wrong (finding 15). |

## Checked and found clean

- The brief's decisions not named above are carried as the README says: Open Science and its default rule, publication review and the patent notice, the Confidentiality Period, the Enabling License, the Student Guide, Harvard's approval on file, the register items in sections A and C to H, and the counsel placeholders for v0.5 §7.5, §9.3, and R-8.
- Every section number cited in the four documents exists. Apart from finding 30, every README citation says what the README claims.
- Defined terms are each defined once, at or before first use, and no capitalized term is used undefined. The only naming wobble is "Schedule" in the master and "Project Schedule" on the form, which is harmless.
- There is no "shall", no AI model name, and no line made only of underscores. Every blank has a label, harvard.edu fields use the required label, and the README tables have consistent columns.
- A full scan of all five files found no list of three or more that lacks the serial comma.
- The buyout counsel note covers enforceability, securities, and tax, as the brief requires. Finding 1 adds § 204(a) and the other points listed there.

## Overall assessment

**Strengths.** This is the most coherent structure of the three for course-wide protections. Students, Course Staff, and partners make direct promises to each other, so v0.5's third-party-beneficiary lists and Exhibit D's "as if a Participant" references disappear. Course Staff sign once, which settles R-4. One schedule works for every project type. Joining, leaving, and reassignment are simple because everyone has signed before choosing a project. Each choice has one complete subsection, the drafting is mostly plain, and the README is candid about weaknesses.

**Weaknesses.** The single instrument is also its main risk. Every party reads, and is bound by, every term, so literal errors spread to everyone (findings 8, 10, 18, and 24). Partners join an agreement with parties and documents they cannot see, cannot negotiate, and cannot correct mid-offering (findings 18 and 23). The course-wide protection that partners get is hard to prove without a FERPA consent (finding 7). The intellectual property mechanics need work before counsel review: the buyout transfers nothing and is run by a non-party (findings 1, 5, and 6), Teammate Licenses undo FSL (finding 3), and the Student Company test lets competitors in (finding 4). The master is also over its length target, and cuts will not bring it under once the fixes are in. Fixing findings 1 to 12 would make the approach sound. Whether partners will sign a multi-party master at all is a question to test with two or three real partners' counsel before choosing this approach.
