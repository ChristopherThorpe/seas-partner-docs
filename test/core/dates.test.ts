import { describe, expect, it } from 'vitest';
import {
  applyDateRule,
  dateRuleProblems,
  formatIsoDate,
  parseIsoDate,
  parseMonthDay,
  type DateRuleRow,
} from '../../src/core/dates';

const md = (s: string) => {
  const value = parseMonthDay(s);
  if (!value) throw new Error(`bad month-day ${s}`);
  return value;
};
const row = (from: string, to: string, date: string, yearOffset = 0): DateRuleRow => ({
  from: md(from),
  to: md(to),
  date: md(date),
  yearOffset,
});

// The letter agreement's effective-date default (#25).
const TERM_START = [
  row('03-01', '09-30', '09-01'),
  row('10-01', '12-31', '01-01', 1),
  row('01-01', '02-29', '01-01'),
];

describe('TERM_START', () => {
  it('covers every day exactly once', () => {
    expect(dateRuleProblems(TERM_START)).toEqual([]);
  });

  it.each([
    ['2026-01-01', '2026-01-01'],
    ['2026-02-28', '2026-01-01'],
    ['2028-02-29', '2028-01-01'],
    ['2026-03-01', '2026-09-01'],
    ['2026-09-30', '2026-09-01'],
    ['2026-10-01', '2027-01-01'],
    ['2026-10-29', '2027-01-01'],
    ['2026-12-31', '2027-01-01'],
  ])('on %s defaults to %s', (today, expected) => {
    const date = parseIsoDate(today);
    if (!date) throw new Error('bad date');
    expect(formatIsoDate(applyDateRule(TERM_START, date))).toBe(expected);
  });
});

describe('dateRuleProblems', () => {
  it('reports gaps and overlaps as date ranges', () => {
    expect(
      dateRuleProblems([row('01-01', '06-30', '09-01'), row('06-15', '11-30', '01-01')]),
    ).toEqual([
      '06-15 to 06-30 is covered by more than one row (rows 1, 2)',
      'no row covers 12-01 to 12-31',
    ]);
  });

  it('notices a missing February 29', () => {
    expect(
      dateRuleProblems([row('01-01', '02-28', '01-01'), row('03-01', '12-31', '09-01')]),
    ).toEqual(['no row covers 02-29']);
  });

  it('rejects rows that cross the new year and targets of February 29', () => {
    expect(
      dateRuleProblems([row('10-01', '02-29', '02-29'), row('03-01', '09-30', '09-01')]),
    ).toEqual([
      'row 1 runs from 10-01 back to 02-29; split a range that crosses the new year into two rows',
      "row 1 gives 02-29, which doesn't exist in most years",
      'no row covers 01-01 to 02-29',
      'no row covers 10-01 to 12-31',
    ]);
  });
});

describe('date parsing', () => {
  it('accepts real dates only', () => {
    expect(parseMonthDay('02-29')).toEqual({ month: 2, day: 29 });
    expect(parseMonthDay('02-30')).toBeUndefined();
    expect(parseMonthDay('9-1')).toBeUndefined();
    expect(parseIsoDate('2027-02-29')).toBeUndefined();
    expect(parseIsoDate('2028-02-29')).toEqual({ year: 2028, month: 2, day: 29 });
  });
});
