/**
 * DAILY CHALLENGE — the pure logic
 * ================================
 * Everything about «Η Πρόκληση της Ημέρας» that can be decided without a DOM:
 * which rounds today draws, how three unequal rounds become one 0–10 score,
 * how that score becomes an XP tier, and how the streak moves from one Athens
 * day to the next.
 *
 * It lives apart from `DailyChallenge.tsx` for two reasons. It is the half that
 * is worth testing (`dailyChallenge.test.ts` imports only this file and
 * `data/games/daily.ts`, so the suite never mounts a round), and the streak is
 * the one piece of state a child would actually be upset to lose — it deserves
 * rules that are written down and asserted, not scattered through effects.
 *
 * No React, no DOM apart from the two localStorage wrappers at the bottom,
 * which never throw.
 */
import { mulberry32, seedFromDayKey, seededPick } from '../../utils/dailySeed';
import type { RoundResult } from './playRound';
import {
  DAILY_STORAGE_KEY,
  MAX_SCORE,
  ROUNDS_PER_DAY,
  SCORE_TIERS,
  PRAISE_STEPS,
} from '../../data/games/daily';

/* ───────────────────────────── day key maths ───────────────────────────── */

const DAY_KEY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const MS_PER_DAY = 86_400_000;

/** True for a well-formed, real calendar date in 'YYYY-MM-DD' form. */
export function isDayKey(value: unknown): value is string {
  return typeof value === 'string' && parseDayKey(value) !== null;
}

/** 'YYYY-MM-DD' → UTC midnight in ms, or null when the date is not real. */
function parseDayKey(key: string): number | null {
  const m = DAY_KEY_RE.exec(key);
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  const ms = Date.UTC(year, month - 1, day);
  const d = new Date(ms);
  // Rejects '2026-02-31' and friends, which Date.UTC would roll into March.
  if (d.getUTCFullYear() !== year || d.getUTCMonth() !== month - 1 || d.getUTCDate() !== day) {
    return null;
  }
  return ms;
}

/**
 * Whole days from `from` to `to` (negative when `to` is earlier), or null if
 * either key is malformed.
 *
 * Both keys are read as UTC midnight, so the answer is a pure calendar
 * difference: the Greek DST switch on 2026-03-29 is still exactly one day
 * after 2026-03-28, and no streak is ever lost to a 23-hour day.
 */
export function dayKeyDiff(from: string, to: string): number | null {
  const a = parseDayKey(from);
  const b = parseDayKey(to);
  if (a === null || b === null) return null;
  return Math.round((b - a) / MS_PER_DAY);
}

/* ───────────────────────────── round picking ───────────────────────────── */

/**
 * The rounds for one day, in the order they will be played.
 *
 * Pure in `dayKey`: every device that agrees on the Athens date agrees on the
 * three rounds and their order. With today's three-round pool the *set* is
 * always the same and it is the order that turns over; add a fourth round to
 * `DAILY_ROUND_POOL` and the selection starts varying too.
 */
export function pickRoundsForDay<T>(
  dayKey: string,
  pool: readonly T[],
  count: number = ROUNDS_PER_DAY,
): T[] {
  if (!pool.length || count <= 0) return [];
  const rng = mulberry32(seedFromDayKey(dayKey));
  return seededPick(rng, pool, count);
}

/* ──────────────────────────────── scoring ─────────────────────────────── */

function clamp01(n: number): number {
  if (!Number.isFinite(n) || n <= 0) return 0;
  return n > 1 ? 1 : n;
}

/**
 * One round as a 0–1 ratio.
 *
 * `target` (from `DAILY_ROUND_POOL`) is how many correct answers make a
 * perfect round. Without it we fall back to the round's own denominator, which
 * is right for the fixed-length rounds and merely lenient for the open-ended
 * one — never a crash, never NaN.
 */
export function roundRatio(result: RoundResult | null | undefined, target?: number): number {
  if (!result) return 0;
  const correct = Number(result.correct);
  if (!Number.isFinite(correct) || correct <= 0) return 0;
  const denominator = typeof target === 'number' && Number.isFinite(target) && target > 0
    ? target
    : Number(result.total);
  if (!Number.isFinite(denominator) || denominator <= 0) return 0;
  return clamp01(correct / denominator);
}

/**
 * The three rounds as one score on the brief's 0–10 scale: the mean of the
 * per-round ratios, rounded.
 *
 * Averaging ratios (rather than summing correct answers) is what keeps the
 * rounds comparable — 8 sums in Math Rush and 4 differences in Spot It both
 * mean "this round went perfectly", and neither drowns out the other.
 */
export function normaliseScore(
  results: readonly RoundResult[],
  targets?: readonly number[],
): number {
  if (!results.length) return 0;
  let sum = 0;
  for (let i = 0; i < results.length; i++) {
    sum += roundRatio(results[i], targets?.[i]);
  }
  const score = Math.round((sum / results.length) * MAX_SCORE);
  return Math.min(MAX_SCORE, Math.max(0, score));
}

