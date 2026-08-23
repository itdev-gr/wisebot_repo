/**
 * Δ' Δημοτικού · Αγγλικά · Χόμπι & Αθλήματα / Hobbies & Sports
 * ============================================================
 * Original questions for a Greek child of 9–10 learning English (curriculum topics only —
 * nothing from ebooks.edu.gr). In the order the class meets them:
 *   1–5   vocabulary: sports and hobbies (football, swimming, drawing, reading, dancing…)
 *   6–9   "I like + -ing" and "I don't like + -ing"
 *   10–13 present simple: play / plays, go / goes, "every day", "at the weekend"
 *   14–16 questions with "Do you play…?" and the short answers "Yes, I do / No, I don't"
 *   17–18 "Have you got…?" with "Yes, I have / No, I haven't"
 * Distractors are the real mistakes: the base form after "like", a missing -s with he/she,
 * "Are you play…?", and mixing "Do you…?" with "Have you got…?".
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_HOBBIES_AND_SPORTS: QuizQuestion[] = [
  // ── 1–5: vocabulary ───────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ποδόσφαιρο» στα αγγλικά;', en: 'How do you say «ποδόσφαιρο» in English?' },
    options: { el: ['basketball', 'football', 'tennis', 'volleyball'], en: ['basketball', 'football', 'tennis', 'volleyball'] },
    correct: 1,
    explanation: {
      el: 'Ποδόσφαιρο = football. Το basketball είναι το μπάσκετ και το volleyball το βόλεϊ.',
      en: 'Ποδόσφαιρο = football. Basketball is μπάσκετ and volleyball is βόλεϊ.',
    },
  },
  {
    q: { el: 'Πώς λέμε «κολύμπι» στα αγγλικά;', en: 'How do you say «κολύμπι» in English?' },
    options: { el: ['running', 'cycling', 'swimming', 'skating'], en: ['running', 'cycling', 'swimming', 'skating'] },
    correct: 2,
    explanation: {
      el: 'Κολύμπι = swimming. Το running είναι το τρέξιμο και το cycling η ποδηλασία.',
      en: 'Κολύμπι = swimming. Running is τρέξιμο and cycling is ποδηλασία.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «ζωγραφική»;', en: 'Which word means «ζωγραφική»?' },
    options: { el: ['drawing', 'reading', 'singing', 'cooking'], en: ['drawing', 'reading', 'singing', 'cooking'] },
    correct: 0,
    explanation: {
      el: 'Ζωγραφική = drawing. Reading = διάβασμα, singing = τραγούδι, cooking = μαγειρική.',
      en: 'Ζωγραφική = drawing. Reading = διάβασμα, singing = τραγούδι, cooking = μαγειρική.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι χόμπι και ΟΧΙ άθλημα;', en: 'Which of these is a hobby and NOT a sport?' },
    options: { el: ['tennis', 'football', 'basketball', 'reading'], en: ['tennis', 'football', 'basketball', 'reading'] },
    correct: 3,
    explanation: {
      el: 'Το reading (διάβασμα) είναι χόμπι. Tennis, football και basketball είναι αθλήματα (sports).',
      en: 'Reading is a hobby. Tennis, football and basketball are sports.',
    },
  },
  {
    q: { el: 'Η Ελένη χορεύει κάθε Σάββατο. Ποιο είναι το χόμπι της;', en: 'Eleni dances every Saturday. What is her hobby?' },
    options: { el: ['painting', 'dancing', 'climbing', 'fishing'], en: ['painting', 'dancing', 'climbing', 'fishing'] },
    correct: 1,
    explanation: {
      el: 'Χορός = dancing. Painting = ζωγραφική με χρώματα, climbing = αναρρίχηση, fishing = ψάρεμα.',
      en: 'Χορός = dancing. Painting is ζωγραφική, climbing is αναρρίχηση, fishing is ψάρεμα.',
    },
  },

  // ── 6–9: I like + -ing ────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I like ___.»', en: 'Complete: «I like ___.»' },
    options: { el: ['swim', 'swimming', 'swims', 'to swimming'], en: ['swim', 'swimming', 'swims', 'to swimming'] },
    correct: 1,
    explanation: {
      el: 'Μετά το like βάζουμε το ρήμα με -ing: I like swimming = Μου αρέσει το κολύμπι.',
      en: 'After like we put the verb with -ing: I like swimming.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Μου αρέσει να διαβάζω» στα αγγλικά;', en: 'How do you say «Μου αρέσει να διαβάζω» in English?' },
    options: { el: ['I like read.', 'I like reads.', 'I like reading.', 'I liking read.'], en: ['I like read.', 'I like reads.', 'I like reading.', 'I liking read.'] },
    correct: 2,
    explanation: {
      el: '«Μου αρέσει να διαβάζω» = I like reading. Το like μένει όπως είναι, το ρήμα παίρνει -ing.',
      en: 'I like reading. Like stays the same, the verb takes -ing.',
    },
  },
  {
    q: { el: 'Ο Νίκος ΔΕΝ θέλει να τρέχει. Τι λέει;', en: 'Nikos does NOT want to run. What does he say?' },
    options: { el: ['I don\'t like running.', 'I not like running.', 'I don\'t like run.', 'I like not running.'], en: ['I don\'t like running.', 'I not like running.', 'I don\'t like run.', 'I like not running.'] },
    correct: 0,
    explanation: {
      el: 'Για το «δεν μου αρέσει» λέμε I don\'t like + -ing: I don\'t like running.',
      en: 'For «δεν μου αρέσει» we say I don\'t like + -ing: I don\'t like running.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['She likes dance.', 'She like dancing.', 'She likes to dancing.', 'She likes dancing.'], en: ['She likes dance.', 'She like dancing.', 'She likes to dancing.', 'She likes dancing.'] },
    correct: 3,
    explanation: {
      el: 'Με το she το like γίνεται likes, και μετά έρχεται το -ing: She likes dancing.',
      en: 'With she, like becomes likes, and then comes the -ing: She likes dancing.',
    },
  },

  // ── 10–13: present simple ─────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I ___ football every day.»', en: 'Complete: «I ___ football every day.»' },
    options: { el: ['play', 'plays', 'playing', 'am play'], en: ['play', 'plays', 'playing', 'am play'] },
    correct: 0,
    explanation: {
      el: 'Με το I το ρήμα μένει σκέτο: I play football every day = Παίζω ποδόσφαιρο κάθε μέρα.',
      en: 'With I the verb stays plain: I play football every day.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Maria ___ tennis on Mondays.»', en: 'Complete: «Maria ___ tennis on Mondays.»' },
    options: { el: ['play', 'playing', 'plays', 'is play'], en: ['play', 'playing', 'plays', 'is play'] },
    correct: 2,
    explanation: {
      el: 'Η Maria είναι «she», και με he / she / it το ρήμα παίρνει -s: Maria plays tennis.',
      en: 'Maria is «she», and with he / she / it the verb takes -s: Maria plays tennis.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Giorgos ___ swimming at the weekend.»', en: 'Complete: «Giorgos ___ swimming at the weekend.»' },
    options: { el: ['go', 'gos', 'going', 'goes'], en: ['go', 'gos', 'going', 'goes'] },
    correct: 3,
    explanation: {
      el: 'Με he το go γίνεται goes (με -es, όχι σκέτο -s): Giorgos goes swimming.',
      en: 'With he, go becomes goes (with -es, not just -s): Giorgos goes swimming.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «We ___ basketball after school.»', en: 'Complete: «We ___ basketball after school.»' },
    options: { el: ['plays', 'play', 'playing', 'are play'], en: ['plays', 'play', 'playing', 'are play'] },
    correct: 1,
    explanation: {
      el: 'Με το we το ρήμα δεν παίρνει -s: We play basketball. Το -s είναι μόνο για he / she / it.',
      en: 'With we the verb takes no -s: We play basketball. The -s is only for he / she / it.',
    },
  },

  // ── 14–16: Do you play…? ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Παίζεις τένις;» στα αγγλικά;', en: 'How do you ask «Παίζεις τένις;» in English?' },
    options: { el: ['Are you play tennis?', 'You play tennis?', 'Do you play tennis?', 'Does you play tennis?'], en: ['Are you play tennis?', 'You play tennis?', 'Do you play tennis?', 'Does you play tennis?'] },
    correct: 2,
    explanation: {
      el: 'Η ερώτηση ξεκινά με Do: Do you play tennis? Το does είναι για he / she / it.',
      en: 'The question starts with Do: Do you play tennis? Does is for he / she / it.',
    },
  },
  {
    q: { el: '«Do you like football?» — Ποια είναι η σωστή θετική απάντηση;', en: '«Do you like football?» — Which is the correct «yes» answer?' },
    options: { el: ['Yes, I am.', 'Yes, I like.', 'Yes, I do.', 'Yes, I does.'], en: ['Yes, I am.', 'Yes, I like.', 'Yes, I do.', 'Yes, I does.'] },
    correct: 2,
    explanation: {
      el: 'Στην ερώτηση με Do απαντάμε με do: Yes, I do. / No, I don\'t.',
      en: 'To a Do question we answer with do: Yes, I do. / No, I don\'t.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ Eleni play volleyball?»', en: 'Complete: «___ Eleni play volleyball?»' },
    options: { el: ['Do', 'Is', 'Does', 'Has'], en: ['Do', 'Is', 'Does', 'Has'] },
    correct: 2,
    explanation: {
      el: 'Η Eleni είναι «she», άρα η ερώτηση ξεκινά με Does: Does Eleni play volleyball? Το ρήμα μένει play, χωρίς -s.',
      en: 'Eleni is «she», so the question starts with Does: Does Eleni play volleyball? The verb stays play, no -s.',
    },
  },

  // ── 17–18: Have you got…? ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Έχεις ποδήλατο;» στα αγγλικά;', en: 'How do you ask «Έχεις ποδήλατο;» in English?' },
    options: { el: ['Do you got a bike?', 'Have you got a bike?', 'Are you got a bike?', 'Have you a got bike?'], en: ['Do you got a bike?', 'Have you got a bike?', 'Are you got a bike?', 'Have you a got bike?'] },
    correct: 1,
    explanation: {
      el: '«Έχεις…;» = Have you got…? Η λέξη got έρχεται αμέσως μετά το you.',
      en: '«Έχεις…;» = Have you got…? The word got comes right after you.',
    },
  },
  {
    q: { el: '«Have you got a tennis racket?» — Ο Νίκος δεν έχει. Τι απαντά;', en: '«Have you got a tennis racket?» — Nikos does not have one. What does he answer?' },
    options: { el: ['No, I don\'t.', 'No, I haven\'t.', 'No, I am not.', 'No, I not got.'], en: ['No, I don\'t.', 'No, I haven\'t.', 'No, I am not.', 'No, I not got.'] },
    correct: 1,
    explanation: {
      el: 'Στο Have you got…? απαντάμε με have: Yes, I have. / No, I haven\'t. Το don\'t πάει με το Do you…?',
      en: 'To Have you got…? we answer with have: Yes, I have. / No, I haven\'t. Don\'t goes with Do you…?',
    },
  },
];
