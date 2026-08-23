/**
 * ΣΤ' Δημοτικού · Αγγλικά · Χώρες & Γλώσσες — "Countries & Languages"
 * ====================================================================
 * Original questions (curriculum topics only, no textbook text). Level: a child of 11–12
 * who is learning English as a foreign language.
 *
 * What the unit covers, in order:
 *   1–5   countries and their nationalities (Greece → Greek, Spain → Spanish, …)
 *   6–8   languages: which language is spoken where, "speak" + language, capital letters
 *   9–12  present simple review: habits and facts, -s, do/does questions
 *   13–15 present continuous review: right now, am/is/are + -ing, simple vs continuous
 *   16–18 question words: Where / Which / What … from, tied to countries and languages
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ENGLISH_COUNTRIES_AND_LANGUAGES: QuizQuestion[] = [
  // ── 1–5: countries and nationalities ──────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Ελλάδα» στα αγγλικά;', en: 'How do you say «Ελλάδα» in English?' },
    options: { el: ['Greek', 'Greece', 'Grecia', 'Greeks'], en: ['Greek', 'Greece', 'Grecia', 'Greeks'] },
    correct: 1,
    explanation: {
      el: 'Η χώρα είναι Greece. Το Greek είναι ο Έλληνας ή η ελληνική γλώσσα.',
      en: 'The country is Greece. Greek is the person or the language.',
    },
  },
  {
    q: { el: 'Ο Γιώργος είναι από την Ελλάδα. He is …', en: 'George is from Greece. He is …' },
    options: { el: ['Greece', 'Greek', 'Greecian', 'Greeklish'], en: ['Greece', 'Greek', 'Greecian', 'Greeklish'] },
    correct: 1,
    explanation: {
      el: 'Χώρα: Greece. Εθνικότητα: Greek. «He is Greek» = Είναι Έλληνας.',
      en: 'Country: Greece. Nationality: Greek. "He is Greek" means he comes from Greece.',
    },
  },
  {
    q: { el: 'Η Μαρία είναι από την Ισπανία (Spain). Ποια είναι η εθνικότητά της;', en: 'Maria is from Spain. What is her nationality?' },
    options: { el: ['Spainish', 'Spanian', 'Spanish', 'Spain'], en: ['Spainish', 'Spanian', 'Spanish', 'Spain'] },
    correct: 2,
    explanation: {
      el: 'Spain → Spanish. Προσοχή στην ορθογραφία: χάνεται το «i» του Spain.',
      en: 'Spain → Spanish. Watch the spelling: the "i" of Spain disappears.',
    },
  },
  {
    q: { el: 'Ποια εθνικότητα ταιριάζει με τη χώρα France;', en: 'Which nationality goes with the country France?' },
    options: { el: ['Francish', 'French', 'Franch', 'Francian'], en: ['Francish', 'French', 'Franch', 'Francian'] },
    correct: 1,
    explanation: {
      el: 'France → French. Δεν παίρνουν όλες οι χώρες την κατάληξη -ish ή -ian!',
      en: 'France → French. Not every country takes -ish or -ian!',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι χώρα – εθνικότητα είναι ΛΑΘΟΣ;', en: 'Which country – nationality pair is WRONG?' },
    options: {
      el: ['Italy – Italian', 'Germany – German', 'England – English', 'Portugal – Portugalese'],
      en: ['Italy – Italian', 'Germany – German', 'England – English', 'Portugal – Portugalese'],
    },
    correct: 3,
    explanation: {
      el: 'Το σωστό είναι Portugal – Portuguese. Τα άλλα τρία ζευγάρια είναι σωστά.',
      en: 'The correct pair is Portugal – Portuguese. The other three pairs are right.',
    },
  },

  // ── 6–8: languages ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια γλώσσα μιλούν οι άνθρωποι στη Βραζιλία (Brazil);', en: 'Which language do people speak in Brazil?' },
    options: { el: ['Brazilian', 'Spanish', 'Portuguese', 'Italian'], en: ['Brazilian', 'Spanish', 'Portuguese', 'Italian'] },
    correct: 2,
    explanation: {
      el: 'Στη Βραζιλία μιλούν πορτογαλικά (Portuguese). Δεν υπάρχει γλώσσα «Brazilian»!',
      en: 'In Brazil people speak Portuguese. There is no language called "Brazilian"!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο Νίκος … Greek and English.»', en: 'Complete: "Nikos … Greek and English."' },
    options: { el: ['speak', 'speaks', 'is speak', 'speaking'], en: ['speak', 'speaks', 'is speak', 'speaking'] },
    correct: 1,
    explanation: {
      el: 'Για τις γλώσσες που ξέρουμε λέμε «speak». Με he/she/it βάζουμε -s: Nikos speaks.',
      en: 'For the languages we know we use "speak". With he/she/it we add -s: Nikos speaks.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: {
      el: ['I speak english and french.', 'I speak English and French.', 'I speak english and French.', 'I Speak English And French.'],
      en: ['I speak english and french.', 'I speak English and French.', 'I speak english and French.', 'I Speak English And French.'],
    },
    correct: 1,
    explanation: {
      el: 'Στα αγγλικά οι γλώσσες, οι χώρες και οι εθνικότητες γράφονται πάντα με κεφαλαίο: English, French.',
      en: 'In English, languages, countries and nationalities always start with a capital letter: English, French.',
    },
  },

  // ── 9–12: present simple review ───────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Η Ελένη … in Athens.»', en: 'Complete: "Eleni … in Athens."' },
    options: { el: ['live', 'lives', 'living', 'is live'], en: ['live', 'lives', 'living', 'is live'] },
    correct: 1,
    explanation: {
      el: 'Ο απλός ενεστώτας δείχνει κάτι μόνιμο. Με he/she/it το ρήμα παίρνει -s: she lives.',
      en: 'The present simple shows something permanent. With he/she/it the verb takes -s: she lives.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «People in Italy … Italian.»', en: 'Complete: "People in Italy … Italian."' },
    options: { el: ['speaks', 'is speaking', 'speak', 'are speak'], en: ['speaks', 'is speaking', 'speak', 'are speak'] },
    correct: 2,
    explanation: {
      el: 'Το «people» είναι πληθυντικός (= they), άρα το ρήμα δεν παίρνει -s: people speak.',
      en: '"People" is plural (= they), so the verb has no -s: people speak.',
    },
  },
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: {
      el: ['Does Maria speaks Spanish?', 'Do Maria speak Spanish?', 'Does Maria speak Spanish?', 'Speaks Maria Spanish?'],
      en: ['Does Maria speaks Spanish?', 'Do Maria speak Spanish?', 'Does Maria speak Spanish?', 'Speaks Maria Spanish?'],
    },
    correct: 2,
    explanation: {
      el: 'Στις ερωτήσεις με he/she/it βάζουμε «Does» και το ρήμα ΧΩΡΙΣ -s: Does Maria speak…?',
      en: 'In questions with he/she/it we use "Does" and the verb WITHOUT -s: Does Maria speak…?',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «My cousins … live in Germany. They live in Austria.»', en: 'Complete: "My cousins … live in Germany. They live in Austria."' },
    options: { el: ["doesn't", "don't", 'not', "aren't"], en: ["doesn't", "don't", 'not', "aren't"] },
    correct: 1,
    explanation: {
      el: 'Το «cousins» είναι πληθυντικός (= they). Άρνηση στον απλό ενεστώτα: they don\'t live.',
      en: '"Cousins" is plural (= they). Present simple negative: they don\'t live.',
    },
  },

  // ── 13–15: present continuous review ──────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Look! Ο Γιώργος … to his Italian friend right now.»', en: 'Complete: "Look! George … to his Italian friend right now."' },
    options: { el: ['talks', 'talk', 'is talking', 'talking'], en: ['talks', 'talk', 'is talking', 'talking'] },
    correct: 2,
    explanation: {
      el: 'Το «right now» δείχνει κάτι που γίνεται αυτή τη στιγμή: am/is/are + ρήμα με -ing → is talking.',
      en: '"Right now" shows something happening at this moment: am/is/are + verb -ing → is talking.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «We … Spanish at school this year.»', en: 'Complete: "We … Spanish at school this year."' },
    options: { el: ['is learning', 'are learning', 'am learning', 'are learn'], en: ['is learning', 'are learning', 'am learning', 'are learn'] },
    correct: 1,
    explanation: {
      el: 'Με το «we» χρησιμοποιούμε «are» + -ing: we are learning. Το «this year» δείχνει κάτι προσωρινό.',
      en: 'With "we" we use "are" + -ing: we are learning. "This year" shows something temporary.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['Nikos is speaking French every day.', 'Nikos speaks French every day.', 'Nikos speak French every day.', 'Nikos are speaking French every day.'],
      en: ['Nikos is speaking French every day.', 'Nikos speaks French every day.', 'Nikos speak French every day.', 'Nikos are speaking French every day.'],
    },
    correct: 1,
    explanation: {
      el: 'Το «every day» δείχνει συνήθεια → απλός ενεστώτας: Nikos speaks. Το -ing είναι για το «τώρα».',
      en: '"Every day" shows a habit → present simple: Nikos speaks. The -ing form is for "now".',
    },
  },

  // ── 16–18: question words ─────────────────────────────────────────────────
  {
    q: { el: 'Ποια ερωτηματική λέξη ταιριάζει; «… are you from?» – «I\'m from Greece.»', en: 'Which question word fits? "… are you from?" – "I\'m from Greece."' },
    options: { el: ['What', 'Who', 'Where', 'When'], en: ['What', 'Who', 'Where', 'When'] },
    correct: 2,
    explanation: {
      el: 'Για τον τόπο ρωτάμε «Where»: Where are you from? = Από πού είσαι;',
      en: 'We ask about a place with "Where": Where are you from?',
    },
  },
  {
    q: { el: 'Ποια ερωτηματική λέξη ταιριάζει; «… languages does Eleni speak?» – «Greek and German.»', en: 'Which question word fits? "… languages does Eleni speak?" – "Greek and German."' },
    options: { el: ['Where', 'Which', 'Why', 'How'], en: ['Where', 'Which', 'Why', 'How'] },
    correct: 1,
    explanation: {
      el: '«Which languages» = ποιες γλώσσες. Το «Which» ρωτάει για επιλογή ανάμεσα σε πράγματα.',
      en: '"Which languages" asks us to pick from a group of things.',
    },
  },
  {
    q: { el: 'Ποια ερώτηση ταιριάζει στην απάντηση «She\'s Portuguese.»;', en: 'Which question matches the answer "She\'s Portuguese."?' },
    options: {
      el: ['Where is she going?', 'What language is she speaking?', 'What nationality is she?', 'How old is she?'],
      en: ['Where is she going?', 'What language is she speaking?', 'What nationality is she?', 'How old is she?'],
    },
    correct: 2,
    explanation: {
      el: '«Portuguese» εδώ είναι εθνικότητα, άρα η ερώτηση είναι «What nationality is she?». Η γλώσσα θα ήταν «She speaks Portuguese».',
      en: '"Portuguese" here is a nationality, so the question is "What nationality is she?". For the language we would say "She speaks Portuguese".',
    },
  },
];
