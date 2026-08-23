/**
 * Δ' Δημοτικού · Ιστορία · Γεωμετρικά Χρόνια
 * ===========================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–2   the Dorians: where they came from, where they settled
 *   3–6   colonies: what a colony is, why Greeks left, μητρόπολη, where they went
 *   7–8   Homer and his two poems
 *   9–12  the Iliad: Troy, Achilles, Hector, the wooden horse
 *   13–15 the Odyssey: Odysseus, the Cyclops, Penelope
 *   16–17 the Greek alphabet: the Phoenicians, the vowels
 *   18    geometric vases
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_HISTORY_GEOMETRIC_PERIOD: QuizQuestion[] = [
  // ── 1–2: the Dorians ────────────────────────────────────────────────────────
  {
    q: { el: 'Από πού ήρθαν οι Δωριείς στην Ελλάδα;', en: 'Where did the Dorians come from when they arrived in Greece?' },
    options: { el: ['Από τη θάλασσα, με πλοία από την Αίγυπτο', 'Από τα νησιά του Αιγαίου', 'Από τον βορρά, με τα πόδια', 'Από την Τροία'], en: ['From the sea, on ships from Egypt', 'From the Aegean islands', 'From the north, on foot', 'From Troy'] },
    correct: 2,
    explanation: {
      el: 'Οι Δωριείς ήταν ελληνικό φύλο που κατέβηκε από τον βορρά. Το γεγονός αυτό λέγεται «κάθοδος των Δωριέων».',
      en: 'The Dorians were a Greek tribe that came down from the north. This event is called the “descent of the Dorians”.',
    },
  },
  {
    q: { el: 'Σε ποια περιοχή εγκαταστάθηκαν κυρίως οι Δωριείς;', en: 'In which region did the Dorians mainly settle?' },
    options: { el: ['Στην Πελοπόννησο', 'Στη Μακεδονία', 'Στη Μικρά Ασία', 'Στην Ιταλία'], en: ['In the Peloponnese', 'In Macedonia', 'In Asia Minor', 'In Italy'] },
    correct: 0,
    explanation: {
      el: 'Οι Δωριείς εγκαταστάθηκαν κυρίως στην Πελοπόννησο. Η Σπάρτη ήταν μια από τις πιο γνωστές δωρικές πόλεις.',
      en: 'The Dorians settled mainly in the Peloponnese. Sparta was one of the best-known Dorian cities.',
    },
  },

  // ── 3–6: colonies ───────────────────────────────────────────────────────────
  {
    q: { el: 'Τι ήταν μια «αποικία»;', en: 'What was a “colony”?' },
    options: { el: ['Ένα μεγάλο πλοίο', 'Μια νέα πόλη που έχτιζαν Έλληνες σε μακρινό τόπο', 'Ένα τείχος γύρω από την πόλη', 'Ένα γιορτινό τραγούδι'], en: ['A large ship', 'A new city Greeks built in a faraway place', 'A wall around the city', 'A festival song'] },
    correct: 1,
    explanation: {
      el: 'Αποικία ήταν μια καινούργια πόλη που ίδρυαν Έλληνες μακριά από την πατρίδα τους, συνήθως κοντά στη θάλασσα.',
      en: 'A colony was a brand-new city that Greeks founded far from home, usually near the sea.',
    },
  },
  {
    q: { el: 'Γιατί πολλοί Έλληνες έφυγαν για να ιδρύσουν αποικίες;', en: 'Why did many Greeks leave to found colonies?' },
    options: { el: ['Γιατί φοβόντουσαν τους σεισμούς', 'Γιατί ήθελαν να δουν το χιόνι', 'Γιατί έψαχναν χρυσάφι στα βουνά', 'Γιατί η γη στην πατρίδα τους δεν έφτανε για όλους'], en: ['Because they were afraid of earthquakes', 'Because they wanted to see snow', 'Because they were looking for gold in the mountains', 'Because the land back home was not enough for everyone'] },
    correct: 3,
    explanation: {
      el: 'Η Ελλάδα έχει πολλά βουνά και λίγα χωράφια. Όταν οι άνθρωποι έγιναν πολλοί, κάποιοι έφυγαν για να βρουν νέα γη και εμπόριο.',
      en: 'Greece has many mountains and few fields. When the people grew too many, some left to find new land and trade.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν η πόλη που έστελνε τους αποίκους;', en: 'What was the city that sent out the colonists called?' },
    options: { el: ['Ακρόπολη', 'Νεκρόπολη', 'Μητρόπολη', 'Πρωτεύουσα'], en: ['Acropolis', 'Necropolis', 'Metropolis (mother city)', 'Capital'] },
    correct: 2,
    explanation: {
      el: 'Η «μητρόπολη» ήταν η πόλη-μητέρα. Οι άποικοι έπαιρναν μαζί τους φωτιά από τον βωμό της, για να θυμούνται από πού ήρθαν.',
      en: 'The “metropolis” was the mother city. The colonists took fire from its altar with them, to remember where they came from.',
    },
  },
  {
    q: { el: 'Πού ίδρυσαν αποικίες οι Έλληνες;', en: 'Where did the Greeks found colonies?' },
    options: { el: ['Μόνο στα νησιά του Αιγαίου', 'Γύρω από τη Μεσόγειο και τη Μαύρη Θάλασσα', 'Στην έρημο της Αφρικής', 'Μόνο στη Μικρά Ασία'], en: ['Only on the Aegean islands', 'Around the Mediterranean and the Black Sea', 'In the African desert', 'Only in Asia Minor'] },
    correct: 1,
    explanation: {
      el: 'Οι Έλληνες ταξίδεψαν με πλοία και έχτισαν αποικίες σε όλες τις ακτές της Μεσογείου και της Μαύρης Θάλασσας, ακόμη και στην Ιταλία και τη Γαλλία.',
      en: 'The Greeks sailed far and built colonies all along the coasts of the Mediterranean and the Black Sea, even in Italy and France.',
    },
  },

  // ── 7–8: Homer ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Όμηρος;', en: 'Who was Homer?' },
    options: { el: ['Ένας ποιητής', 'Ένας βασιλιάς', 'Ένας ναυτικός', 'Ένας αγγειοπλάστης'], en: ['A poet', 'A king', 'A sailor', 'A potter'] },
    correct: 0,
    explanation: {
      el: 'Ο Όμηρος ήταν ο πιο γνωστός ποιητής της αρχαίας Ελλάδας. Η παράδοση λέει ότι ήταν τυφλός και τραγουδούσε τα ποιήματά του.',
      en: 'Homer was the most famous poet of ancient Greece. Tradition says he was blind and sang his poems out loud.',
    },
  },
  {
    q: { el: 'Ποια είναι τα δύο μεγάλα ποιήματα του Ομήρου;', en: 'Which are the two great poems of Homer?' },
    options: { el: ['Η Ιλιάδα και η Αντιγόνη', 'Η Οδύσσεια και ο Αίσωπος', 'Η Αργοναυτική Εκστρατεία και η Ιλιάδα', 'Η Ιλιάδα και η Οδύσσεια'], en: ['The Iliad and Antigone', 'The Odyssey and Aesop', 'The Argonauts and the Iliad', 'The Iliad and the Odyssey'] },
    correct: 3,
    explanation: {
      el: 'Τα δύο ποιήματα του Ομήρου είναι η Ιλιάδα, για τον πόλεμο της Τροίας, και η Οδύσσεια, για το ταξίδι του Οδυσσέα.',
      en: 'Homer’s two poems are the Iliad, about the Trojan War, and the Odyssey, about the journey of Odysseus.',
    },
  },

  // ── 9–12: the Iliad ─────────────────────────────────────────────────────────
  {
    q: { el: 'Για ποιον πόλεμο μιλάει η Ιλιάδα;', en: 'Which war is the Iliad about?' },
    options: { el: ['Για τον πόλεμο της Σπάρτης με την Αθήνα', 'Για τον πόλεμο της Τροίας', 'Για τον πόλεμο με τους Πέρσες', 'Για τον πόλεμο των Δωριέων'], en: ['The war between Sparta and Athens', 'The Trojan War', 'The war with the Persians', 'The war of the Dorians'] },
    correct: 1,
    explanation: {
      el: 'Η Ιλιάδα πήρε το όνομά της από το Ίλιον, που είναι άλλο όνομα της Τροίας. Μιλάει για τον πόλεμο των Ελλήνων με τους Τρώες.',
      en: 'The Iliad takes its name from Ilion, another name for Troy. It tells of the war between the Greeks and the Trojans.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο πιο γενναίος ήρωας των Ελλήνων στην Τροία;', en: 'Who was the bravest Greek hero at Troy?' },
    options: { el: ['Ο Ηρακλής', 'Ο Θησέας', 'Ο Αχιλλέας', 'Ο Ιάσονας'], en: ['Heracles', 'Theseus', 'Achilles', 'Jason'] },
    correct: 2,
    explanation: {
      el: 'Ο Αχιλλέας ήταν ο πιο δυνατός και γρήγορος πολεμιστής των Ελλήνων. Ο Ηρακλής, ο Θησέας και ο Ιάσονας είναι ήρωες άλλων μύθων.',
      en: 'Achilles was the strongest and fastest of the Greek warriors. Heracles, Theseus and Jason are heroes of other myths.',
    },
  },
  {
    q: { el: 'Ο Έκτορας ήταν ο μεγαλύτερος ήρωας…', en: 'Hector was the greatest hero of…' },
    options: { el: ['των Τρώων', 'των Ελλήνων', 'των Δωριέων', 'των Φοινίκων'], en: ['the Trojans', 'the Greeks', 'the Dorians', 'the Phoenicians'] },
    correct: 0,
    explanation: {
      el: 'Ο Έκτορας ήταν γιος του βασιλιά της Τροίας, του Πρίαμου, και υπερασπιζόταν την πόλη του. Ήταν ο πιο γενναίος από τους Τρώες.',
      en: 'Hector was the son of Priam, the king of Troy, and defended his city. He was the bravest of the Trojans.',
    },
  },
  {
    q: { el: 'Με ποιο τέχνασμα μπήκαν τελικά οι Έλληνες μέσα στην Τροία;', en: 'With which trick did the Greeks finally get inside Troy?' },
    options: { el: ['Έσκαψαν μια σήραγγα κάτω από τα τείχη', 'Ντύθηκαν έμποροι', 'Έστειλαν ένα τεράστιο δώρο από χρυσάφι', 'Κρύφτηκαν μέσα σε ένα ξύλινο άλογο'], en: ['They dug a tunnel under the walls', 'They dressed up as merchants', 'They sent a huge gift of gold', 'They hid inside a wooden horse'] },
    correct: 3,
    explanation: {
      el: 'Ήταν ιδέα του πολυμήχανου Οδυσσέα: οι Έλληνες έφτιαξαν ένα μεγάλο ξύλινο άλογο και κρύφτηκαν μέσα. Οι Τρώες το έβαλαν στην πόλη τους!',
      en: 'It was clever Odysseus’ idea: the Greeks built a big wooden horse and hid inside it. The Trojans pulled it into their city!',
    },
  },

  // ── 13–15: the Odyssey ──────────────────────────────────────────────────────
  {
    q: { el: 'Πού προσπαθούσε να γυρίσει ο Οδυσσέας στην Οδύσσεια;', en: 'Where was Odysseus trying to get back to in the Odyssey?' },
    options: { el: ['Στην Τροία', 'Στην Ιθάκη, το νησί του', 'Στη Σπάρτη', 'Στην Κρήτη'], en: ['To Troy', 'To Ithaca, his island', 'To Sparta', 'To Crete'] },
    correct: 1,
    explanation: {
      el: 'Ο Οδυσσέας ήταν βασιλιάς της Ιθάκης. Μετά τον πόλεμο της Τροίας ταξίδεψε δέκα ολόκληρα χρόνια για να γυρίσει στο νησί του.',
      en: 'Odysseus was the king of Ithaca. After the Trojan War he travelled for ten whole years to get back to his island.',
    },
  },
  {
    q: { el: 'Ο Κύκλωπας Πολύφημος, που συνάντησε ο Οδυσσέας, ήταν ένας γίγαντας με…', en: 'The Cyclops Polyphemus, whom Odysseus met, was a giant with…' },
    options: { el: ['τρία κεφάλια', 'φτερά στην πλάτη', 'ένα μόνο μάτι', 'ουρά ψαριού'], en: ['three heads', 'wings on his back', 'only one eye', 'a fish tail'] },
    correct: 2,
    explanation: {
      el: 'Οι Κύκλωπες είχαν ένα μόνο μάτι στη μέση του μετώπου. Ο Οδυσσέας ξεγέλασε τον Πολύφημο λέγοντάς του ότι τον λένε «Κανένα».',
      en: 'The Cyclopes had a single eye in the middle of their forehead. Odysseus tricked Polyphemus by telling him his name was “Nobody”.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν η γυναίκα του Οδυσσέα, που τον περίμενε πιστά στην Ιθάκη;', en: 'What was the name of Odysseus’ wife, who waited faithfully for him in Ithaca?' },
    options: { el: ['Πηνελόπη', 'Ελένη', 'Αριάδνη', 'Αθηνά'], en: ['Penelope', 'Helen', 'Ariadne', 'Athena'] },
    correct: 0,
    explanation: {
      el: 'Η Πηνελόπη ύφαινε την ημέρα ένα υφαντό και το ξήλωνε τη νύχτα, για να κερδίζει χρόνο μέχρι να γυρίσει ο Οδυσσέας.',
      en: 'Penelope wove a cloth by day and unpicked it at night, to gain time until Odysseus came home.',
    },
  },

  // ── 16–17: the Greek alphabet ───────────────────────────────────────────────
  {
    q: { el: 'Από ποιον λαό πήραν οι Έλληνες τα γράμματα του αλφαβήτου τους;', en: 'From which people did the Greeks take the letters of their alphabet?' },
    options: { el: ['Από τους Αιγυπτίους', 'Από τους Φοίνικες', 'Από τους Ρωμαίους', 'Από τους Πέρσες'], en: ['From the Egyptians', 'From the Phoenicians', 'From the Romans', 'From the Persians'] },
    correct: 1,
    explanation: {
      el: 'Οι Φοίνικες ήταν σπουδαίοι έμποροι και ναυτικοί. Οι Έλληνες γνώρισαν τα γράμματά τους στο εμπόριο και τα έκαναν δικά τους.',
      en: 'The Phoenicians were great traders and sailors. The Greeks learned their letters through trade and made them their own.',
    },
  },
  {
    q: { el: 'Τι σημαντικό πρόσθεσαν οι Έλληνες στο αλφάβητο των Φοινίκων;', en: 'What important thing did the Greeks add to the Phoenician alphabet?' },
    options: { el: ['Τους αριθμούς', 'Τα κεφαλαία γράμματα', 'Τα σημεία στίξης', 'Τα φωνήεντα'], en: ['Numbers', 'Capital letters', 'Punctuation marks', 'Vowels'] },
    correct: 3,
    explanation: {
      el: 'Το φοινικικό αλφάβητο είχε μόνο σύμφωνα. Οι Έλληνες πρόσθεσαν τα φωνήεντα (α, ε, ι, ο, υ…) και έτσι οι λέξεις διαβάζονταν πιο εύκολα.',
      en: 'The Phoenician alphabet had only consonants. The Greeks added vowels (a, e, i, o, u…) so words became much easier to read.',
    },
  },

  // ── 18: geometric vases ─────────────────────────────────────────────────────
  {
    q: { el: 'Γιατί τα χρόνια αυτά ονομάζονται «Γεωμετρικά»;', en: 'Why are these years called “Geometric”?' },
    options: { el: ['Γιατί τότε ανακαλύφθηκε η γεωμετρία', 'Γιατί οι πόλεις είχαν τετράγωνο σχήμα', 'Γιατί τα αγγεία στολίζονταν με γραμμές, τρίγωνα και μαιάνδρους', 'Γιατί οι άνθρωποι φορούσαν ρούχα με κύκλους'], en: ['Because geometry was discovered then', 'Because the cities were square-shaped', 'Because vases were decorated with lines, triangles and meanders', 'Because people wore clothes with circles'] },
    correct: 2,
    explanation: {
      el: 'Οι αγγειοπλάστες στόλιζαν τα αγγεία με γεωμετρικά σχήματα: ευθείες γραμμές, τρίγωνα, κύκλους και μαιάνδρους. Γι\' αυτό η εποχή λέγεται Γεωμετρική.',
      en: 'Potters decorated their vases with geometric shapes: straight lines, triangles, circles and meanders. That is why the period is called Geometric.',
    },
  },
];
