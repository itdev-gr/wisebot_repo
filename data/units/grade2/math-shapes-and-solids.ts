/**
 * Β' Δημοτικού · Μαθηματικά · Σχήματα και στερεά
 * ================================================
 * Original questions for a child of 7–8 (curriculum topics only — no textbook text).
 * What the unit covers, in order:
 *   1–7   the solids: cube, sphere, cylinder, cone, pyramid — spotting them in everyday things
 *   8–10  lines: straight / curved, parallel (never meet), perpendicular (make a corner)
 *   11–14 symmetry: which shapes fold in half exactly, where the fold line goes
 *   15–18 geometric patterns: what comes next, what is missing, how many in the next step
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_MATH_SHAPES_AND_SOLIDS: QuizQuestion[] = [
  // ── 1–7: solids ────────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα ζάρι έχει σχήμα…', en: 'A dice has the shape of a…' },
    options: { el: ['κύβου', 'σφαίρας', 'κώνου', 'κυλίνδρου'], en: ['cube', 'sphere', 'cone', 'cylinder'] },
    correct: 0,
    explanation: {
      el: 'Το ζάρι είναι κύβος. Ο κύβος έχει 6 ίδιες τετράγωνες έδρες.',
      en: 'A dice is a cube. A cube has 6 equal square faces.',
    },
  },
  {
    q: { el: 'Μια μπάλα ποδοσφαίρου έχει σχήμα…', en: 'A football has the shape of a…' },
    options: { el: ['κύβου', 'κώνου', 'σφαίρας', 'πυραμίδας'], en: ['cube', 'cone', 'sphere', 'pyramid'] },
    correct: 2,
    explanation: {
      el: 'Η μπάλα είναι σφαίρα. Η σφαίρα είναι ολόκληρη στρογγυλή και κυλάει προς κάθε μεριά.',
      en: 'A ball is a sphere. A sphere is round all over and rolls in every direction.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά έχει σχήμα κυλίνδρου;', en: 'Which of these has the shape of a cylinder?' },
    options: { el: ['ένα κουτί από δημητριακά', 'μια κονσέρβα', 'ένα πορτοκάλι', 'ένα ζάρι'], en: ['a cereal box', 'a tin can', 'an orange', 'a dice'] },
    correct: 1,
    explanation: {
      el: 'Η κονσέρβα είναι κύλινδρος: έχει δύο στρογγυλές βάσεις και κυλάει στο πλάι.',
      en: 'A tin can is a cylinder: it has two round ends and rolls on its side.',
    },
  },
  {
    q: { el: 'Το χωνάκι του παγωτού έχει σχήμα…', en: 'An ice-cream cone has the shape of a…' },
    options: { el: ['κυλίνδρου', 'σφαίρας', 'κύβου', 'κώνου'], en: ['cylinder', 'sphere', 'cube', 'cone'] },
    correct: 3,
    explanation: {
      el: 'Το χωνάκι είναι κώνος. Ο κώνος έχει μία στρογγυλή βάση και μια μύτη στην κορυφή.',
      en: 'The cone is a cone! A cone has one round base and a point at the top.',
    },
  },
  {
    q: { el: 'Ποιο στερεό έχει μία τετράγωνη βάση και τέσσερις τριγωνικές έδρες που ενώνονται σε μια μύτη;', en: 'Which solid has one square base and four triangle faces that meet at a point?' },
    options: { el: ['ο κύβος', 'η πυραμίδα', 'ο κώνος', 'ο κύλινδρος'], en: ['the cube', 'the pyramid', 'the cone', 'the cylinder'] },
    correct: 1,
    explanation: {
      el: 'Αυτή είναι η πυραμίδα. Οι τρίγωνες έδρες της ανεβαίνουν και ενώνονται στην κορυφή.',
      en: 'That is the pyramid. Its triangle faces go up and meet at the top.',
    },
  },
  {
    q: { el: 'Πόσες έδρες έχει ένας κύβος;', en: 'How many faces does a cube have?' },
    options: { el: ['4', '8', '6', '12'], en: ['4', '8', '6', '12'] },
    correct: 2,
    explanation: {
      el: 'Ο κύβος έχει 6 έδρες: πάνω, κάτω, μπροστά, πίσω, δεξιά, αριστερά.',
      en: 'A cube has 6 faces: top, bottom, front, back, right, left.',
    },
  },
  {
    q: { el: 'Ποιο στερεό δεν μπορεί να κυλήσει καθόλου;', en: 'Which solid cannot roll at all?' },
    options: { el: ['η σφαίρα', 'ο κύλινδρος', 'ο κώνος', 'ο κύβος'], en: ['the sphere', 'the cylinder', 'the cone', 'the cube'] },
    correct: 3,
    explanation: {
      el: 'Ο κύβος έχει μόνο επίπεδες έδρες, γι’ αυτό δεν κυλάει. Η σφαίρα, ο κύλινδρος και ο κώνος έχουν στρογγυλό μέρος και κυλάνε.',
      en: 'A cube has only flat faces, so it does not roll. The sphere, cylinder and cone have a round part and can roll.',
    },
  },

  // ── 8–10: lines ────────────────────────────────────────────────────────────
  {
    q: { el: 'Οι δύο ράγες του τρένου είναι γραμμές…', en: 'The two rails of a train track are lines that are…' },
    options: { el: ['παράλληλες', 'κάθετες', 'καμπύλες', 'τεθλασμένες'], en: ['parallel', 'perpendicular', 'curved', 'zigzag'] },
    correct: 0,
    explanation: {
      el: 'Οι ράγες είναι παράλληλες: πάνε δίπλα δίπλα και δεν συναντιούνται ποτέ.',
      en: 'The rails are parallel: they run side by side and never meet.',
    },
  },
  {
    q: { el: 'Δύο γραμμές που ενώνονται και κάνουν μια γωνία σαν τη γωνία του βιβλίου λέγονται…', en: 'Two lines that meet and make a corner like the corner of a book are called…' },
    options: { el: ['παράλληλες', 'καμπύλες', 'κάθετες', 'ίσες'], en: ['parallel', 'curved', 'perpendicular', 'equal'] },
    correct: 2,
    explanation: {
      el: 'Λέγονται κάθετες. Οι κάθετες γραμμές κάνουν μια ορθή γωνία, σαν το γράμμα Γ.',
      en: 'They are called perpendicular. Perpendicular lines make a right angle, like the letter L.',
    },
  },
  {
    q: { el: 'Τι γραμμές μπορείς να βρεις στο γράμμα Τ;', en: 'What kind of lines can you find in the letter T?' },
    options: { el: ['δύο καμπύλες γραμμές', 'δύο κάθετες γραμμές', 'δύο παράλληλες γραμμές', 'μία μόνο γραμμή'], en: ['two curved lines', 'two perpendicular lines', 'two parallel lines', 'only one line'] },
    correct: 1,
    explanation: {
      el: 'Το Τ έχει δύο ευθείες που ενώνονται και κάνουν ορθή γωνία, άρα είναι κάθετες.',
      en: 'The T has two straight lines that meet at a right angle, so they are perpendicular.',
    },
  },

  // ── 11–14: symmetry ────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα σχήμα είναι συμμετρικό όταν…', en: 'A shape is symmetrical when…' },
    options: { el: ['το διπλώνεις στη μέση και τα δύο μέρη ταιριάζουν ακριβώς', 'έχει πολλές γωνίες', 'είναι πολύ μεγάλο', 'έχει στρογγυλές πλευρές'], en: ['you fold it in half and both parts match exactly', 'it has many corners', 'it is very big', 'it has round sides'] },
    correct: 0,
    explanation: {
      el: 'Συμμετρικό σημαίνει ότι η μία μεριά είναι ο καθρέφτης της άλλης. Η γραμμή που διπλώνουμε λέγεται άξονας συμμετρίας.',
      en: 'Symmetrical means one side is the mirror of the other. The fold line is called the line of symmetry.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι συμμετρικό;', en: 'Which of these is symmetrical?' },
    options: { el: ['μια πεταλούδα με ανοιχτά φτερά', 'ένα παπούτσι από το πλάι', 'το γράμμα Ρ', 'ο αριθμός 7'], en: ['a butterfly with open wings', 'a shoe seen from the side', 'the letter P', 'the number 7'] },
    correct: 0,
    explanation: {
      el: 'Η πεταλούδα είναι συμμετρική: το αριστερό φτερό είναι ίδιο με το δεξί, σαν σε καθρέφτη.',
      en: 'The butterfly is symmetrical: the left wing is the same as the right one, like in a mirror.',
    },
  },
  {
    q: { el: 'Πόσους άξονες συμμετρίας έχει ένα τετράγωνο;', en: 'How many lines of symmetry does a square have?' },
    options: { el: ['1', '2', '4', '8'], en: ['1', '2', '4', '8'] },
    correct: 2,
    explanation: {
      el: 'Το τετράγωνο έχει 4 άξονες: δύο που περνούν από τις μέσες των πλευρών και δύο από τις γωνίες.',
      en: 'A square has 4 lines of symmetry: two through the middles of the sides and two through the corners.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά τα γράμματα είναι συμμετρικό;', en: 'Which of these letters is symmetrical?' },
    options: { el: ['Ζ', 'Ν', 'Γ', 'Α'], en: ['Z', 'N', 'L', 'A'] },
    correct: 3,
    explanation: {
      el: 'Το Α διπλώνει στη μέση και οι δύο μεριές ταιριάζουν. Τα Ζ, Ν και Γ δεν ταιριάζουν όπως κι αν τα διπλώσεις.',
      en: 'The A folds down the middle and both sides match. Z, N and L do not match however you fold them.',
    },
  },

  // ── 15–18: geometric patterns ──────────────────────────────────────────────
  {
    q: { el: 'Τι έρχεται μετά; κύκλος, τρίγωνο, κύκλος, τρίγωνο, κύκλος, …', en: 'What comes next? circle, triangle, circle, triangle, circle, …' },
    options: { el: ['κύκλος', 'τρίγωνο', 'τετράγωνο', 'τίποτα'], en: ['circle', 'triangle', 'square', 'nothing'] },
    correct: 1,
    explanation: {
      el: 'Το μοτίβο είναι «κύκλος, τρίγωνο» ξανά και ξανά. Μετά τον κύκλο έρχεται τρίγωνο.',
      en: 'The pattern is “circle, triangle” again and again. After a circle comes a triangle.',
    },
  },
  {
    q: { el: 'Τι έρχεται μετά; τετράγωνο, τετράγωνο, κύκλος, τετράγωνο, τετράγωνο, κύκλος, τετράγωνο, …', en: 'What comes next? square, square, circle, square, square, circle, square, …' },
    options: { el: ['κύκλος', 'τρίγωνο', 'τετράγωνο', 'ορθογώνιο'], en: ['circle', 'triangle', 'square', 'rectangle'] },
    correct: 2,
    explanation: {
      el: 'Το μοτίβο είναι «τετράγωνο, τετράγωνο, κύκλος». Έχουμε ένα τετράγωνο, άρα ακολουθεί άλλο ένα τετράγωνο και μετά ο κύκλος.',
      en: 'The pattern is “square, square, circle”. We have one square, so another square follows, then the circle.',
    },
  },
  {
    q: { el: 'Ποιο σχήμα λείπει; τρίγωνο, κύκλος, τετράγωνο, τρίγωνο, ___, τετράγωνο', en: 'Which shape is missing? triangle, circle, square, triangle, ___, square' },
    options: { el: ['τρίγωνο', 'τετράγωνο', 'κύκλος', 'αστέρι'], en: ['triangle', 'square', 'circle', 'star'] },
    correct: 2,
    explanation: {
      el: 'Το μοτίβο είναι «τρίγωνο, κύκλος, τετράγωνο». Ανάμεσα στο τρίγωνο και στο τετράγωνο πάει πάντα ο κύκλος.',
      en: 'The pattern is “triangle, circle, square”. Between the triangle and the square always goes the circle.',
    },
  },
  {
    q: { el: 'Ο Νίκος φτιάχνει πύργους με κύβους: 1 κύβος, 3 κύβοι, 5 κύβοι, 7 κύβοι. Πόσους κύβους θα έχει ο επόμενος πύργος;', en: 'Nikos builds towers with cubes: 1 cube, 3 cubes, 5 cubes, 7 cubes. How many cubes will the next tower have?' },
    options: { el: ['8', '10', '9', '11'], en: ['8', '10', '9', '11'] },
    correct: 2,
    explanation: {
      el: 'Κάθε πύργος έχει 2 κύβους παραπάνω από τον προηγούμενο: 1, 3, 5, 7, 9. Ο επόμενος έχει 7 + 2 = 9.',
      en: 'Each tower has 2 more cubes than the one before: 1, 3, 5, 7, 9. The next one has 7 + 2 = 9.',
    },
  },
];
