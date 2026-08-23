import type { QuizQuestion } from '../types';

/**
 * One teaching unit inside a subject (e.g. Πολλαπλασιασμός inside Μαθηματικά Γ').
 * Units follow the chapters of the national curriculum, so a child can finish
 * "multiplication" rather than an undifferentiated pile of questions, and a parent
 * can see which unit is weak.
 */
export interface SchoolUnit {
  id: string;                       // 'multiplication', stable — progress is stored against it
  name: { el: string; en: string };
  emoji: string;
  questions: QuizQuestion[];
  /** Number of questions when they are loaded lazily (data/units/registry.ts). */
  count?: number;
}

/** One subject within a grade (e.g. Μαθηματικά for Γ' Δημοτικού). */
export interface SchoolSubject {
  id: string;                       // 'math' | 'greek' | 'science' | 'history'
  name: { el: string; en: string };
  emoji: string;
  /**
   * Flat question pool. Every existing consumer reads this, so it stays required.
   * For unit-based subjects, build it with `fromUnits(units)` so the two never drift.
   */
  questions: QuizQuestion[];
  /**
   * Optional unit breakdown. Absent on grades not yet migrated — check with `hasUnits()`
   * before offering per-unit exams or diplomas.
   */
  units?: SchoolUnit[];
}

/** Flatten units into the pool `SchoolSubject.questions` expects, preserving unit order. */
export function fromUnits(units: SchoolUnit[]): QuizQuestion[] {
  return units.flatMap(u => u.questions);
}

/** True when a subject has been migrated to units and can offer per-unit progress. */
export function hasUnits(subject: SchoolSubject): boolean {
  return Array.isArray(subject.units) && subject.units.length > 0;
}

/** One grade of Greek primary school (Α'–ΣΤ' Δημοτικού). */
export interface SchoolGrade {
  grade: number;                    // 1..6
  name: { el: string; en: string }; // "Α' Δημοτικού" / "Grade 1"
  color: string;                    // tailwind gradient, e.g. "from-blue-500 to-cyan-500"
  subjects: SchoolSubject[];
}
