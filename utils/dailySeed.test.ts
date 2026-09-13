import { describe, it, expect } from 'vitest';
import {
  athensDayKey,
  athensDaySeed,
  seedFromDayKey,
  mulberry32,
  seededInt,
  seededShuffle,
  seededPick,
} from './dailySeed';

describe('athensDayKey', () => {
  // The whole daily challenge hangs on this: the day must roll over at Athens
  // midnight all year round, which means +02:00 in winter and +03:00 in summer.
  it('uses the winter offset (UTC+2)', () => {
    // 23:30 UTC on the 15th is 01:30 on the 16th in Athens.
    expect(athensDayKey(new Date('2026-01-15T23:30:00Z'))).toBe('2026-01-16');
    // 21:30 UTC is still 23:30 on the 15th.
    expect(athensDayKey(new Date('2026-01-15T21:30:00Z'))).toBe('2026-01-15');
  });

  it('uses the summer offset (UTC+3)', () => {
    // 22:30 UTC on the 15th is already 01:30 on the 16th in Athens.
    expect(athensDayKey(new Date('2026-07-15T22:30:00Z'))).toBe('2026-07-16');
    // 20:30 UTC is 23:30 on the 15th.
    expect(athensDayKey(new Date('2026-07-15T20:30:00Z'))).toBe('2026-07-15');
  });

  it('proves the two offsets differ — the same clock time straddles the DST switch', () => {
    // 22:00 UTC: winter -> midnight, still the same day; summer -> 01:00 next day.
    expect(athensDayKey(new Date('2026-01-15T22:30:00Z'))).toBe('2026-01-16');
    expect(athensDayKey(new Date('2026-07-15T22:30:00Z'))).toBe('2026-07-16');
    expect(athensDayKey(new Date('2026-01-15T21:00:00Z'))).toBe('2026-01-15');
    expect(athensDayKey(new Date('2026-07-15T21:00:00Z'))).toBe('2026-07-16');
  });

  it('returns a zero-padded YYYY-MM-DD', () => {
    expect(athensDayKey(new Date('2026-03-05T10:00:00Z'))).toBe('2026-03-05');
    expect(athensDayKey(new Date('2026-12-31T12:00:00Z'))).toBe('2026-12-31');
    expect(athensDayKey()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('is stable for the same instant', () => {
    const at = new Date('2026-09-13T09:00:00Z');
    expect(athensDayKey(at)).toBe(athensDayKey(new Date(at.getTime())));
  });
});

describe('seedFromDayKey', () => {
  it('gives the same seed for the same day key', () => {
    expect(seedFromDayKey('2026-09-13')).toBe(seedFromDayKey('2026-09-13'));
    // ...and it is a plain value, so it travels across devices unchanged.
    expect(seedFromDayKey('2026-09-13')).toBe(seedFromDayKey(['2026', '09', '13'].join('-')));
  });

  it('gives a different seed for a different day', () => {
    expect(seedFromDayKey('2026-09-13')).not.toBe(seedFromDayKey('2026-09-14'));
    expect(seedFromDayKey('2026-01-15')).not.toBe(seedFromDayKey('2026-01-16'));
    expect(seedFromDayKey('2026-09-13')).not.toBe(seedFromDayKey('2025-09-13'));
  });

  it('is an unsigned 32-bit integer', () => {
    for (const key of ['2026-01-01', '2026-06-30', '2026-12-31', '']) {
      const seed = seedFromDayKey(key);
      expect(Number.isInteger(seed)).toBe(true);
      expect(seed).toBeGreaterThanOrEqual(0);
      expect(seed).toBeLessThanOrEqual(0xffffffff);
    }
  });

  it('spreads a whole year of consecutive days without collisions', () => {
    const seeds = new Set<number>();
    const day = new Date('2026-01-01T10:00:00Z');
    for (let i = 0; i < 365; i++) {
      seeds.add(seedFromDayKey(athensDayKey(new Date(day.getTime() + i * 86_400_000))));
    }
    expect(seeds.size).toBe(365);
  });

  it('athensDaySeed is the composition of the two', () => {
    const at = new Date('2026-07-15T22:30:00Z');
    expect(athensDaySeed(at)).toBe(seedFromDayKey(athensDayKey(at)));
  });
});

describe('mulberry32', () => {
  it('is deterministic for a given seed', () => {
    const a = mulberry32(seedFromDayKey('2026-09-13'));
    const b = mulberry32(seedFromDayKey('2026-09-13'));
    const first = Array.from({ length: 200 }, () => a());
    const second = Array.from({ length: 200 }, () => b());
    expect(first).toEqual(second);
  });

  it('stays in [0, 1)', () => {
    const rng = mulberry32(12345);
    for (let i = 0; i < 5000; i++) {
      const v = rng();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });

  it('produces a different stream for a different seed', () => {
    const a = Array.from({ length: 20 }, mulberry32(seedFromDayKey('2026-09-13')));
    const b = Array.from({ length: 20 }, mulberry32(seedFromDayKey('2026-09-14')));
    expect(a).not.toEqual(b);
  });

  it('does not get stuck or repeat immediately', () => {
    const rng = mulberry32(0);
    const values = new Set(Array.from({ length: 1000 }, () => rng()));
    expect(values.size).toBeGreaterThan(990);
  });
});

describe('seededInt', () => {
  it('stays inside the inclusive range', () => {
    const rng = mulberry32(7);
    for (let i = 0; i < 2000; i++) {
      const v = seededInt(rng, 3, 9);
      expect(Number.isInteger(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(3);
      expect(v).toBeLessThanOrEqual(9);
    }
  });

  it('reaches both ends of the range', () => {
    const rng = mulberry32(99);
    const seen = new Set<number>();
    for (let i = 0; i < 500; i++) seen.add(seededInt(rng, 1, 4));
    expect([...seen].sort()).toEqual([1, 2, 3, 4]);
  });

  it('is deterministic for the same seed', () => {
    const run = () => {
      const rng = mulberry32(seedFromDayKey('2026-09-13'));
      return Array.from({ length: 30 }, () => seededInt(rng, 0, 100));
    };
    expect(run()).toEqual(run());
  });

  it('handles a degenerate or swapped range', () => {
    const rng = mulberry32(1);
    expect(seededInt(rng, 5, 5)).toBe(5);
    for (let i = 0; i < 100; i++) {
      const v = seededInt(rng, 9, 2); // swapped on purpose
      expect(v).toBeGreaterThanOrEqual(2);
      expect(v).toBeLessThanOrEqual(9);
    }
  });

  it('never overflows when an rng returns exactly 1', () => {
    const one = () => 1;
    expect(seededInt(one, 1, 6)).toBe(6);
  });
});

describe('seededShuffle', () => {
  const source = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ'];

  it('is a permutation — same multiset, same length', () => {
    const rng = mulberry32(seedFromDayKey('2026-09-13'));
    for (let trial = 0; trial < 100; trial++) {
      const out = seededShuffle(rng, source);
      expect(out).toHaveLength(source.length);
      expect([...out].sort()).toEqual([...source].sort());
    }
  });

  it('is stable for a given seed', () => {
    const run = () => seededShuffle(mulberry32(seedFromDayKey('2026-09-13')), source);
    expect(run()).toEqual(run());
    // Every device that agrees on the day agrees on the order.
    expect(seededShuffle(mulberry32(424242), source))
      .toEqual(seededShuffle(mulberry32(424242), source));
  });

  it('gives a different order on a different day', () => {
    const a = seededShuffle(mulberry32(seedFromDayKey('2026-09-13')), source);
    const b = seededShuffle(mulberry32(seedFromDayKey('2026-09-14')), source);
    expect(a).not.toEqual(b);
  });

  it('does not mutate the input', () => {
    const input = [...source];
    seededShuffle(mulberry32(5), input);
    expect(input).toEqual(source);
  });

  it('actually reorders — not an identity shuffle', () => {
    const moved = new Set<string>();
    for (let seed = 0; seed < 60; seed++) {
      seededShuffle(mulberry32(seed), source).forEach((v, i) => {
        if (v !== source[i]) moved.add(v);
      });
    }
    expect(moved.size).toBe(source.length);
  });

  it('handles empty and single-item arrays', () => {
    expect(seededShuffle(mulberry32(1), [])).toEqual([]);
    expect(seededShuffle(mulberry32(1), ['μόνο'])).toEqual(['μόνο']);
  });
});

describe('seededPick', () => {
  const source = [1, 2, 3, 4, 5, 6];

  it('picks distinct items, deterministically', () => {
    const run = () => seededPick(mulberry32(seedFromDayKey('2026-09-13')), source, 3);
    const picked = run();
    expect(picked).toHaveLength(3);
    expect(new Set(picked).size).toBe(3);
    picked.forEach(v => expect(source).toContain(v));
    expect(run()).toEqual(picked);
  });

  it('clamps the count to the available items', () => {
    expect(seededPick(mulberry32(1), source, 99)).toHaveLength(source.length);
    expect(seededPick(mulberry32(1), source, 0)).toEqual([]);
    expect(seededPick(mulberry32(1), source, -2)).toEqual([]);
  });
});
