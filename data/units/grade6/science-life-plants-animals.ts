/**
 * ΣΤ' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Έμβια, Φυτά & Ζώα
 * =====================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12. Ordered easiest → hardest:
 *   1–3   what makes something alive (characteristics of life)
 *   4–6   the cell: building block, nucleus, plant vs animal cell
 *   7–9   photosynthesis: what goes in, what comes out, where it happens
 *   10–11 plant respiration — plants breathe too, day and night
 *   12–13 invertebrates: insects, spiders, snails, worms
 *   14–16 vertebrates & mammals: backbone, the five groups, dolphins and bats
 *   17–18 adaptation: camel, polar bear, cactus
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_SCIENCE_LIFE_PLANTS_ANIMALS: QuizQuestion[] = [
  // ── 1–3: characteristics of life ──────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος βρήκε στον κήπο μια πέτρα, ένα σαλιγκάρι, ένα κουμπί και ένα κομμάτι γυαλί. Ποιο από αυτά είναι έμβιο (ζωντανό);', en: 'Nikos found a stone, a snail, a button and a piece of glass in the garden. Which one is a living thing?' },
    options: { el: ['Η πέτρα', 'Το κουμπί', 'Το σαλιγκάρι', 'Το γυαλί'], en: ['The stone', 'The button', 'The snail', 'The glass'] },
    correct: 2,
    explanation: {
      el: 'Μόνο το σαλιγκάρι τρέφεται, αναπνέει, μεγαλώνει και κάνει μικρά. Τα άλλα τρία δεν κάνουν τίποτα από αυτά.',
      en: 'Only the snail eats, breathes, grows and has babies. The other three do none of these things.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ΔΕΝ είναι χαρακτηριστικό των ζωντανών οργανισμών;', en: 'Which of these is NOT a characteristic of living things?' },
    options: { el: ['Αναπνέουν', 'Αναπαράγονται', 'Μεγαλώνουν', 'Κινούνται μόνο με ρεύμα'], en: ['They breathe', 'They reproduce', 'They grow', 'They move only with electricity'] },
    correct: 3,
    explanation: {
      el: 'Τα ζωντανά πλάσματα αναπνέουν, τρέφονται, μεγαλώνουν, αντιδρούν και αναπαράγονται. Το ρεύμα το χρειάζονται οι μηχανές, όχι οι οργανισμοί.',
      en: 'Living things breathe, feed, grow, react and reproduce. Electricity is for machines, not for living creatures.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «Το αυτοκίνητο τρώει βενζίνη, κινείται και βγάζει καπνό, άρα είναι ζωντανό!» Γιατί κάνει λάθος;', en: 'Eleni says: “A car drinks petrol, moves and gives off smoke, so it is alive!” Why is she wrong?' },
    options: { el: ['Γιατί το αυτοκίνητο δεν μεγαλώνει ούτε αναπαράγεται', 'Γιατί το αυτοκίνητο είναι πολύ μεγάλο', 'Γιατί το αυτοκίνητο δεν έχει χρώμα', 'Γιατί το αυτοκίνητο δεν κινείται γρήγορα'], en: ['Because a car does not grow or reproduce', 'Because a car is too big', 'Because a car has no colour', 'Because a car does not move fast'] },
    correct: 0,
    explanation: {
      el: 'Για να είναι κάτι ζωντανό πρέπει να έχει ΟΛΑ τα χαρακτηριστικά της ζωής. Το αυτοκίνητο δεν μεγαλώνει, δεν αναπαράγεται και δεν αποτελείται από κύτταρα.',
      en: 'To be alive, something must have ALL the characteristics of life. A car does not grow, does not reproduce and is not made of cells.',
    },
  },

  // ── 4–6: the cell ─────────────────────────────────────────────────────────
  {
    q: { el: 'Από τι αποτελούνται όλοι οι ζωντανοί οργανισμοί, από τη μικρότερη μύγα μέχρι τον ελέφαντα;', en: 'What are all living things made of, from the tiniest fly to the elephant?' },
    options: { el: ['Από νερό μόνο', 'Από κύτταρα', 'Από κόκαλα', 'Από αέρα'], en: ['Only water', 'Cells', 'Bones', 'Air'] },
    correct: 1,
    explanation: {
      el: 'Το κύτταρο είναι το «τουβλάκι» της ζωής. Κάποιοι οργανισμοί έχουν ένα μόνο κύτταρο, ο άνθρωπος έχει τρισεκατομμύρια.',
      en: 'The cell is the “building block” of life. Some living things have just one cell; a human has trillions.',
    },
  },
  {
    q: { el: 'Ποιο μέρος του κυττάρου λειτουργεί σαν «αρχηγός» και ελέγχει ό,τι γίνεται μέσα του;', en: 'Which part of the cell acts as the “boss” and controls everything that happens inside it?' },
    options: { el: ['Η κυτταρική μεμβράνη', 'Το κυτταρόπλασμα', 'Ο πυρήνας', 'Το κυτταρικό τοίχωμα'], en: ['The cell membrane', 'The cytoplasm', 'The nucleus', 'The cell wall'] },
    correct: 2,
    explanation: {
      el: 'Ο πυρήνας είναι το κέντρο ελέγχου του κυττάρου. Η μεμβράνη το περιβάλλει και το κυτταρόπλασμα είναι το «ζελέ» που γεμίζει το εσωτερικό.',
      en: 'The nucleus is the control centre of the cell. The membrane wraps around it, and the cytoplasm is the “jelly” that fills the inside.',
    },
  },
  {
    q: { el: 'Ο Γιώργος κοιτάζει στο μικροσκόπιο ένα κύτταρο με σκληρό κυτταρικό τοίχωμα και πράσινους χλωροπλάστες. Από πού προέρχεται;', en: 'Giorgos looks through a microscope at a cell with a stiff cell wall and green chloroplasts. Where did it come from?' },
    options: { el: ['Από ένα φυτό', 'Από ένα ψάρι', 'Από έναν άνθρωπο', 'Από μια γάτα'], en: ['From a plant', 'From a fish', 'From a human', 'From a cat'] },
    correct: 0,
    explanation: {
      el: 'Μόνο τα φυτικά κύτταρα έχουν κυτταρικό τοίχωμα και χλωροπλάστες. Τα ζωικά κύτταρα έχουν μόνο μεμβράνη και δεν είναι πράσινα.',
      en: 'Only plant cells have a cell wall and chloroplasts. Animal cells have just a membrane and are never green.',
    },
  },

  // ── 7–9: photosynthesis ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται η διαδικασία με την οποία τα φυτά φτιάχνουν μόνα τους την τροφή τους;', en: 'What is the name of the process plants use to make their own food?' },
    options: { el: ['Αναπνοή', 'Φωτοσύνθεση', 'Εξάτμιση', 'Πέψη'], en: ['Respiration', 'Photosynthesis', 'Evaporation', 'Digestion'] },
    correct: 1,
    explanation: {
      el: 'Φωτοσύνθεση = «σύνθεση με φως». Τα φυτά χρησιμοποιούν το φως του ήλιου για να φτιάξουν τροφή. Είναι οι μόνοι «μάγειρες» που δεν χρειάζονται κουζίνα!',
      en: 'Photosynthesis means “making with light”. Plants use sunlight to make food. They are the only “cooks” that need no kitchen!',
    },
  },
  {
    q: { el: 'Ποια τρία «υλικά» χρειάζεται ένα φυτό για τη φωτοσύνθεση;', en: 'Which three “ingredients” does a plant need for photosynthesis?' },
    options: { el: ['Νερό, οξυγόνο και σκοτάδι', 'Χώμα, λίπασμα και ζέστη', 'Νερό, διοξείδιο του άνθρακα και φως', 'Οξυγόνο, ζάχαρη και φως'], en: ['Water, oxygen and darkness', 'Soil, fertiliser and heat', 'Water, carbon dioxide and light', 'Oxygen, sugar and light'] },
    correct: 2,
    explanation: {
      el: 'Το φυτό παίρνει νερό από τις ρίζες, διοξείδιο του άνθρακα από τον αέρα και φως από τον ήλιο. Με αυτά φτιάχνει ζάχαρη (τροφή) και ελευθερώνει οξυγόνο.',
      en: 'The plant takes water through its roots, carbon dioxide from the air and light from the sun. With these it makes sugar (food) and releases oxygen.',
    },
  },
  {
    q: { el: 'Η Μαρία έβαλε μια γλάστρα μέσα σε ένα σκοτεινό ντουλάπι για δύο εβδομάδες, με νερό κάθε μέρα. Τι θα συμβεί στο φυτό;', en: 'Maria put a potted plant inside a dark cupboard for two weeks and watered it every day. What will happen to the plant?' },
    options: { el: ['Θα μεγαλώσει κανονικά, αφού έχει νερό', 'Θα κιτρινίσει και θα αδυνατίσει, γιατί δεν μπορεί να φωτοσυνθέσει', 'Θα γίνει πιο πράσινο, γιατί ξεκουράζεται', 'Θα βγάλει περισσότερα λουλούδια'], en: ['It will grow normally, since it has water', 'It will turn yellow and weak, because it cannot photosynthesise', 'It will become greener, because it is resting', 'It will grow more flowers'] },
    correct: 1,
    explanation: {
      el: 'Χωρίς φως δεν γίνεται φωτοσύνθεση, άρα το φυτό δεν φτιάχνει τροφή. Το νερό μόνο του δεν φτάνει — το φυτό «πεινάει» και χάνει το πράσινο χρώμα του.',
      en: 'Without light there is no photosynthesis, so the plant makes no food. Water alone is not enough — the plant “goes hungry” and loses its green colour.',
    },
  },

  // ── 10–11: plant respiration ──────────────────────────────────────────────
  {
    q: { el: 'Αναπνέουν τα φυτά;', en: 'Do plants breathe?' },
    options: { el: ['Όχι, μόνο τα ζώα αναπνέουν', 'Ναι, αλλά μόνο τη νύχτα', 'Ναι, μέρα και νύχτα, όπως όλοι οι ζωντανοί οργανισμοί', 'Μόνο όταν έχουν λουλούδια'], en: ['No, only animals breathe', 'Yes, but only at night', 'Yes, day and night, like all living things', 'Only when they have flowers'] },
    correct: 2,
    explanation: {
      el: 'Τα φυτά αναπνέουν συνέχεια: παίρνουν οξυγόνο και βγάζουν διοξείδιο του άνθρακα, όπως εμείς. Η φωτοσύνθεση όμως γίνεται μόνο με φως.',
      en: 'Plants breathe all the time: they take in oxygen and give out carbon dioxide, just like us. Photosynthesis, however, only happens with light.',
    },
  },
  {
    q: { el: 'Τη μέρα ένα φυτό φαίνεται να βγάζει οξυγόνο. Γιατί;', en: 'During the day a plant seems to give off oxygen. Why?' },
    options: { el: ['Γιατί τη μέρα δεν αναπνέει καθόλου', 'Γιατί η φωτοσύνθεση παράγει περισσότερο οξυγόνο από όσο καταναλώνει η αναπνοή', 'Γιατί το οξυγόνο βγαίνει από τις ρίζες', 'Γιατί το φυτό το φυλάει από τη νύχτα'], en: ['Because it does not breathe at all during the day', 'Because photosynthesis makes more oxygen than respiration uses up', 'Because oxygen comes out of the roots', 'Because the plant saves it up from the night'] },
    correct: 1,
    explanation: {
      el: 'Τη μέρα γίνονται και τα δύο: αναπνοή και φωτοσύνθεση. Η φωτοσύνθεση όμως παράγει πολύ περισσότερο οξυγόνο, γι\' αυτό συνολικά το φυτό «δίνει» οξυγόνο.',
      en: 'During the day both happen: respiration and photosynthesis. But photosynthesis makes far more oxygen, so overall the plant “gives out” oxygen.',
    },
  },

  // ── 12–13: invertebrates ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγονται τα ζώα που ΔΕΝ έχουν σπονδυλική στήλη, όπως το σαλιγκάρι και η μέλισσα;', en: 'What do we call animals that have NO backbone, like the snail and the bee?' },
    options: { el: ['Θηλαστικά', 'Ασπόνδυλα', 'Σπονδυλωτά', 'Ερπετά'], en: ['Mammals', 'Invertebrates', 'Vertebrates', 'Reptiles'] },
    correct: 1,
    explanation: {
      el: 'Α-σπόνδυλα = χωρίς σπονδύλους. Είναι η μεγαλύτερη ομάδα ζώων στη Γη: έντομα, αράχνες, σαλιγκάρια, σκουλήκια, μέδουσες.',
      en: 'In-vertebrate = without a backbone. They are the biggest group of animals on Earth: insects, spiders, snails, worms, jellyfish.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει ότι η αράχνη είναι έντομο. Η Ελένη διαφωνεί. Ποια είναι η σωστή απάντηση;', en: 'Nikos says a spider is an insect. Eleni disagrees. Who is right?' },
    options: { el: ['Ο Νίκος, γιατί η αράχνη είναι μικρή και έχει πολλά πόδια', 'Ο Νίκος, γιατί όλα τα ασπόνδυλα είναι έντομα', 'Η Ελένη, γιατί η αράχνη έχει 8 πόδια ενώ τα έντομα έχουν 6', 'Η Ελένη, γιατί η αράχνη έχει φτερά'], en: ['Nikos, because a spider is small and has many legs', 'Nikos, because all invertebrates are insects', 'Eleni, because a spider has 8 legs while insects have 6', 'Eleni, because a spider has wings'] },
    correct: 2,
    explanation: {
      el: 'Τα έντομα έχουν 6 πόδια και σώμα με 3 μέρη. Οι αράχνες έχουν 8 πόδια και σώμα με 2 μέρη — είναι αραχνίδια, όχι έντομα.',
      en: 'Insects have 6 legs and a body in 3 parts. Spiders have 8 legs and a body in 2 parts — they are arachnids, not insects.',
    },
  },

  // ── 14–16: vertebrates & mammals ──────────────────────────────────────────
  {
    q: { el: 'Τα σπονδυλωτά χωρίζονται σε πέντε ομάδες. Ποια τετράδα είναι ΟΛΗ σωστή;', en: 'Vertebrates are divided into five groups. Which set of four is entirely correct?' },
    options: { el: ['Ψάρια, αμφίβια, ερπετά, πτηνά', 'Ψάρια, έντομα, ερπετά, πτηνά', 'Ψάρια, αμφίβια, σαλιγκάρια, θηλαστικά', 'Αράχνες, αμφίβια, ερπετά, θηλαστικά'], en: ['Fish, amphibians, reptiles, birds', 'Fish, insects, reptiles, birds', 'Fish, amphibians, snails, mammals', 'Spiders, amphibians, reptiles, mammals'] },
    correct: 0,
    explanation: {
      el: 'Οι πέντε ομάδες σπονδυλωτών είναι: ψάρια, αμφίβια, ερπετά, πτηνά και θηλαστικά. Τα έντομα, οι αράχνες και τα σαλιγκάρια είναι ασπόνδυλα.',
      en: 'The five vertebrate groups are: fish, amphibians, reptiles, birds and mammals. Insects, spiders and snails are invertebrates.',
    },
  },
  {
    q: { el: 'Ποιο χαρακτηριστικό έχουν ΟΛΑ τα θηλαστικά;', en: 'Which feature do ALL mammals share?' },
    options: { el: ['Ζουν στη στεριά', 'Θηλάζουν τα μικρά τους με γάλα', 'Έχουν τέσσερα πόδια', 'Γεννούν αυγά'], en: ['They live on land', 'They feed their young with milk', 'They have four legs', 'They lay eggs'] },
    correct: 1,
    explanation: {
      el: 'Θηλαστικά = θηλάζουν. Όλα ταΐζουν τα μικρά τους με γάλα, έχουν τρίχες και αναπνέουν με πνεύμονες. Δεν ζουν όλα στη στεριά (π.χ. η φάλαινα).',
      en: 'Mammals all feed their babies milk, have hair and breathe with lungs. They do not all live on land (think of the whale).',
    },
  },
  {
    q: { el: 'Το δελφίνι ζει στη θάλασσα και η νυχτερίδα πετάει. Σε ποια ομάδα ανήκουν και τα δύο;', en: 'The dolphin lives in the sea and the bat flies. Which group do they both belong to?' },
    options: { el: ['Το δελφίνι στα ψάρια, η νυχτερίδα στα πτηνά', 'Και τα δύο στα θηλαστικά', 'Και τα δύο στα ερπετά', 'Το δελφίνι στα αμφίβια, η νυχτερίδα στα έντομα'], en: ['The dolphin with the fish, the bat with the birds', 'Both are mammals', 'Both are reptiles', 'The dolphin with the amphibians, the bat with the insects'] },
    correct: 1,
    explanation: {
      el: 'Και τα δύο γεννούν ζωντανά μικρά, τα θηλάζουν και αναπνέουν με πνεύμονες — γι\' αυτό το δελφίνι βγαίνει στην επιφάνεια για αέρα. Το πού ζει ένα ζώο δεν καθορίζει την ομάδα του.',
      en: 'Both give birth to live young, feed them milk and breathe with lungs — that is why a dolphin surfaces for air. Where an animal lives does not decide its group.',
    },
  },

  // ── 17–18: adaptation ─────────────────────────────────────────────────────
  {
    q: { el: 'Η καμήλα έχει μακριές βλεφαρίδες, πλατιά πέλματα και αντέχει μέρες χωρίς νερό. Πώς λέγεται αυτό το «ταίριασμα» ενός ζώου με το περιβάλλον του;', en: 'The camel has long eyelashes, wide feet and can last days without water. What do we call this “fit” between an animal and its environment?' },
    options: { el: ['Μετανάστευση', 'Προσαρμογή', 'Αναπαραγωγή', 'Χειμερία νάρκη'], en: ['Migration', 'Adaptation', 'Reproduction', 'Hibernation'] },
    correct: 1,
    explanation: {
      el: 'Προσαρμογή είναι κάθε χαρακτηριστικό που βοηθάει έναν οργανισμό να επιβιώσει εκεί που ζει. Οι βλεφαρίδες κρατούν την άμμο έξω από τα μάτια, τα πλατιά πέλματα δεν βουλιάζουν.',
      en: 'An adaptation is any feature that helps a living thing survive where it lives. The eyelashes keep sand out of the eyes; the wide feet do not sink.',
    },
  },
  {
    q: { el: 'Ο κάκτος ζει στην έρημο και αντί για φύλλα έχει αγκάθια. Γιατί τον βοηθάει αυτό;', en: 'The cactus lives in the desert and has spines instead of leaves. How does this help it?' },
    options: { el: ['Τα αγκάθια τραβούν περισσότερο φως', 'Τα αγκάθια χάνουν πολύ λιγότερο νερό από τα πλατιά φύλλα', 'Τα αγκάθια μαζεύουν βροχή', 'Τα αγκάθια κάνουν τον κάκτο να μεγαλώνει πιο γρήγορα'], en: ['Spines catch more light', 'Spines lose far less water than wide leaves', 'Spines collect rain', 'Spines make the cactus grow faster'] },
    correct: 1,
    explanation: {
      el: 'Τα πλατιά φύλλα «ιδρώνουν» νερό στον ζεστό αέρα. Τα αγκάθια είναι μικροσκοπικά, χάνουν ελάχιστο νερό και διώχνουν και τα διψασμένα ζώα. Ο πράσινος κορμός κάνει τη φωτοσύνθεση.',
      en: 'Wide leaves “sweat” water into the hot air. Spines are tiny, lose almost no water and also keep thirsty animals away. The green stem does the photosynthesis.',
    },
  },
];
