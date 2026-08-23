/**
 * Α' Δημοτικού · Γλώσσα · Πρώτες Λέξεις
 * ======================================
 * Original questions for a child of 6–7 (curriculum topics only, no textbook text).
 *
 * What the unit covers, in order:
 *   1–6   reading short words and matching them to meaning (animal, fruit, flies…),
 *         first letter / last letter of a word
 *   7–13  building words from syllables, counting syllables, the missing syllable
 *   14–18 sight words: και, the articles ο / η / το, με, στο — inside tiny sentences
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_FIRST_WORDS: QuizQuestion[] = [
  // ── 1–6: read a short word, match it to its meaning ────────────────────────
  {
    q: { el: 'Ποια λέξη είναι ζώο;', en: 'Which word is an animal?' },
    options: { el: ['γάτα', 'μήλο', 'καρέκλα', 'ήλιος'], en: ['γάτα', 'μήλο', 'καρέκλα', 'ήλιος'] },
    correct: 0,
    explanation: {
      el: 'Η γάτα είναι ζώο. Το μήλο είναι φρούτο, η καρέκλα είναι έπιπλο και ο ήλιος είναι στον ουρανό.',
      en: '«γάτα» means cat — an animal. «μήλο» is an apple, «καρέκλα» is a chair and «ήλιος» is the sun.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι φρούτο;', en: 'Which word is a fruit?' },
    options: { el: ['μπάλα', 'πόρτα', 'μήλο', 'παπούτσι'], en: ['μπάλα', 'πόρτα', 'μήλο', 'παπούτσι'] },
    correct: 2,
    explanation: {
      el: 'Το μήλο είναι φρούτο και το τρώμε. Η μπάλα, η πόρτα και το παπούτσι δεν τρώγονται!',
      en: '«μήλο» is an apple — a fruit we eat. «μπάλα» (ball), «πόρτα» (door) and «παπούτσι» (shoe) are not food!',
    },
  },
  {
    q: { el: 'Ποιο από αυτά πετάει;', en: 'Which of these can fly?' },
    options: { el: ['ψάρι', 'σκύλος', 'άλογο', 'πουλί'], en: ['ψάρι', 'σκύλος', 'άλογο', 'πουλί'] },
    correct: 3,
    explanation: {
      el: 'Το πουλί έχει φτερά και πετάει. Το ψάρι κολυμπάει, ο σκύλος και το άλογο τρέχουν.',
      en: '«πουλί» is a bird — it has wings and flies. «ψάρι» (fish) swims, «σκύλος» (dog) and «άλογο» (horse) run.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει από Μ;', en: 'Which word starts with the letter Μ?' },
    options: { el: ['νερό', 'μαμά', 'λάδι', 'κότα'], en: ['νερό', 'μαμά', 'λάδι', 'κότα'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη «μαμά» αρχίζει από Μ: μ-α-μ-ά. Το «νερό» αρχίζει από Ν, το «λάδι» από Λ, η «κότα» από Κ.',
      en: '«μαμά» (mum) starts with Μ. «νερό» starts with Ν, «λάδι» with Λ and «κότα» with Κ.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με το ίδιο γράμμα όπως η λέξη «παπί»;', en: 'Which word starts with the same letter as «παπί»?' },
    options: { el: ['ποντίκι', 'τόπι', 'κότα', 'μέλι'], en: ['ποντίκι', 'τόπι', 'κότα', 'μέλι'] },
    correct: 0,
    explanation: {
      el: 'Το «παπί» αρχίζει από Π. Το «ποντίκι» αρχίζει κι αυτό από Π. Το «τόπι» έχει Π μέσα, αλλά αρχίζει από Τ.',
      en: '«παπί» (duckling) starts with Π, and so does «ποντίκι» (mouse). «τόπι» has a Π inside, but it starts with Τ.',
    },
  },
  {
    q: { el: 'Ποια λέξη τελειώνει σε -α;', en: 'Which word ends in -α?' },
    options: { el: ['ήλιος', 'παιδί', 'θάλασσα', 'δέντρο'], en: ['ήλιος', 'παιδί', 'θάλασσα', 'δέντρο'] },
    correct: 2,
    explanation: {
      el: 'Η «θάλασσα» τελειώνει σε -α. Κοίτα πάντα το τελευταίο γράμμα: ήλιο-ς, παιδ-ί, δέντρ-ο.',
      en: '«θάλασσα» (sea) ends in -α. Always look at the last letter: ήλιο-ς, παιδ-ί, δέντρ-ο.',
    },
  },

  // ── 7–13: building words from syllables ───────────────────────────────────
  {
    q: { el: 'Ένωσε τις συλλαβές: νε + ρό. Ποια λέξη βγαίνει;', en: 'Join the syllables: νε + ρό. Which word do you get?' },
    options: { el: ['ρόνε', 'νερό', 'νέρο', 'ερό'], en: ['ρόνε', 'νερό', 'νέρο', 'ερό'] },
    correct: 1,
    explanation: {
      el: 'νε + ρό = νερό! Ο τόνος μένει εκεί που ήταν, στο «ρό».',
      en: 'νε + ρό = νερό (water)! The accent stays where it was, on «ρό».',
    },
  },
  {
    q: { el: 'Ένωσε τις συλλαβές: σα + λά + τα. Ποια λέξη βγαίνει;', en: 'Join the syllables: σα + λά + τα. Which word do you get?' },
    options: { el: ['σατάλα', 'λασάτα', 'σαλάτα', 'ταλάσα'], en: ['σατάλα', 'λασάτα', 'σαλάτα', 'ταλάσα'] },
    correct: 2,
    explanation: {
      el: 'σα + λά + τα = σαλάτα. Διαβάζουμε τις συλλαβές με τη σειρά, από αριστερά προς τα δεξιά.',
      en: 'σα + λά + τα = σαλάτα (salad). We read the syllables in order, from left to right.',
    },
  },
  {
    q: { el: 'Ένωσε τις συλλαβές: πα + τά + τα. Ποια λέξη βγαίνει;', en: 'Join the syllables: πα + τά + τα. Which word do you get?' },
    options: { el: ['τατάπα', 'παπάτα', 'ταπάτα', 'πατάτα'], en: ['τατάπα', 'παπάτα', 'ταπάτα', 'πατάτα'] },
    correct: 3,
    explanation: {
      el: 'πα + τά + τα = πατάτα. Πρόσεξε: η πρώτη συλλαβή είναι «πα» και οι άλλες δύο «τα».',
      en: 'πα + τά + τα = πατάτα (potato). Careful: the first syllable is «πα» and the other two are «τα».',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «παγωτό»;', en: 'How many syllables does the word «παγωτό» have?' },
    options: { el: ['2', '3', '4', '1'], en: ['2', '3', '4', '1'] },
    correct: 1,
    explanation: {
      el: 'πα-γω-τό: τρεις συλλαβές. Χτύπα παλαμάκια σε κάθε συλλαβή και μέτρα!',
      en: 'πα-γω-τό: three syllables. Clap once for each syllable and count!',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «γάτα»;', en: 'How many syllables does the word «γάτα» have?' },
    options: { el: ['2', '1', '3', '4'], en: ['2', '1', '3', '4'] },
    correct: 0,
    explanation: {
      el: 'γά-τα: δύο συλλαβές. Κάθε συλλαβή έχει ένα φωνήεν: α και α.',
      en: 'γά-τα: two syllables. Each syllable has one vowel: α and α.',
    },
  },
  {
    q: { el: 'Ποια συλλαβή λείπει; κα – ___ – κλα = καρέκλα', en: 'Which syllable is missing? κα – ___ – κλα = καρέκλα' },
    options: { el: ['ρέ', 'ρα', 'λέ', 'κέ'], en: ['ρέ', 'ρα', 'λέ', 'κέ'] },
    correct: 0,
    explanation: {
      el: 'κα – ρέ – κλα = καρέκλα. Η μεσαία συλλαβή είναι «ρέ» και εκεί πάει ο τόνος.',
      en: 'κα – ρέ – κλα = καρέκλα (chair). The middle syllable is «ρέ» and that is where the accent goes.',
    },
  },
  {
    q: { el: 'Βάλε τις συλλαβές στη σωστή σειρά: δι – λου – λού', en: 'Put the syllables in the right order: δι – λου – λού' },
    options: { el: ['διλουλού', 'λούλουδι', 'λουλούδι', 'λουδιλού'], en: ['διλουλού', 'λούλουδι', 'λουλούδι', 'λουδιλού'] },
    correct: 2,
    explanation: {
      el: 'λου + λού + δι = λουλούδι. Ο τόνος είναι στη μεσαία συλλαβή: λου-ΛΟΥ-δι.',
      en: 'λου + λού + δι = λουλούδι (flower). The accent is on the middle syllable: λου-ΛΟΥ-δι.',
    },
  },

  // ── 14–18: sight words in tiny sentences ──────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['κε', 'και', 'καί', 'κοι'], en: ['κε', 'και', 'καί', 'κοι'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη «και» γράφεται με αι και δεν παίρνει τόνο, γιατί έχει μόνο μία συλλαβή.',
      en: 'The word «και» (and) is written with αι and has no accent, because it has only one syllable.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «Η Ελένη ___ ο Νίκος παίζουν.»', en: 'Which word is missing? «Η Ελένη ___ ο Νίκος παίζουν.»' },
    options: { el: ['με', 'και', 'στο', 'από'], en: ['με', 'και', 'στο', 'από'] },
    correct: 1,
    explanation: {
      el: '«Η Ελένη και ο Νίκος παίζουν.» Το «και» ενώνει δύο πρόσωπα ή δύο πράγματα.',
      en: '«Η Ελένη και ο Νίκος παίζουν.» — Eleni and Nikos are playing. «και» (and) joins two people or two things.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «___ γάτα κοιμάται.»', en: 'Which word is missing? «___ γάτα κοιμάται.»' },
    options: { el: ['Ο', 'Η', 'Το', 'Οι'], en: ['Ο', 'Η', 'Το', 'Οι'] },
    correct: 1,
    explanation: {
      el: '«Η γάτα κοιμάται.» Λέμε «η γάτα», όπως λέμε «η μαμά» και «η πόρτα».',
      en: '«Η γάτα κοιμάται.» — the cat is sleeping. We say «η γάτα», just like «η μαμά» and «η πόρτα».',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «Το παιδί παίζει ___ την μπάλα.»', en: 'Which word is missing? «Το παιδί παίζει ___ την μπάλα.»' },
    options: { el: ['με', 'και', 'σε', 'για'], en: ['με', 'και', 'σε', 'για'] },
    correct: 0,
    explanation: {
      el: '«Το παιδί παίζει με την μπάλα.» Το «με» δείχνει με τι παίζουμε.',
      en: '«Το παιδί παίζει με την μπάλα.» — the child plays with the ball. «με» means with.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «Ο Γιώργος πάει ___ σχολείο.»', en: 'Which word is missing? «Ο Γιώργος πάει ___ σχολείο.»' },
    options: { el: ['στη', 'στον', 'στο', 'σε'], en: ['στη', 'στον', 'στο', 'σε'] },
    correct: 2,
    explanation: {
      el: '«Ο Γιώργος πάει στο σχολείο.» Λέμε «το σχολείο», γι\' αυτό λέμε «στο σχολείο».',
      en: '«Ο Γιώργος πάει στο σχολείο.» — George goes to school. We say «το σχολείο», so we say «στο σχολείο».',
    },
  },
];
