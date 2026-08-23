/**
 * Δ' Δημοτικού · Μαθηματικά · Αριθμοί ως το 1.000.000
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 9–10.
 * What the unit covers, in order:
 *   1–4   reading and writing six-digit numbers (words ↔ digits, the "empty" places)
 *   5–8   place value: what a digit is worth, which place it sits in, expanded form
 *   9–11  comparing and ordering, the number right after 399.999
 *   12–15 rounding to the nearest thousand / ten thousand / hundred thousand, mental estimation
 *   16–18 word problems: money in €, a stadium, points to a million
 * Distractors are real child mistakes: a missing or extra zero, swapped places, rounding the wrong way,
 * subtracting instead of adding. Greek uses «.» as the thousands separator, English uses «,».
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_NUMBERS_TO_MILLION: QuizQuestion[] = [
  // ── 1–4: reading and writing six-digit numbers ────────────────────────────
  {
    q: { el: 'Πώς διαβάζεται ο αριθμός 25.000;', en: 'How do we read the number 25,000?' },
    options: {
      el: ['δύο χιλιάδες πεντακόσια', 'είκοσι πέντε χιλιάδες', 'διακόσιες πενήντα χιλιάδες', 'δύο εκατομμύρια πεντακόσια'],
      en: ['two thousand five hundred', 'twenty-five thousand', 'two hundred fifty thousand', 'two million five hundred'],
    },
    correct: 1,
    explanation: {
      el: 'Η τελεία χωρίζει τις χιλιάδες: 25.000 = 25 χιλιάδες = είκοσι πέντε χιλιάδες.',
      en: 'The comma separates the thousands: 25,000 = 25 thousands = twenty-five thousand.',
    },
  },
  {
    q: { el: 'Πώς γράφεται με ψηφία ο αριθμός «τριακόσιες χιλιάδες»;', en: 'How do we write “three hundred thousand” in digits?' },
    options: { el: ['30.000', '3.000.000', '300.000', '300'], en: ['30,000', '3,000,000', '300,000', '300'] },
    correct: 2,
    explanation: {
      el: 'Τριακόσιες χιλιάδες = 300 × 1.000 = 300.000. Τρία ψηφία για τις χιλιάδες και τρία μηδενικά μετά.',
      en: 'Three hundred thousand = 300 × 1,000 = 300,000. Three digits for the thousands, then three zeros.',
    },
  },
  {
    q: { el: 'Πώς διαβάζεται ο αριθμός 416.300;', en: 'How do we read the number 416,300?' },
    options: {
      el: ['τετρακόσιες δεκαέξι χιλιάδες τριακόσια', 'σαράντα μία χιλιάδες εξακόσια τριάντα', 'τετρακόσιες δεκαέξι χιλιάδες τριάντα', 'τέσσερα εκατομμύρια δεκαέξι χιλιάδες τριακόσια'],
      en: ['four hundred sixteen thousand three hundred', 'forty-one thousand six hundred thirty', 'four hundred sixteen thousand thirty', 'four million sixteen thousand three hundred'],
    },
    correct: 0,
    explanation: {
      el: 'Διαβάζουμε πρώτα τις χιλιάδες (416) και μετά τα υπόλοιπα (300): τετρακόσιες δεκαέξι χιλιάδες τριακόσια.',
      en: 'Read the thousands first (416), then the rest (300): four hundred sixteen thousand three hundred.',
    },
  },
  {
    q: { el: 'Πώς γράφεται με ψηφία ο αριθμός «επτακόσιες πέντε χιλιάδες οκτώ»;', en: 'How do we write “seven hundred five thousand eight” in digits?' },
    options: { el: ['705.800', '75.008', '700.508', '705.008'], en: ['705,800', '75,008', '700,508', '705,008'] },
    correct: 3,
    explanation: {
      el: 'Χιλιάδες: 705. Μονάδες: μόνο 8, άρα βάζουμε 0 στις εκατοντάδες και στις δεκάδες: 705.008.',
      en: 'Thousands: 705. Then only 8, so we put 0 in the hundreds and tens: 705,008.',
    },
  },

  // ── 5–8: place value ──────────────────────────────────────────────────────
  {
    q: { el: 'Στον αριθμό 582.149, πόσο αξίζει το ψηφίο 8;', en: 'In the number 582,149, what is the digit 8 worth?' },
    options: { el: ['800', '80.000', '8.000', '800.000'], en: ['800', '80,000', '8,000', '800,000'] },
    correct: 1,
    explanation: {
      el: 'Το 8 είναι στη θέση των δεκάδων χιλιάδων, άρα αξίζει 8 × 10.000 = 80.000.',
      en: 'The 8 is in the ten thousands place, so it is worth 8 × 10,000 = 80,000.',
    },
  },
  {
    q: { el: 'Στον αριθμό 963.427, ποιο ψηφίο είναι στη θέση των εκατοντάδων χιλιάδων;', en: 'In the number 963,427, which digit is in the hundred thousands place?' },
    options: { el: ['4', '6', '3', '9'], en: ['4', '6', '3', '9'] },
    correct: 3,
    explanation: {
      el: 'Οι εκατοντάδες χιλιάδες είναι η πρώτη θέση από αριστερά σε έναν εξαψήφιο αριθμό. Εδώ είναι το 9.',
      en: 'The hundred thousands place is the first place on the left in a six-digit number. Here it is 9.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 200.000 + 40.000 + 600 + 5;', en: 'What is 200,000 + 40,000 + 600 + 5?' },
    options: { el: ['240.650', '24.605', '240.605', '246.005'], en: ['240,650', '24,605', '240,605', '246,005'] },
    correct: 2,
    explanation: {
      el: '2 εκατοντάδες χιλιάδες, 4 δεκάδες χιλιάδες, 0 χιλιάδες, 6 εκατοντάδες, 0 δεκάδες, 5 μονάδες: 240.605.',
      en: '2 hundred thousands, 4 ten thousands, 0 thousands, 6 hundreds, 0 tens, 5 ones: 240,605.',
    },
  },
  {
    q: { el: 'Σε ποιον αριθμό το ψηφίο 3 είναι στη θέση των χιλιάδων;', en: 'In which number is the digit 3 in the thousands place?' },
    options: { el: ['135.720', '153.720', '317.250', '512.370'], en: ['135,720', '153,720', '317,250', '512,370'] },
    correct: 1,
    explanation: {
      el: 'Η θέση των χιλιάδων είναι ακριβώς αριστερά από την τελεία. Στο 153.720 εκεί βρίσκεται το 3.',
      en: 'The thousands place is right before the comma. In 153,720 that digit is 3.',
    },
  },

  // ── 9–11: comparing and ordering ──────────────────────────────────────────
  {
    q: { el: 'Η πόλη του Γιώργου έχει 98.750 κατοίκους και η πόλη της Ελένης 345.000. Ποιο είναι σωστό;', en: 'George\'s city has 98,750 people and Eleni\'s city has 345,000. Which is correct?' },
    options: {
      el: ['Η πόλη της Ελένης έχει περισσότερους', 'Η πόλη του Γιώργου έχει περισσότερους', 'Έχουν τους ίδιους κατοίκους', 'Δεν μπορούμε να ξέρουμε'],
      en: ['Eleni\'s city has more people', 'George\'s city has more people', 'They have the same number of people', 'We cannot know'],
    },
    correct: 0,
    explanation: {
      el: 'Το 345.000 έχει έξι ψηφία και το 98.750 μόνο πέντε. Ο αριθμός με τα περισσότερα ψηφία είναι ο μεγαλύτερος.',
      en: '345,000 has six digits and 98,750 only five. The number with more digits is the bigger one.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι μεγαλύτερος: 627.415 ή 627.514;', en: 'Which number is bigger: 627,415 or 627,514?' },
    options: { el: ['627.415', 'Είναι ίσοι', '627.514', 'Κανένας από τους δύο'], en: ['627,415', 'They are equal', '627,514', 'Neither of them'] },
    correct: 2,
    explanation: {
      el: 'Έχουν ίδιες χιλιάδες (627). Συγκρίνουμε τις εκατοντάδες: 5 > 4, άρα 627.514 > 627.415.',
      en: 'They have the same thousands (627). Compare the hundreds: 5 > 4, so 627,514 > 627,415.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός έρχεται ακριβώς μετά το 399.999;', en: 'Which number comes right after 399,999?' },
    options: { el: ['400.000', '399.990', '400.999', '1.000.000'], en: ['400,000', '399,990', '400,999', '1,000,000'] },
    correct: 0,
    explanation: {
      el: '399.999 + 1 = 400.000. Όλα τα 9 γίνονται 0 και το 3 γίνεται 4.',
      en: '399,999 + 1 = 400,000. All the 9s turn into 0s and the 3 becomes a 4.',
    },
  },

  // ── 12–15: rounding and estimation ────────────────────────────────────────
  {
    q: { el: 'Στρογγυλοποίησε το 46.382 στην πλησιέστερη χιλιάδα.', en: 'Round 46,382 to the nearest thousand.' },
    options: { el: ['47.000', '46.400', '46.000', '50.000'], en: ['47,000', '46,400', '46,000', '50,000'] },
    correct: 2,
    explanation: {
      el: 'Κοιτάμε τις εκατοντάδες: 3. Είναι μικρότερο από 5, άρα μένουμε στο 46.000.',
      en: 'Look at the hundreds digit: 3. It is less than 5, so we stay at 46,000.',
    },
  },
  {
    q: { el: 'Ένα σπίτι κοστίζει 275.800 €. Πόσο είναι περίπου, στην πλησιέστερη δεκάδα χιλιάδων;', en: 'A house costs €275,800. About how much is that, to the nearest ten thousand?' },
    options: { el: ['270.000 €', '280.000 €', '276.000 €', '300.000 €'], en: ['€270,000', '€280,000', '€276,000', '€300,000'] },
    correct: 1,
    explanation: {
      el: 'Κοιτάμε τις χιλιάδες: 5. Είναι 5 ή παραπάνω, άρα ανεβαίνουμε: 275.800 → 280.000.',
      en: 'Look at the thousands digit: 5. It is 5 or more, so we go up: 275,800 → 280,000.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 649.000 στην πλησιέστερη εκατοντάδα χιλιάδων.', en: 'Round 649,000 to the nearest hundred thousand.' },
    options: { el: ['700.000', '650.000', '640.000', '600.000'], en: ['700,000', '650,000', '640,000', '600,000'] },
    correct: 3,
    explanation: {
      el: 'Κοιτάμε τις δεκάδες χιλιάδες: 4. Είναι μικρότερο από 5, άρα κατεβαίνουμε στο 600.000.',
      en: 'Look at the ten thousands digit: 4. It is less than 5, so we go down to 600,000.',
    },
  },
  {
    q: { el: 'Χωρίς να κάνεις την πράξη ακριβώς, πόσο κάνει περίπου 198.000 + 301.000;', en: 'Without working it out exactly, about how much is 198,000 + 301,000?' },
    options: { el: ['περίπου 400.000', 'περίπου 500.000', 'περίπου 600.000', 'περίπου 5.000.000'], en: ['about 400,000', 'about 500,000', 'about 600,000', 'about 5,000,000'] },
    correct: 1,
    explanation: {
      el: 'Το 198.000 είναι σχεδόν 200.000 και το 301.000 σχεδόν 300.000. 200.000 + 300.000 = 500.000.',
      en: '198,000 is almost 200,000 and 301,000 is almost 300,000. 200,000 + 300,000 = 500,000.',
    },
  },

  // ── 16–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Το νέο σχολείο κόστισε 350.000 € και το γήπεδό του 125.000 €. Πόσο κόστισαν μαζί;', en: 'The new school cost €350,000 and its sports field €125,000. How much did they cost together?' },
    options: { el: ['225.000 €', '465.000 €', '475.000 €', '575.000 €'], en: ['€225,000', '€465,000', '€475,000', '€575,000'] },
    correct: 2,
    explanation: {
      el: '350.000 + 125.000 = 475.000 €. Προσθέτουμε τις χιλιάδες: 350 + 125 = 475.',
      en: '350,000 + 125,000 = €475,000. Add the thousands: 350 + 125 = 475.',
    },
  },
  {
    q: { el: 'Ένα στάδιο χωράει 60.000 θεατές. Σε 3 αγώνες γέμισε και τις 3 φορές. Πόσοι θεατές ήρθαν συνολικά;', en: 'A stadium holds 60,000 fans. It was full at all 3 matches. How many fans came in total?' },
    options: { el: ['18.000', '60.003', '120.000', '180.000'], en: ['18,000', '60,003', '120,000', '180,000'] },
    correct: 3,
    explanation: {
      el: '3 × 60.000 = 180.000 θεατές. 3 × 6 = 18 και μετά τέσσερα μηδενικά.',
      en: '3 × 60,000 = 180,000 fans. 3 × 6 = 18, then four zeros.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 999.990 πόντους σε ένα παιχνίδι. Πόσους πόντους ακόμα χρειάζεται για να φτάσει το 1.000.000;', en: 'Maria has 999,990 points in a game. How many more points does she need to reach 1,000,000?' },
    options: { el: ['1', '10', '100', '1.000'], en: ['1', '10', '100', '1,000'] },
    correct: 1,
    explanation: {
      el: '999.990 + 10 = 1.000.000. Το ένα εκατομμύριο είναι το 1 με έξι μηδενικά, ο πρώτος επταψήφιος αριθμός.',
      en: '999,990 + 10 = 1,000,000. One million is a 1 with six zeros, the first seven-digit number.',
    },
  },
];
