/**
 * Γ' Δημοτικού · Μαθηματικά · Πρόσθεση & Αφαίρεση
 * ================================================
 * Original questions (curriculum structure only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9.
 *
 * What the unit covers, in the order a Γ' class meets it:
 *   1–3   column addition of three-digit numbers: no carry, one carry, two carries
 *   4–6   column subtraction of three-digit numbers: no borrow, one borrow, borrowing across a 0
 *   7–9   four-digit numbers: addition with carries, subtraction from a round thousand
 *   10–12 estimation: rounding to the nearest hundred, estimating a sum and a difference
 *   13–14 checking a result with the opposite operation
 *   15–18 word problems: money, library books, stickers, a two-step shopping problem
 *
 * Distractors are the mistakes children actually make: forgetting the carry,
 * subtracting "the small from the big" digit, a place-value slip, doing the other operation.
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_ADD_SUBTRACT: QuizQuestion[] = [
  // ── 1–3: adding three-digit numbers ───────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 324 + 152;', en: 'What is 324 + 152?' },
    options: { el: ['466', '376', '476', '486'], en: ['466', '376', '476', '486'] },
    correct: 2,
    explanation: {
      el: '324 + 152 = 476. Προσθέτουμε στήλη στήλη: μονάδες 4 + 2 = 6, δεκάδες 2 + 5 = 7, εκατοντάδες 3 + 1 = 4.',
      en: '324 + 152 = 476. Add column by column: ones 4 + 2 = 6, tens 2 + 5 = 7, hundreds 3 + 1 = 4.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 256 + 178;', en: 'What is 256 + 178?' },
    options: { el: ['324', '434', '424', '444'], en: ['324', '434', '424', '444'] },
    correct: 1,
    explanation: {
      el: '256 + 178 = 434. Μονάδες 6 + 8 = 14: γράφουμε 4, κρατάμε 1. Δεκάδες 5 + 7 + 1 = 13: γράφουμε 3, κρατάμε 1. Εκατοντάδες 2 + 1 + 1 = 4.',
      en: '256 + 178 = 434. Ones 6 + 8 = 14: write 4, carry 1. Tens 5 + 7 + 1 = 13: write 3, carry 1. Hundreds 2 + 1 + 1 = 4.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 478 + 365;', en: 'What is 478 + 365?' },
    options: { el: ['843', '733', '833', '853'], en: ['843', '733', '833', '853'] },
    correct: 0,
    explanation: {
      el: '478 + 365 = 843. Μην ξεχνάς το κρατούμενο! 8 + 5 = 13 (κρατάμε 1), 7 + 6 + 1 = 14 (κρατάμε 1), 4 + 3 + 1 = 8.',
      en: '478 + 365 = 843. Do not forget the carry! 8 + 5 = 13 (carry 1), 7 + 6 + 1 = 14 (carry 1), 4 + 3 + 1 = 8.',
    },
  },

  // ── 4–6: subtracting three-digit numbers ──────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 568 − 234;', en: 'What is 568 − 234?' },
    options: { el: ['344', '334', '802', '324'], en: ['344', '334', '802', '324'] },
    correct: 1,
    explanation: {
      el: '568 − 234 = 334. Αφαιρούμε στήλη στήλη: 8 − 4 = 4, 6 − 3 = 3, 5 − 2 = 3. (Το 802 είναι πρόσθεση!)',
      en: '568 − 234 = 334. Subtract column by column: 8 − 4 = 4, 6 − 3 = 3, 5 − 2 = 3. (802 is adding!)',
    },
  },
  {
    q: { el: 'Πόσο κάνει 452 − 127;', en: 'What is 452 − 127?' },
    options: { el: ['335', '325', '315', '579'], en: ['335', '325', '315', '579'] },
    correct: 1,
    explanation: {
      el: '452 − 127 = 325. Το 2 είναι μικρότερο από το 7, άρα δανειζόμαστε μία δεκάδα: 12 − 7 = 5. Μετά 4 − 2 = 2 και 4 − 1 = 3.',
      en: '452 − 127 = 325. 2 is smaller than 7, so we borrow a ten: 12 − 7 = 5. Then 4 − 2 = 2 and 4 − 1 = 3.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 703 − 458;', en: 'What is 703 − 458?' },
    options: { el: ['355', '255', '245', '345'], en: ['355', '255', '245', '345'] },
    correct: 2,
    explanation: {
      el: '703 − 458 = 245. Ο έλεγχος: 245 + 458 = 703, άρα είναι σωστό. Όταν η δεκάδα είναι 0, δανειζόμαστε από την εκατοντάδα.',
      en: '703 − 458 = 245. Check: 245 + 458 = 703, so it is right. When the tens digit is 0, we borrow from the hundreds.',
    },
  },

  // ── 7–9: four-digit numbers ───────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2.345 + 1.432;', en: 'What is 2,345 + 1,432?' },
    options: { el: ['3.767', '3.777', '3.877', '3.677'], en: ['3,767', '3,777', '3,877', '3,677'] },
    correct: 1,
    explanation: {
      el: '2.345 + 1.432 = 3.777. Δεν υπάρχει κρατούμενο: 5 + 2 = 7, 4 + 3 = 7, 3 + 4 = 7, 2 + 1 = 3.',
      en: '2,345 + 1,432 = 3,777. No carry anywhere: 5 + 2 = 7, 4 + 3 = 7, 3 + 4 = 7, 2 + 1 = 3.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3.568 + 2.749;', en: 'What is 3,568 + 2,749?' },
    options: { el: ['5.207', '6.217', '6.317', '6.307'], en: ['5,207', '6,217', '6,317', '6,307'] },
    correct: 2,
    explanation: {
      el: '3.568 + 2.749 = 6.317. Εδώ έχουμε κρατούμενο σε κάθε στήλη: 8 + 9 = 17, 6 + 4 + 1 = 11, 5 + 7 + 1 = 13, 3 + 2 + 1 = 6.',
      en: '3,568 + 2,749 = 6,317. There is a carry in every column: 8 + 9 = 17, 6 + 4 + 1 = 11, 5 + 7 + 1 = 13, 3 + 2 + 1 = 6.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5.000 − 2.364;', en: 'What is 5,000 − 2,364?' },
    options: { el: ['2.636', '3.364', '2.646', '2.736'], en: ['2,636', '3,364', '2,646', '2,736'] },
    correct: 0,
    explanation: {
      el: '5.000 − 2.364 = 2.636. Κόλπο: 5.000 − 2.000 = 3.000 και 3.000 − 364 = 2.636. Έλεγχος: 2.636 + 2.364 = 5.000.',
      en: '5,000 − 2,364 = 2,636. Trick: 5,000 − 2,000 = 3,000 and 3,000 − 364 = 2,636. Check: 2,636 + 2,364 = 5,000.',
    },
  },

  // ── 10–12: estimation ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η πιο κοντινή εκατοντάδα στο 387;', en: 'Which is the nearest hundred to 387?' },
    options: { el: ['300', '400', '390', '380'], en: ['300', '400', '390', '380'] },
    correct: 1,
    explanation: {
      el: 'Το 387 είναι πιο κοντά στο 400 παρά στο 300. Όταν οι δεκάδες είναι 5 ή περισσότερες, πάμε στην επόμενη εκατοντάδα.',
      en: '387 is closer to 400 than to 300. When the tens digit is 5 or more, we go up to the next hundred.',
    },
  },
  {
    q: { el: 'Περίπου πόσο κάνει 498 + 305; Στρογγυλοποίησε πρώτα.', en: 'About how much is 498 + 305? Round first.' },
    options: { el: ['700', '800', '900', '1.000'], en: ['700', '800', '900', '1,000'] },
    correct: 1,
    explanation: {
      el: 'Το 498 είναι σχεδόν 500 και το 305 σχεδόν 300. Άρα 500 + 300 = 800 περίπου. (Το ακριβές είναι 803.)',
      en: '498 is almost 500 and 305 is almost 300. So about 500 + 300 = 800. (The exact answer is 803.)',
    },
  },
  {
    q: { el: 'Περίπου πόσο κάνει 812 − 395;', en: 'About how much is 812 − 395?' },
    options: { el: ['300', '500', '400', '1.200'], en: ['300', '500', '400', '1,200'] },
    correct: 2,
    explanation: {
      el: 'Το 812 είναι περίπου 800 και το 395 περίπου 400. Άρα 800 − 400 = 400 περίπου. Η εκτίμηση μας βοηθά να δούμε αν το αποτέλεσμα είναι λογικό.',
      en: '812 is about 800 and 395 is about 400. So about 800 − 400 = 400. Estimating helps us see if an answer makes sense.',
    },
  },

  // ── 13–14: checking results ───────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος βρήκε 246 + 137 = 383. Ποια πράξη ελέγχει αν είναι σωστό;', en: 'George found 246 + 137 = 383. Which operation checks if it is right?' },
    options: { el: ['383 − 137', '383 + 137', '246 − 137', '246 + 383'], en: ['383 − 137', '383 + 137', '246 − 137', '246 + 383'] },
    correct: 0,
    explanation: {
      el: 'Την πρόσθεση την ελέγχουμε με αφαίρεση: 383 − 137 = 246. Βγήκε ο πρώτος αριθμός, άρα ο Γιώργος έχει δίκιο!',
      en: 'We check addition with subtraction: 383 − 137 = 246. We got the first number back, so George is right!',
    },
  },
  {
    q: { el: 'Η Ελένη έγραψε 600 − 275 = 335. Είναι σωστό;', en: 'Helen wrote 600 − 275 = 335. Is she right?' },
    options: { el: ['Ναι, είναι σωστό', 'Όχι, το σωστό είναι 325', 'Όχι, το σωστό είναι 345', 'Όχι, το σωστό είναι 375'], en: ['Yes, it is right', 'No, the answer is 325', 'No, the answer is 345', 'No, the answer is 375'] },
    correct: 1,
    explanation: {
      el: 'Ελέγχουμε με πρόσθεση: 335 + 275 = 610, όχι 600. Άρα είναι λάθος. Το σωστό είναι 325, γιατί 325 + 275 = 600.',
      en: 'Check with addition: 335 + 275 = 610, not 600. So it is wrong. The right answer is 325, because 325 + 275 = 600.',
    },
  },

  // ── 15–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία έχει 350 € στον κουμπαρά της και αγοράζει ένα ποδήλατο που κοστίζει 185 €. Πόσα χρήματα της μένουν;', en: 'Maria has €350 in her piggy bank and buys a bicycle that costs €185. How much money does she have left?' },
    options: { el: ['175 €', '235 €', '165 €', '535 €'], en: ['€175', '€235', '€165', '€535'] },
    correct: 2,
    explanation: {
      el: '350 − 185 = 165 €. Της μένουν 165 ευρώ. Έλεγχος: 165 + 185 = 350.',
      en: '350 − 185 = €165. She has 165 euros left. Check: 165 + 185 = 350.',
    },
  },
  {
    q: { el: 'Η βιβλιοθήκη του σχολείου έχει 1.250 βιβλία. Έφτασαν άλλα 375. Πόσα βιβλία έχει τώρα;', en: 'The school library has 1,250 books. Another 375 arrived. How many books does it have now?' },
    options: { el: ['1.525', '1.625', '1.615', '875'], en: ['1,525', '1,625', '1,615', '875'] },
    correct: 1,
    explanation: {
      el: '«Έφτασαν άλλα» σημαίνει πρόσθεση: 1.250 + 375 = 1.625 βιβλία.',
      en: '“Another … arrived” means we add: 1,250 + 375 = 1,625 books.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 2.140 αυτοκόλλητα. Χαρίζει 865 στον ξάδερφό του. Πόσα του μένουν;', en: 'Nick has 2,140 stickers. He gives 865 to his cousin. How many does he have left?' },
    options: { el: ['1.285', '2.725', '1.275', '1.375'], en: ['1,285', '2,725', '1,275', '1,375'] },
    correct: 2,
    explanation: {
      el: '2.140 − 865 = 1.275 αυτοκόλλητα. Προσοχή στα δανεικά: αφαιρούμε πάντα το κάτω ψηφίο από το πάνω, όχι το μικρό από το μεγάλο.',
      en: '2,140 − 865 = 1,275 stickers. Careful with borrowing: always take the bottom digit from the top one, not the small from the big.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 500 €. Αγοράζει μια σχολική τσάντα 145 € και παπούτσια 230 €. Πόσα χρήματα της μένουν;', en: 'Helen has €500. She buys a school bag for €145 and shoes for €230. How much money does she have left?' },
    options: { el: ['355 €', '125 €', '375 €', '270 €'], en: ['€355', '€125', '€375', '€270'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα πόσα ξόδεψε: 145 + 230 = 375 €. Μετά τι της μένει: 500 − 375 = 125 €.',
      en: 'First how much she spent: 145 + 230 = €375. Then what is left: 500 − 375 = €125.',
    },
  },
];
