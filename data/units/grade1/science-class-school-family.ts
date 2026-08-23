/**
 * Α' Δημοτικού · Μελέτη Περιβάλλοντος · Η Τάξη, το Σχολείο & η Οικογένειά μου
 * ==========================================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 6–7.
 * What the unit covers, in order:
 *   1–4   classroom objects: what we use to write, sit on, read from, erase with
 *   5–8   class rules: raising a hand, taking turns, sharing, tidying up
 *   9–11  school people: teacher, principal, caretaker
 *   12–15 family members and roles: grandparents, siblings, cousins, helping at home
 *   16–18 school trips and celebrations: what to bring, how to behave, the end-of-year show
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_SCIENCE_CLASS_SCHOOL_FAMILY: QuizQuestion[] = [
  // ── 1–4: classroom objects ─────────────────────────────────────────────────
  {
    q: { el: 'Με τι γράφουμε στο τετράδιο;', en: 'What do we write in our notebook with?' },
    options: { el: ['Με το μολύβι', 'Με το ψαλίδι', 'Με τη γόμα', 'Με το χάρακα'], en: ['With a pencil', 'With scissors', 'With an eraser', 'With a ruler'] },
    correct: 0,
    explanation: {
      el: 'Με το μολύβι γράφουμε. Η γόμα σβήνει και το ψαλίδι κόβει.',
      en: 'We write with a pencil. The eraser rubs out and the scissors cut.',
    },
  },
  {
    q: { el: 'Πού καθόμαστε μέσα στην τάξη;', en: 'What do we sit on in the classroom?' },
    options: { el: ['Στον πίνακα', 'Στο θρανίο', 'Στην καρέκλα', 'Στην τσάντα'], en: ['On the board', 'On the desk', 'On the chair', 'On the bag'] },
    correct: 2,
    explanation: {
      el: 'Καθόμαστε στην καρέκλα. Μπροστά μας είναι το θρανίο, όπου βάζουμε τα βιβλία μας.',
      en: 'We sit on the chair. In front of us is the desk, where we put our books.',
    },
  },
  {
    q: { el: 'Έγραψες λάθος ένα γράμμα. Τι θα χρησιμοποιήσεις για να το σβήσεις;', en: 'You wrote a letter wrong. What will you use to rub it out?' },
    options: { el: ['Το μολύβι', 'Την κόλλα', 'Το χάρακα', 'Τη γόμα'], en: ['The pencil', 'The glue', 'The ruler', 'The eraser'] },
    correct: 3,
    explanation: {
      el: 'Η γόμα σβήνει το μολύβι. Έτσι μπορούμε να ξαναγράψουμε σωστά.',
      en: 'The eraser rubs out pencil. Then we can write it again correctly.',
    },
  },
  {
    q: { el: 'Πού γράφει η δασκάλα για να βλέπουν όλα τα παιδιά;', en: 'Where does the teacher write so that all the children can see?' },
    options: { el: ['Στο τετράδιο', 'Στον πίνακα', 'Στο θρανίο', 'Στο βιβλίο'], en: ['In a notebook', 'On the board', 'On the desk', 'In a book'] },
    correct: 1,
    explanation: {
      el: 'Η δασκάλα γράφει στον πίνακα. Ο πίνακας είναι μεγάλος και τον βλέπει όλη η τάξη.',
      en: 'The teacher writes on the board. The board is big, so the whole class can see it.',
    },
  },

  // ── 5–8: class rules ───────────────────────────────────────────────────────
  {
    q: { el: 'Θέλεις να πεις κάτι στην τάξη. Τι κάνεις πρώτα;', en: 'You want to say something in class. What do you do first?' },
    options: { el: ['Φωνάζω δυνατά', 'Σηκώνω το χέρι μου', 'Σηκώνομαι όρθιος', 'Χτυπάω το θρανίο'], en: ['I shout loudly', 'I raise my hand', 'I stand up', 'I bang on the desk'] },
    correct: 1,
    explanation: {
      el: 'Σηκώνουμε το χέρι μας και περιμένουμε τη σειρά μας. Έτσι ακούγονται όλοι.',
      en: 'We raise our hand and wait for our turn. That way everyone gets heard.',
    },
  },
  {
    q: { el: 'Ο Νίκος μιλάει στη δασκάλα. Τι κάνει η Μαρία;', en: 'Nikos is talking to the teacher. What does Maria do?' },
    options: { el: ['Μιλάει κι αυτή μαζί του', 'Παίζει με την κασετίνα της', 'Ακούει και περιμένει τη σειρά της', 'Βγαίνει έξω'], en: ['She talks at the same time', 'She plays with her pencil case', 'She listens and waits for her turn', 'She goes outside'] },
    correct: 2,
    explanation: {
      el: 'Όταν μιλάει κάποιος, οι άλλοι ακούνε. Μετά έρχεται η σειρά της Μαρίας.',
      en: 'When someone is talking, the others listen. Then it is Maria’s turn.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ξέχασε τους μαρκαδόρους του. Τι είναι σωστό να κάνει η Ελένη;', en: 'Giorgos forgot his markers. What is the right thing for Eleni to do?' },
    options: { el: ['Να του δώσει μερικούς δικούς της', 'Να του πει να μη ζωγραφίσει', 'Να κρύψει τους δικούς της', 'Να γελάσει μαζί του'], en: ['Give him some of hers', 'Tell him not to draw', 'Hide hers away', 'Laugh at him'] },
    correct: 0,
    explanation: {
      el: 'Στην τάξη μοιραζόμαστε και βοηθάμε ο ένας τον άλλον. Έτσι είμαστε μια καλή ομάδα.',
      en: 'In class we share and help each other. That is how we make a good team.',
    },
  },
  {
    q: { el: 'Τελείωσε το μάθημα της ζωγραφικής. Τι κάνουμε με τα χρώματα;', en: 'Art class is over. What do we do with the paints?' },
    options: { el: ['Τα αφήνουμε στο πάτωμα', 'Τα παίρνουμε σπίτι', 'Τα βάζουμε στη θέση τους', 'Τα δίνουμε στον διευθυντή'], en: ['Leave them on the floor', 'Take them home', 'Put them back in their place', 'Give them to the principal'] },
    correct: 2,
    explanation: {
      el: 'Κάθε πράγμα έχει τη θέση του. Όταν τελειώνουμε, τακτοποιούμε την τάξη μας.',
      en: 'Everything has its place. When we finish, we tidy up our classroom.',
    },
  },

  // ── 9–11: school people ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος μας μαθαίνει γράμματα και αριθμούς στην τάξη;', en: 'Who teaches us letters and numbers in class?' },
    options: { el: ['Ο γιατρός', 'Ο δάσκαλος ή η δασκάλα', 'Ο οδηγός του λεωφορείου', 'Ο μάγειρας'], en: ['The doctor', 'The teacher', 'The bus driver', 'The cook'] },
    correct: 1,
    explanation: {
      el: 'Ο δάσκαλος ή η δασκάλα μάς μαθαίνει γράμματα, αριθμούς και πολλά άλλα.',
      en: 'The teacher teaches us letters, numbers and many other things.',
    },
  },
  {
    q: { el: 'Ποιος είναι υπεύθυνος για όλο το σχολείο;', en: 'Who is in charge of the whole school?' },
    options: { el: ['Ο μεγαλύτερος μαθητής', 'Η δασκάλα της Α\' τάξης', 'Ο φύλακας', 'Ο διευθυντής ή η διευθύντρια'], en: ['The oldest pupil', 'The first-grade teacher', 'The caretaker', 'The principal'] },
    correct: 3,
    explanation: {
      el: 'Ο διευθυντής ή η διευθύντρια φροντίζει όλο το σχολείο και όλες τις τάξεις.',
      en: 'The principal looks after the whole school and all of the classes.',
    },
  },
  {
    q: { el: 'Ποιος καθαρίζει την τάξη και το προαύλιο του σχολείου;', en: 'Who cleans the classroom and the school yard?' },
    options: { el: ['Ο διευθυντής', 'Η καθαρίστρια ή ο καθαριστής', 'Ο ταχυδρόμος', 'Ο αστυνομικός'], en: ['The principal', 'The cleaner', 'The postman', 'The police officer'] },
    correct: 1,
    explanation: {
      el: 'Η καθαρίστρια ή ο καθαριστής κρατάει το σχολείο καθαρό. Εμείς τη βοηθάμε, αν δεν πετάμε σκουπίδια κάτω.',
      en: 'The cleaner keeps the school clean. We help by not dropping litter on the floor.',
    },
  },

  // ── 12–15: family ──────────────────────────────────────────────────────────
  {
    q: { el: 'Η μαμά της μαμάς σου είναι η…', en: 'Your mum’s mum is your…' },
    options: { el: ['θεία σου', 'γιαγιά σου', 'αδερφή σου', 'ξαδέρφη σου'], en: ['aunt', 'grandmother', 'sister', 'cousin'] },
    correct: 1,
    explanation: {
      el: 'Η μαμά της μαμάς (ή του μπαμπά) είναι η γιαγιά. Ο μπαμπάς τους είναι ο παππούς.',
      en: 'Your mum’s (or dad’s) mum is your grandmother. Their dad is your grandfather.',
    },
  },
  {
    q: { el: 'Ο αδερφός του μπαμπά σου είναι ο…', en: 'Your dad’s brother is your…' },
    options: { el: ['παππούς σου', 'ξάδερφός σου', 'θείος σου', 'αδερφός σου'], en: ['grandfather', 'cousin', 'uncle', 'brother'] },
    correct: 2,
    explanation: {
      el: 'Ο αδερφός του μπαμπά ή της μαμάς είναι ο θείος. Τα παιδιά του είναι τα ξαδέρφια σου.',
      en: 'Your dad’s or mum’s brother is your uncle. His children are your cousins.',
    },
  },
  {
    q: { el: 'Η Ελένη και ο Νίκος έχουν την ίδια μαμά και τον ίδιο μπαμπά. Τι είναι;', en: 'Eleni and Nikos have the same mum and dad. What are they?' },
    options: { el: ['Αδέρφια', 'Ξαδέρφια', 'Φίλοι', 'Γείτονες'], en: ['Brother and sister', 'Cousins', 'Friends', 'Neighbours'] },
    correct: 0,
    explanation: {
      el: 'Παιδιά με τους ίδιους γονείς είναι αδέρφια. Τα ξαδέρφια έχουν διαφορετικούς γονείς.',
      en: 'Children with the same parents are brother and sister. Cousins have different parents.',
    },
  },
  {
    q: { el: 'Η οικογένεια τρώει βραδινό. Πώς μπορεί να βοηθήσει ο Γιώργος;', en: 'The family is having dinner. How can Giorgos help?' },
    options: { el: ['Να παίζει στο δωμάτιό του', 'Να στρώσει το τραπέζι', 'Να βλέπει τηλεόραση', 'Να περιμένει να τελειώσουν'], en: ['Play in his room', 'Set the table', 'Watch television', 'Wait for them to finish'] },
    correct: 1,
    explanation: {
      el: 'Στην οικογένεια όλοι βοηθάνε. Ένα παιδί μπορεί να στρώσει το τραπέζι ή να μαζέψει τα πιάτα.',
      en: 'In a family everyone helps. A child can set the table or clear the plates.',
    },
  },

  // ── 16–18: school trips and celebrations ───────────────────────────────────
  {
    q: { el: 'Αύριο η τάξη πάει εκδρομή στο πάρκο. Τι πρέπει να πάρεις μαζί σου;', en: 'Tomorrow the class is going on a trip to the park. What should you bring?' },
    options: { el: ['Την τηλεόραση', 'Το κρεβάτι σου', 'Νερό και ένα μικρό φαγητό', 'Όλα τα βιβλία σου'], en: ['The television', 'Your bed', 'Water and a small snack', 'All of your books'] },
    correct: 2,
    explanation: {
      el: 'Στην εκδρομή παίρνουμε νερό, ένα μικρό φαγητό και ένα καπέλο. Τα βιβλία μένουν στο σπίτι.',
      en: 'On a trip we bring water, a small snack and a hat. The books stay at home.',
    },
  },
  {
    q: { el: 'Στην εκδρομή η Μαρία βλέπει ένα ωραίο λουλούδι. Τι είναι σωστό να κάνει;', en: 'On the trip Maria sees a pretty flower. What is the right thing to do?' },
    options: { el: ['Να το κόψει για το σπίτι', 'Να φύγει από την ομάδα για να το δει', 'Να το πατήσει', 'Να το κοιτάξει χωρίς να το κόψει'], en: ['Pick it to take home', 'Leave the group to look at it', 'Step on it', 'Look at it without picking it'] },
    correct: 3,
    explanation: {
      el: 'Στην εκδρομή μένουμε με την ομάδα μας και δεν κόβουμε τα λουλούδια. Τα κοιτάμε και τα αφήνουμε να μεγαλώσουν.',
      en: 'On a trip we stay with our group and do not pick flowers. We look at them and let them grow.',
    },
  },
  {
    q: { el: 'Στη γιορτή του σχολείου ένα άλλο παιδί λέει ποίημα. Τι κάνουμε εμείς;', en: 'At the school celebration another child is saying a poem. What do we do?' },
    options: { el: ['Μιλάμε με τον διπλανό μας', 'Ακούμε ήσυχα και χειροκροτάμε στο τέλος', 'Σηκωνόμαστε και φεύγουμε', 'Λέμε το ποίημα πιο δυνατά από αυτό'], en: ['Talk to the child next to us', 'Listen quietly and clap at the end', 'Get up and leave', 'Say the poem louder than them'] },
    correct: 1,
    explanation: {
      el: 'Στη γιορτή ακούμε ήσυχα όποιον είναι στη σκηνή. Στο τέλος χειροκροτάμε για να του δείξουμε ότι μας άρεσε.',
      en: 'At a celebration we listen quietly to whoever is on stage. At the end we clap to show we liked it.',
    },
  },
];
