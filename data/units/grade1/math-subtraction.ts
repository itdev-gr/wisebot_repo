/**
 * Α' Δημοτικού · Μαθηματικά · Αφαίρεση
 * =====================================
 * Original questions for a child of 6–7. Short stems, numbers within 20.
 *
 * What the unit covers, in the order an Α' class meets it:
 *   1–4   «βγάζω» / take away with small numbers, the sign −, taking away 0
 *   5–9   plain subtraction within 20, including crossing ten (13 − 5)
 *   10–12 difference: «πόσα περισσότερα», comparing two groups
 *   13–15 the missing number (8 − ___ = 3)
 *   16–18 addition and subtraction are opposites, and word problems
 *
 * Distractors are real child mistakes: adding instead of taking away,
 * off-by-one from counting on the fingers, and swapping the numbers.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_SUBTRACTION: QuizQuestion[] = [
  // ── 1–4: what "take away" means ─────────────────────────────────────────────
  {
    q: { el: 'Έχεις 5 μήλα. Τρως 1. Πόσα μένουν;', en: 'You have 5 apples. You eat 1. How many are left?' },
    options: { el: ['6', '4', '5', '3'], en: ['6', '4', '5', '3'] },
    correct: 1,
    explanation: {
      el: '5 − 1 = 4. Όταν τρώμε ένα μήλο, τα μήλα γίνονται λιγότερα.',
      en: '5 − 1 = 4. When we eat one apple, there are fewer apples.',
    },
  },
  {
    q: { el: 'Ποιο σημάδι σημαίνει «βγάζω»;', en: 'Which sign means “take away”?' },
    options: { el: ['+', '=', '−', '×'], en: ['+', '=', '−', '×'] },
    correct: 2,
    explanation: {
      el: 'Το − λέγεται «πλην» και σημαίνει βγάζω. Το + σημαίνει βάζω.',
      en: 'The − sign is called “minus” and means take away. The + sign means add.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4 − 2;', en: 'What is 4 − 2?' },
    options: { el: ['6', '3', '2', '1'], en: ['6', '3', '2', '1'] },
    correct: 2,
    explanation: {
      el: '4 − 2 = 2. Από τα 4 βγάζουμε 2 και μένουν 2.',
      en: '4 − 2 = 2. From 4 we take away 2 and 2 are left.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 7 − 0;', en: 'What is 7 − 0?' },
    options: { el: ['0', '7', '6', '8'], en: ['0', '7', '6', '8'] },
    correct: 1,
    explanation: {
      el: '7 − 0 = 7. Αν δεν βγάλουμε τίποτα, ο αριθμός μένει ίδιος.',
      en: '7 − 0 = 7. If we take away nothing, the number stays the same.',
    },
  },

  // ── 5–9: subtraction within 20 ──────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 9 − 3;', en: 'What is 9 − 3?' },
    options: { el: ['6', '12', '5', '7'], en: ['6', '12', '5', '7'] },
    correct: 0,
    explanation: {
      el: '9 − 3 = 6. Μετράμε προς τα πίσω από το 9: 8, 7, 6.',
      en: '9 − 3 = 6. Count back from 9: 8, 7, 6.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 10 − 4;', en: 'What is 10 − 4?' },
    options: { el: ['14', '5', '7', '6'], en: ['14', '5', '7', '6'] },
    correct: 3,
    explanation: {
      el: '10 − 4 = 6. Το 6 και το 4 μαζί κάνουν 10, είναι φίλοι του 10!',
      en: '10 − 4 = 6. 6 and 4 together make 10, they are friends of 10!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 15 − 5;', en: 'What is 15 − 5?' },
    options: { el: ['20', '10', '11', '9'], en: ['20', '10', '11', '9'] },
    correct: 1,
    explanation: {
      el: '15 − 5 = 10. Το 15 είναι 10 και 5. Βγάζουμε το 5 και μένει το 10.',
      en: '15 − 5 = 10. 15 is 10 and 5. Take away the 5 and 10 is left.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 13 − 5;', en: 'What is 13 − 5?' },
    options: { el: ['9', '7', '8', '18'], en: ['9', '7', '8', '18'] },
    correct: 2,
    explanation: {
      el: '13 − 5 = 8. Πρώτα 13 − 3 = 10, μετά 10 − 2 = 8.',
      en: '13 − 5 = 8. First 13 − 3 = 10, then 10 − 2 = 8.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 20 − 7;', en: 'What is 20 − 7?' },
    options: { el: ['12', '13', '14', '27'], en: ['12', '13', '14', '27'] },
    correct: 1,
    explanation: {
      el: '20 − 7 = 13. Το 7 και το 3 κάνουν 10, άρα από το 20 μένουν 13.',
      en: '20 − 7 = 13. 7 and 3 make 10, so from 20 we have 13 left.',
    },
  },

  // ── 10–12: difference, how many more ────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος έχει 8 βόλους. Η Ελένη έχει 5. Πόσους περισσότερους έχει ο Νίκος;', en: 'Nikos has 8 marbles. Eleni has 5. How many more does Nikos have?' },
    options: { el: ['13', '3', '4', '2'], en: ['13', '3', '4', '2'] },
    correct: 1,
    explanation: {
      el: '8 − 5 = 3. Για να βρούμε τη διαφορά, βγάζουμε τον μικρό αριθμό από τον μεγάλο.',
      en: '8 − 5 = 3. To find the difference, we take the small number away from the big one.',
    },
  },
  {
    q: { el: 'Ποια είναι η διαφορά του 10 και του 6;', en: 'What is the difference between 10 and 6?' },
    options: { el: ['4', '16', '5', '3'], en: ['4', '16', '5', '3'] },
    correct: 0,
    explanation: {
      el: '10 − 6 = 4. Η διαφορά λέει πόσο απέχουν οι δύο αριθμοί.',
      en: '10 − 6 = 4. The difference tells us how far apart the two numbers are.',
    },
  },
  {
    q: { el: 'Η Μαρία είναι 7 ετών. Ο αδερφός της είναι 12. Πόσα χρόνια μεγαλύτερος είναι;', en: 'Maria is 7 years old. Her brother is 12. How many years older is he?' },
    options: { el: ['19', '6', '4', '5'], en: ['19', '6', '4', '5'] },
    correct: 3,
    explanation: {
      el: '12 − 7 = 5. Από το 7 μετράμε μέχρι το 12: 8, 9, 10, 11, 12, πέντε βήματα.',
      en: '12 − 7 = 5. Count from 7 up to 12: 8, 9, 10, 11, 12, five steps.',
    },
  },

  // ── 13–15: the missing number ───────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; 8 − ___ = 3', en: 'Which number is missing? 8 − ___ = 3' },
    options: { el: ['4', '5', '11', '6'], en: ['4', '5', '11', '6'] },
    correct: 1,
    explanation: {
      el: '8 − 5 = 3. Σκέψου: 3 και πόσα κάνουν 8; Πέντε!',
      en: '8 − 5 = 3. Think: 3 and how many make 8? Five!',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; ___ − 4 = 6', en: 'Which number is missing? ___ − 4 = 6' },
    options: { el: ['2', '9', '10', '11'], en: ['2', '9', '10', '11'] },
    correct: 2,
    explanation: {
      el: '10 − 4 = 6. Για να βρούμε τον πρώτο αριθμό, προσθέτουμε: 6 + 4 = 10.',
      en: '10 − 4 = 6. To find the first number, we add: 6 + 4 = 10.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 14 − ___ = 9', en: 'Which number is missing? 14 − ___ = 9' },
    options: { el: ['6', '4', '23', '5'], en: ['6', '4', '23', '5'] },
    correct: 3,
    explanation: {
      el: '14 − 5 = 9. Από το 9 μετράμε μέχρι το 14: 10, 11, 12, 13, 14, πέντε βήματα.',
      en: '14 − 5 = 9. Count from 9 up to 14: 10, 11, 12, 13, 14, five steps.',
    },
  },

  // ── 16–18: opposites and word problems ──────────────────────────────────────
  {
    q: { el: 'Αν 6 + 3 = 9, τότε 9 − 3 κάνει…', en: 'If 6 + 3 = 9, then 9 − 3 is…' },
    options: { el: ['3', '12', '6', '9'], en: ['3', '12', '6', '9'] },
    correct: 2,
    explanation: {
      el: '9 − 3 = 6. Η αφαίρεση είναι το αντίθετο της πρόσθεσης: βάζουμε 3, βγάζουμε 3, γυρνάμε στο 6.',
      en: '9 − 3 = 6. Subtraction is the opposite of addition: add 3, take away 3, and we are back to 6.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει 10 €. Αγοράζει ένα βιβλίο με 6 €. Πόσα ευρώ του μένουν;', en: 'Giorgos has €10. He buys a book for €6. How many euros does he have left?' },
    options: { el: ['16 €', '3 €', '5 €', '4 €'], en: ['€16', '€3', '€5', '€4'] },
    correct: 3,
    explanation: {
      el: '10 − 6 = 4 €. Όταν πληρώνουμε, τα χρήματα γίνονται λιγότερα, άρα αφαιρούμε.',
      en: '€10 − €6 = €4. When we pay, we have less money, so we subtract.',
    },
  },
  {
    q: { el: 'Στο κλαδί κάθονται 16 πουλιά. Πετάνε μακριά 9. Πόσα πουλιά μένουν;', en: 'There are 16 birds on a branch. 9 fly away. How many birds are left?' },
    options: { el: ['7', '25', '8', '6'], en: ['7', '25', '8', '6'] },
    correct: 0,
    explanation: {
      el: '16 − 9 = 7. Πρώτα 16 − 6 = 10, μετά 10 − 3 = 7.',
      en: '16 − 9 = 7. First 16 − 6 = 10, then 10 − 3 = 7.',
    },
  },
];
