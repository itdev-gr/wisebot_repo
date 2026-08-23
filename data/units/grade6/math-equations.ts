/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Εξισώσεις
 * ======================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–2   what a variable / an unknown is, what makes an equation
 *   3–5   the unknown is an addend (x + 7 = 15), with a word problem
 *   6–8   the unknown is the minuend or subtrahend (x − 9 = 14, 40 − x = 16)
 *   9–11  the unknown is a factor (6 × x = 54), with a word problem
 *   12–14 the unknown is the dividend or the divisor (x ÷ 5 = 8, 72 ÷ x = 9)
 *   15–18 checking a solution by substitution, and a two-step problem
 *
 * Distractors are the mistakes children actually make: doing the same operation
 * instead of the inverse (x + 7 = 15 → 22), off-by-one, neighbouring table.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_EQUATIONS: QuizQuestion[] = [
  // ── 1–2: variables and equations ───────────────────────────────────────────
  {
    q: { el: 'Στην εξίσωση x + 4 = 9, το γράμμα x λέγεται…', en: 'In the equation x + 4 = 9, the letter x is called…' },
    options: { el: ['άγνωστος', 'αποτέλεσμα', 'πρόσημο', 'υπόλοιπο'], en: ['the unknown', 'the result', 'the sign', 'the remainder'] },
    correct: 0,
    explanation: {
      el: 'Το x είναι ο άγνωστος: ένας αριθμός που δεν ξέρουμε ακόμα και θέλουμε να βρούμε. Εδώ x = 5.',
      en: 'x is the unknown: a number we do not know yet and want to find. Here x = 5.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω είναι εξίσωση;', en: 'Which of these is an equation?' },
    options: { el: ['x + 5', 'x + 5 = 12', '7 + 5', '12 > 5'], en: ['x + 5', 'x + 5 = 12', '7 + 5', '12 > 5'] },
    correct: 1,
    explanation: {
      el: 'Εξίσωση είναι μια ισότητα που έχει άγνωστο. Το x + 5 = 12 έχει και «=» και x — άρα είναι εξίσωση.',
      en: 'An equation is an equality with an unknown. x + 5 = 12 has both an “=” and an x — so it is an equation.',
    },
  },

  // ── 3–5: unknown addend ───────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης x + 7 = 15;', en: 'What is the solution of the equation x + 7 = 15?' },
    options: { el: ['x = 22', 'x = 9', 'x = 8', 'x = 7'], en: ['x = 22', 'x = 9', 'x = 8', 'x = 7'] },
    correct: 2,
    explanation: {
      el: 'Για να βρούμε τον άγνωστο προσθετέο, αφαιρούμε: x = 15 − 7 = 8. Έλεγχος: 8 + 7 = 15.',
      en: 'To find the unknown addend, we subtract: x = 15 − 7 = 8. Check: 8 + 7 = 15.',
    },
  },
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης 25 + x = 60;', en: 'What is the solution of the equation 25 + x = 60?' },
    options: { el: ['x = 85', 'x = 35', 'x = 45', 'x = 30'], en: ['x = 85', 'x = 35', 'x = 45', 'x = 30'] },
    correct: 1,
    explanation: {
      el: 'x = 60 − 25 = 35. Όταν ο άγνωστος είναι προσθετέος, κάνουμε την αντίστροφη πράξη: αφαίρεση.',
      en: 'x = 60 − 25 = 35. When the unknown is an addend, we do the inverse operation: subtraction.',
    },
  },
  {
    q: { el: 'Η Ελένη είχε μερικά αυτοκόλλητα. Της έδωσαν άλλα 12 και τώρα έχει 30. Πόσα είχε στην αρχή;', en: 'Eleni had some stickers. She was given 12 more and now has 30. How many did she have at first?' },
    options: { el: ['42', '22', '16', '18'], en: ['42', '22', '16', '18'] },
    correct: 3,
    explanation: {
      el: 'Γράφουμε x + 12 = 30, άρα x = 30 − 12 = 18. Έλεγχος: 18 + 12 = 30.',
      en: 'We write x + 12 = 30, so x = 30 − 12 = 18. Check: 18 + 12 = 30.',
    },
  },

  // ── 6–8: unknown minuend / subtrahend ─────────────────────────────────────
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης x − 9 = 14;', en: 'What is the solution of the equation x − 9 = 14?' },
    options: { el: ['x = 23', 'x = 5', 'x = 22', 'x = 24'], en: ['x = 23', 'x = 5', 'x = 22', 'x = 24'] },
    correct: 0,
    explanation: {
      el: 'Όταν λείπει ο μειωτέος, προσθέτουμε: x = 14 + 9 = 23. Έλεγχος: 23 − 9 = 14.',
      en: 'When the minuend is missing, we add: x = 14 + 9 = 23. Check: 23 − 9 = 14.',
    },
  },
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης 40 − x = 16;', en: 'What is the solution of the equation 40 − x = 16?' },
    options: { el: ['x = 56', 'x = 26', 'x = 24', 'x = 14'], en: ['x = 56', 'x = 26', 'x = 24', 'x = 14'] },
    correct: 2,
    explanation: {
      el: 'Όταν λείπει ο αφαιρετέος, αφαιρούμε: x = 40 − 16 = 24. Έλεγχος: 40 − 24 = 16.',
      en: 'When the subtrahend is missing, we subtract: x = 40 − 16 = 24. Check: 40 − 24 = 16.',
    },
  },
  {
    q: { el: 'Ο Νίκος είχε 50 €. Αγόρασε ένα βιβλίο και του έμειναν 37 €. Πόσο κόστισε το βιβλίο;', en: 'Nikos had €50. He bought a book and had €37 left. How much did the book cost?' },
    options: { el: ['87 €', '13 €', '17 €', '23 €'], en: ['€87', '€13', '€17', '€23'] },
    correct: 1,
    explanation: {
      el: 'Γράφουμε 50 − x = 37, άρα x = 50 − 37 = 13 €. Έλεγχος: 50 − 13 = 37.',
      en: 'We write 50 − x = 37, so x = 50 − 37 = €13. Check: 50 − 13 = 37.',
    },
  },

  // ── 9–11: unknown factor ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης 6 × x = 54;', en: 'What is the solution of the equation 6 × x = 54?' },
    options: { el: ['x = 48', 'x = 8', 'x = 7', 'x = 9'], en: ['x = 48', 'x = 8', 'x = 7', 'x = 9'] },
    correct: 3,
    explanation: {
      el: 'Όταν ο άγνωστος είναι παράγοντας, διαιρούμε: x = 54 ÷ 6 = 9. Έλεγχος: 6 × 9 = 54.',
      en: 'When the unknown is a factor, we divide: x = 54 ÷ 6 = 9. Check: 6 × 9 = 54.',
    },
  },
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης x × 7 = 84;', en: 'What is the solution of the equation x × 7 = 84?' },
    options: { el: ['x = 12', 'x = 77', 'x = 11', 'x = 13'], en: ['x = 12', 'x = 77', 'x = 11', 'x = 13'] },
    correct: 0,
    explanation: {
      el: 'x = 84 ÷ 7 = 12. Έλεγχος: 12 × 7 = 84. Η αντίστροφη πράξη του πολλαπλασιασμού είναι η διαίρεση.',
      en: 'x = 84 ÷ 7 = 12. Check: 12 × 7 = 84. The inverse of multiplication is division.',
    },
  },
  {
    q: { el: 'Σε 8 κουτιά υπάρχει ο ίδιος αριθμός μολυβιών. Όλα μαζί είναι 96 μολύβια. Πόσα μολύβια έχει κάθε κουτί;', en: 'There are 8 boxes with the same number of pencils in each. Altogether there are 96 pencils. How many pencils are in each box?' },
    options: { el: ['88', '13', '12', '104'], en: ['88', '13', '12', '104'] },
    correct: 2,
    explanation: {
      el: 'Γράφουμε 8 × x = 96, άρα x = 96 ÷ 8 = 12. Έλεγχος: 8 × 12 = 96.',
      en: 'We write 8 × x = 96, so x = 96 ÷ 8 = 12. Check: 8 × 12 = 96.',
    },
  },

  // ── 12–14: unknown dividend / divisor ─────────────────────────────────────
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης x ÷ 5 = 8;', en: 'What is the solution of the equation x ÷ 5 = 8?' },
    options: { el: ['x = 13', 'x = 3', 'x = 45', 'x = 40'], en: ['x = 13', 'x = 3', 'x = 45', 'x = 40'] },
    correct: 3,
    explanation: {
      el: 'Όταν λείπει ο διαιρετέος, πολλαπλασιάζουμε: x = 8 × 5 = 40. Έλεγχος: 40 ÷ 5 = 8.',
      en: 'When the dividend is missing, we multiply: x = 8 × 5 = 40. Check: 40 ÷ 5 = 8.',
    },
  },
  {
    q: { el: 'Ποια είναι η λύση της εξίσωσης 72 ÷ x = 9;', en: 'What is the solution of the equation 72 ÷ x = 9?' },
    options: { el: ['x = 63', 'x = 8', 'x = 7', 'x = 81'], en: ['x = 63', 'x = 8', 'x = 7', 'x = 81'] },
    correct: 1,
    explanation: {
      el: 'Όταν λείπει ο διαιρέτης, διαιρούμε: x = 72 ÷ 9 = 8. Έλεγχος: 72 ÷ 8 = 9.',
      en: 'When the divisor is missing, we divide: x = 72 ÷ 9 = 8. Check: 72 ÷ 8 = 9.',
    },
  },
  {
    q: { el: 'Η Μαρία μοίρασε 45 καραμέλες εξίσου στους φίλους της και ο καθένας πήρε 9. Σε πόσους φίλους τις μοίρασε;', en: 'Maria shared 45 sweets equally among her friends and each one got 9. How many friends did she share them with?' },
    options: { el: ['5', '36', '4', '54'], en: ['5', '36', '4', '54'] },
    correct: 0,
    explanation: {
      el: 'Γράφουμε 45 ÷ x = 9, άρα x = 45 ÷ 9 = 5 φίλοι. Έλεγχος: 45 ÷ 5 = 9.',
      en: 'We write 45 ÷ x = 9, so x = 45 ÷ 9 = 5 friends. Check: 45 ÷ 5 = 9.',
    },
  },

  // ── 15–18: checking solutions ─────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος λέει ότι η λύση της εξίσωσης x − 15 = 27 είναι x = 12. Έχει δίκιο;', en: 'Giorgos says the solution of the equation x − 15 = 27 is x = 12. Is he right?' },
    options: { el: ['Ναι, 27 − 15 = 12', 'Όχι, η λύση είναι x = 32', 'Όχι, η λύση είναι x = 42', 'Όχι, η λύση είναι x = 13'], en: ['Yes, 27 − 15 = 12', 'No, the solution is x = 32', 'No, the solution is x = 42', 'No, the solution is x = 13'] },
    correct: 2,
    explanation: {
      el: 'Ελέγχουμε: 12 − 15 δεν κάνει 27. Η σωστή λύση είναι x = 27 + 15 = 42, γιατί 42 − 15 = 27.',
      en: 'Check: 12 − 15 is not 27. The correct solution is x = 27 + 15 = 42, because 42 − 15 = 27.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός επαληθεύει την εξίσωση 3 × x = 45;', en: 'Which number makes the equation 3 × x = 45 true?' },
    options: { el: ['42', '15', '14', '135'], en: ['42', '15', '14', '135'] },
    correct: 1,
    explanation: {
      el: 'Βάζουμε το 15 στη θέση του x: 3 × 15 = 45. Σωστό! Ένας αριθμός επαληθεύει την εξίσωση όταν η ισότητα βγαίνει αληθινή.',
      en: 'Put 15 in place of x: 3 × 15 = 45. Correct! A number verifies the equation when the equality comes out true.',
    },
  },
  {
    q: { el: 'Πώς ελέγχουμε αν το x = 7 είναι λύση της εξίσωσης x + 8 = 15;', en: 'How do we check if x = 7 is a solution of the equation x + 8 = 15?' },
    options: { el: ['Αφαιρούμε 7 − 8', 'Πολλαπλασιάζουμε 7 × 8', 'Προσθέτουμε 8 + 15', 'Βάζουμε 7 στη θέση του x και βλέπουμε αν 7 + 8 = 15'], en: ['We subtract 7 − 8', 'We multiply 7 × 8', 'We add 8 + 15', 'We put 7 in place of x and see if 7 + 8 = 15'] },
    correct: 3,
    explanation: {
      el: 'Επαλήθευση σημαίνει: βάζουμε τη λύση στη θέση του άγνωστου. 7 + 8 = 15, άρα το x = 7 είναι σωστό.',
      en: 'Checking means: we put the solution in place of the unknown. 7 + 8 = 15, so x = 7 is correct.',
    },
  },
  {
    q: { el: 'Η Ελένη αγόρασε 4 ίδια τετράδια και ένα στυλό που κόστιζε 2 €. Πλήρωσε συνολικά 14 €. Πόσο κοστίζει κάθε τετράδιο;', en: 'Eleni bought 4 identical notebooks and a pen that cost €2. She paid €14 in total. How much does each notebook cost?' },
    options: { el: ['3 €', '4 €', '3,50 €', '12 €'], en: ['€3', '€4', '€3.50', '€12'] },
    correct: 0,
    explanation: {
      el: 'Γράφουμε 4 × x + 2 = 14. Πρώτα βγάζουμε το στυλό: 14 − 2 = 12. Μετά x = 12 ÷ 4 = 3 €. Έλεγχος: 4 × 3 + 2 = 14.',
      en: 'We write 4 × x + 2 = 14. First take off the pen: 14 − 2 = 12. Then x = 12 ÷ 4 = €3. Check: 4 × 3 + 2 = 14.',
    },
  },
];
