/**
 * The old Explorer's stamps are read from a reader, never from the passport.
 *
 * These pin the list the stamp book prints: an empty device yields nothing, corrupt
 * records yield nothing rather than a throw, a stamped city carries the date Explorer's
 * own passport printed, an unstamped one carries none, and a date that cannot be read is
 * printed as unknown rather than as today. The last two tests pin this file's re-stated
 * rules to the originals in `data/explore/progress.ts`, `data/explore/passport.ts` and
 * `components/QuizEngine.tsx`, so the two cannot drift apart unnoticed.
 */

import { beforeEach, describe, expect, it } from 'vitest';
import {
  legacyDay,
  legacyNeed,
  legacyQuizPassed,
  legacyStamps,
  readLegacyStamps,
  type StorageReader,
} from './legacyStamps';
import { CITY_META } from '../../data/explore/registry';
import { cityBadgeNeed } from '../../data/explore/progress';
import { cityStamp } from '../../data/explore/passport';
import { getQuizStars } from '../QuizEngine';

/** A reader over a plain map — no storage at all. */
const reader = (records: Record<string, string>): StorageReader => (key) => records[key] ?? null;

/**
 * The records Explorer writes for a city where `n` envelopes were opened at t = 1000,
 * 2000, … and every quiz was passed — the shape of `writeProgress` and `saveQuizBest`.
 */
const played = (
  cityId: string,
  n: number,
  opts: { passQuiz?: boolean; at?: (i: number) => unknown } = {},
): Record<string, string> => {
  const opened: Record<string, unknown> = {};
  const records: Record<string, string> = {};
  for (let i = 1; i <= n; i += 1) {
    opened[`s${i}`] = { via: 'gps', at: opts.at ? opts.at(i) : i * 1000 };
    if (opts.passQuiz !== false) {
      records[`wb_quiz_best_explore-${cityId}-s${i}`] = JSON.stringify({ score: 3, total: 3, timestamp: i * 1000 });
    }
  }
  records[`wb_explore_${cityId}`] = JSON.stringify({ opened, onSite: {}, tasted: {} });
  return records;
};

describe('an empty device', () => {
  it('lists nothing', () => {
    expect(legacyStamps(reader({}))).toEqual([]);
  });

  it('lists nothing when the reader itself throws, as a private window does', () => {
    const throwing: StorageReader = () => {
      throw new Error('SecurityError');
    };
    expect(legacyStamps(throwing)).toEqual([]);
  });

  it('ignores a city Explorer never had', () => {
    expect(legacyStamps(reader(played('atlantis', 10)))).toEqual([]);
  });
});

describe('records that cannot be read', () => {
  it('skips corrupt JSON and records of the wrong shape, and never throws', () => {
    expect(
      legacyStamps(
        reader({
          wb_explore_porto: '{not json',
          wb_explore_athens: '"a string"',
          wb_explore_rome: '[1,2,3]',
          wb_explore_paris: 'null',
          wb_explore_london: JSON.stringify({ opened: 'nope' }),
          wb_explore_berlin: JSON.stringify({ onSite: {} }),
        }),
      ),
    ).toEqual([]);
  });

  it('counts an opened envelope whose quiz record is corrupt, but not towards the stamp', () => {
    const records = played('porto', 8);
    records['wb_quiz_best_explore-porto-s8'] = '{broken';
    const [porto] = legacyStamps(reader(records));
    expect(porto.spotsOpened).toBe(8);
    expect(porto.spotsDone).toBe(7);
    expect(porto.stamped).toBe(false);
    expect(porto.stampedAt).toBeNull();
  });
});

describe('one city with its stamp', () => {
  it('carries the name, the flag, the envelopes and the date the N-th counting one opened', () => {
    const list = legacyStamps(reader(played('porto', 10)));
    expect(list).toHaveLength(1);
    expect(list[0]).toEqual({
      cityId: 'porto',
      name: { el: 'Πόρτο', en: 'Porto' },
      country: { el: 'Πορτογαλία', en: 'Portugal' },
      countryCode: 'PT',
      flag: '🇵🇹',
      emoji: '🌉',
      spotsOpened: 10,
      spotsDone: 10,
      spotCount: 10,
      need: 8,
      stamped: true,
      stampedAt: 8000,
      lastOpenedAt: 10000,
    });
  });

  it('dates the stamp by the envelopes in time order, not in storage order', () => {
    // Stored in reverse: s1 opened last, at 10 000. The eighth envelope to OPEN is s3,
    // at 8000 — the same date as when they are stored in order.
    const list = legacyStamps(reader(played('porto', 10, { at: (i) => (11 - i) * 1000 })));
    expect(list[0].stampedAt).toBe(8000);
  });
});

describe('one city without its stamp', () => {
  it('is listed with its envelopes, no date and no stamp', () => {
    const [athens] = legacyStamps(reader(played('athens', 3)));
    expect(athens).toMatchObject({
      cityId: 'athens',
      spotsOpened: 3,
      spotsDone: 3,
      need: 8,
      stamped: false,
      stampedAt: null,
      lastOpenedAt: 3000,
    });
  });

  it('is one envelope short at seven, and does not count an open envelope whose quiz was never passed', () => {
    expect(legacyStamps(reader(played('athens', 7)))[0].stamped).toBe(false);
    const [athens] = legacyStamps(reader(played('athens', 10, { passQuiz: false })));
    expect(athens.spotsOpened).toBe(10);
    expect(athens.spotsDone).toBe(0);
    expect(athens.stamped).toBe(false);
  });
});

