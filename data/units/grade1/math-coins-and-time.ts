/**
 * Α' Δημοτικού · Μαθηματικά · Κέρματα και ώρα
 * ============================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in the order an Α' class meets it:
 *   1–5   the euro coins: 1, 2, 5, 10, 20, 50 cents — which is worth more, counting a few coins
 *   6–9   paying small amounts: how much does it cost, which coins pay for it, the change
 *   10–14 the days of the week: how many, which comes next, weekend days
 *   15–18 o'clock on the clock: where the hands point, reading the hour
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_COINS_AND_TIME: QuizQuestion[] = [
  // ── 1–5: the euro coins ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο κέρμα αξίζει πιο πολύ;', en: 'Which coin is worth the most?' },
    options: { el: ['1 λεπτό', '2 λεπτά', '5 λεπτά', '10 λεπτά'], en: ['1 cent', '2 cents', '5 cents', '10 cents'] },
    correct: 3,
    explanation: {
      el: 'Το κέρμα των 10 λεπτών αξίζει πιο πολύ. Όσο πιο μεγάλος ο αριθμός, τόσο πιο πολλά λεπτά.',
      en: 'The 10-cent coin is worth the most. The bigger the number, the more cents it is worth.',
    },
  },
  {
    q: { el: 'Ποιο κέρμα αξίζει πιο λίγο;', en: 'Which coin is worth the least?' },
    options: { el: ['50 λεπτά', '20 λεπτά', '5 λεπτά', '2 λεπτά'], en: ['50 cents', '20 cents', '5 cents', '2 cents'] },
    correct: 3,
    explanation: {
      el: 'Το κέρμα των 2 λεπτών αξίζει πιο λίγο από όλα αυτά. Τα 50 λεπτά είναι τα πιο πολλά.',
      en: 'The 2-cent coin is worth the least of these. 50 cents is the most.',
    },
  },
  {
    q: { el: 'Έχεις δύο κέρματα των 5 λεπτών. Πόσα λεπτά έχεις;', en: 'You have two 5-cent coins. How many cents do you have?' },
    options: { el: ['5 λεπτά', '7 λεπτά', '10 λεπτά', '15 λεπτά'], en: ['5 cents', '7 cents', '10 cents', '15 cents'] },
    correct: 2,
    explanation: {
      el: '5 + 5 = 10. Δύο κέρματα των 5 λεπτών κάνουν 10 λεπτά, όσο ένα κέρμα των 10.',
      en: '5 + 5 = 10. Two 5-cent coins make 10 cents, the same as one 10-cent coin.',
    },
  },
  {
    q: { el: 'Πόσα κέρματα των 10 λεπτών κάνουν 20 λεπτά;', en: 'How many 10-cent coins make 20 cents?' },
    options: { el: ['1', '2', '10', '20'], en: ['1', '2', '10', '20'] },
    correct: 1,
    explanation: {
      el: '10 + 10 = 20. Δύο κέρματα των 10 λεπτών κάνουν 20 λεπτά.',
      en: '10 + 10 = 20. Two 10-cent coins make 20 cents.',
    },
  },
  {
    q: { el: 'Έχεις ένα κέρμα των 20 λεπτών και ένα των 5 λεπτών. Πόσα λεπτά έχεις;', en: 'You have one 20-cent coin and one 5-cent coin. How many cents do you have?' },
    options: { el: ['2 λεπτά', '15 λεπτά', '25 λεπτά', '30 λεπτά'], en: ['2 cents', '15 cents', '25 cents', '30 cents'] },
    correct: 2,
    explanation: {
      el: '20 + 5 = 25. Βάζουμε τα κέρματα μαζί και μετράμε: 20, και 5 ακόμα, 25 λεπτά.',
      en: '20 + 5 = 25. We put the coins together and count: 20, and 5 more, 25 cents.',
    },
  },

  // ── 6–9: paying small amounts ──────────────────────────────────────────────
  {
    q: { el: 'Μια καραμέλα κοστίζει 10 λεπτά. Ποιο κέρμα την πληρώνει ακριβώς;', en: 'A sweet costs 10 cents. Which coin pays for it exactly?' },
    options: { el: ['5 λεπτά', '10 λεπτά', '20 λεπτά', '1 λεπτό'], en: ['5 cents', '10 cents', '20 cents', '1 cent'] },
    correct: 1,
    explanation: {
      el: 'Η καραμέλα κοστίζει 10 λεπτά, άρα δίνουμε το κέρμα των 10 λεπτών. Ούτε πιο πολύ ούτε πιο λίγο.',
      en: 'The sweet costs 10 cents, so we give the 10-cent coin. Not more, not less.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να πληρώσει 7 λεπτά. Ποια κέρματα θα δώσει;', en: 'Nikos wants to pay 7 cents. Which coins will he give?' },
    options: { el: ['5 και 1', '5 και 2', '2 και 2', '10 και 2'], en: ['5 and 1', '5 and 2', '2 and 2', '10 and 2'] },
    correct: 1,
    explanation: {
      el: '5 + 2 = 7. Ένα κέρμα των 5 λεπτών και ένα των 2 λεπτών κάνουν 7 λεπτά.',
      en: '5 + 2 = 7. One 5-cent coin and one 2-cent coin make 7 cents.',
    },
  },
  {
    q: { el: 'Η Μαρία αγοράζει μια γόμα με 20 λεπτά και ένα μολύβι με 10 λεπτά. Πόσο πληρώνει;', en: 'Maria buys an eraser for 20 cents and a pencil for 10 cents. How much does she pay?' },
    options: { el: ['10 λεπτά', '20 λεπτά', '30 λεπτά', '40 λεπτά'], en: ['10 cents', '20 cents', '30 cents', '40 cents'] },
    correct: 2,
    explanation: {
      el: '20 + 10 = 30. Η γόμα και το μολύβι μαζί κοστίζουν 30 λεπτά.',
      en: '20 + 10 = 30. The eraser and the pencil together cost 30 cents.',
    },
  },
  {
    q: { el: 'Ο Γιώργος δίνει 50 λεπτά για ένα κουλούρι που κοστίζει 40 λεπτά. Πόσα ρέστα θα πάρει;', en: 'Giorgos gives 50 cents for a bread ring that costs 40 cents. How much change will he get?' },
    options: { el: ['5 λεπτά', '10 λεπτά', '20 λεπτά', '90 λεπτά'], en: ['5 cents', '10 cents', '20 cents', '90 cents'] },
    correct: 1,
    explanation: {
      el: '50 − 40 = 10. Ο Γιώργος έδωσε 10 λεπτά παραπάνω, άρα παίρνει πίσω 10 λεπτά.',
      en: '50 − 40 = 10. Giorgos gave 10 cents too many, so he gets 10 cents back.',
    },
  },

  // ── 10–14: the days of the week ────────────────────────────────────────────
  {
    q: { el: 'Πόσες μέρες έχει μια εβδομάδα;', en: 'How many days are in a week?' },
    options: { el: ['5', '6', '7', '10'], en: ['5', '6', '7', '10'] },
    correct: 2,
    explanation: {
      el: 'Η εβδομάδα έχει 7 μέρες: Δευτέρα, Τρίτη, Τετάρτη, Πέμπτη, Παρασκευή, Σάββατο, Κυριακή.',
      en: 'A week has 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
    },
  },
  {
    q: { el: 'Ποια μέρα έρχεται μετά την Τρίτη;', en: 'Which day comes after Tuesday?' },
    options: { el: ['Δευτέρα', 'Τετάρτη', 'Πέμπτη', 'Κυριακή'], en: ['Monday', 'Wednesday', 'Thursday', 'Sunday'] },
    correct: 1,
    explanation: {
      el: 'Μετά την Τρίτη έρχεται η Τετάρτη. Δευτέρα, Τρίτη, Τετάρτη…',
      en: 'After Tuesday comes Wednesday. Monday, Tuesday, Wednesday…',
    },
  },
  {
    q: { el: 'Ποια μέρα είναι πριν από την Παρασκευή;', en: 'Which day is before Friday?' },
    options: { el: ['Σάββατο', 'Τετάρτη', 'Πέμπτη', 'Τρίτη'], en: ['Saturday', 'Wednesday', 'Thursday', 'Tuesday'] },
    correct: 2,
    explanation: {
      el: 'Πριν από την Παρασκευή είναι η Πέμπτη. Μετά την Παρασκευή έρχεται το Σάββατο.',
      en: 'Before Friday is Thursday. After Friday comes Saturday.',
    },
  },
  {
    q: { el: 'Ποιες δύο μέρες δεν πάμε σχολείο;', en: 'Which two days do we not go to school?' },
    options: { el: ['Δευτέρα και Τρίτη', 'Παρασκευή και Σάββατο', 'Σάββατο και Κυριακή', 'Κυριακή και Δευτέρα'], en: ['Monday and Tuesday', 'Friday and Saturday', 'Saturday and Sunday', 'Sunday and Monday'] },
    correct: 2,
    explanation: {
      el: 'Το Σάββατο και η Κυριακή είναι το Σαββατοκύριακο. Τότε δεν έχουμε σχολείο.',
      en: 'Saturday and Sunday are the weekend. We have no school then.',
    },
  },
  {
    q: { el: 'Σήμερα είναι Κυριακή. Τι μέρα θα είναι αύριο;', en: 'Today is Sunday. What day will it be tomorrow?' },
    options: { el: ['Σάββατο', 'Δευτέρα', 'Παρασκευή', 'Κυριακή'], en: ['Saturday', 'Monday', 'Friday', 'Sunday'] },
    correct: 1,
    explanation: {
      el: 'Μετά την Κυριακή ξαναρχίζει η εβδομάδα με τη Δευτέρα.',
      en: 'After Sunday the week starts again with Monday.',
    },
  },

  // ── 15–18: o'clock on the clock ────────────────────────────────────────────
  {
    q: { el: 'Πόσους δείκτες έχει το ρολόι του τοίχου;', en: 'How many hands does a wall clock have?' },
    options: { el: ['Έναν', 'Δύο', 'Τρεις', 'Δώδεκα'], en: ['One', 'Two', 'Three', 'Twelve'] },
    correct: 1,
    explanation: {
      el: 'Το ρολόι έχει δύο δείκτες: τον μικρό για τις ώρες και τον μεγάλο για τα λεπτά.',
      en: 'The clock has two hands: the short one for the hours and the long one for the minutes.',
    },
  },
  {
    q: { el: 'Όταν η ώρα είναι ακριβώς, πού δείχνει ο μεγάλος δείκτης;', en: 'When it is exactly o\'clock, where does the long hand point?' },
    options: { el: ['Στο 12', 'Στο 6', 'Στο 3', 'Στο 9'], en: ['At 12', 'At 6', 'At 3', 'At 9'] },
    correct: 0,
    explanation: {
      el: 'Στην ακριβή ώρα ο μεγάλος δείκτης δείχνει πάντα το 12. Ο μικρός μάς λέει ποια ώρα είναι.',
      en: 'On the hour, the long hand always points at 12. The short hand tells us which hour it is.',
    },
  },
  {
    q: { el: 'Ο μικρός δείκτης δείχνει το 3 και ο μεγάλος το 12. Τι ώρα είναι;', en: 'The short hand points at 3 and the long hand at 12. What time is it?' },
    options: { el: ['12 ακριβώς', '3 ακριβώς', '6 ακριβώς', '3 και μισή'], en: ['12 o\'clock', '3 o\'clock', '6 o\'clock', 'half past 3'] },
    correct: 1,
    explanation: {
      el: 'Ο μικρός δείκτης λέει την ώρα: δείχνει το 3. Ο μεγάλος στο 12 σημαίνει «ακριβώς». Είναι 3 ακριβώς.',
      en: 'The short hand tells the hour: it points at 3. The long hand at 12 means “o\'clock”. It is 3 o\'clock.',
    },
  },
  {
    q: { el: 'Η Ελένη ξυπνάει στις 7 ακριβώς. Πού δείχνει ο μικρός δείκτης;', en: 'Eleni wakes up at 7 o\'clock. Where does the short hand point?' },
    options: { el: ['Στο 12', 'Στο 6', 'Στο 7', 'Στο 8'], en: ['At 12', 'At 6', 'At 7', 'At 8'] },
    correct: 2,
    explanation: {
      el: 'Στις 7 ακριβώς ο μικρός δείκτης δείχνει το 7 και ο μεγάλος το 12.',
      en: 'At 7 o\'clock the short hand points at 7 and the long hand at 12.',
    },
  },
];
