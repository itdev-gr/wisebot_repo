/**
 * Δ' Δημοτικού · Γλώσσα · Κλίση Ουσιαστικών
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–8   the four cases in singular and plural: forming them and recognising them in a sentence
 *   9–12  the shifting accent (ο άνθρωπος → του ανθρώπου, ο δάσκαλος → των δασκάλων)
 *   13–16 irregular plurals (γράμμα → γράμματα, παππούς → παππούδες, κρέας → κρέατα)
 *   17–18 abstract vs concrete nouns
 *
 * Distractors are the real mistakes: wrong article, wrong ending, accent left in place,
 * and the "regular" plural a child invents. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_NOUNS_DECLENSION: QuizQuestion[] = [
  // ── 1–8: the cases, singular and plural ───────────────────────────────────
  {
    q: { el: 'Ποια είναι η γενική ενικού του «ο μαθητής»;', en: 'What is the genitive singular of «ο μαθητής» (the pupil)?' },
    options: { el: ['του μαθητή', 'τον μαθητή', 'του μαθητής', 'ο μαθητή'], en: ['του μαθητή', 'τον μαθητή', 'του μαθητής', 'ο μαθητή'] },
    correct: 0,
    explanation: {
      el: 'Η γενική απαντά στο «τίνος;»: το βιβλίο του μαθητή. Το -ς της ονομαστικής φεύγει.',
      en: 'The genitive answers “whose?”: το βιβλίο του μαθητή. The final -ς of the nominative drops off.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Βλέπω ___ από το παράθυρο.» (η θάλασσα)', en: 'Complete: «Βλέπω ___ από το παράθυρο.» (η θάλασσα, the sea)' },
    options: { el: ['της θάλασσας', 'η θάλασσα', 'τη θάλασσα', 'τις θάλασσες'], en: ['της θάλασσας', 'η θάλασσα', 'τη θάλασσα', 'τις θάλασσες'] },
    correct: 2,
    explanation: {
      el: 'Μετά το «βλέπω» βάζουμε αιτιατική: βλέπω τη θάλασσα. Η αιτιατική απαντά στο «τι; ποιον;».',
      en: 'After «βλέπω» (I see) we use the accusative: βλέπω τη θάλασσα. The accusative answers “what? whom?”.',
    },
  },
  {
    q: { el: 'Πώς φωνάζουμε τον Γιώργο; «___, έλα να παίξουμε!»', en: 'How do we call Giorgos? «___, έλα να παίξουμε!» (come and play!)' },
    options: { el: ['Γιώργος', 'Γιώργο', 'Γιώργου', 'Γιώργε'], en: ['Γιώργος', 'Γιώργο', 'Γιώργου', 'Γιώργε'] },
    correct: 1,
    explanation: {
      el: 'Όταν φωνάζουμε κάποιον, χρησιμοποιούμε την κλητική: Γιώργο! Τα ονόματα σε -ος χάνουν το -ς.',
      en: 'When we call someone we use the vocative: Γιώργο! Names ending in -ος lose the -ς.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «το παιδί»;', en: 'What is the plural of «το παιδί» (the child)?' },
    options: { el: ['τα παίδια', 'τα παιδία', 'τα παιδιά', 'των παιδιών'], en: ['τα παίδια', 'τα παιδία', 'τα παιδιά', 'των παιδιών'] },
    correct: 2,
    explanation: {
      el: 'Το παιδί → τα παιδιά. Ο τόνος μένει στη λήγουσα, στο -ά. Το «των παιδιών» είναι γενική, όχι ονομαστική.',
      en: 'Το παιδί → τα παιδιά. The accent stays on the last syllable, -ά. «Των παιδιών» is genitive, not nominative.',
    },
  },
  {
    q: { el: 'Ποια είναι η γενική πληθυντικού του «η ώρα»;', en: 'What is the genitive plural of «η ώρα» (the hour)?' },
    options: { el: ['των ωρών', 'των ώρων', 'τις ώρες', 'της ώρας'], en: ['των ωρών', 'των ώρων', 'τις ώρες', 'της ώρας'] },
    correct: 0,
    explanation: {
      el: 'Η γενική πληθυντικού των θηλυκών σε -α τονίζεται στο -ών: των ωρών, των ημερών.',
      en: 'The genitive plural of feminine nouns in -α is accented on -ών: των ωρών, των ημερών.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο Νίκος ποτίζει ___ κάθε πρωί.» (ο κήπος, πληθυντικός)', en: 'Complete: «Ο Νίκος ποτίζει ___ κάθε πρωί.» (ο κήπος, the garden, plural)' },
    options: { el: ['τον κήπο', 'των κήπων', 'τους κήπους', 'οι κήποι'], en: ['τον κήπο', 'των κήπων', 'τους κήπους', 'οι κήποι'] },
    correct: 2,
    explanation: {
      el: 'Ποτίζει τι; Τους κήπους — αιτιατική πληθυντικού. Τα αρσενικά σε -ος κάνουν -ους.',
      en: 'He waters what? Τους κήπους — accusative plural. Masculine nouns in -ος end in -ους.',
    },
  },
  {
    q: { el: '«Η Ελένη κρατάει την τσάντα της Μαρίας.» Σε ποια πτώση είναι το «της Μαρίας»;', en: '«Η Ελένη κρατάει την τσάντα της Μαρίας.» (Eleni holds Maria\'s bag.) Which case is «της Μαρίας»?' },
    options: { el: ['Ονομαστική', 'Γενική', 'Αιτιατική', 'Κλητική'], en: ['Nominative', 'Genitive', 'Accusative', 'Vocative'] },
    correct: 1,
    explanation: {
      el: 'Τίνος είναι η τσάντα; Της Μαρίας. Το «τίνος;» μας δείχνει γενική.',
      en: 'Whose bag is it? Της Μαρίας. The question “whose?” points to the genitive.',
    },
  },
  {
    q: { el: '«Μαρία, κλείσε την πόρτα!» Σε ποια πτώση είναι το «Μαρία»;', en: '«Μαρία, κλείσε την πόρτα!» (Maria, close the door!) Which case is «Μαρία»?' },
    options: { el: ['Ονομαστική', 'Γενική', 'Αιτιατική', 'Κλητική'], en: ['Nominative', 'Genitive', 'Accusative', 'Vocative'] },
    correct: 3,
    explanation: {
      el: 'Όταν μιλάμε σε κάποιον και τον φωνάζουμε με το όνομά του, είναι κλητική. Συχνά έχει κόμμα δίπλα.',
      en: 'When we speak to someone and call them by name, it is the vocative. It often has a comma next to it.',
    },
  },

  // ── 9–12: the shifting accent ─────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η γενική ενικού του «ο άνθρωπος»;', en: 'What is the genitive singular of «ο άνθρωπος» (the person)?' },
    options: { el: ['του άνθρωπου', 'του ανθρώπου', 'του ανθρώπο', 'του άνθρωπος'], en: ['του άνθρωπου', 'του ανθρώπου', 'του ανθρώπο', 'του άνθρωπος'] },
    correct: 1,
    explanation: {
      el: 'Ο άνθρωπος → του ανθρώπου. Στη γενική ο τόνος κατεβαίνει μία συλλαβή, από το ά στο ώ.',
      en: 'Ο άνθρωπος → του ανθρώπου. In the genitive the accent moves one syllable down, from ά to ώ.',
    },
  },
  {
    q: { el: 'Ποια είναι η γενική πληθυντικού του «ο δάσκαλος»;', en: 'What is the genitive plural of «ο δάσκαλος» (the teacher)?' },
    options: { el: ['των δασκάλων', 'των δάσκαλων', 'των δασκαλών', 'τους δασκάλους'], en: ['των δασκάλων', 'των δάσκαλων', 'των δασκαλών', 'τους δασκάλους'] },
    correct: 0,
    explanation: {
      el: 'Οι δάσκαλοι → των δασκάλων. Ο τόνος κατεβαίνει στην παραλήγουσα, όπως στο «των ανθρώπων».',
      en: 'Οι δάσκαλοι → των δασκάλων. The accent moves to the second-to-last syllable, like «των ανθρώπων».',
    },
  },
  {
    q: { el: 'Ποια είναι η γενική πληθυντικού του «η θάλασσα»;', en: 'What is the genitive plural of «η θάλασσα» (the sea)?' },
    options: { el: ['των θάλασσων', 'των θαλάσσων', 'των θαλασσών', 'των θάλασσας'], en: ['των θάλασσων', 'των θαλάσσων', 'των θαλασσών', 'των θάλασσας'] },
    correct: 2,
    explanation: {
      el: 'Η θάλασσα → των θαλασσών. Ο τόνος πηδάει από την αρχή στο τέλος, στο -ών.',
      en: 'Η θάλασσα → των θαλασσών. The accent jumps from the start of the word to the end, onto -ών.',
    },
  },
  {
    q: { el: 'Ποια είναι η γενική ενικού του «το πρόβλημα»;', en: 'What is the genitive singular of «το πρόβλημα» (the problem)?' },
    options: { el: ['του πρόβληματος', 'του προβλήματος', 'του προβλήματου', 'του πρόβλημα'], en: ['του πρόβληματος', 'του προβλήματος', 'του προβλήματου', 'του πρόβλημα'] },
    correct: 1,
    explanation: {
      el: 'Το πρόβλημα → του προβλήματος. Τα ουδέτερα σε -μα παίρνουν -ατος και ο τόνος κατεβαίνει μία συλλαβή.',
      en: 'Το πρόβλημα → του προβλήματος. Neuter nouns in -μα take -ατος and the accent moves one syllable down.',
    },
  },

  // ── 13–16: irregular plurals ──────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «το γράμμα»;', en: 'What is the plural of «το γράμμα» (the letter)?' },
    options: { el: ['τα γράμματα', 'τα γράμμες', 'τα γραμμάτα', 'τα γράμμα'], en: ['τα γράμματα', 'τα γράμμες', 'τα γραμμάτα', 'τα γράμμα'] },
    correct: 0,
    explanation: {
      el: 'Το γράμμα → τα γράμματα. Τα ουδέτερα σε -μα μεγαλώνουν κατά μία συλλαβή στον πληθυντικό.',
      en: 'Το γράμμα → τα γράμματα. Neuter nouns in -μα grow by one syllable in the plural.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «ο παππούς»;', en: 'What is the plural of «ο παππούς» (the grandfather)?' },
    options: { el: ['οι παππού', 'οι παππούδοι', 'οι παππούες', 'οι παππούδες'], en: ['οι παππού', 'οι παππούδοι', 'οι παππούες', 'οι παππούδες'] },
    correct: 3,
    explanation: {
      el: 'Ο παππούς → οι παππούδες. Τα αρσενικά σε -ούς παίρνουν -ούδες στον πληθυντικό.',
      en: 'Ο παππούς → οι παππούδες. Masculine nouns in -ούς take -ούδες in the plural.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «ο μήνας»;', en: 'What is the plural of «ο μήνας» (the month)?' },
    options: { el: ['οι μήνοι', 'οι μήνες', 'οι μήνας', 'οι μηνάδες'], en: ['οι μήνοι', 'οι μήνες', 'οι μήνας', 'οι μηνάδες'] },
    correct: 1,
    explanation: {
      el: 'Ο μήνας → οι μήνες. Τα αρσενικά σε -ας κάνουν -ες, όχι -οι: ο πατέρας → οι πατέρες.',
      en: 'Ο μήνας → οι μήνες. Masculine nouns in -ας end in -ες, not -οι: ο πατέρας → οι πατέρες.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του «το κρέας»;', en: 'What is the plural of «το κρέας» (the meat)?' },
    options: { el: ['τα κρέας', 'τα κρέα', 'τα κρέατα', 'τα κρεάτα'], en: ['τα κρέας', 'τα κρέα', 'τα κρέατα', 'τα κρεάτα'] },
    correct: 2,
    explanation: {
      el: 'Το κρέας → τα κρέατα. Λίγα ουδέτερα σε -ας παίρνουν -ατα: το τέρας → τα τέρατα.',
      en: 'Το κρέας → τα κρέατα. A few neuter nouns in -ας take -ατα: το τέρας → τα τέρατα.',
    },
  },

  // ── 17–18: abstract vs concrete ───────────────────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω είναι αφηρημένο ουσιαστικό;', en: 'Which of these is an abstract noun?' },
    options: { el: ['η καρέκλα', 'η χαρά', 'ο σκύλος', 'το μήλο'], en: ['η καρέκλα (the chair)', 'η χαρά (joy)', 'ο σκύλος (the dog)', 'το μήλο (the apple)'] },
    correct: 1,
    explanation: {
      el: 'Τη χαρά δεν μπορούμε να τη δούμε ή να την πιάσουμε, μόνο να τη νιώσουμε. Γι\' αυτό είναι αφηρημένο ουσιαστικό.',
      en: 'We cannot see or touch joy, only feel it. That is why «η χαρά» is an abstract noun.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι συγκεκριμένο ουσιαστικό;', en: 'Which of these is a concrete noun?' },
    options: { el: ['η αγάπη', 'η ελευθερία', 'το ποδήλατο', 'η φιλία'], en: ['η αγάπη (love)', 'η ελευθερία (freedom)', 'το ποδήλατο (the bicycle)', 'η φιλία (friendship)'] },
    correct: 2,
    explanation: {
      el: 'Το ποδήλατο το βλέπουμε και το αγγίζουμε, άρα είναι συγκεκριμένο. Η αγάπη, η ελευθερία και η φιλία είναι αφηρημένα.',
      en: 'We can see and touch a bicycle, so it is concrete. Love, freedom and friendship are abstract.',
    },
  },
];
