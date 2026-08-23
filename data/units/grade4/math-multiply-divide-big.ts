/**
 * Δ' Δημοτικού · Μαθηματικά · Πολλαπλασιασμός και διαίρεση
 * =========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–6   multiplying by two-digit numbers (carry, ×10 + ×units split), money/days word problems
 *   7–9   multiplying three-digit numbers, the "forgotten zero" mistake, a pages word problem
 *   10–13 dividing by a two-digit divisor, including a sharing word problem
 *   14–16 exact division vs division with remainder (remainder must be smaller than the divisor)
 *   17–18 checking: multiply back (and add the remainder), estimate to spot a wrong answer
 *
 * Distractors are real child mistakes: adding instead of multiplying, forgetting the carry,
 * dropping the zero of the tens, off-by-one quotients, remainder larger than the divisor.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_MULTIPLY_DIVIDE_BIG: QuizQuestion[] = [
  // ── 1–6: multiplying by two-digit numbers ───────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 23 × 4;', en: 'What is 23 × 4?' },
    options: { el: ['82', '92', '27', '96'], en: ['82', '92', '27', '96'] },
    correct: 1,
    explanation: {
      el: '23 × 4 = 92. Πρώτα 3 × 4 = 12, γράφουμε 2 και κρατάμε 1. Μετά 2 × 4 = 8, και 1 το κρατούμενο → 9.',
      en: '23 × 4 = 92. First 3 × 4 = 12, write 2 and carry 1. Then 2 × 4 = 8, plus the carried 1 → 9.',
    },
  },
  {
    q: { el: 'Ένας χρόνος έχει 52 εβδομάδες. Πόσες μέρες είναι 52 εβδομάδες;', en: 'A year has 52 weeks. How many days are 52 weeks?' },
    options: { el: ['59', '354', '364', '374'], en: ['59', '354', '364', '374'] },
    correct: 2,
    explanation: {
      el: '52 εβδομάδες × 7 μέρες = 364 μέρες. Το 59 είναι 52 + 7 — πρόσθεση, όχι πολλαπλασιασμός!',
      en: '52 weeks × 7 days = 364 days. 59 is 52 + 7 — that is adding, not multiplying!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 14 × 12;', en: 'What is 14 × 12?' },
    options: { el: ['142', '168', '28', '158'], en: ['142', '168', '28', '158'] },
    correct: 1,
    explanation: {
      el: '14 × 12 = 168. Σπάμε το 12: 14 × 10 = 140 και 14 × 2 = 28. Μετά 140 + 28 = 168.',
      en: '14 × 12 = 168. Split the 12: 14 × 10 = 140 and 14 × 2 = 28. Then 140 + 28 = 168.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 25 × 16;', en: 'What is 25 × 16?' },
    options: { el: ['250', '41', '375', '400'], en: ['250', '41', '375', '400'] },
    correct: 3,
    explanation: {
      el: '25 × 16 = 400. Κόλπο: 25 × 4 = 100, και το 16 είναι 4 × 4, άρα 100 × 4 = 400.',
      en: '25 × 16 = 400. Trick: 25 × 4 = 100, and 16 is 4 × 4, so 100 × 4 = 400.',
    },
  },
  {
    q: { el: 'Τα 32 παιδιά της τάξης πληρώνουν 15 € το καθένα για την εκδρομή. Πόσα ευρώ μαζεύονται;', en: 'The 32 children in the class each pay €15 for the trip. How many euros are collected?' },
    options: { el: ['47 €', '320 €', '480 €', '460 €'], en: ['€47', '€320', '€480', '€460'] },
    correct: 2,
    explanation: {
      el: '32 × 15 = 480 €. 32 × 10 = 320 και 32 × 5 = 160. Μετά 320 + 160 = 480.',
      en: '32 × 15 = €480. 32 × 10 = 320 and 32 × 5 = 160. Then 320 + 160 = 480.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 36 × 24;', en: 'What is 36 × 24?' },
    options: { el: ['864', '744', '60', '964'], en: ['864', '744', '60', '964'] },
    correct: 0,
    explanation: {
      el: '36 × 24 = 864. 36 × 20 = 720 και 36 × 4 = 144. Μετά 720 + 144 = 864.',
      en: '36 × 24 = 864. 36 × 20 = 720 and 36 × 4 = 144. Then 720 + 144 = 864.',
    },
  },

  // ── 7–9: three-digit numbers ───────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 123 × 3;', en: 'What is 123 × 3?' },
    options: { el: ['126', '366', '369', '396'], en: ['126', '366', '369', '396'] },
    correct: 2,
    explanation: {
      el: '123 × 3 = 369. Πολλαπλασιάζουμε κάθε ψηφίο: 3 × 3 = 9, 2 × 3 = 6, 1 × 3 = 3.',
      en: '123 × 3 = 369. Multiply each digit: 3 × 3 = 9, 2 × 3 = 6, 1 × 3 = 3.',
    },
  },
  {
    q: { el: 'Ένα βιβλίο έχει 150 σελίδες. Πόσες σελίδες έχουν 12 ίδια βιβλία;', en: 'A book has 150 pages. How many pages do 12 of the same book have?' },
    options: { el: ['1.500', '162', '1.800', '1.650'], en: ['1,500', '162', '1,800', '1,650'] },
    correct: 2,
    explanation: {
      el: '150 × 12 = 1.800 σελίδες. 150 × 10 = 1.500 και 150 × 2 = 300. Μετά 1.500 + 300 = 1.800.',
      en: '150 × 12 = 1,800 pages. 150 × 10 = 1,500 and 150 × 2 = 300. Then 1,500 + 300 = 1,800.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 214 × 23;', en: 'What is 214 × 23?' },
    options: { el: ['1.070', '4.922', '4.822', '237'], en: ['1,070', '4,922', '4,822', '237'] },
    correct: 1,
    explanation: {
      el: '214 × 23 = 4.922. 214 × 20 = 4.280 και 214 × 3 = 642. Μετά 4.280 + 642 = 4.922. Μην ξεχνάς το 0 του 20!',
      en: '214 × 23 = 4,922. 214 × 20 = 4,280 and 214 × 3 = 642. Then 4,280 + 642 = 4,922. Do not forget the 0 of the 20!',
    },
  },

  // ── 10–13: dividing by a two-digit divisor ─────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 84 ÷ 12;', en: 'What is 84 ÷ 12?' },
    options: { el: ['6', '8', '7', '72'], en: ['6', '8', '7', '72'] },
    correct: 2,
    explanation: {
      el: '84 ÷ 12 = 7, γιατί 12 × 7 = 84. Η διαίρεση ρωτάει: «πόσες φορές χωράει το 12 στο 84;»',
      en: '84 ÷ 12 = 7, because 12 × 7 = 84. Division asks: “how many times does 12 fit into 84?”',
    },
  },
  {
    q: { el: 'Πόσο κάνει 450 ÷ 15;', en: 'What is 450 ÷ 15?' },
    options: { el: ['3', '30', '25', '35'], en: ['3', '30', '25', '35'] },
    correct: 1,
    explanation: {
      el: '450 ÷ 15 = 30, γιατί 15 × 30 = 450. Σκέψου: 15 × 3 = 45, άρα 15 × 30 = 450.',
      en: '450 ÷ 15 = 30, because 15 × 30 = 450. Think: 15 × 3 = 45, so 15 × 30 = 450.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 144 αυτοκόλλητα και τα βάζει σε φακελάκια των 12. Πόσα φακελάκια γεμίζει;', en: 'Eleni has 144 stickers and puts them in packets of 12. How many packets does she fill?' },
    options: { el: ['11', '13', '132', '12'], en: ['11', '13', '132', '12'] },
    correct: 3,
    explanation: {
      el: '144 ÷ 12 = 12 φακελάκια, γιατί 12 × 12 = 144. Όταν μοιράζουμε σε ίσες ομάδες, διαιρούμε.',
      en: '144 ÷ 12 = 12 packets, because 12 × 12 = 144. When we share into equal groups, we divide.',
    },
  },
  {
    q: { el: 'Ο Γιώργος μοιράζει 180 € σε 20 παιδιά εξίσου. Πόσα ευρώ παίρνει το καθένα;', en: 'Giorgos shares €180 equally among 20 children. How many euros does each one get?' },
    options: { el: ['9 €', '8 €', '90 €', '160 €'], en: ['€9', '€8', '€90', '€160'] },
    correct: 0,
    explanation: {
      el: '180 ÷ 20 = 9 €, γιατί 20 × 9 = 180. Κόλπο: σβήνουμε ένα 0 από το 180 και από το 20 → 18 ÷ 2 = 9.',
      en: '180 ÷ 20 = €9, because 20 × 9 = 180. Trick: drop one 0 from 180 and from 20 → 18 ÷ 2 = 9.',
    },
  },

  // ── 14–16: exact division vs remainder ─────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω διαιρέσεις είναι τέλεια (χωρίς υπόλοιπο);', en: 'Which of these divisions is exact (no remainder)?' },
    options: { el: ['75 ÷ 12', '72 ÷ 12', '70 ÷ 12', '80 ÷ 12'], en: ['75 ÷ 12', '72 ÷ 12', '70 ÷ 12', '80 ÷ 12'] },
    correct: 1,
    explanation: {
      el: '72 ÷ 12 = 6 ακριβώς, γιατί 12 × 6 = 72. Οι άλλοι αριθμοί δεν είναι στην προπαίδεια του 12, άρα αφήνουν υπόλοιπο.',
      en: '72 ÷ 12 = 6 exactly, because 12 × 6 = 72. The other numbers are not in the 12 times table, so they leave a remainder.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 85 ÷ 20;', en: 'What is 85 ÷ 20?' },
    options: { el: ['4, υπόλοιπο 5', '4, υπόλοιπο 0', '5, υπόλοιπο 0', '3, υπόλοιπο 25'], en: ['4, remainder 5', '4, remainder 0', '5, remainder 0', '3, remainder 25'] },
    correct: 0,
    explanation: {
      el: '20 × 4 = 80 και περισσεύουν 85 − 80 = 5. Άρα 85 ÷ 20 = 4 με υπόλοιπο 5. Το υπόλοιπο είναι πάντα μικρότερο από τον διαιρέτη!',
      en: '20 × 4 = 80 and 85 − 80 = 5 is left over. So 85 ÷ 20 = 4 remainder 5. The remainder is always smaller than the divisor!',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 100 αβγά και τα βάζει σε κουτιά των 12. Πόσα αβγά περισσεύουν;', en: 'Nikos has 100 eggs and puts them in boxes of 12. How many eggs are left over?' },
    options: { el: ['0', '8', '12', '4'], en: ['0', '8', '12', '4'] },
    correct: 3,
    explanation: {
      el: '12 × 8 = 96, άρα γεμίζει 8 κουτιά και περισσεύουν 100 − 96 = 4 αβγά. Το 8 είναι τα κουτιά, όχι τα αβγά που περισσεύουν.',
      en: '12 × 8 = 96, so he fills 8 boxes and 100 − 96 = 4 eggs are left. The 8 is the boxes, not the leftover eggs.',
    },
  },

  // ── 17–18: checking the answer ─────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία βρήκε 91 ÷ 13 = 7. Πώς ελέγχει ότι είναι σωστό;', en: 'Maria found 91 ÷ 13 = 7. How does she check that it is right?' },
    options: { el: ['13 + 7 = 20', '13 × 7 = 91', '91 − 7 = 84', '91 × 7'], en: ['13 + 7 = 20', '13 × 7 = 91', '91 − 7 = 84', '91 × 7'] },
    correct: 1,
    explanation: {
      el: 'Για να ελέγξουμε μια διαίρεση, πολλαπλασιάζουμε: διαιρέτης × πηλίκο. 13 × 7 = 91, άρα η διαίρεση είναι σωστή.',
      en: 'To check a division, we multiply: divisor × quotient. 13 × 7 = 91, so the division is right.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει ότι 39 × 21 = 189. Χωρίς να κάνεις την πράξη, πώς καταλαβαίνεις ότι είναι λάθος;', en: 'Giorgos says 39 × 21 = 189. Without doing the sum, how can you tell it is wrong?' },
    options: { el: ['Γιατί 39 + 21 = 60', 'Γιατί το 189 τελειώνει σε 9', 'Γιατί 40 × 20 = 800, άρα η απάντηση πρέπει να είναι κοντά στο 800', 'Δεν είναι λάθος'], en: ['Because 39 + 21 = 60', 'Because 189 ends in 9', 'Because 40 × 20 = 800, so the answer must be close to 800', 'It is not wrong'] },
    correct: 2,
    explanation: {
      el: 'Στρογγυλοποιούμε για να ελέγξουμε: 39 είναι σχεδόν 40 και 21 σχεδόν 20. 40 × 20 = 800, άρα το 189 είναι πολύ μικρό. Η σωστή απάντηση είναι 819.',
      en: 'We round to check: 39 is almost 40 and 21 is almost 20. 40 × 20 = 800, so 189 is far too small. The right answer is 819.',
    },
  },
];
