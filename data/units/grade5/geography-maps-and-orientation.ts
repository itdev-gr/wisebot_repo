/**
 * Ε' Δημοτικού · Γεωγραφία · Χάρτες & Προσανατολισμός
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–3   what a map is, map types (physical, political, road)
 *   4–6   the title and the legend (υπόμνημα) — reading symbols and colours
 *   7–9   the scale: what it means, 1:100.000, big vs small scale
 *   10–13 the four compass points, north at the top, the compass needle
 *   14–16 finding your way: sunrise, midday sun, the Pole Star, in-between points
 *   17–18 the globe: equator, hemispheres, axis and poles
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GEOGRAPHY_MAPS_AND_ORIENTATION: QuizQuestion[] = [
  // ── 1–3: what a map is, map types ────────────────────────────────────────────
  {
    q: { el: 'Τι είναι ο χάρτης;', en: 'What is a map?' },
    options: {
      el: ['Μια φωτογραφία της Γης από αεροπλάνο', 'Ένα μικρό σχέδιο ενός τόπου, όπως φαίνεται από ψηλά', 'Ένα βιβλίο με ιστορίες για ταξίδια', 'Μια μπάλα που δείχνει τη Γη'],
      en: ['A photo of the Earth taken from a plane', 'A small drawing of a place, as seen from above', 'A book with travel stories', 'A ball that shows the Earth'],
    },
    correct: 1,
    explanation: {
      el: 'Ο χάρτης είναι ένα σχέδιο ενός τόπου σε μικρότερο μέγεθος, σαν να τον βλέπουμε από ψηλά, από πουλί.',
      en: 'A map is a drawing of a place made smaller, as if we were looking down on it like a bird.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει έναν χάρτη που δείχνει βουνά, ποτάμια και πεδιάδες. Ποιον χάρτη χρειάζεται;', en: 'Nikos wants a map that shows mountains, rivers and plains. Which map does he need?' },
    options: {
      el: ['Γεωφυσικό χάρτη', 'Πολιτικό χάρτη', 'Οδικό χάρτη', 'Χάρτη του μετρό'],
      en: ['A physical map', 'A political map', 'A road map', 'A metro map'],
    },
    correct: 0,
    explanation: {
      el: 'Ο γεωφυσικός χάρτης δείχνει τη μορφή της γης: βουνά, ποτάμια, λίμνες, πεδιάδες.',
      en: 'A physical map shows the shape of the land: mountains, rivers, lakes and plains.',
    },
  },
  {
    q: { el: 'Ποιος χάρτης δείχνει τις χώρες, τα σύνορά τους και τις πρωτεύουσες;', en: 'Which map shows countries, their borders and their capital cities?' },
    options: {
      el: ['Ο γεωφυσικός χάρτης', 'Ο χάρτης του καιρού', 'Ο πολιτικός χάρτης', 'Ο οδικός χάρτης'],
      en: ['The physical map', 'The weather map', 'The political map', 'The road map'],
    },
    correct: 2,
    explanation: {
      el: 'Ο πολιτικός χάρτης δείχνει πώς χωρίζεται ο κόσμος σε χώρες, με τα σύνορα και τις πόλεις τους.',
      en: 'A political map shows how the world is divided into countries, with their borders and cities.',
    },
  },

  // ── 4–6: title and legend ───────────────────────────────────────────────────
  {
    q: { el: 'Τι μας λέει ο τίτλος ενός χάρτη;', en: 'What does the title of a map tell us?' },
    options: {
      el: ['Ποιος ζωγράφισε τον χάρτη', 'Ποιον τόπο και τι δείχνει ο χάρτης', 'Πόσο κοστίζει ο χάρτης', 'Πού είναι ο βορράς'],
      en: ['Who drew the map', 'Which place the map shows and what it shows', 'How much the map costs', 'Where north is'],
    },
    correct: 1,
    explanation: {
      el: 'Ο τίτλος είναι το πρώτο που διαβάζουμε: μας λέει τι δείχνει ο χάρτης, π.χ. «Τα ποτάμια της Ελλάδας».',
      en: 'The title is the first thing we read: it tells us what the map shows, e.g. “The rivers of Greece”.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το κουτάκι του χάρτη που εξηγεί τι σημαίνει κάθε σύμβολο και χρώμα;', en: 'What is the box on a map called that explains what each symbol and colour means?' },
    options: {
      el: ['Κλίμακα', 'Τίτλος', 'Πυξίδα', 'Υπόμνημα'],
      en: ['Scale', 'Title', 'Compass', 'Legend'],
    },
    correct: 3,
    explanation: {
      el: 'Το υπόμνημα είναι το «λεξικό» του χάρτη: εξηγεί τα σύμβολα και τα χρώματα.',
      en: 'The legend is the map\'s “dictionary”: it explains the symbols and the colours.',
    },
  },
  {
    q: { el: 'Στον χάρτη της Ελένης, το υπόμνημα λέει ότι το μικρό αεροπλανάκι σημαίνει «αεροδρόμιο». Βλέπει ένα αεροπλανάκι δίπλα σε μια πόλη. Τι σημαίνει;', en: 'On Eleni\'s map, the legend says a little plane means “airport”. She sees a little plane next to a city. What does it mean?' },
    options: {
      el: ['Η πόλη έχει αεροδρόμιο', 'Πάνω από την πόλη πετάει ένα αεροπλάνο', 'Η πόλη είναι πολύ μεγάλη', 'Η πόλη φτιάχνει αεροπλάνα'],
      en: ['The city has an airport', 'A plane is flying over the city', 'The city is very big', 'The city makes planes'],
    },
    correct: 0,
    explanation: {
      el: 'Κάθε σύμβολο σημαίνει ακριβώς αυτό που λέει το υπόμνημα. Αεροπλανάκι = αεροδρόμιο σε εκείνο το μέρος.',
      en: 'Every symbol means exactly what the legend says. Little plane = there is an airport in that place.',
    },
  },

  // ── 7–9: the scale ──────────────────────────────────────────────────────────
  {
    q: { el: 'Τι μας δείχνει η κλίμακα του χάρτη;', en: 'What does the scale of a map show us?' },
    options: {
      el: ['Πόσο ψηλά είναι τα βουνά', 'Πόσες φορές μικρότερος είναι ο χάρτης από την πραγματικότητα', 'Πόσοι άνθρωποι ζουν σε κάθε πόλη', 'Προς τα πού είναι ο βορράς'],
      en: ['How high the mountains are', 'How many times smaller the map is than the real place', 'How many people live in each city', 'Which way north is'],
    },
    correct: 1,
    explanation: {
      el: 'Η κλίμακα λέει πόσο «μικρύναμε» τον τόπο για να χωρέσει στο χαρτί. Έτσι μπορούμε να μετράμε αποστάσεις.',
      en: 'The scale says how much we “shrank” the place to fit it on paper. That is how we can measure distances.',
    },
  },
  {
    q: { el: 'Ένας χάρτης έχει κλίμακα 1:100.000. Πόσο είναι στην πραγματικότητα 1 εκατοστό του χάρτη;', en: 'A map has a scale of 1:100,000. How long is 1 centimetre on the map in real life?' },
    options: {
      el: ['100 μέτρα', '10 χιλιόμετρα', '1 χιλιόμετρο', '100 χιλιόμετρα'],
      en: ['100 metres', '10 kilometres', '1 kilometre', '100 kilometres'],
    },
    correct: 2,
    explanation: {
      el: '1:100.000 σημαίνει 1 εκατοστό στον χάρτη = 100.000 εκατοστά στη γη. 100.000 εκατοστά είναι 1.000 μέτρα, δηλαδή 1 χιλιόμετρο.',
      en: '1:100,000 means 1 cm on the map = 100,000 cm on the ground. 100,000 cm is 1,000 metres, which is 1 kilometre.',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να βρει τα δρομάκια του χωριού του. Ποιος χάρτης δείχνει περισσότερες λεπτομέρειες;', en: 'Giorgos wants to find the little streets of his village. Which map shows more detail?' },
    options: {
      el: ['Ένας χάρτης με κλίμακα 1:5.000', 'Ένας χάρτης με κλίμακα 1:1.000.000', 'Ένας χάρτης όλης της Ευρώπης', 'Όλοι οι χάρτες δείχνουν τις ίδιες λεπτομέρειες'],
      en: ['A map with a scale of 1:5,000', 'A map with a scale of 1:1,000,000', 'A map of the whole of Europe', 'All maps show the same detail'],
    },
    correct: 0,
    explanation: {
      el: 'Όσο μικρότερος είναι ο δεύτερος αριθμός της κλίμακας, τόσο λιγότερο «μικρύναμε» τον τόπο και τόσο περισσότερες λεπτομέρειες βλέπουμε.',
      en: 'The smaller the second number of the scale, the less we shrank the place, so the more detail we see.',
    },
  },

  // ── 10–13: compass points, north, the compass ──────────────────────────────
  {
    q: { el: 'Ποια είναι τα τέσσερα κύρια σημεία του ορίζοντα;', en: 'What are the four main compass points?' },
    options: {
      el: ['Πάνω, κάτω, δεξιά, αριστερά', 'Βορράς, Νότος, Ανατολή, Δύση', 'Άνοιξη, καλοκαίρι, φθινόπωρο, χειμώνας', 'Βουνό, θάλασσα, ποτάμι, πεδιάδα'],
      en: ['Up, down, right, left', 'North, South, East, West', 'Spring, summer, autumn, winter', 'Mountain, sea, river, plain'],
    },
    correct: 1,
    explanation: {
      el: 'Τα τέσσερα κύρια σημεία του ορίζοντα είναι ο Βορράς (Β), ο Νότος (Ν), η Ανατολή (Α) και η Δύση (Δ).',
      en: 'The four main compass points are North (N), South (S), East (E) and West (W).',
    },
  },
  {
    q: { el: 'Στους περισσότερους χάρτες, ο Βορράς βρίσκεται…', en: 'On most maps, North is…' },
    options: {
      el: ['κάτω', 'δεξιά', 'πάνω', 'αριστερά'],
      en: ['at the bottom', 'on the right', 'at the top', 'on the left'],
    },
    correct: 2,
    explanation: {
      el: 'Συνήθως ο Βορράς είναι πάνω, ο Νότος κάτω, η Ανατολή δεξιά και η Δύση αριστερά. Ένα βελάκι στον χάρτη δείχνει τον Βορρά.',
      en: 'Usually North is at the top, South at the bottom, East on the right and West on the left. An arrow on the map points North.',
    },
  },
  {
    q: { el: 'Η Μαρία κοιτάζει τον χάρτη με τον Βορρά πάνω. Η Ανατολή είναι…', en: 'Maria is looking at a map with North at the top. East is…' },
    options: {
      el: ['αριστερά', 'κάτω', 'πάνω', 'δεξιά'],
      en: ['on the left', 'at the bottom', 'at the top', 'on the right'],
    },
    correct: 3,
    explanation: {
      el: 'Με τον Βορρά πάνω, η Ανατολή είναι πάντα δεξιά και η Δύση αριστερά. Θυμήσου: Α = Ανατολή, δεξιά.',
      en: 'With North at the top, East is always on the right and West on the left.',
    },
  },
  {
    q: { el: 'Η βελόνα της πυξίδας δείχνει πάντα προς…', en: 'The needle of a compass always points…' },
    options: {
      el: ['τον Βορρά', 'τον ήλιο', 'το σπίτι μας', 'τη θάλασσα'],
      en: ['North', 'the sun', 'our home', 'the sea'],
    },
    correct: 0,
    explanation: {
      el: 'Η βελόνα της πυξίδας είναι μαγνήτης και γυρίζει πάντα προς τον Βορρά. Όταν ξέρουμε τον Βορρά, βρίσκουμε και τα άλλα σημεία.',
      en: 'The compass needle is a magnet and always turns to point North. Once we know North, we can find all the other directions.',
    },
  },

  // ── 14–16: finding your way without a compass ──────────────────────────────
  {
    q: { el: 'Ο Νίκος ξύπνησε νωρίς και είδε τον ήλιο να βγαίνει. Προς τα πού κοιτάζει;', en: 'Nikos woke up early and saw the sun rising. Which direction is he looking in?' },
    options: {
      el: ['Προς τον Βορρά', 'Προς τη Δύση', 'Προς την Ανατολή', 'Προς τον Νότο'],
      en: ['North', 'West', 'East', 'South'],
    },
    correct: 2,
    explanation: {
      el: 'Ο ήλιος ανατέλλει στην Ανατολή και δύει στη Δύση. Γι\' αυτό τις λέμε έτσι!',
      en: 'The sun rises in the East and sets in the West. That is where the names come from!',
    },
  },
  {
    q: { el: 'Η Ελένη στέκεται με το πρόσωπο προς τον ήλιο που ανατέλλει. Προς τα πού είναι ο Βορράς;', en: 'Eleni is standing facing the rising sun. Which way is North?' },
    options: {
      el: ['Πίσω της', 'Στα δεξιά της', 'Μπροστά της', 'Στα αριστερά της'],
      en: ['Behind her', 'On her right', 'In front of her', 'On her left'],
    },
    correct: 3,
    explanation: {
      el: 'Αν κοιτάζεις την Ανατολή, ο Βορράς είναι στο αριστερό σου χέρι, ο Νότος στο δεξί και η Δύση πίσω σου.',
      en: 'If you face East, North is on your left hand, South on your right and West behind you.',
    },
  },
  {
    q: { el: 'Ο Γιώργος κατασκηνώνει και τη νύχτα θέλει να βρει τον Βορρά χωρίς πυξίδα. Τι τον βοηθάει;', en: 'Giorgos is camping and at night he wants to find North without a compass. What helps him?' },
    options: {
      el: ['Το φεγγάρι', 'Ο Πολικός Αστέρας', 'Το πιο φωτεινό αστέρι που θα δει', 'Ο άνεμος'],
      en: ['The moon', 'The Pole Star', 'The brightest star he can see', 'The wind'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Πολικός Αστέρας βρίσκεται πάντα πάνω από τον Βορρά. Τον βρίσκουμε με τη βοήθεια της Μεγάλης Άρκτου.',
      en: 'The Pole Star always sits above North. We find it with the help of the Big Dipper.',
    },
  },

  // ── 17–18: the globe ───────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται η νοητή γραμμή στην υδρόγειο σφαίρα που χωρίζει τη Γη σε Βόρειο και Νότιο ημισφαίριο;', en: 'What is the imaginary line on the globe called that divides the Earth into the Northern and Southern hemispheres?' },
    options: {
      el: ['Ο άξονας της Γης', 'Ο ορίζοντας', 'Ο Ισημερινός', 'Ο Βόρειος Πόλος'],
      en: ['The Earth\'s axis', 'The horizon', 'The Equator', 'The North Pole'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Ισημερινός είναι ο μεγάλος κύκλος στη μέση της υδρογείου. Πάνω του είναι το Βόρειο ημισφαίριο, κάτω το Νότιο. Η Ελλάδα είναι στο Βόρειο.',
      en: 'The Equator is the big circle around the middle of the globe. Above it is the Northern hemisphere, below it the Southern. Greece is in the Northern one.',
    },
  },
  {
    q: { el: 'Γιατί η υδρόγειος σφαίρα δείχνει το σχήμα της Γης πιο σωστά από έναν χάρτη του κόσμου;', en: 'Why does a globe show the shape of the Earth more correctly than a world map?' },
    options: {
      el: ['Γιατί είναι πιο μεγάλη από τον χάρτη', 'Γιατί είναι στρογγυλή όπως η Γη, ενώ ο χάρτης είναι επίπεδος', 'Γιατί έχει περισσότερα χρώματα', 'Γιατί γυρίζει γύρω από τον άξονά της'],
      en: ['Because it is bigger than the map', 'Because it is round like the Earth, while the map is flat', 'Because it has more colours', 'Because it spins around its axis'],
    },
    correct: 1,
    explanation: {
      el: 'Η Γη είναι σφαίρα. Όταν την «απλώνουμε» σε επίπεδο χαρτί, κάποια μέρη παραμορφώνονται. Η υδρόγειος δεν έχει αυτό το πρόβλημα, αλλά δεν χωράει στην τσέπη!',
      en: 'The Earth is a sphere. When we “flatten” it onto paper, some parts get stretched. A globe has no such problem, but it does not fit in your pocket!',
    },
  },
];
