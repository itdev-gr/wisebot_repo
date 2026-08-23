/**
 * Β' Δημοτικού · Αγγλικά · «Τα Παιχνίδια μου» / "My Toys"
 * =========================================================
 * Original questions for a child of 7–8 who is learning English. Topics in order:
 *   1–6   toy words: ball, doll, car, teddy bear, kite, robot (Greek → English and back)
 *   7–10  'I have got' / 'I have not got' and the short form "I've got"
 *   11–14 colours of toys (red, blue, yellow, green…) and "What colour is…?"
 *   15–18 numbers 1–20: counting toys, reading number words, "How many…?"
 * Distractors are the slips children really make: look-alike words (car/cat),
 * the wrong verb form (has/have), the neighbouring number (fourteen/forty).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ENGLISH_TOYS: QuizQuestion[] = [
  // ── 1–6: toy words ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μπάλα» στα αγγλικά;', en: 'How do you say «μπάλα» in English?' },
    options: { el: ['ball', 'bell', 'doll', 'bag'], en: ['ball', 'bell', 'doll', 'bag'] },
    correct: 0,
    explanation: {
      el: 'Η μπάλα στα αγγλικά είναι «ball». Προσοχή: «bell» είναι το κουδούνι!',
      en: '«Μπάλα» in English is "ball". Careful: a "bell" is a κουδούνι!',
    },
  },
  {
    q: { el: 'Πώς λέμε «κούκλα» στα αγγλικά;', en: 'How do you say «κούκλα» in English?' },
    options: { el: ['ball', 'doll', 'dog', 'door'], en: ['ball', 'doll', 'dog', 'door'] },
    correct: 1,
    explanation: {
      el: 'Η κούκλα είναι «doll». Μοιάζει με το «ball», αλλά αρχίζει από d.',
      en: '«Κούκλα» is "doll". It looks like "ball", but it starts with d.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «αυτοκινητάκι»;', en: 'Which word means «αυτοκινητάκι»?' },
    options: { el: ['cat', 'cap', 'cake', 'car'], en: ['cat', 'cap', 'cake', 'car'] },
    correct: 3,
    explanation: {
      el: 'Το αυτοκίνητο είναι «car». Το «cat» είναι η γάτα — μόνο ένα γράμμα αλλάζει!',
      en: 'A car is "car". A "cat" is a γάτα — only one letter is different!',
    },
  },
  {
    q: { el: 'Τι είναι το «teddy bear»;', en: 'What is a "teddy bear"?' },
    options: { el: ['ένα ρομπότ', 'ένας χαρταετός', 'ένα αρκουδάκι', 'μια μπάλα'], en: ['a robot', 'a kite', 'a toy bear', 'a ball'] },
    correct: 2,
    explanation: {
      el: 'Το «teddy bear» είναι το λούτρινο αρκουδάκι. «Bear» σημαίνει αρκούδα.',
      en: 'A "teddy bear" is a soft toy bear. "Bear" means αρκούδα.',
    },
  },
  {
    q: { el: 'Πώς λέμε «χαρταετός» στα αγγλικά;', en: 'How do you say «χαρταετός» in English?' },
    options: { el: ['kit', 'kite', 'king', 'cat'], en: ['kit', 'kite', 'king', 'cat'] },
    correct: 1,
    explanation: {
      el: 'Ο χαρταετός είναι «kite». Το e στο τέλος δεν το ακούμε, αλλά το γράφουμε.',
      en: '«Χαρταετός» is "kite". We do not hear the e at the end, but we write it.',
    },
  },
  {
    q: { el: 'Ποιο παιχνίδι είναι φτιαγμένο από μέταλλο και κινείται μόνο του;', en: 'Which toy is made of metal and moves by itself?' },
    options: { el: ['doll', 'kite', 'teddy bear', 'robot'], en: ['doll', 'kite', 'teddy bear', 'robot'] },
    correct: 3,
    explanation: {
      el: 'Το ρομπότ στα αγγλικά είναι «robot» — σχεδόν ίδια λέξη!',
      en: 'The ρομπότ in English is "robot" — almost the same word!',
    },
  },

  // ── 7–10: I have got ───────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Έχω μια μπάλα» στα αγγλικά;', en: 'How do you say «Έχω μια μπάλα» in English?' },
    options: { el: ['I have got a ball.', 'I has got a ball.', 'I am a ball.', 'I got have a ball.'], en: ['I have got a ball.', 'I has got a ball.', 'I am a ball.', 'I got have a ball.'] },
    correct: 0,
    explanation: {
      el: 'Λέμε «I have got a ball». Με το «I» βάζουμε πάντα «have», όχι «has».',
      en: 'We say "I have got a ball". With "I" we always use "have", not "has".',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «I ___ got a kite.»', en: 'Fill in: "I ___ got a kite."' },
    options: { el: ['has', 'have', 'am', 'is'], en: ['has', 'have', 'am', 'is'] },
    correct: 1,
    explanation: {
      el: '«I have got a kite.» = Έχω έναν χαρταετό. I + have got.',
      en: '"I have got a kite." I + have got.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «I\'ve got a robot»;', en: 'What does "I\'ve got a robot" mean?' },
    options: { el: ['Θέλω ένα ρομπότ.', 'Είμαι ένα ρομπότ.', 'Έχω ένα ρομπότ.', 'Βλέπω ένα ρομπότ.'], en: ['I want a robot.', 'I am a robot.', 'I own a robot.', 'I see a robot.'] },
    correct: 2,
    explanation: {
      el: '«I\'ve got» είναι το ίδιο με «I have got» και σημαίνει «έχω».',
      en: '"I\'ve got" is the short way to say "I have got" — it means you own something.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Δεν έχω κούκλα» στα αγγλικά;', en: 'How do you say «Δεν έχω κούκλα» in English?' },
    options: { el: ['I not have got a doll.', 'I have not got a doll.', 'I have got not a doll.', 'No I have got a doll.'], en: ['I not have got a doll.', 'I have not got a doll.', 'I have got not a doll.', 'No I have got a doll.'] },
    correct: 1,
    explanation: {
      el: 'Το «not» μπαίνει ανάμεσα στο «have» και το «got»: I have not got a doll. (Ή: I haven\'t got.)',
      en: '"Not" goes between "have" and "got": I have not got a doll. (Or: I haven\'t got.)',
    },
  },

  // ── 11–14: colours ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «κόκκινο» στα αγγλικά;', en: 'How do you say «κόκκινο» in English?' },
    options: { el: ['blue', 'green', 'red', 'yellow'], en: ['blue', 'green', 'red', 'yellow'] },
    correct: 2,
    explanation: {
      el: 'Το κόκκινο είναι «red». Blue = μπλε, green = πράσινο, yellow = κίτρινο.',
      en: '«Κόκκινο» is "red". Blue = μπλε, green = πράσινο, yellow = κίτρινο.',
    },
  },
  {
    q: { el: 'Τι χρώμα είναι το «yellow»;', en: 'What colour is "yellow"?' },
    options: { el: ['κίτρινο', 'πράσινο', 'άσπρο', 'μαύρο'], en: ['κίτρινο', 'πράσινο', 'άσπρο', 'μαύρο'] },
    correct: 0,
    explanation: {
      el: '«Yellow» είναι το κίτρινο, σαν τον ήλιο. Green = πράσινο, white = άσπρο, black = μαύρο.',
      en: '"Yellow" is κίτρινο, like the sun. Green = πράσινο, white = άσπρο, black = μαύρο.',
    },
  },
  {
    q: { el: 'Η μπάλα του Νίκου είναι μπλε. Τι λέει ο Νίκος;', en: 'Nikos has a blue ball. What does Nikos say?' },
    options: { el: ['I have got a green ball.', 'I have got a blue ball.', 'I have got a ball blue.', 'I have got a red ball.'], en: ['I have got a green ball.', 'I have got a blue ball.', 'I have got a ball blue.', 'I have got a red ball.'] },
    correct: 1,
    explanation: {
      el: 'Στα αγγλικά το χρώμα μπαίνει πριν από το παιχνίδι: a blue ball, όχι «a ball blue».',
      en: 'In English the colour goes before the toy: a blue ball, not "a ball blue".',
    },
  },
  {
    q: { el: 'Ρωτάμε: «What colour is your kite?» Ποια απάντηση είναι σωστή;', en: 'We ask: "What colour is your kite?" Which answer is right?' },
    options: { el: ['It is big.', 'It is a kite.', 'It is green.', 'It is one.'], en: ['It is big.', 'It is a kite.', 'It is green.', 'It is one.'] },
    correct: 2,
    explanation: {
      el: '«What colour…;» ρωτάει για το χρώμα, άρα απαντάμε με χρώμα: It is green.',
      en: '"What colour…?" asks about the colour, so we answer with a colour: It is green.',
    },
  },

  // ── 15–18: numbers 1–20 ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός είναι το «seven»;', en: 'Which number is "seven"?' },
    options: { el: ['6', '7', '11', '17'], en: ['6', '7', '11', '17'] },
    correct: 1,
    explanation: {
      el: '«Seven» είναι το 7. Μετράμε: five, six, seven. Το 17 είναι «seventeen».',
      en: '"Seven" is 7. We count: five, six, seven. 17 is "seventeen".',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 3 κούκλες και 2 αρκουδάκια. How many toys has she got?', en: 'Eleni has 3 dolls and 2 teddy bears. How many toys has she got?' },
    options: { el: ['three', 'four', 'six', 'five'], en: ['three', 'four', 'six', 'five'] },
    correct: 3,
    explanation: {
      el: '3 + 2 = 5 παιχνίδια. Το 5 στα αγγλικά είναι «five».',
      en: '3 + 2 = 5 toys. 5 in English is "five".',
    },
  },
  {
    q: { el: 'Πώς γράφουμε το 12 στα αγγλικά;', en: 'How do we write 12 in English?' },
    options: { el: ['twenty', 'twelve', 'two', 'ten'], en: ['twenty', 'twelve', 'two', 'ten'] },
    correct: 1,
    explanation: {
      el: 'Το 12 είναι «twelve». Ten = 10, twenty = 20, two = 2.',
      en: '12 is "twelve". Ten = 10, twenty = 20, two = 2.',
    },
  },
  {
    q: { el: 'Ο Γιώργος μετράει τα αυτοκινητάκια του: …thirteen, fourteen, fifteen, ___. Ποιος αριθμός λείπει;', en: 'Giorgos counts his toy cars: …thirteen, fourteen, fifteen, ___. Which number is missing?' },
    options: { el: ['sixty', 'seventeen', 'sixteen', 'six'], en: ['sixty', 'seventeen', 'sixteen', 'six'] },
    correct: 2,
    explanation: {
      el: 'Μετά το fifteen (15) έρχεται το sixteen (16). Το «-teen» δείχνει τους αριθμούς 13–19.',
      en: 'After fifteen (15) comes sixteen (16). The ending "-teen" shows the numbers 13–19.',
    },
  },
];
