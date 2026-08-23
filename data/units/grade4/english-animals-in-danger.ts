/**
 * Δ' Δημοτικού · Αγγλικά · Ζώα & Φύση / Animals & Nature
 * ========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a Greek child of 9–10 learning English. What the unit covers, in order:
 *   1–4   wild animals vocabulary (lion, elephant, monkey, eagle…)
 *   5–7   sea turtles and animals in danger (endangered, protect, habitat)
 *   8–11  can / can't — what animals are able to do
 *   12–15 must / mustn't — rules for protecting nature
 *   16–18 animal body parts (wings, fins, tail, trunk, shell, beak)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_ANIMALS_IN_DANGER: QuizQuestion[] = [
  // ── 1–4: wild animals ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «λιοντάρι» στα αγγλικά;', en: 'How do you say «λιοντάρι» in English?' },
    options: { el: ['tiger', 'lion', 'bear', 'wolf'], en: ['tiger', 'lion', 'bear', 'wolf'] },
    correct: 1,
    explanation: {
      el: 'Λιοντάρι = lion. Ο tiger είναι η τίγρη, ο bear η αρκούδα και ο wolf ο λύκος.',
      en: 'Λιοντάρι = lion. A tiger is a τίγρη, a bear is an αρκούδα and a wolf is a λύκος.',
    },
  },
  {
    q: { el: 'Ποιο ζώο είναι το «elephant»;', en: 'Which animal is an «elephant»?' },
    options: { el: ['ο ελέφαντας', 'η καμηλοπάρδαλη', 'ο ιπποπόταμος', 'ο ρινόκερος'], en: ['the elephant', 'the giraffe', 'the hippo', 'the rhino'] },
    correct: 0,
    explanation: {
      el: 'Elephant = ελέφαντας. Giraffe = καμηλοπάρδαλη, hippo = ιπποπόταμος, rhino = ρινόκερος.',
      en: 'Elephant = ελέφαντας. Giraffe = καμηλοπάρδαλη, hippo = ιπποπόταμος, rhino = ρινόκερος.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μαϊμού» στα αγγλικά;', en: 'How do you say «μαϊμού» in English?' },
    options: { el: ['donkey', 'mouse', 'monkey', 'money'], en: ['donkey', 'mouse', 'monkey', 'money'] },
    correct: 2,
    explanation: {
      el: 'Μαϊμού = monkey. Προσοχή: «money» (χρήματα) μοιάζει, αλλά δεν είναι ζώο!',
      en: 'Μαϊμού = monkey. Careful: «money» looks similar, but it is not an animal!',
    },
  },
  {
    q: { el: 'Ποιο από αυτά τα ζώα πετάει;', en: 'Which of these animals flies?' },
    options: { el: ['zebra', 'crocodile', 'snake', 'eagle'], en: ['zebra', 'crocodile', 'snake', 'eagle'] },
    correct: 3,
    explanation: {
      el: 'Ο eagle (αετός) πετάει. Η zebra (ζέβρα) τρέχει, ο crocodile (κροκόδειλος) κολυμπάει και το snake (φίδι) σέρνεται.',
      en: 'An eagle flies. A zebra runs, a crocodile swims and a snake crawls.',
    },
  },

  // ── 5–7: sea turtles and animals in danger ─────────────────────────────────
  {
    q: { el: 'Πώς λέμε «θαλάσσια χελώνα» στα αγγλικά;', en: 'How do you say «θαλάσσια χελώνα» in English?' },
    options: { el: ['sea horse', 'sea turtle', 'sea lion', 'sea star'], en: ['sea horse', 'sea turtle', 'sea lion', 'sea star'] },
    correct: 1,
    explanation: {
      el: 'Θαλάσσια χελώνα = sea turtle. Η χελώνα Καρέτα-Καρέτα γεννά τα αυγά της στις παραλίες της Ζακύνθου.',
      en: 'Θαλάσσια χελώνα = sea turtle. The Caretta-Caretta turtle lays its eggs on the beaches of Zakynthos.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «Sea turtles are in danger»;', en: 'What does «Sea turtles are in danger» mean?' },
    options: { el: ['Οι θαλάσσιες χελώνες είναι επικίνδυνες.', 'Οι θαλάσσιες χελώνες κινδυνεύουν.', 'Οι θαλάσσιες χελώνες κοιμούνται.', 'Οι θαλάσσιες χελώνες είναι πολλές.'], en: ['Sea turtles are dangerous.', 'Sea turtles are at risk.', 'Sea turtles are sleeping.', 'There are many sea turtles.'] },
    correct: 1,
    explanation: {
      el: '«In danger» σημαίνει «σε κίνδυνο», δηλαδή κινδυνεύουν. «Dangerous» σημαίνει «επικίνδυνος» — άλλη λέξη!',
      en: '«In danger» means at risk. «Dangerous» means something can hurt you — a different word!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «We must ___ the animals in danger.»', en: 'Complete: «We must ___ the animals in danger.»' },
    options: { el: ['protect', 'forget', 'catch', 'scare'], en: ['protect', 'forget', 'catch', 'scare'] },
    correct: 0,
    explanation: {
      el: 'Protect = προστατεύω. Τα ζώα που κινδυνεύουν πρέπει να τα προστατεύουμε, όχι να τα πιάνουμε (catch) ή να τα τρομάζουμε (scare).',
      en: 'Protect means to keep safe. We protect animals in danger; we do not catch or scare them.',
    },
  },

  // ── 8–11: can / can't ──────────────────────────────────────────────────────
  {
    q: { el: 'Διάλεξε τη σωστή πρόταση.', en: 'Choose the correct sentence.' },
    options: { el: ['A fish can swim.', 'A fish can fly.', 'A fish can run.', 'A fish can climb.'], en: ['A fish can swim.', 'A fish can fly.', 'A fish can run.', 'A fish can climb.'] },
    correct: 0,
    explanation: {
      el: 'Το ψάρι μπορεί να κολυμπήσει: A fish can swim. Το «can» σημαίνει «μπορώ».',
      en: 'A fish can swim. «Can» means you are able to do something.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «A penguin ___ fly, but it can swim.»', en: 'Complete: «A penguin ___ fly, but it can swim.»' },
    options: { el: ['can', 'can\'t', 'cans', 'don\'t can'], en: ['can', 'can\'t', 'cans', 'don\'t can'] },
    correct: 1,
    explanation: {
      el: 'Ο πιγκουίνος δεν μπορεί να πετάξει: A penguin can\'t fly. Το «can\'t» είναι το αρνητικό του «can».',
      en: 'A penguin can\'t fly. «Can\'t» is the negative of «can». We never say «don\'t can».',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή ερώτηση;', en: 'Which question is correct?' },
    options: { el: ['Can a kangaroo jump?', 'A kangaroo can jump?', 'Do a kangaroo can jump?', 'Can jump a kangaroo?'], en: ['Can a kangaroo jump?', 'A kangaroo can jump?', 'Do a kangaroo can jump?', 'Can jump a kangaroo?'] },
    correct: 0,
    explanation: {
      el: 'Στην ερώτηση το «can» πάει πρώτο: Can a kangaroo jump? — Yes, it can!',
      en: 'In a question, «can» comes first: Can a kangaroo jump? — Yes, it can!',
    },
  },
  {
    q: { el: 'Η Ελένη ρωτάει: «Can elephants swim?» Ποια απάντηση είναι σωστά γραμμένη;', en: 'Eleni asks: «Can elephants swim?» Which answer is written correctly?' },
    options: { el: ['Yes, they can.', 'Yes, they cans.', 'Yes, they can swim can.', 'Yes, it can.'], en: ['Yes, they can.', 'Yes, they cans.', 'Yes, they can swim can.', 'Yes, it can.'] },
    correct: 0,
    explanation: {
      el: 'Elephants = πολλά ζώα, άρα «they»: Yes, they can. Το «can» δεν παίρνει ποτέ -s.',
      en: 'Elephants are many, so we say «they»: Yes, they can. «Can» never takes an -s.',
    },
  },

  // ── 12–15: must / mustn't ──────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «You mustn\'t feed the wild animals»;', en: 'What does «You mustn\'t feed the wild animals» mean?' },
    options: { el: ['Δεν χρειάζεται να ταΐζεις τα άγρια ζώα.', 'Μπορείς να ταΐζεις τα άγρια ζώα.', 'Απαγορεύεται να ταΐζεις τα άγρια ζώα.', 'Πρέπει να ταΐζεις τα άγρια ζώα.'], en: ['You do not need to feed the wild animals.', 'You may feed the wild animals.', 'Feeding the wild animals is not allowed.', 'You have to feed the wild animals.'] },
    correct: 2,
    explanation: {
      el: '«Mustn\'t» σημαίνει «απαγορεύεται» — είναι κανόνας. Τα άγρια ζώα βρίσκουν μόνα τους το φαγητό τους.',
      en: '«Mustn\'t» means it is not allowed — it is a rule. Wild animals find their own food.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε τον κανόνα: «We ___ keep the beach clean for the turtles.»', en: 'Complete the rule: «We ___ keep the beach clean for the turtles.»' },
    options: { el: ['mustn\'t', 'must', 'can\'t', 'must to'], en: ['mustn\'t', 'must', 'can\'t', 'must to'] },
    correct: 1,
    explanation: {
      el: 'Πρέπει να κρατάμε την παραλία καθαρή: We must keep the beach clean. Μετά το «must» βάζουμε το ρήμα σκέτο, χωρίς «to».',
      en: 'We must keep the beach clean. After «must» we use the verb alone, without «to».',
    },
  },
  {
    q: { el: 'Ποια πινακίδα είναι σωστή για ένα πάρκο με ζώα;', en: 'Which sign is correct for a park with animals?' },
    options: { el: ['You must make noise.', 'You mustn\'t walk on the paths.', 'You must throw rubbish here.', 'You mustn\'t touch the animals.'], en: ['You must make noise.', 'You mustn\'t walk on the paths.', 'You must throw rubbish here.', 'You mustn\'t touch the animals.'] },
    correct: 3,
    explanation: {
      el: 'You mustn\'t touch the animals = Απαγορεύεται να αγγίζεις τα ζώα. Οι άλλες πινακίδες λένε το αντίθετο από αυτό που πρέπει!',
      en: 'You mustn\'t touch the animals. The other signs say the opposite of what a park should say!',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει: «Baby turtles must reach the sea at night.» Τι σημαίνει το «must» εδώ;', en: 'Nikos says: «Baby turtles must reach the sea at night.» What does «must» mean here?' },
    options: { el: ['μπορούν', 'πρέπει', 'θέλουν', 'δεν πρέπει'], en: ['they can', 'they have to', 'they want to', 'they must not'] },
    correct: 1,
    explanation: {
      el: '«Must» = πρέπει. Τα χελωνάκια πρέπει να φτάσουν στη θάλασσα τη νύχτα, γιατί τότε είναι πιο ασφαλή.',
      en: '«Must» means they have to. Baby turtles have to reach the sea at night, because then they are safer.',
    },
  },

  // ── 16–18: animal body parts ───────────────────────────────────────────────
  {
    q: { el: 'Ο αετός πετάει με τα…', en: 'An eagle flies with its…' },
    options: { el: ['legs', 'wings', 'fins', 'ears'], en: ['legs', 'wings', 'fins', 'ears'] },
    correct: 1,
    explanation: {
      el: 'Wings = φτερά. Τα πουλιά πετούν με τα φτερά τους. Τα fins (πτερύγια) τα έχουν τα ψάρια.',
      en: 'Birds fly with their wings. Fins belong to fish.',
    },
  },
  {
    q: { el: 'Ποιο ζώο έχει «trunk» (προβοσκίδα);', en: 'Which animal has a trunk?' },
    options: { el: ['the giraffe', 'the crocodile', 'the elephant', 'the parrot'], en: ['the giraffe', 'the crocodile', 'the elephant', 'the parrot'] },
    correct: 2,
    explanation: {
      el: 'Trunk = προβοσκίδα, και την έχει μόνο ο ελέφαντας. Η καμηλοπάρδαλη έχει μακρύ λαιμό (neck), ο παπαγάλος ράμφος (beak).',
      en: 'Only the elephant has a trunk. The giraffe has a long neck and the parrot has a beak.',
    },
  },
  {
    q: { el: 'Η Μαρία περιγράφει μια θαλάσσια χελώνα. Ποια πρόταση είναι σωστή;', en: 'Maria describes a sea turtle. Which sentence is correct?' },
    options: { el: ['It has got a hard shell and four flippers.', 'It has got wings and a beak.', 'It has got a trunk and big ears.', 'It has got fur and a long tail.'], en: ['It has got a hard shell and four flippers.', 'It has got wings and a beak.', 'It has got a trunk and big ears.', 'It has got fur and a long tail.'] },
    correct: 0,
    explanation: {
      el: 'Η θαλάσσια χελώνα έχει σκληρό καβούκι (shell) και τέσσερα πτερύγια (flippers) για να κολυμπάει. Δεν έχει φτερά, προβοσκίδα ή γούνα (fur).',
      en: 'A sea turtle has a hard shell and four flippers for swimming. It has no wings, trunk or fur.',
    },
  },
];
