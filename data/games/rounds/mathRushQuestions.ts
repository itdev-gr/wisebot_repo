/**
 * MATH RUSH — the seeded question ladder
 * ======================================
 * The 30" Math Rush round of «Η Πρόκληση της Ημέρας» has to ask *every* child
 * the same questions in the same order, so the arithmetic that `MathRush.tsx`
 * rolls with `Math.random()` is rebuilt here as a pure function of a seed.
 *
 * Two deliberate differences from `MathRush.makeQuestion(score)`:
 *
 *   1. **The ramp follows the question index, not the live score.** In the
 *      60" game the next question depends on how many the child has already
 *      got right, which would make the daily round depend on the answers —
 *      two children would see different questions from the same seed. Here
 *      question *n* is always the same question, and the thresholds (5 / 10 /
 *      16) are kept exactly as the game has them, just read off the index.
 *   2. **Each question gets its own PRNG stream**, derived from the seed and
 *      the index. A question that happens to consume one extra random value
 *      (the ± choice, an unlucky distractor) therefore cannot shift the
 *      content of every question after it — and a future tweak to the hard
 *      tier leaves the easy openers byte-for-byte identical.
 *
 * Nothing in here touches React, the DOM or `Math.random()`, so it is cheap to
 * test and safe to call during render.
 */
import { mulberry32, seededInt, seededShuffle } from '../../../utils/dailySeed';

export interface MathQuestion {
  /** What the child reads, e.g. '7 + 8' or '42 − 17'. */
  text: string;
  answer: number;
  /** Four distinct, non-negative options in a seeded order; one is `answer`. */
  options: number[];
}

/**
 * How many questions a round pre-builds. A 30" round is answered at roughly
 * 1.5–2.5" a question, so 40 is far more than any child reaches; building them
 * all up front costs well under a millisecond and keeps the round free of any
 * work between questions.
 */
export const ROUND_QUESTION_COUNT = 40;

/** Options per question, as in Math Rush. */
const OPTION_COUNT = 4;

/**
 * Per-question seed: mixes the round seed with the index and avalanches, so
 * neighbouring questions are unrelated and independent of each other.
 */
export function questionSeed(seed: number, index: number): number {
  let h = (seed ^ Math.imul(index + 1, 0x9e3779b1)) >>> 0;
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

/**
 * The four options: the answer plus three plausible distractors within ±10,
 * exactly the spread Math Rush uses so a wrong tap is a real mistake and not a
 * typo. The loop is bounded — an answer of 0 only has ten legal distractors
 * above it, and a child must never meet a frozen screen — and the sequential
 * fill afterwards guarantees four distinct non-negative options either way.
 */
function buildOptions(rng: () => number, answer: number): number[] {
  const opts = new Set<number>([answer]);
  for (let guard = 0; opts.size < OPTION_COUNT && guard < 64; guard++) {
    const delta = seededInt(rng, 1, 10) * (rng() > 0.5 ? 1 : -1);
    const candidate = answer + delta;
    if (candidate >= 0) opts.add(candidate);
  }
  for (let fill = answer + 1; opts.size < OPTION_COUNT; fill++) {
    if (fill >= 0) opts.add(fill);
  }
  return seededShuffle(rng, [...opts]);
}

/**
 * One question at position `index` of the ladder, drawn from `rng`.
 * Tiers mirror `MathRush.makeQuestion`: addition → addition/subtraction →
 * small multiplication → mixed hard multiplication/subtraction.
 */
export function makeSeededQuestion(rng: () => number, index: number): MathQuestion {
  let a: number;
  let b: number;
  let answer: number;
  let text: string;

  if (index < 5) {
    a = seededInt(rng, 1, 10);
    b = seededInt(rng, 1, 10);
    answer = a + b;
    text = `${a} + ${b}`;
  } else if (index < 10) {
    a = seededInt(rng, 5, 20);
    b = seededInt(rng, 1, a);
    if (rng() > 0.5) {
      answer = a + b;
      text = `${a} + ${b}`;
    } else {
      // b ≤ a, so this never goes negative.
      answer = a - b;
      text = `${a} − ${b}`;
    }
  } else if (index < 16) {
    a = seededInt(rng, 2, 9);
    b = seededInt(rng, 2, 9);
    answer = a * b;
    text = `${a} × ${b}`;
  } else if (rng() > 0.5) {
    a = seededInt(rng, 3, 12);
    b = seededInt(rng, 3, 12);
    answer = a * b;
    text = `${a} × ${b}`;
  } else {
    a = seededInt(rng, 20, 99);
    b = seededInt(rng, 10, a);
    answer = a - b;
    text = `${a} − ${b}`;
  }

  return { text, answer, options: buildOptions(rng, answer) };
}

/**
 * The whole ladder for one round. Pure: the same seed always returns the same
 * questions, in the same order, with the same options in the same positions —
 * on any device, in any timezone, in either language.
 */
export function buildMathRushQuestions(seed: number, count: number = ROUND_QUESTION_COUNT): MathQuestion[] {
  const total = Math.max(0, Math.floor(count));
  const out: MathQuestion[] = [];
  for (let i = 0; i < total; i++) {
    out.push(makeSeededQuestion(mulberry32(questionSeed(seed, i)), i));
  }
  return out;
}
