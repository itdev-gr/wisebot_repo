/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Δυνάμεις & Τετραγωνική ρίζα
 * =========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–3   base and exponent: what 5³ means, writing a repeated product as a power
 *   4–8   squares up to 12² and the small cubes (4³, 5³)
 *   9–11  powers of 10: the exponent counts the zeros, a number × 10ⁿ
 *   12–15 the square root of a perfect square, spotting a perfect square, side from area
 *   16–18 order of operations with powers: power first, brackets before power
 *
 * Distractors are the mistakes children actually make: multiplying base × exponent
 * (8² = 16), reading the power as a two-digit number (8² = 82), halving instead of
 * taking the root (√144 = 72), squaring the sum term by term.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_POWERS_AND_ROOTS: QuizQuestion[] = [
  // ── 1–3: base and exponent ─────────────────────────────────────────────────
  {
    q: { el: 'Στη δύναμη 5³, ποιος αριθμός είναι η βάση και ποιος ο εκθέτης;', en: 'In the power 5³, which number is the base and which is the exponent?' },
    options: { el: ['βάση 5, εκθέτης 3', 'βάση 3, εκθέτης 5', 'βάση 5, εκθέτης 15', 'βάση 125, εκθέτης 3'], en: ['base 5, exponent 3', 'base 3, exponent 5', 'base 5, exponent 15', 'base 125, exponent 3'] },
    correct: 0,
    explanation: {
      el: 'Η βάση είναι ο αριθμός που πολλαπλασιάζεται (5) και ο εκθέτης λέει πόσες φορές (3): 5³ = 5 × 5 × 5 = 125.',
      en: 'The base is the number being multiplied (5) and the exponent says how many times (3): 5³ = 5 × 5 × 5 = 125.',
    },
  },
  {
    q: { el: 'Τι σημαίνει 2⁴;', en: 'What does 2⁴ mean?' },
    options: { el: ['2 × 4', '2 × 2 × 2 × 2', '2 + 2 + 2 + 2', '4 × 4'], en: ['2 × 4', '2 × 2 × 2 × 2', '2 + 2 + 2 + 2', '4 × 4'] },
    correct: 1,
    explanation: {
      el: 'Ο εκθέτης 4 λέει «πολλαπλασίασε το 2 με τον εαυτό του 4 φορές»: 2 × 2 × 2 × 2 = 16. Προσοχή: δεν είναι 2 × 4 = 8!',
      en: 'The exponent 4 says “multiply 2 by itself 4 times”: 2 × 2 × 2 × 2 = 16. Careful: it is not 2 × 4 = 8!',
    },
  },
  {
    q: { el: 'Πώς γράφεται ως δύναμη το γινόμενο 7 × 7 × 7;', en: 'How is the product 7 × 7 × 7 written as a power?' },
    options: { el: ['7 × 3', '3⁷', '7³', '7²'], en: ['7 × 3', '3⁷', '7³', '7²'] },
    correct: 2,
    explanation: {
      el: 'Το 7 εμφανίζεται 3 φορές, άρα βάση 7 και εκθέτης 3: 7³ = 343. Το 3⁷ θα ήταν 3 × 3 × 3 × 3 × 3 × 3 × 3 — τελείως άλλος αριθμός.',
      en: '7 appears 3 times, so the base is 7 and the exponent is 3: 7³ = 343. 3⁷ would be 3 × 3 × 3 × 3 × 3 × 3 × 3 — a completely different number.',
    },
  },

  // ── 4–8: squares up to 12² and small cubes ────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 8²;', en: 'What is 8²?' },
    options: { el: ['16', '82', '18', '64'], en: ['16', '82', '18', '64'] },
    correct: 3,
    explanation: {
      el: '8² = 8 × 8 = 64. Το «στο τετράγωνο» σημαίνει «επί τον εαυτό του», όχι επί 2.',
      en: '8² = 8 × 8 = 64. “Squared” means “times itself”, not times 2.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 12²;', en: 'What is 12²?' },
    options: { el: ['144', '24', '122', '124'], en: ['144', '24', '122', '124'] },
    correct: 0,
    explanation: {
      el: '12² = 12 × 12 = 144. Κόλπο: 12 × 12 = 12 × 10 + 12 × 2 = 120 + 24 = 144.',
      en: '12² = 12 × 12 = 144. Trick: 12 × 12 = 12 × 10 + 12 × 2 = 120 + 24 = 144.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 11²;', en: 'What is 11²?' },
    options: { el: ['22', '111', '121', '112'], en: ['22', '111', '121', '112'] },
    correct: 2,
    explanation: {
      el: '11² = 11 × 11 = 121. Τα τετράγωνα ως το 12² αξίζει να τα ξέρεις απ\' έξω: 100, 121, 144.',
      en: '11² = 11 × 11 = 121. The squares up to 12² are worth knowing by heart: 100, 121, 144.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4³;', en: 'What is 4³?' },
    options: { el: ['12', '16', '43', '64'], en: ['12', '16', '43', '64'] },
    correct: 3,
    explanation: {
      el: '4³ = 4 × 4 × 4 = 16 × 4 = 64. Το 16 είναι μόνο το 4² — ο κύβος θέλει και τρίτο 4.',
      en: '4³ = 4 × 4 × 4 = 16 × 4 = 64. 16 is only 4² — the cube needs a third 4.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5³;', en: 'What is 5³?' },
    options: { el: ['125', '15', '25', '155'], en: ['125', '15', '25', '155'] },
    correct: 0,
    explanation: {
      el: '5³ = 5 × 5 × 5 = 25 × 5 = 125. Λέγεται «κύβος», γιατί ένας κύβος με ακμή 5 χωράει 125 μικρά κυβάκια.',
      en: '5³ = 5 × 5 × 5 = 25 × 5 = 125. It is called a “cube” because a cube with edge 5 holds 125 small cubes.',
    },
  },

  // ── 9–11: powers of 10 ───────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 10⁴;', en: 'What is 10⁴?' },
    options: { el: ['40', '1.000', '100.000', '10.000'], en: ['40', '1,000', '100,000', '10,000'] },
    correct: 3,
    explanation: {
      el: '10⁴ = 10 × 10 × 10 × 10 = 10.000. Στις δυνάμεις του 10, ο εκθέτης μετράει τα μηδενικά: 4 μηδενικά.',
      en: '10⁴ = 10 × 10 × 10 × 10 = 10,000. With powers of 10, the exponent counts the zeros: 4 zeros.',
    },
  },
  {
    q: { el: 'Πώς γράφεται το 100.000 ως δύναμη του 10;', en: 'How is 100,000 written as a power of 10?' },
    options: { el: ['10⁵', '10⁶', '10⁴', '100²'], en: ['10⁵', '10⁶', '10⁴', '100²'] },
    correct: 0,
    explanation: {
      el: 'Το 100.000 έχει 5 μηδενικά, άρα είναι 10⁵. (Το 100² = 100 × 100 = 10.000, με 4 μηδενικά.)',
      en: '100,000 has 5 zeros, so it is 10⁵. (100² = 100 × 100 = 10,000, with 4 zeros.)',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3 × 10³;', en: 'What is 3 × 10³?' },
    options: { el: ['3.000', '30', '300', '30.000'], en: ['3,000', '30', '300', '30,000'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα η δύναμη: 10³ = 1.000. Μετά ο πολλαπλασιασμός: 3 × 1.000 = 3.000.',
      en: 'The power first: 10³ = 1,000. Then the multiplication: 3 × 1,000 = 3,000.',
    },
  },

  // ── 12–15: square roots ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει √49;', en: 'What is √49?' },
    options: { el: ['9', '7', '24,5', '98'], en: ['9', '7', '24.5', '98'] },
    correct: 1,
    explanation: {
      el: 'Η τετραγωνική ρίζα ρωτάει: «ποιος αριθμός στο τετράγωνο κάνει 49;». Επειδή 7² = 49, √49 = 7.',
      en: 'The square root asks: “which number squared makes 49?”. Because 7² = 49, √49 = 7.',
    },
  },
  {
    q: { el: 'Πόσο κάνει √144;', en: 'What is √144?' },
    options: { el: ['14', '72', '11', '12'], en: ['14', '72', '11', '12'] },
    correct: 3,
    explanation: {
      el: '12 × 12 = 144, άρα √144 = 12. Η ρίζα δεν είναι το μισό του αριθμού (72) — είναι ο αριθμός που πολλαπλασιασμένος με τον εαυτό του δίνει 144.',
      en: '12 × 12 = 144, so √144 = 12. The root is not half the number (72) — it is the number that, times itself, gives 144.',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω αριθμούς είναι τέλειο τετράγωνο;', en: 'Which of these numbers is a perfect square?' },
    options: { el: ['50', '81', '75', '90'], en: ['50', '81', '75', '90'] },
    correct: 1,
    explanation: {
      el: 'Τέλειο τετράγωνο είναι ο αριθμός που βγαίνει από έναν ακέραιο στο τετράγωνο: 81 = 9². Το 50, το 75 και το 90 βρίσκονται ανάμεσα σε τετράγωνα (49, 64, 81, 100).',
      en: 'A perfect square is a whole number squared: 81 = 9². 50, 75 and 90 fall between squares (49, 64, 81, 100).',
    },
  },
  {
    q: { el: 'Ένα τετράγωνο έχει εμβαδόν 100 cm². Πόσο είναι η πλευρά του;', en: 'A square has an area of 100 cm². How long is its side?' },
    options: { el: ['25 cm', '50 cm', '10 cm', '20 cm'], en: ['25 cm', '50 cm', '10 cm', '20 cm'] },
    correct: 2,
    explanation: {
      el: 'Εμβαδόν τετραγώνου = πλευρά². Άρα πλευρά = √100 = 10 cm. Έλεγχος: 10 × 10 = 100.',
      en: 'Area of a square = side². So side = √100 = 10 cm. Check: 10 × 10 = 100.',
    },
  },

  // ── 16–18: order of operations with powers ───────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2 + 3²;', en: 'What is 2 + 3²?' },
    options: { el: ['25', '10', '12', '11'], en: ['25', '10', '12', '11'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα οι δυνάμεις, μετά οι προσθέσεις: 3² = 9, και 2 + 9 = 11. Το 25 θα ήταν το (2 + 3)².',
      en: 'Powers first, then addition: 3² = 9, and 2 + 9 = 11. 25 would be (2 + 3)².',
    },
  },
  {
    q: { el: 'Πόσο κάνει (2 + 3)²;', en: 'What is (2 + 3)²?' },
    options: { el: ['11', '13', '25', '10'], en: ['11', '13', '25', '10'] },
    correct: 2,
    explanation: {
      el: 'Οι παρενθέσεις πάνε πρώτες: 2 + 3 = 5. Μετά η δύναμη: 5² = 25. Η παρένθεση αλλάζει τα πάντα!',
      en: 'Brackets come first: 2 + 3 = 5. Then the power: 5² = 25. The brackets change everything!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 2 × 5² − 10;', en: 'What is 2 × 5² − 10?' },
    options: { el: ['90', '40', '30', '15'], en: ['90', '40', '30', '15'] },
    correct: 1,
    explanation: {
      el: 'Σειρά: δύναμη → πολλαπλασιασμός → αφαίρεση. 5² = 25, 2 × 25 = 50, 50 − 10 = 40.',
      en: 'Order: power → multiplication → subtraction. 5² = 25, 2 × 25 = 50, 50 − 10 = 40.',
    },
  },
];
