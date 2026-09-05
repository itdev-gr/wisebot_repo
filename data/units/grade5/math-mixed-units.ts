/**
 * Ε' Δημοτικού · Μαθηματικά · Συμμιγείς αριθμοί
 * =============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–4   the basic conversions: hours→minutes, kilos→grams, metres→centimetres, euros→cents
 *   5–8   turning a single unit into a mixed number and back (150 min, 2.750 g, 408 cm, 1 h 15 min)
 *   9–12  adding with a carry (minutes past 60, grams past 1.000, centimetres past 100, cents past 100)
 *   13–16 subtracting with a borrow (one hour, one kilo, one metre, one euro)
 *   17–18 word problems: a finishing time, two bags on the scale
 * Distractors are real child mistakes: carrying at 100 instead of 60, forgetting the
 * carry altogether, writing "3 ώρες 75 λεπτά", subtracting the smaller digits either way.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_MIXED_UNITS: QuizQuestion[] = [
  // ── 1–4: the basic conversions ─────────────────────────────────────────────
  {
    q: { el: '2 ώρες είναι πόσα λεπτά;', en: 'How many minutes are 2 hours?' },
    options: { el: ['60', '200', '100', '120'], en: ['60', '200', '100', '120'] },
    correct: 3,
    explanation: {
      el: '1 ώρα = 60 λεπτά, άρα 2 ώρες = 2 × 60 = 120 λεπτά. Προσοχή: στην ώρα μετράμε με το 60, όχι με το 100!',
      en: '1 hour = 60 minutes, so 2 hours = 2 × 60 = 120 minutes. Careful: time counts in 60s, not 100s!',
    },
  },
  {
    q: { el: '3 κιλά είναι πόσα γραμμάρια;', en: 'How many grams are 3 kilograms?' },
    options: { el: ['300', '3.000', '30', '3.500'], en: ['300', '3,000', '30', '3,500'] },
    correct: 1,
    explanation: {
      el: '1 κιλό = 1.000 γραμμάρια, άρα 3 κιλά = 3 × 1.000 = 3.000 γραμμάρια.',
      en: '1 kilogram = 1,000 grams, so 3 kilograms = 3 × 1,000 = 3,000 grams.',
    },
  },
  {
    q: { el: '2 μέτρα και 35 εκατοστά είναι πόσα εκατοστά;', en: 'How many centimetres are 2 metres and 35 centimetres?' },
    options: { el: ['235', '2.035', '37', '253'], en: ['235', '2,035', '37', '253'] },
    correct: 0,
    explanation: {
      el: '1 μέτρο = 100 εκατοστά, άρα 2 μέτρα = 200 εκατοστά. Προσθέτουμε τα 35: 200 + 35 = 235 εκατοστά.',
      en: '1 metre = 100 centimetres, so 2 metres = 200 centimetres. Add the 35: 200 + 35 = 235 centimetres.',
    },
  },
  {
    q: { el: '3 ευρώ και 45 λεπτά είναι πόσα λεπτά;', en: 'How many cents are 3 euros and 45 cents?' },
    options: { el: ['3.045', '345', '45', '354'], en: ['3,045', '345', '45', '354'] },
    correct: 1,
    explanation: {
      el: '1 ευρώ = 100 λεπτά, άρα 3 ευρώ = 300 λεπτά. Μαζί με τα 45 λεπτά: 300 + 45 = 345 λεπτά.',
      en: '1 euro = 100 cents, so 3 euros = 300 cents. Together with the 45 cents: 300 + 45 = 345 cents.',
    },
  },

  // ── 5–8: single unit ↔ mixed number ───────────────────────────────────────
  {
    q: { el: '150 λεπτά είναι πόσες ώρες και λεπτά;', en: 'How many hours and minutes are 150 minutes?' },
    options: { el: ['1 ώρα και 50 λεπτά', '2 ώρες και 30 λεπτά', '2 ώρες και 50 λεπτά', '1 ώρα και 30 λεπτά'], en: ['1 hour and 50 minutes', '2 hours and 30 minutes', '2 hours and 50 minutes', '1 hour and 30 minutes'] },
    correct: 1,
    explanation: {
      el: 'Πόσες φορές χωράει το 60 στο 150; Δύο φορές (120) και περισσεύουν 30. Άρα 150 λεπτά = 2 ώρες και 30 λεπτά.',
      en: 'How many times does 60 fit into 150? Twice (120) with 30 left over. So 150 minutes = 2 hours and 30 minutes.',
    },
  },
  {
    q: { el: '2.750 γραμμάρια είναι πόσα κιλά και γραμμάρια;', en: 'How many kilograms and grams are 2,750 grams?' },
    options: { el: ['27 κιλά και 50 γραμμάρια', '2 κιλά και 75 γραμμάρια', '2 κιλά και 750 γραμμάρια', '275 κιλά'], en: ['27 kilograms and 50 grams', '2 kilograms and 75 grams', '2 kilograms and 750 grams', '275 kilograms'] },
    correct: 2,
    explanation: {
      el: 'Κάθε 1.000 γραμμάρια είναι 1 κιλό. Στο 2.750 χωράνε 2 χιλιάδες (2 κιλά) και μένουν 750 γραμμάρια.',
      en: 'Every 1,000 grams is 1 kilogram. In 2,750 there are 2 thousands (2 kilograms) and 750 grams remain.',
    },
  },
  {
    q: { el: '408 εκατοστά είναι πόσα μέτρα και εκατοστά;', en: 'How many metres and centimetres are 408 centimetres?' },
    options: { el: ['4 μέτρα και 8 εκατοστά', '4 μέτρα και 80 εκατοστά', '40 μέτρα και 8 εκατοστά', '48 μέτρα'], en: ['4 metres and 8 centimetres', '4 metres and 80 centimetres', '40 metres and 8 centimetres', '48 metres'] },
    correct: 0,
    explanation: {
      el: 'Κάθε 100 εκατοστά είναι 1 μέτρο. Το 408 έχει 4 εκατοντάδες (4 μέτρα) και μένουν 8 εκατοστά — όχι 80!',
      en: 'Every 100 centimetres is 1 metre. 408 has 4 hundreds (4 metres) and 8 centimetres remain — not 80!',
    },
  },
  {
    q: { el: '1 ώρα και 15 λεπτά είναι πόσα λεπτά συνολικά;', en: 'How many minutes in total are 1 hour and 15 minutes?' },
    options: { el: ['115', '65', '75', '105'], en: ['115', '65', '75', '105'] },
    correct: 2,
    explanation: {
      el: '1 ώρα = 60 λεπτά. 60 + 15 = 75 λεπτά. (Το 115 θα ήταν σωστό μόνο αν η ώρα είχε 100 λεπτά!)',
      en: '1 hour = 60 minutes. 60 + 15 = 75 minutes. (115 would only be right if an hour had 100 minutes!)',
    },
  },

  // ── 9–12: adding with a carry ─────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 2 ώρες 45 λεπτά + 1 ώρα 30 λεπτά;', en: 'What is 2 hours 45 minutes + 1 hour 30 minutes?' },
    options: { el: ['3 ώρες 15 λεπτά', '4 ώρες 15 λεπτά', '4 ώρες 5 λεπτά', '3 ώρες 45 λεπτά'], en: ['3 hours 15 minutes', '4 hours 15 minutes', '4 hours 5 minutes', '3 hours 45 minutes'] },
    correct: 1,
    explanation: {
      el: 'Λεπτά: 45 + 30 = 75 = 1 ώρα και 15 λεπτά. Ώρες: 2 + 1 + 1 (το κρατούμενο) = 4. Άρα 4 ώρες 15 λεπτά.',
      en: 'Minutes: 45 + 30 = 75 = 1 hour and 15 minutes. Hours: 2 + 1 + 1 (the carry) = 4. So 4 hours 15 minutes.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 3 κιλά 600 γραμμάρια + 2 κιλά 700 γραμμάρια;', en: 'What is 3 kilograms 600 grams + 2 kilograms 700 grams?' },
    options: { el: ['6 κιλά 300 γραμμάρια', '5 κιλά 300 γραμμάρια', '6 κιλά 130 γραμμάρια', '5 κιλά 900 γραμμάρια'], en: ['6 kilograms 300 grams', '5 kilograms 300 grams', '6 kilograms 130 grams', '5 kilograms 900 grams'] },
    correct: 0,
    explanation: {
      el: 'Γραμμάρια: 600 + 700 = 1.300 = 1 κιλό και 300 γραμμάρια. Κιλά: 3 + 2 + 1 = 6. Άρα 6 κιλά 300 γραμμάρια.',
      en: 'Grams: 600 + 700 = 1,300 = 1 kilogram and 300 grams. Kilograms: 3 + 2 + 1 = 6. So 6 kilograms 300 grams.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4 μέτρα 65 εκατοστά + 2 μέτρα 50 εκατοστά;', en: 'What is 4 metres 65 centimetres + 2 metres 50 centimetres?' },
    options: { el: ['6 μέτρα 15 εκατοστά', '7 μέτρα 5 εκατοστά', '7 μέτρα 15 εκατοστά', '6 μέτρα 95 εκατοστά'], en: ['6 metres 15 centimetres', '7 metres 5 centimetres', '7 metres 15 centimetres', '6 metres 95 centimetres'] },
    correct: 2,
    explanation: {
      el: 'Εκατοστά: 65 + 50 = 115 = 1 μέτρο και 15 εκατοστά. Μέτρα: 4 + 2 + 1 = 7. Άρα 7 μέτρα 15 εκατοστά.',
      en: 'Centimetres: 65 + 50 = 115 = 1 metre and 15 centimetres. Metres: 4 + 2 + 1 = 7. So 7 metres 15 centimetres.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 5,80 € + 3,45 €;', en: 'What is €5.80 + €3.45?' },
    options: { el: ['9,35 €', '8,25 €', '8,35 €', '9,25 €'], en: ['€9.35', '€8.25', '€8.35', '€9.25'] },
    correct: 3,
    explanation: {
      el: 'Λεπτά: 80 + 45 = 125 = 1 ευρώ και 25 λεπτά. Ευρώ: 5 + 3 + 1 = 9. Άρα 9,25 €.',
      en: 'Cents: 80 + 45 = 125 = 1 euro and 25 cents. Euros: 5 + 3 + 1 = 9. So €9.25.',
    },
  },

  // ── 13–16: subtracting with a borrow ──────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει 5 ώρες 10 λεπτά − 2 ώρες 40 λεπτά;', en: 'What is 5 hours 10 minutes − 2 hours 40 minutes?' },
    options: { el: ['3 ώρες 30 λεπτά', '2 ώρες 30 λεπτά', '3 ώρες 10 λεπτά', '2 ώρες 20 λεπτά'], en: ['3 hours 30 minutes', '2 hours 30 minutes', '3 hours 10 minutes', '2 hours 20 minutes'] },
    correct: 1,
    explanation: {
      el: 'Από τα 10 λεπτά δεν βγαίνουν 40, οπότε δανειζόμαστε 1 ώρα: 5 ώρες 10 λεπτά = 4 ώρες 70 λεπτά. Τώρα 70 − 40 = 30 και 4 − 2 = 2. Άρα 2 ώρες 30 λεπτά.',
      en: 'You cannot take 40 from 10 minutes, so borrow 1 hour: 5 hours 10 minutes = 4 hours 70 minutes. Now 70 − 40 = 30 and 4 − 2 = 2. So 2 hours 30 minutes.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 4 κιλά 200 γραμμάρια − 1 κιλό 500 γραμμάρια;', en: 'What is 4 kilograms 200 grams − 1 kilogram 500 grams?' },
    options: { el: ['3 κιλά 300 γραμμάρια', '3 κιλά 700 γραμμάρια', '2 κιλά 700 γραμμάρια', '2 κιλά 300 γραμμάρια'], en: ['3 kilograms 300 grams', '3 kilograms 700 grams', '2 kilograms 700 grams', '2 kilograms 300 grams'] },
    correct: 2,
    explanation: {
      el: 'Δανειζόμαστε 1 κιλό: 4 κιλά 200 γραμμάρια = 3 κιλά 1.200 γραμμάρια. Μετά 1.200 − 500 = 700 και 3 − 1 = 2. Άρα 2 κιλά 700 γραμμάρια.',
      en: 'Borrow 1 kilogram: 4 kilograms 200 grams = 3 kilograms 1,200 grams. Then 1,200 − 500 = 700 and 3 − 1 = 2. So 2 kilograms 700 grams.',
    },
  },
  {
    q: { el: 'Πόσο κάνει 6 μέτρα 20 εκατοστά − 2 μέτρα 75 εκατοστά;', en: 'What is 6 metres 20 centimetres − 2 metres 75 centimetres?' },
    options: { el: ['4 μέτρα 55 εκατοστά', '4 μέτρα 45 εκατοστά', '3 μέτρα 55 εκατοστά', '3 μέτρα 45 εκατοστά'], en: ['4 metres 55 centimetres', '4 metres 45 centimetres', '3 metres 55 centimetres', '3 metres 45 centimetres'] },
    correct: 3,
    explanation: {
      el: 'Δανειζόμαστε 1 μέτρο: 6 μέτρα 20 εκατοστά = 5 μέτρα 120 εκατοστά. Μετά 120 − 75 = 45 και 5 − 2 = 3. Άρα 3 μέτρα 45 εκατοστά.',
      en: 'Borrow 1 metre: 6 metres 20 centimetres = 5 metres 120 centimetres. Then 120 − 75 = 45 and 5 − 2 = 3. So 3 metres 45 centimetres.',
    },
  },
  {
    q: { el: 'Ο Νίκος έδωσε 10 € για ένα βιβλίο που κόστιζε 6,35 €. Πόσα ρέστα πήρε;', en: 'Nikos paid €10 for a book that cost €6.35. How much change did he get?' },
    options: { el: ['3,65 €', '4,65 €', '3,75 €', '4,35 €'], en: ['€3.65', '€4.65', '€3.75', '€4.35'] },
    correct: 0,
    explanation: {
      el: '10 € = 9 ευρώ και 100 λεπτά. Λεπτά: 100 − 35 = 65. Ευρώ: 9 − 6 = 3. Άρα 3,65 €.',
      en: '€10 = 9 euros and 100 cents. Cents: 100 − 35 = 65. Euros: 9 − 6 = 3. So €3.65.',
    },
  },

  // ── 17–18: word problems ──────────────────────────────────────────────────
  {
    q: { el: 'Ο αγώνας άρχισε στις 10:45 και κράτησε 1 ώρα και 30 λεπτά. Τι ώρα τελείωσε;', en: 'The match started at 10:45 and lasted 1 hour and 30 minutes. What time did it finish?' },
    options: { el: ['12:15', '11:15', '12:05', '11:45'], en: ['12:15', '11:15', '12:05', '11:45'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα η ώρα: 10:45 + 1 ώρα = 11:45. Μετά τα λεπτά: 45 + 30 = 75 = 1 ώρα και 15 λεπτά, άρα 11:45 + 30 λεπτά = 12:15.',
      en: 'First the hour: 10:45 + 1 hour = 11:45. Then the minutes: 45 + 30 = 75 = 1 hour and 15 minutes, so 11:45 + 30 minutes = 12:15.',
    },
  },
  {
    q: { el: 'Η Μαρία ζύγισε δύο σακούλες: η μία είχε 1 κιλό 850 γραμμάρια και η άλλη 2 κιλά 400 γραμμάρια. Πόσο ζυγίζουν μαζί;', en: 'Maria weighed two bags: one was 1 kilogram 850 grams and the other 2 kilograms 400 grams. How much do they weigh together?' },
    options: { el: ['3 κιλά 250 γραμμάρια', '4 κιλά 150 γραμμάρια', '4 κιλά 250 γραμμάρια', '3 κιλά 450 γραμμάρια'], en: ['3 kilograms 250 grams', '4 kilograms 150 grams', '4 kilograms 250 grams', '3 kilograms 450 grams'] },
    correct: 2,
    explanation: {
      el: 'Γραμμάρια: 850 + 400 = 1.250 = 1 κιλό και 250 γραμμάρια. Κιλά: 1 + 2 + 1 = 4. Άρα 4 κιλά 250 γραμμάρια.',
      en: 'Grams: 850 + 400 = 1,250 = 1 kilogram and 250 grams. Kilograms: 1 + 2 + 1 = 4. So 4 kilograms 250 grams.',
    },
  },
];
