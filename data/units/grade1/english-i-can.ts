/**
 * Α' Δημοτικού · Αγγλικά · «I can! Μπορώ!»
 * ========================================
 * Original questions for a child of 6–7 who is meeting English for the first time.
 * What the unit covers, in order:
 *   1–6   action verbs: jump, run, fly, swim, dance, sing — Greek word → English word
 *   7–10  «I can» / «I can't»: what they mean, who can do what
 *   11–14 body moves: clap, hop, turn around, touch your toes, body words
 *   15–18 putting it together: short sentences with can / can't, the question «Can you…?»
 * Stems are one short sentence; options are mostly English words, identical in el/en.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ENGLISH_I_CAN: QuizQuestion[] = [
  // ── 1–6: action verbs ───────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «πηδάω» στα αγγλικά;', en: 'How do you say «πηδάω» (to jump) in English?' },
    options: { el: ['run', 'jump', 'swim', 'fly'], en: ['run', 'jump', 'swim', 'fly'] },
    correct: 1,
    explanation: {
      el: '«Πηδάω» στα αγγλικά είναι jump. Jump, jump, jump!',
      en: '«Πηδάω» in English is jump. Jump, jump, jump!',
    },
  },
  {
    q: { el: 'Πώς λέμε «τρέχω» στα αγγλικά;', en: 'How do you say «τρέχω» (to run) in English?' },
    options: { el: ['dance', 'jump', 'run', 'sing'], en: ['dance', 'jump', 'run', 'sing'] },
    correct: 2,
    explanation: {
      el: '«Τρέχω» στα αγγλικά είναι run. Τρέχουμε γρήγορα: run!',
      en: '«Τρέχω» in English is run. We go fast: run!',
    },
  },
  {
    q: { el: 'Τι κάνει ένα πουλί στον ουρανό;', en: 'What does a bird do in the sky?' },
    options: { el: ['swim', 'fly', 'run', 'dance'], en: ['swim', 'fly', 'run', 'dance'] },
    correct: 1,
    explanation: {
      el: 'Το πουλί πετάει. «Πετάω» στα αγγλικά είναι fly.',
      en: 'A bird flies. «Πετάω» in English is fly.',
    },
  },
  {
    q: { el: 'Τι κάνει ένα ψάρι στη θάλασσα;', en: 'What does a fish do in the sea?' },
    options: { el: ['fly', 'jump', 'sing', 'swim'], en: ['fly', 'jump', 'sing', 'swim'] },
    correct: 3,
    explanation: {
      el: 'Το ψάρι κολυμπάει. «Κολυμπάω» στα αγγλικά είναι swim.',
      en: 'A fish swims. «Κολυμπάω» in English is swim.',
    },
  },
  {
    q: { el: 'Η Ελένη χορεύει με τη μουσική. Ποια λέξη ταιριάζει;', en: 'Eleni dances to the music. Which word fits?' },
    options: { el: ['dance', 'swim', 'run', 'fly'], en: ['dance', 'swim', 'run', 'fly'] },
    correct: 0,
    explanation: {
      el: '«Χορεύω» στα αγγλικά είναι dance. Dance to the music!',
      en: '«Χορεύω» in English is dance. Dance to the music!',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «sing»;', en: 'What does the word «sing» mean?' },
    options: { el: ['τρέχω', 'κολυμπάω', 'τραγουδάω', 'πηδάω'], en: ['run', 'swim', 'sing (τραγουδάω)', 'jump'] },
    correct: 2,
    explanation: {
      el: 'Sing σημαίνει «τραγουδάω». Όταν λέμε ένα τραγούδι, we sing!',
      en: 'Sing means «τραγουδάω». When we say a song, we sing!',
    },
  },

  // ── 7–10: I can / I can't ──────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «I can»;', en: 'What does «I can» mean?' },
    options: { el: ['Μπορώ', 'Θέλω', 'Δεν μπορώ', 'Είμαι'], en: ['I am able to (Μπορώ)', 'I want (Θέλω)', 'I am not able to (Δεν μπορώ)', 'I am (Είμαι)'] },
    correct: 0,
    explanation: {
      el: '«I can» σημαίνει «μπορώ». I can jump = Μπορώ να πηδήξω.',
      en: '«I can» means «μπορώ». I can jump = Μπορώ να πηδήξω.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «I can\'t»;', en: 'What does «I can\'t» mean?' },
    options: { el: ['Μπορώ', 'Δεν μπορώ', 'Μπορείς', 'Δεν θέλω'], en: ['I am able to (Μπορώ)', 'I am not able to (Δεν μπορώ)', 'You are able to (Μπορείς)', 'I do not want (Δεν θέλω)'] },
    correct: 1,
    explanation: {
      el: '«I can\'t» σημαίνει «δεν μπορώ». Το μικρό «\'t» στο τέλος λέει «όχι».',
      en: '«I can\'t» means «δεν μπορώ». The little «\'t» at the end says «no».',
    },
  },
  {
    q: { el: 'Ο Νίκος ξέρει κολύμπι. Τι λέει;', en: 'Nikos knows how to swim. What does he say?' },
    options: { el: ['I can\'t swim.', 'I can fly.', 'I can swim.', 'I can\'t fly.'], en: ['I can\'t swim.', 'I can fly.', 'I can swim.', 'I can\'t fly.'] },
    correct: 2,
    explanation: {
      el: 'Ο Νίκος μπορεί να κολυμπήσει, άρα λέει «I can swim».',
      en: 'Nikos is able to swim, so he says «I can swim».',
    },
  },
  {
    q: { el: 'Ένα ψάρι δεν μπορεί να πετάξει. Τι λέει το ψάρι;', en: 'A fish cannot fly. What does the fish say?' },
    options: { el: ['I can fly.', 'I can swim.', 'I can\'t swim.', 'I can\'t fly.'], en: ['I can fly.', 'I can swim.', 'I can\'t swim.', 'I can\'t fly.'] },
    correct: 3,
    explanation: {
      el: 'Το ψάρι δεν μπορεί να πετάξει: «I can\'t fly». Μπορεί όμως να κολυμπήσει!',
      en: 'The fish cannot fly: «I can\'t fly». But it can swim!',
    },
  },

  // ── 11–14: body moves ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι κάνουμε όταν ακούμε «Clap your hands!»;', en: 'What do we do when we hear «Clap your hands!»?' },
    options: { el: ['Χτυπάμε παλαμάκια', 'Πηδάμε ψηλά', 'Κλείνουμε τα μάτια', 'Καθόμαστε κάτω'], en: ['We clap our hands', 'We jump up high', 'We close our eyes', 'We sit down'] },
    correct: 0,
    explanation: {
      el: 'Clap σημαίνει «χτυπάω παλαμάκια» και hands είναι «τα χέρια». Clap, clap, clap!',
      en: 'Clap means «χτυπάω παλαμάκια» and hands are «τα χέρια». Clap, clap, clap!',
    },
  },
  {
    q: { el: 'Πώς λέμε «πόδι» στα αγγλικά;', en: 'How do you say «πόδι» (foot) in English?' },
    options: { el: ['hand', 'head', 'foot', 'nose'], en: ['hand', 'head', 'foot', 'nose'] },
    correct: 2,
    explanation: {
      el: '«Πόδι» στα αγγλικά είναι foot. Hand είναι το χέρι και head το κεφάλι.',
      en: '«Πόδι» in English is foot. Hand is the hand and head is the head.',
    },
  },
  {
    q: { el: 'Η δασκάλα λέει «Hop on one foot!». Τι κάνουμε;', en: 'The teacher says «Hop on one foot!». What do we do?' },
    options: { el: ['Τρέχουμε γύρω γύρω', 'Πηδάμε στο ένα πόδι', 'Κουνάμε το κεφάλι', 'Χτυπάμε παλαμάκια'], en: ['We run around', 'We jump on one foot', 'We shake our head', 'We clap our hands'] },
    correct: 1,
    explanation: {
      el: 'Hop είναι «πηδάω», one foot είναι «ένα πόδι». Πηδάμε στο ένα πόδι!',
      en: 'Hop means «πηδάω», one foot means «ένα πόδι». We jump on one foot!',
    },
  },
  {
    q: { el: 'Τι σημαίνει «Turn around»;', en: 'What does «Turn around» mean?' },
    options: { el: ['Κάθισε κάτω', 'Σήκω πάνω', 'Γύρνα γύρω γύρω', 'Άγγιξε τη μύτη σου'], en: ['Sit down', 'Stand up', 'Spin around', 'Touch your nose'] },
    correct: 2,
    explanation: {
      el: '«Turn around» σημαίνει «γύρνα γύρω γύρω». Turn around, turn around!',
      en: '«Turn around» means «γύρνα γύρω γύρω». Turn around, turn around!',
    },
  },

  // ── 15–18: putting it together ─────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I can jumping.', 'I can jump.', 'I jump can.', 'I can to jump.'], en: ['I can jumping.', 'I can jump.', 'I jump can.', 'I can to jump.'] },
    correct: 1,
    explanation: {
      el: 'Μετά το can βάζουμε τη λέξη σκέτη: I can jump. Όχι «to», όχι «-ing».',
      en: 'After can we put the plain word: I can jump. No «to», no «-ing».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «I ___ run fast!»', en: 'Fill in: «I ___ run fast!»' },
    options: { el: ['am', 'is', 'can', 'have'], en: ['am', 'is', 'can', 'have'] },
    correct: 2,
    explanation: {
      el: 'Όταν μπορούμε να κάνουμε κάτι, λέμε can: «I can run fast!» = Μπορώ να τρέξω γρήγορα!',
      en: 'When we are able to do something, we say can: «I can run fast!»',
    },
  },
  {
    q: { el: 'Η Μαρία ρωτάει τον Γιώργο αν μπορεί να χορέψει. Τι λέει;', en: 'Maria asks Giorgos if he can dance. What does she say?' },
    options: { el: ['Can you dance?', 'You can dance.', 'I can dance.', 'Can I dance?'], en: ['Can you dance?', 'You can dance.', 'I can dance.', 'Can I dance?'] },
    correct: 0,
    explanation: {
      el: 'Για να ρωτήσουμε, βάζουμε το can μπροστά: «Can you dance?» = Μπορείς να χορέψεις;',
      en: 'To ask, we put can at the front: «Can you dance?» = Μπορείς να χορέψεις;',
    },
  },
  {
    q: { el: 'Ο Γιώργος ξέρει να πηδάει αλλά όχι να κολυμπάει. Τι λέει;', en: 'Giorgos can jump but not swim. What does he say?' },
    options: { el: ['I can swim but I can\'t jump.', 'I can\'t jump and I can\'t swim.', 'I can jump but I can\'t swim.', 'I can jump and I can swim.'], en: ['I can swim but I can\'t jump.', 'I can\'t jump and I can\'t swim.', 'I can jump but I can\'t swim.', 'I can jump and I can swim.'] },
    correct: 2,
    explanation: {
      el: 'Μπορεί να πηδήξει (I can jump), δεν μπορεί να κολυμπήσει (I can\'t swim). Το but σημαίνει «αλλά».',
      en: 'He is able to jump (I can jump), not able to swim (I can\'t swim). But means «αλλά».',
    },
  },
];
