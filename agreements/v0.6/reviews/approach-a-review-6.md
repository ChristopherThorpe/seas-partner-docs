# Review 6: approach A after round 6 (the buyout and the right to purchase move out)

Scope: commit 3546d28 against 92a4268. I read the round 6 owner's edits (E1 to E7), R39 to R44 and R43a, the earlier decisions, BRIEF.md, SCENARIOS.md, and CLAUDE.md. I read in full the Course Agreement ("CA"), the Project Agreement ("PA"), Exhibit A, both scenario papers, the Student Guide and its sources, the approach A README, and the top-level README's approach A section. This review leaves out findings from reviews 1 to 5 unless round 6 made them worse.

## Findings, most important first

1. **The change rules don't exempt an Add-On Agreement, and Partner never agrees to CA 5.5.** DECISION.
    - **Text.** CA 8.4: "This agreement may be changed only in a writing signed by every Signer". PA 6.3: "Before the end of the Duration, nothing else in this agreement may be changed, apart from the consents, approvals, notices, joinders, and credit-process changes it allows." PA 1.2: "Partner and any student Signers may also sign an Add-On Agreement under Course Agreement Section 5.5, which binds only those who sign it." PA 6.8: "and any Add-On Agreement that Partner signs".
    - **Problem.** CA 5.5 says an Add-On Agreement "governs over this agreement and their Project Terms", and it recommends signing one "early in the project". That is during the Duration, exactly when PA 6.3 bars every change not on its list.
        - Students accept CA 5.5, because PA 1.2 binds them to CA 5. Partner agrees only to CA 3.1, 3.2, 7.2, 7.4, 7.5, and 8.2.
        - PA 1.2's new sentence lets Partner sign an add-on. It doesn't say the add-on governs over the PA, or that it isn't a change.
        - So a Partner that wants out of a purchase add-on signed in week 3 has a textual argument that the add-on was a forbidden change. A non-signing student has the same argument under CA 8.4, which needs every Signer in the Course.
        - PA 6.8 names only add-ons "that Partner signs". That invites the argument that the PA's entire-agreement sentence supersedes, among the student Signers, a students-only add-on signed before the PA.
        - Nothing says who signs an add-on for Partner. PA 6.1 requires the authorized officer only for changes.
    - **Why decide now.** The drafter left this to counsel (README, Round 6, choice 8). But E3 asks that "nothing in the course documents blocks an Add-On Agreement", and the fix is three sentences.
    - **Fix.**
        - CA 8.4, after "and no Signer may assign it.", add: "An Add-On Agreement under Section 5.5 is not a change to this agreement or to any Project Terms." This also covers CA 6.5.
        - PA 1.2, replace the last sentence with: "Partner, by its authorized officer, and any student Signers may also sign an Add-On Agreement under Course Agreement Section 5.5. It binds only those who sign it, governs over this agreement among them, and is not a change to this agreement under Section 6.3."
        - PA 6.8: "This agreement, with the Course Agreement as it applies to the Project and any Add-On Agreement among any of them, is the entire agreement among Partner and the Signers about the Project."
        - Then have the note after CA 5.5 ask counsel to confirm these sentences, and update README choice 8.
        - Optional, in Exhibit A: "An Add-On Agreement under Course Agreement Section 5.5 is not a change to a template."

2. **CA 5.4's "every holder of a license in it" can't be met with a Partner, and it conflicts with CA 5.5.** DECISION.
    - **Text.** "Course work stays non-exclusive, except under an Add-On Agreement that every holder of a license in it signs."
    - **Problem.**
        - (a) "Every holder of a license" includes the Partner (the Partner License), every Student Company that a Teammate license extends to, any licensee, and the public under any public license. On a project with a Partner, no students-only add-on can meet the test. Yet the buyout draft is students-only by design (its drafting choice 1), and its purpose is exclusivity: Section 2(g) says "there is no exclusivity to gain".
        - (b) CA 5.5 lets an add-on govern over the CA among its signers, while 5.4 says the work stays non-exclusive unless every holder signs. A court would have to pick one for a students-only buyout.
        - (c) CA 5.3 and 5.7 use "an Add-On Agreement that its holder signs". CA 5.4 uses a different test.
        - (d) README scenario 8 says the company can get exclusive rights if "the fourth student agrees in writing". With a Partner, CA 5.4 says otherwise.
        - The protection that README choice 5 gives as the reason ("work becomes exclusive only if every license holder, including any Partner, gives up its license") already follows from the last sentence of CA 5.5.
    - **Fix.** "Course work stays non-exclusive, except as an Add-On Agreement provides among those who sign it." Conforming changes:
        - README choice 5.
        - Scenario 4: "No student can get exclusive rights in the code except under an Add-On Agreement, which binds only those who sign it; the Partner License remains."
        - Scenario 8: "The company cannot get exclusive rights as against the fourth student unless ...".

