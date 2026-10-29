import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyDateRule, formatIsoDate } from '../../src/core/dates';
import { parseQuestionnaire, type Diagnostic } from '../../src/core/questionnaire';

const fixture = readFileSync(
  new URL('../fixtures/questionnaires/student-research.md', import.meta.url),
  'utf8',
);

/** A minimal valid questionnaire around `body`. */
const doc = (body: string, frontMatter = '') =>
  `---\nid: test\ntitle: Test${frontMatter ? `\n${frontMatter}` : ''}\n---\n${body}`;

const messages = (source: string, severity: Diagnostic['severity'] = 'error') =>
  parseQuestionnaire(source)
    .diagnostics.filter((d) => d.severity === severity)
    .map((d) => `${d.line}: ${d.message}`);

describe('the example questionnaire', () => {
  const { questionnaire, diagnostics, ok } = parseQuestionnaire(fixture);

  it('parses without errors or warnings', () => {
    expect(diagnostics).toEqual([]);
    expect(ok).toBe(true);
  });

  it('reads front matter, intro and sections', () => {
    expect(questionnaire.id).toBe('student-research-agreement');
    expect(questionnaire.title).toBe('Student Research Agreement');
    expect(questionnaire.intro).toBe(
      'Answer these questions to generate the agreement and its exhibits.',
    );
    expect(questionnaire.sections.map((s) => [s.title, s.line, s.questions.length])).toEqual([
      ['Partner', 13, 6],
      ['Funding', 32, 2],
      ['Terms', 43, 5],
    ]);
  });

  it('reads questions with their types and attributes', () => {
    const [partner] = questionnaire.sections;
    expect(partner?.questions.map((q) => [q.label, q.type, q.required])).toEqual([
      ['EFFECTIVE_DATE', 'date', true],
      ['ENTITY_PARTNER', 'line', true],
      ['SIGNATORY_PARTNER', 'line', true],
      ['EMAIL_SIGNATORY_PARTNER', 'email', true],
      ['PHONE_PARTNER', 'phone', false],
      ['AGREEMENT_TYPE', 'radio', true],
    ]);
    const signatory = partner?.questions[2];
    expect(signatory?.placeholder).toBe('Full name');
    expect(signatory?.help).toBe('Full name of the person signing on behalf of the partner.');
    expect(partner?.questions[0]?.defaultValue).toBe('TERM_START');
  });

  it('reads options and their default selections', () => {
    const all = questionnaire.sections.flatMap((s) => s.questions);
    const options = (label: string) =>
      all.find((q) => q.label === label)?.options.map((o) => [o.label, o.text, o.selected]);
    expect(options('AGREEMENT_TYPE')).toEqual([
      ['SPONSORED', 'Sponsored research', true],
      ['COLLABORATION', 'Unfunded collaboration', false],
    ]);
    expect(options('TERMS')).toEqual([
      ['IP_STUDENT', 'Student retains IP', false],
      ['NDA', 'Confidentiality agreement required', true],
    ]);
    // A checkbox question without options is a single yes/no box, unchecked unless default=checked.
    expect(options('HARVARD_SIGNS')).toEqual([]);
  });

  it('parses show-if conditions on sections and questions', () => {
    const [, funding, terms] = questionnaire.sections;
    expect(funding?.showIf).toEqual({ kind: 'label', label: 'SPONSORED' });
    expect(funding?.questions[1]?.showIf).toMatchObject({
      kind: 'compare',
      op: '>',
      label: 'AMOUNT_SPONSORED',
    });
    expect(terms?.questions[1]?.showIfSource).toBe('IP_STUDENT OR NDA');
    expect(terms?.questions[3]?.showIf).toEqual({ kind: 'label', label: 'HARVARD_SIGNS' });
  });

  it('reads the TERM_START date rule', () => {
    const rule = questionnaire.dateDefaults.get('TERM_START');
    expect(rule).toHaveLength(3);
    expect(formatIsoDate(applyDateRule(rule ?? [], { year: 2026, month: 10, day: 29 }))).toBe(
      '2027-01-01',
    );
  });
});

