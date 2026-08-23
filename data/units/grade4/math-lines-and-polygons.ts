/**
 * Δ' Δημοτικού · Μαθηματικά · Γραμμές και πολύγωνα
 * ================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–6   parallel, perpendicular and intersecting lines (real objects, letters, symbols)
 *   7–12  polygons: what they are, names by number of sides, corners, perimeter
 *   13–15 parallelograms: the property, which shapes are parallelograms, rectangle perimeter
 *   16–18 symmetric shapes and axes of symmetry
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_LINES_AND_POLYGONS: QuizQuestion[] = [
  // ── 1–6: kinds of lines ─────────────────────────────────────────────────────
  {
    q: { el: 'Οι δύο ράγες του τρένου πάνε πάντα δίπλα δίπλα και δεν συναντιούνται ποτέ. Τι γραμμές είναι;', en: 'The two rails of a train track run side by side and never meet. What kind of lines are they?' },
    options: { el: ['Παράλληλες', 'Κάθετες', 'Τεμνόμενες', 'Καμπύλες'], en: ['Parallel', 'Perpendicular', 'Intersecting', 'Curved'] },
    correct: 0,
    explanation: {
      el: 'Παράλληλες λέγονται οι ευθείες που έχουν παντού την ίδια απόσταση και δεν συναντιούνται ποτέ.',
      en: 'Parallel lines stay the same distance apart everywhere and never meet.',
    },
  },
  {
    q: { el: 'Δύο ευθείες συναντιούνται και σχηματίζουν ορθές γωνίες, σαν τις άκρες ενός βιβλίου. Πώς λέγονται;', en: 'Two lines meet and make right angles, like the edges of a book. What are they called?' },
    options: { el: ['Παράλληλες', 'Τεμνόμενες μόνο', 'Κάθετες', 'Τεθλασμένες'], en: ['Parallel', 'Just intersecting', 'Perpendicular', 'Zigzag'] },
    correct: 2,
    explanation: {
      el: 'Κάθετες λέγονται οι ευθείες που τέμνονται και σχηματίζουν ορθή γωνία (90°).',
      en: 'Perpendicular lines cross each other and make a right angle (90°).',
    },
  },
  {
    q: { el: 'Δύο ευθείες περνούν η μία μέσα από την άλλη σε ένα σημείο, σαν το γράμμα Χ. Τι γραμμές είναι;', en: 'Two lines cross each other at one point, like the letter X. What kind of lines are they?' },
    options: { el: ['Παράλληλες', 'Τεμνόμενες', 'Καμπύλες', 'Κλειστές'], en: ['Parallel', 'Intersecting', 'Curved', 'Closed'] },
    correct: 1,
    explanation: {
      el: 'Τεμνόμενες λέγονται οι ευθείες που συναντιούνται (τέμνονται) σε ένα σημείο.',
      en: 'Intersecting lines are lines that meet (cross) at one point.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω κεφαλαία γράμματα έχει δύο παράλληλες γραμμές;', en: 'Which of these capital letters has two parallel lines?' },
    options: { el: ['Λ', 'Χ', 'Ζ', 'V'], en: ['Λ', 'X', 'Z', 'V'] },
    correct: 2,
    explanation: {
      el: 'Το Ζ έχει πάνω και κάτω δύο οριζόντιες γραμμές που δεν συναντιούνται ποτέ: είναι παράλληλες.',
      en: 'The Z has a top line and a bottom line that never meet: they are parallel.',
    },
  },
  {
    q: { el: 'Ποιο κεφαλαίο γράμμα έχει δύο κάθετες γραμμές;', en: 'Which capital letter has two perpendicular lines?' },
    options: { el: ['Τ', 'Χ', 'Λ', 'V'], en: ['T', 'X', 'Λ', 'V'] },
    correct: 0,
    explanation: {
      el: 'Στο Τ η όρθια γραμμή και η οριζόντια σχηματίζουν ορθή γωνία, άρα είναι κάθετες. Το Χ έχει τεμνόμενες, όχι κάθετες.',
      en: 'In the T the upright line and the flat line make a right angle, so they are perpendicular. The X has intersecting lines, not perpendicular ones.',
    },
  },
  {
    q: { el: 'Ο Γιώργος σχεδίασε δύο ευθείες που συναντιούνται αλλά οι γωνίες τους δεν είναι ορθές. Τι είναι οι ευθείες του;', en: 'George drew two lines that meet, but their angles are not right angles. What are his lines?' },
    options: { el: ['Παράλληλες', 'Κάθετες', 'Τεμνόμενες', 'Ίσες'], en: ['Parallel', 'Perpendicular', 'Intersecting', 'Equal'] },
    correct: 2,
    explanation: {
      el: 'Όταν δύο ευθείες συναντιούνται χωρίς ορθή γωνία, είναι απλώς τεμνόμενες. Κάθετες είναι μόνο όταν η γωνία είναι ορθή.',
      en: 'When two lines meet without a right angle they are just intersecting. They are perpendicular only if the angle is a right angle.',
    },
  },

  // ── 7–12: polygons ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω σχήματα ΔΕΝ είναι πολύγωνο;', en: 'Which of these shapes is NOT a polygon?' },
    options: { el: ['Τρίγωνο', 'Τετράγωνο', 'Κύκλος', 'Πεντάγωνο'], en: ['Triangle', 'Square', 'Circle', 'Pentagon'] },
    correct: 2,
    explanation: {
      el: 'Πολύγωνο είναι ένα κλειστό σχήμα με ευθείες πλευρές. Ο κύκλος είναι καμπύλη, δεν έχει πλευρές.',
      en: 'A polygon is a closed shape with straight sides. A circle is curved and has no sides.',
    },
  },
  {
    q: { el: 'Πόσες πλευρές έχει ένα πεντάγωνο;', en: 'How many sides does a pentagon have?' },
    options: { el: ['4', '5', '6', '8'], en: ['4', '5', '6', '8'] },
    correct: 1,
    explanation: {
      el: 'Το «πεντά-» σημαίνει πέντε: το πεντάγωνο έχει 5 πλευρές και 5 γωνίες.',
      en: '“Penta-” means five: a pentagon has 5 sides and 5 angles.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το πολύγωνο που έχει 6 πλευρές;', en: 'What do we call a polygon with 6 sides?' },
    options: { el: ['Πεντάγωνο', 'Τετράπλευρο', 'Οκτάγωνο', 'Εξάγωνο'], en: ['Pentagon', 'Quadrilateral', 'Octagon', 'Hexagon'] },
    correct: 3,
    explanation: {
      el: 'Το «εξά-» σημαίνει έξι: το εξάγωνο έχει 6 πλευρές, όπως τα κελιά της κερήθρας.',
      en: '“Hexa-” means six: a hexagon has 6 sides, like the cells of a honeycomb.',
    },
  },
  {
    q: { el: 'Η Ελένη σχεδίασε ένα πολύγωνο με 7 κορυφές. Πόσες πλευρές έχει;', en: 'Helen drew a polygon with 7 corners. How many sides does it have?' },
    options: { el: ['6', '14', '7', '8'], en: ['6', '14', '7', '8'] },
    correct: 2,
    explanation: {
      el: 'Σε κάθε πολύγωνο οι πλευρές είναι όσες και οι κορυφές. 7 κορυφές, άρα 7 πλευρές.',
      en: 'In every polygon the number of sides equals the number of corners. 7 corners, so 7 sides.',
    },
  },
  {
    q: { el: 'Ένα τετράγωνο έχει πλευρά 8 εκ. Πόση είναι η περίμετρός του;', en: 'A square has a side of 8 cm. What is its perimeter?' },
    options: { el: ['16 εκ.', '24 εκ.', '32 εκ.', '64 εκ.'], en: ['16 cm', '24 cm', '32 cm', '64 cm'] },
    correct: 2,
    explanation: {
      el: 'Περίμετρος είναι το μήκος όλων των πλευρών μαζί. Το τετράγωνο έχει 4 ίσες πλευρές: 4 × 8 = 32 εκ.',
      en: 'The perimeter is all the sides added together. A square has 4 equal sides: 4 × 8 = 32 cm.',
    },
  },
  {
    q: { el: 'Ο Νίκος βάζει κορδέλα γύρω από ένα χαρτόνι σε σχήμα πενταγώνου με όλες τις πλευρές 6 εκ. Πόση κορδέλα χρειάζεται;', en: 'Nick puts ribbon around a pentagon-shaped card with all sides 6 cm. How much ribbon does he need?' },
    options: { el: ['11 εκ.', '24 εκ.', '36 εκ.', '30 εκ.'], en: ['11 cm', '24 cm', '36 cm', '30 cm'] },
    correct: 3,
    explanation: {
      el: 'Το πεντάγωνο έχει 5 πλευρές. 5 × 6 = 30 εκ. κορδέλα, όση και η περίμετρος.',
      en: 'A pentagon has 5 sides. 5 × 6 = 30 cm of ribbon, the same as the perimeter.',
    },
  },

  // ── 13–15: parallelograms ───────────────────────────────────────────────────
  {
    q: { el: 'Τι ισχύει πάντα για ένα παραλληλόγραμμο;', en: 'What is always true about a parallelogram?' },
    options: { el: ['Οι απέναντι πλευρές είναι παράλληλες και ίσες', 'Όλες οι πλευρές είναι ίσες', 'Έχει μόνο ένα ζευγάρι παράλληλες πλευρές', 'Έχει πέντε πλευρές'], en: ['Opposite sides are parallel and equal', 'All sides are equal', 'It has only one pair of parallel sides', 'It has five sides'] },
    correct: 0,
    explanation: {
      el: 'Το παραλληλόγραμμο είναι τετράπλευρο με τις απέναντι πλευρές παράλληλες και ίσες. Οι πλευρές δεν είναι ανάγκη να είναι όλες ίσες.',
      en: 'A parallelogram is a four-sided shape whose opposite sides are parallel and equal. The sides do not all have to be equal.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω σχήματα είναι παραλληλόγραμμο;', en: 'Which of these shapes is a parallelogram?' },
    options: { el: ['Τρίγωνο', 'Πεντάγωνο', 'Τραπέζιο', 'Ορθογώνιο'], en: ['Triangle', 'Pentagon', 'Trapezium', 'Rectangle'] },
    correct: 3,
    explanation: {
      el: 'Το ορθογώνιο έχει τις απέναντι πλευρές παράλληλες και ίσες, άρα είναι παραλληλόγραμμο. Το τραπέζιο έχει μόνο ένα ζευγάρι παράλληλες πλευρές.',
      en: 'A rectangle has opposite sides parallel and equal, so it is a parallelogram. A trapezium has only one pair of parallel sides.',
    },
  },
  {
    q: { el: 'Η αυλή του σχολείου είναι ορθογώνιο με μήκος 9 μ. και πλάτος 4 μ. Πόση είναι η περίμετρός της;', en: 'The school yard is a rectangle 9 m long and 4 m wide. What is its perimeter?' },
    options: { el: ['13 μ.', '26 μ.', '36 μ.', '18 μ.'], en: ['13 m', '26 m', '36 m', '18 m'] },
    correct: 1,
    explanation: {
      el: 'Το ορθογώνιο έχει δύο πλευρές 9 μ. και δύο πλευρές 4 μ.: 9 + 4 + 9 + 4 = 26 μ.',
      en: 'A rectangle has two sides of 9 m and two sides of 4 m: 9 + 4 + 9 + 4 = 26 m.',
    },
  },

  // ── 16–18: symmetry ─────────────────────────────────────────────────────────
  {
    q: { el: 'Διπλώνουμε ένα σχήμα στη μέση και τα δύο μισά ταιριάζουν ακριβώς. Τι λέμε για το σχήμα;', en: 'We fold a shape in half and the two halves match exactly. What do we say about the shape?' },
    options: { el: ['Είναι παράλληλο', 'Είναι συμμετρικό', 'Είναι κάθετο', 'Είναι τεμνόμενο'], en: ['It is parallel', 'It is symmetric', 'It is perpendicular', 'It is intersecting'] },
    correct: 1,
    explanation: {
      el: 'Ένα σχήμα είναι συμμετρικό όταν η γραμμή που το διπλώνουμε το χωρίζει σε δύο ίδια μισά. Η γραμμή αυτή λέγεται άξονας συμμετρίας.',
      en: 'A shape is symmetric when the fold line splits it into two matching halves. That line is called the axis of symmetry.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω κεφαλαία γράμματα είναι συμμετρικό;', en: 'Which of these capital letters is symmetric?' },
    options: { el: ['Γ', 'Ρ', 'Α', 'Ζ'], en: ['Γ', 'P', 'A', 'Z'] },
    correct: 2,
    explanation: {
      el: 'Αν τραβήξουμε μια όρθια γραμμή στη μέση του Α, το αριστερό και το δεξί μισό είναι ίδια. Τα Γ, Ρ και Ζ δεν διπλώνουν σε δύο ίδια μισά.',
      en: 'If we draw an upright line through the middle of the A, the left and right halves match. Γ, P and Z do not fold into two matching halves.',
    },
  },
  {
    q: { el: 'Πόσους άξονες συμμετρίας έχει ένα ορθογώνιο που δεν είναι τετράγωνο;', en: 'How many axes of symmetry does a rectangle (that is not a square) have?' },
    options: { el: ['1', '4', '2', '0'], en: ['1', '4', '2', '0'] },
    correct: 2,
    explanation: {
      el: 'Το ορθογώνιο έχει 2 άξονες: έναν οριζόντιο και έναν όρθιο στη μέση. Οι διαγώνιοι δεν είναι άξονες, γιατί τα μισά δεν ταιριάζουν. Το τετράγωνο έχει 4.',
      en: 'A rectangle has 2 axes: one across the middle and one up the middle. The diagonals are not axes, because the halves do not match. A square has 4.',
    },
  },
];
