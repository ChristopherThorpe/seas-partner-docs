import { describe, expect, it } from 'vitest';
import { normalizeEmail } from '../../src/core/email';

describe('normalizeEmail', () => {
  it('trims and lowercases', () => {
    expect(normalizeEmail('  Cat@SEAS.Harvard.edu ')).toBe('cat@seas.harvard.edu');
  });

  it('keeps Gmail dots and +aliases', () => {
    expect(normalizeEmail('First.Last+docs@gmail.com')).toBe('first.last+docs@gmail.com');
  });

  it('leaves an empty email empty', () => {
    expect(normalizeEmail('')).toBe('');
  });
});
