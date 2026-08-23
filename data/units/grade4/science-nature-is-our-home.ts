/**
 * Δ' Δημοτικού · Μελέτη Περιβάλλοντος · «Η Φύση είναι το Σπίτι μας»
 * ===================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–2   what an ecosystem is; the ecosystems of Greece (sea, wetland, mountain)
 *   3–6   vertebrates and invertebrates; the groups (amphibians, mammals)
 *   7–9   pollen carried by bees; seeds travelling by wind and on animals
 *   10–11 air pollution in the city and what cleans the air
 *   12–13 recycling: what it means, what goes in the blue bin
 *   14–15 saving water at home
 *   16    forests give us oxygen
 *   17–18 endangered animals of Greece: the caretta-caretta turtle
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_SCIENCE_NATURE_IS_OUR_HOME: QuizQuestion[] = [
  // ── 1–2: ecosystems ────────────────────────────────────────────────────────
  {
    q: { el: 'Μια λίμνη με το νερό της, τα καλάμια, τα ψάρια και τα βατράχια της είναι…', en: 'A lake with its water, reeds, fish and frogs is…' },
    options: { el: ['ένα οικοσύστημα', 'ένας ζωολογικός κήπος', 'μια φάρμα', 'ένα ενυδρείο'], en: ['an ecosystem', 'a zoo', 'a farm', 'an aquarium'] },
    correct: 0,
    explanation: {
      el: 'Οικοσύστημα είναι ένας τόπος μαζί με όλα τα ζωντανά που ζουν εκεί. Το νερό, τα φυτά και τα ζώα της λίμνης χρειάζονται το ένα το άλλο.',
      en: 'An ecosystem is a place together with all the living things in it. The water, plants and animals of the lake need each other.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι υγρότοπος;', en: 'Which of these is a wetland?' },
    options: { el: ['μια ξερή πλαγιά με πέτρες', 'μια χιονισμένη κορυφή βουνού', 'μια λίμνη με καλάμια και πελαργούς', 'μια πλατεία στο κέντρο της πόλης'], en: ['a dry rocky slope', 'a snowy mountain top', 'a lake with reeds and storks', 'a square in the city centre'] },
    correct: 2,
    explanation: {
      el: 'Υγρότοπος σημαίνει «υγρός τόπος»: λίμνες, βάλτοι και δέλτα ποταμών. Η Ελλάδα έχει πολλούς, και εκεί ξεκουράζονται χιλιάδες πουλιά.',
      en: 'Wetland means “wet place”: lakes, marshes and river deltas. Greece has many, and thousands of birds rest there.',
    },
  },

  // ── 3–6: vertebrates and invertebrates ──────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά τα ζώα έχει σπονδυλική στήλη (κόκαλα στην πλάτη);', en: 'Which of these animals has a backbone?' },
    options: { el: ['το σκουλήκι', 'η μέλισσα', 'η σαύρα', 'η αράχνη'], en: ['the worm', 'the bee', 'the lizard', 'the spider'] },
    correct: 2,
    explanation: {
      el: 'Η σαύρα είναι σπονδυλωτό: έχει σκελετό και σπονδυλική στήλη, όπως κι εμείς. Τα σκουλήκια, οι μέλισσες και οι αράχνες δεν έχουν κόκαλα.',
      en: 'The lizard is a vertebrate: it has a skeleton and a backbone, like us. Worms, bees and spiders have no bones.',
    },
  },
  {
    q: { el: 'Ο Νίκος βρήκε ένα σαλιγκάρι στον κήπο. Σε ποια ομάδα ανήκει;', en: 'Nikos found a snail in the garden. Which group does it belong to?' },
    options: { el: ['στα ασπόνδυλα', 'στα ψάρια', 'στα ερπετά', 'στα θηλαστικά'], en: ['the invertebrates', 'the fish', 'the reptiles', 'the mammals'] },
    correct: 0,
    explanation: {
      el: 'Το σαλιγκάρι δεν έχει κόκαλα, γι\' αυτό είναι ασπόνδυλο. Το κέλυφός του το προστατεύει, αλλά δεν είναι σκελετός.',
      en: 'The snail has no bones, so it is an invertebrate. Its shell protects it, but it is not a skeleton.',
    },
  },
  {
    q: { el: 'Ο βάτραχος ζει στο νερό όταν είναι μικρός (γυρίνος) και στη στεριά όταν μεγαλώσει. Σε ποια ομάδα ανήκει;', en: 'A frog lives in the water when it is small (a tadpole) and on land when it grows up. Which group does it belong to?' },
    options: { el: ['στα ψάρια', 'στα ερπετά', 'στα θηλαστικά', 'στα αμφίβια'], en: ['the fish', 'the reptiles', 'the mammals', 'the amphibians'] },
    correct: 3,
    explanation: {
      el: 'Αμφίβιο σημαίνει «ζει και στα δύο»: και στο νερό και στη στεριά. Βάτραχοι και σαλαμάνδρες είναι αμφίβια.',
      en: 'Amphibian means “lives in both”: in the water and on land. Frogs and salamanders are amphibians.',
    },
  },
  {
    q: { el: 'Το δελφίνι ζει στη θάλασσα, αλλά ανεβαίνει για να πάρει αέρα και ταΐζει το μικρό του με γάλα. Τι είναι;', en: 'The dolphin lives in the sea, but it comes up for air and feeds its baby with milk. What is it?' },
    options: { el: ['ψάρι', 'θηλαστικό', 'αμφίβιο', 'ερπετό'], en: ['a fish', 'a mammal', 'an amphibian', 'a reptile'] },
    correct: 1,
    explanation: {
      el: 'Το δελφίνι είναι θηλαστικό, όχι ψάρι! Αναπνέει αέρα με πνεύμονες και θηλάζει τα μικρά του, όπως η φάλαινα.',
      en: 'The dolphin is a mammal, not a fish! It breathes air with lungs and feeds its babies milk, just like the whale.',
    },
  },

  // ── 7–9: pollen and seed travel ────────────────────────────────────────────
  {
    q: { el: 'Η μέλισσα πετάει από λουλούδι σε λουλούδι. Τι κουβαλάει πάνω στο σώμα της από το ένα στο άλλο;', en: 'The bee flies from flower to flower. What does it carry on its body from one to the next?' },
    options: { el: ['νερό', 'γύρη', 'σπόρους', 'φύλλα'], en: ['water', 'pollen', 'seeds', 'leaves'] },
    correct: 1,
    explanation: {
      el: 'Η γύρη είναι η κίτρινη σκόνη του λουλουδιού. Όταν η μέλισσα τη μεταφέρει σε άλλο λουλούδι, το φυτό μπορεί να κάνει καρπούς και σπόρους.',
      en: 'Pollen is the yellow dust of a flower. When the bee carries it to another flower, the plant can make fruit and seeds.',
    },
  },
  {
    q: { el: 'Η Μαρία φυσάει μια πικραλίδα και οι σπόροι της πετούν μακριά σαν μικρά αλεξίπτωτα. Πώς ταξιδεύουν αυτοί οι σπόροι;', en: 'Maria blows on a dandelion and its seeds fly away like tiny parachutes. How do these seeds travel?' },
    options: { el: ['πάνω στα ζώα', 'με το νερό', 'μόνοι τους, περπατώντας', 'με τον άνεμο'], en: ['on animals', 'by water', 'by themselves, walking', 'by the wind'] },
    correct: 3,
    explanation: {
      el: 'Οι ελαφροί σπόροι με «φτερά» ή «αλεξίπτωτα» ταξιδεύουν με τον άνεμο. Έτσι το φυτό φυτρώνει σε νέα μέρη, μακριά από τη μαμά του.',
      en: 'Light seeds with “wings” or “parachutes” travel by the wind. That way the plant grows in new places, far from its parent.',
    },
  },
  {
    q: { el: 'Μετά τη βόλτα στο χωράφι, ο Γιώργος βρήκε στις κάλτσες του σπόρους με μικρά αγκίστρια. Πώς ταξιδεύουν αυτοί οι σπόροι;', en: 'After a walk in the field, Giorgos found seeds with tiny hooks on his socks. How do these seeds travel?' },
    options: { el: ['με τον άνεμο', 'με τη βροχή', 'γαντζωμένοι σε ζώα και ρούχα', 'με τις ρίζες τους'], en: ['by the wind', 'by the rain', 'hooked onto animals and clothes', 'with their roots'] },
    correct: 2,
    explanation: {
      el: 'Κάποιοι σπόροι έχουν αγκίστρια και γαντζώνονται στο τρίχωμα των ζώων ή στα ρούχα μας. Όπου πέσουν, εκεί φυτρώνουν!',
      en: 'Some seeds have hooks and cling to animal fur or our clothes. Wherever they fall off, there they grow!',
    },
  },

  // ── 10–11: air pollution ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά κάνει τον αέρα της πόλης βρόμικο;', en: 'Which of these makes the city air dirty?' },
    options: { el: ['τα ποδήλατα', 'τα καυσαέρια των αυτοκινήτων', 'τα δέντρα στα πάρκα', 'η βροχή'], en: ['bicycles', 'car exhaust fumes', 'the trees in the parks', 'the rain'] },
    correct: 1,
    explanation: {
      el: 'Τα αυτοκίνητα και τα εργοστάσια βγάζουν καυσαέρια που ρυπαίνουν τον αέρα. Το ποδήλατο δεν βγάζει καθόλου καπνό!',
      en: 'Cars and factories give off fumes that pollute the air. A bicycle gives off no smoke at all!',
    },
  },
  {
    q: { el: 'Τι μπορεί να κάνει μια γειτονιά για να έχει πιο καθαρό αέρα;', en: 'What can a neighbourhood do to have cleaner air?' },
    options: { el: ['να καίει τα σκουπίδια στην αυλή', 'να πηγαίνουν όλοι παντού με αυτοκίνητο', 'να φυτέψει δέντρα και να περπατάει πιο πολύ', 'να κλείσει τα παράθυρα'], en: ['burn the rubbish in the yard', 'have everyone drive everywhere', 'plant trees and walk more', 'keep the windows shut'] },
    correct: 2,
    explanation: {
      el: 'Τα δέντρα καθαρίζουν τον αέρα και όταν περπατάμε ή παίρνουμε το λεωφορείο, λιγότερα αυτοκίνητα καπνίζουν στους δρόμους.',
      en: 'Trees clean the air, and when we walk or take the bus, fewer cars are puffing smoke on the roads.',
    },
  },

  // ── 12–13: recycling ───────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «ανακύκλωση»;', en: 'What does “recycling” mean?' },
    options: { el: ['πετάμε τα σκουπίδια στον δρόμο', 'φτιάχνουμε καινούργια πράγματα από παλιά υλικά', 'αγοράζουμε καινούργια πράγματα κάθε μέρα', 'καίμε τα σκουπίδια για να χαθούν'], en: ['throwing rubbish in the street', 'making new things out of old materials', 'buying new things every day', 'burning rubbish so it disappears'] },
    correct: 1,
    explanation: {
      el: 'Με την ανακύκλωση ένα παλιό χαρτί γίνεται καινούργιο χαρτί και ένα μπουκάλι γίνεται καινούργιο μπουκάλι. Έτσι κόβουμε λιγότερα δέντρα και κάνουμε λιγότερα σκουπίδια.',
      en: 'With recycling, old paper becomes new paper and a bottle becomes a new bottle. That way we cut fewer trees and make less rubbish.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να βάλει κάτι στον μπλε κάδο ανακύκλωσης. Τι πρέπει να βάλει;', en: 'Eleni wants to put something in the blue recycling bin. What should she put in?' },
    options: { el: ['τα υπολείμματα από το φαγητό', 'τα χαρτιά και τα πλαστικά μπουκάλια', 'τις παλιές μπαταρίες', 'τα κλαδιά από τον κήπο'], en: ['the leftover food', 'the paper and plastic bottles', 'the old batteries', 'the branches from the garden'] },
    correct: 1,
    explanation: {
      el: 'Στον μπλε κάδο πάνε χαρτί, πλαστικό, γυαλί και μέταλλο. Οι μπαταρίες πάνε σε ειδικό κουτί και τα υπολείμματα φαγητού στα σκουπίδια ή στην κομποστοποίηση.',
      en: 'Paper, plastic, glass and metal go in the blue bin. Batteries go in a special box, and leftover food goes in the rubbish or the compost.',
    },
  },

  // ── 14–15: saving water ────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος βουρτσίζει τα δόντια του. Πότε πρέπει να κλείνει τη βρύση;', en: 'Nikos is brushing his teeth. When should he turn off the tap?' },
    options: { el: ['ποτέ, το νερό δεν τελειώνει', 'όση ώρα βουρτσίζει', 'μόνο όταν φύγει από το σπίτι', 'μόνο τον χειμώνα'], en: ['never, water never runs out', 'while he is brushing', 'only when he leaves the house', 'only in winter'] },
    correct: 1,
    explanation: {
      el: 'Το καθαρό νερό είναι λίγο και πολύτιμο. Αν κλείνουμε τη βρύση όσο βουρτσίζουμε, γλιτώνουμε πολλά λίτρα κάθε μέρα.',
      en: 'Clean water is scarce and precious. If we turn off the tap while brushing, we save many litres every day.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά ξοδεύει το περισσότερο νερό;', en: 'Which of these uses the most water?' },
    options: { el: ['ένα γρήγορο ντους 5 λεπτών', 'μια γεμάτη μπανιέρα', 'ένα ποτήρι νερό', 'το πότισμα μιας γλάστρας'], en: ['a quick 5-minute shower', 'a full bathtub', 'a glass of water', 'watering a flowerpot'] },
    correct: 1,
    explanation: {
      el: 'Για να γεμίσει μια μπανιέρα χρειάζονται πολλά περισσότερα λίτρα από ένα γρήγορο ντους. Το σύντομο ντους είναι φίλος του νερού!',
      en: 'Filling a bathtub takes many more litres than a quick shower. A short shower is a friend of water!',
    },
  },

  // ── 16: forests ────────────────────────────────────────────────────────────
  {
    q: { el: 'Γιατί λέμε ότι το δάσος είναι «ο πνεύμονας» της Γης;', en: 'Why do we say the forest is “the lungs” of the Earth?' },
    options: { el: ['γιατί τα δέντρα δίνουν οξυγόνο για να αναπνέουμε', 'γιατί τα δέντρα φυσάνε αέρα', 'γιατί το δάσος είναι πάντα δροσερό', 'γιατί στο δάσος ζουν πολλά πουλιά'], en: ['because trees give us oxygen to breathe', 'because trees blow air', 'because the forest is always cool', 'because many birds live in the forest'] },
    correct: 0,
    explanation: {
      el: 'Τα φύλλα των δέντρων παίρνουν τον βρόμικο αέρα και δίνουν πίσω οξυγόνο. Γι\' αυτό προστατεύουμε τα δάση από τις φωτιές.',
      en: 'Tree leaves take in dirty air and give back oxygen. That is why we protect forests from fires.',
    },
  },

  // ── 17–18: endangered animals of Greece ────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά τα ζώα της Ελλάδας κινδυνεύει να εξαφανιστεί;', en: 'Which of these animals of Greece is in danger of disappearing?' },
    options: { el: ['το περιστέρι', 'η γάτα', 'η θαλάσσια χελώνα καρέτα-καρέτα', 'το κοτόπουλο'], en: ['the pigeon', 'the cat', 'the caretta-caretta sea turtle', 'the chicken'] },
    correct: 2,
    explanation: {
      el: 'Η καρέτα-καρέτα είναι ένα από τα απειλούμενα ζώα της Ελλάδας, μαζί με τη φώκια μονάχους-μονάχους και την καφέ αρκούδα. Γεννάει τα αυγά της σε παραλίες όπως της Ζακύνθου.',
      en: 'The caretta-caretta is one of the endangered animals of Greece, along with the monk seal and the brown bear. It lays its eggs on beaches like those of Zakynthos.',
    },
  },
  {
    q: { el: 'Η Μαρία κάνει διακοπές σε μια παραλία όπου γεννούν οι χελώνες καρέτα-καρέτα. Πώς μπορεί να τις βοηθήσει;', en: 'Maria is on holiday at a beach where caretta-caretta turtles lay their eggs. How can she help them?' },
    options: { el: ['να σκάψει τις φωλιές για να δει τα αυγά', 'να αφήσει την παραλία ήσυχη, σκοτεινή και καθαρή τη νύχτα', 'να πάρει ένα χελωνάκι σπίτι της', 'να στήσει την ομπρέλα της πάνω από τη φωλιά'], en: ['dig up the nests to see the eggs', 'leave the beach quiet, dark and clean at night', 'take a baby turtle home', 'put her umbrella up over the nest'] },
    correct: 1,
    explanation: {
      el: 'Τα χελωνάκια βγαίνουν τη νύχτα και βρίσκουν τη θάλασσα από το φως του φεγγαριού. Φώτα, θόρυβος και σκουπίδια τα μπερδεύουν. Το καλύτερο που κάνουμε είναι να μην τα ενοχλούμε.',
      en: 'Baby turtles hatch at night and find the sea by the light of the moon. Lights, noise and litter confuse them. The best thing we can do is leave them alone.',
    },
  },
];
