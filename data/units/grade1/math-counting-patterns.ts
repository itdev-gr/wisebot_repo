/**
 * Α' Δημοτικού · Μαθηματικά · Μετρώ ανά 2, 5 και 10
 * ==================================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * Skip counting is the bridge from counting to adding, and the first place children meet
 * the idea of a pattern in numbers.
 * What the unit covers, in order:
 *   1–5   counting in 2s: forwards, backwards from 20, from 1 (1, 3, 5…), the missing number
 *   6–9   counting in 5s: forwards to 20, the missing number, backwards, fingers on hands
 *   10–12 counting in 10s: forwards, the missing ten, backwards
 *   13–18 odd and even (μονοί–ζυγοί) up to 20: which is which, the rule, pairs of socks
 * Distractors are the next counting number (+1 instead of the step), the previous term,
 * the neighbouring skip-count, and confusing "odd" with "big".
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_COUNTING_PATTERNS: QuizQuestion[] = [
  // ── 1–5: counting in 2s ────────────────────────────────────────────────────
  {
    q: { el: 'Μετράμε ανά 2: 2, 4, 6, 8, … Ποιος αριθμός έρχεται μετά;', en: 'We count in 2s: 2, 4, 6, 8, … Which number comes next?' },
    options: { el: ['9', '10', '12', '11'], en: ['9', '10', '12', '11'] },
    correct: 1,
    explanation: {
      el: 'Μετά το 8 έρχεται το 10, γιατί 8 + 2 = 10. Όταν μετράμε ανά 2, πηδάμε έναν αριθμό κάθε φορά.',
      en: 'After 8 comes 10, because 8 + 2 = 10. When we count in 2s, we jump over one number each time.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 2, 4, ___, 8, 10', en: 'Which number is missing in 2, 4, ___, 8, 10?' },
    options: { el: ['5', '7', '6', '3'], en: ['5', '7', '6', '3'] },
    correct: 2,
    explanation: {
      el: 'Λείπει το 6: 4 + 2 = 6 και 6 + 2 = 8. Η σειρά είναι 2, 4, 6, 8, 10.',
      en: 'The missing number is 6: 4 + 2 = 6 and 6 + 2 = 8. The row is 2, 4, 6, 8, 10.',
    },
  },
  {
    q: { el: 'Μετράμε ανά 2 προς τα πίσω: 20, 18, 16, … Ποιος αριθμός έρχεται μετά;', en: 'We count back in 2s: 20, 18, 16, … Which number comes next?' },
    options: { el: ['15', '12', '13', '14'], en: ['15', '12', '13', '14'] },
    correct: 3,
    explanation: {
      el: 'Μετά το 16 έρχεται το 14, γιατί 16 − 2 = 14. Προς τα πίσω βγάζουμε 2 κάθε φορά.',
      en: 'After 16 comes 14, because 16 − 2 = 14. Going backwards we take 2 away each time.',
    },
  },
  {
    q: { el: 'Μετράμε ανά 2 ξεκινώντας από το 1: 1, 3, 5, 7, … Ποιος αριθμός έρχεται μετά;', en: 'We count in 2s starting from 1: 1, 3, 5, 7, … Which number comes next?' },
    options: { el: ['8', '9', '10', '11'], en: ['8', '9', '10', '11'] },
    correct: 1,
    explanation: {
      el: 'Μετά το 7 έρχεται το 9: 7 + 2 = 9. Όταν ξεκινάμε από το 1, λέμε όλους τους μονούς αριθμούς.',
      en: 'After 7 comes 9: 7 + 2 = 9. When we start from 1, we say all the odd numbers.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 11, 13, ___, 17, 19', en: 'Which number is missing in 11, 13, ___, 17, 19?' },
    options: { el: ['15', '14', '16', '12'], en: ['15', '14', '16', '12'] },
    correct: 0,
    explanation: {
      el: 'Λείπει το 15: 13 + 2 = 15 και 15 + 2 = 17. Η σειρά πάει ανά 2.',
      en: 'The missing number is 15: 13 + 2 = 15 and 15 + 2 = 17. The row goes up in 2s.',
    },
  },

  // ── 6–9: counting in 5s ────────────────────────────────────────────────────
  {
    q: { el: 'Μετράμε ανά 5: 5, 10, 15, … Ποιος αριθμός έρχεται μετά;', en: 'We count in 5s: 5, 10, 15, … Which number comes next?' },
    options: { el: ['16', '25', '20', '30'], en: ['16', '25', '20', '30'] },
    correct: 2,
    explanation: {
      el: 'Μετά το 15 έρχεται το 20: 15 + 5 = 20. Οι αριθμοί του 5 τελειώνουν πάντα σε 5 ή σε 0.',
      en: 'After 15 comes 20: 15 + 5 = 20. Numbers when counting in 5s always end in 5 or 0.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 5, ___, 15, 20', en: 'Which number is missing in 5, ___, 15, 20?' },
    options: { el: ['6', '10', '12', '11'], en: ['6', '10', '12', '11'] },
    correct: 1,
    explanation: {
      el: 'Λείπει το 10: 5 + 5 = 10 και 10 + 5 = 15.',
      en: 'The missing number is 10: 5 + 5 = 10 and 10 + 5 = 15.',
    },
  },
  {
    q: { el: 'Μετράμε ανά 5 προς τα πίσω: 20, 15, 10, … Ποιος αριθμός έρχεται μετά;', en: 'We count back in 5s: 20, 15, 10, … Which number comes next?' },
    options: { el: ['0', '9', '5', '25'], en: ['0', '9', '5', '25'] },
    correct: 2,
    explanation: {
      el: 'Μετά το 10 έρχεται το 5: 10 − 5 = 5. Προς τα πίσω βγάζουμε 5 κάθε φορά.',
      en: 'After 10 comes 5: 10 − 5 = 5. Going backwards we take 5 away each time.',
    },
  },
  {
    q: { el: 'Κάθε χέρι έχει 5 δάχτυλα. Πόσα δάχτυλα έχουν 3 χέρια; Μέτρα ανά 5.', en: 'Each hand has 5 fingers. How many fingers do 3 hands have? Count in 5s.' },
    options: { el: ['8', '10', '20', '15'], en: ['8', '10', '20', '15'] },
    correct: 3,
    explanation: {
      el: 'Τρία χέρια: 5, 10, 15. Άρα 15 δάχτυλα. Το 8 είναι 3 + 5, αλλά εδώ μετράμε τρεις φορές το 5.',
      en: 'Three hands: 5, 10, 15. So 15 fingers. 8 is 3 + 5, but here we count 5 three times.',
    },
  },

  // ── 10–12: counting in 10s ────────────────────────────────────────────────
  {
    q: { el: 'Μετράμε ανά 10: 10, 20, 30, … Ποιος αριθμός έρχεται μετά;', en: 'We count in 10s: 10, 20, 30, … Which number comes next?' },
    options: { el: ['31', '40', '35', '50'], en: ['31', '40', '35', '50'] },
    correct: 1,
    explanation: {
      el: 'Μετά το 30 έρχεται το 40: 30 + 10 = 40. Οι δεκάδες τελειώνουν πάντα σε 0.',
      en: 'After 30 comes 40: 30 + 10 = 40. Tens always end in 0.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 10, 20, ___, 40, 50', en: 'Which number is missing in 10, 20, ___, 40, 50?' },
    options: { el: ['25', '35', '30', '21'], en: ['25', '35', '30', '21'] },
    correct: 2,
    explanation: {
      el: 'Λείπει το 30: 20 + 10 = 30 και 30 + 10 = 40. Μία δεκάδα, δύο δεκάδες, τρεις δεκάδες!',
      en: 'The missing number is 30: 20 + 10 = 30 and 30 + 10 = 40. One ten, two tens, three tens!',
    },
  },
  {
    q: { el: 'Μετράμε ανά 10 προς τα πίσω: 50, 40, 30, … Ποιος αριθμός έρχεται μετά;', en: 'We count back in 10s: 50, 40, 30, … Which number comes next?' },
    options: { el: ['20', '29', '10', '25'], en: ['20', '29', '10', '25'] },
    correct: 0,
    explanation: {
      el: 'Μετά το 30 έρχεται το 20: 30 − 10 = 20. Προς τα πίσω βγάζουμε μία δεκάδα κάθε φορά.',
      en: 'After 30 comes 20: 30 − 10 = 20. Going backwards we take one ten away each time.',
    },
  },

  // ── 13–18: odd and even ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι ζυγός;', en: 'Which number is even?' },
    options: { el: ['3', '7', '8', '5'], en: ['3', '7', '8', '5'] },
    correct: 2,
    explanation: {
      el: 'Το 8 είναι ζυγός: χωρίζεται σε δύο ίσα μέρη, 4 και 4. Οι ζυγοί είναι οι αριθμοί που λέμε όταν μετράμε ανά 2: 2, 4, 6, 8…',
      en: '8 is even: it splits into two equal parts, 4 and 4. The even numbers are the ones we say when counting in 2s: 2, 4, 6, 8…',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι μονός;', en: 'Which number is odd?' },
    options: { el: ['4', '9', '6', '10'], en: ['4', '9', '6', '10'] },
    correct: 1,
    explanation: {
      el: 'Το 9 είναι μονός: αν το χωρίσεις σε δύο, 4 και 4, περισσεύει ένα. Μονοί είναι το 1, 3, 5, 7, 9…',
      en: '9 is odd: if you split it in two, 4 and 4, one is left over. Odd numbers are 1, 3, 5, 7, 9…',
    },
  },
  {
    q: { el: 'Το 12 είναι μονός ή ζυγός αριθμός;', en: 'Is 12 an odd or an even number?' },
    options: { el: ['Ζυγός, γιατί χωρίζεται σε δύο ίσα μέρη', 'Μονός, γιατί είναι μεγάλος αριθμός', 'Μονός, γιατί αρχίζει από 1', 'Ούτε μονός ούτε ζυγός'], en: ['Even, because it splits into two equal parts', 'Odd, because it is a big number', 'Odd, because it starts with 1', 'Neither odd nor even'] },
    correct: 0,
    explanation: {
      el: 'Το 12 είναι ζυγός: 6 + 6 = 12. Κοιτάμε το τελευταίο ψηφίο, το 2, όχι το πρώτο.',
      en: '12 is even: 6 + 6 = 12. We look at the last digit, the 2, not the first one.',
    },
  },
  {
    q: { el: 'Πώς καταλαβαίνουμε αν ένας αριθμός είναι ζυγός;', en: 'How do we know if a number is even?' },
    options: { el: ['Αν τελειώνει σε 0, 2, 4, 6 ή 8', 'Αν είναι μεγαλύτερος από 10', 'Αν τελειώνει σε 1, 3, 5, 7 ή 9', 'Αν έχει δύο ψηφία'], en: ['If it ends in 0, 2, 4, 6 or 8', 'If it is bigger than 10', 'If it ends in 1, 3, 5, 7 or 9', 'If it has two digits'] },
    correct: 0,
    explanation: {
      el: 'Οι ζυγοί τελειώνουν σε 0, 2, 4, 6 ή 8 — όπως το 14 και το 20. Οι μονοί τελειώνουν σε 1, 3, 5, 7 ή 9.',
      en: 'Even numbers end in 0, 2, 4, 6 or 8 — like 14 and 20. Odd numbers end in 1, 3, 5, 7 or 9.',
    },
  },
  {
    q: { el: 'Έχεις 7 κάλτσες. Μπορείς να φτιάξεις ζευγάρια χωρίς να περισσέψει καμία;', en: 'You have 7 socks. Can you make pairs without any sock left over?' },
    options: { el: ['Ναι, γίνονται 3 ζευγάρια ακριβώς', 'Ναι, γίνονται 4 ζευγάρια ακριβώς', 'Όχι, περισσεύουν δύο κάλτσες', 'Όχι, το 7 είναι μονός και μία κάλτσα περισσεύει'], en: ['Yes, exactly 3 pairs', 'Yes, exactly 4 pairs', 'No, two socks are left over', 'No, 7 is odd and one sock is left over'] },
    correct: 3,
    explanation: {
      el: 'Το 7 είναι μονός: 3 ζευγάρια είναι 6 κάλτσες και μία μένει μόνη της. Οι μονοί αριθμοί δεν φτιάχνουν ζευγάρια ακριβώς.',
      en: '7 is odd: 3 pairs are 6 socks and one is left on its own. Odd numbers never make exact pairs.',
    },
  },
  {
    q: { el: 'Ποια σειρά έχει μόνο μονούς αριθμούς;', en: 'Which row has only odd numbers?' },
    options: { el: ['2, 4, 6, 8', '1, 3, 5, 7', '1, 2, 3, 4', '3, 6, 9, 12'], en: ['2, 4, 6, 8', '1, 3, 5, 7', '1, 2, 3, 4', '3, 6, 9, 12'] },
    correct: 1,
    explanation: {
      el: 'Το 1, 3, 5, 7 είναι όλοι μονοί. Στο «3, 6, 9, 12» το 6 και το 12 είναι ζυγοί.',
      en: '1, 3, 5, 7 are all odd. In “3, 6, 9, 12” the 6 and the 12 are even.',
    },
  },
];
