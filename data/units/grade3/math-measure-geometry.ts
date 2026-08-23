/**
 * Γ' Δημοτικού · Μαθηματικά · Γεωμετρία & Μετρήσεις
 * ==================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Order, easiest to hardest:
 *   1–2   right angles: where we see them, how many a square has
 *   3–4   the ruler measures length, the compass draws circles
 *   5–6   symmetry: the fold line, the axis of symmetry
 *   7     tilings: which shape covers a floor with no gaps
 *   8–11  cm / mm / m and a ribbon word problem
 *   12–14 grams and kilos, with real-life weights
 *   15–16 area by counting little squares
 *   17–18 the clock to the minute and a "how long" word problem
 * Distractors are real child mistakes: the wrong unit, 10 instead of 100,
 * perimeter instead of area, adding instead of multiplying, reading the
 * clock hands the wrong way round. The UI shuffles the options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_MEASURE_GEOMETRY: QuizQuestion[] = [
  // ── 1–2: right angles ───────────────────────────────────────────────────────
  {
    q: { el: 'Πόσες ορθές γωνίες έχει ένα τετράγωνο;', en: 'How many right angles does a square have?' },
    options: { el: ['2', '4', '3', '1'], en: ['2', '4', '3', '1'] },
    correct: 1,
    explanation: {
      el: 'Το τετράγωνο έχει 4 γωνίες και όλες είναι ορθές, σαν τη γωνία μιας σελίδας.',
      en: 'A square has 4 corners and all of them are right angles, like the corner of a page.',
    },
  },
  {
    q: { el: 'Η γωνία στην άκρη ενός βιβλίου είναι…', en: 'The angle at the corner of a book is…' },
    options: { el: ['ορθή γωνία', 'μικρότερη από ορθή', 'μεγαλύτερη από ορθή', 'ευθεία γραμμή'], en: ['a right angle', 'smaller than a right angle', 'bigger than a right angle', 'a straight line'] },
    correct: 0,
    explanation: {
      el: 'Οι γωνίες του βιβλίου, της πόρτας και του παραθύρου είναι ορθές. Τις ελέγχουμε με τη γωνία του χάρακα.',
      en: 'The corners of a book, a door and a window are right angles. We check them with the corner of a ruler.',
    },
  },

  // ── 3–4: ruler and compass ─────────────────────────────────────────────────
  {
    q: { el: 'Με ποιο όργανο μετράμε πόσο μακρύ είναι ένα μολύβι;', en: 'Which tool do we use to measure how long a pencil is?' },
    options: { el: ['με τη ζυγαριά', 'με τον διαβήτη', 'με τον χάρακα', 'με το ρολόι'], en: ['a scale', 'a compass', 'a ruler', 'a clock'] },
    correct: 2,
    explanation: {
      el: 'Ο χάρακας μετράει μήκος σε εκατοστά. Βάζουμε το 0 στην αρχή του μολυβιού και διαβάζουμε πού τελειώνει.',
      en: 'A ruler measures length in centimetres. Put the 0 at the start of the pencil and read where it ends.',
    },
  },
  {
    q: { el: 'Τι σχεδιάζουμε με τον διαβήτη;', en: 'What do we draw with a compass?' },
    options: { el: ['τρίγωνο', 'κύκλο', 'τετράγωνο', 'ευθεία γραμμή'], en: ['a triangle', 'a circle', 'a square', 'a straight line'] },
    correct: 1,
    explanation: {
      el: 'Ο διαβήτης σχεδιάζει κύκλους: η μύτη του μένει στο κέντρο και το μολύβι γυρίζει γύρω γύρω.',
      en: 'A compass draws circles: its point stays in the centre and the pencil turns all the way round.',
    },
  },

  // ── 5–6: symmetry ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο γράμμα είναι συμμετρικό; (Αν το διπλώσεις στη μέση, τα δύο μισά ταιριάζουν.)', en: 'Which letter is symmetrical? (If you fold it down the middle, the two halves match.)' },
    options: { el: ['Α', 'Ρ', 'Γ', 'Ζ'], en: ['A', 'R', 'G', 'Z'] },
    correct: 0,
    explanation: {
      el: 'Το Α έχει μια γραμμή στη μέση που το χωρίζει σε δύο ίδια μισά. Το Ρ, το Γ και το Ζ δεν έχουν.',
      en: 'A has a line down the middle that splits it into two matching halves. R, G and Z do not.',
    },
  },
  {
    q: { el: 'Η Ελένη διπλώνει ένα χαρτί στη μέση και κόβει μια καρδιά. Η γραμμή της δίπλωσης λέγεται…', en: 'Eleni folds a paper in half and cuts out a heart. The fold line is called…' },
    options: { el: ['ορθή γωνία', 'περίμετρος', 'ακτίνα', 'άξονας συμμετρίας'], en: ['a right angle', 'the perimeter', 'a radius', 'an axis of symmetry'] },
    correct: 3,
    explanation: {
      el: 'Η γραμμή που χωρίζει ένα σχήμα σε δύο ίδια μισά λέγεται άξονας συμμετρίας.',
      en: 'The line that splits a shape into two matching halves is called the axis of symmetry.',
    },
  },

  // ── 7: tilings ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο σχήμα καλύπτει το πάτωμα χωρίς κενά, όπως τα πλακάκια;', en: 'Which shape covers a floor with no gaps, like tiles?' },
    options: { el: ['ο κύκλος', 'το τετράγωνο', 'το οκτάγωνο', 'η καρδιά'], en: ['a circle', 'a square', 'an octagon', 'a heart'] },
    correct: 1,
    explanation: {
      el: 'Τα τετράγωνα μπαίνουν το ένα δίπλα στο άλλο χωρίς κενά. Οι κύκλοι αφήνουν πάντα κενά ανάμεσά τους.',
      en: 'Squares fit side by side with no gaps. Circles always leave gaps between them.',
    },
  },

  // ── 8–11: cm, mm, m ────────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα χιλιοστά έχει 1 εκατοστό;', en: 'How many millimetres are in 1 centimetre?' },
    options: { el: ['10', '100', '1.000', '2'], en: ['10', '100', '1,000', '2'] },
    correct: 0,
    explanation: {
      el: '1 εκατοστό = 10 χιλιοστά. Κοίτα τον χάρακα: ανάμεσα σε δύο αριθμούς υπάρχουν 10 μικρές γραμμούλες.',
      en: '1 centimetre = 10 millimetres. Look at a ruler: between two numbers there are 10 little lines.',
    },
  },
  {
    q: { el: 'Πόσα εκατοστά έχει 1 μέτρο;', en: 'How many centimetres are in 1 metre?' },
    options: { el: ['10', '1.000', '100', '50'], en: ['10', '1,000', '100', '50'] },
    correct: 2,
    explanation: {
      el: '1 μέτρο = 100 εκατοστά. Το μέτρο είναι περίπου όσο ένα μεγάλο βήμα.',
      en: '1 metre = 100 centimetres. A metre is about one big step.',
    },
  },
  {
    q: { el: 'Ποια μονάδα ταιριάζει για να μετρήσουμε το μήκος της αυλής του σχολείου;', en: 'Which unit fits best for measuring the length of the school yard?' },
    options: { el: ['χιλιοστά', 'εκατοστά', 'μέτρα', 'γραμμάρια'], en: ['millimetres', 'centimetres', 'metres', 'grams'] },
    correct: 2,
    explanation: {
      el: 'Για μεγάλα μήκη, όπως μια αυλή, μετράμε σε μέτρα. Τα εκατοστά είναι για μικρά πράγματα, όπως ένα μολύβι.',
      en: 'For long distances, like a yard, we measure in metres. Centimetres are for small things, like a pencil.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει μια κορδέλα 1 μέτρο. Κόβει 35 εκατοστά. Πόσα εκατοστά μένουν;', en: 'Nikos has a ribbon 1 metre long. He cuts off 35 centimetres. How many centimetres are left?' },
    options: { el: ['65', '75', '35', '135'], en: ['65', '75', '35', '135'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα κάνουμε το μέτρο εκατοστά: 1 μ. = 100 εκ. Μετά: 100 − 35 = 65 εκατοστά.',
      en: 'First turn the metre into centimetres: 1 m = 100 cm. Then: 100 − 35 = 65 centimetres.',
    },
  },

  // ── 12–14: grams and kilos ─────────────────────────────────────────────────
  {
    q: { el: 'Πόσα γραμμάρια έχει 1 κιλό;', en: 'How many grams are in 1 kilo?' },
    options: { el: ['100', '1.000', '10', '500'], en: ['100', '1,000', '10', '500'] },
    correct: 1,
    explanation: {
      el: '1 κιλό = 1.000 γραμμάρια. Η λέξη «κιλό» σημαίνει χίλια!',
      en: '1 kilo = 1,000 grams. The word “kilo” means a thousand!',
    },
  },
  {
    q: { el: 'Η Μαρία αγοράζει μισό κιλό τυρί. Πόσα γραμμάρια είναι;', en: 'Maria buys half a kilo of cheese. How many grams is that?' },
    options: { el: ['50', '250', '500', '1.000'], en: ['50', '250', '500', '1,000'] },
    correct: 2,
    explanation: {
      el: 'Το κιλό είναι 1.000 γραμμάρια, άρα το μισό κιλό είναι 500 γραμμάρια.',
      en: 'A kilo is 1,000 grams, so half a kilo is 500 grams.',
    },
  },
  {
    q: { el: 'Ένα μήλο ζυγίζει περίπου…', en: 'An apple weighs about…' },
    options: { el: ['150 γραμμάρια', '15 γραμμάρια', '15 κιλά', '1 κιλό'], en: ['150 grams', '15 grams', '15 kilos', '1 kilo'] },
    correct: 0,
    explanation: {
      el: 'Ένα μήλο ζυγίζει γύρω στα 150 γραμμάρια. Για να φτιάξεις 1 κιλό χρειάζεσαι 6 με 7 μήλα!',
      en: 'An apple weighs around 150 grams. You need 6 or 7 apples to make 1 kilo!',
    },
  },

  // ── 15–16: area by counting squares ───────────────────────────────────────
  {
    q: { el: 'Ένα ορθογώνιο έχει 3 σειρές με 4 τετραγωνάκια η καθεμία. Πόσα τετραγωνάκια καλύπτει;', en: 'A rectangle has 3 rows with 4 little squares in each. How many little squares does it cover?' },
    options: { el: ['7', '14', '12', '16'], en: ['7', '14', '12', '16'] },
    correct: 2,
    explanation: {
      el: '3 σειρές × 4 τετραγωνάκια = 12 τετραγωνάκια. Αυτό είναι το εμβαδόν του.',
      en: '3 rows × 4 little squares = 12 little squares. That is its area.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ζωγραφίζει στο τετράδιο ένα τετράγωνο με πλευρά 5 τετραγωνάκια. Πόσα τετραγωνάκια είναι μέσα του;', en: 'Giorgos draws a square in his notebook with a side of 5 little squares. How many little squares are inside it?' },
    options: { el: ['10', '20', '25', '5'], en: ['10', '20', '25', '5'] },
    correct: 2,
    explanation: {
      el: '5 σειρές με 5 τετραγωνάκια: 5 × 5 = 25. (Το 20 είναι τα τετραγωνάκια γύρω γύρω, όχι μέσα!)',
      en: '5 rows of 5 little squares: 5 × 5 = 25. (20 is the squares around the edge, not inside!)',
    },
  },

  // ── 17–18: the clock to the minute ────────────────────────────────────────
  {
    q: { el: 'Ο μικρός δείκτης είναι λίγο μετά το 7 και ο μεγάλος δείκτης δείχνει το 3. Τι ώρα είναι;', en: 'The short hand is just past the 7 and the long hand points to the 3. What time is it?' },
    options: { el: ['7:03', '7:15', '3:35', '7:30'], en: ['7:03', '7:15', '3:35', '7:30'] },
    correct: 1,
    explanation: {
      el: 'Ο μικρός δείκτης λέει την ώρα (7). Ο μεγάλος μετράει λεπτά ανά 5: στο 3 είναι 3 × 5 = 15 λεπτά. Άρα 7:15.',
      en: 'The short hand tells the hour (7). The long hand counts minutes in fives: at the 3 it is 3 × 5 = 15 minutes. So 7:15.',
    },
  },
  {
    q: { el: 'Το μάθημα αρχίζει στις 8:10 και κρατάει 45 λεπτά. Τι ώρα τελειώνει;', en: 'The lesson starts at 8:10 and lasts 45 minutes. What time does it end?' },
    options: { el: ['8:55', '8:45', '9:05', '8:50'], en: ['8:55', '8:45', '9:05', '8:50'] },
    correct: 0,
    explanation: {
      el: '8:10 + 45 λεπτά: 10 + 45 = 55 λεπτά. Η ώρα μένει 8, άρα τελειώνει στις 8:55.',
      en: '8:10 + 45 minutes: 10 + 45 = 55 minutes. The hour stays 8, so it ends at 8:55.',
    },
  },
];
