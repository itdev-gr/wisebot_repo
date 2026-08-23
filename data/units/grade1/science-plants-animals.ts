/**
 * Α' Δημοτικού · Μελέτη Περιβάλλοντος · Τα Φυτά & τα Ζώα του Τόπου μου
 * =====================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 6–7; one short sentence per stem.
 *
 * What the unit covers, in order:
 *   1–4   parts of a plant: root, stem, leaves, flower, fruit — and what a seed does
 *   5–8   seasons and plants: spring blossom, autumn leaves, winter bare trees, summer fruit
 *   9–12  parts of an animal: wings, fins, fur, legs — and how each one helps
 *   13–15 animal families: the mother/baby names children meet (cow/calf, hen/chick, sheep/lamb)
 *   16–18 caring for pets and plants: water, food, sun, a safe place
 *
 * Distractors are the mixes-ups young children really make (leaf vs flower,
 * puppy vs kitten, "a plant needs cola"). The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_SCIENCE_PLANTS_ANIMALS: QuizQuestion[] = [
  // ── 1–4: parts of a plant ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιο μέρος του φυτού κρύβεται μέσα στο χώμα;', en: 'Which part of a plant hides inside the soil?' },
    options: { el: ['Η ρίζα', 'Το φύλλο', 'Το λουλούδι', 'Ο καρπός'], en: ['The root', 'The leaf', 'The flower', 'The fruit'] },
    correct: 0,
    explanation: {
      el: 'Η ρίζα είναι κάτω από το χώμα. Κρατάει το φυτό γερά και πίνει νερό.',
      en: 'The root is under the soil. It holds the plant tight and drinks water.',
    },
  },
  {
    q: { el: 'Τι χρώμα έχουν συνήθως τα φύλλα;', en: 'What colour are leaves usually?' },
    options: { el: ['Μπλε', 'Πράσινα', 'Ροζ', 'Άσπρα'], en: ['Blue', 'Green', 'Pink', 'White'] },
    correct: 1,
    explanation: {
      el: 'Τα περισσότερα φύλλα είναι πράσινα. Με τα φύλλα το φυτό «πιάνει» το φως του ήλιου.',
      en: 'Most leaves are green. With its leaves the plant catches the sunlight.',
    },
  },
  {
    q: { el: 'Ποιο μέρος του φυτού κρατάει τα φύλλα ψηλά;', en: 'Which part of the plant holds the leaves up high?' },
    options: { el: ['Ο καρπός', 'Η ρίζα', 'Ο βλαστός', 'Ο σπόρος'], en: ['The fruit', 'The root', 'The stem', 'The seed'] },
    correct: 2,
    explanation: {
      el: 'Ο βλαστός είναι το «κορμάκι» του φυτού. Πάνω του φυτρώνουν τα φύλλα και τα λουλούδια.',
      en: 'The stem is the plant’s little trunk. The leaves and flowers grow on it.',
    },
  },
  {
    q: { el: 'Ο Νίκος βάζει έναν σπόρο στο χώμα. Τι θα γίνει ο σπόρος;', en: 'Nikos puts a seed in the soil. What will the seed become?' },
    options: { el: ['Μια πέτρα', 'Ένα νερό', 'Ένα έντομο', 'Ένα νέο φυτό'], en: ['A stone', 'Some water', 'An insect', 'A new plant'] },
    correct: 3,
    explanation: {
      el: 'Μέσα στον σπόρο κοιμάται ένα μικρό φυτό. Με νερό και ζέστη ξυπνάει και φυτρώνει!',
      en: 'A tiny plant is sleeping inside the seed. With water and warmth it wakes up and sprouts!',
    },
  },

  // ── 5–8: seasons and plants ────────────────────────────────────────────────
  {
    q: { el: 'Ποια εποχή γεμίζουν τα δέντρα λουλούδια;', en: 'In which season do the trees fill with blossom?' },
    options: { el: ['Την άνοιξη', 'Τον χειμώνα', 'Το φθινόπωρο', 'Ποτέ'], en: ['In spring', 'In winter', 'In autumn', 'Never'] },
    correct: 0,
    explanation: {
      el: 'Την άνοιξη τα δέντρα ανθίζουν. Μετά τα λουλούδια γίνονται καρποί.',
      en: 'In spring the trees blossom. Later the flowers turn into fruit.',
    },
  },
  {
    q: { el: 'Το φθινόπωρο τα φύλλα πολλών δέντρων…', en: 'In autumn, the leaves of many trees…' },
    options: { el: ['γίνονται μπλε', 'μεγαλώνουν πολύ', 'κιτρινίζουν και πέφτουν', 'γίνονται λουλούδια'], en: ['turn blue', 'grow very big', 'turn yellow and fall', 'turn into flowers'] },
    correct: 2,
    explanation: {
      el: 'Το φθινόπωρο τα φύλλα κιτρινίζουν, κοκκινίζουν και πέφτουν στο χώμα.',
      en: 'In autumn leaves turn yellow and red and fall to the ground.',
    },
  },
  {
    q: { el: 'Τον χειμώνα η μηλιά στον κήπο της Ελένης…', en: 'In winter, the apple tree in Eleni’s garden…' },
    options: { el: ['είναι γεμάτη μήλα', 'έχει γυμνά κλαδιά', 'έχει πολλά λουλούδια', 'γίνεται πιο κοντή'], en: ['is full of apples', 'has bare branches', 'has lots of flowers', 'gets shorter'] },
    correct: 1,
    explanation: {
      el: 'Τον χειμώνα η μηλιά ξεκουράζεται. Τα κλαδιά της είναι γυμνά, χωρίς φύλλα.',
      en: 'In winter the apple tree rests. Its branches are bare, with no leaves.',
    },
  },
  {
    q: { el: 'Ποιος καρπός ωριμάζει το καλοκαίρι;', en: 'Which fruit is ripe in summer?' },
    options: { el: ['Το καρπούζι', 'Το κάστανο', 'Το χιόνι', 'Το μανιτάρι'], en: ['The watermelon', 'The chestnut', 'The snow', 'The mushroom'] },
    correct: 0,
    explanation: {
      el: 'Το καρπούζι είναι καρπός του καλοκαιριού. Τα κάστανα έρχονται το φθινόπωρο.',
      en: 'Watermelon is a summer fruit. Chestnuts come in autumn.',
    },
  },

  // ── 9–12: parts of an animal ───────────────────────────────────────────────
  {
    q: { el: 'Με τι πετάει το πουλί;', en: 'What does a bird fly with?' },
    options: { el: ['Με τα πόδια', 'Με την ουρά', 'Με το ράμφος', 'Με τα φτερά'], en: ['With its legs', 'With its tail', 'With its beak', 'With its wings'] },
    correct: 3,
    explanation: {
      el: 'Το πουλί ανοίγει τα φτερά του και πετάει. Με το ράμφος τρώει.',
      en: 'A bird opens its wings and flies. It eats with its beak.',
    },
  },
  {
    q: { el: 'Με τι κολυμπάει το ψάρι;', en: 'What does a fish swim with?' },
    options: { el: ['Με τα πτερύγια', 'Με τα φτερά', 'Με τα πόδια', 'Με τα αυτιά'], en: ['With its fins', 'With its wings', 'With its legs', 'With its ears'] },
    correct: 0,
    explanation: {
      el: 'Το ψάρι κουνάει τα πτερύγια και την ουρά του και κολυμπάει. Δεν έχει πόδια.',
      en: 'A fish moves its fins and tail to swim. It has no legs.',
    },
  },
  {
    q: { el: 'Τι σκεπάζει το σώμα της γάτας;', en: 'What covers a cat’s body?' },
    options: { el: ['Φτερά', 'Λέπια', 'Τρίχωμα', 'Κέλυφος'], en: ['Feathers', 'Scales', 'Fur', 'A shell'] },
    correct: 2,
    explanation: {
      el: 'Η γάτα έχει μαλακό τρίχωμα που την κρατάει ζεστή. Τα πουλιά έχουν φτερά και τα ψάρια λέπια.',
      en: 'A cat has soft fur that keeps it warm. Birds have feathers and fish have scales.',
    },
  },
  {
    q: { el: 'Πόσα πόδια έχει ο σκύλος;', en: 'How many legs does a dog have?' },
    options: { el: ['2', '6', '8', '4'], en: ['2', '6', '8', '4'] },
    correct: 3,
    explanation: {
      el: 'Ο σκύλος έχει 4 πόδια. Το πουλί έχει 2 και η μέλισσα 6.',
      en: 'A dog has 4 legs. A bird has 2 and a bee has 6.',
    },
  },

  // ── 13–15: animal families ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται το μωρό της αγελάδας;', en: 'What is a cow’s baby called?' },
    options: { el: ['Μοσχαράκι', 'Αρνάκι', 'Κατσικάκι', 'Πουλαράκι'], en: ['A calf', 'A lamb', 'A kid', 'A foal'] },
    correct: 0,
    explanation: {
      el: 'Το μωρό της αγελάδας είναι το μοσχαράκι. Το αρνάκι είναι μωρό της προβατίνας.',
      en: 'A cow’s baby is a calf. A lamb is a sheep’s baby.',
    },
  },
  {
    q: { el: 'Η κότα κάθεται πάνω στα αυγά της. Τι θα βγει από μέσα;', en: 'The hen sits on her eggs. What will come out?' },
    options: { el: ['Ψαράκια', 'Κουταβάκια', 'Κοτοπουλάκια', 'Γατάκια'], en: ['Little fish', 'Puppies', 'Chicks', 'Kittens'] },
    correct: 2,
    explanation: {
      el: 'Από τα αυγά της κότας βγαίνουν κοτοπουλάκια. Τα κουταβάκια γεννιούνται από τη σκυλίτσα.',
      en: 'Chicks hatch from a hen’s eggs. Puppies are born from a mother dog.',
    },
  },
  {
    q: { el: 'Ποιο ζώο είναι η μαμά του αρνιού;', en: 'Which animal is the lamb’s mother?' },
    options: { el: ['Η κατσίκα', 'Η αγελάδα', 'Η φοράδα', 'Η προβατίνα'], en: ['The goat', 'The cow', 'The mare', 'The ewe'] },
    correct: 3,
    explanation: {
      el: 'Το αρνί είναι μωρό της προβατίνας. Η κατσίκα έχει κατσικάκι και η φοράδα πουλαράκι.',
      en: 'A lamb is a ewe’s baby (a ewe is a mother sheep). A goat has a kid and a mare has a foal.',
    },
  },

  // ── 16–18: caring for pets and plants ──────────────────────────────────────
  {
    q: { el: 'Η Μαρία έχει μια γλάστρα. Τι πρέπει να της δίνει για να ζήσει;', en: 'Maria has a plant in a pot. What must she give it to live?' },
    options: { el: ['Νερό και φως', 'Χυμό πορτοκάλι', 'Σοκολάτα', 'Μόνο σκοτάδι'], en: ['Water and light', 'Orange juice', 'Chocolate', 'Only darkness'] },
    correct: 0,
    explanation: {
      el: 'Ένα φυτό χρειάζεται νερό, φως και χώμα. Χωρίς φως τα φύλλα του κιτρινίζουν.',
      en: 'A plant needs water, light and soil. Without light its leaves turn yellow.',
    },
  },
  {
    q: { el: 'Ο σκύλος του Γιώργου διψάει. Τι πρέπει να του βάλει στο μπολ;', en: 'Giorgos’s dog is thirsty. What should he put in its bowl?' },
    options: { el: ['Αναψυκτικό', 'Καθαρό νερό', 'Γάλα με ζάχαρη', 'Καφέ'], en: ['Fizzy drink', 'Clean water', 'Milk with sugar', 'Coffee'] },
    correct: 1,
    explanation: {
      el: 'Τα ζώα πίνουν καθαρό νερό. Τα γλυκά ποτά και ο καφές τους κάνουν κακό.',
      en: 'Animals drink clean water. Sweet drinks and coffee are bad for them.',
    },
  },
  {
    q: { el: 'Πώς φροντίζουμε σωστά ένα κατοικίδιο ζώο;', en: 'How do we look after a pet properly?' },
    options: { el: ['Το αφήνουμε μόνο του για μέρες', 'Του δίνουμε φαγητό όποτε κλαίει', 'Του δίνουμε φαγητό, νερό και ένα ζεστό μέρος', 'Το κρατάμε σε ένα σκοτεινό κουτί'], en: ['We leave it alone for days', 'We feed it whenever it cries', 'We give it food, water and a warm place', 'We keep it in a dark box'] },
    correct: 2,
    explanation: {
      el: 'Ένα κατοικίδιο θέλει φαγητό κάθε μέρα, νερό, ένα ζεστό μέρος και αγάπη. Είναι φίλος μας!',
      en: 'A pet needs food every day, water, a warm place and love. It is our friend!',
    },
  },
];
