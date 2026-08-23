/**
 * Δ' Δημοτικού · Μαθηματικά · Περίμετρος και εμβαδόν
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–6   perimeter: what it is, adding the sides of squares, rectangles, triangles, pentagons, a missing side
 *   7–12  area: what it is, counting square units, squares and rectangles, the unit τ.εκ., a missing side
 *   13–18 outline vs surface: fence or carpet? word problems that mix the two and cost in €
 *
 * Distractors are the mistakes children actually make: giving the area instead of the perimeter (and the reverse),
 * adding the two sides only once, multiplying the sides of a triangle, mixing up the unit.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_MATH_PERIMETER_AREA: QuizQuestion[] = [
  // ── 1–6: perimeter ──────────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι η περίμετρος ενός σχήματος;', en: 'What is the perimeter of a shape?' },
    options: {
      el: ['Το μήκος της γραμμής γύρω-γύρω από το σχήμα', 'Πόσο χώρο πιάνει το σχήμα μέσα', 'Το ύψος του σχήματος', 'Πόσες γωνίες έχει το σχήμα'],
      en: ['The length of the line all the way around the shape', 'How much space the shape takes up inside', 'The height of the shape', 'How many corners the shape has'],
    },
    correct: 0,
    explanation: {
      el: 'Η περίμετρος είναι ο δρόμος που κάνει ένα μυρμήγκι αν περπατήσει γύρω-γύρω από το σχήμα. Προσθέτουμε όλες τις πλευρές.',
      en: 'The perimeter is the path an ant walks if it goes all the way around the shape. We add up all the sides.',
    },
  },
  {
    q: { el: 'Ένα τετράγωνο έχει πλευρά 5 εκ. Πόση είναι η περίμετρός του;', en: 'A square has a side of 5 cm. What is its perimeter?' },
    options: { el: ['25 εκ.', '20 εκ.', '10 εκ.', '9 εκ.'], en: ['25 cm', '20 cm', '10 cm', '9 cm'] },
    correct: 1,
    explanation: {
      el: 'Το τετράγωνο έχει 4 ίσες πλευρές: 5 + 5 + 5 + 5 = 4 × 5 = 20 εκ.',
      en: 'A square has 4 equal sides: 5 + 5 + 5 + 5 = 4 × 5 = 20 cm.',
    },
  },
  {
    q: { el: 'Ένα ορθογώνιο έχει μήκος 6 εκ. και πλάτος 4 εκ. Πόση είναι η περίμετρός του;', en: 'A rectangle is 6 cm long and 4 cm wide. What is its perimeter?' },
    options: { el: ['10 εκ.', '24 εκ.', '16 εκ.', '20 εκ.'], en: ['10 cm', '24 cm', '16 cm', '20 cm'] },
    correct: 3,
    explanation: {
      el: 'Το ορθογώνιο έχει δύο μήκη και δύο πλάτη: 6 + 4 + 6 + 4 = 20 εκ. Το 10 είναι μόνο η μισή διαδρομή!',
      en: 'A rectangle has two lengths and two widths: 6 + 4 + 6 + 4 = 20 cm. 10 is only half the way round!',
    },
  },
  {
    q: { el: 'Ένα τρίγωνο έχει πλευρές 3 εκ., 4 εκ. και 5 εκ. Πόση είναι η περίμετρός του;', en: 'A triangle has sides of 3 cm, 4 cm and 5 cm. What is its perimeter?' },
    options: { el: ['60 εκ.', '12 εκ.', '7 εκ.', '9 εκ.'], en: ['60 cm', '12 cm', '7 cm', '9 cm'] },
    correct: 1,
    explanation: {
      el: 'Για την περίμετρο προσθέτουμε, δεν πολλαπλασιάζουμε: 3 + 4 + 5 = 12 εκ.',
      en: 'For the perimeter we add, we do not multiply: 3 + 4 + 5 = 12 cm.',
    },
  },
  {
    q: { el: 'Ένα πεντάγωνο έχει 5 ίσες πλευρές των 3 εκ. Πόση είναι η περίμετρός του;', en: 'A pentagon has 5 equal sides of 3 cm. What is its perimeter?' },
    options: { el: ['8 εκ.', '12 εκ.', '15 εκ.', '9 εκ.'], en: ['8 cm', '12 cm', '15 cm', '9 cm'] },
    correct: 2,
    explanation: {
      el: 'Πέντε πλευρές από 3 εκ.: 5 × 3 = 15 εκ. Όταν οι πλευρές είναι ίσες, ο πολλαπλασιασμός μάς γλιτώνει χρόνο.',
      en: 'Five sides of 3 cm: 5 × 3 = 15 cm. When the sides are equal, multiplying saves time.',
    },
  },
  {
    q: { el: 'Ένα ορθογώνιο έχει περίμετρο 14 εκ. και μήκος 5 εκ. Πόσο είναι το πλάτος του;', en: 'A rectangle has a perimeter of 14 cm and a length of 5 cm. What is its width?' },
    options: { el: ['9 εκ.', '4 εκ.', '2 εκ.', '7 εκ.'], en: ['9 cm', '4 cm', '2 cm', '7 cm'] },
    correct: 2,
    explanation: {
      el: 'Τα δύο μήκη κάνουν 5 + 5 = 10. Μένουν 14 − 10 = 4 εκ. για τα δύο πλάτη, άρα κάθε πλάτος είναι 4 ÷ 2 = 2 εκ.',
      en: 'The two lengths make 5 + 5 = 10. That leaves 14 − 10 = 4 cm for the two widths, so each width is 4 ÷ 2 = 2 cm.',
    },
  },

  // ── 7–12: area ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Τι μετράμε με το εμβαδόν;', en: 'What do we measure with area?' },
    options: {
      el: ['Πόσο μακριά είναι η γραμμή γύρω από το σχήμα', 'Πόση επιφάνεια καλύπτει το σχήμα', 'Πόσο βαρύ είναι το σχήμα', 'Πόσο ψηλό είναι το σχήμα'],
      en: ['How long the line around the shape is', 'How much surface the shape covers', 'How heavy the shape is', 'How tall the shape is'],
    },
    correct: 1,
    explanation: {
      el: 'Το εμβαδόν είναι η επιφάνεια μέσα στο σχήμα, σαν να τη χρωματίζεις. Το μετράμε σε τετραγωνάκια.',
      en: 'Area is the surface inside the shape, as if you coloured it in. We measure it in little squares.',
    },
  },
  {
    q: { el: 'Ένα ορθογώνιο σε τετραγωνισμένο χαρτί έχει 3 σειρές με 4 τετραγωνάκια η καθεμία. Πόσο είναι το εμβαδόν του;', en: 'A rectangle on squared paper has 3 rows of 4 little squares each. What is its area?' },
    options: { el: ['7 τετραγωνάκια', '14 τετραγωνάκια', '12 τετραγωνάκια', '16 τετραγωνάκια'], en: ['7 squares', '14 squares', '12 squares', '16 squares'] },
    correct: 2,
    explanation: {
      el: '3 σειρές × 4 τετραγωνάκια = 12 τετραγωνάκια. Μπορείς και να τα μετρήσεις ένα-ένα!',
      en: '3 rows × 4 squares = 12 squares. You can also count them one by one!',
    },
  },
  {
    q: { el: 'Ένα τετράγωνο έχει πλευρά 6 εκ. Πόσο είναι το εμβαδόν του;', en: 'A square has a side of 6 cm. What is its area?' },
    options: { el: ['24 τ.εκ.', '12 τ.εκ.', '36 τ.εκ.', '30 τ.εκ.'], en: ['24 sq cm', '12 sq cm', '36 sq cm', '30 sq cm'] },
    correct: 2,
    explanation: {
      el: 'Εμβαδόν τετραγώνου = πλευρά × πλευρά = 6 × 6 = 36 τ.εκ. (Το 24 είναι η περίμετρος, όχι το εμβαδόν!)',
      en: 'Area of a square = side × side = 6 × 6 = 36 sq cm. (24 is the perimeter, not the area!)',
    },
  },
  {
    q: { el: 'Ένα ορθογώνιο έχει μήκος 7 εκ. και πλάτος 3 εκ. Πόσο είναι το εμβαδόν του;', en: 'A rectangle is 7 cm long and 3 cm wide. What is its area?' },
    options: { el: ['10 τ.εκ.', '21 τ.εκ.', '20 τ.εκ.', '24 τ.εκ.'], en: ['10 sq cm', '21 sq cm', '20 sq cm', '24 sq cm'] },
    correct: 1,
    explanation: {
      el: 'Εμβαδόν ορθογωνίου = μήκος × πλάτος = 7 × 3 = 21 τ.εκ.',
      en: 'Area of a rectangle = length × width = 7 × 3 = 21 sq cm.',
    },
  },
  {
    q: { el: 'Με ποια μονάδα μετράμε το εμβαδόν;', en: 'Which unit do we use to measure area?' },
    options: { el: ['Εκατοστά (εκ.)', 'Λίτρα (λ.)', 'Κιλά (κ.)', 'Τετραγωνικά εκατοστά (τ.εκ.)'], en: ['Centimetres (cm)', 'Litres (l)', 'Kilograms (kg)', 'Square centimetres (sq cm)'] },
    correct: 3,
    explanation: {
      el: 'Το εμβαδόν το μετράμε σε τετραγωνάκια, γι\' αυτό λέμε «τετραγωνικά» εκατοστά. Τα σκέτα εκατοστά είναι για μήκη και περιμέτρους.',
      en: 'We measure area in little squares, so we say “square” centimetres. Plain centimetres are for lengths and perimeters.',
    },
  },
  {
    q: { el: 'Ένα ορθογώνιο έχει εμβαδόν 24 τ.εκ. και πλάτος 4 εκ. Πόσο είναι το μήκος του;', en: 'A rectangle has an area of 24 sq cm and a width of 4 cm. What is its length?' },
    options: { el: ['6 εκ.', '8 εκ.', '20 εκ.', '28 εκ.'], en: ['6 cm', '8 cm', '20 cm', '28 cm'] },
    correct: 0,
    explanation: {
      el: 'Σκέψου: 4 × ___ = 24. Η απάντηση είναι 6, γιατί 4 × 6 = 24. Δηλαδή 24 ÷ 4 = 6 εκ.',
      en: 'Think: 4 × ___ = 24. The answer is 6, because 4 × 6 = 24. That is 24 ÷ 4 = 6 cm.',
    },
  },

  // ── 13–18: outline vs surface, word problems ───────────────────────────────
  {
    q: { el: 'Ο Γιώργος θέλει να βάλει φράχτη γύρω-γύρω από τον κήπο του. Τι πρέπει να υπολογίσει;', en: 'George wants to put a fence all the way around his garden. What does he need to work out?' },
    options: { el: ['Το εμβαδόν του κήπου', 'Την περίμετρο του κήπου', 'Το ύψος του κήπου', 'Το βάρος του κήπου'], en: ['The area of the garden', 'The perimeter of the garden', 'The height of the garden', 'The weight of the garden'] },
    correct: 1,
    explanation: {
      el: 'Ο φράχτης πάει στη γραμμή γύρω από τον κήπο, άρα χρειάζεται την περίμετρο.',
      en: 'The fence goes along the line around the garden, so he needs the perimeter.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει ένα χαλί που να σκεπάζει όλο το πάτωμα του δωματίου της. Τι πρέπει να υπολογίσει;', en: 'Helen wants a carpet that covers the whole floor of her room. What does she need to work out?' },
    options: { el: ['Την περίμετρο του πατώματος', 'Το μήκος μόνο', 'Το εμβαδόν του πατώματος', 'Το πλάτος μόνο'], en: ['The perimeter of the floor', 'Only the length', 'The area of the floor', 'Only the width'] },
    correct: 2,
    explanation: {
      el: 'Το χαλί σκεπάζει την επιφάνεια μέσα στο δωμάτιο, άρα χρειάζεται το εμβαδόν.',
      en: 'The carpet covers the surface inside the room, so she needs the area.',
    },
  },
  {
    q: { el: 'Ο κήπος του Νίκου έχει μήκος 8 μ. και πλάτος 5 μ. Πόσα μέτρα φράχτη χρειάζεται για να τον κλείσει γύρω-γύρω;', en: 'Nick\'s garden is 8 m long and 5 m wide. How many metres of fence does he need to go all the way around it?' },
    options: { el: ['40 μ.', '13 μ.', '26 μ.', '21 μ.'], en: ['40 m', '13 m', '26 m', '21 m'] },
    correct: 2,
    explanation: {
      el: 'Φράχτης = περίμετρος: 8 + 5 + 8 + 5 = 26 μ. Το 40 είναι το εμβαδόν (8 × 5), που δεν μας χρειάζεται εδώ.',
      en: 'Fence = perimeter: 8 + 5 + 8 + 5 = 26 m. 40 is the area (8 × 5), which we do not need here.',
    },
  },
  {
    q: { el: 'Η Μαρία στρώνει πλακάκια σε ένα πάτωμα 4 μ. × 6 μ. Κάθε πλακάκι καλύπτει 1 τ.μ. Πόσα πλακάκια χρειάζεται;', en: 'Maria is tiling a floor that is 4 m × 6 m. Each tile covers 1 sq m. How many tiles does she need?' },
    options: { el: ['20', '10', '48', '24'], en: ['20', '10', '48', '24'] },
    correct: 3,
    explanation: {
      el: 'Τα πλακάκια σκεπάζουν επιφάνεια, άρα εμβαδόν: 4 × 6 = 24 τ.μ. = 24 πλακάκια.',
      en: 'Tiles cover a surface, so we need the area: 4 × 6 = 24 sq m = 24 tiles.',
    },
  },
  {
    q: { el: 'Ένα τετράγωνο με πλευρά 4 εκ. και ένα ορθογώνιο 6 εκ. × 2 εκ. Τι ισχύει;', en: 'A square with a side of 4 cm and a rectangle 6 cm × 2 cm. Which is true?' },
    options: {
      el: ['Έχουν ίδια περίμετρο, αλλά το τετράγωνο έχει μεγαλύτερο εμβαδόν', 'Έχουν ίδιο εμβαδόν, αλλά διαφορετική περίμετρο', 'Έχουν ίδια περίμετρο και ίδιο εμβαδόν', 'Το ορθογώνιο έχει μεγαλύτερη περίμετρο'],
      en: ['They have the same perimeter, but the square has a bigger area', 'They have the same area, but a different perimeter', 'They have the same perimeter and the same area', 'The rectangle has a bigger perimeter'],
    },
    correct: 0,
    explanation: {
      el: 'Περίμετροι: 4 × 4 = 16 και 6 + 2 + 6 + 2 = 16 — ίδιες! Εμβαδά: 4 × 4 = 16 τ.εκ. και 6 × 2 = 12 τ.εκ. Ίδια περίμετρος δεν σημαίνει ίδιο εμβαδόν.',
      en: 'Perimeters: 4 × 4 = 16 and 6 + 2 + 6 + 2 = 16 — the same! Areas: 4 × 4 = 16 sq cm and 6 × 2 = 12 sq cm. Same perimeter does not mean same area.',
    },
  },
  {
    q: { el: 'Ο Νίκος βάζει φράχτη σε ένα παρτέρι 5 μ. × 3 μ. Κάθε μέτρο φράχτη κοστίζει 2 €. Πόσο θα πληρώσει;', en: 'Nick is fencing a flower bed that is 5 m × 3 m. Each metre of fence costs €2. How much will he pay?' },
    options: { el: ['30 €', '16 €', '32 €', '15 €'], en: ['€30', '€16', '€32', '€15'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα η περίμετρος: 5 + 3 + 5 + 3 = 16 μ. Μετά το κόστος: 16 × 2 € = 32 €.',
      en: 'First the perimeter: 5 + 3 + 5 + 3 = 16 m. Then the cost: 16 × €2 = €32.',
    },
  },
];
