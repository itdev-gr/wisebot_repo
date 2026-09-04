/**
 * Γ' Δημοτικού · Γλώσσα · Αντωνυμίες
 * ====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–3   what a pronoun is: a word that stands in for a noun (Ο Νίκος → αυτός)
 *   4–8   personal pronouns: εγώ, εσύ, αυτός/αυτή/αυτό, εμείς, εσείς, αυτοί/αυτές/αυτά —
 *         matching the person and the number
 *   9–13  possessive pronouns: μου, σου, του, της, μας, τους — whose is it?
 *   14–16 demonstrative pronouns: αυτός (near) vs εκείνος (far), in the right gender
 *   17–18 agreement in gender and number: the pronoun must match the noun it replaces
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_PRONOUNS: QuizQuestion[] = [
  // ── 1–3: what a pronoun does ────────────────────────────────────────────────
  {
    q: { el: 'Στη θέση ποιας λέξης μπαίνουν οι αντωνυμίες;', en: 'What kind of word do pronouns (αντωνυμίες) take the place of?' },
    options: { el: ['ενός ρήματος', 'ενός ουσιαστικού (ονόματος)', 'ενός επιθέτου', 'ενός άρθρου'], en: ['a verb', 'a noun (a name)', 'an adjective', 'an article'] },
    correct: 1,
    explanation: {
      el: 'Η αντωνυμία μπαίνει αντί για το όνομα, για να μην το λέμε συνέχεια: «Ο Νίκος τρέχει» → «Αυτός τρέχει».',
      en: 'A pronoun stands in for the noun, so we do not keep repeating it: «Ο Νίκος τρέχει» → «Αυτός τρέχει».',
    },
  },
  {
    q: { el: '«Η Ελένη διαβάζει πολύ. ___ αγαπάει τα βιβλία.» Ποια αντωνυμία μπαίνει στη θέση του «η Ελένη»;', en: '«Η Ελένη διαβάζει πολύ. ___ αγαπάει τα βιβλία.» (Eleni reads a lot. ___ loves books.) Which pronoun replaces «η Ελένη»?' },
    options: { el: ['Αυτός', 'Αυτό', 'Αυτή', 'Αυτοί'], en: ['Αυτός', 'Αυτό', 'Αυτή', 'Αυτοί'] },
    correct: 2,
    explanation: {
      el: 'Η Ελένη είναι κορίτσι, δηλαδή θηλυκό, και είναι ένα πρόσωπο. Η αντωνυμία που ταιριάζει είναι «αυτή».',
      en: 'Eleni is a girl, so feminine, and one person. The matching pronoun is «αυτή» (she).',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντωνυμία στην πρόταση «Εμείς πάμε στο σχολείο με τα πόδια»;', en: 'Which word is a pronoun in the sentence «Εμείς πάμε στο σχολείο με τα πόδια» (We walk to school)?' },
    options: { el: ['Εμείς', 'πάμε', 'σχολείο', 'πόδια'], en: ['Εμείς', 'πάμε', 'σχολείο', 'πόδια'] },
    correct: 0,
    explanation: {
      el: 'Το «εμείς» δείχνει ποιοι πάνε στο σχολείο χωρίς να λέει τα ονόματά τους. Είναι προσωπική αντωνυμία.',
      en: '«Εμείς» (we) shows who is going to school without saying their names. It is a personal pronoun.',
    },
  },

  // ── 4–8: personal pronouns ──────────────────────────────────────────────────
  {
    q: { el: '«___ είμαι οχτώ χρονών.» Ποια αντωνυμία ταιριάζει;', en: '«___ είμαι οχτώ χρονών.» (___ am eight years old.) Which pronoun fits?' },
    options: { el: ['Εσύ', 'Εγώ', 'Αυτός', 'Εμείς'], en: ['Εσύ', 'Εγώ', 'Αυτός', 'Εμείς'] },
    correct: 1,
    explanation: {
      el: 'Το ρήμα «είμαι» ταιριάζει με το «εγώ». Θυμήσου: εγώ είμαι, εσύ είσαι, αυτός είναι, εμείς είμαστε.',
      en: 'The verb «είμαι» (I am) goes with «εγώ» (I). Remember: εγώ είμαι, εσύ είσαι, αυτός είναι, εμείς είμαστε.',
    },
  },
  {
    q: { el: '«___ παίζετε στην αυλή;» Ποια αντωνυμία ταιριάζει;', en: '«___ παίζετε στην αυλή;» (Are ___ playing in the yard?) Which pronoun fits?' },
    options: { el: ['Εσείς', 'Εμείς', 'Εσύ', 'Αυτοί'], en: ['Εσείς', 'Εμείς', 'Εσύ', 'Αυτοί'] },
    correct: 0,
    explanation: {
      el: 'Η κατάληξη -ετε του ρήματος «παίζετε» μας δείχνει το «εσείς», δηλαδή πολλά πρόσωπα στα οποία μιλάμε.',
      en: 'The ending -ετε of «παίζετε» points to «εσείς» (you, plural), that is, several people we are talking to.',
    },
  },
  {
    q: { el: 'Ποια από τις αντωνυμίες δείχνει πολλά πρόσωπα (πληθυντικός αριθμός);', en: 'Which of these pronouns shows several people (plural)?' },
    options: { el: ['εγώ', 'εσύ', 'αυτή', 'εμείς'], en: ['εγώ', 'εσύ', 'αυτή', 'εμείς'] },
    correct: 3,
    explanation: {
      el: 'Το «εμείς» σημαίνει «εγώ και άλλοι μαζί», άρα είναι πληθυντικός. Τα εγώ, εσύ, αυτή δείχνουν ένα μόνο πρόσωπο.',
      en: '«Εμείς» (we) means “me and others together”, so it is plural. εγώ, εσύ, αυτή each show just one person.',
    },
  },
  {
    q: { el: '«Ο Γιώργος και ο Πέτρος παίζουν μπάλα. ___ είναι φίλοι.» Ποια αντωνυμία ταιριάζει;', en: '«Ο Γιώργος και ο Πέτρος παίζουν μπάλα. ___ είναι φίλοι.» (Giorgos and Petros play ball. ___ are friends.) Which pronoun fits?' },
    options: { el: ['Αυτός', 'Αυτές', 'Αυτοί', 'Αυτά'], en: ['Αυτός', 'Αυτές', 'Αυτοί', 'Αυτά'] },
    correct: 2,
    explanation: {
      el: 'Δύο αγόρια = αρσενικό και πληθυντικός. Η αντωνυμία που ταιριάζει είναι «αυτοί».',
      en: 'Two boys = masculine and plural. The matching pronoun is «αυτοί» (they, masculine).',
    },
  },
  {
    q: { el: '«Τα παιδιά τρέχουν στο πάρκο. ___ είναι πολύ χαρούμενα.» Ποια αντωνυμία ταιριάζει;', en: '«Τα παιδιά τρέχουν στο πάρκο. ___ είναι πολύ χαρούμενα.» (The children run in the park. ___ are very happy.) Which pronoun fits?' },
    options: { el: ['Αυτοί', 'Αυτές', 'Αυτό', 'Αυτά'], en: ['Αυτοί', 'Αυτές', 'Αυτό', 'Αυτά'] },
    correct: 3,
    explanation: {
      el: '«Τα παιδιά» είναι ουδέτερο και πληθυντικός (τα). Άρα η αντωνυμία είναι «αυτά», όπως και το «χαρούμενα».',
      en: '«Τα παιδιά» is neuter and plural (τα). So the pronoun is «αυτά», just like «χαρούμενα».',
    },
  },

  // ── 9–13: possessive pronouns ───────────────────────────────────────────────
  {
    q: { el: '«Αυτό είναι το βιβλίο ___.» Το βιβλίο ανήκει σε εμένα. Ποια λέξη λείπει;', en: '«Αυτό είναι το βιβλίο ___.» (This is ___ book.) The book belongs to me. Which word is missing?' },
    options: { el: ['μου', 'σου', 'του', 'μας'], en: ['μου', 'σου', 'του', 'μας'] },
    correct: 0,
    explanation: {
      el: 'Όταν κάτι ανήκει σε εμένα, λέμε «μου»: το βιβλίο μου. Το «σου» είναι για εσένα, το «του» για εκείνον.',
      en: 'When something belongs to me, we say «μου» (my): το βιβλίο μου. «σου» is for you, «του» for him.',
    },
  },
  {
    q: { el: 'Ποια λέξη δείχνει σε ποιον ανήκει κάτι στην πρόταση «Η τσάντα σου είναι κόκκινη»;', en: 'Which word shows whose something is in the sentence «Η τσάντα σου είναι κόκκινη» (Your bag is red)?' },
    options: { el: ['τσάντα', 'σου', 'κόκκινη', 'είναι'], en: ['τσάντα', 'σου', 'κόκκινη', 'είναι'] },
    correct: 1,
    explanation: {
      el: 'Το «σου» λέει ότι η τσάντα ανήκει σε εσένα. Οι λέξεις μου, σου, του, της, μας, σας, τους είναι κτητικές αντωνυμίες.',
      en: '«σου» says the bag belongs to you. The words μου, σου, του, της, μας, σας, τους are possessive pronouns.',
    },
  },
  {
    q: { el: '«Η Μαρία έχει έναν σκύλο. Ο σκύλος ___ λέγεται Άρης.» Ποια λέξη λείπει;', en: '«Η Μαρία έχει έναν σκύλο. Ο σκύλος ___ λέγεται Άρης.» (Maria has a dog. ___ dog is called Aris.) Which word is missing?' },
    options: { el: ['του', 'της', 'μου', 'τους'], en: ['του', 'της', 'μου', 'τους'] },
    correct: 1,
    explanation: {
      el: 'Ο σκύλος ανήκει στη Μαρία, που είναι κορίτσι: ο σκύλος της. Αν ανήκε στον Νίκο, θα λέγαμε «ο σκύλος του».',
      en: 'The dog belongs to Maria, who is a girl: ο σκύλος της (her dog). If it belonged to Nikos we would say «ο σκύλος του».',
    },
  },
  {
    q: { el: '«Εμείς έχουμε ένα σπίτι στο χωριό. Το σπίτι ___ έχει μεγάλο κήπο.» Ποια λέξη λείπει;', en: '«Εμείς έχουμε ένα σπίτι στο χωριό. Το σπίτι ___ έχει μεγάλο κήπο.» (We have a house in the village. ___ house has a big garden.) Which word is missing?' },
    options: { el: ['μας', 'σας', 'μου', 'τους'], en: ['μας', 'σας', 'μου', 'τους'] },
    correct: 0,
    explanation: {
      el: 'Το σπίτι ανήκει σε «εμάς», άρα λέμε «το σπίτι μας». Το «μου» θα ήταν μόνο για ένα άτομο.',
      en: 'The house belongs to “us”, so we say «το σπίτι μας» (our house). «μου» would be for one person only.',
    },
  },
  {
    q: { el: '«Τα παιδιά φόρεσαν τα παλτά ___ και βγήκαν έξω.» Ποια λέξη λείπει;', en: '«Τα παιδιά φόρεσαν τα παλτά ___ και βγήκαν έξω.» (The children put on ___ coats and went out.) Which word is missing?' },
    options: { el: ['του', 'της', 'τους', 'μας'], en: ['του', 'της', 'τους', 'μας'] },
    correct: 2,
    explanation: {
      el: 'Τα παλτά ανήκουν στα παιδιά, δηλαδή σε πολλούς: τα παλτά τους. Για έναν θα λέγαμε «του» ή «της».',
      en: 'The coats belong to the children, that is, to many: τα παλτά τους (their coats). For one person we would say «του» or «της».',
    },
  },

  // ── 14–16: demonstrative pronouns ───────────────────────────────────────────
  {
    q: { el: 'Ποια αντωνυμία χρησιμοποιούμε για να δείξουμε κάτι που είναι μακριά μας;', en: 'Which pronoun do we use to point to something that is far away from us?' },
    options: { el: ['εκείνος', 'αυτός', 'εγώ', 'μου'], en: ['εκείνος', 'αυτός', 'εγώ', 'μου'] },
    correct: 0,
    explanation: {
      el: 'Για κάτι κοντά λέμε «αυτός», για κάτι μακριά λέμε «εκείνος». Και οι δύο είναι δεικτικές αντωνυμίες, γιατί δείχνουν.',
      en: 'For something near we say «αυτός» (this), for something far we say «εκείνος» (that). Both are demonstrative pronouns, because they point.',
    },
  },
  {
    q: { el: '«___ το μολύβι εδώ είναι δικό μου· ___ εκεί πέρα είναι δικό σου.» Ποιες αντωνυμίες ταιριάζουν;', en: '«___ το μολύβι εδώ είναι δικό μου· ___ εκεί πέρα είναι δικό σου.» (___ pencil here is mine; ___ one over there is yours.) Which pronouns fit?' },
    options: { el: ['Εκείνο … αυτό', 'Αυτός … εκείνος', 'Εκείνη … αυτή', 'Αυτό … εκείνο'], en: ['Εκείνο … αυτό', 'Αυτός … εκείνος', 'Εκείνη … αυτή', 'Αυτό … εκείνο'] },
    correct: 3,
    explanation: {
      el: '«Εδώ» = κοντά, άρα «αυτό». «Εκεί πέρα» = μακριά, άρα «εκείνο». Το μολύβι είναι ουδέτερο, γι\' αυτό λέμε αυτό / εκείνο, όχι αυτός / εκείνος.',
      en: '“Here” = near, so «αυτό». “Over there” = far, so «εκείνο». Το μολύβι is neuter, so we say αυτό / εκείνο, not αυτός / εκείνος.',
    },
  },
  {
    q: { el: '«___ η κυρία που στέκεται μακριά, στην πόρτα, είναι η δασκάλα μας.» Ποια αντωνυμία ταιριάζει;', en: '«___ η κυρία που στέκεται μακριά, στην πόρτα, είναι η δασκάλα μας.» (___ lady standing far off, by the door, is our teacher.) Which pronoun fits?' },
    options: { el: ['Εκείνος', 'Εκείνη', 'Εκείνο', 'Εκείνες'], en: ['Εκείνος', 'Εκείνη', 'Εκείνο', 'Εκείνες'] },
    correct: 1,
    explanation: {
      el: 'Η κυρία είναι μακριά, άρα «εκείν-». Είναι θηλυκό και μία, άρα «εκείνη». Το «εκείνες» θα ήταν για πολλές κυρίες.',
      en: 'The lady is far away, so «εκείν-». She is feminine and one, so «εκείνη». «Εκείνες» would be for several ladies.',
    },
  },

  // ── 17–18: agreement in gender and number ───────────────────────────────────
  {
    q: { el: '«___ τα παπούτσια είναι καινούργια.» Ποια αντωνυμία ταιριάζει;', en: '«___ τα παπούτσια είναι καινούργια.» (___ shoes are new.) Which pronoun fits?' },
    options: { el: ['Αυτός', 'Αυτή', 'Αυτά', 'Αυτοί'], en: ['Αυτός', 'Αυτή', 'Αυτά', 'Αυτοί'] },
    correct: 2,
    explanation: {
      el: 'Η αντωνυμία συμφωνεί με το ουσιαστικό: «τα παπούτσια» είναι ουδέτερο, πληθυντικός → «αυτά τα παπούτσια».',
      en: 'The pronoun agrees with the noun: «τα παπούτσια» is neuter plural → «αυτά τα παπούτσια».',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η αντωνυμία συμφωνεί σωστά με το όνομα που αντικαθιστά;', en: 'In which sentence does the pronoun agree correctly with the noun it replaces?' },
    options: {
      el: ['Η γιαγιά μου φτιάχνει γλυκά. Αυτός είναι πολύ γλυκιά.', 'Οι φίλες μου παίζουν. Αυτό γελάνε συνέχεια.', 'Ο μπαμπάς μου οδηγεί. Αυτή είναι πολύ προσεκτικός.', 'Το γατάκι κοιμάται. Αυτό είναι κουρασμένο.'],
      en: ['Η γιαγιά μου φτιάχνει γλυκά. Αυτός είναι πολύ γλυκιά. (grandma → he)', 'Οι φίλες μου παίζουν. Αυτό γελάνε συνέχεια. (my girl friends → it)', 'Ο μπαμπάς μου οδηγεί. Αυτή είναι πολύ προσεκτικός. (dad → she)', 'Το γατάκι κοιμάται. Αυτό είναι κουρασμένο. (the kitten → it)'],
    },
    correct: 3,
    explanation: {
      el: '«Το γατάκι» είναι ουδέτερο, ένα → «αυτό». Στις άλλες η αντωνυμία δεν ταιριάζει: η γιαγιά θέλει «αυτή», οι φίλες «αυτές», ο μπαμπάς «αυτός».',
      en: '«Το γατάκι» is neuter, one → «αυτό». In the others the pronoun does not match: η γιαγιά needs «αυτή», οι φίλες «αυτές», ο μπαμπάς «αυτός».',
    },
  },
];
