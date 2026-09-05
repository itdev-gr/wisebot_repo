/**
 * Β' Δημοτικού · English Language Arts · Question & Exclamation Marks
 * ===================================================================
 * Original questions for a native English-speaking child of 7–8 (US Grade 2 / UK Year 2–3).
 * What the unit covers, in order:
 *   1–5   which mark ends the sentence: period (full stop), question mark, exclamation mark
 *   6–9   question words: who, where, when, why
 *   10–13 which sentence needs a «?» or a «!», and spotting a question
 *   14–18 first commas in a list: where they go, what they do, list plus end mark together
 * Distractors are the real mix-ups: a period on a question, a question mark on a shout,
 * the comma after the first word instead of between the things in the list.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ELA_QUESTION_AND_EXCLAMATION: QuizQuestion[] = [
  // ── 1–5: which mark ends the sentence ──────────────────────────────────────
  {
    q: { el: 'Ποιο σημείο μπαίνει στο τέλος; «I have a blue backpack»', en: 'Which mark goes at the end? «I have a blue backpack»' },
    options: { el: ['?', '!', '.', ','], en: ['?', '!', '.', ','] },
    correct: 2,
    explanation: {
      el: 'Αυτή η πρόταση απλώς μας λέει κάτι, άρα τελειώνει με τελεία: I have a blue backpack.',
      en: 'This sentence just tells us something, so it ends with a period (full stop): I have a blue backpack.',
    },
  },
  {
    q: { el: 'Ποιο σημείο μπαίνει στο τέλος; «Where is my hat»', en: 'Which mark goes at the end? «Where is my hat»' },
    options: { el: ['.', '!', ',', '?'], en: ['.', '!', ',', '?'] },
    correct: 3,
    explanation: {
      el: 'Αυτή η πρόταση ρωτάει κάτι, άρα χρειάζεται ερωτηματικό: Where is my hat?',
      en: 'This sentence asks something, so it needs a question mark: Where is my hat?',
    },
  },
  {
    q: { el: 'Ποιο σημείο μπαίνει στο τέλος; «Wow, that was a great goal»', en: 'Which mark goes at the end? «Wow, that was a great goal»' },
    options: { el: ['.', '?', '!', ','], en: ['.', '?', '!', ','] },
    correct: 2,
    explanation: {
      el: 'Αυτή η πρόταση δείχνει ενθουσιασμό, άρα τελειώνει με θαυμαστικό: Wow, that was a great goal!',
      en: 'This sentence shows excitement, so it ends with an exclamation mark: Wow, that was a great goal!',
    },
  },
  {
    q: { el: 'Σε τι χρησιμεύει το ερωτηματικό;', en: 'What is a question mark for?' },
    options: {
      el: ['ending a sentence that asks something', 'ending a sentence that shouts', 'joining two words together', 'separating things in a list'],
      en: ['ending a sentence that asks something', 'ending a sentence that shouts', 'joining two words together', 'separating things in a list'],
    },
    correct: 0,
    explanation: {
      el: 'Το ερωτηματικό (?) μπαίνει στο τέλος μιας πρότασης που ρωτάει κάτι: What is your name?',
      en: 'A question mark (?) goes at the end of a sentence that asks something: What is your name?',
    },
  },
  {
    q: { el: 'Πότε χρησιμοποιούμε θαυμαστικό;', en: 'When do we use an exclamation mark?' },
    options: {
      el: ['when a sentence asks something', 'when a sentence shows a strong feeling or surprise', 'at the start of every sentence', 'when we count things'],
      en: ['when a sentence asks something', 'when a sentence shows a strong feeling or surprise', 'at the start of every sentence', 'when we count things'],
    },
    correct: 1,
    explanation: {
      el: 'Το θαυμαστικό (!) δείχνει έντονο συναίσθημα, όπως έκπληξη ή ενθουσιασμό: We won! Look at that!',
      en: 'An exclamation mark (!) shows a strong feeling, like surprise or excitement: We won! Look at that!',
    },
  },

  // ── 6–9: question words ────────────────────────────────────────────────────
  {
    q: { el: 'Ποια ερωτηματική λέξη ρωτάει για ένα ΠΡΟΣΩΠΟ;', en: 'Which question word asks about a PERSON?' },
    options: { el: ['what', 'where', 'when', 'who'], en: ['what', 'where', 'when', 'who'] },
    correct: 3,
    explanation: {
      el: 'Το who ρωτάει για πρόσωπο: Who is at the door? Το what ρωτάει για πράγμα, το where για τόπο, το when για χρόνο.',
      en: 'Who asks about a person: Who is at the door? What asks about a thing, where about a place, and when about a time.',
    },
  },
  {
    q: { el: 'Ποια ερωτηματική λέξη ρωτάει για έναν ΤΟΠΟ;', en: 'Which question word asks about a PLACE?' },
    options: { el: ['why', 'where', 'who', 'what'], en: ['why', 'where', 'who', 'what'] },
    correct: 1,
    explanation: {
      el: 'Το where ρωτάει για τόπο: Where do you live? Το why ρωτάει τον λόγο, και το who για πρόσωπο.',
      en: 'Where asks about a place: Where do you live? Why asks for a reason, and who asks about a person.',
    },
  },
  {
    q: { el: 'Ποια ερωτηματική λέξη ρωτάει για τον ΧΡΟΝΟ;', en: 'Which question word asks about a TIME?' },
    options: { el: ['when', 'who', 'what', 'why'], en: ['when', 'who', 'what', 'why'] },
    correct: 0,
    explanation: {
      el: 'Το when ρωτάει για χρόνο: When is your birthday? Η απάντηση είναι ένας χρόνος, όπως Tuesday ή in May.',
      en: 'When asks about a time: When is your birthday? The answer is a time, like Tuesday or in May.',
    },
  },
  {
    q: { el: '«___ is the sky blue?» Ποια λέξη ρωτάει τον λόγο;', en: '«___ is the sky blue?» Which word asks for a reason?' },
    options: { el: ['When', 'Where', 'Who', 'Why'], en: ['When', 'Where', 'Who', 'Why'] },
    correct: 3,
    explanation: {
      el: 'Το why ρωτάει τον λόγο: Why is the sky blue? Η απάντηση συνήθως αρχίζει με «because».',
      en: 'Why asks for a reason: Why is the sky blue? The answer usually starts with «because».',
    },
  },

  // ── 10–13: which sentence needs a «?» or a «!» ─────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρειάζεται ερωτηματικό στο τέλος;', en: 'Which sentence needs a question mark at the end?' },
    options: {
      el: ['I like to swim', 'Can you swim', 'Swimming is fun', 'We swam all day'],
      en: ['I like to swim', 'Can you swim', 'Swimming is fun', 'We swam all day'],
    },
    correct: 1,
    explanation: {
      el: 'Το «Can you swim?» ρωτάει κάτι, άρα χρειάζεται ερωτηματικό. Οι άλλες είναι προτάσεις που λένε κάτι και τελειώνουν με τελεία.',
      en: '«Can you swim?» is asking something, so it needs a question mark. The others are telling sentences that end with a period.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρειάζεται θαυμαστικό στο τέλος;', en: 'Which sentence needs an exclamation mark at the end?' },
    options: {
      el: ['The cat is asleep', 'What time is it', 'Look out, that ball is coming', 'I walked to school'],
      en: ['The cat is asleep', 'What time is it', 'Look out, that ball is coming', 'I walked to school'],
    },
    correct: 2,
    explanation: {
      el: 'Το «Look out, that ball is coming!» λέγεται με έντονο συναίσθημα, άρα παίρνει θαυμαστικό. Το «What time is it?» είναι ερώτηση.',
      en: '«Look out, that ball is coming!» is said with a strong feeling, so it gets an exclamation mark. «What time is it?» is a question.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστή στίξη;', en: 'Which sentence is punctuated correctly?' },
    options: {
      el: ['Do you like apples.', 'Do you like apples?', 'Do you like apples,', 'Do you? like apples'],
      en: ['Do you like apples.', 'Do you like apples?', 'Do you like apples,', 'Do you? like apples'],
    },
    correct: 1,
    explanation: {
      el: 'Είναι ερώτηση, άρα το ερωτηματικό μπαίνει στο τέλος: Do you like apples? Η τελεία θα ήταν λάθος για ερώτηση.',
      en: 'It is a question, so the question mark goes at the very end: Do you like apples? A period would be wrong for a question.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι ερώτηση;', en: 'Which sentence is a question?' },
    options: {
      el: ['Please close the door.', 'The door is open.', 'Is the door open?', 'Open the door!'],
      en: ['Please close the door.', 'The door is open.', 'Is the door open?', 'Open the door!'],
    },
    correct: 2,
    explanation: {
      el: 'Το «Is the door open?» ρωτάει κάτι, άρα είναι ερώτηση. Οι ερωτήσεις συχνά αρχίζουν με λέξεις όπως is, do, can, who ή what.',
      en: '«Is the door open?» asks something, so it is a question. Questions often start with words like is, do, can, who, or what.',
    },
  },

  // ── 14–18: first commas in a list ──────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά τα κόμματα;', en: 'Which sentence uses commas correctly?' },
    options: {
      el: ['I packed a hat a book and a snack.', 'I packed, a hat a book and a snack.', 'I packed a hat, a book and, a snack.', 'I packed a hat, a book, and a snack.'],
      en: ['I packed a hat a book and a snack.', 'I packed, a hat a book and a snack.', 'I packed a hat, a book and, a snack.', 'I packed a hat, a book, and a snack.'],
    },
    correct: 3,
    explanation: {
      el: 'Όταν απαριθμούμε πράγματα, βάζουμε κόμμα ανάμεσά τους: a hat, a book, and a snack. Τα κόμματα μας βοηθούν να δούμε κάθε πράγμα ξεχωριστά.',
      en: 'When we list things, we put a comma between them: a hat, a book, and a snack. The commas help us see each thing on its own.',
    },
  },
  {
    q: { el: 'Πού μπαίνουν τα κόμματα; «We saw lions tigers and bears.»', en: 'Where do the commas go? «We saw lions tigers and bears.»' },
    options: {
      el: ['We saw lions, tigers, and bears.', 'We, saw lions tigers and bears.', 'We saw, lions tigers and bears.', 'We saw lions tigers, and bears.'],
      en: ['We saw lions, tigers, and bears.', 'We, saw lions tigers and bears.', 'We saw, lions tigers and bears.', 'We saw lions tigers, and bears.'],
    },
    correct: 0,
    explanation: {
      el: 'Τα κόμματα μπαίνουν ανάμεσα στα ζώα της λίστας: lions, tigers, and bears. Δεν μπαίνει κόμμα μετά το «we» ή το «saw».',
      en: 'The commas go between the animals in the list: lions, tigers, and bears. There is no comma after «we» or after «saw».',
    },
  },
  {
    q: { el: 'Ποιο σημείο χωρίζει τα πράγματα σε μια λίστα;', en: 'Which mark separates the things in a list?' },
    options: { el: ['period', 'question mark', 'exclamation mark', 'comma'], en: ['period', 'question mark', 'exclamation mark', 'comma'] },
    correct: 3,
    explanation: {
      el: 'Το κόμμα (,) χωρίζει τα πράγματα σε μια λίστα: red, blue, and green. Τα άλλα σημεία μπαίνουν στο τέλος της πρότασης.',
      en: 'A comma (,) separates the things in a list: red, blue, and green. The other marks go at the end of a sentence.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι λίστα που χρειάζεται κόμματα;', en: 'Which sentence is a list that needs commas?' },
    options: {
      el: ['The dog ran fast.', 'I have a cat a fish and a frog.', 'Where are you going?', 'It is raining.'],
      en: ['The dog ran fast.', 'I have a cat a fish and a frog.', 'Where are you going?', 'It is raining.'],
    },
    correct: 1,
    explanation: {
      el: 'Το «I have a cat a fish and a frog» απαριθμεί τρία κατοικίδια, άρα χρειάζεται κόμματα: I have a cat, a fish, and a frog.',
      en: '«I have a cat a fish and a frog» lists three pets, so it needs commas: I have a cat, a fish, and a frog.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστά ΚΑΙ τα κόμματα ΚΑΙ το σημείο στο τέλος;', en: 'Which sentence has the commas AND the end mark all correct?' },
    options: {
      el: ['Do you want peas, corn, or beans?', 'Do you want peas corn or beans.', 'Do you want, peas corn or beans?', 'Do you want peas, corn, or beans.'],
      en: ['Do you want peas, corn, or beans?', 'Do you want peas corn or beans.', 'Do you want, peas corn or beans?', 'Do you want peas, corn, or beans.'],
    },
    correct: 0,
    explanation: {
      el: 'Τα κόμματα μπαίνουν ανάμεσα στα peas, corn και beans, και επειδή η πρόταση ρωτάει κάτι, τελειώνει με ερωτηματικό.',
      en: 'The commas go between peas, corn, and beans, and because the sentence asks something, it ends with a question mark.',
    },
  },
];
