/**
 * Ε' Δημοτικού · Γλώσσα · Ορθογραφία & Παραγωγή Λέξεων
 * ======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order the class meets the topics:
 *   1–3   prefixes (ξε-, α- στερητικό, υπο-/αντι-/περι-)
 *   4–6   suffixes (-άκι, -άς, -ινος/-ένιος) and what they add to the meaning
 *   7–10  compound words: the two parts, the linking -ο-, spotting a compound
 *   11–13 derived words: which root word they come from
 *   14–16 telling παράγωγες from σύνθετες λέξεις
 *   17–18 spelling by etymology: the word family tells you the vowel
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_ORTHOGRAPHY_MORPHOLOGY: QuizQuestion[] = [
  // ── 1–3: prefixes ──────────────────────────────────────────────────────────
  {
    q: { el: 'Στη λέξη «ξεκλειδώνω», ποιο κομμάτι είναι το πρόθημα;', en: 'In the word «ξεκλειδώνω» (unlock), which part is the prefix?' },
    options: { el: ['ξε-', '-κλειδ-', '-ώνω', 'κλειδώνω'], en: ['ξε-', '-κλειδ-', '-ώνω', 'κλειδώνω'] },
    correct: 0,
    explanation: {
      el: 'Το πρόθημα μπαίνει μπροστά από τη λέξη. Το «ξε-» μπήκε μπροστά από το «κλειδώνω» και έδωσε το αντίθετο: ξεκλειδώνω.',
      en: 'A prefix goes in front of a word. «ξε-» was put in front of «κλειδώνω» (lock) and gave the opposite: ξεκλειδώνω (unlock).',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «άγνωστος»;', en: 'What does the word «άγνωστος» mean?' },
    options: { el: ['αυτός που ξέρει πολλά', 'αυτός που είναι πολύ γνωστός', 'αυτός που δεν τον ξέρουμε', 'αυτός που γνωρίζει όλους'], en: ['someone who knows a lot', 'someone who is very well known', 'someone we do not know', 'someone who knows everybody'] },
    correct: 2,
    explanation: {
      el: 'Το «α-» μπροστά από μια λέξη σημαίνει «χωρίς» ή «όχι». Άγνωστος = όχι γνωστός. Έτσι και: άδικος, άχρωμος, άγραφος.',
      en: 'The prefix «α-» means “without” or “not”. Άγνωστος = not known. The same happens in άδικος (unfair), άχρωμος (colourless), άγραφος (unwritten).',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «γράφω το όνομά μου κάτω από ένα κείμενο»;', en: 'Which word means “I write my name under a text”?' },
    options: { el: ['ξαναγράφω', 'υπογράφω', 'περιγράφω', 'αντιγράφω'], en: ['ξαναγράφω', 'υπογράφω', 'περιγράφω', 'αντιγράφω'] },
    correct: 1,
    explanation: {
      el: 'Το «υπο-» σημαίνει «κάτω από». Υπογράφω = γράφω από κάτω. Ξαναγράφω = γράφω πάλι, περιγράφω = γράφω γύρω από κάτι, αντιγράφω = γράφω το ίδιο.',
      en: 'The prefix «υπο-» means “under”. Υπογράφω = I sign (write underneath). Ξαναγράφω = write again, περιγράφω = describe, αντιγράφω = copy.',
    },
  },

  // ── 4–6: suffixes ──────────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι ένα «ψαράκι»;', en: 'What is a «ψαράκι»?' },
    options: { el: ['ένα μικρό ψάρι', 'ένα μεγάλο ψάρι', 'αυτός που πιάνει ψάρια', 'ένα μαγαζί με ψάρια'], en: ['a small fish', 'a big fish', 'a person who catches fish', 'a shop that sells fish'] },
    correct: 0,
    explanation: {
      el: 'Η κατάληξη «-άκι» κάνει τη λέξη υποκοριστικό, δηλαδή δείχνει κάτι μικρό: ψάρι → ψαράκι, σπίτι → σπιτάκι.',
      en: 'The suffix «-άκι» makes a diminutive, a word for something small: ψάρι (fish) → ψαράκι (little fish), σπίτι (house) → σπιτάκι (little house).',
    },
  },
  {
    q: { el: 'Αυτός που φτιάχνει και πουλάει ψωμί λέγεται…', en: 'The person who makes and sells bread is called…' },
    options: { el: ['ψωμάκι', 'ψωμάς', 'ψωμένιος', 'ψωμιά'], en: ['ψωμάκι', 'ψωμάς', 'ψωμένιος', 'ψωμιά'] },
    correct: 1,
    explanation: {
      el: 'Η κατάληξη «-άς» δείχνει συχνά επάγγελμα: ψωμί → ψωμάς, γάλα → γαλατάς, ψάρι → ψαράς.',
      en: 'The suffix «-άς» often shows a job: ψωμί (bread) → ψωμάς (baker), γάλα (milk) → γαλατάς (milkman), ψάρι (fish) → ψαράς (fisherman).',
    },
  },
  {
    q: { el: 'Μια κούπα που είναι φτιαγμένη από γυαλί είναι…', en: 'A cup that is made of glass is…' },
    options: { el: ['γυαλάκι', 'γυαλάς', 'γυάλινη', 'γυαλιστερή'], en: ['γυαλάκι', 'γυαλάς', 'γυάλινη', 'γυαλιστερή'] },
    correct: 2,
    explanation: {
      el: 'Οι καταλήξεις «-ινος, -ινη, -ινο» και «-ένιος» δείχνουν από τι υλικό είναι κάτι: γυαλί → γυάλινη, ξύλο → ξύλινο, χρυσός → χρυσαφένιος.',
      en: 'The suffixes «-ινος/-ινη/-ινο» and «-ένιος» tell us what something is made of: γυαλί (glass) → γυάλινη, ξύλο (wood) → ξύλινο, χρυσός (gold) → χρυσαφένιος.',
    },
  },

  // ── 7–10: compound words ───────────────────────────────────────────────────
  {
    q: { el: 'Από ποιες δύο λέξεις φτιάχτηκε η λέξη «χαρτοπετσέτα»;', en: 'Which two words make up the word «χαρτοπετσέτα» (paper napkin)?' },
    options: { el: ['χαρτί + πετσέτα', 'χάρτης + πέτσα', 'χαρά + πετσέτα', 'χαρτί + πέτρα'], en: ['χαρτί + πετσέτα', 'χάρτης + πέτσα', 'χαρά + πετσέτα', 'χαρτί + πέτρα'] },
    correct: 0,
    explanation: {
      el: 'Η χαρτοπετσέτα είναι πετσέτα από χαρτί. Όταν δύο λέξεις ενώνονται σε μία, η νέα λέξη λέγεται σύνθετη.',
      en: 'A χαρτοπετσέτα is a napkin (πετσέτα) made of paper (χαρτί). When two words join into one, the new word is called a compound.',
    },
  },
  {
    q: { el: 'Ενώνουμε το «ψάρι» με τη «βάρκα». Ποια είναι η σωστή σύνθετη λέξη;', en: 'We join «ψάρι» (fish) with «βάρκα» (boat). Which is the correct compound word?' },
    options: { el: ['ψαριβάρκα', 'ψαροβάρκα', 'ψαρίβαρκα', 'ψαρόβαρκα'], en: ['ψαριβάρκα', 'ψαροβάρκα', 'ψαρίβαρκα', 'ψαρόβαρκα'] },
    correct: 3,
    explanation: {
      el: 'Ανάμεσα στα δύο μέρη μιας σύνθετης λέξης μπαίνει συνήθως το συνδετικό «-ο-»: ψαρ-ο-βάρκα. Ο τόνος ανεβαίνει: ψαρόβαρκα.',
      en: 'Between the two parts of a Greek compound we usually put the linking vowel «-ο-»: ψαρ-ο-βάρκα. The stress moves back: ψαρόβαρκα.',
    },
  },
  {
    q: { el: 'Η λέξη «ανοιγοκλείνω» φτιάχτηκε από τα ρήματα…', en: 'The word «ανοιγοκλείνω» (open and close) is made from the verbs…' },
    options: { el: ['ανοίγω + κλείνω', 'ανεβαίνω + κλείνω', 'ανοίγω + κλειδώνω', 'ανοίγω + κλίνω'], en: ['ανοίγω + κλείνω', 'ανεβαίνω + κλείνω', 'ανοίγω + κλειδώνω', 'ανοίγω + κλίνω'] },
    correct: 0,
    explanation: {
      el: 'Ανοιγοκλείνω = ανοίγω και κλείνω συνέχεια. Δύο ρήματα μπορούν να ενωθούν σε ένα σύνθετο ρήμα, με το «-ο-» στη μέση.',
      en: 'Ανοιγοκλείνω = I keep opening and closing. Two verbs can join into one compound verb, with «-ο-» in the middle.',
    },
  },
  {
    q: { el: 'Ποια από τις λέξεις ΔΕΝ είναι σύνθετη;', en: 'Which of these words is NOT a compound?' },
    options: { el: ['ηλιοβασίλεμα', 'καλοκαίρι', 'παιχνίδι', 'σπιτονοικοκύρης'], en: ['ηλιοβασίλεμα', 'καλοκαίρι', 'παιχνίδι', 'σπιτονοικοκύρης'] },
    correct: 2,
    explanation: {
      el: 'Το «παιχνίδι» είναι μία λέξη μόνη της. Οι άλλες έχουν δύο μέρη: ήλιος + βασίλεμα, καλός + καιρός, σπίτι + νοικοκύρης.',
      en: '«Παιχνίδι» (toy/game) is a single word. The others have two parts: ήλιος + βασίλεμα (sunset), καλός + καιρός (summer), σπίτι + νοικοκύρης (landlord).',
    },
  },

  // ── 11–13: derived words ───────────────────────────────────────────────────
  {
    q: { el: 'Από ποια λέξη βγαίνει η λέξη «παιδικός»;', en: 'Which word does «παιδικός» (for children) come from?' },
    options: { el: ['παίζω', 'παιδί', 'πεδίο', 'παιδεύω'], en: ['παίζω', 'παιδί', 'πεδίο', 'παιδεύω'] },
    correct: 1,
    explanation: {
      el: 'Παιδί → παιδικός. Η λέξη που βγαίνει από μια άλλη λέγεται παράγωγη, και η πρώτη λέξη λέγεται πρωτότυπη.',
      en: 'Παιδί (child) → παιδικός (for children). A word that comes from another word is called derived; the first word is the root word.',
    },
  },
  {
    q: { el: 'Ποιο ουσιαστικό βγαίνει από το ρήμα «τρέχω»;', en: 'Which noun comes from the verb «τρέχω» (run)?' },
    options: { el: ['τροχός', 'τρύπα', 'τρέξιμο', 'τρίχα'], en: ['τροχός', 'τρύπα', 'τρέξιμο', 'τρίχα'] },
    correct: 2,
    explanation: {
      el: 'Τρέχω → τρέξιμο. Από ρήματα φτιάχνουμε ουσιαστικά με καταλήξεις όπως «-σιμο», «-μα», «-ση»: διαβάζω → διάβασμα, γράφω → γράψιμο.',
      en: 'Τρέχω (run) → τρέξιμο (running). We make nouns from verbs with endings like «-σιμο», «-μα», «-ση»: διαβάζω → διάβασμα, γράφω → γράψιμο.',
    },
  },
  {
    q: { el: 'Ο Νίκος είναι γεμάτος χαρά. Ποιο επίθετο τον περιγράφει;', en: 'Nikos is full of joy (χαρά). Which adjective describes him?' },
    options: { el: ['χαρούμενος', 'χαρισματικός', 'χαριτωμένος', 'χαλαρός'], en: ['χαρούμενος', 'χαρισματικός', 'χαριτωμένος', 'χαλαρός'] },
    correct: 0,
    explanation: {
      el: 'Χαρά → χαρούμενος. Τα επίθετα σε «-ούμενος» και «-ικός» είναι παράγωγα: φόβος → φοβισμένος, φίλος → φιλικός.',
      en: 'Χαρά (joy) → χαρούμενος (happy). Adjectives ending in «-ούμενος» and «-ικός» are derived words: φόβος → φοβισμένος (scared), φίλος → φιλικός (friendly).',
    },
  },

  // ── 14–16: παράγωγες vs σύνθετες ───────────────────────────────────────────
  {
    q: { el: 'Η λέξη «θαλασσινός» είναι…', en: 'The word «θαλασσινός» (of the sea) is…' },
    options: { el: ['παράγωγη', 'σύνθετη', 'πρωτότυπη', 'ξένη'], en: ['derived', 'compound', 'a root word', 'foreign'] },
    correct: 0,
    explanation: {
      el: 'Θάλασσα + κατάληξη «-ινός» = θαλασσινός. Μία λέξη + κατάληξη = παράγωγη. Δύο λέξεις μαζί = σύνθετη.',
      en: 'Θάλασσα (sea) + the suffix «-ινός» = θαλασσινός. One word + a suffix = derived. Two words joined = compound.',
    },
  },
  {
    q: { el: 'Η λέξη «ανεμόμυλος» είναι…', en: 'The word «ανεμόμυλος» (windmill) is…' },
    options: { el: ['παράγωγη', 'σύνθετη', 'πρωτότυπη', 'υποκοριστικό'], en: ['derived', 'compound', 'a root word', 'a diminutive'] },
    correct: 1,
    explanation: {
      el: 'Άνεμος + μύλος = ανεμόμυλος. Δύο ολόκληρες λέξεις ενώθηκαν, άρα η λέξη είναι σύνθετη.',
      en: 'Άνεμος (wind) + μύλος (mill) = ανεμόμυλος. Two whole words were joined, so the word is a compound.',
    },
  },
  {
    q: { el: 'Ποια από τις λέξεις είναι σύνθετη;', en: 'Which of these words is a compound?' },
    options: { el: ['φεγγαράκι', 'φεγγάρι', 'φεγγαρόφωτο', 'φεγγαρίσιος'], en: ['φεγγαράκι', 'φεγγάρι', 'φεγγαρόφωτο', 'φεγγαρίσιος'] },
    correct: 2,
    explanation: {
      el: 'Φεγγάρι + φως = φεγγαρόφωτο, δύο λέξεις μαζί. Το «φεγγαράκι» και το «φεγγαρίσιος» είναι παράγωγα: μία λέξη + κατάληξη.',
      en: 'Φεγγάρι (moon) + φως (light) = φεγγαρόφωτο (moonlight), two words together. «Φεγγαράκι» and «φεγγαρίσιος» are derived: one word + a suffix.',
    },
  },

  // ── 17–18: spelling by etymology ───────────────────────────────────────────
  {
    q: { el: 'Μια μέρα με πολύ ήλιο είναι…', en: 'A day with lots of sun (ήλιος) is…' },
    options: { el: ['ιλιόλουστη', 'υλιόλουστη', 'ηλιόλουστη', 'οιλιόλουστη'], en: ['ιλιόλουστη', 'υλιόλουστη', 'ηλιόλουστη', 'οιλιόλουστη'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη βγαίνει από τον «ήλιο», που γράφεται με «η». Όλη η οικογένεια κρατάει το ίδιο γράμμα: ήλιος, ηλιόλουστος, ηλιοβασίλεμα.',
      en: 'The word comes from «ήλιος» (sun), spelled with «η». The whole word family keeps the same letter: ήλιος, ηλιόλουστος, ηλιοβασίλεμα.',
    },
  },
  {
    q: { el: 'Η λέξη «χρυσαφένιος» γράφεται με «υ» γιατί βγαίνει από τη λέξη…', en: 'The word «χρυσαφένιος» (golden) is spelled with «υ» because it comes from the word…' },
    options: { el: ['χρόνος', 'χρήση', 'χρώμα', 'χρυσός'], en: ['χρόνος', 'χρήση', 'χρώμα', 'χρυσός'] },
    correct: 3,
    explanation: {
      el: 'Χρυσός → χρυσάφι → χρυσαφένιος. Όταν δεν ξέρεις πώς γράφεται μια λέξη, σκέψου την πρωτότυπη λέξη: αυτή σου δείχνει το σωστό γράμμα.',
      en: 'Χρυσός (gold) → χρυσάφι → χρυσαφένιος. When you are not sure how to spell a word, think of its root word: it shows you the right letter.',
    },
  },
];
