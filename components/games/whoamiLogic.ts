/**
 * «Ποιος είμαι;» — the rules, with no React and no DOM.
 * ======================================================
 * Everything here is a pure function over a plain, JSON-serialisable state, so
 * `whoamiLogic.test.ts` can play all 95 people end to end in milliseconds.
 *
 * MODE A — WiseBot guesses (Akinator without AI)
 * ----------------------------------------------
 * Nobody is ever hard-filtered out. Each person carries a count of
 * **contradictions**: answers the child gave that disagree with that person's
 * attributes. «ΔΕΝ ΞΕΡΩ» adds none. The people with the fewest contradictions
 * are the leaders; everyone within `WRONG_ANSWER_TOLERANCE` of them stays in the
 * **pool**, weighted `LIE_WEIGHT ^ (extra contradictions)` — so one wrong
 * answer from a seven-year-old demotes the right person instead of deleting
 * them.
 *
 * `bestQuestion` picks the unasked attribute with the highest information gain
 * over the weighted pool. Answers are deterministic given the person, so the
 * gain of a question is the entropy of its yes/no split — the most balanced
 * split wins, ties go to the earlier (friendlier) attribute. A question that
 * does not split the pool is never asked, and nothing is ever asked twice.
 *
 * When no new question splits the pool, `recheckQuestion` re-asks one answered
 * question «για να σιγουρευτώ» (each at most once, and it costs one of the 20).
 * If the child answers it differently, the two answers cancel out: one of them
 * was the slip, and with it gone everything else they said is consistent.
 * `nextQuestion` combines the two; the component only ever calls that.
 *
 * `shouldGuess` fires when the leader is alone at the top and holds at least
 * `GUESS_CONFIDENCE` of the pool's weight — or when the 20 questions are used
 * up, or when nothing left can split the pool. A wrong guess removes that
 * person (`rejectGuess`) and the game carries on; the second wrong guess ends
 * it.
 *
 * Measured by `whoamiLogic.test.ts` over all 95 people: truthful answers find
 * everyone on the first guess (worst 12 questions, mean 8.4); one flipped
 * answer at any of the 20 positions still finds everyone within two guesses
 * and 20 questions (1900 games).
 *
 * MODE B — the child guesses
 * --------------------------
 * `REVERSE_ROUND` people, five clues each (hardest first), four names to pick
 * from. Found after `n` clues scores `CLUES_PER_PERSON + 1 - n`. A wrong pick
 * reveals the next clue; a wrong pick on the last clue scores 0.
 */
import {
  CLUES_PER_PERSON,
  MAX_GUESSES,
  MAX_QUESTIONS,
  REVERSE_MAX_POINTS,
  REVERSE_OPTIONS,
  REVERSE_ROUND,
  REVERSE_TIERS,
  WHOAMI_ATTRS,
  WHOAMI_PEOPLE,
  WRONG_ANSWER_TOLERANCE,
  type WhoAmIAnswer,
  type WhoAmIAttr,
  type WhoAmIPerson,
} from '../../data/games/whoami';

type Rng = () => number;
type People = readonly WhoAmIPerson[];

/**
 * How much less likely a person becomes with each extra contradiction. 0.15
 * means "a child gets one of these answers wrong about one time in seven".
 */
export const LIE_WEIGHT = 0.15;

/** Share of the pool's weight the leader needs before WiseBot guesses. */
export const GUESS_CONFIDENCE = 0.8;

/* ════════════════════════════ MODE A ════════════════════════════════════ */

export interface ThinkState {
  /** Attributes asked so far, in order. Never contains a repeat. */
  asked: WhoAmIAttr[];
  /** The child's answer to each entry of `asked` (the latest one, after a re-check). */
  answers: WhoAmIAnswer[];
  /** Attributes asked a second time «για να σιγουρευτώ» — each at most once. */
  rechecked: WhoAmIAttr[];
  /** Person id → how many answers so far disagree with that person. */
  misses: Record<number, number>;
  /** Ids WiseBot guessed and the child said «ΟΧΙ» to. */
  rejected: number[];
}

export function createThinkState(people: People = WHOAMI_PEOPLE): ThinkState {
  const misses: Record<number, number> = {};
  for (const p of people) misses[p.id] = 0;
  return { asked: [], answers: [], rechecked: [], misses, rejected: [] };
}

/** Questions used from the budget of 20: new ones plus re-checks («ΔΕΝ ΞΕΡΩ» counts). */
export function questionsAsked(state: ThinkState): number {
  return state.asked.length + state.rechecked.length;
}

