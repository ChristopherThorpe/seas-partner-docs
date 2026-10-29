import { describe, expect, it } from 'vitest';
import { evaluate, exprLabels, parseExpr, type Expr, type ExprEnv } from '../../src/core/expr';

function parse(source: string): Expr {
  const result = parseExpr(source);
  if ('error' in result) throw new Error(result.error);
  return result.expr;
}

describe('parseExpr', () => {
  it('binds NOT tighter than AND, and AND tighter than OR', () => {
    expect(parse('A OR NOT B AND C')).toEqual({
      kind: 'or',
      left: { kind: 'label', label: 'A' },
      right: {
        kind: 'and',
        left: { kind: 'not', operand: { kind: 'label', label: 'B' } },
        right: { kind: 'label', label: 'C' },
      },
    });
  });

  it('respects parentheses', () => {
    expect(parse('(A OR B) AND C')).toMatchObject({ kind: 'and', left: { kind: 'or' } });
  });

  it('reads option comparisons and currency amounts', () => {
    expect(parse('TYPE = SPONSORED')).toEqual({
      kind: 'compare',
      op: '=',
      label: 'TYPE',
      operand: { kind: 'label', label: 'SPONSORED' },
    });
    expect(parse('AMOUNT > USD 50,000')).toMatchObject({
      operand: { kind: 'number', value: 50000, currency: 'USD' },
    });
    expect(parse('AMOUNT >= $1,250.50')).toMatchObject({
      op: '>=',
      operand: { value: 1250.5, currency: 'USD' },
    });
    expect(parse('AMOUNT < 10')).toMatchObject({ operand: { kind: 'number', value: 10 } });
  });

  it.each([
    ['', 'empty'],
    ['A AND', 'expected a label'],
    ['(A OR B', 'expected ")"'],
    ['A and B', 'AND, OR, NOT in capitals'],
    ['sponsored', 'must be in capitals'],
    ['A B', 'unexpected "B"'],
    ['A % B', 'unexpected "%"'],
    ['A > $', 'expected an amount'],
  ])('rejects %j', (source, message) => {
    const result = parseExpr(source);
    expect('error' in result && result.error).toContain(message);
  });

  it('lists every label it mentions', () => {
    expect(exprLabels(parse('A AND (TYPE = SPONSORED OR NOT B) AND AMOUNT > 5'))).toEqual([
      'A',
      'TYPE',
      'SPONSORED',
      'B',
      'AMOUNT',
    ]);
  });
});

describe('evaluate', () => {
  const env: ExprEnv = {
    truthy: (label) => ['NDA', 'TYPE', 'SPONSORED', 'AMOUNT'].includes(label),
    choice: (label) => (label === 'TYPE' ? 'SPONSORED' : undefined),
    amount: (label) => (label === 'AMOUNT' ? { value: 60000, currency: 'USD' } : undefined),
  };

  it.each([
    ['NDA', true],
    ['IP_STUDENT', false],
    ['NOT IP_STUDENT AND NDA', true],
    ['IP_STUDENT OR NDA', true],
    ['TYPE = SPONSORED', true],
    ['TYPE != SPONSORED', false],
    ['TYPE = COLLABORATION', false],
    ['AMOUNT > USD 50000', true],
    ['AMOUNT > 50000', true],
    ['AMOUNT <= 60000', true],
    ['AMOUNT < 60000', false],
    ['AMOUNT = 60000', true],
    ['MISSING > 1', false],
  ])('%s is %s', (source, expected) => {
    expect(evaluate(parse(source), env)).toBe(expected);
  });

  it('is false, with a warning, when currencies differ', () => {
    const warnings: string[] = [];
    expect(evaluate(parse('AMOUNT > EUR 50000'), env, (w) => warnings.push(w))).toBe(false);
    expect(warnings).toEqual(['AMOUNT is in USD, not EUR, so "AMOUNT > EUR 50000" is false']);
  });
});
