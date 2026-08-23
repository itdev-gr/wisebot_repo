/**
 * Γ' Δημοτικού · Μελέτη Περιβάλλοντος · Τα Ζώα του Τόπου μας
 * ===========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Ordered easiest → hardest, in the brief's order:
 *   1–2   pets (cat, dog — what a pet needs from us)
 *   3–5   farm animals (milk, wool, the baby of the cow)
 *   6–9   mountain & forest wildlife (bear, hedgehog, squirrel, wolf)
 *   10–12 birds (feathers & beak, the swallow, the owl)
 *   13–15 sea animals (dolphin is not a fish, gills, octopus)
 *   16–18 freshwater animals and how animals are born (frog, tadpole, mammals)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_SCIENCE_ANIMALS: QuizQuestion[] = [
  // ── 1–2: pets ───────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ζώο ζει μαζί μας στο σπίτι και κάνει «νιάου»;', en: 'Which animal lives with us at home and says “meow”?' },
    options: { el: ['η γάτα', 'η αγελάδα', 'η αλεπού', 'το δελφίνι'], en: ['the cat', 'the cow', 'the fox', 'the dolphin'] },
    correct: 0,
    explanation: {
      el: 'Η γάτα είναι ζώο συντροφιάς: ζει στο σπίτι μας και νιαουρίζει. Η αγελάδα, η αλεπού και το δελφίνι ζουν αλλού.',
      en: 'The cat is a pet: it lives in our home and meows. The cow, the fox and the dolphin live elsewhere.',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει έναν σκύλο. Τι χρειάζεται ο σκύλος του κάθε μέρα;', en: 'Nikos has a dog. What does his dog need every day?' },
    options: { el: ['μόνο να κοιμάται', 'να τρώει σοκολάτα', 'φαγητό, νερό και βόλτα', 'να μένει μόνος στο μπαλκόνι'], en: ['only to sleep', 'to eat chocolate', 'food, water and a walk', 'to stay alone on the balcony'] },
    correct: 2,
    explanation: {
      el: 'Ένα ζώο συντροφιάς θέλει φροντίδα κάθε μέρα: φαγητό, καθαρό νερό, βόλτα και παρέα. Η σοκολάτα κάνει κακό στους σκύλους!',
      en: 'A pet needs care every day: food, clean water, a walk and company. Chocolate is bad for dogs!',
    },
  },

  // ── 3–5: farm animals ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ζώο της φάρμας μάς δίνει γάλα;', en: 'Which farm animal gives us milk?' },
    options: { el: ['το κοτόπουλο', 'η αγελάδα', 'το γουρούνι', 'το άλογο'], en: ['the chicken', 'the cow', 'the pig', 'the horse'] },
    correct: 1,
    explanation: {
      el: 'Η αγελάδα μάς δίνει γάλα. Από το γάλα φτιάχνουμε τυρί, γιαούρτι και βούτυρο.',
      en: 'The cow gives us milk. From milk we make cheese, yoghurt and butter.',
    },
  },
  {
    q: { el: 'Από ποιο ζώο παίρνουμε το μαλλί για τα πουλόβερ μας;', en: 'From which animal do we get the wool for our jumpers?' },
    options: { el: ['η κατσίκα', 'η γαλοπούλα', 'το πρόβατο', 'η πάπια'], en: ['the goat', 'the turkey', 'the sheep', 'the duck'] },
    correct: 2,
    explanation: {
      el: 'Το πρόβατο έχει παχύ, σγουρό μαλλί. Το κουρεύουμε την άνοιξη και φτιάχνουμε ζεστά ρούχα.',
      en: 'The sheep has thick, curly wool. We shear it in spring and make warm clothes.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το μικρό της αγελάδας;', en: 'What is the baby of a cow called?' },
    options: { el: ['αρνάκι', 'κατσικάκι', 'μοσχάρι', 'πουλάρι'], en: ['lamb', 'kid', 'calf', 'foal'] },
    correct: 2,
    explanation: {
      el: 'Το μικρό της αγελάδας είναι το μοσχάρι. Το αρνάκι είναι του προβάτου, το κατσικάκι της κατσίκας και το πουλάρι του αλόγου.',
      en: 'The baby of a cow is a calf. A lamb is a baby sheep, a kid a baby goat and a foal a baby horse.',
    },
  },

  // ── 6–9: mountain & forest wildlife ─────────────────────────────────────────
  {
    q: { el: 'Ποιο ζώο του βουνού κοιμάται σχεδόν όλο τον χειμώνα μέσα στη φωλιά του;', en: 'Which mountain animal sleeps almost all winter in its den?' },
    options: { el: ['ο λύκος', 'το ελάφι', 'ο λαγός', 'η αρκούδα'], en: ['the wolf', 'the deer', 'the hare', 'the bear'] },
    correct: 3,
    explanation: {
      el: 'Η αρκούδα τρώει πολύ το φθινόπωρο και μετά κοιμάται τον χειμώνα. Αυτό λέγεται χειμερία νάρκη.',
      en: 'The bear eats a lot in autumn and then sleeps through the winter. This is called hibernation.',
    },
  },
  {
    q: { el: 'Ποιο ζώο έχει αγκάθια στη ράχη του και γίνεται μπάλα όταν φοβάται;', en: 'Which animal has spines on its back and curls into a ball when scared?' },
    options: { el: ['ο σκίουρος', 'ο ασβός', 'ο σκαντζόχοιρος', 'η αλεπού'], en: ['the squirrel', 'the badger', 'the hedgehog', 'the fox'] },
    correct: 2,
    explanation: {
      el: 'Ο σκαντζόχοιρος κουλουριάζεται και δείχνει μόνο τα αγκάθια του. Έτσι κανένα ζώο δεν μπορεί να τον πειράξει.',
      en: 'The hedgehog curls up and shows only its spines. That way no animal can bother it.',
    },
  },
  {
    q: { el: 'Τι μαζεύει ο σκίουρος το φθινόπωρο για να έχει φαγητό τον χειμώνα;', en: 'What does the squirrel collect in autumn so it has food in winter?' },
    options: { el: ['ψάρια', 'καρύδια και βελανίδια', 'χορτάρι', 'μύγες'], en: ['fish', 'nuts and acorns', 'grass', 'flies'] },
    correct: 1,
    explanation: {
      el: 'Ο σκίουρος κρύβει καρύδια, φουντούκια και βελανίδια σε τρύπες. Τον χειμώνα τα βρίσκει και τα τρώει.',
      en: 'The squirrel hides nuts, hazelnuts and acorns in holes. In winter it finds them and eats them.',
    },
  },
  {
    q: { el: 'Ο λύκος ζει στο δάσος. Πώς ζει συνήθως;', en: 'The wolf lives in the forest. How does it usually live?' },
    options: { el: ['πάντα μόνος του', 'με την αγέλη του', 'μέσα στη θάλασσα', 'μέσα σε κλουβί'], en: ['always alone', 'with its pack', 'in the sea', 'in a cage'] },
    correct: 1,
    explanation: {
      el: 'Οι λύκοι ζουν σε ομάδες που λέγονται αγέλες. Όλη η αγέλη είναι μια μεγάλη οικογένεια.',
      en: 'Wolves live in groups called packs. The whole pack is one big family.',
    },
  },

  // ── 10–12: birds ────────────────────────────────────────────────────────────
  {
    q: { el: 'Τι έχουν όλα τα πουλιά;', en: 'What do all birds have?' },
    options: { el: ['τρίχες και δόντια', 'φτερά και ράμφος', 'λέπια και πτερύγια', 'κέρατα και οπλές'], en: ['fur and teeth', 'feathers and a beak', 'scales and fins', 'horns and hooves'] },
    correct: 1,
    explanation: {
      el: 'Όλα τα πουλιά έχουν φτερά και ράμφος και γεννούν αυγά. Λέπια έχουν τα ψάρια, τρίχες έχουν τα θηλαστικά.',
      en: 'All birds have feathers and a beak, and they lay eggs. Fish have scales, mammals have fur.',
    },
  },
  {
    q: { el: 'Ποιο πουλί φεύγει το φθινόπωρο για ζεστές χώρες και γυρίζει την άνοιξη;', en: 'Which bird leaves in autumn for warm countries and comes back in spring?' },
    options: { el: ['το σπουργίτι', 'το χελιδόνι', 'η κουκουβάγια', 'η κότα'], en: ['the sparrow', 'the swallow', 'the owl', 'the hen'] },
    correct: 1,
    explanation: {
      el: 'Το χελιδόνι είναι αποδημητικό πουλί: ταξιδεύει μακριά τον χειμώνα και την άνοιξη ξαναφτιάχνει τη φωλιά του εδώ.',
      en: 'The swallow is a migrating bird: it travels far away in winter and builds its nest here again in spring.',
    },
  },
  {
    q: { el: 'Ποιο πουλί κυνηγά τη νύχτα και βλέπει πολύ καλά στο σκοτάδι;', en: 'Which bird hunts at night and sees very well in the dark?' },
    options: { el: ['ο κούκος', 'η κουκουβάγια', 'το χελιδόνι', 'ο πελαργός'], en: ['the cuckoo', 'the owl', 'the swallow', 'the stork'] },
    correct: 1,
    explanation: {
      el: 'Η κουκουβάγια έχει μεγάλα μάτια και πετάει αθόρυβα. Τη μέρα κοιμάται και τη νύχτα ψάχνει για ποντίκια.',
      en: 'The owl has big eyes and flies silently. It sleeps in the day and looks for mice at night.',
    },
  },

  // ── 13–15: sea animals ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ζώο της θάλασσας δεν είναι ψάρι και βγαίνει στην επιφάνεια για να πάρει αέρα;', en: 'Which sea animal is not a fish and comes to the surface to breathe air?' },
    options: { el: ['η τσιπούρα', 'το δελφίνι', 'η σαρδέλα', 'ο ξιφίας'], en: ['the sea bream', 'the dolphin', 'the sardine', 'the swordfish'] },
    correct: 1,
    explanation: {
      el: 'Το δελφίνι μοιάζει με ψάρι, αλλά είναι θηλαστικό: αναπνέει αέρα από μια τρύπα στο κεφάλι του και θηλάζει τα μικρά του.',
      en: 'The dolphin looks like a fish, but it is a mammal: it breathes air through a hole on its head and feeds its babies milk.',
    },
  },
  {
    q: { el: 'Με τι αναπνέουν τα ψάρια μέσα στο νερό;', en: 'What do fish breathe with under the water?' },
    options: { el: ['με τη μύτη', 'με τα πτερύγια', 'με τα λέπια', 'με τα βράγχια'], en: ['with their nose', 'with their fins', 'with their scales', 'with their gills'] },
    correct: 3,
    explanation: {
      el: 'Τα ψάρια αναπνέουν με τα βράγχια, που βρίσκονται στα πλάγια του κεφαλιού τους. Τα πτερύγια τα βοηθούν να κολυμπούν.',
      en: 'Fish breathe with their gills, found on the sides of their head. Fins help them swim.',
    },
  },
  {
    q: { el: 'Η Ελένη είδε ένα χταπόδι στον βυθό. Πόσα πλοκάμια έχει;', en: 'Eleni saw an octopus on the sea floor. How many arms does it have?' },
    options: { el: ['6', '8', '10', '4'], en: ['6', '8', '10', '4'] },
    correct: 1,
    explanation: {
      el: 'Το χταπόδι έχει 8 πλοκάμια με βεντούζες. Όταν φοβάται, ρίχνει μαύρο μελάνι και κρύβεται!',
      en: 'The octopus has 8 arms with suckers. When it is scared, it squirts black ink and hides!',
    },
  },

  // ── 16–18: freshwater animals & how animals are born ────────────────────────
  {
    q: { el: 'Ποιο ζώο ζει σε λίμνες και ποτάμια και όχι στη θάλασσα;', en: 'Which animal lives in lakes and rivers, not in the sea?' },
    options: { el: ['ο βάτραχος', 'ο καρχαρίας', 'η μέδουσα', 'το δελφίνι'], en: ['the frog', 'the shark', 'the jellyfish', 'the dolphin'] },
    correct: 0,
    explanation: {
      el: 'Ο βάτραχος ζει κοντά σε γλυκό νερό: λίμνες, ποτάμια και βάλτους. Ο καρχαρίας, η μέδουσα και το δελφίνι ζουν στην αλμυρή θάλασσα.',
      en: 'The frog lives near fresh water: lakes, rivers and marshes. The shark, the jellyfish and the dolphin live in the salty sea.',
    },
  },
  {
    q: { el: 'Ο βάτραχος βγαίνει από το αυγό. Πώς είναι στην αρχή;', en: 'The frog hatches from an egg. What is it like at first?' },
    options: { el: ['ένας μικρός βάτραχος με τέσσερα πόδια', 'μια κάμπια', 'ένα σκουλήκι', 'ένας γυρίνος με ουρά'], en: ['a small frog with four legs', 'a caterpillar', 'a worm', 'a tadpole with a tail'] },
    correct: 3,
    explanation: {
      el: 'Από το αυγό βγαίνει ο γυρίνος: έχει ουρά και κολυμπάει σαν ψαράκι. Σιγά σιγά βγάζει πόδια, χάνει την ουρά και γίνεται βάτραχος.',
      en: 'A tadpole hatches from the egg: it has a tail and swims like a little fish. Slowly it grows legs, loses its tail and becomes a frog.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά τα ζώα γεννάει ζωντανά μικρά και τα θηλάζει με γάλα;', en: 'Which of these animals gives birth to live babies and feeds them milk?' },
    options: { el: ['η χελώνα', 'η κότα', 'η γάτα', 'ο βάτραχος'], en: ['the turtle', 'the hen', 'the cat', 'the frog'] },
    correct: 2,
    explanation: {
      el: 'Η γάτα είναι θηλαστικό: γεννάει γατάκια και τα θηλάζει. Η χελώνα, η κότα και ο βάτραχος γεννούν αυγά.',
      en: 'The cat is a mammal: it gives birth to kittens and feeds them milk. The turtle, the hen and the frog lay eggs.',
    },
  },
];
