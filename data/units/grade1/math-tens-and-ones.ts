/**
 * Α' Δημοτικού · Μαθηματικά · Δεκάδες και μονάδες
 * ================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 6–7. One short sentence per stem, small numbers.
 *
 * What the unit covers, in order:
 *   1–4   counting and reading numbers to 50, what comes next, the bigger one
 *   5–8   grouping in tens: 10 ones = 1 ten, how many tens, tens and ones together
 *   9–11  place value: which digit is the tens, which the ones, up to 100
 *   12–13 counting by 10s
 *   14–18 crossing ten (8 + 5) and short word problems with € and school things
 *
 * Distractors are real Α' mistakes: swapping tens and ones (43 ↔ 34), off-by-one,
 * counting the digits instead of the value, forgetting the ten when crossing it.
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_TENS_AND_ONES: QuizQuestion[] = [
  // ── 1–4: numbers to 50 ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός έρχεται μετά το 19;', en: 'Which number comes after 19?' },
    options: { el: ['18', '20', '21', '29'], en: ['18', '20', '21', '29'] },
    correct: 1,
    explanation: {
      el: 'Μετά το 19 έρχεται το 20. Μετράμε: 17, 18, 19, 20.',
      en: 'After 19 comes 20. We count: 17, 18, 19, 20.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε με ψηφία τον αριθμό «τριάντα δύο»;', en: 'How do we write the number "thirty-two" with digits?' },
    options: { el: ['23', '302', '32', '30'], en: ['23', '302', '32', '30'] },
    correct: 2,
    explanation: {
      el: 'Τριάντα δύο = 32. Πρώτα το 3 για το τριάντα, μετά το 2.',
      en: 'Thirty-two = 32. First the 3 for thirty, then the 2.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι πιο μεγάλος;', en: 'Which number is bigger?' },
    options: { el: ['39', '41', '29', '40'], en: ['39', '41', '29', '40'] },
    correct: 1,
    explanation: {
      el: 'Το 41 είναι το πιο μεγάλο. Κοιτάμε πρώτα τις δεκάδες: 4 δεκάδες είναι πιο πολλές από 3 ή 2.',
      en: '41 is the biggest. Look at the tens first: 4 tens are more than 3 or 2.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 46, 47, ___, 49', en: 'Which number is missing? 46, 47, ___, 49' },
    options: { el: ['50', '45', '48', '40'], en: ['50', '45', '48', '40'] },
    correct: 2,
    explanation: {
      el: 'Ανάμεσα στο 47 και στο 49 είναι το 48. Μετράμε ένα ένα.',
      en: 'Between 47 and 49 is 48. We count one by one.',
    },
  },

  // ── 5–8: grouping in tens ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσες μονάδες κάνουν μία δεκάδα;', en: 'How many ones make one ten?' },
    options: { el: ['5', '1', '100', '10'], en: ['5', '1', '100', '10'] },
    correct: 3,
    explanation: {
      el: '10 μονάδες κάνουν 1 δεκάδα. Δέκα δάχτυλα = μία δεκάδα!',
      en: '10 ones make 1 ten. Ten fingers = one ten!',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 3 δεκάδες μπίλιες. Πόσες μπίλιες έχει;', en: 'Nikos has 3 tens of marbles. How many marbles does he have?' },
    options: { el: ['3', '30', '13', '300'], en: ['3', '30', '13', '300'] },
    correct: 1,
    explanation: {
      el: '3 δεκάδες = 10 + 10 + 10 = 30 μπίλιες.',
      en: '3 tens = 10 + 10 + 10 = 30 marbles.',
    },
  },
  {
    q: { el: 'Πόσες δεκάδες έχει ο αριθμός 40;', en: 'How many tens are in the number 40?' },
    options: { el: ['4', '40', '0', '14'], en: ['4', '40', '0', '14'] },
    correct: 0,
    explanation: {
      el: 'Το 40 έχει 4 δεκάδες και 0 μονάδες. 10, 20, 30, 40 — τέσσερις δεκάδες.',
      en: '40 has 4 tens and 0 ones. 10, 20, 30, 40 — four tens.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 2 δεκάδες και 5 μονάδες. Ποιος είναι ο αριθμός;', en: 'Maria has 2 tens and 5 ones. Which number is that?' },
    options: { el: ['7', '52', '25', '205'], en: ['7', '52', '25', '205'] },
    correct: 2,
    explanation: {
      el: '2 δεκάδες = 20 και 5 μονάδες = 5. Μαζί κάνουν 25.',
      en: '2 tens = 20 and 5 ones = 5. Together they make 25.',
    },
  },

  // ── 9–11: place value ──────────────────────────────────────────────────────
  {
    q: { el: 'Στον αριθμό 37, ποιο ψηφίο δείχνει τις δεκάδες;', en: 'In the number 37, which digit shows the tens?' },
    options: { el: ['το 7', 'το 3', 'το 10', 'το 37'], en: ['the 7', 'the 3', 'the 10', 'the 37'] },
    correct: 1,
    explanation: {
      el: 'Το 3 είναι οι δεκάδες και το 7 οι μονάδες. 37 = 30 + 7.',
      en: 'The 3 is the tens and the 7 is the ones. 37 = 30 + 7.',
    },
  },
  {
    q: { el: 'Πόσες μονάδες έχει ο αριθμός 64;', en: 'How many ones are in the number 64?' },
    options: { el: ['6', '64', '4', '10'], en: ['6', '64', '4', '10'] },
    correct: 2,
    explanation: {
      el: 'Το 64 έχει 6 δεκάδες και 4 μονάδες. Οι μονάδες είναι το τελευταίο ψηφίο.',
      en: '64 has 6 tens and 4 ones. The ones are the last digit.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι 8 δεκάδες και 1 μονάδα;', en: 'Which number is 8 tens and 1 one?' },
    options: { el: ['18', '9', '80', '81'], en: ['18', '9', '80', '81'] },
    correct: 3,
    explanation: {
      el: '8 δεκάδες = 80 και 1 μονάδα = 1. Μαζί κάνουν 81. Το 18 έχει 1 δεκάδα και 8 μονάδες!',
      en: '8 tens = 80 and 1 one = 1. Together they make 81. 18 has 1 ten and 8 ones!',
    },
  },

  // ── 12–13: counting by 10s ─────────────────────────────────────────────────
  {
    q: { el: 'Μετράμε ανά 10: 50, 60, 70, ___', en: 'Count by tens: 50, 60, 70, ___' },
    options: { el: ['71', '80', '75', '100'], en: ['71', '80', '75', '100'] },
    correct: 1,
    explanation: {
      el: 'Μετά το 70 έρχεται το 80. Κάθε φορά προσθέτουμε μία δεκάδα.',
      en: 'After 70 comes 80. Each time we add one ten.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 10 δεκάδες;', en: 'How much is 10 tens?' },
    options: { el: ['100', '10', '20', '110'], en: ['100', '10', '20', '110'] },
    correct: 0,
    explanation: {
      el: '10 δεκάδες = 100. Είναι ένα εκατοστάρι!',
      en: '10 tens = 100. That is one hundred!',
    },
  },

  // ── 14–18: crossing ten and word problems ─────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 8 + 5;', en: 'What is 8 + 5?' },
    options: { el: ['12', '14', '3', '13'], en: ['12', '14', '3', '13'] },
    correct: 3,
    explanation: {
      el: '8 + 5 = 13. Πρώτα 8 + 2 = 10, μετά 10 + 3 = 13.',
      en: '8 + 5 = 13. First 8 + 2 = 10, then 10 + 3 = 13.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 7 + 6;', en: 'What is 7 + 6?' },
    options: { el: ['13', '12', '14', '11'], en: ['13', '12', '14', '11'] },
    correct: 0,
    explanation: {
      el: '7 + 6 = 13. Πρώτα 7 + 3 = 10, μετά 10 + 3 = 13.',
      en: '7 + 6 = 13. First 7 + 3 = 10, then 10 + 3 = 13.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 9 αυτοκόλλητα. Παίρνει άλλα 4. Πόσα έχει τώρα;', en: 'Eleni has 9 stickers. She gets 4 more. How many does she have now?' },
    options: { el: ['12', '13', '5', '14'], en: ['12', '13', '5', '14'] },
    correct: 1,
    explanation: {
      el: '9 + 4 = 13 αυτοκόλλητα. 9 + 1 = 10 και 10 + 3 = 13.',
      en: '9 + 4 = 13 stickers. 9 + 1 = 10 and 10 + 3 = 13.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει 6 €. Η γιαγιά του δίνει άλλα 7 €. Πόσα € έχει;', en: 'Giorgos has €6. His grandma gives him €7 more. How much does he have?' },
    options: { el: ['12 €', '14 €', '13 €', '1 €'], en: ['€12', '€14', '€13', '€1'] },
    correct: 2,
    explanation: {
      el: '6 € + 7 € = 13 €. Πρώτα 6 + 4 = 10, μετά 10 + 3 = 13.',
      en: '€6 + €7 = €13. First 6 + 4 = 10, then 10 + 3 = 13.',
    },
  },
  {
    q: { el: 'Σε ένα κουτί είναι 10 μολύβια. Έξω από το κουτί είναι άλλα 8. Πόσα μολύβια είναι όλα;', en: 'There are 10 pencils in a box. Outside the box there are 8 more. How many pencils are there in all?' },
    options: { el: ['108', '18', '2', '80'], en: ['108', '18', '2', '80'] },
    correct: 1,
    explanation: {
      el: '10 + 8 = 18. Μία δεκάδα και 8 μονάδες κάνουν 18.',
      en: '10 + 8 = 18. One ten and 8 ones make 18.',
    },
  },
];
