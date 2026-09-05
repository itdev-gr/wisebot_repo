/**
 * Γ' Δημοτικού · Μαθηματικά · Μοτίβα & Ισότητες
 * ===============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–4   continue a number pattern: +3, −5, ×2, +10
 *   5–7   find the rule of a pattern (check more than one step!)
 *   8–12  the missing number in an equation: 7 × □ = 42, □ − 18 = 25, 36 + □ = 60, □ ÷ 4 = 9
 *   13–15 the equals sign: both sides must be worth the same (5 + 7 = □ + 4, a balance)
 *   16–18 function machines: input → rule → output, and finding the rule
 *
 * Distractors are the mistakes children actually make: using the wrong step of the
 * pattern, guessing the rule from the first pair only, doing the same operation
 * instead of the inverse to find the missing number.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_PATTERNS_AND_MISSING_NUMBERS: QuizQuestion[] = [
  // ── 1–4: continue the pattern ───────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο 4, 7, 10, 13, ___;', en: 'Which number continues the pattern 4, 7, 10, 13, ___?' },
    options: { el: ['14', '15', '16', '17'], en: ['14', '15', '16', '17'] },
    correct: 2,
    explanation: {
      el: 'Κάθε αριθμός είναι 3 περισσότερο από τον προηγούμενο (+3). Άρα 13 + 3 = 16.',
      en: 'Each number is 3 more than the one before (+3). So 13 + 3 = 16.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο 50, 45, 40, 35, ___;', en: 'Which number continues the pattern 50, 45, 40, 35, ___?' },
    options: { el: ['30', '25', '34', '40'], en: ['30', '25', '34', '40'] },
    correct: 0,
    explanation: {
      el: 'Οι αριθμοί μικραίνουν κατά 5 κάθε φορά (−5). Άρα 35 − 5 = 30.',
      en: 'The numbers go down by 5 each time (−5). So 35 − 5 = 30.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο 3, 6, 12, 24, ___;', en: 'Which number continues the pattern 3, 6, 12, 24, ___?' },
    options: { el: ['36', '30', '48', '27'], en: ['36', '30', '48', '27'] },
    correct: 2,
    explanation: {
      el: 'Κάθε αριθμός είναι ο διπλάσιος του προηγούμενου (×2): 24 × 2 = 48. Το 27 θα ήταν +3, αλλά από το 6 στο 12 δεν πήγαμε +3.',
      en: 'Each number is double the one before (×2): 24 × 2 = 48. 27 would be +3, but from 6 to 12 we did not go +3.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει από το μοτίβο 120, 130, 140, ___, 160;', en: 'Which number is missing from the pattern 120, 130, 140, ___, 160?' },
    options: { el: ['145', '150', '155', '141'], en: ['145', '150', '155', '141'] },
    correct: 1,
    explanation: {
      el: 'Το μοτίβο ανεβαίνει κατά 10 (+10). Μετά το 140 έρχεται το 150, και μετά το 160.',
      en: 'The pattern goes up by 10 (+10). After 140 comes 150, and then 160.',
    },
  },

  // ── 5–7: the rule of a pattern ──────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο κανόνας του μοτίβου 2, 6, 10, 14, 18;', en: 'What is the rule of the pattern 2, 6, 10, 14, 18?' },
    options: { el: ['+2', '+4', '×2', '×3'], en: ['+2', '+4', '×2', '×3'] },
    correct: 1,
    explanation: {
      el: 'Από το 2 στο 6 είναι +4, από το 6 στο 10 πάλι +4. Ο κανόνας είναι +4. (Το ×3 δουλεύει μόνο για το πρώτο βήμα — έλεγξε πάντα δύο βήματα!)',
      en: 'From 2 to 6 is +4, from 6 to 10 is +4 again. The rule is +4. (×3 only works for the first step — always check two steps!)',
    },
  },
  {
    q: { el: 'Ποιος είναι ο κανόνας του μοτίβου 81, 72, 63, 54, 45;', en: 'What is the rule of the pattern 81, 72, 63, 54, 45?' },
    options: { el: ['−10', '+9', '−8', '−9'], en: ['−10', '+9', '−8', '−9'] },
    correct: 3,
    explanation: {
      el: 'Οι αριθμοί μικραίνουν: 81 − 72 = 9, 72 − 63 = 9. Ο κανόνας είναι −9. Είναι η προπαίδεια του 9 ανάποδα!',
      en: 'The numbers get smaller: 81 − 72 = 9, 72 − 63 = 9. The rule is −9. It is the 9 times table backwards!',
    },
  },
  {
    q: { el: 'Ποιος είναι ο κανόνας του μοτίβου 1, 2, 4, 8, 16;', en: 'What is the rule of the pattern 1, 2, 4, 8, 16?' },
    options: { el: ['+1', '+2', '×2', '×4'], en: ['+1', '+2', '×2', '×4'] },
    correct: 2,
    explanation: {
      el: 'Κάθε αριθμός διπλασιάζεται: 1 × 2 = 2, 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16. Ο κανόνας είναι ×2.',
      en: 'Each number doubles: 1 × 2 = 2, 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16. The rule is ×2.',
    },
  },

  // ── 8–12: the missing number ────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει στην ισότητα 7 × □ = 42;', en: 'Which number is missing in the equation 7 × □ = 42?' },
    options: { el: ['5', '6', '7', '8'], en: ['5', '6', '7', '8'] },
    correct: 1,
    explanation: {
      el: 'Ρωτάμε: «7 φορές ποιον αριθμό κάνει 42;». 7 × 6 = 42. Ή με διαίρεση: 42 ÷ 7 = 6.',
      en: 'We ask: “7 times which number makes 42?”. 7 × 6 = 42. Or with division: 42 ÷ 7 = 6.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει στην ισότητα □ − 18 = 25;', en: 'Which number is missing in the equation □ − 18 = 25?' },
    options: { el: ['7', '33', '43', '53'], en: ['7', '33', '43', '53'] },
    correct: 2,
    explanation: {
      el: 'Για να βρούμε τον αριθμό που λείπει, κάνουμε την αντίστροφη πράξη: 25 + 18 = 43. Έλεγχος: 43 − 18 = 25.',
      en: 'To find the missing number we do the inverse operation: 25 + 18 = 43. Check: 43 − 18 = 25.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει στην ισότητα 36 + □ = 60;', en: 'Which number is missing in the equation 36 + □ = 60?' },
    options: { el: ['24', '96', '34', '26'], en: ['24', '96', '34', '26'] },
    correct: 0,
    explanation: {
      el: 'Πόσο λείπει από το 36 για να φτάσουμε το 60; 60 − 36 = 24. Έλεγχος: 36 + 24 = 60.',
      en: 'How much is missing from 36 to reach 60? 60 − 36 = 24. Check: 36 + 24 = 60.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει στην ισότητα □ ÷ 4 = 9;', en: 'Which number is missing in the equation □ ÷ 4 = 9?' },
    options: { el: ['13', '36', '5', '32'], en: ['13', '36', '5', '32'] },
    correct: 1,
    explanation: {
      el: 'Ποιος αριθμός μοιρασμένος σε 4 δίνει 9; Η αντίστροφη πράξη της διαίρεσης είναι ο πολλαπλασιασμός: 9 × 4 = 36.',
      en: 'Which number divided into 4 gives 9? The inverse of division is multiplication: 9 × 4 = 36.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει στην ισότητα 8 × □ = 56;', en: 'Which number is missing in the equation 8 × □ = 56?' },
    options: { el: ['6', '8', '9', '7'], en: ['6', '8', '9', '7'] },
    correct: 3,
    explanation: {
      el: '8 × 7 = 56. Θυμήσου το «5, 6, 7, 8»: 56 = 7 × 8. Έλεγχος με διαίρεση: 56 ÷ 8 = 7.',
      en: '8 × 7 = 56. Remember “5, 6, 7, 8”: 56 = 7 × 8. Check with division: 56 ÷ 8 = 7.',
    },
  },

  // ── 13–15: both sides of = are equal ────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός κάνει σωστή την ισότητα 5 + 7 = □ + 4;', en: 'Which number makes the equation 5 + 7 = □ + 4 true?' },
    options: { el: ['12', '8', '16', '3'], en: ['12', '8', '16', '3'] },
    correct: 1,
    explanation: {
      el: 'Το «=» λέει ότι οι δύο πλευρές είναι ίσες. Αριστερά: 5 + 7 = 12. Για να κάνει και η δεξιά 12: 8 + 4 = 12.',
      en: 'The “=” sign says both sides are equal. Left: 5 + 7 = 12. For the right side to make 12 too: 8 + 4 = 12.',
    },
  },
  {
    q: { el: 'Ποια ισότητα είναι σωστή;', en: 'Which equation is true?' },
    options: { el: ['3 × 4 = 6 × 2', '3 × 4 = 6 + 2', '3 + 4 = 6 × 2', '3 × 4 = 4 + 4'], en: ['3 × 4 = 6 × 2', '3 × 4 = 6 + 2', '3 + 4 = 6 × 2', '3 × 4 = 4 + 4'] },
    correct: 0,
    explanation: {
      el: 'Υπολογίζουμε και τις δύο πλευρές: 3 × 4 = 12 και 6 × 2 = 12. Ίσα! Στις άλλες οι πλευρές δίνουν διαφορετικούς αριθμούς (12 και 8, 7 και 12).',
      en: 'We work out both sides: 3 × 4 = 12 and 6 × 2 = 12. Equal! In the others the sides give different numbers (12 and 8, 7 and 12).',
    },
  },
  {
    q: { el: 'Μια ζυγαριά ισορροπεί. Αριστερά έχει 9 + 6 και δεξιά έχει 20 − □. Πόσο είναι το □;', en: 'A balance scale is level. On the left it has 9 + 6 and on the right it has 20 − □. What is □?' },
    options: { el: ['5', '15', '35', '10'], en: ['5', '15', '35', '10'] },
    correct: 0,
    explanation: {
      el: 'Η ζυγαριά ισορροπεί, άρα οι δύο πλευρές είναι ίσες. Αριστερά: 9 + 6 = 15. Δεξιά πρέπει να κάνει 15: 20 − 5 = 15.',
      en: 'The scale is level, so the two sides are equal. Left: 9 + 6 = 15. The right must make 15 too: 20 − 5 = 15.',
    },
  },

  // ── 16–18: function machines ────────────────────────────────────────────────
  {
    q: { el: 'Μια μηχανή αριθμών κάνει «+ 7». Βάζεις μέσα το 28. Ποιος αριθμός βγαίνει;', en: 'A number machine does “+ 7”. You put in 28. Which number comes out?' },
    options: { el: ['21', '287', '34', '35'], en: ['21', '287', '34', '35'] },
    correct: 3,
    explanation: {
      el: 'Η μηχανή προσθέτει 7 σε ό,τι βάλεις: 28 + 7 = 35.',
      en: 'The machine adds 7 to whatever you put in: 28 + 7 = 35.',
    },
  },
  {
    q: { el: 'Μια μηχανή αριθμών κάνει «× 3». Από τη μηχανή βγήκε το 27. Ποιον αριθμό έβαλες μέσα;', en: 'A number machine does “× 3”. The number 27 came out. Which number did you put in?' },
    options: { el: ['81', '24', '9', '30'], en: ['81', '24', '9', '30'] },
    correct: 2,
    explanation: {
      el: 'Πάμε ανάποδα: ποιος αριθμός επί 3 κάνει 27; 27 ÷ 3 = 9. Έλεγχος: 9 × 3 = 27.',
      en: 'We go backwards: which number times 3 makes 27? 27 ÷ 3 = 9. Check: 9 × 3 = 27.',
    },
  },
  {
    q: { el: 'Μια μηχανή αλλάζει τους αριθμούς έτσι: 5 → 10, 8 → 16, 12 → 24. Τι κάνει η μηχανή;', en: 'A machine changes numbers like this: 5 → 10, 8 → 16, 12 → 24. What does the machine do?' },
    options: { el: ['+5', '+8', '×3', '×2'], en: ['+5', '+8', '×3', '×2'] },
    correct: 3,
    explanation: {
      el: 'Το 5 έγινε 10, το 8 έγινε 16, το 12 έγινε 24: κάθε αριθμός διπλασιάστηκε. Η μηχανή κάνει ×2. (Το +5 δουλεύει μόνο για το 5!)',
      en: '5 became 10, 8 became 16, 12 became 24: every number was doubled. The machine does ×2. (+5 only works for the 5!)',
    },
  },
];
