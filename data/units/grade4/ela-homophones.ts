/**
 * Δ' Δημοτικού · ELA (English Language Arts) · Ομόηχες λέξεις / Homophones
 * =========================================================================
 * Original questions for a native English-speaking child of 9–10 (US 4th grade,
 * UK Year 4–5). Nothing is taken from textbooks or websites.
 *
 * What the unit covers, in order:
 *   1–4   there / their / they're: place, belonging, "they are"
 *   5–7   to / too / two
 *   8–9   your / you're
 *   10–11 here / hear and where / wear
 *   12–13 right / write and know / no
 *   14–15 whole / hole
 *   16–18 spotting the wrong homophone in a sentence
 *
 * Distractors are the other members of each homophone set plus one common
 * misspelling (theirs, youre, knot). Options are the English words being
 * tested, so the Greek option list is the same as the English one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ELA_HOMOPHONES: QuizQuestion[] = [
  // ── 1–4: there / their / they're ───────────────────────────────────────────
  {
    q: {
      el: '«___ going to the park after lunch.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“___ going to the park after lunch.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['There', 'Their', 'They\'re', 'Then'],
      en: ['There', 'Their', 'They\'re', 'Then'],
    },
    correct: 2,
    explanation: {
      el: 'Το «they\'re» είναι σύντμηση του «they are». Δοκίμασε να το αντικαταστήσεις: «They are going to the park» ακούγεται σωστό, άρα «they\'re» είναι το ζητούμενο.',
      en: '“They\'re” is short for “they are”. Try swapping it in: “They are going to the park” sounds right, so “they\'re” is the one you need.',
    },
  },
  {
    q: {
      el: '«The children left ___ coats on the bus.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“The children left ___ coats on the bus.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['There', 'Their', 'They\'re', 'Theirs'],
      en: ['There', 'Their', 'They\'re', 'Theirs'],
    },
    correct: 1,
    explanation: {
      el: 'Το «their» δείχνει ότι κάτι ανήκει σε αυτούς: their coats = τα παλτά τους. Αν μπορείς να βάλεις «our» στη θέση του και βγαίνει νόημα, χρειάζεσαι «their».',
      en: '“Their” shows that something belongs to them: their coats. If you can swap in “our” and it still makes sense, you need “their”.',
    },
  },
  {
    q: {
      el: '«Put the books over ___, on the shelf.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“Put the books over ___, on the shelf.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['There', 'Their', 'They\'re', 'Where'],
      en: ['There', 'Their', 'They\'re', 'Where'],
    },
    correct: 0,
    explanation: {
      el: 'Το «there» δείχνει τόπο, όπως το «here». Μικρό κόλπο: το «there» έχει μέσα του τη λέξη «here» — και τα δύο μιλούν για ένα μέρος.',
      en: '“There” tells you a place, just like “here”. Handy trick: “there” has the word “here” hiding inside it, and both are about a place.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση χρησιμοποιεί σωστά το «they\'re»;',
      en: 'Which sentence uses “they\'re” correctly?',
    },
    options: {
      el: ['They\'re bikes are in the garage.', 'I think they\'re late for practice.', 'The shoes are over they\'re.', 'Is that they\'re dog?'],
      en: ['They\'re bikes are in the garage.', 'I think they\'re late for practice.', 'The shoes are over they\'re.', 'Is that they\'re dog?'],
    },
    correct: 1,
    explanation: {
      el: 'Μόνο το «I think they are late for practice» βγάζει νόημα όταν ανοίξεις τη σύντμηση. Στις άλλες προτάσεις χρειάζεται «their» (κτήση) ή «there» (τόπος).',
      en: 'Only “I think they are late for practice” makes sense when you open up the contraction. The other sentences need “their” (belonging) or “there” (place).',
    },
  },

  // ── 5–7: to / too / two ────────────────────────────────────────────────────
  {
    q: {
      el: '«I would like ___ go swimming today.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“I would like ___ go swimming today.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['to', 'too', 'two', 'toe'],
      en: ['to', 'too', 'two', 'toe'],
    },
    correct: 0,
    explanation: {
      el: 'Το «to» πηγαίνει μπροστά από ένα ρήμα (to go, to swim) ή δείχνει κατεύθυνση (to school). Το «too» σημαίνει «επίσης» ή «υπερβολικά» και το «two» είναι ο αριθμός 2.',
      en: '“To” goes before a verb (to go, to swim) or shows direction (to school). “Too” means “also” or “more than enough”, and “two” is the number 2.',
    },
  },
  {
    q: {
      el: '«The soup is ___ hot to eat right now.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“The soup is ___ hot to eat right now.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['to', 'too', 'two', 'tow'],
      en: ['to', 'too', 'two', 'tow'],
    },
    correct: 1,
    explanation: {
      el: 'Το «too» με δύο o σημαίνει «υπερβολικά»: too hot, too loud, too late. Σκέψου ότι το έξτρα o είναι η υπερβολή.',
      en: '“Too” with two o\'s means “more than enough”: too hot, too loud, too late. Think of the extra o as the “extra” amount.',
    },
  },
  {
    q: {
      el: '«Maya has ___ pet rabbits.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“Maya has ___ pet rabbits.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['to', 'too', 'tow', 'two'],
      en: ['to', 'too', 'tow', 'two'],
    },
    correct: 3,
    explanation: {
      el: 'Το «two» είναι ο αριθμός 2. Το «w» μέσα του σού θυμίζει το «twin» και το «twelve», που έχουν κι αυτά σχέση με αρίθμηση.',
      en: '“Two” is the number 2. The “w” in it links it to other number words like “twin” and “twelve”.',
    },
  },

  // ── 8–9: your / you're ─────────────────────────────────────────────────────
  {
    q: {
      el: '«Is this ___ pencil?» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“Is this ___ pencil?” Which word completes the sentence correctly?',
    },
    options: {
      el: ['you\'re', 'yore', 'your', 'yours'],
      en: ['you\'re', 'yore', 'your', 'yours'],
    },
    correct: 2,
    explanation: {
      el: 'Το «your» δείχνει ότι κάτι ανήκει σε σένα: your pencil. Το «you\'re» σημαίνει «you are», και «Is this you are pencil?» δεν βγάζει νόημα.',
      en: '“Your” shows that something belongs to you: your pencil. “You\'re” means “you are”, and “Is this you are pencil?” makes no sense.',
    },
  },
  {
    q: {
      el: '«___ the fastest runner in the class!» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“___ the fastest runner in the class!” Which word completes the sentence correctly?',
    },
    options: {
      el: ['You\'re', 'Your', 'Yours', 'Youre'],
      en: ['You\'re', 'Your', 'Yours', 'Youre'],
    },
    correct: 0,
    explanation: {
      el: '«You are the fastest runner» βγάζει νόημα, άρα χρειάζεσαι «you\'re». Μην ξεχνάς την απόστροφο: δείχνει το γράμμα «a» που λείπει από το «are».',
      en: '“You are the fastest runner” makes sense, so you need “you\'re”. Don\'t forget the apostrophe: it stands for the missing “a” of “are”.',
    },
  },

  // ── 10–11: here / hear and where / wear ────────────────────────────────────
  {
    q: {
      el: '«Can you ___ the birds singing outside?» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“Can you ___ the birds singing outside?” Which word completes the sentence correctly?',
    },
    options: {
      el: ['here', 'hear', 'hair', 'hare'],
      en: ['here', 'hear', 'hair', 'hare'],
    },
    correct: 1,
    explanation: {
      el: 'Το «hear» σημαίνει ακούω και έχει μέσα του τη λέξη «ear» (αυτί). Το «here» σημαίνει «εδώ», δηλαδή τόπο.',
      en: '“Hear” means to listen with your ears, and it has the word “ear” inside it. “Here” means “in this place”.',
    },
  },
  {
    q: {
      el: '«I don\'t know what to ___ to the party.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“I don\'t know what to ___ to the party.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['where', 'were', 'we\'re', 'wear'],
      en: ['where', 'were', 'we\'re', 'wear'],
    },
    correct: 3,
    explanation: {
      el: 'Το «wear» σημαίνει φοράω ρούχα. Το «where» ρωτά για τόπο, το «were» είναι παρελθόν του «are» και το «we\'re» σημαίνει «we are».',
      en: '“Wear” means to put clothes on your body. “Where” asks about a place, “were” is the past of “are”, and “we\'re” means “we are”.',
    },
  },

  // ── 12–13: right / write and know / no ─────────────────────────────────────
  {
    q: {
      el: '«Please ___ your name at the top of the page.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“Please ___ your name at the top of the page.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['right', 'rite', 'write', 'white'],
      en: ['right', 'rite', 'write', 'white'],
    },
    correct: 2,
    explanation: {
      el: 'Το «write» σημαίνει γράφω και αρχίζει με βουβό «w». Το «right» σημαίνει σωστό ή τη δεξιά πλευρά.',
      en: '“Write” means to put words on paper, and it starts with a silent “w”. “Right” means correct, or the opposite of left.',
    },
  },
  {
    q: {
      el: '«___, thank you, I don\'t want any more cake.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“___, thank you, I don\'t want any more cake.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['No', 'Know', 'Knew', 'Knot'],
      en: ['No', 'Know', 'Knew', 'Knot'],
    },
    correct: 0,
    explanation: {
      el: 'Το «no» είναι το αντίθετο του «yes». Το «know» με βουβό «k» σημαίνει ξέρω: I know the answer.',
      en: '“No” is the opposite of “yes”. “Know” with a silent “k” means to have something in your head: I know the answer.',
    },
  },

  // ── 14–15: whole / hole ────────────────────────────────────────────────────
  {
    q: {
      el: '«The rabbit dug a ___ under the fence.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“The rabbit dug a ___ under the fence.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['whole', 'hole', 'hall', 'hull'],
      en: ['whole', 'hole', 'hall', 'hull'],
    },
    correct: 1,
    explanation: {
      el: 'Το «hole» είναι τρύπα, ένα άνοιγμα στο έδαφος. Το «whole» με βουβό «w» σημαίνει ολόκληρο.',
      en: '“Hole” is an opening, like a hole in the ground or in a sock. “Whole” with a silent “w” means all of something.',
    },
  },
  {
    q: {
      el: '«We ate the ___ pizza in ten minutes.» Ποια λέξη συμπληρώνει σωστά την πρόταση;',
      en: '“We ate the ___ pizza in ten minutes.” Which word completes the sentence correctly?',
    },
    options: {
      el: ['hole', 'hall', 'howl', 'whole'],
      en: ['hole', 'hall', 'howl', 'whole'],
    },
    correct: 3,
    explanation: {
      el: 'Το «whole» σημαίνει ολόκληρο, χωρίς να λείπει τίποτα. Θυμήσου: το «whole» έχει μέσα του το «w» της λέξης «with» — όλα μαζί.',
      en: '“Whole” means all of it, with nothing missing. Remember: “whole” starts with “w” like “with”, as in everything together.',
    },
  },

  // ── 16–18: spot the wrong one ──────────────────────────────────────────────
  {
    q: {
      el: 'Ποια πρόταση έχει λάθος ομόηχη λέξη;',
      en: 'Which sentence has the wrong homophone in it?',
    },
    options: {
      el: ['I know the answer to the riddle.', 'Turn right at the corner.', 'Where are you going?', 'I can here the music from my room.'],
      en: ['I know the answer to the riddle.', 'Turn right at the corner.', 'Where are you going?', 'I can here the music from my room.'],
    },
    correct: 3,
    explanation: {
      el: 'Θα έπρεπε να είναι «I can hear the music»: ακούμε με τα αυτιά μας (ear). Το «here» σημαίνει «εδώ».',
      en: 'It should be “I can hear the music”: we hear with our ears. “Here” means “in this place”.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση έχει λάθος ομόηχη λέξη;',
      en: 'Which sentence has the wrong homophone in it?',
    },
    options: {
      el: ['Your bag is on the floor.', 'It is to cold to swim today.', 'They\'re playing outside.', 'The dog dug a hole.'],
      en: ['Your bag is on the floor.', 'It is to cold to swim today.', 'They\'re playing outside.', 'The dog dug a hole.'],
    },
    correct: 1,
    explanation: {
      el: 'Θα έπρεπε να είναι «It is too cold to swim»: το «too» με δύο o σημαίνει «υπερβολικά». Το δεύτερο «to» της πρότασης (to swim) είναι σωστό.',
      en: 'It should be “It is too cold to swim”: “too” with two o\'s means “more than enough”. The second “to” in the sentence (to swim) is correct.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση είναι γραμμένη σωστά;',
      en: 'Which sentence is written correctly?',
    },
    options: {
      el: ['Their coming to see us tomorrow.', 'I would like too go with you.', 'We\'re going to wear our hats.', 'Do you no the way home?'],
      en: ['Their coming to see us tomorrow.', 'I would like too go with you.', 'We\'re going to wear our hats.', 'Do you no the way home?'],
    },
    correct: 2,
    explanation: {
      el: '«We\'re going to wear our hats» έχει και τις τρεις λέξεις σωστές. Οι άλλες χρειάζονται «They\'re», «to» και «know».',
      en: '“We\'re going to wear our hats” gets all three words right. The others should say “They\'re coming”, “to go” and “Do you know”.',
    },
  },
];
