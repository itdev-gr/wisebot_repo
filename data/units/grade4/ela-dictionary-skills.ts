/**
 * Δ' Δημοτικού · ELA (English Language Arts) · Χρήση λεξικού / Dictionary Skills
 * ===============================================================================
 * Original questions for a native English-speaking child of 9–10 (US 4th grade,
 * UK Year 4–5). Nothing is taken from textbooks or websites.
 *
 * What the unit covers, in order:
 *   1–5   alphabetical order to the second and third letter
 *   6–9   guide words: what they are, which word is on the page
 *   10–12 counting syllables
 *   13–15 choosing the right meaning of a word with several meanings
 *   16–18 part-of-speech labels: noun, verb, adjective
 *
 * Distractors are words that share the first two letters, words just outside the
 * guide-word range, a syllable count off by one, and the other meaning of the
 * word. Options are the English words being tested, so the Greek option list is
 * the same as the English one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ELA_DICTIONARY_SKILLS: QuizQuestion[] = [
  // ── 1–5: alphabetical order ────────────────────────────────────────────────
  {
    q: {
      el: 'Ποια λέξη έρχεται ΠΡΩΤΗ στην αλφαβητική σειρά;',
      en: 'Which word comes FIRST in alphabetical order?',
    },
    options: {
      el: ['cat', 'cap', 'can', 'car'],
      en: ['cat', 'cap', 'can', 'car'],
    },
    correct: 2,
    explanation: {
      el: 'Και οι τέσσερις λέξεις αρχίζουν με «ca», άρα κοιτάμε το τρίτο γράμμα: n, p, r, t. Το n είναι πρώτο στο αλφάβητο, άρα «can» έρχεται πρώτο.',
      en: 'All four words start with “ca”, so look at the third letter: n, p, r, t. The n comes earliest in the alphabet, so “can” is first.',
    },
  },
  {
    q: {
      el: 'Ποια λίστα είναι στη σωστή αλφαβητική σειρά;',
      en: 'Which list is in correct alphabetical order?',
    },
    options: {
      el: ['bread, brick, brush', 'brick, bread, brush', 'brush, bread, brick', 'bread, brush, brick'],
      en: ['bread, brick, brush', 'brick, bread, brush', 'brush, bread, brick', 'bread, brush, brick'],
    },
    correct: 0,
    explanation: {
      el: 'Όλες αρχίζουν με «br», άρα κοιτάμε το τρίτο γράμμα: e (bread), i (brick), u (brush). Στο αλφάβητο e < i < u.',
      en: 'They all start with “br”, so use the third letter: e (bread), i (brick), u (brush). In the alphabet, e comes before i, and i comes before u.',
    },
  },
  {
    q: {
      el: 'Ποια λέξη έρχεται ΤΕΛΕΥΤΑΙΑ στην αλφαβητική σειρά;',
      en: 'Which word comes LAST in alphabetical order?',
    },
    options: {
      el: ['stick', 'stop', 'stamp', 'stone'],
      en: ['stick', 'stop', 'stamp', 'stone'],
    },
    correct: 1,
    explanation: {
      el: 'Μετά το «st» κοιτάμε το τρίτο γράμμα: a, i, o, o. Το stone και το stop έχουν και τα δύο «sto», άρα πάμε στο τέταρτο: n πριν από p. Άρα το «stop» είναι τελευταίο.',
      en: 'After “st”, look at the third letter: a, i, o, o. Stone and stop both have “sto”, so go to the fourth letter: n comes before p. So “stop” is last.',
    },
  },
  {
    q: {
      el: 'Ποια λέξη βρίσκεται ανάμεσα στο «plant» και το «play» στο λεξικό;',
      en: 'Which word comes between “plant” and “play” in the dictionary?',
    },
    options: {
      el: ['plane', 'place', 'plate', 'plum'],
      en: ['plane', 'place', 'plate', 'plum'],
    },
    correct: 2,
    explanation: {
      el: 'Όλες αρχίζουν με «pla» εκτός από το plum. Τέταρτο γράμμα: plant έχει n, play έχει y. Το «plate» έχει t, που είναι ανάμεσα σε n και y. Το plane και το place έρχονται πριν από το plant.',
      en: 'All but plum start with “pla”. Fourth letter: plant has n, play has y. “Plate” has t, which sits between n and y. Plane and place both come before plant.',
    },
  },
  {
    q: {
      el: 'Ποια σειρά δείχνει τις λέξεις όπως θα ήταν στο λεξικό;',
      en: 'Which row shows the words in dictionary order?',
    },
    options: {
      el: ['mouse, moon, mother', 'mother, moon, mouse', 'moon, mouse, mother', 'moon, mother, mouse'],
      en: ['mouse, moon, mother', 'mother, moon, mouse', 'moon, mouse, mother', 'moon, mother, mouse'],
    },
    correct: 3,
    explanation: {
      el: 'Όλες αρχίζουν με «mo», άρα κοιτάμε το τρίτο γράμμα: moon (o), mother (t), mouse (u). Στο αλφάβητο o < t < u.',
      en: 'They all start with “mo”, so check the third letter: moon (o), mother (t), mouse (u). In the alphabet, o comes before t, and t comes before u.',
    },
  },

  // ── 6–9: guide words ───────────────────────────────────────────────────────
  {
    q: {
      el: 'Οι λέξεις-οδηγοί (guide words) σε μια σελίδα λεξικού είναι «garden – gate». Ποια λέξη θα βρεις σε αυτή τη σελίδα;',
      en: 'The guide words on a dictionary page are “garden – gate”. Which word will you find on that page?',
    },
    options: {
      el: ['game', 'gas', 'gift', 'giant'],
      en: ['game', 'gas', 'gift', 'giant'],
    },
    correct: 1,
    explanation: {
      el: 'Μια λέξη είναι στη σελίδα αν πέφτει ανάμεσα στις δύο λέξεις-οδηγούς. Το «gas» (g-a-s) είναι μετά το garden (g-a-r) και πριν το gate (g-a-t). Το game έρχεται πριν από το garden.',
      en: 'A word is on the page if it falls between the two guide words. “Gas” (g-a-s) comes after garden (g-a-r) and before gate (g-a-t). Game comes before garden.',
    },
  },
  {
    q: {
      el: 'Τι είναι οι λέξεις-οδηγοί (guide words);',
      en: 'What are guide words?',
    },
    options: {
      el: ['The two words at the top of a dictionary page showing the first and last entries', 'The hardest words on the page', 'Words that tell you how to say a word', 'The words written in bold in a story'],
      en: ['The two words at the top of a dictionary page showing the first and last entries', 'The hardest words on the page', 'Words that tell you how to say a word', 'The words written in bold in a story'],
    },
    correct: 0,
    explanation: {
      el: 'Οι λέξεις-οδηγοί βρίσκονται στο πάνω μέρος κάθε σελίδας: η πρώτη και η τελευταία λέξη της σελίδας. Σε βοηθούν να βρεις γρήγορα αν η λέξη σου είναι εκεί.',
      en: 'Guide words sit at the top of each page: the first and last words on that page. They help you tell quickly whether your word is there.',
    },
  },
  {
    q: {
      el: 'Οι λέξεις-οδηγοί είναι «ladder – lamp». Ποια λέξη ΔΕΝ είναι σε αυτή τη σελίδα;',
      en: 'The guide words are “ladder – lamp”. Which word is NOT on that page?',
    },
    options: {
      el: ['lake', 'lamb', 'lady', 'large'],
      en: ['lake', 'lamb', 'lady', 'large'],
    },
    correct: 3,
    explanation: {
      el: 'Το «large» (l-a-r) έρχεται μετά το lamp (l-a-m), άρα είναι σε επόμενη σελίδα. Τα lady, lake και lamb πέφτουν όλα ανάμεσα σε ladder και lamp.',
      en: '“Large” (l-a-r) comes after lamp (l-a-m), so it is on a later page. Lady, lake and lamb all fall between ladder and lamp.',
    },
  },
  {
    q: {
      el: 'Οι λέξεις-οδηγοί είναι «river – rock». Ποια λέξη βρίσκεται σε αυτή τη σελίδα;',
      en: 'The guide words are “river – rock”. Which word is on that page?',
    },
    options: {
      el: ['ring', 'roof', 'road', 'rain'],
      en: ['ring', 'roof', 'road', 'rain'],
    },
    correct: 2,
    explanation: {
      el: 'Το «road» (r-o-a) είναι μετά το river (r-i) και πριν το rock (r-o-c). Το ring έρχεται πριν το river, και το roof (r-o-o) μετά το rock.',
      en: '“Road” (r-o-a) comes after river (r-i) and before rock (r-o-c). Ring comes before river, and roof (r-o-o) comes after rock.',
    },
  },

  // ── 10–12: counting syllables ──────────────────────────────────────────────
  {
    q: {
      el: 'Πόσες συλλαβές έχει η λέξη «elephant»;',
      en: 'How many syllables does the word “elephant” have?',
    },
    options: {
      el: ['2', '3', '4', '1'],
      en: ['2', '3', '4', '1'],
    },
    correct: 1,
    explanation: {
      el: 'el-e-phant: τρεις συλλαβές. Βάλε το χέρι κάτω από το πιγούνι σου και πες τη λέξη· κάθε φορά που το πιγούνι πέφτει είναι μία συλλαβή.',
      en: 'el-e-phant: three syllables. Put your hand under your chin and say the word; every time your chin drops, that is one syllable.',
    },
  },
  {
    q: {
      el: 'Πόσες συλλαβές έχει η λέξη «butterfly»;',
      en: 'How many syllables does the word “butterfly” have?',
    },
    options: {
      el: ['2', '4', '3', '5'],
      en: ['2', '4', '3', '5'],
    },
    correct: 2,
    explanation: {
      el: 'but-ter-fly: τρεις συλλαβές. Κάθε συλλαβή έχει έναν ήχο φωνήεντος: u, e, y. Χτύπα παλαμάκια σε κάθε κομμάτι για να τις μετρήσεις.',
      en: 'but-ter-fly: three syllables. Each syllable has one vowel sound: u, e, y. Clap once for each part to count them.',
    },
  },
  {
    q: {
      el: 'Ποια λέξη έχει μόνο ΜΙΑ συλλαβή;',
      en: 'Which word has only ONE syllable?',
    },
    options: {
      el: ['jump', 'water', 'orange', 'pencil'],
      en: ['jump', 'water', 'orange', 'pencil'],
    },
    correct: 0,
    explanation: {
      el: 'Το «jump» λέγεται με μία κίνηση: ένας ήχος φωνήεντος, μία συλλαβή. Τα wa-ter, or-ange και pen-cil έχουν δύο.',
      en: '“Jump” is said in one beat: one vowel sound, one syllable. Wa-ter, or-ange and pen-cil each have two.',
    },
  },

  // ── 13–15: words with several meanings ─────────────────────────────────────
  {
    q: {
      el: '«She swung the bat and hit the ball over the fence.» Στο λεξικό, το «bat» έχει δύο σημασίες: 1. ένα ζώο που πετά τη νύχτα, 2. ένα ξύλινο ρόπαλο για να χτυπάς μια μπάλα. Ποια σημασία χρησιμοποιείται εδώ;',
      en: '“She swung the bat and hit the ball over the fence.” In the dictionary, “bat” has two meanings: 1. an animal that flies at night, 2. a wooden stick used to hit a ball. Which meaning is used here?',
    },
    options: {
      el: ['Meaning 1: an animal that flies at night', 'Meaning 2: a wooden stick used to hit a ball', 'Both meanings', 'Neither meaning'],
      en: ['Meaning 1: an animal that flies at night', 'Meaning 2: a wooden stick used to hit a ball', 'Both meanings', 'Neither meaning'],
    },
    correct: 1,
    explanation: {
      el: 'Οι λέξεις γύρω από το «bat» (swung, hit the ball) δείχνουν ότι πρόκειται για το ρόπαλο. Όταν μια λέξη έχει πολλές σημασίες, διάλεξε αυτή που ταιριάζει στην πρόταση.',
      en: 'The words around “bat” (swung, hit the ball) show it is the stick. When a word has several meanings, pick the one that fits the sentence.',
    },
  },
  {
    q: {
      el: '«The lamp is too bright, please turn it down.» Τι σημαίνει το «bright» σε αυτή την πρόταση;',
      en: '“The lamp is too bright, please turn it down.” What does “bright” mean in this sentence?',
    },
    options: {
      el: ['clever', 'cheerful', 'colorful', 'giving a lot of light'],
      en: ['clever', 'cheerful', 'colorful', 'giving a lot of light'],
    },
    correct: 3,
    explanation: {
      el: 'Το «bright» μπορεί να σημαίνει έξυπνος (a bright student) ή φωτεινός. Εδώ μιλάμε για μια λάμπα που θέλουμε να χαμηλώσουμε, άρα σημαίνει «δίνει πολύ φως».',
      en: '“Bright” can mean clever (a bright student) or full of light. Here we are talking about a lamp we want to turn down, so it means “giving a lot of light”.',
    },
  },
  {
    q: {
      el: '«Please wave to Grandma from the window.» Ποια σημασία του «wave» ταιριάζει εδώ;',
      en: '“Please wave to Grandma from the window.” Which meaning of “wave” fits here?',
    },
    options: {
      el: ['To move your hand to say hello or goodbye', 'A moving ridge of water in the sea', 'A curl in someone\'s hair', 'A kind of boat'],
      en: ['To move your hand to say hello or goodbye', 'A moving ridge of water in the sea', 'A curl in someone\'s hair', 'A kind of boat'],
    },
    correct: 0,
    explanation: {
      el: 'Εδώ το «wave» είναι κάτι που ΚΑΝΕΙΣ προς τη γιαγιά, άρα είναι ρήμα: κουνάς το χέρι σου. Το κύμα της θάλασσας είναι ουσιαστικό και δεν ταιριάζει.',
      en: 'Here “wave” is something you DO towards Grandma, so it is the verb: moving your hand. The sea wave is a noun and does not fit.',
    },
  },

  // ── 16–18: part-of-speech labels ───────────────────────────────────────────
  {
    q: {
      el: 'Ποια ετικέτα θα έχει η λέξη «giraffe» στο λεξικό;',
      en: 'Which label will the word “giraffe” have in the dictionary?',
    },
    options: {
      el: ['noun', 'verb', 'adjective', 'adverb'],
      en: ['noun', 'verb', 'adjective', 'adverb'],
    },
    correct: 0,
    explanation: {
      el: 'Το «giraffe» είναι ένα ζώο, δηλαδή ένα πράγμα, άρα είναι ουσιαστικό (noun). Τα λεξικά συχνά συντομεύουν την ετικέτα σε «n.».',
      en: '“Giraffe” is an animal, which is a thing, so it is a noun. Dictionaries often shorten the label to “n.”.',
    },
  },
  {
    q: {
      el: '«The children whisper in the library.» Τι μέρος του λόγου είναι το «whisper» σε αυτή την πρόταση;',
      en: '“The children whisper in the library.” What part of speech is “whisper” in this sentence?',
    },
    options: {
      el: ['noun', 'adjective', 'verb', 'adverb'],
      en: ['noun', 'adjective', 'verb', 'adverb'],
    },
    correct: 2,
    explanation: {
      el: '«I heard a whisper.» Εδώ το «whisper» είναι κάτι που κάνουν τα παιδιά, άρα ρήμα (v.). Η ίδια λέξη μπορεί να είναι ουσιαστικό σε άλλη πρόταση;',
      en: '“I heard a whisper.” Here “whisper” is something the children do, so it is a verb (v.). The same word can be a noun in another sentence?',
    },
  },
  {
    q: {
      el: 'Ποια λέξη θα έχει την ετικέτα «adjective» (επίθετο);',
      en: 'Which word would have the label “adjective”?',
    },
    options: {
      el: ['sing', 'table', 'quickly', 'enormous'],
      en: ['sing', 'table', 'quickly', 'enormous'],
    },
    correct: 3,
    explanation: {
      el: 'Το «enormous» περιγράφει ένα ουσιαστικό (an enormous whale), άρα είναι επίθετο (adj.). Το sing είναι ρήμα, το table ουσιαστικό και το quickly επίρρημα.',
      en: '“Enormous” describes a noun (an enormous whale), so it is an adjective (adj.). Sing is a verb, table is a noun and quickly is an adverb.',
    },
  },
];
