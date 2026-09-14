/**
 * Tests for «Ζωγράφισε & Μάντεψε» — the pure half.
 *
 * Nothing here mounts a canvas: the suite imports `drawLogic.ts` and the content
 * file only, so it stays fast and it cannot break because the component moved a
 * button. What it does guard is what a family at the table would notice —
 * the same word coming round twice, a sibling who draws four times while another
 * draws two, a wrong guess that scored anyway, and the four options never
 * containing the answer (or containing it twice).
 *
 * Randomness is injected everywhere, so every assertion below is deterministic.
 */
import { describe, it, expect } from 'vitest';
import {
  awardPoints,
  buildGuessOptions,
  clampPlayers,
  createSession,
  drawerOf,
  guessedShare,
  guessersOf,
  leaderboard,
  nextTurn,
  scoreToTier,
  sessionTier,
  takeWord,
  topScore,
  winners,
  wordPool,
  type DrawSession,
  type Rng,
} from './drawLogic';
import {
  DRAWINGS_PER_PLAYER,
  DRAW_SCORE_TIERS,
  DRAW_WORDS,
  MAX_PLAYERS,
  MIN_PLAYERS,
  OPTIONS_PER_ROUND,
  POINTS_PER_CORRECT_GUESS,
  POINTS_PER_DRAWER_CREDIT,
  type DrawGrade,
  type DrawWord,
} from '../../data/games/draw';
import { mulberry32 } from '../../utils/dailySeed';

const BANDS: readonly DrawGrade[] = ['1-2', '3-4', '5-6'];

/** A seeded rng, so "random" means "the same every run". */
const rng = (seed: number): Rng => mulberry32(seed);

/** The rng that always picks the first remaining item. */
const first: Rng = () => 0;

const wordByEl = (el: string): DrawWord => {
  const found = DRAW_WORDS.find((w) => w.el === el);
  if (!found) throw new Error(`no such word: ${el}`);
  return found;
};

/* ─────────────────────────── buildGuessOptions ─────────────────────────── */

describe('buildGuessOptions', () => {
  it('returns OPTIONS_PER_ROUND options in both languages', () => {
    const opts = buildGuessOptions(DRAW_WORDS[0], rng(1));
    expect(opts.el).toHaveLength(OPTIONS_PER_ROUND);
    expect(opts.en).toHaveLength(OPTIONS_PER_ROUND);
  });

  it('contains the answer exactly once, in el and in en, for every word', () => {
    DRAW_WORDS.forEach((word, i) => {
      const opts = buildGuessOptions(word, rng(i + 1));
      expect(opts.el.filter((o) => o === word.el), word.el).toHaveLength(1);
      expect(opts.en.filter((o) => o === word.en), word.en).toHaveLength(1);
    });
  });

  it('points correctIndex at the answer in both languages', () => {
    DRAW_WORDS.forEach((word, i) => {
      const opts = buildGuessOptions(word, rng(i + 100));
      expect(opts.el[opts.correctIndex], word.el).toBe(word.el);
      expect(opts.en[opts.correctIndex], word.en).toBe(word.en);
    });
  });

  it('never shows the same option twice', () => {
    DRAW_WORDS.forEach((word, i) => {
      const opts = buildGuessOptions(word, rng(i + 200));
      expect(new Set(opts.el).size, word.el).toBe(OPTIONS_PER_ROUND);
      expect(new Set(opts.en).size, word.en).toBe(OPTIONS_PER_ROUND);
    });
  });

  it('keeps el and en aligned, so switching language keeps the same board', () => {
    const word = wordByEl('γάτα');
    const opts = buildGuessOptions(word, rng(7));
    opts.el.forEach((el, i) => {
      if (el === word.el) {
        expect(opts.en[i]).toBe(word.en);
        return;
      }
      const at = word.distractorsEl.indexOf(el);
      expect(at).toBeGreaterThanOrEqual(0);
      expect(opts.en[i]).toBe(word.distractorsEn[at]);
    });
  });

  it('fills the wrong options from the word own distractors', () => {
    const word = wordByEl('σκύλος');
    const opts = buildGuessOptions(word, rng(11));
    const wrong = opts.el.filter((o) => o !== word.el);
    expect(wrong.slice().sort()).toEqual(word.distractorsEl.slice().sort());
  });

  it('moves the answer around instead of parking it in slot 0', () => {
    const word = wordByEl('ψάρι');
    const seen = new Set<number>();
    for (let seed = 0; seed < 60; seed++) {
      seen.add(buildGuessOptions(word, rng(seed)).correctIndex);
    }
    expect(seen.size).toBeGreaterThan(1);
  });

  it('still returns four options when a word is short of distractors', () => {
    // Content mistakes are forbidden by data/games/draw.test.ts; the guess
    // screen must survive one anyway rather than show three buttons.
    const broken: DrawWord = {
      ...wordByEl('γάτα'),
      distractorsEl: ['ελέφαντας'],
      distractorsEn: ['elephant'],
    };
    const opts = buildGuessOptions(broken, rng(3));
    expect(opts.el).toHaveLength(OPTIONS_PER_ROUND);
    expect(opts.en).toHaveLength(OPTIONS_PER_ROUND);
    expect(opts.el.filter((o) => o === broken.el)).toHaveLength(1);
  });

  it('drops a distractor that gives the answer away', () => {
    const broken: DrawWord = {
      ...wordByEl('γάτα'),
      distractorsEl: ['γάτα', 'ελέφαντας', 'παπαγάλος'],
      distractorsEn: ['cat', 'elephant', 'parrot'],
    };
    const opts = buildGuessOptions(broken, rng(5));
    expect(opts.el.filter((o) => o === 'γάτα')).toHaveLength(1);
    expect(opts.el).toHaveLength(OPTIONS_PER_ROUND);
  });
});

