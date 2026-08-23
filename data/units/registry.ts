/**
 * Which units have questions. One line per written unit; key = '<grade>/<subject>/<unit>'.
 * Add a line here when a unit file is finished — the test in data/schoolData.test.ts
 * validates every entry.
 */
import type { QuizQuestion } from '../../types';
import { GRADE3_MATH_MULTIPLICATION } from './grade3/math-multiplication';

export const UNIT_QUESTIONS: Record<string, QuizQuestion[]> = {
  '3/math/multiplication': GRADE3_MATH_MULTIPLICATION,
};
