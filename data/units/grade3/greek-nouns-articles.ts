/**
 * Γ' Δημοτικού · Γλώσσα · Ουσιαστικά & Άρθρα
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Options are Greek forms, so el/en option
 * arrays are mostly identical; the English side explains the Greek rule.
 *
 * What the unit covers, in order:
 *   1–2   what a noun is, the article shows the gender (ο / η / το)
 *   3–5   nominative: singular → plural (οι μαθητές, οι θάλασσες, τα παιδιά)
 *   6–8   genitive: "whose?" — του, της, των
 *   9–11  accusative: τον / τη(ν) / τα, with the final -ν rule
 *   12–13 vocative: calling someone — no article, Γιώργο!, Δάσκαλε!
 *   14–16 the article changes with the case; naming the case in a sentence
 *   17–18 common vs proper nouns and the capital letter
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_NOUNS_ARTICLES: QuizQuestion[] = [
  // ── 1–2: what a noun is, the article shows the gender ──────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι ουσιαστικό;', en: 'Which of these Greek words is a noun?' },
    options: {
      el: ['τρέχω', 'γρήγορα', 'σκύλος', 'όμορφος'],
      en: ['τρέχω (I run)', 'γρήγορα (quickly)', 'σκύλος (dog)', 'όμορφος (beautiful)'],
    },
    correct: 2,
    explanation: {
      el: 'Ουσιαστικά είναι οι λέξεις που ονομάζουν πρόσωπα, ζώα, πράγματα ή τόπους. Ο «σκύλος» είναι ζώο, άρα είναι ουσιαστικό.',
      en: 'Nouns are words that name people, animals, things or places. «σκύλος» (dog) is an animal, so it is a noun.',
    },
  },
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; «___ κορίτσι»', en: 'Which article fits? «___ κορίτσι» (the girl)' },
    options: { el: ['ο', 'η', 'το', 'οι'], en: ['ο', 'η', 'το', 'οι'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη «κορίτσι» είναι ουδέτερη, γι\' αυτό παίρνει το άρθρο «το»: το κορίτσι. Το άρθρο μάς δείχνει το γένος.',
      en: 'The word «κορίτσι» is neuter, so it takes the article «το»: το κορίτσι. The article shows us the gender of the noun.',
    },
  },

  // ── 3–5: nominative, singular to plural ────────────────────────────────────
  {
    q: { el: 'Πώς γίνεται «ο μαθητής» στον πληθυντικό;', en: 'What is the plural of «ο μαθητής» (the pupil)?' },
    options: { el: ['οι μαθητές', 'οι μαθητοί', 'τα μαθητές', 'οι μαθητάδες'], en: ['οι μαθητές', 'οι μαθητοί', 'τα μαθητές', 'οι μαθητάδες'] },
    correct: 0,
    explanation: {
      el: 'Ο μαθητής → οι μαθητές. Τα αρσενικά σε -ης κάνουν -ες στον πληθυντικό και το άρθρο «ο» γίνεται «οι».',
      en: 'Ο μαθητής → οι μαθητές. Masculine nouns ending in -ης end in -ες in the plural, and the article «ο» becomes «οι».',
    },
  },
  {
    q: { el: 'Πώς γίνεται «η θάλασσα» στον πληθυντικό;', en: 'What is the plural of «η θάλασσα» (the sea)?' },
    options: { el: ['η θάλασσες', 'οι θάλασσες', 'τις θάλασσες', 'οι θάλασσα'], en: ['η θάλασσες', 'οι θάλασσες', 'τις θάλασσες', 'οι θάλασσα'] },
    correct: 1,
    explanation: {
      el: 'Η θάλασσα → οι θάλασσες. Το θηλυκό άρθρο «η» γίνεται «οι» στον πληθυντικό και η λέξη τελειώνει σε -ες.',
      en: 'Η θάλασσα → οι θάλασσες. The feminine article «η» becomes «οι» in the plural and the word ends in -ες.',
    },
  },
  {
    q: { el: 'Πώς γίνεται «το παιδί» στον πληθυντικό;', en: 'What is the plural of «το παιδί» (the child)?' },
    options: { el: ['τα παιδί', 'οι παιδιά', 'τα παιδιά', 'τους παιδιά'], en: ['τα παιδί', 'οι παιδιά', 'τα παιδιά', 'τους παιδιά'] },
    correct: 2,
    explanation: {
      el: 'Το παιδί → τα παιδιά. Στα ουδέτερα το άρθρο «το» γίνεται «τα» και αλλάζει και η κατάληξη της λέξης.',
      en: 'Το παιδί → τα παιδιά. With neuter nouns the article «το» becomes «τα» and the ending of the word changes too.',
    },
  },

  // ── 6–8: genitive — "whose?" ───────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Το ποδήλατο ___ είναι κόκκινο.»', en: 'Complete: «Το ποδήλατο ___ είναι κόκκινο.» (George\'s bike is red.)' },
    options: { el: ['του Γιώργου', 'ο Γιώργος', 'τον Γιώργο', 'Γιώργο'], en: ['του Γιώργου', 'ο Γιώργος', 'τον Γιώργο', 'Γιώργο'] },
    correct: 0,
    explanation: {
      el: 'Όταν ρωτάμε «τίνος είναι;», χρησιμοποιούμε τη γενική: το ποδήλατο του Γιώργου. Ο Γιώργος → του Γιώργου.',
      en: 'When we ask “whose is it?”, we use the genitive: το ποδήλατο του Γιώργου. Ο Γιώργος → του Γιώργου.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η τσάντα ___ είναι μπλε.»', en: 'Complete: «Η τσάντα ___ είναι μπλε.» (The teacher\'s bag is blue.)' },
    options: { el: ['η δασκάλα', 'τη δασκάλα', 'της δασκάλας', 'τις δασκάλες'], en: ['η δασκάλα', 'τη δασκάλα', 'της δασκάλας', 'τις δασκάλες'] },
    correct: 2,
    explanation: {
      el: 'Η τσάντα της δασκάλας. Στα θηλυκά η γενική ενικού παίρνει το άρθρο «της» και η λέξη παίρνει ένα -ς στο τέλος.',
      en: 'Η τσάντα της δασκάλας. For feminine nouns the genitive singular takes the article «της» and the word gets a -ς on the end.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Τα παιχνίδια ___ είναι στο κουτί.»', en: 'Complete: «Τα παιχνίδια ___ είναι στο κουτί.» (The children\'s toys are in the box.)' },
    options: { el: ['τα παιδιά', 'των παιδιών', 'τα παιδιών', 'του παιδιών'], en: ['τα παιδιά', 'των παιδιών', 'τα παιδιών', 'του παιδιών'] },
    correct: 1,
    explanation: {
      el: 'Τα παιχνίδια των παιδιών. Στη γενική πληθυντικού το άρθρο είναι πάντα «των» και η λέξη τελειώνει σε -ων.',
      en: 'Τα παιχνίδια των παιδιών. In the genitive plural the article is always «των» and the word ends in -ων.',
    },
  },

  // ── 9–11: accusative ───────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Η Ελένη βλέπει ___ από το παράθυρο.»', en: 'Complete: «Η Ελένη βλέπει ___ από το παράθυρο.» (Eleni sees the garden from the window.)' },
    options: { el: ['ο κήπος', 'τον κήπο', 'του κήπου', 'τον κήπος'], en: ['ο κήπος', 'τον κήπο', 'του κήπου', 'τον κήπος'] },
    correct: 1,
    explanation: {
      el: 'Η Ελένη βλέπει τον κήπο. Αυτό που βλέπουμε, θέλουμε ή έχουμε μπαίνει σε αιτιατική: ο κήπος → τον κήπο (χωρίς το -ς).',
      en: 'Η Ελένη βλέπει τον κήπο. The thing we see, want or have goes in the accusative: ο κήπος → τον κήπο (the -ς drops).',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστά γραμμένο; «Ο Νίκος αγαπάει ___ του.»', en: 'Which is written correctly? «Ο Νίκος αγαπάει ___ του.» (Nikos loves his mum.)' },
    options: { el: ['τη μαμά', 'την μαμά', 'της μαμάς', 'η μαμά'], en: ['τη μαμά', 'την μαμά', 'της μαμάς', 'η μαμά'] },
    correct: 0,
    explanation: {
      el: 'Ο Νίκος αγαπάει τη μαμά του. Το «την» κρατάει το -ν μόνο πριν από φωνήεν ή κ, π, τ, ξ, ψ, γκ, μπ, ντ, τσ, τζ. Πριν από το μ το χάνει: τη μαμά.',
      en: 'Ο Νίκος αγαπάει τη μαμά του. «την» keeps its final -ν only before a vowel or κ, π, τ, ξ, ψ, γκ, μπ, ντ, τσ, τζ. Before μ it drops: τη μαμά.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η γιαγιά ποτίζει ___ κάθε πρωί.»', en: 'Complete: «Η γιαγιά ποτίζει ___ κάθε πρωί.» (Grandma waters the flowers every morning.)' },
    options: { el: ['των λουλουδιών', 'τους λουλούδια', 'τα λουλούδια', 'το λουλούδια'], en: ['των λουλουδιών', 'τους λουλούδια', 'τα λουλούδια', 'το λουλούδια'] },
    correct: 2,
    explanation: {
      el: 'Η γιαγιά ποτίζει τα λουλούδια. Στα ουδέτερα η ονομαστική και η αιτιατική είναι ίδιες: τα λουλούδια και στις δύο.',
      en: 'Η γιαγιά ποτίζει τα λουλούδια. For neuter nouns the nominative and the accusative are the same: τα λουλούδια in both.',
    },
  },

  // ── 12–13: vocative ────────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία φωνάζει τον αδερφό της να έρθει. Τι λέει;', en: 'Maria calls her brother to come. What does she say?' },
    options: { el: ['Γιώργος, έλα εδώ!', 'Γιώργου, έλα εδώ!', 'Γιώργο, έλα εδώ!', 'Τον Γιώργο, έλα εδώ!'], en: ['Γιώργος, έλα εδώ!', 'Γιώργου, έλα εδώ!', 'Γιώργο, έλα εδώ!', 'Τον Γιώργο, έλα εδώ!'] },
    correct: 2,
    explanation: {
      el: 'Όταν φωνάζουμε κάποιον, χρησιμοποιούμε την κλητική: Γιώργο! Η κλητική δεν παίρνει άρθρο και το -ς φεύγει.',
      en: 'When we call someone, we use the vocative: Γιώργο! The vocative has no article and the final -ς goes away.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να ρωτήσει τον δάσκαλο. Πώς ξεκινάει; «___, μπορώ να βγω έξω;»', en: 'Nikos wants to ask the teacher. How does he start? «___, μπορώ να βγω έξω;» (Teacher, may I go out?)' },
    options: { el: ['Δάσκαλος', 'Δάσκαλε', 'Δάσκαλο', 'Δασκάλου'], en: ['Δάσκαλος', 'Δάσκαλε', 'Δάσκαλο', 'Δασκάλου'] },
    correct: 1,
    explanation: {
      el: '«Δάσκαλε, μπορώ να βγω έξω;» Τα αρσενικά σε -ος κάνουν την κλητική σε -ε: ο δάσκαλος → δάσκαλε, ο φίλος → φίλε.',
      en: '«Δάσκαλε, μπορώ να βγω έξω;» Masculine nouns in -ος make the vocative in -ε: ο δάσκαλος → δάσκαλε, ο φίλος → φίλε.',
    },
  },

  // ── 14–16: the article changes with the case ───────────────────────────────
  {
    q: { el: 'Η λέξη «ο φίλος» στη γενική ενικού γίνεται:', en: 'The word «ο φίλος» (the friend) in the genitive singular becomes:' },
    options: { el: ['τον φίλο', 'του φίλου', 'των φίλων', 'τους φίλους'], en: ['τον φίλο', 'του φίλου', 'των φίλων', 'τους φίλους'] },
    correct: 1,
    explanation: {
      el: 'Ο φίλος → του φίλου. Το αρσενικό άρθρο αλλάζει με την πτώση: ο (ονομαστική), του (γενική), τον (αιτιατική).',
      en: 'Ο φίλος → του φίλου. The masculine article changes with the case: ο (nominative), του (genitive), τον (accusative).',
    },
  },
  {
    q: { el: 'Ποιο άρθρο λείπει; «Βλέπω ___ φίλες μου στην αυλή.»', en: 'Which article is missing? «Βλέπω ___ φίλες μου στην αυλή.» (I see my friends in the yard.)' },
    options: { el: ['οι', 'των', 'τις', 'τη'], en: ['οι', 'των', 'τις', 'τη'] },
    correct: 2,
    explanation: {
      el: 'Βλέπω τις φίλες μου. Στον πληθυντικό το θηλυκό άρθρο είναι: οι (ονομαστική), των (γενική), τις (αιτιατική).',
      en: 'Βλέπω τις φίλες μου. In the plural the feminine article is: οι (nominative), των (genitive), τις (accusative).',
    },
  },
  {
    q: { el: 'Στην πρόταση «Είδα τον Νίκο στο πάρκο», σε ποια πτώση είναι το «τον Νίκο»;', en: 'In the sentence «Είδα τον Νίκο στο πάρκο» (I saw Nikos in the park), which case is «τον Νίκο» in?' },
    options: { el: ['ονομαστική', 'γενική', 'αιτιατική', 'κλητική'], en: ['nominative', 'genitive', 'accusative', 'vocative'] },
    correct: 2,
    explanation: {
      el: 'Το άρθρο «τον» μάς δείχνει αιτιατική. Ο Νίκος είναι αυτός που είδα, γι\' αυτό γίνεται «τον Νίκο».',
      en: 'The article «τον» tells us it is the accusative. Nikos is the one I saw, so he becomes «τον Νίκο».',
    },
  },

  // ── 17–18: common vs proper nouns ──────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι κύριο όνομα;', en: 'Which of these Greek words is a proper noun?' },
    options: {
      el: ['πόλη', 'ποτάμι', 'κορίτσι', 'Θεσσαλονίκη'],
      en: ['πόλη (city)', 'ποτάμι (river)', 'κορίτσι (girl)', 'Θεσσαλονίκη (Thessaloniki)'],
    },
    correct: 3,
    explanation: {
      el: 'Η «Θεσσαλονίκη» είναι το όνομα μιας συγκεκριμένης πόλης, άρα είναι κύριο όνομα και γράφεται με κεφαλαίο. Η «πόλη» είναι κοινό όνομα.',
      en: '«Θεσσαλονίκη» is the name of one particular city, so it is a proper noun and starts with a capital letter. «πόλη» (city) is a common noun.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly? (Maria lives in Athens.)' },
    options: {
      el: ['Η Μαρία μένει στην Αθήνα.', 'Η μαρία μένει στην Αθήνα.', 'Η Μαρία μένει στην αθήνα.', 'Η Μαρία Μένει στην Αθήνα.'],
      en: ['Η Μαρία μένει στην Αθήνα.', 'Η μαρία μένει στην Αθήνα.', 'Η Μαρία μένει στην αθήνα.', 'Η Μαρία Μένει στην Αθήνα.'],
    },
    correct: 0,
    explanation: {
      el: 'Τα κύρια ονόματα (Μαρία, Αθήνα) γράφονται πάντα με κεφαλαίο το πρώτο γράμμα. Τα ρήματα, όπως το «μένει», όχι.',
      en: 'Proper nouns (Μαρία, Αθήνα) always start with a capital letter. Verbs, like «μένει», do not.',
    },
  },
];
