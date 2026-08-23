/**
 * Γ' Δημοτικού · Μαθηματικά · Διαίρεση
 * =====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Covered in this order:
 *   1–4   two-digit × one-digit, including the written algorithm with a carry
 *   5–11  what "÷" means, dividing by the tables, the link with multiplication
 *   12–14 division with a remainder
 *   15–18 word problems: stickers, money in €, egg boxes, pencils with a remainder
 * Distractors are real child mistakes: forgotten carry, neighbouring table,
 * subtracting/adding instead, remainder bigger than the divisor.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_DIVISION: QuizQuestion[] = [
  // ── 1–4: two-digit × one-digit ─────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 12 × 3;', en: 'What is 12 × 3?' },
    options: { el: ['15', '32', '36', '39'], en: ['15', '32', '36', '39'] },
    correct: 2,
    explanation: {
      el: '12 × 3 = 36. Σπάμε το 12: 10 × 3 = 30 και 2 × 3 = 6, μαζί 36.',
      en: '12 × 3 = 36. Split the 12: 10 × 3 = 30 and 2 × 3 = 6, together 36.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 24 × 2;', en: 'What is 24 × 2?' },
    options: { el: ['48', '26', '44', '28'], en: ['48', '26', '44', '28'] },
    correct: 0,
    explanation: {
      el: '24 × 2 = 48. Διπλό του 20 είναι 40, διπλό του 4 είναι 8: 40 + 8 = 48.',
      en: '24 × 2 = 48. Double 20 is 40, double 4 is 8: 40 + 8 = 48.',
    },
  },
  {
    q: { el: 'Κάθετα: 23 × 4. Πόσο κάνει;', en: 'Written in columns: 23 × 4. What is it?' },
    options: { el: ['82', '92', '27', '812'], en: ['82', '92', '27', '812'] },
    correct: 1,
    explanation: {
      el: '3 × 4 = 12: γράφουμε 2, κρατάμε 1. Μετά 2 × 4 = 8 και 1 το κρατούμενο = 9. Άρα 92.',
      en: '3 × 4 = 12: write 2, carry 1. Then 2 × 4 = 8 plus the carried 1 = 9. So 92.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 18 × 5;', en: 'What is 18 × 5?' },
    options: { el: ['50', '23', '80', '90'], en: ['50', '23', '80', '90'] },
    correct: 3,
    explanation: {
      el: '18 × 5 = 90. 8 × 5 = 40, γράφουμε 0 και κρατάμε 4. 1 × 5 = 5 και 4 = 9. Μην ξεχνάς το κρατούμενο!',
      en: '18 × 5 = 90. 8 × 5 = 40, write 0 and carry 4. 1 × 5 = 5 plus 4 = 9. Do not forget the carry!',
    },
  },

  // ── 5–11: what division is, dividing by the tables ─────────────────────────
  {
    q: { el: 'Έχουμε 12 καραμέλες και τις μοιράζουμε ίσα σε 3 παιδιά. Ποια πράξη κάνουμε;', en: 'We have 12 sweets and share them equally among 3 children. Which sum do we do?' },
    options: { el: ['12 × 3', '12 ÷ 3', '12 − 3', '12 + 3'], en: ['12 × 3', '12 ÷ 3', '12 − 3', '12 + 3'] },
    correct: 1,
    explanation: {
      el: 'Μοιράζω ίσα = διαιρώ. 12 ÷ 3 = 4, κάθε παιδί παίρνει 4 καραμέλες.',
      en: 'Sharing equally means dividing. 12 ÷ 3 = 4, each child gets 4 sweets.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 20 ÷ 5;', en: 'What is 20 ÷ 5?' },
    options: { el: ['4', '15', '5', '25'], en: ['4', '15', '5', '25'] },
    correct: 0,
    explanation: {
      el: '20 ÷ 5 = 4, γιατί 4 × 5 = 20. Σκέψου: πόσες φορές χωράει το 5 στο 20;',
      en: '20 ÷ 5 = 4, because 4 × 5 = 20. Think: how many times does 5 fit into 20?',
    },
  },
  {
    q: { el: 'Πόσο κάνει 18 ÷ 2;', en: 'What is 18 ÷ 2?' },
    options: { el: ['16', '8', '9', '20'], en: ['16', '8', '9', '20'] },
    correct: 2,
    explanation: {
      el: '18 ÷ 2 = 9. Διαιρώ με το 2 σημαίνει βρίσκω το μισό: το μισό του 18 είναι 9.',
      en: '18 ÷ 2 = 9. Dividing by 2 means finding half: half of 18 is 9.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 42 ÷ 6;', en: 'What is 42 ÷ 6?' },
    options: { el: ['6', '7', '8', '36'], en: ['6', '7', '8', '36'] },
    correct: 1,
    explanation: {
      el: '42 ÷ 6 = 7, γιατί 6 × 7 = 42. Η προπαίδεια του 6 μας βοηθάει στη διαίρεση.',
      en: '42 ÷ 6 = 7, because 6 × 7 = 42. The 6 times table helps us divide.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 56 ÷ 8;', en: 'What is 56 ÷ 8?' },
    options: { el: ['6', '8', '48', '7'], en: ['6', '8', '48', '7'] },
    correct: 3,
    explanation: {
      el: '56 ÷ 8 = 7. Θυμήσου το «5, 6, 7, 8»: 7 × 8 = 56.',
      en: '56 ÷ 8 = 7. Remember “5, 6, 7, 8”: 7 × 8 = 56.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; ___ ÷ 4 = 9', en: 'Which number is missing? ___ ÷ 4 = 9' },
    options: { el: ['36', '13', '32', '40'], en: ['36', '13', '32', '40'] },
    correct: 0,
    explanation: {
      el: 'Για να βρω τον αριθμό που λείπει, πολλαπλασιάζω: 9 × 4 = 36. Και 36 ÷ 4 = 9.',
      en: 'To find the missing number, multiply: 9 × 4 = 36. And 36 ÷ 4 = 9.',
    },
  },
  {
    q: { el: 'Αν 7 × 9 = 63, τότε 63 ÷ 7 = ;', en: 'If 7 × 9 = 63, then 63 ÷ 7 = ?' },
    options: { el: ['7', '56', '9', '8'], en: ['7', '56', '9', '8'] },
    correct: 2,
    explanation: {
      el: '63 ÷ 7 = 9. Η διαίρεση είναι το αντίθετο του πολλαπλασιασμού: 7 × 9 = 63, άρα 63 ÷ 7 = 9.',
      en: '63 ÷ 7 = 9. Division is the opposite of multiplication: 7 × 9 = 63, so 63 ÷ 7 = 9.',
    },
  },

  // ── 12–14: division with a remainder ───────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 13 ÷ 4;', en: 'What is 13 ÷ 4?' },
    options: { el: ['3 και υπόλοιπο 1', '3 και υπόλοιπο 0', '4 και υπόλοιπο 1', '2 και υπόλοιπο 5'], en: ['3 remainder 1', '3 remainder 0', '4 remainder 1', '2 remainder 5'] },
    correct: 0,
    explanation: {
      el: '4 × 3 = 12 και μένει 1 για να φτάσουμε το 13. Άρα 13 ÷ 4 = 3 με υπόλοιπο 1.',
      en: '4 × 3 = 12 and 1 is left to reach 13. So 13 ÷ 4 = 3 remainder 1.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 17 ÷ 5;', en: 'What is 17 ÷ 5?' },
    options: { el: ['2 και υπόλοιπο 7', '3 και υπόλοιπο 2', '3 και υπόλοιπο 3', '4 και υπόλοιπο 0'], en: ['2 remainder 7', '3 remainder 2', '3 remainder 3', '4 remainder 0'] },
    correct: 1,
    explanation: {
      el: '5 × 3 = 15 και μένουν 2. Άρα 17 ÷ 5 = 3 με υπόλοιπο 2. Το υπόλοιπο είναι πάντα πιο μικρό από τον διαιρέτη!',
      en: '5 × 3 = 15 and 2 are left. So 17 ÷ 5 = 3 remainder 2. The remainder is always smaller than the divisor!',
    },
  },
  {
    q: { el: 'Ποια διαίρεση γίνεται χωρίς υπόλοιπο;', en: 'Which division has no remainder?' },
    options: { el: ['25 ÷ 6', '23 ÷ 6', '24 ÷ 6', '26 ÷ 6'], en: ['25 ÷ 6', '23 ÷ 6', '24 ÷ 6', '26 ÷ 6'] },
    correct: 2,
    explanation: {
      el: '24 ÷ 6 = 4 ακριβώς, γιατί 6 × 4 = 24. Το 23, το 25 και το 26 δεν είναι στην προπαίδεια του 6.',
      en: '24 ÷ 6 = 4 exactly, because 6 × 4 = 24. 23, 25 and 26 are not in the 6 times table.',
    },
  },

  // ── 15–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος έχει 3 πακέτα με 15 αυτοκόλλητα το καθένα. Πόσα αυτοκόλλητα έχει;', en: 'George has 3 packs with 15 stickers in each. How many stickers does he have?' },
    options: { el: ['18', '35', '55', '45'], en: ['18', '35', '55', '45'] },
    correct: 3,
    explanation: {
      el: '3 × 15 = 45 αυτοκόλλητα. 3 × 10 = 30 και 3 × 5 = 15, μαζί 45.',
      en: '3 × 15 = 45 stickers. 3 × 10 = 30 and 3 × 5 = 15, together 45.',
    },
  },
  {
    q: { el: 'Τέσσερα παιδιά μοιράζονται ίσα 28 €. Πόσα ευρώ παίρνει το καθένα;', en: 'Four children share €28 equally. How many euros does each one get?' },
    options: { el: ['24 €', '7 €', '6 €', '32 €'], en: ['€24', '€7', '€6', '€32'] },
    correct: 1,
    explanation: {
      el: '28 ÷ 4 = 7 €, γιατί 4 × 7 = 28. (Το 24 είναι 28 − 4, αυτό είναι αφαίρεση!)',
      en: '28 ÷ 4 = €7, because 4 × 7 = 28. (24 is 28 − 4, that is subtracting!)',
    },
  },
  {
    q: { el: 'Η Ελένη βάζει 30 αβγά σε κουτιά των 6. Πόσα κουτιά γεμίζει;', en: 'Helen puts 30 eggs into boxes of 6. How many boxes does she fill?' },
    options: { el: ['5', '6', '24', '4'], en: ['5', '6', '24', '4'] },
    correct: 0,
    explanation: {
      el: '30 ÷ 6 = 5 κουτιά, γιατί 5 × 6 = 30. Ρωτάμε «πόσες εξάδες χωράνε στο 30;».',
      en: '30 ÷ 6 = 5 boxes, because 5 × 6 = 30. We ask “how many sixes fit into 30?”.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 23 μολύβια. Σε κάθε κουτί χωράνε 5. Πόσα κουτιά γεμίζει και πόσα μολύβια μένουν έξω;', en: 'Nick has 23 pencils. Each box holds 5. How many boxes does he fill and how many pencils are left over?' },
    options: { el: ['4 κουτιά, μένουν 2 μολύβια', '5 κουτιά, μένουν 2 μολύβια', '4 κουτιά, μένουν 3 μολύβια', '3 κουτιά, μένουν 8 μολύβια'], en: ['4 boxes, 2 pencils left', '5 boxes, 2 pencils left', '4 boxes, 3 pencils left', '3 boxes, 8 pencils left'] },
    correct: 2,
    explanation: {
      el: '23 ÷ 5 = 4 με υπόλοιπο 3: 4 × 5 = 20 και 23 − 20 = 3. Γεμίζει 4 κουτιά και μένουν 3 μολύβια.',
      en: '23 ÷ 5 = 4 remainder 3: 4 × 5 = 20 and 23 − 20 = 3. He fills 4 boxes and 3 pencils are left.',
    },
  },
];
