/**
 * Γ' Δημοτικού · English Language Arts · Prefixes & Suffixes
 * ===========================================================
 * Original questions for a native English-speaking child of 8–9 (curriculum topics only).
 * The `en` fields are the real content; `el` is a translation for a Greek-speaking parent.
 *
 * What the unit covers, in order:
 *   1–5   prefixes: un- (not), re- (again), dis- (opposite), pre- (before); spotting a prefix
 *   6–10  suffixes: -ful (full of), -less (without), -ly (how it is done)
 *   11–14 building the word: un + lock, re + read, dis + appear, help + ful
 *   15–18 comparatives and superlatives: -er / -est, bigger, happiest
 *
 * Distractors are the real mistakes: the wrong prefix for the meaning (preheat / reheat),
 * -ful and -less swapped, "more tall", "biger" without the double consonant.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ELA_PREFIXES_AND_SUFFIXES: QuizQuestion[] = [
  // ── 1–5: prefixes ──────────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η λέξη «unhappy»;', en: 'What does the word «unhappy» mean?' },
    options: { el: ['very happy', 'happy again', 'happy before', 'not happy'], en: ['very happy', 'happy again', 'happy before', 'not happy'] },
    correct: 3,
    explanation: {
      el: 'Το πρόθημα un- σημαίνει «όχι». Unhappy σημαίνει not happy, δηλαδή λυπημένος. Untidy σημαίνει not tidy και unlock σημαίνει ότι κάτι δεν είναι πια κλειδωμένο.',
      en: 'The prefix un- means "not". Unhappy means not happy, or sad. Untidy means not tidy, and unlock means not locked anymore.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «rebuild»;', en: 'What does the word «rebuild» mean?' },
    options: { el: ['build again', 'build badly', 'not build', 'build before'], en: ['build again', 'build badly', 'not build', 'build before'] },
    correct: 0,
    explanation: {
      el: 'Το πρόθημα re- σημαίνει «ξανά». Rebuild σημαίνει build again (χτίζω ξανά). Reread σημαίνει read again και refill σημαίνει fill again.',
      en: 'The prefix re- means "again". Rebuild means build again. Reread means read again, and refill means fill again.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «το αντίθετο του agree»;', en: 'Which word means "the opposite of agree"?' },
    options: { el: ['reagree', 'preagree', 'disagree', 'agreeful'], en: ['reagree', 'preagree', 'disagree', 'agreeful'] },
    correct: 2,
    explanation: {
      el: 'Το πρόθημα dis- σημαίνει «όχι» ή «το αντίθετο». Disagree σημαίνει ότι δεν συμφωνείς. Dislike σημαίνει not like και disappear είναι το αντίθετο του appear.',
      en: 'The prefix dis- means "not" or "the opposite of". Disagree means you do not agree. Dislike means not like, and disappear is the opposite of appear.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «preheat the oven»;', en: 'What does «preheat the oven» mean?' },
    options: { el: ['heat it before', 'heat it again', 'not heat it', 'heat it slowly'], en: ['heat it before', 'heat it again', 'not heat it', 'heat it slowly'] },
    correct: 0,
    explanation: {
      el: 'Το πρόθημα pre- σημαίνει «πριν». Preheat σημαίνει να ζεστάνεις τον φούρνο πριν βάλεις μέσα το φαγητό. Preview σημαίνει βλέπω πριν και preschool είναι το σχολείο πριν από το μεγάλο σχολείο.',
      en: 'The prefix pre- means "before". Preheat means to heat the oven before you put the food in. Preview means see before, and preschool is school before big school.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει πρόθημα;', en: 'Which word has a prefix?' },
    options: { el: ['happily', 'hopeful', 'jumping', 'unkind'], en: ['happily', 'hopeful', 'jumping', 'unkind'] },
    correct: 3,
    explanation: {
      el: 'Το πρόθημα προστίθεται στην ΑΡΧΗ της λέξης. Unkind είναι un + kind. Οι άλλες λέξεις έχουν καταλήξεις (επιθήματα): -ly, -ful, -ing.',
      en: 'A prefix is added to the START of a word. Unkind is un + kind. The other words have endings (suffixes) instead: -ly, -ful, -ing.',
    },
  },

  // ── 6–10: suffixes ─────────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η λέξη «careful»;', en: 'What does the word «careful» mean?' },
    options: { el: ['without care', 'full of care', 'care again', 'care before'], en: ['without care', 'full of care', 'care again', 'care before'] },
    correct: 1,
    explanation: {
      el: 'Το επίθημα -ful σημαίνει «γεμάτος από». Careful σημαίνει full of care, δηλαδή προσεκτικός. Joyful σημαίνει full of joy και helpful σημαίνει full of help.',
      en: 'The suffix -ful means "full of". Careful means full of care, so you pay attention. Joyful means full of joy, and helpful means full of help.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «hopeless»;', en: 'What does the word «hopeless» mean?' },
    options: { el: ['full of hope', 'hoping again', 'without hope', 'very hopeful'], en: ['full of hope', 'hoping again', 'without hope', 'very hopeful'] },
    correct: 2,
    explanation: {
      el: 'Το επίθημα -less σημαίνει «χωρίς». Hopeless σημαίνει without hope. Careless σημαίνει without care και fearless σημαίνει without fear.',
      en: 'The suffix -less means "without". Hopeless means without hope. Careless means without care, and fearless means without fear.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «με γρήγορο τρόπο»;', en: 'Which word means "in a quick way"?' },
    options: { el: ['quickful', 'quickless', 'quickest', 'quickly'], en: ['quickful', 'quickless', 'quickest', 'quickly'] },
    correct: 3,
    explanation: {
      el: 'Το επίθημα -ly μας λέει ΠΩΣ γίνεται κάτι. Quickly σημαίνει με γρήγορο τρόπο: she ran quickly. Softly σημαίνει με απαλό τρόπο.',
      en: 'The suffix -ly tells us HOW something is done. Quickly means in a quick way: she ran quickly. Softly means in a soft way.',
    },
  },
  {
    q: { el: 'Μια μέρα χωρίς σύννεφα είναι μια ___ μέρα. Ποια λέξη ταιριάζει;', en: 'A day with no clouds is a ___ day. Which word fits?' },
    options: { el: ['cloudless', 'cloudful', 'cloudly', 'recloud'], en: ['cloudless', 'cloudful', 'cloudly', 'recloud'] },
    correct: 0,
    explanation: {
      el: 'Το επίθημα -less σημαίνει «χωρίς». Μια cloudless μέρα δεν έχει καθόλου σύννεφα. Τα cloudful και cloudly δεν είναι πραγματικές λέξεις.',
      en: 'The suffix -less means "without". A cloudless day has no clouds at all. Cloudful and cloudly are not real words.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «γεμάτος χρώμα»;', en: 'Which word means "full of color"?' },
    options: { el: ['colorless', 'colorful', 'colorly', 'uncolor'], en: ['colorless', 'colorful', 'colorly', 'uncolor'] },
    correct: 1,
    explanation: {
      el: 'Το επίθημα -ful σημαίνει «γεμάτος από», οπότε colorful σημαίνει full of color. Το colorless θα σήμαινε το αντίθετο: χωρίς χρώμα.',
      en: 'The suffix -ful means "full of", so colorful means full of color. Colorless would mean the opposite: without color.',
    },
  },

  // ── 11–14: building the word ───────────────────────────────────────────────
  {
    q: { el: 'Φτιάξε τη λέξη: un + lock = ;', en: 'Build the word: un + lock = ?' },
    options: { el: ['unlock', 'lockun', 'relock', 'lockless'], en: ['unlock', 'lockun', 'relock', 'lockless'] },
    correct: 0,
    explanation: {
      el: 'Προσθέτουμε το πρόθημα un- στην αρχή της λέξης: unlock. Σημαίνει το αντίθετο του lock, δηλαδή ξεκλειδώνω.',
      en: 'We add the prefix un- to the front of the word: unlock. It means the opposite of lock, so you open it.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Μου άρεσε τόσο πολύ το βιβλίο που θέλω να το ___.»', en: 'Which word fits? «I liked the book so much that I want to ___ it.»' },
    options: { el: ['unread', 'preread', 'disread', 'reread'], en: ['unread', 'preread', 'disread', 'reread'] },
    correct: 3,
    explanation: {
      el: 'Το re- σημαίνει «ξανά». Αν θέλεις να διαβάσεις το βιβλίο ξανά, θέλεις να το reread.',
      en: 'Re- means "again". If you want to read the book again, you want to reread it.',
    },
  },
  {
    q: { el: 'Ποιο πρόθημα κάνει το αντίθετο του «appear»;', en: 'Which prefix makes the opposite of «appear»?' },
    options: { el: ['un-', 're-', 'pre-', 'dis-'], en: ['un-', 're-', 'pre-', 'dis-'] },
    correct: 3,
    explanation: {
      el: 'Το disappear είναι το αντίθετο του appear. Το πρόθημα dis- φτιάχνει το αντίθετο: dislike, disobey, disappear.',
      en: 'Disappear is the opposite of appear. The prefix dis- makes the opposite: dislike, disobey, disappear.',
    },
  },
  {
    q: { el: 'Ποιο επίθημα κάνει το «help» λέξη που σημαίνει «γεμάτος βοήθεια»;', en: 'Which suffix turns «help» into a word meaning "full of help"?' },
    options: { el: ['-less', '-ly', '-ful', '-er'], en: ['-less', '-ly', '-ful', '-er'] },
    correct: 2,
    explanation: {
      el: 'Help + ful = helpful, που σημαίνει full of help. Help + less = helpless, που σημαίνει το αντίθετο: χωρίς βοήθεια.',
      en: 'Help + ful = helpful, which means full of help. Help + less = helpless, which means the opposite: without help.',
    },
  },

  // ── 15–18: comparatives and superlatives ───────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε την πρόταση: «Ο Ben είναι ψηλός, αλλά η Amy είναι ___.»', en: 'Complete the sentence: «Ben is tall, but Amy is ___.»' },
    options: { el: ['taller', 'tallest', 'more tall', 'tallerer'], en: ['taller', 'tallest', 'more tall', 'tallerer'] },
    correct: 0,
    explanation: {
      el: 'Όταν συγκρίνουμε δύο πρόσωπα προσθέτουμε -er: taller. Amy is taller than Ben.',
      en: 'When we compare two people we add -er: taller. Amy is taller than Ben.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την πρόταση: «Από όλα τα βουνά του κόσμου, αυτό είναι το ___.»', en: 'Complete the sentence: «Of all the mountains in the world, this one is the ___.»' },
    options: { el: ['higher', 'more high', 'highest', 'most highest'], en: ['higher', 'more high', 'highest', 'most highest'] },
    correct: 2,
    explanation: {
      el: 'Όταν συγκρίνουμε τρία ή περισσότερα πράγματα προσθέτουμε -est: highest. Δύο πράγματα: higher. Όλα μαζί: highest.',
      en: 'When we compare three or more things we add -est: highest. Two things: higher. All of them: highest.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο σωστός συγκριτικός του «big»;', en: 'Which is the correct comparative of «big»?' },
    options: { el: ['biger', 'bigger', 'bigest', 'more big'], en: ['biger', 'bigger', 'bigest', 'more big'] },
    correct: 1,
    explanation: {
      el: 'Το big έχει βραχύ φωνήεν πριν από ένα σύμφωνο, οπότε διπλασιάζουμε το g πριν από το -er: bigger. Το ίδιο γίνεται με το hot, που γίνεται hotter.',
      en: 'Big has a short vowel before one consonant, so we double the g before -er: bigger. The same happens with hot, which becomes hotter.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο σωστός υπερθετικός του «happy»;', en: 'Which is the correct superlative of «happy»?' },
    options: { el: ['happyest', 'happiest', 'most happy', 'happiess'], en: ['happyest', 'happiest', 'most happy', 'happiess'] },
    correct: 1,
    explanation: {
      el: 'Το happy τελειώνει σε σύμφωνο + y, οπότε το y γίνεται i πριν από το -est: happiest. Σύγκριση δύο: happier. Σύγκριση τριών ή περισσότερων: happiest.',
      en: 'Happy ends in a consonant + y, so the y becomes i before -est: happiest. Comparing two: happier. Comparing three or more: happiest.',
    },
  },
];
