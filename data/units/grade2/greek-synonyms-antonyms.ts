/**
 * Β' Δημοτικού · Γλώσσα · Συνώνυμα & αντίθετα
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One short stem per question.
 *
 * What the unit covers, in order:
 *   1–2   the two words: συνώνυμα (almost the same meaning) and αντίθετα (the opposite)
 *   3–8   pick the synonym: όμορφος–ωραίος, χαρούμενος–ευτυχισμένος, μεγάλος–τεράστιος…
 *   9–13  pick the antonym: γρήγορος–αργός, χαρούμενος–λυπημένος, ψηλός–κοντός, ανοίγω–κλείνω…
 *   14–15 spot the pair: which pair is antonyms, which pair is synonyms
 *   16–18 use them in a sentence: replace a repeated word, complete the contrast
 *
 * Distractors are the real traps of this age: the antonym offered where a synonym is asked
 * (and the other way round), a word from the same topic but a different meaning (ψηλός–μακρύς),
 * a diminutive mistaken for an antonym (γάτα–γατούλα).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_SYNONYMS_ANTONYMS: QuizQuestion[] = [
  // ── 1–2: the two words ──────────────────────────────────────────────────────
  {
    q: { el: 'Οι λέξεις «όμορφος» και «ωραίος» σημαίνουν σχεδόν το ίδιο. Πώς τις λέμε;', en: 'The words «όμορφος» and «ωραίος» mean almost the same thing. What do we call them?' },
    options: { el: ['αντίθετες', 'συνώνυμες', 'ίδιες', 'ξένες'], en: ['antonyms (αντίθετες)', 'synonyms (συνώνυμες)', 'identical', 'foreign'] },
    correct: 1,
    explanation: {
      el: 'Λέξεις που σημαίνουν το ίδιο ή σχεδόν το ίδιο λέγονται συνώνυμες: όμορφος – ωραίος, σπίτι – κατοικία.',
      en: 'Words that mean the same or almost the same are called synonyms (συνώνυμες): όμορφος – ωραίος, σπίτι – κατοικία.',
    },
  },
  {
    q: { el: 'Οι λέξεις «ζεστός» και «κρύος» σημαίνουν το ανάποδο. Πώς τις λέμε;', en: 'The words «ζεστός» (hot) and «κρύος» (cold) mean the opposite. What do we call them?' },
    options: { el: ['συνώνυμες', 'όμοιες', 'αντίθετες', 'δύσκολες'], en: ['synonyms (συνώνυμες)', 'similar', 'antonyms (αντίθετες)', 'difficult'] },
    correct: 2,
    explanation: {
      el: 'Λέξεις που σημαίνουν το ανάποδο λέγονται αντίθετες: ζεστός – κρύος, μέρα – νύχτα, πάνω – κάτω.',
      en: 'Words that mean the opposite are called antonyms (αντίθετες): ζεστός – κρύος, μέρα – νύχτα, πάνω – κάτω.',
    },
  },

  // ── 3–8: pick the synonym ─────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «όμορφος»;', en: 'Which word is a synonym of «όμορφος» (beautiful)?' },
    options: { el: ['άσχημος', 'μεγάλος', 'ωραίος', 'καθαρός'], en: ['άσχημος', 'μεγάλος', 'ωραίος', 'καθαρός'] },
    correct: 2,
    explanation: {
      el: 'Όμορφος = ωραίος. Ένα όμορφο λουλούδι είναι ένα ωραίο λουλούδι. (Ο άσχημος είναι το αντίθετο!)',
      en: 'όμορφος = ωραίος (lovely). A beautiful flower is a lovely flower. (άσχημος, ugly, is the opposite!)',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «χαρούμενος»;', en: 'Which word is a synonym of «χαρούμενος» (happy)?' },
    options: { el: ['ευτυχισμένος', 'λυπημένος', 'κουρασμένος', 'θυμωμένος'], en: ['ευτυχισμένος', 'λυπημένος', 'κουρασμένος', 'θυμωμένος'] },
    correct: 0,
    explanation: {
      el: 'Χαρούμενος = ευτυχισμένος, γεμάτος χαρά. Ο λυπημένος είναι το αντίθετο.',
      en: 'χαρούμενος = ευτυχισμένος, full of joy. λυπημένος (sad) is the opposite.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «μεγάλος»;', en: 'Which word is a synonym of «μεγάλος» (big)?' },
    options: { el: ['μικρός', 'λίγος', 'στενός', 'τεράστιος'], en: ['μικρός', 'λίγος', 'στενός', 'τεράστιος'] },
    correct: 3,
    explanation: {
      el: 'Τεράστιος σημαίνει πολύ μεγάλος. Ένας ελέφαντας είναι μεγάλος — τεράστιος!',
      en: 'τεράστιος means very big, huge. An elephant is big — huge!',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «λυπημένος»;', en: 'Which word is a synonym of «λυπημένος» (sad)?' },
    options: { el: ['χαρούμενος', 'ήσυχος', 'νυσταγμένος', 'στενοχωρημένος'], en: ['χαρούμενος', 'ήσυχος', 'νυσταγμένος', 'στενοχωρημένος'] },
    correct: 3,
    explanation: {
      el: 'Λυπημένος = στενοχωρημένος. Και οι δύο λέξεις λένε ότι κάποιος δεν είναι καλά στην καρδιά του.',
      en: 'λυπημένος = στενοχωρημένος (upset). Both words say that someone feels bad inside.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «κοιτάζω»;', en: 'Which word is a synonym of «κοιτάζω» (I look)?' },
    options: { el: ['ακούω', 'τρέχω', 'βλέπω', 'κρύβω'], en: ['ακούω', 'τρέχω', 'βλέπω', 'κρύβω'] },
    correct: 2,
    explanation: {
      el: 'Κοιτάζω = βλέπω, και τα δύο τα κάνουμε με τα μάτια. Ακούω με τα αυτιά!',
      en: 'κοιτάζω = βλέπω (I see), we do both with our eyes. ακούω (I hear) is done with the ears!',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμη της λέξης «φοβισμένος»;', en: 'Which word is a synonym of «φοβισμένος» (scared)?' },
    options: { el: ['τρομαγμένος', 'γενναίος', 'χαρούμενος', 'δυνατός'], en: ['τρομαγμένος', 'γενναίος', 'χαρούμενος', 'δυνατός'] },
    correct: 0,
    explanation: {
      el: 'Φοβισμένος = τρομαγμένος. Ο γενναίος δεν φοβάται — είναι το αντίθετο!',
      en: 'φοβισμένος = τρομαγμένος (frightened). γενναίος (brave) is not scared — it is the opposite!',
    },
  },

  // ── 9–13: pick the antonym ────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι αντίθετη της λέξης «γρήγορος»;', en: 'Which word is the antonym of «γρήγορος» (fast)?' },
    options: { el: ['ταχύς', 'δυνατός', 'μικρός', 'αργός'], en: ['ταχύς', 'δυνατός', 'μικρός', 'αργός'] },
    correct: 3,
    explanation: {
      el: 'Γρήγορος – αργός. Ο λαγός είναι γρήγορος, η χελώνα είναι αργή. (Ταχύς σημαίνει γρήγορος — είναι συνώνυμο!)',
      en: 'γρήγορος – αργός (slow). The hare is fast, the tortoise is slow. (ταχύς means fast — it is a synonym!)',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντίθετη της λέξης «χαρούμενος»;', en: 'Which word is the antonym of «χαρούμενος» (happy)?' },
    options: { el: ['ευτυχισμένος', 'λυπημένος', 'γελαστός', 'ήσυχος'], en: ['ευτυχισμένος', 'λυπημένος', 'γελαστός', 'ήσυχος'] },
    correct: 1,
    explanation: {
      el: 'Χαρούμενος – λυπημένος. Όταν γελάς είσαι χαρούμενος, όταν κλαις είσαι λυπημένος.',
      en: 'χαρούμενος – λυπημένος (sad). When you laugh you are happy, when you cry you are sad.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντίθετη της λέξης «ψηλός»;', en: 'Which word is the antonym of «ψηλός» (tall)?' },
    options: { el: ['μακρύς', 'μεγάλος', 'κοντός', 'χοντρός'], en: ['μακρύς', 'μεγάλος', 'κοντός', 'χοντρός'] },
    correct: 2,
    explanation: {
      el: 'Ψηλός – κοντός. Η καμηλοπάρδαλη είναι ψηλή, ο σκαντζόχοιρος είναι κοντός.',
      en: 'ψηλός – κοντός (short). The giraffe is tall, the hedgehog is short.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντίθετη της λέξης «ανοίγω»;', en: 'Which word is the antonym of «ανοίγω» (I open)?' },
    options: { el: ['σπρώχνω', 'κλείνω', 'μπαίνω', 'ανοιχτός'], en: ['σπρώχνω', 'κλείνω', 'μπαίνω', 'ανοιχτός'] },
    correct: 1,
    explanation: {
      el: 'Ανοίγω – κλείνω. Ανοίγω την πόρτα για να μπω και την κλείνω πίσω μου.',
      en: 'ανοίγω – κλείνω (I close). I open the door to go in and close it behind me.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι αντίθετη της λέξης «γεμάτος»;', en: 'Which word is the antonym of «γεμάτος» (full)?' },
    options: { el: ['άδειος', 'βαρύς', 'μεγάλος', 'πλήρης'], en: ['άδειος', 'βαρύς', 'μεγάλος', 'πλήρης'] },
    correct: 0,
    explanation: {
      el: 'Γεμάτος – άδειος. Το ποτήρι είναι γεμάτο νερό· όταν το πιεις, είναι άδειο.',
      en: 'γεμάτος – άδειος (empty). The glass is full of water; when you drink it, it is empty.',
    },
  },

  // ── 14–15: spot the pair ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι αντίθετες;', en: 'Which pair of words are antonyms?' },
    options: { el: ['όμορφος – ωραίος', 'σπίτι – σπιτάκι', 'μέρα – νύχτα', 'γάτα – γατούλα'], en: ['όμορφος – ωραίος', 'σπίτι – σπιτάκι', 'μέρα – νύχτα', 'γάτα – γατούλα'] },
    correct: 2,
    explanation: {
      el: 'Μέρα – νύχτα είναι αντίθετες. Όμορφος – ωραίος είναι συνώνυμες, και το σπιτάκι είναι απλώς ένα μικρό σπίτι.',
      en: 'μέρα – νύχτα (day – night) are antonyms. όμορφος – ωραίος are synonyms, and σπιτάκι is just a small σπίτι.',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι συνώνυμες;', en: 'Which pair of words are synonyms?' },
    options: { el: ['πάνω – κάτω', 'λέω – μιλάω', 'ζεστός – κρύος', 'μπαίνω – βγαίνω'], en: ['πάνω – κάτω', 'λέω – μιλάω', 'ζεστός – κρύος', 'μπαίνω – βγαίνω'] },
    correct: 1,
    explanation: {
      el: 'Λέω – μιλάω σημαίνουν σχεδόν το ίδιο. Τα άλλα ζευγάρια είναι αντίθετα: πάνω – κάτω, ζεστός – κρύος, μπαίνω – βγαίνω.',
      en: 'λέω – μιλάω (I say – I speak) mean almost the same. The other pairs are opposites: πάνω – κάτω, ζεστός – κρύος, μπαίνω – βγαίνω.',
    },
  },

  // ── 16–18: in a sentence ──────────────────────────────────────────────────
  {
    q: { el: '«Το σπίτι είναι όμορφο και ο κήπος είναι πολύ όμορφος.» Με ποια λέξη αλλάζουμε το δεύτερο «όμορφος» για να μην το ξαναπούμε;', en: '«Το σπίτι είναι όμορφο και ο κήπος είναι πολύ όμορφος.» (The house is beautiful and the garden is very beautiful.) Which word can replace the second «όμορφος» so we do not repeat it?' },
    options: { el: ['άσχημος', 'μεγάλος', 'πράσινος', 'ωραίος'], en: ['άσχημος', 'μεγάλος', 'πράσινος', 'ωραίος'] },
    correct: 3,
    explanation: {
      el: '«…και ο κήπος είναι πολύ ωραίος.» Βάζουμε ένα συνώνυμο, ώστε η πρόταση να μη λέει την ίδια λέξη δύο φορές.',
      en: '«…και ο κήπος είναι πολύ ωραίος.» We use a synonym so the sentence does not say the same word twice.',
    },
  },
  {
    q: { el: 'Ο λαγός τρέχει γρήγορα, η χελώνα περπατάει ___. Ποια αντίθετη λέξη ταιριάζει;', en: 'Ο λαγός τρέχει γρήγορα, η χελώνα περπατάει ___. (The hare runs fast, the tortoise walks ___.) Which antonym fits?' },
    options: { el: ['γρήγορα', 'αργά', 'δυνατά', 'ψηλά'], en: ['γρήγορα', 'αργά', 'δυνατά', 'ψηλά'] },
    correct: 1,
    explanation: {
      el: 'Γρήγορα – αργά. Η χελώνα περπατάει αργά. Οι αντίθετες λέξεις μάς βοηθούν να δείξουμε τη διαφορά.',
      en: 'γρήγορα – αργά (slowly). The tortoise walks slowly. Antonyms help us show the difference.',
    },
  },
  {
    q: { el: '«Ο Νίκος είναι χαρούμενος γιατί κέρδισε. Η Άννα είναι χαρούμενη κι αυτή.» Ποια λέξη μπορεί να πάρει τη θέση του δεύτερου «χαρούμενη»;', en: '«Ο Νίκος είναι χαρούμενος γιατί κέρδισε. Η Άννα είναι χαρούμενη κι αυτή.» (Nikos is happy because he won. Anna is happy too.) Which word can take the place of the second «χαρούμενη»?' },
    options: { el: ['λυπημένη', 'ευτυχισμένη', 'κουρασμένη', 'θυμωμένη'], en: ['λυπημένη', 'ευτυχισμένη', 'κουρασμένη', 'θυμωμένη'] },
    correct: 1,
    explanation: {
      el: '«Η Άννα είναι ευτυχισμένη κι αυτή.» Το «ευτυχισμένη» είναι συνώνυμο του «χαρούμενη» — η ίδια χαρά, με άλλη λέξη.',
      en: '«Η Άννα είναι ευτυχισμένη κι αυτή.» «ευτυχισμένη» is a synonym of «χαρούμενη» — the same joy, in a different word.',
    },
  },
];
