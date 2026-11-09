# Fourth review of approach A (v0.6): the Round 3 simplification

**Scope.** This review covers:

- CA 5.5, CA 5.7, CA 8.5, and Exhibit B, Parts 1 and 2;
- every reference to them in the CA and PA, including CA 5.1, CA 8.3, the roster, PA 1.2, PA 4.5(g), and PA 6.2;
- the Student Guide on these points.

I checked the text against R14 to R17 (Round 3 in `owner-edits/approach-a-2026-11-06-decisions-to-confirm.md`) and against the earlier decisions still in force: R1 to R3, R5, R6, and C3. CA is the Course Agreement and PA the Project Agreement. I wrote only this file and ran no git commands.

**Checked and clean:**

- **CA 5.5 is R17 word for word.** I diffed the two texts; the only difference is that the "(Owner's change.)" label is dropped.
- **R14.** CA 8.5(c) and (d) carry the rule as decided:
    - three tries, about [7] days apart, unless acknowledged earlier;
    - the notice counts from the date first sent;
    - an unacknowledged notice needs a delivered text or voicemail.

  Nothing is left of the old split between notice types or of the fast exceptions. PA 6.2 departs from the rule (finding 5).
- **R15 and R16.** CA 5.7 has every element:
    - the non-use trigger, with internal use counting as commercial use;
    - patent applications do not block the purchase;
    - who may buy, and who receives the notice;
    - 30 days for proposals, then the default in Exhibit B;
    - the price floor;
    - the Partner's retained license (R3);
    - the survival of earlier non-exclusive licenses (R6);
    - the exclusion of Partner Background IP.
