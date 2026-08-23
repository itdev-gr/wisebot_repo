/**
 * Β' Δημοτικού · Αγγλικά · Κατοικίδια & Τέρατα / "Pets & Monsters"
 * ===================================================================
 * Original questions for a child of 7–8 who is learning English. In order:
 *   1–5   pet words: dog, cat, rabbit, fish, bird, horse
 *   6–10  can / can't — what animals can do ("Can a monkey fly?", short answers)
 *   11–15 has got / hasn't got — describing a friendly monster (eyes, legs, wings)
 *   16–18 putting it together: colours, big/small, a whole short description
 * Options are English words, so options.el and options.en are the same arrays.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ENGLISH_PETS_AND_MONSTERS: QuizQuestion[] = [
  // ── 1–5: pet words ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «σκύλος» στα αγγλικά;', en: 'How do you say «σκύλος» in English?' },
    options: { el: ['cat', 'dog', 'duck', 'frog'], en: ['cat', 'dog', 'duck', 'frog'] },
    correct: 1,
    explanation: {
      el: 'Ο σκύλος στα αγγλικά είναι «dog». Η γάτα είναι «cat».',
      en: 'A σκύλος is a “dog”. A γάτα is a “cat”.',
    },
  },
  {
    q: { el: 'Πώς λέμε «γάτα» στα αγγλικά;', en: 'How do you say «γάτα» in English?' },
    options: { el: ['cat', 'rat', 'hat', 'bat'], en: ['cat', 'rat', 'hat', 'bat'] },
    correct: 0,
    explanation: {
      el: 'Η γάτα είναι «cat». Το «rat» είναι ο αρουραίος και το «hat» είναι το καπέλο!',
      en: 'A cat is “cat”. A “rat” is a ποντίκι and a “hat” is a καπέλο!',
    },
  },
  {
    q: { el: 'Ποιο ζώο είναι το «rabbit»;', en: 'Which animal is a “rabbit”?' },
    options: { el: ['το άλογο', 'το ψάρι', 'το κουνέλι', 'το πουλί'], en: ['the horse', 'the fish', 'the rabbit', 'the bird'] },
    correct: 2,
    explanation: {
      el: 'Το «rabbit» είναι το κουνέλι. Έχει μεγάλα αυτιά και πηδάει!',
      en: 'A “rabbit” is a κουνέλι. It has big ears and it jumps!',
    },
  },
  {
    q: { el: 'Η Ελένη έχει ένα ζώο που ζει στο νερό. Ποιο είναι;', en: 'Eleni has a pet that lives in water. Which one is it?' },
    options: { el: ['a bird', 'a dog', 'a horse', 'a fish'], en: ['a bird', 'a dog', 'a horse', 'a fish'] },
    correct: 3,
    explanation: {
      el: 'Το «fish» είναι το ψάρι. Ζει στο νερό, μέσα σε μια γυάλα.',
      en: 'A “fish” lives in water, in a bowl.',
    },
  },
  {
    q: { el: 'Ποιο ζώο είναι το «horse»;', en: 'Which animal is a “horse”?' },
    options: { el: ['το πουλί', 'το άλογο', 'η χελώνα', 'το κουνέλι'], en: ['the bird', 'the horse', 'the turtle', 'the rabbit'] },
    correct: 1,
    explanation: {
      el: 'Το «horse» είναι το άλογο. Είναι μεγάλο και τρέχει γρήγορα.',
      en: 'A “horse” is an άλογο. It is big and it runs fast.',
    },
  },

  // ── 6–10: can / can't ──────────────────────────────────────────────────────
  {
    q: { el: 'A bird ___ fly. Ποια λέξη λείπει;', en: 'A bird ___ fly. Which word is missing?' },
    options: { el: ['can', 'can\'t', 'is', 'has'], en: ['can', 'can\'t', 'is', 'has'] },
    correct: 0,
    explanation: {
      el: 'Το πουλί μπορεί να πετάξει: «A bird can fly». Το «can» σημαίνει «μπορώ».',
      en: 'A bird can fly. “Can” means “μπορώ”.',
    },
  },
  {
    q: { el: 'A fish ___ walk. Ποια λέξη λείπει;', en: 'A fish ___ walk. Which word is missing?' },
    options: { el: ['can', 'can\'t', 'is', 'has'], en: ['can', 'can\'t', 'is', 'has'] },
    correct: 1,
    explanation: {
      el: 'Το ψάρι δεν μπορεί να περπατήσει: «A fish can\'t walk». Το «can\'t» σημαίνει «δεν μπορώ».',
      en: 'A fish can\'t walk. “Can\'t” means “δεν μπορώ”.',
    },
  },
  {
    q: { el: 'Can a monkey fly? Ποια είναι η σωστή απάντηση;', en: 'Can a monkey fly? Which is the right answer?' },
    options: { el: ['Yes, it can.', 'No, it can\'t.', 'Yes, it is.', 'No, it hasn\'t.'], en: ['Yes, it can.', 'No, it can\'t.', 'Yes, it is.', 'No, it hasn\'t.'] },
    correct: 1,
    explanation: {
      el: 'Η μαϊμού δεν πετάει! Στην ερώτηση «Can…?» απαντάμε «Yes, it can» ή «No, it can\'t».',
      en: 'A monkey does not fly! To a “Can…?” question we answer “Yes, it can” or “No, it can\'t”.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Μπορεί ένας σκύλος να κολυμπήσει;» στα αγγλικά;', en: 'How do you say «Μπορεί ένας σκύλος να κολυμπήσει;» in English?' },
    options: { el: ['A dog can swim?', 'Can a dog swim?', 'Is a dog swim?', 'Does a dog can swim?'], en: ['A dog can swim?', 'Can a dog swim?', 'Is a dog swim?', 'Does a dog can swim?'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση το «Can» πάει πρώτο: «Can a dog swim?». Και ναι, μπορεί!',
      en: 'In a question “Can” goes first: “Can a dog swim?”. And yes, it can!',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει: «My cat can jump, but it can\'t ___.» Τι ταιριάζει;', en: 'Nikos says: “My cat can jump, but it can\'t ___.” What fits?' },
    options: { el: ['run', 'fly', 'climb', 'sleep'], en: ['run', 'fly', 'climb', 'sleep'] },
    correct: 1,
    explanation: {
      el: 'Η γάτα πηδάει, τρέχει, σκαρφαλώνει και κοιμάται — αλλά δεν πετάει! «It can\'t fly».',
      en: 'A cat can jump, run, climb and sleep — but it can\'t fly!',
    },
  },

  // ── 11–15: has got / hasn't got ────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «It has got three eyes»;', en: 'What does “It has got three eyes” mean?' },
    options: { el: ['Έχει τρία μάτια.', 'Έχει τρία πόδια.', 'Έχει τρία αυτιά.', 'Έχει τρία δόντια.'], en: ['It has three eyes.', 'It has three legs.', 'It has three ears.', 'It has three teeth.'] },
    correct: 0,
    explanation: {
      el: 'Το «eyes» είναι τα μάτια. «It has got three eyes» = «Έχει τρία μάτια».',
      en: '“Eyes” are μάτια. “It has got three eyes” = “Έχει τρία μάτια”.',
    },
  },
  {
    q: { el: 'Το τέρας έχει τέσσερα πόδια. Πώς το λέμε στα αγγλικά;', en: 'The monster has four legs. How do we say it in English?' },
    options: { el: ['It has got four legs.', 'It has got four arms.', 'It has got four hands.', 'It has got four ears.'], en: ['It has got four legs.', 'It has got four arms.', 'It has got four hands.', 'It has got four ears.'] },
    correct: 0,
    explanation: {
      el: 'Τα πόδια είναι «legs». Τα «arms» είναι τα χέρια και τα «ears» τα αυτιά.',
      en: 'Πόδια are “legs”. “Arms” are χέρια and “ears” are αυτιά.',
    },
  },
  {
    q: { el: 'Το τέρας της Μαρίας δεν έχει φτερά. Τι λέει η Μαρία;', en: 'Maria\'s monster has no wings. What does Maria say?' },
    options: { el: ['It has got wings.', 'It can\'t wings.', 'It isn\'t got wings.', 'It hasn\'t got wings.'], en: ['It has got wings.', 'It can\'t wings.', 'It isn\'t got wings.', 'It hasn\'t got wings.'] },
    correct: 3,
    explanation: {
      el: '«Δεν έχει» = «It hasn\'t got». Τα «wings» είναι τα φτερά.',
      en: '“Δεν έχει” = “It hasn\'t got”. “Wings” are φτερά.',
    },
  },
  {
    q: { el: 'Has it got a tail? Το τέρας έχει ουρά. Ποια απάντηση είναι σωστή;', en: 'Has it got a tail? The monster has a tail. Which answer is right?' },
    options: { el: ['Yes, it can.', 'Yes, it is.', 'Yes, it has.', 'No, it hasn\'t.'], en: ['Yes, it can.', 'Yes, it is.', 'Yes, it has.', 'No, it hasn\'t.'] },
    correct: 2,
    explanation: {
      el: 'Στην ερώτηση «Has it got…?» απαντάμε «Yes, it has» ή «No, it hasn\'t». Το «tail» είναι η ουρά.',
      en: 'To “Has it got…?” we answer “Yes, it has” or “No, it hasn\'t”. A “tail” is an ουρά.',
    },
  },
  {
    q: { el: 'Πόσα μάτια έχει το τέρας; «It has got two big eyes and one small eye.»', en: 'How many eyes has the monster got? “It has got two big eyes and one small eye.”' },
    options: { el: ['one', 'two', 'three', 'four'], en: ['one', 'two', 'three', 'four'] },
    correct: 2,
    explanation: {
      el: 'Δύο μεγάλα μάτια και ένα μικρό: 2 + 1 = 3. «It has got three eyes».',
      en: 'Two big eyes and one small eye: 2 + 1 = 3. “It has got three eyes”.',
    },
  },

  // ── 16–18: describing ──────────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος έχει ένα μικρό κουνέλι. Πώς το λέει στα αγγλικά;', en: 'Giorgos has a small rabbit. How does he say it in English?' },
    options: { el: ['I have got a big rabbit.', 'I have got a small rabbit.', 'I has got a small rabbit.', 'I can got a small rabbit.'], en: ['I have got a big rabbit.', 'I have got a small rabbit.', 'I has got a small rabbit.', 'I can got a small rabbit.'] },
    correct: 1,
    explanation: {
      el: 'Για τον εαυτό μας λέμε «I have got». Το «small» σημαίνει μικρό και το «big» μεγάλο.',
      en: 'For ourselves we say “I have got”. “Small” means μικρό and “big” means μεγάλο.',
    },
  },
  {
    q: { el: 'Ποια πρόταση περιγράφει ένα πράσινο τέρας με τρία πόδια;', en: 'Which sentence describes a green monster with three legs?' },
    options: { el: ['It is green. It has got three legs.', 'It is red. It has got three legs.', 'It is green. It has got three eyes.', 'It is green. It has got two legs.'], en: ['It is green. It has got three legs.', 'It is red. It has got three legs.', 'It is green. It has got three eyes.', 'It is green. It has got two legs.'] },
    correct: 0,
    explanation: {
      el: 'Πράσινο = «green», τρία πόδια = «three legs». Για το χρώμα λέμε «It is», για τα πόδια «It has got».',
      en: 'Green = πράσινο, three legs = τρία πόδια. For the colour we say “It is”, for the legs “It has got”.',
    },
  },
  {
    q: { el: '«My monster is blue. It has got four eyes and it can fly.» Τι είναι ΛΑΘΟΣ;', en: '“My monster is blue. It has got four eyes and it can fly.” Which is WRONG?' },
    options: { el: ['It is blue.', 'It can fly.', 'It has got four eyes.', 'It has got two eyes.'], en: ['It is blue.', 'It can fly.', 'It has got four eyes.', 'It has got two eyes.'] },
    correct: 3,
    explanation: {
      el: 'Το τέρας έχει τέσσερα μάτια («four eyes»), όχι δύο. Όλα τα άλλα τα λέει η περιγραφή.',
      en: 'The monster has got four eyes, not two. Everything else is in the description.',
    },
  },
];
