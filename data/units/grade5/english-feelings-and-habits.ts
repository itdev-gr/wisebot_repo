/**
 * Ε' Δημοτικού · Αγγλικά · Συναισθήματα & Συνήθειες — "Feelings & Habits"
 * =======================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 10–11 learning English.
 *
 * What the unit covers, in order:
 *   1–5   feelings adjectives: happy, sad, tired, scared, bored, nervous, excited
 *   6–9   good and bad habits: brush your teeth, go to bed late, eat vegetables…
 *   10–11 customs around the world: greetings, taking shoes off, Greek name days
 *   12–15 adverbs of frequency: always / usually / often / sometimes / never + word order
 *   16–18 present simple: third-person -s, don't / doesn't, questions with Do / Does
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_FEELINGS_AND_HABITS: QuizQuestion[] = [
  // ── 1–5: feelings adjectives ───────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «χαρούμενος» στα αγγλικά;', en: 'How do you say «χαρούμενος» in English?' },
    options: { el: ['sad', 'happy', 'angry', 'tired'], en: ['sad', 'happy', 'angry', 'tired'] },
    correct: 1,
    explanation: {
      el: '«Χαρούμενος» = happy. Το sad είναι «λυπημένος», το angry «θυμωμένος» και το tired «κουρασμένος».',
      en: '«Χαρούμενος» = happy. Sad means «λυπημένος», angry means «θυμωμένος» and tired means «κουρασμένος».',
    },
  },
  {
    q: { el: 'Η Ελένη δεν κοιμήθηκε καλά χθες. Σήμερα είναι…', en: 'Eleni did not sleep well last night. Today she is…' },
    options: { el: ['excited', 'hungry', 'tired', 'bored'], en: ['excited', 'hungry', 'tired', 'bored'] },
    correct: 2,
    explanation: {
      el: 'Όταν δεν κοιμόμαστε καλά, είμαστε tired (κουρασμένοι). Το hungry σημαίνει «πεινασμένος».',
      en: 'When we do not sleep well, we are tired. Hungry means «πεινασμένος».',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «scared»;', en: 'What does the word «scared» mean?' },
    options: { el: ['φοβισμένος', 'θυμωμένος', 'λυπημένος', 'ντροπαλός'], en: ['φοβισμένος (afraid)', 'θυμωμένος (angry)', 'λυπημένος (sad)', 'ντροπαλός (shy)'] },
    correct: 0,
    explanation: {
      el: 'Scared = φοβισμένος. «I am scared of the dark» = «Φοβάμαι το σκοτάδι».',
      en: 'Scared = φοβισμένος, afraid. «I am scared of the dark» means you are afraid of the dark.',
    },
  },
  {
    q: { el: 'Ο Νίκος βλέπει την ίδια ταινία για τρίτη φορά και χασμουριέται. Είναι…', en: 'Nikos is watching the same film for the third time and he is yawning. He is…' },
    options: { el: ['surprised', 'bored', 'proud', 'worried'], en: ['surprised', 'bored', 'proud', 'worried'] },
    correct: 1,
    explanation: {
      el: 'Bored = βαριεστημένος. Όταν κάτι δεν έχει ενδιαφέρον, λέμε «I am bored». Το boring είναι το πράγμα που μας κάνει να βαριόμαστε!',
      en: 'Bored = βαριεστημένος. When something is not interesting, we say «I am bored». Boring is the thing that makes us feel that way!',
    },
  },
  {
    q: { el: 'Αύριο είναι η πρώτη μέρα της Μαρίας στο νέο σχολείο. Νιώθει λίγο… (έχει αγωνία)', en: 'Tomorrow is Maria\'s first day at her new school. She feels a little… (she has butterflies)' },
    options: { el: ['nervous', 'lazy', 'sleepy', 'calm'], en: ['nervous', 'lazy', 'sleepy', 'calm'] },
    correct: 0,
    explanation: {
      el: 'Nervous = αγχωμένος, με αγωνία. Το calm είναι το αντίθετο: «ήρεμος».',
      en: 'Nervous = αγχωμένος, with butterflies in your stomach. Calm is the opposite: «ήρεμος».',
    },
  },

  // ── 6–9: good and bad habits ───────────────────────────────────────────────
  {
    q: { el: 'Ποια από αυτές είναι μια καλή συνήθεια (a good habit);', en: 'Which of these is a good habit?' },
    options: { el: ['I brush my teeth twice a day.', 'I go to bed very late.', 'I eat sweets every day.', 'I bite my nails.'], en: ['I brush my teeth twice a day.', 'I go to bed very late.', 'I eat sweets every day.', 'I bite my nails.'] },
    correct: 0,
    explanation: {
      el: 'Το βούρτσισμα των δοντιών δύο φορές τη μέρα είναι καλή συνήθεια. Τα άλλα τρία είναι bad habits (κακές συνήθειες).',
      en: 'Brushing your teeth twice a day is a good habit. The other three are bad habits.',
    },
  },
  {
    q: { el: 'Πώς λέμε «τρώω λαχανικά» στα αγγλικά;', en: 'How do you say «τρώω λαχανικά» in English?' },
    options: { el: ['I eat fruit.', 'I eat vegetables.', 'I drink water.', 'I eat breakfast.'], en: ['I eat fruit.', 'I eat vegetables.', 'I drink water.', 'I eat breakfast.'] },
    correct: 1,
    explanation: {
      el: 'Λαχανικά = vegetables. Τα φρούτα είναι fruit και το πρωινό breakfast.',
      en: 'Λαχανικά = vegetables. Fruit is φρούτα and breakfast is πρωινό.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «It is a bad habit to ___ too much TV.»', en: 'Complete: «It is a bad habit to ___ too much TV.»' },
    options: { el: ['look', 'see', 'watch', 'read'], en: ['look', 'see', 'watch', 'read'] },
    correct: 2,
    explanation: {
      el: 'Για την τηλεόραση λέμε watch TV, όχι see ή look. Watch = παρακολουθώ κάτι που κινείται.',
      en: 'For television we say watch TV, not see or look. Watch = follow something that moves.',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να κόψει μια κακή συνήθεια. Τι λέει;', en: 'Giorgos wants to stop a bad habit. What does he say?' },
    options: { el: ['I want to start going to bed late.', 'I want to stop biting my nails.', 'I want to stop eating vegetables.', 'I want to start eating more sweets.'], en: ['I want to start going to bed late.', 'I want to stop biting my nails.', 'I want to stop eating vegetables.', 'I want to start eating more sweets.'] },
    correct: 1,
    explanation: {
      el: 'Stop + -ing = σταματάω να κάνω κάτι. «I want to stop biting my nails» = «Θέλω να σταματήσω να τρώω τα νύχια μου» — μια κακή συνήθεια!',
      en: 'Stop + -ing = stop doing something. «I want to stop biting my nails» is stopping a bad habit!',
    },
  },

  // ── 10–11: customs around the world ───────────────────────────────────────
  {
    q: { el: 'Στην Ιαπωνία, πριν μπουν στο σπίτι, οι άνθρωποι συνήθως…', en: 'In Japan, before they go into a house, people usually…' },
    options: { el: ['take off their shoes', 'put on a hat', 'sing a song', 'wash the car'], en: ['take off their shoes', 'put on a hat', 'sing a song', 'wash the car'] },
    correct: 0,
    explanation: {
      el: 'Take off = βγάζω (ρούχα, παπούτσια). Στην Ιαπωνία είναι έθιμο (custom) να βγάζεις τα παπούτσια σου στην είσοδο.',
      en: 'Take off = remove clothes or shoes. In Japan it is a custom to take off your shoes at the door.',
    },
  },
  {
    q: { el: 'Τι είναι το «name day» που γιορτάζουμε στην Ελλάδα;', en: 'What is the «name day» that we celebrate in Greece?' },
    options: { el: ['η μέρα που γεννήθηκες', 'η μέρα της γιορτής του ονόματός σου', 'η πρώτη μέρα του σχολείου', 'η μέρα που παίρνεις το όνομά σου'], en: ['the day you were born', 'the feast day of your name', 'the first day of school', 'the day you get your name'] },
    correct: 1,
    explanation: {
      el: 'Name day = ονομαστική γιορτή, μια ελληνική συνήθεια. Η μέρα που γεννήθηκες λέγεται birthday.',
      en: 'Name day = ονομαστική γιορτή, a Greek custom. The day you were born is your birthday.',
    },
  },

  // ── 12–15: adverbs of frequency ───────────────────────────────────────────
  {
    q: { el: 'Ποιο επίρρημα σημαίνει «ποτέ»;', en: 'Which adverb means «ποτέ»?' },
    options: { el: ['always', 'sometimes', 'never', 'usually'], en: ['always', 'sometimes', 'never', 'usually'] },
    correct: 2,
    explanation: {
      el: 'Never = ποτέ (0 φορές). Always = πάντα, usually = συνήθως, sometimes = μερικές φορές.',
      en: 'Never = ποτέ, 0 times. Always = πάντα, usually = συνήθως, sometimes = μερικές φορές.',
    },
  },
  {
    q: { el: 'Βάλε τα επιρρήματα στη σωστή σειρά, από το πιο συχνό στο πιο σπάνιο.', en: 'Put the adverbs in the right order, from most often to least often.' },
    options: { el: ['always – sometimes – often – never', 'always – often – sometimes – never', 'never – sometimes – often – always', 'often – always – never – sometimes'], en: ['always – sometimes – often – never', 'always – often – sometimes – never', 'never – sometimes – often – always', 'often – always – never – sometimes'] },
    correct: 1,
    explanation: {
      el: 'Από το 100% στο 0%: always (πάντα) → often (συχνά) → sometimes (μερικές φορές) → never (ποτέ).',
      en: 'From 100% to 0%: always → often → sometimes → never.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει το επίρρημα στη σωστή θέση;', en: 'Which sentence has the adverb in the right place?' },
    options: { el: ['Maria usually walks to school.', 'Maria walks usually to school.', 'Usually Maria walks to school usually.', 'Maria walks to usually school.'], en: ['Maria usually walks to school.', 'Maria walks usually to school.', 'Usually Maria walks to school usually.', 'Maria walks to usually school.'] },
    correct: 0,
    explanation: {
      el: 'Κανόνας: το επίρρημα συχνότητας μπαίνει ΠΡΙΝ από το κύριο ρήμα. «Maria usually walks…»',
      en: 'Rule: the frequency adverb goes BEFORE the main verb. «Maria usually walks…»',
    },
  },
  {
    q: { el: 'Με το ρήμα «be» το επίρρημα μπαίνει μετά. Ποια πρόταση είναι σωστή;', en: 'With the verb «be» the adverb comes after it. Which sentence is correct?' },
    options: { el: ['Nikos always is happy.', 'Nikos is always happy.', 'Always Nikos is happy.', 'Nikos is happy always.'], en: ['Nikos always is happy.', 'Nikos is always happy.', 'Always Nikos is happy.', 'Nikos is happy always.'] },
    correct: 1,
    explanation: {
      el: 'Εξαίρεση: με το am / is / are το επίρρημα μπαίνει ΜΕΤΑ το ρήμα. «He is always happy.»',
      en: 'Exception: with am / is / are the adverb goes AFTER the verb. «He is always happy.»',
    },
  },

  // ── 16–18: present simple ─────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «My sister ___ her teeth every morning.»', en: 'Complete: «My sister ___ her teeth every morning.»' },
    options: { el: ['brush', 'brushs', 'brushes', 'brushing'], en: ['brush', 'brushs', 'brushes', 'brushing'] },
    correct: 2,
    explanation: {
      el: 'Στο τρίτο πρόσωπο (he / she / it) το ρήμα παίρνει -s. Όταν τελειώνει σε -sh, -ch, -ss, -x, παίρνει -es: brushes, watches.',
      en: 'In the third person (he / she / it) the verb takes -s. After -sh, -ch, -ss, -x it takes -es: brushes, watches.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή στην άρνηση;', en: 'Which negative sentence is correct?' },
    options: { el: ['Giorgos don\'t eat vegetables.', 'Giorgos doesn\'t eats vegetables.', 'Giorgos not eat vegetables.', 'Giorgos doesn\'t eat vegetables.'], en: ['Giorgos don\'t eat vegetables.', 'Giorgos doesn\'t eats vegetables.', 'Giorgos not eat vegetables.', 'Giorgos doesn\'t eat vegetables.'] },
    correct: 3,
    explanation: {
      el: 'He / she / it → doesn\'t + ρήμα ΧΩΡΙΣ -s. Το -s το «παίρνει» το doesn\'t: «Giorgos doesn\'t eat».',
      en: 'He / she / it → doesn\'t + verb WITHOUT -s. The doesn\'t «takes» the -s: «Giorgos doesn\'t eat».',
    },
  },
  {
    q: { el: 'Πώς ρωτάμε «Πάει η Ελένη συχνά για κολύμπι;» στα αγγλικά;', en: 'How do we ask «Πάει η Ελένη συχνά για κολύμπι;» in English?' },
    options: { el: ['Do Eleni often go swimming?', 'Does Eleni often go swimming?', 'Does Eleni often goes swimming?', 'Eleni does go often swimming?'], en: ['Do Eleni often go swimming?', 'Does Eleni often go swimming?', 'Does Eleni often goes swimming?', 'Eleni does go often swimming?'] },
    correct: 1,
    explanation: {
      el: 'Ερώτηση για he / she / it: Does + υποκείμενο + ρήμα χωρίς -s. Το επίρρημα μπαίνει πριν από το ρήμα: «Does Eleni often go…?»',
      en: 'Question for he / she / it: Does + subject + verb without -s. The adverb goes before the verb: «Does Eleni often go…?»',
    },
  },
];
