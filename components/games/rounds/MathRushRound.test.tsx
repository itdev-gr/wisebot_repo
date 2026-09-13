/**
 * The daily challenge is only "the same challenge for everyone" if this round
 * is reproducible from its seed, so most of these tests hit the pure ladder in
 * `mathRushQuestions.ts`. The last block renders the component itself, because
 * the one thing a pure test cannot cover is the promise the round contract
 * actually makes to the shell: `onDone` fires exactly once, and never after the
 * round is unmounted.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import MathRushRound from './MathRushRound';
import {
  buildMathRushQuestions,
  makeSeededQuestion,
  questionSeed,
  ROUND_QUESTION_COUNT,
  type MathQuestion,
} from '../../../data/games/rounds/mathRushQuestions';
import { mulberry32 } from '../../../utils/dailySeed';

const SEED = 0x5eed1234;

/** Recompute a question's text independently, to catch a text/answer mismatch. */
function evaluate(text: string): number {
  const mul = text.split(' × ');
  if (mul.length === 2) return Number(mul[0]) * Number(mul[1]);
  const sub = text.split(' − ');
  if (sub.length === 2) return Number(sub[0]) - Number(sub[1]);
  const add = text.split(' + ');
  if (add.length === 2) return Number(add[0]) + Number(add[1]);
  throw new Error(`unparsable question: ${text}`);
}

const fingerprint = (qs: MathQuestion[]) =>
  qs.map(q => `${q.text}=${q.answer}[${q.options.join(',')}]`).join('|');

describe('buildMathRushQuestions — determinism', () => {
  it('gives the identical ladder for the same seed', () => {
    expect(fingerprint(buildMathRushQuestions(SEED))).toBe(fingerprint(buildMathRushQuestions(SEED)));
  });

  it('keeps the options in the same positions, not just the same questions', () => {
    const a = buildMathRushQuestions(SEED);
    const b = buildMathRushQuestions(SEED);
    a.forEach((q, i) => {
      expect(b[i].text).toBe(q.text);
      expect(b[i].answer).toBe(q.answer);
      expect(b[i].options).toEqual(q.options); // order included — same tap, same result
    });
  });

  it('gives a different ladder for a different seed', () => {
    expect(fingerprint(buildMathRushQuestions(SEED))).not.toBe(fingerprint(buildMathRushQuestions(SEED + 1)));
    // Consecutive day seeds must not merely shift the same questions along.
    const a = buildMathRushQuestions(SEED, 8);
    const b = buildMathRushQuestions(SEED + 1, 8);
    expect(a.filter((q, i) => q.text === b[i].text).length).toBeLessThan(4);
  });

  it('is unaffected by Math.random — the round cannot drift per device', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0.99);
    const hot = fingerprint(buildMathRushQuestions(SEED));
    spy.mockReturnValue(0.01);
    expect(fingerprint(buildMathRushQuestions(SEED))).toBe(hot);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('builds each question from its own stream, so question 3 ignores questions 4+', () => {
    const short = buildMathRushQuestions(SEED, 3);
    const long = buildMathRushQuestions(SEED, ROUND_QUESTION_COUNT);
    expect(fingerprint(short)).toBe(fingerprint(long.slice(0, 3)));
  });

  it('tolerates a silly count', () => {
    expect(buildMathRushQuestions(SEED, 0)).toEqual([]);
    expect(buildMathRushQuestions(SEED, -5)).toEqual([]);
    expect(buildMathRushQuestions(SEED).length).toBe(ROUND_QUESTION_COUNT);
  });
});

describe('questionSeed', () => {
  it('is stable and distinct per index', () => {
    expect(questionSeed(SEED, 0)).toBe(questionSeed(SEED, 0));
    const seeds = new Set(Array.from({ length: 64 }, (_, i) => questionSeed(SEED, i)));
    expect(seeds.size).toBe(64);
    expect(questionSeed(SEED, 0)).not.toBe(questionSeed(SEED + 1, 0));
  });

  it('stays a uint32', () => {
    for (let i = 0; i < 32; i++) {
      const s = questionSeed(SEED, i);
      expect(Number.isInteger(s)).toBe(true);
      expect(s).toBeGreaterThanOrEqual(0);
      expect(s).toBeLessThanOrEqual(0xffffffff);
    }
  });
});