3. **CA 5.5 doesn't limit what an Add-On Agreement can override, and the definition is loose.** DECISION.
    - **Text.** "A written agreement about these questions among some or all of a project's students, and its Partner if it signs (an "**Add-On Agreement**"), binds only those who sign it. Among them, it governs over this agreement and their Project Terms."
    - **Problem.**
        - (a) "Governs over this agreement" has no subject limit. Suppose a writing "about these questions" also changes the information choice or the ownership choice. Among its signers, it would then do so without the instructor's approval that CA 2.1 ("for any later change"), CA 6.5, and PA 6.3 require. That approval protects students from a Partner's pressure, and the last sentence of CA 5.5 doesn't preserve it, because it isn't a non-signer's right.
        - (b) The definition says "written" but not "signed". An email thread can be a written agreement, but an assignment needs a signed writing (17 U.S.C. § 204(a); 35 U.S.C. § 261).
        - (c) In a buyout or a founders' assignment, the natural counterparty is the Student Company. The definition names only students and the Partner, so an agreement the company also signs may fall outside it.
    - **Fix.** "A written agreement about these questions, signed by some or all of a project's students and, if they sign it, by its Partner or a Student Company (an "**Add-On Agreement**"), binds only those who sign it. Among them, and only on these questions, it governs over this agreement and their Project Terms. It does not change a project's choices, which change only as Section 6.5 or the Project Agreement allows."

4. **Teammate add-on, Section 2(d) to (f): no one is bound to pay the price.** DECISION.
    - **Text.**
        - 2(d): "The company must offer the Teammate fully vested equity ...".
        - 2(e): "The assignment takes effect only if the company has first promised in writing to keep the Teammate's commitments about the work, such as the Partner's license and confidentiality."
        - 2(f): "A dispute about the price does not delay the assignment. It is a claim for the difference only."
    - **Problem.** The company is not a Party (Section 1), so "must offer" binds no one, and tendering the price is only a condition. The company's one written promise covers the Teammate's commitments, not the price. If the company tenders less than the floor, the assignment still takes effect (2(f)). The Teammate's "claim for the difference" then has no clear defendant: the company never promised to pay, and the draft puts no duty on the founders.
        - The removed text had the same gap, and the paper's "Money only" bullet doesn't mention it.
        - It is the main fairness gap for the student who is bought out, and Option 1 would carry it too.
    - **Fix.**
        - In 2(e): "The assignment takes effect only if the company has first promised the Teammate in writing [to pay any part of the price under paragraph (d) that is later found to be owed, and] to keep the Teammate's commitments about the work, such as the Partner's license and confidentiality."
        - Add it as drafting choice 9.
        - Under "What may not be fair", add: "**Who pays a shortfall.** In the removed text, the company never promised to pay; tendering the price was only a condition of the assignment."

5. **Purchase add-on, Section 1: the Partner may not be a "Party".** MECHANICAL.
    - **Text.** "It is made among the project's Partner and the students on the project who sign it (each a "**Party**"), and binds only them."
    - **Problem.** The parenthetical attaches to "the students ... who sign it". If the Partner isn't a Party, two things follow:
        - Section 4's "changed only in a writing signed by every Party" lets the students change the agreement without the Partner.
        - Section 4's "Each Party confirms that it may enter into this agreement" doesn't reach the Partner.
        - Drafting choice 1 shows that the Partner is meant to be a Party.
    - **Fix.** "It is made among the project's Partner and those of the project's students who sign it (each of them, including the Partner, a "**Party**"), and binds only them."

