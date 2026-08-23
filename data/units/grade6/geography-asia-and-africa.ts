/**
 * ΣΤ' Δημοτικού · Γεωγραφία · Ασία & Αφρική
 * ==========================================
 * 18 original questions (curriculum topics only — no textbook text). Language level: 11–12.
 *
 * Order, easiest to hardest, following the brief:
 *   1–3   Asia the giant continent, China (Beijing, the panda)
 *   4–5   India (Taj Mahal, New Delhi)
 *   6–7   Japan (a country of islands, Tokyo)
 *   8–9   the Sahara (largest hot desert, the camel)
 *   10–11 the Nile (flows into the Mediterranean, one of the longest rivers)
 *   12–14 Kilimanjaro, the Great Wall, Mount Fuji
 *   15–16 Egypt (Cairo, «gift of the Nile»)
 *   17–18 Mediterranean neighbours: Libya, and the three continents the sea touches
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GEOGRAPHY_ASIA_AND_AFRICA: QuizQuestion[] = [
  // ── 1–3: Asia and China ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η μεγαλύτερη ήπειρος της Γης;', en: 'Which is the largest continent on Earth?' },
    options: { el: ['Η Ευρώπη', 'Η Αφρική', 'Η Ασία', 'Η Αμερική'], en: ['Europe', 'Africa', 'Asia', 'America'] },
    correct: 2,
    explanation: {
      el: 'Η Ασία είναι η μεγαλύτερη ήπειρος και σε έκταση και σε πληθυσμό. Η Αφρική έρχεται δεύτερη.',
      en: 'Asia is the largest continent both in size and in population. Africa comes second.',
    },
  },
  {
    q: { el: 'Ποια χώρα της Ασίας έχει πρωτεύουσα το Πεκίνο;', en: 'Which Asian country has Beijing as its capital?' },
    options: { el: ['Η Κίνα', 'Η Ιαπωνία', 'Η Ινδία', 'Η Κορέα'], en: ['China', 'Japan', 'India', 'Korea'] },
    correct: 0,
    explanation: {
      el: 'Το Πεκίνο είναι η πρωτεύουσα της Κίνας, μιας από τις χώρες με τους περισσότερους κατοίκους στον κόσμο.',
      en: 'Beijing is the capital of China, one of the countries with the most people in the world.',
    },
  },
  {
    q: { el: 'Ο Νίκος είδε στον ζωολογικό κήπο ένα ασπρόμαυρο ζώο που τρώει μπαμπού. Από ποια χώρα κατάγεται;', en: 'At the zoo, Nikos saw a black-and-white animal that eats bamboo. Which country does it come from?' },
    options: { el: ['Από την Αίγυπτο', 'Από την Κίνα', 'Από την Ινδία', 'Από την Ιαπωνία'], en: ['Egypt', 'China', 'India', 'Japan'] },
    correct: 1,
    explanation: {
      el: 'Είναι το γιγάντιο πάντα, που ζει στα δάση με μπαμπού της Κίνας. Είναι το πιο γνωστό ζώο-σύμβολο της χώρας.',
      en: 'It is the giant panda, which lives in the bamboo forests of China. It is the country’s best-known animal symbol.',
    },
  },

  // ── 4–5: India ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Το Ταζ Μαχάλ, ένα κάτασπρο παλάτι-μνημείο που επισκέπτονται εκατομμύρια άνθρωποι, βρίσκεται στην…', en: 'The Taj Mahal, a snow-white palace-monument visited by millions of people, is in…' },
    options: { el: ['Ιαπωνία', 'Κίνα', 'Αίγυπτο', 'Ινδία'], en: ['Japan', 'China', 'Egypt', 'India'] },
    correct: 3,
    explanation: {
      el: 'Το Ταζ Μαχάλ βρίσκεται στην Ινδία. Είναι φτιαγμένο από λευκό μάρμαρο και είναι ένα από τα πιο διάσημα κτίρια του κόσμου.',
      en: 'The Taj Mahal is in India. It is made of white marble and is one of the most famous buildings in the world.',
    },
  },
  {
    q: { el: 'Ποια είναι η πρωτεύουσα της Ινδίας;', en: 'What is the capital of India?' },
    options: { el: ['Η Βομβάη', 'Το Τόκιο', 'Το Νέο Δελχί', 'Το Πεκίνο'], en: ['Mumbai', 'Tokyo', 'New Delhi', 'Beijing'] },
    correct: 2,
    explanation: {
      el: 'Η πρωτεύουσα της Ινδίας είναι το Νέο Δελχί. Η Βομβάη είναι επίσης ινδική πόλη, πολύ μεγάλη, αλλά δεν είναι πρωτεύουσα.',
      en: 'The capital of India is New Delhi. Mumbai is also an Indian city, a very big one, but it is not the capital.',
    },
  },

  // ── 6–7: Japan ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη κοιτάζει τον χάρτη της Ιαπωνίας και βλέπει ότι η χώρα…', en: 'Eleni looks at the map of Japan and sees that the country…' },
    options: { el: ['είναι μια τεράστια έρημος', 'αποτελείται από πολλά νησιά', 'δεν έχει καθόλου θάλασσα', 'είναι η μεγαλύτερη χώρα της Ασίας'], en: ['is a huge desert', 'is made up of many islands', 'has no sea at all', 'is the biggest country in Asia'] },
    correct: 1,
    explanation: {
      el: 'Η Ιαπωνία είναι χώρα από νησιά στον Ειρηνικό Ωκεανό. Τα τέσσερα μεγάλα νησιά της και χιλιάδες μικρότερα σχηματίζουν μια μακριά αλυσίδα.',
      en: 'Japan is a country of islands in the Pacific Ocean. Its four big islands and thousands of smaller ones form a long chain.',
    },
  },
  {
    q: { el: 'Ποια είναι η πρωτεύουσα της Ιαπωνίας;', en: 'What is the capital of Japan?' },
    options: { el: ['Το Τόκιο', 'Το Πεκίνο', 'Η Σεούλ', 'Η Σαγκάη'], en: ['Tokyo', 'Beijing', 'Seoul', 'Shanghai'] },
    correct: 0,
    explanation: {
      el: 'Το Τόκιο είναι η πρωτεύουσα της Ιαπωνίας και μία από τις πιο πολυάνθρωπες πόλεις του πλανήτη.',
      en: 'Tokyo is the capital of Japan and one of the most crowded cities on the planet.',
    },
  },

  // ── 8–9: the Sahara ─────────────────────────────────────────────────────────
  {
    q: { el: 'Η Σαχάρα, η μεγαλύτερη ζεστή έρημος του κόσμου, βρίσκεται στην…', en: 'The Sahara, the largest hot desert in the world, is in…' },
    options: { el: ['Ασία', 'Αυστραλία', 'Αφρική', 'Αμερική'], en: ['Asia', 'Australia', 'Africa', 'America'] },
    correct: 2,
    explanation: {
      el: 'Η Σαχάρα απλώνεται στο βόρειο μέρος της Αφρικής. Είναι τόσο μεγάλη που χωράει σχεδόν ολόκληρη την Ευρώπη!',
      en: 'The Sahara spreads across the northern part of Africa. It is so big that nearly all of Europe would fit inside it!',
    },
  },
  {
    q: { el: 'Ποιο ζώο βοηθάει τους ανθρώπους να ταξιδεύουν στη Σαχάρα, επειδή αντέχει μέρες χωρίς νερό;', en: 'Which animal helps people travel across the Sahara, because it can go for days without water?' },
    options: { el: ['Το άλογο', 'Ο ελέφαντας', 'Το ελάφι', 'Η καμήλα'], en: ['The horse', 'The elephant', 'The deer', 'The camel'] },
    correct: 3,
    explanation: {
      el: 'Η καμήλα λέγεται «το καράβι της ερήμου». Αντέχει τη ζέστη, περπατάει στην άμμο και μπορεί να μείνει μέρες χωρίς νερό.',
      en: 'The camel is called “the ship of the desert”. It stands the heat, walks on sand and can go for days without water.',
    },
  },

  // ── 10–11: the Nile ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νείλος διασχίζει την Αίγυπτο και χύνεται στη…', en: 'The Nile crosses Egypt and flows into the…' },
    options: { el: ['Ερυθρά Θάλασσα', 'Μεσόγειο Θάλασσα', 'Μαύρη Θάλασσα', 'Ινδικό Ωκεανό'], en: ['Red Sea', 'Mediterranean Sea', 'Black Sea', 'Indian Ocean'] },
    correct: 1,
    explanation: {
      el: 'Ο Νείλος κυλάει από τον νότο προς τον βορρά και χύνεται στη Μεσόγειο, στην ίδια θάλασσα που βρέχει και την Ελλάδα.',
      en: 'The Nile runs from south to north and empties into the Mediterranean, the same sea that washes Greece.',
    },
  },
  {
    q: { el: 'Γιατί ο Νείλος είναι τόσο διάσημος;', en: 'Why is the Nile so famous?' },
    options: { el: ['Είναι ένα από τα μακρύτερα ποτάμια του κόσμου', 'Είναι το μοναδικό ποτάμι της Αφρικής', 'Είναι το πιο κρύο ποτάμι του κόσμου', 'Είναι το μοναδικό ποτάμι που χύνεται στη θάλασσα'], en: ['It is one of the longest rivers in the world', 'It is the only river in Africa', 'It is the coldest river in the world', 'It is the only river that flows into the sea'] },
    correct: 0,
    explanation: {
      el: 'Ο Νείλος έχει μήκος πάνω από 6.000 χιλιόμετρα και είναι ένα από τα δύο μακρύτερα ποτάμια της Γης. Η Αφρική έχει πολλά άλλα ποτάμια, όπως ο Κονγκό.',
      en: 'The Nile is more than 6,000 km long and is one of the two longest rivers on Earth. Africa has many other rivers, such as the Congo.',
    },
  },

  // ── 12–14: Kilimanjaro, the Great Wall, Mount Fuji ──────────────────────────
  {
    q: { el: 'Το Κιλιμάντζαρο είναι…', en: 'Kilimanjaro is…' },
    options: { el: ['η μεγαλύτερη λίμνη της Αφρικής', 'το μακρύτερο ποτάμι της Αφρικής', 'το ψηλότερο βουνό της Αφρικής', 'η πρωτεύουσα της Κένυας'], en: ['the largest lake in Africa', 'the longest river in Africa', 'the highest mountain in Africa', 'the capital of Kenya'] },
    correct: 2,
    explanation: {
      el: 'Το Κιλιμάντζαρο, στην Τανζανία, είναι το ψηλότερο βουνό της Αφρικής. Αν και βρίσκεται κοντά στον Ισημερινό, η κορυφή του έχει χιόνι!',
      en: 'Kilimanjaro, in Tanzania, is the highest mountain in Africa. Even though it is near the Equator, its peak has snow!',
    },
  },
  {
    q: { el: 'Το Σινικό Τείχος, που απλώνεται για χιλιάδες χιλιόμετρα πάνω σε λόφους και βουνά, χτίστηκε για να…', en: 'The Great Wall, which stretches for thousands of kilometres over hills and mountains, was built to…' },
    options: { el: ['κρατάει το νερό του ποταμού', 'προστατεύει την Κίνα από εισβολείς', 'ενώνει την Κίνα με την Ινδία', 'χωρίζει την Κίνα σε δύο χώρες'], en: ['hold back river water', 'protect China from invaders', 'connect China with India', 'split China into two countries'] },
    correct: 1,
    explanation: {
      el: 'Οι Κινέζοι έχτισαν το Σινικό Τείχος πριν από πολλούς αιώνες για να προστατεύουν τα σύνορά τους στον βορρά. Σήμερα είναι ένα από τα πιο γνωστά μνημεία του κόσμου.',
      en: 'The Chinese built the Great Wall many centuries ago to protect their northern borders. Today it is one of the best-known monuments in the world.',
    },
  },
  {
    q: { el: 'Ο Γιώργος είδε μια φωτογραφία με ένα ψηλό βουνό σε σχήμα κώνου και χιονισμένη κορυφή, σύμβολο της Ιαπωνίας. Ποιο είναι;', en: 'Giorgos saw a photo of a tall, cone-shaped mountain with a snowy peak, a symbol of Japan. Which mountain is it?' },
    options: { el: ['Το Έβερεστ', 'Το Κιλιμάντζαρο', 'Ο Όλυμπος', 'Το Φούτζι'], en: ['Everest', 'Kilimanjaro', 'Olympus', 'Fuji'] },
    correct: 3,
    explanation: {
      el: 'Το Φούτζι είναι το ψηλότερο βουνό της Ιαπωνίας και είναι ηφαίστειο. Το τέλειο σχήμα του το κάνει το πιο αγαπημένο σύμβολο της χώρας.',
      en: 'Fuji is the highest mountain in Japan and it is a volcano. Its perfect shape makes it the country’s favourite symbol.',
    },
  },

  // ── 15–16: Egypt ────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η πρωτεύουσα της Αιγύπτου;', en: 'What is the capital of Egypt?' },
    options: { el: ['Το Κάιρο', 'Η Αλεξάνδρεια', 'Η Τρίπολη', 'Το Ναϊρόμπι'], en: ['Cairo', 'Alexandria', 'Tripoli', 'Nairobi'] },
    correct: 0,
    explanation: {
      el: 'Το Κάιρο είναι η πρωτεύουσα της Αιγύπτου και βρίσκεται δίπλα στον Νείλο. Λίγο έξω από την πόλη στέκονται οι περίφημες πυραμίδες.',
      en: 'Cairo is the capital of Egypt and sits beside the Nile. Just outside the city stand the famous pyramids.',
    },
  },
  {
    q: { el: 'Γιατί λένε ότι η Αίγυπτος είναι «δώρο του Νείλου»;', en: 'Why do people say that Egypt is a “gift of the Nile”?' },
    options: { el: ['Γιατί ο Νείλος χωρίζει την Αίγυπτο από την Ασία', 'Γιατί χωρίς το νερό του Νείλου η χώρα θα ήταν σχεδόν όλη έρημος', 'Γιατί ο Νείλος πηγάζει από τις πυραμίδες', 'Γιατί ο Νείλος είναι το μοναδικό ποτάμι της Ασίας'], en: ['Because the Nile separates Egypt from Asia', 'Because without the Nile’s water the country would be almost all desert', 'Because the Nile springs from the pyramids', 'Because the Nile is the only river in Asia'] },
    correct: 1,
    explanation: {
      el: 'Η Αίγυπτος είναι γεμάτη έρημο. Μόνο η στενή λωρίδα γης δίπλα στον Νείλο είναι πράσινη και καλλιεργείται, γι\' αυτό σχεδόν όλοι οι Αιγύπτιοι ζουν κοντά στο ποτάμι.',
      en: 'Egypt is full of desert. Only the narrow strip of land beside the Nile is green and farmed, which is why almost all Egyptians live near the river.',
    },
  },

  // ── 17–18: Mediterranean neighbours ────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω χώρες της Αφρικής έχει ακτές στη Μεσόγειο;', en: 'Which of these African countries has a coast on the Mediterranean?' },
    options: { el: ['Η Κένυα', 'Η Νιγηρία', 'Η Λιβύη', 'Η Νότια Αφρική'], en: ['Kenya', 'Nigeria', 'Libya', 'South Africa'] },
    correct: 2,
    explanation: {
      el: 'Η Λιβύη βρίσκεται στη βόρεια Αφρική, απέναντι από την Ελλάδα. Γείτονές μας στη Μεσόγειο είναι επίσης η Αίγυπτος, η Τυνησία, η Αλγερία και το Μαρόκο.',
      en: 'Libya lies in North Africa, across the sea from Greece. Egypt, Tunisia, Algeria and Morocco are also our Mediterranean neighbours.',
    },
  },
  {
    q: { el: 'Η Μαρία ταξιδεύει με πλοίο γύρω γύρω από τη Μεσόγειο. Ποιες ηπείρους θα αγγίξει;', en: 'Maria sails all the way around the Mediterranean. Which continents will she touch?' },
    options: { el: ['Μόνο την Ευρώπη', 'Ευρώπη, Ασία και Αφρική', 'Ευρώπη και Αφρική', 'Ασία και Αμερική'], en: ['Only Europe', 'Europe, Asia and Africa', 'Europe and Africa', 'Asia and America'] },
    correct: 1,
    explanation: {
      el: 'Η Μεσόγειος βρέχει τρεις ηπείρους: την Ευρώπη στον βορρά, την Αφρική στον νότο και την Ασία στα ανατολικά (π.χ. Τουρκία, Συρία, Λίβανος).',
      en: 'The Mediterranean touches three continents: Europe to the north, Africa to the south and Asia to the east (for example Turkey, Syria and Lebanon).',
    },
  },
];
