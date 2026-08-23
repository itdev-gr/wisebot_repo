/**
 * Which units have questions. key = '<grade>/<subject>/<unit>'.
 * Regenerate with: node scripts/school-units.mjs registry   (then paste) — every entry is
 * validated by data/schoolData.test.ts, and `node scripts/school-units.mjs audit` checks
 * each file's questions.
 */
import type { QuizQuestion } from '../../types';
import { GRADE3_GREEK_ADJECTIVES } from './grade3/greek-adjectives';
import { GRADE3_GREEK_NOUNS_ARTICLES } from './grade3/greek-nouns-articles';
import { GRADE3_GREEK_PUNCTUATION } from './grade3/greek-punctuation';
import { GRADE3_GREEK_READING_WRITING } from './grade3/greek-reading-writing';
import { GRADE3_GREEK_SPELLING_ACCENT } from './grade3/greek-spelling-accent';
import { GRADE3_GREEK_SYLLABIFICATION } from './grade3/greek-syllabification';
import { GRADE3_GREEK_VERBS_TENSES } from './grade3/greek-verbs-tenses';
import { GRADE3_MATH_ADD_SUBTRACT } from './grade3/math-add-subtract';
import { GRADE3_MATH_DECIMALS } from './grade3/math-decimals';
import { GRADE3_MATH_DIVISION } from './grade3/math-division';
import { GRADE3_MATH_FRACTIONS } from './grade3/math-fractions';
import { GRADE3_MATH_MEASURE_GEOMETRY } from './grade3/math-measure-geometry';
import { GRADE3_MATH_MULTIPLICATION } from './grade3/math-multiplication';
import { GRADE3_MATH_NUMBERS_1000 } from './grade3/math-numbers-1000';

export const UNIT_QUESTIONS: Record<string, QuizQuestion[]> = {
  '3/greek/adjectives': GRADE3_GREEK_ADJECTIVES,
  '3/greek/nouns-articles': GRADE3_GREEK_NOUNS_ARTICLES,
  '3/greek/punctuation': GRADE3_GREEK_PUNCTUATION,
  '3/greek/reading-writing': GRADE3_GREEK_READING_WRITING,
  '3/greek/spelling-accent': GRADE3_GREEK_SPELLING_ACCENT,
  '3/greek/syllabification': GRADE3_GREEK_SYLLABIFICATION,
  '3/greek/verbs-tenses': GRADE3_GREEK_VERBS_TENSES,
  '3/math/add-subtract': GRADE3_MATH_ADD_SUBTRACT,
  '3/math/decimals': GRADE3_MATH_DECIMALS,
  '3/math/division': GRADE3_MATH_DIVISION,
  '3/math/fractions': GRADE3_MATH_FRACTIONS,
  '3/math/measure-geometry': GRADE3_MATH_MEASURE_GEOMETRY,
  '3/math/multiplication': GRADE3_MATH_MULTIPLICATION,
  '3/math/numbers-1000': GRADE3_MATH_NUMBERS_1000,
};
