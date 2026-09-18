/**
 * ΖΩΓΡΑΦΙΣΕ & ΜΑΝΤΕΨΕ — content for the `draw` game
 * =================================================
 * One phone, two to six players. One child sees a word, draws it in 60", the
 * others pick it out of four options (never free text — a six-year-old should
 * not have to type). Everything the content team may want to change without
 * touching a component lives here: the 150 words, the grade bands, the round
 * length, how many drawings each player gets, the crayon palette, the points,
 * and every single user-visible string in Greek and English.
 *
 * NO REACT IN THIS FILE. It is imported by `components/games/DrawGuess.tsx`, by
 * `components/games/drawLogic.ts` and by `data/games/draw.test.ts`; keeping it
 * plain data means the test suite never mounts a canvas.
 *
 * PRIVACY (hard rule, audience is 6–12): players are numbered, never named —
 * there is no field anywhere below for a child's name, and `DrawCopy.playerName`
 * builds «ΠΑΙΚΤΗΣ 3» from an index. The drawing itself is a canvas that stays on
 * the device; it is never uploaded, and the share card carries the score only.
 * Do not add an interpolation slot for a name, a birth date or anything a child
 * typed.
 *
 * HOW THE WORD LIST WAS BUILT (see `docs/games/NOTES.md` §3): three grade-band
 * authors produced 150 words with 28 overlaps, a top-up round brought it to 145
 * unique, and the last five (`σκέιτμπορντ`, `σαξόφωνο`, `μάγειρας`, `κρουασάν`,
 * `καναπές`) were written for this file to complete the brief's 150 at 50 per
 * band. The raw research file is `docs/games/research/draw-words.json`.
 *
 * ADDING A WORD: `data/games/draw.test.ts` is the contract. It fails on a
 * duplicate `el` or `en`, on anything other than exactly three distractors per
 * language, on a distractor that equals its own word, on an empty emoji or
 * category, on a difficulty outside 1–5, and on a band that no longer holds 50
 * words. Run `npm test` after editing; that suite is faster than reading 150
 * entries by eye.
 */

/* ────────────────────────────── the types ──────────────────────────────── */

/** School band a word belongs to: Α΄–Β΄, Γ΄–Δ΄, Ε΄–ΣΤ΄ Δημοτικού. */
export type DrawGrade = '1-2' | '3-4' | '5-6';

/**
 * One drawable word.
 *
 * The distractors are the other three options the guessers see, so they are
 * per-language on purpose: a good Greek decoy is not always a good English one
 * («κεραυνός» vs «αστραπή» are both "lightning"-ish in English, and that is
 * exactly the kind of pair that must never end up in the same four options).
 */
export interface DrawWord {
  /** The word in Greek. Unique across the whole list. */
  el: string;
  /** The word in English. Unique across the whole list. */
  en: string;
  /** Loose topic tag — used to group and to keep the list balanced. */
  category: string;
  /** Which band offers this word. */
  grades: DrawGrade;
  /** Shown on the reveal screen, never while the word is secret. */
  emoji: string;
  /** 1 = a six-year-old can draw it, 5 = a twelve-year-old will sweat. */
  difficulty: number;
  /** Exactly 3 wrong Greek options. Must not contain `el`. */
  distractorsEl: readonly string[];
  /** Exactly 3 wrong English options. Must not contain `en`. */
  distractorsEn: readonly string[];
}

/* ────────────────────────────── the numbers ────────────────────────────── */

/** How long one drawing lasts, in seconds. The brief says 60". */
export const DRAW_SECONDS = 60;

/** How many drawings each player gets in a session. The brief says 3. */
export const DRAWINGS_PER_PLAYER = 3;

/** Fewest players. One child cannot guess their own drawing. */
export const MIN_PLAYERS = 2;

/** Most players that still fit round one phone without the session dragging. */
export const MAX_PLAYERS = 6;

/** Options the guessers choose between: the word plus three distractors. */
export const OPTIONS_PER_ROUND = 4;

/** Seconds of "pass the phone" before the drawer sees the secret word. */
export const HANDOFF_SECONDS = 3;

/** Game key handed to `grantGameReward` — also the GameCenter URL (`/game?g=draw`). */
export const DRAW_GAME_KEY = 'draw';

/**
 * localStorage key for the last session's scoreboard.
 *
 * Prefixed `wb_draw_` and checked against every key under `components/` before
 * it was chosen. `wb_daily_streak` looked like the obvious key for the daily
 * game and was already owned by `components/DailyRewardPopup.tsx`; the two
 * features read each other's record as "nothing claimed today" and both paid
 * out, i.e. duplicate XP for every child. Grep before you add a second key.
 */
export const DRAW_STORAGE_KEY = 'wb_draw_scores';

/**
 * NOTHING WRITES THIS YET — it reserves the namespace, it does not persist.
 *
 * A pass-and-play session is deliberately not saved: the scores belong to the
 * people in the room for the length of one game, and reloading should start a
 * fresh one rather than resurrect a half-finished round. If a future change
 * does want to keep the last scoreboard, this is the key to use — and it is
 * already proven free of collisions with anything under `components/`.
 */

/** Accent used by the share card and by the game's own chrome (pink-500). */
export const DRAW_ACCENT = '#ec4899';

/* ────────────────────────────── the points ─────────────────────────────── */

/** Points a guesser earns for picking the right option. */
export const POINTS_PER_CORRECT_GUESS = 2;

/** Points the drawer earns for each guesser who got it — drawing well pays. */
export const POINTS_PER_DRAWER_CREDIT = 1;

/**
 * Share of the session's drawings that were guessed → reward tier for
 * `grantGameReward`, which pays 10/20/30 ⭐ XP for tiers 1/2/3. Checked
 * top-down. A share rather than a point total, so a two-player session and a
 * six-player one are judged the same way. Deliberately generous at the bottom:
 * finishing a family game should never be worth nothing.
 */
export const DRAW_SCORE_TIERS: ReadonlyArray<{ minGuessedShare: number; tier: 1 | 2 | 3 }> = [
  { minGuessedShare: 0.75, tier: 3 },
  { minGuessedShare: 0.4, tier: 2 },
  { minGuessedShare: 0, tier: 1 },
];

/* ────────────────────────────── the crayons ────────────────────────────── */

/** A canvas tool: four crayons and the eraser share one shape. */
export interface DrawTool {
  id: string;
  /** Stroke colour. The eraser paints `DRAW_CANVAS_BG`. */
  hex: string;
  /** True only for the eraser — it paints the background at `ERASER_WIDTH`. */
  erase: boolean;
  label: { el: string; en: string };
}

/** The paper. The eraser is this colour, so "erase" is really "paint white". */
export const DRAW_CANVAS_BG = '#ffffff';

/** Crayon stroke width in CSS pixels. Fat enough for a finger on a phone. */
export const STROKE_WIDTH = 8;

/** Eraser width. Wider than a crayon so a mistake goes in one swipe. */
export const ERASER_WIDTH = 28;

/**
 * The four crayons. Four, not twelve: the brief asks for four, and a small
 * palette keeps the toolbar thumb-sized on a 375px screen. All four are legible
 * on white paper and stay distinguishable for the commonest colour-blindness.
 */
export const DRAW_CRAYONS: readonly DrawTool[] = [
  { id: 'black', hex: '#1f2937', erase: false, label: { el: 'ΜΑΥΡΟ', en: 'BLACK' } },
  { id: 'red', hex: '#ef4444', erase: false, label: { el: 'ΚΟΚΚΙΝΟ', en: 'RED' } },
  { id: 'blue', hex: '#2563eb', erase: false, label: { el: 'ΜΠΛΕ', en: 'BLUE' } },
  { id: 'green', hex: '#16a34a', erase: false, label: { el: 'ΠΡΑΣΙΝΟ', en: 'GREEN' } },
];

/** The eraser. */
export const DRAW_ERASER: DrawTool = {
  id: 'eraser',
  hex: DRAW_CANVAS_BG,
  erase: true,
  label: { el: 'ΓΟΜΑ', en: 'ERASER' },
};

/** Everything the toolbar renders, in order. */
export const DRAW_TOOLS: readonly DrawTool[] = [...DRAW_CRAYONS, DRAW_ERASER];

/* ─────────────────────────────── the bands ─────────────────────────────── */

/**
 * The grade picker. Every id must have words in `DRAW_WORDS` — the test checks
 * that each band holds exactly 50, so adding a fourth band here means adding
 * its words and updating that expectation together.
 */
