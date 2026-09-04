/**
 * Δ' Δημοτικού · Μαθηματικά · Ισότητες & μοτίβα
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 9–10. The unknown is drawn as a box (□), as on the board in class.
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–5   the unknown in addition and subtraction: □ + 27 = 63, 80 − □ = 35, □ − 18 = 40
 *   6–9   the unknown in multiplication and division: 8 × □ = 96, □ ÷ 4 = 15, 72 ÷ □ = 9
 *   10–13 the rule of a sequence (+7, ×3, −9, ×2) and the next or missing term
 *   14–15 both sides of the equals sign must balance: 12 + 8 = □ + 5
 *   16–18 simple inequalities with < and >
 *
 * Distractors are the mistakes children actually make: adding instead of subtracting to find
 * the unknown (63 + 27), reading "=" as "the answer is" (12 + 8 = 20 + 5), off-by-one terms in a
 * sequence, mixing up < and >. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_EQUATIONS_AND_PATTERNS: QuizQuestion[] = [
  // ── 1–5: the unknown in addition and subtraction ──────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; □ + 27 = 63', en: 'In □ + 27 = 63, which number is missing?' },
    options: { el: ['36', '90', '46', '34'], en: ['36', '90', '46', '34'] },
    correct: 0,
    explanation: {
      el: 'Για να βρούμε τον άγνωστο, κάνουμε την αντίθετη πράξη: 63 − 27 = 36. Έλεγχος: 36 + 27 = 63. Σωστό!',
      en: 'To find the unknown we do the opposite operation: 63 − 27 = 36. Check: 36 + 27 = 63. Correct!',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 80 − □ = 35', en: 'In 80 − □ = 35, which number is missing?' },
    options: { el: ['115', '55', '45', '35'], en: ['115', '55', '45', '35'] },
    correct: 2,
    explanation: {
      el: 'Από το 80 αφαιρέσαμε κάτι και μείναμε με 35. Αυτό το κάτι είναι 80 − 35 = 45. Έλεγχος: 80 − 45 = 35.',
      en: 'From 80 we took something away and were left with 35. That something is 80 − 35 = 45. Check: 80 − 45 = 35.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; □ − 18 = 40', en: 'In □ − 18 = 40, which number is missing?' },
    options: { el: ['22', '58', '48', '32'], en: ['22', '58', '48', '32'] },
    correct: 1,
    explanation: {
      el: 'Ο άγνωστος έχασε 18 και έμεινε 40, άρα στην αρχή ήταν 40 + 18 = 58. Έλεγχος: 58 − 18 = 40.',
      en: 'The unknown lost 18 and 40 was left, so at the start it was 40 + 18 = 58. Check: 58 − 18 = 40.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 45 + □ = 100', en: 'In 45 + □ = 100, which number is missing?' },
    options: { el: ['65', '145', '45', '55'], en: ['65', '145', '45', '55'] },
    correct: 3,
    explanation: {
      el: '100 − 45 = 55. Σκέψου: από το 45 θέλουμε 5 για το 50 και άλλα 50 για το 100, δηλαδή 55.',
      en: '100 − 45 = 55. Think: from 45 we need 5 to reach 50 and another 50 to reach 100, so 55.',
    },
  },
  {
    q: { el: 'Για να βρούμε τον άγνωστο στην ισότητα □ + 15 = 42, ποια πράξη κάνουμε;', en: 'To find the unknown in the equation □ + 15 = 42, which operation do we do?' },
    options: { el: ['42 + 15', '42 − 15', '42 × 15', '42 ÷ 15'], en: ['42 + 15', '42 − 15', '42 × 15', '42 ÷ 15'] },
    correct: 1,
    explanation: {
      el: 'Η πρόσθεση και η αφαίρεση είναι αντίθετες πράξεις. Αφού ο άγνωστος «συν 15» κάνει 42, ο άγνωστος είναι 42 − 15 = 27.',
      en: 'Addition and subtraction are opposite operations. Since the unknown “plus 15” makes 42, the unknown is 42 − 15 = 27.',
    },
  },

  // ── 6–9: the unknown in multiplication and division ───────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; 8 × □ = 96', en: 'In 8 × □ = 96, which number is missing?' },
    options: { el: ['12', '13', '14', '88'], en: ['12', '13', '14', '88'] },
    correct: 0,
    explanation: {
      el: 'Η αντίθετη πράξη του πολλαπλασιασμού είναι η διαίρεση: 96 ÷ 8 = 12. Έλεγχος: 8 × 12 = 96.',
      en: 'The opposite of multiplication is division: 96 ÷ 8 = 12. Check: 8 × 12 = 96.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; □ ÷ 4 = 15', en: 'In □ ÷ 4 = 15, which number is missing?' },
    options: { el: ['11', '19', '60', '45'], en: ['11', '19', '60', '45'] },
    correct: 2,
    explanation: {
      el: 'Μοιράσαμε τον άγνωστο σε 4 και κάθε μέρος είναι 15. Άρα ο άγνωστος είναι 4 × 15 = 60. Έλεγχος: 60 ÷ 4 = 15.',
      en: 'We split the unknown into 4 and each part is 15. So the unknown is 4 × 15 = 60. Check: 60 ÷ 4 = 15.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 72 ÷ □ = 9', en: 'In 72 ÷ □ = 9, which number is missing?' },
    options: { el: ['63', '7', '9', '8'], en: ['63', '7', '9', '8'] },
    correct: 3,
    explanation: {
      el: 'Ψάχνουμε «πόσες φορές το 9 κάνει 72»: 72 ÷ 9 = 8. Έλεγχος: 72 ÷ 8 = 9 και 8 × 9 = 72.',
      en: 'We are looking for “how many times 9 makes 72”: 72 ÷ 9 = 8. Check: 72 ÷ 8 = 9 and 8 × 9 = 72.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; □ × 5 = 45', en: 'In □ × 5 = 45, which number is missing?' },
    options: { el: ['40', '8', '50', '9'], en: ['40', '8', '50', '9'] },
    correct: 3,
    explanation: {
      el: '45 ÷ 5 = 9. Από την προπαίδεια του 5: 5, 10, 15, 20, 25, 30, 35, 40, 45 — εννέα βήματα.',
      en: '45 ÷ 5 = 9. From the 5 times table: 5, 10, 15, 20, 25, 30, 35, 40, 45 — nine steps.',
    },
  },

  // ── 10–13: the rule of a sequence ─────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο κανόνας της ακολουθίας 5, 12, 19, 26, …;', en: 'What is the rule of the sequence 5, 12, 19, 26, …?' },
    options: { el: ['+ 6', '+ 7', '× 2', '+ 5'], en: ['+ 6', '+ 7', '× 2', '+ 5'] },
    correct: 1,
    explanation: {
      el: 'Από το 5 στο 12 πάμε +7, από το 12 στο 19 πάλι +7, από το 19 στο 26 πάλι +7. Ο επόμενος αριθμός θα είναι 33.',
      en: 'From 5 to 12 we go +7, from 12 to 19 again +7, from 19 to 26 again +7. The next number will be 33.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο επόμενος αριθμός; 2, 6, 18, 54, …', en: 'In the sequence 2, 6, 18, 54, … what is the next number?' },
    options: { el: ['58', '108', '162', '216'], en: ['58', '108', '162', '216'] },
    correct: 2,
    explanation: {
      el: 'Κάθε αριθμός είναι το τριπλάσιο του προηγούμενου: 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54. Άρα 54 × 3 = 162.',
      en: 'Each number is three times the one before: 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54. So 54 × 3 = 162.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο επόμενος αριθμός; 100, 91, 82, 73, …', en: 'In the sequence 100, 91, 82, 73, … what is the next number?' },
    options: { el: ['64', '63', '62', '72'], en: ['64', '63', '62', '72'] },
    correct: 0,
    explanation: {
      el: 'Η ακολουθία κατεβαίνει: 100 − 9 = 91, 91 − 9 = 82, 82 − 9 = 73. Ο κανόνας είναι −9, άρα 73 − 9 = 64.',
      en: 'The sequence goes down: 100 − 9 = 91, 91 − 9 = 82, 82 − 9 = 73. The rule is −9, so 73 − 9 = 64.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 3, 6, 12, □, 48', en: 'In the sequence 3, 6, 12, □, 48, which number is missing?' },
    options: { el: ['18', '24', '36', '30'], en: ['18', '24', '36', '30'] },
    correct: 1,
    explanation: {
      el: 'Κάθε αριθμός διπλασιάζεται: 3 → 6 → 12 → 24 → 48. Έλεγχος: 12 × 2 = 24 και 24 × 2 = 48.',
      en: 'Each number doubles: 3 → 6 → 12 → 24 → 48. Check: 12 × 2 = 24 and 24 × 2 = 48.',
    },
  },

  // ── 14–15: both sides of the equals sign ──────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; 12 + 8 = □ + 5', en: 'In 12 + 8 = □ + 5, which number is missing?' },
    options: { el: ['20', '25', '15', '13'], en: ['20', '25', '15', '13'] },
    correct: 2,
    explanation: {
      el: 'Το «=» σημαίνει ότι οι δύο πλευρές είναι ίσες. Αριστερά: 12 + 8 = 20. Άρα δεξιά θέλουμε □ + 5 = 20, δηλαδή □ = 15. Το 20 είναι η παγίδα!',
      en: 'The “=” means both sides are equal. Left side: 12 + 8 = 20. So on the right we need □ + 5 = 20, so □ = 15. 20 is the trap!',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 6 × 4 = 30 − □', en: 'In 6 × 4 = 30 − □, which number is missing?' },
    options: { el: ['24', '6', '54', '4'], en: ['24', '6', '54', '4'] },
    correct: 1,
    explanation: {
      el: 'Αριστερά: 6 × 4 = 24. Δεξιά πρέπει να βγει κι αυτό 24: 30 − □ = 24, άρα □ = 6. Οι δύο πλευρές ζυγίζουν το ίδιο.',
      en: 'Left side: 6 × 4 = 24. The right side must also make 24: 30 − □ = 24, so □ = 6. Both sides weigh the same.',
    },
  },

  // ── 16–18: simple inequalities ────────────────────────────────────────────
  {
    q: { el: 'Ποιο σύμβολο ταιριάζει; 7 × 6 □ 40', en: 'In 7 × 6 □ 40, which symbol fits?' },
    options: { el: ['<', '>', '=', '+'], en: ['<', '>', '=', '+'] },
    correct: 1,
    explanation: {
      el: '7 × 6 = 42 και το 42 είναι μεγαλύτερο από το 40: 42 > 40. Το ανοιχτό μέρος του συμβόλου κοιτάει πάντα τον μεγαλύτερο αριθμό.',
      en: '7 × 6 = 42, and 42 is bigger than 40: 42 > 40. The open side of the symbol always faces the bigger number.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός κάνει την ανισότητα 45 < □ σωστή;', en: 'Which number makes the inequality 45 < □ true?' },
    options: { el: ['45', '44', '30', '46'], en: ['45', '44', '30', '46'] },
    correct: 3,
    explanation: {
      el: '45 < □ σημαίνει «το 45 είναι μικρότερο από τον άγνωστο». Άρα ο άγνωστος πρέπει να είναι μεγαλύτερος από 45: το 46. Το 45 δεν κάνει, γιατί 45 = 45.',
      en: '45 < □ means “45 is smaller than the unknown”. So the unknown must be bigger than 45: 46. 45 itself does not work, because 45 = 45.',
    },
  },
  {
    q: { el: 'Ποιο σύμβολο ταιριάζει; 3 × 9 □ 30', en: 'In 3 × 9 □ 30, which symbol fits?' },
    options: { el: ['<', '>', '=', '×'], en: ['<', '>', '=', '×'] },
    correct: 0,
    explanation: {
      el: '3 × 9 = 27 και το 27 είναι μικρότερο από το 30: 27 < 30. Η μύτη του συμβόλου δείχνει τον μικρότερο αριθμό.',
      en: '3 × 9 = 27, and 27 is smaller than 30: 27 < 30. The point of the symbol shows the smaller number.',
    },
  },
];
