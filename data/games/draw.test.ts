/**
 * Tests for «Ζωγράφισε & Μάντεψε» — the word list as a contract.
 *
 * This suite guards the data, not the game: nothing here mounts a canvas, so it
 * stays fast and it cannot break because the component changed its markup. What
 * it does guard is exactly the set of mistakes a content editor makes first when
 * they open `data/games/draw.ts` to add a word — a duplicate, a missing
 * distractor, a distractor that gives the answer away, a band that quietly drops
 * below 50.
 *
 * Every failure message names the offending word in Greek, so a content editor
 * who has never read this file can still fix what they broke.
 */
import { describe, it, expect } from 'vitest';
import {
  DRAWINGS_PER_PLAYER,
  DRAW_COPY,
  DRAW_CRAYONS,
  DRAW_ERASER,
  DRAW_GRADES,
  DRAW_SECONDS,
  DRAW_STORAGE_KEY,
  DRAW_TOOLS,
  DRAW_WORDS,
  MAX_PLAYERS,
  MIN_PLAYERS,
  OPTIONS_PER_ROUND,
  type DrawGrade,
} from './draw';

/** The brief: «150 λέξεις el+en με κατηγορία», three bands. */
const TOTAL_WORDS = 150;
const WORDS_PER_BAND = 50;
const BANDS: readonly DrawGrade[] = ['1-2', '3-4', '5-6'];

/** Reported in a failure so the editor knows which row to open. */
const id = (w: { el: string; en: string }) => `${w.el} / ${w.en}`;

/* ──────────────────────────────── the counts ───────────────────────────── */

describe('DRAW_WORDS — how many', () => {
  it('holds exactly 150 words', () => {
    expect(DRAW_WORDS).toHaveLength(TOTAL_WORDS);
  });

  it('holds exactly 50 words in each of the three bands', () => {
    const counts: Record<string, number> = {};
    for (const w of DRAW_WORDS) counts[w.grades] = (counts[w.grades] ?? 0) + 1;
    expect(counts).toEqual({ '1-2': WORDS_PER_BAND, '3-4': WORDS_PER_BAND, '5-6': WORDS_PER_BAND });
  });

  it('uses only the three declared bands, and every band is offered in the picker', () => {
    const used = new Set(DRAW_WORDS.map((w) => w.grades));
    expect([...used].sort()).toEqual([...BANDS].sort());
    expect(DRAW_GRADES.map((g) => g.id).sort()).toEqual([...BANDS].sort());
  });
});

/* ───────────────────────────── no duplicates ───────────────────────────── */

describe('DRAW_WORDS — uniqueness', () => {
  it('has no duplicate Greek word', () => {
    const seen = new Set<string>();
    const dupes: string[] = [];
    for (const w of DRAW_WORDS) {
      if (seen.has(w.el)) dupes.push(w.el);
      seen.add(w.el);
    }
    expect(dupes).toEqual([]);
  });

  it('has no duplicate English word', () => {
    // Not merely tidiness: two rows rendering the same English string can land
    // in the same four options, and then no answer is right. This is how
    // «αστραπή»/«κεραυνός» (both "lightning" in the research file) was caught.
    const seen = new Set<string>();
    const dupes: string[] = [];
    for (const w of DRAW_WORDS) {
      if (seen.has(w.en)) dupes.push(w.en);
      seen.add(w.en);
    }
    expect(dupes).toEqual([]);
  });
});

/* ────────────────────────────── the options ────────────────────────────── */

describe('DRAW_WORDS — the four options', () => {
  it('gives exactly 3 Greek and 3 English distractors per word', () => {
    const bad = DRAW_WORDS.filter(
      (w) => w.distractorsEl.length !== 3 || w.distractorsEn.length !== 3,
    ).map(id);
    expect(bad).toEqual([]);
  });

  it('fills one screen of four options', () => {
    // The component builds its buttons from word + distractors; if these ever
    // disagree the guess screen silently loses (or grows) an option.
    expect(OPTIONS_PER_ROUND).toBe(4);
    for (const w of DRAW_WORDS) {
      expect(w.distractorsEl.length + 1).toBe(OPTIONS_PER_ROUND);
      expect(w.distractorsEn.length + 1).toBe(OPTIONS_PER_ROUND);
    }
  });

  it('never lists a word among its own distractors, in either language', () => {
    const bad = DRAW_WORDS.filter(
      (w) => w.distractorsEl.includes(w.el) || w.distractorsEn.includes(w.en),
    ).map(id);
    expect(bad).toEqual([]);
  });

  it('never repeats a distractor inside one word', () => {
    // Three identical-looking buttons would make the round trivially guessable.
    const bad = DRAW_WORDS.filter(
      (w) => new Set(w.distractorsEl).size !== 3 || new Set(w.distractorsEn).size !== 3,
    ).map(id);
    expect(bad).toEqual([]);
  });

  it('has no empty option text', () => {
    const bad = DRAW_WORDS.filter((w) =>
      [w.el, w.en, ...w.distractorsEl, ...w.distractorsEn].some((s) => s.trim() === ''),
    ).map(id);
    expect(bad).toEqual([]);
  });
});