describe('dates that cannot be read', () => {
  it('still counts the envelope, but prints the stamp without a date', () => {
    // s5 carries a string, s6 nothing at all, s7 NaN; the stamp is earned, its date unknown.
    const at = (i: number) => (i === 5 ? '2026-09-05' : i === 6 ? undefined : i === 7 ? NaN : i * 1000);
    const [porto] = legacyStamps(reader(played('porto', 10, { at })));
    expect(porto.spotsOpened).toBe(10);
    expect(porto.spotsDone).toBe(10);
    expect(porto.stamped).toBe(true);
    expect(porto.stampedAt).toBeNull();
    expect(porto.lastOpenedAt).toBe(10000);
  });

  it('treats zero and negative timestamps as unreadable', () => {
    const [athens] = legacyStamps(reader(played('athens', 2, { at: (i) => (i === 1 ? 0 : -5) })));
    expect(athens.spotsOpened).toBe(2);
    expect(athens.lastOpenedAt).toBeNull();
  });

  it('counts an envelope stored as something other than an object', () => {
    const records: Record<string, string> = {
      wb_explore_athens: JSON.stringify({ opened: { s1: true, s2: 'gps' } }),
    };
    const [athens] = legacyStamps(reader(records));
    expect(athens.spotsOpened).toBe(2);
    expect(athens.spotsDone).toBe(0);
    expect(athens.lastOpenedAt).toBeNull();
  });
});

describe('the order of the list', () => {
  it('is by date, earliest first — the stamp date for a stamped city, the last envelope for the rest', () => {
    const records = {
      ...played('lisbon', 3, { at: (i) => 50_000 + i }), // last envelope 50 003
      ...played('porto', 10, { at: (i) => 20_000 + i * 100 }), // stamped at 20 800, last 21 000
      ...played('athens', 2, { at: (i) => 30_000 + i }), // last envelope 30 002
    };
    expect(legacyStamps(reader(records)).map((s) => s.cityId)).toEqual(['porto', 'athens', 'lisbon']);
  });

  it('puts a city with no readable date last, in registry order', () => {
    const records = {
      ...played('rome', 2, { at: () => 'never' }),
      ...played('athens', 2, { at: () => undefined }),
      ...played('porto', 1),
    };
    expect(legacyStamps(reader(records)).map((s) => s.cityId)).toEqual(['porto', 'athens', 'rome']);
  });
});

describe('the device reader', () => {
  beforeEach(() => localStorage.clear());

  it('reads the same records Explorer wrote to localStorage', () => {
    for (const [k, v] of Object.entries(played('porto', 10))) localStorage.setItem(k, v);
    const list = readLegacyStamps();
    expect(list).toHaveLength(1);
    expect(list[0].cityId).toBe('porto');
    expect(list[0].stampedAt).toBe(8000);
  });

  it('writes nothing while it reads', () => {
    for (const [k, v] of Object.entries(played('porto', 10))) localStorage.setItem(k, v);
    const before = localStorage.length;
    readLegacyStamps();
    expect(localStorage.length).toBe(before);
    expect(localStorage.getItem('wb_world_progress')).toBeNull();
  });
});

describe('the rules are Explorer’s own', () => {
  beforeEach(() => localStorage.clear());

  it('needs exactly what cityBadgeNeed needs, for every old city', () => {
    for (const meta of CITY_META) expect(legacyNeed(meta.spotCount), meta.id).toBe(cityBadgeNeed(meta.spotCount));
    expect(legacyNeed(1)).toBe(1);
    expect(legacyNeed(NaN)).toBe(1);
  });

  it('passes a quiz exactly when getQuizStars gives a star', () => {
    const runs = [
      { score: 3, total: 3 },
      { score: 2, total: 3 },
      { score: 1, total: 3 },
      { score: 0, total: 3 },
      { score: 2, total: 4 },
      { score: 0, total: 0 },
      { score: 5, total: 0 },
    ];
    for (const run of runs) {
      const raw = JSON.stringify(run);
      localStorage.setItem('wb_quiz_best_explore-x-y', raw);
      expect(legacyQuizPassed(raw), raw).toBe(getQuizStars('explore-x-y') >= 1);
    }
    expect(legacyQuizPassed(null)).toBe(false);
    expect(legacyQuizPassed('{bad')).toBe(false);
    expect(legacyQuizPassed(JSON.stringify({ score: '3', total: 3 }))).toBe(false);
  });

  it('gives the same count and the same date as Explorer’s own passport', () => {
    const porto = CITY_META.find((c) => c.id === 'porto')!;
    for (const [k, v] of Object.entries(played('porto', 9, { at: (i) => (10 - i) * 1000 }))) localStorage.setItem(k, v);
    const theirs = cityStamp(porto);
    const [ours] = readLegacyStamps();
    expect(ours.spotsDone).toBe(theirs.done);
    expect(ours.need).toBe(theirs.need);
    expect(ours.stampedAt).toBe(theirs.earnedAt);
    expect(ours.stampedAt).toBe(8000); // nine envelopes at 9000 … 1000; the eighth to open is 8000
  });
});

describe('the day the child reads', () => {
  it('is the local day, in the shape today() writes', () => {
    const noon = new Date(2026, 8, 5, 12, 0, 0).getTime();
    expect(legacyDay(noon)).toBe('2026-09-05');
    const lateEvening = new Date(2026, 0, 31, 23, 59, 0).getTime();
    expect(legacyDay(lateEvening)).toBe('2026-01-31');
  });
});
