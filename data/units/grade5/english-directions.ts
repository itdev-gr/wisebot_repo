/**
 * Ε' Δημοτικού · Αγγλικά · Κατευθύνσεις / Directions
 * ===================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a Greek child of 10–11 learning English as a foreign language.
 *
 * What the unit covers, in order:
 *   1–4   places in a city: bank, bakery, post office, library, hospital, cinema…
 *   5–7   asking the way: "How can I get to…?", "Excuse me, where is…?"
 *   8–11  giving directions: turn left / right, go straight on, "It's on your left"
 *   12–15 prepositions of place: next to, opposite, between, behind, in front of
 *   16–18 there is / there are, questions and negatives
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_DIRECTIONS: QuizQuestion[] = [
  // ── 1–4: places in a city ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «φούρνος» στα αγγλικά;', en: 'How do you say «φούρνος» in English?' },
    options: { el: ['bakery', 'bank', 'bookshop', 'butcher\'s'], en: ['bakery', 'bank', 'bookshop', 'butcher\'s'] },
    correct: 0,
    explanation: {
      el: 'Ο φούρνος είναι «bakery». Η «bank» είναι η τράπεζα και το «bookshop» το βιβλιοπωλείο.',
      en: 'A «φούρνος» is a bakery. A bank is where you keep money and a bookshop sells books.',
    },
  },
  {
    q: { el: 'Η Μαρία θέλει να στείλει ένα γράμμα. Πού πρέπει να πάει;', en: 'Maria wants to send a letter. Where does she need to go?' },
    options: { el: ['the library', 'the hospital', 'the post office', 'the police station'], en: ['the library', 'the hospital', 'the post office', 'the police station'] },
    correct: 2,
    explanation: {
      el: 'Τα γράμματα τα στέλνουμε από το ταχυδρομείο, «post office». Η «library» είναι η βιβλιοθήκη.',
      en: 'We send letters from the post office. A library is where you borrow books.',
    },
  },
  {
    q: { el: 'Τι είναι το «chemist\'s» (ή «pharmacy»);', en: 'What is a chemist\'s (or pharmacy)?' },
    options: { el: ['το σχολείο', 'το φαρμακείο', 'το σινεμά', 'το μουσείο'], en: ['the school', 'the pharmacy', 'the cinema', 'the museum'] },
    correct: 1,
    explanation: {
      el: 'Το «chemist\'s» ή «pharmacy» είναι το φαρμακείο — εκεί αγοράζουμε φάρμακα.',
      en: 'A chemist\'s or pharmacy is where we buy medicine.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι μέρος μιας πόλης;', en: 'Which word is NOT a place in a city?' },
    options: { el: ['supermarket', 'bus stop', 'square', 'umbrella'], en: ['supermarket', 'bus stop', 'square', 'umbrella'] },
    correct: 3,
    explanation: {
      el: 'Η «umbrella» είναι η ομπρέλα, όχι μέρος. Το «square» είναι η πλατεία και το «bus stop» η στάση.',
      en: 'An umbrella is a thing, not a place. A square is an open space in a town and a bus stop is where you wait for the bus.',
    },
  },

  // ── 5–7: asking the way ────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος θέλει να ρωτήσει πώς θα πάει στο μουσείο. Τι λέει;', en: 'Nikos wants to ask the way to the museum. What does he say?' },
    options: { el: ['How can I get to the museum?', 'How much is the museum?', 'What time is the museum?', 'How old is the museum?'], en: ['How can I get to the museum?', 'How much is the museum?', 'What time is the museum?', 'How old is the museum?'] },
    correct: 0,
    explanation: {
      el: 'Για να ρωτήσουμε τον δρόμο λέμε «How can I get to…?» = «Πώς μπορώ να πάω στο…;».',
      en: 'To ask the way we say “How can I get to…?”. “How much” asks about price.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___, where is the bank, please?»', en: 'Complete: “___, where is the bank, please?”' },
    options: { el: ['Goodbye', 'Excuse me', 'Thank you', 'Sorry'], en: ['Goodbye', 'Excuse me', 'Thank you', 'Sorry'] },
    correct: 1,
    explanation: {
      el: 'Πριν ρωτήσουμε κάποιον στον δρόμο λέμε «Excuse me» = «Συγγνώμη, με συγχωρείτε». Το «Sorry» το λέμε όταν κάνουμε λάθος.',
      en: 'Before asking a stranger something we say “Excuse me”. “Sorry” is for when we make a mistake.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Είναι μακριά;» στα αγγλικά;', en: 'How do you say «Είναι μακριά;» in English?' },
    options: { el: ['Is it near?', 'Is it open?', 'Is it far?', 'Is it big?'], en: ['Is it near?', 'Is it open?', 'Is it far?', 'Is it big?'] },
    correct: 2,
    explanation: {
      el: '«Far» σημαίνει μακριά και «near» σημαίνει κοντά. Άρα «Είναι μακριά;» = «Is it far?».',
      en: '“Far” means a long way away and “near” means close. So «Είναι μακριά;» is “Is it far?”.',
    },
  },

  // ── 8–11: giving directions ────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Στρίψε αριστερά» στα αγγλικά;', en: 'How do you say «Στρίψε αριστερά» in English?' },
    options: { el: ['Turn right.', 'Turn left.', 'Go straight on.', 'Stop here.'], en: ['Turn right.', 'Turn left.', 'Go straight on.', 'Stop here.'] },
    correct: 1,
    explanation: {
      el: '«Left» = αριστερά, «right» = δεξιά. Άρα «Στρίψε αριστερά» = «Turn left».',
      en: '“Left” is αριστερά and “right” is δεξιά. So «Στρίψε αριστερά» is “Turn left”.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «Go straight on»;', en: 'What does “Go straight on” mean?' },
    options: { el: ['Γύρνα πίσω', 'Στρίψε δεξιά', 'Περίμενε εδώ', 'Προχώρα ευθεία'], en: ['Go back', 'Turn right', 'Wait here', 'Go straight ahead'] },
    correct: 3,
    explanation: {
      el: '«Go straight on» σημαίνει «προχώρα ευθεία», χωρίς να στρίψεις πουθενά.',
      en: '“Go straight on” means keep walking forward without turning.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Turn right ___ the bakery.»', en: 'Complete: “Turn right ___ the bakery.”' },
    options: { el: ['at', 'on', 'to', 'of'], en: ['at', 'on', 'to', 'of'] },
    correct: 0,
    explanation: {
      el: 'Λέμε «turn right AT the bakery» = «στρίψε δεξιά στον φούρνο». Με το «turn» χρησιμοποιούμε «at».',
      en: 'We say “turn right AT the bakery”. After “turn left / right” we use “at” for the place where we turn.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ακούει: «Take the second street on the left.» Ποιον δρόμο παίρνει;', en: 'Giorgos hears: “Take the second street on the left.” Which street does he take?' },
    options: { el: ['τον πρώτο δρόμο αριστερά', 'τον δεύτερο δρόμο δεξιά', 'τον δεύτερο δρόμο αριστερά', 'τον πρώτο δρόμο δεξιά'], en: ['the first street on the left', 'the second street on the right', 'the second street on the left', 'the first street on the right'] },
    correct: 2,
    explanation: {
      el: '«Second» = δεύτερος, «on the left» = αριστερά. Άρα παίρνει τον δεύτερο δρόμο αριστερά.',
      en: '“Second” is the one after the first, and “on the left” tells us the side. So: the second street on the left.',
    },
  },

  // ── 12–15: prepositions of place ───────────────────────────────────────────
  {
    q: { el: 'Το σινεμά είναι δίπλα στην τράπεζα. Συμπλήρωσε: «The cinema is ___ the bank.»', en: 'The cinema is beside the bank. Complete: “The cinema is ___ the bank.”' },
    options: { el: ['under', 'next to', 'between', 'behind'], en: ['under', 'next to', 'between', 'behind'] },
    correct: 1,
    explanation: {
      el: '«Next to» σημαίνει «δίπλα σε». Το «behind» είναι «πίσω από» και το «under» «κάτω από».',
      en: '“Next to” means right beside something. “Behind” is at the back and “under” is below.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «opposite»;', en: 'What does “opposite” mean?' },
    options: { el: ['απέναντι', 'μπροστά από', 'ανάμεσα', 'πάνω από'], en: ['across from', 'in front of', 'between', 'above'] },
    correct: 0,
    explanation: {
      el: '«Opposite» = απέναντι, στην άλλη πλευρά του δρόμου. «The school is opposite the park.»',
      en: '“Opposite” means on the other side of the street, facing you. “The school is opposite the park.”',
    },
  },
  {
    q: { el: 'Το ταχυδρομείο είναι ανάμεσα στον φούρνο και στο φαρμακείο. Ποια πρόταση είναι σωστή;', en: 'The post office is in the middle, with the bakery on one side and the chemist\'s on the other. Which sentence is correct?' },
    options: { el: ['The post office is behind the bakery and the chemist\'s.', 'The post office is between the bakery and the chemist\'s.', 'The post office is opposite the bakery and the chemist\'s.', 'The post office is in front of the bakery and the chemist\'s.'], en: ['The post office is behind the bakery and the chemist\'s.', 'The post office is between the bakery and the chemist\'s.', 'The post office is opposite the bakery and the chemist\'s.', 'The post office is in front of the bakery and the chemist\'s.'] },
    correct: 1,
    explanation: {
      el: '«Between A and B» = ανάμεσα στο Α και στο Β. Θυμήσου: between … and …',
      en: '“Between A and B” means in the middle of the two. Remember the pair: between … and …',
    },
  },
  {
    q: { el: 'Η Ελένη στέκεται μπροστά από το σχολείο. Συμπλήρωσε: «Eleni is ___ the school.»', en: 'Eleni is standing at the front of the school, facing the street. Complete: “Eleni is ___ the school.”' },
    options: { el: ['behind', 'next', 'in front of', 'in front'], en: ['behind', 'next', 'in front of', 'in front'] },
    correct: 2,
    explanation: {
      el: '«In front of» = μπροστά από. Χρειάζεται και το «of»! Το «behind» είναι το αντίθετο: πίσω από.',
      en: '“In front of” needs all three words — don\'t forget “of”! “Behind” is the opposite.',
    },
  },

  // ── 16–18: there is / there are ────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «___ a park near my house.»', en: 'Complete: “___ a park near my house.”' },
    options: { el: ['There are', 'There is', 'It is', 'They are'], en: ['There are', 'There is', 'It is', 'They are'] },
    correct: 1,
    explanation: {
      el: 'Για ΕΝΑ πράγμα λέμε «there is» (a park). Για πολλά λέμε «there are».',
      en: 'For ONE thing we say “there is” (a park). For more than one we say “there are”.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ two bus stops in our street.»', en: 'Complete: “___ two bus stops in our street.”' },
    options: { el: ['There is', 'There has', 'There have', 'There are'], en: ['There is', 'There has', 'There have', 'There are'] },
    correct: 3,
    explanation: {
      el: '«Two bus stops» είναι πληθυντικός, άρα «there are». Το «there has» δεν υπάρχει στα αγγλικά!',
      en: '“Two bus stops” is plural, so we need “there are”. “There has” is not English!',
    },
  },
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: { el: ['Is there a cinema in your town?', 'There is a cinema in your town?', 'Are there a cinema in your town?', 'Is it a cinema in your town?'], en: ['Is there a cinema in your town?', 'There is a cinema in your town?', 'Are there a cinema in your town?', 'Is it a cinema in your town?'] },
    correct: 0,
    explanation: {
      el: 'Στην ερώτηση το «is» πάει μπροστά: «Is there a cinema…?». Απάντηση: «Yes, there is.» ή «No, there isn\'t.»',
      en: 'In a question, “is” goes first: “Is there a cinema…?”. Answer: “Yes, there is.” or “No, there isn\'t.”',
    },
  },
];
