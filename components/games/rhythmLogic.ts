/**
 * ΡΥΘΜΟΣ — the rules, pure (no React, no audio, no clock).
 *
 * Every function takes the song time it needs as an argument (ms of song
 * time); the component reads it from the AudioContext clock and nothing else.
 * Every run update returns a NEW run and leaves the old one untouched, and a
 * note that already has a result is never judged again — so a double tap, a
 * stale closure or a sweep racing a tap cannot count a note twice.
 *
 * EMPTY TAPS (decided): a tap with no note near it in that lane changes
 * nothing — no miss, no combo break. Children tap for fun between notes and
 * should not be punished for it. What stops hammering a lane from paying is
 * `earlyMissMs` (normal/hard): a tap just before the good window takes the
 * note as a MISS. On easy it is 0, so an early tap is only ignored.
 */
import {
  COMBO_MULTIPLIER,
  CALIBRATION,
  LATENCY_OFFSET,
  RHYTHM_DIFFICULTY_INFO,
  RHYTHM_POINTS,
  RHYTHM_TIER_ACCURACY,
  type RhythmDifficulty,
  type RhythmLane,
  type RhythmNote,
} from '../../data/games/rhythm';

export type Judgement = 'perfect' | 'good' | 'miss';

export interface RhythmRun {
  /** One slot per note: null until judged, then fixed forever. */
  results: readonly (Judgement | null)[];
  score: number;
  combo: number;
  maxCombo: number;
  perfect: number;
  good: number;
  miss: number;
}

export function newRun(noteCount: number): RhythmRun {
  return {
    results: new Array<Judgement | null>(noteCount).fill(null),
    score: 0,
    combo: 0,
    maxCombo: 0,
    perfect: 0,
    good: 0,
    miss: 0,
  };
}

/** |delta| inside perfect → perfect, inside good → good, else miss. */
export function judge(deltaMs: number, difficulty: RhythmDifficulty): Judgement {
  const w = RHYTHM_DIFFICULTY_INFO[difficulty].windows;
  const d = Math.abs(deltaMs);
  if (d <= w.perfectMs) return 'perfect';
  if (d <= w.goodMs) return 'good';
  return 'miss';
}

/** ×1 … ×max, one step up every `step` combo. */
export function comboMultiplier(combo: number): number {
  return Math.min(COMBO_MULTIPLIER.max, 1 + Math.floor(Math.max(0, combo) / COMBO_MULTIPLIER.step));
}

/** Note `index` was hit. No-op when it already has a result or is out of range. */
export function applyHit(run: RhythmRun, index: number, j: 'perfect' | 'good'): RhythmRun {
  if (index < 0 || index >= run.results.length || run.results[index] !== null) return run;
  const results = run.results.slice();
  results[index] = j;
  const combo = run.combo + 1;
  return {
    results,
    score: run.score + RHYTHM_POINTS[j] * comboMultiplier(combo),
    combo,
    maxCombo: Math.max(run.maxCombo, combo),
    perfect: run.perfect + (j === 'perfect' ? 1 : 0),
    good: run.good + (j === 'good' ? 1 : 0),
    miss: run.miss,
  };
}

/** Note `index` was missed: the combo resets. No-op when it already has a result. */
export function applyMiss(run: RhythmRun, index: number): RhythmRun {
  if (index < 0 || index >= run.results.length || run.results[index] !== null) return run;
  const results = run.results.slice();
  results[index] = 'miss';
  return { ...run, results, combo: 0, miss: run.miss + 1 };
}

/**
 * The unjudged note in `lane` closest to `songMs` that a tap there could
 * take: inside ±goodMs, or up to `earlyMissMs` before that on the early side.
 * −1 when there is none.
 */
export function nearestNoteIndex(
  notes: readonly RhythmNote[],
  run: RhythmRun,
  lane: RhythmLane,
  songMs: number,
  difficulty: RhythmDifficulty,
): number {
  const w = RHYTHM_DIFFICULTY_INFO[difficulty].windows;
  const earliest = songMs - w.goodMs; // note time must be ≥ this
  const latest = songMs + w.goodMs + w.earlyMissMs; // …and ≤ this
  let best = -1;
  let bestDist = Infinity;
  for (let i = firstIndexAtOrAfter(notes, earliest / 1000); i < notes.length; i++) {
    const tMs = notes[i].t * 1000;
    if (tMs > latest) break;
    if (notes[i].lane !== lane || run.results[i] !== null) continue;
    const dist = Math.abs(tMs - songMs);
    if (dist < bestDist) {
      best = i;
      bestDist = dist;
    }
  }
  return best;
}

export interface TapResult {
  run: RhythmRun;
  /** The note the tap took, or −1 for an empty tap. */
  index: number;
  /** null = empty tap: nothing changed. */
  judgement: Judgement | null;
}

/** A tap in `lane` at `songMs` (song time, latency already removed). */
export function tapLane(
  notes: readonly RhythmNote[],
  run: RhythmRun,
  lane: RhythmLane,
  songMs: number,
  difficulty: RhythmDifficulty,
): TapResult {
  const index = nearestNoteIndex(notes, run, lane, songMs, difficulty);
  if (index < 0) return { run, index: -1, judgement: null };
  const j = judge(songMs - notes[index].t * 1000, difficulty);
  return { run: j === 'miss' ? applyMiss(run, index) : applyHit(run, index, j), index, judgement: j };
}

