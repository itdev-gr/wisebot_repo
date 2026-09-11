/**
 * Grade 1 · English Language Arts · Rhyming Words
 * ===============================================
 * Original questions for a native English-speaking child of 6–7 (nothing from published books).
 * Words rhyme when their endings sound the same: cat, hat, bat.
 * What the unit covers, in order:
 *   1–5   which word rhymes with…: cat, dog, pig, sun, bell
 *   6–9   the odd one out: three rhyme, one does not
 *   10–14 word families: -at, -og, -ip, -un and the family a word belongs to
 *   15–18 make a rhyme: finishing a little two-line rhyme with the right word
 * Distractors share a first letter or a middle vowel with the answer, so the child must listen to the ending.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ELA_RHYMING_WORDS: QuizQuestion[] = [
  // ── 1–5: which word rhymes with… ───────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη κάνει ρίμα με το «cat»;', en: 'Which word rhymes with «cat»?' },
    options: { el: ['cap', 'hat', 'cot', 'can'], en: ['cap', 'hat', 'cot', 'can'] },
    correct: 1,
    explanation: {
      el: 'Cat και hat τελειώνουν και τα δύο σε -at, οπότε κάνουν ρίμα. Οι λέξεις που κάνουν ρίμα ακούγονται ίδιες στο τέλος.',
      en: 'Cat and hat both end with -at, so they rhyme. Rhyming words sound the same at the end.',
    },
  },
  {
    q: { el: 'Ποια λέξη κάνει ρίμα με το «dog»;', en: 'Which word rhymes with «dog»?' },
    options: { el: ['dig', 'dot', 'dug', 'log'], en: ['dig', 'dot', 'dug', 'log'] },
    correct: 3,
    explanation: {
      el: 'Dog και log τελειώνουν και τα δύο σε -og. Το dig, dot και dug αρχίζουν με d, αλλά η ρίμα είναι στο τέλος, όχι στην αρχή!',
      en: 'Dog and log both end with -og. Dig, dot and dug start with d, but rhyming is about the end, not the start!',
    },
  },
  {
    q: { el: 'Ποια λέξη κάνει ρίμα με το «pig»;', en: 'Which word rhymes with «pig»?' },
    options: { el: ['wig', 'pin', 'peg', 'pit'], en: ['wig', 'pin', 'peg', 'pit'] },
    correct: 0,
    explanation: {
      el: 'Pig και wig τελειώνουν και τα δύο σε -ig. Πες τα δυνατά: pig, wig. Ακούς το ίδιο τέλος;',
      en: 'Pig and wig both end with -ig. Say them out loud: pig, wig. Can you hear the same ending?',
    },
  },
  {
    q: { el: 'Ποια λέξη κάνει ρίμα με το «sun»;', en: 'Which word rhymes with «sun»?' },
    options: { el: ['sat', 'sit', 'run', 'son'], en: ['sat', 'sit', 'run', 'son'] },
    correct: 2,
    explanation: {
      el: 'Sun και run τελειώνουν και τα δύο σε -un. Το son ακούγεται σχεδόν ίδιο με το sun, αλλά γράφεται διαφορετικά και σημαίνει «γιος».',
      en: 'Sun and run both end with -un. Son sounds almost the same as sun, but it is spelled differently and means a boy child.',
    },
  },
  {
    q: { el: 'Ποια λέξη κάνει ρίμα με το «bell»;', en: 'Which word rhymes with «bell»?' },
    options: { el: ['ball', 'bill', 'bed', 'shell'], en: ['ball', 'bill', 'bed', 'shell'] },
    correct: 3,
    explanation: {
      el: 'Bell και shell τελειώνουν και τα δύο σε -ell. Ball και bill μοιάζουν, αλλά έχουν άλλο φωνήεν στη μέση.',
      en: 'Bell and shell both end with -ell. Ball and bill look similar, but they have a different vowel in the middle.',
    },
  },

  // ── 6–9: the odd one out ───────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ΔΕΝ κάνει ρίμα με τις άλλες;', en: 'Which word does NOT rhyme with the others?' },
    options: { el: ['hop', 'top', 'hat', 'mop'], en: ['hop', 'top', 'hat', 'mop'] },
    correct: 2,
    explanation: {
      el: 'Hop, top και mop τελειώνουν όλα σε -op. Το hat τελειώνει σε -at, οπότε δεν ταιριάζει.',
      en: 'Hop, top and mop all end with -op. Hat ends with -at, so it does not fit.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ κάνει ρίμα με τις άλλες;', en: 'Which word does NOT rhyme with the others?' },
    options: { el: ['bed', 'red', 'fed', 'bag'], en: ['bed', 'red', 'fed', 'bag'] },
    correct: 3,
    explanation: {
      el: 'Bed, red και fed τελειώνουν όλα σε -ed. Το bag αρχίζει με b όπως το bed, αλλά τελειώνει σε -ag.',
      en: 'Bed, red and fed all end with -ed. Bag starts with b like bed, but it ends with -ag.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ κάνει ρίμα με τις άλλες;', en: 'Which word does NOT rhyme with the others?' },
    options: { el: ['bug', 'hug', 'bun', 'rug'], en: ['bug', 'hug', 'bun', 'rug'] },
    correct: 2,
    explanation: {
      el: 'Bug, hug και rug τελειώνουν όλα σε -ug. Το bun τελειώνει σε -un, οπότε αυτό είναι το διαφορετικό.',
      en: 'Bug, hug and rug all end with -ug. Bun ends with -un, so bun is the odd one out.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ κάνει ρίμα με τις άλλες;', en: 'Which word does NOT rhyme with the others?' },
    options: { el: ['pen', 'ten', 'pin', 'hen'], en: ['pen', 'ten', 'pin', 'hen'] },
    correct: 2,
    explanation: {
      el: 'Pen, ten και hen τελειώνουν όλα σε -en. Το pin έχει i στη μέση, οπότε τελειώνει σε -in.',
      en: 'Pen, ten and hen all end with -en. Pin has an i in the middle, so it ends with -in.',
    },
  },

  // ── 10–14: word families ───────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια -at;', en: 'Which word belongs to the -at family?' },
    options: { el: ['mat', 'map', 'mad', 'man'], en: ['mat', 'map', 'mad', 'man'] },
    correct: 0,
    explanation: {
      el: 'Mat τελειώνει σε -at, οπότε ανήκει στην ίδια οικογένεια με τα cat, hat και bat.',
      en: 'Mat ends with -at, so it belongs to the same family as cat, hat and bat.',
    },
  },
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια -og;', en: 'Which word belongs to the -og family?' },
    options: { el: ['fig', 'fog', 'fan', 'fun'], en: ['fig', 'fog', 'fan', 'fun'] },
    correct: 1,
    explanation: {
      el: 'Fog τελειώνει σε -og, όπως το dog, το log και το frog. Όλα κάνουν ρίμα μεταξύ τους.',
      en: 'Fog ends with -og, like dog, log and frog. They all rhyme with each other.',
    },
  },
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια -ip;', en: 'Which word belongs to the -ip family?' },
    options: { el: ['sap', 'sit', 'sip', 'sun'], en: ['sap', 'sit', 'sip', 'sun'] },
    correct: 2,
    explanation: {
      el: 'Sip τελειώνει σε -ip, όπως το hip, το lip και το zip. Το sit τελειώνει σε -it, που είναι άλλη οικογένεια.',
      en: 'Sip ends with -ip, like hip, lip and zip. Sit ends with -it, which is a different family.',
    },
  },
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια -un;', en: 'Which word belongs to the -un family?' },
    options: { el: ['bug', 'bin', 'ban', 'bun'], en: ['bug', 'bin', 'ban', 'bun'] },
    correct: 3,
    explanation: {
      el: 'Bun τελειώνει σε -un, όπως το sun, το run και το fun. Άλλαξε το πρώτο γράμμα και έχεις νέα λέξη της ίδιας οικογένειας!',
      en: 'Bun ends with -un, like sun, run and fun. Change the first letter and you get a new word in the same family!',
    },
  },
  {
    q: { el: 'Σε ποια οικογένεια ανήκει η λέξη «ship»;', en: 'Which family does the word «ship» belong to?' },
    options: { el: ['-op', '-ip', '-at', '-un'], en: ['-op', '-ip', '-at', '-un'] },
    correct: 1,
    explanation: {
      el: 'Ship τελειώνει σε -ip: sh-ip. Είναι στην ίδια οικογένεια με το lip, το hip και το zip.',
      en: 'Ship ends with -ip: sh-ip. It is in the same family as lip, hip and zip.',
    },
  },

  // ── 15–18: make a rhyme ────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε τη ρίμα: «I see a frog. It sits on a ___.»', en: 'Finish the rhyme: «I see a frog. It sits on a ___.»' },
    options: { el: ['rock', 'leaf', 'log', 'mat'], en: ['rock', 'leaf', 'log', 'mat'] },
    correct: 2,
    explanation: {
      el: 'Frog και log κάνουν ρίμα, γιατί και τα δύο τελειώνουν σε -og. Ένας βάτραχος θα μπορούσε να κάτσει σε βράχο, αλλά το rock δεν κάνει ρίμα!',
      en: 'Frog and log rhyme, because they both end with -og. A frog could sit on a rock, but rock does not rhyme!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε τη ρίμα: «The sun is up. Time for fun! Let us go for a ___.»', en: 'Finish the rhyme: «The sun is up. Time for fun! Let us go for a ___.»' },
    options: { el: ['run', 'walk', 'swim', 'ride'], en: ['run', 'walk', 'swim', 'ride'] },
    correct: 0,
    explanation: {
      el: 'Sun, fun και run τελειώνουν όλα σε -un, οπότε το run κάνει τη ρίμα να ακούγεται σωστά.',
      en: 'Sun, fun and run all end with -un, so run makes the rhyme sound just right.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε τη ρίμα: «My cat is fat. She sleeps on a ___.»', en: 'Finish the rhyme: «My cat is fat. She sleeps on a ___.»' },
    options: { el: ['bed', 'rug', 'chair', 'mat'], en: ['bed', 'rug', 'chair', 'mat'] },
    correct: 3,
    explanation: {
      el: 'Cat, fat και mat τελειώνουν όλα σε -at. Η γάτα θα μπορούσε να κοιμηθεί σε κρεβάτι, αλλά το bed δεν κάνει ρίμα.',
      en: 'Cat, fat and mat all end with -at. The cat could sleep on a bed, but bed does not rhyme.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε τη ρίμα: «I have a pet pig. He wears a ___.»', en: 'Finish the rhyme: «I have a pet pig. He wears a ___.»' },
    options: { el: ['hat', 'wig', 'coat', 'bow'], en: ['hat', 'wig', 'coat', 'bow'] },
    correct: 1,
    explanation: {
      el: 'Pig και wig κάνουν ρίμα, γιατί τελειώνουν και τα δύο σε -ig. Ένα γουρουνάκι με περούκα είναι πολύ αστείο!',
      en: 'Pig and wig rhyme, because they both end with -ig. A pig in a wig is very funny!',
    },
  },
];
