/**
 * Shuffle the answer options of quiz questions.
 * ================================================
 * The data files put the correct answer in the first or second slot far more often than
 * chance (books 42/51/9, school 165/146/48/1, academy a fixed 0-1-2 pattern). A child who
 * notices that passes every quiz without reading. So the UI never shows the stored order:
 * every question gets one random permutation, applied to both languages so switching
 * language mid-quiz keeps the same layout, and `correct` is remapped to follow its option.
 *
 * The question order itself is NOT changed — QuizEngine resumes saved progress by index.
 */
import type { QuizQuestion } from '../types';

export type Rng = () => number;

function permutation(n: number, rng: Rng): number[] {
  const p = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  return p;
}

export function shuffleQuestionOptions<T extends QuizQuestion>(question: T, rng: Rng = Math.random): T {
  const n = question.options.el.length;
  if (n < 2) return question;
  const p = permutation(n, rng); // new position i shows old option p[i]
  const pick = (opts: string[]) => p.map(i => opts[i] ?? '');
  return {
    ...question,
    options: { el: pick(question.options.el), en: pick(question.options.en) },
    correct: p.indexOf(question.correct),
  };
}

export function shuffleAllOptions<T extends QuizQuestion>(questions: T[], rng: Rng = Math.random): T[] {
  return questions.map(q => shuffleQuestionOptions(q, rng));
}
