/**
 * Tests for «Ποιος είμαι;» — the people file as a contract.
 *
 * This suite guards the data, not the game. The one test that matters most is
 * the last: two people with the same 36 answers can never be told apart by any
 * sequence of questions, so a content edit that creates such a pair would make
 * WiseBot unable to find one of them — silently, for every child who picks them.
 *
 * Every failure message names the offending person, so a content editor who has
 * never read this file can still fix what they broke.
 */
import { describe, it, expect } from 'vitest';
import {
  CLUES_PER_PERSON,
  WHOAMI_ATTRS,
  WHOAMI_COPY,
  WHOAMI_PEOPLE,
  WHOAMI_QUESTIONS,
  WHOAMI_STORAGE_KEY,
} from './whoami';

const words = (s: string) =>
  s.split(/[^A-Za-zΑ-Ωα-ωΆ-ώΐΰϊϋΪΫ]+/).filter(Boolean).map((w) => w.toLowerCase());

describe('whoami people', () => {
  it('holds the 95 people of the Academy', () => {
    expect(WHOAMI_PEOPLE).toHaveLength(95);
  });

  it('has unique ids and unique names in both languages', () => {
    const ids = WHOAMI_PEOPLE.map((p) => p.id);
    expect(new Set(ids).size, 'duplicate id').toBe(ids.length);
    const el = WHOAMI_PEOPLE.map((p) => p.nameEl.trim());
    expect(new Set(el).size, 'duplicate Greek name').toBe(el.length);
    const en = WHOAMI_PEOPLE.map((p) => p.nameEn.trim());
    expect(new Set(en).size, 'duplicate English name').toBe(en.length);
    for (const p of WHOAMI_PEOPLE) {
      expect(p.nameEl, `empty Greek name for id ${p.id}`).not.toBe('');
      expect(p.nameEn, `empty English name for id ${p.id}`).not.toBe('');
      expect(p.emoji.trim(), `empty emoji for ${p.nameEl}`).not.toBe('');
    }
  });

  it('writes the Greek name in Greek script', () => {
    for (const p of WHOAMI_PEOPLE) {
      expect(/[Α-Ωα-ωΆ-ώ]/.test(p.nameEl), `${p.nameEn}: nameEl has no Greek letters`).toBe(true);
    }
  });

  it('spells out all 36 attributes as booleans for everyone', () => {
    expect(WHOAMI_ATTRS).toHaveLength(36);
    for (const p of WHOAMI_PEOPLE) {
      expect(Object.keys(p.attrs).sort(), `${p.nameEl}: attribute keys`).toEqual([...WHOAMI_ATTRS].sort());
      for (const a of WHOAMI_ATTRS) {
        expect(typeof p.attrs[a], `${p.nameEl}.${a}`).toBe('boolean');
      }
    }
  });

  it('gives exactly five non-empty, distinct clues per language', () => {
    for (const p of WHOAMI_PEOPLE) {
      for (const lang of ['el', 'en'] as const) {
        const clues = p.clues[lang];
        expect(clues, `${p.nameEl}: ${lang} clues`).toHaveLength(CLUES_PER_PERSON);
        expect(new Set(clues).size, `${p.nameEl}: repeated ${lang} clue`).toBe(CLUES_PER_PERSON);
        for (const c of clues) expect(c.trim().length, `${p.nameEl}: empty ${lang} clue`).toBeGreaterThan(10);
      }
    }
  });

  it('never gives the name away inside a clue', () => {
    for (const p of WHOAMI_PEOPLE) {
      const name = new Set(words(`${p.nameEl} ${p.nameEn}`).filter((w) => w.length > 3));
      for (const c of [...p.clues.el, ...p.clues.en]) {
        const hit = words(c).find((w) => name.has(w));
        expect(hit, `${p.nameEl}: clue contains «${hit}» — «${c}»`).toBeUndefined();
      }
    }
  });

  it('has a question in both languages for every attribute', () => {
    for (const a of WHOAMI_ATTRS) {
      const q = WHOAMI_QUESTIONS[a];
      expect(q, `no question for ${a}`).toBeDefined();
      expect(q.el.trim().endsWith(';'), `${a}: Greek question must end with ;`).toBe(true);
      expect(q.en.trim().endsWith('?'), `${a}: English question must end with ?`).toBe(true);
    }
    expect(Object.keys(WHOAMI_QUESTIONS).sort()).toEqual([...WHOAMI_ATTRS].sort());
  });

  it('has the same copy keys in Greek and English', () => {
    expect(Object.keys(WHOAMI_COPY.el).sort()).toEqual(Object.keys(WHOAMI_COPY.en).sort());
  });

  it('uses a storage key in its own namespace', () => {
    expect(WHOAMI_STORAGE_KEY.startsWith('wb_whoami_')).toBe(true);
  });

  it('never has two people with the same 36 answers', () => {
    const seen = new Map<string, string>();
    for (const p of WHOAMI_PEOPLE) {
      const key = WHOAMI_ATTRS.map((a) => (p.attrs[a] ? '1' : '0')).join('');
      const other = seen.get(key);
      expect(other, `${p.nameEl} and ${other} answer every question the same`).toBeUndefined();
      seen.set(key, p.nameEl);
    }
  });
});
