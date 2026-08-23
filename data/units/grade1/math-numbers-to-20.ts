/**
 * Α' Δημοτικού · Μαθηματικά · Αριθμοί ως το 20
 * ============================================
 * Original questions for a child of 6–7 (curriculum topics only — no textbook text).
 * Order, easiest to hardest:
 *   1–3   counting: the next number, counting letters, counting up to 20
 *   4–6   reading and writing numerals (12, 15, 18 — the ones children reverse)
 *   7–9   comparing: biggest, smallest, the < > signs
 *   10–11 ordering from small to big and big to small
 *   12–13 the number line: between, steps forward
 *   14–18 ordinal numbers to 10 and short word problems (queue, race, money, animals, bus line)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_NUMBERS_TO_20: QuizQuestion[] = [
  // ── 1–3: counting ──────────────────────────────────────────────────────────
  {
    q: { el: 'Μετράμε: 1, 2, 3, 4, … Ποιος αριθμός έρχεται μετά;', en: 'We count: 1, 2, 3, 4, … Which number comes next?' },
    options: { el: ['5', '6', '3', '4'], en: ['5', '6', '3', '4'] },
    correct: 0,
    explanation: {
      el: 'Μετά το 4 έρχεται το 5. Μετράμε: 1, 2, 3, 4, 5.',
      en: 'After 4 comes 5. We count: 1, 2, 3, 4, 5.',
    },
  },
  {
    q: { el: 'Πόσα γράμματα έχει η λέξη «ΓΑΤΑ»;', en: 'How many letters does the word «CATS» have?' },
    options: { el: ['3', '4', '5', '2'], en: ['3', '4', '5', '2'] },
    correct: 1,
    explanation: {
      el: 'Μετράμε ένα ένα: Γ, Α, Τ, Α. Είναι 4 γράμματα.',
      en: 'We count one by one: C, A, T, S. That is 4 letters.',
    },
  },
  {
    q: { el: 'Μετράμε: 17, 18, 19, … Ποιος αριθμός έρχεται μετά;', en: 'We count: 17, 18, 19, … Which number comes next?' },
    options: { el: ['20', '21', '18', '10'], en: ['20', '21', '18', '10'] },
    correct: 0,
    explanation: {
      el: 'Μετά το 19 έρχεται το 20. Το 20 είναι δύο δεκάδες.',
      en: 'After 19 comes 20. Twenty is two tens.',
    },
  },

  // ── 4–6: reading and writing numerals ──────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι το «δώδεκα»;', en: 'Which number is “twelve”?' },
    options: { el: ['21', '12', '2', '20'], en: ['21', '12', '2', '20'] },
    correct: 1,
    explanation: {
      el: 'Δώδεκα = 12. Πρώτα το 1 (μία δεκάδα) και μετά το 2.',
      en: 'Twelve = 12. First the 1 (one ten), then the 2.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε με ψηφία το «δεκαπέντε»;', en: 'How do we write “fifteen” in digits?' },
    options: { el: ['51', '105', '15', '5'], en: ['51', '105', '15', '5'] },
    correct: 2,
    explanation: {
      el: 'Δεκαπέντε = δέκα και πέντε = 15. Το 1 μπαίνει μπροστά.',
      en: 'Fifteen = ten and five = 15. The 1 goes in front.',
    },
  },
  {
    q: { el: 'Πώς λέγεται ο αριθμός 18;', en: 'What do we call the number 18?' },
    options: { el: ['δεκαοκτώ', 'οκτώ', 'δεκαεπτά', 'ογδόντα'], en: ['eighteen', 'eight', 'seventeen', 'eighty'] },
    correct: 0,
    explanation: {
      el: 'Το 18 είναι δέκα και οκτώ: δεκαοκτώ.',
      en: '18 is ten and eight: eighteen.',
    },
  },

  // ── 7–9: comparing ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι ο πιο μεγάλος;', en: 'Which number is the biggest?' },
    options: { el: ['9', '12', '7', '11'], en: ['9', '12', '7', '11'] },
    correct: 1,
    explanation: {
      el: 'Το 12 είναι ο πιο μεγάλος. Όταν μετράμε, το λέμε τελευταίο: 7, 9, 11, 12.',
      en: '12 is the biggest. When we count, we say it last: 7, 9, 11, 12.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι ο πιο μικρός;', en: 'Which number is the smallest?' },
    options: { el: ['14', '16', '19', '13'], en: ['14', '16', '19', '13'] },
    correct: 3,
    explanation: {
      el: 'Το 13 είναι ο πιο μικρός. Όταν μετράμε, το λέμε πρώτο: 13, 14, 16, 19.',
      en: '13 is the smallest. When we count, we say it first: 13, 14, 16, 19.',
    },
  },
  {
    q: { el: 'Ποιο σημάδι ταιριάζει; 8 ___ 5', en: 'Which sign fits? 8 ___ 5' },
    options: { el: ['<', '>', '=', '+'], en: ['<', '>', '=', '+'] },
    correct: 1,
    explanation: {
      el: '8 > 5, γιατί το 8 είναι πιο μεγάλο από το 5. Το ανοιχτό στόμα του σημαδιού κοιτάει πάντα τον μεγάλο αριθμό.',
      en: '8 > 5, because 8 is bigger than 5. The open mouth of the sign always faces the bigger number.',
    },
  },

  // ── 10–11: ordering ────────────────────────────────────────────────────────
  {
    q: { el: 'Βάλε στη σειρά από το πιο μικρό στο πιο μεγάλο: 7, 3, 5', en: 'Put in order from smallest to biggest: 7, 3, 5' },
    options: { el: ['3, 5, 7', '7, 5, 3', '3, 7, 5', '5, 3, 7'], en: ['3, 5, 7', '7, 5, 3', '3, 7, 5', '5, 3, 7'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα ο πιο μικρός, το 3. Μετά το 5 και τελευταίο το 7: 3, 5, 7.',
      en: 'First the smallest, 3. Then 5 and last 7: 3, 5, 7.',
    },
  },
  {
    q: { el: 'Ποια σειρά πάει από το πιο μεγάλο στο πιο μικρό;', en: 'Which order goes from biggest to smallest?' },
    options: { el: ['10, 12, 15', '12, 15, 10', '10, 15, 12', '15, 12, 10'], en: ['10, 12, 15', '12, 15, 10', '10, 15, 12', '15, 12, 10'] },
    correct: 3,
    explanation: {
      el: 'Από το πιο μεγάλο στο πιο μικρό: 15, 12, 10. Οι αριθμοί μικραίνουν.',
      en: 'From biggest to smallest: 15, 12, 10. The numbers get smaller.',
    },
  },

  // ── 12–13: the number line ─────────────────────────────────────────────────
  {
    q: { el: 'Στην αριθμογραμμή, ποιος αριθμός είναι ανάμεσα στο 13 και στο 15;', en: 'On the number line, which number is between 13 and 15?' },
    options: { el: ['12', '16', '14', '13'], en: ['12', '16', '14', '13'] },
    correct: 2,
    explanation: {
      el: 'Ανάμεσα στο 13 και στο 15 είναι το 14: 13, 14, 15.',
      en: 'Between 13 and 15 is 14: 13, 14, 15.',
    },
  },
  {
    q: { el: 'Στην αριθμογραμμή είσαι στο 6. Κάνεις 3 βήματα μπροστά. Πού φτάνεις;', en: 'On the number line you are at 6. You take 3 steps forward. Where do you land?' },
    options: { el: ['3', '8', '10', '9'], en: ['3', '8', '10', '9'] },
    correct: 3,
    explanation: {
      el: 'Από το 6 μετράμε 3 βήματα: 7, 8, 9. Φτάνουμε στο 9.',
      en: 'From 6 we count 3 steps: 7, 8, 9. We land on 9.',
    },
  },

  // ── 14–18: ordinal numbers and word problems ───────────────────────────────
  {
    q: { el: 'Η Μαρία είναι πρώτη στη σειρά. Ο Γιώργος είναι αμέσως μετά. Σε ποια θέση είναι ο Γιώργος;', en: 'Maria is first in the line. George is right after her. In which place is George?' },
    options: { el: ['πρώτος', 'δεύτερος', 'τρίτος', 'τελευταίος'], en: ['first', 'second', 'third', 'last'] },
    correct: 1,
    explanation: {
      el: 'Μετά τον πρώτο έρχεται ο δεύτερος. Ο Γιώργος είναι δεύτερος.',
      en: 'After the first comes the second. George is second.',
    },
  },
  {
    q: { el: 'Στον αγώνα ο Νίκος τερμάτισε μετά από 4 παιδιά. Σε ποια θέση βγήκε;', en: 'In the race Nikos finished after 4 children. In which place did he come?' },
    options: { el: ['τέταρτος', 'έκτος', 'τρίτος', 'πέμπτος'], en: ['fourth', 'sixth', 'third', 'fifth'] },
    correct: 3,
    explanation: {
      el: 'Μπροστά του ήταν 4 παιδιά, άρα ο Νίκος είναι ο πέμπτος: 1ος, 2ος, 3ος, 4ος, 5ος.',
      en: '4 children were in front of him, so Nikos is fifth: 1st, 2nd, 3rd, 4th, 5th.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 10 € και ο Νίκος 7 €. Ποιος έχει πιο πολλά χρήματα;', en: 'Eleni has €10 and Nikos has €7. Who has more money?' },
    options: { el: ['η Ελένη', 'ο Νίκος', 'έχουν τα ίδια', 'δεν μπορούμε να ξέρουμε'], en: ['Eleni', 'Nikos', 'they have the same', 'we cannot know'] },
    correct: 0,
    explanation: {
      el: 'Το 10 είναι πιο μεγάλο από το 7. Άρα η Ελένη έχει πιο πολλά χρήματα.',
      en: '10 is bigger than 7. So Eleni has more money.',
    },
  },
  {
    q: { el: 'Στην αυλή είναι 4 γάτες και 2 σκύλοι. Πόσα ζώα είναι όλα μαζί;', en: 'In the yard there are 4 cats and 2 dogs. How many animals are there altogether?' },
    options: { el: ['2', '5', '7', '6'], en: ['2', '5', '7', '6'] },
    correct: 3,
    explanation: {
      el: 'Μετράμε όλα τα ζώα: 4 γάτες και μετά 5, 6 για τους σκύλους. Είναι 6 ζώα.',
      en: 'We count all the animals: 4 cats, then 5, 6 for the dogs. That is 6 animals.',
    },
  },
  {
    q: { el: 'Στη σειρά για το σχολικό είναι 10 παιδιά. Η Ελένη είναι δέκατη. Πόσα παιδιά είναι μπροστά της;', en: 'There are 10 children in the line for the school bus. Eleni is tenth. How many children are in front of her?' },
    options: { el: ['10', '11', '9', '1'], en: ['10', '11', '9', '1'] },
    correct: 2,
    explanation: {
      el: 'Η δέκατη είναι η τελευταία από τα 10 παιδιά. Μπροστά της είναι τα άλλα 9.',
      en: 'The tenth is the last of the 10 children. The other 9 are in front of her.',
    },
  },
];
