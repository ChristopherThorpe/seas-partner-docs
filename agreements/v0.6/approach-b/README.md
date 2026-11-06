# Approach B: tiered short forms

## Summary

Approach B makes the common case short and adds terms only when a partner chooses them. Every student and member of the Course Staff signs one set of **Course Rules** per course offering. The Course Rules hold everything that applies to every Project: the course-wide confidentiality rules, the Course Staff's role, teammates' rights and the buyout, reassignment, Harvard's position, and the Confidentiality Period. A Project with a partner that stays Open Science then needs only the **Open Science Project Agreement** (the "Short Form"), whose only choices are MIT and/or Apache 2.0 and CC BY 4.0 or CC BY-SA 4.0. If the partner wants anything else, the parties also sign the **Restricted Project Addendum**. Its boxes switch on restricted information, other ownership or licenses, publication review, and Course Staff signatures, and it says exactly which Short Form sections it replaces. Projects without a partner use the one-page **Team Project Form**. Harvard signs a one-time **Harvard Approval** of all four templates, which stays on file.

Abbreviations used below: **CR** (Course Rules), **SF** (Open Science Project Agreement), **RA** (Restricted Project Addendum), **TPF** (Team Project Form), and **HA** (Harvard Approval). "§" means a section of that document.

## Documents and length

| Document | File | Words (approx.) | Notes |
| --- | --- | --- | --- |
| Course Rules | `course-rules.md` | 1,900, of which 1,820 is rules text and the rest the header and acknowledgment block; notes for counsel add 175 | Over the 1,000 to 1,500 target; see Weaknesses. |
| Open Science Project Agreement | `open-science-agreement.md` | 2,100, of which 1,850 is terms and 255 the cover page, signature blocks, and joinder page | Target was 1,500 to 2,000. |
| Restricted Project Addendum | `restricted-project-addendum.md` | 1,900, of which 1,590 is terms and 330 the choice boxes and signature blocks; notes for counsel add 100 | Used only when a partner leaves Open Science. |
| Team Project Form (No Partner) | `team-project-form.md` | 770 | |
| Harvard Approval | `harvard-approval.md` | 300; the note for counsel adds 85 | Signed once, kept on file. |

A partner in the common case reads about 2,100 words (the SF) plus the CR it receives for reference. A partner that restricts information or takes ownership reads about 4,000.

## Who signs what, and when

| Stakeholder | Signs | When |
| --- | --- | --- |
| Every student | CR (electronic acknowledgment is enough; see below), confirming they have read the Student Guide | Once per offering, at enrollment or on joining the Course, before choosing a Project (CR §1.1, §4.2) |
| Student on a partner Project | SF, and the RA if there is one | Before receiving Partner Information or doing material work (SF §1.3, CR §4.2) |
| Student joining a partner Project later | SF joinder page, which also joins any RA | On joining; bound as of the Effective Date (SF §1.3) |
| Student on a Project without a partner | TPF | Before doing material work; later joiners sign the same page (TPF §6) |
| Instructors and TAs (Course Staff) | CR, in a personal capacity | Once per offering, or on joining the Course Staff (CR §1.1) |
| A member of the Course Staff who needs Confidential Information | RA, Course Staff block | Any time; not an amendment (RA §5) |
| Course instructor | Nothing. Approves non-Open-Science choices by email. | Partner certifies it in RA box E (RA §1.2); students certify it in TPF box D (TPF §5) |
| Partner's authorized officer | SF, any RA, and any amendment | At signing, and for each later change (SF §7.1, §7.2) |
| Partner Contacts | Nothing; they give consents and notices by email, and may acknowledge joinders | Throughout (SF §7.1) |
| Harvard (through OTD, SEAS, or OGC) | HA | Once per template version, for the listed courses (HA §1, §4) |
| Student Company | A written agreement to be bound, only if it takes an assignment of FSL interests | Before the assignment (RA §4.2(f), TPF §3(g)) |
| Other projects' partners | Nothing; they may enforce the CR rules that protect their information | (CR §1.3) |

### Is an electronic acknowledgment at enrollment enough?

**Yes, with conditions.** Under the federal ESIGN Act and the Massachusetts Uniform Electronic Transactions Act (M.G.L. c. 110G), an electronic signature has the same effect as a handwritten one if the person intends to sign. The acknowledgment counts only if:

- the student or staff member sees the full text of the CR;
- they take an affirmative step ("I agree", or a typed name) after a Harvard login, so identity is authenticated;
- the system records who agreed, to which version, and when, and gives them a copy; and
- it happens before they choose a Project.

