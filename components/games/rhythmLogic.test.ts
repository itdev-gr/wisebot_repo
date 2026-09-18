/**
 * Tests for the «Ρυθμός» rules: the timing windows at their exact edges, the
 * combo, "a note is judged once", the empty-tap decision, the sweep, the
 * tiers, the calibration and the stored record.
 */
import { describe, it, expect } from 'vitest';
import { LATENCY_OFFSET, RHYTHM_DIFFICULTY_INFO, RHYTHM_POINTS, RHYTHM_TIER_ACCURACY, type RhythmNote } from '../../data/games/rhythm';
import {
  accuracyPercent,
  applyHit,
  applyMiss,
  calibrationOffset,
  clampOffset,
  comboMultiplier,
  firstIndexAtOrAfter,
  isFullCombo,
  judge,
  nearestNoteIndex,
  newRun,
  parseSave,
  recordBest,
  rhythmTier,
  runAccuracy,
  sweepMisses,
  tapLane,
} from './rhythmLogic';

const W = {
  easy: RHYTHM_DIFFICULTY_INFO.easy.windows,
  normal: RHYTHM_DIFFICULTY_INFO.normal.windows,
  hard: RHYTHM_DIFFICULTY_INFO.hard.windows,
};

/** Notes at 1 s, 2 s, 3 s … on lanes 0, 1, 2, 0 … */
const chart = (n: number): RhythmNote[] => Array.from({ length: n }, (_, i) => ({ t: i + 1, lane: (i % 3) as 0 | 1 | 2 }));

describe('judge — window boundaries', () => {
  for (const d of ['easy', 'normal', 'hard'] as const) {
    it(`${d}: ±perfect is perfect, one ms more is good; ±good is good, one ms more is miss`, () => {
      const w = W[d];
      expect(judge(0, d)).toBe('perfect');
      expect(judge(w.perfectMs, d)).toBe('perfect');
      expect(judge(-w.perfectMs, d)).toBe('perfect');
      expect(judge(w.perfectMs + 1, d)).toBe('good');
      expect(judge(-(w.perfectMs + 1), d)).toBe('good');
      expect(judge(w.goodMs, d)).toBe('good');
      expect(judge(-w.goodMs, d)).toBe('good');
      expect(judge(w.goodMs + 1, d)).toBe('miss');
      expect(judge(-(w.goodMs + 1), d)).toBe('miss');
    });
  }

  it('easy is more forgiving than hard', () => {
    const delta = W.hard.goodMs + 10;
    expect(judge(delta, 'hard')).toBe('miss');
    expect(judge(delta, 'easy')).not.toBe('miss');
  });
});

describe('combo and score', () => {
  it('hits build the combo, a miss resets it, maxCombo remembers the peak', () => {
    let run = newRun(6);
    run = applyHit(run, 0, 'perfect');
    run = applyHit(run, 1, 'good');
    run = applyHit(run, 2, 'perfect');
    expect(run.combo).toBe(3);
    run = applyMiss(run, 3);
    expect(run.combo).toBe(0);
    expect(run.maxCombo).toBe(3);
    run = applyHit(run, 4, 'perfect');
    expect(run.combo).toBe(1);
    expect(run.maxCombo).toBe(3);
    expect([run.perfect, run.good, run.miss]).toEqual([3, 1, 1]);
  });

  it('a note is judged only once — hit, miss, hit again: nothing after the first counts', () => {
    let run = newRun(2);
    run = applyHit(run, 0, 'perfect');
    const after = run;
    expect(applyHit(run, 0, 'perfect')).toBe(after);
    expect(applyMiss(run, 0)).toBe(after);
    expect(run.score).toBe(RHYTHM_POINTS.perfect);
    run = applyMiss(run, 1);
    expect(applyHit(run, 1, 'good')).toBe(run);
    expect(run.combo).toBe(0);
  });

  it('out-of-range indices are ignored', () => {
    const run = newRun(1);
    expect(applyHit(run, -1, 'perfect')).toBe(run);
    expect(applyMiss(run, 5)).toBe(run);
  });

  it('the multiplier steps up every 10 combo and caps', () => {
    expect(comboMultiplier(0)).toBe(1);
    expect(comboMultiplier(9)).toBe(1);
    expect(comboMultiplier(10)).toBe(2);
    expect(comboMultiplier(29)).toBe(3);
    expect(comboMultiplier(1000)).toBe(4);
    let run = newRun(10);
    for (let i = 0; i < 10; i++) run = applyHit(run, i, 'perfect');
    // nine at ×1, the tenth at ×2
    expect(run.score).toBe(9 * RHYTHM_POINTS.perfect + 2 * RHYTHM_POINTS.perfect);
  });

  it('does not mutate the run it was given', () => {
    const run = newRun(3);
    applyHit(run, 0, 'perfect');
    applyMiss(run, 1);
    expect(run.results).toEqual([null, null, null]);
    expect(run.combo).toBe(0);
  });
});

