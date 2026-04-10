/**
 * Formats a numeric career readiness score for display.
 * e.g. 68 → "68 / 100"
 */
export function formatScore(score: number): string {
  return `${score} / 100`;
}

/**
 * Formats a salary value in INR lakhs.
 * e.g. 1800000 → "₹18L"
 */
export function formatSalaryINR(value: number): string {
  const lakhs = value / 100000;
  return `₹${lakhs}L`;
}

/**
 * Formats a number with a sign for year-over-year changes.
 * e.g. 34 → "+34%", -12 → "-12%"
 */
export function formatYoY(value: number): string {
  return value >= 0 ? `↑ ${value}%` : `↓ ${Math.abs(value)}%`;
}

/**
 * Converts a gap severity string to its corresponding CSS tag class.
 */
export function severityToTag(severity: string): string {
  const map: Record<string, string> = {
    critical: 'tag-red',
    high: 'tag-amber',
    medium: 'tag-amber',
    low: 'tag-green',
  };
  return map[severity] ?? 'tag-purple';
}

/**
 * Converts a gap severity string to a human-readable label.
 */
export function severityToLabel(severity: string): string {
  const map: Record<string, string> = {
    critical: 'Critical gap',
    high: 'High gap',
    medium: 'Medium gap',
    low: 'Low gap',
  };
  return map[severity] ?? severity;
}

/**
 * Returns the hex color for a gap severity bar.
 */
export function severityToColor(severity: string): string {
  const map: Record<string, string> = {
    critical: 'var(--red)',
    high: 'var(--amber)',
    medium: 'var(--amber)',
    low: 'var(--teal)',
  };
  return map[severity] ?? 'var(--purple)';
}
