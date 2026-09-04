/**
 * Γ' Δημοτικού · English Language Arts · Synonyms & Antonyms
 * ===========================================================
 * Original questions for a native English-speaking child of 8–9 (curriculum topics only).
 * The `en` fields are the real content; `el` is a translation for a Greek-speaking parent.
 *
 * What the unit covers, in order:
 *   1–5   synonyms: big/large, happy/glad, sad/unhappy, fast/quick, begin/start
 *   6–10  antonyms: what an antonym is, hot/cold, tall/short, empty/full, loud/quiet
 *   11–14 shades of meaning: warm/hot/boiling, big/large/enormous, annoyed/furious, whisper/shout
 *   15–18 which word fits best in the sentence
 *
 * Distractors are the real mistakes: an antonym offered where a synonym is asked,
 * a near-synonym instead of an antonym (warm for hot), a word of the wrong strength.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ELA_SYNONYMS_AND_ANTONYMS: QuizQuestion[] = [
  // ── 1–5: synonyms ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι συνώνυμο του «big»;', en: 'Which word is a synonym of «big»?' },
    options: { el: ['tiny', 'large', 'thin', 'short'], en: ['tiny', 'large', 'thin', 'short'] },
    correct: 1,
    explanation: {
      el: 'Συνώνυμο είναι μια λέξη με σχεδόν την ίδια σημασία. Big και large σημαίνουν το ίδιο: a big dog is a large dog.',
      en: 'A synonym is a word with almost the same meaning. Big and large mean the same thing: a big dog is a large dog.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει σχεδόν το ίδιο με το «happy»;', en: 'Which word means almost the same as «happy»?' },
    options: { el: ['glad', 'angry', 'tired', 'scared'], en: ['glad', 'angry', 'tired', 'scared'] },
    correct: 0,
    explanation: {
      el: 'Το glad είναι συνώνυμο του happy. Happy, glad, cheerful και joyful περιγράφουν όλα ένα καλό συναίσθημα.',
      en: 'Glad is a synonym of happy. Happy, glad, cheerful and joyful all describe a good feeling.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμο του «sad»;', en: 'Which word is a synonym of «sad»?' },
    options: { el: ['proud', 'sleepy', 'unhappy', 'hungry'], en: ['proud', 'sleepy', 'unhappy', 'hungry'] },
    correct: 2,
    explanation: {
      el: 'Το unhappy σημαίνει το ίδιο με το sad. Άλλα συνώνυμα του sad είναι gloomy και upset.',
      en: 'Unhappy means the same as sad. Other synonyms of sad are gloomy and upset.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει το ίδιο με το «fast»;', en: 'Which word means the same as «fast»?' },
    options: { el: ['slow', 'quick', 'late', 'quiet'], en: ['slow', 'quick', 'late', 'quiet'] },
    correct: 1,
    explanation: {
      el: 'Fast και quick είναι συνώνυμα: a fast runner is a quick runner. Το slow είναι το αντίθετο, δηλαδή αντώνυμο.',
      en: 'Fast and quick are synonyms: a fast runner is a quick runner. Slow is the opposite, an antonym.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμο του «begin»;', en: 'Which word is a synonym of «begin»?' },
    options: { el: ['finish', 'stop', 'wait', 'start'], en: ['finish', 'stop', 'wait', 'start'] },
    correct: 3,
    explanation: {
      el: 'Begin και start σημαίνουν το ίδιο. Finish και stop σημαίνουν το αντίθετο.',
      en: 'Begin and start mean the same thing. Finish and stop mean the opposite.',
    },
  },

  // ── 6–10: antonyms ─────────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι το αντώνυμο;', en: 'What is an antonym?' },
    options: { el: ['μια λέξη που σημαίνει το ίδιο', 'μια λέξη που σημαίνει το αντίθετο', 'μια λέξη που ομοιοκαταληκτεί', 'μια λέξη με τα ίδια γράμματα'], en: ['a word that means the same', 'a word that means the opposite', 'a word that rhymes', 'a word with the same letters'] },
    correct: 1,
    explanation: {
      el: 'Αντώνυμο είναι μια λέξη με την αντίθετη σημασία: hot και cold, up και down. Συνώνυμο είναι μια λέξη που σημαίνει το ίδιο.',
      en: 'An antonym is a word with the opposite meaning: hot and cold, up and down. A synonym is a word that means the same.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντώνυμο του «hot»;', en: 'Which word is an antonym of «hot»?' },
    options: { el: ['warm', 'boiling', 'cold', 'wet'], en: ['warm', 'boiling', 'cold', 'wet'] },
    correct: 2,
    explanation: {
      el: 'Το cold είναι το αντίθετο του hot. Τα warm και boiling δεν είναι αντίθετα, είναι άλλοι τρόποι να πεις hot.',
      en: 'Cold is the opposite of hot. Warm and boiling are not opposites; they are other ways of saying hot.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι το αντίθετο του «tall»;', en: 'Which word is the opposite of «tall»?' },
    options: { el: ['high', 'wide', 'long', 'short'], en: ['high', 'wide', 'long', 'short'] },
    correct: 3,
    explanation: {
      el: 'Το αντώνυμο του tall είναι short: a tall tree, a short bush.',
      en: 'The antonym of tall is short: a tall tree, a short bush.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντώνυμο του «empty»;', en: 'Which word is an antonym of «empty»?' },
    options: { el: ['full', 'clean', 'open', 'light'], en: ['full', 'clean', 'open', 'light'] },
    correct: 0,
    explanation: {
      el: 'Empty σημαίνει ότι δεν υπάρχει τίποτα μέσα, και full σημαίνει ότι είναι γεμάτο μέχρι πάνω. Είναι αντίθετα.',
      en: 'Empty means nothing is inside, and full means it is filled all the way up. They are opposites.',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι αντώνυμα;', en: 'Which pair of words are antonyms?' },
    options: { el: ['big – large', 'quick – fast', 'loud – quiet', 'glad – happy'], en: ['big – large', 'quick – fast', 'loud – quiet', 'glad – happy'] },
    correct: 2,
    explanation: {
      el: 'Loud και quiet είναι αντίθετα, άρα αντώνυμα. Τα άλλα ζευγάρια είναι συνώνυμα, σημαίνουν το ίδιο.',
      en: 'Loud and quiet are opposites, so they are antonyms. The other pairs are synonyms; they mean the same.',
    },
  },

  // ── 11–14: shades of meaning ───────────────────────────────────────────────
  {
    q: { el: 'Βάλε τις λέξεις στη σειρά από το λιγότερο ζεστό στο πιο ζεστό: warm, boiling, hot.', en: 'Put these words in order from least hot to most hot: warm, boiling, hot.' },
    options: { el: ['warm, hot, boiling', 'hot, warm, boiling', 'boiling, hot, warm', 'warm, boiling, hot'], en: ['warm, hot, boiling', 'hot, warm, boiling', 'boiling, hot, warm', 'warm, boiling, hot'] },
    correct: 0,
    explanation: {
      el: 'Warm είναι λίγο ζεστό, hot πιο πολύ, και boiling το πιο καυτό από όλα. Οι λέξεις μπορεί να έχουν την ίδια ιδέα αλλά διαφορετική ένταση.',
      en: 'Warm is a little hot, hot is more, and boiling is the hottest of all. Words can share an idea but have different strengths.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ο πιο δυνατός τρόπος να πεις «big»;', en: 'Which word is the strongest way to say «big»?' },
    options: { el: ['large', 'big', 'medium', 'enormous'], en: ['large', 'big', 'medium', 'enormous'] },
    correct: 3,
    explanation: {
      el: 'Big, large και enormous σημαίνουν όλα μεγάλο, αλλά το enormous είναι το πιο δυνατό. An enormous whale είναι πολύ μεγαλύτερη από a large dog.',
      en: 'Big, large and enormous all mean big, but enormous is the strongest. An enormous whale is far bigger than a large dog.',
    },
  },
  {
    q: { el: 'Ποια λέξη δείχνει τον περισσότερο θυμό;', en: 'Which word shows the most anger?' },
    options: { el: ['annoyed', 'cross', 'furious', 'bothered'], en: ['annoyed', 'cross', 'furious', 'bothered'] },
    correct: 2,
    explanation: {
      el: 'Annoyed, cross και bothered σημαίνουν λίγο θυμωμένος. Furious σημαίνει πάρα πολύ θυμωμένος, άρα είναι η πιο δυνατή λέξη.',
      en: 'Annoyed, cross and bothered mean a little angry. Furious means extremely angry, so it is the strongest word.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι η πιο ήσυχη;', en: 'Which word is the quietest?' },
    options: { el: ['shout', 'whisper', 'talk', 'yell'], en: ['shout', 'whisper', 'talk', 'yell'] },
    correct: 1,
    explanation: {
      el: 'Whisper είναι ο πιο απαλός τρόπος να μιλήσεις. Talk είναι κανονικά, και shout και yell είναι τα πιο δυνατά.',
      en: 'Whisper is the softest way to speak. Talk is normal, and shout and yell are the loudest.',
    },
  },

  // ── 15–18: which word fits best ────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ταιριάζει καλύτερα; «Το παγωτό ήταν τόσο ___ που πόνεσαν τα δόντια μου.»', en: 'Which word fits best? «The ice cream was so ___ that it made my teeth hurt.»' },
    options: { el: ['cool', 'chilly', 'freezing', 'mild'], en: ['cool', 'chilly', 'freezing', 'mild'] },
    correct: 2,
    explanation: {
      el: 'Freezing είναι η πιο δυνατή λέξη για το κρύο, και εξηγεί γιατί πόνεσαν τα δόντια. Cool και chilly δεν είναι αρκετά κρύα για κάτι τέτοιο.',
      en: 'Freezing is the strongest cold word, and it explains why the teeth hurt. Cool and chilly are not cold enough for that.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει καλύτερα; «Το γατάκι είναι τόσο ___ που χωράει στην παλάμη μου.»', en: 'Which word fits best? «The kitten is ___ enough to fit in my hand.»' },
    options: { el: ['tiny', 'huge', 'giant', 'wide'], en: ['tiny', 'huge', 'giant', 'wide'] },
    correct: 0,
    explanation: {
      el: 'Tiny σημαίνει πολύ μικρό. Μόνο κάτι tiny χωράει σε μια παλάμη. Huge και giant σημαίνουν το αντίθετο.',
      en: 'Tiny means very small. Only something tiny can fit in a hand. Huge and giant mean the opposite.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει καλύτερα; «Ο παππούς ___ αργά στο μονοπάτι, απολαμβάνοντας τα λουλούδια.»', en: 'Which word fits best? «Grandpa ___ slowly along the path, enjoying the flowers.»' },
    options: { el: ['raced', 'dashed', 'sprinted', 'strolled'], en: ['raced', 'dashed', 'sprinted', 'strolled'] },
    correct: 3,
    explanation: {
      el: 'Strolled σημαίνει περπάτησε αργά και ήρεμα. Raced, dashed και sprinted σημαίνουν όλα κινήθηκε πολύ γρήγορα, που δεν ταιριάζει με το «slowly».',
      en: 'Strolled means walked slowly and calmly. Raced, dashed and sprinted all mean moved very fast, which does not match "slowly".',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει καλύτερα; «Το μωρό ___ απαλά στον ύπνο του.»', en: 'Which word fits best? «The baby ___ softly in her sleep.»' },
    options: { el: ['screamed', 'giggled', 'roared', 'yelled'], en: ['screamed', 'giggled', 'roared', 'yelled'] },
    correct: 1,
    explanation: {
      el: 'Giggled σημαίνει γέλασε σιγανά, που ταιριάζει με το «softly». Screamed, roared και yelled είναι όλα δυνατοί ήχοι.',
      en: 'Giggled means laughed quietly, which matches "softly". Screamed, roared and yelled are all loud sounds.',
    },
  },
];
