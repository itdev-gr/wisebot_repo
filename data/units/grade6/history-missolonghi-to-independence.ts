/**
 * ΣΤ' Δημοτικού · Ιστορία · Από το Μεσολόγγι στην Ανεξαρτησία
 * ============================================================
 * Original questions on the last years of the Greek Revolution (language level: 11–12).
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–4   Missolonghi: where it is, the siege, the Exodus of 1826
 *   5–6   Georgios Karaiskakis and the fight around Athens
 *   7–9   the Philhellenes and Lord Byron
 *   10–13 the naval battle of Navarino, 1827
 *   14–17 Ioannis Kapodistrias, first Governor, and Nafplio, first capital
 *   18    the recognition of independence, 1830
 * Distractors are the real mix-ups: neighbouring years, other heroes, other towns.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_HISTORY_MISSOLONGHI_TO_INDEPENDENCE: QuizQuestion[] = [
  // ── 1–4: Missolonghi ───────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποια περιοχή της Ελλάδας βρίσκεται το Μεσολόγγι;', en: 'In which part of Greece is Missolonghi?' },
    options: { el: ['Στη Δυτική Ελλάδα', 'Στην Κρήτη', 'Στη Μακεδονία', 'Στα Δωδεκάνησα'], en: ['In Western Greece', 'In Crete', 'In Macedonia', 'In the Dodecanese'] },
    correct: 0,
    explanation: {
      el: 'Το Μεσολόγγι είναι μια μικρή πόλη δίπλα στη λιμνοθάλασσα, στη Δυτική Ελλάδα. Οι κάτοικοί του ήταν ψαράδες και ναυτικοί.',
      en: 'Missolonghi is a small town beside a lagoon in Western Greece. Its people were fishermen and sailors.',
    },
  },
  {
    q: { el: 'Τι σημαίνει ότι το Μεσολόγγι ήταν «πολιορκημένο»;', en: 'What does it mean that Missolonghi was «besieged»?' },
    options: { el: ['Ότι είχε πολλούς επισκέπτες', 'Ότι ο εχθρικός στρατός το είχε περικυκλώσει', 'Ότι είχε πλημμυρίσει από τη λίμνη', 'Ότι είχε γίνει πρωτεύουσα'], en: ['That it had many visitors', 'That the enemy army had surrounded it', 'That the lagoon had flooded it', 'That it had become the capital'] },
    correct: 1,
    explanation: {
      el: 'Πολιορκία σημαίνει ότι ο εχθρός κλείνει μια πόλη από παντού, ώστε να μην μπαίνει τροφή. Το Μεσολόγγι άντεξε έτσι σχεδόν έναν χρόνο.',
      en: 'A siege means the enemy closes a town off from all sides so no food can get in. Missolonghi held out like that for almost a year.',
    },
  },
  {
    q: { el: 'Ποια χρονιά έγινε η Έξοδος του Μεσολογγίου;', en: 'In which year did the Exodus of Missolonghi take place?' },
    options: { el: ['Το 1821', 'Το 1824', 'Το 1826', 'Το 1830'], en: ['In 1821', 'In 1824', 'In 1826', 'In 1830'] },
    correct: 2,
    explanation: {
      el: 'Η Έξοδος έγινε την άνοιξη του 1826. Το 1821 ξεκίνησε η Επανάσταση και το 1830 η Ελλάδα έγινε ανεξάρτητη.',
      en: 'The Exodus happened in the spring of 1826. The Revolution began in 1821, and Greece became independent in 1830.',
    },
  },
  {
    q: { el: 'Τι αποφάσισαν οι Μεσολογγίτες όταν τελείωσε η τροφή τους;', en: 'What did the people of Missolonghi decide when their food ran out?' },
    options: { el: ['Να παραδώσουν την πόλη', 'Να περιμένουν βοήθεια από τη θάλασσα', 'Να κρυφτούν στη λιμνοθάλασσα', 'Να βγουν όλοι μαζί μια νύχτα μέσα από τις εχθρικές γραμμές'], en: ['To hand over the town', 'To wait for help from the sea', 'To hide in the lagoon', 'To break out all together one night through the enemy lines'] },
    correct: 3,
    explanation: {
      el: 'Αντί να παραδοθούν, βγήκαν μια νύχτα όλοι μαζί, άντρες, γυναίκες και παιδιά. Γι\' αυτό το γεγονός λέγεται «Έξοδος».',
      en: 'Instead of surrendering, they all went out together one night, men, women and children. That is why the event is called the «Exodus».',
    },
  },

  // ── 5–6: Karaiskakis ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Γεώργιος Καραϊσκάκης;', en: 'Who was Georgios Karaiskakis?' },
    options: { el: ['Ένας οπλαρχηγός της Επανάστασης', 'Ένας Άγγλος ποιητής', 'Ο πρώτος Κυβερνήτης της Ελλάδας', 'Ένας ναύαρχος του ρωσικού στόλου'], en: ['A military leader of the Revolution', 'An English poet', 'The first Governor of Greece', 'An admiral of the Russian fleet'] },
    correct: 0,
    explanation: {
      el: 'Ο Καραϊσκάκης ήταν οπλαρχηγός, δηλαδή αρχηγός Ελλήνων πολεμιστών. Μεγάλωσε φτωχός και έγινε από τους πιο γνωστούς ήρωες του 1821.',
      en: 'Karaiskakis was a military leader, a chief of Greek fighters. He grew up poor and became one of the best-known heroes of 1821.',
    },
  },
  {
    q: { el: 'Ποια πόλη προσπαθούσε να βοηθήσει ο Καραϊσκάκης με τον στρατό του το 1827;', en: 'Which city was Karaiskakis trying to help with his army in 1827?' },
    options: { el: ['Το Ναύπλιο', 'Την Αθήνα', 'Τη Θεσσαλονίκη', 'Την Πάτρα'], en: ['Nafplio', 'Athens', 'Thessaloniki', 'Patras'] },
    correct: 1,
    explanation: {
      el: 'Η Ακρόπολη της Αθήνας ήταν πολιορκημένη και ο Καραϊσκάκης έτρεξε να τη βοηθήσει. Έχασε τη ζωή του κοντά στο Φάληρο το 1827.',
      en: 'The Acropolis of Athens was under siege and Karaiskakis rushed to help. He lost his life near Faliro in 1827.',
    },
  },

  // ── 7–9: Philhellenes and Byron ───────────────────────────────────────────
  {
    q: { el: 'Ποιοι ήταν οι Φιλέλληνες;', en: 'Who were the Philhellenes?' },
    options: { el: ['Έλληνες που ζούσαν στο εξωτερικό', 'Οι πρώτοι δάσκαλοι της Ελλάδας', 'Ξένοι που αγαπούσαν την Ελλάδα και ήρθαν να βοηθήσουν', 'Οι ναύτες του Μεσολογγίου'], en: ['Greeks who lived abroad', 'The first teachers of Greece', 'Foreigners who loved Greece and came to help', 'The sailors of Missolonghi'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη σημαίνει «φίλος των Ελλήνων». Ήταν ξένοι από την Ευρώπη και την Αμερική που έστειλαν χρήματα ή ήρθαν οι ίδιοι να πολεμήσουν.',
      en: 'The word means «friend of the Greeks». They were foreigners from Europe and America who sent money or came themselves to fight.',
    },
  },
  {
    q: { el: 'Από ποια χώρα ήταν ο λόρδος Βύρωνας;', en: 'Which country was Lord Byron from?' },
    options: { el: ['Από τη Γαλλία', 'Από τη Ρωσία', 'Από την Ιταλία', 'Από την Αγγλία'], en: ['France', 'Russia', 'Italy', 'England'] },
    correct: 3,
    explanation: {
      el: 'Ο Βύρωνας ήταν Άγγλος και ο πιο διάσημος Φιλέλληνας. Ήρθε στο Μεσολόγγι για να βοηθήσει τους Έλληνες.',
      en: 'Byron was English and the most famous Philhellene. He came to Missolonghi to help the Greeks.',
    },
  },
  {
    q: { el: 'Για τι ήταν διάσημος ο Βύρωνας πριν έρθει στην Ελλάδα;', en: 'What was Byron famous for before he came to Greece?' },
    options: { el: ['Για τα ποιήματά του', 'Για τα πλοία του', 'Για τις ζωγραφιές του', 'Για τις εφευρέσεις του'], en: ['For his poems', 'For his ships', 'For his paintings', 'For his inventions'] },
    correct: 0,
    explanation: {
      el: 'Ο Βύρωνας ήταν μεγάλος ποιητής. Με τα ποιήματά του έκανε πολλούς Ευρωπαίους να μάθουν για τον αγώνα των Ελλήνων.',
      en: 'Byron was a great poet. Through his poems, many Europeans learned about the Greeks\' struggle.',
    },
  },

  // ── 10–13: Navarino ───────────────────────────────────────────────────────
  {
    q: { el: 'Το Ναβαρίνο είναι…', en: 'Navarino is…' },
    options: { el: ['ένα βουνό στην Ήπειρο', 'ένας κόλπος στην Πελοπόννησο', 'ένα νησί στο Αιγαίο', 'ένα χωριό στη Θράκη'], en: ['a mountain in Epirus', 'a bay in the Peloponnese', 'an island in the Aegean', 'a village in Thrace'] },
    correct: 1,
    explanation: {
      el: 'Το Ναβαρίνο είναι ο κόλπος της Πύλου, στη νοτιοδυτική Πελοπόννησο. Εκεί έγινε η μεγάλη ναυμαχία.',
      en: 'Navarino is the bay of Pylos, in the south-west Peloponnese. The great sea battle took place there.',
    },
  },
  {
    q: { el: 'Ποια χρονιά έγινε η ναυμαχία του Ναβαρίνου;', en: 'In which year was the Battle of Navarino?' },
    options: { el: ['Το 1825', 'Το 1826', 'Το 1828', 'Το 1827'], en: ['In 1825', 'In 1826', 'In 1828', 'In 1827'] },
    correct: 3,
    explanation: {
      el: 'Η ναυμαχία έγινε τον Οκτώβριο του 1827, έναν χρόνο μετά την Έξοδο του Μεσολογγίου.',
      en: 'The battle took place in October 1827, one year after the Exodus of Missolonghi.',
    },
  },
  {
    q: { el: 'Ποιες τρεις χώρες έστειλαν τα πλοία τους στο Ναβαρίνο;', en: 'Which three countries sent their ships to Navarino?' },
    options: { el: ['Αγγλία, Γαλλία και Ρωσία', 'Αγγλία, Ιταλία και Ισπανία', 'Γαλλία, Γερμανία και Αυστρία', 'Ρωσία, Αίγυπτος και Ιταλία'], en: ['England, France and Russia', 'England, Italy and Spain', 'France, Germany and Austria', 'Russia, Egypt and Italy'] },
    correct: 0,
    explanation: {
      el: 'Οι τρεις Μεγάλες Δυνάμεις, Αγγλία, Γαλλία και Ρωσία, ένωσαν τους στόλους τους. Αντίπαλός τους ήταν ο στόλος των Οθωμανών και των Αιγυπτίων.',
      en: 'The three Great Powers, England, France and Russia, joined their fleets. Their opponent was the Ottoman and Egyptian fleet.',
    },
  },
  {
    q: { el: 'Γιατί ήταν τόσο σημαντική η ναυμαχία του Ναβαρίνου για τους Έλληνες;', en: 'Why was the Battle of Navarino so important for the Greeks?' },
    options: { el: ['Γιατί οι Έλληνες απέκτησαν νέο στόλο', 'Γιατί ο εχθρικός στόλος καταστράφηκε και η ελευθερία ήρθε πιο κοντά', 'Γιατί ο Βύρωνας έγινε αρχηγός', 'Γιατί ελευθερώθηκε η Κρήτη'], en: ['Because the Greeks got a new fleet', 'Because the enemy fleet was destroyed and freedom came closer', 'Because Byron became the leader', 'Because Crete was freed'] },
    correct: 1,
    explanation: {
      el: 'Χωρίς στόλο, ο εχθρός δεν μπορούσε πια να φέρει στρατό στην Πελοπόννησο. Μετά το Ναβαρίνο, η ανεξαρτησία ήταν θέμα χρόνου.',
      en: 'Without a fleet, the enemy could no longer bring troops to the Peloponnese. After Navarino, independence was only a matter of time.',
    },
  },

  // ── 14–17: Kapodistrias and Nafplio ───────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο πρώτος Κυβερνήτης της Ελλάδας;', en: 'Who was the first Governor of Greece?' },
    options: { el: ['Ο Θεόδωρος Κολοκοτρώνης', 'Ο Γεώργιος Καραϊσκάκης', 'Ο Ιωάννης Καποδίστριας', 'Ο Ανδρέας Μιαούλης'], en: ['Theodoros Kolokotronis', 'Georgios Karaiskakis', 'Ioannis Kapodistrias', 'Andreas Miaoulis'] },
    correct: 2,
    explanation: {
      el: 'Ο Καποδίστριας ήρθε στην Ελλάδα το 1828 ως ο πρώτος Κυβερνήτης. Ο Κολοκοτρώνης και ο Μιαούλης ήταν στρατιωτικοί αρχηγοί, όχι κυβερνήτες.',
      en: 'Kapodistrias came to Greece in 1828 as the first Governor. Kolokotronis and Miaoulis were military leaders, not governors.',
    },
  },
  {
    q: { el: 'Από ποιο νησί καταγόταν ο Καποδίστριας;', en: 'Which island did Kapodistrias come from?' },
    options: { el: ['Από την Ύδρα', 'Από την Κέρκυρα', 'Από τη Χίο', 'Από τη Ρόδο'], en: ['Hydra', 'Corfu', 'Chios', 'Rhodes'] },
    correct: 1,
    explanation: {
      el: 'Ο Καποδίστριας γεννήθηκε στην Κέρκυρα. Πριν έρθει στην Ελλάδα, είχε δουλέψει ως σπουδαίος διπλωμάτης στη Ρωσία.',
      en: 'Kapodistrias was born in Corfu. Before coming to Greece, he had worked as an important diplomat in Russia.',
    },
  },
  {
    q: { el: 'Ποια πόλη ήταν η πρώτη πρωτεύουσα του ελληνικού κράτους;', en: 'Which city was the first capital of the Greek state?' },
    options: { el: ['Η Αθήνα', 'Το Μεσολόγγι', 'Η Τρίπολη', 'Το Ναύπλιο'], en: ['Athens', 'Missolonghi', 'Tripoli', 'Nafplio'] },
    correct: 3,
    explanation: {
      el: 'Το Ναύπλιο, με το κάστρο του Παλαμηδιού, ήταν η πρώτη πρωτεύουσα. Η Αθήνα έγινε πρωτεύουσα αργότερα, το 1834.',
      en: 'Nafplio, with its Palamidi castle, was the first capital. Athens became the capital later, in 1834.',
    },
  },
  {
    q: { el: 'Τι από τα παρακάτω έκανε ο Καποδίστριας ως Κυβερνήτης;', en: 'Which of these did Kapodistrias do as Governor?' },
    options: { el: ['Ίδρυσε σχολεία και οργάνωσε το νέο κράτος', 'Έχτισε τον Παρθενώνα', 'Μετέφερε την πρωτεύουσα στην Κρήτη', 'Έγινε βασιλιάς της Ελλάδας'], en: ['He founded schools and organised the new state', 'He built the Parthenon', 'He moved the capital to Crete', 'He became king of Greece'] },
    correct: 0,
    explanation: {
      el: 'Ο Καποδίστριας βρήκε μια χώρα χωρίς χρήματα και χωρίς νόμους. Ίδρυσε σχολεία, ορφανοτροφείο, στρατό και τα πρώτα ελληνικά νομίσματα.',
      en: 'Kapodistrias found a country with no money and no laws. He founded schools, an orphanage, an army and the first Greek coins.',
    },
  },

  // ── 18: independence ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια χρονιά αναγνωρίστηκε η Ελλάδα ως ανεξάρτητο κράτος;', en: 'In which year was Greece recognised as an independent state?' },
    options: { el: ['Το 1821', 'Το 1827', 'Το 1830', 'Το 1834'], en: ['In 1821', 'In 1827', 'In 1830', 'In 1834'] },
    correct: 2,
    explanation: {
      el: 'Το 1830, οι Μεγάλες Δυνάμεις υπέγραψαν στο Λονδίνο ότι η Ελλάδα είναι ελεύθερο και ανεξάρτητο κράτος. Ήταν το τέλος ενός αγώνα εννέα χρόνων.',
      en: 'In 1830, the Great Powers signed in London that Greece was a free and independent state. It was the end of a nine-year struggle.',
    },
  },
];
