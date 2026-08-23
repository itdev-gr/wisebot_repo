/**
 * Quiz best merge logic — the invariant is the one saveQuizBest (QuizEngine) established:
 * a stored best run is only ever replaced by a strictly better score/total ratio. These
 * tests pin that down for the cloud sync, because a regression here silently lowers a
 * child's School stars or resurrects them wrongly across devices.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  isBetterQuizBest,
  mergeQuizBests,
  readLocalQuizBests,
  writeLocalQuizBests,
  type QuizBestEntry,
} from './syncService';

const entry = (score: number, total: number, timestamp = 1000): QuizBestEntry =>
  ({ score, total, timestamp });

describe('isBetterQuizBest', () => {
  it('beats a missing incumbent', () => {
    expect(isBetterQuizBest(entry(0, 4), null)).toBe(true);
  });

  it('wins only on a strictly higher ratio', () => {
    expect(isBetterQuizBest(entry(3, 4), entry(2, 4))).toBe(true);
    expect(isBetterQuizBest(entry(2, 4), entry(3, 4))).toBe(false);
    expect(isBetterQuizBest(entry(3, 4), entry(3, 4))).toBe(false); // tie → keep incumbent
  });

  it('compares ratios, not raw scores', () => {
    // 9/12 = 75% loses to 4/4 = 100%
    expect(isBetterQuizBest(entry(9, 12), entry(4, 4))).toBe(false);
    // 4/4 = 100% beats 11/12
    expect(isBetterQuizBest(entry(4, 4), entry(11, 12))).toBe(true);
  });

  it('rejects invalid candidates and replaces invalid incumbents', () => {
    expect(isBetterQuizBest(entry(5, 4), entry(1, 4))).toBe(false);  // score > total
    expect(isBetterQuizBest(entry(-1, 4), null)).toBe(false);
    expect(isBetterQuizBest(entry(1, 0), null)).toBe(false);
    expect(isBetterQuizBest(entry(1.5, 4), null)).toBe(false);       // non-integer
    expect(isBetterQuizBest(entry(2, 4), entry(3, 0))).toBe(true);   // incumbent junk
  });
});

describe('mergeQuizBests', () => {
  it('takes the better run per key, never lowering either side', () => {
    const local = { a: entry(3, 4), b: entry(1, 4), onlyLocal: entry(2, 4) };
    const cloud = { a: entry(2, 4), b: entry(4, 4), onlyCloud: entry(3, 4) };
    expect(mergeQuizBests(local, cloud)).toEqual({
      a: entry(3, 4),        // local better
      b: entry(4, 4),        // cloud better
      onlyLocal: entry(2, 4),
      onlyCloud: entry(3, 4),
    });
  });

  it('keeps the local entry on a tie', () => {
    const local = { a: entry(3, 4, 111) };
    const cloud = { a: entry(3, 4, 222) };
    expect(mergeQuizBests(local, cloud).a.timestamp).toBe(111);
  });

  it('drops invalid entries from both sides', () => {
    const local = { bad: entry(9, 4), ok: entry(2, 4) };
    const cloud = { bad2: entry(1, 0) };
    expect(mergeQuizBests(local, cloud)).toEqual({ ok: entry(2, 4) });
  });
});

describe('localStorage round trip', () => {
  beforeEach(() => localStorage.clear());

  it('reads only wb_quiz_best_* keys and skips corrupt ones', () => {
    localStorage.setItem('wb_quiz_best_school-g1-math-u1', JSON.stringify(entry(3, 4)));
    localStorage.setItem('wb_quiz_best_corrupt', '{not json');
    localStorage.setItem('wb_quiz_best_junk', JSON.stringify(entry(9, 4)));
    localStorage.setItem('wb_quiz_progress_school-g1-math-u1', JSON.stringify({ x: 1 }));
    localStorage.setItem('wb_xp', '120');
    expect(readLocalQuizBests()).toEqual({ 'school-g1-math-u1': entry(3, 4) });
  });

  it('writes entries back under the QuizEngine prefix', () => {
    writeLocalQuizBests({ 'school-g1-exam': entry(10, 12, 5) });
    expect(JSON.parse(localStorage.getItem('wb_quiz_best_school-g1-exam')!)).toEqual(entry(10, 12, 5));
  });

  it('merge → write leaves getQuizBest-visible state never lower than before', () => {
    localStorage.setItem('wb_quiz_best_a', JSON.stringify(entry(3, 4)));
    const merged = mergeQuizBests(readLocalQuizBests(), { a: entry(2, 4), b: entry(1, 4) });
    writeLocalQuizBests(merged);
    expect(JSON.parse(localStorage.getItem('wb_quiz_best_a')!)).toEqual(entry(3, 4));
    expect(JSON.parse(localStorage.getItem('wb_quiz_best_b')!)).toEqual(entry(1, 4));
  });
});
