/**
 * Β' Δημοτικού · Μαθηματικά · Αριθμοί ως το 1000
 * ===============================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–5   hundreds, tens and ones: reading and writing three-digit numbers
 *   6–8   the value of a digit, building a number from 500 + 30 + 6
 *   9–12  comparing and ordering numbers up to 1000 (hundreds first, then tens, then ones)
 *   13–16 counting in 100s and in 10s, the number right after / right before
 *   17–18 1000 as ten hundreds, and a word problem that puts it all together
 * Distractors are real child mistakes: swapped digits, "sticking" numbers together (5.306),
 * dropping the zero in 608, comparing by the ones digit, off-by-one across a hundred.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_NUMBERS_TO_1000: QuizQuestion[] = [
  // ── 1–5: hundreds, tens and ones ────────────────────────────────────────────
  {
    q: { el: 'Πόσες εκατοντάδες έχει το 300;', en: 'How many hundreds are in 300?' },
    options: { el: ['30', '3', '300', '100'], en: ['30', '3', '300', '100'] },
    correct: 1,
    explanation: {
      el: 'Το 300 είναι 3 εκατοντάδες: 100 + 100 + 100 = 300.',
      en: '300 is 3 hundreds: 100 + 100 + 100 = 300.',
    },
  },
  {
    q: { el: 'Ο αριθμός 245 έχει…', en: 'What does the number 245 have?' },
    options: { el: ['5 εκατοντάδες, 4 δεκάδες και 2 μονάδες', '2 δεκάδες, 4 εκατοντάδες και 5 μονάδες', '2 εκατοντάδες, 4 δεκάδες και 5 μονάδες', '2 εκατοντάδες, 5 δεκάδες και 4 μονάδες'], en: ['5 hundreds, 4 tens and 2 ones', '2 tens, 4 hundreds and 5 ones', '2 hundreds, 4 tens and 5 ones', '2 hundreds, 5 tens and 4 ones'] },
    correct: 2,
    explanation: {
      el: 'Το πρώτο ψηφίο είναι οι εκατοντάδες, το δεύτερο οι δεκάδες, το τρίτο οι μονάδες. 245 = 2 εκατοντάδες, 4 δεκάδες, 5 μονάδες.',
      en: 'The first digit is the hundreds, the second the tens, the third the ones. 245 = 2 hundreds, 4 tens, 5 ones.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έχει 6 εκατοντάδες, 0 δεκάδες και 8 μονάδες;', en: 'Which number has 6 hundreds, 0 tens and 8 ones?' },
    options: { el: ['68', '680', '806', '608'], en: ['68', '680', '806', '608'] },
    correct: 3,
    explanation: {
      el: '6 εκατοντάδες = 600 και 8 μονάδες = 8. Οι δεκάδες είναι 0, γι\' αυτό γράφουμε 608 — το 0 κρατάει τη θέση των δεκάδων!',
      en: '6 hundreds = 600 and 8 ones = 8. The tens are 0, so we write 608 — the 0 holds the tens place!',
    },
  },
  {
    q: { el: 'Πώς γράφεται με ψηφία ο αριθμός «τετρακόσια πενήντα δύο»;', en: 'How do we write "four hundred and fifty-two" in digits?' },
    options: { el: ['452', '425', '542', '4.052'], en: ['452', '425', '542', '4,052'] },
    correct: 0,
    explanation: {
      el: 'Τετρακόσια = 400, πενήντα = 50, δύο = 2. Μαζί: 452.',
      en: 'Four hundred = 400, fifty = 50, two = 2. Together: 452.',
    },
  },
  {
    q: { el: 'Πώς διαβάζεται ο αριθμός 730;', en: 'How do we read the number 730?' },
    options: { el: ['εφτακόσια τρία', 'εβδομήντα τρία', 'εφτακόσια τριάντα', 'εφτά χιλιάδες τριάντα'], en: ['seven hundred and three', 'seventy-three', 'seven hundred and thirty', 'seven thousand and thirty'] },
    correct: 2,
    explanation: {
      el: 'Το 730 έχει 7 εκατοντάδες και 3 δεκάδες: εφτακόσια τριάντα. Το «εφτακόσια τρία» θα ήταν 703.',
      en: '730 has 7 hundreds and 3 tens: seven hundred and thirty. "Seven hundred and three" would be 703.',
    },
  },

  // ── 6–8: the value of a digit ─────────────────────────────────────────────
  {
    q: { el: 'Πόσο αξίζει το 7 στον αριθμό 371;', en: 'What is the 7 worth in the number 371?' },
    options: { el: ['7', '70', '700', '71'], en: ['7', '70', '700', '71'] },
    correct: 1,
    explanation: {
      el: 'Το 7 είναι στη θέση των δεκάδων, άρα αξίζει 7 δεκάδες = 70.',
      en: 'The 7 is in the tens place, so it is worth 7 tens = 70.',
    },
  },
  {
    q: { el: 'Πόσο αξίζει το 9 στον αριθμό 925;', en: 'What is the 9 worth in the number 925?' },
    options: { el: ['9', '90', '925', '900'], en: ['9', '90', '925', '900'] },
    correct: 3,
    explanation: {
      el: 'Το 9 είναι στη θέση των εκατοντάδων, άρα αξίζει 9 εκατοντάδες = 900.',
      en: 'The 9 is in the hundreds place, so it is worth 9 hundreds = 900.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 500 + 30 + 6;', en: 'What is 500 + 30 + 6?' },
    options: { el: ['5.306', '563', '536', '5.036'], en: ['5,306', '563', '536', '5,036'] },
    correct: 2,
    explanation: {
      el: '5 εκατοντάδες, 3 δεκάδες και 6 μονάδες γράφονται 536. Δεν κολλάμε τους αριθμούς τον έναν δίπλα στον άλλον!',
      en: '5 hundreds, 3 tens and 6 ones are written 536. We do not just stick the numbers next to each other!',
    },
  },

  // ── 9–12: comparing and ordering ──────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι πιο μεγάλος;', en: 'Which number is bigger?' },
    options: { el: ['498', '512', '521', '489'], en: ['498', '512', '521', '489'] },
    correct: 2,
    explanation: {
      el: 'Κοιτάμε πρώτα τις εκατοντάδες: 512 και 521 έχουν 5, οι άλλοι 4. Μετά τις δεκάδες: 521 > 512 γιατί 2 > 1.',
      en: 'Look at the hundreds first: 512 and 521 have 5, the others 4. Then the tens: 521 > 512 because 2 > 1.',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό;', en: 'Which one is correct?' },
    options: { el: ['367 > 376', '367 < 376', '367 = 376', '376 < 367'], en: ['367 > 376', '367 < 376', '367 = 376', '376 < 367'] },
    correct: 1,
    explanation: {
      el: 'Και οι δύο έχουν 3 εκατοντάδες. Το 367 έχει 6 δεκάδες, το 376 έχει 7. Άρα 367 < 376.',
      en: 'Both have 3 hundreds. 367 has 6 tens, 376 has 7. So 367 < 376.',
    },
  },
  {
    q: { el: 'Ποια σειρά πάει από τον μικρότερο στον μεγαλύτερο;', en: 'Which list goes from smallest to biggest?' },
    options: { el: ['198, 189, 201', '201, 198, 189', '189, 201, 198', '189, 198, 201'], en: ['198, 189, 201', '201, 198, 189', '189, 201, 198', '189, 198, 201'] },
    correct: 3,
    explanation: {
      el: 'Το 201 έχει 2 εκατοντάδες, άρα είναι ο πιο μεγάλος. Από τους άλλους, 189 < 198 γιατί 8 δεκάδες < 9 δεκάδες. Άρα: 189, 198, 201.',
      en: '201 has 2 hundreds, so it is the biggest. Of the others, 189 < 198 because 8 tens < 9 tens. So: 189, 198, 201.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο μικρότερος αριθμός;', en: 'Which is the smallest number?' },
    options: { el: ['406', '640', '604', '460'], en: ['406', '640', '604', '460'] },
    correct: 0,
    explanation: {
      el: 'Το 406 και το 460 έχουν 4 εκατοντάδες, οι άλλοι 6. Το 406 έχει 0 δεκάδες και το 460 έχει 6, άρα ο μικρότερος είναι το 406.',
      en: '406 and 460 have 4 hundreds, the others 6. 406 has 0 tens and 460 has 6, so the smallest is 406.',
    },
  },

  // ── 13–16: counting in 100s and 10s, before and after ─────────────────────
  {
    q: { el: 'Μετράμε ανά 100: 200, 300, 400, ___. Ποιος αριθμός λείπει;', en: 'Counting in 100s: 200, 300, 400, ___. Which number is missing?' },
    options: { el: ['401', '410', '500', '600'], en: ['401', '410', '500', '600'] },
    correct: 2,
    explanation: {
      el: 'Κάθε φορά προσθέτουμε 100: 400 + 100 = 500. Μόνο οι εκατοντάδες αλλάζουν.',
      en: 'Each time we add 100: 400 + 100 = 500. Only the hundreds change.',
    },
  },
  {
    q: { el: 'Μετράμε ανά 10: 560, 570, 580, ___. Ποιος αριθμός λείπει;', en: 'Counting in 10s: 560, 570, 580, ___. Which number is missing?' },
    options: { el: ['590', '581', '600', '680'], en: ['590', '581', '600', '680'] },
    correct: 0,
    explanation: {
      el: 'Κάθε φορά προσθέτουμε 10: 580 + 10 = 590. Οι δεκάδες μεγαλώνουν κατά ένα.',
      en: 'Each time we add 10: 580 + 10 = 590. The tens go up by one.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έρχεται αμέσως μετά το 399;', en: 'Which number comes right after 399?' },
    options: { el: ['390', '400', '3.100', '499'], en: ['390', '400', '3,100', '499'] },
    correct: 1,
    explanation: {
      el: 'Μετά το 399 έρχεται το 400. Όταν οι δεκάδες και οι μονάδες είναι 9, η εκατοντάδα μεγαλώνει κατά ένα.',
      en: 'After 399 comes 400. When the tens and the ones are both 9, the hundreds go up by one.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έρχεται αμέσως πριν από το 700;', en: 'Which number comes right before 700?' },
    options: { el: ['600', '690', '701', '699'], en: ['600', '690', '701', '699'] },
    correct: 3,
    explanation: {
      el: 'Ένα πριν από το 700 είναι το 699: 700 − 1 = 699. Μετράμε ανάποδα: 700, 699, 698…',
      en: 'One before 700 is 699: 700 − 1 = 699. Count backwards: 700, 699, 698…',
    },
  },

  // ── 17–18: the thousand ───────────────────────────────────────────────────
  {
    q: { el: 'Πόσες εκατοντάδες κάνουν 1.000;', en: 'How many hundreds make 1,000?' },
    options: { el: ['100', '1', '10', '1.000'], en: ['100', '1', '10', '1,000'] },
    correct: 2,
    explanation: {
      el: 'Δέκα εκατοντάδες κάνουν μία χιλιάδα: 100, 200, 300 … 900, 1.000. Το 1.000 έρχεται αμέσως μετά το 999.',
      en: 'Ten hundreds make one thousand: 100, 200, 300 … 900, 1,000. 1,000 comes right after 999.',
    },
  },
  {
    q: { el: 'Στο σχολείο έχουμε 3 κουτιά με 100 μολύβια, 4 πακέτα με 10 μολύβια και 5 μολύβια μόνα τους. Πόσα μολύβια είναι όλα μαζί;', en: 'At school we have 3 boxes of 100 pencils, 4 packs of 10 pencils and 5 loose pencils. How many pencils are there in total?' },
    options: { el: ['12', '345', '3.405', '354'], en: ['12', '345', '3,405', '354'] },
    correct: 1,
    explanation: {
      el: '3 εκατοντάδες = 300, 4 δεκάδες = 40, και 5 μονάδες: 300 + 40 + 5 = 345 μολύβια.',
      en: '3 hundreds = 300, 4 tens = 40, and 5 ones: 300 + 40 + 5 = 345 pencils.',
    },
  },
];
