/**
 * Ε' Δημοτικού · Γλώσσα · Μετοχές & Αριθμητικά
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Ordered from easiest to hardest:
 *   1–4   the active participle in -οντας/-ώντας: recognising it, forming it, the ο/ω rule, spelling
 *   5–8   the passive participle in -μένος/-μένη/-μένο: recognising it, agreement, forming it
 *   9–12  cardinal numerals: τρεις/τρία, τέσσερις/τέσσερα, the spelling of εννιά and δεκαοχτώ
 *   13–16 ordinal numerals: what they are, ένατος, δωδέκατος, εικοστός
 *   17–18 agreement in a sentence: δεύτερη, τρία μήλα
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_PARTICIPLES_AND_NUMERALS: QuizQuestion[] = [
  // ── 1–4: the active participle ────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι ενεργητική μετοχή;', en: 'Which of these words is an active participle (ενεργητική μετοχή)?' },
    options: { el: ['τρέχοντας', 'τρέχω', 'τρέξιμο', 'έτρεξα'], en: ['τρέχοντας (running)', 'τρέχω (I run)', 'τρέξιμο (a run)', 'έτρεξα (I ran)'] },
    correct: 0,
    explanation: {
      el: 'Η ενεργητική μετοχή τελειώνει σε -οντας ή -ώντας και δείχνει πώς ή πότε γίνεται κάτι: «Ήρθε τρέχοντας». Δεν αλλάζει ποτέ μορφή.',
      en: 'The active participle ends in -οντας or -ώντας and shows how or when something happens: «Ήρθε τρέχοντας» (He came running). It never changes form.',
    },
  },
  {
    q: { el: 'Ποια είναι η ενεργητική μετοχή του ρήματος «γελάω»;', en: 'What is the active participle of the verb «γελάω» (I laugh)?' },
    options: { el: ['γελόντας', 'γελώντας', 'γελάοντας', 'γελώνοντας'], en: ['γελόντας', 'γελώντας', 'γελάοντας', 'γελώνοντας'] },
    correct: 1,
    explanation: {
      el: 'Τα ρήματα σε -άω/-ώ (γελάω, μιλάω, τραγουδάω) σχηματίζουν μετοχή σε -ώντας: γελώντας, μιλώντας, τραγουδώντας.',
      en: 'Verbs in -άω/-ώ (γελάω, μιλάω, τραγουδάω) form their participle in -ώντας: γελώντας, μιλώντας, τραγουδώντας.',
    },
  },
  {
    q: { el: 'Πότε γράφουμε -οντας (με ο) και πότε -ώντας (με ω);', en: 'When do we write -οντας (with ο) and when -ώντας (with ω)?' },
    options: { el: ['Πάντα -οντας, ποτέ -ώντας', 'Πάντα -ώντας στα ρήματα που τελειώνουν σε -ω', '-οντας όταν η κατάληξη δεν τονίζεται (τρέχοντας), -ώντας όταν τονίζεται (μιλώντας)', 'Δεν υπάρχει κανόνας, το μαθαίνουμε απ\' έξω'], en: ['Always -οντας, never -ώντας', 'Always -ώντας for verbs ending in -ω', '-οντας when the ending is unstressed (τρέχοντας), -ώντας when it is stressed (μιλώντας)', 'There is no rule, we learn it by heart'] },
    correct: 2,
    explanation: {
      el: 'Άκου πού πέφτει ο τόνος: τρέ-χο-ντας, δια-βά-ζο-ντας (άτονο → ο), αλλά μι-λώ-ντας, γε-λώ-ντας (τονισμένο → ω).',
      en: 'Listen to where the stress falls: τρέ-χο-ντας, δια-βά-ζο-ντας (unstressed → ο), but μι-λώ-ντας, γε-λώ-ντας (stressed → ω).',
    },
  },
  {
    q: { el: 'Ποια μετοχή είναι γραμμένη σωστά;', en: 'Which participle is spelled correctly?' },
    options: { el: ['παίζωντας', 'παίζοντας', 'πέζοντας', 'παίζοντος'], en: ['παίζωντας', 'παίζοντας', 'πέζοντας', 'παίζοντος'] },
    correct: 1,
    explanation: {
      el: 'Το «παίζοντας» τονίζεται στο παί-, άρα η κατάληξη είναι άτονη και γράφεται με ο: παίζοντας. Τα παιδιά παίζοντας μαθαίνουν!',
      en: '«παίζοντας» is stressed on παί-, so the ending is unstressed and written with ο: παίζοντας. Children learn by playing!',
    },
  },

  // ── 5–8: the passive participle ───────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι παθητική μετοχή;', en: 'Which of these words is a passive participle (παθητική μετοχή)?' },
    options: { el: ['κλειστός', 'κλείνοντας', 'κλεισμένος', 'κλείνω'], en: ['κλειστός (closed, adjective)', 'κλείνοντας (closing)', 'κλεισμένος (closed, participle)', 'κλείνω (I close)'] },
    correct: 2,
    explanation: {
      el: 'Η παθητική μετοχή τελειώνει σε -μένος, -μένη, -μένο και δείχνει ότι κάτι έχει πάθει την πράξη: το παράθυρο είναι κλεισμένο (κάποιος το έκλεισε).',
      en: 'The passive participle ends in -μένος, -μένη, -μένο and shows that something has had the action done to it: the window is κλεισμένο (someone closed it).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η πόρτα είναι ___.» (κλείνω)', en: 'Fill in: «Η πόρτα είναι ___.» (The door is ___.) (κλείνω)' },
    options: { el: ['κλεισμένος', 'κλεισμένη', 'κλεισμένο', 'κλείνοντας'], en: ['κλεισμένος', 'κλεισμένη', 'κλεισμένο', 'κλείνοντας'] },
    correct: 1,
    explanation: {
      el: 'Η πόρτα είναι θηλυκό, άρα η μετοχή παίρνει θηλυκή κατάληξη: κλεισμένη. Θα λέγαμε «ο φάκελος κλεισμένος» και «το παράθυρο κλεισμένο».',
      en: '«Η πόρτα» is feminine, so the participle takes the feminine ending: κλεισμένη. We would say «ο φάκελος κλεισμένος» and «το παράθυρο κλεισμένο».',
    },
  },
  {
    q: { el: 'Σε τι συμφωνεί η παθητική μετοχή (π.χ. γραμμένος) με το ουσιαστικό;', en: 'In what does the passive participle (e.g. γραμμένος) agree with the noun?' },
    options: { el: ['μόνο αριθμό', 'τίποτα, είναι άκλιτη', 'μόνο γένος', 'γένος, αριθμό και πτώση'], en: ['number only', 'nothing, it never changes', 'gender only', 'gender, number and case'] },
    correct: 3,
    explanation: {
      el: 'Η παθητική μετοχή κλίνεται σαν επίθετο: ο γραμμένος, η γραμμένη, το γραμμένο, οι γραμμένοι, τα γραμμένα… Αντίθετα, η ενεργητική (γράφοντας) είναι άκλιτη.',
      en: 'The passive participle declines like an adjective: ο γραμμένος, η γραμμένη, το γραμμένο, οι γραμμένοι, τα γραμμένα… The active one (γράφοντας), by contrast, never changes.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Τα ___ βιβλία είναι στο ράφι.» (διαβάζω)', en: 'Fill in: «Τα ___ βιβλία είναι στο ράφι.» (The ___ books are on the shelf.) (διαβάζω)' },
    options: { el: ['διαβασμένος', 'διαβασμένη', 'διαβασμένα', 'διαβάζοντας'], en: ['διαβασμένος', 'διαβασμένη', 'διαβασμένα', 'διαβάζοντας'] },
    correct: 2,
    explanation: {
      el: '«Τα βιβλία» είναι ουδέτερο στον πληθυντικό, άρα και η μετοχή: τα διαβασμένα βιβλία. Το «διαβάζοντας» είναι ενεργητική μετοχή και δεν ταιριάζει εδώ.',
      en: '«Τα βιβλία» is neuter plural, so the participle is too: τα διαβασμένα βιβλία. «διαβάζοντας» is the active participle and does not fit here.',
    },
  },

  // ── 9–12: cardinal numerals ───────────────────────────────────────────────
  {
    q: { el: 'Ποια φράση είναι σωστή;', en: 'Which phrase is correct?' },
    options: { el: ['τρία φίλοι', 'τρεις φίλοι', 'τρις φίλοι', 'τρείς φίλοι'], en: ['τρία φίλοι', 'τρεις φίλοι', 'τρις φίλοι', 'τρείς φίλοι'] },
    correct: 1,
    explanation: {
      el: 'Το 3 έχει δύο μορφές: «τρεις» για αρσενικά και θηλυκά (τρεις φίλοι, τρεις φίλες) και «τρία» για ουδέτερα (τρία παιδιά). Γράφεται -εις, χωρίς τόνο, γιατί είναι μονοσύλλαβο.',
      en: 'The number 3 has two forms: «τρεις» for masculine and feminine (τρεις φίλοι, τρεις φίλες) and «τρία» for neuter (τρία παιδιά). It is spelled -εις with no accent, because it is one syllable.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Στην αυλή παίζουν ___ παιδιά.» (4)', en: 'Fill in: «Στην αυλή παίζουν ___ παιδιά.» (___ children are playing in the yard.) (4)' },
    options: { el: ['τέσσερα', 'τέσσερις', 'τέσσερεις', 'τέσερα'], en: ['τέσσερα', 'τέσσερις', 'τέσσερεις', 'τέσερα'] },
    correct: 0,
    explanation: {
      el: 'Όπως το «τρία», έτσι και το «τέσσερα» πάει με ουδέτερα: τέσσερα παιδιά. Το «τέσσερις» είναι για αρσενικά και θηλυκά: τέσσερις μαθητές, τέσσερις μαθήτριες. Και πάντα με δύο σ!',
      en: 'Like «τρία», «τέσσερα» goes with neuter nouns: τέσσερα παιδιά. «τέσσερις» is for masculine and feminine: τέσσερις μαθητές, τέσσερις μαθήτριες. And always with double σ!',
    },
  },
  {
    q: { el: 'Πώς γράφεται σωστά ο αριθμός 9;', en: 'How is the number 9 spelled correctly?' },
    options: { el: ['ενιά', 'εννιά', 'εννοιά', 'ενοιά'], en: ['ενιά', 'εννιά', 'εννοιά', 'ενοιά'] },
    correct: 1,
    explanation: {
      el: 'Το 9 γράφεται «εννιά» ή «εννέα» — και οι δύο μορφές είναι σωστές και έχουν δύο ν. Θυμήσου το από το «εννιακόσια».',
      en: 'The number 9 is written «εννιά» or «εννέα» — both forms are correct and both have double ν. Remember it from «εννιακόσια» (nine hundred).',
    },
  },
  {
    q: { el: 'Πώς γράφεται σωστά ο αριθμός 18;', en: 'How is the number 18 spelled correctly?' },
    options: { el: ['δεκαοκτό', 'δεκαωχτώ', 'δέκα οχτώ', 'δεκαοχτώ'], en: ['δεκαοκτό', 'δεκαωχτώ', 'δέκα οχτώ', 'δεκαοχτώ'] },
    correct: 3,
    explanation: {
      el: 'Από το 13 ως το 19 τα αριθμητικά γράφονται με μία λέξη: δεκατρία, δεκατέσσερα… δεκαοχτώ (ή δεκαοκτώ), δεκαεννιά. Το «οχτώ» γράφεται με ο και ω.',
      en: 'From 13 to 19 the numerals are written as one word: δεκατρία, δεκατέσσερα… δεκαοχτώ (or δεκαοκτώ), δεκαεννιά. «οχτώ» is spelled with ο and ω.',
    },
  },

  // ── 13–16: ordinal numerals ───────────────────────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω είναι τακτικό αριθμητικό (δείχνει σειρά);', en: 'Which of these is an ordinal numeral (it shows order)?' },
    options: { el: ['πέντε', 'πεντάδα', 'πεντάρι', 'πέμπτος'], en: ['πέντε (five)', 'πεντάδα (a group of five)', 'πεντάρι (a "five" mark)', 'πέμπτος (fifth)'] },
    correct: 3,
    explanation: {
      el: 'Τα απόλυτα αριθμητικά (πέντε) λένε πόσα. Τα τακτικά (πέμπτος, πέμπτη, πέμπτο) λένε ποια θέση στη σειρά: ο πέμπτος δρομέας, η Πέμπτη.',
      en: 'Cardinal numerals (πέντε) say how many. Ordinals (πέμπτος, πέμπτη, πέμπτο) say which place in the order: the fifth runner, Thursday (Πέμπτη, the fifth day).',
    },
  },
  {
    q: { el: 'Ο Νίκος τερμάτισε ___ στον αγώνα. (9)', en: 'Nikos finished ___ in the race. (9)' },
    options: { el: ['εννιάτος', 'εννάτος', 'ένατος', 'εννιακοστός'], en: ['εννιάτος', 'εννάτος', 'ένατος', 'εννιακοστός'] },
    correct: 2,
    explanation: {
      el: 'Το τακτικό του 9 είναι «ένατος» — προσοχή, με ένα ν, ενώ το «εννιά» έχει δύο! Το «εννιακοστός» είναι το τακτικό του 90.',
      en: 'The ordinal of 9 is «ένατος» — careful, with one ν, while «εννιά» has two! «εννιακοστός» is the ordinal of 90.',
    },
  },
  {
    q: { el: 'Ποιο είναι το τακτικό αριθμητικό του 12;', en: 'What is the ordinal numeral of 12?' },
    options: { el: ['δωδέκατος', 'δώδεκατος', 'δεκαδεύτερος', 'δωδεκαστός'], en: ['δωδέκατος', 'δώδεκατος', 'δεκαδεύτερος', 'δωδεκαστός'] },
    correct: 0,
    explanation: {
      el: 'Δώδεκα → δωδέκατος, με τον τόνο στο -δέ-: ο δωδέκατος μήνας είναι ο Δεκέμβριος. Ομοίως: δέκατος, ενδέκατος, δωδέκατος.',
      en: 'Δώδεκα → δωδέκατος, with the stress on -δέ-: the twelfth month is December. Likewise: δέκατος, ενδέκατος, δωδέκατος.',
    },
  },
  {
    q: { el: 'Ποιο είναι το τακτικό αριθμητικό του 20;', en: 'What is the ordinal numeral of 20?' },
    options: { el: ['εικοσιτός', 'εικοσάτος', 'εικοστικός', 'εικοστός'], en: ['εικοσιτός', 'εικοσάτος', 'εικοστικός', 'εικοστός'] },
    correct: 3,
    explanation: {
      el: 'Από το 20 και πάνω οι δεκάδες κάνουν -στός: εικοστός, τριακοστός, τεσσαρακοστός… «Ο εικοστός αιώνας».',
      en: 'From 20 upwards the tens form ordinals in -στός: εικοστός, τριακοστός, τεσσαρακοστός… «Ο εικοστός αιώνας» (the twentieth century).',
    },
  },

  // ── 17–18: agreement in a sentence ────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Η Μαρία τερμάτισε ___ στον αγώνα δρόμου.» (2)', en: 'Fill in: «Η Μαρία τερμάτισε ___ στον αγώνα δρόμου.» (Maria finished ___ in the running race.) (2)' },
    options: { el: ['δεύτερη', 'δεύτερος', 'δεύτερο', 'δύο'], en: ['δεύτερη', 'δεύτερος', 'δεύτερο', 'δύο'] },
    correct: 0,
    explanation: {
      el: 'Το τακτικό αριθμητικό συμφωνεί με το ουσιαστικό, όπως τα επίθετα. Η Μαρία είναι θηλυκό, άρα «δεύτερη». Το «δύο» λέει πόσοι, όχι ποια θέση.',
      en: 'An ordinal numeral agrees with the noun, like an adjective. Maria is feminine, so «δεύτερη». «δύο» says how many, not which place.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Αγόρασα τρεις μήλα.', 'Αγόρασα τρία μπανάνες.', 'Αγόρασα τρία μήλα.', 'Αγόρασα τρις μπανάνες.'], en: ['Αγόρασα τρεις μήλα.', 'Αγόρασα τρία μπανάνες.', 'Αγόρασα τρία μήλα.', 'Αγόρασα τρις μπανάνες.'] },
    correct: 2,
    explanation: {
      el: '«Το μήλο» είναι ουδέτερο, άρα «τρία μήλα». Για τις μπανάνες (θηλυκό) θα λέγαμε «τρεις μπανάνες» — με -εις, όχι -ις.',
      en: '«Το μήλο» is neuter, so «τρία μήλα». For bananas (feminine) we would say «τρεις μπανάνες» — spelled -εις, not -ις.',
    },
  },
];
