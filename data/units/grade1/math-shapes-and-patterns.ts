/**
 * Α' Δημοτικού · Μαθηματικά · Σχήματα και μοτίβα
 * ================================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from ebooks.edu.gr).
 * Short stems, everyday words, no long reading.
 *
 * What the unit covers, in order:
 *   1–6   the four basic shapes: circle, square, triangle, rectangle (sides, corners, everyday objects)
 *   7–8   straight lines and curved lines
 *   9–12  continuing a repeating pattern (colours, shapes, numbers)
 *   13–15 symmetry — the two halves match
 *   16–18 left and right
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_MATH_SHAPES_AND_PATTERNS: QuizQuestion[] = [
  // ── 1–6: the basic shapes ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιο σχήμα είναι στρογγυλό σαν μπάλα;', en: 'Which shape is round like a ball?' },
    options: { el: ['Το τετράγωνο', 'Ο κύκλος', 'Το τρίγωνο', 'Το ορθογώνιο'], en: ['The square', 'The circle', 'The triangle', 'The rectangle'] },
    correct: 1,
    explanation: {
      el: 'Ο κύκλος είναι στρογγυλός. Δεν έχει καθόλου γωνίες.',
      en: 'The circle is round. It has no corners at all.',
    },
  },
  {
    q: { el: 'Πόσες πλευρές έχει το τρίγωνο;', en: 'How many sides does a triangle have?' },
    options: { el: ['2', '4', '3', '5'], en: ['2', '4', '3', '5'] },
    correct: 2,
    explanation: {
      el: 'Το τρίγωνο έχει 3 πλευρές και 3 γωνίες. «Τρι» σημαίνει τρία!',
      en: 'A triangle has 3 sides and 3 corners. “Tri” means three!',
    },
  },
  {
    q: { el: 'Ποιο σχήμα έχει 4 ίσες πλευρές;', en: 'Which shape has 4 equal sides?' },
    options: { el: ['Το τετράγωνο', 'Ο κύκλος', 'Το τρίγωνο', 'Η γραμμή'], en: ['The square', 'The circle', 'The triangle', 'The line'] },
    correct: 0,
    explanation: {
      el: 'Το τετράγωνο έχει 4 πλευρές, όλες ίδιες, και 4 γωνίες.',
      en: 'A square has 4 sides that are all the same, and 4 corners.',
    },
  },
  {
    q: { el: 'Μια πόρτα μοιάζει με…', en: 'A door looks like a…' },
    options: { el: ['κύκλο', 'τρίγωνο', 'ορθογώνιο', 'τετράγωνο'], en: ['circle', 'triangle', 'rectangle', 'square'] },
    correct: 2,
    explanation: {
      el: 'Η πόρτα είναι ορθογώνιο: έχει 4 γωνίες, αλλά οι 2 πλευρές είναι μακριές και οι 2 κοντές.',
      en: 'A door is a rectangle: it has 4 corners, but 2 sides are long and 2 are short.',
    },
  },
  {
    q: { el: 'Πόσες γωνίες έχει το τετράγωνο;', en: 'How many corners does a square have?' },
    options: { el: ['3', '4', '0', '6'], en: ['3', '4', '0', '6'] },
    correct: 1,
    explanation: {
      el: 'Το τετράγωνο έχει 4 γωνίες, μία σε κάθε άκρη.',
      en: 'A square has 4 corners, one at each end.',
    },
  },
  {
    q: { el: 'Το τετράγωνο και το ορθογώνιο έχουν και τα δύο…', en: 'A square and a rectangle both have…' },
    options: { el: ['3 πλευρές', 'καθόλου γωνίες', 'μόνο ίσες πλευρές', '4 γωνίες'], en: ['3 sides', 'no corners', 'only equal sides', '4 corners'] },
    correct: 3,
    explanation: {
      el: 'Και τα δύο έχουν 4 πλευρές και 4 γωνίες. Στο τετράγωνο όμως όλες οι πλευρές είναι ίσες.',
      en: 'Both have 4 sides and 4 corners. But in a square all the sides are equal.',
    },
  },

  // ── 7–8: straight and curved lines ─────────────────────────────────────────
  {
    q: { el: 'Ποια γραμμή είναι ευθεία;', en: 'Which line is straight?' },
    options: { el: ['Η άκρη του χάρακα', 'Η άκρη της μπάλας', 'Το ουράνιο τόξο', 'Η άκρη του πιάτου'], en: ['The edge of a ruler', 'The edge of a ball', 'A rainbow', 'The edge of a plate'] },
    correct: 0,
    explanation: {
      el: 'Ο χάρακας έχει ευθεία γραμμή. Η μπάλα, το πιάτο και το ουράνιο τόξο έχουν καμπύλες.',
      en: 'A ruler has a straight line. A ball, a plate and a rainbow have curves.',
    },
  },
  {
    q: { el: 'Ποιο σχήμα έχει μόνο καμπύλη γραμμή;', en: 'Which shape has only a curved line?' },
    options: { el: ['Το τρίγωνο', 'Το τετράγωνο', 'Ο κύκλος', 'Το ορθογώνιο'], en: ['The triangle', 'The square', 'The circle', 'The rectangle'] },
    correct: 2,
    explanation: {
      el: 'Ο κύκλος είναι μία καμπύλη γραμμή που γυρίζει γύρω γύρω. Τα άλλα σχήματα έχουν ευθείες πλευρές.',
      en: 'A circle is one curved line that goes all the way round. The other shapes have straight sides.',
    },
  },

  // ── 9–12: repeating patterns ───────────────────────────────────────────────
  {
    q: { el: 'Κόκκινο, μπλε, κόκκινο, μπλε, κόκκινο, …; Τι έρχεται μετά;', en: 'Red, blue, red, blue, red, …? What comes next?' },
    options: { el: ['Κόκκινο', 'Μπλε', 'Κίτρινο', 'Πράσινο'], en: ['Red', 'Blue', 'Yellow', 'Green'] },
    correct: 1,
    explanation: {
      el: 'Το μοτίβο είναι «κόκκινο, μπλε» ξανά και ξανά. Μετά το κόκκινο έρχεται πάντα μπλε.',
      en: 'The pattern is “red, blue” again and again. After red always comes blue.',
    },
  },
  {
    q: { el: 'Κύκλος, τετράγωνο, τρίγωνο, κύκλος, τετράγωνο, …; Τι έρχεται μετά;', en: 'Circle, square, triangle, circle, square, …? What comes next?' },
    options: { el: ['Κύκλος', 'Τετράγωνο', 'Ορθογώνιο', 'Τρίγωνο'], en: ['Circle', 'Square', 'Rectangle', 'Triangle'] },
    correct: 3,
    explanation: {
      el: 'Το μοτίβο έχει 3 σχήματα: κύκλος, τετράγωνο, τρίγωνο. Μετά το τετράγωνο έρχεται το τρίγωνο.',
      en: 'The pattern has 3 shapes: circle, square, triangle. After the square comes the triangle.',
    },
  },
  {
    q: { el: '1, 2, 1, 2, 1, …; Ποιος αριθμός έρχεται μετά;', en: '1, 2, 1, 2, 1, …? Which number comes next?' },
    options: { el: ['1', '3', '2', '0'], en: ['1', '3', '2', '0'] },
    correct: 2,
    explanation: {
      el: 'Το μοτίβο είναι «1, 2» ξανά και ξανά. Μετά το 1 έρχεται το 2.',
      en: 'The pattern is “1, 2” again and again. After 1 comes 2.',
    },
  },
  {
    q: { el: 'Μεγάλο, μεγάλο, μικρό, μεγάλο, μεγάλο, …; Τι έρχεται μετά;', en: 'Big, big, small, big, big, …? What comes next?' },
    options: { el: ['Μεγάλο', 'Μικρό', 'Μεσαίο', 'Τίποτα'], en: ['Big', 'Small', 'Medium', 'Nothing'] },
    correct: 1,
    explanation: {
      el: 'Το μοτίβο είναι «μεγάλο, μεγάλο, μικρό». Μετά από δύο μεγάλα έρχεται ένα μικρό.',
      en: 'The pattern is “big, big, small”. After two bigs comes one small.',
    },
  },

  // ── 13–15: symmetry ────────────────────────────────────────────────────────
  {
    q: { el: 'Διπλώνεις ένα χαρτί στη μέση και οι δύο μεριές είναι ίδιες. Πώς το λέμε αυτό;', en: 'You fold a paper in half and the two sides are the same. What do we call this?' },
    options: { el: ['Μοτίβο', 'Συμμετρία', 'Γωνία', 'Καμπύλη'], en: ['Pattern', 'Symmetry', 'Corner', 'Curve'] },
    correct: 1,
    explanation: {
      el: 'Όταν οι δύο μεριές είναι ίδιες σαν καθρέφτης, το σχήμα έχει συμμετρία.',
      en: 'When the two sides are the same, like a mirror, the shape has symmetry.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι συμμετρικό;', en: 'Which of these is symmetrical?' },
    options: { el: ['Μια πεταλούδα', 'Ένα παπούτσι', 'Ένα μισοφάγωτο μήλο', 'Ένα κλειδί'], en: ['A butterfly', 'A shoe', 'A half-eaten apple', 'A key'] },
    correct: 0,
    explanation: {
      el: 'Η πεταλούδα έχει δύο ίδια φτερά, ένα αριστερά και ένα δεξιά. Είναι συμμετρική.',
      en: 'A butterfly has two matching wings, one on the left and one on the right. It is symmetrical.',
    },
  },
  {
    q: { el: 'Ποιο γράμμα είναι ίδιο αριστερά και δεξιά;', en: 'Which letter looks the same on the left and on the right?' },
    options: { el: ['Γ', 'Ρ', 'Α', 'Σ'], en: ['F', 'R', 'A', 'S'] },
    correct: 2,
    explanation: {
      el: 'Το Α είναι συμμετρικό: αν το διπλώσεις στη μέση, οι δύο μεριές ταιριάζουν.',
      en: 'The letter A is symmetrical: if you fold it down the middle, the two sides match.',
    },
  },

  // ── 16–18: left and right ──────────────────────────────────────────────────
  {
    q: { el: 'Με ποιο χέρι χαιρετάμε συνήθως;', en: 'Which hand do we usually wave with?' },
    options: { el: ['Με το αριστερό', 'Με το δεξί', 'Με κανένα', 'Με τα πόδια'], en: ['The left', 'The right', 'Neither', 'Our feet'] },
    correct: 1,
    explanation: {
      el: 'Οι περισσότεροι χαιρετάμε με το δεξί χέρι. Το δεξί είναι το χέρι που γράφουν οι πιο πολλοί.',
      en: 'Most of us wave with the right hand. The right hand is the one most people write with.',
    },
  },
  {
    q: { el: 'Η Ελένη κάθεται ανάμεσα στον Νίκο και στη Μαρία. Ο Νίκος είναι αριστερά της. Πού είναι η Μαρία;', en: 'Eleni sits between Nikos and Maria. Nikos is on her left. Where is Maria?' },
    options: { el: ['Αριστερά της', 'Μπροστά της', 'Δεξιά της', 'Πίσω της'], en: ['On her left', 'In front of her', 'On her right', 'Behind her'] },
    correct: 2,
    explanation: {
      el: 'Η Ελένη είναι στη μέση. Αν ο Νίκος είναι αριστερά, η Μαρία είναι από την άλλη μεριά: δεξιά.',
      en: 'Eleni is in the middle. If Nikos is on the left, Maria is on the other side: the right.',
    },
  },
  {
    q: { el: 'Ο Γιώργος κοιτάζει εσένα. Σηκώνει το δεξί του χέρι. Από ποια μεριά το βλέπεις εσύ;', en: 'Giorgos is facing you. He lifts his right hand. On which side do you see it?' },
    options: { el: ['Στη δική σου δεξιά', 'Στη δική σου αριστερή', 'Στη μέση', 'Δεν φαίνεται'], en: ['On your right', 'On your left', 'In the middle', 'You cannot see it'] },
    correct: 1,
    explanation: {
      el: 'Όταν κάποιος σε κοιτάζει, το δεξί του χέρι είναι απέναντι από το δικό σου αριστερό. Σαν καθρέφτης!',
      en: 'When someone faces you, their right hand is across from your left hand. Like a mirror!',
    },
  },
];
