import type { SchoolGrade } from './schoolTypes';
import { GRADE_1 } from './schoolGrade1';
import { GRADE_2 } from './schoolGrade2';
import { GRADE_3 } from './schoolGrade3';
import { GRADE_4 } from './schoolGrade4';
import { GRADE_5 } from './schoolGrade5';
import { GRADE_6 } from './schoolGrade6';
import { ENGLISH_BY_GRADE } from './schoolEnglish';

import { CURRICULUM_UNITS, SUBJECT_META, type SubjectId } from './units/curriculum';

/**
 * Attach the unit skeleton (data/units/curriculum.ts) to each grade:
 * - a subject the grade already defines gets `units`, keeping its flat pool as-is;
 * - a subject only the skeleton knows (e.g. Ιστορία in Ε') is added once at least one of
 *   its units has questions — empty subjects never show.
 */
const withUnits = (g: SchoolGrade): SchoolGrade => {
  const skeleton = CURRICULUM_UNITS[g.grade] || {};
  const subjects = g.subjects.map(s => {
    const units = skeleton[s.id as SubjectId];
    return units ? { ...s, units } : s;
  });
  for (const [sid, units] of Object.entries(skeleton) as [SubjectId, typeof skeleton[SubjectId]][]) {
    if (!units || subjects.some(s => s.id === sid)) continue;
    if (!units.some(u => u.questions.length > 0 || (u.count ?? 0) > 0)) continue;
    subjects.push({ id: sid, ...SUBJECT_META[sid], questions: [], units });
  }
  return { ...g, subjects };
};

/** Full Greek primary-school curriculum (Α'–ΣΤ' Δημοτικού), gamified as quizzes. */
export const SCHOOL_CURRICULUM: SchoolGrade[] = [
  GRADE_1, GRADE_2, GRADE_3, GRADE_4, GRADE_5, GRADE_6,
].map(g => withUnits({
  ...g,
  subjects: [...g.subjects, ENGLISH_BY_GRADE[g.grade]],
}));

export type { SchoolGrade, SchoolSubject } from './schoolTypes';
