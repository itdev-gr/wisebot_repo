/**
 * ΖΩΓΡΑΦΙΣΕ & ΜΑΝΤΕΨΕ — the pure logic
 * ====================================
 * Everything about `draw` that can be decided without a canvas: which four
 * options a drawing is guessed from, whose turn it is, who gets which points,
 * which word comes next (and never twice in one session), and what the session
 * is worth in XP.
 *
 * It lives apart from `DrawGuess.tsx` for the same reason `dailyLogic.ts` lives
 * apart from `DailyChallenge.tsx`: this is the half worth testing.
 * `drawLogic.test.ts` imports only this file and `data/games/draw.ts`, so the
 * suite never mounts a canvas and can still assert the rules a family would
 * notice — a repeated word, a player who draws four times while another draws
 * two, a wrong guess that somehow scored.
 *
 * NO REACT, NO DOM, NO localStorage in this file. Every function is pure: a
 * `DrawSession` goes in, a new `DrawSession` comes out, and randomness always
 * arrives as an injected `rng` so a test can pin it.
 *
 * PRIVACY (hard rule, audience is 6–12): a player is an **index**, 0…players-1,
 * and nothing else. There is no name, no avatar, no age field in `DrawSession`
 * and there must never be one — `DRAW_COPY.playerName(n)` turns an index into
 * «ΠΑΙΚΤΗΣ 3» at render time. `drawLogic.test.ts` asserts the exact key set of a
 * session so a name cannot be added here by accident.
 */
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

/** Injected randomness. `Math.random` in the game — this is not a daily game,
 *  so nothing here has to be the same on two devices. */
export type Rng = () => number;

/* ──────────────────────────────── helpers ──────────────────────────────── */

/** Fisher–Yates on a copy. Clamped so an rng that ever returns exactly 1
 *  (`Math.random` never does, a stubbed one might) cannot index off the end. */
function shuffled<T>(items: readonly T[], rng: Rng): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.min(i, Math.floor(rng() * (i + 1)));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

function toInt(value: unknown, fallback: number): number {
  const n = Math.floor(Number(value));
  return Number.isFinite(n) ? n : fallback;
}

/* ─────────────────────────────── the options ───────────────────────────── */

/**
 * The four options a drawing is guessed from, in both languages.
 *
 * Greek and English share **one** permutation, so the answer sits in the same
 * slot in either language: a family that flips the app to English between two
 * rounds does not get a reshuffled board, and the component can keep a single
 * `correctIndex` instead of one per language.
 */
export interface GuessOptions {
  el: string[];
  en: string[];
  /** Index of the answer in both arrays. */
  correctIndex: number;
}

/** One option as the pair it really is — the same concept in two languages. */
interface OptionPair {
  el: string;
  en: string;
}

/**
 * `word` plus three of its distractors, shuffled: exactly `OPTIONS_PER_ROUND`
 * options, the answer present exactly once.
 *
 * The distractor lists in `data/games/draw.ts` are parallel (`distractorsEl[1]`
 * is the Greek of `distractorsEn[1]`), so they are zipped into pairs before the
 * shuffle — shuffling the two languages independently would put «ελέφαντας» in
 * slot 1 and "parrot" in slot 1, and the child who switches language mid-game
 * would be looking at a different board.
 *
 * Defensive about content mistakes the data suite already forbids, because a
 * broken guess screen is the one place a child cannot work around: a distractor
 * equal to the answer is dropped, duplicates are dropped, and a word left with
 * fewer than three usable distractors is topped up from other words in the list
 * rather than shown with three options.
 */
export function buildGuessOptions(word: DrawWord, rng: Rng = Math.random): GuessOptions {
  const seenEl = new Set<string>([word.el]);
  const seenEn = new Set<string>([word.en]);
  const pairs: OptionPair[] = [];

  const wanted = Math.max(1, OPTIONS_PER_ROUND) - 1;
  const count = Math.min(word.distractorsEl.length, word.distractorsEn.length);
  for (let i = 0; i < count && pairs.length < wanted; i++) {
    const el = word.distractorsEl[i];
    const en = word.distractorsEn[i];
    if (!el || !en || seenEl.has(el) || seenEn.has(en)) continue;
    seenEl.add(el);
    seenEn.add(en);
    pairs.push({ el, en });
  }

  // Top-up: only reachable if the content file broke its own contract.
  for (let i = 0; i < DRAW_WORDS.length && pairs.length < wanted; i++) {
    const other = DRAW_WORDS[i];
    if (seenEl.has(other.el) || seenEn.has(other.en)) continue;
    seenEl.add(other.el);
    seenEn.add(other.en);
    pairs.push({ el: other.el, en: other.en });
  }

  const options = shuffled([{ el: word.el, en: word.en }, ...pairs], rng);
  return {
    el: options.map((o) => o.el),
    en: options.map((o) => o.en),
    correctIndex: options.findIndex((o) => o.el === word.el && o.en === word.en),
  };
}

