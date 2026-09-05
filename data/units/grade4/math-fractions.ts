/**
 * Δ' Δημοτικού · Μαθηματικά · Κλάσματα
 * =====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 9–10. Fractions are written inline as 3/8; the UI shows them as text.
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–4   numerator and denominator; a fraction of a shape and of a set
 *   5–8   equivalent fractions (1/2 = 2/4 = 3/6), the missing numerator, the odd one out
 *   9–11  comparing and ordering fractions with the same denominator; n/n = one whole
 *   12–15 adding and subtracting like fractions (the denominator stays the same)
 *   16–18 a fraction of a number: 1/4 of 20, 3/4 of 20, 2/3 of 24 children
 *
 * Distractors are the mistakes children actually make: swapping numerator and denominator,
 * adding the denominators too (3/8 + 2/8 = 5/16), reading 3/4 of 20 as 20 ÷ 4 and stopping,
 * "bigger denominator = bigger fraction". The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_FRACTIONS: QuizQuestion[] = [
  // ── 1–4: numerator, denominator, fractions of shapes and sets ──────────────
  {
    q: { el: 'Στο κλάσμα 3/5, ποιος αριθμός είναι ο παρονομαστής;', en: 'In the fraction 3/5, which number is the denominator?' },
    options: { el: ['5', '3', '8', '15'], en: ['5', '3', '8', '15'] },
    correct: 0,
    explanation: {
      el: 'Ο παρονομαστής είναι ο κάτω αριθμός (5) και λέει σε πόσα ίσα μέρη χωρίσαμε το ολόκληρο. Ο πάνω αριθμός (3) είναι ο αριθμητής και λέει πόσα μέρη πήραμε.',
      en: 'The denominator is the bottom number (5) and tells us into how many equal parts the whole was cut. The top number (3) is the numerator and tells us how many parts we took.',
    },
  },
  {
    q: { el: 'Μια πίτσα κόπηκε σε 8 ίσα κομμάτια και φάγαμε τα 3. Ποιο κλάσμα δείχνει πόση πίτσα φάγαμε;', en: 'A pizza was cut into 8 equal slices and we ate 3. Which fraction shows how much pizza we ate?' },
    options: { el: ['8/3', '3/8', '3/5', '5/8'], en: ['8/3', '3/8', '3/5', '5/8'] },
    correct: 1,
    explanation: {
      el: 'Φάγαμε 3 από τα 8 κομμάτια: 3/8. Κάτω γράφουμε τα κομμάτια όλης της πίτσας (8) και πάνω όσα φάγαμε (3).',
      en: 'We ate 3 of the 8 slices: 3/8. Underneath we write the slices of the whole pizza (8) and on top the ones we ate (3).',
    },
  },
  {
    q: { el: 'Ένα ορθογώνιο είναι χωρισμένο σε 6 ίσα μέρη και τα 4 είναι χρωματισμένα. Ποιο κλάσμα δείχνει το χρωματισμένο μέρος;', en: 'A rectangle is divided into 6 equal parts and 4 of them are coloured. Which fraction shows the coloured part?' },
    options: { el: ['2/6', '6/4', '4/6', '4/10'], en: ['2/6', '6/4', '4/6', '4/10'] },
    correct: 2,
    explanation: {
      el: '4 χρωματισμένα μέρη από τα 6 συνολικά = 4/6. Το 2/6 θα ήταν το μέρος που ΔΕΝ είναι χρωματισμένο.',
      en: '4 coloured parts out of 6 in total = 4/6. 2/6 would be the part that is NOT coloured.',
    },
  },
  {
    q: { el: 'Σε ένα καλάθι υπάρχουν 10 φρούτα: 7 μήλα και 3 πορτοκάλια. Ποιο κλάσμα των φρούτων είναι τα πορτοκάλια;', en: 'A basket holds 10 pieces of fruit: 7 apples and 3 oranges. What fraction of the fruit are the oranges?' },
    options: { el: ['3/7', '7/10', '3/10', '10/3'], en: ['3/7', '7/10', '3/10', '10/3'] },
    correct: 2,
    explanation: {
      el: 'Τα πορτοκάλια είναι 3 από τα 10 φρούτα, άρα 3/10. Ο παρονομαστής είναι όλα τα φρούτα (10), όχι μόνο τα μήλα.',
      en: 'The oranges are 3 of the 10 pieces of fruit, so 3/10. The denominator is all the fruit (10), not just the apples.',
    },
  },

  // ── 5–8: equivalent fractions ──────────────────────────────────────────────
  {
    q: { el: 'Ποιο κλάσμα είναι ίσο με το 1/2;', en: 'Which fraction is equal to 1/2?' },
    options: { el: ['1/4', '2/3', '1/3', '2/4'], en: ['1/4', '2/3', '1/3', '2/4'] },
    correct: 3,
    explanation: {
      el: '1/2 = 2/4: αν κόψουμε το μισό σε δύο κομμάτια, έχουμε 2 τέταρτα. Πολλαπλασιάζουμε πάνω και κάτω με τον ίδιο αριθμό (× 2).',
      en: '1/2 = 2/4: if we cut a half into two pieces, we get 2 quarters. We multiply the top and the bottom by the same number (× 2).',
    },
  },
  {
    q: { el: 'Ποιο κλάσμα είναι ίσο με το 2/3;', en: 'Which fraction is equal to 2/3?' },
    options: { el: ['2/6', '3/2', '4/6', '4/3'], en: ['2/6', '3/2', '4/6', '4/3'] },
    correct: 2,
    explanation: {
      el: '2/3 = 4/6, γιατί 2 × 2 = 4 και 3 × 2 = 6. Όταν διπλασιάζουμε και τον αριθμητή και τον παρονομαστή, το κλάσμα δεν αλλάζει.',
      en: '2/3 = 4/6, because 2 × 2 = 4 and 3 × 2 = 6. When we double both the numerator and the denominator, the fraction stays the same.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 3/4 = □/8', en: 'In 3/4 = □/8, which number is missing?' },
    options: { el: ['3', '6', '7', '4'], en: ['3', '6', '7', '4'] },
    correct: 1,
    explanation: {
      el: 'Ο παρονομαστής έγινε από 4 → 8, δηλαδή διπλασιάστηκε. Διπλασιάζουμε και τον αριθμητή: 3 × 2 = 6. Άρα 3/4 = 6/8.',
      en: 'The denominator went from 4 → 8, so it doubled. We double the numerator too: 3 × 2 = 6. So 3/4 = 6/8.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω κλάσματα ΔΕΝ είναι ίσο με το 1/2;', en: 'Which of these fractions is NOT equal to 1/2?' },
    options: { el: ['2/4', '3/6', '5/10', '3/5'], en: ['2/4', '3/6', '5/10', '3/5'] },
    correct: 3,
    explanation: {
      el: 'Στο μισό, ο αριθμητής είναι το μισό του παρονομαστή: 2/4, 3/6, 5/10. Στο 3/5 το μισό του 5 δεν είναι 3, άρα το 3/5 είναι λίγο πάνω από το μισό.',
      en: 'In a half, the numerator is half of the denominator: 2/4, 3/6, 5/10. In 3/5, half of 5 is not 3, so 3/5 is a bit more than a half.',
    },
  },

  // ── 9–11: comparing fractions with the same denominator ───────────────────
  {
    q: { el: 'Ποιο κλάσμα είναι μεγαλύτερο: το 3/7 ή το 5/7;', en: 'Which fraction is bigger: 3/7 or 5/7?' },
    options: { el: ['το 3/7', 'το 5/7', 'είναι ίσα', 'δεν συγκρίνονται'], en: ['3/7', '5/7', 'they are equal', 'they cannot be compared'] },
    correct: 1,
    explanation: {
      el: 'Τα κομμάτια είναι ίδια (έβδομα), άρα κερδίζει όποιος έχει περισσότερα: 5 έβδομα > 3 έβδομα.',
      en: 'The pieces are the same size (sevenths), so the one with more pieces wins: 5 sevenths > 3 sevenths.',
    },
  },
  {
    q: { el: 'Βάλε στη σειρά από το μικρότερο στο μεγαλύτερο: 4/9, 2/9, 7/9.', en: 'Put in order from smallest to biggest: 4/9, 2/9, 7/9.' },
    options: { el: ['2/9, 4/9, 7/9', '7/9, 4/9, 2/9', '4/9, 2/9, 7/9', '2/9, 7/9, 4/9'], en: ['2/9, 4/9, 7/9', '7/9, 4/9, 2/9', '4/9, 2/9, 7/9', '2/9, 7/9, 4/9'] },
    correct: 0,
    explanation: {
      el: 'Ίδιος παρονομαστής (9), άρα κοιτάμε μόνο τους αριθμητές: 2 < 4 < 7. Σειρά: 2/9, 4/9, 7/9.',
      en: 'Same denominator (9), so we only look at the numerators: 2 < 4 < 7. Order: 2/9, 4/9, 7/9.',
    },
  },
  {
    q: { el: 'Ποιο κλάσμα είναι ίσο με ένα ολόκληρο;', en: 'Which fraction is equal to one whole?' },
    options: { el: ['1/5', '4/5', '5/5', '5/1'], en: ['1/5', '4/5', '5/5', '5/1'] },
    correct: 2,
    explanation: {
      el: 'Αν κόψουμε κάτι σε 5 κομμάτια και πάρουμε και τα 5, έχουμε όλο το ολόκληρο: 5/5 = 1. Το 5/1 είναι 5 ολόκληρα!',
      en: 'If we cut something into 5 pieces and take all 5, we have the whole thing: 5/5 = 1. 5/1 is 5 wholes!',
    },
  },

  // ── 12–15: adding and subtracting like fractions ──────────────────────────
  {
    q: { el: 'Πόσο κάνει 3/8 + 2/8;', en: 'What is 3/8 + 2/8?' },
    options: { el: ['5/16', '5/8', '6/8', '1/8'], en: ['5/16', '5/8', '6/8', '1/8'] },
    correct: 1,
    explanation: {
      el: '3 όγδοα + 2 όγδοα = 5 όγδοα = 5/8. Προσθέτουμε μόνο τους αριθμητές· ο παρονομαστής μένει 8, δεν γίνεται 16!',
      en: '3 eighths + 2 eighths = 5 eighths = 5/8. We add only the numerators; the denominator stays 8, it does not become 16!',
    },
  },
  {
    q: { el: 'Πόσο κάνει 7/10 − 4/10;', en: 'What is 7/10 − 4/10?' },
    options: { el: ['3/10', '11/10', '4/10', '3/20'], en: ['3/10', '11/10', '4/10', '3/20'] },
    correct: 0,
    explanation: {
      el: '7 δέκατα − 4 δέκατα = 3 δέκατα = 3/10. Αφαιρούμε τους αριθμητές (7 − 4 = 3) και κρατάμε τον ίδιο παρονομαστή.',
      en: '7 tenths − 4 tenths = 3 tenths = 3/10. We subtract the numerators (7 − 4 = 3) and keep the same denominator.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 2/6 + 3/6 + 1/6;', en: 'What is 2/6 + 3/6 + 1/6?' },
    options: { el: ['6/18', '6/6 = 1 ολόκληρο', '5/6', '6/12'], en: ['6/18', '6/6 = 1 whole', '5/6', '6/12'] },
    correct: 1,
    explanation: {
      el: '2 + 3 + 1 = 6 έκτα = 6/6. Και τα 6 έκτα μαζί φτιάχνουν ένα ολόκληρο!',
      en: '2 + 3 + 1 = 6 sixths = 6/6. All 6 sixths together make one whole!',
    },
  },
  {
    q: { el: 'Η Ελένη έφαγε το 1/6 μιας σοκολάτας και ο αδερφός της τα 2/6. Πόση σοκολάτα έφαγαν μαζί;', en: 'Eleni ate 1/6 of a chocolate bar and her brother ate 2/6. How much chocolate did they eat together?' },
    options: { el: ['3/12', '2/6', '1/6', '3/6'], en: ['3/12', '2/6', '1/6', '3/6'] },
    correct: 3,
    explanation: {
      el: '1/6 + 2/6 = 3/6, δηλαδή τη μισή σοκολάτα (3/6 = 1/2). Έμειναν άλλα 3/6 για αύριο!',
      en: '1/6 + 2/6 = 3/6, which is half the bar (3/6 = 1/2). Another 3/6 is left for tomorrow!',
    },
  },

  // ── 16–18: a fraction of a number ─────────────────────────────────────────
  {
    q: { el: 'Πόσο είναι το 1/4 του 20;', en: 'What is 1/4 of 20?' },
    options: { el: ['4', '16', '80', '5'], en: ['4', '16', '80', '5'] },
    correct: 3,
    explanation: {
      el: 'Για να βρούμε το ένα τέταρτο, χωρίζουμε σε 4 ίσα μέρη: 20 ÷ 4 = 5.',
      en: 'To find one quarter, we split into 4 equal parts: 20 ÷ 4 = 5.',
    },
  },
  {
    q: { el: 'Πόσο είναι τα 3/4 του 20;', en: 'What is 3/4 of 20?' },
    options: { el: ['5', '12', '15', '60'], en: ['5', '12', '15', '60'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα το ένα τέταρτο: 20 ÷ 4 = 5. Μετά τα τρία τέταρτα: 3 × 5 = 15. Το 5 είναι μόνο το ένα τέταρτο!',
      en: 'First one quarter: 20 ÷ 4 = 5. Then three quarters: 3 × 5 = 15. 5 is only one quarter!',
    },
  },
  {
    q: { el: 'Στην τάξη είναι 24 παιδιά και τα 2/3 είναι κορίτσια. Πόσα κορίτσια έχει η τάξη;', en: 'There are 24 children in the class and 2/3 of them are girls. How many girls are in the class?' },
    options: { el: ['8', '12', '16', '18'], en: ['8', '12', '16', '18'] },
    correct: 2,
    explanation: {
      el: 'Το ένα τρίτο των 24 είναι 24 ÷ 3 = 8. Τα δύο τρίτα είναι 2 × 8 = 16 κορίτσια. Τα υπόλοιπα 8 είναι αγόρια.',
      en: 'One third of 24 is 24 ÷ 3 = 8. Two thirds is 2 × 8 = 16 girls. The other 8 are boys.',
    },
  },
];
