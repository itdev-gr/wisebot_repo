/**
 * Β' Δημοτικού · Αγγλικά · Υγιεινό Φαγητό / Healthy Food
 * =======================================================
 * Original questions for a child of 7–8 learning English as a foreign language.
 * What the unit covers, in order:
 *   1–5   fruit words: apple, banana, orange, strawberry, grapes
 *   6–9   vegetable words and the words "fruit" / "vegetables"
 *   10–12 healthy / unhealthy, breakfast (milk, cereal, eggs)
 *   13–18 "I like / I don't like", "Do you like…?", "Yes, I do / No, I don't"
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ENGLISH_HEALTHY_FOOD: QuizQuestion[] = [
  // ── 1–5: fruit ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μήλο» στα αγγλικά;', en: 'How do you say «μήλο» in English?' },
    options: { el: ['apple', 'banana', 'orange', 'pear'], en: ['apple', 'banana', 'orange', 'pear'] },
    correct: 0,
    explanation: {
      el: 'Το μήλο στα αγγλικά είναι «apple». Λέμε «an apple», γιατί αρχίζει με φωνήεν.',
      en: 'Apple is «μήλο». We say «an apple», because it starts with a vowel.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπανάνα» στα αγγλικά;', en: 'How do you say «μπανάνα» in English?' },
    options: { el: ['orange', 'banana', 'bread', 'cherry'], en: ['orange', 'banana', 'bread', 'cherry'] },
    correct: 1,
    explanation: {
      el: 'Η μπανάνα είναι «banana». Μοιάζει με το ελληνικό, αλλά γράφεται με ένα «n» στη μέση.',
      en: 'Banana is «μπανάνα». It sounds like the Greek word, with one «n» in the middle.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «orange»;', en: 'What does the word «orange» mean?' },
    options: { el: ['λεμόνι', 'ροδάκινο', 'πορτοκάλι', 'καρότο'], en: ['lemon', 'peach', 'orange', 'carrot'] },
    correct: 2,
    explanation: {
      el: '«Orange» είναι το πορτοκάλι. Η ίδια λέξη σημαίνει και το πορτοκαλί χρώμα!',
      en: '«Orange» is the fruit. The same word is also the colour orange!',
    },
  },
  {
    q: { el: 'Πώς λέμε «φράουλα» στα αγγλικά;', en: 'How do you say «φράουλα» in English?' },
    options: { el: ['cherry', 'grapes', 'apple', 'strawberry'], en: ['cherry', 'grapes', 'apple', 'strawberry'] },
    correct: 3,
    explanation: {
      el: 'Η φράουλα είναι «strawberry». Το «berry» είναι μικρό φρούτο, όπως η φράουλα.',
      en: 'Strawberry is «φράουλα». A «berry» is a small fruit, like the strawberry.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ένα φρούτο;', en: 'Which word is a fruit?' },
    options: { el: ['grapes', 'milk', 'potato', 'egg'], en: ['grapes', 'milk', 'potato', 'egg'] },
    correct: 0,
    explanation: {
      el: '«Grapes» είναι τα σταφύλια, ένα φρούτο. Το «milk» είναι γάλα, το «potato» πατάτα, το «egg» αβγό.',
      en: '«Grapes» are a fruit. «Milk», «potato» and «egg» are not fruit.',
    },
  },

  // ── 6–9: vegetables, fruit vs vegetables ────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «καρότο» στα αγγλικά;', en: 'How do you say «καρότο» in English?' },
    options: { el: ['tomato', 'carrot', 'cucumber', 'corn'], en: ['tomato', 'carrot', 'cucumber', 'corn'] },
    correct: 1,
    explanation: {
      el: 'Το καρότο είναι «carrot». Είναι ένα πορτοκαλί λαχανικό που το τρώνε και τα κουνέλια!',
      en: 'Carrot is «καρότο». It is an orange vegetable that rabbits love too!',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «tomato»;', en: 'What does the word «tomato» mean?' },
    options: { el: ['πατάτα', 'αγγούρι', 'μαρούλι', 'ντομάτα'], en: ['potato', 'cucumber', 'lettuce', 'tomato'] },
    correct: 3,
    explanation: {
      el: '«Tomato» είναι η ντομάτα. Προσοχή: το «potato» είναι η πατάτα — μοιάζουν, μην τα μπερδεύεις!',
      en: '«Tomato» is the red vegetable. Careful: «potato» is different — they look alike, do not mix them up!',
    },
  },
  {
    q: { el: 'Πώς λέμε «λαχανικά» στα αγγλικά;', en: 'How do you say «λαχανικά» in English?' },
    options: { el: ['fruit', 'salad', 'vegetables', 'food'], en: ['fruit', 'salad', 'vegetables', 'food'] },
    correct: 2,
    explanation: {
      el: 'Τα λαχανικά είναι «vegetables». Το «fruit» είναι τα φρούτα και το «food» είναι το φαγητό.',
      en: 'Λαχανικά are «vegetables». «Fruit» is φρούτα and «food» is φαγητό.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι λαχανικό και όχι φρούτο;', en: 'Which word is a vegetable, not a fruit?' },
    options: { el: ['banana', 'cucumber', 'strawberry', 'orange'], en: ['banana', 'cucumber', 'strawberry', 'orange'] },
    correct: 1,
    explanation: {
      el: 'Το «cucumber» είναι το αγγούρι, ένα λαχανικό. Τα άλλα τρία είναι φρούτα.',
      en: '«Cucumber» is a vegetable. The other three are fruit.',
    },
  },

  // ── 10–12: healthy / unhealthy, breakfast ───────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η λέξη «healthy»;', en: 'What does the word «healthy» mean?' },
    options: { el: ['νόστιμο', 'υγιεινό', 'γλυκό', 'ζεστό'], en: ['tasty', 'healthy', 'sweet', 'hot'] },
    correct: 1,
    explanation: {
      el: '«Healthy» σημαίνει υγιεινό, κάτι που κάνει καλό στο σώμα μας. Το αντίθετο είναι «unhealthy».',
      en: '«Healthy» means good for our body. The opposite is «unhealthy».',
    },
  },
  {
    q: { el: 'Ποιο φαγητό είναι «healthy»;', en: 'Which food is «healthy»?' },
    options: { el: ['chocolate', 'chips', 'an apple', 'a lollipop'], en: ['chocolate', 'chips', 'an apple', 'a lollipop'] },
    correct: 2,
    explanation: {
      el: 'Το μήλο («an apple») είναι υγιεινό φρούτο. Η σοκολάτα, τα πατατάκια και το γλειφιτζούρι είναι «unhealthy».',
      en: 'An apple is a healthy fruit. Chocolate, chips and a lollipop are «unhealthy».',
    },
  },
  {
    q: { el: 'Πώς λέμε «πρωινό» στα αγγλικά;', en: 'How do you say «πρωινό» in English?' },
    options: { el: ['lunch', 'dinner', 'breakfast', 'snack'], en: ['lunch', 'dinner', 'breakfast', 'snack'] },
    correct: 2,
    explanation: {
      el: 'Το πρωινό είναι «breakfast». Το «lunch» είναι το μεσημεριανό και το «dinner» το βραδινό.',
      en: 'Πρωινό is «breakfast». «Lunch» is the midday meal and «dinner» is the evening meal.',
    },
  },

  // ── 13–18: I like / I don't like / Do you like…? ────────────────────────────
  {
    q: { el: 'Τι σημαίνει «I like milk»;', en: 'What does «I like milk» mean?' },
    options: { el: ['Πίνω γάλα.', 'Μου αρέσει το γάλα.', 'Θέλω γάλα.', 'Δεν μου αρέσει το γάλα.'], en: ['I drink milk.', 'I like milk.', 'I want milk.', 'I don\'t like milk.'] },
    correct: 1,
    explanation: {
      el: '«I like» σημαίνει «μου αρέσει». «I like milk» = «Μου αρέσει το γάλα».',
      en: '«I like» tells us what we enjoy. «I like milk» means milk is something I enjoy.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Δεν μου αρέσουν τα αβγά» στα αγγλικά;', en: 'How do you say «Δεν μου αρέσουν τα αβγά» in English?' },
    options: { el: ['I like eggs.', 'I no like eggs.', 'I don\'t like eggs.', 'I not like eggs.'], en: ['I like eggs.', 'I no like eggs.', 'I don\'t like eggs.', 'I not like eggs.'] },
    correct: 2,
    explanation: {
      el: 'Για το «δεν» βάζουμε «don\'t» πριν το «like»: «I don\'t like eggs».',
      en: 'To say «not», we put «don\'t» before «like»: «I don\'t like eggs».',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «I ___ like carrots.»', en: 'Which word is missing? «I ___ like carrots.»' },
    options: { el: ['don\'t', 'no', 'not', 'isn\'t'], en: ['don\'t', 'no', 'not', 'isn\'t'] },
    correct: 0,
    explanation: {
      el: '«I don\'t like carrots» = «Δεν μου αρέσουν τα καρότα». Το «no» και το «not» μόνα τους δεν ταιριάζουν εδώ.',
      en: '«I don\'t like carrots.» The words «no» and «not» on their own do not fit here.',
    },
  },
  {
    q: { el: 'Πώς ρωτάμε «Σου αρέσουν οι μπανάνες;» στα αγγλικά;', en: 'How do you ask «Σου αρέσουν οι μπανάνες;» in English?' },
    options: { el: ['You like bananas?', 'Do you like bananas?', 'Are you like bananas?', 'Like you bananas?'], en: ['You like bananas?', 'Do you like bananas?', 'Are you like bananas?', 'Like you bananas?'] },
    correct: 1,
    explanation: {
      el: 'Η ερώτηση αρχίζει με «Do»: «Do you like bananas?». Το «Do» είναι η λέξη που κάνει την ερώτηση.',
      en: 'The question starts with «Do»: «Do you like bananas?». «Do» is the word that makes the question.',
    },
  },
  {
    q: { el: 'Ο Νίκος ρωτάει: «Do you like cereal?». Η Ελένη απαντάει «ναι». Τι λέει;', en: 'Nikos asks: «Do you like cereal?». Eleni answers «yes». What does she say?' },
    options: { el: ['Yes, I like.', 'Yes, I am.', 'Yes, I do.', 'Yes, I can.'], en: ['Yes, I like.', 'Yes, I am.', 'Yes, I do.', 'Yes, I can.'] },
    correct: 2,
    explanation: {
      el: 'Στην ερώτηση με «Do you like…?» απαντάμε «Yes, I do.» ή «No, I don\'t.».',
      en: 'To a «Do you like…?» question we answer «Yes, I do.» or «No, I don\'t.».',
    },
  },
  {
    q: { el: 'Η Μαρία λέει: «I don\'t like tomatoes, but I like cucumbers.» Τι της αρέσει;', en: 'Maria says: «I don\'t like tomatoes, but I like cucumbers.» What does she like?' },
    options: { el: ['οι ντομάτες', 'τίποτα', 'και τα δύο', 'τα αγγούρια'], en: ['tomatoes', 'nothing', 'both', 'cucumbers'] },
    correct: 3,
    explanation: {
      el: '«I don\'t like tomatoes» = δεν της αρέσουν οι ντομάτες. «I like cucumbers» = της αρέσουν τα αγγούρια.',
      en: '«I don\'t like tomatoes» means no to tomatoes. «I like cucumbers» means yes to cucumbers.',
    },
  },
];
