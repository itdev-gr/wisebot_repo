/**
 * ΣΤ' Δημοτικού · Αγγλικά · Φανταστικά Πλάσματα (Imaginary Creatures)
 * =======================================================================
 * Original questions for a child of 11–12 learning English (curriculum topics
 * only — nothing from ebooks.edu.gr). What the unit covers, in order:
 *   1–4   creature words: monster, dragon, mermaid, unicorn, giant, fairy
 *   5–7   body parts of creatures: wings, horn, tail, scales, claws
 *   8–11  describing appearance: adjectives (huge, tiny, furry, scary/friendly), «It has got…»
 *   12–15 there was / there were in a story set in the past
 *   16–18 putting it together: negatives, questions and a short creature description
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ENGLISH_IMAGINARY_CREATURES: QuizQuestion[] = [
  // ── 1–4: creature words ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «δράκος» στα αγγλικά;', en: 'How do you say «δράκος» in English?' },
    options: { el: ['dragon', 'giant', 'monster', 'wizard'], en: ['dragon', 'giant', 'monster', 'wizard'] },
    correct: 0,
    explanation: {
      el: 'Ο δράκος είναι dragon. Giant είναι ο γίγαντας, monster το τέρας και wizard ο μάγος.',
      en: 'A dragon is a big creature that can fly and breathe fire. A giant is a very tall person, a monster is a scary creature.',
    },
  },
  {
    q: { el: 'Ένα πλάσμα που είναι μισό κορίτσι και μισό ψάρι και ζει στη θάλασσα λέγεται…', en: 'A creature that is half girl and half fish and lives in the sea is a…' },
    options: { el: ['fairy', 'unicorn', 'mermaid', 'ghost'], en: ['fairy', 'unicorn', 'mermaid', 'ghost'] },
    correct: 2,
    explanation: {
      el: 'Η γοργόνα είναι mermaid. Η fairy είναι η νεράιδα, που έχει φτερά και ζει στο δάσος.',
      en: 'A mermaid lives in the sea and has a fish tail. A fairy is a tiny creature with wings that lives in the forest.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μονόκερος» στα αγγλικά;', en: 'How do you say «μονόκερος» in English?' },
    options: { el: ['horse', 'unicorn', 'uniform', 'dinosaur'], en: ['horse', 'unicorn', 'uniform', 'dinosaur'] },
    correct: 1,
    explanation: {
      el: 'Ο μονόκερος είναι unicorn: ένα άλογο με ένα κέρατο. Προσοχή, uniform είναι η στολή!',
      en: 'A unicorn is a horse with one horn. Careful: a uniform is the clothes you wear at school or work!',
    },
  },
  {
    q: { el: 'Ο Γιώργος διαβάζει για έναν άνθρωπο ψηλό σαν σπίτι. Ποια λέξη ταιριάζει;', en: 'Giorgos is reading about a person as tall as a house. Which word fits?' },
    options: { el: ['a dwarf', 'a fairy', 'a robot', 'a giant'], en: ['a dwarf', 'a fairy', 'a robot', 'a giant'] },
    correct: 3,
    explanation: {
      el: 'Ο γίγαντας είναι giant. Το αντίθετο, ο νάνος, είναι dwarf.',
      en: 'A giant is a very, very tall person. The opposite, a very small person, is a dwarf.',
    },
  },

  // ── 5–7: body parts of creatures ───────────────────────────────────────────
  {
    q: { el: 'Ο δράκος πετάει με τα… του. Ποια λέξη λείπει;', en: 'The dragon flies with its… Which word is missing?' },
    options: { el: ['legs', 'ears', 'wings', 'teeth'], en: ['legs', 'ears', 'wings', 'teeth'] },
    correct: 2,
    explanation: {
      el: 'Τα φτερά είναι wings. Τα πλάσματα που πετούν έχουν wings — δράκοι, νεράιδες, πουλιά.',
      en: 'Wings are what a creature uses to fly. Dragons, fairies and birds all have wings.',
    },
  },
  {
    q: { el: 'Πώς λέμε «κέρατο» στα αγγλικά;', en: 'How do you say «κέρατο» in English?' },
    options: { el: ['horn', 'corn', 'tail', 'claw'], en: ['horn', 'corn', 'tail', 'claw'] },
    correct: 0,
    explanation: {
      el: 'Το κέρατο είναι horn. Ο μονόκερος έχει ένα horn στο κεφάλι. Corn είναι το καλαμπόκι!',
      en: 'A horn grows on the head of an animal or a unicorn. Corn is a yellow vegetable — do not mix them up!',
    },
  },
  {
    q: { el: 'Το σώμα του δράκου είναι σκεπασμένο με μικρά σκληρά «λέπια», όπως τα ψάρια. Στα αγγλικά λέγονται…', en: 'A dragon\'s body is covered in small hard plates, like a fish. In English they are called…' },
    options: { el: ['feathers', 'scales', 'fur', 'spots'], en: ['feathers', 'scales', 'fur', 'spots'] },
    correct: 1,
    explanation: {
      el: 'Τα λέπια είναι scales. Feathers είναι τα πούπουλα των πουλιών και fur το τρίχωμα, όπως της γάτας.',
      en: 'Scales cover fish and dragons. Feathers cover birds, and fur is the soft hair of a cat or a bear.',
    },
  },

  // ── 8–11: describing appearance ────────────────────────────────────────────
  {
    q: { el: 'Ποιο επίθετο σημαίνει «τεράστιος»;', en: 'Which adjective means «τεράστιος»?' },
    options: { el: ['tiny', 'huge', 'thin', 'ugly'], en: ['tiny', 'huge', 'thin', 'ugly'] },
    correct: 1,
    explanation: {
      el: 'Huge σημαίνει τεράστιος. Το αντίθετο είναι tiny, δηλαδή μικροσκοπικός.',
      en: 'Huge means very, very big. The opposite is tiny, which means very, very small.',
    },
  },
  {
    q: { el: 'Η Ελένη περιγράφει ένα τέρας με πολύ μαλακό τρίχωμα. Ποια λέξη χρησιμοποιεί;', en: 'Eleni is describing a monster with very soft fur. Which word does she use?' },
    options: { el: ['furry', 'hungry', 'angry', 'funny'], en: ['furry', 'hungry', 'angry', 'funny'] },
    correct: 0,
    explanation: {
      el: 'Furry σημαίνει «με τρίχωμα», μαλλιαρός. Hungry είναι πεινασμένος, angry θυμωμένος και funny αστείος.',
      en: 'Furry means covered in fur. Hungry is when you want food, angry is when you are cross, funny makes you laugh.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «scary» (τρομακτικός);', en: 'What is the opposite of «scary»?' },
    options: { el: ['dark', 'strong', 'friendly', 'slow'], en: ['dark', 'strong', 'friendly', 'slow'] },
    correct: 2,
    explanation: {
      el: 'Scary είναι ο τρομακτικός και friendly ο φιλικός. Ένα friendly monster είναι ένα τέρας που θέλει να γίνει φίλος σου.',
      en: 'Scary makes you afraid; friendly makes you feel safe. A friendly monster wants to be your friend.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «The dragon ___ got green scales and a long tail.»', en: 'Complete the sentence: «The dragon ___ got green scales and a long tail.»' },
    options: { el: ['have', 'is', 'has', 'does'], en: ['have', 'is', 'has', 'does'] },
    correct: 2,
    explanation: {
      el: 'Για το he, she, it λέμε has got. The dragon = it, άρα «The dragon has got…». Το have got είναι για I, you, we, they.',
      en: 'With he, she and it we say has got. The dragon is an «it», so: «The dragon has got…». Have got is for I, you, we, they.',
    },
  },

  // ── 12–15: there was / there were ──────────────────────────────────────────
  {
    q: { el: 'Στην ιστορία του Νίκου: «___ a dragon in the cave.» Τι βάζουμε για το παρελθόν;', en: 'In Nikos\'s story: «___ a dragon in the cave.» What do we use for the past?' },
    options: { el: ['There is', 'There was', 'There were', 'There are'], en: ['There is', 'There was', 'There were', 'There are'] },
    correct: 1,
    explanation: {
      el: 'Η ιστορία είναι στο παρελθόν και μιλάμε για ένα πράγμα (a dragon), άρα there was. There is = υπάρχει (τώρα).',
      en: 'The story is in the past and we talk about one thing (a dragon), so we say there was. There is means now.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ three unicorns in the forest.»', en: 'Complete: «___ three unicorns in the forest.»' },
    options: { el: ['There was', 'There were', 'There is', 'They was'], en: ['There was', 'There were', 'There is', 'They was'] },
    correct: 1,
    explanation: {
      el: 'Για πολλά πράγματα στο παρελθόν (three unicorns) λέμε there were. Το there was είναι μόνο για ένα.',
      en: 'For more than one thing in the past (three unicorns) we say there were. There was is only for one.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['There was two giants on the hill.', 'There were a mermaid in the sea.', 'There were lots of fairies in the garden.', 'There is a monster here yesterday.'], en: ['There was two giants on the hill.', 'There were a mermaid in the sea.', 'There were lots of fairies in the garden.', 'There is a monster here yesterday.'] },
    correct: 2,
    explanation: {
      el: 'Lots of fairies = πολλές, άρα there were. «Two giants» θέλει were, «a mermaid» θέλει was, και με το yesterday δεν λέμε is.',
      en: 'Lots of fairies means many, so there were. «Two giants» needs were, «a mermaid» needs was, and with yesterday we cannot use is.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή ερώτηση για το παρελθόν;', en: 'Which is the correct question about the past?' },
    options: { el: ['Was there a dragon in the castle?', 'There was a dragon in the castle?', 'Did there was a dragon in the castle?', 'Is there a dragon in the castle yesterday?'], en: ['Was there a dragon in the castle?', 'There was a dragon in the castle?', 'Did there was a dragon in the castle?', 'Is there a dragon in the castle yesterday?'] },
    correct: 0,
    explanation: {
      el: 'Στην ερώτηση το was πάει μπροστά: «Was there…?». Απάντηση: «Yes, there was.» / «No, there wasn\'t.»',
      en: 'In a question, was goes first: «Was there…?». Answer: «Yes, there was.» or «No, there wasn\'t.»',
    },
  },

  // ── 16–18: putting it together ─────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία λέει ότι ΔΕΝ υπήρχαν τέρατα κάτω από το κρεβάτι. Πώς το λέει στα αγγλικά;', en: 'Maria says there were NO monsters under the bed. How does she say it in English?' },
    options: { el: ['There wasn\'t any monsters under the bed.', 'There weren\'t any monsters under the bed.', 'There weren\'t no monsters under the bed.', 'There didn\'t any monsters under the bed.'], en: ['There wasn\'t any monsters under the bed.', 'There weren\'t any monsters under the bed.', 'There weren\'t no monsters under the bed.', 'There didn\'t any monsters under the bed.'] },
    correct: 1,
    explanation: {
      el: 'Monsters είναι πληθυντικός, άρα there weren\'t any monsters. Στα αγγλικά δεν λέμε δύο αρνήσεις μαζί (weren\'t no).',
      en: 'Monsters is plural, so: there weren\'t any monsters. In English we do not use two negatives together (weren\'t no).',
    },
  },
  {
    q: { el: 'Ποια πρόταση περιγράφει σωστά ένα ΜΙΚΡΟΣΚΟΠΙΚΟ και ΦΙΛΙΚΟ πλάσμα;', en: 'Which sentence correctly describes a TINY and FRIENDLY creature?' },
    options: { el: ['It is huge and scary.', 'It is tiny and friendly.', 'It is tiny and scary.', 'It is huge and friendly.'], en: ['It is huge and scary.', 'It is tiny and friendly.', 'It is tiny and scary.', 'It is huge and friendly.'] },
    correct: 1,
    explanation: {
      el: 'Tiny = μικροσκοπικό, friendly = φιλικό. Huge = τεράστιο, scary = τρομακτικό — είναι τα αντίθετα!',
      en: 'Tiny means very small and friendly means kind. Huge and scary are the opposites!',
    },
  },
  {
    q: { el: 'Διάβασε: «Last night there was a strange creature in my garden. It had got purple fur, two horns and a short tail.» Τι ΔΕΝ είχε το πλάσμα;', en: 'Read: «Last night there was a strange creature in my garden. It had got purple fur, two horns and a short tail.» What did the creature NOT have?' },
    options: { el: ['purple fur', 'wings', 'two horns', 'a short tail'], en: ['purple fur', 'wings', 'two horns', 'a short tail'] },
    correct: 1,
    explanation: {
      el: 'Το κείμενο λέει fur, horns και tail — δεν λέει wings. Όταν διαβάζεις, ψάξε τη λέξη που λείπει.',
      en: 'The text mentions fur, horns and a tail — it does not mention wings. When you read, look for the word that is missing.',
    },
  },
];
