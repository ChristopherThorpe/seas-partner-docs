/**
 * Conditions used by questionnaire `show-if` (#10) and template `{{IF …}}` (#14).
 *
 *   expr    := or
 *   or      := and ("OR" and)*
 *   and     := not ("AND" not)*
 *   not     := "NOT" not | compare
 *   compare := LABEL [op operand] | "(" expr ")"
 *   op      := "=" | "!=" | "<" | "<=" | ">" | ">="
 *   operand := LABEL | NUMBER | CODE NUMBER | "$" NUMBER
 *
 * A bare LABEL is true when that answer is given (an option label is true when that option is
 * selected). `QUESTION = OPTION` tests a radio answer; numeric comparisons test currency amounts,
 * optionally in a specific currency (`AMOUNT > USD 50,000`).
 */

export type CompareOp = '=' | '!=' | '<' | '<=' | '>' | '>=';

export type Operand =
  { kind: 'label'; label: string } | { kind: 'number'; value: number; currency?: string };

export type Expr =
  | { kind: 'label'; label: string }
  | { kind: 'not'; operand: Expr }
  | { kind: 'and' | 'or'; left: Expr; right: Expr }
  | { kind: 'compare'; op: CompareOp; label: string; operand: Operand };

export type ParseExprResult = { expr: Expr } | { error: string };

type Token =
  | { kind: 'word'; text: string; pos: number }
  | { kind: 'number'; value: number; pos: number }
  | { kind: 'op'; text: string; pos: number };

const OPS = ['<=', '>=', '!=', '=', '<', '>', '(', ')', '$'];
const CURRENCY_CODE = /^[A-Z]{3}$/;

function tokenize(source: string): Token[] | string {
  const tokens: Token[] = [];
  let i = 0;
  while (i < source.length) {
    const rest = source.slice(i);
    const space = /^\s+/.exec(rest);
    if (space) {
      i += space[0].length;
      continue;
    }
    const word = /^[A-Za-z_][A-Za-z0-9_]*/.exec(rest);
    if (word) {
      tokens.push({ kind: 'word', text: word[0], pos: i });
      i += word[0].length;
      continue;
    }
    const num = /^\d[\d,]*(\.\d+)?/.exec(rest);
    if (num) {
      tokens.push({ kind: 'number', value: Number(num[0].replace(/,/g, '')), pos: i });
      i += num[0].length;
      continue;
    }
    const op = OPS.find((o) => rest.startsWith(o));
    if (!op) return `unexpected "${rest[0]}" at position ${i + 1}`;
    tokens.push({ kind: 'op', text: op, pos: i });
    i += op.length;
  }
  return tokens;
}

