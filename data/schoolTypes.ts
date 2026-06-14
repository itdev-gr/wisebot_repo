import type { QuizQuestion } from '../types';

/** One subject within a grade (e.g. Μαθηματικά for Γ' Δημοτικού). */
export interface SchoolSubject {
  id: string;                       // 'math' | 'greek' | 'science' | 'history'
  name: { el: string; en: string };
  emoji: string;
  questions: QuizQuestion[];
}

/** One grade of Greek primary school (Α'–ΣΤ' Δημοτικού). */
export interface SchoolGrade {
  grade: number;                    // 1..6
  name: { el: string; en: string }; // "Α' Δημοτικού" / "Grade 1"
  color: string;                    // tailwind gradient, e.g. "from-blue-500 to-cyan-500"
  subjects: SchoolSubject[];
}
