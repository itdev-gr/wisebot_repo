/**
 * ΔΩΜΑΤΙΟ ΑΠΟΔΡΑΣΗΣ — content for the `escape` game
 * ==================================================
 * One room = six puzzles in a fixed order: logic → pattern → code → observe
 * (count shapes on a picture) → knowledge (from the Academy) → final lock,
 * which combines earlier answers. Time is measured, never pressed: there is no
 * countdown, and a hint turns up on its own after `HINT_AFTER_MS` of
 * inactivity, free.
 *
 * «Κάθε εβδομάδα νέο δωμάτιο … Και τα παλιά μένουν ξεκλείδωτα.» Room N opens on
 * the Monday of week N, counted from `ESCAPE_START_DAY` (an Athens day key);
 * room 1 is always open and no room ever locks again. ADDING A ROOM IS A
 * DATA-ONLY CHANGE: append it to `ESCAPE_ROOMS` with the next `week` number.
 * `data/games/escape.test.ts` is the contract a new room must pass (six
 * puzzles in the order above, el + en everywhere, choice answers that are one
 * of their options, digit-only number answers, overlay counts that equal the
 * answer).
 *
 * WHERE THE ROOMS COME FROM: `docs/games/research/escape-rooms.json`, authored
 * and solver-checked separately. The rooms below are a transcription of it
 * with three additions: `week`, `xpTier` and the age label. The field names
 * are kept (`promptEl` / `promptEn` …) so a new room from the same pipeline can
 * be pasted in as-is.
 *
 * THE OBSERVE OVERLAYS: the research file describes each picture overlay in
 * prose. Prose is not a guarantee, so each one is turned into data here — the
 * shapes, their colours, and a FIXED list of centres in % of the image box —
 * and the component draws exactly these nodes as SVG over the photo. The
 * answer is the length of a list, so it cannot drift from what the child sees,
 * and it never depends on anything in the photo itself.
 *
 * Each language's puzzle is self-contained: the `code` puzzle of room 1 uses a
 * different symbol map in Greek (ΦΩΣ, 3 letters) and English (LIGHT, 5). Always
 * show the prompt, the options and the answer of the current language.
 *
 * NO REACT IN THIS FILE. Imported by `components/games/EscapeRoom.tsx`,
 * `components/games/escapeLogic.ts` and the two test files.
 *
 * PRIVACY (audience 6–12): nothing the child types leaves the device, and the
 * share card carries a room number and a time only — never a name.
 */

/* ────────────────────────────── the types ──────────────────────────────── */

/** The six puzzle kinds, in the order every room must use. */
export const ESCAPE_PUZZLE_ORDER = ['logic', 'pattern', 'code', 'observe', 'knowledge', 'final'] as const;
export type EscapePuzzleType = (typeof ESCAPE_PUZZLE_ORDER)[number];

/**
 * How the child answers.
 *   number — the on-screen numeric keypad (no free typing needed)
 *   word   — a text field; case, spaces and Greek accents are ignored
 *   choice — one of four buttons
 */
export type EscapeAnswerType = 'number' | 'word' | 'choice';

export type EscapeShape = 'star' | 'heart' | 'hexagon' | 'triangle';

/** An opaque panel drawn over the photo so nothing in it can be counted by mistake. */
export interface EscapeOverlayPanel {
  /** Edges in % of the image box (x of its width, y of its height). */
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  fill: string;
  stroke: string;
  /** Border width in CSS pixels, whatever the picture's rendered size. */
  strokePx: number;
  /** Corner radius in % of the image width. */
  radiusPct: number;
}

export interface EscapeOverlayGroup {
  shape: EscapeShape;
  fill: string;
  stroke: string;
  /** Outline width in CSS pixels, whatever the picture's rendered size. */
  strokePx: number;
  /** Shape width in % of the image width. */
  sizePct: number;
  /**
   * Floor in CSS pixels, so a shape stays recognisable on a phone. The
   * renderer never lets the floor push two shapes into each other.
   */
  minPx: number;
  /** Soft dark drop shadow (the «sticker» look). */
  shadow: boolean;
  /** Centres as [x%, y%] of the image box, origin top-left. Fixed — never random. */
  at: ReadonlyArray<readonly [number, number]>;
}

export interface EscapeOverlay {
  /** Intrinsic pixel size of the puzzle's `image`: the overlay's coordinate box. */
  width: number;
  height: number;
  panel?: EscapeOverlayPanel;
  groups: readonly EscapeOverlayGroup[];
  /** The shape the prompt asks the child to count. The answer is how many there are. */
  counts: EscapeShape;
}

export interface EscapePuzzle {
  type: EscapePuzzleType;
  answerType: EscapeAnswerType;
  promptEl: string;
  promptEn: string;
  /** Only for `choice`: exactly one of them equals the answer. */
  optionsEl?: readonly string[];
  optionsEn?: readonly string[];
  /** `number`: digits only. `word`: compared without case/accents. `choice`: an option, verbatim. */
  answerEl: string;
  answerEn: string;
  hintEl: string;
  hintEn: string;
  /** Shown once the puzzle is solved. */
  solutionEl: string;
  solutionEn: string;
  /** Only for `observe`: a file in `public/images/`. */
  image?: string;
  overlay?: EscapeOverlay;
}

export interface EscapeRoom {
  id: string;
  /** Opens on the Monday of this week, counted from `ESCAPE_START_DAY`. Week 1 is always open. */
  week: number;
  /** Who the room is written for, as shown on the room card. */
  ageEl: string;
  ageEn: string;
  titleEl: string;
  titleEn: string;
  introEl: string;
  introEn: string;
  outroEl: string;
  outroEn: string;
  /** Reward tier (10/20/30 ⭐ XP) for the FIRST escape; replays pay `ESCAPE_REPLAY_TIER`. */
  xpTier: 1 | 2 | 3;
  /** Exactly six, in `ESCAPE_PUZZLE_ORDER`. */
  puzzles: readonly EscapePuzzle[];
}

/* ────────────────────────────── the numbers ────────────────────────────── */

/** Game key handed to `grantGameReward` — also the GameCenter URL (`/game?g=escape`). */
export const ESCAPE_GAME_KEY = 'escape';

/**
 * Athens day key of week 1 — a Monday. Room N opens on this day + 7·(N−1).
 * Room 1 is open even before it.
 */
export const ESCAPE_START_DAY = '2026-09-21';

/** A hint appears after this long without a tap or a keystroke on the current puzzle. Free. */
export const HINT_AFTER_MS = 60_000;

/**
 * Tier for escaping a room the child has already escaped before. The first
 * escape pays the room's own `xpTier`. Never tied to speed or to hints: hints
 * are free by design (the brief: «χωρίς ποινή»).
 */
export const ESCAPE_REPLAY_TIER = 1;

/** Longest number the keypad accepts. Every number answer is shorter. */
export const KEYPAD_MAX_DIGITS = 4;

/**
 * localStorage key for the per-room record (escapes and best time), the only
 * thing this game persists. Prefixed `wb_escape_` and grepped against
 * `components/`, `data/` and `utils/` before it was chosen — nothing else uses
 * the prefix (`wb_daily_streak` once collided with `DailyRewardPopup` and paid
 * XP twice, docs/games/NOTES.md §1).
 */
export const ESCAPE_STORAGE_KEY = 'wb_escape_progress';

/** Accent used by the share card and the game's chrome (amber-500). */
export const ESCAPE_ACCENT = '#f59e0b';

/* ────────────────────────────── the overlays ───────────────────────────── */