function missesOf(state: ThinkState, id: number): number {
  return state.misses[id] ?? 0;
}

/** Everyone not rejected, with the smallest contradiction count first. */
function standing(state: ThinkState, people: People): { person: WhoAmIPerson; misses: number }[] {
  return people
    .filter((p) => !state.rejected.includes(p.id))
    .map((person) => ({ person, misses: missesOf(state, person.id) }))
    .sort((a, b) => a.misses - b.misses);
}

/** The weighted pool: everyone within the tolerance of the leader. */
function pool(state: ThinkState, people: People): { person: WhoAmIPerson; weight: number }[] {
  const all = standing(state, people);
  if (!all.length) return [];
  const min = all[0].misses;
  return all
    .filter((s) => s.misses <= min + WRONG_ANSWER_TOLERANCE)
    .map((s) => ({ person: s.person, weight: Math.pow(LIE_WEIGHT, s.misses - min) }));
}

/** People tied for the fewest contradictions — "who WiseBot has in mind". */
export function leaderCount(state: ThinkState, people: People = WHOAMI_PEOPLE): number {
  const all = standing(state, people);
  if (!all.length) return 0;
  return all.filter((s) => s.misses === all[0].misses).length;
}

/** Binary entropy in bits. */
function entropy(p: number): number {
  if (p <= 0 || p >= 1) return 0;
  return -(p * Math.log2(p) + (1 - p) * Math.log2(1 - p));
}

/** Information gain of asking `attr` over the current weighted pool. */
export function questionGain(state: ThinkState, attr: WhoAmIAttr, people: People = WHOAMI_PEOPLE): number {
  return gainOver(pool(state, people), attr);
}

function gainOver(members: { person: WhoAmIPerson; weight: number }[], attr: WhoAmIAttr): number {
  let yesW = 0;
  let total = 0;
  let yesN = 0;
  for (const m of members) {
    total += m.weight;
    if (m.person.attrs[attr]) {
      yesW += m.weight;
      yesN += 1;
    }
  }
  // A question everybody in the pool answers the same way teaches nothing.
  if (yesN === 0 || yesN === members.length || total <= 0) return 0;
  return entropy(yesW / total);
}

/**
 * The next question: the unasked attribute that best splits the pool, or null
 * when no unasked attribute splits it at all.
 */
export function bestQuestion(state: ThinkState, people: People = WHOAMI_PEOPLE): WhoAmIAttr | null {
  if (questionsAsked(state) >= MAX_QUESTIONS) return null;
  return mostInformative(state, WHOAMI_ATTRS.filter((a) => !state.asked.includes(a)), people);
}

function mostInformative(state: ThinkState, attrs: readonly WhoAmIAttr[], people: People): WhoAmIAttr | null {
  const members = pool(state, people);
  let best: WhoAmIAttr | null = null;
  let bestGain = 0;
  for (const attr of attrs) {
    const gain = gainOver(members, attr);
    if (gain > bestGain + 1e-12) {
      best = attr;
      bestGain = gain;
    }
  }
  return best;
}

/**
 * «Για να σιγουρευτώ…» — an already-answered question worth asking once more.
 *
 * One wrong answer can leave two or three people who are each one mistake
 * away from everything the child said, and who differ only on questions
 * already asked. No new question can separate them, and two guesses are not
 * always enough for three. Re-asking the question they disagree on can: a
 * slip made once is rarely made twice. Only answered (not «ΔΕΝ ΞΕΡΩ»)
 * questions qualify, each at most once, and each re-check costs one of the 20.
 */
export function recheckQuestion(state: ThinkState, people: People = WHOAMI_PEOPLE): WhoAmIAttr | null {
  if (questionsAsked(state) >= MAX_QUESTIONS) return null;
  const candidates = state.asked.filter(
    (a, i) => state.answers[i] !== 'dontknow' && !state.rechecked.includes(a),
  );
  return mostInformative(state, candidates, people);
}

/**
 * Record the child's answer.
 *
 * A new question: «ΔΕΝ ΞΕΡΩ» is remembered (so it is not asked again) but adds
 * a contradiction to nobody; «ΝΑΙ»/«ΟΧΙ» adds one to everyone it disagrees with.
 *
 * A re-check of an answered question: the new answer replaces the old one and
 * the contradictions are moved accordingly («ΔΕΝ ΞΕΡΩ» or the same answer
 * again leaves everything as it was). A third answer to the same question is
 * ignored — the state comes back unchanged.
 */
