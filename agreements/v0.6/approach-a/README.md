# Approach A: Course Agreement and Project Agreement

## Summary

Approach A splits the agreements by audience. Everyone in a course offering, every student and every member of the Course Staff, signs one **Course Agreement**, and its signers agree with each other. It states once every rule that protects other projects (inadvertent disclosures, other projects' Course Private Information, others' confidential information, and generative AI), the Course Staff's role, teammates' rights (including the bracketed buyout), reassignment, Harvard's position, and the Confidentiality Period. It ends with a one-page **Project Election (No Partner)** for projects without a partner. Each project with a partner then has a **Project Agreement**: a cover page holding every choice and blank, with defaults printed beside each choice, followed by six sections of standard terms that are the same for every project. Partner and every student on the Project are parties to each other. One section of the Project Agreement (Section 1.2) ties it to the Course Agreement: it names the version, binds Partner to the four Course Agreement sections that concern it, and binds every student signer to the course-wide rules and teammates' rights even if they never signed the Course Agreement. Harvard approves both templates once, for the listed courses, in a **Harvard approval** kept on file.

## Files

| File | What it is |
| --- | --- |
| [`course-agreement.md`](course-agreement.md) | Course Agreement, with its signature roster and the Project Election (No Partner) |
| [`project-agreement.md`](project-agreement.md) | Project Agreement: cover page, joinder page, and standard terms |
| [`harvard-approval.md`](harvard-approval.md) | Harvard's one-time approval of both templates, kept on file |

The shared *Student Guide to Course Project Agreements* (`agreements/v0.6/shared/student-guide.md`) is drafted separately. The agreements refer to it by that title (Course Agreement Section 1.4 and the signature roster) but do not depend on it.

## Who signs what, and when

| Stakeholder | Signs | When |
| --- | --- | --- |
| Every student | Course Agreement (signature roster), confirming they have read the Student Guide | Once per course offering, before project work begins, or on enrolling later |
| Student on a project with a partner | That project's Project Agreement (cover page) | Before receiving partner information or starting material work; a later joiner signs the joinder page |
| Students on a project without a partner | One Project Election (No Partner), at the end of the Course Agreement | Before starting material work; a later joiner signs it on joining |
| Course Staff (instructors, teaching fellows, teaching assistants, and course assistants) | Course Agreement (signature roster), in a personal capacity | Once per course offering, before project work begins, or on joining |
| Course Staff who need a project's Confidential Information | That project's Project Agreement (cover page or joinder page) | Before receiving Confidential Information |
| Course instructor | Nothing beyond the Course Agreement. Approves any choice other than Open Science, and any individual project, in writing or by email | At signing and before any later change |
| Partner (authorized officer) | Project Agreement; any change to it | Before project work begins; on any change |
| Partner Contacts | Nothing. Act for Partner by email (consents, generative AI tools, Enabling License, edits, credit changes); one may acknowledge joinders | During the Project |
| Student Company | A written agreement to be bound, before receiving students' FSL interests. Signs nothing to use teammates' licenses or the buyout, which it may enforce (Course Agreement Section 8.3) | Before an FSL assignment (Project Agreement Section 4.4(f); Course Agreement Section 6.4(c)) |
| Harvard (through OTD, SEAS, or OGC) | Harvard approval | Once per template version, for the listed courses; kept on file, never attached to agreements |

## Length

Approximate word counts. "Text" excludes notes for counsel, which are removed before use, and blank lines in forms.

| Document | Text | Notes for counsel |
| --- | --- | --- |
| Course Agreement: Sections 1 to 8 | 3,600 | 350 |
| Course Agreement: signature roster and Project Election | 380 | none |
| Project Agreement: cover page and joinder page | 760 | none |
| Project Agreement: standard terms | 3,930 | 165 |
| Harvard approval | 335 | none |

The drafting instructions aimed for about 2,000 to 3,000 words for the Course Agreement with its forms, and 3,000 to 4,000 for the standard terms (these targets are not in the brief). The standard terms are within range. The Course Agreement, at about 3,980 words with its forms, is not. Teammates' rights and the buyout take about 920 words and the no-partner terms about 460, and the review added the accounting waiver, the buyout's power of attorney, and fuller enforcement terms. Cutting further would mean dropping a decision.

