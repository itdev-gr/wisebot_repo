/**
 * Ε' Δημοτικού · Μαθηματικά · Πολλαπλάσια & Διαιρέτες
 * ==================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–3   multiples: spotting one, counting along a table, a common multiple
 *   4–8   divisibility rules for 2, 5, 3, 9 and 10 (incl. one number tested against all)
 *   9–11  divisors: listing them, counting them, spotting a non-divisor
 *   12–14 prime numbers up to 50 (a prime, a "looks prime" composite, the even prime)
 *   15–16 ΕΚΠ (LCM): a bare pair and a two-buses word problem
 *   17–18 ΜΚΔ (GCD): a bare pair and a fair-baskets word problem
 * Distractors are real child mistakes: confusing multiples with divisors, forgetting 1
 * and the number itself, thinking every odd number is prime, mixing up ΕΚΠ and ΜΚΔ.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_MULTIPLES_AND_DIVISORS: QuizQuestion[] = [
  // ── 1–3: multiples ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος από τους παρακάτω αριθμούς είναι πολλαπλάσιο του 6;', en: 'Which of these numbers is a multiple of 6?' },
    options: { el: ['27', '32', '42', '45'], en: ['27', '32', '42', '45'] },
    correct: 2,
    explanation: {
      el: 'Πολλαπλάσια του 6 είναι οι αριθμοί της προπαίδειας του 6: 6, 12, 18, 24, 30, 36, 42… Το 42 = 6 × 7.',
      en: 'The multiples of 6 are the numbers in the 6 times table: 6, 12, 18, 24, 30, 36, 42… 42 = 6 × 7.',
    },
  },
  {
    q: { el: 'Ποιο είναι το πέμπτο πολλαπλάσιο του 8, αν ξεκινήσουμε από το 8;', en: 'What is the fifth multiple of 8, if we start from 8?' },
    options: { el: ['32', '40', '48', '13'], en: ['32', '40', '48', '13'] },
    correct: 1,
    explanation: {
      el: 'Μετράμε ανά 8: 8, 16, 24, 32, 40. Το πέμπτο είναι το 40 = 8 × 5.',
      en: 'Count in eights: 8, 16, 24, 32, 40. The fifth one is 40 = 8 × 5.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι κοινό πολλαπλάσιο του 4 και του 6;', en: 'Which number is a common multiple of 4 and 6?' },
    options: { el: ['8', '18', '24', '30'], en: ['8', '18', '24', '30'] },
    correct: 2,
    explanation: {
      el: 'Το 24 βρίσκεται και στην προπαίδεια του 4 (4 × 6) και στην προπαίδεια του 6 (6 × 4). Το 8 και το 18 είναι πολλαπλάσια μόνο του ενός από τους δύο.',
      en: '24 is in both the 4 times table (4 × 6) and the 6 times table (6 × 4). 8 and 18 are multiples of only one of the two.',
    },
  },

  // ── 4–8: divisibility rules ────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός διαιρείται ακριβώς με το 2;', en: 'Which number is exactly divisible by 2?' },
    options: { el: ['347', '258', '191', '573'], en: ['347', '258', '191', '573'] },
    correct: 1,
    explanation: {
      el: 'Ένας αριθμός διαιρείται με το 2 όταν τελειώνει σε 0, 2, 4, 6 ή 8. Το 258 τελειώνει σε 8, άρα είναι ζυγός.',
      en: 'A number is divisible by 2 when it ends in 0, 2, 4, 6 or 8. 258 ends in 8, so it is even.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός διαιρείται ακριβώς με το 5;', en: 'Which number is exactly divisible by 5?' },
    options: { el: ['452', '507', '231', '985'], en: ['452', '507', '231', '985'] },
    correct: 3,
    explanation: {
      el: 'Κοιτάμε μόνο το τελευταίο ψηφίο: αν είναι 0 ή 5, ο αριθμός διαιρείται με το 5. Το 985 τελειώνει σε 5.',
      en: 'Look only at the last digit: if it is 0 or 5, the number is divisible by 5. 985 ends in 5.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός διαιρείται ακριβώς με το 3;', en: 'Which number is exactly divisible by 3?' },
    options: { el: ['472', '531', '283', '715'], en: ['472', '531', '283', '715'] },
    correct: 1,
    explanation: {
      el: 'Προσθέτουμε τα ψηφία: 5 + 3 + 1 = 9, και το 9 διαιρείται με το 3. Άρα και το 531 διαιρείται με το 3 (531 ÷ 3 = 177).',
      en: 'Add the digits: 5 + 3 + 1 = 9, and 9 is divisible by 3. So 531 is divisible by 3 too (531 ÷ 3 = 177).',
    },
  },
  {
    q: { el: 'Ποιος αριθμός διαιρείται ακριβώς με το 9;', en: 'Which number is exactly divisible by 9?' },
    options: { el: ['738', '634', '815', '542'], en: ['738', '634', '815', '542'] },
    correct: 0,
    explanation: {
      el: 'Ίδιο κόλπο με το 3, αλλά το άθροισμα των ψηφίων πρέπει να διαιρείται με το 9: 7 + 3 + 8 = 18 = 9 × 2. Άρα 738 ÷ 9 = 82.',
      en: 'Same trick as for 3, but the digit sum must be divisible by 9: 7 + 3 + 8 = 18 = 9 × 2. So 738 ÷ 9 = 82.',
    },
  },
  {
    q: { el: 'Με ποιους από τους αριθμούς 2, 3, 5, 9 και 10 διαιρείται ακριβώς το 630;', en: 'Which of the numbers 2, 3, 5, 9 and 10 divide 630 exactly?' },
    options: { el: ['Με όλους: 2, 3, 5, 9 και 10', 'Μόνο με το 2 και το 10', 'Μόνο με το 5 και το 10', 'Με το 2 και το 5, όχι με το 3'], en: ['All of them: 2, 3, 5, 9 and 10', 'Only 2 and 10', 'Only 5 and 10', '2 and 5, but not 3'] },
    correct: 0,
    explanation: {
      el: 'Το 630 τελειώνει σε 0, άρα διαιρείται με το 2, το 5 και το 10. Τα ψηφία του κάνουν 6 + 3 + 0 = 9, άρα διαιρείται και με το 3 και με το 9.',
      en: '630 ends in 0, so it is divisible by 2, 5 and 10. Its digits add to 6 + 3 + 0 = 9, so it is also divisible by 3 and by 9.',
    },
  },

  // ── 9–11: divisors ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιοι είναι όλοι οι διαιρέτες του 12;', en: 'What are all the divisors of 12?' },
    options: { el: ['1, 2, 3, 4, 12', '2, 3, 4, 6', '1, 2, 4, 6, 12', '1, 2, 3, 4, 6, 12'], en: ['1, 2, 3, 4, 12', '2, 3, 4, 6', '1, 2, 4, 6, 12', '1, 2, 3, 4, 6, 12'] },
    correct: 3,
    explanation: {
      el: 'Διαιρέτης είναι κάθε αριθμός που διαιρεί το 12 χωρίς υπόλοιπο. Τους βρίσκουμε σε ζευγάρια: 1 × 12, 2 × 6, 3 × 4. Μην ξεχνάς το 1 και τον ίδιο τον αριθμό!',
      en: 'A divisor is any number that divides 12 with no remainder. Find them in pairs: 1 × 12, 2 × 6, 3 × 4. Do not forget 1 and the number itself!',
    },
  },
  {
    q: { el: 'Πόσους διαιρέτες έχει το 20;', en: 'How many divisors does 20 have?' },
    options: { el: ['4', '5', '6', '8'], en: ['4', '5', '6', '8'] },
    correct: 2,
    explanation: {
      el: 'Ζευγάρια: 1 × 20, 2 × 10, 4 × 5. Άρα οι διαιρέτες είναι 1, 2, 4, 5, 10, 20 — έξι διαιρέτες.',
      en: 'Pairs: 1 × 20, 2 × 10, 4 × 5. So the divisors are 1, 2, 4, 5, 10, 20 — six divisors.',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω ΔΕΝ είναι διαιρέτης του 36;', en: 'Which of these is NOT a divisor of 36?' },
    options: { el: ['4', '6', '9', '8'], en: ['4', '6', '9', '8'] },
    correct: 3,
    explanation: {
      el: '36 ÷ 4 = 9, 36 ÷ 6 = 6, 36 ÷ 9 = 4 — όλες ακριβείς. Όμως 36 ÷ 8 = 4 και περισσεύει 4, άρα το 8 δεν είναι διαιρέτης.',
      en: '36 ÷ 4 = 9, 36 ÷ 6 = 6, 36 ÷ 9 = 4 — all exact. But 36 ÷ 8 = 4 remainder 4, so 8 is not a divisor.',
    },
  },

  // ── 12–14: prime numbers ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιος από τους παρακάτω αριθμούς είναι πρώτος;', en: 'Which of these numbers is prime?' },
    options: { el: ['21', '27', '29', '33'], en: ['21', '27', '29', '33'] },
    correct: 2,
    explanation: {
      el: 'Πρώτος είναι ο αριθμός που έχει μόνο δύο διαιρέτες: το 1 και τον εαυτό του. Το 29 δεν διαιρείται με τίποτα άλλο. Τα άλλα διαιρούνται με το 3: 21 = 3 × 7, 27 = 3 × 9, 33 = 3 × 11.',
      en: 'A prime number has exactly two divisors: 1 and itself. 29 is divisible by nothing else. The others are divisible by 3: 21 = 3 × 7, 27 = 3 × 9, 33 = 3 × 11.',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω αριθμούς ΔΕΝ είναι πρώτος;', en: 'Which of these numbers is NOT prime?' },
    options: { el: ['39', '31', '37', '41'], en: ['39', '31', '37', '41'] },
    correct: 0,
    explanation: {
      el: 'Το 39 μοιάζει με πρώτο, αλλά 3 + 9 = 12, άρα διαιρείται με το 3: 39 = 3 × 13. Το 31, το 37 και το 41 είναι πρώτοι.',
      en: '39 looks prime, but 3 + 9 = 12, so it is divisible by 3: 39 = 3 × 13. 31, 37 and 41 are prime.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο μοναδικός ζυγός (άρτιος) πρώτος αριθμός;', en: 'What is the only even prime number?' },
    options: { el: ['1', '2', '4', '0'], en: ['1', '2', '4', '0'] },
    correct: 1,
    explanation: {
      el: 'Το 2 έχει μόνο τους διαιρέτες 1 και 2, άρα είναι πρώτος. Κάθε άλλος ζυγός αριθμός διαιρείται και με το 2, οπότε έχει πάνω από δύο διαιρέτες. (Το 1 δεν θεωρείται πρώτος.)',
      en: '2 has only the divisors 1 and 2, so it is prime. Every other even number is also divisible by 2, so it has more than two divisors. (1 is not counted as prime.)',
    },
  },

  // ── 15–16: ΕΚΠ (least common multiple) ────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το ΕΚΠ (Ελάχιστο Κοινό Πολλαπλάσιο) του 4 και του 6;', en: 'What is the ΕΚΠ (least common multiple) of 4 and 6?' },
    options: { el: ['2', '12', '24', '10'], en: ['2', '12', '24', '10'] },
    correct: 1,
    explanation: {
      el: 'Πολλαπλάσια του 4: 4, 8, 12, 16… Πολλαπλάσια του 6: 6, 12, 18… Το πρώτο κοινό είναι το 12. (Το 24 είναι κοινό πολλαπλάσιο, αλλά όχι το ελάχιστο.)',
      en: 'Multiples of 4: 4, 8, 12, 16… Multiples of 6: 6, 12, 18… The first one they share is 12. (24 is a common multiple, but not the least.)',
    },
  },
  {
    q: { el: 'Στη στάση, το ένα λεωφορείο περνάει κάθε 6 λεπτά και το άλλο κάθε 8 λεπτά. Πέρασαν μαζί στις 9:00. Πότε θα ξαναπεράσουν μαζί;', en: 'At the bus stop, one bus comes every 6 minutes and the other every 8 minutes. They came together at 9:00. When will they next come together?' },
    options: { el: ['9:24', '9:48', '9:14', '9:12'], en: ['9:24', '9:48', '9:14', '9:12'] },
    correct: 0,
    explanation: {
      el: 'Ζητάμε το ΕΚΠ του 6 και του 8. Πολλαπλάσια του 8: 8, 16, 24 — το 24 είναι και πολλαπλάσιο του 6 (6 × 4). Άρα μετά από 24 λεπτά: 9:24.',
      en: 'We need the ΕΚΠ of 6 and 8. Multiples of 8: 8, 16, 24 — and 24 is also a multiple of 6 (6 × 4). So after 24 minutes: 9:24.',
    },
  },

  // ── 17–18: ΜΚΔ (greatest common divisor) ──────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο ΜΚΔ (Μέγιστος Κοινός Διαιρέτης) του 12 και του 18;', en: 'What is the ΜΚΔ (greatest common divisor) of 12 and 18?' },
    options: { el: ['36', '6', '3', '2'], en: ['36', '6', '3', '2'] },
    correct: 1,
    explanation: {
      el: 'Διαιρέτες του 12: 1, 2, 3, 4, 6, 12. Διαιρέτες του 18: 1, 2, 3, 6, 9, 18. Οι κοινοί είναι 1, 2, 3, 6 και ο μεγαλύτερος είναι το 6. (Το 36 είναι το ΕΚΠ τους, όχι ο ΜΚΔ!)',
      en: 'Divisors of 12: 1, 2, 3, 4, 6, 12. Divisors of 18: 1, 2, 3, 6, 9, 18. They share 1, 2, 3, 6 and the greatest is 6. (36 is their ΕΚΠ, not the ΜΚΔ!)',
    },
  },
  {
    q: { el: 'Η κυρία Άννα έχει 20 μήλα και 30 αχλάδια. Θέλει να φτιάξει όσο πιο πολλά καλαθάκια γίνεται, όλα ίδια, χωρίς να περισσέψει κανένα φρούτο. Πόσα καλαθάκια θα φτιάξει;', en: 'Mrs Anna has 20 apples and 30 pears. She wants to make as many identical baskets as possible, with no fruit left over. How many baskets will she make?' },
    options: { el: ['5', '2', '60', '10'], en: ['5', '2', '60', '10'] },
    correct: 3,
    explanation: {
      el: 'Ο αριθμός των καλαθιών πρέπει να διαιρεί και το 20 και το 30, και να είναι ο μεγαλύτερος δυνατός: ΜΚΔ(20, 30) = 10. Κάθε καλαθάκι θα έχει 2 μήλα και 3 αχλάδια.',
      en: 'The number of baskets must divide both 20 and 30, and be as large as possible: ΜΚΔ(20, 30) = 10. Each basket gets 2 apples and 3 pears.',
    },
  },
];