describe('front matter', () => {
  it('is required', () => {
    expect(messages('## Q {#Q type=line}')).toEqual([
      '1: the file must start with front matter between "---" lines, giving at least id and title',
    ]);
  });

  it('must be closed', () => {
    expect(messages('---\nid: x\n## Q {#Q type=line}')).toContain(
      '1: the front matter that starts on line 1 has no closing "---"',
    );
  });

  it('needs a valid id and a title', () => {
    expect(messages('---\nid: Not Valid\n---\n## Q {#Q type=line}')).toEqual(
      [
        '2: front matter needs an id of lowercase letters, digits and hyphens, e.g. id: student-research',
        '1: front matter needs a title',
      ].sort(),
    );
  });

  it('reports YAML errors with their line', () => {
    expect(messages('---\nid: x\ntitle: [unclosed\n---\n## Q {#Q type=line}')[0]).toMatch(
      /^\d+: front matter: /,
    );
  });

  it('checks date rules', () => {
    const rule =
      'date-defaults:\n  HALF:\n    - { from: 01-01, to: 06-30, date: 13-01 }\n    - { from: 07-01, to: 11-30, date: 01-01, year: soon }';
    expect(messages(doc('## Q {#Q type=line}', rule))).toEqual([
      '6: date rule HALF, row 1: date must be a month-day like 09-01',
      '7: date rule HALF, row 2: year must be a whole number of years, like +1',
    ]);
    const gap = 'date-defaults:\n  HALF:\n    - { from: 01-01, to: 06-30, date: 09-01 }';
    expect(messages(doc('## Q {#Q type=line}', gap))).toEqual([
      '5: date rule HALF: no row covers 07-01 to 12-31',
    ]);
  });
});

describe('structure', () => {
  it('requires at least one question', () => {
    expect(messages(doc('Just text.'))).toEqual(['5: the questionnaire has no "##" questions']);
  });

  it('allows questions before the first section', () => {
    const { questionnaire, ok } = parseQuestionnaire(doc('## Q {#Q type=line}'));
    expect(ok).toBe(true);
    expect(questionnaire.sections[0]?.title).toBe('');
  });

  it('rejects deeper headings and stray options', () => {
    expect(messages(doc('- ( ) Stray {#S}\n### Too deep\n## Q {#Q type=line}'))).toEqual([
      '5: option is not under a "##" question',
      '6: only "#" (section) and "##" (question) headings are allowed, not "###"',
    ]);
  });

  it('keeps help text as Markdown paragraphs', () => {
    const { questionnaire } = parseQuestionnaire(
      doc('## Q {#Q type=text}\nFirst **line**.\n\n\n\nSecond.\n'),
    );
    expect(questionnaire.sections[0]?.questions[0]?.help).toBe('First **line**.\n\nSecond.');
  });
});

describe('labels', () => {
  it('requires labels on questions and options', () => {
    expect(messages(doc('## Q {type=radio}\n- ( ) A {#A}\n- ( ) B'))).toEqual([
      '5: question "Q" needs a label, e.g. {#ENTITY_PARTNER type=line}',
      '7: option "B" needs a label, e.g. {#OPTION_LABEL}',
    ]);
  });

  it('rejects invalid, reserved and duplicate labels', () => {
    expect(
      messages(
        doc(
          '## A {#lower type=line}\n## B {#TODAY type=line}\n## C {#X type=radio}\n- ( ) One {#X}\n- ( ) Two {#Y}',
        ),
      ),
    ).toEqual([
      '5: "lower" isn\'t a valid label: use capital letters, digits and underscores, starting with a letter (e.g. ENTITY_PARTNER)',
      '6: "TODAY" is a reserved word and can\'t be a label',
      '8: label X is already used on line 7',
    ]);
  });
});

