/**
 * ΠΟΙΟΣ ΕΙΜΑΙ; — content for the `whoami` game
 * =============================================
 * Two modes, one data set:
 *
 *   A. The child thinks of one of the Academy's great people and WiseBot finds
 *      them with ΝΑΙ / ΟΧΙ / ΔΕΝ ΞΕΡΩ questions (Akinator, without any AI call).
 *   B. The reverse: five clues, hardest first, and the child picks the person
 *      out of four names. Fewer clues used = more points.
 *
 * Everything the content team may want to change without touching a component
 * lives here: the 95 people and their 36 yes/no attributes, the five clues per
 * person, the wording of every question WiseBot asks, the limits (20 questions,
 * one wrong answer tolerated, two guesses), the points and every user-visible
 * string in Greek and English.
 *
 * NO REACT IN THIS FILE. It is imported by `components/games/WhoAmI.tsx`, by
 * `components/games/whoamiLogic.ts` and by `data/games/whoami.test.ts`.
 *
 * WHERE THE PEOPLE COME FROM (see `docs/games/NOTES.md` §5): the Academy holds
 * 113 stories, of which 16 are books or concepts and 2 are duplicates, so 95
 * people. The raw, validated research file is
 * `docs/games/research/whoami-attributes.json` (checked by
 * `docs/games/research/whoami-check.py`); this file is a transcription of it,
 * with `greekName` used as the Greek display name. 18 attributes left 14 groups
 * of people with identical answers (Picasso = Mozart = Shakespeare); the second
 * tier of 18 brought collisions to 0 and the greedy worst case to 9 questions.
 *
 * EDITING A PERSON: `data/games/whoami.test.ts` is the contract. It fails on a
 * duplicate id or name, on anything but exactly five non-empty clues per
 * language, on a clue that contains a word of the person's own name, and — the
 * important one — on two people whose 36 answers are identical, because then
 * no sequence of questions can ever tell them apart.
 *
 * PRIVACY (hard rule, audience is 6–12): nothing the child answers leaves the
 * device, there is no free text anywhere in the game, and the share card
 * carries a score only — never the child's name, never who they were thinking of.
 */

/* ────────────────────────────── the attributes ─────────────────────────── */

/**
 * The 36 yes/no facts WiseBot can ask about. Tier 1 (first 18) are the broad
 * ones a six-year-old can answer; tier 2 were added to split the people tier 1
 * could not tell apart. The order is also the tie-break order when two
 * questions are equally good, so the friendlier questions come first.
 */
export const WHOAMI_ATTRS = [
  // tier 1
  'alive', 'ancient', 'before1900', 'greek', 'american', 'woman', 'group', 'scientist',
  'inventor', 'tech', 'business', 'athlete', 'artist', 'usedToday', 'famousBrand',
  'olympicOrNobel', 'space', 'doctor',
  // tier 2
  'music', 'painter', 'writer', 'film', 'ballSport', 'teamSport', 'britain', 'italy',
  'asian', 'techFounder', 'warrior', 'conqueror', 'veryRich', 'food', 'animals',
  'poorInLife', 'bornAfter1980', 'teacher',
] as const;

export type WhoAmIAttr = (typeof WHOAMI_ATTRS)[number];

/** One answer the child can give. «ΔΕΝ ΞΕΡΩ» eliminates nobody. */
export type WhoAmIAnswer = 'yes' | 'no' | 'dontknow';

export interface WhoAmIPerson {
  /** Academy story id (see `data/academyCourses.ts`). Unique. */
  id: number;
  /** Display name in Greek script. */
  nameEl: string;
  nameEn: string;
  /** Shown only once the person is revealed — it would give the answer away. */
  emoji: string;
  /** Exactly five clues per language, hardest first. None contains the name. */
  clues: { el: readonly string[]; en: readonly string[] };
  /** All 36 attributes, every one an explicit boolean. */
  attrs: Readonly<Record<WhoAmIAttr, boolean>>;
}

/* ────────────────────────────── the numbers ────────────────────────────── */

/** Game key handed to `grantGameReward` — also the GameCenter URL (`/game?g=whoami`). */
export const WHOAMI_GAME_KEY = 'whoami';

/** Most questions WiseBot may ask in one round. The brief says 20. */
export const MAX_QUESTIONS = 20;

/** How many wrong answers from the child WiseBot survives. The brief says 1. */
export const WRONG_ANSWER_TOLERANCE = 1;

/** Guesses WiseBot gets: the first, and one more if the first was wrong. */
export const MAX_GUESSES = 2;

/** How long «Χμμ… σκέφτομαι…» stays up before a guess, in ms. Suspense, not pressure. */
export const THINKING_MS = 1300;

/** Clues per person in the reverse mode. */
export const CLUES_PER_PERSON = 5;

/** People per reverse round. */
export const REVERSE_ROUND = 5;

/** Names offered per person in the reverse mode (the right one + 3). */
export const REVERSE_OPTIONS = 4;

/** Found after `n` clues → `CLUES_PER_PERSON + 1 - n` points: 5 for one clue, 1 for all five. */
export const REVERSE_MAX_POINTS = REVERSE_ROUND * CLUES_PER_PERSON;

/**
 * Reverse round points → reward tier for `grantGameReward` (10/20/30 ⭐ XP).
 * Checked top-down. Zero points pays nothing.
 */
export const REVERSE_TIERS: ReadonlyArray<{ minPoints: number; tier: 1 | 2 | 3 }> = [
  { minPoints: 18, tier: 3 },
  { minPoints: 10, tier: 2 },
  { minPoints: 1, tier: 1 },
];

/**
 * Tier for a finished «σκέψου» round. Flat on purpose: paying more when
 * WiseBot loses would pay children to answer wrongly.
 */
export const THINK_TIER = 1;

/**
 * localStorage key for the best reverse-mode score, the only thing this game
 * persists. Prefixed `wb_whoami_` and grepped against `components/`, `data/`
 * and `utils/` before it was chosen (nothing else uses the prefix):
 * `wb_daily_streak` once collided with `DailyRewardPopup` and paid XP twice.
 */
export const WHOAMI_STORAGE_KEY = 'wb_whoami_best';

/** Accent used by the share card and by the game's own chrome (cyan-500). */
export const WHOAMI_ACCENT = '#06b6d4';

/* ────────────────────────────── the questions ──────────────────────────── */

/**
 * One question per attribute, in WiseBot's voice, for a 6–12 year old.
 * Rules: answerable without knowing a date, works for a woman, a man and a
 * group (the Wright brothers, the Beatles), and Greek never needs a gendered
 * pronoun (the child has not told us who it is).
 */
export const WHOAMI_QUESTIONS: Readonly<Record<WhoAmIAttr, { el: string; en: string }>> = {
  alive: { el: 'Ζει ακόμα σήμερα;', en: 'Is this person still alive today?' },
  ancient: {
    el: 'Έζησε στα αρχαία χρόνια, πριν από χιλιάδες χρόνια;',
    en: 'Did this person live in ancient times, thousands of years ago?',
  },
  before1900: {
    el: 'Γεννήθηκε πάρα πολύ παλιά, τότε που οι άνθρωποι ταξίδευαν ακόμα με άμαξες και άλογα;',
    en: 'Was this person born long, long ago, when people still travelled by horse and carriage?',
  },
  greek: { el: 'Είναι από την Ελλάδα;', en: 'Is this person Greek?' },
  american: { el: 'Είναι από την Αμερική;', en: 'Is this person from America?' },
  woman: { el: 'Είναι γυναίκα;', en: 'Is this person a woman?' },
  group: {
    el: 'Μήπως δεν είναι ένας άνθρωπος, αλλά μια παρέα ανθρώπων μαζί;',
    en: 'Is it not just one person, but a group of people together?',
  },
  scientist: { el: 'Είναι επιστήμονας;', en: 'Is this person a scientist?' },
  inventor: {
    el: 'Εφηύρε κάτι καινούργιο, που δεν υπήρχε πριν;',
    en: 'Did this person invent something new that did not exist before?',
  },
  tech: {
    el: 'Έχει να κάνει με υπολογιστές, το ίντερνετ ή την τεχνολογία;',
    en: 'Is this person connected to computers, the internet or technology?',
  },
  business: {
    el: 'Έστησε μια εταιρεία ή μια επιχείρηση;',
    en: 'Did this person start a company or a business?',
  },
  athlete: { el: 'Είναι αθλητής ή αθλήτρια;', en: 'Is this person an athlete?' },
  artist: {
    el: 'Είναι καλλιτέχνης; Ζωγραφίζει, γράφει, τραγουδά ή φτιάχνει ταινίες;',
    en: 'Is this person an artist who paints, writes, sings or makes films?',
  },
  usedToday: {
    el: 'Έφτιαξε κάτι που χρησιμοποιείς κι εσύ σήμερα;',
    en: 'Did this person make something you still use today?',
  },
  famousBrand: {
    el: 'Έχει να κάνει με μια μάρκα ή εταιρεία που την ξέρουν όλοι;',
    en: 'Is this person linked to a brand or company everyone knows?',
  },
  olympicOrNobel: {
    el: 'Κέρδισε μετάλλιο στους Ολυμπιακούς Αγώνες ή Βραβείο Νόμπελ;',
    en: 'Did this person win an Olympic medal or a Nobel Prize?',
  },
  space: {
    el: 'Έχει να κάνει με το διάστημα, τα αστέρια ή τους πλανήτες;',
    en: 'Is this person connected to space, the stars or the planets?',
  },
  doctor: {
    el: 'Βοήθησε τους αρρώστους να γίνουν καλά;',
    en: 'Did this person help sick people get better?',
  },
  music: { el: 'Έχει να κάνει με τη μουσική;', en: 'Is this person famous for music?' },
  painter: {
    el: 'Ζωγράφιζε ή σχεδίαζε εικόνες;',
    en: 'Did this person paint or draw pictures?',
  },
  writer: {
    el: 'Το πιο γνωστό που έκανε είναι βιβλία ή θεατρικά που έγραψε;',
    en: 'Is this person most famous for books or plays they wrote?',
  },
  film: {
    el: 'Έχει να κάνει με ταινίες ή κινούμενα σχέδια;',
    en: 'Is this person connected to films or cartoons?',
  },
  ballSport: {
    el: 'Παίζει ή έπαιζε ένα άθλημα με μπάλα;',
    en: 'Does or did this person play a sport with a ball?',
  },
  teamSport: {
    el: 'Παίζει ή έπαιζε σε ομάδα, μαζί με συμπαίκτες;',
    en: 'Does or did this person play in a team, with teammates?',
  },
  britain: {
    el: 'Είναι από τη Βρετανία, δηλαδή την Αγγλία;',
    en: 'Is this person from Britain, like England?',
  },
  italy: { el: 'Είναι από την Ιταλία;', en: 'Is this person from Italy?' },
  asian: {
    el: 'Είναι από την Ασία, όπως η Κίνα, η Ιαπωνία ή η Ινδία, ή έχει οικογένεια από εκεί;',
    en: 'Is this person from Asia, like China, Japan or India, or have family from there?',
  },
  techFounder: {
    el: 'Ίδρυσε μια μεγάλη εταιρεία τεχνολογίας ή ίντερνετ;',
    en: 'Did this person start a big technology or internet company?',
  },
  warrior: {
    el: 'Ήταν πολεμιστής ή στρατηγός;',
    en: 'Was this person a warrior or a general?',
  },
  conqueror: {
    el: 'Κατέκτησε πολλές χώρες και έφτιαξε μια τεράστια αυτοκρατορία;',
    en: 'Did this person conquer many lands and build a huge empire?',
  },
  veryRich: {
    el: 'Είναι γνωστό κυρίως επειδή έβγαλε πάρα πολλά λεφτά;',
    en: 'Is this person famous mainly for making loads and loads of money?',
  },
  food: {
    el: 'Έχει να κάνει με φαγητό ή ποτό;',
    en: 'Is this person connected to food or drinks?',
  },
  animals: { el: 'Μελέτησε τα ζώα;', en: 'Did this person study animals?' },
  poorInLife: {
    el: 'Πέρασε κάποτε μεγάλη φτώχεια;',
    en: 'Was this person ever very poor?',
  },
  bornAfter1980: {
    el: 'Είναι νέος άνθρωπος, περίπου στην ηλικία των γονιών σου ή πιο νέος;',
    en: 'Is this person quite young, about your parents’ age or younger?',
  },
  teacher: {
    el: 'Δίδαξε ή εξήγησε πράγματα σε άλλους, σαν δάσκαλος;',
    en: 'Did this person teach or explain things to others, like a teacher?',
  },
};

/* ────────────────────────────── every other string ─────────────────────── */

export interface WhoAmICopy {
  title: string;
  tagline: string;
  /* menu */
  thinkModeTitle: string;
  thinkModeBody: string;
  guessModeTitle: string;
  guessModeBody: string;
  best: (points: number, max: number) => string;
  /* mode A — the child thinks */
  thinkTitle: string;
  thinkBody: string;
  ideasTitle: string;
  moreIdeas: string;
  knowPeople: (n: number) => string;
  ready: string;
  questionOf: (n: number, max: number) => string;
  inMyHead: (n: number) => string;
  yes: string;
  no: string;
  dontKnow: string;
  /** Shown above a question WiseBot asks a second time. */
  recheck: string;
  thinking: string;
  guessIntro: string;
  guessAsk: string;
  guessYes: string;
  guessNo: string;
  wrongFirst: string;
  foundTitle: string;
  foundIn: (questions: number) => string;
  didYouKnow: string;
  readStory: string;
  stumpedTitle: string;
  stumpedBody: string;
  /* mode B — the child guesses */
  personOf: (n: number, total: number) => string;
  clueOf: (n: number, total: number) => string;
  worth: (points: number) => string;
  whoIsIt: string;
  moreClue: string;
  notThisOne: string;
  correct: string;
  missed: string;
  itWas: string;
  gained: (points: number) => string;
  next: string;
  seeScore: string;
  finalTitle: string;
  foundOf: (found: number, total: number) => string;
  newBest: string;
  /* shared end */
  points: (n: number) => string;
  playAgain: string;
  switchMode: string;
  exit: string;
  xpNote: string;
  noXpNote: string;
  share: string;
  sharing: string;
  shareDone: { shared: string; copied: string; downloaded: string };
  shareFailed: string;
  shareTitle: string;
  shareTextFound: (questions: number) => string;
  shareTextStumped: string;
  shareTextReverse: (points: number, max: number) => string;
  cardTitle: string;
  cardHeadlineFound: string;
  cardStatFound: (questions: number) => string;
  cardHeadlineStumped: string;
  cardStatStumped: string;
  cardHeadlineReverse: (found: number, total: number) => string;
  cardSubstat: string;
}

export const WHOAMI_COPY: Record<'el' | 'en', WhoAmICopy> = {
  el: {
    // Greek is written already-uppercase where it should look uppercase:
    // toUpperCase() would keep the accents and look wrong.
    title: 'ΠΟΙΟΣ ΕΙΜΑΙ;',
    tagline: 'Σπουδαίοι άνθρωποι, ερωτήσεις ΝΑΙ ή ΟΧΙ, και ένα ρομπότ που μαντεύει.',
    thinkModeTitle: 'ΣΚΕΨΟΥ ΚΑΠΟΙΟΝ',
    thinkModeBody: 'Εσύ σκέφτεσαι έναν σπουδαίο άνθρωπο, εγώ τον μαντεύω!',
    guessModeTitle: 'ΜΑΝΤΕΨΕ ΕΣΥ',
    guessModeBody: '5 στοιχεία για κάθε ήρωα. Όσο πιο γρήγορα τον βρεις, τόσο πιο πολλοί πόντοι!',
    best: (points, max) => `Ρεκόρ: ${points}/${max}`,
    thinkTitle: 'ΣΚΕΨΟΥ ΕΝΑΝ ΣΠΟΥΔΑΙΟ ΑΝΘΡΩΠΟ',
    thinkBody: 'Διάλεξε κάποιον από τις ιστορίες της Ακαδημίας και κράτα τον μυστικό. Εγώ ρωτάω, εσύ απαντάς ΝΑΙ, ΟΧΙ ή ΔΕΝ ΞΕΡΩ.',
    ideasTitle: 'ΜΕΡΙΚΕΣ ΙΔΕΕΣ',
    moreIdeas: 'ΑΛΛΕΣ ΙΔΕΕΣ',
    knowPeople: (n) => `Ξέρω ${n} σπουδαίους ανθρώπους. Κι αν κάνεις ένα λάθος, θα τα καταφέρω!`,
    ready: 'ΤΟ ΣΚΕΦΤΗΚΑ!',
    questionOf: (n, max) => `ΕΡΩΤΗΣΗ ${n}/${max}`,
    inMyHead: (n) => (n === 1 ? 'Έχω 1 στο μυαλό μου' : `Έχω ${n} στο μυαλό μου`),
    yes: 'ΝΑΙ',
    no: 'ΟΧΙ',
    dontKnow: 'ΔΕΝ ΞΕΡΩ',
    recheck: 'Για να σιγουρευτώ…',
    thinking: 'Χμμ… σκέφτομαι…',
    guessIntro: 'Μήπως σκέφτεσαι…',
    guessAsk: 'Το βρήκα;',
    guessYes: 'ΝΑΙ, ΣΩΣΤΑ!',
    guessNo: 'ΟΧΙ',
    wrongFirst: 'Χμ! Άσε με να ρωτήσω λίγο ακόμα.',
    foundTitle: 'ΤΟ ΒΡΗΚΑ!',
    foundIn: (q) => (q === 1 ? 'Χρειάστηκα μόνο 1 ερώτηση!' : `Χρειάστηκα ${q} ερωτήσεις!`),
    didYouKnow: 'ΤΟ ΗΞΕΡΕΣ;',
    readStory: 'ΔΙΑΒΑΣΕ ΤΙΣ ΙΣΤΟΡΙΕΣ ΣΤΗΝ ΑΚΑΔΗΜΙΑ',
    stumpedTitle: 'ΜΕ ΝΙΚΗΣΕΣ!',
    stumpedBody: 'Δεν μπόρεσα να το βρω. Μπράβο! Την επόμενη φορά θα τα καταφέρω.',
    personOf: (n, total) => `ΗΡΩΑΣ ${n}/${total}`,
    clueOf: (n, total) => `ΣΤΟΙΧΕΙΟ ${n}/${total}`,
    worth: (p) => (p === 1 ? 'αξίζει 1 πόντο' : `αξίζει ${p} πόντους`),
    whoIsIt: 'ΠΟΙΟΣ ΕΙΝΑΙ;',
    moreClue: 'ΘΕΛΩ ΚΙ ΑΛΛΟ ΣΤΟΙΧΕΙΟ',
    notThisOne: 'Όχι! Να κι άλλο στοιχείο.',
    correct: 'ΣΩΣΤΟ!',
    missed: 'ΔΕΝ ΠΕΙΡΑΖΕΙ!',
    itWas: 'Ήταν:',
    gained: (p) => (p === 1 ? '+1 ΠΟΝΤΟΣ' : `+${p} ΠΟΝΤΟΙ`),
    next: 'ΕΠΟΜΕΝΟΣ',
    seeScore: 'ΤΟ ΣΚΟΡ ΜΟΥ',
    finalTitle: 'ΤΕΛΙΚΟ ΣΚΟΡ',
    foundOf: (found, total) => `Βρήκες ${found} από ${total}!`,
    newBest: 'ΝΕΟ ΡΕΚΟΡ!',
    points: (n) => (n === 1 ? '1 ΠΟΝΤΟΣ' : `${n} ΠΟΝΤΟΙ`),
    playAgain: 'ΞΑΝΑ',
    switchMode: 'ΑΛΛΟΣ ΤΡΟΠΟΣ',
    exit: 'ΤΕΛΟΣ',
    xpNote: 'Κέρδισες XP για αυτόν τον γύρο.',
    noXpNote: 'Χωρίς XP — πήρες ήδη το σημερινό.',
    share: 'ΜΟΙΡΑΣΟΥ ΤΟ ΣΚΟΡ',
    sharing: 'ΕΤΟΙΜΑΖΩ…',
    shareDone: {
      shared: 'Έφυγε! 🎉',
      copied: 'Το αντέγραψα! Επικόλλησέ το όπου θες. 📋',
      downloaded: 'Το αποθήκευσα σαν εικόνα. 💾',
    },
    shareFailed: 'Δεν μπόρεσα να φτιάξω την κάρτα. Δοκίμασε ξανά.',
    shareTitle: 'Ποιος είμαι;',
    shareTextFound: (q) => `Ποιος είμαι; στο WiseBot Academy: η WiseBot βρήκε τον ήρωά μου με ${q} ερωτήσεις! Μπορείς να τη νικήσεις;`,
    shareTextStumped: 'Ποιος είμαι; στο WiseBot Academy: νίκησα την WiseBot! Μπορείς κι εσύ;',
    shareTextReverse: (p, max) => `Ποιος είμαι; στο WiseBot Academy: έκανα ${p}/${max} πόντους! Εσύ;`,
    cardTitle: 'ΠΟΙΟΣ ΕΙΜΑΙ;',
    cardHeadlineFound: 'Η WiseBot βρήκε τον ήρωά μου!',
    cardStatFound: (q) => `${q} ΕΡΩΤΗΣΕΙΣ`,
    cardHeadlineStumped: 'Νίκησα την WiseBot!',
    cardStatStumped: '🏆',
    cardHeadlineReverse: (found, total) => `Βρήκα ${found} από ${total} σπουδαίους ανθρώπους!`,
    cardSubstat: 'Μπορείς να τα καταφέρεις καλύτερα;',
  },
  en: {
    title: 'WHO AM I?',
    tagline: 'Great people, YES or NO questions, and a robot that guesses.',
    thinkModeTitle: 'THINK OF SOMEONE',
    thinkModeBody: 'You think of a great person, I guess who it is!',
    guessModeTitle: 'YOU GUESS',
    guessModeBody: '5 clues for each hero. The faster you get it, the more points you score!',
    best: (points, max) => `Best: ${points}/${max}`,
    thinkTitle: 'THINK OF A GREAT PERSON',
    thinkBody: 'Pick someone from the Academy stories and keep it secret. I ask, you answer YES, NO or DON’T KNOW.',
    ideasTitle: 'SOME IDEAS',
    moreIdeas: 'MORE IDEAS',
    knowPeople: (n) => `I know ${n} great people. Even if you make one mistake, I will get there!`,
    ready: 'GOT ONE!',
    questionOf: (n, max) => `QUESTION ${n}/${max}`,
    inMyHead: (n) => (n === 1 ? '1 left in my head' : `${n} left in my head`),
    yes: 'YES',
    no: 'NO',
    dontKnow: 'DON’T KNOW',
    recheck: 'Just to be sure…',
    thinking: 'Hmm… let me think…',
    guessIntro: 'Are you thinking of…',
    guessAsk: 'Did I get it?',
    guessYes: 'YES, RIGHT!',
    guessNo: 'NO',
    wrongFirst: 'Hmm! Let me ask a little more.',
    foundTitle: 'GOT IT!',
    foundIn: (q) => (q === 1 ? 'I only needed 1 question!' : `I needed ${q} questions!`),
    didYouKnow: 'DID YOU KNOW?',
    readStory: 'READ THE STORIES IN THE ACADEMY',
    stumpedTitle: 'YOU BEAT ME!',
    stumpedBody: 'I could not find it. Well done! Next time I will get it.',
    personOf: (n, total) => `HERO ${n}/${total}`,
    clueOf: (n, total) => `CLUE ${n}/${total}`,
    worth: (p) => (p === 1 ? 'worth 1 point' : `worth ${p} points`),
    whoIsIt: 'WHO IS IT?',
    moreClue: 'GIVE ME ANOTHER CLUE',
    notThisOne: 'Nope! Here is another clue.',
    correct: 'CORRECT!',
    missed: 'NEVER MIND!',
    itWas: 'It was:',
    gained: (p) => (p === 1 ? '+1 POINT' : `+${p} POINTS`),
    next: 'NEXT',
    seeScore: 'MY SCORE',
    finalTitle: 'FINAL SCORE',
    foundOf: (found, total) => `You found ${found} of ${total}!`,
    newBest: 'NEW BEST!',
    points: (n) => (n === 1 ? '1 POINT' : `${n} POINTS`),
    playAgain: 'AGAIN',
    switchMode: 'OTHER MODE',
    exit: 'DONE',
    xpNote: 'You earned XP for this round.',
    noXpNote: 'No XP — you already got today’s.',
    share: 'SHARE THE SCORE',
    sharing: 'PREPARING…',
    shareDone: {
      shared: 'Sent! 🎉',
      copied: 'Copied! Paste it anywhere. 📋',
      downloaded: 'Saved as an image. 💾',
    },
    shareFailed: 'Could not make the card. Try again.',
    shareTitle: 'Who Am I?',
    shareTextFound: (q) => `Who Am I? at WiseBot Academy: WiseBot found my hero in ${q} questions! Can you beat her?`,
    shareTextStumped: 'Who Am I? at WiseBot Academy: I beat WiseBot! Can you?',
    shareTextReverse: (p, max) => `Who Am I? at WiseBot Academy: I scored ${p}/${max}! Your turn?`,
    cardTitle: 'WHO AM I?',
    cardHeadlineFound: 'WiseBot found my hero!',
    cardStatFound: (q) => `${q} QUESTIONS`,
    cardHeadlineStumped: 'I beat WiseBot!',
    cardStatStumped: '🏆',
    cardHeadlineReverse: (found, total) => `I found ${found} of ${total} great people!`,
    cardSubstat: 'Can you do better?',
  },
};

