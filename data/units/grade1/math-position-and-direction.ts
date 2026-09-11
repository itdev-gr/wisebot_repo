/**
 * Α' Δημοτικού · Μαθηματικά · Θέσεις στον χώρο
 * =============================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * Every scene is described in words so the child pictures it, with no picture needed,
 * and left/right is always somebody's own left and right, never "as you look at it".
 * What the unit covers, in order:
 *   1–4   above / below, in front / behind
 *   5–8   left / right, and "between"
 *   9–12  order in a row: first, last, how many in front of the third child
 *   13–18 simple routes: steps up / down / left / right, going back home, the same trip in another order
 * Distractors are the opposite word, the neighbouring position, and adding the steps
 * instead of thinking about where they lead.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_POSITION_AND_DIRECTION: QuizQuestion[] = [
  // ── 1–4: above / below, in front / behind ─────────────────────────────────
  {
    q: { el: 'Η γάτα κοιμάται κάτω από το τραπέζι. Πού είναι το τραπέζι;', en: 'The cat is sleeping under the table. Where is the table?' },
    options: { el: ['Κάτω από τη γάτα', 'Πάνω από τη γάτα', 'Δίπλα στη γάτα', 'Μέσα στη γάτα'], en: ['Below the cat', 'Above the cat', 'Next to the cat', 'Inside the cat'] },
    correct: 1,
    explanation: {
      el: 'Αν η γάτα είναι κάτω από το τραπέζι, τότε το τραπέζι είναι πάνω από τη γάτα. Το «πάνω» και το «κάτω» είναι αντίθετα.',
      en: 'If the cat is under the table, then the table is above the cat. “Above” and “below” are opposites.',
    },
  },
  {
    q: { el: 'Το φεγγάρι είναι ψηλά στον ουρανό και το σπίτι είναι στη γη. Το σπίτι είναι ___ το φεγγάρι.', en: 'The moon is high in the sky and the house is on the ground. The house is ___ the moon.' },
    options: { el: ['πάνω από', 'μπροστά από', 'κάτω από', 'πίσω από'], en: ['above', 'in front of', 'below', 'behind'] },
    correct: 2,
    explanation: {
      el: 'Το σπίτι είναι κάτω από το φεγγάρι. Ό,τι είναι πιο χαμηλά, είναι «κάτω από» αυτό που είναι πιο ψηλά.',
      en: 'The house is below the moon. Whatever is lower is “below” the thing that is higher.',
    },
  },
  {
    q: { el: 'Στη σειρά για το σχολικό η Μαρία στέκεται μπροστά από τον Νίκο. Πού είναι ο Νίκος;', en: 'In the line for the school bus Maria stands in front of Nikos. Where is Nikos?' },
    options: { el: ['Πίσω από τη Μαρία', 'Μπροστά από τη Μαρία', 'Πάνω από τη Μαρία', 'Κάτω από τη Μαρία'], en: ['Behind Maria', 'In front of Maria', 'Above Maria', 'Below Maria'] },
    correct: 0,
    explanation: {
      el: 'Αν η Μαρία είναι μπροστά από τον Νίκο, ο Νίκος είναι πίσω από τη Μαρία. Το «μπροστά» και το «πίσω» είναι αντίθετα.',
      en: 'If Maria is in front of Nikos, Nikos is behind Maria. “In front” and “behind” are opposites.',
    },
  },
  {
    q: { el: 'Το ποδήλατο είναι σταματημένο πίσω από το αυτοκίνητο. Ποιο από τα δύο είναι μπροστά;', en: 'The bicycle is parked behind the car. Which of the two is in front?' },
    options: { el: ['Το ποδήλατο', 'Κανένα από τα δύο', 'Το αυτοκίνητο', 'Και τα δύο'], en: ['The bicycle', 'Neither of them', 'The car', 'Both of them'] },
    correct: 2,
    explanation: {
      el: 'Το ποδήλατο είναι πίσω, άρα το αυτοκίνητο είναι μπροστά.',
      en: 'The bicycle is behind, so the car is in front.',
    },
  },

  // ── 5–8: left / right, between ────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος κρατάει ένα μήλο στο αριστερό του χέρι και μια μπανάνα στο δεξί. Τι κρατάει στο δεξί του χέρι;', en: 'Giorgos holds an apple in his left hand and a banana in his right. What is he holding in his right hand?' },
    options: { el: ['Ένα μήλο', 'Μια μπανάνα', 'Τίποτα', 'Και τα δύο'], en: ['An apple', 'A banana', 'Nothing', 'Both'] },
    correct: 1,
    explanation: {
      el: 'Στο δεξί χέρι κρατάει τη μπανάνα. Το μήλο είναι στο αριστερό. Έχουμε ένα αριστερό και ένα δεξί χέρι.',
      en: 'In his right hand he holds the banana. The apple is in the left. We have one left hand and one right hand.',
    },
  },
  {
    q: { el: 'Όταν διαβάζουμε και γράφουμε, από πού προς τα πού πάμε;', en: 'When we read and write, which way do we go?' },
    options: { el: ['Από τα δεξιά προς τα αριστερά', 'Από πάνω προς τα κάτω', 'Από τα αριστερά προς τα δεξιά', 'Από κάτω προς τα πάνω'], en: ['From right to left', 'From top to bottom', 'From left to right', 'From bottom to top'] },
    correct: 2,
    explanation: {
      el: 'Στα ελληνικά διαβάζουμε και γράφουμε από τα αριστερά προς τα δεξιά. Το πρώτο γράμμα είναι πάντα αριστερά.',
      en: 'In Greek we read and write from left to right. The first letter is always on the left.',
    },
  },
  {
    q: { el: 'Στο ράφι είναι στη σειρά: μια μπάλα, μια κούκλα, ένα αρκουδάκι. Ποιο παιχνίδι είναι ανάμεσα στα άλλα δύο;', en: 'On the shelf, in a row, are: a ball, a doll, a teddy bear. Which toy is between the other two?' },
    options: { el: ['Η μπάλα', 'Το αρκουδάκι', 'Η κούκλα', 'Κανένα'], en: ['The ball', 'The teddy bear', 'The doll', 'None of them'] },
    correct: 2,
    explanation: {
      el: 'Η κούκλα είναι ανάμεσα: έχει την μπάλα από τη μία μεριά και το αρκουδάκι από την άλλη.',
      en: 'The doll is in between: it has the ball on one side and the teddy bear on the other.',
    },
  },
  {
    q: { el: 'Ο αριθμός 5 είναι ανάμεσα στο…', en: 'The number 5 is between which two numbers?' },
    options: { el: ['3 και στο 4', '4 και στο 6', '6 και στο 7', '1 και στο 2'], en: ['3 and 4', '4 and 6', '6 and 7', '1 and 2'] },
    correct: 1,
    explanation: {
      el: 'Το 5 είναι ανάμεσα στο 4 και στο 6: 4, 5, 6. Το 4 είναι πριν και το 6 μετά.',
      en: '5 is between 4 and 6: 4, 5, 6. 4 comes before it and 6 after it.',
    },
  },

  // ── 9–12: first, last and order in a row ──────────────────────────────────
  {
    q: { el: 'Στη σειρά περιμένουν με αυτή τη σειρά: η Άννα, ο Πέτρος, η Ελένη, ο Κώστας. Ποιος είναι πρώτος;', en: 'Waiting in line, in this order: Anna, Petros, Eleni, Kostas. Who is first?' },
    options: { el: ['Ο Κώστας', 'Η Ελένη', 'Ο Πέτρος', 'Η Άννα'], en: ['Kostas', 'Eleni', 'Petros', 'Anna'] },
    correct: 3,
    explanation: {
      el: 'Πρώτη είναι η Άννα, γιατί το όνομά της είναι στην αρχή της σειράς. Μετά έρχεται ο Πέτρος.',
      en: 'Anna is first, because her name is at the start of the line. Petros comes next.',
    },
  },
  {
    q: { el: 'Στη σειρά περιμένουν: η Άννα, ο Πέτρος, η Ελένη, ο Κώστας. Ποιος είναι τελευταίος;', en: 'Waiting in line: Anna, Petros, Eleni, Kostas. Who is last?' },
    options: { el: ['Ο Κώστας', 'Η Άννα', 'Ο Πέτρος', 'Η Ελένη'], en: ['Kostas', 'Anna', 'Petros', 'Eleni'] },
    correct: 0,
    explanation: {
      el: 'Τελευταίος είναι ο Κώστας, γιατί δεν έχει κανέναν πίσω του. Η Ελένη είναι τρίτη.',
      en: 'Kostas is last, because nobody is behind him. Eleni is third.',
    },
  },
  {
    q: { el: 'Σε μια σειρά είναι 5 παιδιά. Ο Νίκος είναι τρίτος. Πόσα παιδιά είναι μπροστά του;', en: 'There are 5 children in a row. Nikos is third. How many children are in front of him?' },
    options: { el: ['3', '2', '1', '4'], en: ['3', '2', '1', '4'] },
    correct: 1,
    explanation: {
      el: 'Πρώτος, δεύτερος, τρίτος. Πριν από τον τρίτο είναι ο πρώτος και ο δεύτερος: 2 παιδιά.',
      en: 'First, second, third. Before the third come the first and the second: 2 children.',
    },
  },
  {
    q: { el: 'Στον αγώνα δρόμου η Σοφία τερμάτισε δεύτερη. Πόσα παιδιά τερμάτισαν πριν από αυτήν;', en: 'In the running race Sofia finished second. How many children finished before her?' },
    options: { el: ['2', '0', '3', '1'], en: ['2', '0', '3', '1'] },
    correct: 3,
    explanation: {
      el: 'Δεύτερη σημαίνει ότι μόνο ένα παιδί ήταν πιο μπροστά: το πρώτο. Άρα 1 παιδί.',
      en: 'Second means only one child was ahead of her: the first. So 1 child.',
    },
  },

  // ── 13–18: simple routes ──────────────────────────────────────────────────
  {
    q: { el: 'Το ρομπότ κάνει 3 βήματα μπροστά και μετά άλλα 2 βήματα μπροστά. Πόσα βήματα μπροστά έκανε συνολικά;', en: 'The robot takes 3 steps forward and then 2 more steps forward. How many steps forward did it take in all?' },
    options: { el: ['6', '1', '5', '4'], en: ['6', '1', '5', '4'] },
    correct: 2,
    explanation: {
      el: '3 + 2 = 5 βήματα. Και τα δύο ήταν προς τα μπροστά, άρα τα βάζουμε μαζί.',
      en: '3 + 2 = 5 steps. Both were forward, so we put them together.',
    },
  },
  {
    q: { el: 'Το ποντικάκι φεύγει από τη φωλιά του: 2 βήματα πάνω και 1 βήμα δεξιά. Ποια διαδρομή το φέρνει πίσω στη φωλιά;', en: 'The little mouse leaves its nest: 2 steps up and 1 step right. Which route brings it back to the nest?' },
    options: { el: ['2 βήματα πάνω και 1 βήμα δεξιά', '1 βήμα αριστερά και 2 βήματα κάτω', '2 βήματα δεξιά και 1 βήμα πάνω', '1 βήμα δεξιά και 2 βήματα πάνω'], en: ['2 steps up and 1 step right', '1 step left and 2 steps down', '2 steps right and 1 step up', '1 step right and 2 steps up'] },
    correct: 1,
    explanation: {
      el: 'Για να γυρίσει, κάνει τα αντίθετα: 1 βήμα αριστερά (αντί για δεξιά) και 2 βήματα κάτω (αντί για πάνω).',
      en: 'To go back, it does the opposites: 1 step left (instead of right) and 2 steps down (instead of up).',
    },
  },
  {
    q: { el: 'Το ρομπότ κάνει 4 βήματα δεξιά και μετά 4 βήματα αριστερά. Πού βρίσκεται τώρα;', en: 'The robot takes 4 steps right and then 4 steps left. Where is it now?' },
    options: { el: ['4 βήματα δεξιά από την αρχή', '8 βήματα μακριά από την αρχή', 'Εκεί από όπου ξεκίνησε', '4 βήματα αριστερά από την αρχή'], en: ['4 steps to the right of the start', '8 steps away from the start', 'Right where it started', '4 steps to the left of the start'] },
    correct: 2,
    explanation: {
      el: 'Πήγε 4 δεξιά και γύρισε 4 αριστερά, άρα είναι πάλι στην αρχή. Το αριστερά ξεκάνει το δεξιά!',
      en: 'It went 4 right and came 4 back left, so it is at the start again. Left undoes right!',
    },
  },
  {
    q: { el: 'Ο βάτραχος κάνει 2 άλματα πάνω, 1 άλμα κάτω και άλλο 1 άλμα πάνω. Πόσα άλματα πάνω από την αρχή βρίσκεται;', en: 'The frog makes 2 jumps up, 1 jump down and 1 more jump up. How many jumps above the start is it?' },
    options: { el: ['2', '4', '3', '1'], en: ['2', '4', '3', '1'] },
    correct: 0,
    explanation: {
      el: 'Πάνω 2, κάτω 1 → είναι 1 πάνω. Ξανά πάνω 1 → είναι 2 πάνω από την αρχή.',
      en: 'Up 2, down 1 → it is 1 up. Up 1 again → it is 2 above the start.',
    },
  },
  {
    q: { el: 'Από το σπίτι στο σχολείο πας 3 βήματα δεξιά και 1 βήμα πάνω. Ποια διαδρομή σε πάει στο ίδιο μέρος;', en: 'From home to school you go 3 steps right and 1 step up. Which route takes you to the same place?' },
    options: { el: ['1 βήμα πάνω και 3 βήματα δεξιά', '3 βήματα αριστερά και 1 βήμα πάνω', '1 βήμα κάτω και 3 βήματα δεξιά', '3 βήματα δεξιά και 1 βήμα κάτω'], en: ['1 step up and 3 steps right', '3 steps left and 1 step up', '1 step down and 3 steps right', '3 steps right and 1 step down'] },
    correct: 0,
    explanation: {
      el: 'Δεν έχει σημασία αν πας πρώτα πάνω ή πρώτα δεξιά: 3 δεξιά και 1 πάνω σε φέρνουν στο ίδιο σημείο.',
      en: 'It does not matter if you go up first or right first: 3 right and 1 up bring you to the same spot.',
    },
  },
  {
    q: { el: 'Το κουνελάκι στέκεται δεξιά από το καρότο. Προς τα πού πρέπει να πάει για να φτάσει στο καρότο;', en: 'The bunny is standing to the right of the carrot. Which way must it go to reach the carrot?' },
    options: { el: ['Δεξιά', 'Πάνω', 'Κάτω', 'Αριστερά'], en: ['Right', 'Up', 'Down', 'Left'] },
    correct: 3,
    explanation: {
      el: 'Αν το κουνελάκι είναι δεξιά από το καρότο, το καρότο είναι αριστερά του. Άρα πάει αριστερά.',
      en: 'If the bunny is to the right of the carrot, the carrot is to its left. So it goes left.',
    },
  },
];
