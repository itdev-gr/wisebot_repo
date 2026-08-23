/**
 * Ε' Δημοτικού · Γλώσσα · Συνώνυμα, Αντίθετα, Πολυσημία
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–4   synonyms: pick the word that means the same, spot the synonym pair
 *   5–8   antonyms: opposite words, the α- prefix (with its accent)
 *   9–11  homonyms: words that sound alike but are spelled differently (κλίμα/κλήμα, ψηλή/ψιλή, φύλλο/φύλο)
 *   12–14 literal vs figurative meaning
 *   15–18 idioms and proverbs: what the expression really means, which proverb fits
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_VOCABULARY_MEANING: QuizQuestion[] = [
  // ── 1–4: synonyms ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη σημαίνει το ίδιο με τη λέξη «όμορφος»;', en: 'Which word means the same as «όμορφος» (beautiful)?' },
    options: { el: ['γρήγορος', 'μεγάλος', 'ωραίος', 'άσχημος'], en: ['γρήγορος', 'μεγάλος', 'ωραίος', 'άσχημος'] },
    correct: 2,
    explanation: {
      el: 'Το «ωραίος» και το «όμορφος» είναι συνώνυμα: λέξεις που σημαίνουν σχεδόν το ίδιο. Το «άσχημος» είναι το αντίθετο!',
      en: '«Ωραίος» and «όμορφος» are synonyms: words with almost the same meaning. «Άσχημος» (ugly) is the opposite!',
    },
  },
  {
    q: { el: 'Ποιο είναι το συνώνυμο της λέξης «χαρούμενος»;', en: 'Which is the synonym of «χαρούμενος» (happy)?' },
    options: { el: ['ευτυχισμένος', 'λυπημένος', 'κουρασμένος', 'ήσυχος'], en: ['ευτυχισμένος', 'λυπημένος', 'κουρασμένος', 'ήσυχος'] },
    correct: 0,
    explanation: {
      el: 'Χαρούμενος = ευτυχισμένος. Τα συνώνυμα μάς βοηθούν να μην λέμε συνέχεια την ίδια λέξη.',
      en: 'Χαρούμενος = ευτυχισμένος (happy). Synonyms help us avoid repeating the same word all the time.',
    },
  },
  {
    q: { el: 'Η Μαρία «κοιτάζει» τη θάλασσα. Ποιο ρήμα θα μπορούσε να μπει στη θέση του «κοιτάζει»;', en: 'Maria «κοιτάζει» (looks at) the sea. Which verb could replace «κοιτάζει»?' },
    options: { el: ['ακούει', 'αγγίζει', 'μυρίζει', 'βλέπει'], en: ['ακούει', 'αγγίζει', 'μυρίζει', 'βλέπει'] },
    correct: 3,
    explanation: {
      el: 'Κοιτάζω και βλέπω είναι συνώνυμα — και τα δύο γίνονται με τα μάτια. Τα άλλα ρήματα είναι για τα αυτιά, τα χέρια και τη μύτη.',
      en: 'Κοιτάζω and βλέπω are synonyms — both are done with the eyes. The other verbs are for the ears, hands and nose.',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι συνώνυμα;', en: 'Which pair of words are synonyms?' },
    options: { el: ['φίλος – εχθρός', 'δρόμος – οδός', 'αρχή – τέλος', 'φως – σκοτάδι'], en: ['φίλος – εχθρός', 'δρόμος – οδός', 'αρχή – τέλος', 'φως – σκοτάδι'] },
    correct: 1,
    explanation: {
      el: 'Δρόμος και οδός σημαίνουν το ίδιο πράγμα. Τα άλλα ζευγάρια είναι αντίθετα, όχι συνώνυμα.',
      en: 'Δρόμος and οδός both mean “road”. The other pairs are opposites, not synonyms.',
    },
  },

  // ── 5–8: antonyms ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος είναι ψηλός. Ο Νίκος είναι το αντίθετο. Ο Νίκος είναι…', en: 'Giorgos is ψηλός (tall). Nikos is the opposite. Nikos is…' },
    options: { el: ['μεγάλος', 'λεπτός', 'κοντός', 'χαμηλός'], en: ['μεγάλος', 'λεπτός', 'κοντός', 'χαμηλός'] },
    correct: 2,
    explanation: {
      el: 'Για ανθρώπους λέμε ψηλός – κοντός. Το «χαμηλός» το λέμε για πράγματα, όπως ένα χαμηλό τραπέζι.',
      en: 'For people we say ψηλός – κοντός (tall – short). «Χαμηλός» (low) is used for things, like a low table.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του ρήματος «ανεβαίνω»;', en: 'What is the opposite of the verb «ανεβαίνω» (to go up)?' },
    options: { el: ['σκαρφαλώνω', 'κατεβαίνω', 'πέφτω', 'περπατώ'], en: ['σκαρφαλώνω', 'κατεβαίνω', 'πέφτω', 'περπατώ'] },
    correct: 1,
    explanation: {
      el: 'Ανεβαίνω – κατεβαίνω. Το «πέφτω» δεν είναι αντίθετο: πέφτεις χωρίς να το θέλεις, ενώ κατεβαίνεις μόνος σου.',
      en: 'Ανεβαίνω – κατεβαίνω (go up – go down). «Πέφτω» (fall) is not the opposite: you fall by accident, but you go down on purpose.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι το αντίθετο του «γενναίος»;', en: 'Which word is the opposite of «γενναίος» (brave)?' },
    options: { el: ['αδύναμος', 'τεμπέλης', 'δυνατός', 'δειλός'], en: ['αδύναμος', 'τεμπέλης', 'δυνατός', 'δειλός'] },
    correct: 3,
    explanation: {
      el: 'Γενναίος είναι αυτός που δεν φοβάται, δειλός αυτός που φοβάται. Το «αδύναμος» είναι το αντίθετο του «δυνατός».',
      en: 'Γενναίος is someone who is not afraid, δειλός (cowardly) is someone who is. «Αδύναμος» is the opposite of «δυνατός» (strong).',
    },
  },
  {
    q: { el: 'Το αντίθετο της λέξης «γνωστός» φτιάχνεται με ένα α- μπροστά. Πώς γράφεται σωστά;', en: 'The opposite of «γνωστός» (known) is made by adding α- in front. Which spelling is correct?' },
    options: { el: ['αγνωστός', 'ξεγνωστός', 'άγνωστος', 'ανάγνωστος'], en: ['αγνωστός', 'ξεγνωστός', 'άγνωστος', 'ανάγνωστος'] },
    correct: 2,
    explanation: {
      el: 'Γνωστός → άγνωστος. Πρόσεξε: ο τόνος ανεβαίνει στο α-! Το ίδιο γίνεται και στο «δίκαιος → άδικος».',
      en: 'Γνωστός → άγνωστος (unknown). Careful: the accent moves up to the α-! The same happens in «δίκαιος → άδικος».',
    },
  },

  // ── 9–11: homonyms ──────────────────────────────────────────────────────────
  {
    q: { el: 'Οι λέξεις «κλίμα» και «κλήμα» ακούγονται ίδιες. Τι σημαίνει το «κλήμα» με -η-;', en: 'The words «κλίμα» and «κλήμα» sound the same. What does «κλήμα», with -η-, mean?' },
    options: { el: ['τον καιρό μιας περιοχής', 'το φυτό που κάνει σταφύλια', 'μια μικρή σκάλα', 'μια ανηφόρα'], en: ['the weather of a region', 'the plant that grows grapes', 'a small ladder', 'an uphill slope'] },
    correct: 1,
    explanation: {
      el: 'Κλήμα (με η) είναι το φυτό με τα σταφύλια. Κλίμα (με ι) είναι ο καιρός ενός τόπου. Ίδιος ήχος, άλλη ορθογραφία, άλλη σημασία: ομόηχες λέξεις.',
      en: 'Κλήμα (with η) is the grapevine. Κλίμα (with ι) is the climate of a place. Same sound, different spelling, different meaning: homonyms.',
    },
  },
  {
    q: { el: 'Η Ελένη είναι ___ σαν τον μπαμπά της. Ποια λέξη συμπληρώνει σωστά την πρόταση;', en: 'Eleni is ___ like her dad (tall). Which word completes the sentence correctly?' },
    options: { el: ['ψηλή', 'ψιλή', 'ψυλή', 'ψοιλή'], en: ['ψηλή', 'ψιλή', 'ψυλή', 'ψοιλή'] },
    correct: 0,
    explanation: {
      el: 'Ψηλή (με η) σημαίνει «με μεγάλο ύψος». Ψιλή (με ι) σημαίνει «λεπτή», όπως η ψιλή βροχή. Οι άλλες δύο δεν υπάρχουν.',
      en: 'Ψηλή (with η) means “tall”. Ψιλή (with ι) means “fine, thin”, like fine rain. The other two are not real words.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση χρησιμοποιείται σωστά η λέξη «φύλλο» με δύο λ;', en: 'In which sentence is «φύλλο» with two λ used correctly?' },
    options: { el: ['Ο Νίκος είναι καλός φύλλος μου.', 'Το φύλλο του μωρού είναι κορίτσι.', 'Μου έδωσε ένα φύλλο χαρτί.', 'Η μαμά μού έδωσε ένα φύλλο στο μάγουλο.'], en: ['Ο Νίκος είναι καλός φύλλος μου.', 'Το φύλλο του μωρού είναι κορίτσι.', 'Μου έδωσε ένα φύλλο χαρτί.', 'Η μαμά μού έδωσε ένα φύλλο στο μάγουλο.'] },
    correct: 2,
    explanation: {
      el: 'Φύλλο (δύο λ) είναι το φύλλο του δέντρου ή του χαρτιού. Φύλο (ένα λ) είναι το αγόρι/κορίτσι. Φίλος είναι ο φίλος και φιλί το φιλί!',
      en: 'Φύλλο (two λ) is a leaf or a sheet of paper. Φύλο (one λ) means gender. Φίλος is a friend and φιλί is a kiss!',
    },
  },

  // ── 12–14: literal vs figurative ────────────────────────────────────────────
  {
    q: { el: '«Ο Γιώργος πετάει από τη χαρά του.» Τι σημαίνει αυτή η πρόταση;', en: '«Giorgos is flying with joy.» What does this sentence mean?' },
    options: { el: ['Ο Γιώργος πετάει στον αέρα.', 'Ο Γιώργος είναι πολύ χαρούμενος.', 'Ο Γιώργος πηδάει ψηλά.', 'Ο Γιώργος φοβάται.'], en: ['Giorgos is flying in the air.', 'Giorgos is very happy.', 'Giorgos is jumping high.', 'Giorgos is scared.'] },
    correct: 1,
    explanation: {
      el: 'Κανείς δεν πετάει στ\' αλήθεια! Το «πετάει» εδώ έχει μεταφορική σημασία: σημαίνει ότι είναι τόσο χαρούμενος που νιώθει σαν να πετάει.',
      en: 'Nobody really flies! «Πετάει» here has a figurative meaning: he is so happy he feels as if he is flying.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η λέξη «χρυσός» έχει κυριολεκτική σημασία;', en: 'In which sentence does «χρυσός» (gold) have its literal meaning?' },
    options: { el: ['Η Μαρία έχει χρυσή καρδιά.', 'Ο Νίκος είναι χρυσό παιδί.', 'Περάσαμε χρυσές μέρες στις διακοπές.', 'Ο παππούς φοράει ένα χρυσό δαχτυλίδι.'], en: ['Maria has a heart of gold.', 'Nikos is a golden child.', 'We had golden days on holiday.', 'Grandpa wears a gold ring.'] },
    correct: 3,
    explanation: {
      el: 'Το δαχτυλίδι είναι φτιαγμένο από αληθινό χρυσό: κυριολεξία. Η καρδιά, το παιδί και οι μέρες δεν είναι από χρυσό — εκεί «χρυσός» σημαίνει «πολύ καλός»: μεταφορά.',
      en: 'The ring is made of real gold: literal. The heart, the child and the days are not made of gold — there «χρυσός» means “very good”: figurative.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει μεταφορική σημασία;', en: 'Which sentence has a figurative meaning?' },
    options: { el: ['Η γάτα κοιμάται στον καναπέ.', 'Τα λόγια της με πλήγωσαν.', 'Ο ήλιος βγαίνει το πρωί.', 'Η βροχή πότισε τον κήπο.'], en: ['The cat is sleeping on the sofa.', 'Her words wounded me.', 'The sun comes out in the morning.', 'The rain watered the garden.'] },
    correct: 1,
    explanation: {
      el: 'Τα λόγια δεν έχουν μαχαίρι για να πληγώσουν! «Με πλήγωσαν» σημαίνει «με στεναχώρησαν» — μεταφορική σημασία. Οι άλλες προτάσεις λένε ακριβώς αυτό που γίνεται.',
      en: 'Words have no knife to wound you! «Με πλήγωσαν» means “they made me sad” — figurative. The other sentences say exactly what happens.',
    },
  },

  // ── 15–18: idioms and proverbs ──────────────────────────────────────────────
  {
    q: { el: 'Όταν η δασκάλα ρώτησε ξαφνικά τον Νίκο, αυτός «τα έχασε». Τι σημαίνει αυτό;', en: 'When the teacher suddenly asked Nikos a question, he «τα έχασε». What does this mean?' },
    options: { el: ['Έχασε τα βιβλία του.', 'Έχασε τον δρόμο.', 'Μπερδεύτηκε και δεν ήξερε τι να πει.', 'Έχασε το παιχνίδι.'], en: ['He lost his books.', 'He lost his way.', 'He got confused and did not know what to say.', 'He lost the game.'] },
    correct: 2,
    explanation: {
      el: '«Τα έχασα» είναι μια έκφραση που σημαίνει «σάστισα, μπερδεύτηκα». Δεν χάνεις κάτι αληθινό — οι εκφράσεις έχουν δική τους σημασία.',
      en: '«Τα έχασα» is an idiom meaning “I got flustered, I was confused”. You do not lose anything real — idioms have their own meaning.',
    },
  },
  {
    q: { el: 'Η Ελένη «κάνει την πάπια» όταν η μαμά ρωτάει ποιος έφαγε τα μπισκότα. Τι κάνει η Ελένη;', en: 'Eleni «κάνει την πάπια» when mum asks who ate the biscuits. What is Eleni doing?' },
    options: { el: ['Κολυμπάει σαν πάπια.', 'Περπατάει αργά.', 'Μιλάει πολύ δυνατά.', 'Κάνει πως δεν καταλαβαίνει τίποτα.'], en: ['She swims like a duck.', 'She walks slowly.', 'She talks very loudly.', 'She pretends not to understand anything.'] },
    correct: 3,
    explanation: {
      el: '«Κάνω την πάπια» σημαίνει προσποιούμαι ότι δεν ξέρω και δεν καταλαβαίνω. Δεν έχει καμία σχέση με αληθινές πάπιες!',
      en: '«Κάνω την πάπια» (“play the duck”) means to pretend you know nothing. It has nothing to do with real ducks!',
    },
  },
  {
    q: { el: 'Τι μας διδάσκει η παροιμία «Όποιος βιάζεται σκοντάφτει»;', en: 'What does the proverb «Όποιος βιάζεται σκοντάφτει» (whoever hurries, trips) teach us?' },
    options: { el: ['Όταν κάνουμε κάτι βιαστικά, κάνουμε λάθη.', 'Πρέπει πάντα να τρέχουμε γρήγορα.', 'Δεν πρέπει να περπατάμε στον δρόμο.', 'Όποιος είναι αργός χάνει.'], en: ['When we do something in a hurry, we make mistakes.', 'We should always run fast.', 'We should not walk on the road.', 'Whoever is slow loses.'] },
    correct: 0,
    explanation: {
      el: 'Η παροιμία δεν μιλάει μόνο για περπάτημα. Λέει ότι όποιος βιάζεται σε οτιδήποτε (διάβασμα, δουλειά) κάνει λάθη. Καλύτερα ήρεμα και σωστά!',
      en: 'The proverb is not only about walking. It says that whoever rushes anything (homework, a job) makes mistakes. Better calm and correct!',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να μάθει κιθάρα, αλλά τα παρατάει με την πρώτη δυσκολία. Ποια παροιμία θα του έλεγες;', en: 'Giorgos wants to learn guitar but gives up at the first difficulty. Which proverb would you tell him?' },
    options: { el: ['Όπου λαλούν πολλοί κοκόροι, αργεί να ξημερώσει.', 'Αγάλι αγάλι γίνεται η αγουρίδα μέλι.', 'Η γλώσσα κόκαλα δεν έχει και κόκαλα τσακίζει.', 'Κάλλιο πέντε και στο χέρι παρά δέκα και καρτέρει.'], en: ['Where many roosters crow, dawn comes late.', 'Little by little the sour grape turns to honey.', 'The tongue has no bones but breaks bones.', 'Better five in the hand than ten to wait for.'] },
    correct: 1,
    explanation: {
      el: '«Αγάλι αγάλι» σημαίνει «σιγά σιγά». Η αγουρίδα (το άγουρο σταφύλι) γίνεται γλυκιά με τον καιρό — έτσι και η κιθάρα θέλει υπομονή και εξάσκηση.',
      en: '«Αγάλι αγάλι» means “little by little”. The sour grape turns sweet with time — and the guitar, too, needs patience and practice.',
    },
  },
];
