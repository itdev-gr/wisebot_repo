/**
 * Every school question, every grade, every unit: shape and sanity.
 * A wrong answer key in a maths unit is worse than no unit at all (CONTENT-PLAN.md),
 * so anything generated or hand-written must pass this before it ships.
 */
import { describe, it, expect } from 'vitest';
import { SCHOOL_CURRICULUM } from './schoolQuizData';
import { CURRICULUM_UNITS, ALL_UNIT_KEYS } from './units/curriculum';
import { UNIT_QUESTIONS } from './units/registry';
import type { QuizQuestion } from '../types';

const UNIT_SETS: Record<string, { id: string; questions: QuizQuestion[] }[]> = {};
for (const [g, subs] of Object.entries(CURRICULUM_UNITS))
  for (const [sid, units] of Object.entries(subs)) UNIT_SETS[`${g}/${sid}`] = units || [];

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

describe('unit skeleton', () => {
  it('has 212 units with unique keys', () => {
    expect(ALL_UNIT_KEYS.length).toBe(212);
    expect(new Set(ALL_UNIT_KEYS).size).toBe(ALL_UNIT_KEYS.length);
  });
  it('every registry entry points at a real unit', () => {
    for (const key of Object.keys(UNIT_QUESTIONS)) expect(ALL_UNIT_KEYS, key).toContain(key);
  });
});

describe('curriculum units', () => {
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
    const unit = CURRICULUM_UNITS[3].math!.find(u => u.id === 'multiplication')!;
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
