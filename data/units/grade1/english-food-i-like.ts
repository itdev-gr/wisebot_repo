/**
 * Α' Δημοτικού · Αγγλικά · «I like! Φαγητά» / "Food I Like"
 * ============================================================
 * Original questions for a child of 6–7 who is just starting English.
 * What the unit covers, in order:
 *   1–7   the food words: apple, banana, milk, cake, pizza, ice cream
 *   8–12  "I like …" — saying what you like
 *   13–16 "I don't like …" — saying what you do not like
 *   17–18 putting it together: like / don't like in a tiny dialogue
 * Distractors are the mix-ups children really make (apple/banana, milk/cake,
 * "I like" vs "I don't like", "like" vs "likes").
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ENGLISH_FOOD_I_LIKE: QuizQuestion[] = [
  // ── 1–7: the food words ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μήλο» στα αγγλικά;', en: 'How do you say «μήλο» in English?' },
    options: { el: ['banana', 'apple', 'milk', 'cake'], en: ['banana', 'apple', 'milk', 'cake'] },
    correct: 1,
    explanation: {
      el: 'Το μήλο στα αγγλικά είναι apple. Πες το: «apple»!',
      en: 'Μήλο in English is apple. Say it: “apple”!',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπανάνα» στα αγγλικά;', en: 'How do you say «μπανάνα» in English?' },
    options: { el: ['apple', 'pizza', 'banana', 'ice cream'], en: ['apple', 'pizza', 'banana', 'ice cream'] },
    correct: 2,
    explanation: {
      el: 'Η μπανάνα είναι banana. Μοιάζει πολύ με τη λέξη μας!',
      en: 'Μπανάνα is banana. It sounds a lot like the Greek word!',
    },
  },
  {
    q: { el: 'Πώς λέμε «γάλα» στα αγγλικά;', en: 'How do you say «γάλα» in English?' },
    options: { el: ['cake', 'apple', 'banana', 'milk'], en: ['cake', 'apple', 'banana', 'milk'] },
    correct: 3,
    explanation: {
      el: 'Το γάλα είναι milk. Το πίνουμε το πρωί!',
      en: 'Γάλα is milk. We drink it in the morning!',
    },
  },
  {
    q: { el: 'Πώς λέμε «κέικ» στα αγγλικά;', en: 'How do you say «κέικ» in English?' },
    options: { el: ['cake', 'milk', 'pizza', 'apple'], en: ['cake', 'milk', 'pizza', 'apple'] },
    correct: 0,
    explanation: {
      el: 'Το κέικ είναι cake. Το λέμε σχεδόν το ίδιο!',
      en: 'Κέικ is cake. We say it almost the same way!',
    },
  },
  {
    q: { el: 'Πώς λέμε «παγωτό» στα αγγλικά;', en: 'How do you say «παγωτό» in English?' },
    options: { el: ['pizza', 'ice cream', 'cake', 'milk'], en: ['pizza', 'ice cream', 'cake', 'milk'] },
    correct: 1,
    explanation: {
      el: 'Το παγωτό είναι ice cream. Δύο λέξεις: ice (πάγος) και cream (κρέμα).',
      en: 'Παγωτό is ice cream. Two words: ice and cream.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «pizza»;', en: 'What does the word «pizza» mean?' },
    options: { el: ['παγωτό', 'κέικ', 'πίτσα', 'μήλο'], en: ['ice cream', 'cake', 'pizza', 'apple'] },
    correct: 2,
    explanation: {
      el: 'Pizza σημαίνει πίτσα. Η λέξη είναι ίδια σε πολλές γλώσσες!',
      en: 'Pizza means πίτσα. The word is the same in many languages!',
    },
  },
  {
    q: { el: 'Ποιο από αυτά το πίνουμε;', en: 'Which one of these do we drink?' },
    options: { el: ['cake', 'banana', 'pizza', 'milk'], en: ['cake', 'banana', 'pizza', 'milk'] },
    correct: 3,
    explanation: {
      el: 'Το milk (γάλα) το πίνουμε. Τα άλλα τα τρώμε!',
      en: 'We drink milk. The others we eat!',
    },
  },

  // ── 8–12: I like … ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μου αρέσει» στα αγγλικά;', en: 'How do you say «μου αρέσει» in English?' },
    options: { el: ['I like', 'I eat', 'I am', 'I have'], en: ['I like', 'I eat', 'I am', 'I have'] },
    correct: 0,
    explanation: {
      el: '«Μου αρέσει» είναι I like. Πες: «I like apples!»',
      en: '«Μου αρέσει» is I like. Say: “I like apples!”',
    },
  },
  {
    q: { el: 'Πώς λέμε «Μου αρέσει η πίτσα» στα αγγλικά;', en: 'How do you say «Μου αρέσει η πίτσα» in English?' },
    options: { el: ['I like cake.', 'I like pizza.', 'I don\'t like pizza.', 'I like milk.'], en: ['I like cake.', 'I like pizza.', 'I don\'t like pizza.', 'I like milk.'] },
    correct: 1,
    explanation: {
      el: 'I like pizza. Πρώτα «I like» και μετά το φαγητό.',
      en: 'I like pizza. First “I like”, then the food.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «I ___ ice cream.» (μου αρέσει)', en: 'Fill in: “I ___ ice cream.” (I enjoy it)' },
    options: { el: ['am', 'like', 'is', 'likes'], en: ['am', 'like', 'is', 'likes'] },
    correct: 1,
    explanation: {
      el: 'I like ice cream. Μετά το «I» λέμε «like», όχι «likes».',
      en: 'I like ice cream. After “I” we say “like”, not “likes”.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει: «I like bananas.» Τι του αρέσει;', en: 'Nikos says: “I like bananas.” What does he like?' },
    options: { el: ['τα μήλα', 'το γάλα', 'οι μπανάνες', 'το κέικ'], en: ['apples', 'milk', 'bananas', 'cake'] },
    correct: 2,
    explanation: {
      el: 'Bananas = μπανάνες. Στον Νίκο αρέσουν οι μπανάνες.',
      en: 'Bananas = μπανάνες. Nikos likes bananas.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I like apple cake.', 'Like I cake.', 'I cake like.', 'Cake like I.'], en: ['I like apple cake.', 'Like I cake.', 'I cake like.', 'Cake like I.'] },
    correct: 0,
    explanation: {
      el: 'Η σειρά είναι: I + like + φαγητό. «I like apple cake.»',
      en: 'The order is: I + like + food. “I like apple cake.”',
    },
  },

  // ── 13–16: I don't like … ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «δεν μου αρέσει» στα αγγλικά;', en: 'How do you say «δεν μου αρέσει» in English?' },
    options: { el: ['I like', 'I no like', 'I don\'t like', 'I not like'], en: ['I like', 'I no like', 'I don\'t like', 'I not like'] },
    correct: 2,
    explanation: {
      el: '«Δεν μου αρέσει» είναι I don\'t like. Το «don\'t» σημαίνει «δεν».',
      en: '«Δεν μου αρέσει» is I don\'t like. “Don\'t” means “δεν”.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Δεν μου αρέσει το γάλα» στα αγγλικά;', en: 'How do you say «Δεν μου αρέσει το γάλα» in English?' },
    options: { el: ['I like milk.', 'I don\'t like cake.', 'I don\'t like milk.', 'I no like milk.'], en: ['I like milk.', 'I don\'t like cake.', 'I don\'t like milk.', 'I no like milk.'] },
    correct: 2,
    explanation: {
      el: 'I don\'t like milk. Βάζουμε το «don\'t» πριν από το «like».',
      en: 'I don\'t like milk. We put “don\'t” before “like”.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «I don\'t like cake.» Τι σημαίνει;', en: 'Eleni says: “I don\'t like cake.” What does it mean?' },
    options: { el: ['Της αρέσει το κέικ.', 'Δεν της αρέσει το κέικ.', 'Θέλει κέικ.', 'Έχει κέικ.'], en: ['She likes cake.', 'She doesn\'t like cake.', 'She wants cake.', 'She has cake.'] },
    correct: 1,
    explanation: {
      el: '«I don\'t like cake» = «Δεν μου αρέσει το κέικ». Το «don\'t» το κάνει αρνητικό.',
      en: '“I don\'t like cake” = «Δεν μου αρέσει το κέικ». The “don\'t” makes it negative.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «I ___ like bananas.» (δεν μου αρέσουν)', en: 'Fill in: “I ___ like bananas.” (I do not enjoy them)' },
    options: { el: ['no', 'not', 'don\'t', 'am'], en: ['no', 'not', 'don\'t', 'am'] },
    correct: 2,
    explanation: {
      el: 'I don\'t like bananas. Για το «δεν» λέμε «don\'t», όχι «no» ή «not» μόνο του.',
      en: 'I don\'t like bananas. For “δεν” we say “don\'t”, not “no” or “not” on its own.',
    },
  },

  // ── 17–18: like and don't like together ───────────────────────────────────
  {
    q: { el: 'Στη Μαρία αρέσει το παγωτό, αλλά όχι το γάλα. Τι λέει;', en: 'Maria likes ice cream but not milk. What does she say?' },
    options: { el: ['I like milk. I don\'t like ice cream.', 'I like ice cream. I don\'t like milk.', 'I don\'t like ice cream. I don\'t like milk.', 'I like ice cream. I like milk.'], en: ['I like milk. I don\'t like ice cream.', 'I like ice cream. I don\'t like milk.', 'I don\'t like ice cream. I don\'t like milk.', 'I like ice cream. I like milk.'] },
    correct: 1,
    explanation: {
      el: 'I like ice cream (μου αρέσει το παγωτό). I don\'t like milk (δεν μου αρέσει το γάλα).',
      en: 'I like ice cream. I don\'t like milk. One “like”, one “don\'t like”.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ρωτάει: «Do you like pizza?» Εσένα σου αρέσει. Τι απαντάς;', en: 'Giorgos asks: “Do you like pizza?” You like it. What do you answer?' },
    options: { el: ['No, I don\'t like pizza.', 'Yes, I like milk.', 'Yes, I like pizza.', 'No, I like pizza.'], en: ['No, I don\'t like pizza.', 'Yes, I like milk.', 'Yes, I like pizza.', 'No, I like pizza.'] },
    correct: 2,
    explanation: {
      el: 'Αν σου αρέσει, λες «Yes, I like pizza.» Αν όχι, «No, I don\'t like pizza.»',
      en: 'If you like it, say “Yes, I like pizza.” If not, “No, I don\'t like pizza.”',
    },
  },
];