export function applyAnswer(
  state: ThinkState,
  attr: WhoAmIAttr,
  answer: WhoAmIAnswer,
  people: People = WHOAMI_PEOPLE,
): ThinkState {
  const at = state.asked.indexOf(attr);
  if (at >= 0) {
    const before = state.answers[at];
    if (state.rechecked.includes(attr) || before === 'dontknow') return state;
    const rechecked = [...state.rechecked, attr];
    if (answer === 'dontknow' || answer === before) return { ...state, rechecked };
    // The child has now said both ΝΑΙ and ΟΧΙ to the same question, and one of
    // the two is the slip — we cannot know which. Trusting the newer one fails
    // whenever the slip is the re-check itself, so the two cancel out: the
    // question becomes a «ΔΕΝ ΞΕΡΩ», and every other answer still stands.
    const saidBefore = before === 'yes';
    const misses = { ...state.misses };
    for (const p of people) {
      if (p.attrs[attr] !== saidBefore) misses[p.id] = Math.max(0, missesOf(state, p.id) - 1);
    }
    const answers = state.answers.slice();
    answers[at] = 'dontknow';
    return { ...state, answers, rechecked, misses };
  }
  const misses = { ...state.misses };
  if (answer !== 'dontknow') {
    const said = answer === 'yes';
    for (const p of people) {
      if (p.attrs[attr] !== said) misses[p.id] = missesOf(state, p.id) + 1;
    }
  }
  return {
    ...state,
    asked: [...state.asked, attr],
    answers: [...state.answers, answer],
    misses,
  };
}

/** The `n` most likely people, best first (ties keep the data file's order). */
export function topCandidates(state: ThinkState, n: number, people: People = WHOAMI_PEOPLE): WhoAmIPerson[] {
  return standing(state, people).slice(0, Math.max(0, n)).map((s) => s.person);
}

/** Share of the pool's weight held by the leader, 0–1. */
export function leaderConfidence(state: ThinkState, people: People = WHOAMI_PEOPLE): number {
  const members = pool(state, people);
  if (!members.length) return 0;
  const total = members.reduce((sum, m) => sum + m.weight, 0);
  return total > 0 ? members[0].weight / total : 0;
}

/** Guesses already spent. */
export function guessesUsed(state: ThinkState): number {
  return state.rejected.length;
}

/** True once WiseBot has used every guess it has. */
export function outOfGuesses(state: ThinkState): boolean {
  return state.rejected.length >= MAX_GUESSES;
}

/** What WiseBot asks next: a new question, else a re-check, else nothing. */
export interface NextQuestion {
  attr: WhoAmIAttr;
  /** True when this repeats an answered question «για να σιγουρευτώ». */
  recheck: boolean;
}

/**
 * The next thing to ask, or null when it is time to guess: the leader is alone
 * at the top and confident enough, the 20 questions are spent, or neither a
 * new question nor a re-check can split the pool.
 */
export function nextQuestion(state: ThinkState, people: People = WHOAMI_PEOPLE): NextQuestion | null {
  if (outOfGuesses(state) || questionsAsked(state) >= MAX_QUESTIONS) return null;
  if (leaderCount(state, people) === 1 && leaderConfidence(state, people) >= GUESS_CONFIDENCE) return null;
  const fresh = bestQuestion(state, people);
  if (fresh) return { attr: fresh, recheck: false };
  const again = recheckQuestion(state, people);
  if (again) return { attr: again, recheck: true };
  return null;
}

/** Time to guess? True exactly when there is nothing left worth asking. */
export function shouldGuess(state: ThinkState, people: People = WHOAMI_PEOPLE): boolean {
  if (outOfGuesses(state)) return false;
  return nextQuestion(state, people) === null;
}

/** The child said «ΟΧΙ» to a guess: that person is out for the rest of the round. */
export function rejectGuess(state: ThinkState, id: number): ThinkState {
  if (state.rejected.includes(id)) return state;
  return { ...state, rejected: [...state.rejected, id] };
}

/** `n` distinct people to suggest on the «σκέψου» screen. */
export function suggestPeople(n: number, rng: Rng = Math.random, people: People = WHOAMI_PEOPLE): WhoAmIPerson[] {
  return shuffle(people, rng).slice(0, Math.max(0, Math.min(n, people.length)));
}

/* ════════════════════════════ MODE B ════════════════════════════════════ */

export interface ReverseResult {
  id: number;
  points: number;
  found: boolean;
}

