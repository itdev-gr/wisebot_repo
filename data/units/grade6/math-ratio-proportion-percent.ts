/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Αναλογίες και ποσοστά
 * ===================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–3   ratios: writing a ratio, simplifying it, keeping a ratio in a recipe
 *   4–5   proportions: the missing term, recognising equal ratios
 *   6–8   direct proportion and the rule of three (money, distance, kilos)
 *   9–10  inverse proportion: recognising it, workers and days
 *   11–13 finding a percent of a number (50%, 25%, 30%)
 *   14–18 discounts, the final price after a change, and finding the initial value
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_RATIO_PROPORTION_PERCENT: QuizQuestion[] = [
  // ── 1–3: ratios ───────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ένα καλάθι υπάρχουν 4 μήλα και 6 πορτοκάλια. Ποιος είναι ο λόγος «μήλα προς πορτοκάλια»;', en: 'A basket has 4 apples and 6 oranges. What is the ratio of apples to oranges?' },
    options: { el: ['4 : 6', '6 : 4', '4 : 10', '6 : 10'], en: ['4 : 6', '6 : 4', '4 : 10', '6 : 10'] },
    correct: 0,
    explanation: {
      el: 'Ο λόγος γράφεται με τη σειρά που τον λέμε: πρώτα τα μήλα (4), μετά τα πορτοκάλια (6). Άρα 4 : 6.',
      en: 'A ratio is written in the order we say it: apples first (4), then oranges (6). So 4 : 6.',
    },
  },
  {
    q: { el: 'Σε μια τάξη υπάρχουν 12 αγόρια και 8 κορίτσια. Ποιος είναι ο λόγος «αγόρια προς κορίτσια» στην πιο απλή μορφή;', en: 'A class has 12 boys and 8 girls. What is the ratio of boys to girls in its simplest form?' },
    options: { el: ['2 : 3', '4 : 3', '3 : 2', '6 : 2'], en: ['2 : 3', '4 : 3', '3 : 2', '6 : 2'] },
    correct: 2,
    explanation: {
      el: '12 : 8 — διαιρούμε και τους δύο αριθμούς με το 4 και γίνεται 3 : 2. Απλοποιούμε όπως ένα κλάσμα.',
      en: '12 : 8 — divide both numbers by 4 and it becomes 3 : 2. We simplify it just like a fraction.',
    },
  },
  {
    q: { el: 'Μια συνταγή θέλει 2 φλιτζάνια αλεύρι για κάθε 3 φλιτζάνια γάλα. Αν η Ελένη βάλει 6 φλιτζάνια αλεύρι, πόσα φλιτζάνια γάλα χρειάζεται;', en: 'A recipe needs 2 cups of flour for every 3 cups of milk. If Eleni uses 6 cups of flour, how many cups of milk does she need?' },
    options: { el: ['7', '9', '6', '12'], en: ['7', '9', '6', '12'] },
    correct: 1,
    explanation: {
      el: 'Το αλεύρι τριπλασιάστηκε (2 → 6), άρα τριπλασιάζουμε και το γάλα: 3 × 3 = 9 φλιτζάνια.',
      en: 'The flour was tripled (2 → 6), so we triple the milk too: 3 × 3 = 9 cups.',
    },
  },

  // ── 4–5: proportions ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει για να είναι η αναλογία σωστή; 3/4 = ___/12', en: 'Which number is missing to make the proportion true? 3/4 = ___/12' },
    options: { el: ['9', '11', '8', '16'], en: ['9', '11', '8', '16'] },
    correct: 0,
    explanation: {
      el: 'Το 4 έγινε 12, δηλαδή × 3. Κάνουμε το ίδιο και πάνω: 3 × 3 = 9. Άρα 3/4 = 9/12.',
      en: '4 became 12, that is × 3. Do the same on top: 3 × 3 = 9. So 3/4 = 9/12.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω ισότητες είναι σωστή αναλογία;', en: 'Which of these equations is a true proportion?' },
    options: { el: ['2/5 = 4/15', '2/5 = 6/10', '3/4 = 9/16', '2/5 = 6/15'], en: ['2/5 = 4/15', '2/5 = 6/10', '3/4 = 9/16', '2/5 = 6/15'] },
    correct: 3,
    explanation: {
      el: 'Στο 2/5 = 6/15 και οι δύο όροι πολλαπλασιάστηκαν με το 3. Έλεγχος: χιαστί 2 × 15 = 30 και 5 × 6 = 30. Ίσα!',
      en: 'In 2/5 = 6/15 both terms were multiplied by 3. Check: cross-multiply 2 × 15 = 30 and 5 × 6 = 30. Equal!',
    },
  },

  // ── 6–8: direct proportion & rule of three ────────────────────────────────
  {
    q: { el: '3 τετράδια κοστίζουν 4,50 €. Πόσο κοστίζουν 5 ίδια τετράδια;', en: '3 notebooks cost €4.50. How much do 5 of the same notebooks cost?' },
    options: { el: ['6,50 €', '7,50 €', '9 €', '22,50 €'], en: ['€6.50', '€7.50', '€9', '€22.50'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα το ένα: 4,50 ÷ 3 = 1,50 €. Μετά τα πέντε: 1,50 × 5 = 7,50 €.',
      en: 'First find one: 4.50 ÷ 3 = €1.50. Then five: 1.50 × 5 = €7.50.',
    },
  },
  {
    q: { el: 'Ένα αυτοκίνητο διανύει 120 χιλιόμετρα σε 2 ώρες. Με την ίδια ταχύτητα, πόσα χιλιόμετρα θα διανύσει σε 5 ώρες;', en: 'A car travels 120 kilometres in 2 hours. At the same speed, how many kilometres will it travel in 5 hours?' },
    options: { el: ['250', '240', '300', '600'], en: ['250', '240', '300', '600'] },
    correct: 2,
    explanation: {
      el: 'Σε 1 ώρα: 120 ÷ 2 = 60 χιλιόμετρα. Σε 5 ώρες: 60 × 5 = 300 χιλιόμετρα.',
      en: 'In 1 hour: 120 ÷ 2 = 60 kilometres. In 5 hours: 60 × 5 = 300 kilometres.',
    },
  },
  {
    q: { el: 'Τα κιλά μήλα που αγοράζεις και τα χρήματα που πληρώνεις είναι ποσά…', en: 'The kilos of apples you buy and the money you pay are quantities that are…' },
    options: { el: ['ανάλογα', 'αντιστρόφως ανάλογα', 'πάντα ίσα', 'ούτε ανάλογα ούτε αντιστρόφως ανάλογα'], en: ['directly proportional', 'inversely proportional', 'always equal', 'neither directly nor inversely proportional'] },
    correct: 0,
    explanation: {
      el: 'Όσο περισσότερα κιλά παίρνεις, τόσο περισσότερα πληρώνεις — με τον ίδιο ρυθμό. Διπλά κιλά, διπλά χρήματα: αυτό λέγεται ανάλογα ποσά.',
      en: 'The more kilos you take, the more you pay — at the same rate. Double the kilos, double the money: these are directly proportional quantities.',
    },
  },

  // ── 9–10: inverse proportion ──────────────────────────────────────────────
  {
    q: { el: 'Οι εργάτες που δουλεύουν και οι μέρες που χρειάζονται για να τελειώσει το ίδιο έργο είναι ποσά…', en: 'The number of workers and the number of days needed to finish the same job are quantities that are…' },
    options: { el: ['ανάλογα', 'αντιστρόφως ανάλογα', 'πάντα ίσα', 'ούτε ανάλογα ούτε αντιστρόφως ανάλογα'], en: ['directly proportional', 'inversely proportional', 'always equal', 'neither directly nor inversely proportional'] },
    correct: 1,
    explanation: {
      el: 'Όσο περισσότεροι εργάτες, τόσο λιγότερες μέρες. Διπλοί εργάτες, μισές μέρες: αυτό λέγεται αντιστρόφως ανάλογα ποσά.',
      en: 'The more workers, the fewer days. Double the workers, half the days: these are inversely proportional quantities.',
    },
  },
  {
    q: { el: '4 εργάτες βάφουν έναν φράχτη σε 6 μέρες. Σε πόσες μέρες θα τον βάψουν 8 εργάτες που δουλεύουν με τον ίδιο ρυθμό;', en: '4 workers paint a fence in 6 days. How many days will 8 workers take, working at the same pace?' },
    options: { el: ['12', '3', '2', '10'], en: ['12', '3', '2', '10'] },
    correct: 1,
    explanation: {
      el: 'Οι εργάτες διπλασιάστηκαν (4 → 8), άρα οι μέρες γίνονται οι μισές: 6 ÷ 2 = 3 μέρες. Περισσότερα χέρια, λιγότερος χρόνος!',
      en: 'The workers doubled (4 → 8), so the days are halved: 6 ÷ 2 = 3 days. More hands, less time!',
    },
  },

  // ── 11–13: finding a percent ──────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει το 50% του 80;', en: 'What is 50% of 80?' },
    options: { el: ['30', '50', '8', '40'], en: ['30', '50', '8', '40'] },
    correct: 3,
    explanation: {
      el: '50% σημαίνει τα μισά. Τα μισά του 80 είναι 80 ÷ 2 = 40.',
      en: '50% means half. Half of 80 is 80 ÷ 2 = 40.',
    },
  },
  {
    q: { el: 'Πόσο κάνει το 25% του 60;', en: 'What is 25% of 60?' },
    options: { el: ['15', '25', '12', '20'], en: ['15', '25', '12', '20'] },
    correct: 0,
    explanation: {
      el: '25% είναι το ένα τέταρτο. 60 ÷ 4 = 15. (Το 25 είναι το ποσοστό, όχι η απάντηση!)',
      en: '25% is one quarter. 60 ÷ 4 = 15. (25 is the percent, not the answer!)',
    },
  },
  {
    q: { el: 'Πόσο κάνει το 30% του 250;', en: 'What is 30% of 250?' },
    options: { el: ['7,5', '220', '75', '30'], en: ['7.5', '220', '75', '30'] },
    correct: 2,
    explanation: {
      el: '30% = 30/100. Άρα 250 × 30 ÷ 100 = 7.500 ÷ 100 = 75. Ή: 10% του 250 είναι 25, και 3 × 25 = 75.',
      en: '30% = 30/100. So 250 × 30 ÷ 100 = 7,500 ÷ 100 = 75. Or: 10% of 250 is 25, and 3 × 25 = 75.',
    },
  },

  // ── 14–18: discounts, final value, initial value ──────────────────────────
  {
    q: { el: 'Ένα ζευγάρι παπούτσια κοστίζει 40 € και έχει έκπτωση 20%. Πόσα ευρώ είναι η έκπτωση;', en: 'A pair of shoes costs €40 and has a 20% discount. How many euros is the discount?' },
    options: { el: ['8 €', '20 €', '32 €', '4 €'], en: ['€8', '€20', '€32', '€4'] },
    correct: 0,
    explanation: {
      el: 'Η έκπτωση είναι το 20% του 40: 40 × 20 ÷ 100 = 8 €. (Τα 32 € είναι η τελική τιμή, όχι η έκπτωση.)',
      en: 'The discount is 20% of 40: 40 × 20 ÷ 100 = €8. (€32 is the final price, not the discount.)',
    },
  },
  {
    q: { el: 'Ένα επιτραπέζιο παιχνίδι κοστίζει 60 € και έχει έκπτωση 15%. Πόσο θα πληρώσει ο Γιώργος;', en: 'A board game costs €60 and has a 15% discount. How much will Giorgos pay?' },
    options: { el: ['45 €', '51 €', '9 €', '54 €'], en: ['€45', '€51', '€9', '€54'] },
    correct: 1,
    explanation: {
      el: 'Έκπτωση: 60 × 15 ÷ 100 = 9 €. Τελική τιμή: 60 − 9 = 51 €. Πρώτα βρίσκουμε την έκπτωση, μετά την αφαιρούμε.',
      en: 'Discount: 60 × 15 ÷ 100 = €9. Final price: 60 − 9 = €51. First find the discount, then subtract it.',
    },
  },
  {
    q: { el: 'Ένα εισιτήριο για το θέατρο κόστιζε 50 €. Η τιμή ανέβηκε κατά 10%. Πόσο κοστίζει τώρα;', en: 'A theatre ticket cost €50. The price went up by 10%. How much does it cost now?' },
    options: { el: ['60 €', '51 €', '45 €', '55 €'], en: ['€60', '€51', '€45', '€55'] },
    correct: 3,
    explanation: {
      el: 'Αύξηση: 50 × 10 ÷ 100 = 5 €. Νέα τιμή: 50 + 5 = 55 €. Στην αύξηση προσθέτουμε, στην έκπτωση αφαιρούμε.',
      en: 'Increase: 50 × 10 ÷ 100 = €5. New price: 50 + 5 = €55. For an increase we add, for a discount we subtract.',
    },
  },
  {
    q: { el: 'Μετά από έκπτωση 20%, μια τσάντα κοστίζει 32 €. Πόσο κόστιζε πριν την έκπτωση;', en: 'After a 20% discount, a bag costs €32. How much did it cost before the discount?' },
    options: { el: ['40 €', '38,40 €', '52 €', '36 €'], en: ['€40', '€38.40', '€52', '€36'] },
    correct: 0,
    explanation: {
      el: 'Τα 32 € είναι το 80% της αρχικής τιμής (100% − 20%). Το 1% είναι 32 ÷ 80 = 0,40 €, άρα το 100% είναι 0,40 × 100 = 40 €.',
      en: '€32 is 80% of the original price (100% − 20%). 1% is 32 ÷ 80 = €0.40, so 100% is 0.40 × 100 = €40.',
    },
  },
  {
    q: { el: 'Οι οικονομίες της Μαρίας αυξήθηκαν κατά 25% και τώρα έχει 75 €. Πόσα ευρώ είχε στην αρχή;', en: 'Maria\'s savings grew by 25% and now she has €75. How many euros did she have at the start?' },
    options: { el: ['50 €', '56,25 €', '60 €', '100 €'], en: ['€50', '€56.25', '€60', '€100'] },
    correct: 2,
    explanation: {
      el: 'Τα 75 € είναι το 125% του αρχικού ποσού (100% + 25%). Το 1% είναι 75 ÷ 125 = 0,60 €, άρα το 100% είναι 60 €. Έλεγχος: 60 + 15 = 75.',
      en: '€75 is 125% of the starting amount (100% + 25%). 1% is 75 ÷ 125 = €0.60, so 100% is €60. Check: 60 + 15 = 75.',
    },
  },
];
