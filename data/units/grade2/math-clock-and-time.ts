/**
 * Β' Δημοτικού · Μαθηματικά · Ρολόι και χρόνος
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Order, easiest to hardest:
 *   1–4   reading the clock: o'clock and half past, which hand is which
 *   5–7   hours and minutes: 60 minutes, half an hour, a day has 24 hours
 *   8–11  days of the week and months of the year
 *   12–15 elapsed time: "how long until", "what time will it be"
 *   16–18 numbers up to 1000: reading, place value, counting in hundreds
 * Distractors are the real slips: swapping the hands, 100 minutes in an hour,
 * counting the wrong way round the week, mixing hundreds with tens.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_CLOCK_AND_TIME: QuizQuestion[] = [
  // ── 1–4: reading the clock ─────────────────────────────────────────────────
  {
    q: { el: 'Ο μικρός δείκτης του ρολογιού δείχνει…', en: 'The short hand of the clock shows the…' },
    options: { el: ['τα λεπτά', 'την ώρα', 'τα δευτερόλεπτα', 'τις μέρες'], en: ['minutes', 'hour', 'seconds', 'days'] },
    correct: 1,
    explanation: {
      el: 'Ο μικρός δείκτης δείχνει την ώρα. Ο μεγάλος δείκτης δείχνει τα λεπτά.',
      en: 'The short hand shows the hour. The long hand shows the minutes.',
    },
  },
  {
    q: { el: 'Ο μεγάλος δείκτης είναι στο 12 και ο μικρός στο 3. Τι ώρα είναι;', en: 'The long hand is on 12 and the short hand is on 3. What time is it?' },
    options: { el: ['12 ακριβώς', '3 ακριβώς', '3 και μισή', '12 και μισή'], en: ['12 o\'clock', '3 o\'clock', 'half past 3', 'half past 12'] },
    correct: 1,
    explanation: {
      el: 'Όταν ο μεγάλος δείκτης είναι στο 12, η ώρα είναι «ακριβώς». Ο μικρός δείχνει 3, άρα είναι 3 ακριβώς.',
      en: 'When the long hand is on 12, it is "o\'clock". The short hand says 3, so it is 3 o\'clock.',
    },
  },
  {
    q: { el: 'Ο μεγάλος δείκτης είναι στο 6. Τι ώρα είναι;', en: 'The long hand is on 6. What time is it?' },
    options: { el: ['κάτι ακριβώς', 'κάτι και μισή', 'κάτι και τέταρτο', '6 ακριβώς'], en: ['something o\'clock', 'half past something', 'quarter past something', '6 o\'clock'] },
    correct: 1,
    explanation: {
      el: 'Όταν ο μεγάλος δείκτης είναι στο 6, έχει περάσει μισή ώρα. Λέμε «και μισή».',
      en: 'When the long hand is on 6, half an hour has passed. We say "half past".',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 7 και μισή. Πού είναι ο μεγάλος δείκτης;', en: 'The clock shows half past 7. Where is the long hand?' },
    options: { el: ['στο 12', 'στο 7', 'στο 6', 'στο 3'], en: ['on 12', 'on 7', 'on 6', 'on 3'] },
    correct: 2,
    explanation: {
      el: 'Στο «και μισή» ο μεγάλος δείκτης είναι πάντα στο 6. Ο μικρός είναι ανάμεσα στο 7 και στο 8.',
      en: 'At "half past" the long hand is always on 6. The short hand is between 7 and 8.',
    },
  },

  // ── 5–7: hours and minutes ─────────────────────────────────────────────────
  {
    q: { el: 'Πόσα λεπτά έχει μία ώρα;', en: 'How many minutes are in one hour?' },
    options: { el: ['100', '30', '60', '12'], en: ['100', '30', '60', '12'] },
    correct: 2,
    explanation: {
      el: 'Μία ώρα έχει 60 λεπτά. Ο μεγάλος δείκτης κάνει έναν ολόκληρο γύρο σε 60 λεπτά.',
      en: 'One hour has 60 minutes. The long hand goes all the way round in 60 minutes.',
    },
  },
  {
    q: { el: 'Πόσα λεπτά είναι η μισή ώρα;', en: 'How many minutes are in half an hour?' },
    options: { el: ['50', '30', '15', '6'], en: ['50', '30', '15', '6'] },
    correct: 1,
    explanation: {
      el: 'Η ώρα έχει 60 λεπτά. Η μισή ώρα είναι τα μισά: 30 λεπτά.',
      en: 'An hour has 60 minutes. Half an hour is half of that: 30 minutes.',
    },
  },
  {
    q: { el: 'Πόσες ώρες έχει μία μέρα;', en: 'How many hours are in one day?' },
    options: { el: ['12', '60', '24', '7'], en: ['12', '60', '24', '7'] },
    correct: 2,
    explanation: {
      el: 'Μία μέρα έχει 24 ώρες. Το ρολόι δείχνει 12, γιατί κάνει δύο γύρους σε μία μέρα.',
      en: 'One day has 24 hours. The clock only shows 12 because it goes round twice in a day.',
    },
  },

  // ── 8–11: days and months ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσες μέρες έχει μία εβδομάδα;', en: 'How many days are in one week?' },
    options: { el: ['5', '7', '10', '12'], en: ['5', '7', '10', '12'] },
    correct: 1,
    explanation: {
      el: 'Η εβδομάδα έχει 7 μέρες: 5 μέρες σχολείο και 2 μέρες Σαββατοκύριακο.',
      en: 'A week has 7 days: 5 school days and 2 weekend days.',
    },
  },
  {
    q: { el: 'Σήμερα είναι Τρίτη. Τι μέρα είναι αύριο;', en: 'Today is Tuesday. What day is it tomorrow?' },
    options: { el: ['Δευτέρα', 'Πέμπτη', 'Τετάρτη', 'Παρασκευή'], en: ['Monday', 'Thursday', 'Wednesday', 'Friday'] },
    correct: 2,
    explanation: {
      el: 'Οι μέρες πάνε με τη σειρά: Δευτέρα, Τρίτη, Τετάρτη. Μετά την Τρίτη έρχεται η Τετάρτη.',
      en: 'The days go in order: Monday, Tuesday, Wednesday. After Tuesday comes Wednesday.',
    },
  },
  {
    q: { el: 'Πόσους μήνες έχει ένας χρόνος;', en: 'How many months are in one year?' },
    options: { el: ['7', '10', '24', '12'], en: ['7', '10', '24', '12'] },
    correct: 3,
    explanation: {
      el: 'Ο χρόνος έχει 12 μήνες. Αρχίζει με τον Ιανουάριο και τελειώνει με τον Δεκέμβριο.',
      en: 'A year has 12 months. It starts with January and ends with December.',
    },
  },
  {
    q: { el: 'Ποιος μήνας έρχεται μετά τον Μάρτιο;', en: 'Which month comes after March?' },
    options: { el: ['Φεβρουάριος', 'Απρίλιος', 'Μάιος', 'Ιούνιος'], en: ['February', 'April', 'May', 'June'] },
    correct: 1,
    explanation: {
      el: 'Μάρτιος, Απρίλιος, Μάιος. Μετά τον Μάρτιο έρχεται ο Απρίλιος.',
      en: 'March, April, May. After March comes April.',
    },
  },

  // ── 12–15: elapsed time ────────────────────────────────────────────────────
  {
    q: { el: 'Είναι 4 ακριβώς. Τι ώρα θα είναι σε 1 ώρα;', en: 'It is 4 o\'clock. What time will it be in 1 hour?' },
    options: { el: ['3 ακριβώς', '5 ακριβώς', '4 και μισή', '6 ακριβώς'], en: ['3 o\'clock', '5 o\'clock', 'half past 4', '6 o\'clock'] },
    correct: 1,
    explanation: {
      el: 'Σε 1 ώρα ο μικρός δείκτης πάει στον επόμενο αριθμό: 4 + 1 = 5. Θα είναι 5 ακριβώς.',
      en: 'In 1 hour the short hand moves to the next number: 4 + 1 = 5. It will be 5 o\'clock.',
    },
  },
  {
    q: { el: 'Είναι 2 ακριβώς. Τι ώρα θα είναι σε μισή ώρα;', en: 'It is 2 o\'clock. What time will it be in half an hour?' },
    options: { el: ['3 ακριβώς', '2 και μισή', '1 και μισή', '3 και μισή'], en: ['3 o\'clock', 'half past 2', 'half past 1', 'half past 3'] },
    correct: 1,
    explanation: {
      el: 'Από τις 2 ακριβώς, μετά από μισή ώρα είναι 2 και μισή. Ο μεγάλος δείκτης πάει από το 12 στο 6.',
      en: 'From 2 o\'clock, half an hour later it is half past 2. The long hand moves from 12 to 6.',
    },
  },
  {
    q: { el: 'Ο Νίκος ξεκίνησε να παίζει στις 3 ακριβώς και σταμάτησε στις 5 ακριβώς. Πόση ώρα έπαιξε;', en: 'Nikos started playing at 3 o\'clock and stopped at 5 o\'clock. How long did he play?' },
    options: { el: ['1 ώρα', '2 ώρες', '3 ώρες', '8 ώρες'], en: ['1 hour', '2 hours', '3 hours', '8 hours'] },
    correct: 1,
    explanation: {
      el: 'Από τις 3 μέχρι τις 5 είναι 2 ώρες: 3 → 4 → 5. Μετράμε τα βήματα, όχι τους αριθμούς.',
      en: 'From 3 to 5 is 2 hours: 3 → 4 → 5. We count the steps, not the numbers.',
    },
  },
  {
    q: { el: 'Η Ελένη φεύγει για το σχολείο στις 7 και μισή και φτάνει στις 8 ακριβώς. Πόσα λεπτά κάνει;', en: 'Eleni leaves for school at half past 7 and arrives at 8 o\'clock. How many minutes does it take?' },
    options: { el: ['60 λεπτά', '30 λεπτά', '15 λεπτά', '50 λεπτά'], en: ['60 minutes', '30 minutes', '15 minutes', '50 minutes'] },
    correct: 1,
    explanation: {
      el: 'Από «7 και μισή» μέχρι «8 ακριβώς» είναι μισή ώρα, δηλαδή 30 λεπτά.',
      en: 'From "half past 7" to "8 o\'clock" is half an hour, that is 30 minutes.',
    },
  },

  // ── 16–18: numbers up to 1000 ──────────────────────────────────────────────
  {
    q: { el: 'Πώς γράφουμε τον αριθμό «τριακόσια σαράντα δύο»;', en: 'How do we write the number "three hundred and forty-two"?' },
    options: { el: ['3.042', '342', '324', '3.402'], en: ['3,042', '342', '324', '3,402'] },
    correct: 1,
    explanation: {
      el: 'Τριακόσια = 3 εκατοντάδες, σαράντα = 4 δεκάδες, δύο = 2 μονάδες. Γράφουμε 342.',
      en: 'Three hundred = 3 hundreds, forty = 4 tens, two = 2 ones. We write 342.',
    },
  },
  {
    q: { el: 'Στον αριθμό 586, τι δείχνει το 5;', en: 'In the number 586, what does the 5 show?' },
    options: { el: ['5 μονάδες', '5 δεκάδες', '5 εκατοντάδες', '5 χιλιάδες'], en: ['5 ones', '5 tens', '5 hundreds', '5 thousands'] },
    correct: 2,
    explanation: {
      el: 'Στο 586 το 5 είναι πρώτο, άρα είναι οι εκατοντάδες: 500. Το 8 είναι δεκάδες και το 6 μονάδες.',
      en: 'In 586 the 5 comes first, so it is the hundreds: 500. The 8 is tens and the 6 is ones.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 700 + 100;', en: 'What is 700 + 100?' },
    options: { el: ['710', '800', '701', '1.000'], en: ['710', '800', '701', '1,000'] },
    correct: 1,
    explanation: {
      el: '700 + 100 = 800. Μετράμε ανά εκατό: 700, 800. Μία εκατοντάδα παραπάνω.',
      en: '700 + 100 = 800. Count in hundreds: 700, 800. One more hundred.',
    },
  },
];
