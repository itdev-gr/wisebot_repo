/**
 * Δ' Δημοτικού · Μαθηματικά · Λύνω προβλήματα
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. Ordered from easiest to hardest:
 *   1–4   choosing the operation: which sign fits the story, plus a plain ×
 *   5–9   multi-step problems: multiply then subtract / add, two purchases, a plain ÷
 *   10–13 inverse problems: "I had some… now I have…" — work backwards
 *   14–18 unitary method: find the price of ONE, then of many (last one mixes all three)
 * Distractors are real child mistakes: the wrong operation, a missed second step,
 * the "first" number instead of the answer, a place-value slip. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_PROBLEM_SOLVING: QuizQuestion[] = [
  // ── 1–4: choosing the operation ────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη έχει 24 αυτοκόλλητα και δίνει 9 στον Νίκο. Ποια πράξη δείχνει πόσα της μένουν;', en: 'Eleni has 24 stickers and gives 9 to Nikos. Which sum shows how many she has left?' },
    options: { el: ['24 − 9', '24 + 9', '24 × 9', '24 ÷ 9'], en: ['24 − 9', '24 + 9', '24 × 9', '24 ÷ 9'] },
    correct: 0,
    explanation: {
      el: 'Όταν δίνουμε κάτι, έχουμε λιγότερα: αφαιρούμε. 24 − 9 = 15 αυτοκόλλητα.',
      en: 'When we give something away, we have less: we subtract. 24 − 9 = 15 stickers.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει 6 κουτιά με 8 μολύβια το καθένα. Ποια πράξη δείχνει πόσα μολύβια έχει;', en: 'Giorgos has 6 boxes with 8 pencils in each. Which sum shows how many pencils he has?' },
    options: { el: ['6 + 8', '6 × 8', '8 − 6', '8 ÷ 6'], en: ['6 + 8', '6 × 8', '8 − 6', '8 ÷ 6'] },
    correct: 1,
    explanation: {
      el: 'Ίδιες ομάδες = πολλαπλασιασμός. 6 κουτιά × 8 μολύβια = 48 μολύβια.',
      en: 'Equal groups = multiplication. 6 boxes × 8 pencils = 48 pencils.',
    },
  },
  {
    q: { el: 'Η Μαρία μοιράζει 36 καραμέλες ίσα σε 4 παιδιά. Ποια πράξη δείχνει πόσες παίρνει το καθένα;', en: 'Maria shares 36 sweets equally among 4 children. Which sum shows how many each one gets?' },
    options: { el: ['36 − 4', '36 × 4', '36 ÷ 4', '36 + 4'], en: ['36 − 4', '36 × 4', '36 ÷ 4', '36 + 4'] },
    correct: 2,
    explanation: {
      el: '«Μοιράζω ίσα» σημαίνει διαίρεση. 36 ÷ 4 = 9 καραμέλες το κάθε παιδί.',
      en: '“Share equally” means division. 36 ÷ 4 = 9 sweets for each child.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 12 × 3;', en: 'What is 12 × 3?' },
    options: { el: ['15', '33', '36', '39'], en: ['15', '33', '36', '39'] },
    correct: 2,
    explanation: {
      el: '12 × 3 = 36. Σκέψου: 10 × 3 = 30 και 2 × 3 = 6, άρα 30 + 6 = 36.',
      en: '12 × 3 = 36. Think: 10 × 3 = 30 and 2 × 3 = 6, so 30 + 6 = 36.',
    },
  },

  // ── 5–9: multi-step problems ───────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος αγοράζει 3 τετράδια με 2 € το ένα και δίνει 10 €. Πόσα ρέστα παίρνει;', en: 'Giorgos buys 3 notebooks at €2 each and pays with €10. How much change does he get?' },
    options: { el: ['6 €', '4 €', '8 €', '5 €'], en: ['€6', '€4', '€8', '€5'] },
    correct: 1,
    explanation: {
      el: 'Δύο βήματα: πρώτα 3 × 2 = 6 € κοστίζουν τα τετράδια, μετά 10 − 6 = 4 € ρέστα.',
      en: 'Two steps: first 3 × 2 = €6 for the notebooks, then 10 − 6 = €4 change.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 5 σακουλάκια με 6 βόλους το καθένα και άλλους 7 βόλους στην τσέπη της. Πόσους βόλους έχει;', en: 'Maria has 5 bags with 6 marbles in each, plus 7 more marbles in her pocket. How many marbles does she have?' },
    options: { el: ['30', '18', '37', '23'], en: ['30', '18', '37', '23'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα τα σακουλάκια: 5 × 6 = 30. Μετά προσθέτουμε τους 7 της τσέπης: 30 + 7 = 37.',
      en: 'First the bags: 5 × 6 = 30. Then add the 7 in her pocket: 30 + 7 = 37.',
    },
  },
  {
    q: { el: 'Ο Νίκος διαβάζει 2 σελίδες κάθε μέρα για 3 εβδομάδες. Πόσες σελίδες διαβάζει συνολικά;', en: 'Nikos reads 2 pages every day for 3 weeks. How many pages does he read in total?' },
    options: { el: ['42', '21', '23', '6'], en: ['42', '21', '23', '6'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα οι μέρες: 3 εβδομάδες × 7 = 21 μέρες. Μετά οι σελίδες: 21 × 2 = 42 σελίδες.',
      en: 'First the days: 3 weeks × 7 = 21 days. Then the pages: 21 × 2 = 42 pages.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 45 ÷ 5;', en: 'What is 45 ÷ 5?' },
    options: { el: ['8', '9', '10', '40'], en: ['8', '9', '10', '40'] },
    correct: 1,
    explanation: {
      el: '45 ÷ 5 = 9, γιατί 9 × 5 = 45. Η διαίρεση είναι το αντίστροφο του πολλαπλασιασμού.',
      en: '45 ÷ 5 = 9, because 9 × 5 = 45. Division is the opposite of multiplication.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 50 €. Αγοράζει ένα βιβλίο 18 € και ένα παιχνίδι 25 €. Πόσα χρήματα της μένουν;', en: 'Eleni has €50. She buys a book for €18 and a game for €25. How much money does she have left?' },
    options: { el: ['43 €', '32 €', '17 €', '7 €'], en: ['€43', '€32', '€17', '€7'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα πόσο ξόδεψε: 18 + 25 = 43 €. Μετά τι της μένει: 50 − 43 = 7 €.',
      en: 'First how much she spent: 18 + 25 = €43. Then what is left: 50 − 43 = €7.',
    },
  },

  // ── 10–13: inverse problems (work backwards) ───────────────────────────────
  {
    q: { el: 'Η Μαρία είχε μερικά αυτοκόλλητα. Πήρε 8 ακόμα και τώρα έχει 20. Πόσα είχε στην αρχή;', en: 'Maria had some stickers. She got 8 more and now she has 20. How many did she have at the start?' },
    options: { el: ['28', '12', '8', '18'], en: ['28', '12', '8', '18'] },
    correct: 1,
    explanation: {
      el: 'Πάμε ανάποδα: αφού πήρε 8, βγάζουμε 8 από το τέλος. 20 − 8 = 12 αυτοκόλλητα στην αρχή.',
      en: 'Go backwards: she got 8, so take 8 away from the end. 20 − 8 = 12 stickers at the start.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έδωσε 15 βόλους στον φίλο του και του έμειναν 27. Πόσους βόλους είχε στην αρχή;', en: 'Giorgos gave 15 marbles to his friend and had 27 left. How many marbles did he have at the start?' },
    options: { el: ['12', '27', '42', '32'], en: ['12', '27', '42', '32'] },
    correct: 2,
    explanation: {
      el: 'Ανάποδα: αφού έδωσε 15, τους ξαναβάζουμε. 27 + 15 = 42 βόλοι στην αρχή.',
      en: 'Backwards: he gave 15 away, so we put them back. 27 + 15 = 42 marbles at the start.',
    },
  },
  {
    q: { el: 'Σκέφτομαι έναν αριθμό. Τον πολλαπλασιάζω με το 6 και βρίσκω 54. Ποιον αριθμό σκέφτηκα;', en: 'I am thinking of a number. I multiply it by 6 and get 54. Which number did I think of?' },
    options: { el: ['60', '48', '9', '8'], en: ['60', '48', '9', '8'] },
    correct: 2,
    explanation: {
      el: 'Το αντίστροφο του «× 6» είναι το «÷ 6». 54 ÷ 6 = 9, γιατί 9 × 6 = 54.',
      en: 'The opposite of “× 6” is “÷ 6”. 54 ÷ 6 = 9, because 9 × 6 = 54.',
    },
  },
  {
    q: { el: 'Η Ελένη μοίρασε τα καρότα της ίσα σε 4 κουνέλια και κάθε κουνέλι πήρε 7. Πόσα καρότα είχε;', en: 'Eleni shared her carrots equally among 4 rabbits and each rabbit got 7. How many carrots did she have?' },
    options: { el: ['11', '3', '24', '28'], en: ['11', '3', '24', '28'] },
    correct: 3,
    explanation: {
      el: 'Ανάποδα από τη μοιρασιά: 4 κουνέλια × 7 καρότα = 28 καρότα.',
      en: 'The opposite of sharing: 4 rabbits × 7 carrots = 28 carrots.',
    },
  },

  // ── 14–18: unitary method (find one, then many) ────────────────────────────
  {
    q: { el: '3 χυμοί κοστίζουν 6 €. Πόσο κοστίζει ο 1 χυμός;', en: '3 juices cost €6. How much does 1 juice cost?' },
    options: { el: ['2 €', '3 €', '18 €', '9 €'], en: ['€2', '€3', '€18', '€9'] },
    correct: 0,
    explanation: {
      el: 'Για να βρούμε το ένα, διαιρούμε: 6 ÷ 3 = 2 €.',
      en: 'To find one, we divide: 6 ÷ 3 = €2.',
    },
  },
  {
    q: { el: '4 τετράδια κοστίζουν 8 €. Πόσο κοστίζουν 7 τετράδια;', en: '4 notebooks cost €8. How much do 7 notebooks cost?' },
    options: { el: ['11 €', '14 €', '28 €', '32 €'], en: ['€11', '€14', '€28', '€32'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα το ένα: 8 ÷ 4 = 2 €. Μετά τα πολλά: 7 × 2 = 14 €.',
      en: 'First one: 8 ÷ 4 = €2. Then many: 7 × 2 = €14.',
    },
  },
  {
    q: { el: '5 πακέτα έχουν 40 μπισκότα. Πόσα μπισκότα έχουν 8 πακέτα;', en: '5 packets hold 40 biscuits. How many biscuits do 8 packets hold?' },
    options: { el: ['43', '45', '200', '64'], en: ['43', '45', '200', '64'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα το ένα πακέτο: 40 ÷ 5 = 8 μπισκότα. Μετά τα 8 πακέτα: 8 × 8 = 64 μπισκότα.',
      en: 'First one packet: 40 ÷ 5 = 8 biscuits. Then 8 packets: 8 × 8 = 64 biscuits.',
    },
  },
  {
    q: { el: 'Ο Νίκος περπατάει 6 χιλιόμετρα σε 2 ώρες. Πόσα χιλιόμετρα θα περπατήσει σε 5 ώρες;', en: 'Nikos walks 6 kilometres in 2 hours. How many kilometres will he walk in 5 hours?' },
    options: { el: ['9', '30', '15', '13'], en: ['9', '30', '15', '13'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα η 1 ώρα: 6 ÷ 2 = 3 χιλιόμετρα. Μετά οι 5 ώρες: 5 × 3 = 15 χιλιόμετρα.',
      en: 'First 1 hour: 6 ÷ 2 = 3 kilometres. Then 5 hours: 5 × 3 = 15 kilometres.',
    },
  },
  {
    q: { el: '2 παγωτά κοστίζουν 4 €. Η Μαρία αγοράζει 7 παγωτά και δίνει 20 €. Πόσα ρέστα παίρνει;', en: '2 ice creams cost €4. Maria buys 7 ice creams and pays with €20. How much change does she get?' },
    options: { el: ['14 €', '16 €', '6 €', '13 €'], en: ['€14', '€16', '€6', '€13'] },
    correct: 2,
    explanation: {
      el: 'Τρία βήματα: 1 παγωτό = 4 ÷ 2 = 2 €. Τα 7 παγωτά = 7 × 2 = 14 €. Ρέστα: 20 − 14 = 6 €.',
      en: 'Three steps: 1 ice cream = 4 ÷ 2 = €2. 7 ice creams = 7 × 2 = €14. Change: 20 − 14 = €6.',
    },
  },
];
