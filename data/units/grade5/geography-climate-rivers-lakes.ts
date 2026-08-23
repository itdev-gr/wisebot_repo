/**
 * Ε' Δημοτικού · Γεωγραφία · Κλίμα, Ποτάμια & Λίμνες
 * ===================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 10–11.
 *
 * What the unit covers, in order:
 *   1–4   the Mediterranean climate (dry hot summers, mild wet winters), weather vs climate
 *   5–10  the big rivers: Aliakmonas, Evros, Acheloos, Pineios, Nestos
 *   11–14 the lakes: Prespa, Trichonida, Vistonida
 *   15–18 harder mix: dams and energy, wetlands and birds, borders, river vs lake reasoning
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GEOGRAPHY_CLIMATE_RIVERS_LAKES: QuizQuestion[] = [
  // ── 1–4: climate ───────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται το κλίμα που έχει η Ελλάδα;', en: 'What is the climate of Greece called?' },
    options: { el: ['Πολικό', 'Μεσογειακό', 'Τροπικό', 'Ερημικό'], en: ['Polar', 'Mediterranean', 'Tropical', 'Desert'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα έχει μεσογειακό κλίμα, όπως οι περισσότερες χώρες γύρω από τη Μεσόγειο θάλασσα.',
      en: 'Greece has a Mediterranean climate, like most countries around the Mediterranean Sea.',
    },
  },
  {
    q: { el: 'Πώς είναι συνήθως το καλοκαίρι στο μεσογειακό κλίμα;', en: 'What is summer usually like in a Mediterranean climate?' },
    options: { el: ['Ζεστό και ξηρό', 'Κρύο και βροχερό', 'Ζεστό και πολύ βροχερό', 'Δροσερό με χιόνια'], en: ['Hot and dry', 'Cold and rainy', 'Hot and very rainy', 'Cool with snow'] },
    correct: 0,
    explanation: {
      el: 'Στο μεσογειακό κλίμα το καλοκαίρι είναι ζεστό και ξηρό, με λίγες βροχές. Γι\' αυτό οι παραλίες γεμίζουν κόσμο!',
      en: 'In a Mediterranean climate the summer is hot and dry, with little rain. That is why the beaches fill up with people!',
    },
  },
  {
    q: { el: 'Πότε πέφτουν οι περισσότερες βροχές στο μεσογειακό κλίμα;', en: 'When does most of the rain fall in a Mediterranean climate?' },
    options: { el: ['Το καλοκαίρι', 'Ποτέ', 'Τον χειμώνα', 'Ίσα σε όλες τις εποχές'], en: ['In summer', 'Never', 'In winter', 'Equally in all seasons'] },
    correct: 2,
    explanation: {
      el: 'Ο χειμώνας στο μεσογειακό κλίμα είναι ήπιος και βροχερός. Οι βροχές πέφτουν κυρίως από το φθινόπωρο ως την άνοιξη.',
      en: 'Winter in a Mediterranean climate is mild and wet. Most rain falls from autumn to spring.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «Σήμερα βρέχει». Ο Νίκος λέει: «Εδώ τα καλοκαίρια είναι πάντα ξηρά». Ποιος μιλάει για το κλίμα;', en: 'Eleni says: “It is raining today.” Nikos says: “Summers here are always dry.” Who is talking about the climate?' },
    options: { el: ['Η Ελένη', 'Ο Νίκος', 'Και οι δύο', 'Κανένας'], en: ['Eleni', 'Nikos', 'Both of them', 'Neither'] },
    correct: 1,
    explanation: {
      el: 'Ο καιρός είναι το τι γίνεται σήμερα ή αύριο. Το κλίμα είναι το πώς είναι συνήθως ο καιρός σε έναν τόπο για πολλά χρόνια.',
      en: 'Weather is what happens today or tomorrow. Climate is what the weather is usually like in a place over many years.',
    },
  },

  // ── 5–10: rivers ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το μεγαλύτερο ποτάμι που κυλάει ολόκληρο μέσα στην Ελλάδα;', en: 'Which is the longest river that flows entirely inside Greece?' },
    options: { el: ['Ο Έβρος', 'Ο Νέστος', 'Ο Πηνειός', 'Ο Αλιάκμονας'], en: ['Evros', 'Nestos', 'Pineios', 'Aliakmonas'] },
    correct: 3,
    explanation: {
      el: 'Ο Αλιάκμονας ξεκινά από τα βουνά της δυτικής Μακεδονίας και φτάνει στον Θερμαϊκό κόλπο. Είναι το μεγαλύτερο ποτάμι που ανήκει ολόκληρο στην Ελλάδα.',
      en: 'The Aliakmonas starts in the mountains of western Macedonia and reaches the Thermaic Gulf. It is the longest river that belongs entirely to Greece.',
    },
  },
  {
    q: { el: 'Ο ποταμός Έβρος είναι φυσικό σύνορο της Ελλάδας με ποια χώρα;', en: 'The river Evros is a natural border between Greece and which country?' },
    options: { el: ['Την Αλβανία', 'Την Τουρκία', 'Την Ιταλία', 'Την Κύπρο'], en: ['Albania', 'Turkey', 'Italy', 'Cyprus'] },
    correct: 1,
    explanation: {
      el: 'Ο Έβρος κυλάει στα ανατολικά της Θράκης και χωρίζει την Ελλάδα από την Τουρκία. Τα νερά του δουλεύουν σαν σύνορο!',
      en: 'The Evros flows along the east of Thrace and separates Greece from Turkey. Its waters work as a border!',
    },
  },
  {
    q: { el: 'Σε ποιον μύθο ο Ηρακλής πάλεψε με έναν ποταμό που έπαιρνε μορφή ταύρου;', en: 'In which myth did Hercules wrestle a river that took the shape of a bull?' },
    options: { el: ['Με τον Αχελώο', 'Με τον Πηνειό', 'Με τον Νέστο', 'Με τον Έβρο'], en: ['With the Acheloos', 'With the Pineios', 'With the Nestos', 'With the Evros'] },
    correct: 0,
    explanation: {
      el: 'Ο Αχελώος είναι το μεγάλο ποτάμι της δυτικής Ελλάδας. Στον μύθο, ο ποτάμιος θεός Αχελώος έγινε ταύρος και ο Ηρακλής του έσπασε το ένα κέρατο.',
      en: 'The Acheloos is the great river of western Greece. In the myth, the river god Acheloos turned into a bull and Hercules broke off one of his horns.',
    },
  },
  {
    q: { el: 'Ποιο ποτάμι περνά μέσα από τον κάμπο της Θεσσαλίας και την κοιλάδα των Τεμπών;', en: 'Which river runs through the plain of Thessaly and the valley of Tempi?' },
    options: { el: ['Ο Αλιάκμονας', 'Ο Αχελώος', 'Ο Πηνειός', 'Ο Έβρος'], en: ['Aliakmonas', 'Acheloos', 'Pineios', 'Evros'] },
    correct: 2,
    explanation: {
      el: 'Ο Πηνειός ποτίζει τον μεγάλο κάμπο της Θεσσαλίας, περνά από τη Λάρισα και βγαίνει στο Αιγαίο μέσα από τα Τέμπη, ανάμεσα στον Όλυμπο και την Όσσα.',
      en: 'The Pineios waters the big plain of Thessaly, passes Larissa and reaches the Aegean through Tempi, between Mount Olympus and Mount Ossa.',
    },
  },
  {
    q: { el: 'Ο Νέστος μπαίνει στην Ελλάδα από μια γειτονική χώρα. Ποια είναι;', en: 'The Nestos enters Greece from a neighbouring country. Which one?' },
    options: { el: ['Η Βουλγαρία', 'Η Τουρκία', 'Η Αλβανία', 'Η Ιταλία'], en: ['Bulgaria', 'Turkey', 'Albania', 'Italy'] },
    correct: 0,
    explanation: {
      el: 'Ο Νέστος πηγάζει στη Βουλγαρία, μπαίνει στην Ελλάδα και χύνεται στο Αιγαίο, απέναντι από τη Θάσο. Στον δρόμο του σχηματίζει όμορφα στενά.',
      en: 'The Nestos starts in Bulgaria, enters Greece and flows into the Aegean, opposite the island of Thasos. On the way it forms beautiful gorges.',
    },
  },
  {
    q: { el: 'Σε ποια θάλασσα χύνεται ο Αχελώος;', en: 'Into which sea does the Acheloos flow?' },
    options: { el: ['Στο Αιγαίο', 'Στη Μαύρη Θάλασσα', 'Στον Θερμαϊκό κόλπο', 'Στο Ιόνιο'], en: ['The Aegean', 'The Black Sea', 'The Thermaic Gulf', 'The Ionian'] },
    correct: 3,
    explanation: {
      el: 'Ο Αχελώος κυλάει στη δυτική Ελλάδα, άρα βγαίνει στη θάλασσα της δυτικής πλευράς: το Ιόνιο πέλαγος.',
      en: 'The Acheloos flows through western Greece, so it reaches the sea on the western side: the Ionian Sea.',
    },
  },

  // ── 11–14: lakes ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η μεγαλύτερη φυσική λίμνη που βρίσκεται ολόκληρη μέσα στην Ελλάδα;', en: 'Which is the largest natural lake that lies entirely inside Greece?' },
    options: { el: ['Η Βιστωνίδα', 'Η Τριχωνίδα', 'Η Μεγάλη Πρέσπα', 'Η Μικρή Πρέσπα'], en: ['Vistonida', 'Trichonida', 'Great Prespa', 'Small Prespa'] },
    correct: 1,
    explanation: {
      el: 'Η Τριχωνίδα βρίσκεται στη δυτική Ελλάδα, κοντά στο Αγρίνιο. Είναι η μεγαλύτερη λίμνη που ανήκει ολόκληρη στη χώρα μας.',
      en: 'Trichonida is in western Greece, near Agrinio. It is the largest lake that belongs entirely to our country.',
    },
  },
  {
    q: { el: 'Τι το ξεχωριστό έχουν οι λίμνες Πρέσπες;', en: 'What is special about the Prespa lakes?' },
    options: { el: ['Έχουν αλμυρό νερό σαν θάλασσα', 'Είναι οι πιο ζεστές λίμνες της Ευρώπης', 'Τις μοιράζονται τρεις χώρες', 'Παγώνουν όλο τον χρόνο'], en: ['They have salty water like the sea', 'They are the warmest lakes in Europe', 'Three countries share them', 'They are frozen all year'] },
    correct: 2,
    explanation: {
      el: 'Οι Πρέσπες είναι δύο λίμνες, η Μεγάλη και η Μικρή, ψηλά στα βουνά της Μακεδονίας. Τη Μεγάλη Πρέσπα τη μοιράζονται η Ελλάδα, η Αλβανία και η Βόρεια Μακεδονία.',
      en: 'Prespa is two lakes, Great and Small, high in the mountains of Macedonia. Great Prespa is shared by Greece, Albania and North Macedonia.',
    },
  },
  {
    q: { el: 'Ποιο μεγάλο πουλί με τεράστιο ράμφος φωλιάζει στις Πρέσπες;', en: 'Which big bird with a huge beak nests at Prespa?' },
    options: { el: ['Ο πιγκουίνος', 'Ο πελεκάνος', 'Η στρουθοκάμηλος', 'Ο παπαγάλος'], en: ['The penguin', 'The pelican', 'The ostrich', 'The parrot'] },
    correct: 1,
    explanation: {
      el: 'Στη Μικρή Πρέσπα ζουν πολλοί πελεκάνοι. Ψαρεύουν με το μεγάλο τους ράμφος και φωλιάζουν ανάμεσα στα καλάμια.',
      en: 'Many pelicans live at Small Prespa. They fish with their big beaks and nest among the reeds.',
    },
  },
  {
    q: { el: 'Η λίμνη Βιστωνίδα βρίσκεται δίπλα στη θάλασσα, στη Θράκη. Γι\' αυτό το νερό της είναι…', en: 'Lake Vistonida lies next to the sea, in Thrace. That is why its water is…' },
    options: { el: ['παγωμένο όλο τον χρόνο', 'καυτό σαν θερμή πηγή', 'γλυκό στο ένα μέρος και αλμυρό στο άλλο', 'κόκκινο από το χώμα'], en: ['frozen all year', 'boiling hot like a hot spring', 'fresh in one part and salty in the other', 'red from the soil'] },
    correct: 2,
    explanation: {
      el: 'Η Βιστωνίδα παίρνει γλυκό νερό από ποτάμια στον βορρά και αλμυρό από τη θάλασσα στον νότο. Τέτοια ρηχή λίμνη δίπλα στη θάλασσα λέγεται λιμνοθάλασσα.',
      en: 'Vistonida gets fresh water from rivers in the north and salty water from the sea in the south. A shallow lake like this next to the sea is called a lagoon.',
    },
  },

  // ── 15–18: harder mix ──────────────────────────────────────────────────────
  {
    q: { el: 'Στον Αχελώο και στον Αλιάκμονα έχουν χτιστεί μεγάλα φράγματα. Σε τι βοηθούν;', en: 'Big dams have been built on the Acheloos and the Aliakmonas. What are they for?' },
    options: { el: ['Για να σταματήσουν τα ψάρια', 'Για να παράγουν ηλεκτρικό ρεύμα και να κρατούν νερό', 'Για να περνούν τα πλοία', 'Για να ζεσταίνουν το νερό'], en: ['To stop the fish', 'To make electricity and store water', 'To let ships pass', 'To warm the water'] },
    correct: 1,
    explanation: {
      el: 'Το φράγμα κρατάει το νερό του ποταμού σε μια τεχνητή λίμνη. Όταν το νερό πέφτει με δύναμη, γυρίζει μηχανές που παράγουν ηλεκτρικό ρεύμα, και το νερό ποτίζει τα χωράφια.',
      en: 'A dam holds the river water in a man-made lake. When the water falls with force, it turns machines that make electricity, and the water irrigates the fields.',
    },
  },
  {
    q: { el: 'Στο δέλτα του Έβρου σταματούν χιλιάδες πουλιά. Γιατί τους αρέσει τόσο;', en: 'Thousands of birds stop at the Evros delta. Why do they like it so much?' },
    options: { el: ['Επειδή έχει ψηλά βουνά με χιόνι', 'Επειδή είναι έρημος χωρίς νερό', 'Επειδή έχει ρηχά νερά, καλάμια και πολλή τροφή', 'Επειδή είναι μεγάλη πόλη με πάρκα'], en: ['Because it has high snowy mountains', 'Because it is a desert with no water', 'Because it has shallow water, reeds and lots of food', 'Because it is a big city with parks'] },
    correct: 2,
    explanation: {
      el: 'Το δέλτα είναι το μέρος όπου το ποτάμι χύνεται στη θάλασσα και απλώνει λάσπη και νερά. Είναι υγρότοπος: ρηχά νερά, καλάμια και άφθονη τροφή για τα πουλιά.',
      en: 'A delta is the place where a river meets the sea and spreads out mud and water. It is a wetland: shallow water, reeds and plenty of food for birds.',
    },
  },
  {
    q: { el: 'Ποιο από τα ποτάμια αυτά ΔΕΝ περνά σύνορα και κυλάει μόνο μέσα στην Ελλάδα;', en: 'Which of these rivers does NOT cross a border and flows only inside Greece?' },
    options: { el: ['Ο Έβρος', 'Ο Νέστος', 'Ο Πηνειός', 'Ο Αξιός'], en: ['Evros', 'Nestos', 'Pineios', 'Axios'] },
    correct: 2,
    explanation: {
      el: 'Ο Έβρος, ο Νέστος και ο Αξιός έρχονται από γειτονικές χώρες στον βορρά. Ο Πηνειός όμως γεννιέται και χύνεται στη θάλασσα μέσα στην ίδια τη Θεσσαλία.',
      en: 'The Evros, Nestos and Axios come from neighbouring countries to the north. The Pineios, though, is born and reaches the sea inside Thessaly itself.',
    },
  },
  {
    q: { el: 'Ο Γιώργος βλέπει σε έναν χάρτη μια μπλε γραμμή που ξεκινά από βουνά και καταλήγει στη θάλασσα. Τι είναι;', en: 'Giorgos sees a blue line on a map that starts in the mountains and ends at the sea. What is it?' },
    options: { el: ['Μια λίμνη', 'Ένα ποτάμι', 'Ένας δρόμος', 'Ένα σύνορο'], en: ['A lake', 'A river', 'A road', 'A border'] },
    correct: 1,
    explanation: {
      el: 'Το ποτάμι είναι νερό που κυλάει: πηγάζει ψηλά στα βουνά και ταξιδεύει μέχρι τη θάλασσα ή μια λίμνη. Η λίμνη είναι νερό που μένει ακίνητο μέσα σε μια κοιλότητα της γης.',
      en: 'A river is water that flows: it starts high in the mountains and travels to the sea or a lake. A lake is water that stays still in a hollow in the ground.',
    },
  },
];
