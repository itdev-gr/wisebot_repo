/**
 * Β' Δημοτικού · Μελέτη Περιβάλλοντος · Ζωή, Ενέργεια & Μεταφορές
 * ================================================================
 * Original questions (curriculum topics only). Language level: a child of 7–8.
 *
 * What the unit covers, in order:
 *   1–5   living vs non-living: what living things do (grow, eat, breathe, have babies)
 *   6–9   energy: what it does, where it comes from, the sun as the big energy source
 *   10–14 vehicles of land, sea and air — which goes where, and why
 *   15–18 road safety: the pavement, the crossing, the traffic light, seat belt and helmet
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_SCIENCE_LIVING_NONLIVING_ENERGY_TRANSPORT: QuizQuestion[] = [
  // ── 1–5: living and non-living ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι ζωντανό;', en: 'Which of these is alive?' },
    options: { el: ['Η πέτρα', 'Η γάτα', 'Το ποδήλατο', 'Το τραπέζι'], en: ['The stone', 'The cat', 'The bicycle', 'The table'] },
    correct: 1,
    explanation: {
      el: 'Η γάτα είναι ζωντανή: τρώει, μεγαλώνει, αναπνέει και κινείται μόνη της.',
      en: 'The cat is alive: it eats, grows, breathes and moves on its own.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά ΔΕΝ είναι ζωντανό;', en: 'Which of these is NOT alive?' },
    options: { el: ['Το δέντρο', 'Το σκουλήκι', 'Το σύννεφο', 'Το λουλούδι'], en: ['The tree', 'The worm', 'The cloud', 'The flower'] },
    correct: 2,
    explanation: {
      el: 'Το σύννεφο κινείται με τον αέρα, αλλά δεν τρώει, δεν μεγαλώνει και δεν κάνει παιδάκια. Δεν είναι ζωντανό.',
      en: 'A cloud moves with the wind, but it does not eat, grow or have babies. It is not alive.',
    },
  },
  {
    q: { el: 'Τι κάνουν όλα τα ζωντανά πλάσματα;', en: 'What do all living things do?' },
    options: { el: ['Μεγαλώνουν', 'Μιλάνε', 'Πετάνε', 'Κολυμπάνε'], en: ['They grow', 'They talk', 'They fly', 'They swim'] },
    correct: 0,
    explanation: {
      el: 'Όλα τα ζωντανά πλάσματα μεγαλώνουν. Το μικρό φυτό γίνεται μεγάλο, το κουταβάκι γίνεται σκύλος.',
      en: 'All living things grow. A tiny plant becomes big, a puppy becomes a dog.',
    },
  },
  {
    q: { el: 'Το φυτό στη γλάστρα της Ελένης είναι ζωντανό;', en: 'Is the plant in Eleni\'s flowerpot alive?' },
    options: { el: ['Όχι, γιατί δεν περπατάει', 'Ναι, γιατί μεγαλώνει και χρειάζεται νερό', 'Όχι, γιατί δεν έχει μάτια', 'Ναι, γιατί είναι στο σπίτι'], en: ['No, because it does not walk', 'Yes, because it grows and needs water', 'No, because it has no eyes', 'Yes, because it is in the house'] },
    correct: 1,
    explanation: {
      el: 'Τα φυτά είναι ζωντανά! Μεγαλώνουν, πίνουν νερό και βγάζουν καινούρια φύλλα, ακόμα κι αν δεν περπατάνε.',
      en: 'Plants are alive! They grow, drink water and make new leaves, even though they do not walk.',
    },
  },
  {
    q: { el: 'Το ρομπότ-παιχνίδι του Νίκου περπατάει και μιλάει. Είναι ζωντανό;', en: 'Nikos\'s toy robot walks and talks. Is it alive?' },
    options: { el: ['Ναι, γιατί κινείται', 'Ναι, γιατί μιλάει', 'Όχι, γιατί δεν τρώει και δεν μεγαλώνει', 'Όχι, γιατί είναι μικρό'], en: ['Yes, because it moves', 'Yes, because it talks', 'No, because it does not eat or grow', 'No, because it is small'] },
    correct: 2,
    explanation: {
      el: 'Το ρομπότ κινείται με μπαταρία, όχι μόνο του. Δεν τρώει, δεν μεγαλώνει, δεν αναπνέει. Δεν είναι ζωντανό.',
      en: 'The robot moves with a battery, not by itself. It does not eat, grow or breathe. It is not alive.',
    },
  },

  // ── 6–9: energy ────────────────────────────────────────────────────────────
  {
    q: { el: 'Τι χρειάζεται το αυτοκίνητο για να κινηθεί;', en: 'What does a car need in order to move?' },
    options: { el: ['Νερό', 'Καύσιμο', 'Χώμα', 'Φύλλα'], en: ['Water', 'Fuel', 'Soil', 'Leaves'] },
    correct: 1,
    explanation: {
      el: 'Το αυτοκίνητο παίρνει ενέργεια από το καύσιμο (ή από τη μπαταρία). Χωρίς ενέργεια τίποτα δεν κινείται!',
      en: 'A car gets energy from fuel (or from a battery). Without energy, nothing moves!',
    },
  },
  {
    q: { el: 'Από πού παίρνει ενέργεια ο Γιώργος για να τρέξει;', en: 'Where does Giorgos get energy to run?' },
    options: { el: ['Από το φαγητό', 'Από τα παπούτσια', 'Από το κρεβάτι', 'Από την τηλεόραση'], en: ['From food', 'From his shoes', 'From his bed', 'From the TV'] },
    correct: 0,
    explanation: {
      el: 'Το φαγητό είναι η ενέργειά μας. Όπως το αυτοκίνητο θέλει καύσιμο, εμείς θέλουμε φαγητό για να τρέχουμε και να παίζουμε.',
      en: 'Food is our energy. Just like a car needs fuel, we need food to run and play.',
    },
  },
  {
    q: { el: 'Η Μαρία άναψε τη λάμπα. Από πού παίρνει ενέργεια η λάμπα;', en: 'Maria switched on the lamp. Where does the lamp get its energy?' },
    options: { el: ['Από το νερό', 'Από το φαγητό', 'Από το ηλεκτρικό ρεύμα', 'Από τον αέρα'], en: ['From water', 'From food', 'From electricity', 'From the air'] },
    correct: 2,
    explanation: {
      el: 'Η λάμπα, το ψυγείο και η τηλεόραση δουλεύουν με ηλεκτρικό ρεύμα. Γι\' αυτό έχουν καλώδιο ή μπαταρία.',
      en: 'Lamps, fridges and TVs work with electricity. That is why they have a cable or a battery.',
    },
  },
  {
    q: { el: 'Ποιο δίνει φως και ζεστασιά σε όλη τη Γη;', en: 'What gives light and warmth to the whole Earth?' },
    options: { el: ['Το φεγγάρι', 'Ο ήλιος', 'Τα αστέρια', 'Η θάλασσα'], en: ['The moon', 'The sun', 'The stars', 'The sea'] },
    correct: 1,
    explanation: {
      el: 'Ο ήλιος είναι η μεγαλύτερη πηγή ενέργειας. Μας ζεσταίνει, μας φωτίζει και βοηθάει τα φυτά να μεγαλώσουν.',
      en: 'The sun is the biggest source of energy. It warms us, lights our days and helps plants grow.',
    },
  },

  // ── 10–14: land, sea and air vehicles ──────────────────────────────────────
  {
    q: { el: 'Ποιο μέσο μεταφοράς ταξιδεύει στη θάλασσα;', en: 'Which vehicle travels on the sea?' },
    options: { el: ['Το τρένο', 'Το λεωφορείο', 'Το πλοίο', 'Το ποδήλατο'], en: ['The train', 'The bus', 'The ship', 'The bicycle'] },
    correct: 2,
    explanation: {
      el: 'Το πλοίο ταξιδεύει στη θάλασσα. Το τρένο, το λεωφορείο και το ποδήλατο κινούνται στη στεριά.',
      en: 'The ship travels on the sea. The train, the bus and the bicycle move on land.',
    },
  },
  {
    q: { el: 'Ποιο μέσο μεταφοράς πετάει στον αέρα;', en: 'Which vehicle flies in the air?' },
    options: { el: ['Το μετρό', 'Το ελικόπτερο', 'Το φορτηγό', 'Η βάρκα'], en: ['The metro', 'The helicopter', 'The lorry', 'The boat'] },
    correct: 1,
    explanation: {
      el: 'Το ελικόπτερο και το αεροπλάνο πετάνε στον αέρα. Το μετρό και το φορτηγό πάνε στη στεριά, η βάρκα στο νερό.',
      en: 'Helicopters and aeroplanes fly in the air. The metro and the lorry go on land, the boat on water.',
    },
  },
  {
    q: { el: 'Ποιο μέσο μεταφοράς χρειάζεται ράγες για να κινηθεί;', en: 'Which vehicle needs rails to move?' },
    options: { el: ['Το τρένο', 'Το αυτοκίνητο', 'Το αεροπλάνο', 'Το πλοίο'], en: ['The train', 'The car', 'The aeroplane', 'The ship'] },
    correct: 0,
    explanation: {
      el: 'Το τρένο κινείται μόνο πάνω στις ράγες του. Το αυτοκίνητο πάει στον δρόμο, το πλοίο στη θάλασσα, το αεροπλάνο στον ουρανό.',
      en: 'A train only moves on its rails. A car goes on the road, a ship on the sea, an aeroplane in the sky.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να πάει από την Αθήνα σε ένα νησί. Ποιο μέσο ΔΕΝ μπορεί να τη φτάσει εκεί;', en: 'Eleni wants to go from Athens to an island. Which vehicle CANNOT get her there?' },
    options: { el: ['Το πλοίο', 'Το αεροπλάνο', 'Το τρένο', 'Το ταχύπλοο'], en: ['The ship', 'The aeroplane', 'The train', 'The speedboat'] },
    correct: 2,
    explanation: {
      el: 'Το νησί έχει θάλασσα γύρω του. Το τρένο πάει μόνο στη στεριά, ενώ το πλοίο, το ταχύπλοο και το αεροπλάνο περνάνε τη θάλασσα.',
      en: 'An island has sea all around it. A train only goes on land, while a ship, a speedboat and an aeroplane can cross the sea.',
    },
  },
  {
    q: { el: 'Ποιο μέσο μεταφοράς κινείται χωρίς καύσιμο, μόνο με τη δύναμή σου;', en: 'Which vehicle moves without fuel, only with your own strength?' },
    options: { el: ['Το μηχανάκι', 'Το ποδήλατο', 'Το ταξί', 'Το λεωφορείο'], en: ['The motorbike', 'The bicycle', 'The taxi', 'The bus'] },
    correct: 1,
    explanation: {
      el: 'Το ποδήλατο κινείται με τα πόδια σου! Η ενέργεια έρχεται από εσένα, όχι από καύσιμο. Γι\' αυτό δεν λερώνει τον αέρα.',
      en: 'A bicycle moves with your legs! The energy comes from you, not from fuel. That is why it does not dirty the air.',
    },
  },

  // ── 15–18: road safety ─────────────────────────────────────────────────────
  {
    q: { el: 'Πού περπατάμε όταν είμαστε στον δρόμο;', en: 'Where do we walk when we are out on the street?' },
    options: { el: ['Στη μέση του δρόμου', 'Στο πεζοδρόμιο', 'Δίπλα στα αυτοκίνητα', 'Πάνω στις ράγες'], en: ['In the middle of the road', 'On the pavement', 'Next to the cars', 'On the rails'] },
    correct: 1,
    explanation: {
      el: 'Το πεζοδρόμιο είναι για τους πεζούς. Ο δρόμος είναι για τα αυτοκίνητα, γι\' αυτό δεν περπατάμε εκεί.',
      en: 'The pavement is for people walking. The road is for cars, so we do not walk there.',
    },
  },
  {
    q: { el: 'Τι χρώμα έχει το φανάρι όταν μπορούν να περάσουν οι πεζοί;', en: 'What colour is the traffic light when people are allowed to cross?' },
    options: { el: ['Κόκκινο', 'Πορτοκαλί', 'Πράσινο', 'Μπλε'], en: ['Red', 'Orange', 'Green', 'Blue'] },
    correct: 2,
    explanation: {
      el: 'Πράσινο ανθρωπάκι = περνάμε. Κόκκινο ανθρωπάκι = σταματάμε και περιμένουμε.',
      en: 'Green man = we cross. Red man = we stop and wait.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να περάσει απέναντι. Τι πρέπει να κάνει πρώτα;', en: 'Nikos wants to cross the street. What must he do first?' },
    options: { el: ['Να τρέξει γρήγορα', 'Να σταματήσει και να κοιτάξει δεξιά και αριστερά', 'Να κλείσει τα μάτια', 'Να φωνάξει στα αυτοκίνητα'], en: ['Run fast', 'Stop and look left and right', 'Close his eyes', 'Shout at the cars'] },
    correct: 1,
    explanation: {
      el: 'Σταματάμε, κοιτάμε αριστερά και δεξιά, ακούμε. Περνάμε από τη διάβαση μόνο όταν ο δρόμος είναι άδειος.',
      en: 'We stop, look left and right, and listen. We use the crossing only when the road is clear.',
    },
  },
  {
    q: { el: 'Η Μαρία κάθεται στο αυτοκίνητο. Τι πρέπει να φοράει;', en: 'Maria is sitting in the car. What must she wear?' },
    options: { el: ['Τη ζώνη ασφαλείας', 'Γυαλιά ηλίου', 'Καπέλο', 'Το κράνος του ποδηλάτου'], en: ['The seat belt', 'Sunglasses', 'A hat', 'The bicycle helmet'] },
    correct: 0,
    explanation: {
      el: 'Στο αυτοκίνητο φοράμε πάντα ζώνη ασφαλείας. Στο ποδήλατο φοράμε κράνος. Και τα δύο μας προστατεύουν.',
      en: 'In the car we always wear a seat belt. On a bicycle we wear a helmet. Both keep us safe.',
    },
  },
];
