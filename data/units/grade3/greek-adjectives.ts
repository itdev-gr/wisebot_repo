/**
 * Γ' Δημοτικού · Γλώσσα · Επίθετα
 * ================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9.
 *
 * What the unit covers, in order:
 *   1      what an adjective is (the word that describes a noun)
 *   2–8    agreement with the noun: gender, number, then case (τον…, της…)
 *   9–13   the -ος/-η/-ο pattern and the -ος/-α/-ο pattern (vowel before -ος → -α)
 *   14–18  synonyms and antonyms, ending with a mixed question (antonym + agreement)
 *
 * Distractors are the real mistakes: the wrong gender ending, singular for plural,
 * «-η» after a vowel (ωραίη), the near-meaning word instead of the opposite.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_ADJECTIVES: QuizQuestion[] = [
  // ── 1: what an adjective is ──────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι επίθετο; «Ο μικρός σκύλος τρέχει.»', en: 'Which word is an adjective? «Ο μικρός σκύλος τρέχει.» (The small dog runs.)' },
    options: { el: ['σκύλος', 'μικρός', 'τρέχει', 'ο'], en: ['σκύλος', 'μικρός', 'τρέχει', 'ο'] },
    correct: 1,
    explanation: {
      el: 'Το επίθετο μας λέει πώς είναι κάτι. «Μικρός» λέει πώς είναι ο σκύλος, άρα είναι επίθετο.',
      en: 'An adjective tells us what something is like. «Μικρός» (small) says what the dog is like, so it is the adjective.',
    },
  },

  // ── 2–8: agreement in gender, number, case ───────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: η ___ μπάλα', en: 'Fill in: η ___ μπάλα (the red ball)' },
    options: { el: ['κόκκινος', 'κόκκινη', 'κόκκινο', 'κόκκινοι'], en: ['κόκκινος', 'κόκκινη', 'κόκκινο', 'κόκκινοι'] },
    correct: 1,
    explanation: {
      el: 'Η μπάλα είναι θηλυκό (η), άρα και το επίθετο γίνεται θηλυκό: η κόκκινη μπάλα.',
      en: '«Μπάλα» is feminine (η), so the adjective must be feminine too: η κόκκινη μπάλα.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: το ___ σπίτι', en: 'Fill in: το ___ σπίτι (the tall house)' },
    options: { el: ['ψηλός', 'ψηλή', 'ψηλό', 'ψηλοί'], en: ['ψηλός', 'ψηλή', 'ψηλό', 'ψηλοί'] },
    correct: 2,
    explanation: {
      el: 'Το σπίτι είναι ουδέτερο (το), άρα το επίθετο τελειώνει σε -ο: το ψηλό σπίτι.',
      en: '«Σπίτι» is neuter (το), so the adjective ends in -ο: το ψηλό σπίτι.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: οι ___ φίλοι', en: 'Fill in: οι ___ φίλοι (the good friends)' },
    options: { el: ['καλός', 'καλές', 'καλοί', 'καλά'], en: ['καλός', 'καλές', 'καλοί', 'καλά'] },
    correct: 2,
    explanation: {
      el: 'Οι φίλοι είναι αρσενικό και πολλά (πληθυντικός). Το επίθετο γίνεται κι αυτό πληθυντικός: οι καλοί φίλοι.',
      en: '«Φίλοι» is masculine and plural. The adjective goes plural too: οι καλοί φίλοι.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: οι ___ μαθήτριες', en: 'Fill in: οι ___ μαθήτριες (the clever girl students)' },
    options: { el: ['έξυπνος', 'έξυπνες', 'έξυπνοι', 'έξυπνα'], en: ['έξυπνος', 'έξυπνες', 'έξυπνοι', 'έξυπνα'] },
    correct: 1,
    explanation: {
      el: 'Οι μαθήτριες είναι θηλυκό στον πληθυντικό. Το θηλυκό στον πληθυντικό τελειώνει σε -ες: οι έξυπνες μαθήτριες.',
      en: '«Μαθήτριες» is feminine plural. Feminine plural ends in -ες: οι έξυπνες μαθήτριες.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: τα ___ παιδιά', en: 'Fill in: τα ___ παιδιά (the happy children)' },
    options: { el: ['χαρούμενα', 'χαρούμενοι', 'χαρούμενες', 'χαρούμενο'], en: ['χαρούμενα', 'χαρούμενοι', 'χαρούμενες', 'χαρούμενο'] },
    correct: 0,
    explanation: {
      el: 'Τα παιδιά είναι ουδέτερο στον πληθυντικό. Το ουδέτερο στον πληθυντικό τελειώνει σε -α: τα χαρούμενα παιδιά.',
      en: '«Παιδιά» is neuter plural. Neuter plural ends in -α: τα χαρούμενα παιδιά.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Βλέπω τον ___ κήπο.', en: 'Fill in: Βλέπω τον ___ κήπο. (I see the beautiful garden.)' },
    options: { el: ['όμορφος', 'όμορφη', 'όμορφο', 'όμορφοι'], en: ['όμορφος', 'όμορφη', 'όμορφο', 'όμορφοι'] },
    correct: 2,
    explanation: {
      el: 'Μετά το «τον» το αρσενικό χάνει το -ς: τον όμορφο κήπο. Το επίθετο ακολουθεί το ουσιαστικό (τον κήπο).',
      en: 'After «τον» the masculine drops its -ς: τον όμορφο κήπο. The adjective follows the noun (τον κήπο).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Το ποδήλατο της ___ Ελένης είναι μπλε.', en: 'Fill in: Το ποδήλατο της ___ Ελένης είναι μπλε. (Big Eleni\'s bike is blue.)' },
    options: { el: ['μεγάλη', 'μεγάλος', 'μεγάλο', 'μεγάλης'], en: ['μεγάλη', 'μεγάλος', 'μεγάλο', 'μεγάλης'] },
    correct: 3,
    explanation: {
      el: 'Μετά το «της» το θηλυκό παίρνει -ης, όπως και το όνομα: της μεγάλης Ελένης.',
      en: 'After «της» the feminine takes -ης, just like the name: της μεγάλης Ελένης.',
    },
  },

  // ── 9–13: the -ος/-η/-ο and -ος/-α/-ο patterns ───────────────────────────
  {
    q: { el: 'Ποια τριάδα είναι σωστή;', en: 'Which set of three (masculine, feminine, neuter) is correct?' },
    options: { el: ['καλός, καλή, καλό', 'καλός, καλά, καλό', 'καλός, καλή, καλά', 'καλός, καλοί, καλό'], en: ['καλός, καλή, καλό', 'καλός, καλά, καλό', 'καλός, καλή, καλά', 'καλός, καλοί, καλό'] },
    correct: 0,
    explanation: {
      el: 'Τα περισσότερα επίθετα πάνε -ος, -η, -ο: ο καλός, η καλή, το καλό.',
      en: 'Most adjectives follow -ος, -η, -ο: ο καλός, η καλή, το καλό.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: ο ωραίος, η ___, το ωραίο', en: 'Fill in: ο ωραίος, η ___, το ωραίο (nice)' },
    options: { el: ['ωραίη', 'ωραία', 'ωραίο', 'ωραίες'], en: ['ωραίη', 'ωραία', 'ωραίο', 'ωραίες'] },
    correct: 1,
    explanation: {
      el: 'Όταν πριν από το -ος υπάρχει φωνήεν (α, ε, ι, υ), το θηλυκό τελειώνει σε -α: η ωραία. Δεν λέμε «ωραίη».',
      en: 'When a vowel comes before -ος, the feminine ends in -α: η ωραία. We never say «ωραίη».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: Η σούπα είναι ___. (κρύος)', en: 'Fill in: Η σούπα είναι ___. (The soup is cold.) Use «κρύος».' },
    options: { el: ['κρύη', 'κρύο', 'κρύα', 'κρύοι'], en: ['κρύη', 'κρύο', 'κρύα', 'κρύοι'] },
    correct: 2,
    explanation: {
      el: 'Η σούπα είναι θηλυκό. Το «κρύος» έχει φωνήεν (υ) πριν το -ος, άρα το θηλυκό είναι «κρύα»: η κρύα σούπα.',
      en: '«Σούπα» is feminine. «Κρύος» has a vowel (υ) before -ος, so the feminine is «κρύα»: η κρύα σούπα.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: η ___ δασκάλα (νέος)', en: 'Fill in: η ___ δασκάλα (the new teacher). Use «νέος».' },
    options: { el: ['νέη', 'νέα', 'νέο', 'νέοι'], en: ['νέη', 'νέα', 'νέο', 'νέοι'] },
    correct: 1,
    explanation: {
      el: 'Ο νέος, η νέα, το νέο. Πριν το -ος υπάρχει το ε, άρα το θηλυκό παίρνει -α.',
      en: 'Ο νέος, η νέα, το νέο. There is an ε before -ος, so the feminine takes -α.',
    },
  },
  {
    q: { el: 'Ποιο επίθετο κάνει το θηλυκό του σε -α;', en: 'Which adjective makes its feminine in -α?' },
    options: { el: ['καλός', 'πλούσιος', 'μεγάλος', 'ψηλός'], en: ['καλός', 'πλούσιος', 'μεγάλος', 'ψηλός'] },
    correct: 1,
    explanation: {
      el: 'Μόνο το «πλούσιος» έχει φωνήεν (ι) πριν το -ος: ο πλούσιος, η πλούσια. Τα άλλα κάνουν -η: καλή, μεγάλη, ψηλή.',
      en: 'Only «πλούσιος» has a vowel (ι) before -ος: ο πλούσιος, η πλούσια. The others make -η: καλή, μεγάλη, ψηλή.',
    },
  },

  // ── 14–18: synonyms and antonyms ─────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη σημαίνει το ίδιο με το «όμορφος»;', en: 'Which word means the same as «όμορφος» (beautiful)?' },
    options: { el: ['ωραίος', 'άσχημος', 'μεγάλος', 'γρήγορος'], en: ['ωραίος', 'άσχημος', 'μεγάλος', 'γρήγορος'] },
    correct: 0,
    explanation: {
      el: 'Όμορφος και ωραίος σημαίνουν το ίδιο. Λέξεις με την ίδια σημασία λέγονται συνώνυμα.',
      en: '«Όμορφος» and «ωραίος» both mean beautiful. Words with the same meaning are called synonyms.',
    },
  },
  {
    q: { el: 'Ποιο είναι συνώνυμο του «χαρούμενος»;', en: 'Which is a synonym of «χαρούμενος» (happy)?' },
    options: { el: ['λυπημένος', 'κουρασμένος', 'ήσυχος', 'ευτυχισμένος'], en: ['λυπημένος', 'κουρασμένος', 'ήσυχος', 'ευτυχισμένος'] },
    correct: 3,
    explanation: {
      el: 'Χαρούμενος = ευτυχισμένος. Το «λυπημένος» είναι το αντίθετο, όχι το συνώνυμο!',
      en: '«Χαρούμενος» = «ευτυχισμένος» (happy). «Λυπημένος» (sad) is the opposite, not a synonym!',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «ζεστός»;', en: 'What is the opposite of «ζεστός» (hot)?' },
    options: { el: ['ζεστή', 'γλυκός', 'κρύος', 'μαλακός'], en: ['ζεστή', 'γλυκός', 'κρύος', 'μαλακός'] },
    correct: 2,
    explanation: {
      el: 'Ζεστός – κρύος. Λέξεις με αντίθετη σημασία λέγονται αντώνυμα. Το «ζεστή» είναι η ίδια λέξη στο θηλυκό.',
      en: '«Ζεστός» (hot) – «κρύος» (cold). Words with opposite meanings are called antonyms. «Ζεστή» is just the same word in the feminine.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «γρήγορος»;', en: 'What is the opposite of «γρήγορος» (fast)?' },
    options: { el: ['ήσυχος', 'δυνατός', 'γρήγορη', 'αργός'], en: ['ήσυχος', 'δυνατός', 'γρήγορη', 'αργός'] },
    correct: 3,
    explanation: {
      el: 'Γρήγορος – αργός. Ο λαγός είναι γρήγορος, η χελώνα είναι αργή.',
      en: '«Γρήγορος» (fast) – «αργός» (slow). The hare is fast, the tortoise is slow.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε με το αντίθετο: Ο Γιώργος έχει ένα παλιό ποδήλατο, ο Νίκος έχει ένα ___ ποδήλατο.', en: 'Fill in with the opposite: Ο Γιώργος έχει ένα παλιό ποδήλατο, ο Νίκος έχει ένα ___ ποδήλατο. (Giorgos has an old bike, Nikos has a ___ bike.)' },
    options: { el: ['καινούργιος', 'καινούργια', 'καινούργιο', 'παλιό'], en: ['καινούργιος', 'καινούργια', 'καινούργιο', 'παλιό'] },
    correct: 2,
    explanation: {
      el: 'Το αντίθετο του «παλιό» είναι «καινούργιο». Το ποδήλατο είναι ουδέτερο, άρα λέμε «καινούργιο», όχι «καινούργιος».',
      en: 'The opposite of «παλιό» (old) is «καινούργιο» (new). «Ποδήλατο» is neuter, so we say «καινούργιο», not «καινούργιος».',
    },
  },
];
