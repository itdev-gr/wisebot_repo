/**
 * Δ' Δημοτικού · Αγγλικά · Ώρα, Μήνες & Γενέθλια — "Time, Months & Birthdays"
 * ============================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 9–10 learning English.
 *
 * What the unit covers, in order:
 *   1–4   the months: names, order, "twelve months", the missing month
 *   5–8   ordinal numbers: 1st, 2nd, 3rd, 21st (the endings children mix up)
 *   9     reading a date aloud: "the tenth of May"
 *   10–14 telling the time: o'clock, half past, quarter past, quarter to, ten past
 *   15–18 the questions "What time is it?" / "When is your birthday?", on/in with dates
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_TIME_AND_DATES: QuizQuestion[] = [
  // ── 1–4: the months ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Ιανουάριος» στα αγγλικά;', en: 'How do you say «Ιανουάριος» in English?' },
    options: { el: ['January', 'June', 'July', 'May'], en: ['January', 'June', 'July', 'May'] },
    correct: 0,
    explanation: {
      el: 'Ιανουάριος = January. Είναι ο πρώτος μήνας του χρόνου. Προσοχή: June = Ιούνιος, July = Ιούλιος.',
      en: 'Ιανουάριος = January. It is the first month of the year. Careful: June and July are summer months.',
    },
  },
  {
    q: { el: 'Ποιος μήνας έρχεται αμέσως μετά τον March;', en: 'Which month comes right after March?' },
    options: { el: ['May', 'April', 'February', 'June'], en: ['May', 'April', 'February', 'June'] },
    correct: 1,
    explanation: {
      el: 'Μετά τον March (Μάρτιο) έρχεται ο April (Απρίλιος). Θυμήσου τη σειρά: March, April, May.',
      en: 'After March comes April. Remember the order: March, April, May.',
    },
  },
  {
    q: { el: 'How many months are there in a year?', en: 'How many months are there in a year?' },
    options: { el: ['ten', 'eleven', 'twelve', 'twenty'], en: ['ten', 'eleven', 'twelve', 'twenty'] },
    correct: 2,
    explanation: {
      el: 'Ο χρόνος έχει δώδεκα μήνες: twelve months. Από τον January μέχρι τον December.',
      en: 'A year has twelve months, from January to December.',
    },
  },
  {
    q: { el: 'Ποιος μήνας λείπει; September, ___, November', en: 'Which month is missing? September, ___, November' },
    options: { el: ['August', 'December', 'July', 'October'], en: ['August', 'December', 'July', 'October'] },
    correct: 3,
    explanation: {
      el: 'Ανάμεσα στον September (Σεπτέμβριο) και τον November (Νοέμβριο) είναι ο October (Οκτώβριος).',
      en: 'Between September and November comes October.',
    },
  },

  // ── 5–8: ordinal numbers ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς γράφουμε «πρώτος» με αριθμό στα αγγλικά;', en: 'How do we write «πρώτος» (first) as a number in English?' },
    options: { el: ['1th', '1nd', '1st', '1rd'], en: ['1th', '1nd', '1st', '1rd'] },
    correct: 2,
    explanation: {
      el: 'first = 1st. Παίρνουμε τα δύο τελευταία γράμματα της λέξης: fir-st → 1st.',
      en: 'first = 1st. We take the last two letters of the word: fir-st → 1st.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε «δεύτερος» με αριθμό στα αγγλικά;', en: 'How do we write «δεύτερος» (second) as a number in English?' },
    options: { el: ['2st', '2nd', '2th', '2rd'], en: ['2st', '2nd', '2th', '2rd'] },
    correct: 1,
    explanation: {
      el: 'second = 2nd. Τα δύο τελευταία γράμματα: seco-nd → 2nd.',
      en: 'second = 2nd. The last two letters: seco-nd → 2nd.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε «τρίτος» με αριθμό στα αγγλικά;', en: 'How do we write «τρίτος» (third) as a number in English?' },
    options: { el: ['3th', '3st', '3rd', '3nd'], en: ['3th', '3st', '3rd', '3nd'] },
    correct: 2,
    explanation: {
      el: 'third = 3rd. Τα δύο τελευταία γράμματα: thi-rd → 3rd. Από το 4 και μετά βάζουμε -th: 4th, 5th, 6th…',
      en: 'third = 3rd. The last two letters: thi-rd → 3rd. From 4 on we add -th: 4th, 5th, 6th…',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει γενέθλια στις 21 Απριλίου. Πώς γράφουμε το «21» ως τακτικό αριθμό;', en: 'George\'s birthday is on 21 April. How do we write «21» as an ordinal number?' },
    options: { el: ['21th', '21st', '21nd', '21rd'], en: ['21th', '21st', '21nd', '21rd'] },
    correct: 1,
    explanation: {
      el: 'twenty-first = 21st. Όταν ο αριθμός τελειώνει σε 1, 2 ή 3, βάζουμε -st, -nd, -rd: 21st, 22nd, 23rd. (Εξαίρεση: 11th, 12th, 13th.)',
      en: 'twenty-first = 21st. When a number ends in 1, 2 or 3 we use -st, -nd, -rd: 21st, 22nd, 23rd. (Exception: 11th, 12th, 13th.)',
    },
  },

  // ── 9: reading a date ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς διαβάζουμε την ημερομηνία «10 May» στα αγγλικά;', en: 'How do we read the date «10 May» in English?' },
    options: { el: ['the ten of May', 'May the ten', 'tenth May of', 'the tenth of May'], en: ['the ten of May', 'May the ten', 'tenth May of', 'the tenth of May'] },
    correct: 3,
    explanation: {
      el: 'Τις ημερομηνίες τις λέμε με τακτικό αριθμό: the tenth of May (η δέκατη του Μαΐου). Βάζουμε «the» μπροστά και «of» πριν τον μήνα.',
      en: 'We say dates with an ordinal number: the tenth of May. We put “the” before the number and “of” before the month.',
    },
  },

  // ── 10–14: telling the time ────────────────────────────────────────────────
  {
    q: { el: 'Το ρολόι δείχνει 3:00. Τι ώρα είναι;', en: 'The clock shows 3:00. What time is it?' },
    options: { el: ['It\'s three o\'clock.', 'It\'s three past.', 'It\'s o\'clock three.', 'It\'s three hours.'], en: ['It\'s three o\'clock.', 'It\'s three past.', 'It\'s o\'clock three.', 'It\'s three hours.'] },
    correct: 0,
    explanation: {
      el: 'Όταν ο λεπτοδείκτης είναι στο 12, λέμε «o\'clock»: It\'s three o\'clock = Είναι τρεις ακριβώς.',
      en: 'When the minute hand is on 12, we say “o\'clock”: It\'s three o\'clock.',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 7:30. Τι ώρα είναι;', en: 'The clock shows 7:30. What time is it?' },
    options: { el: ['It\'s half to seven.', 'It\'s seven past half.', 'It\'s half past seven.', 'It\'s half past eight.'], en: ['It\'s half to seven.', 'It\'s seven past half.', 'It\'s half past seven.', 'It\'s half past eight.'] },
    correct: 2,
    explanation: {
      el: '7:30 = half past seven (μισή ώρα μετά τις εφτά). Λέμε πρώτα «half past» και μετά την ώρα που πέρασε.',
      en: '7:30 = half past seven. We say “half past” and then the hour that has gone by.',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 4:15. Τι ώρα είναι;', en: 'The clock shows 4:15. What time is it?' },
    options: { el: ['It\'s a quarter to four.', 'It\'s a quarter past four.', 'It\'s fifteen to four.', 'It\'s four past a quarter.'], en: ['It\'s a quarter to four.', 'It\'s a quarter past four.', 'It\'s fifteen to four.', 'It\'s four past a quarter.'] },
    correct: 1,
    explanation: {
      el: '4:15 = a quarter past four (τέσσερις και τέταρτο). Τα 15 λεπτά είναι ένα τέταρτο της ώρας.',
      en: '4:15 = a quarter past four. 15 minutes is a quarter of an hour.',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 8:45. Τι ώρα είναι;', en: 'The clock shows 8:45. What time is it?' },
    options: { el: ['It\'s a quarter past eight.', 'It\'s a quarter to eight.', 'It\'s a quarter to nine.', 'It\'s a quarter past nine.'], en: ['It\'s a quarter past eight.', 'It\'s a quarter to eight.', 'It\'s a quarter to nine.', 'It\'s a quarter past nine.'] },
    correct: 2,
    explanation: {
      el: '8:45 = a quarter to nine (εννιά παρά τέταρτο). Μετά τη μισή ώρα λέμε «to» και την ΕΠΟΜΕΝΗ ώρα.',
      en: '8:45 = a quarter to nine. After half past, we say “to” and the NEXT hour.',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 6:10. Τι ώρα είναι;', en: 'The clock shows 6:10. What time is it?' },
    options: { el: ['It\'s ten to six.', 'It\'s six past ten.', 'It\'s ten past seven.', 'It\'s ten past six.'], en: ['It\'s ten to six.', 'It\'s six past ten.', 'It\'s ten past seven.', 'It\'s ten past six.'] },
    correct: 3,
    explanation: {
      el: '6:10 = ten past six (έξι και δέκα). Πρώτα τα λεπτά, μετά «past», μετά η ώρα.',
      en: '6:10 = ten past six. First the minutes, then “past”, then the hour.',
    },
  },

  // ── 15–18: asking the time and the birthday ────────────────────────────────
  {
    q: { el: 'Η Μαρία θέλει να μάθει τι ώρα είναι. Τι ρωτάει;', en: 'Maria wants to know the time. What does she ask?' },
    options: { el: ['What time is it?', 'How time is it?', 'What hour is?', 'When is it?'], en: ['What time is it?', 'How time is it?', 'What hour is?', 'When is it?'] },
    correct: 0,
    explanation: {
      el: 'Για την ώρα ρωτάμε «What time is it?» (Τι ώρα είναι;). Η απάντηση αρχίζει με «It\'s…».',
      en: 'To ask the time we say “What time is it?”. The answer starts with “It\'s…”.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: My birthday is ___ the second of March.', en: 'Complete: My birthday is ___ the second of March.' },
    options: { el: ['in', 'at', 'on', 'of'], en: ['in', 'at', 'on', 'of'] },
    correct: 2,
    explanation: {
      el: 'Με ολόκληρη ημερομηνία βάζουμε «on»: on the second of March. Με σκέτο μήνα βάζουμε «in»: in March.',
      en: 'With a full date we use “on”: on the second of March. With just the month we use “in”: in March.',
    },
  },
  {
    q: { el: 'Ο Νίκος ρωτάει: «When is your birthday?» Ποια απάντηση είναι σωστή;', en: 'Nikos asks: «When is your birthday?» Which answer is correct?' },
    options: { el: ['It\'s at August.', 'It\'s in August.', 'It\'s on August.', 'It\'s August o\'clock.'], en: ['It\'s at August.', 'It\'s in August.', 'It\'s on August.', 'It\'s August o\'clock.'] },
    correct: 1,
    explanation: {
      el: 'Όταν λέμε μόνο τον μήνα, βάζουμε «in»: It\'s in August (Είναι τον Αύγουστο). Το «o\'clock» είναι μόνο για την ώρα.',
      en: 'When we say only the month, we use “in”: It\'s in August. “O\'clock” is only for the time.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την ερώτηση: «___ is your birthday?» — «It\'s on the 25th of December.»', en: 'Complete the question: «___ is your birthday?» — «It\'s on the 25th of December.»' },
    options: { el: ['What', 'When', 'Where', 'What time'], en: ['What', 'When', 'Where', 'What time'] },
    correct: 1,
    explanation: {
      el: 'Η απάντηση είναι ημερομηνία, άρα ρωτάμε «When» (Πότε): When is your birthday? Το «What time» είναι για την ώρα, το «Where» για το μέρος.',
      en: 'The answer is a date, so we ask “When”: When is your birthday? “What time” asks about the clock, “Where” asks about a place.',
    },
  },
];