export const DRAW_GRADES: readonly { id: DrawGrade; label: { el: string; en: string } }[] = [
  { id: '1-2', label: { el: 'Α΄–Β΄ ΔΗΜΟΤΙΚΟΥ', en: 'GRADES 1–2' } },
  { id: '3-4', label: { el: 'Γ΄–Δ΄ ΔΗΜΟΤΙΚΟΥ', en: 'GRADES 3–4' } },
  { id: '5-6', label: { el: 'Ε΄–ΣΤ΄ ΔΗΜΟΤΙΚΟΥ', en: 'GRADES 5–6' } },
];

/* ──────────────────────────────── the copy ─────────────────────────────── */

export interface DrawCopy {
  title: string;
  tagline: string;
  howTitle: string;
  how: readonly string[];
  /* setup */
  playersTitle: string;
  playersLabel: (n: number) => string;
  playerName: (n: number) => string;
  gradeTitle: string;
  gradeNote: string;
  addPlayer: string;
  removePlayer: string;
  start: string;
  /* pass the phone */
  handoffTitle: string;
  handoffBody: (player: string) => string;
  handoffReady: string;
  secretWarning: string;
  /* drawing */
  yourWordLabel: string;
  startDrawing: string;
  secondsLeft: (s: number) => string;
  timeUp: string;
  finished: string;
  clear: string;
  undo: string;
  toolsLabel: string;
  /* guessing */
  guessTitle: string;
  guessBody: (player: string) => string;
  showDrawing: string;
  correct: string;
  wrong: string;
  reveal: (word: string) => string;
  nobodyGuessed: string;
  everybodyGuessed: string;
  whoGuessed: string;
  next: string;
  /* progress + scores */
  roundOf: (n: number, total: number) => string;
  turnOf: (player: string) => string;
  scoreboardTitle: string;
  points: (n: number) => string;
  /* results */
  finalTitle: string;
  winner: (player: string) => string;
  tie: string;
  playAgain: string;
  exit: string;
  xpNote: string;
  noXpNote: string;
  /* the drawing stays here */
  keepDrawing: string;
  keepDrawingNote: string;
  kept: string;
  /* share */
  share: string;
  sharing: string;
  shareDone: { shared: string; copied: string; downloaded: string };
  shareFailed: string;
  shareTitle: string;
  shareText: (guessed: number, total: number) => string;
  cardTitle: string;
  cardHeadline: (guessed: number, total: number) => string;
  cardSubstat: (players: number) => string;
}

export const DRAW_COPY: Record<'el' | 'en', DrawCopy> = {
  el: {
    // Greek is written already-uppercase where it should look uppercase:
    // toUpperCase() would keep the accents («ΖΩΓΡΆΦΙΣΕ») and look wrong.
    title: 'ΖΩΓΡΑΦΙΣΕ & ΜΑΝΤΕΨΕ',
    tagline: 'Ένα κινητό, όλη η παρέα. Ζωγραφίζεις 60΄΄, οι άλλοι μαντεύουν.',
    howTitle: 'ΠΩΣ ΠΑΙΖΕΤΑΙ',
    how: [
      'Δίνετε το κινητό στον ζωγράφο. Μόνο αυτός βλέπει τη λέξη.',
      'Ζωγραφίζει 60 δευτερόλεπτα — χωρίς γράμματα και χωρίς νούμερα!',
      'Οι υπόλοιποι διαλέγουν τη σωστή λέξη από τέσσερις.',
      'Πόντοι και σε αυτόν που μάντεψε και στον ζωγράφο.',
    ],
    playersTitle: 'ΠΟΙΟΙ ΠΑΙΖΕΤΕ;',
    playersLabel: (n) => (n === 1 ? '1 ΠΑΙΚΤΗΣ' : `${n} ΠΑΙΚΤΕΣ`),
    playerName: (n) => `ΠΑΙΚΤΗΣ ${n}`,
    gradeTitle: 'ΤΑΞΗ',
    gradeNote: 'Διάλεξε τη μικρότερη τάξη της παρέας.',
    addPlayer: 'ΚΙ ΑΛΛΟΣ',
    removePlayer: 'ΕΝΑΣ ΛΙΓΟΤΕΡΟΣ',
    start: 'ΞΕΚΙΝΑΜΕ',
    handoffTitle: 'ΔΩΣΕ ΤΟ ΚΙΝΗΤΟ',
    // The player label is a nominative («ΠΑΙΚΤΗΣ 3»), so every Greek line that
    // interpolates it is phrased to need no case change — «Σειρά του ΠΑΙΚΤΗΣ 3»
    // would be wrong Greek in front of a seven-year-old learning to read.
    handoffBody: (player) => `Σειρά να ζωγραφίσει: ${player}`,
    handoffReady: 'ΤΟ ΚΡΑΤΑΩ ΕΓΩ',
    secretWarning: 'Μην το δείξεις σε κανέναν!',
    yourWordLabel: 'Η ΛΕΞΗ ΣΟΥ',
    startDrawing: 'ΑΡΧΙΖΩ',
    secondsLeft: (s) => `${s}΄΄`,
    timeUp: 'ΤΕΛΟΣ ΧΡΟΝΟΥ!',
    finished: 'ΤΕΛΕΙΩΣΑ',
    clear: 'ΑΠ΄ ΤΗΝ ΑΡΧΗ',
    undo: 'ΠΙΣΩ',
    toolsLabel: 'ΧΡΩΜΑΤΑ',
    guessTitle: 'ΤΙ ΕΙΝΑΙ ΑΥΤΟ;',
    guessBody: (player) => `Δείξτε τη ζωγραφιά σε όλους — όχι στον ζωγράφο (${player}).`,
    showDrawing: 'ΔΕΙΞΕ ΤΗ ΖΩΓΡΑΦΙΑ',
    correct: 'ΣΩΣΤΟ!',
    wrong: 'ΟΧΙ ΑΥΤΟ…',
    reveal: (word) => `Ήταν «${word}»!`,
    nobodyGuessed: 'Κανείς δεν το βρήκε — δύσκολο ήταν!',
    everybodyGuessed: 'Το βρήκαν όλοι!',
    whoGuessed: 'ΠΟΙΟΙ ΤΟ ΒΡΗΚΑΝ;',
    next: 'ΕΠΟΜΕΝΟΣ',
    roundOf: (n, total) => `ΖΩΓΡΑΦΙΑ ${n}/${total}`,
    turnOf: (player) => `ΣΕΙΡΑ: ${player}`,
    scoreboardTitle: 'ΠΙΝΑΚΑΣ ΣΚΟΡ',
    points: (n) => (n === 1 ? '1 ΠΟΝΤΟΣ' : `${n} ΠΟΝΤΟΙ`),
    finalTitle: 'ΤΕΛΙΚΟ ΣΚΟΡ',
    winner: (player) => `Νίκησε ο ${player}!`,
    tie: 'Ισοπαλία! Νίκησαν όλοι.',
    playAgain: 'ΞΑΝΑ',
    exit: 'ΤΕΛΟΣ',
    xpNote: 'Κερδίσατε XP για τη σημερινή παρτίδα.',
    noXpNote: 'Χωρίς XP — πήρατε ήδη το σημερινό.',
    keepDrawing: 'ΚΡΑΤΑ ΤΗ ΖΩΓΡΑΦΙΑ',
    keepDrawingNote: 'Μένει μόνο σε αυτό το κινητό. Δεν την βλέπει κανένας άλλος.',
    kept: 'Την κράτησα! 🖼️',
    share: 'ΜΟΙΡΑΣΟΥ ΤΟ ΣΚΟΡ',
    sharing: 'ΕΤΟΙΜΑΖΩ…',
    shareDone: {
      shared: 'Έφυγε! 🎉',
      copied: 'Το αντέγραψα! Επικόλλησέ το όπου θες. 📋',
      downloaded: 'Το αποθήκευσα σαν εικόνα. 💾',
    },
    shareFailed: 'Δεν μπόρεσα να φτιάξω την κάρτα. Δοκίμασε ξανά.',
    shareTitle: 'Ζωγράφισε & Μάντεψε',
    shareText: (guessed, total) =>
      `Ζωγράφισε & Μάντεψε στο WiseBot Academy: βρήκαμε ${guessed} από ${total} ζωγραφιές!`,
    cardTitle: 'ΖΩΓΡΑΦΙΣΕ & ΜΑΝΤΕΨΕ',
    cardHeadline: (guessed, total) => `Βρήκαμε ${guessed} από ${total} ζωγραφιές!`,
    cardSubstat: (players) => (players === 1 ? '1 παίκτης' : `${players} παίκτες`),
  },
  en: {
    title: 'DRAW & GUESS',
    tagline: 'One phone, the whole family. Draw for 60s, the others guess.',
    howTitle: 'HOW TO PLAY',
    how: [
      'Hand the phone to the drawer. Only they see the word.',
      'They draw for 60 seconds — no letters and no numbers!',
      'Everyone else picks the right word out of four.',
      'Points for the guesser and points for the drawer.',
    ],
    playersTitle: 'WHO IS PLAYING?',
    playersLabel: (n) => (n === 1 ? '1 PLAYER' : `${n} PLAYERS`),
    playerName: (n) => `PLAYER ${n}`,
    gradeTitle: 'SCHOOL YEAR',
    gradeNote: 'Pick the youngest year in the room.',
    addPlayer: 'ONE MORE',
    removePlayer: 'ONE FEWER',
    start: "LET'S GO",
    handoffTitle: 'PASS THE PHONE',
    handoffBody: (player) => `It is ${player}'s turn to draw.`,
    handoffReady: "I'VE GOT IT",
    secretWarning: 'Do not show it to anyone!',
    yourWordLabel: 'YOUR WORD',
    startDrawing: 'START',
    secondsLeft: (s) => `${s}s`,
    timeUp: "TIME'S UP!",
    finished: 'DONE',
    clear: 'START OVER',
    undo: 'UNDO',
    toolsLabel: 'COLOURS',
    guessTitle: 'WHAT IS IT?',
    guessBody: (player) => `Show the drawing to everyone except ${player}.`,
    showDrawing: 'SHOW THE DRAWING',
    correct: 'CORRECT!',
    wrong: 'NOT THAT ONE…',
    reveal: (word) => `It was “${word}”!`,
    nobodyGuessed: 'Nobody got it — that was a hard one!',
    everybodyGuessed: 'Everyone got it!',
    whoGuessed: 'WHO GOT IT?',
    next: 'NEXT',
    roundOf: (n, total) => `DRAWING ${n}/${total}`,
    turnOf: (player) => `${player}'S TURN`,
    scoreboardTitle: 'SCOREBOARD',
    points: (n) => (n === 1 ? '1 POINT' : `${n} POINTS`),
    finalTitle: 'FINAL SCORE',
    winner: (player) => `${player} wins!`,
    tie: 'A tie! Everybody wins.',
    playAgain: 'PLAY AGAIN',
    exit: 'FINISH',
    xpNote: 'You earned XP for today’s game.',
    noXpNote: 'No XP — you already earned today’s.',
    keepDrawing: 'KEEP THE DRAWING',
    keepDrawingNote: 'It stays on this phone only. Nobody else can see it.',
    kept: 'Kept it! 🖼️',
    share: 'SHARE THE SCORE',
    sharing: 'PREPARING…',
    shareDone: {
      shared: 'Sent! 🎉',
      copied: 'Copied! Paste it anywhere. 📋',
      downloaded: 'Saved as a picture. 💾',
    },
    shareFailed: 'Could not build the card. Try again.',
    shareTitle: 'Draw & Guess',
    shareText: (guessed, total) =>
      `Draw & Guess on WiseBot Academy: we got ${guessed} drawings out of ${total}!`,
    cardTitle: 'DRAW & GUESS',
    cardHeadline: (guessed, total) => `We got ${guessed} drawings out of ${total}!`,
    cardSubstat: (players) => (players === 1 ? '1 player' : `${players} players`),
  },
};

