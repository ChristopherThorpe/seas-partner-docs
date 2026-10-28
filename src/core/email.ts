/**
 * Canonical form for comparing Google account emails: trimmed and lowercased.
 * Gmail dots and +aliases are deliberately not folded (see #7).
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
