/**
 * Α' Δημοτικού · Μαθηματικά · Προβλήματα
 * ======================================
 * Original one-step story problems for a child of 6–7, all inside 20 (curriculum topics
 * only — nothing from textbooks). Every story is one or two short sentences about everyday things.
 * What the unit covers, in order:
 *   1–5   "how many altogether": joining two groups (addition)
 *   6–9   "how many are left": something goes away (subtraction)
 *   10–12 "how many more": comparing two amounts (subtraction as difference)
 *   13–15 choosing the operation: when do we add, when do we take away
 *   16–18 the number sentence that matches the story, and the story that matches a sentence
 * Distractors are real child mistakes: doing the other operation, off-by-one,
 * answering with one of the numbers in the story, or writing the digits side by side.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_WORD_PROBLEMS: QuizQuestion[] = [
  // ── 1–5: how many altogether ───────────────────────────────────────────────
  {
    q: { el: 'Η Άννα έχει 4 καραμέλες. Η γιαγιά της τής δίνει 3 ακόμα. Πόσες καραμέλες έχει τώρα;', en: 'Anna has 4 sweets. Her grandma gives her 3 more. How many sweets does she have now?' },
    options: { el: ['6', '7', '1', '8'], en: ['6', '7', '1', '8'] },
    correct: 1,
    explanation: {
      el: '4 + 3 = 7 καραμέλες. Όταν μας δίνουν κι άλλα, βάζουμε τα δύο μαζί: προσθέτουμε.',
      en: '4 + 3 = 7 sweets. When we get more, we put the two amounts together: we add.',
    },
  },
  {
    q: { el: 'Στο πάρκο παίζουν 6 αγόρια και 5 κορίτσια. Πόσα παιδιά παίζουν όλα μαζί;', en: 'In the park 6 boys and 5 girls are playing. How many children are playing altogether?' },
    options: { el: ['11', '10', '1', '12'], en: ['11', '10', '1', '12'] },
    correct: 0,
    explanation: {
      el: '6 + 5 = 11 παιδιά. Το «όλα μαζί» μας λέει να ενώσουμε τις δύο ομάδες.',
      en: '6 + 5 = 11 children. “Altogether” tells us to join the two groups.',
    },
  },
  {
    q: { el: 'Ο Πέτρος διάβασε 8 σελίδες το πρωί και 7 σελίδες το απόγευμα. Πόσες σελίδες διάβασε;', en: 'Petros read 8 pages in the morning and 7 pages in the afternoon. How many pages did he read?' },
    options: { el: ['14', '1', '15', '16'], en: ['14', '1', '15', '16'] },
    correct: 2,
    explanation: {
      el: '8 + 7 = 15 σελίδες. Κόλπο: 8 + 2 = 10 και άλλα 5 κάνουν 15.',
      en: '8 + 7 = 15 pages. Trick: 8 + 2 = 10, and 5 more make 15.',
    },
  },
  {
    q: { el: 'Σε ένα κλαδί κάθονται 9 πουλιά. Έρχονται 4 ακόμα. Πόσα πουλιά είναι τώρα στο κλαδί;', en: '9 birds are sitting on a branch. 4 more come. How many birds are on the branch now?' },
    options: { el: ['5', '12', '14', '13'], en: ['5', '12', '14', '13'] },
    correct: 3,
    explanation: {
      el: '9 + 4 = 13 πουλιά. Από το 9 μετράμε τέσσερα: 10, 11, 12, 13.',
      en: '9 + 4 = 13 birds. From 9 we count four more: 10, 11, 12, 13.',
    },
  },
  {
    q: { el: 'Η Ελένη μάζεψε 10 κοχύλια και ο Νίκος 6. Πόσα κοχύλια μάζεψαν μαζί;', en: 'Eleni collected 10 shells and Nikos collected 6. How many shells did they collect together?' },
    options: { el: ['4', '16', '15', '17'], en: ['4', '16', '15', '17'] },
    correct: 1,
    explanation: {
      el: '10 + 6 = 16 κοχύλια. Μία δεκάδα και 6 μονάδες: 16!',
      en: '10 + 6 = 16 shells. One ten and 6 ones: 16!',
    },
  },

  // ── 6–9: how many are left ─────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιάννης είχε 9 μπαλόνια. Τα 3 έσκασαν. Πόσα μπαλόνια έμειναν;', en: 'Giannis had 9 balloons. 3 of them popped. How many balloons are left?' },
    options: { el: ['12', '5', '6', '7'], en: ['12', '5', '6', '7'] },
    correct: 2,
    explanation: {
      el: '9 − 3 = 6 μπαλόνια. Όταν κάτι φεύγει ή χαλάει, το βγάζουμε: αφαιρούμε.',
      en: '9 − 3 = 6 balloons. When something goes away or breaks, we take it off: we subtract.',
    },
  },
  {
    q: { el: 'Στο πιάτο ήταν 12 μπισκότα. Η Μαρία έφαγε 4. Πόσα μπισκότα έμειναν;', en: 'There were 12 biscuits on the plate. Maria ate 4. How many biscuits are left?' },
    options: { el: ['8', '16', '9', '7'], en: ['8', '16', '9', '7'] },
    correct: 0,
    explanation: {
      el: '12 − 4 = 8 μπισκότα. Από το 12 μετράμε τέσσερα προς τα πίσω: 11, 10, 9, 8.',
      en: '12 − 4 = 8 biscuits. From 12 we count four back: 11, 10, 9, 8.',
    },
  },
  {
    q: { el: 'Στο λεωφορείο ήταν 15 άνθρωποι. Στη στάση κατέβηκαν 5. Πόσοι έμειναν στο λεωφορείο;', en: 'There were 15 people on the bus. At the stop 5 got off. How many are left on the bus?' },
    options: { el: ['20', '11', '10', '9'], en: ['20', '11', '10', '9'] },
    correct: 2,
    explanation: {
      el: '15 − 5 = 10 άνθρωποι. Το 15 είναι 10 και 5. Αν φύγουν οι 5, μένει το 10.',
      en: '15 − 5 = 10 people. 15 is 10 and 5. If the 5 leave, 10 stays.',
    },
  },
  {
    q: { el: 'Η Σοφία είχε 20 αυτοκόλλητα και έδωσε 8 στη φίλη της. Πόσα αυτοκόλλητα έχει τώρα;', en: 'Sofia had 20 stickers and gave 8 to her friend. How many stickers does she have now?' },
    options: { el: ['28', '13', '11', '12'], en: ['28', '13', '11', '12'] },
    correct: 3,
    explanation: {
      el: '20 − 8 = 12 αυτοκόλλητα. Σκέψου: 20 − 10 = 10, αλλά έδωσε 2 λιγότερα από 10, άρα 12.',
      en: '20 − 8 = 12 stickers. Think: 20 − 10 = 10, but she gave 2 fewer than 10, so 12.',
    },
  },

  // ── 10–12: how many more ───────────────────────────────────────────────────
  {
    q: { el: 'Ο Κώστας έχει 7 μπάλες και η Δήμητρα 4. Πόσες μπάλες παραπάνω έχει ο Κώστας;', en: 'Kostas has 7 balls and Dimitra has 4. How many more balls does Kostas have?' },
    options: { el: ['11', '3', '4', '2'], en: ['11', '3', '4', '2'] },
    correct: 1,
    explanation: {
      el: '7 − 4 = 3. Για να βρούμε «πόσα παραπάνω», αφαιρούμε τον μικρό αριθμό από τον μεγάλο.',
      en: '7 − 4 = 3. To find “how many more”, we take the smaller number away from the bigger one.',
    },
  },
  {
    q: { el: 'Η Άννα είναι 9 χρονών και ο αδερφός της 6. Πόσα χρόνια μεγαλύτερη είναι η Άννα;', en: 'Anna is 9 years old and her brother is 6. How many years older is Anna?' },
    options: { el: ['15', '2', '3', '4'], en: ['15', '2', '3', '4'] },
    correct: 2,
    explanation: {
      el: '9 − 6 = 3 χρόνια. Από το 6 ως το 9 μετράμε: 7, 8, 9 — τρία βήματα.',
      en: '9 − 6 = 3 years. From 6 up to 9 we count: 7, 8, 9 — three steps.',
    },
  },
  {
    q: { el: 'Στην τάξη είναι 13 παιδιά αλλά μόνο 10 καρέκλες. Πόσες καρέκλες ακόμα χρειάζονται;', en: 'There are 13 children in the class but only 10 chairs. How many more chairs are needed?' },
    options: { el: ['3', '23', '4', '2'], en: ['3', '23', '4', '2'] },
    correct: 0,
    explanation: {
      el: '13 − 10 = 3 καρέκλες. Το 13 είναι 10 και 3, άρα λείπουν 3 καρέκλες.',
      en: '13 − 10 = 3 chairs. 13 is 10 and 3, so 3 chairs are missing.',
    },
  },

  // ── 13–15: choosing the operation ─────────────────────────────────────────
  {
    q: { el: '«Η Μαρία έχει 5 βιβλία. Της χαρίζουν 3 ακόμα.» Ποια πράξη δείχνει πόσα βιβλία έχει τώρα;', en: '«Maria has 5 books. She is given 3 more.» Which sum shows how many books she has now?' },
    options: { el: ['5 − 3', '5 + 3', '3 − 5', '5 + 5'], en: ['5 − 3', '5 + 3', '3 − 5', '5 + 5'] },
    correct: 1,
    explanation: {
      el: 'Της δίνουν κι άλλα, άρα προσθέτουμε: 5 + 3 = 8 βιβλία.',
      en: 'She gets more, so we add: 5 + 3 = 8 books.',
    },
  },
  {
    q: { el: '«Ο Νίκος είχε 10 ευρώ και αγόρασε ένα βιβλίο με 4 ευρώ.» Ποια πράξη δείχνει πόσα ευρώ του έμειναν;', en: '«Nikos had 10 euros and bought a book for 4 euros.» Which sum shows how many euros he has left?' },
    options: { el: ['10 + 4', '4 − 10', '10 − 4', '10 + 10'], en: ['10 + 4', '4 − 10', '10 − 4', '10 + 10'] },
    correct: 2,
    explanation: {
      el: 'Ξόδεψε χρήματα, άρα αφαιρούμε: 10 − 4 = 6 ευρώ. Στην αφαίρεση ο μεγάλος αριθμός μπαίνει πρώτος.',
      en: 'He spent money, so we subtract: 10 − 4 = 6 euros. In subtraction the big number goes first.',
    },
  },
  {
    q: { el: 'Πότε κάνουμε αφαίρεση σε ένα πρόβλημα;', en: 'When do we subtract in a problem?' },
    options: { el: ['Όταν κάτι φεύγει ή χάνεται', 'Όταν μας δίνουν κι άλλα', 'Όταν ενώνουμε δύο ομάδες', 'Όταν μετράμε από την αρχή'], en: ['When something goes away or is lost', 'When we are given more', 'When we join two groups', 'When we count from the start'] },
    correct: 0,
    explanation: {
      el: 'Αφαιρούμε όταν κάτι φεύγει, χάνεται, τρώγεται ή δίνεται. Όταν έρχονται κι άλλα, προσθέτουμε.',
      en: 'We subtract when something leaves, gets lost, is eaten or is given away. When more arrive, we add.',
    },
  },

  // ── 16–18: the number sentence that matches ───────────────────────────────
  {
    q: { el: 'Ποια αριθμητική πρόταση ταιριάζει; «Στη γλάστρα ήταν 6 λουλούδια. Άνθισαν 5 ακόμα.»', en: 'Which number sentence matches? «There were 6 flowers in the pot. 5 more bloomed.»' },
    options: { el: ['6 − 5 = 1', '6 + 5 = 11', '5 + 5 = 10', '6 + 6 = 12'], en: ['6 − 5 = 1', '6 + 5 = 11', '5 + 5 = 10', '6 + 6 = 12'] },
    correct: 1,
    explanation: {
      el: 'Άνθισαν κι άλλα, άρα προσθέτουμε: 6 + 5 = 11 λουλούδια.',
      en: 'More bloomed, so we add: 6 + 5 = 11 flowers.',
    },
  },
  {
    q: { el: 'Ποια αριθμητική πρόταση ταιριάζει; «Η Ρένα είχε 14 μπαλάκια. Έχασε 5.»', en: 'Which number sentence matches? «Rena had 14 little balls. She lost 5.»' },
    options: { el: ['14 + 5 = 19', '14 − 5 = 8', '14 − 5 = 9', '15 − 5 = 10'], en: ['14 + 5 = 19', '14 − 5 = 8', '14 − 5 = 9', '15 − 5 = 10'] },
    correct: 2,
    explanation: {
      el: 'Έχασε μπαλάκια, άρα αφαιρούμε: 14 − 5 = 9. Από το 14 πίσω πέντε: 13, 12, 11, 10, 9.',
      en: 'She lost some, so we subtract: 14 − 5 = 9. From 14 count five back: 13, 12, 11, 10, 9.',
    },
  },
  {
    q: { el: 'Ποια ιστορία ταιριάζει στην πράξη 8 − 3 = 5;', en: 'Which story matches the sum 8 − 3 = 5?' },
    options: { el: ['Είχα 8 καραμέλες και έφαγα 3.', 'Είχα 8 καραμέλες και πήρα 3 ακόμα.', 'Είχα 3 καραμέλες και πήρα 8 ακόμα.', 'Είχα 5 καραμέλες και έφαγα 3.'], en: ['I had 8 sweets and ate 3.', 'I had 8 sweets and got 3 more.', 'I had 3 sweets and got 8 more.', 'I had 5 sweets and ate 3.'] },
    correct: 0,
    explanation: {
      el: 'Είχα 8, έφαγα 3, έμειναν 5: 8 − 3 = 5. Το «έφαγα» σημαίνει ότι κάτι έφυγε, άρα αφαίρεση.',
      en: 'I had 8, ate 3, 5 are left: 8 − 3 = 5. “Ate” means some went away, so it is subtraction.',
    },
  },
];
