/**
 * Δ' Δημοτικού · Μελέτη Περιβάλλοντος · «Ελλάδα, η Χώρα μας»
 * ===========================================================
 * Original questions on the curriculum topics (nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. What the unit covers, in order:
 *   1–5   where Greece is, its seas, the nine geographic regions
 *   6–9   the political map: capital, neighbours, prefectures and their capitals
 *   10–14 natural features: mountains, rivers, plains, gulfs, the physical map
 *   15–16 life then and now: ploughing, washing, everyday change
 *   17–18 big public works: Corinth Canal, Rio–Antirrio bridge, Egnatia Odos
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_SCIENCE_GREECE_OUR_COUNTRY: QuizQuestion[] = [
  // ── 1–5: where Greece is, seas, geographic regions ───────────────────────
  {
    q: { el: 'Σε ποια ήπειρο βρίσκεται η Ελλάδα;', en: 'On which continent is Greece?' },
    options: { el: ['Ασία', 'Ευρώπη', 'Αφρική', 'Αμερική'], en: ['Asia', 'Europe', 'Africa', 'America'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα είναι στη νοτιοανατολική άκρη της Ευρώπης. Κοντά της είναι η Ασία και η Αφρική, αλλά εκείνη ανήκει στην Ευρώπη.',
      en: 'Greece is at the south-eastern edge of Europe. Asia and Africa are close by, but Greece belongs to Europe.',
    },
  },
  {
    q: { el: 'Ποια θάλασσα βρέχει τη δυτική πλευρά της Ελλάδας;', en: 'Which sea washes the western side of Greece?' },
    options: { el: ['Το Αιγαίο Πέλαγος', 'Η Μαύρη Θάλασσα', 'Το Ιόνιο Πέλαγος', 'Η Ερυθρά Θάλασσα'], en: ['The Aegean Sea', 'The Black Sea', 'The Ionian Sea', 'The Red Sea'] },
    correct: 2,
    explanation: {
      el: 'Δυτικά είναι το Ιόνιο, ανατολικά το Αιγαίο. Κόλπο: Ιόνιο και «Ιταλία» είναι κι οι δύο δυτικά!',
      en: 'The Ionian Sea is to the west, the Aegean to the east. Trick: Ionian and Italy are both to the west!',
    },
  },
  {
    q: { el: 'Σε πόσα γεωγραφικά διαμερίσματα χωρίζουμε την Ελλάδα;', en: 'How many geographic regions do we divide Greece into?' },
    options: { el: ['5', '7', '9', '13'], en: ['5', '7', '9', '13'] },
    correct: 2,
    explanation: {
      el: 'Εννέα: Θράκη, Μακεδονία, Ήπειρος, Θεσσαλία, Στερεά Ελλάδα, Πελοπόννησος, Νησιά Ιονίου, Νησιά Αιγαίου και Κρήτη.',
      en: 'Nine: Thrace, Macedonia, Epirus, Thessaly, Central Greece, Peloponnese, Ionian Islands, Aegean Islands and Crete.',
    },
  },
  {
    q: { el: 'Ποιο γεωγραφικό διαμέρισμα είναι το μεγάλο νησί στο νότιο άκρο της Ελλάδας;', en: 'Which geographic region is the big island at the southern tip of Greece?' },
    options: { el: ['Η Εύβοια', 'Η Κρήτη', 'Η Ρόδος', 'Η Κέρκυρα'], en: ['Euboea', 'Crete', 'Rhodes', 'Corfu'] },
    correct: 1,
    explanation: {
      el: 'Η Κρήτη είναι το μεγαλύτερο νησί της Ελλάδας και είναι ολόκληρη ένα γεωγραφικό διαμέρισμα μόνη της.',
      en: 'Crete is the largest island of Greece and is a whole geographic region all by itself.',
    },
  },
  {
    q: { el: 'Ο Γιώργος μένει στη Θεσσαλονίκη. Σε ποιο γεωγραφικό διαμέρισμα ζει;', en: 'Giorgos lives in Thessaloniki. Which geographic region does he live in?' },
    options: { el: ['Θράκη', 'Θεσσαλία', 'Ήπειρος', 'Μακεδονία'], en: ['Thrace', 'Thessaly', 'Epirus', 'Macedonia'] },
    correct: 3,
    explanation: {
      el: 'Η Θεσσαλονίκη είναι η μεγαλύτερη πόλη της Μακεδονίας, στον βορρά. Η Θεσσαλία είναι πιο νότια, με πρωτεύουσα τη Λάρισα.',
      en: 'Thessaloniki is the biggest city of Macedonia, in the north. Thessaly is further south, and its main city is Larissa.',
    },
  },

  // ── 6–9: the political map ───────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η πρωτεύουσα της Ελλάδας;', en: 'What is the capital of Greece?' },
    options: { el: ['Η Αθήνα', 'Η Θεσσαλονίκη', 'Η Πάτρα', 'Το Ηράκλειο'], en: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion'] },
    correct: 0,
    explanation: {
      el: 'Η Αθήνα είναι η πρωτεύουσα και η μεγαλύτερη πόλη της χώρας. Εκεί είναι η Βουλή και η Ακρόπολη.',
      en: 'Athens is the capital and the largest city of the country. The Parliament and the Acropolis are there.',
    },
  },
  {
    q: { el: 'Τι δείχνει ο πολιτικός χάρτης μιας χώρας;', en: 'What does the political map of a country show?' },
    options: { el: ['Τα βουνά και τα ποτάμια', 'Τα σύνορα, τις πόλεις και τους νομούς', 'Τον καιρό κάθε μέρα', 'Τα ζώα και τα φυτά'], en: ['The mountains and rivers', 'The borders, cities and prefectures', 'The weather every day', 'The animals and plants'] },
    correct: 1,
    explanation: {
      el: 'Ο πολιτικός χάρτης δείχνει πώς χωρίζεται η χώρα: σύνορα, νομούς και πόλεις. Τα βουνά και τα ποτάμια τα δείχνει ο φυσικός χάρτης.',
      en: 'The political map shows how the country is divided: borders, prefectures and cities. Mountains and rivers are shown on the physical map.',
    },
  },
  {
    q: { el: 'Ποια από αυτές τις χώρες ΔΕΝ συνορεύει με την Ελλάδα;', en: 'Which of these countries does NOT share a border with Greece?' },
    options: { el: ['Η Αλβανία', 'Η Βουλγαρία', 'Η Ιταλία', 'Η Τουρκία'], en: ['Albania', 'Bulgaria', 'Italy', 'Turkey'] },
    correct: 2,
    explanation: {
      el: 'Η Ιταλία είναι απέναντι, πέρα από το Ιόνιο Πέλαγος — μας χωρίζει θάλασσα. Στον βορρά συνορεύουμε με Αλβανία, Βόρεια Μακεδονία και Βουλγαρία, και στα ανατολικά με την Τουρκία.',
      en: 'Italy is across the Ionian Sea — the sea separates us. To the north we border Albania, North Macedonia and Bulgaria, and to the east Turkey.',
    },
  },
  {
    q: { el: 'Ο Νίκος μένει στον νομό Αχαΐας. Ποια πόλη είναι η πρωτεύουσα του νομού του;', en: 'Nikos lives in the prefecture of Achaea. Which city is the capital of his prefecture?' },
    options: { el: ['Η Τρίπολη', 'Η Πάτρα', 'Η Καλαμάτα', 'Ο Πύργος'], en: ['Tripoli', 'Patras', 'Kalamata', 'Pyrgos'] },
    correct: 1,
    explanation: {
      el: 'Κάθε νομός έχει μια πρωτεύουσα, συνήθως τη μεγαλύτερη πόλη του. Της Αχαΐας είναι η Πάτρα, η μεγαλύτερη πόλη της Πελοποννήσου.',
      en: 'Every prefecture has a capital, usually its biggest city. The capital of Achaea is Patras, the largest city of the Peloponnese.',
    },
  },

  // ── 10–14: natural features, the physical map ─────────────────────────────
  {
    q: { el: 'Η Ελένη θέλει να βρει τα βουνά και τα ποτάμια της περιοχής της. Ποιον χάρτη πρέπει να ανοίξει;', en: 'Eleni wants to find the mountains and rivers of her region. Which map should she open?' },
    options: { el: ['Τον φυσικό χάρτη', 'Τον πολιτικό χάρτη', 'Τον χάρτη του καιρού', 'Τον χάρτη του μετρό'], en: ['The physical map', 'The political map', 'The weather map', 'The metro map'] },
    correct: 0,
    explanation: {
      el: 'Ο φυσικός χάρτης δείχνει τη φύση: βουνά με καφέ, πεδιάδες με πράσινο, θάλασσες και ποτάμια με μπλε.',
      en: 'The physical map shows nature: mountains in brown, plains in green, seas and rivers in blue.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ψηλότερο βουνό της Ελλάδας;', en: 'Which is the highest mountain in Greece?' },
    options: { el: ['Ο Παρνασσός', 'Ο Ταΰγετος', 'Ο Όλυμπος', 'Ο Ψηλορείτης'], en: ['Parnassus', 'Taygetus', 'Olympus', 'Psiloritis'] },
    correct: 2,
    explanation: {
      el: 'Ο Όλυμπος, ανάμεσα σε Μακεδονία και Θεσσαλία, φτάνει σχεδόν τα 3.000 μέτρα. Οι αρχαίοι Έλληνες πίστευαν ότι εκεί ψηλά ζούσαν οι δώδεκα θεοί.',
      en: 'Olympus, between Macedonia and Thessaly, reaches almost 3,000 metres. The ancient Greeks believed the twelve gods lived up there.',
    },
  },
  {
    q: { el: 'Ποια μεγάλη οροσειρά περνά σαν «ραχοκοκαλιά» από τον βορρά προς τον νότο της ηπειρωτικής Ελλάδας;', en: 'Which great mountain range runs like a “backbone” from north to south through mainland Greece?' },
    options: { el: ['Η Ροδόπη', 'Η Πίνδος', 'Ο Όλυμπος', 'Ο Ταΰγετος'], en: ['Rhodope', 'Pindus', 'Olympus', 'Taygetus'] },
    correct: 1,
    explanation: {
      el: 'Η Πίνδος ξεκινά από τα σύνορα με την Αλβανία και κατεβαίνει μέχρι τη Στερεά Ελλάδα, χωρίζοντας την Ήπειρο από τη Θεσσαλία.',
      en: 'The Pindus starts at the border with Albania and runs down to Central Greece, separating Epirus from Thessaly.',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει στον χάρτη θάλασσα που μπαίνει μέσα στη στεριά. Πώς λέγεται αυτό;', en: 'Maria sees on the map a piece of sea that goes into the land. What is it called?' },
    options: { el: ['Ακρωτήριο', 'Χερσόνησος', 'Πεδιάδα', 'Κόλπος'], en: ['Cape', 'Peninsula', 'Plain', 'Gulf'] },
    correct: 3,
    explanation: {
      el: 'Όταν η θάλασσα μπαίνει μέσα στη στεριά, λέγεται κόλπος, όπως ο Σαρωνικός. Όταν η στεριά μπαίνει μέσα στη θάλασσα, λέγεται χερσόνησος.',
      en: 'When the sea goes into the land it is a gulf, like the Saronic Gulf. When the land goes into the sea it is a peninsula.',
    },
  },
  {
    q: { el: 'Ποια είναι η μεγαλύτερη πεδιάδα της Ελλάδας, όπου καλλιεργούνται πολλά σιτάρια και βαμβάκι;', en: 'Which is the largest plain in Greece, where lots of wheat and cotton are grown?' },
    options: { el: ['Η πεδιάδα της Θεσσαλίας', 'Η πεδιάδα της Αττικής', 'Η πεδιάδα της Ηπείρου', 'Η πεδιάδα της Κρήτης'], en: ['The plain of Thessaly', 'The plain of Attica', 'The plain of Epirus', 'The plain of Crete'] },
    correct: 0,
    explanation: {
      el: 'Η Θεσσαλία έχει τη μεγαλύτερη πεδιάδα της χώρας. Τη διασχίζει ο ποταμός Πηνειός και γι\' αυτό τη λένε «σιτοβολώνα της Ελλάδας».',
      en: 'Thessaly has the largest plain in the country. The river Pineios flows through it, and that is why it is called the “breadbasket of Greece”.',
    },
  },

  // ── 15–16: life then and now ──────────────────────────────────────────────
  {
    q: { el: 'Ο παππούς του Νίκου λέει ότι, όταν ήταν μικρός, όργωναν τα χωράφια με…', en: 'Nikos\' grandpa says that when he was little, they ploughed the fields with…' },
    options: { el: ['τρακτέρ', 'βόδια και ξύλινο αλέτρι', 'φορτηγό', 'ποδήλατο'], en: ['a tractor', 'oxen and a wooden plough', 'a truck', 'a bicycle'] },
    correct: 1,
    explanation: {
      el: 'Παλιά το όργωμα γινόταν με ζώα και αλέτρι και κρατούσε μέρες. Σήμερα το τρακτέρ κάνει την ίδια δουλειά σε λίγες ώρες.',
      en: 'Long ago ploughing was done with animals and a plough and took days. Today a tractor does the same job in a few hours.',
    },
  },
  {
    q: { el: 'Η γιαγιά της Ελένης έπλενε τα ρούχα με το χέρι σε μια σκάφη. Σήμερα ποια συσκευή κάνει αυτή τη δουλειά;', en: 'Eleni\'s grandma washed clothes by hand in a tub. Which machine does this job today?' },
    options: { el: ['Το ψυγείο', 'Ο φούρνος', 'Το πλυντήριο', 'Η ηλεκτρική σκούπα'], en: ['The fridge', 'The oven', 'The washing machine', 'The vacuum cleaner'] },
    correct: 2,
    explanation: {
      el: 'Το πλυντήριο πλένει τα ρούχα μόνο του. Οι ηλεκτρικές συσκευές άλλαξαν πολύ τη ζωή στο σπίτι σε σχέση με παλιά.',
      en: 'The washing machine washes clothes by itself. Electric machines have changed life at home a lot compared to the past.',
    },
  },

  // ── 17–18: big public works ───────────────────────────────────────────────
  {
    q: { el: 'Η γέφυρα Ρίου–Αντιρρίου είναι ένα από τα μεγαλύτερα έργα της Ελλάδας. Ποια μέρη ενώνει;', en: 'The Rio–Antirrio bridge is one of the biggest works in Greece. Which places does it join?' },
    options: { el: ['Την Κρήτη με την Πελοπόννησο', 'Την Εύβοια με την Αττική', 'Τη Θεσσαλονίκη με τη Χαλκιδική', 'Την Πελοπόννησο με τη Στερεά Ελλάδα'], en: ['Crete with the Peloponnese', 'Euboea with Attica', 'Thessaloniki with Halkidiki', 'The Peloponnese with Central Greece'] },
    correct: 3,
    explanation: {
      el: 'Η γέφυρα περνά πάνω από τη θάλασσα, από το Ρίο κοντά στην Πάτρα ως το Αντίρριο. Πριν χτιστεί, τα αυτοκίνητα περνούσαν απέναντι με πλοίο.',
      en: 'The bridge crosses the sea from Rio, near Patras, to Antirrio. Before it was built, cars crossed by ferry.',
    },
  },
  {
    q: { el: 'Η Διώρυγα της Κορίνθου είναι ένα στενό κανάλι που άνοιξαν οι άνθρωποι μέσα στη στεριά. Ποιους δύο κόλπους ενώνει;', en: 'The Corinth Canal is a narrow channel people cut through the land. Which two gulfs does it join?' },
    options: { el: ['Τον Κορινθιακό με τον Σαρωνικό', 'Τον Θερμαϊκό με τον Παγασητικό', 'Τον Μεσσηνιακό με τον Λακωνικό', 'Τον Αμβρακικό με τον Πατραϊκό'], en: ['The Corinthian with the Saronic', 'The Thermaic with the Pagasetic', 'The Messenian with the Laconian', 'The Ambracian with the Patraic'] },
    correct: 0,
    explanation: {
      el: 'Η διώρυγα κόβει τον Ισθμό της Κορίνθου και ενώνει τον Κορινθιακό με τον Σαρωνικό κόλπο. Έτσι τα πλοία δεν κάνουν τον γύρο όλης της Πελοποννήσου.',
      en: 'The canal cuts through the Isthmus of Corinth and joins the Corinthian Gulf with the Saronic Gulf. This way ships do not have to sail all the way around the Peloponnese.',
    },
  },
];
