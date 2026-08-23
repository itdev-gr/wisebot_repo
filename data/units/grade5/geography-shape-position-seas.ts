/**
 * Ε' Δημοτικού · Γεωγραφία · Θέση, Ακτές & Θάλασσες
 * ================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–3   where Greece is: Europe, the tip of the Balkan peninsula, a land with sea on three sides
 *   4–5   land borders: the four neighbouring countries, and who is NOT a neighbour
 *   6–10  the seas: Aegean (east, islands), Ionian (west, Corfu–Zakynthos), Cretan Sea, Crete
 *   11–13 gulfs: what a gulf is, the Corinthian gulf, the Thermaic and Saronic gulfs
 *   14–16 the Peloponnese, the Isthmus and the Corinth canal
 *   17–18 the coastline: why it is so long, what "ακτογραμμή" means
 *
 * Distractors are the mixes children really make: Aegean/Ionian swapped, Italy as a land
 * neighbour, Crete vs Euboea, "canal" vs "bridge", gulf vs peninsula. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GEOGRAPHY_SHAPE_POSITION_SEAS: QuizQuestion[] = [
  // ── 1–3: where Greece is ───────────────────────────────────────────────────
  {
    q: { el: 'Σε ποια ήπειρο βρίσκεται η Ελλάδα;', en: 'Which continent is Greece in?' },
    options: { el: ['Στην Ασία', 'Στην Αφρική', 'Στην Ευρώπη', 'Στην Αμερική'], en: ['Asia', 'Africa', 'Europe', 'America'] },
    correct: 2,
    explanation: {
      el: 'Η Ελλάδα βρίσκεται στη νοτιοανατολική Ευρώπη. Η Ασία και η Αφρική είναι κοντά, αλλά πέρα από τη θάλασσα.',
      en: 'Greece is in south-eastern Europe. Asia and Africa are close, but across the sea.',
    },
  },
  {
    q: { el: 'Η Ελλάδα βρίσκεται στο νότιο άκρο μιας μεγάλης χερσονήσου. Πώς λέγεται;', en: 'Greece sits at the southern tip of a big peninsula. What is it called?' },
    options: { el: ['Ιβηρική χερσόνησος', 'Βαλκανική χερσόνησος', 'Ιταλική χερσόνησος', 'Σκανδιναβική χερσόνησος'], en: ['Iberian peninsula', 'Balkan peninsula', 'Italian peninsula', 'Scandinavian peninsula'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα είναι η νότια άκρη της Βαλκανικής χερσονήσου. Η Ιβηρική είναι η Ισπανία με την Πορτογαλία, η Σκανδιναβική είναι στον Βορρά.',
      en: 'Greece is the southern end of the Balkan peninsula. The Iberian one is Spain and Portugal; the Scandinavian one is far north.',
    },
  },
  {
    q: { el: 'Η Ελλάδα έχει θάλασσα γύρω της σχεδόν παντού. Από ποια πλευρά ΔΕΝ έχει θάλασσα, αλλά στεριά;', en: 'Greece has sea around it almost everywhere. On which side is there land instead of sea?' },
    options: { el: ['Από τον Βορρά', 'Από τον Νότο', 'Από την Ανατολή', 'Από τη Δύση'], en: ['The north', 'The south', 'The east', 'The west'] },
    correct: 0,
    explanation: {
      el: 'Ανατολικά, δυτικά και νότια η Ελλάδα βρέχεται από θάλασσα. Μόνο στον Βορρά συνορεύει με άλλες χώρες από τη στεριά.',
      en: 'To the east, west and south Greece is washed by sea. Only in the north does it touch other countries by land.',
    },
  },

  // ── 4–5: land borders ──────────────────────────────────────────────────────
  {
    q: { el: 'Πόσες χώρες συνορεύουν με την Ελλάδα από τη στεριά;', en: 'How many countries share a land border with Greece?' },
    options: { el: ['Δύο', 'Τρεις', 'Τέσσερις', 'Έξι'], en: ['Two', 'Three', 'Four', 'Six'] },
    correct: 2,
    explanation: {
      el: 'Τέσσερις: Αλβανία, Βόρεια Μακεδονία, Βουλγαρία και Τουρκία. Όλες βρίσκονται στα βόρεια και βορειοανατολικά σύνορα.',
      en: 'Four: Albania, North Macedonia, Bulgaria and Turkey. They all lie along the northern and north-eastern border.',
    },
  },
  {
    q: { el: 'Ο Νίκος λέει ότι η Ιταλία συνορεύει με την Ελλάδα από τη στεριά. Έχει δίκιο;', en: 'Nikos says Italy shares a land border with Greece. Is he right?' },
    options: { el: ['Ναι, στα βόρεια', 'Όχι, ανάμεσά τους είναι το Ιόνιο πέλαγος', 'Ναι, στα ανατολικά', 'Όχι, ανάμεσά τους είναι το Αιγαίο πέλαγος'], en: ['Yes, in the north', 'No, the Ionian Sea lies between them', 'Yes, in the east', 'No, the Aegean Sea lies between them'] },
    correct: 1,
    explanation: {
      el: 'Η Ιταλία είναι γείτονας, αλλά από τη θάλασσα: τις χωρίζει το Ιόνιο πέλαγος. Στεριανά σύνορα έχουμε μόνο στον Βορρά.',
      en: 'Italy is a neighbour, but across the sea: the Ionian Sea separates them. Land borders are only in the north.',
    },
  },

  // ── 6–10: the seas ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια θάλασσα βρέχει την ΑΝΑΤΟΛΙΚΗ πλευρά της Ελλάδας;', en: 'Which sea washes the EASTERN side of Greece?' },
    options: { el: ['Το Ιόνιο πέλαγος', 'Η Μαύρη θάλασσα', 'Η Αδριατική θάλασσα', 'Το Αιγαίο πέλαγος'], en: ['The Ionian Sea', 'The Black Sea', 'The Adriatic Sea', 'The Aegean Sea'] },
    correct: 3,
    explanation: {
      el: 'Το Αιγαίο πέλαγος βρίσκεται ανατολικά, ανάμεσα στην Ελλάδα και την Τουρκία. Το Ιόνιο είναι από την άλλη, δυτική πλευρά.',
      en: 'The Aegean Sea is to the east, between Greece and Turkey. The Ionian is on the other, western side.',
    },
  },
  {
    q: { el: 'Η Ελένη ταξιδεύει με πλοίο στις Κυκλάδες, ανάμεσα σε δεκάδες μικρά νησιά. Σε ποιο πέλαγος βρίσκεται;', en: 'Eleni is sailing through the Cyclades, among dozens of small islands. Which sea is she in?' },
    options: { el: ['Στο Αιγαίο', 'Στο Ιόνιο', 'Στην Αδριατική', 'Στη Μαύρη θάλασσα'], en: ['The Aegean', 'The Ionian', 'The Adriatic', 'The Black Sea'] },
    correct: 0,
    explanation: {
      el: 'Οι Κυκλάδες, οι Σποράδες και τα Δωδεκάνησα είναι νησιά του Αιγαίου. Το Αιγαίο είναι γεμάτο νησιά, σαν πέτρες πεταμένες στο νερό.',
      en: 'The Cyclades, the Sporades and the Dodecanese are Aegean islands. The Aegean is full of islands, like stones scattered on the water.',
    },
  },
  {
    q: { el: 'Η Κέρκυρα, η Κεφαλονιά και η Ζάκυνθος είναι νησιά που βρίσκονται…', en: 'Corfu, Kefalonia and Zakynthos are islands that lie…' },
    options: { el: ['στο Αιγαίο, ανατολικά', 'στο Ιόνιο, δυτικά', 'στο Κρητικό πέλαγος', 'στη Μαύρη θάλασσα'], en: ['in the Aegean, to the east', 'in the Ionian, to the west', 'in the Cretan Sea', 'in the Black Sea'] },
    correct: 1,
    explanation: {
      el: 'Είναι τα Ιόνια νησιά ή Επτάνησα, στη δυτική πλευρά της Ελλάδας. Το Ιόνιο πέλαγος είναι ανάμεσα στην Ελλάδα και την Ιταλία.',
      en: 'They are the Ionian Islands, on the western side of Greece. The Ionian Sea lies between Greece and Italy.',
    },
  },
  {
    q: { el: 'Ποιο είναι το μεγαλύτερο νησί της Ελλάδας;', en: 'Which is the largest island of Greece?' },
    options: { el: ['Η Εύβοια', 'Η Ρόδος', 'Η Κρήτη', 'Η Λέσβος'], en: ['Euboea', 'Rhodes', 'Crete', 'Lesbos'] },
    correct: 2,
    explanation: {
      el: 'Η Κρήτη είναι το μεγαλύτερο ελληνικό νησί, στο νότιο άκρο της χώρας. Δεύτερη έρχεται η Εύβοια.',
      en: 'Crete is the biggest Greek island, at the southern edge of the country. Euboea comes second.',
    },
  },
  {
    q: { el: 'Το Κρητικό πέλαγος βρίσκεται…', en: 'The Cretan Sea lies…' },
    options: { el: ['ανάμεσα στην Κρήτη και τις Κυκλάδες', 'ανάμεσα στην Κρήτη και την Αφρική', 'ανάμεσα στην Κέρκυρα και την Ιταλία', 'ανάμεσα στη Ρόδο και την Τουρκία'], en: ['between Crete and the Cyclades', 'between Crete and Africa', 'between Corfu and Italy', 'between Rhodes and Turkey'] },
    correct: 0,
    explanation: {
      el: 'Το Κρητικό πέλαγος είναι το νότιο κομμάτι του Αιγαίου, βόρεια της Κρήτης, μέχρι τις Κυκλάδες. Νότια της Κρήτης αρχίζει το Λιβυκό πέλαγος.',
      en: 'The Cretan Sea is the southern part of the Aegean, north of Crete, up to the Cyclades. South of Crete begins the Libyan Sea.',
    },
  },

  // ── 11–13: gulfs ───────────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι ο κόλπος;', en: 'What is a gulf?' },
    options: { el: ['Ένα κομμάτι στεριάς που μπαίνει μέσα στη θάλασσα', 'Ένα κομμάτι θάλασσας που μπαίνει μέσα στη στεριά', 'Ένα στενό πέρασμα ανάμεσα σε δύο νησιά', 'Ένα μικρό νησί κοντά στην ακτή'], en: ['A piece of land that pushes into the sea', 'A piece of sea that pushes into the land', 'A narrow passage between two islands', 'A small island near the coast'] },
    correct: 1,
    explanation: {
      el: 'Κόλπος είναι θάλασσα που «μπαίνει» μέσα στη στεριά, σαν μια μεγάλη αγκαλιά. Το αντίθετο, στεριά μέσα στη θάλασσα, λέγεται χερσόνησος.',
      en: 'A gulf is sea that “enters” the land, like a big hug. The opposite, land pushing into the sea, is a peninsula.',
    },
  },
  {
    q: { el: 'Ποιος κόλπος χωρίζει την Πελοπόννησο από τη Στερεά Ελλάδα;', en: 'Which gulf separates the Peloponnese from Central Greece?' },
    options: { el: ['Ο Θερμαϊκός κόλπος', 'Ο Παγασητικός κόλπος', 'Ο Κορινθιακός κόλπος', 'Ο Αμβρακικός κόλπος'], en: ['The Thermaic Gulf', 'The Pagasetic Gulf', 'The Corinthian Gulf', 'The Ambracian Gulf'] },
    correct: 2,
    explanation: {
      el: 'Ο Κορινθιακός κόλπος είναι σαν μακρύς διάδρομος νερού ανάμεσα στην Πελοπόννησο (νότια) και τη Στερεά Ελλάδα (βόρεια).',
      en: 'The Corinthian Gulf is like a long corridor of water between the Peloponnese (south) and Central Greece (north).',
    },
  },
  {
    q: { el: 'Ο Γιώργος στέκεται στην παραλία της Θεσσαλονίκης και κοιτάζει τη θάλασσα. Ποιον κόλπο βλέπει;', en: 'Giorgos stands on the Thessaloniki waterfront looking at the sea. Which gulf is he seeing?' },
    options: { el: ['Τον Σαρωνικό κόλπο', 'Τον Θερμαϊκό κόλπο', 'Τον Κορινθιακό κόλπο', 'Τον Μεσσηνιακό κόλπο'], en: ['The Saronic Gulf', 'The Thermaic Gulf', 'The Corinthian Gulf', 'The Messenian Gulf'] },
    correct: 1,
    explanation: {
      el: 'Η Θεσσαλονίκη είναι χτισμένη στον Θερμαϊκό κόλπο, στη Μακεδονία. Ο Σαρωνικός είναι ο κόλπος της Αθήνας και του Πειραιά.',
      en: 'Thessaloniki is built on the Thermaic Gulf, in Macedonia. The Saronic is the gulf of Athens and Piraeus.',
    },
  },

  // ── 14–16: the Peloponnese and the Corinth canal ───────────────────────────
  {
    q: { el: 'Η Πελοπόννησος είναι…', en: 'The Peloponnese is…' },
    options: { el: ['το μεγάλο νότιο κομμάτι της ηπειρωτικής Ελλάδας', 'ένα νησί του Αιγαίου', 'η βόρεια περιοχή της Ελλάδας', 'μια χώρα που συνορεύει με την Ελλάδα'], en: ['the big southern part of mainland Greece', 'an island in the Aegean', 'the northern region of Greece', 'a country that borders Greece'] },
    correct: 0,
    explanation: {
      el: 'Η Πελοπόννησος είναι το νότιο κομμάτι της ηπειρωτικής Ελλάδας. Μοιάζει με φύλλο πλατάνου ή με χέρι με ανοιχτά δάχτυλα.',
      en: 'The Peloponnese is the southern part of mainland Greece. It looks like a plane-tree leaf, or a hand with open fingers.',
    },
  },
  {
    q: { el: 'Πώς λέγεται η στενή λωρίδα στεριάς που ένωνε την Πελοπόννησο με την υπόλοιπη Ελλάδα;', en: 'What is the narrow strip of land that joined the Peloponnese to the rest of Greece called?' },
    options: { el: ['Ο Ισθμός της Κορίνθου', 'Ο πορθμός του Ρίου', 'Η χερσόνησος της Μάνης', 'Το ακρωτήριο Ταίναρο'], en: ['The Isthmus of Corinth', 'The Strait of Rio', 'The Mani peninsula', 'Cape Tainaron'] },
    correct: 0,
    explanation: {
      el: 'Ισθμός είναι μια στενή γλώσσα στεριάς ανάμεσα σε δύο θάλασσες. Ο Ισθμός της Κορίνθου ενώνει την Πελοπόννησο με τη Στερεά Ελλάδα.',
      en: 'An isthmus is a narrow tongue of land between two seas. The Isthmus of Corinth joins the Peloponnese to Central Greece.',
    },
  },
  {
    q: { el: 'Γιατί άνοιξαν οι άνθρωποι τη Διώρυγα της Κορίνθου;', en: 'Why did people dig the Corinth Canal?' },
    options: { el: ['Για να περνούν τα πλοία χωρίς να κάνουν τον γύρο της Πελοποννήσου', 'Για να ποτίζουν τα χωράφια της Κορίνθου', 'Για να ενώσουν την Κρήτη με την Πελοπόννησο', 'Για να φτιάξουν μια λίμνη για ψάρεμα'], en: ['So ships can pass without sailing all the way around the Peloponnese', 'To water the fields around Corinth', 'To join Crete to the Peloponnese', 'To make a lake for fishing'] },
    correct: 0,
    explanation: {
      el: 'Η διώρυγα κόβει τον Ισθμό στα δύο. Τα πλοία περνούν από τον Σαρωνικό στον Κορινθιακό κόλπο σε λίγα χιλιόμετρα, αντί να ταξιδεύουν γύρω από όλη την Πελοπόννησο.',
      en: 'The canal cuts the Isthmus in two. Ships pass from the Saronic to the Corinthian Gulf in a few kilometres, instead of sailing around the whole Peloponnese.',
    },
  },

  // ── 17–18: the coastline ───────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι η ακτογραμμή μιας χώρας;', en: 'What is a country\'s coastline?' },
    options: { el: ['Η γραμμή των συνόρων της με άλλες χώρες', 'Η γραμμή όπου η στεριά συναντά τη θάλασσα', 'Ο δρόμος που πηγαίνει δίπλα στη θάλασσα', 'Το βαθύτερο σημείο της θάλασσας'], en: ['The line of its borders with other countries', 'The line where the land meets the sea', 'The road that runs next to the sea', 'The deepest point of the sea'] },
    correct: 1,
    explanation: {
      el: 'Ακτογραμμή είναι η γραμμή όπου τελειώνει η στεριά και αρχίζει η θάλασσα. Αν περπατούσες όλες τις παραλίες της Ελλάδας, θα ακολουθούσες την ακτογραμμή της.',
      en: 'The coastline is the line where the land ends and the sea begins. If you walked along every beach in Greece, you would be following its coastline.',
    },
  },
  {
    q: { el: 'Η Ελλάδα έχει από τις μακρύτερες ακτογραμμές στην Ευρώπη, αν και είναι μικρή χώρα. Γιατί;', en: 'Greece has one of the longest coastlines in Europe, even though it is a small country. Why?' },
    options: { el: ['Επειδή έχει πολύ ψηλά βουνά', 'Επειδή έχει μεγάλα ποτάμια', 'Επειδή έχει εκατοντάδες νησιά και πολλούς κόλπους και χερσονήσους', 'Επειδή βρίσκεται στον Νότο της Ευρώπης'], en: ['Because it has very tall mountains', 'Because it has big rivers', 'Because it has hundreds of islands and many gulfs and peninsulas', 'Because it is in the south of Europe'] },
    correct: 2,
    explanation: {
      el: 'Κάθε νησί, κάθε κόλπος και κάθε χερσόνησος προσθέτει ακτή. Η ελληνική ακτογραμμή είναι «δαντελωτή», γι\' αυτό ξεπερνά τα 13.000 χιλιόμετρα.',
      en: 'Every island, gulf and peninsula adds more coast. The Greek coastline is “lacy”, which is why it stretches beyond 13,000 kilometres.',
    },
  },
];
