/**
 * Β' Δημοτικού · Αγγλικά · «Το Σπίτι μου» / "My House"
 * ====================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 7–8
 * who is just starting English, so stems are one short sentence and options are single words.
 *
 * What the unit covers, in order:
 *   1–6   the rooms: kitchen, bedroom, bathroom (word ↔ meaning both ways)
 *   7–10  the furniture: bed, table, chair
 *   11–13 the question «Where is…?» and the answer «It is in the…»
 *   14–18 the little words in / on / under, then a mixed sentence
 *
 * Distractors are the mix-ups Greek children really make (bedroom/bathroom, in/on,
 * chair/table) — never silly. The correct slot varies; the UI shuffles options anyway.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ENGLISH_MY_HOUSE: QuizQuestion[] = [
  // ── 1–6: the rooms ──────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «κουζίνα» στα αγγλικά;', en: 'How do you say «κουζίνα» in English?' },
    options: { el: ['bedroom', 'kitchen', 'bathroom', 'garden'], en: ['bedroom', 'kitchen', 'bathroom', 'garden'] },
    correct: 1,
    explanation: {
      el: 'Η κουζίνα στα αγγλικά είναι «kitchen». Εκεί μαγειρεύουμε!',
      en: '«Κουζίνα» in English is «kitchen». That is where we cook!',
    },
  },
  {
    q: { el: 'Πώς λέμε «υπνοδωμάτιο» στα αγγλικά;', en: 'How do you say «υπνοδωμάτιο» in English?' },
    options: { el: ['bathroom', 'kitchen', 'bedroom', 'house'], en: ['bathroom', 'kitchen', 'bedroom', 'house'] },
    correct: 2,
    explanation: {
      el: 'Το υπνοδωμάτιο είναι «bedroom»: bed = κρεβάτι, room = δωμάτιο. Το δωμάτιο με το κρεβάτι!',
      en: '«Υπνοδωμάτιο» is «bedroom»: bed + room. The room with the bed!',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπάνιο» στα αγγλικά;', en: 'How do you say «μπάνιο» in English?' },
    options: { el: ['bathroom', 'bedroom', 'kitchen', 'bath'], en: ['bathroom', 'bedroom', 'kitchen', 'bath'] },
    correct: 0,
    explanation: {
      el: 'Το μπάνιο (το δωμάτιο) είναι «bathroom»: bath = μπανιέρα, room = δωμάτιο.',
      en: 'The room is the «bathroom»: bath + room. A «bath» alone is just the tub.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «kitchen»;', en: 'What does «kitchen» mean?' },
    options: { el: ['μπάνιο', 'υπνοδωμάτιο', 'κήπος', 'κουζίνα'], en: ['bathroom', 'bedroom', 'garden', 'kitchen'] },
    correct: 3,
    explanation: {
      el: '«Kitchen» σημαίνει κουζίνα. Εκεί είναι το ψυγείο και η κουζίνα που μαγειρεύουμε.',
      en: '«Kitchen» is the room where we cook. The fridge is there too.',
    },
  },
  {
    q: { el: 'Σε ποιο δωμάτιο κοιμόμαστε;', en: 'In which room do we sleep?' },
    options: { el: ['kitchen', 'bathroom', 'bedroom', 'living room'], en: ['kitchen', 'bathroom', 'bedroom', 'living room'] },
    correct: 2,
    explanation: {
      el: 'Κοιμόμαστε στο «bedroom». Θυμήσου: «bed» σημαίνει κρεβάτι.',
      en: 'We sleep in the «bedroom». Remember: «bed» is where we sleep.',
    },
  },
  {
    q: { el: 'Σε ποιο δωμάτιο πλένουμε τα δόντια μας;', en: 'In which room do we brush our teeth?' },
    options: { el: ['bedroom', 'bathroom', 'kitchen', 'living room'], en: ['bedroom', 'bathroom', 'kitchen', 'living room'] },
    correct: 1,
    explanation: {
      el: 'Πλένουμε τα δόντια μας στο «bathroom», το μπάνιο. Προσοχή: bedroom και bathroom μοιάζουν!',
      en: 'We brush our teeth in the «bathroom». Careful: bedroom and bathroom look alike!',
    },
  },

  // ── 7–10: the furniture ─────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «κρεβάτι» στα αγγλικά;', en: 'How do you say «κρεβάτι» in English?' },
    options: { el: ['bed', 'chair', 'table', 'bedroom'], en: ['bed', 'chair', 'table', 'bedroom'] },
    correct: 0,
    explanation: {
      el: 'Το κρεβάτι είναι «bed». Μια μικρή λέξη για έναν γλυκό ύπνο!',
      en: '«Κρεβάτι» is «bed». A small word for a good sleep!',
    },
  },
  {
    q: { el: 'Πώς λέμε «τραπέζι» στα αγγλικά;', en: 'How do you say «τραπέζι» in English?' },
    options: { el: ['chair', 'bed', 'door', 'table'], en: ['chair', 'bed', 'door', 'table'] },
    correct: 3,
    explanation: {
      el: 'Το τραπέζι είναι «table». Πάνω στο table βάζουμε τα πιάτα.',
      en: '«Τραπέζι» is «table». We put the plates on the table.',
    },
  },
  {
    q: { el: 'Πώς λέμε «καρέκλα» στα αγγλικά;', en: 'How do you say «καρέκλα» in English?' },
    options: { el: ['table', 'chair', 'bed', 'sofa'], en: ['table', 'chair', 'bed', 'sofa'] },
    correct: 1,
    explanation: {
      el: 'Η καρέκλα είναι «chair». Καθόμαστε στο chair, τρώμε στο table.',
      en: '«Καρέκλα» is «chair». We sit on a chair and eat at a table.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «table»;', en: 'What does «table» mean?' },
    options: { el: ['καρέκλα', 'κρεβάτι', 'τραπέζι', 'πόρτα'], en: ['chair', 'bed', 'table', 'door'] },
    correct: 2,
    explanation: {
      el: '«Table» σημαίνει τραπέζι. Μην το μπερδεύεις με το «chair», που είναι η καρέκλα.',
      en: '«Table» is what we eat at. Do not mix it up with «chair», the one we sit on.',
    },
  },

  // ── 11–13: Where is…? ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Πού είναι;» στα αγγλικά;', en: 'How do we ask «Πού είναι;» in English?' },
    options: { el: ['What is…?', 'Where is…?', 'Who is…?', 'How is…?'], en: ['What is…?', 'Where is…?', 'Who is…?', 'How is…?'] },
    correct: 1,
    explanation: {
      el: '«Where is…?» σημαίνει «Πού είναι…;». Το «where» ρωτάει για το μέρος.',
      en: '«Where is…?» asks about the place. «What» asks what something is.',
    },
  },
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: { el: ['Where is the bed?', 'Where the bed is?', 'Where bed is the?', 'Is where the bed?'], en: ['Where is the bed?', 'Where the bed is?', 'Where bed is the?', 'Is where the bed?'] },
    correct: 0,
    explanation: {
      el: 'Η σειρά είναι: Where + is + the + πράγμα. «Where is the bed?» = Πού είναι το κρεβάτι;',
      en: 'The order is: Where + is + the + thing. «Where is the bed?»',
    },
  },
  {
    q: { el: '«Where is the table?» Ποια απάντηση ταιριάζει;', en: '«Where is the table?» Which answer fits?' },
    options: { el: ['It is big.', 'It is in the kitchen.', 'It is a table.', 'Yes, it is.'], en: ['It is big.', 'It is in the kitchen.', 'It is a table.', 'Yes, it is.'] },
    correct: 1,
    explanation: {
      el: 'Στο «Where is…?» απαντάμε με ένα μέρος: «It is in the kitchen.» = Είναι στην κουζίνα.',
      en: 'To «Where is…?» we answer with a place: «It is in the kitchen.»',
    },
  },

  // ── 14–18: in / on / under ─────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «under»;', en: 'What does «under» mean?' },
    options: { el: ['πάνω', 'μέσα', 'κάτω από', 'δίπλα'], en: ['on', 'in', 'under', 'next to'] },
    correct: 2,
    explanation: {
      el: '«Under» σημαίνει «κάτω από». «On» είναι πάνω και «in» είναι μέσα.',
      en: '«Under» means below something. «On» is on top and «in» is inside.',
    },
  },
  {
    q: { el: 'Το βιβλίο είναι πάνω στο τραπέζι. Ποια λέξη λείπει; The book is ___ the table.', en: 'The book is on top of the table. Which word is missing? The book is ___ the table.' },
    options: { el: ['in', 'under', 'on', 'at'], en: ['in', 'under', 'on', 'at'] },
    correct: 2,
    explanation: {
      el: 'Όταν κάτι είναι πάνω σε κάτι άλλο, λέμε «on»: The book is on the table.',
      en: 'When something sits on top of something else, we say «on»: The book is on the table.',
    },
  },
  {
    q: { el: 'Η γάτα είναι κάτω από το κρεβάτι. Ποια λέξη λείπει; The cat is ___ the bed.', en: 'The cat is below the bed. Which word is missing? The cat is ___ the bed.' },
    options: { el: ['on', 'in', 'under', 'up'], en: ['on', 'in', 'under', 'up'] },
    correct: 2,
    explanation: {
      el: 'Κάτω από = «under». The cat is under the bed.',
      en: 'Below something = «under». The cat is under the bed.',
    },
  },
  {
    q: { el: 'Η Ελένη είναι μέσα στην κουζίνα. Ποια λέξη λείπει; Eleni is ___ the kitchen.', en: 'Eleni is inside the kitchen. Which word is missing? Eleni is ___ the kitchen.' },
    options: { el: ['on', 'in', 'under', 'to'], en: ['on', 'in', 'under', 'to'] },
    correct: 1,
    explanation: {
      el: 'Για δωμάτια λέμε «in»: in the kitchen, in the bedroom. Είμαστε μέσα στο δωμάτιο.',
      en: 'For rooms we say «in»: in the kitchen, in the bedroom. We are inside the room.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή στα αγγλικά;', en: 'Which sentence is correct in English?' },
    options: { el: ['The chair is in the bed.', 'The bed is in the bedroom.', 'The bedroom is on the bed.', 'The bed is under the bedroom.'], en: ['The chair is in the bed.', 'The bed is in the bedroom.', 'The bedroom is on the bed.', 'The bed is under the bedroom.'] },
    correct: 1,
    explanation: {
      el: 'Το κρεβάτι είναι μέσα στο υπνοδωμάτιο: «The bed is in the bedroom.» Το δωμάτιο είναι το μεγάλο, το κρεβάτι είναι μέσα του.',
      en: '«The bed is in the bedroom.» The room is the big thing and the bed is inside it.',
    },
  },
];
