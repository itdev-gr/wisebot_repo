/**
 * Grade 1 · English Language Arts · One & Many (Plurals)
 * ======================================================
 * Original questions for a native English-speaking child of 6–7 (nothing from published books).
 * What the unit covers, in order:
 *   1–5   add -s: one cat, two cats; picking the word that means more than one
 *   6–9   add -es: words that end in s, x, sh, ch (boxes, dishes, buses, benches)
 *   10–13 a / an: an before a vowel sound (an apple), a before a consonant sound (a ball)
 *   14–16 this / these: this for one, these for many
 *   17–18 surprise words: one foot, two feet; one child, many children
 * Distractors are the real slips: cates, boxs, dishs, «a apple», «this cats».
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ELA_ONE_AND_MANY: QuizQuestion[] = [
  // ── 1–5: add -s ────────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα cat, δύο ___;', en: 'One cat, two ___?' },
    options: { el: ['cat', 'cats', 'cates', 'catz'], en: ['cat', 'cats', 'cates', 'catz'] },
    correct: 1,
    explanation: {
      el: 'Ένα cat, δύο cats. Όταν έχουμε περισσότερα από ένα, προσθέτουμε -s στο τέλος της λέξης.',
      en: 'One cat, two cats. When there is more than one, we add -s to the end of the word.',
    },
  },
  {
    q: { el: 'Ένα dog, τρία ___;', en: 'One dog, three ___?' },
    options: { el: ['doges', 'dog', 'dogs', 'dogss'], en: ['doges', 'dog', 'dogs', 'dogss'] },
    correct: 2,
    explanation: {
      el: 'Ένα dog, τρία dogs. Απλώς προσθέτουμε ένα -s: dog + s = dogs.',
      en: 'One dog, three dogs. We just add one -s: dog + s = dogs.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «περισσότερα από ένα»;', en: 'Which word means «more than one»?' },
    options: { el: ['hat', 'sun', 'cup', 'pens'], en: ['hat', 'sun', 'cup', 'pens'] },
    correct: 3,
    explanation: {
      el: 'Pens σημαίνει περισσότερα από ένα pen. Το -s στο τέλος μας λέει «πολλά». Hat, sun και cup είναι μόνο ένα το καθένα.',
      en: 'Pens means more than one pen. The -s at the end tells us «many». Hat, sun and cup are just one each.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «μόνο ένα»;', en: 'Which word means «just one»?' },
    options: { el: ['book', 'books', 'ducks', 'frogs'], en: ['book', 'books', 'ducks', 'frogs'] },
    correct: 0,
    explanation: {
      el: 'Book είναι μόνο ένα. Books, ducks και frogs τελειώνουν σε -s, οπότε σημαίνουν πολλά.',
      en: 'Book is just one. Books, ducks and frogs end with -s, so they mean many.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I see two bird.', 'I see two birds.', 'I see two birdes.', 'I see two birdss.'], en: ['I see two bird.', 'I see two birds.', 'I see two birdes.', 'I see two birdss.'] },
    correct: 1,
    explanation: {
      el: '«I see two birds.» Το two σημαίνει περισσότερα από ένα, οπότε το bird χρειάζεται ένα -s: birds.',
      en: '«I see two birds.» Two means more than one, so bird needs an -s: birds.',
    },
  },

  // ── 6–9: add -es ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα box, δύο ___;', en: 'One box, two ___?' },
    options: { el: ['boxs', 'boxes', 'boxies', 'box'], en: ['boxs', 'boxes', 'boxies', 'box'] },
    correct: 1,
    explanation: {
      el: 'Ένα box, δύο boxes. Όταν μια λέξη τελειώνει σε x, προσθέτουμε -es, αλλιώς το boxs θα ήταν πολύ δύσκολο να ειπωθεί!',
      en: 'One box, two boxes. When a word ends in x, we add -es, or boxs would be too hard to say!',
    },
  },
  {
    q: { el: 'Ένα dish, τρία ___;', en: 'One dish, three ___?' },
    options: { el: ['dishs', 'dish', 'dishes', 'dishies'], en: ['dishs', 'dish', 'dishes', 'dishies'] },
    correct: 2,
    explanation: {
      el: 'Ένα dish, τρία dishes. Οι λέξεις που τελειώνουν σε sh παίρνουν -es. Άκου: dish-es, δύο κομμάτια.',
      en: 'One dish, three dishes. Words that end in sh get -es. Listen: dish-es, two parts.',
    },
  },
  {
    q: { el: 'Ένα bus, δύο ___;', en: 'One bus, two ___?' },
    options: { el: ['buss', 'buses', 'bus', 'busies'], en: ['buss', 'buses', 'bus', 'busies'] },
    correct: 1,
    explanation: {
      el: 'Ένα bus, δύο buses. Το bus τελειώνει ήδη σε s, οπότε προσθέτουμε -es για να ακούγεται το τέλος.',
      en: 'One bus, two buses. Bus already ends in s, so we add -es so we can hear the ending.',
    },
  },
  {
    q: { el: 'Ποια λέξη χρειάζεται -es για να γίνει «πολλά»;', en: 'Which word needs -es to become «many»?' },
    options: { el: ['cup', 'pig', 'hat', 'bench'], en: ['cup', 'pig', 'hat', 'bench'] },
    correct: 3,
    explanation: {
      el: 'Bench τελειώνει σε ch, οπότε γίνεται benches. Cup, pig και hat απλώς παίρνουν -s: cups, pigs, hats.',
      en: 'Bench ends in ch, so it becomes benches. Cup, pig and hat just get -s: cups, pigs, hats.',
    },
  },

  // ── 10–13: a / an ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι σωστό; «___ apple»', en: 'Which is correct? «___ apple»' },
    options: { el: ['a apple', 'an apple', 'the apples', 'two apple'], en: ['a apple', 'an apple', 'the apples', 'two apple'] },
    correct: 1,
    explanation: {
      el: 'An apple. Το apple αρχίζει με φωνήεν (a, e, i, o, u), οπότε λέμε an. Πες «a apple» και θα δεις πόσο δύσκολο είναι!',
      en: 'An apple. Apple starts with a vowel sound (a, e, i, o, u), so we say an. Try saying «a apple» and hear how bumpy it is!',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό; «___ ball»', en: 'Which is correct? «___ ball»' },
    options: { el: ['an ball', 'a ball', 'an balls', 'a balls'], en: ['an ball', 'a ball', 'an balls', 'a balls'] },
    correct: 1,
    explanation: {
      el: 'A ball. Το ball αρχίζει με b, που είναι σύμφωνο, οπότε λέμε a. Το a και το an πάνε πάντα με ένα πράγμα, όχι πολλά.',
      en: 'A ball. Ball starts with b, which is a consonant, so we say a. A and an always go with one thing, not many.',
    },
  },
  {
    q: { el: 'Ποια λέξη χρειάζεται «an» μπροστά της;', en: 'Which word needs «an» in front of it?' },
    options: { el: ['egg', 'dog', 'kite', 'sock'], en: ['egg', 'dog', 'kite', 'sock'] },
    correct: 0,
    explanation: {
      el: 'An egg. Το egg αρχίζει με e, ένα φωνήεν. Dog, kite και sock αρχίζουν με σύμφωνα, οπότε παίρνουν a.',
      en: 'An egg. Egg starts with e, a vowel. Dog, kite and sock start with consonants, so they get a.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I have a orange and an pen.', 'I have an orange and an pen.', 'I have a orange and a pen.', 'I have an orange and a pen.'], en: ['I have a orange and an pen.', 'I have an orange and an pen.', 'I have a orange and a pen.', 'I have an orange and a pen.'] },
    correct: 3,
    explanation: {
      el: '«I have an orange and a pen.» Το orange αρχίζει με φωνήεν, οπότε an. Το pen αρχίζει με σύμφωνο, οπότε a.',
      en: '«I have an orange and a pen.» Orange starts with a vowel, so an. Pen starts with a consonant, so a.',
    },
  },

  // ── 14–16: this / these ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι σωστό; «___ cup is mine.»', en: 'Which is correct? «___ cup is mine.»' },
    options: { el: ['These', 'This', 'Them', 'They'], en: ['These', 'This', 'Them', 'They'] },
    correct: 1,
    explanation: {
      el: '«This cup is mine.» Το this πάει με ένα πράγμα. Το these πάει με πολλά: these cups.',
      en: '«This cup is mine.» This goes with one thing. These goes with many: these cups.',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό; «___ shoes are new.»', en: 'Which is correct? «___ shoes are new.»' },
    options: { el: ['This', 'That', 'These', 'It'], en: ['This', 'That', 'These', 'It'] },
    correct: 2,
    explanation: {
      el: '«These shoes are new.» Το shoes τελειώνει σε -s, οπότε είναι πολλά, και για πολλά λέμε these.',
      en: '«These shoes are new.» Shoes ends in -s, so there are many, and for many we say these.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['This cats are soft.', 'These cat is soft.', 'This cat are soft.', 'These cats are soft.'], en: ['This cats are soft.', 'These cat is soft.', 'This cat are soft.', 'These cats are soft.'] },
    correct: 3,
    explanation: {
      el: '«These cats are soft.» Πολλές γάτες: these, cats, are. Όλες οι λέξεις πρέπει να συμφωνούν ότι είναι πολλά.',
      en: '«These cats are soft.» Many cats: these, cats, are. All the words must agree that there are many.',
    },
  },

  // ── 17–18: surprise words ──────────────────────────────────────────────────
  {
    q: { el: 'Ένα foot, δύο ___;', en: 'One foot, two ___?' },
    options: { el: ['feet', 'foots', 'footes', 'feets'], en: ['feet', 'foots', 'footes', 'feets'] },
    correct: 0,
    explanation: {
      el: 'Ένα foot, δύο feet! Αυτή είναι λέξη-έκπληξη: δεν παίρνει -s, αλλάζει το φωνήεν στη μέση. Το ίδιο κάνει το tooth: teeth.',
      en: 'One foot, two feet! This is a surprise word: it does not take -s, it changes the vowel in the middle. Tooth does the same: teeth.',
    },
  },
  {
    q: { el: 'Ένα child, πολλά ___;', en: 'One child, many ___?' },
    options: { el: ['childs', 'childes', 'children', 'childrens'], en: ['childs', 'childes', 'children', 'childrens'] },
    correct: 2,
    explanation: {
      el: 'Ένα child, πολλά children. Άλλη μια λέξη-έκπληξη! Το children σημαίνει ήδη πολλά, οπότε δεν χρειάζεται -s.',
      en: 'One child, many children. Another surprise word! Children already means many, so it never needs an -s.',
    },
  },
];
