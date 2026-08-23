/**
 * Α' Δημοτικού · Αγγλικά · «Hello! Γεια σου!» / Hello & Goodbye
 * ===============================================================
 * A first-contact English unit for a child of 6–7. Stems are in Greek, answers are
 * English words the child hears in class. All content is original.
 *
 * What the unit covers, in order:
 *   1–4   hello / goodbye — greeting words and when we say them
 *   5–8   "My name is…" and "What's your name?"
 *   9–11  yes / no
 *   12–15 please / thank you / you're welcome
 *   16–18 "How are you?" — "I'm fine, thank you"
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ENGLISH_HELLO_GOODBYE: QuizQuestion[] = [
  // ── 1–4: hello / goodbye ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «γεια σου» στα αγγλικά;', en: 'How do you say «γεια σου» in English?' },
    options: { el: ['Hello', 'Yes', 'Please', 'Bye'], en: ['Hello', 'Yes', 'Please', 'Bye'] },
    correct: 0,
    explanation: {
      el: '«Hello» σημαίνει «γεια σου». Το λέμε όταν συναντάμε κάποιον.',
      en: '“Hello” means «γεια σου». We say it when we meet someone.',
    },
  },
  {
    q: { el: 'Η Μαρία φεύγει από το σχολείο. Τι λέει στη δασκάλα;', en: 'Maria is leaving school. What does she say to her teacher?' },
    options: { el: ['Hello', 'Thank you', 'Goodbye', 'My name'], en: ['Hello', 'Thank you', 'Goodbye', 'My name'] },
    correct: 2,
    explanation: {
      el: 'Όταν φεύγουμε λέμε «Goodbye» — «αντίο». Το «Hello» το λέμε όταν ερχόμαστε.',
      en: 'When we leave we say “Goodbye”. We say “Hello” when we arrive.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ίδια με το «Hello»;', en: 'Which word means the same as “Hello”?' },
    options: { el: ['No', 'Hi', 'Bye', 'Fine'], en: ['No', 'Hi', 'Bye', 'Fine'] },
    correct: 1,
    explanation: {
      el: '«Hi» είναι ένα πιο μικρό, φιλικό «Hello». Και τα δύο σημαίνουν «γεια»!',
      en: '“Hi” is a shorter, friendly “Hello”. Both mean «γεια»!',
    },
  },
  {
    q: { el: 'Τι σημαίνει «Good morning»;', en: 'What does “Good morning” mean?' },
    options: { el: ['Καληνύχτα', 'Αντίο', 'Ευχαριστώ', 'Καλημέρα'], en: ['Good night', 'Goodbye', 'Thank you', 'Good morning'] },
    correct: 3,
    explanation: {
      el: '«Good morning» σημαίνει «καλημέρα». Το λέμε το πρωί, όταν ξυπνάμε ή πάμε σχολείο.',
      en: '“Good morning” means «καλημέρα». We say it in the morning, when we wake up or go to school.',
    },
  },

  // ── 5–8: my name is ────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος λέει το όνομά του. Τι λέει;', en: 'Nikos says his name. What does he say?' },
    options: { el: ['Goodbye, Nikos.', 'My name is Nikos.', 'Thank you, Nikos.', 'Yes, Nikos.'], en: ['Goodbye, Nikos.', 'My name is Nikos.', 'Thank you, Nikos.', 'Yes, Nikos.'] },
    correct: 1,
    explanation: {
      el: '«My name is Nikos» σημαίνει «με λένε Νίκο». Έτσι λέμε το όνομά μας.',
      en: '“My name is Nikos” means «με λένε Νίκο». That is how we say our name.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «My ___ is Eleni.»', en: 'Which word is missing? “My ___ is Eleni.”' },
    options: { el: ['hello', 'please', 'name', 'morning'], en: ['hello', 'please', 'name', 'morning'] },
    correct: 2,
    explanation: {
      el: '«Name» σημαίνει «όνομα». «My name is Eleni» = «Το όνομά μου είναι Ελένη».',
      en: '“Name” means «όνομα». “My name is Eleni” = «Το όνομά μου είναι Ελένη».',
    },
  },
  {
    q: { el: 'Θέλεις να μάθεις πώς λένε ένα παιδί. Τι το ρωτάς;', en: 'You want to learn a child\'s name. What do you ask?' },
    options: { el: ['How are you?', 'What\'s your name?', 'Goodbye?', 'Thank you?'], en: ['How are you?', 'What\'s your name?', 'Goodbye?', 'Thank you?'] },
    correct: 1,
    explanation: {
      el: '«What\'s your name?» σημαίνει «Πώς σε λένε;». Η απάντηση είναι «My name is…».',
      en: '“What\'s your name?” means «Πώς σε λένε;». The answer is “My name is…”.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «I am Giorgos»;', en: 'What does “I am Giorgos” mean?' },
    options: { el: ['Γεια σου, Γιώργο.', 'Είμαι ο Γιώργος.', 'Πού είναι ο Γιώργος;', 'Ευχαριστώ, Γιώργο.'], en: ['Hello, Giorgos.', 'I am Giorgos.', 'Where is Giorgos?', 'Thank you, Giorgos.'] },
    correct: 1,
    explanation: {
      el: '«I am Giorgos» σημαίνει «Είμαι ο Γιώργος». Είναι άλλος τρόπος να πούμε το όνομά μας.',
      en: '“I am Giorgos” means «Είμαι ο Γιώργος». It is another way to say our name.',
    },
  },

  // ── 9–11: yes / no ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ναι» στα αγγλικά;', en: 'How do you say «ναι» in English?' },
    options: { el: ['No', 'Hi', 'Yes', 'Bye'], en: ['No', 'Hi', 'Yes', 'Bye'] },
    correct: 2,
    explanation: {
      el: '«Yes» σημαίνει «ναι». Το «No» σημαίνει «όχι».',
      en: '“Yes” means «ναι». “No” means «όχι».',
    },
  },
  {
    q: { el: 'Τι σημαίνει «No»;', en: 'What does “No” mean?' },
    options: { el: ['Ναι', 'Όχι', 'Γεια', 'Καλά'], en: ['Yes', 'No', 'Hi', 'Fine'] },
    correct: 1,
    explanation: {
      el: '«No» σημαίνει «όχι». Μοιάζει λίγο με το «ναι», αλλά σημαίνει το αντίθετο!',
      en: '“No” means «όχι». It sounds a bit like the Greek «ναι», but it means the opposite!',
    },
  },
  {
    q: { el: 'Η δασκάλα ρωτάει: «Is your name Maria?». Εσύ είσαι η Μαρία. Τι απαντάς;', en: 'The teacher asks: “Is your name Maria?”. You are Maria. What do you answer?' },
    options: { el: ['No, thank you.', 'Goodbye.', 'Please.', 'Yes, I am.'], en: ['No, thank you.', 'Goodbye.', 'Please.', 'Yes, I am.'] },
    correct: 3,
    explanation: {
      el: 'Αφού είσαι η Μαρία, λες «Yes, I am» — «Ναι, είμαι». Αν δεν ήσουν, θα έλεγες «No».',
      en: 'Since you are Maria, you say “Yes, I am”. If you were not, you would say “No”.',
    },
  },

  // ── 12–15: please / thank you ──────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ευχαριστώ» στα αγγλικά;', en: 'How do you say «ευχαριστώ» in English?' },
    options: { el: ['Thank you', 'Please', 'Hello', 'Sorry'], en: ['Thank you', 'Please', 'Hello', 'Sorry'] },
    correct: 0,
    explanation: {
      el: '«Thank you» σημαίνει «ευχαριστώ». Το λέμε όταν κάποιος μας δίνει ή μας βοηθάει σε κάτι.',
      en: '“Thank you” means «ευχαριστώ». We say it when someone gives us or helps us with something.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ζητάει ένα μολύβι ευγενικά. Ποια λέξη λείπει; «A pencil, ___.»', en: 'Giorgos asks for a pencil politely. Which word is missing? “A pencil, ___.”' },
    options: { el: ['yes', 'hello', 'please', 'goodbye'], en: ['yes', 'hello', 'please', 'goodbye'] },
    correct: 2,
    explanation: {
      el: '«Please» σημαίνει «παρακαλώ». Το λέμε όταν ζητάμε κάτι ευγενικά.',
      en: '“Please” means «παρακαλώ». We say it when we ask for something politely.',
    },
  },
  {
    q: { el: 'Η Ελένη σου δίνει ένα μπισκότο. Τι της λες;', en: 'Eleni gives you a biscuit. What do you say to her?' },
    options: { el: ['Please.', 'Thank you.', 'Goodbye.', 'My name is…'], en: ['Please.', 'Thank you.', 'Goodbye.', 'My name is…'] },
    correct: 1,
    explanation: {
      el: 'Όταν μας δίνουν κάτι, λέμε «Thank you». Το «Please» το λέμε πριν, όταν ζητάμε.',
      en: 'When someone gives us something, we say “Thank you”. We say “Please” before, when we ask.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει «Thank you». Τι του απαντάς;', en: 'Nikos says “Thank you”. What do you answer?' },
    options: { el: ['Yes.', 'Hello.', 'My name is Nikos.', 'You\'re welcome.'], en: ['Yes.', 'Hello.', 'My name is Nikos.', 'You\'re welcome.'] },
    correct: 3,
    explanation: {
      el: 'Στο «Thank you» απαντάμε «You\'re welcome» — «παρακαλώ, τίποτα».',
      en: 'We answer “Thank you” with “You\'re welcome”.',
    },
  },

  // ── 16–18: how are you ─────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «How are you?»;', en: 'What does “How are you?” mean?' },
    options: { el: ['Πώς σε λένε;', 'Πού είσαι;', 'Τι κάνεις;', 'Πόσο χρονών είσαι;'], en: ['What is your name?', 'Where are you?', 'How are you?', 'How old are you?'] },
    correct: 2,
    explanation: {
      el: '«How are you?» σημαίνει «Τι κάνεις;». Το ρωτάμε μετά το «Hello».',
      en: '“How are you?” means «Τι κάνεις;». We ask it after “Hello”.',
    },
  },
  {
    q: { el: 'Σε ρωτούν «How are you?». Είσαι καλά. Τι απαντάς;', en: 'Someone asks you “How are you?”. You are well. What do you answer?' },
    options: { el: ['I\'m fine, thank you.', 'My name is Maria.', 'Yes, please.', 'Goodbye.'], en: ['I\'m fine, thank you.', 'My name is Maria.', 'Yes, please.', 'Goodbye.'] },
    correct: 0,
    explanation: {
      el: '«I\'m fine, thank you» σημαίνει «Είμαι καλά, ευχαριστώ». Είναι η απάντηση στο «How are you?».',
      en: '“I\'m fine, thank you” is the answer to “How are you?”.',
    },
  },
  {
    q: { el: 'Βάλε τη σωστή σειρά: πρώτα λέμε «Hello», μετά…', en: 'Put it in the right order: first we say “Hello”, then…' },
    options: { el: ['«Goodbye», μετά «How are you?»', '«How are you?», μετά «I\'m fine»', '«I\'m fine», μετά «How are you?»', '«Thank you», μετά «Hello»'], en: ['“Goodbye”, then “How are you?”', '“How are you?”, then “I\'m fine”', '“I\'m fine”, then “How are you?”', '“Thank you”, then “Hello”'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα «Hello», μετά ρωτάμε «How are you?» και η απάντηση είναι «I\'m fine, thank you». Στο τέλος λέμε «Goodbye».',
      en: 'First “Hello”, then we ask “How are you?” and the answer is “I\'m fine, thank you”. At the end we say “Goodbye”.',
    },
  },
];