/** Parses a condition such as `SPONSORED AND NOT NDA` or `AMOUNT_SPONSORED > USD 50000`. */
export function parseExpr(source: string): ParseExprResult {
  const tokens = tokenize(source);
  if (typeof tokens === 'string') return { error: tokens };
  let at = 0;

  const peek = () => tokens[at];
  const describe = (t: Token | undefined) =>
    t === undefined ? 'the end' : t.kind === 'number' ? String(t.value) : `"${t.text}"`;
  const isWord = (t: Token | undefined, text: string) => t?.kind === 'word' && t.text === text;
  const isOp = (t: Token | undefined, text: string) => t?.kind === 'op' && t.text === text;

  class ParseError extends Error {}
  const fail = (msg: string): never => {
    throw new ParseError(msg);
  };

  const label = (): string => {
    const t = peek();
    if (t?.kind !== 'word') return fail(`expected a label but found ${describe(t)}`);
    if (t.text !== t.text.toUpperCase()) {
      return fail(`"${t.text}" must be in capitals (labels and AND, OR, NOT are uppercase)`);
    }
    if (['AND', 'OR', 'NOT'].includes(t.text))
      return fail(`expected a label but found "${t.text}"`);
    at++;
    return t.text;
  };

  const operand = (): Operand => {
    const t = peek();
    if (isOp(t, '$')) {
      at++;
      const n = peek();
      if (n?.kind !== 'number')
        return fail(`expected an amount after "$" but found ${describe(n)}`);
      at++;
      return { kind: 'number', value: n.value, currency: 'USD' };
    }
    if (t?.kind === 'number') {
      at++;
      return { kind: 'number', value: t.value };
    }
    if (t?.kind === 'word' && CURRENCY_CODE.test(t.text) && tokens[at + 1]?.kind === 'number') {
      const n = tokens[at + 1] as { value: number };
      at += 2;
      return { kind: 'number', value: n.value, currency: t.text };
    }
    return { kind: 'label', label: label() };
  };

  const compare = (): Expr => {
    if (isOp(peek(), '(')) {
      at++;
      const inner = or();
      if (!isOp(peek(), ')')) return fail(`expected ")" but found ${describe(peek())}`);
      at++;
      return inner;
    }
    const name = label();
    const t = peek();
    if (t?.kind === 'op' && ['=', '!=', '<', '<=', '>', '>='].includes(t.text)) {
      at++;
      return { kind: 'compare', op: t.text as CompareOp, label: name, operand: operand() };
    }
    return { kind: 'label', label: name };
  };

  const not = (): Expr => {
    if (isWord(peek(), 'NOT')) {
      at++;
      return { kind: 'not', operand: not() };
    }
    return compare();
  };

  const binary = (kind: 'and' | 'or', keyword: string, next: () => Expr) => (): Expr => {
    let left = next();
    while (isWord(peek(), keyword)) {
      at++;
      left = { kind, left, right: next() };
    }
    return left;
  };
  const and = binary('and', 'AND', not);
  const or = binary('or', 'OR', and);

  try {
    if (tokens.length === 0) return { error: 'the condition is empty' };
    const expr = or();
    if (at < tokens.length) {
      const t = peek();
      const hint =
        t?.kind === 'word' && ['and', 'or', 'not'].includes(t.text)
          ? ' (write AND, OR, NOT in capitals)'
          : '';
      return { error: `unexpected ${describe(t)}${hint}` };
    }
    return { expr };
  } catch (e) {
    if (e instanceof ParseError) return { error: e.message };
    throw e;
  }
}

/** Every label an expression mentions, including option labels on the right of `=`. */
export function exprLabels(expr: Expr): string[] {
  switch (expr.kind) {
    case 'label':
      return [expr.label];
    case 'not':
      return exprLabels(expr.operand);
    case 'and':
    case 'or':
      return [...exprLabels(expr.left), ...exprLabels(expr.right)];
    case 'compare':
      return expr.operand.kind === 'label' ? [expr.label, expr.operand.label] : [expr.label];
  }
}

/** How an expression reads answers; implemented over a submission's answers (#11). */
export interface ExprEnv {
  /** Whether the question is answered, or the option is selected. */
  truthy(label: string): boolean;
  /** The selected option label of a radio question. */
  choice(label: string): string | undefined;
  /** The amount of a currency answer. */
  amount(label: string): { value: number; currency: string } | undefined;
}

/** Evaluates `expr`; `warn` hears about comparisons that are false only because currencies differ. */
export function evaluate(
  expr: Expr,
  env: ExprEnv,
  warn: (message: string) => void = () => {},
): boolean {
  switch (expr.kind) {
    case 'label':
      return env.truthy(expr.label);
    case 'not':
      return !evaluate(expr.operand, env, warn);
    case 'and':
      return evaluate(expr.left, env, warn) && evaluate(expr.right, env, warn);
    case 'or':
      return evaluate(expr.left, env, warn) || evaluate(expr.right, env, warn);
    case 'compare': {
      const { op, label, operand } = expr;
      if (operand.kind === 'label') {
        const equal = env.choice(label) === operand.label;
        return op === '!=' ? !equal : op === '=' && equal;
      }
      const amount = env.amount(label);
      if (!amount) return false;
      if (operand.currency && operand.currency !== amount.currency) {
        warn(
          `${label} is in ${amount.currency}, not ${operand.currency}, so "${label} ${op} ${operand.currency} ${operand.value}" is false`,
        );
        return false;
      }
      const a = amount.value;
      const b = operand.value;
      switch (op) {
        case '=':
          return a === b;
        case '!=':
          return a !== b;
        case '<':
          return a < b;
        case '<=':
          return a <= b;
        case '>':
          return a > b;
        case '>=':
          return a >= b;
      }
    }
  }
}
