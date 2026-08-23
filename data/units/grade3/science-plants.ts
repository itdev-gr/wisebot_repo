/**
 * Γ' Δημοτικού · Μελέτη Περιβάλλοντος · Τα Φυτά του Τόπου μας
 * =============================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Level: a child of 8–9.
 * What the unit covers, in the order a Γ' class meets it:
 *   1–2   the stem (βλαστός): holds the plant up, the trunk is the tree's stem
 *   3–4   the leaves: catch sunlight, make the plant's food
 *   5–7   the roots: drink water from the soil, anchor the plant; a light experiment
 *   8–12  categories: trees, shrubs, herbs; deciduous vs evergreen
 *   13–15 plants and their environment: dry places, hot Greek summers, cold mountains
 *   16–18 Greek plants: the olive tree, oregano and thyme
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_SCIENCE_PLANTS: QuizQuestion[] = [
  // ── 1–2: the stem ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο μέρος του φυτού κρατάει τα φύλλα και τα λουλούδια ψηλά, προς τον ήλιο;', en: 'Which part of the plant holds the leaves and flowers up high, towards the sun?' },
    options: { el: ['Η ρίζα', 'Το φύλλο', 'Ο βλαστός', 'Ο καρπός'], en: ['The root', 'The leaf', 'The stem', 'The fruit'] },
    correct: 2,
    explanation: {
      el: 'Ο βλαστός είναι το «κορμάκι» του φυτού. Στέκεται όρθιος και σηκώνει τα φύλλα και τα λουλούδια ψηλά.',
      en: 'The stem is the plant\'s “little body”. It stands up straight and lifts the leaves and flowers high.',
    },
  },
  {
    q: { el: 'Ο Γιώργος αγκαλιάζει τον χοντρό κορμό ενός πλάτανου. Ο κορμός είναι…', en: 'George hugs the thick trunk of a plane tree. The trunk is…' },
    options: { el: ['ο βλαστός του δέντρου', 'η ρίζα του δέντρου', 'ένα πολύ μεγάλο φύλλο', 'ο καρπός του δέντρου'], en: ['the tree\'s stem', 'the tree\'s root', 'a very big leaf', 'the tree\'s fruit'] },
    correct: 0,
    explanation: {
      el: 'Ο κορμός είναι ο βλαστός του δέντρου. Είναι ξυλώδης και χοντρός, γι\' αυτό το δέντρο δεν λυγίζει.',
      en: 'The trunk is the tree\'s stem. It is woody and thick, so the tree does not bend.',
    },
  },

  // ── 3–4: the leaves ────────────────────────────────────────────────────────
  {
    q: { el: 'Τα φύλλα απλώνονται σαν μικρές παλάμες. Τι «πιάνουν» για να φτιάξουν τροφή για το φυτό;', en: 'Leaves spread out like little palms. What do they “catch” to make food for the plant?' },
    options: { el: ['Τη βροχή', 'Το φως του ήλιου', 'Τα έντομα', 'Το χώμα'], en: ['The rain', 'Sunlight', 'Insects', 'Soil'] },
    correct: 1,
    explanation: {
      el: 'Τα φύλλα πιάνουν το φως του ήλιου και με αυτό φτιάχνουν την τροφή του φυτού. Είναι η «κουζίνα» του φυτού!',
      en: 'Leaves catch sunlight and use it to make the plant\'s food. They are the plant\'s “kitchen”!',
    },
  },
  {
    q: { el: 'Ποια τρία πράγματα χρειάζονται τα φύλλα για να φτιάξουν την τροφή του φυτού;', en: 'Which three things do leaves need to make the plant\'s food?' },
    options: { el: ['Χώμα, πέτρες και άμμο', 'Ζάχαρη, αλάτι και νερό', 'Κρύο, σκοτάδι και νερό', 'Φως, νερό και αέρα'], en: ['Soil, stones and sand', 'Sugar, salt and water', 'Cold, darkness and water', 'Light, water and air'] },
    correct: 3,
    explanation: {
      el: 'Τα φύλλα παίρνουν φως από τον ήλιο, νερό από τις ρίζες και αέρα από γύρω τους. Έτσι φτιάχνουν τροφή.',
      en: 'Leaves take light from the sun, water from the roots and air from around them. That is how they make food.',
    },
  },

  // ── 5–7: the roots ─────────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία ποτίζει τη γλάστρα της. Από ποιο μέρος «πίνει» το φυτό το νερό;', en: 'Maria waters her flowerpot. Which part does the plant “drink” the water with?' },
    options: { el: ['Από τα λουλούδια', 'Από τα φύλλα', 'Από τις ρίζες', 'Από τον καρπό'], en: ['The flowers', 'The leaves', 'The roots', 'The fruit'] },
    correct: 2,
    explanation: {
      el: 'Οι ρίζες είναι μέσα στο χώμα και ρουφάνε το νερό. Γι\' αυτό ποτίζουμε το χώμα, όχι τα φύλλα.',
      en: 'The roots are in the soil and soak up the water. That is why we water the soil, not the leaves.',
    },
  },
  {
    q: { el: 'Φυσάει δυνατός αέρας, αλλά το δέντρο στην αυλή δεν πέφτει. Τι το κρατάει γερά στο χώμα;', en: 'A strong wind blows, but the tree in the yard does not fall. What holds it firmly in the ground?' },
    options: { el: ['Οι ρίζες του', 'Τα φύλλα του', 'Οι καρποί του', 'Τα λουλούδια του'], en: ['Its roots', 'Its leaves', 'Its fruit', 'Its flowers'] },
    correct: 0,
    explanation: {
      el: 'Οι ρίζες απλώνονται μέσα στο χώμα σαν χέρια και κρατούν το φυτό γερά. Είναι η «άγκυρά» του.',
      en: 'Roots spread through the soil like hands and hold the plant tight. They are its “anchor”.',
    },
  },
  {
    q: { el: 'Η Ελένη έβαλε ένα φυτό σε σκοτεινό ντουλάπι για μία εβδομάδα και το πότιζε κανονικά. Τι έγινε;', en: 'Helen put a plant in a dark cupboard for a week and watered it normally. What happened?' },
    options: { el: ['Έγινε πιο πράσινο και πιο δυνατό', 'Κιτρίνισε και έγινε αδύναμο', 'Έβγαλε πολλά λουλούδια', 'Δεν άλλαξε καθόλου'], en: ['It became greener and stronger', 'It turned yellow and weak', 'It grew lots of flowers', 'It did not change at all'] },
    correct: 1,
    explanation: {
      el: 'Χωρίς φως τα φύλλα δεν μπορούν να φτιάξουν τροφή. Το φυτό κιτρινίζει και αδυνατίζει, όσο νερό κι αν έχει.',
      en: 'Without light the leaves cannot make food. The plant turns yellow and weak, no matter how much water it has.',
    },
  },

  // ── 8–12: trees, shrubs, herbs ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά τα φυτά είναι δέντρο;', en: 'Which of these plants is a tree?' },
    options: { el: ['Η μαργαρίτα', 'Το χαμομήλι', 'Το τριαντάφυλλο', 'Το πεύκο'], en: ['The daisy', 'The chamomile', 'The rose bush', 'The pine'] },
    correct: 3,
    explanation: {
      el: 'Το πεύκο είναι δέντρο: έχει έναν ψηλό, χοντρό κορμό και κλαδιά ψηλά. Η μαργαρίτα και το χαμομήλι είναι πόες.',
      en: 'The pine is a tree: it has one tall, thick trunk with branches high up. The daisy and chamomile are herbs.',
    },
  },
  {
    q: { el: 'Πώς ξεχωρίζουμε έναν θάμνο από ένα δέντρο;', en: 'How do we tell a shrub from a tree?' },
    options: { el: ['Ο θάμνος έχει πολλά ξυλώδη κλαδιά που βγαίνουν από το χώμα', 'Ο θάμνος είναι πάντα πιο ψηλός από το δέντρο', 'Ο θάμνος δεν έχει καθόλου ρίζες', 'Ο θάμνος δεν έχει καθόλου φύλλα'], en: ['A shrub has many woody branches growing straight from the ground', 'A shrub is always taller than a tree', 'A shrub has no roots at all', 'A shrub has no leaves at all'] },
    correct: 0,
    explanation: {
      el: 'Το δέντρο έχει έναν κορμό. Ο θάμνος είναι πιο χαμηλός και τα ξυλώδη κλαδιά του βγαίνουν πολλά μαζί από το χώμα.',
      en: 'A tree has one trunk. A shrub is lower and its woody branches grow out of the ground in a bunch.',
    },
  },
  {
    q: { el: 'Οι πόες έχουν βλαστό μαλακό και πράσινο, όχι ξύλινο. Ποιο από αυτά είναι πόα;', en: 'Herbs have a soft green stem, not a woody one. Which of these is a herb?' },
    options: { el: ['Η ελιά', 'Ο πλάτανος', 'Η μαργαρίτα', 'Το κυπαρίσσι'], en: ['The olive tree', 'The plane tree', 'The daisy', 'The cypress'] },
    correct: 2,
    explanation: {
      el: 'Η μαργαρίτα είναι πόα: είναι μικρή και ο βλαστός της λυγίζει εύκολα. Η ελιά, ο πλάτανος και το κυπαρίσσι είναι δέντρα.',
      en: 'The daisy is a herb: it is small and its stem bends easily. The olive, plane and cypress are trees.',
    },
  },
  {
    q: { el: 'Το φθινόπωρο ο πλάτανος ρίχνει όλα τα φύλλα του και τον χειμώνα μένει γυμνός. Τέτοια δέντρα λέγονται…', en: 'In autumn the plane tree drops all its leaves and stays bare in winter. Such trees are called…' },
    options: { el: ['αειθαλή', 'φυλλοβόλα', 'πόες', 'θάμνοι'], en: ['evergreen', 'deciduous', 'herbs', 'shrubs'] },
    correct: 1,
    explanation: {
      el: 'Φυλλοβόλα είναι τα δέντρα που ρίχνουν τα φύλλα τους το φθινόπωρο. Την άνοιξη βγάζουν καινούρια.',
      en: 'Deciduous trees drop their leaves in autumn. In spring they grow new ones.',
    },
  },
  {
    q: { el: 'Ο Νίκος παρατηρεί ότι το πεύκο στην αυλή είναι πράσινο και τον χειμώνα. Το πεύκο είναι…', en: 'Nick notices that the pine in the yard is green even in winter. The pine is…' },
    options: { el: ['πόα', 'φυλλοβόλο', 'θάμνος', 'αειθαλές'], en: ['a herb', 'deciduous', 'a shrub', 'evergreen'] },
    correct: 3,
    explanation: {
      el: 'Αειθαλή είναι τα δέντρα που κρατούν τα φύλλα τους όλο τον χρόνο, όπως το πεύκο, το κυπαρίσσι και η ελιά.',
      en: 'Evergreen trees keep their leaves all year round, like the pine, the cypress and the olive.',
    },
  },

  // ── 13–15: plants and their environment ────────────────────────────────────
  {
    q: { el: 'Ο κάκτος ζει σε μέρη που σπάνια βρέχει. Πώς τα καταφέρνει;', en: 'The cactus lives in places where it hardly ever rains. How does it manage?' },
    options: { el: ['Αποθηκεύει νερό στον χοντρό βλαστό του', 'Έχει μεγάλα, πλατιά φύλλα', 'Πίνει νερό από τον αέρα με τα αγκάθια', 'Κοιμάται όλο τον χρόνο'], en: ['It stores water in its thick stem', 'It has big, wide leaves', 'It drinks water from the air with its spines', 'It sleeps all year long'] },
    correct: 0,
    explanation: {
      el: 'Ο χοντρός βλαστός του κάκτου είναι γεμάτος νερό, σαν παγούρι. Έτσι αντέχει πολλές μέρες χωρίς βροχή.',
      en: 'The cactus\'s thick stem is full of water, like a flask. That is how it lasts many days without rain.',
    },
  },
  {
    q: { el: 'Το ελληνικό καλοκαίρι είναι ζεστό και ξερό. Γιατί πολλά φυτά του τόπου μας, όπως το θυμάρι, έχουν μικρά και σκληρά φύλλα;', en: 'The Greek summer is hot and dry. Why do many of our plants, like thyme, have small, tough leaves?' },
    options: { el: ['Για να πιάνουν περισσότερη βροχή', 'Για να τα τρώνε τα ζώα πιο εύκολα', 'Για να χάνουν λιγότερο νερό στη ζέστη', 'Για να μεγαλώνουν πιο γρήγορα'], en: ['To catch more rain', 'So animals can eat them more easily', 'To lose less water in the heat', 'To grow faster'] },
    correct: 2,
    explanation: {
      el: 'Από τα μεγάλα φύλλα το νερό «φεύγει» γρήγορα στη ζέστη. Τα μικρά, σκληρά φύλλα κρατούν το νερό μέσα τους.',
      en: 'Water “escapes” quickly from big leaves in the heat. Small, tough leaves keep the water inside.',
    },
  },
  {
    q: { el: 'Ψηλά στο βουνό κάνει κρύο και χιονίζει. Ποιο δέντρο ζει εκεί και μοιάζει με χριστουγεννιάτικο δέντρο;', en: 'High up in the mountains it is cold and snowy. Which tree lives there and looks like a Christmas tree?' },
    options: { el: ['Ο φοίνικας', 'Το έλατο', 'Η πορτοκαλιά', 'Η μπανανιά'], en: ['The palm tree', 'The fir tree', 'The orange tree', 'The banana tree'] },
    correct: 1,
    explanation: {
      el: 'Το έλατο αντέχει το κρύο και το χιόνι, γι\' αυτό ζει ψηλά στα βουνά. Ο φοίνικας και η πορτοκαλιά αγαπούν τη ζέστη.',
      en: 'The fir tree can stand cold and snow, so it lives high in the mountains. Palms and orange trees love warmth.',
    },
  },

  // ── 16–18: Greek plants ────────────────────────────────────────────────────
  {
    q: { el: 'Η γιαγιά της Μαρίας μαζεύει τον καρπό της ελιάς. Τι φτιάχνουμε από αυτόν;', en: 'Maria\'s grandma picks the fruit of the olive tree. What do we make from it?' },
    options: { el: ['Ζάχαρη', 'Αλεύρι', 'Κρασί', 'Λάδι'], en: ['Sugar', 'Flour', 'Wine', 'Olive oil'] },
    correct: 3,
    explanation: {
      el: 'Από τις ελιές βγαίνει το ελαιόλαδο, το λάδι που βάζουμε στο φαγητό. Τις ελιές τις τρώμε και έτσι, στη σαλάτα!',
      en: 'Olives give us olive oil, the oil we put on our food. We also eat olives as they are, in a salad!',
    },
  },
  {
    q: { el: 'Ποιο από αυτά ισχύει για την ελιά;', en: 'Which of these is true about the olive tree?' },
    options: { el: ['Ρίχνει τα φύλλα της κάθε φθινόπωρο', 'Κρατάει τα φύλλα της όλο τον χρόνο και ζει πάρα πολλά χρόνια', 'Είναι πόα με μαλακό βλαστό', 'Ζει μόνο ψηλά στα χιονισμένα βουνά'], en: ['It drops its leaves every autumn', 'It keeps its leaves all year and lives for a very long time', 'It is a herb with a soft stem', 'It lives only high in the snowy mountains'] },
    correct: 1,
    explanation: {
      el: 'Η ελιά είναι αειθαλές δέντρο με ασημοπράσινα φύλλα. Μερικές ελιές στην Ελλάδα είναι εκατοντάδες χρόνων!',
      en: 'The olive is an evergreen tree with silver-green leaves. Some olive trees in Greece are hundreds of years old!',
    },
  },
  {
    q: { el: 'Ο Νίκος μυρίζει ρίγανη και θυμάρι σε μια πλαγιά. Τι είναι αυτά τα φυτά;', en: 'Nick smells oregano and thyme on a hillside. What are these plants?' },
    options: { el: ['Ψηλά δέντρα που ρίχνουν τα φύλλα τους', 'Φυτά που ζουν μόνο μέσα στο νερό', 'Μικρά, μυρωδάτα φυτά που αντέχουν τον ήλιο και την ξηρασία', 'Φυτά που μεγαλώνουν μόνο μέσα στο σπίτι'], en: ['Tall trees that drop their leaves', 'Plants that live only in water', 'Small, fragrant plants that can stand sun and drought', 'Plants that grow only indoors'] },
    correct: 2,
    explanation: {
      el: 'Η ρίγανη και το θυμάρι φυτρώνουν μόνα τους στις ελληνικές πλαγιές. Αντέχουν τη ζέστη και μυρίζουν υπέροχα στο φαγητό.',
      en: 'Oregano and thyme grow wild on Greek hillsides. They stand the heat and smell wonderful in our food.',
    },
  },
];
