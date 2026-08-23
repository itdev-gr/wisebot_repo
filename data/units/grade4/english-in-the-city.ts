/**
 * Δ' Δημοτικού · Αγγλικά · «Στην Πόλη» / "In the City"
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 9–10 learning English.
 *
 * What the unit covers, in order:
 *   1–5   places in town: school, hospital, park, bakery, post office
 *   6–8   road safety: traffic light, zebra crossing, what to do before crossing
 *   9–11  directions: left/right, straight on, asking "Where is…?"
 *   12–15 prepositions of place: next to, opposite, between, in front of
 *   16–18 imperatives: Stop / Cross / Turn, and the form of a command
 *
 * Distractors are real mix-ups: similar places (bakery/butcher's), left/right,
 * next to/opposite, and adding "you" or "to" to a command.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_IN_THE_CITY: QuizQuestion[] = [
  // ── 1–5: places in town ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «σχολείο» στα αγγλικά;', en: 'How do you say «σχολείο» in English?' },
    options: { el: ['school', 'shop', 'street', 'station'], en: ['school', 'shop', 'street', 'station'] },
    correct: 0,
    explanation: {
      el: 'Σχολείο = school. Πολλές λέξεις της πόλης αρχίζουν με s, γι\' αυτό πρόσεχε τα γράμματα που ακολουθούν!',
      en: 'Σχολείο = school. Many town words start with s, so look at the letters that follow!',
    },
  },
  {
    q: { el: 'Η Ελένη χτύπησε το πόδι της. Πού πρέπει να πάει;', en: 'Eleni hurt her leg. Where should she go?' },
    options: { el: ['library', 'hospital', 'cinema', 'bank'], en: ['library', 'hospital', 'cinema', 'bank'] },
    correct: 1,
    explanation: {
      el: 'Hospital = νοσοκομείο. Εκεί πάμε όταν χτυπήσουμε ή είμαστε άρρωστοι.',
      en: 'Hospital = νοσοκομείο. That is where we go when we are hurt or ill.',
    },
  },
  {
    q: { el: 'Ποιο μέρος έχει δέντρα, γρασίδι και κούνιες;', en: 'Which place has trees, grass and swings?' },
    options: { el: ['supermarket', 'museum', 'park', 'post office'], en: ['supermarket', 'museum', 'park', 'post office'] },
    correct: 2,
    explanation: {
      el: 'Park = πάρκο. Εκεί παίζουμε, τρέχουμε και κάνουμε κούνια.',
      en: 'Park = πάρκο. That is where we play, run and go on the swings.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να αγοράσει ψωμί. Πού πηγαίνει;', en: 'Nikos wants to buy bread. Where does he go?' },
    options: { el: ['to the butcher\'s', 'to the bakery', 'to the chemist\'s', 'to the toy shop'], en: ['to the butcher\'s', 'to the bakery', 'to the chemist\'s', 'to the toy shop'] },
    correct: 1,
    explanation: {
      el: 'Bakery = φούρνος. Το butcher\'s είναι το κρεοπωλείο και το chemist\'s το φαρμακείο.',
      en: 'Bakery = φούρνος. The butcher\'s sells meat and the chemist\'s sells medicine.',
    },
  },
  {
    q: { el: 'Πού στέλνουμε ένα γράμμα;', en: 'Where do we send a letter?' },
    options: { el: ['at the police station', 'at the bus stop', 'at the post office', 'at the fire station'], en: ['at the police station', 'at the bus stop', 'at the post office', 'at the fire station'] },
    correct: 2,
    explanation: {
      el: 'Post office = ταχυδρομείο. Post σημαίνει «ταχυδρομώ», office σημαίνει «γραφείο».',
      en: 'Post office = ταχυδρομείο. Post means to send mail and office means γραφείο.',
    },
  },

  // ── 6–8: road safety ───────────────────────────────────────────────────────
  {
    q: { el: 'Το φανάρι για τους πεζούς είναι κόκκινο. Τι κάνεις;', en: 'The traffic light for people walking is red. What do you do?' },
    options: { el: ['I run across.', 'I wait.', 'I cross slowly.', 'I close my eyes.'], en: ['I run across.', 'I wait.', 'I cross slowly.', 'I close my eyes.'] },
    correct: 1,
    explanation: {
      el: 'Red = κόκκινο = wait (περιμένω). Περνάμε μόνο όταν το φανάρι είναι green (πράσινο).',
      en: 'Red means wait. We only cross when the light is green.',
    },
  },
  {
    q: { el: 'Πώς λέγεται στα αγγλικά η διάβαση πεζών με τις άσπρες γραμμές;', en: 'What is the English name for the crossing with white stripes?' },
    options: { el: ['zebra crossing', 'tiger crossing', 'zebra road', 'white street'], en: ['zebra crossing', 'tiger crossing', 'zebra road', 'white street'] },
    correct: 0,
    explanation: {
      el: 'Zebra crossing = διάβαση πεζών. Οι άσπρες και μαύρες γραμμές μοιάζουν με ζέβρα!',
      en: 'Zebra crossing = διάβαση πεζών. The black and white stripes look like a zebra!',
    },
  },
  {
    q: { el: 'Τι κάνουμε πριν περάσουμε τον δρόμο;', en: 'What do we do before we cross the road?' },
    options: { el: ['We look left and right.', 'We look at our phone.', 'We run fast.', 'We shout loudly.'], en: ['We look left and right.', 'We look at our phone.', 'We run fast.', 'We shout loudly.'] },
    correct: 0,
    explanation: {
      el: 'Look left and right = κοίτα αριστερά και δεξιά. Πρώτα κοιτάμε, μετά περνάμε.',
      en: 'Look left and right before you cross. First we look, then we cross.',
    },
  },

  // ── 9–11: directions ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «αριστερά» στα αγγλικά;', en: 'How do you say «αριστερά» in English?' },
    options: { el: ['right', 'straight', 'left', 'back'], en: ['right', 'straight', 'left', 'back'] },
    correct: 2,
    explanation: {
      el: 'Left = αριστερά, right = δεξιά. Κόλπο: το αριστερό χέρι κάνει ένα «L» με τον αντίχειρα, σαν το Left!',
      en: 'Left = αριστερά, right = δεξιά. Trick: your left hand makes an “L” with your thumb, like Left!',
    },
  },
  {
    q: { el: 'Η Μαρία ρωτάει πού είναι το μουσείο. Ποια ερώτηση είναι σωστή;', en: 'Maria asks where the museum is. Which question is correct?' },
    options: { el: ['Where the museum is?', 'Where is the museum?', 'Where museum is?', 'Is where the museum?'], en: ['Where the museum is?', 'Where is the museum?', 'Where museum is?', 'Is where the museum?'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση το «is» πάει αμέσως μετά το «Where»: Where is the museum? (Πού είναι το μουσείο;)',
      en: 'In a question, “is” comes right after “Where”: Where is the museum?',
    },
  },
  {
    q: { el: 'Θέλεις να πεις «Πήγαινε ευθεία». Τι λες;', en: 'You want to say «Πήγαινε ευθεία». What do you say?' },
    options: { el: ['Go straight on.', 'Go left on.', 'Go up on.', 'Go back on.'], en: ['Go straight on.', 'Go left on.', 'Go up on.', 'Go back on.'] },
    correct: 0,
    explanation: {
      el: 'Go straight on = πήγαινε ευθεία. Το «straight» σημαίνει «ίσια, χωρίς στροφή».',
      en: 'Go straight on = πήγαινε ευθεία. “Straight” means in a line, with no turn.',
    },
  },

  // ── 12–15: prepositions of place ──────────────────────────────────────────
  {
    q: { el: 'Ο φούρνος είναι ακριβώς δίπλα στο σχολείο. The bakery is ___ the school.', en: 'The bakery is right beside the school. The bakery is ___ the school.' },
    options: { el: ['next to', 'between', 'under', 'far from'], en: ['next to', 'between', 'under', 'far from'] },
    correct: 0,
    explanation: {
      el: 'Next to = δίπλα σε. Δύο κτίρια το ένα πλάι στο άλλο είναι «next to each other».',
      en: 'Next to = δίπλα σε. Two buildings side by side are next to each other.',
    },
  },
  {
    q: { el: 'Το πάρκο είναι απέναντι από το νοσοκομείο. The park is ___ the hospital.', en: 'The park is across the road from the hospital. The park is ___ the hospital.' },
    options: { el: ['next to', 'behind', 'opposite', 'in'], en: ['next to', 'behind', 'opposite', 'in'] },
    correct: 2,
    explanation: {
      el: 'Opposite = απέναντι. Το «next to» είναι δίπλα, το «behind» είναι πίσω.',
      en: 'Opposite = απέναντι, across the road. “Next to” is beside and “behind” is at the back.',
    },
  },
  {
    q: { el: 'Το ταχυδρομείο είναι ανάμεσα στην τράπεζα και στο σινεμά. The post office is ___ the bank and the cinema.', en: 'The post office has the bank on one side and the cinema on the other. The post office is ___ the bank and the cinema.' },
    options: { el: ['opposite', 'between', 'on', 'next'], en: ['opposite', 'between', 'on', 'next'] },
    correct: 1,
    explanation: {
      el: 'Between = ανάμεσα σε. Το χρησιμοποιούμε με δύο πράγματα: between A and B.',
      en: 'Between = ανάμεσα. We use it with two things: between A and B.',
    },
  },
  {
    q: { el: 'Ένα λεωφορείο σταματάει μπροστά από το σχολείο. Ποια πρόταση είναι σωστή;', en: 'A bus stops at the front of the school. Which sentence is correct?' },
    options: { el: ['The bus is behind the school.', 'The bus is under the school.', 'The bus is in front of the school.', 'The bus is in front the school.'], en: ['The bus is behind the school.', 'The bus is under the school.', 'The bus is in front of the school.', 'The bus is in front the school.'] },
    correct: 2,
    explanation: {
      el: 'In front of = μπροστά από. Μην ξεχνάς το «of» στο τέλος!',
      en: 'In front of = μπροστά από. Do not forget the “of” at the end!',
    },
  },

  // ── 16–18: imperatives ────────────────────────────────────────────────────
  {
    q: { el: 'Τι λέει η πινακίδα STOP στον οδηγό;', en: 'What does the STOP sign tell the driver?' },
    options: { el: ['Σταμάτα!', 'Πήγαινε!', 'Στρίψε!', 'Περίμενε!'], en: ['Stop!', 'Go!', 'Turn!', 'Wait!'] },
    correct: 0,
    explanation: {
      el: 'Stop = σταμάτα. Είναι προσταγή (imperative): λέμε το ρήμα σκέτο, χωρίς «you».',
      en: 'Stop = σταμάτα. It is an imperative (a command): just the verb, without “you”.',
    },
  },
  {
    q: { el: 'Ο δάσκαλος λέει στα παιδιά να περάσουν τον δρόμο. Τι λέει;', en: 'The teacher tells the children to go across the road. What does he say?' },
    options: { el: ['Crossing the road!', 'Cross the road!', 'To cross the road!', 'Crosses the road!'], en: ['Crossing the road!', 'Cross the road!', 'To cross the road!', 'Crosses the road!'] },
    correct: 1,
    explanation: {
      el: 'Στην προσταγή βάζουμε το ρήμα σκέτο: Cross the road! Όχι «to», όχι «-ing», όχι «-s».',
      en: 'For a command we use the bare verb: Cross the road! No “to”, no “-ing”, no “-s”.',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να πει στον φίλο του «Στρίψε δεξιά στο φανάρι». Ποια πρόταση είναι σωστή;', en: 'Giorgos wants to tell his friend «Στρίψε δεξιά στο φανάρι». Which sentence is correct?' },
    options: { el: ['You turning right at the traffic lights.', 'Turn left at the traffic lights.', 'Turn right at the traffic lights.', 'Turns right at the traffic lights.'], en: ['You turning right at the traffic lights.', 'Turn left at the traffic lights.', 'Turn right at the traffic lights.', 'Turns right at the traffic lights.'] },
    correct: 2,
    explanation: {
      el: 'Turn right at the traffic lights = στρίψε δεξιά στο φανάρι. Προσταγή με σκέτο ρήμα, και right = δεξιά (όχι left)!',
      en: 'Turn right at the traffic lights. A command with the bare verb, and right = δεξιά (not left)!',
    },
  },
];
