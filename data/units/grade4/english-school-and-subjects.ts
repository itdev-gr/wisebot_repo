/**
 * Δ' Δημοτικού · Αγγλικά · Σχολείο & Μαθήματα / School & Subjects
 * ================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 9–10 learning English.
 *
 * What the unit covers, in order:
 *   1–5   school subjects vocabulary (Maths, English, Music, Art, P.E.…)
 *   6–9   the timetable and the days of the week
 *   10–13 the verb "to be" (am / is / are) in school sentences
 *   14–16 "have got" / "has got" and the question form
 *   17–18 "What's your favourite subject?" — asking and answering
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_SCHOOL_AND_SUBJECTS: QuizQuestion[] = [
  // ── 1–5: school subjects ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Μαθηματικά» στα αγγλικά;', en: 'How do you say «Μαθηματικά» in English?' },
    options: { el: ['Music', 'Maths', 'Art', 'Science'], en: ['Music', 'Maths', 'Art', 'Science'] },
    correct: 1,
    explanation: {
      el: 'Τα Μαθηματικά λέγονται Maths. Θυμήσου: Maths – Mathematics, οι αριθμοί!',
      en: 'Μαθηματικά is Maths. Remember: Maths – Mathematics, the numbers!',
    },
  },
  {
    q: { el: 'Σε ποιο μάθημα ζωγραφίζουμε;', en: 'In which subject do we draw and paint?' },
    options: { el: ['History', 'Art', 'Geography', 'English'], en: ['History', 'Art', 'Geography', 'English'] },
    correct: 1,
    explanation: {
      el: 'Στο Art (Εικαστικά) ζωγραφίζουμε και φτιάχνουμε κατασκευές.',
      en: 'In Art we draw, paint and make things.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Γυμναστική» στα αγγλικά;', en: 'How do you say «Γυμναστική» in English?' },
    options: { el: ['Music', 'Science', 'P.E.', 'History'], en: ['Music', 'Science', 'P.E.', 'History'] },
    correct: 2,
    explanation: {
      el: 'Η Γυμναστική λέγεται P.E. — Physical Education, δηλαδή «σωματική αγωγή».',
      en: 'Γυμναστική is P.E. — Physical Education.',
    },
  },
  {
    q: { el: 'Στο μάθημα Music τι κάνουμε;', en: 'What do we do in Music?' },
    options: { el: ['τραγουδάμε', 'τρέχουμε', 'μετράμε', 'διαβάζουμε χάρτες'], en: ['we sing', 'we run', 'we count', 'we read maps'] },
    correct: 0,
    explanation: {
      el: 'Music είναι η Μουσική: τραγουδάμε και παίζουμε όργανα.',
      en: 'Music is Μουσική: we sing and play instruments.',
    },
  },
  {
    q: { el: 'Σε ποιο μάθημα μαθαίνουμε για τα ζώα, τα φυτά και το νερό;', en: 'In which subject do we learn about animals, plants and water?' },
    options: { el: ['Maths', 'Art', 'P.E.', 'Science'], en: ['Maths', 'Art', 'P.E.', 'Science'] },
    correct: 3,
    explanation: {
      el: 'Science είναι οι Φυσικές Επιστήμες: ζώα, φυτά, νερό, φύση.',
      en: 'Science is where we learn about animals, plants, water and nature.',
    },
  },

  // ── 6–9: timetable & days of the week ────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Δευτέρα» στα αγγλικά;', en: 'How do you say «Δευτέρα» in English?' },
    options: { el: ['Sunday', 'Monday', 'Tuesday', 'Friday'], en: ['Sunday', 'Monday', 'Tuesday', 'Friday'] },
    correct: 1,
    explanation: {
      el: 'Δευτέρα = Monday. Είναι η πρώτη μέρα του σχολείου κάθε εβδομάδα.',
      en: 'Δευτέρα = Monday. It is the first school day of the week.',
    },
  },
  {
    q: { el: 'Ποια μέρα έρχεται μετά την Wednesday;', en: 'Which day comes after Wednesday?' },
    options: { el: ['Tuesday', 'Friday', 'Thursday', 'Saturday'], en: ['Tuesday', 'Friday', 'Thursday', 'Saturday'] },
    correct: 2,
    explanation: {
      el: 'Monday, Tuesday, Wednesday, Thursday, Friday. Μετά την Τετάρτη (Wednesday) έρχεται η Πέμπτη (Thursday).',
      en: 'Monday, Tuesday, Wednesday, Thursday, Friday. After Wednesday comes Thursday.',
    },
  },
  {
    q: { el: 'Ποιες δύο μέρες ΔΕΝ έχουμε σχολείο;', en: 'On which two days do we NOT have school?' },
    options: { el: ['Monday and Tuesday', 'Saturday and Sunday', 'Friday and Saturday', 'Sunday and Monday'], en: ['Monday and Tuesday', 'Saturday and Sunday', 'Friday and Saturday', 'Sunday and Monday'] },
    correct: 1,
    explanation: {
      el: 'Το Σαββατοκύριακο είναι Saturday (Σάββατο) και Sunday (Κυριακή) — το weekend!',
      en: 'Saturday and Sunday are the weekend — no school!',
    },
  },
  {
    q: { el: 'Πώς λέμε «πρόγραμμα μαθημάτων» στα αγγλικά;', en: 'How do you say «πρόγραμμα μαθημάτων» in English?' },
    options: { el: ['timetable', 'notebook', 'classroom', 'homework'], en: ['timetable', 'notebook', 'classroom', 'homework'] },
    correct: 0,
    explanation: {
      el: 'Το πρόγραμμα των μαθημάτων λέγεται timetable: time (ώρα) + table (πίνακας).',
      en: 'The school timetable shows your lessons: time + table.',
    },
  },

  // ── 10–13: the verb "to be" ──────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I ___ in Class 4.»', en: 'Complete: «I ___ in Class 4.»' },
    options: { el: ['is', 'are', 'am', 'be'], en: ['is', 'are', 'am', 'be'] },
    correct: 2,
    explanation: {
      el: 'Με το I πάντα βάζουμε am: I am = είμαι.',
      en: 'With I we always use am: I am.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Maths ___ my favourite subject.»', en: 'Complete: «Maths ___ my favourite subject.»' },
    options: { el: ['am', 'is', 'are', 'has'], en: ['am', 'is', 'are', 'has'] },
    correct: 1,
    explanation: {
      el: 'Το Maths είναι ένα μάθημα (ένα πράγμα), άρα is: Maths is = τα Μαθηματικά είναι.',
      en: 'Maths is one subject (one thing), so we use is.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Maria and Nikos ___ in the classroom.»', en: 'Complete: «Maria and Nikos ___ in the classroom.»' },
    options: { el: ['is', 'am', 'are', 'be'], en: ['is', 'am', 'are', 'be'] },
    correct: 2,
    explanation: {
      el: 'Η Μαρία και ο Νίκος είναι δύο άτομα (they), άρα are: They are = είναι.',
      en: 'Maria and Nikos are two people (they), so we use are.',
    },
  },
  {
    q: { el: 'Πώς ρωτάμε «Είσαι στη Δ\' τάξη;» στα αγγλικά;', en: 'How do you ask «Είσαι στη Δ\' τάξη;» in English?' },
    options: { el: ['You are in Class 4?', 'Are you in Class 4?', 'Is you in Class 4?', 'Am you in Class 4?'], en: ['You are in Class 4?', 'Are you in Class 4?', 'Is you in Class 4?', 'Am you in Class 4?'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση το ρήμα πάει μπροστά: Are you…? Με το you πάντα are.',
      en: 'In a question the verb goes first: Are you…? With you we always use are.',
    },
  },

  // ── 14–16: have got / has got ────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I ___ got Art on Friday.»', en: 'Complete: «I ___ got Art on Friday.»' },
    options: { el: ['has', 'have', 'am', 'is'], en: ['has', 'have', 'am', 'is'] },
    correct: 1,
    explanation: {
      el: 'I have got = έχω. Με τα I, you, we, they λέμε have got.',
      en: 'I have got. With I, you, we and they we say have got.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Eleni ___ got P.E. today.»', en: 'Complete: «Eleni ___ got P.E. today.»' },
    options: { el: ['have', 'is', 'has', 'are'], en: ['have', 'is', 'has', 'are'] },
    correct: 2,
    explanation: {
      el: 'Η Ελένη είναι she, και με he / she / it λέμε has got: Eleni has got = η Ελένη έχει.',
      en: 'Eleni is she, and with he / she / it we say has got.',
    },
  },
  {
    q: { el: 'Πώς ρωτάμε «Έχετε Αγγλικά τη Δευτέρα;» στα αγγλικά;', en: 'How do you ask «Έχετε Αγγλικά τη Δευτέρα;» in English?' },
    options: { el: ['You have got English on Monday?', 'Has you got English on Monday?', 'Have you got English on Monday?', 'Do you have got English on Monday?'], en: ['You have got English on Monday?', 'Has you got English on Monday?', 'Have you got English on Monday?', 'Do you have got English on Monday?'] },
    correct: 2,
    explanation: {
      el: 'Στην ερώτηση το have πάει μπροστά: Have you got…? Απάντηση: Yes, I have. / No, I haven\'t.',
      en: 'In a question have goes first: Have you got…? Answer: Yes, I have. / No, I haven\'t.',
    },
  },

  // ── 17–18: favourite subject ─────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος ρωτάει: «What\'s your favourite subject?» Ποια απάντηση είναι σωστή;', en: 'Giorgos asks: «What\'s your favourite subject?» Which answer is correct?' },
    options: { el: ['My favourite subject is Music.', 'My favourite day is Monday.', 'I am ten years old.', 'I have got a pencil.'], en: ['My favourite subject is Music.', 'My favourite day is Monday.', 'I am ten years old.', 'I have got a pencil.'] },
    correct: 0,
    explanation: {
      el: 'Όταν ρωτάνε για το αγαπημένο μάθημα (favourite subject), απαντάμε με ένα μάθημα: My favourite subject is Music.',
      en: 'When someone asks about your favourite subject, you answer with a subject: My favourite subject is Music.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η πρόταση «Her favourite subject is Science, but she hasn\'t got Science on Tuesday»;', en: 'What does «Her favourite subject is Science, but she hasn\'t got Science on Tuesday» mean?' },
    options: { el: ['Της αρέσουν οι Φυσικές Επιστήμες, αλλά δεν τις έχει την Τρίτη.', 'Της αρέσει η Γυμναστική, αλλά δεν την έχει την Τρίτη.', 'Δεν της αρέσουν οι Φυσικές Επιστήμες, αλλά τις έχει την Τρίτη.', 'Της αρέσουν οι Φυσικές Επιστήμες και τις έχει την Πέμπτη.'], en: ['She likes Science, but she does not have it on Tuesday.', 'She likes P.E., but she does not have it on Tuesday.', 'She does not like Science, but she has it on Tuesday.', 'She likes Science and she has it on Thursday.'] },
    correct: 0,
    explanation: {
      el: 'Favourite = αγαπημένο, hasn\'t got = δεν έχει, Tuesday = Τρίτη. Άρα: της αρέσουν οι Φυσικές Επιστήμες, αλλά δεν τις έχει την Τρίτη.',
      en: 'Favourite means she likes it most; hasn\'t got means she does not have it; Tuesday is Τρίτη.',
    },
  },
];