/**
 * Every unjudged note whose good window has closed by `songMs` becomes a
 * MISS. Returns the same run object when nothing changed (cheap per frame).
 */
export function sweepMisses(
  notes: readonly RhythmNote[],
  run: RhythmRun,
  songMs: number,
  difficulty: RhythmDifficulty,
): { run: RhythmRun; missed: number[] } {
  const goodMs = RHYTHM_DIFFICULTY_INFO[difficulty].windows.goodMs;
  const missed: number[] = [];
  let next = run;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].t * 1000 + goodMs >= songMs) break;
    if (next.results[i] === null) {
      next = applyMiss(next, i);
      missed.push(i);
    }
  }
  return { run: next, missed };
}

/** Binary search: first note with t ≥ tSec. */
export function firstIndexAtOrAfter(notes: readonly RhythmNote[], tSec: number): number {
  let lo = 0;
  let hi = notes.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (notes[mid].t < tSec) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

export function isRunComplete(run: RhythmRun): boolean {
  return run.results.every((r) => r !== null);
}

/** 0–1 over ALL notes of the chart; a GOOD counts half, an unjudged note as a miss. */
export function runAccuracy(run: RhythmRun): number {
  const total = run.results.length;
  if (total === 0) return 0;
  return (run.perfect + run.good * 0.5) / total;
}

export function accuracyPercent(run: RhythmRun): number {
  return Math.round(runAccuracy(run) * 100);
}

export function isFullCombo(run: RhythmRun): boolean {
  return run.results.length > 0 && run.miss === 0 && isRunComplete(run);
}

/** XP tier 0–3 from accuracy. Only a finished song pays (the component calls this at the end). */
export function rhythmTier(accuracy: number): 0 | 1 | 2 | 3 {
  const [t1, t2, t3] = RHYTHM_TIER_ACCURACY;
  if (accuracy >= t3) return 3;
  if (accuracy >= t2) return 2;
  if (accuracy >= t1) return 1;
  return 0;
}

/* ──────────────────────────── latency offset ──────────────────────────── */

export function clampOffset(ms: number): number {
  if (!Number.isFinite(ms)) return LATENCY_OFFSET.default;
  const stepped = Math.round(ms / 5) * 5;
  return Math.min(LATENCY_OFFSET.max, Math.max(LATENCY_OFFSET.min, stepped));
}

/**
 * Tap-in-time calibration. `deltasMs` = each tap minus the click it was
 * nearest to (already corrected by the browser's reported latency). The
 * warm-up taps are dropped; the median of the rest is the offset. null when
 * there are too few taps to trust.
 */
export function calibrationOffset(deltasMs: readonly number[]): number | null {
  const usable = deltasMs.slice(CALIBRATION.skip).filter((d) => Number.isFinite(d));
  if (usable.length < CALIBRATION.minTaps) return null;
  const sorted = [...usable].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  const median = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  return clampOffset(median);
}

/* ──────────────────────────── what is stored ──────────────────────────── */

export interface RhythmBest {
  combo: number;
  accuracy: number;
}

export interface RhythmSave {
  offsetMs: number;
  /** Keyed `${songId}:${difficulty}`. */
  best: Record<string, RhythmBest>;
}

export const bestKey = (songId: string, d: RhythmDifficulty) => `${songId}:${d}`;

export function parseSave(raw: string | null): RhythmSave {
  const fresh: RhythmSave = { offsetMs: LATENCY_OFFSET.default, best: {} };
  if (!raw) return fresh;
  try {
    const v = JSON.parse(raw) as Partial<RhythmSave> | null;
    if (!v || typeof v !== 'object') return fresh;
    const best: Record<string, RhythmBest> = {};
    if (v.best && typeof v.best === 'object') {
      for (const [k, b] of Object.entries(v.best)) {
        if (b && typeof b.combo === 'number' && typeof b.accuracy === 'number' && b.combo >= 0) {
          best[k] = { combo: Math.floor(b.combo), accuracy: Math.min(1, Math.max(0, b.accuracy)) };
        }
      }
    }
    return { offsetMs: typeof v.offsetMs === 'number' ? clampOffset(v.offsetMs) : fresh.offsetMs, best };
  } catch {
    return fresh;
  }
}

/** Keeps the higher combo (accuracy breaks a tie). `newBest` only when an earlier record was beaten. */
export function recordBest(
  save: RhythmSave,
  songId: string,
  d: RhythmDifficulty,
  combo: number,
  accuracy: number,
): { save: RhythmSave; newBest: boolean } {
  const key = bestKey(songId, d);
  const prev = save.best[key];
  const better = !prev || combo > prev.combo || (combo === prev.combo && accuracy > prev.accuracy);
  if (!better) return { save, newBest: false };
  return {
    save: { ...save, best: { ...save.best, [key]: { combo, accuracy } } },
    newBest: !!prev && combo > prev.combo,
  };
}
