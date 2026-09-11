/**
 * Δ' Δημοτικού · Μαθηματικά · Στρογγυλοποίηση & εκτίμηση
 * =======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 9–10. Greek thousands use the dot (4.620), English the comma (4,620).
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–5   rounding to the nearest 10, 100 and 1000 — including the "5 goes up" rule
 *   6–9   estimating a sum, a difference and a product before computing
 *   10–13 is the answer reasonable? spotting a wrong result with a quick estimate
 *   14–18 compensation: 99 + 47 = 100 + 46, 38 + 25 = 40 + 23, 201 − 99, 4 × 99, near doubles
 *
 * Distractors are the mistakes children actually make: rounding 65 down, rounding 348 to
 * the nearest ten instead of hundred, rounding only one number, adjusting the wrong way in
 * compensation (100 + 47 for 99 + 47). The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_ROUNDING_AND_ESTIMATION: QuizQuestion[] = [
  // ── 1–5: rounding to the nearest 10, 100, 1000 ────────────────────────────
  {
    q: { el: 'Στρογγυλοποίησε το 47 στην πλησιέστερη δεκάδα.', en: 'Round 47 to the nearest ten.' },
    options: { el: ['40', '50', '47', '45'], en: ['40', '50', '47', '45'] },
    correct: 1,
    explanation: {
      el: 'Το 47 είναι ανάμεσα στο 40 και στο 50, αλλά πιο κοντά στο 50 (απέχει 3, από το 40 απέχει 7). Άρα 47 → 50.',
      en: '47 is between 40 and 50, but closer to 50 (3 away, and 7 away from 40). So 47 → 50.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 83 στην πλησιέστερη δεκάδα.', en: 'Round 83 to the nearest ten.' },
    options: { el: ['80', '90', '85', '100'], en: ['80', '90', '85', '100'] },
    correct: 0,
    explanation: {
      el: 'Κοιτάμε το ψηφίο των μονάδων: 3. Είναι μικρότερο από 5, άρα το 83 πάει προς τα κάτω, στο 80.',
      en: 'Look at the ones digit: 3. It is less than 5, so 83 goes down to 80.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 65 στην πλησιέστερη δεκάδα.', en: 'Round 65 to the nearest ten.' },
    options: { el: ['60', '65', '70', '100'], en: ['60', '65', '70', '100'] },
    correct: 2,
    explanation: {
      el: 'Το 65 είναι ακριβώς στη μέση. Ο κανόνας λέει: όταν το ψηφίο είναι 5, πάμε προς τα πάνω. Άρα 65 → 70.',
      en: '65 is exactly in the middle. The rule says: when the digit is 5, we go up. So 65 → 70.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 348 στην πλησιέστερη εκατοντάδα.', en: 'Round 348 to the nearest hundred.' },
    options: { el: ['400', '350', '340', '300'], en: ['400', '350', '340', '300'] },
    correct: 3,
    explanation: {
      el: 'Για εκατοντάδα κοιτάμε το ψηφίο των δεκάδων: 4. Είναι μικρότερο από 5, άρα 348 → 300. Το 350 θα ήταν στρογγυλοποίηση σε δεκάδα.',
      en: 'For hundreds we look at the tens digit: 4. It is less than 5, so 348 → 300. 350 would be rounding to the nearest ten.',
    },
  },
  {
    q: { el: 'Στρογγυλοποίησε το 4.620 στην πλησιέστερη χιλιάδα.', en: 'Round 4,620 to the nearest thousand.' },
    options: { el: ['4.000', '5.000', '4.600', '4.700'], en: ['4,000', '5,000', '4,600', '4,700'] },
    correct: 1,
    explanation: {
      el: 'Για χιλιάδα κοιτάμε το ψηφίο των εκατοντάδων: 6. Είναι 5 ή παραπάνω, άρα πάμε προς τα πάνω: 4.620 → 5.000.',
      en: 'For thousands we look at the hundreds digit: 6. It is 5 or more, so we go up: 4,620 → 5,000.',
    },
  },

  // ── 6–9: estimating before computing ──────────────────────────────────────
  {
    q: { el: 'Περίπου πόσο κάνει 298 + 402; Κάνε εκτίμηση χωρίς να υπολογίσεις ακριβώς.', en: 'Roughly what is 298 + 402? Estimate without working it out exactly.' },
    options: { el: ['περίπου 700', 'περίπου 600', 'περίπου 800', 'περίπου 1.000'], en: ['about 700', 'about 600', 'about 800', 'about 1,000'] },
    correct: 0,
    explanation: {
      el: 'Στρογγυλοποιούμε: 298 ≈ 300 και 402 ≈ 400. 300 + 400 = 700. Το ακριβές αποτέλεσμα είναι 700!',
      en: 'We round: 298 ≈ 300 and 402 ≈ 400. 300 + 400 = 700. The exact answer is 700 too!',
    },
  },
  {
    q: { el: 'Περίπου πόσο κάνει 49 × 6;', en: 'Roughly what is 49 × 6?' },
    options: { el: ['περίπου 240', 'περίπου 540', 'περίπου 200', 'περίπου 300'], en: ['about 240', 'about 540', 'about 200', 'about 300'] },
    correct: 3,
    explanation: {
      el: 'Το 49 είναι σχεδόν 50, και 50 × 6 = 300. Το ακριβές είναι 294, πολύ κοντά στο 300.',
      en: '49 is almost 50, and 50 × 6 = 300. The exact answer is 294, very close to 300.',
    },
  },
  {
    q: { el: 'Περίπου πόσο κάνει 612 − 389;', en: 'Roughly what is 612 − 389?' },
    options: { el: ['περίπου 300', 'περίπου 100', 'περίπου 200', 'περίπου 1.000'], en: ['about 300', 'about 100', 'about 200', 'about 1,000'] },
    correct: 2,
    explanation: {
      el: '612 ≈ 600 και 389 ≈ 400. 600 − 400 = 200. Το ακριβές είναι 223, κοντά στο 200.',
      en: '612 ≈ 600 and 389 ≈ 400. 600 − 400 = 200. The exact answer is 223, close to 200.',
    },
  },
  {
    q: { el: 'Περίπου πόσο κάνει 19 × 21;', en: 'Roughly what is 19 × 21?' },
    options: { el: ['περίπου 200', 'περίπου 400', 'περίπου 40', 'περίπου 800'], en: ['about 200', 'about 400', 'about 40', 'about 800'] },
    correct: 1,
    explanation: {
      el: 'Και οι δύο αριθμοί είναι κοντά στο 20: 20 × 20 = 400. Το ακριβές είναι 399, σχεδόν 400!',
      en: 'Both numbers are close to 20: 20 × 20 = 400. The exact answer is 399, almost 400!',
    },
  },

  // ── 10–13: is the answer reasonable? ──────────────────────────────────────
  {
    q: { el: 'Ο Νίκος υπολόγισε 38 + 41 = 179. Είναι λογικό το αποτέλεσμα;', en: 'Nikos worked out 38 + 41 = 179. Is the answer reasonable?' },
    options: { el: ['Ναι, γιατί το 38 και το 41 είναι μεγάλοι αριθμοί', 'Ναι, γιατί τελειώνει σε 9', 'Δεν μπορούμε να ξέρουμε χωρίς αριθμομηχανή', 'Όχι, γιατί 40 + 40 = 80, άρα πρέπει να είναι κοντά στο 80'], en: ['Yes, because 38 and 41 are big numbers', 'Yes, because it ends in 9', 'We cannot know without a calculator', 'No, because 40 + 40 = 80, so it must be close to 80'] },
    correct: 3,
    explanation: {
      el: 'Μια γρήγορη εκτίμηση (40 + 40 = 80) δείχνει ότι το 179 είναι πολύ μεγάλο. Το σωστό είναι 79. Πάντα ελέγχουμε αν το αποτέλεσμα «βγάζει νόημα»!',
      en: 'A quick estimate (40 + 40 = 80) shows 179 is far too big. The right answer is 79. Always check whether the result “makes sense”!',
    },
  },
  {
    q: { el: 'Η Μαρία υπολόγισε 7 × 52 = 364. Είναι λογικό το αποτέλεσμα;', en: 'Maria worked out 7 × 52 = 364. Is the answer reasonable?' },
    options: { el: ['Ναι: 7 × 50 = 350 και το 364 είναι κοντά', 'Όχι: πρέπει να είναι κοντά στο 60', 'Όχι: πρέπει να είναι πάνω από 1.000', 'Ναι: κάθε πολλαπλασιασμός με το 7 κάνει 364'], en: ['Yes: 7 × 50 = 350 and 364 is close', 'No: it should be close to 60', 'No: it should be more than 1,000', 'Yes: every multiplication by 7 makes 364'] },
    correct: 0,
    explanation: {
      el: 'Εκτίμηση: 7 × 50 = 350. Το 364 είναι λίγο πιο πάνω, όπως περιμένουμε αφού 52 > 50. Άρα το αποτέλεσμα είναι λογικό (και σωστό!).',
      en: 'Estimate: 7 × 50 = 350. 364 is a little higher, as we expect since 52 > 50. So the answer is reasonable (and correct!).',
    },
  },
  {
    q: { el: 'Ένα κουτί έχει 98 καραμέλες. Περίπου πόσες καραμέλες έχουν 5 κουτιά;', en: 'A box holds 98 sweets. Roughly how many sweets are in 5 boxes?' },
    options: { el: ['περίπου 50', 'περίπου 100', 'περίπου 500', 'περίπου 1.000'], en: ['about 50', 'about 100', 'about 500', 'about 1,000'] },
    correct: 2,
    explanation: {
      el: '98 ≈ 100 και 5 × 100 = 500. Οι ακριβείς καραμέλες είναι 490, λίγο λιγότερες από 500.',
      en: '98 ≈ 100 and 5 × 100 = 500. The exact number of sweets is 490, a little less than 500.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει ότι 203 − 97 = 196. Ποια εκτίμηση δείχνει ότι έκανε λάθος;', en: 'Giorgos says 203 − 97 = 196. Which estimate shows that he made a mistake?' },
    options: { el: ['200 − 100 = 100, άρα το 196 είναι πολύ μεγάλο', '200 + 100 = 300, άρα το 196 είναι πολύ μικρό', '200 × 100 = 20.000, άρα το 196 είναι πολύ μικρό', 'Καμία, το 196 είναι σωστό'], en: ['200 − 100 = 100, so 196 is far too big', '200 + 100 = 300, so 196 is far too small', '200 × 100 = 20,000, so 196 is far too small', 'None, 196 is correct'] },
    correct: 0,
    explanation: {
      el: 'Είναι αφαίρεση, άρα εκτιμάμε 200 − 100 = 100. Το 196 είναι σχεδόν διπλάσιο, κάτι πήγε στραβά. Το σωστό είναι 203 − 97 = 106.',
      en: 'It is a subtraction, so we estimate 200 − 100 = 100. 196 is almost double, so something went wrong. The right answer is 203 − 97 = 106.',
    },
  },

  // ── 14–18: compensation ───────────────────────────────────────────────────
  {
    q: { el: 'Το 99 + 47 είναι το ίδιο με…', en: 'Which of these is the same as 99 + 47?' },
    options: { el: ['100 + 47', '100 + 46', '100 + 48', '90 + 47'], en: ['100 + 47', '100 + 46', '100 + 48', '90 + 47'] },
    correct: 1,
    explanation: {
      el: 'Δίνουμε 1 από το 47 στο 99 για να γίνει 100: 99 + 47 = 100 + 46 = 146. Ό,τι προσθέτουμε στον έναν, το αφαιρούμε από τον άλλον.',
      en: 'We give 1 from the 47 to the 99 to make 100: 99 + 47 = 100 + 46 = 146. Whatever we add to one number, we take from the other.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 38 + 25;', en: 'What is 38 + 25?' },
    options: { el: ['53', '65', '63', '58'], en: ['53', '65', '63', '58'] },
    correct: 2,
    explanation: {
      el: '38 + 25 = 63. Κόλπο: δίνουμε 2 από το 25 στο 38 και έχουμε 40 + 23 = 63, πιο εύκολο!',
      en: '38 + 25 = 63. Trick: give 2 from the 25 to the 38 and you get 40 + 23 = 63, much easier!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 201 − 99;', en: 'What is 201 − 99?' },
    options: { el: ['102', '98', '112', '100'], en: ['102', '98', '112', '100'] },
    correct: 0,
    explanation: {
      el: '201 − 99 = 102. Κόλπο: αφαιρούμε 100 (201 − 100 = 101) και επειδή αφαιρέσαμε 1 παραπάνω, το ξαναπροσθέτουμε: 101 + 1 = 102.',
      en: '201 − 99 = 102. Trick: take away 100 (201 − 100 = 101), and because we took 1 too many, we add it back: 101 + 1 = 102.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4 × 99;', en: 'What is 4 × 99?' },
    options: { el: ['400', '386', '404', '396'], en: ['400', '386', '404', '396'] },
    correct: 3,
    explanation: {
      el: '4 × 99 = 396. Κόλπο: 4 × 100 = 400, αλλά βάλαμε 4 φορές ένα παραπάνω, άρα 400 − 4 = 396.',
      en: '4 × 99 = 396. Trick: 4 × 100 = 400, but we put in 4 extra ones, so 400 − 4 = 396.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 26 + 27;', en: 'What is 26 + 27?' },
    options: { el: ['52', '54', '53', '43'], en: ['52', '54', '53', '43'] },
    correct: 2,
    explanation: {
      el: '26 + 27 = 53. Κόλπο με τα διπλά: 26 + 26 = 52, και το 27 είναι ένα παραπάνω, άρα 52 + 1 = 53.',
      en: '26 + 27 = 53. The doubles trick: 26 + 26 = 52, and 27 is one more, so 52 + 1 = 53.',
    },
  },
];