describe('types and attributes', () => {
  it('requires a known type', () => {
    expect(messages(doc('## A {#A}\n## B {#B type=number}'))).toEqual([
      '5: question A needs a type, e.g. type=line (one of text, line, email, phone, currency, date, radio, checkbox)',
      '6: unknown type "number"; use one of text, line, email, phone, currency, date, radio, checkbox',
    ]);
  });

  it("warns about attributes that don't apply", () => {
    expect(
      messages(
        doc('## A {#A type=radio placeholder=x}\n- ( ) One {#ONE}\n- ( ) Two {#TWO}'),
        'warning',
      ),
    ).toEqual(['5: "placeholder" doesn\'t apply to radio questions and is ignored']);
  });

  it('checks option markers and counts', () => {
    expect(
      messages(
        doc(
          '## A {#A type=radio}\n- [ ] One {#ONE}\n- (x) Two {#TWO}\n- (x) Three {#THREE}\n## B {#B type=line}\n- [ ] Nope {#NOPE}\n## C {#C type=radio}',
        ),
      ),
    ).toEqual([
      '6: radio options are written "- ( )"',
      '8: a radio question can have only one default "(x)"',
      "10: line questions don't have options; use type=radio or type=checkbox",
      '11: radio question has no options; add lines like "- ( ) Option {#LABEL}"',
    ]);
  });

  it('checks defaults', () => {
    expect(
      messages(
        doc(
          [
            '## A {#A type=radio default=ONE}',
            '- ( ) One {#ONE}',
            '- ( ) Two {#TWO}',
            '## B {#B type=checkbox default=yes}',
            '## C {#C type=date default=NEXT_TERM}',
            '## D {#D type=date default=2026-02-30 min=2026-13-01}',
            '## E {#E type=date default=TODAY max=2027-06-30}',
            '## F {#F type=text maxlength=0}',
          ].join('\n'),
        ),
      ),
    ).toEqual([
      '5: mark default options with "(x)" instead of default=',
      '8: a single checkbox takes default=checked or default=unchecked',
      "9: default=NEXT_TERM isn't TODAY, a date like 2026-09-01, or a rule under date-defaults",
      '10: min must be a date like 2026-09-01',
      "10: default=2026-02-30 isn't TODAY, a date like 2026-09-01, or a rule under date-defaults",
      '12: maxlength must be a positive whole number',
    ]);
  });
});

describe('show-if', () => {
  const base = [
    '## Type {#TYPE type=radio}',
    '- ( ) Sponsored {#SPONSORED}',
    '- ( ) Other {#OTHER}',
    '## Amount {#AMOUNT type=currency}',
    '## Name {#NAME type=line}',
  ].join('\n');

  it('accepts conditions on earlier answers', () => {
    const ok = `${base}\n## Q {#Q type=line show-if="TYPE = SPONSORED AND AMOUNT > USD 50000 AND NOT NAME"}`;
    expect(messages(doc(ok))).toEqual([]);
  });

  it.each([
    [
      'LATER',
      '10: show-if: LATER is defined later (line 11); show-if can only use earlier answers',
    ],
    ['Q', "10: show-if: Q belongs to this question; a question can't depend on itself"],
    ['MISSING', '10: show-if: unknown label MISSING'],
    [
      'SPONSORED = OTHER',
      '10: show-if: SPONSORED is an option; compare its question instead, e.g. TYPE = SPONSORED',
    ],
    ['TYPE > SPONSORED', '10: show-if: options can only be compared with = or !='],
    ['NAME = SPONSORED', "10: show-if: NAME isn't a radio question, so it can't equal an option"],
    ['TYPE = NAME', "10: show-if: NAME isn't an option of TYPE"],
    [
      'NAME > 5',
      "10: show-if: NAME isn't a currency question, so it can't be compared with a number",
    ],
    ['TYPE and NAME', '10: show-if: unexpected "and" (write AND, OR, NOT in capitals)'],
  ])('reports %s', (condition, message) => {
    expect(
      messages(
        doc(`${base}\n## Q {#Q type=line show-if="${condition}"}\n## Later {#LATER type=line}`),
      ),
    ).toEqual([message]);
  });

  it('checks section conditions against earlier answers', () => {
    expect(messages(doc(`# S {show-if="NAME"}\n## Name {#NAME type=line}`))).toEqual([
      '5: show-if: NAME is defined later (line 6); show-if can only use earlier answers',
    ]);
  });
});
