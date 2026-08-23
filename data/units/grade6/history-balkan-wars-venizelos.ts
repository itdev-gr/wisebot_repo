/**
 * ΣΤ' Δημοτικού · Ιστορία · Βενιζέλος & Βαλκανικοί Πόλεμοι
 * =========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12. Ordered easiest → hardest, following the brief:
 *   1–2   the war of 1897 and what Greece learned from it
 *   3–5   the Macedonian Struggle, the marshes of Giannitsa, Pavlos Melas
 *   6–7   Goudi 1909 and the arrival of Eleftherios Venizelos from Crete
 *   8–13  the Balkan Wars 1912–13, Thessaloniki, Ioannina, the navy, Bucharest 1913
 *   14–15 the First World War and the National Schism
 *   16–18 Asia Minor 1919–1922, the refugees, the Treaty of Lausanne
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_HISTORY_BALKAN_WARS_VENIZELOS: QuizQuestion[] = [
  // ── 1–2: the war of 1897 ───────────────────────────────────────────────────
  {
    q: { el: 'Το 1897 η Ελλάδα πολέμησε με την Οθωμανική Αυτοκρατορία. Πώς τελείωσε αυτός ο πόλεμος;', en: 'In 1897 Greece fought a war against the Ottoman Empire. How did that war end?' },
    options: { el: ['Η Ελλάδα κέρδισε τη Μακεδονία', 'Η Ελλάδα ηττήθηκε γρήγορα', 'Η Ελλάδα κέρδισε την Κρήτη', 'Δεν έγινε καμία μάχη'], en: ['Greece won Macedonia', 'Greece was defeated quickly', 'Greece won Crete', 'No battle took place'] },
    correct: 1,
    explanation: {
      el: 'Ο πόλεμος του 1897 κράτησε λίγες εβδομάδες και η Ελλάδα ηττήθηκε. Γι\' αυτό τον λέμε «άτυχο πόλεμο».',
      en: 'The war of 1897 lasted only a few weeks and Greece was defeated. That is why it is called the “unlucky war”.',
    },
  },
  {
    q: { el: 'Μετά την ήττα του 1897 η Ελλάδα κατάλαβε ότι έπρεπε να…', en: 'After the defeat of 1897, Greece understood that it had to…' },
    options: { el: ['κλείσει τα σύνορά της', 'σταματήσει να έχει στρατό', 'οργανώσει καλύτερα τον στρατό και το κράτος', 'πουλήσει τα νησιά της'], en: ['close its borders', 'stop having an army', 'organise its army and state better', 'sell its islands'] },
    correct: 2,
    explanation: {
      el: 'Η ήττα έδειξε ότι ο στρατός ήταν απροετοίμαστος. Τα επόμενα χρόνια η Ελλάδα προσπάθησε να φτιάξει καλύτερο στρατό και πιο δυνατό κράτος.',
      en: 'The defeat showed that the army was unprepared. In the following years Greece worked to build a better army and a stronger state.',
    },
  },

  // ── 3–5: the Macedonian Struggle and Pavlos Melas ──────────────────────────
  {
    q: { el: 'Στις αρχές του 1900 η Μακεδονία ανήκε ακόμα…', en: 'At the start of the 1900s, Macedonia still belonged to…' },
    options: { el: ['στην Ελλάδα', 'στην Οθωμανική Αυτοκρατορία', 'στη Σερβία', 'στην Ιταλία'], en: ['Greece', 'the Ottoman Empire', 'Serbia', 'Italy'] },
    correct: 1,
    explanation: {
      el: 'Η Μακεδονία ήταν ακόμα οθωμανική. Έλληνες, Βούλγαροι και Σέρβοι την ήθελαν όλοι, και έτσι άρχισε ο Μακεδονικός Αγώνας.',
      en: 'Macedonia was still Ottoman. Greeks, Bulgarians and Serbs all wanted it, and that is how the Macedonian Struggle began.',
    },
  },
  {
    q: { el: 'Πού κρύβονταν και πολεμούσαν πολλοί Μακεδονομάχοι με βάρκες;', en: 'Where did many fighters of the Macedonian Struggle hide and fight using boats?' },
    options: { el: ['Στον βάλτο των Γιαννιτσών', 'Στον Όλυμπο', 'Στο λιμάνι του Πειραιά', 'Στη λίμνη Ιωαννίνων'], en: ['In the marsh of Giannitsa', 'On Mount Olympus', 'In the port of Piraeus', 'In the lake of Ioannina'] },
    correct: 0,
    explanation: {
      el: 'Ο βάλτος των Γιαννιτσών ήταν γεμάτος καλάμια και νερό. Οι Μακεδονομάχοι έφτιαξαν εκεί κρυφές καλύβες και κινούνταν με πλάβες, δηλαδή μικρές βάρκες.',
      en: 'The marsh of Giannitsa was full of reeds and water. The fighters built hidden huts there and moved around in small flat boats.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο Παύλος Μελάς;', en: 'Who was Pavlos Melas?' },
    options: { el: ['Ένας βασιλιάς της Ελλάδας', 'Ένας αξιωματικός που έπεσε στον Μακεδονικό Αγώνα το 1904', 'Ένας ναύαρχος στους Βαλκανικούς Πολέμους', 'Ένας πρωθυπουργός από την Κρήτη'], en: ['A king of Greece', 'An officer who died in the Macedonian Struggle in 1904', 'An admiral in the Balkan Wars', 'A prime minister from Crete'] },
    correct: 1,
    explanation: {
      el: 'Ο Παύλος Μελάς ήταν αξιωματικός του ελληνικού στρατού. Πήγε κρυφά στη Μακεδονία με το ψευδώνυμο «Μίκης Ζέζας» και έπεσε το 1904. Ο θάνατός του συγκίνησε όλη την Ελλάδα.',
      en: 'Pavlos Melas was an officer of the Greek army. He went secretly to Macedonia under the name “Mikis Zezas” and died in 1904. His death moved the whole of Greece.',
    },
  },

  // ── 6–7: Goudi 1909 and Venizelos ──────────────────────────────────────────
  {
    q: { el: 'Τι έγινε στο Γουδί το 1909;', en: 'What happened at Goudi in 1909?' },
    options: { el: ['Ένας μεγάλος σεισμός', 'Οι πρώτοι Ολυμπιακοί Αγώνες', 'Ένα στρατιωτικό κίνημα που ζητούσε αλλαγές', 'Η ίδρυση του Πανεπιστημίου'], en: ['A big earthquake', 'The first Olympic Games', 'A military movement demanding changes', 'The founding of the University'] },
    correct: 2,
    explanation: {
      el: 'Το 1909 αξιωματικοί συγκεντρώθηκαν στο Γουδί της Αθήνας και ζήτησαν να αλλάξει ο τρόπος που κυβερνιόταν η χώρα. Αυτό το λέμε «Κίνημα στο Γουδί».',
      en: 'In 1909 army officers gathered at Goudi in Athens and demanded changes in how the country was governed. This is called the “Goudi movement”.',
    },
  },
  {
    q: { el: 'Από πού καταγόταν ο Ελευθέριος Βενιζέλος;', en: 'Where did Eleftherios Venizelos come from?' },
    options: { el: ['Από την Κέρκυρα', 'Από τη Θεσσαλονίκη', 'Από τη Σμύρνη', 'Από την Κρήτη'], en: ['From Corfu', 'From Thessaloniki', 'From Smyrna', 'From Crete'] },
    correct: 3,
    explanation: {
      el: 'Ο Βενιζέλος γεννήθηκε στην Κρήτη, κοντά στα Χανιά. Μετά το κίνημα στο Γουδί τον κάλεσαν στην Αθήνα και το 1910 έγινε πρωθυπουργός της Ελλάδας.',
      en: 'Venizelos was born in Crete, near Chania. After the Goudi movement he was invited to Athens, and in 1910 he became prime minister of Greece.',
    },
  },

  // ── 8–13: the Balkan Wars 1912–13 ──────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται το κόμμα που ίδρυσε ο Βενιζέλος;', en: 'What was the name of the party founded by Venizelos?' },
    options: { el: ['Κόμμα Φιλελευθέρων', 'Λαϊκό Κόμμα', 'Κόμμα της Κρήτης', 'Κόμμα των Αξιωματικών'], en: ['Liberal Party', 'People\'s Party', 'Party of Crete', 'Officers\' Party'] },
    correct: 0,
    explanation: {
      el: 'Ο Βενιζέλος ίδρυσε το Κόμμα Φιλελευθέρων. Με αυτό έκανε πολλές αλλαγές: νέους νόμους, καλύτερα σχολεία και πιο δυνατό στρατό.',
      en: 'Venizelos founded the Liberal Party. With it he made many changes: new laws, better schools and a stronger army.',
    },
  },
  {
    q: { el: 'Ποιες χώρες συμμάχησαν με την Ελλάδα στον Α΄ Βαλκανικό Πόλεμο (1912);', en: 'Which countries were Greece\'s allies in the First Balkan War (1912)?' },
    options: { el: ['Ιταλία, Γαλλία, Αγγλία', 'Σερβία, Βουλγαρία, Μαυροβούνιο', 'Τουρκία, Αλβανία, Ρουμανία', 'Ρωσία, Γερμανία, Αυστρία'], en: ['Italy, France, England', 'Serbia, Bulgaria, Montenegro', 'Turkey, Albania, Romania', 'Russia, Germany, Austria'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα, η Σερβία, η Βουλγαρία και το Μαυροβούνιο ενώθηκαν και πολέμησαν μαζί την Οθωμανική Αυτοκρατορία. Αυτός ήταν ο Α΄ Βαλκανικός Πόλεμος.',
      en: 'Greece, Serbia, Bulgaria and Montenegro joined together and fought the Ottoman Empire. That was the First Balkan War.',
    },
  },
  {
    q: { el: 'Πότε μπήκε ο ελληνικός στρατός στη Θεσσαλονίκη;', en: 'When did the Greek army enter Thessaloniki?' },
    options: { el: ['Τον Μάρτιο του 1821', 'Τον Οκτώβριο του 1912', 'Τον Αύγουστο του 1913', 'Τον Μάιο του 1919'], en: ['In March 1821', 'In October 1912', 'In August 1913', 'In May 1919'] },
    correct: 1,
    explanation: {
      el: 'Η Θεσσαλονίκη απελευθερώθηκε στις 26 Οκτωβρίου 1912, ανήμερα του Αγίου Δημητρίου, του προστάτη της πόλης. Γι\' αυτό η πόλη γιορτάζει κάθε χρόνο εκείνη τη μέρα.',
      en: 'Thessaloniki was liberated on 26 October 1912, the feast day of Saint Demetrius, the city\'s patron. That is why the city celebrates on that day every year.',
    },
  },
  {
    q: { el: 'Ποιο θωρηκτό ήταν η «ναυαρχίδα» του ελληνικού στόλου στους Βαλκανικούς Πολέμους;', en: 'Which battleship was the flagship of the Greek fleet in the Balkan Wars?' },
    options: { el: ['Το «Ολύμπια»', 'Το «Αβέρωφ»', 'Το «Ελλάς»', 'Το «Ποσειδών»'], en: ['The “Olympia”', 'The “Averof”', 'The “Hellas”', 'The “Poseidon”'] },
    correct: 1,
    explanation: {
      el: 'Το θωρηκτό «Γεώργιος Αβέρωφ» με ναύαρχο τον Παύλο Κουντουριώτη κυριάρχησε στο Αιγαίο. Έτσι απελευθερώθηκαν νησιά όπως η Λήμνος, η Χίος, η Μυτιλήνη και η Σάμος.',
      en: 'The battleship “Georgios Averof”, under Admiral Pavlos Kountouriotis, ruled the Aegean. That is how islands like Lemnos, Chios, Lesbos and Samos were liberated.',
    },
  },
  {
    q: { el: 'Ποια πόλη της Ηπείρου απελευθέρωσε ο ελληνικός στρατός τον Φεβρουάριο του 1913;', en: 'Which city in Epirus did the Greek army liberate in February 1913?' },
    options: { el: ['Τα Ιωάννινα', 'Την Πάτρα', 'Τη Λάρισα', 'Την Καβάλα'], en: ['Ioannina', 'Patras', 'Larissa', 'Kavala'] },
    correct: 0,
    explanation: {
      el: 'Τα Ιωάννινα είχαν ισχυρά οχυρά γύρω τους, στο Μπιζάνι. Μετά από σκληρό χειμώνα ο ελληνικός στρατός τα πήρε τον Φεβρουάριο του 1913.',
      en: 'Ioannina was protected by strong forts at Bizani. After a hard winter, the Greek army took the city in February 1913.',
    },
  },
  {
    q: { el: 'Γιατί έγινε ο Β΄ Βαλκανικός Πόλεμος το 1913;', en: 'Why did the Second Balkan War happen in 1913?' },
    options: { el: ['Γιατί η Οθωμανική Αυτοκρατορία επιτέθηκε ξανά', 'Γιατί η Ιταλία ήθελε τα Δωδεκάνησα', 'Γιατί οι πρώην σύμμαχοι μάλωσαν για τη μοιρασιά των εδαφών', 'Γιατί η Ελλάδα ήθελε την Κύπρο'], en: ['Because the Ottoman Empire attacked again', 'Because Italy wanted the Dodecanese', 'Because the former allies quarrelled over how to divide the land', 'Because Greece wanted Cyprus'] },
    correct: 2,
    explanation: {
      el: 'Μετά τη νίκη, η Βουλγαρία ήθελε περισσότερα εδάφη και επιτέθηκε στους πρώην συμμάχους της. Η Ελλάδα και η Σερβία νίκησαν, και στη Συνθήκη του Βουκουρεστίου (1913) η Ελλάδα σχεδόν διπλασιάστηκε.',
      en: 'After the victory, Bulgaria wanted more land and attacked its former allies. Greece and Serbia won, and with the Treaty of Bucharest (1913) Greece almost doubled in size.',
    },
  },

  // ── 14–15: World War I and the National Schism ─────────────────────────────
  {
    q: { el: 'Στον Α΄ Παγκόσμιο Πόλεμο ο Βενιζέλος και ο βασιλιάς Κωνσταντίνος διαφωνούσαν για το…', en: 'In the First World War, Venizelos and King Constantine disagreed about…' },
    options: { el: ['ποιος θα γίνει αρχηγός του στόλου', 'αν η Ελλάδα θα μπει στον πόλεμο και με ποιους', 'πού θα χτιστεί η νέα Βουλή', 'αν θα αλλάξει η σημαία'], en: ['who would lead the fleet', 'whether Greece should enter the war, and on which side', 'where the new Parliament would be built', 'whether the flag should change'] },
    correct: 1,
    explanation: {
      el: 'Ο Βενιζέλος ήθελε η Ελλάδα να πολεμήσει στο πλευρό της Αγγλίας και της Γαλλίας. Ο βασιλιάς ήθελε η χώρα να μείνει ουδέτερη. Η διαφωνία τους λέγεται «Εθνικός Διχασμός».',
      en: 'Venizelos wanted Greece to fight alongside Britain and France. The king wanted the country to stay neutral. Their disagreement is called the “National Schism”.',
    },
  },
  {
    q: { el: 'Σε ποια πόλη έστησε ο Βενιζέλος δική του κυβέρνηση το 1916;', en: 'In which city did Venizelos set up his own government in 1916?' },
    options: { el: ['Στην Αθήνα', 'Στα Χανιά', 'Στη Θεσσαλονίκη', 'Στην Πάτρα'], en: ['In Athens', 'In Chania', 'In Thessaloniki', 'In Patras'] },
    correct: 2,
    explanation: {
      el: 'Το 1916 ο Βενιζέλος έφτιαξε την «Προσωρινή Κυβέρνηση» στη Θεσσαλονίκη. Έτσι η Ελλάδα είχε για λίγο δύο κυβερνήσεις, μέχρι που το 1917 μπήκε στον πόλεμο ενωμένη.',
      en: 'In 1916 Venizelos formed the “Provisional Government” in Thessaloniki. For a while Greece had two governments, until in 1917 it entered the war united.',
    },
  },

  // ── 16–18: Asia Minor 1919–1922 ────────────────────────────────────────────
  {
    q: { el: 'Το 1919 ο ελληνικός στρατός αποβιβάστηκε σε μια μεγάλη πόλη της Μικράς Ασίας. Ποια ήταν;', en: 'In 1919 the Greek army landed in a big city of Asia Minor. Which one?' },
    options: { el: ['Η Κωνσταντινούπολη', 'Η Σμύρνη', 'Η Τραπεζούντα', 'Η Αλεξάνδρεια'], en: ['Constantinople', 'Smyrna', 'Trebizond', 'Alexandria'] },
    correct: 1,
    explanation: {
      el: 'Τον Μάιο του 1919 ο ελληνικός στρατός μπήκε στη Σμύρνη, μια πόλη όπου ζούσαν πάρα πολλοί Έλληνες. Η Συνθήκη των Σεβρών (1920) έδωσε την περιοχή στην Ελλάδα.',
      en: 'In May 1919 the Greek army entered Smyrna, a city where a great many Greeks lived. The Treaty of Sèvres (1920) gave the region to Greece.',
    },
  },
  {
    q: { el: 'Πώς ονομάζουμε τα γεγονότα του 1922 στη Μικρά Ασία;', en: 'What do we call the events of 1922 in Asia Minor?' },
    options: { el: ['Μικρασιατική Καταστροφή', 'Μικρασιατική Νίκη', 'Βαλκανική Συμφωνία', 'Εθνικός Διχασμός'], en: ['The Asia Minor Catastrophe', 'The Asia Minor Victory', 'The Balkan Agreement', 'The National Schism'] },
    correct: 0,
    explanation: {
      el: 'Το 1922 ο ελληνικός στρατός ηττήθηκε και έφυγε από τη Μικρά Ασία. Οι Έλληνες που ζούσαν εκεί για αιώνες αναγκάστηκαν να φύγουν. Αυτό το λέμε Μικρασιατική Καταστροφή.',
      en: 'In 1922 the Greek army was defeated and left Asia Minor. The Greeks who had lived there for centuries had to leave. We call this the Asia Minor Catastrophe.',
    },
  },
  {
    q: { el: 'Μετά το 1922 πάνω από ένα εκατομμύριο πρόσφυγες ήρθαν στην Ελλάδα. Ποια συνθήκη του 1923 όρισε την ανταλλαγή των πληθυσμών;', en: 'After 1922 more than a million refugees came to Greece. Which treaty of 1923 arranged the exchange of populations?' },
    options: { el: ['Η Συνθήκη των Σεβρών', 'Η Συνθήκη του Βουκουρεστίου', 'Η Συνθήκη του Λονδίνου', 'Η Συνθήκη της Λωζάνης'], en: ['The Treaty of Sèvres', 'The Treaty of Bucharest', 'The Treaty of London', 'The Treaty of Lausanne'] },
    correct: 3,
    explanation: {
      el: 'Με τη Συνθήκη της Λωζάνης (1923) οι Έλληνες της Τουρκίας ήρθαν στην Ελλάδα και οι μουσουλμάνοι της Ελλάδας πήγαν στην Τουρκία. Οι πρόσφυγες έχτισαν νέες γειτονιές, όπως η Νέα Σμύρνη και η Νέα Ιωνία.',
      en: 'With the Treaty of Lausanne (1923) the Greeks of Turkey came to Greece and the Muslims of Greece went to Turkey. The refugees built new neighbourhoods, such as Nea Smyrni and Nea Ionia.',
    },
  },
];
