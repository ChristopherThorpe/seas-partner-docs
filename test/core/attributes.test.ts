import { describe, expect, it } from 'vitest';
import { splitAttributes } from '../../src/core/attributes';

describe('splitAttributes', () => {
  it('returns lines without a block unchanged', () => {
    expect(splitAttributes('  Plain heading ')).toEqual({ text: 'Plain heading' });
  });

  it('reads the label, key=value pairs and flags', () => {
    const { text, attributes } = splitAttributes(
      'Partner name {#ENTITY_PARTNER type=line required}',
    );
    expect(text).toBe('Partner name');
    expect(attributes?.id).toBe('ENTITY_PARTNER');
    expect([...(attributes?.values ?? [])]).toEqual([
      ['type', 'line'],
      ['required', true],
    ]);
  });

  it('accepts straight and curly quotes around values with spaces', () => {
    const { attributes } = splitAttributes(
      `Q {#Q show-if="A AND B" placeholder='Full name' tip=“See §2”}`,
    );
    expect(attributes?.values.get('show-if')).toBe('A AND B');
    expect(attributes?.values.get('placeholder')).toBe('Full name');
    expect(attributes?.values.get('tip')).toBe('See §2');
  });

  it('only treats a block at the end of the line as attributes', () => {
    expect(splitAttributes('Use {braces} here').attributes).toBeUndefined();
    expect(splitAttributes('Use {braces} here {#X}').text).toBe('Use {braces} here');
  });

  it.each([
    ['Q {#A #B}', 'more than one label'],
    ['Q {#A type=line type=date}', '"type" is given more than once'],
    ['Q {#A .wide}', 'classes'],
    ['Q {#A show-if="A}', 'unclosed quote'],
    ['Q {#A type=}', 'has no value'],
    ['Q {#}', 'empty label'],
  ])('reports %s', (line, message) => {
    expect(splitAttributes(line).error).toContain(message);
  });
});
