/**
 * Pandoc-style attribute blocks at the end of a line: `{#LABEL key=value key="quoted value" flag}`.
 * Questionnaires use them on headings and option lines (#10).
 */

export interface Attributes {
  /** The `#ID` part, if any. */
  id?: string;
  /** `key=value` pairs; a bare `flag` has the value `true`. */
  values: Map<string, string | true>;
}

export interface SplitResult {
  /** The line without its attribute block, trimmed. */
  text: string;
  attributes?: Attributes;
  error?: string;
}

const TRAILING_BLOCK = /\s*\{([^{}]*)\}\s*$/;
const OPEN_QUOTES: Record<string, string> = { '"': '"', "'": "'", '“': '”', '‘': '’' };

/** Splits a trailing attribute block off `line`. Lines without one come back unchanged. */
export function splitAttributes(line: string): SplitResult {
  const match = TRAILING_BLOCK.exec(line);
  if (!match) return { text: line.trim() };
  const text = line.slice(0, match.index).trim();
  const parsed = parseBlock(match[1] ?? '');
  return typeof parsed === 'string' ? { text, error: parsed } : { text, attributes: parsed };
}

/** Parses the inside of an attribute block, returning an error message on failure. */
function parseBlock(body: string): Attributes | string {
  const attributes: Attributes = { values: new Map() };
  let i = 0;
  const skipSpace = () => {
    while (i < body.length && /\s/.test(body[i] ?? '')) i++;
  };
  const readWhile = (re: RegExp) => {
    const start = i;
    while (i < body.length && re.test(body[i] ?? '')) i++;
    return body.slice(start, i);
  };

  for (skipSpace(); i < body.length; skipSpace()) {
    const ch = body[i] ?? '';
    if (ch === '#') {
      i++;
      const id = readWhile(/[^\s]/);
      if (!id) return 'empty label after "#"';
      if (attributes.id !== undefined) return `more than one label (#${attributes.id} and #${id})`;
      attributes.id = id;
      continue;
    }
    if (ch === '.') return `classes such as "${readWhile(/[^\s]/)}" aren't supported`;
    const key = readWhile(/[A-Za-z0-9_-]/);
    if (!key) return `unexpected "${ch}" in attributes`;
    if (attributes.values.has(key)) return `"${key}" is given more than once`;
    if (body[i] !== '=') {
      attributes.values.set(key, true);
      continue;
    }
    i++;
    const open = body[i] ?? '';
    const close = OPEN_QUOTES[open];
    if (close) {
      const end = body.indexOf(close, i + 1);
      if (end < 0) return `unclosed quote in the value of "${key}"`;
      attributes.values.set(key, body.slice(i + 1, end));
      i = end + 1;
    } else {
      const value = readWhile(/[^\s]/);
      if (!value) return `"${key}=" has no value`;
      attributes.values.set(key, value);
    }
  }
  return attributes;
}
