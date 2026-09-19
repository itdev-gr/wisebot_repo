/**
 * Η ΜΗΧΑΝΗ ΤΟΥ SPARKEN — content for the `machine` game
 * =====================================================
 * A physics sandbox: bring the ball from A to B with ramps, trampolines,
 * fans, dominoes and magnets. 15 hand-designed levels of growing difficulty,
 * then a free mode where the child builds a machine and shares it as a code.
 *
 * THE LEVELS carry a REFERENCE SOLUTION. `components/games/machinePhysics.test.ts`
 * runs every level's solution through the simulator and asserts it reaches
 * the goal (and that the empty board does not) — so a content edit cannot
 * ship an unsolvable level.
 *
 * COORDINATES: the world is `MACHINE_WORLD.w` × `MACHINE_WORLD.h` grid units,
 * y down. Piece positions are integers on that grid (that is what the share
 * code stores). `rot` is 0–15 (steps of 22.5°) for ramps and trampolines —
 * 1–7 slopes DOWN to the right, 9–15 down to the left — the fan direction
 * 0–3 (right, up, left, down) for fans, and 0 for dominoes and magnets.
 *
 * NO REACT IN THIS FILE. Imported by `components/games/Machine.tsx`,
 * `components/games/machinePhysics.ts`, `components/games/machineCode.ts`
 * and the tests.
 *
 * PRIVACY (audience 6–12): nothing leaves the device. The only things stored
 * are which levels are solved; the share card carries a level number and an
 * attempt count — never a name. A level code IS the level: positions, tool
 * types and rotations, nothing else.
 */

/* ────────────────────────────── the types ──────────────────────────────── */

export const MACHINE_TOOLS = ['ramp', 'trampoline', 'fan', 'domino', 'magnet'] as const;
export type MachineTool = (typeof MACHINE_TOOLS)[number];

/** Fan direction: 0 right, 1 up, 2 left, 3 down. */
export type FanDir = 0 | 1 | 2 | 3;

export interface MachineVec {
  x: number;
  y: number;
}

export interface MachinePiece {
  type: MachineTool;
  /** Integer grid position of the piece centre. */
  x: number;
  y: number;
  /** Ramp/trampoline 0–15, fan 0–3, otherwise 0. */
  rot: number;
}

export type MachineToolbox = Readonly<Partial<Record<MachineTool, number>>>;

/** A complete machine: what the simulator runs and what a share code carries. */
export interface MachineBuild {
  ball: MachineVec;
  goal: MachineVec;
  /** Fixed pieces first, then the child's — the order is part of the result. */
  pieces: readonly MachinePiece[];
}

export interface MachineLevel {
  /** 1-based, shown to the child. */
  id: number;
  titleEl: string;
  titleEn: string;
  hintEl: string;
  hintEn: string;
  ball: MachineVec;
  goal: MachineVec;
  /** Pre-placed, immovable. */
  fixed: readonly MachinePiece[];
  /** What the child may place, and how many of each. */
  toolbox: MachineToolbox;
  /** A placement proven (by test) to reach the goal. */
  solution: readonly MachinePiece[];
}

/* ────────────────────────────── the numbers ────────────────────────────── */

export const MACHINE_GAME_KEY = 'machine';

/** Checked free with `grep -rn wb_machine_ components/ data/ utils/ context/` (18/9/2026). */
export const MACHINE_STORAGE_KEY = 'wb_machine_progress';

export const MACHINE_ACCENT = '#f59e0b';

/** Grid units. Portrait: 32 wide × 40 tall. */
export const MACHINE_WORLD = { w: 32, h: 40 } as const;

/** Free mode: at most this many placed tools (the code has 4 bits for the count). */
export const MACHINE_FREE_MAX_PIECES = 12;

/** Free mode toolbox. */
export const MACHINE_FREE_TOOLBOX: MachineToolbox = { ramp: 12, trampoline: 12, fan: 12, domino: 12, magnet: 12 };

/** XP tier from the attempts a level took: 1st try → 3, ≤ 3 → 2, else 1. */
export function machineTier(attempts: number): number {
  if (attempts <= 1) return 3;
  if (attempts <= 3) return 2;
  return 1;
}

/* ────────────────────────────── the levels ─────────────────────────────── */

const P = (type: MachineTool, x: number, y: number, rot = 0): MachinePiece => ({ type, x, y, rot });

