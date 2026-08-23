/**
 * Every school question, every grade, every unit: shape and sanity.
 * A wrong answer key in a maths unit is worse than no unit at all (CONTENT-PLAN.md),
 * so anything generated or hand-written must pass this before it ships.
 */
import { describe, it, expect } from 'vitest';
import { SCHOOL_CURRICULUM } from './schoolQuizData';
import {
  GRADE3_MATH_UNITS, GRADE3_GREEK_UNITS, GRADE3_SCIENCE_UNITS, GRADE3_HISTORY_UNITS, GRADE3_ENGLISH_UNITS,
} from './schoolGrade3Units';
import type { QuizQuestion } from '../types';

const UNIT_SETS = {
  'Γ math': GRADE3_MATH_UNITS, 'Γ greek': GRADE3_GREEK_UNITS, 'Γ science': GRADE3_SCIENCE_UNITS,
  'Γ history': GRADE3_HISTORY_UNITS, 'Γ english': GRADE3_ENGLISH_UNITS,
};

function checkQuestion(q: QuizQuestion, where: string) {
  expect(q.q.el.trim(), `${where}: empty Greek question`).not.toBe('');
  expect(q.q.en.trim(), `${where}: empty English question`).not.toBe('');
  expect(q.options.el.length, `${where}: need 2+ options`).toBeGreaterThanOrEqual(2);
  expect(q.options.en.length, `${where}: el/en option counts differ`).toBe(q.options.el.length);
  expect(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.options.el.length, `${where}: correct index out of range`).toBe(true);
  expect(new Set(q.options.el).size, `${where}: duplicate Greek options`).toBe(q.options.el.length);
  expect(new Set(q.options.en).size, `${where}: duplicate English options`).toBe(q.options.en.length);
  for (const o of [...q.options.el, ...q.options.en]) expect(o.trim(), `${where}: empty option`).not.toBe('');
}

describe('school curriculum (flat pools)', () => {
  it('every question is well-formed', () => {
    for (const g of SCHOOL_CURRICULUM) for (const s of g.subjects) s.questions.forEach((q, i) =>
      checkQuestion(q, `grade ${g.grade} / ${s.id} #${i + 1}`));
  });
  it('no subject repeats a question', () => {
    // Key on stem + options: spelling drills legitimately reuse "Πώς γράφεται σωστά η λέξη;".
    for (const g of SCHOOL_CURRICULUM) for (const s of g.subjects) {
      const seen = new Set(s.questions.map(q => q.q.el.trim() + '|' + q.options.el.join('|')));
      expect(seen.size, `grade ${g.grade} / ${s.id}`).toBe(s.questions.length);
    }
  });
});

describe('Γ΄ Δημοτικού units', () => {
  it('unit ids are unique within a subject', () => {
    for (const [name, units] of Object.entries(UNIT_SETS)) {
      expect(new Set(units.map(u => u.id)).size, name).toBe(units.length);
    }
  });
  it('every unit question is well-formed and has an explanation in both languages', () => {
    for (const [name, units] of Object.entries(UNIT_SETS)) for (const u of units) u.questions.forEach((q, i) => {
      const where = `${name} / ${u.id} #${i + 1}`;
      checkQuestion(q, where);
      expect(q.explanation?.el?.trim(), `${where}: missing Greek explanation`).toBeTruthy();
      expect(q.explanation?.en?.trim(), `${where}: missing English explanation`).toBeTruthy();
    });
  });
  it('a filled unit has 15–20 questions (CONTENT-PLAN target)', () => {
    for (const [name, units] of Object.entries(UNIT_SETS)) for (const u of units) {
      if (u.questions.length === 0) continue; // skeleton, not yet written
      expect(u.questions.length, `${name} / ${u.id}`).toBeGreaterThanOrEqual(15);
      expect(u.questions.length, `${name} / ${u.id}`).toBeLessThanOrEqual(20);
    }
  });
  it('multiplication sample: "a × b" questions have the arithmetically correct answer marked', () => {
    const unit = GRADE3_MATH_UNITS.find(u => u.id === 'multiplication')!;
    let checked = 0;
    for (const q of unit.questions) {
      const m = /^Πόσο κάνει (\d+) × (\d+);$/.exec(q.q.el);
      if (!m) continue;
      const expected = Number(m[1]) * Number(m[2]);
      expect(Number(q.options.el[q.correct]), q.q.el).toBe(expected);
      checked++;
    }
    expect(checked).toBeGreaterThanOrEqual(6);
  });
});