6. **Purchase add-on, Section 2(e): it ends exclusive licenses held by people who never agreed.** DECISION.
    - **Text.** 2(e): "The purchase ends any exclusive license in the work and is subject to non-exclusive licenses granted before the notice." Section 1: "It cannot reduce the rights of anyone who does not sign it".
    - **Problem.** Old CA 5.7 bound the Partner from the moment it owned the work, so every exclusive licensee had to agree first under 5.7(f). An Add-On Agreement can be signed at any time; CA 5.5 only recommends early. If the Partner granted an exclusive license before signing, 2(e) claims to end a non-signer's license, which Section 1 and CA 5.5 forbid. This is new substance created by the move to an add-on.
    - **Fix.** "[The purchase ends any exclusive license in the work whose licensee agreed to be bound under paragraph (f), and is subject to every other license granted before the notice.]" List it as a drafting choice.

7. **Teammate add-on, Section 2(b): a company of students who didn't sign may buy out students who did.** DECISION.
    - **Text.** "a Student Company of one or more of the team's students that is actively developing the work may buy out that Teammate's rights in it". Drafting choice 4: "whether or not they signed".
    - **Problem.** The terms aren't mutual. A student who refuses to sign can never be bought out, yet their company may buy out every student who did sign. That rewards holding out, which is what the add-on exists to cure. It is hard to present to counsel as fair (R43a), and the paper doesn't point out the asymmetry.
    - **Fix.** "a Student Company of one or more [Parties][of the team's students]". I recommend "Parties". Update drafting choice 4, and note the asymmetry under "Open choices".

8. **Both scenario papers: the R43a framing.** DECISION.
    - **Text.**
        - R43a: "The scenario documents start with your decision for counsel".
        - README, Round 6: "Each document now opens with that decision".
        - Both papers instead open with "1. The situation" and "2. Why it matters". Section 3 holds the decision, and it quotes only the owner's follow-up.
        - Buyout paper, Option 1: "The way out answers the concern that the Course would be pushing students into these terms."
    - **Problem.**
        - (a) The README's statement is inaccurate, and counsel reading from the top meets the decision third.
        - (b) Counsel sees only the follow-up, which leans toward a default. The owner's first text, which explains the hesitation, is missing: "I'm just not sure it's appropriate for the course to push students into that" and "I think creating a default for those things creates trouble".
        - (c) "Answers the concern" states, as fact, the conclusion counsel is being asked to reach. The paper's own Risks say "most teams will keep it without reading it".
    - **Fix.**
        - (a) Right after each title, add: "**The decision for counsel.** Should the agreements enforce a sensible, fair default [buyout of an inactive Teammate | right to purchase unused work], while making it easy for those affected to choose anything else? Until counsel answers, the agreements set no default: CA 5.5 recommends a written agreement and allows an optional Add-On Agreement." Alternatively, move Section 3 to the top and keep the README as it is.
        - (b) In Section 3, quote the owner's November 10 text before the follow-up.
        - (c) Replace the Option 1 sentence with: "The way out is meant to answer the owner's concern that the Course would be pushing students into these terms; whether it does is part of the decision."

9. **Purchase add-on, Section 3: no notice rule for later owners.** MECHANICAL.
    - **Text.** "Notices under this agreement follow Course Agreement Section 8.5, using the contact details below and, for the Partner, those in the Project Agreement, as updated."
    - **Problem.** Round 6 rightly cut this clause from CA 8.5(f): "or to any other later owner under Section 5.7, goes to the email address most recently given for it in writing under these agreements". But the add-on doesn't carry it, as E5 requires. CA 8.5 covers only students, Course Staff, Partners, and Student Companies. So the notice and proposals under Section 2(c), and the agreement under step 5, have no channel to a later owner, which is not a Party. Section 2(f) collects the later owner's email address, but nothing says notices go there.
    - **Fix.** Add: "A notice to a later owner or exclusive licensee goes to the email address most recently given for it in writing under Section 2(f) or this Section 3." List it as a drafting choice.

