/**
 * Calendar dates and the named rules questionnaires use for date defaults (#10), e.g. TERM_START:
 * March 1 – September 30 → September 1 this year; October 1 – December 31 → January 1 next year;
 * January 1 – February 29 → January 1 this year.
 *
 * Dates here are plain calendar dates. Callers decide what "today" is in the script's time zone.
 */

export interface MonthDay {
  month: number;
  day: number;
}

export interface CalendarDate extends MonthDay {
  year: number;
}

/** One row of a rule: today's month-day in `from`..`to` (inclusive) gives `date`, `yearOffset` years on. */
export interface DateRuleRow {
  from: MonthDay;
  to: MonthDay;
  date: MonthDay;
  yearOffset: number;
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInMonth(year: number, month: number): number {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1] ?? 0;
}

const pad = (n: number, width = 2) => String(n).padStart(width, '0');

export function formatMonthDay({ month, day }: MonthDay): string {
  return `${pad(month)}-${pad(day)}`;
}

export function formatIsoDate({ year, month, day }: CalendarDate): string {
  return `${pad(year, 4)}-${pad(month)}-${pad(day)}`;
}

/** Parses `MM-DD`. February 29 is accepted, since it exists in leap years. */
export function parseMonthDay(text: string): MonthDay | undefined {
  const m = /^(\d{2})-(\d{2})$/.exec(text.trim());
  if (!m) return undefined;
  const month = Number(m[1]);
  const day = Number(m[2]);
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(2000, month)) return undefined;
  return { month, day };
}

/** Parses `YYYY-MM-DD`, rejecting dates that don't exist. */
export function parseIsoDate(text: string): CalendarDate | undefined {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text.trim());
  if (!m) return undefined;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) return undefined;
  return { year, month, day };
}

const key = ({ month, day }: MonthDay) => month * 100 + day;

/** Every month-day of a leap year, January 1 to December 31. */
function allMonthDays(): MonthDay[] {
  const days: MonthDay[] = [];
  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= daysInMonth(2000, month); day++) days.push({ month, day });
  }
  return days;
}

const contains = (row: DateRuleRow, md: MonthDay) =>
  key(row.from) <= key(md) && key(md) <= key(row.to);

/**
 * Problems with a rule's rows: rows that run backwards, a target of February 29 (which most years
 * lack), and days of the year covered by no row or by more than one.
 */
export function dateRuleProblems(rows: readonly DateRuleRow[]): string[] {
  const problems: string[] = [];
  rows.forEach((row, i) => {
    if (key(row.from) > key(row.to)) {
      problems.push(
        `row ${i + 1} runs from ${formatMonthDay(row.from)} back to ${formatMonthDay(row.to)}; split a range that crosses the new year into two rows`,
      );
    }
    if (row.date.month === 2 && row.date.day === 29) {
      problems.push(`row ${i + 1} gives 02-29, which doesn't exist in most years`);
    }
  });

  // Report runs of consecutive days covered by the same wrong set of rows, so messages stay short.
  let run: { rows: number[]; first: MonthDay; last: MonthDay } | undefined;
  const flush = () => {
    if (!run) return;
    const span =
      key(run.first) === key(run.last)
        ? formatMonthDay(run.first)
        : `${formatMonthDay(run.first)} to ${formatMonthDay(run.last)}`;
    problems.push(
      run.rows.length === 0
        ? `no row covers ${span}`
        : `${span} is covered by more than one row (rows ${run.rows.join(', ')})`,
    );
    run = undefined;
  };
  for (const md of allMonthDays()) {
    const hit = rows.flatMap((row, i) => (contains(row, md) ? [i + 1] : []));
    if (hit.length === 1) {
      flush();
    } else if (run && run.rows.join() === hit.join()) {
      run.last = md;
    } else {
      flush();
      run = { rows: hit, first: md, last: md };
    }
  }
  flush();
  return problems;
}

/** The date a rule gives for `today`. Assumes the rule has no problems. */
export function applyDateRule(rows: readonly DateRuleRow[], today: CalendarDate): CalendarDate {
  const row = rows.find((r) => contains(r, today));
  if (!row) throw new Error(`no date rule row covers ${formatMonthDay(today)}`);
  return { year: today.year + row.yearOffset, month: row.date.month, day: row.date.day };
}
