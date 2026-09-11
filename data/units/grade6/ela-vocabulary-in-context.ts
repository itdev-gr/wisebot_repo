/**
 * Grade 6 · English Language Arts · Vocabulary in Context
 * ========================================================
 * Original questions for a native English-speaking child of 11–12 (curriculum topics only).
 * What the unit covers, in order:
 *   1–5   working out an unfamiliar word from context clues (famished, reticent, verdant, jubilant)
 *         and naming the type of clue (definition, contrast, example)
 *   6–9   connotation: thrifty vs stingy, scrawny vs slender, choosing the kind word
 *   10–12 precise vs vague word choice
 *   13–15 academic task verbs: compare, analyze, evaluate
 *   16–18 words with several meanings: bank, light, run
 * Distractors are the real mix-ups: the opposite meaning, a word with the same basic
 * meaning but the wrong feeling, the vague word that "sort of" fits.
 * el: the question is translated for a Greek-speaking parent; the options stay in English.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ELA_VOCABULARY_IN_CONTEXT: QuizQuestion[] = [
  // ── 1–5: meaning from context clues ────────────────────────────────────────
  {
    q: { el: '"The hikers were famished after walking all day, so they ate everything in their packs." Τι σημαίνει "famished";', en: '"The hikers were famished after walking all day, so they ate everything in their packs." What does "famished" mean?' },
    options: { el: ['Very hungry', 'Very tired', 'Lost', 'Cheerful'], en: ['Very hungry', 'Very tired', 'Lost', 'Cheerful'] },
    correct: 0,
    explanation: {
      el: 'Η συνέχεια της πρότασης δίνει τη λύση: έφαγαν τα πάντα. Άρα "famished" σημαίνει "πολύ πεινασμένος". Ψάξε πάντα τα στοιχεία γύρω από την άγνωστη λέξη.',
      en: 'The rest of the sentence gives it away: they ate everything. So "famished" means "extremely hungry". Always look for clues around the unknown word.',
    },
  },
  {
    q: { el: '"Unlike her talkative brother, Ana was reticent and rarely spoke in class." Τι σημαίνει "reticent";', en: '"Unlike her talkative brother, Ana was reticent and rarely spoke in class." What does "reticent" mean?' },
    options: { el: ['Loud', 'Quiet and reserved', 'Angry', 'Clever'], en: ['Loud', 'Quiet and reserved', 'Angry', 'Clever'] },
    correct: 1,
    explanation: {
      el: 'Το "Unlike her talkative brother" είναι στοιχείο αντίθεσης: η Ana είναι το αντίθετο του ομιλητικού. Και το "rarely spoke" το επιβεβαιώνει: reticent σημαίνει σιωπηλή, συγκρατημένη.',
      en: '"Unlike her talkative brother" is a contrast clue: Ana is the opposite of talkative. "Rarely spoke" confirms it: reticent means quiet and reserved.',
    },
  },
  {
    q: { el: 'Τι είδους στοιχείο συμφραζομένων χρησιμοποιείται εδώ; "The room was cluttered, that is, full of things lying around in a mess."', en: 'Which type of context clue is used here? "The room was cluttered, that is, full of things lying around in a mess."' },
    options: { el: ['A contrast clue', 'An example clue', 'A definition clue', 'A synonym in the title'], en: ['A contrast clue', 'An example clue', 'A definition clue', 'A synonym in the title'] },
    correct: 2,
    explanation: {
      el: 'Φράσεις όπως "that is", "which means" ή "in other words" εισάγουν έναν ορισμό. Ο συγγραφέας εξηγεί το "cluttered" αμέσως μετά τη λέξη.',
      en: 'Phrases like "that is", "which means" or "in other words" introduce a definition clue. The writer explains "cluttered" right after using it.',
    },
  },
  {
    q: { el: '"The garden was verdant: lush green grass, leafy trees, and thick bushes everywhere." Τι σημαίνει "verdant";', en: '"The garden was verdant: lush green grass, leafy trees, and thick bushes everywhere." What does "verdant" mean?' },
    options: { el: ['Dry and brown', 'Very small', 'Full of flowers', 'Green with growing plants'], en: ['Dry and brown', 'Very small', 'Full of flowers', 'Green with growing plants'] },
    correct: 3,
    explanation: {
      el: 'Μετά την άνω-κάτω τελεία έρχονται παραδείγματα (γρασίδι, δέντρα, θάμνοι), όλα πράσινα και φουντωτά. Αυτό είναι στοιχείο παραδείγματος: verdant σημαίνει πράσινος, γεμάτος βλάστηση.',
      en: 'After the colon come examples (grass, trees, bushes), all green and thriving. That is an example clue: verdant means green with plants.',
    },
  },
  {
    q: { el: '"Even though the team lost, the coach was jubilant because every player had tried their best." Τι σημαίνει "jubilant";', en: '"Even though the team lost, the coach was jubilant because every player had tried their best." What does "jubilant" mean?' },
    options: { el: ['Disappointed', 'Joyful', 'Confused', 'Silent'], en: ['Disappointed', 'Joyful', 'Confused', 'Silent'] },
    correct: 1,
    explanation: {
      el: 'Το "Even though the team lost" προειδοποιεί ότι έρχεται κάτι απροσδόκητο, και το "because every player had tried their best" δίνει έναν λόγο για χαρά. Jubilant σημαίνει πολύ χαρούμενος.',
      en: '"Even though the team lost" warns that something unexpected is coming, and "because every player had tried their best" gives a reason for happiness. Jubilant means full of joy.',
    },
  },

  // ── 6–9: connotation ───────────────────────────────────────────────────────
  {
    q: { el: 'Τα "thrifty" και "stingy" περιγράφουν και τα δύο κάποιον προσεκτικό με τα χρήματα. Ποιο έχει την πιο θετική χροιά;', en: '"Thrifty" and "stingy" both describe someone careful with money. Which has the more positive connotation?' },
    options: { el: ['thrifty', 'stingy', 'They feel exactly the same', 'Neither is ever used for people'], en: ['thrifty', 'stingy', 'They feel exactly the same', 'Neither is ever used for people'] },
    correct: 0,
    explanation: {
      el: 'Το "thrifty" ακούγεται σαν κομπλιμέντο (έξυπνος με τα χρήματα), ενώ το "stingy" ακούγεται σαν κριτική (τσιγκούνης). Η ίδια βασική σημασία, διαφορετικό συναίσθημα: αυτό είναι η connotation.',
      en: '"Thrifty" sounds like a compliment (smart with money), while "stingy" sounds like a criticism (mean with money). Same basic meaning, different feeling: that is connotation.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει αρνητική χροιά;', en: 'Which word has a negative connotation?' },
    options: { el: ['slim', 'slender', 'scrawny', 'lean'], en: ['slim', 'slender', 'scrawny', 'lean'] },
    correct: 2,
    explanation: {
      el: 'Και οι τέσσερις λέξεις σημαίνουν "αδύνατος", αλλά το "scrawny" υπονοεί αδύναμο και κακοθρεμμένο. Τα slim, slender και lean ακούγονται υγιή ή κομψά.',
      en: 'All four words mean "thin", but "scrawny" suggests weak and underfed. Slim, slender and lean sound healthy or elegant.',
    },
  },
  {
    q: { el: 'Τι είναι η χροιά (connotation) μιας λέξης;', en: 'What is the connotation of a word?' },
    options: { el: ['Its dictionary definition', 'The number of syllables it has', 'The language it originally came from', 'The feeling or idea it suggests beyond its basic meaning'], en: ['Its dictionary definition', 'The number of syllables it has', 'The language it originally came from', 'The feeling or idea it suggests beyond its basic meaning'] },
    correct: 3,
    explanation: {
      el: 'Η denotation είναι η σημασία του λεξικού· η connotation είναι το συναίσθημα που κουβαλά η λέξη. Το "home" και το "house" σημαίνουν και τα δύο σπίτι, αλλά το "home" ακούγεται ζεστό.',
      en: 'Denotation is the dictionary meaning; connotation is the feeling the word carries. "Home" and "house" both mean a place to live, but "home" feels warm.',
    },
  },
  {
    q: { el: 'Ποια λέξη θα διάλεγες για να περιγράψεις με καλοσύνη την ισχυρή θέληση ενός φίλου;', en: 'Which word would you choose to describe a friend\'s strong will in a kind way?' },
    options: { el: ['stubborn', 'pig-headed', 'determined', 'bossy'], en: ['stubborn', 'pig-headed', 'determined', 'bossy'] },
    correct: 2,
    explanation: {
      el: 'Το "determined" έχει θετική χροιά: κάποιος που δεν τα παρατάει. Τα "stubborn", "pig-headed" και "bossy" περιγράφουν παρόμοια συμπεριφορά αλλά ακούγονται σαν παράπονο.',
      en: '"Determined" has a positive connotation: someone who does not give up. "Stubborn", "pig-headed" and "bossy" describe similar behavior but sound like complaints.',
    },
  },

  // ── 10–12: precise vs vague word choice ────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί την πιο ακριβή λέξη;', en: 'Which sentence uses the most precise word?' },
    options: { el: ['The dog bounded across the yard.', 'The dog went across the yard.', 'The dog moved across the yard.', 'The dog did something in the yard.'], en: ['The dog bounded across the yard.', 'The dog went across the yard.', 'The dog moved across the yard.', 'The dog did something in the yard.'] },
    correct: 0,
    explanation: {
      el: 'Το "bounded" δείχνει ακριβώς πώς κινήθηκε ο σκύλος: με μεγάλα, χαρούμενα άλματα. Τα "went", "moved" και "did something" είναι αόριστα και δεν δίνουν εικόνα στον αναγνώστη.',
      en: '"Bounded" shows exactly how the dog moved: in big, happy leaps. "Went", "moved" and "did something" are vague and give the reader no picture.',
    },
  },
  {
    q: { el: 'Αντικατάστησε την αόριστη λέξη στο "It was a nice day." Ποια εκδοχή είναι η πιο ακριβής;', en: 'Replace the vague word in "It was a nice day." Which version is the most precise?' },
    options: { el: ['It was a good day.', 'It was a fine day.', 'It was an okay day.', 'It was a warm, cloudless day.'], en: ['It was a good day.', 'It was a fine day.', 'It was an okay day.', 'It was a warm, cloudless day.'] },
    correct: 3,
    explanation: {
      el: 'Τα "nice", "good", "fine" και "okay" είναι όλα αόριστα: δεν λένε τι ήταν καλό. Το "warm, cloudless" περιγράφει τον καιρό συγκεκριμένα ώστε ο αναγνώστης να τον φανταστεί.',
      en: '"Nice", "good", "fine" and "okay" are all vague: they never say what was good. "Warm, cloudless" describes the weather specifically enough for the reader to picture it.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι πολύ αόριστη για μια επιστημονική αναφορά; "The mixture got hot and then it changed into stuff."', en: 'Which word is too vague for a science report? "The mixture got hot and then it changed into stuff."' },
    options: { el: ['mixture', 'stuff', 'changed', 'then'], en: ['mixture', 'stuff', 'changed', 'then'] },
    correct: 1,
    explanation: {
      el: 'Το "stuff" δεν λέει τίποτα στον αναγνώστη. Μια επιστημονική αναφορά ονομάζει το αποτέλεσμα: "a thick white paste", "a clear gas". Οι ακριβείς λέξεις κάνουν το γράψιμο χρήσιμο.',
      en: '"Stuff" tells the reader nothing. A science report names the result: "a thick white paste", "a clear gas". Precise words make writing useful.',
    },
  },

  // ── 13–15: academic verbs ──────────────────────────────────────────────────
  {
    q: { el: 'Μια εργασία λέει "Compare the two poems." Τι πρέπει να κάνεις;', en: 'A task says "Compare the two poems." What should you do?' },
    options: { el: ['Say which poem is longer', 'Explain how the poems are similar and how they are different', 'Copy out both poems neatly', 'Write a new poem of your own'], en: ['Say which poem is longer', 'Explain how the poems are similar and how they are different', 'Copy out both poems neatly', 'Write a new poem of your own'] },
    correct: 1,
    explanation: {
      el: 'Το "compare" ζητά ομοιότητες και διαφορές: το θέμα, το ύφος, τη διάθεση κάθε ποιήματος. Το να πεις απλώς ποιο είναι μεγαλύτερο δεν είναι σύγκριση.',
      en: '"Compare" asks for similarities and differences: the topic, the style, the mood of each poem. Just saying which is longer is not a comparison.',
    },
  },
  {
    q: { el: 'Τι σημαίνει "analyze";', en: 'What does "analyze" mean?' },
    options: { el: ['Read something quickly', 'Give only your opinion', 'Make a list of the main events', 'Break something into parts to understand how it works'], en: ['Read something quickly', 'Give only your opinion', 'Make a list of the main events', 'Break something into parts to understand how it works'] },
    correct: 3,
    explanation: {
      el: 'Όταν αναλύεις ένα ποίημα ή έναν χαρακτήρα, το χωρίζεις σε κομμάτια (λέξεις, εικόνες, πράξεις) και εξηγείς πώς κάθε κομμάτι δουλεύει. Είναι πιο βαθύ από απλή περιγραφή.',
      en: 'When you analyze a poem or a character, you break it into pieces (words, images, actions) and explain how each piece works. It goes deeper than just describing.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα εργασίας σου ζητά να κρίνεις πόσο καλό ή χρήσιμο είναι κάτι;', en: 'Which task verb asks you to judge how good or useful something is?' },
    options: { el: ['evaluate', 'summarize', 'describe', 'list'], en: ['evaluate', 'summarize', 'describe', 'list'] },
    correct: 0,
    explanation: {
      el: 'Το "evaluate" σημαίνει να κρίνεις με λόγους: πόσο καλά δουλεύει, τι είναι δυνατό και τι αδύναμο. Το "summarize" συντομεύει, το "describe" λέει πώς είναι κάτι και το "list" απλώς απαριθμεί.',
      en: '"Evaluate" means to judge with reasons: how well it works, what is strong and what is weak. "Summarize" shortens, "describe" tells what something is like, and "list" just names items.',
    },
  },

  // ── 16–18: words with several meanings ─────────────────────────────────────
  {
    q: { el: 'Στο "The river bank was muddy after the flood", τι σημαίνει "bank";', en: 'In "The river bank was muddy after the flood", what does "bank" mean?' },
    options: { el: ['A place that keeps money', 'To lean to one side', 'The land beside a river', 'A row of switches'], en: ['A place that keeps money', 'To lean to one side', 'The land beside a river', 'A row of switches'] },
    correct: 2,
    explanation: {
      el: 'Το "bank" έχει πολλές σημασίες. Οι λέξεις "river", "muddy" και "flood" δείχνουν ότι εδώ είναι η όχθη του ποταμού, όχι η τράπεζα.',
      en: '"Bank" has several meanings. The words "river", "muddy" and "flood" show that here it is the land along the river, not a place for money.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί το "light" με τη σημασία "ελαφρύς";', en: 'Which sentence uses "light" to mean "not heavy"?' },
    options: { el: ['Please turn on the light.', 'Light the candle carefully.', 'The room was full of light.', 'The suitcase was light enough to carry.'], en: ['Please turn on the light.', 'Light the candle carefully.', 'The room was full of light.', 'The suitcase was light enough to carry.'] },
    correct: 3,
    explanation: {
      el: 'Το "light enough to carry" αφορά βάρος. Στις άλλες προτάσεις το "light" είναι η λάμπα, το ρήμα "ανάβω" ή η φωτεινότητα. Τα συμφραζόμενα σου λένε ποια σημασία ισχύει.',
      en: '"Light enough to carry" is about weight. In the other sentences "light" is a lamp, the verb "to set alight" or brightness. The context tells you which meaning applies.',
    },
  },
  {
    q: { el: 'Η λέξη "run" έχει πολλές σημασίες. Στο "The play will run for three weeks", τι σημαίνει "run";', en: 'The word "run" has many meanings. In "The play will run for three weeks", what does "run" mean?' },
    options: { el: ['Continue or be performed', 'Move fast on foot', 'Manage a business', 'Flow like water'], en: ['Continue or be performed', 'Move fast on foot', 'Manage a business', 'Flow like water'] },
    correct: 0,
    explanation: {
      el: 'Μια θεατρική παράσταση δεν τρέχει με τα πόδια. Το "run for three weeks" σημαίνει ότι θα παίζεται για τρεις εβδομάδες. Οι λέξεις "play" και "weeks" δείχνουν τη σωστή σημασία.',
      en: 'A play cannot run on legs. "Run for three weeks" means it will be performed for three weeks. The words "play" and "weeks" point to the right meaning.',
    },
  },
];
