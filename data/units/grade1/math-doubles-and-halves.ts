/**
 * Α' Δημοτικού · Μαθηματικά · Διπλάσια & μισά
 * ============================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * Doubles are the first sums children learn by heart, and halves are their mirror image.
 * What the unit covers, in order:
 *   1–6   the double of 1–10: "2 + 2", "the double of 7", up to 10 + 10 = 20
 *   7–11  the half of an even number up to 20, including "two equal numbers make 16"
 *   12–14 near doubles: 5 + 6 is 5 + 5 and one more
 *   15–18 sharing fairly between two, and "twice as many" in little stories
 * Distractors are the neighbouring answer (off by one), the digits written side by side (66),
 * the number itself instead of its half, and the double where the half was asked.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_DOUBLES_AND_HALVES: QuizQuestion[] = [
  // ── 1–6: doubles of 1–10 ───────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2 + 2;', en: 'What is 2 + 2?' },
    options: { el: ['3', '4', '5', '22'], en: ['3', '4', '5', '22'] },
    correct: 1,
    explanation: {
      el: '2 + 2 = 4. Όταν προσθέτουμε έναν αριθμό με τον εαυτό του, βρίσκουμε το διπλάσιό του.',
      en: '2 + 2 = 4. When we add a number to itself, we find its double.',
    },
  },
  {
    q: { el: 'Ποιο είναι το διπλάσιο του 4;', en: 'What is the double of 4?' },
    options: { el: ['6', '7', '8', '9'], en: ['6', '7', '8', '9'] },
    correct: 2,
    explanation: {
      el: 'Το διπλάσιο του 4 είναι 4 + 4 = 8. Τέσσερα δάχτυλα στο ένα χέρι και τέσσερα στο άλλο: οκτώ!',
      en: 'The double of 4 is 4 + 4 = 8. Four fingers on one hand and four on the other: eight!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 6 + 6;', en: 'What is 6 + 6?' },
    options: { el: ['12', '11', '13', '66'], en: ['12', '11', '13', '66'] },
    correct: 0,
    explanation: {
      el: '6 + 6 = 12. Σκέψου δύο κουτιά με 6 αυγά το καθένα: 12 αυγά.',
      en: '6 + 6 = 12. Think of two boxes with 6 eggs in each: 12 eggs.',
    },
  },
  {
    q: { el: 'Ποιο είναι το διπλάσιο του 7;', en: 'What is the double of 7?' },
    options: { el: ['12', '14', '16', '17'], en: ['12', '14', '16', '17'] },
    correct: 1,
    explanation: {
      el: 'Το διπλάσιο του 7 είναι 7 + 7 = 14. Μια εβδομάδα έχει 7 μέρες, δύο εβδομάδες έχουν 14.',
      en: 'The double of 7 is 7 + 7 = 14. One week has 7 days, two weeks have 14.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 9 + 9;', en: 'What is 9 + 9?' },
    options: { el: ['16', '19', '17', '18'], en: ['16', '19', '17', '18'] },
    correct: 3,
    explanation: {
      el: '9 + 9 = 18. Κόλπο: 10 + 10 = 20 και βγάζουμε 2, γιατί κάθε 9 είναι ένα λιγότερο από το 10.',
      en: '9 + 9 = 18. Trick: 10 + 10 = 20, then take 2 away, because each 9 is one less than 10.',
    },
  },
  {
    q: { el: 'Ποιο είναι το διπλάσιο του 10;', en: 'What is the double of 10?' },
    options: { el: ['11', '20', '12', '100'], en: ['11', '20', '12', '100'] },
    correct: 1,
    explanation: {
      el: 'Το διπλάσιο του 10 είναι 10 + 10 = 20. Δύο δεκάδες κάνουν μία εικοσάδα!',
      en: 'The double of 10 is 10 + 10 = 20. Two tens make twenty!',
    },
  },

  // ── 7–11: halves of even numbers to 20 ────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το μισό του 6;', en: 'What is half of 6?' },
    options: { el: ['2', '4', '3', '12'], en: ['2', '4', '3', '12'] },
    correct: 2,
    explanation: {
      el: 'Το μισό του 6 είναι 3, γιατί 3 + 3 = 6. Το μισό χωρίζει τον αριθμό σε δύο ίσα μέρη.',
      en: 'Half of 6 is 3, because 3 + 3 = 6. A half splits the number into two equal parts.',
    },
  },
  {
    q: { el: 'Ποιο είναι το μισό του 10;', en: 'What is half of 10?' },
    options: { el: ['5', '4', '6', '20'], en: ['5', '4', '6', '20'] },
    correct: 0,
    explanation: {
      el: 'Το μισό του 10 είναι 5: 5 + 5 = 10. Τα δέκα δάχτυλα χωρίζονται σε πέντε και πέντε.',
      en: 'Half of 10 is 5: 5 + 5 = 10. Ten fingers split into five and five.',
    },
  },
  {
    q: { el: 'Ποιο είναι το μισό του 14;', en: 'What is half of 14?' },
    options: { el: ['6', '8', '7', '28'], en: ['6', '8', '7', '28'] },
    correct: 2,
    explanation: {
      el: 'Το μισό του 14 είναι 7, γιατί 7 + 7 = 14. Αν ξέρεις τα διπλάσια, ξέρεις και τα μισά!',
      en: 'Half of 14 is 7, because 7 + 7 = 14. If you know your doubles, you know your halves too!',
    },
  },
  {
    q: { el: 'Ποιο είναι το μισό του 20;', en: 'What is half of 20?' },
    options: { el: ['5', '15', '9', '10'], en: ['5', '15', '9', '10'] },
    correct: 3,
    explanation: {
      el: 'Το μισό του 20 είναι 10: 10 + 10 = 20. Δύο δεκάδες, η μία είναι το μισό.',
      en: 'Half of 20 is 10: 10 + 10 = 20. Two tens, and one of them is the half.',
    },
  },
  {
    q: { el: 'Δύο ίδιοι αριθμοί κάνουν μαζί 16. Ποιος είναι ο καθένας;', en: 'Two equal numbers make 16 together. What is each one?' },
    options: { el: ['6', '8', '7', '9'], en: ['6', '8', '7', '9'] },
    correct: 1,
    explanation: {
      el: '8 + 8 = 16. Άρα ο καθένας είναι 8, το μισό του 16.',
      en: '8 + 8 = 16. So each one is 8, which is half of 16.',
    },
  },

  // ── 12–14: near doubles ───────────────────────────────────────────────────
  {
    q: { el: 'Το 5 + 6 είναι σαν το 5 + 5 και 1 ακόμα. Πόσο κάνει λοιπόν 5 + 6;', en: '5 + 6 is like 5 + 5 and 1 more. So what is 5 + 6?' },
    options: { el: ['10', '12', '11', '9'], en: ['10', '12', '11', '9'] },
    correct: 2,
    explanation: {
      el: '5 + 5 = 10 και 1 ακόμα κάνουν 11. Άρα 5 + 6 = 11. Αυτό λέγεται «σχεδόν διπλάσιο».',
      en: '5 + 5 = 10 and 1 more makes 11. So 5 + 6 = 11. This is called a “near double”.',
    },
  },
  {
    q: { el: 'Ξέρεις ότι 7 + 7 = 14. Πόσο κάνει 7 + 8;', en: 'You know that 7 + 7 = 14. What is 7 + 8?' },
    options: { el: ['15', '14', '16', '13'], en: ['15', '14', '16', '13'] },
    correct: 0,
    explanation: {
      el: 'Το 8 είναι ένα παραπάνω από το 7. Άρα 7 + 8 = 14 + 1 = 15.',
      en: '8 is one more than 7. So 7 + 8 = 14 + 1 = 15.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 8 + 9; Σκέψου: 8 + 8 και 1 ακόμα.', en: 'What is 8 + 9? Think: 8 + 8 and 1 more.' },
    options: { el: ['16', '18', '17', '19'], en: ['16', '18', '17', '19'] },
    correct: 2,
    explanation: {
      el: '8 + 8 = 16 και 1 ακόμα κάνουν 17. Άρα 8 + 9 = 17.',
      en: '8 + 8 = 16 and 1 more makes 17. So 8 + 9 = 17.',
    },
  },

  // ── 15–18: sharing between two ────────────────────────────────────────────
  {
    q: { el: 'Η Άννα και ο Νίκος μοιράζονται 8 φράουλες, ίσα κι ίσα. Πόσες φράουλες παίρνει ο καθένας;', en: 'Anna and Nikos share 8 strawberries equally. How many strawberries does each one get?' },
    options: { el: ['3', '4', '8', '6'], en: ['3', '4', '8', '6'] },
    correct: 1,
    explanation: {
      el: 'Το μισό του 8 είναι 4: 4 + 4 = 8. Μία φράουλα στην Άννα, μία στον Νίκο, μέχρι να τελειώσουν.',
      en: 'Half of 8 is 4: 4 + 4 = 8. One strawberry to Anna, one to Nikos, until they run out.',
    },
  },
  {
    q: { el: 'Δύο παιδιά μοιράζονται 12 κάρτες, από τις ίδιες. Πόσες κάρτες παίρνει το καθένα;', en: 'Two children share 12 cards equally. How many cards does each one get?' },
    options: { el: ['5', '7', '6', '24'], en: ['5', '7', '6', '24'] },
    correct: 2,
    explanation: {
      el: 'Το μισό του 12 είναι 6, γιατί 6 + 6 = 12. Κάθε παιδί παίρνει 6 κάρτες.',
      en: 'Half of 12 is 6, because 6 + 6 = 12. Each child gets 6 cards.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 3 μπάλες. Ο Πέτρος έχει διπλάσιες. Πόσες μπάλες έχει ο Πέτρος;', en: 'Eleni has 3 balls. Petros has twice as many. How many balls does Petros have?' },
    options: { el: ['5', '9', '7', '6'], en: ['5', '9', '7', '6'] },
    correct: 3,
    explanation: {
      el: 'Διπλάσιες από 3 σημαίνει 3 + 3 = 6. Ο Πέτρος έχει 6 μπάλες.',
      en: 'Twice as many as 3 means 3 + 3 = 6. Petros has 6 balls.',
    },
  },
  {
    q: { el: 'Ο μπαμπάς έκοψε μια πίτσα σε 10 κομμάτια. Τα παιδιά έφαγαν τη μισή. Πόσα κομμάτια έφαγαν;', en: 'Dad cut a pizza into 10 slices. The children ate half of it. How many slices did they eat?' },
    options: { el: ['5', '10', '4', '20'], en: ['5', '10', '4', '20'] },
    correct: 0,
    explanation: {
      el: 'Η μισή πίτσα είναι το μισό των 10 κομματιών: 5 κομμάτια. 5 + 5 = 10.',
      en: 'Half the pizza is half of the 10 slices: 5 slices. 5 + 5 = 10.',
    },
  },
];
