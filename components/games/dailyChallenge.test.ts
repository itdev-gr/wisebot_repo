/**
 * Tests for «Η Πρόκληση της Ημέρας» — the pure half.
 *
 * Nothing here mounts a round: the suite imports only `dailyLogic.ts` and the
 * content file, so it stays fast and it cannot break because a round component
 * changed its markup. What it does guard is everything a child would notice if
 * it broke silently — the three rounds being the same for everyone, the score
 * being comparable across very different rounds, and the streak surviving a
 * midnight, a month boundary and a replay.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  dayKeyDiff,
  displayStreak,
  hasPlayedOn,
  isDayKey,
  nextStreak,
  normaliseScore,
  pickRoundsForDay,
  readStreak,
  roundRatio,
  sanitiseStreak,
  scorePraise,
  scoreToTier,
  writeStreak,
  type DailyStreak,
} from './dailyLogic';
import type { RoundResult } from './playRound';
import {
  DAILY_COPY,
  DAILY_ROUND_POOL,
  DAILY_STORAGE_KEY,
  MAX_SCORE,
  ROUNDS_PER_DAY,
  ROUND_MS,
  SCORE_TIERS,
} from '../../data/games/daily';

/** 'YYYY-MM-DD' `days` after `key`. Test-side date maths, kept independent of
 *  the implementation so a bug in `dayKeyDiff` cannot hide behind it. */
function addDays(key: string, days: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + days));
  const p = (n: number) => String(n).padStart(2, '0');
  return `${t.getUTCFullYear()}-${p(t.getUTCMonth() + 1)}-${p(t.getUTCDate())}`;
}

const result = (correct: number, total: number): RoundResult => ({ correct, total });

/* ───────────────────────────── round picking ───────────────────────────── */

describe('pickRoundsForDay', () => {
  it('gives the same three rounds, in the same order, for the same day key', () => {
    for (const key of ['2026-09-13', '2026-01-01', '2027-12-31']) {
      const a = pickRoundsForDay(key, DAILY_ROUND_POOL).map((r) => r.key);
      const b = pickRoundsForDay(key, DAILY_ROUND_POOL).map((r) => r.key);
      expect(a).toEqual(b);
      expect(a).toHaveLength(ROUNDS_PER_DAY);
    }
  });

  it('picks exactly ROUNDS_PER_DAY distinct rounds', () => {
    const picked = pickRoundsForDay('2026-09-13', DAILY_ROUND_POOL).map((r) => r.key);
    expect(new Set(picked).size).toBe(picked.length);
    for (const key of picked) {
      expect(DAILY_ROUND_POOL.some((r) => r.key === key)).toBe(true);
    }
  });

  it('varies the running order across a span of days', () => {
    const orders = new Set<string>();
    let day = '2026-09-01';
    for (let i = 0; i < 40; i++) {
      orders.add(pickRoundsForDay(day, DAILY_ROUND_POOL).map((r) => r.key).join('>'));
      day = addDays(day, 1);
    }
    // With a three-round pool the *set* is fixed and the order turns over;
    // seeing at least four of the six permutations in 40 days proves the day
    // seed actually reaches the shuffle.
    expect(orders.size).toBeGreaterThanOrEqual(4);
  });

  it('picks different sets once the pool is larger than the daily count', () => {
    const pool = ['a', 'b', 'c', 'd', 'e', 'f'];
    const sets = new Set<string>();
    let day = '2026-09-01';
    for (let i = 0; i < 30; i++) {
      sets.add(pickRoundsForDay(day, pool).slice().sort().join(''));
      day = addDays(day, 1);
    }
    expect(sets.size).toBeGreaterThan(1);
  });

  it('consecutive days do not simply repeat each other', () => {
    let repeats = 0;
    let day = '2026-09-01';
    for (let i = 0; i < 30; i++) {
      const a = pickRoundsForDay(day, DAILY_ROUND_POOL).map((r) => r.key).join('>');
      const b = pickRoundsForDay(addDays(day, 1), DAILY_ROUND_POOL).map((r) => r.key).join('>');
      if (a === b) repeats++;
      day = addDays(day, 1);
    }
    expect(repeats).toBeLessThan(15);
  });

  it('survives an empty pool, a zero count and a pool smaller than the count', () => {
    expect(pickRoundsForDay('2026-09-13', [])).toEqual([]);
    expect(pickRoundsForDay('2026-09-13', DAILY_ROUND_POOL, 0)).toEqual([]);
    expect(pickRoundsForDay('2026-09-13', ['only'], 3)).toEqual(['only']);
  });
});