## How each scenario is handled

"CA" is the Course Agreement and "PA" the Project Agreement.

| # | Scenario | How it is handled | Where |
| --- | --- | --- | --- |
| 1 | Defaults | Open information, Students own, MIT, CC BY 4.0, and no review apply. This is Open Science, so no instructor approval is needed. Partner's officer and the four students sign the PA; all have signed the CA. Partner gets the Partner License; teammates license each other and owe no accounting; no buyout, because the work has public licenses. | PA cover page, 2.2(a), 4.3; CA 2.1, 5.2, 5.5(a) |
| 2 | Course Private, open licenses | Not Open Science, because information is not Open, so the instructor must approve in writing or by email. Partner shows it by checking the certification box and naming the instructor and the date. | PA cover page ("Instructor's approval"), 2.2(b), 2.3; CA 2.1 |
| 3 | A TA needs Confidential Information | The grading TA signs the PA as Course Staff and is bound by its Sections 1, 2, and 6 only. The other TA does not sign, may see Course Private Information as part of the Course Community, and must not be given Confidential Information. Both are bound by CA Section 3 and contribute no IP. | PA 1.1, 1.5, 2.2(c); CA 1.3, 3, 4.1, 4.3 |
| 4 | Closed code, open paper | Partner may use, modify, and commercialize the code under the Partner License (perpetual and non-exclusive), but may not sublicense it without the students' consent and may transfer it only with its business. Students may publish a paper under CC BY 4.0, subject to PA Section 2 (Partner information), credit, and any review. Instructor approval is needed for "None". Teammates license each other, no student may license the code to outsiders except through a Student Company, and the buyout is available for the code. | PA 4.3(b) to (f), 3.3, 3.4, 6.4; CA 5.2, 5.5, 5.6 |
| 5 | Dual-licensed software | MIT and Apache 2.0 may be checked together, and each recipient chooses; other work is CC BY-SA 4.0. With Open information this is still Open Science, so no approval is needed. | PA cover page, 4.3(c) and (d); CA 2.1 |
| 6 | FSL with a startup | Partner and the students own the code jointly under FSL-1.1-MIT. The two founders may use it through their Student Company, which is not a competing use, and may assign their interests to it. Partner keeps using it; no one owes an accounting, and no one may license it otherwise without a signed change. Each release becomes MIT for everyone two years after release, under the FSL's own terms. The buyout does not apply to any of the project's work, including documentation. | PA 4.4; CA 5.1 to 5.3, 5.5(a) |
| 7 | Assignment and a patent | With Course Private information, review applies automatically: Partner gets a copy 30 days before any publication of the work, the hold lasts the stated period (blank means until Partner consents), and patent delays are handled within it. The poster session is a private academic use: no consent is needed, but the student masks Partner, gives Partner a copy, and must not unreasonably refuse Partner's edits. A bracketed option, for the owner to decide, would require that copy [10] business days before the session when Partner owns. With Open information, review does not apply; instead the student gives 30 days' notice before any public disclosure, and Partner may delay it up to 60 days after the notice to file. | PA 3.1, 3.2, 3.3, 4.5(d) to (f); note after PA 4.5 |
| 8 | Holdout teammate | After the fourth student's End Date, the founders' Student Company, which is actively developing the work, may give notice. The fourth student, who is not using the work commercially, may join on the founders' terms within [60] days. Otherwise all their rights in the work pass to the company when it pays the bracketed price or gives a signed promise to pay. If they will not sign recording documents within [15] business days, the company signs them as attorney-in-fact. If paragraph (f) is kept, they keep only noncommercial use. The first company to give notice prevails, and the company may enforce all this itself. The Partner License is unaffected. | CA 5.5, 8.3; PA 4.3(f) |
| 9 | Two startups | Each teammate's license extends to their own Student Company, and both keep it. Neither owes the other an accounting. Neither may license the work to outsiders except through their own company. Neither can use the buyout against the other, because both use the work commercially. What each company builds afterwards is its own. | CA 5.2 to 5.5 |
| 10 | Late joiner and early leaver | The joiner signs the CA roster (if newly enrolled) and the PA joinder page before receiving information or working, and is bound as of the Effective Date under the same choices. The leaver's End Date is the withdrawal date. Before it, they make reasonable efforts to get copies to Partner and teammates; within 30 days after it, they delete Confidential Information and return credentials. Their confidentiality duties last five years from then. Their contributions stay under the PA's terms; they need not sign later changes, which do not bind them, and they keep their teammates' licenses. | CA 1.1, 5.1, 5.6(a), 8.1; PA 1.5, 2.5, 6.3 |
| 11 | Reassignment | The Course Staff must honor the request. Work done on the first project stays under its terms as they stood when the student left, as if the student had signed, and is assigned or licensed accordingly. The student keeps that project's Course Private and Confidential Information as its signers must. The first partner may enforce both parts. The student then signs the new project's PA. | CA 2.2, 2.3, 8.3; note after CA 2.3 |
| 12 | Change of mind | A written change signed by Partner's officer and every student signer still on the Project, with the instructor's approval certified by Partner. The move to Course Private covers only information given after the change, unless the change says otherwise. The change binds only those who sign it and cannot take back rights already received, such as released MIT copies. Teammates' licenses in the assigned work end only for students who sign the change. Review becomes automatic. A student who will not sign may ask to be reassigned; their work stays under the old terms. | PA 6.3, 4.5, 3.3; CA 5.1, 2.3 |
| 13 | New Partner Contact; partner acquired | Partner replaces a Contact by notice; that is not a change. If Partner's shares are bought, nothing changes. If its business is sold, Partner may assign the PA to the buyer on notice, and the Partner License goes with it. Student Company status is tested when a company first uses the work, so an acquisition does not undo it. | PA 6.1, 6.4; CA 5.3 |
| 14 | Demonstrations after the Course | Live demos to employers are allowed if Partner is masked, no Confidential Information is disclosed, and no copies are given. The data sample may be used only if a Partner Contact identified it under the Enabling License, which lasts five years after the End Date and excludes commercial use; otherwise the student uses simulated data or asks by email. | PA 3.5, 3.6; CA 8.1 |
| 15 | Generative AI | Only into a tool Partner has approved in writing or by email. Harvard's own tools also need Partner's approval for its restricted information. A Partner Contact may approve by email. | CA 3.4; PA 2.3(d), 6.1 |
| 16 | Individual project, keep all rights | The student signs the Project Election, checks "Individual" and "None" for both license categories, and certifies the instructor's approval, which an individual project always needs. CA Section 3 still applies. | CA 2.1, 6.1, 6.3 |
| 17 | Team project with FSL | Project Election: "Team", FSL-1.1-ALv2, a license for other work (CC BY 4.0 by default), and the FSL Representative chosen by majority and named on the form, with the instructor's approval certified. The students own the code jointly, may use it through a Student Company, owe no accounting, and may license it otherwise only with everyone's written consent. A majority may replace the representative. The buyout does not apply. | CA 5.2, 5.5(a), 6.1, 6.4; Project Election |
| 18 | Team project, Course Private | Project Election "Course Private", with the instructor's approval certified. Other signers keep the work within the Course Community and pass it to no partner without the team's written consent. The public licenses apply to a copy only once a team member releases it outside the Course Community. | CA 6.2, 3.2 |
| 19 | Inadvertent disclosure | The student tells the person who shared it, does not copy or use the information, and deletes it; receipt alone is not a breach, and prompt steps are reasonable care. At the poster session, showing Course Private Information is permitted; the presenters must ask the visitor to stop and delete, but are not responsible for non-signers. A visitor who signed the CA is bound by CA 3.2, and a partner by PA 1.2 and 2.4. | CA 3.1, 3.2; PA 1.2, 2.4; review note R-8 at CA 1.3 |
| 20 | Employer's information | Neither student may share a current or former employer's confidential code with any partner or anyone else in the Course, or use it, without authorization. Code they may use stays the employer's, keeps its license, and is not Project Work Product. | CA 3.3, 1.2 |
| 21 | Capstone student | The student still signs the CA, but may decline every partner project's terms and do a project without a partner, or a thesis where the program allows. An individual project still needs approval. | CA 2.1, 2.4, 6 |
| 22 | Harvard has rights | The Course Staff check the first box under "Harvard's rights in students' work". The informal exception then does not apply, Harvard's rights come first, and as between Harvard and a partner the funding agreement governs. Partner agrees to this and confirms it received the completed course details. | CA Course details, 7.2, 7.3; PA 1.2, 6.6; Harvard approval |
| 23 | Two-term course | 101a and 101b are listed as one Course in the CA's course details, with a Duration covering fall, J-Term, and spring. The PA's cover page names the Course as in those details, so the Duration is set in one place. One CA covers the offering, and students who join in spring sign on joining. End Dates fall at the end of spring unless a student leaves earlier. The Harvard approval lists the pair as one course. | CA Course details, 1.1; PA cover page, 1.2; Harvard approval |
| 24 | Course Staff | The TA must not contribute code; if they do anyway, they must not assert any right in it against the students, the partner, or anyone receiving the work, and the partner may enforce that. The instructor must not give grades to the partner, and anyone entitled to enforce that rule may seek an injunction. The partner must not ask, and must treat any grades it receives as an Inadvertent Disclosure. | CA 4.1, 4.2, 7.4, 8.3; PA 2.4 |