/* ───────────────────────────── the other fields ────────────────────────── */

describe('DRAW_WORDS — the reveal fields', () => {
  it('gives every word a non-empty emoji', () => {
    const bad = DRAW_WORDS.filter((w) => w.emoji.trim() === '').map(id);
    expect(bad).toEqual([]);
  });

  it('gives every word a non-empty category', () => {
    const bad = DRAW_WORDS.filter((w) => w.category.trim() === '').map(id);
    expect(bad).toEqual([]);
  });

  it('keeps difficulty a whole number from 1 to 5', () => {
    const bad = DRAW_WORDS.filter(
      (w) => !Number.isInteger(w.difficulty) || w.difficulty < 1 || w.difficulty > 5,
    ).map((w) => `${id(w)} (${w.difficulty})`);
    expect(bad).toEqual([]);
  });

  it('offers every band a spread of difficulties, not one flat wall', () => {
    for (const band of BANDS) {
      const levels = new Set(DRAW_WORDS.filter((w) => w.grades === band).map((w) => w.difficulty));
      expect(levels.size, `band ${band} has only ${levels.size} difficulty level(s)`)
        .toBeGreaterThanOrEqual(3);
    }
  });
});

/* ───────────────────────────── settings + copy ─────────────────────────── */

describe('the settings the brief fixes', () => {
  it('runs a 60 second drawing, 3 drawings per player, 2 to 6 players', () => {
    expect(DRAW_SECONDS).toBe(60);
    expect(DRAWINGS_PER_PLAYER).toBe(3);
    expect(MIN_PLAYERS).toBe(2);
    expect(MAX_PLAYERS).toBe(6);
    expect(MIN_PLAYERS).toBeLessThan(MAX_PLAYERS);
  });

  it('has enough words for the longest possible session', () => {
    // 6 players × 3 drawings = 18 words, all from one band, none repeated.
    const needed = MAX_PLAYERS * DRAWINGS_PER_PLAYER;
    for (const band of BANDS) {
      const n = DRAW_WORDS.filter((w) => w.grades === band).length;
      expect(n, `band ${band}`).toBeGreaterThanOrEqual(needed);
    }
  });

  it('offers four crayons plus one eraser', () => {
    expect(DRAW_CRAYONS).toHaveLength(4);
    expect(DRAW_CRAYONS.every((c) => c.erase === false)).toBe(true);
    expect(DRAW_ERASER.erase).toBe(true);
    expect(DRAW_TOOLS).toHaveLength(5);
    expect(new Set(DRAW_TOOLS.map((t) => t.id)).size).toBe(5);
    expect(new Set(DRAW_CRAYONS.map((c) => c.hex)).size).toBe(4);
  });

  it('keeps its own localStorage namespace', () => {
    // `wb_daily_streak` was shared once and paid XP twice. Any key this game
    // adds must start `wb_draw_` so the next grep finds it.
    expect(DRAW_STORAGE_KEY.startsWith('wb_draw_')).toBe(true);
  });
});

describe('the copy', () => {
  it('says everything in both Greek and English', () => {
    expect(Object.keys(DRAW_COPY.el).sort()).toEqual(Object.keys(DRAW_COPY.en).sort());
  });

  it('has no empty string and no untranslated leftover', () => {
    for (const lang of ['el', 'en'] as const) {
      const copy = DRAW_COPY[lang] as unknown as Record<string, unknown>;
      for (const [key, value] of Object.entries(copy)) {
        if (typeof value === 'string') {
          expect(value.trim(), `${lang}.${key}`).not.toBe('');
        } else if (Array.isArray(value)) {
          expect(value.length, `${lang}.${key}`).toBeGreaterThan(0);
          for (const line of value) expect(String(line).trim(), `${lang}.${key}`).not.toBe('');
        }
      }
    }
  });

  it('names every band in both languages', () => {
    for (const g of DRAW_GRADES) {
      expect(g.label.el.trim(), g.id).not.toBe('');
      expect(g.label.en.trim(), g.id).not.toBe('');
      expect(g.label.el).not.toBe(g.label.en);
    }
  });

  it('names players by number only — never asks for a child’s name', () => {
    // Hard rule for a 6–12 audience: nothing personal, anywhere. The only
    // player label the game can produce is built from an index.
    expect(DRAW_COPY.el.playerName(3)).toBe('ΠΑΙΚΤΗΣ 3');
    expect(DRAW_COPY.en.playerName(3)).toBe('PLAYER 3');
  });

  it('puts only the score on the share card', () => {
    const el = DRAW_COPY.el.cardHeadline(7, 9);
    const en = DRAW_COPY.en.cardHeadline(7, 9);
    expect(el).toContain('7');
    expect(el).toContain('9');
    expect(en).toContain('7');
    expect(en).toContain('9');
  });
});
