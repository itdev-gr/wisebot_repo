/**
 * Grade 6 · English Language Arts · Idioms & Figurative Language
 * ===============================================================
 * Original questions for a native English-speaking child of 11–12 (curriculum topics only).
 * What the unit covers, in order:
 *   1–6   idioms: piece of cake, break the ice, under the weather, at the eleventh hour, spill the beans
 *   7–9   hyperbole: spotting it, defining it, what the speaker really means
 *   10–12 personification: spotting it, what is personified, defining it
 *   13–15 simile vs metaphor review
 *   16–18 simple irony: saying the opposite, an ironic situation, what is really meant
 * Distractors are the literal readings (actual cake, actual ice) and the neighboring
 * devices (a simile offered where a metaphor is asked for, personification for hyperbole).
 * el: the question is translated for a Greek-speaking parent; the options stay in English.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ELA_IDIOMS_AND_FIGURATIVE_LANGUAGE: QuizQuestion[] = [
  // ── 1–6: idioms ────────────────────────────────────────────────────────────
  {
    q: { el: '"The test was a piece of cake." Τι σημαίνει αυτό;', en: '"The test was a piece of cake." What does this mean?' },
    options: { el: ['The test was about baking', 'The test was very easy', 'The test was sweet', 'The test was cut into slices'], en: ['The test was about baking', 'The test was very easy', 'The test was sweet', 'The test was cut into slices'] },
    correct: 1,
    explanation: {
      el: 'Ένας ιδιωματισμός (idiom) είναι φράση που η σημασία της δεν βγαίνει από τις λέξεις της. Το "a piece of cake" σημαίνει "κάτι πολύ εύκολο", όσο εύκολο είναι να φας ένα κομμάτι κέικ.',
      en: 'An idiom is a phrase whose meaning cannot be worked out from its words. "A piece of cake" means "something very easy", as easy as eating a slice of cake.',
    },
  },
  {
    q: { el: 'Σε ένα πάρτι, η Jo είπε ένα αστείο για να "break the ice". Τι έκανε η Jo;', en: 'At a party, Jo told a joke to "break the ice." What did Jo do?' },
    options: { el: ['Smashed some frozen water', 'Made everyone feel cold', 'Ruined the party', 'Helped people relax and start talking'], en: ['Smashed some frozen water', 'Made everyone feel cold', 'Ruined the party', 'Helped people relax and start talking'] },
    correct: 3,
    explanation: {
      el: 'Το "break the ice" σημαίνει να κάνεις μια αμήχανη, σιωπηλή παρέα να χαλαρώσει και να αρχίσει να μιλά. Ο "πάγος" είναι η ντροπή ανάμεσα σε ανθρώπους που δεν γνωρίζονται.',
      en: '"Break the ice" means to help an awkward, silent group relax and start talking. The "ice" is the shyness between people who do not know each other yet.',
    },
  },
  {
    q: { el: '"Grandpa is feeling under the weather today." Τι σημαίνει αυτό;', en: '"Grandpa is feeling under the weather today." What does this mean?' },
    options: { el: ['He is a little unwell', 'He is outside in the rain', 'He is checking the forecast', 'He is standing under an umbrella'], en: ['He is a little unwell', 'He is outside in the rain', 'He is checking the forecast', 'He is standing under an umbrella'] },
    correct: 0,
    explanation: {
      el: 'Το "under the weather" σημαίνει "λίγο άρρωστος", όχι σοβαρά, απλώς όχι στα καλύτερά του. Δεν έχει καμία σχέση με τον πραγματικό καιρό.',
      en: '"Under the weather" means "slightly ill", not seriously, just not at your best. It has nothing to do with the actual weather.',
    },
  },
  {
    q: { el: 'Ποιος ιδιωματισμός σημαίνει να κάνεις κάτι την τελευταία δυνατή στιγμή;', en: 'Which idiom means to do something at the last possible moment?' },
    options: { el: ['hit the hay', 'spill the beans', 'at the eleventh hour', 'once in a blue moon'], en: ['hit the hay', 'spill the beans', 'at the eleventh hour', 'once in a blue moon'] },
    correct: 2,
    explanation: {
      el: 'Το "at the eleventh hour" σημαίνει "ακριβώς πριν λήξει ο χρόνος", σαν να είναι έντεκα και η προθεσμία στις δώδεκα. Το "hit the hay" σημαίνει πάω για ύπνο και το "once in a blue moon" σημαίνει πολύ σπάνια.',
      en: '"At the eleventh hour" means "just before time runs out", as if it is eleven o\'clock and the deadline is twelve. "Hit the hay" means go to bed, and "once in a blue moon" means very rarely.',
    },
  },
  {
    q: { el: 'Τι είναι ο ιδιωματισμός (idiom);', en: 'What is an idiom?' },
    options: { el: ['A word that sounds like its meaning', 'A sentence that asks a question', 'A very long word', 'A phrase whose meaning is different from the meaning of its separate words'], en: ['A word that sounds like its meaning', 'A sentence that asks a question', 'A very long word', 'A phrase whose meaning is different from the meaning of its separate words'] },
    correct: 3,
    explanation: {
      el: 'Στον ιδιωματισμό οι λέξεις μαζί σημαίνουν κάτι διαφορετικό από το καθένα χωριστά: "hold your horses" σημαίνει "περίμενε", ακόμη κι αν δεν υπάρχει άλογο πουθενά.',
      en: 'In an idiom the words together mean something different from each word alone: "hold your horses" means "wait", even though there is no horse anywhere.',
    },
  },
  {
    q: { el: '"Please don\'t spill the beans about the surprise party." Τι σημαίνει αυτό;', en: '"Please don\'t spill the beans about the surprise party." What does this mean?' },
    options: { el: ['Don\'t drop the food', 'Don\'t give away the secret', 'Don\'t cook tonight', 'Don\'t come to the party'], en: ['Don\'t drop the food', 'Don\'t give away the secret', 'Don\'t cook tonight', 'Don\'t come to the party'] },
    correct: 1,
    explanation: {
      el: 'Το "spill the beans" σημαίνει να αποκαλύψεις ένα μυστικό. Όταν χύνονται τα φασόλια, βγαίνουν όλα έξω, και το ίδιο γίνεται με το μυστικό.',
      en: '"Spill the beans" means to give away a secret. Once the beans are spilled, everything comes out, and the same happens to the secret.',
    },
  },

  // ── 7–9: hyperbole ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι παράδειγμα υπερβολής (hyperbole);', en: 'Which sentence is an example of hyperbole?' },
    options: { el: ['I have told you a million times to close the door.', 'I have told you twice to close the door.', 'Please close the door.', 'The door is made of wood.'], en: ['I have told you a million times to close the door.', 'I have told you twice to close the door.', 'Please close the door.', 'The door is made of wood.'] },
    correct: 0,
    explanation: {
      el: 'Η υπερβολή (hyperbole) είναι σκόπιμη τεράστια μεγαλοποίηση. Κανείς δεν το έχει πει "a million times", η φράση απλώς δείχνει πόσο ενοχλημένος είναι ο ομιλητής.',
      en: 'Hyperbole is deliberate, huge exaggeration. Nobody has really said it "a million times"; the phrase just shows how annoyed the speaker is.',
    },
  },
  {
    q: { el: 'Τι είναι η υπερβολή (hyperbole);', en: 'What is hyperbole?' },
    options: { el: ['A comparison using like or as', 'Giving human qualities to objects', 'Extreme exaggeration for effect', 'Saying the opposite of what you mean'], en: ['A comparison using like or as', 'Giving human qualities to objects', 'Extreme exaggeration for effect', 'Saying the opposite of what you mean'] },
    correct: 2,
    explanation: {
      el: 'Η hyperbole μεγαλοποιεί κάτι τόσο πολύ που κανείς δεν το παίρνει κυριολεκτικά: "I could sleep for a year." Χρησιμοποιείται για χιούμορ ή έμφαση.',
      en: 'Hyperbole exaggerates something so much that nobody takes it literally: "I could sleep for a year." It is used for humor or emphasis.',
    },
  },
  {
    q: { el: '"My backpack weighs a ton!" Τι εννοεί πραγματικά ο ομιλητής;', en: '"My backpack weighs a ton!" What does the speaker really mean?' },
    options: { el: ['The backpack weighs exactly 1,000 kilograms', 'The backpack is empty', 'The backpack is for sale', 'The backpack is very heavy'], en: ['The backpack weighs exactly 1,000 kilograms', 'The backpack is empty', 'The backpack is for sale', 'The backpack is very heavy'] },
    correct: 3,
    explanation: {
      el: 'Ένας τόνος είναι 1.000 κιλά, κανένα παιδί δεν κουβαλάει τόσο. Η υπερβολή σημαίνει απλώς "η τσάντα μου είναι πολύ βαριά".',
      en: 'A ton is 1,000 kilograms, and no child carries that. The hyperbole simply means "my backpack is really heavy".',
    },
  },

  // ── 10–12: personification ─────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί προσωποποίηση (personification);', en: 'Which sentence uses personification?' },
    options: { el: ['The wind howled through the empty streets.', 'The wind was strong last night.', 'The wind blew at forty miles per hour.', 'Wind is moving air.'], en: ['The wind howled through the empty streets.', 'The wind was strong last night.', 'The wind blew at forty miles per hour.', 'Wind is moving air.'] },
    correct: 0,
    explanation: {
      el: 'Ο άνεμος δεν μπορεί πραγματικά να ουρλιάξει, αυτό το κάνουν άνθρωποι ή ζώα. Το "the wind howled" δίνει στον άνεμο μια ζωντανή, ανθρώπινη φωνή: αυτό είναι προσωποποίηση.',
      en: 'Wind cannot really howl; people and animals do that. "The wind howled" gives the wind a living, human-like voice: that is personification.',
    },
  },
  {
    q: { el: '"The old house groaned as the storm hit." Τι προσωποποιείται;', en: '"The old house groaned as the storm hit." What is being personified?' },
    options: { el: ['The storm', 'The old house', 'The wind', 'The rain'], en: ['The storm', 'The old house', 'The wind', 'The rain'] },
    correct: 1,
    explanation: {
      el: 'Το "groaned" (βόγκηξε) είναι κάτι που κάνει ένας άνθρωπος με πόνο ή κούραση. Εδώ το κάνει το σπίτι, άρα το σπίτι προσωποποιείται.',
      en: '"Groaned" is something a person does when tired or in pain. Here the house does it, so the house is the thing being personified.',
    },
  },
  {
    q: { el: 'Τι είναι η προσωποποίηση (personification);', en: 'What is personification?' },
    options: { el: ['Comparing two things using "as"', 'Exaggerating for effect', 'Giving human actions or feelings to something that is not human', 'Repeating the first sound of several words'], en: ['Comparing two things using "as"', 'Exaggerating for effect', 'Giving human actions or feelings to something that is not human', 'Repeating the first sound of several words'] },
    correct: 2,
    explanation: {
      el: 'Η προσωποποίηση κάνει ένα αντικείμενο, ζώο ή ιδέα να συμπεριφέρεται σαν άνθρωπος: "the sun smiled", "the clock refused to hurry". Ζωντανεύει την περιγραφή.',
      en: 'Personification makes an object, animal or idea behave like a person: "the sun smiled", "the clock refused to hurry". It brings a description to life.',
    },
  },

  // ── 13–15: simile vs metaphor ──────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι παρομοίωση (simile);', en: 'Which sentence is a simile?' },
    options: { el: ['Her smile was sunshine.', 'The sun smiled down on her.', 'Her smile was as bright as sunshine.', 'She smiled at the sun.'], en: ['Her smile was sunshine.', 'The sun smiled down on her.', 'Her smile was as bright as sunshine.', 'She smiled at the sun.'] },
    correct: 2,
    explanation: {
      el: 'Η παρομοίωση συγκρίνει με "like" ή "as": "as bright as sunshine". Το "Her smile was sunshine" είναι μεταφορά και το "The sun smiled" είναι προσωποποίηση.',
      en: 'A simile compares using "like" or "as": "as bright as sunshine". "Her smile was sunshine" is a metaphor, and "The sun smiled" is personification.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι μεταφορά (metaphor);', en: 'Which sentence is a metaphor?' },
    options: { el: ['The classroom was a zoo.', 'The classroom was like a zoo.', 'The classroom was noisy.', 'The classroom was as loud as a zoo.'], en: ['The classroom was a zoo.', 'The classroom was like a zoo.', 'The classroom was noisy.', 'The classroom was as loud as a zoo.'] },
    correct: 0,
    explanation: {
      el: 'Η μεταφορά λέει ότι κάτι ΕΙΝΑΙ κάτι άλλο, χωρίς like ή as: "The classroom was a zoo." Οι εκδοχές με "like" και "as" είναι παρομοιώσεις.',
      en: 'A metaphor says one thing IS another, with no like or as: "The classroom was a zoo." The versions with "like" and "as" are similes.',
    },
  },
  {
    q: { el: 'Ποια είναι η διαφορά ανάμεσα σε παρομοίωση και μεταφορά;', en: 'What is the difference between a simile and a metaphor?' },
    options: { el: ['A metaphor uses like or as; a simile does not', 'A simile uses like or as; a metaphor says one thing is another', 'A simile is always longer than a metaphor', 'They are exactly the same thing'], en: ['A metaphor uses like or as; a simile does not', 'A simile uses like or as; a metaphor says one thing is another', 'A simile is always longer than a metaphor', 'They are exactly the same thing'] },
    correct: 1,
    explanation: {
      el: 'Και τα δύο συγκρίνουν, αλλά η παρομοίωση το δηλώνει με "like" ή "as" ("brave as a lion"), ενώ η μεταφορά λέει απευθείας ότι το ένα είναι το άλλο ("he is a lion").',
      en: 'Both compare, but a simile signals it with "like" or "as" ("brave as a lion"), while a metaphor states directly that one thing is the other ("he is a lion").',
    },
  },

  // ── 16–18: simple irony ────────────────────────────────────────────────────
  {
    q: { el: 'Βρέχει καταρρακτωδώς και ο Sam λέει: "Lovely weather for a picnic!" Τι χρησιμοποιεί ο Sam;', en: 'It is pouring with rain and Sam says, "Lovely weather for a picnic!" What is Sam using?' },
    options: { el: ['A simile', 'Personification', 'An idiom', 'Irony'], en: ['A simile', 'Personification', 'An idiom', 'Irony'] },
    correct: 3,
    explanation: {
      el: 'Η ειρωνεία (irony) είναι να λες το αντίθετο από αυτό που εννοείς, συνήθως για χιούμορ. Ο Sam εννοεί ότι ο καιρός είναι απαίσιος για πικνίκ.',
      en: 'Irony is saying the opposite of what you mean, usually to be funny. Sam really means the weather is terrible for a picnic.',
    },
  },
  {
    q: { el: 'Ποια κατάσταση είναι ειρωνική;', en: 'Which situation is ironic?' },
    options: { el: ['The spelling champion misspells the word "spelling" on her poster.', 'The spelling champion wins another contest.', 'The spelling champion studies every night.', 'The spelling champion reads a dictionary.'], en: ['The spelling champion misspells the word "spelling" on her poster.', 'The spelling champion wins another contest.', 'The spelling champion studies every night.', 'The spelling champion reads a dictionary.'] },
    correct: 0,
    explanation: {
      el: 'Μια κατάσταση είναι ειρωνική όταν συμβαίνει το αντίθετο από αυτό που θα περίμενες. Από μια πρωταθλήτρια ορθογραφίας περιμένεις τέλεια ορθογραφία, όχι λάθος στη λέξη "spelling".',
      en: 'A situation is ironic when the opposite of what you would expect happens. You expect a spelling champion to spell perfectly, not to get the word "spelling" wrong.',
    },
  },
  {
    q: { el: 'Αφού έβαλε αυτογκόλ, ο Max είπε: "Well, that went brilliantly." Τι εννοεί πραγματικά ο Max;', en: 'After scoring an own goal, Max said, "Well, that went brilliantly." What does Max really mean?' },
    options: { el: ['He is proud of the goal', 'He wants to score again', 'The goal went badly and he is embarrassed', 'He thinks the match went well'], en: ['He is proud of the goal', 'He wants to score again', 'The goal went badly and he is embarrassed', 'He thinks the match went well'] },
    correct: 2,
    explanation: {
      el: 'Ο Max χρησιμοποιεί ειρωνεία: λέει "brilliantly" ενώ εννοεί "terribly". Ο τόνος και η κατάσταση σου λένε να γυρίσεις το νόημα ανάποδα.',
      en: 'Max is using irony: he says "brilliantly" but means "terribly". The tone and the situation tell you to flip the meaning.',
    },
  },
];