/* ─────────────────────────────── the session ───────────────────────────── */

/**
 * One game round the table, from «ΞΕΚΙΝΑΜΕ» to the final scoreboard.
 *
 * Immutable: every function below returns a new object, so React state updates
 * are a plain assignment and a stale closure can never half-apply a turn.
 */
export interface DrawSession {
  /** How many people are passing the phone, `MIN_PLAYERS`…`MAX_PLAYERS`. */
  players: number;
  /** Which band of `DRAW_WORDS` this session draws from. */
  grade: DrawGrade;
  /** `players × DRAWINGS_PER_PLAYER` — every player draws the same number of times. */
  totalTurns: number;
  /** 0-based index of the drawing being played, 0…`totalTurns`-1. */
  turn: number;
  /** 0-based index of the player holding the phone. Always `turn % players`. */
  drawerIndex: number;
  /** Points per player, by index. */
  scores: readonly number[];
  /** How many of the drawings so far were guessed by at least one player. */
  guessed: number;
  /** The `el` of every word already drawn this session — the no-repeat record. */
  usedWords: readonly string[];
  /** True once all `totalTurns` drawings are done. */
  finished: boolean;
}

/** Player count coerced into the range the game actually supports. */
export function clampPlayers(players: number): number {
  const n = toInt(players, MIN_PLAYERS);
  return Math.min(MAX_PLAYERS, Math.max(MIN_PLAYERS, n));
}

/** A fresh session. Scores at zero, player 0 draws first, no word used yet. */
export function createSession(players: number, grade: DrawGrade): DrawSession {
  const n = clampPlayers(players);
  return {
    players: n,
    grade,
    totalTurns: n * DRAWINGS_PER_PLAYER,
    turn: 0,
    drawerIndex: 0,
    scores: new Array(n).fill(0),
    guessed: 0,
    usedWords: [],
    finished: false,
  };
}

/* ──────────────────────────────── the words ────────────────────────────── */

/** Every word offered to a band, in file order. */
export function wordPool(grade: DrawGrade): DrawWord[] {
  const pool = DRAW_WORDS.filter((w) => w.grades === grade);
  // A band with no words would mean the content file and `DRAW_GRADES` have
  // drifted apart; play on with the whole list rather than hand the drawer a
  // blank screen.
  return pool.length ? pool : DRAW_WORDS.slice();
}

/**
 * The next word to draw, and the session that remembers it was used.
 *
 * **A word never repeats inside a session** — that is the point of this
 * function and `drawLogic.test.ts` plays a full six-player session to prove it.
 * Each band holds 50 words and the longest session needs 18, so the pool cannot
 * run out; if a content edit ever shrank a band below the session length the
 * record starts over instead of dead-ending.
 */
export function takeWord(
  state: DrawSession,
  rng: Rng = Math.random,
): { word: DrawWord; state: DrawSession } {
  const pool = wordPool(state.grade);
  const used = new Set(state.usedWords);
  const fresh = pool.filter((w) => !used.has(w.el));
  const available = fresh.length ? fresh : pool;
  const word = available[Math.min(available.length - 1, Math.floor(rng() * available.length))];
  const usedWords = fresh.length ? [...state.usedWords, word.el] : [word.el];
  return { word, state: { ...state, usedWords } };
}

/* ──────────────────────────────── the turns ────────────────────────────── */

/**
 * Hand the phone on.
 *
 * The drawer is always `turn % players`, so with 3 players and 3 drawings each
 * the order is 0,1,2,0,1,2,0,1,2 and everybody draws exactly
 * `DRAWINGS_PER_PLAYER` times — nobody is left drawing twice while a sibling
 * draws four times. Past the last turn the session is `finished` and further
 * calls are a no-op, so a double-tapped «ΕΠΟΜΕΝΟΣ» cannot start a 19th drawing.
 */
export function nextTurn(state: DrawSession): DrawSession {
  if (state.finished) return state;
  const turn = state.turn + 1;
  const finished = turn >= state.totalTurns;
  return {
    ...state,
    turn,
    finished,
    // Keep the last drawer on a finished session: the end screen still shows
    // whose drawing is on the phone.
    drawerIndex: finished ? state.drawerIndex : turn % state.players,
  };
}

