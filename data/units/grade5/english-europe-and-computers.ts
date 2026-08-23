/**
 * Ε' Δημοτικού · Αγγλικά · Ευρώπη & Υπολογιστές / "Europe & Computers"
 * =====================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 10–11 learning English.
 *
 * What the unit covers, in order:
 *   1–5   computer words: mouse, keyboard, screen, turn on, e-mail
 *   6–10  European countries & capitals, people and languages
 *   11–13 the United Kingdom: its parts, London, the flag
 *   14–15 "Do you like…?" and its short answers
 *   16–18 present simple questions: do / does, word order, "doesn't"
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_EUROPE_AND_COMPUTERS: QuizQuestion[] = [
  // ── 1–5: computer words ─────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «πληκτρολόγιο» στα αγγλικά;', en: 'How do you say «πληκτρολόγιο» in English?' },
    options: { el: ['keyboard', 'mouse', 'screen', 'printer'], en: ['keyboard', 'mouse', 'screen', 'printer'] },
    correct: 0,
    explanation: {
      el: 'Keyboard = πληκτρολόγιο. Key σημαίνει «πλήκτρο» και board «πίνακας»: ένας πίνακας με πλήκτρα!',
      en: 'Keyboard = πληκτρολόγιο. Key means «πλήκτρο» and board means «πίνακας»: a board full of keys!',
    },
  },
  {
    q: { el: 'Το «mouse» του υπολογιστή είναι…', en: 'The computer «mouse» is…' },
    options: { el: ['η οθόνη', 'το ποντίκι', 'ο εκτυπωτής', 'το καλώδιο'], en: ['the screen', 'the mouse', 'the printer', 'the cable'] },
    correct: 1,
    explanation: {
      el: 'Mouse = ποντίκι. Λέγεται έτσι γιατί μοιάζει με ένα μικρό ποντικάκι με ουρά (το καλώδιο)!',
      en: 'Mouse = ποντίκι. It got its name because it looks like a little mouse with a tail (the cable)!',
    },
  },
  {
    q: { el: 'Η Ελένη βλέπει ένα βίντεο. Πού το βλέπει;', en: 'Eleni is watching a video. Where does she watch it?' },
    options: { el: ['on the printer', 'on the keyboard', 'on the screen', 'on the mouse'], en: ['on the printer', 'on the keyboard', 'on the screen', 'on the mouse'] },
    correct: 2,
    explanation: {
      el: 'Screen = οθόνη. Ό,τι βλέπουμε στον υπολογιστή, το βλέπουμε on the screen.',
      en: 'Screen = οθόνη. Everything we see on a computer, we see on the screen.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να ανοίξει τον υπολογιστή. Τι λέει;', en: 'Nikos wants to switch on the computer. What does he say?' },
    options: { el: ['Turn off the computer.', 'Turn on the computer.', 'Turn up the computer.', 'Turn in the computer.'], en: ['Turn off the computer.', 'Turn on the computer.', 'Turn up the computer.', 'Turn in the computer.'] },
    correct: 1,
    explanation: {
      el: 'Turn on = ανοίγω, turn off = κλείνω. Turn up σημαίνει «δυναμώνω τον ήχο».',
      en: 'Turn on = ανοίγω, turn off = κλείνω. Turn up means «make the sound louder».',
    },
  },
  {
    q: { el: 'Η Μαρία στέλνει ένα μήνυμα στη φίλη της από τον υπολογιστή. Στέλνει…', en: 'Maria sends a message to her friend from the computer. She sends…' },
    options: { el: ['a letter', 'a website', 'an e-mail', 'a screen'], en: ['a letter', 'a website', 'an e-mail', 'a screen'] },
    correct: 2,
    explanation: {
      el: 'E-mail = ηλεκτρονικό μήνυμα. Το «e» σημαίνει electronic. Το letter είναι το χάρτινο γράμμα.',
      en: 'E-mail = ηλεκτρονικό μήνυμα. The «e» means electronic. A letter is the paper kind.',
    },
  },

  // ── 6–10: Europe — countries, capitals, people ──────────────────────────────
  {
    q: { el: 'Πώς λέμε «Ελλάδα» στα αγγλικά;', en: 'How do you say «Ελλάδα» in English?' },
    options: { el: ['Greek', 'Greece', 'Grecia', 'Greeks'], en: ['Greek', 'Greece', 'Grecia', 'Greeks'] },
    correct: 1,
    explanation: {
      el: 'Greece = Ελλάδα (η χώρα). Greek = Έλληνας ή ελληνικός. Πρόσεξε τη διαφορά!',
      en: 'Greece = Ελλάδα (the country). Greek = a Greek person or the Greek language. Mind the difference!',
    },
  },
  {
    q: { el: 'Ποια είναι η πρωτεύουσα (capital) της Γαλλίας (France);', en: 'What is the capital of France?' },
    options: { el: ['Rome', 'Madrid', 'Paris', 'Berlin'], en: ['Rome', 'Madrid', 'Paris', 'Berlin'] },
    correct: 2,
    explanation: {
      el: 'Paris is the capital of France. Το Παρίσι είναι η πρωτεύουσα της Γαλλίας.',
      en: 'Paris is the capital of France. Rome is in Italy, Madrid in Spain and Berlin in Germany.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει: «Rome is the capital of ___.» Ποια λέξη λείπει;', en: 'Giorgos says: «Rome is the capital of ___.» Which word is missing?' },
    options: { el: ['Italy', 'Italian', 'Spain', 'Portugal'], en: ['Italy', 'Italian', 'Spain', 'Portugal'] },
    correct: 0,
    explanation: {
      el: 'Rome (η Ρώμη) είναι η πρωτεύουσα της Italy (Ιταλία). Italian είναι ο Ιταλός ή τα ιταλικά, όχι η χώρα.',
      en: 'Rome is the capital of Italy. Italian is the person or the language, not the country.',
    },
  },
  {
    q: { el: 'Η Άννα είναι από τη Γερμανία (Germany). Άρα είναι…', en: 'Anna is from Germany. So she is…' },
    options: { el: ['Germany', 'Germanian', 'Germanic', 'German'], en: ['Germany', 'Germanian', 'Germanic', 'German'] },
    correct: 3,
    explanation: {
      el: 'Χώρα: Germany. Άνθρωπος: German. Λέμε «She is German» ή «She is from Germany».',
      en: 'Country: Germany. Person: German. We say «She is German» or «She is from Germany».',
    },
  },
  {
    q: { el: 'Ο Pablo ζει στη Madrid και μιλάει…', en: 'Pablo lives in Madrid and speaks…' },
    options: { el: ['Spain', 'Spanish', 'Italian', 'Portuguese'], en: ['Spain', 'Spanish', 'Italian', 'Portuguese'] },
    correct: 1,
    explanation: {
      el: 'Η Madrid είναι η πρωτεύουσα της Spain (Ισπανία) και η γλώσσα εκεί είναι Spanish (ισπανικά).',
      en: 'Madrid is the capital of Spain, and the language there is Spanish.',
    },
  },

  // ── 11–13: the United Kingdom ───────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνουν τα γράμματα «UK»;', en: 'What do the letters «UK» stand for?' },
    options: { el: ['United Kingdom', 'United Kings', 'Union of Kingdoms', 'Universal Kingdom'], en: ['United Kingdom', 'United Kings', 'Union of Kingdoms', 'Universal Kingdom'] },
    correct: 0,
    explanation: {
      el: 'UK = United Kingdom = Ηνωμένο Βασίλειο. Έχει τέσσερα μέρη: England, Scotland, Wales και Northern Ireland.',
      en: 'UK = United Kingdom. It has four parts: England, Scotland, Wales and Northern Ireland.',
    },
  },
  {
    q: { el: 'Ποια πόλη είναι η πρωτεύουσα του United Kingdom;', en: 'Which city is the capital of the United Kingdom?' },
    options: { el: ['Manchester', 'Dublin', 'Edinburgh', 'London'], en: ['Manchester', 'Dublin', 'Edinburgh', 'London'] },
    correct: 3,
    explanation: {
      el: 'London (το Λονδίνο) είναι η πρωτεύουσα του UK. Το Edinburgh είναι η πρωτεύουσα της Scotland και το Dublin της Ireland.',
      en: 'London is the capital of the UK. Edinburgh is the capital of Scotland and Dublin is the capital of Ireland.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά ΔΕΝ είναι μέρος του United Kingdom;', en: 'Which of these is NOT part of the United Kingdom?' },
    options: { el: ['Scotland', 'Wales', 'Ireland', 'England'], en: ['Scotland', 'Wales', 'Ireland', 'England'] },
    correct: 2,
    explanation: {
      el: 'Η Ireland (Ιρλανδία) είναι ξεχωριστή χώρα. Στο UK ανήκει μόνο η Northern Ireland (Βόρεια Ιρλανδία).',
      en: 'Ireland is a separate country. Only Northern Ireland belongs to the UK.',
    },
  },

  // ── 14–15: "Do you like…?" ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Σου αρέσουν τα παιχνίδια στον υπολογιστή;» στα αγγλικά;', en: 'How do you ask «Σου αρέσουν τα παιχνίδια στον υπολογιστή;» in English?' },
    options: { el: ['You like computer games?', 'Do you like computer games?', 'Are you like computer games?', 'Does you like computer games?'], en: ['You like computer games?', 'Do you like computer games?', 'Are you like computer games?', 'Does you like computer games?'] },
    correct: 1,
    explanation: {
      el: 'Για ερώτηση με «like» βάζουμε «Do» στην αρχή: Do you like…? Ποτέ «Are you like».',
      en: 'To ask a question with «like», put «Do» first: Do you like…? Never «Are you like».',
    },
  },
  {
    q: { el: '«Do you like London?» — Η Ελένη απαντάει «Ναι». Ποια είναι η σωστή σύντομη απάντηση;', en: '«Do you like London?» — Eleni answers «Yes». Which is the correct short answer?' },
    options: { el: ['Yes, I like.', 'Yes, I am.', 'Yes, I do.', 'Yes, I does.'], en: ['Yes, I like.', 'Yes, I am.', 'Yes, I do.', 'Yes, I does.'] },
    correct: 2,
    explanation: {
      el: 'Όταν η ερώτηση αρχίζει με «Do», απαντάμε «Yes, I do» ή «No, I don\'t». Δεν επαναλαμβάνουμε το «like».',
      en: 'When the question starts with «Do», we answer «Yes, I do» or «No, I don\'t». We do not repeat «like».',
    },
  },

  // ── 16–18: present simple questions ────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «___ your sister live in Athens?»', en: 'Complete: «___ your sister live in Athens?»' },
    options: { el: ['Do', 'Is', 'Does', 'Are'], en: ['Do', 'Is', 'Does', 'Are'] },
    correct: 2,
    explanation: {
      el: 'Για he, she, it (your sister = she) χρησιμοποιούμε «Does». Για I, you, we, they χρησιμοποιούμε «Do».',
      en: 'For he, she, it (your sister = she) we use «Does». For I, you, we, they we use «Do».',
    },
  },
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: { el: ['Does Nikos uses a laptop?', 'Does Nikos use a laptop?', 'Do Nikos use a laptop?', 'Nikos does use a laptop?'], en: ['Does Nikos uses a laptop?', 'Does Nikos use a laptop?', 'Do Nikos use a laptop?', 'Nikos does use a laptop?'] },
    correct: 1,
    explanation: {
      el: 'Μετά το «Does» το ρήμα μένει χωρίς -s: Does Nikos use…? Το -s το «παίρνει» το Does.',
      en: 'After «Does» the verb has no -s: Does Nikos use…? The «Does» takes the -s for it.',
    },
  },
  {
    q: { el: 'Ο Γιώργος δεν έχει υπολογιστή. Η Μαρία το λέει στα αγγλικά:', en: 'Giorgos does not have a computer. Maria says it in English:' },
    options: { el: ['Giorgos don\'t have a computer.', 'Giorgos doesn\'t has a computer.', 'Giorgos not have a computer.', 'Giorgos doesn\'t have a computer.'], en: ['Giorgos don\'t have a computer.', 'Giorgos doesn\'t has a computer.', 'Giorgos not have a computer.', 'Giorgos doesn\'t have a computer.'] },
    correct: 3,
    explanation: {
      el: 'Για he/she/it η άρνηση είναι «doesn\'t» + ρήμα χωρίς -s: doesn\'t have (όχι doesn\'t has).',
      en: 'For he/she/it the negative is «doesn\'t» + verb without -s: doesn\'t have (not doesn\'t has).',
    },
  },
];
