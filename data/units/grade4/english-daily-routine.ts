/**
 * Δ' Δημοτικού · Αγγλικά · «Η Μέρα μου» / "My Daily Routine"
 * ===========================================================
 * Original questions for a Greek child of 9–10 learning English. Nothing copied
 * from textbooks — only the curriculum topics. In the order the class meets them:
 *   1–5   vocabulary of the day: wake up, brush teeth, have breakfast, go to school, go to bed
 *   6–12  present simple with he/she/it: the -s / -es ending, "doesn't", "does he…?"
 *   13–18 adverbs of frequency (always, usually, sometimes, never) and where they go
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_DAILY_ROUTINE: QuizQuestion[] = [
  // ── 1–5: vocabulary of the daily routine ────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ξυπνάω» στα αγγλικά;', en: 'How do you say «ξυπνάω» in English?' },
    options: { el: ['wake up', 'go to bed', 'sit down', 'wash up'], en: ['wake up', 'go to bed', 'sit down', 'wash up'] },
    correct: 0,
    explanation: {
      el: '«Ξυπνάω» είναι wake up. Το πρωί λέμε: I wake up at seven.',
      en: '«Ξυπνάω» is wake up. In the morning we say: I wake up at seven.',
    },
  },
  {
    q: { el: 'Τι κάνεις με την οδοντόβουρτσα; I ___ my teeth.', en: 'What do you do with a toothbrush? I ___ my teeth.' },
    options: { el: ['wash', 'brush', 'comb', 'eat'], en: ['wash', 'brush', 'comb', 'eat'] },
    correct: 1,
    explanation: {
      el: 'Τα δόντια τα βουρτσίζουμε: I brush my teeth. Το comb είναι για τα μαλλιά (χτενίζω).',
      en: 'We brush our teeth: I brush my teeth. Comb is for your hair.',
    },
  },
  {
    q: { el: 'Ποιο γεύμα τρώμε το πρωί;', en: 'Which meal do we eat in the morning?' },
    options: { el: ['dinner', 'lunch', 'breakfast', 'snack'], en: ['dinner', 'lunch', 'breakfast', 'snack'] },
    correct: 2,
    explanation: {
      el: 'Το πρωινό είναι breakfast. Το μεσημέρι lunch, το βράδυ dinner.',
      en: 'The morning meal is breakfast. Lunch is at midday and dinner in the evening.',
    },
  },
  {
    q: { el: 'Πώς λέμε «πάω σχολείο» στα αγγλικά;', en: 'How do you say «πάω σχολείο» in English?' },
    options: { el: ['go to school', 'go to bed', 'go home', 'get up'], en: ['go to school', 'go to bed', 'go home', 'get up'] },
    correct: 0,
    explanation: {
      el: '«Πάω σχολείο» είναι go to school. Go home = πάω σπίτι, go to bed = πάω για ύπνο.',
      en: '«Πάω σχολείο» is go to school. Go home and go to bed are different places!',
    },
  },
  {
    q: { el: 'Τι κάνουμε το βράδυ, τελευταίο από όλα;', en: 'What do we do at night, last of all?' },
    options: { el: ['have breakfast', 'wake up', 'go to school', 'go to bed'], en: ['have breakfast', 'wake up', 'go to school', 'go to bed'] },
    correct: 3,
    explanation: {
      el: 'Στο τέλος της μέρας πάμε για ύπνο: go to bed. Λέμε και «Good night!».',
      en: 'At the end of the day we go to bed. We also say «Good night!».',
    },
  },

  // ── 6–12: present simple with he / she ──────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: Every day I ___ at seven.', en: 'Complete: Every day I ___ at seven.' },
    options: { el: ['wakes up', 'wake up', 'waking up', 'wake ups'], en: ['wakes up', 'wake up', 'waking up', 'wake ups'] },
    correct: 1,
    explanation: {
      el: 'Με το I το ρήμα μένει όπως είναι: I wake up. Το -s το βάζουμε μόνο με he, she, it.',
      en: 'With I the verb stays the same: I wake up. We add -s only with he, she and it.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Maria ___ her teeth every morning.', en: 'Complete: Maria ___ her teeth every morning.' },
    options: { el: ['brush', 'brushs', 'brushes', 'brushing'], en: ['brush', 'brushs', 'brushes', 'brushing'] },
    correct: 2,
    explanation: {
      el: 'Η Maria είναι she, άρα βάζουμε κατάληξη. Μετά από -sh βάζουμε -es: brushes.',
      en: 'Maria is «she», so the verb gets an ending. After -sh we add -es: brushes.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: My brother ___ to school by bus.', en: 'Complete: My brother ___ to school by bus.' },
    options: { el: ['go', 'gos', 'going', 'goes'], en: ['go', 'gos', 'going', 'goes'] },
    correct: 3,
    explanation: {
      el: 'My brother = he. Το go με το he γίνεται goes (με -es, όχι -s).',
      en: 'My brother = he. With he, go becomes goes (with -es, not -s).',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['She has lunch at two.', 'She have lunch at two.', 'She haves lunch at two.', 'She having lunch at two.'], en: ['She has lunch at two.', 'She have lunch at two.', 'She haves lunch at two.', 'She having lunch at two.'] },
    correct: 0,
    explanation: {
      el: 'Το have με το he/she γίνεται has — όχι haves! She has lunch.',
      en: 'With he/she, have becomes has — not haves! She has lunch.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Nikos ___ TV in the evening.', en: 'Complete: Nikos ___ TV in the evening.' },
    options: { el: ['watch', 'watchs', 'watches', 'watchies'], en: ['watch', 'watchs', 'watches', 'watchies'] },
    correct: 2,
    explanation: {
      el: 'Μετά από -ch βάζουμε -es: watches. Το ίδιο και στο teaches, catches.',
      en: 'After -ch we add -es: watches. Same with teaches and catches.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Eleni ___ like milk.', en: 'Complete: Eleni ___ like milk.' },
    options: { el: ['don\'t', 'doesn\'t', 'isn\'t', 'not'], en: ['don\'t', 'doesn\'t', 'isn\'t', 'not'] },
    correct: 1,
    explanation: {
      el: 'Για το he/she η άρνηση είναι doesn\'t: Eleni doesn\'t like milk. Το -s πάει στο does, όχι στο like.',
      en: 'For he/she the negative is doesn\'t: Eleni doesn\'t like milk. The -s goes on does, not on like.',
    },
  },
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: { el: ['Does he gets up early?', 'Do he get up early?', 'Does he get up early?', 'He does get up early?'], en: ['Does he gets up early?', 'Do he get up early?', 'Does he get up early?', 'He does get up early?'] },
    correct: 2,
    explanation: {
      el: 'Στην ερώτηση για το he/she βάζουμε Does μπροστά και το ρήμα χωρίς -s: Does he get up early?',
      en: 'In questions about he/she we put Does first and the verb without -s: Does he get up early?',
    },
  },

  // ── 13–18: adverbs of frequency ────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «πάντα» στα αγγλικά;', en: 'How do you say «πάντα» in English?' },
    options: { el: ['never', 'sometimes', 'always', 'usually'], en: ['never', 'sometimes', 'always', 'usually'] },
    correct: 2,
    explanation: {
      el: '«Πάντα» = always, «ποτέ» = never, «μερικές φορές» = sometimes, «συνήθως» = usually.',
      en: '«Πάντα» = always, «ποτέ» = never, «μερικές φορές» = sometimes, «συνήθως» = usually.',
    },
  },
  {
    q: { el: 'Ο Γιώργος δεν τρώει ποτέ σοκολάτα το πρωί. Giorgos ___ eats chocolate in the morning.', en: 'Giorgos does not eat chocolate in the morning, not even once. Giorgos ___ eats chocolate in the morning.' },
    options: { el: ['always', 'sometimes', 'usually', 'never'], en: ['always', 'sometimes', 'usually', 'never'] },
    correct: 3,
    explanation: {
      el: '«Ποτέ» = never. Προσοχή: με το never δεν βάζουμε doesn\'t — το never είναι ήδη αρνητικό.',
      en: '«Ποτέ» = never. Careful: with never we do not add doesn\'t — never is already negative.',
    },
  },
  {
    q: { el: 'Η Ελένη παίζει κιθάρα κάποιες μέρες, όχι όλες. Eleni ___ plays the guitar.', en: 'Eleni plays the guitar on some days, not all of them. Eleni ___ plays the guitar.' },
    options: { el: ['sometimes', 'always', 'never', 'every day'], en: ['sometimes', 'always', 'never', 'every day'] },
    correct: 0,
    explanation: {
      el: 'Κάποιες φορές ναι, κάποιες όχι = sometimes. Το always θα σήμαινε κάθε μέρα χωρίς εξαίρεση.',
      en: 'Some days yes, some days no = sometimes. Always would mean every single day.',
    },
  },
  {
    q: { el: 'Πού μπαίνει το always; Βάλε τις λέξεις στη σειρά: Nikos / always / his teeth / brushes', en: 'Where does always go? Put the words in order: Nikos / always / his teeth / brushes' },
    options: { el: ['Nikos brushes always his teeth.', 'Always Nikos brushes his teeth.', 'Nikos always brushes his teeth.', 'Nikos brushes his teeth always.'], en: ['Nikos brushes always his teeth.', 'Always Nikos brushes his teeth.', 'Nikos always brushes his teeth.', 'Nikos brushes his teeth always.'] },
    correct: 2,
    explanation: {
      el: 'Τα always, sometimes, never μπαίνουν ΠΡΙΝ από το ρήμα: Nikos always brushes his teeth.',
      en: 'Always, sometimes and never go BEFORE the verb: Nikos always brushes his teeth.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['She is always late.', 'She always is late.', 'Always she is late.', 'She is late always.'], en: ['She is always late.', 'She always is late.', 'Always she is late.', 'She is late always.'] },
    correct: 0,
    explanation: {
      el: 'Με το ρήμα be (am, is, are) γίνεται το αντίθετο: το always μπαίνει ΜΕΤΑ: She is always late.',
      en: 'With the verb be (am, is, are) it is the other way round: always goes AFTER it: She is always late.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή από την αρχή ως το τέλος;', en: 'Which sentence is correct from start to finish?' },
    options: { el: ['My mum usually drive me to school.', 'My mum usually drives me to school.', 'My mum drives usually me to school.', 'My mum usually does drive me to school.'], en: ['My mum usually drive me to school.', 'My mum usually drives me to school.', 'My mum drives usually me to school.', 'My mum usually does drive me to school.'] },
    correct: 1,
    explanation: {
      el: 'Δύο κανόνες μαζί: my mum = she, άρα drives με -s, και το usually πριν από το ρήμα.',
      en: 'Two rules together: my mum = she, so drives with -s, and usually goes before the verb.',
    },
  },
];