10. **CA 5.5, first sentence: it overstates what the agreements leave open.** MECHANICAL.
    - **Text.** "These agreements do not decide what happens if some of a team's students want to build a business on its Project Work Product and others do not".
    - **Problem.** CA 5.3 and 5.4 decide the baseline for exactly that case: each student may use the work through a Student Company, no one owes an accounting, and separate companies keep their licenses. Read literally, the sentence disclaims them.
    - **Fix.** "Apart from Sections 5.3 and 5.4, these agreements do not decide what happens ...".

11. **The fairness lists have two inaccuracies and leave out the buyout's main cost to the student.** MECHANICAL.
    - **Purchase, "What already makes the drafted terms fair", bullet 4.** The paper says "A Partner that owned the work keeps a perpetual, non-exclusive, royalty-free license ..., transferable with its business." Old 5.7(e) reads "If the owner is the Partner, it keeps ... transferable only with its business", so a Partner that already sold the work keeps nothing. Fix: "If the Partner is still the owner, it keeps a perpetual, non-exclusive, royalty-free license to use and exploit the work for any purpose, transferable only with its business."
    - **Buyout, same list, bullet 6.** "The Teammate keeps the right to describe and show their own contribution in a portfolio or academic setting" leaves out a limit. Add ", without distributing it", as in old 5.5(e).
    - **Buyout, "What may not be fair".** Old 5.5(e) "ends the Teammate's rights in the work", including the Teammate's own license, so they can't use the work in a later job or company. The brief bracketed this point, and R17 settled it. Add: "**The Teammate's own use ends.** The buyout ends all of the Teammate's rights in the work, including their Teammate license, except the portfolio and academic exception. Starting to use the work after the notice does not stop it."

12. **Purchase paper: "the owner" means two different people.** MECHANICAL.
    - **Text.** Section 3: "The owner asks counsel to help judge ... for example, the owner picks among competing student bids in its sole discretion". Section 5, R1: "the owner states its costs, and signs the assignment, within 30 days each. The owner's goal: ...".
    - **Problem.** The same word names the person directing these drafts and whoever owns the work, sometimes within one bullet.
    - **Fix.** In Sections 1 to 7, write "the work's owner" wherever the owner of the work is meant (about 20 places, in Sections 1, 3, 4, 5, and 6). Add to the opening paragraph: "In this paper, "the owner" is the person directing these drafts. In the appendices, as in the removed text, "the owner" is whoever owns the work."

13. **Both add-ons, Section 4: the general terms are incomplete, and the two forms differ.** MECHANICAL.
    - **Problem.** The drafting choices say the general terms are "written out from CA 8.4" (and, for the purchase, PA 6.7 and 6.8) "so the form reads on its own". But both forms drop CA 8.4's "including" rule and its severability sentence, which matter for the power of attorney and the forced assignment. The purchase form also drops the students' confirmation that they have read the agreement, had the chance to ask questions and consult advisors, and sign voluntarily. The buyout form and PA 6.7 both keep it.
    - **Fix.** Add to both forms: ""Including" means "including without limitation". An unenforceable term is enforced as far as the law allows, and the rest stays in effect." Add to the purchase form: "Each student who is a Party also confirms that they have read this agreement, have had the chance to ask questions and consult advisors, and sign voluntarily."

14. **Buyout paper, Section 1: wrong citation.** MECHANICAL.
    - **Text.** "The fourth student keeps their share and their license, and only they can give them up (CA 5.4)."
    - **Problem.** CA 5.4 is about exclusivity. That only the holder can end a license comes from CA 5.3; that an add-on can't reduce a non-signer's rights comes from CA 5.5.
    - **Fix.** "(CA 5.3 and 5.5)".

