/**
 * Δ' Δημοτικού · Μαθηματικά · Μετρήσεις και δεδομένα
 * ===================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 9–10.
 * What the unit covers, in the order a Δ' class meets it:
 *   1–3   length: metres and centimetres, converting, a word problem with a rope
 *   4–5   weight: kilograms and grams
 *   6–7   capacity: litres and millilitres, filling bottles
 *   8–11  time: hours, minutes, seconds, reading a clock forward
 *   12–13 solids: the names of shapes, the faces of a cube
 *   14–16 data: reading a table, adding its numbers, reading a bar chart with a scale
 *   17–18 patterns: add-the-same-step, doubling
 * Distractors are real child mistakes: forgetting a zero (1 m = 10 cm), treating 60 minutes like 100,
 * reading a bar chart's squares instead of its scale, or continuing a pattern with the wrong step.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_MEASURES_AND_DATA: QuizQuestion[] = [
  // ── 1–3: length ────────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα εκατοστά έχει 1 μέτρο;', en: 'How many centimetres are in 1 metre?' },
    options: { el: ['10 εκατοστά', '100 εκατοστά', '1.000 εκατοστά', '50 εκατοστά'], en: ['10 centimetres', '100 centimetres', '1,000 centimetres', '50 centimetres'] },
    correct: 1,
    explanation: {
      el: '1 μέτρο = 100 εκατοστά. «Εκατοστό» σημαίνει το ένα εκατοστό του μέτρου.',
      en: '1 metre = 100 centimetres. “Centi” means one hundredth of a metre.',
    },
  },
  {
    q: { el: 'Ο πίνακας της τάξης έχει μήκος 3 μέτρα και 25 εκατοστά. Πόσα εκατοστά είναι αυτό;', en: 'The classroom board is 3 metres and 25 centimetres long. How many centimetres is that?' },
    options: { el: ['325', '328', '3.025', '250'], en: ['325', '328', '3,025', '250'] },
    correct: 0,
    explanation: {
      el: '3 μέτρα = 300 εκατοστά. Βάζουμε και τα 25: 300 + 25 = 325 εκατοστά.',
      en: '3 metres = 300 centimetres. Add the 25: 300 + 25 = 325 centimetres.',
    },
  },
  {
    q: { el: 'Ένα σκοινί έχει μήκος 1 μέτρο και 80 εκατοστά. Ο Νίκος κόβει 50 εκατοστά. Πόσο σκοινί μένει;', en: 'A rope is 1 metre and 80 centimetres long. Nikos cuts off 50 centimetres. How much rope is left?' },
    options: { el: ['1 μέτρο και 50 εκατοστά', '1 μέτρο και 30 εκατοστά', '2 μέτρα και 30 εκατοστά', '1 μέτρο και 20 εκατοστά'], en: ['1 metre and 50 centimetres', '1 metre and 30 centimetres', '2 metres and 30 centimetres', '1 metre and 20 centimetres'] },
    correct: 1,
    explanation: {
      el: '1 μέτρο και 80 εκατοστά = 180 εκατοστά. 180 − 50 = 130 εκατοστά = 1 μέτρο και 30 εκατοστά.',
      en: '1 metre and 80 centimetres = 180 centimetres. 180 − 50 = 130 centimetres = 1 metre and 30 centimetres.',
    },
  },

  // ── 4–5: weight ────────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα γραμμάρια έχει 1 κιλό;', en: 'How many grams are in 1 kilogram?' },
    options: { el: ['100 γραμμάρια', '500 γραμμάρια', '1.000 γραμμάρια', '10 γραμμάρια'], en: ['100 grams', '500 grams', '1,000 grams', '10 grams'] },
    correct: 2,
    explanation: {
      el: '1 κιλό = 1.000 γραμμάρια. «Κιλό» σημαίνει χίλια, γι\' αυτό έχει τρία μηδενικά.',
      en: '1 kilogram = 1,000 grams. “Kilo” means a thousand, so it has three zeros.',
    },
  },
  {
    q: { el: 'Μια σακούλα πατάτες ζυγίζει 1 κιλό και 500 γραμμάρια. Πόσα γραμμάρια ζυγίζει;', en: 'A bag of potatoes weighs 1 kilogram and 500 grams. How many grams does it weigh?' },
    options: { el: ['1.500', '1.050', '150', '15.000'], en: ['1,500', '1,050', '150', '15,000'] },
    correct: 0,
    explanation: {
      el: '1 κιλό = 1.000 γραμμάρια. 1.000 + 500 = 1.500 γραμμάρια.',
      en: '1 kilogram = 1,000 grams. 1,000 + 500 = 1,500 grams.',
    },
  },

  // ── 6–7: capacity ──────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα χιλιοστόλιτρα (ml) έχει 1 λίτρο;', en: 'How many millilitres (ml) are in 1 litre?' },
    options: { el: ['100 ml', '1.000 ml', '10 ml', '500 ml'], en: ['100 ml', '1,000 ml', '10 ml', '500 ml'] },
    correct: 1,
    explanation: {
      el: '1 λίτρο = 1.000 ml. Όπως το κιλό έχει 1.000 γραμμάρια, το λίτρο έχει 1.000 χιλιοστόλιτρα.',
      en: '1 litre = 1,000 ml. Just like a kilogram has 1,000 grams, a litre has 1,000 millilitres.',
    },
  },
  {
    q: { el: 'Ένα μπουκάλι χωράει 500 ml νερό. Πόσα τέτοια μπουκάλια χρειάζονται για να γεμίσουν μια κανάτα 2 λίτρων;', en: 'A bottle holds 500 ml of water. How many of these bottles are needed to fill a 2-litre jug?' },
    options: { el: ['2', '3', '4', '5'], en: ['2', '3', '4', '5'] },
    correct: 2,
    explanation: {
      el: '2 λίτρα = 2.000 ml. Δύο μπουκάλια κάνουν 1 λίτρο, άρα 4 μπουκάλια κάνουν 2 λίτρα.',
      en: '2 litres = 2,000 ml. Two bottles make 1 litre, so 4 bottles make 2 litres.',
    },
  },

  // ── 8–11: time ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα λεπτά έχει 1 ώρα;', en: 'How many minutes are in 1 hour?' },
    options: { el: ['100', '60', '30', '24'], en: ['100', '60', '30', '24'] },
    correct: 1,
    explanation: {
      el: '1 ώρα = 60 λεπτά. Ο χρόνος δεν μετράει με το 100 — μετράει με το 60!',
      en: '1 hour = 60 minutes. Time does not count in hundreds — it counts in sixties!',
    },
  },
  {
    q: { el: 'Πόσα δευτερόλεπτα έχουν 2 λεπτά;', en: 'How many seconds are in 2 minutes?' },
    options: { el: ['200', '60', '120', '100'], en: ['200', '60', '120', '100'] },
    correct: 2,
    explanation: {
      el: '1 λεπτό = 60 δευτερόλεπτα. 2 × 60 = 120 δευτερόλεπτα.',
      en: '1 minute = 60 seconds. 2 × 60 = 120 seconds.',
    },
  },
  {
    q: { el: 'Το μάθημα αρχίζει στις 9:40 και κρατάει 35 λεπτά. Τι ώρα τελειώνει;', en: 'The lesson starts at 9:40 and lasts 35 minutes. What time does it end?' },
    options: { el: ['9:75', '10:15', '10:05', '10:25'], en: ['9:75', '10:15', '10:05', '10:25'] },
    correct: 1,
    explanation: {
      el: 'Από τις 9:40 μέχρι τις 10:00 είναι 20 λεπτά. Μένουν άλλα 15: 10:00 + 15 = 10:15. Δεν υπάρχει ώρα «9:75»!',
      en: 'From 9:40 to 10:00 is 20 minutes. 15 more are left: 10:00 + 15 = 10:15. There is no such time as “9:75”!',
    },
  },
  {
    q: { el: 'Ο Γιώργος έπαιξε στην αυλή 1 ώρα και 20 λεπτά. Πόσα λεπτά έπαιξε συνολικά;', en: 'Giorgos played in the yard for 1 hour and 20 minutes. How many minutes did he play in total?' },
    options: { el: ['70', '100', '120', '80'], en: ['70', '100', '120', '80'] },
    correct: 3,
    explanation: {
      el: '1 ώρα = 60 λεπτά. 60 + 20 = 80 λεπτά.',
      en: '1 hour = 60 minutes. 60 + 20 = 80 minutes.',
    },
  },

  // ── 12–13: solids ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα ζάρι έχει σχήμα…', en: 'A dice has the shape of a…' },
    options: { el: ['σφαίρας', 'κύβου', 'κυλίνδρου', 'κώνου'], en: ['sphere', 'cube', 'cylinder', 'cone'] },
    correct: 1,
    explanation: {
      el: 'Το ζάρι είναι κύβος: όλες οι έδρες του είναι ίσα τετράγωνα. Η μπάλα είναι σφαίρα, η κονσέρβα κύλινδρος.',
      en: 'A dice is a cube: all its faces are equal squares. A ball is a sphere, a tin can is a cylinder.',
    },
  },
  {
    q: { el: 'Πόσες έδρες έχει ένας κύβος;', en: 'How many faces does a cube have?' },
    options: { el: ['4', '8', '6', '12'], en: ['4', '8', '6', '12'] },
    correct: 2,
    explanation: {
      el: 'Ο κύβος έχει 6 έδρες: πάνω, κάτω, μπροστά, πίσω, αριστερά, δεξιά. Τις 8 τις έχει για κορυφές και τις 12 για ακμές.',
      en: 'A cube has 6 faces: top, bottom, front, back, left, right. It has 8 corners and 12 edges.',
    },
  },

  // ── 14–16: tables and bar charts ───────────────────────────────────────────
  {
    q: { el: 'Ο πίνακας δείχνει πόσα βιβλία διάβασε κάθε παιδί το καλοκαίρι: Μαρία 7, Νίκος 4, Ελένη 9. Ποιο παιδί διάβασε τα περισσότερα;', en: 'The table shows how many books each child read in the summer: Maria 7, Nikos 4, Eleni 9. Which child read the most?' },
    options: { el: ['Η Μαρία', 'Ο Νίκος', 'Η Ελένη', 'Όλοι το ίδιο'], en: ['Maria', 'Nikos', 'Eleni', 'All the same'] },
    correct: 2,
    explanation: {
      el: 'Συγκρίνουμε τους αριθμούς του πίνακα: 9 είναι ο μεγαλύτερος, άρα η Ελένη διάβασε τα περισσότερα.',
      en: 'We compare the numbers in the table: 9 is the biggest, so Eleni read the most.',
    },
  },
  {
    q: { el: 'Στον ίδιο πίνακα (Μαρία 7, Νίκος 4, Ελένη 9), πόσα βιβλία διάβασαν και τα τρία παιδιά μαζί;', en: 'In the same table (Maria 7, Nikos 4, Eleni 9), how many books did all three children read together?' },
    options: { el: ['20', '19', '21', '16'], en: ['20', '19', '21', '16'] },
    correct: 0,
    explanation: {
      el: 'Προσθέτουμε όλες τις γραμμές του πίνακα: 7 + 4 + 9 = 20 βιβλία.',
      en: 'We add all the rows of the table: 7 + 4 + 9 = 20 books.',
    },
  },
  {
    q: { el: 'Σε ένα ραβδόγραμμα κάθε τετραγωνάκι σημαίνει 5 παιδιά. Η στήλη «Ποδόσφαιρο» είναι 4 τετραγωνάκια ψηλή. Πόσα παιδιά διάλεξαν ποδόσφαιρο;', en: 'In a bar chart each square stands for 5 children. The “Football” bar is 4 squares tall. How many children chose football?' },
    options: { el: ['4', '9', '20', '25'], en: ['4', '9', '20', '25'] },
    correct: 2,
    explanation: {
      el: 'Κοιτάμε πάντα τι σημαίνει κάθε τετραγωνάκι. 4 τετραγωνάκια × 5 παιδιά = 20 παιδιά.',
      en: 'Always check what each square stands for. 4 squares × 5 children = 20 children.',
    },
  },

  // ── 17–18: patterns ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο; 3, 7, 11, 15, ___', en: 'Which number continues the pattern? 3, 7, 11, 15, ___' },
    options: { el: ['17', '18', '19', '20'], en: ['17', '18', '19', '20'] },
    correct: 2,
    explanation: {
      el: 'Κάθε φορά προσθέτουμε 4: 3, 7, 11, 15. Άρα 15 + 4 = 19.',
      en: 'Each time we add 4: 3, 7, 11, 15. So 15 + 4 = 19.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο; 2, 4, 8, 16, ___', en: 'Which number continues the pattern? 2, 4, 8, 16, ___' },
    options: { el: ['32', '18', '24', '20'], en: ['32', '18', '24', '20'] },
    correct: 0,
    explanation: {
      el: 'Εδώ δεν προσθέτουμε — διπλασιάζουμε! 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32.',
      en: 'Here we do not add — we double! 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32.',
    },
  },
];
