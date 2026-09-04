/**
 * Ε' Δημοτικού · ELA · Δύσκολες Ορθογραφίες / Tricky Spellings
 * ==============================================================
 * Original questions for a native English-speaking child of 10–11 (US Grade 5 / UK Year 5–6).
 * The «el» side is a faithful Greek translation for a Greek-speaking parent; the English
 * words being tested stay in English on both sides. US spelling throughout (color, neighbor).
 *
 * What the unit covers, in order:
 *   1–4   i before e, except after c: believe, receive, the exception weird, friend
 *   5–8   silent letters: knight, Wednesday, island, autumn
 *   9–12  -tion / -sion: station, decision, invention vs television, discussion
 *   13–18 commonly misspelled words: separate, necessary, definitely, because, and spotting errors
 *
 * Distractors are the real misspellings children produce: recieve, Wensday, seperate,
 * definately, becuase, and the wrong "shun" ending.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ELA_TRICKY_SPELLINGS: QuizQuestion[] = [
  // ── 1–4: i before e, except after c ────────────────────────────────────────
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['beleive', 'believe', 'beleve', 'bilieve'], en: ['beleive', 'believe', 'beleve', 'bilieve'] },
    correct: 1,
    explanation: {
      el: 'Θυμήσου τον στίχο: i before e, except after c. Στο believe δεν υπάρχει c πριν από το ie, άρα πρώτα το i: bel-ie-ve.',
      en: 'Remember the rhyme: i before e, except after c. There is no c before the ie in believe, so it is i first: bel-ie-ve.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['recieve', 'receeve', 'receive', 'reseive'], en: ['recieve', 'receeve', 'receive', 'reseive'] },
    correct: 2,
    explanation: {
      el: 'Στο receive, το ie/ei έρχεται αμέσως μετά από c, άρα γυρίζει σε ei: rec-ei-ve. Το ίδιο συμβαίνει στα ceiling και deceive.',
      en: 'In receive, the ie/ei comes right after a c, so it flips to ei: rec-ei-ve. The same happens in ceiling and deceive.',
    },
  },
  {
    q: { el: 'Ποια λέξη σπάει τον κανόνα "i before e";', en: 'Which word breaks the "i before e" rule?' },
    options: { el: ['field', 'piece', 'chief', 'weird'], en: ['field', 'piece', 'chief', 'weird'] },
    correct: 3,
    explanation: {
      el: 'Το weird είναι όντως παράξενο: έχει ei χωρίς c πριν. Τα neighbor, weigh και either σπάνε επίσης τον κανόνα, οπότε ο στίχος είναι οδηγός, όχι νόμος.',
      en: 'Weird is weird: it has ei with no c before it. Neighbor, weigh and either break the rule too, so the rhyme is a guide, not a law.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['freind', 'friend', 'frend', 'frind'], en: ['freind', 'friend', 'frend', 'frind'] },
    correct: 1,
    explanation: {
      el: 'Το friend ακολουθεί το i before e: fr-ie-nd. Ένα κόλπο: a friend is with you to the end (ο φίλος είναι μαζί σου μέχρι το end).',
      en: 'Friend follows i before e: fr-ie-nd. A handy trick: a friend is with you to the end.',
    },
  },

  // ── 5–8: silent letters ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο γράμμα δεν προφέρεται στο "knight";', en: 'Which letter is silent in "knight"?' },
    options: { el: ['n', 'i', 'k', 't'], en: ['n', 'i', 'k', 't'] },
    correct: 2,
    explanation: {
      el: 'Το knight αρχίζει με άφωνο k, γι\' αυτό ακούγεται ακριβώς σαν το "night". Το k στα knight, knee, knock και know δεν προφέρεται ποτέ.',
      en: 'Knight starts with a silent k, so it sounds exactly like "night". The k in knight, knee, knock and know is never pronounced.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['Wensday', 'Wednesday', 'Wendsday', 'Wednsday'], en: ['Wensday', 'Wednesday', 'Wendsday', 'Wednsday'] },
    correct: 1,
    explanation: {
      el: 'Το Wednesday κρύβει ένα άφωνο d: Wed-nes-day. Πες το σε τρία κομμάτια μέσα σου όταν το γράφεις.',
      en: 'Wednesday hides a silent d: Wed-nes-day. Say it in three pieces in your head when you write it.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει άφωνο s;', en: 'Which word has a silent s?' },
    options: { el: ['island', 'castle', 'listen', 'whistle'], en: ['island', 'castle', 'listen', 'whistle'] },
    correct: 0,
    explanation: {
      el: 'Το island έχει άφωνο s: λέμε "eye-land". Τα castle, listen και whistle έχουν άφωνο t αντί γι\' αυτό.',
      en: 'Island has a silent s: we say "eye-land". Castle, listen and whistle have a silent t instead.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['autum', 'autumn', 'autunm', 'autem'], en: ['autum', 'autumn', 'autunm', 'autem'] },
    correct: 1,
    explanation: {
      el: 'Το autumn τελειώνει με άφωνο n. Το ακούς στη συγγενική λέξη autumnal, που είναι καλός τρόπος να το θυμάσαι.',
      en: 'Autumn ends with a silent n. You can hear it in the related word autumnal, which is a good way to remember it.',
    },
  },

  // ── 9–12: -tion / -sion ────────────────────────────────────────────────────
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['stashun', 'stasion', 'stachion', 'station'], en: ['stashun', 'stasion', 'stachion', 'station'] },
    correct: 3,
    explanation: {
      el: 'Ο ήχος "shun" στο τέλος μιας λέξης γράφεται συνήθως -tion: station, nation, action. Είναι η πιο συνηθισμένη από τις καταλήξεις "shun".',
      en: 'The "shun" sound at the end of a word is usually spelled -tion: station, nation, action. It is the most common of the "shun" endings.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['decision', 'decition', 'desision', 'decishion'], en: ['decision', 'decition', 'desision', 'decishion'] },
    correct: 0,
    explanation: {
      el: 'Το decision τελειώνει σε -sion, επειδή έρχεται από το ρήμα decide που τελειώνει σε d. Λέξεις που τελειώνουν σε -de ή -se συχνά παίρνουν -sion: decide → decision, confuse → confusion.',
      en: 'Decision ends in -sion, because it comes from the verb decide with a d at the end. Words ending in -de or -se often take -sion: decide → decision, confuse → confusion.',
    },
  },
  {
    q: { el: 'Ποια λέξη τελειώνει με την ίδια κατάληξη όπως το "invention";', en: 'Which word ends with the same ending as "invention"?' },
    options: { el: ['celebration', 'television', 'explosion', 'confusion'], en: ['celebration', 'television', 'explosion', 'confusion'] },
    correct: 0,
    explanation: {
      el: 'Τα invention και celebration τελειώνουν και τα δύο σε -tion. Τα television, explosion και confusion παίρνουν -sion.',
      en: 'Invention and celebration both end in -tion. Television, explosion and confusion take -sion.',
    },
  },
  {
    q: { el: 'Ποια από αυτές είναι γραμμένη σωστά;', en: 'Which of these is spelled correctly?' },
    options: { el: ['discussion', 'discustion', 'discushion', 'discusion'], en: ['discussion', 'discustion', 'discushion', 'discusion'] },
    correct: 0,
    explanation: {
      el: 'Το discussion κρατάει το διπλό s από το discuss και προσθέτει -ion. Όταν η βασική λέξη τελειώνει ήδη σε -ss, η κατάληξη είναι -sion.',
      en: 'Discussion keeps the double s from discuss and adds -ion. When the base word already ends in -ss, the ending is -sion.',
    },
  },

  // ── 13–18: commonly misspelled words ───────────────────────────────────────
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['separate', 'seperate', 'separete', 'seprate'], en: ['separate', 'seperate', 'separete', 'seprate'] },
    correct: 0,
    explanation: {
      el: 'Υπάρχει ένα rat (ποντίκι) μέσα στο separate: sep-a-rat-e. Αυτό το κολπάκι σου θυμίζει ότι το μεσαίο φωνήεν είναι a, όχι e.',
      en: 'There is a rat in separate: sep-a-rat-e. That little trick reminds you the middle vowel is a, not e.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['necesary', 'neccessary', 'necissary', 'necessary'], en: ['necesary', 'neccessary', 'necissary', 'necessary'] },
    correct: 3,
    explanation: {
      el: 'Το necessary έχει ένα c και δύο s. Θυμήσου: ένα πουκάμισο έχει έναν γιακά (collar) και δύο μανίκια (sleeves).',
      en: 'Necessary has one c and two s\'s. Remember: a shirt has one collar and two sleeves.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['definately', 'definitly', 'defenitely', 'definitely'], en: ['definately', 'definitly', 'defenitely', 'definitely'] },
    correct: 3,
    explanation: {
      el: 'Το definitely έρχεται από τη λέξη finite, οπότε κράτα αυτό το i: de-finite-ly. Δεν έχει κανένα a, όσο κι αν ακούγεται ότι έχει.',
      en: 'Definitely comes from the word finite, so keep that i: de-finite-ly. There is no a in it, however much it sounds like one.',
    },
  },
  {
    q: { el: 'Ποια γραφή είναι σωστή;', en: 'Which spelling is correct?' },
    options: { el: ['becuase', 'becouse', 'because', 'beacuse'], en: ['becuase', 'becouse', 'because', 'beacuse'] },
    correct: 2,
    explanation: {
      el: 'Because: b-e-c-a-u-s-e. Βοηθάει μια πρόταση-μνημονικό: Big Elephants Can Always Understand Small Elephants.',
      en: 'Because: b-e-c-a-u-s-e. A memory sentence helps: Big Elephants Can Always Understand Small Elephants.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει όλες τις λέξεις γραμμένες σωστά;', en: 'Which sentence has every word spelled correctly?' },
    options: {
      el: ['We definately need to seperate the two groups.', 'We definitely need to separate the two groups.', 'We definitly need to separate the two groups.', 'We definitely need to seperate the two groups.'],
      en: ['We definately need to seperate the two groups.', 'We definitely need to separate the two groups.', 'We definitly need to separate the two groups.', 'We definitely need to seperate the two groups.'],
    },
    correct: 1,
    explanation: {
      el: 'Τα definitely (από το finite) και separate (με το rat μέσα) είναι δύο από τις πιο συχνά λάθος γραμμένες λέξεις στα αγγλικά, οπότε έλεγχέ τα κάθε φορά.',
      en: 'Definitely (from finite) and separate (with a rat in it) are two of the most commonly misspelled words in English, so check them every time.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη λάθος;', en: 'Which word is spelled incorrectly?' },
    options: { el: ['beautiful', 'tomorrow', 'recieve', 'government'], en: ['beautiful', 'tomorrow', 'recieve', 'government'] },
    correct: 2,
    explanation: {
      el: 'Μετά από c ο κανόνας γυρίζει: receive, όχι recieve. Οι άλλες είναι όλες σωστές: beautiful, tomorrow (ένα m, δύο r) και government (μην ξεχνάς το n).',
      en: 'After a c, the rule flips: receive, not recieve. The others are all correct: beautiful, tomorrow (one m, two r\'s) and government (do not forget the n).',
    },
  },
];
