/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Κλάσματα
 * ======================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 11–12.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–2   like and unlike fractions (ομώνυμα / ετερώνυμα)
 *   3–4   a fraction is a division: 3/4 = 3 ÷ 4, sharing equally
 *   5–6   equivalent fractions and simplest form (ανάγωγο)
 *   7–8   comparing fractions (common denominator, comparing with 1/2)
 *   9–12  adding and subtracting like/unlike fractions, with word problems
 *   13–16 multiplying and dividing fractions, fraction of an amount, word problems
 *   17–18 fraction ↔ decimal conversion
 *
 * Distractors are the mistakes children actually make: adding denominators,
 * forgetting the common denominator, inverting the wrong fraction, reading 1/5 > 1/3.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_FRACTIONS_ADVANCED: QuizQuestion[] = [
  // ── 1–2: like and unlike fractions ────────────────────────────────────────
  {
    q: { el: 'Ποιο ζευγάρι κλασμάτων είναι ομώνυμα;', en: 'Which pair of fractions are like fractions (same denominator)?' },
    options: { el: ['2/3 και 3/4', '3/5 και 4/5', '1/2 και 2/1', '5/6 και 5/8'], en: ['2/3 and 3/4', '3/5 and 4/5', '1/2 and 2/1', '5/6 and 5/8'] },
    correct: 1,
    explanation: {
      el: 'Ομώνυμα λέγονται τα κλάσματα που έχουν τον ίδιο παρονομαστή (τον κάτω αριθμό). Το 3/5 και το 4/5 έχουν και τα δύο παρονομαστή 5.',
      en: 'Like fractions have the same denominator (the bottom number). 3/5 and 4/5 both have denominator 5.',
    },
  },
  {
    q: { el: 'Τα κλάσματα 2/3 και 3/4 λέγονται…', en: 'The fractions 2/3 and 3/4 are called…' },
    options: { el: ['ομώνυμα', 'ίσα', 'ετερώνυμα', 'δεκαδικά'], en: ['like fractions', 'equal fractions', 'unlike fractions', 'decimal fractions'] },
    correct: 2,
    explanation: {
      el: 'Έχουν διαφορετικούς παρονομαστές (3 και 4), άρα είναι ετερώνυμα. Για να τα προσθέσουμε, πρέπει πρώτα να τα κάνουμε ομώνυμα.',
      en: 'They have different denominators (3 and 4), so they are unlike fractions. To add them, we first give them a common denominator.',
    },
  },

  // ── 3–4: a fraction is a division ─────────────────────────────────────────
  {
    q: { el: 'Το κλάσμα 3/4 είναι το ίδιο με την πράξη…', en: 'The fraction 3/4 is the same as the operation…' },
    options: { el: ['4 ÷ 3', '3 × 4', '3 − 4', '3 ÷ 4'], en: ['4 ÷ 3', '3 × 4', '3 − 4', '3 ÷ 4'] },
    correct: 3,
    explanation: {
      el: 'Η γραμμή του κλάσματος σημαίνει διαίρεση: 3/4 = 3 ÷ 4 = 0,75. Ο αριθμητής διαιρείται με τον παρονομαστή.',
      en: 'The fraction bar means division: 3/4 = 3 ÷ 4 = 0.75. The numerator is divided by the denominator.',
    },
  },
  {
    q: { el: 'Η Μαρία μοιράζει 5 πίτσες ίσα σε 8 παιδιά. Τι μέρος πίτσας παίρνει κάθε παιδί;', en: 'Maria shares 5 pizzas equally among 8 children. What part of a pizza does each child get?' },
    options: { el: ['5/8', '8/5', '1/3', '3/8'], en: ['5/8', '8/5', '1/3', '3/8'] },
    correct: 0,
    explanation: {
      el: '5 πίτσες ÷ 8 παιδιά = 5/8 της πίτσας για το καθένα. Ό,τι μοιράζουμε πάει επάνω, σε πόσους το μοιράζουμε πάει κάτω.',
      en: '5 pizzas ÷ 8 children = 5/8 of a pizza each. What we share goes on top, how many we share it with goes on the bottom.',
    },
  },

  // ── 5–6: equivalent fractions and simplest form ───────────────────────────
  {
    q: { el: 'Ποιο κλάσμα είναι ισοδύναμο με το 3/4;', en: 'Which fraction is equivalent to 3/4?' },
    options: { el: ['4/5', '6/8', '6/7', '3/8'], en: ['4/5', '6/8', '6/7', '3/8'] },
    correct: 1,
    explanation: {
      el: 'Αν πολλαπλασιάσουμε και τον αριθμητή και τον παρονομαστή με τον ίδιο αριθμό, το κλάσμα δεν αλλάζει: 3/4 = (3 × 2)/(4 × 2) = 6/8.',
      en: 'If we multiply both the numerator and the denominator by the same number, the fraction stays the same: 3/4 = (3 × 2)/(4 × 2) = 6/8.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ανάγωγο κλάσμα του 12/18;', en: 'What is 12/18 in its simplest form?' },
    options: { el: ['6/9', '3/4', '2/3', '1/2'], en: ['6/9', '3/4', '2/3', '1/2'] },
    correct: 2,
    explanation: {
      el: 'Διαιρούμε πάνω και κάτω με τον μεγαλύτερο κοινό διαιρέτη, το 6: 12 ÷ 6 = 2 και 18 ÷ 6 = 3, άρα 2/3. Το 6/9 απλοποιείται κι άλλο!',
      en: 'Divide top and bottom by the greatest common factor, 6: 12 ÷ 6 = 2 and 18 ÷ 6 = 3, so 2/3. 6/9 can still be simplified!',
    },
  },

  // ── 7–8: comparing fractions ──────────────────────────────────────────────
  {
    q: { el: 'Ποιο κλάσμα είναι το μεγαλύτερο;', en: 'Which fraction is the largest?' },
    options: { el: ['3/5', '2/3', '1/2', '7/12'], en: ['3/5', '2/3', '1/2', '7/12'] },
    correct: 1,
    explanation: {
      el: 'Τα κάνουμε ομώνυμα με παρονομαστή 60: 3/5 = 36/60, 2/3 = 40/60, 1/2 = 30/60, 7/12 = 35/60. Το μεγαλύτερο είναι το 2/3.',
      en: 'Give them the common denominator 60: 3/5 = 36/60, 2/3 = 40/60, 1/2 = 30/60, 7/12 = 35/60. The largest is 2/3.',
    },
  },
  {
    q: { el: 'Ποιο κλάσμα είναι μικρότερο από το 1/2;', en: 'Which fraction is smaller than 1/2?' },
    options: { el: ['5/8', '4/6', '6/10', '3/8'], en: ['5/8', '4/6', '6/10', '3/8'] },
    correct: 3,
    explanation: {
      el: 'Ένα κλάσμα είναι μικρότερο από 1/2 όταν ο αριθμητής είναι λιγότερος από το μισό του παρονομαστή. Το μισό του 8 είναι 4 και 3 < 4, άρα 3/8 < 1/2.',
      en: 'A fraction is smaller than 1/2 when the numerator is less than half the denominator. Half of 8 is 4 and 3 < 4, so 3/8 < 1/2.',
    },
  },

  // ── 9–12: adding and subtracting ──────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 3/8 + 2/8;', en: 'What is 3/8 + 2/8?' },
    options: { el: ['5/16', '5/8', '6/8', '1/8'], en: ['5/16', '5/8', '6/8', '1/8'] },
    correct: 1,
    explanation: {
      el: 'Στα ομώνυμα κλάσματα προσθέτουμε μόνο τους αριθμητές: 3 + 2 = 5, ο παρονομαστής μένει 8. Άρα 5/8, όχι 5/16!',
      en: 'With like fractions we add only the numerators: 3 + 2 = 5, the denominator stays 8. So 5/8, not 5/16!',
    },
  },
  {
    q: { el: 'Ο Νίκος διάβασε το 1/2 ενός βιβλίου τη Δευτέρα και το 1/3 την Τρίτη. Τι μέρος του βιβλίου διάβασε συνολικά;', en: 'Nikos read 1/2 of a book on Monday and 1/3 on Tuesday. What part of the book did he read in total?' },
    options: { el: ['2/5', '2/6', '5/6', '1/6'], en: ['2/5', '2/6', '5/6', '1/6'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα ομώνυμα με παρονομαστή 6: 1/2 = 3/6 και 1/3 = 2/6. Μετά 3/6 + 2/6 = 5/6 του βιβλίου.',
      en: 'First a common denominator of 6: 1/2 = 3/6 and 1/3 = 2/6. Then 3/6 + 2/6 = 5/6 of the book.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3/4 − 1/6;', en: 'What is 3/4 − 1/6?' },
    options: { el: ['7/12', '2/12', '1/2', '5/12'], en: ['7/12', '2/12', '1/2', '5/12'] },
    correct: 0,
    explanation: {
      el: 'Κοινός παρονομαστής το 12: 3/4 = 9/12 και 1/6 = 2/12. Μετά 9/12 − 2/12 = 7/12.',
      en: 'Common denominator 12: 3/4 = 9/12 and 1/6 = 2/12. Then 9/12 − 2/12 = 7/12.',
    },
  },
  {
    q: { el: 'Η Ελένη έφαγε τα 2/5 μιας σοκολάτας και ο Γιώργος το 1/5. Τι μέρος της σοκολάτας έμεινε;', en: 'Eleni ate 2/5 of a chocolate bar and Giorgos ate 1/5. What part of the bar is left?' },
    options: { el: ['3/5', '1/5', '2/5', '3/10'], en: ['3/5', '1/5', '2/5', '3/10'] },
    correct: 2,
    explanation: {
      el: 'Μαζί έφαγαν 2/5 + 1/5 = 3/5. Ολόκληρη η σοκολάτα είναι 5/5, άρα έμεινε 5/5 − 3/5 = 2/5.',
      en: 'Together they ate 2/5 + 1/5 = 3/5. The whole bar is 5/5, so 5/5 − 3/5 = 2/5 is left.',
    },
  },

  // ── 13–16: multiplying and dividing ───────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2/3 × 3/4;', en: 'What is 2/3 × 3/4?' },
    options: { el: ['5/7', '1/2', '6/7', '8/9'], en: ['5/7', '1/2', '6/7', '8/9'] },
    correct: 1,
    explanation: {
      el: 'Πολλαπλασιάζουμε αριθμητή με αριθμητή και παρονομαστή με παρονομαστή: (2 × 3)/(3 × 4) = 6/12 = 1/2.',
      en: 'Multiply numerator by numerator and denominator by denominator: (2 × 3)/(3 × 4) = 6/12 = 1/2.',
    },
  },
  {
    q: { el: 'Η Ελένη είχε 8 € και ξόδεψε τα 3/4 για ένα βιβλίο. Πόσα ευρώ ξόδεψε;', en: 'Eleni had €8 and spent 3/4 of it on a book. How many euros did she spend?' },
    options: { el: ['2 €', '3 €', '24 €', '6 €'], en: ['€2', '€3', '€24', '€6'] },
    correct: 3,
    explanation: {
      el: 'Τα 3/4 του 8: πρώτα 8 ÷ 4 = 2 (το ένα τέταρτο), μετά 2 × 3 = 6 €. Της έμειναν 2 €.',
      en: '3/4 of 8: first 8 ÷ 4 = 2 (one quarter), then 2 × 3 = €6. She has €2 left.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 1/2 ÷ 1/4;', en: 'What is 1/2 ÷ 1/4?' },
    options: { el: ['1/8', '4', '2', '1/2'], en: ['1/8', '4', '2', '1/2'] },
    correct: 2,
    explanation: {
      el: 'Για να διαιρέσουμε, αντιστρέφουμε το δεύτερο κλάσμα και πολλαπλασιάζουμε: 1/2 × 4/1 = 4/2 = 2. Πράγματι, το 1/4 χωράει 2 φορές στο 1/2.',
      en: 'To divide, flip the second fraction and multiply: 1/2 × 4/1 = 4/2 = 2. Indeed, 1/4 fits into 1/2 exactly 2 times.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 3/4 του κιλού ζάχαρη. Κάθε κέικ χρειάζεται 1/8 του κιλού. Πόσα κέικ μπορεί να φτιάξει;', en: 'Maria has 3/4 of a kilo of sugar. Each cake needs 1/8 of a kilo. How many cakes can she make?' },
    options: { el: ['3', '6', '8', '3/32'], en: ['3', '6', '8', '3/32'] },
    correct: 1,
    explanation: {
      el: 'Ρωτάμε πόσες φορές χωράει το 1/8 στα 3/4: 3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 κέικ.',
      en: 'We ask how many times 1/8 fits into 3/4: 3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 cakes.',
    },
  },

  // ── 17–18: fractions and decimals ─────────────────────────────────────────
  {
    q: { el: 'Ποιος δεκαδικός αριθμός είναι ίσος με το 3/4;', en: 'Which decimal number equals 3/4?' },
    options: { el: ['0,34', '0,75', '3,4', '0,25'], en: ['0.34', '0.75', '3.4', '0.25'] },
    correct: 1,
    explanation: {
      el: 'Το κλάσμα είναι διαίρεση: 3 ÷ 4 = 0,75. Ή κάνουμε παρονομαστή το 100: 3/4 = 75/100 = 0,75.',
      en: 'A fraction is a division: 3 ÷ 4 = 0.75. Or make the denominator 100: 3/4 = 75/100 = 0.75.',
    },
  },
  {
    q: { el: 'Ο δεκαδικός 0,6 γραμμένος ως ανάγωγο κλάσμα είναι…', en: 'The decimal 0.6 written as a fraction in simplest form is…' },
    options: { el: ['6/100', '1/6', '3/50', '3/5'], en: ['6/100', '1/6', '3/50', '3/5'] },
    correct: 3,
    explanation: {
      el: 'Το 0,6 είναι έξι δέκατα: 6/10. Απλοποιούμε διαιρώντας πάνω και κάτω με το 2: 6/10 = 3/5.',
      en: '0.6 is six tenths: 6/10. Simplify by dividing top and bottom by 2: 6/10 = 3/5.',
    },
  },
];