/* ────────────────────────────── the people ─────────────────────────────── */

interface RawPerson {
  id: number;
  nameEl: string;
  nameEn: string;
  emoji: string;
  /** The attributes that are TRUE for this person; every other one is false. */
  yes: readonly WhoAmIAttr[];
  clues: { el: readonly string[]; en: readonly string[] };
}

const RAW_PEOPLE: readonly RawPerson[] = [
  {
    id: 1, nameEl: 'Γουόλτ Ντίσνεϊ', nameEn: 'Walt Disney', emoji: '🐭',
    yes: ['american', 'business', 'artist', 'usedToday', 'famousBrand', 'painter', 'film', 'poorInLife'],
    clues: {
      el: [
        'Ένας διευθυντής εφημερίδας τον απέλυσε λέγοντας ότι δεν είχε φαντασία και καλές ιδέες.',
        'Μικρός ζωγράφιζε τα ζώα της φάρμας με κάρβουνο και πουλούσε τις ζωγραφιές του στους γείτονες.',
        'Έχασε τα δικαιώματα ενός λαγού και μέσα στο τρένο σκιτσάρισε ένα ποντικάκι με μεγάλα στρογγυλά αυτιά.',
        'Έφτιαξε την πρώτη μεγάλη ταινία κινουμένων σχεδίων, με μια πριγκίπισσα και εφτά νάνους.',
        'Έχτισε ένα ολόκληρο μαγικό πάρκο με κάστρο, και το ποντικάκι του είναι το πιο διάσημο του κόσμου.',
      ],
      en: [
        'A newspaper boss fired him, saying he had no imagination and no good ideas.',
        'As a boy he drew the farm animals with charcoal and sold his pictures to the neighbors.',
        'He lost the rights to a cartoon rabbit, so on the train he sketched a little mouse with big round ears.',
        'He made the first full-length cartoon movie, about a princess and seven dwarfs.',
        'He built a whole magic park with a castle, and his little mouse is the most famous mouse in the world.',
      ],
    },
  },
  {
    id: 2, nameEl: 'Όλε Κιρκ Κρίστιανσεν', nameEn: 'Ole Kirk Christiansen (LEGO)', emoji: '🧱',
    yes: ['before1900', 'inventor', 'business', 'usedToday', 'famousBrand', 'poorInLife'],
    clues: {
      el: [
        'Ήταν ξυλουργός σε ένα μικρό χωριό της Δανίας και το εργαστήριό του κάηκε ολοσχερώς δύο φορές.',
        'Όταν σταμάτησαν οι παραγγελίες για πόρτες και σκάλες, σκάλισε από τα ξύλα που περίσσευαν παπάκια με ρόδες και φορτηγάκια.',
        'Το όνομα της εταιρείας του βγήκε από δύο δανέζικες λέξεις που σημαίνουν «παίζω καλά».',
        'Αγόρασε μια από τις πρώτες μηχανές πλαστικού στη Δανία, ενώ όλοι του έλεγαν ότι τα πλαστικά παιχνίδια δεν θα αγαπηθούν ποτέ.',
        'Έφτιαξε το μικρό πλαστικό τουβλάκι που κουμπώνει πάνω στο άλλο — σήμερα υπάρχουν περισσότερα τουβλάκια από ανθρώπους.',
      ],
      en: [
        'He was a carpenter in a tiny village in Denmark, and his workshop burned to the ground twice.',
        'When orders for doors and ladders stopped, he carved little ducks on wheels and toy trucks from his leftover wood.',
        'His company\'s name comes from two Danish words that mean "play well".',
        'He bought one of the first plastic molding machines in Denmark, while everyone told him plastic toys would never be loved.',
        'He made the little plastic brick that clicks onto another — today there are more of those bricks than there are people.',
      ],
    },
  },
  {
    id: 3, nameEl: 'Οι Αδελφοί Ράιτ', nameEn: 'Wright Brothers', emoji: '✈️',
    yes: ['before1900', 'american', 'group', 'inventor', 'business', 'usedToday'],
    clues: {
      el: [
        'Οι εφημερίδες κορόιδευαν όποιον τολμούσε να ονειρευτεί τον ουρανό. Εκείνοι δούλευαν ήσυχα, πληρώνοντας μόνοι τους κάθε πείραμα.',
        'Ένα παιχνίδι ελικοπτεράκι από χαρτί, μπαμπού και λάστιχο, δώρο του πατέρα τους, ξεκίνησε το όνειρό τους.',
        'Επειδή οι υπολογισμοί των επιστημόνων ήταν λάθος, έφτιαξαν δική τους μικρή αεροσήραγγα και μέτρησαν τα πάντα από την αρχή.',
        'Δοκίμαζαν ανεμόπτερα ξανά και ξανά στους αμμόλοφους της Βόρειας Καρολίνας, έπεφταν και χτυπούσαν.',
        'Ένα παγωμένο πρωινό του Δεκεμβρίου του 1903 η μηχανή τους σηκώθηκε στον αέρα για δώδεκα δευτερόλεπτα: το πρώτο αεροπλάνο.',
      ],
      en: [
        'Newspapers mocked anyone who dared to dream of the sky. They just worked quietly, paying for every experiment out of their own pocket.',
        'A toy helicopter of paper, bamboo and a rubber band, a gift from their father, started their dream.',
        'Because the scientists\' calculations were wrong, they built their own little wind tunnel and measured everything from scratch.',
        'They tested gliders again and again on the sand dunes of North Carolina, crashing and getting bruised.',
        'On a freezing December morning in 1903 their machine rose into the air for twelve seconds: the first airplane.',
      ],
    },
  },
  {
    id: 4, nameEl: 'Τζ. Κ. Ρόουλινγκ', nameEn: 'J.K. Rowling', emoji: '🪄',
    yes: ['alive', 'woman', 'artist', 'usedToday', 'writer', 'britain', 'poorInLife'],
    clues: {
      el: [
        'Η ιδέα της ήρθε σε ένα τρένο που είχε καθυστερήσει, και δεν είχε ούτε ένα στυλό για να τη γράψει.',
        'Έγραφε με χαρτί και μολύβι σε μια καφετέρια του Εδιμβούργου, όσο το μωρό της κοιμόταν στο καροτσάκι.',
        'Δώδεκα εκδότες είπαν όχι στο βιβλίο της για ένα αγόρι που πηγαίνει σε σχολείο μαγείας.',
        'Η οχτάχρονη κόρη ενός εκδότη διάβασε το πρώτο κεφάλαιο και ζητούσε επίμονα τη συνέχεια.',
        'Έγραψε τα βιβλία για τον μικρό μάγο με τα στρογγυλά γυαλιά και το σημάδι-αστραπή στο μέτωπο.',
      ],
      en: [
        'Her idea arrived on a delayed train, and she did not even have a pen to write it down.',
        'She wrote with paper and pencil in an Edinburgh cafe while her baby slept in the stroller.',
        'Twelve publishers said no to her book about a boy who goes to a school of magic.',
        'A publisher\'s eight-year-old daughter read the first chapter and kept begging to know what happened next.',
        'She wrote the books about the young wizard with round glasses and a lightning scar on his forehead.',
      ],
    },
  },
  {
    id: 5, nameEl: 'Όπρα Γουίνφρι', nameEn: 'Oprah Winfrey', emoji: '🎤',
    yes: ['alive', 'american', 'woman', 'business', 'poorInLife'],
    clues: {
      el: [
        'Ήταν τόσο φτωχή που φορούσε φορέματα ραμμένα από τσουβάλια πατάτας και τα άλλα παιδιά την κορόιδευαν.',
        'Τη μεγάλωσε η γιαγιά της σε μια φάρμα του Μισισιπή, και απήγγελλε ποιήματα στην εκκλησία.',
        'Τα αφεντικά της τηλεόρασης την έβγαλαν από τις ειδήσεις επειδή δάκρυζε με τις ιστορίες των ανθρώπων.',
        'Πήρε μια μικρή πρωινή εκπομπή κουβέντας στο Σικάγο και μέσα σε λίγους μήνες την έκανε πρώτη.',
        'Έγινε η πρώτη μαύρη γυναίκα δισεκατομμυριούχος στην Αμερική, με μια εκπομπή που πήρε το όνομά της και ταξίδεψε σε όλο τον κόσμο.',
      ],
      en: [
        'She was so poor she wore dresses sewn from potato sacks, and other children teased her for it.',
        'Her grandmother raised her on a farm in Mississippi, and she recited poems at church.',
        'Television bosses took her off the news desk because she teared up at people\'s stories.',
        'She took over a struggling morning talk show in Chicago and within months made it number one.',
        'She became the first Black woman billionaire in America, with a talk show that carried her own name around the world.',
      ],
    },
  },
  {
    id: 6, nameEl: 'Μίστερ Μπιστ', nameEn: 'MrBeast (Jimmy Donaldson)', emoji: '🎥',
    yes: ['alive', 'american', 'tech', 'business', 'usedToday', 'famousBrand', 'bornAfter1980'],
    clues: {
      el: [
        'Ντροπαλό αγόρι από μια μικρή πόλη της Βόρειας Καρολίνας, ανέβαζε βίντεο από τα δεκατρία του με σχεδόν μηδέν προβολές.',
        'Με μια μικρή παρέα φίλων μελετούσε ώρες κάθε μέρα γιατί κάποια βίντεο τα βλέπει ο κόσμος μέχρι το τέλος.',
        'Μέτρησε φωναχτά μέχρι το εκατό χιλιάδες, και του πήρε περίπου σαράντα ώρες.',
        'Αντί για ακριβά ρούχα και γρήγορα αυτοκίνητα, χάριζε τα χρήματά του σε αγνώστους και άφηνε φιλοδωρήματα χιλιάδων δολαρίων.',
        'Με τις εκστρατείες του έχουν φυτευτεί εκατομμύρια δέντρα· είναι από τους μεγαλύτερους δημιουργούς βίντεο στο YouTube.',
      ],
      en: [
        'A shy boy from a small town in North Carolina, he posted videos from the age of thirteen with almost zero views.',
        'With a small group of friends he spent hours every day studying why some videos keep people watching to the end.',
        'He counted out loud all the way to one hundred thousand, and it took him about forty hours.',
        'Instead of expensive clothes and fast cars, he gave his money to strangers and left tips worth thousands of dollars.',
        'His campaigns have planted millions of trees, and he is one of the biggest video creators on YouTube.',
      ],
    },
  },
  {
    id: 7, nameEl: 'Τζεφ Μπέζος', nameEn: 'Jeff Bezos', emoji: '📦',
    yes: ['alive', 'american', 'tech', 'business', 'usedToday', 'famousBrand', 'space', 'techFounder', 'veryRich'],
    clues: {
      el: [
        'Παράτησε μια λαμπρή, καλοπληρωμένη δουλειά στη Wall Street, αφού φαντάστηκε τον εαυτό του στα ογδόντα να κοιτάζει πίσω.',
        'Έγραφε το επιχειρηματικό του σχέδιο ενώ διέσχιζε την Αμερική με το αυτοκίνητο, με προορισμό το Σιάτλ.',
        'Έφτιαξε μόνος του το πρώτο του γραφείο από μια παλιά ξύλινη πόρτα καρφωμένη πάνω σε καβαλέτα, για να μην ξοδέψει χρήματα.',
        'Ονόμασε την εταιρεία που ξεκίνησε σε ένα γκαράζ από το μεγαλύτερο ποτάμι του κόσμου.',
        'Το διαδικτυακό του μαγαζί ξεκίνησε πουλώντας βιβλία και σήμερα φέρνει δέματα με ένα χαμογελαστό βελάκι σχεδόν παντού.',
      ],
      en: [
        'He quit a brilliant, well-paid Wall Street job after imagining himself at eighty, looking back on his life.',
        'He worked on his business plan while driving across America toward Seattle.',
        'He built his first desk himself from an old wooden door nailed onto sawhorses, to save money.',
        'He named the company he started in a garage after the largest river in the world.',
        'His internet store began by selling books and now brings parcels with a smiling arrow almost everywhere.',
      ],
    },
  },
  {
    id: 8, nameEl: 'Συνταγματάρχης Σάντερς', nameEn: 'Colonel Sanders', emoji: '🍗',
    yes: ['before1900', 'american', 'business', 'usedToday', 'famousBrand', 'food', 'poorInLife'],
    clues: {
      el: [
        'Στα έξι του πέθανε ο πατέρας του και ανέλαβε να μαγειρεύει για τα μικρότερα αδέρφια του δίπλα στην ξυλόσομπα.',
        'Δούλεψε στους σιδηροδρόμους, πούλησε ασφάλειες και λάστιχα αυτοκινήτων, και σχεδόν παντού κάτι πήγαινε στραβά.',
        'Ένας καινούργιος αυτοκινητόδρομος πέρασε μακριά από το μικρό του εστιατόριο στο Κεντάκι και οι πελάτες εξαφανίστηκαν.',
        'Στα εξήντα πέντε του, με μια πενιχρή σύνταξη, όργωνε την Αμερική με τη συνταγή του και κοιμόταν στο αυτοκίνητο· άκουσε πάνω από χίλια όχι.',
        'Είναι ο χαμογελαστός κύριος με το άσπρο κοστούμι και τα άσπρα γένια, με το τραγανό κοτόπουλο και τα έντεκα μυστικά μπαχαρικά.',
      ],
      en: [
        'He was six when his father died, and he took over the cooking for his younger siblings beside the wood stove.',
        'He worked on the railroads, sold insurance and car tires, and in almost every job something went wrong.',
        'A new highway was built far from his little Kentucky restaurant, and all his customers vanished.',
        'At sixty-five, with only a tiny pension, he crisscrossed America with his recipe and slept in his car; he heard over a thousand no\'s.',
        'He is the smiling man in the white suit with the white beard, whose crispy fried chicken uses eleven secret herbs and spices.',
      ],
    },
  },
  {
    id: 9, nameEl: 'Χάουαρντ Σουλτς', nameEn: 'Howard Schultz', emoji: '☕',
    yes: ['alive', 'american', 'business', 'usedToday', 'famousBrand', 'food'],
    clues: {
      el: [
        'Μεγάλωσε σε μια εργατική πολυκατοικία στο Μπρούκλιν και ήταν ο πρώτος της οικογένειάς του που πήγε πανεπιστήμιο.',
        'Διακόσιοι δεκαεπτά άνθρωποι είπαν όχι στην ιδέα του, όμως εκείνος συνέχισε να χτυπάει πόρτες.',
        'Ένα ταξίδι στο Μιλάνο τού έδειξε ότι ένα ζεστό ρόφημα μπορεί να φέρνει τους ανθρώπους κοντά.',
        'Αγόρασε τη μικρή εταιρεία του Σιάτλ όπου δούλευε και την έκανε δεκάδες χιλιάδες καταστήματα.',
        'Η πράσινη γοργόνα του κρέμεται πάνω από καφετέριες σε όλο τον κόσμο.',
      ],
      en: [
        'He grew up in a housing project in Brooklyn and was the first in his family to go to university.',
        'Two hundred and seventeen people said no to his idea, but he kept knocking on doors.',
        'A trip to Milan showed him that a hot drink can bring people together.',
        'He bought the small Seattle company he worked for and turned it into tens of thousands of stores.',
        'His green mermaid hangs above coffee shops all over the world.',
      ],
    },
  },
  {
    id: 10, nameEl: 'Χένρι Φορντ', nameEn: 'Henry Ford', emoji: '🚗',
    yes: ['before1900', 'american', 'inventor', 'business', 'usedToday', 'famousBrand'],
    clues: {
      el: [
        'Μικρός, σε μια φάρμα του Μίσιγκαν, χάλαγε ρολόγια και τα ξανάφτιαχνε για να δει πώς δουλεύουν.',
        'Ένα ξημέρωμα του 1896 μια άμαξα με τέσσερις ρόδες ποδηλάτου κύλησε στους δρόμους του Ντιτρόιτ· την είχε φτιάξει σε ένα υπόστεγο.',
        'Ήθελε μια μηχανή που δεν θα ήταν παιχνίδι για πλούσιους, αλλά θα μπορούσε να την έχει κάθε οικογένεια.',
        'Έβαλε τους εργάτες στη σειρά και το αμάξι περνούσε μπροστά τους· από δώδεκα ώρες, δύο.',
        'Το όνομα της εταιρείας του είναι ακόμα πάνω σε εκατομμύρια αυτοκίνητα, και το πιο διάσημο ήταν το Model T.',
      ],
      en: [
        'As a boy on a Michigan farm, he took watches apart and put them back together to see how they worked.',
        'One early morning in 1896 a carriage on four bicycle wheels rolled through the streets of Detroit; he had built it in a shed.',
        'He wanted a machine that was not a toy for the rich, but something every family could own.',
        'He lined up his workers and let the car travel past them; twelve hours of building became two.',
        'His company\'s name is still on millions of cars, and the most famous one was the Model T.',
      ],
    },
  },
  {
    id: 11, nameEl: 'Γιάννης Αντετοκούνμπο', nameEn: 'Giannis Antetokounmpo', emoji: '🏀',
    yes: ['alive', 'greek', 'athlete', 'ballSport', 'teamSport', 'bornAfter1980'],
    clues: {
      el: [
        'Μικρός πουλούσε γυαλιά ηλίου, ρολόγια και CD στους δρόμους της Αθήνας για να έχει η οικογένειά του φαγητό.',
        'Μοιραζόταν ένα ζευγάρι παπούτσια με τον αδερφό του: όταν έπαιζε ο ένας, ο άλλος περίμενε με τις κάλτσες.',
        'Πήρε ελληνικό διαβατήριο λίγες μόλις μέρες πριν τον διαλέξει μια αμερικανική ομάδα.',
        'Το 2021 σκόραρε 50 πόντους σε έναν τελικό και χάρισε στο Μιλγουόκι πρωτάθλημα μετά από 50 χρόνια.',
        'Το παιδί από τα Σεπόλια έγινε το αστέρι των Milwaukee Bucks και τον φωνάζουν Greek Freak.',
      ],
      en: [
        'As a boy he sold sunglasses, watches and CDs on the streets of Athens so his family could eat.',
        'He shared one pair of sneakers with his brother: when one played, the other waited in his socks.',
        'He received his Greek passport only days before an American team picked him.',
        'In 2021 he scored 50 points in a Finals game and gave Milwaukee a championship after 50 years.',
        'The boy from Sepolia became the star of the Milwaukee Bucks, and people call him the Greek Freak.',
      ],
    },
  },
  {
    id: 12, nameEl: 'Μάικλ Τζόρνταν', nameEn: 'Michael Jordan', emoji: '🏀',
    yes: ['alive', 'american', 'athlete', 'famousBrand', 'olympicOrNobel', 'film', 'ballSport', 'teamSport'],
    clues: {
      el: [
        'Στα δεκαπέντε του έψαξε το όνομά του στη λίστα της σχολικής ομάδας και δεν ήταν εκεί· γύρισε σπίτι και έκλαψε.',
        'Κάθε πρωί πριν από το σχολείο προπονούνταν, φαντάζοντας εκείνη τη λίστα χωρίς το όνομά του.',
        'Έλεγε ότι αστόχησε πάνω από εννέα χιλιάδες σουτ, και ότι ακριβώς γι\' αυτό πέτυχε.',
        'Μέσα στη δεκαετία του 1990 κέρδισε έξι πρωταθλήματα NBA με μια ομάδα από το Σικάγο.',
        'Φορούσε το νούμερο 23 στους Chicago Bulls και ένα διάσημο αθλητικό παπούτσι πήρε το όνομά του.',
      ],
      en: [
        'At fifteen he looked for his name on the school team list and it was not there; he went home and cried.',
        'Every morning before school he trained, picturing that list without his name on it.',
        'He said he missed more than nine thousand shots, and that this was exactly why he succeeded.',
        'Through the 1990s he won six NBA championships with a team from Chicago.',
        'He wore number 23 for the Chicago Bulls, and a famous basketball shoe is named after him.',
      ],
    },
  },
  {
    id: 13, nameEl: 'Λιονέλ Μέσι', nameEn: 'Lionel Messi', emoji: '⚽',
    yes: ['alive', 'athlete', 'olympicOrNobel', 'ballSport', 'teamSport', 'bornAfter1980'],
    clues: {
      el: [
        'Μικρός έκανε μόνος του κάθε βράδυ ενέσεις στα πόδια του, γιατί το σώμα του δεν μεγάλωνε αρκετά.',
        'Μια ομάδα από την άλλη άκρη της θάλασσας τον ήθελε τόσο πολύ, που υπέγραψε την πρώτη συμφωνία πάνω σε μια χαρτοπετσέτα.',
        'Η οικογένειά του άφησε το Ροσάριο και μετακόμισε στη Βαρκελώνη για να συνεχίσει να παίζει.',
        'Το μικρό του μπόι έγινε όπλο: άλλαζε κατεύθυνση πιο γρήγορα από κάθε αμυντικό.',
        'Κέρδισε οκτώ Χρυσές Μπάλες και το 2022 σήκωσε το Παγκόσμιο Κύπελλο με την Αργεντινή.',
      ],
      en: [
        'As a child he gave himself injections in his legs every night, because his body was not growing enough.',
        'A club from across the ocean wanted him so badly that they signed the first deal on a paper napkin.',
        'His family left Rosario and moved to Barcelona so he could keep playing.',
        'His small size became his weapon: he could change direction faster than any defender.',
        'He won eight Ballon d\'Or awards, and in 2022 he lifted the World Cup with Argentina.',
      ],
    },
  },
  {
    id: 14, nameEl: 'Γιουσέιν Μπολτ', nameEn: 'Usain Bolt', emoji: '⚡',
    yes: ['alive', 'athlete', 'olympicOrNobel', 'bornAfter1980'],
    clues: {
      el: [
        'Μεγάλωσε σε ένα μικρό χωριό στους πράσινους λόφους της Τζαμάικα, κουβαλώντας νερό για τους γονείς του.',
        'Γεννήθηκε με στραβή σπονδυλική στήλη, που έκανε το ένα του πόδι λίγο πιο κοντό από το άλλο.',
        'Οι ειδικοί έλεγαν ότι ήταν πολύ ψηλός για σπρίντερ και ότι θα έχανε πάντα στην εκκίνηση.',
        'Στο Βερολίνο έτρεξε τα 100 μέτρα σε 9,58 δευτερόλεπτα, και κανείς δεν τον πλησίασε από τότε.',
        'Ο πιο γρήγορος άνθρωπος της ιστορίας πήρε 8 χρυσά Ολυμπιακά μετάλλια και πανηγύριζε με την πόζα του κεραυνού.',
      ],
      en: [
        'He grew up in a small village in the green hills of Jamaica, carrying water home for his parents.',
        'He was born with a curved spine that made one of his legs slightly shorter than the other.',
        'Experts said he was far too tall to be a sprinter and would always lose the start.',
        'In Berlin he ran the 100 meters in 9.58 seconds, and nobody has come close since.',
        'The fastest human in history won 8 Olympic gold medals and celebrated with his lightning pose.',
      ],
    },
  },
  {
    id: 15, nameEl: 'Σερένα Ουίλιαμς', nameEn: 'Serena Williams', emoji: '🎾',
    yes: ['alive', 'american', 'woman', 'athlete', 'olympicOrNobel', 'ballSport', 'bornAfter1980'],
    clues: {
      el: [
        'Μάθαινε μαζί με την αδερφή της σε δημόσια γήπεδα με ραγισμένο τσιμέντο, καθαρίζοντας σπασμένα γυαλιά πριν παίξουν.',
        'Ο πατέρας της τις προπονούσε μόνος του, γιατί δεν υπήρχαν λεφτά για ακριβές ακαδημίες· τα μπαλάκια τα κουβαλούσαν σε ένα καροτσάκι του σούπερ μάρκετ.',
        'Το 2011 κινδύνεψε η ζωή της από θρόμβους στους πνεύμονες, κι όμως γύρισε και ξαναέγινε νούμερο ένα στον κόσμο.',
        'Το 2017 κέρδισε ένα Grand Slam χωρίς να χάσει ούτε ένα σετ, ενώ ήταν ήδη έγκυος.',
        'Το κορίτσι από το Compton κέρδισε 23 τίτλους Grand Slam στο τένις, τους περισσότερους στη σύγχρονη εποχή.',
      ],
      en: [
        'She learned with her sister on public courts of cracked concrete, sweeping broken glass away before they could play.',
        'Her father coached them himself, because there was no money for fancy academies; they carried the balls in a shopping cart.',
        'In 2011 her life was in danger from blood clots in her lungs, yet she came back to be number one in the world again.',
        'In 2017 she won a Grand Slam without losing a single set, while she was already pregnant.',
        'The girl from Compton won 23 Grand Slam tennis titles, the most in the modern era.',
      ],
    },
  },
  {
    id: 16, nameEl: 'Κόμπι Μπράιαντ', nameEn: 'Kobe Bryant', emoji: '🐍',
    yes: ['american', 'athlete', 'olympicOrNobel', 'ballSport', 'teamSport'],
    clues: {
      el: [
        'Ξυπνούσε στις 4 το πρωί για προπόνηση, όταν όλη η πόλη κοιμόταν ακόμα.',
        'Μικρός ζούσε στην Ιταλία: μάθαινε ιταλικά το πρωί και σουτάριζε μόνος του όλο το απόγευμα.',
        'Στα 17 του πήδηξε από το λύκειο κατευθείαν στο NBA· στα πρώτα του πλέι οφ έριξε τέσσερα σουτ που δεν βρήκαν ούτε τη στεφάνη.',
        'Όταν κόπηκε ο αχίλλειος τένοντάς του μέσα στον αγώνα, αρνήθηκε το φορείο, περπάτησε ως τη γραμμή και έβαλε δύο βολές.',
        'Κέρδισε 5 πρωταθλήματα με τους Los Angeles Lakers, σκόραρε κάποτε 81 πόντους σε ένα παιχνίδι και ονόμασε τη φιλοσοφία του Mamba Mentality.',
      ],
      en: [
        'He woke up at 4 in the morning to train, while the whole city was still asleep.',
        'As a boy he lived in Italy: he learned Italian in the morning and shot hoops alone all afternoon.',
        'At 17 he jumped straight from high school to the NBA; in his first playoffs he took four shots that did not even touch the rim.',
        'When his Achilles tendon tore during a game, he refused a stretcher, walked to the line himself and made two free throws.',
        'He won 5 championships with the Los Angeles Lakers, once scored 81 points in a single game, and called his philosophy the Mamba Mentality.',
      ],
    },
  },
  {
    id: 17, nameEl: 'Μοχάμεντ Άλι', nameEn: 'Muhammad Ali', emoji: '🥊',
    yes: ['american', 'athlete', 'olympicOrNobel'],
    clues: {
      el: [
        'Ένα κλεμμένο κόκκινο ποδήλατο τον οδήγησε στο άθλημά του.',
        'Αρνήθηκε να πάει σε έναν πόλεμο και του πήραν τον τίτλο για τριάμισι ολόκληρα χρόνια.',
        'Έλεγε ότι πετάει σαν πεταλούδα και τσιμπάει σαν μέλισσα.',
        'Στα 18 του πήρε χρυσό Ολυμπιακό μετάλλιο και μετά έγινε παγκόσμιος πρωταθλητής μέσα στο ρινγκ.',
        'Ήταν ο πιο διάσημος πυγμάχος του κόσμου και φώναζε ότι είναι ο σπουδαιότερος όλων.',
      ],
      en: [
        'A stolen red bicycle led him to his sport.',
        'He refused to go to a war, and they took his title away for three and a half whole years.',
        'He said he floats like a butterfly and stings like a bee.',
        'At 18 he won an Olympic gold medal, and later became world champion inside the ring.',
        'He was the most famous boxer in the world and shouted that he was the greatest of all.',
      ],
    },
  },
  {
    id: 18, nameEl: 'Μάικλ Φελπς', nameEn: 'Michael Phelps', emoji: '🏊',
    yes: ['alive', 'american', 'athlete', 'olympicOrNobel', 'bornAfter1980'],
    clues: {
      el: [
        'Μικρός φοβόταν να βάλει το πρόσωπό του στο νερό, γι\' αυτό ξεκίνησε κολυμπώντας ανάσκελα.',
        'Μια δασκάλα είπε στη μαμά του ότι δεν θα κατάφερνε ποτέ να συγκεντρωθεί σε τίποτα.',
        'Σε έναν τελικό τα γυαλάκια του γέμισαν νερό και μετρούσε τις χεριές του μέχρι τον τοίχο — και κέρδισε.',
        'Σε μία μόνο διοργάνωση κέρδισε 8 χρυσά μετάλλια, κάτι που δεν είχε καταφέρει ποτέ κανείς.',
        'Είναι ο κολυμβητής με τα περισσότερα Ολυμπιακά μετάλλια στην ιστορία, 28 συνολικά.',
      ],
      en: [
        'As a little boy he was scared to put his face in the water, so he started swimming on his back.',
        'A teacher told his mom he would never be able to concentrate on anything.',
        'In one final his goggles filled with water, so he counted his strokes to the wall — and still won.',
        'At a single Games he won 8 gold medals, something nobody had ever done before.',
        'He is the swimmer with the most Olympic medals in history, 28 of them.',
      ],
    },
  },
  {
    id: 19, nameEl: 'Νάντια Κομανέτσι', nameEn: 'Nadia Comaneci', emoji: '🤸',
    yes: ['alive', 'woman', 'athlete', 'olympicOrNobel'],
    clues: {
      el: [
        'Ένας προπονητής την πρόσεξε να κάνει τούμπες στην αυλή του σχολείου της, στη Ρουμανία.',
        'Ο πίνακας του σκορ έδειξε 1.00, γιατί το μηχάνημα δεν είχε φτιαχτεί ποτέ για τη βαθμολογία της.',
        'Στα δεκατέσσερά της πέταξε ανάμεσα στους ασύμμετρους ζυγούς και προσγειώθηκε χωρίς ούτε ένα λάθος.',
        'Πήρε το πρώτο τέλειο 10 στην ιστορία της Ολυμπιακής ενόργανης γυμναστικής.',
        'Είναι η γυμνάστρια με τα εννέα Ολυμπιακά μετάλλια που έκανε εκατομμύρια κορίτσια να γραφτούν στη γυμναστική.',
      ],
      en: [
        'A coach spotted her doing cartwheels in her schoolyard, in Romania.',
        'The scoreboard showed 1.00, because the machine had never been built to show her score.',
        'At fourteen she flew between the uneven bars and landed without a single mistake.',
        'She earned the first perfect 10 in the history of Olympic gymnastics.',
        'She is the gymnast with nine Olympic medals who made millions of girls sign up for gymnastics.',
      ],
    },
  },
  {
    id: 20, nameEl: 'Κριστιάνο Ρονάλντο', nameEn: 'Cristiano Ronaldo', emoji: '⚽',
    yes: ['alive', 'athlete', 'ballSport', 'teamSport', 'bornAfter1980'],
    clues: {
      el: [
        'Μεγάλωσε σε ένα μικρό νησί και στα δώδεκά του έφυγε ολομόναχος για την πρωτεύουσα, να κυνηγήσει το όνειρό του.',
        'Στα δεκαπέντε του οι γιατροί βρήκαν ότι η καρδιά του χτυπούσε πολύ γρήγορα, και λίγες μέρες μετά την επέμβαση ξαναπροπονούνταν.',
        'Ερχόταν πρώτος στην προπόνηση και έφευγε τελευταίος, κάθε μέρα.',
        'Έχει κερδίσει πέντε Χρυσές Μπάλες και πέντε Champions League.',
        'Φοράει το νούμερο 7 και έχει βάλει περισσότερα γκολ με την εθνική Πορτογαλίας από κάθε άλλον ποδοσφαιριστή στην ιστορία.',
      ],
      en: [
        'He grew up on a small island and at twelve left all alone for the capital to chase his dream.',
        'At fifteen doctors found his heart was beating too fast, and a few days after the operation he was training again.',
        'He was first to arrive at training and last to leave, every single day.',
        'He has won five Ballon d\'Or awards and five Champions League titles.',
        'He wears number 7 and has scored more goals for Portugal than any footballer in history.',
      ],
    },
  },
  {
    id: 21, nameEl: 'Τόμας Έντισον', nameEn: 'Thomas Edison', emoji: '💡',
    yes: ['before1900', 'american', 'scientist', 'inventor', 'business', 'usedToday'],
    clues: {
      el: [
        'Ο δάσκαλός του τον είπε αργόστροφο, κι έτσι η μητέρα του τον πήρε από το σχολείο και τον δίδαξε μόνη της.',
        'Στα δώδεκά του έστησε ένα μικρό χημικό εργαστήριο μέσα στο βαγόνι ενός τρένου.',
        'Έχασε σιγά σιγά την ακοή του και έλεγε ότι η ησυχία τον βοηθούσε να σκέφτεται.',
        'Έλεγε ότι δεν απέτυχε ποτέ, απλώς βρήκε χιλιάδες τρόπους που δεν δουλεύουν.',
        'Έφτιαξε την πρώτη μηχανή που κατέγραφε ήχο και τη λάμπα που φωτίζει τα σπίτια μας.',
      ],
      en: [
        'His teacher called him too slow to learn, so his mother took him out of school and taught him herself.',
        'At twelve he set up a tiny chemistry lab inside the baggage car of a train.',
        'He slowly lost his hearing, and said the quiet helped him think.',
        'He said he had never failed, he had simply found thousands of ways that do not work.',
        'He built the first machine that could record sound, and the light bulb that lights our homes.',
      ],
    },
  },
  {
    id: 22, nameEl: 'Στιβ Τζομπς', nameEn: 'Steve Jobs', emoji: '🍎',
    yes: ['american', 'inventor', 'tech', 'business', 'usedToday', 'famousBrand', 'film', 'techFounder'],
    clues: {
      el: [
        'Παράτησε το κολέγιο και επέστρεφε άδεια μπουκάλια για λίγα σεντς, αλλά συνέχιζε να πηγαίνει σε ένα μάθημα για τα όμορφα γράμματα.',
        'Τον έδιωξαν από την εταιρεία που είχε ιδρύσει ο ίδιος, και χρόνια αργότερα τον κάλεσαν πίσω να τη σώσει.',
        'Στήριξε το στούντιο που χάρισε στον κόσμο το Toy Story.',
        'Έφτιαξε τους πρώτους του υπολογιστές μέσα σε ένα γκαράζ, μαζί με έναν φίλο του.',
        'Το 2007 παρουσίασε το πρώτο iPhone, από την εταιρεία με το δαγκωμένο μήλο.',
      ],
      en: [
        'He dropped out of college and returned empty bottles for a few cents, but kept going to a class about beautiful lettering.',
        'He was fired from the company he had founded himself, and years later they called him back to save it.',
        'He backed the studio that gave the world Toy Story.',
        'He built his first computers inside a garage, together with a friend.',
        'In 2007 he presented the first iPhone, from the company with the bitten apple.',
      ],
    },
  },
  {
    id: 23, nameEl: 'Μπιλ Γκέιτς', nameEn: 'Bill Gates', emoji: '💻',
    yes: ['alive', 'american', 'inventor', 'tech', 'business', 'usedToday', 'famousBrand', 'techFounder', 'veryRich'],
    clues: {
      el: [
        'Μικρός διάβαζε εγκυκλοπαίδειες για διασκέδαση και κλεινόταν στο δωμάτιό του μόνο και μόνο για να σκέφτεται.',
        'Στα δεκατρία του έγραφε κώδικα όλη νύχτα στο τερματικό του σχολείου και έφτιαξε το πρόγραμμα που έβγαζε το ωρολόγιο πρόγραμμα.',
        'Άφησε το Χάρβαρντ για να φτιάξει μια εταιρεία με τον φίλο του τον Paul.',
        'Το όνειρό του ήταν ένας υπολογιστής σε κάθε γραφείο και σε κάθε σπίτι, και τα Windows του το έκαναν αλήθεια.',
        'Έγινε ο πλουσιότερος άνθρωπος του κόσμου και μετά χάρισε το μεγαλύτερο μέρος της περιουσίας του για εμβόλια και σχολεία.',
      ],
      en: [
        'As a boy he read encyclopedias for fun and shut himself in his room just to think.',
        'At thirteen he wrote code all night on his school\'s terminal, and built the program that made the class timetable.',
        'He left Harvard to start a company with his friend Paul.',
        'His dream was a computer on every desk and in every home, and his Windows made it come true.',
        'He became the richest person in the world and then gave most of his fortune away for vaccines and schools.',
      ],
    },
  },
  {
    id: 24, nameEl: 'Έλον Μασκ', nameEn: 'Elon Musk', emoji: '🚀',
    yes: ['alive', 'inventor', 'tech', 'business', 'usedToday', 'famousBrand', 'space', 'techFounder'],
    clues: {
      el: [
        'Στο σχολείο τα άλλα παιδιά τον κορόιδευαν και τον χτυπούσαν, κι εκείνος κρύφτηκε στα βιβλία, διαβάζοντας ολόκληρη εγκυκλοπαίδεια.',
        'Στα δώδεκά του έγραψε μόνος του ένα βιντεοπαιχνίδι με διαστημόπλοια και το πούλησε σε ένα περιοδικό.',
        'Βοήθησε να φτιαχτεί το PayPal και μετά έβαλε σχεδόν όλα του τα λεφτά σε δύο ιδέες που όλοι έλεγαν αδύνατες.',
        'Οι τρεις πρώτοι του πύραυλοι έγιναν κομμάτια, ο τέταρτος πέτυχε, και σήμερα οι πύραυλοί του προσγειώνονται όρθιοι για να ξαναπετάξουν.',
        'Φτιάχνει τα ηλεκτρικά αυτοκίνητα Tesla και τους πυραύλους της SpaceX, και ονειρεύεται ταξίδια στον Άρη.',
      ],
      en: [
        'At school the other kids teased and hit him, so he hid in books, reading a whole encyclopedia.',
        'At twelve he wrote his own video game about spaceships and sold it to a magazine.',
        'He helped create PayPal, then put almost all his money into two ideas everyone called impossible.',
        'His first three rockets broke into pieces, the fourth one worked, and today his rockets land standing upright to fly again.',
        'He makes Tesla electric cars and SpaceX rockets, and he dreams of journeys to Mars.',
      ],
    },
  },
  {
    id: 25, nameEl: 'Νίκολα Τέσλα', nameEn: 'Nikola Tesla', emoji: '⚡',
    yes: ['before1900', 'scientist', 'inventor', 'usedToday', 'famousBrand', 'poorInLife'],
    clues: {
      el: [
        'Γεννήθηκε μια νύχτα με αστραπές και κεραυνούς, και η μητέρα του είπε πως θα γίνει παιδί του φωτός.',
        'Έβλεπε ολόκληρες μηχανές μέσα στο μυαλό του και τις δοκίμαζε εκεί, πριν πιάσει καν εργαλείο.',
        'Δούλεψε για τον Edison και μετά έγινε αντίπαλός του για το πώς πρέπει να ταξιδεύει το ρεύμα.',
        'Το σύστημά του φώτισε μια ολόκληρη Παγκόσμια Έκθεση και δάμασε τη δύναμη των καταρρακτών του Νιαγάρα.',
        'Πέθανε φτωχός, ταΐζοντας περιστέρια, όμως σήμερα μια εταιρεία ηλεκτρικών αυτοκινήτων έχει το όνομά του.',
      ],
      en: [
        'He was born on a night of thunder and lightning, and his mother said he would be a child of light.',
        'He could see whole machines inside his head and test them there before he ever picked up a tool.',
        'He worked for Edison, then became his rival over how electricity should travel.',
        'His system lit up an entire World\'s Fair and harnessed the power of Niagara Falls.',
        'He died poor, feeding pigeons, but today an electric car company carries his name.',
      ],
    },
  },
  {
    id: 26, nameEl: 'Μαρκ Ζάκερμπεργκ', nameEn: 'Mark Zuckerberg', emoji: '👍',
    yes: ['alive', 'american', 'inventor', 'tech', 'business', 'usedToday', 'famousBrand', 'techFounder', 'bornAfter1980'],
    clues: {
      el: [
        'Στα 11 του έφτιαξε ένα σύστημα μηνυμάτων για να μιλάνε τα δωμάτια του σπιτιού με το οδοντιατρείο του μπαμπά του.',
        'Στο λύκειο έφτιαξε ένα πρόγραμμα μουσικής που ήθελαν να αγοράσουν μεγάλες εταιρείες, μα εκείνος προτίμησε να μείνει στο σχολείο.',
        'Έγραψε τη διάσημη ιστοσελίδα του μέσα σε ένα φοιτητικό δωμάτιο γεμάτο καλώδια και κούτες από πίτσα.',
        'Στα 22 του είπε όχι σε ένα δισεκατομμύριο δολάρια για την ιστοσελίδα του.',
        'Άφησε το Χάρβαρντ για την Καλιφόρνια και έφτιαξε το γαλάζιο μέσο όπου κάνεις φίλους και πατάς «μου αρέσει».',
      ],
      en: [
        'At 11 he built a messaging system so the rooms of his house could talk to his dad\'s dental office.',
        'In high school he made a music program big companies wanted to buy, but he chose to stay in school.',
        'He wrote his famous website in a college dorm room full of cables and pizza boxes.',
        'At 22 he said no to one billion dollars for his website.',
        'He left Harvard for California and built the blue site where you add friends and press like.',
      ],
    },
  },
  {
    id: 27, nameEl: 'Άντα Λάβλεϊς', nameEn: 'Ada Lovelace', emoji: '⚙️',
    yes: ['before1900', 'woman', 'scientist', 'inventor', 'tech', 'usedToday', 'britain', 'poorInLife'],
    clues: {
      el: [
        'Ο πατέρας της ήταν ο πιο διάσημος ποιητής της εποχής και έφυγε όταν εκείνη ήταν μωρό, κι η μητέρα της τη μεγάλωσε με αριθμούς και λογική.',
        'Στα 12 της μελετούσε τα φτερά των πουλιών και γέμιζε τετράδια με σχέδια για μια ιπτάμενη μηχανή.',
        'Ονόμαζε τον τρόπο που σκεφτόταν «ποιητική επιστήμη».',
        'Έγραψε για μια τεράστια μηχανή από γρανάζια σημειώσεις τρεις φορές μεγαλύτερες από το ίδιο το άρθρο.',
        'Έναν ολόκληρο αιώνα πριν υπάρξουν υπολογιστές έγραψε το πρώτο πρόγραμμα της ιστορίας, και μια γλώσσα προγραμματισμού πήρε το όνομά της.',
      ],
      en: [
        'Her father was the most famous poet of his time and left when she was a baby, so her mother raised her on numbers and logic.',
        'At 12 she studied the wings of birds and filled notebooks with plans for a flying machine.',
        'She called the way she thought poetical science.',
        'She wrote notes about a huge machine of gears that were three times longer than the article itself.',
        'A whole century before computers existed she wrote the first program in history, and a programming language was named after her.',
      ],
    },
  },
  {
    id: 28, nameEl: 'Άλαν Τούρινγκ', nameEn: 'Alan Turing', emoji: '🔐',
    yes: ['scientist', 'inventor', 'tech', 'usedToday', 'britain', 'poorInLife'],
    clues: {
      el: [
        'Οι δάσκαλοι παραπονιόντουσαν για τα άτακτα γράμματά του, μα εκείνος έλυνε δύσκολα μαθηματικά πριν καν του διδάξουν τους κανόνες.',
        'Έχασε τον καλύτερό του φίλο από αρρώστια και ορκίστηκε να μελετήσει πώς σκέφτεται ο νους.',
        'Στα 24 του φαντάστηκε μια μηχανή που μπορεί να κάνει κάθε υπολογισμό, αρκεί να της δώσεις τις σωστές οδηγίες.',
        'Σε ένα μυστικό κέντρο, το Bletchley Park, έχτισε μια τεράστια μηχανή για να νικήσει τη μηχανή Enigma.',
        'Έσπασε τον μυστικό κώδικα του εχθρού στον πόλεμο, και σήμερα το πρόσωπό του είναι στο χαρτονόμισμα των 50 λιρών.',
      ],
      en: [
        'His teachers complained about his messy handwriting, yet he solved hard maths before anyone taught him the rules.',
        'He lost his best friend to illness and promised himself he would study how the mind thinks.',
        'At 24 he imagined a machine that could do any calculation, as long as you gave it the right instructions.',
        'At a secret place called Bletchley Park he built a huge machine to beat the Enigma code machine.',
        'He broke the enemy\'s secret code in the war, and today his face is on the 50 pound note.',
      ],
    },
  },
  {
    id: 29, nameEl: 'Λάρι Πέιτζ και Σεργκέι Μπριν', nameEn: 'Larry Page & Sergey Brin', emoji: '🔍',
    yes: ['alive', 'american', 'group', 'scientist', 'inventor', 'tech', 'business', 'usedToday', 'famousBrand', 'techFounder'],
    clues: {
      el: [
        'Δύο φοιτητές γνωρίστηκαν το 1995 στο πανεπιστήμιο Stanford και στην αρχή διαφωνούσαν σχεδόν σε όλα.',
        'Ο ένας είχε γεννηθεί στη Μόσχα, ο άλλος μεγάλωσε στο Μίσιγκαν με γονείς που δίδασκαν πληροφορική.',
        'Έστησαν τους πρώτους διακομιστές τους σε ένα φοιτητικό δωμάτιο, με θήκες φτιαγμένες ακόμα και από τουβλάκια.',
        'Προσπάθησαν να πουλήσουν την ιδέα τους για ένα εκατομμύριο δολάρια, όλοι τους είπαν όχι, κι έτσι άνοιξαν μόνοι τους εταιρεία σε ένα γκαράζ.',
        'Η εταιρεία τους πήρε το όνομά της από έναν αριθμό με εκατό μηδενικά, και σήμερα λέμε αυτό το όνομα κάθε φορά που ψάχνουμε κάτι στο ίντερνετ.',
      ],
      en: [
        'Two students met in 1995 at Stanford University, and at first they disagreed about almost everything.',
        'One of them was born in Moscow, the other grew up in Michigan with parents who both taught computer science.',
        'They set up their first servers in a dorm room, with racks partly built out of toy bricks.',
        'They tried to sell their idea for a million dollars, everyone said no, so they started their own company in a garage.',
        'Their company is named after a number with one hundred zeros, and today we say that name every time we look something up on the internet.',
      ],
    },
  },
  {
    id: 30, nameEl: 'Τιμ Μπέρνερς-Λι', nameEn: 'Tim Berners-Lee', emoji: '🌐',
    yes: ['alive', 'scientist', 'inventor', 'tech', 'usedToday', 'britain'],
    clues: {
      el: [
        'Μικρός έφτιαχνε ψεύτικους υπολογιστές από χαρτόκουτα και λάτρευε τα ηλεκτρικά τρενάκια του.',
        'Και οι δύο γονείς του είχαν δουλέψει σε έναν από τους πρώτους υπολογιστές του κόσμου.',
        'Δούλευε σε ένα τεράστιο ερευνητικό κέντρο στην Ελβετία, όπου οι πληροφορίες ήταν κλειδωμένες σε μηχανές που δεν μιλούσαν μεταξύ τους.',
        'Ο προϊστάμενός του σημείωσε πάνω στην πρότασή του το 1989: «ασαφές, αλλά συναρπαστικό».',
        'Εφηύρε το HTML, τις διευθύνσεις URL και τις ιστοσελίδες, και μετά χάρισε τον Παγκόσμιο Ιστό σε όλη την ανθρωπότητα, δωρεάν και για πάντα.',
      ],
      en: [
        'As a boy he built pretend computers out of cardboard boxes and adored his model trains.',
        'Both his parents had worked on one of the very first computers in the world.',
        'He worked at a giant research center in Switzerland, where information was locked inside machines that could not talk to each other.',
        'His boss scribbled on his 1989 proposal: vague, but exciting.',
        'He invented HTML, URL addresses and web pages, then gave the World Wide Web to all humanity, free and forever.',
      ],
    },
  },
  {
    id: 31, nameEl: 'Φρίντα Κάλο', nameEn: 'Frida Kahlo', emoji: '🎨',
    yes: ['woman', 'artist', 'painter'],
    clues: {
      el: [
        'Το σπίτι της στο Μεξικό ήταν βαμμένο τόσο έντονα γαλάζιο που όλοι το έλεγαν Γαλάζιο Σπίτι.',
        'Στα έξι της αρρώστησε από πολιομυελίτιδα και το ένα της πόδι έμεινε πιο αδύναμο, όμως εκείνη συνέχισε να τρέχει και να κολυμπάει.',
        'Στα 18 της το λεωφορείο της συγκρούστηκε με ένα τραμ, έσπασε η σπονδυλική της στήλη και έμεινε μήνες στο κρεβάτι με γύψο.',
        'Η οικογένειά της κρέμασε έναν καθρέφτη στο ταβάνι και έφτιαξε ειδικό καβαλέτο, κι έτσι άρχισε να ζωγραφίζει τον ίδιο της τον εαυτό.',
        'Αυτή η Μεξικανή ζωγράφος γέμισε τις αυτοπροσωπογραφίες της με λουλούδια, μαϊμούδες και παπαγάλους, και πήγε στην έκθεσή της με ασθενοφόρο, ξαπλωμένη στο κρεβάτι της.',
      ],
      en: [
        'Her house in Mexico was painted such a brilliant blue that everyone called it the Blue House.',
        'At six she caught polio and one of her legs stayed weaker, yet she kept running and swimming anyway.',
        'At 18 her bus crashed into a streetcar, her spine was broken, and she lay for months in bed wrapped in plaster.',
        'Her family hung a mirror on the ceiling and built a special easel, so she began to paint herself.',
        'This Mexican painter filled her self-portraits with flowers, monkeys and parrots, and came to her own exhibition by ambulance, lying in her bed.',
      ],
    },
  },
  {
    id: 32, nameEl: 'Μπετόβεν', nameEn: 'Beethoven', emoji: '🎹',
    yes: ['before1900', 'artist', 'music'],
    clues: {
      el: [
        'Έμαθε πιάνο τόσο μικρός που τα πόδια του δεν έφταναν στα πετάλια, κι ο αυστηρός πατέρας του τον έβαζε να εξασκείται ώρες ατελείωτες.',
        'Στα 21 του μετακόμισε στη Βιέννη, την πρωτεύουσα της μουσικής, με άγρια μαλλιά και ιδέες που ξεχείλιζαν.',
        'Γύρω στα 28 του τού συνέβη το χειρότερο για έναν μουσικό: άρχισε να χάνει την ακοή του, και το κρατούσε κρυφό.',
        'Ακουμπούσε πάνω στο πιάνο για να νιώθει τις δονήσεις, κι οι φίλοι του τού έγραφαν σε τετράδια για να συνεννοηθούν.',
        'Εντελώς κουφός έγραψε τον Ύμνο στη Χαρά, τον σημερινό ύμνο της Ευρώπης, και τον γύρισαν να δει το χειροκρότημα που δεν μπορούσε να ακούσει.',
      ],
      en: [
        'He learned piano so young that his feet could not reach the pedals, and his strict father made him practice for endless hours.',
        'At 21 he moved to Vienna, the capital of music, with wild hair and overflowing ideas.',
        'Around 28 the cruelest thing for a musician happened to him: he began to lose his hearing, and he kept it a secret.',
        'He leaned against his piano to feel the vibrations, and his friends wrote to him in notebooks so they could talk.',
        'Completely deaf, he wrote the Ode to Joy, now the anthem of Europe, and was turned around to see an ovation he could not hear.',
      ],
    },
  },
  {
    id: 33, nameEl: 'Πάμπλο Πικάσο', nameEn: 'Pablo Picasso', emoji: '🎨',
    yes: ['before1900', 'artist', 'usedToday', 'painter'],
    clues: {
      el: [
        'Λένε ότι η πρώτη του λέξη ήταν η λέξη «μολύβι».',
        'Όταν πέθανε ένας αγαπημένος του φίλος, για τρία χρόνια ζωγράφιζε σχεδόν μόνο με μπλε.',
        'Στα 14 του πέρασε σε λίγες μέρες τις εξετάσεις μιας σχολής τέχνης που οι άλλοι ήθελαν έναν μήνα.',
        'Ζωγράφισε έναν τεράστιο ασπρόμαυρο πίνακα ενάντια στον πόλεμο, τη Guernica, και πρόσωπα σπασμένα σε τρίγωνα και τετράγωνα.',
        'Ισπανός ζωγράφος, το πιο διάσημο όνομα του Κυβισμού, με δεκάδες χιλιάδες έργα.',
      ],
      en: [
        'They say his very first word meant "pencil".',
        'When a dear friend died, he painted almost everything in shades of blue for three years.',
        'At 14 he passed an art school exam in a few days that took other students a whole month.',
        'He painted a huge black-and-white picture against war called Guernica, and faces broken into triangles and squares.',
        'A Spanish painter, the most famous name in Cubism, who made tens of thousands of works.',
      ],
    },
  },
  {
    id: 34, nameEl: 'Βόλφγκανγκ Αμαντέους Μότσαρτ', nameEn: 'Mozart', emoji: '🎼',
    yes: ['before1900', 'artist', 'usedToday', 'music', 'poorInLife'],
    clues: {
      el: [
        'Στα τρία του σκαρφάλωνε στο σκαμπό για να φτάσει το πληκτροφόρο της αδερφής του.',
        'Μικρό παιδί ταξίδευε με κρύες άμαξες σε όλη την Ευρώπη και έπαιζε μπροστά σε βασιλιάδες και αυτοκράτειρες.',
        'Στα 14 του, στη Ρώμη, άκουσε μία φορά ένα απαγορευμένο κομμάτι και το έγραψε ολόκληρο από μνήμης.',
        'Άκουγε ολόκληρα έργα μέσα στο κεφάλι του και έγραψε πάνω από 600, πριν φύγει μόλις στα 35 του.',
        'Αυστριακό παιδί-θαύμα που έγραψε τον Μαγικό Αυλό και τους Γάμους του Φίγκαρο.',
      ],
      en: [
        'At three years old he climbed onto a stool to reach his sister\'s keyboard.',
        'As a small boy he travelled across Europe in cold, bumpy carriages, playing for kings and empresses.',
        'At 14, in Rome, he heard a forbidden piece of music once and wrote the whole thing down from memory.',
        'He could hear a whole piece inside his head and wrote over 600 works before dying at only 35.',
        'An Austrian child prodigy who wrote The Magic Flute and The Marriage of Figaro.',
      ],
    },
  },
  {
    id: 35, nameEl: 'Ουίλιαμ Σαίξπηρ', nameEn: 'William Shakespeare', emoji: '🎭',
    yes: ['before1900', 'artist', 'usedToday', 'writer', 'britain'],
    clues: {
      el: [
        'Ο πατέρας του έφτιαχνε γάντια σε μια μικρή αγγλική πόλη δίπλα σε ένα ποτάμι.',
        'Δεν πήγε ποτέ πανεπιστήμιο, και κάποιοι μορφωμένοι συγγραφείς τον κορόιδευαν γι\' αυτό.',
        'Ο θίασός του έχτισε ένα στρογγυλό θέατρο στην όχθη του Τάμεση, το περίφημο Globe.',
        'Πάνω από 1.700 αγγλικές λέξεις γράφτηκαν για πρώτη φορά στα κείμενά του.',
        'Έγραψε τον Ρωμαίο και την Ιουλιέτα, τον Άμλετ και τον Μάκβεθ πριν από 400 χρόνια.',
      ],
      en: [
        'His father made gloves in a small English town beside a river.',
        'He never went to university, and some educated writers mocked him for it.',
        'His theatre company built a round playhouse on the bank of the Thames, the famous Globe.',
        'More than 1,700 English words appeared in print for the very first time in his writing.',
        'He wrote Romeo and Juliet, Hamlet and Macbeth over 400 years ago.',
      ],
    },
  },
  {
    id: 36, nameEl: 'Στίβεν Σπίλμπεργκ', nameEn: 'Steven Spielberg', emoji: '🎬',
    yes: ['alive', 'american', 'business', 'artist', 'usedToday', 'film'],
    clues: {
      el: [
        'Μικρός γύριζε φιλμάκια στην αυλή του με μια κάμερα 8 χιλιοστών, με πρωταγωνίστριες τις αδερφές του.',
        'Μια φημισμένη σχολή κινηματογράφου τον απέρριψε πολλές φορές εξαιτίας των μέτριων βαθμών του.',
        'Πήγαινε κάθε μέρα στα μεγάλα στούντιο να βλέπει πώς γίνονται οι ταινίες, ώσπου έμαθαν το όνομά του και του έδωσαν ευκαιρία.',
        'Ο μηχανικός καρχαρίας του χαλούσε συνέχεια, γι\' αυτό τον έκρυψε και άφησε τη μουσική να τρομάζει τον κόσμο.',
        'Αμερικανός σκηνοθέτης του Jaws, του E.T. και του Jurassic Park.',
      ],
      en: [
        'As a boy he shot little films in his backyard with an 8mm camera, starring his sisters.',
        'A famous film school rejected him several times because his grades were only average.',
        'He spent every day he could inside a big studio watching how movies were made, until they learned his name and gave him a chance.',
        'His mechanical shark kept breaking, so he barely showed it and let the music create the fear instead.',
        'An American director who made Jaws, E.T. and Jurassic Park.',
      ],
    },
  },
  {
    id: 37, nameEl: 'Λεονάρντο ντα Βίντσι', nameEn: 'Leonardo da Vinci', emoji: '🖼️',
    yes: ['before1900', 'scientist', 'inventor', 'artist', 'usedToday', 'painter', 'italy'],
    clues: {
      el: [
        'Ξεκινούσε τόσα πολλά πράγματα μαζί που πολλά δεν τα τελείωσε ποτέ.',
        'Γέμισε χιλιάδες σελίδες με σημειώσεις γραμμένες ανάποδα· χρειάζεσαι καθρέφτη για να τις διαβάσεις.',
        'Σχεδίασε αλεξίπτωτο και ιπτάμενες μηχανές αιώνες πριν κατασκευαστούν στ\' αλήθεια.',
        'Κουβαλούσε χρόνια μαζί του στα ταξίδια έναν μικρό πίνακα, τελειοποιώντας ένα μυστηριώδες χαμόγελο.',
        'Ιταλός που ζωγράφισε τη Μόνα Λίζα και τον Μυστικό Δείπνο, και ήταν μαζί ζωγράφος, επιστήμονας και μηχανικός.',
      ],
      en: [
        'He started so many things at once that he often left them unfinished.',
        'He filled thousands of pages with notes written backwards — you need a mirror to read them.',
        'He designed a parachute and flying machines centuries before they were really built.',
        'He carried one small painting with him on his travels for years, perfecting a mysterious smile.',
        'An Italian who painted the Mona Lisa and The Last Supper, and was a painter, scientist and engineer all at once.',
      ],
    },
  },
  {
    id: 38, nameEl: 'Βίνσεντ βαν Γκογκ', nameEn: 'Vincent van Gogh', emoji: '🌻',
    yes: ['before1900', 'artist', 'usedToday', 'painter', 'poorInLife'],
    clues: {
      el: [
        'Δοκίμασε να πουλάει πίνακες, να γίνει δάσκαλος και να βοηθάει ανθρακωρύχους, πριν βρει τη θέση του.',
        'Ο αδερφός του, ο Theo, του έστελνε χρήματα για μπογιές και εκατοντάδες γράμματα με κουράγιο.',
        'Σε μόλις δέκα χρόνια έφτιαξε περίπου 900 πίνακες, μα όσο ζούσε πούλησε μόνο έναν.',
        'Στη νότια Γαλλία ζωγράφισε χρυσαφένια ηλιοτρόπια και το κίτρινο δωμάτιό του με χρώματα που μοιάζουν ζωντανά.',
        'Ολλανδός ζωγράφος της Έναστρης Νύχτας, με τον ουρανό που στροβιλίζεται σαν θάλασσα από φως.',
      ],
      en: [
        'He tried selling paintings, teaching, and helping poor mining families before he found his place.',
        'His brother Theo sent him money for paints and hundreds of letters full of encouragement.',
        'In just ten years he made around 900 paintings, yet he sold only one while he was alive.',
        'In the south of France he painted golden sunflowers and his own yellow bedroom in colors that seem alive.',
        'A Dutch painter who made The Starry Night, with its sky swirling like a sea of light.',
      ],
    },
  },
  {
    id: 39, nameEl: 'Κοκό Σανέλ', nameEn: 'Coco Chanel', emoji: '👗',
    yes: ['before1900', 'woman', 'business', 'artist', 'usedToday', 'famousBrand'],
    clues: {
      el: [
        'Έμεινε ορφανή σε ένα μοναστήρι, όπου οι καλόγριες της έμαθαν βελόνα και κλωστή.',
        'Πήρε το παρατσούκλι που έμεινε στην ιστορία τραγουδώντας τα βράδια σε καφέ.',
        'Το 1910 άνοιξε ένα μικρό μαγαζί με απλά καπέλα στο Παρίσι, και μετά έντυσε τις γυναίκες με παντελόνια.',
        'Έραψε ρούχα από ένα μαλακό ύφασμα που τότε το θεωρούσαν μόνο για εσώρουχα, για να μπορούν οι γυναίκες να κινούνται και να ανασαίνουν.',
        'Γαλλίδα σχεδιάστρια που έκανε διάσημο το μικρό μαύρο φόρεμα και ένα άρωμα με τον αριθμό 5.',
      ],
      en: [
        'She was left at a convent orphanage, where the nuns taught her needle and thread.',
        'She earned the nickname that history remembers by singing in cafes at night.',
        'In 1910 she opened a tiny shop of simple hats in Paris, and later she dressed women in trousers.',
        'She sewed clothes from a soft fabric people thought was only fit for underwear, so women could move and breathe.',
        'A French designer who made the little black dress famous, and a perfume with the number 5.',
      ],
    },
  },
  {
    id: 40, nameEl: 'Οι Μπιτλς', nameEn: 'The Beatles', emoji: '🎸',
    yes: ['group', 'artist', 'usedToday', 'music', 'britain'],
    clues: {
      el: [
        'Όλα ξεκίνησαν σε μια γιορτή της γειτονιάς, όταν ένα αγόρι 16 χρονών γνώρισε ένα αγόρι 15 χρονών.',
        'Στο Αμβούργο έπαιζαν σε μικρά θορυβώδη κλαμπ ως και οκτώ ώρες τη νύχτα, για ελάχιστα χρήματα.',
        'Μια μεγάλη δισκογραφική τούς είπε όχι, γιατί πίστευε ότι τα συγκροτήματα με κιθάρες δεν έχουν μέλλον.',
        'Το 1964 τους είδαν 73 εκατομμύρια Αμερικανοί στην τηλεόραση, και έγραφαν μόνοι τους τα τραγούδια τους.',
        'Τέσσερις φίλοι από το Λίβερπουλ: ο John, ο Paul, ο George και ο Ringo.',
      ],
      en: [
        'It all began at a neighborhood fete, when a sixteen-year-old boy met a fifteen-year-old boy.',
        'In Hamburg they played in small, noisy clubs for up to eight hours a night, for very little pay.',
        'A big record company said no to them, believing that guitar groups had no future.',
        'In 1964, 73 million Americans watched them on television, and they wrote all their own songs.',
        'Four friends from Liverpool: John, Paul, George and Ringo.',
      ],
    },
  },
  {
    id: 41, nameEl: 'Άλμπερτ Αϊνστάιν', nameEn: 'Albert Einstein', emoji: '⚛️',
    yes: ['before1900', 'scientist', 'olympicOrNobel', 'space'],
    clues: {
      el: [
        'Όταν ήταν πέντε χρονών και άρρωστος στο κρεβάτι, ο πατέρας του τού χάρισε μια πυξίδα και εκείνος έμεινε να κοιτάζει μαγεμένος τη βελόνα.',
        'Κανένα πανεπιστήμιο δεν τον προσέλαβε, κι έτσι δούλεψε υπάλληλος σε ένα γραφείο ευρεσιτεχνιών στην Ελβετία.',
        'Μέσα σε έναν μόνο χρόνο δημοσίευσε τέσσερις εργασίες που άλλαξαν για πάντα τη φυσική.',
        'Μια έκλειψη ηλίου απέδειξε ότι το φως λυγίζει κοντά στον Ήλιο, και έγινε διάσημος σε όλο τον πλανήτη.',
        'Είχε ατίθασα άσπρα μαλλιά και έγραψε την πιο διάσημη εξίσωση όλων: E=mc².',
      ],
      en: [
        'When he was five and sick in bed, his father gave him a compass, and he stared spellbound at the spinning needle.',
        'No university would hire him, so he worked as a clerk in a patent office in Switzerland.',
        'In one single year he published four papers that changed physics forever.',
        'A solar eclipse proved that light bends near the Sun, and he became famous across the whole planet.',
        'He had wild white hair and wrote the most famous equation of all: E=mc².',
      ],
    },
  },
  {
    id: 42, nameEl: 'Μαρί Κιουρί', nameEn: 'Marie Curie', emoji: '☢️',
    yes: ['before1900', 'woman', 'scientist', 'olympicOrNobel', 'doctor', 'poorInLife'],
    clues: {
      el: [
        'Σπούδαζε κρυφά σε ένα μυστικό «Ιπτάμενο Πανεπιστήμιο», γιατί στη χώρα της οι γυναίκες δεν επιτρεπόταν να σπουδάσουν.',
        'Ζούσε σε μια παγωμένη σοφίτα στο Παρίσι και καμιά φορά λιποθυμούσε από την πείνα μέσα στην τάξη.',
        'Μαζί με τον σύζυγό της ανακάτευε τόνους μαύρου πετρώματος σε ένα παλιό υπόστεγο που έμπαζε βροχή.',
        'Ανακάλυψε ένα στοιχείο που έλαμπε γαλαζοπράσινο μέσα στο σκοτάδι κι ένα άλλο που το ονόμασε από την πατρίδα της, την Πολωνία.',
        'Είναι ο μόνος άνθρωπος που κέρδισε Νόμπελ σε δύο διαφορετικές επιστήμες, Φυσική και Χημεία.',
      ],
      en: [
        'She studied in secret at a hidden Flying University, because women in her country were not allowed to go to university.',
        'She lived in a freezing attic in Paris and sometimes fainted from hunger during class.',
        'Together with her husband she stirred tons of black rock in an old leaky shed.',
        'She discovered an element that glowed blue-green in the dark, and another she named after her homeland, Poland.',
        'She is the only person who won Nobel Prizes in two different sciences, Physics and Chemistry.',
      ],
    },
  },
  {
    id: 43, nameEl: 'Ισαάκ Νεύτων', nameEn: 'Isaac Newton', emoji: '🍎',
    yes: ['before1900', 'scientist', 'inventor', 'space', 'britain'],
    clues: {
      el: [
        'Ήταν τόσο κακός αγρότης που, αντί να προσέχει τα πρόβατα, σκάλιζε ηλιακά ρολόγια κι έφτιαχνε μικρούς ανεμόμυλους.',
        'Όταν μια πανούκλα έκλεισε το πανεπιστήμιό του, γύρισε στο αγρόκτημα και έζησε εκεί τα πιο δημιουργικά του χρόνια.',
        'Πέρασε μια αχτίδα ήλιου μέσα από γυάλινο πρίσμα και είδε ότι το λευκό φως κρύβει όλα τα χρώματα του ουράνιου τόξου.',
        'Έφτιαξε ένα τηλεσκόπιο με καθρέφτες και έγραψε τους τρεις νόμους της κίνησης.',
        'Ένα μήλο έπεσε στον κήπο του και τον έκανε να εξηγήσει τη βαρύτητα.',
      ],
      en: [
        'He was such a bad farmer that instead of watching the sheep he carved sundials and built little windmills.',
        'When a plague closed his university, he went back to the farm and had his most creative years there.',
        'He passed a ray of sunlight through a glass prism and saw that white light hides every color of the rainbow.',
        'He built a telescope using mirrors and wrote the three laws of motion.',
        'An apple fell in his garden and made him explain gravity.',
      ],
    },
  },
  {
    id: 44, nameEl: 'Κάρολος Δαρβίνος', nameEn: 'Charles Darwin', emoji: '🐦',
    yes: ['before1900', 'scientist', 'britain', 'animals'],
    clues: {
      el: [
        'Μικρός μάζευε σκαθάρια, πέτρες και φυτά, και ο πατέρας του ανησυχούσε ότι νοιαζόταν μόνο για σκυλιά και κυνήγι.',
        'Ξεκίνησε σπουδές για γιατρός, αλλά δεν άντεχε να βλέπει αίμα και τα παράτησε.',
        'Είχε ναυτία σχεδόν κάθε μέρα σε ένα ταξίδι γύρω από τον κόσμο που κράτησε πέντε ολόκληρα χρόνια.',
        'Στα νησιά Γκαλαπάγκος είδε μικρά πουλιά που είχαν διαφορετικό ράμφος σε κάθε νησί.',
        'Έγραψε το βιβλίο που εξηγεί πώς αλλάζουν αργά τα ζώα μέσα στις γενιές: τη θεωρία της εξέλιξης.',
      ],
      en: [
        'As a boy he collected beetles, rocks and plants, and his father worried he only cared about dogs and hunting.',
        'He started studying to be a doctor, but he could not bear the sight of blood and quit.',
        'He was seasick almost every single day of a voyage around the world that lasted five whole years.',
        'On the Galapagos Islands he saw little birds with a different beak on every island.',
        'He wrote the book that explains how animals slowly change across generations: the theory of evolution.',
      ],
    },
  },
  {
    id: 45, nameEl: 'Στίβεν Χόκινγκ', nameEn: 'Stephen Hawking', emoji: '🌌',
    yes: ['scientist', 'space', 'britain'],
    clues: {
      el: [
        'Στο σχολείο οι συμμαθητές του τον φώναζαν στ\' αστεία με το όνομα ενός άλλου διάσημου φυσικού, αν και οι βαθμοί του ήταν μέτριοι.',
        'Στα 21 του οι γιατροί τού έδωσαν δύο χρόνια ζωής, κι εκείνος έζησε άλλα 55.',
        'Μιλούσε μέσα από έναν υπολογιστή, διαλέγοντας κάθε λέξη με έναν μόνο μυ του μάγουλού του.',
        'Ανακάλυψε ότι οι μαύρες τρύπες δεν είναι εντελώς μαύρες: διαρρέουν σιγά σιγά ενέργεια.',
        'Από το αναπηρικό του καροτσάκι έγραψε ένα διάσημο βιβλίο για τον χρόνο και το σύμπαν.',
      ],
      en: [
        'At school his classmates jokingly nicknamed him after another famous physicist, even though his grades were ordinary.',
        'At 21 doctors gave him two years to live, and he lived 55 more.',
        'He spoke through a computer, choosing every word with a single muscle in his cheek.',
        'He discovered that black holes are not completely black: they slowly leak energy.',
        'From his wheelchair he wrote a famous book about time and the universe.',
      ],
    },
  },
  {
    id: 46, nameEl: 'Γαλιλαίος Γαλιλέι', nameEn: 'Galileo Galilei', emoji: '🔭',
    yes: ['before1900', 'scientist', 'inventor', 'space', 'italy'],
    clues: {
      el: [
        'Ο πατέρας του ήταν μουσικός και του έμαθε να μην πιστεύει τίποτα αν δεν το δοκιμάσει πρώτα.',
        'Είδε έναν πολυέλαιο να κουνιέται στην εκκλησία, μέτρησε τις ταλαντώσεις με τους χτύπους της καρδιάς του και βρήκε τον νόμο του εκκρεμούς.',
        'Βελτίωσε τόσο πολύ ένα ολλανδικό σωληνάκι, που το έστρεψε στον νυχτερινό ουρανό και είδε όσα κανείς δεν είχε δει.',
        'Είδε βουνά και κρατήρες στη Σελήνη και τέσσερα μικρά φεγγάρια να γυρίζουν γύρω από τον Δία.',
        'Οι δικαστές τον ανάγκασαν να πει ότι η Γη δεν κινείται, κι εκείνος ψιθύρισε: «Κι όμως κινείται».',
      ],
      en: [
        'His father was a musician who taught him never to believe anything without testing it first.',
        'He watched a chandelier swing in a church, timed the swings with his own heartbeat, and found the law of the pendulum.',
        'He improved a Dutch tube so much that he pointed it at the night sky and saw what nobody had seen before.',
        'He saw mountains and craters on the Moon, and four little moons circling Jupiter.',
        'Judges forced him to say the Earth does not move, and he whispered: and yet it moves.',
      ],
    },
  },
  {
    id: 47, nameEl: 'Ρόζαλιντ Φράνκλιν', nameEn: 'Rosalind Franklin', emoji: '🧬',
    yes: ['woman', 'scientist', 'britain', 'poorInLife'],
    clues: {
      el: [
        'Στα δεκαπέντε της είχε ήδη αποφασίσει ότι θα γινόταν επιστήμονας, τότε που λίγοι έπαιρναν στα σοβαρά ένα κορίτσι με τέτοια όνειρα.',
        'Έγινε από τους καλύτερους στον κόσμο στο να φωτογραφίζει κρυστάλλους με ακτίνες Χ, για να φανερώνει το κρυφό τους σχήμα.',
        'Ρύθμιζε τα μηχανήματά της με χειρουργική ακρίβεια και περίμενε δεκάδες ώρες για κάθε μία φωτογραφία.',
        'Η «Φωτογραφία 51» που τράβηξε έδειχνε ένα σχήμα σαν Χ, που φανέρωνε μια στριφτή σκάλα.',
        'Δύο επιστήμονες είδαν τη φωτογραφία της χωρίς την άδειά της και έφτιαξαν το μοντέλο της διπλής έλικας του DNA.',
      ],
      en: [
        'By the age of fifteen she had already decided she would be a scientist, at a time when few took such a girl seriously.',
        'She became one of the best in the world at photographing crystals with X-rays to reveal their hidden shapes.',
        'She adjusted her machines with surgical precision and waited dozens of hours for every single photograph.',
        'The Photograph 51 she captured showed an X-shaped pattern that revealed a twisted ladder.',
        'Two scientists saw her photograph without her permission and used it to build the double-helix model of DNA.',
      ],
    },
  },
  {
    id: 48, nameEl: 'Αλεξάντερ Φλέμινγκ', nameEn: 'Alexander Fleming', emoji: '💊',
    yes: ['before1900', 'scientist', 'usedToday', 'olympicOrNobel', 'doctor', 'britain'],
    clues: {
      el: [
        'Μεγάλωσε σε ένα αγρόκτημα στη Σκωτία, ένα από τα οκτώ παιδιά, κι εξερευνούσε ποτάμια και λόφους με τα μάτια ορθάνοιχτα.',
        'Ως στρατιωτικός γιατρός στον πόλεμο είδε στρατιώτες να πεθαίνουν από τα μικρόβια στις πληγές τους, όχι από τις σφαίρες.',
        'Στο εργαστήριό του ήταν διάσημος για δύο πράγματα: το κοφτερό μυαλό του και την ακαταστασία του.',
        'Γύρισε από τις διακοπές και βρήκε μια πρασινωπή μούχλα σε ένα πιατάκι, με όλα τα μικρόβια γύρω της εξαφανισμένα.',
        'Αυτή η μούχλα έγινε η πενικιλίνη, το πρώτο αντιβιοτικό, και του χάρισε το Νόμπελ Ιατρικής.',
      ],
      en: [
        'He grew up on a farm in Scotland, one of eight children, exploring rivers and hills with his eyes wide open.',
        'As an army doctor in the war he saw soldiers die from the germs in their wounds, not from bullets.',
        'In his laboratory he was famous for two things: his sharp mind and his messiness.',
        'He came back from vacation and found a greenish mold on a dish, with all the germs around it gone.',
        'That mold became penicillin, the first antibiotic, and it won him the Nobel Prize in Medicine.',
      ],
    },
  },
  {
    id: 49, nameEl: 'Τζέιν Γκούντολ', nameEn: 'Jane Goodall', emoji: '🐒',
    yes: ['woman', 'scientist', 'britain', 'animals'],
    clues: {
      el: [
        'Όταν ήταν πέντε χρονών κρύφτηκε τέσσερις ώρες στο κοτέτσι για να δει με τα μάτια της πώς η κότα γεννά το αυγό.',
        'Δεν υπήρχαν λεφτά για πανεπιστήμιο, γι\' αυτό δούλεψε σερβιτόρα και γραμματέας για να πληρώσει το εισιτήριο του πλοίου για την Αφρική.',
        'Έζησε σε μια σκηνή μέσα σε δάσος της Τανζανίας και περίμενε μήνες ολόκληρους μέχρι να την εμπιστευτούν τα άγρια ζώα.',
        'Απέδειξε κάτι που σόκαρε τους επιστήμονες: και τα ζώα φτιάχνουν εργαλεία, βουτώντας ένα κλαδάκι σε φωλιά τερμιτών.',
        'Αυτή η Βρετανίδα αφιέρωσε τη ζωή της στη μελέτη και την προστασία των χιμπατζήδων.',
      ],
      en: [
        'When she was five she hid in the henhouse for four hours to see with her own eyes how a hen lays an egg.',
        'There was no money for university, so she worked as a waitress and a secretary to pay for a boat ticket to Africa.',
        'She lived in a tent in a forest in Tanzania and waited for months until the wild animals trusted her.',
        'She proved something that shocked scientists: animals make tools too, dipping a twig into a termite nest.',
        'This British woman spent her life studying and protecting chimpanzees.',
      ],
    },
  },
  {
    id: 50, nameEl: 'Νιλ Άρμστρονγκ', nameEn: 'Neil Armstrong', emoji: '👨‍🚀',
    yes: ['american', 'space'],
    clues: {
      el: [
        'Πήρε δίπλωμα πιλότου στα δεκαέξι του, πριν βγάλει καν δίπλωμα για αυτοκίνητο.',
        'Το 1966 το σκάφος του άρχισε να γυρίζει σαν τρελή σβούρα στο διάστημα, κι εκείνος το σταθεροποίησε ατάραχος.',
        'Προσγείωσε στα χέρια ένα μικρό σκάφος που το έλεγαν Eagle, με καύσιμα για μόλις 30 δευτερόλεπτα ακόμα.',
        '600 εκατομμύρια άνθρωποι κρατούσαν την ανάσα τους μπροστά στην τηλεόραση καθώς κατέβαινε μια σκάλα με λευκή στολή.',
        'Ήταν ο πρώτος άνθρωπος στην ιστορία που πάτησε το πόδι του στη Σελήνη.',
      ],
      en: [
        'He earned his pilot\'s licence at sixteen, before he even had a driver\'s licence for a car.',
        'In 1966 his spacecraft started spinning like a crazy top in space, and he calmly steadied it.',
        'He landed a small craft called Eagle by hand, with only about 30 seconds of fuel left.',
        '600 million people held their breath in front of their televisions as he climbed down a ladder in a white suit.',
        'He was the first human in history to set foot on the Moon.',
      ],
    },
  },
  {
    id: 51, nameEl: 'Σάρα Μπλέικλι', nameEn: 'Sara Blakely', emoji: '✂️',
    yes: ['alive', 'american', 'woman', 'inventor', 'business', 'usedToday', 'famousBrand', 'veryRich'],
    clues: {
      el: [
        'Πουλούσε συσκευές φαξ πόρτα πόρτα στη Φλόριντα και είχε μόνο πέντε χιλιάδες δολάρια στην άκρη.',
        'Δεν είχε λεφτά για δικηγόρο, γι\' αυτό αγόρασε ένα βιβλίο και έγραψε μόνη της την αίτηση για την πατέντα της.',
        'Ένα βράδυ πήρε ένα ψαλίδι, έκοψε τα πατούσια από ένα καλσόν, και εκεί γεννήθηκε η ιδέα της.',
        'Μια διάσημη παρουσιάστρια της τηλεόρασης είπε ότι λατρεύει το προϊόν της, και οι πωλήσεις εκτοξεύτηκαν.',
        'Ίδρυσε τα Spanx και έγινε η νεότερη αυτοδημιούργητη δισεκατομμυριούχος γυναίκα στον κόσμο.',
      ],
      en: [
        'She sold fax machines door to door in Florida and had only five thousand dollars saved.',
        'She had no money for a lawyer, so she bought a textbook and wrote her own patent application.',
        'One evening she took a pair of scissors, cut the feet off some pantyhose, and her idea was born.',
        'A famous television host said she loved her product, and sales exploded.',
        'She founded Spanx and became the youngest self-made woman billionaire in the world.',
      ],
    },
  },
  {
    id: 52, nameEl: 'Τζακ Μα', nameEn: 'Jack Ma', emoji: '🛒',
    yes: ['alive', 'tech', 'business', 'usedToday', 'famousBrand', 'asian', 'techFounder'],
    clues: {
      el: [
        'Απέτυχε δύο φορές στις εισαγωγικές εξετάσεις του πανεπιστημίου και πέρασε μόλις με την τρίτη προσπάθεια.',
        'Για εννιά ολόκληρα χρόνια πήγαινε με το ποδήλατο στο ξενοδοχείο της πόλης και ξεναγούσε δωρεάν τουρίστες, μόνο για να μάθει αγγλικά.',
        'Ένα φαστφουντάδικο προσέλαβε τους 23 από τους 24 υποψήφιους, κι εκείνος ήταν ο μόνος που έμεινε απέξω.',
        'Δεν ήξερε να γράφει κώδικα, μάζεψε όμως δεκαεπτά φίλους στο διαμέρισμά του για να φτιάξουν μαζί μια ιστοσελίδα.',
        'Ίδρυσε την Alibaba, τη γιγάντια κινεζική εταιρεία των διαδικτυακών αγορών.',
      ],
      en: [
        'He failed the university entrance exam twice and only passed on his third try.',
        'For nine whole years he rode his bicycle to the town hotel and guided tourists for free, just to learn English.',
        'A fast-food restaurant hired 23 out of 24 applicants, and he was the only one left out.',
        'He could not write code, but he gathered seventeen friends in his apartment to build a website together.',
        'He founded Alibaba, the giant Chinese online shopping company.',
      ],
    },
  },
  {
    id: 53, nameEl: 'Ρίτσαρντ Μπράνσον', nameEn: 'Richard Branson', emoji: '✈️',
    yes: ['alive', 'business', 'usedToday', 'famousBrand', 'space', 'britain', 'veryRich'],
    clues: {
      el: [
        'Στο σχολείο τα γράμματα έμοιαζαν να χορεύουν μπροστά στα μάτια του, και ο διευθυντής του είπε ότι θα καταλήξει είτε στη φυλακή είτε εκατομμυριούχος.',
        'Παράτησε το σχολείο στα δεκαέξι του κι έβγαζε ένα περιοδικό για νέους, κάνοντας τα τηλεφωνήματά του από έναν δημόσιο θάλαμο.',
        'Πουλούσε φτηνούς δίσκους μουσικής, μετά έφτιαξε δική του δισκογραφική και έπειτα δική του αεροπορική εταιρεία.',
        'Προσπάθησε να διασχίσει ωκεανούς με αερόστατο, έπεσε στη θάλασσα και χρειάστηκε να τον σώσουν — κι όμως ξαναπροσπάθησε.',
        'Όλες οι εκατοντάδες εταιρείες του έχουν το ίδιο όνομα, Virgin, ακόμα κι εκείνη που πετάει στο κατώφλι του διαστήματος.',
      ],
      en: [
        'At school the letters seemed to dance in front of his eyes, and his headmaster told him he would end up either in prison or a millionaire.',
        'He left school at sixteen and ran a magazine for young people, making his business calls from a public phone booth.',
        'He sold cheap music records, then built his own record label, and then his own airline.',
        'He tried to cross oceans in a hot air balloon, ended up in the sea and had to be rescued — and still he tried again.',
        'All of his hundreds of companies share the same name, Virgin, even the one that flies to the edge of space.',
      ],
    },
  },
  {
    id: 54, nameEl: 'Σιμόν Μπάιλς', nameEn: 'Simone Biles', emoji: '🤸‍♀️',
    yes: ['alive', 'american', 'woman', 'athlete', 'olympicOrNobel', 'bornAfter1980'],
    clues: {
      el: [
        'Μπήκε σε ανάδοχη οικογένεια στα τρία της, μέχρι που ο παππούς και η γιαγιά της την υιοθέτησαν και της έδωσαν ένα πραγματικό σπίτι στο Τέξας.',
        'Σε μια σχολική εκδρομή στα έξι της άρχισε να αντιγράφει μόνη της τις κινήσεις που είδε, και οι προπονητές έστειλαν γράμμα στο σπίτι της.',
        'Έχει ύψος μόλις 1,42 και μοιάζει μικροσκοπική δίπλα στις αντιπάλους της, πετάει όμως πιο ψηλά από όλες — και κινήσεις στα βιβλία της γυμναστικής φέρουν το όνομά της.',
        'Στους Ολυμπιακούς του Τόκιο σταμάτησε γενναία για να προστατέψει το μυαλό της, και μετά επέστρεψε πιο δυνατή.',
        'Είναι η Αμερικανίδα της ενόργανης γυμναστικής με τα περισσότερα μετάλλια στην ιστορία, με χρυσά στο Ρίο και στο Παρίσι.',
      ],
      en: [
        'She was placed in foster care at three, until her grandfather and grandmother adopted her and gave her a real home in Texas.',
        'On a school trip at six she started copying the moves she saw all by herself, and the coaches sent a letter to her home.',
        'She is only 1.42 metres tall and looks tiny beside her rivals, but she flies higher than all of them — and moves in the gymnastics rulebooks carry her name.',
        'At the Tokyo Olympics she bravely stopped competing to protect her mind, and then came back stronger.',
        'She is the American gymnast with more medals than anyone in the history of the sport, with golds in Rio and in Paris.',
      ],
    },
  },
  {
    id: 55, nameEl: 'Λεμπρόν Τζέιμς', nameEn: 'LeBron James', emoji: '🏀',
    yes: ['alive', 'american', 'athlete', 'olympicOrNobel', 'ballSport', 'teamSport', 'bornAfter1980'],
    clues: {
      el: [
        'Γεννήθηκε στο Άκρον του Οχάιο, όταν η μητέρα του ήταν μόλις δεκαέξι χρονών.',
        'Μέχρι τα δέκα του είχε αλλάξει πάνω από δώδεκα σπίτια, και μια χρονιά έχασε 83 μέρες σχολείου.',
        'Ένας προπονητής τον φιλοξένησε στο σπίτι του και του έδωσε πρόγραμμα και μια μπασκέτα στην αυλή — την επόμενη χρονιά δεν έχασε ούτε μία μέρα σχολείου.',
        'Το 2016 η ομάδα του έχανε 3-1 στους τελικούς, κι εκείνος έφερε στο Κλίβελαντ τον πρώτο τίτλο μετά από 52 χρόνια.',
        'Είναι ο μπασκετμπολίστας με τους περισσότερους πόντους στην ιστορία του NBA, και άνοιξε σχολείο για παιδιά στην πόλη του.',
      ],
      en: [
        'He was born in Akron, Ohio, when his mother was only sixteen years old.',
        'By the age of ten he had moved house more than twelve times, and one year he missed 83 days of school.',
        'A coach took him into his home and gave him a routine and a basketball hoop in the yard — the next year he did not miss a single day of school.',
        'In 2016 his team was losing 3-1 in the finals, and he brought Cleveland its first title in 52 years.',
        'He is the basketball player with the most points in NBA history, and he opened a school for kids in his home town.',
      ],
    },
  },
  {
    id: 56, nameEl: 'Ρότζερ Φέντερερ', nameEn: 'Roger Federer', emoji: '🎾',
    yes: ['alive', 'athlete', 'olympicOrNobel', 'ballSport', 'bornAfter1980'],
    clues: {
      el: [
        'Μικρός θύμωνε με κάθε λάθος, πετούσε τη ρακέτα του και έκλαιγε στο γήπεδο, κι οι γονείς του έφευγαν από ντροπή.',
        'Ξεκίνησε ως μπαλάκι-μπόι στο τουρνουά της πόλης του, στην Ελβετία, ονειρευόμενος να παίξει κι εκείνος εκεί.',
        'Στα δεκαεννιά του νίκησε τον μεγάλο του ήρωα πάνω στο γρασίδι του Wimbledon.',
        'Αποκάλυψε ένα στατιστικό που σοκάρει: σε ολόκληρη την καριέρα του κέρδισε μόνο το 54 τοις εκατό των πόντων.',
        'Κατέκτησε 20 Grand Slam, τα 8 στο Wimbledon, και τον έλεγαν Μαέστρο για την κομψότητά του.',
      ],
      en: [
        'As a boy he raged at every mistake, threw his racket and cried on court, and his parents walked away in embarrassment.',
        'He started out as a ball boy at his home town tournament in Switzerland, dreaming of playing there himself.',
        'At nineteen he beat his great hero on the grass of Wimbledon.',
        'He revealed a shocking statistic: across his whole career he won only 54 percent of the points he played.',
        'He collected 20 Grand Slam titles, 8 of them at Wimbledon, and people called him the Maestro for his elegance.',
      ],
    },
  },
  {
    id: 57, nameEl: 'Χέντι Λαμάρ', nameEn: 'Hedy Lamarr', emoji: '📶',
    yes: ['woman', 'inventor', 'tech', 'artist', 'usedToday', 'film'],
    clues: {
      el: [
        'Ένας συνθέτης τη βοήθησε να μετατρέψει τα πλήκτρα ενός πιάνου σε μυστικό κώδικα.',
        'Σκέφτηκε ένα σήμα που πηδάει από συχνότητα σε συχνότητα, ώστε να μην μπορεί να το πιάσει ο εχθρός.',
        'Το Hollywood την έλεγε την πιο όμορφη γυναίκα του κόσμου, μα κανείς δεν ρωτούσε τι σκέφτεται.',
        'Η εφεύρεσή της έμεινε χρόνια κλειδωμένη σε ένα συρτάρι και μετά βοήθησε να φτιαχτούν το Bluetooth και το GPS.',
        'Ηθοποιός γεννημένη στη Βιέννη, που η ιδέα της έγινε θεμέλιο για το WiFi.',
      ],
      en: [
        'A composer helped her turn piano keys into a secret code.',
        'She thought of a signal that hops from frequency to frequency, so the enemy can never catch it.',
        'Hollywood called her the most beautiful woman in the world, but nobody asked what she was thinking.',
        'Her invention sat locked in a drawer for years, then helped create Bluetooth and GPS.',
        'An actress born in Vienna whose idea became a foundation for WiFi.',
      ],
    },
  },
  {
    id: 58, nameEl: 'Γκρέις Χόπερ', nameEn: 'Grace Hopper', emoji: '🐛',
    yes: ['american', 'woman', 'scientist', 'inventor', 'tech', 'usedToday', 'teacher'],
    clues: {
      el: [
        'Μικρή ξεβίδωσε εφτά ξυπνητήρια για να δει πώς δουλεύουν.',
        'Το Ναυτικό την απέρριψε επειδή ήταν 36 χρονών και πολύ λεπτή, όμως εκείνη κατέληξε ναύαρχος.',
        'Σκέφτηκε ότι μπορούμε να μιλάμε στους υπολογιστές με λέξεις κι όχι μόνο με αριθμούς, κι έφτιαξε το πρώτο πρόγραμμα-μεταφραστή.',
        'Η ομάδα της βρήκε έναν αληθινό σκόρο μέσα στα κυκλώματα ενός υπολογιστή και τον κόλλησε στο ημερολόγιο.',
        'Εξαιτίας της, κάθε σφάλμα υπολογιστή το λέμε μέχρι σήμερα bug, δηλαδή ζουζούνι.',
      ],
      en: [
        'As a little girl she unscrewed seven alarm clocks to see how they worked.',
        'The Navy turned her down for being 36 and too thin, yet she ended up an admiral.',
        'She thought we could talk to computers with words, not just numbers, so she built the first translator program.',
        'Her team found a real moth inside a computer\'s circuits and taped it into the logbook.',
        'Because of her, we still call every computer mistake a bug.',
      ],
    },
  },
  {
    id: 59, nameEl: 'Τζένσεν Χουάνγκ', nameEn: 'Jensen Huang', emoji: '🎮',
    yes: ['alive', 'american', 'inventor', 'tech', 'business', 'usedToday', 'famousBrand', 'asian', 'techFounder'],
    clues: {
      el: [
        'Στα 15 του έπλενε πιάτα σε ένα εστιατόριο και έλεγε περήφανος πως ήταν ο καλύτερος πλύστης πιάτων που πέρασε από εκεί.',
        'Η εταιρεία του γεννήθηκε σε ένα τραπεζάκι αυτού του ίδιου εστιατορίου, ανάμεσα σε καφέδες.',
        'Φοράει πάντα ένα μαύρο δερμάτινο μπουφάν.',
        'Τα τσιπ του πρώτα ομόρφυναν τα γραφικά στα βιντεοπαιχνίδια και μετά κίνησαν την τεχνητή νοημοσύνη.',
        'Είναι το αφεντικό της Nvidia, της εταιρείας με τις κάρτες γραφικών GeForce.',
      ],
      en: [
        'At fifteen he washed dishes in a restaurant, and he proudly said he was the best dishwasher they ever had.',
        'His company was born at a booth in that same restaurant, over cups of coffee.',
        'He always wears a black leather jacket.',
        'His chips first made video game graphics beautiful, then ended up powering artificial intelligence.',
        'He is the boss of Nvidia, the company behind GeForce graphics cards.',
      ],
    },
  },
  {
    id: 60, nameEl: 'Τσάρλι Τσάπλιν', nameEn: 'Charlie Chaplin', emoji: '🎩',
    yes: ['before1900', 'business', 'artist', 'usedToday', 'film', 'britain', 'poorInLife'],
    clues: {
      el: [
        'Η μητέρα του τού έμαθε να μιμείται τους περαστικούς κάτω από το παράθυρό τους.',
        'Μεγάλωσε πεινασμένος στα φτωχά σοκάκια του Λονδίνου και μετά ταξίδεψε με έναν θίασο στην Αμερική.',
        'Στενό σακάκι, φαρδύ παντελόνι, τεράστια παπούτσια, μπαστούνι και ένα μικρό μουστάκι τον έκαναν θρύλο.',
        'Στις ταινίες του δεν ακούγεται ούτε μια λέξη, κι όμως έκανε όλον τον πλανήτη να γελάει και να δακρύζει.',
        'Έπαιζε τον Αλητάκο με το καπελάκι, σε ταινίες όπως το Χαμίνι και οι Μοντέρνοι Καιροί.',
      ],
      en: [
        'His mother taught him to imitate the people passing by under their window.',
        'He grew up hungry in London\'s poorest alleys, then sailed to America with a theater troupe.',
        'A tight jacket, baggy trousers, enormous shoes, a cane and a tiny mustache made him a legend.',
        'Not one word is spoken in his films, and still he made the whole planet laugh and cry.',
        'He played the Tramp with the bowler hat, in films like The Kid and Modern Times.',
      ],
    },
  },
  {
    id: 61, nameEl: 'Μπάνκσι', nameEn: 'Banksy', emoji: '🎨',
    yes: ['alive', 'artist', 'usedToday', 'painter', 'britain'],
    clues: {
      el: [
        'Κόβει μια φιγούρα πάνω σε χαρτόνι, για να τη βάψει σε έναν τοίχο μέσα σε δευτερόλεπτα.',
        'Έχει κρεμάσει κρυφά δικά του έργα μέσα σε μεγάλα μουσεία, για να δει πόσο θα αργήσουν να το προσέξουν.',
        'Τα έργα του εμφανίζονται μέσα σε μια νύχτα στους τοίχους των πόλεων, κι όμως δεν έδειξε ποτέ το πρόσωπό του.',
        'Ένα έργο του κόπηκε μόνο του σε λωρίδες μέσα στην κορνίζα, τη στιγμή ακριβώς που πουλήθηκε σε δημοπρασία.',
        'Ο πιο διάσημος καλλιτέχνης του δρόμου, από το Μπρίστολ: δικό του είναι το κορίτσι με το κόκκινο μπαλόνι.',
      ],
      en: [
        'He cuts a figure out of cardboard so he can spray it onto a wall in seconds.',
        'He has secretly hung his own works inside great museums, just to see how long anyone takes to notice.',
        'His pictures appear overnight on city walls, yet he has never shown his face.',
        'One of his works sliced itself into strips inside its frame at the very second it was sold at auction.',
        'The world\'s most famous street artist, from Bristol: the girl with the red balloon is his.',
      ],
    },
  },
  {
    id: 62, nameEl: 'Αντέλ', nameEn: 'Adele', emoji: '🎤',
    yes: ['alive', 'woman', 'artist', 'usedToday', 'music', 'britain', 'bornAfter1980'],
    clues: {
      el: [
        'Μεγάλωσε σε ένα μικρό διαμέρισμα του Λονδίνου, ακούγοντας ξανά και ξανά τους δίσκους της μητέρας της για να καταλάβει πώς μια φωνή σε κάνει να ανατριχιάζεις.',
        'Πριν βγει στη σκηνή έτρεμε και της ερχόταν αναγούλα από το άγχος.',
        'Μια εγχείρηση στις φωνητικές της χορδές την άφησε εβδομάδες χωρίς να μιλάει καθόλου, και φοβήθηκε πως δεν θα ξανατραγουδούσε.',
        'Γύρισε στη σκηνή στα βραβεία Grammy και σήκωσε έξι βραβεία σε μία μόνο βραδιά.',
        'Αγγλίδα τραγουδίστρια με τεράστια φωνή: τα άλμπουμ της λέγονται 19, 21 και 25.',
      ],
      en: [
        'She grew up in a small London flat, playing her mother\'s records over and over to work out how a voice can give you goosebumps.',
        'Before walking on stage she would tremble and feel sick with nerves.',
        'Surgery on her vocal cords left her weeks without speaking a single word, and she feared she would never sing again.',
        'She came back on stage at the Grammy Awards and lifted six trophies in one night.',
        'An English singer with a huge soulful voice: her albums are called 19, 21 and 25.',
      ],
    },
  },
  {
    id: 63, nameEl: 'Κάθριν Τζόνσον', nameEn: 'Katherine Johnson', emoji: '🚀',
    yes: ['american', 'woman', 'scientist', 'space', 'poorInLife'],
    clues: {
      el: [
        'Μικρή μετρούσε τα πάντα: τα σκαλιά, τα πιάτα, τα αστέρια, ακόμα και τα βήματα μέχρι την εκκλησία.',
        'Ο πατέρας της μετακόμιζε την οικογένεια 200 χιλιόμετρα μακριά κάθε σχολική χρονιά για να συνεχίσει το σχολείο, κι εκείνη μπήκε στο πανεπιστήμιο στα δεκαπέντε της.',
        'Την έλεγαν ανθρώπινο υπολογιστή, γιατί έκανε με το χέρι τους υπολογισμούς για τους πυραύλους, καθισμένη σε ξεχωριστό τραπέζι εξαιτίας του χρώματός της.',
        'Ένας αστροναύτης δεν δεχόταν να κάνει τον γύρο της Γης, αν δεν έλεγχε πρώτα εκείνη τους αριθμούς με το χέρι.',
        'Οι υπολογισμοί της έστειλαν τους πρώτους Αμερικανούς στο διάστημα και βοήθησαν το Apollo 11 να φτάσει στη Σελήνη· η ταινία Hidden Figures λέει την ιστορία της.',
      ],
      en: [
        'As a little girl she counted everything: the stairs, the dishes, the stars, even the steps to church.',
        'Her father moved the family 120 miles away every school year so she could keep learning, and she started college at fifteen.',
        'They called her a human computer, because she did the rocket calculations by hand, sitting at a separate table because of her skin color.',
        'An astronaut refused to orbit the Earth unless she checked the numbers by hand first.',
        'Her calculations sent the first Americans into space and helped Apollo 11 reach the Moon; the film Hidden Figures tells her story.',
      ],
    },
  },
  {
    id: 64, nameEl: 'Αρχιμήδης', nameEn: 'Archimedes', emoji: '🛁',
    yes: ['ancient', 'before1900', 'greek', 'scientist', 'inventor', 'usedToday'],
    clues: {
      el: [
        'Ξεχνούσε να φάει και σχεδίαζε τα σχήματά του ακόμα και μέσα στις στάχτες του τζακιού.',
        'Ένας βασιλιάς του ζήτησε να βρει αν το στέμμα του ήταν από καθαρό χρυσάφι, χωρίς όμως να το λιώσει.',
        'Έλεγε πως αν του έδιναν ένα σταθερό σημείο να πατήσει, θα μετακινούσε ολόκληρη τη Γη με έναν μοχλό.',
        'Οι πολεμικές μηχανές και οι γερανοί του κράτησαν τον ρωμαϊκό στρατό μακριά από τις Συρακούσες για χρόνια.',
        'Μπαίνοντας στη μπανιέρα του είδε το νερό να ανεβαίνει και πετάχτηκε έξω φωνάζοντας Εύρηκα!',
      ],
      en: [
        'He would forget to eat and sketched his diagrams even in the ashes of the fireplace.',
        'A king asked him to find out whether his crown was pure gold, without melting it down.',
        'He said that given a firm place to stand, he could move the whole Earth with a lever.',
        'His war machines and ship-lifting cranes kept the Roman army away from Syracuse for years.',
        'Stepping into his bath he saw the water rise and leaped out shouting Eureka!',
      ],
    },
  },
  {
    id: 65, nameEl: 'Καρλ Σαγκάν', nameEn: 'Carl Sagan', emoji: '🔭',
    yes: ['american', 'scientist', 'space', 'writer', 'teacher'],
    clues: {
      el: [
        'Μικρό παιδί στο Μπρούκλιν, πήρε την πρώτη του κάρτα βιβλιοθήκης και διάβασε ότι κάθε αστέρι είναι ένας ήλιος πολύ μακριά.',
        'Βοήθησε τη NASA σε αποστολές προς την Αφροδίτη, τον Άρη και τους μακρινούς πλανήτες.',
        'Έβαλε μουσική και χαιρετισμούς από τη Γη σε έναν χρυσό δίσκο που ταξιδεύει τώρα έξω από το ηλιακό μας σύστημα.',
        'Ζήτησε από ένα διαστημόπλοιο να γυρίσει την κάμερά του και να φωτογραφίσει τη Γη: μια χλωμή γαλάζια κουκκίδα μέσα στο σκοτάδι.',
        'Ο Αμερικανός αστρονόμος της τηλεοπτικής σειράς «Cosmos», που έμαθε εκατομμύρια παιδιά να αγαπούν τα αστέρια.',
      ],
      en: [
        'As a little boy in Brooklyn he got his first library card and read that every star is a sun, just very far away.',
        'He helped NASA with missions to Venus, Mars and the far-away planets.',
        'He put music and greetings from Earth on a golden record that is now flying beyond our solar system.',
        'He asked a spacecraft to turn its camera around and photograph Earth: a pale blue dot in the darkness.',
        'The American astronomer of the TV series Cosmos, who taught millions of children to love the stars.',
      ],
    },
  },
  {
    id: 66, nameEl: 'Μαντάμ Σι Τζέι Γουόκερ', nameEn: 'Madam C.J. Walker', emoji: '💇‍♀️',
    yes: ['before1900', 'american', 'woman', 'inventor', 'business', 'usedToday', 'famousBrand', 'veryRich'],
    clues: {
      el: [
        'Γεννήθηκε σε μια φυτεία της Λουιζιάνα, το πρώτο παιδί της οικογένειάς της που γεννήθηκε ελεύθερο.',
        'Δούλευε πλύστρα για ενάμισι δολάριο τη μέρα, ώσπου άρχισαν να της πέφτουν τα μαλλιά.',
        'Αντί να το βάλει κάτω, έφτιαξε μόνη της μια κρέμα για το κεφάλι — και τα μαλλιά της ξαναμεγάλωσαν.',
        'Πούλαγε τα προϊόντα μαλλιών της πόρτα-πόρτα και εκπαίδευσε χιλιάδες γυναίκες να κερδίζουν δικά τους λεφτά πουλώντας τα.',
        'Η πρώτη γυναίκα στην Αμερική που έγινε εκατομμυριούχος μόνη της, με ένα εργοστάσιο καλλυντικών που είχε το δικό της όνομα.',
      ],
      en: [
        'She was born on a Louisiana plantation, the first child in her family born free.',
        'She worked as a laundress for a dollar and a half a day, until her own hair began falling out.',
        'Instead of giving up, she mixed her own scalp cream — and her hair grew back.',
        'She sold her hair products door to door and trained thousands of women to earn their own money selling them.',
        'The first woman in America to make a million dollars all by herself, with a beauty factory that carried her own name.',
      ],
    },
  },
  {
    id: 67, nameEl: 'Φιλ Νάιτ', nameEn: 'Phil Knight', emoji: '👟',
    yes: ['alive', 'american', 'business', 'usedToday', 'famousBrand'],
    clues: {
      el: [
        'Ήταν δρομέας στο πανεπιστήμιο, καλός αλλά ποτέ πρωταθλητής — είχε όμως ένα χάρισμα: παρατηρούσε τα πάντα.',
        'Έγραψε μια φοιτητική εργασία με μια τολμηρή ιδέα και μετά ταξίδεψε μόνος στην Ιαπωνία για να την κάνει αλήθεια.',
        'Τα Σαββατοκύριακα γέμιζε το πορτμπαγκάζ του αυτοκινήτου του με παπούτσια και τα πούλαγε στους αγώνες στίβου.',
        'Ο προπονητής-συνέταιρός του έκαψε τη βαφλιέρα της γυναίκας του ψήνοντας λάστιχο, για να φτιάξει σόλα που κολλάει στο έδαφος.',
        'Ονόμασε την εταιρεία παπουτσιών του από την αρχαία ελληνική θεά της νίκης και πλήρωσε μόλις 35 δολάρια για το σήμα swoosh.',
      ],
      en: [
        'He was a runner at university, good but never a champion — yet he had one gift: he noticed everything.',
        'He wrote a school paper with a bold idea, then flew alone to Japan to make it come true.',
        'On weekends he filled the trunk of his car with shoes and sold them at track meets.',
        'His coach and partner ruined his wife\'s waffle iron cooking rubber, to make a sole that grips the ground.',
        'He named his shoe company after the ancient Greek goddess of victory and paid just 35 dollars for the swoosh logo.',
      ],
    },
  },
  {
    id: 68, nameEl: 'Πελέ', nameEn: 'Pelé', emoji: '⚽',
    yes: ['athlete', 'ballSport', 'teamSport'],
    clues: {
      el: [
        'Γυάλιζε παπούτσια για λίγα κέρματα σε μια φτωχή πόλη της Βραζιλίας και έπαιζε ξυπόλητος στους χωματόδρομους.',
        'Η πρώτη του μπάλα ήταν μια κάλτσα γεμισμένη με εφημερίδες και δεμένη με σπάγκο.',
        'Στα δέκα του είδε τον πατέρα του να κλαίει και του υποσχέθηκε ότι θα κέρδιζε γι\' αυτόν το Παγκόσμιο Κύπελλο.',
        'Στα δεκαεπτά του σκόραρε δύο γκολ σε τελικό Παγκοσμίου Κυπέλλου και έκλαψε από χαρά στους ώμους των συμπαικτών του.',
        'Κέρδισε τρία Παγκόσμια Κύπελλα, σκόραρε πάνω από χίλια γκολ και όλος ο κόσμος τον φώναζε Βασιλιά του ποδοσφαίρου.',
      ],
      en: [
        'He shined shoes for a few coins in a poor Brazilian town and played barefoot on the dirt roads.',
        'His first ball was a sock stuffed with newspapers and tied up with string.',
        'At ten he saw his father cry and promised him he would win the World Cup for him one day.',
        'At seventeen he scored two goals in a World Cup final and wept with joy on his teammates\' shoulders.',
        'He won three World Cups, scored more than a thousand goals, and the whole world called him the King of football.',
      ],
    },
  },
  {
    id: 69, nameEl: 'Γιούσρα Μαρντίνι', nameEn: 'Yusra Mardini', emoji: '🏊‍♀️',
    yes: ['alive', 'woman', 'athlete', 'asian', 'bornAfter1980'],
    clues: {
      el: [
        'Ο πατέρας της την προπονούσε από μικρή σε ένα κολυμβητήριο στη Δαμασκό, μέχρι που οι βόμβες έπεσαν δίπλα του.',
        'Στα 17 της μπήκε με την αδερφή της σε μια μικρή φουσκωτή βάρκα που χωρούσε 7 ανθρώπους, μαζί με άλλους 18.',
        'Όταν η μηχανή σταμάτησε στη μέση της θάλασσας, βούτηξε στο σκοτεινό νερό και έσπρωχνε τη βάρκα πάνω από τρεις ώρες.',
        'Έφτασε κολυμπώντας στη Λέσβο και έσωσε είκοσι ανθρώπους που δεν ήξεραν κολύμπι.',
        'Έναν χρόνο αργότερα στάθηκε στον βατήρα στο Ρίο με την πρώτη Ολυμπιακή Ομάδα Προσφύγων και κέρδισε τη σειρά της στα 100 μέτρα πεταλούδα.',
      ],
      en: [
        'Her father trained her from a young age in a pool in Damascus, until the bombs fell right beside it.',
        'At 17 she climbed with her sister into a small inflatable boat built for 7, along with 18 other people.',
        'When the engine died in the middle of the sea, she slipped into the dark water and pushed the boat for over three hours.',
        'She swam all the way to the Greek island of Lesbos and saved twenty people who could not swim.',
        'One year later she stood on the starting block in Rio with the first Refugee Olympic Team and won her heat in the 100 metre butterfly.',
      ],
    },
  },
  {
    id: 70, nameEl: 'Μάργκαρετ Χάμιλτον', nameEn: 'Margaret Hamilton', emoji: '👩‍💻',
    yes: ['alive', 'american', 'woman', 'scientist', 'inventor', 'tech', 'space'],
    clues: {
      el: [
        'Αγαπούσε τα μαθηματικά σε μια εποχή που κανείς δεν το περίμενε από ένα κορίτσι, και έγραφε προγράμματα που προέβλεπαν τον καιρό.',
        'Έπαιρνε τη μικρή της κόρη στο εργαστήριο τα βράδια, κι εκείνη έπαιζε τον αστροναύτη και κράσαρε τον προσομοιωτή.',
        'Η δουλειά της ήταν τόσο καινούρια που δεν είχε καν όνομα, κι έτσι της έδωσε ένα: «μηχανική λογισμικού».',
        'Τρία λεπτά πριν την προσεδάφιση στη Σελήνη ο υπολογιστής χτύπησε συναγερμούς, μα ο κώδικάς της ήξερε τι να αφήσει στην άκρη.',
        'Ήταν επικεφαλής της ομάδας που έγραψε το πρόγραμμα το οποίο οδήγησε με ασφάλεια το Apollo 11 στο φεγγάρι.',
      ],
      en: [
        'She loved mathematics at a time when nobody expected that from a girl, and she wrote programs that predicted the weather.',
        'She brought her little daughter to the lab at night, and the girl played astronaut and crashed the simulator.',
        'Her job was so new it did not even have a name, so she gave it one: software engineering.',
        'Three minutes before the Moon landing the computer screamed alarms, but her code knew which tasks to set aside.',
        'She led the team that wrote the program which carried Apollo 11 safely down to the Moon.',
      ],
    },
  },
  {
    id: 71, nameEl: 'Σάτια Ναντέλα', nameEn: 'Satya Nadella', emoji: '☁️',
    yes: ['alive', 'tech', 'business', 'usedToday', 'famousBrand', 'asian'],
    clues: {
      el: [
        'Μικρός στην Ινδία ονειρευόταν να γίνει επαγγελματίας παίκτης του κρίκετ, κι εκείνο του έμαθε πώς κερδίζει μια ομάδα.',
        'Δούλεψε ήσυχα, χωρίς φωνές και χωρίς πρωτοσέλιδα, είκοσι δύο ολόκληρα χρόνια στην ίδια εταιρεία υπολογιστών.',
        'Ο γιος του, που γεννήθηκε με εγκεφαλική παράλυση, του έμαθε το πιο σημαντικό μάθημα: την ενσυναίσθηση.',
        'Όταν έγινε αρχηγός, ζήτησε από όλους να πάψουν να παριστάνουν τους ξερόλες και να γίνουν άνθρωποι που θέλουν να μαθαίνουν.',
        'Το 2014 έγινε ο τρίτος διευθύνων σύμβουλος της εταιρείας που φτιάχνει τα Windows και το Xbox και την οδήγησε στο cloud.',
      ],
      en: [
        'As a boy in India he dreamed of being a professional cricket player, and cricket taught him how a team really wins.',
        'He worked quietly, with no shouting and no headlines, for twenty-two whole years at the same computer company.',
        'His son, born with cerebral palsy, taught him the most important lesson of all: empathy.',
        'When he became the boss, he asked everyone to stop being know-it-alls and become learn-it-alls instead.',
        'In 2014 he became the third chief executive of the company that makes Windows and Xbox, and led it into the cloud.',
      ],
    },
  },
  {
    id: 72, nameEl: 'Μπομπ Μάρλεϊ', nameEn: 'Bob Marley', emoji: '🎸',
    yes: ['artist', 'music'],
    clues: {
      el: [
        'Γεννήθηκε σε ένα μικρό χωριό στα καταπράσινα βουνά της Τζαμάικα και μεγάλωσε χωρίς πατέρα και χωρίς χρήματα.',
        'Στη φτωχή γειτονιά Trenchtown, εκεί που οι άλλοι έβλεπαν μόνο τσιμέντο, εκείνος άκουγε ρυθμούς.',
        'Με τους φίλους του τον Bunny και τον Peter έφτιαξαν ένα συγκρότημα και τραγουδούσαν για τη φτώχεια, την ελπίδα και την αγάπη.',
        'Δύο μέρες αφότου ένοπλοι τον πυροβόλησαν μέσα στο σπίτι του, ανέβηκε στη σκηνή με τραυματισμένο χέρι και τραγούδησε σε 80.000 ανθρώπους.',
        'Ο βασιλιάς της μουσικής ρέγκε από την Τζαμάικα, που ένωσε στη σκηνή τα χέρια δύο αντίπαλων πολιτικών κι έφυγε μόλις στα 36 του.',
      ],
      en: [
        'He was born in a tiny village in the green mountains of Jamaica and grew up with no father and no money.',
        'In the poor neighborhood of Trenchtown, where others saw only concrete, he heard rhythms.',
        'With his friends Bunny and Peter he formed a band, and they sang about poverty, hope and love.',
        'Two days after armed men shot him inside his own house, he walked on stage with a wounded arm and sang for 80,000 people.',
        'The king of reggae music from Jamaica, who joined the hands of two rival politicians on stage and died at only 36.',
      ],
    },
  },
  {
    id: 73, nameEl: 'Χαγιάο Μιγιαζάκι', nameEn: 'Hayao Miyazaki', emoji: '🎬',
    yes: ['alive', 'business', 'artist', 'usedToday', 'famousBrand', 'painter', 'film', 'asian'],
    clues: {
      el: [
        'Η οικογένειά του έφτιαχνε εξαρτήματα αεροπλάνων, κι εκείνος γέμιζε τετράδια με φτερά και προπέλες.',
        'Ζωγράφιζε τέλεια αεροπλάνα, αλλά δυσκολευόταν πολύ να ζωγραφίσει ανθρώπους, γι\' αυτό εξασκήθηκε μέχρι να γίνει από τους καλύτερους του κόσμου.',
        'Μία ταινία του μπορεί να χρειαστεί πάνω από εκατό χιλιάδες σχέδια, φτιαγμένα όλα στο χέρι.',
        'Ίδρυσε με έναν φίλο του ένα θρυλικό ιαπωνικό στούντιο κινουμένων σχεδίων και κέρδισε δύο Όσκαρ.',
        'Από το μολύβι του βγήκε ο Τοτόρο, το μεγάλο χνουδωτό πλάσμα του δάσους.',
      ],
      en: [
        'His family made airplane parts, and he filled notebooks with drawings of wings and propellers.',
        'He could draw perfect airplanes but struggled badly to draw people, so he practiced until he became one of the best in the world.',
        'One of his movies can need more than a hundred thousand drawings, all made by hand.',
        'With a friend he founded a legendary Japanese animation studio, and he won two Oscars.',
        'Totoro, the big furry forest creature, came out of his pencil.',
      ],
    },
  },
  {
    id: 74, nameEl: 'Λουί Παστέρ', nameEn: 'Louis Pasteur', emoji: '🦠',
    yes: ['before1900', 'scientist', 'inventor', 'usedToday', 'doctor', 'food'],
    clues: {
      el: [
        'Ήταν γιος ενός φτωχού βυρσοδέψη και στο σχολείο αγαπούσε πιο πολύ τη ζωγραφική από τα βιβλία.',
        'Οι γιατροί γελούσαν όταν έλεγε ότι αόρατα πλασματάκια μας αρρωσταίνουν, κι εκείνος απαντούσε με πειράματα και όχι με φωνές.',
        'Βρήκε τρόπο να ζεσταίνει απαλά το γάλα, ώστε να σκοτώνονται τα μικρόβια μέσα του.',
        'Η λέξη που γράφει το κουτί του γάλακτός σου βγήκε από το όνομά του.',
        'Έσωσε ένα εννιάχρονο αγόρι, δαγκωμένο 14 φορές από λυσσασμένο σκύλο, με το πρώτο εμβόλιο κατά της λύσσας.',
      ],
      en: [
        'He was the son of a poor leather tanner, and at school he loved painting more than books.',
        'Doctors laughed when he said invisible little creatures make us sick, and he answered with experiments instead of shouting.',
        'He found a way to heat milk gently so the germs inside it die.',
        'The word printed on your milk carton comes from his name.',
        'He saved a nine-year-old boy, bitten 14 times by a mad dog, with the first rabies vaccine.',
      ],
    },
  },
  {
    id: 75, nameEl: 'Ζακ Κουστώ', nameEn: 'Jacques Cousteau', emoji: '🤿',
    yes: ['scientist', 'inventor', 'artist', 'usedToday', 'film', 'animals'],
    clues: {
      el: [
        'Ήταν ένα αδύνατο, φιλάσθενο αγόρι και οι γιατροί του είπαν να κολυμπάει για να δυναμώσει.',
        'Ένα αυτοκινητιστικό δυστύχημα του έσπασε και τα δύο χέρια και έσβησε το όνειρό του να γίνει πιλότος.',
        'Φόρεσε γυαλιά, βούτηξε το κεφάλι κάτω από την επιφάνεια και ανακάλυψε έναν ολόκληρο κρυμμένο κόσμο.',
        'Με το κόκκινο σκουφάκι του και το πλοίο Calypso εξερεύνησε όλες τις θάλασσες του πλανήτη.',
        'Βοήθησε να φτιαχτεί η συσκευή που αφήνει τους δύτες να αναπνέουν κάτω από το νερό σαν ψάρια.',
      ],
      en: [
        'He was a thin, sickly boy, and the doctors told him to swim so he would grow stronger.',
        'A car accident broke both of his arms and ended his dream of becoming a pilot.',
        'He put on goggles, dipped his head below the surface, and found a whole hidden world.',
        'With his red cap and his ship Calypso he explored every sea on the planet.',
        'He helped invent the device that lets divers breathe underwater like fish.',
      ],
    },
  },
  {
    id: 76, nameEl: 'Αλέξανδρος ο Μέγας', nameEn: 'Alexander the Great', emoji: '⚔️',
    yes: ['ancient', 'before1900', 'greek', 'warrior', 'conqueror'],
    clues: {
      el: [
        'Στα δώδεκα του κατάλαβε ότι ένα ατίθασο μαύρο άλογο φοβόταν τη δική του σκιά, και το γύρισε ήρεμα προς τον ήλιο.',
        'Στα δεκάξι του κυβερνούσε κιόλας ένα ολόκληρο βασίλειο μόνος του, όσο ο πατέρας του έλειπε στον πόλεμο.',
        'Έγινε βασιλιάς στα είκοσι του και σε έντεκα χρόνια πολέμου δεν έχασε ούτε μία μάχη.',
        'Έχτισε στην Αίγυπτο μια πόλη που έγινε για αιώνες το κέντρο της γνώσης όλου του κόσμου.',
        'Αυτός ο νεαρός βασιλιάς της Μακεδονίας έφτασε με τον Βουκεφάλα του από την Ελλάδα ως τα σύνορα της Ινδίας.',
      ],
      en: [
        'At twelve he noticed that a wild black horse was afraid of its own shadow, and he calmly turned it toward the sun.',
        'At sixteen he was already running a whole kingdom by himself, while his father was away at war.',
        'He became king at twenty and in eleven years of war never lost a single battle.',
        'He built a city in Egypt that became the center of knowledge for the whole world for centuries.',
        'This young king of Macedonia rode his horse Bucephalus from Greece all the way to the borders of India.',
      ],
    },
  },
  {
    id: 78, nameEl: 'Ιπποκράτης', nameEn: 'Hippocrates', emoji: '⚕️',
    yes: ['ancient', 'before1900', 'greek', 'scientist', 'usedToday', 'doctor', 'teacher'],
    clues: {
      el: [
        'Όταν κάποιος αρρώσταινε, όλοι έλεγαν ότι θύμωσαν οι θεοί, κι εκείνος ρωτούσε τι έφαγες και πόσο καθαρό νερό ήπιες.',
        'Κατέγραφε τα πάντα με απόλυτη ειλικρίνεια, ακόμη κι όταν ο άρρωστός του δεν γινόταν καλά.',
        'Δίδασκε τους μαθητές του κάτω από έναν μεγάλο πλάτανο, σε ένα μικρό ελληνικό νησί.',
        'Αρνήθηκε τα αμύθητα πλούτη του βασιλιά της Περσίας, γιατί η τέχνη του δεν ήταν για πούλημα.',
        'Οι νέοι γιατροί σε όλο τον κόσμο δίνουν ακόμη τον όρκο που έχει το όνομά του.',
      ],
      en: [
        'When someone fell ill, everyone said the gods were angry, but he asked what you ate and how clean your water was.',
        'He wrote everything down with complete honesty, even when his patient did not get better.',
        'He taught his students under a great plane tree on a small Greek island.',
        'He refused the enormous riches of the king of Persia, because his art was not for sale.',
        'Young doctors all over the world still swear the oath that carries his name.',
      ],
    },
  },
  {
    id: 79, nameEl: 'Λεωνίδας', nameEn: 'Leonidas I', emoji: '🛡️',
    yes: ['ancient', 'before1900', 'greek', 'warrior'],
    clues: {
      el: [
        'Δεν είχε γεννηθεί για τον θρόνο, γι\' αυτό πέρασε από παιδί τη σκληρότερη εκπαίδευση όλης της Ελλάδας.',
        'Όταν ο εχθρός απαίτησε να παραδώσει τα όπλα του, απάντησε με δύο μόνο λέξεις: έλα να τα πάρεις.',
        'Διάλεξε 300 άνδρες και βάδισε σε ένα στενό πέρασμα ανάμεσα στα βουνά και τη θάλασσα.',
        'Για τρεις ολόκληρες μέρες οι ασπίδες τους έγιναν τείχος που ο τεράστιος περσικός στρατός δεν μπορούσε να σπάσει.',
        'Αυτός ο βασιλιάς της Σπάρτης έπεσε στις Θερμοπύλες για να προλάβει να ενωθεί και να μείνει ελεύθερη η Ελλάδα.',
      ],
      en: [
        'He was not born to be king, so as a boy he went through the hardest training in all of Greece.',
        'When the enemy demanded his weapons, he answered with only two words: come and take them.',
        'He chose 300 men and marched to a narrow pass between the mountains and the sea.',
        'For three whole days their shields became a wall that the huge Persian army could not break.',
        'This king of Sparta fell at Thermopylae so that Greece could unite and stay free.',
      ],
    },
  },
  {
    id: 80, nameEl: 'Πυθαγόρας', nameEn: 'Pythagoras', emoji: '📐',
    yes: ['ancient', 'before1900', 'greek', 'scientist', 'usedToday', 'teacher'],
    clues: {
      el: [
        'Περνούσε μια μέρα έξω από ένα σιδεράδικο και άκουσε τα σφυριά να χτυπούν το μέταλλο βγάζοντας διαφορετικές νότες.',
        'Βρήκε ότι, αν κόψεις μια χορδή στη μέση, βγάζει την ίδια νότα μια οκτάβα ψηλότερα: η μουσική κρύβει μέσα της αριθμούς.',
        'Στη σχολή που ίδρυσε οι μαθητές ζούσαν απλά και τα μοιράζονταν όλα, και τα κορίτσια σπούδαζαν ισότιμα με τα αγόρια.',
        'Πίστευε ότι τα πάντα είναι αριθμός, και λένε πως αυτός έπλασε τη λέξη φιλόσοφος.',
        'Κάθε ορθογώνιο τρίγωνο υπακούει στο θεώρημά του: τα τετράγωνα των δύο κάθετων πλευρών κάνουν μαζί το τετράγωνο της υποτείνουσας.',
      ],
      en: [
        'One day he walked past a blacksmith\'s workshop and heard the hammers striking the metal in different musical notes.',
        'He found that if you cut a string in half it plays the same note one octave higher: music hides numbers inside it.',
        'In the school he founded, students lived simply and shared everything, and girls studied as equals beside boys.',
        'He believed that everything is number, and people say he created the word philosopher.',
        'Every right triangle obeys his theorem: the squares of the two short sides add up to the square of the long one.',
      ],
    },
  },
  {
    id: 81, nameEl: 'Ελ Γκρέκο (Δομήνικος Θεοτοκόπουλος)', nameEn: 'El Greco (Domenikos Theotokopoulos)', emoji: '🎨',
    yes: ['before1900', 'greek', 'artist', 'painter'],
    clues: {
      el: [
        'Γεννήθηκε στην Κρήτη και έμαθε εκεί να ζωγραφίζει βυζαντινές εικόνες, και πριν κλείσει τα εικοσιπέντε ήταν ήδη μάστορας.',
        'Ταξίδεψε στη Βενετία και τη Ρώμη για να μελετήσει τα φλογερά χρώματα των μεγάλων Ιταλών ζωγράφων.',
        'Σε έναν Ισπανό βασιλιά δεν άρεσε ο πίνακάς του και δεν του παρήγγειλε ποτέ άλλον, όμως εκείνος δεν άλλαξε στυλ.',
        'Στους πίνακές του οι μορφές μακραίνουν σαν φλόγες και το φως δεν μπαίνει από παράθυρο, λάμπει από μέσα τους.',
        'Στο Τολέδο της Ισπανίας του έδωσαν ένα παρατσούκλι που σήμαινε απλώς ο Έλληνας, κι εκείνος υπέγραφε πάντα με ελληνικά γράμματα.',
      ],
      en: [
        'He was born in Crete and learned to paint Byzantine icons there, and before he turned twenty-five he was already a master.',
        'He traveled to Venice and Rome to study the fiery colors of the great Italian painters.',
        'A Spanish king did not like his painting and never ordered another one, yet he refused to change his style.',
        'In his paintings the figures stretch long like flames, and the light comes from no window, it glows from within.',
        'In Toledo, Spain, they gave him a nickname that simply meant the Greek, and he always signed his work in Greek letters.',
      ],
    },
  },
  {
    id: 82, nameEl: 'Γεώργιος Παπανικολάου', nameEn: 'George Papanicolaou', emoji: '🔬',
    yes: ['before1900', 'greek', 'scientist', 'inventor', 'usedToday', 'doctor', 'poorInLife'],
    clues: {
      el: [
        'Σε μια ξένη χώρα πουλούσε χαλιά και έπαιζε βιολί σε εστιατόρια για να ζήσει.',
        'Περνούσε ατέλειωτες ώρες σκυμμένος στο μικροσκόπιο, κοιτάζοντας μικροσκοπικά κύτταρα.',
        'Όταν παρουσίασε την ανακάλυψή του κανείς δεν του έδωσε σημασία — κι όμως συνέχισε δεκαπέντε χρόνια ακόμη.',
        'Είδε ότι τα άρρωστα κύτταρα φαίνονται διαφορετικά πολύ πριν η αρρώστια γίνει επικίνδυνη.',
        'Ήταν Έλληνας γιατρός στην Αμερική, και ένα απλό τεστ που σώζει εκατομμύρια γυναίκες έχει το όνομά του.',
      ],
      en: [
        'In a foreign country he sold carpets and played the violin in restaurants to survive.',
        'He spent endless hours bent over a microscope, looking at tiny cells.',
        'When he showed his discovery almost nobody listened — yet he kept working for fifteen more years.',
        'He saw that sick cells look different long before the illness becomes dangerous.',
        'He was a Greek doctor in America, and a simple test that saves millions of women carries his name.',
      ],
    },
  },
  {
    id: 83, nameEl: 'Αριστοτέλης Ωνάσης', nameEn: 'Aristotle Onassis', emoji: '🚢',
    yes: ['greek', 'business', 'usedToday', 'famousBrand', 'veryRich'],
    clues: {
      el: [
        'Στα δεκάξι του είδε την πόλη του να καίγεται και την οικογένειά του να χάνει τα πάντα.',
        'Έφτασε μόνος στην Αργεντινή με λίγα δολάρια και δούλευε νύχτες ως τηλεφωνητής.',
        'Στη μεγάλη κρίση, ενώ όλοι πουλούσαν τρομαγμένοι, εκείνος αγόρασε έξι φορτηγά πλοία πάμφθηνα.',
        'Έχτισε τεράστια πλοία που κουβαλούσαν πετρέλαιο και έγινε από τους πλουσιότερους ανθρώπους του κόσμου.',
        'Έλληνας εφοπλιστής που ίδρυσε την Ολυμπιακή Αεροπορία.',
      ],
      en: [
        'At sixteen he watched his home city burn and his family lose everything.',
        'He arrived alone in Argentina with a few dollars and worked nights as a telephone operator.',
        'During the great crisis, while everyone sold in a panic, he bought six cargo ships very cheaply.',
        'He built giant ships that carried oil and became one of the richest men in the world.',
        'A Greek shipowner who founded the airline Olympic Airways.',
      ],
    },
  },
  {
    id: 84, nameEl: 'Μαρία Κάλλας', nameEn: 'Maria Callas', emoji: '🎤',
    yes: ['greek', 'american', 'woman', 'artist', 'music'],
    clues: {
      el: [
        'Ήταν ένα ντροπαλό κορίτσι με χοντρά γυαλιά, που συχνά ένιωθε μόνο και παραμελημένο.',
        'Γεννήθηκε στη Νέα Υόρκη από Έλληνες γονείς και στα δεκατρία της ήρθε στην Αθήνα να σπουδάσει μουσική.',
        'Ερχόταν πρώτη το πρωί στο Ωδείο κι έφευγε τελευταία, μελετώντας κάθε νότα και κάθε λέξη.',
        'Κριτικοί έλεγαν πως η φωνή της ήταν παράξενη — κι όμως το κοινό δάκρυζε όταν τραγουδούσε.',
        'Ο κόσμος την ονόμασε Λα Ντιβίνα: η μεγαλύτερη τραγουδίστρια της όπερας του 20ού αιώνα.',
      ],
      en: [
        'She was a shy girl with thick glasses who often felt lonely and overlooked.',
        'She was born in New York to Greek parents and at thirteen came to Athens to study music.',
        'She arrived first at the Conservatory each morning and left last, studying every note and every word.',
        'Critics said her voice was strange — yet audiences wept when she sang.',
        'The world named her La Divina: the greatest opera singer of the 20th century.',
      ],
    },
  },
  {
    id: 85, nameEl: 'Σπύρος Λούης', nameEn: 'Spyros Louis', emoji: '🏃',
    yes: ['before1900', 'greek', 'athlete', 'olympicOrNobel', 'poorInLife'],
    clues: {
      el: [
        'Κάθε μέρα κουβαλούσε φρέσκο νερό στην πόλη με το κάρο και το άλογό του.',
        'Στον προκριματικό αγώνα τερμάτισε μόλις πέμπτος και κανείς δεν τον υπολόγιζε για φαβορί.',
        'Λένε πως στη μέση της διαδρομής ήπιε μια γουλιά κρασί και είπε ήρεμα πως θα τους προλάβει όλους.',
        'Δύο πρίγκιπες κατέβηκαν στον στίβο και έτρεξαν δίπλα του ως τον τερματισμό.',
        'Το 1896 στην Αθήνα κέρδισε τον πρώτο Μαραθώνιο των σύγχρονων Ολυμπιακών Αγώνων.',
      ],
      en: [
        'Every day he carried fresh water into the city with his cart and his horse.',
        'In the qualifying race he finished only fifth and nobody counted him among the favorites.',
        'They say that halfway through he drank a sip of wine and calmly said he would catch them all.',
        'Two princes came down onto the track and ran beside him to the finish line.',
        'In 1896 in Athens he won the first Marathon of the modern Olympic Games.',
      ],
    },
  },
  {
    id: 86, nameEl: 'Νίκος Καζαντζάκης', nameEn: 'Nikos Kazantzakis', emoji: '✍️',
    yes: ['before1900', 'greek', 'artist', 'usedToday', 'writer'],
    clues: {
      el: [
        'Στον τάφο του, πάνω στα τείχη μιας κρητικής πόλης, γράφει: Δεν ελπίζω τίποτα, δε φοβούμαι τίποτα, είμαι λέφτερος.',
        'Έγραψε τη δική του Οδύσσεια, ένα ποίημα 33.333 στίχων, και την ξαναέγραφε επί χρόνια.',
        'Δούλεψε σε ένα ορυχείο μαζί με έναν εργάτη ξεχειλισμένο από ζωή — κι αργότερα τον έκανε ήρωα βιβλίου.',
        'Λένε πως έχασε ένα μεγάλο βραβείο για μία μόνο ψήφο, κι ο νικητής είπε πως του άξιζε εκατό φορές περισσότερο.',
        'Κρητικός συγγραφέας, διάσημος για το βιβλίο του Βίος και Πολιτεία του Αλέξη Ζορμπά.',
      ],
      en: [
        'On his tomb, on the walls of a Cretan city, it says: I hope for nothing, I fear nothing, I am free.',
        'He wrote his own Odyssey, a poem of 33,333 verses, and rewrote it for years.',
        'He ran a mine with a worker overflowing with life — and later made him the hero of a book.',
        'They say he lost a great prize by a single vote, and the winner said he deserved it a hundred times more.',
        'A writer from Crete, famous for his book Zorba the Greek.',
      ],
    },
  },
  {
    id: 87, nameEl: 'Κωνσταντίνος Καραθεοδωρή', nameEn: 'Constantin Carathéodory', emoji: '📐',
    yes: ['before1900', 'greek', 'scientist', 'teacher'],
    clues: {
      el: [
        'Γεννήθηκε στο Βερολίνο, σε ελληνική οικογένεια διπλωματών, και μιλούσε πολλές γλώσσες από παιδί.',
        'Δούλευε μηχανικός στα φράγματα του Νείλου, και τα βράδια έλυνε προβλήματα μαθηματικών για τη χαρά του.',
        'Στα 27 του παράτησε μια σίγουρη καριέρα για να ξαναρχίσει από την αρχή, απλός φοιτητής.',
        'Ο Αϊνστάιν του έγραφε γράμματα ζητώντας βοήθεια στα δύσκολα μαθηματικά της σχετικότητας.',
        'Καθώς η Σμύρνη χανόταν, έσωσε τα βιβλία και τα όργανα του πανεπιστημίου που είχε στήσει — ο σπουδαιότερος Έλληνας μαθηματικός των νεότερων χρόνων.',
      ],
      en: [
        'He was born in Berlin, into a Greek family of diplomats, and spoke many languages from childhood.',
        'He worked as an engineer on the dams of the Nile, and in the evenings solved maths problems for the joy of it.',
        'At 27 he gave up a secure career to start again from the beginning, as a simple student.',
        'Einstein wrote him letters asking for help with the difficult mathematics of relativity.',
        'As Smyrna was destroyed he saved the books and instruments of the university he had built — the greatest Greek mathematician of modern times.',
      ],
    },
  },
  {
    id: 88, nameEl: 'Βαγγέλης Παπαθανασίου', nameEn: 'Vangelis Papathanassiou', emoji: '🎹',
    yes: ['greek', 'artist', 'usedToday', 'space', 'music'],
    clues: {
      el: [
        'Δεν έμαθε ποτέ να διαβάζει νότες — έπαιζε με τα αυτιά και με την καρδιά.',
        'Στα έξι του χρόνια έδωσε την πρώτη του παράσταση, παίζοντας δικά του κομμάτια.',
        'Στο Λονδίνο γέμισε ένα στούντιο με συνθεσάιζερ κι έφτιαχνε ολομόναχος ολόκληρους κόσμους ήχου.',
        'Η NASA συνόδευσε μια αποστολή στον Άρη με τη μουσική του.',
        'Έλληνας μουσικός που κέρδισε Όσκαρ για τη μουσική της ταινίας Οι Δρόμοι της Φωτιάς.',
      ],
      en: [
        'He never learned to read sheet music — he played by ear and by heart.',
        'At six years old he gave his first performance, playing pieces he had made up himself.',
        'In London he filled a studio with synthesizers and built whole worlds of sound all alone.',
        'NASA accompanied a mission to Mars with his music.',
        'A Greek musician who won an Oscar for the music of the film Chariots of Fire.',
      ],
    },
  },
  {
    id: 89, nameEl: 'Μελίνα Μερκούρη', nameEn: 'Melina Mercouri', emoji: '🏛️',
    yes: ['greek', 'woman', 'artist', 'music', 'film'],
    clues: {
      el: [
        'Όταν οι δικτάτορες της πήραν την ελληνική ιθαγένεια, απάντησε: Εγεννήθην Ελληνίς και θα αποθάνω Ελληνίς.',
        'Έγινε ηθοποιός παρά τις αντιρρήσεις της οικογένειάς της και κέρδισε το βραβείο ερμηνείας στις Κάννες.',
        'Μια ταινία με τίτλο Ποτέ την Κυριακή την έκανε σταρ σε όλο τον κόσμο.',
        'Έγινε η πρώτη γυναίκα Υπουργός Πολιτισμού της Ελλάδας.',
        'Αγωνίστηκε σε όλο τον κόσμο για να γυρίσουν τα Γλυπτά του Παρθενώνα από το Βρετανικό Μουσείο.',
      ],
      en: [
        'When the dictators took away her Greek citizenship, she answered: I was born Greek and I will die Greek.',
        'She became an actress despite her family\'s objections and won the acting prize at Cannes.',
        'A film called Never on Sunday made her a star all over the world.',
        'She became Greece\'s first woman Minister of Culture.',
        'She fought all over the world to bring the Parthenon Sculptures back from the British Museum.',
      ],
    },
  },
  {
    id: 90, nameEl: 'Πύρρος Δήμας', nameEn: 'Pyrros Dimas', emoji: '🏋️',
    yes: ['alive', 'greek', 'athlete', 'olympicOrNobel'],
    clues: {
      el: [
        'Γεννήθηκε σε ένα χωριό της Αλβανίας, αλλά η καρδιά του χτυπούσε ελληνικά.',
        'Από έντεκα χρονών σήκωνε παλιά, σκουριασμένα βάρη και ονειρευόταν κάτι χρυσό.',
        'Στη Βαρκελώνη σήκωσε τη μπάρα πάνω από το κεφάλι του και φώναξε: «Για την Ελλάδα!»',
        'Στην Αθήνα 80.000 άνθρωποι φώναζαν το όνομά του κι εκείνος άφησε τα παπούτσια του πάνω στο βάθρο.',
        'Κέρδισε τρία ολυμπιακά χρυσά μετάλλια στην άρση βαρών για την Ελλάδα.',
      ],
      en: [
        'He was born in a village in Albania, but his heart beat Greek.',
        'From the age of eleven he lifted old, rusty weights and dreamed of something golden.',
        'In Barcelona he raised the bar above his head and shouted: For Greece!',
        'In Athens 80,000 people chanted his name, and he left his shoes on the podium.',
        'He won three Olympic gold medals in weightlifting for Greece.',
      ],
    },
  },
  {
    id: 102, nameEl: 'Ρόμπερτ Κιγιοσάκι', nameEn: 'Robert Kiyosaki', emoji: '💵',
    yes: ['alive', 'american', 'business', 'writer', 'asian', 'teacher'],
    clues: {
      el: [
        'Μεγάλωσε στη Χαβάη και στα εννιά του ρώτησε: πώς γίνεται κάποιος πλούσιος;',
        'Λέει ότι είχε δύο δασκάλους για τα λεφτά: έναν με πολλά πτυχία κι έναν σχεδόν χωρίς κανένα.',
        'Μικρός, μαζί με τον φίλο του, νοίκιαζε παλιά κόμικς στα παιδιά της γειτονιάς.',
        'Διδάσκει ότι κάποια πράγματα βάζουν λεφτά στην τσέπη σου κι άλλα τα βγάζουν.',
        'Έγραψε το διάσημο βιβλίο «Πλούσιος Μπαμπάς, Φτωχός Μπαμπάς».',
      ],
      en: [
        'He grew up in Hawaii, and at nine he asked: how does a person become rich?',
        'He says he had two teachers about money: one with many diplomas and one with almost none.',
        'As a boy, he and his friend rented out old comic books to the neighborhood kids.',
        'He teaches that some things put money into your pocket and others take it out.',
        'He wrote the famous book Rich Dad, Poor Dad.',
      ],
    },
  },
  {
    id: 105, nameEl: 'Γουόρεν Μπάφετ', nameEn: 'Warren Buffett', emoji: '📈',
    yes: ['alive', 'american', 'business', 'veryRich'],
    clues: {
      el: [
        'Μικρός μετρούσε τα πάντα: καπάκια από μπουκάλια, κέρματα, τα αυτοκίνητα που περνούσαν.',
        'Στα έξι του αγόραζε εξάδες αναψυκτικά και πουλούσε τα μπουκαλάκια ένα-ένα στους γείτονες.',
        'Στα έντεκα αγόρασε τις πρώτες του μετοχές, τις πούλησε βιαστικά — κι έμαθε ότι η υπομονή πληρώνει.',
        'Αν και από τους πιο πλούσιους ανθρώπους του κόσμου, μένει ακόμα στο ίδιο απλό σπίτι και διαβάζει ώρες κάθε μέρα.',
        'Τον λένε «Μάντη της Όμαχα» και είναι ο πιο διάσημος επενδυτής του κόσμου.',
      ],
      en: [
        'As a little boy he counted everything: bottle caps, coins, the cars going past.',
        'At six he bought six-packs of soda and sold the bottles one by one to the neighbors.',
        'At eleven he bought his first shares, sold them in a hurry — and learned that patience pays.',
        'Though one of the richest people in the world, he still lives in the same simple house and reads for hours every day.',
        'They call him the Oracle of Omaha, the most famous investor in the world.',
      ],
    },
  },
  {
    id: 108, nameEl: 'Άντριου Κάρνεγκι', nameEn: 'Andrew Carnegie', emoji: '📚',
    yes: ['before1900', 'american', 'business', 'usedToday', 'famousBrand', 'britain', 'veryRich'],
    clues: {
      el: [
        'Γεννήθηκε σε ένα μικρό πέτρινο σπίτι στη Σκωτία, όπου ο πατέρας του ύφαινε υφάσματα στον αργαλειό.',
        'Στα δεκατρία του δούλευε δώδεκα ώρες τη μέρα σε εργοστάσιο βαμβακιού για ένα δολάριο την εβδομάδα.',
        'Ένας καλόκαρδος συνταγματάρχης άνοιγε κάθε Σάββατο τη βιβλιοθήκη του στα παιδιά που δούλευαν — κι αυτό άλλαξε τη ζωή του.',
        'Έγινε πάμπλουτος από τον σίδηρο και το ατσάλι, κι έπειτα χάρισε σχεδόν όλα του τα λεφτά.',
        'Έχτισε πάνω από 2.500 δωρεάν βιβλιοθήκες σε όλο τον κόσμο, για να μπορεί κάθε παιδί να διαβάζει.',
      ],
      en: [
        'He was born in a small stone cottage in Scotland, where his father wove cloth on a hand loom.',
        'At thirteen he worked twelve hours a day in a cotton factory for a dollar a week.',
        'A kind-hearted colonel opened his library every Saturday to the boys who worked — and that changed his life.',
        'He became enormously rich from iron and steel, and then gave away almost all of his money.',
        'He built more than 2,500 free libraries around the world so every child could read.',
      ],
    },
  },
  {
    id: 110, nameEl: 'Γκάρι Βέινερτσουκ', nameEn: 'Gary Vaynerchuk', emoji: '📹',
    yes: ['alive', 'american', 'tech', 'business', 'food', 'teacher'],
    clues: {
      el: [
        'Η οικογένειά του ήρθε στην Αμερική χωρίς λεφτά κι εκείνος, μικρός, πουλούσε λεμονάδες και κάρτες μπέιζμπολ.',
        'Γύριζε ένα βίντεο κάθε μέρα, απαντώντας δωρεάν στις ερωτήσεις αγνώστων.',
        'Με το διαδίκτυο έκανε το μικρό μαγαζί του πατέρα του τεράστιο.',
        'Ο κανόνας του είναι: δώσε, δώσε, δώσε — και μετά ζήτα.',
        'Είναι ο πιο φωνακλάς επιχειρηματίας του ίντερνετ, με εκπομπή όπου ο κόσμος τον ρωτάει τα πάντα.',
      ],
      en: [
        'His family came to America with no money, and as a boy he sold lemonade and baseball cards.',
        'He filmed a video every single day, answering strangers\' questions for free.',
        'Using the internet, he turned his father\'s small shop into a huge one.',
        'His rule is: give, give, give — and only then ask.',
        'He is the loudest businessman on the internet, with a show where people ask him anything.',
      ],
    },
  },
  {
    id: 111, nameEl: 'Τζο Τζιράρντ', nameEn: 'Joe Girard', emoji: '🚗',
    yes: ['american'],
    clues: {
      el: [
        'Φτωχό παιδί στην Αμερική, γυάλιζε παπούτσια για να βοηθήσει την οικογένειά του.',
        'Πρόσεξε ότι σε έναν γάμο ή μια κηδεία μαζεύονται περίπου 250 άνθρωποι — κι έχτισε πάνω σε αυτό όλη του τη δουλειά.',
        'Έστελνε σε κάθε πελάτη του μια κάρτα κάθε μήνα, μόνο για να του πει «σε σκέφτομαι».',
        'Πούλησε περισσότερα αυτοκίνητα από κάθε άλλον στον κόσμο και μπήκε στο βιβλίο των ρεκόρ.',
        'Είναι ο πωλητής αυτοκινήτων που έγινε διάσημος με τον Κανόνα των 250.',
      ],
      en: [
        'A poor boy in America, he shined shoes to help his family.',
        'He noticed that about 250 people gather at a wedding or a funeral — and built his whole way of working on it.',
        'He sent every customer a card every month, just to say I\'m thinking of you.',
        'He sold more cars than anyone else in the world and entered the book of records.',
        'He is the car salesman who became famous for the Rule of 250.',
      ],
    },
  },
  {
    id: 118, nameEl: 'Μπράιαν Τρέισι', nameEn: 'Brian Tracy', emoji: '🎯',
    yes: ['alive', 'american', 'business', 'writer', 'teacher'],
    clues: {
      el: [
        'Παράτησε το σχολείο, δούλεψε εργάτης, έπλενε πιάτα και κοιμόταν μέσα στο αυτοκίνητό του.',
        'Μια μέρα έγραψε σε ένα χαρτί ακριβώς τι ήθελε και μέχρι πότε — και όλα άλλαξαν.',
        'Οι κανόνες του: γράψ\' το, κάν\' το αριθμό, βάλε ημερομηνία, γράψε τα βήματα.',
        'Ταξιδεύει σε όλο τον κόσμο και μαθαίνει σε εκατομμύρια ανθρώπους πώς να πετυχαίνουν αυτό που θέλουν.',
        'Το πιο διάσημο βιβλίο του λέγεται απλώς «Στόχοι!».',
      ],
      en: [
        'He dropped out of school, worked as a laborer, washed dishes and slept in his car.',
        'One day he wrote on a piece of paper exactly what he wanted and by when — and everything changed.',
        'His rules: write it down, make it a number, set a date, write the steps.',
        'He travels the world teaching millions of people how to reach what they want.',
        'His most famous book is called simply Goals!',
      ],
    },
  },
];

function attrsFrom(yes: readonly WhoAmIAttr[]): Record<WhoAmIAttr, boolean> {
  const out = {} as Record<WhoAmIAttr, boolean>;
  for (const a of WHOAMI_ATTRS) out[a] = yes.includes(a);
  return out;
}

/** The 95 people, each with all 36 attributes spelled out as booleans. */
export const WHOAMI_PEOPLE: readonly WhoAmIPerson[] = RAW_PEOPLE.map(({ yes, ...p }) => ({
  ...p,
  attrs: attrsFrom(yes),
}));
