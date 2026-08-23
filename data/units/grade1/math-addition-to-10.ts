/**
 * Α' Δημοτικού · Μαθηματικά · Πρόσθεση ως το 10
 * ==============================================
 * Original questions for a child of 6–7. Short stems, small numbers, everyday words.
 * What the unit covers, in order:
 *   1–6   sums up to 10, including one "which number is missing"
 *   7–9   decomposing numbers: 5 = 2 + 3, which pair makes 8 / 10
 *   10–11 doubles (3 + 3, 5 + 5)
 *   12–13 swapping the addends: 2 + 6 = 6 + 2, start from the bigger number
 *   14–18 word problems: apples, money in €, animals, holiday days, markers
 * Distractors are real child mistakes: off-by-one, subtracting instead of adding,
 * writing the two digits side by side, forgetting one of the parts.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_ADDITION_TO_10: QuizQuestion[] = [
  // ── 1–6: sums up to 10 ─────────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2 + 1;', en: 'What is 2 + 1?' },
    options: { el: ['2', '3', '4', '1'], en: ['2', '3', '4', '1'] },
    correct: 1,
    explanation: {
      el: '2 + 1 = 3. Μετράμε ένα παραπάνω από το 2: 3!',
      en: '2 + 1 = 3. We count one more after 2: 3!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3 + 2;', en: 'What is 3 + 2?' },
    options: { el: ['4', '6', '5', '1'], en: ['4', '6', '5', '1'] },
    correct: 2,
    explanation: {
      el: '3 + 2 = 5. Ξεκινάμε από το 3 και μετράμε δύο: 4, 5.',
      en: '3 + 2 = 5. Start at 3 and count two more: 4, 5.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4 + 3;', en: 'What is 4 + 3?' },
    options: { el: ['7', '6', '8', '1'], en: ['7', '6', '8', '1'] },
    correct: 0,
    explanation: {
      el: '4 + 3 = 7. Ξεκινάμε από το 4 και μετράμε τρία: 5, 6, 7.',
      en: '4 + 3 = 7. Start at 4 and count three more: 5, 6, 7.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5 + 4;', en: 'What is 5 + 4?' },
    options: { el: ['8', '10', '9', '1'], en: ['8', '10', '9', '1'] },
    correct: 2,
    explanation: {
      el: '5 + 4 = 9. Το 5 και 4 ακόμα: 6, 7, 8, 9.',
      en: '5 + 4 = 9. Five and four more: 6, 7, 8, 9.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 6 + 4;', en: 'What is 6 + 4?' },
    options: { el: ['9', '10', '2', '11'], en: ['9', '10', '2', '11'] },
    correct: 1,
    explanation: {
      el: '6 + 4 = 10. Το 6 και το 4 είναι φίλοι του 10!',
      en: '6 + 4 = 10. Six and four are friends that make 10!',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 7 + ___ = 10', en: 'Which number is missing? 7 + ___ = 10' },
    options: { el: ['2', '4', '3', '17'], en: ['2', '4', '3', '17'] },
    correct: 2,
    explanation: {
      el: '7 + 3 = 10. Από το 7 μετράμε ως το 10: 8, 9, 10 — τρία βήματα.',
      en: '7 + 3 = 10. From 7 we count up to 10: 8, 9, 10 — three steps.',
    },
  },

  // ── 7–9: decomposing numbers ──────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; 5 = 2 + ___', en: 'Which number is missing? 5 = 2 + ___' },
    options: { el: ['2', '3', '7', '4'], en: ['2', '3', '7', '4'] },
    correct: 1,
    explanation: {
      el: 'Το 5 χωρίζεται σε 2 και 3: 2 + 3 = 5.',
      en: '5 splits into 2 and 3: 2 + 3 = 5.',
    },
  },
  {
    q: { el: 'Ποια πρόσθεση κάνει 8;', en: 'Which sum makes 8?' },
    options: { el: ['3 + 4', '5 + 3', '6 + 3', '4 + 5'], en: ['3 + 4', '5 + 3', '6 + 3', '4 + 5'] },
    correct: 1,
    explanation: {
      el: '5 + 3 = 8. Το 3 + 4 κάνει 7 και το 6 + 3 κάνει 9.',
      en: '5 + 3 = 8. 3 + 4 makes 7 and 6 + 3 makes 9.',
    },
  },
  {
    q: { el: 'Ποια πρόσθεση κάνει 10;', en: 'Which sum makes 10?' },
    options: { el: ['4 + 5', '6 + 4', '7 + 2', '8 + 3'], en: ['4 + 5', '6 + 4', '7 + 2', '8 + 3'] },
    correct: 1,
    explanation: {
      el: '6 + 4 = 10. Τα ζευγάρια του 10 είναι: 1 και 9, 2 και 8, 3 και 7, 4 και 6, 5 και 5.',
      en: '6 + 4 = 10. The pairs that make 10 are: 1 and 9, 2 and 8, 3 and 7, 4 and 6, 5 and 5.',
    },
  },

  // ── 10–11: doubles ────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 3 + 3;', en: 'What is 3 + 3?' },
    options: { el: ['5', '6', '7', '9'], en: ['5', '6', '7', '9'] },
    correct: 1,
    explanation: {
      el: '3 + 3 = 6. Δύο φορές το 3 κάνει 6. Αυτό λέγεται «διπλό».',
      en: '3 + 3 = 6. Two threes make 6. This is called a “double”.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5 + 5;', en: 'What is 5 + 5?' },
    options: { el: ['9', '11', '10', '5'], en: ['9', '11', '10', '5'] },
    correct: 2,
    explanation: {
      el: '5 + 5 = 10. Πέντε δάχτυλα και άλλα πέντε: δέκα δάχτυλα!',
      en: '5 + 5 = 10. Five fingers and five more: ten fingers!',
    },
  },

  // ── 12–13: swapping the addends ───────────────────────────────────────────
  {
    q: { el: 'Το 2 + 6 και το 6 + 2…', en: '2 + 6 and 6 + 2…' },
    options: { el: ['κάνουν το ίδιο, 8', 'κάνουν 8 και 4', 'κάνουν 8 και 12', 'κάνουν 4 και 8'], en: ['are the same, 8', 'are 8 and 4', 'are 8 and 12', 'are 4 and 8'] },
    correct: 0,
    explanation: {
      el: 'Στην πρόσθεση η σειρά δεν αλλάζει το αποτέλεσμα: 2 + 6 = 6 + 2 = 8.',
      en: 'In addition the order does not change the answer: 2 + 6 = 6 + 2 = 8.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 1 + 8;', en: 'What is 1 + 8?' },
    options: { el: ['7', '9', '10', '8'], en: ['7', '9', '10', '8'] },
    correct: 1,
    explanation: {
      el: '1 + 8 = 9. Κόλπο: ξεκίνα από τον μεγάλο αριθμό, το 8, και βάλε 1: 9.',
      en: '1 + 8 = 9. Trick: start from the big number, 8, and add 1: 9.',
    },
  },

  // ── 14–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία έχει 3 μήλα. Ο Νίκος της δίνει 4 ακόμα. Πόσα μήλα έχει τώρα;', en: 'Maria has 3 apples. Nikos gives her 4 more. How many apples does she have now?' },
    options: { el: ['6', '1', '7', '8'], en: ['6', '1', '7', '8'] },
    correct: 2,
    explanation: {
      el: '3 + 4 = 7 μήλα. Όταν μας δίνουν κι άλλα, προσθέτουμε.',
      en: '3 + 4 = 7 apples. When we get more, we add.',
    },
  },
  {
    q: { el: 'Ένα μολύβι κοστίζει 2 € και μια γόμα 1 €. Πόσο κοστίζουν μαζί;', en: 'A pencil costs €2 and an eraser €1. How much do they cost together?' },
    options: { el: ['1 €', '3 €', '2 €', '4 €'], en: ['€1', '€3', '€2', '€4'] },
    correct: 1,
    explanation: {
      el: '2 € + 1 € = 3 €. Βάζουμε τα χρήματα μαζί.',
      en: '€2 + €1 = €3. We put the money together.',
    },
  },
  {
    q: { el: 'Στην αυλή είναι 4 γάτες και 5 σκύλοι. Πόσα ζώα είναι όλα μαζί;', en: 'In the yard there are 4 cats and 5 dogs. How many animals are there in all?' },
    options: { el: ['9', '8', '1', '10'], en: ['9', '8', '1', '10'] },
    correct: 0,
    explanation: {
      el: '4 γάτες + 5 σκύλοι = 9 ζώα.',
      en: '4 cats + 5 dogs = 9 animals.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έκανε 5 μέρες διακοπές στη θάλασσα και 5 μέρες στο χωριό. Πόσες μέρες διακοπές έκανε;', en: 'Giorgos spent 5 days of holiday at the sea and 5 days in the village. How many holiday days did he have?' },
    options: { el: ['5', '9', '11', '10'], en: ['5', '9', '11', '10'] },
    correct: 3,
    explanation: {
      el: '5 + 5 = 10 μέρες. Είναι το διπλό του 5!',
      en: '5 + 5 = 10 days. It is the double of 5!',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 2 κόκκινους, 3 μπλε και 4 πράσινους μαρκαδόρους. Πόσους μαρκαδόρους έχει;', en: 'Eleni has 2 red, 3 blue and 4 green markers. How many markers does she have?' },
    options: { el: ['5', '7', '9', '10'], en: ['5', '7', '9', '10'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα 2 + 3 = 5. Μετά 5 + 4 = 9 μαρκαδόροι.',
      en: 'First 2 + 3 = 5. Then 5 + 4 = 9 markers.',
    },
  },
];
