/**
 * WiseBot World — the old Explorer's stamps, read-only.
 * =====================================================
 * Before World, families played Explorer: one city at a time, an envelope per spot, a
 * quiz behind each envelope, and a city stamp once enough envelopes were open. Every one
 * of those cities now lives inside World, but the stamps a family earned stay where
 * Explorer wrote them — `wb_explore_<city>` for the envelopes and `wb_quiz_best_explore-
 * <city>-<spot>` for the quizzes — and the World passport, which reads
 * `wb_world_progress` only, opened blank for a child who had walked all of Porto.
 *
 * This file turns those old records into a list the stamp book can print. It is a pure
 * function over a reader: hand it `localStorage.getItem` and it reads the device, hand
 * it a map and a test needs no storage at all.
 *
 * Four rules, the same ones the rest of World lives by:
 *
 *  1. **Nothing is written, nothing is awarded.** No XP, no World stamp, no migration.
 *     The old records are shown as they are; the World passport stays untouched. If the
 *     owner ever wants the old stamps to become World stamps, that is a separate decision
 *     and a separate file — this one only counts.
 *  2. **Every record is treated as possibly wrong.** Corrupt JSON, a missing `opened`,
 *     an `at` that is a string or NaN, a reader that throws in a private window: none of
 *     it may blank the passport. A city whose record cannot be read is simply absent.
 *  3. **The rules are Explorer's, not new ones.** A spot counts once its envelope is open
 *     AND its quiz was passed (one star, half the answers right — `getQuizStars` in
 *     `components/QuizEngine.tsx`); the stamp needs all spots but two (`cityBadgeNeed`
 *     in `data/explore/progress.ts`); the stamp's date is the moment the N-th counting
 *     envelope opened (`cityStamp` in `data/explore/passport.ts`). Both rules are
 *     re-stated here rather than imported because the originals read `localStorage`
 *     directly and would drag `QuizEngine.tsx` into the World chunk; the test file pins
 *     this file's numbers to theirs so the two cannot drift apart unnoticed.
 *  4. **The city list is Explorer's registry.** Only cities in `CITY_META` are looked
 *     up, so a stray `wb_explore_atlantis` key is ignored rather than printed.
 */

import { CITY_META, flagEmoji } from '../../data/explore/registry';
import type { LocalizedString } from '../../types';

/** `localStorage.getItem`'s shape. A test hands in a map; the app hands in storage. */
export type StorageReader = (key: string) => string | null;

export interface LegacyCityStamp {
  cityId: string;
  /** Explorer's names were Greek and English only; `say()` falls back to English. */
  name: LocalizedString;
  country: LocalizedString;
  countryCode: string;
  flag: string;
  emoji: string;
  /** Envelopes opened, whatever became of their quiz. */
  spotsOpened: number;
  /** Envelopes that counted towards the stamp: opened AND quiz passed. */
  spotsDone: number;
  /** Spots the city has in total. */
  spotCount: number;
  /** Counting envelopes the stamp needed. */
  need: number;
  /** The city stamp was earned. */
  stamped: boolean;
  /**
   * When the N-th counting envelope opened, in ms since the epoch — the date Explorer's
   * own passport printed. `null` when the stamp was not earned, and also when it WAS
   * earned but one of the counting envelopes carries a date that cannot be read: an
   * unknown date is printed as unknown, never as today.
   */
  stampedAt: number | null;
  /** The latest readable envelope date, ms; the sort key for a city without a stamp. */
  lastOpenedAt: number | null;
}

const EXPLORE_KEY = 'wb_explore_';
const QUIZ_BEST_KEY = 'wb_quiz_best_';

/** Mirrors `spotQuizId` in `data/explore/progress.ts` — the quiz category per spot. */
const quizKey = (cityId: string, spotId: string): string =>
  `${QUIZ_BEST_KEY}explore-${cityId}-${spotId}`;

/** Mirrors `cityBadgeNeed` in `data/explore/progress.ts`: all spots but two, never fewer than one. */
export const legacyNeed = (spotCount: number): number =>
  Math.max(1, (Number.isFinite(spotCount) ? spotCount : 0) - 2);

