/**
 * Ε' Δημοτικού · Γεωγραφία · Πληθυσμός, Περιφέρειες & Οικονομία
 * ===============================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–4   the people of Greece: about 10 million, most live in cities, the capital Athens
 *   5–7   the big cities: Thessaloniki (north), Patras (Peloponnese), what a "region" is
 *   8–9   the 13 regions, with Attica, Crete and Central Macedonia as anchors
 *   10–14 how Greeks make a living: olives, fishing, shipping, tourism, the service economy
 *   15–18 Greece in the wider world: the European Union, the euro, Cyprus and its capital Nicosia
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GEOGRAPHY_PEOPLE_REGIONS_ECONOMY: QuizQuestion[] = [
  // ── 1–4: the people of Greece ─────────────────────────────────────────────
  {
    q: { el: 'Πόσοι άνθρωποι ζουν περίπου στην Ελλάδα;', en: 'About how many people live in Greece?' },
    options: { el: ['Περίπου 1 εκατομμύριο', 'Περίπου 10 εκατομμύρια', 'Περίπου 100 εκατομμύρια', 'Περίπου 500 χιλιάδες'], en: ['About 1 million', 'About 10 million', 'About 100 million', 'About 500 thousand'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα έχει περίπου 10 εκατομμύρια κατοίκους. Αν γέμιζες 100 μεγάλα γήπεδα, πάλι δεν θα χωρούσαν όλοι!',
      en: 'Greece has about 10 million people. Even 100 big stadiums could not fit everyone!',
    },
  },
  {
    q: { el: 'Ποια είναι η πρωτεύουσα της Ελλάδας;', en: 'What is the capital city of Greece?' },
    options: { el: ['Η Θεσσαλονίκη', 'Η Πάτρα', 'Η Αθήνα', 'Το Ηράκλειο'], en: ['Thessaloniki', 'Patras', 'Athens', 'Heraklion'] },
    correct: 2,
    explanation: {
      el: 'Η Αθήνα είναι η πρωτεύουσα της Ελλάδας. Εκεί βρίσκονται η Βουλή και η Ακρόπολη.',
      en: 'Athens is the capital of Greece. The Parliament and the Acropolis are there.',
    },
  },
  {
    q: { el: 'Οι περισσότεροι Έλληνες σήμερα ζουν…', en: 'Today, most Greeks live…' },
    options: { el: ['σε μεγάλες πόλεις', 'σε μικρά χωριά στα βουνά', 'σε νησιά', 'σε αγροκτήματα'], en: ['in big cities', 'in small mountain villages', 'on islands', 'on farms'] },
    correct: 0,
    explanation: {
      el: 'Οι περισσότεροι Έλληνες ζουν σε πόλεις, γιατί εκεί υπάρχουν δουλειές, σχολεία και νοσοκομεία. Παλιά ζούσαν κυρίως σε χωριά.',
      en: 'Most Greeks live in cities, because that is where the jobs, schools and hospitals are. Long ago most lived in villages.',
    },
  },
  {
    q: { el: 'Σε ποια πόλη ζουν οι περισσότεροι άνθρωποι στην Ελλάδα;', en: 'Which city in Greece has the most people?' },
    options: { el: ['Στην Πάτρα', 'Στη Θεσσαλονίκη', 'Στη Λάρισα', 'Στην Αθήνα'], en: ['Patras', 'Thessaloniki', 'Larissa', 'Athens'] },
    correct: 3,
    explanation: {
      el: 'Η Αθήνα μαζί με τις γύρω πόλεις της είναι η μεγαλύτερη. Σχεδόν ένας στους τρεις Έλληνες ζει εκεί!',
      en: 'Athens and the towns around it form the biggest city. Almost one in three Greeks lives there!',
    },
  },

  // ── 5–7: the big cities and the idea of a region ──────────────────────────
  {
    q: { el: 'Ποια είναι η δεύτερη μεγαλύτερη πόλη της Ελλάδας;', en: 'Which is the second biggest city in Greece?' },
    options: { el: ['Η Πάτρα', 'Η Θεσσαλονίκη', 'Ο Βόλος', 'Τα Ιωάννινα'], en: ['Patras', 'Thessaloniki', 'Volos', 'Ioannina'] },
    correct: 1,
    explanation: {
      el: 'Η Θεσσαλονίκη είναι η δεύτερη μεγαλύτερη πόλη. Βρίσκεται στη βόρεια Ελλάδα, δίπλα στη θάλασσα, και έχει τον Λευκό Πύργο.',
      en: 'Thessaloniki is the second biggest city. It is in northern Greece, by the sea, and has the White Tower.',
    },
  },
  {
    q: { el: 'Η Πάτρα είναι η τρίτη μεγαλύτερη πόλη. Σε ποιο μέρος της Ελλάδας βρίσκεται;', en: 'Patras is the third biggest city. In which part of Greece is it?' },
    options: { el: ['Στην Κρήτη', 'Στη Μακεδονία', 'Στην Πελοπόννησο', 'Στη Θράκη'], en: ['In Crete', 'In Macedonia', 'In the Peloponnese', 'In Thrace'] },
    correct: 2,
    explanation: {
      el: 'Η Πάτρα βρίσκεται στη βορειοδυτική Πελοπόννησο. Έχει μεγάλο λιμάνι και από εκεί φεύγουν πλοία για την Ιταλία.',
      en: 'Patras is in the north-west of the Peloponnese. It has a big port, and ships leave from there for Italy.',
    },
  },
  {
    q: { el: 'Τι είναι μια «περιφέρεια»;', en: 'What is a "region" (περιφέρεια)?' },
    options: { el: ['Ένα μεγάλο κομμάτι της χώρας με δική του διοίκηση', 'Μια γειτονιά μέσα σε μια πόλη', 'Ένα νησί', 'Ο δρόμος γύρω από μια πόλη'], en: ['A large part of the country with its own local government', 'A neighbourhood inside a city', 'An island', 'The road that goes around a city'] },
    correct: 0,
    explanation: {
      el: 'Η Ελλάδα χωρίζεται σε μεγάλα κομμάτια, τις περιφέρειες. Κάθε περιφέρεια έχει δική της διοίκηση που φροντίζει δρόμους, σχολεία και άλλα.',
      en: 'Greece is divided into large parts called regions. Each region has its own local government that looks after roads, schools and more.',
    },
  },

  // ── 8–9: the 13 regions ───────────────────────────────────────────────────
  {
    q: { el: 'Σε πόσες περιφέρειες χωρίζεται η Ελλάδα;', en: 'How many regions is Greece divided into?' },
    options: { el: ['5', '9', '13', '20'], en: ['5', '9', '13', '20'] },
    correct: 2,
    explanation: {
      el: 'Η Ελλάδα έχει 13 περιφέρειες, όπως η Αττική, η Κρήτη, η Κεντρική Μακεδονία, η Πελοπόννησος και η Θεσσαλία.',
      en: 'Greece has 13 regions, such as Attica, Crete, Central Macedonia, the Peloponnese and Thessaly.',
    },
  },
  {
    q: { el: 'Σε ποια περιφέρεια ανήκει η Αθήνα;', en: 'Which region does Athens belong to?' },
    options: { el: ['Στη Θεσσαλία', 'Στην Αττική', 'Στη Στερεά Ελλάδα', 'Στην Πελοπόννησο'], en: ['Thessaly', 'Attica', 'Central Greece', 'The Peloponnese'] },
    correct: 1,
    explanation: {
      el: 'Η Αθήνα ανήκει στην περιφέρεια Αττικής. Είναι η πιο μικρή σε έκταση περιφέρεια, αλλά έχει τους περισσότερους κατοίκους.',
      en: 'Athens belongs to the region of Attica. It is the smallest region in size, but it has the most people.',
    },
  },

  // ── 10–14: how Greeks make a living ───────────────────────────────────────
  {
    q: { el: 'Ποιο δέντρο φυτρώνει σχεδόν παντού στην Ελλάδα και μας δίνει λάδι;', en: 'Which tree grows almost everywhere in Greece and gives us oil?' },
    options: { el: ['Η μηλιά', 'Το έλατο', 'Η ελιά', 'Η πορτοκαλιά'], en: ['The apple tree', 'The fir tree', 'The olive tree', 'The orange tree'] },
    correct: 2,
    explanation: {
      el: 'Η ελιά αγαπάει τον ήλιο και το ξηρό κλίμα της Ελλάδας. Από τον καρπό της φτιάχνουμε το ελαιόλαδο.',
      en: 'The olive tree loves the sun and the dry climate of Greece. From its fruit we make olive oil.',
    },
  },
  {
    q: { el: 'Ο Νίκος είναι ψαράς σε ένα νησί. Γιατί η αλιεία (το ψάρεμα) είναι σημαντική δουλειά στην Ελλάδα;', en: 'Nikos is a fisherman on an island. Why is fishing an important job in Greece?' },
    options: { el: ['Γιατί η Ελλάδα έχει πολλά μεγάλα ποτάμια', 'Γιατί η Ελλάδα έχει πολύ μεγάλη ακτογραμμή και χιλιάδες νησιά', 'Γιατί δεν υπάρχουν χωράφια στην Ελλάδα', 'Γιατί τα ψάρια ζουν μόνο σε ζεστές θάλασσες'], en: ['Because Greece has many big rivers', 'Because Greece has a very long coastline and thousands of islands', 'Because there are no fields in Greece', 'Because fish only live in warm seas'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα είναι γεμάτη θάλασσα: έχει τεράστια ακτογραμμή και χιλιάδες νησιά. Γι\' αυτό πολλοί άνθρωποι ζουν από το ψάρεμα.',
      en: 'Greece is full of sea: it has a huge coastline and thousands of islands. That is why many people make a living from fishing.',
    },
  },
  {
    q: { el: 'Η Ελλάδα έχει έναν από τους μεγαλύτερους στόλους στον κόσμο. Στόλο από τι;', en: 'Greece has one of the biggest fleets in the world. A fleet of what?' },
    options: { el: ['Από αεροπλάνα', 'Από τρένα', 'Από εμπορικά πλοία', 'Από λεωφορεία'], en: ['Aeroplanes', 'Trains', 'Cargo ships', 'Buses'] },
    correct: 2,
    explanation: {
      el: 'Οι Έλληνες εφοπλιστές έχουν χιλιάδες εμπορικά πλοία που μεταφέρουν πετρέλαιο, σιτάρι και κοντέινερ σε όλον τον κόσμο. Αυτό λέγεται ναυτιλία.',
      en: 'Greek shipowners have thousands of cargo ships that carry oil, wheat and containers all over the world. This is called shipping.',
    },
  },
  {
    q: { el: 'Κάθε καλοκαίρι εκατομμύρια ξένοι επισκέπτονται την Ελλάδα. Πώς λέγεται αυτός ο κλάδος της οικονομίας;', en: 'Every summer millions of foreigners visit Greece. What is this part of the economy called?' },
    options: { el: ['Γεωργία', 'Τουρισμός', 'Βιομηχανία', 'Κτηνοτροφία'], en: ['Farming', 'Tourism', 'Industry', 'Livestock farming'] },
    correct: 1,
    explanation: {
      el: 'Ο τουρισμός είναι από τις πιο σημαντικές δουλειές στην Ελλάδα. Οι επισκέπτες έρχονται για τον ήλιο, τη θάλασσα και τα αρχαία μνημεία.',
      en: 'Tourism is one of the most important businesses in Greece. Visitors come for the sun, the sea and the ancient monuments.',
    },
  },
  {
    q: { el: 'Η Ελένη δουλεύει σε ξενοδοχείο, ο μπαμπάς της είναι δάσκαλος και η θεία της γιατρός. Όλοι αυτοί δουλεύουν…', en: 'Eleni works in a hotel, her dad is a teacher and her aunt is a doctor. They all work…' },
    options: { el: ['στον πρωτογενή τομέα (γεωργία, αλιεία)', 'στον δευτερογενή τομέα (εργοστάσια)', 'στον τριτογενή τομέα (υπηρεσίες)', 'σε κανέναν τομέα'], en: ['in the primary sector (farming, fishing)', 'in the secondary sector (factories)', 'in the tertiary sector (services)', 'in no sector at all'] },
    correct: 2,
    explanation: {
      el: 'Όσοι προσφέρουν υπηρεσίες — ξενοδοχεία, σχολεία, νοσοκομεία, καταστήματα — ανήκουν στον τριτογενή τομέα. Στην Ελλάδα εκεί δουλεύουν οι περισσότεροι άνθρωποι.',
      en: 'People who offer services — hotels, schools, hospitals, shops — belong to the tertiary sector. In Greece most people work there.',
    },
  },

  // ── 15–18: Greece in the wider world ──────────────────────────────────────
  {
    q: { el: 'Η Ελλάδα είναι μέλος μιας μεγάλης «παρέας» ευρωπαϊκών χωρών που συνεργάζονται. Πώς λέγεται;', en: 'Greece is a member of a big "club" of European countries that work together. What is it called?' },
    options: { el: ['Ευρωπαϊκή Ένωση', 'Ηνωμένα Έθνη', 'Βαλκανική Ένωση', 'Μεσογειακή Συμμαχία'], en: ['The European Union', 'The United Nations', 'The Balkan Union', 'The Mediterranean Alliance'] },
    correct: 0,
    explanation: {
      el: 'Η Ελλάδα ανήκει στην Ευρωπαϊκή Ένωση (ΕΕ), μαζί με 26 ακόμη χώρες. Οι χώρες της ΕΕ συνεργάζονται στο εμπόριο, στη μόρφωση και σε πολλά άλλα.',
      en: 'Greece belongs to the European Union (EU), together with 26 other countries. EU countries work together in trade, education and much more.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ταξιδεύει από την Αθήνα στη Γαλλία και στην Ιταλία. Ποιο νόμισμα θα χρησιμοποιήσει και στις τρεις χώρες;', en: 'Giorgos travels from Athens to France and Italy. Which money will he use in all three countries?' },
    options: { el: ['Τη δραχμή', 'Το ευρώ', 'Το δολάριο', 'Τη λίρα'], en: ['The drachma', 'The euro', 'The dollar', 'The pound'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα, η Γαλλία και η Ιταλία χρησιμοποιούν το ευρώ (€), το κοινό νόμισμα πολλών χωρών της ΕΕ. Η δραχμή ήταν το παλιό ελληνικό νόμισμα.',
      en: 'Greece, France and Italy all use the euro (€), the shared money of many EU countries. The drachma was the old Greek money.',
    },
  },
  {
    q: { el: 'Η Κύπρος είναι ένα νησί στη Μεσόγειο όπου οι περισσότεροι κάτοικοι μιλούν ελληνικά. Ποια είναι η πρωτεύουσά της;', en: 'Cyprus is an island in the Mediterranean where most people speak Greek. What is its capital?' },
    options: { el: ['Η Λεμεσός', 'Η Λάρνακα', 'Η Λευκωσία', 'Η Πάφος'], en: ['Limassol', 'Larnaca', 'Nicosia', 'Paphos'] },
    correct: 2,
    explanation: {
      el: 'Η πρωτεύουσα της Κύπρου είναι η Λευκωσία, στο κέντρο του νησιού. Η Λεμεσός, η Λάρνακα και η Πάφος είναι παραθαλάσσιες πόλεις.',
      en: 'The capital of Cyprus is Nicosia, in the middle of the island. Limassol, Larnaca and Paphos are cities by the sea.',
    },
  },
  {
    q: { el: 'Ποια πρόταση για την Κύπρο είναι σωστή;', en: 'Which sentence about Cyprus is correct?' },
    options: { el: ['Είναι μια περιφέρεια της Ελλάδας', 'Είναι ξεχωριστή χώρα, μέλος της ΕΕ, με το ευρώ', 'Είναι νησί του Ιονίου πελάγους', 'Δεν ανήκει στην Ευρωπαϊκή Ένωση'], en: ['It is a region of Greece', 'It is a separate country, an EU member that uses the euro', 'It is an island in the Ionian Sea', 'It does not belong to the European Union'] },
    correct: 1,
    explanation: {
      el: 'Η Κύπρος είναι ξεχωριστό κράτος, όχι περιφέρεια της Ελλάδας. Είναι μέλος της ΕΕ και χρησιμοποιεί το ευρώ. Βρίσκεται στην ανατολική Μεσόγειο.',
      en: 'Cyprus is a separate country, not a region of Greece. It is an EU member and uses the euro. It lies in the eastern Mediterranean.',
    },
  },
];
