/**
 * The daily challenge falls apart if two children get different words, or if a
 * round reports its score twice. These tests pin both down: the generator is
 * checked as a pure function of the seed, and the component is driven with fake
 * timers to prove `onDone` fires exactly once whichever way the round ends.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import WordQuestRound from './WordQuestRound';
import {
  buildWordQuestRound,
  MAX_ROUND_LETTERS,
  WORDS_PER_ROUND,
  WORD_QUEST_WORDS,
} from '../../../data/games/rounds/wordQuestWords';
import { roundSeed } from '../playRound';
import { athensDaySeed } from '../../../utils/dailySeed';

const LANGS = ['el', 'en'] as const;

const sorted = (letters: string[]) => [...letters].sort().join('');

describe('buildWordQuestRound', () => {
  it.each(LANGS)('is the same challenge every time for one seed (%s)', lang => {
    const a = buildWordQuestRound(123456, lang);
    const b = buildWordQuestRound(123456, lang);
    expect(a).toEqual(b);
    // Including the scramble — two children must see the same tiles, not just
    // the same words.
    expect(a.map(q => q.letters.join(''))).toEqual(b.map(q => q.letters.join('')));
  });

  it('gives different days different words', () => {
    const monday = buildWordQuestRound(roundSeed(athensDaySeed(new Date('2026-09-14T09:00:00Z')), 1), 'el');
    const tuesday = buildWordQuestRound(roundSeed(athensDaySeed(new Date('2026-09-15T09:00:00Z')), 1), 'el');
    expect(monday.map(q => q.word)).not.toEqual(tuesday.map(q => q.word));
  });

  it('varies across seeds instead of serving one fixed set', () => {
    const sets = new Set<string>();
    for (let seed = 0; seed < 60; seed++) {
      sets.add(buildWordQuestRound(seed, 'el').map(q => q.word).join('|'));
    }
    expect(sets.size).toBeGreaterThan(20);
  });

  it.each(LANGS)('serves %s words that exist in the Word Quest pool, no repeats', lang => {
    const pool = new Map(WORD_QUEST_WORDS[lang].map(w => [w.word, w.hint]));
    for (let seed = 0; seed < 40; seed++) {
      const round = buildWordQuestRound(seed, lang);
      expect(round).toHaveLength(WORDS_PER_ROUND);
      expect(new Set(round.map(q => q.word)).size).toBe(WORDS_PER_ROUND);
      for (const q of round) {
        expect(pool.get(q.word)).toBe(q.hint);
      }
    }
  });

  it.each(LANGS)('keeps %s words short enough for 30 seconds, easiest first', lang => {
    for (let seed = 0; seed < 40; seed++) {
      const lengths = buildWordQuestRound(seed, lang).map(q => q.word.length);
      expect(Math.max(...lengths)).toBeLessThanOrEqual(MAX_ROUND_LETTERS);
      expect([...lengths].sort((a, b) => a - b)).toEqual(lengths);
    }
  });

  it.each(LANGS)('scrambles %s words into the same letters but a different order', lang => {
    for (let seed = 0; seed < 40; seed++) {
      for (const q of buildWordQuestRound(seed, lang)) {
        expect(q.letters).toHaveLength(q.word.length);
        expect(sorted(q.letters)).toBe(sorted(q.word.split('')));
        expect(q.letters.join('')).not.toBe(q.word);
      }
    }
  });

  it('can be asked for a different number of words', () => {
    expect(buildWordQuestRound(7, 'en', 2)).toHaveLength(2);
    expect(buildWordQuestRound(7, 'en', 0)).toEqual([]);
  });
});

describe('<WordQuestRound />', () => {
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  /** Tap the letters that spell `word`, the way a child who knows it would. */
  const spell = (word: string) => {
    for (const ch of word) {
      const tile = screen
        .getAllByRole('button')
        .find(b => b.textContent === ch && !(b as HTMLButtonElement).disabled);
      expect(tile).toBeDefined();
      fireEvent.click(tile!);
    }
  };

  it('reports 0 correct when the clock runs out untouched, exactly once', () => {
    vi.useFakeTimers();
    const onDone = vi.fn();
    render(<WordQuestRound seed={4242} ms={30_000} lang="el" onDone={onDone} />);

    expect(onDone).not.toHaveBeenCalled();
    act(() => { vi.advanceTimersByTime(29_000); });
    expect(onDone).not.toHaveBeenCalled();

    act(() => { vi.advanceTimersByTime(1_500); });
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: 0, total: WORDS_PER_ROUND });

    // A late tick must not report a second time.
    act(() => { vi.advanceTimersByTime(10_000); });
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('counts a solved word and keeps counting after a wrong attempt', () => {
    vi.useFakeTimers();
    const onDone = vi.fn();
    const questions = buildWordQuestRound(4242, 'en');
    render(<WordQuestRound seed={4242} ms={30_000} lang="en" onDone={onDone} />);

    // A wrong arrangement: the scramble itself is never the answer.
    spell(questions[0].letters.join(''));
    act(() => { vi.advanceTimersByTime(600); });
    expect(onDone).not.toHaveBeenCalled();

    // Same word, now spelled correctly.
    spell(questions[0].word);
    act(() => { vi.advanceTimersByTime(600); });

    act(() => { vi.advanceTimersByTime(30_000); });
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: 1, total: WORDS_PER_ROUND });
  });

  it('ends the round as soon as every word is answered', () => {
    vi.useFakeTimers();
    const onDone = vi.fn();
    const questions = buildWordQuestRound(99, 'el');
    render(<WordQuestRound seed={99} ms={30_000} lang="el" onDone={onDone} />);

    for (const q of questions) {
      spell(q.word);
      act(() => { vi.advanceTimersByTime(600); });
    }

    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: WORDS_PER_ROUND, total: WORDS_PER_ROUND });

    // The clock keeps ticking towards its deadline — it must stay quiet.
    act(() => { vi.advanceTimersByTime(30_000); });
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('skips a word without crediting it', () => {
    vi.useFakeTimers();
    const onDone = vi.fn();
    render(<WordQuestRound seed={99} ms={30_000} lang="el" onDone={onDone} />);

    for (let i = 0; i < WORDS_PER_ROUND; i++) {
      fireEvent.click(screen.getByRole('button', { name: /ΠΑΡΑΛΕΙΨΗ/ }));
      act(() => { vi.advanceTimersByTime(50); });
    }

    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: 0, total: WORDS_PER_ROUND });
  });

  it('shows the hint and the scrambled letters in both languages', () => {
    vi.useFakeTimers();
    const el = buildWordQuestRound(4242, 'el')[0];
    const { unmount } = render(<WordQuestRound seed={4242} ms={30_000} lang="el" onDone={vi.fn()} />);
    expect(screen.getByText(el.hint)).toBeTruthy();
    expect(screen.getByRole('button', { name: /ΠΑΡΑΛΕΙΨΗ/ })).toBeTruthy();
    unmount();

    const en = buildWordQuestRound(4242, 'en')[0];
    render(<WordQuestRound seed={4242} ms={30_000} lang="en" onDone={vi.fn()} />);
    expect(screen.getByText(en.hint)).toBeTruthy();
    expect(screen.getByRole('button', { name: /SKIP/ })).toBeTruthy();
  });

  it('does not report after unmount', () => {
    vi.useFakeTimers();
    const onDone = vi.fn();
    const { unmount } = render(<WordQuestRound seed={7} ms={30_000} lang="en" onDone={onDone} />);
    act(() => { vi.advanceTimersByTime(5_000); });
    unmount();
    act(() => { vi.advanceTimersByTime(60_000); });
    expect(onDone).not.toHaveBeenCalled();
  });
});
