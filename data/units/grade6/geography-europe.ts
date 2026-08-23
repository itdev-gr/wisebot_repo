/**
 * ΣΤ' Δημοτικού · Γεωγραφία · Η Ευρώπη
 * ====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–6   countries and their capitals (Paris, Rome, Madrid, Berlin, Lisbon, Vienna)
 *   7–8   the Alps and Mont Blanc
 *   9–12  the great rivers: Danube, Rhine, Volga
 *   13–14 famous monuments: Eiffel Tower, Colosseum
 *   15–18 the European Union: members, the euro, Brussels
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GEOGRAPHY_EUROPE: QuizQuestion[] = [
  // ── 1–6: countries and capitals ─────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η πρωτεύουσα της Γαλλίας;', en: 'What is the capital of France?' },
    options: { el: ['Λυών', 'Παρίσι', 'Μασσαλία', 'Βρυξέλλες'], en: ['Lyon', 'Paris', 'Marseille', 'Brussels'] },
    correct: 1,
    explanation: {
      el: 'Η πρωτεύουσα της Γαλλίας είναι το Παρίσι, χτισμένο στις όχθες του ποταμού Σηκουάνα.',
      en: 'The capital of France is Paris, built on the banks of the river Seine.',
    },
  },
  {
    q: { el: 'Η Ρώμη είναι η πρωτεύουσα…', en: 'Rome is the capital of…' },
    options: { el: ['της Ισπανίας', 'της Ελβετίας', 'της Ιταλίας', 'της Πορτογαλίας'], en: ['Spain', 'Switzerland', 'Italy', 'Portugal'] },
    correct: 2,
    explanation: {
      el: 'Η Ρώμη είναι η πρωτεύουσα της Ιταλίας, της χώρας που στον χάρτη μοιάζει με μπότα.',
      en: 'Rome is the capital of Italy, the country that looks like a boot on the map.',
    },
  },
  {
    q: { el: 'Ο Νίκος ταξιδεύει στη Μαδρίτη. Σε ποια χώρα βρίσκεται;', en: 'Nikos is travelling to Madrid. Which country is he in?' },
    options: { el: ['Ισπανία', 'Πορτογαλία', 'Ιταλία', 'Γαλλία'], en: ['Spain', 'Portugal', 'Italy', 'France'] },
    correct: 0,
    explanation: {
      el: 'Η Μαδρίτη είναι η πρωτεύουσα της Ισπανίας και βρίσκεται ακριβώς στο κέντρο της χώρας.',
      en: 'Madrid is the capital of Spain and sits right in the centre of the country.',
    },
  },
  {
    q: { el: 'Ποια πόλη είναι η πρωτεύουσα της Γερμανίας;', en: 'Which city is the capital of Germany?' },
    options: { el: ['Μόναχο', 'Αμβούργο', 'Φρανκφούρτη', 'Βερολίνο'], en: ['Munich', 'Hamburg', 'Frankfurt', 'Berlin'] },
    correct: 3,
    explanation: {
      el: 'Η πρωτεύουσα της Γερμανίας είναι το Βερολίνο. Το Μόναχο και το Αμβούργο είναι μεγάλες πόλεις, αλλά όχι πρωτεύουσες.',
      en: 'The capital of Germany is Berlin. Munich and Hamburg are big cities, but not the capital.',
    },
  },
  {
    q: { el: 'Η Λισαβόνα είναι η πρωτεύουσα…', en: 'Lisbon is the capital of…' },
    options: { el: ['της Ισπανίας', 'της Πορτογαλίας', 'της Ιρλανδίας', 'της Πολωνίας'], en: ['Spain', 'Portugal', 'Ireland', 'Poland'] },
    correct: 1,
    explanation: {
      el: 'Η Λισαβόνα είναι η πρωτεύουσα της Πορτογαλίας, στη δυτική άκρη της Ευρώπης, δίπλα στον Ατλαντικό Ωκεανό.',
      en: 'Lisbon is the capital of Portugal, on the western edge of Europe, next to the Atlantic Ocean.',
    },
  },
  {
    q: { el: 'Η Ελένη επισκέπτεται τη Βιέννη, την πόλη της μουσικής. Σε ποια χώρα βρίσκεται;', en: 'Eleni is visiting Vienna, the city of music. Which country is it in?' },
    options: { el: ['Ελβετία', 'Ουγγαρία', 'Αυστρία', 'Γερμανία'], en: ['Switzerland', 'Hungary', 'Austria', 'Germany'] },
    correct: 2,
    explanation: {
      el: 'Η Βιέννη είναι η πρωτεύουσα της Αυστρίας. Εκεί έζησαν μεγάλοι μουσικοί, όπως ο Μότσαρτ.',
      en: 'Vienna is the capital of Austria. Great musicians such as Mozart lived there.',
    },
  },

  // ── 7–8: the Alps ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η πιο γνωστή οροσειρά της κεντρικής Ευρώπης, με χιονισμένες κορυφές και πίστες σκι;', en: 'Which is the most famous mountain range of central Europe, with snowy peaks and ski slopes?' },
    options: { el: ['Τα Πυρηναία', 'Οι Άλπεις', 'Τα Καρπάθια', 'Τα Ουράλια'], en: ['The Pyrenees', 'The Alps', 'The Carpathians', 'The Urals'] },
    correct: 1,
    explanation: {
      el: 'Οι Άλπεις απλώνονται σε πολλές χώρες, όπως η Ελβετία, η Αυστρία, η Ιταλία και η Γαλλία. Είναι η πιο ψηλή οροσειρά της κεντρικής Ευρώπης.',
      en: 'The Alps stretch across many countries, such as Switzerland, Austria, Italy and France. They are the highest mountain range of central Europe.',
    },
  },
  {
    q: { el: 'Ποια είναι η ψηλότερη κορυφή των Άλπεων;', en: 'What is the highest peak of the Alps?' },
    options: { el: ['Ο Όλυμπος', 'Το Μάτερχορν', 'Το Λευκό Όρος (Μον Μπλαν)', 'Το Έβερεστ'], en: ['Mount Olympus', 'The Matterhorn', 'Mont Blanc', 'Mount Everest'] },
    correct: 2,
    explanation: {
      el: 'Το Λευκό Όρος, ή Μον Μπλαν, είναι η ψηλότερη κορυφή των Άλπεων, πάνω από 4.800 μέτρα. Το Έβερεστ είναι στην Ασία, όχι στην Ευρώπη!',
      en: 'Mont Blanc, the “White Mountain”, is the highest peak of the Alps, over 4,800 metres. Everest is in Asia, not Europe!',
    },
  },

  // ── 9–12: the great rivers ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ποταμός περνάει από τη Βιέννη, τη Βουδαπέστη και το Βελιγράδι;', en: 'Which river flows through Vienna, Budapest and Belgrade?' },
    options: { el: ['Ο Ρήνος', 'Ο Δούναβης', 'Ο Βόλγας', 'Ο Σηκουάνας'], en: ['The Rhine', 'The Danube', 'The Volga', 'The Seine'] },
    correct: 1,
    explanation: {
      el: 'Ο Δούναβης είναι ο ποταμός των πρωτευουσών: περνάει από τη Βιέννη, την Μπρατισλάβα, τη Βουδαπέστη και το Βελιγράδι.',
      en: 'The Danube is the river of capitals: it flows through Vienna, Bratislava, Budapest and Belgrade.',
    },
  },
  {
    q: { el: 'Σε ποια θάλασσα χύνεται ο Δούναβης;', en: 'Which sea does the Danube flow into?' },
    options: { el: ['Στη Μαύρη Θάλασσα', 'Στη Βόρεια Θάλασσα', 'Στη Μεσόγειο', 'Στη Βαλτική'], en: ['The Black Sea', 'The North Sea', 'The Mediterranean', 'The Baltic Sea'] },
    correct: 0,
    explanation: {
      el: 'Ο Δούναβης ξεκινά από τη Γερμανία, διασχίζει πολλές χώρες και χύνεται στη Μαύρη Θάλασσα, στα σύνορα Ρουμανίας και Ουκρανίας.',
      en: 'The Danube starts in Germany, crosses many countries and empties into the Black Sea, on the border of Romania and Ukraine.',
    },
  },
  {
    q: { el: 'Ο Ρήνος είναι ένας μεγάλος ποταμός της Γερμανίας, γεμάτος κάστρα στις όχθες του. Πού χύνεται;', en: 'The Rhine is a great river of Germany, with castles along its banks. Where does it flow into?' },
    options: { el: ['Στη Μαύρη Θάλασσα', 'Στη Μεσόγειο', 'Στην Κασπία Θάλασσα', 'Στη Βόρεια Θάλασσα'], en: ['The Black Sea', 'The Mediterranean', 'The Caspian Sea', 'The North Sea'] },
    correct: 3,
    explanation: {
      el: 'Ο Ρήνος πηγάζει από τις Άλπεις της Ελβετίας, περνάει από τη Γερμανία και χύνεται στη Βόρεια Θάλασσα μέσα από την Ολλανδία.',
      en: 'The Rhine rises in the Swiss Alps, flows through Germany and reaches the North Sea through the Netherlands.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο μακρύτερος ποταμός της Ευρώπης;', en: 'Which is the longest river in Europe?' },
    options: { el: ['Ο Δούναβης', 'Ο Ρήνος', 'Ο Βόλγας', 'Ο Τάμεσης'], en: ['The Danube', 'The Rhine', 'The Volga', 'The Thames'] },
    correct: 2,
    explanation: {
      el: 'Ο Βόλγας, στη Ρωσία, είναι ο μακρύτερος ποταμός της Ευρώπης και χύνεται στην Κασπία Θάλασσα. Ο Δούναβης έρχεται δεύτερος.',
      en: 'The Volga, in Russia, is the longest river in Europe and flows into the Caspian Sea. The Danube comes second.',
    },
  },

  // ── 13–14: famous monuments ─────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος ανέβηκε στον Πύργο του Άιφελ και είδε όλη την πόλη από ψηλά. Σε ποια πόλη βρίσκεται;', en: 'Giorgos went up the Eiffel Tower and saw the whole city from above. Which city was he in?' },
    options: { el: ['Λονδίνο', 'Παρίσι', 'Ρώμη', 'Βρυξέλλες'], en: ['London', 'Paris', 'Rome', 'Brussels'] },
    correct: 1,
    explanation: {
      el: 'Ο Πύργος του Άιφελ είναι το σύμβολο του Παρισιού. Είναι φτιαγμένος από σίδερο και έχει ύψος περίπου 300 μέτρα.',
      en: 'The Eiffel Tower is the symbol of Paris. It is made of iron and is about 300 metres tall.',
    },
  },
  {
    q: { el: 'Το Κολοσσαίο, το τεράστιο αρχαίο θέατρο όπου οι Ρωμαίοι έβλεπαν αγώνες, βρίσκεται…', en: 'The Colosseum, the huge ancient arena where the Romans watched games, is in…' },
    options: { el: ['στην Αθήνα', 'στη Μαδρίτη', 'στη Ρώμη', 'στη Βιέννη'], en: ['Athens', 'Madrid', 'Rome', 'Vienna'] },
    correct: 2,
    explanation: {
      el: 'Το Κολοσσαίο βρίσκεται στη Ρώμη. Χτίστηκε πριν από σχεδόν 2.000 χρόνια και χωρούσε δεκάδες χιλιάδες θεατές.',
      en: 'The Colosseum is in Rome. It was built almost 2,000 years ago and could hold tens of thousands of spectators.',
    },
  },

  // ── 15–18: the European Union ───────────────────────────────────────────────
  {
    q: { el: 'Τι είναι η Ευρωπαϊκή Ένωση (ΕΕ);', en: 'What is the European Union (EU)?' },
    options: { el: ['Μια ομάδα ευρωπαϊκών χωρών που συνεργάζονται', 'Μια μεγάλη ευρωπαϊκή πόλη', 'Μια ποδοσφαιρική ομάδα της Ευρώπης', 'Μια οροσειρά της Ευρώπης'], en: ['A group of European countries that work together', 'A big European city', 'A European football team', 'A mountain range in Europe'] },
    correct: 0,
    explanation: {
      el: 'Η Ευρωπαϊκή Ένωση είναι μια οικογένεια χωρών της Ευρώπης που συνεργάζονται για το εμπόριο, την ειρήνη και τα δικαιώματα των πολιτών. Η Ελλάδα είναι μέλος της.',
      en: 'The European Union is a family of European countries that work together on trade, peace and citizens’ rights. Greece is a member.',
    },
  },
  {
    q: { el: 'Ποια από αυτές τις χώρες ΔΕΝ είναι μέλος της Ευρωπαϊκής Ένωσης;', en: 'Which of these countries is NOT a member of the European Union?' },
    options: { el: ['Η Ελλάδα', 'Η Ελβετία', 'Η Ιταλία', 'Η Κύπρος'], en: ['Greece', 'Switzerland', 'Italy', 'Cyprus'] },
    correct: 1,
    explanation: {
      el: 'Η Ελβετία βρίσκεται στην καρδιά της Ευρώπης, αλλά διάλεξε να μην γίνει μέλος της ΕΕ. Η Ελλάδα, η Ιταλία και η Κύπρος είναι μέλη.',
      en: 'Switzerland sits in the heart of Europe, but chose not to join the EU. Greece, Italy and Cyprus are members.',
    },
  },
  {
    q: { el: 'Η Μαρία πληρώνει το παγωτό της με ευρώ (€). Ποιο από τα παρακάτω ισχύει για το ευρώ;', en: 'Maria pays for her ice cream with euros (€). Which of these is true about the euro?' },
    options: { el: ['Το χρησιμοποιεί μόνο η Ελλάδα', 'Το χρησιμοποιούν όλες οι χώρες του κόσμου', 'Το χρησιμοποιούν πολλές χώρες της ΕΕ, όχι όλες', 'Το χρησιμοποιούν μόνο οι τράπεζες'], en: ['Only Greece uses it', 'Every country in the world uses it', 'Many EU countries use it, but not all', 'Only banks use it'] },
    correct: 2,
    explanation: {
      el: 'Το ευρώ είναι το κοινό νόμισμα πολλών χωρών της ΕΕ, όπως η Ελλάδα, η Γαλλία και η Γερμανία. Κάποιες χώρες, όπως η Πολωνία και η Σουηδία, έχουν ακόμα δικό τους νόμισμα.',
      en: 'The euro is the shared currency of many EU countries, such as Greece, France and Germany. Some countries, like Poland and Sweden, still have their own money.',
    },
  },
  {
    q: { el: 'Οι Βρυξέλλες είναι η πρωτεύουσα του Βελγίου. Γιατί τις λένε και «πρωτεύουσα της Ευρώπης»;', en: 'Brussels is the capital of Belgium. Why is it also called the “capital of Europe”?' },
    options: { el: ['Επειδή είναι η μεγαλύτερη πόλη της Ευρώπης', 'Επειδή βρίσκονται εκεί τα κεντρικά κτίρια της ΕΕ', 'Επειδή εκεί τυπώνονται όλα τα ευρώ', 'Επειδή είναι η παλαιότερη πόλη της Ευρώπης'], en: ['Because it is the biggest city in Europe', 'Because the main EU buildings are there', 'Because all the euros are printed there', 'Because it is the oldest city in Europe'] },
    correct: 1,
    explanation: {
      el: 'Στις Βρυξέλλες βρίσκονται τα κεντρικά κτίρια της Ευρωπαϊκής Ένωσης, όπου συναντιούνται εκπρόσωποι όλων των χωρών-μελών για να πάρουν αποφάσεις.',
      en: 'Brussels is home to the main buildings of the European Union, where representatives of all the member countries meet to make decisions.',
    },
  },
];
