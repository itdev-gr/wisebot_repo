/**
 * Γ' Δημοτικού · Μαθηματικά · Πολλαπλασιασμός & Προπαίδεια — SAMPLE UNIT
 * =======================================================================
 * The first filled unit of CONTENT-PLAN.md Phase 1b, written for the owner's approval
 * before the other 29 units. All questions are original (curriculum structure only —
 * nothing from ebooks.edu.gr). Language level: a child of 8–9.
 *
 * What the unit covers, in the order a Γ' class meets it:
 *   1–3   what "×" means: repeated addition, groups, the word "φορές"
 *   4–9   the times tables 2–10, including the ones children mix up (6×7, 7×8, 9×6)
 *   10–11 order does not matter (3×4 = 4×3), multiplying by 1 and by 0
 *   12–13 ×10 and ×100 — the "add a zero" pattern, stated carefully
 *   14–18 word problems: money, days, legs, chairs, a mixed step (multiply then add)
 *
 * Distractors are the mistakes children actually make: the neighbouring table
 * (7×6=36), adding instead of multiplying (7+6), the previous/next multiple.
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_MULTIPLICATION: QuizQuestion[] = [
  // ── 1–3: what multiplication is ─────────────────────────────────────────────
  {
    q: { el: '3 + 3 + 3 + 3 είναι το ίδιο με…', en: '3 + 3 + 3 + 3 is the same as…' },
    options: { el: ['4 × 3', '3 × 3', '4 + 3', '3 × 5'], en: ['4 × 3', '3 × 3', '4 + 3', '3 × 5'] },
    correct: 0,
    explanation: {
      el: 'Το 3 το προσθέτουμε 4 φορές. «4 φορές το 3» γράφεται 4 × 3 και κάνει 12.',
      en: 'We add 3 four times. “4 times 3” is written 4 × 3 and equals 12.',
    },
  },
  {
    q: { el: 'Έχεις 5 σακουλάκια με 2 μπάλες το καθένα. Ποια πράξη δείχνει πόσες μπάλες έχεις;', en: 'You have 5 bags with 2 balls in each. Which sum shows how many balls you have?' },
    options: { el: ['5 + 2', '5 × 2', '5 − 2', '2 + 2'], en: ['5 + 2', '5 × 2', '5 − 2', '2 + 2'] },
    correct: 1,
    explanation: {
      el: '5 ομάδες από 2 = 5 × 2 = 10 μπάλες. Όταν έχουμε ίδιες ομάδες, πολλαπλασιάζουμε.',
      en: '5 groups of 2 = 5 × 2 = 10 balls. When the groups are equal, we multiply.',
    },
  },
  {
    q: { el: 'Τι σημαίνει 6 × 4;', en: 'What does 6 × 4 mean?' },
    options: { el: ['6 φορές το 4', '6 και 4', '6 χωρίς 4', '4 μέσα στο 6'], en: ['6 times 4', '6 and 4', '6 minus 4', '4 inside 6'] },
    correct: 0,
    explanation: {
      el: '6 × 4 = «6 φορές το 4» = 4 + 4 + 4 + 4 + 4 + 4 = 24.',
      en: '6 × 4 = “6 times 4” = 4 + 4 + 4 + 4 + 4 + 4 = 24.',
    },
  },

  // ── 4–9: the times tables ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 4 × 5;', en: 'What is 4 × 5?' },
    options: { el: ['20', '9', '25', '15'], en: ['20', '9', '25', '15'] },
    correct: 0,
    explanation: {
      el: '4 × 5 = 20. Μετράμε ανά 5: 5, 10, 15, 20 — τέσσερα βήματα.',
      en: '4 × 5 = 20. Count in fives: 5, 10, 15, 20 — four steps.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 6 × 7;', en: 'What is 6 × 7?' },
    options: { el: ['36', '42', '48', '13'], en: ['36', '42', '48', '13'] },
    correct: 1,
    explanation: {
      el: '6 × 7 = 42. Κόλπο: 6 × 7 = 6 × 5 + 6 × 2 = 30 + 12 = 42.',
      en: '6 × 7 = 42. Trick: 6 × 7 = 6 × 5 + 6 × 2 = 30 + 12 = 42.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 7 × 8;', en: 'What is 7 × 8?' },
    options: { el: ['54', '64', '56', '48'], en: ['54', '64', '56', '48'] },
    correct: 2,
    explanation: {
      el: '7 × 8 = 56. Θυμήσου το «5, 6, 7, 8»: 56 = 7 × 8!',
      en: '7 × 8 = 56. Remember “5, 6, 7, 8”: 56 = 7 × 8!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 9 × 6;', en: 'What is 9 × 6?' },
    options: { el: ['56', '45', '63', '54'], en: ['56', '45', '63', '54'] },
    correct: 3,
    explanation: {
      el: '9 × 6 = 54. Κόλπο του 9: 10 × 6 = 60, βγάζουμε ένα 6 → 54.',
      en: '9 × 6 = 54. The 9 trick: 10 × 6 = 60, take away one 6 → 54.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 8 × 3;', en: 'What is 8 × 3?' },
    options: { el: ['21', '24', '11', '27'], en: ['21', '24', '11', '27'] },
    correct: 1,
    explanation: {
      el: '8 × 3 = 24. Μετράμε ανά 3: 3, 6, 9, 12, 15, 18, 21, 24 — οκτώ βήματα.',
      en: '8 × 3 = 24. Count in threes: 3, 6, 9, 12, 15, 18, 21, 24 — eight steps.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 7 × ___ = 35', en: 'Which number is missing? 7 × ___ = 35' },
    options: { el: ['4', '6', '5', '7'], en: ['4', '6', '5', '7'] },
    correct: 2,
    explanation: {
      el: '7 × 5 = 35. Αν ξέρεις την προπαίδεια του 5, το βρίσκεις αμέσως: 5, 10, 15, 20, 25, 30, 35.',
      en: '7 × 5 = 35. If you know the 5 times table, you find it fast: 5, 10, 15, 20, 25, 30, 35.',
    },
  },

  // ── 10–11: rules that make life easier ────────────────────────────────────
  {
    q: { el: 'Το 3 × 8 και το 8 × 3…', en: '3 × 8 and 8 × 3…' },
    options: { el: ['κάνουν το ίδιο, 24', 'κάνουν 24 και 11', 'δεν μπορούν να συγκριθούν', 'κάνουν 24 και 32'], en: ['are the same, 24', 'are 24 and 11', 'cannot be compared', 'are 24 and 32'] },
    correct: 0,
    explanation: {
      el: 'Στον πολλαπλασιασμό η σειρά δεν μετράει: 3 × 8 = 8 × 3 = 24. Διάλεξε όποιο σου είναι πιο εύκολο!',
      en: 'In multiplication the order does not matter: 3 × 8 = 8 × 3 = 24. Use whichever is easier!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 9 × 0;', en: 'What is 9 × 0?' },
    options: { el: ['9', '0', '90', '1'], en: ['9', '0', '90', '1'] },
    correct: 1,
    explanation: {
      el: '9 φορές το τίποτα είναι τίποτα: 9 × 0 = 0. (Προσοχή: 9 × 1 = 9!)',
      en: '9 times nothing is nothing: 9 × 0 = 0. (Careful: 9 × 1 = 9!)',
    },
  },

  // ── 12–13: ×10 and ×100 ───────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 10 × 7;', en: 'What is 10 × 7?' },
    options: { el: ['17', '700', '70', '107'], en: ['17', '700', '70', '107'] },
    correct: 2,
    explanation: {
      el: '10 × 7 = 70. Όταν πολλαπλασιάζουμε με το 10, ο αριθμός παίρνει ένα 0 στο τέλος.',
      en: '10 × 7 = 70. When we multiply by 10, the number gets a 0 on the end.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 100 × 4;', en: 'What is 100 × 4?' },
    options: { el: ['40', '104', '400', '4.000'], en: ['40', '104', '400', '4,000'] },
    correct: 2,
    explanation: {
      el: '100 × 4 = 400. Το 100 έχει δύο μηδενικά, άρα το 4 παίρνει δύο 0 στο τέλος.',
      en: '100 × 4 = 400. 100 has two zeros, so 4 gets two 0s on the end.',
    },
  },

  // ── 14–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Ένα παγωτό κοστίζει 2 €. Πόσο κοστίζουν 6 παγωτά;', en: 'One ice cream costs €2. How much do 6 ice creams cost?' },
    options: { el: ['8 €', '12 €', '10 €', '26 €'], en: ['€8', '€12', '€10', '€26'] },
    correct: 1,
    explanation: {
      el: '6 παγωτά × 2 € = 12 €. Έξι φορές τα 2 ευρώ.',
      en: '6 ice creams × €2 = €12. Six times 2 euros.',
    },
  },
  {
    q: { el: 'Μια εβδομάδα έχει 7 μέρες. Πόσες μέρες έχουν 3 εβδομάδες;', en: 'A week has 7 days. How many days are in 3 weeks?' },
    options: { el: ['10', '24', '21', '14'], en: ['10', '24', '21', '14'] },
    correct: 2,
    explanation: {
      el: '3 εβδομάδες × 7 μέρες = 21 μέρες.',
      en: '3 weeks × 7 days = 21 days.',
    },
  },
  {
    q: { el: 'Κάθε αράχνη έχει 8 πόδια. Πόσα πόδια έχουν 4 αράχνες;', en: 'Every spider has 8 legs. How many legs do 4 spiders have?' },
    options: { el: ['12', '24', '32', '28'], en: ['12', '24', '32', '28'] },
    correct: 2,
    explanation: {
      el: '4 αράχνες × 8 πόδια = 32 πόδια. (Το 12 είναι 4 + 8 — αυτό είναι πρόσθεση, όχι πολλαπλασιασμός!)',
      en: '4 spiders × 8 legs = 32 legs. (12 is 4 + 8 — that is adding, not multiplying!)',
    },
  },
  {
    q: { el: 'Στην τάξη υπάρχουν 5 σειρές με 6 καρέκλες η καθεμία. Πόσες καρέκλες είναι όλες;', en: 'The classroom has 5 rows with 6 chairs in each. How many chairs are there in total?' },
    options: { el: ['11', '25', '36', '30'], en: ['11', '25', '36', '30'] },
    correct: 3,
    explanation: {
      el: '5 σειρές × 6 καρέκλες = 30 καρέκλες. Οι σειρές είναι ίδιες ομάδες, άρα πολλαπλασιάζουμε.',
      en: '5 rows × 6 chairs = 30 chairs. The rows are equal groups, so we multiply.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 3 κουτιά με 9 μαρκαδόρους το καθένα και άλλους 2 στην κασετίνα. Πόσους μαρκαδόρους έχει;', en: 'Maria has 3 boxes with 9 markers in each, plus 2 more in her pencil case. How many markers does she have?' },
    options: { el: ['27', '29', '14', '32'], en: ['27', '29', '14', '32'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα τα κουτιά: 3 × 9 = 27. Μετά οι 2 της κασετίνας: 27 + 2 = 29.',
      en: 'First the boxes: 3 × 9 = 27. Then the 2 in the case: 27 + 2 = 29.',
    },
  },
];
