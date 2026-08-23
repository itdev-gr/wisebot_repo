/**
 * Β' Δημοτικού · Μελέτη Περιβάλλοντος · Ο Χρόνος, οι Ανάγκες & τα Δικαιώματά μου
 * ==============================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Short stems, everyday words, small numbers.
 *
 * What the unit covers, in order:
 *   1–4   hours and the day: morning/evening, the clock, 24 hours, 60 minutes
 *   5–8   days of the week, the weekend, weeks and months, the 12 months
 *   9–11  the four seasons and the calendar (a year)
 *   12–15 children's needs and rights: food, sleep, school, play, safety, name
 *   16–18 healthy diet: fruit and vegetables, water, breakfast
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_SCIENCE_TIME_NEEDS_RIGHTS: QuizQuestion[] = [
  // ── 1–4: hours and the day ──────────────────────────────────────────────────
  {
    q: { el: 'Πότε ανατέλλει ο ήλιος;', en: 'When does the sun rise?' },
    options: { el: ['Το βράδυ', 'Το πρωί', 'Το μεσημέρι', 'Τα μεσάνυχτα'], en: ['In the evening', 'In the morning', 'At noon', 'At midnight'] },
    correct: 1,
    explanation: {
      el: 'Ο ήλιος ανατέλλει το πρωί και δύει το βράδυ. Έτσι ξεκινά η μέρα!',
      en: 'The sun rises in the morning and sets in the evening. That is how the day begins!',
    },
  },
  {
    q: { el: 'Ο μικρός δείκτης του ρολογιού δείχνει…', en: 'The short hand of the clock shows…' },
    options: { el: ['τα λεπτά', 'τα δευτερόλεπτα', 'τις ώρες', 'τις μέρες'], en: ['the minutes', 'the seconds', 'the hours', 'the days'] },
    correct: 2,
    explanation: {
      el: 'Ο μικρός δείκτης δείχνει τις ώρες και ο μεγάλος τα λεπτά.',
      en: 'The short hand shows the hours and the long hand shows the minutes.',
    },
  },
  {
    q: { el: 'Πόσες ώρες έχει μια ολόκληρη μέρα με τη νύχτα της;', en: 'How many hours are in a whole day and night?' },
    options: { el: ['12', '24', '60', '7'], en: ['12', '24', '60', '7'] },
    correct: 1,
    explanation: {
      el: 'Μια ολόκληρη μέρα έχει 24 ώρες: 12 ώρες ο δείκτης κάνει έναν γύρο και άλλον έναν για τη νύχτα.',
      en: 'A whole day has 24 hours: the hand goes around once for 12 hours, and once more for the night.',
    },
  },
  {
    q: { el: 'Πόσα λεπτά έχει μία ώρα;', en: 'How many minutes are in one hour?' },
    options: { el: ['100', '24', '30', '60'], en: ['100', '24', '30', '60'] },
    correct: 3,
    explanation: {
      el: 'Μία ώρα έχει 60 λεπτά. Μισή ώρα είναι 30 λεπτά.',
      en: 'One hour has 60 minutes. Half an hour is 30 minutes.',
    },
  },

  // ── 5–8: days, weeks, months ──────────────────────────────────────────────
  {
    q: { el: 'Πόσες μέρες έχει μια εβδομάδα;', en: 'How many days are in a week?' },
    options: { el: ['5', '7', '10', '12'], en: ['5', '7', '10', '12'] },
    correct: 1,
    explanation: {
      el: 'Η εβδομάδα έχει 7 μέρες: 5 μέρες σχολείο και 2 μέρες Σαββατοκύριακο.',
      en: 'A week has 7 days: 5 school days and 2 weekend days.',
    },
  },
  {
    q: { el: 'Ποια μέρα έρχεται μετά την Τετάρτη;', en: 'Which day comes after Wednesday?' },
    options: { el: ['Τρίτη', 'Παρασκευή', 'Πέμπτη', 'Δευτέρα'], en: ['Tuesday', 'Friday', 'Thursday', 'Monday'] },
    correct: 2,
    explanation: {
      el: 'Δευτέρα, Τρίτη, Τετάρτη, Πέμπτη, Παρασκευή. Μετά την Τετάρτη έρχεται η Πέμπτη.',
      en: 'Monday, Tuesday, Wednesday, Thursday, Friday. After Wednesday comes Thursday.',
    },
  },
  {
    q: { el: 'Ο Νίκος πάει κολύμβηση κάθε Σάββατο. Πόσες φορές πάει σε 2 εβδομάδες;', en: 'Nikos goes swimming every Saturday. How many times does he go in 2 weeks?' },
    options: { el: ['1', '4', '2', '7'], en: ['1', '4', '2', '7'] },
    correct: 2,
    explanation: {
      el: 'Κάθε εβδομάδα έχει ένα Σάββατο. Σε 2 εβδομάδες πάει 2 φορές.',
      en: 'Every week has one Saturday. In 2 weeks he goes 2 times.',
    },
  },
  {
    q: { el: 'Πόσους μήνες έχει ένας χρόνος;', en: 'How many months are in a year?' },
    options: { el: ['10', '12', '7', '24'], en: ['10', '12', '7', '24'] },
    correct: 1,
    explanation: {
      el: 'Ο χρόνος έχει 12 μήνες. Ξεκινά με τον Ιανουάριο και τελειώνει με τον Δεκέμβριο.',
      en: 'A year has 12 months. It starts with January and ends with December.',
    },
  },

  // ── 9–11: seasons and the calendar ────────────────────────────────────────
  {
    q: { el: 'Πόσες εποχές έχει ο χρόνος;', en: 'How many seasons does a year have?' },
    options: { el: ['4', '2', '12', '3'], en: ['4', '2', '12', '3'] },
    correct: 0,
    explanation: {
      el: 'Ο χρόνος έχει 4 εποχές: άνοιξη, καλοκαίρι, φθινόπωρο και χειμώνα.',
      en: 'A year has 4 seasons: spring, summer, autumn and winter.',
    },
  },
  {
    q: { el: 'Σε ποια εποχή πέφτουν τα φύλλα από τα δέντρα;', en: 'In which season do the leaves fall from the trees?' },
    options: { el: ['Άνοιξη', 'Καλοκαίρι', 'Χειμώνας', 'Φθινόπωρο'], en: ['Spring', 'Summer', 'Winter', 'Autumn'] },
    correct: 3,
    explanation: {
      el: 'Το φθινόπωρο τα φύλλα κιτρινίζουν και πέφτουν. Την άνοιξη βγαίνουν καινούρια.',
      en: 'In autumn the leaves turn yellow and fall. In spring new ones grow.',
    },
  },
  {
    q: { el: 'Η Ελένη κοιτάζει το ημερολόγιο. Τι δείχνει το ημερολόγιο;', en: 'Eleni looks at the calendar. What does a calendar show?' },
    options: { el: ['Τις μέρες και τους μήνες', 'Τα λεπτά της ώρας', 'Τον καιρό', 'Τον δρόμο για το σπίτι'], en: ['The days and the months', 'The minutes of the hour', 'The weather', 'The way home'] },
    correct: 0,
    explanation: {
      el: 'Το ημερολόγιο δείχνει τις μέρες, τις εβδομάδες και τους μήνες του χρόνου. Το ρολόι δείχνει τις ώρες.',
      en: 'A calendar shows the days, weeks and months of the year. A clock shows the hours.',
    },
  },

  // ── 12–15: needs and rights ───────────────────────────────────────────────
  {
    q: { el: 'Τι χρειάζεται κάθε παιδί για να μεγαλώσει γερό;', en: 'What does every child need to grow up strong?' },
    options: { el: ['Πολλά παιχνίδια', 'Μια τηλεόραση', 'Φαγητό και ύπνο', 'Ένα ποδήλατο'], en: ['Lots of toys', 'A television', 'Food and sleep', 'A bicycle'] },
    correct: 2,
    explanation: {
      el: 'Το φαγητό, το νερό, ο ύπνος και η αγάπη είναι ανάγκες. Τα παιχνίδια είναι ωραία, αλλά δεν είναι ανάγκη.',
      en: 'Food, water, sleep and love are needs. Toys are nice, but they are not a need.',
    },
  },
  {
    q: { el: 'Πόσες ώρες ύπνο χρειάζεται ένα παιδί κάθε νύχτα;', en: 'How many hours of sleep does a child need each night?' },
    options: { el: ['Περίπου 3', 'Περίπου 10', 'Περίπου 15', 'Περίπου 5'], en: ['About 3', 'About 10', 'About 15', 'About 5'] },
    correct: 1,
    explanation: {
      el: 'Ένα παιδί χρειάζεται περίπου 10 ώρες ύπνο. Έτσι ξυπνά με δύναμη για παιχνίδι και σχολείο!',
      en: 'A child needs about 10 hours of sleep. That way you wake up with energy for play and school!',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι δικαίωμα κάθε παιδιού;', en: 'Which of these is a right of every child?' },
    options: { el: ['Να πηγαίνει σχολείο', 'Να ξενυχτάει κάθε βράδυ', 'Να τρώει μόνο γλυκά', 'Να μην πλένεται'], en: ['To go to school', 'To stay up late every night', 'To eat only sweets', 'To never wash'] },
    correct: 0,
    explanation: {
      el: 'Κάθε παιδί έχει δικαίωμα να μαθαίνει, να παίζει, να έχει όνομα και να νιώθει ασφαλές.',
      en: 'Every child has the right to learn, to play, to have a name and to feel safe.',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να παίξει στην αυλή μετά τα μαθήματα. Το παιχνίδι είναι…', en: 'Giorgos wants to play in the yard after his homework. Playing is…' },
    options: { el: ['χάσιμο χρόνου', 'μόνο για τα μωρά', 'δικαίωμα κάθε παιδιού', 'κάτι που απαγορεύεται'], en: ['a waste of time', 'only for babies', 'a right of every child', 'something forbidden'] },
    correct: 2,
    explanation: {
      el: 'Όλα τα παιδιά έχουν δικαίωμα στο παιχνίδι και στην ξεκούραση. Παίζοντας μαθαίνουμε κιόλας!',
      en: 'All children have the right to play and to rest. We even learn while we play!',
    },
  },

  // ── 16–18: healthy diet ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι το πιο υγιεινό κολατσιό;', en: 'Which of these is the healthiest snack?' },
    options: { el: ['Ένα μήλο', 'Πατατάκια', 'Μια σοκολάτα', 'Ένα αναψυκτικό'], en: ['An apple', 'Crisps', 'A chocolate bar', 'A fizzy drink'] },
    correct: 0,
    explanation: {
      el: 'Τα φρούτα και τα λαχανικά δίνουν βιταμίνες στο σώμα μας. Τα γλυκά και τα πατατάκια τα τρώμε λίγο και σπάνια.',
      en: 'Fruit and vegetables give our body vitamins. Sweets and crisps are for a little, and not often.',
    },
  },
  {
    q: { el: 'Ποιο ποτό είναι το καλύτερο για τη δίψα μας;', en: 'Which drink is best when we are thirsty?' },
    options: { el: ['Το αναψυκτικό', 'Ο χυμός με ζάχαρη', 'Το νερό', 'Το σιρόπι'], en: ['Fizzy drink', 'Sugary juice', 'Water', 'Syrup'] },
    correct: 2,
    explanation: {
      el: 'Το νερό είναι το καλύτερο ποτό. Το σώμα μας το χρειάζεται πολλές φορές τη μέρα.',
      en: 'Water is the best drink. Our body needs it many times a day.',
    },
  },
  {
    q: { el: 'Η Μαρία θέλει να έχει δύναμη στο σχολείο. Τι είναι καλό να κάνει το πρωί;', en: 'Maria wants to have energy at school. What is good to do in the morning?' },
    options: { el: ['Να μην φάει τίποτα', 'Να φάει μόνο μια καραμέλα', 'Να πιει ένα αναψυκτικό', 'Να φάει ένα καλό πρωινό'], en: ['Eat nothing', 'Eat just one candy', 'Drink a fizzy drink', 'Eat a good breakfast'] },
    correct: 3,
    explanation: {
      el: 'Το πρωινό είναι το πιο σημαντικό γεύμα. Γάλα, ψωμί και φρούτα δίνουν δύναμη για όλη τη μέρα!',
      en: 'Breakfast is the most important meal. Milk, bread and fruit give energy for the whole day!',
    },
  },
];
