/**
 * Β' Δημοτικού · Μελέτη Περιβάλλοντος · Τα Ζώα
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One short sentence per stem.
 *
 * What the unit covers, in order:
 *   1–4   where animals live: sea, forest, farm, nest / burrow
 *   5–8   how they move and eat: wings, fins, hopping; grass-eaters and meat-eaters
 *   9–12  animal babies: eggs, chicks, tadpoles, puppies, milk
 *   13–15 domestic and wild animals: which is which, what they give us
 *   16–18 animal care: water, vet, respecting wild animals
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_SCIENCE_ANIMALS: QuizQuestion[] = [
  // ── 1–4: where animals live ────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ζώο ζει στη θάλασσα;', en: 'Which animal lives in the sea?' },
    options: { el: ['Το δελφίνι', 'Η κατσίκα', 'Ο σκίουρος', 'Η κότα'], en: ['The dolphin', 'The goat', 'The squirrel', 'The hen'] },
    correct: 0,
    explanation: {
      el: 'Το δελφίνι ζει στη θάλασσα και κολυμπάει όλη μέρα. Η κατσίκα, ο σκίουρος και η κότα ζουν στη στεριά.',
      en: 'The dolphin lives in the sea and swims all day. The goat, the squirrel and the hen live on land.',
    },
  },
  {
    q: { el: 'Πού ζει ο σκίουρος;', en: 'Where does a squirrel live?' },
    options: { el: ['Στη θάλασσα', 'Στην έρημο', 'Στο δάσος', 'Στο ποτάμι'], en: ['In the sea', 'In the desert', 'In the forest', 'In the river'] },
    correct: 2,
    explanation: {
      el: 'Ο σκίουρος ζει στο δάσος, πάνω στα δέντρα. Εκεί βρίσκει καρπούς και φτιάχνει τη φωλιά του.',
      en: 'The squirrel lives in the forest, up in the trees. There it finds nuts and builds its nest.',
    },
  },
  {
    q: { el: 'Ποιο ζώο ζει στη φάρμα, στον στάβλο;', en: 'Which animal lives on a farm, in a barn?' },
    options: { el: ['Η φάλαινα', 'Ο λύκος', 'Ο πιγκουίνος', 'Η αγελάδα'], en: ['The whale', 'The wolf', 'The penguin', 'The cow'] },
    correct: 3,
    explanation: {
      el: 'Η αγελάδα ζει στη φάρμα και κοιμάται στον στάβλο. Ο αγρότης τη φροντίζει κάθε μέρα.',
      en: 'The cow lives on a farm and sleeps in the barn. The farmer looks after it every day.',
    },
  },
  {
    q: { el: 'Πού φτιάχνει τη φωλιά του το χελιδόνι;', en: 'Where does a swallow build its nest?' },
    options: { el: ['Μέσα στο νερό', 'Ψηλά, κάτω από στέγες', 'Βαθιά στο χώμα', 'Μέσα σε σπηλιά'], en: ['In the water', 'Up high, under roofs', 'Deep in the soil', 'Inside a cave'] },
    correct: 1,
    explanation: {
      el: 'Το χελιδόνι φτιάχνει τη φωλιά του ψηλά, κάτω από στέγες και μπαλκόνια, με λάσπη και άχυρα.',
      en: 'The swallow builds its nest up high, under roofs and balconies, out of mud and straw.',
    },
  },

  // ── 5–8: how animals move and eat ─────────────────────────────────────────
  {
    q: { el: 'Με τι κολυμπάει το ψάρι;', en: 'What does a fish use to swim?' },
    options: { el: ['Με τα φτερά του', 'Με τα πόδια του', 'Με τα πτερύγια και την ουρά του', 'Με τα χέρια του'], en: ['Its wings', 'Its legs', 'Its fins and tail', 'Its arms'] },
    correct: 2,
    explanation: {
      el: 'Το ψάρι κουνάει την ουρά και τα πτερύγιά του και έτσι κολυμπάει. Δεν έχει πόδια ούτε φτερά.',
      en: 'A fish moves its tail and fins to swim. It has no legs and no wings.',
    },
  },
  {
    q: { el: 'Ποιο ζώο κινείται με πηδηματάκια;', en: 'Which animal moves by hopping?' },
    options: { el: ['Το φίδι', 'Το βατράχι', 'Το σαλιγκάρι', 'Το άλογο'], en: ['The snake', 'The frog', 'The snail', 'The horse'] },
    correct: 1,
    explanation: {
      el: 'Το βατράχι έχει δυνατά πίσω πόδια και πηδάει. Το φίδι σέρνεται, το σαλιγκάρι γλιστράει αργά, το άλογο τρέχει.',
      en: 'The frog has strong back legs and hops. The snake slithers, the snail glides slowly, the horse runs.',
    },
  },
  {
    q: { el: 'Τι τρώει το πρόβατο;', en: 'What does a sheep eat?' },
    options: { el: ['Χορτάρι', 'Ψάρια', 'Κρέας', 'Μέλι'], en: ['Grass', 'Fish', 'Meat', 'Honey'] },
    correct: 0,
    explanation: {
      el: 'Το πρόβατο είναι χορτοφάγο: τρώει χορτάρι και φύλλα. Δεν κυνηγάει άλλα ζώα.',
      en: 'A sheep is a plant-eater: it eats grass and leaves. It does not hunt other animals.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά τα ζώα τρώει κρέας;', en: 'Which of these animals eats meat?' },
    options: { el: ['Το κουνέλι', 'Η αγελάδα', 'Το λιοντάρι', 'Η κατσίκα'], en: ['The rabbit', 'The cow', 'The lion', 'The goat'] },
    correct: 2,
    explanation: {
      el: 'Το λιοντάρι είναι σαρκοφάγο: τρώει κρέας. Το κουνέλι, η αγελάδα και η κατσίκα τρώνε χόρτα.',
      en: 'The lion is a meat-eater. The rabbit, the cow and the goat eat plants.',
    },
  },

  // ── 9–12: animal babies ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται το μωρό της κότας;', en: 'What is a hen\'s baby called?' },
    options: { el: ['Γατάκι', 'Κοτοπουλάκι', 'Αρνάκι', 'Παπάκι'], en: ['Kitten', 'Chick', 'Lamb', 'Duckling'] },
    correct: 1,
    explanation: {
      el: 'Το μωρό της κότας είναι το κοτοπουλάκι. Το αρνάκι είναι της προβατίνας και το παπάκι της πάπιας.',
      en: 'A hen\'s baby is a chick. A lamb belongs to a sheep and a duckling to a duck.',
    },
  },
  {
    q: { el: 'Ποιο ζώο γεννάει αυγά;', en: 'Which animal lays eggs?' },
    options: { el: ['Ο σκύλος', 'Η χελώνα', 'Η γάτα', 'Το άλογο'], en: ['The dog', 'The turtle', 'The cat', 'The horse'] },
    correct: 1,
    explanation: {
      el: 'Η χελώνα γεννάει αυγά και από αυτά βγαίνουν τα χελωνάκια. Ο σκύλος, η γάτα και το άλογο γεννούν ζωντανά μωρά.',
      en: 'The turtle lays eggs and baby turtles hatch from them. The dog, the cat and the horse give birth to live babies.',
    },
  },
  {
    q: { el: 'Ο γυρίνος μεγαλώνει και γίνεται…', en: 'A tadpole grows up to become a…' },
    options: { el: ['ψάρι', 'σαύρα', 'χελώνα', 'βατράχι'], en: ['fish', 'lizard', 'turtle', 'frog'] },
    correct: 3,
    explanation: {
      el: 'Ο γυρίνος είναι το μωρό του βατραχιού. Ζει στο νερό, του βγαίνουν πόδια και γίνεται βατράχι.',
      en: 'A tadpole is a baby frog. It lives in water, grows legs and turns into a frog.',
    },
  },
  {
    q: { el: 'Τι πίνει το κουταβάκι όταν είναι πολύ μικρό;', en: 'What does a tiny puppy drink?' },
    options: { el: ['Γάλα από τη μαμά του', 'Χυμό', 'Νερό της θάλασσας', 'Τσάι'], en: ['Milk from its mother', 'Juice', 'Sea water', 'Tea'] },
    correct: 0,
    explanation: {
      el: 'Τα μικρά θηλαστικά, όπως το κουταβάκι, πίνουν γάλα από τη μαμά τους μέχρι να μεγαλώσουν.',
      en: 'Baby mammals like puppies drink milk from their mother until they grow bigger.',
    },
  },

  // ── 13–15: domestic and wild animals ──────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι άγριο ζώο;', en: 'Which of these is a wild animal?' },
    options: { el: ['Ο σκύλος', 'Η αλεπού', 'Η γάτα', 'Το πρόβατο'], en: ['The dog', 'The fox', 'The cat', 'The sheep'] },
    correct: 1,
    explanation: {
      el: 'Η αλεπού είναι άγριο ζώο: ζει μόνη της στη φύση. Ο σκύλος, η γάτα και το πρόβατο ζουν κοντά στον άνθρωπο.',
      en: 'The fox is a wild animal: it lives on its own in nature. The dog, the cat and the sheep live with people.',
    },
  },
  {
    q: { el: 'Τι μας δίνει η κότα;', en: 'What does a hen give us?' },
    options: { el: ['Μαλλί', 'Γάλα', 'Αυγά', 'Μέλι'], en: ['Wool', 'Milk', 'Eggs', 'Honey'] },
    correct: 2,
    explanation: {
      el: 'Η κότα μάς δίνει αυγά. Το μαλλί το παίρνουμε από το πρόβατο, το γάλα από την αγελάδα και το μέλι από τη μέλισσα.',
      en: 'The hen gives us eggs. Wool comes from the sheep, milk from the cow and honey from the bee.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει: «Το άγριο ζώο το ταΐζει ο άνθρωπος.» Ποιο ζώο ταιριάζει σε αυτό που λέει;', en: 'Nikos says: “A wild animal is fed by people.” Which animal actually fits what he says?' },
    options: { el: ['Ο λύκος', 'Το ελάφι', 'Η αρκούδα', 'Κανένα, τα άγρια ζώα βρίσκουν μόνα τους τροφή'], en: ['The wolf', 'The deer', 'The bear', 'None, wild animals find their own food'] },
    correct: 3,
    explanation: {
      el: 'Ο Νίκος κάνει λάθος. Τα άγρια ζώα, όπως ο λύκος, το ελάφι και η αρκούδα, βρίσκουν μόνα τους την τροφή τους στη φύση.',
      en: 'Nikos is wrong. Wild animals like the wolf, the deer and the bear find their own food in nature.',
    },
  },

  // ── 16–18: animal care ────────────────────────────────────────────────────
  {
    q: { el: 'Τι χρειάζεται κάθε μέρα ο σκύλος της Ελένης;', en: 'What does Eleni\'s dog need every day?' },
    options: { el: ['Μόνο παιχνίδια', 'Φαγητό, καθαρό νερό και βόλτα', 'Μόνο ένα μπάνιο', 'Σοκολάτα'], en: ['Only toys', 'Food, clean water and a walk', 'Only a bath', 'Chocolate'] },
    correct: 1,
    explanation: {
      el: 'Ο σκύλος θέλει κάθε μέρα φαγητό, καθαρό νερό και βόλτα. Η σοκολάτα τον κάνει άρρωστο!',
      en: 'A dog needs food, clean water and a walk every day. Chocolate makes dogs sick!',
    },
  },
  {
    q: { el: 'Η γάτα του Γιώργου είναι άρρωστη. Πού θα την πάει;', en: 'Giorgos\'s cat is sick. Where should he take it?' },
    options: { el: ['Στον κτηνίατρο', 'Στον οδοντίατρο', 'Στο σχολείο', 'Στον φούρνο'], en: ['To the vet', 'To the dentist', 'To school', 'To the bakery'] },
    correct: 0,
    explanation: {
      el: 'Ο κτηνίατρος είναι ο γιατρός των ζώων. Όταν ένα ζώο είναι άρρωστο, το πάμε σε αυτόν.',
      en: 'The vet is the animals\' doctor. When an animal is sick, we take it to the vet.',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει μια φωλιά με αυγά πάνω σε ένα δέντρο. Τι είναι σωστό να κάνει;', en: 'Maria sees a nest with eggs in a tree. What is the right thing to do?' },
    options: { el: ['Να πάρει τα αυγά στο σπίτι', 'Να ανέβει και να αγγίξει τη φωλιά', 'Να την κοιτάξει από μακριά και να μην την πειράξει', 'Να ρίξει σπόρους μέσα στη φωλιά'], en: ['Take the eggs home', 'Climb up and touch the nest', 'Watch it from far away and leave it alone', 'Throw seeds into the nest'] },
    correct: 2,
    explanation: {
      el: 'Τις φωλιές τις κοιτάμε μόνο από μακριά. Αν τις πειράξουμε, η μαμά πουλί μπορεί να φοβηθεί και να φύγει.',
      en: 'We only watch nests from far away. If we touch them, the mother bird may get scared and leave.',
    },
  },
];