describe('taps', () => {
  const notes = chart(6); // lane 0 at 1 s and 4 s, lane 1 at 2 s and 5 s, lane 2 at 3 s and 6 s

  it('a tap on time takes the nearest note in that lane only', () => {
    const r = tapLane(notes, newRun(6), 1, 2000 + 20, 'normal');
    expect(r.index).toBe(1);
    expect(r.judgement).toBe('perfect');
    expect(r.run.results[1]).toBe('perfect');
    expect(tapLane(notes, newRun(6), 0, 2000, 'normal').judgement).toBeNull();
  });

  it('the same note cannot be taken twice (double tap)', () => {
    const first = tapLane(notes, newRun(6), 0, 1000, 'hard');
    const second = tapLane(notes, first.run, 0, 1010, 'hard');
    expect(second.judgement).toBeNull();
    expect(second.run).toBe(first.run);
    expect(second.run.perfect).toBe(1);
  });

  it('an EMPTY tap changes nothing and never breaks the combo', () => {
    let run = newRun(6);
    run = tapLane(notes, run, 0, 1000, 'normal').run;
    run = tapLane(notes, run, 1, 2000, 'normal').run;
    expect(run.combo).toBe(2);
    // lane 2's next note is at 3 s; 2.5 s is far outside every window
    for (const d of ['easy', 'normal', 'hard'] as const) {
      const r = tapLane(notes, run, 2, 2500, d);
      expect(r.judgement).toBeNull();
      expect(r.run).toBe(run);
      expect(r.run.combo).toBe(2);
    }
  });

  it('a late tap outside good is empty (the sweep will miss the note instead)', () => {
    const r = tapLane(notes, newRun(6), 0, 1000 + W.normal.goodMs + 1, 'normal');
    expect(r.judgement).toBeNull();
  });

  it('normal/hard: a tap just before the good window takes the note as a MISS', () => {
    const t = 1000 - W.normal.goodMs - Math.floor(W.normal.earlyMissMs / 2);
    const r = tapLane(notes, newRun(6), 0, t, 'normal');
    expect(r.judgement).toBe('miss');
    expect(r.run.results[0]).toBe('miss');
    // …and further than earlyMiss is still empty
    expect(tapLane(notes, newRun(6), 0, 1000 - W.normal.goodMs - W.normal.earlyMissMs - 1, 'normal').judgement).toBeNull();
  });

  it('easy: an early tap is ignored, the note stays hittable', () => {
    const early = tapLane(notes, newRun(6), 0, 1000 - W.easy.goodMs - 40, 'easy');
    expect(early.judgement).toBeNull();
    expect(tapLane(notes, early.run, 0, 1000, 'easy').judgement).toBe('perfect');
  });

  it('nearestNoteIndex prefers the closer of two candidates and skips judged notes', () => {
    const close: RhythmNote[] = [{ t: 1.0, lane: 0 }, { t: 1.1, lane: 0 }];
    expect(nearestNoteIndex(close, newRun(2), 0, 1080, 'easy')).toBe(1);
    const run = applyHit(newRun(2), 0, 'good');
    expect(nearestNoteIndex(close, run, 0, 1000, 'easy')).toBe(1);
  });

  it('firstIndexAtOrAfter is a correct binary search', () => {
    expect(firstIndexAtOrAfter(notes, 0)).toBe(0);
    expect(firstIndexAtOrAfter(notes, 2)).toBe(1);
    expect(firstIndexAtOrAfter(notes, 2.5)).toBe(2);
    expect(firstIndexAtOrAfter(notes, 99)).toBe(6);
  });
});