/* ────────────────────────────── the session ────────────────────────────── */

describe('createSession', () => {
  it('clamps the player count to what one phone supports', () => {
    expect(clampPlayers(0)).toBe(MIN_PLAYERS);
    expect(clampPlayers(1)).toBe(MIN_PLAYERS);
    expect(clampPlayers(99)).toBe(MAX_PLAYERS);
    expect(clampPlayers(4)).toBe(4);
    expect(clampPlayers(Number.NaN)).toBe(MIN_PLAYERS);
    expect(createSession(12, '1-2').players).toBe(MAX_PLAYERS);
  });

  it('starts everyone on zero with player 0 drawing first', () => {
    const s = createSession(4, '3-4');
    expect(s.scores).toEqual([0, 0, 0, 0]);
    expect(s.turn).toBe(0);
    expect(s.drawerIndex).toBe(0);
    expect(s.guessed).toBe(0);
    expect(s.finished).toBe(false);
    expect(s.totalTurns).toBe(4 * DRAWINGS_PER_PLAYER);
  });

  it('holds no personal data — players are indices, never names', () => {
    // The privacy rule as an assertion: adding a `names` field to DrawSession
    // (or anything else a child types) fails here.
    expect(Object.keys(createSession(3, '1-2')).sort()).toEqual([
      'drawerIndex', 'finished', 'grade', 'guessed', 'players',
      'scores', 'totalTurns', 'turn', 'usedWords',
    ]);
  });
});

/* ─────────────────────────────── the turns ─────────────────────────────── */

describe('nextTurn', () => {
  it('rotates the phone round the table', () => {
    let s = createSession(3, '1-2');
    const order: number[] = [s.drawerIndex];
    for (let i = 0; i < 5; i++) {
      s = nextTurn(s);
      order.push(s.drawerIndex);
    }
    expect(order).toEqual([0, 1, 2, 0, 1, 2]);
  });

  it('gives every player exactly DRAWINGS_PER_PLAYER drawings', () => {
    for (let players = MIN_PLAYERS; players <= MAX_PLAYERS; players++) {
      let s = createSession(players, '3-4');
      const drawn = new Array(players).fill(0);
      while (!s.finished) {
        drawn[s.drawerIndex] += 1;
        s = nextTurn(s);
      }
      expect(drawn, `${players} players`).toEqual(new Array(players).fill(DRAWINGS_PER_PLAYER));
      expect(s.turn).toBe(players * DRAWINGS_PER_PLAYER);
    }
  });

  it('keeps drawerIndex equal to turn % players all the way through', () => {
    let s = createSession(5, '5-6');
    while (!s.finished) {
      expect(s.drawerIndex).toBe(drawerOf(s));
      s = nextTurn(s);
    }
  });

  it('finishes after totalTurns and then refuses to start another drawing', () => {
    let s = createSession(2, '1-2');
    for (let i = 0; i < s.totalTurns; i++) s = nextTurn(s);
    expect(s.finished).toBe(true);
    const again = nextTurn(nextTurn(s));
    expect(again).toBe(s);
    expect(again.turn).toBe(s.totalTurns);
  });

  it('lists every player but the drawer as a guesser', () => {
    const s = createSession(4, '1-2');
    expect(guessersOf(s)).toEqual([1, 2, 3]);
    expect(guessersOf(nextTurn(s))).toEqual([0, 2, 3]);
  });
});

