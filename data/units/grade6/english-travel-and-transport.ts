/**
 * ΣΤ' Δημοτικού · Αγγλικά · Ταξίδια & Μεταφορές / Travel & Transport
 * =======================================================================
 * Original questions for a child of 11–12 learning English as a foreign language.
 * What the unit covers, in order:
 *   1–5   means of transport: vocabulary, «by» + transport, station / airport words
 *   6–9   travel diaries: past simple of regular and irregular verbs, negatives, questions
 *   10–12 past simple vs present simple: «every day» vs «yesterday»
 *   13–15 «used to» for things we did in the past but not now
 *   16–18 time expressions: «ago», «last», «in» + year, and a diary entry to read
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ENGLISH_TRAVEL_AND_TRANSPORT: QuizQuestion[] = [
  // ── 1–5: means of transport ───────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «λεωφορείο» στα αγγλικά;', en: 'How do you say «λεωφορείο» in English?' },
    options: { el: ['bus', 'train', 'boat', 'bike'], en: ['bus', 'train', 'boat', 'bike'] },
    correct: 0,
    explanation: {
      el: 'Λεωφορείο = bus. Το train είναι το τρένο, το boat η βάρκα και το bike το ποδήλατο.',
      en: 'Λεωφορείο = bus. A train is τρένο, a boat is βάρκα and a bike is ποδήλατο.',
    },
  },
  {
    q: { el: 'Ποιο μέσο μεταφοράς πετάει;', en: 'Which means of transport flies?' },
    options: { el: ['ship', 'tram', 'plane', 'lorry'], en: ['ship', 'tram', 'plane', 'lorry'] },
    correct: 2,
    explanation: {
      el: 'Το plane (αεροπλάνο) πετάει. Το ship ταξιδεύει στη θάλασσα, το tram και το lorry στον δρόμο.',
      en: 'A plane flies. A ship travels on the sea, a tram and a lorry travel on the road.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο Νίκος πηγαίνει σχολείο με τα πόδια.» → Nikos goes to school ___.', en: 'Complete: Nikos goes to school ___.' },
    options: { el: ['by foot', 'on foot', 'with foot', 'by walk'], en: ['by foot', 'on foot', 'with foot', 'by walk'] },
    correct: 1,
    explanation: {
      el: 'Με τα πόδια = on foot. Για όλα τα άλλα μέσα λέμε by: by bus, by car, by train.',
      en: 'We say on foot. For every other means of transport we say by: by bus, by car, by train.',
    },
  },
  {
    q: { el: 'Πού περιμένουμε το τρένο;', en: 'Where do we wait for the train?' },
    options: { el: ['at the airport', 'at the bus stop', 'at the port', 'at the platform'], en: ['at the airport', 'at the bus stop', 'at the port', 'at the platform'] },
    correct: 3,
    explanation: {
      el: 'Το τρένο το περιμένουμε στην αποβάθρα (platform) του σταθμού. Στο airport περιμένουμε αεροπλάνο, στο port πλοίο.',
      en: 'We wait for the train at the platform in the station. Planes leave from the airport, ships from the port.',
    },
  },
  {
    q: { el: 'Τι χρειάζεσαι για να μπεις στο λεωφορείο;', en: 'What do you need to get on the bus?' },
    options: { el: ['a passport', 'a ticket', 'a suitcase', 'a map'], en: ['a passport', 'a ticket', 'a suitcase', 'a map'] },
    correct: 1,
    explanation: {
      el: 'Για το λεωφορείο χρειάζεσαι εισιτήριο (ticket). Το passport (διαβατήριο) το χρειάζεσαι για ταξίδι σε άλλη χώρα.',
      en: 'You need a ticket for the bus. You need a passport to travel to another country.',
    },
  },

  // ── 6–9: travel diaries, past simple ──────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε το ημερολόγιο: «Yesterday we ___ to the beach by car.»', en: 'Complete the diary: «Yesterday we ___ to the beach by car.»' },
    options: { el: ['travel', 'travels', 'travelled', 'travelling'], en: ['travel', 'travels', 'travelled', 'travelling'] },
    correct: 2,
    explanation: {
      el: 'Το yesterday δείχνει παρελθόν, άρα past simple: travel → travelled (βάζουμε -ed).',
      en: 'Yesterday means the past, so we use the past simple: travel → travelled (we add -ed).',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος (past simple) του «go»;', en: 'What is the past simple of «go»?' },
    options: { el: ['goed', 'gone', 'went', 'going'], en: ['goed', 'gone', 'went', 'going'] },
    correct: 2,
    explanation: {
      el: 'Το go είναι ανώμαλο ρήμα: go → went. «Last summer I went to Crete.»',
      en: 'Go is an irregular verb: go → went. «Last summer I went to Crete.»',
    },
  },
  {
    q: { el: 'Διάλεξε τη σωστή πρόταση.', en: 'Choose the correct sentence.' },
    options: { el: ['Maria didn\'t take the train.', 'Maria didn\'t took the train.', 'Maria not took the train.', 'Maria didn\'t takes the train.'], en: ['Maria didn\'t take the train.', 'Maria didn\'t took the train.', 'Maria not took the train.', 'Maria didn\'t takes the train.'] },
    correct: 0,
    explanation: {
      el: 'Στην άρνηση του past simple βάζουμε didn\'t και το ρήμα μένει στη βασική του μορφή: didn\'t take.',
      en: 'In the past simple negative we use didn\'t and the verb stays in its base form: didn\'t take.',
    },
  },
  {
    q: { el: 'Πώς ρωτάμε «Πήρες αεροπλάνο;» στα αγγλικά;', en: 'How do you ask «Πήρες αεροπλάνο;» in English?' },
    options: { el: ['Did you took a plane?', 'Did you take a plane?', 'Do you took a plane?', 'Took you a plane?'], en: ['Did you took a plane?', 'Did you take a plane?', 'Do you took a plane?', 'Took you a plane?'] },
    correct: 1,
    explanation: {
      el: 'Ερώτηση στο past simple: Did + υποκείμενο + βασικό ρήμα. Το did δείχνει ήδη το παρελθόν, γι\' αυτό λέμε take, όχι took.',
      en: 'Past simple question: Did + subject + base verb. Did already shows the past, so we say take, not took.',
    },
  },

  // ── 10–12: past simple vs present simple ──────────────────────────────────
  {
    q: { el: 'Διάλεξε το σωστό: «Every day Eleni ___ the bus to school, but yesterday she ___ her bike.»', en: 'Choose the right pair: «Every day Eleni ___ the bus to school, but yesterday she ___ her bike.»' },
    options: { el: ['takes / rode', 'took / rides', 'takes / rides', 'take / rode'], en: ['takes / rode', 'took / rides', 'takes / rides', 'take / rode'] },
    correct: 0,
    explanation: {
      el: 'Every day = συνήθεια → present simple (takes). Yesterday = παρελθόν → past simple (rode).',
      en: 'Every day = a habit → present simple (takes). Yesterday = the past → past simple (rode).',
    },
  },
  {
    q: { el: 'Ποια πρόταση μιλάει για το παρελθόν;', en: 'Which sentence is about the past?' },
    options: { el: ['The ferry leaves at nine.', 'The ferry left at nine.', 'The ferry always leaves at nine.', 'The ferry is leaving now.'], en: ['The ferry leaves at nine.', 'The ferry left at nine.', 'The ferry always leaves at nine.', 'The ferry is leaving now.'] },
    correct: 1,
    explanation: {
      el: 'Το left είναι ο αόριστος του leave. Οι άλλες προτάσεις μιλούν για το τώρα ή για κάτι που γίνεται πάντα.',
      en: 'Left is the past simple of leave. The other sentences talk about now or about something that always happens.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «My dad ___ a taxi driver. He ___ in the city centre.» (τώρα)', en: 'Complete (now): «My dad ___ a taxi driver. He ___ in the city centre.»' },
    options: { el: ['was / worked', 'is / work', 'is / works', 'was / works'], en: ['was / worked', 'is / work', 'is / works', 'was / works'] },
    correct: 2,
    explanation: {
      el: 'Μιλάμε για τώρα, άρα present simple. Με το he το ρήμα παίρνει -s: he works.',
      en: 'We are talking about now, so present simple. With he the verb takes -s: he works.',
    },
  },

  // ── 13–15: used to ────────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «Giorgos used to cycle to school»;', en: 'What does «Giorgos used to cycle to school» mean?' },
    options: { el: ['Πήγαινε με ποδήλατο παλιά, τώρα όχι.', 'Πηγαίνει με ποδήλατο κάθε μέρα.', 'Θα πάει με ποδήλατο αύριο.', 'Χρησιμοποιεί ποδήλατο στο σχολείο.'], en: ['He cycled in the past, but not now.', 'He cycles every day.', 'He will cycle tomorrow.', 'He uses a bike at school.'] },
    correct: 0,
    explanation: {
      el: 'Used to + ρήμα = κάτι που κάναμε παλιά και δεν το κάνουμε πια.',
      en: 'Used to + verb = something we did in the past but do not do any more.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «We ___ go to the island by ship, but now we fly.»', en: 'Complete: «We ___ go to the island by ship, but now we fly.»' },
    options: { el: ['use to', 'used to', 'are used to', 'using to'], en: ['use to', 'used to', 'are used to', 'using to'] },
    correct: 1,
    explanation: {
      el: 'Η σωστή μορφή είναι used to + βασικό ρήμα: used to go. Το «use to» σκέτο είναι λάθος.',
      en: 'The correct form is used to + base verb: used to go. «Use to» on its own is wrong.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή άρνηση;', en: 'Which negative is correct?' },
    options: { el: ['I didn\'t use to like trains.', 'I didn\'t used to like trains.', 'I not used to like trains.', 'I don\'t used to like trains.'], en: ['I didn\'t use to like trains.', 'I didn\'t used to like trains.', 'I not used to like trains.', 'I don\'t used to like trains.'] },
    correct: 0,
    explanation: {
      el: 'Στην άρνηση χάνουμε το -d: didn\'t use to. Όπως σε όλα τα ρήματα μετά το didn\'t.',
      en: 'In the negative we drop the -d: didn\'t use to. Just like every verb after didn\'t.',
    },
  },

  // ── 16–18: time expressions ───────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Η Ελένη ταξίδεψε στο Λονδίνο πριν από δύο χρόνια.» → Eleni travelled to London two years ___.', en: 'Complete: Eleni travelled to London two years ___.' },
    options: { el: ['before', 'last', 'ago', 'since'], en: ['before', 'last', 'ago', 'since'] },
    correct: 2,
    explanation: {
      el: 'Πριν από Χ χρόνια = X years ago. Το ago μπαίνει πάντα ΜΕΤΑ τον χρόνο: two years ago.',
      en: 'Πριν από Χ χρόνια = X years ago. Ago always comes AFTER the time: two years ago.',
    },
  },
  {
    q: { el: 'Διάλεξε το σωστό: «We visited my grandmother ___.»', en: 'Choose the correct option: «We visited my grandmother ___.»' },
    options: { el: ['last weekend', 'the last weekend', 'in last weekend', 'ago weekend'], en: ['last weekend', 'the last weekend', 'in last weekend', 'ago weekend'] },
    correct: 0,
    explanation: {
      el: 'Με το last δεν βάζουμε the ούτε in: last weekend, last year, last summer.',
      en: 'With last we do not use the or in: last weekend, last year, last summer.',
    },
  },
  {
    q: { el: 'Διάβασε: «Sunday, 10 August. We left Athens at seven in the morning. We took the ferry to Paros and arrived four hours later.» Τι ώρα έφτασαν στην Πάρο;', en: 'Read: «Sunday, 10 August. We left Athens at seven in the morning. We took the ferry to Paros and arrived four hours later.» What time did they arrive in Paros?' },
    options: { el: ['At seven.', 'At four.', 'At eleven.', 'At three.'], en: ['At seven.', 'At four.', 'At eleven.', 'At three.'] },
    correct: 2,
    explanation: {
      el: 'Έφυγαν στις 7 και έφτασαν «four hours later» (τέσσερις ώρες αργότερα): 7 + 4 = 11.',
      en: 'They left at 7 and arrived four hours later: 7 + 4 = 11.',
    },
  },
];
