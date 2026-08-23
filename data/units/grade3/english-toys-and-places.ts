/**
 * Γ' Δημοτικού · Αγγλικά · Παιχνίδια & Μέρη / Toys & Places
 * ========================================================
 * Original questions for a Greek child of 8–9 learning English (curriculum topics
 * only — nothing copied from ebooks.edu.gr). What the unit covers, in order:
 *   1–5   toy words: ball, doll, kite, teddy bear, bike
 *   6–9   places: school, park, shop, playground + 'Where is…?'
 *   10–13 can / can't: what we can do at a place, questions and short answers
 *   14–18 prepositions in / on / under / next to, and a mixed sentence at the end
 * Distractors are the real mix-ups: look-alike words (dog/doll), the neighbouring
 * preposition (on/in), and 'can' without the -n't when the sentence is negative.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ENGLISH_TOYS_AND_PLACES: QuizQuestion[] = [
  // ── 1–5: toys ───────────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μπάλα» στα αγγλικά;', en: 'How do you say «μπάλα» in English?' },
    options: { el: ['ball', 'bell', 'doll', 'bull'], en: ['ball', 'bell', 'doll', 'bull'] },
    correct: 0,
    explanation: {
      el: 'Η μπάλα είναι «ball». Το «bell» είναι καμπάνα και το «doll» είναι κούκλα.',
      en: '«Μπάλα» is “ball”. A “bell” rings and a “doll” is a toy you dress up.',
    },
  },
  {
    q: { el: 'Πώς λέμε «κούκλα» στα αγγλικά;', en: 'How do you say «κούκλα» in English?' },
    options: { el: ['dog', 'doll', 'duck', 'door'], en: ['dog', 'doll', 'duck', 'door'] },
    correct: 1,
    explanation: {
      el: 'Η κούκλα είναι «doll» με δύο l. Το «dog» είναι ο σκύλος — πρόσεχε, μοιάζουν!',
      en: '«Κούκλα» is “doll” with two l’s. “Dog” is a pet — careful, they look alike!',
    },
  },
  {
    q: { el: 'Η Ελένη πετάει κάτι στον ουρανό με ένα σκοινί. Τι είναι;', en: 'Eleni flies something in the sky with a string. What is it?' },
    options: { el: ['a car', 'a puzzle', 'a kite', 'a robot'], en: ['a car', 'a puzzle', 'a kite', 'a robot'] },
    correct: 2,
    explanation: {
      el: 'Ο χαρταετός είναι «kite». Πετάει ψηλά όταν φυσάει αέρας.',
      en: 'A kite flies high in the sky when it is windy.',
    },
  },
  {
    q: { el: 'Τι είναι το «teddy bear»;', en: 'What is a “teddy bear”?' },
    options: { el: ['ένα ποδήλατο', 'ένα αρκουδάκι', 'ένα τρενάκι', 'μια μπάλα'], en: ['a bike', 'a toy bear', 'a toy train', 'a ball'] },
    correct: 1,
    explanation: {
      el: '«Teddy bear» είναι το λούτρινο αρκουδάκι. «Bear» σημαίνει αρκούδα.',
      en: 'A teddy bear is a soft toy bear. “Bear” is the animal.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει ένα ποδήλατο. Πώς το λέμε στα αγγλικά;', en: 'Nikos has a «ποδήλατο». What is it in English?' },
    options: { el: ['a bike', 'a boat', 'a bus', 'a book'], en: ['a bike', 'a boat', 'a bus', 'a book'] },
    correct: 0,
    explanation: {
      el: 'Το ποδήλατο είναι «bike» (ή «bicycle»). «Boat» είναι η βάρκα και «bus» το λεωφορείο.',
      en: 'A «ποδήλατο» is a “bike” (or “bicycle”). A “boat” sails and a “bus” drives.',
    },
  },

  // ── 6–9: places and 'Where is…?' ────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «σχολείο» στα αγγλικά;', en: 'How do you say «σχολείο» in English?' },
    options: { el: ['shop', 'park', 'school', 'house'], en: ['shop', 'park', 'school', 'house'] },
    correct: 2,
    explanation: {
      el: 'Το σχολείο είναι «school». Το «shop» είναι μαγαζί και το «park» πάρκο.',
      en: '«Σχολείο» is “school”. A “shop” sells things and a “park” has trees and grass.',
    },
  },
  {
    q: { el: 'Η Μαρία αγοράζει ένα παιχνίδι. Πού είναι;', en: 'Maria is buying a toy. Where is she?' },
    options: { el: ['at the park', 'at school', 'at the toy shop', 'at the playground'], en: ['at the park', 'at school', 'at the toy shop', 'at the playground'] },
    correct: 2,
    explanation: {
      el: 'Παιχνίδια αγοράζουμε στο «toy shop» (μαγαζί με παιχνίδια). Στο πάρκο παίζουμε, δεν αγοράζουμε.',
      en: 'We buy toys at the toy shop. At the park we play, we don’t buy things.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ is the park?» «It’s next to the school.»', en: 'Fill in: “___ is the park?” “It’s next to the school.”' },
    options: { el: ['What', 'Where', 'Who', 'When'], en: ['What', 'Where', 'Who', 'When'] },
    correct: 1,
    explanation: {
      el: 'Όταν ρωτάμε «πού;», λέμε «Where». «What» είναι «τι», «Who» «ποιος», «When» «πότε».',
      en: 'To ask about a place we use “Where”. “What” asks for a thing, “Who” a person, “When” a time.',
    },
  },
  {
    q: { el: 'Πώς απαντάμε στην ερώτηση «Where is Giorgos?»', en: 'How do we answer the question “Where is Giorgos?”' },
    options: { el: ['He is eight.', 'He is at the playground.', 'He is my friend.', 'He is happy.'], en: ['He is eight.', 'He is at the playground.', 'He is my friend.', 'He is happy.'] },
    correct: 1,
    explanation: {
      el: 'Το «Where» ρωτάει για μέρος, άρα απαντάμε με ένα μέρος: «at the playground» (στην παιδική χαρά).',
      en: '“Where” asks about a place, so the answer is a place: “at the playground”.',
    },
  },

  // ── 10–13: can / can't ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «I can swim»;', en: 'What does “I can swim” mean?' },
    options: { el: ['Μου αρέσει να κολυμπάω.', 'Μπορώ να κολυμπήσω.', 'Θέλω να κολυμπήσω.', 'Δεν κολυμπάω.'], en: ['I like swimming.', 'I am able to swim.', 'I want to swim.', 'I don’t swim.'] },
    correct: 1,
    explanation: {
      el: 'Το «can» σημαίνει «μπορώ». «I can swim» = «Μπορώ να κολυμπήσω».',
      en: '“Can” means you are able to do something. “I can swim” = I know how to swim.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «At the park you ___ fly a kite.»', en: 'Fill in: “At the park you ___ fly a kite.”' },
    options: { el: ['can', 'is', 'have', 'are'], en: ['can', 'is', 'have', 'are'] },
    correct: 0,
    explanation: {
      el: 'Για το τι μπορούμε να κάνουμε βάζουμε «can» και μετά το ρήμα: «you can fly».',
      en: 'To say what we are able to do, we put “can” before the verb: “you can fly”.',
    },
  },
  {
    q: { el: 'Ο Γιώργος δεν μπορεί να κάνει ποδήλατο. Ποια πρόταση είναι σωστή;', en: 'Giorgos is not able to ride a bike. Which sentence is right?' },
    options: { el: ['Giorgos can ride a bike.', 'Giorgos no can ride a bike.', 'Giorgos can’t ride a bike.', 'Giorgos don’t can ride a bike.'], en: ['Giorgos can ride a bike.', 'Giorgos no can ride a bike.', 'Giorgos can’t ride a bike.', 'Giorgos don’t can ride a bike.'] },
    correct: 2,
    explanation: {
      el: 'Το «δεν μπορώ» είναι «can’t» (can + not). Δεν βάζουμε «no» ή «don’t» μπροστά από το can.',
      en: '“Can’t” is can + not. We never put “no” or “don’t” in front of “can”.',
    },
  },
  {
    q: { el: '«Can you play football?» Ποια είναι η σωστή σύντομη απάντηση;', en: '“Can you play football?” Which short answer is correct?' },
    options: { el: ['Yes, I am.', 'Yes, I do.', 'Yes, I have.', 'Yes, I can.'], en: ['Yes, I am.', 'Yes, I do.', 'Yes, I have.', 'Yes, I can.'] },
    correct: 3,
    explanation: {
      el: 'Όταν η ερώτηση ξεκινάει με «Can», απαντάμε με «can»: «Yes, I can.» ή «No, I can’t.»',
      en: 'When the question starts with “Can”, we answer with “can”: “Yes, I can.” or “No, I can’t.”',
    },
  },

  // ── 14–18: prepositions in / on / under / next to ──────────────────────────
  {
    q: { el: 'Η μπάλα είναι μέσα στο κουτί. «The ball is ___ the box.»', en: 'The ball is inside the box. “The ball is ___ the box.”' },
    options: { el: ['on', 'in', 'under', 'next to'], en: ['on', 'in', 'under', 'next to'] },
    correct: 1,
    explanation: {
      el: '«Μέσα» είναι «in». «On» σημαίνει «πάνω», «under» «κάτω» και «next to» «δίπλα».',
      en: 'Inside = “in”. “On” is on top, “under” is below, “next to” is beside.',
    },
  },
  {
    q: { el: 'Το αρκουδάκι είναι πάνω στο κρεβάτι. «The teddy bear is ___ the bed.»', en: 'The teddy bear is on top of the bed. “The teddy bear is ___ the bed.”' },
    options: { el: ['in', 'under', 'on', 'next to'], en: ['in', 'under', 'on', 'next to'] },
    correct: 2,
    explanation: {
      el: '«Πάνω σε» είναι «on». Το «in» είναι «μέσα» — το αρκουδάκι δεν είναι μέσα στο κρεβάτι!',
      en: 'On top of something = “on”. “In” means inside — the bear is not inside the bed!',
    },
  },
  {
    q: { el: 'Τι σημαίνει «The kite is under the table»;', en: 'What does “The kite is under the table” mean?' },
    options: { el: ['Ο χαρταετός είναι πάνω στο τραπέζι.', 'Ο χαρταετός είναι δίπλα στο τραπέζι.', 'Ο χαρταετός είναι μέσα στο τραπέζι.', 'Ο χαρταετός είναι κάτω από το τραπέζι.'], en: ['The kite is on top of the table.', 'The kite is beside the table.', 'The kite is inside the table.', 'The kite is below the table.'] },
    correct: 3,
    explanation: {
      el: '«Under» σημαίνει «κάτω από». Ο χαρταετός είναι κάτω από το τραπέζι.',
      en: '“Under” means below something. The kite is below the table.',
    },
  },
  {
    q: { el: 'Το μαγαζί είναι δίπλα στο σχολείο. «The shop is ___ the school.»', en: 'The shop is beside the school. “The shop is ___ the school.”' },
    options: { el: ['next to', 'under', 'in', 'on'], en: ['next to', 'under', 'in', 'on'] },
    correct: 0,
    explanation: {
      el: '«Δίπλα σε» είναι «next to» — δύο λέξεις μαζί. Το μαγαζί είναι δίπλα στο σχολείο.',
      en: 'Beside = “next to” — two words together. The shop is beside the school.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «I can’t find my doll! Where is it?» Ο Νίκος απαντάει: «Look! It is ___ the bed, next to your bike.» Η κούκλα είναι κάτω από το κρεβάτι.', en: 'Eleni says: “I can’t find my doll! Where is it?” Nikos answers: “Look! It is ___ the bed, next to your bike.” The doll is below the bed.' },
    options: { el: ['on', 'in', 'under', 'next to'], en: ['on', 'in', 'under', 'next to'] },
    correct: 2,
    explanation: {
      el: 'Κάτω από το κρεβάτι = «under the bed». Και «next to your bike» = δίπλα στο ποδήλατό σου.',
      en: 'Below the bed = “under the bed”. And “next to your bike” = beside your bike.',
    },
  },
];
