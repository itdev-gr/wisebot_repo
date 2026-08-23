/**
 * Δ' Δημοτικού · Αγγλικά · Φαγητό & Ψώνια / Food & Shopping
 * =========================================================
 * Original questions for a Greek child of 9–10 learning English. In order:
 *   1–5   supermarket food vocabulary (bread, milk, cheese, vegetables, the shop itself)
 *   6–8   recipe words and phrases (ingredients, mix, «a glass of / a slice of»)
 *   9–11  countable vs uncountable nouns (apples / water, rice, eggs)
 *   12–15 some / any in positive sentences, questions and negatives
 *   16–18 «How much» vs «How many», and a shopping dialogue that mixes it all
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_FOOD_AND_SHOPPING: QuizQuestion[] = [
  // ── 1–5: supermarket food vocabulary ───────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ψωμί» στα αγγλικά;', en: 'How do you say «ψωμί» in English?' },
    options: { el: ['bread', 'butter', 'cheese', 'cake'], en: ['bread', 'butter', 'cheese', 'cake'] },
    correct: 0,
    explanation: {
      el: 'Ψωμί = bread. Butter είναι το βούτυρο, cheese το τυρί και cake το κέικ.',
      en: 'Ψωμί = bread. Butter is βούτυρο, cheese is τυρί and cake is κέικ.',
    },
  },
  {
    q: { el: 'Πώς λέμε «γάλα» στα αγγλικά;', en: 'How do you say «γάλα» in English?' },
    options: { el: ['juice', 'water', 'milk', 'honey'], en: ['juice', 'water', 'milk', 'honey'] },
    correct: 2,
    explanation: {
      el: 'Γάλα = milk. Juice είναι ο χυμός, water το νερό και honey το μέλι.',
      en: 'Γάλα = milk. Juice is χυμός, water is νερό and honey is μέλι.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι λαχανικό;', en: 'Which word is NOT a vegetable?' },
    options: { el: ['carrot', 'tomato', 'strawberry', 'potato'], en: ['carrot', 'tomato', 'strawberry', 'potato'] },
    correct: 2,
    explanation: {
      el: 'Strawberry (φράουλα) είναι φρούτο. Carrot (καρότο), tomato (ντομάτα) και potato (πατάτα) είναι λαχανικά.',
      en: 'A strawberry is a fruit. Carrot, tomato and potato are vegetables.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να φτιάξει ένα σάντουιτς με τυρί. Τι πρέπει να αγοράσει;', en: 'Eleni wants to make a cheese sandwich. What does she need to buy?' },
    options: { el: ['bread and cheese', 'bread and chicken', 'rice and cheese', 'eggs and bread'], en: ['bread and cheese', 'bread and chicken', 'rice and cheese', 'eggs and bread'] },
    correct: 0,
    explanation: {
      el: 'Για ένα cheese sandwich χρειάζεσαι bread (ψωμί) και cheese (τυρί).',
      en: 'For a cheese sandwich you need bread and cheese.',
    },
  },
  {
    q: { el: 'Πού αγοράζουμε φαγητό για το σπίτι;', en: 'Where do we buy food for the house?' },
    options: { el: ['at the library', 'at the supermarket', 'at the cinema', 'at the bank'], en: ['at the library', 'at the supermarket', 'at the cinema', 'at the bank'] },
    correct: 1,
    explanation: {
      el: 'Φαγητό αγοράζουμε at the supermarket (στο σούπερ μάρκετ). Library = βιβλιοθήκη, cinema = σινεμά, bank = τράπεζα.',
      en: 'We buy food at the supermarket. Library = βιβλιοθήκη, cinema = σινεμά, bank = τράπεζα.',
    },
  },

  // ── 6–8: recipes ───────────────────────────────────────────────────────────
  {
    q: { el: 'Σε μια συνταγή, η λέξη «ingredients» σημαίνει…', en: 'In a recipe, the word «ingredients» means…' },
    options: { el: ['τα πιάτα', 'τα υλικά', 'τον χρόνο', 'τον φούρνο'], en: ['the plates', 'the things you need', 'the time', 'the oven'] },
    correct: 1,
    explanation: {
      el: 'Ingredients = τα υλικά της συνταγής, π.χ. flour, eggs, sugar.',
      en: 'Ingredients are the things you need for a recipe, like flour, eggs and sugar.',
    },
  },
  {
    q: { el: 'Συνταγή για ομελέτα: «___ two eggs in a bowl.» Ποιο ρήμα ταιριάζει;', en: 'Omelette recipe: «___ two eggs in a bowl.» Which verb fits?' },
    options: { el: ['Read', 'Mix', 'Wash', 'Buy'], en: ['Read', 'Mix', 'Wash', 'Buy'] },
    correct: 1,
    explanation: {
      el: 'Mix = ανακατεύω. «Mix two eggs in a bowl» = Ανακάτεψε δύο αβγά σε ένα μπολ.',
      en: 'Mix means ανακατεύω. «Mix two eggs in a bowl» tells you to stir the eggs together.',
    },
  },
  {
    q: { el: 'Πώς λέμε «ένα ποτήρι νερό» στα αγγλικά;', en: 'How do you say «ένα ποτήρι νερό» in English?' },
    options: { el: ['a slice of water', 'a bottle of water', 'a glass of water', 'a cup of water'], en: ['a slice of water', 'a bottle of water', 'a glass of water', 'a cup of water'] },
    correct: 2,
    explanation: {
      el: 'Ποτήρι = glass, άρα «a glass of water». Bottle = μπουκάλι, cup = φλιτζάνι, slice = φέτα.',
      en: 'Ποτήρι = glass, so we say «a glass of water». Bottle = μπουκάλι, cup = φλιτζάνι, slice = φέτα.',
    },
  },

  // ── 9–11: countable / uncountable ──────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη μπορούμε να μετρήσουμε (one, two, three…);', en: 'Which word can we count (one, two, three…)?' },
    options: { el: ['water', 'apple', 'milk', 'sugar'], en: ['water', 'apple', 'milk', 'sugar'] },
    correct: 1,
    explanation: {
      el: 'Apple είναι μετρήσιμο: one apple, two apples. Water, milk και sugar δεν μετριούνται — λέμε «some water», όχι «two waters».',
      en: 'Apple is countable: one apple, two apples. Water, milk and sugar are uncountable — we say «some water», not «two waters».',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I want two rices.', 'I want some rice.', 'I want a rice.', 'I want many rice.'], en: ['I want two rices.', 'I want some rice.', 'I want a rice.', 'I want many rice.'] },
    correct: 1,
    explanation: {
      el: 'Το rice (ρύζι) δεν μετριέται, γι\' αυτό δεν παίρνει «a» ούτε «two». Λέμε «some rice».',
      en: 'Rice is uncountable, so it does not take «a» or «two». We say «some rice».',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['We need three egg.', 'We need three eggs.', 'We need a eggs.', 'We need three of egg.'], en: ['We need three egg.', 'We need three eggs.', 'We need a eggs.', 'We need three of egg.'] },
    correct: 1,
    explanation: {
      el: 'Το egg είναι μετρήσιμο. Μετά από αριθμό μεγαλύτερο του 1 βάζουμε -s: three eggs.',
      en: 'Egg is countable. After a number bigger than 1 we add -s: three eggs.',
    },
  },

  // ── 12–15: some / any ──────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «There is ___ milk in the fridge.»', en: 'Complete: «There is ___ milk in the fridge.»' },
    options: { el: ['some', 'any', 'a', 'many'], en: ['some', 'any', 'a', 'many'] },
    correct: 0,
    explanation: {
      el: 'Σε καταφατική πρόταση βάζουμε «some»: There is some milk.',
      en: 'In a positive sentence we use «some»: There is some milk.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Are there ___ bananas in the basket?»', en: 'Complete: «Are there ___ bananas in the basket?»' },
    options: { el: ['some', 'a', 'any', 'much'], en: ['some', 'a', 'any', 'much'] },
    correct: 2,
    explanation: {
      el: 'Στις ερωτήσεις βάζουμε «any»: Are there any bananas?',
      en: 'In questions we use «any»: Are there any bananas?',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Sorry, we don\'t have ___ oranges today.»', en: 'Complete: «Sorry, we don\'t have ___ oranges today.»' },
    options: { el: ['some', 'any', 'an', 'much'], en: ['some', 'any', 'an', 'much'] },
    correct: 1,
    explanation: {
      el: 'Στις αρνητικές προτάσεις (don\'t, doesn\'t) βάζουμε «any»: We don\'t have any oranges.',
      en: 'In negative sentences (don\'t, doesn\'t) we use «any»: We don\'t have any oranges.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει: «I\'d like ___ juice, please.» Ο πωλητής απαντά: «Sorry, there isn\'t ___ juice.»', en: 'Nikos says: «I\'d like ___ juice, please.» The shopkeeper answers: «Sorry, there isn\'t ___ juice.»' },
    options: { el: ['some / any', 'any / some', 'some / some', 'any / any'], en: ['some / any', 'any / some', 'some / some', 'any / any'] },
    correct: 0,
    explanation: {
      el: 'Όταν ζητάμε κάτι ευγενικά λέμε «some» (I\'d like some juice). Στην άρνηση «isn\'t» βάζουμε «any».',
      en: 'When we ask for something politely we say «some» (I\'d like some juice). With the negative «isn\'t» we use «any».',
    },
  },

  // ── 16–18: How much / How many ─────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «___ tomatoes do you want?»', en: 'Complete: «___ tomatoes do you want?»' },
    options: { el: ['How much', 'How many', 'How old', 'How long'], en: ['How much', 'How many', 'How old', 'How long'] },
    correct: 1,
    explanation: {
      el: 'Tomatoes είναι μετρήσιμες (έχουν -s), άρα ρωτάμε «How many tomatoes?».',
      en: 'Tomatoes are countable (they have -s), so we ask «How many tomatoes?».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ sugar do we need for the cake?»', en: 'Complete: «___ sugar do we need for the cake?»' },
    options: { el: ['How many', 'How old', 'How much', 'How far'], en: ['How many', 'How old', 'How much', 'How far'] },
    correct: 2,
    explanation: {
      el: 'Sugar (ζάχαρη) δεν μετριέται, άρα ρωτάμε «How much sugar?».',
      en: 'Sugar is uncountable, so we ask «How much sugar?».',
    },
  },
  {
    q: { el: 'Η Μαρία ρωτάει στο μανάβικο: «How much ___?» και ο μανάβης λέει «Two euros a kilo.» Τι ρώτησε;', en: 'Maria asks at the greengrocer\'s: «How much ___?» and he says «Two euros a kilo.» What did she ask?' },
    options: { el: ['are the apples', 'apples are there', 'many apples', 'is apples'], en: ['are the apples', 'apples are there', 'many apples', 'is apples'] },
    correct: 0,
    explanation: {
      el: '«How much are the apples?» = Πόσο κάνουν τα μήλα; Με το «How much» ρωτάμε και την τιμή. Τα apples είναι πολλά, άρα «are», όχι «is».',
      en: '«How much are the apples?» asks the price. With «How much» we can ask how much something costs. Apples are plural, so we say «are», not «is».',
    },
  },
];
