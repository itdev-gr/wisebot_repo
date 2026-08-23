/**
 * Δ' Δημοτικού · Γλώσσα (Νεοελληνική) · Ορθογραφία
 * ================================================
 * 18 original questions for a child of 9–10 (curriculum topics only — nothing copied).
 *   1–4   word families & roots: the root keeps its spelling (γράφω→γράμμα, φως→φωτιά)
 *   5–8   nouns in -ία (σοφός→φιλία) vs -εία (βασιλεύω→βασιλεία, πορεύομαι→πορεία)
 *   9–11  verbs in -εύω and their nouns in -ευση (εκπαιδεύω→εκπαίδευση)
 *   12–14 adverbs in -α (ψηλά) and -ως (ακριβώς, συνήθως)
 *   15–18 tricky homophones: φύλλο/φίλο/φύλο, κλίμα/κλήμα, λείπει/λύπη, κλείνω/κλίνω
 * Distractors are the spellings children really write. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_SPELLING_ADVANCED: QuizQuestion[] = [
  // ── 1–4: word families & roots ─────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια της λέξης «γράφω»;', en: 'Which word belongs to the family of the word «γράφω» (I write)?' },
    options: { el: ['γράμμα', 'γρήγορα', 'γραβάτα', 'γρασίδι'], en: ['γράμμα', 'γρήγορα', 'γραβάτα', 'γρασίδι'] },
    correct: 0,
    explanation: {
      el: 'Το «γράμμα» έχει τη ρίζα γραφ-/γραμ- του «γράφω». Οι άλλες λέξεις απλώς αρχίζουν από γρ-.',
      en: '«γράμμα» (letter) shares the root of «γράφω». The other words just start with γρ-.',
    },
  },
  {
    q: { el: 'Η Μαρία αγαπάει το ___ με τη μπάλα. (από το «παίζω»)', en: 'Maria loves the ___ with the ball. (from «παίζω», I play)' },
    options: { el: ['πεχνίδι', 'παιχνίδι', 'παιχνήδι', 'πεχνήδι'], en: ['πεχνίδι', 'παιχνίδι', 'παιχνήδι', 'πεχνήδι'] },
    correct: 1,
    explanation: {
      el: 'Το «παιχνίδι» κρατάει το «αι» του «παίζω». Η ρίζα δεν αλλάζει ορθογραφία μέσα στην οικογένεια.',
      en: '«παιχνίδι» (game) keeps the «αι» of «παίζω». A root keeps its spelling across its word family.',
    },
  },
  {
    q: { el: 'Ποια λέξη της οικογένειας του «φως» είναι σωστά γραμμένη;', en: 'Which word from the family of «φως» (light) is spelled correctly?' },
    options: { el: ['φοτιά', 'φωτειά', 'φωτιά', 'φοτειά'], en: ['φοτιά', 'φωτειά', 'φωτιά', 'φοτειά'] },
    correct: 2,
    explanation: {
      el: 'Φως, φωτιά, φωτεινός, φωτογραφία: όλα με «ω». Η ρίζα φωτ- γράφεται πάντα το ίδιο.',
      en: 'Φως, φωτιά, φωτεινός, φωτογραφία: all with «ω». The root φωτ- is always spelled the same.',
    },
  },
  {
    q: { el: 'Μείναμε σε ένα ___ δίπλα στη θάλασσα. (από το «ξένος»)', en: 'We stayed in a ___ by the sea. (from «ξένος», stranger/guest)' },
    options: { el: ['ξενοδοχείο', 'ξαινοδοχείο', 'ξενοδοχίο', 'ξενωδοχείο'], en: ['ξενοδοχείο', 'ξαινοδοχείο', 'ξενοδοχίο', 'ξενωδοχείο'] },
    correct: 0,
    explanation: {
      el: 'Ξένος + δέχομαι = ξενοδοχείο. Τα ουσιαστικά σε -είο (σχολείο, ιατρείο) γράφονται με «ει».',
      en: 'Ξένος + δέχομαι (I welcome) = ξενοδοχείο (hotel). Nouns ending in -είο are written with «ει».',
    },
  },

  // ── 5–8: nouns in -ία and -εία ─────────────────────────────────────────────
  {
    q: { el: 'Η ___ του Νίκου και του Γιώργου κρατάει χρόνια. (από το «φίλος»)', en: 'Nikos and Giorgos’ ___ has lasted for years. (from «φίλος», friend)' },
    options: { el: ['φιλία', 'φιλεία', 'φυλία', 'φιλήα'], en: ['φιλία', 'φιλεία', 'φυλία', 'φιλήα'] },
    correct: 0,
    explanation: {
      el: 'Φίλος → φιλία. Τα ουσιαστικά που βγαίνουν από επίθετα ή ουσιαστικά γράφονται με -ία.',
      en: 'Φίλος → φιλία (friendship). Nouns made from adjectives or nouns are written with -ία.',
    },
  },
  {
    q: { el: 'Η ___ του καλού βασιλιά κράτησε πολλά χρόνια. (από το «βασιλεύω»)', en: 'The ___ of the good king lasted many years. (from «βασιλεύω», I reign)' },
    options: { el: ['βασιλία', 'βασιλεία', 'βασιλήα', 'βασηλεία'], en: ['βασιλία', 'βασιλεία', 'βασιλήα', 'βασηλεία'] },
    correct: 1,
    explanation: {
      el: 'Βασιλεύω → βασιλεία. Όταν η λέξη βγαίνει από ρήμα σε -εύω, γράφεται με -εία.',
      en: 'Βασιλεύω → βασιλεία (kingdom). When a noun comes from a verb in -εύω, it is written with -εία.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι σωστά γραμμένη;', en: 'Which word is spelled correctly?' },
    options: { el: ['ιστορεία', 'ζωγραφεία', 'πορεία', 'φιλεία'], en: ['ιστορεία', 'ζωγραφεία', 'πορεία', 'φιλεία'] },
    correct: 2,
    explanation: {
      el: 'Πορεύομαι → πορεία με «ει». Ιστορία, ζωγραφική/ζωγραφιά και φιλία δεν βγαίνουν από ρήμα σε -εύω, γι\' αυτό έχουν «ι».',
      en: 'Πορεύομαι → πορεία (march) with «ει». Ιστορία and φιλία do not come from an -εύω verb, so they take «ι».',
    },
  },
  {
    q: { el: 'Η Ελένη έχει μεγάλη ___ να μάθει κιθάρα. (από το «επιθυμώ»)', en: 'Eleni has a great ___ to learn the guitar. (from «επιθυμώ», I wish)' },
    options: { el: ['επιθυμεία', 'επιθυμία', 'επιθημία', 'επηθυμία'], en: ['επιθυμεία', 'επιθυμία', 'επιθημία', 'επηθυμία'] },
    correct: 1,
    explanation: {
      el: 'Επιθυμώ → επιθυμία. Το ρήμα τελειώνει σε -ώ, όχι σε -εύω, άρα το ουσιαστικό γράφεται με -ία και κρατάει το «υ» της ρίζας θυμ-.',
      en: 'Επιθυμώ → επιθυμία (wish). The verb ends in -ώ, not -εύω, so the noun takes -ία and keeps the «υ» of the root.',
    },
  },

  // ── 9–11: verbs in -εύω, nouns in -ευση ────────────────────────────────────
  {
    q: { el: 'Ο Νίκος ___ με το ποδήλατό του κάθε καλοκαίρι.', en: 'Nikos ___ on his bicycle every summer. (travels)' },
    options: { el: ['ταξιδέβει', 'ταξιδεύει', 'ταξιδεύι', 'ταξηδεύει'], en: ['ταξιδέβει', 'ταξιδεύει', 'ταξιδεύι', 'ταξηδεύει'] },
    correct: 1,
    explanation: {
      el: 'Ταξίδι → ταξιδεύω → ταξιδεύει. Τα ρήματα σε -εύω γράφονται πάντα με «ευ», ποτέ με «εβ».',
      en: 'Ταξίδι (trip) → ταξιδεύω → ταξιδεύει. Verbs in -εύω are always written with «ευ», never «εβ».',
    },
  },
  {
    q: { el: 'Η μαμά ___ φακές για το μεσημέρι.', en: 'Mum ___ lentils for lunch. (is cooking)' },
    options: { el: ['μαγειρέβει', 'μαγιρεύει', 'μαγειρεύει', 'μαγειρεύη'], en: ['μαγειρέβει', 'μαγιρεύει', 'μαγειρεύει', 'μαγειρεύη'] },
    correct: 2,
    explanation: {
      el: 'Μάγειρας → μαγειρεύω → μαγειρεύει. Κρατάμε το «ει» της ρίζας και το «ευ» της κατάληξης· το γ\' πρόσωπο τελειώνει σε -ει.',
      en: 'Μάγειρας (cook) → μαγειρεύω → μαγειρεύει. Keep the «ει» of the root and the «ευ» ending; third person ends in -ει.',
    },
  },
  {
    q: { el: 'Η ___ ενός σκύλου θέλει υπομονή. (από το «εκπαιδεύω»)', en: 'The ___ of a dog takes patience. (from «εκπαιδεύω», I train)' },
    options: { el: ['εκπαίδευση', 'εκπέδευση', 'εκπαίδεψη', 'εκπαίδευσι'], en: ['εκπαίδευση', 'εκπέδευση', 'εκπαίδεψη', 'εκπαίδευσι'] },
    correct: 0,
    explanation: {
      el: 'Εκπαιδεύω → εκπαίδευση. Από τα ρήματα σε -εύω βγαίνουν ουσιαστικά σε -ευση, με «ευ» και «η» στο τέλος.',
      en: 'Εκπαιδεύω → εκπαίδευση (training). Verbs in -εύω give nouns in -ευση, with «ευ» and a final «η».',
    },
  },

  // ── 12–14: adverbs in -α and -ως ───────────────────────────────────────────
  {
    q: { el: 'Το πουλί πετάει ___ στον ουρανό.', en: 'The bird flies ___ in the sky. (high)' },
    options: { el: ['ψηλά', 'ψιλά', 'ψηλός', 'ψηλή'], en: ['ψηλά', 'ψιλά', 'ψηλός', 'ψηλή'] },
    correct: 0,
    explanation: {
      el: 'Ψηλός → ψηλά. Το επίρρημα σε -α κρατάει το «η» του επιθέτου. Τα «ψιλά» με «ι» είναι τα κέρματα!',
      en: 'Ψηλός (tall) → ψηλά (high). The -α adverb keeps the «η» of the adjective. «Ψιλά» with «ι» means small change!',
    },
  },
  {
    q: { el: 'Το τρένο έφτασε ___ στις 9 το πρωί.', en: 'The train arrived ___ at 9 in the morning. (exactly)' },
    options: { el: ['ακριβός', 'ακριβώς', 'ακρυβώς', 'ακριβά'], en: ['ακριβός', 'ακριβώς', 'ακρυβώς', 'ακριβά'] },
    correct: 1,
    explanation: {
      el: 'Τα επιρρήματα σε -ως γράφονται με «ω»: ακριβώς. Το «ακριβός» είναι επίθετο και το «ακριβά» σημαίνει «με πολλά χρήματα».',
      en: 'Adverbs in -ως are written with «ω»: ακριβώς (exactly). «Ακριβός» is the adjective and «ακριβά» means “expensively”.',
    },
  },
  {
    q: { el: 'Η Ελένη ___ διαβάζει ένα βιβλίο πριν κοιμηθεί.', en: 'Eleni ___ reads a book before bed. (usually)' },
    options: { el: ['συνήθος', 'σινήθως', 'συνήθως', 'συνείθως'], en: ['συνήθος', 'σινήθως', 'συνήθως', 'συνείθως'] },
    correct: 2,
    explanation: {
      el: 'Συνήθεια → συνήθως. Κρατάμε το «υ» και το «η» της ρίζας και βάζουμε «ω» στην κατάληξη -ως.',
      en: 'Συνήθεια (habit) → συνήθως (usually). Keep the «υ» and «η» of the root and write «ω» in the -ως ending.',
    },
  },

  // ── 15–18: tricky homophones ───────────────────────────────────────────────
  {
    q: { el: 'Το δέντρο έριξε ένα κίτρινο ___ στο χώμα.', en: 'The tree dropped a yellow ___ on the ground. (leaf)' },
    options: { el: ['φύλλο', 'φίλο', 'φύλο', 'φήλο'], en: ['φύλλο', 'φίλο', 'φύλο', 'φήλο'] },
    correct: 0,
    explanation: {
      el: 'Φύλλο (του δέντρου) με «υ» και δύο «λ». Φίλος είναι ο φίλος μας, και φύλο είναι αγόρι ή κορίτσι.',
      en: 'Φύλλο (leaf) has «υ» and double «λ». Φίλος is a friend, and φύλο means gender.',
    },
  },
  {
    q: { el: 'Το ___ της Ελλάδας είναι ζεστό το καλοκαίρι.', en: 'The ___ of Greece is hot in summer. (climate)' },
    options: { el: ['κλήμα', 'κλίμα', 'κλύμα', 'κλείμα'], en: ['κλήμα', 'κλίμα', 'κλύμα', 'κλείμα'] },
    correct: 1,
    explanation: {
      el: 'Κλίμα (ο καιρός ενός τόπου) με «ι». Το κλήμα με «η» είναι το φυτό που βγάζει σταφύλια.',
      en: 'Κλίμα (climate) takes «ι». Κλήμα with «η» is the vine that grows grapes.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ___ από το σχολείο σήμερα γιατί είναι άρρωστος.', en: 'Giorgos ___ from school today because he is ill. (is absent)' },
    options: { el: ['λύπη', 'λίπη', 'λύπει', 'λείπει'], en: ['λύπη', 'λίπη', 'λύπει', 'λείπει'] },
    correct: 3,
    explanation: {
      el: 'Λείπω → λείπει, με «ει». Η λύπη με «υ» είναι η στενοχώρια, και τα λίπη με «ι» είναι στο φαγητό.',
      en: 'Λείπω → λείπει (is absent), with «ει». Λύπη with «υ» means sadness, and λίπη with «ι» are fats in food.',
    },
  },
  {
    q: { el: 'Η Μαρία ___ την πόρτα γιατί κάνει κρύο.', en: 'Maria ___ the door because it is cold. (closes)' },
    options: { el: ['κλίνει', 'κλήνει', 'κλείνει', 'κλύνει'], en: ['κλίνει', 'κλήνει', 'κλείνει', 'κλύνει'] },
    correct: 2,
    explanation: {
      el: 'Κλείνω (την πόρτα) με «ει», όπως το «κλειδί». Το κλίνω με «ι» σημαίνει γέρνω ή κλίνω μια λέξη στη γραμματική.',
      en: 'Κλείνω (I close) takes «ει», like «κλειδί» (key). Κλίνω with «ι» means to lean, or to decline a word in grammar.',
    },
  },
];