export const MACHINE_LEVELS: readonly MachineLevel[] = [
  /* ── ramps ── */
  {
    id: 1,
    titleEl: 'Η πρώτη ράμπα', titleEn: 'The first ramp',
    hintEl: 'Βάλε τη ράμπα κάτω από τη μπάλα, με κλίση προς τον στόχο.',
    hintEn: 'Put the ramp under the ball, sloping toward the target.',
    ball: { x: 6, y: 4 }, goal: { x: 22, y: 36 },
    fixed: [],
    toolbox: { ramp: 1 },
    solution: [P('ramp', 7, 12, 1)],
  },
  {
    id: 2,
    titleEl: 'Γύρνα την πίσω', titleEn: 'Send it back',
    hintEl: 'Η μπάλα φεύγει αριστερά. Μια ράμπα με κλίση προς τα δεξιά τη γυρίζει.',
    hintEn: 'The ball flies left. A ramp sloping right sends it back.',
    ball: { x: 26, y: 4 }, goal: { x: 25, y: 36 },
    fixed: [P('ramp', 25, 10, 14)],
    toolbox: { ramp: 1 },
    solution: [P('ramp', 14, 22, 2)],
  },
  {
    id: 3,
    titleEl: 'Ζιγκ-ζαγκ', titleEn: 'Zigzag',
    hintEl: 'Δύο ράμπες: μία προς τα δεξιά, μία προς τα αριστερά.',
    hintEn: 'Two ramps: one sloping right, one sloping left.',
    ball: { x: 4, y: 4 }, goal: { x: 7, y: 37 },
    fixed: [],
    toolbox: { ramp: 2 },
    solution: [P('ramp', 5, 10, 2), P('ramp', 16, 26, 14)],
  },
  /* ── trampoline ── */
  {
    id: 4,
    titleEl: 'Ψηλά!', titleEn: 'Up high!',
    hintEl: 'Το τραμπολίνο στέλνει τη μπάλα πιο ψηλά απ’ όσο έπεσε.',
    hintEn: 'A trampoline sends the ball higher than it fell.',
    ball: { x: 6, y: 4 }, goal: { x: 23, y: 10 },
    fixed: [P('ramp', 8, 12, 2)],
    toolbox: { trampoline: 1 },
    solution: [P('trampoline', 17, 24, 0)],
  },
  {
    id: 5,
    titleEl: 'Λοξό τραμπολίνο', titleEn: 'Tilted trampoline',
    hintEl: 'Στρίψε το τραμπολίνο λίγο: η μπάλα θα πεταχτεί στο πλάι.',
    hintEn: 'Tilt the trampoline a little: the ball flies off sideways.',
    ball: { x: 16, y: 4 }, goal: { x: 30, y: 11 },
    fixed: [],
    toolbox: { trampoline: 1 },
    solution: [P('trampoline', 16, 22, 1)],
  },
  /* ── fan ── */
  {
    id: 6,
    titleEl: 'Φύσα!', titleEn: 'Blow!',
    hintEl: 'Ο ανεμιστήρας σπρώχνει τη μπάλα προς την κατεύθυνσή του.',
    hintEn: 'The fan pushes the ball in the direction it points.',
    ball: { x: 5, y: 4 }, goal: { x: 28, y: 33 },
    fixed: [P('ramp', 6, 12, 0)],
    toolbox: { fan: 1 },
    solution: [P('fan', 2, 12, 0)],
  },
  {
    id: 7,
    titleEl: 'Αέρας από κάτω', titleEn: 'Air from below',
    hintEl: 'Ένας ανεμιστήρας που φυσάει προς τα πάνω κρατάει τη μπάλα στον αέρα.',
    hintEn: 'A fan blowing upward keeps the ball in the air.',
    ball: { x: 4, y: 4 }, goal: { x: 28, y: 30 },
    fixed: [P('ramp', 6, 10, 1)],
    toolbox: { fan: 1 },
    solution: [P('fan', 16, 26, 1)],
  },
  /* ── domino ── */
  {
    id: 8,
    titleEl: 'Η γέφυρα', titleEn: 'The bridge',
    hintEl: 'Τα ντόμινο πέφτουν το ένα μετά το άλλο και γίνονται γέφυρα.',
    hintEn: 'Dominoes fall one after another and become a bridge.',
    ball: { x: 4, y: 4 }, goal: { x: 24, y: 20 },
    fixed: [P('ramp', 6, 10, 2), P('ramp', 12, 14, 0)],
    toolbox: { domino: 3 },
    solution: [P('domino', 15, 13, 0), P('domino', 17, 13, 0), P('domino', 19, 13, 0)],
  },
  {
    id: 9,
    titleEl: 'Γέφυρα και ράμπα', titleEn: 'Bridge and ramp',
    hintEl: 'Μια ίσια ράμπα για να προσγειωθεί, και μια γέφυρα από ντόμινο προς τα αριστερά.',
    hintEn: 'A flat ramp to land on, and a domino bridge to the left.',
    ball: { x: 26, y: 4 }, goal: { x: 2, y: 27 },
    fixed: [P('ramp', 25, 10, 14)],
    toolbox: { domino: 3, ramp: 1 },
    solution: [P('ramp', 14, 24, 0), P('domino', 10, 23, 0), P('domino', 8, 23, 0), P('domino', 6, 23, 0)],
  },
  /* ── magnet ── */
  {
    id: 10,
    titleEl: 'Ο μαγνήτης τραβάει', titleEn: 'The magnet pulls',
    hintEl: 'Ο μαγνήτης τραβάει τη μπάλα όταν περνάει κοντά του.',
    hintEn: 'The magnet pulls the ball when it passes nearby.',
    ball: { x: 8, y: 4 }, goal: { x: 19, y: 38 },
    fixed: [],
    toolbox: { magnet: 1 },
    solution: [P('magnet', 13, 12, 0)],
  },
  {
    id: 11,
    titleEl: 'Τράβα και γύρνα', titleEn: 'Pull and turn',
    hintEl: 'Ο μαγνήτης ρίχνει τη μπάλα ίσια κάτω. Μια ράμπα τη γυρίζει.',
    hintEn: 'The magnet drops the ball straight down. A ramp turns it.',
    ball: { x: 4, y: 4 }, goal: { x: 5, y: 38 },
    fixed: [P('ramp', 6, 10, 1)],
    toolbox: { magnet: 1, ramp: 1 },
    solution: [P('magnet', 14, 12, 0), P('ramp', 15, 26, 14)],
  },
  /* ── combinations ── */
  {
    id: 12,
    titleEl: 'Αέρας και αναπήδηση', titleEn: 'Wind and bounce',
    hintEl: 'Ο ανεμιστήρας τη στέλνει δεξιά, το λοξό τραμπολίνο τη γυρίζει.',
    hintEn: 'The fan sends it right; the tilted trampoline sends it back.',
    ball: { x: 5, y: 4 }, goal: { x: 10, y: 25 },
    fixed: [P('ramp', 6, 12, 0)],
    toolbox: { fan: 1, trampoline: 1 },
    solution: [P('fan', 2, 12, 0), P('trampoline', 27, 31, 14)],
  },
  {
    id: 13,
    titleEl: 'Γέφυρα στα ψηλά', titleEn: 'Bridge to the sky',
    hintEl: 'Μετά τη γέφυρα, ένα τραμπολίνο στέλνει τη μπάλα ψηλά.',
    hintEn: 'After the bridge, a trampoline sends the ball up high.',
    ball: { x: 4, y: 4 }, goal: { x: 27, y: 12 },
    fixed: [P('ramp', 6, 10, 2), P('ramp', 12, 14, 0)],
    toolbox: { domino: 3, trampoline: 1 },
    solution: [P('domino', 15, 13, 0), P('domino', 17, 13, 0), P('domino', 19, 13, 0), P('trampoline', 24, 24, 0)],
  },
  {
    id: 14,
    titleEl: 'Πιάσ’ την!', titleEn: 'Catch it!',
    hintEl: 'Το τραμπολίνο τη στέλνει ψηλά. Εκεί που σταματάει, ο μαγνήτης την πιάνει.',
    hintEn: 'The trampoline sends it up. Where it slows down, the magnet catches it.',
    ball: { x: 16, y: 8 }, goal: { x: 23, y: 4 },
    fixed: [],
    toolbox: { trampoline: 1, magnet: 1 },
    solution: [P('trampoline', 16, 26, 0), P('magnet', 23, 2, 0)],
  },
  {
    id: 15,
    titleEl: 'Η μεγάλη μηχανή', titleEn: 'The great machine',
    hintEl: 'Γέφυρα, τραμπολίνο, ανεμιστήρας, ράμπα… όλα μαζί!',
    hintEn: 'Bridge, trampoline, fan, ramp… all together!',
    ball: { x: 4, y: 4 }, goal: { x: 6, y: 38 },
    fixed: [P('ramp', 6, 10, 2), P('ramp', 12, 14, 0)],
    toolbox: { domino: 3, trampoline: 1, fan: 1, ramp: 1, magnet: 1 },
    solution: [P('domino', 15, 13, 0), P('domino', 17, 13, 0), P('domino', 19, 13, 0), P('trampoline', 24, 24, 0), P('fan', 28, 20, 2), P('ramp', 14, 34, 14)],
  },
];

