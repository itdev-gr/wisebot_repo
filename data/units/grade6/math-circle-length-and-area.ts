/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Κύκλος: μήκος & εμβαδόν
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12. Everywhere π = 3,14 and the radii are chosen
 * so the arithmetic comes out clean.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–3   radius and diameter (d = 2 × r), what the number π is
 *   4–8   circumference: 2 × π × r (or π × d), and going backwards from the length
 *   9–12  area: π × r², including a circle given by its diameter
 *   13–14 the half circle: half the area, half the arc
 *   15–18 real problems: a bicycle wheel (one turn, ten turns), a round table, a round garden fence
 *
 * Distractors are the mistakes children actually make: using r where d is needed
 * (and vice versa), forgetting the "2" in 2πr, mixing up the length formula with the
 * area formula, and unit slips (cm → m).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_CIRCLE_LENGTH_AND_AREA: QuizQuestion[] = [
  // ── 1–3: radius, diameter, π ────────────────────────────────────────────────
  {
    q: { el: 'Η ακτίνα ενός κύκλου είναι 4 cm. Πόση είναι η διάμετρός του;', en: 'The radius of a circle is 4 cm. What is its diameter?' },
    options: { el: ['2 cm', '12,56 cm', '16 cm', '8 cm'], en: ['2 cm', '12.56 cm', '16 cm', '8 cm'] },
    correct: 3,
    explanation: {
      el: 'Η διάμετρος περνάει από το κέντρο και είναι δύο ακτίνες: d = 2 × r = 2 × 4 = 8 cm.',
      en: 'The diameter passes through the centre and equals two radii: d = 2 × r = 2 × 4 = 8 cm.',
    },
  },
  {
    q: { el: 'Η διάμετρος ενός κύκλου είναι 14 cm. Πόση είναι η ακτίνα του;', en: 'The diameter of a circle is 14 cm. What is its radius?' },
    options: { el: ['7 cm', '28 cm', '14 cm', '3,5 cm'], en: ['7 cm', '28 cm', '14 cm', '3.5 cm'] },
    correct: 0,
    explanation: {
      el: 'Η ακτίνα είναι η μισή διάμετρος: r = 14 ÷ 2 = 7 cm.',
      en: 'The radius is half the diameter: r = 14 ÷ 2 = 7 cm.',
    },
  },
  {
    q: { el: 'Ποια είναι η προσεγγιστική τιμή του αριθμού π (πι);', en: 'What is the approximate value of the number π (pi)?' },
    options: { el: ['3,14', '2,14', '31,4', '3,41'], en: ['3.14', '2.14', '31.4', '3.41'] },
    correct: 0,
    explanation: {
      el: 'Το π ≈ 3,14 είναι ο λόγος του μήκους του κύκλου προς τη διάμετρό του — σε κάθε κύκλο, μικρό ή μεγάλο, το μήκος είναι περίπου 3,14 φορές η διάμετρος.',
      en: 'π ≈ 3.14 is the ratio of the circumference to the diameter — in every circle, small or large, the circumference is about 3.14 times the diameter.',
    },
  },

  // ── 4–8: circumference ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιος τύπος δίνει το μήκος του κύκλου (την περιφέρεια);', en: 'Which formula gives the length of a circle (the circumference)?' },
    options: { el: ['π × r', '2 × π × r', 'π × r²', 'r × r'], en: ['π × r', '2 × π × r', 'π × r²', 'r × r'] },
    correct: 1,
    explanation: {
      el: 'Μήκος κύκλου = 2 × π × r, δηλαδή π × διάμετρο. Το π × r² είναι το εμβαδόν — μην τα μπερδεύεις!',
      en: 'Circumference = 2 × π × r, that is π × diameter. π × r² is the area — do not mix them up!',
    },
  },
  {
    q: { el: 'Πόσο είναι το μήκος ενός κύκλου με ακτίνα 5 cm; (π = 3,14)', en: 'What is the circumference of a circle with radius 5 cm? (π = 3.14)' },
    options: { el: ['15,7 cm', '78,5 cm', '31,4 cm', '62,8 cm'], en: ['15.7 cm', '78.5 cm', '31.4 cm', '62.8 cm'] },
    correct: 2,
    explanation: {
      el: '2 × 3,14 × 5 = 31,4 cm. Το 15,7 ξεχνάει το «2», το 78,5 είναι το εμβαδόν (3,14 × 25).',
      en: '2 × 3.14 × 5 = 31.4 cm. 15.7 forgets the “2”, and 78.5 is the area (3.14 × 25).',
    },
  },
  {
    q: { el: 'Πόσο είναι το μήκος ενός κύκλου με διάμετρο 20 cm; (π = 3,14)', en: 'What is the circumference of a circle with diameter 20 cm? (π = 3.14)' },
    options: { el: ['125,6 cm', '31,4 cm', '314 cm', '62,8 cm'], en: ['125.6 cm', '31.4 cm', '314 cm', '62.8 cm'] },
    correct: 3,
    explanation: {
      el: 'Όταν ξέρουμε τη διάμετρο, μήκος = π × d = 3,14 × 20 = 62,8 cm. (Το 125,6 θα ήταν αν παίρναμε το 20 για ακτίνα.)',
      en: 'When we know the diameter, circumference = π × d = 3.14 × 20 = 62.8 cm. (125.6 would be if we treated 20 as the radius.)',
    },
  },
  {
    q: { el: 'Πόσο είναι το μήκος ενός κύκλου με ακτίνα 2 m; (π = 3,14)', en: 'What is the circumference of a circle with radius 2 m? (π = 3.14)' },
    options: { el: ['6,28 m', '25,12 m', '4 m', '12,56 m'], en: ['6.28 m', '25.12 m', '4 m', '12.56 m'] },
    correct: 3,
    explanation: {
      el: '2 × 3,14 × 2 = 12,56 m. Πρώτα 2 × 2 = 4 (η διάμετρος), μετά 4 × 3,14 = 12,56.',
      en: '2 × 3.14 × 2 = 12.56 m. First 2 × 2 = 4 (the diameter), then 4 × 3.14 = 12.56.',
    },
  },
  {
    q: { el: 'Το μήκος ενός κύκλου είναι 31,4 cm. Πόση είναι η ακτίνα του; (π = 3,14)', en: 'The circumference of a circle is 31.4 cm. What is its radius? (π = 3.14)' },
    options: { el: ['10 cm', '5 cm', '3,14 cm', '15,7 cm'], en: ['10 cm', '5 cm', '3.14 cm', '15.7 cm'] },
    correct: 1,
    explanation: {
      el: 'Πάμε ανάποδα: διάμετρος = 31,4 ÷ 3,14 = 10 cm, και ακτίνα = 10 ÷ 2 = 5 cm. Έλεγχος: 2 × 3,14 × 5 = 31,4.',
      en: 'Work backwards: diameter = 31.4 ÷ 3.14 = 10 cm, and radius = 10 ÷ 2 = 5 cm. Check: 2 × 3.14 × 5 = 31.4.',
    },
  },

  // ── 9–12: area ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος τύπος δίνει το εμβαδόν του κύκλου;', en: 'Which formula gives the area of a circle?' },
    options: { el: ['2 × π × r', 'π × r', 'π × r²', 'π × d'], en: ['2 × π × r', 'π × r', 'π × r²', 'π × d'] },
    correct: 2,
    explanation: {
      el: 'Εμβαδόν κύκλου = π × r² = π × r × r. Το εμβαδόν μετριέται σε τετραγωνικές μονάδες, γι\' αυτό η ακτίνα «τετραγωνίζεται».',
      en: 'Area of a circle = π × r² = π × r × r. Area is measured in square units, which is why the radius is “squared”.',
    },
  },
  {
    q: { el: 'Πόσο είναι το εμβαδόν ενός κύκλου με ακτίνα 3 cm; (π = 3,14)', en: 'What is the area of a circle with radius 3 cm? (π = 3.14)' },
    options: { el: ['28,26 cm²', '18,84 cm²', '9,42 cm²', '56,52 cm²'], en: ['28.26 cm²', '18.84 cm²', '9.42 cm²', '56.52 cm²'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα η δύναμη: 3² = 9. Μετά 3,14 × 9 = 28,26 cm². (Το 18,84 είναι το μήκος του κύκλου, 2 × 3,14 × 3.)',
      en: 'The power first: 3² = 9. Then 3.14 × 9 = 28.26 cm². (18.84 is the circumference, 2 × 3.14 × 3.)',
    },
  },
  {
    q: { el: 'Πόσο είναι το εμβαδόν ενός κύκλου με ακτίνα 10 cm; (π = 3,14)', en: 'What is the area of a circle with radius 10 cm? (π = 3.14)' },
    options: { el: ['62,8 cm²', '314 cm²', '31,4 cm²', '3.140 cm²'], en: ['62.8 cm²', '314 cm²', '31.4 cm²', '3,140 cm²'] },
    correct: 1,
    explanation: {
      el: '10² = 100 και 3,14 × 100 = 314 cm². Ωραίο παράδειγμα για να θυμάσαι: κύκλος με ακτίνα 10 → εμβαδόν 314.',
      en: '10² = 100 and 3.14 × 100 = 314 cm². A nice one to remember: a circle with radius 10 → area 314.',
    },
  },
  {
    q: { el: 'Πόσο είναι το εμβαδόν ενός κύκλου με διάμετρο 8 cm; (π = 3,14)', en: 'What is the area of a circle with diameter 8 cm? (π = 3.14)' },
    options: { el: ['200,96 cm²', '25,12 cm²', '50,24 cm²', '12,56 cm²'], en: ['200.96 cm²', '25.12 cm²', '50.24 cm²', '12.56 cm²'] },
    correct: 2,
    explanation: {
      el: 'Ο τύπος θέλει ακτίνα, όχι διάμετρο: r = 8 ÷ 2 = 4 cm. Τότε 3,14 × 4² = 3,14 × 16 = 50,24 cm². (Το 200,96 βγαίνει αν βάλεις το 8 στη θέση της ακτίνας.)',
      en: 'The formula needs the radius, not the diameter: r = 8 ÷ 2 = 4 cm. Then 3.14 × 4² = 3.14 × 16 = 50.24 cm². (200.96 comes from putting 8 in place of the radius.)',
    },
  },

  // ── 13–14: half circle ───────────────────────────────────────────────────
  {
    q: { el: 'Ένα ημικύκλιο έχει ακτίνα 10 cm. Πόσο είναι το εμβαδόν του; (π = 3,14)', en: 'A half circle has radius 10 cm. What is its area? (π = 3.14)' },
    options: { el: ['314 cm²', '31,4 cm²', '78,5 cm²', '157 cm²'], en: ['314 cm²', '31.4 cm²', '78.5 cm²', '157 cm²'] },
    correct: 3,
    explanation: {
      el: 'Ολόκληρος ο κύκλος έχει εμβαδόν 3,14 × 10² = 314 cm². Το ημικύκλιο είναι το μισό: 314 ÷ 2 = 157 cm².',
      en: 'The whole circle has area 3.14 × 10² = 314 cm². The half circle is half of that: 314 ÷ 2 = 157 cm².',
    },
  },
  {
    q: { el: 'Ένα ημικύκλιο έχει ακτίνα 4 cm. Πόσο είναι το μήκος του καμπύλου μέρους του (του τόξου); (π = 3,14)', en: 'A half circle has radius 4 cm. How long is its curved part (the arc)? (π = 3.14)' },
    options: { el: ['12,56 cm', '25,12 cm', '50,24 cm', '6,28 cm'], en: ['12.56 cm', '25.12 cm', '50.24 cm', '6.28 cm'] },
    correct: 0,
    explanation: {
      el: 'Ολόκληρος ο κύκλος έχει μήκος 2 × 3,14 × 4 = 25,12 cm. Το τόξο του ημικυκλίου είναι το μισό: 25,12 ÷ 2 = 12,56 cm.',
      en: 'The whole circle has circumference 2 × 3.14 × 4 = 25.12 cm. The arc of the half circle is half of that: 25.12 ÷ 2 = 12.56 cm.',
    },
  },

  // ── 15–18: real problems ─────────────────────────────────────────────────
  {
    q: { el: 'Ένας τροχός ποδηλάτου έχει ακτίνα 25 cm. Πόση απόσταση διανύει το ποδήλατο σε μία πλήρη στροφή του τροχού; (π = 3,14)', en: 'A bicycle wheel has radius 25 cm. How far does the bicycle travel in one full turn of the wheel? (π = 3.14)' },
    options: { el: ['157 cm', '78,5 cm', '314 cm', '50 cm'], en: ['157 cm', '78.5 cm', '314 cm', '50 cm'] },
    correct: 0,
    explanation: {
      el: 'Σε μία στροφή ο τροχός προχωράει όσο το μήκος του: 2 × 3,14 × 25 = 157 cm. Το 50 cm είναι μόνο η διάμετρος.',
      en: 'In one turn the wheel moves forward by its circumference: 2 × 3.14 × 25 = 157 cm. 50 cm is only the diameter.',
    },
  },
  {
    q: { el: 'Ο ίδιος τροχός (μήκος 157 cm) κάνει 10 πλήρεις στροφές. Πόσα μέτρα προχώρησε το ποδήλατο;', en: 'The same wheel (circumference 157 cm) makes 10 full turns. How many metres did the bicycle travel?' },
    options: { el: ['157 m', '1,57 m', '1.570 m', '15,7 m'], en: ['157 m', '1.57 m', '1,570 m', '15.7 m'] },
    correct: 3,
    explanation: {
      el: '10 στροφές × 157 cm = 1.570 cm. Και 1.570 cm = 15,7 m, γιατί 1 m = 100 cm.',
      en: '10 turns × 157 cm = 1,570 cm. And 1,570 cm = 15.7 m, because 1 m = 100 cm.',
    },
  },
  {
    q: { el: 'Ένα στρογγυλό τραπέζι έχει διάμετρο 2 m. Πόσο είναι το εμβαδόν της επιφάνειάς του; (π = 3,14)', en: 'A round table has diameter 2 m. What is the area of its top? (π = 3.14)' },
    options: { el: ['12,56 m²', '3,14 m²', '6,28 m²', '4 m²'], en: ['12.56 m²', '3.14 m²', '6.28 m²', '4 m²'] },
    correct: 1,
    explanation: {
      el: 'Διάμετρος 2 m → ακτίνα 1 m. Εμβαδόν = 3,14 × 1² = 3,14 m². Το 6,28 θα ήταν το μήκος του τραπεζιού γύρω γύρω.',
      en: 'Diameter 2 m → radius 1 m. Area = 3.14 × 1² = 3.14 m². 6.28 would be the length around the table.',
    },
  },
  {
    q: { el: 'Ένας κυκλικός κήπος έχει ακτίνα 20 m. Πόσα μέτρα φράχτη χρειάζονται για να τον περιφράξουμε; (π = 3,14)', en: 'A circular garden has radius 20 m. How many metres of fence are needed to go all the way around it? (π = 3.14)' },
    options: { el: ['62,8 m', '1.256 m', '125,6 m', '400 m'], en: ['62.8 m', '1,256 m', '125.6 m', '400 m'] },
    correct: 2,
    explanation: {
      el: 'Ο φράχτης πάει γύρω γύρω, άρα ζητάμε μήκος κύκλου: 2 × 3,14 × 20 = 125,6 m. (Το 1.256 θα ήταν το εμβαδόν, σε m².)',
      en: 'The fence goes all the way around, so we need the circumference: 2 × 3.14 × 20 = 125.6 m. (1,256 would be the area, in m².)',
    },
  },
];
