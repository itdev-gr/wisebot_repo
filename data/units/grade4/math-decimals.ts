/**
 * Δ' Δημοτικού · Μαθηματικά · Δεκαδικοί αριθμοί
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 9–10. Greek decimals use the comma (2,5), English the point (2.5).
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–6   tenths, hundredths, thousandths: reading, writing and place value
 *   7–9   comparing decimals (0,7 vs 0,65; 3,5 = 3,50; money)
 *   10–14 adding and subtracting decimals, with money word problems
 *   15–18 × and ÷ by 10, 100, 1000 — the comma moves, the digits stay
 *
 * Distractors are the mistakes children actually make: "65 > 7 so 0,65 > 0,7", adding a
 * zero instead of moving the comma, lining up digits from the right instead of at the
 * comma, forgetting to borrow. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_DECIMALS: QuizQuestion[] = [
  // ── 1–6: tenths, hundredths, thousandths ───────────────────────────────────
  {
    q: { el: 'Ο αριθμός 0,1 είναι…', en: 'The number 0.1 is…' },
    options: { el: ['ένα δέκατο', 'ένα εκατοστό', 'ένα ολόκληρο', 'δέκα'], en: ['one tenth', 'one hundredth', 'one whole', 'ten'] },
    correct: 0,
    explanation: {
      el: 'Αν κόψουμε το 1 σε 10 ίσα κομμάτια, κάθε κομμάτι είναι ένα δέκατο και γράφεται 0,1.',
      en: 'If we cut 1 into 10 equal pieces, each piece is one tenth and is written 0.1.',
    },
  },
  {
    q: { el: 'Πώς γράφεται «τρία δέκατα» με δεκαδικό αριθμό;', en: 'How do we write “three tenths” as a decimal?' },
    options: { el: ['3', '0,3', '0,03', '30'], en: ['3', '0.3', '0.03', '30'] },
    correct: 1,
    explanation: {
      el: 'Τρία δέκατα = 0,3. Το πρώτο ψηφίο μετά την υποδιαστολή δείχνει τα δέκατα.',
      en: 'Three tenths = 0.3. The first digit after the decimal point shows the tenths.',
    },
  },
  {
    q: { el: 'Στον αριθμό 4,27 ποιο ψηφίο είναι στη θέση των εκατοστών;', en: 'In the number 4.27, which digit is in the hundredths place?' },
    options: { el: ['4', '2', '7', '27'], en: ['4', '2', '7', '27'] },
    correct: 2,
    explanation: {
      el: '4,27 = 4 ολόκληρα, 2 δέκατα και 7 εκατοστά. Τα εκατοστά είναι το δεύτερο ψηφίο μετά την υποδιαστολή.',
      en: '4.27 = 4 wholes, 2 tenths and 7 hundredths. The hundredths are the second digit after the point.',
    },
  },
  {
    q: { el: 'Πώς γράφεται «πέντε εκατοστά» με δεκαδικό αριθμό;', en: 'How do we write “five hundredths” as a decimal?' },
    options: { el: ['0,5', '0,05', '5', '0,005'], en: ['0.5', '0.05', '5', '0.005'] },
    correct: 1,
    explanation: {
      el: 'Πέντε εκατοστά = 0,05. Τα εκατοστά θέλουν δύο ψηφία μετά την υποδιαστολή, γι\' αυτό βάζουμε πρώτα ένα 0.',
      en: 'Five hundredths = 0.05. Hundredths need two digits after the point, so we put a 0 first.',
    },
  },
  {
    q: { el: 'Πώς γράφεται «ένα χιλιοστό» με δεκαδικό αριθμό;', en: 'How do we write “one thousandth” as a decimal?' },
    options: { el: ['0,1', '0,01', '0,001', '1.000'], en: ['0.1', '0.01', '0.001', '1,000'] },
    correct: 2,
    explanation: {
      el: 'Ένα χιλιοστό = 0,001. Τρία ψηφία μετά την υποδιαστολή: δέκατα, εκατοστά, χιλιοστά.',
      en: 'One thousandth = 0.001. Three digits after the point: tenths, hundredths, thousandths.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 2 + 0,3 + 0,04;', en: 'What is 2 + 0.3 + 0.04?' },
    options: { el: ['2,34', '2,7', '2,43', '0,234'], en: ['2.34', '2.7', '2.43', '0.234'] },
    correct: 0,
    explanation: {
      el: '2 ολόκληρα, 3 δέκατα και 4 εκατοστά = 2,34. Κάθε ψηφίο πάει στη δική του θέση.',
      en: '2 wholes, 3 tenths and 4 hundredths = 2.34. Each digit goes in its own place.',
    },
  },

  // ── 7–9: comparing decimals ────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι μεγαλύτερος: το 0,7 ή το 0,65;', en: 'Which number is bigger: 0.7 or 0.65?' },
    options: { el: ['το 0,65', 'το 0,7', 'είναι ίσοι', 'δεν μπορούμε να ξέρουμε'], en: ['0.65', '0.7', 'they are equal', 'we cannot know'] },
    correct: 1,
    explanation: {
      el: '0,7 = 0,70 και 70 εκατοστά είναι περισσότερα από 65. Συγκρίνουμε πρώτα τα δέκατα: 7 > 6.',
      en: '0.7 = 0.70, and 70 hundredths is more than 65. Compare the tenths first: 7 > 6.',
    },
  },
  {
    q: { el: 'Τι ισχύει για το 3,5 και το 3,50;', en: 'What is true about 3.5 and 3.50?' },
    options: { el: ['3,5 < 3,50', '3,5 > 3,50', '3,5 = 3,50', 'δεν συγκρίνονται'], en: ['3.5 < 3.50', '3.5 > 3.50', '3.5 = 3.50', 'they cannot be compared'] },
    correct: 2,
    explanation: {
      el: 'Ένα 0 στο τέλος του δεκαδικού δεν αλλάζει τον αριθμό: 3,5 = 3,50. Πέντε δέκατα είναι πενήντα εκατοστά.',
      en: 'A 0 at the end of a decimal does not change the number: 3.5 = 3.50. Five tenths is fifty hundredths.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 2,35 € και η Μαρία 2,5 €. Ποιος έχει περισσότερα χρήματα;', en: 'Nikos has €2.35 and Maria has €2.50. Who has more money?' },
    options: { el: ['ο Νίκος', 'η Μαρία', 'έχουν τα ίδια', 'δεν μπορούμε να ξέρουμε'], en: ['Nikos', 'Maria', 'they have the same', 'we cannot know'] },
    correct: 1,
    explanation: {
      el: '2,5 € = 2,50 € = 2 ευρώ και 50 λεπτά. Ο Νίκος έχει 2 ευρώ και 35 λεπτά, άρα η Μαρία έχει περισσότερα.',
      en: '€2.5 = €2.50 = 2 euros and 50 cents. Nikos has 2 euros and 35 cents, so Maria has more.',
    },
  },

  // ── 10–14: adding and subtracting ──────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 1,5 + 2,3;', en: 'What is 1.5 + 2.3?' },
    options: { el: ['3,5', '3,8', '3,35', '4,8'], en: ['3.5', '3.8', '3.35', '4.8'] },
    correct: 1,
    explanation: {
      el: '1,5 + 2,3 = 3,8. Προσθέτουμε τα ολόκληρα (1 + 2 = 3) και τα δέκατα (5 + 3 = 8).',
      en: '1.5 + 2.3 = 3.8. Add the wholes (1 + 2 = 3) and the tenths (5 + 3 = 8).',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4,7 + 2,65;', en: 'What is 4.7 + 2.65?' },
    options: { el: ['6,72', '7,25', '7,3', '7,35'], en: ['6.72', '7.25', '7.3', '7.35'] },
    correct: 3,
    explanation: {
      el: 'Γράφουμε το 4,7 ως 4,70 και βάζουμε υποδιαστολή κάτω από υποδιαστολή: 4,70 + 2,65 = 7,35.',
      en: 'Write 4.7 as 4.70 and line up the decimal points: 4.70 + 2.65 = 7.35.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5 − 1,8;', en: 'What is 5 − 1.8?' },
    options: { el: ['4,8', '3,2', '4,2', '3,8'], en: ['4.8', '3.2', '4.2', '3.8'] },
    correct: 1,
    explanation: {
      el: 'Το 5 είναι 5,0. Από το 5,0 βγάζουμε 1,8: 5,0 − 1,8 = 3,2. Σκέψου: 1,8 + 0,2 = 2 και 2 + 3 = 5.',
      en: '5 is 5.0. Take 1.8 from 5.0: 5.0 − 1.8 = 3.2. Think: 1.8 + 0.2 = 2 and 2 + 3 = 5.',
    },
  },
  {
    q: { el: 'Ο Γιώργος αγόρασε ένα τετράδιο 1,20 € και ένα μολύβι 0,45 €. Πόσα χρήματα πλήρωσε;', en: 'Giorgos bought a notebook for €1.20 and a pencil for €0.45. How much did he pay?' },
    options: { el: ['1,65 €', '1,25 €', '1,56 €', '2,65 €'], en: ['€1.65', '€1.25', '€1.56', '€2.65'] },
    correct: 0,
    explanation: {
      el: '1,20 € + 0,45 € = 1,65 €. Ένα ευρώ και 20 λεπτά συν 45 λεπτά = ένα ευρώ και 65 λεπτά.',
      en: '€1.20 + €0.45 = €1.65. One euro and 20 cents plus 45 cents = one euro and 65 cents.',
    },
  },
  {
    q: { el: 'Η Ελένη είχε 10 € και αγόρασε ένα βιβλίο που κόστιζε 6,30 €. Πόσα ρέστα πήρε;', en: 'Eleni had €10 and bought a book that cost €6.30. How much change did she get?' },
    options: { el: ['4,70 €', '4,30 €', '3,30 €', '3,70 €'], en: ['€4.70', '€4.30', '€3.30', '€3.70'] },
    correct: 3,
    explanation: {
      el: '10,00 € − 6,30 € = 3,70 €. Από τα 6,30 θέλουμε 0,70 για να φτάσουμε στα 7 και άλλα 3 για τα 10.',
      en: '€10.00 − €6.30 = €3.70. From 6.30 we need 0.70 to reach 7, then 3 more to reach 10.',
    },
  },

  // ── 15–18: × and ÷ by 10, 100, 1000 ───────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 3,47 × 10;', en: 'What is 3.47 × 10?' },
    options: { el: ['3,470', '34,7', '347', '30,47'], en: ['3.470', '34.7', '347', '30.47'] },
    correct: 1,
    explanation: {
      el: '3,47 × 10 = 34,7. Όταν πολλαπλασιάζουμε με το 10, η υποδιαστολή πάει μία θέση δεξιά. Δεν προσθέτουμε 0 στο τέλος!',
      en: '3.47 × 10 = 34.7. When we multiply by 10, the decimal point moves one place to the right. We do not add a 0 at the end!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 0,8 × 100;', en: 'What is 0.8 × 100?' },
    options: { el: ['0,800', '8', '80', '800'], en: ['0.800', '8', '80', '800'] },
    correct: 2,
    explanation: {
      el: '0,8 × 100 = 80. Το 100 έχει δύο μηδενικά, άρα η υποδιαστολή πάει δύο θέσεις δεξιά: 0,8 → 8 → 80.',
      en: '0.8 × 100 = 80. 100 has two zeros, so the point moves two places to the right: 0.8 → 8 → 80.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 56 ÷ 1000;', en: 'What is 56 ÷ 1000?' },
    options: { el: ['0,56', '5,6', '0,056', '0,0056'], en: ['0.56', '5.6', '0.056', '0.0056'] },
    correct: 2,
    explanation: {
      el: '56 ÷ 1000 = 0,056. Στη διαίρεση με το 1000 η υποδιαστολή πάει τρεις θέσεις αριστερά: 56 → 5,6 → 0,56 → 0,056.',
      en: '56 ÷ 1000 = 0.056. When dividing by 1000 the point moves three places to the left: 56 → 5.6 → 0.56 → 0.056.',
    },
  },
  {
    q: { el: 'Μια κορδέλα έχει μήκος 3,2 μέτρα. Την κόβουμε σε 10 ίσα κομμάτια. Πόσο μακρύ είναι κάθε κομμάτι;', en: 'A ribbon is 3.2 metres long. We cut it into 10 equal pieces. How long is each piece?' },
    options: { el: ['0,32 μ.', '32 μ.', '3,02 μ.', '0,032 μ.'], en: ['0.32 m', '32 m', '3.02 m', '0.032 m'] },
    correct: 0,
    explanation: {
      el: '3,2 ÷ 10 = 0,32 μ. Μοιράζουμε σε 10, άρα η υποδιαστολή πάει μία θέση αριστερά. Κάθε κομμάτι είναι 32 εκατοστά.',
      en: '3.2 ÷ 10 = 0.32 m. We share into 10, so the point moves one place to the left. Each piece is 32 centimetres.',
    },
  },
];
