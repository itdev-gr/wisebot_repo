/**
 * Grade 1 · English Language Arts · Capitals & Full Stops
 * =======================================================
 * Original questions for a native English-speaking child of 6–7 (nothing from published books).
 * What the unit covers, in order:
 *   1–4   a sentence starts with a capital letter: spotting the one that does, and the capital form of a letter
 *   5–9   names, «I» and days of the week get capitals: Ben, Monday, «my dog and I»
 *   10–14 a sentence ends with a full stop or a question mark: which mark goes at the end
 *   15–18 which sentence is written correctly: capital at the start and the right mark at the end
 * Distractors are the real slips: lowercase names, a small «i», a missing full stop, a question with a full stop.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ELA_CAPITALS_AND_FULL_STOPS: QuizQuestion[] = [
  // ── 1–4: a sentence starts with a capital letter ───────────────────────────
  {
    q: { el: 'Με τι είδους γράμμα αρχίζει πάντα μια πρόταση;', en: 'What kind of letter does a sentence always start with?' },
    options: { el: ['a small letter', 'a capital letter', 'a number', 'a full stop'], en: ['a small letter', 'a capital letter', 'a number', 'a full stop'] },
    correct: 1,
    explanation: {
      el: 'Κάθε πρόταση αρχίζει με κεφαλαίο γράμμα. Το κεφαλαίο είναι σαν ένα σημάδι που λέει «εδώ αρχίζει κάτι νέο».',
      en: 'Every sentence starts with a capital letter. The capital is like a sign that says «something new starts here».',
    },
  },
  {
    q: { el: 'Ποια πρόταση αρχίζει με κεφαλαίο γράμμα;', en: 'Which sentence starts with a capital letter?' },
    options: { el: ['the cat is asleep.', 'my hat is red.', 'The bus is big.', 'we like to run.'], en: ['the cat is asleep.', 'my hat is red.', 'The bus is big.', 'we like to run.'] },
    correct: 2,
    explanation: {
      el: '«The bus is big.» αρχίζει με κεφαλαίο T. Οι άλλες αρχίζουν με μικρό γράμμα, και αυτό είναι λάθος για μια πρόταση.',
      en: '«The bus is big.» starts with a capital T. The others start with a small letter, and that is wrong for a sentence.',
    },
  },
  {
    q: { el: 'Ποιο είναι το κεφαλαίο του «d»;', en: 'Which is the capital letter of «d»?' },
    options: { el: ['b', 'B', 'P', 'D'], en: ['b', 'B', 'P', 'D'] },
    correct: 3,
    explanation: {
      el: 'Το μικρό d γράφεται κεφαλαίο D. Προσοχή: το b και το d μοιάζουν, αλλά το κεφαλαίο D έχει την κοιλιά δεξιά.',
      en: 'Small d is written as capital D. Careful: b and d look alike, but capital D has its round part on the right.',
    },
  },
  {
    q: { el: 'Ποια λέξη χρειάζεται κεφαλαίο για να αρχίσει σωστά η πρόταση «___ dog can swim.»;', en: 'Which word needs a capital to start the sentence «___ dog can swim.» correctly?' },
    options: { el: ['My', 'my', 'mY', 'MY'], en: ['My', 'my', 'mY', 'MY'] },
    correct: 0,
    explanation: {
      el: '«My dog can swim.» Μόνο το πρώτο γράμμα της πρότασης είναι κεφαλαίο: M μεγάλο, y μικρό.',
      en: '«My dog can swim.» Only the first letter of the sentence is a capital: big M, small y.',
    },
  },

  // ── 5–9: names, «I» and days of the week get capitals ─────────────────────
  {
    q: { el: 'Ποιο όνομα είναι γραμμένο σωστά;', en: 'Which name is written correctly?' },
    options: { el: ['ben', 'Ben', 'bEn', 'BEn'], en: ['ben', 'Ben', 'bEn', 'BEn'] },
    correct: 1,
    explanation: {
      el: 'Τα ονόματα των ανθρώπων αρχίζουν πάντα με κεφαλαίο: Ben, Mia, Sam. Μόνο το πρώτο γράμμα είναι κεφαλαίο.',
      en: 'People\'s names always start with a capital: Ben, Mia, Sam. Only the first letter is a capital.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['My friend mia has a cat.', 'my friend Mia has a cat.', 'My friend Mia has a cat.', 'My Friend Mia Has a cat.'], en: ['My friend mia has a cat.', 'my friend Mia has a cat.', 'My friend Mia has a cat.', 'My Friend Mia Has a cat.'] },
    correct: 2,
    explanation: {
      el: 'Το My παίρνει κεφαλαίο γιατί αρχίζει την πρόταση, και το Mia γιατί είναι όνομα. Οι άλλες λέξεις μένουν μικρές.',
      en: 'My gets a capital because it starts the sentence, and Mia gets one because it is a name. The other words stay small.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Sam and i like to swim.', 'Sam and I like to swim.', 'sam and I like to swim.', 'Sam And I like to swim.'], en: ['Sam and i like to swim.', 'Sam and I like to swim.', 'sam and I like to swim.', 'Sam And I like to swim.'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη I είναι πάντα κεφαλαίο, ακόμα και στη μέση της πρότασης. Το Sam παίρνει κεφαλαίο γιατί είναι όνομα.',
      en: 'The word I is always a capital, even in the middle of a sentence. Sam gets a capital because it is a name.',
    },
  },
  {
    q: { el: 'Ποια μέρα της εβδομάδας είναι γραμμένη σωστά;', en: 'Which day of the week is written correctly?' },
    options: { el: ['monday', 'MONday', 'monDay', 'Monday'], en: ['monday', 'MONday', 'monDay', 'Monday'] },
    correct: 3,
    explanation: {
      el: 'Οι μέρες της εβδομάδας αρχίζουν με κεφαλαίο: Monday, Tuesday, Wednesday. Είναι σαν ονόματα για τις μέρες.',
      en: 'Days of the week start with a capital: Monday, Tuesday, Wednesday. They are like names for the days.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ χρειάζεται κεφαλαίο γράμμα;', en: 'Which word does NOT need a capital letter?' },
    options: { el: ['friday', 'apple', 'emma', 'i'], en: ['friday', 'apple', 'emma', 'i'] },
    correct: 1,
    explanation: {
      el: 'Το apple είναι μια απλή λέξη, οπότε μένει μικρή. Το Friday είναι μέρα, το Emma είναι όνομα και το I είναι πάντα κεφαλαίο.',
      en: 'Apple is an ordinary word, so it stays small. Friday is a day, Emma is a name, and I is always a capital.',
    },
  },

  // ── 10–14: full stop or question mark ──────────────────────────────────────
  {
    q: { el: 'Τι βάζουμε στο τέλος μιας πρότασης που λέει κάτι;', en: 'What do we put at the end of a sentence that tells us something?' },
    options: { el: ['a comma ,', 'a full stop .', 'a capital letter', 'nothing'], en: ['a comma ,', 'a full stop .', 'a capital letter', 'nothing'] },
    correct: 1,
    explanation: {
      el: 'Μια πρόταση που λέει κάτι τελειώνει με τελεία. Η τελεία λέει στον αναγνώστη «σταμάτα, η πρόταση τελείωσε».',
      en: 'A telling sentence ends with a full stop. The full stop tells the reader «stop, the sentence is done».',
    },
  },
  {
    q: { el: 'Τι βάζουμε στο τέλος μιας ερώτησης;', en: 'What do we put at the end of a question?' },
    options: { el: ['a full stop .', 'a comma ,', 'a question mark ?', 'a capital letter'], en: ['a full stop .', 'a comma ,', 'a question mark ?', 'a capital letter'] },
    correct: 2,
    explanation: {
      el: 'Μια ερώτηση τελειώνει με ερωτηματικό. Μοιάζει με ένα γαντζάκι με μια τελεία από κάτω: ?',
      en: 'A question ends with a question mark. It looks like a little hook with a dot under it: ?',
    },
  },
  {
    q: { el: 'Ποιο σημείο πάει στο τέλος; «The frog can hop___»', en: 'Which mark goes at the end? «The frog can hop___»' },
    options: { el: ['?', ',', '!!', '.'], en: ['?', ',', '!!', '.'] },
    correct: 3,
    explanation: {
      el: '«The frog can hop.» Αυτή η πρόταση λέει κάτι για τον βάτραχο, δεν ρωτάει, οπότε παίρνει τελεία.',
      en: '«The frog can hop.» This sentence tells us something about the frog, it does not ask, so it gets a full stop.',
    },
  },
  {
    q: { el: 'Ποιο σημείο πάει στο τέλος; «Can the frog hop___»', en: 'Which mark goes at the end? «Can the frog hop___»' },
    options: { el: ['?', '.', ',', 'no mark'], en: ['?', '.', ',', 'no mark'] },
    correct: 0,
    explanation: {
      el: '«Can the frog hop?» Αυτή είναι ερώτηση, θέλει απάντηση. Οι ερωτήσεις τελειώνουν με ερωτηματικό.',
      en: '«Can the frog hop?» This is asking, it wants an answer. Questions end with a question mark.',
    },
  },
  {
    q: { el: 'Ποια από αυτές είναι ερώτηση;', en: 'Which one of these is a question?' },
    options: { el: ['I like red.', 'The sun is hot.', 'Where is my hat?', 'We can go now.'], en: ['I like red.', 'The sun is hot.', 'Where is my hat?', 'We can go now.'] },
    correct: 2,
    explanation: {
      el: '«Where is my hat?» ρωτάει κάτι, γι\' αυτό τελειώνει με ερωτηματικό. Λέξεις όπως where, what, who συχνά αρχίζουν ερωτήσεις.',
      en: '«Where is my hat?» is asking something, so it ends with a question mark. Words like where, what and who often start questions.',
    },
  },

  // ── 15–18: which sentence is written correctly ─────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['the fish can swim.', 'The fish can swim', 'The fish can swim.', 'the fish can swim'], en: ['the fish can swim.', 'The fish can swim', 'The fish can swim.', 'the fish can swim'] },
    correct: 2,
    explanation: {
      el: '«The fish can swim.» έχει κεφαλαίο T στην αρχή ΚΑΙ τελεία στο τέλος. Μια πρόταση χρειάζεται και τα δύο.',
      en: '«The fish can swim.» has a capital T at the start AND a full stop at the end. A sentence needs both.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Is it time for lunch?', 'is it time for lunch?', 'Is it time for lunch.', 'is it time for lunch'], en: ['Is it time for lunch?', 'is it time for lunch?', 'Is it time for lunch.', 'is it time for lunch'] },
    correct: 0,
    explanation: {
      el: '«Is it time for lunch?» αρχίζει με κεφαλαίο και τελειώνει με ερωτηματικό, γιατί ρωτάει κάτι.',
      en: '«Is it time for lunch?» starts with a capital and ends with a question mark, because it is asking something.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['on sunday we go to the park.', 'On Sunday we go to the park.', 'On sunday we go to the park.', 'On Sunday we go to the Park.'], en: ['on sunday we go to the park.', 'On Sunday we go to the park.', 'On sunday we go to the park.', 'On Sunday we go to the Park.'] },
    correct: 1,
    explanation: {
      el: 'Το On παίρνει κεφαλαίο γιατί αρχίζει την πρόταση, και το Sunday γιατί είναι μέρα. Το park είναι απλή λέξη και μένει μικρό.',
      en: 'On gets a capital because it starts the sentence, and Sunday because it is a day. Park is an ordinary word and stays small.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Today i saw Tom.', 'today I saw tom.', 'Today I saw tom.', 'Today I saw Tom.'], en: ['Today i saw Tom.', 'today I saw tom.', 'Today I saw tom.', 'Today I saw Tom.'] },
    correct: 3,
    explanation: {
      el: 'Τρία κεφαλαία: Today γιατί αρχίζει την πρόταση, I γιατί είναι πάντα κεφαλαίο, Tom γιατί είναι όνομα. Και τελεία στο τέλος.',
      en: 'Three capitals: Today because it starts the sentence, I because it is always a capital, Tom because it is a name. And a full stop at the end.',
    },
  },
];
