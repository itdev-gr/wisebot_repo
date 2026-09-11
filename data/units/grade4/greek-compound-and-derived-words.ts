/**
 * Δ' Δημοτικού · Γλώσσα · Σύνθετες & παράγωγες λέξεις
 * ====================================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. What the unit covers, in order:
 *   1–5   compounds: the first and second part (ηλιοβασίλεμα, χαρτοπετσέτα, ανεμόμυλος),
 *         which word is a compound
 *   6–8   the joining vowel -ο- (ψαρόβαρκα, ποδόσφαιρο) and when it drops (χιονάνθρωπος)
 *   9–14  derived words: the prefixes ξανα-, ξε-, α- and the suffixes -άδικο, -τής, -ιά;
 *         meaning from the parts (άγνωστος)
 *   15–18 telling compound from derived (βιβλιαράκι vs χαρτοπετσέτα, μηλόπιτα vs μηλιά),
 *         meaning from the parts (χορτοφάγος), the derived word that fits a sentence
 * Distractors are the mistakes children actually make: splitting a compound in the wrong
 * place (ηλιο + βασίλεμα), keeping the -ο- before a vowel (χιονοάνθρωπος), reading every
 * «ο» as a joining vowel (πορτοκάλι), calling a derived word a compound. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_COMPOUND_AND_DERIVED_WORDS: QuizQuestion[] = [
  // ── 1–5: the two parts of a compound ──────────────────────────────────────
  {
    q: { el: 'Από ποιες δύο λέξεις φτιάχτηκε η λέξη «ηλιοβασίλεμα»;', en: 'Which two words make up the word “ηλιοβασίλεμα” (sunset)?' },
    options: { el: ['ήλιος + βασίλεμα', 'ήλιος + βασιλιάς', 'ηλιο + βασίλεμα', 'ήλιος + λεμόνι'], en: ['ήλιος + βασίλεμα (sun + setting)', 'ήλιος + βασιλιάς (sun + king)', 'ηλιο + βασίλεμα', 'ήλιος + λεμόνι (sun + lemon)'] },
    correct: 0,
    explanation: {
      el: 'Ηλιοβασίλεμα = ήλιος + βασίλεμα (το βασίλεμα είναι η δύση, όταν ο ήλιος «βασιλεύει»). Το «ηλιο» μόνο του δεν είναι λέξη· είναι το πρώτο συνθετικό με το -ο-.',
      en: 'Ηλιοβασίλεμα = ήλιος + βασίλεμα (βασίλεμα is the setting, when the sun goes down). “Ηλιο” on its own is not a word; it is the first part with the joining -ο-.',
    },
  },
  {
    q: { el: 'Ποιο είναι το πρώτο συνθετικό της λέξης «χαρτοπετσέτα»;', en: 'What is the first part of the compound “χαρτοπετσέτα” (paper napkin)?' },
    options: { el: ['πετσέτα', 'χαρτί', 'χαρτο', 'χάρτης'], en: ['πετσέτα (napkin)', 'χαρτί (paper)', 'χαρτο', 'χάρτης (map)'] },
    correct: 1,
    explanation: {
      el: 'Χαρτοπετσέτα = χαρτί + πετσέτα: μια πετσέτα από χαρτί. Το πρώτο συνθετικό είναι το «χαρτί», που χάνει την κατάληξή του και παίρνει το -ο-.',
      en: 'Χαρτοπετσέτα = χαρτί + πετσέτα: a napkin made of paper. The first part is “χαρτί”, which loses its ending and takes the -ο-.',
    },
  },
  {
    q: { el: 'Ποιο είναι το δεύτερο συνθετικό της λέξης «ανεμόμυλος»;', en: 'What is the second part of the compound “ανεμόμυλος” (windmill)?' },
    options: { el: ['άνεμος', 'μήλο', 'μύλος', 'μυαλό'], en: ['άνεμος (wind)', 'μήλο (apple)', 'μύλος (mill)', 'μυαλό (mind)'] },
    correct: 2,
    explanation: {
      el: 'Ανεμόμυλος = άνεμος + μύλος: ένας μύλος που γυρίζει με τον άνεμο. Το δεύτερο συνθετικό είναι το «μύλος». Προσοχή, όχι «μήλο» με η!',
      en: 'Ανεμόμυλος = άνεμος + μύλος: a mill that turns with the wind. The second part is “μύλος”. Careful, not “μήλο” (apple) with η!',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι σύνθετη;', en: 'Which of these words is a compound?' },
    options: { el: ['ψάρι', 'βάρκα', 'ψαράς', 'ψαρόβαρκα'], en: ['ψάρι (fish)', 'βάρκα (boat)', 'ψαράς (fisherman)', 'ψαρόβαρκα (fishing boat)'] },
    correct: 3,
    explanation: {
      el: 'Σύνθετη είναι η λέξη που φτιάχτηκε από δύο λέξεις: ψαρόβαρκα = ψάρι + βάρκα. Το «ψαράς» έχει μία λέξη μέσα (ψάρι) και μια κατάληξη, άρα είναι παράγωγη.',
      en: 'A compound is a word made from two words: ψαρόβαρκα = ψάρι + βάρκα. “Ψαράς” has one word inside (ψάρι) plus a suffix, so it is a derived word.',
    },
  },
  {
    q: { el: 'Ποιες λέξεις ενώθηκαν στη λέξη «κοκκινομάλλης»;', en: 'Which words were joined in the word “κοκκινομάλλης” (red-haired)?' },
    options: { el: ['κόκκινο + μάλλινο', 'κόκκινος + μαλλιά', 'κοκκίνισμα + μαλλί', 'κόκορας + μαλλιά'], en: ['κόκκινο + μάλλινο (red + woollen)', 'κόκκινος + μαλλιά (red + hair)', 'κοκκίνισμα + μαλλί (blushing + wool)', 'κόκορας + μαλλιά (rooster + hair)'] },
    correct: 1,
    explanation: {
      el: 'Κοκκινομάλλης = κόκκινος + μαλλιά: αυτός που έχει κόκκινα μαλλιά. Ανάμεσα στα δύο συνθετικά μπαίνει το -ο-.',
      en: 'Κοκκινομάλλης = κόκκινος + μαλλιά: someone who has red hair. The joining -ο- goes between the two parts.',
    },
  },

  // ── 6–8: the joining vowel -ο- ────────────────────────────────────────────
  {
    q: { el: 'Ποιο γράμμα ενώνει τα δύο συνθετικά στη λέξη «ψαρόβαρκα»;', en: 'Which letter joins the two parts in the word “ψαρόβαρκα”?' },
    options: { el: ['α', 'ο', 'ι', 'ε'], en: ['α', 'ο', 'ι', 'ε'] },
    correct: 1,
    explanation: {
      el: 'Ψαρ-ό-βαρκα: το -ο- λέγεται συνδετικό φωνήεν και ενώνει τα δύο συνθετικά. Το βλέπουμε σε πολλές σύνθετες λέξεις: ανεμ-ό-μυλος, χαρτ-ο-πετσέτα.',
      en: 'Ψαρ-ό-βαρκα: the -ο- is called the joining vowel and links the two parts. We see it in many compounds: ανεμ-ό-μυλος, χαρτ-ο-πετσέτα.',
    },
  },
  {
    q: { el: 'Πώς γράφεται σωστά η σύνθετη λέξη από το «χιόνι» + «άνθρωπος»;', en: 'How is the compound of “χιόνι” (snow) + “άνθρωπος” (man) spelt correctly?' },
    options: { el: ['χιονιάνθρωπος', 'χιονοάνθρωπος', 'χιονάνθρωπος', 'χιόνιάνθρωπος'], en: ['χιονιάνθρωπος', 'χιονοάνθρωπος', 'χιονάνθρωπος', 'χιόνιάνθρωπος'] },
    correct: 2,
    explanation: {
      el: 'Χιονάνθρωπος. Όταν το δεύτερο συνθετικό αρχίζει από φωνήεν (ά-νθρωπος), το συνδετικό -ο- χάνεται: χιον + (ο) + άνθρωπος → χιονάνθρωπος.',
      en: 'Χιονάνθρωπος. When the second part starts with a vowel (ά-νθρωπος), the joining -ο- drops out: χιον + (ο) + άνθρωπος → χιονάνθρωπος.',
    },
  },
  {
    q: { el: 'Σε ποια λέξη το «ο» είναι συνδετικό φωνήεν ανάμεσα σε δύο συνθετικά;', en: 'In which word is the “ο” a joining vowel between two parts?' },
    options: { el: ['ποδόσφαιρο', 'πορτοκάλι', 'ποτήρι', 'πολύ'], en: ['ποδόσφαιρο (football)', 'πορτοκάλι (orange)', 'ποτήρι (glass)', 'πολύ (very)'] },
    correct: 0,
    explanation: {
      el: 'Ποδ-ό-σφαιρο = πόδι + σφαίρα: το -ο- ενώνει τα δύο συνθετικά. Οι άλλες λέξεις έχουν «ο» αλλά είναι απλές, δεν φτιάχτηκαν από δύο λέξεις.',
      en: 'Ποδ-ό-σφαιρο = πόδι (foot) + σφαίρα (ball): the -ο- joins the two parts. The other words contain an “ο” but are simple words, not made from two words.',
    },
  },

  // ── 9–14: derived words with prefixes and suffixes ────────────────────────
  {
    q: { el: 'Τι δείχνει το «ξανα-» στη λέξη «ξαναγράφω»;', en: 'What does “ξανα-” show in the word “ξαναγράφω”?' },
    options: { el: ['ότι γράφω πάλι, για δεύτερη φορά', 'ότι δεν γράφω', 'ότι γράφω γρήγορα', 'ότι γράφω ξένες λέξεις'], en: ['that I write again, a second time', 'that I do not write', 'that I write fast', 'that I write foreign words'] },
    correct: 0,
    explanation: {
      el: 'Το «ξανα-» είναι πρόθημα: μπαίνει μπροστά από τη λέξη και σημαίνει «πάλι». Ξαναγράφω = γράφω ξανά, ξαναβλέπω = βλέπω πάλι.',
      en: '“Ξανα-” is a prefix: it goes in front of the word and means “again”. Ξαναγράφω = I write again, ξαναβλέπω = I see again.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «το μαγαζί που πουλάει ψάρια»;', en: 'Which word means “the shop that sells fish”?' },
    options: { el: ['ψαράς', 'ψαρόσουπα', 'ψαρεύω', 'ψαράδικο'], en: ['ψαράς', 'ψαρόσουπα', 'ψαρεύω', 'ψαράδικο'] },
    correct: 3,
    explanation: {
      el: 'Η κατάληξη -άδικο δείχνει μαγαζί: ψαράδικο, γαλατάδικο, παγωτατζίδικο. Ο ψαράς είναι ο άνθρωπος, η ψαρόσουπα το φαγητό και το ψαρεύω το ρήμα.',
      en: 'The suffix -άδικο shows a shop: ψαράδικο (fish shop), γαλατάδικο (dairy shop), παγωτατζίδικο (ice-cream shop). Ψαράς is the person, ψαρόσουπα the dish and ψαρεύω the verb.',
    },
  },
  {
    q: { el: 'Από το ρήμα «τραγουδώ» φτιάχνουμε τη λέξη για αυτόν που τραγουδάει. Ποια είναι;', en: 'From the verb “τραγουδώ” (I sing) we make the word for the person who sings. Which is it?' },
    options: { el: ['τραγούδι', 'τραγουδάκι', 'τραγουδιστής', 'τραγουδιστά'], en: ['τραγούδι (song)', 'τραγουδάκι (little song)', 'τραγουδιστής (singer)', 'τραγουδιστά (in a singing way)'] },
    correct: 2,
    explanation: {
      el: 'Η κατάληξη -τής δείχνει αυτόν που κάνει κάτι: τραγουδιστής, μαθητής (μαθαίνω), ποδηλάτης, χορευτής (χορεύω).',
      en: 'The suffix -τής shows the person who does something: τραγουδιστής (singer), μαθητής (pupil, from μαθαίνω), ποδηλάτης (cyclist), χορευτής (dancer, from χορεύω).',
    },
  },
  {
    q: { el: 'Πώς λέγεται το δέντρο που κάνει πορτοκάλια;', en: 'What is the tree that grows oranges called?' },
    options: { el: ['πορτοκάλι', 'πορτοκαλάδα', 'πορτοκαλιά', 'πορτοκαλής'], en: ['πορτοκάλι (orange)', 'πορτοκαλάδα (orange juice)', 'πορτοκαλιά (orange tree)', 'πορτοκαλής (orange-coloured)'] },
    correct: 2,
    explanation: {
      el: 'Η κατάληξη -ιά φτιάχνει το όνομα του δέντρου από τον καρπό: πορτοκάλι → πορτοκαλιά, μήλο → μηλιά, κεράσι → κερασιά, αχλάδι → αχλαδιά.',
      en: 'The suffix -ιά makes the name of the tree from its fruit: πορτοκάλι → πορτοκαλιά, μήλο → μηλιά, κεράσι → κερασιά, αχλάδι → αχλαδιά.',
    },
  },
  {
    q: { el: 'Το «ξε-» στη λέξη «ξεκλειδώνω» δείχνει ότι κάνουμε…', en: 'What does the “ξε-” in the word “ξεκλειδώνω” show that we do?' },
    options: { el: ['το αντίθετο από το «κλειδώνω»', 'το ίδιο με το «κλειδώνω»', 'κλείδωμα πολύ δυνατά', 'κλείδωμα για δεύτερη φορά'], en: ['the opposite of “κλειδώνω” (to lock)', 'the same as “κλειδώνω”', 'a very strong locking', 'a locking for the second time'] },
    correct: 0,
    explanation: {
      el: 'Το πρόθημα «ξε-» συχνά δείχνει το αντίθετο: κλειδώνω → ξεκλειδώνω, δένω → ξεδένω, κουμπώνω → ξεκουμπώνω.',
      en: 'The prefix “ξε-” often shows the opposite: κλειδώνω (lock) → ξεκλειδώνω (unlock), δένω (tie) → ξεδένω (untie), κουμπώνω (button up) → ξεκουμπώνω (unbutton).',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «άγνωστος»;', en: 'What does the word “άγνωστος” mean?' },
    options: { el: ['αυτός που τον ξέρουμε καλά', 'αυτός που ξέρει πολλά', 'αυτός που δεν τον ξέρουμε', 'αυτός που γνωρίζει'], en: ['someone we know well', 'someone who knows a lot', 'someone we do not know', 'someone who knows'] },
    correct: 2,
    explanation: {
      el: 'Το α- στην αρχή της λέξης σημαίνει «δεν»: ά-γνωστος = αυτός που δεν είναι γνωστός. Το ίδιο και στα άδικος (όχι δίκαιος), άνοστος (χωρίς νοστιμιά), ακίνητος.',
      en: 'The α- at the start of the word means “not”: ά-γνωστος = someone who is not known. The same in άδικος (not fair), άνοστος (without taste), ακίνητος (not moving).',
    },
  },

  // ── 15–18: compound or derived? meaning from the parts ────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι παράγωγη (όχι σύνθετη);', en: 'Which of these words is derived (not a compound)?' },
    options: { el: ['ηλιοβασίλεμα', 'χαρτοπετσέτα', 'βιβλιοπωλείο', 'βιβλιαράκι'], en: ['ηλιοβασίλεμα (sunset)', 'χαρτοπετσέτα (paper napkin)', 'βιβλιοπωλείο (bookshop)', 'βιβλιαράκι (little book)'] },
    correct: 3,
    explanation: {
      el: 'Το βιβλιαράκι είναι βιβλίο + κατάληξη -αράκι (μικρό βιβλίο): μία λέξη και μια κατάληξη, άρα παράγωγη. Οι άλλες τρεις έχουν δύο λέξεις μέσα τους (βιβλίο + πουλώ, χαρτί + πετσέτα).',
      en: 'Βιβλιαράκι is βιβλίο + the suffix -αράκι (a little book): one word plus a suffix, so it is derived. The other three have two words inside them (βιβλίο + πουλώ, χαρτί + πετσέτα).',
    },
  },
  {
    q: { el: 'Η λέξη «χορτοφάγος» φτιάχτηκε από το «χόρτο» και το «τρώω» (-φάγος). Τι σημαίνει;', en: 'The word “χορτοφάγος” was made from “χόρτο” (plant, grass) and “τρώω” (-φάγος, eater). What does it mean?' },
    options: { el: ['αυτός που τρώει πολύ', 'χόρτο που τρώγεται', 'αυτός που φυτεύει χόρτα', 'αυτός που τρώει μόνο χόρτα και φυτά'], en: ['someone who eats a lot', 'a plant that can be eaten', 'someone who plants grass', 'someone who eats only plants'] },
    correct: 3,
    explanation: {
      el: 'Χορτο-φάγος = αυτός που τρώει χόρτα, δηλαδή φυτά. Όταν ξέρουμε τα συνθετικά, μαντεύουμε τη σημασία: σαρκοφάγος = τρώει σάρκα (κρέας), παμφάγος = τρώει τα πάντα.',
      en: 'Χορτο-φάγος = someone who eats plants. When we know the parts, we can guess the meaning: σαρκοφάγος = eats flesh (meat), παμφάγος = eats everything.',
    },
  },
  {
    q: { el: 'Ο Νίκος ___ το βιβλίο, γιατί του άρεσε πολύ την πρώτη φορά. Ποια λέξη ταιριάζει;', en: 'Nikos ___ the book, because he liked it a lot the first time. Which word fits?' },
    options: { el: ['διάβασμα', 'ξαναδιάβασε', 'αδιάβαστο', 'διαβάζοντας'], en: ['διάβασμα (reading)', 'ξαναδιάβασε (read again)', 'αδιάβαστο (unread)', 'διαβάζοντας (while reading)'] },
    correct: 1,
    explanation: {
      el: 'Του άρεσε την πρώτη φορά, άρα το διάβασε πάλι: ξαναδιάβασε. Το πρόθημα ξανα- + το ρήμα διάβασε μας δίνουν τη λέξη που θέλουμε.',
      en: 'He liked it the first time, so he read it again: ξαναδιάβασε. The prefix ξανα- + the verb διάβασε give us the word we need.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι σύνθετη;', en: 'Which of these words is a compound?' },
    options: { el: ['μηλιά', 'μηλόπιτα', 'μηλαράκι', 'μήλο'], en: ['μηλιά (apple tree)', 'μηλόπιτα (apple pie)', 'μηλαράκι (little apple)', 'μήλο (apple)'] },
    correct: 1,
    explanation: {
      el: 'Μηλόπιτα = μήλο + πίτα, δύο λέξεις με το -ο- ανάμεσα: σύνθετη. Η μηλιά και το μηλαράκι είναι παράγωγες: μήλο + κατάληξη (-ιά, -αράκι).',
      en: 'Μηλόπιτα = μήλο + πίτα, two words with the -ο- between them: a compound. Μηλιά and μηλαράκι are derived: μήλο + a suffix (-ιά, -αράκι).',
    },
  },
];
