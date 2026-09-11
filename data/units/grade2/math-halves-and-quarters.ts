/**
 * Β' Δημοτικού · Μαθηματικά · Μισό & τέταρτο
 * ===========================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–4   half of a shape: two EQUAL parts, the symbol ½, two halves make a whole
 *   5–8   quarter of a shape: four equal parts, the symbol ¼, four quarters make a whole, ½ = two quarters
 *   9–13  half and quarter of a set: half of 10 and 14, quarter of 8 and 12, half of 20
 *   14–18 everyday problems: pizza slices, chocolate squares, balloons, which is bigger
 * Distractors are real child mistakes: any two pieces count as halves, half confused with −2,
 * quarter confused with half, ¼ confused with ½, "four quarters" read as 4 wholes.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_HALVES_AND_QUARTERS: QuizQuestion[] = [
  // ── 1–4: half of a shape ────────────────────────────────────────────────────
  {
    q: { el: 'Πότε ένα σχήμα είναι χωρισμένο σε δύο μισά;', en: 'When is a shape divided into two halves?' },
    options: { el: ['όταν έχει δύο κομμάτια, όποια κι αν είναι', 'όταν τα δύο κομμάτια είναι ακριβώς ίσα', 'όταν έχει τέσσερα κομμάτια', 'όταν το ένα κομμάτι είναι πιο μεγάλο'], en: ['when it has two pieces, any two', 'when the two pieces are exactly equal', 'when it has four pieces', 'when one piece is bigger'] },
    correct: 1,
    explanation: {
      el: 'Μισό σημαίνει ένα από δύο ΙΣΑ κομμάτια. Αν το ένα κομμάτι είναι πιο μεγάλο, δεν είναι μισά!',
      en: 'A half is one of two EQUAL pieces. If one piece is bigger, they are not halves!',
    },
  },
  {
    q: { el: 'Πώς γράφουμε το «μισό» με σύμβολο;', en: 'How do we write "a half" as a symbol?' },
    options: { el: ['2', '½', '¼', '12'], en: ['2', '½', '¼', '12'] },
    correct: 1,
    explanation: {
      el: 'Το μισό γράφεται ½: το 1 πάνω σημαίνει «ένα κομμάτι», το 2 κάτω σημαίνει «από δύο ίσα».',
      en: 'A half is written ½: the 1 on top means "one piece", the 2 below means "out of two equal pieces".',
    },
  },
  {
    q: { el: 'Ένα πορτοκάλι κόβεται σε δύο ίσα κομμάτια. Κάθε κομμάτι είναι…', en: 'An orange is cut into two equal pieces. What is each piece?' },
    options: { el: ['ολόκληρο πορτοκάλι', 'το ένα τέταρτο', 'το μισό', 'δύο πορτοκάλια'], en: ['a whole orange', 'a quarter', 'a half', 'two oranges'] },
    correct: 2,
    explanation: {
      el: 'Δύο ίσα κομμάτια = δύο μισά. Κάθε κομμάτι είναι το μισό (½) του πορτοκαλιού.',
      en: 'Two equal pieces = two halves. Each piece is a half (½) of the orange.',
    },
  },
  {
    q: { el: 'Πόσα μισά χρειάζονται για να φτιάξουμε ένα ολόκληρο;', en: 'How many halves do we need to make a whole?' },
    options: { el: ['1', '3', '4', '2'], en: ['1', '3', '4', '2'] },
    correct: 3,
    explanation: {
      el: 'Δύο μισά κάνουν ένα ολόκληρο: ½ + ½ = 1. Σαν τα δύο κομμάτια του πορτοκαλιού που ξανακολλάνε!',
      en: 'Two halves make a whole: ½ + ½ = 1. Like the two pieces of the orange put back together!',
    },
  },

  // ── 5–8: quarter of a shape ───────────────────────────────────────────────
  {
    q: { el: 'Ένα χαρτί διπλώνεται σε τέσσερα ίσα κομμάτια. Κάθε κομμάτι είναι…', en: 'A sheet of paper is folded into four equal pieces. What is each piece?' },
    options: { el: ['το μισό', 'το ένα τρίτο', 'ολόκληρο χαρτί', 'το ένα τέταρτο'], en: ['a half', 'a third', 'a whole sheet', 'a quarter'] },
    correct: 3,
    explanation: {
      el: 'Τέσσερα ίσα κομμάτια = τέσσερα τέταρτα. Κάθε κομμάτι είναι το ένα τέταρτο (¼).',
      en: 'Four equal pieces = four quarters. Each piece is one quarter (¼).',
    },
  },
  {
    q: { el: 'Πώς γράφουμε το «ένα τέταρτο» με σύμβολο;', en: 'How do we write "a quarter" as a symbol?' },
    options: { el: ['¼', '½', '4', '14'], en: ['¼', '½', '4', '14'] },
    correct: 0,
    explanation: {
      el: 'Το ένα τέταρτο γράφεται ¼: ένα κομμάτι από τέσσερα ίσα.',
      en: 'One quarter is written ¼: one piece out of four equal pieces.',
    },
  },
  {
    q: { el: 'Πόσα τέταρτα κάνουν ένα ολόκληρο;', en: 'How many quarters make a whole?' },
    options: { el: ['2', '3', '4', '8'], en: ['2', '3', '4', '8'] },
    correct: 2,
    explanation: {
      el: 'Τέσσερα τέταρτα κάνουν ένα ολόκληρο: ¼ + ¼ + ¼ + ¼ = 1.',
      en: 'Four quarters make a whole: ¼ + ¼ + ¼ + ¼ = 1.',
    },
  },
  {
    q: { el: 'Δύο τέταρτα είναι το ίδιο με…', en: 'Two quarters are the same as what?' },
    options: { el: ['ένα ολόκληρο', 'ένα μισό', 'ένα τέταρτο', 'τρία τέταρτα'], en: ['a whole', 'a half', 'a quarter', 'three quarters'] },
    correct: 1,
    explanation: {
      el: 'Αν κόψεις το μισό στη μέση, παίρνεις δύο τέταρτα. Άρα ¼ + ¼ = ½.',
      en: 'If you cut a half down the middle, you get two quarters. So ¼ + ¼ = ½.',
    },
  },

  // ── 9–13: half and quarter of a set ───────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το μισό του 10;', en: 'What is half of 10?' },
    options: { el: ['20', '8', '5', '2'], en: ['20', '8', '5', '2'] },
    correct: 2,
    explanation: {
      el: 'Μισό σημαίνει δύο ίσα μέρη: 5 + 5 = 10, άρα το μισό του 10 είναι 5.',
      en: 'Half means two equal parts: 5 + 5 = 10, so half of 10 is 5.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 14 φράουλες και δίνει τις μισές στον αδερφό της. Πόσες του δίνει;', en: 'Eleni has 14 strawberries and gives half of them to her brother. How many does she give him?' },
    options: { el: ['7', '12', '28', '4'], en: ['7', '12', '28', '4'] },
    correct: 0,
    explanation: {
      el: 'Το μισό του 14 είναι 7, γιατί 7 + 7 = 14. (Το 12 είναι 14 − 2 — αυτό δεν είναι μισό!)',
      en: 'Half of 14 is 7, because 7 + 7 = 14. (12 is 14 − 2 — that is not half!)',
    },
  },
  {
    q: { el: 'Ποιο είναι το μισό του 20;', en: 'What is half of 20?' },
    options: { el: ['40', '5', '18', '10'], en: ['40', '5', '18', '10'] },
    correct: 3,
    explanation: {
      el: '10 + 10 = 20, άρα το μισό του 20 είναι 10. Το 5 είναι το ένα τέταρτο του 20!',
      en: '10 + 10 = 20, so half of 20 is 10. 5 is a quarter of 20!',
    },
  },
  {
    q: { el: 'Ποιο είναι το ένα τέταρτο του 8;', en: 'What is a quarter of 8?' },
    options: { el: ['4', '2', '32', '6'], en: ['4', '2', '32', '6'] },
    correct: 1,
    explanation: {
      el: 'Χωρίζουμε το 8 σε 4 ίσες ομάδες: 2 + 2 + 2 + 2 = 8. Το ένα τέταρτο του 8 είναι 2.',
      en: 'Split 8 into 4 equal groups: 2 + 2 + 2 + 2 = 8. A quarter of 8 is 2.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ένα τέταρτο του 12;', en: 'What is a quarter of 12?' },
    options: { el: ['6', '8', '3', '4'], en: ['6', '8', '3', '4'] },
    correct: 2,
    explanation: {
      el: '3 + 3 + 3 + 3 = 12, άρα το ένα τέταρτο του 12 είναι 3. Κόλπο: πρώτα το μισό (6) και μετά πάλι το μισό (3).',
      en: '3 + 3 + 3 + 3 = 12, so a quarter of 12 is 3. Trick: first take half (6), then half again (3).',
    },
  },

  // ── 14–18: everyday problems ──────────────────────────────────────────────
  {
    q: { el: '16 μπαλόνια χωρίζονται σε 4 ίσες ομάδες. Πόσα μπαλόνια έχει η κάθε ομάδα;', en: '16 balloons are split into 4 equal groups. How many balloons are in each group?' },
    options: { el: ['4', '8', '12', '2'], en: ['4', '8', '12', '2'] },
    correct: 0,
    explanation: {
      el: 'Κάθε ομάδα είναι το ένα τέταρτο των 16: 4 + 4 + 4 + 4 = 16. Άρα 4 μπαλόνια.',
      en: 'Each group is a quarter of 16: 4 + 4 + 4 + 4 = 16. So 4 balloons.',
    },
  },
  {
    q: { el: 'Μια πίτσα κόβεται σε 4 ίσα κομμάτια. Ο Νίκος τρώει 1 κομμάτι. Πόση πίτσα έφαγε;', en: 'A pizza is cut into 4 equal slices. Nikos eats 1 slice. How much of the pizza did he eat?' },
    options: { el: ['½', '¼', 'ολόκληρη', '¾'], en: ['½', '¼', 'the whole pizza', '¾'] },
    correct: 1,
    explanation: {
      el: 'Ένα κομμάτι από τέσσερα ίσα είναι το ένα τέταρτο: ¼ της πίτσας.',
      en: 'One slice out of four equal slices is a quarter: ¼ of the pizza.',
    },
  },
  {
    q: { el: 'Μια σοκολάτα έχει 12 κομμάτια. Η Μαρία τρώει τη μισή. Πόσα κομμάτια έφαγε;', en: 'A chocolate bar has 12 squares. Maria eats half of it. How many squares did she eat?' },
    options: { el: ['3', '10', '6', '24'], en: ['3', '10', '6', '24'] },
    correct: 2,
    explanation: {
      el: 'Το μισό του 12 είναι 6: 6 + 6 = 12. Η Μαρία έφαγε 6 κομμάτια.',
      en: 'Half of 12 is 6: 6 + 6 = 12. Maria ate 6 squares.',
    },
  },
  {
    q: { el: 'Από την ίδια πίτα, ποιο κομμάτι είναι πιο μεγάλο: το μισό ή το ένα τέταρτο;', en: 'From the same pie, which piece is bigger: a half or a quarter?' },
    options: { el: ['το ένα τέταρτο', 'είναι ίσα', 'το μισό', 'κανένα από τα δύο'], en: ['the quarter', 'they are equal', 'the half', 'neither'] },
    correct: 2,
    explanation: {
      el: 'Όσο περισσότερα κομμάτια κόβουμε, τόσο πιο μικρά γίνονται. Το μισό (2 κομμάτια) είναι πιο μεγάλο από το τέταρτο (4 κομμάτια).',
      en: 'The more pieces we cut, the smaller they get. A half (2 pieces) is bigger than a quarter (4 pieces).',
    },
  },
  {
    q: { el: 'Ο Πέτρος τρώει 2 από τα 4 ίσα κομμάτια ενός μήλου. Πόσο μήλο έφαγε;', en: 'Petros eats 2 of the 4 equal pieces of an apple. How much of the apple did he eat?' },
    options: { el: ['το ένα τέταρτο', 'το μισό', 'όλο το μήλο', 'τρία τέταρτα'], en: ['a quarter', 'a half', 'the whole apple', 'three quarters'] },
    correct: 1,
    explanation: {
      el: 'Δύο τέταρτα κάνουν ένα μισό: ¼ + ¼ = ½. Ο Πέτρος έφαγε το μισό μήλο.',
      en: 'Two quarters make a half: ¼ + ¼ = ½. Petros ate half the apple.',
    },
  },
];
