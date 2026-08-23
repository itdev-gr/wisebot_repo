/**
 * Γ' Δημοτικού · Αγγλικά · Φαγητό & Καθημερινότητα — "Food & My Day"
 * ====================================================================
 * The child is Greek and learning English as a foreign language (8–9 ετών).
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 *
 * What the unit covers, in order:
 *   1–5   food vocabulary: apple, bread, milk, egg, cheese (the word ↔ the Greek meaning)
 *   6–8   meals and healthy habits: breakfast / lunch / dinner, fruit, water
 *   9–12  daily routine verbs: get up, brush my teeth, have breakfast, go to bed
 *   13–18 present simple I / you: "I get up", "You eat", "Do you…?", negatives with don't
 *
 * Distractors are the real mistakes: the neighbouring meal, a look-alike word
 * (bread / break), adding -s after I/you, forgetting "do" in questions.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ENGLISH_FOOD_AND_ROUTINE: QuizQuestion[] = [
  // ── 1–5: food words ──────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μήλο» στα αγγλικά;', en: 'How do you say «μήλο» in English?' },
    options: { el: ['orange', 'apple', 'banana', 'egg'], en: ['orange', 'apple', 'banana', 'egg'] },
    correct: 1,
    explanation: {
      el: 'Μήλο = apple. Το orange είναι το πορτοκάλι και το banana η μπανάνα.',
      en: 'Μήλο = apple. Orange is πορτοκάλι and banana is μπανάνα.',
    },
  },
  {
    q: { el: 'Πώς λέμε «ψωμί» στα αγγλικά;', en: 'How do you say «ψωμί» in English?' },
    options: { el: ['break', 'bread', 'cake', 'rice'], en: ['break', 'bread', 'cake', 'rice'] },
    correct: 1,
    explanation: {
      el: 'Ψωμί = bread, με d στο τέλος. Το break σημαίνει «σπάω» ή «διάλειμμα» — μοιάζει, αλλά είναι άλλη λέξη!',
      en: 'Ψωμί = bread, with a d at the end. Break means «σπάω» or «διάλειμμα» — it looks similar, but it is a different word!',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «milk»;', en: 'What does the word «milk» mean?' },
    options: { el: ['νερό', 'χυμός', 'γάλα', 'τσάι'], en: ['water', 'juice', 'milk', 'tea'] },
    correct: 2,
    explanation: {
      el: 'Milk = γάλα. Νερό = water, χυμός = juice, τσάι = tea.',
      en: 'Milk = γάλα. Water = νερό, juice = χυμός, tea = τσάι.',
    },
  },
  {
    q: { el: 'Η Ελένη τρώει ένα αυγό. Ποια λέξη λείπει; «Eleni eats an ___.»', en: 'Eleni eats an egg. Which word is missing? «Eleni eats an ___.»' },
    options: { el: ['egg', 'cheese', 'fish', 'tomato'], en: ['egg', 'cheese', 'fish', 'tomato'] },
    correct: 0,
    explanation: {
      el: 'Αυγό = egg. Λέμε «an egg» γιατί η λέξη αρχίζει από φωνήεν (e).',
      en: 'Αυγό = egg. We say «an egg» because the word starts with a vowel (e).',
    },
  },
  {
    q: { el: 'Πώς λέμε «τυρί» στα αγγλικά;', en: 'How do you say «τυρί» in English?' },
    options: { el: ['chicken', 'chips', 'cherry', 'cheese'], en: ['chicken', 'chips', 'cherry', 'cheese'] },
    correct: 3,
    explanation: {
      el: 'Τυρί = cheese. Το chicken είναι το κοτόπουλο, τα chips οι πατάτες τηγανητές και το cherry το κεράσι.',
      en: 'Τυρί = cheese. Chicken is κοτόπουλο, chips are πατάτες τηγανητές and cherry is κεράσι.',
    },
  },

  // ── 6–8: meals and healthy habits ───────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται το πρωινό γεύμα στα αγγλικά;', en: 'What is the morning meal called in English?' },
    options: { el: ['lunch', 'dinner', 'breakfast', 'snack'], en: ['lunch', 'dinner', 'breakfast', 'snack'] },
    correct: 2,
    explanation: {
      el: 'Πρωινό = breakfast. Μεσημεριανό = lunch, βραδινό = dinner.',
      en: 'Πρωινό = breakfast. Lunch is μεσημεριανό and dinner is βραδινό.',
    },
  },
  {
    q: { el: 'Ο Νίκος τρώει το βράδυ με την οικογένειά του. Ποιο γεύμα είναι αυτό;', en: 'Nikos eats in the evening with his family. Which meal is this?' },
    options: { el: ['breakfast', 'lunch', 'dinner', 'morning'], en: ['breakfast', 'lunch', 'dinner', 'morning'] },
    correct: 2,
    explanation: {
      el: 'Το βραδινό φαγητό είναι το dinner. Το morning δεν είναι γεύμα — σημαίνει «πρωί».',
      en: 'The evening meal is dinner. Morning is not a meal — it means «πρωί».',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι το πιο υγιεινό σνακ (healthy snack);', en: 'Which of these is the healthiest snack?' },
    options: { el: ['a banana', 'a lollipop', 'chips', 'a chocolate bar'], en: ['a banana', 'a lollipop', 'chips', 'a chocolate bar'] },
    correct: 0,
    explanation: {
      el: 'Τα φρούτα (fruit) όπως η banana είναι healthy — υγιεινά. Τα γλυκά και τα chips τα τρώμε πού και πού, όχι κάθε μέρα.',
      en: 'Fruit like a banana is healthy. Sweets and chips are for now and then, not every day.',
    },
  },

  // ── 9–12: daily routine verbs ───────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «I get up»;', en: 'What does «I get up» mean?' },
    options: { el: ['Σηκώνομαι από το κρεβάτι', 'Πάω για ύπνο', 'Τρώω πρωινό', 'Πλένω τα δόντια μου'], en: ['I get out of bed', 'I go to sleep', 'I eat breakfast', 'I clean my teeth'] },
    correct: 0,
    explanation: {
      el: 'Get up = σηκώνομαι από το κρεβάτι. Είναι το πρώτο πράγμα που κάνουμε το πρωί!',
      en: 'Get up = σηκώνομαι. It is the first thing we do in the morning!',
    },
  },
  {
    q: { el: 'Η Μαρία πλένει τα δόντια της. Ποια φράση λείπει; «I ___ my teeth.»', en: 'Maria cleans her teeth. Which phrase is missing? «I ___ my teeth.»' },
    options: { el: ['wash', 'brush', 'eat', 'comb'], en: ['wash', 'brush', 'eat', 'comb'] },
    correct: 1,
    explanation: {
      el: 'Στα αγγλικά λέμε «brush my teeth» — βουρτσίζω τα δόντια μου. Το comb είναι για τα μαλλιά (comb my hair).',
      en: 'In English we say «brush my teeth». Comb is for hair (comb my hair).',
    },
  },
  {
    q: { el: 'Ποια φράση σημαίνει «τρώω πρωινό»;', en: 'Which phrase means «τρώω πρωινό»?' },
    options: { el: ['go to school', 'have breakfast', 'get dressed', 'have a shower'], en: ['go to school', 'have breakfast', 'get dressed', 'have a shower'] },
    correct: 1,
    explanation: {
      el: 'Τρώω πρωινό = have breakfast (ή eat breakfast). Get dressed = ντύνομαι, have a shower = κάνω ντους.',
      en: 'Τρώω πρωινό = have breakfast (or eat breakfast). Get dressed = ντύνομαι, have a shower = κάνω ντους.',
    },
  },
  {
    q: { el: 'Τι κάνει ο Γιώργος τελευταίο τη μέρα; Βάλε τη σωστή φράση: «At night I ___.»', en: 'What does Giorgos do last in the day? Pick the right phrase: «At night I ___.»' },
    options: { el: ['get up', 'go to school', 'have lunch', 'go to bed'], en: ['get up', 'go to school', 'have lunch', 'go to bed'] },
    correct: 3,
    explanation: {
      el: 'Go to bed = πάω για ύπνο. Το βράδυ πάμε για ύπνο, το πρωί σηκωνόμαστε (get up).',
      en: 'Go to bed = πάω για ύπνο. At night we go to bed, in the morning we get up.',
    },
  },

  // ── 13–18: present simple with I / you ──────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I gets up at seven.', 'I get up at seven.', 'I getting up at seven.', 'I am get up at seven.'], en: ['I gets up at seven.', 'I get up at seven.', 'I getting up at seven.', 'I am get up at seven.'] },
    correct: 1,
    explanation: {
      el: 'Με το I το ρήμα μένει όπως είναι: I get up. Το -s μπαίνει μόνο με he / she / it.',
      en: 'With I the verb stays the same: I get up. The -s is only for he / she / it.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «You ___ milk every morning.»', en: 'Fill in: «You ___ milk every morning.»' },
    options: { el: ['drinks', 'drinking', 'drink', 'drank'], en: ['drinks', 'drinking', 'drink', 'drank'] },
    correct: 2,
    explanation: {
      el: 'Με το you λέμε «you drink» — χωρίς -s. Every morning = κάθε πρωί, κάτι που κάνουμε συνέχεια.',
      en: 'With you we say «you drink» — no -s. Every morning means something we do all the time.',
    },
  },
  {
    q: { el: 'Πώς ρωτάμε «Τρως πρωινό;» στα αγγλικά;', en: 'How do we ask «Τρως πρωινό;» in English?' },
    options: { el: ['You eat breakfast?', 'Do you eat breakfast?', 'Eat you breakfast?', 'Does you eat breakfast?'], en: ['You eat breakfast?', 'Do you eat breakfast?', 'Eat you breakfast?', 'Does you eat breakfast?'] },
    correct: 1,
    explanation: {
      el: 'Για να ρωτήσουμε, βάζουμε το Do μπροστά: Do you eat breakfast? Το does είναι για he / she / it.',
      en: 'To ask a question we put Do at the front: Do you eat breakfast? Does is for he / she / it.',
    },
  },
  {
    q: { el: 'Η Ελένη δεν πίνει τσάι. Ποια πρόταση το λέει σωστά;', en: 'Eleni does not drink tea. Which sentence says it correctly (as Eleni)?' },
    options: { el: ['I no drink tea.', 'I not drink tea.', 'I don\'t drink tea.', 'I don\'t drinks tea.'], en: ['I no drink tea.', 'I not drink tea.', 'I don\'t drink tea.', 'I don\'t drinks tea.'] },
    correct: 2,
    explanation: {
      el: 'Για το «δεν» λέμε don\'t (= do not): I don\'t drink tea. Μετά το don\'t το ρήμα μένει σκέτο, χωρίς -s.',
      en: 'For «δεν» we use don\'t (= do not): I don\'t drink tea. After don\'t the verb stays plain, no -s.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή απάντηση; «Do you like cheese?» — «Yes, ___.»', en: 'Which is the right answer? «Do you like cheese?» — «Yes, ___.»' },
    options: { el: ['I like', 'I do', 'I am', 'you do'], en: ['I like', 'I do', 'I am', 'you do'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση με Do απαντάμε «Yes, I do» ή «No, I don\'t». Η ερώτηση λέει you, η απάντηση λέει I — μιλάω για μένα!',
      en: 'To a Do question we answer «Yes, I do» or «No, I don\'t». The question says you, the answer says I — I am talking about myself!',
    },
  },
  {
    q: { el: 'Ο Νίκος γράφει για τη μέρα του. Ποια πρόταση είναι ολόσωστη;', en: 'Nikos writes about his day. Which sentence is completely correct?' },
    options: { el: ['I get up, I brushes my teeth and I have breakfast.', 'I get up, I brush my teeth and I has breakfast.', 'I gets up, I brush my teeth and I have breakfast.', 'I get up, I brush my teeth and I have breakfast.'], en: ['I get up, I brushes my teeth and I have breakfast.', 'I get up, I brush my teeth and I has breakfast.', 'I gets up, I brush my teeth and I have breakfast.', 'I get up, I brush my teeth and I have breakfast.'] },
    correct: 3,
    explanation: {
      el: 'Με το I κανένα ρήμα δεν παίρνει -s: I get up, I brush, I have. Πρόσεξε και το have — ποτέ «I has».',
      en: 'With I no verb takes -s: I get up, I brush, I have. Watch out for have too — never «I has».',
    },
  },
];
