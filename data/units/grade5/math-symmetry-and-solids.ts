/**
 * Ε' Δημοτικού · Μαθηματικά · Συμμετρία & Στερεά
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–2   what an axis of symmetry is (the mirror line, the folding test)
 *   3–7   how many axes: square, rectangle, capital letters (vertical / horizontal), the circle
 *   8–13  solids by the numbers: faces, edges and vertices of the cube, cuboid and square pyramid
 *   14–16 recognising solids from a description: cylinder, cone, sphere
 *   17–18 the net of a cube: what it is made of, which net folds up
 * Distractors are real child mistakes: counting a rectangle's diagonals as axes, mixing up
 * faces and edges, giving the pyramid the cube's numbers, thinking any 6 squares fold into a cube.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_SYMMETRY_AND_SOLIDS: QuizQuestion[] = [
  // ── 1–2: what an axis of symmetry is ──────────────────────────────────────
  {
    q: { el: 'Τι είναι ο άξονας συμμετρίας ενός σχήματος;', en: 'What is the axis of symmetry of a shape?' },
    options: { el: ['Μια γραμμή που χωρίζει το σχήμα σε δύο ίδια μέρη, το ένα καθρέφτισμα του άλλου', 'Η μεγαλύτερη πλευρά του σχήματος', 'Μια γραμμή που χωρίζει το σχήμα σε δύο διαφορετικά μέρη', 'Η τελεία στο κέντρο του σχήματος'], en: ['A line that splits the shape into two identical halves, each the mirror image of the other', 'The longest side of the shape', 'A line that splits the shape into two different parts', 'The dot at the centre of the shape'] },
    correct: 0,
    explanation: {
      el: 'Ο άξονας συμμετρίας λειτουργεί σαν καθρέφτης: ό,τι υπάρχει από τη μία πλευρά, υπάρχει ακριβώς το ίδιο και από την άλλη.',
      en: 'The axis of symmetry works like a mirror: whatever is on one side appears exactly the same on the other.',
    },
  },
  {
    q: { el: 'Αν διπλώσουμε ένα χαρτί κατά μήκος του άξονα συμμετρίας ενός σχήματος, τι θα συμβεί;', en: 'If we fold a piece of paper along the axis of symmetry of a shape, what will happen?' },
    options: { el: ['Το ένα μέρος θα είναι μεγαλύτερο από το άλλο', 'Τα δύο μέρη θα ταιριάξουν ακριβώς', 'Τα δύο μέρη δεν θα ακουμπούν καθόλου', 'Το σχήμα θα γίνει κύκλος'], en: ['One part will be bigger than the other', 'The two halves will match exactly', 'The two parts will not touch at all', 'The shape will become a circle'] },
    correct: 1,
    explanation: {
      el: 'Αυτό είναι το «τεστ του διπλώματος»: αν τα δύο μέρη πέφτουν ακριβώς το ένα πάνω στο άλλο, η γραμμή είναι άξονας συμμετρίας.',
      en: 'This is the "folding test": if the two halves land exactly on top of each other, the line is an axis of symmetry.',
    },
  },

  // ── 3–7: how many axes ────────────────────────────────────────────────────
  {
    q: { el: 'Πόσους άξονες συμμετρίας έχει ένα τετράγωνο;', en: 'How many axes of symmetry does a square have?' },
    options: { el: ['1', '2', '4', '8'], en: ['1', '2', '4', '8'] },
    correct: 2,
    explanation: {
      el: 'Το τετράγωνο έχει 4 άξονες: έναν κατακόρυφο, έναν οριζόντιο και τις δύο διαγώνιες.',
      en: 'A square has 4 axes: one vertical, one horizontal and the two diagonals.',
    },
  },
  {
    q: { el: 'Πόσους άξονες συμμετρίας έχει ένα ορθογώνιο που δεν είναι τετράγωνο;', en: 'How many axes of symmetry does a rectangle that is not a square have?' },
    options: { el: ['1', '2', '4', '0'], en: ['1', '2', '4', '0'] },
    correct: 1,
    explanation: {
      el: 'Μόνο 2: τον κατακόρυφο και τον οριζόντιο. Οι διαγώνιες ΔΕΝ είναι άξονες — αν διπλώσεις ένα ορθογώνιο στη διαγώνιο, τα μέρη δεν ταιριάζουν.',
      en: 'Only 2: the vertical and the horizontal. The diagonals are NOT axes — fold a rectangle along a diagonal and the parts do not match.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω κεφαλαία γράμματα έχει κατακόρυφο άξονα συμμετρίας;', en: 'Which of these capital letters has a vertical axis of symmetry?' },
    options: { el: ['Γ', 'Ρ', 'Α', 'Ζ'], en: ['Γ', 'Ρ', 'Α', 'Ζ'] },
    correct: 2,
    explanation: {
      el: 'Το Α, αν το κόψεις με μια κατακόρυφη γραμμή στη μέση, έχει δύο ίδια μισά. Το Γ, το Ρ και το Ζ δεν έχουν κανέναν άξονα συμμετρίας.',
      en: 'Cut Α down the middle with a vertical line and you get two identical halves. Γ, Ρ and Ζ have no axis of symmetry at all.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω κεφαλαία γράμματα έχει οριζόντιο άξονα συμμετρίας;', en: 'Which of these capital letters has a horizontal axis of symmetry?' },
    options: { el: ['Ε', 'Λ', 'Τ', 'Π'], en: ['Ε', 'Λ', 'Τ', 'Π'] },
    correct: 0,
    explanation: {
      el: 'Το Ε διπλώνει στη μέση οριζόντια και τα δύο μισά ταιριάζουν. Το Λ, το Τ και το Π έχουν κατακόρυφο άξονα, όχι οριζόντιο.',
      en: 'Ε folds in half horizontally and the two halves match. Λ, Τ and Π have a vertical axis, not a horizontal one.',
    },
  },
  {
    q: { el: 'Ποιο σχήμα έχει άπειρους άξονες συμμετρίας;', en: 'Which shape has infinitely many axes of symmetry?' },
    options: { el: ['το τετράγωνο', 'το ισόπλευρο τρίγωνο', 'το ορθογώνιο', 'ο κύκλος'], en: ['the square', 'the equilateral triangle', 'the rectangle', 'the circle'] },
    correct: 3,
    explanation: {
      el: 'Κάθε ευθεία που περνάει από το κέντρο του κύκλου είναι άξονας συμμετρίας — και υπάρχουν άπειρες τέτοιες. Το ισόπλευρο τρίγωνο έχει 3, το τετράγωνο 4.',
      en: 'Every line through the centre of a circle is an axis of symmetry — and there are infinitely many of them. The equilateral triangle has 3, the square 4.',
    },
  },

  // ── 8–13: faces, edges and vertices ───────────────────────────────────────
  {
    q: { el: 'Πόσες έδρες έχει ο κύβος;', en: 'How many faces does a cube have?' },
    options: { el: ['4', '6', '8', '12'], en: ['4', '6', '8', '12'] },
    correct: 1,
    explanation: {
      el: 'Οι έδρες είναι οι «πλευρές» του στερεού. Σκέψου ένα ζάρι: έχει 6 έδρες, με τους αριθμούς 1 έως 6.',
      en: 'The faces are the flat "sides" of the solid. Think of a die: it has 6 faces, with the numbers 1 to 6.',
    },
  },
  {
    q: { el: 'Πόσες ακμές έχει ο κύβος;', en: 'How many edges does a cube have?' },
    options: { el: ['6', '8', '12', '24'], en: ['6', '8', '12', '24'] },
    correct: 2,
    explanation: {
      el: 'Οι ακμές είναι οι γραμμές όπου ενώνονται δύο έδρες. Ο κύβος έχει 4 πάνω, 4 κάτω και 4 κατακόρυφες: 4 + 4 + 4 = 12.',
      en: 'The edges are the lines where two faces meet. A cube has 4 on top, 4 at the bottom and 4 vertical ones: 4 + 4 + 4 = 12.',
    },
  },
  {
    q: { el: 'Πόσες κορυφές έχει ένα ορθογώνιο παραλληλεπίπεδο (π.χ. ένα κουτί παπουτσιών);', en: 'How many vertices (corners) does a cuboid have (e.g. a shoebox)?' },
    options: { el: ['6', '12', '4', '8'], en: ['6', '12', '4', '8'] },
    correct: 3,
    explanation: {
      el: 'Οι κορυφές είναι οι «γωνίες» του στερεού. Ένα κουτί έχει 4 γωνίες πάνω και 4 κάτω: 8 κορυφές, ακριβώς όπως ο κύβος.',
      en: 'The vertices are the "corners" of the solid. A box has 4 corners on top and 4 at the bottom: 8 vertices, just like a cube.',
    },
  },
  {
    q: { el: 'Τι σχήμα έχουν οι έδρες ενός κύβου;', en: 'What shape are the faces of a cube?' },
    options: { el: ['τετράγωνα', 'τρίγωνα', 'κύκλοι', 'ορθογώνια με άνισες πλευρές'], en: ['squares', 'triangles', 'circles', 'rectangles with unequal sides'] },
    correct: 0,
    explanation: {
      el: 'Όλες οι 6 έδρες του κύβου είναι ίσα τετράγωνα. Αυτή είναι η διαφορά του από το ορθογώνιο παραλληλεπίπεδο, που έχει ορθογώνιες έδρες.',
      en: 'All 6 faces of a cube are equal squares. That is what makes it different from a cuboid, whose faces are rectangles.',
    },
  },
  {
    q: { el: 'Μια πυραμίδα έχει τετράγωνη βάση. Πόσες έδρες έχει συνολικά;', en: 'A pyramid has a square base. How many faces does it have in total?' },
    options: { el: ['4', '5', '6', '8'], en: ['4', '5', '6', '8'] },
    correct: 1,
    explanation: {
      el: 'Η βάση είναι 1 έδρα και οι 4 πλευρές της πυραμίδας είναι 4 τρίγωνα. Σύνολο: 1 + 4 = 5 έδρες.',
      en: 'The base is 1 face and the 4 sloping sides are 4 triangles. Total: 1 + 4 = 5 faces.',
    },
  },
  {
    q: { el: 'Πόσες ακμές έχει μια πυραμίδα με τετράγωνη βάση;', en: 'How many edges does a pyramid with a square base have?' },
    options: { el: ['4', '5', '8', '12'], en: ['4', '5', '8', '12'] },
    correct: 2,
    explanation: {
      el: '4 ακμές γύρω από την τετράγωνη βάση και 4 ακμές που ανεβαίνουν στην κορυφή: 4 + 4 = 8 ακμές. (Έχει και 5 κορυφές: 4 στη βάση και 1 στην κορυφή.)',
      en: '4 edges around the square base and 4 edges going up to the apex: 4 + 4 = 8 edges. (It also has 5 vertices: 4 on the base and 1 at the top.)',
    },
  },

  // ── 14–16: recognising solids ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο στερεό έχει δύο κυκλικές έδρες και μία καμπύλη επιφάνεια, όπως μια κονσέρβα;', en: 'Which solid has two circular faces and one curved surface, like a tin can?' },
    options: { el: ['ο κώνος', 'η σφαίρα', 'ο κύλινδρος', 'ο κύβος'], en: ['the cone', 'the sphere', 'the cylinder', 'the cube'] },
    correct: 2,
    explanation: {
      el: 'Ο κύλινδρος έχει έναν κύκλο πάνω, έναν κύκλο κάτω και μια καμπύλη επιφάνεια που τους ενώνει. Ο κώνος έχει μόνο έναν κύκλο.',
      en: 'A cylinder has a circle on top, a circle at the bottom and a curved surface joining them. A cone has only one circle.',
    },
  },
  {
    q: { el: 'Ποιο στερεό μοιάζει με χωνάκι παγωτού: έχει μία κυκλική βάση και μία κορυφή;', en: 'Which solid looks like an ice-cream cone: it has one circular base and one apex?' },
    options: { el: ['ο κώνος', 'ο κύλινδρος', 'η πυραμίδα', 'η σφαίρα'], en: ['the cone', 'the cylinder', 'the pyramid', 'the sphere'] },
    correct: 0,
    explanation: {
      el: 'Ο κώνος έχει μία κυκλική βάση και μια καμπύλη επιφάνεια που στενεύει μέχρι μία κορυφή. Η πυραμίδα μοιάζει, αλλά η βάση της είναι πολύγωνο, όχι κύκλος.',
      en: 'A cone has one circular base and a curved surface that narrows to an apex. A pyramid looks similar, but its base is a polygon, not a circle.',
    },
  },
  {
    q: { el: 'Ποιο στερεό δεν έχει καθόλου έδρες, ακμές ή κορυφές, μόνο μία καμπύλη επιφάνεια;', en: 'Which solid has no faces, edges or vertices at all, only one curved surface?' },
    options: { el: ['ο κύβος', 'ο κύλινδρος', 'η πυραμίδα', 'η σφαίρα'], en: ['the cube', 'the cylinder', 'the pyramid', 'the sphere'] },
    correct: 3,
    explanation: {
      el: 'Η σφαίρα, όπως μια μπάλα, είναι παντού στρογγυλή: δεν έχει επίπεδες έδρες, ούτε ακμές, ούτε γωνίες.',
      en: 'A sphere, like a ball, is round all over: it has no flat faces, no edges and no corners.',
    },
  },

  // ── 17–18: the net of a cube ──────────────────────────────────────────────
  {
    q: { el: 'Από τι αποτελείται το ανάπτυγμα ενός κύβου;', en: 'What is the net of a cube made of?' },
    options: { el: ['6 ίσα τετράγωνα', '4 ίσα τετράγωνα', '6 τρίγωνα', '8 ίσα τετράγωνα'], en: ['6 equal squares', '4 equal squares', '6 triangles', '8 equal squares'] },
    correct: 0,
    explanation: {
      el: 'Το ανάπτυγμα είναι το στερεό «ξεδιπλωμένο» σε ένα επίπεδο χαρτί. Ο κύβος έχει 6 τετράγωνες έδρες, άρα το ανάπτυγμά του έχει 6 ίσα τετράγωνα.',
      en: 'A net is the solid "unfolded" flat onto paper. A cube has 6 square faces, so its net has 6 equal squares.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω σχήματα από 6 τετράγωνα διπλώνει σε κύβο;', en: 'Which of these shapes made of 6 squares folds up into a cube?' },
    options: { el: ['Μια ευθεία σειρά από 6 τετράγωνα', 'Μια σειρά από 4 τετράγωνα, με ένα τετράγωνο πάνω και ένα κάτω (σαν σταυρός)', 'Ένα ορθογώνιο 2 × 3 από τετράγωνα', 'Μια σειρά από 5 τετράγωνα με ένα ακόμη στην άκρη'], en: ['A straight row of 6 squares', 'A row of 4 squares, with one square above and one below (like a cross)', 'A 2 × 3 rectangle of squares', 'A row of 5 squares with one more at the end'] },
    correct: 1,
    explanation: {
      el: 'Ο σταυρός διπλώνει τέλεια: τα 4 τετράγωνα της σειράς γίνονται οι πλαϊνές έδρες, και το πάνω και το κάτω κλείνουν τον κύβο. Στα άλλα σχήματα τετράγωνα πέφτουν το ένα πάνω στο άλλο και μένουν τρύπες.',
      en: 'The cross folds perfectly: the 4 squares in the row become the side faces, and the top and bottom close the cube. In the other shapes squares overlap and gaps are left.',
    },
  },
];
