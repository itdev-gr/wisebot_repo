/**
 * Every school question, every grade, every unit: shape and sanity.
 * A wrong answer key in a maths unit is worse than no unit at all (CONTENT-PLAN.md),
 * so anything generated or hand-written must pass this before it ships.
 */
import { describe, it, expect } from 'vitest';
import { SCHOOL_CURRICULUM } from './schoolQuizData';
import { CURRICULUM_UNITS, ALL_UNIT_KEYS } from './units/curriculum';
import { UNIT_COUNTS, loadGradeQuestions } from './units/registry';
import type { QuizQuestion } from '../types';

const UNIT_SETS: Record<string, { id: string; questions: QuizQuestion[] }[]> = {};
const questionsFor = async (gradeSubject: string, unitId: string): Promise<QuizQuestion[]> =>
  (await loadGradeQuestions(Number(gradeSubject.split('/')[0])))[`${gradeSubject}/${unitId}`] || [];
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
  it('has 302 units with unique keys (212 original + 48 Μαθηματικά/Γλώσσα enrichment + 42 English Language Arts)', () => {
    expect(ALL_UNIT_KEYS.length).toBe(302);
    expect(new Set(ALL_UNIT_KEYS).size).toBe(ALL_UNIT_KEYS.length);
  });
  // Loads all six grade bundles (~4,600 questions) — takes ~5s here and more on a CI runner,
  // so it gets its own budget instead of vitest's 5s default.
  it('every registry entry points at a real unit and its count matches the file', async () => {
    for (const key of Object.keys(UNIT_COUNTS)) expect(ALL_UNIT_KEYS, key).toContain(key);
    for (const g of [1, 2, 3, 4, 5, 6]) {
      const loaded = await loadGradeQuestions(g);
      for (const [key, qs] of Object.entries(loaded)) expect(UNIT_COUNTS[key], key).toBe(qs.length);
    }
  }, 30_000);
});

describe('curriculum units', () => {
  it('unit ids are unique within a subject', () => {
    for (const [name, units] of Object.entries(UNIT_SETS)) {
      expect(new Set(units.map(u => u.id)).size, name).toBe(units.length);
    }
  });
  it('every unit question is well-formed and has an explanation in both languages', async () => {
    for (const [name, units] of Object.entries(UNIT_SETS)) for (const u of units) (await questionsFor(name, u.id)).forEach((q, i) => {
      const where = `${name} / ${u.id} #${i + 1}`;
      checkQuestion(q, where);
      expect(q.explanation?.el?.trim(), `${where}: missing Greek explanation`).toBeTruthy();
      expect(q.explanation?.en?.trim(), `${where}: missing English explanation`).toBeTruthy();
    });
  });
  it('a filled unit has 15–20 questions (CONTENT-PLAN target)', async () => {
    for (const [name, units] of Object.entries(UNIT_SETS)) for (const u of units) {
      const n = (await questionsFor(name, u.id)).length;
      if (n === 0) continue; // skeleton, not yet written
      expect(n, `${name} / ${u.id}`).toBeGreaterThanOrEqual(15);
      expect(n, `${name} / ${u.id}`).toBeLessThanOrEqual(20);
    }
  });
  it('multiplication sample: "a × b" questions have the arithmetically correct answer marked', async () => {
    let checked = 0;
    for (const q of await questionsFor('3/math', 'multiplication')) {
      const m = /^Πόσο κάνει (\d+) × (\d+);$/.exec(q.q.el);
      if (!m) continue;
      const expected = Number(m[1]) * Number(m[2]);
      expect(Number(q.options.el[q.correct]), q.q.el).toBe(expected);
      checked++;
    }
    expect(checked).toBeGreaterThanOrEqual(6);
  });
});
