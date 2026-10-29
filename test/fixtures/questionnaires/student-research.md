---
id: student-research-agreement
title: Student Research Agreement
date-defaults:
  TERM_START:
    - { from: 03-01, to: 09-30, date: 09-01 }
    - { from: 10-01, to: 12-31, date: 01-01, year: +1 }
    - { from: 01-01, to: 02-29, date: 01-01 }
---

Answer these questions to generate the agreement and its exhibits.

# Partner

## Effective date {#EFFECTIVE_DATE type=date required default=TERM_START}

## Legal name of the partner organization {#ENTITY_PARTNER type=line required}

## Partner signatory {#SIGNATORY_PARTNER type=line required placeholder="Full name"}

Full name of the person signing on behalf of the partner.

## Partner signatory email {#EMAIL_SIGNATORY_PARTNER type=email required}

## Partner phone {#PHONE_PARTNER type=phone}

## Agreement type {#AGREEMENT_TYPE type=radio required}

- (x) Sponsored research {#SPONSORED}
- ( ) Unfunded collaboration {#COLLABORATION}

# Funding {show-if="SPONSORED"}

## Sponsored amount {#AMOUNT_SPONSORED type=currency required}

Include the currency, e.g. USD 50,000 or $50,000.

## Is there an indirect-cost waiver? {#WAIVER type=radio required show-if="AMOUNT_SPONSORED > USD 50000"}

- ( ) Yes {#WAIVER_YES}
- ( ) No {#WAIVER_NO}

# Terms

## Additional terms {#TERMS type=checkbox}

- [ ] Student retains IP {#IP_STUDENT}
- [x] Confidentiality agreement required {#NDA}

## Student email {#EMAIL_STUDENT type=email required show-if="IP_STUDENT OR NDA"}

## Harvard signs this agreement {#HARVARD_SIGNS type=checkbox}

## Harvard signatory {#SIGNATORY_HARVARD type=line required show-if=HARVARD_SIGNS}

## Notes for the reviewer {#NOTES type=text maxlength=2000}