/* ──────────────────────────────── scoring ─────────────────────────────── */

describe('roundRatio', () => {
  it('scores against the target, not the attempted count', () => {
    // Math Rush: 4 right out of 5 attempted is *not* a perfect round.
    expect(roundRatio(result(4, 5), 8)).toBeCloseTo(0.5);
    expect(roundRatio(result(8, 12), 8)).toBe(1);
  });

  it('caps at 1 when the child beats the target', () => {
    expect(roundRatio(result(20, 25), 8)).toBe(1);
  });

  it('falls back to the round total when no target is given', () => {
    expect(roundRatio(result(2, 4))).toBeCloseTo(0.5);
  });

  it('is 0 for nothing correct, no denominator, or a missing result', () => {
    expect(roundRatio(result(0, 4), 4)).toBe(0);
    expect(roundRatio(result(3, 0))).toBe(0);
    expect(roundRatio(null)).toBe(0);
    expect(roundRatio(undefined, 4)).toBe(0);
    expect(roundRatio(result(-2, 4), 4)).toBe(0);
    expect(roundRatio(result(Number.NaN, 4), 4)).toBe(0);
  });
});

describe('normaliseScore', () => {
  const targets = [8, 4, 4];

  it('is 10 for three perfect rounds', () => {
    expect(normaliseScore([result(8, 10), result(4, 4), result(4, 4)], targets)).toBe(MAX_SCORE);
  });

  it('is 0 for three empty rounds', () => {
    expect(normaliseScore([result(0, 3), result(0, 4), result(0, 4)], targets)).toBe(0);
  });

  it('averages the per-round ratios', () => {
    // 1 + 0.5 + 0 = 1.5 / 3 = 0.5 → 5/10
    expect(normaliseScore([result(8, 9), result(2, 4), result(0, 4)], targets)).toBe(5);
  });

  it('never lets one round drown out another', () => {
    // 20 correct sums beats the target but still only carries its own third.
    expect(normaliseScore([result(20, 22), result(0, 4), result(0, 4)], targets)).toBe(3);
  });

  it('stays inside 0…10 for every combination of the real targets', () => {
    for (let a = 0; a <= 12; a++) {
      for (let b = 0; b <= 4; b++) {
        for (let c = 0; c <= 4; c++) {
          const s = normaliseScore([result(a, 12), result(b, 4), result(c, 4)], targets);
          expect(s).toBeGreaterThanOrEqual(0);
          expect(s).toBeLessThanOrEqual(MAX_SCORE);
          expect(Number.isInteger(s)).toBe(true);
        }
      }
    }
  });

  it('handles no rounds and no targets', () => {
    expect(normaliseScore([])).toBe(0);
    expect(normaliseScore([result(2, 4), result(4, 4)])).toBe(8);
  });
});

describe('scoreToTier', () => {
  it('maps the documented boundaries', () => {
    expect(scoreToTier(0)).toBe(0);
    expect(scoreToTier(1)).toBe(1);
    expect(scoreToTier(3)).toBe(1);
    expect(scoreToTier(4)).toBe(2);
    expect(scoreToTier(6)).toBe(2);
    expect(scoreToTier(7)).toBe(3);
    expect(scoreToTier(10)).toBe(3);
  });

  it('matches whatever the content file says, boundary for boundary', () => {
    for (const step of SCORE_TIERS) {
      expect(scoreToTier(step.minScore)).toBe(step.tier);
      if (step.minScore > 0) {
        expect(scoreToTier(step.minScore - 1)).toBeLessThan(step.tier);
      }
    }
  });

  it('never pays out for a broken score', () => {
    expect(scoreToTier(Number.NaN)).toBe(0);
    expect(scoreToTier(-5)).toBe(0);
  });

  it('never exceeds the tier grantGameReward understands', () => {
    for (let s = 0; s <= MAX_SCORE; s++) {
      expect(scoreToTier(s)).toBeLessThanOrEqual(3);
    }
  });
});

