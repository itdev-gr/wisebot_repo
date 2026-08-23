/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Γεωμετρία, εμβαδά, όγκοι
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12. Order, as a ΣΤ' class meets it:
 *   1–2   polygons: naming by number of sides, what is and is not a polygon
 *   3–4   angles: the right angle, the 180° sum of a triangle
 *   5–6   scale: reading a map / a room plan (1:1.000, 1:50)
 *   7–8   symmetry: axes of a square, symmetric letters
 *   9–13  area: parallelogram, triangle, trapezoid, circle (π ≈ 3,14), a garden problem in €
 *   14–15 nets: cube (6 squares), triangular prism (2 triangles + 3 rectangles)
 *   16–18 volume: cube, rectangular prism (aquarium in cm³ / litres), cylinder
 * Distractors are real child mistakes: forgetting the ÷2, confusing perimeter with area,
 * multiplying instead of squaring, the wrong power of ten in scale.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_GEOMETRY_AREA_VOLUME: QuizQuestion[] = [
  // ── 1–2: polygons ──────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσες πλευρές έχει ένα εξάγωνο;', en: 'How many sides does a hexagon have?' },
    options: { el: ['5', '6', '8', '7'], en: ['5', '6', '8', '7'] },
    correct: 1,
    explanation: {
      el: 'Το «εξά-» σημαίνει έξι. Το εξάγωνο έχει 6 πλευρές και 6 γωνίες, όπως το κελί της μέλισσας.',
      en: '“Hexa-” means six. A hexagon has 6 sides and 6 angles, like a honeycomb cell.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω σχήματα ΔΕΝ είναι πολύγωνο;', en: 'Which of these shapes is NOT a polygon?' },
    options: { el: ['Το τρίγωνο', 'Το τετράγωνο', 'Ο κύκλος', 'Το πεντάγωνο'], en: ['The triangle', 'The square', 'The circle', 'The pentagon'] },
    correct: 2,
    explanation: {
      el: 'Πολύγωνο είναι ένα κλειστό σχήμα που φτιάχνεται μόνο από ευθύγραμμα τμήματα. Ο κύκλος είναι καμπύλη, άρα δεν είναι πολύγωνο.',
      en: 'A polygon is a closed shape made only of straight segments. A circle is a curve, so it is not a polygon.',
    },
  },

  // ── 3–4: angles ────────────────────────────────────────────────────────────
  {
    q: { el: 'Μια γωνία 90° λέγεται…', en: 'An angle of 90° is called…' },
    options: { el: ['οξεία', 'αμβλεία', 'ορθή', 'ευθεία'], en: ['acute', 'obtuse', 'right', 'straight'] },
    correct: 2,
    explanation: {
      el: 'Η γωνία των 90° είναι η ορθή γωνία, όπως η γωνία του βιβλίου σου. Κάτω από 90° είναι οξεία, πάνω από 90° είναι αμβλεία.',
      en: 'A 90° angle is a right angle, like the corner of your book. Under 90° it is acute, over 90° it is obtuse.',
    },
  },
  {
    q: { el: 'Σε ένα τρίγωνο οι δύο γωνίες είναι 60° και 70°. Πόσο είναι η τρίτη γωνία;', en: 'Two angles of a triangle are 60° and 70°. How big is the third angle?' },
    options: { el: ['40°', '50°', '60°', '230°'], en: ['40°', '50°', '60°', '230°'] },
    correct: 1,
    explanation: {
      el: 'Οι γωνίες κάθε τριγώνου κάνουν μαζί 180°. Άρα 180° − 60° − 70° = 50°.',
      en: 'The angles of any triangle add up to 180°. So 180° − 60° − 70° = 50°.',
    },
  },

  // ── 5–6: scale ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Σε έναν χάρτη με κλίμακα 1:1.000, μια απόσταση είναι 3 cm. Πόση είναι στην πραγματικότητα;', en: 'On a map with scale 1:1,000, a distance is 3 cm. How long is it in real life?' },
    options: { el: ['30 m', '3 m', '300 m', '3 km'], en: ['30 m', '3 m', '300 m', '3 km'] },
    correct: 0,
    explanation: {
      el: 'Κλίμακα 1:1.000 σημαίνει ότι 1 cm στον χάρτη είναι 1.000 cm στην πραγματικότητα. 3 × 1.000 = 3.000 cm = 30 m.',
      en: 'Scale 1:1,000 means 1 cm on the map is 1,000 cm in real life. 3 × 1,000 = 3,000 cm = 30 m.',
    },
  },
  {
    q: { el: 'Η Ελένη σχεδίασε το δωμάτιό της σε κλίμακα 1:50. Στο σχέδιο το δωμάτιο έχει μήκος 8 cm. Πόσο μήκος έχει το αληθινό δωμάτιο;', en: 'Eleni drew her room at a scale of 1:50. On the drawing the room is 8 cm long. How long is the real room?' },
    options: { el: ['40 m', '58 cm', '400 m', '4 m'], en: ['40 m', '58 cm', '400 m', '4 m'] },
    correct: 3,
    explanation: {
      el: 'Πολλαπλασιάζουμε με το 50: 8 × 50 = 400 cm. Και 400 cm = 4 m. Προσοχή στη μετατροπή cm → m!',
      en: 'We multiply by 50: 8 × 50 = 400 cm. And 400 cm = 4 m. Watch the cm → m conversion!',
    },
  },

  // ── 7–8: symmetry ──────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσους άξονες συμμετρίας έχει ένα τετράγωνο;', en: 'How many lines of symmetry does a square have?' },
    options: { el: ['2', '1', '4', '8'], en: ['2', '1', '4', '8'] },
    correct: 2,
    explanation: {
      el: 'Το τετράγωνο διπλώνει τέλεια με 4 τρόπους: κατακόρυφα, οριζόντια και στις δύο διαγώνιες. Άρα έχει 4 άξονες συμμετρίας.',
      en: 'A square folds perfectly in 4 ways: vertically, horizontally and along both diagonals. So it has 4 lines of symmetry.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω γράμματα έχει κατακόρυφο άξονα συμμετρίας;', en: 'Which of these letters has a vertical line of symmetry?' },
    options: { el: ['Α', 'Γ', 'Ρ', 'Ζ'], en: ['A', 'L', 'R', 'Z'] },
    correct: 0,
    explanation: {
      el: 'Αν διπλώσεις το Α στη μέση από πάνω προς τα κάτω, οι δύο πλευρές του ταιριάζουν ακριβώς. Το Γ, το Ρ και το Ζ δεν διπλώνουν έτσι.',
      en: 'If you fold the A down the middle from top to bottom, the two halves match exactly. L, R and Z do not fold like that.',
    },
  },

  // ── 9–13: area ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα παραλληλόγραμμο έχει βάση 8 cm και ύψος 5 cm. Πόσο είναι το εμβαδόν του;', en: 'A parallelogram has a base of 8 cm and a height of 5 cm. What is its area?' },
    options: { el: ['13 cm²', '40 cm²', '26 cm²', '80 cm²'], en: ['13 cm²', '40 cm²', '26 cm²', '80 cm²'] },
    correct: 1,
    explanation: {
      el: 'Εμβαδόν παραλληλογράμμου = βάση × ύψος = 8 × 5 = 40 cm². (Το 26 θα ήταν η περίμετρος, αν οι πλευρές ήταν 8 και 5.)',
      en: 'Area of a parallelogram = base × height = 8 × 5 = 40 cm². (26 would be the perimeter if the sides were 8 and 5.)',
    },
  },
  {
    q: { el: 'Ένα τρίγωνο έχει βάση 10 cm και ύψος 6 cm. Πόσο είναι το εμβαδόν του;', en: 'A triangle has a base of 10 cm and a height of 6 cm. What is its area?' },
    options: { el: ['60 cm²', '16 cm²', '30 cm²', '15 cm²'], en: ['60 cm²', '16 cm²', '30 cm²', '15 cm²'] },
    correct: 2,
    explanation: {
      el: 'Εμβαδόν τριγώνου = (βάση × ύψος) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm². Μην ξεχνάς το ÷ 2!',
      en: 'Area of a triangle = (base × height) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm². Do not forget the ÷ 2!',
    },
  },
  {
    q: { el: 'Ένα τραπέζιο έχει βάσεις 7 cm και 5 cm και ύψος 4 cm. Πόσο είναι το εμβαδόν του;', en: 'A trapezoid has bases of 7 cm and 5 cm and a height of 4 cm. What is its area?' },
    options: { el: ['24 cm²', '48 cm²', '16 cm²', '140 cm²'], en: ['24 cm²', '48 cm²', '16 cm²', '140 cm²'] },
    correct: 0,
    explanation: {
      el: 'Εμβαδόν τραπεζίου = (μεγάλη βάση + μικρή βάση) × ύψος ÷ 2 = (7 + 5) × 4 ÷ 2 = 12 × 4 ÷ 2 = 24 cm².',
      en: 'Area of a trapezoid = (long base + short base) × height ÷ 2 = (7 + 5) × 4 ÷ 2 = 12 × 4 ÷ 2 = 24 cm².',
    },
  },
  {
    q: { el: 'Ένας κύκλος έχει ακτίνα 10 cm. Πόσο είναι περίπου το εμβαδόν του; (π ≈ 3,14)', en: 'A circle has a radius of 10 cm. Roughly what is its area? (π ≈ 3.14)' },
    options: { el: ['62,8 cm²', '31,4 cm²', '314 cm²', '100 cm²'], en: ['62.8 cm²', '31.4 cm²', '314 cm²', '100 cm²'] },
    correct: 2,
    explanation: {
      el: 'Εμβαδόν κύκλου = π × ακτίνα × ακτίνα = 3,14 × 10 × 10 = 314 cm². Το 62,8 είναι το μήκος του κύκλου (2 × π × ακτίνα), όχι το εμβαδόν.',
      en: 'Area of a circle = π × radius × radius = 3.14 × 10 × 10 = 314 cm². 62.8 is the circumference (2 × π × radius), not the area.',
    },
  },
  {
    q: { el: 'Ο κήπος του Νίκου είναι τρίγωνο με βάση 12 m και ύψος 5 m. Ο χλοοτάπητας κοστίζει 2 € το τετραγωνικό μέτρο. Πόσο θα πληρώσει;', en: 'Nikos\'s garden is a triangle with a base of 12 m and a height of 5 m. Turf costs €2 per square metre. How much will he pay?' },
    options: { el: ['60 €', '120 €', '30 €', '34 €'], en: ['€60', '€120', '€30', '€34'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα το εμβαδόν: (12 × 5) ÷ 2 = 30 m². Μετά το κόστος: 30 × 2 € = 60 €.',
      en: 'First the area: (12 × 5) ÷ 2 = 30 m². Then the cost: 30 × €2 = €60.',
    },
  },

  // ── 14–15: nets ────────────────────────────────────────────────────────────
  {
    q: { el: 'Από πόσα τετράγωνα αποτελείται το ανάπτυγμα ενός κύβου;', en: 'How many squares make up the net of a cube?' },
    options: { el: ['4', '8', '6', '12'], en: ['4', '8', '6', '12'] },
    correct: 2,
    explanation: {
      el: 'Ο κύβος έχει 6 έδρες, όλες τετράγωνα. Όταν τον «ξεδιπλώνουμε», παίρνουμε ένα ανάπτυγμα με 6 τετράγωνα. (Το 12 είναι οι ακμές του.)',
      en: 'A cube has 6 faces, all squares. When we “unfold” it we get a net of 6 squares. (12 is its number of edges.)',
    },
  },
  {
    q: { el: 'Το ανάπτυγμα ενός τριγωνικού πρίσματος (σαν σκηνή κάμπινγκ) αποτελείται από…', en: 'The net of a triangular prism (shaped like a camping tent) is made of…' },
    options: { el: ['3 τρίγωνα και 2 ορθογώνια', '2 τρίγωνα και 3 ορθογώνια', '6 ορθογώνια', '2 τρίγωνα και 2 ορθογώνια'], en: ['3 triangles and 2 rectangles', '2 triangles and 3 rectangles', '6 rectangles', '2 triangles and 2 rectangles'] },
    correct: 1,
    explanation: {
      el: 'Το τριγωνικό πρίσμα έχει 2 τριγωνικές βάσεις (μπρος και πίσω) και 3 ορθογώνιες έδρες γύρω γύρω. Σύνολο 5 έδρες.',
      en: 'A triangular prism has 2 triangular bases (front and back) and 3 rectangular faces around them. 5 faces in total.',
    },
  },

  // ── 16–18: volume ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ένας κύβος έχει ακμή 4 cm. Πόσος είναι ο όγκος του;', en: 'A cube has an edge of 4 cm. What is its volume?' },
    options: { el: ['12 cm³', '16 cm³', '24 cm³', '64 cm³'], en: ['12 cm³', '16 cm³', '24 cm³', '64 cm³'] },
    correct: 3,
    explanation: {
      el: 'Όγκος κύβου = ακμή × ακμή × ακμή = 4 × 4 × 4 = 64 cm³. Το 16 είναι μόνο 4 × 4, δηλαδή το εμβαδόν μιας έδρας.',
      en: 'Volume of a cube = edge × edge × edge = 4 × 4 × 4 = 64 cm³. 16 is only 4 × 4, the area of one face.',
    },
  },
  {
    q: { el: 'Το ενυδρείο της Μαρίας έχει μήκος 50 cm, πλάτος 20 cm και ύψος 30 cm. Πόσο νερό χωράει αν γεμίσει μέχρι πάνω;', en: 'Maria\'s aquarium is 50 cm long, 20 cm wide and 30 cm tall. How much water does it hold when filled to the top?' },
    options: { el: ['30.000 cm³ (30 λίτρα)', '3.000 cm³ (3 λίτρα)', '100 cm³', '1.000 cm³ (1 λίτρο)'], en: ['30,000 cm³ (30 litres)', '3,000 cm³ (3 litres)', '100 cm³', '1,000 cm³ (1 litre)'] },
    correct: 0,
    explanation: {
      el: 'Όγκος ορθογωνίου παραλληλεπιπέδου = μήκος × πλάτος × ύψος = 50 × 20 × 30 = 30.000 cm³. Επειδή 1.000 cm³ = 1 λίτρο, χωράει 30 λίτρα.',
      en: 'Volume of a rectangular prism = length × width × height = 50 × 20 × 30 = 30,000 cm³. Since 1,000 cm³ = 1 litre, it holds 30 litres.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει ένα κυλινδρικό κουτί με ακτίνα βάσης 2 cm και ύψος 10 cm. Πόσος είναι περίπου ο όγκος του; (π ≈ 3,14)', en: 'Giorgos has a cylindrical tin with a base radius of 2 cm and a height of 10 cm. Roughly what is its volume? (π ≈ 3.14)' },
    options: { el: ['62,8 cm³', '125,6 cm³', '251,2 cm³', '40 cm³'], en: ['62.8 cm³', '125.6 cm³', '251.2 cm³', '40 cm³'] },
    correct: 1,
    explanation: {
      el: 'Όγκος κυλίνδρου = εμβαδόν βάσης × ύψος. Η βάση είναι κύκλος: 3,14 × 2 × 2 = 12,56 cm². Μετά 12,56 × 10 = 125,6 cm³.',
      en: 'Volume of a cylinder = base area × height. The base is a circle: 3.14 × 2 × 2 = 12.56 cm². Then 12.56 × 10 = 125.6 cm³.',
    },
  },
];