A notice in the syllabus, or "by enrolling you agree", is not enough. The CR contain present license grants and two conditional assignments (reassignment in CR §4.3 and the buyout in CR §5.3). A copyright transfer needs a signed writing (17 U.S.C. § 204(a)). An authenticated electronic signature should satisfy that, but the buyout's note for counsel asks counsel to confirm it. If counsel prefers, the same acknowledgment can go through Adobe Acrobat Sign, which the Course already uses (CR §7.2). "At enrollment" in practice means the first week of the Course, through the course website, because the registrar's enrollment flow may not support a custom agreement.

## Moving from the Short Form to the addendum mid-course (scenario 12)

1. The partner gets the instructor's email approval of the new choices.
2. Partner's authorized officer and every Student then taking part sign an RA (SF §7.2). It has an Addendum Date, the new boxes checked, and the approval in box E (RA §1.2).
3. From the Addendum Date (RA §1.3):
    - **Information:** the new information choice covers Partner Information given from then on. Earlier information stays open unless it is listed on the RA and is not yet public.
    - **Ownership and licenses:** the new choices reach earlier work as between the parties. Open licenses that others already hold in copies they received stay in force.
4. A Student who will not accept the change asks to be reassigned (CR §4.3). Their earlier work stays under the Open Science terms, and the change does not bind them (SF §7.2).
5. No new SF is signed. The SF and RA read together, and the RA governs where they differ (RA §1.1).

## How each scenario is handled

