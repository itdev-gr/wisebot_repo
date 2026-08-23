/**
 * Δ' Δημοτικού · Γλώσσα · Αντωνυμίες
 * ====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Level: 9–10 ετών.
 *
 * What the unit covers, in order:
 *   1–4   personal pronouns: εγώ/εσύ/αυτός…, picking the right person and gender
 *   5–8   possessive pronouns: μου, σου, του/της, μας, σας, τους
 *   9–11  demonstrative pronouns: αυτός (near), εκείνος (far), τέτοιος
 *   12–14 interrogative pronouns: ποιος, πόσος, τι — and the spelling «ποιος» (no accent)
 *   15–16 weak forms: μου vs με, σου vs σε (the mix-ups children really make)
 *   17–18 accent on the weak form: «ο φίλος μου» vs «ο φίλος μού είπε»
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_PRONOUNS: QuizQuestion[] = [
  // ── 1–4: personal pronouns ──────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «___ είμαι ο Νίκος.»', en: 'Fill in: «___ είμαι ο Νίκος.» (“___ am Nikos.”)' },
    options: { el: ['Εγώ', 'Εσύ', 'Αυτός', 'Εμείς'], en: ['Εγώ', 'Εσύ', 'Αυτός', 'Εμείς'] },
    correct: 0,
    explanation: {
      el: 'Όταν μιλάω για τον εαυτό μου, λέω «εγώ». Το ρήμα «είμαι» ταιριάζει με το «εγώ».',
      en: 'When I talk about myself I say «εγώ» (I). The verb «είμαι» (I am) goes with «εγώ».',
    },
  },
  {
    q: { el: 'Η Μαρία παίζει στην αυλή. ___ παίζει στην αυλή.', en: 'Maria is playing in the yard. «___ παίζει στην αυλή.» Which pronoun replaces “Maria”?' },
    options: { el: ['Αυτός', 'Αυτή', 'Αυτό', 'Αυτές'], en: ['Αυτός', 'Αυτή', 'Αυτό', 'Αυτές'] },
    correct: 1,
    explanation: {
      el: 'Η Μαρία είναι ένα κορίτσι, άρα λέμε «αυτή». Για αγόρι λέμε «αυτός», για πράγμα «αυτό».',
      en: 'Maria is one girl, so we say «αυτή» (she). For a boy we say «αυτός», for a thing «αυτό».',
    },
  },
  {
    q: { el: 'Ο Γιώργος και εγώ τρέχουμε. ___ τρέχουμε.', en: 'Giorgos and I are running. «___ τρέχουμε.» Which pronoun fits?' },
    options: { el: ['Εσείς', 'Αυτοί', 'Εμείς', 'Εγώ'], en: ['Εσείς', 'Αυτοί', 'Εμείς', 'Εγώ'] },
    correct: 2,
    explanation: {
      el: 'Όταν είμαι κι εγώ μέσα στην ομάδα, λέμε «εμείς». Το ρήμα «τρέχουμε» το δείχνει κιόλας.',
      en: 'When I am part of the group, we say «εμείς» (we). The verb «τρέχουμε» (we run) shows it too.',
    },
  },
  {
    q: { el: 'Η Ελένη αγαπάει τον σκύλο της. ___ αγαπάει πολύ.', en: 'Eleni loves her dog. «___ αγαπάει πολύ.» Which word replaces “the dog”?' },
    options: { el: ['Τον', 'Την', 'Το', 'Τους'], en: ['Τον', 'Την', 'Το', 'Τους'] },
    correct: 0,
    explanation: {
      el: '«Ο σκύλος» είναι αρσενικό, άρα λέμε «τον αγαπάει». Το «τον» είναι αδύνατος τύπος της προσωπικής αντωνυμίας.',
      en: '«Ο σκύλος» (the dog) is masculine, so we say «τον αγαπάει» (she loves him). «Τον» is the weak form of the personal pronoun.',
    },
  },

  // ── 5–8: possessive pronouns ────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Αυτό είναι το βιβλίο ___.» (είναι δικό μου)', en: 'Fill in: «Αυτό είναι το βιβλίο ___.» (“This is my book.”)' },
    options: { el: ['μου', 'σου', 'του', 'μας'], en: ['μου', 'σου', 'του', 'μας'] },
    correct: 0,
    explanation: {
      el: 'Το «μου» δείχνει ότι κάτι είναι δικό μου. Οι κτητικές αντωνυμίες μπαίνουν μετά το ουσιαστικό: «το βιβλίο μου».',
      en: '«Μου» shows that something is mine. Possessive pronouns come after the noun: «το βιβλίο μου» (my book).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η Μαρία έχασε το μολύβι ___.»', en: 'Fill in: «Η Μαρία έχασε το μολύβι ___.» (“Maria lost her pencil.”)' },
    options: { el: ['του', 'της', 'τους', 'σας'], en: ['του', 'της', 'τους', 'σας'] },
    correct: 1,
    explanation: {
      el: 'Η Μαρία είναι κορίτσι, άρα το μολύβι είναι δικό «της». Για αγόρι θα λέγαμε «το μολύβι του».',
      en: 'Maria is a girl, so the pencil is «της» (hers). For a boy we would say «το μολύβι του» (his pencil).',
    },
  },
  {
    q: { el: 'Η δασκάλα ρωτάει: «Παιδιά, πού είναι οι τσάντες ___;»', en: 'The teacher asks: «Παιδιά, πού είναι οι τσάντες ___;» (“Children, where are your bags?”)' },
    options: { el: ['μας', 'σου', 'σας', 'τους'], en: ['μας', 'σου', 'σας', 'τους'] },
    correct: 2,
    explanation: {
      el: 'Η δασκάλα μιλάει σε πολλά παιδιά, άρα λέει «οι τσάντες σας». Σε ένα παιδί θα έλεγε «η τσάντα σου».',
      en: 'The teacher is talking to many children, so she says «σας» (your, plural). To one child she would say «η τσάντα σου».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Τα παιδιά φορούν τα καπέλα ___.»', en: 'Fill in: «Τα παιδιά φορούν τα καπέλα ___.» (“The children are wearing their hats.”)' },
    options: { el: ['του', 'της', 'μας', 'τους'], en: ['του', 'της', 'μας', 'τους'] },
    correct: 3,
    explanation: {
      el: 'Τα καπέλα ανήκουν σε πολλά παιδιά, άρα λέμε «τα καπέλα τους». Το «τους» είναι για πολλούς.',
      en: 'The hats belong to many children, so we say «τα καπέλα τους» (their hats). «Τους» is for more than one person.',
    },
  },

  // ── 9–11: demonstrative pronouns ────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «___ το παιχνίδι εδώ είναι δικό μου.»', en: 'Fill in: «___ το παιχνίδι εδώ είναι δικό μου.» (“This toy here is mine.”)' },
    options: { el: ['Εκείνο', 'Αυτό', 'Τέτοιο', 'Τόσο'], en: ['Εκείνο', 'Αυτό', 'Τέτοιο', 'Τόσο'] },
    correct: 1,
    explanation: {
      el: 'Για κάτι που είναι κοντά μας («εδώ») λέμε «αυτό». Το «εκείνο» είναι για κάτι μακριά.',
      en: 'For something near us («εδώ» = here) we say «αυτό» (this). «Εκείνο» (that) is for something far away.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Βλέπεις ___ το βουνό μακριά;»', en: 'Fill in: «Βλέπεις ___ το βουνό μακριά;» (“Do you see that mountain far away?”)' },
    options: { el: ['εκείνο', 'αυτό', 'τέτοιο', 'τόσο'], en: ['εκείνο', 'αυτό', 'τέτοιο', 'τόσο'] },
    correct: 0,
    explanation: {
      el: 'Το βουνό είναι «μακριά», άρα λέμε «εκείνο το βουνό». Αυτό = κοντά, εκείνο = μακριά.',
      en: 'The mountain is «μακριά» (far away), so we say «εκείνο το βουνό». Αυτό = near, εκείνο = far.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι δεικτική αντωνυμία; «Θέλω κι εγώ τέτοιο ποδήλατο!»', en: 'Which word is a demonstrative pronoun? «Θέλω κι εγώ τέτοιο ποδήλατο!» (“I want a bike like that too!”)' },
    options: { el: ['θέλω', 'εγώ', 'τέτοιο', 'ποδήλατο'], en: ['θέλω', 'εγώ', 'τέτοιο', 'ποδήλατο'] },
    correct: 2,
    explanation: {
      el: 'Το «τέτοιο» δείχνει τι είδους ποδήλατο θέλω, γι\' αυτό είναι δεικτική. Το «εγώ» είναι αντωνυμία, αλλά προσωπική.',
      en: '«Τέτοιο» (such, like that) points to what kind of bike I want, so it is demonstrative. «Εγώ» is a pronoun too, but a personal one.',
    },
  },

  // ── 12–14: interrogative pronouns ───────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε την ερώτηση: «___ είναι η δασκάλα σας;»', en: 'Complete the question: «___ είναι η δασκάλα σας;» (“Who is your teacher?”)' },
    options: { el: ['Ποιος', 'Ποια', 'Ποιο', 'Πόση'], en: ['Ποιος', 'Ποια', 'Ποιο', 'Πόση'] },
    correct: 1,
    explanation: {
      el: 'Η δασκάλα είναι θηλυκό, άρα ρωτάμε «ποια». Η ερωτηματική αντωνυμία αλλάζει γένος όπως το ουσιαστικό.',
      en: '«Η δασκάλα» is feminine, so we ask «ποια» (who, feminine). The interrogative pronoun changes gender to match the noun.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την ερώτηση: «___ μήλα έφαγες;»', en: 'Complete the question: «___ μήλα έφαγες;» (“How many apples did you eat?”)' },
    options: { el: ['Πόσο', 'Πόσα', 'Πόσες', 'Πόσοι'], en: ['Πόσο', 'Πόσα', 'Πόσες', 'Πόσοι'] },
    correct: 1,
    explanation: {
      el: '«Τα μήλα» είναι ουδέτερο και πολλά, άρα ρωτάμε «πόσα μήλα». «Πόσες» θα λέγαμε για τις μπανάνες, «πόσοι» για τους φίλους.',
      en: '«Τα μήλα» is neuter plural, so we ask «πόσα». We would say «πόσες» for bananas (feminine) and «πόσοι» for friends (masculine).',
    },
  },
  {
    q: { el: 'Πώς γράφεται σωστά η ερωτηματική αντωνυμία στη φράση «___ χτύπησε το κουδούνι;»', en: 'How is the interrogative pronoun spelled correctly in «___ χτύπησε το κουδούνι;» (“Who rang the bell?”)' },
    options: { el: ['Ποιός', 'Ποίος', 'Ποιος', 'Πιος'], en: ['Ποιός', 'Ποίος', 'Ποιος', 'Πιος'] },
    correct: 2,
    explanation: {
      el: 'Το «ποιος» είναι μονοσύλλαβο (ποιος = μία συλλαβή), γι\' αυτό δεν παίρνει τόνο. Γράφεται με «οι».',
      en: '«Ποιος» has only one syllable, so it takes no accent. It is spelled with «οι».',
    },
  },

  // ── 15–16: weak forms μου/με, σου/σε ────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Ο Γιώργος ___ έδωσε ένα δώρο.» (σε εμένα)', en: 'Fill in: «Ο Γιώργος ___ έδωσε ένα δώρο.» (“Giorgos gave me a present.”)' },
    options: { el: ['μου', 'εμένα', 'με', 'μας'], en: ['μου', 'εμένα', 'με', 'μας'] },
    correct: 0,
    explanation: {
      el: 'Όταν κάποιος δίνει κάτι «σε εμένα», ο αδύνατος τύπος είναι «μου»: «μου έδωσε». Το «με» το λέμε όταν κάποιος «βλέπει εμένα»: «με βλέπει».',
      en: 'When someone gives something “to me”, the weak form is «μου»: «μου έδωσε». «Με» is used when someone sees me: «με βλέπει».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η Ελένη ___ βλέπει από το παράθυρο.» (βλέπει εσένα)', en: 'Fill in: «Η Ελένη ___ βλέπει από το παράθυρο.» (“Eleni sees you from the window.”)' },
    options: { el: ['σου', 'σε', 'εσύ', 'σας'], en: ['σου', 'σε', 'εσύ', 'σας'] },
    correct: 1,
    explanation: {
      el: 'Η Ελένη βλέπει «εσένα», και ο αδύνατος τύπος του «εσένα» είναι «σε»: «σε βλέπει». Το «σου» το χρησιμοποιούμε όταν δίνουμε ή λέμε κάτι «σε εσένα»: «σου δίνω».',
      en: 'Eleni sees “you”, and the weak form of «εσένα» is «σε»: «σε βλέπει». We use «σου» when we give or say something “to you”: «σου δίνω».',
    },
  },

  // ── 17–18: accent on the weak form (μου vs μού) ─────────────────────────────
  {
    q: { el: 'Γιατί το «μού» έχει τόνο στην πρόταση «Ο Νίκος μού έδωσε το βιβλίο.»;', en: 'Why does «μού» have an accent in «Ο Νίκος μού έδωσε το βιβλίο.» (“Nikos gave me the book.”)?' },
    options: {
      el: ['Για να μην το διαβάσουμε «ο Νίκος μου» (ο δικός μου Νίκος)', 'Γιατί είναι στην αρχή της πρότασης', 'Γιατί όλες οι αντωνυμίες παίρνουν τόνο', 'Γιατί μετά έρχεται ρήμα'],
      en: ['So we do not read it as «ο Νίκος μου» (my Nikos)', 'Because it is at the start of the sentence', 'Because all pronouns take an accent', 'Because a verb comes after it'],
    },
    correct: 0,
    explanation: {
      el: 'Χωρίς τόνο, το «ο Νίκος μου έδωσε» μπορεί να σημαίνει «ο δικός μου Νίκος έδωσε». Ο τόνος στο «μού» δείχνει ότι ο Νίκος έδωσε κάτι σε εμένα.',
      en: 'Without the accent, «ο Νίκος μου έδωσε» could mean “my Nikos gave”. The accent on «μού» shows that Nikos gave something to me.',
    },
  },
  {
    q: { el: 'Η γιαγιά μαγείρεψε φακές για εμένα. Πώς το γράφουμε σωστά;', en: 'Grandma cooked lentils for me. Which spelling is correct?' },
    options: {
      el: ['Η γιαγιά μου μαγείρεψε φακές.', 'Η γιαγιά μού μαγείρεψε φακές.', 'Η γιαγιά με μαγείρεψε φακές.', 'Η γιαγιά εμένα μαγείρεψε φακές.'],
      en: ['Η γιαγιά μου μαγείρεψε φακές.', 'Η γιαγιά μού μαγείρεψε φακές.', 'Η γιαγιά με μαγείρεψε φακές.', 'Η γιαγιά εμένα μαγείρεψε φακές.'],
    },
    correct: 1,
    explanation: {
      el: '«Η γιαγιά μου μαγείρεψε» σημαίνει «η δική μου γιαγιά μαγείρεψε». Για να πούμε ότι μαγείρεψε για εμένα, βάζουμε τόνο: «μού μαγείρεψε».',
      en: '«Η γιαγιά μου μαγείρεψε» means “my grandma cooked”. To say she cooked for me, we add the accent: «μού μαγείρεψε».',
    },
  },
];
