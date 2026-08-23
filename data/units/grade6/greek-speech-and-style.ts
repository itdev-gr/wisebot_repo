/**
 * ΣΤ' Δημοτικού · Γλώσσα · Ευθύς–Πλάγιος Λόγος & Ύφος
 * ====================================================
 * Original questions (curriculum topics only — no textbook text). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–6   direct → reported speech: statements, questions (πού / αν), commands (να + verb),
 *         and the pronoun/person changes children forget (μου → της, πεινάω → πεινάει)
 *   7–9   punctuation of speech: άνω-κάτω τελεία, «» quotes, no «;» in reported questions
 *   10–12 register: formal vs informal language (principal, mayor, friends)
 *   13–15 figurative vs literal language, everyday Greek expressions
 *   16–18 simile (σαν) vs metaphor — recognising and converting them
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_SPEECH_AND_STYLE: QuizQuestion[] = [
  // ── 1–6: direct → reported speech ─────────────────────────────────────────
  {
    q: { el: 'Ευθύς λόγος: Ο Νίκος είπε: «Πεινάω». Ποιος είναι ο σωστός πλάγιος λόγος;', en: 'Direct speech: Nikos said: «Πεινάω» (“I am hungry”). Which is the correct reported speech?' },
    options: { el: ['Ο Νίκος είπε ότι πεινάω.', 'Ο Νίκος είπε ότι πεινάς.', 'Ο Νίκος είπε ότι πεινάει.', 'Ο Νίκος είπε να πεινάει.'], en: ['Ο Νίκος είπε ότι πεινάω.', 'Ο Νίκος είπε ότι πεινάς.', 'Ο Νίκος είπε ότι πεινάει.', 'Ο Νίκος είπε να πεινάει.'] },
    correct: 2,
    explanation: {
      el: 'Στον πλάγιο λόγο μιλάμε ΓΙΑ τον Νίκο, όχι σαν τον Νίκο. Το «πεινάω» (εγώ) γίνεται «πεινάει» (αυτός) και βάζουμε «ότι».',
      en: 'In reported speech we talk ABOUT Nikos, not as Nikos. “πεινάω” (I) becomes “πεινάει” (he), and we add “ότι” (that).',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σε ευθύ λόγο;', en: 'Which sentence is in direct speech?' },
    options: { el: ['Η Ελένη είπε ότι θα έρθει αύριο.', 'Η Ελένη είπε: «Θα έρθω αύριο».', 'Η Ελένη ρώτησε αν θα έρθω αύριο.', 'Η Ελένη είπε πως θέλει να έρθει.'], en: ['Η Ελένη είπε ότι θα έρθει αύριο.', 'Η Ελένη είπε: «Θα έρθω αύριο».', 'Η Ελένη ρώτησε αν θα έρθω αύριο.', 'Η Ελένη είπε πως θέλει να έρθει.'] },
    correct: 1,
    explanation: {
      el: 'Ευθύς λόγος = τα λόγια ακριβώς όπως τα είπε κάποιος, μέσα σε εισαγωγικά «». Οι άλλες προτάσεις τα μεταφέρουν με «ότι», «αν», «πως».',
      en: 'Direct speech = the exact words someone said, inside «» quotes. The other sentences report them with “ότι”, “αν”, “πως”.',
    },
  },
  {
    q: { el: 'Η Μαρία είπε: «Θα πάω στη γιαγιά μου». Στον πλάγιο λόγο γίνεται…', en: 'Maria said: «Θα πάω στη γιαγιά μου» (“I will go to my grandma”). In reported speech it becomes…' },
    options: { el: ['Η Μαρία είπε ότι θα πάει στη γιαγιά της.', 'Η Μαρία είπε ότι θα πάει στη γιαγιά μου.', 'Η Μαρία είπε ότι θα πάω στη γιαγιά της.', 'Η Μαρία είπε ότι θα πάει στη γιαγιά σου.'], en: ['Η Μαρία είπε ότι θα πάει στη γιαγιά της.', 'Η Μαρία είπε ότι θα πάει στη γιαγιά μου.', 'Η Μαρία είπε ότι θα πάω στη γιαγιά της.', 'Η Μαρία είπε ότι θα πάει στη γιαγιά σου.'] },
    correct: 0,
    explanation: {
      el: 'Αλλάζουν δύο πράγματα: το ρήμα (θα πάω → θα πάει) και η κτητική αντωνυμία (μου → της). Η γιαγιά είναι της Μαρίας, όχι δική μας!',
      en: 'Two things change: the verb (θα πάω → θα πάει) and the possessive (μου “my” → της “her”). The grandma is Maria’s, not ours!',
    },
  },
  {
    q: { el: 'Ο Γιώργος ρώτησε: «Πού είναι το βιβλίο μου;». Ποιος είναι ο σωστός πλάγιος λόγος;', en: 'Giorgos asked: «Πού είναι το βιβλίο μου;» (“Where is my book?”). Which is the correct reported speech?' },
    options: { el: ['Ο Γιώργος ρώτησε ότι πού είναι το βιβλίο του.', 'Ο Γιώργος ρώτησε αν είναι το βιβλίο του.', 'Ο Γιώργος ρώτησε πού είναι το βιβλίο μου.', 'Ο Γιώργος ρώτησε πού είναι το βιβλίο του.'], en: ['Ο Γιώργος ρώτησε ότι πού είναι το βιβλίο του.', 'Ο Γιώργος ρώτησε αν είναι το βιβλίο του.', 'Ο Γιώργος ρώτησε πού είναι το βιβλίο μου.', 'Ο Γιώργος ρώτησε πού είναι το βιβλίο του.'] },
    correct: 3,
    explanation: {
      el: 'Όταν η ερώτηση έχει ερωτηματική λέξη (πού, πότε, γιατί…), την κρατάμε: «ρώτησε πού…». Δεν βάζουμε «ότι» και το «μου» γίνεται «του».',
      en: 'When the question has a question word (πού “where”, πότε “when”…), we keep it: “ρώτησε πού…”. No “ότι”, and “μου” (my) becomes “του” (his).',
    },
  },
  {
    q: { el: 'Η δασκάλα ρώτησε: «Τελειώσατε την άσκηση;». Στον πλάγιο λόγο γίνεται…', en: 'The teacher asked: «Τελειώσατε την άσκηση;» (“Did you finish the exercise?”). In reported speech it becomes…' },
    options: { el: ['Η δασκάλα ρώτησε ότι τελειώσαμε την άσκηση.', 'Η δασκάλα ρώτησε αν τελειώσαμε την άσκηση.', 'Η δασκάλα ρώτησε πού τελειώσαμε την άσκηση.', 'Η δασκάλα ρώτησε να τελειώσαμε την άσκηση.'], en: ['Η δασκάλα ρώτησε ότι τελειώσαμε την άσκηση.', 'Η δασκάλα ρώτησε αν τελειώσαμε την άσκηση.', 'Η δασκάλα ρώτησε πού τελειώσαμε την άσκηση.', 'Η δασκάλα ρώτησε να τελειώσαμε την άσκηση.'] },
    correct: 1,
    explanation: {
      el: 'Ερώτηση που απαντιέται με «ναι» ή «όχι» μεταφέρεται με το «αν»: «ρώτησε αν τελειώσαμε». Το «ότι» είναι για δηλώσεις, όχι για ερωτήσεις.',
      en: 'A yes/no question is reported with “αν” (whether/if): “ρώτησε αν τελειώσαμε”. “ότι” is for statements, not questions.',
    },
  },
  {
    q: { el: 'Η μαμά είπε στον Νίκο: «Κλείσε το παράθυρο». Ποιος είναι ο σωστός πλάγιος λόγος;', en: 'Mum said to Nikos: «Κλείσε το παράθυρο» (“Close the window”). Which is the correct reported speech?' },
    options: { el: ['Η μαμά είπε στον Νίκο ότι κλείσε το παράθυρο.', 'Η μαμά είπε στον Νίκο ότι έκλεισε το παράθυρο.', 'Η μαμά είπε στον Νίκο να κλείσει το παράθυρο.', 'Η μαμά είπε στον Νίκο να κλείσω το παράθυρο.'], en: ['Η μαμά είπε στον Νίκο ότι κλείσε το παράθυρο.', 'Η μαμά είπε στον Νίκο ότι έκλεισε το παράθυρο.', 'Η μαμά είπε στον Νίκο να κλείσει το παράθυρο.', 'Η μαμά είπε στον Νίκο να κλείσω το παράθυρο.'] },
    correct: 2,
    explanation: {
      el: 'Μια προσταγή (κλείσε!) μεταφέρεται με «να» + ρήμα: «είπε να κλείσει». Το «ότι έκλεισε» θα σήμαινε ότι το έκλεισε ήδη — άλλο νόημα!',
      en: 'A command (κλείσε! “close!”) is reported with “να” + verb: “είπε να κλείσει”. “ότι έκλεισε” would mean he already closed it — a different meaning!',
    },
  },

  // ── 7–9: punctuation of speech ────────────────────────────────────────────
  {
    q: { el: 'Στον ευθύ λόγο, ποιο σημείο στίξης βάζουμε μετά το «είπε» και πριν τα εισαγωγικά;', en: 'In direct speech, which punctuation mark goes after «είπε» (“said”) and before the quotation marks?' },
    options: { el: ['άνω και κάτω τελεία ( : )', 'κόμμα ( , )', 'τελεία ( . )', 'ερωτηματικό ( ; )'], en: ['colon ( : )', 'comma ( , )', 'full stop ( . )', 'Greek question mark ( ; )'] },
    correct: 0,
    explanation: {
      el: 'Γράφουμε: Ο Νίκος είπε: «Έλα!». Η άνω και κάτω τελεία ( : ) ανοίγει τον δρόμο για τα λόγια που ακολουθούν μέσα στα «».',
      en: 'We write: Ο Νίκος είπε: «Έλα!». The colon ( : ) opens the way for the words that follow inside the «» quotes.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστή στίξη;', en: 'Which sentence is punctuated correctly?' },
    options: { el: ['Η Ελένη είπε «Αύριο έχουμε εκδρομή»', 'Η Ελένη είπε: Αύριο έχουμε εκδρομή.', 'Η Ελένη είπε: «Αύριο έχουμε εκδρομή».', 'Η Ελένη είπε, Αύριο έχουμε εκδρομή.'], en: ['Η Ελένη είπε «Αύριο έχουμε εκδρομή»', 'Η Ελένη είπε: Αύριο έχουμε εκδρομή.', 'Η Ελένη είπε: «Αύριο έχουμε εκδρομή».', 'Η Ελένη είπε, Αύριο έχουμε εκδρομή.'] },
    correct: 2,
    explanation: {
      el: 'Τρία πράγματα χρειάζονται: άνω και κάτω τελεία μετά το «είπε», εισαγωγικά «» γύρω από τα λόγια και τελεία στο τέλος.',
      en: 'Three things are needed: a colon after “είπε”, «» quotes around the words, and a full stop at the end.',
    },
  },
  {
    q: { el: 'Με τι τελειώνει η πρόταση «Ο Νίκος ρώτησε αν θα βρέξει αύριο»;', en: 'How does the sentence «Ο Νίκος ρώτησε αν θα βρέξει αύριο» (“Nikos asked if it will rain tomorrow”) end?' },
    options: { el: ['με τελεία ( . )', 'με ερωτηματικό ( ; )', 'με θαυμαστικό ( ! )', 'με άνω τελεία ( · )'], en: ['with a full stop ( . )', 'with a Greek question mark ( ; )', 'with an exclamation mark ( ! )', 'with a raised dot ( · )'] },
    correct: 0,
    explanation: {
      el: 'Στον πλάγιο λόγο η ερώτηση γίνεται δήλωση: λέμε τι ρώτησε ο Νίκος. Γι\' αυτό τελειώνει με τελεία, όχι με ερωτηματικό.',
      en: 'In reported speech the question becomes a statement: we say what Nikos asked. So it ends with a full stop, not a question mark.',
    },
  },

  // ── 10–12: register (formal / informal) ───────────────────────────────────
  {
    q: { el: 'Συναντάς τον διευθυντή του σχολείου στον διάδρομο. Πώς τον χαιρετάς;', en: 'You meet the school principal in the corridor. How do you greet him?' },
    options: { el: ['«Γεια σου, τι λέει;»', '«Καλημέρα σας, κύριε Διευθυντά.»', '«Έλα ρε, καλημέρα!»', '«Τι κάνεις, φίλε;»'], en: ['«Γεια σου, τι λέει;» (Hi, what’s up?)', '«Καλημέρα σας, κύριε Διευθυντά.» (Good morning, Principal.)', '«Έλα ρε, καλημέρα!» (Hey, morning!)', '«Τι κάνεις, φίλε;» (How are you, mate?)'] },
    correct: 1,
    explanation: {
      el: 'Σε μεγαλύτερους και σε άτομα που δεν ξέρουμε καλά μιλάμε στον πληθυντικό ευγενείας («σας») — αυτό λέγεται επίσημο ύφος.',
      en: 'To adults and people we do not know well we use the polite plural (“σας”) — this is called formal register.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει ανεπίσημο (φιλικό) ύφος;', en: 'Which sentence has an informal (friendly) register?' },
    options: { el: ['«Θα σας παρακαλούσα να με ενημερώσετε.»', '«Σας ευχαριστώ για τον χρόνο σας.»', '«Δώσ\' μου λίγο το στιλό, έλα!»', '«Παρακαλώ, περάστε μέσα.»'], en: ['«Θα σας παρακαλούσα να με ενημερώσετε.» (I would ask you to inform me.)', '«Σας ευχαριστώ για τον χρόνο σας.» (Thank you for your time.)', '«Δώσ\' μου λίγο το στιλό, έλα!» (Gimme the pen, come on!)', '«Παρακαλώ, περάστε μέσα.» (Please, come in.)'] },
    correct: 2,
    explanation: {
      el: 'Το ανεπίσημο ύφος έχει ενικό («μου», «έλα»), κομμένες λέξεις («δώσ\'») και χαλαρό τόνο. Οι άλλες τρεις χρησιμοποιούν τον ευγενικό πληθυντικό.',
      en: 'Informal register uses the singular (“μου”, “έλα”), shortened words (“δώσ\'”) and a relaxed tone. The other three use the polite plural.',
    },
  },
  {
    q: { el: 'Γράφεις γράμμα στον δήμαρχο για να ζητήσεις μια νέα παιδική χαρά. Πώς ξεκινάς;', en: 'You are writing a letter to the mayor asking for a new playground. How do you begin?' },
    options: { el: ['«Γεια σου, δήμαρχε!»', '«Έλα, τι κάνεις;»', '«Φίλε δήμαρχε,»', '«Αξιότιμε κύριε Δήμαρχε,»'], en: ['«Γεια σου, δήμαρχε!» (Hi, mayor!)', '«Έλα, τι κάνεις;» (Hey, how are you?)', '«Φίλε δήμαρχε,» (Mayor buddy,)', '«Αξιότιμε κύριε Δήμαρχε,» (Dear Mr Mayor,)'] },
    correct: 3,
    explanation: {
      el: 'Σε επίσημο γράμμα αρχίζουμε με «Αξιότιμε/Αξιότιμη κύριε/κυρία…» και μιλάμε στον πληθυντικό. Έτσι δείχνουμε σεβασμό και μας παίρνουν στα σοβαρά.',
      en: 'A formal letter starts with “Αξιότιμε κύριε…” (Dear Mr…) and uses the polite plural. That shows respect and gets us taken seriously.',
    },
  },

  // ── 13–15: figurative vs literal language ─────────────────────────────────
  {
    q: { el: '«Η Μαρία πετάει από τη χαρά της.» Τι σημαίνει η πρόταση;', en: '«Η Μαρία πετάει από τη χαρά της.» (“Maria is flying with joy.”) What does the sentence mean?' },
    options: { el: ['Η Μαρία έχει φτερά.', 'Η Μαρία είναι πολύ χαρούμενη.', 'Η Μαρία ταξιδεύει με αεροπλάνο.', 'Η Μαρία πηδάει πολύ ψηλά.'], en: ['Maria has wings.', 'Maria is very happy.', 'Maria is travelling by plane.', 'Maria jumps very high.'] },
    correct: 1,
    explanation: {
      el: 'Αυτό είναι μεταφορική γλώσσα: η Μαρία δεν πετάει στ\' αλήθεια. Λέμε «πετάει» για να δείξουμε πόσο μεγάλη είναι η χαρά της.',
      en: 'This is figurative language: Maria is not really flying. We say “flying” to show how big her joy is.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η λέξη «έσπασε» έχει κυριολεκτική σημασία;', en: 'In which sentence does the word «έσπασε» (“broke”) have its literal meaning?' },
    options: { el: ['Μου έσπασε τα νεύρα με τη φασαρία.', 'Έσπασε ο πάγος και γίναμε φίλοι.', 'Το ποτήρι έσπασε στο πάτωμα.', 'Έσπασε το κεφάλι του στο διάβασμα.'], en: ['Μου έσπασε τα νεύρα με τη φασαρία. (He got on my nerves with the noise.)', 'Έσπασε ο πάγος και γίναμε φίλοι. (The ice broke and we became friends.)', 'Το ποτήρι έσπασε στο πάτωμα. (The glass broke on the floor.)', 'Έσπασε το κεφάλι του στο διάβασμα. (He racked his brain studying.)'] },
    correct: 2,
    explanation: {
      el: 'Κυριολεξία = η λέξη σημαίνει ακριβώς αυτό που λέει. Το ποτήρι έσπασε στ\' αλήθεια. Τα νεύρα, ο πάγος και το κεφάλι «σπάνε» μόνο μεταφορικά.',
      en: 'Literal = the word means exactly what it says. The glass really broke. Nerves, ice and heads “break” only figuratively.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει: «Σήμερα βρέχει καρεκλοπόδαρα!». Τι εννοεί;', en: 'Nikos says: «Σήμερα βρέχει καρεκλοπόδαρα!» (literally “It is raining chair legs today!”). What does he mean?' },
    options: { el: ['Πέφτουν καρέκλες από τον ουρανό.', 'Ψιχαλίζει λίγο.', 'Ο καιρός είναι άστατος.', 'Βρέχει πάρα πολύ δυνατά.'], en: ['Chairs are falling from the sky.', 'It is drizzling a little.', 'The weather is changeable.', 'It is raining very hard.'] },
    correct: 3,
    explanation: {
      el: 'Είναι μια έκφραση της καθημερινής γλώσσας. Οι «χοντρές» σταγόνες μοιάζουν με πόδια καρέκλας — δηλαδή βρέχει πολύ δυνατά. Στα αγγλικά λένε «βρέχει γάτες και σκύλους»!',
      en: 'It is an everyday Greek expression. The “thick” drops look like chair legs — so it is raining very hard. English says “raining cats and dogs”!',
    },
  },

  // ── 16–18: simile vs metaphor ─────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση περιέχει παρομοίωση;', en: 'Which sentence contains a simile (παρομοίωση)?' },
    options: { el: ['Τα μάτια της είναι αστέρια.', 'Τα μάτια της λάμπουν σαν αστέρια.', 'Τα μάτια της είναι καστανά.', 'Τα μάτια της κουράστηκαν από το διάβασμα.'], en: ['Τα μάτια της είναι αστέρια. (Her eyes are stars.)', 'Τα μάτια της λάμπουν σαν αστέρια. (Her eyes shine like stars.)', 'Τα μάτια της είναι καστανά. (Her eyes are brown.)', 'Τα μάτια της κουράστηκαν από το διάβασμα. (Her eyes got tired from reading.)'] },
    correct: 1,
    explanation: {
      el: 'Η παρομοίωση συγκρίνει δύο πράγματα με τη λέξη «σαν» (ή «όπως»): λάμπουν ΣΑΝ αστέρια. Χωρίς το «σαν» («είναι αστέρια») έχουμε μεταφορά.',
      en: 'A simile compares two things with the word “σαν” (like/as): they shine LIKE stars. Without “σαν” (“are stars”) it is a metaphor.',
    },
  },
  {
    q: { el: '«Ο Γιώργος είναι λιοντάρι στο γήπεδο.» Τι σχήμα λόγου είναι αυτό;', en: '«Ο Γιώργος είναι λιοντάρι στο γήπεδο.» (“Giorgos is a lion on the pitch.”) What figure of speech is this?' },
    options: { el: ['παρομοίωση', 'κυριολεξία', 'μεταφορά', 'υπερβολή'], en: ['simile (παρομοίωση)', 'literal language (κυριολεξία)', 'metaphor (μεταφορά)', 'hyperbole (υπερβολή)'] },
    correct: 2,
    explanation: {
      el: 'Μεταφορά: λέμε ότι ο Γιώργος ΕΙΝΑΙ λιοντάρι (δυνατός, γενναίος), χωρίς «σαν». Αν λέγαμε «είναι σαν λιοντάρι», θα ήταν παρομοίωση.',
      en: 'Metaphor: we say Giorgos IS a lion (strong, brave), with no “σαν”. If we said “είναι σαν λιοντάρι” (is like a lion), it would be a simile.',
    },
  },
  {
    q: { el: 'Η μεταφορά «Η θάλασσα είναι καθρέφτης» πώς γίνεται παρομοίωση;', en: 'How does the metaphor «Η θάλασσα είναι καθρέφτης» (“The sea is a mirror”) become a simile?' },
    options: { el: ['Η θάλασσα είναι πολύ καθρέφτης.', 'Η θάλασσα είναι σαν καθρέφτης.', 'Η θάλασσα έχει έναν καθρέφτη.', 'Η θάλασσα είναι ήρεμη σήμερα.'], en: ['Η θάλασσα είναι πολύ καθρέφτης. (The sea is very mirror.)', 'Η θάλασσα είναι σαν καθρέφτης. (The sea is like a mirror.)', 'Η θάλασσα έχει έναν καθρέφτη. (The sea has a mirror.)', 'Η θάλασσα είναι ήρεμη σήμερα. (The sea is calm today.)'] },
    correct: 1,
    explanation: {
      el: 'Μεταφορά → παρομοίωση: προσθέτουμε το «σαν». «Είναι καθρέφτης» (μεταφορά) γίνεται «είναι σαν καθρέφτης» (παρομοίωση). Το νόημα μένει ίδιο: ήρεμη και γυαλιστερή.',
      en: 'Metaphor → simile: add “σαν” (like). “Είναι καθρέφτης” (metaphor) becomes “είναι σαν καθρέφτης” (simile). The meaning stays: calm and shiny.',
    },
  },
];
