/**
 * Γ' Δημοτικού · Γλώσσα · Ορθογραφία & Τονισμός
 * ================================================
 * Original questions (curriculum topics only — nothing copied from textbooks).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–5   verb endings -ω / -εις / -ει / -ουμε: choosing the right person, then spelling -εις
 *   6–12  noun endings: -ος, -ης, -ας (masculine), -η, -α (feminine), -ο, -ι (neuter)
 *   13–18 accent rules: λήγουσα, παραλήγουσα, προπαραλήγουσα, where the accent goes,
 *         monosyllables without accent, and the special «ή»
 * Distractors are the spellings children really write (-ις, -η, -ω for -ο, wrong syllable).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_SPELLING_ACCENT: QuizQuestion[] = [
  // ── 1–5: verb endings ──────────────────────────────────────────────────────
  {
    q: { el: 'Εγώ ___ μια ιστορία.', en: 'Εγώ ___ μια ιστορία. (I ___ a story.)' },
    options: { el: ['γράφω', 'γράφεις', 'γράφει', 'γράφουμε'], en: ['γράφω', 'γράφεις', 'γράφει', 'γράφουμε'] },
    correct: 0,
    explanation: {
      el: 'Όταν μιλάω για εμένα (εγώ), το ρήμα τελειώνει σε -ω: εγώ γράφω.',
      en: 'When the subject is «εγώ» (I), the verb ends in -ω: εγώ γράφω.',
    },
  },
  {
    q: { el: 'Εσύ ___ ποδόσφαιρο;', en: 'Εσύ ___ ποδόσφαιρο; (Do you ___ football?)' },
    options: { el: ['παίζω', 'παίζεις', 'παίζει', 'παίζουμε'], en: ['παίζω', 'παίζεις', 'παίζει', 'παίζουμε'] },
    correct: 1,
    explanation: {
      el: 'Όταν μιλάω σε κάποιον (εσύ), το ρήμα τελειώνει σε -εις: εσύ παίζεις.',
      en: 'When the subject is «εσύ» (you), the verb ends in -εις: εσύ παίζεις.',
    },
  },
  {
    q: { el: 'Ο Νίκος ___ γάλα κάθε πρωί.', en: 'Ο Νίκος ___ γάλα κάθε πρωί. (Nikos ___ milk every morning.)' },
    options: { el: ['πίνω', 'πίνεις', 'πίνει', 'πίνουμε'], en: ['πίνω', 'πίνεις', 'πίνει', 'πίνουμε'] },
    correct: 2,
    explanation: {
      el: 'Ο Νίκος είναι «αυτός». Για αυτός, αυτή, αυτό το ρήμα τελειώνει σε -ει: ο Νίκος πίνει.',
      en: 'Nikos is «αυτός» (he). For he, she, it the verb ends in -ει: ο Νίκος πίνει.',
    },
  },
  {
    q: { el: 'Εμείς ___ στην παραλία.', en: 'Εμείς ___ στην παραλία. (We ___ on the beach.)' },
    options: { el: ['τρέχω', 'τρέχεις', 'τρέχει', 'τρέχουμε'], en: ['τρέχω', 'τρέχεις', 'τρέχει', 'τρέχουμε'] },
    correct: 3,
    explanation: {
      el: 'Όταν είμαστε πολλοί μαζί (εμείς), το ρήμα τελειώνει σε -ουμε: εμείς τρέχουμε.',
      en: 'When the subject is «εμείς» (we), the verb ends in -ουμε: εμείς τρέχουμε.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; «Εσύ ___ τα αστέρια.»', en: 'Which word is spelled correctly? «Εσύ ___ τα αστέρια.» (You look at the stars.)' },
    options: { el: ['κοιτάζεις', 'κοιτάζης', 'κοιτάζις', 'κοιτάζοις'], en: ['κοιτάζεις', 'κοιτάζης', 'κοιτάζις', 'κοιτάζοις'] },
    correct: 0,
    explanation: {
      el: 'Το «εσύ» θέλει κατάληξη -εις, που γράφεται πάντα με έψιλον γιώτα (ει): κοιτάζεις.',
      en: 'The «εσύ» (you) ending is -εις, always written with ει: κοιτάζεις.',
    },
  },

  // ── 6–12: noun endings ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly? (the road)' },
    options: { el: ['ο δρόμος', 'ο δρόμως', 'ο δρόμοις', 'ο δρόμης'], en: ['ο δρόμος', 'ο δρόμως', 'ο δρόμοις', 'ο δρόμης'] },
    correct: 0,
    explanation: {
      el: 'Τα αρσενικά που τελειώνουν σε -ος γράφονται με όμικρον: ο δρόμος, ο κήπος, ο ουρανός.',
      en: 'Masculine nouns ending in -ος are written with όμικρον (ο): ο δρόμος, ο κήπος, ο ουρανός.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly? (the pupil)' },
    options: { el: ['ο μαθητίς', 'ο μαθητής', 'ο μαθητείς', 'ο μαθητοίς'], en: ['ο μαθητίς', 'ο μαθητής', 'ο μαθητείς', 'ο μαθητοίς'] },
    correct: 1,
    explanation: {
      el: 'Τα αρσενικά σε -ης γράφονται με ήτα: ο μαθητής, ο ναύτης, ο εργάτης.',
      en: 'Masculine nouns ending in -ης are written with ήτα (η): ο μαθητής, ο ναύτης, ο εργάτης.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly? (the father)' },
    options: { el: ['ο πατέραις', 'ο πατέρας', 'ο πατέρες', 'ο πατέρος'], en: ['ο πατέραις', 'ο πατέρας', 'ο πατέρες', 'ο πατέρος'] },
    correct: 1,
    explanation: {
      el: 'Τα αρσενικά σε -ας γράφονται με άλφα: ο πατέρας, ο άντρας, ο φύλακας. Το «οι πατέρες» είναι για πολλούς.',
      en: 'Masculine nouns ending in -ας are written with άλφα (α): ο πατέρας, ο άντρας, ο φύλακας. «Οι πατέρες» is the plural.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly? (the sister)' },
    options: { el: ['η αδελφεί', 'η αδελφύ', 'η αδελφή', 'η αδελφί'], en: ['η αδελφεί', 'η αδελφύ', 'η αδελφή', 'η αδελφί'] },
    correct: 2,
    explanation: {
      el: 'Τα θηλυκά που τελειώνουν σε -η γράφονται με ήτα: η αδελφή, η αυλή, η ζωή.',
      en: 'Feminine nouns ending in -η are written with ήτα (η): η αδελφή, η αυλή, η ζωή.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly? (the door)' },
    options: { el: ['η πόρτα', 'η πόρται', 'η πόρτας', 'η πόρτες'], en: ['η πόρτα', 'η πόρται', 'η πόρτας', 'η πόρτες'] },
    correct: 0,
    explanation: {
      el: 'Τα θηλυκά σε -α γράφονται με άλφα σκέτο: η πόρτα, η μητέρα, η θάλασσα. Το «οι πόρτες» είναι για πολλές.',
      en: 'Feminine nouns ending in -α are written with a plain άλφα: η πόρτα, η μητέρα, η θάλασσα. «Οι πόρτες» is the plural.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly? (the school)' },
    options: { el: ['το σχολείω', 'το σχολείο', 'το σχολείου', 'το σχολείον'], en: ['το σχολείω', 'το σχολείο', 'το σχολείου', 'το σχολείον'] },
    correct: 1,
    explanation: {
      el: 'Τα ουδέτερα σε -ο γράφονται με όμικρον: το σχολείο, το βουνό, το μήλο. Το ωμέγα είναι για τα ρήματα (γράφω).',
      en: 'Neuter nouns ending in -ο are written with όμικρον (ο): το σχολείο, το βουνό, το μήλο. Ωμέγα (ω) is for verbs (γράφω).',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly? (the child)' },
    options: { el: ['το παιδή', 'το παιδεί', 'το παιδί', 'το παιδύ'], en: ['το παιδή', 'το παιδεί', 'το παιδί', 'το παιδύ'] },
    correct: 2,
    explanation: {
      el: 'Τα ουδέτερα σε -ι γράφονται με γιώτα: το παιδί, το σπίτι, το ψωμί.',
      en: 'Neuter nouns ending in -ι are written with γιώτα (ι): το παιδί, το σπίτι, το ψωμί.',
    },
  },

  // ── 13–18: accent rules ────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη τονίζεται στη λήγουσα (την τελευταία συλλαβή);', en: 'Which word has its accent on the λήγουσα (the last syllable)?' },
    options: { el: ['παιδί', 'μήλο', 'θάλασσα', 'τρένο'], en: ['παιδί', 'μήλο', 'θάλασσα', 'τρένο'] },
    correct: 0,
    explanation: {
      el: 'Λήγουσα είναι η τελευταία συλλαβή. Στο παι-δί ο τόνος πέφτει στο «δί», στο τέλος.',
      en: 'The λήγουσα is the last syllable. In παι-δί the accent falls on «δί», at the end.',
    },
  },
  {
    q: { el: 'Ποια λέξη τονίζεται στην παραλήγουσα (την προτελευταία συλλαβή);', en: 'Which word has its accent on the παραλήγουσα (the second-to-last syllable)?' },
    options: { el: ['ουρανός', 'σχολείο', 'άνθρωπος', 'καρδιά'], en: ['ουρανός', 'σχολείο', 'άνθρωπος', 'καρδιά'] },
    correct: 1,
    explanation: {
      el: 'Παραλήγουσα είναι η προτελευταία συλλαβή. Σχο-λεί-ο: ο τόνος είναι στο «λεί», μία συλλαβή πριν το τέλος.',
      en: 'The παραλήγουσα is the second-to-last syllable. Σχο-λεί-ο: the accent is on «λεί», one syllable before the end.',
    },
  },
  {
    q: { el: 'Ποια λέξη τονίζεται στην προπαραλήγουσα (την τρίτη συλλαβή από το τέλος);', en: 'Which word has its accent on the προπαραλήγουσα (the third syllable from the end)?' },
    options: { el: ['νερό', 'μολύβι', 'θάλασσα', 'καρέκλα'], en: ['νερό', 'μολύβι', 'θάλασσα', 'καρέκλα'] },
    correct: 2,
    explanation: {
      el: 'Θά-λασ-σα: ο τόνος είναι στο «θά», τρεις συλλαβές από το τέλος. Αυτή είναι η προπαραλήγουσα.',
      en: 'Θά-λασ-σα: the accent is on «θά», three syllables from the end. That is the προπαραλήγουσα.',
    },
  },
  {
    q: { el: 'Πού μπαίνει ο τόνος; πο-δη-λα-το', en: 'Where does the accent go? πο-δη-λα-το (bicycle)' },
    options: { el: ['πόδηλατο', 'ποδηλατό', 'ποδηλάτο', 'ποδήλατο'], en: ['πόδηλατο', 'ποδηλατό', 'ποδηλάτο', 'ποδήλατο'] },
    correct: 3,
    explanation: {
      el: 'Λέμε πο-ΔΗ-λα-το, άρα ο τόνος μπαίνει στο «δή», στην προπαραλήγουσα. Πιο πίσω από εκεί ο τόνος δεν πάει ποτέ!',
      en: 'We say po-DI-la-to, so the accent goes on «δή», the προπαραλήγουσα. The accent never goes further back than that!',
    },
  },
  {
    q: { el: 'Ποια φράση είναι γραμμένη σωστά;', en: 'Which phrase is written correctly? (the water)' },
    options: { el: ['τό νερό', 'το νερό', 'το νέρο', 'τό νέρο'], en: ['τό νερό', 'το νερό', 'το νέρο', 'τό νέρο'] },
    correct: 1,
    explanation: {
      el: 'Οι λέξεις με μία συλλαβή (το, και, με, σε) δεν παίρνουν τόνο. Το «νερό» τονίζεται στη λήγουσα.',
      en: 'One-syllable words (το, και, με, σε) do not take an accent. «Νερό» is accented on the last syllable.',
    },
  },
  {
    q: { el: 'Θέλεις μήλο ___ πορτοκάλι;', en: 'Θέλεις μήλο ___ πορτοκάλι; (Do you want an apple OR an orange?)' },
    options: { el: ['η', 'εί', 'ή', 'ί'], en: ['η', 'εί', 'ή', 'ί'] },
    correct: 2,
    explanation: {
      el: 'Το «ή» που σημαίνει «ή το ένα ή το άλλο» παίρνει τόνο, για να μην μπερδεύεται με το άρθρο «η» (η μαμά).',
      en: 'The word «ή» meaning «or» takes an accent so it is not confused with the article «η» (the), as in «η μαμά».',
    },
  },
];
