import type { SchoolGrade } from './schoolTypes';
import { GRADE_1 } from './schoolGrade1';
import { GRADE_2 } from './schoolGrade2';
import { GRADE_3 } from './schoolGrade3';
import { GRADE_4 } from './schoolGrade4';
import { GRADE_5 } from './schoolGrade5';
import { GRADE_6 } from './schoolGrade6';
import { ENGLISH_BY_GRADE } from './schoolEnglish';

/** Full Greek primary-school curriculum (Α'–ΣΤ' Δημοτικού), gamified as quizzes. */
export const SCHOOL_CURRICULUM: SchoolGrade[] = [
  GRADE_1, GRADE_2, GRADE_3, GRADE_4, GRADE_5, GRADE_6,
].map(g => ({
  ...g,
  subjects: [...g.subjects, ENGLISH_BY_GRADE[g.grade]],
}));

export type { SchoolGrade, SchoolSubject } from './schoolTypes';