- **Exhibit B.** Part 2 matches CA 5.5(h) item by item. Part 1 carries R1 (the cost statement within 30 days, and the assignment within 30 days after the buyer signs) and R2 (selection within [30] days, and the losing groups' equity whether or not the owner accepts it).
- **Section references.** Every one resolves. Exhibit A approves Exhibit B.
- **Style.** There is no "shall", no line made only of underscores, and no model name. Every note for counsel has the right label, and the changed text uses Oxford commas.
- **The holdout buyout (scenario 8)** runs end to end on the normal path. The company sends the notice under CA 8.5, and the Teammate has 30 days. Cash at fair market value follows, and the assignment takes effect on tender, once the company has promised to keep the Teammate's commitments. If the Teammate won't sign the recording papers within [15] business days, the power of attorney applies. Findings 2, 8, and 10 cover the edge cases.

## Findings, most important first

**1. "Every later owner is bound" stops at the first transfer.** MECHANICAL

- **Quotes:**
    - CA 5.7(a): "binds every later owner of it".
    - PA 4.5(g): "Partner must not transfer ... unless the transferee or licensee first agrees in writing to be bound by Course Agreement Section 5.7 and Part 1 of its Exhibit B as Partner is. That agreement must be for the benefit of the student Signers and their Student Companies".
- **Problem:**
    - **Onward transfers.** A later owner is bound only by its own promise. The limit on transfers sits in PA 4.5(g), and it binds only "Partner". The transferee agrees to CA 5.7 and Part 1, but not to that limit. It may therefore sell to someone who has agreed to nothing. The same is true of a Student Company or student that buys under 5.7 and later sells. R16 ("every later owner is bound") and C3 hold for one transfer only.
    - **The Partner as buyer.** The Partner is not a beneficiary of the transferee's agreement, yet R16 lets the Partner buy from a later owner.
    - **Exclusive licenses.** An exclusive licensee must agree to be bound, but CA 5.7(e) says only that non-exclusive licenses survive. It says nothing about exclusive ones. An exclusive license is a "transfer of copyright ownership" (17 U.S.C. § 101), so a buyer may take the work still subject to it.
- **Fix:** put the limit in CA 5.7. There it binds whoever is "the owner", and it carries over to anyone who agrees to be bound by "this Section". Add:

  > (f) The owner must not transfer the work, or grant an exclusive license in it, unless the transferee or licensee first agrees in writing to be bound by this Section and Part 1 of Exhibit B, for the benefit of the project's Partner, its students, and their Student Companies, who may enforce it. Within 30 days afterwards, the owner must notify them of it, with a copy of that agreement and an email address for notices to the transferee or licensee.

    - In CA 5.7(e), the last sentence becomes: "The purchase ends any exclusive license in the work and is subject to non-exclusive licenses granted before the notice."
    - PA 4.5(g) becomes: "(g) Partner agrees to the right to purchase unused work in Course Agreement Section 5.7 and its Exhibit B, including its limits on transferring the work." The total length stays about the same.

**2. A missing or dead telephone number stops every deadline.** DECISION

- **Quote (CA 8.5(d)):** "A notice that has not been acknowledged does not count until a text message or voicemail has been delivered to that telephone number."
- **Problem:**
    - **The holdout.** Take a Teammate who left the telephone field blank, or whose number has been disconnected. No notice to them counts unless they acknowledge it, and scenario 8's holdout won't. They breach CA 8.5(a) or (e), but the buyout clock never starts.
    - **The purchase.** CA 5.7 notices and proposals go to "all of the project's students", years after the Course. If one student's number is stale, no one can tell whether that student's 30-day window ever closed. A late proposal from them could reopen a completed purchase.
    - **Late delivery (smaller).** Suppose the text first arrives on the third try, about day 14. CA 8.5(c) still dates the notice from the first send. The recipient is then left with about a week of a [15]-business-day window before a power of attorney applies (Exhibit B, Part 2, step 4; PA 4.5(b)).
- **Fix (recommended).** This keeps R14's rule for anyone whose details are current:

  > (d) *Delivery to the telephone.* A notice that has not been acknowledged does not count until a text message or voicemail has been delivered to that telephone number, unless the recipient gave no number, or the number no longer works and they did not report a change under paragraph (e).

  Optional, for late delivery: add "If the first delivery is on a later try, the notice counts from that try."

**3. Exhibit B, Part 1 still lets an uncooperative owner hold the work.** DECISION

- **Quotes:**
    - Step 6: "The owner and the buyer, or the buyer's company, then enter into a binding written agreement on the purchase. Within 30 days after the buyer or its company signs, the owner signs an assignment".
    - Step 4: "Within [30] days after those 30 days end, the owner selects one ... The successful buyer must grant each unsuccessful group of students at least the equity it offers the owner".
    - Step 5: "Within 30 days after the first notice, the owner gives each person or group that has come forward a written statement".
- **Problem:**
    - **Step 6 is an agreement to agree.** It doesn't say what the agreement contains. An owner that never agrees to terms can say there is nothing for the buyer to sign, so its own 30 days never start. The owner also may not know when the buyer "signs". This defeats R1's goal: "Just enough to keep an intransigent party from holding the IP hostage."
    - **No selection.** Step 4 says nothing about what happens if the owner never selects a buyer.
    - **The losing groups' equity.** Step 4 makes "the successful buyer" grant it. When the buyer acts through a company, only the company can grant equity, and the company has promised the losing groups nothing.
    - **A lone bidder.** "Group of students" leaves out a student who bid alone, though CA 5.7(b) lets students buy "alone".
    - **Step 5 timing.** Proposals may arrive as late as day 30, the day the cost statement is due, so a late proposer may never receive one.
    - **Hidden use.** Only the owner knows whether anyone uses the work internally. A bare claim of internal use therefore blocks the right to purchase.
- **Fix:**

  > 4. If more than one has, the owner selects one of them, in its sole discretion and based in part on their proposals about how they intend to use the work and what they will pay, within [30] days after those 30 days end[, failing which the first to give notice is selected]. The successful buyer must grant each unsuccessful student or group of students at least the equity it offers the owner, whether or not the owner accepts it.
  >
  > 5. Within 30 days after the first notice, the owner gives everyone the notice went to a written statement of its documented out-of-pocket costs for the work[, and of any commercial use during the previous [2] years that it says prevents the purchase].
  >
  > 6. The buyer, or its company, then signs and gives the owner a written agreement to buy the work on the terms in step 3 or its selected proposal, to be bound as Section 5.7(f) requires, and, if step 4 applies, to grant each unsuccessful student or group the equity that step 4 requires, for their benefit. Within 30 days after receiving it, the owner must sign it and an assignment of the work, including any patents and patent applications, keeping any license that Section 5.7(e) reserves.

    - Step 4 no longer has the owner solicit a second round of proposals, because proposals already arrive within the first 30 days.
    - Section 5.7(f) is the new paragraph in finding 1.

**4. CA 5.1 and 5.7(a) describe the work by who owns it now.** MECHANICAL

- **Quotes:**
    - CA 5.7(a): "Project Work Product that a Partner owns outright ... and binds every later owner of it".
    - CA 5.1: "Sections 5.3 to 5.5 apply to Project Work Product that a team's students own or co-own ... but not to work that a Partner owns outright", and "Section 5.7 to work that a Partner owns outright".
- **Problem:** once the Partner sells, the work is no longer work "that a Partner owns". Read literally, two things follow:
    - Section 5.7 stops applying. A Student Company that owns the work after an earlier purchase is "bound" by a Section that no longer covers it.
    - If students buy "alone" under CA 5.7(b), the work becomes work that "a team's students own or co-own". Section 5.3 would then give every Teammate, including the losing bidders, a free perpetual license. Section 5.4 would say the work "stays non-exclusive". Either result defeats the purchase.
- **Fix:** in all three places, "owns outright" becomes "owns or has owned outright". For example, CA 5.7(a): "This Section applies to Project Work Product that a Partner owns or has owned outright under its Project Agreement's "Partner owns" choice, and binds every later owner of it."

**5. Which notices get three tries: CA 8.5 and PA 6.2 disagree, and some recipients have no address rule.** DECISION

- **Quotes:**
    - CA 8.5(c): "Each notice ... is sent three times ... It counts ... provided the sender completes the tries or receives an acknowledgment".
    - PA 6.2: "A notice or copy to Partner counts as received when emailed".
    - CA 8.5(f): "A notice to a Student Company goes to the email address it gave in its notice, proposal, agreement, or promise under Section 5.5, Section 5.7, or Exhibit B".
- **Problem:**
    - **Notices to a Partner.** R14 says "Every notice gets three tries". PA 6.2 lets a single email to a Partner count, which contradicts CA 8.5(c), and the CA governs (PA 1.2). A student may rely on PA 6.2 when sending a proposal to a Partner that owns the work, or a patent notice under PA 4.5(f). That student may have given no valid notice.
    - **Replies to a company.** Under the same rule, a Teammate may accept a buyout offer by one email on day 25 and get no acknowledgment. Arguably they have not accepted unless they send it twice more, and the guide doesn't warn them.
    - **Missing addresses.** There is no address rule for a later owner that is neither a Partner nor a Student Company, such as a transferee under PA 4.5(g). A Student Company that received work under CA 6.4(c) or PA 4.4(f) gave no address under 5.5 or 5.7 either.
- **Fix (recommended), which carries R14 literally:**
    - PA 6.2: replace the receipt sentence with: "A copy to Partner counts as received when emailed to the addresses Partner most recently gave under this agreement, and a notice to Partner sent there follows Course Agreement Section 8.5(c)." In the sentence before it, delete ", and such a notice follows Course Agreement Section 8.5(c)". The section's last sentence already covers it.
    - CA 8.5(f), second sentence: "A notice to a Student Company, or to any other later owner under Section 5.7, goes to the email address most recently given for it in writing under these agreements, with a copy to any of its founders who are students on the project."
    - Student Guide, under "Notices": add "Notices you send, such as accepting a buyout offer, follow the same rule."
- **Alternative,** if R14 was meant only for notices to individuals:
    - begin CA 8.5(c) with "Each notice to an individual under paragraph (b)";
    - add to CA 8.5(f): "A notice to a Partner, a Student Company, or another later owner counts as received when emailed."

**6. CA 5.7(d)'s equity floor also applies when the Partner buys.** DECISION

- **Quote:** "and, if the buyer is a company, give the owner equity not less than that typically granted to the company's advisors."
- **Problem:**
    - **A company Partner.** R16 lets the Partner buy from a later owner. A Partner that is a company would then owe the owner equity in itself. Under Exhibit B, Part 1, step 4, it would owe the same equity to each losing group.
    - **Other Partners.** A nonprofit or government Partner can't grant equity, so it could never meet the floor.
    - **Students who form a company later.** Students who buy "through a prospective Student Company" are arguably not yet "a company", so they may owe no equity.
- **Fix:** "and, if the buyer is or acts through a Student Company, give the owner equity in that company not less than that typically granted to its advisors." The Student Guide's "if the buyer is a company" should change to match.

**7. It is unclear who may change the default procedures.** DECISION

- **Quotes:**
    - Exhibit B: "the people involved may change them for their case by written agreement".
    - CA 5.7(c): "Any of them may submit a proposal within 30 days. If they do not agree, the default procedure in Part 1 of Exhibit B applies."
- **Problem:** neither text says who "the people involved" or "they" are, or what they must agree on.
    - If it means the owner and any one proposer, those two can agree around the selection and the losing groups' equity (R2).
    - If it means everyone the notice went to, one student with no interest in buying can force the default.
    - "Any of them" also includes the owner.
- **Fix:**
    - Exhibit B, second sentence: "Its procedures are defaults. They may be changed for a particular case by written agreement of the owner and everyone who has given notice or a proposal (Part 1), or of the company and the Teammate (Part 2)."
    - CA 5.7(c), which also absorbs Exhibit B, Part 1, steps 1 and 2: "(c) The notice, and each proposal, goes to the owner, the Partner, and all of the project's students, with an email address for replies. Anyone entitled to buy may submit a proposal within 30 days after the first notice. Part 1 of Exhibit B sets out the default procedure."

**8. CA 5.5 (owner's text): two gaps, both fixable in Exhibit B, Part 2 without changing 5.5.** DECISION

- **Quotes:**
    - CA 5.5(g): "A buyout is possible only while one group of the team's students is actively developing the work".
    - CA 5.5(e): "only if the company has first promised in writing to keep the Teammate's commitments about the work, such as the Partner's license and confidentiality."
- **Problem:**
    - **When (g) is tested.** It is a continuing test with no date. Under CA 5.5(b), the Teammate's use after the notice does not stop the buyout. But a Teammate who starts "developing" after the notice, perhaps with a friend, can argue under (g) that a second group now exists. The owner's reason for (g) is that two groups leave "no exclusivity to gain". That reason applies to a real second group, not to the target's own late start.
    - **Who can enforce the promise.** The promise in (e) names no promisee. It mainly protects the Partner (its license and its confidential information). As written, the Partner could enforce it only by arguing that it is an implied third-party beneficiary.
- **Fix:** insert after step 1 of Exhibit B, Part 2, and renumber:

  > 2. The company's promise under Section 5.5(e) is for the benefit of the Teammate, the project's Partner (if any), and its other students, who may enforce it. In applying Section 5.5(g), activity that the Teammate starts after the notice does not count.

**9. Patents: issued patents, and help from the inventors.** MECHANICAL (first point; the second is optional)

- **Quotes:** CA 5.7(e): "Pending patent applications transfer with the work." Exhibit B, Part 1, step 6: "including any pending patent applications".
- **Problem:**
    - **Issued patents.** Naming only pending applications suggests that an issued patent stays with the seller.
    - **Inventors' signatures.** The students' duty to sign patent papers (PA 4.5(b)) runs only to "Partner". A buyer that needs inventors' signatures to pursue an application, especially abroad, cannot rely on it. Review 3 raised this, and no decision is recorded.
- **Fix:**
    - CA 5.7(e): "Patents and patent applications on the work transfer with it." Use the step 6 wording in finding 3.
    - Optional: add to CA 5.7(e): "Each student's duties under Project Agreement Section 4.5(b) then run to the buyer."

**10. It is unclear how the company tenders cash to a holdout.** MECHANICAL

- **Quote (Exhibit B, Part 2, step 3):** "the company tenders cash equal to the equity's fair market value instead."
- **Problem:** CA 8.5 collects no postal address or payment details. A Teammate who signs nothing can say the cash was never tendered, and under CA 5.5(e) the assignment waits for the tender. Investors will want that point beyond argument.
- **Fix:** add "The company tenders cash by a notice unconditionally offering it, and must pay it within [10] days after the Teammate says where."

**11. Enforcement rights, and outdated references.** MECHANICAL

- **CA 8.3:** "It may also enforce Sections 5.7 and 7.5, and Exhibit B."
    - Problem: any Partner, on any project, could enforce Part 2, which is a buyout among students.
    - Fix: "It may also enforce Section 7.5, and Section 5.7 and Part 1 of Exhibit B as they apply to that Partner's project."
- **Exhibit B, Part 1, step 7:** "The owner, and each buyer and its company, may enforce this Part against each other."
    - Problem: an owner that is neither a Partner nor a Student Company gets rights that CA 8.3 denies ("No one else has rights under this agreement").
    - Fix: delete step 7. CA 8.3, PA 1.2, the transferee's agreement (finding 1), and the step 6 agreement already give each side a remedy, as R1(c) requires.
- **PA 1.2:** "5.7 and Exhibit B, Part 1".
    - Problem: the Partner is not bound by the exhibit's opening paragraph, which makes the procedures defaults and applies CA 8.5 to notices.
    - Fix: "5.7 and Exhibit B (right to purchase unused work, and its default procedures);". Part 2 puts no duty on a Partner.
- **Note after CA 5.7:** "Each Partner agrees to this Section and Exhibit B, and to limits on transferring the work, in Project Agreement Sections 1.2 and 4.5(g)."
    - Problem: after finding 1, the limits on transfers are in this Section.
    - Fix: "Each Partner agrees to this Section, including its limits on transfers, and to Exhibit B, in Project Agreement Sections 1.2 and 4.5(g)."
- **Roster:** "including the licenses and assignments in Sections 2.3, 5, and 6 and Exhibit B".
    - Problem: Exhibit B contains a power of attorney, not a license or assignment.
    - Fix: "including the licenses and assignments in Sections 2.3, 5, and 6, and the power of attorney in Exhibit B".
- **README, scenario 13:** "'The Partner' in CA 5.7 includes any later owner."
    - Problem: the text no longer says this.
    - Fix: "CA 5.7 binds every later owner."

**12. "Commercial use" is defined only in CA 5.7, though CA 5.5 also depends on it.** DECISION

- **Quotes:**
    - CA 5.7(b): "Use in any product, service, or business operation, including internal use, is commercial use."
    - CA 5.5(b): "the Teammate is not using the work commercially, personally or through a company".
- **Problem:** because the meaning is stated only in 5.7, a Teammate can argue that 5.5 means something narrower. That argument matters in scenario 8, where the Teammate "has taken a job elsewhere" and may be using the code internally at work.
- **Fix (recommended, so that one test governs both sections):** the third sentence of CA 5.7(b) becomes "In this Section 5, use in any product, service, or business operation, including internal use, is commercial use."

**13. The drafter's flagged gap: documentation under joint ownership.** DECISION (recommend no change to the agreement)

- **Quotes:**
    - CA 5.5(a): "It does not apply to work under an FSL license or work a Partner owns."
    - Brief item 6: "The buyout does not apply under joint ownership (FSL) or when Partner owns."
- **Analysis:** R17 governs over the brief, and the owner approved it word for word. It applies its test work by work, which is sound:
    - The deadlock the buyout cures exists for documentation whatever the software's ownership: co-owned student work with no public license.
    - FSL software is excluded because the FSL already settles who may use it. That reason does not reach documentation.
    - The Partner is protected. Under joint ownership it holds the Partner License in Other Work Product (PA 4.4(g) and 4.3(b)), and every buyout remains subject to it (PA 4.3(f)).
    - A project without a Partner that chooses FSL, with "None" for other work, already reaches the same result (CA 6.4).
- **Recommendation:**
    - Keep CA 5.5(a) as it is.
    - In the README, record that R17 supersedes brief item 6 on this point, and delete the open question.
    - The guide is already correct ("It doesn't apply to FSL software").
    - If the owner prefers the brief's rule, the smallest change is to (a)'s second sentence: "It does not apply to any work of a project whose software is under an FSL license, or to work a Partner owns." That changes approved text, so it needs the owner's decision.

**14. Student Guide.** MECHANICAL

- **The purchase:** "If they can't agree, a default procedure picks the buyer".
    - Problem: the owner picks, in its sole discretion, and a sole buyer buys at the minimum price.
    - Fix: "If they can't agree, a default procedure applies: a sole buyer may buy at the minimum price below, and if there are several, the owner picks one in its discretion, and losing teams get at least the equity the winner offers the owner."
- **The buyout:** "and gets cash at fair market value if they refuse the equity".
    - Problem: this leaves out a holdout who never answers.
    - Fix: "and gets cash at fair market value if they refuse the equity or don't accept it within 30 days". README scenario 8 has the same omission.
- **Notices:** "Each notice is sent three times, about a week apart".
    - Fix: "about [7] days apart", to match the bracket in CA 8.5(c).

## What can still be cut

1. **Exhibit B, Part 1, steps 1 and 2** repeat CA 5.7(c). Delete them, using the CA 5.7(c) wording in finding 7. Step 3 then refers to "the 30 days in Section 5.7(c)". This saves about 40 words.
2. **Step 4's second round of proposals** (finding 3), and **step 7** (finding 11).
3. **Step 8** is a substantive limit, not a procedure the parties should be able to change without the Partner. Move it to the end of CA 5.7(e): "The purchase gives no right to use or disclose Partner Information that the Project Agreement restricts."
4. **PA 4.5(g)** shrinks to one sentence (finding 1). Its phrase "which never includes Partner Background IP" repeats CA 5.7(a) in any case.
5. **PA 6.2:** ", and such a notice follows Course Agreement Section 8.5(c)" repeats the section's last sentence (finding 5).
6. **CA 8.5(f):** the list "notice, proposal, agreement, or promise under Section 5.5, Section 5.7, or Exhibit B" can become "most recently given for it in writing under these agreements" (finding 5).

Every sentence of CA 8.5(a) to (e) and CA 5.7(b) carries a decision, so nothing more can be cut there.

## Overall assessment

The restructuring works. CA 5.5, CA 5.7, and Exhibit B are much shorter, they carry R14 to R17 accurately, and the normal paths run end to end. The remaining problems sit at the edges the right to purchase exists for:

- the chain of later owners (findings 1 and 4);
- a recipient who cannot be reached by phone (finding 2);
- an owner that won't cooperate (finding 3).

Each needs a sentence or two, not a new structure. Findings 1, 3, and 4 work together to make R16's "every later owner is bound" and R1's anti-hostage goal effective, so apply them as a set. No change to CA 5.5's approved text is needed.