/* ─────────────────────────────── the copy ──────────────────────────────── */

export const MACHINE_COPY = {
  el: {
    title: 'Η ΜΗΧΑΝΗ ΤΟΥ SPARKEN',
    tagline: 'Φέρε τη μπάλα στον στόχο με ράμπες, τραμπολίνο, ανεμιστήρες, ντόμινο και μαγνήτες!',
    levels: 'ΕΠΙΠΕΔΑ',
    level: (n: number) => `Επίπεδο ${n}`,
    levelShort: (n: number) => `${n}`,
    locked: 'Κλειδωμένο — λύσε το προηγούμενο',
    solved: 'Λυμένο',
    free: 'ΕΛΕΥΘΕΡΟ',
    freeDesc: 'Φτιάξε τη δική σου μηχανή και μοιράσου την με κωδικό!',
    play: 'ΠΑΙΞΕ',
    reset: 'ΞΑΝΑ',
    stop: 'ΣΤΟΠ',
    back: 'ΠΙΣΩ',
    toolbox: 'ΕΡΓΑΛΕΙΑ',
    tool: {
      ramp: 'Ράμπα',
      trampoline: 'Τραμπολίνο',
      fan: 'Ανεμιστήρας',
      domino: 'Ντόμινο',
      magnet: 'Μαγνήτης',
    } as Record<MachineTool, string>,
    ballLabel: 'Μπάλα',
    goalLabel: 'Στόχος',
    rotateLeft: 'Στρίψε αριστερά',
    rotateRight: 'Στρίψε δεξιά',
    remove: 'Αφαίρεσε',
    dragHint: 'Σύρε ένα εργαλείο στον πίνακα. Πάτα ένα κομμάτι για να το στρίψεις.',
    attempts: (n: number) => `Προσπάθειες: ${n}`,
    resultGoal: 'ΤΑ ΚΑΤΑΦΕΡΕΣ!',
    resultFell: 'Η μπάλα έπεσε έξω…',
    resultStuck: 'Η μπάλα κόλλησε…',
    resultTimeout: 'Η μπάλα δεν έφτασε…',
    tryAgain: 'Δοκίμασε ξανά!',
    next: 'ΕΠΟΜΕΝΟ',
    allDone: 'Έλυσες και τα 15 επίπεδα! Πήγαινε στο ΕΛΕΥΘΕΡΟ και φτιάξε δικά σου.',
    freeGoal: 'Η μηχανή σου δουλεύει!',
    freeRunEnd: 'Η μπάλα δεν έφτασε στον στόχο. Άλλαξε κάτι και ξαναδοκίμασε.',
    code: 'ΚΩΔΙΚΟΣ',
    haveCode: 'ΕΧΩ ΚΩΔΙΚΟ',
    codeTitle: 'Ο κωδικός της μηχανής σου',
    codeHelp: 'Δώσε τον σε έναν φίλο. Με «ΕΧΩ ΚΩΔΙΚΟ» θα φορτώσει τη μηχανή σου στο κινητό του.',
    copy: 'ΑΝΤΙΓΡΑΦΗ',
    copied: 'Αντιγράφηκε!',
    copyFailed: 'Δεν αντιγράφηκε — γράψ’ τον με το χέρι.',
    enterCodeTitle: 'Γράψε τον κωδικό του φίλου σου',
    enterCodePlaceholder: 'WB-XXXX-XXXX-…',
    load: 'ΦΟΡΤΩΣΕ',
    badCode: 'Αυτός ο κωδικός δεν βγάζει νόημα. Έλεγξε τα γράμματα και ξαναδοκίμασε.',
    loaded: 'Η μηχανή φορτώθηκε!',
    close: 'ΚΛΕΙΣΕ',
    clear: 'ΚΑΘΑΡΙΣΕ',
    share: 'ΜΟΙΡΑΣΟΥ ΤΟ',
    sharing: 'ΕΤΟΙΜΑΖΩ…',
    shareDone: { shared: 'Μοιράστηκε!', copied: 'Το αντέγραψα!', downloaded: 'Το κατέβασα!' } as const,
    shareFailed: 'Δεν βγήκε η κάρτα. Δοκίμασε ξανά.',
    shareTitle: 'Η Μηχανή του Sparken',
    shareText: (level: number, attempts: number) => `Έλυσα το επίπεδο ${level} της Μηχανής του Sparken με ${attempts} ${attempts === 1 ? 'προσπάθεια' : 'προσπάθειες'}!`,
    cardTitle: 'Η ΜΗΧΑΝΗ ΤΟΥ SPARKEN',
    cardHeadline: (level: number) => `Έλυσα το επίπεδο ${level}!`,
    cardStat: (level: number) => `${level}/15`,
    cardSubstat: (attempts: number) => `${attempts} ${attempts === 1 ? 'προσπάθεια' : 'προσπάθειες'}`,
    xpNote: 'Το XP μπήκε στο προφίλ σου.',
    noXpNote: 'Το XP για σήμερα το πήρες ήδη — παίξε για την πλάκα!',
    piecesLeft: (n: number) => `${n}`,
    maxPieces: (n: number) => `Μέχρι ${n} κομμάτια.`,
  },
  en: {
    title: "SPARKEN'S MACHINE",
    tagline: 'Get the ball to the target with ramps, trampolines, fans, dominoes and magnets!',
    levels: 'LEVELS',
    level: (n: number) => `Level ${n}`,
    levelShort: (n: number) => `${n}`,
    locked: 'Locked — solve the previous one',
    solved: 'Solved',
    free: 'FREE MODE',
    freeDesc: 'Build your own machine and share it as a code!',
    play: 'PLAY',
    reset: 'RESET',
    stop: 'STOP',
    back: 'BACK',
    toolbox: 'TOOLS',
    tool: {
      ramp: 'Ramp',
      trampoline: 'Trampoline',
      fan: 'Fan',
      domino: 'Domino',
      magnet: 'Magnet',
    } as Record<MachineTool, string>,
    ballLabel: 'Ball',
    goalLabel: 'Target',
    rotateLeft: 'Rotate left',
    rotateRight: 'Rotate right',
    remove: 'Remove',
    dragHint: 'Drag a tool onto the board. Tap a piece to rotate it.',
    attempts: (n: number) => `Attempts: ${n}`,
    resultGoal: 'YOU DID IT!',
    resultFell: 'The ball fell out…',
    resultStuck: 'The ball got stuck…',
    resultTimeout: 'The ball did not make it…',
    tryAgain: 'Try again!',
    next: 'NEXT',
    allDone: 'You solved all 15 levels! Go to FREE MODE and build your own.',
    freeGoal: 'Your machine works!',
    freeRunEnd: 'The ball did not reach the target. Change something and try again.',
    code: 'CODE',
    haveCode: 'I HAVE A CODE',
    codeTitle: "Your machine's code",
    codeHelp: 'Give it to a friend. With "I HAVE A CODE" it loads your machine on their phone.',
    copy: 'COPY',
    copied: 'Copied!',
    copyFailed: 'Could not copy — write it down.',
    enterCodeTitle: "Type your friend's code",
    enterCodePlaceholder: 'WB-XXXX-XXXX-…',
    load: 'LOAD',
    badCode: "That code doesn't make sense. Check the letters and try again.",
    loaded: 'Machine loaded!',
    close: 'CLOSE',
    clear: 'CLEAR',
    share: 'SHARE',
    sharing: 'PREPARING…',
    shareDone: { shared: 'Shared!', copied: 'Copied it!', downloaded: 'Downloaded it!' } as const,
    shareFailed: 'The card did not come out. Try again.',
    shareTitle: "Sparken's Machine",
    shareText: (level: number, attempts: number) => `I solved level ${level} of Sparken's Machine in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}!`,
    cardTitle: "SPARKEN'S MACHINE",
    cardHeadline: (level: number) => `I solved level ${level}!`,
    cardStat: (level: number) => `${level}/15`,
    cardSubstat: (attempts: number) => `${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}`,
    xpNote: 'The XP went to your profile.',
    noXpNote: "You already got today's XP — play for fun!",
    piecesLeft: (n: number) => `${n}`,
    maxPieces: (n: number) => `Up to ${n} pieces.`,
  },
} as const;
