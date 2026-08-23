/**
 * Β' Δημοτικού · Μαθηματικά · Μήκος και βάρος
 * ===========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. In the order a Β' class meets them:
 *   1–4   the centimetre and the metre: which unit for what, 1 m = 100 cm
 *   5–8   measuring line segments with a ruler, comparing and adding lengths
 *   9–12  the kilogram and the gram: which unit for what, 1 kg = 1.000 g
 *   13–15 comparing weights, a balance scale
 *   16–18 word problems mixing lengths and weights
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_MEASURE_LENGTH_WEIGHT: QuizQuestion[] = [
  // ── 1–4: centimetre and metre ───────────────────────────────────────────────
  {
    q: { el: 'Με τι μετράμε το μήκος ενός μολυβιού;', en: 'What do we use to measure the length of a pencil?' },
    options: { el: ['Με εκατοστά', 'Με κιλά', 'Με λίτρα', 'Με ώρες'], en: ['Centimetres', 'Kilograms', 'Litres', 'Hours'] },
    correct: 0,
    explanation: {
      el: 'Το μήκος μικρών πραγμάτων το μετράμε σε εκατοστά. Ένα μολύβι έχει μήκος περίπου 15 εκατοστά.',
      en: 'We measure the length of small things in centimetres. A pencil is about 15 centimetres long.',
    },
  },
  {
    q: { el: 'Τι μετράμε σε μέτρα;', en: 'What do we measure in metres?' },
    options: { el: ['Ένα κουμπί', 'Ένα μυρμήγκι', 'Ένα δωμάτιο', 'Μια γόμα'], en: ['A button', 'An ant', 'A room', 'An eraser'] },
    correct: 2,
    explanation: {
      el: 'Τα μεγάλα μήκη, όπως ένα δωμάτιο ή ένας δρόμος, μετριούνται σε μέτρα. Τα μικρά σε εκατοστά.',
      en: 'Long lengths, like a room or a road, are measured in metres. Small things in centimetres.',
    },
  },
  {
    q: { el: 'Πόσα εκατοστά έχει 1 μέτρο;', en: 'How many centimetres are in 1 metre?' },
    options: { el: ['10', '1.000', '50', '100'], en: ['10', '1,000', '50', '100'] },
    correct: 3,
    explanation: {
      el: '1 μέτρο = 100 εκατοστά. Το μέτρο είναι σαν 100 μικρά εκατοστά στη σειρά.',
      en: '1 metre = 100 centimetres. A metre is like 100 little centimetres in a row.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε σύντομα τα εκατοστά και τα μέτρα;', en: 'What is the short way to write centimetres and metres?' },
    options: { el: ['εκ. και μ.', 'κ. και μ.', 'εκ. και λ.', 'γρ. και μ.'], en: ['cm and m', 'kg and m', 'cm and l', 'g and m'] },
    correct: 0,
    explanation: {
      el: 'Τα εκατοστά γράφονται «εκ.» και τα μέτρα «μ.». Έτσι: 1 μ. = 100 εκ.',
      en: 'Centimetres are written “cm” and metres “m”. Like this: 1 m = 100 cm.',
    },
  },

  // ── 5–8: measuring and comparing line segments ─────────────────────────────
  {
    q: { el: 'Για να μετρήσουμε μια γραμμή με τον χάρακα, από πού ξεκινάμε;', en: 'To measure a line with a ruler, where do we start?' },
    options: { el: ['Από το 1', 'Από το 0', 'Από το 10', 'Από τη μέση'], en: ['From 1', 'From 0', 'From 10', 'From the middle'] },
    correct: 1,
    explanation: {
      el: 'Βάζουμε την άκρη της γραμμής στο 0 του χάρακα. Αν ξεκινήσουμε από το 1, η μέτρηση βγαίνει λάθος.',
      en: 'We put the end of the line on the 0 of the ruler. If we start from 1, the measurement comes out wrong.',
    },
  },
  {
    q: { el: 'Μια γραμμή ξεκινά στο 0 και τελειώνει στο 7 του χάρακα. Πόσο μήκος έχει;', en: 'A line starts at 0 and ends at 7 on the ruler. How long is it?' },
    options: { el: ['6 εκ.', '8 εκ.', '7 εκ.', '70 εκ.'], en: ['6 cm', '8 cm', '7 cm', '70 cm'] },
    correct: 2,
    explanation: {
      el: 'Από το 0 ως το 7 είναι 7 εκατοστά. Ο αριθμός που δείχνει η άκρη είναι το μήκος.',
      en: 'From 0 to 7 is 7 centimetres. The number at the end of the line is the length.',
    },
  },
  {
    q: { el: 'Ποια γραμμή είναι πιο μακριά: 9 εκ. ή 12 εκ.;', en: 'Which line is longer: 9 cm or 12 cm?' },
    options: { el: ['Η γραμμή 9 εκ.', 'Η γραμμή 12 εκ.', 'Είναι ίδιες', 'Δεν ξέρουμε'], en: ['The 9 cm line', 'The 12 cm line', 'They are the same', 'We cannot tell'] },
    correct: 1,
    explanation: {
      el: 'Το 12 είναι μεγαλύτερο από το 9, άρα η γραμμή των 12 εκ. είναι πιο μακριά.',
      en: '12 is bigger than 9, so the 12 cm line is longer.',
    },
  },
  {
    q: { el: 'Μια κόκκινη γραμμή έχει 5 εκ. και μια μπλε 8 εκ. Πόσο κάνουν μαζί;', en: 'A red line is 5 cm and a blue line is 8 cm. How long are they together?' },
    options: { el: ['3 εκ.', '12 εκ.', '13 εκ.', '14 εκ.'], en: ['3 cm', '12 cm', '13 cm', '14 cm'] },
    correct: 2,
    explanation: {
      el: '5 + 8 = 13. Μαζί οι δύο γραμμές έχουν 13 εκατοστά.',
      en: '5 + 8 = 13. Together the two lines are 13 centimetres long.',
    },
  },

  // ── 9–12: kilogram and gram ────────────────────────────────────────────────
  {
    q: { el: 'Με τι μετράμε πόσο βαρύ είναι κάτι;', en: 'What do we use to measure how heavy something is?' },
    options: { el: ['Με εκατοστά', 'Με μέτρα', 'Με κιλά', 'Με λεπτά'], en: ['Centimetres', 'Metres', 'Kilograms', 'Minutes'] },
    correct: 2,
    explanation: {
      el: 'Το βάρος το μετράμε σε κιλά και γραμμάρια. Τα εκατοστά και τα μέτρα είναι για το μήκος.',
      en: 'We measure weight in kilograms and grams. Centimetres and metres are for length.',
    },
  },
  {
    q: { el: 'Τι ζυγίζει περίπου 1 κιλό;', en: 'What weighs about 1 kilogram?' },
    options: { el: ['Ένα φτερό', 'Ένα πακέτο ζάχαρη', 'Ένα αυτοκίνητο', 'Μια καραμέλα'], en: ['A feather', 'A bag of sugar', 'A car', 'A sweet'] },
    correct: 1,
    explanation: {
      el: 'Ένα πακέτο ζάχαρη ζυγίζει 1 κιλό. Το φτερό και η καραμέλα είναι πολύ πιο ελαφριά, το αυτοκίνητο πολύ πιο βαρύ.',
      en: 'A bag of sugar weighs 1 kilogram. A feather and a sweet are much lighter, a car is much heavier.',
    },
  },
  {
    q: { el: 'Τι μετράμε σε γραμμάρια;', en: 'What do we measure in grams?' },
    options: { el: ['Ένα άλογο', 'Μια σοκολάτα', 'Ένα ψυγείο', 'Ένα λεωφορείο'], en: ['A horse', 'A chocolate bar', 'A fridge', 'A bus'] },
    correct: 1,
    explanation: {
      el: 'Τα ελαφριά πράγματα, όπως μια σοκολάτα, τα ζυγίζουμε σε γραμμάρια. Τα βαριά σε κιλά.',
      en: 'Light things, like a chocolate bar, are weighed in grams. Heavy things in kilograms.',
    },
  },
  {
    q: { el: 'Πόσα γραμμάρια έχει 1 κιλό;', en: 'How many grams are in 1 kilogram?' },
    options: { el: ['100', '10', '1.000', '500'], en: ['100', '10', '1,000', '500'] },
    correct: 2,
    explanation: {
      el: '1 κιλό = 1.000 γραμμάρια. Το κιλό έχει χίλια γραμμάρια, το μέτρο εκατό εκατοστά — μην τα μπερδεύεις!',
      en: '1 kilogram = 1,000 grams. A kilogram has a thousand grams, a metre has a hundred centimetres — do not mix them up!',
    },
  },

  // ── 13–15: comparing weights ───────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι πιο βαρύ: 3 κιλά ή 5 κιλά;', en: 'Which is heavier: 3 kilograms or 5 kilograms?' },
    options: { el: ['Τα 3 κιλά', 'Τα 5 κιλά', 'Είναι ίδια', 'Δεν ξέρουμε'], en: ['3 kilograms', '5 kilograms', 'They are the same', 'We cannot tell'] },
    correct: 1,
    explanation: {
      el: 'Το 5 είναι μεγαλύτερο από το 3, άρα τα 5 κιλά είναι πιο βαριά.',
      en: '5 is bigger than 3, so 5 kilograms is heavier.',
    },
  },
  {
    q: { el: 'Στη ζυγαριά, η μία πλευρά έχει πάει πιο κάτω. Τι σημαίνει;', en: 'On a balance scale, one side has gone lower. What does that mean?' },
    options: { el: ['Είναι πιο βαριά', 'Είναι πιο ελαφριά', 'Είναι πιο μακριά', 'Είναι πιο μικρή'], en: ['It is heavier', 'It is lighter', 'It is longer', 'It is smaller'] },
    correct: 0,
    explanation: {
      el: 'Η ζυγαριά πέφτει από τη βαριά πλευρά. Όσο πιο βαρύ είναι κάτι, τόσο πιο κάτω πάει.',
      en: 'The scale drops on the heavy side. The heavier something is, the lower it goes.',
    },
  },
  {
    q: { el: 'Ποιο είναι πιο βαρύ: 1 κιλό βαμβάκι ή 1 κιλό πέτρες;', en: 'Which is heavier: 1 kilogram of cotton or 1 kilogram of stones?' },
    options: { el: ['Το βαμβάκι', 'Οι πέτρες', 'Ζυγίζουν το ίδιο', 'Κανένα από τα δύο'], en: ['The cotton', 'The stones', 'They weigh the same', 'Neither of them'] },
    correct: 2,
    explanation: {
      el: 'Και τα δύο είναι 1 κιλό, άρα ζυγίζουν το ίδιο! Το βαμβάκι απλώς πιάνει περισσότερο χώρο.',
      en: 'Both are 1 kilogram, so they weigh the same! The cotton just takes up more space.',
    },
  },

  // ── 16–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος έχει μια κορδέλα 20 εκ. Κόβει 6 εκ. Πόση κορδέλα μένει;', en: 'Nikos has a 20 cm ribbon. He cuts off 6 cm. How much ribbon is left?' },
    options: { el: ['26 εκ.', '16 εκ.', '14 εκ.', '13 εκ.'], en: ['26 cm', '16 cm', '14 cm', '13 cm'] },
    correct: 2,
    explanation: {
      el: '20 − 6 = 14. Μένουν 14 εκατοστά κορδέλα. Όταν κόβουμε, αφαιρούμε.',
      en: '20 − 6 = 14. There are 14 centimetres of ribbon left. When we cut off, we subtract.',
    },
  },
  {
    q: { el: 'Η Ελένη ψωνίζει 2 κιλά μήλα και 3 κιλά πορτοκάλια. Πόσα κιλά έχει η σακούλα;', en: 'Eleni buys 2 kilograms of apples and 3 kilograms of oranges. How many kilograms are in the bag?' },
    options: { el: ['1 κιλό', '6 κιλά', '5 κιλά', '23 κιλά'], en: ['1 kilogram', '6 kilograms', '5 kilograms', '23 kilograms'] },
    correct: 2,
    explanation: {
      el: '2 + 3 = 5. Η σακούλα έχει 5 κιλά φρούτα.',
      en: '2 + 3 = 5. The bag has 5 kilograms of fruit.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει ύψος 1 μ. και 20 εκ. Πόσα εκατοστά είναι το ύψος της;', en: 'Maria is 1 m and 20 cm tall. How many centimetres is her height?' },
    options: { el: ['21 εκ.', '120 εκ.', '102 εκ.', '220 εκ.'], en: ['21 cm', '120 cm', '102 cm', '220 cm'] },
    correct: 1,
    explanation: {
      el: '1 μέτρο = 100 εκατοστά. 100 + 20 = 120 εκατοστά.',
      en: '1 metre = 100 centimetres. 100 + 20 = 120 centimetres.',
    },
  },
];
