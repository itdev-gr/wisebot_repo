/**
 * Γ' Δημοτικού · Μαθηματικά · Πρώτοι δεκαδικοί
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Greek uses the decimal comma (2,5), English the point (2.5).
 *
 * What the unit covers, in order:
 *   1–4   tenths: splitting a whole into 10 parts, reading 0,1 and 2,5, the decimal point
 *   5–8   hundredths: 0,01, reading 4,25, comparing decimals (0,5 vs 0,45), 0,3 = 0,30
 *   9–11  money as decimals: 1,50 €, 2,05 €, 75 λεπτά = 0,75 €
 *   12–14 simple decimal addition and subtraction with tenths
 *   15–18 word problems with money: buying, change, totals
 *
 * Distractors are real child mistakes: "more digits = bigger", writing 2,5 for 2 euros
 * and 5 cents, adding tenths as whole numbers, forgetting to borrow.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_DECIMALS: QuizQuestion[] = [
  // ── 1–4: tenths and the decimal point ──────────────────────────────────────
  {
    q: { el: 'Κόβουμε μια σοκολάτα σε 10 ίσα κομμάτια. Το ένα κομμάτι είναι…', en: 'We cut a chocolate bar into 10 equal pieces. One piece is…' },
    options: { el: ['ένα δέκατο', 'ένα εκατοστό', 'ένα μισό', 'δέκα ακέραιες'], en: ['one tenth', 'one hundredth', 'one half', 'ten wholes'] },
    correct: 0,
    explanation: {
      el: 'Όταν το ένα ακέραιο γίνεται 10 ίσα κομμάτια, κάθε κομμάτι είναι ένα δέκατο. Το γράφουμε 0,1.',
      en: 'When one whole is split into 10 equal pieces, each piece is one tenth. We write it 0.1.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε «ένα δέκατο» με ψηφία;', en: 'How do we write “one tenth” in digits?' },
    options: { el: ['10', '1,0', '0,1', '0,01'], en: ['10', '1.0', '0.1', '0.01'] },
    correct: 2,
    explanation: {
      el: 'Ένα δέκατο = 0,1. Το 0 πριν από την υποδιαστολή λέει «καμία ακέραιη» και το 1 μετά λέει «ένα δέκατο».',
      en: 'One tenth = 0.1. The 0 before the point says “no wholes” and the 1 after it says “one tenth”.',
    },
  },
  {
    q: { el: 'Πώς διαβάζουμε τον αριθμό 2,5;', en: 'How do we read the number 2.5?' },
    options: { el: ['δύο ακέραιες και πέντε δέκατα', 'είκοσι πέντε', 'δύο και πέντε ακέραιες', 'πέντε ακέραιες και δύο δέκατα'], en: ['two and five tenths', 'twenty-five', 'two and five wholes', 'five and two tenths'] },
    correct: 0,
    explanation: {
      el: 'Πριν από την υποδιαστολή είναι οι ακέραιες (2), μετά είναι τα δέκατα (5): δύο ακέραιες και πέντε δέκατα.',
      en: 'Before the decimal point are the wholes (2), after it are the tenths (5): two and five tenths.',
    },
  },
  {
    q: { el: 'Στον αριθμό 3,7 ποιο ψηφίο δείχνει τα δέκατα;', en: 'In the number 3.7, which digit shows the tenths?' },
    options: { el: ['το 3', 'το 7', 'η υποδιαστολή', 'κανένα'], en: ['the 3', 'the 7', 'the decimal point', 'none'] },
    correct: 1,
    explanation: {
      el: 'Το ψηφίο αμέσως μετά την υποδιαστολή είναι τα δέκατα. Στο 3,7 τα δέκατα είναι το 7.',
      en: 'The digit right after the decimal point is the tenths. In 3.7 the tenths digit is 7.',
    },
  },

  // ── 5–8: hundredths and comparing ─────────────────────────────────────────
  {
    q: { el: 'Κόβουμε το ένα ακέραιο σε 100 ίσα κομμάτια. Το ένα κομμάτι γράφεται…', en: 'We split one whole into 100 equal pieces. One piece is written…' },
    options: { el: ['0,1', '100', '0,01', '1,00'], en: ['0.1', '100', '0.01', '1.00'] },
    correct: 2,
    explanation: {
      el: 'Ένα από τα 100 κομμάτια είναι ένα εκατοστό = 0,01. Τα εκατοστά είναι το δεύτερο ψηφίο μετά την υποδιαστολή.',
      en: 'One of 100 pieces is one hundredth = 0.01. Hundredths are the second digit after the decimal point.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι «τέσσερις ακέραιες και είκοσι πέντε εκατοστά»;', en: 'Which number is “four and twenty-five hundredths”?' },
    options: { el: ['425', '4,25', '42,5', '4,205'], en: ['425', '4.25', '42.5', '4.205'] },
    correct: 1,
    explanation: {
      el: '4 ακέραιες, υποδιαστολή, και μετά 25 εκατοστά: 4,25.',
      en: '4 wholes, a decimal point, then 25 hundredths: 4.25.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι μεγαλύτερος: το 0,5 ή το 0,45;', en: 'Which number is bigger: 0.5 or 0.45?' },
    options: { el: ['το 0,45, γιατί έχει περισσότερα ψηφία', 'είναι ίσοι', 'το 0,5', 'δεν μπορούμε να ξέρουμε'], en: ['0.45, because it has more digits', 'they are equal', '0.5', 'we cannot tell'] },
    correct: 2,
    explanation: {
      el: 'Κοιτάμε πρώτα τα δέκατα: 5 δέκατα είναι πιο πολλά από 4 δέκατα. Άρα 0,5 > 0,45. Τα πιο πολλά ψηφία δεν σημαίνουν μεγαλύτερο αριθμό!',
      en: 'Look at the tenths first: 5 tenths is more than 4 tenths. So 0.5 > 0.45. More digits does not mean a bigger number!',
    },
  },
  {
    q: { el: 'Το 0,3 και το 0,30…', en: '0.3 and 0.30…' },
    options: { el: ['είναι ίσα', 'το 0,30 είναι δέκα φορές μεγαλύτερο', 'το 0,3 είναι μεγαλύτερο', 'διαφέρουν κατά 0,27'], en: ['are equal', '0.30 is ten times bigger', '0.3 is bigger', 'differ by 0.27'] },
    correct: 0,
    explanation: {
      el: '3 δέκατα είναι το ίδιο με 30 εκατοστά. Ένα 0 στο τέλος του δεκαδικού δεν αλλάζει τον αριθμό: 0,3 = 0,30.',
      en: '3 tenths is the same as 30 hundredths. A 0 at the end of a decimal does not change it: 0.3 = 0.30.',
    },
  },

  // ── 9–11: money as decimals ───────────────────────────────────────────────
  {
    q: { el: 'Μια τιμή γράφει 1,50 €. Πόσα είναι αυτά;', en: 'A price says €1.50. How much is that?' },
    options: { el: ['1 ευρώ και 5 λεπτά', '1 ευρώ και 50 λεπτά', '15 ευρώ', '150 ευρώ'], en: ['1 euro and 5 cents', '1 euro and 50 cents', '15 euros', '150 euros'] },
    correct: 1,
    explanation: {
      el: 'Πριν από την υποδιαστολή είναι τα ευρώ (1), μετά τα λεπτά (50). Το 1 ευρώ έχει 100 λεπτά.',
      en: 'Before the decimal point are the euros (1), after it the cents (50). One euro has 100 cents.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 2 ευρώ και 5 λεπτά. Πώς το γράφουμε;', en: 'Nikos has 2 euros and 5 cents. How do we write it?' },
    options: { el: ['2,5 €', '2,50 €', '2,05 €', '25 €'], en: ['€2.5', '€2.50', '€2.05', '€25'] },
    correct: 2,
    explanation: {
      el: 'Τα λεπτά θέλουν πάντα δύο ψηφία. 5 λεπτά γράφονται 05, άρα 2,05 €. (Το 2,50 € είναι 2 ευρώ και 50 λεπτά!)',
      en: 'Cents always take two digits. 5 cents is written 05, so €2.05. (€2.50 would be 2 euros and 50 cents!)',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 75 λεπτά. Πόσα ευρώ είναι;', en: 'Eleni has 75 cents. How many euros is that?' },
    options: { el: ['7,5 €', '75 €', '0,075 €', '0,75 €'], en: ['€7.5', '€75', '€0.075', '€0.75'] },
    correct: 3,
    explanation: {
      el: '75 λεπτά είναι λιγότερα από 1 ευρώ, γι\' αυτό μπροστά βάζουμε 0: 0,75 €.',
      en: '75 cents is less than 1 euro, so we put a 0 in front: €0.75.',
    },
  },

  // ── 12–14: adding and subtracting tenths ──────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 0,2 + 0,5;', en: 'What is 0.2 + 0.5?' },
    options: { el: ['0,7', '0,10', '7', '0,25'], en: ['0.7', '0.10', '7', '0.25'] },
    correct: 0,
    explanation: {
      el: '2 δέκατα + 5 δέκατα = 7 δέκατα = 0,7. Προσθέτουμε τα δέκατα όπως προσθέτουμε μήλα!',
      en: '2 tenths + 5 tenths = 7 tenths = 0.7. We add tenths just like we add apples!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 1,3 + 2,4;', en: 'What is 1.3 + 2.4?' },
    options: { el: ['3,34', '3,7', '37', '4,7'], en: ['3.34', '3.7', '37', '4.7'] },
    correct: 1,
    explanation: {
      el: 'Ακέραιες με ακέραιες: 1 + 2 = 3. Δέκατα με δέκατα: 3 + 4 = 7. Άρα 3,7.',
      en: 'Wholes with wholes: 1 + 2 = 3. Tenths with tenths: 3 + 4 = 7. So 3.7.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 0,9 − 0,4;', en: 'What is 0.9 − 0.4?' },
    options: { el: ['0,4', '5', '1,3', '0,5'], en: ['0.4', '5', '1.3', '0.5'] },
    correct: 3,
    explanation: {
      el: '9 δέκατα − 4 δέκατα = 5 δέκατα = 0,5. Μην ξεχάσεις το 0 και την υποδιαστολή!',
      en: '9 tenths − 4 tenths = 5 tenths = 0.5. Do not forget the 0 and the decimal point!',
    },
  },

  // ── 15–18: word problems with money ───────────────────────────────────────
  {
    q: { el: 'Η Μαρία αγοράζει ένα μολύβι 1,20 € και μια γόμα 0,50 €. Πόσα πληρώνει;', en: 'Maria buys a pencil for €1.20 and an eraser for €0.50. How much does she pay?' },
    options: { el: ['1,25 €', '1,70 €', '0,70 €', '6,20 €'], en: ['€1.25', '€1.70', '€0.70', '€6.20'] },
    correct: 1,
    explanation: {
      el: '1,20 + 0,50 = 1,70 €. Βάζουμε τις υποδιαστολές τη μία κάτω από την άλλη και προσθέτουμε.',
      en: '1.20 + 0.50 = €1.70. Line up the decimal points one under the other and add.',
    },
  },
  {
    q: { el: 'Ο Γιώργος δίνει 2 € για έναν χυμό που κοστίζει 1,40 €. Πόσα ρέστα παίρνει;', en: 'Giorgos pays €2 for a juice that costs €1.40. How much change does he get?' },
    options: { el: ['0,60 €', '1,60 €', '0,40 €', '3,40 €'], en: ['€0.60', '€1.60', '€0.40', '€3.40'] },
    correct: 0,
    explanation: {
      el: '2,00 − 1,40 = 0,60 €. Σκέψου: από το 1,40 θέλουμε 60 λεπτά ακόμα για να φτάσουμε τα 2 ευρώ.',
      en: '2.00 − 1.40 = €0.60. Think: from 1.40 we need 60 more cents to reach 2 euros.',
    },
  },
  {
    q: { el: 'Ένα τετράδιο κοστίζει 2,25 € και ένα κουτί μπογιές 1,50 €. Πόσο κοστίζουν μαζί;', en: 'A notebook costs €2.25 and a box of paints costs €1.50. How much do they cost together?' },
    options: { el: ['3,25 €', '3,30 €', '0,75 €', '3,75 €'], en: ['€3.25', '€3.30', '€0.75', '€3.75'] },
    correct: 3,
    explanation: {
      el: 'Ευρώ: 2 + 1 = 3. Λεπτά: 25 + 50 = 75. Μαζί 3,75 €.',
      en: 'Euros: 2 + 1 = 3. Cents: 25 + 50 = 75. Together €3.75.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 5 € και αγοράζει ένα βιβλίο 3,45 €. Πόσα χρήματα της μένουν;', en: 'Eleni has €5 and buys a book for €3.45. How much money does she have left?' },
    options: { el: ['2,45 €', '1,55 €', '2,55 €', '1,45 €'], en: ['€2.45', '€1.55', '€2.55', '€1.45'] },
    correct: 1,
    explanation: {
      el: '5,00 − 3,45 = 1,55 €. Από το 3,45 μέχρι το 4 θέλουμε 0,55, και από το 4 μέχρι το 5 άλλο 1 ευρώ: 1,55.',
      en: '5.00 − 3.45 = €1.55. From 3.45 to 4 we need 0.55, and from 4 to 5 another 1 euro: 1.55.',
    },
  },
];
