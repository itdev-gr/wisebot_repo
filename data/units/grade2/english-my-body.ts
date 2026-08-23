/**
 * Β' Δημοτικού · Αγγλικά · Το Σώμα μου / My Body
 * ================================================
 * Original questions for a Greek child of 7–8 learning English. Covered in order:
 *   1–6   the big parts: head, arms, legs, hands, and the face: eyes, nose, mouth, ears
 *   7–10  one or two? — eyes/ears are "two", plural -s, "I have…"
 *   11–14 "Touch your…" — understanding the instruction and the word after it
 *   15–18 imperatives: Clap, Stamp, Open, Close — and putting a full command together
 * Distractors are the real mix-ups: hand/head, ear/eye, arm/leg, nose/mouth.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ENGLISH_MY_BODY: QuizQuestion[] = [
  // ── 1–6: body and face words ───────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «κεφάλι» στα αγγλικά;', en: 'How do you say «κεφάλι» in English?' },
    options: { el: ['head', 'hand', 'leg', 'nose'], en: ['head', 'hand', 'leg', 'nose'] },
    correct: 0,
    explanation: {
      el: 'Το κεφάλι είναι «head». Πρόσεξε: «hand» είναι το χέρι!',
      en: '«Κεφάλι» is “head”. Careful: “hand” is the hand!',
    },
  },
  {
    q: { el: 'Πώς λέμε «πόδι» στα αγγλικά;', en: 'How do you say «πόδι» in English?' },
    options: { el: ['arm', 'head', 'leg', 'eye'], en: ['arm', 'head', 'leg', 'eye'] },
    correct: 2,
    explanation: {
      el: 'Το πόδι είναι «leg». Το «arm» είναι το μπράτσο.',
      en: '«Πόδι» is “leg”. “Arm” is the arm.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «hand»;', en: 'What does the word “hand” mean?' },
    options: { el: ['κεφάλι', 'χέρι (παλάμη)', 'πόδι', 'αυτί'], en: ['head', 'hand', 'leg', 'ear'] },
    correct: 1,
    explanation: {
      el: '«Hand» είναι το χέρι, αυτό που έχει τα δάχτυλα. Το «head» είναι το κεφάλι.',
      en: '“Hand” is the part with the fingers. “Head” is the head.',
    },
  },
  {
    q: { el: 'Με ποιο βλέπουμε; Διάλεξε τη σωστή λέξη.', en: 'Which one do we see with? Choose the right word.' },
    options: { el: ['ear', 'mouth', 'nose', 'eye'], en: ['ear', 'mouth', 'nose', 'eye'] },
    correct: 3,
    explanation: {
      el: 'Βλέπουμε με το μάτι: «eye». Το «ear» είναι το αυτί.',
      en: 'We see with the eye: “eye”. “Ear” is the ear.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μύτη» στα αγγλικά;', en: 'How do you say «μύτη» in English?' },
    options: { el: ['mouth', 'nose', 'ear', 'arm'], en: ['mouth', 'nose', 'ear', 'arm'] },
    correct: 1,
    explanation: {
      el: 'Η μύτη είναι «nose». Το «mouth» είναι το στόμα.',
      en: '«Μύτη» is “nose”. “Mouth” is the mouth.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «ear»;', en: 'What does the word “ear” mean?' },
    options: { el: ['μάτι', 'στόμα', 'αυτί', 'μπράτσο'], en: ['eye', 'mouth', 'ear', 'arm'] },
    correct: 2,
    explanation: {
      el: '«Ear» είναι το αυτί. Ακούμε με τα αυτιά μας. Το «eye» είναι το μάτι.',
      en: '“Ear” is the ear. We hear with our ears. “Eye” is the eye.',
    },
  },

  // ── 7–10: one or two, plural -s, "I have" ──────────────────────────────────
  {
    q: { el: 'Πώς λέμε «στόμα» στα αγγλικά;', en: 'How do you say «στόμα» in English?' },
    options: { el: ['nose', 'mouth', 'hand', 'ears'], en: ['nose', 'mouth', 'hand', 'ears'] },
    correct: 1,
    explanation: {
      el: 'Το στόμα είναι «mouth». Έχουμε ένα στόμα και μιλάμε με αυτό!',
      en: '«Στόμα» is “mouth”. We have one mouth and we talk with it!',
    },
  },
  {
    q: { el: 'Πόσα μάτια έχουμε; Διάλεξε τη σωστή φράση.', en: 'How many eyes do we have? Choose the right phrase.' },
    options: { el: ['one eye', 'two eyes', 'two eye', 'one eyes'], en: ['one eye', 'two eyes', 'two eye', 'one eyes'] },
    correct: 1,
    explanation: {
      el: 'Έχουμε δύο μάτια: «two eyes». Όταν είναι πολλά, βάζουμε -s στο τέλος.',
      en: 'We have two eyes: “two eyes”. When there is more than one, we add -s.',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό;', en: 'Which one is correct?' },
    options: { el: ['I have two ear.', 'I have two ears.', 'I have one ears.', 'I have ears two.'], en: ['I have two ear.', 'I have two ears.', 'I have one ears.', 'I have ears two.'] },
    correct: 1,
    explanation: {
      el: '«I have two ears.» = Έχω δύο αυτιά. Πρώτα ο αριθμός, μετά η λέξη με -s.',
      en: '“I have two ears.” First the number, then the word with -s.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει: «I have two …». Ποια λέξη ταιριάζει;', en: 'Nikos says: “I have two …”. Which word fits?' },
    options: { el: ['nose', 'mouth', 'head', 'hands'], en: ['nose', 'mouth', 'head', 'hands'] },
    correct: 3,
    explanation: {
      el: 'Έχουμε δύο χέρια: «two hands». Μύτη, στόμα και κεφάλι έχουμε μόνο ένα.',
      en: 'We have two hands: “two hands”. We have only one nose, mouth and head.',
    },
  },

  // ── 11–14: "Touch your…" ───────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «Touch your nose»;', en: 'What does “Touch your nose” mean?' },
    options: { el: ['Άγγιξε τη μύτη σου', 'Άγγιξε το στόμα σου', 'Κοίτα τη μύτη σου', 'Άνοιξε το στόμα σου'], en: ['Touch your nose', 'Touch your mouth', 'Look at your nose', 'Open your mouth'] },
    correct: 0,
    explanation: {
      el: '«Touch» = άγγιξε, «your nose» = τη μύτη σου. Άρα: Άγγιξε τη μύτη σου!',
      en: '“Touch” means to put your hand on something. “Your nose” is the part. So: touch your nose!',
    },
  },
  {
    q: { el: 'Η δασκάλα λέει «Touch your ears». Τι αγγίζεις;', en: 'The teacher says “Touch your ears”. What do you touch?' },
    options: { el: ['τα μάτια', 'τα αυτιά', 'τα χέρια', 'το κεφάλι'], en: ['the eyes', 'the ears', 'the hands', 'the head'] },
    correct: 1,
    explanation: {
      el: '«Ears» είναι τα αυτιά. Μην τα μπερδεύεις με «eyes» (μάτια)!',
      en: '“Ears” are the ears. Do not mix them up with “eyes”!',
    },
  },
  {
    q: { el: 'Θέλεις να πεις «Άγγιξε το κεφάλι σου». Ποιο είναι σωστό;', en: 'You want to say «Άγγιξε το κεφάλι σου». Which one is correct?' },
    options: { el: ['Touch your hand.', 'Touch your head.', 'Touch you head.', 'Touch your leg.'], en: ['Touch your hand.', 'Touch your head.', 'Touch you head.', 'Touch your leg.'] },
    correct: 1,
    explanation: {
      el: '«Touch your head.» Λέμε «your» (σου), όχι «you». Και «head» είναι το κεφάλι, όχι «hand».',
      en: '“Touch your head.” We say “your”, not “you”. And “head” is the head, not “hand”.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «Touch ___ legs.»', en: 'Which word is missing? “Touch ___ legs.”' },
    options: { el: ['you', 'your', 'my', 'the'], en: ['you', 'your', 'my', 'the'] },
    correct: 1,
    explanation: {
      el: 'Όταν δίνουμε εντολή σε κάποιον, λέμε «your»: «Touch your legs» = Άγγιξε τα πόδια σου.',
      en: 'When we tell someone to do something, we say “your”: “Touch your legs”.',
    },
  },

  // ── 15–18: imperatives ─────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «Clap your hands»;', en: 'What does “Clap your hands” mean?' },
    options: { el: ['Χτύπα παλαμάκια', 'Σήκωσε τα χέρια σου', 'Πλύνε τα χέρια σου', 'Άγγιξε τα χέρια σου'], en: ['Clap your hands', 'Raise your hands', 'Wash your hands', 'Touch your hands'] },
    correct: 0,
    explanation: {
      el: '«Clap» = χτύπα παλαμάκια. «Clap your hands» είναι το παιχνίδι με τα παλαμάκια!',
      en: '“Clap” means to hit your hands together. “Clap your hands” is the clapping game!',
    },
  },
  {
    q: { el: 'Τι κάνεις όταν ακούς «Stamp your feet»;', en: 'What do you do when you hear “Stamp your feet”?' },
    options: { el: ['Κουνάω το κεφάλι', 'Κλείνω τα μάτια', 'Χτυπάω τα πόδια στο πάτωμα', 'Χτυπάω παλαμάκια'], en: ['I shake my head', 'I close my eyes', 'I stamp my feet on the floor', 'I clap my hands'] },
    correct: 2,
    explanation: {
      el: '«Stamp your feet» = χτύπα τα πόδια σου στο πάτωμα. «Feet» είναι τα πέλματα, τα δύο πόδια.',
      en: '“Stamp your feet” means hit the floor with your feet. “Feet” means both of your feet — one foot, two feet.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει «Close your eyes». Τι πρέπει να κάνεις;', en: 'Eleni says “Close your eyes”. What should you do?' },
    options: { el: ['Να ανοίξεις τα μάτια σου', 'Να κλείσεις τα μάτια σου', 'Να κλείσεις το στόμα σου', 'Να αγγίξεις τα μάτια σου'], en: ['Open your eyes', 'Close your eyes', 'Close your mouth', 'Touch your eyes'] },
    correct: 1,
    explanation: {
      el: '«Close» = κλείσε, «Open» = άνοιξε. «Close your eyes» = Κλείσε τα μάτια σου.',
      en: '“Close” is the opposite of “open”. “Close your eyes” means shut them.',
    },
  },
  {
    q: { el: 'Θέλεις να πεις «Άνοιξε το στόμα σου». Βάλε τις λέξεις στη σωστή σειρά.', en: 'You want to say «Άνοιξε το στόμα σου». Put the words in the right order.' },
    options: { el: ['Your mouth open.', 'Mouth your open.', 'Open your mouth.', 'Open mouth your.'], en: ['Your mouth open.', 'Mouth your open.', 'Open your mouth.', 'Open mouth your.'] },
    correct: 2,
    explanation: {
      el: 'Στην εντολή, πρώτα πάει το ρήμα: «Open your mouth.» Ρήμα – your – μέρος του σώματος.',
      en: 'In a command the verb goes first: “Open your mouth.” Verb – your – body part.',
    },
  },
];
