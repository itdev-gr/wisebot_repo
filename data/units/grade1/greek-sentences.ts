/**
 * Α' Δημοτικού · Γλώσσα · Φτιάχνω Προτάσεις
 * ==========================================
 * Original questions for a child of 6–7 — one short sentence per stem, everyday words.
 * What the unit covers, in the order a Α' class meets it:
 *   1–6   the capital letter at the start of a sentence (and of a name)
 *   7–12  full stop «.» for telling, question mark «;» for asking
 *   13–18 putting words in order to make a sentence
 * Distractors are the real mistakes: small letter at the start, a capital in the
 * middle, full stop on a question, the Greek question mark mixed up with «.» or «,».
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_SENTENCES: QuizQuestion[] = [
  // ── 1–6: the capital letter ────────────────────────────────────────────────
  {
    q: { el: 'Με τι γράμμα αρχίζει μια πρόταση;', en: 'What kind of letter does a sentence start with?' },
    options: { el: ['Με κεφαλαίο γράμμα', 'Με μικρό γράμμα', 'Με αριθμό', 'Με τελεία'], en: ['With a capital letter', 'With a small letter', 'With a number', 'With a full stop'] },
    correct: 0,
    explanation: {
      el: 'Κάθε πρόταση αρχίζει με κεφαλαίο γράμμα. Έτσι βλέπουμε πού ξεκινάει.',
      en: 'Every sentence starts with a capital letter. That is how we see where it begins.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Ο Νίκος τρέχει.', 'ο Νίκος τρέχει.', 'ο νίκος τρέχει.', 'Ο Νίκος Τρέχει.'], en: ['Ο Νίκος τρέχει.', 'ο Νίκος τρέχει.', 'ο νίκος τρέχει.', 'Ο Νίκος Τρέχει.'] },
    correct: 0,
    explanation: {
      el: 'Η πρόταση αρχίζει με κεφαλαίο «Ο». Το όνομα Νίκος παίρνει κι αυτό κεφαλαίο, αλλά το «τρέχει» όχι.',
      en: 'The sentence starts with a capital «Ο». The name Νίκος also gets a capital, but «τρέχει» does not.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «___ γάτα κοιμάται.»', en: 'Which word is missing? «___ γάτα κοιμάται.»' },
    options: { el: ['η', 'Ο', 'Η', 'ο'], en: ['η', 'Ο', 'Η', 'ο'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «η γάτα», και επειδή είναι η πρώτη λέξη της πρότασης γράφουμε κεφαλαίο: «Η γάτα κοιμάται.»',
      en: 'We say «η γάτα», and because it is the first word of the sentence we write a capital: «Η γάτα κοιμάται.»',
    },
  },
  {
    q: { el: 'Ποιο όνομα είναι γραμμένο σωστά;', en: 'Which name is written correctly?' },
    options: { el: ['ελένη', 'Ελένη', 'Ελενη', 'ΕΛένη'], en: ['ελένη', 'Ελένη', 'Ελενη', 'ΕΛένη'] },
    correct: 1,
    explanation: {
      el: 'Τα ονόματα αρχίζουν πάντα με κεφαλαίο: Ελένη. Μόνο το πρώτο γράμμα είναι κεφαλαίο, και δεν ξεχνάμε τον τόνο.',
      en: 'Names always start with a capital letter: Ελένη. Only the first letter is a capital, and we do not forget the accent.',
    },
  },
  {
    q: { el: 'Πόσες λέξεις θέλουν κεφαλαίο; «ο γιώργος έχει ένα σκύλο.»', en: 'How many words need a capital letter? «ο γιώργος έχει ένα σκύλο.»' },
    options: { el: ['Μία', 'Δύο', 'Τρεις', 'Καμία'], en: ['One', 'Two', 'Three', 'None'] },
    correct: 1,
    explanation: {
      el: 'Δύο: το «Ο» γιατί είναι η πρώτη λέξη, και το «Γιώργος» γιατί είναι όνομα. «Ο Γιώργος έχει ένα σκύλο.»',
      en: 'Two: «Ο» because it is the first word, and «Γιώργος» because it is a name. «Ο Γιώργος έχει ένα σκύλο.»',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση το κεφαλαίο είναι στη σωστή θέση;', en: 'In which sentence is the capital letter in the right place?' },
    options: { el: ['Σήμερα βρέχει.', 'σήμερα Βρέχει.', 'σήμερα βρέχει.', 'Σήμερα Βρέχει.'], en: ['Σήμερα βρέχει.', 'σήμερα Βρέχει.', 'σήμερα βρέχει.', 'Σήμερα Βρέχει.'] },
    correct: 0,
    explanation: {
      el: 'Το κεφαλαίο μπαίνει μόνο στην αρχή: «Σήμερα βρέχει.» Η δεύτερη λέξη γράφεται με μικρό.',
      en: 'The capital goes only at the start: «Σήμερα βρέχει.» The second word is written with a small letter.',
    },
  },

  // ── 7–12: full stop and question mark ─────────────────────────────────────
  {
    q: { el: 'Τι βάζουμε στο τέλος μιας πρότασης που λέει κάτι;', en: 'What do we put at the end of a sentence that tells us something?' },
    options: { el: ['Κόμμα (,)', 'Ερωτηματικό (;)', 'Τίποτα', 'Τελεία (.)'], en: ['A comma (,)', 'A question mark (;)', 'Nothing', 'A full stop (.)'] },
    correct: 3,
    explanation: {
      el: 'Όταν η πρόταση λέει κάτι, στο τέλος βάζουμε τελεία. Η τελεία λέει «εδώ τελειώνω».',
      en: 'When a sentence tells us something, we put a full stop at the end. The full stop says “I stop here”.',
    },
  },
  {
    q: { el: 'Τι λείπει στο τέλος; «Πού είναι η μπάλα ___»', en: 'What is missing at the end? «Πού είναι η μπάλα ___»' },
    options: { el: ['.', ';', ',', '!'], en: ['.', ';', ',', '!'] },
    correct: 1,
    explanation: {
      el: 'Η πρόταση ρωτάει κάτι, άρα βάζουμε ερωτηματικό: «Πού είναι η μπάλα;» Στα ελληνικά το ερωτηματικό είναι το «;».',
      en: 'The sentence asks something, so we put a question mark: «Πού είναι η μπάλα;» In Greek the question mark is «;».',
    },
  },
  {
    q: { el: 'Τι λείπει στο τέλος; «Το σπίτι μας είναι μεγάλο ___»', en: 'What is missing at the end? «Το σπίτι μας είναι μεγάλο ___»' },
    options: { el: ['.', ';', ',', '!'], en: ['.', ';', ',', '!'] },
    correct: 0,
    explanation: {
      el: 'Η πρόταση δεν ρωτάει, λέει κάτι. Άρα βάζουμε τελεία: «Το σπίτι μας είναι μεγάλο.»',
      en: 'The sentence does not ask, it tells. So we put a full stop: «Το σπίτι μας είναι μεγάλο.»',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι ερώτηση;', en: 'Which sentence is a question?' },
    options: { el: ['Θέλεις παγωτό;', 'Θέλω παγωτό.', 'Το παγωτό είναι κρύο.', 'Η Ελένη τρώει παγωτό.'], en: ['Θέλεις παγωτό;', 'Θέλω παγωτό.', 'Το παγωτό είναι κρύο.', 'Η Ελένη τρώει παγωτό.'] },
    correct: 0,
    explanation: {
      el: '«Θέλεις παγωτό;» ρωτάει κάτι και περιμένει απάντηση, γι\' αυτό έχει ερωτηματικό. Οι άλλες λένε κάτι και έχουν τελεία.',
      en: '«Θέλεις παγωτό;» asks something and waits for an answer, so it has a question mark. The others tell something and have a full stop.',
    },
  },
  {
    q: { el: 'Ποιο σημάδι δείχνει ότι ρωτάμε κάτι;', en: 'Which mark shows that we are asking something?' },
    options: { el: ['.', ',', ';', '-'], en: ['.', ',', ';', '-'] },
    correct: 2,
    explanation: {
      el: 'Το ερωτηματικό «;» μπαίνει στο τέλος κάθε ερώτησης. Η τελεία «.» μπαίνει όταν λέμε κάτι.',
      en: 'The question mark «;» goes at the end of every question. The full stop «.» goes when we tell something.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Πώς σε λένε;', 'Πώς σε λένε.', 'πώς σε λένε;', 'Πώς σε λένε,'], en: ['Πώς σε λένε;', 'Πώς σε λένε.', 'πώς σε λένε;', 'Πώς σε λένε,'] },
    correct: 0,
    explanation: {
      el: 'Κεφαλαίο στην αρχή και ερωτηματικό στο τέλος, γιατί ρωτάμε: «Πώς σε λένε;»',
      en: 'A capital at the start and a question mark at the end, because we are asking: «Πώς σε λένε;»',
    },
  },

  // ── 13–18: words in order ─────────────────────────────────────────────────
  {
    q: { el: 'Βάλε τις λέξεις στη σειρά: «παίζει – Ο Νίκος – μπάλα»', en: 'Put the words in order: «παίζει – Ο Νίκος – μπάλα»' },
    options: { el: ['Μπάλα Νίκος ο παίζει.', 'Ο παίζει Νίκος μπάλα.', 'Ο Νίκος παίζει μπάλα.', 'Παίζει ο μπάλα Νίκος.'], en: ['Μπάλα Νίκος ο παίζει.', 'Ο παίζει Νίκος μπάλα.', 'Ο Νίκος παίζει μπάλα.', 'Παίζει ο μπάλα Νίκος.'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα ποιος (Ο Νίκος), μετά τι κάνει (παίζει), μετά τι (μπάλα): «Ο Νίκος παίζει μπάλα.»',
      en: 'First who (Ο Νίκος), then what he does (παίζει), then what (μπάλα): «Ο Νίκος παίζει μπάλα.»',
    },
  },
  {
    q: { el: 'Βάλε τις λέξεις στη σειρά: «τρώει – μήλο – Η Μαρία – ένα»', en: 'Put the words in order: «τρώει – μήλο – Η Μαρία – ένα»' },
    options: { el: ['Η Μαρία ένα τρώει μήλο.', 'Η Μαρία τρώει ένα μήλο.', 'Μήλο ένα η Μαρία τρώει.', 'Τρώει η ένα Μαρία μήλο.'], en: ['Η Μαρία ένα τρώει μήλο.', 'Η Μαρία τρώει ένα μήλο.', 'Μήλο ένα η Μαρία τρώει.', 'Τρώει η ένα Μαρία μήλο.'] },
    correct: 1,
    explanation: {
      el: '«Η Μαρία τρώει ένα μήλο.» Το «ένα» πάει δίπλα στο «μήλο», γιατί λέμε «ένα μήλο».',
      en: '«Η Μαρία τρώει ένα μήλο.» The word «ένα» goes next to «μήλο», because we say «ένα μήλο» (an apple).',
    },
  },
  {
    q: { el: 'Ποια λέξη μπαίνει πρώτη; «σκύλος – ο – γαβγίζει»', en: 'Which word goes first? «σκύλος – ο – γαβγίζει»' },
    options: { el: ['σκύλος', 'γαβγίζει', 'Ο', 'ο'], en: ['σκύλος', 'γαβγίζει', 'Ο', 'ο'] },
    correct: 2,
    explanation: {
      el: 'Η πρόταση είναι «Ο σκύλος γαβγίζει.» Το «ο» μπαίνει πρώτο, και επειδή είναι πρώτο γίνεται κεφαλαίο «Ο».',
      en: 'The sentence is «Ο σκύλος γαβγίζει.» The word «ο» goes first, and because it is first it becomes a capital «Ο».',
    },
  },
  {
    q: { el: 'Ποια λέξη μπαίνει τελευταία; «στο – Εμείς – πάμε – σχολείο»', en: 'Which word goes last? «στο – Εμείς – πάμε – σχολείο»' },
    options: { el: ['πάμε', 'σχολείο', 'στο', 'Εμείς'], en: ['πάμε', 'σχολείο', 'στο', 'Εμείς'] },
    correct: 1,
    explanation: {
      el: 'Η πρόταση είναι «Εμείς πάμε στο σχολείο.» Το «στο» πάει πάντα πριν από το «σχολείο».',
      en: 'The sentence is «Εμείς πάμε στο σχολείο.» The word «στο» always goes before «σχολείο».',
    },
  },
  {
    q: { el: 'Βάλε τις λέξεις στη σειρά: «κοιμάται – Το μωρό – ήσυχα»', en: 'Put the words in order: «κοιμάται – Το μωρό – ήσυχα»' },
    options: { el: ['Το ήσυχα μωρό κοιμάται.', 'Μωρό το κοιμάται ήσυχα.', 'Κοιμάται το ήσυχα μωρό.', 'Το μωρό κοιμάται ήσυχα.'], en: ['Το ήσυχα μωρό κοιμάται.', 'Μωρό το κοιμάται ήσυχα.', 'Κοιμάται το ήσυχα μωρό.', 'Το μωρό κοιμάται ήσυχα.'] },
    correct: 3,
    explanation: {
      el: '«Το μωρό κοιμάται ήσυχα.» Το «ήσυχα» λέει πώς κοιμάται, γι\' αυτό πάει μετά το «κοιμάται».',
      en: '«Το μωρό κοιμάται ήσυχα.» The word «ήσυχα» (quietly) says how the baby sleeps, so it goes after «κοιμάται».',
    },
  },
  {
    q: { el: 'Φτιάξε τη σωστή ερώτηση: «έχεις – Πόσα – αδέρφια»', en: 'Make the correct question: «έχεις – Πόσα – αδέρφια»' },
    options: { el: ['Πόσα αδέρφια έχεις;', 'Πόσα έχεις αδέρφια.', 'Αδέρφια έχεις πόσα;', 'Πόσα αδέρφια έχεις.'], en: ['Πόσα αδέρφια έχεις;', 'Πόσα έχεις αδέρφια.', 'Αδέρφια έχεις πόσα;', 'Πόσα αδέρφια έχεις.'] },
    correct: 0,
    explanation: {
      el: 'Σωστή σειρά, κεφαλαίο στην αρχή και ερωτηματικό στο τέλος: «Πόσα αδέρφια έχεις;» Η ερώτηση δεν τελειώνει ποτέ με τελεία.',
      en: 'Right order, a capital at the start and a question mark at the end: «Πόσα αδέρφια έχεις;» A question never ends with a full stop.',
    },
  },
];
