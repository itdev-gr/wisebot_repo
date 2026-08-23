/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Μετρήσεις και μοτίβα
 * ==================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–3   length: m ↔ cm, km ↔ m, mixed units in one number
 *   4–5   weight: kg ↔ g, a word problem with grams to kilograms
 *   6–8   time: hours ↔ minutes, seconds ↔ minutes, reading a clock after a duration
 *   9–12  money: € ↔ λεπτά, change from a purchase, days → hours
 *   13–16 numeric and geometric patterns: continue the sequence, repeating shapes, growing squares
 *   17–18 finding the rule: input → output tables, the nth term of a sequence
 *
 * Distractors are the mistakes children actually make: wrong power of ten (×10 instead of ×100),
 * treating 100 as 60 in time, "18:75", keeping the wrong number of digits in a mixed unit.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_MEASUREMENT_PATTERNS: QuizQuestion[] = [
  // ── 1–3: length ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα εκατοστά (cm) έχει 1 μέτρο (m);', en: 'How many centimetres (cm) are in 1 metre (m)?' },
    options: { el: ['10', '100', '1.000', '1'], en: ['10', '100', '1,000', '1'] },
    correct: 1,
    explanation: {
      el: '1 m = 100 cm. Το «εκατοστό» το λέει και το όνομά του: το ένα εκατοστό του μέτρου.',
      en: '1 m = 100 cm. The name says it: a centimetre is one hundredth of a metre.',
    },
  },
  {
    q: { el: 'Πόσα μέτρα είναι τα 2,5 χιλιόμετρα (km);', en: 'How many metres are 2.5 kilometres (km)?' },
    options: { el: ['250 m', '25.000 m', '2.500 m', '2.050 m'], en: ['250 m', '25,000 m', '2,500 m', '2,050 m'] },
    correct: 2,
    explanation: {
      el: '1 km = 1.000 m, άρα 2,5 km = 2,5 × 1.000 = 2.500 m. Η υποδιαστολή πάει 3 θέσεις δεξιά.',
      en: '1 km = 1,000 m, so 2.5 km = 2.5 × 1,000 = 2,500 m. The decimal point moves 3 places right.',
    },
  },
  {
    q: { el: 'Ο Νίκος έτρεξε 3 km και 400 m. Πόσα μέτρα έτρεξε συνολικά;', en: 'Nikos ran 3 km and 400 m. How many metres did he run in total?' },
    options: { el: ['3.400 m', '340 m', '3.004 m', '3.040 m'], en: ['3,400 m', '340 m', '3,004 m', '3,040 m'] },
    correct: 0,
    explanation: {
      el: '3 km = 3.000 m. Προσθέτουμε τα 400 m: 3.000 + 400 = 3.400 m.',
      en: '3 km = 3,000 m. Add the 400 m: 3,000 + 400 = 3,400 m.',
    },
  },

  // ── 4–5: weight ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα γραμμάρια (g) έχει 1 κιλό (kg);', en: 'How many grams (g) are in 1 kilogram (kg)?' },
    options: { el: ['100', '1.000', '10', '10.000'], en: ['100', '1,000', '10', '10,000'] },
    correct: 1,
    explanation: {
      el: '1 kg = 1.000 g. Το «κιλό» σημαίνει «χίλια», όπως και στο χιλιόμετρο.',
      en: '1 kg = 1,000 g. “Kilo” means “a thousand”, just like in kilometre.',
    },
  },
  {
    q: { el: 'Η Μαρία αγόρασε 3 σακούλες μήλα. Κάθε σακούλα ζυγίζει 750 g. Πόσο ζυγίζουν όλες μαζί;', en: 'Maria bought 3 bags of apples. Each bag weighs 750 g. How much do they weigh altogether?' },
    options: { el: ['3 kg και 750 g', '2 kg και 25 g', '22 kg και 500 g', '2 kg και 250 g'], en: ['3 kg and 750 g', '2 kg and 25 g', '22 kg and 500 g', '2 kg and 250 g'] },
    correct: 3,
    explanation: {
      el: '3 × 750 g = 2.250 g. Τα 2.000 g είναι 2 kg, μένουν 250 g: 2 kg και 250 g.',
      en: '3 × 750 g = 2,250 g. 2,000 g make 2 kg, and 250 g are left: 2 kg and 250 g.',
    },
  },

  // ── 6–8: time ───────────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα λεπτά είναι 2 ώρες και 15 λεπτά;', en: 'How many minutes are 2 hours and 15 minutes?' },
    options: { el: ['215', '125', '135', '150'], en: ['215', '125', '135', '150'] },
    correct: 2,
    explanation: {
      el: '1 ώρα = 60 λεπτά, άρα 2 ώρες = 120 λεπτά. 120 + 15 = 135 λεπτά. (Όχι 215 — η ώρα δεν έχει 100 λεπτά!)',
      en: '1 hour = 60 minutes, so 2 hours = 120 minutes. 120 + 15 = 135 minutes. (Not 215 — an hour is not 100 minutes!)',
    },
  },
  {
    q: { el: 'Πόσα λεπτά είναι 180 δευτερόλεπτα;', en: 'How many minutes are 180 seconds?' },
    options: { el: ['3', '18', '30', '1,8'], en: ['3', '18', '30', '1.8'] },
    correct: 0,
    explanation: {
      el: '1 λεπτό = 60 δευτερόλεπτα. 180 ÷ 60 = 3 λεπτά.',
      en: '1 minute = 60 seconds. 180 ÷ 60 = 3 minutes.',
    },
  },
  {
    q: { el: 'Μια ταινία αρχίζει στις 17:45 και διαρκεί 1 ώρα και 30 λεπτά. Τι ώρα τελειώνει;', en: 'A film starts at 17:45 and lasts 1 hour and 30 minutes. What time does it end?' },
    options: { el: ['18:75', '19:15', '18:15', '19:45'], en: ['18:75', '19:15', '18:15', '19:45'] },
    correct: 1,
    explanation: {
      el: '17:45 + 1 ώρα = 18:45. Μετά + 30 λεπτά: 15 λεπτά μάς πάνε στις 19:00 και άλλα 15 στις 19:15.',
      en: '17:45 + 1 hour = 18:45. Then + 30 minutes: 15 minutes take us to 19:00 and 15 more to 19:15.',
    },
  },

  // ── 9–12: money and a bigger time conversion ────────────────────────────────
  {
    q: { el: 'Πόσα λεπτά του ευρώ είναι τα 3,50 €;', en: 'How many cents are €3.50?' },
    options: { el: ['35', '3.500', '350', '305'], en: ['35', '3,500', '350', '305'] },
    correct: 2,
    explanation: {
      el: '1 € = 100 λεπτά. 3,50 × 100 = 350 λεπτά.',
      en: '€1 = 100 cents. 3.50 × 100 = 350 cents.',
    },
  },
  {
    q: { el: 'Η Ελένη αγοράζει 4 τετράδια που κοστίζουν 1,20 € το καθένα και πληρώνει με 5 €. Πόσα ρέστα παίρνει;', en: 'Eleni buys 4 notebooks that cost €1.20 each and pays with €5. How much change does she get?' },
    options: { el: ['0,20 €', '0,80 €', '1,20 €', '0,02 €'], en: ['€0.20', '€0.80', '€1.20', '€0.02'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα το κόστος: 4 × 1,20 = 4,80 €. Μετά τα ρέστα: 5 − 4,80 = 0,20 €, δηλαδή 20 λεπτά.',
      en: 'First the cost: 4 × 1.20 = €4.80. Then the change: 5 − 4.80 = €0.20, that is 20 cents.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει στον κουμπαρά του 1.250 λεπτά. Πόσα ευρώ είναι;', en: 'Giorgos has 1,250 cents in his piggy bank. How many euros is that?' },
    options: { el: ['125 €', '12,50 €', '1,25 €', '12,05 €'], en: ['€125', '€12.50', '€1.25', '€12.05'] },
    correct: 1,
    explanation: {
      el: '100 λεπτά = 1 €. 1.250 ÷ 100 = 12,50 €. Η υποδιαστολή πάει 2 θέσεις αριστερά.',
      en: '100 cents = €1. 1,250 ÷ 100 = €12.50. The decimal point moves 2 places left.',
    },
  },
  {
    q: { el: 'Πόσες ώρες έχουν 3 μέρες;', en: 'How many hours are in 3 days?' },
    options: { el: ['36', '48', '72', '96'], en: ['36', '48', '72', '96'] },
    correct: 2,
    explanation: {
      el: '1 μέρα = 24 ώρες. 3 × 24 = 72 ώρες.',
      en: '1 day = 24 hours. 3 × 24 = 72 hours.',
    },
  },

  // ── 13–16: numeric and geometric patterns ──────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο; 4, 8, 12, 16, ___', en: 'Which number continues the pattern? 4, 8, 12, 16, ___' },
    options: { el: ['18', '24', '22', '20'], en: ['18', '24', '22', '20'] },
    correct: 3,
    explanation: {
      el: 'Κάθε αριθμός είναι 4 παραπάνω από τον προηγούμενο. 16 + 4 = 20.',
      en: 'Each number is 4 more than the one before. 16 + 4 = 20.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο; 2, 4, 8, 16, ___', en: 'Which number continues the pattern? 2, 4, 8, 16, ___' },
    options: { el: ['18', '24', '32', '20'], en: ['18', '24', '32', '20'] },
    correct: 2,
    explanation: {
      el: 'Εδώ δεν προσθέτουμε, διπλασιάζουμε: κάθε αριθμός είναι το προηγούμενο × 2. 16 × 2 = 32.',
      en: 'Here we do not add, we double: each number is the previous one × 2. 16 × 2 = 32.',
    },
  },
  {
    q: { el: 'Τα σχήματα επαναλαμβάνονται: τρίγωνο, τετράγωνο, τετράγωνο, κύκλος, τρίγωνο, τετράγωνο, τετράγωνο, ___. Ποιο σχήμα ακολουθεί;', en: 'The shapes repeat: triangle, square, square, circle, triangle, square, square, ___. Which shape comes next?' },
    options: { el: ['κύκλος', 'τρίγωνο', 'τετράγωνο', 'ορθογώνιο'], en: ['circle', 'triangle', 'square', 'rectangle'] },
    correct: 0,
    explanation: {
      el: 'Η ομάδα που επαναλαμβάνεται έχει 4 σχήματα: τρίγωνο, τετράγωνο, τετράγωνο, κύκλος. Μετά το δεύτερο τετράγωνο έρχεται πάντα ο κύκλος.',
      en: 'The repeating group has 4 shapes: triangle, square, square, circle. After the second square always comes the circle.',
    },
  },
  {
    q: { el: 'Φτιάχνουμε σχήματα με τετραγωνάκια: το σχήμα 1 έχει 1, το σχήμα 2 έχει 4, το σχήμα 3 έχει 9. Πόσα τετραγωνάκια έχει το σχήμα 5;', en: 'We build shapes with little squares: shape 1 has 1, shape 2 has 4, shape 3 has 9. How many little squares does shape 5 have?' },
    options: { el: ['25', '16', '15', '20'], en: ['25', '16', '15', '20'] },
    correct: 0,
    explanation: {
      el: 'Κάθε σχήμα είναι ένα μεγάλο τετράγωνο: 1 × 1, 2 × 2, 3 × 3… Το σχήμα 5 έχει 5 × 5 = 25 τετραγωνάκια.',
      en: 'Each shape is a big square: 1 × 1, 2 × 2, 3 × 3… Shape 5 has 5 × 5 = 25 little squares.',
    },
  },

  // ── 17–18: finding the rule ────────────────────────────────────────────────
  {
    q: { el: 'Μια μηχανή αλλάζει αριθμούς: το 3 γίνεται 7, το 5 γίνεται 11, το 8 γίνεται 17. Ποιος είναι ο κανόνας;', en: 'A machine changes numbers: 3 becomes 7, 5 becomes 11, 8 becomes 17. What is the rule?' },
    options: { el: ['+ 4', '× 2 + 1', '× 3 − 2', '× 2 − 1'], en: ['+ 4', '× 2 + 1', '× 3 − 2', '× 2 − 1'] },
    correct: 1,
    explanation: {
      el: 'Δοκιμάζουμε τον κανόνα σε όλα τα ζευγάρια: 3 × 2 + 1 = 7, 5 × 2 + 1 = 11, 8 × 2 + 1 = 17. Το «+ 4» δουλεύει μόνο για το 3.',
      en: 'Test the rule on every pair: 3 × 2 + 1 = 7, 5 × 2 + 1 = 11, 8 × 2 + 1 = 17. “+ 4” only works for 3.',
    },
  },
  {
    q: { el: 'Το μοτίβο 5, 8, 11, 14, … συνεχίζεται με τον ίδιο κανόνα. Ποιος είναι ο 20ός αριθμός;', en: 'The pattern 5, 8, 11, 14, … continues with the same rule. What is the 20th number?' },
    options: { el: ['60', '65', '59', '62'], en: ['60', '65', '59', '62'] },
    correct: 3,
    explanation: {
      el: 'Κάθε φορά προσθέτουμε 3. Ο κανόνας για τη θέση ν είναι 3 × ν + 2. Για ν = 20: 3 × 20 + 2 = 62.',
      en: 'We add 3 each time. The rule for position n is 3 × n + 2. For n = 20: 3 × 20 + 2 = 62.',
    },
  },
];
