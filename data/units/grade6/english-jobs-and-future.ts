/**
 * ΣΤ' Δημοτικού · Αγγλικά · Επαγγέλματα & Μέλλον — "Jobs & the Future"
 * =====================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 11–12 learning English.
 *
 * What the unit covers, in order:
 *   1–5   job vocabulary: doctor, teacher, firefighter, chef, pilot… (with a/an)
 *   6–9   "What do they do?" — matching a job to what the person does, -er/-or endings
 *   10–14 the future: "will" for predictions/promises, "going to" for plans,
 *         "won't", question forms and short answers
 *   15–18 "I want to be a…" — talking about dreams and the future (when I grow up)
 *
 * Distractors are the real mistakes: "a" before a vowel sound, "cooker" for chef,
 * "will" + "to", "going to" without "be", "want be" without "to".
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ENGLISH_JOBS_AND_FUTURE: QuizQuestion[] = [
  // ── 1–5: job vocabulary ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «γιατρός» στα αγγλικά;', en: 'How do you say «γιατρός» in English?' },
    options: { el: ['nurse', 'doctor', 'dentist', 'driver'], en: ['nurse', 'doctor', 'dentist', 'driver'] },
    correct: 1,
    explanation: {
      el: 'Γιατρός = doctor. Ο nurse είναι ο νοσοκόμος και ο dentist ο οδοντίατρος.',
      en: 'Γιατρός = doctor. A nurse helps the doctor and a dentist looks after teeth.',
    },
  },
  {
    q: { el: 'Πώς λέμε «δάσκαλος» στα αγγλικά;', en: 'How do you say «δάσκαλος» in English?' },
    options: { el: ['student', 'teacher', 'waiter', 'farmer'], en: ['student', 'teacher', 'waiter', 'farmer'] },
    correct: 1,
    explanation: {
      el: 'Δάσκαλος = teacher. Ο student είναι ο μαθητής — αυτός που μαθαίνει, όχι αυτός που διδάσκει.',
      en: 'Δάσκαλος = teacher. A student is the one who learns, not the one who teaches.',
    },
  },
  {
    q: { el: 'Ποιος σβήνει τις φωτιές;', en: 'Who puts out fires?' },
    options: { el: ['a police officer', 'a builder', 'a firefighter', 'a mechanic'], en: ['a police officer', 'a builder', 'a firefighter', 'a mechanic'] },
    correct: 2,
    explanation: {
      el: 'Ο πυροσβέστης είναι firefighter: fire (φωτιά) + fighter (αυτός που παλεύει).',
      en: 'A firefighter fights fires: fire + fighter. Easy to remember!',
    },
  },
  {
    q: { el: 'Ο Νίκος μαγειρεύει σε ένα εστιατόριο. Στα αγγλικά είναι…', en: 'Nikos cooks in a restaurant. In English he is…' },
    options: { el: ['a cooker', 'a chef', 'a kitchen', 'a waiter'], en: ['a cooker', 'a chef', 'a kitchen', 'a waiter'] },
    correct: 1,
    explanation: {
      el: 'Ο μάγειρας είναι chef (ή cook). Προσοχή: cooker είναι η κουζίνα-συσκευή, όχι άνθρωπος!',
      en: 'A person who cooks is a chef (or a cook). Careful: a cooker is the machine, not a person!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «My aunt is ___ engineer.»', en: 'Complete: «My aunt is ___ engineer.»' },
    options: { el: ['a', 'an', 'the', '—'], en: ['a', 'an', 'the', '—'] },
    correct: 1,
    explanation: {
      el: 'Πριν από φωνήεν (a, e, i, o, u) λέμε an: an engineer, an actor. Αλλά a pilot, a nurse.',
      en: 'Before a vowel sound we say an: an engineer, an actor. But a pilot, a nurse.',
    },
  },

  // ── 6–9: What do they do? ──────────────────────────────────────────────────
  {
    q: { el: 'What does a pilot do?', en: 'What does a pilot do?' },
    options: { el: ['He drives a bus.', 'He flies a plane.', 'He sails a boat.', 'He fixes cars.'], en: ['He drives a bus.', 'He flies a plane.', 'He sails a boat.', 'He fixes cars.'] },
    correct: 1,
    explanation: {
      el: 'Ο πιλότος πετάει αεροπλάνο: a pilot flies a plane. Στο τρίτο πρόσωπο βάζουμε -s: flies.',
      en: 'A pilot flies a plane. In the third person we add -s: he flies.',
    },
  },
  {
    q: { el: 'Η Ελένη works in a hospital and helps the doctor. What does she do?', en: 'Eleni works in a hospital and helps the doctor. What does she do?' },
    options: { el: ['She is a nurse.', 'She is a vet.', 'She is a scientist.', 'She is a dentist.'], en: ['She is a nurse.', 'She is a vet.', 'She is a scientist.', 'She is a dentist.'] },
    correct: 0,
    explanation: {
      el: 'Στο νοσοκομείο, δίπλα στον γιατρό, δουλεύει η nurse (νοσοκόμα). Ο vet φροντίζει ζώα.',
      en: 'The nurse works in the hospital with the doctor. A vet looks after animals.',
    },
  },
  {
    q: { el: 'Ποιος φροντίζει τα άρρωστα ζώα;', en: 'Who looks after sick animals?' },
    options: { el: ['a farmer', 'a doctor', 'a vet', 'a zoo'], en: ['a farmer', 'a doctor', 'a vet', 'a zoo'] },
    correct: 2,
    explanation: {
      el: 'Ο κτηνίατρος είναι vet (από το veterinarian). Ο farmer είναι ο αγρότης και το zoo είναι μέρος, όχι επάγγελμα.',
      en: 'A vet (veterinarian) looks after animals. A farmer grows food, and a zoo is a place, not a job.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «A person who paints pictures is a ___.»', en: 'Complete: «A person who paints pictures is a ___.»' },
    options: { el: ['paint', 'painting', 'painter', 'paintor'], en: ['paint', 'painting', 'painter', 'paintor'] },
    correct: 2,
    explanation: {
      el: 'Πολλά επαγγέλματα φτιάχνονται με -er: paint → painter, teach → teacher, sing → singer.',
      en: 'Many jobs end in -er: paint → painter, teach → teacher, sing → singer.',
    },
  },

  // ── 10–14: will / going to ────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I think robots ___ help doctors in the future.»', en: 'Complete: «I think robots ___ help doctors in the future.»' },
    options: { el: ['will', 'are', 'do', 'was'], en: ['will', 'are', 'do', 'was'] },
    correct: 0,
    explanation: {
      el: 'Για το μέλλον και για προβλέψεις («νομίζω ότι…») χρησιμοποιούμε will + ρήμα: will help.',
      en: 'For the future and for predictions («I think…») we use will + verb: will help.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['She will to be a teacher.', 'She will be a teacher.', 'She wills be a teacher.', 'She will is a teacher.'], en: ['She will to be a teacher.', 'She will be a teacher.', 'She wills be a teacher.', 'She will is a teacher.'] },
    correct: 1,
    explanation: {
      el: 'Μετά το will βάζουμε το ρήμα σκέτο, χωρίς to και χωρίς -s: She will be.',
      en: 'After will we use the plain verb — no to, no -s: She will be.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει αποφασίσει. Συμπλήρωσε: «I ___ study to be a vet.»', en: 'Giorgos has decided. Complete: «I ___ study to be a vet.»' },
    options: { el: ['going to', 'am going', 'am going to', 'go to'], en: ['going to', 'am going', 'am going to', 'go to'] },
    correct: 2,
    explanation: {
      el: 'Για σχέδια που έχουμε ήδη αποφασίσει λέμε be + going to + ρήμα: I am going to study.',
      en: 'For plans we have already decided we say be + going to + verb: I am going to study.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Don\'t worry, Maria. You ___ be late for work.»', en: 'Complete: «Don\'t worry, Maria. You ___ be late for work.»' },
    options: { el: ['will not to', 'don\'t', 'won\'t', 'not will'], en: ['will not to', 'don\'t', 'won\'t', 'not will'] },
    correct: 2,
    explanation: {
      el: 'Η άρνηση του will είναι will not, που το λέμε σύντομα won\'t: You won\'t be late.',
      en: 'The negative of will is will not, short form won\'t: You won\'t be late.',
    },
  },
  {
    q: { el: '«Will you be a famous singer one day?» — Ποια είναι η σωστή σύντομη απάντηση;', en: '«Will you be a famous singer one day?» — Which short answer is correct?' },
    options: { el: ['Yes, I am.', 'Yes, I do.', 'Yes, I will.', 'Yes, I be.'], en: ['Yes, I am.', 'Yes, I do.', 'Yes, I will.', 'Yes, I be.'] },
    correct: 2,
    explanation: {
      el: 'Στη σύντομη απάντηση επαναλαμβάνουμε το will: Yes, I will. / No, I won\'t.',
      en: 'In a short answer we repeat will: Yes, I will. / No, I won\'t.',
    },
  },

  // ── 15–18: I want to be a… ────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Θέλω να γίνω αστροναύτης» στα αγγλικά;', en: 'How do you say «Θέλω να γίνω αστροναύτης» in English?' },
    options: { el: ['I want be an astronaut.', 'I want to be an astronaut.', 'I want to an astronaut.', 'I want being an astronaut.'], en: ['I want be an astronaut.', 'I want to be an astronaut.', 'I want to an astronaut.', 'I want being an astronaut.'] },
    correct: 1,
    explanation: {
      el: 'Μετά το want βάζουμε πάντα to + ρήμα: I want to be. Μην ξεχνάς το to!',
      en: 'After want we always use to + verb: I want to be. Don\'t forget the to!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «My sister ___ to be a police officer.»', en: 'Complete: «My sister ___ to be a police officer.»' },
    options: { el: ['want', 'wants', 'wanting', 'is want'], en: ['want', 'wants', 'wanting', 'is want'] },
    correct: 1,
    explanation: {
      el: 'Με he / she / it το ρήμα παίρνει -s: My sister wants to be. (Αλλά: I want, they want.)',
      en: 'With he / she / it the verb takes -s: My sister wants to be. (But: I want, they want.)',
    },
  },
  {
    q: { el: 'Η Μαρία λέει: «I love animals and I\'m good at science.» Τι θέλει να γίνει, μάλλον;', en: 'Maria says: «I love animals and I\'m good at science.» What does she probably want to be?' },
    options: { el: ['a vet', 'a pilot', 'a chef', 'a footballer'], en: ['a vet', 'a pilot', 'a chef', 'a footballer'] },
    correct: 0,
    explanation: {
      el: 'Ζώα + επιστήμη = κτηνίατρος (vet). Λέμε: «I\'m good at science» (καλός σε κάτι = good at).',
      en: 'Animals + science = vet. Notice the phrase «I\'m good at science» — good at something.',
    },
  },
  {
    q: { el: 'Ποια πρόταση λέει σωστά «Όταν μεγαλώσω, θα γίνω ηθοποιός»;', en: 'Which sentence correctly says «Όταν μεγαλώσω, θα γίνω ηθοποιός»?' },
    options: { el: ['When I will grow up, I be an actor.', 'When I grow up, I am an actor.', 'When I grow up, I will be an actor.', 'When I grew up, I will an actor.'], en: ['When I will grow up, I be an actor.', 'When I grow up, I am an actor.', 'When I grow up, I will be an actor.', 'When I grew up, I will an actor.'] },
    correct: 2,
    explanation: {
      el: 'Μετά το when βάζουμε απλό ενεστώτα (grow up) και το will στο δεύτερο μέρος: When I grow up, I will be an actor.',
      en: 'After when we use the present (grow up) and put will in the second part: When I grow up, I will be an actor.',
    },
  },
];
