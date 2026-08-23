/**
 * Α' Δημοτικού · Μελέτη Περιβάλλοντος · Υλικά, Ηλεκτρισμός & Ήχος
 * ================================================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from
 * ebooks.edu.gr). Stems are one short sentence; vocabulary is everyday.
 *
 * What the unit covers, in order:
 *   1–5   what things are made of: wood, glass, metal, paper, wool
 *   6–8   kinds of materials: hard/soft, what melts, what floats
 *   9–12  electricity at home: plug, battery, danger with water, switch
 *   13–15 saving energy: lights off, sunlight, standby
 *   16–18 how sound travels: vibration, loud/quiet, the ear
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_SCIENCE_MATERIALS_ELECTRICITY_SOUND: QuizQuestion[] = [
  // ── 1–5: what things are made of ───────────────────────────────────────────
  {
    q: { el: 'Από τι είναι φτιαγμένο το θρανίο του Νίκου;', en: 'What is Nikos\'s school desk made of?' },
    options: { el: ['Από ξύλο', 'Από γυαλί', 'Από χαρτί', 'Από μαλλί'], en: ['Wood', 'Glass', 'Paper', 'Wool'] },
    correct: 0,
    explanation: {
      el: 'Τα θρανία και οι καρέκλες είναι συνήθως από ξύλο. Το ξύλο έρχεται από τα δέντρα.',
      en: 'Desks and chairs are usually made of wood. Wood comes from trees.',
    },
  },
  {
    q: { el: 'Το παράθυρο είναι διάφανο και βλέπεις έξω. Από τι είναι;', en: 'The window is see-through and you can look outside. What is it made of?' },
    options: { el: ['Από ξύλο', 'Από πέτρα', 'Από γυαλί', 'Από ύφασμα'], en: ['Wood', 'Stone', 'Glass', 'Cloth'] },
    correct: 2,
    explanation: {
      el: 'Το γυαλί είναι διάφανο: το φως περνάει και βλέπουμε μέσα από αυτό. Προσοχή όμως, σπάει!',
      en: 'Glass is see-through: light goes through it and we can see. But be careful, it breaks!',
    },
  },
  {
    q: { el: 'Το κουτάλι της σούπας γυαλίζει και είναι κρύο. Από τι είναι;', en: 'The soup spoon is shiny and feels cold. What is it made of?' },
    options: { el: ['Από χαρτί', 'Από μέταλλο', 'Από μαλλί', 'Από ξύλο'], en: ['Paper', 'Metal', 'Wool', 'Wood'] },
    correct: 1,
    explanation: {
      el: 'Τα κουτάλια, τα πιρούνια και τα κλειδιά είναι από μέταλλο. Το μέταλλο γυαλίζει και είναι σκληρό.',
      en: 'Spoons, forks and keys are made of metal. Metal is shiny and hard.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι από χαρτί;', en: 'Which of these is made of paper?' },
    options: { el: ['Το ποτήρι', 'Το κλειδί', 'Το βιβλίο', 'Η μπάλα'], en: ['The glass', 'The key', 'The book', 'The ball'] },
    correct: 2,
    explanation: {
      el: 'Το βιβλίο έχει σελίδες από χαρτί. Το χαρτί το φτιάχνουμε από τα δέντρα.',
      en: 'A book has pages made of paper. We make paper from trees.',
    },
  },
  {
    q: { el: 'Η γιαγιά πλέκει ένα ζεστό κασκόλ. Από τι είναι το κασκόλ;', en: 'Grandma is knitting a warm scarf. What is the scarf made of?' },
    options: { el: ['Από μαλλί', 'Από γυαλί', 'Από πλαστικό', 'Από πέτρα'], en: ['Wool', 'Glass', 'Plastic', 'Stone'] },
    correct: 0,
    explanation: {
      el: 'Το μαλλί έρχεται από τα πρόβατα. Είναι μαλακό και μας κρατάει ζεστούς τον χειμώνα.',
      en: 'Wool comes from sheep. It is soft and keeps us warm in winter.',
    },
  },

  // ── 6–8: kinds of materials ────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι μαλακό;', en: 'Which of these is soft?' },
    options: { el: ['Η πέτρα', 'Το μαξιλάρι', 'Το κλειδί', 'Το τούβλο'], en: ['The stone', 'The pillow', 'The key', 'The brick'] },
    correct: 1,
    explanation: {
      el: 'Το μαξιλάρι είναι μαλακό: το πατάς και αλλάζει σχήμα. Η πέτρα και το τούβλο είναι σκληρά.',
      en: 'A pillow is soft: you press it and it changes shape. Stone and brick are hard.',
    },
  },
  {
    q: { el: 'Η Ελένη άφησε ένα σοκολατάκι στον ήλιο. Τι θα πάθει;', en: 'Eleni left a little chocolate in the sun. What will happen to it?' },
    options: { el: ['Θα γίνει πιο σκληρό', 'Θα γίνει πάγος', 'Θα λιώσει', 'Θα γίνει πιο μεγάλο'], en: ['It will get harder', 'It will turn to ice', 'It will melt', 'It will get bigger'] },
    correct: 2,
    explanation: {
      el: 'Η ζέστη λιώνει τη σοκολάτα, το βούτυρο και το παγωτό. Η πέτρα και το ξύλο δεν λιώνουν στον ήλιο.',
      en: 'Heat melts chocolate, butter and ice cream. Stone and wood do not melt in the sun.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ρίχνει πράγματα στη μπανιέρα. Ποιο θα επιπλέει;', en: 'Giorgos drops things in the bathtub. Which one will float?' },
    options: { el: ['Η πέτρα', 'Το κλειδί', 'Το νόμισμα', 'Ο φελλός'], en: ['The stone', 'The key', 'The coin', 'The cork'] },
    correct: 3,
    explanation: {
      el: 'Ο φελλός είναι ελαφρύς και επιπλέει. Η πέτρα, το κλειδί και το νόμισμα είναι βαριά και βουλιάζουν.',
      en: 'Cork is light and floats. The stone, the key and the coin are heavy and sink.',
    },
  },

  // ── 9–12: electricity at home ──────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά δουλεύει με ηλεκτρικό ρεύμα;', en: 'Which of these works with electricity?' },
    options: { el: ['Το ποδήλατο', 'Το ψυγείο', 'Το βιβλίο', 'Η σκούπα χεριού'], en: ['The bicycle', 'The fridge', 'The book', 'The hand broom'] },
    correct: 1,
    explanation: {
      el: 'Το ψυγείο μπαίνει στην πρίζα και δουλεύει με ρεύμα. Το ποδήλατο δουλεύει με τα πόδια μας!',
      en: 'The fridge is plugged in and works with electricity. The bicycle works with our legs!',
    },
  },
  {
    q: { el: 'Το φακό του τον ανάβει ο Νίκος χωρίς πρίζα. Τι έχει μέσα;', en: 'Nikos turns on his torch without a plug. What is inside it?' },
    options: { el: ['Νερό', 'Ένα κερί', 'Μπαταρίες', 'Άμμο'], en: ['Water', 'A candle', 'Batteries', 'Sand'] },
    correct: 2,
    explanation: {
      el: 'Οι μπαταρίες κρατούν ρεύμα μέσα τους. Έτσι ο φακός, το ρολόι και το τηλεκοντρόλ δουλεύουν χωρίς πρίζα.',
      en: 'Batteries keep electricity inside them. That is how a torch, a clock and a remote work without a plug.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει βρεγμένα χέρια. Τι δεν πρέπει να αγγίξει;', en: 'Maria has wet hands. What must she not touch?' },
    options: { el: ['Την πετσέτα', 'Το σαπούνι', 'Το παιχνίδι της', 'Την πρίζα'], en: ['The towel', 'The soap', 'Her toy', 'The plug socket'] },
    correct: 3,
    explanation: {
      el: 'Ρεύμα και νερό δεν πάνε μαζί! Ποτέ δεν αγγίζουμε πρίζες με βρεγμένα χέρια.',
      en: 'Electricity and water do not mix! We never touch sockets with wet hands.',
    },
  },
  {
    q: { el: 'Πατάς τον διακόπτη και το φως ανάβει. Τι έκανε ο διακόπτης;', en: 'You press the switch and the light comes on. What did the switch do?' },
    options: { el: ['Άφησε το ρεύμα να περάσει', 'Έφτιαξε καινούργια λάμπα', 'Έβαλε νερό στη λάμπα', 'Άνοιξε το παράθυρο'], en: ['It let the electricity through', 'It made a new bulb', 'It put water in the bulb', 'It opened the window'] },
    correct: 0,
    explanation: {
      el: 'Ο διακόπτης είναι σαν πόρτα για το ρεύμα. Ανοιχτός διακόπτης: το ρεύμα περνάει και η λάμπα ανάβει.',
      en: 'A switch is like a door for electricity. Switch on: the electricity goes through and the bulb lights up.',
    },
  },

  // ── 13–15: saving energy ───────────────────────────────────────────────────
  {
    q: { el: 'Φεύγεις από το δωμάτιό σου. Τι κάνεις με το φως;', en: 'You are leaving your room. What do you do with the light?' },
    options: { el: ['Το αφήνω αναμμένο', 'Το σβήνω', 'Ανάβω και άλλο', 'Κλείνω τις κουρτίνες'], en: ['Leave it on', 'Turn it off', 'Turn on another one', 'Close the curtains'] },
    correct: 1,
    explanation: {
      el: 'Σβήνουμε το φως όταν φεύγουμε. Έτσι δεν ξοδεύουμε ρεύμα χωρίς λόγο.',
      en: 'We turn off the light when we leave. That way we do not waste electricity.',
    },
  },
  {
    q: { el: 'Είναι μεσημέρι και έχει ήλιο. Πώς φωτίζεις την κουζίνα χωρίς ρεύμα;', en: 'It is noon and sunny. How do you light the kitchen without electricity?' },
    options: { el: ['Ανάβω όλες τις λάμπες', 'Ανάβω τον φούρνο', 'Ανοίγω τις κουρτίνες', 'Ανάβω την τηλεόραση'], en: ['Turn on all the lamps', 'Turn on the oven', 'Open the curtains', 'Turn on the TV'] },
    correct: 2,
    explanation: {
      el: 'Ο ήλιος μάς δίνει φως δωρεάν! Ανοίγουμε τις κουρτίνες και δεν χρειαζόμαστε λάμπα τη μέρα.',
      en: 'The sun gives us light for free! We open the curtains and do not need a lamp in the daytime.',
    },
  },
  {
    q: { el: 'Ποιο παιδί εξοικονομεί ρεύμα;', en: 'Which child is saving electricity?' },
    options: { el: ['Η Ελένη που αφήνει το ψυγείο ανοιχτό', 'Ο Γιώργος που αφήνει την τηλεόραση αναμμένη ενώ παίζει έξω', 'Η Μαρία που ανάβει φως τη μέρα', 'Ο Νίκος που κλείνει την τηλεόραση όταν τελειώσει'], en: ['Eleni, who leaves the fridge open', 'Giorgos, who leaves the TV on while he plays outside', 'Maria, who turns on a light in the daytime', 'Nikos, who turns off the TV when he is done'] },
    correct: 3,
    explanation: {
      el: 'Ο Νίκος κλείνει ό,τι δεν χρησιμοποιεί. Ανοιχτό ψυγείο και αναμμένη τηλεόραση χωρίς λόγο ξοδεύουν ρεύμα.',
      en: 'Nikos turns off what he is not using. An open fridge and a TV left on for no reason waste electricity.',
    },
  },

  // ── 16–18: how sound travels ───────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία χτυπάει το τύμπανο και το νιώθει να τρέμει. Τι φτιάχνει το τρέμουλο;', en: 'Maria hits the drum and feels it shaking. What does the shaking make?' },
    options: { el: ['Φως', 'Ήχο', 'Νερό', 'Ζέστη'], en: ['Light', 'Sound', 'Water', 'Heat'] },
    correct: 1,
    explanation: {
      el: 'Ο ήχος γεννιέται όταν κάτι τρέμει, δηλαδή πάλλεται. Το τύμπανο, η χορδή της κιθάρας, ακόμα και ο λαιμός μας όταν μιλάμε!',
      en: 'Sound is made when something shakes, or vibrates. The drum, a guitar string, even our throat when we talk!',
    },
  },
  {
    q: { el: 'Ποιος ήχος είναι ο πιο δυνατός;', en: 'Which sound is the loudest?' },
    options: { el: ['Ένας ψίθυρος', 'Μια πεταλούδα που πετάει', 'Μια βροντή', 'Ένα ρολόι που κάνει τικ-τακ'], en: ['A whisper', 'A butterfly flying', 'Thunder', 'A clock going tick-tock'] },
    correct: 2,
    explanation: {
      el: 'Η βροντή είναι πολύ δυνατός ήχος. Ο ψίθυρος και το τικ-τακ είναι σιγανοί ήχοι.',
      en: 'Thunder is a very loud sound. A whisper and a tick-tock are quiet sounds.',
    },
  },
  {
    q: { el: 'Ο Γιώργος φωνάζει από μακριά και η Ελένη τον ακούει. Από πού πέρασε ο ήχος;', en: 'Giorgos shouts from far away and Eleni hears him. What did the sound travel through?' },
    options: { el: ['Από το χώμα', 'Από τον αέρα', 'Από το φως', 'Από τα μαλλιά της'], en: ['Through the soil', 'Through the air', 'Through the light', 'Through her hair'] },
    correct: 1,
    explanation: {
      el: 'Ο ήχος ταξιδεύει μέσα από τον αέρα και φτάνει στα αυτιά μας. Γι\' αυτό ακούμε και από μακριά.',
      en: 'Sound travels through the air and reaches our ears. That is why we can hear from far away.',
    },
  },
];