const isRecord = (x: unknown): x is Record<string, unknown> =>
  typeof x === 'object' && x !== null && !Array.isArray(x);

/** A timestamp Explorer could have written: a finite, positive number of milliseconds. */
const readableAt = (x: unknown): number | null =>
  typeof x === 'number' && Number.isFinite(x) && x > 0 ? x : null;

/** One `getItem`, with the reader itself treated as something that can throw. */
function safeRead(read: StorageReader, key: string): string | null {
  try {
    const v = read(key);
    return typeof v === 'string' ? v : null;
  } catch {
    return null;
  }
}

function parseJson(raw: string | null): unknown {
  if (raw === null) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Mirrors the one-star line of `getQuizStars` in `components/QuizEngine.tsx`: a best run
 * with at least half the answers right. Anything unreadable is a run that never happened.
 */
export const legacyQuizPassed = (raw: string | null): boolean => {
  const best = parseJson(raw);
  if (!isRecord(best)) return false;
  const { score, total } = best;
  if (typeof score !== 'number' || typeof total !== 'number') return false;
  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return false;
  return score / total >= 0.5;
};

/**
 * Every old city the family touched, oldest first.
 *
 * A city is listed when at least one envelope was opened. The order is by date — the
 * stamp's date for a stamped city, the last envelope's for the rest — earliest first,
 * the way pages fill a real passport. Cities with no readable date at all go last, in
 * registry order, and the sort is stable so two cities on one day keep that order too.
 */
export function legacyStamps(read: StorageReader): LegacyCityStamp[] {
  const out: LegacyCityStamp[] = [];

  for (const meta of CITY_META) {
    const record = parseJson(safeRead(read, EXPLORE_KEY + meta.id));
    if (!isRecord(record)) continue;
    const opened = isRecord(record.opened) ? record.opened : {};
    const spotIds = Object.keys(opened);
    if (spotIds.length === 0) continue;

    const doneAt: (number | null)[] = [];
    let lastOpenedAt: number | null = null;
    for (const spotId of spotIds) {
      const entry = opened[spotId];
      const at = readableAt(isRecord(entry) ? entry.at : null);
      if (at !== null && (lastOpenedAt === null || at > lastOpenedAt)) lastOpenedAt = at;
      if (legacyQuizPassed(safeRead(read, quizKey(meta.id, spotId)))) doneAt.push(at);
    }

    const need = legacyNeed(meta.spotCount);
    const stamped = doneAt.length >= need;
    // The N-th counting envelope's date is known only when every counting envelope up
    // to it is dated; a single unreadable one makes the ordering — and the date — a
    // guess, and a guess is not printed on a stamp.
    const dated = doneAt.filter((at): at is number => at !== null).sort((a, b) => a - b);
    const stampedAt = stamped && dated.length === doneAt.length ? dated[need - 1] : null;

    out.push({
      cityId: meta.id,
      name: meta.name,
      country: meta.country,
      countryCode: meta.countryCode,
      flag: flagEmoji(meta.countryCode),
      emoji: meta.emoji,
      spotsOpened: spotIds.length,
      spotsDone: doneAt.length,
      spotCount: meta.spotCount,
      need,
      stamped,
      stampedAt,
      lastOpenedAt,
    });
  }

  const key = (s: LegacyCityStamp): number | null => s.stampedAt ?? s.lastOpenedAt;
  return out.sort((a, b) => {
    const ka = key(a);
    const kb = key(b);
    if (ka === null && kb === null) return 0;
    if (ka === null) return 1;
    if (kb === null) return -1;
    return ka - kb;
  });
}

/**
 * The device's own records. Storage access is wrapped because a private window throws
 * on the read itself, not only on a write.
 */
export function readLegacyStamps(): LegacyCityStamp[] {
  return legacyStamps((key) => {
    try {
      return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    } catch {
      return null;
    }
  });
}

/**
 * A millisecond timestamp as the child's local ISO day, `YYYY-MM-DD` — the same shape
 * `today()` in `worldProgressStore.ts` writes, so `formatIsoDate` prints it in the six
 * languages exactly as it prints a World date.
 */
export function legacyDay(ms: number): string {
  const d = new Date(ms);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
