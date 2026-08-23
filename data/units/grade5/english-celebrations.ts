/**
 * Ε' Δημοτικού · Αγγλικά · Γιορτές / Celebrations
 * ================================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 10–11 learning English as a foreign language.
 *
 * What the unit covers, in order:
 *   1–4   Christmas words: tree, present, carol, «Merry Christmas»
 *   5–8   birthdays: cake & candles, «How old are you?», invitation, card
 *   9–11  celebrations around the world: Halloween, Chinese New Year, Carnival
 *   12–18 present continuous: am/is/are + -ing, spelling (dance → dancing),
 *         «What is he doing?», negatives, questions, now vs every day
 *
 * Distractors are the mistakes Greek children really make: wrong auxiliary
 * («he are»), forgetting -ing, present simple instead of continuous, «has» for age.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_CELEBRATIONS: QuizQuestion[] = [
  // ── 1–4: Christmas ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «χριστουγεννιάτικο δέντρο» στα αγγλικά;', en: 'How do you say «χριστουγεννιάτικο δέντρο» in English?' },
    options: { el: ['Christmas tree', 'Christmas star', 'Christmas card', 'Christmas cake'], en: ['Christmas tree', 'Christmas star', 'Christmas card', 'Christmas cake'] },
    correct: 0,
    explanation: {
      el: 'Tree = δέντρο. Το χριστουγεννιάτικο δέντρο είναι το Christmas tree.',
      en: 'Tree = δέντρο. The Christmas tree is the one we decorate with lights and balls.',
    },
  },
  {
    q: { el: 'Πώς λέμε «δώρο» στα αγγλικά;', en: 'How do you say «δώρο» in English?' },
    options: { el: ['party', 'present', 'parent', 'price'], en: ['party', 'present', 'parent', 'price'] },
    correct: 1,
    explanation: {
      el: 'Present = δώρο. Μπορούμε να πούμε και gift. Προσοχή: parent = γονιός!',
      en: 'Present = δώρο. We can also say gift. Careful: parent means γονιός!',
    },
  },
  {
    q: { el: 'Τι είναι ένα «Christmas carol»;', en: 'What is a «Christmas carol»?' },
    options: { el: ['ένα χριστουγεννιάτικο γλυκό', 'ένα χριστουγεννιάτικο στολίδι', 'ένα χριστουγεννιάτικο τραγούδι', 'μια χριστουγεννιάτικη κάρτα'], en: ['a Christmas sweet', 'a Christmas decoration', 'a Christmas song', 'a Christmas card'] },
    correct: 2,
    explanation: {
      el: 'Carol = κάλαντα, χριστουγεννιάτικο τραγούδι. Τα παιδιά sing carols (λένε τα κάλαντα).',
      en: 'A carol is a Christmas song. Children sing carols — in Greek we say «λέμε τα κάλαντα».',
    },
  },
  {
    q: { el: 'Τι ευχόμαστε στα αγγλικά τα Χριστούγεννα;', en: 'What do we wish people at Christmas in English?' },
    options: { el: ['Happy Christmas Day!', 'Good Christmas!', 'Nice Christmas!', 'Merry Christmas!'], en: ['Happy Christmas Day!', 'Good Christmas!', 'Nice Christmas!', 'Merry Christmas!'] },
    correct: 3,
    explanation: {
      el: '«Merry Christmas!» = Καλά Χριστούγεννα! Merry σημαίνει χαρούμενος. Για τον νέο χρόνο λέμε «Happy New Year!».',
      en: '«Merry Christmas!» is the classic wish. Merry means happy and cheerful. For the new year we say «Happy New Year!».',
    },
  },

  // ── 5–8: birthdays ─────────────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη έχει γενέθλια. Τι σβήνει πάνω στην τούρτα;', en: 'It is Eleni\'s birthday. What does she blow out on the cake?' },
    options: { el: ['the balloons', 'the candles', 'the cards', 'the lights'], en: ['the balloons', 'the candles', 'the cards', 'the lights'] },
    correct: 1,
    explanation: {
      el: 'Candles = κεράκια. Στα γενέθλια σβήνουμε τα κεράκια: we blow out the candles.',
      en: 'Candles = κεράκια. On a birthday we blow out the candles on the cake.',
    },
  },
  {
    q: { el: 'Ο Γιώργος είναι 10 χρονών. Πώς το λέει στα αγγλικά;', en: 'Giorgos is 10 years old. How does he say it in English?' },
    options: { el: ['I have ten years.', 'I am ten years old.', 'I have ten years old.', 'I am ten years.'], en: ['I have ten years.', 'I am ten years old.', 'I have ten years old.', 'I am ten years.'] },
    correct: 1,
    explanation: {
      el: 'Στα αγγλικά την ηλικία τη λέμε με το «am/is/are», όχι με το «have»: I am ten years old.',
      en: 'In English we say age with «am/is/are», not «have»: I am ten years old.',
    },
  },
  {
    q: { el: 'Η Μαρία στέλνει στους φίλους της μια «invitation». Τι είναι αυτό;', en: 'Maria sends her friends an «invitation». What is it?' },
    options: { el: ['ένα δώρο', 'μια τούρτα', 'ένα τραγούδι', 'μια πρόσκληση'], en: ['a present', 'a cake', 'a song', 'an invitation card'] },
    correct: 3,
    explanation: {
      el: 'Invitation = πρόσκληση. Με την πρόσκληση καλούμε τους φίλους μας στο πάρτι (we invite our friends).',
      en: 'An invitation tells your friends when and where the party is. The verb is «to invite».',
    },
  },
  {
    q: { el: 'Ποια ευχή γράφουμε σε μια κάρτα γενεθλίων;', en: 'Which wish do we write on a birthday card?' },
    options: { el: ['Happy Birthday!', 'Happy Christmas!', 'Good Birthday!', 'Merry Birthday!'], en: ['Happy Birthday!', 'Happy Christmas!', 'Good Birthday!', 'Merry Birthday!'] },
    correct: 0,
    explanation: {
      el: '«Happy Birthday!» = Χρόνια πολλά για τα γενέθλια. Το «Merry» το λέμε μόνο για τα Χριστούγεννα.',
      en: '«Happy Birthday!» is the birthday wish. We only use «Merry» for Christmas.',
    },
  },

  // ── 9–11: celebrations around the world ────────────────────────────────────
  {
    q: { el: 'Στο Halloween τα παιδιά φορούν στολές και λένε «trick or treat». Πότε γιορτάζεται;', en: 'At Halloween children wear costumes and say «trick or treat». When is it?' },
    options: { el: ['on 1 January', 'on 25 December', 'on 31 October', 'on 14 February'], en: ['on 1 January', 'on 25 December', 'on 31 October', 'on 14 February'] },
    correct: 2,
    explanation: {
      el: 'Το Halloween είναι στις 31 Οκτωβρίου (31 October). Τα παιδιά ντύνονται και ζητούν γλυκά από τους γείτονες.',
      en: 'Halloween is on 31 October. Children dress up and ask the neighbours for sweets.',
    },
  },
  {
    q: { el: 'Σε ποια γιορτή βλέπουμε χορό του δράκου, κόκκινα φανάρια και πυροτεχνήματα;', en: 'At which celebration do we see a dragon dance, red lanterns and fireworks?' },
    options: { el: ['Chinese New Year', 'Halloween', 'Easter', 'Thanksgiving'], en: ['Chinese New Year', 'Halloween', 'Easter', 'Thanksgiving'] },
    correct: 0,
    explanation: {
      el: 'Η Κινέζικη Πρωτοχρονιά (Chinese New Year) γιορτάζεται με δράκους, κόκκινα φανάρια (lanterns) και πυροτεχνήματα (fireworks).',
      en: 'Chinese New Year is celebrated with dragon dances, red lanterns and fireworks. Red is the colour of good luck.',
    },
  },
  {
    q: { el: 'Τις Απόκριες (Carnival) τα παιδιά φορούν…', en: 'At Carnival children wear…' },
    options: { el: ['uniforms', 'costumes', 'pyjamas', 'raincoats'], en: ['uniforms', 'costumes', 'pyjamas', 'raincoats'] },
    correct: 1,
    explanation: {
      el: 'Costume = αποκριάτικη στολή. Στις Απόκριες φοράμε costumes και masks (μάσκες). Uniform = σχολική στολή!',
      en: 'A costume is a fancy-dress outfit. At Carnival we wear costumes and masks. A uniform is what you wear to school!',
    },
  },

  // ── 12–18: present continuous ──────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: Nikos ___ a present right now.', en: 'Complete: Nikos ___ a present right now.' },
    options: { el: ['open', 'is opening', 'are opening', 'opening'], en: ['open', 'is opening', 'are opening', 'opening'] },
    correct: 1,
    explanation: {
      el: 'Κάτι που γίνεται τώρα: is/are + ρήμα-ing. Ο Νίκος είναι ένας (he) → he is opening.',
      en: 'Something happening now: is/are + verb-ing. Nikos is one person (he) → he is opening.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Maria and Eleni ___ the Christmas tree.', en: 'Complete: Maria and Eleni ___ the Christmas tree.' },
    options: { el: ['is decorating', 'decorates', 'are decorating', 'am decorating'], en: ['is decorating', 'decorates', 'are decorating', 'am decorating'] },
    correct: 2,
    explanation: {
      el: 'Μαρία και Ελένη = δύο άτομα = they → are decorating. Το «is» είναι μόνο για ένα άτομο.',
      en: 'Maria and Eleni = two people = they → are decorating. «Is» is only for one person.',
    },
  },
  {
    q: { el: 'Πώς γράφεται σωστά το «dance» με -ing;', en: 'How do we write «dance» with -ing?' },
    options: { el: ['danceing', 'dancing', 'danceng', 'danncing'], en: ['danceing', 'dancing', 'danceng', 'danncing'] },
    correct: 1,
    explanation: {
      el: 'Όταν το ρήμα τελειώνει σε -e, το -e φεύγει και βάζουμε -ing: dance → dancing, make → making.',
      en: 'When a verb ends in -e, the -e drops before -ing: dance → dancing, make → making.',
    },
  },
  {
    q: { el: 'What is Giorgos doing? (Τραγουδάει τα κάλαντα.)', en: 'What is Giorgos doing? (He sings carols at this moment.)' },
    options: { el: ['He singing a carol.', 'He is sing a carol.', 'He sings a carol.', 'He is singing a carol.'], en: ['He singing a carol.', 'He is sing a carol.', 'He sings a carol.', 'He is singing a carol.'] },
    correct: 3,
    explanation: {
      el: 'Στην ερώτηση «What is he doing?» απαντάμε με is + -ing: He is singing. Χρειάζονται και τα δύο, το «is» και το «-ing».',
      en: 'We answer «What is he doing?» with is + -ing: He is singing. You need both the «is» and the «-ing».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την άρνηση: Eleni ___ eating cake. She is drinking juice.', en: 'Complete the negative: Eleni ___ eating cake. She is drinking juice.' },
    options: { el: ['isn\'t', 'doesn\'t', 'aren\'t', 'not'], en: ['isn\'t', 'doesn\'t', 'aren\'t', 'not'] },
    correct: 0,
    explanation: {
      el: 'Άρνηση στο present continuous: is not / isn\'t + -ing. Το «doesn\'t» πάει με το present simple (she doesn\'t eat).',
      en: 'Negative in the present continuous: is not / isn\'t + -ing. «Doesn\'t» goes with the present simple (she doesn\'t eat).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την ερώτηση: ___ the children dancing at the party?', en: 'Complete the question: ___ the children dancing at the party?' },
    options: { el: ['Do', 'Is', 'Are', 'Does'], en: ['Do', 'Is', 'Are', 'Does'] },
    correct: 2,
    explanation: {
      el: 'Στην ερώτηση βάζουμε το am/is/are μπροστά: Are the children dancing? (The children = they → are.)',
      en: 'In a question, am/is/are goes first: Are the children dancing? (The children = they → are.)',
    },
  },
  {
    q: { el: 'Διάλεξε τη σωστή πρόταση:', en: 'Choose the correct sentence:' },
    options: {
      el: ['Every year we have a party. Right now we are eating cake.', 'Every year we are having a party. Right now we eat cake.', 'Every year we having a party. Right now we eating cake.', 'Every year we are have a party. Right now we are eat cake.'],
      en: ['Every year we have a party. Right now we are eating cake.', 'Every year we are having a party. Right now we eat cake.', 'Every year we having a party. Right now we eating cake.', 'Every year we are have a party. Right now we are eat cake.'],
    },
    correct: 0,
    explanation: {
      el: '«Every year» = κάθε χρόνο, συνήθεια → present simple (we have). «Right now» = αυτή τη στιγμή → present continuous (we are eating).',
      en: '«Every year» is a habit → present simple (we have). «Right now» is this moment → present continuous (we are eating).',
    },
  },
];
