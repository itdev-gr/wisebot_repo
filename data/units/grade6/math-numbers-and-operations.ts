/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Αριθμοί και πράξεις
 * ==================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–4   operations with natural and decimal numbers (adding, multiplying, dividing decimals)
 *   5–6   order of operations: × and ÷ before + and −, brackets first
 *   7–8   rounding natural numbers and decimals
 *   9–10  prime numbers and prime factorisation
 *   11–12 GCD and LCM, with a word problem
 *   13–16 powers and powers of 10 (×100 of a decimal)
 *   17–18 mixed word problems: money with decimals, LCM in real life
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_NUMBERS_AND_OPERATIONS: QuizQuestion[] = [
  // ── 1–4: natural and decimal operations ────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 4.826 + 1.375;', en: 'What is 4,826 + 1,375?' },
    options: { el: ['6.191', '6.201', '5.201', '6.211'], en: ['6,191', '6,201', '5,201', '6,211'] },
    correct: 1,
    explanation: {
      el: '4.826 + 1.375 = 6.201. Πρόσεξε τα κρατούμενα: 6 + 5 = 11, γράφουμε 1 και κρατάμε 1.',
      en: '4,826 + 1,375 = 6,201. Watch the carries: 6 + 5 = 11, write 1 and carry 1.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3,6 + 2,75;', en: 'What is 3.6 + 2.75?' },
    options: { el: ['6,35', '5,81', '6,25', '5,35'], en: ['6.35', '5.81', '6.25', '5.35'] },
    correct: 0,
    explanation: {
      el: 'Βάζουμε υποδιαστολή κάτω από υποδιαστολή: 3,60 + 2,75 = 6,35.',
      en: 'Line up the decimal points: 3.60 + 2.75 = 6.35.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 0,6 × 0,5;', en: 'What is 0.6 × 0.5?' },
    options: { el: ['3', '0,03', '0,3', '1,1'], en: ['3', '0.03', '0.3', '1.1'] },
    correct: 2,
    explanation: {
      el: '6 × 5 = 30. Οι δύο αριθμοί έχουν συνολικά 2 δεκαδικά ψηφία, άρα 0,30 = 0,3.',
      en: '6 × 5 = 30. The two numbers have 2 decimal places in total, so 0.30 = 0.3.',
    },
  },
  {
    q: { el: 'Η Μαρία μοιράζει 7,2 λίτρα χυμό σε 8 ίσα μπουκάλια. Πόσο χυμό έχει κάθε μπουκάλι;', en: 'Maria shares 7.2 litres of juice equally into 8 bottles. How much juice is in each bottle?' },
    options: { el: ['9 λίτρα', '0,09 λίτρα', '0,8 λίτρα', '0,9 λίτρα'], en: ['9 litres', '0.09 litres', '0.8 litres', '0.9 litres'] },
    correct: 3,
    explanation: {
      el: '7,2 ÷ 8 = 0,9. Έλεγχος: 8 × 0,9 = 7,2.',
      en: '7.2 ÷ 8 = 0.9. Check: 8 × 0.9 = 7.2.',
    },
  },

  // ── 5–6: order of operations ──────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 5 + 3 × 4;', en: 'What is 5 + 3 × 4?' },
    options: { el: ['32', '17', '12', '27'], en: ['32', '17', '12', '27'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα ο πολλαπλασιασμός: 3 × 4 = 12. Μετά η πρόσθεση: 5 + 12 = 17.',
      en: 'Multiply first: 3 × 4 = 12. Then add: 5 + 12 = 17.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 20 − (2 + 3) × 2;', en: 'What is 20 − (2 + 3) × 2?' },
    options: { el: ['30', '24', '15', '10'], en: ['30', '24', '15', '10'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα η παρένθεση: 2 + 3 = 5. Μετά ο πολλαπλασιασμός: 5 × 2 = 10. Τέλος: 20 − 10 = 10.',
      en: 'Brackets first: 2 + 3 = 5. Then multiply: 5 × 2 = 10. Finally: 20 − 10 = 10.',
    },
  },

  // ── 7–8: rounding ─────────────────────────────────────────────────────────
  {
    q: { el: 'Στον αγώνα ήρθαν 4.768 θεατές. Πόσοι είναι περίπου, αν στρογγυλοποιήσουμε στην εκατοντάδα;', en: '4,768 people came to the match. About how many is that, rounded to the nearest hundred?' },
    options: { el: ['4.700', '4.800', '4.770', '5.000'], en: ['4,700', '4,800', '4,770', '5,000'] },
    correct: 1,
    explanation: {
      el: 'Κοιτάμε τις δεκάδες: 6. Είναι 5 ή παραπάνω, άρα ανεβαίνουμε: 4.768 ≈ 4.800.',
      en: 'Look at the tens digit: 6. It is 5 or more, so we round up: 4,768 ≈ 4,800.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 3,456 στο ένα δεκαδικό ψηφίο.', en: 'Round 3.456 to one decimal place.' },
    options: { el: ['3,4', '3,46', '3', '3,5'], en: ['3.4', '3.46', '3', '3.5'] },
    correct: 3,
    explanation: {
      el: 'Κρατάμε ένα δεκαδικό (το 4) και κοιτάμε το επόμενο ψηφίο: 5. Άρα ανεβαίνουμε: 3,456 ≈ 3,5.',
      en: 'Keep one decimal (the 4) and look at the next digit: 5. So we round up: 3.456 ≈ 3.5.',
    },
  },

  // ── 9–10: prime numbers and factorisation ─────────────────────────────────
  {
    q: { el: 'Ποιος από τους παρακάτω αριθμούς είναι πρώτος;', en: 'Which of these numbers is a prime number?' },
    options: { el: ['15', '21', '17', '27'], en: ['15', '21', '17', '27'] },
    correct: 2,
    explanation: {
      el: 'Πρώτος είναι ο αριθμός που διαιρείται μόνο με το 1 και τον εαυτό του. Το 17 είναι πρώτος· 15 = 3 × 5, 21 = 3 × 7, 27 = 3 × 9.',
      en: 'A prime number can only be divided by 1 and itself. 17 is prime; 15 = 3 × 5, 21 = 3 × 7, 27 = 3 × 9.',
    },
  },
  {
    q: { el: 'Ποια είναι η ανάλυση του 36 σε γινόμενο πρώτων παραγόντων;', en: 'What is the prime factorisation of 36?' },
    options: { el: ['2² × 3²', '2 × 3²', '2³ × 3', '4 × 9'], en: ['2² × 3²', '2 × 3²', '2³ × 3', '4 × 9'] },
    correct: 0,
    explanation: {
      el: '36 = 2 × 18 = 2 × 2 × 9 = 2 × 2 × 3 × 3 = 2² × 3². Το 4 × 9 κάνει 36, αλλά το 4 και το 9 δεν είναι πρώτοι.',
      en: '36 = 2 × 18 = 2 × 2 × 9 = 2 × 2 × 3 × 3 = 2² × 3². 4 × 9 equals 36, but 4 and 9 are not prime.',
    },
  },

  // ── 11–12: GCD and LCM ────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος έχει 24 κόκκινες και 36 μπλε χάντρες. Θέλει να φτιάξει ίδια βραχιόλια χωρίς να περισσέψει καμία χάντρα. Πόσα βραχιόλια το πολύ μπορεί να φτιάξει;', en: 'Nikos has 24 red and 36 blue beads. He wants to make identical bracelets with no beads left over. What is the largest number of bracelets he can make?' },
    options: { el: ['6', '12', '4', '72'], en: ['6', '12', '4', '72'] },
    correct: 1,
    explanation: {
      el: 'Ζητάμε τον ΜΚΔ(24, 36) = 12. Κάθε βραχιόλι θα έχει 2 κόκκινες και 3 μπλε χάντρες.',
      en: 'We need GCD(24, 36) = 12. Each bracelet will have 2 red and 3 blue beads.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ΕΚΠ (ελάχιστο κοινό πολλαπλάσιο) των αριθμών 6 και 8;', en: 'What is the LCM (least common multiple) of 6 and 8?' },
    options: { el: ['48', '2', '24', '14'], en: ['48', '2', '24', '14'] },
    correct: 2,
    explanation: {
      el: 'Πολλαπλάσια του 6: 6, 12, 18, 24… Πολλαπλάσια του 8: 8, 16, 24… Το πρώτο κοινό είναι το 24.',
      en: 'Multiples of 6: 6, 12, 18, 24… Multiples of 8: 8, 16, 24… The first one they share is 24.',
    },
  },

  // ── 13–16: powers and powers of 10 ────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 3⁴;', en: 'What is 3⁴?' },
    options: { el: ['12', '81', '64', '27'], en: ['12', '81', '64', '27'] },
    correct: 1,
    explanation: {
      el: '3⁴ = 3 × 3 × 3 × 3 = 81. Δεν είναι 3 × 4 — ο εκθέτης λέει πόσες φορές πολλαπλασιάζουμε το 3.',
      en: '3⁴ = 3 × 3 × 3 × 3 = 81. It is not 3 × 4 — the exponent says how many times we multiply 3.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 2⁵;', en: 'What is 2⁵?' },
    options: { el: ['10', '25', '16', '32'], en: ['10', '25', '16', '32'] },
    correct: 3,
    explanation: {
      el: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Διπλασιάζουμε πέντε φορές: 2, 4, 8, 16, 32.',
      en: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Double five times: 2, 4, 8, 16, 32.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 10⁴;', en: 'What is 10⁴?' },
    options: { el: ['40', '1.000', '10.000', '100.000'], en: ['40', '1,000', '10,000', '100,000'] },
    correct: 2,
    explanation: {
      el: '10⁴ = 10 × 10 × 10 × 10 = 10.000. Ο εκθέτης δείχνει πόσα μηδενικά έχει ο αριθμός: τέσσερα.',
      en: '10⁴ = 10 × 10 × 10 × 10 = 10,000. The exponent tells you how many zeros: four.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3,7 × 100;', en: 'What is 3.7 × 100?' },
    options: { el: ['37', '370', '3.700', '0,037'], en: ['37', '370', '3,700', '0.037'] },
    correct: 1,
    explanation: {
      el: 'Όταν πολλαπλασιάζουμε με το 100, η υποδιαστολή πάει 2 θέσεις δεξιά: 3,7 → 370.',
      en: 'When we multiply by 100, the decimal point moves 2 places to the right: 3.7 → 370.',
    },
  },

  // ── 17–18: mixed word problems ────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη αγοράζει 3 τετράδια που κοστίζουν 1,20 € το καθένα και δίνει 5 €. Πόσα ρέστα θα πάρει;', en: 'Eleni buys 3 notebooks that cost €1.20 each and pays with €5. How much change will she get?' },
    options: { el: ['1,40 €', '1,60 €', '3,60 €', '2,40 €'], en: ['€1.40', '€1.60', '€3.60', '€2.40'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα το κόστος: 3 × 1,20 = 3,60 €. Μετά τα ρέστα: 5 − 3,60 = 1,40 €.',
      en: 'First the cost: 3 × €1.20 = €3.60. Then the change: €5 − €3.60 = €1.40.',
    },
  },
  {
    q: { el: 'Από μια στάση φεύγει ένα λεωφορείο κάθε 12 λεπτά και ένα άλλο κάθε 18 λεπτά. Στις 8:00 φεύγουν μαζί. Μετά από πόσα λεπτά θα ξαναφύγουν μαζί;', en: 'From one bus stop, a bus leaves every 12 minutes and another every 18 minutes. At 8:00 they leave together. After how many minutes will they leave together again?' },
    options: { el: ['30 λεπτά', '6 λεπτά', '36 λεπτά', '216 λεπτά'], en: ['30 minutes', '6 minutes', '36 minutes', '216 minutes'] },
    correct: 2,
    explanation: {
      el: 'Ζητάμε το ΕΚΠ(12, 18) = 36. Το πρώτο λεωφορείο φεύγει στα 12, 24, 36· το δεύτερο στα 18, 36. Ξανασυναντιούνται στα 36 λεπτά.',
      en: 'We need LCM(12, 18) = 36. The first bus leaves at 12, 24, 36; the second at 18, 36. They meet again at 36 minutes.',
    },
  },
];