## Strengths

- **Each course-wide rule is stated once.** Every student and member of the Course Staff signs it and can enforce it directly. The v0.5 third-party beneficiary list for students, Exhibit C box 1, and Exhibit D's references to about twenty sections all disappear.
- **The partner's document is short and predictable.** One cover page holds every choice, with defaults, and each IP choice is one complete subsection (PA 4.3 to 4.5). Everything the PA takes from the Course Agreement is in one section (PA 1.2).
- **Teammates' rights are the same for every project,** with or without a partner, in one place (CA Section 5), including the accounting waiver that makes shared ownership workable.
- **Projects without a partner** need only a one-page form; their terms sit next to the rules they depend on.
- **Harvard signs once,** and the informal exception and Harvard's prior rights are stated where students read them (CA 7.2 and 7.3).
- **The cover page suits the document generator:** every choice is a labeled check box with its default printed beside it.

## Weaknesses

- **Two signatures per student per project.** PA 1.2 binds a student signer to the course-wide rules and teammates' rights even without the Course Agreement, but the Course Staff still need to check that the roster is complete.
- **The PA is not self-contained for a partner.** Partner agrees to four Course Agreement sections and its definitions (PA 1.2), so it must receive the Course Agreement with the PA.
- **Partners and Student Companies rely on third-party beneficiary rights** to enforce the Course Agreement (CA 8.3).
- **A large multi-party agreement** signed at different times raises accession questions (note at CA 1.1). Changing the Course Agreement mid-offering needs every signer (CA 8.4), so in practice fixes wait for the next offering unless counsel allows a corrected version.
- **The Course Agreement is above its target length** (see "Length").
- **The cover page uses terms defined in the standard terms or the Course Agreement** (for example, Confidential Information and Partner Information), as cover-page agreements usually do.

