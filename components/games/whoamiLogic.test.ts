/**
 * Tests for «Ποιος είμαι;» — the rules.
 *
 * The headline requirement of the brief is proved for EVERY person, not a
 * sample: WiseBot is played against each of the 95 with truthful answers and
 * must name them on its first guess within 20 questions. The same loop is then
 * replayed with one answer flipped — at every one of the 20 positions, re-check
 * questions included — and WiseBot must still land on the right person within
 * its two guesses and its 20 questions.
 */
import { describe, it, expect } from 'vitest';
import {
  CLUES_PER_PERSON,
  MAX_GUESSES,
  MAX_QUESTIONS,
  REVERSE_MAX_POINTS,
  REVERSE_OPTIONS,
  REVERSE_ROUND,
  WHOAMI_ATTRS,
  WHOAMI_PEOPLE,
  type WhoAmIAnswer,
  type WhoAmIAttr,
  type WhoAmIPerson,
} from '../../data/games/whoami';
import { mulberry32 } from '../../utils/dailySeed';
import {
  applyAnswer,
  bestQuestion,
  createReverse,
  createThinkState,
  currentTarget,
  leaderCount,
  nextQuestion,
  nextReverse,
  pickReverse,
  pointsFor,
  questionGain,
  questionsAsked,
  rejectGuess,
  revealClue,
  reverseFound,
  reverseOptions,
  reverseScore,
  reverseTier,
  shouldGuess,
  topCandidates,
  type ThinkState,
} from './whoamiLogic';

interface Outcome {
  found: boolean;
  questions: number;
  guesses: number;
  firstGuessRight: boolean;
  asked: WhoAmIAttr[];
}

/**
 * Plays one full «σκέψου» round the way the component does: ask while
 * `shouldGuess` is false, guess the top candidate, and on «ΟΧΙ» reject it and
 * carry on until the guesses run out.
 */
function play(target: WhoAmIPerson, answerFor: (attr: WhoAmIAttr, index: number) => WhoAmIAnswer): Outcome {
  // `index` is the position in the 20-question budget, re-checks included.
  let s: ThinkState = createThinkState();
  let guesses = 0;
  let firstGuessRight = false;
  for (let safety = 0; safety < 200; safety++) {
    if (shouldGuess(s)) {
      const guess = topCandidates(s, 1)[0];
      guesses += 1;
      if (guess.id === target.id) {
        if (guesses === 1) firstGuessRight = true;
        return { found: true, questions: questionsAsked(s), guesses, firstGuessRight, asked: s.asked };
      }
      s = rejectGuess(s, guess.id);
      if (guesses >= MAX_GUESSES) break;
      continue;
    }
    const next = nextQuestion(s);
    if (!next) throw new Error('shouldGuess was false but there is no question to ask');
    s = applyAnswer(s, next.attr, answerFor(next.attr, questionsAsked(s)));
  }
  return { found: false, questions: questionsAsked(s), guesses, firstGuessRight, asked: s.asked };
}

const truthful = (target: WhoAmIPerson) => (attr: WhoAmIAttr): WhoAmIAnswer =>
  target.attrs[attr] ? 'yes' : 'no';

