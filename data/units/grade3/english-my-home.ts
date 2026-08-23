/**
 * Γ' Δημοτικού · Αγγλικά · «Το Σπίτι μου» / "My Home"
 * ====================================================
 * Original questions for a child of 8–9 learning English (curriculum topics only —
 * nothing from ebooks.edu.gr). Ordered as a Γ' class meets them:
 *   1–5   rooms of the house: kitchen, bedroom, bathroom, living room, garden
 *   6–9   furniture and objects: bed, table, sofa, fridge, lamp, and where they belong
 *   10–13 "There is" / "There are" — one thing or many things
 *   14–15 the question "Is there…?" and its short answer
 *   16–18 "How many…?" — counting things in the house
 * Distractors are the mixes children really make: bedroom/bathroom, kitchen/garden,
 * «is» with plurals, «Is there» vs «Are there». The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ENGLISH_MY_HOME: QuizQuestion[] = [
  // ── 1–5: rooms of the house ───────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «κουζίνα» στα αγγλικά;', en: 'How do you say «κουζίνα» in English?' },
    options: { el: ['kitchen', 'bedroom', 'garden', 'bathroom'], en: ['kitchen', 'bedroom', 'garden', 'bathroom'] },
    correct: 0,
    explanation: {
      el: 'Η κουζίνα είναι «kitchen». Εκεί μαγειρεύουμε.',
      en: 'Κουζίνα is «kitchen». That is where we cook.',
    },
  },
  {
    q: { el: 'Πώς λέμε «υπνοδωμάτιο» στα αγγλικά;', en: 'How do you say «υπνοδωμάτιο» in English?' },
    options: { el: ['bathroom', 'bedroom', 'living room', 'kitchen'], en: ['bathroom', 'bedroom', 'living room', 'kitchen'] },
    correct: 1,
    explanation: {
      el: 'Το υπνοδωμάτιο είναι «bedroom»: bed = κρεβάτι, room = δωμάτιο. Προσοχή, το «bathroom» είναι το μπάνιο!',
      en: 'Υπνοδωμάτιο is «bedroom»: bed + room. Careful, «bathroom» is the room with the bath!',
    },
  },
  {
    q: { el: 'Σε ποιο δωμάτιο πλένουμε τα δόντια μας;', en: 'In which room do we brush our teeth?' },
    options: { el: ['kitchen', 'living room', 'bedroom', 'bathroom'], en: ['kitchen', 'living room', 'bedroom', 'bathroom'] },
    correct: 3,
    explanation: {
      el: 'Τα δόντια τα πλένουμε στο μπάνιο, δηλαδή στο «bathroom».',
      en: 'We brush our teeth in the «bathroom».',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει τηλεόραση με την οικογένειά της στον καναπέ. Πού είναι;', en: 'Maria is watching TV with her family on the sofa. Where is she?' },
    options: { el: ['in the bathroom', 'in the living room', 'in the garden', 'in the bedroom'], en: ['in the bathroom', 'in the living room', 'in the garden', 'in the bedroom'] },
    correct: 1,
    explanation: {
      el: 'Το σαλόνι είναι «living room». Εκεί καθόμαστε όλοι μαζί.',
      en: 'The σαλόνι is the «living room». That is where we all sit together.',
    },
  },
  {
    q: { el: 'Πώς λέμε «κήπος» στα αγγλικά;', en: 'How do you say «κήπος» in English?' },
    options: { el: ['garage', 'garden', 'kitchen', 'window'], en: ['garage', 'garden', 'kitchen', 'window'] },
    correct: 1,
    explanation: {
      el: 'Ο κήπος είναι «garden». Το «garage» είναι το γκαράζ, για το αυτοκίνητο.',
      en: 'Κήπος is «garden». A «garage» is for the car.',
    },
  },

  // ── 6–9: furniture ────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «κρεβάτι» στα αγγλικά;', en: 'How do you say «κρεβάτι» in English?' },
    options: { el: ['bath', 'bed', 'chair', 'desk'], en: ['bath', 'bed', 'chair', 'desk'] },
    correct: 1,
    explanation: {
      el: 'Το κρεβάτι είναι «bed». Το «bath» είναι η μπανιέρα.',
      en: 'Κρεβάτι is «bed». A «bath» is where you wash.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι ο «καναπές»;', en: 'Which one is the «καναπές»?' },
    options: { el: ['table', 'lamp', 'sofa', 'wardrobe'], en: ['table', 'lamp', 'sofa', 'wardrobe'] },
    correct: 2,
    explanation: {
      el: 'Ο καναπές είναι «sofa». Table = τραπέζι, lamp = λάμπα, wardrobe = ντουλάπα.',
      en: 'Καναπές is «sofa». Table = τραπέζι, lamp = λάμπα, wardrobe = ντουλάπα.',
    },
  },
  {
    q: { el: 'Πού βάζουμε το γάλα για να μείνει κρύο;', en: 'Where do we put the milk to keep it cold?' },
    options: { el: ['in the wardrobe', 'in the fridge', 'in the bath', 'on the sofa'], en: ['in the wardrobe', 'in the fridge', 'in the bath', 'on the sofa'] },
    correct: 1,
    explanation: {
      el: 'Το ψυγείο είναι «fridge». Το γάλα μπαίνει στο ψυγείο, στην κουζίνα.',
      en: 'Ψυγείο is «fridge». The milk goes in the fridge, in the kitchen.',
    },
  },
  {
    q: { el: 'Ποιο έπιπλο ΔΕΝ περιμένουμε να βρούμε σε ένα υπνοδωμάτιο;', en: 'Which piece of furniture do we NOT expect to find in a bedroom?' },
    options: { el: ['a bed', 'a wardrobe', 'a lamp', 'a cooker'], en: ['a bed', 'a wardrobe', 'a lamp', 'a cooker'] },
    correct: 3,
    explanation: {
      el: 'Το «cooker» είναι η κουζίνα που μαγειρεύουμε και ανήκει στο kitchen. Bed, wardrobe και lamp είναι στο bedroom.',
      en: 'A «cooker» belongs in the kitchen. Bed, wardrobe and lamp are in the bedroom.',
    },
  },

  // ── 10–13: There is / There are ───────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «There ___ a sofa in the living room.»', en: 'Fill in: «There ___ a sofa in the living room.»' },
    options: { el: ['is', 'are', 'has', 'have'], en: ['is', 'are', 'has', 'have'] },
    correct: 0,
    explanation: {
      el: 'Για ένα πράγμα λέμε «There is»: There is a sofa = Υπάρχει ένας καναπές.',
      en: 'For one thing we say «There is»: There is a sofa.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «There ___ two beds in the bedroom.»', en: 'Fill in: «There ___ two beds in the bedroom.»' },
    options: { el: ['is', 'are', 'has', 'be'], en: ['is', 'are', 'has', 'be'] },
    correct: 1,
    explanation: {
      el: 'Για πολλά πράγματα λέμε «There are»: There are two beds = Υπάρχουν δύο κρεβάτια.',
      en: 'For more than one thing we say «There are»: There are two beds.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['There is four chairs in the kitchen.', 'There are four chairs in the kitchen.', 'There are a chair in the kitchen.', 'There have four chairs in the kitchen.'], en: ['There is four chairs in the kitchen.', 'There are four chairs in the kitchen.', 'There are a chair in the kitchen.', 'There have four chairs in the kitchen.'] },
    correct: 1,
    explanation: {
      el: '«Four chairs» είναι πολλές καρέκλες, άρα «There are». Με το «a chair» (μία) θα λέγαμε «There is».',
      en: '«Four chairs» is more than one, so «There are». With «a chair» (one) we say «There is».',
    },
  },
  {
    q: { el: 'Πώς λέμε στα αγγλικά «Υπάρχει ένα ψυγείο στην κουζίνα»;', en: 'How do you say «Υπάρχει ένα ψυγείο στην κουζίνα» in English?' },
    options: { el: ['There are a fridge in the kitchen.', 'There is a fridge in the bathroom.', 'There is a fridge in the kitchen.', 'It is a fridge in the kitchen.'], en: ['There are a fridge in the kitchen.', 'There is a fridge in the bathroom.', 'There is a fridge in the kitchen.', 'It is a fridge in the kitchen.'] },
    correct: 2,
    explanation: {
      el: 'Ένα ψυγείο → «There is a fridge», και κουζίνα → «kitchen». Το «υπάρχει» το λέμε «there is», όχι «it is».',
      en: 'One fridge → «There is a fridge», and κουζίνα → «kitchen». «Υπάρχει» is «there is», not «it is».',
    },
  },

  // ── 14–15: Is there…? ─────────────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε αν υπάρχει λάμπα στο δωμάτιο;', en: 'How do we ask if there is a lamp in the room?' },
    options: { el: ['There is a lamp in the room?', 'Is there a lamp in the room?', 'Are there a lamp in the room?', 'Is a lamp there in the room?'], en: ['There is a lamp in the room?', 'Is there a lamp in the room?', 'Are there a lamp in the room?', 'Is a lamp there in the room?'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση το «is» πάει μπροστά: «Is there a lamp…?». Για ένα πράγμα, πάντα «Is there».',
      en: 'In a question «is» goes first: «Is there a lamp…?». For one thing, always «Is there».',
    },
  },
  {
    q: { el: '«Is there a garden?» — Ο Νίκος έχει κήπο. Τι απαντάει;', en: '«Is there a garden?» — Nikos has a garden. What does he answer?' },
    options: { el: ['Yes, there is.', 'Yes, there are.', 'Yes, it is.', 'Yes, there has.'], en: ['Yes, there is.', 'Yes, there are.', 'Yes, it is.', 'Yes, there has.'] },
    correct: 0,
    explanation: {
      el: 'Στο «Is there…?» απαντάμε «Yes, there is.» ή «No, there isn\'t.».',
      en: 'To «Is there…?» we answer «Yes, there is.» or «No, there isn\'t.».',
    },
  },

  // ── 16–18: How many? ──────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε την ερώτηση: «___ chairs are there in the kitchen?»', en: 'Fill in the question: «___ chairs are there in the kitchen?»' },
    options: { el: ['How much', 'How many', 'How old', 'What many'], en: ['How much', 'How many', 'How old', 'What many'] },
    correct: 1,
    explanation: {
      el: 'Όταν μετράμε πράγματα ρωτάμε «How many…?» = Πόσα…; Το «How much» είναι για πράγματα που δεν μετράμε, όπως το νερό.',
      en: 'When we count things we ask «How many…?». «How much» is for things we do not count, like water.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει ένα τραπέζι και 4 καρέκλες. «How many chairs are there?»', en: 'Eleni has one table and 4 chairs. «How many chairs are there?»' },
    options: { el: ['There are five.', 'There is one.', 'There are four.', 'There is four.'], en: ['There are five.', 'There is one.', 'There are four.', 'There is four.'] },
    correct: 2,
    explanation: {
      el: 'Οι καρέκλες είναι 4, άρα «There are four.» Το τραπέζι δεν το μετράμε — η ερώτηση ρωτάει μόνο για καρέκλες!',
      en: 'There are 4 chairs, so «There are four.» The table does not count — the question asks only about chairs!',
    },
  },
  {
    q: { el: 'Το σπίτι του Γιώργου έχει 2 bedrooms και 1 bathroom. Ποια πρόταση το περιγράφει σωστά;', en: 'Giorgos\' house has 2 bedrooms and 1 bathroom. Which sentence describes it correctly?' },
    options: { el: ['There are two bedrooms and there is one bathroom.', 'There is two bedrooms and there are one bathroom.', 'There are two bedroom and one bathrooms.', 'There is two bedrooms and one bathroom.'], en: ['There are two bedrooms and there is one bathroom.', 'There is two bedrooms and there are one bathroom.', 'There are two bedroom and one bathrooms.', 'There is two bedrooms and one bathroom.'] },
    correct: 0,
    explanation: {
      el: 'Δύο δωμάτια → «There are two bedrooms». Ένα μπάνιο → «there is one bathroom». Πολλά = are, ένα = is.',
      en: 'Two rooms → «There are two bedrooms». One bathroom → «there is one bathroom». Many = are, one = is.',
    },
  },
];
