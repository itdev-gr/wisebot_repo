/**
 * Ε' Δημοτικού · Μαθηματικά · Δεκαδικοί και ποσοστά
 * ==================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Greek uses the decimal comma (3,47), English the point (3.47).
 *
 * What the unit covers, in the order an Ε' class meets it:
 *   1–3   decimal place value: tenths, hundredths, reading and comparing decimals
 *   4–5   rounding to the nearest tenth and the nearest whole number
 *   6–12  the four operations with decimals, ×10 and ÷100 (moving the comma)
 *   13–15 fraction ↔ decimal ↔ percent (50% = 1/2 = 0,5)
 *   16–18 word problems: shopping in €, change, a percentage of a class
 *
 * Distractors are real child mistakes: comparing by number of digits (0,75 > 0,8),
 * misplacing the comma, forgetting the carry, multiplying the parts separately.
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_DECIMALS_AND_PERCENT: QuizQuestion[] = [
  // ── 1–3: place value and comparing ──────────────────────────────────────────
  {
    q: { el: 'Στον αριθμό 3,47 ποιο ψηφίο είναι στη θέση των δεκάτων;', en: 'In the number 3.47, which digit is in the tenths place?' },
    options: { el: ['4', '3', '7', '47'], en: ['4', '3', '7', '47'] },
    correct: 0,
    explanation: {
      el: 'Αμέσως μετά την υποδιαστολή είναι τα δέκατα. Στο 3,47 το 4 είναι δέκατα και το 7 εκατοστά.',
      en: 'Right after the decimal point come the tenths. In 3.47 the 4 is tenths and the 7 is hundredths.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι το «δύο ακέραια και πέντε εκατοστά»;', en: 'Which number is “two and five hundredths”?' },
    options: { el: ['2,5', '2,05', '2,005', '25'], en: ['2.5', '2.05', '2.005', '25'] },
    correct: 1,
    explanation: {
      el: 'Τα εκατοστά είναι η δεύτερη θέση μετά την υποδιαστολή: 2,05. Το 2,5 είναι «δύο και πέντε δέκατα».',
      en: 'Hundredths are the second place after the point: 2.05. 2.5 is “two and five tenths”.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι μεγαλύτερος: το 0,8 ή το 0,75;', en: 'Which number is bigger: 0.8 or 0.75?' },
    options: { el: ['Το 0,8', 'Το 0,75', 'Είναι ίσοι', 'Δεν συγκρίνονται'], en: ['0.8', '0.75', 'They are equal', 'They cannot be compared'] },
    correct: 0,
    explanation: {
      el: 'Το 0,8 είναι το ίδιο με 0,80, και 80 εκατοστά είναι πιο πολλά από 75. Τα περισσότερα ψηφία δεν σημαίνουν μεγαλύτερο αριθμό!',
      en: '0.8 is the same as 0.80, and 80 hundredths is more than 75. More digits does not mean a bigger number!',
    },
  },

  // ── 4–5: rounding ──────────────────────────────────────────────────────────
  {
    q: { el: 'Στρογγυλοποίησε το 4,67 στο πλησιέστερο δέκατο.', en: 'Round 4.67 to the nearest tenth.' },
    options: { el: ['4,6', '4,7', '5', '4,67'], en: ['4.6', '4.7', '5', '4.67'] },
    correct: 1,
    explanation: {
      el: 'Κοιτάμε τα εκατοστά: το 7 είναι 5 ή παραπάνω, άρα τα δέκατα ανεβαίνουν από 6 σε 7. Το 4,67 γίνεται 4,7.',
      en: 'Look at the hundredths: 7 is 5 or more, so the tenths go up from 6 to 7. 4.67 becomes 4.7.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 12,38 στον πλησιέστερο ακέραιο.', en: 'Round 12.38 to the nearest whole number.' },
    options: { el: ['13', '12,4', '12', '12,3'], en: ['13', '12.4', '12', '12.3'] },
    correct: 2,
    explanation: {
      el: 'Κοιτάμε τα δέκατα: το 3 είναι μικρότερο από 5, άρα ο ακέραιος μένει 12. Το 12,38 είναι πιο κοντά στο 12 παρά στο 13.',
      en: 'Look at the tenths: 3 is less than 5, so the whole number stays 12. 12.38 is closer to 12 than to 13.',
    },
  },

  // ── 6–12: the four operations ──────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2,5 + 1,75;', en: 'What is 2.5 + 1.75?' },
    options: { el: ['3,25', '4,25', '4,75', '4,20'], en: ['3.25', '4.25', '4.75', '4.20'] },
    correct: 1,
    explanation: {
      el: '2,5 + 1,75 = 4,25. Βάζουμε υποδιαστολή κάτω από υποδιαστολή: 2,50 + 1,75 = 4,25.',
      en: '2.5 + 1.75 = 4.25. Line up the decimal points: 2.50 + 1.75 = 4.25.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5 − 1,4;', en: 'What is 5 − 1.4?' },
    options: { el: ['4,6', '3,6', '4,4', '3,4'], en: ['4.6', '3.6', '4.4', '3.4'] },
    correct: 1,
    explanation: {
      el: '5 − 1,4 = 3,6. Σκέψου το 5 ως 5,0: 5,0 − 1,4 = 3,6. Έλεγχος: 3,6 + 1,4 = 5.',
      en: '5 − 1.4 = 3.6. Think of 5 as 5.0: 5.0 − 1.4 = 3.6. Check: 3.6 + 1.4 = 5.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 0,6 × 3;', en: 'What is 0.6 × 3?' },
    options: { el: ['0,18', '18', '1,8', '0,9'], en: ['0.18', '18', '1.8', '0.9'] },
    correct: 2,
    explanation: {
      el: '0,6 × 3 = 1,8. Είναι 0,6 + 0,6 + 0,6 = 1,8. Ή: 6 × 3 = 18 και βάζουμε την υποδιαστολή μία θέση από το τέλος.',
      en: '0.6 × 3 = 1.8. It is 0.6 + 0.6 + 0.6 = 1.8. Or: 6 × 3 = 18, then put the point one place from the end.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 1,5 × 4;', en: 'What is 1.5 × 4?' },
    options: { el: ['4,5', '6', '4,20', '5,5'], en: ['4.5', '6', '4.20', '5.5'] },
    correct: 1,
    explanation: {
      el: '1,5 × 4 = 6. Τέσσερα «ενάμισι» κάνουν 6: 1,5 + 1,5 = 3 και 3 + 3 = 6.',
      en: '1.5 × 4 = 6. Four “one and a halves” make 6: 1.5 + 1.5 = 3 and 3 + 3 = 6.',
    },
  },
  {
    q: { el: 'Η Μαρία μοιράζει 7,2 λίτρα χυμό σε 2 ίδια μπουκάλια. Πόσα λίτρα μπαίνουν στο καθένα;', en: 'Maria shares 7.2 litres of juice between 2 identical bottles. How many litres go into each one?' },
    options: { el: ['3,6', '3,1', '36', '3,5'], en: ['3.6', '3.1', '36', '3.5'] },
    correct: 0,
    explanation: {
      el: '7,2 ÷ 2 = 3,6 λίτρα. Μοιράζουμε το 7 (3 και περισσεύει 1) και μετά τα 12 δέκατα: 12 ÷ 2 = 6 δέκατα.',
      en: '7.2 ÷ 2 = 3.6 litres. Share the 7 (3 with 1 left over), then the 12 tenths: 12 ÷ 2 = 6 tenths.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3,4 × 10;', en: 'What is 3.4 × 10?' },
    options: { el: ['3,40', '30,4', '34', '340'], en: ['3.40', '30.4', '34', '340'] },
    correct: 2,
    explanation: {
      el: '3,4 × 10 = 34. Όταν πολλαπλασιάζουμε με το 10, η υποδιαστολή πάει μία θέση δεξιά.',
      en: '3.4 × 10 = 34. When we multiply by 10, the decimal point moves one place to the right.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 45 ÷ 100;', en: 'What is 45 ÷ 100?' },
    options: { el: ['4,5', '0,45', '0,045', '450'], en: ['4.5', '0.45', '0.045', '450'] },
    correct: 1,
    explanation: {
      el: '45 ÷ 100 = 0,45. Όταν διαιρούμε με το 100, η υποδιαστολή πάει δύο θέσεις αριστερά: 45 → 4,5 → 0,45.',
      en: '45 ÷ 100 = 0.45. When we divide by 100, the decimal point moves two places to the left: 45 → 4.5 → 0.45.',
    },
  },

  // ── 13–15: fraction, decimal, percent ──────────────────────────────────────
  {
    q: { el: 'Το 50% είναι το ίδιο με…', en: '50% is the same as…' },
    options: { el: ['1/2 και 0,5', '1/5 και 0,2', '1/2 και 0,05', '1/4 και 0,25'], en: ['1/2 and 0.5', '1/5 and 0.2', '1/2 and 0.05', '1/4 and 0.25'] },
    correct: 0,
    explanation: {
      el: '50% σημαίνει 50 στα 100, δηλαδή τα μισά: 50% = 1/2 = 0,5. Τρεις τρόποι να πεις «το μισό».',
      en: '50% means 50 out of 100, which is half: 50% = 1/2 = 0.5. Three ways to say “half”.',
    },
  },
  {
    q: { el: 'Πώς γράφεται το 25% ως δεκαδικός;', en: 'How do we write 25% as a decimal?' },
    options: { el: ['2,5', '0,4', '0,025', '0,25'], en: ['2.5', '0.4', '0.025', '0.25'] },
    correct: 3,
    explanation: {
      el: '25% = 25 στα 100 = 25 ÷ 100 = 0,25. Είναι και το 1/4, ένα τέταρτο.',
      en: '25% = 25 out of 100 = 25 ÷ 100 = 0.25. It is also 1/4, one quarter.',
    },
  },
  {
    q: { el: 'Το 0,1 είναι το ίδιο με ποιο ποσοστό;', en: '0.1 is the same as which percentage?' },
    options: { el: ['1%', '10%', '0,1%', '100%'], en: ['1%', '10%', '0.1%', '100%'] },
    correct: 1,
    explanation: {
      el: '0,1 = 1/10 = 10 στα 100 = 10%. Για να κάνεις δεκαδικό ποσοστό, πολλαπλασιάζεις με το 100.',
      en: '0.1 = 1/10 = 10 out of 100 = 10%. To turn a decimal into a percent, multiply by 100.',
    },
  },

  // ── 16–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη αγόρασε ένα τετράδιο 1,20 € και ένα στιλό 0,85 €. Πόσο πλήρωσε συνολικά;', en: 'Eleni bought a notebook for €1.20 and a pen for €0.85. How much did she pay in total?' },
    options: { el: ['1,95 €', '2,05 €', '2,15 €', '1,05 €'], en: ['€1.95', '€2.05', '€2.15', '€1.05'] },
    correct: 1,
    explanation: {
      el: '1,20 + 0,85 = 2,05 €. Τα λεπτά: 20 + 85 = 105 λεπτά = 1 € και 5 λεπτά. Άρα 1 + 1,05 = 2,05 €.',
      en: '1.20 + 0.85 = €2.05. The cents: 20 + 85 = 105 cents = €1 and 5 cents. So 1 + 1.05 = €2.05.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 10 € και αγοράζει 3 παγωτά με 1,50 € το καθένα. Πόσα ρέστα παίρνει;', en: 'Nikos has €10 and buys 3 ice creams at €1.50 each. How much change does he get?' },
    options: { el: ['4,50 €', '8,50 €', '5,50 €', '6,50 €'], en: ['€4.50', '€8.50', '€5.50', '€6.50'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα τα παγωτά: 3 × 1,50 = 4,50 €. Μετά τα ρέστα: 10 − 4,50 = 5,50 €.',
      en: 'First the ice creams: 3 × 1.50 = €4.50. Then the change: 10 − 4.50 = €5.50.',
    },
  },
  {
    q: { el: 'Σε μια τάξη με 20 παιδιά, το 25% φορούν γυαλιά. Πόσα παιδιά φορούν γυαλιά;', en: 'In a class of 20 children, 25% wear glasses. How many children wear glasses?' },
    options: { el: ['5', '4', '25', '10'], en: ['5', '4', '25', '10'] },
    correct: 0,
    explanation: {
      el: '25% είναι το 1/4. Το ένα τέταρτο από τα 20 παιδιά: 20 ÷ 4 = 5 παιδιά.',
      en: '25% is 1/4. One quarter of the 20 children: 20 ÷ 4 = 5 children.',
    },
  },
];
