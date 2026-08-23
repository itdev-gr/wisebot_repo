/**
 * Β' Δημοτικού · Μαθηματικά · Ευρώ και ρέστα
 * ==========================================
 * Original questions for a child of 7–8 (curriculum topics only, no textbook text).
 *
 * What the unit covers, in order:
 *   1–4   coins and notes: which is a note, the biggest note, 1 € = 100 λεπτά, notes that do not exist
 *   5–9   making amounts by adding coins and notes (up to 25 €), how many 2 € coins make 10 €
 *   10–13 change: what the shop gives back when we pay with 1 €, 5 €, 10 €, 20 €
 *   14–18 short shopping problems: add two prices, what is left, 3 × 2 €, a two-step problem, change from 50 €
 *
 * Distractors are real child mistakes: adding the prices instead of subtracting, counting
 * the notes instead of their value, off-by-one, mixing up euro and λεπτά.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_EURO_MONEY: QuizQuestion[] = [
  // ── 1–4: coins and notes ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι χαρτονόμισμα;', en: 'Which of these is a banknote?' },
    options: { el: ['5 €', '1 €', '2 €', '50 λεπτά'], en: ['€5', '€1', '€2', '50 cents'] },
    correct: 0,
    explanation: {
      el: 'Τα 5 € είναι χαρτονόμισμα. Το 1 €, τα 2 € και τα λεπτά είναι κέρματα.',
      en: 'The €5 is a banknote. The €1, the €2 and the cents are coins.',
    },
  },
  {
    q: { el: 'Ποιο χαρτονόμισμα αξίζει πιο πολύ;', en: 'Which banknote is worth the most?' },
    options: { el: ['5 €', '10 €', '20 €', '50 €'], en: ['€5', '€10', '€20', '€50'] },
    correct: 3,
    explanation: {
      el: 'Τα 50 € αξίζουν πιο πολύ. Όσο πιο μεγάλος ο αριθμός, τόσο πιο πολλά λεφτά.',
      en: 'The €50 is worth the most. The bigger the number, the more money it is.',
    },
  },
  {
    q: { el: 'Πόσα λεπτά έχει το 1 ευρώ;', en: 'How many cents are in 1 euro?' },
    options: { el: ['10', '50', '100', '1.000'], en: ['10', '50', '100', '1,000'] },
    correct: 2,
    explanation: {
      el: '1 ευρώ = 100 λεπτά. Δύο κέρματα των 50 λεπτών κάνουν 1 ευρώ.',
      en: '1 euro = 100 cents. Two 50-cent coins make 1 euro.',
    },
  },
  {
    q: { el: 'Ποιο χαρτονόμισμα ΔΕΝ υπάρχει;', en: 'Which banknote does NOT exist?' },
    options: { el: ['10 €', '30 €', '20 €', '50 €'], en: ['€10', '€30', '€20', '€50'] },
    correct: 1,
    explanation: {
      el: 'Δεν υπάρχει χαρτονόμισμα των 30 €. Τα χαρτονομίσματα είναι 5, 10, 20, 50, 100 €.',
      en: 'There is no €30 note. The notes are 5, 10, 20, 50 and 100 euros.',
    },
  },

  // ── 5–9: making amounts ─────────────────────────────────────────────────────
  {
    q: { el: 'Έχεις δύο κέρματα των 2 € και ένα κέρμα του 1 €. Πόσα ευρώ έχεις;', en: 'You have two €2 coins and one €1 coin. How many euros do you have?' },
    options: { el: ['3 €', '4 €', '5 €', '6 €'], en: ['€3', '€4', '€5', '€6'] },
    correct: 2,
    explanation: {
      el: '2 + 2 + 1 = 5 €. Μετράμε την αξία των κερμάτων, όχι πόσα είναι.',
      en: '2 + 2 + 1 = €5. We count what the coins are worth, not how many there are.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5 € + 2 € + 1 €;', en: 'What is €5 + €2 + €1?' },
    options: { el: ['7 €', '8 €', '9 €', '10 €'], en: ['€7', '€8', '€9', '€10'] },
    correct: 1,
    explanation: {
      el: '5 + 2 = 7 και 7 + 1 = 8. Άρα 8 €.',
      en: '5 + 2 = 7 and 7 + 1 = 8. So €8.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 10 € + 10 € + 5 €;', en: 'What is €10 + €10 + €5?' },
    options: { el: ['15 €', '20 €', '25 €', '30 €'], en: ['€15', '€20', '€25', '€30'] },
    correct: 2,
    explanation: {
      el: '10 + 10 = 20 και 20 + 5 = 25. Άρα 25 €.',
      en: '10 + 10 = 20 and 20 + 5 = 25. So €25.',
    },
  },
  {
    q: { el: 'Πόσα κέρματα των 2 € κάνουν 10 €;', en: 'How many €2 coins make €10?' },
    options: { el: ['2', '5', '10', '20'], en: ['2', '5', '10', '20'] },
    correct: 1,
    explanation: {
      el: '2, 4, 6, 8, 10 — πέντε κέρματα των 2 € κάνουν 10 €.',
      en: '2, 4, 6, 8, 10 — five €2 coins make €10.',
    },
  },
  {
    q: { el: 'Ποια χαρτονομίσματα κάνουν μαζί 20 €;', en: 'Which banknotes make €20 together?' },
    options: { el: ['10 € και 10 €', '10 € και 5 €', '5 € και 5 € και 5 €', '20 € και 5 €'], en: ['€10 and €10', '€10 and €5', '€5 and €5 and €5', '€20 and €5'] },
    correct: 0,
    explanation: {
      el: '10 + 10 = 20. Τα άλλα κάνουν 15 € ή 25 €.',
      en: '10 + 10 = 20. The others make €15 or €25.',
    },
  },

  // ── 10–13: change ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα κουλούρι κοστίζει 60 λεπτά. Δίνεις 1 €. Πόσα ρέστα παίρνεις;', en: 'A bread ring costs 60 cents. You pay €1. How much change do you get?' },
    options: { el: ['40 λεπτά', '60 λεπτά', '30 λεπτά', '50 λεπτά'], en: ['40 cents', '60 cents', '30 cents', '50 cents'] },
    correct: 0,
    explanation: {
      el: '1 € = 100 λεπτά. 100 − 60 = 40 λεπτά ρέστα.',
      en: '€1 = 100 cents. 100 − 60 = 40 cents change.',
    },
  },
  {
    q: { el: 'Ένας χυμός κοστίζει 3 €. Δίνεις 5 €. Πόσα ρέστα παίρνεις;', en: 'A juice costs €3. You pay €5. How much change do you get?' },
    options: { el: ['8 €', '2 €', '3 €', '1 €'], en: ['€8', '€2', '€3', '€1'] },
    correct: 1,
    explanation: {
      el: 'Ρέστα = όσα δίνουμε − όσα κοστίζει. 5 − 3 = 2 €.',
      en: 'Change = what we pay − what it costs. 5 − 3 = €2.',
    },
  },
  {
    q: { el: 'Ένα παιχνίδι κοστίζει 7 €. Δίνεις 10 €. Πόσα ρέστα παίρνεις;', en: 'A toy costs €7. You pay €10. How much change do you get?' },
    options: { el: ['17 €', '4 €', '3 €', '2 €'], en: ['€17', '€4', '€3', '€2'] },
    correct: 2,
    explanation: {
      el: '10 − 7 = 3 €. Το 17 είναι πρόσθεση — στα ρέστα αφαιρούμε!',
      en: '10 − 7 = €3. 17 is adding — for change we subtract!',
    },
  },
  {
    q: { el: 'Ένα βιβλίο κοστίζει 12 €. Δίνεις 20 €. Πόσα ρέστα παίρνεις;', en: 'A book costs €12. You pay €20. How much change do you get?' },
    options: { el: ['8 €', '12 €', '32 €', '6 €'], en: ['€8', '€12', '€32', '€6'] },
    correct: 0,
    explanation: {
      el: '20 − 12 = 8 €. Μέτρα από το 12 μέχρι το 20: 13, 14, 15, 16, 17, 18, 19, 20 — οκτώ βήματα.',
      en: '20 − 12 = €8. Count up from 12 to 20: 13, 14, 15, 16, 17, 18, 19, 20 — eight steps.',
    },
  },

  // ── 14–18: shopping problems ───────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος αγοράζει ένα τετράδιο 6 € και ένα μολύβι 2 €. Πόσο πληρώνει;', en: 'Nikos buys a notebook for €6 and a pencil for €2. How much does he pay?' },
    options: { el: ['4 €', '6 €', '8 €', '12 €'], en: ['€4', '€6', '€8', '€12'] },
    correct: 2,
    explanation: {
      el: '6 + 2 = 8 €. Όταν αγοράζουμε δύο πράγματα, προσθέτουμε τις τιμές.',
      en: '6 + 2 = €8. When we buy two things, we add the prices.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 10 €. Αγοράζει παγωτό 3 € και χυμό 2 €. Πόσα ευρώ της μένουν;', en: 'Maria has €10. She buys an ice cream for €3 and a juice for €2. How many euros does she have left?' },
    options: { el: ['5 €', '15 €', '7 €', '8 €'], en: ['€5', '€15', '€7', '€8'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα 3 + 2 = 5 € ξόδεψε. Μετά 10 − 5 = 5 € της μένουν.',
      en: 'First 3 + 2 = €5 spent. Then 10 − 5 = €5 left.',
    },
  },
  {
    q: { el: 'Ένα τετράδιο κοστίζει 2 €. Πόσο κοστίζουν 3 τετράδια;', en: 'A notebook costs €2. How much do 3 notebooks cost?' },
    options: { el: ['5 €', '6 €', '8 €', '23 €'], en: ['€5', '€6', '€8', '€23'] },
    correct: 1,
    explanation: {
      el: '2 + 2 + 2 = 6 €. Τρεις φορές τα 2 ευρώ.',
      en: '2 + 2 + 2 = €6. Three times 2 euros.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει 15 € στον κουμπαρά. Η γιαγιά του δίνει 5 €. Αγοράζει ένα αυτοκινητάκι 12 €. Πόσα ευρώ του μένουν;', en: 'Giorgos has €15 in his piggy bank. His grandma gives him €5. He buys a toy car for €12. How many euros does he have left?' },
    options: { el: ['20 €', '8 €', '3 €', '12 €'], en: ['€20', '€8', '€3', '€12'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα 15 + 5 = 20 €. Μετά 20 − 12 = 8 € του μένουν.',
      en: 'First 15 + 5 = €20. Then 20 − 12 = €8 left.',
    },
  },
  {
    q: { el: 'Η Ελένη αγοράζει μια τσάντα 35 €. Δίνει 50 €. Πόσα ρέστα παίρνει;', en: 'Eleni buys a bag for €35. She pays €50. How much change does she get?' },
    options: { el: ['25 €', '85 €', '15 €', '10 €'], en: ['€25', '€85', '€15', '€10'] },
    correct: 2,
    explanation: {
      el: '50 − 35 = 15 €. Μέτρα από το 35: 40, 45, 50 — τρία πεντάρια, δηλαδή 15 €.',
      en: '50 − 35 = €15. Count up from 35: 40, 45, 50 — three fives, that is €15.',
    },
  },
];
