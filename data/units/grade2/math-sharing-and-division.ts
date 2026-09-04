/**
 * Β' Δημοτικού · Μαθηματικά · Μοιράζω δίκαια: διαίρεση
 * =====================================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–4   fair sharing («στα ίσα»): 12 sweets for 3 children, the ÷ sign, writing the sum
 *   5–8   grouping: how many pairs, how many groups of 5, how many packs of 10
 *   9–12  division as the opposite of multiplication (3 × 4 = 12, so 12 ÷ 3 = 4)
 *   13–15 quick divisions: ÷ 2, ÷ 5, ÷ 10
 *   16–18 when it does not come out even: simple remainders (7 sweets, 2 children)
 * Distractors are real child mistakes: subtracting instead of dividing (12 − 3),
 * multiplying instead of dividing, swapping the numbers (5 ÷ 15), forgetting the leftover.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_SHARING_AND_DIVISION: QuizQuestion[] = [
  // ── 1–4: sharing fairly and the ÷ sign ──────────────────────────────────────
  {
    q: { el: 'Μοιράζουμε 12 καραμέλες στα ίσα σε 3 παιδιά. Πόσες παίρνει το καθένα;', en: 'We share 12 sweets equally between 3 children. How many does each one get?' },
    options: { el: ['3', '4', '9', '15'], en: ['3', '4', '9', '15'] },
    correct: 1,
    explanation: {
      el: 'Δίνουμε μία-μία: 4 + 4 + 4 = 12. Κάθε παιδί παίρνει 4 καραμέλες. Αυτό είναι 12 ÷ 3 = 4.',
      en: 'Hand them out one at a time: 4 + 4 + 4 = 12. Each child gets 4 sweets. That is 12 ÷ 3 = 4.',
    },
  },
  {
    q: { el: 'Η Άννα βάζει 10 μπισκότα στα ίσα σε 2 πιάτα. Πόσα μπισκότα έχει κάθε πιάτο;', en: 'Anna puts 10 biscuits equally onto 2 plates. How many biscuits are on each plate?' },
    options: { el: ['8', '20', '5', '12'], en: ['8', '20', '5', '12'] },
    correct: 2,
    explanation: {
      el: '10 ÷ 2 = 5. Στα ίσα σε δύο σημαίνει το μισό: 5 + 5 = 10.',
      en: '10 ÷ 2 = 5. Equally between two means half: 5 + 5 = 10.',
    },
  },
  {
    q: { el: 'Ποιο σημάδι σημαίνει «μοιράζω στα ίσα»;', en: 'Which sign means "share equally"?' },
    options: { el: ['+', '×', '−', '÷'], en: ['+', '×', '−', '÷'] },
    correct: 3,
    explanation: {
      el: 'Το «÷» είναι το σημάδι της διαίρεσης. Το «+» προσθέτει, το «−» αφαιρεί και το «×» πολλαπλασιάζει.',
      en: 'The «÷» sign means division. «+» adds, «−» takes away and «×» multiplies.',
    },
  },
  {
    q: { el: '15 μήλα μοιράζονται στα ίσα σε 5 καλάθια. Ποια πράξη το δείχνει;', en: '15 apples are shared equally into 5 baskets. Which sum shows this?' },
    options: { el: ['15 ÷ 5', '15 × 5', '5 ÷ 15', '15 − 5'], en: ['15 ÷ 5', '15 × 5', '5 ÷ 15', '15 − 5'] },
    correct: 0,
    explanation: {
      el: 'Γράφουμε πρώτα αυτό που μοιράζουμε (15) και μετά σε πόσα μέρη (5): 15 ÷ 5 = 3 μήλα σε κάθε καλάθι.',
      en: 'We write what we share first (15), then how many parts (5): 15 ÷ 5 = 3 apples in each basket.',
    },
  },

  // ── 5–8: making groups ────────────────────────────────────────────────────
  {
    q: { el: 'Έχουμε 8 κάλτσες. Πόσα ζευγάρια (ανά 2) μπορούμε να φτιάξουμε;', en: 'We have 8 socks. How many pairs (groups of 2) can we make?' },
    options: { el: ['2', '6', '4', '16'], en: ['2', '6', '4', '16'] },
    correct: 2,
    explanation: {
      el: 'Μετράμε ανά 2: 2, 4, 6, 8 — τέσσερα βήματα. 8 ÷ 2 = 4 ζευγάρια.',
      en: 'Count in twos: 2, 4, 6, 8 — four steps. 8 ÷ 2 = 4 pairs.',
    },
  },
  {
    q: { el: 'Η δασκάλα έχει 20 παιδιά και φτιάχνει ομάδες των 5. Πόσες ομάδες θα φτιάξει;', en: 'The teacher has 20 children and makes groups of 5. How many groups will she make?' },
    options: { el: ['15', '4', '25', '5'], en: ['15', '4', '25', '5'] },
    correct: 1,
    explanation: {
      el: 'Μετράμε ανά 5: 5, 10, 15, 20 — τέσσερα βήματα. 20 ÷ 5 = 4 ομάδες.',
      en: 'Count in fives: 5, 10, 15, 20 — four steps. 20 ÷ 5 = 4 groups.',
    },
  },
  {
    q: { el: 'Πόσα πακέτα των 10 φτιάχνουμε με 30 μολύβια;', en: 'How many packs of 10 can we make with 30 pencils?' },
    options: { el: ['3', '20', '30', '10'], en: ['3', '20', '30', '10'] },
    correct: 0,
    explanation: {
      el: '10 + 10 + 10 = 30, άρα 3 πακέτα. 30 ÷ 10 = 3.',
      en: '10 + 10 + 10 = 30, so 3 packs. 30 ÷ 10 = 3.',
    },
  },
  {
    q: { el: 'Έχουμε 14 μπάλες και βάζουμε 2 σε κάθε κουτί. Ποια πράξη δείχνει πόσα κουτιά χρειαζόμαστε;', en: 'We have 14 balls and put 2 in each box. Which sum shows how many boxes we need?' },
    options: { el: ['14 + 2', '14 × 2', '2 ÷ 14', '14 ÷ 2'], en: ['14 + 2', '14 × 2', '2 ÷ 14', '14 ÷ 2'] },
    correct: 3,
    explanation: {
      el: 'Χωρίζουμε τις 14 μπάλες σε δυάδες: 14 ÷ 2 = 7 κουτιά.',
      en: 'We split the 14 balls into twos: 14 ÷ 2 = 7 boxes.',
    },
  },

  // ── 9–12: division is the opposite of multiplication ──────────────────────
  {
    q: { el: 'Αφού 3 × 4 = 12, πόσο κάνει 12 ÷ 3;', en: 'Since 3 × 4 = 12, what is 12 ÷ 3?' },
    options: { el: ['3', '12', '4', '36'], en: ['3', '12', '4', '36'] },
    correct: 2,
    explanation: {
      el: 'Η διαίρεση είναι το ανάποδο του πολλαπλασιασμού: 3 × 4 = 12, άρα 12 ÷ 3 = 4 και 12 ÷ 4 = 3.',
      en: 'Division is the opposite of multiplication: 3 × 4 = 12, so 12 ÷ 3 = 4 and 12 ÷ 4 = 3.',
    },
  },
  {
    q: { el: 'Ποια πράξη είναι η «ανάποδη» του 5 × 2 = 10;', en: 'Which sum is the "reverse" of 5 × 2 = 10?' },
    options: { el: ['10 ÷ 2 = 5', '10 + 2 = 12', '10 − 5 = 5', '5 + 2 = 7'], en: ['10 ÷ 2 = 5', '10 + 2 = 12', '10 − 5 = 5', '5 + 2 = 7'] },
    correct: 0,
    explanation: {
      el: 'Ο πολλαπλασιασμός φτιάχνει το 10 από 5 δυάδες. Η διαίρεση το χωρίζει πάλι: 10 ÷ 2 = 5.',
      en: 'Multiplication builds 10 from 5 twos. Division splits it back up: 10 ÷ 2 = 5.',
    },
  },
  {
    q: { el: '16 ÷ 2 = ___. Ποιος αριθμός λείπει;', en: '16 ÷ 2 = ___. Which number is missing?' },
    options: { el: ['6', '14', '8', '32'], en: ['6', '14', '8', '32'] },
    correct: 2,
    explanation: {
      el: 'Σκέψου: 2 × πόσο = 16; 2 × 8 = 16, άρα 16 ÷ 2 = 8.',
      en: 'Think: 2 × what = 16? 2 × 8 = 16, so 16 ÷ 2 = 8.',
    },
  },
  {
    q: { el: 'Ποια πράξη της προπαίδειας μας βοηθάει να βρούμε το 20 ÷ 4;', en: 'Which times-table fact helps us find 20 ÷ 4?' },
    options: { el: ['4 + 5 = 9', '4 × 5 = 20', '20 × 4 = 80', '20 + 4 = 24'], en: ['4 + 5 = 9', '4 × 5 = 20', '20 × 4 = 80', '20 + 4 = 24'] },
    correct: 1,
    explanation: {
      el: 'Ψάχνουμε «4 × πόσο = 20». Αφού 4 × 5 = 20, το 20 ÷ 4 = 5.',
      en: 'We look for "4 × what = 20". Since 4 × 5 = 20, 20 ÷ 4 = 5.',
    },
  },

  // ── 13–15: quick divisions ────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 18 ÷ 2;', en: 'What is 18 ÷ 2?' },
    options: { el: ['8', '16', '9', '20'], en: ['8', '16', '9', '20'] },
    correct: 2,
    explanation: {
      el: '18 ÷ 2 = 9, γιατί 9 + 9 = 18. Το ÷ 2 είναι το μισό!',
      en: '18 ÷ 2 = 9, because 9 + 9 = 18. Dividing by 2 means half!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 20 ÷ 5;', en: 'What is 20 ÷ 5?' },
    options: { el: ['5', '15', '25', '4'], en: ['5', '15', '25', '4'] },
    correct: 3,
    explanation: {
      el: '20 ÷ 5 = 4, γιατί 5 × 4 = 20. Μετράμε ανά 5: 5, 10, 15, 20.',
      en: '20 ÷ 5 = 4, because 5 × 4 = 20. Count in fives: 5, 10, 15, 20.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 40 ÷ 10;', en: 'What is 40 ÷ 10?' },
    options: { el: ['4', '30', '50', '400'], en: ['4', '30', '50', '400'] },
    correct: 0,
    explanation: {
      el: '40 ÷ 10 = 4, γιατί 10 × 4 = 40. Το 40 έχει 4 δεκάδες.',
      en: '40 ÷ 10 = 4, because 10 × 4 = 40. 40 has 4 tens.',
    },
  },

  // ── 16–18: when some are left over ────────────────────────────────────────
  {
    q: { el: 'Έχουμε 7 καραμέλες για 2 παιδιά. Πόσες παίρνει το καθένα και πόσες περισσεύουν;', en: 'We have 7 sweets for 2 children. How many does each one get, and how many are left over?' },
    options: { el: ['4 το καθένα, δεν περισσεύει καμία', '3 το καθένα, περισσεύει 1', '2 το καθένα, περισσεύουν 3', '3 το καθένα, περισσεύουν 2'], en: ['4 each, none left over', '3 each, 1 left over', '2 each, 3 left over', '3 each, 2 left over'] },
    correct: 1,
    explanation: {
      el: '3 + 3 = 6, και μένει 1 καραμέλα που δεν μοιράζεται στα ίσα. 7 ÷ 2 = 3 και περισσεύει 1.',
      en: '3 + 3 = 6, and 1 sweet is left that cannot be shared equally. 7 ÷ 2 = 3 with 1 left over.',
    },
  },
  {
    q: { el: 'Μοιράζουμε 11 αυτοκόλλητα στα ίσα σε 5 παιδιά. Πόσα αυτοκόλλητα περισσεύουν;', en: 'We share 11 stickers equally between 5 children. How many stickers are left over?' },
    options: { el: ['0', '5', '2', '1'], en: ['0', '5', '2', '1'] },
    correct: 3,
    explanation: {
      el: 'Κάθε παιδί παίρνει 2: 5 × 2 = 10. Από τα 11 μένει 1 αυτοκόλλητο. 11 ÷ 5 = 2 και περισσεύει 1.',
      en: 'Each child gets 2: 5 × 2 = 10. From 11, 1 sticker is left. 11 ÷ 5 = 2 with 1 left over.',
    },
  },
  {
    q: { el: 'Ο Πέτρος έχει 17 μπαλάκια και βάζει 5 σε κάθε σακούλα. Πόσες σακούλες γεμίζει και πόσα μπαλάκια μένουν έξω;', en: 'Petros has 17 balls and puts 5 in each bag. How many bags does he fill, and how many balls are left out?' },
    options: { el: ['4 σακούλες, μένουν 3', '3 σακούλες, μένουν 2', '2 σακούλες, μένουν 7', '3 σακούλες, δεν μένει κανένα'], en: ['4 bags, 3 left', '3 bags, 2 left', '2 bags, 7 left', '3 bags, none left'] },
    correct: 1,
    explanation: {
      el: 'Μετράμε ανά 5: 5, 10, 15 — τρεις σακούλες. 17 − 15 = 2 μπαλάκια μένουν έξω. 17 ÷ 5 = 3 και περισσεύουν 2.',
      en: 'Count in fives: 5, 10, 15 — three bags. 17 − 15 = 2 balls are left out. 17 ÷ 5 = 3 with 2 left over.',
    },
  },
];
