/**
 * Α' Δημοτικού · Μαθηματικά · Μετρώ
 * ==================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–5   longer / shorter, taller / shorter — comparing two or three things
 *   6–9   heavier / lighter — comparing weights, the balance scale
 *   10–14 measuring with non-standard units (hand spans, steps, paper clips, blocks)
 *   15–18 comparing lengths and weights in small word problems
 * Distractors are real child mistakes: the opposite word, the middle item, the count off by one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_MEASURING: QuizQuestion[] = [
  // ── 1–5: longer / shorter ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι πιο μακρύ;', en: 'Which one is longer?' },
    options: { el: ['Ένα μολύβι', 'Μια σκούπα', 'Μια γόμα', 'Ένα κουμπί'], en: ['A pencil', 'A broom', 'An eraser', 'A button'] },
    correct: 1,
    explanation: {
      el: 'Η σκούπα είναι πιο μακριά από το μολύβι, τη γόμα και το κουμπί. «Μακρύ» σημαίνει ότι έχει μεγάλο μήκος.',
      en: 'A broom is longer than a pencil, an eraser or a button. “Long” means it has a big length.',
    },
  },
  {
    q: { el: 'Ποιο είναι πιο κοντό;', en: 'Which one is shorter?' },
    options: { el: ['Ένα τρένο', 'Ένα λεωφορείο', 'Ένα ποδήλατο', 'Ένα αυτοκίνητο'], en: ['A train', 'A bus', 'A bicycle', 'A car'] },
    correct: 2,
    explanation: {
      el: 'Το ποδήλατο είναι το πιο κοντό. Το τρένο, το λεωφορείο και το αυτοκίνητο είναι πιο μακριά.',
      en: 'The bicycle is the shortest. A train, a bus and a car are all longer.',
    },
  },
  {
    q: { el: 'Η Μαρία είναι πιο ψηλή από τον Νίκο. Ποιος είναι πιο κοντός;', en: 'Maria is taller than Nikos. Who is shorter?' },
    options: { el: ['Η Μαρία', 'Ο Νίκος', 'Είναι ίδιοι', 'Δεν ξέρουμε'], en: ['Maria', 'Nikos', 'They are the same', 'We cannot tell'] },
    correct: 1,
    explanation: {
      el: 'Αν η Μαρία είναι πιο ψηλή, τότε ο Νίκος είναι πιο κοντός. Οι δύο λέξεις πάνε μαζί.',
      en: 'If Maria is taller, then Nikos is shorter. The two words go together.',
    },
  },
  {
    q: { el: 'Η κόκκινη κορδέλα είναι πιο μακριά από την μπλε. Η μπλε είναι πιο μακριά από την κίτρινη. Ποια είναι η πιο κοντή;', en: 'The red ribbon is longer than the blue one. The blue one is longer than the yellow one. Which is the shortest?' },
    options: { el: ['Η κόκκινη', 'Η μπλε', 'Η κίτρινη', 'Όλες ίδιες'], en: ['The red one', 'The blue one', 'The yellow one', 'They are all the same'] },
    correct: 2,
    explanation: {
      el: 'Κόκκινη → μπλε → κίτρινη, από τη μεγαλύτερη στη μικρότερη. Η κίτρινη είναι η πιο κοντή.',
      en: 'Red → blue → yellow, from longest to shortest. The yellow one is the shortest.',
    },
  },
  {
    q: { el: 'Δύο μολύβια έχουν το ίδιο μήκος. Πώς το λέμε;', en: 'Two pencils have the same length. What do we say?' },
    options: { el: ['Είναι ίσα', 'Το ένα είναι πιο μακρύ', 'Είναι βαριά', 'Το ένα είναι πιο κοντό'], en: ['They are equal', 'One is longer', 'They are heavy', 'One is shorter'] },
    correct: 0,
    explanation: {
      el: 'Όταν δύο πράγματα έχουν το ίδιο μήκος, λέμε ότι είναι ίσα.',
      en: 'When two things have the same length, we say they are equal.',
    },
  },

  // ── 6–9: heavier / lighter ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι πιο βαρύ;', en: 'Which one is heavier?' },
    options: { el: ['Ένα φτερό', 'Ένα φύλλο χαρτί', 'Μια πέτρα', 'Ένα μπαλόνι'], en: ['A feather', 'A sheet of paper', 'A stone', 'A balloon'] },
    correct: 2,
    explanation: {
      el: 'Η πέτρα είναι πιο βαριά. Το φτερό, το χαρτί και το μπαλόνι είναι ελαφριά.',
      en: 'A stone is heavier. A feather, paper and a balloon are light.',
    },
  },
  {
    q: { el: 'Ποιο είναι πιο ελαφρύ;', en: 'Which one is lighter?' },
    options: { el: ['Ένα τραπέζι', 'Μια καρέκλα', 'Μια ντουλάπα', 'Ένα μαξιλάρι'], en: ['A table', 'A chair', 'A wardrobe', 'A pillow'] },
    correct: 3,
    explanation: {
      el: 'Το μαξιλάρι είναι το πιο ελαφρύ. Το σηκώνεις εύκολα με το ένα χέρι!',
      en: 'The pillow is the lightest. You can lift it easily with one hand!',
    },
  },
  {
    q: { el: 'Στη ζυγαριά, η πλευρά με το μήλο κατεβαίνει. Η πλευρά με το καρύδι ανεβαίνει. Ποιο είναι πιο βαρύ;', en: 'On the scale, the side with the apple goes down. The side with the walnut goes up. Which is heavier?' },
    options: { el: ['Το καρύδι', 'Το μήλο', 'Είναι ίδια', 'Η ζυγαριά'], en: ['The walnut', 'The apple', 'They are the same', 'The scale'] },
    correct: 1,
    explanation: {
      el: 'Στη ζυγαριά, η πλευρά που κατεβαίνει έχει το πιο βαρύ πράγμα. Το μήλο είναι πιο βαρύ.',
      en: 'On a scale, the side that goes down holds the heavier thing. The apple is heavier.',
    },
  },
  {
    q: { el: 'Ο Γιώργος κρατάει ένα μεγάλο μπαλόνι και ένα μικρό κλειδί. Ποιο είναι πιο βαρύ;', en: 'Giorgos is holding a big balloon and a small key. Which is heavier?' },
    options: { el: ['Το μπαλόνι, γιατί είναι μεγάλο', 'Το κλειδί', 'Είναι ίδια', 'Το μπαλόνι, γιατί πετάει'], en: ['The balloon, because it is big', 'The key', 'They are the same', 'The balloon, because it floats'] },
    correct: 1,
    explanation: {
      el: 'Το μεγάλο δεν είναι πάντα πιο βαρύ! Το μπαλόνι έχει μόνο αέρα μέσα. Το μικρό κλειδί είναι πιο βαρύ.',
      en: 'Big does not always mean heavy! The balloon only has air inside. The small key is heavier.',
    },
  },

  // ── 10–14: measuring with non-standard units ──────────────────────────────
  {
    q: { el: 'Η Ελένη μετράει το θρανίο με τις παλάμες της. Μετράει: 1, 2, 3, 4, 5, 6. Πόσες παλάμες είναι το θρανίο;', en: 'Eleni measures the desk with her hand spans. She counts: 1, 2, 3, 4, 5, 6. How many hand spans long is the desk?' },
    options: { el: ['5', '6', '7', '1'], en: ['5', '6', '7', '1'] },
    correct: 1,
    explanation: {
      el: 'Μετρήσαμε μέχρι το 6, άρα το θρανίο είναι 6 παλάμες.',
      en: 'We counted up to 6, so the desk is 6 hand spans long.',
    },
  },
  {
    q: { el: 'Ένα βιβλίο είναι 4 συνδετήρες μακρύ. Μια κασετίνα είναι 7 συνδετήρες. Ποιο είναι πιο μακρύ;', en: 'A book is 4 paper clips long. A pencil case is 7 paper clips long. Which is longer?' },
    options: { el: ['Το βιβλίο', 'Η κασετίνα', 'Είναι ίσα', 'Ο συνδετήρας'], en: ['The book', 'The pencil case', 'They are equal', 'The paper clip'] },
    correct: 1,
    explanation: {
      el: '7 είναι πιο πολλά από 4. Η κασετίνα με τους 7 συνδετήρες είναι πιο μακριά.',
      en: '7 is more than 4. The pencil case with 7 paper clips is longer.',
    },
  },
  {
    q: { el: 'Ο Νίκος μετράει το δωμάτιο με βήματα. Τι πρέπει να κάνει;', en: 'Nikos measures the room with steps. What must he do?' },
    options: { el: ['Να κάνει όλα τα βήματα ίδια', 'Να κάνει άλλοτε μεγάλα και άλλοτε μικρά βήματα', 'Να τρέξει', 'Να πηδάει'], en: ['Make all the steps the same', 'Take big steps and then small steps', 'Run', 'Jump'] },
    correct: 0,
    explanation: {
      el: 'Για να μετρήσουμε σωστά, όλα τα βήματα πρέπει να είναι ίδια. Αλλιώς ο αριθμός δεν λέει αλήθεια.',
      en: 'To measure well, every step must be the same size. Otherwise the number tells us nothing.',
    },
  },
  {
    q: { el: 'Η Μαρία μετράει το ίδιο τραπέζι με παλάμες: 8. Ο μπαμπάς της με τις δικές του παλάμες: 5. Γιατί βγήκε διαφορετικός αριθμός;', en: 'Maria measures a table with her hand spans: 8. Her dad measures the same table with his hand spans: 5. Why is the number different?' },
    options: { el: ['Το τραπέζι άλλαξε', 'Η παλάμη του μπαμπά είναι πιο μεγάλη', 'Η Μαρία μέτρησε λάθος', 'Ο μπαμπάς μέτρησε λάθος'], en: ['The table changed', 'Dad\'s hand is bigger', 'Maria counted wrong', 'Dad counted wrong'] },
    correct: 1,
    explanation: {
      el: 'Η παλάμη του μπαμπά είναι πιο μεγάλη, γι\' αυτό χωράει λιγότερες φορές. Μεγάλη μονάδα, μικρός αριθμός!',
      en: 'Dad\'s hand is bigger, so it fits fewer times. Big unit, small number!',
    },
  },
  {
    q: { el: 'Ο Γιώργος βάζει τουβλάκια στη σειρά δίπλα στο μολύβι του. Χρειάζεται 3 τουβλάκια. Ο μαρκαδόρος του χρειάζεται 4. Πόσα τουβλάκια παραπάνω χρειάζεται ο μαρκαδόρος;', en: 'Giorgos lines up blocks next to his pencil. He needs 3 blocks. His marker needs 4. How many more blocks does the marker need?' },
    options: { el: ['7', '1', '4', '3'], en: ['7', '1', '4', '3'] },
    correct: 1,
    explanation: {
      el: '4 − 3 = 1. Ο μαρκαδόρος θέλει 1 τουβλάκι παραπάνω, άρα είναι λίγο πιο μακρύς.',
      en: '4 − 3 = 1. The marker needs 1 more block, so it is a little longer.',
    },
  },

  // ── 15–18: comparing lengths and weights in word problems ─────────────────
  {
    q: { el: 'Η κορδέλα της Ελένης είναι 5 παλάμες. Της Μαρίας είναι 9 παλάμες. Πόσες παλάμες πιο μακριά είναι της Μαρίας;', en: 'Eleni\'s ribbon is 5 hand spans. Maria\'s is 9 hand spans. How many hand spans longer is Maria\'s?' },
    options: { el: ['14', '3', '4', '5'], en: ['14', '3', '4', '5'] },
    correct: 2,
    explanation: {
      el: '9 − 5 = 4. Η κορδέλα της Μαρίας είναι 4 παλάμες πιο μακριά.',
      en: '9 − 5 = 4. Maria\'s ribbon is 4 hand spans longer.',
    },
  },
  {
    q: { el: 'Στη ζυγαριά, ένα μήλο ζυγίζει όσο 6 βόλοι. Ένα πορτοκάλι ζυγίζει όσο 8 βόλοι. Ποιο είναι πιο βαρύ;', en: 'On the scale, an apple weighs as much as 6 marbles. An orange weighs as much as 8 marbles. Which is heavier?' },
    options: { el: ['Το μήλο', 'Το πορτοκάλι', 'Είναι ίδια', 'Οι βόλοι'], en: ['The apple', 'The orange', 'They are the same', 'The marbles'] },
    correct: 1,
    explanation: {
      el: '8 βόλοι είναι πιο πολλοί από 6. Το πορτοκάλι είναι πιο βαρύ.',
      en: '8 marbles are more than 6. The orange is heavier.',
    },
  },
  {
    q: { el: 'Ο Νίκος είναι 10 βήματα από την πόρτα. Η Ελένη είναι 10 βήματα από την πόρτα. Ποιος είναι πιο μακριά;', en: 'Nikos is 10 steps from the door. Eleni is 10 steps from the door. Who is farther away?' },
    options: { el: ['Ο Νίκος', 'Η Ελένη', 'Είναι στην ίδια απόσταση', 'Η πόρτα'], en: ['Nikos', 'Eleni', 'They are the same distance', 'The door'] },
    correct: 2,
    explanation: {
      el: '10 και 10 είναι ο ίδιος αριθμός. Είναι και οι δύο στην ίδια απόσταση από την πόρτα.',
      en: '10 and 10 are the same number. They are both the same distance from the door.',
    },
  },
  {
    q: { el: 'Η τσάντα της Μαρίας ζυγίζει όσο 3 βιβλία. Του Γιώργου όσο 2 βιβλία. Της Ελένης όσο 5 βιβλία. Ποια τσάντα είναι η πιο ελαφριά;', en: 'Maria\'s bag weighs as much as 3 books. Giorgos\'s bag weighs as much as 2 books. Eleni\'s bag weighs as much as 5 books. Which bag is the lightest?' },
    options: { el: ['Της Μαρίας', 'Του Γιώργου', 'Της Ελένης', 'Όλες ίδιες'], en: ['Maria\'s', 'Giorgos\'s', 'Eleni\'s', 'They are all the same'] },
    correct: 1,
    explanation: {
      el: '2 είναι ο πιο μικρός αριθμός: 2, 3, 5. Η τσάντα του Γιώργου είναι η πιο ελαφριά.',
      en: '2 is the smallest number: 2, 3, 5. Giorgos\'s bag is the lightest.',
    },
  },
];