describe('whoami — WiseBot finds every person', () => {
  const truthfulRuns = WHOAMI_PEOPLE.map((p) => ({ person: p, outcome: play(p, truthful(p)) }));

  it('finds all 95 people with truthful answers, first guess, within 20 questions', () => {
    for (const { person, outcome } of truthfulRuns) {
      expect(outcome.found, `${person.nameEl} was not found`).toBe(true);
      expect(outcome.firstGuessRight, `${person.nameEl} needed a second guess`).toBe(true);
      expect(outcome.questions, `${person.nameEl} took ${outcome.questions} questions`).toBeLessThanOrEqual(MAX_QUESTIONS);
    }
    const counts = truthfulRuns.map((r) => r.outcome.questions);
    const worst = Math.max(...counts);
    const mean = counts.reduce((a, b) => a + b, 0) / counts.length;
    // Printed so a content change that makes the game slower is visible in CI.
    console.info(`[whoami] truthful: 95/95 found on the first guess · worst ${worst} · mean ${mean.toFixed(1)} questions`);
  });

  it('still finds every person when any single answer is flipped', () => {
    let runs = 0;
    let secondGuess = 0;
    let worst = 0;
    for (const { person, outcome } of truthfulRuns) {
      // Every position of the budget: the ones the truthful game reached and
      // the ones only a longer, diverging game (or a re-check) reaches.
      expect(outcome.found).toBe(true);
      for (let flipAt = 0; flipAt < MAX_QUESTIONS; flipAt++) {
        const result = play(person, (attr, index) => {
          const honest = person.attrs[attr];
          const said = index === flipAt ? !honest : honest;
          return said ? 'yes' : 'no';
        });
        runs += 1;
        expect(result.found, `${person.nameEl}, answer ${flipAt + 1} flipped: not found`).toBe(true);
        expect(result.questions).toBeLessThanOrEqual(MAX_QUESTIONS);
        if (!result.firstGuessRight) secondGuess += 1;
        worst = Math.max(worst, result.questions);
      }
    }
    console.info(`[whoami] one wrong answer: ${runs}/${runs} found · ${secondGuess} needed the second guess · worst ${worst} questions`);
  }, 30_000);

  it('bestQuestion never repeats and every question splits the candidates', () => {
    for (const person of WHOAMI_PEOPLE) {
      let s = createThinkState();
      while (!shouldGuess(s)) {
        const q = bestQuestion(s);
        if (q) {
          expect(s.asked.includes(q), `${person.nameEl}: «${q}» asked twice`).toBe(false);
          expect(questionGain(s, q), `${person.nameEl}: «${q}» does not split`).toBeGreaterThan(0);
        }
        const next = nextQuestion(s);
        expect(next).not.toBeNull();
        if (!next) break;
        expect(questionGain(s, next.attr), `${person.nameEl}: «${next.attr}» does not split`).toBeGreaterThan(0);
        // A re-check is only ever an answered question, and only once.
        if (next.recheck) {
          expect(s.asked.includes(next.attr)).toBe(true);
          expect(s.rechecked.includes(next.attr)).toBe(false);
        } else {
          expect(next.attr).toBe(q);
        }
        s = applyAnswer(s, next.attr, truthful(person)(next.attr));
      }
      expect(new Set(s.asked).size).toBe(s.asked.length);
      expect(new Set(s.rechecked).size).toBe(s.rechecked.length);
    }
  });

  it('opens with a question that splits all 95 people', () => {
    const s = createThinkState();
    const q = bestQuestion(s);
    expect(q).not.toBeNull();
    const yes = WHOAMI_PEOPLE.filter((p) => p.attrs[q as WhoAmIAttr]).length;
    expect(yes).toBeGreaterThan(0);
    expect(yes).toBeLessThan(WHOAMI_PEOPLE.length);
  });
});

describe('whoami — answers', () => {
  it('«δεν ξέρω» eliminates nobody, for every attribute', () => {
    for (const attr of WHOAMI_ATTRS) {
      const before = createThinkState();
      const after = applyAnswer(before, attr, 'dontknow');
      expect(after.misses).toEqual(before.misses);
      expect(leaderCount(after)).toBe(WHOAMI_PEOPLE.length);
      expect(after.asked).toEqual([attr]);
    }
  });

  it('«δεν ξέρω» to every question still ends the round without crashing', () => {
    let s = createThinkState();
    while (!shouldGuess(s)) {
      const q = bestQuestion(s);
      if (!q) break;
      s = applyAnswer(s, q, 'dontknow');
    }
    expect(questionsAsked(s)).toBeLessThanOrEqual(MAX_QUESTIONS);
    expect(s.rechecked).toEqual([]); // nothing answered, nothing to re-check
    expect(topCandidates(s, 1)).toHaveLength(1);
  });

  it('a wrong answer demotes a person instead of deleting them', () => {
    const target = WHOAMI_PEOPLE[0];
    const attr = WHOAMI_ATTRS.find((a) => target.attrs[a]) as WhoAmIAttr;
    const s = applyAnswer(createThinkState(), attr, 'no');
    expect(s.misses[target.id]).toBe(1);
    // Still ranked, just behind everyone who agrees.
    expect(topCandidates(s, WHOAMI_PEOPLE.length).map((p) => p.id)).toContain(target.id);
  });

  it('a re-check that contradicts the first answer cancels both; a third answer is ignored', () => {
    const s1 = applyAnswer(createThinkState(), 'alive', 'yes');
    const s2 = applyAnswer(s1, 'alive', 'no');
    expect(s2.misses).toEqual(createThinkState().misses);
    expect(s2.answers).toEqual(['dontknow']);
    expect(s2.rechecked).toEqual(['alive']);
    expect(questionsAsked(s2)).toBe(2);
    expect(applyAnswer(s2, 'alive', 'yes')).toBe(s2);
  });

  it('a re-check that confirms the first answer changes nothing but the count', () => {
    const s1 = applyAnswer(createThinkState(), 'alive', 'yes');
    const s2 = applyAnswer(s1, 'alive', 'yes');
    expect(s2.misses).toEqual(s1.misses);
    expect(s2.answers).toEqual(['yes']);
    expect(questionsAsked(s2)).toBe(2);
  });

  it('a rejected guess is never guessed again', () => {
    const s = rejectGuess(createThinkState(), WHOAMI_PEOPLE[0].id);
    expect(topCandidates(s, WHOAMI_PEOPLE.length).map((p) => p.id)).not.toContain(WHOAMI_PEOPLE[0].id);
  });

  it('the state survives a JSON round-trip', () => {
    let s = createThinkState();
    s = applyAnswer(s, bestQuestion(s) as WhoAmIAttr, 'yes');
    s = rejectGuess(s, WHOAMI_PEOPLE[3].id);
    const copy = JSON.parse(JSON.stringify(s)) as ThinkState;
    expect(bestQuestion(copy)).toBe(bestQuestion(s));
    expect(topCandidates(copy, 5).map((p) => p.id)).toEqual(topCandidates(s, 5).map((p) => p.id));
  });
});

