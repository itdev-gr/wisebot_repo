import { describe, it, expect } from 'vitest';
import { shuffleQuestionOptions, shuffleAllOptions } from './shuffleOptions';
import type { QuizQuestion } from '../types';

const q: QuizQuestion = {
  q: { el: 'Ε;', en: 'Q?' },
  options: { el: ['α', 'β', 'γ'], en: ['a', 'b', 'c'] },
  correct: 1,
};

// Deterministic rng cycling through the given values.
const seq = (values: number[]) => { let i = 0; return () => values[i++ % values.length]; };

describe('shuffleQuestionOptions', () => {
  it('keeps the correct answer pointing at the same option text', () => {
    for (let trial = 0; trial < 200; trial++) {
      const s = shuffleQuestionOptions(q);
      expect(s.options.el[s.correct]).toBe('β');
      expect(s.options.en[s.correct]).toBe('b');
    }
  });

  it('applies the same permutation to both languages', () => {
    for (let trial = 0; trial < 50; trial++) {
      const s = shuffleQuestionOptions(q);
      const elOrder = s.options.el.map(o => q.options.el.indexOf(o));
      const enOrder = s.options.en.map(o => q.options.en.indexOf(o));
      expect(elOrder).toEqual(enOrder);
      expect([...elOrder].sort()).toEqual([0, 1, 2]);
    }
  });

  it('actually moves the answer off the stored slot sometimes', () => {
    const positions = new Set<number>();
    for (let trial = 0; trial < 200; trial++) positions.add(shuffleQuestionOptions(q).correct);
    expect(positions.size).toBe(3);
  });

  it('does not mutate the input', () => {
    shuffleQuestionOptions(q, seq([0.99, 0.99]));
    expect(q.options.el).toEqual(['α', 'β', 'γ']);
    expect(q.correct).toBe(1);
  });

  it('leaves single-option questions alone', () => {
    const one: QuizQuestion = { ...q, options: { el: ['α'], en: ['a'] }, correct: 0 };
    expect(shuffleQuestionOptions(one)).toBe(one);
  });
});

describe('shuffleAllOptions', () => {
  it('keeps question order and length', () => {
    const list = [q, { ...q, q: { el: '2', en: '2' } }, { ...q, q: { el: '3', en: '3' } }];
    const s = shuffleAllOptions(list);
    expect(s.map(x => x.q.el)).toEqual(['Ε;', '2', '3']);
    s.forEach(x => expect(x.options.el[x.correct]).toBe('β'));
  });
});