describe('the questions themselves', () => {
  const ladders = [0, 1, SEED, 0xffffffff, 987654321].map(s => buildMathRushQuestions(s));

  it('always offers four distinct, non-negative options containing the answer', () => {
    ladders.forEach(qs => qs.forEach(q => {
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.options).toContain(q.answer);
      q.options.forEach(o => expect(o).toBeGreaterThanOrEqual(0));
    }));
  });

  it('shows arithmetic that is actually true, and never a negative answer', () => {
    ladders.forEach(qs => qs.forEach(q => {
      expect(evaluate(q.text)).toBe(q.answer);
      expect(q.answer).toBeGreaterThanOrEqual(0);
    }));
  });

  it('keeps distractors close enough to be plausible', () => {
    ladders.forEach(qs => qs.forEach(q => {
      q.options.filter(o => o !== q.answer).forEach(o => {
        expect(Math.abs(o - q.answer)).toBeLessThanOrEqual(10);
      });
    }));
  });

  it('ramps with the index — the same ladder for a child who gets none right', () => {
    ladders.forEach(qs => {
      // 0-4: addition inside the tables.
      qs.slice(0, 5).forEach(q => {
        expect(q.text).toContain(' + ');
        expect(q.answer).toBeLessThanOrEqual(20);
      });
      // 5-9: addition or subtraction, bigger numbers.
      qs.slice(5, 10).forEach(q => expect(q.text).toMatch(/ [+−] /));
      // 10-15: small multiplication.
      qs.slice(10, 16).forEach(q => {
        expect(q.text).toContain(' × ');
        expect(q.answer).toBeLessThanOrEqual(81);
      });
      // 16+: the hard mix.
      qs.slice(16).forEach(q => expect(q.text).toMatch(/ [×−] /));
    });
  });

  it('makeSeededQuestion is pure — same rng seed, same question', () => {
    for (const i of [0, 7, 12, 20]) {
      const one = makeSeededQuestion(mulberry32(questionSeed(SEED, i)), i);
      const two = makeSeededQuestion(mulberry32(questionSeed(SEED, i)), i);
      expect(two).toEqual(one);
    }
  });
});

describe('<MathRushRound /> — the round contract', () => {
  afterEach(cleanup);

  const optionButton = (q: MathQuestion, value: number, lang: 'el' | 'en') =>
    screen.getByRole('button', { name: `${q.text} ${lang === 'el' ? 'ισούται με' : 'equals'} ${value}` });

  it('reports correct/total exactly once when the time runs out', async () => {
    const onDone = vi.fn();
    const qs = buildMathRushQuestions(SEED);
    render(<MathRushRound seed={SEED} ms={120} lang="en" onDone={onDone} />);

    // One right, one wrong — the wrong one is simply an option that isn't the answer.
    fireEvent.click(optionButton(qs[0], qs[0].answer, 'en'));
    const wrong = qs[1].options.find(o => o !== qs[1].answer)!;
    fireEvent.click(optionButton(qs[1], wrong, 'en'));

    await waitFor(() => expect(onDone).toHaveBeenCalledTimes(1));
    expect(onDone).toHaveBeenCalledWith({ correct: 1, total: 2 });

    // A late timer must not report a second time.
    await new Promise(r => setTimeout(r, 150));
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('does not report while the round is still running', async () => {
    const onDone = vi.fn();
    render(<MathRushRound seed={SEED} ms={5_000} lang="el" onDone={onDone} />);
    await new Promise(r => setTimeout(r, 80));
    expect(onDone).not.toHaveBeenCalled();
  });

  it('never reports after unmount — the shell that drops a round hears nothing', async () => {
    const onDone = vi.fn();
    const { unmount } = render(<MathRushRound seed={SEED} ms={60} lang="el" onDone={onDone} />);
    unmount();
    await new Promise(r => setTimeout(r, 150));
    expect(onDone).not.toHaveBeenCalled();
  });

  it('reports {0,0} immediately for a zero-length round instead of hanging', () => {
    const onDone = vi.fn();
    render(<MathRushRound seed={SEED} ms={0} lang="en" onDone={onDone} />);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: 0, total: 0 });
  });

  it('shows the seeded questions in order, in both languages', () => {
    const qs = buildMathRushQuestions(SEED);
    const onDone = vi.fn();

    const el = render(<MathRushRound seed={SEED} ms={5_000} lang="el" onDone={onDone} />);
    expect(screen.getByText(`${qs[0].text} = ?`)).toBeTruthy();
    fireEvent.click(optionButton(qs[0], qs[0].answer, 'el'));
    expect(screen.getByText(`${qs[1].text} = ?`)).toBeTruthy();
    el.unmount();

    render(<MathRushRound seed={SEED} ms={5_000} lang="en" onDone={onDone} />);
    expect(screen.getByText(`${qs[0].text} = ?`)).toBeTruthy();
    // Same seed, same first question — only the wording around it changes.
    expect(screen.getByText('CORRECT')).toBeTruthy();
  });
});