| # | Scenario | Answer and where |
| --- | --- | --- |
| 1 | Defaults | SF only: Open information (SF §2.1), Students own, MIT and CC BY 4.0 (SF §3.2), and Partner's license (SF §3.3). Partner's officer and all four students sign the SF (Signatures). All four have acknowledged the CR. No approval is needed. |
| 2 | Course Private, open licenses | SF plus RA with box A Course Private and boxes B and C left at their defaults, so MIT and CC BY 4.0 flow from the SF (RA §4.1). Instructor's email approval is certified by Partner in box E (RA §1.2, CR §4.1). |
| 3 | TA needs Confidential Information | RA box A Course Private and Confidential. The grading TA signs the RA's Course Staff block and is bound by RA §2.3, §2.4, and §2.6 (RA §5). The other TA is in the Course Community, so may see Course Private Information but never Confidential Information (RA §2.3, CR §3.3). If they see it by mistake, CR §2.1 applies. |
| 4 | Closed code, open paper | RA box C: software None; everything else "As checked in the Short Form" (CC BY 4.0). Partner may use the code for any purpose, perpetually, but may transfer its license only with its business and may not sublicense without consent (SF §3.3). Students may publish the paper under CC BY 4.0. Review applies only if Partner chose it, which needs restricted information (RA §3.1). Teammates' licenses and the buyout cover the code (CR §5.1, §5.3). |
| 5 | Dual-licensed software | SF only, with both MIT and Apache checked and CC BY-SA 4.0 checked. Each recipient chooses MIT or Apache (SF §3.2). This is still Open Science, so no approval is needed. |
| 6 | FSL with a startup | RA box B joint, FSL-1.1-MIT (RA §4.2). The two founders use the code through their Student Company, which is not a competing use (RA §4.2(c), CR §5.2), and may assign their shares to it if it agrees to be bound (RA §4.2(f)). Partner keeps using it, no one accounts for profits (RA §4.2(e)), and there is no buyout (CR §5.3). Two years after each version's release, the FSL itself makes that version available under MIT to everyone; joint ownership continues. |
| 7 | Assignment and a patent | RA box B Partner owns, box A Course Private. Review applies automatically (RA §3.1). The poster session is a private academic use, so it needs no review, but Partner's name is masked, Partner gets a copy, and Partner may request reasonable edits, such as removing how the invention works (SF §4.1, RA §3.2). Publishing the poster needs Partner's consent (RA §2.5). Other disclosures wait 30 days plus the Publication Hold Period (RA §3.2). **If information were Open:** no review. The poster session is still allowed under SF §4.1, but any public disclosure, including publishing the poster, needs 30 days' notice, and Partner may delay it up to 60 days after the notice to file (RA §4.3(c)). Students keep a demo and portfolio license (RA §4.3(b)). |
| 8 | Holdout teammate | RA box C None and None (or TPF A and B None). The three founders' Student Company, which is actively developing the work, gives notice (CR §5.3(a)). The fourth student may join within [60] days (CR §5.3(b)). Otherwise their share passes to the company when it pays or promises the bracketed price, without their signature (CR §5.3(c), (d)). They get that price, keep their credit (CR §5.4), and [keep noncommercial use] (CR §5.3(e)). With a partner, the company still cannot get rights exclusive of Partner (SF §3.3). |
| 9 | Two startups | Each teammate's license extends to their own Student Company, and each keeps it. No one gets exclusive rights in the course work (CR §5.2). Neither company can buy the other's founder out, because the buyout reaches only a teammate who is not using the work commercially (CR §5.3(a)). |
| 10 | Late joiner and early leaver | The week-5 joiner acknowledges the CR if new to the Course (CR §1.1), then signs the joinder page before doing material work. They are bound as of the Effective Date on the same choices (SF §1.3). The week-8 leaver's End Date is the withdrawal date (CR §7.1). Before then, they must make reasonable efforts to give teammates and Partner copies (CR §5.4, SF §5). Within 30 days they return credentials and delete Confidential Information (SF §5, RA §2.6). Confidentiality lasts five years from the End Date (CR §7.1). Their contributions stay licensed or assigned as the agreement provides (SF §3.2, §3.3; CR §5.1), and later changes do not bind them (SF §7.2). |
| 11 | Reassignment | The Course Staff must move the student to an Open Science Project (CR §4.3). The two weeks of work stay under the first Project Agreement as if the student had signed it, and the first partner's information stays confidential (CR §4.3). The first partner may enforce this (CR §1.3). The student should not have done material work before signing (CR §4.2). |
| 12 | Change of mind | See "Moving from the Short Form to the addendum mid-course" above (SF §7.2, RA §1.2, RA §1.3, CR §4.3). With Partner owning and information Course Private, review then applies automatically (RA §3.1). |
| 13 | New Partner Contact; partner acquired | Partner changes a Partner Contact by email notice; no amendment is needed (SF §7.1). On an acquisition of the business, Partner may assign the SF to the successor on notice, and its license goes with it (SF §7.3, §3.3). On a share purchase or merger, Partner stays the party. |
| 14 | Demonstrations after the Course | The sample is usable only if a Partner Contact identified it under the Enabling License. Use must be noncommercial and masked, either live or by a privately shared video that Partner consents to, with no copies given, within five years of the End Date (SF §4.4, §4.5; CR §7.1). Restricted data stays restricted (SF §4.5, RA §2.4) but need not be deleted (RA §2.6). |
| 15 | Generative AI | Not allowed unless Partner has approved that tool in writing or by email; the approval requirement covers Harvard's tools too (CR §2.4, RA §2.4). |
| 16 | Individual project, keep all rights | TPF: Individual, A None, B None, with the instructor's approval certified in box D (TPF §2, §5). The CR still apply; Harvard's rights still come first (TPF §2, CR §6.2). |
| 17 | Team project with FSL | TPF A FSL-1.1-ALv2. The students jointly own and license the software, and a majority names the FSL Representative (TPF §3(a), (f)). Approval is certified in box D (TPF §5). No buyout applies (CR §5.3). |
| 18 | Team project, Course Private | TPF C Course Private, with approval (TPF §4, §5). Everyone in the Course must keep it within the Course Community and away from partners (CR §2.2). |
| 19 | Inadvertent disclosure | Shared folder: tell the team, don't use it, and delete it. There is no liability for receipt, and prompt action is reasonable care (CR §2.1). Poster: showing Course Private Information at a Private Course Event is allowed (RA §2.1). The Course Staff must tell attendees not to record it (CR §2.2). A visitor who is in the Course is bound by CR §2.2; an outside guest is bound by nothing, so the team asks them to delete the photo (R-8 is open). |
| 20 | Employer's information | Neither student may share or use the code unless the employer (current or former) authorizes it (CR §2.3). Authorized open-source code stays third-party material under its own license (CR §1.2). The Student Guide warns that an employer may own what the student writes. |
| 21 | Capstone student | May do a Project without a partner (TPF) or, where the program allows, a thesis. The Course Staff must honor the move, approving an individual project if no team is available (CR §4.3). |
| 22 | Harvard has rights | The first box in CR §6.2 is checked, so the informal exception does not apply, and every student's rights are subject to Harvard's (CR §6.2, SF §3.2, TPF §2). The SF does not change Harvard's agreements with Partner (SF §1.1). |
| 23 | Two-term course | The CR header names 101a and 101b as one Course, and its Duration includes fall, J-Term, and spring. One acknowledgment covers all three. The SF cover lists the sequence. End Dates run to the end of spring unless a person leaves earlier (CR §7.1). HA lists each course. |
| 24 | Course Staff | The TA may advise but contributes no code or other IP (CR §3.1). The instructor must refuse to share grades (CR §3.2), and Partner must not ask and must delete any it receives (SF §2.2). |