describe('sweepMisses — notes that pass the window', () => {
  const notes = chart(3);

  it('a note becomes a miss only after +goodMs, and only once', () => {
    let run = newRun(3);
    expect(sweepMisses(notes, run, 1000 + W.normal.goodMs, 'normal').missed).toEqual([]);
    const s = sweepMisses(notes, run, 1000 + W.normal.goodMs + 1, 'normal');
    expect(s.missed).toEqual([0]);
    run = s.run;
    const again = sweepMisses(notes, run, 1000 + W.normal.goodMs + 5, 'normal');
    expect(again.missed).toEqual([]);
    expect(again.run).toBe(run);
    expect(run.miss).toBe(1);
  });

  it('never touches a note that was hit', () => {
    let run = tapLane(notes, newRun(3), 0, 1000, 'normal').run;
    run = sweepMisses(notes, run, 10_000, 'normal').run;
    expect(run.results).toEqual(['perfect', 'miss', 'miss']);
    expect(run.maxCombo).toBe(1);
  });
});

describe('accuracy and tiers', () => {
  it('a GOOD counts half; unjudged notes count as missed', () => {
    let run = newRun(4);
    run = applyHit(run, 0, 'perfect');
    run = applyHit(run, 1, 'good');
    expect(runAccuracy(run)).toBeCloseTo(0.375);
    expect(accuracyPercent(run)).toBe(38);
    expect(runAccuracy(newRun(0))).toBe(0);
  });

  it('tier boundaries sit exactly on the thresholds', () => {
    const [t1, t2, t3] = RHYTHM_TIER_ACCURACY;
    expect(rhythmTier(0)).toBe(0);
    expect(rhythmTier(t1 - 0.001)).toBe(0);
    expect(rhythmTier(t1)).toBe(1);
    expect(rhythmTier(t2 - 0.001)).toBe(1);
    expect(rhythmTier(t2)).toBe(2);
    expect(rhythmTier(t3 - 0.001)).toBe(2);
    expect(rhythmTier(t3)).toBe(3);
    expect(rhythmTier(1)).toBe(3);
  });

  it('full combo = every note judged, none missed', () => {
    let run = newRun(2);
    run = applyHit(run, 0, 'good');
    expect(isFullCombo(run)).toBe(false);
    run = applyHit(run, 1, 'perfect');
    expect(isFullCombo(run)).toBe(true);
    expect(isFullCombo(applyMiss(applyHit(newRun(2), 0, 'good'), 1))).toBe(false);
  });
});

describe('latency offset and calibration', () => {
  it('clampOffset keeps the range and 5 ms steps', () => {
    expect(clampOffset(1000)).toBe(LATENCY_OFFSET.max);
    expect(clampOffset(-1000)).toBe(LATENCY_OFFSET.min);
    expect(clampOffset(42)).toBe(40);
    expect(clampOffset(Number.NaN)).toBe(LATENCY_OFFSET.default);
  });

  it('calibration drops the warm-up taps and takes the median', () => {
    expect(calibrationOffset([400, -300, 80, 90, 100, 110, 120])).toBe(100);
    expect(calibrationOffset([0, 0, 60, 70, 80, 1000])).toBe(75);
  });

  it('too few taps → null (keep the old offset)', () => {
    expect(calibrationOffset([10, 20, 30])).toBeNull();
    expect(calibrationOffset([])).toBeNull();
  });
});

describe('what is stored', () => {
  it('parseSave survives garbage and clamps the offset', () => {
    expect(parseSave(null)).toEqual({ offsetMs: LATENCY_OFFSET.default, best: {} });
    expect(parseSave('{nope')).toEqual({ offsetMs: LATENCY_OFFSET.default, best: {} });
    expect(parseSave('null')).toEqual({ offsetMs: LATENCY_OFFSET.default, best: {} });
    const s = parseSave(JSON.stringify({ offsetMs: 9999, best: { 'a:easy': { combo: 12, accuracy: 0.8 }, bad: { combo: 'x' } } }));
    expect(s.offsetMs).toBe(LATENCY_OFFSET.max);
    expect(s.best).toEqual({ 'a:easy': { combo: 12, accuracy: 0.8 } });
  });

  it('recordBest keeps the higher combo and flags only a beaten record', () => {
    const empty = parseSave(null);
    const first = recordBest(empty, 'a', 'easy', 10, 0.5);
    expect(first.newBest).toBe(false);
    expect(first.save.best['a:easy']).toEqual({ combo: 10, accuracy: 0.5 });
    const worse = recordBest(first.save, 'a', 'easy', 8, 0.9);
    expect(worse.save).toBe(first.save);
    const better = recordBest(first.save, 'a', 'easy', 11, 0.4);
    expect(better.newBest).toBe(true);
    expect(better.save.best['a:easy'].combo).toBe(11);
    // other difficulties are separate records
    expect(recordBest(better.save, 'a', 'hard', 1, 0.1).save.best['a:easy'].combo).toBe(11);
  });
});