describe('whoami — reverse mode', () => {
  it('offers four distinct names including the right one', () => {
    const rng = mulberry32(7);
    for (const p of WHOAMI_PEOPLE) {
      const opts = reverseOptions(p.id, rng);
      expect(opts).toHaveLength(REVERSE_OPTIONS);
      expect(new Set(opts).size).toBe(REVERSE_OPTIONS);
      expect(opts).toContain(p.id);
    }
  });

  it('scores fewer clues higher: 5, 4, 3, 2, 1', () => {
    expect([1, 2, 3, 4, 5].map(pointsFor)).toEqual([5, 4, 3, 2, 1]);
  });

  it('plays a full round: first-clue finds score the maximum', () => {
    let s = createReverse(mulberry32(1));
    expect(s.order).toHaveLength(REVERSE_ROUND);
    expect(new Set(s.order).size).toBe(REVERSE_ROUND);
    while (!s.finished) {
      s = pickReverse(s, currentTarget(s));
      // A second tap on the right answer must not score twice.
      s = pickReverse(s, currentTarget(s));
      s = nextReverse(s, mulberry32(s.index + 2));
    }
    expect(reverseScore(s)).toBe(REVERSE_MAX_POINTS);
    expect(reverseFound(s)).toBe(REVERSE_ROUND);
    expect(reverseTier(reverseScore(s))).toBe(3);
  });

  it('a wrong pick reveals the next clue; the same wrong pick twice costs once', () => {
    const s0 = createReverse(mulberry32(3));
    const wrongId = s0.options.find((id) => id !== currentTarget(s0)) as number;
    const s1 = pickReverse(s0, wrongId);
    expect(s1.clues).toBe(2);
    expect(pickReverse(s1, wrongId)).toBe(s1);
    const s2 = pickReverse(s1, currentTarget(s1));
    expect(s2.results[0]).toEqual({ id: currentTarget(s0), points: 4, found: true });
  });

  it('revealing every clue and missing scores zero', () => {
    let s = createReverse(mulberry32(4));
    while (s.clues < CLUES_PER_PERSON) s = revealClue(s);
    expect(revealClue(s)).toBe(s);
    const wrongId = s.options.find((id) => id !== currentTarget(s)) as number;
    s = pickReverse(s, wrongId);
    expect(s.resolved).toBe(true);
    expect(s.results[0].points).toBe(0);
    expect(s.results[0].found).toBe(false);
  });

  it('maps points to tiers, and zero pays nothing', () => {
    expect(reverseTier(0)).toBe(0);
    expect(reverseTier(1)).toBe(1);
    expect(reverseTier(10)).toBe(2);
    expect(reverseTier(REVERSE_MAX_POINTS)).toBe(3);
    expect(reverseTier(999)).toBe(3);
  });
});
