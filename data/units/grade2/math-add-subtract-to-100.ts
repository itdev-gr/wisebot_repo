/**
 * Β' Δημοτικού · Μαθηματικά · Πρόσθεση και αφαίρεση ως το 100
 * ============================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Covered in order:
 *   1–6   mental strategies: tens, +10/+20, +9 as +10−1, −30, −9 as −10+1
 *   7–9   complement to 100 (what goes with 70 to make 100, 100 − 28)
 *   10–12 column addition with carrying (27 + 35, 48 + 36, 59 + 23)
 *   13–14 column subtraction with borrowing (53 − 27, 81 − 46)
 *   15–18 word problems: money, book pages, farm animals, a two-step sticker sum
 * Distractors are real child mistakes: wrong tens, forgetting the carry,
 * writing the carry as an extra digit, swapping the column subtraction, off-by-one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_ADD_SUBTRACT_TO_100: QuizQuestion[] = [
  // ── 1–6: mental strategies ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 30 + 40;', en: 'What is 30 + 40?' },
    options: { el: ['60', '70', '80', '34'], en: ['60', '70', '80', '34'] },
    correct: 1,
    explanation: {
      el: '3 δεκάδες και 4 δεκάδες είναι 7 δεκάδες. 30 + 40 = 70.',
      en: '3 tens and 4 tens make 7 tens. 30 + 40 = 70.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 25 + 10;', en: 'What is 25 + 10?' },
    options: { el: ['26', '30', '35', '45'], en: ['26', '30', '35', '45'] },
    correct: 2,
    explanation: {
      el: 'Όταν προσθέτουμε 10, αλλάζει μόνο η δεκάδα: 25 → 35.',
      en: 'When we add 10, only the tens digit changes: 25 → 35.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 47 + 20;', en: 'What is 47 + 20?' },
    options: { el: ['49', '57', '67', '27'], en: ['49', '57', '67', '27'] },
    correct: 2,
    explanation: {
      el: '20 είναι δύο δεκάδες. 47 → 57 → 67. Οι μονάδες μένουν 7.',
      en: '20 is two tens. 47 → 57 → 67. The ones stay 7.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 36 + 9;', en: 'What is 36 + 9?' },
    options: { el: ['44', '45', '46', '35'], en: ['44', '45', '46', '35'] },
    correct: 1,
    explanation: {
      el: 'Κόλπο: βάζουμε 10 και βγάζουμε 1. 36 + 10 = 46, 46 − 1 = 45.',
      en: 'Trick: add 10, then take away 1. 36 + 10 = 46, 46 − 1 = 45.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 58 − 30;', en: 'What is 58 − 30?' },
    options: { el: ['38', '28', '55', '18'], en: ['38', '28', '55', '18'] },
    correct: 1,
    explanation: {
      el: 'Βγάζουμε 3 δεκάδες: 58 → 48 → 38 → 28. Οι μονάδες μένουν 8.',
      en: 'Take away 3 tens: 58 → 48 → 38 → 28. The ones stay 8.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 62 − 9;', en: 'What is 62 − 9?' },
    options: { el: ['52', '54', '53', '71'], en: ['52', '54', '53', '71'] },
    correct: 2,
    explanation: {
      el: 'Κόλπο: βγάζουμε 10 και βάζουμε 1 πίσω. 62 − 10 = 52, 52 + 1 = 53.',
      en: 'Trick: take away 10, then add 1 back. 62 − 10 = 52, 52 + 1 = 53.',
    },
  },

  // ── 7–9: complement to 100 ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; 70 + ___ = 100', en: 'Which number is missing? 70 + ___ = 100' },
    options: { el: ['20', '40', '30', '70'], en: ['20', '40', '30', '70'] },
    correct: 2,
    explanation: {
      el: 'Από το 70 ως το 100 θέλουμε 3 δεκάδες: 70 + 30 = 100.',
      en: 'From 70 to 100 we need 3 tens: 70 + 30 = 100.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 45 + ___ = 100', en: 'Which number is missing? 45 + ___ = 100' },
    options: { el: ['65', '55', '45', '50'], en: ['65', '55', '45', '50'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα ως το 50: 45 + 5 = 50. Μετά ως το 100: 50 + 50 = 100. Μαζί 5 + 50 = 55.',
      en: 'First to 50: 45 + 5 = 50. Then to 100: 50 + 50 = 100. Together 5 + 50 = 55.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 100 − 28;', en: 'What is 100 − 28?' },
    options: { el: ['82', '78', '72', '62'], en: ['82', '78', '72', '62'] },
    correct: 2,
    explanation: {
      el: 'Σκέψου: 28 + 2 = 30 και 30 + 70 = 100. Άρα λείπουν 72.',
      en: 'Think: 28 + 2 = 30 and 30 + 70 = 100. So 72 is missing.',
    },
  },

  // ── 10–12: column addition with carrying ───────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 27 + 35;', en: 'What is 27 + 35?' },
    options: { el: ['52', '62', '512', '61'], en: ['52', '62', '512', '61'] },
    correct: 1,
    explanation: {
      el: 'Μονάδες: 7 + 5 = 12, γράφουμε 2 και κρατάμε 1. Δεκάδες: 2 + 3 + 1 = 6. Άρα 62.',
      en: 'Ones: 7 + 5 = 12, write 2 and carry 1. Tens: 2 + 3 + 1 = 6. So 62.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 48 + 36;', en: 'What is 48 + 36?' },
    options: { el: ['74', '84', '714', '85'], en: ['74', '84', '714', '85'] },
    correct: 1,
    explanation: {
      el: 'Μονάδες: 8 + 6 = 14, γράφουμε 4 και κρατάμε 1. Δεκάδες: 4 + 3 + 1 = 8. Άρα 84.',
      en: 'Ones: 8 + 6 = 14, write 4 and carry 1. Tens: 4 + 3 + 1 = 8. So 84.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 59 + 23;', en: 'What is 59 + 23?' },
    options: { el: ['72', '712', '83', '82'], en: ['72', '712', '83', '82'] },
    correct: 3,
    explanation: {
      el: 'Μονάδες: 9 + 3 = 12, γράφουμε 2 και κρατάμε 1. Δεκάδες: 5 + 2 + 1 = 8. Άρα 82.',
      en: 'Ones: 9 + 3 = 12, write 2 and carry 1. Tens: 5 + 2 + 1 = 8. So 82.',
    },
  },

  // ── 13–14: column subtraction with borrowing ───────────────────────────────
  {
    q: { el: 'Πόσο κάνει 53 − 27;', en: 'What is 53 − 27?' },
    options: { el: ['34', '26', '36', '27'], en: ['34', '26', '36', '27'] },
    correct: 1,
    explanation: {
      el: 'Το 3 δεν φτάνει για να βγάλουμε 7. Δανειζόμαστε μια δεκάδα: 13 − 7 = 6. Μετά 4 − 2 = 2. Άρα 26.',
      en: '3 is not enough to take away 7. Borrow a ten: 13 − 7 = 6. Then 4 − 2 = 2. So 26.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 81 − 46;', en: 'What is 81 − 46?' },
    options: { el: ['45', '34', '35', '47'], en: ['45', '34', '35', '47'] },
    correct: 2,
    explanation: {
      el: 'Δανειζόμαστε μια δεκάδα: 11 − 6 = 5. Μετά 7 − 4 = 3. Άρα 35.',
      en: 'Borrow a ten: 11 − 6 = 5. Then 7 − 4 = 3. So 35.',
    },
  },

  // ── 15–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία έχει 38 €. Αγοράζει ένα βιβλίο με 15 €. Πόσα ευρώ της μένουν;', en: 'Maria has €38. She buys a book for €15. How many euros does she have left?' },
    options: { el: ['53 €', '27 €', '23 €', '22 €'], en: ['€53', '€27', '€23', '€22'] },
    correct: 2,
    explanation: {
      el: 'Ξοδεύει, άρα αφαιρούμε: 38 − 15 = 23 €.',
      en: 'She spends money, so we subtract: 38 − 15 = €23.',
    },
  },
  {
    q: { el: 'Ο Γιώργος διάβασε 46 σελίδες τη Δευτέρα και 37 την Τρίτη. Πόσες σελίδες διάβασε;', en: 'George read 46 pages on Monday and 37 on Tuesday. How many pages did he read?' },
    options: { el: ['73', '83', '11', '84'], en: ['73', '83', '11', '84'] },
    correct: 1,
    explanation: {
      el: 'Βάζουμε μαζί τις σελίδες: 46 + 37 = 83. Μην ξεχάσεις το κρατούμενο!',
      en: 'Put the pages together: 46 + 37 = 83. Do not forget the carry!',
    },
  },
  {
    q: { el: 'Σε μια φάρμα ζουν 100 ζώα. Τα 64 είναι πρόβατα και τα άλλα κατσίκες. Πόσες είναι οι κατσίκες;', en: 'A farm has 100 animals. 64 are sheep and the rest are goats. How many goats are there?' },
    options: { el: ['46', '44', '36', '164'], en: ['46', '44', '36', '164'] },
    correct: 2,
    explanation: {
      el: '100 − 64 = 36 κατσίκες. Σκέψου: 64 + 6 = 70 και 70 + 30 = 100, άρα 36.',
      en: '100 − 64 = 36 goats. Think: 64 + 6 = 70 and 70 + 30 = 100, so 36.',
    },
  },
  {
    q: { el: 'Η Ελένη είχε 25 αυτοκόλλητα. Πήρε άλλα 48 και έδωσε 30 στον Νίκο. Πόσα έχει τώρα;', en: 'Eleni had 25 stickers. She got 48 more and gave 30 to Nikos. How many does she have now?' },
    options: { el: ['73', '53', '43', '33'], en: ['73', '53', '43', '33'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα προσθέτουμε: 25 + 48 = 73. Μετά αφαιρούμε: 73 − 30 = 43.',
      en: 'First add: 25 + 48 = 73. Then subtract: 73 − 30 = 43.',
    },
  },
];
