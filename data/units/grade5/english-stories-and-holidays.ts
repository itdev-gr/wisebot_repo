/**
 * Ε' Δημοτικού · Αγγλικά · Ιστορίες & Διακοπές — "Stories & Holidays"
 * =====================================================================
 * Original questions for a Greek child of 10–11 learning English. Curriculum
 * topics only — no text from textbooks. What the unit covers, in order:
 *   1–3   fairy-tale words: princess, castle, dragon, wizard, magic
 *   4–5   myths: hero, gods, monster — and how a myth differs from a fairy tale
 *   6–8   at the airport: passport, boarding pass, gate, "take off"
 *   9–11  holidays: beach and hotel words, "go camping", "stay at"
 *   12–16 past simple: regular -ed, irregular forms (went, saw, ate), "didn't", questions with "did"
 *   17–18 telling a story: "Once upon a time…", "happily ever after", sequencing words
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_STORIES_AND_HOLIDAYS: QuizQuestion[] = [
  // ── 1–3: fairy-tale words ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «πριγκίπισσα» στα αγγλικά;', en: 'How do you say «πριγκίπισσα» in English?' },
    options: { el: ['prince', 'princess', 'queen', 'witch'], en: ['prince', 'princess', 'queen', 'witch'] },
    correct: 1,
    explanation: {
      el: 'Η πριγκίπισσα είναι «princess». Ο πρίγκιπας είναι «prince» — χωρίς το -ss στο τέλος.',
      en: 'Πριγκίπισσα is “princess”. The prince is “prince” — without the -ss at the end.',
    },
  },
  {
    q: { el: 'Ο δράκος ζει σε ένα μεγάλο πέτρινο κτίριο με πύργους. Πώς το λέμε στα αγγλικά;', en: 'The dragon lives in a big stone building with towers. What is it called in English?' },
    options: { el: ['forest', 'cave', 'castle', 'village'], en: ['forest', 'cave', 'castle', 'village'] },
    correct: 2,
    explanation: {
      el: 'Το κάστρο είναι «castle». Το «cave» είναι η σπηλιά, το «forest» το δάσος και το «village» το χωριό.',
      en: 'Κάστρο is “castle”. A “cave” is σπηλιά, a “forest” is δάσος and a “village” is χωριό.',
    },
  },
  {
    q: { el: 'Ποιος ήρωας του παραμυθιού κάνει μαγικά με ένα ραβδί;', en: 'Which fairy-tale character does magic with a wand?' },
    options: { el: ['the wizard', 'the knight', 'the king', 'the giant'], en: ['the wizard', 'the knight', 'the king', 'the giant'] },
    correct: 0,
    explanation: {
      el: 'Ο μάγος είναι «wizard» και το μαγικό ραβδί «magic wand». Ο «knight» είναι ο ιππότης και ο «giant» ο γίγαντας.',
      en: 'The μάγος is a “wizard” and his stick is a “magic wand”. A “knight” is ιππότης and a “giant” is γίγαντας.',
    },
  },

  // ── 4–5: myths ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Ηρακλής ήταν πολύ δυνατός και έκανε δώδεκα άθλους. Τι ήταν ο Ηρακλής;', en: 'Hercules was very strong and did twelve great tasks. What was Hercules?' },
    options: { el: ['a monster', 'a hero', 'a wizard', 'a king'], en: ['a monster', 'a hero', 'a wizard', 'a king'] },
    correct: 1,
    explanation: {
      el: 'Ο ήρωας ενός μύθου είναι «hero». Το «monster» είναι το τέρας που συνήθως νικάει ο ήρωας!',
      en: 'The main character of a myth is a “hero”. A “monster” is the creature the hero usually beats!',
    },
  },
  {
    q: { el: 'Τι διαφορά έχει ένας μύθος (myth) από ένα παραμύθι (fairy tale);', en: 'How is a myth different from a fairy tale?' },
    options: {
      el: ['A myth is always about a princess.', 'A myth is always true.', 'A myth is often about gods and heroes.', 'A myth has no characters.'],
      en: ['A myth is always about a princess.', 'A myth is always true.', 'A myth is often about gods and heroes.', 'A myth has no characters.'],
    },
    correct: 2,
    explanation: {
      el: 'Οι μύθοι μιλούν συνήθως για θεούς και ήρωες, όπως ο Δίας κι ο Οδυσσέας. Τα παραμύθια έχουν μάγους, πριγκίπισσες και δράκους.',
      en: 'Myths are usually about gods and heroes, like Zeus and Odysseus. Fairy tales have wizards, princesses and dragons.',
    },
  },

  // ── 6–8: at the airport ────────────────────────────────────────────────────
  {
    q: { el: 'Στο αεροδρόμιο ο υπάλληλος ζητά από τη Μαρία το μικρό βιβλιαράκι με τη φωτογραφία της. Τι ζητά;', en: 'At the airport the officer asks Maria for the small booklet with her photo. What does he ask for?' },
    options: { el: ['her ticket', 'her suitcase', 'her passport', 'her map'], en: ['her ticket', 'her suitcase', 'her passport', 'her map'] },
    correct: 2,
    explanation: {
      el: 'Το διαβατήριο είναι «passport». Το «ticket» είναι το εισιτήριο και το «suitcase» η βαλίτσα.',
      en: 'Διαβατήριο is “passport”. A “ticket” is εισιτήριο and a “suitcase” is βαλίτσα.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Our flight leaves from ___ 12.»', en: 'Complete: “Our flight leaves from ___ 12.”' },
    options: { el: ['gate', 'door', 'shop', 'seat'], en: ['gate', 'door', 'shop', 'seat'] },
    correct: 0,
    explanation: {
      el: 'Στο αεροδρόμιο η έξοδος για το αεροπλάνο λέγεται «gate», όχι «door». Το «seat» είναι η θέση μέσα στο αεροπλάνο.',
      en: 'At the airport the way out to the plane is a “gate”, not a “door”. A “seat” is your place inside the plane.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «The plane takes off at 9 o\'clock»;', en: 'What does “The plane takes off at 9 o\'clock” mean?' },
    options: {
      el: ['Το αεροπλάνο προσγειώνεται στις 9.', 'Το αεροπλάνο απογειώνεται στις 9.', 'Το αεροπλάνο καθυστερεί 9 ώρες.', 'Το αεροπλάνο έχει 9 θέσεις.'],
      en: ['The plane lands at 9.', 'The plane leaves the ground at 9.', 'The plane is 9 hours late.', 'The plane has 9 seats.'],
    },
    correct: 1,
    explanation: {
      el: '«Take off» = απογειώνομαι. Το αντίθετο, «land», σημαίνει προσγειώνομαι.',
      en: '“Take off” means to leave the ground and fly. The opposite, “land”, means to come down.',
    },
  },

  // ── 9–11: holidays ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος κοιμάται σε σκηνή στο βουνό. Τι κάνει;', en: 'Nikos sleeps in a tent on the mountain. What is he doing?' },
    options: { el: ['He is going camping.', 'He is going shopping.', 'He is going swimming.', 'He is going sightseeing.'], en: ['He is going camping.', 'He is going shopping.', 'He is going swimming.', 'He is going sightseeing.'] },
    correct: 0,
    explanation: {
      el: '«Go camping» = πάω κάμπινγκ, κοιμάμαι σε σκηνή (tent). «Go sightseeing» σημαίνει επισκέπτομαι τα αξιοθέατα.',
      en: '“Go camping” means sleeping in a tent. “Go sightseeing” means visiting famous places.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ ταιριάζει με τη θάλασσα;', en: 'Which word does NOT go with the sea?' },
    options: { el: ['sand', 'sunscreen', 'snowman', 'waves'], en: ['sand', 'sunscreen', 'snowman', 'waves'] },
    correct: 2,
    explanation: {
      el: 'Το «snowman» είναι ο χιονάνθρωπος — ανήκει στον χειμώνα! Στην παραλία έχουμε «sand» (άμμο), «waves» (κύματα) και «sunscreen» (αντηλιακό).',
      en: 'A “snowman” belongs to winter! At the beach we have “sand”, “waves” and “sunscreen”.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Last summer we stayed ___ a small hotel by the sea.»', en: 'Complete: “Last summer we stayed ___ a small hotel by the sea.”' },
    options: { el: ['on', 'at', 'to', 'for'], en: ['on', 'at', 'to', 'for'] },
    correct: 1,
    explanation: {
      el: 'Λέμε «stay at a hotel» — μένουμε ΣΕ ένα ξενοδοχείο. Το «to» το χρησιμοποιούμε για κίνηση: «go to a hotel».',
      en: 'We say “stay at a hotel”. We use “to” for movement: “go to a hotel”.',
    },
  },

  // ── 12–16: past simple ─────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Yesterday Eleni ___ with her cousins at the beach.»', en: 'Complete: “Yesterday Eleni ___ with her cousins at the beach.”' },
    options: { el: ['play', 'plays', 'played', 'playing'], en: ['play', 'plays', 'played', 'playing'] },
    correct: 2,
    explanation: {
      el: 'Το «yesterday» δείχνει παρελθόν, άρα Past Simple. Στα ομαλά ρήματα βάζουμε -ed: play → played.',
      en: '“Yesterday” shows the past, so we use the Past Simple. Regular verbs take -ed: play → played.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος (past simple) του ρήματος «go»;', en: 'What is the past simple of the verb “go”?' },
    options: { el: ['goed', 'gone', 'went', 'goes'], en: ['goed', 'gone', 'went', 'goes'] },
    correct: 2,
    explanation: {
      el: 'Το «go» είναι ανώμαλο ρήμα: go → went. Δεν παίρνει -ed! «We went to Crete last year.»',
      en: '“Go” is an irregular verb: go → went. It does not take -ed! “We went to Crete last year.”',
    },
  },
  {
    q: { el: 'Διάλεξε τη σωστή πρόταση.', en: 'Choose the correct sentence.' },
    options: {
      el: ['The dragon eated the apples.', 'The dragon ate the apples.', 'The dragon eat the apples.', 'The dragon eats the apples yesterday.'],
      en: ['The dragon eated the apples.', 'The dragon ate the apples.', 'The dragon eat the apples.', 'The dragon eats the apples yesterday.'],
    },
    correct: 1,
    explanation: {
      el: 'Το «eat» είναι ανώμαλο: eat → ate. Το «eated» δεν υπάρχει. Άλλα ανώμαλα: see → saw, have → had.',
      en: '“Eat” is irregular: eat → ate. “Eated” does not exist. Other irregular verbs: see → saw, have → had.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Ο Γιώργος δεν είδε το κάστρο» στα αγγλικά;', en: 'How do you say «Ο Γιώργος δεν είδε το κάστρο» in English?' },
    options: {
      el: ['George didn\'t saw the castle.', 'George don\'t see the castle.', 'George didn\'t see the castle.', 'George not saw the castle.'],
      en: ['George didn\'t saw the castle.', 'George don\'t see the castle.', 'George didn\'t see the castle.', 'George not saw the castle.'],
    },
    correct: 2,
    explanation: {
      el: 'Στην άρνηση του Past Simple βάζουμε «didn\'t» και το ρήμα γυρίζει στην αρχική του μορφή: didn\'t see (όχι didn\'t saw).',
      en: 'In the Past Simple negative we use “didn\'t” and the verb goes back to its base form: didn\'t see (not didn\'t saw).',
    },
  },
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: {
      el: ['Did you visited Rhodes last summer?', 'Did you visit Rhodes last summer?', 'Do you visited Rhodes last summer?', 'You visited Rhodes last summer did?'],
      en: ['Did you visited Rhodes last summer?', 'Did you visit Rhodes last summer?', 'Do you visited Rhodes last summer?', 'You visited Rhodes last summer did?'],
    },
    correct: 1,
    explanation: {
      el: 'Στις ερωτήσεις του Past Simple βάζουμε «Did» μπροστά και το ρήμα ΧΩΡΙΣ -ed: Did you visit…? Το -ed το «παίρνει» το did.',
      en: 'In Past Simple questions we put “Did” first and the verb WITHOUT -ed: Did you visit…? The “did” carries the past.',
    },
  },

  // ── 17–18: telling a story ─────────────────────────────────────────────────
  {
    q: { el: 'Με ποια φράση αρχίζουν συνήθως τα παραμύθια στα αγγλικά;', en: 'Which phrase usually begins a fairy tale in English?' },
    options: { el: ['Once upon a time…', 'The end.', 'Happily ever after.', 'Dear diary…'], en: ['Once upon a time…', 'The end.', 'Happily ever after.', 'Dear diary…'] },
    correct: 0,
    explanation: {
      el: '«Once upon a time» = «Μια φορά κι έναν καιρό». Τα παραμύθια συχνά τελειώνουν με «…and they lived happily ever after».',
      en: '“Once upon a time” is how fairy tales begin. They often end with “…and they lived happily ever after”.',
    },
  },
  {
    q: { el: 'Βάλε τις λέξεις στη σωστή σειρά για να πεις μια ιστορία: «___ the knight found the key. ___ he opened the door. ___ he saw the dragon!»', en: 'Put the words in the right order to tell a story: “___ the knight found the key. ___ he opened the door. ___ he saw the dragon!”' },
    options: {
      el: ['Finally – First – Then', 'First – Then – Finally', 'Then – Finally – First', 'First – Finally – Then'],
      en: ['Finally – First – Then', 'First – Then – Finally', 'Then – Finally – First', 'First – Finally – Then'],
    },
    correct: 1,
    explanation: {
      el: 'Οι λέξεις «First, Then, Finally» (πρώτα, μετά, τέλος) δείχνουν τη σειρά των γεγονότων σε μια ιστορία.',
      en: '“First, Then, Finally” show the order of events in a story: what happened first, next and last.',
    },
  },
];
