/**
 * The Explorer must not pay the Academy's ladder for a walk.
 *
 * `QuizEngine` is shared by School, the standalone Quiz, the challenge flow and the
 * Explorer. The first three report `PASS_QUIZ`, which moves `stats.quizzesPassed`, the
 * Thinker and Scientist badges and the daily mission. The Explorer must not: its quizzes
 * are travel content being folded into WiseBot World, and World pays for a place in its
 * own XP through `useWorldProgress`.
 *
 * This reads the source rather than rendering, because the thing worth pinning is the one
 * prop at the call site — the failure mode is somebody deleting it while tidying, and a
 * rendered test of a 900-line quiz component would not say that any more clearly.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const read = (file: string) => readFileSync(join(__dirname, file), 'utf8');

describe('Explorer quizzes and the paid economy', () => {
  const explore = read('Explore.tsx');

  it('renders QuizEngine at all, so this test is still pointed at something', () => {
    expect(explore).toMatch(/<QuizEngine\b/);
  });

  it('tells QuizEngine not to report PASS_QUIZ', () => {
    expect(explore).toMatch(/countsAsQuizAction=\{false\}/);
  });

  it('never calls trackAction itself', () => {
    expect(explore).not.toMatch(/trackAction\s*\(/);
  });

  it('QuizEngine still defaults to reporting, so School and Quiz are untouched', () => {
    const engine = read('QuizEngine.tsx');
    expect(engine).toMatch(/countsAsQuizAction\s*=\s*true/);
    expect(engine).toMatch(/if \(countsAsQuizAction && totalScore > 0\) trackAction\('PASS_QUIZ'\)/);
  });

  it('School and the standalone Quiz do not opt out', () => {
    for (const file of ['School.tsx', 'Quiz.tsx']) {
      expect(read(file)).not.toMatch(/countsAsQuizAction/);
    }
  });
});