/* ──────────────────────────────── the words ────────────────────────────── */

/**
 * 150 words, 50 per band, every `el` and every `en` unique across the list.
 *
 * Ordered by band and then roughly by difficulty, so a content editor reading
 * the file top-down sees Α΄–Β΄ first. Nothing in the game depends on that order
 * — the round picker shuffles — so entries can be inserted wherever they read
 * best, as long as the test stays green.
 */
export const DRAW_WORDS: readonly DrawWord[] = [
  /* ── Α΄–Β΄ Δημοτικού — 50 words ─────────────────────────────────────── */
  { el: 'γάτα', en: 'cat', category: 'animals', grades: '1-2',
    emoji: '🐱', difficulty: 1,
    distractorsEl: ['ελέφαντας', 'παπαγάλος', 'δελφίνι'],
    distractorsEn: ['elephant', 'parrot', 'dolphin'] },
  { el: 'σκύλος', en: 'dog', category: 'animals', grades: '1-2',
    emoji: '🐶', difficulty: 1,
    distractorsEl: ['καμηλοπάρδαλη', 'πιγκουίνος', 'βάτραχος'],
    distractorsEn: ['giraffe', 'penguin', 'frog'] },
  { el: 'ψάρι', en: 'fish', category: 'animals', grades: '1-2',
    emoji: '🐟', difficulty: 1,
    distractorsEl: ['κουνέλι', 'κότα', 'μέλισσα'],
    distractorsEn: ['rabbit', 'hen', 'bee'] },
  { el: 'πουλί', en: 'bird', category: 'animals', grades: '1-2',
    emoji: '🐦', difficulty: 1,
    distractorsEl: ['αγελάδα', 'σαλιγκάρι', 'δελφίνι'],
    distractorsEn: ['cow', 'snail', 'dolphin'] },
  { el: 'χελώνα', en: 'turtle', category: 'animals', grades: '1-2',
    emoji: '🐢', difficulty: 2,
    distractorsEl: ['άλογο', 'μέλισσα', 'παπαγάλος'],
    distractorsEn: ['horse', 'bee', 'parrot'] },
  { el: 'πεταλούδα', en: 'butterfly', category: 'animals', grades: '1-2',
    emoji: '🦋', difficulty: 2,
    distractorsEl: ['χελώνα', 'κουνέλι', 'σκίουρος'],
    distractorsEn: ['turtle', 'rabbit', 'squirrel'] },
  { el: 'πρόβατο', en: 'sheep', category: 'animals', grades: '1-2',
    emoji: '🐑', difficulty: 3,
    distractorsEl: ['πιγκουίνος', 'ελέφαντας', 'μέλισσα'],
    distractorsEn: ['penguin', 'elephant', 'bee'] },
  { el: 'μήλο', en: 'apple', category: 'food', grades: '1-2',
    emoji: '🍎', difficulty: 1,
    distractorsEl: ['τυρί', 'μακαρόνια', 'σοκολάτα'],
    distractorsEn: ['cheese', 'pasta', 'chocolate'] },
  { el: 'μπανάνα', en: 'banana', category: 'food', grades: '1-2',
    emoji: '🍌', difficulty: 1,
    distractorsEl: ['πίτσα', 'σούπα', 'τυρί'],
    distractorsEn: ['pizza', 'soup', 'cheese'] },
  { el: 'ψωμί', en: 'bread', category: 'food', grades: '1-2',
    emoji: '🍞', difficulty: 2,
    distractorsEl: ['σούπα', 'σταφύλι', 'λεμόνι'],
    distractorsEn: ['soup', 'grapes', 'lemon'] },
  { el: 'παγωτό', en: 'ice cream', category: 'food', grades: '1-2',
    emoji: '🍦', difficulty: 1,
    distractorsEl: ['καρπούζι', 'τυρί', 'σούπα'],
    distractorsEn: ['watermelon', 'cheese', 'soup'] },
  { el: 'καρότο', en: 'carrot', category: 'food', grades: '1-2',
    emoji: '🥕', difficulty: 2,
    distractorsEl: ['ντομάτα', 'μπρόκολο', 'αχλάδι'],
    distractorsEn: ['tomato', 'broccoli', 'pear'] },
  { el: 'πορτοκάλι', en: 'orange', category: 'food', grades: '1-2',
    emoji: '🍊', difficulty: 2,
    distractorsEl: ['σταφύλι', 'μπρόκολο', 'φράουλα'],
    distractorsEn: ['grapes', 'broccoli', 'strawberry'] },
  { el: 'αυγό', en: 'egg', category: 'food', grades: '1-2',
    emoji: '🥚', difficulty: 2,
    distractorsEl: ['πίτσα', 'μέλι', 'μακαρόνια'],
    distractorsEn: ['pizza', 'honey', 'pasta'] },
  { el: 'σπίτι', en: 'house', category: 'home', grades: '1-2',
    emoji: '🏠', difficulty: 1,
    distractorsEl: ['καναπές', 'λάμπα', 'σκούπα'],
    distractorsEn: ['sofa', 'lamp', 'broom'] },
  { el: 'πόρτα', en: 'door', category: 'home', grades: '1-2',
    emoji: '🚪', difficulty: 1,
    distractorsEl: ['κουβέρτα', 'κατσαρόλα', 'ρολόι'],
    distractorsEn: ['blanket', 'pot', 'clock'] },
  { el: 'παράθυρο', en: 'window', category: 'home', grades: '1-2',
    emoji: '🪟', difficulty: 2,
    distractorsEl: ['κουτάλι', 'χαλί', 'σκάλα'],
    distractorsEn: ['spoon', 'rug', 'ladder'] },
  { el: 'κρεβάτι', en: 'bed', category: 'home', grades: '1-2',
    emoji: '🛏️', difficulty: 2,
    distractorsEl: ['ψυγείο', 'τηλέφωνο', 'βάζο'],
    distractorsEn: ['fridge', 'telephone', 'vase'] },
  { el: 'καρέκλα', en: 'chair', category: 'home', grades: '1-2',
    emoji: '🪑', difficulty: 2,
    distractorsEl: ['πιάτο', 'κουρτίνα', 'ρολόι'],
    distractorsEn: ['plate', 'curtain', 'clock'] },
  { el: 'κλειδί', en: 'key', category: 'home', grades: '1-2',
    emoji: '🔑', difficulty: 2,
    distractorsEl: ['κουτάλι', 'σφουγγάρι', 'μαξιλάρι'],
    distractorsEn: ['spoon', 'sponge', 'pillow'] },
  { el: 'ομπρέλα', en: 'umbrella', category: 'home', grades: '1-2',
    emoji: '☂️', difficulty: 2,
    distractorsEl: ['μαξιλάρι', 'τηλεόραση', 'φλιτζάνι'],
    distractorsEn: ['pillow', 'television', 'cup'] },
  { el: 'αρκουδάκι', en: 'teddy bear', category: 'home', grades: '1-2',
    emoji: '🧸', difficulty: 3,
    distractorsEl: ['μπάλα', 'παζλ', 'τρενάκι'],
    distractorsEn: ['ball', 'jigsaw puzzle', 'toy train'] },
  { el: 'μολύβι', en: 'pencil', category: 'school', grades: '1-2',
    emoji: '✏️', difficulty: 1,
    distractorsEl: ['γόμα', 'ψαλίδι', 'κόλλα'],
    distractorsEn: ['eraser', 'scissors', 'glue'] },
  { el: 'βιβλίο', en: 'book', category: 'school', grades: '1-2',
    emoji: '📚', difficulty: 2,
    distractorsEl: ['ψαλίδι', 'υδρόγειος σφαίρα', 'γόμα'],
    distractorsEn: ['scissors', 'globe', 'eraser'] },
  { el: 'τσάντα', en: 'schoolbag', category: 'school', grades: '1-2',
    emoji: '🎒', difficulty: 2,
    distractorsEl: ['χάρακας', 'μπογιές', 'πίνακας'],
    distractorsEn: ['ruler', 'paints', 'blackboard'] },
  { el: 'κουδούνι', en: 'bell', category: 'school', grades: '1-2',
    emoji: '🔔', difficulty: 2,
    distractorsEl: ['θρανίο', 'πίνακας', 'τσάντα'],
    distractorsEn: ['desk', 'blackboard', 'backpack'] },
  { el: 'χάρακας', en: 'ruler', category: 'school', grades: '1-2',
    emoji: '📏', difficulty: 2,
    distractorsEl: ['μολύβι', 'ψαλίδι', 'γόμα'],
    distractorsEn: ['pencil', 'scissors', 'eraser'] },
  { el: 'κύκλος', en: 'circle', category: 'school', grades: '1-2',
    emoji: '⭕', difficulty: 1,
    distractorsEl: ['τετράγωνο', 'ορθογώνιο', 'καρδιά'],
    distractorsEn: ['square', 'rectangle', 'heart'] },
  { el: 'τρίγωνο', en: 'triangle', category: 'school', grades: '1-2',
    emoji: '🔺', difficulty: 1,
    distractorsEl: ['τετράγωνο', 'ορθογώνιο', 'ρόμβος'],
    distractorsEn: ['square', 'rectangle', 'diamond'] },
  { el: 'δέντρο', en: 'tree', category: 'nature', grades: '1-2',
    emoji: '🌳', difficulty: 1,
    distractorsEl: ['ποτάμι', 'βράχος', 'χορτάρι'],
    distractorsEn: ['river', 'rock', 'grass'] },
  { el: 'λουλούδι', en: 'flower', category: 'nature', grades: '1-2',
    emoji: '🌸', difficulty: 1,
    distractorsEl: ['μανιτάρι', 'πεταλούδα', 'κοχύλι'],
    distractorsEn: ['mushroom', 'butterfly', 'seashell'] },
  { el: 'φύλλο', en: 'leaf', category: 'nature', grades: '1-2',
    emoji: '🍃', difficulty: 2,
    distractorsEl: ['βελανίδι', 'κουκουνάρι', 'πέτρα'],
    distractorsEn: ['acorn', 'pine cone', 'stone'] },
  { el: 'βουνό', en: 'mountain', category: 'nature', grades: '1-2',
    emoji: '⛰️', difficulty: 1,
    distractorsEl: ['παραλία', 'λίμνη', 'σπηλιά'],
    distractorsEn: ['beach', 'lake', 'cave'] },
  { el: 'θάλασσα', en: 'sea', category: 'nature', grades: '1-2',
    emoji: '🌊', difficulty: 2,
    distractorsEl: ['δάσος', 'καταρράκτης', 'έρημος'],
    distractorsEn: ['forest', 'waterfall', 'desert'] },
  { el: 'ήλιος', en: 'sun', category: 'weather', grades: '1-2',
    emoji: '☀️', difficulty: 1,
    distractorsEl: ['βροχή', 'χιόνι', 'ομίχλη'],
    distractorsEn: ['rain', 'snow', 'fog'] },
  { el: 'σύννεφο', en: 'cloud', category: 'weather', grades: '1-2',
    emoji: '☁️', difficulty: 1,
    distractorsEl: ['χιόνι', 'άνεμος', 'βροχή'],
    distractorsEn: ['snow', 'wind', 'rain'] },
  { el: 'χιονάνθρωπος', en: 'snowman', category: 'weather', grades: '1-2',
    emoji: '⛄', difficulty: 2,
    distractorsEl: ['ουράνιο τόξο', 'ομπρέλα', 'ήλιος'],
    distractorsEn: ['rainbow', 'umbrella', 'sun'] },
  { el: 'ουράνιο τόξο', en: 'rainbow', category: 'weather', grades: '1-2',
    emoji: '🌈', difficulty: 2,
    distractorsEl: ['ομίχλη', 'χαλάζι', 'αστραπή'],
    distractorsEn: ['fog', 'hail', 'lightning'] },
  { el: 'φεγγάρι', en: 'moon', category: 'space', grades: '1-2',
    emoji: '🌙', difficulty: 1,
    distractorsEl: ['πύραυλος', 'αστροναύτης', 'κομήτης'],
    distractorsEn: ['rocket', 'astronaut', 'comet'] },
  { el: 'αστέρι', en: 'star', category: 'space', grades: '1-2',
    emoji: '⭐', difficulty: 1,
    distractorsEl: ['πύραυλος', 'αστροναύτης', 'πλανήτης'],
    distractorsEn: ['rocket', 'astronaut', 'planet'] },
  { el: 'αυτοκίνητο', en: 'car', category: 'transport', grades: '1-2',
    emoji: '🚗', difficulty: 1,
    distractorsEl: ['λεωφορείο', 'ελικόπτερο', 'αερόστατο'],
    distractorsEn: ['bus', 'helicopter', 'hot air balloon'] },
  { el: 'ποδήλατο', en: 'bicycle', category: 'transport', grades: '1-2',
    emoji: '🚲', difficulty: 2,
    distractorsEl: ['φορτηγό', 'ελικόπτερο', 'τρακτέρ'],
    distractorsEn: ['truck', 'helicopter', 'tractor'] },
  { el: 'καράβι', en: 'boat', category: 'transport', grades: '1-2',
    emoji: '⛵', difficulty: 2,
    distractorsEl: ['τρένο', 'φορτηγό', 'ποδήλατο'],
    distractorsEn: ['train', 'truck', 'bicycle'] },
  { el: 'αεροπλάνο', en: 'airplane', category: 'transport', grades: '1-2',
    emoji: '✈️', difficulty: 2,
    distractorsEl: ['αερόστατο', 'λεωφορείο', 'μοτοσικλέτα'],
    distractorsEn: ['hot-air balloon', 'bus', 'motorcycle'] },
  { el: 'τρένο', en: 'train', category: 'transport', grades: '1-2',
    emoji: '🚂', difficulty: 2,
    distractorsEl: ['ταξί', 'υποβρύχιο', 'ελικόπτερο'],
    distractorsEn: ['taxi', 'submarine', 'helicopter'] },
  { el: 'μάτι', en: 'eye', category: 'body', grades: '1-2',
    emoji: '👁️', difficulty: 1,
    distractorsEl: ['αυτί', 'μύτη', 'στόμα'],
    distractorsEn: ['ear', 'nose', 'mouth'] },
  { el: 'χέρι', en: 'hand', category: 'body', grades: '1-2',
    emoji: '✋', difficulty: 1,
    distractorsEl: ['πόδι', 'αυτί', 'μύτη'],
    distractorsEn: ['foot', 'ear', 'nose'] },
  { el: 'μπάλα', en: 'ball', category: 'sports', grades: '1-2',
    emoji: '⚽', difficulty: 1,
    distractorsEl: ['ρακέτα', 'σφυρίχτρα', 'μετάλλιο'],
    distractorsEn: ['racket', 'whistle', 'medal'] },
  { el: 'τύμπανο', en: 'drum', category: 'music', grades: '1-2',
    emoji: '🥁', difficulty: 3,
    distractorsEl: ['κιθάρα', 'πιάνο', 'βιολί'],
    distractorsEn: ['guitar', 'piano', 'violin'] },
  { el: 'ρολόι', en: 'clock', category: 'tech', grades: '1-2',
    emoji: '🕐', difficulty: 2,
    distractorsEl: ['τηλέφωνο', 'υπολογιστής', 'φωτογραφική μηχανή'],
    distractorsEn: ['phone', 'computer', 'camera'] },

  /* ── Γ΄–Δ΄ Δημοτικού — 50 words ─────────────────────────────────────── */
  { el: 'λεωφορείο', en: 'bus', category: 'transport', grades: '3-4',
    emoji: '🚌', difficulty: 1,
    distractorsEl: ['τρένο', 'ποδήλατο', 'μοτοσικλέτα'],
    distractorsEn: ['train', 'bicycle', 'motorcycle'] },
  { el: 'ελικόπτερο', en: 'helicopter', category: 'transport', grades: '3-4',
    emoji: '🚁', difficulty: 3,
    distractorsEl: ['αυτοκίνητο', 'μοτοσικλέτα', 'τρένο'],
    distractorsEn: ['car', 'motorcycle', 'train'] },
  { el: 'Μινώταυρος', en: 'Minotaur', category: 'myth', grades: '3-4',
    emoji: '🐂', difficulty: 3,
    distractorsEl: ['κύκλωπας', 'γίγαντας', 'νεράιδα'],
    distractorsEn: ['Cyclops', 'giant', 'fairy'] },
  { el: 'λαβύρινθος', en: 'labyrinth', category: 'myth', grades: '3-4',
    emoji: '🌀', difficulty: 3,
    distractorsEl: ['χρυσόμαλλο δέρας', 'τρίαινα', 'Πήγασος'],
    distractorsEn: ['golden fleece', 'trident', 'Pegasus'] },
  { el: 'Πήγασος', en: 'Pegasus', category: 'myth', grades: '3-4',
    emoji: '🦄', difficulty: 3,
    distractorsEl: ['γρύπας', 'φοίνικας', 'σφίγγα'],
    distractorsEn: ['griffin', 'phoenix', 'Sphinx'] },
  { el: 'κένταυρος', en: 'centaur', category: 'myth', grades: '3-4',
    emoji: '🐎', difficulty: 3,
    distractorsEl: ['γίγαντας', 'νεράιδα', 'φοίνικας'],
    distractorsEn: ['giant', 'fairy', 'phoenix'] },
  { el: 'γοργόνα', en: 'mermaid', category: 'myth', grades: '3-4',
    emoji: '🧜', difficulty: 2,
    distractorsEl: ['νεράιδα', 'μονόκερος', 'κύκλωπας'],
    distractorsEn: ['fairy', 'unicorn', 'Cyclops'] },
  { el: 'δράκος', en: 'dragon', category: 'myth', grades: '3-4',
    emoji: '🐉', difficulty: 2,
    distractorsEl: ['μονόκερος', 'γοργόνα', 'κένταυρος'],
    distractorsEn: ['unicorn', 'mermaid', 'centaur'] },
  { el: 'ναός', en: 'temple', category: 'history', grades: '3-4',
    emoji: '🏛️', difficulty: 2,
    distractorsEl: ['άγαλμα', 'υδραγωγείο', 'αρχαίο θέατρο'],
    distractorsEn: ['statue', 'aqueduct', 'ancient theatre'] },
  { el: 'κάστρο', en: 'castle', category: 'history', grades: '3-4',
    emoji: '🏰', difficulty: 2,
    distractorsEl: ['ιππότης', 'θρόνος', 'πανοπλία'],
    distractorsEn: ['knight', 'throne', 'suit of armour'] },
  { el: 'αμφορέας', en: 'amphora', category: 'history', grades: '3-4',
    emoji: '🏺', difficulty: 3,
    distractorsEl: ['πάπυρος', 'αρχαίο νόμισμα', 'δάφνινο στεφάνι'],
    distractorsEn: ['papyrus scroll', 'ancient coin', 'laurel wreath'] },
  { el: 'πυραμίδα', en: 'pyramid', category: 'history', grades: '3-4',
    emoji: '🔺', difficulty: 2,
    distractorsEl: ['σφίγγα', 'οβελίσκος', 'αρχαίο θέατρο'],
    distractorsEn: ['sphinx', 'obelisk', 'ancient theatre'] },
  { el: 'κορώνα', en: 'crown', category: 'history', grades: '3-4',
    emoji: '👑', difficulty: 1,
    distractorsEl: ['θρόνος', 'σκήπτρο', 'σεντούκι θησαυρού'],
    distractorsEn: ['throne', 'scepter', 'treasure chest'] },
  { el: 'φάρος', en: 'lighthouse', category: 'history', grades: '3-4',
    emoji: '🗼', difficulty: 2,
    distractorsEl: ['ανεμόμυλος', 'γέφυρα', 'αμφιθέατρο'],
    distractorsEn: ['windmill', 'bridge', 'amphitheater'] },
  { el: 'ηφαίστειο', en: 'volcano', category: 'nature', grades: '3-4',
    emoji: '🌋', difficulty: 2,
    distractorsEl: ['καταρράκτης', 'σπηλιά', 'λίμνη'],
    distractorsEn: ['waterfall', 'cave', 'lake'] },
  { el: 'νησί', en: 'island', category: 'nature', grades: '3-4',
    emoji: '🏝️', difficulty: 1,
    distractorsEl: ['καταρράκτης', 'σπηλιά', 'ζούγκλα'],
    distractorsEn: ['waterfall', 'cave', 'jungle'] },
  { el: 'ποτάμι', en: 'river', category: 'nature', grades: '3-4',
    emoji: '🏞️', difficulty: 2,
    distractorsEl: ['σπηλιά', 'αμμόλοφος', 'παραλία'],
    distractorsEn: ['cave', 'sand dune', 'beach'] },
  { el: 'δάσος', en: 'forest', category: 'nature', grades: '3-4',
    emoji: '🌲', difficulty: 2,
    distractorsEl: ['παραλία', 'καταρράκτης', 'σπηλιά'],
    distractorsEn: ['beach', 'waterfall', 'cave'] },
  { el: 'καταρράκτης', en: 'waterfall', category: 'nature', grades: '3-4',
    emoji: '💦', difficulty: 2,
    distractorsEl: ['έρημος', 'λιβάδι', 'παραλία'],
    distractorsEn: ['desert', 'meadow', 'beach'] },
  { el: 'σπηλιά', en: 'cave', category: 'nature', grades: '3-4',
    emoji: '🕳️', difficulty: 3,
    distractorsEl: ['λίμνη', 'λιβάδι', 'παραλία'],
    distractorsEn: ['lake', 'meadow', 'beach'] },
  { el: 'ελιά', en: 'olive tree', category: 'nature', grades: '3-4',
    emoji: '🫒', difficulty: 2,
    distractorsEl: ['ηλιοτρόπιο', 'κάκτος', 'μανιτάρι'],
    distractorsEn: ['sunflower', 'cactus', 'mushroom'] },
  { el: 'καταιγίδα', en: 'storm', category: 'weather', grades: '3-4',
    emoji: '⛈️', difficulty: 2,
    distractorsEl: ['χιόνι', 'ομίχλη', 'λιακάδα'],
    distractorsEn: ['snow', 'fog', 'sunshine'] },
  { el: 'αστραπή', en: 'lightning', category: 'weather', grades: '3-4',
    emoji: '⚡', difficulty: 1,
    distractorsEl: ['ουράνιο τόξο', 'χιονονιφάδα', 'ομπρέλα'],
    distractorsEn: ['rainbow', 'snowflake', 'umbrella'] },
  { el: 'θερμόμετρο', en: 'thermometer', category: 'science', grades: '3-4',
    emoji: '🌡️', difficulty: 2,
    distractorsEl: ['ζυγαριά', 'κλεψύδρα', 'πυξίδα'],
    distractorsEn: ['scales', 'hourglass', 'compass'] },
  { el: 'μαγνήτης', en: 'magnet', category: 'science', grades: '3-4',
    emoji: '🧲', difficulty: 2,
    distractorsEl: ['ζυγαριά', 'χωνί', 'μεγεθυντικός φακός'],
    distractorsEn: ['scales', 'funnel', 'magnifying glass'] },
  { el: 'πυξίδα', en: 'compass', category: 'science', grades: '3-4',
    emoji: '🧭', difficulty: 2,
    distractorsEl: ['τηλεσκόπιο', 'μεγεθυντικός φακός', 'κλεψύδρα'],
    distractorsEn: ['telescope', 'magnifying glass', 'hourglass'] },
  { el: 'τηλεσκόπιο', en: 'telescope', category: 'science', grades: '3-4',
    emoji: '🔭', difficulty: 3,
    distractorsEl: ['διαστημόπλοιο', 'γαλαξίας', 'διαστημική στολή'],
    distractorsEn: ['spaceship', 'galaxy', 'space suit'] },
  { el: 'μικροσκόπιο', en: 'microscope', category: 'science', grades: '3-4',
    emoji: '🔬', difficulty: 3,
    distractorsEl: ['ζυγαριά', 'χωνί', 'πυξίδα'],
    distractorsEn: ['scales', 'funnel', 'compass'] },
  { el: 'μεγεθυντικός φακός', en: 'magnifying glass', category: 'science', grades: '3-4',
    emoji: '🔍', difficulty: 2,
    distractorsEl: ['πυξίδα', 'μαγνήτης', 'κλεψύδρα'],
    distractorsEn: ['compass', 'magnet', 'hourglass'] },
  { el: 'πύραυλος', en: 'rocket', category: 'space', grades: '3-4',
    emoji: '🚀', difficulty: 1,
    distractorsEl: ['γαλαξίας', 'διαστημική στολή', 'φεγγάρι'],
    distractorsEn: ['galaxy', 'space suit', 'moon'] },
  { el: 'πλανήτης', en: 'planet', category: 'space', grades: '3-4',
    emoji: '🪐', difficulty: 2,
    distractorsEl: ['γαλαξίας', 'διαστημόπλοιο', 'διαστημικός σταθμός'],
    distractorsEn: ['galaxy', 'spaceship', 'space station'] },
  { el: 'αστροναύτης', en: 'astronaut', category: 'space', grades: '3-4',
    emoji: '👨‍🚀', difficulty: 2,
    distractorsEl: ['μάγειρας', 'δάσκαλος', 'ταχυδρόμος'],
    distractorsEn: ['chef', 'teacher', 'mail carrier'] },
  { el: 'ψαράς', en: 'fisherman', category: 'jobs', grades: '3-4',
    emoji: '🎣', difficulty: 2,
    distractorsEl: ['φούρναρης', 'ταχυδρόμος', 'δάσκαλος'],
    distractorsEn: ['baker', 'postman', 'teacher'] },
  { el: 'αγρότης', en: 'farmer', category: 'jobs', grades: '3-4',
    emoji: '👨‍🌾', difficulty: 2,
    distractorsEl: ['γιατρός', 'ταχυδρόμος', 'δάσκαλος'],
    distractorsEn: ['doctor', 'postman', 'teacher'] },
  { el: 'φούρναρης', en: 'baker', category: 'jobs', grades: '3-4',
    emoji: '🥖', difficulty: 2,
    distractorsEl: ['ψαράς', 'αστυνομικός', 'δάσκαλος'],
    distractorsEn: ['fisherman', 'police officer', 'teacher'] },
  { el: 'πυροσβέστης', en: 'firefighter', category: 'jobs', grades: '3-4',
    emoji: '🚒', difficulty: 2,
    distractorsEl: ['ταχυδρόμος', 'αγρότης', 'αστυνομικός'],
    distractorsEn: ['postman', 'farmer', 'police officer'] },
  { el: 'δελφίνι', en: 'dolphin', category: 'animals', grades: '3-4',
    emoji: '🐬', difficulty: 1,
    distractorsEl: ['χελώνα', 'παπαγάλος', 'κουνέλι'],
    distractorsEn: ['turtle', 'parrot', 'rabbit'] },
  { el: 'βάτραχος', en: 'frog', category: 'animals', grades: '3-4',
    emoji: '🐸', difficulty: 1,
    distractorsEl: ['χελώνα', 'σκίουρος', 'παπαγάλος'],
    distractorsEn: ['turtle', 'squirrel', 'parrot'] },
  { el: 'αετός', en: 'eagle', category: 'animals', grades: '3-4',
    emoji: '🦅', difficulty: 2,
    distractorsEl: ['κουνέλι', 'χελώνα', 'σκίουρος'],
    distractorsEn: ['rabbit', 'turtle', 'squirrel'] },
  { el: 'τηλεόραση', en: 'television', category: 'tech', grades: '3-4',
    emoji: '📺', difficulty: 1,
    distractorsEl: ['τηλέφωνο', 'φωτογραφική μηχανή', 'ρομπότ'],
    distractorsEn: ['telephone', 'camera', 'robot'] },
  { el: 'ραδιόφωνο', en: 'radio', category: 'tech', grades: '3-4',
    emoji: '📻', difficulty: 2,
    distractorsEl: ['τηλέφωνο', 'φωτογραφική μηχανή', 'ρομπότ'],
    distractorsEn: ['telephone', 'camera', 'robot'] },
  { el: 'χάρτης', en: 'map', category: 'school', grades: '3-4',
    emoji: '🗺️', difficulty: 2,
    distractorsEl: ['βιβλίο', 'χάρακας', 'μολύβι'],
    distractorsEn: ['book', 'ruler', 'pencil'] },
  { el: 'ποδόσφαιρο', en: 'football', category: 'sports', grades: '3-4',
    emoji: '⚽', difficulty: 1,
    distractorsEl: ['μπάσκετ', 'τένις', 'κολύμβηση'],
    distractorsEn: ['basketball', 'tennis', 'swimming'] },
  { el: 'καρδιά', en: 'heart', category: 'body', grades: '3-4',
    emoji: '❤️', difficulty: 1,
    distractorsEl: ['εγκέφαλος', 'στομάχι', 'μάτι'],
    distractorsEn: ['brain', 'stomach', 'eye'] },
  { el: 'ρακέτα', en: 'racket', category: 'sports', grades: '3-4',
    emoji: '🎾', difficulty: 2,
    distractorsEl: ['σφυρίχτρα', 'σκοινάκι', 'μετάλλιο'],
    distractorsEn: ['whistle', 'jump rope', 'medal'] },
  { el: 'πιάνο', en: 'piano', category: 'music', grades: '3-4',
    emoji: '🎹', difficulty: 3,
    distractorsEl: ['βιολί', 'τρομπέτα', 'φλάουτο'],
    distractorsEn: ['violin', 'trumpet', 'flute'] },
  { el: 'ζωγράφος', en: 'painter', category: 'jobs', grades: '3-4',
    emoji: '🎨', difficulty: 3,
    distractorsEl: ['ταχυδρόμος', 'κηπουρός', 'μάγειρας'],
    distractorsEn: ['postman', 'gardener', 'cook'] },
  { el: 'πίτσα', en: 'pizza', category: 'food', grades: '3-4',
    emoji: '🍕', difficulty: 2,
    distractorsEl: ['μακαρόνια', 'σαλάτα', 'σούπα'],
    distractorsEn: ['spaghetti', 'salad', 'soup'] },
  { el: 'ακουστικά', en: 'headphones', category: 'tech', grades: '3-4',
    emoji: '🎧', difficulty: 2,
    distractorsEl: ['πληκτρολόγιο', 'φωτογραφική μηχανή', 'ποντίκι υπολογιστή'],
    distractorsEn: ['keyboard', 'camera', 'computer mouse'] },
  { el: 'σκούπα', en: 'broom', category: 'home', grades: '3-4',
    emoji: '🧹', difficulty: 2,
    distractorsEl: ['κουβάς', 'πιρούνι', 'μαξιλάρι'],
    distractorsEn: ['bucket', 'fork', 'pillow'] },

  /* ── Ε΄–ΣΤ΄ Δημοτικού — 50 words ────────────────────────────────────── */
  { el: 'έρημος', en: 'desert', category: 'nature', grades: '5-6',
    emoji: '🏜️', difficulty: 2,
    distractorsEl: ['ζούγκλα', 'λίμνη', 'σπηλιά'],
    distractorsEn: ['jungle', 'lake', 'cave'] },
  { el: 'παγόβουνο', en: 'iceberg', category: 'nature', grades: '5-6',
    emoji: '🧊', difficulty: 3,
    distractorsEl: ['αμμόλοφος', 'καταρράκτης', 'ζούγκλα'],
    distractorsEn: ['sand dune', 'waterfall', 'jungle'] },
  { el: 'δορυφόρος', en: 'satellite', category: 'space', grades: '5-6',
    emoji: '🛰️', difficulty: 3,
    distractorsEl: ['γαλαξίας', 'φεγγάρι', 'διαστημική στολή'],
    distractorsEn: ['galaxy', 'moon', 'space suit'] },
  { el: 'κομήτης', en: 'comet', category: 'space', grades: '5-6',
    emoji: '☄️', difficulty: 2,
    distractorsEl: ['γαλαξίας', 'διαστημικός σταθμός', 'διαστημική στολή'],
    distractorsEn: ['galaxy', 'space station', 'space suit'] },
  { el: 'μπαταρία', en: 'battery', category: 'science', grades: '5-6',
    emoji: '🔋', difficulty: 1,
    distractorsEl: ['πυξίδα', 'ζυγαριά', 'χωνί'],
    distractorsEn: ['compass', 'scales', 'funnel'] },
  { el: 'λάμπα', en: 'light bulb', category: 'science', grades: '5-6',
    emoji: '💡', difficulty: 1,
    distractorsEl: ['μεγεθυντικός φακός', 'πυξίδα', 'ζυγαριά'],
    distractorsEn: ['magnifying glass', 'compass', 'scales'] },
  { el: 'καθρέφτης', en: 'mirror', category: 'science', grades: '5-6',
    emoji: '🪞', difficulty: 2,
    distractorsEl: ['κλεψύδρα', 'ζυγαριά', 'χωνί'],
    distractorsEn: ['hourglass', 'scales', 'funnel'] },
  { el: 'δοκιμαστικός σωλήνας', en: 'test tube', category: 'science', grades: '5-6',
    emoji: '🧪', difficulty: 2,
    distractorsEl: ['χωνί', 'ζυγαριά', 'μεγεθυντικός φακός'],
    distractorsEn: ['funnel', 'scales', 'magnifying glass'] },
  { el: 'ρομπότ', en: 'robot', category: 'tech', grades: '5-6',
    emoji: '🤖', difficulty: 1,
    distractorsEl: ['ντρόουν', 'φωτογραφική μηχανή', 'εκτυπωτής'],
    distractorsEn: ['drone', 'camera', 'printer'] },
  { el: 'υπολογιστής', en: 'computer', category: 'tech', grades: '5-6',
    emoji: '💻', difficulty: 1,
    distractorsEl: ['εκτυπωτής', 'ντρόουν', 'φωτογραφική μηχανή'],
    distractorsEn: ['printer', 'drone', 'camera'] },
  { el: 'ανεμογεννήτρια', en: 'wind turbine', category: 'tech', grades: '5-6',
    emoji: '🌬️', difficulty: 3,
    distractorsEl: ['γερανός', 'δορυφορικό πιάτο', 'ντρόουν'],
    distractorsEn: ['crane', 'satellite dish', 'drone'] },
  { el: 'ηλιακός συλλέκτης', en: 'solar panel', category: 'tech', grades: '5-6',
    emoji: '☀️', difficulty: 3,
    distractorsEl: ['γερανός', 'φάρος', 'εκτυπωτής'],
    distractorsEn: ['crane', 'lighthouse', 'printer'] },
  { el: 'κεραυνός', en: 'thunderbolt', category: 'weather', grades: '5-6',
    emoji: '⚡', difficulty: 1,
    distractorsEl: ['ουράνιο τόξο', 'χιονονιφάδα', 'ομίχλη'],
    distractorsEn: ['rainbow', 'snowflake', 'fog'] },
  { el: 'χιονονιφάδα', en: 'snowflake', category: 'weather', grades: '5-6',
    emoji: '❄️', difficulty: 2,
    distractorsEl: ['σταγόνα βροχής', 'σύννεφο', 'ομίχλη'],
    distractorsEn: ['raindrop', 'cloud', 'fog'] },
  { el: 'σημαία', en: 'flag', category: 'history', grades: '5-6',
    emoji: '🚩', difficulty: 1,
    distractorsEl: ['ασπίδα', 'άρμα', 'στέμμα'],
    distractorsEn: ['shield', 'chariot', 'crown'] },
  { el: 'πλοίο', en: 'ship', category: 'transport', grades: '5-6',
    emoji: '🚢', difficulty: 1,
    distractorsEl: ['ελικόπτερο', 'ποδήλατο', 'φορτηγό'],
    distractorsEn: ['helicopter', 'bicycle', 'truck'] },
  { el: 'γέφυρα', en: 'bridge', category: 'transport', grades: '5-6',
    emoji: '🌉', difficulty: 2,
    distractorsEl: ['σήραγγα', 'φανάρι', 'πινακίδα στοπ'],
    distractorsEn: ['tunnel', 'traffic light', 'stop sign'] },
  { el: 'πνεύμονες', en: 'lungs', category: 'body', grades: '5-6',
    emoji: '🫁', difficulty: 3,
    distractorsEl: ['εγκέφαλος', 'στομάχι', 'νεφρά'],
    distractorsEn: ['brain', 'stomach', 'kidneys'] },
  { el: 'δόντι', en: 'tooth', category: 'body', grades: '5-6',
    emoji: '🦷', difficulty: 1,
    distractorsEl: ['αυτί', 'μάτι', 'δάχτυλο'],
    distractorsEn: ['ear', 'eye', 'finger'] },
  { el: 'καμήλα', en: 'camel', category: 'animals', grades: '5-6',
    emoji: '🐫', difficulty: 2,
    distractorsEl: ['ελέφαντας', 'καμηλοπάρδαλη', 'ζέβρα'],
    distractorsEn: ['elephant', 'giraffe', 'zebra'] },
  { el: 'καγκουρό', en: 'kangaroo', category: 'animals', grades: '5-6',
    emoji: '🦘', difficulty: 2,
    distractorsEl: ['κοάλα', 'ιπποπόταμος', 'παπαγάλος'],
    distractorsEn: ['koala', 'hippopotamus', 'parrot'] },
  { el: 'φάλαινα', en: 'whale', category: 'animals', grades: '5-6',
    emoji: '🐋', difficulty: 1,
    distractorsEl: ['χταπόδι', 'χελώνα', 'φώκια'],
    distractorsEn: ['octopus', 'turtle', 'seal'] },
  { el: 'πιγκουίνος', en: 'penguin', category: 'animals', grades: '5-6',
    emoji: '🐧', difficulty: 1,
    distractorsEl: ['πολική αρκούδα', 'κουκουβάγια', 'αλεπού'],
    distractorsEn: ['polar bear', 'owl', 'fox'] },
  { el: 'υδρόγειος σφαίρα', en: 'globe', category: 'school', grades: '5-6',
    emoji: '🌍', difficulty: 2,
    distractorsEl: ['μικροσκόπιο', 'αριθμητήριο', 'μαυροπίνακας'],
    distractorsEn: ['microscope', 'abacus', 'blackboard'] },
  { el: 'κιθάρα', en: 'guitar', category: 'music', grades: '5-6',
    emoji: '🎸', difficulty: 2,
    distractorsEl: ['τύμπανο', 'πιάνο', 'τρομπέτα'],
    distractorsEn: ['drum', 'piano', 'trumpet'] },
  { el: 'κύπελλο', en: 'trophy', category: 'sports', grades: '5-6',
    emoji: '🏆', difficulty: 1,
    distractorsEl: ['σφυρίχτρα', 'μπάλα ποδοσφαίρου', 'χρονόμετρο'],
    distractorsEn: ['whistle', 'soccer ball', 'stopwatch'] },
  { el: 'μπασκέτα', en: 'basketball hoop', category: 'sports', grades: '5-6',
    emoji: '🏀', difficulty: 4,
    distractorsEl: ['σφυρίχτρα', 'σκι', 'τραμπολίνο'],
    distractorsEn: ['whistle', 'skis', 'trampoline'] },
  { el: 'μετάλλιο', en: 'medal', category: 'sports', grades: '5-6',
    emoji: '🏅', difficulty: 4,
    distractorsEl: ['δίχτυ', 'τραμπολίνο', 'σκι'],
    distractorsEn: ['net', 'trampoline', 'skis'] },
  { el: 'βιολί', en: 'violin', category: 'music', grades: '5-6',
    emoji: '🎻', difficulty: 4,
    distractorsEl: ['τρομπέτα', 'φλάουτο', 'ταμπουρίνο'],
    distractorsEn: ['trumpet', 'flute', 'tambourine'] },
  { el: 'μικρόφωνο', en: 'microphone', category: 'music', grades: '5-6',
    emoji: '🎤', difficulty: 3,
    distractorsEl: ['ηχείο', 'παρτιτούρα', 'μεταλλόφωνο'],
    distractorsEn: ['speaker', 'sheet music', 'xylophone'] },
  { el: 'δύτης', en: 'diver', category: 'jobs', grades: '5-6',
    emoji: '🤿', difficulty: 5,
    distractorsEl: ['ναυαγοσώστης', 'ορειβάτης', 'κηπουρός'],
    distractorsEn: ['lifeguard', 'mountain climber', 'gardener'] },
  { el: 'ταχυδρόμος', en: 'postman', category: 'jobs', grades: '5-6',
    emoji: '📬', difficulty: 4,
    distractorsEl: ['κουρέας', 'βιβλιοθηκάριος', 'μηχανικός'],
    distractorsEn: ['barber', 'librarian', 'mechanic'] },
  { el: 'εγκέφαλος', en: 'brain', category: 'body', grades: '5-6',
    emoji: '🧠', difficulty: 4,
    distractorsEl: ['νεφρό', 'στομάχι', 'γλώσσα'],
    distractorsEn: ['kidney', 'stomach', 'tongue'] },
  { el: 'οστό', en: 'bone', category: 'body', grades: '5-6',
    emoji: '🦴', difficulty: 3,
    distractorsEl: ['αυτί', 'νεφρό', 'γλώσσα'],
    distractorsEn: ['ear', 'kidney', 'tongue'] },
  { el: 'καρπούζι', en: 'watermelon', category: 'food', grades: '5-6',
    emoji: '🍉', difficulty: 3,
    distractorsEl: ['σταφύλι', 'ανανάς', 'φράουλα'],
    distractorsEn: ['grapes', 'pineapple', 'strawberry'] },
  { el: 'φωτογραφική μηχανή', en: 'camera', category: 'tech', grades: '5-6',
    emoji: '📷', difficulty: 4,
    distractorsEl: ['ηχείο', 'τηλεχειριστήριο', 'φορτιστής'],
    distractorsEn: ['speaker', 'remote control', 'charger'] },
  { el: 'εκτυπωτής', en: 'printer', category: 'tech', grades: '5-6',
    emoji: '🖨️', difficulty: 5,
    distractorsEl: ['πρίζα', 'ηχείο', 'τηλεχειριστήριο'],
    distractorsEn: ['power socket', 'speaker', 'remote control'] },
  { el: 'σκάλα', en: 'ladder', category: 'home', grades: '5-6',
    emoji: '🪜', difficulty: 3,
    distractorsEl: ['ντουλάπα', 'χαλί', 'ράφι'],
    distractorsEn: ['wardrobe', 'carpet', 'shelf'] },
  { el: 'τζάκι', en: 'fireplace', category: 'home', grades: '5-6',
    emoji: '🔥', difficulty: 5,
    distractorsEl: ['καναπές', 'κουρτίνα', 'ψυγείο'],
    distractorsEn: ['sofa', 'curtain', 'fridge'] },
  { el: 'ζυγαριά', en: 'scales', category: 'science', grades: '5-6',
    emoji: '⚖️', difficulty: 4,
    distractorsEl: ['χωνί', 'σταγονόμετρο', 'κλεψύδρα'],
    distractorsEn: ['funnel', 'dropper', 'hourglass'] },
  { el: 'γρανάζι', en: 'gear', category: 'science', grades: '5-6',
    emoji: '⚙️', difficulty: 4,
    distractorsEl: ['ελατήριο', 'βίδα', 'τροχαλία'],
    distractorsEn: ['spring', 'screw', 'pulley'] },
  { el: 'γαλαξίας', en: 'galaxy', category: 'space', grades: '5-6',
    emoji: '🌌', difficulty: 5,
    distractorsEl: ['αστερισμός', 'νεφέλωμα', 'μετεωρίτης'],
    distractorsEn: ['constellation', 'nebula', 'meteorite'] },
  { el: 'θεατρική μάσκα', en: 'theatre mask', category: 'culture', grades: '5-6',
    emoji: '🎭', difficulty: 4,
    distractorsEl: ['λύρα', 'στεφάνι δάφνης', 'σανδάλι'],
    distractorsEn: ['lyre', 'laurel wreath', 'sandal'] },
  { el: 'άγαλμα', en: 'statue', category: 'history', grades: '5-6',
    emoji: '🗿', difficulty: 5,
    distractorsEl: ['μωσαϊκό', 'σιντριβάνι', 'νόμισμα'],
    distractorsEn: ['mosaic', 'fountain', 'coin'] },
  { el: 'κάδος ανακύκλωσης', en: 'recycling bin', category: 'environment', grades: '5-6',
    emoji: '♻️', difficulty: 4,
    distractorsEl: ['πλαστικό μπουκάλι', 'κομπόστ', 'φίλτρο νερού'],
    distractorsEn: ['plastic bottle', 'compost', 'water filter'] },
  { el: 'σκέιτμπορντ', en: 'skateboard', category: 'sports', grades: '5-6',
    emoji: '🛹', difficulty: 3,
    distractorsEl: ['ποδήλατο', 'ρακέτα', 'μετάλλιο'],
    distractorsEn: ['bicycle', 'racket', 'medal'] },
  { el: 'σαξόφωνο', en: 'saxophone', category: 'music', grades: '5-6',
    emoji: '🎷', difficulty: 4,
    distractorsEl: ['βιολί', 'κιθάρα', 'τύμπανο'],
    distractorsEn: ['violin', 'guitar', 'drum'] },
  { el: 'μάγειρας', en: 'chef', category: 'jobs', grades: '5-6',
    emoji: '👨‍🍳', difficulty: 4,
    distractorsEl: ['φούρναρης', 'αγρότης', 'ταχυδρόμος'],
    distractorsEn: ['baker', 'farmer', 'postman'] },
  { el: 'κρουασάν', en: 'croissant', category: 'food', grades: '5-6',
    emoji: '🥐', difficulty: 3,
    distractorsEl: ['ψωμί', 'πίτσα', 'παγωτό'],
    distractorsEn: ['bread', 'pizza', 'ice cream'] },
  { el: 'καναπές', en: 'sofa', category: 'home', grades: '5-6',
    emoji: '🛋️', difficulty: 3,
    distractorsEl: ['καρέκλα', 'κρεβάτι', 'σκάλα'],
    distractorsEn: ['chair', 'bed', 'ladder'] },
];
