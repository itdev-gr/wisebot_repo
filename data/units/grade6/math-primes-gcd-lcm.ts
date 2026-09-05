/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Πρώτοι αριθμοί, ΜΚΔ & ΕΚΠ
 * ========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–5   prime and composite numbers, the special case of 1, counting primes in a range
 *   6–9   factor trees and prime factorization (36, 60, 42, 45)
 *   10–12 ΜΚΔ (greatest common divisor), also read straight off the factorizations
 *   13–16 ΕΚΠ (least common multiple), also from factorizations, co-prime numbers
 *   17–18 applications: the largest square tile, two buses meeting again
 *
 * Distractors are the mistakes children actually make: confusing ΜΚΔ with ΕΚΠ,
 * taking the product instead of the ΕΚΠ, treating an odd number as prime (27),
 * forgetting one prime in the factorization.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_PRIMES_GCD_LCM: QuizQuestion[] = [
  // ── 1–5: prime and composite numbers ──────────────────────────────────────
  {
    q: { el: 'Ποιος από τους παρακάτω αριθμούς είναι πρώτος;', en: 'Which of these numbers is prime?' },
    options: { el: ['9', '15', '13', '21'], en: ['9', '15', '13', '21'] },
    correct: 2,
    explanation: {
      el: 'Το 13 διαιρείται μόνο με το 1 και το 13. Τα άλλα είναι σύνθετα: 9 = 3 × 3, 15 = 3 × 5, 21 = 3 × 7.',
      en: '13 is divisible only by 1 and 13. The others are composite: 9 = 3 × 3, 15 = 3 × 5, 21 = 3 × 7.',
    },
  },
  {
    q: { el: 'Τι ισχύει για έναν πρώτο αριθμό;', en: 'What is true of a prime number?' },
    options: { el: ['διαιρείται μόνο με το 1 και τον εαυτό του', 'είναι πάντα μονός', 'διαιρείται ακριβώς με το 2', 'έχει τρεις διαιρέτες'], en: ['it is divisible only by 1 and itself', 'it is always odd', 'it is exactly divisible by 2', 'it has three divisors'] },
    correct: 0,
    explanation: {
      el: 'Πρώτος = ακριβώς δύο διαιρέτες, το 1 και ο εαυτός του. Δεν είναι πάντα μονός: το 2 είναι πρώτος (και ο μόνος ζυγός πρώτος).',
      en: 'Prime = exactly two divisors, 1 and itself. Not always odd: 2 is prime (and the only even prime).',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω αριθμούς είναι σύνθετος;', en: 'Which of these numbers is composite?' },
    options: { el: ['17', '19', '23', '27'], en: ['17', '19', '23', '27'] },
    correct: 3,
    explanation: {
      el: 'Το 27 = 3 × 9, άρα έχει κι άλλους διαιρέτες εκτός από το 1 και τον εαυτό του — είναι σύνθετος. Τα 17, 19, 23 είναι πρώτοι.',
      en: '27 = 3 × 9, so it has divisors other than 1 and itself — it is composite. 17, 19 and 23 are prime.',
    },
  },
  {
    q: { el: 'Τι είδους αριθμός είναι το 1;', en: 'What kind of number is 1?' },
    options: { el: ['πρώτος', 'σύνθετος', 'ούτε πρώτος ούτε σύνθετος', 'και πρώτος και σύνθετος'], en: ['prime', 'composite', 'neither prime nor composite', 'both prime and composite'] },
    correct: 2,
    explanation: {
      el: 'Το 1 έχει μόνο έναν διαιρέτη (τον εαυτό του), ενώ οι πρώτοι έχουν ακριβώς δύο. Γι\' αυτό το 1 δεν είναι ούτε πρώτος ούτε σύνθετος.',
      en: '1 has only one divisor (itself), while primes have exactly two. That is why 1 is neither prime nor composite.',
    },
  },
  {
    q: { el: 'Πόσοι πρώτοι αριθμοί υπάρχουν από το 20 μέχρι το 30;', en: 'How many prime numbers are there from 20 to 30?' },
    options: { el: ['1', '2', '3', '4'], en: ['1', '2', '3', '4'] },
    correct: 1,
    explanation: {
      el: 'Μόνο το 23 και το 29. Τα ζυγά διαιρούνται με το 2, το 21 και το 27 με το 3, το 25 με το 5.',
      en: 'Only 23 and 29. The even numbers are divisible by 2, 21 and 27 by 3, and 25 by 5.',
    },
  },

  // ── 6–9: factor trees and prime factorization ────────────────────────────
  {
    q: { el: 'Ποια είναι η ανάλυση του 36 σε γινόμενο πρώτων παραγόντων;', en: 'What is the prime factorization of 36?' },
    options: { el: ['2² × 3²', '4 × 9', '2 × 18', '2 × 3²'], en: ['2² × 3²', '4 × 9', '2 × 18', '2 × 3²'] },
    correct: 0,
    explanation: {
      el: '36 = 4 × 9 = 2 × 2 × 3 × 3 = 2² × 3². Το 4 × 9 είναι σωστό γινόμενο, αλλά το 4 και το 9 δεν είναι πρώτοι. Το 2 × 3² κάνει μόνο 18.',
      en: '36 = 4 × 9 = 2 × 2 × 3 × 3 = 2² × 3². 4 × 9 is a correct product, but 4 and 9 are not prime. 2 × 3² is only 18.',
    },
  },
  {
    q: { el: 'Ποια είναι η ανάλυση του 60 σε γινόμενο πρώτων παραγόντων;', en: 'What is the prime factorization of 60?' },
    options: { el: ['2 × 3 × 10', '2² × 3 × 5', '2 × 3 × 5', '2² × 15'], en: ['2 × 3 × 10', '2² × 3 × 5', '2 × 3 × 5', '2² × 15'] },
    correct: 1,
    explanation: {
      el: 'Δέντρο παραγόντων: 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Το 2 × 3 × 5 κάνει μόνο 30.',
      en: 'Factor tree: 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5. 2 × 3 × 5 is only 30.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έχει ανάλυση 2 × 3 × 7;', en: 'Which number has the factorization 2 × 3 × 7?' },
    options: { el: ['42', '12', '21', '14'], en: ['42', '12', '21', '14'] },
    correct: 0,
    explanation: {
      el: '2 × 3 = 6 και 6 × 7 = 42. Το 21 είναι μόνο 3 × 7 και το 14 μόνο 2 × 7 — λείπει ένας παράγοντας.',
      en: '2 × 3 = 6 and 6 × 7 = 42. 21 is only 3 × 7 and 14 only 2 × 7 — a factor is missing.',
    },
  },
  {
    q: { el: 'Στο δέντρο παραγόντων του 45, ποιοι πρώτοι αριθμοί βρίσκονται στα «φύλλα» (τις άκρες);', en: 'In the factor tree of 45, which prime numbers are on the “leaves” (the ends)?' },
    options: { el: ['3, 3, 5', '5, 9', '3, 15', '1, 45'], en: ['3, 3, 5', '5, 9', '3, 15', '1, 45'] },
    correct: 0,
    explanation: {
      el: '45 = 5 × 9 και 9 = 3 × 3. Σταματάμε μόνο όταν όλα τα φύλλα είναι πρώτοι: 3, 3, 5. Άρα 45 = 3² × 5.',
      en: '45 = 5 × 9 and 9 = 3 × 3. We only stop when every leaf is prime: 3, 3, 5. So 45 = 3² × 5.',
    },
  },

  // ── 10–12: ΜΚΔ ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο ΜΚΔ (μέγιστος κοινός διαιρέτης) των 12 και 18;', en: 'What is the ΜΚΔ (greatest common divisor) of 12 and 18?' },
    options: { el: ['36', '3', '6', '2'], en: ['36', '3', '6', '2'] },
    correct: 2,
    explanation: {
      el: 'Διαιρέτες του 12: 1, 2, 3, 4, 6, 12. Διαιρέτες του 18: 1, 2, 3, 6, 9, 18. Ο μεγαλύτερος κοινός είναι το 6. (Το 36 είναι το ΕΚΠ!)',
      en: 'Divisors of 12: 1, 2, 3, 4, 6, 12. Divisors of 18: 1, 2, 3, 6, 9, 18. The largest common one is 6. (36 is the ΕΚΠ!)',
    },
  },
  {
    q: { el: 'Ποιος είναι ο ΜΚΔ των 24 και 36;', en: 'What is the ΜΚΔ of 24 and 36?' },
    options: { el: ['6', '12', '72', '4'], en: ['6', '12', '72', '4'] },
    correct: 1,
    explanation: {
      el: '24 = 2³ × 3 και 36 = 2² × 3². Παίρνουμε τους κοινούς πρώτους με τον μικρότερο εκθέτη: 2² × 3 = 12.',
      en: '24 = 2³ × 3 and 36 = 2² × 3². Take the common primes with the smaller exponent: 2² × 3 = 12.',
    },
  },
  {
    q: { el: 'Αν 20 = 2² × 5 και 30 = 2 × 3 × 5, ποιος είναι ο ΜΚΔ(20, 30);', en: 'If 20 = 2² × 5 and 30 = 2 × 3 × 5, what is ΜΚΔ(20, 30)?' },
    options: { el: ['2 × 5 = 10', '2² × 3 × 5 = 60', '2 × 3 = 6', '5'], en: ['2 × 5 = 10', '2² × 3 × 5 = 60', '2 × 3 = 6', '5'] },
    correct: 0,
    explanation: {
      el: 'Κοινοί πρώτοι παράγοντες είναι το 2 (με τον μικρότερο εκθέτη, 2¹) και το 5. ΜΚΔ = 2 × 5 = 10. Το 60 είναι το ΕΚΠ.',
      en: 'The common prime factors are 2 (with the smaller exponent, 2¹) and 5. ΜΚΔ = 2 × 5 = 10. 60 is the ΕΚΠ.',
    },
  },

  // ── 13–16: ΕΚΠ ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το ΕΚΠ (ελάχιστο κοινό πολλαπλάσιο) των 4 και 6;', en: 'What is the ΕΚΠ (least common multiple) of 4 and 6?' },
    options: { el: ['24', '2', '12', '10'], en: ['24', '2', '12', '10'] },
    correct: 2,
    explanation: {
      el: 'Πολλαπλάσια του 4: 4, 8, 12, 16… Πολλαπλάσια του 6: 6, 12, 18… Το πρώτο κοινό είναι το 12. Το 24 είναι κοινό, αλλά όχι το ελάχιστο.',
      en: 'Multiples of 4: 4, 8, 12, 16… Multiples of 6: 6, 12, 18… The first common one is 12. 24 is common too, but not the least.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ΕΚΠ των 6 και 8;', en: 'What is the ΕΚΠ of 6 and 8?' },
    options: { el: ['48', '2', '14', '24'], en: ['48', '2', '14', '24'] },
    correct: 3,
    explanation: {
      el: '6 = 2 × 3 και 8 = 2³. Παίρνουμε κάθε πρώτο με τον μεγαλύτερο εκθέτη: 2³ × 3 = 24. Το 48 = 6 × 8 είναι κοινό πολλαπλάσιο, αλλά όχι το ελάχιστο.',
      en: '6 = 2 × 3 and 8 = 2³. Take each prime with the larger exponent: 2³ × 3 = 24. 48 = 6 × 8 is a common multiple, but not the least.',
    },
  },
  {
    q: { el: 'Αν 9 = 3² και 12 = 2² × 3, ποιο είναι το ΕΚΠ(9, 12);', en: 'If 9 = 3² and 12 = 2² × 3, what is ΕΚΠ(9, 12)?' },
    options: { el: ['3', '2 × 3 = 6', '9 × 12 = 108', '2² × 3² = 36'], en: ['3', '2 × 3 = 6', '9 × 12 = 108', '2² × 3² = 36'] },
    correct: 3,
    explanation: {
      el: 'Για το ΕΚΠ παίρνουμε όλους τους πρώτους (κοινούς και μη) με τον μεγαλύτερο εκθέτη: 2² × 3² = 4 × 9 = 36. Έλεγχος: 36 ÷ 9 = 4 και 36 ÷ 12 = 3.',
      en: 'For the ΕΚΠ we take every prime (common or not) with the larger exponent: 2² × 3² = 4 × 9 = 36. Check: 36 ÷ 9 = 4 and 36 ÷ 12 = 3.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ΕΚΠ των 5 και 7;', en: 'What is the ΕΚΠ of 5 and 7?' },
    options: { el: ['12', '1', '35', '57'], en: ['12', '1', '35', '57'] },
    correct: 2,
    explanation: {
      el: 'Το 5 και το 7 είναι πρώτοι και δεν έχουν κοινό παράγοντα. Τότε το ΕΚΠ είναι απλώς το γινόμενό τους: 5 × 7 = 35.',
      en: '5 and 7 are prime and share no factor. Then the ΕΚΠ is simply their product: 5 × 7 = 35.',
    },
  },

  // ── 17–18: applications ──────────────────────────────────────────────────
  {
    q: { el: 'Θέλουμε να στρώσουμε ένα δάπεδο 60 cm × 84 cm με ίσα τετράγωνα πλακάκια, χωρίς να κόψουμε κανένα. Ποιο είναι το μεγαλύτερο πλακάκι που μπορούμε να χρησιμοποιήσουμε;', en: 'We want to cover a 60 cm × 84 cm floor with equal square tiles, without cutting any. What is the largest tile we can use?' },
    options: { el: ['6 cm', '12 cm', '24 cm', '4 cm'], en: ['6 cm', '12 cm', '24 cm', '4 cm'] },
    correct: 1,
    explanation: {
      el: 'Η πλευρά του πλακακιού πρέπει να διαιρεί και το 60 και το 84 — ζητάμε τον ΜΚΔ. 60 = 2² × 3 × 5, 84 = 2² × 3 × 7, άρα ΜΚΔ = 2² × 3 = 12 cm. (5 πλακάκια × 7 πλακάκια.)',
      en: 'The tile side must divide both 60 and 84 — we need the ΜΚΔ. 60 = 2² × 3 × 5, 84 = 2² × 3 × 7, so ΜΚΔ = 2² × 3 = 12 cm. (5 tiles × 7 tiles.)',
    },
  },
  {
    q: { el: 'Από μια στάση, το λεωφορείο Α περνάει κάθε 12 λεπτά και το λεωφορείο Β κάθε 18 λεπτά. Στις 8:00 πέρασαν μαζί. Πότε θα ξαναπεράσουν μαζί;', en: 'Bus A passes a stop every 12 minutes and bus B every 18 minutes. At 8:00 they passed together. When will they next pass together?' },
    options: { el: ['8:30', '9:00', '8:06', '8:36'], en: ['8:30', '9:00', '8:06', '8:36'] },
    correct: 3,
    explanation: {
      el: 'Ζητάμε το ΕΚΠ(12, 18) = 36 λεπτά: το Α έχει περάσει 3 φορές (12, 24, 36) και το Β 2 φορές (18, 36). Άρα 8:00 + 36 λεπτά = 8:36.',
      en: 'We need ΕΚΠ(12, 18) = 36 minutes: A has passed 3 times (12, 24, 36) and B twice (18, 36). So 8:00 + 36 minutes = 8:36.',
    },
  },
];
