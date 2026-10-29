/**
 * Questionnaire format (#10): Markdown with YAML front matter, `#` sections, `##` questions,
 * `- ( )` / `- [ ]` options, and `{#LABEL key=value}` attribute blocks. The normative description
 * is docs/questionnaire-format.md.
 *
 * Parsing is line-based so every diagnostic carries the line number an admin sees in the editor.
 */
import { isMap, isScalar, LineCounter, parseDocument } from 'yaml';
import { splitAttributes, type Attributes } from './attributes';
import { dateRuleProblems, parseIsoDate, parseMonthDay, type DateRuleRow } from './dates';
import { parseExpr, type Expr } from './expr';
import { labelProblem } from './labels';

export const QUESTION_TYPES = [
  'text',
  'line',
  'email',
  'phone',
  'currency',
  'date',
  'radio',
  'checkbox',
] as const;
export type QuestionType = (typeof QUESTION_TYPES)[number];

export interface Diagnostic {
  severity: 'error' | 'warning';
  /** 1-based line in the source file. */
  line: number;
  message: string;
}

export interface ChoiceOption {
  label: string;
  /** Option text as written (Markdown). */
  text: string;
  /** Selected by default: `- (x)` or `- [x]`. */
  selected: boolean;
  line: number;
}

export interface Question {
  label: string;
  title: string;
  type: QuestionType;
  /** Help text under the heading (Markdown). */
  help: string;
  required: boolean;
  placeholder?: string;
  /** `default=` as written: TODAY, a date rule name or ISO date, checked/unchecked, or text. */
  defaultValue?: string;
  min?: string;
  max?: string;
  maxLength?: number;
  showIf?: Expr;
  showIfSource?: string;
  /** Empty for non-choice questions, and for a checkbox that is a single yes/no box. */
  options: ChoiceOption[];
  line: number;
}

export interface Section {
  /** Empty for questions that come before the first `#` heading. */
  title: string;
  description: string;
  showIf?: Expr;
  showIfSource?: string;
  questions: Question[];
  line: number;
}

export interface Questionnaire {
  id: string;
  title: string;
  /** Text between the front matter and the first heading (Markdown). */
  intro: string;
  dateDefaults: Map<string, DateRuleRow[]>;
  sections: Section[];
  /** All front matter, including keys this module doesn't interpret. */
  frontMatter: Record<string, unknown>;
}

export interface ParseResult {
  questionnaire: Questionnaire;
  diagnostics: Diagnostic[];
  /** True when there are no errors (warnings are allowed). */
  ok: boolean;
}

const COMMON_ATTRIBUTES = ['type', 'required', 'show-if', 'default'];
const ALLOWED_ATTRIBUTES: Record<QuestionType, readonly string[]> = {
  text: [...COMMON_ATTRIBUTES, 'placeholder', 'maxlength'],
  line: [...COMMON_ATTRIBUTES, 'placeholder', 'maxlength'],
  email: [...COMMON_ATTRIBUTES, 'placeholder'],
  phone: [...COMMON_ATTRIBUTES, 'placeholder'],
  currency: [...COMMON_ATTRIBUTES, 'placeholder'],
  date: [...COMMON_ATTRIBUTES, 'min', 'max'],
  radio: COMMON_ATTRIBUTES,
  checkbox: COMMON_ATTRIBUTES,
};

/** Which marker each option was written with, checked against its question's type. */
const markerOf = new WeakMap<ChoiceOption, 'radio' | 'checkbox'>();

