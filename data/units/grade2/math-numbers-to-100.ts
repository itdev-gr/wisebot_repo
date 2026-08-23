/**
 * Β' Δημοτικού · Μαθηματικά · Αριθμοί ως το 100
 * ==============================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–5   place value: tens and ones, reading/writing two-digit numbers, the value of a digit
 *   6–9   comparing and ordering numbers up to 100 (bigger/smaller, what comes next)
 *   10–13 half and double
 *   14–15 even and odd
 *   16–18 short word problems mixing the above (money, animals, school things)
 * Distractors are real child mistakes: swapped digits, comparing by the ones digit,
 * half/double confused with −2/+2, off-by-one on the number line.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_NUMBERS_TO_100: QuizQuestion[] = [
  // ── 1–5: tens and ones ──────────────────────────────────────────────────────
  {
    q: { el: 'Πόσες δεκάδες έχει το 40;', en: 'How many tens are in 40?' },
    options: { el: ['4', '40', '0', '10'], en: ['4', '40', '0', '10'] },
    correct: 0,
    explanation: {
      el: 'Το 40 είναι 4 δεκάδες: 10 + 10 + 10 + 10 = 40.',
      en: '40 is 4 tens: 10 + 10 + 10 + 10 = 40.',
    },
  },
  {
    q: { el: 'Ο αριθμός 36 έχει…', en: 'The number 36 has…' },
    options: { el: ['6 δεκάδες και 3 μονάδες', '3 δεκάδες και 6 μονάδες', '36 δεκάδες', '3 μονάδες και 6 μονάδες'], en: ['6 tens and 3 ones', '3 tens and 6 ones', '36 tens', '3 ones and 6 ones'] },
    correct: 1,
    explanation: {
      el: 'Το πρώτο ψηφίο δείχνει τις δεκάδες, το δεύτερο τις μονάδες. 36 = 3 δεκάδες και 6 μονάδες.',
      en: 'The first digit shows the tens, the second the ones. 36 = 3 tens and 6 ones.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έχει 7 δεκάδες και 2 μονάδες;', en: 'Which number has 7 tens and 2 ones?' },
    options: { el: ['27', '702', '72', '79'], en: ['27', '702', '72', '79'] },
    correct: 2,
    explanation: {
      el: '7 δεκάδες = 70, και 2 μονάδες = 2. Μαζί κάνουν 72. (Το 27 έχει 2 δεκάδες!)',
      en: '7 tens = 70, and 2 ones = 2. Together they make 72. (27 has 2 tens!)',
    },
  },
  {
    q: { el: 'Πόσο αξίζει το 5 στον αριθμό 58;', en: 'What is the 5 worth in the number 58?' },
    options: { el: ['5', '8', '58', '50'], en: ['5', '8', '58', '50'] },
    correct: 3,
    explanation: {
      el: 'Το 5 είναι στη θέση των δεκάδων, άρα αξίζει 5 δεκάδες = 50.',
      en: 'The 5 is in the tens place, so it is worth 5 tens = 50.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 60 + 9;', en: 'What is 60 + 9?' },
    options: { el: ['609', '69', '96', '15'], en: ['609', '69', '96', '15'] },
    correct: 1,
    explanation: {
      el: '6 δεκάδες και 9 μονάδες γράφονται 69. Δεν κολλάμε τους αριθμούς τον έναν δίπλα στον άλλον!',
      en: '6 tens and 9 ones are written 69. We do not just stick the numbers next to each other!',
    },
  },

  // ── 6–9: comparing and ordering ───────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι πιο μεγάλος;', en: 'Which number is bigger?' },
    options: { el: ['47', '74', '39', '71'], en: ['47', '74', '39', '71'] },
    correct: 1,
    explanation: {
      el: 'Κοιτάμε πρώτα τις δεκάδες. Το 74 έχει 7 δεκάδες — τις περισσότερες. Μετά, 74 > 71 γιατί 4 > 1.',
      en: 'Look at the tens first. 74 has 7 tens — the most. Then 74 > 71 because 4 > 1.',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό;', en: 'Which one is correct?' },
    options: { el: ['29 > 31', '29 = 31', '29 < 31', '31 < 29'], en: ['29 > 31', '29 = 31', '29 < 31', '31 < 29'] },
    correct: 2,
    explanation: {
      el: 'Το 29 έχει 2 δεκάδες, το 31 έχει 3. Άρα 29 < 31. Το «<» δείχνει προς τον μικρότερο.',
      en: '29 has 2 tens, 31 has 3. So 29 < 31. The «<» sign points to the smaller number.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έρχεται αμέσως μετά το 79;', en: 'Which number comes right after 79?' },
    options: { el: ['70', '78', '90', '80'], en: ['70', '78', '90', '80'] },
    correct: 3,
    explanation: {
      el: 'Μετά το 79 έρχεται το 80. Όταν οι μονάδες φτάσουν στο 9, η δεκάδα μεγαλώνει κατά ένα.',
      en: 'After 79 comes 80. When the ones reach 9, the tens go up by one.',
    },
  },
  {
    q: { el: 'Ποια σειρά πάει από τον μικρότερο στον μεγαλύτερο;', en: 'Which list goes from smallest to biggest?' },
    options: { el: ['45, 54, 48', '54, 48, 45', '45, 48, 54', '48, 45, 54'], en: ['45, 54, 48', '54, 48, 45', '45, 48, 54', '48, 45, 54'] },
    correct: 2,
    explanation: {
      el: '45 και 48 έχουν 4 δεκάδες, το 54 έχει 5. Και 45 < 48 γιατί 5 < 8. Άρα: 45, 48, 54.',
      en: '45 and 48 have 4 tens, 54 has 5. And 45 < 48 because 5 < 8. So: 45, 48, 54.',
    },
  },

  // ── 10–13: half and double ────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το διπλάσιο του 8;', en: 'What is double 8?' },
    options: { el: ['10', '16', '4', '18'], en: ['10', '16', '4', '18'] },
    correct: 1,
    explanation: {
      el: 'Διπλάσιο σημαίνει δύο φορές: 8 + 8 = 16.',
      en: 'Double means two times: 8 + 8 = 16.',
    },
  },
  {
    q: { el: 'Ποιο είναι το μισό του 14;', en: 'What is half of 14?' },
    options: { el: ['7', '12', '28', '6'], en: ['7', '12', '28', '6'] },
    correct: 0,
    explanation: {
      el: 'Μισό σημαίνει δύο ίσα μέρη: 7 + 7 = 14, άρα το μισό του 14 είναι 7.',
      en: 'Half means two equal parts: 7 + 7 = 14, so half of 14 is 7.',
    },
  },
  {
    q: { el: 'Ποιο είναι το διπλάσιο του 25;', en: 'What is double 25?' },
    options: { el: ['27', '40', '50', '55'], en: ['27', '40', '50', '55'] },
    correct: 2,
    explanation: {
      el: '25 + 25 = 50. Κόλπο: διπλάσιο του 20 είναι 40, διπλάσιο του 5 είναι 10, και 40 + 10 = 50.',
      en: '25 + 25 = 50. Trick: double 20 is 40, double 5 is 10, and 40 + 10 = 50.',
    },
  },
  {
    q: { el: 'Ποιο είναι το μισό του 30;', en: 'What is half of 30?' },
    options: { el: ['20', '15', '60', '28'], en: ['20', '15', '60', '28'] },
    correct: 1,
    explanation: {
      el: '15 + 15 = 30, άρα το μισό του 30 είναι 15. Το 60 είναι το διπλάσιο, όχι το μισό!',
      en: '15 + 15 = 30, so half of 30 is 15. 60 is double, not half!',
    },
  },

  // ── 14–15: even and odd ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι ζυγός;', en: 'Which number is even?' },
    options: { el: ['13', '27', '35', '42'], en: ['13', '27', '35', '42'] },
    correct: 3,
    explanation: {
      el: 'Ζυγοί είναι οι αριθμοί που τελειώνουν σε 0, 2, 4, 6, 8. Το 42 τελειώνει σε 2, άρα είναι ζυγός.',
      en: 'Even numbers end in 0, 2, 4, 6, 8. 42 ends in 2, so it is even.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι μονός;', en: 'Which number is odd?' },
    options: { el: ['61', '48', '90', '26'], en: ['61', '48', '90', '26'] },
    correct: 0,
    explanation: {
      el: 'Μονοί είναι οι αριθμοί που τελειώνουν σε 1, 3, 5, 7, 9. Το 61 τελειώνει σε 1, άρα είναι μονός.',
      en: 'Odd numbers end in 1, 3, 5, 7, 9. 61 ends in 1, so it is odd.',
    },
  },

  // ── 16–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη έχει 4 χαρτονομίσματα των 10 € και 3 κέρματα του 1 €. Πόσα ευρώ έχει;', en: 'Eleni has 4 notes of €10 and 3 coins of €1. How many euros does she have?' },
    options: { el: ['7 €', '43 €', '34 €', '13 €'], en: ['€7', '€43', '€34', '€13'] },
    correct: 1,
    explanation: {
      el: '4 δεκάρικα = 40 €, και 3 € ακόμα: 40 + 3 = 43 €.',
      en: '4 tens = €40, and €3 more: 40 + 3 = €43.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 12 αυτοκόλλητα. Η Μαρία έχει τα διπλάσια. Πόσα έχει η Μαρία;', en: 'Nikos has 12 stickers. Maria has double that. How many does Maria have?' },
    options: { el: ['14', '6', '22', '24'], en: ['14', '6', '22', '24'] },
    correct: 3,
    explanation: {
      el: 'Διπλάσια από 12 σημαίνει 12 + 12 = 24 αυτοκόλλητα.',
      en: 'Double 12 means 12 + 12 = 24 stickers.',
    },
  },
  {
    q: { el: 'Ο Γιώργος μοιράζει 18 καραμέλες στα ίσα με την αδερφή του. Πόσες παίρνει ο καθένας;', en: 'Giorgos shares 18 sweets equally with his sister. How many does each one get?' },
    options: { el: ['16', '9', '8', '36'], en: ['16', '9', '8', '36'] },
    correct: 1,
    explanation: {
      el: 'Στα ίσα σε δύο παιδιά σημαίνει το μισό: 9 + 9 = 18, άρα 9 καραμέλες ο καθένας.',
      en: 'Sharing equally between two children means half: 9 + 9 = 18, so 9 sweets each.',
    },
  },
];