/* ─────────────────────────────── the points ────────────────────────────── */

describe('awardPoints', () => {
  const base = createSession(3, '1-2'); // drawer 0, guessers 1 and 2

  it('pays the guesser and credits the drawer', () => {
    const s = awardPoints(base, true, [1]);
    expect(s.scores[1]).toBe(POINTS_PER_CORRECT_GUESS);
    expect(s.scores[0]).toBe(POINTS_PER_DRAWER_CREDIT);
    expect(s.scores[2]).toBe(0);
    expect(s.guessed).toBe(1);
  });

  it('credits the drawer once per player who got it', () => {
    const s = awardPoints(base, true, [1, 2]);
    expect(s.scores[1]).toBe(POINTS_PER_CORRECT_GUESS);
    expect(s.scores[2]).toBe(POINTS_PER_CORRECT_GUESS);
    expect(s.scores[0]).toBe(2 * POINTS_PER_DRAWER_CREDIT);
    expect(s.guessed).toBe(1);
  });

  it('pays nobody for a wrong guess — not even the drawer', () => {
    const s = awardPoints(base, false, [1, 2]);
    expect(s.scores).toEqual([0, 0, 0]);
    expect(s.guessed).toBe(0);
    expect(s).toBe(base);
  });

  it('never lets the drawer credit themselves', () => {
    const s = awardPoints(base, true, [0]);
    expect(s.scores).toEqual([0, 0, 0]);
    expect(s.guessed).toBe(0);
  });

  it('ignores duplicates and players who are not at the table', () => {
    const s = awardPoints(base, true, [1, 1, 1, 9, -2]);
    expect(s.scores[1]).toBe(POINTS_PER_CORRECT_GUESS);
    expect(s.scores[0]).toBe(POINTS_PER_DRAWER_CREDIT);
    expect(s.guessed).toBe(1);
  });

  it('leaves the session untouched rather than mutating it', () => {
    const s = awardPoints(base, true, [2]);
    expect(base.scores).toEqual([0, 0, 0]);
    expect(base.guessed).toBe(0);
    expect(s).not.toBe(base);
  });

  it('accumulates over a whole session', () => {
    let s = createSession(2, '1-2');
    s = awardPoints(s, true, [1]);   // player 1 guesses player 0's drawing
    s = nextTurn(s);
    s = awardPoints(s, true, [0]);   // player 0 guesses player 1's drawing
    s = nextTurn(s);
    s = awardPoints(s, false, [1]);  // nobody gets the third
    expect(s.scores).toEqual([
      POINTS_PER_CORRECT_GUESS + POINTS_PER_DRAWER_CREDIT,
      POINTS_PER_CORRECT_GUESS + POINTS_PER_DRAWER_CREDIT,
    ]);
    expect(s.guessed).toBe(2);
  });
});

/* ───────────────────────────── the scoreboard ──────────────────────────── */

describe('leaderboard', () => {
  const withScores = (scores: number[]): DrawSession => ({
    ...createSession(scores.length, '1-2'),
    scores,
  });

  it('sorts best first and keeps player order on a tie', () => {
    expect(leaderboard(withScores([2, 7, 7, 0]))).toEqual([
      { player: 1, score: 7 },
      { player: 2, score: 7 },
      { player: 0, score: 2 },
      { player: 3, score: 0 },
    ]);
  });

  it('reports one winner, or everyone who tied', () => {
    expect(winners(withScores([3, 9, 1]))).toEqual([1]);
    expect(winners(withScores([4, 4, 1]))).toEqual([0, 1]);
    expect(winners(withScores([0, 0]))).toEqual([0, 1]);
    expect(topScore(withScores([3, 9, 1]))).toBe(9);
    expect(topScore(withScores([0, 0]))).toBe(0);
  });
});

/* ──────────────────────────────── the words ────────────────────────────── */