## Open questions

The notes for counsel in the documents ask:

1. Whether later Course Agreement signers are bound to, and may enforce against, earlier ones, and whether CA 8.4 should allow a corrected version for later signers (CA 1.1).
2. Who counts as the SEAS community, and whether attendees must be told (CA 1.3; review note R-8).
3. Whether the reassignment assignment satisfies 17 U.S.C. § 204(a) and 35 U.S.C. § 261 (CA 2.3).
4. Whether a Course Staff member's promise not to assert rights works, given that Harvard may own employees' work (CA 4.1).
5. The buyout: which price alternative; whether to keep paragraph (f); enforceability against a holdout and against students who had to sign to take the Course; the present assignment under § 204(a) and § 261; the power of attorney; and securities and tax treatment (CA 5.5).
6. The gross negligence and willful misconduct carve-outs for Harvard and the Course Staff (CA 7.4; review notes R-5 and R-6).
7. How students under 18 sign (CA 8.4).
8. Whether the bar on sublicensing the Partner License, and teammates' licenses, should expressly allow end-user use of products (PA 4.3).
9. The limit on liability between Partner and the signers, and whether confidentiality breaches are excepted (PA 5.4).

For the owner: whether to keep the bracketed rule in PA 3.1 that gives Partner a copy [10] business days before a Private Course Event when it owns the work or a patent is planned (note after PA 4.5; it changes register item D3).