## Where each brief decision lives

| Brief decision | Location |
| --- | --- |
| 1. Students are parties to each other | SF §1.1, TPF (opening), CR §1.1 |
| 2. Three information choices | Open: SF §2.1. Course Private and its mistake rule: RA §2.1, §2.2. Confidential: RA §2.3. Definitions: CR §2.2. |
| 3. Ownership and license dials, defaults, and Partner's license | SF §3.2, §3.3; RA boxes B and C, §1.1, §4.1 to §4.3; TPF boxes A and B, §1 |
| 4. Open Science and instructor approval | CR §4.1 (definition and rule); RA §1.2 (Partner certifies); TPF §5 (students certify) |
| 5. Publication review and patent hold | RA §3, §4.3(c) |
| 6. Teammates' rights and buyout | CR §5.1 to §5.3 |
| 7. Course-wide rules | CR §2.1 to §2.5, §3, §4.3; partner enforcement in CR §1.3 |
| 8. Confidentiality Period and End Date | CR §7.1; Enabling License term in SF §4.5 |
| 9. Student Guide | CR §4.2 and the acknowledgment |
| 10. Harvard's approval | HA; CR §6.1, §6.2 |
| 11. Kept from v0.5 | Masking SF §4.1; poster and video SF §4.2, RA §2.5; credit CR §5.4, SF §4.3; demos and Enabling License SF §4.4, §4.5; Partner Contacts SF §7.1; end of project SF §5, RA §2.6, CR §5.4; export control and Protected Data SF §2.1, §2.2, RA §2.4; as-is and release SF §6.1, §6.2; law and Acrobat Sign SF §7.4, CR §7.2; joining SF §1.3 |
| 12. Placeholders for counsel | Liability limit SF §6.3; Harvard and Course Staff carve-out CR §6.3; SEAS community CR §2.2 |

## Strengths

- **The common case is short.** An Open Science partner signs about 2,100 words with two license choices, and never sees terms it does not use.
- **Complexity is opt-in and gated.** Every RA section starts with the box that switches it on, and names the SF section it replaces.
- **Course-wide rules are signed once.** Students and Course Staff are parties to the CR with each other. Teammates and other projects' students enforce them directly, and the third-party beneficiary rights shrink to partners and Harvard (CR §1.3).
- **Reassignment is stronger than in v0.5.** A student's work on a first Project is covered by the CR, which they signed before any project work, rather than by an agreement they declined (CR §4.3).
- **Mid-course changes are mechanical.** A partner signs an RA; nothing is re-signed.
- **One model for every project.** The TPF uses the same license dials as the partner forms, so students learn one system.

## Weaknesses

- **Three documents cross-reference each other.** A partner with an RA reads the SF, the RA, and parts of the CR. Renumbering any of them breaks citations, so the templates must be versioned together (HA §1).
- **The Course Rules are over target.** At about 1,820 words of rules text, they exceed the 1,000 to 1,500 aim. The buyout (about 190 words), the exclusions, and Harvard's position account for most of it; none could move without splitting a decision.
- **The name "Open Science Project Agreement" misleads once an RA is attached.** The SF says the RA governs, but a reader skimming titles may not notice.
- **Partner is not a party to the CR.** It is bound to CR §2.1, §2.5, and §6.3 by incorporation (SF §1.4), and enforces the rest as a third-party beneficiary (CR §1.3).
- **Confidentiality is in two places:** other projects' information in the CR, and a partner's own information in the RA.
- **Electronic assent to IP transfers.** The CR's conditional assignments rest on an electronic acknowledgment, which counsel must confirm.
- **The poster session gives a patent-minded partner little notice.** Partner gets its copy only when the poster is presented (SF §4.1, carried from v0.5 §5.3). In scenario 7, that may be too late.

## Open questions

- Which buyout price alternative to use, whether the sale ends the seller's license, and the [60]-day period (CR §5.3).
- Counsel placeholders: the liability limit and its confidentiality exception (SF §6.3), the gross negligence carve-out (CR §6.3), and the SEAS community (CR §2.2, R-8).
- Whether partners on Partner-owned Projects should get advance copies, for example 10 business days, before Private Course Events.
- Whether checking both Course Private boxes should fall back to Open, as the brief's default rule requires, or to the more protective choice.

