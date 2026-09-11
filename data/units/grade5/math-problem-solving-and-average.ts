/**
 * Ε' Δημοτικού · Μαθηματικά · Προβλήματα & Μέσος όρος
 * ===================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–4   the mean: a tiny set, test marks with a decimal answer, the rule, from mean back to sum
 *   5–8   unit price and total cost: price × quantity, quantity → unit price, two-step shopping
 *   9–12  multi-step problems: buses with a remainder, change, two groups, box-then-sell
 *   13–15 working backwards: undoing ×3 and +4, money spent, halves and gifts
 *   16–18 choosing the reasonable answer: a child's weight, catching a silly result, estimating
 * Distractors are real child mistakes: forgetting to divide the sum, rounding a bus count
 * down, doing only the first step, undoing the steps in the wrong order.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_PROBLEM_SOLVING_AND_AVERAGE: QuizQuestion[] = [
  // ── 1–4: the mean ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο μέσος όρος των αριθμών 4, 6 και 8;', en: 'What is the mean (average) of the numbers 4, 6 and 8?' },
    options: { el: ['5', '6', '18', '8'], en: ['5', '6', '18', '8'] },
    correct: 1,
    explanation: {
      el: 'Προσθέτουμε: 4 + 6 + 8 = 18. Διαιρούμε με το πλήθος των αριθμών, που είναι 3: 18 ÷ 3 = 6.',
      en: 'Add them: 4 + 6 + 8 = 18. Divide by how many numbers there are, which is 3: 18 ÷ 3 = 6.',
    },
  },
  {
    q: { el: 'Ο Νίκος πήρε 7, 9, 8 και 10 σε τέσσερα τεστ. Ποιος είναι ο μέσος όρος του;', en: 'Nikos scored 7, 9, 8 and 10 in four tests. What is his mean score?' },
    options: { el: ['8', '9', '34', '8,5'], en: ['8', '9', '34', '8.5'] },
    correct: 3,
    explanation: {
      el: '7 + 9 + 8 + 10 = 34. Τέσσερα τεστ, άρα 34 ÷ 4 = 8,5. Ο μέσος όρος μπορεί να είναι και δεκαδικός!',
      en: '7 + 9 + 8 + 10 = 34. Four tests, so 34 ÷ 4 = 8.5. The mean can be a decimal too!',
    },
  },
  {
    q: { el: 'Πώς βρίσκουμε τον μέσο όρο μερικών αριθμών;', en: 'How do we find the mean of a few numbers?' },
    options: { el: ['Προσθέτουμε τους αριθμούς και διαιρούμε με το πλήθος τους', 'Παίρνουμε τον μεγαλύτερο αριθμό', 'Προσθέτουμε τους αριθμούς και πολλαπλασιάζουμε με το πλήθος τους', 'Παίρνουμε τον αριθμό που βρίσκεται στη μέση'], en: ['Add the numbers and divide by how many there are', 'Take the biggest number', 'Add the numbers and multiply by how many there are', 'Take the number that sits in the middle'] },
    correct: 0,
    explanation: {
      el: 'Ο μέσος όρος «μοιράζει δίκαια» το σύνολο σε όλους: άθροισμα ÷ πλήθος. Για τα 4, 6, 8: 18 ÷ 3 = 6.',
      en: 'The mean "shares out" the total fairly among all of them: sum ÷ count. For 4, 6, 8: 18 ÷ 3 = 6.',
    },
  },
  {
    q: { el: 'Ο μέσος όρος τριών αριθμών είναι 10. Ποιο είναι το άθροισμά τους;', en: 'The mean of three numbers is 10. What is their sum?' },
    options: { el: ['10', '13', '30', '3'], en: ['10', '13', '30', '3'] },
    correct: 2,
    explanation: {
      el: 'Αφού άθροισμα ÷ 3 = 10, το άθροισμα είναι 10 × 3 = 30. Για παράδειγμα, οι αριθμοί 8, 10 και 12 έχουν άθροισμα 30 και μέσο όρο 10.',
      en: 'Since sum ÷ 3 = 10, the sum is 10 × 3 = 30. For example, the numbers 8, 10 and 12 add to 30 and have a mean of 10.',
    },
  },

  // ── 5–8: unit price and total cost ────────────────────────────────────────
  {
    q: { el: 'Ένα τετράδιο κοστίζει 1,50 €. Πόσο κοστίζουν 6 τετράδια;', en: 'One notebook costs €1.50. How much do 6 notebooks cost?' },
    options: { el: ['7,50 €', '6,50 €', '9 €', '10 €'], en: ['€7.50', '€6.50', '€9', '€10'] },
    correct: 2,
    explanation: {
      el: 'Τιμή μονάδας × ποσότητα: 1,50 × 6 = 9 €. Σκέψου το: 6 ευρώ από τα ολόκληρα και 6 × 50 λεπτά = 3 ευρώ, σύνολο 9 €.',
      en: 'Unit price × quantity: 1.50 × 6 = €9. Think of it as 6 euros from the wholes plus 6 × 50 cents = 3 euros, total €9.',
    },
  },
  {
    q: { el: '4 ίδια στιλό κοστίζουν 6 €. Πόσο κοστίζει το ένα στιλό;', en: '4 identical pens cost €6. How much does one pen cost?' },
    options: { el: ['2 €', '1,50 €', '24 €', '1,25 €'], en: ['€2', '€1.50', '€24', '€1.25'] },
    correct: 1,
    explanation: {
      el: 'Για να βρούμε την τιμή του ενός, διαιρούμε: 6 ÷ 4 = 1,50 €. Έλεγχος: 4 × 1,50 = 6 €.',
      en: 'To find the price of one, divide: 6 ÷ 4 = €1.50. Check: 4 × 1.50 = €6.',
    },
  },
  {
    q: { el: '3 κιλά πορτοκάλια κοστίζουν 4,50 €. Πόσο κοστίζουν 5 κιλά;', en: '3 kilograms of oranges cost €4.50. How much do 5 kilograms cost?' },
    options: { el: ['7,50 €', '6,50 €', '13,50 €', '7 €'], en: ['€7.50', '€6.50', '€13.50', '€7'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα το 1 κιλό: 4,50 ÷ 3 = 1,50 €. Μετά τα 5 κιλά: 1,50 × 5 = 7,50 €.',
      en: 'First 1 kilogram: 4.50 ÷ 3 = €1.50. Then 5 kilograms: 1.50 × 5 = €7.50.',
    },
  },
  {
    q: { el: 'Η Άννα αγόρασε 2 βιβλία των 8 € και 3 τετράδια των 1,20 €. Πόσο πλήρωσε συνολικά;', en: 'Anna bought 2 books at €8 each and 3 notebooks at €1.20 each. How much did she pay in total?' },
    options: { el: ['17,20 €', '9,20 €', '20,60 €', '19,60 €'], en: ['€17.20', '€9.20', '€20.60', '€19.60'] },
    correct: 3,
    explanation: {
      el: 'Βιβλία: 2 × 8 = 16 €. Τετράδια: 3 × 1,20 = 3,60 €. Σύνολο: 16 + 3,60 = 19,60 €.',
      en: 'Books: 2 × 8 = €16. Notebooks: 3 × 1.20 = €3.60. Total: 16 + 3.60 = €19.60.',
    },
  },

  // ── 9–12: multi-step problems ─────────────────────────────────────────────
  {
    q: { el: 'Στην εκδρομή πηγαίνουν 175 παιδιά. Κάθε λεωφορείο έχει 45 θέσεις. Πόσα λεωφορεία χρειάζονται;', en: '175 children are going on the trip. Each bus has 45 seats. How many buses are needed?' },
    options: { el: ['3', '4', '5', '130'], en: ['3', '4', '5', '130'] },
    correct: 1,
    explanation: {
      el: '175 ÷ 45 = 3 και περισσεύουν 40 παιδιά (3 × 45 = 135). Αυτά τα 40 παιδιά χρειάζονται κι άλλο λεωφορείο, άρα 4 λεωφορεία.',
      en: '175 ÷ 45 = 3 with 40 children left over (3 × 45 = 135). Those 40 children need another bus, so 4 buses.',
    },
  },
  {
    q: { el: 'Ο Γιώργος είχε 50 €. Αγόρασε 3 επιτραπέζια παιχνίδια των 12 € το καθένα. Πόσα χρήματα του έμειναν;', en: 'Giorgos had €50. He bought 3 board games at €12 each. How much money did he have left?' },
    options: { el: ['38 €', '16 €', '14 €', '24 €'], en: ['€38', '€16', '€14', '€24'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα πόσο ξόδεψε: 3 × 12 = 36 €. Μετά τι έμεινε: 50 − 36 = 14 €. (Το 38 βγαίνει αν αφαιρέσεις μόνο ένα παιχνίδι!)',
      en: 'First what he spent: 3 × 12 = €36. Then what is left: 50 − 36 = €14. (38 is what you get if you subtract only one game!)',
    },
  },
  {
    q: { el: 'Ένα σχολείο έχει 6 τάξεις με 24 μαθητές η καθεμία και 2 τάξεις με 22 μαθητές η καθεμία. Πόσους μαθητές έχει συνολικά;', en: 'A school has 6 classes with 24 pupils each and 2 classes with 22 pupils each. How many pupils does it have in total?' },
    options: { el: ['188', '168', '184', '190'], en: ['188', '168', '184', '190'] },
    correct: 0,
    explanation: {
      el: 'Οι μεγάλες τάξεις: 6 × 24 = 144. Οι μικρές: 2 × 22 = 44. Σύνολο: 144 + 44 = 188 μαθητές.',
      en: 'The bigger classes: 6 × 24 = 144. The smaller ones: 2 × 22 = 44. Total: 144 + 44 = 188 pupils.',
    },
  },
  {
    q: { el: 'Ένας αγρότης μάζεψε 240 κιλά μήλα και τα έβαλε σε κιβώτια των 8 κιλών. Πούλησε κάθε κιβώτιο 5 €. Πόσα χρήματα εισέπραξε;', en: 'A farmer picked 240 kilograms of apples and packed them in 8-kilogram boxes. He sold each box for €5. How much money did he collect?' },
    options: { el: ['30 €', '120 €', '1.200 €', '150 €'], en: ['€30', '€120', '€1,200', '€150'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα τα κιβώτια: 240 ÷ 8 = 30 κιβώτια. Μετά τα χρήματα: 30 × 5 = 150 €.',
      en: 'First the boxes: 240 ÷ 8 = 30 boxes. Then the money: 30 × 5 = €150.',
    },
  },

  // ── 13–15: working backwards ──────────────────────────────────────────────
  {
    q: { el: 'Σκέφτηκα έναν αριθμό, τον πολλαπλασίασα με το 3 και πρόσθεσα 4. Βρήκα 25. Ποιον αριθμό σκέφτηκα;', en: 'I thought of a number, multiplied it by 3 and added 4. I got 25. What number did I think of?' },
    options: { el: ['7', '8', '9', '21'], en: ['7', '8', '9', '21'] },
    correct: 0,
    explanation: {
      el: 'Πάμε ανάποδα, από το τέλος: 25 − 4 = 21 (ξεκάνουμε την πρόσθεση), μετά 21 ÷ 3 = 7 (ξεκάνουμε τον πολλαπλασιασμό). Έλεγχος: 7 × 3 + 4 = 25.',
      en: 'Go backwards from the end: 25 − 4 = 21 (undo the adding), then 21 ÷ 3 = 7 (undo the multiplying). Check: 7 × 3 + 4 = 25.',
    },
  },
  {
    q: { el: 'Η Μαρία ξόδεψε 12 € στο βιβλιοπωλείο και της έμειναν 18 €. Πόσα χρήματα είχε στην αρχή;', en: 'Maria spent €12 at the bookshop and had €18 left. How much money did she have at the start?' },
    options: { el: ['6 €', '24 €', '30 €', '28 €'], en: ['€6', '€24', '€30', '€28'] },
    correct: 2,
    explanation: {
      el: 'Για να γυρίσουμε πίσω, «ξαναβάζουμε» τα χρήματα που ξόδεψε: 18 + 12 = 30 €. Έλεγχος: 30 − 12 = 18.',
      en: 'To go back, we "put back" the money she spent: 18 + 12 = €30. Check: 30 − 12 = 18.',
    },
  },
  {
    q: { el: 'Ο Πέτρος έδωσε τα μισά αυτοκόλλητά του στον αδερφό του και μετά άλλα 5 σε μια φίλη του. Του έμειναν 15. Πόσα αυτοκόλλητα είχε στην αρχή;', en: 'Petros gave half of his stickers to his brother and then 5 more to a friend. He had 15 left. How many stickers did he have at the start?' },
    options: { el: ['25', '40', '35', '30'], en: ['25', '40', '35', '30'] },
    correct: 1,
    explanation: {
      el: 'Ανάποδα: πριν δώσει τα 5 είχε 15 + 5 = 20. Τα 20 ήταν τα μισά, άρα στην αρχή είχε 20 × 2 = 40. Έλεγχος: 40 ÷ 2 = 20, 20 − 5 = 15.',
      en: 'Backwards: before giving away 5 he had 15 + 5 = 20. That 20 was half, so at the start he had 20 × 2 = 40. Check: 40 ÷ 2 = 20, 20 − 5 = 15.',
    },
  },

  // ── 16–18: choosing the reasonable answer ─────────────────────────────────
  {
    q: { el: 'Πόσο περίπου ζυγίζει ένα παιδί της Ε\' Δημοτικού;', en: 'About how much does a child in the fifth grade weigh?' },
    options: { el: ['4 κιλά', '400 κιλά', '40 κιλά', '40 γραμμάρια'], en: ['4 kilograms', '400 kilograms', '40 kilograms', '40 grams'] },
    correct: 2,
    explanation: {
      el: 'Ένα μωρό ζυγίζει περίπου 4 κιλά και ένα άλογο περίπου 400 κιλά. Για ένα παιδί 10–11 ετών η λογική απάντηση είναι περίπου 40 κιλά.',
      en: 'A baby weighs about 4 kilograms and a horse about 400 kilograms. For a child of 10–11 the sensible answer is about 40 kilograms.',
    },
  },
  {
    q: { el: 'Η Ελένη υπολόγισε 48 × 21 και βρήκε 108. Είναι λογικό το αποτέλεσμά της;', en: 'Eleni worked out 48 × 21 and got 108. Is her result reasonable?' },
    options: { el: ['Ναι, είναι σωστό', 'Όχι, η σωστή απάντηση είναι 69', 'Ναι, γιατί 48 + 21 = 69', 'Όχι, γιατί 50 × 20 = 1.000, άρα η απάντηση πρέπει να είναι κοντά στο 1.000'], en: ['Yes, it is correct', 'No, the right answer is 69', 'Yes, because 48 + 21 = 69', 'No, because 50 × 20 = 1,000, so the answer must be close to 1,000'] },
    correct: 3,
    explanation: {
      el: 'Στρογγυλοποιούμε για να ελέγξουμε: 48 ≈ 50 και 21 ≈ 20, άρα 50 × 20 = 1.000. Το 108 είναι πολύ μικρό. Το σωστό είναι 48 × 21 = 1.008.',
      en: 'Round to check: 48 ≈ 50 and 21 ≈ 20, so 50 × 20 = 1,000. 108 is far too small. The right answer is 48 × 21 = 1,008.',
    },
  },
  {
    q: { el: 'Ένας κινηματογράφος έχει 12 σειρές με 18 καθίσματα η καθεμία. Ποια εκτίμηση είναι πιο κοντά στον συνολικό αριθμό καθισμάτων;', en: 'A cinema has 12 rows with 18 seats each. Which estimate is closest to the total number of seats?' },
    options: { el: ['περίπου 200', 'περίπου 30', 'περίπου 100', 'περίπου 2.000'], en: ['about 200', 'about 30', 'about 100', 'about 2,000'] },
    correct: 0,
    explanation: {
      el: 'Στρογγυλοποιούμε: 12 ≈ 10 και 18 ≈ 20, άρα 10 × 20 = 200. Το ακριβές είναι 12 × 18 = 216 — πράγματι κοντά στο 200.',
      en: 'Round: 12 ≈ 10 and 18 ≈ 20, so 10 × 20 = 200. The exact answer is 12 × 18 = 216 — indeed close to 200.',
    },
  },
];
