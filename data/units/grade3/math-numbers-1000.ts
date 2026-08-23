/**
 * Γ' Δημοτικού · Μαθηματικά · Αριθμοί ως το 10.000
 * ================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Order, from easiest to hardest:
 *   1–3   reading and writing four-digit numbers (words ↔ digits, the "hidden zero")
 *   4–7   place value: thousands / hundreds / tens / units, building a number from parts
 *   8–10  comparing numbers (digit by digit, more digits = bigger)
 *   11–12 ordering three numbers (ascending / descending)
 *   13–16 rounding to the nearest 10 and the nearest 100
 *   17–18 word problems that mix comparing and place value
 * Distractors are the real slips: swapped digits, a missing zero, reading the
 * last digit instead of the tens, rounding the wrong way at 5.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_NUMBERS_1000: QuizQuestion[] = [
  // ── 1–3: reading and writing four-digit numbers ──────────────────────────
  {
    q: { el: 'Πώς διαβάζουμε τον αριθμό 2.345;', en: 'How do we read the number 2,345?' },
    options: {
      el: ['δύο χιλιάδες τριακόσια σαράντα πέντε', 'δύο χιλιάδες τετρακόσια τριάντα πέντε', 'διακόσια τριάντα τέσσερα και πέντε', 'δύο χιλιάδες τριακόσια πενήντα τέσσερα'],
      en: ['two thousand three hundred forty-five', 'two thousand four hundred thirty-five', 'two hundred thirty-four and five', 'two thousand three hundred fifty-four'],
    },
    correct: 0,
    explanation: {
      el: '2.345 = 2 χιλιάδες, 3 εκατοντάδες, 4 δεκάδες, 5 μονάδες. Διαβάζουμε τα ψηφία με τη σειρά, από τα αριστερά.',
      en: '2,345 = 2 thousands, 3 hundreds, 4 tens, 5 units. We read the digits in order, from the left.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι «τέσσερις χιλιάδες εξήντα»;', en: 'Which number is “four thousand sixty”?' },
    options: { el: ['4.600', '4.060', '4.006', '460'], en: ['4,600', '4,060', '4,006', '460'] },
    correct: 1,
    explanation: {
      el: 'Δεν ακούμε εκατοντάδες, άρα στη θέση τους βάζουμε 0: 4.060. Το 0 κρατάει τη θέση!',
      en: 'We hear no hundreds, so we put a 0 in their place: 4,060. The 0 keeps the place!',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έχει 3 χιλιάδες, 0 εκατοντάδες, 7 δεκάδες και 2 μονάδες;', en: 'Which number has 3 thousands, 0 hundreds, 7 tens and 2 units?' },
    options: { el: ['3.720', '372', '3.072', '3.702'], en: ['3,720', '372', '3,072', '3,702'] },
    correct: 2,
    explanation: {
      el: 'Γράφουμε με τη σειρά: χιλιάδες 3, εκατοντάδες 0, δεκάδες 7, μονάδες 2 → 3.072.',
      en: 'We write them in order: thousands 3, hundreds 0, tens 7, units 2 → 3,072.',
    },
  },

  // ── 4–7: place value ──────────────────────────────────────────────────────
  {
    q: { el: 'Στον αριθμό 5.834, τι δείχνει το ψηφίο 8;', en: 'In the number 5,834, what does the digit 8 show?' },
    options: { el: ['8 μονάδες', '8 δεκάδες', '8 χιλιάδες', '8 εκατοντάδες'], en: ['8 units', '8 tens', '8 thousands', '8 hundreds'] },
    correct: 3,
    explanation: {
      el: 'Από τα δεξιά: 4 μονάδες, 3 δεκάδες, 8 εκατοντάδες, 5 χιλιάδες. Το 8 είναι στις εκατοντάδες, δηλαδή 800.',
      en: 'From the right: 4 units, 3 tens, 8 hundreds, 5 thousands. The 8 is in the hundreds, so it means 800.',
    },
  },
  {
    q: { el: 'Ποια είναι η αξία του ψηφίου 6 στον αριθμό 6.219;', en: 'What is the value of the digit 6 in the number 6,219?' },
    options: { el: ['6.000', '60', '600', '6'], en: ['6,000', '60', '600', '6'] },
    correct: 0,
    explanation: {
      el: 'Το 6 είναι το πρώτο ψηφίο από τα αριστερά, στη θέση των χιλιάδων. Άρα αξίζει 6.000.',
      en: 'The 6 is the first digit from the left, in the thousands place. So it is worth 6,000.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4.000 + 500 + 30 + 2;', en: 'What is 4,000 + 500 + 30 + 2?' },
    options: { el: ['4.532', '4.352', '45.302', '4.523'], en: ['4,532', '4,352', '45,302', '4,523'] },
    correct: 0,
    explanation: {
      el: 'Κάθε κομμάτι πάει στη θέση του: 4 χιλιάδες, 5 εκατοντάδες, 3 δεκάδες, 2 μονάδες → 4.532.',
      en: 'Each part goes in its place: 4 thousands, 5 hundreds, 3 tens, 2 units → 4,532.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 2.000 + 70 + 5;', en: 'What is 2,000 + 70 + 5?' },
    options: { el: ['2.705', '2.075', '275', '2.750'], en: ['2,705', '2,075', '275', '2,750'] },
    correct: 1,
    explanation: {
      el: 'Δεν υπάρχουν εκατοντάδες, άρα βάζουμε 0 στη θέση τους: 2.075. Χωρίς το 0 ο αριθμός θα άλλαζε!',
      en: 'There are no hundreds, so we put a 0 in their place: 2,075. Without the 0 the number would change!',
    },
  },

  // ── 8–10: comparing ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι ο μεγαλύτερος;', en: 'Which number is the biggest?' },
    options: { el: ['3.456', '3.465', '3.446', '3.364'], en: ['3,456', '3,465', '3,446', '3,364'] },
    correct: 1,
    explanation: {
      el: 'Συγκρίνουμε από τα αριστερά. Όλοι έχουν 3 χιλιάδες· μετά κοιτάμε εκατοντάδες, δεκάδες. Το 3.465 έχει 6 δεκάδες, περισσότερες από όλους.',
      en: 'We compare from the left. All have 3 thousands; then we look at hundreds, then tens. 3,465 has 6 tens, more than the others.',
    },
  },
  {
    q: { el: 'Η Μαρία μέτρησε 5.120 βήματα, ο Νίκος 5.021 και η Ελένη 5.201. Ποιος έκανε τα λιγότερα βήματα;', en: 'Maria counted 5,120 steps, Nikos 5,021 and Eleni 5,201. Who took the fewest steps?' },
    options: { el: ['Η Μαρία', 'Ο Νίκος', 'Η Ελένη', 'Έκαναν όλοι τα ίδια'], en: ['Maria', 'Nikos', 'Eleni', 'They all took the same'] },
    correct: 1,
    explanation: {
      el: 'Όλοι έχουν 5 χιλιάδες. Στις εκατοντάδες: Μαρία 1, Νίκος 0, Ελένη 2. Το 5.021 είναι το μικρότερο — ο Νίκος.',
      en: 'All have 5 thousands. In the hundreds: Maria 1, Nikos 0, Eleni 2. 5,021 is the smallest — Nikos.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι σωστό;', en: 'Which of these is correct?' },
    options: { el: ['999 > 1.000', '999 < 1.000', '999 = 1.000', '999 < 990'], en: ['999 > 1,000', '999 < 1,000', '999 = 1,000', '999 < 990'] },
    correct: 1,
    explanation: {
      el: 'Το 1.000 έχει 4 ψηφία και το 999 μόνο 3. Ο αριθμός με τα περισσότερα ψηφία είναι πάντα μεγαλύτερος: 999 < 1.000.',
      en: '1,000 has 4 digits and 999 only 3. The number with more digits is always bigger: 999 < 1,000.',
    },
  },

  // ── 11–12: ordering ───────────────────────────────────────────────────────
  {
    q: { el: 'Βάλε τους αριθμούς 2.340, 2.043, 2.430 από τον μικρότερο στον μεγαλύτερο.', en: 'Put the numbers 2,340, 2,043, 2,430 in order from smallest to biggest.' },
    options: {
      el: ['2.043, 2.340, 2.430', '2.340, 2.043, 2.430', '2.430, 2.340, 2.043', '2.043, 2.430, 2.340'],
      en: ['2,043, 2,340, 2,430', '2,340, 2,043, 2,430', '2,430, 2,340, 2,043', '2,043, 2,430, 2,340'],
    },
    correct: 0,
    explanation: {
      el: 'Ίδιες χιλιάδες, άρα κοιτάμε τις εκατοντάδες: 0, 3, 4. Μικρότερος ο 2.043, μετά ο 2.340, τελευταίος ο 2.430.',
      en: 'Same thousands, so we look at the hundreds: 0, 3, 4. Smallest is 2,043, then 2,340, last is 2,430.',
    },
  },
  {
    q: { el: 'Βάλε τους αριθμούς 8.100, 980, 8.010 από τον μεγαλύτερο στον μικρότερο.', en: 'Put the numbers 8,100, 980, 8,010 in order from biggest to smallest.' },
    options: {
      el: ['980, 8.010, 8.100', '8.100, 8.010, 980', '8.010, 8.100, 980', '8.100, 980, 8.010'],
      en: ['980, 8,010, 8,100', '8,100, 8,010, 980', '8,010, 8,100, 980', '8,100, 980, 8,010'],
    },
    correct: 1,
    explanation: {
      el: 'Το 980 έχει μόνο 3 ψηφία, άρα είναι ο μικρότερος. Από τους άλλους δύο, το 8.100 έχει 1 εκατοντάδα και το 8.010 καμία.',
      en: '980 has only 3 digits, so it is the smallest. Of the other two, 8,100 has 1 hundred and 8,010 has none.',
    },
  },

  // ── 13–16: rounding to the nearest 10 and 100 ─────────────────────────────
  {
    q: { el: 'Στρογγυλοποίησε το 1.343 στην πλησιέστερη δεκάδα.', en: 'Round 1,343 to the nearest ten.' },
    options: { el: ['1.340', '1.350', '1.300', '1.400'], en: ['1,340', '1,350', '1,300', '1,400'] },
    correct: 0,
    explanation: {
      el: 'Κοιτάμε τις μονάδες: 3. Είναι μικρότερο από 5, άρα πάμε προς τα κάτω, στο 1.340.',
      en: 'We look at the units: 3. It is less than 5, so we go down, to 1,340.',
    },
  },
  {
    q: { el: 'Η βιβλιοθήκη του σχολείου έχει 2.785 βιβλία. Περίπου πόσα είναι, στην πλησιέστερη δεκάδα;', en: 'The school library has 2,785 books. About how many is that, to the nearest ten?' },
    options: { el: ['2.780', '2.790', '2.800', '2.700'], en: ['2,780', '2,790', '2,800', '2,700'] },
    correct: 1,
    explanation: {
      el: 'Οι μονάδες είναι 5. Όταν είναι 5 ή περισσότερο, πάμε προς τα πάνω: 2.785 → 2.790.',
      en: 'The units are 5. When it is 5 or more, we go up: 2,785 → 2,790.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 4.560 στην πλησιέστερη εκατοντάδα.', en: 'Round 4,560 to the nearest hundred.' },
    options: { el: ['4.000', '4.500', '4.570', '4.600'], en: ['4,000', '4,500', '4,570', '4,600'] },
    correct: 3,
    explanation: {
      el: 'Για εκατοντάδες κοιτάμε τις δεκάδες: 6. Είναι 5 ή παραπάνω, άρα πάμε στην επόμενη εκατοντάδα, 4.600.',
      en: 'For hundreds we look at the tens: 6. It is 5 or more, so we go to the next hundred, 4,600.',
    },
  },
  {
    q: { el: 'Ο Νίκος μάζεψε 1.248 αυτοκόλλητα. Περίπου πόσα έχει, στην πλησιέστερη εκατοντάδα;', en: 'Nikos collected 1,248 stickers. About how many does he have, to the nearest hundred?' },
    options: { el: ['1.200', '1.250', '1.300', '1.000'], en: ['1,200', '1,250', '1,300', '1,000'] },
    correct: 0,
    explanation: {
      el: 'Οι δεκάδες είναι 4, μικρότερο από 5. Μένουμε στην εκατοντάδα που έχουμε: 1.200. Το 1.250 είναι στρογγυλοποίηση σε δεκάδα, όχι σε εκατοντάδα.',
      en: 'The tens are 4, less than 5. We stay on the hundred we have: 1,200. 1,250 is rounding to a ten, not a hundred.',
    },
  },

  // ── 17–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Ένα ποδήλατο κοστίζει 1.090 € και μια τηλεόραση 1.900 €. Ποιο κοστίζει λιγότερο;', en: 'A bicycle costs €1,090 and a television costs €1,900. Which costs less?' },
    options: { el: ['Το ποδήλατο', 'Η τηλεόραση', 'Κοστίζουν το ίδιο', 'Δεν μπορούμε να ξέρουμε'], en: ['The bicycle', 'The television', 'They cost the same', 'We cannot know'] },
    correct: 0,
    explanation: {
      el: 'Και τα δύο έχουν 1 χιλιάδα. Στις εκατοντάδες: 0 για το ποδήλατο, 9 για την τηλεόραση. 1.090 < 1.900, άρα το ποδήλατο είναι φθηνότερο.',
      en: 'Both have 1 thousand. In the hundreds: 0 for the bicycle, 9 for the television. 1,090 < 1,900, so the bicycle is cheaper.',
    },
  },
  {
    q: { el: 'Η Μαρία έγραψε τον αριθμό 3.605 και ο Γιώργος τον 3.650. Ποιος έγραψε τον μεγαλύτερο αριθμό και γιατί;', en: 'Maria wrote the number 3,605 and Giorgos wrote 3,650. Who wrote the bigger number, and why?' },
    options: {
      el: ['Ο Γιώργος, γιατί 5 δεκάδες είναι περισσότερες από 0 δεκάδες', 'Η Μαρία, γιατί το 5 στο τέλος είναι μεγαλύτερο από το 0', 'Είναι ίσοι, γιατί έχουν τα ίδια ψηφία', 'Ο Γιώργος, γιατί έχει περισσότερες χιλιάδες'],
      en: ['Giorgos, because 5 tens is more than 0 tens', 'Maria, because the 5 at the end is bigger than the 0', 'They are equal, because they have the same digits', 'Giorgos, because he has more thousands'],
    },
    correct: 0,
    explanation: {
      el: 'Ίδια ψηφία σε διαφορετικές θέσεις κάνουν διαφορετικούς αριθμούς. Στο 3.650 το 5 είναι στις δεκάδες (50), στο 3.605 στις μονάδες (5). Άρα 3.650 > 3.605.',
      en: 'The same digits in different places make different numbers. In 3,650 the 5 is in the tens (50); in 3,605 it is in the units (5). So 3,650 > 3,605.',
    },
  },
];
