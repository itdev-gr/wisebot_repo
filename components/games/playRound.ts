/**
 * THE ROUND CONTRACT
 * ==================
 * "Η Πρόκληση της Ημέρας" (`daily`) is not a game of its own: it stitches three
 * 30-second rounds out of games that already exist (Math Rush, Word Quest,
 * Difference Finder). This module is the only thing those rounds and the daily
 * shell agree on — types, no runtime behaviour beyond two constants, so it is
 * safe to import from a test, from a lazy chunk, or from `data/games/daily.ts`.
 *
 * A round component is a *deterministic slice* of a game:
 *   - it builds everything it shows from `seed` (via `utils/dailySeed`), never
 *     from `Math.random()` — otherwise two children get different challenges;
 *   - it runs for `ms` milliseconds and then calls `onDone` exactly once;
 *   - it renders both languages from `lang`, and draws no back button, no
 *     score card and no XP — the daily shell owns the frame, the final score
 *     and the single `grantGameReward` call for the whole challenge.
 *
 * Implementing a round inside an existing game:
 *
 *   export function MathRushRound({ seed, ms, lang, onDone }: PlayRoundProps) { ... }
 *   export default MathRushRound;   // the lazy import below needs a default
 *
 * Registering one (the list itself belongs in `data/games/daily.ts`):
 *
 *   const ROUNDS: RoundDescriptor[] = [{
 *     key: 'mathrush',
 *     label: { el: 'Πράξεις', en: 'Math' },
 *     load: () => import('../../components/games/MathRushRound'),
 *   }];
 */
import type { ComponentType } from 'react';

/** What a finished round reports: how many were right out of how many asked. */
export interface RoundResult {
  correct: number;
  total: number;
}

export interface PlayRoundProps {
  /** Deterministic seed for this round. Same seed ⇒ same questions, everywhere. */
  seed: number;
  /** Round length in milliseconds, e.g. 30000. */
  ms: number;
  lang: 'el' | 'en';
  /** Called exactly once, when the round ends (timer out or all items answered). */
  onDone: (result: RoundResult) => void;
}

export type RoundComponent = ComponentType<PlayRoundProps>;

export interface RoundDescriptor {
  /** Stable id — 'mathrush' | 'wordquest' | 'diff'. Used in storage and seeds. */
  key: string;
  label: { el: string; en: string };
  /** Lazy import of the round component, for `React.lazy`. */
  load: () => Promise<{ default: RoundComponent }>;
}

/** Default round length used by the daily challenge. */
export const DEFAULT_ROUND_MS = 30_000;

/** How many rounds make up one daily challenge. */
export const DAILY_ROUND_COUNT = 3;

/**
 * Per-round seed derived from the day seed, so a round that consumes a
 * different number of random values cannot shift the next round's content.
 */
export function roundSeed(daySeed: number, index: number): number {
  return (Math.imul(daySeed ^ (index + 1), 0x9e3779b1) >>> 0);
}

/** Sum of several rounds — the daily challenge's overall correct/total. */
export function totalResult(results: readonly RoundResult[]): RoundResult {
  return results.reduce<RoundResult>(
    (acc, r) => ({ correct: acc.correct + r.correct, total: acc.total + r.total }),
    { correct: 0, total: 0 },
  );
}
