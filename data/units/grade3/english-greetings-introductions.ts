/**
 * Γ' Δημοτικού · Αγγλικά · Χαιρετισμοί & Γνωριμίες — Greetings & Introductions
 * ===========================================================================
 * The first English the children meet: saying hello, telling their name, their age
 * and where they are from, the numbers to 20 and the verb "to be". All text is original.
 *
 * What the unit covers, in order:
 *   1–2   greetings: Hello / Good morning / Goodbye
 *   3–5   "What's your name?" — asking and answering (My name is…)
 *   6–8   "How old are you?" — I am … years old
 *   9–11  numbers to 20 (twelve, fifteen, twenty)
 *   12–14 "Where are you from?" — I am from Greece
 *   15–18 the verb "to be": am / is / are, negative and question forms
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ENGLISH_GREETINGS_INTRODUCTIONS: QuizQuestion[] = [
  // ── 1–2: greetings ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «γεια σου» στα αγγλικά;', en: 'How do you say «γεια σου» in English?' },
    options: { el: ['Hello', 'Goodbye', 'Please', 'Thank you'], en: ['Hello', 'Goodbye', 'Please', 'Thank you'] },
    correct: 0,
    explanation: {
      el: '«Hello» σημαίνει «γεια σου». Το λέμε όταν συναντάμε κάποιον. Το «Goodbye» το λέμε όταν φεύγουμε.',
      en: '“Hello” means «γεια σου». We say it when we meet someone. “Goodbye” is for when we leave.',
    },
  },
  {
    q: { el: 'Είναι πρωί και μπαίνεις στην τάξη. Τι λες στη δασκάλα;', en: 'It is morning and you walk into class. What do you say to the teacher?' },
    options: { el: ['Good night!', 'Good morning!', 'Goodbye!', 'Good evening!'], en: ['Good night!', 'Good morning!', 'Goodbye!', 'Good evening!'] },
    correct: 1,
    explanation: {
      el: 'Το πρωί λέμε «Good morning» (καλημέρα). Το «Good night» το λέμε μόνο πριν πάμε για ύπνο.',
      en: 'In the morning we say “Good morning”. “Good night” is only for bedtime.',
    },
  },

  // ── 3–5: What's your name? ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Πώς σε λένε;» στα αγγλικά;', en: 'How do you ask «Πώς σε λένε;» in English?' },
    options: { el: ['How are you?', 'How old are you?', 'What\'s your name?', 'Where are you from?'], en: ['How are you?', 'How old are you?', 'What\'s your name?', 'Where are you from?'] },
    correct: 2,
    explanation: {
      el: '«What\'s your name?» = «Πώς σε λένε;». Το «What\'s» είναι τα «What is» μαζί.',
      en: '“What\'s your name?” asks for someone\'s name. “What\'s” is short for “What is”.',
    },
  },
  {
    q: { el: 'Η Μαρία απαντά στην ερώτηση «What\'s your name?». Ποια απάντηση είναι σωστή;', en: 'Maria answers the question “What\'s your name?”. Which answer is correct?' },
    options: { el: ['My name is Maria.', 'I am eight.', 'Your name is Maria.', 'I am from Maria.'], en: ['My name is Maria.', 'I am eight.', 'Your name is Maria.', 'I am from Maria.'] },
    correct: 0,
    explanation: {
      el: 'Όταν λέμε το όνομά μας λέμε «My name is…» (το όνομά μου είναι…). «My» = δικό μου, «your» = δικό σου.',
      en: 'To say our name we say “My name is…”. “My” means mine, “your” means yours.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Hi! ___ name is Nikos.»', en: 'Complete: “Hi! ___ name is Nikos.”' },
    options: { el: ['Your', 'My', 'I', 'Me'], en: ['Your', 'My', 'I', 'Me'] },
    correct: 1,
    explanation: {
      el: 'Πριν από το «name» βάζουμε το «my» (δικό μου): «My name is Nikos.» Το «I» το χρησιμοποιούμε με ρήμα: «I am Nikos.»',
      en: 'Before “name” we use “my”: “My name is Nikos.” We use “I” with a verb: “I am Nikos.”',
    },
  },

  // ── 6–8: How old are you? ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Πόσων χρονών είσαι;» στα αγγλικά;', en: 'How do you ask «Πόσων χρονών είσαι;» in English?' },
    options: { el: ['How are you?', 'What\'s your name?', 'How old are you?', 'Where are you from?'], en: ['How are you?', 'What\'s your name?', 'How old are you?', 'Where are you from?'] },
    correct: 2,
    explanation: {
      el: '«How old are you?» ρωτάει την ηλικία. Προσοχή: «How are you?» σημαίνει «Τι κάνεις;».',
      en: '“How old are you?” asks about age. Careful: “How are you?” means «Τι κάνεις;».',
    },
  },
  {
    q: { el: 'Ο Γιώργος είναι 8 χρονών. Τι λέει;', en: 'Giorgos is 8 years old. What does he say?' },
    options: { el: ['I have eight years.', 'I am eight years old.', 'I am eight old.', 'My name is eight.'], en: ['I have eight years.', 'I am eight years old.', 'I am eight old.', 'My name is eight.'] },
    correct: 1,
    explanation: {
      el: 'Στα αγγλικά λέμε «I am eight years old» — με το «am», όχι με το «have» όπως στα ελληνικά!',
      en: 'In English we say “I am eight years old” — with “am”, not “have”.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «How old ___ you?»', en: 'Complete: “How old ___ you?”' },
    options: { el: ['am', 'is', 'are', 'be'], en: ['am', 'is', 'are', 'be'] },
    correct: 2,
    explanation: {
      el: 'Με το «you» πάει πάντα το «are»: «How old are you?»',
      en: '“You” always goes with “are”: “How old are you?”',
    },
  },

  // ── 9–11: numbers to 20 ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε το 12 στα αγγλικά;', en: 'How do you say 12 in English?' },
    options: { el: ['twenty', 'twelve', 'two', 'twenty-one'], en: ['twenty', 'twelve', 'two', 'twenty-one'] },
    correct: 1,
    explanation: {
      el: '12 = twelve. Το 2 είναι «two» και το 20 είναι «twenty». Μην τα μπερδεύεις!',
      en: '12 = twelve. 2 is “two” and 20 is “twenty”. Don\'t mix them up!',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «I am fifteen years old.» Πόσων χρονών είναι;', en: 'Eleni says: “I am fifteen years old.” How old is she?' },
    options: { el: ['5', '50', '15', '14'], en: ['5', '50', '15', '14'] },
    correct: 2,
    explanation: {
      el: 'Fifteen = 15. Τα «-teen» είναι από το 13 ως το 19. Five = 5, fifty = 50.',
      en: 'Fifteen = 15. The “-teen” numbers are 13 to 19. Five = 5, fifty = 50.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός είναι το «twenty»;', en: 'Which number is “twenty”?' },
    options: { el: ['12', '2', '20', '10'], en: ['12', '2', '20', '10'] },
    correct: 2,
    explanation: {
      el: 'Twenty = 20. Είναι ο μεγαλύτερος αριθμός που μάθαμε. Ten = 10, twelve = 12.',
      en: 'Twenty = 20. It is the biggest number we learned. Ten = 10, twelve = 12.',
    },
  },

  // ── 12–14: Where are you from? ─────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Από πού είσαι;» στα αγγλικά;', en: 'How do you ask «Από πού είσαι;» in English?' },
    options: { el: ['Where are you from?', 'Where are you?', 'What are you?', 'Who are you from?'], en: ['Where are you from?', 'Where are you?', 'What are you?', 'Who are you from?'] },
    correct: 0,
    explanation: {
      el: '«Where are you from?» = «Από πού είσαι;». Το «from» (από) μπαίνει στο τέλος!',
      en: '“Where are you from?” asks about your country. The word “from” goes at the end!',
    },
  },
  {
    q: { el: 'Ο Νίκος είναι από την Ελλάδα. Τι λέει;', en: 'Nikos is from Greece. What does he say?' },
    options: { el: ['I am Greece.', 'I am from Greece.', 'I from Greece.', 'I am in Greece.'], en: ['I am Greece.', 'I am from Greece.', 'I from Greece.', 'I am in Greece.'] },
    correct: 1,
    explanation: {
      el: 'Λέμε «I am from Greece» — χρειαζόμαστε και το «am» και το «from».',
      en: 'We say “I am from Greece” — we need both “am” and “from”.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Ελλάδα» στα αγγλικά;', en: 'How do you say «Ελλάδα» in English?' },
    options: { el: ['Greek', 'Greece', 'Athens', 'England'], en: ['Greek', 'Greece', 'Athens', 'England'] },
    correct: 1,
    explanation: {
      el: 'Η χώρα είναι «Greece». Το «Greek» σημαίνει «Έλληνας / ελληνικός». Athens = Αθήνα.',
      en: 'The country is “Greece”. “Greek” means the person or the language. Athens is the city.',
    },
  },

  // ── 15–18: the verb "to be" ────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I ___ Maria.»', en: 'Complete: “I ___ Maria.”' },
    options: { el: ['is', 'are', 'am', 'be'], en: ['is', 'are', 'am', 'be'] },
    correct: 2,
    explanation: {
      el: 'Με το «I» πάει πάντα το «am»: I am. Θυμήσου: I am, you are, he/she is.',
      en: '“I” always goes with “am”: I am. Remember: I am, you are, he/she is.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «She ___ nine years old.»', en: 'Complete: “She ___ nine years old.”' },
    options: { el: ['am', 'is', 'are', 'has'], en: ['am', 'is', 'are', 'has'] },
    correct: 1,
    explanation: {
      el: 'Με το «he» και το «she» πάει το «is»: «She is nine years old.»',
      en: '“He” and “she” go with “is”: “She is nine years old.”',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Giorgos and Eleni ___ from Greece.»', en: 'Complete: “Giorgos and Eleni ___ from Greece.”' },
    options: { el: ['is', 'am', 'are', 'be'], en: ['is', 'am', 'are', 'be'] },
    correct: 2,
    explanation: {
      el: 'Ο Γιώργος και η Ελένη είναι δύο άτομα = «they». Με το «they» πάει το «are».',
      en: 'Giorgos and Eleni are two people = “they”. “They” goes with “are”.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Δεν είμαι δέκα χρονών» στα αγγλικά;', en: 'How do you say «Δεν είμαι δέκα χρονών» in English?' },
    options: { el: ['I not am ten years old.', 'I am not ten years old.', 'I don\'t ten years old.', 'I am no ten years old.'], en: ['I not am ten years old.', 'I am not ten years old.', 'I don\'t ten years old.', 'I am no ten years old.'] },
    correct: 1,
    explanation: {
      el: 'Για το «δεν» βάζουμε το «not» αμέσως μετά το «am»: «I am not…». Μπορούμε να πούμε και «I\'m not».',
      en: 'To say “not”, put “not” right after “am”: “I am not…”. We can also say “I\'m not”.',
    },
  },
];