describe('takeWord', () => {
  it('only ever offers words from the chosen band', () => {
    for (const grade of BANDS) {
      let s = createSession(MAX_PLAYERS, grade);
      for (let i = 0; i < s.totalTurns; i++) {
        const taken = takeWord(s, rng(i + 1));
        expect(taken.word.grades, `${grade} turn ${i}`).toBe(grade);
        s = taken.state;
      }
    }
  });

  it('never repeats a word inside a session', () => {
    for (const grade of BANDS) {
      let s = createSession(MAX_PLAYERS, grade);
      const drawn: string[] = [];
      for (let i = 0; i < s.totalTurns; i++) {
        const taken = takeWord(s, rng(i * 31 + 7));
        drawn.push(taken.word.el);
        s = taken.state;
      }
      expect(drawn).toHaveLength(MAX_PLAYERS * DRAWINGS_PER_PLAYER);
      expect(new Set(drawn).size, grade).toBe(drawn.length);
      expect(s.usedWords).toEqual(drawn);
    }
  });

  it('never repeats even when the rng keeps asking for the same slot', () => {
    // `first` always points at index 0 of what is left, which is exactly the
    // pattern that breaks a "pick random, retry on repeat" implementation.
    let s = createSession(MAX_PLAYERS, '1-2');
    const drawn: string[] = [];
    for (let i = 0; i < s.totalTurns; i++) {
      const taken = takeWord(s, first);
      drawn.push(taken.word.el);
      s = taken.state;
    }
    expect(new Set(drawn).size).toBe(drawn.length);
  });

  it('has enough words for the longest session in every band', () => {
    for (const grade of BANDS) {
      expect(wordPool(grade).length, grade).toBeGreaterThanOrEqual(MAX_PLAYERS * DRAWINGS_PER_PLAYER);
    }
  });

  it('starts the record over rather than dead-ending on an exhausted band', () => {
    const grade: DrawGrade = '1-2';
    const pool = wordPool(grade);
    const s: DrawSession = { ...createSession(2, grade), usedWords: pool.map((w) => w.el) };
    const taken = takeWord(s, rng(2));
    expect(taken.word.grades).toBe(grade);
    expect(taken.state.usedWords).toEqual([taken.word.el]);
  });
});

/* ─────────────────────────────── the reward ────────────────────────────── */

describe('scoreToTier', () => {
  it('matches every boundary in DRAW_SCORE_TIERS', () => {
    for (const step of DRAW_SCORE_TIERS) {
      expect(scoreToTier(step.minGuessedShare), `at ${step.minGuessedShare}`).toBe(step.tier);
      if (step.minGuessedShare > 0) {
        expect(scoreToTier(step.minGuessedShare - 1e-9)).toBeLessThan(step.tier);
      }
    }
  });

  it('pays the top tier for a perfect session and something for a poor one', () => {
    expect(scoreToTier(1)).toBe(3);
    expect(scoreToTier(0.75)).toBe(3);
    expect(scoreToTier(0.74)).toBe(2);
    expect(scoreToTier(0.4)).toBe(2);
    expect(scoreToTier(0.39)).toBe(1);
    expect(scoreToTier(0)).toBe(1);
  });

  it('never returns a tier grantGameReward would reject', () => {
    for (const share of [-1, 0, 0.5, 1, 2, Number.NaN, Number.POSITIVE_INFINITY]) {
      const tier = scoreToTier(share);
      expect(tier).toBeGreaterThanOrEqual(0);
      expect(tier).toBeLessThanOrEqual(3);
    }
    expect(scoreToTier(Number.NaN)).toBe(0);
  });
});

describe('guessedShare', () => {
  it('is guessed over the whole session, not over the turns played', () => {
    const s = createSession(2, '1-2'); // 6 drawings
    expect(guessedShare({ ...s, guessed: 0 })).toBe(0);
    expect(guessedShare({ ...s, guessed: 3 })).toBeCloseTo(0.5);
    expect(guessedShare({ ...s, guessed: 6 })).toBe(1);
  });

  it('cannot exceed 1 or go negative on nonsense input', () => {
    expect(guessedShare({ guessed: 99, totalTurns: 6 })).toBe(1);
    expect(guessedShare({ guessed: -3, totalTurns: 6 })).toBe(0);
    expect(guessedShare({ guessed: 3, totalTurns: 0 })).toBe(0);
    expect(guessedShare({ guessed: Number.NaN, totalTurns: 6 })).toBe(0);
  });

  it('judges a two-player and a six-player session the same way', () => {
    // The reason the tier is keyed on a share: the same play at a bigger table
    // hands out far more points but must not hand out more XP.
    const small = { ...createSession(2, '1-2'), guessed: 3 };   // 3 of 6
    const big = { ...createSession(6, '1-2'), guessed: 9 };     // 9 of 18
    expect(sessionTier(small)).toBe(sessionTier(big));
  });
});

