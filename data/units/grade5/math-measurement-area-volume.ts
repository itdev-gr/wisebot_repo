/**
 * Ε' Δημοτικού · Μαθηματικά · Μετρήσεις, εμβαδόν, όγκος
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–6   unit conversions: m/cm, km/m, kg/g, l/ml, decimals, a shopping problem
 *   7–9   perimeter of rectangle and square, a garden-fence problem
 *   10–13 area of rectangle, square and right triangle, a cardboard problem
 *   14–15 volume of a cube (side × side × side)
 *   16–18 time units: hours/minutes, minutes/seconds, a school-day problem
 * Distractors are the real slips: wrong number of zeros, adding the sides once
 * instead of twice, perimeter instead of area, forgetting the ÷ 2 of the triangle.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_MEASUREMENT_AREA_VOLUME: QuizQuestion[] = [
  // ── 1–6: unit conversions ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσα εκατοστά (cm) έχει 1 μέτρο (m);', en: 'How many centimetres (cm) are in 1 metre (m)?' },
    options: { el: ['10', '100', '1.000', '50'], en: ['10', '100', '1,000', '50'] },
    correct: 1,
    explanation: {
      el: '1 m = 100 cm. «Εκατοστό» θα πει «ένα από τα εκατό κομμάτια» του μέτρου.',
      en: '1 m = 100 cm. “Centi” means one of a hundred pieces of the metre.',
    },
  },
  {
    q: { el: 'Πόσα μέτρα (m) είναι 3 χιλιόμετρα (km);', en: 'How many metres (m) are 3 kilometres (km)?' },
    options: { el: ['300 m', '30 m', '3.000 m', '30.000 m'], en: ['300 m', '30 m', '3,000 m', '30,000 m'] },
    correct: 2,
    explanation: {
      el: '1 km = 1.000 m, άρα 3 km = 3 × 1.000 = 3.000 m. «Χιλιό-» θα πει χίλια.',
      en: '1 km = 1,000 m, so 3 km = 3 × 1,000 = 3,000 m. “Kilo” means a thousand.',
    },
  },
  {
    q: { el: 'Η Μαρία αγόρασε 2 κιλά και 500 γραμμάρια μήλα. Πόσα γραμμάρια είναι συνολικά;', en: 'Maria bought 2 kilograms and 500 grams of apples. How many grams is that in total?' },
    options: { el: ['2.050 g', '2.500 g', '250 g', '700 g'], en: ['2,050 g', '2,500 g', '250 g', '700 g'] },
    correct: 1,
    explanation: {
      el: '1 kg = 1.000 g, άρα 2 kg = 2.000 g. Με τα 500 g ακόμα: 2.000 + 500 = 2.500 g.',
      en: '1 kg = 1,000 g, so 2 kg = 2,000 g. Add the 500 g: 2,000 + 500 = 2,500 g.',
    },
  },
  {
    q: { el: 'Πόσα χιλιοστόλιτρα (ml) είναι 1,5 λίτρο (l);', en: 'How many millilitres (ml) are 1.5 litres (l)?' },
    options: { el: ['150 ml', '15 ml', '1.050 ml', '1.500 ml'], en: ['150 ml', '15 ml', '1,050 ml', '1,500 ml'] },
    correct: 3,
    explanation: {
      el: '1 l = 1.000 ml. Το μισό λίτρο είναι 500 ml, άρα 1,5 l = 1.000 + 500 = 1.500 ml.',
      en: '1 l = 1,000 ml. Half a litre is 500 ml, so 1.5 l = 1,000 + 500 = 1,500 ml.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει ύψος 250 cm μαζί με το καπέλο του… αστειεύεται! Πόσα μέτρα είναι τα 250 cm;', en: 'Nikos says he is 250 cm tall with his hat on… he is joking! How many metres are 250 cm?' },
    options: { el: ['2,5 m', '25 m', '0,25 m', '250 m'], en: ['2.5 m', '25 m', '0.25 m', '250 m'] },
    correct: 0,
    explanation: {
      el: '100 cm = 1 m. Τα 250 cm είναι 2 μέτρα (200 cm) και 50 cm ακόμα, δηλαδή 2,5 m.',
      en: '100 cm = 1 m. 250 cm is 2 metres (200 cm) plus 50 cm more, which is 2.5 m.',
    },
  },
  {
    q: { el: 'Η Ελένη αγόρασε 3 μπουκαλάκια νερό των 500 ml. Πόσα λίτρα νερό αγόρασε;', en: 'Eleni bought 3 small bottles of water, 500 ml each. How many litres of water did she buy?' },
    options: { el: ['0,5 l', '15 l', '1,5 l', '1.500 l'], en: ['0.5 l', '15 l', '1.5 l', '1,500 l'] },
    correct: 2,
    explanation: {
      el: '3 × 500 ml = 1.500 ml. Επειδή 1.000 ml = 1 l, τα 1.500 ml είναι 1,5 l.',
      en: '3 × 500 ml = 1,500 ml. Since 1,000 ml = 1 l, 1,500 ml is 1.5 l.',
    },
  },

  // ── 7–9: perimeter ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα ορθογώνιο έχει μήκος 8 cm και πλάτος 5 cm. Ποια είναι η περίμετρός του;', en: 'A rectangle is 8 cm long and 5 cm wide. What is its perimeter?' },
    options: { el: ['40 cm', '26 cm', '13 cm', '18 cm'], en: ['40 cm', '26 cm', '13 cm', '18 cm'] },
    correct: 1,
    explanation: {
      el: 'Η περίμετρος είναι ο δρόμος γύρω-γύρω: 8 + 5 + 8 + 5 = 26 cm. Κάθε πλευρά μετράει δύο φορές!',
      en: 'The perimeter is the path all the way around: 8 + 5 + 8 + 5 = 26 cm. Each side counts twice!',
    },
  },
  {
    q: { el: 'Ένα τετράγωνο έχει πλευρά 7 cm. Πόση είναι η περίμετρός του;', en: 'A square has sides of 7 cm. What is its perimeter?' },
    options: { el: ['14 cm', '28 cm', '49 cm', '21 cm'], en: ['14 cm', '28 cm', '49 cm', '21 cm'] },
    correct: 1,
    explanation: {
      el: 'Το τετράγωνο έχει 4 ίσες πλευρές, άρα περίμετρος = 4 × 7 = 28 cm. (Το 49 είναι το εμβαδόν, όχι η περίμετρος.)',
      en: 'A square has 4 equal sides, so the perimeter = 4 × 7 = 28 cm. (49 is the area, not the perimeter.)',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να βάλει φράχτη γύρω από έναν κήπο 12 m × 9 m. Πόσα μέτρα φράχτη χρειάζεται;', en: 'Giorgos wants to put a fence around a garden that is 12 m × 9 m. How many metres of fence does he need?' },
    options: { el: ['21 m', '108 m', '42 m', '33 m'], en: ['21 m', '108 m', '42 m', '33 m'] },
    correct: 2,
    explanation: {
      el: 'Ο φράχτης πάει γύρω-γύρω, άρα θέλουμε την περίμετρο: 2 × (12 + 9) = 2 × 21 = 42 m.',
      en: 'The fence goes all the way around, so we need the perimeter: 2 × (12 + 9) = 2 × 21 = 42 m.',
    },
  },

  // ── 10–13: area ────────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα ορθογώνιο έχει μήκος 6 cm και πλάτος 4 cm. Πόσο είναι το εμβαδόν του;', en: 'A rectangle is 6 cm long and 4 cm wide. What is its area?' },
    options: { el: ['10 cm²', '20 cm²', '24 cm²', '48 cm²'], en: ['10 cm²', '20 cm²', '24 cm²', '48 cm²'] },
    correct: 2,
    explanation: {
      el: 'Εμβαδόν ορθογωνίου = μήκος × πλάτος = 6 × 4 = 24 cm². Μετράμε πόσα τετραγωνάκια του 1 cm χωράνε μέσα.',
      en: 'Area of a rectangle = length × width = 6 × 4 = 24 cm². We count how many 1 cm squares fit inside.',
    },
  },
  {
    q: { el: 'Πόσο είναι το εμβαδόν ενός τετραγώνου με πλευρά 9 cm;', en: 'What is the area of a square with sides of 9 cm?' },
    options: { el: ['81 cm²', '36 cm²', '18 cm²', '72 cm²'], en: ['81 cm²', '36 cm²', '18 cm²', '72 cm²'] },
    correct: 0,
    explanation: {
      el: 'Εμβαδόν τετραγώνου = πλευρά × πλευρά = 9 × 9 = 81 cm². (Το 36 είναι η περίμετρος: 4 × 9.)',
      en: 'Area of a square = side × side = 9 × 9 = 81 cm². (36 is the perimeter: 4 × 9.)',
    },
  },
  {
    q: { el: 'Ένα ορθογώνιο τρίγωνο έχει κάθετες πλευρές 6 cm και 8 cm. Πόσο είναι το εμβαδόν του;', en: 'A right triangle has perpendicular sides of 6 cm and 8 cm. What is its area?' },
    options: { el: ['48 cm²', '24 cm²', '14 cm²', '28 cm²'], en: ['48 cm²', '24 cm²', '14 cm²', '28 cm²'] },
    correct: 1,
    explanation: {
      el: 'Το ορθογώνιο τρίγωνο είναι το μισό ενός ορθογωνίου 6 × 8 = 48. Άρα εμβαδόν = 48 ÷ 2 = 24 cm².',
      en: 'A right triangle is half of a 6 × 8 = 48 rectangle. So the area = 48 ÷ 2 = 24 cm².',
    },
  },
  {
    q: { el: 'Η Μαρία κόβει ένα χαρτόνι 10 cm × 7 cm για μια κάρτα. Πόσο εμβαδόν έχει η κάρτα;', en: 'Maria cuts a 10 cm × 7 cm piece of cardboard for a card. What is the area of the card?' },
    options: { el: ['34 cm²', '17 cm²', '35 cm²', '70 cm²'], en: ['34 cm²', '17 cm²', '35 cm²', '70 cm²'] },
    correct: 3,
    explanation: {
      el: 'Εμβαδόν = 10 × 7 = 70 cm². Το 34 είναι η περίμετρος (10 + 7 + 10 + 7) — αυτή μετράει τον γύρο, όχι την επιφάνεια.',
      en: 'Area = 10 × 7 = 70 cm². 34 is the perimeter (10 + 7 + 10 + 7) — that measures the edge, not the surface.',
    },
  },

  // ── 14–15: volume of a cube ────────────────────────────────────────────────
  {
    q: { el: 'Ένας κύβος έχει ακμή 3 cm. Πόσος είναι ο όγκος του;', en: 'A cube has edges of 3 cm. What is its volume?' },
    options: { el: ['9 cm³', '12 cm³', '27 cm³', '18 cm³'], en: ['9 cm³', '12 cm³', '27 cm³', '18 cm³'] },
    correct: 2,
    explanation: {
      el: 'Όγκος κύβου = ακμή × ακμή × ακμή = 3 × 3 × 3 = 27 cm³. Τρεις φορές, γιατί ο κύβος έχει μήκος, πλάτος και ύψος.',
      en: 'Volume of a cube = edge × edge × edge = 3 × 3 × 3 = 27 cm³. Three times, because a cube has length, width and height.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει ένα κυβικό κουτί με ακμή 5 cm. Πόσα κυβάκια του 1 cm³ χωράνε μέσα;', en: 'Nikos has a cube-shaped box with edges of 5 cm. How many 1 cm³ little cubes fit inside?' },
    options: { el: ['125', '25', '15', '75'], en: ['125', '25', '15', '75'] },
    correct: 0,
    explanation: {
      el: 'Όγκος = 5 × 5 × 5 = 125 cm³, άρα χωράνε 125 κυβάκια. (Το 25 είναι μόνο ο πάτος: 5 × 5.)',
      en: 'Volume = 5 × 5 × 5 = 125 cm³, so 125 little cubes fit. (25 is only the bottom layer: 5 × 5.)',
    },
  },

  // ── 16–18: time units ──────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα λεπτά έχουν 2 ώρες;', en: 'How many minutes are in 2 hours?' },
    options: { el: ['200', '120', '60', '100'], en: ['200', '120', '60', '100'] },
    correct: 1,
    explanation: {
      el: '1 ώρα = 60 λεπτά, άρα 2 ώρες = 2 × 60 = 120 λεπτά. Προσοχή: ο χρόνος μετράει με το 60, όχι με το 100!',
      en: '1 hour = 60 minutes, so 2 hours = 2 × 60 = 120 minutes. Careful: time counts in 60s, not 100s!',
    },
  },
  {
    q: { el: 'Πόσα δευτερόλεπτα είναι 3 λεπτά και 20 δευτερόλεπτα;', en: 'How many seconds are 3 minutes and 20 seconds?' },
    options: { el: ['320', '180', '200', '230'], en: ['320', '180', '200', '230'] },
    correct: 2,
    explanation: {
      el: '3 λεπτά = 3 × 60 = 180 δευτερόλεπτα. Με τα 20 ακόμα: 180 + 20 = 200 δευτερόλεπτα.',
      en: '3 minutes = 3 × 60 = 180 seconds. Add the 20 more: 180 + 20 = 200 seconds.',
    },
  },
  {
    q: { el: 'Το σχολείο της Ελένης αρχίζει στις 8:15 και τελειώνει στις 13:30. Πόση ώρα μένει στο σχολείο;', en: 'Eleni\'s school starts at 8:15 and ends at 13:30. How long does she stay at school?' },
    options: { el: ['5 ώρες και 45 λεπτά', '4 ώρες και 15 λεπτά', '5 ώρες και 25 λεπτά', '5 ώρες και 15 λεπτά'], en: ['5 hours and 45 minutes', '4 hours and 15 minutes', '5 hours and 25 minutes', '5 hours and 15 minutes'] },
    correct: 3,
    explanation: {
      el: 'Από τις 8:15 ως τις 13:15 είναι 5 ώρες. Από τις 13:15 ως τις 13:30 είναι 15 λεπτά ακόμα. Σύνολο: 5 ώρες και 15 λεπτά.',
      en: 'From 8:15 to 13:15 is 5 hours. From 13:15 to 13:30 is 15 more minutes. Total: 5 hours and 15 minutes.',
    },
  },
];
