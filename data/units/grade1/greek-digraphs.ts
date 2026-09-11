/**
 * Α' Δημοτικού · Γλώσσα · Δίψηφα
 * ===============================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * Two letters, one sound: the vowel digraphs ου, αι, ει, οι and the consonant pairs
 * μπ, ντ, γκ, τσ, τζ. Every word is a word a six-year-old already says.
 * What the unit covers, in order:
 *   1–5   hearing the vowel digraphs: which word has «ου» / «αι» / «ει» / «οι», what «αι» sounds like
 *   6–10  the missing digraph inside a word (λ__λούδι, είμ__, __ναι, τ__χος, παπ__τσι)
 *   11–15 the consonant pairs: which word starts with μπ / ντ / τσ / τζ, which has γκ
 *   16–18 spelling the everyday words παιδί, είναι and μπάλα correctly
 * Distractors are the other digraphs that make the same sound (ει/οι/ι, αι/ε),
 * words where the pair sits in the middle instead of the start, and misspellings by ear.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_DIGRAPHS: QuizQuestion[] = [
  // ── 1–5: hearing the vowel digraphs ───────────────────────────────────────
  {
    q: { el: 'Σε ποια λέξη ακούγεται το «ου»;', en: 'In which word do you hear «ου»?' },
    options: { el: ['κουτί', 'μήλο', 'σπίτι', 'γάτα'], en: ['κουτί', 'μήλο', 'σπίτι', 'γάτα'] },
    correct: 0,
    explanation: {
      el: 'Κου-τί: το «ο» και το «υ» μαζί κάνουν τον ήχο «ου». Δύο γράμματα, ένας ήχος!',
      en: 'Κου-τί (box): the «ο» and the «υ» together make the sound «ου». Two letters, one sound!',
    },
  },
  {
    q: { el: 'Σε ποια λέξη ακούγεται το «αι»;', en: 'In which word do you hear «αι»?' },
    options: { el: ['λεμόνι', 'παιχνίδι', 'ήλιος', 'τόπι'], en: ['λεμόνι', 'παιχνίδι', 'ήλιος', 'τόπι'] },
    correct: 1,
    explanation: {
      el: 'Παι-χνί-δι: στην αρχή έχει το «αι», που ακούγεται σαν «ε». Το γράφουμε όμως με α και ι.',
      en: 'Παι-χνί-δι (toy): at the start it has «αι», which sounds like «ε». But we write it with α and ι.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει το «ει»;', en: 'Which word has «ει»?' },
    options: { el: ['νερό', 'μάτι', 'κλειδί', 'κότα'], en: ['νερό', 'μάτι', 'κλειδί', 'κότα'] },
    correct: 2,
    explanation: {
      el: 'Κλει-δί: το «ε» και το «ι» μαζί κάνουν «ει», που ακούγεται σαν «ι».',
      en: 'Κλει-δί (key): the «ε» and the «ι» together make «ει», which sounds like «ι».',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει το «οι»;', en: 'Which word has «οι»?' },
    options: { el: ['ψωμί', 'τυρί', 'κοιτάζω', 'μέλι'], en: ['ψωμί', 'τυρί', 'κοιτάζω', 'μέλι'] },
    correct: 2,
    explanation: {
      el: 'Κοι-τά-ζω: αρχίζει με «κοι». Το «οι» ακούγεται σαν «ι», αλλά γράφεται με ο και ι.',
      en: 'Κοι-τά-ζω (I look): it starts with «κοι». The «οι» sounds like «ι», but is written with ο and ι.',
    },
  },
  {
    q: { el: 'Το «αι» στη λέξη «παιδί» ακούγεται σαν ποιο γράμμα;', en: 'The «αι» in the word «παιδί» sounds like which letter?' },
    options: { el: ['α', 'ι', 'ε', 'ο'], en: ['α', 'ι', 'ε', 'ο'] },
    correct: 2,
    explanation: {
      el: 'Το «αι» ακούγεται σαν «ε»: παι-δί λέγεται «πε-δί». Γι\' αυτό προσέχουμε πώς γράφεται!',
      en: 'The «αι» sounds like «ε»: παι-δί is said “πε-δί”. That is why we watch how it is spelled!',
    },
  },

  // ── 6–10: the missing digraph ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο λείπει; λ__λούδι (το φυτό με τα όμορφα πέταλα)', en: 'Which is missing? λ__λούδι (the plant with the pretty petals)' },
    options: { el: ['ου', 'αι', 'οι', 'ει'], en: ['ου', 'αι', 'οι', 'ει'] },
    correct: 0,
    explanation: {
      el: 'Λου-λού-δι. Έχει δύο φορές το «ου»: λου και λού. Ο τόνος μπαίνει στο δεύτερο.',
      en: 'Λου-λού-δι (flower). It has «ου» twice: λου and λού. The accent goes on the second one.',
    },
  },
  {
    q: { el: 'Ποιο λείπει; είμ__ («Εγώ είμ__ παιδί.»)', en: 'Which is missing? είμ__ («Εγώ είμ__ παιδί.» — I am a child.)' },
    options: { el: ['ει', 'αι', 'οι', 'ου'], en: ['ει', 'αι', 'οι', 'ου'] },
    correct: 1,
    explanation: {
      el: 'Εί-μαι. Η λέξη τελειώνει σε «αι», που ακούγεται σαν «ε». Το «είμαι» το γράφουμε πάντα έτσι.',
      en: 'Εί-μαι (I am). The word ends in «αι», which sounds like «ε». We always write «είμαι» this way.',
    },
  },
  {
    q: { el: 'Ποιο λείπει; __ναι («Ο ήλιος __ναι ζεστός.»)', en: 'Which is missing? __ναι («Ο ήλιος __ναι ζεστός.» — The sun is warm.)' },
    options: { el: ['αι', 'οι', 'ει', 'ου'], en: ['αι', 'οι', 'ει', 'ου'] },
    correct: 2,
    explanation: {
      el: 'Εί-ναι. Αρχίζει με «ει» και τελειώνει με «αι». Είναι από τις λέξεις που γράφουμε πιο συχνά!',
      en: 'Εί-ναι (is). It starts with «ει» and ends with «αι». It is one of the words we write most often!',
    },
  },
  {
    q: { el: 'Ποιο λείπει; τ__χος (το έχει το σπίτι γύρω γύρω)', en: 'Which is missing? τ__χος (a house has this all around it — a wall)' },
    options: { el: ['ει', 'αι', 'ου', 'οι'], en: ['ει', 'αι', 'ου', 'οι'] },
    correct: 3,
    explanation: {
      el: 'Τοί-χος. Ακούγεται «τί-χος», αλλά γράφεται με «οι». Τέτοιες λέξεις τις μαθαίνουμε με τα μάτια.',
      en: 'Τοί-χος (wall). It sounds like “τί-χος”, but is written with «οι». We learn words like this with our eyes.',
    },
  },
  {
    q: { el: 'Ποιο λείπει; παπ__τσι (το φοράμε στο πόδι)', en: 'Which is missing? παπ__τσι (we wear it on our foot — a shoe)' },
    options: { el: ['ει', 'ου', 'αι', 'οι'], en: ['ει', 'ου', 'αι', 'οι'] },
    correct: 1,
    explanation: {
      el: 'Πα-πού-τσι. Στη μέση έχει το «ου» με τον τόνο. Στο τέλος έχει και το «τσ»!',
      en: 'Πα-πού-τσι (shoe). In the middle it has «ου» with the accent. At the end it also has «τσ»!',
    },
  },

  // ── 11–15: the consonant pairs ────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη αρχίζει με «μπ»;', en: 'Which word starts with «μπ»?' },
    options: { el: ['πατάτα', 'βάζο', 'ντομάτα', 'μπανάνα'], en: ['πατάτα', 'βάζο', 'ντομάτα', 'μπανάνα'] },
    correct: 3,
    explanation: {
      el: 'Μπα-νά-να. Το «μ» και το «π» μαζί κάνουν τον ήχο «μπ». Ούτε «μ» ούτε «π» μόνο του.',
      en: 'Μπα-νά-να (banana). The «μ» and the «π» together make the sound «μπ». Neither «μ» nor «π» alone.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με «ντ»;', en: 'Which word starts with «ντ»?' },
    options: { el: ['μπότα', 'γκολ', 'ντομάτα', 'τσάντα'], en: ['μπότα', 'γκολ', 'ντομάτα', 'τσάντα'] },
    correct: 2,
    explanation: {
      el: 'Ντο-μά-τα αρχίζει με «ντ». Η τσάντα έχει «ντ», αλλά στη μέση, όχι στην αρχή.',
      en: 'Ντο-μά-τα (tomato) starts with «ντ». Τσάντα (bag) has «ντ» too, but in the middle, not at the start.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει το «γκ»;', en: 'Which word has «γκ»?' },
    options: { el: ['αγκαλιά', 'μπλε', 'ντύνομαι', 'τζάμι'], en: ['αγκαλιά', 'μπλε', 'ντύνομαι', 'τζάμι'] },
    correct: 0,
    explanation: {
      el: 'Α-γκα-λιά: το «γ» και το «κ» μαζί κάνουν τον ήχο «γκ». Τον ακούμε και στο «γκολ»!',
      en: 'Α-γκα-λιά (hug): the «γ» and the «κ» together make the sound «γκ». We hear it in «γκολ» (goal) too!',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με «τσ»;', en: 'Which word starts with «τσ»?' },
    options: { el: ['τζάκι', 'τσάι', 'ντουλάπα', 'μπότα'], en: ['τζάκι', 'τσάι', 'ντουλάπα', 'μπότα'] },
    correct: 1,
    explanation: {
      el: 'Τσά-ι αρχίζει με «τσ». Το «τσ» είναι πιο απαλό από το «τζ» — σαν το «τσιμπάω».',
      en: 'Τσά-ι (tea) starts with «τσ». The «τσ» is softer than «τζ» — like in «τσιμπάω» (I pinch).',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με «τζ»;', en: 'Which word starts with «τζ»?' },
    options: { el: ['τσίχλα', 'μπισκότο', 'ντους', 'τζάμι'], en: ['τσίχλα', 'μπισκότο', 'ντους', 'τζάμι'] },
    correct: 3,
    explanation: {
      el: 'Τζά-μι αρχίζει με «τζ». Το «τζ» βουίζει λίγο, σαν μέλισσα: τζζζ! Το «τσ» της τσίχλας δεν βουίζει.',
      en: 'Τζά-μι (window pane) starts with «τζ». The «τζ» buzzes a little, like a bee: τζζζ! The «τσ» of τσίχλα (gum) does not buzz.',
    },
  },

  // ── 16–18: spelling everyday words ────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (το μικρό αγόρι ή κορίτσι)', en: 'Which word is spelled correctly? (a young boy or girl — a child)' },
    options: { el: ['πεδί', 'πειδί', 'ποιδί', 'παιδί'], en: ['πεδί', 'πειδί', 'ποιδί', 'παιδί'] },
    correct: 3,
    explanation: {
      el: 'Παιδί: γράφεται με «αι», αν και ακούγεται «ε». Θυμήσου: παιδί, παιδιά, παιδικός.',
      en: 'Παιδί (child): it is written with «αι», although it sounds like «ε». Remember: παιδί, παιδιά, παιδικός.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; «Η μαμά ___ στην κουζίνα.»', en: 'Which word is spelled correctly? «Η μαμά ___ στην κουζίνα.» (Mum is in the kitchen.)' },
    options: { el: ['ίνε', 'είνε', 'είναι', 'ίναι'], en: ['ίνε', 'είνε', 'είναι', 'ίναι'] },
    correct: 2,
    explanation: {
      el: 'Είναι: «ει» στην αρχή και «αι» στο τέλος. Ακούγεται «ίνε», αλλά γράφεται με δύο δίψηφα!',
      en: 'Είναι (is): «ει» at the start and «αι» at the end. It sounds like “ίνε”, but is written with two digraphs!',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (το στρογγυλό παιχνίδι που κλωτσάμε)', en: 'Which word is spelled correctly? (the round toy we kick — a ball)' },
    options: { el: ['πάλα', 'μπάλα', 'μπάλλα', 'μμπάλα'], en: ['πάλα', 'μπάλα', 'μπάλλα', 'μμπάλα'] },
    correct: 1,
    explanation: {
      el: 'Μπάλα: αρχίζει με «μπ» και έχει ένα «λ». Το «μπ» είναι δύο γράμματα, αλλά ένας ήχος.',
      en: 'Μπάλα (ball): it starts with «μπ» and has one «λ». The «μπ» is two letters, but one sound.',
    },
  },
];
