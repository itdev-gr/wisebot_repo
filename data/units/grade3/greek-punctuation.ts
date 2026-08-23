/**
 * Γ' Δημοτικού · Γλώσσα · Σημεία Στίξης & Είδη Προτάσεων
 * =======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9.
 *
 * What the unit covers, in order:
 *   1–6   the four kinds of sentence: statement, question, exclamation, command
 *   7–10  subject and verb — who does it, what they do
 *   11–16 punctuation: full stop, the Greek question mark «;», exclamation
 *         mark, commas in a list, capital letter after a full stop
 *   17–18 paragraph basics: when to start one and how it looks on the page
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_PUNCTUATION: QuizQuestion[] = [
  // ── 1–6: kinds of sentence ──────────────────────────────────────────────────
  {
    q: { el: '«Η Ελένη διαβάζει ένα βιβλίο.» Τι είδους πρόταση είναι;', en: '“Eleni is reading a book.” (Η Ελένη διαβάζει ένα βιβλίο.) What kind of sentence is it?' },
    options: { el: ['Ερωτηματική', 'Αποφαντική', 'Επιφωνηματική', 'Προστακτική'], en: ['Question (ερωτηματική)', 'Statement (αποφαντική)', 'Exclamation (επιφωνηματική)', 'Command (προστακτική)'] },
    correct: 1,
    explanation: {
      el: 'Η πρόταση απλώς μας λέει κάτι που γίνεται. Είναι αποφαντική και τελειώνει με τελεία.',
      en: 'The sentence simply tells us something that happens. It is a statement (αποφαντική) and ends with a full stop.',
    },
  },
  {
    q: { el: '«Πού είναι η μπάλα;» Τι είδους πρόταση είναι;', en: '“Where is the ball?” (Πού είναι η μπάλα;) What kind of sentence is it?' },
    options: { el: ['Ερωτηματική', 'Αποφαντική', 'Επιφωνηματική', 'Προστακτική'], en: ['Question (ερωτηματική)', 'Statement (αποφαντική)', 'Exclamation (επιφωνηματική)', 'Command (προστακτική)'] },
    correct: 0,
    explanation: {
      el: 'Η πρόταση ρωτάει κάτι, άρα είναι ερωτηματική. Στα ελληνικά το ερωτηματικό είναι το «;».',
      en: 'The sentence asks something, so it is a question (ερωτηματική). In Greek the question mark is «;».',
    },
  },
  {
    q: { el: '«Τι ωραία μέρα!» Τι είδους πρόταση είναι;', en: '“What a lovely day!” (Τι ωραία μέρα!) What kind of sentence is it?' },
    options: { el: ['Ερωτηματική', 'Αποφαντική', 'Επιφωνηματική', 'Προστακτική'], en: ['Question (ερωτηματική)', 'Statement (αποφαντική)', 'Exclamation (επιφωνηματική)', 'Command (προστακτική)'] },
    correct: 2,
    explanation: {
      el: 'Η πρόταση δείχνει χαρά και έκπληξη. Είναι επιφωνηματική και τελειώνει με θαυμαστικό (!).',
      en: 'The sentence shows joy and surprise. It is an exclamation (επιφωνηματική) and ends with an exclamation mark (!).',
    },
  },
  {
    q: { el: '«Κλείσε την πόρτα, σε παρακαλώ.» Τι είδους πρόταση είναι;', en: '“Close the door, please.” (Κλείσε την πόρτα, σε παρακαλώ.) What kind of sentence is it?' },
    options: { el: ['Ερωτηματική', 'Αποφαντική', 'Επιφωνηματική', 'Προστακτική'], en: ['Question (ερωτηματική)', 'Statement (αποφαντική)', 'Exclamation (επιφωνηματική)', 'Command (προστακτική)'] },
    correct: 3,
    explanation: {
      el: 'Η πρόταση ζητάει από κάποιον να κάνει κάτι. Είναι προστακτική.',
      en: 'The sentence asks someone to do something. It is a command (προστακτική).',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι ερωτηματική;', en: 'Which of these sentences is a question?' },
    options: { el: ['Ο Νίκος παίζει μπάλα.', 'Πόσο κάνει το παγωτό;', 'Τι όμορφο λουλούδι!', 'Έλα εδώ.'], en: ['Ο Νίκος παίζει μπάλα. (Nikos plays ball.)', 'Πόσο κάνει το παγωτό; (How much is the ice cream?)', 'Τι όμορφο λουλούδι! (What a pretty flower!)', 'Έλα εδώ. (Come here.)'] },
    correct: 1,
    explanation: {
      el: '«Πόσο κάνει το παγωτό;» ρωτάει κάτι και τελειώνει με ερωτηματικό «;».',
      en: '“Πόσο κάνει το παγωτό;” asks something and ends with the Greek question mark «;».',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι προστακτική;', en: 'Which of these sentences is a command?' },
    options: { el: ['Η Μαρία τρώει ένα μήλο.', 'Πού πας;', 'Πλύνε τα χέρια σου.', 'Τι κρύο κάνει!'], en: ['Η Μαρία τρώει ένα μήλο. (Maria is eating an apple.)', 'Πού πας; (Where are you going?)', 'Πλύνε τα χέρια σου. (Wash your hands.)', 'Τι κρύο κάνει! (How cold it is!)'] },
    correct: 2,
    explanation: {
      el: '«Πλύνε τα χέρια σου.» λέει σε κάποιον τι να κάνει. Αυτό είναι προστακτική πρόταση.',
      en: '“Πλύνε τα χέρια σου.” tells someone what to do. That is a command (προστακτική).',
    },
  },

  // ── 7–10: subject and verb ─────────────────────────────────────────────────
  {
    q: { el: '«Ο Γιώργος τρέχει στην αυλή.» Ποιο είναι το υποκείμενο;', en: '“Giorgos runs in the yard.” (Ο Γιώργος τρέχει στην αυλή.) Which word is the subject?' },
    options: { el: ['τρέχει', 'ο Γιώργος', 'στην αυλή', 'η αυλή'], en: ['τρέχει (runs)', 'ο Γιώργος (Giorgos)', 'στην αυλή (in the yard)', 'η αυλή (the yard)'] },
    correct: 1,
    explanation: {
      el: 'Υποκείμενο είναι αυτός που κάνει αυτό που λέει το ρήμα. Ποιος τρέχει; Ο Γιώργος.',
      en: 'The subject is the one who does what the verb says. Who runs? Giorgos (ο Γιώργος).',
    },
  },
  {
    q: { el: '«Η γάτα κοιμάται στον καναπέ.» Ποιο είναι το ρήμα;', en: '“The cat sleeps on the sofa.” (Η γάτα κοιμάται στον καναπέ.) Which word is the verb?' },
    options: { el: ['η γάτα', 'στον καναπέ', 'κοιμάται', 'καναπέ'], en: ['η γάτα (the cat)', 'στον καναπέ (on the sofa)', 'κοιμάται (sleeps)', 'καναπέ (sofa)'] },
    correct: 2,
    explanation: {
      el: 'Το ρήμα λέει τι κάνει το υποκείμενο. Τι κάνει η γάτα; Κοιμάται.',
      en: 'The verb says what the subject does. What does the cat do? It sleeps (κοιμάται).',
    },
  },
  {
    q: { el: '«Τα παιδιά παίζουν στο πάρκο.» Ποιος κάνει αυτό που λέει το ρήμα;', en: '“The children play in the park.” (Τα παιδιά παίζουν στο πάρκο.) Who does what the verb says?' },
    options: { el: ['τα παιδιά', 'παίζουν', 'στο πάρκο', 'το πάρκο'], en: ['τα παιδιά (the children)', 'παίζουν (play)', 'στο πάρκο (in the park)', 'το πάρκο (the park)'] },
    correct: 0,
    explanation: {
      el: 'Ρωτάμε «ποιος παίζει;» και η απάντηση είναι το υποκείμενο: τα παιδιά.',
      en: 'We ask “who plays?” and the answer is the subject: the children (τα παιδιά).',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι ρήμα;', en: 'Which of these words is a verb?' },
    options: { el: ['σπίτι', 'ψηλός', 'διαβάζω', 'Ελένη'], en: ['σπίτι (house)', 'ψηλός (tall)', 'διαβάζω (I read)', 'Ελένη (Eleni)'] },
    correct: 2,
    explanation: {
      el: 'Το «διαβάζω» δείχνει μια πράξη, κάτι που κάνουμε. Γι\' αυτό είναι ρήμα.',
      en: '“Διαβάζω” (I read) shows an action, something we do. That is why it is a verb.',
    },
  },

  // ── 11–16: punctuation ─────────────────────────────────────────────────────
  {
    q: { el: 'Τι βάζουμε στο τέλος μιας πρότασης που απλώς λέει κάτι;', en: 'What do we put at the end of a sentence that simply tells us something?' },
    options: { el: ['Ερωτηματικό (;)', 'Τελεία (.)', 'Θαυμαστικό (!)', 'Κόμμα (,)'], en: ['Question mark (;)', 'Full stop (.)', 'Exclamation mark (!)', 'Comma (,)'] },
    correct: 1,
    explanation: {
      el: 'Η αποφαντική πρόταση τελειώνει με τελεία. Η τελεία λέει: «εδώ η σκέψη τελείωσε».',
      en: 'A statement ends with a full stop. The full stop says: “the thought is finished here”.',
    },
  },
  {
    q: { el: '«Πώς σε λένε___» Ποιο σημείο στίξης λείπει;', en: '“Πώς σε λένε___” (What is your name) Which punctuation mark is missing?' },
    options: { el: ['.', ';', '!', ','], en: ['.', ';', '!', ','] },
    correct: 1,
    explanation: {
      el: 'Η πρόταση ρωτάει, άρα θέλει ερωτηματικό. Στα ελληνικά το ερωτηματικό γράφεται «;».',
      en: 'The sentence asks a question, so it needs a question mark. In Greek the question mark is written «;».',
    },
  },
  {
    q: { el: '«Τι ωραίο δώρο___» Ποιο σημείο στίξης λείπει;', en: '“Τι ωραίο δώρο___” (What a nice present) Which punctuation mark is missing?' },
    options: { el: ['.', ';', '!', ','], en: ['.', ';', '!', ','] },
    correct: 2,
    explanation: {
      el: 'Η πρόταση δείχνει χαρά, άρα είναι επιφωνηματική και θέλει θαυμαστικό (!).',
      en: 'The sentence shows joy, so it is an exclamation and needs an exclamation mark (!).',
    },
  },
  {
    q: { el: '«Αγόρασα μήλα___ αχλάδια και πορτοκάλια.» Ποιο σημείο στίξης λείπει;', en: '“Αγόρασα μήλα___ αχλάδια και πορτοκάλια.” (I bought apples, pears and oranges.) Which punctuation mark is missing?' },
    options: { el: ['Τελεία (.)', 'Θαυμαστικό (!)', 'Ερωτηματικό (;)', 'Κόμμα (,)'], en: ['Full stop (.)', 'Exclamation mark (!)', 'Question mark (;)', 'Comma (,)'] },
    correct: 3,
    explanation: {
      el: 'Όταν λέμε πολλά πράγματα στη σειρά, τα χωρίζουμε με κόμμα. Πριν από το «και» δεν βάζουμε κόμμα.',
      en: 'When we list several things, we separate them with commas. We do not put a comma before “και” (and).',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει το σωστό σημείο στίξης στο τέλος;', en: 'Which sentence has the correct punctuation mark at the end?' },
    options: { el: ['Πότε θα πάμε στη θάλασσα.', 'Πότε θα πάμε στη θάλασσα!', 'Πότε θα πάμε στη θάλασσα;', 'Πότε θα πάμε στη θάλασσα,'], en: ['Πότε θα πάμε στη θάλασσα.', 'Πότε θα πάμε στη θάλασσα!', 'Πότε θα πάμε στη θάλασσα;', 'Πότε θα πάμε στη θάλασσα,'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη «πότε» ρωτάει. Η πρόταση είναι ερωτηματική, άρα τελειώνει με «;».',
      en: 'The word “πότε” (when) asks something. The sentence is a question, so it ends with «;».',
    },
  },
  {
    q: { el: 'Τι κάνουμε πάντα μετά από μια τελεία;', en: 'What do we always do after a full stop?' },
    options: { el: ['Ξεκινάμε την επόμενη λέξη με κεφαλαίο γράμμα', 'Βάζουμε κόμμα', 'Αλλάζουμε σελίδα', 'Γράφουμε όλη την επόμενη λέξη με κεφαλαία'], en: ['Start the next word with a capital letter', 'Put a comma', 'Turn to a new page', 'Write the whole next word in capitals'] },
    correct: 0,
    explanation: {
      el: 'Μετά την τελεία αρχίζει καινούργια πρόταση, και κάθε πρόταση ξεκινάει με κεφαλαίο γράμμα.',
      en: 'After a full stop a new sentence begins, and every sentence starts with a capital letter.',
    },
  },

  // ── 17–18: paragraph basics ────────────────────────────────────────────────
  {
    q: { el: 'Πότε αρχίζουμε καινούργια παράγραφο;', en: 'When do we start a new paragraph?' },
    options: { el: ['Σε κάθε καινούργια λέξη', 'Όταν αλλάζουμε θέμα ή ιδέα', 'Μετά από κάθε κόμμα', 'Όταν τελειώνει η σελίδα'], en: ['At every new word', 'When we change topic or idea', 'After every comma', 'When the page ends'] },
    correct: 1,
    explanation: {
      el: 'Μια παράγραφος μιλάει για μία ιδέα. Όταν θέλουμε να πούμε κάτι διαφορετικό, αρχίζουμε νέα παράγραφο.',
      en: 'A paragraph is about one idea. When we want to say something different, we start a new paragraph.',
    },
  },
  {
    q: { el: 'Πώς δείχνουμε στο χαρτί ότι αρχίζει μια νέα παράγραφος;', en: 'How do we show on the page that a new paragraph begins?' },
    options: { el: ['Γράφουμε με κόκκινο στυλό', 'Βάζουμε θαυμαστικό στην αρχή', 'Ξεκινάμε από νέα γραμμή, λίγο πιο μέσα', 'Βάζουμε δύο τελείες'], en: ['We write with a red pen', 'We put an exclamation mark at the start', 'We start on a new line, a little further in', 'We put two full stops'] },
    correct: 2,
    explanation: {
      el: 'Η νέα παράγραφος αρχίζει σε νέα γραμμή και αφήνουμε ένα μικρό κενό στην αρχή. Έτσι το κείμενο διαβάζεται πιο εύκολα.',
      en: 'A new paragraph starts on a new line with a small space at the beginning. That makes the text easier to read.',
    },
  },
];
