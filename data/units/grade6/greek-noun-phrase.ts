/**
 * ΣΤ' Δημοτικού · Γλώσσα · Ονοματική Φράση
 * =========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–2   the article (άρθρο) as the first word of the noun phrase
 *   3–6   the adjective and its agreement with the noun (gender, number, case)
 *   7–9   numerals that change form (τρεις/τρία, τέσσερις/τέσσερα, ένας/μία/ένα)
 *   10–11 pronouns around the noun (αυτός/αυτή/αυτό, possessive μου/σου/του…)
 *   12–13 the whole phrase agreeing: article + adjective + noun in the right case
 *   14–16 the genitive of possession (του Γιώργου, της Μαρίας, των μαθητών)
 *   17–18 apposition (παράθεση): a second noun phrase that explains the first
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_NOUN_PHRASE: QuizQuestion[] = [
  // ── 1–2: the article ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; «___ παιδί παίζει στην αυλή.»', en: 'Which article fits? «___ παιδί παίζει στην αυλή.» (The child is playing in the yard.)' },
    options: { el: ['Ο', 'Η', 'Το', 'Οι'], en: ['Ο', 'Η', 'Το', 'Οι'] },
    correct: 2,
    explanation: {
      el: 'Το «παιδί» είναι ουδέτερο, γι\' αυτό παίρνει το άρθρο «το». Το άρθρο είναι συνήθως η πρώτη λέξη της ονοματικής φράσης.',
      en: '«Παιδί» is neuter, so it takes the article «το». The article is usually the first word of the noun phrase.',
    },
  },
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; «___ θάλασσα σήμερα είναι ήρεμη.»', en: 'Which article fits? «___ θάλασσα σήμερα είναι ήρεμη.» (The sea is calm today.)' },
    options: { el: ['Ο', 'Η', 'Το', 'Τα'], en: ['Ο', 'Η', 'Το', 'Τα'] },
    correct: 1,
    explanation: {
      el: 'Η «θάλασσα» είναι θηλυκό και ενικός, άρα «η θάλασσα». Το άρθρο δείχνει το γένος και τον αριθμό του ουσιαστικού.',
      en: '«Θάλασσα» is feminine singular, so it is «η θάλασσα». The article shows the gender and number of the noun.',
    },
  },

  // ── 3–6: the adjective and agreement ────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι επίθετο στη φράση «το κόκκινο ποδήλατο του Νίκου»;', en: 'Which word is the adjective in «το κόκκινο ποδήλατο του Νίκου» (Nikos\'s red bicycle)?' },
    options: { el: ['το', 'κόκκινο', 'ποδήλατο', 'Νίκου'], en: ['το', 'κόκκινο', 'ποδήλατο', 'Νίκου'] },
    correct: 1,
    explanation: {
      el: 'Το επίθετο λέει πώς είναι το ουσιαστικό. Το «κόκκινο» μάς λέει πώς είναι το ποδήλατο.',
      en: 'The adjective tells us what the noun is like. «Κόκκινο» (red) tells us what the bicycle is like.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «η ___ μαθήτρια» (έξυπνος)', en: 'Complete correctly: «η ___ μαθήτρια» (the clever student, girl) with the adjective «έξυπνος».' },
    options: { el: ['έξυπνος', 'έξυπνη', 'έξυπνο', 'έξυπνες'], en: ['έξυπνος', 'έξυπνη', 'έξυπνο', 'έξυπνες'] },
    correct: 1,
    explanation: {
      el: 'Το επίθετο συμφωνεί με το ουσιαστικό. Η «μαθήτρια» είναι θηλυκό ενικού, άρα «έξυπνη».',
      en: 'The adjective agrees with the noun. «Μαθήτρια» is feminine singular, so the adjective is «έξυπνη».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «τα ___ παιχνίδια» (καινούργιος)', en: 'Complete correctly: «τα ___ παιχνίδια» (the new toys) with the adjective «καινούργιος».' },
    options: { el: ['καινούργιοι', 'καινούργιες', 'καινούργια', 'καινούργιο'], en: ['καινούργιοι', 'καινούργιες', 'καινούργια', 'καινούργιο'] },
    correct: 2,
    explanation: {
      el: 'Τα «παιχνίδια» είναι ουδέτερο πληθυντικού. Το επίθετο γίνεται κι αυτό ουδέτερο πληθυντικού: «καινούργια».',
      en: '«Παιχνίδια» is neuter plural. The adjective becomes neuter plural too: «καινούργια».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «η πόρτα του ___ κήπου» (μεγάλος)', en: 'Complete correctly: «η πόρτα του ___ κήπου» (the door of the big garden) with the adjective «μεγάλος».' },
    options: { el: ['μεγάλος', 'μεγάλο', 'μεγάλου', 'μεγάλων'], en: ['μεγάλος', 'μεγάλο', 'μεγάλου', 'μεγάλων'] },
    correct: 2,
    explanation: {
      el: 'Το «κήπου» είναι γενική ενικού, άρα και το επίθετο μπαίνει σε γενική: «του μεγάλου κήπου». Το επίθετο συμφωνεί και στην πτώση.',
      en: '«Κήπου» is genitive singular, so the adjective goes into the genitive too: «του μεγάλου κήπου». Adjectives agree in case as well.',
    },
  },

  // ── 7–9: numerals ───────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε σωστά; «___ κορίτσια παίζουν στην παραλία.»', en: 'Which is correct? «___ κορίτσια παίζουν στην παραλία.» (Three girls are playing on the beach.)' },
    options: { el: ['Τρεις', 'Τρία', 'Τρείς', 'Τριών'], en: ['Τρεις', 'Τρία', 'Τρείς', 'Τριών'] },
    correct: 1,
    explanation: {
      el: 'Το «κορίτσι» είναι ουδέτερο, γι\' αυτό λέμε «τρία κορίτσια». Το «τρεις» (χωρίς τόνο στο ει!) είναι για αρσενικά και θηλυκά: τρεις φίλοι, τρεις φίλες.',
      en: '«Κορίτσι» is neuter, so we say «τρία κορίτσια». «Τρεις» (no accent on ει!) is for masculine and feminine nouns: τρεις φίλοι, τρεις φίλες.',
    },
  },
  {
    q: { el: 'Πώς λέμε σωστά; «Στην ομάδα είναι ___ μαθητές.»', en: 'Which is correct? «Στην ομάδα είναι ___ μαθητές.» (There are four students in the team.)' },
    options: { el: ['τέσσερα', 'τέσσερις', 'τεσσάρων', 'τέσσερες'], en: ['τέσσερα', 'τέσσερις', 'τεσσάρων', 'τέσσερες'] },
    correct: 1,
    explanation: {
      el: 'Οι «μαθητές» είναι αρσενικό, άρα «τέσσερις μαθητές». Το «τέσσερα» το χρησιμοποιούμε μόνο με ουδέτερα: τέσσερα βιβλία.',
      en: '«Μαθητές» is masculine, so it is «τέσσερις μαθητές». «Τέσσερα» is only for neuter nouns: τέσσερα βιβλία.',
    },
  },
  {
    q: { el: 'Πώς λέμε σωστά; «Έφαγα ___ μήλο.»', en: 'Which is correct? «Έφαγα ___ μήλο.» (I ate one apple.)' },
    options: { el: ['ένας', 'μία', 'ένα', 'έναν'], en: ['ένας', 'μία', 'ένα', 'έναν'] },
    correct: 2,
    explanation: {
      el: 'Το «μήλο» είναι ουδέτερο, άρα «ένα μήλο». Λέμε «ένας φίλος», «μία φίλη», «ένα μήλο» — το αριθμητικό «ένα» αλλάζει ανάλογα με το γένος.',
      en: '«Μήλο» is neuter, so it is «ένα μήλο». We say «ένας φίλος», «μία φίλη», «ένα μήλο» — the numeral «one» changes with the gender.',
    },
  },

  // ── 10–11: pronouns around the noun ─────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε σωστά: «___ το βιβλίο είναι δικό μου.»', en: 'Complete correctly: «___ το βιβλίο είναι δικό μου.» (This book is mine.)' },
    options: { el: ['Αυτός', 'Αυτή', 'Αυτό', 'Αυτοί'], en: ['Αυτός', 'Αυτή', 'Αυτό', 'Αυτοί'] },
    correct: 2,
    explanation: {
      el: 'Η δεικτική αντωνυμία «αυτός, αυτή, αυτό» συμφωνεί με το ουσιαστικό. Το «βιβλίο» είναι ουδέτερο, άρα «αυτό το βιβλίο».',
      en: 'The demonstrative pronoun «αυτός, αυτή, αυτό» agrees with the noun. «Βιβλίο» is neuter, so it is «αυτό το βιβλίο».',
    },
  },
  {
    q: { el: 'Ποια φράση σημαίνει «το σχολείο που ανήκει σε εκείνους»;', en: 'Which phrase means «their school»?' },
    options: { el: ['το σχολείο του', 'το σχολείο μας', 'το σχολείο τους', 'το σχολείο σας'], en: ['το σχολείο του', 'το σχολείο μας', 'το σχολείο τους', 'το σχολείο σας'] },
    correct: 2,
    explanation: {
      el: 'Οι κτητικές αντωνυμίες μπαίνουν μετά το ουσιαστικό: μου, σου, του/της, μας, σας, τους. Το «τους» σημαίνει «εκείνων», δηλαδή «το σχολείο τους».',
      en: 'Possessive pronouns come after the noun: μου, σου, του/της, μας, σας, τους. «Τους» means «their», so «το σχολείο τους».',
    },
  },

  // ── 12–13: the whole phrase agrees ──────────────────────────────────────────
  {
    q: { el: 'Ποια φράση είναι γραμμένη σωστά;', en: 'Which phrase is written correctly? (the good friends)' },
    options: { el: ['οι καλοί φίλοι', 'οι καλές φίλοι', 'οι καλά φίλοι', 'τους καλούς φίλοι'], en: ['οι καλοί φίλοι', 'οι καλές φίλοι', 'οι καλά φίλοι', 'τους καλούς φίλοι'] },
    correct: 0,
    explanation: {
      el: 'Άρθρο, επίθετο και ουσιαστικό συμφωνούν σε γένος, αριθμό και πτώση. «Οι φίλοι» είναι αρσενικό, πληθυντικός, ονομαστική, άρα «οι καλοί φίλοι».',
      en: 'Article, adjective and noun agree in gender, number and case. «Οι φίλοι» is masculine plural nominative, so «οι καλοί φίλοι».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «Στον δρόμο είδα ___.»', en: 'Complete correctly: «Στον δρόμο είδα ___.» (On the street I saw the tall man.)' },
    options: { el: ['ο ψηλός άντρας', 'τον ψηλό άντρα', 'του ψηλού άντρα', 'τον ψηλός άντρα'], en: ['ο ψηλός άντρας', 'τον ψηλό άντρα', 'του ψηλού άντρα', 'τον ψηλός άντρα'] },
    correct: 1,
    explanation: {
      el: 'Μετά το «είδα» η φράση είναι αντικείμενο, άρα μπαίνει σε αιτιατική: «τον ψηλό άντρα». Και οι τρεις λέξεις αλλάζουν μαζί.',
      en: 'After «είδα» (I saw) the phrase is the object, so it goes into the accusative: «τον ψηλό άντρα». All three words change together.',
    },
  },

  // ── 14–16: genitive of possession ───────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε σωστά: «Το ποδήλατο ___ Γιώργου είναι μπλε.»', en: 'Complete correctly: «Το ποδήλατο ___ Γιώργου είναι μπλε.» (George\'s bicycle is blue.)' },
    options: { el: ['του', 'τον', 'το', 'τους'], en: ['του', 'τον', 'το', 'τους'] },
    correct: 0,
    explanation: {
      el: 'Για να πούμε σε ποιον ανήκει κάτι, βάζουμε το όνομα σε γενική: «του Γιώργου». Η γενική δείχνει τον κάτοχο.',
      en: 'To say who something belongs to, we put the name in the genitive: «του Γιώργου». The genitive shows the owner.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «Η τσάντα ___ Μαρίας είναι βαριά.»', en: 'Complete correctly: «Η τσάντα ___ Μαρίας είναι βαριά.» (Maria\'s bag is heavy.)' },
    options: { el: ['τη', 'την', 'της', 'τις'], en: ['τη', 'την', 'της', 'τις'] },
    correct: 2,
    explanation: {
      el: 'Η γενική του θηλυκού άρθρου είναι «της»: «η τσάντα της Μαρίας». Το «την» είναι αιτιατική, όχι γενική.',
      en: 'The genitive of the feminine article is «της»: «η τσάντα της Μαρίας». «Την» is accusative, not genitive.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «Τα βιβλία ___ μαθητών είναι στα θρανία.»', en: 'Complete correctly: «Τα βιβλία ___ μαθητών είναι στα θρανία.» (The students\' books are on the desks.)' },
    options: { el: ['τον', 'των', 'τους', 'τις'], en: ['τον', 'των', 'τους', 'τις'] },
    correct: 1,
    explanation: {
      el: 'Στη γενική πληθυντικού το άρθρο είναι «των» για όλα τα γένη: των μαθητών, των μαθητριών, των παιδιών. Γράφεται με ωμέγα!',
      en: 'In the genitive plural the article is «των» for all genders: των μαθητών, των μαθητριών, των παιδιών. It is spelled with omega!',
    },
  },

  // ── 17–18: apposition (παράθεση) ────────────────────────────────────────────
  {
    q: { el: 'Ποιες λέξεις είναι η παράθεση; «Η Αθήνα, η πρωτεύουσα της Ελλάδας, είναι μεγάλη πόλη.»', en: 'Which words are the apposition? «Η Αθήνα, η πρωτεύουσα της Ελλάδας, είναι μεγάλη πόλη.» (Athens, the capital of Greece, is a big city.)' },
    options: { el: ['Η Αθήνα', 'η πρωτεύουσα της Ελλάδας', 'είναι μεγάλη πόλη', 'μεγάλη πόλη'], en: ['Η Αθήνα', 'η πρωτεύουσα της Ελλάδας', 'είναι μεγάλη πόλη', 'μεγάλη πόλη'] },
    correct: 1,
    explanation: {
      el: 'Η παράθεση είναι μια ονοματική φράση που μπαίνει δίπλα σε ένα ουσιαστικό και το εξηγεί. Χωρίζεται με κόμματα: «η πρωτεύουσα της Ελλάδας» εξηγεί τι είναι η Αθήνα.',
      en: 'An apposition is a noun phrase placed next to a noun to explain it. It is set off by commas: «η πρωτεύουσα της Ελλάδας» explains what Athens is.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση υπάρχει παράθεση;', en: 'Which sentence contains an apposition?' },
    options: {
      el: ['Ο Νίκος, ο αδερφός μου, παίζει μπάλα.', 'Ο Νίκος παίζει μπάλα με τον αδερφό μου.', 'Ο αδερφός μου παίζει μπάλα.', 'Ο Νίκος και ο αδερφός μου παίζουν μπάλα.'],
      en: ['Ο Νίκος, ο αδερφός μου, παίζει μπάλα.', 'Ο Νίκος παίζει μπάλα με τον αδερφό μου.', 'Ο αδερφός μου παίζει μπάλα.', 'Ο Νίκος και ο αδερφός μου παίζουν μπάλα.'],
    },
    correct: 0,
    explanation: {
      el: 'Στην πρώτη πρόταση το «ο αδερφός μου» μπαίνει ανάμεσα σε κόμματα και εξηγεί ποιος είναι ο Νίκος — αυτό είναι παράθεση. Στις άλλες ο αδερφός είναι άλλο πρόσωπο ή απλό υποκείμενο.',
      en: 'In the first sentence «ο αδερφός μου» (my brother) sits between commas and explains who Nikos is — that is an apposition. In the others the brother is a different person or a plain subject.',
    },
  },
];
