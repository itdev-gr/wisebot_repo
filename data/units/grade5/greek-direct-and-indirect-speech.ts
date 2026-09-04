/**
 * Ε' Δημοτικού · Γλώσσα · Ευθύς & Πλάγιος λόγος
 * =============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Ordered from easiest to hardest:
 *   1–3   telling the two apart: which sentence is direct, the name of indirect speech
 *   4–6   punctuation of direct speech: «», the dash in dialogue, the question mark inside the quotes
 *   7–10  the joining word when reporting: ότι (statement), να (order/request), αν (yes-no question)
 *   11–15 changing the person (and pronouns) when reporting: θα έρθω → θα έρθει, χάσαμε → έχασαν
 *   16–18 back from indirect to direct, and spotting the wrong conversion
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_DIRECT_AND_INDIRECT_SPEECH: QuizQuestion[] = [
  // ── 1–3: direct vs indirect ────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σε ευθύ λόγο;', en: 'Which sentence is in direct speech (ευθύς λόγος)?' },
    options: { el: ['«Πεινάω πολύ», είπε ο Νίκος.', 'Ο Νίκος είπε ότι πεινάει πολύ.', 'Ο Νίκος είπε πως πεινούσε.', 'Ο Νίκος ρώτησε αν υπάρχει φαγητό.'], en: ['«Πεινάω πολύ», είπε ο Νίκος. ("I am very hungry," said Nikos.)', 'Ο Νίκος είπε ότι πεινάει πολύ. (Nikos said that he is very hungry.)', 'Ο Νίκος είπε πως πεινούσε. (Nikos said that he was hungry.)', 'Ο Νίκος ρώτησε αν υπάρχει φαγητό. (Nikos asked if there is food.)'] },
    correct: 0,
    explanation: {
      el: 'Στον ευθύ λόγο ακούμε τα λόγια ακριβώς όπως ειπώθηκαν, μέσα σε εισαγωγικά: «Πεινάω πολύ». Στις άλλες προτάσεις κάποιος τα μεταφέρει.',
      en: 'In direct speech we hear the words exactly as they were said, inside quotation marks: «Πεινάω πολύ». In the other sentences someone is reporting them.',
    },
  },
  {
    q: { el: 'Πώς λέγεται ο λόγος όταν μεταφέρουμε τα λόγια κάποιου με δικά μας λόγια, χωρίς εισαγωγικά;', en: 'What do we call it when we report what someone said in our own words, without quotation marks?' },
    options: { el: ['ευθύς λόγος', 'πλάγιος λόγος', 'διάλογος', 'μονόλογος'], en: ['direct speech (ευθύς λόγος)', 'indirect speech (πλάγιος λόγος)', 'dialogue (διάλογος)', 'monologue (μονόλογος)'] },
    correct: 1,
    explanation: {
      el: 'Πλάγιος λόγος: «Η Μαρία είπε ότι θα έρθει». Δεν λέμε τα λόγια της αυτούσια, τα μεταφέρουμε «πλάγια», με το «ότι».',
      en: 'Indirect speech: «Η Μαρία είπε ότι θα έρθει» (Maria said that she will come). We do not repeat her exact words, we pass them on "sideways", with «ότι».',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σε πλάγιο λόγο;', en: 'Which sentence is in indirect speech (πλάγιος λόγος)?' },
    options: { el: ['«Θα έρθω αύριο», είπε η Μαρία.', '— Πάμε στο πάρκο; ρώτησε ο Πέτρος.', 'Η Ελένη είπε ότι θα πάει στη γιαγιά της.', '«Μπράβο σου!» φώναξε η δασκάλα.'], en: ['«Θα έρθω αύριο», είπε η Μαρία. ("I will come tomorrow," said Maria.)', '— Πάμε στο πάρκο; ρώτησε ο Πέτρος. ("Shall we go to the park?" asked Petros.)', 'Η Ελένη είπε ότι θα πάει στη γιαγιά της. (Eleni said that she will go to her grandmother.)', '«Μπράβο σου!» φώναξε η δασκάλα. ("Well done!" shouted the teacher.)'] },
    correct: 2,
    explanation: {
      el: 'Μόνο εδώ δεν υπάρχουν εισαγωγικά ούτε παύλα: τα λόγια της Ελένης τα μεταφέρει κάποιος άλλος με το «ότι».',
      en: 'Only here are there no quotation marks or dash: someone else is reporting what Eleni said, using «ότι».',
    },
  },

  // ── 4–6: punctuation of direct speech ─────────────────────────────────────
  {
    q: { el: 'Ποια σημεία στίξης βάζουμε γύρω από τα ακριβή λόγια κάποιου στον ευθύ λόγο;', en: 'Which punctuation marks do we put around someone\'s exact words in direct speech?' },
    options: { el: ['παρενθέσεις ( )', 'αγκύλες [ ]', 'θαυμαστικά ! !', 'εισαγωγικά « »'], en: ['parentheses ( )', 'square brackets [ ]', 'exclamation marks ! !', 'quotation marks « »'] },
    correct: 3,
    explanation: {
      el: 'Τα εισαγωγικά « » «αγκαλιάζουν» τα λόγια που ειπώθηκαν: «Καλημέρα», είπε ο παππούς.',
      en: 'Quotation marks « » "hug" the words that were spoken: «Καλημέρα», είπε ο παππούς. ("Good morning," said grandpa.)',
    },
  },
  {
    q: { el: 'Σε έναν διάλογο, τι βάζουμε στην αρχή της γραμμής κάθε φορά που μιλάει άλλο πρόσωπο;', en: 'In a dialogue, what do we put at the start of the line each time a different person speaks?' },
    options: { el: ['παύλα (—)', 'κόμμα (,)', 'τελεία (.)', 'άνω τελεία (·)'], en: ['a dash (—)', 'a comma (,)', 'a full stop (.)', 'a raised dot (·)'] },
    correct: 0,
    explanation: {
      el: 'Η παύλα δείχνει ότι αλλάζει αυτός που μιλάει, χωρίς να χρειάζονται εισαγωγικά: — Πού πας; — Στο σχολείο.',
      en: 'The dash shows the speaker has changed, with no need for quotation marks: — Πού πας; — Στο σχολείο. (— Where are you going? — To school.)',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστή στίξη;', en: 'Which sentence is punctuated correctly?' },
    options: { el: ['«Πού πας»; ρώτησε η μαμά.', 'Πού πας; «ρώτησε η μαμά».', '«Πού πας;» ρώτησε η μαμά.', '«Πού πας; ρώτησε η μαμά.»'], en: ['«Πού πας»; ρώτησε η μαμά.', 'Πού πας; «ρώτησε η μαμά».', '«Πού πας;» ρώτησε η μαμά.', '«Πού πας; ρώτησε η μαμά.»'] },
    correct: 2,
    explanation: {
      el: 'Μέσα στα εισαγωγικά μπαίνουν μόνο τα λόγια της μαμάς, μαζί με το ερωτηματικό τους. Το «ρώτησε η μαμά» είναι δικά μας λόγια και μένει απ\' έξω.',
      en: 'Only mum\'s words go inside the quotation marks, together with their question mark. «ρώτησε η μαμά» (asked mum) is our own words and stays outside.',
    },
  },

  // ── 7–10: ότι / να / αν ───────────────────────────────────────────────────
  {
    q: { el: '«Είμαι κουρασμένος», είπε ο Γιάννης. → Ο Γιάννης είπε ___ είναι κουρασμένος.', en: '«Είμαι κουρασμένος», είπε ο Γιάννης. ("I am tired," said Giannis.) → Ο Γιάννης είπε ___ είναι κουρασμένος. (Giannis said ___ he is tired.)' },
    options: { el: ['ότι', 'να', 'αν', 'και'], en: ['ότι (that)', 'να (to)', 'αν (if)', 'και (and)'] },
    correct: 0,
    explanation: {
      el: 'Ο Γιάννης δηλώνει κάτι, δεν ρωτάει ούτε διατάζει. Τις δηλώσεις τις μεταφέρουμε με το «ότι» (ή το «πως»).',
      en: 'Giannis is stating something, not asking or ordering. We report statements with «ότι» (or «πως»).',
    },
  },
  {
    q: { el: '«Κλείσε την πόρτα», είπε η δασκάλα στον Νίκο. → Η δασκάλα είπε στον Νίκο ___ κλείσει την πόρτα.', en: '«Κλείσε την πόρτα», είπε η δασκάλα στον Νίκο. ("Close the door," the teacher said to Nikos.) → Η δασκάλα είπε στον Νίκο ___ κλείσει την πόρτα. (The teacher told Nikos ___ close the door.)' },
    options: { el: ['ότι', 'να', 'αν', 'πως'], en: ['ότι (that)', 'να (to)', 'αν (if)', 'πως (that)'] },
    correct: 1,
    explanation: {
      el: 'Το «Κλείσε την πόρτα» είναι προσταγή. Τις προσταγές και τις παρακλήσεις τις μεταφέρουμε με το «να».',
      en: '«Κλείσε την πόρτα» is a command. We report commands and requests with «να».',
    },
  },
  {
    q: { el: '«Έχεις τετράδιο;» ρώτησε η Άννα τον Πέτρο. → Η Άννα ρώτησε τον Πέτρο ___ έχει τετράδιο.', en: '«Έχεις τετράδιο;» ρώτησε η Άννα τον Πέτρο. ("Do you have a notebook?" Anna asked Petros.) → Η Άννα ρώτησε τον Πέτρο ___ έχει τετράδιο. (Anna asked Petros ___ he has a notebook.)' },
    options: { el: ['ότι', 'να', 'αν', 'για να'], en: ['ότι (that)', 'να (to)', 'αν (if)', 'για να (in order to)'] },
    correct: 2,
    explanation: {
      el: 'Η Άννα κάνει ερώτηση που απαντιέται με «ναι» ή «όχι». Τέτοιες ερωτήσεις τις μεταφέρουμε με το «αν».',
      en: 'Anna asks a question that is answered with "yes" or "no". We report such questions with «αν» (if / whether).',
    },
  },
  {
    q: { el: 'Πότε χρησιμοποιούμε το «αν» στον πλάγιο λόγο;', en: 'When do we use «αν» in indirect speech?' },
    options: { el: ['όταν μεταφέρουμε μια προσταγή', 'όταν μεταφέρουμε μια δήλωση', 'όταν μεταφέρουμε ένα επιφώνημα', 'όταν μεταφέρουμε μια ερώτηση που απαντιέται με «ναι» ή «όχι»'], en: ['when we report a command', 'when we report a statement', 'when we report an exclamation', 'when we report a question that is answered with «ναι» (yes) or «όχι» (no)'] },
    correct: 3,
    explanation: {
      el: 'Θυμήσου τα τρία «κλειδιά»: δήλωση → ότι, προσταγή → να, ερώτηση ναι/όχι → αν. «Θέλεις νερό;» → Ρώτησε αν θέλω νερό.',
      en: 'Remember the three "keys": statement → ότι, command → να, yes/no question → αν. «Θέλεις νερό;» (Do you want water?) → Ρώτησε αν θέλω νερό. (He asked if I want water.)',
    },
  },

  // ── 11–15: changing the person ────────────────────────────────────────────
  {
    q: { el: '«Θα έρθω», είπε η Μαρία. Ποια είναι η σωστή μεταφορά σε πλάγιο λόγο;', en: '«Θα έρθω», είπε η Μαρία. ("I will come," said Maria.) Which is the correct version in indirect speech?' },
    options: { el: ['Η Μαρία είπε ότι θα έρθω.', 'Η Μαρία είπε ότι θα έρθει.', 'Η Μαρία είπε να έρθει.', 'Η Μαρία είπε αν θα έρθει.'], en: ['Η Μαρία είπε ότι θα έρθω.', 'Η Μαρία είπε ότι θα έρθει.', 'Η Μαρία είπε να έρθει.', 'Η Μαρία είπε αν θα έρθει.'] },
    correct: 1,
    explanation: {
      el: 'Η Μαρία μίλησε για τον εαυτό της («θα έρθω», α\' πρόσωπο). Όταν το μεταφέρουμε εμείς, μιλάμε για εκείνη: «θα έρθει», γ\' πρόσωπο.',
      en: 'Maria spoke about herself («θα έρθω», first person). When we report it, we speak about her: «θα έρθει», third person.',
    },
  },
  {
    q: { el: '«Χάσαμε το λεωφορείο», είπαν τα παιδιά. Ποια είναι η σωστή μεταφορά σε πλάγιο λόγο;', en: '«Χάσαμε το λεωφορείο», είπαν τα παιδιά. ("We missed the bus," said the children.) Which is the correct version in indirect speech?' },
    options: { el: ['Τα παιδιά είπαν ότι έχασαν το λεωφορείο.', 'Τα παιδιά είπαν ότι χάσαμε το λεωφορείο.', 'Τα παιδιά είπαν να χάσουν το λεωφορείο.', 'Τα παιδιά είπαν ότι χάνετε το λεωφορείο.'], en: ['Τα παιδιά είπαν ότι έχασαν το λεωφορείο.', 'Τα παιδιά είπαν ότι χάσαμε το λεωφορείο.', 'Τα παιδιά είπαν να χάσουν το λεωφορείο.', 'Τα παιδιά είπαν ότι χάνετε το λεωφορείο.'] },
    correct: 0,
    explanation: {
      el: 'Το «χάσαμε» (εμείς) γίνεται «έχασαν» (αυτά), γιατί τώρα μιλάμε για τα παιδιά. Ο χρόνος μένει αόριστος.',
      en: '«χάσαμε» (we) becomes «έχασαν» (they), because now we are talking about the children. The tense stays in the past.',
    },
  },
  {
    q: { el: '«Παίζω κιθάρα», είπε ο Κώστας. → Ο Κώστας είπε ότι παίζει κιθάρα. Τι άλλαξε στο ρήμα;', en: '«Παίζω κιθάρα», είπε ο Κώστας. ("I play the guitar," said Kostas.) → Ο Κώστας είπε ότι παίζει κιθάρα. (Kostas said that he plays the guitar.) What changed in the verb?' },
    options: { el: ['από γ\' πρόσωπο έγινε α\' πρόσωπο', 'από ενικό έγινε πληθυντικός', 'από ενεστώτα έγινε μέλλοντας', 'από α\' πρόσωπο έγινε γ\' πρόσωπο'], en: ['it went from third person to first person', 'it went from singular to plural', 'it went from present to future', 'it went from first person to third person'] },
    correct: 3,
    explanation: {
      el: '«Παίζω» = εγώ (α\' πρόσωπο), «παίζει» = αυτός (γ\' πρόσωπο). Στον πλάγιο λόγο αυτός που μιλούσε για τον εαυτό του γίνεται «αυτός».',
      en: '«Παίζω» = I (first person), «παίζει» = he (third person). In indirect speech the one who spoke about himself becomes "he".',
    },
  },
  {
    q: { el: '«Θα σας πάρω τηλέφωνο αύριο», είπε ο θείος στα παιδιά. Ποια είναι η σωστή μεταφορά;', en: '«Θα σας πάρω τηλέφωνο αύριο», είπε ο θείος στα παιδιά. ("I will phone you tomorrow," the uncle said to the children.) Which is the correct reported version?' },
    options: { el: ['Ο θείος είπε στα παιδιά ότι θα σας πάρει τηλέφωνο αύριο.', 'Ο θείος είπε στα παιδιά να τα πάρω τηλέφωνο αύριο.', 'Ο θείος είπε στα παιδιά ότι θα τα πάρει τηλέφωνο αύριο.', 'Ο θείος είπε στα παιδιά αν θα τα πάρει τηλέφωνο αύριο.'], en: ['Ο θείος είπε στα παιδιά ότι θα σας πάρει τηλέφωνο αύριο.', 'Ο θείος είπε στα παιδιά να τα πάρω τηλέφωνο αύριο.', 'Ο θείος είπε στα παιδιά ότι θα τα πάρει τηλέφωνο αύριο.', 'Ο θείος είπε στα παιδιά αν θα τα πάρει τηλέφωνο αύριο.'] },
    correct: 2,
    explanation: {
      el: 'Αλλάζουν δύο πράγματα: «θα πάρω» → «θα πάρει» (ο θείος) και «σας» → «τα» (τα παιδιά). Η δήλωση μεταφέρεται με «ότι».',
      en: 'Two things change: «θα πάρω» → «θα πάρει» (the uncle) and «σας» (you) → «τα» (them, the children). The statement is reported with «ότι».',
    },
  },
  {
    q: { el: '«Έφαγα όλο το φαγητό μου», είπε ο Άρης. Ποια είναι η σωστή μεταφορά σε πλάγιο λόγο;', en: '«Έφαγα όλο το φαγητό μου», είπε ο Άρης. ("I ate all my food," said Aris.) Which is the correct version in indirect speech?' },
    options: { el: ['Ο Άρης είπε ότι έφαγα όλο το φαγητό μου.', 'Ο Άρης είπε να φάει όλο το φαγητό του.', 'Ο Άρης είπε ότι τρώει όλο το φαγητό μου.', 'Ο Άρης είπε ότι έφαγε όλο το φαγητό του.'], en: ['Ο Άρης είπε ότι έφαγα όλο το φαγητό μου.', 'Ο Άρης είπε να φάει όλο το φαγητό του.', 'Ο Άρης είπε ότι τρώει όλο το φαγητό μου.', 'Ο Άρης είπε ότι έφαγε όλο το φαγητό του.'] },
    correct: 3,
    explanation: {
      el: 'Αλλάζει το ρήμα («έφαγα» → «έφαγε») ΚΑΙ η κτητική λέξη («μου» → «του»). Το «μου» θα σήμαινε το δικό μας φαγητό!',
      en: 'Both the verb changes («έφαγα» → «έφαγε») AND the possessive («μου» my → «του» his). Leaving «μου» would mean our own food!',
    },
  },

  // ── 16–18: back to direct speech, spotting the mistake ────────────────────
  {
    q: { el: 'Η Ελένη είπε ότι θα φέρει την μπάλα της. Ποια ήταν τα ακριβή της λόγια;', en: 'Η Ελένη είπε ότι θα φέρει την μπάλα της. (Eleni said that she will bring her ball.) What were her exact words?' },
    options: { el: ['«Θα φέρω την μπάλα μου.»', '«Θα φέρει την μπάλα της.»', '«Να φέρω την μπάλα μου.»', '«Θα φέρεις την μπάλα σου.»'], en: ['«Θα φέρω την μπάλα μου.»', '«Θα φέρει την μπάλα της.»', '«Να φέρω την μπάλα μου.»', '«Θα φέρεις την μπάλα σου.»'] },
    correct: 0,
    explanation: {
      el: 'Γυρίζουμε πίσω στο α\' πρόσωπο, γιατί η Ελένη μιλούσε για τον εαυτό της: «θα φέρει» → «θα φέρω», «της» → «μου».',
      en: 'We go back to the first person, because Eleni was talking about herself: «θα φέρει» → «θα φέρω», «της» (her) → «μου» (my).',
    },
  },
  {
    q: { el: 'Ο δάσκαλος ρώτησε τους μαθητές αν έχουν διαβάσει. Πώς το είπε στον ευθύ λόγο;', en: 'Ο δάσκαλος ρώτησε τους μαθητές αν έχουν διαβάσει. (The teacher asked the pupils if they have studied.) How did he say it in direct speech?' },
    options: { el: ['«Έχουν διαβάσει;» ρώτησε ο δάσκαλος.', '«Έχετε διαβάσει;» ρώτησε ο δάσκαλος.', '«Να διαβάσετε!» είπε ο δάσκαλος.', '«Έχω διαβάσει;» ρώτησε ο δάσκαλος.'], en: ['«Έχουν διαβάσει;» ρώτησε ο δάσκαλος.', '«Έχετε διαβάσει;» ρώτησε ο δάσκαλος.', '«Να διαβάσετε!» είπε ο δάσκαλος.', '«Έχω διαβάσει;» ρώτησε ο δάσκαλος.'] },
    correct: 1,
    explanation: {
      el: 'Ο δάσκαλος μιλάει κατευθείαν στους μαθητές, άρα χρησιμοποιεί το «εσείς»: «Έχετε διαβάσει;». Το «αν» δείχνει ότι ήταν ερώτηση.',
      en: 'The teacher speaks directly to the pupils, so he uses "you" (plural): «Έχετε διαβάσει;». The «αν» tells us it was a question.',
    },
  },
  {
    q: { el: 'Ποια μεταφορά σε πλάγιο λόγο έχει λάθος;', en: 'Which conversion to indirect speech is wrong?' },
    options: { el: ['«Πεινάω», είπε ο Νίκος. → Ο Νίκος είπε ότι πεινάει.', '«Έλα κοντά μου», είπε η μαμά στον Νίκο. → Η μαμά είπε στον Νίκο να πάει κοντά της.', '«Θέλεις νερό;» ρώτησε η Άννα τη Μαρία. → Η Άννα ρώτησε τη Μαρία ότι θέλει νερό.', '«Κερδίσαμε!» φώναξαν τα παιδιά. → Τα παιδιά φώναξαν ότι κέρδισαν.'], en: ['«Πεινάω», είπε ο Νίκος. → Ο Νίκος είπε ότι πεινάει. ("I am hungry" → Nikos said that he is hungry.)', '«Έλα κοντά μου», είπε η μαμά στον Νίκο. → Η μαμά είπε στον Νίκο να πάει κοντά της. ("Come to me" → Mum told Nikos to go to her.)', '«Θέλεις νερό;» ρώτησε η Άννα τη Μαρία. → Η Άννα ρώτησε τη Μαρία ότι θέλει νερό. ("Do you want water?" → Anna asked Maria that she wants water.)', '«Κερδίσαμε!» φώναξαν τα παιδιά. → Τα παιδιά φώναξαν ότι κέρδισαν. ("We won!" → The children shouted that they won.)'] },
    correct: 2,
    explanation: {
      el: 'Το «Θέλεις νερό;» είναι ερώτηση, άρα θέλει «αν», όχι «ότι»: Η Άννα ρώτησε τη Μαρία ΑΝ θέλει νερό. Οι άλλες τρεις μεταφορές είναι σωστές.',
      en: '«Θέλεις νερό;» is a question, so it needs «αν», not «ότι»: Η Άννα ρώτησε τη Μαρία ΑΝ θέλει νερό. The other three conversions are correct.',
    },
  },
];