## Decisions made by the drafter

1. **Shared definitions live in the CR** (Course, Duration, Project, Project Agreement, Project Work Product, Project Software, Course Community, Course Private Information, Confidential Information, Open Science, End Date, and Confidentiality Period). The SF, RA, and TPF adopt them. *Reason:* the CR is the only document everyone signs, so each term is defined once.
2. **Partner is bound to three CR sections by incorporation** (SF §1.4) rather than by restating them. *Reason:* no duplicated terms.
3. **The RA always has an information box with Open as the default,** not just the two restricted choices. *Reason:* a partner may leave Open Science only on IP, as in the second half of scenario 7.
4. **RA box C defaults to "As checked in the Short Form"** instead of repeating the MIT, Apache, and CC choices. *Reason:* each choice appears once, and the brief's defaults flow through.
5. **Joint ownership covers only the software;** everything else stays with the students, licensed under RA box C and subject to Partner's license (RA §4.2). *Reason:* this keeps v0.5 §8.1.1 (register E2) unchanged, and FSL is a software license. The box label says so.
6. **Joint ownership with no FSL variant checked defaults to FSL-1.1-MIT.** *Reason:* it is closest to the overall MIT default.
7. **The buyout never applies to FSL software,** including on no-partner teams (CR §5.3). *Reason:* FSL is a public license, and the brief excludes FSL.
8. **Buyout mechanics:** eligibility is tested on the notice date, the assignment takes effect on payment (or a written promise under Alternative 2) without the holdout's signature, and Alternative 1(i) uses the average if founders received different amounts. *Reason:* the holdout in scenario 8 will not sign, and the brief's "what each founding student received" is ambiguous when amounts differ.
9. **A Student Company may give its customers the rights they need to use its products** (CR §5.2). *Reason:* without this, a non-sublicensable license cannot support selling software.
10. **Changes need the Students "then taking part",** and a change never binds a Student who has left (SF §7.2, TPF §6). *Reason:* a withdrawn student should not block a change, and their own contributions stay protected.
11. **Mid-course RA rules** (RA §1.3). *Reason:* scenario 12. Open licenses already granted cannot be withdrawn, and information given as open should not become secret unless listed and still private.
12. **The Course Staff must warn attendees at Private Course Events** not to record Course Private Information (CR §2.2). *Reason:* scenario 19, and R-8 asks whether attendees must be told.
13. **If no other Project is available on reassignment, the instructor approves an individual Project** (CR §4.3). *Reason:* the brief requires the Course Staff to honor reassignment, and requires approval for individual projects. This reconciles the two for scenario 21.
14. **Harvard's and the Course Staff's protection covers Projects, Project Agreements, Project information, and the CR,** not "the Course" generally (CR §6.3). *Reason:* the CR bind every student, and a waiver of all Course-related claims reaches far beyond projects. Register F2 says "for the Project". Flagged for counsel.
15. **Course Staff who sign the RA agree only to its confidentiality sections,** plus injunctions and general terms (RA §5). *Reason:* register E7 and F4.
16. **Electronic acknowledgment of the CR is enough,** with the conditions above.
17. **The Student Guide confirmation is in the CR acknowledgment.** *Reason:* it is signed at enrollment, before a student chooses a Project.
18. **The TPF uses the same dials as the partner forms.** v0.5's "keep all rights" and "licenses among teammates" options become "None" plus the CR teammates' licenses. *Reason:* one model, and the brief makes teammates' rights automatic.
19. **Publication review covers any public disclosure "about the Project"** (RA §3.2), not only disclosures relating to information Partner provided (v0.5 §5.2). *Reason:* review is automatic when Partner owns, and it should then cover the work itself.
20. **Information given before the Effective Date is covered** only when the RA takes effect on the Effective Date (RA §1.3). *Reason:* this keeps v0.5 §10.1 for an RA signed at the start, without reaching back into an open period.
21. **On the TPF, if the project-type box does not match the number of signers, the number of signers governs.** *Reason:* the generator needs a tie-breaker.
22. **The CR change only by a new version for a later offering** (CR §7.2). *Reason:* every student and staff member is a party, so a mid-course amendment is impractical.
23. **Copyright notice fill-ins are described in words, not brackets.** *Reason:* the brief reserves brackets for drafting choices and counsel placeholders.
