/**
 * Δ' Δημοτικού · Μαθηματικά · Χρόνος & διάρκεια
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 9–10. Times are written digitally (10:40, 18:30) as on a school timetable.
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–4   hours, minutes, seconds: 1 h = 60 min, 1 min = 60 s, 90 min = 1 h 30 min, 2 h 15 min = 135 min
 *   5–8   the 24-hour clock: 3 μ.μ. = 15:00, 20:30, 00:15, 9 το βράδυ = 21:00
 *   9–12  elapsed time across the hour: end time, duration, a film of 1 h 45 min
 *   13–15 reading a bus timetable: journey length, the next bus, waiting time
 *   16–18 days, weeks, months, years: 365 days, 3 weeks = 21 days, 48 hours = 2 days
 *
 * Distractors are the mistakes children actually make: treating time as base 10
 * (90 min = 1 h 50 min, 10:40 + 35 = 10:75, 9:20 − 8:50 = 70 min), forgetting to add 12
 * for the afternoon, 1 year = 360 days. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_TIME_AND_DURATION: QuizQuestion[] = [
  // ── 1–4: hours, minutes, seconds ──────────────────────────────────────────
  {
    q: { el: 'Πόσα λεπτά έχει μία ώρα;', en: 'How many minutes are in one hour?' },
    options: { el: ['100', '60', '24', '30'], en: ['100', '60', '24', '30'] },
    correct: 1,
    explanation: {
      el: 'Μία ώρα έχει 60 λεπτά. Ο λεπτοδείκτης κάνει έναν ολόκληρο γύρο (60 γραμμούλες) για να περάσει μία ώρα.',
      en: 'One hour has 60 minutes. The minute hand makes one full turn (60 little marks) for one hour to pass.',
    },
  },
  {
    q: { el: 'Πόσα δευτερόλεπτα έχει ένα λεπτό;', en: 'How many seconds are in one minute?' },
    options: { el: ['60', '100', '24', '12'], en: ['60', '100', '24', '12'] },
    correct: 0,
    explanation: {
      el: 'Ένα λεπτό έχει 60 δευτερόλεπτα. Μέτρα αργά «ένα, δύο, τρία…» ως το 60 και πέρασε ένα λεπτό!',
      en: 'One minute has 60 seconds. Count slowly “one, two, three…” up to 60 and a minute has gone by!',
    },
  },
  {
    q: { el: '90 λεπτά είναι το ίδιο με…', en: 'What is 90 minutes the same as?' },
    options: { el: ['1 ώρα και 30 λεπτά', '1 ώρα και 50 λεπτά', '2 ώρες', '9 ώρες'], en: ['1 hour and 30 minutes', '1 hour and 50 minutes', '2 hours', '9 hours'] },
    correct: 0,
    explanation: {
      el: 'Μία ώρα είναι 60 λεπτά. 90 − 60 = 30, άρα 90 λεπτά = 1 ώρα και 30 λεπτά (μιάμιση ώρα).',
      en: 'One hour is 60 minutes. 90 − 60 = 30, so 90 minutes = 1 hour and 30 minutes (an hour and a half).',
    },
  },
  {
    q: { el: 'Πόσα λεπτά είναι 2 ώρες και 15 λεπτά;', en: 'How many minutes are 2 hours and 15 minutes?' },
    options: { el: ['215', '135', '125', '150'], en: ['215', '135', '125', '150'] },
    correct: 1,
    explanation: {
      el: '2 ώρες = 2 × 60 = 120 λεπτά. Μαζί με τα 15: 120 + 15 = 135 λεπτά.',
      en: '2 hours = 2 × 60 = 120 minutes. Together with the 15: 120 + 15 = 135 minutes.',
    },
  },

  // ── 5–8: the 24-hour clock ────────────────────────────────────────────────
  {
    q: { el: 'Στο 24ωρο ρολόι, η ώρα 3 το απόγευμα γράφεται…', en: 'On the 24-hour clock, how is 3 in the afternoon written?' },
    options: { el: ['3:00', '13:00', '15:00', '23:00'], en: ['3:00', '13:00', '15:00', '23:00'] },
    correct: 2,
    explanation: {
      el: 'Μετά το μεσημέρι προσθέτουμε 12: 3 + 12 = 15, άρα 15:00. Το 3:00 είναι 3 τη νύχτα!',
      en: 'After midday we add 12: 3 + 12 = 15, so 15:00. 3:00 is 3 at night!',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 20:30. Τι ώρα είναι;', en: 'The clock shows 20:30. What time is it?' },
    options: { el: ['8 και μισή το πρωί', '10 και μισή το βράδυ', '2 και μισή το απόγευμα', '8 και μισή το βράδυ'], en: ['half past 8 in the morning', 'half past 10 at night', 'half past 2 in the afternoon', 'half past 8 in the evening'] },
    correct: 3,
    explanation: {
      el: 'Αφαιρούμε 12: 20 − 12 = 8. Άρα 20:30 είναι 8 και μισή το βράδυ. Οι ώρες πάνω από 12 είναι πάντα απόγευμα ή βράδυ.',
      en: 'We take away 12: 20 − 12 = 8. So 20:30 is half past 8 in the evening. Hours above 12 are always afternoon or evening.',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 00:15. Τι ώρα είναι;', en: 'The clock shows 00:15. What time is it?' },
    options: { el: ['12 και τέταρτο το μεσημέρι', '12 και τέταρτο μετά τα μεσάνυχτα', '12 παρά τέταρτο', '1 και τέταρτο το πρωί'], en: ['quarter past 12 at midday', 'quarter past 12 after midnight', 'quarter to 12', 'quarter past 1 in the morning'] },
    correct: 1,
    explanation: {
      el: 'Η μέρα στο 24ωρο ρολόι αρχίζει στις 00:00, τα μεσάνυχτα. Άρα 00:15 είναι 15 λεπτά μετά τα μεσάνυχτα. Το μεσημέρι είναι 12:00.',
      en: 'The day on the 24-hour clock starts at 00:00, midnight. So 00:15 is 15 minutes after midnight. Midday is 12:00.',
    },
  },
  {
    q: { el: 'Ο Νίκος πάει για ύπνο στις 9 το βράδυ. Πώς γράφεται η ώρα στο 24ωρο ρολόι;', en: 'Nikos goes to bed at 9 in the evening. How is that time written on the 24-hour clock?' },
    options: { el: ['9:00', '19:00', '21:00', '11:00'], en: ['9:00', '19:00', '21:00', '11:00'] },
    correct: 2,
    explanation: {
      el: '9 το βράδυ: 9 + 12 = 21, άρα 21:00. Το 19:00 είναι 7 το απόγευμα.',
      en: '9 in the evening: 9 + 12 = 21, so 21:00. 19:00 is 7 in the evening.',
    },
  },

  // ── 9–12: elapsed time across the hour ────────────────────────────────────
  {
    q: { el: 'Η γυμναστική αρχίζει στις 10:40 και κρατάει 35 λεπτά. Τι ώρα τελειώνει;', en: 'PE starts at 10:40 and lasts 35 minutes. What time does it finish?' },
    options: { el: ['11:05', '11:15', '11:25', '10:75'], en: ['11:05', '11:15', '11:25', '10:75'] },
    correct: 1,
    explanation: {
      el: 'Από τις 10:40 θέλουμε 20 λεπτά για τις 11:00. Μένουν 35 − 20 = 15 λεπτά: 11:15. Το «10:75» δεν υπάρχει, γιατί η ώρα έχει μόνο 60 λεπτά!',
      en: 'From 10:40 we need 20 minutes to reach 11:00. That leaves 35 − 20 = 15 minutes: 11:15. “10:75” does not exist, because an hour only has 60 minutes!',
    },
  },
  {
    q: { el: 'Το μάθημα άρχισε στις 8:50 και τελείωσε στις 9:20. Πόσο κράτησε;', en: 'The lesson started at 8:50 and finished at 9:20. How long did it last?' },
    options: { el: ['70 λεπτά', '40 λεπτά', '20 λεπτά', '30 λεπτά'], en: ['70 minutes', '40 minutes', '20 minutes', '30 minutes'] },
    correct: 3,
    explanation: {
      el: 'Από τις 8:50 ως τις 9:00 είναι 10 λεπτά και από τις 9:00 ως τις 9:20 άλλα 20. Σύνολο 10 + 20 = 30 λεπτά.',
      en: 'From 8:50 to 9:00 is 10 minutes, and from 9:00 to 9:20 another 20. In total 10 + 20 = 30 minutes.',
    },
  },
  {
    q: { el: 'Μια ταινία αρχίζει στις 18:30 και κρατάει 1 ώρα και 45 λεπτά. Τι ώρα τελειώνει;', en: 'A film starts at 18:30 and lasts 1 hour and 45 minutes. What time does it finish?' },
    options: { el: ['20:45', '19:45', '20:15', '20:05'], en: ['20:45', '19:45', '20:15', '20:05'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα η ώρα: 18:30 + 1 ώρα = 19:30. Μετά τα 45 λεπτά: 19:30 + 30 = 20:00 και + 15 = 20:15.',
      en: 'First the hour: 18:30 + 1 hour = 19:30. Then the 45 minutes: 19:30 + 30 = 20:00 and + 15 = 20:15.',
    },
  },
  {
    q: { el: 'Η Μαρία ξεκίνησε για το σχολείο στις 7:15 και έφτασε στις 8:05. Πόσο κράτησε η διαδρομή;', en: 'Maria left for school at 7:15 and arrived at 8:05. How long did the journey take?' },
    options: { el: ['50 λεπτά', '1 ώρα και 10 λεπτά', '40 λεπτά', '90 λεπτά'], en: ['50 minutes', '1 hour and 10 minutes', '40 minutes', '90 minutes'] },
    correct: 0,
    explanation: {
      el: 'Από τις 7:15 ως τις 8:00 είναι 45 λεπτά και ως τις 8:05 άλλα 5. Σύνολο 45 + 5 = 50 λεπτά.',
      en: 'From 7:15 to 8:00 is 45 minutes, and to 8:05 another 5. In total 45 + 5 = 50 minutes.',
    },
  },

  // ── 13–15: reading a timetable ────────────────────────────────────────────
  {
    q: { el: 'Πρόγραμμα λεωφορείου: αναχώρηση 7:30 – άφιξη 8:10, αναχώρηση 9:00 – άφιξη 9:40, αναχώρηση 10:15 – άφιξη 10:55. Πόσο κρατάει η διαδρομή του λεωφορείου των 7:30;', en: 'Bus timetable: departs 7:30 – arrives 8:10, departs 9:00 – arrives 9:40, departs 10:15 – arrives 10:55. How long does the 7:30 bus journey take?' },
    options: { el: ['30 λεπτά', '80 λεπτά', '1 ώρα', '40 λεπτά'], en: ['30 minutes', '80 minutes', '1 hour', '40 minutes'] },
    correct: 3,
    explanation: {
      el: 'Από τις 7:30 ως τις 8:00 είναι 30 λεπτά και ως τις 8:10 άλλα 10: 40 λεπτά. Το ίδιο κρατούν και τα άλλα δύο δρομολόγια!',
      en: 'From 7:30 to 8:00 is 30 minutes, and to 8:10 another 10: 40 minutes. The other two journeys take the same!',
    },
  },
  {
    q: { el: 'Πρόγραμμα λεωφορείου: αναχωρήσεις 7:30, 9:00 και 10:15. Ο Γιώργος φτάνει στη στάση στις 9:10. Ποιο είναι το επόμενο λεωφορείο που μπορεί να πάρει;', en: 'Bus timetable: departures at 7:30, 9:00 and 10:15. Giorgos gets to the bus stop at 9:10. Which is the next bus he can take?' },
    options: { el: ['το λεωφορείο των 7:30', 'το λεωφορείο των 9:00', 'το λεωφορείο των 10:15', 'κανένα'], en: ['the 7:30 bus', 'the 9:00 bus', 'the 10:15 bus', 'none'] },
    correct: 2,
    explanation: {
      el: 'Στις 9:10 το λεωφορείο των 9:00 έχει ήδη φύγει πριν από 10 λεπτά. Το επόμενο είναι στις 10:15.',
      en: 'At 9:10 the 9:00 bus has already left, 10 minutes ago. The next one is at 10:15.',
    },
  },
  {
    q: { el: 'Ο Γιώργος φτάνει στη στάση στις 9:10 και το επόμενο λεωφορείο φεύγει στις 10:15. Πόση ώρα θα περιμένει;', en: 'Giorgos gets to the bus stop at 9:10 and the next bus leaves at 10:15. How long will he wait?' },
    options: { el: ['1 ώρα και 5 λεπτά', '55 λεπτά', '1 ώρα και 15 λεπτά', '45 λεπτά'], en: ['1 hour and 5 minutes', '55 minutes', '1 hour and 15 minutes', '45 minutes'] },
    correct: 0,
    explanation: {
      el: 'Από τις 9:10 ως τις 10:10 είναι ακριβώς 1 ώρα, και ως τις 10:15 άλλα 5 λεπτά: 1 ώρα και 5 λεπτά.',
      en: 'From 9:10 to 10:10 is exactly 1 hour, and to 10:15 another 5 minutes: 1 hour and 5 minutes.',
    },
  },

  // ── 16–18: days, weeks, months, years ─────────────────────────────────────
  {
    q: { el: 'Πόσες μέρες έχει συνήθως ένας χρόνος;', en: 'How many days does a year usually have?' },
    options: { el: ['360', '366', '52', '365'], en: ['360', '366', '52', '365'] },
    correct: 3,
    explanation: {
      el: 'Ένας χρόνος έχει 365 μέρες, 12 μήνες και 52 εβδομάδες. Κάθε 4 χρόνια ο Φεβρουάριος παίρνει μία μέρα παραπάνω και ο χρόνος έχει 366 (δίσεκτος).',
      en: 'A year has 365 days, 12 months and 52 weeks. Every 4 years February gets one extra day and the year has 366 (a leap year).',
    },
  },
  {
    q: { el: 'Πόσες μέρες έχουν 3 εβδομάδες;', en: 'How many days are in 3 weeks?' },
    options: { el: ['10', '14', '24', '21'], en: ['10', '14', '24', '21'] },
    correct: 3,
    explanation: {
      el: 'Μία εβδομάδα έχει 7 μέρες. 3 × 7 = 21 μέρες.',
      en: 'One week has 7 days. 3 × 7 = 21 days.',
    },
  },
  {
    q: { el: 'Ένα ταξίδι με πλοίο κρατάει 48 ώρες. Πόσες μέρες είναι αυτό;', en: 'A boat trip lasts 48 hours. How many days is that?' },
    options: { el: ['4', '3', '2', '48'], en: ['4', '3', '2', '48'] },
    correct: 2,
    explanation: {
      el: 'Μία μέρα έχει 24 ώρες. 48 ÷ 24 = 2, άρα 48 ώρες = 2 μέρες.',
      en: 'One day has 24 hours. 48 ÷ 24 = 2, so 48 hours = 2 days.',
    },
  },
];