/** Score (0–10) → `grantGameReward` tier. 0 means "no XP for this run". */
export function scoreToTier(score: number): 0 | 1 | 2 | 3 {
  if (!Number.isFinite(score)) return 0;
  for (const step of SCORE_TIERS) {
    if (score >= step.minScore) return step.tier;
  }
  return 0;
}

/** Score (0–10) → the praise line, in the requested language. */
export function scorePraise(score: number, lang: 'el' | 'en'): string {
  const safe = Number.isFinite(score) ? score : 0;
  for (const step of PRAISE_STEPS) {
    if (safe >= step.minScore) return step[lang];
  }
  return PRAISE_STEPS[PRAISE_STEPS.length - 1][lang];
}

/* ───────────────────────────────── streak ─────────────────────────────── */

/** What `DAILY_STORAGE_KEY` holds. One record, overwritten once a day. */
export interface DailyStreak {
  /** Athens day key of the last *counted* run, 'YYYY-MM-DD'. */
  lastDayKey: string;
  /** Consecutive days ending at `lastDayKey`. Always ≥ 1. */
  streak: number;
  /** Longest streak ever reached on this device. */
  bestStreak: number;
  /** Score (0–10) of the run on `lastDayKey`. */
  lastScore: number;
}

function toCount(value: unknown, min: number): number {
  const n = Math.floor(Number(value));
  return Number.isFinite(n) && n >= min ? n : min;
}

/**
 * A stored value turned into a record we can reason about, or null.
 *
 * Anything unusable — another app's key, a half-written JSON blob, a
 * hand-edited date — becomes null, and the child simply starts a fresh streak
 * rather than meeting a NaN.
 */
export function sanitiseStreak(stored: unknown): DailyStreak | null {
  if (!stored || typeof stored !== 'object') return null;
  const raw = stored as Partial<DailyStreak>;
  if (!isDayKey(raw.lastDayKey)) return null;
  const streak = toCount(raw.streak, 1);
  return {
    lastDayKey: raw.lastDayKey,
    streak,
    bestStreak: Math.max(streak, toCount(raw.bestStreak, 1)),
    lastScore: Math.min(MAX_SCORE, toCount(raw.lastScore, 0)),
  };
}

/** Has the child already had a counted run on `dayKey`? */
export function hasPlayedOn(stored: unknown, dayKey: string): boolean {
  const prev = sanitiseStreak(stored);
  return !!prev && prev.lastDayKey === dayKey;
}

/**
 * The streak record after a counted run on `dayKey`.
 *
 * - same day as the stored record → returned **unchanged**. Replaying today
 *   must never bump the streak (and the caller must not grant XP again);
 * - exactly one day later → +1;
 * - a gap of two or more days → back to 1;
 * - a stored key in the future (the device clock moved backwards) or a
 *   corrupt one → also 1, because there is no honest streak to continue;
 * - `bestStreak` only ever grows.
 */
export function nextStreak(
  stored: unknown,
  dayKey: string,
  score: number = 0,
): DailyStreak {
  const prev = sanitiseStreak(stored);
  if (prev && prev.lastDayKey === dayKey) return prev;

  const diff = prev ? dayKeyDiff(prev.lastDayKey, dayKey) : null;
  const streak = prev && diff === 1 ? prev.streak + 1 : 1;
  const safeScore = Math.min(MAX_SCORE, Math.max(0, Math.round(Number(score) || 0)));

  return {
    lastDayKey: dayKey,
    streak,
    bestStreak: Math.max(streak, prev ? prev.bestStreak : 0),
    lastScore: safeScore,
  };
}

/**
 * The streak to *show* on `dayKey`.
 *
 * A record from three days ago still says `streak: 5`, but that streak is over
 * — showing «🔥 5 ΜΕΡΕΣ ΣΕΡΙ» on the intro screen would be a lie the next run
 * immediately contradicts. Alive means the last run was today or yesterday.
 */
export function displayStreak(stored: unknown, dayKey: string): number {
  const prev = sanitiseStreak(stored);
  if (!prev) return 0;
  const diff = dayKeyDiff(prev.lastDayKey, dayKey);
  return diff === 0 || diff === 1 ? prev.streak : 0;
}

/* ──────────────────────────────── storage ─────────────────────────────── */

/** Read the streak record. Never throws (private mode, disabled storage). */
export function readStreak(): DailyStreak | null {
  try {
    const raw = localStorage.getItem(DAILY_STORAGE_KEY);
    return raw ? sanitiseStreak(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

/** Persist the streak record. Never throws. */
export function writeStreak(record: DailyStreak): void {
  try {
    localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage full or blocked — the run still counted on screen; the streak
    // simply cannot be remembered. Not worth interrupting a child over.
  }
}
