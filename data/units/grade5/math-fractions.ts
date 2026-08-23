/**
 * Ε' Δημοτικού · Μαθηματικά · Κλάσματα
 * ====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–3   improper fractions and mixed numbers (what they are, converting both ways)
 *   4–7   equivalent fractions and simplifying (incl. a pizza word problem)
 *   8–9   comparing fractions (same numerator, against 1/2)
 *   10–12 adding and subtracting (same and different denominators, a book word problem)
 *   13–15 multiplying (fraction × fraction, whole × fraction, money word problem)
 *   16–18 dividing (fraction ÷ whole, ribbon word problem, fraction ÷ fraction)
 * Distractors are real child mistakes: adding denominators, multiplying only one part,
 * thinking a bigger denominator means a bigger fraction, forgetting to simplify.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_FRACTIONS: QuizQuestion[] = [
  // ── 1–3: improper fractions & mixed numbers ───────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω είναι καταχρηστικό κλάσμα (μεγαλύτερο από 1);', en: 'Which of these is an improper fraction (bigger than 1)?' },
    options: { el: ['7/4', '3/4', '4/7', '1/2'], en: ['7/4', '3/4', '4/7', '1/2'] },
    correct: 0,
    explanation: {
      el: 'Όταν ο αριθμητής (πάνω) είναι μεγαλύτερος από τον παρονομαστή (κάτω), το κλάσμα είναι μεγαλύτερο από 1. Το 7/4 είναι 7 τέταρτα, πάνω από ένα ολόκληρο.',
      en: 'When the numerator (top) is bigger than the denominator (bottom), the fraction is bigger than 1. 7/4 is 7 quarters, more than one whole.',
    },
  },
  {
    q: { el: 'Γράψε το 9/4 ως μεικτό αριθμό.', en: 'Write 9/4 as a mixed number.' },
    options: { el: ['2 1/2', '1 5/4', '2 1/4', '4 1/2'], en: ['2 1/2', '1 5/4', '2 1/4', '4 1/2'] },
    correct: 2,
    explanation: {
      el: '9 ÷ 4 = 2 και περισσεύει 1. Άρα 9/4 = 2 ολόκληρα και 1/4, δηλαδή 2 1/4.',
      en: '9 ÷ 4 = 2 with 1 left over. So 9/4 = 2 wholes and 1/4, that is 2 1/4.',
    },
  },
  {
    q: { el: 'Γράψε το 3 2/5 ως κλάσμα.', en: 'Write 3 2/5 as a fraction.' },
    options: { el: ['17/5', '15/5', '32/5', '6/5'], en: ['17/5', '15/5', '32/5', '6/5'] },
    correct: 0,
    explanation: {
      el: 'Κάθε ολόκληρο έχει 5 πέμπτα: 3 × 5 = 15, και άλλα 2 πέμπτα → 17/5.',
      en: 'Each whole has 5 fifths: 3 × 5 = 15, plus 2 more fifths → 17/5.',
    },
  },

  // ── 4–7: equivalent fractions & simplifying ───────────────────────────────
  {
    q: { el: 'Ποιο κλάσμα είναι ισοδύναμο με το 2/3;', en: 'Which fraction is equivalent to 2/3?' },
    options: { el: ['3/4', '2/6', '4/6', '4/3'], en: ['3/4', '2/6', '4/6', '4/3'] },
    correct: 2,
    explanation: {
      el: 'Πολλαπλασιάζουμε ΚΑΙ τον αριθμητή ΚΑΙ τον παρονομαστή με τον ίδιο αριθμό: 2 × 2 = 4, 3 × 2 = 6. Άρα 2/3 = 4/6.',
      en: 'We multiply BOTH the numerator AND the denominator by the same number: 2 × 2 = 4, 3 × 2 = 6. So 2/3 = 4/6.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 3/4 = ___/12', en: 'Which number is missing? 3/4 = ___/12' },
    options: { el: ['3', '9', '11', '12'], en: ['3', '9', '11', '12'] },
    correct: 1,
    explanation: {
      el: 'Το 4 έγινε 12, δηλαδή × 3. Κάνουμε το ίδιο και πάνω: 3 × 3 = 9. Άρα 3/4 = 9/12.',
      en: '4 became 12, that is × 3. We do the same on top: 3 × 3 = 9. So 3/4 = 9/12.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έφαγε τα 2/8 μιας πίτσας και η Ελένη το 1/4 μιας ίδιας πίτσας. Ποιος έφαγε περισσότερο;', en: 'George ate 2/8 of a pizza and Helen ate 1/4 of an identical pizza. Who ate more?' },
    options: { el: ['Ο Γιώργος', 'Η Ελένη', 'Έφαγαν το ίδιο', 'Δεν μπορούμε να ξέρουμε'], en: ['George', 'Helen', 'They ate the same', 'We cannot know'] },
    correct: 2,
    explanation: {
      el: 'Το 2/8 απλοποιείται σε 1/4 (διαιρούμε πάνω και κάτω με το 2). Άρα έφαγαν ακριβώς το ίδιο.',
      en: '2/8 simplifies to 1/4 (divide top and bottom by 2). So they ate exactly the same.',
    },
  },
  {
    q: { el: 'Απλοποίησε το κλάσμα 6/8.', en: 'Simplify the fraction 6/8.' },
    options: { el: ['2/4', '6/4', '3/8', '3/4'], en: ['2/4', '6/4', '3/8', '3/4'] },
    correct: 3,
    explanation: {
      el: 'Διαιρούμε αριθμητή και παρονομαστή με τον ίδιο αριθμό: 6 ÷ 2 = 3, 8 ÷ 2 = 4. Άρα 6/8 = 3/4.',
      en: 'We divide numerator and denominator by the same number: 6 ÷ 2 = 3, 8 ÷ 2 = 4. So 6/8 = 3/4.',
    },
  },

  // ── 8–9: comparing ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο κλάσμα είναι το μικρότερο;', en: 'Which fraction is the smallest?' },
    options: { el: ['1/2', '1/3', '1/4', '1/6'], en: ['1/2', '1/3', '1/4', '1/6'] },
    correct: 3,
    explanation: {
      el: 'Όσο σε περισσότερα κομμάτια κόβεις κάτι, τόσο πιο μικρό είναι κάθε κομμάτι. Το 1/6 είναι πιο μικρό από το 1/2.',
      en: 'The more pieces you cut something into, the smaller each piece is. 1/6 is smaller than 1/2.',
    },
  },
  {
    q: { el: 'Ποιο κλάσμα είναι μεγαλύτερο από το 1/2;', en: 'Which fraction is bigger than 1/2?' },
    options: { el: ['3/8', '5/8', '2/5', '4/9'], en: ['3/8', '5/8', '2/5', '4/9'] },
    correct: 1,
    explanation: {
      el: 'Το 1/2 είναι 4/8. Το 5/8 είναι πιο πολύ από 4/8, άρα είναι μεγαλύτερο από το μισό. Τα άλλα είναι κάτω από το μισό.',
      en: '1/2 is 4/8. 5/8 is more than 4/8, so it is bigger than a half. The others are less than a half.',
    },
  },

  // ── 10–12: adding & subtracting ───────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 3/8 + 2/8;', en: 'What is 3/8 + 2/8?' },
    options: { el: ['5/8', '5/16', '6/8', '1/8'], en: ['5/8', '5/16', '6/8', '1/8'] },
    correct: 0,
    explanation: {
      el: 'Ίδιοι παρονομαστές: προσθέτουμε μόνο τους αριθμητές. 3 + 2 = 5, άρα 5/8. Ο παρονομαστής μένει 8!',
      en: 'Same denominators: we add only the numerators. 3 + 2 = 5, so 5/8. The denominator stays 8!',
    },
  },
  {
    q: { el: 'Η Μαρία διάβασε τα 2/5 ενός βιβλίου τη Δευτέρα και το 1/5 την Τρίτη. Πόσο από το βιβλίο έχει διαβάσει;', en: 'Maria read 2/5 of a book on Monday and 1/5 on Tuesday. How much of the book has she read?' },
    options: { el: ['3/10', '3/5', '2/5', '1/5'], en: ['3/10', '3/5', '2/5', '1/5'] },
    correct: 1,
    explanation: {
      el: '2/5 + 1/5 = 3/5. Προσθέτουμε τα πέμπτα: 2 + 1 = 3 πέμπτα.',
      en: '2/5 + 1/5 = 3/5. We add the fifths: 2 + 1 = 3 fifths.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3/4 − 1/2;', en: 'What is 3/4 − 1/2?' },
    options: { el: ['2/2', '1/4', '2/4', '1/2'], en: ['2/2', '1/4', '2/4', '1/2'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα ίδιος παρονομαστής: 1/2 = 2/4. Μετά 3/4 − 2/4 = 1/4.',
      en: 'First the same denominator: 1/2 = 2/4. Then 3/4 − 2/4 = 1/4.',
    },
  },

  // ── 13–15: multiplying ────────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2/3 × 3/5;', en: 'What is 2/3 × 3/5?' },
    options: { el: ['6/8', '5/8', '9/10', '2/5'], en: ['6/8', '5/8', '9/10', '2/5'] },
    correct: 3,
    explanation: {
      el: 'Πάνω με πάνω, κάτω με κάτω: 2 × 3 = 6, 3 × 5 = 15 → 6/15. Απλοποιούμε με το 3 → 2/5.',
      en: 'Top times top, bottom times bottom: 2 × 3 = 6, 3 × 5 = 15 → 6/15. Simplify by 3 → 2/5.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4 × 3/8;', en: 'What is 4 × 3/8?' },
    options: { el: ['12/32', '3/32', '1 1/2', '7/8'], en: ['12/32', '3/32', '1 1/2', '7/8'] },
    correct: 2,
    explanation: {
      el: 'Πολλαπλασιάζουμε μόνο τον αριθμητή: 4 × 3 = 12 → 12/8. Απλοποιούμε: 12/8 = 3/2 = 1 1/2.',
      en: 'We multiply only the numerator: 4 × 3 = 12 → 12/8. Simplify: 12/8 = 3/2 = 1 1/2.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει 24 € και ξοδεύει τα 3/4 για ένα βιβλίο. Πόσα ευρώ ξόδεψε;', en: 'Nick has €24 and spends 3/4 of it on a book. How many euros did he spend?' },
    options: { el: ['18 €', '6 €', '8 €', '21 €'], en: ['€18', '€6', '€8', '€21'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα το 1/4: 24 ÷ 4 = 6 €. Μετά τα 3/4: 6 × 3 = 18 €. (Τα 6 € είναι όσα του έμειναν.)',
      en: 'First 1/4: 24 ÷ 4 = €6. Then 3/4: 6 × 3 = €18. (The €6 is what he has left.)',
    },
  },

  // ── 16–18: dividing ───────────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 3/4 ÷ 2;', en: 'What is 3/4 ÷ 2?' },
    options: { el: ['3/2', '3/8', '2/4', '1/4'], en: ['3/2', '3/8', '2/4', '1/4'] },
    correct: 1,
    explanation: {
      el: 'Μοιράζουμε τα 3/4 σε 2 ίσα μέρη: κάθε τέταρτο γίνεται όγδοο. 3/4 ÷ 2 = 3/8.',
      en: 'We share 3/4 into 2 equal parts: each quarter becomes an eighth. 3/4 ÷ 2 = 3/8.',
    },
  },
  {
    q: { el: 'Μια κορδέλα έχει μήκος 3/4 του μέτρου. Η Ελένη την κόβει σε 3 ίσα κομμάτια. Πόσο μακρύ είναι κάθε κομμάτι;', en: 'A ribbon is 3/4 of a metre long. Helen cuts it into 3 equal pieces. How long is each piece?' },
    options: { el: ['1/4 του μέτρου', '1/2 του μέτρου', '9/4 του μέτρου', '3/7 του μέτρου'], en: ['1/4 of a metre', '1/2 of a metre', '9/4 of a metre', '3/7 of a metre'] },
    correct: 0,
    explanation: {
      el: '3 τέταρτα μοιρασμένα σε 3 κομμάτια → 1 τέταρτο το καθένα. 3/4 ÷ 3 = 1/4.',
      en: '3 quarters shared into 3 pieces → 1 quarter each. 3/4 ÷ 3 = 1/4.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 1/2 ÷ 1/4;', en: 'What is 1/2 ÷ 1/4?' },
    options: { el: ['1/8', '4', '1/2', '2'], en: ['1/8', '4', '1/2', '2'] },
    correct: 3,
    explanation: {
      el: 'Ρωτάμε: πόσα τέταρτα χωράνε σε ένα μισό; Δύο! Κόλπο: αντιστρέφουμε το δεύτερο και πολλαπλασιάζουμε: 1/2 × 4/1 = 2.',
      en: 'We ask: how many quarters fit in a half? Two! Trick: flip the second fraction and multiply: 1/2 × 4/1 = 2.',
    },
  },
];
