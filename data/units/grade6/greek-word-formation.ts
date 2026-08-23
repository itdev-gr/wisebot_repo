/**
 * ΣΤ' Δημοτικού · Γλώσσα · Παράγωγα & Σύνθετα
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–6   prefixes: ξανα- (again), ανα- (again / up), συν- (together) and its change to συμ- before μ, π, β
 *   7–10  what a suffix means: -άκι (small), -άρα (big), -ιστής (the person who does it), -ινος (made of)
 *   11–14 compounds and the connecting vowel -ο- (χαρτοπετσέτα, ποδόσφαιρο, μηλόπιτα) — and when it drops
 *   15–16 word families: which word does not belong, which word is the root
 *   17–18 loanwords: spotting a borrowed word, finding its Greek equivalent
 *
 * Options are Greek forms, so options.el and options.en are identical; the English side
 * explains the Greek rule. The UI shuffles options, so the correct slot is not balanced on purpose.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_WORD_FORMATION: QuizQuestion[] = [
  // ── 1–6: prefixes ──────────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η λέξη «ξαναδιαβάζω»;', en: 'What does the Greek word «ξαναδιαβάζω» mean?' },
    options: { el: ['διαβάζω πάλι', 'διαβάζω γρήγορα', 'δεν διαβάζω', 'διαβάζω λίγο'], en: ['διαβάζω πάλι (I read again)', 'διαβάζω γρήγορα (I read fast)', 'δεν διαβάζω (I do not read)', 'διαβάζω λίγο (I read a little)'] },
    correct: 0,
    explanation: {
      el: 'Το πρόθημα ξανα- σημαίνει «πάλι, άλλη μια φορά». Ξαναδιαβάζω = διαβάζω πάλι.',
      en: 'The prefix ξανα- means “again, one more time”. Ξαναδιαβάζω = I read again.',
    },
  },
  {
    q: { el: 'Ποια από τις λέξεις έχει το πρόθημα ξανα-;', en: 'Which of these words has the prefix ξανα-?' },
    options: { el: ['ξανθός', 'ξύνω', 'ξαναγράφω', 'ξαφνικά'], en: ['ξανθός', 'ξύνω', 'ξαναγράφω', 'ξαφνικά'] },
    correct: 2,
    explanation: {
      el: 'Ξαναγράφω = ξανα- + γράφω, δηλαδή «γράφω πάλι». Οι άλλες λέξεις απλώς αρχίζουν από ξ, δεν έχουν πρόθημα.',
      en: 'Ξαναγράφω = ξανα- + γράφω, “I write again”. The other words just begin with ξ; they have no prefix.',
    },
  },
  {
    q: { el: 'Η Ελένη αναθερμαίνει το φαγητό. Τι σημαίνει «αναθερμαίνω»;', en: 'Eleni «αναθερμαίνει» the food. What does «αναθερμαίνω» mean?' },
    options: { el: ['ζεσταίνω πολύ', 'ζεσταίνω ξανά', 'κρυώνω', 'μαγειρεύω'], en: ['ζεσταίνω πολύ (I heat a lot)', 'ζεσταίνω ξανά (I heat again)', 'κρυώνω (I cool)', 'μαγειρεύω (I cook)'] },
    correct: 1,
    explanation: {
      el: 'Το πρόθημα ανα- συχνά σημαίνει «ξανά»: αναθερμαίνω = ζεσταίνω ξανά. Άλλες φορές σημαίνει «προς τα πάνω», όπως στο ανεβαίνω.',
      en: 'The prefix ανα- often means “again”: αναθερμαίνω = I heat again. Sometimes it means “upwards”, as in ανεβαίνω.',
    },
  },
  {
    q: { el: 'Η Μαρία και ο Νίκος συνεργάζονται. Τι δηλώνει το συν- στη λέξη «συνεργάζομαι»;', en: 'Maria and Nikos «συνεργάζονται». What does the συν- in «συνεργάζομαι» mean?' },
    options: { el: ['μαζί', 'ξανά', 'αντίθετα', 'χωρίς'], en: ['μαζί (together)', 'ξανά (again)', 'αντίθετα (against)', 'χωρίς (without)'] },
    correct: 0,
    explanation: {
      el: 'Το πρόθημα συν- σημαίνει «μαζί». Συνεργάζομαι = εργάζομαι μαζί με κάποιον.',
      en: 'The prefix συν- means “together”. Συνεργάζομαι = I work together with someone.',
    },
  },
  {
    q: { el: 'Πώς γράφεται σωστά η λέξη που βγαίνει από συν- + μαθητής;', en: 'How do we correctly write the word made from συν- + μαθητής (classmate)?' },
    options: { el: ['συνμαθητής', 'συμαθητής', 'σημμαθητής', 'συμμαθητής'], en: ['συνμαθητής', 'συμαθητής', 'σημμαθητής', 'συμμαθητής'] },
    correct: 3,
    explanation: {
      el: 'Πριν από μ, π και β το ν του συν- γίνεται μ: συμμαθητής, συμπαίκτης, συμβουλή.',
      en: 'Before μ, π and β the ν of συν- turns into μ: συμμαθητής, συμπαίκτης, συμβουλή.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ έχει το πρόθημα συν-;', en: 'Which word does NOT have the prefix συν-?' },
    options: { el: ['συμπαίκτης', 'συγγραφέας', 'συνοδεύω', 'σύννεφο'], en: ['συμπαίκτης', 'συγγραφέας', 'συνοδεύω', 'σύννεφο'] },
    correct: 3,
    explanation: {
      el: 'Το σύννεφο είναι απλή λέξη, δεν σημαίνει «μαζί με κάτι». Συμπαίκτης, συγγραφέας και συνοδεύω έχουν όλα το συν- (που αλλάζει σε συμ- ή συγ- ανάλογα με το γράμμα που ακολουθεί).',
      en: 'Σύννεφο (cloud) is a simple word; it does not mean “together with something”. Συμπαίκτης, συγγραφέας and συνοδεύω all carry συν- (which becomes συμ- or συγ- depending on the next letter).',
    },
  },

  // ── 7–10: what a suffix means ──────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η κατάληξη -άκι στη λέξη «σπιτάκι»;', en: 'What does the suffix -άκι mean in «σπιτάκι»?' },
    options: { el: ['μικρό σπίτι', 'μεγάλο σπίτι', 'παλιό σπίτι', 'πολλά σπίτια'], en: ['μικρό σπίτι (small house)', 'μεγάλο σπίτι (big house)', 'παλιό σπίτι (old house)', 'πολλά σπίτια (many houses)'] },
    correct: 0,
    explanation: {
      el: 'Η κατάληξη -άκι κάνει τη λέξη υποκοριστικό: δείχνει κάτι μικρό ή αγαπημένο. Σπιτάκι = μικρό σπίτι.',
      en: 'The suffix -άκι makes a diminutive: something small or dear. Σπιτάκι = a little house.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «πολύ μεγάλο σπίτι»;', en: 'Which word means “a very big house”?' },
    options: { el: ['σπιτάκι', 'σπιτάρα', 'σπιτικό', 'σπιτονοικοκύρης'], en: ['σπιτάκι', 'σπιτάρα', 'σπιτικό', 'σπιτονοικοκύρης'] },
    correct: 1,
    explanation: {
      el: 'Η κατάληξη -άρα κάνει τη λέξη μεγεθυντικό: σπιτάρα = τεράστιο σπίτι. Το σπιτάκι είναι το αντίθετο, μικρό σπίτι.',
      en: 'The suffix -άρα makes an augmentative: σπιτάρα = a huge house. Σπιτάκι is the opposite, a small house.',
    },
  },
  {
    q: { el: 'Ποια λέξη δηλώνει το πρόσωπο που κάνει κάτι;', en: 'Which word names the person who does something?' },
    options: { el: ['τραγούδι', 'τραγουδώ', 'τραγουδιστά', 'τραγουδιστής'], en: ['τραγούδι', 'τραγουδώ', 'τραγουδιστά', 'τραγουδιστής'] },
    correct: 3,
    explanation: {
      el: 'Η κατάληξη -ιστής δηλώνει αυτόν που κάνει κάτι: τραγουδιστής = αυτός που τραγουδάει. Το ίδιο και ποδοσφαιριστής, κιθαρίστας.',
      en: 'The suffix -ιστής names the doer: τραγουδιστής = the one who sings. Likewise ποδοσφαιριστής (footballer), κιθαρίστας (guitarist).',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «φτιαγμένος από ξύλο»;', en: 'Which word means “made of wood”?' },
    options: { el: ['ξυλάκι', 'ξύλινος', 'ξυλουργός', 'ξυλεία'], en: ['ξυλάκι', 'ξύλινος', 'ξυλουργός', 'ξυλεία'] },
    correct: 1,
    explanation: {
      el: 'Η κατάληξη -ινος δείχνει από τι είναι φτιαγμένο κάτι: ξύλινος, πέτρινος, μάλλινος. Ο ξυλουργός είναι αυτός που δουλεύει το ξύλο.',
      en: 'The suffix -ινος shows what something is made of: ξύλινος (wooden), πέτρινος (of stone), μάλλινος (woollen). Ξυλουργός is the carpenter.',
    },
  },

  // ── 11–14: compounds and the connecting vowel -ο- ─────────────────────────
  {
    q: { el: 'Ποια είναι η σωστή σύνθετη λέξη από «χαρτί» + «πετσέτα»;', en: 'Which is the correct compound made from «χαρτί» (paper) + «πετσέτα» (napkin)?' },
    options: { el: ['χαρτοπετσέτα', 'χαρτιπετσέτα', 'χαρτπετσέτα', 'χαρτηπετσέτα'], en: ['χαρτοπετσέτα', 'χαρτιπετσέτα', 'χαρτπετσέτα', 'χαρτηπετσέτα'] },
    correct: 0,
    explanation: {
      el: 'Όταν ενώνουμε δύο λέξεις, βάζουμε ανάμεσά τους το συνδετικό φωνήεν -ο-: χαρτ-ο-πετσέτα.',
      en: 'When we join two words, we put the connecting vowel -ο- between them: χαρτ-ο-πετσέτα.',
    },
  },
  {
    q: { el: 'Από ποιες λέξεις αποτελείται η λέξη «ποδόσφαιρο»;', en: 'Which two words make up «ποδόσφαιρο» (football)?' },
    options: { el: ['πόδι + σφαίρα', 'ποδός + φαιρό', 'πόδι + σφυρί', 'πόδι + φάρος'], en: ['πόδι + σφαίρα (foot + ball)', 'ποδός + φαιρό', 'πόδι + σφυρί (foot + hammer)', 'πόδι + φάρος (foot + lighthouse)'] },
    correct: 0,
    explanation: {
      el: 'Ποδόσφαιρο = πόδι + -ο- + σφαίρα. Το πρώτο συνθετικό χάνει την κατάληξή του και μπαίνει το συνδετικό -ο-.',
      en: 'Ποδόσφαιρο = πόδι + -ο- + σφαίρα. The first part drops its ending and the connecting -ο- goes in.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έφτιαξε μια πίτα με μήλα. Πώς γράφεται σωστά η σύνθετη λέξη;', en: 'Giorgos made a pie with apples. How is the compound word (apple pie) spelled correctly?' },
    options: { el: ['μηλοπίτα', 'μηλάπιτα', 'μηλόπιτα', 'μηλοππίτα'], en: ['μηλοπίτα', 'μηλάπιτα', 'μηλόπιτα', 'μηλοππίτα'] },
    correct: 2,
    explanation: {
      el: 'Μήλο + -ο- + πίτα = μηλόπιτα. Στα σύνθετα ο τόνος συχνά ανεβαίνει μια συλλαβή: μηλόπιτα, τυρόπιτα, σπανακόπιτα.',
      en: 'Μήλο + -ο- + πίτα = μηλόπιτα. In compounds the stress often moves up one syllable: μηλόπιτα, τυρόπιτα, σπανακόπιτα.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή σύνθετη λέξη από «φίλος» + «άνθρωπος»;', en: 'Which is the correct compound made from «φίλος» (friend) + «άνθρωπος» (human)?' },
    options: { el: ['φιλοάνθρωπος', 'φιλάνθροπος', 'φιλιάνθρωπος', 'φιλάνθρωπος'], en: ['φιλοάνθρωπος', 'φιλάνθροπος', 'φιλιάνθρωπος', 'φιλάνθρωπος'] },
    correct: 3,
    explanation: {
      el: 'Όταν το δεύτερο συνθετικό αρχίζει από φωνήεν, το συνδετικό -ο- χάνεται: φιλ-άνθρωπος, όχι φιλο-άνθρωπος. Πρόσεχε και το ω του άνθρωπος!',
      en: 'When the second part starts with a vowel, the connecting -ο- drops: φιλ-άνθρωπος, not φιλο-άνθρωπος. Watch the ω in άνθρωπος too!',
    },
  },

  // ── 15–16: word families ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ΔΕΝ ανήκει στην οικογένεια της λέξης «γράφω»;', en: 'Which word does NOT belong to the family of «γράφω» (I write)?' },
    options: { el: ['γράμμα', 'γραφείο', 'γρασίδι', 'γραπτός'], en: ['γράμμα (letter)', 'γραφείο (desk, office)', 'γρασίδι (grass)', 'γραπτός (written)'] },
    correct: 2,
    explanation: {
      el: 'Το γρασίδι μοιάζει στην αρχή, αλλά δεν έχει καμία σχέση με το γράψιμο. Γράμμα, γραφείο και γραπτός έχουν όλα τη ρίζα γραφ-/γραπ-.',
      en: 'Γρασίδι looks similar at the start, but has nothing to do with writing. Γράμμα, γραφείο and γραπτός all share the root γραφ-/γραπ-.',
    },
  },
  {
    q: { el: 'Ποια είναι η ρίζα της οικογένειας: παιχνίδι, παίκτης, παιχνιδιάρης, ξαναπαίζω;', en: 'Which word is the root of the family: παιχνίδι, παίκτης, παιχνιδιάρης, ξαναπαίζω?' },
    options: { el: ['παιδί', 'παίζω', 'πάω', 'πείνα'], en: ['παιδί (child)', 'παίζω (I play)', 'πάω (I go)', 'πείνα (hunger)'] },
    correct: 1,
    explanation: {
      el: 'Όλες οι λέξεις βγαίνουν από το ρήμα παίζω: παιχνίδι, παίκτης, παιχνιδιάρης, ξαναπαίζω. Η λέξη που γεννάει τις άλλες λέγεται ρίζα ή πρωτότυπη λέξη.',
      en: 'All the words come from the verb παίζω (to play). The word that gives birth to the others is called the root or base word.',
    },
  },

  // ── 17–18: loanwords ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις λέξεις είναι δάνειο από ξένη γλώσσα;', en: 'Which of these words is a loanword from another language?' },
    options: { el: ['υπολογιστής', 'μηχανή', 'κομπιούτερ', 'εργαλείο'], en: ['υπολογιστής', 'μηχανή', 'κομπιούτερ', 'εργαλείο'] },
    correct: 2,
    explanation: {
      el: 'Το κομπιούτερ ήρθε από τα αγγλικά (computer). Οι δάνειες λέξεις συνήθως δεν κλίνονται: το κομπιούτερ, τα κομπιούτερ. Η ελληνική λέξη είναι υπολογιστής.',
      en: 'Κομπιούτερ came from English (computer). Loanwords usually do not change their ending: το κομπιούτερ, τα κομπιούτερ. The Greek word is υπολογιστής.',
    },
  },
  {
    q: { el: 'Η λέξη «ασανσέρ» είναι δάνειο από τα γαλλικά. Ποια ελληνική λέξη σημαίνει το ίδιο;', en: '«Ασανσέρ» is a loanword from French. Which Greek word means the same thing (lift)?' },
    options: { el: ['ανελκυστήρας', 'ανεμιστήρας', 'αναπτήρας', 'ανιχνευτής'], en: ['ανελκυστήρας', 'ανεμιστήρας (fan)', 'αναπτήρας (lighter)', 'ανιχνευτής (detector)'] },
    correct: 0,
    explanation: {
      el: 'Ασανσέρ = ανελκυστήρας, από το ανα- (προς τα πάνω) + έλκω (τραβώ) + την κατάληξη -τήρας που δηλώνει μηχάνημα, όπως ανεμιστήρας και αναπτήρας.',
      en: 'Ασανσέρ = ανελκυστήρας, from ανα- (upwards) + έλκω (I pull) + the suffix -τήρας, which names a device, as in ανεμιστήρας (fan) and αναπτήρας (lighter).',
    },
  },
];
