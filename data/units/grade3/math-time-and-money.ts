/**
 * Γ' Δημοτικού · Μαθηματικά · Ώρα & Χρήμα
 * =========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–4   reading the clock: o'clock, half past, the big hand counts in fives, to 5 minutes
 *   5–7   «και τέταρτο», «παρά τέταρτο», saying a time in words
 *   8–10  elapsed time inside one hour: how long, what time it ends, minutes to the hour
 *   11–13 euro and cents written with a comma (1,50 €), adding coins
 *   14–16 giving change from 1 €, 2 € and 5 €
 *   17–18 shopping problems: several of the same item, buying two things and what is left
 *
 * Distractors are the mistakes children actually make: reading the hands the wrong
 * way round, «παρά» vs «και», treating cents as euros, adding instead of subtracting.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_TIME_AND_MONEY: QuizQuestion[] = [
  // ── 1–4: reading the clock ──────────────────────────────────────────────────
  {
    q: { el: 'Ο μικρός δείκτης δείχνει το 3 και ο μεγάλος δείκτης δείχνει το 12. Τι ώρα είναι;', en: 'The short hand points to 3 and the long hand points to 12. What time is it?' },
    options: { el: ['3 ακριβώς', '12 και τέταρτο', '3 και μισή', '12 και 3'], en: ['3 o\'clock', 'quarter past 12', 'half past 3', '12 and 3'] },
    correct: 0,
    explanation: {
      el: 'Όταν ο μεγάλος δείκτης δείχνει το 12, η ώρα είναι «ακριβώς». Ο μικρός δείκτης λέει ποια ώρα: 3 ακριβώς.',
      en: 'When the long hand points to 12, it is “o\'clock”. The short hand tells us which hour: 3 o\'clock.',
    },
  },
  {
    q: { el: 'Ο μεγάλος δείκτης δείχνει το 6 και ο μικρός δείκτης είναι ανάμεσα στο 7 και στο 8. Τι ώρα είναι;', en: 'The long hand points to 6 and the short hand is between 7 and 8. What time is it?' },
    options: { el: ['6 και 7', '7 και μισή', '8 και μισή', '7 και τέταρτο'], en: ['6 and 7', 'half past 7', 'half past 8', 'quarter past 7'] },
    correct: 1,
    explanation: {
      el: 'Ο μεγάλος δείκτης στο 6 σημαίνει «και μισή». Ο μικρός δείκτης πέρασε το 7 αλλά δεν έφτασε στο 8, άρα είναι 7 και μισή.',
      en: 'The long hand on 6 means “half past”. The short hand has passed 7 but not reached 8, so it is half past 7.',
    },
  },
  {
    q: { el: 'Πόσα λεπτά δείχνει ο μεγάλος δείκτης όταν δείχνει τον αριθμό 4;', en: 'How many minutes does the long hand show when it points to the number 4?' },
    options: { el: ['4 λεπτά', '40 λεπτά', '20 λεπτά', '16 λεπτά'], en: ['4 minutes', '40 minutes', '20 minutes', '16 minutes'] },
    correct: 2,
    explanation: {
      el: 'Για τον μεγάλο δείκτη κάθε αριθμός του ρολογιού αξίζει 5 λεπτά. 4 × 5 = 20 λεπτά.',
      en: 'For the long hand, every number on the clock is worth 5 minutes. 4 × 5 = 20 minutes.',
    },
  },
  {
    q: { el: 'Ο μικρός δείκτης είναι λίγο μετά το 10 και ο μεγάλος δείκτης δείχνει το 2. Τι ώρα είναι;', en: 'The short hand is just past 10 and the long hand points to 2. What time is it?' },
    options: { el: ['10:02', '2:10', '10:20', '10:10'], en: ['10:02', '2:10', '10:20', '10:10'] },
    correct: 3,
    explanation: {
      el: 'Ο μικρός δείκτης λέει την ώρα (10) και ο μεγάλος τα λεπτά: 2 × 5 = 10 λεπτά. Άρα 10:10.',
      en: 'The short hand gives the hour (10) and the long hand the minutes: 2 × 5 = 10 minutes. So it is 10:10.',
    },
  },

  // ── 5–7: quarter past, quarter to, times in words ───────────────────────────
  {
    q: { el: 'Πώς λέμε αλλιώς την ώρα 9:15;', en: 'What is another way to say the time 9:15?' },
    options: { el: ['εννιά παρά τέταρτο', 'εννιά και μισή', 'εννιά και τέταρτο', 'δέκα παρά τέταρτο'], en: ['quarter to nine', 'half past nine', 'quarter past nine', 'quarter to ten'] },
    correct: 2,
    explanation: {
      el: 'Τα 15 λεπτά είναι ένα τέταρτο της ώρας. 9:15 = εννιά και τέταρτο, γιατί πέρασαν 15 λεπτά μετά τις 9.',
      en: '15 minutes is a quarter of an hour. 9:15 = quarter past nine, because 15 minutes have gone by since 9.',
    },
  },
  {
    q: { el: 'Είναι «πέντε παρά τέταρτο». Πώς γράφεται η ώρα στο ψηφιακό ρολόι;', en: 'It is “quarter to five”. How is that time written on a digital clock?' },
    options: { el: ['5:15', '4:45', '5:45', '4:15'], en: ['5:15', '4:45', '5:45', '4:15'] },
    correct: 1,
    explanation: {
      el: '«Παρά τέταρτο» σημαίνει ότι λείπουν 15 λεπτά για τις 5. Είμαστε ακόμα στις 4, στο 45ο λεπτό: 4:45.',
      en: '“Quarter to” means 15 minutes are missing before 5. We are still in the 4 o\'clock hour, at the 45th minute: 4:45.',
    },
  },
  {
    q: { el: 'Τι ώρα είναι «οχτώ και είκοσι πέντε»;', en: 'What time is “twenty-five past eight”?' },
    options: { el: ['8:25', '8:35', '7:25', '8:05'], en: ['8:25', '8:35', '7:25', '8:05'] },
    correct: 0,
    explanation: {
      el: '«Οχτώ και είκοσι πέντε» = 8 η ώρα και 25 λεπτά μετά: 8:25. Ο μεγάλος δείκτης θα δείχνει το 5 (5 × 5 = 25).',
      en: '“Twenty-five past eight” = 8 o\'clock plus 25 minutes: 8:25. The long hand would point to 5 (5 × 5 = 25).',
    },
  },

  // ── 8–10: elapsed time inside one hour ──────────────────────────────────────
  {
    q: { el: 'Η Άννα άρχισε να διαβάζει στις 4:10 και σταμάτησε στις 4:45. Πόση ώρα διάβασε;', en: 'Anna started reading at 4:10 and stopped at 4:45. How long did she read?' },
    options: { el: ['25 λεπτά', '55 λεπτά', '45 λεπτά', '35 λεπτά'], en: ['25 minutes', '55 minutes', '45 minutes', '35 minutes'] },
    correct: 3,
    explanation: {
      el: 'Η ώρα είναι η ίδια (4), άρα αφαιρούμε μόνο τα λεπτά: 45 − 10 = 35 λεπτά.',
      en: 'The hour is the same (4), so we only subtract the minutes: 45 − 10 = 35 minutes.',
    },
  },
  {
    q: { el: 'Το μάθημα αρχίζει στις 10:20 και κρατάει 30 λεπτά. Τι ώρα τελειώνει;', en: 'The lesson starts at 10:20 and lasts 30 minutes. What time does it end?' },
    options: { el: ['10:30', '11:00', '10:50', '10:40'], en: ['10:30', '11:00', '10:50', '10:40'] },
    correct: 2,
    explanation: {
      el: 'Προσθέτουμε τα λεπτά: 20 + 30 = 50. Το μάθημα τελειώνει στις 10:50.',
      en: 'We add the minutes: 20 + 30 = 50. The lesson ends at 10:50.',
    },
  },
  {
    q: { el: 'Το ρολόι δείχνει 6:40. Σε πόσα λεπτά θα είναι 7 ακριβώς;', en: 'The clock shows 6:40. In how many minutes will it be 7 o\'clock?' },
    options: { el: ['40', '20', '60', '30'], en: ['40', '20', '60', '30'] },
    correct: 1,
    explanation: {
      el: 'Μια ώρα έχει 60 λεπτά. Από το 40 μέχρι το 60 λείπουν 60 − 40 = 20 λεπτά.',
      en: 'An hour has 60 minutes. From 40 to 60 there are 60 − 40 = 20 minutes left.',
    },
  },

  // ── 11–13: euro and cents with a comma ──────────────────────────────────────
  {
    q: { el: 'Πώς γράφουμε «ένα ευρώ και πενήντα λεπτά»;', en: 'How do we write “one euro and fifty cents”?' },
    options: { el: ['15,00 €', '150 €', '1,50 €', '0,150 €'], en: ['15,00 €', '150 €', '1,50 €', '0,150 €'] },
    correct: 2,
    explanation: {
      el: 'Πριν από το κόμμα γράφουμε τα ευρώ και μετά τα λεπτά, πάντα με δύο ψηφία: 1,50 €.',
      en: 'Before the comma we write the euros and after it the cents, always with two digits: 1,50 €.',
    },
  },
  {
    q: { el: 'Έχεις ένα κέρμα των 2 € και ένα κέρμα των 50 λεπτών. Πόσα χρήματα έχεις;', en: 'You have one 2 € coin and one 50-cent coin. How much money do you have?' },
    options: { el: ['52 €', '2,50 €', '2,05 €', '7 €'], en: ['52 €', '2,50 €', '2,05 €', '7 €'] },
    correct: 1,
    explanation: {
      el: '2 ευρώ και 50 λεπτά γράφονται 2,50 €. Τα 50 λεπτά είναι το μισό ευρώ, όχι 50 ευρώ!',
      en: '2 euros and 50 cents are written 2,50 €. 50 cents is half a euro, not 50 euros!',
    },
  },
  {
    q: { el: 'Πώς διαβάζουμε το ποσό 3,20 €;', en: 'How do we read the amount 3,20 €?' },
    options: { el: ['32 ευρώ', '3 ευρώ και 2 λεπτά', '20 ευρώ και 3 λεπτά', '3 ευρώ και 20 λεπτά'], en: ['32 euros', '3 euros and 2 cents', '20 euros and 3 cents', '3 euros and 20 cents'] },
    correct: 3,
    explanation: {
      el: 'Αριστερά από το κόμμα είναι τα ευρώ (3) και δεξιά τα λεπτά (20): 3 ευρώ και 20 λεπτά.',
      en: 'Left of the comma are the euros (3) and right of it the cents (20): 3 euros and 20 cents.',
    },
  },

  // ── 14–16: giving change ────────────────────────────────────────────────────
  {
    q: { el: 'Ένα τετράδιο κοστίζει 1,20 €. Δίνεις ένα κέρμα των 2 €. Πόσα ρέστα παίρνεις;', en: 'A notebook costs 1,20 €. You pay with a 2 € coin. How much change do you get?' },
    options: { el: ['0,80 €', '1,20 €', '0,20 €', '1,80 €'], en: ['0,80 €', '1,20 €', '0,20 €', '1,80 €'] },
    correct: 0,
    explanation: {
      el: 'Ρέστα = όσα δίνεις − όσα κοστίζει: 2,00 − 1,20 = 0,80 €. Από το 1,20 μέχρι το 2 λείπουν 80 λεπτά.',
      en: 'Change = what you pay − what it costs: 2,00 − 1,20 = 0,80 €. From 1,20 up to 2 there are 80 cents missing.',
    },
  },
  {
    q: { el: 'Αγοράζεις ένα παγωτό που κοστίζει 1,50 € και δίνεις ένα χαρτονόμισμα των 5 €. Πόσα ρέστα παίρνεις;', en: 'You buy an ice cream that costs 1,50 € and pay with a 5 € note. How much change do you get?' },
    options: { el: ['4,50 €', '3,50 €', '2,50 €', '6,50 €'], en: ['4,50 €', '3,50 €', '2,50 €', '6,50 €'] },
    correct: 1,
    explanation: {
      el: '5,00 − 1,50 = 3,50 €. Σκέψου το έτσι: από το 1,50 στο 2 είναι 50 λεπτά, και από το 2 στο 5 είναι 3 ευρώ.',
      en: '5,00 − 1,50 = 3,50 €. Think of it like this: from 1,50 to 2 is 50 cents, and from 2 to 5 is 3 euros.',
    },
  },
  {
    q: { el: 'Ένας χυμός κοστίζει 70 λεπτά. Δίνεις ένα κέρμα του 1 €. Πόσα ρέστα παίρνεις;', en: 'A juice costs 70 cents. You pay with a 1 € coin. How much change do you get?' },
    options: { el: ['70 λεπτά', '40 λεπτά', '30 λεπτά', '1,70 €'], en: ['70 cents', '40 cents', '30 cents', '1,70 €'] },
    correct: 2,
    explanation: {
      el: 'Το 1 € είναι 100 λεπτά. 100 − 70 = 30 λεπτά ρέστα.',
      en: '1 € is 100 cents. 100 − 70 = 30 cents change.',
    },
  },

  // ── 17–18: shopping problems ────────────────────────────────────────────────
  {
    q: { el: 'Η Κατερίνα αγοράζει 3 μολύβια. Το καθένα κοστίζει 40 λεπτά. Πόσα πληρώνει;', en: 'Katerina buys 3 pencils. Each one costs 40 cents. How much does she pay?' },
    options: { el: ['1,20 €', '0,43 €', '1,60 €', '12 €'], en: ['1,20 €', '0,43 €', '1,60 €', '12 €'] },
    correct: 0,
    explanation: {
      el: '3 × 40 = 120 λεπτά. Τα 100 λεπτά είναι 1 ευρώ, άρα 120 λεπτά = 1,20 €.',
      en: '3 × 40 = 120 cents. 100 cents make 1 euro, so 120 cents = 1,20 €.',
    },
  },
  {
    q: { el: 'Ο Πέτρος έχει 5 €. Αγοράζει ένα σάντουιτς 2,50 € και ένα νερό 0,50 €. Πόσα χρήματα του μένουν;', en: 'Petros has 5 €. He buys a sandwich for 2,50 € and a water for 0,50 €. How much money does he have left?' },
    options: { el: ['3 €', '2,50 €', '1,50 €', '2 €'], en: ['3 €', '2,50 €', '1,50 €', '2 €'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα πόσο ξόδεψε: 2,50 + 0,50 = 3 €. Μετά τι έμεινε: 5 − 3 = 2 €.',
      en: 'First how much he spent: 2,50 + 0,50 = 3 €. Then what is left: 5 − 3 = 2 €.',
    },
  },
];
