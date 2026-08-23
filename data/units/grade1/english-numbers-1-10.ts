/**
 * Α' Δημοτικού · Αγγλικά · Αριθμοί 1–10 / Numbers 1–10
 * =====================================================
 * Original questions for a child of 6–7 who is just starting English.
 * What the unit covers, in order:
 *   1–7   the words one…ten: word → number and number → word
 *   8–11  «How many?» — counting small groups of objects
 *   12–15 plural -s: one cat, two cats; the ‑s only when there is more than one
 *   16–18 putting it together: counting + plural in one short sentence
 * Distractors are real mistakes: neighbouring numbers, look-alike words
 * (three/tree, four/for, ten/tin), forgetting or adding the plural -s.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ENGLISH_NUMBERS_1_10: QuizQuestion[] = [
  // ── 1–7: the words one…ten ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε το «ένα» στα αγγλικά;', en: 'How do you say «ένα» in English?' },
    options: { el: ['one', 'two', 'on', 'ten'], en: ['one', 'two', 'on', 'ten'] },
    correct: 0,
    explanation: {
      el: 'Το 1 στα αγγλικά είναι «one». Προσοχή: το «on» είναι άλλη λέξη!',
      en: '1 in English is “one”. Careful: “on” is a different word!',
    },
  },
  {
    q: { el: 'Πώς λέμε το «δύο» στα αγγλικά;', en: 'How do you say «δύο» in English?' },
    options: { el: ['three', 'two', 'ten', 'one'], en: ['three', 'two', 'ten', 'one'] },
    correct: 1,
    explanation: {
      el: 'Το 2 στα αγγλικά είναι «two». Μετράμε: one, two, three!',
      en: '2 in English is “two”. We count: one, two, three!',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι το «three»;', en: 'Which number is “three”?' },
    options: { el: ['2', '4', '3', '5'], en: ['2', '4', '3', '5'] },
    correct: 2,
    explanation: {
      el: '«Three» είναι το 3. Μετράμε: one, two, three.',
      en: '“Three” is 3. We count: one, two, three.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι το «five»;', en: 'Which number is “five”?' },
    options: { el: ['4', '6', '9', '5'], en: ['4', '6', '9', '5'] },
    correct: 3,
    explanation: {
      el: '«Five» είναι το 5 — όσα τα δάχτυλα στο ένα χέρι!',
      en: '“Five” is 5 — as many as the fingers on one hand!',
    },
  },
  {
    q: { el: 'Πώς λέμε το «επτά» στα αγγλικά;', en: 'How do you say «επτά» in English?' },
    options: { el: ['six', 'seven', 'eight', 'eleven'], en: ['six', 'seven', 'eight', 'eleven'] },
    correct: 1,
    explanation: {
      el: 'Το 7 είναι «seven». Το 6 είναι «six» και το 8 είναι «eight».',
      en: '7 is “seven”. 6 is “six” and 8 is “eight”.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι το «nine»;', en: 'Which number is “nine”?' },
    options: { el: ['9', '6', '10', '5'], en: ['9', '6', '10', '5'] },
    correct: 0,
    explanation: {
      el: '«Nine» είναι το 9. Έρχεται μετά το «eight» και πριν το «ten».',
      en: '“Nine” is 9. It comes after “eight” and before “ten”.',
    },
  },
  {
    q: { el: 'Πώς λέμε το «δέκα» στα αγγλικά;', en: 'How do you say «δέκα» in English?' },
    options: { el: ['tin', 'nine', 'ten', 'two'], en: ['tin', 'nine', 'ten', 'two'] },
    correct: 2,
    explanation: {
      el: 'Το 10 είναι «ten». Γράφεται με «e»: t-e-n.',
      en: '10 is “ten”. It is spelled with an “e”: t-e-n.',
    },
  },

  // ── 8–11: How many? ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; one, two, ___, four', en: 'Which number is missing? one, two, ___, four' },
    options: { el: ['five', 'three', 'six', 'ten'], en: ['five', 'three', 'six', 'ten'] },
    correct: 1,
    explanation: {
      el: 'Μετράμε με τη σειρά: one, two, three, four. Λείπει το «three».',
      en: 'We count in order: one, two, three, four. “Three” is missing.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; seven, eight, ___, ten', en: 'Which number is missing? seven, eight, ___, ten' },
    options: { el: ['six', 'five', 'nine', 'four'], en: ['six', 'five', 'nine', 'four'] },
    correct: 2,
    explanation: {
      el: 'Μετά το «eight» έρχεται το «nine»: seven, eight, nine, ten.',
      en: 'After “eight” comes “nine”: seven, eight, nine, ten.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 4 μήλα. «How many apples?»', en: 'Maria has 4 apples. “How many apples?”' },
    options: { el: ['Four.', 'Five.', 'For.', 'Three.'], en: ['Four.', 'Five.', 'For.', 'Three.'] },
    correct: 0,
    explanation: {
      el: '«How many» σημαίνει «πόσα». 4 μήλα = four apples. Το «for» είναι άλλη λέξη.',
      en: '“How many” means «πόσα». 4 apples = four apples. “For” is a different word.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 2 μπάλες και παίρνει άλλη 1. «How many balls?»', en: 'Nikos has 2 balls and gets 1 more. “How many balls?”' },
    options: { el: ['Two.', 'One.', 'Four.', 'Three.'], en: ['Two.', 'One.', 'Four.', 'Three.'] },
    correct: 3,
    explanation: {
      el: '2 και 1 κάνουν 3. Στα αγγλικά: three balls.',
      en: '2 and 1 make 3. In English: three balls.',
    },
  },

  // ── 12–15: plural -s ──────────────────────────────────────────────────────
  {
    q: { el: 'Μία γάτα είναι «one cat». Πώς λέμε «δύο γάτες»;', en: 'One cat is “one cat”. How do you say «δύο γάτες»?' },
    options: { el: ['two cat', 'two cats', 'two cates', 'cats two'], en: ['two cat', 'two cats', 'two cates', 'cats two'] },
    correct: 1,
    explanation: {
      el: 'Όταν είναι πάνω από ένα, βάζουμε -s στο τέλος: one cat, two cats.',
      en: 'When there is more than one, we add -s at the end: one cat, two cats.',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό;', en: 'Which one is correct?' },
    options: { el: ['one dogs', 'one dog', 'ones dog', 'a dogs'], en: ['one dogs', 'one dog', 'ones dog', 'a dogs'] },
    correct: 1,
    explanation: {
      el: 'Για ένα μόνο δεν βάζουμε -s: one dog. Το -s είναι για πολλά: three dogs.',
      en: 'For just one we do not add -s: one dog. The -s is for many: three dogs.',
    },
  },
  {
    q: { el: 'Πώς λέμε «πέντε βιβλία» στα αγγλικά;', en: 'How do you say «πέντε βιβλία» in English?' },
    options: { el: ['five book', 'four books', 'five books', 'fives book'], en: ['five book', 'four books', 'five books', 'fives book'] },
    correct: 2,
    explanation: {
      el: 'Πέντε = five, και επειδή είναι πολλά, βιβλίο γίνεται «books»: five books.',
      en: 'Five = five, and because there are many, book becomes “books”: five books.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «I have six ___.»', en: 'Which word is missing? “I have six ___.”' },
    options: { el: ['pencils', 'pencil', 'pencil six', 'a pencil'], en: ['pencils', 'pencil', 'pencil six', 'a pencil'] },
    correct: 0,
    explanation: {
      el: 'Έξι μολύβια είναι πολλά, άρα βάζουμε -s: six pencils.',
      en: 'Six pencils are many, so we add -s: six pencils.',
    },
  },

  // ── 16–18: counting + plural together ─────────────────────────────────────
  {
    q: { el: 'Η Ελένη έχει 1 κόκκινη μπάλα και 2 μπλε. «How many balls?»', en: 'Eleni has 1 red ball and 2 blue ones. “How many balls?”' },
    options: { el: ['Two balls.', 'Three ball.', 'Three balls.', 'One ball.'], en: ['Two balls.', 'Three ball.', 'Three balls.', 'One ball.'] },
    correct: 2,
    explanation: {
      el: '1 και 2 κάνουν 3. Είναι πολλές, άρα «three balls» με -s.',
      en: '1 and 2 make 3. There are many, so “three balls” with -s.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I see ten stars.', 'I see ten star.', 'I see star ten.', 'I see tens star.'], en: ['I see ten stars.', 'I see ten star.', 'I see star ten.', 'I see tens star.'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα ο αριθμός, μετά η λέξη με -s: ten stars. Το -s πάει στο «star», όχι στο «ten».',
      en: 'First the number, then the word with -s: ten stars. The -s goes on “star”, not on “ten”.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει: «I have eight cars.» Πόσα αυτοκίνητα έχει;', en: 'Giorgos says: “I have eight cars.” How many cars does he have?' },
    options: { el: ['3', '10', '8', '7'], en: ['3', '10', '8', '7'] },
    correct: 2,
    explanation: {
      el: '«Eight» είναι το 8. Και το «cars» με -s μας λέει ότι είναι πολλά.',
      en: '“Eight” is 8. And “cars” with -s tells us there are many.',
    },
  },
];
