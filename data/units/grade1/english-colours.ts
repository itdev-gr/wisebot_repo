/**
 * Α' Δημοτικού · Αγγλικά · Χρώματα / Colours
 * ==========================================
 * Original questions for a child of 6–7 who is just starting English.
 * What the unit covers, in order:
 *   1–6   the six colour words: red, blue, green, yellow, black, white
 *   7–11  recognising colours of everyday things (sun, sky, grass, snow…)
 *   12–15 the question «What colour is it?» and the answer «It's red»
 *   16–18 putting it together: colour + thing, the sentence «It's ___»
 * Distractors are the real mixes: blue/black, white/yellow, green/grey.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ENGLISH_COLOURS: QuizQuestion[] = [
  // ── 1–6: the colour words ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «κόκκινο» στα αγγλικά;', en: 'How do you say «κόκκινο» in English?' },
    options: { el: ['red', 'blue', 'green', 'yellow'], en: ['red', 'blue', 'green', 'yellow'] },
    correct: 0,
    explanation: {
      el: 'Κόκκινο = red. Το λέμε «ρεντ».',
      en: 'Κόκκινο = red.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπλε» στα αγγλικά;', en: 'How do you say «μπλε» in English?' },
    options: { el: ['black', 'blue', 'red', 'white'], en: ['black', 'blue', 'red', 'white'] },
    correct: 1,
    explanation: {
      el: 'Μπλε = blue. Το λέμε «μπλου». Προσοχή: το black είναι το μαύρο!',
      en: 'Μπλε = blue. Careful: black is μαύρο!',
    },
  },
  {
    q: { el: 'Πώς λέμε «πράσινο» στα αγγλικά;', en: 'How do you say «πράσινο» in English?' },
    options: { el: ['yellow', 'blue', 'green', 'black'], en: ['yellow', 'blue', 'green', 'black'] },
    correct: 2,
    explanation: {
      el: 'Πράσινο = green. Το λέμε «γκριν».',
      en: 'Πράσινο = green.',
    },
  },
  {
    q: { el: 'Πώς λέμε «κίτρινο» στα αγγλικά;', en: 'How do you say «κίτρινο» in English?' },
    options: { el: ['white', 'green', 'red', 'yellow'], en: ['white', 'green', 'red', 'yellow'] },
    correct: 3,
    explanation: {
      el: 'Κίτρινο = yellow. Το λέμε «γιέλοου».',
      en: 'Κίτρινο = yellow.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μαύρο» στα αγγλικά;', en: 'How do you say «μαύρο» in English?' },
    options: { el: ['blue', 'black', 'white', 'green'], en: ['blue', 'black', 'white', 'green'] },
    correct: 1,
    explanation: {
      el: 'Μαύρο = black. Το λέμε «μπλακ». Μοιάζει με το blue, αλλά είναι άλλο χρώμα!',
      en: 'Μαύρο = black. It looks like blue, but it is a different colour!',
    },
  },
  {
    q: { el: 'Πώς λέμε «άσπρο» στα αγγλικά;', en: 'How do you say «άσπρο» in English?' },
    options: { el: ['yellow', 'black', 'white', 'red'], en: ['yellow', 'black', 'white', 'red'] },
    correct: 2,
    explanation: {
      el: 'Άσπρο = white. Το λέμε «ουάιτ».',
      en: 'Άσπρο = white.',
    },
  },

  // ── 7–11: colours of everyday things ───────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η λέξη «green»;', en: 'What does the word «green» mean?' },
    options: { el: ['κίτρινο', 'πράσινο', 'μπλε', 'άσπρο'], en: ['κίτρινο', 'πράσινο', 'μπλε', 'άσπρο'] },
    correct: 1,
    explanation: {
      el: 'Green σημαίνει πράσινο, όπως το γρασίδι.',
      en: 'Green means πράσινο, like the grass.',
    },
  },
  {
    q: { el: 'Ο ήλιος είναι…', en: 'The sun is…' },
    options: { el: ['blue', 'black', 'yellow', 'green'], en: ['blue', 'black', 'yellow', 'green'] },
    correct: 2,
    explanation: {
      el: 'The sun is yellow. Ο ήλιος είναι κίτρινος.',
      en: 'The sun is yellow.',
    },
  },
  {
    q: { el: 'Ο ουρανός μια ηλιόλουστη μέρα είναι…', en: 'The sky on a sunny day is…' },
    options: { el: ['blue', 'red', 'black', 'white'], en: ['blue', 'red', 'black', 'white'] },
    correct: 0,
    explanation: {
      el: 'The sky is blue. Ο ουρανός είναι μπλε.',
      en: 'The sky is blue.',
    },
  },
  {
    q: { el: 'Το χιόνι είναι…', en: 'Snow is…' },
    options: { el: ['yellow', 'green', 'white', 'blue'], en: ['yellow', 'green', 'white', 'blue'] },
    correct: 2,
    explanation: {
      el: 'Snow is white. Το χιόνι είναι άσπρο.',
      en: 'Snow is white.',
    },
  },
  {
    q: { el: 'Η νύχτα χωρίς φεγγάρι είναι…', en: 'A night with no moon is…' },
    options: { el: ['white', 'yellow', 'red', 'black'], en: ['white', 'yellow', 'red', 'black'] },
    correct: 3,
    explanation: {
      el: 'The night is black. Η νύχτα είναι μαύρη.',
      en: 'The night is black.',
    },
  },

  // ── 12–15: «What colour is it?» / «It's red» ───────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε στα αγγλικά «Τι χρώμα είναι;»', en: 'How do we ask «Τι χρώμα είναι;» in English?' },
    options: { el: ['What is it?', 'What colour is it?', 'Where is it?', 'Who is it?'], en: ['What is it?', 'What colour is it?', 'Where is it?', 'Who is it?'] },
    correct: 1,
    explanation: {
      el: '«What colour is it?» = «Τι χρώμα είναι;». Η λέξη colour σημαίνει χρώμα.',
      en: '«What colour is it?» asks about the colour. The word colour means χρώμα.',
    },
  },
  {
    q: { el: 'Η Μαρία ρωτάει: «What colour is it?» Η ντομάτα είναι κόκκινη. Τι απαντάς;', en: 'Maria asks: «What colour is it?» The tomato is red. What do you answer?' },
    options: { el: ['It\'s green.', 'It\'s red.', 'It\'s blue.', 'It\'s white.'], en: ['It\'s green.', 'It\'s red.', 'It\'s blue.', 'It\'s white.'] },
    correct: 1,
    explanation: {
      el: 'Απαντάμε «It\'s red.» — «Είναι κόκκινο.»',
      en: 'We answer «It\'s red.»',
    },
  },
  {
    q: { el: 'Ο Νίκος δείχνει ένα φύλλο δέντρου. «What colour is it?»', en: 'Nikos points at a leaf. «What colour is it?»' },
    options: { el: ['It\'s black.', 'It\'s yellow.', 'It\'s white.', 'It\'s green.'], en: ['It\'s black.', 'It\'s yellow.', 'It\'s white.', 'It\'s green.'] },
    correct: 3,
    explanation: {
      el: 'Το φύλλο είναι πράσινο: «It\'s green.»',
      en: 'The leaf is green: «It\'s green.»',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «It\'s ___.» (Είναι μπλε.)', en: 'Which word is missing? «It\'s ___.» (It is blue.)' },
    options: { el: ['blue', 'black', 'green', 'red'], en: ['blue', 'black', 'green', 'red'] },
    correct: 0,
    explanation: {
      el: '«It\'s blue.» = «Είναι μπλε.» Το χρώμα μπαίνει μετά το It\'s.',
      en: '«It\'s blue.» The colour goes after It\'s.',
    },
  },

  // ── 16–18: putting it together ─────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη λείπει; «What ___ is it?»', en: 'Which word is missing? «What ___ is it?»' },
    options: { el: ['name', 'colour', 'red', 'day'], en: ['name', 'colour', 'red', 'day'] },
    correct: 1,
    explanation: {
      el: 'Η ερώτηση είναι «What colour is it?». Το colour σημαίνει χρώμα.',
      en: 'The question is «What colour is it?». Colour means χρώμα.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «It\'s yellow.» Τι χρώμα είναι;', en: 'Eleni says: «It\'s yellow.» What colour is it?' },
    options: { el: ['άσπρο', 'πράσινο', 'κίτρινο', 'μαύρο'], en: ['άσπρο', 'πράσινο', 'κίτρινο', 'μαύρο'] },
    correct: 2,
    explanation: {
      el: '«It\'s yellow.» σημαίνει «Είναι κίτρινο.»',
      en: '«It\'s yellow.» means «Είναι κίτρινο.»',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει ένα μαύρο αυτοκινητάκι. Τι λέει;', en: 'Giorgos has a black toy car. What does he say?' },
    options: { el: ['It\'s blue.', 'It\'s white.', 'It\'s red.', 'It\'s black.'], en: ['It\'s blue.', 'It\'s white.', 'It\'s red.', 'It\'s black.'] },
    correct: 3,
    explanation: {
      el: 'Μαύρο = black. Ο Γιώργος λέει «It\'s black.»',
      en: 'Μαύρο = black. Giorgos says «It\'s black.»',
    },
  },
];
