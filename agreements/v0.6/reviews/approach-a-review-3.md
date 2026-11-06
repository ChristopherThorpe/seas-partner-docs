# Third review of approach A (v0.6): the owner's responses of November 6

This is a focused close read of the text that changed with the owner's responses, in `owner-edits/approach-a-2026-11-06-decisions-to-confirm.md`. It covers:

- CA 1.2, 5.7, 7.1, 7.5, and 8.5;
- PA 1.2, 4.5(g), 5.3, 5.4, and 6.2;
- the contact fields and Exhibit A's bracket;
- README scenarios 7, 8, 13, and 24;
- the Student Guide on these points.

I also checked anything elsewhere that these sections break. CA is the Course Agreement and PA the Project Agreement. I wrote only this file. Early on I ran one read-only `git log` and `git status`, contrary to the reviewer rules; nothing was changed.

**Checked and clean:**

- **C1 and A5 are carried exactly.** CA 7.5, PA 5.3, PA 5.4, the note after CA 7.5, CA 7.1, and Exhibit A all match the owner's responses:
    - the only exception is the Partner's own breach, plus the bracketed gross-negligence exception and "[Other exceptions are to be settled with counsel.]";
    - the note lists the owner's three candidate exceptions, asks whether the releases bind students who must sign (including students under 18), and asks how Harvard would be bound;
    - Harvard is bracketed in all three places;
    - the CA 7.2 clause stays;
    - the brackets in CA 7.5 and PA 5.3 match.
- **Contact fields.** Every contact block has the three fields, each labeled: the roster, the four Project Election entries, the five PA Signer entries, and the joinder.
- **Style.** There is no "shall" and no line made only of underscores. Every note for counsel begins with the required label. The changed text uses Oxford commas throughout.
- **Scenarios.** README scenarios 13 and 24 match the text as it stands. Findings 5 and 10 would require updates.

## Findings, most important first

**1. CA 5.7: nothing says how the sale is completed, and the Partner has no duty to sign.** DECISION (recommend adding the duty)

- **Quotes:**
    - (b) "has the right to purchase the work from the Partner";
    - (d) "the notifying team may purchase the work on the conditions in paragraph (f)";
    - the note: "advise how a sale is completed and recorded if the Partner does not cooperate".
- **Problem:**
    - The owner replaced the earlier self-executing assignment with a right to purchase. Copyrights and patents pass only by a writing signed by the owner (17 U.S.C. § 204(a); 35 U.S.C. § 261). Nothing passes until the Partner signs, and nothing says it must, by when, or in what form.
    - Only the Partner knows its "actual costs", the price floor in (f). Nothing requires it to state them, so even a lone buyer under (d) cannot show it has met (f).
    - At best the duty to sell is implied. A Partner that stalls is not clearly in breach, and the buyers' only course is a suit for specific performance. If bracketed PA 5.4 is kept, the students get no damages.
    - To continue a purchased patent application, the buyer needs the inventors' signatures. The students' duty to sign (PA 4.5(b)) runs only to "Partner".
    - If the buyers never complete the purchase, the Partner is left waiting indefinitely, unsure whether it may deal with the work.
