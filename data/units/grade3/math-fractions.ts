/**
 * Γ' Δημοτικού · Μαθηματικά · Πρώτα κλάσματα
 * ==========================================
 * 18 original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9.
 *
 * What the unit covers, in order:
 *   1–3   halves: cutting into 2 equal parts, writing 1/2, half of a number
 *   4–6   thirds and quarters, comparing 1/2 with 1/4
 *   7–9   unit fractions: what the bottom number means, 1/6, 1/4 of a group
 *   10–12 fraction of a shape: coloured parts, uncoloured parts, equal parts
 *   13–15 equivalent fractions: 1/2 = 2/4, 1/3 = 2/6
 *   16–18 word problems: money, pizza slices, stickers (find the part, then subtract)
 *
 * Distractors are real child mistakes: swapping top and bottom, thinking a bigger
 * bottom number means a bigger fraction, dividing by the wrong number, forgetting
 * the final subtraction. The UI shuffles options, so the correct slot is not balanced.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_FRACTIONS: QuizQuestion[] = [
  // ── 1–3: halves ────────────────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη κόβει ένα μήλο σε 2 ίσα κομμάτια. Κάθε κομμάτι είναι…', en: 'Eleni cuts an apple into 2 equal pieces. Each piece is…' },
    options: { el: ['το μισό μήλο', 'ένα τέταρτο του μήλου', 'ένα τρίτο του μήλου', 'ολόκληρο το μήλο'], en: ['half an apple', 'a quarter of the apple', 'a third of the apple', 'the whole apple'] },
    correct: 0,
    explanation: {
      el: 'Όταν κόβουμε κάτι σε 2 ίσα κομμάτια, κάθε κομμάτι είναι το μισό.',
      en: 'When we cut something into 2 equal pieces, each piece is a half.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε «το μισό» με αριθμούς;', en: 'How do we write “a half” with numbers?' },
    options: { el: ['2/1', '1/2', '1/1', '2/2'], en: ['2/1', '1/2', '1/1', '2/2'] },
    correct: 1,
    explanation: {
      el: 'Το μισό γράφεται 1/2: πάνω το 1 (ένα κομμάτι), κάτω το 2 (κόψαμε σε 2 ίσα κομμάτια).',
      en: 'A half is written 1/2: 1 on top (one piece), 2 on the bottom (we cut into 2 equal pieces).',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει 8 καραμέλες και δίνει τις μισές στον Νίκο. Πόσες καραμέλες δίνει;', en: 'Giorgos has 8 sweets and gives half of them to Nikos. How many sweets does he give?' },
    options: { el: ['6', '4', '2', '16'], en: ['6', '4', '2', '16'] },
    correct: 1,
    explanation: {
      el: 'Το μισό από 8 είναι 4, γιατί 4 + 4 = 8. Μοιράζουμε σε 2 ίσες ομάδες.',
      en: 'Half of 8 is 4, because 4 + 4 = 8. We share into 2 equal groups.',
    },
  },

  // ── 4–6: thirds and quarters ───────────────────────────────────────────────
  {
    q: { el: 'Μια σοκολάτα κόβεται σε 3 ίσα κομμάτια. Ο Νίκος τρώει το ένα. Τι μέρος της σοκολάτας έφαγε;', en: 'A chocolate bar is cut into 3 equal pieces. Nikos eats one. What part of the chocolate did he eat?' },
    options: { el: ['1/2', '1/4', '1/3', '3/1'], en: ['1/2', '1/4', '1/3', '3/1'] },
    correct: 2,
    explanation: {
      el: 'Ένα κομμάτι από τα 3 ίσα είναι το ένα τρίτο: 1/3.',
      en: 'One piece out of 3 equal pieces is one third: 1/3.',
    },
  },
  {
    q: { el: 'Μια πίτσα κόβεται σε 4 ίσα κομμάτια. Το ένα κομμάτι είναι…', en: 'A pizza is cut into 4 equal slices. One slice is…' },
    options: { el: ['1/4 της πίτσας', '1/2 της πίτσας', '4/1 της πίτσας', '1/3 της πίτσας'], en: ['1/4 of the pizza', '1/2 of the pizza', '4/1 of the pizza', '1/3 of the pizza'] },
    correct: 0,
    explanation: {
      el: 'Ένα από τα 4 ίσα κομμάτια είναι το ένα τέταρτο: 1/4. Τέσσερα τέταρτα κάνουν ολόκληρη την πίτσα.',
      en: 'One of the 4 equal slices is one quarter: 1/4. Four quarters make the whole pizza.',
    },
  },
  {
    q: { el: 'Ποιο είναι πιο μεγάλο κομμάτι από την ίδια σοκολάτα: το 1/2 ή το 1/4;', en: 'Which is the bigger piece of the same chocolate bar: 1/2 or 1/4?' },
    options: { el: ['Το 1/4, γιατί το 4 είναι πιο μεγάλο από το 2', 'Το 1/2, γιατί κόψαμε σε λιγότερα κομμάτια', 'Είναι ίσα', 'Δεν μπορούμε να τα συγκρίνουμε'], en: ['1/4, because 4 is bigger than 2', '1/2, because we cut into fewer pieces', 'They are equal', 'We cannot compare them'] },
    correct: 1,
    explanation: {
      el: 'Το 1/2 είναι πιο μεγάλο. Όσο σε περισσότερα κομμάτια κόβουμε, τόσο πιο μικρό γίνεται κάθε κομμάτι.',
      en: '1/2 is bigger. The more pieces we cut into, the smaller each piece becomes.',
    },
  },

  // ── 7–9: unit fractions ───────────────────────────────────────────────────
  {
    q: { el: 'Στο κλάσμα 1/5, τι μας λέει ο αριθμός 5;', en: 'In the fraction 1/5, what does the number 5 tell us?' },
    options: { el: ['Σε πόσα ίσα κομμάτια κόψαμε το ολόκληρο', 'Πόσα κομμάτια πήραμε', 'Πόσα κομμάτια περίσσεψαν', 'Πόσα παιδιά μοιράστηκαν'], en: ['How many equal pieces we cut the whole into', 'How many pieces we took', 'How many pieces were left over', 'How many children shared it'] },
    correct: 0,
    explanation: {
      el: 'Ο κάτω αριθμός λέει σε πόσα ίσα κομμάτια κόψαμε. Ο πάνω αριθμός λέει πόσα κομμάτια πήραμε.',
      en: 'The bottom number tells us how many equal pieces we cut. The top number tells us how many pieces we took.',
    },
  },
  {
    q: { el: 'Ένα κέικ κόβεται σε 6 ίσα κομμάτια. Πώς γράφουμε το ένα κομμάτι;', en: 'A cake is cut into 6 equal pieces. How do we write one piece?' },
    options: { el: ['6/1', '1/5', '1/6', '6/6'], en: ['6/1', '1/5', '1/6', '6/6'] },
    correct: 2,
    explanation: {
      el: 'Ένα κομμάτι από τα 6 είναι 1/6. Το 6/6 είναι ολόκληρο το κέικ.',
      en: 'One piece out of 6 is 1/6. 6/6 is the whole cake.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει 12 μολύβια. Το 1/4 από αυτά είναι κόκκινα. Πόσα μολύβια είναι κόκκινα;', en: 'Maria has 12 pencils. 1/4 of them are red. How many pencils are red?' },
    options: { el: ['4', '3', '8', '6'], en: ['4', '3', '8', '6'] },
    correct: 1,
    explanation: {
      el: 'Για να βρούμε το 1/4, μοιράζουμε σε 4 ίσες ομάδες: 12 ÷ 4 = 3 κόκκινα μολύβια.',
      en: 'To find 1/4, we share into 4 equal groups: 12 ÷ 4 = 3 red pencils.',
    },
  },

  // ── 10–12: fraction of a shape ────────────────────────────────────────────
  {
    q: { el: 'Ένα ορθογώνιο είναι χωρισμένο σε 4 ίσα μέρη. Τα 3 είναι χρωματισμένα. Ποιο κλάσμα δείχνει το χρωματισμένο μέρος;', en: 'A rectangle is divided into 4 equal parts. 3 of them are coloured. Which fraction shows the coloured part?' },
    options: { el: ['1/4', '4/3', '3/4', '3/1'], en: ['1/4', '4/3', '3/4', '3/1'] },
    correct: 2,
    explanation: {
      el: 'Πήραμε 3 κομμάτια από τα 4: γράφουμε 3/4. Πάνω τα χρωματισμένα, κάτω όλα τα κομμάτια.',
      en: 'We took 3 pieces out of 4: we write 3/4. Coloured pieces on top, all the pieces on the bottom.',
    },
  },
  {
    q: { el: 'Ένας κύκλος είναι κομμένος σε 8 ίσα κομμάτια. Η Ελένη χρωμάτισε τα 5. Ποιο κλάσμα δείχνει τα κομμάτια που ΔΕΝ χρωμάτισε;', en: 'A circle is cut into 8 equal pieces. Eleni coloured 5 of them. Which fraction shows the pieces she did NOT colour?' },
    options: { el: ['3/8', '5/8', '3/5', '8/5'], en: ['3/8', '5/8', '3/5', '8/5'] },
    correct: 0,
    explanation: {
      el: 'Από τα 8 κομμάτια, 8 − 5 = 3 έμειναν άσπρα. Άρα τα άσπρα είναι 3/8.',
      en: 'Out of 8 pieces, 8 − 5 = 3 stayed white. So the white part is 3/8.',
    },
  },
  {
    q: { el: 'Για να λέμε ότι ένα σχήμα δείχνει το 1/2, τα δύο κομμάτια του πρέπει να είναι…', en: 'For a shape to show 1/2, its two pieces must be…' },
    options: { el: ['διαφορετικά μεταξύ τους', 'στρογγυλά', 'πολύ μεγάλα', 'ακριβώς ίσα'], en: ['different from each other', 'round', 'very big', 'exactly equal'] },
    correct: 3,
    explanation: {
      el: 'Τα κλάσματα θέλουν ΙΣΑ κομμάτια. Αν το ένα κομμάτι είναι πιο μεγάλο από το άλλο, δεν είναι μισά.',
      en: 'Fractions need EQUAL pieces. If one piece is bigger than the other, they are not halves.',
    },
  },

  // ── 13–15: equivalent fractions ───────────────────────────────────────────
  {
    q: { el: 'Ποιο κλάσμα είναι ίσο με το 1/2;', en: 'Which fraction is equal to 1/2?' },
    options: { el: ['1/4', '2/4', '2/3', '1/3'], en: ['1/4', '2/4', '2/3', '1/3'] },
    correct: 1,
    explanation: {
      el: '1/2 = 2/4. Δύο τέταρτα μαζί κάνουν ένα μισό. Σκέψου την πίτσα: 2 από τα 4 κομμάτια είναι η μισή πίτσα.',
      en: '1/2 = 2/4. Two quarters together make one half. Think of a pizza: 2 out of 4 slices is half the pizza.',
    },
  },
  {
    q: { el: 'Η Μαρία έφαγε τα 2/4 μιας σοκολάτας. Ο Γιώργος έφαγε το 1/2 μιας ίδιας σοκολάτας. Ποιος έφαγε πιο πολύ;', en: 'Maria ate 2/4 of a chocolate bar. Giorgos ate 1/2 of an identical bar. Who ate more?' },
    options: { el: ['Η Μαρία', 'Ο Γιώργος', 'Έφαγαν το ίδιο', 'Κανείς δεν έφαγε σοκολάτα'], en: ['Maria', 'Giorgos', 'They ate the same', 'Nobody ate any chocolate'] },
    correct: 2,
    explanation: {
      el: 'Τα 2/4 και το 1/2 είναι το ίδιο μέρος. Έφαγαν ακριβώς την ίδια ποσότητα!',
      en: '2/4 and 1/2 are the same amount. They ate exactly the same!',
    },
  },
  {
    q: { el: 'Ποιο κλάσμα είναι ίσο με το 1/3;', en: 'Which fraction is equal to 1/3?' },
    options: { el: ['3/6', '1/6', '2/6', '2/3'], en: ['3/6', '1/6', '2/6', '2/3'] },
    correct: 2,
    explanation: {
      el: '1/3 = 2/6. Αν κόψεις κάθε τρίτο στη μέση, έχεις 6 κομμάτια και το ένα τρίτο γίνεται 2 από αυτά.',
      en: '1/3 = 2/6. If you cut each third in half, you get 6 pieces, and one third becomes 2 of them.',
    },
  },

  // ── 16–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος έχει 10 €. Ξοδεύει τα μισά για ένα βιβλίο. Πόσα ευρώ του μένουν;', en: 'Nikos has €10. He spends half of it on a book. How many euros does he have left?' },
    options: { el: ['8 €', '2 €', '5 €', '10 €'], en: ['€8', '€2', '€5', '€10'] },
    correct: 2,
    explanation: {
      el: 'Το μισό από 10 € είναι 5 €. Ξοδεύει 5 € και του μένουν 10 − 5 = 5 €.',
      en: 'Half of €10 is €5. He spends €5 and has 10 − 5 = €5 left.',
    },
  },
  {
    q: { el: 'Μια πίτσα έχει 8 ίσα κομμάτια. Ο Γιώργος έφαγε το 1/4 της πίτσας. Πόσα κομμάτια έφαγε;', en: 'A pizza has 8 equal slices. Giorgos ate 1/4 of the pizza. How many slices did he eat?' },
    options: { el: ['4', '2', '1', '8'], en: ['4', '2', '1', '8'] },
    correct: 1,
    explanation: {
      el: 'Το 1/4 από 8 κομμάτια: 8 ÷ 4 = 2 κομμάτια. Το 1/4 δεν είναι πάντα 1 κομμάτι!',
      en: '1/4 of 8 slices: 8 ÷ 4 = 2 slices. A quarter is not always 1 slice!',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 12 αυτοκόλλητα. Δίνει το 1/3 στη Μαρία. Πόσα αυτοκόλλητα της μένουν;', en: 'Eleni has 12 stickers. She gives 1/3 of them to Maria. How many stickers does she have left?' },
    options: { el: ['4', '9', '8', '6'], en: ['4', '9', '8', '6'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα το 1/3: 12 ÷ 3 = 4 αυτοκόλλητα δίνει. Μετά: 12 − 4 = 8 της μένουν.',
      en: 'First find 1/3: 12 ÷ 3 = 4 stickers given away. Then: 12 − 4 = 8 left.',
    },
  },
];
