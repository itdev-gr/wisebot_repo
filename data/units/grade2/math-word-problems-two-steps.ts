/**
 * Β' Δημοτικού · Μαθηματικά · Προβλήματα με δύο βήματα
 * =====================================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–3   choosing the operations: which two steps does the story need?
 *   4–7   add then subtract / subtract then add (bus stops, beads, apples, absent pupils)
 *   8–11  multiply then add or subtract (3 packs of 5 plus 2, rows of chocolates)
 *   12–15 euro problems with change: add the prices, then take away from what we paid
 *   16–18 checking the answer: spot the wrong step, does the answer make sense, the opposite sum
 * Distractors are real child mistakes: stopping after the first step, doing the second step
 * with the wrong operation, adding every number in the story, forgetting the change.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_WORD_PROBLEMS_TWO_STEPS: QuizQuestion[] = [
  // ── 1–3: choosing the operations ────────────────────────────────────────────
  {
    q: { el: 'Η Άννα είχε 8 αυτοκόλλητα, πήρε 5 ακόμα και μετά έδωσε 3 στη φίλη της. Ποιες δύο πράξεις κάνουμε;', en: 'Anna had 8 stickers, got 5 more and then gave 3 to her friend. Which two sums do we do?' },
    options: { el: ['δύο προσθέσεις', 'πρώτα πρόσθεση, μετά αφαίρεση', 'δύο αφαιρέσεις', 'πρώτα πολλαπλασιασμό, μετά πρόσθεση'], en: ['two additions', 'first add, then subtract', 'two subtractions', 'first multiply, then add'] },
    correct: 1,
    explanation: {
      el: '«Πήρε ακόμα» = προσθέτουμε: 8 + 5 = 13. «Έδωσε» = αφαιρούμε: 13 − 3 = 10 αυτοκόλλητα.',
      en: '"Got more" = we add: 8 + 5 = 13. "Gave away" = we subtract: 13 − 3 = 10 stickers.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 3 πακέτα με 5 μπισκότα το καθένα και ακόμα 2 μπισκότα στο χέρι. Ποιες πράξεις κάνουμε για να τα μετρήσουμε όλα;', en: 'Nikos has 3 packs of 5 biscuits each and 2 more biscuits in his hand. Which sums do we do to count them all?' },
    options: { el: ['πρόσθεση και μετά αφαίρεση', 'μόνο πρόσθεση', 'πολλαπλασιασμό και μετά πρόσθεση', 'αφαίρεση και μετά πολλαπλασιασμό'], en: ['add and then subtract', 'only add', 'multiply and then add', 'subtract and then multiply'] },
    correct: 2,
    explanation: {
      el: 'Τα πακέτα είναι ίδιες ομάδες, άρα πολλαπλασιάζουμε: 3 × 5 = 15. Μετά προσθέτουμε τα 2: 15 + 2 = 17.',
      en: 'The packs are equal groups, so we multiply: 3 × 5 = 15. Then we add the 2: 15 + 2 = 17.',
    },
  },
  {
    q: { el: 'Τι κάνουμε πρώτα σε ένα πρόβλημα με δύο βήματα;', en: 'What do we do first in a two-step problem?' },
    options: { el: ['γράφουμε αμέσως έναν αριθμό', 'προσθέτουμε όλους τους αριθμούς που βλέπουμε', 'διαβάζουμε προσεκτικά και βρίσκουμε τι ζητάει', 'μαντεύουμε την απάντηση'], en: ['write down a number straight away', 'add up every number we see', 'read carefully and find what it asks', 'guess the answer'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα διαβάζουμε και καταλαβαίνουμε την ιστορία. Μετά βρίσκουμε το πρώτο βήμα, και το αποτέλεσμά του μας βοηθάει στο δεύτερο.',
      en: 'First we read and understand the story. Then we find the first step, and its answer helps us with the second.',
    },
  },

  // ── 4–7: add and subtract ─────────────────────────────────────────────────
  {
    q: { el: 'Στο λεωφορείο ήταν 12 άτομα. Στη στάση ανέβηκαν 6 και κατέβηκαν 4. Πόσα άτομα είναι τώρα στο λεωφορείο;', en: 'There were 12 people on the bus. At the stop 6 got on and 4 got off. How many people are on the bus now?' },
    options: { el: ['14', '22', '10', '18'], en: ['14', '22', '10', '18'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα ανέβηκαν: 12 + 6 = 18. Μετά κατέβηκαν: 18 − 4 = 14 άτομα.',
      en: 'First they got on: 12 + 6 = 18. Then they got off: 18 − 4 = 14 people.',
    },
  },
  {
    q: { el: 'Η Μαρία είχε 20 χάντρες. Έδωσε 7 στην Ελένη και μετά βρήκε 5 ακόμα. Πόσες χάντρες έχει τώρα;', en: 'Maria had 20 beads. She gave 7 to Eleni and then found 5 more. How many beads does she have now?' },
    options: { el: ['8', '18', '32', '13'], en: ['8', '18', '32', '13'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα έδωσε: 20 − 7 = 13. Μετά βρήκε: 13 + 5 = 18 χάντρες.',
      en: 'First she gave: 20 − 7 = 13. Then she found: 13 + 5 = 18 beads.',
    },
  },
  {
    q: { el: 'Στο καλάθι είχε 15 μήλα. Η μαμά έβαλε 9 ακόμα και μετά φάγαμε 6. Πόσα μήλα έμειναν;', en: 'The basket had 15 apples. Mum put in 9 more and then we ate 6. How many apples are left?' },
    options: { el: ['30', '24', '18', '12'], en: ['30', '24', '18', '12'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα η μαμά: 15 + 9 = 24. Μετά φάγαμε: 24 − 6 = 18 μήλα. (Το 24 είναι μόνο το πρώτο βήμα!)',
      en: 'First mum: 15 + 9 = 24. Then we ate: 24 − 6 = 18 apples. (24 is only the first step!)',
    },
  },
  {
    q: { el: 'Στην τάξη είναι 11 κορίτσια και 13 αγόρια. Σήμερα λείπουν 4 παιδιά. Πόσα παιδιά είναι σήμερα στην τάξη;', en: 'The class has 11 girls and 13 boys. Today 4 children are absent. How many children are in class today?' },
    options: { el: ['28', '24', '8', '20'], en: ['28', '24', '8', '20'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα όλα τα παιδιά: 11 + 13 = 24. Μετά βγάζουμε όσα λείπουν: 24 − 4 = 20 παιδιά.',
      en: 'First all the children: 11 + 13 = 24. Then take away the absent ones: 24 − 4 = 20 children.',
    },
  },

  // ── 8–11: multiply, then add or subtract ──────────────────────────────────
  {
    q: { el: 'Ο Γιάννης έχει 3 πακέτα με 5 μαρκαδόρους το καθένα και 2 μαρκαδόρους ακόμα. Πόσους μαρκαδόρους έχει;', en: 'Giannis has 3 packs of 5 markers each and 2 more markers. How many markers does he have?' },
    options: { el: ['10', '15', '17', '30'], en: ['10', '15', '17', '30'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα τα πακέτα: 3 × 5 = 15. Μετά οι 2 ακόμα: 15 + 2 = 17 μαρκαδόροι.',
      en: 'First the packs: 3 × 5 = 15. Then the 2 more: 15 + 2 = 17 markers.',
    },
  },
  {
    q: { el: 'Σε 4 πιάτα υπάρχουν 6 κεφτεδάκια το καθένα. Φάγαμε 5. Πόσα κεφτεδάκια έμειναν;', en: 'On 4 plates there are 6 meatballs each. We ate 5. How many meatballs are left?' },
    options: { el: ['19', '24', '15', '29'], en: ['19', '24', '15', '29'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα όλα τα κεφτεδάκια: 4 × 6 = 24. Μετά φάγαμε: 24 − 5 = 19.',
      en: 'First all the meatballs: 4 × 6 = 24. Then we ate: 24 − 5 = 19.',
    },
  },
  {
    q: { el: 'Η Κατερίνα διαβάζει 10 σελίδες κάθε μέρα για 3 μέρες. Το βιβλίο έχει 40 σελίδες. Πόσες σελίδες της μένουν;', en: 'Katerina reads 10 pages a day for 3 days. The book has 40 pages. How many pages does she have left?' },
    options: { el: ['70', '30', '13', '10'], en: ['70', '30', '13', '10'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα πόσες διάβασε: 3 × 10 = 30. Μετά πόσες μένουν: 40 − 30 = 10 σελίδες.',
      en: 'First how many she read: 3 × 10 = 30. Then how many are left: 40 − 30 = 10 pages.',
    },
  },
  {
    q: { el: 'Ένα κουτί έχει 2 σειρές με 8 σοκολατάκια η καθεμία. Ο Πέτρος τρώει 3. Πόσα σοκολατάκια μένουν;', en: 'A box has 2 rows of 8 chocolates each. Petros eats 3. How many chocolates are left?' },
    options: { el: ['5', '13', '16', '19'], en: ['5', '13', '16', '19'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα όλο το κουτί: 2 × 8 = 16. Μετά έφαγε: 16 − 3 = 13 σοκολατάκια.',
      en: 'First the whole box: 2 × 8 = 16. Then he ate: 16 − 3 = 13 chocolates.',
    },
  },

  // ── 12–15: euro problems with change ──────────────────────────────────────
  {
    q: { el: 'Ο Δημήτρης έχει 10 €. Αγοράζει ένα τετράδιο με 3 € και ένα μολύβι με 1 €. Πόσα ρέστα παίρνει;', en: 'Dimitris has €10. He buys a notebook for €3 and a pencil for €1. How much change does he get?' },
    options: { el: ['4 €', '6 €', '7 €', '14 €'], en: ['€4', '€6', '€7', '€14'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα πόσο κοστίζουν μαζί: 3 + 1 = 4 €. Μετά τα ρέστα: 10 − 4 = 6 €.',
      en: 'First how much they cost together: 3 + 1 = €4. Then the change: 10 − 4 = €6.',
    },
  },
  {
    q: { el: 'Η Σοφία αγοράζει 2 παγωτά με 2 € το καθένα και δίνει 5 €. Πόσα ρέστα παίρνει;', en: 'Sofia buys 2 ice creams for €2 each and pays with €5. How much change does she get?' },
    options: { el: ['3 €', '1 €', '9 €', '4 €'], en: ['€3', '€1', '€9', '€4'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα τα παγωτά: 2 × 2 = 4 €. Μετά τα ρέστα: 5 − 4 = 1 €.',
      en: 'First the ice creams: 2 × 2 = €4. Then the change: 5 − 4 = €1.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 20 €. Αγοράζει ένα βιβλίο με 12 € και μετά η γιαγιά τής δίνει 5 €. Πόσα ευρώ έχει τώρα;', en: 'Eleni has €20. She buys a book for €12 and then her grandma gives her €5. How many euros does she have now?' },
    options: { el: ['8 €', '37 €', '3 €', '13 €'], en: ['€8', '€37', '€3', '€13'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα το βιβλίο: 20 − 12 = 8 €. Μετά η γιαγιά: 8 + 5 = 13 €.',
      en: 'First the book: 20 − 12 = €8. Then grandma: 8 + 5 = €13.',
    },
  },
  {
    q: { el: 'Ο Άρης αγοράζει 3 κουλούρια με 1 € το καθένα και έναν χυμό με 2 €. Δίνει 10 €. Πόσα ρέστα παίρνει;', en: 'Aris buys 3 bread rings for €1 each and a juice for €2. He pays with €10. How much change does he get?' },
    options: { el: ['5 €', '7 €', '8 €', '15 €'], en: ['€5', '€7', '€8', '€15'] },
    correct: 0,
    explanation: {
      el: 'Τα κουλούρια: 3 × 1 = 3 €. Με τον χυμό: 3 + 2 = 5 €. Τα ρέστα: 10 − 5 = 5 €.',
      en: 'The bread rings: 3 × 1 = €3. With the juice: 3 + 2 = €5. The change: 10 − 5 = €5.',
    },
  },

  // ── 16–18: checking the answer ────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος λύνει: «Είχα 9 βόλους, κέρδισα 6 και έχασα 2.» Γράφει 9 + 6 = 15 και 15 + 2 = 17. Τι λάθος έκανε;', en: 'Nikos solves: "I had 9 marbles, I won 6 and lost 2." He writes 9 + 6 = 15 and 15 + 2 = 17. What mistake did he make?' },
    options: { el: ['το 9 + 6 δεν κάνει 15', 'στο δεύτερο βήμα πρόσθεσε αντί να αφαιρέσει', 'έπρεπε να πολλαπλασιάσει', 'δεν έκανε κανένα λάθος'], en: ['9 + 6 is not 15', 'in the second step he added instead of subtracting', 'he should have multiplied', 'he made no mistake'] },
    correct: 1,
    explanation: {
      el: '«Έχασα 2» σημαίνει αφαίρεση. Το σωστό είναι 15 − 2 = 13 βόλοι.',
      en: '"I lost 2" means subtraction. The right answer is 15 − 2 = 13 marbles.',
    },
  },
  {
    q: { el: 'Η Άννα είχε 10 καραμέλες, έδωσε μερικές στον αδερφό της και λέει ότι της έμειναν 25. Μπορεί να είναι σωστό;', en: 'Anna had 10 sweets, gave some to her brother and says she has 25 left. Can that be right?' },
    options: { el: ['ναι, είναι σωστό', 'ναι, γιατί το 25 είναι μεγαλύτερο', 'όχι, όταν δίνουμε μένουν λιγότερες, όχι περισσότερες', 'δεν μπορούμε να ξέρουμε'], en: ['yes, it is right', 'yes, because 25 is bigger', 'no, when we give some away we have fewer, not more', 'we cannot know'] },
    correct: 2,
    explanation: {
      el: 'Όταν δίνουμε, ο αριθμός μικραίνει. Αν είχε 10, δεν μπορεί να της μείνουν 25. Πάντα ρωτάμε: «Βγάζει νόημα η απάντηση;»',
      en: 'When we give some away, the number gets smaller. If she had 10, she cannot have 25 left. Always ask: "Does the answer make sense?"',
    },
  },
  {
    q: { el: 'Λύσαμε 18 − 5 = 13. Με ποια πράξη ελέγχουμε ότι είναι σωστό;', en: 'We solved 18 − 5 = 13. Which sum checks that it is right?' },
    options: { el: ['13 + 5 = 18', '18 + 5 = 23', '13 − 5 = 8', '5 + 5 = 10'], en: ['13 + 5 = 18', '18 + 5 = 23', '13 − 5 = 8', '5 + 5 = 10'] },
    correct: 0,
    explanation: {
      el: 'Η αντίθετη πράξη της αφαίρεσης είναι η πρόσθεση. Αν 13 + 5 μας δίνει πίσω το 18, η αφαίρεση ήταν σωστή!',
      en: 'The opposite of subtraction is addition. If 13 + 5 gives us 18 back, the subtraction was right!',
    },
  },
];