Points not yet raised in a note: "the same terms as its other student founders" in the buyout (CA 5.5(c)) may need to say whether it covers vesting and work duties, and Alternative 1 assumes the founders received equal amounts. The PA also says nothing about the effect of a missing instructor approval when Partner certifies one; as in v0.5, the certification is Partner's warranty.

## Decisions made by the drafter

These are points the brief, the register, the outline, and v0.5 did not settle. Items marked "(review)" were decided by the coordinator on the independent review (`agreements/v0.6/reviews/approach-a-review.md`).

| # | Decision | Where | Reason |
| --- | --- | --- | --- |
| 1 | Joint ownership covers the Project Software only. Other work is owned and licensed as under "Students own". | PA 4.4(g) | Keeps v0.5 Section 8.1.1 and register E2 ("own the software jointly"). FSL is a software license. |
| 2 | If joint ownership is checked without an FSL variant, FSL-1.1-MIT applies. An unnamed "Other license" counts as blank. | PA cover page | Parallels MIT as the software default. The brief names no FSL default. |
| 3 | Under Course Private alone, Partner uses reasonable efforts not to give confidential information. The mistake rule applies under both Course Private choices, and keeps v0.5's step of removing material from submitted coursework. | PA 2.2(b), (d) | Carries v0.5 Option 4.3 into the merged choice. The brief's "as above" for the Confidential choice includes the mistake rule. |
| 4 | Under the Open choice, information Partner calls confidential anyway is handled as an Inadvertent Disclosure: tell, don't use, delete. | PA 2.2(a) | The brief: nothing is confidential "except as the course-wide rules require". |
| 5 | Oral or visual Confidential Information needs only written confirmation within ten business days. | PA 2.2(c) | Follows the brief's wording, which drops v0.5's statement at the time of disclosure. |
| 6 | The Project Election uses the same license dials as the PA. "Keep all rights" is "None" for both categories. FSL is for teams only. | CA 6.3, 6.4; Project Election | One model for every project, and fewer special cases. |
| 7 | Teammates' licenses cover all student-owned and co-owned work, including FSL software, but not work a partner owns outright. If a change assigns work to a partner, the licenses end only for students who sign it. (review) | CA 5.1 | Protects students who do not sign a change, consistent with PA 6.3. |
| 8 | Student Company tests apply when the company first uses or receives the work. | CA 5.3 | Keeps v0.5 Section 8.1.1's timing, so a later acquisition does not strip a license. |
| 9 | Buyout: notice only after the teammate's End Date; the notice states the founders' equity terms. On the review: the teammate assigns all rights in the work, effective on payment or a signed promise to pay; a power of attorney applies after [15] business days; the first notice governs. (review, in part) | CA 5.5(b), (d), (g) | Avoids pressure on classmates mid-course, and makes scenario 8 work when the holdout signs nothing. Flagged for counsel. |
| 10 | Teammates' licenses use the Partner License's list of rights. No student owes another an accounting. Except through their Student Company, no student may license the team's work beyond its Project Terms without the other owners' consent. (review, in part) | CA 5.2 | Matches v0.5 Section 8.2; the accounting waiver makes co-ownership workable for startups. |
| 11 | Copies and credit among teammates are in the Course Agreement, for every team; Partner's copies and credit are in the PA. The credit process changes only under CA 5.6(c), by all of a project's students and a Partner Contact. (review, in part) | CA 5.6; PA 2.5, 3.4, 6.1 | States each rule once and covers teams without a partner. |
| 12 | Course Staff who contribute material anyway must not assert rights in it against the project's students, its partner, or anyone receiving the work. (review) | CA 4.1 | Keeps Course Staff out of IP assignments (v0.5 Section 8.4). Written with "must", per the brief's style. |
| 13 | Presenters must ask anyone recording Course Private Information at a Private Course Event to stop and delete, but are not responsible for non-signers. Kept on review. | CA 3.2 | Gives scenario 19 an answer; v0.5 was silent. |
| 14 | The Course Staff, as well as a partner for its own project, may allow tools other than Harvard's. | CA 3.4 | The brief says Harvard's tools apply "by default"; a partner still controls its restricted information. |
| 15 | PA cover-page changes need Partner's officer and every student signer, except one who left before the end of the Duration. A change binds only those who sign it, cannot take back rights already received, and changes the information choice only for later information unless it says otherwise. (review, in part) | PA 6.3 | A student who has left should neither block nor be bound by later changes. Course Staff signers do not decide IP terms. |
| 16 | When Partner owns the work, review covers any disclosure of it, not only findings relating to Partner Information. | PA 3.3 | Needed for patent filing, and matches v0.5 Section 8.3, which routes patent delays through review. |
| 17 | Everything the PA takes from the Course Agreement is in PA 1.2: the version, Partner's agreement to CA 3.1, 7.2, 7.4, and 8.2, and each student signer's agreement to CA 2.3, 3, 5, and 8. CA 8.3 lets partners, Student Companies, and Harvard enforce the parts that benefit them. (review) | PA 1.2; CA 8.3 | Partner does not sign the Course Agreement, and each rule is stated once. |
| 18 | The boxes for Harvard's rights are on the Course Agreement's course details, set once per course. Partner confirms it received them completed. (review, in part) | CA Course details, 7.3; PA 6.6 | The brief asks for them where students read them; they are a property of the course, not the project. |
| 19 | Students confirm the *Student Guide to Course Project Agreements* on the roster, or by email to the Course Staff. | CA 1.4 | The brief requires confirmation before choosing a project, and the roster is signed first. |
| 20 | A no-partner "Course Private" choice binds other signers, not the team itself, and its public licenses apply to a copy only once a team member releases it outside the Course Community. (review, in part) | CA 6.2 | v0.5 Exhibit D restricted classmates; this avoids a public license undoing the restriction. |
| 21 | A reassigned student's work stays under the first project's terms as they stood when the student left; the student keeps that project's restricted information as its signers must. (review) | CA 2.3 | Avoids holding a leaver to a stricter rule than those who stay, and to later changes they did not sign. |
| 22 | The Course Agreement may be changed only with every signer's signature; counsel is asked whether a corrected version may bind later signers. (review) | CA 8.4; note at CA 1.1 | Protects every signer's bargain. |
| 23 | Harvard's approval lasts until withdrawn, and a withdrawal does not affect signed agreements. | Harvard approval | Makes "once per template version" workable across offerings. |
| 24 | The buyout is excluded for every project whose terms choose FSL or Partner ownership, including teams without a partner that choose FSL. | CA 5.5(a) | The review's fix named only joint ownership with a partner. The brief excludes "joint ownership (FSL)", and a no-partner FSL team is also joint ownership under FSL. |
| 25 | The Course Agreement's version appears as the bracket "[0.6]", not a blank. | CA signature roster; PA 1.2 | The version belongs to the template, not to each course, and a bracketed value avoids a run of underscores. |
| 26 | The PA's former Section 3.1 (sharing within the Course) is folded into PA 2.3(c), and former Sections 2.6 and 5.5 are removed as repeats of CA 8.1 and CA 7.4. Later sections are renumbered. (review) | PA 2.3, 3, 5 | States each rule once. |

## Revisions after the independent review

All 25 findings were checked against the text, and each described the draft accurately. All were adopted as the coordinator decided, with these adjustments:

- **Finding 4:** the version is "[0.6]" rather than "[____]" (decision 25).
- **Finding 7:** extended to no-partner FSL teams (decision 24).
- **Finding 11:** written as "must not assert", since the brief reserves "will" for future facts.
- **Finding 18:** the intro now says "among", but the statement that students agree with each other stays only in PA 1.1, to avoid repeating it.
- **Finding 23:** CA 3.2 was kept as drafted, as the coordinator decided.
