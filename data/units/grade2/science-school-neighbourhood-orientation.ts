/**
 * Β' Δημοτικού · Μελέτη Περιβάλλοντος · Σχολείο, Γειτονιά & Προσανατολισμός
 * =========================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Short stems, everyday words.
 *
 * What the unit covers, in order:
 *   1–4   school spaces and the people who work there
 *   5–7   my neighbourhood: shops, services, street names, the village square
 *   8–10  left and right, in front / behind
 *   11–14 the four directions, where the sun rises and sets
 *   15–16 the compass and what the needle shows
 *   17–18 reading a simple map: the key and the north arrow
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_SCIENCE_SCHOOL_NEIGHBOURHOOD_ORIENTATION: QuizQuestion[] = [
  // ── 1–4: school spaces and people ──────────────────────────────────────────
  {
    q: { el: 'Πού παίζουν τα παιδιά στο διάλειμμα;', en: 'Where do children play at break time?' },
    options: { el: ['Στην αυλή', 'Στο γραφείο του διευθυντή', 'Στη βιβλιοθήκη', 'Στην κουζίνα'], en: ['In the playground', 'In the head teacher\'s office', 'In the library', 'In the kitchen'] },
    correct: 0,
    explanation: {
      el: 'Στο διάλειμμα βγαίνουμε στην αυλή για να παίξουμε και να τρέξουμε.',
      en: 'At break time we go out to the playground to play and run.',
    },
  },
  {
    q: { el: 'Σε ποιον χώρο του σχολείου βρίσκουμε πολλά βιβλία για δανεισμό;', en: 'In which school room do we find lots of books to borrow?' },
    options: { el: ['Στο γυμναστήριο', 'Στη βιβλιοθήκη', 'Στην αυλή', 'Στο κυλικείο'], en: ['In the gym', 'In the library', 'In the playground', 'In the canteen'] },
    correct: 1,
    explanation: {
      el: 'Η βιβλιοθήκη είναι ο χώρος με τα βιβλία. Τα δανειζόμαστε και τα επιστρέφουμε.',
      en: 'The library is the room with the books. We borrow them and bring them back.',
    },
  },
  {
    q: { el: 'Ποιος μας μαθαίνει γράμματα και αριθμούς στην τάξη;', en: 'Who teaches us letters and numbers in class?' },
    options: { el: ['Ο φύλακας', 'Ο γιατρός', 'Ο δάσκαλος ή η δασκάλα', 'Ο ταχυδρόμος'], en: ['The caretaker', 'The doctor', 'The teacher', 'The postman'] },
    correct: 2,
    explanation: {
      el: 'Ο δάσκαλος ή η δασκάλα μάς μαθαίνει όσα κάνουμε στην τάξη.',
      en: 'The teacher teaches us everything we do in class.',
    },
  },
  {
    q: { el: 'Ποιος φροντίζει να είναι καθαρό το σχολείο;', en: 'Who keeps the school clean?' },
    options: { el: ['Ο διευθυντής', 'Ο οδηγός', 'Η δασκάλα', 'Η καθαρίστρια'], en: ['The head teacher', 'The driver', 'The teacher', 'The cleaner'] },
    correct: 3,
    explanation: {
      el: 'Η καθαρίστρια καθαρίζει τις τάξεις και τους διαδρόμους. Τη βοηθάμε όταν δεν πετάμε σκουπίδια κάτω.',
      en: 'The cleaner cleans the classrooms and corridors. We help by not dropping litter.',
    },
  },

  // ── 5–7: my neighbourhood ──────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη θέλει να αγοράσει ψωμί. Πού θα πάει;', en: 'Eleni wants to buy bread. Where will she go?' },
    options: { el: ['Στο φαρμακείο', 'Στον φούρνο', 'Στο ταχυδρομείο', 'Στο σχολείο'], en: ['To the pharmacy', 'To the bakery', 'To the post office', 'To the school'] },
    correct: 1,
    explanation: {
      el: 'Το ψωμί το αγοράζουμε από τον φούρνο. Στο φαρμακείο παίρνουμε φάρμακα.',
      en: 'We buy bread at the bakery. At the pharmacy we get medicine.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να στείλει ένα γράμμα στη γιαγιά του. Πού θα το πάει;', en: 'Nikos wants to send a letter to his grandma. Where will he take it?' },
    options: { el: ['Στο ταχυδρομείο', 'Στο μανάβικο', 'Στην παιδική χαρά', 'Στον φούρνο'], en: ['To the post office', 'To the greengrocer', 'To the playground', 'To the bakery'] },
    correct: 0,
    explanation: {
      el: 'Τα γράμματα τα στέλνουμε από το ταχυδρομείο. Ο ταχυδρόμος τα πηγαίνει στα σπίτια.',
      en: 'We send letters from the post office. The postman takes them to the houses.',
    },
  },
  {
    q: { el: 'Τι γράφει η ταμπέλα στη γωνία κάθε δρόμου;', en: 'What does the sign on the corner of every street tell us?' },
    options: { el: ['Την ώρα', 'Τον καιρό', 'Το όνομα του δρόμου', 'Την τιμή του ψωμιού'], en: ['The time', 'The weather', 'The name of the street', 'The price of bread'] },
    correct: 2,
    explanation: {
      el: 'Κάθε δρόμος έχει ένα όνομα. Το βλέπουμε στην ταμπέλα και έτσι βρίσκουμε τον δρόμο μας.',
      en: 'Every street has a name. We see it on the sign and that helps us find our way.',
    },
  },

  // ── 8–10: left and right ───────────────────────────────────────────────────
  {
    q: { el: 'Με ποιο χέρι γράφουν τα περισσότερα παιδιά;', en: 'Which hand do most children write with?' },
    options: { el: ['Με το αριστερό', 'Με το δεξί', 'Και με τα δύο μαζί', 'Με κανένα'], en: ['The left', 'The right', 'Both together', 'Neither'] },
    correct: 1,
    explanation: {
      el: 'Τα περισσότερα παιδιά γράφουν με το δεξί χέρι. Μερικά γράφουν με το αριστερό και είναι μια χαρά!',
      en: 'Most children write with their right hand. Some write with their left, and that is fine too!',
    },
  },
  {
    q: { el: 'Η Μαρία κοιτάζει τον πίνακα. Το παράθυρο είναι στο αριστερό της χέρι. Πού είναι το παράθυρο;', en: 'Maria looks at the board. The window is on her left hand. Where is the window?' },
    options: { el: ['Δεξιά της', 'Μπροστά της', 'Πίσω της', 'Αριστερά της'], en: ['To her right', 'In front of her', 'Behind her', 'To her left'] },
    correct: 3,
    explanation: {
      el: 'Ό,τι είναι προς το αριστερό μας χέρι, είναι αριστερά μας. Ό,τι είναι προς το δεξί, είναι δεξιά μας.',
      en: 'Whatever is on the side of our left hand is to our left. Whatever is on the right hand side is to our right.',
    },
  },
  {
    q: { el: 'Ο Γιώργος γυρίζει και κοιτάζει προς την πόρτα. Ο πίνακας είναι τώρα…', en: 'Giorgos turns around and looks at the door. The board is now…' },
    options: { el: ['μπροστά του', 'πίσω του', 'πάνω του', 'δίπλα στην πόρτα'], en: ['in front of him', 'behind him', 'above him', 'next to the door'] },
    correct: 1,
    explanation: {
      el: 'Όταν γυρίζουμε, αλλάζει τι είναι μπροστά και τι πίσω μας. Ο πίνακας έμεινε στη θέση του, εμείς γυρίσαμε!',
      en: 'When we turn, what is in front and behind us changes. The board stayed put — we turned!',
    },
  },

  // ── 11–14: the four directions and the sun ────────────────────────────────
  {
    q: { el: 'Πόσα είναι τα κύρια σημεία του ορίζοντα;', en: 'How many main compass points are there?' },
    options: { el: ['2', '3', '4', '10'], en: ['2', '3', '4', '10'] },
    correct: 2,
    explanation: {
      el: 'Τα κύρια σημεία του ορίζοντα είναι 4: Βορράς, Νότος, Ανατολή και Δύση.',
      en: 'There are 4 main compass points: North, South, East and West.',
    },
  },
  {
    q: { el: 'Από πού βγαίνει ο ήλιος το πρωί;', en: 'Where does the sun come up in the morning?' },
    options: { el: ['Από τον Βορρά', 'Από τη Δύση', 'Από τον Νότο', 'Από την Ανατολή'], en: ['From the North', 'From the West', 'From the South', 'From the East'] },
    correct: 3,
    explanation: {
      el: 'Ο ήλιος ανατέλλει από την Ανατολή. Γι\' αυτό τη λέμε έτσι: εκεί ανατέλλει!',
      en: 'The sun rises in the East. That is the side where the morning sun appears.',
    },
  },
  {
    q: { el: 'Το απόγευμα ο ήλιος κρύβεται. Προς τα πού;', en: 'In the evening the sun goes down. On which side?' },
    options: { el: ['Προς τη Δύση', 'Προς την Ανατολή', 'Προς τον Βορρά', 'Προς τον Νότο'], en: ['The West', 'The East', 'The North', 'The South'] },
    correct: 0,
    explanation: {
      el: 'Ο ήλιος δύει στη Δύση. Ανατολή το πρωί, Δύση το βράδυ.',
      en: 'The sun sets in the West. East in the morning, West in the evening.',
    },
  },
  {
    q: { el: 'Η Ελένη στέκεται με την Ανατολή στο δεξί της χέρι. Ποιο σημείο είναι μπροστά της;', en: 'Eleni stands with the East on her right hand. Which point is in front of her?' },
    options: { el: ['Ο Νότος', 'Η Δύση', 'Ο Βορράς', 'Η Ανατολή'], en: ['The South', 'The West', 'The North', 'The East'] },
    correct: 2,
    explanation: {
      el: 'Όταν κοιτάζουμε τον Βορρά, η Ανατολή είναι δεξιά μας και η Δύση αριστερά μας.',
      en: 'When we face North, the East is on our right and the West is on our left.',
    },
  },

  // ── 15–16: the compass ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο εργαλείο μάς δείχνει πάντα πού είναι ο Βορράς;', en: 'Which tool always shows us where North is?' },
    options: { el: ['Το ρολόι', 'Η πυξίδα', 'Το θερμόμετρο', 'Ο χάρακας'], en: ['The clock', 'The compass', 'The thermometer', 'The ruler'] },
    correct: 1,
    explanation: {
      el: 'Η πυξίδα έχει μια βελόνα που δείχνει πάντα τον Βορρά. Έτσι δεν χανόμαστε!',
      en: 'The compass has a needle that always points North. That way we never get lost!',
    },
  },
  {
    q: { el: 'Ο Νίκος κρατάει μια πυξίδα. Η βελόνα δείχνει προς τη θάλασσα. Πού είναι η θάλασσα;', en: 'Nikos holds a compass. The needle points towards the sea. Where is the sea?' },
    options: { el: ['Στη Δύση', 'Στον Νότο', 'Στην Ανατολή', 'Στον Βορρά'], en: ['In the West', 'In the South', 'In the East', 'In the North'] },
    correct: 3,
    explanation: {
      el: 'Η βελόνα της πυξίδας δείχνει πάντα τον Βορρά. Άρα η θάλασσα είναι στον Βορρά.',
      en: 'The compass needle always points North. So the sea is in the North.',
    },
  },

  // ── 17–18: simple maps ─────────────────────────────────────────────────────
  {
    q: { el: 'Σε έναν χάρτη, το βελάκι με το γράμμα Β μάς δείχνει…', en: 'On a map, the arrow with the letter N shows us…' },
    options: { el: ['πού είναι ο Βορράς', 'πού είναι το σχολείο', 'πόσο μεγάλος είναι ο χάρτης', 'πού είναι η θάλασσα'], en: ['where North is', 'where the school is', 'how big the map is', 'where the sea is'] },
    correct: 0,
    explanation: {
      el: 'Το βελάκι με το Β δείχνει τον Βορρά. Συνήθως ο Βορράς είναι στο πάνω μέρος του χάρτη.',
      en: 'The arrow with the N points to North. North is usually at the top of the map.',
    },
  },
  {
    q: { el: 'Στον χάρτη της γειτονιάς, τα μικρά σχέδια (ένα δέντρο, ένας σταυρός) εξηγούνται…', en: 'On the neighbourhood map, the little drawings (a tree, a cross) are explained…' },
    options: { el: ['στο ρολόι', 'στο υπόμνημα', 'στην ταμπέλα του δρόμου', 'στην πυξίδα'], en: ['on the clock', 'in the key', 'on the street sign', 'on the compass'] },
    correct: 1,
    explanation: {
      el: 'Το υπόμνημα είναι το κουτάκι του χάρτη που εξηγεί τι σημαίνει κάθε σχέδιο: δέντρο = πάρκο, σταυρός = φαρμακείο.',
      en: 'The key is the little box on the map that explains what each drawing means: tree = park, cross = pharmacy.',
    },
  },
];