describe('scorePraise', () => {
  it('has a line in both languages for every score', () => {
    for (let s = 0; s <= MAX_SCORE; s++) {
      expect(scorePraise(s, 'el')).toBeTruthy();
      expect(scorePraise(s, 'en')).toBeTruthy();
      expect(scorePraise(s, 'el')).not.toBe(scorePraise(s, 'en'));
    }
  });
});

/* ───────────────────────────── day key maths ───────────────────────────── */

describe('dayKeyDiff / isDayKey', () => {
  it('counts whole calendar days', () => {
    expect(dayKeyDiff('2026-09-13', '2026-09-14')).toBe(1);
    expect(dayKeyDiff('2026-09-13', '2026-09-13')).toBe(0);
    expect(dayKeyDiff('2026-09-14', '2026-09-13')).toBe(-1);
    expect(dayKeyDiff('2026-08-31', '2026-09-01')).toBe(1);
    expect(dayKeyDiff('2026-12-31', '2027-01-01')).toBe(1);
    expect(dayKeyDiff('2024-02-28', '2024-02-29')).toBe(1);
  });

  it('is unaffected by the Greek DST switches', () => {
    // Athens springs forward on 2026-03-29 and back on 2026-10-25. Parsed as
    // UTC midnights, a 23-hour and a 25-hour day are still one day.
    expect(dayKeyDiff('2026-03-28', '2026-03-29')).toBe(1);
    expect(dayKeyDiff('2026-10-24', '2026-10-25')).toBe(1);
  });

  it('rejects anything that is not a real date', () => {
    expect(isDayKey('2026-09-13')).toBe(true);
    expect(isDayKey('2026-02-31')).toBe(false);
    expect(isDayKey('2026-13-01')).toBe(false);
    expect(isDayKey('2026-9-13')).toBe(false);
    expect(isDayKey('yesterday')).toBe(false);
    expect(isDayKey(20260913)).toBe(false);
    expect(isDayKey(null)).toBe(false);
    expect(dayKeyDiff('nope', '2026-09-13')).toBeNull();
  });
});

/* ───────────────────────────────── streak ─────────────────────────────── */

describe('nextStreak', () => {
  const day = '2026-09-13';

  it('starts a fresh streak at 1', () => {
    const s = nextStreak(null, day, 7);
    expect(s).toEqual({ lastDayKey: day, streak: 1, bestStreak: 1, lastScore: 7 });
  });

  it('increments on the next calendar day', () => {
    const a = nextStreak(null, '2026-09-13', 5);
    const b = nextStreak(a, '2026-09-14', 6);
    const c = nextStreak(b, '2026-09-15', 9);
    expect([a.streak, b.streak, c.streak]).toEqual([1, 2, 3]);
    expect(c.lastScore).toBe(9);
  });

  it('is a no-op when the same day is replayed', () => {
    const first = nextStreak(null, day, 8);
    const replay = nextStreak(first, day, 2);
    expect(replay).toEqual(first);
    expect(replay.streak).toBe(1);
    expect(replay.lastScore).toBe(8);
    // And again, many times over — a stuck retry loop must not inflate it.
    let s = first;
    for (let i = 0; i < 25; i++) s = nextStreak(s, day, 10);
    expect(s).toEqual(first);
  });

  it('resets to 1 after a gap of two days', () => {
    const a = nextStreak(null, '2026-09-13', 8);
    const b = nextStreak(a, '2026-09-14', 8);
    const c = nextStreak(b, '2026-09-16', 8);
    expect(b.streak).toBe(2);
    expect(c.streak).toBe(1);
  });

  it('resets after a long absence', () => {
    const a = nextStreak(null, '2026-09-13', 8);
    expect(nextStreak(a, '2026-12-01', 8).streak).toBe(1);
  });

  it('resets when the stored day is in the future (clock moved back)', () => {
    const a = nextStreak(null, '2026-09-20', 8);
    expect(nextStreak(a, '2026-09-13', 8).streak).toBe(1);
  });

  it('tracks the best streak as a high-water mark', () => {
    let s: DailyStreak = nextStreak(null, '2026-09-01', 8);
    for (let i = 1; i < 5; i++) s = nextStreak(s, addDays('2026-09-01', i), 8);
    expect(s.streak).toBe(5);
    expect(s.bestStreak).toBe(5);

    // Miss two days: the current streak collapses, the record does not.
    const broken = nextStreak(s, addDays('2026-09-01', 7), 4);
    expect(broken.streak).toBe(1);
    expect(broken.bestStreak).toBe(5);

    // Climb back to exactly the old record: matched, not beaten, so the
    // high-water mark must not move.
    let back = broken;
    for (let i = 8; i <= 11; i++) back = nextStreak(back, addDays('2026-09-01', i), 6);
    expect(back.streak).toBe(5);
    expect(back.bestStreak).toBe(5);

    // One more day actually beats it.
    back = nextStreak(back, addDays('2026-09-01', 12), 6);
    expect(back.streak).toBe(6);
    expect(back.bestStreak).toBe(6);
  });

  it('clamps a nonsense score instead of storing it', () => {
    expect(nextStreak(null, day, 99).lastScore).toBe(MAX_SCORE);
    expect(nextStreak(null, day, -4).lastScore).toBe(0);
    expect(nextStreak(null, day, Number.NaN).lastScore).toBe(0);
  });

  it('starts over rather than trusting a corrupt record', () => {
    expect(nextStreak({ lastDayKey: 'nope', streak: 40 }, day, 5).streak).toBe(1);
    expect(nextStreak('garbage', day, 5).streak).toBe(1);
    expect(nextStreak({ streak: 9 }, day, 5).streak).toBe(1);
  });
});

