/**
 * ΣΤ' Δημοτικού · Αγγλικά · Εφευρέσεις — "Inventions"
 * ==================================================
 * Original questions (curriculum topics only, no textbook text). Level: a child of 11–12
 * who is learning English as a foreign language.
 *
 * What the unit covers, in order:
 *   1–4   vocabulary: museum, invention / inventor / invent, famous inventions
 *   5–6   the story of Icarus and Daedalus — the first "flying" dream, told in English
 *   7–10  past simple, regular verbs: -ed, spelling (stop → stopped, study → studied)
 *   11–14 past simple, irregular verbs: make/made, fly/flew, go/went, build/built
 *   15–16 dates: reading years in English (1876 = eighteen seventy-six), "in" + year
 *   17–18 questions with "When did…?" and short answers (didn't)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ENGLISH_INVENTIONS: QuizQuestion[] = [
  // ── 1–4: vocabulary ────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μουσείο» στα αγγλικά;', en: 'How do you say «μουσείο» in English?' },
    options: { el: ['museum', 'library', 'theatre', 'gallery'], en: ['museum', 'library', 'theatre', 'gallery'] },
    correct: 0,
    explanation: {
      el: 'Μουσείο = museum. Η library είναι η βιβλιοθήκη και το theatre το θέατρο.',
      en: 'Μουσείο = museum. A library is for books and a theatre is for plays.',
    },
  },
  {
    q: { el: 'Πώς λέμε «εφεύρεση» στα αγγλικά;', en: 'How do you say «εφεύρεση» in English?' },
    options: { el: ['inventor', 'invent', 'invention', 'inventing'], en: ['inventor', 'invent', 'invention', 'inventing'] },
    correct: 2,
    explanation: {
      el: 'Εφεύρεση = invention (το πράγμα). Ο inventor είναι ο εφευρέτης και το invent το ρήμα «εφευρίσκω».',
      en: 'Εφεύρεση = invention (the thing). An inventor is the person and "to invent" is the verb.',
    },
  },
  {
    q: { el: 'Thomas Edison was a famous … He made the light bulb better.', en: 'Thomas Edison was a famous … He made the light bulb better.' },
    options: { el: ['invention', 'inventor', 'museum', 'machine'], en: ['invention', 'inventor', 'museum', 'machine'] },
    correct: 1,
    explanation: {
      el: 'Ο άνθρωπος που εφευρίσκει είναι inventor. Η κατάληξη -or δείχνει πρόσωπο, όπως actor, doctor.',
      en: 'The person who invents is an inventor. The ending -or shows a person, like actor or doctor.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι μια εφεύρεση (invention);', en: 'Which of these is an invention?' },
    options: { el: ['the telephone', 'the mountain', 'the river', 'the sun'], en: ['the telephone', 'the mountain', 'the river', 'the sun'] },
    correct: 0,
    explanation: {
      el: 'Εφεύρεση είναι κάτι που έφτιαξε ο άνθρωπος, όπως το τηλέφωνο. Τα βουνά, τα ποτάμια και ο ήλιος υπάρχουν από μόνα τους.',
      en: 'An invention is something people made, like the telephone. Mountains, rivers and the sun exist on their own.',
    },
  },

  // ── 5–6: Icarus ────────────────────────────────────────────────────────────
  {
    q: { el: 'Στον μύθο, ο Δαίδαλος έφτιαξε φτερά για τον Ίκαρο. What did Daedalus make?', en: 'In the myth, Daedalus made something for Icarus. What did he make?' },
    options: { el: ['wings', 'wheels', 'boats', 'shoes'], en: ['wings', 'wheels', 'boats', 'shoes'] },
    correct: 0,
    explanation: {
      el: 'Ο Δαίδαλος έφτιαξε φτερά = wings, από φτερά πουλιών και κερί (wax), για να πετάξουν.',
      en: 'Daedalus made wings from feathers and wax so that they could fly.',
    },
  },
  {
    q: { el: 'Icarus flew too close to the … and the wax melted.', en: 'Icarus flew too close to the … and the wax melted.' },
    options: { el: ['sea', 'moon', 'sun', 'island'], en: ['sea', 'moon', 'sun', 'island'] },
    correct: 2,
    explanation: {
      el: 'Ο Ίκαρος πέταξε πολύ κοντά στον ήλιο (sun), το κερί έλιωσε και έπεσε στη θάλασσα. Γι\' αυτό λέμε «Ικάριο πέλαγος».',
      en: 'Icarus flew too close to the sun, the wax melted and he fell into the sea. That is why it is called the Icarian Sea.',
    },
  },

  // ── 7–10: past simple, regular verbs ──────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: Yesterday we … the science museum.', en: 'Complete: Yesterday we … the science museum.' },
    options: { el: ['visit', 'visited', 'visiting', 'visits'], en: ['visit', 'visited', 'visiting', 'visits'] },
    correct: 1,
    explanation: {
      el: 'Το «yesterday» δείχνει παρελθόν, άρα past simple. Τα ομαλά ρήματα παίρνουν -ed: visit → visited.',
      en: '"Yesterday" means the past, so we use the past simple. Regular verbs add -ed: visit → visited.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο σωστός αόριστος (past simple) του ρήματος «stop»;', en: 'What is the correct past simple of "stop"?' },
    options: { el: ['stoped', 'stopt', 'stopped', 'stopping'], en: ['stoped', 'stopt', 'stopped', 'stopping'] },
    correct: 2,
    explanation: {
      el: 'Μικρό ρήμα με ένα φωνήεν και ένα σύμφωνο στο τέλος: διπλασιάζουμε το σύμφωνο. stop → stopped, plan → planned.',
      en: 'A short verb ending in one vowel + one consonant doubles the consonant: stop → stopped, plan → planned.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο σωστός αόριστος του ρήματος «study»;', en: 'What is the correct past simple of "study"?' },
    options: { el: ['studyed', 'studied', 'studed', 'studdied'], en: ['studyed', 'studied', 'studed', 'studdied'] },
    correct: 1,
    explanation: {
      el: 'Σύμφωνο + y στο τέλος: το y γίνεται i και βάζουμε -ed. study → studied, try → tried.',
      en: 'Consonant + y at the end: y becomes i, then add -ed. study → studied, try → tried.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή στον αόριστο;', en: 'Which sentence is correct in the past simple?' },
    options: {
      el: ['Maria didn\'t liked the museum.', 'Maria didn\'t like the museum.', 'Maria not liked the museum.', 'Maria didn\'t likes the museum.'],
      en: ['Maria didn\'t liked the museum.', 'Maria didn\'t like the museum.', 'Maria not liked the museum.', 'Maria didn\'t likes the museum.'],
    },
    correct: 1,
    explanation: {
      el: 'Στην άρνηση το παρελθόν το δείχνει το «didn\'t», άρα το ρήμα μένει σκέτο: didn\'t like (όχι liked).',
      en: 'In the negative, "didn\'t" already shows the past, so the verb stays in its base form: didn\'t like (not liked).',
    },
  },

  // ── 11–14: past simple, irregular verbs ───────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο αόριστος του ρήματος «make»;', en: 'What is the past simple of "make"?' },
    options: { el: ['maked', 'made', 'mook', 'making'], en: ['maked', 'made', 'mook', 'making'] },
    correct: 1,
    explanation: {
      el: 'Το make είναι ανώμαλο ρήμα: make → made. Δεν παίρνει -ed!',
      en: '"Make" is irregular: make → made. It does not take -ed!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Icarus … high into the sky.', en: 'Complete: Icarus … high into the sky.' },
    options: { el: ['flied', 'flew', 'flyed', 'fly'], en: ['flied', 'flew', 'flyed', 'fly'] },
    correct: 1,
    explanation: {
      el: 'Το fly είναι ανώμαλο: fly → flew. Το «flied» είναι το λάθος που κάνουν πολλά παιδιά.',
      en: '"Fly" is irregular: fly → flew. "Flied" is the mistake many children make.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Last summer Nikos … to London and … Big Ben.', en: 'Complete: Last summer Nikos … to London and … Big Ben.' },
    options: { el: ['goed / seed', 'went / saw', 'went / seen', 'go / see'], en: ['goed / seed', 'went / saw', 'went / seen', 'go / see'] },
    correct: 1,
    explanation: {
      el: 'Δύο ανώμαλα ρήματα: go → went, see → saw. Το «seen» είναι άλλος τύπος (μετοχή), όχι αόριστος.',
      en: 'Two irregular verbs: go → went, see → saw. "Seen" is a different form (the participle), not the past simple.',
    },
  },
  {
    q: { el: 'Ποια ομάδα έχει ΜΟΝΟ σωστούς αορίστους;', en: 'Which group has ONLY correct past simple forms?' },
    options: {
      el: ['built, wrote, took', 'builded, wrote, took', 'built, writed, took', 'built, wrote, taked'],
      en: ['built, wrote, took', 'builded, wrote, took', 'built, writed, took', 'built, wrote, taked'],
    },
    correct: 0,
    explanation: {
      el: 'build → built, write → wrote, take → took. Και τα τρία είναι ανώμαλα, γι\' αυτό τα μαθαίνουμε απ\' έξω.',
      en: 'build → built, write → wrote, take → took. All three are irregular, so we learn them by heart.',
    },
  },

  // ── 15–16: dates ───────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς διαβάζουμε τη χρονολογία 1876 στα αγγλικά;', en: 'How do we say the year 1876 in English?' },
    options: {
      el: ['one thousand eight hundred seventy-six', 'eighteen seventy-six', 'eighteen hundred and seven six', 'one eight seven six'],
      en: ['one thousand eight hundred seventy-six', 'eighteen seventy-six', 'eighteen hundred and seven six', 'one eight seven six'],
    },
    correct: 1,
    explanation: {
      el: 'Τις χρονολογίες τις λέμε σε δύο κομμάτια: 18 | 76 → eighteen seventy-six. Το 1876 είναι η χρονιά του τηλεφώνου του Bell.',
      en: 'We say years in two parts: 18 | 76 → eighteen seventy-six. 1876 is the year of Bell\'s telephone.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: The Wright brothers flew their first plane … 1903.', en: 'Complete: The Wright brothers flew their first plane … 1903.' },
    options: { el: ['on', 'at', 'in', 'since'], en: ['on', 'at', 'in', 'since'] },
    correct: 2,
    explanation: {
      el: 'Με χρονολογίες και μήνες βάζουμε «in»: in 1903, in May. Το «on» πάει με ημέρες (on Monday) και το «at» με ώρες (at 5 o\'clock).',
      en: 'With years and months we use "in": in 1903, in May. "On" goes with days (on Monday) and "at" with times (at 5 o\'clock).',
    },
  },

  // ── 17–18: When did…? ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποια ερώτηση είναι σωστή;', en: 'Which question is correct?' },
    options: {
      el: ['When did Edison invent the light bulb?', 'When Edison invented the light bulb?', 'When did Edison invented the light bulb?', 'When does Edison invented the light bulb?'],
      en: ['When did Edison invent the light bulb?', 'When Edison invented the light bulb?', 'When did Edison invented the light bulb?', 'When does Edison invented the light bulb?'],
    },
    correct: 0,
    explanation: {
      el: 'Ερώτηση στον αόριστο: When + did + υποκείμενο + ρήμα σκέτο. Το «did» κουβαλάει το παρελθόν, όχι το ρήμα.',
      en: 'A past simple question is: When + did + subject + base verb. "Did" carries the past, not the verb.',
    },
  },
  {
    q: { el: 'Η Ελένη ρωτάει: «Did you go to the museum on Sunday?». Ποια απάντηση είναι σωστή;', en: 'Eleni asks: "Did you go to the museum on Sunday?" Which answer is correct?' },
    options: {
      el: ['No, I didn\'t. I went on Saturday.', 'No, I didn\'t went. I go on Saturday.', 'No, I don\'t. I went on Saturday.', 'No, I didn\'t go. I goed on Saturday.'],
      en: ['No, I didn\'t. I went on Saturday.', 'No, I didn\'t went. I go on Saturday.', 'No, I don\'t. I went on Saturday.', 'No, I didn\'t go. I goed on Saturday.'],
    },
    correct: 0,
    explanation: {
      el: 'Σύντομη απάντηση: «No, I didn\'t.» Μετά λέμε τι έγινε με τον αόριστο: I went (go → went).',
      en: 'Short answer: "No, I didn\'t." Then we say what happened, in the past simple: I went (go → went).',
    },
  },
];
