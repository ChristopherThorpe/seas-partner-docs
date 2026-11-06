# Second review of approach A (v0.6), after the owner's second set of edits

Approach A absorbed the owner's second round cleanly at the mechanical level. The renamed information choices, the swap of Sections 5.2 and 5.3, Exhibit A, and the capitalization pass are consistent, and every cited section exists and says what is claimed.

The problems are in the two substantive additions, and in one earlier fix:

- **Partner's protection (CA 7.5)** is broad enough to release Partners from Harvard's contract and IP claims, and from students' injury, harassment, and infringement claims. Harvard's agreement to it in Exhibit A contradicts CA 7.1.
- **The buyback (CA 5.7)** has a timing ambiguity, no rule for competing notices, and can be defeated by a Partner that transfers the work.
- **A sentence added after the first review** (PA 1.2's meaning of "Signer") now undoes the backstop that binds students who never signed the Course Agreement.

I read BRIEF.md, SCENARIOS.md, the decision register, the owner's edits of November 6, the first review, the v0.5 sections I needed, all four approach-a files, and the Student Guide, each in full. I wrote only this file and ran no git.

Below, CA is the Course Agreement and PA the Project Agreement.

**Checked and clean:**

- No "shall" and no AI model names. No line is made only of underscores, and every blank has a label.
- A scripted scan, with a manual check of every hit, found no missing Oxford commas in the agreements, Exhibit A, the README, or the Student Guide.
- **Defined terms.** A case-sensitive search for every defined term in lowercase found only ordinary-sense uses:
    - "the partner named below", where the PA intro defines Partner;
    - "signer" and "signers" for Project Agreement signers (CA 1.3, 2.3, and 4.3);
    - "confidential information" (CA 3.1 and 3.3).
    I found no ordinary word wrongly capitalized. The exceptions are finding 18 (the PA uses "Partner" for other projects' sponsors) and finding 26 ("affiliates").
- **The 5.2/5.3 swap.** Every reference now points to the right section: CA 5.1, 5.3, 5.4, 5.5(f), and 8.3; the note after PA 4.3; README scenarios 1, 4, 6, 9, 13, and 17; and README decisions 8 and 10.
- **The renamed information choices** appear everywhere they should: CA 2.1, 6.2, and the Project Election; PA cover page, 2.2, 2.4, 3.2, 3.3, and 4.5; the README; and the Student Guide. Partner may mark information Open under both new names (PA 2.2(b) and (c)).
- **Publication review.** The cover page, PA 3.3, PA 4.5(e), and PA 4.5(f) say exactly what the owner asked.
- **The owner's text** is reproduced as written, apart from the changes the README reports.
- **"Kept on file"** no longer appears in approach A or the Student Guide.
- **Word counts.** The README's counts are close to mine: CA Sections 1 to 8, 4,160; roster, Project Election, and Exhibit A page, about 430 without blanks; PA standard terms, 4,196; notes for counsel, 448 (CA) and 181 (PA).

## Findings, most important first

**1. CA 7.5 releases far more than mutuality needs.** DECISION (strongly recommended)

- **Quote (CA 7.5):** "To the fullest extent the law allows, no Partner is liable to Harvard, the Course Staff, or any student for any claim arising out of or relating to the Course or its project, except for its own breach of its Project Agreement (subject to any limit on liability in that agreement)[, and its gross negligence, willful misconduct, or worse]. No Signer may assert such a claim against a Partner."
- **Problem (a), Harvard's own contracts and IP.**
    - A "Separate Agreement" (CA 7.2) is an agreement between Harvard and a Partner "about the Course or a project". A claim under it arises out of or relates to the Course, and it is not a breach of the Project Agreement. So 7.5, which Harvard accepts in Exhibit A, releases it.
    - The same goes for a Partner's infringement of Harvard-owned IP.
    - That contradicts CA 7.2 ("do not ... amend any agreement between Harvard and a Partner"; heading "Harvard's rights come first") and brief item 10.
    - CA 7.2 does not resolve the conflict. It ranks a Separate Agreement above "a Project Agreement" only, not above the Course Agreement.
- **Problem (b), students' IP.**
    - Suppose a Partner copies another project's work, licensed "None" and not Course Private Information. It has breached no Project Agreement, so 7.5 bars the students' infringement claim.
    - PA 5.3 has the same gap within a project. If Partner exceeds the Partner License (for example, sublicenses without consent), a court may treat the limit as a condition of the license rather than a covenant. The claim is then infringement, not "breach of this agreement", and the student has released it.
- **Problem (c), personal claims.**
    - "Any claim arising out of or relating to the Course" includes bodily injury on a site visit, harassment or discrimination by a Partner's employee at a poster session, and misuse of a student's personal data.
    - Every student in the Course gives this release, including students on projects without a Partner. They give it in an agreement they must sign to take the Course (CA 1.1), and some are under 18.
    - The note after 7.5 asks counsel only about consistency with PA 5.3 and 5.4.
- **Fix:**
    - Add after the second sentence of CA 7.5: "This Section 7.5 does not cover (a) any claim under a Separate Agreement, or for infringement or misappropriation of anyone's intellectual property or confidential information; or (b) any claim for bodily injury, property damage, harassment, discrimination, or misuse of personal information."
    - In PA 5.3, replace "A release does not cover anything caused by the released party's breach of this agreement" with "A release does not cover anything caused by the released party's breach of this agreement, or by its use of intellectual property beyond the rights this agreement grants". Keep the bracket that follows.
    - In CA 7.2, replace "a Separate Agreement governs if it conflicts with a Project Agreement" with "a Separate Agreement governs if it conflicts with this agreement or a Project Agreement".
    - Add to the note after CA 7.5: "Please confirm that the releases in Section 7.5 and Project Agreement Section 5.3 are enforceable against students who must sign this agreement to take the Course, including students under 18, and which claims Massachusetts law does not allow a person to release in advance."
- **If the owner prefers a narrower fix:** limit 7.5 to claims "arising out of or relating to its project's work or Project Work Product", and drop "the Course".

**2. Harvard's agreement to CA 7.5 in Exhibit A contradicts "Harvard has no obligations".** DECISION (drafter decision 28)

- **Quotes:**
    - CA 7.1: "Harvard is not a party to this agreement or to any Project Terms, and has no obligations under them."
    - Exhibit A: "Harvard also agrees to Course Agreement Section 7.5 (Partner's protection) as it applies to claims by Harvard, and each Partner may enforce it against Harvard."
    - Note after CA 7.5: "Harvard is bound by it only through its approval (Exhibit A)."
- **Problem:**
    - The owner asked that no Partner be liable to Harvard, but did not say how Harvard is bound.
    - The drafter has Harvard give a covenant not to sue, which Partners may enforce, in a document now attached to every Course Agreement. That is an obligation, so CA 7.1 is no longer accurate on its face.
    - It also sits uneasily with brief item 10 ("Harvard is not a party").
    - A one-sided approval with no counterparty and no stated consideration may not bind Harvard at all, and the note does not ask.
- **Fix (if Harvard's agreement stays):**
    - CA 7.1, first sentence: "Harvard is not a party to this agreement or to any Project Terms, and has no obligations under them, except as it agrees to Section 7.5 in Exhibit A."
    - Replace the second sentence of the note after CA 7.5 with: "Harvard is bound by it only through its signed approval (Exhibit A), which has no counterparty. Please confirm that this binds Harvard, or advise whether Harvard's agreement belongs in a Separate Agreement instead."
- **Alternative (my recommendation to raise with the owner):** drop Harvard from CA 7.5 and from Exhibit A, and leave liability between Harvard and a Partner to any Separate Agreement. This keeps brief item 10 intact and makes Harvard's signature easier to get.

**3. PA 1.2's meaning of "Signer" undoes the binding of students who never signed the Course Agreement.** MECHANICAL

- **Quotes (PA 1.2):**
    - "Terms defined there have the same meanings here, except that in this agreement "Signer" means a Signer of this agreement, while in a Course Agreement section it means a Signer of the Course Agreement."
    - "Each student Signer agrees with Partner and every other Signer to Course Agreement Sections 2.3, 3, 5, 7.5, and 8, whether or not they have signed the Course Agreement."
- **Problem:**
    - CA Section 3 binds "A Signer" (3.1, 3.2, and 3.3) and "Signers who use generative AI tools" (3.4). CA 8.3 lets "Signers" enforce.
    - Under the first sentence, a student who never signed the Course Agreement is not a "Signer" in those sections. Agreeing to them binds the student to nothing.
    - That student is exactly who the second sentence exists for (README, first weakness).
    - Partner avoids the problem with "as if it had signed the Course Agreement"; the student sentence lacks those words.
    - The list also omits CA 7.2 and 7.4. A student who has not signed the Course Agreement is then neither subject to Harvard's rights nor barred from suing Harvard or the Course Staff.
- **Fix:** "Each student Signer agrees with Partner and every other Signer to Course Agreement Sections 2.3, 3, 5, 7.2, 7.4, 7.5, and 8, as if they had signed the Course Agreement, whether or not they have."

**4. A Partner can defeat the buyback by transferring the work.** DECISION

- **Quotes:**
    - CA 5.7(b): "neither the Partner nor any of its licensees is using the work commercially or pursuing a patent on it."
    - CA 5.7(c): "the Partner hereby assigns the work to the Student Company".
    - PA 6.4: "Partner may assign this agreement, on notice to the Signers, to a successor to all or substantially all of the business to which it relates".
    - README scenario 13: "the buyback in CA 5.7 then runs against the buyer."
- **Problem:**
    - Nothing stops Partner from assigning the Project Work Product itself, rather than the Project Agreement, for example to an affiliate or to a patent buyer.
    - The new owner is neither "the Partner" nor one of "its licensees". Its use cannot block a notice, and the condition in 5.7(b) is tested against the wrong people.
    - When the condition is met, Partner "hereby assigns" what it no longer owns.
    - A later transferee that records first will usually beat the earlier, unrecorded conditional assignment anyway (17 U.S.C. § 205(d); 35 U.S.C. § 261).
    - So the README's scenario 13 answer holds only if Partner's business and the Project Agreement move together.
    - Similarly, an exclusive license outstanding at the time of the buyback would leave the Student Company with bare title.
- **Fix:**
    - Add to PA 4.5(g): "Partner must not transfer the Project Work Product, or grant an exclusive license in it, unless the transferee or licensee first agrees in writing to be bound by Course Agreement Section 5.7 as Partner is."
    - Add to CA 5.7(a): "In this Section 5.7, "the Partner" includes any later owner of the work."
    - Add to the note after CA 5.7: "...and how the Student Company's conditional assignment can be protected against later transferees."
- **Why DECISION:** Partners may resist a limit on transferring work they own. Without it, though, the buyback is optional for any Partner that wants to avoid it.

**5. CA 5.5(g) has no rule if the Teammate does not choose.** DECISION

- **Quote (CA 5.5(g)):** "If more than one Student Company gives notice to the same Teammate, the Teammate may choose their preferred terms."
- **Problem:**
    - The buyout exists for a Teammate who "won't sign anything" (scenario 8). Suppose two companies give notice and that Teammate stays silent. Nothing chooses between the two notices.
    - Under 5.5(d), each company's payment or tender triggers its own present assignment of "all of their rights in the work". Two assignments of the same rights then take effect, and priority turns on recording rules (17 U.S.C. § 205(d)) rather than on the agreement.
    - "Their preferred terms" also does not say what is chosen (a company to join, or one to be bought out by), or what becomes of the other notices.
    - The README's scenario 8 answer ("If two companies give notice, the Teammate chooses") inherits the gap.
- **Fix (keeps the owner's words and adds a default):** "(g) If more than one Student Company gives notice to the same Teammate, the Teammate may choose their preferred terms by written notice to those companies within [60] days after receiving the last notice. The other notices then have no effect. If the Teammate does not choose in time, only the first notice the Teammate received has effect."

**6. The Course Agreement has no notices clause, yet the buyout's deadline runs from receipt of a notice.** DECISION

- **Quotes:**
    - CA 5.5(c): "by written notice within [60] days after receiving the notice".
    - Signature roster: "Email (ending in harvard.edu)".
- **Problem:**
    - The PA has a notices clause (PA 6.2); the Course Agreement has none.
    - A buyout notice comes only after the Teammate's End Date, often after graduation, when the harvard.edu address on the roster may be closed.
    - A holdout can say they never received the notice. The [60] days then never start, and paragraph (d) never applies.
    - Notices replacing an FSL Representative (CA 6.4(d)) have the same problem.
- **Fix:**
    - Add: "**8.5 Notices.** Notices under this agreement must be in writing, and email is enough. A notice to a student is received when sent to the email address in their roster entry or Project Agreement signature entry, or to another address the student has given the sender by notice."
    - Optionally, add to the roster entry: "Personal email, for notices after the Course (optional): ______________________________".

**7. CA 5.7(b) can be read to test non-use on one day only.** MECHANICAL

- **Quote (CA 5.7(b)):** "may give the Partner written notice if, [2] years after the end of the Duration, neither the Partner nor any of its licensees is using the work commercially or pursuing a patent on it."
- **Problem:**
    - Read literally, the test is applied on the second anniversary only. A Partner that is using the work on that day, and then abandons it in year 3, would never face the buyback.
    - The owner's term ("[2] years after the Course ends, Partner and its licensees are not using the work") means at any time from then on.
    - The README (scenario 7: "unused and unpatented for [2] years") and the Student Guide ("If, [2] years after the Course ends") each read it differently.
- **Fix:** "(b) At any time from [2] years after the end of the Duration, a Student Company of one or more of the project's students may give the Partner written notice, if neither the Partner nor any of its licensees is then using the work commercially or pursuing a patent on it."
- **For the owner:** "pursuing a patent" does not clearly cover holding an issued patent that no one uses.
    - If an unused issued patent should not block the buyback ("use it or lose it"), the text works.
    - If it should block it, say "pursuing or holding a patent".

**8. Competing buyback notices (CA 5.7): the drafter's open point 3.** DECISION

- **Problem:**
    - CA 5.7 does not say what happens if two Student Companies of the same project give notice.
    - Paragraph (c) is a self-executing assignment "effective at the end of that period". Two notices therefore produce two present assignments of the same work, and recording decides who wins.
    - The project's other students also get no notice that a classmate's company is taking the work.
- **Recommendation:** the first notice the Partner receives governs.
    - Partner is the one party that can reliably date receipt.
    - Partner has no stake in which company wins, as long as its costs are paid.
    - Assigning the work jointly to rival companies would recreate the co-ownership deadlock that the buyout exists to cure.
- **Fix:** add "(e) If more than one Student Company gives notice, only the first notice that the Partner receives has effect. A Student Company must send a copy of its notice to each of the project's students when it gives it."

**9. After a buyback, the Student Company has promised nothing, and Partner's retained license is undefined.** DECISION

- **Quotes:**
    - CA 5.7(d): "The Partner keeps a perpetual, worldwide, non-exclusive, royalty-free license to use the work for any purpose."
    - Compare CA 5.5(d) ("the company must promise in writing to keep the commitments about the work that the Teammate had"), CA 6.4(c) ("if it first agrees in writing to be bound as they are"), and PA 4.4(f).
- **Problem (a), confidentiality.**
    - Under "Partner owns", the work often embeds Partner's Course Private Information or Confidential Information, for example in a report or in a model fine-tuned on Partner data.
    - The students stay bound for the Confidentiality Period. The Student Company, which now owns the work, has promised nothing.
    - Every other transfer to a company, in CA Section 5, CA 6.4, and PA 4.4, requires that promise.
- **Problem (b), Partner's license.**
    - "To use" is narrower than the Partner License's list of rights (copy, modify, make, sell, and so on).
    - The clause says nothing about transfer, sublicensing, or Partner's existing licensees.
- **Fix:**
    - Add to CA 5.7(c): "With its notice, the Student Company must also promise in writing to keep the commitments about the work that the project's students have under the Project Agreement, such as confidentiality. The assignment gives no right to use or disclose Partner Information that the Project Agreement restricts."
    - Replace the first sentence of CA 5.7(d) with: "The Partner keeps a perpetual, irrevocable, worldwide, non-exclusive, royalty-free license to use, copy, modify, make derivative works of, distribute, make, have made, sell, and otherwise exploit the work for any purpose. It may transfer the license only with its business, and may sublicense it only to licensees it had before the notice." The owner decides the transfer and sublicensing terms.
- **Lesser points for the owner:**
    - **Separable parts.** As drafted, Partner's use of any part of the work blocks the buyback of all of it. Decide whether a Student Company may buy back a separable part, such as one invention or one software component, that Partner does not use.
    - **Unpaid costs.** If the company never pays the costs it promised, Partner has only a contract claim, and nothing reverts. That is probably acceptable.

**10. No one outside the Project can enforce Partner's promises to protect other projects' information.** MECHANICAL

- **Quote (PA 1.2):** "Harvard may enforce Course Agreement Sections 7.2 and 7.4 against Partner, and the Course Staff may enforce Course Agreement Section 7.4. A Student Company may enforce Course Agreement Section 5.7 against Partner."
- **Problem:**
    - Partner agrees to CA 3.1 and 3.2 for the benefit of other projects (README, "Final consistency pass").
    - PA 1.2 then lists who may enforce against Partner, and omits the people those sections protect: another project's students and its Partner.
    - CA 8.3 lets them enforce "this agreement", which Partner never signed.
    - Combined with CA 7.5 (finding 1), another project's students have no stated remedy against a Partner that misuses their Course Private Information. Brief item 7 says the course-wide rules "protect every project".
- **Fix:** replace the two quoted sentences with: "Anyone entitled to enforce those sections under Course Agreement Section 8.3, including Harvard, the Course Staff, a Student Company, and the students and Partner of another project, may enforce them against Partner." This is also shorter.

**11. CA 2.4(b), if kept, does not do what it says.** MECHANICAL (inside the owner's bracket)

- **Quote (CA 2.4):** "[, or (b) notwithstanding Section 2.2, decline every Partner project's Project Terms and do a project without a Partner]".
- **Problem:** overriding Section 2.2 is not enough.
    - A capstone student who declines every Partner project usually works alone. CA 2.1 separately requires the instructor's approval for "any individual project".
    - CA 6.1 and the Project Election have the students certify "that the Course instructor has permitted the project". A student relying on 2.4(b) cannot sign that truthfully, so in practice they still need the instructor.
- **Fix (if the owner keeps the bracket):**
    - CA 2.4: "[, or (b) decline every Partner project's Project Terms and do a project without a Partner, without the Course instructor's permission under Section 2.2 or approval of an individual project under Section 2.1]".
    - CA 6.1: "On it, they certify that the Course instructor has permitted the project (unless Section 2.4(b) applies), and has approved every choice that is not Open Science, in writing or by email."
    - Project Election, "Instructor's approval": "By signing, the students certify that the Course instructor has permitted this project (not needed for a capstone project under Course Agreement Section 2.4(b)), and has approved every choice above not marked "Open Science", in writing or by email."
    - Choices other than Open Science would still need approval, which seems right.

**12. The Student Guide's buyout steps: the drafter's open point 2.** MECHANICAL (recommend fixing now)

- **Quote (Student Guide, "The buyout"):**
    1. "A Student Company that is actively developing the work gives written notice to a teammate who isn't using it commercially, personally or through a company."
    2. "The teammate may join the company within [60] days, on the same terms as its other student founders."
    3. "If not, the teammate must assign their ownership share to the company, for a price."
- **Problem:** the guide must not misdescribe the agreements.
    - Step 2 tells students they have a right to join. Under CA 5.5(c), they may join only if the company also consents.
    - The steps also leave out:
        - that notice comes only after the Teammate's End Date (CA 5.5(b));
        - that the Teammate assigns "all of their rights", not an "ownership share" (CA 5.5(d));
        - the company's power of attorney (CA 5.5(d));
        - the Teammate's choice between competing notices (CA 5.5(g)).
    - These are the points a student deciding whether to sign most needs.
- **Fix:**
    1. "After a teammate leaves the project or the Course ends, a Student Company that is actively developing the work may give that teammate written notice, if the teammate isn't using the work commercially, personally or through a company."
    2. "If the teammate and the company both agree, the teammate may join the company within [60] days, on the same terms as its other student founders."
    3. "If not, all of the teammate's rights in the work pass to the company for a price, once it pays or promises in writing to pay. If the teammate doesn't sign the papers to record this within [15] business days, the company may sign them in the teammate's name."
    4. "If more than one Student Company gives notice, the teammate chooses." Adjust this step to match finding 5.

**13. The Student Guide misdescribes several other points.** MECHANICAL

- **Line 23, "Students and Partner own jointly":** "You, your teammates, and Partner own the work together." Joint ownership covers the software only; other work stays with the students (PA 4.4(g); drafter decision 1). Fix: "You, your teammates, and Partner own the software together, under an FSL license. You and your teammates own everything else."
- **Line 70:** "[SEAS community members and invited guests at private Course events]". CA 1.3(d) brackets only the SEAS community; invited guests stay in either way. Fix: "[SEAS community members and] invited guests at private Course events".
- **Line 55:** "[Because these licenses are royalty-free, no teammate owes another a share of profits from using the work.]" CA 5.3 now says this expressly ("No student owes another student an accounting of profits"). Fix: "The agreements say that no teammate owes another a share of profits from using the work." Drop the brackets, and drop the second sentence of the note at line 86.
- **Line 52 (the buyback):** "If, [2] years after the Course ends, neither Partner nor its licensees is using ..." To match finding 7: "If, at any time from [2] years after the Course ends, neither Partner nor its licensees is using ...".
- **Line 140 (consider):** after "you must sign the papers it reasonably needs, at its expense", add "If you don't within [15] business days, Partner may sign them in your name."

**14. No default is printed beside the publication-review box: the drafter's open point 1.** DECISION (recommend adding one)

- **Quote (PA cover page):** "If information is not Open, and Partner does not own the Project Work Product: ☐ Partner elects publication review."
- **Problem:**
    - The brief requires that "defaults are printed beside the choices", and every other choice on the cover page shows one.
    - The owner's text omits a default, but the owner allowed changes "needed to keep the draft's conventions".
    - Legally nothing is missing: an unchecked box means Partner has not elected review (PA 3.3). The gap matters for the document generator and for a Partner reading the form.
- **Fix:** "☐ Partner elects publication review (default: not elected)." Report it to the owner as a change made to keep the draft's conventions.
- **Related:** if a Publication Hold Period has a number but no unit checked, nothing says what applies. The owner should pick a rule, for example "(check one; if none is checked, days)".

**15. The rewrite of CA 5.5(d) turns a condition into a duty.** DECISION

- **Quote (CA 5.5(d)):** "The Teammate hereby makes that assignment, effective when the company pays or tenders the price or, for a price payable later, gives the Teammate its signed written promise to pay it. Before the assignment takes effect, the company must promise in writing to keep the commitments ..."
- **Problem:**
    - The earlier text made the company's promise a condition ("The assignment takes effect only if the company has first agreed in writing"). Now the sentence on when the assignment takes effect has no condition, and the promise is a separate duty.
    - A company that pays but never promises still gets the assignment. All that is left is a claim for breach, which the departed Teammate has little reason to bring.
    - The Partner License survives the transfer anyway (17 U.S.C. § 205(e)). But nothing binds the company to keep Partner Information in the work confidential.
    - Compare CA 6.4(c), "if it first agrees in writing".
- **Fix (keeps the owner's wording):** "The assignment does not take effect until the company has also promised in writing to keep the commitments about the work that the Teammate had under this Section 5 and the project's Project Terms, such as the Partner's license and confidentiality."

**16. Partners that are individuals or government agencies raise points the draft does not address.** DECISION

- **Quote (CA 1.2):** "which may be a company, another organization (such as a nonprofit or a government agency), or an individual."
- **Problem (a), conflicts of interest.**
    - Nothing stops a member of the Course Staff, or a student in the Course, from being an individual Partner, for example an instructor who sponsors a project personally and chooses "Partner owns".
    - That would let a grader own their students' work. It would sidestep CA 4.1 (Course Staff contribute no intellectual property), and it would collide with Harvard's rights (CA 7.2).
- **Problem (b), government agencies.** They often cannot accept:
    - Massachusetts law and exclusive Massachusetts jurisdiction (PA 6.8);
    - advance releases (PA 5.3);
    - confidentiality that overrides public-records laws.
    Work funded by a government may also carry its own IP rules.
- **Fix:**
    - Add to CA 1.2: "No member of the Course Staff, and no student in the Course, may be or control the Partner of a project in the Course[, without Harvard's written approval]."
    - Add a note for counsel: "> **Note for counsel:** Please advise whether a government Partner needs a different form, for example on governing law, releases, public-records laws, and rights in government-funded work."

**17. PA 4.5(h) does not say what happens to the assignment when Harvard has rights.** DECISION

- **Quote (PA 4.5(h)):** "the Project Work Product cannot be exclusively assigned to Partner without Harvard's consent. That arrangement requires a separate letter, negotiated and signed by Partner and Harvard's Office of Technology Development."
- **Problem:**
    - PA 4.5(a) is a present assignment ("hereby assigns"). Paragraph (h) does not say whether, without Harvard's consent, that assignment is void, partial, or suspended.
    - "Exclusively assigned" is an unusual phrase, since an assignment transfers ownership.
    - "That arrangement" has no clear antecedent: it could mean the consent or the assignment.
    - In scenario 22, neither the students nor Partner can tell who owns the work until Harvard and Partner sign their letter. CA 7.2 ("do not assign or license any right that Harvard owns") already points the right way.
- **Fix (keeps the owner's substance):** "(h) If Harvard has intellectual property rights in the Project Work Product, due to faculty research, Harvard resources, or other reasons, paragraph (a) assigns only the students' own rights. Partner may obtain Harvard's rights, or exclusive rights in the work, only through a separate letter negotiated and signed by Partner and Harvard's Office of Technology Development."

**18. The PA uses "Partner" for other projects' sponsors.** MECHANICAL

- **Quotes:**
    - PA 2.4: "unless that project's Partner and students consent in writing".
    - PA 5.4: "or to any other Partner in the Course".
- **Problem:**
    - The owner's item G1 says that in the PA, "Partner" is that project's Partner.
    - PA 1.2 imports the Course Agreement's meaning (any project's sponsor) and makes an exception only for "Signer". The PA therefore has two definitions of "Partner".
    - PA 2.4 also lacks "(if any)", which CA 3.2 includes to cover projects without a Partner.
- **Fix:**
    - PA 1.2: "Terms defined there have the same meanings here, except that in this agreement "Signer" means a Signer of this agreement, and "Partner" means the Partner named on the cover page unless the text refers to another project's Partner. In a Course Agreement section, both have their Course Agreement meanings." (Combine this with finding 3.)
    - PA 2.4: "unless that project's students and Partner (if any) consent in writing".

**19. Without a Partner, a Student Company may relicense FSL software, contrary to the README.** DECISION

- **Quotes:**
    - CA 5.3: "Except through their Student Company, no student may license the team's Project Work Product beyond its Project Terms without the other owners' written consent."
    - PA 4.4(d), for FSL with a Partner: "No joint owner may license or distribute copies of the Project Software, in source or object form, except under the FSL license".
    - README, scenario 17: "may license it otherwise only with everyone's written consent".
- **Problem:**
    - CA 6.4 has no equivalent of PA 4.4(d).
    - Under CA 5.3, a Student Company that holds a student's joint interest (CA 6.4(c)) may license the FSL software beyond the Project Terms, for example under MIT at once. That ends the other students' two-year protection.
    - CA 5.1's example ("a Teammate may not use their license to release the software under any other license") covers a Teammate's license, not an owner's interest.
    - So with a Partner, FSL binds every owner; without one, it does not, and the README's answer to scenario 17 is not what the text says.
- **Fix:** add to CA 6.4: "(e) No student or Student Company may license or distribute copies of the software except under that FSL license without every student's written consent, but a student may give copies to their Student Company." If the difference is intended, correct the README instead.

**20. Some README scenario answers misstate the text.** MECHANICAL

- **Scenario 7:** "If Partner leaves the invention unused and unpatented for [2] years after the Course". The text tests whether anyone is "pursuing a patent", not whether the invention is unpatented, and does not require two years of continuous non-use.
    - Fix: "If, at any time from [2] years after the Course, neither Partner nor its licensees is using the invention commercially or pursuing a patent on it, the students' Student Company may buy it back at Partner's costs."
- **Scenario 21:** "The student still signs the CA. They may write a thesis instead of taking the Course". A student who writes a thesis instead does not take the Course, and so signs nothing.
    - Fix: "If the degree program permits, the student may write a thesis instead of taking the Course. If they take the Course, they sign the CA and may ask for an Open Science project, which the Course Staff must provide." Then keep the sentence on the bracketed option.
- **Scenario 8:** "If two companies give notice, the Teammate chooses." Update this to match finding 5.
- **Scenario 17:** see finding 19.
- **Outside approach A:** `agreements/v0.6/README.md` is now stale. It says "Harvard's approval on file", "four Course Agreement sections it agrees to", and "says the first notice governs", and its word counts are out of date. That file is not under review, but it misdescribes approach A.

**21. CA 4.2 bars sharing grades even when the student asks.** DECISION

- **Quote (CA 4.2):** "The Course Staff must not share students' grades or other education records, as defined in the Family Educational Rights and Privacy Act (20 U.S.C. § 1232g), with any Partner or any other unauthorized recipient."
- **Problem:**
    - FERPA allows disclosure with the student's written consent (34 C.F.R. § 99.30).
    - As written, an instructor breaches the Course Agreement by writing a reference to a Partner that mentions a grade, even at the student's request. Anyone entitled to enforce CA 4.2 may then seek an injunction (CA 7.4).
    - "Unauthorized recipient" is also undefined.
- **Fix:** this is the owner's text, and brief item 7 is absolute, so the owner decides. I recommend adding "unless the student asks for it in writing" at the end.

**22. CA 5.6(c): "named in its Project Agreement" and "all of a project's students".** DECISION (owner's text)

- **Quote (CA 5.6(c)):** "During the Duration, all of a project's students together and, for a project with a Partner, at least one Partner Contact named in its Project Agreement may change the project's credit process".
- **Problem (a):** Partner may replace its Partner Contacts by notice (PA 6.1). A replacement is not "named in its Project Agreement", so once every original contact has been replaced, no one on Partner's side can agree to a credit change. Fix: "at least one of its Partner Contacts".
- **Problem (b):** the owner's item G3 asked for consistent wording. CA 6.4(d) and 6.5 say "current students", while 5.6(c) says "all of a project's students", which under CA 8.4 includes students who have left. Including them may be intended, since they have a stake in credit. If so, keep it; if not, add "current".

**23. Two notes for counsel do not begin with the required label.** MECHANICAL

- **Quotes:**
    - After CA 1.3: "> **Note for counsel (review note R-8):** Please advise ..."
    - After CA 7.4: "> **Note for counsel (review notes R-5 and R-6):** The bracketed sentence ..."
- **Fix:**
    - "> **Note for counsel:** (Review note R-8.) Please advise ..."
    - "> **Note for counsel:** (Review notes R-5 and R-6.) The bracketed sentence ..."

**24. Two small gaps for a Partner that is an individual.** MECHANICAL

- **PA 6.7:** "Each party confirms that it may enter into and perform this agreement, that each individual Signer has reached the age of majority, and that the individual signing for Partner is authorized to do so." Partner cannot confirm students' ages, and the sentence does not cover an individual Partner's own age.
    - Fix: "Each party confirms that it may enter into and perform this agreement and, if an individual, that they have reached the age of majority. Partner confirms that the individual signing for it is authorized to do so."
- **PA 3.4(b):** "Partner's employees who contributed to the Project" leaves out an individual Partner who contributed.
    - Fix: "Partner, if an individual, and Partner's employees who contributed to the Project".

**25. Simplicity.** MECHANICAL

- **PA 1.2's enforcement sentences** become one (finding 10).
- **The Open Science project is promised twice.** CA 2.2 says the Course Staff "must assign the student to an Open Science project"; CA 2.3 says they "must honor a request to move to an Open Science project". Keep one.
- **CA 7.5's last sentence** ("Each Partner and its project's students also release each other in Project Agreement Section 5.3.") is only a pointer. Cut it.
- **Two descriptions of the students' release.** CA 7.5 covers claims about "the Course or its project"; PA 5.3 covers "the Project, the student's participation in it, or any use of Project Work Product". Once the owner settles finding 1, use one formula.
- **Exhibit A, "Harvard's position":** the sentences on who enforces CA 7.2 and 7.4 restate CA 8.3 and PA 1.2. Cut them, and keep the acknowledgment and (if kept) Harvard's agreement to CA 7.5.
- **Long sentences**, against the brief's aim of under 25 words:
    - PA 1.2's sentence listing the Course Agreement sections Partner agrees to (about 60 words); make it a list.
    - CA 7.5's first sentence (about 60 words).
    - CA 5.6(c)'s second sentence (about 40 words).
    - The publication-review entry on the cover page, which packs three conditions into one block.
- **PA cover page:** "Name of the person signing for Partner" and "Title of the person signing" repeat the Name and Title lines in Partner's signature block. Keep one set.

**26. Minor items.** MECHANICAL

- **Exhibit A version:** it says "version 0.6", while the Course Agreement roster and PA 1.2 use "[0.6]" (drafter decision 25). Use "[0.6]".
- **CA 1.2:** "sign the Project Election at the end of this agreement". Exhibit A now follows the Project Election. Fix: "sign the Project Election that follows this agreement's signature roster".
- **CA 8.3:** a Student Company may enforce Sections 5.3 to 5.5 and 5.7, but not 6.4, which also benefits it (6.4(b) to (d)). Fix: "Sections 5.3 to 5.5, 5.7, and 6.4".
- **PA 6.3:** "nothing else in this agreement may be changed, apart from the consents, approvals, notices, and joinders it allows" does not mention the credit-process changes that PA 3.4(c) and CA 5.6(c) allow. Fix: "apart from the consents, approvals, notices, joinders, and credit-process changes it allows".
- **CA 3.4:** "must use approved tools" does not say who approves them. Fix: "must use tools Harvard has approved".
- **PA 3.1** defines "Partner's affiliates" in passing, in lowercase. It is used twice in one paragraph, which is acceptable. Under G1, either make it a defined term or replace "its affiliates" with the definition.
- **PA 2.2(b) and 2.3(c)** require different consents for sharing outside the Course Community: "as Partner approves in writing" in 2.2(b), but "Partner and all of the student Signers consent in writing" for public forums in 2.3(c). Both apply to public forums. Add "subject to Section 2.3(c)" to 2.2(b).
- **Note after CA 5.7:**
    - Cite "Project Agreement Sections 1.2 and 4.5(g)".
    - Ask, as the note after CA 5.5 does, whether a present assignment to a transferee that does not yet exist satisfies 17 U.S.C. § 204(a) and 35 U.S.C. § 261.

## The drafter's three open points

1. **No printed default beside the publication-review box** (finding 14). Add "(default: not elected)". The brief requires printed defaults, and the owner allowed changes needed for the draft's conventions. Report it to the owner as such a change.
2. **The Student Guide's buyout steps** (finding 12). Fix them now. As written, the guide tells students they have a right to join that CA 5.5(c) no longer gives. That is a misdescription, not just an omission, and the brief says the guide must not misdescribe the agreements.
3. **Two Student Companies giving buyback notices under CA 5.7** (finding 8). The first notice the Partner receives should govern, and each notice should be copied to the project's students. Without a rule, the self-executing assignment in 5.7(c) runs twice.

## Scenarios

- **Answered as the README claims, in the sections it cites:** 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 22, 23, and 24.
    - For 19, see also finding 10: Partner is bound to CA 3.2 (PA 1.2), but no one outside the Project may enforce that.
    - For 22, see also finding 17: ownership is unclear until Harvard and Partner sign their letter.
- **Not fully supported, or unclear:**
    - 7: the buyback trigger is overstated (findings 7 and 20). The publication-review rule and the power of attorney are described accurately.
    - 8: the answer matches the text, but the text fails in three ways:
        - a silent holdout who gets two notices (finding 5);
        - receipt of a notice, which the Course Agreement has no rule for (finding 6);
        - a promise that is no longer a condition (finding 15).
    - 13: holds only if Partner's business and the Project Agreement move together (finding 4).
    - 17: "may license it otherwise only with everyone's written consent" is not what CA 5.3 and 6.4 say (finding 19).
    - 21: the bracketed option does not work as drafted (finding 11), and the README's first sentence is wrong for a student who writes a thesis (finding 20).

## The drafter's own decisions (README table)

- **Sound:** 1 to 8, 10, 12 to 16, 18 to 24, 26, 30, and 31.
    - On 1, note that the Student Guide misdescribes it (finding 13).
    - On 25, see finding 26: Exhibit A does not use the bracket.
- **Flagged:**
    - 9: finding 5, on the owner's paragraph (g), and finding 15, on the owner's rewrite of (d).
    - 11: finding 22.
    - 17: findings 3, 10, and 18.
    - 27: the placement is sound; the substance needs findings 4, 7, 8, and 9.
    - 28: findings 1 and 2. Having Harvard agree in Exhibit A adds a duty for Harvard that no one asked for, and it contradicts CA 7.1.
    - 29: finding 16. The form works, but individual and government Partners need the limits and note proposed there.

## The first review's fixes

All 25 held, with two exceptions:

- **Finding 17 of the first review** (the meaning of "Signer" in PA 1.2) was fixed in a way that now defeats PA 1.2's backstop for students who have not signed the Course Agreement (finding 3 above).
- **Finding 3 of the first review** proposed that "the first notice governs" when several companies give buyout notices. The owner replaced that with the Teammate's choice, which needs a default (finding 5 above).

The fixes for findings 1 (CA 8.3), 2 (accounting waiver), 4 (roster), 5 (CA 5.1), 6 (PA 6.3), 7 (CA 5.5(a)), 8 (Course and Duration), 11 (CA 4.1), 13 (CA 2.3), 14 (CA 6.2), 19 (PA 6.6), and 22 (timing of a change to the information choice) are all intact after the renumbering.

## Overall assessment

**Strengths:**

- The owner's second round is applied faithfully, and every change to the owner's wording is reported.
- The capitalization pass is thorough, and no ordinary word was wrongly capitalized.
- Cross-references survived the swap of 5.2 and 5.3 and the new Sections 5.7 and 7.5.
- Publication review now reads the same on the cover page, in PA 3.3, and in PA 4.5(e) and (f).
- Exhibit A is integrated consistently.

**Weaknesses:**

- **Partner's protection (CA 7.5)** is the most serious problem. Drafted "for mutuality", it gives Partners a broader shield than Harvard and the Course Staff get under CA 7.4. It also reaches Harvard's own agreements and students' personal and IP claims.
- **The buyback** works in the simple case but not against a Partner that transfers the work, a second Student Company, or a Partner using the work in year 3.
- **The buyout's self-executing mechanism** still depends on a notice with no delivery rule. With the owner's new paragraph (g), it also has no default for a silent holdout.
- **PA 1.2's "Signer" sentence** quietly undoes the backstop for students who never signed the Course Agreement.

Findings 1 to 11 should be resolved before counsel review. Most fixes are a sentence. Findings 1, 2, 4, and 16 need the owner's judgment first.
