import { describe, expect, it } from 'vitest';
import { streakFromDates } from './parent-summary';

// Plain YYYY-MM-DD arithmetic for the test double (no timezone concerns here).
const dayBefore = (d: string) => {
  const t = new Date(d + 'T12:00:00Z');
  return new Date(t.getTime() - 86400000).toISOString().slice(0, 10);
};

describe('streakFromDates', () => {
  const today = '2026-08-24';
  const yesterday = '2026-08-23';

  it('counts consecutive days ending today', () => {
    const days = new Set(['2026-08-24', '2026-08-23', '2026-08-22']);
    expect(streakFromDates(days, today, yesterday, dayBefore)).toBe(3);
  });

  it('an unfinished today does not break a streak that ended yesterday', () => {
    const days = new Set(['2026-08-23', '2026-08-22']);
    expect(streakFromDates(days, today, yesterday, dayBefore)).toBe(2);
  });

  it('a gap breaks the streak', () => {
    const days = new Set(['2026-08-24', '2026-08-22', '2026-08-21']);
    expect(streakFromDates(days, today, yesterday, dayBefore)).toBe(1);
  });

  it('no recent activity → 0', () => {
    expect(streakFromDates(new Set(['2026-08-20']), today, yesterday, dayBefore)).toBe(0);
    expect(streakFromDates(new Set(), today, yesterday, dayBefore)).toBe(0);
  });
});