export interface ReverseState {
  /** Person ids for this round, in play order. */
  order: number[];
  /** Index into `order` of the person being guessed. */
  index: number;
  /** Clues showing for the current person, 1–`CLUES_PER_PERSON`. */
  clues: number;
  /** The names offered for the current person (ids, shuffled). */
  options: number[];
  /** Options already picked wrongly for the current person. */
  wrong: number[];
  /** True once the current person is found or missed. */
  resolved: boolean;
  /** One entry per resolved person. */
  results: ReverseResult[];
  /** True once the last person's result is in and «ΕΠΟΜΕΝΟΣ» was pressed. */
  finished: boolean;
}

function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.min(Math.floor(rng() * (i + 1)), i);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function byId(id: number, people: People): WhoAmIPerson | undefined {
  return people.find((p) => p.id === id);
}

/** How many of the 36 answers two people disagree on. */
export function distance(a: WhoAmIPerson, b: WhoAmIPerson): number {
  let d = 0;
  for (const attr of WHOAMI_ATTRS) if (a.attrs[attr] !== b.attrs[attr]) d += 1;
  return d;
}

/**
 * Four names for `targetId`: the right one plus three decoys drawn from the
 * ten people most like them, so the clues — not a wild mismatch — decide it.
 */
export function reverseOptions(targetId: number, rng: Rng = Math.random, people: People = WHOAMI_PEOPLE): number[] {
  const target = byId(targetId, people);
  if (!target) return [];
  const near = people
    .filter((p) => p.id !== targetId)
    .map((p) => ({ id: p.id, d: distance(target, p) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 10)
    .map((x) => x.id);
  const decoys = shuffle(near, rng).slice(0, REVERSE_OPTIONS - 1);
  return shuffle([targetId, ...decoys], rng);
}

export function createReverse(rng: Rng = Math.random, people: People = WHOAMI_PEOPLE): ReverseState {
  const order = shuffle(people.map((p) => p.id), rng).slice(0, Math.min(REVERSE_ROUND, people.length));
  return {
    order,
    index: 0,
    clues: 1,
    options: reverseOptions(order[0], rng, people),
    wrong: [],
    resolved: false,
    results: [],
    finished: false,
  };
}

/** Points for finding someone after `clues` clues: 5, 4, 3, 2, 1. */
export function pointsFor(clues: number): number {
  return Math.max(0, CLUES_PER_PERSON + 1 - clues);
}

/** The id being guessed right now. */
export function currentTarget(state: ReverseState): number {
  return state.order[state.index];
}

/** «ΘΕΛΩ ΚΙ ΑΛΛΟ ΣΤΟΙΧΕΙΟ». No-op once resolved or out of clues. */
export function revealClue(state: ReverseState): ReverseState {
  if (state.resolved || state.finished || state.clues >= CLUES_PER_PERSON) return state;
  return { ...state, clues: state.clues + 1 };
}

/**
 * The child picks a name. Right → scored and resolved. Wrong → that name is
 * greyed out and the next clue appears; wrong on the last clue → 0 points.
 * Picking an already-wrong name, or picking after resolution, changes nothing.
 */
export function pickReverse(state: ReverseState, id: number): ReverseState {
  if (state.resolved || state.finished || state.wrong.includes(id) || !state.options.includes(id)) return state;
  const target = currentTarget(state);
  if (id === target) {
    return {
      ...state,
      resolved: true,
      results: [...state.results, { id: target, points: pointsFor(state.clues), found: true }],
    };
  }
  const wrong = [...state.wrong, id];
  if (state.clues >= CLUES_PER_PERSON) {
    return {
      ...state,
      wrong,
      resolved: true,
      results: [...state.results, { id: target, points: 0, found: false }],
    };
  }
  return { ...state, wrong, clues: state.clues + 1 };
}

/** «ΕΠΟΜΕΝΟΣ»: move to the next person, or finish the round after the last. */
export function nextReverse(state: ReverseState, rng: Rng = Math.random, people: People = WHOAMI_PEOPLE): ReverseState {
  if (!state.resolved || state.finished) return state;
  const index = state.index + 1;
  if (index >= state.order.length) return { ...state, finished: true };
  return {
    ...state,
    index,
    clues: 1,
    options: reverseOptions(state.order[index], rng, people),
    wrong: [],
    resolved: false,
  };
}

export function reverseScore(state: ReverseState): number {
  return state.results.reduce((sum, r) => sum + r.points, 0);
}

export function reverseFound(state: ReverseState): number {
  return state.results.filter((r) => r.found).length;
}

/** Reward tier for a finished reverse round: 0–3. */
export function reverseTier(points: number): 0 | 1 | 2 | 3 {
  const clamped = Math.max(0, Math.min(points, REVERSE_MAX_POINTS));
  for (const t of REVERSE_TIERS) if (clamped >= t.minPoints) return t.tier;
  return 0;
}
