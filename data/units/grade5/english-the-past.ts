/**
 * Ε' Δημοτικού · Αγγλικά · «Το Παρελθόν» / "The Past"
 * ======================================================
 * Original questions for a Greek child of 10–11 learning English. Curriculum topics only —
 * no sentences from school textbooks (ebooks.edu.gr).
 *
 * What the unit covers, in order:
 *   1–4   famous people of the past: vocabulary (famous, inventor, explorer, was born)
 *   5–8   past simple of "be": was / were, wasn't / weren't
 *   9–12  regular verbs: the -ed ending (played, visited, lived, stopped)
 *   13–15 irregular verbs: went, had, saw, wrote, made
 *   16–18 questions with "did": "When did…?", "Did you…?", short answers
 *
 * Distractors are the real mistakes Greek children make: "was" for plural, "goed"/"writed",
 * "did … went" (double past), and the -ed ending on the wrong word.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_THE_PAST: QuizQuestion[] = [
  // ── 1–4: famous people of the past — vocabulary ─────────────────────────────
  {
    q: { el: 'Πώς λέμε «διάσημος» στα αγγλικά;', en: 'How do you say «διάσημος» in English?' },
    options: { el: ['famous', 'family', 'funny', 'fast'], en: ['famous', 'family', 'funny', 'fast'] },
    correct: 0,
    explanation: {
      el: '«Famous» σημαίνει διάσημος. Ένας famous person είναι κάποιος που τον ξέρουν πολλοί άνθρωποι.',
      en: '"Famous" means well known. A famous person is someone many people know about.',
    },
  },
  {
    q: { el: 'Κάποιος που φτιάχνει νέα πράγματα και μηχανές λέγεται…', en: 'A person who creates new things and machines is called…' },
    options: { el: ['an explorer', 'a painter', 'an inventor', 'a singer'], en: ['an explorer', 'a painter', 'an inventor', 'a singer'] },
    correct: 2,
    explanation: {
      el: '«Inventor» είναι ο εφευρέτης — αυτός που εφευρίσκει (invents) νέα πράγματα.',
      en: 'An "inventor" is someone who invents, or creates, new things.',
    },
  },
  {
    q: { el: 'Ένας «explorer» είναι κάποιος που…', en: 'An "explorer" is someone who…' },
    options: { el: ['ζωγραφίζει εικόνες', 'ταξιδεύει σε άγνωστα μέρη', 'γράφει βιβλία', 'παίζει μουσική'], en: ['paints pictures', 'travels to unknown places', 'writes books', 'plays music'] },
    correct: 1,
    explanation: {
      el: '«Explorer» είναι ο εξερευνητής. Εξερευνά (explores) μέρη που δεν ξέρει κανείς.',
      en: 'An "explorer" travels to discover places nobody knows yet.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Marie Curie ___ born in 1867.»', en: 'Complete: "Marie Curie ___ born in 1867."' },
    options: { el: ['is', 'was', 'were', 'did'], en: ['is', 'was', 'were', 'did'] },
    correct: 1,
    explanation: {
      el: 'Για να πούμε πότε γεννήθηκε κάποιος λέμε «was born». Το 1867 είναι παρελθόν, γι\' αυτό «was».',
      en: 'To say when someone came into the world we use "was born". 1867 is in the past, so we say "was".',
    },
  },

  // ── 5–8: past simple of "be" — was / were ────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το σωστό; «Yesterday I ___ at school.»', en: 'Which is correct? "Yesterday I ___ at school."' },
    options: { el: ['am', 'were', 'was', 'be'], en: ['am', 'were', 'was', 'be'] },
    correct: 2,
    explanation: {
      el: 'Με το I, he, she, it λέμε «was». «Yesterday» δείχνει ότι μιλάμε για χθες, για το παρελθόν.',
      en: 'With I, he, she and it we say "was". "Yesterday" shows we are talking about the past.',
    },
  },
  {
    q: { el: 'Ποιο είναι το σωστό; «They ___ very happy at the party.»', en: 'Which is correct? "They ___ very happy at the party."' },
    options: { el: ['was', 'were', 'are', 'did'], en: ['was', 'were', 'are', 'did'] },
    correct: 1,
    explanation: {
      el: 'Με το you, we, they λέμε «were». Με το I, he, she, it λέμε «was».',
      en: 'With you, we and they we say "were". With I, he, she and it we say "was".',
    },
  },
  {
    q: { el: 'Πώς λέμε «Δεν ήταν στο σπίτι» (για τον Νίκο);', en: 'How do you say «Δεν ήταν στο σπίτι» (about Nikos)?' },
    options: { el: ['He wasn\'t at home.', 'He weren\'t at home.', 'He didn\'t at home.', 'He not was at home.'], en: ['He wasn\'t at home.', 'He weren\'t at home.', 'He didn\'t at home.', 'He not was at home.'] },
    correct: 0,
    explanation: {
      el: 'Η άρνηση του «was» είναι «wasn\'t» (was not). Για τον Νίκο, που είναι «he», λέμε «He wasn\'t».',
      en: 'The negative of "was" is "wasn\'t" (was not). Nikos is "he", so we say "He wasn\'t".',
    },
  },
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: { el: ['Was you at the beach?', 'Were you at the beach?', 'Did you were at the beach?', 'You were at the beach?'], en: ['Was you at the beach?', 'Were you at the beach?', 'Did you were at the beach?', 'You were at the beach?'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση βάζουμε το «were» μπροστά: «Were you…?». Με το «was/were» δεν χρειάζεται «did».',
      en: 'In a question, "were" goes first: "Were you…?". With "was/were" we never need "did".',
    },
  },

  // ── 9–12: regular verbs — the -ed ending ────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο αόριστος (past simple) του «play»;', en: 'What is the past simple of "play"?' },
    options: { el: ['plays', 'playd', 'played', 'playing'], en: ['plays', 'playd', 'played', 'playing'] },
    correct: 2,
    explanation: {
      el: 'Τα ομαλά ρήματα παίρνουν -ed στον αόριστο: play → played.',
      en: 'Regular verbs take -ed in the past simple: play → played.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Last summer Eleni ___ her grandmother in Crete.»', en: 'Complete: "Last summer Eleni ___ her grandmother in Crete."' },
    options: { el: ['visits', 'visited', 'visit', 'visiting'], en: ['visits', 'visited', 'visit', 'visiting'] },
    correct: 1,
    explanation: {
      el: '«Last summer» = πέρσι το καλοκαίρι, δηλαδή παρελθόν. Το «visit» γίνεται «visited».',
      en: '"Last summer" is in the past, so "visit" becomes "visited".',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «live»;', en: 'What is the past simple of "live"?' },
    options: { el: ['liveed', 'lived', 'livd', 'lives'], en: ['liveed', 'lived', 'livd', 'lives'] },
    correct: 1,
    explanation: {
      el: 'Όταν το ρήμα τελειώνει ήδη σε -e, βάζουμε μόνο -d: live → lived, dance → danced.',
      en: 'When the verb already ends in -e, we only add -d: live → lived, dance → danced.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «stop»;', en: 'What is the past simple of "stop"?' },
    options: { el: ['stoped', 'stopt', 'stopped', 'stops'], en: ['stoped', 'stopt', 'stopped', 'stops'] },
    correct: 2,
    explanation: {
      el: 'Σε μικρά ρήματα όπως stop, plan, drop, διπλασιάζουμε το τελευταίο γράμμα: stop → stopped.',
      en: 'In short verbs like stop, plan and drop, we double the last letter: stop → stopped.',
    },
  },

  // ── 13–15: irregular verbs ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο αόριστος του «go»;', en: 'What is the past simple of "go"?' },
    options: { el: ['goed', 'went', 'gone', 'goes'], en: ['goed', 'went', 'gone', 'goes'] },
    correct: 1,
    explanation: {
      el: 'Το «go» είναι ανώμαλο ρήμα: δεν παίρνει -ed. Ο αόριστος είναι «went».',
      en: '"Go" is an irregular verb: it does not take -ed. The past simple is "went".',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Giorgos ___ a sandwich and ___ a funny film.»', en: 'Complete: "Giorgos ___ a sandwich and ___ a funny film."' },
    options: { el: ['haved / seed', 'had / saw', 'has / sees', 'had / seen'], en: ['haved / seed', 'had / saw', 'has / sees', 'had / seen'] },
    correct: 1,
    explanation: {
      el: 'Το «have» γίνεται «had» και το «see» γίνεται «saw». Και τα δύο είναι ανώμαλα — τα μαθαίνουμε απ\' έξω.',
      en: '"Have" becomes "had" and "see" becomes "saw". Both are irregular — we learn them by heart.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Maria writed a letter and maked a cake.', 'Maria wrote a letter and made a cake.', 'Maria write a letter and make a cake.', 'Maria wroted a letter and maded a cake.'], en: ['Maria writed a letter and maked a cake.', 'Maria wrote a letter and made a cake.', 'Maria write a letter and make a cake.', 'Maria wroted a letter and maded a cake.'] },
    correct: 1,
    explanation: {
      el: 'write → wrote, make → made. Τα ανώμαλα ρήματα αλλάζουν μορφή, δεν παίρνουν -ed.',
      en: 'write → wrote, make → made. Irregular verbs change their form, they do not take -ed.',
    },
  },

  // ── 16–18: questions with "did" — When did…? ────────────────────────────────
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: { el: ['When did you go to London?', 'When did you went to London?', 'When you went to London?', 'When went you to London?'], en: ['When did you go to London?', 'When did you went to London?', 'When you went to London?', 'When went you to London?'] },
    correct: 0,
    explanation: {
      el: 'Στις ερωτήσεις του αορίστου βάζουμε «did» και το ρήμα μένει όπως είναι: «When did you go…?», όχι «did you went».',
      en: 'In past simple questions we use "did" and the verb stays in its base form: "When did you go…?", not "did you went".',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή σύντομη απάντηση; «Did Nikos play football yesterday?» — «Yes, ___.»', en: 'Which short answer is correct? "Did Nikos play football yesterday?" — "Yes, ___."' },
    options: { el: ['he played', 'he was', 'he did', 'he does'], en: ['he played', 'he was', 'he did', 'he does'] },
    correct: 2,
    explanation: {
      el: 'Όταν η ερώτηση αρχίζει με «Did», η σύντομη απάντηση είναι «Yes, he did» ή «No, he didn\'t».',
      en: 'When the question starts with "Did", the short answer is "Yes, he did" or "No, he didn\'t".',
    },
  },
  {
    q: { el: 'Ποια ερώτηση ταιριάζει στην απάντηση «He discovered it in 1928.»;', en: 'Which question matches the answer "He discovered it in 1928."?' },
    options: { el: ['Where did he discover it?', 'When did he discover it?', 'When did he discovered it?', 'Why did he discover it?'], en: ['Where did he discover it?', 'When did he discover it?', 'When did he discovered it?', 'Why did he discover it?'] },
    correct: 1,
    explanation: {
      el: 'Η απάντηση είναι μια χρονιά, άρα ρωτάμε «When» (πότε). Μετά το «did» το ρήμα μένει «discover», όχι «discovered».',
      en: 'The answer is a year, so we ask "When". After "did" the verb stays "discover", not "discovered".',
    },
  },
];