const HEADING = /^(#{1,6})[ \t]+(.*)$/;
const OPTION = /^\s*[-*+][ \t]+(?:\[([ xX])\]|\(([ xX]?)\))[ \t]+(.*)$/;
const QUESTIONNAIRE_ID = /^[a-z0-9][a-z0-9-]*$/;

export function parseQuestionnaire(source: string): ParseResult {
  const lines = source.replace(/\r\n?/g, '\n').split('\n');
  const diagnostics: Diagnostic[] = [];
  const error = (line: number, message: string) =>
    diagnostics.push({ severity: 'error', line, message });
  const warning = (line: number, message: string) =>
    diagnostics.push({ severity: 'warning', line, message });

  const questionnaire: Questionnaire = {
    id: '',
    title: '',
    intro: '',
    dateDefaults: new Map(),
    sections: [],
    frontMatter: {},
  };
  const bodyStart = readFrontMatter(lines, questionnaire, error);

  // Structure: sections, questions, options and the text between them.
  const attributesOf = new Map<Question, Attributes>();
  const introLines: string[] = [];
  const textOf = new Map<Section | Question, string[]>();
  let textTarget = introLines;
  let section: Section | undefined;
  let question: Question | undefined;

  const startSection = (title: string, line: number): Section => {
    const s: Section = { title, description: '', questions: [], line };
    questionnaire.sections.push(s);
    textOf.set(s, []);
    return s;
  };

  for (let i = bodyStart; i < lines.length; i++) {
    const raw = lines[i] ?? '';
    const n = i + 1;
    const heading = HEADING.exec(raw);
    const option = heading ? null : OPTION.exec(raw);

    if (heading) {
      const level = heading[1]?.length ?? 0;
      const split = splitAttributes(heading[2] ?? '');
      if (split.error) error(n, `attributes: ${split.error}`);
      if (level === 1) {
        section = startSection(split.text, n);
        question = undefined;
        textTarget = textOf.get(section) ?? [];
        if (!split.text) error(n, 'section heading has no title');
        if (split.attributes?.id)
          warning(n, `sections don't take labels; #${split.attributes.id} is ignored`);
        for (const [key, value] of split.attributes?.values ?? []) {
          if (key !== 'show-if') warning(n, `"${key}" doesn't apply to sections and is ignored`);
          else if (value === true) error(n, 'show-if needs a condition, e.g. show-if="SPONSORED"');
          else section.showIfSource = value;
        }
      } else if (level === 2) {
        section ??= startSection('', n);
        question = {
          label: split.attributes?.id ?? '',
          title: split.text,
          type: 'line',
          help: '',
          required: false,
          options: [],
          line: n,
        };
        section.questions.push(question);
        attributesOf.set(question, split.attributes ?? { values: new Map() });
        textOf.set(question, []);
        textTarget = textOf.get(question) ?? [];
      } else {
        error(
          n,
          `only "#" (section) and "##" (question) headings are allowed, not "${heading[1]}"`,
        );
      }
      continue;
    }

    if (option) {
      const split = splitAttributes(option[3] ?? '');
      if (!question) {
        error(n, 'option is not under a "##" question');
        continue;
      }
      if (split.error) error(n, `attributes: ${split.error}`);
      const checkbox = option[1] !== undefined;
      const mark = (checkbox ? option[1] : option[2]) ?? '';
      const label = split.attributes?.id ?? '';
      if (!label) error(n, `option "${split.text}" needs a label, e.g. {#OPTION_LABEL}`);
      for (const key of split.attributes?.values.keys() ?? []) {
        warning(n, `options only take a label; "${key}" is ignored`);
      }
      const opt: ChoiceOption = {
        label,
        text: split.text,
        selected: mark.toLowerCase() === 'x',
        line: n,
      };
      markerOf.set(opt, checkbox ? 'checkbox' : 'radio');
      question.options.push(opt);
      continue;
    }

    textTarget.push(raw);
  }

  questionnaire.intro = joinText(introLines);
  for (const s of questionnaire.sections) {
    s.description = joinText(textOf.get(s) ?? []);
    for (const q of s.questions) q.help = joinText(textOf.get(q) ?? []);
  }

  validate(questionnaire, attributesOf, bodyStart, error, warning);
  diagnostics.sort((a, b) => a.line - b.line);
  return { questionnaire, diagnostics, ok: !diagnostics.some((d) => d.severity === 'error') };
}

/** Joins text lines, dropping blank lines at the ends and runs of more than one blank line. */
function joinText(lines: readonly string[]): string {
  return lines
    .join('\n')
    .replace(/\n[ \t]*(\n[ \t]*)+\n/g, '\n\n')
    .trim();
}

type Report = (line: number, message: string) => void;

/** Reads front matter into `questionnaire`; returns the index of the first body line. */
function readFrontMatter(lines: string[], questionnaire: Questionnaire, error: Report): number {
  if (lines[0]?.trim() !== '---') {
    error(
      1,
      'the file must start with front matter between "---" lines, giving at least id and title',
    );
    return 0;
  }
  const end = lines.findIndex((l, i) => i > 0 && (l.trim() === '---' || l.trim() === '...'));
  if (end < 0) {
    error(1, 'the front matter that starts on line 1 has no closing "---"');
    return lines.length;
  }

  const counter = new LineCounter();
  const doc = parseDocument(lines.slice(1, end).join('\n'), { lineCounter: counter });
  // +1 because the YAML starts on the line after the opening "---".
  const lineAt = (offset: number) => counter.linePos(offset).line + 1;
  const lineOf = (path: (string | number)[]) => {
    const node = doc.getIn(path, true) as { range?: [number, number, number] } | undefined;
    return node?.range ? lineAt(node.range[0]) : 1;
  };
  /** The line of a key in a map, rather than of its value. */
  const keyLineOf = (mapPath: string[], key: string) => {
    const map = doc.getIn(mapPath, true);
    const pair = isMap(map)
      ? map.items.find((p) => isScalar(p.key) && p.key.value === key)
      : undefined;
    const range = isScalar(pair?.key) ? pair.key.range : undefined;
    return range ? lineAt(range[0]) : lineOf([...mapPath, key]);
  };
  if (doc.errors.length) {
    for (const e of doc.errors) {
      error((e.linePos?.[0].line ?? 0) + 1, `front matter: ${e.message.split('\n')[0]}`);
    }
    return end + 1;
  }
  const data: unknown = doc.toJS();
  if (!isRecord(data)) {
    error(1, 'front matter must be a list of "key: value" lines');
    return end + 1;
  }
  questionnaire.frontMatter = data;

  if (typeof data.id !== 'string' || !QUESTIONNAIRE_ID.test(data.id)) {
    error(
      lineOf(['id']),
      'front matter needs an id of lowercase letters, digits and hyphens, e.g. id: student-research',
    );
  } else {
    questionnaire.id = data.id;
  }
  if (typeof data.title !== 'string' || !data.title.trim()) {
    error(lineOf(['title']), 'front matter needs a title');
  } else {
    questionnaire.title = data.title.trim();
  }

  const rules = data['date-defaults'];
  if (rules === undefined) return end + 1;
  if (!isRecord(rules)) {
    error(lineOf(['date-defaults']), 'date-defaults must map rule names to lists of rows');
    return end + 1;
  }
  for (const [name, rows] of Object.entries(rules)) {
    const ruleLine = keyLineOf(['date-defaults'], name);
    const nameProblem = labelProblem(name);
    if (nameProblem) error(ruleLine, `date rule name: ${nameProblem}`);
    if (!Array.isArray(rows) || rows.length === 0) {
      error(
        ruleLine,
        `date rule ${name} needs a list of rows like { from: 03-01, to: 09-30, date: 09-01 }`,
      );
      continue;
    }
    const parsed: DateRuleRow[] = [];
    rows.forEach((row: unknown, i) => {
      const rowLine = lineOf(['date-defaults', name, i]);
      if (!isRecord(row)) {
        error(
          rowLine,
          `date rule ${name}, row ${i + 1}: expected { from: MM-DD, to: MM-DD, date: MM-DD }`,
        );
        return;
      }
      const monthDay = (field: string) => {
        const value = parseMonthDay(String(row[field] ?? ''));
        if (!value)
          error(
            rowLine,
            `date rule ${name}, row ${i + 1}: ${field} must be a month-day like 09-01`,
          );
        return value;
      };
      const from = monthDay('from');
      const to = monthDay('to');
      const date = monthDay('date');
      const yearOffset = row.year === undefined ? 0 : Number(row.year);
      if (!Number.isInteger(yearOffset)) {
        error(
          rowLine,
          `date rule ${name}, row ${i + 1}: year must be a whole number of years, like +1`,
        );
      }
      for (const field of Object.keys(row)) {
        if (!['from', 'to', 'date', 'year'].includes(field)) {
          error(rowLine, `date rule ${name}, row ${i + 1}: unknown field "${field}"`);
        }
      }
      if (from && to && date && Number.isInteger(yearOffset))
        parsed.push({ from, to, date, yearOffset });
    });
    if (parsed.length !== rows.length) continue;
    const problems = dateRuleProblems(parsed);
    for (const p of problems) error(ruleLine, `date rule ${name}: ${p}`);
    if (problems.length === 0) questionnaire.dateDefaults.set(name, parsed);
  }
  return end + 1;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

interface LabelInfo {
  line: number;
  question: Question;
  option?: ChoiceOption;
}

function validate(
  questionnaire: Questionnaire,
  attributesOf: Map<Question, Attributes>,
  bodyStart: number,
  error: Report,
  warning: Report,
): void {
  const labels = new Map<string, LabelInfo>();
  const define = (label: string, info: LabelInfo) => {
    if (!label) return;
    const problem = labelProblem(label);
    if (problem) return error(info.line, problem);
    const earlier = labels.get(label);
    if (earlier) return error(info.line, `label ${label} is already used on line ${earlier.line}`);
    labels.set(label, info);
  };

  // Labels first, so show-if can say whether an unknown label is missing or merely later.
  for (const section of questionnaire.sections) {
    for (const question of section.questions) {
      if (!question.label)
        error(
          question.line,
          `question "${question.title}" needs a label, e.g. {#ENTITY_PARTNER type=line}`,
        );
      define(question.label, { line: question.line, question });
      for (const option of question.options)
        define(option.label, { line: option.line, question, option });
    }
  }

  const condition = (source: string, line: number, owner?: Question): Expr | undefined => {
    const parsed = parseExpr(source);
    if ('error' in parsed) {
      error(line, `show-if: ${parsed.error}`);
      return undefined;
    }
    const ok = checkCondition(parsed.expr, line, owner, labels, error);
    return ok ? parsed.expr : undefined;
  };

  let questionCount = 0;
  for (const section of questionnaire.sections) {
    if (section.showIfSource !== undefined)
      section.showIf = condition(section.showIfSource, section.line);
    if (section.questions.length === 0)
      warning(section.line, `section "${section.title}" has no questions`);
    for (const question of section.questions) {
      questionCount++;
      validateQuestion(
        question,
        attributesOf.get(question) ?? { values: new Map() },
        questionnaire,
        error,
        warning,
      );
      if (question.showIfSource !== undefined) {
        question.showIf = condition(question.showIfSource, question.line, question);
      }
    }
  }
  if (questionCount === 0) error(bodyStart + 1, 'the questionnaire has no "##" questions');
}

function validateQuestion(
  question: Question,
  attributes: Attributes,
  questionnaire: Questionnaire,
  error: Report,
  warning: Report,
): void {
  const n = question.line;
  if (!question.title) error(n, 'question heading has no title');

  const typeValue = attributes.values.get('type');
  if (typeValue === undefined || typeValue === true) {
    error(
      n,
      `question ${question.label || question.title} needs a type, e.g. type=line (one of ${QUESTION_TYPES.join(', ')})`,
    );
    return;
  }
  if (!(QUESTION_TYPES as readonly string[]).includes(typeValue)) {
    error(n, `unknown type "${typeValue}"; use one of ${QUESTION_TYPES.join(', ')}`);
    return;
  }
  const type = typeValue as QuestionType;
  question.type = type;

  for (const [key, value] of attributes.values) {
    if (!ALLOWED_ATTRIBUTES[type].includes(key)) {
      warning(n, `"${key}" doesn't apply to ${type} questions and is ignored`);
      continue;
    }
    const text = value === true ? undefined : value;
    switch (key) {
      case 'required':
        if (text !== undefined && text !== 'true' && text !== 'false')
          error(n, 'required takes no value');
        question.required = text !== 'false';
        break;
      case 'show-if':
        if (text === undefined) error(n, 'show-if needs a condition, e.g. show-if="SPONSORED"');
        else question.showIfSource = text;
        break;
      case 'placeholder':
        question.placeholder = text ?? '';
        break;
      case 'default':
        if (text === undefined) error(n, 'default needs a value');
        else question.defaultValue = text;
        break;
      case 'maxlength': {
        const max = Number(text);
        if (!Number.isInteger(max) || max < 1)
          error(n, 'maxlength must be a positive whole number');
        else question.maxLength = max;
        break;
      }
      case 'min':
      case 'max':
        if (!text || !parseIsoDate(text)) error(n, `${key} must be a date like 2026-09-01`);
        else question[key] = text;
        break;
    }
  }

  const choice = type === 'radio' || type === 'checkbox';
  if (!choice && question.options.length > 0) {
    error(
      question.options[0]?.line ?? n,
      `${type} questions don't have options; use type=radio or type=checkbox`,
    );
  }
  for (const option of question.options) {
    const marker = markerOf.get(option);
    if (choice && marker !== type) {
      error(
        option.line,
        type === 'radio'
          ? 'radio options are written "- ( )"'
          : 'checkbox options are written "- [ ]"',
      );
    }
  }

  if (type === 'radio') {
    if (question.options.length === 0)
      error(n, 'radio question has no options; add lines like "- ( ) Option {#LABEL}"');
    else if (question.options.length === 1) warning(n, 'radio question has only one option');
    const selected = question.options.filter((o) => o.selected);
    if (selected.length > 1)
      error(selected[1]?.line ?? n, 'a radio question can have only one default "(x)"');
  }

  if (question.defaultValue !== undefined) {
    const value = question.defaultValue;
    if (choice && question.options.length > 0) {
      error(
        n,
        `mark default options with ${type === 'radio' ? '"(x)"' : '"[x]"'} instead of default=`,
      );
    } else if (type === 'checkbox' && value !== 'checked' && value !== 'unchecked') {
      error(n, 'a single checkbox takes default=checked or default=unchecked');
    } else if (
      type === 'date' &&
      value !== 'TODAY' &&
      !parseIsoDate(value) &&
      !questionnaire.dateDefaults.has(value)
    ) {
      error(
        n,
        `default=${value} isn't TODAY, a date like 2026-09-01, or a rule under date-defaults`,
      );
    }
  }
}

/** Checks references in a show-if condition. Returns false if it reported an error. */
function checkCondition(
  expr: Expr,
  line: number,
  owner: Question | undefined,
  labels: Map<string, LabelInfo>,
  error: Report,
): boolean {
  let ok = true;
  const fail = (message: string) => {
    ok = false;
    error(line, `show-if: ${message}`);
  };
  const lookup = (label: string): LabelInfo | undefined => {
    const info = labels.get(label);
    if (!info) fail(`unknown label ${label}`);
    else if (owner && info.question === owner)
      fail(`${label} belongs to this question; a question can't depend on itself`);
    else if (info.line >= line)
      fail(`${label} is defined later (line ${info.line}); show-if can only use earlier answers`);
    else return info;
    return undefined;
  };

  const walk = (e: Expr): void => {
    switch (e.kind) {
      case 'label':
        lookup(e.label);
        return;
      case 'not':
        return walk(e.operand);
      case 'and':
      case 'or':
        walk(e.left);
        return walk(e.right);
      case 'compare': {
        const info = lookup(e.label);
        if (!info) return;
        if (info.option)
          return fail(
            `${e.label} is an option; compare its question instead, e.g. ${info.question.label} = ${e.label}`,
          );
        const { question } = info;
        if (e.operand.kind === 'label') {
          if (e.op !== '=' && e.op !== '!=')
            return fail(`options can only be compared with = or !=`);
          if (question.type !== 'radio')
            return fail(`${e.label} isn't a radio question, so it can't equal an option`);
          const target = e.operand.label;
          if (!question.options.some((o) => o.label === target))
            fail(`${target} isn't an option of ${e.label}`);
          return;
        }
        if (question.type !== 'currency')
          fail(`${e.label} isn't a currency question, so it can't be compared with a number`);
        return;
      }
    }
  };
  walk(expr);
  return ok;
}