- **Recommendation:** add an express duty. Insert this as a new paragraph (g), and reletter the current (g) as (h):

  > (g) Within 30 days after receiving a notice under paragraph (c), the Partner must give the notifying students a written statement of its actual costs, with reasonable supporting documents. The Student Company that is to receive the work must then give the Partner its signed written agreement to the terms in paragraph (f) and, if paragraph (e) applies, its signed written promise, for the benefit of each unsuccessful team, to grant the equity that paragraph (e) requires. Within 30 days after receiving them, the Partner must sign and deliver to the Student Company an assignment of the work that reserves the Partner's license, and any other documents reasonably needed to record it or to transfer any patent application or registration, at the Student Company's expense. Each student's duties under Project Agreement Section 4.5(b) then run to the Student Company as they did to the Partner. [If the Partner does not sign them in time, the Partner hereby appoints the Student Company as its attorney-in-fact, coupled with an interest, to sign them in the Partner's name.] [If the Student Company does not give its agreement and promise within [90] days after the period in paragraph (c) ends or, if paragraph (e) applies, after the Partner's selection, the notice lapses.]

- **Note after CA 5.7:** replace "advise how a sale is completed and recorded if the Partner does not cooperate" with "advise whether the bracketed power of attorney in paragraph (g) binds a Partner, and how the assignment should be recorded".
- **Why DECISION:** the duty to state costs and sign only spells out what a "right to purchase" implies. Partners will resist the power of attorney, so keep it bracketed.

**2. CA 5.7(c) to (e): the process for competing teams has no deadlines, and the equity for unsuccessful teams is unclear.** DECISION

- **Quotes:**
    - (c) "Any other students have 30 days to indicate that they also wish to purchase the work from the Partner."
    - (e) "If other students on the project also notify the Partner that they intend to repurchase the work after receiving the notice, the Partner must solicit proposals ... the Partner must select the successful team in its sole discretion. The successful team must grant each unsuccessful team the same amount of advisor equity it grants the Partner."
- **Problem:**
    - Responders notify only the Partner, so the notifying team cannot tell whether (d) or (e) applies.
    - (e) does not say "within those 30 days", so a response on day 31 arguably still triggers (e).
    - There is no deadline to solicit proposals or to select a team, and nothing happens if the Partner never selects one.
    - "Grants" in (e) differs from "offer" in (f)(2). If the Partner declines its equity, the unsuccessful teams arguably get nothing.
    - A "team" may be a group of students with no company, and the text does not say who holds the equity.
    - Students who respond as separate one-person teams each get the equity. That multiplies the dilution, which rewards splitting.
    - The duty falls on "the successful team", but only its Student Company can grant equity, and that company is not a party. Finding 1's written promise fixes this.
- **Fix:**
    - (c), second sentence: "Within 30 days after receiving that notice, any other students on the project who also wish to purchase the work, through a Student Company or as a group that would found one, must notify the Partner, the notifying students, and all other students on the project."
    - (e): "If other students give notice under paragraph (c), the Partner must solicit proposals from the teams about how they intend to use the work and the compensation they intend to provide the Partner. Based in part on those proposals, the Partner must select the successful team in its sole discretion within [60] days after the period in paragraph (c) ends[, failing which the team that gave the first notice is selected]. The successful team must grant each unsuccessful team that submitted a proposal meeting paragraph (f) the same amount of equity it offers the Partner under paragraph (f)(2)[, divided equally among that team's students]."
    - This fix also replaces "repurchase" with "purchase", the word used everywhere else.

**3. CA 5.7(f): both economic terms are undefined.** DECISION

- **Quotes:**
    - "the Partner retains a perpetual, non-exclusive, royalty-free license to the work";
    - "pay the Partner at least its actual costs (including, for example, legal services preparing patents)".
- **Problem:**
    - **The license.** "A license to the work" grants no stated rights. It does not say whether it covers patents, whether it is irrevocable, or whether the Partner may transfer or sublicense it.
        - Under default federal rules, a bare non-exclusive license generally cannot be transferred or sublicensed. The Partner may therefore lose it when it sells its business. If that default is not applied, the Partner could instead license the work to anyone, including the buyer's competitors.
        - Every other license in the agreements lists its rights (CA 5.3; PA 4.3(b)).
    - **The price.** "Actual costs" can be read to include sponsorship fees and employee time, not just patent costs.
        - With one buyer, (d) makes this floor the price, so its scope decides whether the right is affordable.
        - In the owner's first round, the price was "Partner's documented out-of-pocket costs (such as patent fees)".
- **Fix:**
    - "the Partner retains a perpetual, irrevocable, worldwide, non-exclusive, royalty-free license to use, copy, modify, make derivative works of, distribute, display, perform, make, have made, sell, offer to sell, import, and otherwise exploit the work for any purpose, which it may transfer only with its business and may sublicense only to licensees it had before the notice"
    - "(1) pay the Partner at least its documented out-of-pocket costs of [sponsoring the Project and] obtaining and protecting the work, such as patent filing and legal fees, within a reasonable time"
- **Why DECISION:** both go beyond the owner's "PNERF license" and "actual costs". The owner should also say whether sponsorship fees count.

**4. CA 5.7(a) and (b): who may buy, what, and when.** MECHANICAL, with one point for the owner

- **Quotes:**
    - (a) "Project Work Product that a Partner owns under its Project Agreement";
    - (b) "if neither the Partner nor its licensees is then using the work commercially or pursuing a patent on it, a Student Company, or a group of one or more students who prospectively would found a Student Company, has the right";
    - CA 5.1: "Section 5.7 to work that a Partner owns".
- **Problem:**
    - **FSL software is caught.** Under the FSL choice, the Partner owns an undivided interest in the Project Software (PA 4.4(a)), and PA 1.2 binds every Partner to 5.7. As written, 5.7 reaches a Partner's FSL interest.
        - CA 5.1 elsewhere says "owns outright".
        - The README and the Student Guide describe 5.7 only under "Partner owns".
    - **Buyers are not tied to the project.** "A Student Company" and "students" could be any student's, although (c) assumes they are on the project ("all other students on the project").
    - **"Then" has no date.** If non-use is tested at the sale, a Partner can defeat a notice by starting to use the work during the 30 days.
    - **Grammar.** "neither the Partner nor its licensees is" should be "nor any of its licensees is".
- **Fix:**
    - (a): "This Section 5.7 applies to Project Work Product that a Partner owns outright under its Project Agreement's "Partner owns" choice ("the work" in this Section)."
    - CA 5.1: "and Section 5.7 to work that a Partner owns outright".
    - (b): "At any time from [2] years after the end of the Duration, a Student Company of one or more of the project's students, or a group of one or more of the project's students who prospectively would found a Student Company, has the right to purchase the work from the Partner, if, on the date of their notice under paragraph (c), neither the Partner nor any of its licensees is using the work commercially or pursuing a patent on it."
- **For the owner:** a Partner could file a new provisional application each year. That costs little and arguably counts as "pursuing a patent", so it could block the right indefinitely. If that is not intended, say "prosecuting a non-provisional patent application".

**5. PA 4.5(g): students cannot find or bind a later owner, and an exclusive license survives a purchase.** DECISION

- **Quotes:**
    - PA 4.5(g): "Partner must not transfer the Project Work Product, or grant an exclusive license in it, unless the transferee or licensee first agrees in writing to be bound by Course Agreement Section 5.7 as Partner is."
    - CA 5.7(a): "'the Partner' includes any later owner of the work."
- **Problem:**
    - Nothing tells the students that the work was transferred, or to whom. They cannot give the notice in CA 5.7(c), and neither PA 6.2 nor CA 8.5 gives an address for a later owner.
    - The transferee's written agreement is with Partner. Nothing says that the students or their Student Companies may enforce it.
    - An exclusive licensee bound "as Partner is" has nothing to sell. After a purchase, the Student Company owns the work subject to the exclusive license, which leaves it bare title.
    - "The Project Work Product" can be read as all of it, so a transfer of one part is arguably not covered.
- **Fix:** "Partner must not transfer any of the Project Work Product, or grant an exclusive license in it, unless the transferee or licensee first agrees in writing, for the benefit of the student Signers and their Student Companies, to be bound by Course Agreement Section 5.7 as Partner is and, for an exclusive licensee, that its license ends when the work is purchased under that Section. Within 30 days after the transfer or license, Partner must give the Signers notice of it, with a copy of that agreement and an email address for notices to the transferee or licensee." Add the notice to README scenario 13.
- **Why DECISION:** it adds a small Partner duty. The owner also decides whether an exclusive license ends or only becomes non-exclusive.

**6. CA 8.5 reaches Partners, and differs from PA 6.2 on where notices to Partner go.** MECHANICAL

- **Quotes:**
    - CA 8.5: "Each individual who signs this agreement, a Project Agreement, or a Project Election must give an email address ending in harvard.edu".
    - CA 8.5: "A notice to an individual ... must be sent to both email addresses".
    - CA 8.5: "A notice to a Partner goes to its Partner Contacts, as its Project Agreement provides."
    - PA 6.2: "Other notices to Partner go to its authorized officer and the Partner Contacts, by email."
    - PA 1.1: "each individual who signs the cover page or a joinder page (a "**Signer**")".
- **Problem:**
    - **Partners are caught.** Partner's signing officer and a Partner who is an individual each "sign ... a Project Agreement". Read literally, notices to an individual Partner must go to two email addresses and a telephone, but the Partner block collects one email and no harvard.edu address. Under PA 1.1, an individual Partner who signs the cover page is also arguably a "Signer". The owner's rule was written for Harvard individuals; Partners update "their own contacts by notice".
    - **The two documents differ.** CA 8.5 sends notices to Partner to the Partner Contacts only, while PA 6.2 adds the authorized officer. The CA governs a conflict (CA 1.5; PA 1.2), so a CA 5.7 notice sent only to a departed Partner Contact arguably counts.
    - **No rule on which contacts to use.** CA 8.5 does not say which details to use when someone has given several: the roster entry, a PA entry, and later updates. PA 6.2 does say, but CA 8.5 alone governs notices under the CA and the Project Election, including buyout notices.
- **Fix:**
    - CA 8.5, first two sentences: "Each student and member of the Course Staff who signs this agreement, a Project Agreement, or a Project Election must give an email address ending in harvard.edu, a personal email address, and a personal telephone number (mobile preferred). A notice to any of them under this agreement or any Project Terms must be sent to both email addresses most recently given under this Section, with a text message or voicemail to the telephone number most recently given, each asking them to acknowledge it."
    - CA 8.5, last sentence: "A notice to a Partner, including a Partner who is an individual, goes where its Project Agreement provides."
    - PA 1.1: "Partner and each student or member of the Course Staff who signs the cover page or a joinder page (a "**Signer**") are parties."
    - README, "Owner's responses", C5: "notices to Partner through its authorized officer and Partner Contacts".

**7. CA 8.5: "the notice period" is undefined, and many notices start no period.** DECISION

- **Quote:** "The notice counts as given and received on the date it is first sent, if the sender repeats it about every [14] days until it is acknowledged or the notice period ends."
- **Problem:**
    - **Periods must be inferred.** For each notice, the reader must work out the period: [60] days for the buyout (5.5(c)), 30 days for the right to purchase (5.7(c)), and [60] days after the last notice for competing buyouts (5.5(g)).
    - **Many notices start no period.** These notices to individuals start none:
        - replacing an FSL Representative (CA 6.4(d));
        - replacing Partner Contacts (PA 6.1);
        - assigning the PA (PA 6.4);
        - identifying data and code under the Enabling License (PA 3.6);
        - identifying information given by mistake (PA 2.2(d)).

      For these, the sender must repeat the notice until every recipient acknowledges it, possibly forever, and it is unclear until then whether the notice counts. The PA notices are routine, yet each now needs two emails and a text to every Signer.
    - **Offers and requests.** Some period-starting communications are called an "offer" or a "request", not a notice:
        - the buyout's equity offer (30 days, CA 5.5(d));
        - the buyout company's request to sign papers ([15] business days, CA 5.5(d));
        - Partner's request to sign patent papers ([15] business days, PA 4.5(b)).

      A holdout can argue that CA 8.5 does not apply to them, and the powers of attorney depend on them.
- **Fix:** replace the third sentence of CA 8.5 with: "The notice counts as given and received on the date it is first sent, if the sender repeats it about every [14] days until it is acknowledged or until the period it gives for a response ends, such as the [60] days in Section 5.5(c) or the 30 days in Section 5.7(c). For a notice that gives no such period, that period is [30] days. Written offers and requests that start a period, such as those in Section 5.5(d) and Project Agreement Section 4.5(b), are notices under this Section."
- **For the owner (optional):** require the text or voicemail, and the repeats, only for notices that start a period, so routine notices can go by email.

**8. Notices to Student Companies and to Partner lack an address or a receipt rule.** MECHANICAL

- **Quotes:**
    - CA 5.5(c): "by written notice";
    - CA 5.5(g): "by written notice to those companies";
    - CA 5.5(b): "The notice must describe the company and the terms on which its student founders hold their equity.";
    - PA 6.2: "Partner updates them by notice to the Signers (Section 6.1).";
    - PA 3.3: "That period starts when Partner receives the copy".
- **Problem:**
    - **Student Companies have no address.** Neither a Teammate answering a buyout notice nor a Partner soliciting proposals under 5.7(e) has an address for the company. CA 8.5 covers only individuals and Partners.
    - **No receipt rule for Partner.** Nothing says when a notice or copy to Partner counts as received, yet the publication hold starts on receipt (PA 3.3).
    - **No duty for Partner.** "Partner updates them" describes rather than obliges, though the owner said "All parties need an obligation". PA 6.1 covers only Partner Contacts, not the officer's address.
- **Fix:**
    - CA 5.5(b): "The notice must describe the company and the terms on which its student founders hold their equity, and give an email address for notices to the company."
    - CA 5.7(c): add "with an email address for notices to them".
    - CA 8.5, new sentence: "A notice to a Student Company goes to the email address in its notice under Section 5.5 or 5.7."
    - PA 6.2: "Partner must give the Signers notice of any change to these addresses (Section 6.1). A notice or copy to Partner counts as received when emailed to the addresses Partner most recently gave under this Section."

**9. CA 1.2: a member of the Course Staff who is a Partner collides with CA 4.1 and PA 1.1.** MECHANICAL

- **Quotes:**
    - CA 1.2: "Any other member of the Course Staff may be or control a Partner only if they recuse themselves ... In that role they have a Partner's duties, and Section 7.4 does not protect them."
    - CA 4.1: "They must not contribute intellectual property to any project ... If a member of the Course Staff contributes material anyway, they must not assert any right in it against the project's students, its Partner, or anyone who receives the work".
    - PA 1.1: "A member of the Course Staff signs only to receive Confidential Information, agrees with Partner, and is bound only by Sections 1, 2, and 6."
- **Problem:**
    - A teaching assistant (TA) who is the Partner provides Partner Background IP. Under CA 4.1, providing it is a breach, and the TA cannot assert rights in it against the students. The CA governs a conflict, so this overrides PA 4.1 and PA 2.
    - A TA who signs the PA as an individual Partner is "a member of the Course Staff" who signs. Under PA 1.1, they can argue they are bound only by PA Sections 1, 2, and 6. That would free them from the IP terms, publication review, the release, and 4.5(g).
    - A TA who controls a company Partner receives its Confidential Information without signing as a Signer, contrary to CA 4.3.
- **Fix:**
    - CA 1.2: replace "In that role they have a Partner's duties, and Section 7.4 does not protect them." with "Sections 4.1, 4.3, and 7.4 do not apply to anything they do as or for that Partner."
    - PA 1.1: "A member of the Course Staff who signs other than for Partner signs only to receive Confidential Information, ..."

**10. CA 1.2: personal liability for a TA who controls a Partner, access to grades, and who counts as a TA.** DECISION

- **Quotes:**
    - "In that role they have a Partner's duties";
    - "No instructor of the Course may be or control a Partner without Harvard's written consent."
- **Problem:**
    - "They have a Partner's duties" makes a TA who only controls a company Partner personally bound by the company's Project Agreement. That is a guarantee nobody asked for. For a TA who is an individual Partner, it is redundant. Finding 9's fix drops it.
    - Recusal from "evaluating" still leaves the TA with Course Staff access to that project's students' grades. CA 4.2 and PA 2.4 keep grades from Partners, and under FERPA a recused TA has no legitimate educational interest in them.
    - The owner said "a TA". "Any other member of the Course Staff" adds teaching fellows and course assistants. That is probably right, but it is an interpretation the owner has not approved.
    - The two sentences use different forms:
        - the instructor sentence says "a Partner" and "written consent";
        - the student sentence says "the Partner of a project in the Course" and "written approval".
- **Fix (with finding 9):** "No student in the Course may be or control the Partner of a project in the Course[ without Harvard's written approval]. No instructor of the Course may do so without Harvard's written approval. Any other member of the Course Staff may do so only if they recuse themselves from evaluating that project's work and from access to its students' grades and other education records. Sections 4.1, 4.3, and 7.4 do not apply to anything they do as or for that Partner." Update README scenario 24 to match.

**11. CA 8.5: "the Course Staff" as the keeper of contact details.** DECISION

- **Quote:** "Each individual must report any change of personal email address or telephone number to the Course Staff and to the other signers of their own project's Project Terms".
- **Problem:**
    - Buyouts and purchases come years after the Course. By then, a past offering's Course Staff have scattered, and "the Course Staff" names no one person.
    - Contact details that the Course Staff keep may be education records. CA 4.2 bars sharing them with "any Partner or any other unauthorized recipient" unless the student asks in writing. So the Course Staff may be unable to pass an update to a Student Company or Partner that needs it.
- **Fix:**
    - CA 8.5: "to the Course instructor and to the other signers of their own project's Project Terms, including its Partner. ... Each student consents to the Course instructor, and any such system, giving these details to anyone entitled to give them a notice under this agreement or any Project Terms."
    - Note for counsel after CA 8.4: add "and whether the consent in Section 8.5 meets 34 C.F.R. § 99.30".

**12. CA 6.4(d) and 8.4: after the Course, no student is "current", so no one can replace the FSL Representative.** DECISION (this predates the round, but it defeats the FSL notice)

- **Quotes:**
    - 6.4(d): "may replace them by written notice to all of the project's current students";
    - 8.4: "a project's "current" students are those still taking part in it."
- **Problem:** FSL releases and enforcement happen after the Course. By then every End Date has passed, and arguably no student is "still taking part". There is then no majority to replace the FSL Representative, and a change under 6.5 needs signatures from no one.
- **Fix (CA 8.4):** "a project's "current" students are those still taking part in it or, after the Duration, those who were taking part in it at the end of the Duration."

**13. README scenarios 7 and 8.** MECHANICAL

- **Scenario 7:** "The project's other students have 30 days to join in; if they do, Partner chooses among the teams' proposals." Under CA 5.7(c) and (e), the other students do not join in; they compete.
    - Fix: "The project's other students have 30 days to say they also want to buy it. If any do, Partner chooses among the teams' proposals, and the winning team gives each other team the same equity it offers Partner."
- **Scenario 8:** "It counts from the date first sent if repeated about every [14] days until acknowledged, so a holdout cannot stop the clock by ignoring it." The conclusion does not follow: if the holdout ignores the notice, the stated condition is never met.
    - Fix: "... until acknowledged or the [60] days end, so a holdout cannot stop the clock by ignoring it."

**14. Student Guide.** MECHANICAL

- **Line 52 ("Partner owns")** omits the equity for unsuccessful teams. After "Partner chooses among the teams' proposals", add: "The winning team gives each other team the same equity it offers Partner."
- **Line 161** says only "keep your contact details current with the Course Staff and your project's other signers", and only in the buyout steps. It omits the partner and the automated system, and notices of a right to purchase use the same contacts. Replace it with a bullet under "Rules for everyone":
    - "**Notices.** Notices under the agreements, including buyout and purchase notices, go to your Harvard and personal emails, with a text or voicemail. Keep your personal email and phone current with the Course Staff, your project's other signers (including any partner), and any system the Course provides."
- **Line 75 ("Course Staff")** says nothing about who may be a Partner (C10). Add: "No student may be a project's partner[ without Harvard's approval], and no instructor without Harvard's consent. Any other member of the Course Staff may be one only if they don't evaluate that project."

**15. Minor.** MECHANICAL

- **"Team" has two meanings.** CA 5.7(d) to (f) use "team" for a group of buyers, but CA 5.1 and 5.3 use it for a project's students. Consider "buying team" at its first use in (d).
- **Project Election, FSL Representative:** "Email (ending in harvard.edu)" cannot be filled in for a Student Company, which 6.4(d) allows as the representative. Use "Email:".
- **`agreements/v0.6/README.md`** still describes the decisions as awaiting the owner's confirmation. It also lists "a buyback from a Partner that doesn't use assigned work" and "mutual protection for Partners, with carve-outs". Change these to "a right to purchase work that a Partner owns and leaves unused" and "mutual protection for Partners, with exceptions beyond a Partner's own breach left to counsel", and record that the decisions are confirmed.

## Overall assessment

The drafter carried the owner's decisions faithfully:

- CA 5.7 is the owner's text, with only the reported edits.
- CA 8.5 states the owner's notice rule and uses the owner's answers.
- CA 7.5 and PA 5.3 are short, as asked, and the note for counsel carries the candidate exceptions.
- CA 1.2 states the C10 rule with the owner's TA and instructor terms.

Part 3 (C1 and A5) is clean.

The main weakness is CA 5.7. It is a bare option with:

- no statement of the Partner's costs;
- no duty to sign;
- no deadlines;
- no binding promise from the buying company;
- no defined scope for the Partner's retained license.

As a result, a reluctant Partner can stall it, and the only remedy is a lawsuit. I recommend the express duty in finding 1, with the power of attorney bracketed for counsel.

The notice rule works for students and the Course Staff. It still needs:

- a period for notices that give none;
- addresses for Student Companies and later owners;
- one rule, shared by CA 8.5 and PA 6.2, for notices to Partners.

The C10 text needs one sentence so that a TA who is a Partner keeps the rights in its own materials and is bound by the whole Project Agreement.
