/**
 * Ε' Δημοτικού · Μαθηματικά · Γωνίες, τρίγωνα, κύκλος
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–3   kinds of angles: right (90°), acute, obtuse
 *   4–5   the protractor and reading an angle on it
 *   6–12  triangles: angle sum 180°, types by sides (ισόπλευρο, ισοσκελές, σκαληνό),
 *         types by angles (ορθογώνιο, αμβλυγώνιο), finding the missing angle
 *   13–14 heights of a triangle, axes of symmetry
 *   15–16 circumference: diameter × 3,14, and diameter = 2 × radius
 *   17–18 scale on a plan: 1:100 and 1:50
 *
 * Distractors are the mistakes children actually make: the other protractor scale,
 * using the radius instead of the diameter, forgetting the 180° rule, mixing up
 * the triangle names. The UI shuffles options, so the correct slot is not balanced.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_ANGLES_TRIANGLES_CIRCLE: QuizQuestion[] = [
  // ── 1–3: kinds of angles ────────────────────────────────────────────────────
  {
    q: { el: 'Πόσες μοίρες έχει μια ορθή γωνία;', en: 'How many degrees does a right angle have?' },
    options: { el: ['90°', '100°', '180°', '45°'], en: ['90°', '100°', '180°', '45°'] },
    correct: 0,
    explanation: {
      el: 'Η ορθή γωνία έχει 90°. Είναι η γωνία της γωνίας του βιβλίου σου ή του τετραγώνου.',
      en: 'A right angle has 90°. It is the angle at the corner of your book or of a square.',
    },
  },
  {
    q: { el: 'Μια γωνία έχει 40°. Τι γωνία είναι;', en: 'An angle measures 40°. What kind of angle is it?' },
    options: { el: ['ορθή', 'οξεία', 'αμβλεία', 'ευθεία'], en: ['right', 'acute', 'obtuse', 'straight'] },
    correct: 1,
    explanation: {
      el: 'Οξεία είναι κάθε γωνία μικρότερη από 90°. Το 40 είναι μικρότερο από το 90, άρα είναι οξεία.',
      en: 'An acute angle is any angle smaller than 90°. 40 is smaller than 90, so it is acute.',
    },
  },
  {
    q: { el: 'Μια γωνία έχει 120°. Τι γωνία είναι;', en: 'An angle measures 120°. What kind of angle is it?' },
    options: { el: ['οξεία', 'ορθή', 'αμβλεία', 'ευθεία'], en: ['acute', 'right', 'obtuse', 'straight'] },
    correct: 2,
    explanation: {
      el: 'Αμβλεία είναι η γωνία που είναι μεγαλύτερη από 90° και μικρότερη από 180°. Το 120 είναι ανάμεσα, άρα είναι αμβλεία.',
      en: 'An obtuse angle is bigger than 90° and smaller than 180°. 120 is in between, so it is obtuse.',
    },
  },

  // ── 4–5: the protractor ─────────────────────────────────────────────────────
  {
    q: { el: 'Με ποιο όργανο μετράμε τις γωνίες;', en: 'Which tool do we use to measure angles?' },
    options: { el: ['με τον χάρακα', 'με τον διαβήτη', 'με τη ζυγαριά', 'με το μοιρογνωμόνιο'], en: ['a ruler', 'a compass', 'a scale', 'a protractor'] },
    correct: 3,
    explanation: {
      el: 'Οι γωνίες μετριούνται σε μοίρες με το μοιρογνωμόνιο. Ο χάρακας μετρά μήκη και ο διαβήτης σχεδιάζει κύκλους.',
      en: 'Angles are measured in degrees with a protractor. A ruler measures lengths and a compass draws circles.',
    },
  },
  {
    q: { el: 'Η Μαρία βάζει τη μία πλευρά της γωνίας στο 0 του μοιρογνωμονίου. Η άλλη πλευρά περνά από το 70 της ίδιας σειράς αριθμών. Πόσες μοίρες είναι η γωνία;', en: 'Maria puts one side of the angle on the 0 of the protractor. The other side passes through 70 on the same row of numbers. How many degrees is the angle?' },
    options: { el: ['70°', '110°', '20°', '170°'], en: ['70°', '110°', '20°', '170°'] },
    correct: 0,
    explanation: {
      el: 'Ξεκινάμε από το 0 και διαβάζουμε στην ίδια σειρά αριθμών: 70°. Το 110 είναι η άλλη σειρά του μοιρογνωμονίου — προσοχή να μην την μπερδέψεις!',
      en: 'We start at 0 and read on the same row of numbers: 70°. 110 is the other row of the protractor — be careful not to mix them up!',
    },
  },

  // ── 6–12: triangles ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσο κάνει το άθροισμα των τριών γωνιών κάθε τριγώνου;', en: 'What is the sum of the three angles of any triangle?' },
    options: { el: ['90°', '180°', '360°', '270°'], en: ['90°', '180°', '360°', '270°'] },
    correct: 1,
    explanation: {
      el: 'Σε κάθε τρίγωνο, μικρό ή μεγάλο, οι τρεις γωνίες μαζί κάνουν πάντα 180°.',
      en: 'In every triangle, small or big, the three angles together always make 180°.',
    },
  },
  {
    q: { el: 'Ένα τρίγωνο έχει και τις τρεις πλευρές του ίσες. Πώς λέγεται;', en: 'A triangle has all three sides equal. What is it called?' },
    options: { el: ['ισοσκελές', 'σκαληνό', 'ισόπλευρο', 'ορθογώνιο'], en: ['isosceles', 'scalene', 'equilateral', 'right-angled'] },
    correct: 2,
    explanation: {
      el: 'Ισόπλευρο = ίσες πλευρές. Όταν και οι τρεις πλευρές είναι ίσες, και οι τρεις γωνίες είναι ίσες, 60° η καθεμία.',
      en: 'Equilateral means equal sides. When all three sides are equal, all three angles are equal too, 60° each.',
    },
  },
  {
    q: { el: 'Ο Νίκος σχεδίασε ένα τρίγωνο με πλευρές 5 cm, 5 cm και 8 cm. Τι τρίγωνο είναι;', en: 'Nikos drew a triangle with sides 5 cm, 5 cm and 8 cm. What kind of triangle is it?' },
    options: { el: ['ισόπλευρο', 'ισοσκελές', 'σκαληνό', 'αμβλυγώνιο'], en: ['equilateral', 'isosceles', 'scalene', 'obtuse-angled'] },
    correct: 1,
    explanation: {
      el: 'Δύο πλευρές είναι ίσες (5 και 5), άρα το τρίγωνο είναι ισοσκελές. Ισόπλευρο θα ήταν μόνο αν ήταν ίσες και οι τρεις.',
      en: 'Two sides are equal (5 and 5), so the triangle is isosceles. It would be equilateral only if all three were equal.',
    },
  },
  {
    q: { el: 'Ένα τρίγωνο έχει πλευρές 3 cm, 4 cm και 6 cm. Πώς λέγεται ως προς τις πλευρές του;', en: 'A triangle has sides 3 cm, 4 cm and 6 cm. What is it called by its sides?' },
    options: { el: ['ισόπλευρο', 'ισοσκελές', 'ορθογώνιο', 'σκαληνό'], en: ['equilateral', 'isosceles', 'right-angled', 'scalene'] },
    correct: 3,
    explanation: {
      el: 'Καμία πλευρά δεν είναι ίση με άλλη, άρα το τρίγωνο είναι σκαληνό. Το «ορθογώνιο» μιλάει για γωνίες, όχι για πλευρές.',
      en: 'No side is equal to another, so the triangle is scalene. “Right-angled” describes angles, not sides.',
    },
  },
  {
    q: { el: 'Ένα τρίγωνο έχει μια γωνία 90°. Πώς λέγεται ως προς τις γωνίες του;', en: 'A triangle has one angle of 90°. What is it called by its angles?' },
    options: { el: ['ορθογώνιο', 'οξυγώνιο', 'αμβλυγώνιο', 'ισόπλευρο'], en: ['right-angled', 'acute-angled', 'obtuse-angled', 'equilateral'] },
    correct: 0,
    explanation: {
      el: 'Μία ορθή γωνία (90°) κάνει το τρίγωνο ορθογώνιο. Οι άλλες δύο γωνίες του είναι οξείες και μαζί κάνουν 90°.',
      en: 'One right angle (90°) makes the triangle right-angled. Its other two angles are acute and together make 90°.',
    },
  },
  {
    q: { el: 'Ένα τρίγωνο έχει γωνίες 30°, 40° και 110°. Πώς λέγεται ως προς τις γωνίες του;', en: 'A triangle has angles of 30°, 40° and 110°. What is it called by its angles?' },
    options: { el: ['οξυγώνιο', 'ορθογώνιο', 'αμβλυγώνιο', 'ισοσκελές'], en: ['acute-angled', 'right-angled', 'obtuse-angled', 'isosceles'] },
    correct: 2,
    explanation: {
      el: 'Η γωνία 110° είναι αμβλεία, άρα το τρίγωνο είναι αμβλυγώνιο. Οξυγώνιο είναι μόνο όταν και οι τρεις γωνίες είναι οξείες.',
      en: 'The 110° angle is obtuse, so the triangle is obtuse-angled. Acute-angled is only when all three angles are acute.',
    },
  },
  {
    q: { el: 'Ο Γιώργος μέτρησε δύο γωνίες ενός τριγώνου: 60° και 70°. Πόσες μοίρες είναι η τρίτη γωνία;', en: 'Giorgos measured two angles of a triangle: 60° and 70°. How many degrees is the third angle?' },
    options: { el: ['40°', '60°', '130°', '50°'], en: ['40°', '60°', '130°', '50°'] },
    correct: 3,
    explanation: {
      el: 'Οι τρεις γωνίες κάνουν 180°. 60 + 70 = 130 και 180 − 130 = 50°. (Το 130 είναι το άθροισμα των δύο, όχι η τρίτη γωνία!)',
      en: 'The three angles make 180°. 60 + 70 = 130 and 180 − 130 = 50°. (130 is the sum of the two, not the third angle!)',
    },
  },

  // ── 13–14: heights and symmetry ─────────────────────────────────────────────
  {
    q: { el: 'Το ύψος ενός τριγώνου είναι το ευθύγραμμο τμήμα που ξεκινά από μια κορυφή και…', en: 'The height of a triangle is the line segment that starts from a vertex and…' },
    options: { el: ['φτάνει στην απέναντι πλευρά σχηματίζοντας ορθή γωνία', 'φτάνει στη μέση της απέναντι πλευράς', 'ενώνει τις δύο άλλες κορυφές', 'είναι ίσο με τη μεγαλύτερη πλευρά'], en: ['reaches the opposite side making a right angle', 'reaches the middle of the opposite side', 'joins the other two vertices', 'is equal to the longest side'] },
    correct: 0,
    explanation: {
      el: 'Το ύψος πέφτει κάθετα, δηλαδή με ορθή γωνία (90°), στην απέναντι πλευρά. Κάθε τρίγωνο έχει τρία ύψη, ένα από κάθε κορυφή.',
      en: 'The height drops perpendicularly, that is at a right angle (90°), onto the opposite side. Every triangle has three heights, one from each vertex.',
    },
  },
  {
    q: { el: 'Πόσους άξονες συμμετρίας έχει ένα ισόπλευρο τρίγωνο;', en: 'How many axes of symmetry does an equilateral triangle have?' },
    options: { el: ['3', '1', '2', '0'], en: ['3', '1', '2', '0'] },
    correct: 0,
    explanation: {
      el: 'Το ισόπλευρο τρίγωνο διπλώνει ακριβώς στη μέση με 3 τρόπους, από κάθε κορυφή προς την απέναντι πλευρά. Άρα έχει 3 άξονες συμμετρίας. Το ισοσκελές έχει μόνο 1.',
      en: 'An equilateral triangle folds exactly in half in 3 ways, from each vertex to the opposite side. So it has 3 axes of symmetry. An isosceles triangle has only 1.',
    },
  },

  // ── 15–16: circumference ────────────────────────────────────────────────────
  {
    q: { el: 'Ένας κύκλος έχει διάμετρο 10 cm. Πόσο είναι περίπου το μήκος του κύκλου;', en: 'A circle has a diameter of 10 cm. About how long is the circumference?' },
    options: { el: ['15,7 cm', '31,4 cm', '314 cm', '13,14 cm'], en: ['15.7 cm', '31.4 cm', '314 cm', '13.14 cm'] },
    correct: 1,
    explanation: {
      el: 'Μήκος κύκλου = διάμετρος × 3,14. Άρα 10 × 3,14 = 31,4 cm.',
      en: 'Circumference = diameter × 3.14. So 10 × 3.14 = 31.4 cm.',
    },
  },
  {
    q: { el: 'Η Ελένη σχεδίασε με τον διαβήτη έναν κύκλο με ακτίνα 2 cm. Πόσο είναι περίπου το μήκος του κύκλου;', en: 'Eleni drew a circle with a compass, with a radius of 2 cm. About how long is the circumference?' },
    options: { el: ['6,28 cm', '12,28 cm', '8 cm', '12,56 cm'], en: ['6.28 cm', '12.28 cm', '8 cm', '12.56 cm'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα η διάμετρος: είναι διπλάσια της ακτίνας, 2 × 2 = 4 cm. Μετά 4 × 3,14 = 12,56 cm. (Το 6,28 βγαίνει αν ξεχάσεις να διπλασιάσεις την ακτίνα.)',
      en: 'First the diameter: it is double the radius, 2 × 2 = 4 cm. Then 4 × 3.14 = 12.56 cm. (6.28 is what you get if you forget to double the radius.)',
    },
  },

  // ── 17–18: scale ────────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ένα σχέδιο με κλίμακα 1:100, ο τοίχος ενός δωματίου είναι 3 cm. Πόσο είναι ο τοίχος στην πραγματικότητα;', en: 'On a plan with scale 1:100, the wall of a room is 3 cm. How long is the wall in real life?' },
    options: { el: ['30 cm', '3 m', '300 m', '103 cm'], en: ['30 cm', '3 m', '300 m', '103 cm'] },
    correct: 1,
    explanation: {
      el: 'Κλίμακα 1:100 σημαίνει ότι 1 cm στο σχέδιο είναι 100 cm στην πραγματικότητα. 3 × 100 = 300 cm = 3 m.',
      en: 'Scale 1:100 means 1 cm on the plan is 100 cm in real life. 3 × 100 = 300 cm = 3 m.',
    },
  },
  {
    q: { el: 'Η αυλή του σχολείου έχει μήκος 5 m. Σε σχέδιο με κλίμακα 1:50, πόσα εκατοστά θα είναι το μήκος της;', en: 'The school yard is 5 m long. On a plan with scale 1:50, how many centimetres long will it be?' },
    options: { el: ['1 cm', '250 cm', '10 cm', '25 cm'], en: ['1 cm', '250 cm', '10 cm', '25 cm'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα σε εκατοστά: 5 m = 500 cm. Στο σχέδιο όλα είναι 50 φορές μικρότερα: 500 ÷ 50 = 10 cm.',
      en: 'First in centimetres: 5 m = 500 cm. On the plan everything is 50 times smaller: 500 ÷ 50 = 10 cm.',
    },
  },
];
