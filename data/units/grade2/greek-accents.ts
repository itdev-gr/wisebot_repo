/**
 * Β' Δημοτικού · Γλώσσα · Ο Τόνος
 * ===============================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Options are Greek words/forms on both sides.
 *
 * What the unit covers, in order:
 *   1–4   spotting the correctly accented word (the accent on the right syllable)
 *   5–8   the rules: accent goes on a vowel, finding the stressed syllable, accent
 *         on the second letter of «ου»/«αι»
 *   9–12  monosyllables take no accent — and the exception «ή»
 *   13–18 question words «πού» / «πώς» with an accent vs «που» / «πως» without
 *
 * Distractors are the mistakes children actually make: accent on the wrong
 * syllable, no accent at all, accent on a monosyllable, «που» in a question.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_ACCENTS: QuizQuestion[] = [
  // ── 1–4: which word is written correctly? ────────────────────────────────
  {
    q: { el: 'Ποια λέξη έχει τον τόνο στη σωστή θέση;', en: 'Which word has the accent in the right place?' },
    options: { el: ['μηλό', 'μήλο', 'μηλο', 'μήλό'], en: ['μηλό', 'μήλο', 'μηλο', 'μήλό'] },
    correct: 1,
    explanation: {
      el: 'Λέμε «μή-λο», άρα ο τόνος μπαίνει στο η: μήλο. Κάθε λέξη παίρνει μόνο έναν τόνο.',
      en: 'We say “MI-lo”, so the accent goes on the η: μήλο. Every word gets only one accent.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι σωστά γραμμένη;', en: 'Which word is written correctly?' },
    options: { el: ['παιδι', 'παίδι', 'παιδί', 'πάιδι'], en: ['παιδι', 'παίδι', 'παιδί', 'πάιδι'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «παι-ΔΙ», με δύναμη στο τέλος. Ο τόνος μπαίνει στο ι: παιδί.',
      en: 'We say “pai-DI”, with the stress at the end. The accent goes on the ι: παιδί.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι σωστά γραμμένη;', en: 'Which word is written correctly?' },
    options: { el: ['θαλασσά', 'θαλάσσα', 'θάλασσα', 'θαλασσα'], en: ['θαλασσά', 'θαλάσσα', 'θάλασσα', 'θαλασσα'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «ΘΑ-λασ-σα», με δύναμη στην αρχή. Ο τόνος μπαίνει στο πρώτο α: θάλασσα.',
      en: 'We say “THA-las-sa”, with the stress at the start. The accent goes on the first α: θάλασσα.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι σωστά γραμμένη;', en: 'Which word is written correctly?' },
    options: { el: ['σχόλειο', 'σχολειό', 'σχολείο', 'σχολειο'], en: ['σχόλειο', 'σχολειό', 'σχολείο', 'σχολειο'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «σχο-ΛΕΙ-ο». Στο «ει» ο τόνος μπαίνει στο δεύτερο γράμμα: σχολείο.',
      en: 'We say “scho-LEI-o”. In «ει» the accent goes on the second letter: σχολείο.',
    },
  },

  // ── 5–8: the rules ───────────────────────────────────────────────────────
  {
    q: { el: 'Ο τόνος μπαίνει πάντα πάνω σε…', en: 'The accent always goes on…' },
    options: { el: ['ένα σύμφωνο', 'ένα φωνήεν', 'το πρώτο γράμμα', 'το τελευταίο γράμμα'], en: ['a consonant', 'a vowel', 'the first letter', 'the last letter'] },
    correct: 1,
    explanation: {
      el: 'Ο τόνος μπαίνει μόνο πάνω σε φωνήεν (α, ε, η, ι, ο, υ, ω). Ποτέ πάνω σε σύμφωνο!',
      en: 'The accent goes only on a vowel (α, ε, η, ι, ο, υ, ω). Never on a consonant!',
    },
  },
  {
    q: { el: 'Η λέξη «πατάτα» τονίζεται…', en: 'The word «πατάτα» is stressed on…' },
    options: { el: ['στην πρώτη συλλαβή', 'στη δεύτερη συλλαβή', 'στην τρίτη συλλαβή', 'σε καμία συλλαβή'], en: ['the first syllable', 'the second syllable', 'the third syllable', 'no syllable'] },
    correct: 1,
    explanation: {
      el: 'πα-ΤΑ-τα: η δεύτερη συλλαβή ακούγεται πιο δυνατά. Εκεί μπαίνει ο τόνος.',
      en: 'pa-TA-ta: the second syllable sounds the loudest. That is where the accent goes.',
    },
  },
  {
    q: { el: 'Σε ποια συλλαβή μπαίνει ο τόνος στη λέξη «καλημέρα»;', en: 'Which syllable gets the accent in «καλημέρα»?' },
    options: { el: ['κα', 'λη', 'μέ', 'ρα'], en: ['κα', 'λη', 'μέ', 'ρα'] },
    correct: 2,
    explanation: {
      el: 'κα-λη-ΜΕ-ρα: λέμε τη λέξη αργά και ακούμε ποια συλλαβή «φωνάζει». Είναι το «με».',
      en: 'ka-li-ME-ra: say the word slowly and hear which syllable “shouts”. It is «με».',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι σωστά γραμμένη;', en: 'Which word is written correctly?' },
    options: { el: ['λουλούδι', 'λούλουδι', 'λόυλουδι', 'λουλουδί'], en: ['λουλούδι', 'λούλουδι', 'λόυλουδι', 'λουλουδί'] },
    correct: 0,
    explanation: {
      el: 'Λέμε «λου-ΛΟΥ-δι». Στο «ου» ο τόνος μπαίνει πάντα στο υ, το δεύτερο γράμμα: λουλούδι.',
      en: 'We say “lou-LOU-di”. In «ου» the accent always goes on the υ, the second letter: λουλούδι.',
    },
  },

  // ── 9–12: monosyllables ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ΔΕΝ παίρνει τόνο;', en: 'Which word does NOT take an accent?' },
    options: { el: ['εδώ', 'καλά', 'και', 'πολύ'], en: ['εδώ', 'καλά', 'και', 'πολύ'] },
    correct: 2,
    explanation: {
      el: 'Το «και» έχει μία μόνο συλλαβή. Οι λέξεις με μία συλλαβή δεν παίρνουν τόνο.',
      en: '«και» has only one syllable. Words with one syllable do not take an accent.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστά γραμμένη;', en: 'Which sentence is written correctly?' },
    options: { el: ['Τό παιδί παίζει.', 'Το παιδι παίζει.', 'Το παιδί παιζει.', 'Το παιδί παίζει.'], en: ['Τό παιδί παίζει.', 'Το παιδι παίζει.', 'Το παιδί παιζει.', 'Το παιδί παίζει.'] },
    correct: 3,
    explanation: {
      el: 'Το «το» έχει μία συλλαβή και δεν παίρνει τόνο. Το «παιδί» και το «παίζει» έχουν δύο συλλαβές και παίρνουν.',
      en: '«το» has one syllable and takes no accent. «παιδί» and «παίζει» have two syllables and do.',
    },
  },
  {
    q: { el: 'Ποιες λέξεις δεν παίρνουν τόνο;', en: 'Which words do not take an accent?' },
    options: { el: ['οι λέξεις με δύο συλλαβές', 'οι λέξεις με μία συλλαβή', 'τα ονόματα', 'οι μεγάλες λέξεις'], en: ['words with two syllables', 'words with one syllable', 'names', 'long words'] },
    correct: 1,
    explanation: {
      el: 'Οι μονοσύλλαβες λέξεις (με, σε, να, τι, δεν) δεν παίρνουν τόνο. Όλες οι άλλες παίρνουν.',
      en: 'One-syllable words (με, σε, να, τι, δεν) take no accent. All the others do.',
    },
  },
  {
    q: { el: 'Ποια λέξη παίρνει τόνο, αν και έχει μία συλλαβή;', en: 'Which word takes an accent, even though it has one syllable?' },
    options: { el: ['με', 'να', 'το', 'ή'], en: ['με', 'να', 'το', 'ή'] },
    correct: 3,
    explanation: {
      el: 'Το «ή» (μήλο ή πορτοκάλι;) παίρνει τόνο για να μην μπερδεύεται με το «η» (η μαμά).',
      en: '«ή» (meaning “or”) takes an accent so it is not confused with «η» (meaning “the”).',
    },
  },

  // ── 13–18: πού / πώς ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη λείπει; «___ είναι η μπάλα;»', en: 'Which word is missing? «___ είναι η μπάλα;» (Where is the ball?)' },
    options: { el: ['Που', 'Πού', 'Πως', 'Πόυ'], en: ['Που', 'Πού', 'Πως', 'Πόυ'] },
    correct: 1,
    explanation: {
      el: 'Όταν ρωτάμε, το «πού» παίρνει τόνο: Πού είναι η μπάλα;',
      en: 'When we ask a question, «πού» takes an accent: Πού είναι η μπάλα;',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «___ σε λένε;»', en: 'Which word is missing? «___ σε λένε;» (What is your name?)' },
    options: { el: ['Πως', 'Πού', 'Πός', 'Πώς'], en: ['Πως', 'Πού', 'Πός', 'Πώς'] },
    correct: 3,
    explanation: {
      el: 'Όταν ρωτάμε, το «πώς» παίρνει τόνο: Πώς σε λένε;',
      en: 'When we ask a question, «πώς» takes an accent: Πώς σε λένε;',
    },
  },
  {
    q: { el: 'Πότε γράφουμε «πού» με τόνο;', en: 'When do we write «πού» with an accent?' },
    options: { el: ['όταν ρωτάμε', 'όταν είναι στην αρχή', 'πάντα', 'ποτέ'], en: ['when we ask a question', 'when it starts a sentence', 'always', 'never'] },
    correct: 0,
    explanation: {
      el: 'Το «πού» παίρνει τόνο μόνο όταν ρωτάει: «Πού πας;». Στο «το σπίτι που μένω» δεν παίρνει.',
      en: '«πού» takes an accent only when it asks: «Πού πας;». In «το σπίτι που μένω» it does not.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Το βιβλίο πού διαβάζω είναι ωραίο.', 'Το βιβλίο που διαβάζω είναι ωραίο.', 'Το βιβλίο που διαβάζω είναι ωραιό.', 'Το βιβλίο πού διαβάζω είναι ωραιό.'], en: ['Το βιβλίο πού διαβάζω είναι ωραίο.', 'Το βιβλίο που διαβάζω είναι ωραίο.', 'Το βιβλίο που διαβάζω είναι ωραιό.', 'Το βιβλίο πού διαβάζω είναι ωραιό.'] },
    correct: 1,
    explanation: {
      el: 'Εδώ δεν ρωτάμε, άρα το «που» δεν παίρνει τόνο. Και το «ωραίο» τονίζεται στο «ραί».',
      en: 'Here we are not asking, so «που» takes no accent. And «ωραίο» is stressed on «ραί».',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «Νομίζω ___ θα βρέξει.»', en: 'Which word is missing? «Νομίζω ___ θα βρέξει.» (I think that it will rain.)' },
    options: { el: ['πώς', 'πού', 'πως', 'που'], en: ['πώς', 'πού', 'πως', 'που'] },
    correct: 2,
    explanation: {
      el: 'Το «πως» εδώ σημαίνει «ότι» και δεν ρωτάει, άρα δεν παίρνει τόνο: Νομίζω πως θα βρέξει.',
      en: 'Here «πως» means “that” and is not asking, so it takes no accent: Νομίζω πως θα βρέξει.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση λείπει ένας τόνος;', en: 'In which sentence is an accent missing?' },
    options: { el: ['Πού είναι ο Γιώργος;', 'Η Μαρία ρωτάει που είναι ο Γιώργος.', 'Ο Γιώργος είναι εδώ.', 'Πώς είσαι, Μαρία;'], en: ['Πού είναι ο Γιώργος;', 'Η Μαρία ρωτάει που είναι ο Γιώργος.', 'Ο Γιώργος είναι εδώ.', 'Πώς είσαι, Μαρία;'] },
    correct: 1,
    explanation: {
      el: 'Η Μαρία ρωτάει, άρα το «πού» παίρνει τόνο ακόμα κι αν δεν υπάρχει ερωτηματικό: «ρωτάει πού είναι».',
      en: 'Maria is asking, so «πού» takes an accent even without a question mark: «ρωτάει πού είναι».',
    },
  },
];
