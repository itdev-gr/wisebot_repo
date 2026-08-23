/**
 * Ε' Δημοτικού · Μαθηματικά · Φυσικοί αριθμοί
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, as an Ε' class meets the topics:
 *   1–3   large numbers: reading and writing them, place value (αξία θέσης)
 *   4–5   comparing and ordering numbers up to hundreds of thousands
 *   6–7   rounding to the nearest hundred and thousand
 *   8–13  the four operations with large numbers, plus word problems (€, eggs, books)
 *   14–18 multiples, divisors, divisibility by 2, 5 and 10 — ending with a word problem
 * Distractors are real child slips: forgotten carry, place-value mix-ups, neighbouring
 * multiple, adding instead of multiplying. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_NATURAL_NUMBERS: QuizQuestion[] = [
  // ── 1–3: large numbers and place value ─────────────────────────────────────
  {
    q: { el: 'Πώς γράφεται με ψηφία ο αριθμός «τριάντα πέντε χιλιάδες διακόσια οκτώ»;', en: 'How do we write the number “thirty-five thousand two hundred eight” in digits?' },
    options: { el: ['35.208', '35.280', '3.528', '350.208'], en: ['35,208', '35,280', '3,528', '350,208'] },
    correct: 0,
    explanation: {
      el: 'Τριάντα πέντε χιλιάδες = 35.000 και διακόσια οκτώ = 208. Μαζί: 35.208. Οι δεκάδες είναι 0, γι\' αυτό γράφουμε 208 και όχι 280.',
      en: 'Thirty-five thousand = 35,000 and two hundred eight = 208. Together: 35,208. There are 0 tens, so we write 208, not 280.',
    },
  },
  {
    q: { el: 'Στον αριθμό 47.316, ποια είναι η αξία του ψηφίου 7;', en: 'In the number 47,316, what is the value of the digit 7?' },
    options: { el: ['7', '70', '700', '7.000'], en: ['7', '70', '700', '7,000'] },
    correct: 3,
    explanation: {
      el: 'Το 7 βρίσκεται στη θέση των χιλιάδων, άρα αξίζει 7 χιλιάδες = 7.000. Η θέση δίνει την αξία!',
      en: 'The 7 is in the thousands place, so it is worth 7 thousands = 7,000. The place gives the value!',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έχει 3 εκατοντάδες χιλιάδες, 5 χιλιάδες και 2 δεκάδες;', en: 'Which number has 3 hundred thousands, 5 thousands and 2 tens?' },
    options: { el: ['35.020', '305.200', '305.020', '350.020'], en: ['35,020', '305,200', '305,020', '350,020'] },
    correct: 2,
    explanation: {
      el: '300.000 + 5.000 + 20 = 305.020. Στις θέσεις που λείπουν (δεκάδες χιλιάδες, εκατοντάδες, μονάδες) βάζουμε 0.',
      en: '300,000 + 5,000 + 20 = 305,020. In the empty places (ten thousands, hundreds, ones) we write 0.',
    },
  },

  // ── 4–5: comparing and ordering ────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι ο μεγαλύτερος;', en: 'Which number is the largest?' },
    options: { el: ['98.756', '102.340', '99.999', '100.099'], en: ['98,756', '102,340', '99,999', '100,099'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα μετράμε τα ψηφία: το 102.340 και το 100.099 έχουν έξι, τα άλλα πέντε. Μετά συγκρίνουμε από αριστερά: 102.340 > 100.099.',
      en: 'First count the digits: 102,340 and 100,099 have six, the others five. Then compare from the left: 102,340 > 100,099.',
    },
  },
  {
    q: { el: 'Ποια σειρά είναι από τον μικρότερο στον μεγαλύτερο αριθμό;', en: 'Which list goes from the smallest to the largest number?' },
    options: { el: ['4.503, 4.350, 4.530, 5.034', '5.034, 4.530, 4.503, 4.350', '4.350, 4.530, 4.503, 5.034', '4.350, 4.503, 4.530, 5.034'], en: ['4,503, 4,350, 4,530, 5,034', '5,034, 4,530, 4,503, 4,350', '4,350, 4,530, 4,503, 5,034', '4,350, 4,503, 4,530, 5,034'] },
    correct: 3,
    explanation: {
      el: 'Όλοι έχουν 4 ψηφία, άρα κοιτάμε τις εκατοντάδες: 350 < 503 < 530, και το 5.034 είναι τελευταίο γιατί αρχίζει από 5.',
      en: 'All have 4 digits, so we look at the hundreds: 350 < 503 < 530, and 5,034 comes last because it starts with 5.',
    },
  },

  // ── 6–7: rounding ──────────────────────────────────────────────────────────
  {
    q: { el: 'Στρογγυλοποίησε το 6.482 στην πλησιέστερη εκατοντάδα.', en: 'Round 6,482 to the nearest hundred.' },
    options: { el: ['6.400', '6.500', '6.480', '7.000'], en: ['6,400', '6,500', '6,480', '7,000'] },
    correct: 1,
    explanation: {
      el: 'Το 6.482 είναι ανάμεσα στο 6.400 και στο 6.500. Κοιτάμε τις δεκάδες: 8 ≥ 5, άρα ανεβαίνουμε στο 6.500.',
      en: '6,482 is between 6,400 and 6,500. Look at the tens: 8 ≥ 5, so we round up to 6,500.',
    },
  },
  {
    q: { el: 'Μια πόλη έχει 23.650 κατοίκους. Περίπου πόσους έχει, στρογγυλοποιημένους στην πλησιέστερη χιλιάδα;', en: 'A town has 23,650 people. About how many is that, rounded to the nearest thousand?' },
    options: { el: ['23.000', '23.700', '24.000', '20.000'], en: ['23,000', '23,700', '24,000', '20,000'] },
    correct: 2,
    explanation: {
      el: 'Για τη χιλιάδα κοιτάμε τις εκατοντάδες: 6 ≥ 5, άρα το 23.650 στρογγυλοποιείται στο 24.000.',
      en: 'For thousands we look at the hundreds: 6 ≥ 5, so 23,650 rounds to 24,000.',
    },
  },

  // ── 8–13: the four operations ──────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 4.568 + 2.739;', en: 'What is 4,568 + 2,739?' },
    options: { el: ['7.307', '7.297', '6.307', '7.397'], en: ['7,307', '7,297', '6,307', '7,397'] },
    correct: 0,
    explanation: {
      el: '4.568 + 2.739 = 7.307. Προσοχή στα κρατούμενα: 8 + 9 = 17, γράφουμε 7 και κρατάμε 1.',
      en: '4,568 + 2,739 = 7,307. Mind the carries: 8 + 9 = 17, write 7 and carry 1.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 8.003 − 2.456;', en: 'What is 8,003 − 2,456?' },
    options: { el: ['6.453', '5.557', '5.547', '5.647'], en: ['6,453', '5,557', '5,547', '5,647'] },
    correct: 2,
    explanation: {
      el: '8.003 − 2.456 = 5.547. Έλεγχος: 5.547 + 2.456 = 8.003. Όταν η αφαίρεση έχει μηδενικά, δανειζόμαστε προσεκτικά.',
      en: '8,003 − 2,456 = 5,547. Check: 5,547 + 2,456 = 8,003. When there are zeros, borrow carefully.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 245 × 12;', en: 'What is 245 × 12?' },
    options: { el: ['2.450', '2.940', '2.490', '3.040'], en: ['2,450', '2,940', '2,490', '3,040'] },
    correct: 1,
    explanation: {
      el: '245 × 12 = 245 × 10 + 245 × 2 = 2.450 + 490 = 2.940.',
      en: '245 × 12 = 245 × 10 + 245 × 2 = 2,450 + 490 = 2,940.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 1.512 ÷ 6;', en: 'What is 1,512 ÷ 6?' },
    options: { el: ['242', '262', '25', '252'], en: ['242', '262', '25', '252'] },
    correct: 3,
    explanation: {
      el: '1.512 ÷ 6 = 252. Έλεγχος: 252 × 6 = 1.512. Η διαίρεση ελέγχεται πάντα με πολλαπλασιασμό.',
      en: '1,512 ÷ 6 = 252. Check: 252 × 6 = 1,512. You can always check a division by multiplying.',
    },
  },
  {
    q: { el: 'Ο Νίκος αγόρασε 3 βιβλία από 12 € το καθένα και ένα τετράδιο 4 €. Πόσα χρήματα έδωσε;', en: 'Nikos bought 3 books at €12 each and a notebook for €4. How much did he pay?' },
    options: { el: ['40 €', '36 €', '48 €', '19 €'], en: ['€40', '€36', '€48', '€19'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα τα βιβλία: 3 × 12 = 36 €. Μετά το τετράδιο: 36 + 4 = 40 €.',
      en: 'First the books: 3 × €12 = €36. Then the notebook: 36 + 4 = €40.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 96 αυγά και τα βάζει σε κουτιά των 8. Πόσα κουτιά γεμίζει;', en: 'Maria has 96 eggs and puts them in boxes of 8. How many boxes does she fill?' },
    options: { el: ['11', '12', '13', '88'], en: ['11', '12', '13', '88'] },
    correct: 1,
    explanation: {
      el: 'Μοιράζουμε: 96 ÷ 8 = 12 κουτιά. Έλεγχος: 12 × 8 = 96.',
      en: 'We share out: 96 ÷ 8 = 12 boxes. Check: 12 × 8 = 96.',
    },
  },

  // ── 14–18: multiples, divisors, divisibility ───────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι πολλαπλάσιο του 7;', en: 'Which number is a multiple of 7?' },
    options: { el: ['45', '27', '42', '50'], en: ['45', '27', '42', '50'] },
    correct: 2,
    explanation: {
      el: 'Το 42 = 7 × 6, άρα είναι πολλαπλάσιο του 7. Τα πολλαπλάσια του 7 είναι 7, 14, 21, 28, 35, 42…',
      en: '42 = 7 × 6, so it is a multiple of 7. The multiples of 7 are 7, 14, 21, 28, 35, 42…',
    },
  },
  {
    q: { el: 'Ποιος αριθμός ΔΕΝ είναι διαιρέτης του 24;', en: 'Which number is NOT a divisor of 24?' },
    options: { el: ['3', '6', '8', '9'], en: ['3', '6', '8', '9'] },
    correct: 3,
    explanation: {
      el: 'Διαιρέτης είναι ο αριθμός που διαιρεί ακριβώς. Το 24 ÷ 9 αφήνει υπόλοιπο 6, ενώ 24 ÷ 3 = 8, 24 ÷ 6 = 4 και 24 ÷ 8 = 3.',
      en: 'A divisor divides exactly. 24 ÷ 9 leaves a remainder of 6, while 24 ÷ 3 = 8, 24 ÷ 6 = 4 and 24 ÷ 8 = 3.',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να μοιράσει τα μπαλόνια του σε 2 ίσες ομάδες, χωρίς να περισσέψει κανένα. Με πόσα μπαλόνια γίνεται αυτό;', en: 'Giorgos wants to split his balloons into 2 equal groups with none left over. With how many balloons is this possible?' },
    options: { el: ['4.375', '7.081', '2.536', '9.999'], en: ['4,375', '7,081', '2,536', '9,999'] },
    correct: 2,
    explanation: {
      el: 'Ένας αριθμός διαιρείται με το 2 όταν το τελευταίο ψηφίο του είναι 0, 2, 4, 6 ή 8. Το 2.536 τελειώνει σε 6, άρα είναι ζυγός.',
      en: 'A number divides by 2 when its last digit is 0, 2, 4, 6 or 8. 2,536 ends in 6, so it is even.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός διαιρείται ακριβώς και με το 2 και με το 5;', en: 'Which number divides exactly by both 2 and 5?' },
    options: { el: ['1.235', '3.780', '4.502', '5.555'], en: ['1,235', '3,780', '4,502', '5,555'] },
    correct: 1,
    explanation: {
      el: 'Με το 5 διαιρούνται οι αριθμοί που τελειώνουν σε 0 ή 5. Για να διαιρείται και με το 2, πρέπει να τελειώνει σε 0: το 3.780.',
      en: 'Numbers ending in 0 or 5 divide by 5. To divide by 2 as well, the number must end in 0: 3,780.',
    },
  },
  {
    q: { el: 'Η δασκάλα έχει 1.425 καρτέλες και θέλει να τις μοιράσει ακριβώς σε ίσες ομάδες. Σε ποιες ομάδες μπορεί να τις μοιράσει;', en: 'The teacher has 1,425 cards and wants to share them exactly into equal groups. Which groups can she make?' },
    options: { el: ['σε ομάδες των 2', 'σε ομάδες των 5', 'σε ομάδες των 10', 'σε ομάδες των 2 και των 10'], en: ['groups of 2', 'groups of 5', 'groups of 10', 'groups of 2 and of 10'] },
    correct: 1,
    explanation: {
      el: 'Το 1.425 τελειώνει σε 5: διαιρείται με το 5, αλλά όχι με το 2 (δεν είναι ζυγό) ούτε με το 10 (δεν τελειώνει σε 0).',
      en: '1,425 ends in 5: it divides by 5, but not by 2 (it is not even) and not by 10 (it does not end in 0).',
    },
  },
];