/**
 * Room 1, puzzle 4 — 7 yellow stars on an opaque navy sign under the owl.
 * Source spec: panel x 6–94 %, y 60–95 %, radius 3 % of width, 4 px white
 * border; stars #FFD23F with a 3 px white outline, 11 % of the width, never
 * under 34 px; top row of 4 at y 71 %, bottom row of 3 at y 86 %.
 */
const OVERLAY_WORKSHOP_STARS: EscapeOverlay = {
  width: 644,
  height: 799,
  panel: { x0: 6, x1: 94, y0: 60, y1: 95, fill: '#14224A', stroke: '#FFFFFF', strokePx: 4, radiusPct: 3 },
  groups: [
    {
      shape: 'star', fill: '#FFD23F', stroke: '#FFFFFF', strokePx: 3, sizePct: 11, minPx: 34, shadow: false,
      at: [[20, 71], [40, 71], [60, 71], [80, 71], [30, 86], [50, 86], [70, 86]],
    },
  ],
  counts: 'star',
};

/**
 * Room 2, puzzle 4 — 7 violet hexagons and 4 orange triangles stuck on
 * Pencilo's photo. The source gives pixel centres on the 1280×859 original;
 * they are converted to % (x/1280, y/859) below. Every centre is in the lower
 * two thirds and Pencilo's face (x 410–830, y 140–430 px) stays clear.
 */
const OVERLAY_LOST_CODE_STICKERS: EscapeOverlay = {
  width: 1280,
  height: 859,
  groups: [
    {
      shape: 'hexagon', fill: '#7C3AED', stroke: '#FFFFFF', strokePx: 4, sizePct: 9, minPx: 28, shadow: true,
      // (302,441) (501,520) (850,551) (199,723) (456,700) (673,724) (1069,675)
      at: [[23.59, 51.34], [39.14, 60.54], [66.41, 64.14], [15.55, 84.17], [35.62, 81.49], [52.58, 84.28], [83.52, 78.58]],
    },
    {
      shape: 'triangle', fill: '#F97316', stroke: '#FFFFFF', strokePx: 4, sizePct: 9, minPx: 28, shadow: true,
      // (113,433) (896,358) (1075,435) (888,747)
      at: [[8.83, 50.41], [70, 41.68], [83.98, 50.64], [69.38, 86.96]],
    },
  ],
  counts: 'hexagon',
};

/**
 * Room 3, puzzle 4 — 9 stars and 5 hearts, all the same pink (#E6007E, 2 px
 * white outline, drop shadow), so the child must tell them apart by SHAPE.
 * Stars 7 % of the width, hearts 5 %; the pixel floors only apply on a small
 * screen and never make two shapes touch.
 */
const OVERLAY_FAMILY_STICKERS: EscapeOverlay = {
  width: 644,
  height: 799,
  groups: [
    {
      shape: 'star', fill: '#E6007E', stroke: '#FFFFFF', strokePx: 2, sizePct: 7, minPx: 28, shadow: true,
      at: [[14, 10], [40, 8], [70, 12], [88, 30], [12, 30], [30, 45], [86, 58], [20, 66], [58, 78]],
    },
    {
      shape: 'heart', fill: '#E6007E', stroke: '#FFFFFF', strokePx: 2, sizePct: 5, minPx: 24, shadow: true,
      at: [[58, 20], [80, 44], [36, 60], [70, 70], [12, 50]],
    },
  ],
  counts: 'star',
};

/* ────────────────────────────── the rooms ──────────────────────────────── */

