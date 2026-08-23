/**
 * Α' Δημοτικού · Μελέτη Περιβάλλοντος · Ο Χρόνος & ο Ήλιος
 * ========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 6–7; one short sentence per stem, small numbers.
 *
 * What the unit covers, in order:
 *   1–4   the day: morning / noon / evening / night, the week and its 7 days
 *   5–8   the months and the 4 seasons, the calendar
 *   9–11  the clock: hours, the short and the long hand, the whole hour
 *   12–14 my life story: baby → child, birthday, grandparents, what comes first
 *   15–18 what the sun gives us: light, warmth, day and night, the shadow
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_SCIENCE_TIME_AND_SUN: QuizQuestion[] = [
  // ── 1–4: the day and the week ───────────────────────────────────────────────
  {
    q: { el: 'Πότε τρώμε πρωινό;', en: 'When do we eat breakfast?' },
    options: { el: ['Το πρωί', 'Το μεσημέρι', 'Το βράδυ', 'Τη νύχτα'], en: ['In the morning', 'At noon', 'In the evening', 'At night'] },
    correct: 0,
    explanation: {
      el: 'Το πρωινό το τρώμε το πρωί, όταν ξυπνάμε. Γι\' αυτό το λέμε «πρωινό»!',
      en: 'We eat breakfast in the morning, when we wake up. That is why it is the first meal of the day!',
    },
  },
  {
    q: { el: 'Τι βλέπουμε στον ουρανό τη νύχτα;', en: 'What do we see in the sky at night?' },
    options: { el: ['Τον ήλιο', 'Το ουράνιο τόξο', 'Το φεγγάρι και τα άστρα', 'Τα σύννεφα μόνο'], en: ['The sun', 'A rainbow', 'The moon and the stars', 'Only clouds'] },
    correct: 2,
    explanation: {
      el: 'Τη νύχτα ο ήλιος έχει κρυφτεί. Στον ουρανό λάμπουν το φεγγάρι και τα άστρα.',
      en: 'At night the sun has gone away. The moon and the stars shine in the sky.',
    },
  },
  {
    q: { el: 'Πόσες μέρες έχει η εβδομάδα;', en: 'How many days are in a week?' },
    options: { el: ['5', '7', '10', '12'], en: ['5', '7', '10', '12'] },
    correct: 1,
    explanation: {
      el: 'Η εβδομάδα έχει 7 μέρες: Δευτέρα, Τρίτη, Τετάρτη, Πέμπτη, Παρασκευή, Σάββατο, Κυριακή.',
      en: 'A week has 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
    },
  },
  {
    q: { el: 'Ποια μέρα έρχεται μετά την Τρίτη;', en: 'Which day comes after Tuesday?' },
    options: { el: ['Δευτέρα', 'Πέμπτη', 'Κυριακή', 'Τετάρτη'], en: ['Monday', 'Thursday', 'Sunday', 'Wednesday'] },
    correct: 3,
    explanation: {
      el: 'Δευτέρα, Τρίτη, Τετάρτη! Η Τετάρτη είναι η τέταρτη μέρα, γι\' αυτό τη λένε έτσι.',
      en: 'Monday, Tuesday, Wednesday! Wednesday comes right after Tuesday.',
    },
  },

  // ── 5–8: months, seasons, calendar ─────────────────────────────────────────
  {
    q: { el: 'Πόσους μήνες έχει ο χρόνος;', en: 'How many months are in a year?' },
    options: { el: ['7', '10', '12', '20'], en: ['7', '10', '12', '20'] },
    correct: 2,
    explanation: {
      el: 'Ο χρόνος έχει 12 μήνες. Αρχίζει με τον Ιανουάριο και τελειώνει με τον Δεκέμβριο.',
      en: 'A year has 12 months. It starts with January and ends with December.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πρώτος μήνας του χρόνου;', en: 'Which is the first month of the year?' },
    options: { el: ['Ο Σεπτέμβριος', 'Ο Ιανουάριος', 'Ο Δεκέμβριος', 'Ο Μάρτιος'], en: ['September', 'January', 'December', 'March'] },
    correct: 1,
    explanation: {
      el: 'Ο Ιανουάριος είναι ο πρώτος μήνας. Το σχολείο αρχίζει τον Σεπτέμβριο, αλλά ο χρόνος αρχίζει τον Ιανουάριο!',
      en: 'January is the first month. School starts in September, but the year starts in January!',
    },
  },
  {
    q: { el: 'Πόσες εποχές έχει ο χρόνος;', en: 'How many seasons are in a year?' },
    options: { el: ['2', '3', '4', '12'], en: ['2', '3', '4', '12'] },
    correct: 2,
    explanation: {
      el: 'Ο χρόνος έχει 4 εποχές: άνοιξη, καλοκαίρι, φθινόπωρο, χειμώνα. Οι μήνες είναι 12.',
      en: 'A year has 4 seasons: spring, summer, autumn, winter. The months are 12.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να δει ποια μέρα έχει γενέθλια. Πού κοιτάζει;', en: 'Eleni wants to see which day her birthday is. Where does she look?' },
    options: { el: ['Στο ρολόι', 'Στο ημερολόγιο', 'Στον χάρτη', 'Στη ζυγαριά'], en: ['At the clock', 'At the calendar', 'At the map', 'At the scales'] },
    correct: 1,
    explanation: {
      el: 'Το ημερολόγιο δείχνει τις μέρες και τους μήνες. Το ρολόι δείχνει μόνο την ώρα.',
      en: 'The calendar shows the days and the months. The clock only shows the time.',
    },
  },

  // ── 9–11: the clock ────────────────────────────────────────────────────────
  {
    q: { el: 'Τι μας δείχνει το ρολόι;', en: 'What does a clock show us?' },
    options: { el: ['Την ώρα', 'Τον καιρό', 'Τον μήνα', 'Το βάρος'], en: ['The time', 'The weather', 'The month', 'The weight'] },
    correct: 0,
    explanation: {
      el: 'Το ρολόι μάς δείχνει την ώρα. Έτσι ξέρουμε πότε να πάμε σχολείο ή να κοιμηθούμε.',
      en: 'A clock shows us the time. That is how we know when to go to school or to bed.',
    },
  },
  {
    q: { el: 'Ο μικρός δείκτης του ρολογιού δείχνει…', en: 'The short hand of the clock shows…' },
    options: { el: ['τα λεπτά', 'τις μέρες', 'τις ώρες', 'τα δευτερόλεπτα'], en: ['the minutes', 'the days', 'the hours', 'the seconds'] },
    correct: 2,
    explanation: {
      el: 'Ο μικρός δείκτης δείχνει τις ώρες. Ο μεγάλος δείκτης δείχνει τα λεπτά.',
      en: 'The short hand shows the hours. The long hand shows the minutes.',
    },
  },
  {
    q: { el: 'Ο μικρός δείκτης είναι στο 3 και ο μεγάλος στο 12. Τι ώρα είναι;', en: 'The short hand is on the 3 and the long hand on the 12. What time is it?' },
    options: { el: ['12 η ώρα', '3 η ώρα', '3 και μισή', '6 η ώρα'], en: ['12 o\'clock', '3 o\'clock', 'Half past 3', '6 o\'clock'] },
    correct: 1,
    explanation: {
      el: 'Όταν ο μεγάλος δείκτης είναι στο 12, η ώρα είναι ακριβώς. Ο μικρός στο 3 → 3 η ώρα.',
      en: 'When the long hand is on the 12, it is exactly the hour. The short hand on 3 → 3 o\'clock.',
    },
  },

  // ── 12–14: my life story ───────────────────────────────────────────────────
  {
    q: { el: 'Τι ήσουν πριν γίνεις παιδί;', en: 'What were you before you became a child?' },
    options: { el: ['Παππούς', 'Μωρό', 'Έφηβος', 'Μεγάλος'], en: ['A grandpa', 'A baby', 'A teenager', 'A grown-up'] },
    correct: 1,
    explanation: {
      el: 'Όλοι γεννιόμαστε μωρά. Μετά μεγαλώνουμε και γινόμαστε παιδιά, έφηβοι, μεγάλοι.',
      en: 'We are all born as babies. Then we grow into children, teenagers and grown-ups.',
    },
  },
  {
    q: { el: 'Ο Νίκος είχε γενέθλια και έγινε 7. Πόσο ήταν πέρσι;', en: 'Nikos had his birthday and turned 7. How old was he last year?' },
    options: { el: ['8', '5', '6', '7'], en: ['8', '5', '6', '7'] },
    correct: 2,
    explanation: {
      el: 'Κάθε χρόνο στα γενέθλια μεγαλώνουμε έναν χρόνο. Πέρσι ο Νίκος ήταν 6, φέτος είναι 7.',
      en: 'Every birthday we get one year older. Last year Nikos was 6, this year he is 7.',
    },
  },
  {
    q: { el: 'Ποιος γεννήθηκε πρώτος;', en: 'Who was born first?' },
    options: { el: ['Εσύ', 'Η μαμά σου', 'Η γιαγιά σου', 'Το μωρό της γειτόνισσας'], en: ['You', 'Your mum', 'Your grandma', 'The neighbour\'s baby'] },
    correct: 2,
    explanation: {
      el: 'Η γιαγιά γεννήθηκε πρώτη, μετά η μαμά, μετά εσύ. Η γιαγιά είναι η μαμά της μαμάς!',
      en: 'Grandma was born first, then mum, then you. Grandma is your mum\'s mum!',
    },
  },

  // ── 15–18: what the sun gives us ───────────────────────────────────────────
  {
    q: { el: 'Τι μας δίνει ο ήλιος;', en: 'What does the sun give us?' },
    options: { el: ['Φως και ζέστη', 'Βροχή', 'Χιόνι', 'Αέρα'], en: ['Light and warmth', 'Rain', 'Snow', 'Wind'] },
    correct: 0,
    explanation: {
      el: 'Ο ήλιος μάς δίνει φως για να βλέπουμε και ζέστη για να μην κρυώνουμε.',
      en: 'The sun gives us light so we can see and warmth so we do not get cold.',
    },
  },
  {
    q: { el: 'Πότε έχουμε μέρα;', en: 'When is it daytime?' },
    options: { el: ['Όταν βρέχει', 'Όταν φαίνεται το φεγγάρι', 'Όταν ο ήλιος είναι στον ουρανό', 'Όταν κοιμόμαστε'], en: ['When it rains', 'When we can see the moon', 'When the sun is in the sky', 'When we sleep'] },
    correct: 2,
    explanation: {
      el: 'Μέρα είναι όσο ο ήλιος φωτίζει τον ουρανό. Όταν ο ήλιος κρύβεται, έρχεται η νύχτα.',
      en: 'It is daytime while the sun lights up the sky. When the sun goes away, night comes.',
    },
  },
  {
    q: { el: 'Πότε ο ήλιος είναι πιο ψηλά στον ουρανό;', en: 'When is the sun highest in the sky?' },
    options: { el: ['Το πρωί', 'Το μεσημέρι', 'Το βράδυ', 'Τη νύχτα'], en: ['In the morning', 'At noon', 'In the evening', 'At night'] },
    correct: 1,
    explanation: {
      el: 'Το πρωί ο ήλιος ανεβαίνει, το μεσημέρι είναι πολύ ψηλά και ζεσταίνει, το βράδυ κατεβαίνει.',
      en: 'In the morning the sun rises, at noon it is very high and hot, in the evening it goes down.',
    },
  },
  {
    q: { el: 'Ο Γιώργος στέκεται στον ήλιο. Τι βλέπει στο έδαφος;', en: 'Giorgos is standing in the sun. What does he see on the ground?' },
    options: { el: ['Μια λίμνη', 'Ένα ουράνιο τόξο', 'Τη σκιά του', 'Ένα άστρο'], en: ['A lake', 'A rainbow', 'His shadow', 'A star'] },
    correct: 2,
    explanation: {
      el: 'Το φως του ήλιου δεν περνάει μέσα από το σώμα μας. Έτσι στο έδαφος φαίνεται η σκιά μας.',
      en: 'Sunlight cannot pass through our body. That is why our shadow appears on the ground.',
    },
  },
];
