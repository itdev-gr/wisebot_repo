/**
 * Β' Δημοτικού · English Language Arts · Nouns & Verbs
 * ====================================================
 * Original questions for a native English-speaking child of 7–8 (US Grade 2 / UK Year 2–3).
 * What the unit covers, in order:
 *   1–4   naming words vs doing words: what a noun is, what a verb is, pick one from a list
 *   5–9   find the noun / the verb inside a sentence, count the verbs
 *   10–14 proper nouns: names, places and days get a capital letter
 *   15–18 sorting nouns: person, place or thing
 * Distractors are the real mix-ups: the verb when a noun is asked for (and the other way round),
 * a name written in lowercase, and every word capitalized instead of only the proper nouns.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ELA_NOUNS_AND_VERBS: QuizQuestion[] = [
  // ── 1–4: naming words vs doing words ───────────────────────────────────────
  {
    q: { el: 'Τι κάνει ένα ουσιαστικό (noun);', en: 'What does a noun do?' },
    options: {
      el: ['It shows an action', 'It names a person, place, or thing', 'It tells a color', 'It joins two sentences'],
      en: ['It shows an action', 'It names a person, place, or thing', 'It tells a color', 'It joins two sentences'],
    },
    correct: 1,
    explanation: {
      el: 'Το ουσιαστικό (noun) είναι λέξη που ονομάζει. Ονομάζει ένα πρόσωπο (teacher), έναν τόπο (park) ή ένα πράγμα (ball).',
      en: 'A noun is a naming word. It names a person (teacher), a place (park), or a thing (ball).',
    },
  },
  {
    q: { el: 'Τι είδους λέξη είναι το ρήμα (verb);', en: 'What kind of word is a verb?' },
    options: {
      el: ['a doing word', 'a naming word', 'a describing word', 'a little word like «the»'],
      en: ['a doing word', 'a naming word', 'a describing word', 'a little word like «the»'],
    },
    correct: 0,
    explanation: {
      el: 'Το ρήμα (verb) είναι λέξη που δείχνει τι κάνει κάποιος ή κάτι: run, jump, sing, sleep.',
      en: 'A verb is a doing word. It tells what someone or something does: run, jump, sing, sleep.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ουσιαστικό;', en: 'Which word is a noun?' },
    options: { el: ['jump', 'run', 'apple', 'sing'], en: ['jump', 'run', 'apple', 'sing'] },
    correct: 2,
    explanation: {
      el: 'Το apple είναι ουσιαστικό γιατί ονομάζει ένα πράγμα. Τα jump, run και sing είναι ρήματα· είναι πράγματα που κάνεις.',
      en: 'Apple is a noun because it names a thing. Jump, run, and sing are verbs; they are things you do.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ρήμα;', en: 'Which word is a verb?' },
    options: { el: ['chair', 'dog', 'tree', 'swim'], en: ['chair', 'dog', 'tree', 'swim'] },
    correct: 3,
    explanation: {
      el: 'Το swim είναι ρήμα· είναι κάτι που κάνεις. Τα chair, dog και tree είναι ουσιαστικά· ονομάζουν πράγματα.',
      en: 'Swim is a verb; it is something you do. Chair, dog, and tree are nouns; they name things.',
    },
  },

  // ── 5–9: find the noun / the verb in a sentence ────────────────────────────
  {
    q: { el: '«The dog barked loudly.» Ποια λέξη είναι το ουσιαστικό;', en: '«The dog barked loudly.» Which word is the noun?' },
    options: { el: ['barked', 'loudly', 'dog', 'the'], en: ['barked', 'loudly', 'dog', 'the'] },
    correct: 2,
    explanation: {
      el: 'Το dog είναι το ουσιαστικό· ονομάζει το ζώο. Το barked είναι το ρήμα, αυτό που έκανε ο σκύλος.',
      en: 'Dog is the noun; it names the animal. Barked is the verb, the thing the dog did.',
    },
  },
  {
    q: { el: '«Mia climbs the tall tree.» Ποια λέξη είναι το ρήμα;', en: '«Mia climbs the tall tree.» Which word is the verb?' },
    options: { el: ['Mia', 'climbs', 'tall', 'tree'], en: ['Mia', 'climbs', 'tall', 'tree'] },
    correct: 1,
    explanation: {
      el: 'Το climbs είναι το ρήμα· λέει τι κάνει η Mia. Τα Mia και tree είναι ουσιαστικά, και το tall περιγράφει το δέντρο.',
      en: 'Climbs is the verb; it tells what Mia does. Mia and tree are nouns, and tall describes the tree.',
    },
  },
  {
    q: { el: '«The bird sings every morning.» Ποια λέξη είναι το ρήμα;', en: '«The bird sings every morning.» Which word is the verb?' },
    options: { el: ['bird', 'every', 'morning', 'sings'], en: ['bird', 'every', 'morning', 'sings'] },
    correct: 3,
    explanation: {
      el: 'Το sings είναι το ρήμα· είναι αυτό που κάνει το πουλί. Τα bird και morning είναι ουσιαστικά.',
      en: 'Sings is the verb; it is what the bird does. Bird and morning are nouns.',
    },
  },
  {
    q: { el: '«We ate lunch in the garden.» Ποια από αυτές τις λέξεις είναι ουσιαστικό;', en: '«We ate lunch in the garden.» Which of these words is a noun?' },
    options: { el: ['lunch', 'ate', 'in', 'we'], en: ['lunch', 'ate', 'in', 'we'] },
    correct: 0,
    explanation: {
      el: 'Το lunch είναι ουσιαστικό· ονομάζει ένα πράγμα. Το ate είναι το ρήμα. Και το garden είναι ουσιαστικό, αλλά δεν είναι στις επιλογές.',
      en: 'Lunch is a noun; it names a thing. Ate is the verb. Garden is a noun too, but it is not one of the choices.',
    },
  },
  {
    q: { el: '«Sam runs and jumps at the park.» Πόσα ρήματα έχει αυτή η πρόταση;', en: '«Sam runs and jumps at the park.» How many verbs are in this sentence?' },
    options: { el: ['1', '2', '3', '0'], en: ['1', '2', '3', '0'] },
    correct: 1,
    explanation: {
      el: 'Υπάρχουν 2 ρήματα: runs και jumps. Είναι και τα δύο πράγματα που κάνει ο Sam. Τα Sam και park είναι ουσιαστικά.',
      en: 'There are 2 verbs: runs and jumps. They are both things Sam does. Sam and park are nouns.',
    },
  },

  // ── 10–14: proper nouns and capital letters ────────────────────────────────
  {
    q: { el: 'Ποια από αυτές τις λέξεις πρέπει πάντα να αρχίζει με κεφαλαίο γράμμα;', en: 'Which of these words should always start with a capital letter?' },
    options: { el: ['city', 'boy', 'river', 'ella'], en: ['city', 'boy', 'river', 'ella'] },
    correct: 3,
    explanation: {
      el: 'Το Ella είναι όνομα ανθρώπου, άρα είναι κύριο όνομα και θέλει κεφαλαίο: Ella. Τα city, boy και river είναι κοινά ουσιαστικά.',
      en: 'Ella is a person\'s name, so it is a proper noun and needs a capital: Ella. City, boy, and river are common nouns.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: {
      el: ['My friend jake lives in london.', 'My friend Jake lives in London.', 'my friend Jake lives in london.', 'My Friend Jake Lives In London.'],
      en: ['My friend jake lives in london.', 'My friend Jake lives in London.', 'my friend Jake lives in london.', 'My Friend Jake Lives In London.'],
    },
    correct: 1,
    explanation: {
      el: 'Το Jake είναι όνομα και το London τόπος, άρα παίρνουν και τα δύο κεφαλαίο. Και η πρώτη λέξη της πρότασης παίρνει, αλλά όχι κάθε λέξη.',
      en: 'Jake is a name and London is a place, so both get capitals. The first word of a sentence gets one too, but not every word.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι κύριο όνομα (proper noun);', en: 'Which of these is a proper noun?' },
    options: { el: ['teacher', 'school', 'Mr. Lopez', 'book'], en: ['teacher', 'school', 'Mr. Lopez', 'book'] },
    correct: 2,
    explanation: {
      el: 'Το Mr. Lopez είναι κύριο όνομα γιατί είναι το όνομα ενός συγκεκριμένου ανθρώπου. Τα teacher, school και book είναι κοινά ουσιαστικά.',
      en: 'Mr. Lopez is a proper noun because it is one special person\'s name. Teacher, school, and book are common nouns.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι κύριο όνομα που ονομάζει έναν τόπο;', en: 'Which word is a proper noun that names a place?' },
    options: { el: ['beach', 'town', 'mountain', 'Australia'], en: ['beach', 'town', 'mountain', 'Australia'] },
    correct: 3,
    explanation: {
      el: 'Το Australia είναι το όνομα ενός συγκεκριμένου τόπου, άρα είναι κύριο όνομα με κεφαλαίο. Τα beach, town και mountain μπορεί να είναι οποιαδήποτε παραλία, πόλη ή βουνό.',
      en: 'Australia is the name of one special place, so it is a proper noun with a capital. Beach, town, and mountain could be any beach, town, or mountain.',
    },
  },
  {
    q: { el: 'Γιατί το «Monday» αρχίζει με κεφαλαίο γράμμα;', en: 'Why does «Monday» start with a capital letter?' },
    options: {
      el: ['It is the name of a day, so it is a proper noun', 'It is a very long word', 'It is a verb', 'It is at the end of a sentence'],
      en: ['It is the name of a day, so it is a proper noun', 'It is a very long word', 'It is a verb', 'It is at the end of a sentence'],
    },
    correct: 0,
    explanation: {
      el: 'Οι μέρες της εβδομάδας και οι μήνες είναι κύρια ονόματα, άρα αρχίζουν με κεφαλαίο: Monday, Friday, April.',
      en: 'Days of the week and months are proper nouns, so they start with a capital: Monday, Friday, April.',
    },
  },

  // ── 15–18: person, place or thing ──────────────────────────────────────────
  {
    q: { el: 'Ποιο ουσιαστικό ονομάζει ένα ΠΡΟΣΩΠΟ;', en: 'Which noun names a PERSON?' },
    options: { el: ['teacher', 'castle', 'spoon', 'forest'], en: ['teacher', 'castle', 'spoon', 'forest'] },
    correct: 0,
    explanation: {
      el: 'Ο teacher είναι πρόσωπο. Το castle και το forest είναι τόποι, και το spoon είναι πράγμα.',
      en: 'A teacher is a person. A castle and a forest are places, and a spoon is a thing.',
    },
  },
  {
    q: { el: 'Ποιο ουσιαστικό ονομάζει έναν ΤΟΠΟ;', en: 'Which noun names a PLACE?' },
    options: { el: ['nurse', 'bike', 'library', 'hat'], en: ['nurse', 'bike', 'library', 'hat'] },
    correct: 2,
    explanation: {
      el: 'Η library είναι τόπος όπου μπορείς να πας. Η nurse είναι πρόσωπο, και το bike και το hat είναι πράγματα.',
      en: 'A library is a place you can go to. A nurse is a person, and a bike and a hat are things.',
    },
  },
  {
    q: { el: 'Ποιο ουσιαστικό ονομάζει ένα ΠΡΑΓΜΑ;', en: 'Which noun names a THING?' },
    options: { el: ['cousin', 'kitchen', 'farmer', 'pencil'], en: ['cousin', 'kitchen', 'farmer', 'pencil'] },
    correct: 3,
    explanation: {
      el: 'Το pencil είναι πράγμα. Ο cousin και ο farmer είναι πρόσωπα, και η kitchen είναι τόπος.',
      en: 'A pencil is a thing. A cousin and a farmer are people, and a kitchen is a place.',
    },
  },
  {
    q: { el: '«The baker put the bread in the oven.» Ποιο ουσιαστικό ονομάζει ένα πρόσωπο;', en: '«The baker put the bread in the oven.» Which noun names a person?' },
    options: { el: ['baker', 'bread', 'oven', 'put'], en: ['baker', 'bread', 'oven', 'put'] },
    correct: 0,
    explanation: {
      el: 'Ο baker είναι το πρόσωπο. Τα bread και oven είναι πράγματα, και το put είναι το ρήμα.',
      en: 'The baker is the person. Bread and oven are things, and put is the verb.',
    },
  },
];