export const ESCAPE_ROOMS: readonly EscapeRoom[] = [
  {
    id: "room1",
    week: 1,
    ageEl: "Ηλικίες 6–8",
    ageEn: "Ages 6–8",
    xpTier: 2,
    titleEl: "Το Εργαστήρι του WiseBot",
    titleEn: "WiseBot's Workshop",
    introEl: "Μπήκες στο Εργαστήρι του WiseBot για να δεις τις εφευρέσεις του — και η πόρτα έκλεισε πίσω σου! Μην ανησυχείς: ο WiseBot, ο Sparken, ο Pencilo, η Crocus και ο Link είναι εδώ και θα σε βοηθήσουν. Έξι μικροί γρίφοι φυλάνε την έξοδο. Πάμε έναν-έναν!",
    introEn: "You stepped into WiseBot's Workshop to see his inventions — and the door closed behind you! Don't worry: WiseBot, Sparken, Pencilo, Crocus and Link are all here to help. Six little puzzles guard the way out. Let's take them one by one!",
    outroEl: "Κλικ! Η πόρτα άνοιξε διάπλατα. Ο WiseBot χτυπάει χαρούμενος τα φτερά του και σου δίνει το μικρό χρυσό κλειδί του Εργαστηρίου. Μπράβο σου, μικρέ εξερευνητή — τα κατάφερες και βγήκες!",
    outroEn: "Click! The door swung wide open. WiseBot flaps his wings with joy and hands you the little golden key of the Workshop. Well done, young explorer — you made it out!",
    puzzles: [
      {
        type: "logic",
        answerType: "choice",
        promptEl: "Τέσσερα κουτιά στο ράφι: κόκκινο, μπλε, πράσινο, κίτρινο. Ο WiseBot λέει: «Το κλειδί δεν είναι στο κόκκινο, ούτε στο μπλε, ούτε στο πράσινο.» Σε ποιο κουτί είναι;",
        promptEn: "Four boxes on the shelf: red, blue, green, yellow. WiseBot says: \"The key is not in the red one, not in the blue one, not in the green one.\" Which box has it?",
        optionsEl: ["κόκκινο", "μπλε", "πράσινο", "κίτρινο"],
        optionsEn: ["red", "blue", "green", "yellow"],
        answerEl: "κίτρινο",
        answerEn: "yellow",
        hintEl: "Σβήσε με τον νου σου όσα κουτιά απέκλεισε ο WiseBot. Μένει μόνο ένα!",
        hintEn: "Cross off every box WiseBot ruled out. Only one is left!",
        solutionEl: "Ο WiseBot απέκλεισε το κόκκινο, το μπλε και το πράσινο. Μένει μόνο το κίτρινο — εκεί ήταν το κλειδί του συρταριού!",
        solutionEn: "WiseBot ruled out red, blue and green. Only yellow is left — the drawer key was in there!",
      },
      {
        type: "pattern",
        answerType: "number",
        promptEl: "Το συρτάρι ανοίγει με αριθμό. Ο Pencilo ζωγράφισε πάνω του: 2, 4, 6, 8, … Ποιος αριθμός είναι ο επόμενος;",
        promptEn: "The drawer opens with a number. Pencilo painted on it: 2, 4, 6, 8, … Which number comes next?",
        answerEl: "10",
        answerEn: "10",
        hintEl: "Δες πόσο ανεβαίνει κάθε φορά: από το 2 στο 4, από το 4 στο 6. Κάνε το ίδιο βήμα και μετά το 8.",
        hintEn: "Look at how much it goes up each time: 2 to 4, 4 to 6. Take the same step after 8.",
        solutionEl: "Κάθε αριθμός είναι 2 μεγαλύτερος από τον προηγούμενο. Άρα μετά το 8 έρχεται 8 + 2 = 10.",
        solutionEn: "Each number is 2 more than the one before. So after 8 comes 8 + 2 = 10.",
      },
      {
        type: "code",
        answerType: "choice",
        promptEl: "Η Crocus πάτησε τον διακόπτη και τα φώτα έσβησαν! Δίπλα του γράφει: ★=Φ, ●=Ω, ▲=Σ. Ποια λέξη γράφει το ★ ● ▲; Διάλεξε μία από τις τέσσερις.",
        promptEn: "Crocus hit the switch and the lights went out! Next to it you read: ★=L, ●=I, ▲=G, ◆=H, ■=T. What word does ★ ● ▲ ◆ ■ spell? Pick one of the four.",
        optionsEl: ["ΦΩΣ", "ΣΩΦ", "ΩΣΦ", "ΣΦΩ"],
        optionsEn: ["LIGHT", "LIGTH", "NIGHT", "RIGHT"],
        answerEl: "ΦΩΣ",
        answerEn: "LIGHT",
        hintEl: "Κοίτα τη σειρά των συμβόλων: πρώτα ★, μετά ●, μετά ▲. Μόνο μία επιλογή ξεκινάει με το γράμμα του ★ και συνεχίζει με τη σωστή σειρά.",
        hintEn: "Follow the order of the symbols: ★ first, then ●, ▲, ◆, ■. Only one choice starts with the letter ★ stands for and keeps every letter in that same order.",
        solutionEl: "★=Φ, ●=Ω, ▲=Σ, οπότε ★ ● ▲ = ΦΩΣ. Οι άλλες τρεις λέξεις έχουν τα ίδια γράμματα σε λάθος σειρά. Το εργαστήρι φωτίστηκε ξανά!",
        solutionEn: "★=L, ●=I, ▲=G, ◆=H, ■=T, so ★ ● ▲ ◆ ■ spells LIGHT. The other three words do not match the symbols. The workshop lit up again!",
      },
      {
        type: "observe",
        answerType: "number",
        promptEl: "Ο Sparken κόλλησε μια σκούρα μπλε ταμπέλα κάτω από τον WiseBot και ζωγράφισε πάνω της κίτρινα αστέρια. Μέτρα ΜΟΝΟ τα κίτρινα αστέρια που είναι πάνω στην ταμπέλα — τα φωτάκια του δάσους δεν μετράνε. Πόσα αστέρια είναι;",
        promptEn: "Sparken stuck a dark blue sign under WiseBot and painted yellow stars on it. Count ONLY the yellow stars that are on the sign — the little lights in the forest do not count. How many stars are there?",
        answerEl: "7",
        answerEn: "7",
        hintEl: "Τα αστέρια στην ταμπέλα είναι σε δύο σειρές. Μέτρα πρώτα την πάνω σειρά, μετά την κάτω, και πρόσθεσε τους δύο αριθμούς.",
        hintEn: "The stars on the sign are in two rows. Count the top row first, then the bottom row, and add the two numbers.",
        solutionEl: "Πάνω σειρά: 4 αστέρια. Κάτω σειρά: 3 αστέρια. 4 + 3 = 7 κίτρινα αστέρια πάνω στην ταμπέλα του Sparken.",
        solutionEn: "Top row: 4 stars. Bottom row: 3 stars. 4 + 3 = 7 yellow stars on Sparken's sign.",
        image: "/images/wisebot.jpg",
        overlay: OVERLAY_WORKSHOP_STARS,
      },
      {
        type: "knowledge",
        answerType: "number",
        promptEl: "Ο Link κρατάει το ημερολόγιο του εργαστηρίου. Σε ρωτάει: πόσους μήνες έχει ένας χρόνος;",
        promptEn: "Link is holding the workshop calendar. He asks you: how many months are there in one year?",
        answerEl: "12",
        answerEn: "12",
        hintEl: "Ξεκίνα από τον Ιανουάριο και μέτρα τους μήνες μέχρι τον Δεκέμβριο.",
        hintEn: "Start at January and count the months all the way to December.",
        solutionEl: "Ιανουάριος, Φεβρουάριος, Μάρτιος, Απρίλιος, Μάιος, Ιούνιος, Ιούλιος, Αύγουστος, Σεπτέμβριος, Οκτώβριος, Νοέμβριος, Δεκέμβριος — 12 μήνες!",
        solutionEn: "January, February, March, April, May, June, July, August, September, October, November, December — 12 months!",
      },
      {
        type: "final",
        answerType: "number",
        promptEl: "Τελευταία κλειδαριά! Θέλει έναν αριθμό. Πρόσθεσε τις τρεις απαντήσεις που έδωσες: τον αριθμό που ζωγράφισε ο Pencilo + τα αστέρια που μέτρησες στην ταμπέλα του Sparken + τους μήνες που σου ζήτησε ο Link.",
        promptEn: "Last lock! It wants a number. Add up the three answers you already gave: Pencilo's painted number + the stars you counted on Sparken's sign + Link's months.",
        answerEl: "29",
        answerEn: "29",
        hintEl: "Κάν' το σε δύο βήματα. Θυμήσου: ο αριθμός του Pencilo ήταν ο επόμενος μετά το 8, και οι μήνες του χρόνου είναι 12. Πρόσθεσε πρώτα τον αριθμό του Pencilo με τα αστέρια του Sparken και μετά πρόσθεσε το 12.",
        hintEn: "Do it in two steps. Remember: Pencilo's number was the one right after 8, and a year has 12 months. First add Pencilo's number to Sparken's stars, then add 12 to that.",
        solutionEl: "10 (ο επόμενος αριθμός του Pencilo) + 7 (τα αστέρια στην ταμπέλα του Sparken) = 17. Και 17 + 12 (οι μήνες του Link) = 29. Κλικ — η πόρτα άνοιξε!",
        solutionEn: "10 (Pencilo's next number) + 7 (the stars on Sparken's sign) = 17. And 17 + 12 (Link's months) = 29. Click — the door opened!",
      },
    ],
  },
  {
    id: "room2",
    week: 2,
    ageEl: "Ηλικίες 9–12",
    ageEn: "Ages 9–12",
    xpTier: 3,
    titleEl: "Ο Χαμένος Κώδικας",
    titleEn: "The Lost Code",
    introEl: "Κάτω από τη Βιβλιοθήκη της Ακαδημίας υπάρχει μια σιδερένια πόρτα με έναν πίνακα αριθμών. Πίσω της φυλάγεται ο Χαμένος Κώδικας — ο κωδικός που ξεκλειδώνει όλα τα βιβλία της Ακαδημίας. «Χθες το βράδυ ο κωδικός διαλύθηκε σε πέντε κομμάτια και σκόρπισε μέσα στο δωμάτιο», λέει ο WiseBot και ανοιγοκλείνει τα μεγάλα του μάτια. «Ο Link, ο Crocus, ο Sparken και ο Pencilo άφησαν ίχνη παντού. Βρες τα πέντε κομμάτια, κράτα σημειώσεις, και στο τέλος θα ξαναφτιάξουμε τον κωδικό μαζί.»",
    introEn: "Under the Academy Library there is an iron door with a number pad. Behind it is kept the Lost Code — the code that unlocks every book in the Academy. \"Last night the code broke into five pieces and scattered around this room,\" says WiseBot, blinking his big owl eyes. \"Link, Crocus, Sparken and Pencilo left clues everywhere. Find the five pieces, keep notes, and at the end we will rebuild the code together.\"",
    outroEl: "Ο πίνακας φωτίζει πράσινος, η σιδερένια πόρτα ανοίγει με ένα βαθύ «κλικ» και μέσα λάμπουν ράφια γεμάτα βιβλία που περίμεναν καιρό να ξανανοίξουν. «Πέντε κομμάτια, ένας κώδικας, ένας εξερευνητής», λέει ο WiseBot και σου δίνει το φτερό του για ένα χτύπημα νίκης. «Ο Χαμένος Κώδικας δεν είναι πια χαμένος — τον βρήκες εσύ.» Ο Link κάνει βόλτες χαρούμενος, ο Pencilo χειροκροτεί, και ο Sparken ήδη ετοιμάζει το επόμενο δωμάτιο. Μπράβο σου!",
    outroEn: "The pad glows green, the iron door opens with a deep click, and inside shine shelves full of books that have waited a long time to be opened again. \"Five pieces, one code, one explorer,\" says WiseBot, holding out a wing for a victory tap. \"The Lost Code is lost no more — you found it.\" Link zooms around in circles, Pencilo applauds, and Sparken is already preparing the next room. Well done!",
    puzzles: [
      {
        type: "logic",
        answerType: "word",
        promptEl: "Στο πρώτο ράφι βρίσκεις τρία κλειδιά — ένα κόκκινο, ένα πράσινο κι ένα μπλε — και ένα σημείωμα του WiseBot:\n• Ο Crocus κρατά το πράσινο κλειδί.\n• Ο Sparken δεν κρατά το μπλε.\n• Ο Pencilo δεν κρατά το κόκκινο.\nΚαθένας κρατά ένα μόνο κλειδί. Τι χρώμα είναι το κλειδί του Pencilo;",
        promptEn: "On the first shelf you find three keys — one red, one green and one blue — and a note from WiseBot:\n• Crocus holds the green key.\n• Sparken does not hold the blue one.\n• Pencilo does not hold the red one.\nEach friend holds exactly one key. What colour is Pencilo's key?",
        answerEl: "ΜΠΛΕ",
        answerEn: "BLUE",
        hintEl: "Ξεκίνα από αυτό που ξέρεις σίγουρα: το πράσινο είναι του Crocus, άρα μένουν το κόκκινο και το μπλε για δύο φίλους. Ο Sparken δεν μπορεί να έχει το μπλε — ποιο του μένει;",
        hintEn: "Start from what you know for sure: green belongs to Crocus, so red and blue are left for two friends. Sparken cannot have the blue one — so which one is left for him?",
        solutionEl: "Ο Crocus έχει το πράσινο. Ο Sparken δεν έχει το μπλε, άρα του μένει το κόκκινο. Το μόνο κλειδί που περισσεύει για τον Pencilo είναι το ΜΠΛΕ — και ταιριάζει, αφού ο Pencilo δεν κρατά το κόκκινο. Κράτα σημείωση: η λέξη ΜΠΛΕ έχει 4 γράμματα.",
        solutionEn: "Crocus has the green key. Sparken cannot have blue, so he has the red one. The only key left for Pencilo is the BLUE one — which fits, because Pencilo does not hold the red key. Make a note: the word BLUE has 4 letters.",
      },
      {
        type: "pattern",
        answerType: "number",
        promptEl: "Στην πόρτα της αποθήκης ο Pencilo έχει ζωγραφίσει μια σκάλα από κλάσματα, όπου κάθε σκαλί είναι το μισό του προηγούμενου:\n1/2 , 1/4 , 1/8 , 1/16 , ;\nΓράψε τον κάτω αριθμό (τον παρονομαστή) του επόμενου κλάσματος.",
        promptEn: "On the storeroom door Pencilo has drawn a staircase of fractions, where each step is half of the one before it:\n1/2 , 1/4 , 1/8 , 1/16 , ?\nWrite the bottom number (the denominator) of the next fraction.",
        answerEl: "32",
        answerEn: "32",
        hintEl: "Το μισό του 1/16 δεν είναι το 1/17. Κοίτα μόνο τους κάτω αριθμούς: 2, 4, 8, 16 — τι πράξη κάνεις κάθε φορά για να πας στον επόμενο;",
        hintEn: "Half of 1/16 is not 1/17. Look only at the bottom numbers: 2, 4, 8, 16 — what operation takes you from one to the next?",
        solutionEl: "Όταν παίρνεις το μισό ενός κλάσματος με αριθμητή 1, ο παρονομαστής διπλασιάζεται: 2 → 4 → 8 → 16 → 32. Άρα το επόμενο σκαλί είναι το 1/32 και ο παρονομαστής 32. Κράτα σημείωση: 32.",
        solutionEn: "When you halve a fraction with numerator 1, the denominator doubles: 2 → 4 → 8 → 16 → 32. So the next step is 1/32 and the denominator is 32. Make a note: 32.",
      },
      {
        type: "code",
        answerType: "word",
        promptEl: "Ο Link ξετυλίγει την ουρά του και σου δίνει μια χάρτινη ταινία με αριθμούς:\n4 - 5 - 10 - 1\n«Κάθε αριθμός δείχνει τη θέση ενός γράμματος στο ελληνικό αλφάβητο, που έχει 24 γράμματα», λέει. Α=1, Β=2, Γ=3, Δ=4, Ε=5, Ζ=6, Η=7, Θ=8, Ι=9, Κ=10 ... Ω=24.\nΠοια λέξη γράφουν οι τέσσερις αριθμοί; Γράψε τη λέξη με γράμματα, όχι με ψηφία.",
        promptEn: "Link unrolls his tail and hands you a paper strip with numbers:\n20 - 5 - 14\n\"Each number shows the position of a letter in the alphabet,\" he says. A=1, B=2, C=3, D=4, E=5 ... Z=26.\nWhich word do the three numbers spell? Write the word in letters, not in digits.",
        answerEl: "ΔΕΚΑ",
        answerEn: "TEN",
        hintEl: "Μέτρα το αλφάβητο στα δάχτυλα για κάθε αριθμό: το 4 είναι το τέταρτο γράμμα (Α, Β, Γ, Δ). Η λέξη που βγαίνει είναι ένας αριθμός γραμμένος με γράμματα.",
        hintEn: "Count the alphabet on your fingers for each number: 20 is the twentieth letter (A, B, C, D...). The word you get is a number written out in letters.",
        solutionEl: "Δ=4, Ε=5, Κ=10, Α=1. Οι αριθμοί γράφουν τη λέξη ΔΕΚΑ — το τρίτο κομμάτι του κώδικα είναι ο αριθμός 10. Κράτα σημείωση: 10.",
        solutionEn: "T=20, E=5, N=14. The numbers spell the word TEN — the third piece of the code is the number 10. Make a note: 10.",
      },
      {
        type: "observe",
        answerType: "number",
        promptEl: "Ο Link μπαίνει τρέχοντας και κολλάει αυτοκόλλητα σχήματα πάνω στη φωτογραφία του Pencilo: μεγάλα ΜΩΒ ΕΞΑΓΩΝΑ (σχήματα με 6 πλευρές) και μεγάλα ΠΟΡΤΟΚΑΛΙ ΤΡΙΓΩΝΑ. Πόσα μωβ εξάγωνα κόλλησε; Μέτρα μόνο τα μεγάλα μωβ εξάγωνα με το άσπρο περίγραμμα — όχι τα πορτοκαλί τρίγωνα και όχι τις μικρές χρυσές λάμψεις που υπήρχαν ήδη στο δάσος.",
        promptEn: "Link runs in and sticks big shapes onto Pencilo's photo: big PURPLE HEXAGONS (shapes with 6 sides) and big ORANGE TRIANGLES. How many purple hexagons did he stick on? Count only the big purple hexagons with the white outline — not the orange triangles, and not the little golden sparkles that were already in the forest.",
        answerEl: "7",
        answerEn: "7",
        hintEl: "Τα αυτοκόλλητα είναι 11 συνολικά — μωβ εξάγωνα και πορτοκαλί τρίγωνα μαζί. Τα τρίγωνα είναι λιγότερα και μετριούνται γρήγορα: μέτρησε πρώτα αυτά και αφαίρεσέ τα από το 11. Μέτρα με τάξη: πρώτα όσα είναι πάνω στον Pencilo, μετά όσα έπεσαν γύρω του.",
        hintEn: "There are 11 stickers in total — purple hexagons and orange triangles together. The triangles are fewer and quick to count: count those first, then take them away from 11. Count in an orderly way: first the ones on Pencilo, then the ones around him.",
        solutionEl: "Τα πορτοκαλί τρίγωνα είναι 4. Αφού όλα τα αυτοκόλλητα είναι 11, τα μωβ εξάγωνα είναι 11 − 4 = 7. Οι μικρές χρυσές λάμψεις του δάσους δεν είναι αυτοκόλλητα του Link, γι' αυτό δεν μετριούνται. Κράτα σημείωση: 7.",
        solutionEn: "There are 4 orange triangles. Since all the stickers together are 11, the purple hexagons are 11 − 4 = 7. The little golden sparkles in the forest are not Link's stickers, so they do not count. Make a note: 7.",
        image: "/images/pencilo.jpg",
        overlay: OVERLAY_LOST_CODE_STICKERS,
      },
      {
        type: "knowledge",
        answerType: "choice",
        promptEl: "Στον τοίχο ο Crocus έχει κρεμάσει μια αφίσα από την αρχαία Ολυμπία, με δρομείς και στεφάνια από αγριελιά. Στην αρχαία Ελλάδα, κάθε πόσα χρόνια γίνονταν οι Ολυμπιακοί Αγώνες;",
        promptEn: "On the wall Crocus has hung a poster from ancient Olympia, with runners and wild-olive wreaths. In ancient Greece, how often were the Olympic Games held?",
        optionsEl: ["Κάθε 2 χρόνια", "Κάθε 3 χρόνια", "Κάθε 4 χρόνια", "Κάθε 5 χρόνια"],
        optionsEn: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
        answerEl: "Κάθε 4 χρόνια",
        answerEn: "Every 4 years",
        hintEl: "Είναι το ίδιο διάστημα που περιμένουμε και σήμερα ανάμεσα σε δύο Ολυμπιάδες — όσο και τα δίσεκτα έτη.",
        hintEn: "It is the same gap we still wait between two Olympic Games today — the same as between leap years.",
        solutionEl: "Οι αρχαίοι Ολυμπιακοί Αγώνες γίνονταν στην Ολυμπία κάθε τέσσερα χρόνια. Αυτό το διάστημα των τεσσάρων χρόνων το έλεγαν Ολυμπιάδα, και οι σημερινοί Ολυμπιακοί Αγώνες κράτησαν το ίδιο έθιμο. Κράτα σημείωση: 4.",
        solutionEn: "The ancient Olympic Games took place at Olympia every four years. That four-year gap was called an Olympiad, and today's Olympic Games have kept the same custom. Make a note: 4.",
      },
      {
        type: "final",
        answerType: "number",
        promptEl: "Φτάνεις στη σιδερένια πόρτα. Ο πίνακας ζητά έναν αριθμό και ο WiseBot ανοίγει το σημειωματάριο με τα πέντε κομμάτια σου:\n1) Κλειδί του Pencilo (1ος γρίφος) → πόσα γράμματα έχει η λέξη του χρώματος; ____\n2) Παρονομαστής του επόμενου κλάσματος (2ος γρίφος) → ____\n3) Ο αριθμός που λέει η κρυμμένη λέξη (3ος γρίφος) → ____\n4) Μωβ εξάγωνα πάνω στη φωτογραφία (4ος γρίφος) → ____\n5) Χρόνια μιας Ολυμπιάδας (5ος γρίφος) → ____\nΣυμπλήρωσε και τις πέντε γραμμές και πρόσθεσέ τις. Ποιο είναι το άθροισμα;",
        promptEn: "You reach the iron door. The pad asks for a number and WiseBot opens the notebook with your five pieces:\n1) Pencilo's key (puzzle 1) → how many letters does the colour word have? ____\n2) Denominator of the next fraction (puzzle 2) → ____\n3) The number that the hidden word names (puzzle 3) → ____\n4) Purple hexagons on the photo (puzzle 4) → ____\n5) Years in one Olympiad (puzzle 5) → ____\nFill in all five lines and add them up. What is the total?",
        answerEl: "57",
        answerEn: "57",
        hintEl: "Έλεγξε το σημειωματάριο γραμμή γραμμή πριν προσθέσεις. Δύο από τα πέντε νούμερα είναι ίδια. Ξεκίνα από το μεγαλύτερο (αυτό του 2ου γρίφου) και πρόσθεσε τα υπόλοιπα ένα ένα· το άθροισμα είναι ανάμεσα στο 50 και στο 60. Αν σου βγαίνει 1 ή 2 μονάδες πάνω ή κάτω, το λάθος είναι σχεδόν σίγουρα η γραμμή 4: ξαναμέτρησε τα μωβ εξάγωνα (όλα τα αυτοκόλλητα μαζί ήταν 11).",
        hintEn: "Check the notebook line by line before you add. Two of the five numbers are the same. Start from the biggest one (the one from puzzle 2) and add the rest one by one; the total is between 50 and 60. If you end up 1 or 2 above or below, the mistake is almost certainly line 4: count the purple hexagons again (all the stickers together were 11).",
        solutionEl: "Γραμμή 1: η λέξη ΜΠΛΕ έχει 4 γράμματα. Γραμμή 2: το επόμενο κλάσμα ήταν το 1/32, άρα 32. Γραμμή 3: η κρυμμένη λέξη ήταν ΔΕΚΑ, άρα 10. Γραμμή 4: τα μωβ εξάγωνα ήταν 7. Γραμμή 5: μια Ολυμπιάδα κρατά 4 χρόνια.\n4 + 32 + 10 + 7 + 4 = 57. Ο Χαμένος Κώδικας είναι το 57!",
        solutionEn: "Line 1: the word BLUE has 4 letters. Line 2: the next fraction was 1/32, so 32. Line 3: the hidden word was TEN, so 10. Line 4: the purple hexagons were 7. Line 5: one Olympiad lasts 4 years.\n4 + 32 + 10 + 7 + 4 = 57. The Lost Code is 57!",
      },
    ],
  },
  {
    id: "room3",
    week: 3,
    ageEl: "Για όλη την οικογένεια",
    ageEn: "For the whole family",
    xpTier: 3,
    titleEl: "Η Αίθουσα της Οικογένειας",
    titleEn: "The Family Room",
    introEl: "Κυριακή απόγευμα στην Ακαδημία. Στην Αίθουσα της Οικογένειας ο WiseBot έχει στρώσει κουβέρτες, ποπκόρν και επιτραπέζια — και μόλις μπήκατε, η πόρτα έκλεισε πίσω σας με ένα «κλικ». «Ωπ», λέει ο WiseBot ανοιγοκλείνοντας τα μεγάλα του μάτια. «Αυτή η κλειδαριά θέλει έξι γρίφους. Και την έφτιαξα πονηρά: άλλους θα τους λύσει πιο γρήγορα ο μεγάλος, άλλους το παιδί. Κανείς σας δεν βγαίνει μόνος του. Καθίστε δίπλα δίπλα και ξεκινάμε.»",
    introEn: "Sunday afternoon at the Academy. In the Family Room, WiseBot has laid out blankets, popcorn and board games — and the moment you walked in, the door shut behind you with a click. \"Oops,\" says WiseBot, blinking his big eyes. \"This lock wants six puzzles. And I built it to be sneaky: the grown-up will crack some faster, the child will crack the others. Neither of you gets out alone. Sit down side by side and let's begin.\"",
    outroEl: "Η κλειδαριά κάνει κλικ και η πόρτα ανοίγει διάπλατα. Ο Sparken χειροκροτεί, ο Pencilo σκορπάει ποπκόρν από τη χαρά του, η Crocus κρεμάει τα τέσσερα κλειδιά πίσω στο ράφι και ο Link σβήνει τους αριθμούς από τον πίνακα. «Το είδατε;» λέει ο WiseBot. «Ο ένας ξεμπέρδεψε τα κλειδιά, ο άλλος μέτρησε τα αστέρια πριν προλάβω να πω “αστέρι”. Η Αίθουσα της Οικογένειας δεν ανοίγει ποτέ με ένα μόνο ζευγάρι χέρια.» Βγαίνετε έξω — και το ποπκόρν είναι ακόμα ζεστό.",
    outroEn: "The lock clicks and the door swings wide open. Sparken applauds, Pencilo scatters popcorn out of sheer joy, Crocus hangs the four keys back on the shelf and Link wipes the numbers off the board. \"Did you see that?\" says WiseBot. \"One of you untangled the keys, the other counted the stars before I could even say 'star'. The Family Room never opens with just one pair of hands.\" You step outside — and the popcorn is still warm.",
    puzzles: [
      {
        type: "logic",
        answerType: "word",
        promptEl: "Μπροστά στην πόρτα στέκονται τέσσερις φίλοι σε μια σειρά. Οι θέσεις είναι αριθμημένες 1, 2, 3 και 4 — άκρες είναι η 1η και η 4η θέση. Είναι ο Sparken, ο Pencilo, η Crocus και ο Link, και ο καθένας κρατά ένα κλειδί: κόκκινο, μπλε, πράσινο ή χρυσό.\n• Ο Sparken κρατά το πράσινο κλειδί και δεν στέκεται σε καμία από τις δύο άκρες.\n• Όποιος στέκεται στη 2η θέση κρατά το χρυσό κλειδί.\n• Ο Link στέκεται στη θέση αμέσως μετά την Crocus (δηλαδή σε θέση με έναν αριθμό μεγαλύτερο).\n• Η Crocus δεν κρατά το μπλε κλειδί.\nΤι χρώμα είναι το κλειδί της Crocus;",
        promptEn: "Four friends are standing in a row in front of the door. The spots are numbered 1, 2, 3 and 4 — the ends are spot 1 and spot 4. They are Sparken, Pencilo, Crocus and Link, and each one holds a key: red, blue, green or gold.\n• Sparken holds the green key and is not standing at either end.\n• Whoever stands in 2nd place holds the gold key.\n• Link stands in the spot immediately after Crocus — one position number higher.\n• Crocus does not hold the blue key.\nWhat colour is Crocus's key?",
        answerEl: "κοκκινο",
        answerEn: "red",
        hintEl: "Πιάσε πρώτα τον Sparken: δεν είναι ούτε 1ος ούτε 4ος, και δεν μπορεί να είναι 2ος γιατί η 2η θέση κρατά το χρυσό κλειδί ενώ αυτός κρατά πράσινο. Άρα ξέρεις ακριβώς τον αριθμό του — και μετά μένουν οι θέσεις 1, 2 και 4: μόνο ένα ζευγάρι από αυτές έχει διαδοχικούς αριθμούς.",
        hintEn: "Start with Sparken: he is not 1st or 4th, and he cannot be 2nd because spot 2 holds the gold key while he holds green. So you know his exact number — and then spots 1, 2 and 4 are left: only one pair of them has consecutive numbers.",
        solutionEl: "Ο Sparken δεν είναι στις άκρες, άρα είναι 2ος ή 3ος. Στη 2η θέση είναι το χρυσό κλειδί κι αυτός κρατά πράσινο, άρα ο Sparken είναι 3ος. Μένουν οι θέσεις 1, 2 και 4, και ο Link πρέπει να είναι στη θέση αμέσως μετά την Crocus (ένα νούμερο μεγαλύτερο) — αυτό γίνεται μόνο με την Crocus 1η και τον Link 2ο, οπότε ο Pencilo είναι 4ος. Ο Link, στη 2η θέση, κρατά το χρυσό. Περισσεύουν το κόκκινο και το μπλε για Crocus και Pencilo, κι επειδή η Crocus δεν κρατά μπλε, κρατά το ΚΟΚΚΙΝΟ.",
        solutionEn: "Sparken is not at an end, so he is 2nd or 3rd. Spot 2 holds the gold key and he holds green, so Sparken is 3rd. That leaves spots 1, 2 and 4, and Link must stand in the spot immediately after Crocus (one number higher) — only possible with Crocus 1st and Link 2nd, so Pencilo is 4th. Link, in 2nd place, holds the gold key. Red and blue are left for Crocus and Pencilo, and since Crocus does not hold blue, she holds the RED key.",
      },
      {
        type: "pattern",
        answerType: "number",
        promptEl: "Ο Pencilo στοιβάζει μαξιλάρια για το βραδινό σινεμά. Στην 1η στοίβα έβαλε 1 μαξιλάρι, στη 2η έβαλε 3, στην 3η έβαλε 6, στην 4η έβαλε 10 και στην 5η έβαλε 15. Πόσα μαξιλάρια θα βάλει στην 6η στοίβα;",
        promptEn: "Pencilo is stacking cushions for movie night. In the 1st stack he put 1 cushion, in the 2nd he put 3, in the 3rd he put 6, in the 4th he put 10 and in the 5th he put 15. How many cushions will he put in the 6th stack?",
        answerEl: "21",
        answerEn: "21",
        hintEl: "Μην κοιτάς τους αριθμούς, κοίτα πόσα παραπάνω βάζει κάθε φορά. Από στοίβα σε στοίβα η προσθήκη μεγαλώνει πάντα κατά ένα.",
        hintEn: "Do not look at the numbers, look at how many more he adds each time. From stack to stack, the extra amount always grows by one.",
        solutionEl: "Κάθε φορά προσθέτει ένα παραπάνω από την προηγούμενη φορά: +2, +3, +4, +5 και μετά +6. Άρα 15 + 6 = 21 μαξιλάρια.",
        solutionEn: "Each time he adds one more than the time before: +2, +3, +4, +5 and then +6. So 15 + 6 = 21 cushions.",
      },
      {
        type: "code",
        answerType: "word",
        promptEl: "Η Crocus άφησε ένα σημείωμα στο ψυγείο, γραμμένο με αριθμούς αντί για γράμματα. Κάθε αριθμός δείχνει τη θέση του γράμματος στο ελληνικό αλφάβητο: Α=1, Β=2, Γ=3, Δ=4, Ε=5, και συνεχίζει έτσι μέχρι το Ω=24. Ποια λέξη κρύβεται;\n18 – 16 – 9 – 19 – 9",
        promptEn: "Crocus left a note on the fridge, written with numbers instead of letters. Each number shows the letter's position in the alphabet: A=1, B=2, C=3, D=4, E=5, and so on all the way to Z=26. Which word is hiding?\n8 – 15 – 21 – 19 – 5",
        answerEl: "σπιτι",
        answerEn: "house",
        hintEl: "Μέτρα με τα δάχτυλα ξεκινώντας από το Α: το 18 πέφτει στο Σ και το 16 στο Π. Η λέξη έχει 5 γράμματα και είναι εκεί που μαζεύεται κάθε οικογένεια.",
        hintEn: "Count on your fingers starting from A: 8 lands on H and 15 lands on O. The word has 5 letters and it is the place where every family gathers.",
        solutionEl: "Σ είναι το 18ο γράμμα, Π το 16ο, Ι το 9ο, Τ το 19ο και Ι πάλι το 9ο: Σ-Π-Ι-Τ-Ι, δηλαδή ΣΠΙΤΙ.",
        solutionEn: "H is the 8th letter, O the 15th, U the 21st, S the 19th and E the 5th: H-O-U-S-E, that is HOUSE.",
      },
      {
        type: "observe",
        answerType: "number",
        promptEl: "Ο WiseBot κόλλησε πάνω στη φωτογραφία του όλα τα αυτοκόλλητά του: αστεράκια και καρδούλες, όλα στο ίδιο ροζ χρώμα. Μέτρησε ΜΟΝΟ τα αστέρια — αυτά με τις πέντε μύτες. Πόσα είναι;",
        promptEn: "WiseBot has stuck his whole sticker collection onto his own photo: stars and hearts, all in the very same pink colour. Count ONLY the stars — the ones with five points. How many are there?",
        answerEl: "9",
        answerEn: "9",
        hintEl: "Το χρώμα δεν βοηθάει καθόλου, γιατί καρδούλες και αστέρια είναι ίδια ροζ: ξεχώρισέ τα από το σχήμα — τα αστέρια έχουν πέντε μύτες. Πήγαινε γραμμή γραμμή από πάνω προς τα κάτω, κράτα το δάχτυλό σου σε όσα μέτρησες ήδη, και θα δεις ότι είναι λιγότερα από δέκα.",
        hintEn: "The colour is no help at all, because hearts and stars are exactly the same pink: tell them apart by shape — stars have five points. Go row by row from top to bottom, keep your finger on the ones you have already counted, and you will see there are fewer than ten.",
        solutionEl: "Τα ροζ αστέρια με τις πέντε μύτες είναι 9. Οι 5 καρδούλες έχουν ακριβώς το ίδιο χρώμα αλλά άλλο σχήμα — αυτή ήταν η παγίδα του WiseBot.",
        solutionEn: "There are 9 pink five-pointed stars. The 5 hearts are exactly the same colour but a different shape — that was WiseBot's little trap.",
        image: "/images/wisebot.jpg",
        overlay: OVERLAY_FAMILY_STICKERS,
      },
      {
        type: "knowledge",
        answerType: "choice",
        promptEl: "Ο Sparken έστησε το τηλεσκόπιό του στο παράθυρο της αίθουσας. «Αυτή είναι ερώτηση για τους μεγάλους», λέει και κλείνει το μάτι στο παιδί. «Πόσους πλανήτες έχει σήμερα το Ηλιακό μας Σύστημα;»",
        promptEn: "Sparken has set up his telescope at the window of the room. \"This one is a question for the grown-ups,\" he says, winking at the child. \"How many planets does our Solar System have today?\"",
        optionsEl: ["7 πλανήτες", "8 πλανήτες", "9 πλανήτες", "10 πλανήτες"],
        optionsEn: ["7 planets", "8 planets", "9 planets", "10 planets"],
        answerEl: "8 πλανήτες",
        answerEn: "8 planets",
        hintEl: "Οι γονείς το έμαθαν αλλιώς στο σχολείο τους! Από το 2006 ο Πλούτωνας θεωρείται «νάνος πλανήτης» και βγήκε από τη λίστα, οπότε ο αριθμός είναι ένας λιγότερος απ' όσο θυμούνται.",
        hintEn: "Parents learned this differently at school! Since 2006 Pluto counts as a \"dwarf planet\" and left the list, so the number is one less than they remember.",
        solutionEl: "Οκτώ: Ερμής, Αφροδίτη, Γη, Άρης, Δίας, Κρόνος, Ουρανός, Ποσειδώνας. Ο Πλούτωνας από το 2006 κατατάσσεται ως νάνος πλανήτης — γι' αυτό πολλοί μεγάλοι λένε ακόμα εννιά.",
        solutionEn: "Eight: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Since 2006 Pluto is classified as a dwarf planet — which is why many grown-ups still say nine.",
      },
      {
        type: "final",
        answerType: "number",
        promptEl: "Η κλειδαριά της πόρτας είναι ένας δίσκος με αριθμούς, και δίπλα της ο WiseBot έχει κολλήσει ένα χαρτάκι:\n«Πρόσθεσε τα πέντε και θα βγει ο αριθμός που ανοίγει:\n1) το κλειδί της Crocus από τον 1ο γρίφο — κόκκινο 7, μπλε 4, πράσινο 6, χρυσό 9\n2) τα μαξιλάρια της 6ης στοίβας από τον 2ο γρίφο\n3) πόσα γράμματα έχει η κρυφή λέξη του σημειώματος από τον 3ο γρίφο\n4) τα ροζ αστέρια που μετρήσατε στον 4ο γρίφο\n5) τους πλανήτες από τον 5ο γρίφο»\nΠοιος αριθμός ανοίγει την πόρτα;",
        promptEn: "The door lock is a dial full of numbers, and next to it WiseBot has stuck a little note:\n\"Add the five and you get the number that opens it:\n1) Crocus's key from puzzle 1 — red 7, blue 4, green 6, gold 9\n2) the cushions in the 6th stack from puzzle 2\n3) how many letters the hidden word of the note has, from puzzle 3\n4) the pink stars you counted in puzzle 4\n5) the planets from puzzle 5\"\nWhich number opens the door?",
        answerEl: "50",
        answerEn: "50",
        hintEl: "Ξεκίνα από τα τρία μεγάλα νούμερα — μαξιλάρια, αστέρια, πλανήτες. Μαζί κάνουν 38. Μένουν μόνο δύο μικρά: ο αριθμός του χρώματος και τα γράμματα της λέξης.",
        hintEn: "Start with the three big numbers — cushions, stars, planets. Together they make 38. Only two small ones are left: the number for the colour and the letters of the word.",
        solutionEl: "Το κλειδί της Crocus ήταν κόκκινο, άρα 7. Τα μαξιλάρια της 6ης στοίβας ήταν 21. Η κρυφή λέξη ΣΠΙΤΙ έχει 5 γράμματα. Τα ροζ αστέρια ήταν 9. Οι πλανήτες 8. Άρα 7 + 21 + 5 + 9 + 8 = 50.",
        solutionEn: "Crocus's key was red, so 7. The 6th stack had 21 cushions. The hidden word HOUSE has 5 letters. The pink stars were 9. The planets are 8. So 7 + 21 + 5 + 9 + 8 = 50.",
      },
    ],
  },
];

