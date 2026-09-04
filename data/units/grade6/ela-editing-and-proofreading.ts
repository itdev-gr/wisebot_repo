/**
 * Grade 6 · English Language Arts · Editing & Proofreading
 * =========================================================
 * Original questions for a native English-speaking child of 11–12 (curriculum topics only).
 * What the unit covers, in order:
 *   1–5   find the error in a sentence: spelling, subject–verb agreement, end punctuation, homophones
 *   6–8   which sentence is correct: I/me, doesn\'t, punctuating speech
 *   9–11  semicolon vs comma (the comma splice), the colon before a list
 *   12–14 parentheses and dashes for extra information
 *   15–18 apostrophes: its/it\'s, the 1990s, plurals without apostrophes, possession
 * Distractors are the real mistakes: the common misspellings, the comma splice,
 * the apostrophe stuck into a plural, "childrens\'".
 * el: the question is translated for a Greek-speaking parent; the options stay in English.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ELA_EDITING_AND_PROOFREADING: QuizQuestion[] = [
  // ── 1–5: find the error ────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι ανορθόγραφη; "The libary was quiet, so we finished our project early."', en: 'Which word is misspelled? "The libary was quiet, so we finished our project early."' },
    options: { el: ['quiet', 'finished', 'libary', 'project'], en: ['quiet', 'finished', 'libary', 'project'] },
    correct: 2,
    explanation: {
      el: 'Η σωστή γραφή είναι "library", με δύο r: lib-RAR-y. Το δεύτερο r συχνά δεν ακούγεται στην ομιλία, γι\' αυτό ξεχνιέται στο γράψιμο.',
      en: 'The correct spelling is "library", with two r\'s: lib-RAR-y. The second r is often skipped in speech, which is why it gets forgotten in writing.',
    },
  },
  {
    q: { el: 'Τι είδους λάθος έχει η πρόταση "Me and Jack goes to the same club.";', en: 'What kind of error is in the sentence "Me and Jack goes to the same club."?' },
    options: { el: ['A spelling error', 'A grammar error (wrong pronoun and verb form)', 'A missing capital letter', 'There is no error'], en: ['A spelling error', 'A grammar error (wrong pronoun and verb form)', 'A missing capital letter', 'There is no error'] },
    correct: 1,
    explanation: {
      el: 'Δύο γραμματικά λάθη: το υποκείμενο πρέπει να είναι "Jack and I" (όχι "Me"), και με πληθυντικό υποκείμενο το ρήμα είναι "go", όχι "goes": "Jack and I go to the same club."',
      en: 'Two grammar slips: the subject should be "Jack and I" (not "Me"), and a plural subject takes "go", not "goes": "Jack and I go to the same club."',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει λάθος στίξη;', en: 'Which sentence has a punctuation error?' },
    options: { el: ['Where is the nearest station?', 'I have three pets: a dog, a cat, and a hamster.', 'Wow, that was close!', 'Can you pass the salt.'], en: ['Where is the nearest station?', 'I have three pets: a dog, a cat, and a hamster.', 'Wow, that was close!', 'Can you pass the salt.'] },
    correct: 3,
    explanation: {
      el: 'Το "Can you pass the salt" είναι ερώτηση, άρα θέλει ερωτηματικό, όχι τελεία. Οι άλλες τρεις προτάσεις έχουν σωστή στίξη.',
      en: '"Can you pass the salt" is a question, so it needs a question mark, not a period. The other three sentences are punctuated correctly.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['seperate', 'definately', 'necessary', 'recieve'], en: ['seperate', 'definately', 'necessary', 'recieve'] },
    correct: 2,
    explanation: {
      el: 'Το "necessary" είναι σωστό: ένα c, δύο s. Οι άλλες πρέπει να είναι separate (με a στη μέση), definitely (με i) και receive (i πριν το e, εκτός μετά από c).',
      en: '"Necessary" is right: one c, two s\'s. The others should be separate (with an a in the middle), definitely (with an i) and receive (i before e, except after c).',
    },
  },
  {
    q: { el: 'Βρες το λάθος: "Their going to the beach tomorrow if the weather is good."', en: 'Find the error: "Their going to the beach tomorrow if the weather is good."' },
    options: { el: ['"Their" should be "They\'re"', '"beach" should be "beech"', '"tomorrow" should be "tommorow"', '"weather" should be "whether"'], en: ['"Their" should be "They\'re"', '"beach" should be "beech"', '"tomorrow" should be "tommorow"', '"weather" should be "whether"'] },
    correct: 0,
    explanation: {
      el: 'Το "their" σημαίνει "δικό τους". Εδώ χρειάζεται "they are", δηλαδή "They\'re going to the beach". Τα beach, tomorrow και weather είναι όλα σωστά.',
      en: '"Their" means "belonging to them". Here we need "they are", so "They\'re going to the beach". Beach, tomorrow and weather are all correct.',
    },
  },

  // ── 6–8: which sentence is correct ─────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Sara and me went to the park.', 'Sara and I went to the park.', 'Me and Sara went to the park.', 'Sara and myself went to the park.'], en: ['Sara and me went to the park.', 'Sara and I went to the park.', 'Me and Sara went to the park.', 'Sara and myself went to the park.'] },
    correct: 1,
    explanation: {
      el: 'Δοκίμασε να βγάλεις τη Sara: θα έλεγες "I went to the park", όχι "Me went". Άρα "Sara and I went to the park." Το "myself" χρησιμοποιείται μόνο όταν το υποκείμενο κάνει κάτι στον εαυτό του.',
      en: 'Try taking Sara out: you would say "I went to the park", not "Me went". So it is "Sara and I went to the park." "Myself" is only used when the subject does something to itself.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which of these sentences is correct?' },
    options: { el: ['She don\'t like spinach.', 'She doesn\'t likes spinach.', 'She not like spinach.', 'She doesn\'t like spinach.'], en: ['She don\'t like spinach.', 'She doesn\'t likes spinach.', 'She not like spinach.', 'She doesn\'t like spinach.'] },
    correct: 3,
    explanation: {
      el: 'Με he, she και it το βοηθητικό είναι "does", άρα "doesn\'t". Μετά το "doesn\'t" το ρήμα μένει στη βασική του μορφή: like, όχι likes.',
      en: 'With he, she and it the helper is "does", so "doesn\'t". After "doesn\'t" the verb stays in its base form: like, not likes.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστή στίξη στον ευθύ λόγο;', en: 'Which sentence punctuates the speech correctly?' },
    options: { el: ['"Are you coming?" asked Priya.', '"Are you coming," asked Priya?', '"Are you coming" asked Priya?', '"Are you coming?", asked Priya.'], en: ['"Are you coming?" asked Priya.', '"Are you coming," asked Priya?', '"Are you coming" asked Priya?', '"Are you coming?", asked Priya.'] },
    correct: 0,
    explanation: {
      el: 'Το ερωτηματικό ανήκει στα λόγια που ειπώθηκαν, άρα μπαίνει μέσα στα εισαγωγικά, και δεν βάζουμε κόμμα μετά από αυτό: "Are you coming?" asked Priya.',
      en: 'The question mark belongs to the words that were spoken, so it goes inside the quotation marks, and no comma follows it: "Are you coming?" asked Priya.',
    },
  },

  // ── 9–11: semicolon, comma splice, colon ───────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά την άνω τελεία (semicolon);', en: 'Which sentence uses the semicolon correctly?' },
    options: { el: ['The rain stopped; and we went outside.', 'Because the rain stopped; we went outside.', 'The rain; stopped and we went outside.', 'The rain stopped; we went outside.'], en: ['The rain stopped; and we went outside.', 'Because the rain stopped; we went outside.', 'The rain; stopped and we went outside.', 'The rain stopped; we went outside.'] },
    correct: 3,
    explanation: {
      el: 'Το semicolon ενώνει δύο πλήρεις προτάσεις που συνδέονται στενά, χωρίς σύνδεσμο: "The rain stopped; we went outside." Δεν μπαίνει πριν από "and" ούτε μετά από μια ημιτελή πρόταση.',
      en: 'A semicolon joins two complete, closely related sentences with no conjunction: "The rain stopped; we went outside." It does not go before "and" or after an incomplete clause.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει comma splice (δύο προτάσεις ενωμένες μόνο με κόμμα);', en: 'Which sentence has a comma splice (two sentences joined by only a comma)?' },
    options: { el: ['It was late, so we went home.', 'It was late, we went home.', 'It was late; we went home.', 'Because it was late, we went home.'], en: ['It was late, so we went home.', 'It was late, we went home.', 'It was late; we went home.', 'Because it was late, we went home.'] },
    correct: 1,
    explanation: {
      el: 'Το "It was late, we went home" κολλάει δύο πλήρεις προτάσεις με ένα κόμμα μόνο, και αυτό είναι λάθος. Διόρθωσέ το με semicolon, με τελεία, ή με κόμμα και σύνδεσμο (so).',
      en: '"It was late, we went home" glues two complete sentences with just a comma, which is an error. Fix it with a semicolon, a period, or a comma plus a conjunction (so).',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά την άνω-κάτω τελεία (colon) πριν από λίστα;', en: 'Which sentence uses a colon correctly before a list?' },
    options: { el: ['You will need: a pencil, a ruler, and paper.', 'You will need three things, a pencil: a ruler and paper.', 'You will need three things: a pencil, a ruler, and paper.', 'You: will need a pencil, a ruler, and paper.'], en: ['You will need: a pencil, a ruler, and paper.', 'You will need three things, a pencil: a ruler and paper.', 'You will need three things: a pencil, a ruler, and paper.', 'You: will need a pencil, a ruler, and paper.'] },
    correct: 2,
    explanation: {
      el: 'Το colon μπαίνει μετά από μια πλήρη πρόταση για να "ανοίξει" τη λίστα: "You will need three things: a pencil, a ruler, and paper." Το "You will need:" δεν είναι πλήρης πρόταση, άρα δεν παίρνει colon.',
      en: 'A colon follows a complete sentence and "opens" the list: "You will need three things: a pencil, a ruler, and paper." "You will need:" is not a complete sentence, so it should not take a colon.',
    },
  },

  // ── 12–14: parentheses and dashes ──────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά τις παρενθέσεις;', en: 'Which sentence uses parentheses correctly?' },
    options: { el: ['My cousin (who lives in Portugal) is visiting next week.', 'My cousin who lives in Portugal) is visiting next week.', '(My cousin who lives in Portugal is visiting next week.', 'My cousin (who lives in Portugal is visiting) next week.'], en: ['My cousin (who lives in Portugal) is visiting next week.', 'My cousin who lives in Portugal) is visiting next week.', '(My cousin who lives in Portugal is visiting next week.', 'My cousin (who lives in Portugal is visiting) next week.'] },
    correct: 0,
    explanation: {
      el: 'Οι παρενθέσεις έρχονται πάντα σε ζευγάρι και κλείνουν μέσα τους μόνο την επιπλέον πληροφορία. Αν τις βγάλεις, η πρόταση πρέπει να στέκεται: "My cousin is visiting next week."',
      en: 'Parentheses always come in a pair and hold only the extra information. Remove them and the sentence must still stand: "My cousin is visiting next week."',
    },
  },
  {
    q: { el: 'Ποιος είναι ο ρόλος των παυλών στο "The picnic — our first of the summer — was a great success";', en: 'What is the purpose of the dashes in "The picnic — our first of the summer — was a great success"?' },
    options: { el: ['To show a question', 'To join two words into one', 'To show that a list is coming', 'To add extra information that interrupts the sentence'], en: ['To show a question', 'To join two words into one', 'To show that a list is coming', 'To add extra information that interrupts the sentence'] },
    correct: 3,
    explanation: {
      el: 'Ένα ζευγάρι παύλες λειτουργεί όπως οι παρενθέσεις: κλείνει μια παρεμβολή. Οι παύλες τραβούν λίγο περισσότερη προσοχή στην επιπλέον πληροφορία από ό,τι οι παρενθέσεις.',
      en: 'A pair of dashes works like parentheses: it sets off an interruption. Dashes draw a little more attention to the extra information than parentheses do.',
    },
  },
  {
    q: { el: 'Ποια στίξη θα μπορούσε να αντικαταστήσει τις παρενθέσεις στο "Our teacher (a keen runner) joined the race";', en: 'Which punctuation could replace the parentheses in "Our teacher (a keen runner) joined the race"?' },
    options: { el: ['A pair of dashes', 'A question mark', 'A colon', 'An exclamation mark'], en: ['A pair of dashes', 'A question mark', 'A colon', 'An exclamation mark'] },
    correct: 0,
    explanation: {
      el: 'Παρενθέσεις, ζευγάρι παύλες και ζευγάρι κόμματα μπορούν όλα να κλείσουν μια επιπλέον πληροφορία: "Our teacher — a keen runner — joined the race." Διάλεξε ανάλογα με το πόση έμφαση θέλεις.',
      en: 'Parentheses, a pair of dashes and a pair of commas can all set off extra information: "Our teacher — a keen runner — joined the race." Choose based on how much emphasis you want.',
    },
  },

  // ── 15–18: apostrophes ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά τα its και it\'s;', en: 'Which sentence uses its and it\'s correctly?' },
    options: { el: ['The dog wagged it\'s tail.', 'Its raining, so the dog stayed in it\'s bed.', 'It\'s time for the dog to eat its dinner.', 'The dog knows its going to rain.'], en: ['The dog wagged it\'s tail.', 'Its raining, so the dog stayed in it\'s bed.', 'It\'s time for the dog to eat its dinner.', 'The dog knows its going to rain.'] },
    correct: 2,
    explanation: {
      el: 'Το "it\'s" σημαίνει πάντα "it is" ή "it has". Το "its" χωρίς απόστροφο σημαίνει "δικό του". Δοκιμή: αν το "it is" ταιριάζει, γράψε it\'s· αλλιώς, its.',
      en: '"It\'s" always means "it is" or "it has". "Its" with no apostrophe means "belonging to it". Test: if "it is" fits, write it\'s; if not, write its.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο σωστός τρόπος να γράψεις τη δεκαετία;', en: 'Which is the correct way to write the decade?' },
    options: { el: ['the 1990\'s', 'the 1990s', 'the 1990s\'', 'the 19\'90s'], en: ['the 1990\'s', 'the 1990s', 'the 1990s\'', 'the 19\'90s'] },
    correct: 1,
    explanation: {
      el: 'Οι δεκαετίες είναι απλοί πληθυντικοί, άρα δεν παίρνουν απόστροφο: the 1990s, the 1800s. Η απόστροφος δείχνει κτήση ή λέξεις που λείπουν, όχι πληθυντικό.',
      en: 'Decades are ordinary plurals, so they take no apostrophe: the 1990s, the 1800s. An apostrophe shows possession or missing letters, never a plural.',
    },
  },
  {
    q: { el: 'Ποιος πληθυντικός είναι γραμμένος σωστά;', en: 'Which plural is written correctly?' },
    options: { el: ['I bought three apple\'s.', 'The bird\'s were singing.', 'Two pizza\'s arrived.', 'Both cars need new tires.'], en: ['I bought three apple\'s.', 'The bird\'s were singing.', 'Two pizza\'s arrived.', 'Both cars need new tires.'] },
    correct: 3,
    explanation: {
      el: 'Οι πληθυντικοί παίρνουν απλώς -s: cars, tires, apples, birds, pizzas. Το "apple\'s" με απόστροφο θα σήμαινε "του μήλου", που δεν έχει νόημα εδώ.',
      en: 'Plurals simply add -s: cars, tires, apples, birds, pizzas. "Apple\'s" with an apostrophe would mean "belonging to the apple", which makes no sense here.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά την απόστροφο για να δείξει κτήση;', en: 'Which sentence uses the apostrophe correctly to show possession?' },
    options: { el: ['The children\'s toys were everywhere.', 'The childrens\' toys were everywhere.', 'The childrens toys were everywhere.', 'The children toy\'s were everywhere.'], en: ['The children\'s toys were everywhere.', 'The childrens\' toys were everywhere.', 'The childrens toys were everywhere.', 'The children toy\'s were everywhere.'] },
    correct: 0,
    explanation: {
      el: 'Το "children" είναι ήδη πληθυντικός (χωρίς s), άρα η κτήση γίνεται με απόστροφο + s: children\'s. Το ίδιο και με women\'s, men\'s, people\'s.',
      en: '"Children" is already plural (with no s), so possession is shown with apostrophe + s: children\'s. The same goes for women\'s, men\'s, people\'s.',
    },
  },
];
