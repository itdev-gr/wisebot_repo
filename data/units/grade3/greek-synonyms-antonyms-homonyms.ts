/**
 * Γ' Δημοτικού · Γλώσσα · Συνώνυμα, Αντίθετα, Ομώνυμα
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–5   synonyms: words that mean about the same (όμορφος / ωραίος), swapping one in a sentence
 *   6–10  antonyms: words that mean the opposite (ανοιχτός / κλειστός), finding the pair
 *   11–16 homonyms: words that sound the same but are spelled differently and mean different
 *         things — ψηλός / ψιλός, κλείνω / κλίνω, φύλλο / φίλο, λείπει / λύπη, σύκο / σήκω
 *   17–18 the right word for the sentence: τοίχος / τείχος, spotting the wrongly used word
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_SYNONYMS_ANTONYMS_HOMONYMS: QuizQuestion[] = [
  // ── 1–5: synonyms ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «όμορφος»;', en: 'Which word is a synonym of «όμορφος» (beautiful)?' },
    options: { el: ['άσχημος', 'ωραίος', 'ψηλός', 'γρήγορος'], en: ['άσχημος', 'ωραίος', 'ψηλός', 'γρήγορος'] },
    correct: 1,
    explanation: {
      el: 'Συνώνυμες είναι οι λέξεις που σημαίνουν σχεδόν το ίδιο: όμορφος = ωραίος. Το «άσχημος» είναι το αντίθετο.',
      en: 'Synonyms are words that mean almost the same: όμορφος = ωραίος. «άσχημος» (ugly) is the opposite.',
    },
  },
  {
    q: { el: 'Τι είναι οι συνώνυμες λέξεις;', en: 'What are synonyms (συνώνυμες λέξεις)?' },
    options: {
      el: ['Λέξεις που σημαίνουν το αντίθετο', 'Λέξεις που ακούγονται ίδια αλλά γράφονται αλλιώς', 'Λέξεις που σημαίνουν περίπου το ίδιο', 'Λέξεις που έχουν τον ίδιο αριθμό συλλαβών'],
      en: ['Words that mean the opposite', 'Words that sound the same but are spelled differently', 'Words that mean about the same', 'Words that have the same number of syllables'],
    },
    correct: 2,
    explanation: {
      el: 'Οι συνώνυμες λέξεις έχουν σχεδόν την ίδια σημασία, π.χ. σπίτι – κατοικία, μεγάλος – τεράστιος. Μας βοηθούν να μη λέμε συνέχεια την ίδια λέξη.',
      en: 'Synonyms have almost the same meaning, e.g. σπίτι – κατοικία, μεγάλος – τεράστιος. They help us avoid repeating the same word.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «χαρούμενος»;', en: 'Which word is a synonym of «χαρούμενος» (happy)?' },
    options: { el: ['λυπημένος', 'θυμωμένος', 'κουρασμένος', 'ευτυχισμένος'], en: ['λυπημένος', 'θυμωμένος', 'κουρασμένος', 'ευτυχισμένος'] },
    correct: 3,
    explanation: {
      el: 'Χαρούμενος και ευτυχισμένος σημαίνουν σχεδόν το ίδιο. Το «λυπημένος» είναι το αντίθετο.',
      en: 'Χαρούμενος and ευτυχισμένος mean almost the same. «λυπημένος» (sad) is the opposite.',
    },
  },
  {
    q: { el: '«Ο Νίκος φτιάχνει ένα ωραίο σπίτι.» Ποια λέξη μπορεί να πάρει τη θέση του «φτιάχνει» χωρίς να αλλάξει το νόημα;', en: '«Ο Νίκος φτιάχνει ένα ωραίο σπίτι.» (Nikos makes a nice house.) Which word can take the place of «φτιάχνει» without changing the meaning?' },
    options: { el: ['χτίζει', 'χαλάει', 'βλέπει', 'πουλάει'], en: ['χτίζει', 'χαλάει', 'βλέπει', 'πουλάει'] },
    correct: 0,
    explanation: {
      el: 'Φτιάχνω ένα σπίτι = χτίζω ένα σπίτι. Το «χαλάει» λέει το αντίθετο, τα «βλέπει» και «πουλάει» λένε κάτι άλλο.',
      en: 'Φτιάχνω a house = χτίζω (build) a house. «χαλάει» says the opposite, «βλέπει» and «πουλάει» say something else.',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι συνώνυμα;', en: 'Which pair of words are synonyms?' },
    options: { el: ['μεγάλος – μικρός', 'δρόμος – οδός', 'μέρα – νύχτα', 'ζεστός – κρύος'], en: ['μεγάλος – μικρός', 'δρόμος – οδός', 'μέρα – νύχτα', 'ζεστός – κρύος'] },
    correct: 1,
    explanation: {
      el: 'Δρόμος και οδός σημαίνουν το ίδιο πράγμα. Τα άλλα ζευγάρια είναι αντίθετα: μεγάλος – μικρός, μέρα – νύχτα, ζεστός – κρύος.',
      en: 'Δρόμος and οδός mean the same thing (road). The other pairs are opposites: μεγάλος – μικρός, μέρα – νύχτα, ζεστός – κρύος.',
    },
  },

  // ── 6–10: antonyms ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι αντίθετη της λέξης «ανοιχτός»;', en: 'Which word is the opposite of «ανοιχτός» (open)?' },
    options: { el: ['κλειστός', 'φωτεινός', 'μεγάλος', 'ψηλός'], en: ['κλειστός', 'φωτεινός', 'μεγάλος', 'ψηλός'] },
    correct: 0,
    explanation: {
      el: 'Αντίθετες είναι οι λέξεις που σημαίνουν το ανάποδο: ανοιχτός – κλειστός, όπως μια πόρτα ανοιχτή ή κλειστή.',
      en: 'Antonyms are words that mean the reverse: ανοιχτός – κλειστός (open – closed), like a door that is open or closed.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντίθετη της λέξης «γεμάτος»;', en: 'Which word is the opposite of «γεμάτος» (full)?' },
    options: { el: ['μισός', 'βαρύς', 'άδειος', 'ολόκληρος'], en: ['μισός', 'βαρύς', 'άδειος', 'ολόκληρος'] },
    correct: 2,
    explanation: {
      el: 'Ένα ποτήρι γεμάτο έχει νερό μέχρι πάνω· ένα ποτήρι άδειο δεν έχει καθόλου. Γεμάτος – άδειος είναι αντίθετα.',
      en: 'A full glass has water to the top; an empty glass has none. Γεμάτος – άδειος (full – empty) are opposites.',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι αντίθετα;', en: 'Which pair of words are antonyms?' },
    options: { el: ['γρήγορος – ταχύς', 'όμορφος – ωραίος', 'χαρά – ευτυχία', 'πλούσιος – φτωχός'], en: ['γρήγορος – ταχύς', 'όμορφος – ωραίος', 'χαρά – ευτυχία', 'πλούσιος – φτωχός'] },
    correct: 3,
    explanation: {
      el: 'Πλούσιος και φτωχός σημαίνουν το ανάποδο. Τα άλλα ζευγάρια είναι συνώνυμα, σημαίνουν σχεδόν το ίδιο.',
      en: 'Πλούσιος and φτωχός (rich – poor) mean the reverse. The other pairs are synonyms; they mean almost the same.',
    },
  },
  {
    q: { el: '«Το νερό της θάλασσας ήταν ζεστό, αλλά το νερό της βρύσης ήταν ___.» Ποια αντίθετη λέξη ταιριάζει;', en: '«Το νερό της θάλασσας ήταν ζεστό, αλλά το νερό της βρύσης ήταν ___.» (The sea water was warm, but the tap water was ___.) Which opposite word fits?' },
    options: { el: ['ζεστό', 'κρύο', 'καθαρό', 'γλυκό'], en: ['ζεστό', 'κρύο', 'καθαρό', 'γλυκό'] },
    correct: 1,
    explanation: {
      el: 'Το «αλλά» μας προετοιμάζει για κάτι αντίθετο: ζεστό – κρύο.',
      en: 'The word «αλλά» (but) prepares us for an opposite: ζεστό – κρύο (warm – cold).',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του ρήματος «θυμάμαι»;', en: 'What is the opposite of the verb «θυμάμαι» (I remember)?' },
    options: { el: ['ξεχνώ', 'μαθαίνω', 'σκέφτομαι', 'θυμώνω'], en: ['ξεχνώ', 'μαθαίνω', 'σκέφτομαι', 'θυμώνω'] },
    correct: 0,
    explanation: {
      el: 'Θυμάμαι – ξεχνώ είναι αντίθετα. Πρόσεξε: το «θυμώνω» μοιάζει στον ήχο, αλλά σημαίνει «νευριάζω»!',
      en: 'Θυμάμαι – ξεχνώ (remember – forget) are opposites. Careful: «θυμώνω» sounds similar, but it means “I get angry”!',
    },
  },

  // ── 11–16: homonyms ─────────────────────────────────────────────────────────
  {
    q: { el: 'Οι λέξεις «ψηλός» και «ψιλός» ακούγονται ίδια. Ποια σημαίνει «που έχει μεγάλο ύψος»;', en: 'The words «ψηλός» and «ψιλός» sound the same. Which one means “tall, with great height”?' },
    options: { el: ['ψιλός', 'ψηλός', 'ψυλός', 'ψοιλός'], en: ['ψιλός', 'ψηλός', 'ψυλός', 'ψοιλός'] },
    correct: 1,
    explanation: {
      el: 'Ψηλός με -η- = με μεγάλο ύψος (ψηλό βουνό). Ψιλός με -ι- = λεπτός, πολύ μικρός (ψιλή βροχή, ψιλά κέρματα).',
      en: 'Ψηλός with -η- = tall (a tall mountain). Ψιλός with -ι- = thin, very fine (fine rain, small change).',
    },
  },
  {
    q: { el: '«Η βροχή ήταν ___ και δεν μας έβρεξε πολύ.» Ποια λέξη ταιριάζει;', en: '«Η βροχή ήταν ___ και δεν μας έβρεξε πολύ.» (The rain was ___ and did not get us very wet.) Which word fits?' },
    options: { el: ['ψηλή', 'ψυλή', 'ψιλή', 'ψοιλή'], en: ['ψηλή', 'ψυλή', 'ψιλή', 'ψοιλή'] },
    correct: 2,
    explanation: {
      el: 'Η βροχή που πέφτει σε πολύ μικρές σταγόνες είναι «ψιλή» με -ι-. Η «ψηλή» με -η- είναι για ύψος, π.χ. ψηλή κοπέλα.',
      en: 'Rain that falls in very small drops is «ψιλή» with -ι-. «ψηλή» with -η- is for height, e.g. a tall girl.',
    },
  },
  {
    q: { el: '«Ο Γιώργος ___ την πόρτα γιατί κάνει κρύο.» Ποια λέξη ταιριάζει;', en: '«Ο Γιώργος ___ την πόρτα γιατί κάνει κρύο.» (Giorgos ___ the door because it is cold.) Which word fits?' },
    options: { el: ['κλίνει', 'κλείνει', 'κλήνει', 'κλύνει'], en: ['κλίνει', 'κλείνει', 'κλήνει', 'κλύνει'] },
    correct: 1,
    explanation: {
      el: 'Την πόρτα την «κλείνουμε» με -ει-. Το «κλίνω» με -ι- σημαίνει γέρνω ή αλλάζω τις καταλήξεις μιας λέξης (κλίνω ένα ουσιαστικό).',
      en: 'We «κλείνουμε» (close) the door, with -ει-. «κλίνω» with -ι- means to lean, or to decline a word (change its endings).',
    },
  },
  {
    q: { el: '«Ένα κίτρινο ___ έπεσε από το δέντρο.» Ποια λέξη ταιριάζει;', en: '«Ένα κίτρινο ___ έπεσε από το δέντρο.» (A yellow ___ fell from the tree.) Which word fits?' },
    options: { el: ['φίλο', 'φήλο', 'φύλλο', 'φίλλο'], en: ['φίλο', 'φήλο', 'φύλλο', 'φίλλο'] },
    correct: 2,
    explanation: {
      el: 'Το «φύλλο» με -υ- και δύο -λ- είναι του δέντρου. Ο «φίλος» με -ι- είναι το αγαπημένο μας πρόσωπο: «είδα τον φίλο μου».',
      en: '«φύλλο» with -υ- and double -λ- is the leaf. «φίλος» with -ι- is a friend: «είδα τον φίλο μου» (I saw my friend).',
    },
  },
  {
    q: { el: '«Η Μαρία ___ από το σχολείο γιατί είναι άρρωστη.» Ποια λέξη ταιριάζει;', en: '«Η Μαρία ___ από το σχολείο γιατί είναι άρρωστη.» (Maria ___ from school because she is ill.) Which word fits?' },
    options: { el: ['λύπη', 'λύπει', 'λοίπει', 'λείπει'], en: ['λύπη', 'λύπει', 'λοίπει', 'λείπει'] },
    correct: 3,
    explanation: {
      el: 'Το ρήμα «λείπει» με -ει- σημαίνει «δεν είναι εκεί». Η «λύπη» με -υ- και -η είναι η στενοχώρια: «ένιωσα λύπη».',
      en: 'The verb «λείπει» with -ει- means “is absent”. «λύπη» with -υ- and -η is sadness: «ένιωσα λύπη» (I felt sad).',
    },
  },
  {
    q: { el: 'Ποια είναι η διαφορά ανάμεσα στο «σύκο» και στο «σήκω»;', en: 'What is the difference between «σύκο» and «σήκω»?' },
    options: {
      el: ['Το «σύκο» είναι φρούτο, το «σήκω» σημαίνει «σηκώσου»', 'Το «σήκω» είναι φρούτο, το «σύκο» σημαίνει «σηκώσου»', 'Σημαίνουν ακριβώς το ίδιο', 'Καμία από τις δύο δεν είναι σωστή λέξη'],
      en: ['«σύκο» is a fruit, «σήκω» means “get up”', '«σήκω» is a fruit, «σύκο» means “get up”', 'They mean exactly the same', 'Neither is a real word'],
    },
    correct: 0,
    explanation: {
      el: 'Ακούγονται ίδια, αλλά το «σύκο» με -υ- είναι το φρούτο και το «σήκω» με -η- είναι από το ρήμα σηκώνομαι. Η ορθογραφία δείχνει τη σημασία!',
      en: 'They sound the same, but «σύκο» with -υ- is the fig and «σήκω» with -η- comes from the verb σηκώνομαι (get up). The spelling shows the meaning!',
    },
  },

  // ── 17–18: the right word for the sentence ──────────────────────────────────
  {
    q: { el: '«Ο ___ του δωματίου μου είναι μπλε.» Ποια λέξη ταιριάζει;', en: '«Ο ___ του δωματίου μου είναι μπλε.» (The ___ of my room is blue.) Which word fits?' },
    options: { el: ['τείχος', 'τύχος', 'τίχος', 'τοίχος'], en: ['τείχος', 'τύχος', 'τίχος', 'τοίχος'] },
    correct: 3,
    explanation: {
      el: 'Ο «τοίχος» με -οι- είναι ο τοίχος του σπιτιού. Το «τείχος» με -ει- είναι το μεγάλο τείχος που προστάτευε ένα κάστρο ή μια πόλη.',
      en: '«τοίχος» with -οι- is the wall of a house. «τείχος» with -ει- is the great wall that protected a castle or a city.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η λέξη με το -ι-, -η-, -υ- ή -ει- είναι γραμμένη σωστά για το νόημά της;', en: 'In which sentence is the word with -ι-, -η-, -υ- or -ει- spelled correctly for its meaning?' },
    options: {
      el: ['Ο ψιλός άντρας φοράει καπέλο.', 'Η Ελένη ένιωσε μεγάλη λείπει.', 'Ο Νίκος κλείνει το παράθυρο.', 'Το φίλο του δέντρου είναι πράσινο.'],
      en: ['Ο ψιλός άντρας φοράει καπέλο. (the tall man)', 'Η Ελένη ένιωσε μεγάλη λείπει. (great sadness)', 'Ο Νίκος κλείνει το παράθυρο. (closes the window)', 'Το φίλο του δέντρου είναι πράσινο. (the leaf of the tree)'],
    },
    correct: 2,
    explanation: {
      el: 'Το παράθυρο το «κλείνει» με -ει-, σωστά. Οι άλλες ήθελαν: ψηλός άντρας, μεγάλη λύπη, το φύλλο του δέντρου.',
      en: 'He «κλείνει» (closes) the window with -ει- — correct. The others should be: ψηλός άντρας, μεγάλη λύπη, το φύλλο του δέντρου.',
    },
  },
];