describe('sanitiseStreak / hasPlayedOn / displayStreak', () => {
  it('rejects everything that is not a usable record', () => {
    expect(sanitiseStreak(null)).toBeNull();
    expect(sanitiseStreak('x')).toBeNull();
    expect(sanitiseStreak({})).toBeNull();
    expect(sanitiseStreak({ lastDayKey: '13/09/2026' })).toBeNull();
  });

  it('repairs a record with impossible numbers', () => {
    const s = sanitiseStreak({ lastDayKey: '2026-09-13', streak: -3, bestStreak: 0, lastScore: 900 });
    expect(s).toEqual({ lastDayKey: '2026-09-13', streak: 1, bestStreak: 1, lastScore: MAX_SCORE });
  });

  it('knows whether today was already counted', () => {
    const s = nextStreak(null, '2026-09-13', 8);
    expect(hasPlayedOn(s, '2026-09-13')).toBe(true);
    expect(hasPlayedOn(s, '2026-09-14')).toBe(false);
    expect(hasPlayedOn(null, '2026-09-13')).toBe(false);
  });

  it('shows a streak only while it is still alive', () => {
    const s = { lastDayKey: '2026-09-13', streak: 5, bestStreak: 5, lastScore: 8 };
    expect(displayStreak(s, '2026-09-13')).toBe(5);  // played today
    expect(displayStreak(s, '2026-09-14')).toBe(5);  // yesterday — still going
    expect(displayStreak(s, '2026-09-15')).toBe(0);  // missed a day — over
    expect(displayStreak(null, '2026-09-13')).toBe(0);
  });
});

describe('readStreak / writeStreak', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => { vi.restoreAllMocks(); localStorage.clear(); });

  it('round-trips through the documented key', () => {
    const record = nextStreak(null, '2026-09-13', 8);
    writeStreak(record);
    expect(localStorage.getItem(DAILY_STORAGE_KEY)).toBeTruthy();
    expect(readStreak()).toEqual(record);
  });

  it('returns null for a missing or unparsable value', () => {
    expect(readStreak()).toBeNull();
    localStorage.setItem(DAILY_STORAGE_KEY, '{not json');
    expect(readStreak()).toBeNull();
    localStorage.setItem(DAILY_STORAGE_KEY, '{"lastDayKey":"soon"}');
    expect(readStreak()).toBeNull();
  });

  it('never throws when storage itself is blocked', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('QuotaExceeded'); });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('SecurityError'); });
    expect(() => writeStreak(nextStreak(null, '2026-09-13', 8))).not.toThrow();
    expect(readStreak()).toBeNull();
  });
});

