/**
 * Β' Δημοτικού · Γλώσσα · Ορθογραφία — «Spelling Basics»
 * ======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One short sentence per stem.
 *
 * What the unit covers, in order:
 *   1–6   the vowel pairs αι / ει / οι / ου — what they sound like, which word is right
 *   7–9   double consonants (σσ, λλ, μμ) — and the words that have only one
 *   10–14 the everyday endings: ο → -ος, η → -η, το → -ι
 *   15–18 capital letters: what they look like, names, the start of a sentence
 *
 * Distractors are the real mistakes of this age: writing the sound (πεδί, ίναι),
 * mixing ι/η/υ/οι at the end of a word, doubling a letter that is single (καλλά).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_SPELLING_BASICS: QuizQuestion[] = [
  // ── 1–6: the vowel pairs αι / ει / οι / ου ──────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['παιδί', 'πεδί', 'πιδί', 'παιδύ'], en: ['παιδί', 'πεδί', 'πιδί', 'παιδύ'] },
    correct: 0,
    explanation: {
      el: 'Η λέξη «παιδί» γράφεται με «αι». Τα γράμματα «αι» μαζί ακούγονται σαν «ε».',
      en: 'The word «παιδί» (child) is written with «αι». The letters «αι» together sound like «ε».',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['ήναι', 'είναι', 'ίναι', 'οίναι'], en: ['ήναι', 'είναι', 'ίναι', 'οίναι'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη «είναι» γράφεται με «ει» στην αρχή και «αι» στο τέλος. Τη γράφουμε πολύ συχνά, γι\' αυτό τη μαθαίνουμε απέξω!',
      en: '«είναι» (is) is written with «ει» at the start and «αι» at the end. We write it so often that we learn it by heart!',
    },
  },
  {
    q: { el: 'Πώς γράφεται σωστά η λέξη;', en: 'How is the word written correctly?' },
    options: { el: ['κιμάμαι', 'κειμάμαι', 'κοιμάμαι', 'κυμάμαι'], en: ['κιμάμαι', 'κειμάμαι', 'κοιμάμαι', 'κυμάμαι'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη «κοιμάμαι» γράφεται με «οι». Τα γράμματα «οι» μαζί ακούγονται σαν «ι».',
      en: '«κοιμάμαι» (I sleep) is written with «οι». The letters «οι» together sound like «ι».',
    },
  },
  {
    q: { el: 'Ποια γράμματα λείπουν; λ__λούδι', en: 'Which letters are missing? λ__λούδι' },
    options: { el: ['ο', 'υ', 'ου', 'ω'], en: ['ο', 'υ', 'ου', 'ω'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη είναι «λουλούδι». Ο ήχος «ου» γράφεται πάντα με δύο γράμματα: ο και υ μαζί.',
      en: 'The word is «λουλούδι» (flower). The sound «ου» is always written with two letters: ο and υ together.',
    },
  },
  {
    q: { el: 'Τα γράμματα «αι» μαζί ακούγονται σαν…', en: 'The letters «αι» together sound like…' },
    options: { el: ['ε', 'α', 'ι', 'ο'], en: ['ε', 'α', 'ι', 'ο'] },
    correct: 0,
    explanation: {
      el: 'Το «αι» ακούγεται σαν «ε»: παίζω, παιδί, και. Το «ει» και το «οι» ακούγονται σαν «ι».',
      en: '«αι» sounds like «ε»: παίζω, παιδί, και. «ει» and «οι» sound like «ι».',
    },
  },
  {
    q: { el: 'Ο Γιώργος ___ μπάλα. Ποια λέξη είναι σωστή;', en: 'Ο Γιώργος ___ μπάλα. (George plays ball.) Which word is correct?' },
    options: { el: ['πέζει', 'παίζη', 'παίζι', 'παίζει'], en: ['πέζει', 'παίζη', 'παίζι', 'παίζει'] },
    correct: 3,
    explanation: {
      el: 'Η λέξη είναι «παίζει»: «αι» στην αρχή και «ει» στο τέλος. Τα ρήματα που λέμε για «αυτός» τελειώνουν σε «-ει».',
      en: 'The word is «παίζει»: «αι» at the start and «ει» at the end. Verbs for «he/she» end in «-ει».',
    },
  },

  // ── 7–9: double consonants ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς γράφεται σωστά η λέξη;', en: 'How is the word written correctly?' },
    options: { el: ['θάλασα', 'θάλασσα', 'θάλλασα', 'θάλλασσα'], en: ['θάλασα', 'θάλασσα', 'θάλλασα', 'θάλλασσα'] },
    correct: 1,
    explanation: {
      el: 'Η «θάλασσα» γράφεται με δύο «σ» και ένα «λ». Μερικές λέξεις έχουν δύο ίδια γράμματα στη σειρά.',
      en: '«θάλασσα» (sea) is written with two «σ» and one «λ». Some words have two of the same letter in a row.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει δύο ίδια γράμματα στη σειρά;', en: 'Which word has two of the same letter in a row?' },
    options: { el: ['άλλος', 'άλογο', 'αλάτι', 'άλμα'], en: ['άλλος', 'άλογο', 'αλάτι', 'άλμα'] },
    correct: 0,
    explanation: {
      el: 'Το «άλλος» γράφεται με δύο «λ». Το άλογο, το αλάτι και το άλμα έχουν μόνο ένα.',
      en: '«άλλος» (other) is written with two «λ». άλογο, αλάτι and άλμα have only one.',
    },
  },
  {
    q: { el: 'Ποια λέξη γράφεται με ένα «λ» μόνο;', en: 'Which word is written with only one «λ»?' },
    options: { el: ['άλλος', 'αλλά', 'καλά', 'πολλά'], en: ['άλλος', 'αλλά', 'καλά', 'πολλά'] },
    correct: 2,
    explanation: {
      el: 'Το «καλά» έχει ένα «λ». Προσοχή: άλλος, αλλά και πολλά έχουν δύο!',
      en: '«καλά» (well) has one «λ». Careful: άλλος, αλλά and πολλά have two!',
    },
  },

  // ── 10–14: the endings -ος / -η / -ι ───────────────────────────────────────
  {
    q: { el: 'Πώς τελειώνει η λέξη; ο φίλ__', en: 'How does the word end? ο φίλ__ (the friend)' },
    options: { el: ['ως', 'ος', 'ους', 'ης'], en: ['ως', 'ος', 'ους', 'ης'] },
    correct: 1,
    explanation: {
      el: 'Οι λέξεις με το «ο» μπροστά τελειώνουν σε «-ος» με όμικρον: ο φίλος, ο σκύλος, ο κήπος.',
      en: 'Words that take «ο» (the, masculine) end in «-ος» with omicron: ο φίλος, ο σκύλος, ο κήπος.',
    },
  },
  {
    q: { el: 'Πώς τελειώνει η λέξη; η αδελφ__', en: 'How does the word end? η αδελφ__ (the sister)' },
    options: { el: ['ι', 'η', 'ει', 'υ'], en: ['ι', 'η', 'ει', 'υ'] },
    correct: 1,
    explanation: {
      el: 'Οι λέξεις με το «η» μπροστά τελειώνουν συνήθως σε «-η» με ήτα: η αδελφή, η αυλή, η Ελένη.',
      en: 'Words that take «η» (the, feminine) usually end in «-η» with eta: η αδελφή, η αυλή, η Ελένη.',
    },
  },
  {
    q: { el: 'Πώς τελειώνει η λέξη; το ψωμ__', en: 'How does the word end? το ψωμ__ (the bread)' },
    options: { el: ['η', 'ει', 'υ', 'ι'], en: ['η', 'ει', 'υ', 'ι'] },
    correct: 3,
    explanation: {
      el: 'Οι λέξεις με το «το» μπροστά τελειώνουν συνήθως σε «-ι» με γιώτα: το ψωμί, το παιδί, το σπίτι.',
      en: 'Words that take «το» (the, neuter) usually end in «-ι» with iota: το ψωμί, το παιδί, το σπίτι.',
    },
  },
  {
    q: { el: 'Ποιο είναι γραμμένο σωστά;', en: 'Which one is written correctly?' },
    options: { el: ['το σπίτι', 'το σπίτη', 'το σπίτοι', 'το σπίτυ'], en: ['το σπίτι', 'το σπίτη', 'το σπίτοι', 'το σπίτυ'] },
    correct: 0,
    explanation: {
      el: 'Το «σπίτι» παίρνει «το» μπροστά, άρα τελειώνει σε «-ι». Κοίτα το μικρό «το» και θα βρεις το τέλος!',
      en: '«σπίτι» (house) takes «το», so it ends in «-ι». Look at the little word «το» and you will find the ending!',
    },
  },
  {
    q: { el: 'Η Ελένη είναι πολύ ___. Ποια λέξη είναι σωστή;', en: 'Η Ελένη είναι πολύ ___. (Eleni is very kind.) Which word is correct?' },
    options: { el: ['καλί', 'καλοί', 'καλή', 'καλεί'], en: ['καλί', 'καλοί', 'καλή', 'καλεί'] },
    correct: 2,
    explanation: {
      el: 'Μιλάμε για την Ελένη, μια λέξη με «η». Γι\' αυτό γράφουμε «καλή» με ήτα, όπως «η αδελφή».',
      en: 'We are talking about Eleni, an «η» word. So we write «καλή» with eta, like «η αδελφή».',
    },
  },

  // ── 15–18: capital letters ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιο γράμμα είναι κεφαλαίο;', en: 'Which letter is a capital letter?' },
    options: { el: ['α', 'β', 'Γ', 'δ'], en: ['α', 'β', 'Γ', 'δ'] },
    correct: 2,
    explanation: {
      el: 'Το «Γ» είναι κεφαλαίο γάμα. Τα κεφαλαία είναι τα μεγάλα γράμματα: Α, Β, Γ, Δ…',
      en: '«Γ» is a capital gamma. Capitals are the big letters: Α, Β, Γ, Δ…',
    },
  },
  {
    q: { el: 'Πώς γράφουμε το όνομα της φίλης μας;', en: 'How do we write our friend\'s name?' },
    options: { el: ['μαρία', 'ΜΑρία', 'μΑρία', 'Μαρία'], en: ['μαρία', 'ΜΑρία', 'μΑρία', 'Μαρία'] },
    correct: 3,
    explanation: {
      el: 'Τα ονόματα αρχίζουν πάντα με κεφαλαίο: Μαρία, Νίκος, Ελένη. Μόνο το πρώτο γράμμα είναι κεφαλαίο.',
      en: 'Names always start with a capital letter: Μαρία, Νίκος, Ελένη. Only the first letter is a capital.',
    },
  },
  {
    q: { el: 'Πότε βάζουμε κεφαλαίο γράμμα;', en: 'When do we use a capital letter?' },
    options: { el: ['στην αρχή της πρότασης', 'στη μέση της λέξης', 'σε κάθε λέξη', 'μετά από κόμμα'], en: ['at the start of a sentence', 'in the middle of a word', 'in every word', 'after a comma'] },
    correct: 0,
    explanation: {
      el: 'Κάθε πρόταση αρχίζει με κεφαλαίο γράμμα. Κεφαλαίο βάζουμε και στα ονόματα ανθρώπων και πόλεων.',
      en: 'Every sentence starts with a capital letter. We also use capitals for the names of people and cities.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['ο νίκος μένει στην αθήνα.', 'Ο νίκος μένει στην Αθήνα.', 'Ο Νίκος μένει στην Αθήνα.', 'ο Νίκος Μένει στην Αθήνα.'], en: ['ο νίκος μένει στην αθήνα.', 'Ο νίκος μένει στην Αθήνα.', 'Ο Νίκος μένει στην Αθήνα.', 'ο Νίκος Μένει στην Αθήνα.'] },
    correct: 2,
    explanation: {
      el: 'Κεφαλαίο στην αρχή («Ο»), στο όνομα («Νίκος») και στην πόλη («Αθήνα»). Το «μένει» είναι απλή λέξη, μένει με μικρό.',
      en: 'Capital at the start («Ο»), on the name («Νίκος») and on the city («Αθήνα»). «μένει» (lives) is an ordinary word, so it stays lowercase.',
    },
  },
];
