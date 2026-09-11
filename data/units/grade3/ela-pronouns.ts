/**
 * Γ' Δημοτικού · English Language Arts · Pronouns
 * ================================================
 * Original questions for a native English-speaking child of 8–9 (curriculum topics only).
 * The `en` fields are the real content; `el` is a translation for a Greek-speaking parent.
 *
 * What the unit covers, in order:
 *   1–5   subject pronouns: replacing the noun marked «like this» with he / she / it / they / we
 *   6–9   I vs me: who does the action, who receives it, "Sam and I" / "with Anna and me"
 *   10–14 belonging words: his / her / their / our / its
 *   15–18 which pronoun matches the noun: one or many, person or thing
 *
 * Distractors are the real mistakes: "me and Sam went", "gave it to I", his/her swapped,
 * "she book", it/they for the wrong number.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ELA_PRONOUNS: QuizQuestion[] = [
  // ── 1–5: subject pronouns ──────────────────────────────────────────────────
  {
    q: { el: 'Διάβασε: «Ben» plays soccer. Ποια αντωνυμία μπορεί να αντικαταστήσει το «Ben»;', en: 'Read: «Ben» plays soccer. Which pronoun can replace «Ben»?' },
    options: { el: ['She', 'It', 'He', 'They'], en: ['She', 'It', 'He', 'They'] },
    correct: 2,
    explanation: {
      el: 'Ο Ben είναι ένα αγόρι, οπότε χρησιμοποιούμε he: He plays soccer. Η αντωνυμία είναι μια λέξη που παίρνει τη θέση ενός ουσιαστικού.',
      en: 'Ben is one boy, so we use he: He plays soccer. A pronoun is a word that takes the place of a noun.',
    },
  },
  {
    q: { el: 'Διάβασε: «Mia» likes to draw. Ποια αντωνυμία μπορεί να αντικαταστήσει το «Mia»;', en: 'Read: «Mia» likes to draw. Which pronoun can replace «Mia»?' },
    options: { el: ['She', 'He', 'We', 'It'], en: ['She', 'He', 'We', 'It'] },
    correct: 0,
    explanation: {
      el: 'Η Mia είναι ένα κορίτσι, οπότε χρησιμοποιούμε she: She likes to draw.',
      en: 'Mia is one girl, so we use she: She likes to draw.',
    },
  },
  {
    q: { el: 'Διάβασε: «The box» is heavy. Ποια αντωνυμία μπορεί να αντικαταστήσει το «The box»;', en: 'Read: «The box» is heavy. Which pronoun can replace «The box»?' },
    options: { el: ['She', 'We', 'It', 'They'], en: ['She', 'We', 'It', 'They'] },
    correct: 2,
    explanation: {
      el: 'Το κουτί είναι πράγμα, όχι πρόσωπο, οπότε χρησιμοποιούμε it: It is heavy.',
      en: 'A box is a thing, not a person, so we use it: It is heavy.',
    },
  },
  {
    q: { el: 'Διάβασε: «Ben and Mia» are twins. Ποια αντωνυμία μπορεί να αντικαταστήσει το «Ben and Mia»;', en: 'Read: «Ben and Mia» are twins. Which pronoun can replace «Ben and Mia»?' },
    options: { el: ['He', 'She', 'We', 'They'], en: ['He', 'She', 'We', 'They'] },
    correct: 3,
    explanation: {
      el: 'Ο Ben και η Mia είναι δύο πρόσωπα, οπότε χρησιμοποιούμε they: They are twins. Το they είναι για περισσότερα από ένα πρόσωπα ή πράγματα.',
      en: 'Ben and Mia are two people, so we use they: They are twins. They is for more than one person or thing.',
    },
  },
  {
    q: { el: 'Διάβασε: «My sister and I» walk to school. Ποια αντωνυμία μπορεί να αντικαταστήσει το «My sister and I»;', en: 'Read: «My sister and I» walk to school. Which pronoun can replace «My sister and I»?' },
    options: { el: ['We', 'They', 'She', 'You'], en: ['We', 'They', 'She', 'You'] },
    correct: 0,
    explanation: {
      el: 'Όταν είσαι κι εσύ μέσα στην ομάδα, χρησιμοποιείς we: We walk to school. My sister and I σημαίνει we.',
      en: 'When you are part of the group, use we: We walk to school. My sister and I means we.',
    },
  },

  // ── 6–9: I vs me ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Me and Sam went to the park.', 'Sam and me went to the park.', 'Sam and I went to the park.', 'Me went to the park with Sam.'], en: ['Me and Sam went to the park.', 'Sam and me went to the park.', 'Sam and I went to the park.', 'Me went to the park with Sam.'] },
    correct: 2,
    explanation: {
      el: 'Χρησιμοποιούμε I όταν εμείς κάνουμε την ενέργεια. Δοκίμασέ το μόνο του: «I went to the park», όχι «Me went». Επίσης λέμε πρώτα το όνομα του άλλου: Sam and I.',
      en: 'Use I when you are doing the action. Try it alone: "I went to the park", not "Me went". We also say the other person\'s name first: Sam and I.',
    },
  },
  {
    q: { el: 'Διάλεξε τη σωστή λέξη: «Dad gave the ball to ___.»', en: 'Choose the right word: «Dad gave the ball to ___.»' },
    options: { el: ['I', 'me', 'we', 'he'], en: ['I', 'me', 'we', 'he'] },
    correct: 1,
    explanation: {
      el: 'Χρησιμοποιούμε me όταν η ενέργεια γίνεται ΣΕ εμάς. Dad gave the ball to me. Δοκίμασέ το: λέμε «gave it to me», ποτέ «to I».',
      en: 'Use me when the action happens TO you. Dad gave the ball to me. Test it: you would say "gave it to me", never "to I".',
    },
  },
  {
    q: { el: 'Διάλεξε: «___ am eight years old.»', en: 'Choose: «___ am eight years old.»' },
    options: { el: ['Me', 'Her', 'I', 'Him'], en: ['Me', 'Her', 'I', 'Him'] },
    correct: 2,
    explanation: {
      el: 'Το I είναι το υποκείμενο, αυτός που είναι οκτώ χρονών. Το me δεν μπορεί ποτέ να μπει πριν από το «am».',
      en: 'I is the subject, the one who is eight. Me can never come before "am".',
    },
  },
  {
    q: { el: 'Διάλεξε: «Can you come with Anna and ___?»', en: 'Choose: «Can you come with Anna and ___?»' },
    options: { el: ['I', 'she', 'we', 'me'], en: ['I', 'she', 'we', 'me'] },
    correct: 3,
    explanation: {
      el: 'Βγάλε την Anna και δοκίμασε: «Can you come with me?» Αυτό ακούγεται σωστό, άρα είναι Anna and me.',
      en: 'Take Anna away and try it: "Can you come with me?" That sounds right, so it is Anna and me.',
    },
  },

  // ── 10–14: belonging words ─────────────────────────────────────────────────
  {
    q: { el: 'Διάλεξε: «Ben lost ___ hat.»', en: 'Choose: «Ben lost ___ hat.»' },
    options: { el: ['her', 'their', 'him', 'his'], en: ['her', 'their', 'him', 'his'] },
    correct: 3,
    explanation: {
      el: 'Ο Ben είναι αγόρι, οπότε το καπέλο ανήκει σε αυτόν: his hat. Το his δείχνει ότι κάτι ανήκει σε αγόρι ή άντρα.',
      en: 'Ben is a boy, so the hat belongs to him: his hat. His shows that something belongs to a boy or man.',
    },
  },
  {
    q: { el: 'Διάλεξε: «Mia is reading ___ book.»', en: 'Choose: «Mia is reading ___ book.»' },
    options: { el: ['her', 'his', 'their', 'she'], en: ['her', 'his', 'their', 'she'] },
    correct: 0,
    explanation: {
      el: 'Η Mia είναι κορίτσι, οπότε λέμε her book. Το her δείχνει ότι κάτι ανήκει σε κορίτσι ή γυναίκα. Το she δεν μπαίνει ποτέ πριν από ουσιαστικό.',
      en: 'Mia is a girl, so we say her book. Her shows that something belongs to a girl or woman. She cannot be used before a noun.',
    },
  },
  {
    q: { el: 'Διάλεξε: «The children put on ___ coats.»', en: 'Choose: «The children put on ___ coats.»' },
    options: { el: ['their', 'his', 'our', 'its'], en: ['their', 'his', 'our', 'its'] },
    correct: 0,
    explanation: {
      el: 'Τα παιδιά είναι πολλά πρόσωπα, οπότε τα παλτά είναι their coats. Το their σημαίνει ότι ανήκει σε αυτούς.',
      en: 'The children are many people, so the coats are their coats. Their means belonging to them.',
    },
  },
  {
    q: { el: 'Διάλεξε: «My brother and I love ___ new puppy.»', en: 'Choose: «My brother and I love ___ new puppy.»' },
    options: { el: ['their', 'our', 'her', 'his'], en: ['their', 'our', 'her', 'his'] },
    correct: 1,
    explanation: {
      el: 'Το κουτάβι ανήκει σε εμάς (my brother and I), οπότε λέμε our puppy. Το our είναι η λέξη κτήσης για το we.',
      en: 'The puppy belongs to us (my brother and I), so we say our puppy. Our is the belonging word for we.',
    },
  },
  {
    q: { el: 'Διάλεξε: «The bird flapped ___ wings.»', en: 'Choose: «The bird flapped ___ wings.»' },
    options: { el: ['it', 'its', 'their', 'his'], en: ['it', 'its', 'their', 'his'] },
    correct: 1,
    explanation: {
      el: 'Το πουλί είναι ένα ζώο, οπότε λέμε its wings. Το its (χωρίς απόστροφο) σημαίνει ότι ανήκει σε αυτό.',
      en: 'The bird is one animal, so we say its wings. Its (with no apostrophe) means belonging to it.',
    },
  },

  // ── 15–18: which pronoun matches the noun ──────────────────────────────────
  {
    q: { el: 'Ποια αντωνυμία ταιριάζει με το ουσιαστικό «Grandma»;', en: 'Which pronoun matches the noun «Grandma»?' },
    options: { el: ['he', 'they', 'it', 'she'], en: ['he', 'they', 'it', 'she'] },
    correct: 3,
    explanation: {
      el: 'Η γιαγιά είναι μία γυναίκα, οπότε ταιριάζει το she. Το he είναι για έναν άντρα και το they για περισσότερους από έναν.',
      en: 'Grandma is one woman, so she matches. He is for one man, and they is for more than one.',
    },
  },
  {
    q: { el: 'Ποια αντωνυμία ταιριάζει με το «the cars»;', en: 'Which pronoun matches «the cars»?' },
    options: { el: ['it', 'they', 'he', 'she'], en: ['it', 'they', 'he', 'she'] },
    correct: 1,
    explanation: {
      el: 'Τα αυτοκίνητα είναι περισσότερα από ένα πράγματα, οπότε χρησιμοποιούμε they. Το it είναι μόνο για ένα πράγμα.',
      en: 'The cars are more than one thing, so we use they. It is only for one thing.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά την αντωνυμία;', en: 'Which sentence uses the pronoun correctly?' },
    options: { el: ['The girls lost his ball.', 'The girls lost her ball.', 'The girls lost its ball.', 'The girls lost their ball.'], en: ['The girls lost his ball.', 'The girls lost her ball.', 'The girls lost its ball.', 'The girls lost their ball.'] },
    correct: 3,
    explanation: {
      el: 'Τα κορίτσια είναι περισσότερα από ένα, οπότε η μπάλα είναι their ball. Τα his και her είναι για ένα πρόσωπο και το its για ένα πράγμα.',
      en: 'The girls are more than one, so the ball is their ball. His and her are for one person, and its is for one thing.',
    },
  },
  {
    q: { el: 'Διάλεξε: «My uncle fixed ___ own car.»', en: 'Choose: «My uncle fixed ___ own car.»' },
    options: { el: ['her', 'their', 'his', 'its'], en: ['her', 'their', 'his', 'its'] },
    correct: 2,
    explanation: {
      el: 'Ο θείος είναι άντρας, οπότε λέμε his own car. Ταίριαξε τη λέξη κτήσης με το πρόσωπο: uncle → his, aunt → her.',
      en: 'An uncle is a man, so we say his own car. Match the belonging word to the person: uncle means his, aunt means her.',
    },
  },
];