/** Whose turn it is to draw, as a 0-based index. */
export function drawerOf(state: DrawSession): number {
  return state.players > 0 ? state.turn % state.players : 0;
}

/** Everybody who is guessing this turn, as 0-based indices. */
export function guessersOf(state: DrawSession): number[] {
  const out: number[] = [];
  for (let i = 0; i < state.players; i++) {
    if (i !== state.drawerIndex) out.push(i);
  }
  return out;
}

/* ─────────────────────────────── the points ────────────────────────────── */

/**
 * Score one finished drawing.
 *
 * The brief: «Πόντοι σε ζωγράφο και μάντη». So a correct guess pays the guesser
 * `POINTS_PER_CORRECT_GUESS` **and** the drawer `POINTS_PER_DRAWER_CREDIT` for
 * each player who got it — drawing clearly is worth as much as guessing fast.
 * A wrong guess pays nobody, including the drawer.
 *
 * `guessers` are 0-based indices. The drawer is filtered out of it (they know
 * the word; they cannot credit themselves), as are duplicates and anything
 * outside the table. A `correct` that survives with no valid guesser scores
 * nothing and does not count towards `guessed` — the drawing was not guessed by
 * anyone, whatever was tapped.
 */
export function awardPoints(
  state: DrawSession,
  correct: boolean,
  guessers: readonly number[] = [],
): DrawSession {
  if (!correct) return state;

  const credited: number[] = [];
  const seen = new Set<number>();
  for (const raw of guessers) {
    const i = toInt(raw, -1);
    if (i < 0 || i >= state.players || i === state.drawerIndex || seen.has(i)) continue;
    seen.add(i);
    credited.push(i);
  }
  if (!credited.length) return state;

  const scores = state.scores.slice();
  for (const i of credited) scores[i] += POINTS_PER_CORRECT_GUESS;
  scores[state.drawerIndex] += credited.length * POINTS_PER_DRAWER_CREDIT;

  return { ...state, scores, guessed: state.guessed + 1 };
}

/* ───────────────────────────── the scoreboard ──────────────────────────── */

/** One row of the scoreboard. `player` is the 0-based index, never a name. */
export interface DrawStanding {
  player: number;
  score: number;
}

/** The scoreboard, best first; equal scores keep player order. */
export function leaderboard(state: DrawSession): DrawStanding[] {
  return state.scores
    .map((score, player) => ({ player, score }))
    .sort((a, b) => (b.score - a.score) || (a.player - b.player));
}

/** The highest score on the table (0 for an empty one). */
export function topScore(state: DrawSession): number {
  return state.scores.reduce((best, s) => (s > best ? s : best), 0);
}

/** Everyone on the top score. More than one means «Ισοπαλία». */
export function winners(state: DrawSession): number[] {
  const best = topScore(state);
  const out: number[] = [];
  for (let i = 0; i < state.scores.length; i++) {
    if (state.scores[i] === best) out.push(i);
  }
  return out;
}

/* ──────────────────────────────── the reward ───────────────────────────── */

/**
 * Share of the session's drawings that somebody guessed, 0–1.
 *
 * Uses `totalTurns`, not the turns played: a family that walks away after five
 * of eighteen drawings has not had a 100% session.
 */
export function guessedShare(state: Pick<DrawSession, 'guessed' | 'totalTurns'>): number {
  const total = Number(state.totalTurns);
  const guessed = Number(state.guessed);
  if (!Number.isFinite(total) || total <= 0 || !Number.isFinite(guessed) || guessed <= 0) return 0;
  return Math.min(1, guessed / total);
}

/**
 * Guessed share (0–1) → the tier handed to `grantGameReward`, which pays
 * 10/20/30 ⭐ XP for tiers 1/2/3.
 *
 * **Why a share and not the top score.** The obvious input is the winner's
 * points, and it is the wrong one: a six-player session hands out roughly three
 * times the points of a two-player one for exactly the same play, so a top
 * score would pay a crowd more XP than a parent and a child. The share of
 * drawings that got guessed is the same scale at any table size, which is why
 * `DRAW_SCORE_TIERS` in `data/games/draw.ts` is keyed on `minGuessedShare` —
 * change the boundaries there, not here.
 */
export function scoreToTier(guessedShare: number): 0 | 1 | 2 | 3 {
  if (!Number.isFinite(guessedShare)) return 0;
  for (const step of DRAW_SCORE_TIERS) {
    if (guessedShare >= step.minGuessedShare) return step.tier;
  }
  return 0;
}

/** The tier a finished session earns. */
export function sessionTier(state: DrawSession): 0 | 1 | 2 | 3 {
  return scoreToTier(guessedShare(state));
}