/* ────────────────────────── a session end to end ───────────────────────── */

describe('a full session', () => {
  it('plays 6×3 drawings with no repeat, points that add up and a tier at the end', () => {
    let s = createSession(6, '5-6');
    const words: string[] = [];
    let expectedPoints = 0;

    for (let i = 0; !s.finished; i++) {
      const taken = takeWord(s, rng(i + 500));
      words.push(taken.word.el);
      s = taken.state;

      const options = buildGuessOptions(taken.word, rng(i + 900));
      expect(options.el[options.correctIndex]).toBe(taken.word.el);

      // Every third drawing goes unguessed; the rest are got by one player.
      const correct = i % 3 !== 0;
      const guesser = guessersOf(s)[0];
      s = awardPoints(s, correct, correct ? [guesser] : []);
      if (correct) expectedPoints += POINTS_PER_CORRECT_GUESS + POINTS_PER_DRAWER_CREDIT;

      s = nextTurn(s);
    }

    expect(words).toHaveLength(18);
    expect(new Set(words).size).toBe(18);
    expect(s.scores.reduce((a, b) => a + b, 0)).toBe(expectedPoints);
    expect(s.guessed).toBe(12);
    expect(guessedShare(s)).toBeCloseTo(12 / 18);
    expect(sessionTier(s)).toBe(2);
    expect(leaderboard(s)[0].score).toBe(topScore(s));
  });
});

/**
 * The double-award hazard, pinned at the logic level.
 *
 * `AnimatePresence mode="wait"` keeps the outgoing screen mounted and clickable
 * for its exit tween, so a child's second tap can re-run an award handler with
 * the pre-change state still in its closure. The component guards this with
 * refs (`awardedRef`), which mutate synchronously and therefore survive that
 * window — a state-based guard cannot, because state is exactly what is stale.
 *
 * These tests do not exercise the ref; they prove WHY it has to exist, by
 * showing what a second award actually costs. If someone removes the latch,
 * the numbers below are what a family sees.
 */
describe('awarding the same round twice — what the ref latch prevents', () => {
  const twoPlayerRound = () => createSession(2, '1-2');

  it('doubles the points when the same round is awarded twice', () => {
    const s = twoPlayerRound();
    const guesser = guessersOf(s)[0];
    const once = awardPoints(s, true, [guesser]);
    const twice = awardPoints(once, true, [guesser]);

    expect(once.scores[guesser]).toBe(POINTS_PER_CORRECT_GUESS);
    expect(twice.scores[guesser]).toBe(POINTS_PER_CORRECT_GUESS * 2);
    expect(twice.scores[once.drawerIndex]).toBe(POINTS_PER_DRAWER_CREDIT * 2);
  });

  it('pushes `guessed` past the number of turns actually played', () => {
    let s = twoPlayerRound();
    const guesser = guessersOf(s)[0];
    s = awardPoints(s, true, [guesser]);
    s = awardPoints(s, true, [guesser]);

    expect(s.guessed).toBe(2);
    // One turn has been played, so a second award claims more drawings were
    // guessed than exist — the share card would read "2 από 6" after one round.
    expect(s.guessed).toBeGreaterThan(1);
  });

  it('inflates the reward tier a session actually earned', () => {
    // Six turns, two of them guessed: a third of the drawings, tier 1.
    let honest = createSession(2, '1-2');
    for (let i = 0; i < 6; i++) {
      const guesser = guessersOf(honest)[0];
      honest = awardPoints(honest, i < 2, i < 2 ? [guesser] : []);
      honest = nextTurn(honest);
    }

    // The same six turns, but every award landed twice.
    let doubled = createSession(2, '1-2');
    for (let i = 0; i < 6; i++) {
      const guesser = guessersOf(doubled)[0];
      if (i < 2) {
        doubled = awardPoints(doubled, true, [guesser]);
        doubled = awardPoints(doubled, true, [guesser]);
      }
      doubled = nextTurn(doubled);
    }

    expect(doubled.guessed).toBeGreaterThan(honest.guessed);
    expect(sessionTier(doubled)).toBeGreaterThan(sessionTier(honest));
  });

  it('clamps guessedShare to 1 even when `guessed` overshoots', () => {
    let s = createSession(2, '1-2');
    for (let i = 0; i < 20; i++) {
      const guesser = guessersOf(s)[0];
      s = awardPoints(s, true, [guesser]);
    }
    expect(guessedShare(s)).toBeLessThanOrEqual(1);
  });
});