15. **CA 5.7 and PA 4.3(f): the carve-outs cover only Teammate licenses and "that Section".** DECISION.
    - **Text.** CA 5.7: "This does not change how a Teammate license ends under Section 5.1, or an Add-On Agreement that its holder signs." PA 4.3(f): "Any transfer under that Section remains subject to the Partner License and any public license."
    - **Problem.**
        - CA 5.7 makes the Partner License irrevocable and carves out only Teammate licenses. That invites the reading that a Partner can't give up its license even in an add-on it signs, which is a common startup request for clean title.
        - CA Section 5 no longer contains any transfer, so PA 4.3(f)'s "under that Section" matches nothing. README choice 10 reads it as covering add-ons. Either way, it doesn't cover a founder's assignment to their company outside an add-on.
    - **Fix.** CA 5.7: "This does not stop a license from ending under Section 5.1, or under an Add-On Agreement that its holder signs." PA 4.3(f): "Any transfer of a student Signer's rights, including under an Add-On Agreement, remains subject to the Partner License and any public license."

16. **CA 1.5, 5.3, and 5.4 use "Add-On Agreement" before CA 5.5 defines it.** DECISION.
    - **Problem.** CLAUDE.md says to define each term at its first use. The drafter disclosed this as README choice 3.
    - **Fix.** Either accept it as disclosed (recommended, since each use points to Section 5.5), or define the term in CA 1.5: "An agreement under Section 5.5 about later use (an "**Add-On Agreement**") governs over both among those who sign it." CA 5.5 would then say the agreement "is an Add-On Agreement".

17. **README, "For the owner": an item that R38 made stale.** MECHANICAL.
    - **Text.** "Whether to keep the bracketed capstone option in CA 2.4(b), and with it the bracketed words in CA 6.1 and the Project Election."
    - **Problem.** R38 replaced CA 2.4, which now has no paragraph (b), and removed those brackets (README, "Trimming pass reverted", last bullet). Round 6 rewrote this list but kept the item.
    - **Fix.** Delete the bullet.

## Checked and found correct

- **Appendix 1 of both papers is word for word.** I matched every paragraph, list item, and quoted sentence against `git show 92a4268` of the CA, the PA, and Exhibit A. Only the heading levels and the labels before quoted sentences differ, as the papers say. Each appendix includes every related line that E5, item 8, lists for its default.
- **No leftovers.** Nothing in the CA, the PA, Exhibit A, or the Student Guide still refers to the buyout, the right to purchase, Exhibit B, Part 1 or 2, old CA 5.8, old PA 4.5(h), or CA 5.1's former definition of commercial use. PA 3.6 uses "commercial use" on its own terms.
- **Cross-references.** Every cross-reference in the changed text exists and says what is claimed: CA 1.5, 5.1, 5.3, 5.4, the note after 5.5, 5.7, 8.3, 8.5(f), and the roster; PA 1.2, 4.3(f), 4.5, 6.8, and the cover page's "Section 4.5(f)"; and Exhibit A's "4.5(g)".
- **E1 to E7 are all applied,** and the Student Guide's "Planning ahead" contains each E6 element.
- **The draft add-ons.** Apart from findings 4, 6, 7, and 9, every departure from the removed text is bracketed or listed under "Drafting choices".
- **The owner's decisions.** Each paper's "owner's decisions so far" summarizes the decisions file accurately.
- **README scenarios.** Scenarios 9 and 13 match SCENARIOS.md and the documents, and so does scenario 8 apart from finding 2. The signing table's Student Company and Add-On rows are correct, and the README's word counts are within a few percent.
- **Style.** No "shall"; no line made only of underscores; every blank has a label; every note for counsel begins `> **Note for counsel:**`; no missing serial commas in the changed text; and no AI model names.

## Overall assessment

Round 6 is clean as a removal. The removed text is preserved exactly, nothing in the binding documents still depends on it, and the renumbering is right. The scenario papers are balanced and readable on their own, and they put counsel's real questions in front of counsel.

The weak point is the hook itself. CA 5.5, together with CA 5.4, 8.4, and PA 1.2, 6.3, and 6.8, doesn't yet do what E3 asks, which is to let an add-on "fit cleanly". The change rules, PA 6.3 above all, still read as forbidding an add-on during the Duration. Partner has never agreed to CA 5.5. CA 5.4's new test can't be met on any project with a Partner. And CA 5.5 sets no subject limit on what an add-on may override. Findings 1 to 3 fix all of this in about five sentences without changing any decision.

The two draft add-ons need findings 4 to 7 and 9 before counsel sees them as models. R39, which removes both defaults rather than only the purchase, still awaits the owner's confirmation.
