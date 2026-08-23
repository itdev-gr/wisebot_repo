/**
 * Ε' Δημοτικού · Γλώσσα · Ουσιαστικά & Επίθετα
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. What the unit covers, in order:
 *   1–3   telling nouns from adjectives, adjective agreement (gender)
 *   4–7   declension: -ης/-ες vs -ης/-εις, feminine -η/-εις, genitive plural of -η nouns
 *   8–12  accent shifts in -ος/-η/-ο: nouns move the accent, adjectives keep it; -ιος → -ια
 *   13–14 participles in -μένος/-μένη/-μένο used as adjectives (agreement)
 *   15–18 degrees of comparison: -ότερος / πιο, superlative with article, μεγαλύτερος, -ότατος
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_NOUN_ADJECTIVE_REVIEW: QuizQuestion[] = [
  // ── 1–3: nouns vs adjectives, agreement ────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι ουσιαστικό; «Ο Νίκος διαβάζει ένα ωραίο βιβλίο.»', en: 'Which word is a noun? «Ο Νίκος διαβάζει ένα ωραίο βιβλίο.» (Nikos is reading a nice book.)' },
    options: { el: ['βιβλίο', 'ωραίο', 'διαβάζει', 'ένα'], en: ['βιβλίο', 'ωραίο', 'διαβάζει', 'ένα'] },
    correct: 0,
    explanation: {
      el: 'Το ουσιαστικό ονομάζει ένα πρόσωπο, ζώο ή πράγμα: «βιβλίο». Το «ωραίο» είναι επίθετο και το «διαβάζει» ρήμα.',
      en: 'A noun names a person, animal or thing: «βιβλίο» (book). «ωραίο» is an adjective and «διαβάζει» is a verb.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίθετο; «Η Ελένη φοράει μια κόκκινη ζακέτα.»', en: 'Which word is an adjective? «Η Ελένη φοράει μια κόκκινη ζακέτα.» (Eleni is wearing a red cardigan.)' },
    options: { el: ['Ελένη', 'φοράει', 'κόκκινη', 'ζακέτα'], en: ['Ελένη', 'φοράει', 'κόκκινη', 'ζακέτα'] },
    correct: 2,
    explanation: {
      el: 'Το επίθετο λέει πώς είναι το ουσιαστικό: «κόκκινη» ζακέτα. Η «ζακέτα» είναι ουσιαστικό.',
      en: 'An adjective tells us what the noun is like: «κόκκινη» (red) cardigan. «ζακέτα» is the noun.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο ___ σκύλος κοιμάται στον ήλιο.»', en: 'Fill in: «Ο ___ σκύλος κοιμάται στον ήλιο.» (The small dog is sleeping in the sun.)' },
    options: { el: ['μικρός', 'μικρή', 'μικρό', 'μικροί'], en: ['μικρός', 'μικρή', 'μικρό', 'μικροί'] },
    correct: 0,
    explanation: {
      el: 'Το επίθετο συμφωνεί με το ουσιαστικό. «Ο σκύλος» είναι αρσενικό, ενικός: «ο μικρός σκύλος».',
      en: 'The adjective must match the noun. «Ο σκύλος» is masculine singular, so it is «ο μικρός σκύλος».',
    },
  },

  // ── 4–7: declension, -ης/-ες vs -ης/-εις, -η/-εις ─────────────────────────
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «ο μαθητής»;', en: 'What is the plural of «ο μαθητής» (the pupil)?' },
    options: { el: ['οι μαθητές', 'οι μαθητοί', 'οι μαθήτες', 'οι μαθητείς'], en: ['οι μαθητές', 'οι μαθητοί', 'οι μαθήτες', 'οι μαθητείς'] },
    correct: 0,
    explanation: {
      el: 'Τα αρσενικά σε -ής όπως «μαθητής» κάνουν τον πληθυντικό σε -ές: οι μαθητές. Ο τόνος μένει στη λήγουσα.',
      en: 'Masculine nouns in -ής like «μαθητής» form the plural in -ές: οι μαθητές. The accent stays on the last syllable.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «η πόλη»;', en: 'What is the plural of «η πόλη» (the city)?' },
    options: { el: ['οι πόλες', 'οι πόλεις', 'οι πόλης', 'οι πόλοι'], en: ['οι πόλες', 'οι πόλεις', 'οι πόλης', 'οι πόλοι'] },
    correct: 1,
    explanation: {
      el: 'Τα θηλυκά σε -η όπως «πόλη», «δύναμη», «τάξη» κάνουν πληθυντικό σε -εις: οι πόλεις.',
      en: 'Feminine nouns in -η like «πόλη», «δύναμη», «τάξη» form the plural in -εις: οι πόλεις.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «ο συγγενής»;', en: 'What is the plural of «ο συγγενής» (the relative)?' },
    options: { el: ['οι συγγενές', 'οι συγγενήδες', 'οι συγγενείς', 'οι συγγένεις'], en: ['οι συγγενές', 'οι συγγενήδες', 'οι συγγενείς', 'οι συγγένεις'] },
    correct: 2,
    explanation: {
      el: 'Μερικά αρσενικά σε -ής κάνουν πληθυντικό σε -είς: ο συγγενής – οι συγγενείς. Πρόσεξε: ο μαθητής – οι μαθητές, αλλά ο συγγενής – οι συγγενείς.',
      en: 'Some masculine nouns in -ής form the plural in -είς: ο συγγενής – οι συγγενείς. Compare: ο μαθητής – οι μαθητές, but ο συγγενής – οι συγγενείς.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η ένωση των ___ φέρνει τη νίκη.» (η δύναμη)', en: 'Fill in: «Η ένωση των ___ φέρνει τη νίκη.» (the joining of forces brings victory) — noun: η δύναμη' },
    options: { el: ['δύναμων', 'δυνάμεων', 'δυνάμων', 'δυναμών'], en: ['δύναμων', 'δυνάμεων', 'δυνάμων', 'δυναμών'] },
    correct: 1,
    explanation: {
      el: 'Τα θηλυκά σε -η/-εις κάνουν γενική πληθυντικού σε -εων και ο τόνος κατεβαίνει μία συλλαβή: η δύναμη – των δυνάμεων.',
      en: 'Feminine nouns in -η/-εις form the genitive plural in -εων and the accent moves one syllable down: η δύναμη – των δυνάμεων.',
    },
  },

  // ── 8–12: accent shifts in -ος/-η/-ο ───────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Το σπίτι του ___ είναι παλιό.» (ο άνθρωπος)', en: 'Fill in: «Το σπίτι του ___ είναι παλιό.» (the man\'s house is old) — noun: ο άνθρωπος' },
    options: { el: ['άνθρωπου', 'ανθρώπου', 'ανθρωπού', 'άνθρωπο'], en: ['άνθρωπου', 'ανθρώπου', 'ανθρωπού', 'άνθρωπο'] },
    correct: 1,
    explanation: {
      el: 'Στα ουσιαστικά σε -ος που τονίζονται στην προπαραλήγουσα, ο τόνος κατεβαίνει στη γενική: ο άνθρωπος – του ανθρώπου.',
      en: 'In -ος nouns stressed on the third syllable from the end, the accent moves down in the genitive: ο άνθρωπος – του ανθρώπου.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η αίθουσα των ___ είναι στον πρώτο όροφο.» (ο δάσκαλος)', en: 'Fill in: «Η αίθουσα των ___ είναι στον πρώτο όροφο.» (the teachers\' room is on the first floor) — noun: ο δάσκαλος' },
    options: { el: ['δάσκαλων', 'δασκαλών', 'δάσκαλοι', 'δασκάλων'], en: ['δάσκαλων', 'δασκαλών', 'δάσκαλοι', 'δασκάλων'] },
    correct: 3,
    explanation: {
      el: 'Στη γενική πληθυντικού ο τόνος κατεβαίνει στην παραλήγουσα: ο δάσκαλος – των δασκάλων. Όχι στη λήγουσα!',
      en: 'In the genitive plural the accent moves to the second-to-last syllable: ο δάσκαλος – των δασκάλων. Not to the last one!',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή γενική; «το όμορφο σπίτι» → «η πόρτα ___»', en: 'Which genitive is correct? «το όμορφο σπίτι» (the pretty house) → «η πόρτα ___» (the door of the pretty house)' },
    options: { el: ['του ομόρφου σπιτιού', 'του όμορφου σπιτιού', 'του όμορφο σπιτιού', 'του όμορφου σπίτιου'], en: ['του ομόρφου σπιτιού', 'του όμορφου σπιτιού', 'του όμορφο σπιτιού', 'του όμορφου σπίτιου'] },
    correct: 1,
    explanation: {
      el: 'Τα επίθετα κρατούν τον τόνο τους σε όλες τις πτώσεις: του όμορφου. Μόνο τα ουσιαστικά τον κατεβάζουν (του ανθρώπου, του σπιτιού).',
      en: 'Adjectives keep their accent in every case: του όμορφου. Only nouns move it down (του ανθρώπου, του σπιτιού).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Τα κύματα των ___ είναι ψηλά τον χειμώνα.» (η θάλασσα)', en: 'Fill in: «Τα κύματα των ___ είναι ψηλά τον χειμώνα.» (the waves of the seas are high in winter) — noun: η θάλασσα' },
    options: { el: ['θάλασσων', 'θαλάσσων', 'θαλασσών', 'θάλασσας'], en: ['θάλασσων', 'θαλάσσων', 'θαλασσών', 'θάλασσας'] },
    correct: 2,
    explanation: {
      el: 'Τα θηλυκά σε -α κάνουν γενική πληθυντικού σε -ών και τονίζονται στη λήγουσα: η θάλασσα – των θαλασσών.',
      en: 'Feminine nouns in -α form the genitive plural in -ών with the accent on the last syllable: η θάλασσα – των θαλασσών.',
    },
  },
  {
    q: { el: 'Ποιο είναι το θηλυκό του επιθέτου «ο πλούσιος»;', en: 'What is the feminine of the adjective «ο πλούσιος» (rich)?' },
    options: { el: ['η πλούσιη', 'η πλούσια', 'η πλουσία', 'η πλούσιο'], en: ['η πλούσιη', 'η πλούσια', 'η πλουσία', 'η πλούσιο'] },
    correct: 1,
    explanation: {
      el: 'Τα επίθετα σε -ιος κάνουν το θηλυκό σε -ια και κρατούν τον τόνο: ο πλούσιος – η πλούσια – το πλούσιο.',
      en: 'Adjectives in -ιος form the feminine in -ια and keep their accent: ο πλούσιος – η πλούσια – το πλούσιο.',
    },
  },

  // ── 13–14: participles as adjectives ───────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε με μετοχή: «Η Μαρία βρήκε ένα ___ γράμμα στο συρτάρι.» (κλείνω)', en: 'Fill in with a participle: «Η Μαρία βρήκε ένα ___ γράμμα στο συρτάρι.» (Maria found a sealed letter in the drawer) — verb: κλείνω' },
    options: { el: ['κλεισμένο', 'κλείνοντας', 'κλεισμένη', 'κλείσει'], en: ['κλεισμένο', 'κλείνοντας', 'κλεισμένη', 'κλείσει'] },
    correct: 0,
    explanation: {
      el: 'Η μετοχή σε -μένος/-μένη/-μένο δουλεύει σαν επίθετο: συμφωνεί με το ουσιαστικό. «Το γράμμα» είναι ουδέτερο, άρα «κλεισμένο».',
      en: 'The participle in -μένος/-μένη/-μένο works like an adjective: it agrees with the noun. «Το γράμμα» is neuter, so «κλεισμένο».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Οι ___ μαθητές πήραν τον καλύτερο βαθμό.» (διαβάζω)', en: 'Fill in: «Οι ___ μαθητές πήραν τον καλύτερο βαθμό.» (the well-prepared pupils got the best mark) — verb: διαβάζω' },
    options: { el: ['διαβασμένους', 'διαβασμένες', 'διαβασμένοι', 'διαβάζοντας'], en: ['διαβασμένους', 'διαβασμένες', 'διαβασμένοι', 'διαβάζοντας'] },
    correct: 2,
    explanation: {
      el: '«Οι μαθητές» είναι αρσενικό, πληθυντικός, ονομαστική, άρα η μετοχή γίνεται «διαβασμένοι». Το «διαβάζοντας» δεν αλλάζει ποτέ μορφή και δεν είναι επίθετο.',
      en: '«Οι μαθητές» is masculine plural nominative, so the participle becomes «διαβασμένοι». «διαβάζοντας» never changes form and is not an adjective.',
    },
  },

  // ── 15–18: degrees of comparison ───────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Ο Γιώργος είναι ___ από τον Νίκο.» (ψηλός)', en: 'Fill in: «Ο Γιώργος είναι ___ από τον Νίκο.» (Giorgos is taller than Nikos) — adjective: ψηλός' },
    options: { el: ['πιο ψηλότερος', 'ψηλότερος', 'ψηλός', 'ο πιο ψηλός'], en: ['πιο ψηλότερος', 'ψηλότερος', 'ψηλός', 'ο πιο ψηλός'] },
    correct: 1,
    explanation: {
      el: 'Ο συγκριτικός βαθμός γίνεται με -ότερος ή με «πιο» + επίθετο: ψηλότερος ή πιο ψηλός. Ποτέ και τα δύο μαζί!',
      en: 'The comparative is made with -ότερος or with «πιο» + adjective: ψηλότερος or πιο ψηλός. Never both together!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η Ελένη είναι ___ μαθήτρια της τάξης.» (καλή)', en: 'Fill in: «Η Ελένη είναι ___ μαθήτρια της τάξης.» (Eleni is the best pupil in the class) — adjective: καλή' },
    options: { el: ['πιο καλή', 'η πιο καλύτερη', 'η καλύτερη', 'καλύτερη από'], en: ['πιο καλή', 'η πιο καλύτερη', 'η καλύτερη', 'καλύτερη από'] },
    correct: 2,
    explanation: {
      el: 'Ο σχετικός υπερθετικός είναι το άρθρο + συγκριτικός: η καλύτερη (ή η πιο καλή). Το «η πιο καλύτερη» είναι λάθος, γιατί λέει δύο φορές το ίδιο.',
      en: 'The relative superlative is the article + comparative: η καλύτερη (or η πιο καλή). «η πιο καλύτερη» is wrong because it says the same thing twice.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο συγκριτικός του «μεγάλος»;', en: 'What is the comparative of «μεγάλος» (big)?' },
    options: { el: ['μεγαλότερος', 'μεγαλύτερος', 'πιο μεγαλύτερος', 'μεγαλήτερος'], en: ['μεγαλότερος', 'μεγαλύτερος', 'πιο μεγαλύτερος', 'μεγαλήτερος'] },
    correct: 1,
    explanation: {
      el: 'Μερικά επίθετα έχουν ξεχωριστό συγκριτικό: μεγάλος – μεγαλύτερος, καλός – καλύτερος, κακός – χειρότερος. Γράφεται με ύψιλον: μεγαλύτερος.',
      en: 'Some adjectives have a special comparative: μεγάλος – μεγαλύτερος, καλός – καλύτερος, κακός – χειρότερος. It is spelled with ύψιλον: μεγαλύτερος.',
    },
  },
  {
    q: { el: 'Πες το με μία λέξη: «Το παγωτό ήταν πάρα πολύ νόστιμο.» → «Το παγωτό ήταν ___.»', en: 'Say it in one word: «Το παγωτό ήταν πάρα πολύ νόστιμο.» (the ice cream was very, very tasty) → «Το παγωτό ήταν ___.»' },
    options: { el: ['νοστιμότερο', 'νοστιμότατο', 'πιο νόστιμο', 'νοστιμώτατο'], en: ['νοστιμότερο', 'νοστιμότατο', 'πιο νόστιμο', 'νοστιμώτατο'] },
    correct: 1,
    explanation: {
      el: 'Ο απόλυτος υπερθετικός γίνεται με -ότατος και σημαίνει «πάρα πολύ»: νοστιμότατο. Γράφεται με όμικρον. Το «νοστιμότερο» είναι συγκριτικός.',
      en: 'The absolute superlative is made with -ότατος and means «very, very»: νοστιμότατο. It is spelled with όμικρον. «νοστιμότερο» is the comparative.',
    },
  },
];
