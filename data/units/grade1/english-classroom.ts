/**
 * Α' Δημοτικού · Αγγλικά · «Η Τάξη μας» / "Our Classroom"
 * =========================================================
 * Original questions for a child of 6–7 who is just starting English. Short stems,
 * everyday words, the Greek stem carries the task so the child never has to read
 * long English. What the unit covers, in order:
 *   1–7   classroom words: book, pen, pencil, bag, desk, chair (Greek → English and back)
 *   8–12  'What's this?' / 'It's a …' — the question and the answer pattern
 *   13–16 classroom commands: stand up, sit down, open/close your book
 *   17–18 mixed: recognising the word from its first letter, a short dialogue
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ENGLISH_CLASSROOM: QuizQuestion[] = [
  // ── 1–7: classroom words ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «βιβλίο» στα αγγλικά;', en: 'How do you say «βιβλίο» in English?' },
    options: { el: ['book', 'bag', 'pen', 'desk'], en: ['book', 'bag', 'pen', 'desk'] },
    correct: 0,
    explanation: {
      el: 'Το βιβλίο στα αγγλικά λέγεται «book». Book — βιβλίο!',
      en: 'A βιβλίο is a “book” in English. Book — βιβλίο!',
    },
  },
  {
    q: { el: 'Πώς λέμε «στιλό» στα αγγλικά;', en: 'How do you say «στιλό» in English?' },
    options: { el: ['pencil', 'pen', 'book', 'chair'], en: ['pencil', 'pen', 'book', 'chair'] },
    correct: 1,
    explanation: {
      el: 'Το στιλό λέγεται «pen». Το «pencil» είναι το μολύβι — μοιάζουν, πρόσεχε!',
      en: 'A στιλό is a “pen”. A “pencil” is a μολύβι — they look alike, be careful!',
    },
  },
  {
    q: { el: 'Πώς λέμε «μολύβι» στα αγγλικά;', en: 'How do you say «μολύβι» in English?' },
    options: { el: ['pen', 'desk', 'pencil', 'bag'], en: ['pen', 'desk', 'pencil', 'bag'] },
    correct: 2,
    explanation: {
      el: 'Το μολύβι λέγεται «pencil». Η μεγάλη λέξη είναι το μολύβι, η μικρή (pen) το στιλό.',
      en: 'A μολύβι is a “pencil”. The long word is the pencil, the short one (pen) is the στιλό.',
    },
  },
  {
    q: { el: 'Πώς λέμε «τσάντα» στα αγγλικά;', en: 'How do you say «τσάντα» in English?' },
    options: { el: ['book', 'desk', 'chair', 'bag'], en: ['book', 'desk', 'chair', 'bag'] },
    correct: 3,
    explanation: {
      el: 'Η τσάντα λέγεται «bag». Μέσα στο bag βάζουμε το book!',
      en: 'A τσάντα is a “bag”. We put the book in the bag!',
    },
  },
  {
    q: { el: 'Πώς λέμε «θρανίο» στα αγγλικά;', en: 'How do you say «θρανίο» in English?' },
    options: { el: ['chair', 'desk', 'bag', 'book'], en: ['chair', 'desk', 'bag', 'book'] },
    correct: 1,
    explanation: {
      el: 'Το θρανίο λέγεται «desk». Πάνω στο desk βάζουμε τα βιβλία μας.',
      en: 'A θρανίο is a “desk”. We put our books on the desk.',
    },
  },
  {
    q: { el: 'Πώς λέμε «καρέκλα» στα αγγλικά;', en: 'How do you say «καρέκλα» in English?' },
    options: { el: ['desk', 'bag', 'chair', 'pen'], en: ['desk', 'bag', 'chair', 'pen'] },
    correct: 2,
    explanation: {
      el: 'Η καρέκλα λέγεται «chair». Καθόμαστε στο chair, γράφουμε στο desk.',
      en: 'A καρέκλα is a “chair”. We sit on the chair and write at the desk.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «desk»;', en: 'What does the word «desk» mean?' },
    options: { el: ['καρέκλα', 'τσάντα', 'βιβλίο', 'θρανίο'], en: ['chair (καρέκλα)', 'bag (τσάντα)', 'book (βιβλίο)', 'desk (θρανίο)'] },
    correct: 3,
    explanation: {
      el: 'Desk σημαίνει θρανίο. Η καρέκλα είναι «chair».',
      en: '“Desk” means θρανίο. The chair is “chair”.',
    },
  },

  // ── 8–12: What's this? / It's a … ──────────────────────────────────────────
  {
    q: { el: 'Η δασκάλα δείχνει ένα βιβλίο και ρωτάει: «What\'s this?». Τι ρωτάει;', en: 'The teacher points at a book and asks: “What\'s this?”. What is she asking?' },
    options: { el: ['Τι είναι αυτό;', 'Πού είναι αυτό;', 'Ποιος είσαι;', 'Πώς σε λένε;'], en: ['What is this?', 'Where is this?', 'Who are you?', 'What is your name?'] },
    correct: 0,
    explanation: {
      el: '«What\'s this?» σημαίνει «Τι είναι αυτό;». Το ρωτάμε όταν δείχνουμε κάτι.',
      en: '“What\'s this?” means “Τι είναι αυτό;”. We ask it when we point at something.',
    },
  },
  {
    q: { el: 'Ο Νίκος δείχνει ένα στιλό. Τι απαντάει στο «What\'s this?»;', en: 'Nikos points at a pen. What does he answer to “What\'s this?”' },
    options: { el: ['It\'s a book.', 'It\'s a pen.', 'It\'s a chair.', 'It\'s a bag.'], en: ['It\'s a book.', 'It\'s a pen.', 'It\'s a chair.', 'It\'s a bag.'] },
    correct: 1,
    explanation: {
      el: 'Απαντάμε «It\'s a pen.» — «Είναι ένα στιλό.». It\'s a + η λέξη!',
      en: 'We answer “It\'s a pen.” — “Είναι ένα στιλό.”. It\'s a + the word!',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «What\'s this?» — «___ a desk.»', en: 'Which word is missing? “What\'s this?” — “___ a desk.”' },
    options: { el: ['I\'m', 'This', 'It\'s', 'What\'s'], en: ['I\'m', 'This', 'It\'s', 'What\'s'] },
    correct: 2,
    explanation: {
      el: 'Η απάντηση ξεκινάει με «It\'s»: «It\'s a desk.» = «Είναι ένα θρανίο.».',
      en: 'The answer starts with “It\'s”: “It\'s a desk.” = “Είναι ένα θρανίο.”.',
    },
  },
  {
    q: { el: 'Η Ελένη δείχνει μια καρέκλα και λέει «It\'s a chair.». Τι είπε;', en: 'Eleni points at a chair and says “It\'s a chair.”. What did she say?' },
    options: { el: ['Είναι ένα θρανίο.', 'Είναι μια τσάντα.', 'Τι είναι αυτό;', 'Είναι μια καρέκλα.'], en: ['It is a desk.', 'It is a bag.', 'What is this?', 'It is a chair.'] },
    correct: 3,
    explanation: {
      el: '«It\'s a chair.» σημαίνει «Είναι μια καρέκλα.». Το «It\'s» σημαίνει «είναι».',
      en: '“It\'s a chair.” means “Είναι μια καρέκλα.”. “It\'s” means “it is”.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['It\'s a pencil.', 'It\'s pencil a.', 'A pencil it\'s.', 'It\'s a a pencil.'], en: ['It\'s a pencil.', 'It\'s pencil a.', 'A pencil it\'s.', 'It\'s a a pencil.'] },
    correct: 0,
    explanation: {
      el: 'Η σειρά είναι πάντα: It\'s + a + λέξη. «It\'s a pencil.»',
      en: 'The order is always: It\'s + a + word. “It\'s a pencil.”',
    },
  },

  // ── 13–16: classroom commands ──────────────────────────────────────────────
  {
    q: { el: 'Η δασκάλα λέει «Stand up!». Τι κάνεις;', en: 'The teacher says “Stand up!”. What do you do?' },
    options: { el: ['Κάθομαι.', 'Σηκώνομαι όρθιος.', 'Ανοίγω το βιβλίο.', 'Κλείνω την τσάντα.'], en: ['I sit down.', 'I stand up.', 'I open my book.', 'I close my bag.'] },
    correct: 1,
    explanation: {
      el: '«Stand up!» σημαίνει «Σήκω όρθιος!». Το «up» πάει προς τα πάνω!',
      en: '“Stand up!” means “Σήκω όρθιος!”. “Up” goes upwards!',
    },
  },
  {
    q: { el: 'Η δασκάλα λέει «Sit down!». Τι κάνεις;', en: 'The teacher says “Sit down!”. What do you do?' },
    options: { el: ['Σηκώνομαι όρθιος.', 'Βγαίνω έξω.', 'Κάθομαι.', 'Παίρνω το στιλό.'], en: ['I stand up.', 'I go outside.', 'I sit down.', 'I take the pen.'] },
    correct: 2,
    explanation: {
      el: '«Sit down!» σημαίνει «Κάτσε κάτω!». Το «down» πάει προς τα κάτω!',
      en: '“Sit down!” means “Κάτσε κάτω!”. “Down” goes downwards!',
    },
  },
  {
    q: { el: 'Πώς λέμε «Σήκω όρθιος!» στα αγγλικά;', en: 'How do you say «Σήκω όρθιος!» in English?' },
    options: { el: ['Sit down!', 'Stand down!', 'Sit up!', 'Stand up!'], en: ['Sit down!', 'Stand down!', 'Sit up!', 'Stand up!'] },
    correct: 3,
    explanation: {
      el: '«Σήκω όρθιος!» = «Stand up!». Stand πάει με up, sit πάει με down.',
      en: '“Σήκω όρθιος!” = “Stand up!”. Stand goes with up, sit goes with down.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ακούει «Open your book!». Τι ανοίγει;', en: 'Giorgos hears “Open your book!”. What does he open?' },
    options: { el: ['Την τσάντα του.', 'Το βιβλίο του.', 'Την πόρτα.', 'Την κασετίνα του.'], en: ['His bag.', 'His book.', 'The door.', 'His pencil case.'] },
    correct: 1,
    explanation: {
      el: '«Open your book!» = «Άνοιξε το βιβλίο σου!». Book = βιβλίο.',
      en: '“Open your book!” = “Άνοιξε το βιβλίο σου!”. Book = βιβλίο.',
    },
  },

  // ── 17–18: mixed ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη της τάξης αρχίζει από «b» και είναι κάτι που διαβάζουμε;', en: 'Which classroom word starts with “b” and is something we read?' },
    options: { el: ['bag', 'book', 'pen', 'desk'], en: ['bag', 'book', 'pen', 'desk'] },
    correct: 1,
    explanation: {
      el: 'Το «book» (βιβλίο) αρχίζει από b και το διαβάζουμε. Το «bag» αρχίζει από b, αλλά είναι τσάντα.',
      en: '“Book” starts with b and we read it. “Bag” starts with b too, but it is a τσάντα.',
    },
  },
  {
    q: { el: 'Η Μαρία δείχνει την τσάντα της. «What\'s this?» — «It\'s a ___.»', en: 'Maria points at her bag. “What\'s this?” — “It\'s a ___.”' },
    options: { el: ['book', 'chair', 'bag', 'pencil'], en: ['book', 'chair', 'bag', 'pencil'] },
    correct: 2,
    explanation: {
      el: 'Η τσάντα είναι «bag», άρα: «It\'s a bag.» = «Είναι μια τσάντα.».',
      en: 'The τσάντα is a “bag”, so: “It\'s a bag.” = “Είναι μια τσάντα.”.',
    },
  },
];
