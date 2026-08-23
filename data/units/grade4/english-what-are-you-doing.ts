/**
 * Δ' Δημοτικού · Αγγλικά · «Τι κάνεις τώρα;» / "What Are You Doing?"
 * ====================================================================
 * Original questions for a child of 9–10 learning English as a foreign language.
 * What the unit covers, in order:
 *   1–4   housework vocabulary (wash the dishes, make the bed, sweep, water the plants)
 *   5–8   jobs vocabulary (doctor, teacher, cook, pilot, vet) and «What do you do?»
 *   9–13  present continuous: am / is / are + -ing, spelling of -ing, questions
 *   14–18 present simple vs present continuous: every day vs now, the time words
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_WHAT_ARE_YOU_DOING: QuizQuestion[] = [
  // ── 1–4: housework ────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «πλένω τα πιάτα» στα αγγλικά;', en: 'How do you say «πλένω τα πιάτα» in English?' },
    options: { el: ['wash the dishes', 'wash the clothes', 'clean the dishes', 'cook the dishes'], en: ['wash the dishes', 'wash the clothes', 'clean the dishes', 'cook the dishes'] },
    correct: 0,
    explanation: {
      el: '«Πλένω τα πιάτα» = wash the dishes. Τα dishes είναι τα πιάτα, τα clothes είναι τα ρούχα.',
      en: '«Πλένω τα πιάτα» = wash the dishes. Dishes are plates; clothes are what you wear.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «make the bed»;', en: 'What does «make the bed» mean?' },
    options: { el: ['φτιάχνω ένα κρεβάτι από ξύλο', 'στρώνω το κρεβάτι', 'κοιμάμαι στο κρεβάτι', 'αγοράζω κρεβάτι'], en: ['build a bed from wood', 'tidy the bed', 'sleep in the bed', 'buy a bed'] },
    correct: 1,
    explanation: {
      el: '«Make the bed» σημαίνει «στρώνω το κρεβάτι». Δεν φτιάχνουμε καινούργιο κρεβάτι, απλώς το τακτοποιούμε!',
      en: '«Make the bed» means to tidy it after you get up. You do not build a new bed!',
    },
  },
  {
    q: { el: 'Η Ελένη καθαρίζει το πάτωμα με τη σκούπα. Ποια φράση ταιριάζει;', en: 'Eleni cleans the floor with a broom. Which phrase fits?' },
    options: { el: ['water the plants', 'set the table', 'sweep the floor', 'take out the rubbish'], en: ['water the plants', 'set the table', 'sweep the floor', 'take out the rubbish'] },
    correct: 2,
    explanation: {
      el: 'Sweep the floor = σκουπίζω το πάτωμα. Water the plants = ποτίζω τα φυτά, set the table = στρώνω το τραπέζι.',
      en: 'Sweep the floor = clean it with a broom. Water the plants and set the table are other chores.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Every Saturday I ___ the plants in the garden.»', en: 'Complete: «Every Saturday I ___ the plants in the garden.»' },
    options: { el: ['wash', 'make', 'sweep', 'water'], en: ['wash', 'make', 'sweep', 'water'] },
    correct: 3,
    explanation: {
      el: 'Water the plants = ποτίζω τα φυτά. Το water εδώ είναι ρήμα, όχι «νερό»!',
      en: 'Water the plants means to give them water. Here «water» is a verb, not a noun!',
    },
  },

  // ── 5–8: jobs and «What do you do?» ───────────────────────────────────────
  {
    q: { el: 'Ποιος δουλεύει στο νοσοκομείο και βοηθάει τους αρρώστους;', en: 'Who works in a hospital and helps sick people?' },
    options: { el: ['a teacher', 'a doctor', 'a farmer', 'a driver'], en: ['a teacher', 'a doctor', 'a farmer', 'a driver'] },
    correct: 1,
    explanation: {
      el: 'Doctor = γιατρός. Ο teacher διδάσκει, ο farmer καλλιεργεί, ο driver οδηγεί.',
      en: 'A doctor works in a hospital. A teacher teaches, a farmer grows food, a driver drives.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μάγειρας» στα αγγλικά;', en: 'How do you say «μάγειρας» in English?' },
    options: { el: ['a cooker', 'a kitchen', 'a cook', 'a waiter'], en: ['a cooker', 'a kitchen', 'a cook', 'a waiter'] },
    correct: 2,
    explanation: {
      el: 'Μάγειρας = a cook. Προσοχή: το cooker είναι η κουζίνα (η συσκευή), όχι ο άνθρωπος!',
      en: 'A cook is the person. Careful: a cooker is the machine you cook on, not a person!',
    },
  },
  {
    q: { el: 'Ο Νίκος πετάει αεροπλάνα. Τι δουλειά κάνει;', en: 'Nikos flies planes. What is his job?' },
    options: { el: ['He is a pilot.', 'He is a sailor.', 'He is a vet.', 'He is a police officer.'], en: ['He is a pilot.', 'He is a sailor.', 'He is a vet.', 'He is a police officer.'] },
    correct: 0,
    explanation: {
      el: 'Pilot = πιλότος. Ο sailor είναι ναύτης, ο vet είναι κτηνίατρος.',
      en: 'A pilot flies planes. A sailor works on a ship, a vet helps animals.',
    },
  },
  {
    q: { el: 'Ποια ερώτηση ρωτάει τι δουλειά κάνει κάποιος;', en: 'Which question asks about someone\'s job?' },
    options: { el: ['How are you?', 'What do you do?', 'What are you doing?', 'Where are you?'], en: ['How are you?', 'What do you do?', 'What are you doing?', 'Where are you?'] },
    correct: 1,
    explanation: {
      el: '«What do you do?» = Τι δουλειά κάνεις; Το «What are you doing?» ρωτάει τι κάνεις ΤΩΡΑ, αυτή τη στιγμή.',
      en: '«What do you do?» asks about your job. «What are you doing?» asks what you are doing right NOW.',
    },
  },

  // ── 9–13: present continuous ──────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I ___ washing the dishes now.»', en: 'Complete: «I ___ washing the dishes now.»' },
    options: { el: ['is', 'are', 'am', 'do'], en: ['is', 'are', 'am', 'do'] },
    correct: 2,
    explanation: {
      el: 'Με το I βάζουμε πάντα am: I am washing. Το is πάει με he/she/it, το are με you/we/they.',
      en: 'With I we always use am: I am washing. Is goes with he/she/it, are with you/we/they.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Maria and Giorgos ___ sweeping the floor.»', en: 'Complete: «Maria and Giorgos ___ sweeping the floor.»' },
    options: { el: ['is', 'am', 'does', 'are'], en: ['is', 'am', 'does', 'are'] },
    correct: 3,
    explanation: {
      el: 'Η Μαρία και ο Γιώργος είναι δύο άτομα = they. Με το they βάζουμε are: They are sweeping.',
      en: 'Maria and Giorgos are two people = they. With they we use are: They are sweeping.',
    },
  },
  {
    q: { el: 'Πώς γράφεται το ρήμα «run» με -ing;', en: 'How do you write the verb «run» with -ing?' },
    options: { el: ['runing', 'running', 'runeing', 'runng'], en: ['runing', 'running', 'runeing', 'runng'] },
    correct: 1,
    explanation: {
      el: 'Run → running. Σε μικρά ρήματα που τελειώνουν σε ένα φωνήεν και ένα σύμφωνο, διπλασιάζουμε το τελευταίο γράμμα: run-n-ing, sit-t-ing.',
      en: 'Run → running. In short verbs ending in one vowel + one consonant, we double the last letter: run-n-ing, sit-t-ing.',
    },
  },
  {
    q: { el: 'Πώς γράφεται το ρήμα «make» με -ing;', en: 'How do you write the verb «make» with -ing?' },
    options: { el: ['makeing', 'makking', 'making', 'maeking'], en: ['makeing', 'makking', 'making', 'maeking'] },
    correct: 2,
    explanation: {
      el: 'Make → making. Όταν το ρήμα τελειώνει σε -e, βγάζουμε το e και βάζουμε -ing: make → making, write → writing.',
      en: 'Make → making. When a verb ends in -e, we drop the e and add -ing: make → making, write → writing.',
    },
  },
  {
    q: { el: 'Η μαμά ρωτάει τον Γιώργο τι κάνει αυτή τη στιγμή. Ποια είναι η σωστή ερώτηση;', en: 'Mum asks Giorgos what he is doing right now. Which question is correct?' },
    options: { el: ['What you are doing?', 'What are you doing?', 'What do you doing?', 'What are you do?'], en: ['What you are doing?', 'What are you doing?', 'What do you doing?', 'What are you do?'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση το are πάει ΠΡΙΝ το you: What are you doing? Το ρήμα κρατάει το -ing.',
      en: 'In a question, are goes BEFORE you: What are you doing? The verb keeps its -ing.',
    },
  },

  // ── 14–18: present simple vs present continuous ───────────────────────────
  {
    q: { el: 'Ποια πρόταση μιλάει για κάτι που γίνεται ΤΩΡΑ;', en: 'Which sentence is about something happening NOW?' },
    options: { el: ['Eleni cooks every day.', 'Eleni is cooking.', 'Eleni likes cooking.', 'Eleni cooks on Sundays.'], en: ['Eleni cooks every day.', 'Eleni is cooking.', 'Eleni likes cooking.', 'Eleni cooks on Sundays.'] },
    correct: 1,
    explanation: {
      el: 'Το is + -ing (is cooking) δείχνει κάτι που γίνεται αυτή τη στιγμή. Το cooks (χωρίς -ing) δείχνει συνήθεια.',
      en: 'Is + -ing (is cooking) shows something happening right now. Cooks (no -ing) shows a habit.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «My dad ___ the dishes every evening.»', en: 'Complete: «My dad ___ the dishes every evening.»' },
    options: { el: ['is washing', 'washing', 'washes', 'wash'], en: ['is washing', 'washing', 'washes', 'wash'] },
    correct: 2,
    explanation: {
      el: 'Το «every evening» δείχνει συνήθεια, άρα απλός ενεστώτας. Με το he (my dad) το ρήμα παίρνει -s: washes.',
      en: '«Every evening» shows a habit, so we use the present simple. With he (my dad) the verb takes -s: washes.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Be quiet! The baby ___ now.»', en: 'Complete: «Be quiet! The baby ___ now.»' },
    options: { el: ['sleeps', 'sleep', 'is sleeping', 'sleeping'], en: ['sleeps', 'sleep', 'is sleeping', 'sleeping'] },
    correct: 2,
    explanation: {
      el: 'Το «now» δείχνει ότι γίνεται αυτή τη στιγμή: is sleeping. Το σκέτο «sleeping» χωρίς is δεν είναι σωστό.',
      en: '«Now» shows it is happening at this moment: is sleeping. «Sleeping» without is is not correct.',
    },
  },
  {
    q: { el: 'Ποια λέξη πάει συνήθως με τον απλό ενεστώτα (present simple);', en: 'Which word usually goes with the present simple?' },
    options: { el: ['now', 'at the moment', 'usually', 'Look!'], en: ['now', 'at the moment', 'usually', 'Look!'] },
    correct: 2,
    explanation: {
      el: 'Usually, always, every day = συνήθειες = απλός ενεστώτας. Now, at the moment, Look! = αυτή τη στιγμή = present continuous.',
      en: 'Usually, always, every day = habits = present simple. Now, at the moment, Look! = right now = present continuous.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι ΣΩΣΤΗ;', en: 'Which sentence is CORRECT?' },
    options: { el: ['Nikos is a teacher, but today he is cooking at home.', 'Nikos is a teacher, but today he cooks at home.', 'Nikos is being a teacher, but today he cooking at home.', 'Nikos teacher, but today he is cook at home.'], en: ['Nikos is a teacher, but today he is cooking at home.', 'Nikos is a teacher, but today he cooks at home.', 'Nikos is being a teacher, but today he cooking at home.', 'Nikos teacher, but today he is cook at home.'] },
    correct: 0,
    explanation: {
      el: 'Η δουλειά του (is a teacher) είναι κάτι μόνιμο. Αυτό που κάνει σήμερα, τώρα (is cooking), θέλει is + -ing.',
      en: 'His job (is a teacher) is permanent. What he is doing today, right now (is cooking), needs is + -ing.',
    },
  },
];