/* ───────────────────── the day-to-day story, end to end ────────────────── */

describe('a week of daily challenges', () => {
  beforeEach(() => localStorage.clear());

  it('pays XP once a day, keeps the streak, and ignores replays', () => {
    const targets = DAILY_ROUND_POOL.map((r) => r.target);
    let grants = 0;

    const play = (dayKey: string, results: RoundResult[]) => {
      const stored = readStreak();
      if (hasPlayedOn(stored, dayKey)) return { score: stored!.lastScore, granted: false };
      const score = normaliseScore(results, targets);
      const record = nextStreak(stored, dayKey, score);
      writeStreak(record);
      const tier = scoreToTier(score);
      if (tier > 0) grants++;
      return { score, granted: tier > 0 };
    };

    const good = [result(8, 10), result(4, 4), result(4, 4)];

    expect(play('2026-09-13', good).score).toBe(10);
    // Three replays of the same day: no score change, no second grant.
    expect(play('2026-09-13', [result(0, 5), result(0, 4), result(0, 4)]).granted).toBe(false);
    expect(play('2026-09-13', good).granted).toBe(false);
    expect(readStreak()!.streak).toBe(1);
    expect(readStreak()!.lastScore).toBe(10);

    play('2026-09-14', good);
    play('2026-09-15', good);
    expect(readStreak()!.streak).toBe(3);
    expect(grants).toBe(3);

    // Skip the 16th.
    play('2026-09-17', good);
    expect(readStreak()!.streak).toBe(1);
    expect(readStreak()!.bestStreak).toBe(3);
    expect(grants).toBe(4);
  });
});

/* ──────────────────────────── the content file ─────────────────────────── */

describe('data/games/daily.ts', () => {
  it('matches the brief: three rounds of 30", scored 0–10', () => {
    expect(ROUND_MS).toBe(30_000);
    expect(ROUNDS_PER_DAY).toBe(3);
    expect(MAX_SCORE).toBe(10);
    expect(DAILY_ROUND_POOL.length).toBeGreaterThanOrEqual(ROUNDS_PER_DAY);
  });

  it('gives every round a unique key, both labels and a usable target', () => {
    const keys = DAILY_ROUND_POOL.map((r) => r.key);
    expect(new Set(keys).size).toBe(keys.length);
    for (const round of DAILY_ROUND_POOL) {
      expect(round.label.el.length).toBeGreaterThan(0);
      expect(round.label.en.length).toBeGreaterThan(0);
      expect(round.target).toBeGreaterThan(0);
      expect(typeof round.load).toBe('function');
    }
  });

  it('has every copy key in both languages', () => {
    const el = Object.keys(DAILY_COPY.el).sort();
    const en = Object.keys(DAILY_COPY.en).sort();
    expect(el).toEqual(en);
    expect(el.length).toBeGreaterThan(20);
  });

  it('has no empty string and no untranslated leftover', () => {
    for (const lang of ['el', 'en'] as const) {
      for (const [key, value] of Object.entries(DAILY_COPY[lang])) {
        if (typeof value === 'string') expect(value.trim(), `${lang}.${key}`).not.toBe('');
        if (Array.isArray(value)) {
          expect(value.length, `${lang}.${key}`).toBeGreaterThan(0);
          value.forEach((line) => expect(String(line).trim()).not.toBe(''));
        }
      }
    }
    // The lines a child actually reads must differ between languages.
    expect(DAILY_COPY.el.tagline).not.toBe(DAILY_COPY.en.tagline);
    expect(DAILY_COPY.el.start).not.toBe(DAILY_COPY.en.start);
  });

  it('builds the share strings from the score alone — nothing personal', () => {
    for (const lang of ['el', 'en'] as const) {
      const copy = DAILY_COPY[lang];
      expect(copy.cardHeadline(8, 10)).toContain('8/10');
      expect(copy.shareText(8, 10)).toContain('8/10');
      expect(copy.roundOf(1, 3)).toMatch(/1\/3/);
      expect(copy.streakDays(1)).not.toBe(copy.streakDays(2));
      // A name or birth-date slot would show up as an extra argument.
      expect(copy.cardHeadline.length).toBe(2);
      expect(copy.shareText.length).toBe(2);
    }
  });
});
