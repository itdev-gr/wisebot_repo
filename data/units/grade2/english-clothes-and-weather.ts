/**
 * Β' Δημοτικού · Αγγλικά · Ρούχα & Καιρός / Clothes & Weather
 * ==========================================================
 * Original questions for a Greek child of 7–8 learning English. Order:
 *   1–6   clothes words: coat, hat, boots, T-shirt, shoes, dress
 *   7–11  weather words: sunny, rainy, cold, hot, snowing — "What's the weather like?"
 *   12–14 "Put on your…" / "Take off your…" — matching clothes to the weather
 *   15–18 the four seasons and which clothes/weather go with each
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ENGLISH_CLOTHES_AND_WEATHER: QuizQuestion[] = [
  // ── 1–6: clothes words ─────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «παλτό» στα αγγλικά;', en: 'How do you say «παλτό» in English?' },
    options: { el: ['hat', 'coat', 'boots', 'socks'], en: ['hat', 'coat', 'boots', 'socks'] },
    correct: 1,
    explanation: {
      el: 'Το παλτό στα αγγλικά είναι «coat». Το φοράμε όταν κάνει κρύο.',
      en: 'A «παλτό» is a coat. We wear a coat when it is cold.',
    },
  },
  {
    q: { el: 'Τι είναι το «hat»;', en: 'What is a «hat»?' },
    options: { el: ['καπέλο', 'κασκόλ', 'γάντια', 'παπούτσι'], en: ['a cap you wear on your head', 'a scarf', 'gloves', 'a shoe'] },
    correct: 0,
    explanation: {
      el: 'Το «hat» είναι το καπέλο. Το φοράμε στο κεφάλι.',
      en: 'A hat is what we wear on our head.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπότες» στα αγγλικά;', en: 'How do you say «μπότες» in English?' },
    options: { el: ['shoes', 'socks', 'boots', 'shorts'], en: ['shoes', 'socks', 'boots', 'shorts'] },
    correct: 2,
    explanation: {
      el: 'Οι μπότες είναι «boots». Τις φοράμε στα πόδια όταν βρέχει ή χιονίζει.',
      en: 'Boots go on our feet when it rains or snows.',
    },
  },
  {
    q: { el: 'Ποιο ρούχο φοράμε πάνω, το καλοκαίρι, με κοντό μανίκι;', en: 'Which clothing has short sleeves and we wear it in summer?' },
    options: { el: ['boots', 'coat', 'scarf', 'T-shirt'], en: ['boots', 'coat', 'scarf', 'T-shirt'] },
    correct: 3,
    explanation: {
      el: 'Το «T-shirt» είναι η κοντομάνικη μπλούζα. Μοιάζει με το γράμμα T!',
      en: 'A T-shirt is a short-sleeved top. It looks like the letter T!',
    },
  },
  {
    q: { el: 'Τι φοράμε στα πόδια μας κάθε μέρα;', en: 'What do we wear on our feet every day?' },
    options: { el: ['shoes', 'hat', 'T-shirt', 'coat'], en: ['shoes', 'hat', 'T-shirt', 'coat'] },
    correct: 0,
    explanation: {
      el: 'Τα παπούτσια είναι «shoes». Ένα παπούτσι = «shoe», δύο = «shoes».',
      en: 'Shoes go on our feet. One shoe, two shoes.',
    },
  },
  {
    q: { el: 'Η Ελένη φοράει ένα ροζ φόρεμα. Πώς το λέμε στα αγγλικά;', en: 'Eleni is wearing a pink «φόρεμα». What is the English word?' },
    options: { el: ['skirt', 'trousers', 'dress', 'jacket'], en: ['skirt', 'trousers', 'dress', 'jacket'] },
    correct: 2,
    explanation: {
      el: 'Το φόρεμα είναι «dress». Η φούστα είναι «skirt» — μην τα μπερδεύεις!',
      en: 'A «φόρεμα» is a dress. A skirt is only the bottom part.',
    },
  },

  // ── 7–11: weather words ────────────────────────────────────────────────────
  {
    q: { el: 'Ο ήλιος λάμπει. Τι καιρό κάνει;', en: 'The sun is shining. What is the weather like?' },
    options: { el: ['It\'s rainy.', 'It\'s sunny.', 'It\'s cold.', 'It\'s windy.'], en: ['It\'s rainy.', 'It\'s sunny.', 'It\'s cold.', 'It\'s windy.'] },
    correct: 1,
    explanation: {
      el: 'Όταν έχει ήλιο λέμε «It\'s sunny». Sun = ήλιος, sunny = ηλιόλουστος.',
      en: 'When the sun shines we say «It\'s sunny». Sun → sunny.',
    },
  },
  {
    q: { el: 'Πέφτει βροχή. Πώς το λέμε στα αγγλικά;', en: 'Rain is falling. How do we say it in English?' },
    options: { el: ['It\'s hot.', 'It\'s sunny.', 'It\'s snowy.', 'It\'s rainy.'], en: ['It\'s hot.', 'It\'s sunny.', 'It\'s snowy.', 'It\'s rainy.'] },
    correct: 3,
    explanation: {
      el: 'Η βροχή είναι «rain» και ο βροχερός καιρός «rainy». Λέμε «It\'s rainy».',
      en: 'Rain → rainy. We say «It\'s rainy».',
    },
  },
  {
    q: { el: 'Πώς λέμε «κάνει κρύο» στα αγγλικά;', en: 'How do you say «κάνει κρύο» in English?' },
    options: { el: ['It\'s cold.', 'It\'s hot.', 'It\'s warm.', 'It\'s sunny.'], en: ['It\'s cold.', 'It\'s hot.', 'It\'s warm.', 'It\'s sunny.'] },
    correct: 0,
    explanation: {
      el: '«Cold» σημαίνει κρύο. «Hot» σημαίνει ζέστη — είναι το αντίθετο!',
      en: 'Cold means «κρύο». Hot is the opposite!',
    },
  },
  {
    q: { el: 'Είναι καλοκαίρι και κάνει πολλή ζέστη. Τι λέμε;', en: 'It is summer and very warm. What do we say?' },
    options: { el: ['It\'s cold.', 'It\'s snowing.', 'It\'s hot.', 'It\'s rainy.'], en: ['It\'s cold.', 'It\'s snowing.', 'It\'s hot.', 'It\'s rainy.'] },
    correct: 2,
    explanation: {
      el: 'Όταν κάνει πολλή ζέστη λέμε «It\'s hot». Hot = ζεστό.',
      en: 'When it is very warm we say «It\'s hot».',
    },
  },
  {
    q: { el: 'Ποια ερώτηση κάνουμε για να μάθουμε τον καιρό;', en: 'Which question do we ask to find out the weather?' },
    options: { el: ['What\'s your name?', 'How old are you?', 'What\'s the weather like?', 'Where is my hat?'], en: ['What\'s your name?', 'How old are you?', 'What\'s the weather like?', 'Where is my hat?'] },
    correct: 2,
    explanation: {
      el: 'Ρωτάμε «What\'s the weather like?» και απαντάμε «It\'s sunny», «It\'s rainy»…',
      en: 'We ask «What\'s the weather like?» and answer «It\'s sunny», «It\'s rainy»…',
    },
  },

  // ── 12–14: Put on your… ────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «Put on your coat»;', en: 'What does «Put on your coat» mean?' },
    options: { el: ['Βγάλε το παλτό σου.', 'Φόρεσε το παλτό σου.', 'Πλύνε το παλτό σου.', 'Βρες το παλτό σου.'], en: ['Take your coat off.', 'Wear your coat.', 'Wash your coat.', 'Find your coat.'] },
    correct: 1,
    explanation: {
      el: '«Put on» σημαίνει «φόρεσε». Η μαμά λέει «Put on your coat» όταν κάνει κρύο.',
      en: '«Put on» means to wear something. Mum says «Put on your coat» when it is cold.',
    },
  },
  {
    q: { el: 'Βρέχει. Τι λέει η μαμά στον Νίκο;', en: 'It\'s rainy. What does Mum say to Nikos?' },
    options: { el: ['Put on your T-shirt.', 'Put on your shorts.', 'Put on your sunglasses.', 'Put on your boots.'], en: ['Put on your T-shirt.', 'Put on your shorts.', 'Put on your sunglasses.', 'Put on your boots.'] },
    correct: 3,
    explanation: {
      el: 'Όταν βρέχει φοράμε μπότες: «Put on your boots!»',
      en: 'When it rains we wear boots: «Put on your boots!»',
    },
  },
  {
    q: { el: 'Κάνει ζέστη. Ο Γιώργος φοράει παλτό. Τι του λέμε;', en: 'It\'s hot. Giorgos is wearing a coat. What do we tell him?' },
    options: { el: ['Take off your coat.', 'Put on your coat.', 'Put on your hat.', 'Take off your T-shirt.'], en: ['Take off your coat.', 'Put on your coat.', 'Put on your hat.', 'Take off your T-shirt.'] },
    correct: 0,
    explanation: {
      el: '«Take off» σημαίνει «βγάλε». Είναι το αντίθετο του «put on».',
      en: '«Take off» means to remove. It is the opposite of «put on».',
    },
  },

  // ── 15–18: seasons ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «καλοκαίρι» στα αγγλικά;', en: 'How do you say «καλοκαίρι» in English?' },
    options: { el: ['winter', 'spring', 'summer', 'autumn'], en: ['winter', 'spring', 'summer', 'autumn'] },
    correct: 2,
    explanation: {
      el: 'Το καλοκαίρι είναι «summer». Οι 4 εποχές: spring, summer, autumn, winter.',
      en: 'Summer is the hot season. The 4 seasons: spring, summer, autumn, winter.',
    },
  },
  {
    q: { el: 'Σε ποια εποχή χιονίζει και κάνει πολύ κρύο;', en: 'In which season does it snow and get very cold?' },
    options: { el: ['summer', 'winter', 'spring', 'autumn'], en: ['summer', 'winter', 'spring', 'autumn'] },
    correct: 1,
    explanation: {
      el: 'Ο χειμώνας είναι «winter». Είναι κρύος και μερικές φορές χιονίζει.',
      en: 'Winter is the cold season. Sometimes it snows.',
    },
  },
  {
    q: { el: 'Τι φοράμε το καλοκαίρι (in summer);', en: 'What do we wear in summer?' },
    options: { el: ['a coat and boots', 'a scarf and gloves', 'a T-shirt and a hat', 'a coat and a scarf'], en: ['a coat and boots', 'a scarf and gloves', 'a T-shirt and a hat', 'a coat and a scarf'] },
    correct: 2,
    explanation: {
      el: 'Το καλοκαίρι κάνει ζέστη: φοράμε T-shirt και καπέλο για τον ήλιο.',
      en: 'Summer is hot: we wear a T-shirt and a hat for the sun.',
    },
  },
  {
    q: { el: 'Είναι χειμώνας και χιονίζει. Ποια πρόταση είναι σωστή;', en: 'It is winter and it is snowing. Which sentence is right?' },
    options: { el: ['It\'s hot. Put on your T-shirt.', 'It\'s cold. Put on your coat.', 'It\'s sunny. Take off your hat.', 'It\'s rainy. Put on your shorts.'], en: ['It\'s hot. Put on your T-shirt.', 'It\'s cold. Put on your coat.', 'It\'s sunny. Take off your hat.', 'It\'s rainy. Put on your shorts.'] },
    correct: 1,
    explanation: {
      el: 'Τον χειμώνα κάνει κρύο (it\'s cold), γι\' αυτό φοράμε παλτό (put on your coat).',
      en: 'In winter it\'s cold, so we put on a coat.',
    },
  },
];