/* ────────────────────────────── every other string ─────────────────────── */

export interface EscapeCopy {
  title: string;
  tagline: string;
  newRoomEveryMonday: string;
  /* room picker */
  roomLabel: (n: number) => string;
  opensOn: (day: number, month: number) => string;
  locked: string;
  escapedBadge: string;
  bestTime: (time: string) => string;
  enter: string;
  /* intro */
  noRush: string;
  start: string;
  /* puzzles */
  puzzleOf: (n: number, total: number) => string;
  typeLabel: Readonly<Record<EscapePuzzleType, string>>;
  elapsed: string;
  check: string;
  deleteDigit: string;
  typeHere: string;
  notYet: string;
  correct: string;
  solutionTitle: string;
  next: string;
  openDoor: string;
  notesTitle: string;
  zoom: string;
  zoomClose: string;
  pictureLabel: string;
  /* hint */
  hint: string;
  hintFree: string;
  close: string;
  /* outro */
  escapedTitle: string;
  yourTime: string;
  hintsUsed: (n: number) => string;
  newBest: string;
  otherRoom: string;
  playAgain: string;
  exit: string;
  xpNote: string;
  noXpNote: string;
  /* sharing (room number and time only) */
  share: string;
  sharing: string;
  shareDone: { shared: string; copied: string; downloaded: string };
  shareFailed: string;
  shareTitle: string;
  shareText: (room: number, time: string) => string;
  cardTitle: string;
  cardHeadline: (room: number, time: string) => string;
  cardSubstat: string;
}

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ESCAPE_COPY: Record<'el' | 'en', EscapeCopy> = {
  el: {
    // Greek is written already-uppercase where it should look uppercase:
    // toUpperCase() would keep the accents and look wrong.
    title: 'ΔΩΜΑΤΙΟ ΑΠΟΔΡΑΣΗΣ',
    tagline: 'Έξι γρίφοι φυλάνε την πόρτα. Ο χρόνος μετράει — αλλά δεν βιάζεσαι.',
    newRoomEveryMonday: 'Νέο δωμάτιο κάθε Δευτέρα!',
    roomLabel: (n) => `ΔΩΜΑΤΙΟ ${n}`,
    opensOn: (d, m) => `Ανοίγει στις ${d}/${m}`,
    locked: 'ΚΛΕΙΔΩΜΕΝΟ',
    escapedBadge: 'ΒΓΗΚΕΣ',
    bestTime: (time) => `Καλύτερος χρόνος: ${time}`,
    enter: 'ΜΠΕΣ',
    noRush: 'Ο χρόνος μετράει, αλλά δεν πιέζει. Αν κολλήσεις, μια βοήθεια θα έρθει μόνη της.',
    start: 'ΞΕΚΙΝΑΜΕ!',
    puzzleOf: (n, total) => `${n}/${total}`,
    typeLabel: {
      logic: 'ΛΟΓΙΚΗ',
      pattern: 'ΜΟΤΙΒΟ',
      code: 'ΚΩΔΙΚΑΣ',
      observe: 'ΠΑΡΑΤΗΡΗΣΗ',
      knowledge: 'ΓΝΩΣΗ',
      final: 'ΤΕΛΙΚΗ ΚΛΕΙΔΑΡΙΑ',
    },
    elapsed: 'Χρόνος',
    check: 'ΕΛΕΓΧΟΣ',
    deleteDigit: 'Σβήσε',
    typeHere: 'Γράψε τη λέξη με ελληνικά γράμματα…',
    notYet: 'Όχι ακόμα — δοκίμασε ξανά!',
    correct: 'ΣΩΣΤΟ!',
    solutionTitle: 'ΠΩΣ ΛΥΝΕΤΑΙ',
    next: 'ΣΥΝΕΧΕΙΑ',
    openDoor: 'ΑΝΟΙΞΕ ΤΗΝ ΠΟΡΤΑ',
    notesTitle: 'ΟΙ ΣΗΜΕΙΩΣΕΙΣ ΣΟΥ',
    zoom: 'ΜΕΓΕΘΥΝΣΗ',
    zoomClose: 'ΠΙΣΩ',
    pictureLabel: 'Εικόνα με σχήματα για μέτρημα',
    hint: 'ΒΟΗΘΕΙΑ',
    hintFree: 'Δωρεάν, χωρίς ποινή.',
    close: 'ΚΛΕΙΣΕ',
    escapedTitle: 'ΒΓΗΚΕΣ!',
    yourTime: 'ΧΡΟΝΟΣ',
    hintsUsed: (n) => (n === 0 ? 'Χωρίς καμία βοήθεια!' : n === 1 ? 'Με 1 βοήθεια.' : `Με ${n} βοήθειες.`),
    newBest: 'ΝΕΟ ΡΕΚΟΡ ΧΡΟΝΟΥ!',
    otherRoom: 'ΑΛΛΟ ΔΩΜΑΤΙΟ',
    playAgain: 'ΞΑΝΑ',
    exit: 'ΤΕΛΟΣ',
    xpNote: 'Κέρδισες XP για αυτό το δωμάτιο.',
    noXpNote: 'Χωρίς XP — πήρες ήδη το σημερινό.',
    share: 'ΜΟΙΡΑΣΟΥ ΤΟ',
    sharing: 'ΕΤΟΙΜΑΖΩ…',
    shareDone: {
      shared: 'Έφυγε! 🎉',
      copied: 'Το αντέγραψα! Επικόλλησέ το όπου θες. 📋',
      downloaded: 'Το αποθήκευσα σαν εικόνα. 💾',
    },
    shareFailed: 'Δεν μπόρεσα να φτιάξω την κάρτα. Δοκίμασε ξανά.',
    shareTitle: 'Δωμάτιο Απόδρασης',
    shareText: (room, time) => `Δωμάτιο Απόδρασης στο WiseBot Academy: βγήκα από το Δωμάτιο ${room} σε ${time}! Εσύ;`,
    cardTitle: 'ΔΩΜΑΤΙΟ ΑΠΟΔΡΑΣΗΣ',
    cardHeadline: (room, time) => `Βγήκα από το Δωμάτιο ${room} σε ${time}`,
    cardSubstat: 'Νέο δωμάτιο κάθε Δευτέρα!',
  },
  en: {
    title: 'ESCAPE ROOM',
    tagline: 'Six puzzles guard the door. The clock counts — but there is no rush.',
    newRoomEveryMonday: 'A new room every Monday!',
    roomLabel: (n) => `ROOM ${n}`,
    opensOn: (d, m) => `Opens ${MONTHS_EN[m - 1] ?? m} ${d}`,
    locked: 'LOCKED',
    escapedBadge: 'ESCAPED',
    bestTime: (time) => `Best time: ${time}`,
    enter: 'ENTER',
    noRush: 'The clock counts, it never rushes you. If you get stuck, a hint will turn up on its own.',
    start: "LET'S GO!",
    puzzleOf: (n, total) => `${n}/${total}`,
    typeLabel: {
      logic: 'LOGIC',
      pattern: 'PATTERN',
      code: 'CODE',
      observe: 'LOOK CLOSELY',
      knowledge: 'KNOWLEDGE',
      final: 'FINAL LOCK',
    },
    elapsed: 'Time',
    check: 'CHECK',
    deleteDigit: 'Delete',
    typeHere: 'Type the word…',
    notYet: 'Not yet — try again!',
    correct: 'CORRECT!',
    solutionTitle: 'HOW IT WORKS',
    next: 'NEXT',
    openDoor: 'OPEN THE DOOR',
    notesTitle: 'YOUR NOTES',
    zoom: 'ZOOM',
    zoomClose: 'BACK',
    pictureLabel: 'Picture with shapes to count',
    hint: 'HINT',
    hintFree: 'Free, no penalty.',
    close: 'CLOSE',
    escapedTitle: 'YOU GOT OUT!',
    yourTime: 'TIME',
    hintsUsed: (n) => (n === 0 ? 'Without a single hint!' : n === 1 ? 'With 1 hint.' : `With ${n} hints.`),
    newBest: 'NEW BEST TIME!',
    otherRoom: 'ANOTHER ROOM',
    playAgain: 'AGAIN',
    exit: 'EXIT',
    xpNote: 'You earned XP for this room.',
    noXpNote: "No XP — you already got today's.",
    share: 'SHARE IT',
    sharing: 'PREPARING…',
    shareDone: {
      shared: 'Sent! 🎉',
      copied: 'Copied! Paste it anywhere. 📋',
      downloaded: 'Saved as an image. 💾',
    },
    shareFailed: "I couldn't make the card. Try again.",
    shareTitle: 'Escape Room',
    shareText: (room, time) => `Escape Room at WiseBot Academy: I got out of Room ${room} in ${time}! Can you?`,
    cardTitle: 'ESCAPE ROOM',
    cardHeadline: (room, time) => `I got out of Room ${room} in ${time}`,
    cardSubstat: 'A new room every Monday!',
  },
};
