/**
 * Answer labels: the names questionnaires give to questions and options, and that templates use
 * to refer to answers (#10, #14).
 */

export const LABEL_RE = /^[A-Z][A-Z0-9_]*$/;

/** Words the template language and expressions use, so they can't be labels. */
export const RESERVED_WORDS: ReadonlySet<string> = new Set([
  'IF',
  'ELSE',
  'ENDIF',
  'CASE',
  'WHEN',
  'ENDCASE',
  'NEW_DOCUMENT',
  'EXPECT',
  'TODAY',
  'PAGE_BREAK',
  'ATTACH',
  'ENDATTACH',
  'NOT',
  'AND',
  'OR',
]);

/** Why `label` can't be used as a label, or undefined if it can. */
export function labelProblem(label: string): string | undefined {
  if (!LABEL_RE.test(label)) {
    return `"${label}" isn't a valid label: use capital letters, digits and underscores, starting with a letter (e.g. ENTITY_PARTNER)`;
  }
  if (RESERVED_WORDS.has(label)) return `"${label}" is a reserved word and can't be a label`;
  return undefined;
}
