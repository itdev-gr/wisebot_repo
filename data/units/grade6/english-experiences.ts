/**
 * ΣΤ' Δημοτικού · Αγγλικά · Εμπειρίες & Ρεκόρ — "Experiences & Records"
 * =======================================================================
 * Original questions for a Greek child of 11–12 learning English. Curriculum topics
 * only — no text from ebooks.edu.gr or any website.
 *
 * What the unit covers, in order:
 *   1–5   vocabulary: record, record holder, sports, play/do/go, winner
 *   6–11  present perfect: "Have you ever…?", has/have, short answers, irregular
 *         participles, ever/never, present perfect vs past simple ("last year")
 *   12–15 superlatives: -est, the most + long adjective, good → the best, far → the farthest
 *   16–18 achievements: gold medal, "break a record", present perfect + since
 * Distractors are the mistakes Greek children really make (goodest, the more popular,
 * "golden medal", "winned"). The UI shuffles options, so the correct slot is not balanced.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ENGLISH_EXPERIENCES: QuizQuestion[] = [
  // ── 1–5: vocabulary — records and sports ────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ρεκόρ» στα αγγλικά;', en: 'How do you say «ρεκόρ» in English?' },
    options: { el: ['record', 'recorder', 'report', 'reward'], en: ['record', 'recorder', 'report', 'reward'] },
    correct: 0,
    explanation: {
      el: '«Ρεκόρ» = record. Π.χ. «a world record» = παγκόσμιο ρεκόρ. Το «recorder» είναι μια φλογέρα!',
      en: '«Ρεκόρ» = record. For example, “a world record”. A “recorder” is a musical instrument!',
    },
  },
  {
    q: { el: 'Πώς λέμε «κάτοχος ρεκόρ» στα αγγλικά;', en: 'How do you say «κάτοχος ρεκόρ» in English?' },
    options: { el: ['record keeper', 'record holder', 'record owner', 'record player'], en: ['record keeper', 'record holder', 'record owner', 'record player'] },
    correct: 1,
    explanation: {
      el: 'Ο κάτοχος ρεκόρ είναι ο «record holder» — αυτός που «κρατάει» (holds) το ρεκόρ.',
      en: 'The person who has a record is the “record holder” — they “hold” the record.',
    },
  },
  {
    q: { el: 'Ποιο άθλημα γίνεται μέσα στο νερό;', en: 'Which sport do you do in the water?' },
    options: { el: ['climbing', 'cycling', 'skiing', 'swimming'], en: ['climbing', 'cycling', 'skiing', 'swimming'] },
    correct: 3,
    explanation: {
      el: 'Swimming = κολύμβηση. Climbing = αναρρίχηση, cycling = ποδηλασία, skiing = σκι.',
      en: 'Swimming is the sport you do in water. Climbing, cycling and skiing are on land or snow.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Nikos ___ basketball every Saturday.»', en: 'Complete: “Nikos ___ basketball every Saturday.”' },
    options: { el: ['goes', 'does', 'plays', 'makes'], en: ['goes', 'does', 'plays', 'makes'] },
    correct: 2,
    explanation: {
      el: 'Με αθλήματα που έχουν μπάλα λέμε «play»: play basketball, play football. Το «go» πάει με -ing (go swimming).',
      en: 'With ball sports we say “play”: play basketball, play football. “Go” goes with -ing (go swimming).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «The person who wins a race is the ___.»', en: 'Complete: “The person who wins a race is the ___.”' },
    options: { el: ['loser', 'coach', 'winner', 'referee'], en: ['loser', 'coach', 'winner', 'referee'] },
    correct: 2,
    explanation: {
      el: 'Winner = νικητής (από το win = κερδίζω). Loser = αυτός που χάνει, coach = προπονητής, referee = διαιτητής.',
      en: 'Winner comes from “win”. The loser loses, the coach trains the team, the referee controls the game.',
    },
  },

  // ── 6–11: present perfect — "Have you ever…?" ───────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Have you ever ___ a medal?»', en: 'Complete: “Have you ever ___ a medal?”' },
    options: { el: ['win', 'wins', 'winning', 'won'], en: ['win', 'wins', 'winning', 'won'] },
    correct: 3,
    explanation: {
      el: 'Μετά το have/has βάζουμε την τρίτη μορφή του ρήματος: win → won → won. «Have you ever won…?» = «Έχεις ποτέ κερδίσει…;»',
      en: 'After have/has we use the past participle: win → won → won. “Have you ever won…?” asks about your whole life.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Eleni ___ never been to a stadium.»', en: 'Complete: “Eleni ___ never been to a stadium.”' },
    options: { el: ['is', 'have', 'was', 'has'], en: ['is', 'have', 'was', 'has'] },
    correct: 3,
    explanation: {
      el: 'Η Eleni είναι he/she/it, άρα παίρνει «has»: She has never been… Το «have» πάει με I, you, we, they.',
      en: 'Eleni is “she”, so we use “has”: She has never been… “Have” goes with I, you, we, they.',
    },
  },
  {
    q: { el: 'Ερώτηση: «Have you ever climbed a mountain?» — Σωστή σύντομη απάντηση:', en: 'Question: “Have you ever climbed a mountain?” — Correct short answer:' },
    options: { el: ['Yes, I did.', 'Yes, I have.', 'Yes, I am.', 'Yes, I do.'], en: ['Yes, I did.', 'Yes, I have.', 'Yes, I am.', 'Yes, I do.'] },
    correct: 1,
    explanation: {
      el: 'Η ερώτηση ξεκινά με «Have», άρα απαντάμε με το ίδιο βοηθητικό: «Yes, I have.» / «No, I haven\'t.»',
      en: 'The question starts with “Have”, so the answer uses the same helper: “Yes, I have.” / “No, I haven\'t.”',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Have you ever ___ a dolphin?»', en: 'Complete: “Have you ever ___ a dolphin?”' },
    options: { el: ['saw', 'seen', 'see', 'seeing'], en: ['saw', 'seen', 'see', 'seeing'] },
    correct: 1,
    explanation: {
      el: 'See → saw → seen. Με το have/has πάει πάντα η τρίτη μορφή (seen), όχι ο αόριστος (saw).',
      en: 'See → saw → seen. With have/has we always use the third form (seen), not the past simple (saw).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «I have ___ eaten sushi. I want to try it!»', en: 'Complete: “I have ___ eaten sushi. I want to try it!”' },
    options: { el: ['ever', 'already', 'never', 'yet'], en: ['ever', 'already', 'never', 'yet'] },
    correct: 2,
    explanation: {
      el: 'Θέλει να το δοκιμάσει, άρα ΔΕΝ το έχει φάει ποτέ: «never». Το «ever» το χρησιμοποιούμε κυρίως σε ερωτήσεις.',
      en: 'They want to try it, so they have NOT eaten it: “never”. We use “ever” mostly in questions.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Giorgos ___ a swimming race last year.»', en: 'Complete: “Giorgos ___ a swimming race last year.”' },
    options: { el: ['has won', 'won', 'win', 'has win'], en: ['has won', 'won', 'win', 'has win'] },
    correct: 1,
    explanation: {
      el: 'Το «last year» λέει ΠΟΤΕ έγινε, άρα θέλουμε αόριστο (past simple): won. Ο present perfect δεν πάει με «last year».',
      en: '“Last year” tells us WHEN it happened, so we use the past simple: won. The present perfect does not go with “last year”.',
    },
  },

  // ── 12–15: superlatives ─────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ο ψηλότερος» στα αγγλικά;', en: 'How do you say «ο ψηλότερος» in English?' },
    options: { el: ['the taller', 'the most tall', 'the tallest', 'the tall'], en: ['the taller', 'the most tall', 'the tallest', 'the tall'] },
    correct: 2,
    explanation: {
      el: 'Μικρά επίθετα παίρνουν -est: tall → the tallest. Το «taller» συγκρίνει μόνο δύο (ψηλότερος από).',
      en: 'Short adjectives take -est: tall → the tallest. “Taller” compares only two things (taller than).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Football is ___ sport in Greece.»', en: 'Complete: “Football is ___ sport in Greece.”' },
    options: { el: ['the most popular', 'the popularest', 'the more popular', 'most popular'], en: ['the most popular', 'the popularest', 'the more popular', 'most popular'] },
    correct: 0,
    explanation: {
      el: 'Τα μεγάλα επίθετα (popular, famous, difficult) παίρνουν «the most»: the most popular. Δεν βάζουμε -est.',
      en: 'Long adjectives (popular, famous, difficult) take “the most”: the most popular. No -est.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Maria is ___ runner in our class.»', en: 'Complete: “Maria is ___ runner in our class.”' },
    options: { el: ['the goodest', 'the best', 'the most good', 'the better'], en: ['the goodest', 'the best', 'the most good', 'the better'] },
    correct: 1,
    explanation: {
      el: 'Το «good» είναι ανώμαλο: good → better → the best. Δεν υπάρχει «goodest»!',
      en: '“Good” is irregular: good → better → the best. There is no “goodest”!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Who jumped ___? Nikos — four metres!»', en: 'Complete: “Who jumped ___? Nikos — four metres!”' },
    options: { el: ['the farest', 'the most far', 'the farthest', 'farther'], en: ['the farest', 'the most far', 'the farthest', 'farther'] },
    correct: 2,
    explanation: {
      el: 'Το «far» είναι ανώμαλο: far → farther → the farthest (πιο μακριά από όλους).',
      en: '“Far” is irregular: far → farther → the farthest (further than everyone else).',
    },
  },

  // ── 16–18: achievements ─────────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος ήρθε πρώτος. Συμπλήρωσε: «He won a ___ medal.»', en: 'Giorgos came first. Complete: “He won a ___ medal.”' },
    options: { el: ['golden', 'gold', 'yellow', 'first'], en: ['golden', 'gold', 'yellow', 'first'] },
    correct: 1,
    explanation: {
      el: 'Πρώτος = gold medal, δεύτερος = silver medal, τρίτος = bronze medal. Λέμε «gold», όχι «golden».',
      en: 'First = gold medal, second = silver medal, third = bronze medal. We say “gold medal”, not “golden”.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Eleni ___ the school record in the long jump!»', en: 'Complete: “Eleni ___ the school record in the long jump!”' },
    options: { el: ['won', 'made', 'broke', 'did'], en: ['won', 'made', 'broke', 'did'] },
    correct: 2,
    explanation: {
      el: 'Στα αγγλικά τα ρεκόρ «σπάνε»: break a record → broke the record. Κερδίζουμε (win) αγώνες, όχι ρεκόρ.',
      en: 'In English you “break” a record: break a record → broke the record. You win races, not records.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «She has ___ three gold medals ___ 2020.»', en: 'Complete: “She has ___ three gold medals ___ 2020.”' },
    options: { el: ['won / for', 'winned / since', 'win / since', 'won / since'], en: ['won / for', 'winned / since', 'win / since', 'won / since'] },
    correct: 3,
    explanation: {
      el: 'Has + won (τρίτη μορφή). Με χρονική στιγμή (2020) βάζουμε «since»· το «for» πάει με διάρκεια (for three years).',
      en: 'Has + won (past participle). With a point in time (2020) we use “since”; “for” goes with a length of time (for three years).',
    },
  },
];
