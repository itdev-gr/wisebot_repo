/**
 * Ε' Δημοτικού · Αγγλικά · Συγκρίσεις — "Comparisons"
 * =======================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 10–11 learning English.
 *
 * What the unit covers, in order:
 *   1–4   adjectives: big, small, tall, fast, old… (vocabulary and opposites)
 *   5–9   comparatives: -er + than, doubling (bigger), -y → -ier, more + long adjective
 *   10–14 superlatives: the -est, the most…, irregular good/better/best, bad/worse/worst
 *   15–18 world records and comparing facts: the biggest, the longest, the highest
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_COMPARISONS: QuizQuestion[] = [
  // ── 1–4: adjectives ────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ψηλός» στα αγγλικά;', en: 'How do you say «ψηλός» in English?' },
    options: { el: ['short', 'tall', 'long', 'fat'], en: ['short', 'tall', 'long', 'fat'] },
    correct: 1,
    explanation: {
      el: '«Ψηλός» = tall. Το short είναι «κοντός», το long «μακρύς» και το fat «χοντρός».',
      en: '«Ψηλός» = tall. Short means «κοντός», long means «μακρύς» and fat means «χοντρός».',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «fast»;', en: 'What is the opposite of «fast»?' },
    options: { el: ['quick', 'slow', 'small', 'late'], en: ['quick', 'slow', 'small', 'late'] },
    correct: 1,
    explanation: {
      el: 'Fast = γρήγορος, slow = αργός. Το quick σημαίνει κι αυτό «γρήγορος», άρα δεν είναι αντίθετο.',
      en: 'Fast means «γρήγορος», slow means «αργός». Quick also means fast, so it is not the opposite.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «heavy»;', en: 'What does the word «heavy» mean?' },
    options: { el: ['ελαφρύς', 'βαρύς', 'μεγάλος', 'δυνατός'], en: ['ελαφρύς (light)', 'βαρύς (heavy)', 'μεγάλος (big)', 'δυνατός (strong)'] },
    correct: 1,
    explanation: {
      el: 'Heavy = βαρύς. Το αντίθετό του είναι light (ελαφρύς). Big = μεγάλος, strong = δυνατός.',
      en: 'Heavy means «βαρύς». Its opposite is light. Big means «μεγάλος» and strong means «δυνατός».',
    },
  },
  {
    q: { el: 'Ο παππούς του Νίκου είναι 80 χρονών. Ο παππούς είναι…', en: 'Nikos\' grandfather is 80 years old. Grandfather is…' },
    options: { el: ['young', 'new', 'old', 'small'], en: ['young', 'new', 'old', 'small'] },
    correct: 2,
    explanation: {
      el: 'Για ανθρώπους μεγάλης ηλικίας λέμε old (ηλικιωμένος). Το young είναι «νέος». Το new το λέμε για πράγματα, όχι για ανθρώπους.',
      en: 'For people of a great age we say old. Young is the opposite. We say new for things, not for people.',
    },
  },

  // ── 5–9: comparatives ──────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: An elephant is ___ than a cat.', en: 'Complete: An elephant is ___ than a cat.' },
    options: { el: ['big', 'bigger', 'biggest', 'more big'], en: ['big', 'bigger', 'biggest', 'more big'] },
    correct: 1,
    explanation: {
      el: 'Όταν συγκρίνουμε δύο πράγματα, βάζουμε -er και than: bigger than. Το big διπλασιάζει το g: big → bigger.',
      en: 'When we compare two things, we add -er and than: bigger than. Big doubles the g: big → bigger.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Maria is taller than Eleni.', 'Maria is taller from Eleni.', 'Maria is more tall than Eleni.', 'Maria is tallest than Eleni.'], en: ['Maria is taller than Eleni.', 'Maria is taller from Eleni.', 'Maria is more tall than Eleni.', 'Maria is tallest than Eleni.'] },
    correct: 0,
    explanation: {
      el: 'Στα αγγλικά μετά τον συγκριτικό βάζουμε πάντα than, όχι from: taller than. Το «από» των ελληνικών δεν μεταφράζεται from εδώ!',
      en: 'In English, after a comparative we always use than, not from: taller than.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο συγκριτικός του «happy»;', en: 'What is the comparative of «happy»?' },
    options: { el: ['happyer', 'more happy', 'happier', 'happiest'], en: ['happyer', 'more happy', 'happier', 'happiest'] },
    correct: 2,
    explanation: {
      el: 'Τα επίθετα που τελειώνουν σε -y αλλάζουν το y σε i και παίρνουν -er: happy → happier, easy → easier.',
      en: 'Adjectives ending in -y change the y to i and add -er: happy → happier, easy → easier.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: This book is ___ than that one.', en: 'Complete: This book is ___ than that one.' },
    options: { el: ['interestinger', 'more interesting', 'most interesting', 'interesting'], en: ['interestinger', 'more interesting', 'most interesting', 'interesting'] },
    correct: 1,
    explanation: {
      el: 'Τα μεγάλα επίθετα (όπως interesting, beautiful, expensive) δεν παίρνουν -er. Βάζουμε more μπροστά: more interesting than.',
      en: 'Long adjectives (like interesting, beautiful, expensive) do not take -er. We put more in front: more interesting than.',
    },
  },
  {
    q: { el: 'Ο Γιώργος τρέχει τα 100 μέτρα σε 15 δευτερόλεπτα και η Ελένη σε 14. Τι λέμε;', en: 'Giorgos runs 100 metres in 15 seconds and Eleni in 14. What do we say?' },
    options: { el: ['Giorgos is faster than Eleni.', 'Eleni is slower than Giorgos.', 'Eleni is faster than Giorgos.', 'Giorgos is as fast as Eleni.'], en: ['Giorgos is faster than Eleni.', 'Eleni is slower than Giorgos.', 'Eleni is faster than Giorgos.', 'Giorgos is as fast as Eleni.'] },
    correct: 2,
    explanation: {
      el: 'Λιγότερα δευτερόλεπτα σημαίνει πιο γρήγορα! Η Ελένη έκανε 14, άρα Eleni is faster than Giorgos.',
      en: 'Fewer seconds means faster! Eleni took 14, so Eleni is faster than Giorgos.',
    },
  },

  // ── 10–14: superlatives ────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: The blue whale is ___ animal in the world.', en: 'Complete: The blue whale is ___ animal in the world.' },
    options: { el: ['bigger', 'the bigger', 'the biggest', 'most big'], en: ['bigger', 'the bigger', 'the biggest', 'most big'] },
    correct: 2,
    explanation: {
      el: 'Όταν κάτι είναι πρώτο ανάμεσα σε όλα, χρησιμοποιούμε τον υπερθετικό: the + -est → the biggest. Μην ξεχνάς το the!',
      en: 'When something is number one among all, we use the superlative: the + -est → the biggest. Don\'t forget the!',
    },
  },
  {
    q: { el: 'Ποιος είναι ο υπερθετικός του «beautiful»;', en: 'What is the superlative of «beautiful»?' },
    options: { el: ['the beautifulest', 'the most beautiful', 'more beautiful', 'the more beautiful'], en: ['the beautifulest', 'the most beautiful', 'more beautiful', 'the more beautiful'] },
    correct: 1,
    explanation: {
      el: 'Τα μεγάλα επίθετα σχηματίζουν τον υπερθετικό με the most: the most beautiful, the most expensive.',
      en: 'Long adjectives form the superlative with the most: the most beautiful, the most expensive.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Pizza is good, pasta is better, but souvlaki is ___!', en: 'Complete: Pizza is good, pasta is better, but souvlaki is ___!' },
    options: { el: ['the goodest', 'the bestest', 'the best', 'the most good'], en: ['the goodest', 'the bestest', 'the best', 'the most good'] },
    correct: 2,
    explanation: {
      el: 'Το good είναι ανώμαλο: good → better → the best. Δεν λέμε ποτέ goodest ή bestest.',
      en: 'Good is irregular: good → better → the best. We never say goodest or bestest.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο συγκριτικός και ο υπερθετικός του «bad»;', en: 'What are the comparative and superlative of «bad»?' },
    options: { el: ['badder – the baddest', 'worse – the worst', 'more bad – the most bad', 'worst – the worse'], en: ['badder – the baddest', 'worse – the worst', 'more bad – the most bad', 'worst – the worse'] },
    correct: 1,
    explanation: {
      el: 'Το bad είναι ανώμαλο, όπως και το good: bad → worse → the worst.',
      en: 'Bad is irregular, just like good: bad → worse → the worst.',
    },
  },
  {
    q: { el: 'Η Μαρία είναι 11, ο Νίκος 9 και η Ελένη 12 χρονών. Ποια πρόταση είναι σωστή;', en: 'Maria is 11, Nikos is 9 and Eleni is 12 years old. Which sentence is correct?' },
    options: { el: ['Nikos is the oldest.', 'Maria is the youngest.', 'Eleni is older than Maria.', 'Nikos is older than Maria.'], en: ['Nikos is the oldest.', 'Maria is the youngest.', 'Eleni is older than Maria.', 'Nikos is older than Maria.'] },
    correct: 2,
    explanation: {
      el: 'Η Ελένη (12) είναι μεγαλύτερη από τη Μαρία (11): Eleni is older than Maria. Ο Νίκος είναι ο μικρότερος: the youngest.',
      en: 'Eleni (12) is older than Maria (11). Nikos is the youngest, not the oldest.',
    },
  },

  // ── 15–18: world records ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το ψηλότερο βουνό του κόσμου; Mount Everest is ___ mountain in the world.', en: 'Which is the highest mountain in the world? Mount Everest is ___ mountain in the world.' },
    options: { el: ['the higher', 'the highest', 'higher than', 'the most high'], en: ['the higher', 'the highest', 'higher than', 'the most high'] },
    correct: 1,
    explanation: {
      el: 'Το Έβερεστ είναι το ψηλότερο βουνό στον κόσμο (8.849 μέτρα): the highest mountain in the world.',
      en: 'Everest is the highest mountain in the world (8,849 metres): the highest mountain in the world.',
    },
  },
  {
    q: { el: 'Το τσιτάχ τρέχει με 110 χιλιόμετρα την ώρα. Ποια πρόταση είναι σωστή;', en: 'The cheetah runs at 110 kilometres per hour. Which sentence is correct?' },
    options: { el: ['The cheetah is the fastest land animal.', 'The cheetah is the faster land animal.', 'The cheetah is the most fast land animal.', 'The cheetah is fastest than all animals.'], en: ['The cheetah is the fastest land animal.', 'The cheetah is the faster land animal.', 'The cheetah is the most fast land animal.', 'The cheetah is fastest than all animals.'] },
    correct: 0,
    explanation: {
      el: 'Κανένα ζώο της ξηράς δεν τρέχει πιο γρήγορα, άρα υπερθετικός: the fastest. Το fast είναι μικρό επίθετο, όχι most fast.',
      en: 'No land animal runs faster, so we use the superlative: the fastest. Fast is a short adjective, so not most fast.',
    },
  },
  {
    q: { el: 'Ο Νείλος έχει μήκος 6.650 χλμ. και ο Αμαζόνιος 6.400 χλμ. Συμπλήρωσε: The Nile is ___ the Amazon.', en: 'The Nile is 6,650 km long and the Amazon 6,400 km. Complete: The Nile is ___ the Amazon.' },
    options: { el: ['longer than', 'the longest', 'longest than', 'more long than'], en: ['longer than', 'the longest', 'longest than', 'more long than'] },
    correct: 0,
    explanation: {
      el: 'Εδώ συγκρίνουμε δύο ποτάμια, άρα συγκριτικός με than: longer than. Το the longest θα ταίριαζε αν μιλούσαμε για όλα τα ποτάμια.',
      en: 'Here we compare two rivers, so we use the comparative with than: longer than. The longest would fit if we talked about all rivers.',
    },
  },
  {
    q: { el: 'Η Ρωσία είναι η μεγαλύτερη χώρα του κόσμου. Ποια πρόταση το λέει σωστά;', en: 'Russia is the largest country in the world. Which sentence says this correctly?' },
    options: { el: ['Russia is larger country in the world.', 'Russia is the most large country in the world.', 'Russia is the largest country of the world.', 'Russia is the largest country in the world.'], en: ['Russia is larger country in the world.', 'Russia is the most large country in the world.', 'Russia is the largest country of the world.', 'Russia is the largest country in the world.'] },
    correct: 3,
    explanation: {
      el: 'Υπερθετικός: the largest. Και προσοχή: στα αγγλικά λέμε in the world, όχι of the world.',
      en: 'Superlative: the largest. And careful: in English we say in the world, not of the world.',
    },
  },
];
