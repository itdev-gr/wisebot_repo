/**
 * Β' Δημοτικού · Μαθηματικά · Πρώτη προπαίδεια
 * ============================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–3   repeated addition: equal groups, "φορές", writing + as ×
 *   4–6   the table of 2 · 7–9 the table of 5 · 10–11 the table of 10
 *   12–13 the table of 3 · 14–15 the table of 4
 *   16–18 fair sharing as division (÷), ending with a mixed word problem
 * Distractors are real child mistakes: adding instead of multiplying, the neighbouring
 * table, the previous/next multiple, an off-by-one count.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_INTRO_TIMES_TABLES: QuizQuestion[] = [
  // ── 1–3: repeated addition ─────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2 + 2 + 2;', en: 'What is 2 + 2 + 2?' },
    options: { el: ['4', '6', '8', '5'], en: ['4', '6', '8', '5'] },
    correct: 1,
    explanation: {
      el: '2 + 2 + 2 = 6. Είναι τρεις φορές το 2.',
      en: '2 + 2 + 2 = 6. That is three times 2.',
    },
  },
  {
    q: { el: 'Το 5 + 5 + 5 + 5 γράφεται και…', en: '5 + 5 + 5 + 5 can also be written as…' },
    options: { el: ['5 × 5', '4 + 5', '4 × 5', '5 × 3'], en: ['5 × 5', '4 + 5', '4 × 5', '5 × 3'] },
    correct: 2,
    explanation: {
      el: 'Το 5 το βάζουμε 4 φορές. «4 φορές το 5» γράφεται 4 × 5 και κάνει 20.',
      en: 'We put 5 four times. “4 times 5” is written 4 × 5 and equals 20.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 3 πιάτα με 2 μπισκότα το καθένα. Ποια πράξη δείχνει πόσα μπισκότα έχει;', en: 'Eleni has 3 plates with 2 biscuits on each. Which sum shows how many biscuits she has?' },
    options: { el: ['3 + 2', '3 − 2', '2 + 2', '3 × 2'], en: ['3 + 2', '3 − 2', '2 + 2', '3 × 2'] },
    correct: 3,
    explanation: {
      el: '3 πιάτα με 2 μπισκότα = 3 × 2 = 6 μπισκότα. Ίδιες ομάδες; Πολλαπλασιάζουμε!',
      en: '3 plates with 2 biscuits = 3 × 2 = 6 biscuits. Equal groups? We multiply!',
    },
  },

  // ── 4–6: the table of 2 ────────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2 × 4;', en: 'What is 2 × 4?' },
    options: { el: ['6', '8', '10', '24'], en: ['6', '8', '10', '24'] },
    correct: 1,
    explanation: {
      el: '2 × 4 = 8. Μετράμε ανά 2: 2, 4, 6, 8 — τέσσερα βήματα.',
      en: '2 × 4 = 8. Count in twos: 2, 4, 6, 8 — four steps.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 2 × 7;', en: 'What is 2 × 7?' },
    options: { el: ['12', '9', '14', '16'], en: ['12', '9', '14', '16'] },
    correct: 2,
    explanation: {
      el: '2 × 7 = 14. Δύο φορές το 7 είναι 7 + 7 = 14.',
      en: '2 × 7 = 14. Two times 7 is 7 + 7 = 14.',
    },
  },
  {
    q: { el: 'Κάθε ποδήλατο έχει 2 ρόδες. Πόσες ρόδες έχουν 6 ποδήλατα;', en: 'Every bicycle has 2 wheels. How many wheels do 6 bicycles have?' },
    options: { el: ['12', '8', '10', '14'], en: ['12', '8', '10', '14'] },
    correct: 0,
    explanation: {
      el: '6 ποδήλατα × 2 ρόδες = 12 ρόδες. (Το 8 είναι 6 + 2 — αυτό είναι πρόσθεση!)',
      en: '6 bicycles × 2 wheels = 12 wheels. (8 is 6 + 2 — that is adding!)',
    },
  },

  // ── 7–9: the table of 5 ────────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 5 × 3;', en: 'What is 5 × 3?' },
    options: { el: ['8', '10', '15', '20'], en: ['8', '10', '15', '20'] },
    correct: 2,
    explanation: {
      el: '5 × 3 = 15. Μετράμε ανά 5: 5, 10, 15 — τρία βήματα.',
      en: '5 × 3 = 15. Count in fives: 5, 10, 15 — three steps.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5 × 6;', en: 'What is 5 × 6?' },
    options: { el: ['25', '30', '35', '11'], en: ['25', '30', '35', '11'] },
    correct: 1,
    explanation: {
      el: '5 × 6 = 30. Η προπαίδεια του 5 τελειώνει πάντα σε 0 ή 5: 5, 10, 15, 20, 25, 30.',
      en: '5 × 6 = 30. The 5 times table always ends in 0 or 5: 5, 10, 15, 20, 25, 30.',
    },
  },
  {
    q: { el: 'Ένα αυτοκόλλητο κοστίζει 5 €. Πόσο κοστίζουν 4 αυτοκόλλητα;', en: 'One sticker costs €5. How much do 4 stickers cost?' },
    options: { el: ['9 €', '15 €', '25 €', '20 €'], en: ['€9', '€15', '€25', '€20'] },
    correct: 3,
    explanation: {
      el: '4 αυτοκόλλητα × 5 € = 20 €. Τέσσερις φορές τα 5 ευρώ.',
      en: '4 stickers × €5 = €20. Four times 5 euros.',
    },
  },

  // ── 10–11: the table of 10 ─────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 10 × 3;', en: 'What is 10 × 3?' },
    options: { el: ['13', '30', '33', '20'], en: ['13', '30', '33', '20'] },
    correct: 1,
    explanation: {
      el: '10 × 3 = 30. Τρεις δεκάδες: 10, 20, 30.',
      en: '10 × 3 = 30. Three tens: 10, 20, 30.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 5 κουτιά με 10 μολύβια το καθένα. Πόσα μολύβια έχει;', en: 'Nikos has 5 boxes with 10 pencils in each. How many pencils does he have?' },
    options: { el: ['15', '40', '50', '55'], en: ['15', '40', '50', '55'] },
    correct: 2,
    explanation: {
      el: '5 κουτιά × 10 μολύβια = 50 μολύβια. Με το 10, ο αριθμός παίρνει ένα 0 στο τέλος.',
      en: '5 boxes × 10 pencils = 50 pencils. With 10, the number gets a 0 on the end.',
    },
  },

  // ── 12–13: the table of 3 ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 3 × 4;', en: 'What is 3 × 4?' },
    options: { el: ['7', '9', '12', '15'], en: ['7', '9', '12', '15'] },
    correct: 2,
    explanation: {
      el: '3 × 4 = 12. Μετράμε ανά 3: 3, 6, 9, 12 — τέσσερα βήματα.',
      en: '3 × 4 = 12. Count in threes: 3, 6, 9, 12 — four steps.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 3 × ___ = 18', en: 'Which number is missing? 3 × ___ = 18' },
    options: { el: ['5', '6', '7', '15'], en: ['5', '6', '7', '15'] },
    correct: 1,
    explanation: {
      el: '3 × 6 = 18. Μετράμε ανά 3: 3, 6, 9, 12, 15, 18 — έξι βήματα.',
      en: '3 × 6 = 18. Count in threes: 3, 6, 9, 12, 15, 18 — six steps.',
    },
  },

  // ── 14–15: the table of 4 ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 4 × 5;', en: 'What is 4 × 5?' },
    options: { el: ['16', '9', '24', '20'], en: ['16', '9', '24', '20'] },
    correct: 3,
    explanation: {
      el: '4 × 5 = 20. Είναι το ίδιο με 5 × 4 — η σειρά δεν αλλάζει το αποτέλεσμα.',
      en: '4 × 5 = 20. It is the same as 5 × 4 — the order does not change the answer.',
    },
  },
  {
    q: { el: 'Κάθε γάτα έχει 4 πόδια. Πόσα πόδια έχουν 3 γάτες;', en: 'Every cat has 4 legs. How many legs do 3 cats have?' },
    options: { el: ['7', '12', '16', '8'], en: ['7', '12', '16', '8'] },
    correct: 1,
    explanation: {
      el: '3 γάτες × 4 πόδια = 12 πόδια. 4 + 4 + 4 = 12.',
      en: '3 cats × 4 legs = 12 legs. 4 + 4 + 4 = 12.',
    },
  },

  // ── 16–18: fair sharing as division ────────────────────────────────────────
  {
    q: { el: 'Μοιράζουμε 10 καραμέλες δίκαια σε 2 παιδιά. Πόσες παίρνει το καθένα;', en: 'We share 10 sweets fairly between 2 children. How many does each one get?' },
    options: { el: ['8', '4', '5', '12'], en: ['8', '4', '5', '12'] },
    correct: 2,
    explanation: {
      el: '10 ÷ 2 = 5. Δίκαια μοιρασιά σημαίνει ότι όλοι παίρνουν τα ίδια: 5 + 5 = 10.',
      en: '10 ÷ 2 = 5. Fair sharing means everyone gets the same: 5 + 5 = 10.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 15 ÷ 5;', en: 'What is 15 ÷ 5?' },
    options: { el: ['3', '5', '10', '20'], en: ['3', '5', '10', '20'] },
    correct: 0,
    explanation: {
      el: '15 ÷ 5 = 3, γιατί 3 × 5 = 15. Η διαίρεση είναι ο πολλαπλασιασμός ανάποδα.',
      en: '15 ÷ 5 = 3, because 3 × 5 = 15. Division is multiplication backwards.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει 2 κουτιά με 4 κάρτες το καθένα. Τις μοιράζει δίκαια σε 4 φίλους. Πόσες παίρνει ο καθένας;', en: 'Giorgos has 2 boxes with 4 cards in each. He shares them fairly among 4 friends. How many does each friend get?' },
    options: { el: ['8', '4', '2', '6'], en: ['8', '4', '2', '6'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα οι κάρτες: 2 × 4 = 8. Μετά η μοιρασιά: 8 ÷ 4 = 2 κάρτες ο καθένας.',
      en: 'First the cards: 2 × 4 = 8. Then the sharing: 8 ÷ 4 = 2 cards each.',
    },
  },
];
