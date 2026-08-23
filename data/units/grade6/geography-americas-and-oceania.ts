/**
 * ΣΤ' Δημοτικού · Γεωγραφία · Αμερική & Ωκεανία
 * ================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–4   the two Americas and their big countries: USA, Canada, Mexico, Brazil
 *   5–8   the giants of nature: the Amazon river and rainforest, the Andes, the Rockies
 *   9–13  Oceania: Australia (continent & country), New Zealand, the Pacific, the kangaroo
 *   14–18 the Great Barrier Reef, and mixed "put it all together" questions
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GEOGRAPHY_AMERICAS_AND_OCEANIA: QuizQuestion[] = [
  // ── 1–4: the Americas and their big countries ──────────────────────────────
  {
    q: { el: 'Η Αμερική χωρίζεται σε δύο μεγάλα μέρη. Ποια είναι αυτά;', en: 'The Americas are divided into two big parts. Which are they?' },
    options: {
      el: ['Ανατολική και Δυτική Αμερική', 'Βόρεια και Νότια Αμερική', 'Πάνω και Κάτω Αμερική', 'Παλιά και Νέα Αμερική'],
      en: ['East and West America', 'North and South America', 'Upper and Lower America', 'Old and New America'],
    },
    correct: 1,
    explanation: {
      el: 'Η Αμερική έχει τη Βόρεια και τη Νότια Αμερική. Τις ενώνει μια στενή λωρίδα γης, η Κεντρική Αμερική.',
      en: 'The Americas are North America and South America. A thin strip of land, Central America, joins them.',
    },
  },
  {
    q: { el: 'Ποια είναι η πρωτεύουσα των Ηνωμένων Πολιτειών της Αμερικής (ΗΠΑ);', en: 'What is the capital of the United States of America (USA)?' },
    options: {
      el: ['Νέα Υόρκη', 'Λος Άντζελες', 'Ουάσινγκτον', 'Σικάγο'],
      en: ['New York', 'Los Angeles', 'Washington', 'Chicago'],
    },
    correct: 2,
    explanation: {
      el: 'Η πρωτεύουσα των ΗΠΑ είναι η Ουάσινγκτον. Η Νέα Υόρκη είναι η πιο μεγάλη πόλη, αλλά όχι η πρωτεύουσα!',
      en: 'The capital of the USA is Washington. New York is the biggest city, but not the capital!',
    },
  },
  {
    q: { el: 'Ποια χώρα βρίσκεται βόρεια από τις ΗΠΑ και είναι η δεύτερη μεγαλύτερη χώρα στον κόσμο;', en: 'Which country lies north of the USA and is the second-largest country in the world?' },
    options: {
      el: ['Ο Καναδάς', 'Το Μεξικό', 'Η Βραζιλία', 'Η Αλάσκα'],
      en: ['Canada', 'Mexico', 'Brazil', 'Alaska'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Καναδάς είναι βόρεια από τις ΗΠΑ. Είναι τεράστιος, με παγωμένο βορρά, και η πρωτεύουσά του είναι η Οτάβα.',
      en: 'Canada lies north of the USA. It is huge, with a frozen north, and its capital is Ottawa.',
    },
  },
  {
    q: { el: 'Η Βραζιλία είναι η μεγαλύτερη χώρα της Νότιας Αμερικής. Ποια γλώσσα μιλούν εκεί;', en: 'Brazil is the largest country in South America. Which language do people speak there?' },
    options: {
      el: ['Ισπανικά', 'Βραζιλιάνικα', 'Αγγλικά', 'Πορτογαλικά'],
      en: ['Spanish', 'Brazilian', 'English', 'Portuguese'],
    },
    correct: 3,
    explanation: {
      el: 'Στη Βραζιλία μιλούν πορτογαλικά, γιατί παλιά ήταν αποικία της Πορτογαλίας. Στις περισσότερες άλλες χώρες της Νότιας Αμερικής μιλούν ισπανικά.',
      en: 'In Brazil people speak Portuguese, because it was once a colony of Portugal. Most other South American countries speak Spanish.',
    },
  },

  // ── 5–8: the giants of nature ──────────────────────────────────────────────
  {
    q: { el: 'Ο Αμαζόνιος είναι ο ποταμός με το περισσότερο νερό στον κόσμο. Σε ποια χώρα βρίσκεται το μεγαλύτερο μέρος του;', en: 'The Amazon carries more water than any other river in the world. In which country is most of it found?' },
    options: {
      el: ['Στο Μεξικό', 'Στη Βραζιλία', 'Στον Καναδά', 'Στην Αργεντινή'],
      en: ['Mexico', 'Brazil', 'Canada', 'Argentina'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Αμαζόνιος διασχίζει τη Βραζιλία και χύνεται στον Ατλαντικό. Γύρω του απλώνεται το μεγαλύτερο τροπικό δάσος της Γης.',
      en: 'The Amazon flows across Brazil and empties into the Atlantic. Around it spreads the largest rainforest on Earth.',
    },
  },
  {
    q: { el: 'Γιατί το δάσος του Αμαζονίου λέγεται «ο πνεύμονας της Γης»;', en: 'Why is the Amazon rainforest called "the lungs of the Earth"?' },
    options: {
      el: ['Επειδή τα δέντρα του παράγουν πολύ οξυγόνο', 'Επειδή έχει σχήμα πνεύμονα', 'Επειδή εκεί φυσάει πολύ δυνατός άνεμος', 'Επειδή έχει τον πιο καθαρό αέρα για να αναπνέεις'],
      en: ['Because its trees make a lot of oxygen', 'Because it is shaped like a lung', 'Because very strong winds blow there', 'Because it has the cleanest air to breathe'],
    },
    correct: 0,
    explanation: {
      el: 'Τα εκατομμύρια δέντρα του Αμαζονίου παράγουν οξυγόνο και ρουφούν διοξείδιο του άνθρακα — όπως οι πνεύμονες καθαρίζουν το αίμα μας.',
      en: 'The Amazon\'s millions of trees make oxygen and soak up carbon dioxide — just as our lungs clean our blood.',
    },
  },
  {
    q: { el: 'Οι Άνδεις είναι η μεγαλύτερη σε μήκος οροσειρά του κόσμου. Πού βρίσκονται;', en: 'The Andes are the longest mountain range in the world. Where are they?' },
    options: {
      el: ['Στα ανατολικά της Βόρειας Αμερικής', 'Στα δυτικά της Νότιας Αμερικής', 'Στο κέντρο της Αυστραλίας', 'Στον βορρά του Καναδά'],
      en: ['In the east of North America', 'In the west of South America', 'In the centre of Australia', 'In the north of Canada'],
    },
    correct: 1,
    explanation: {
      el: 'Οι Άνδεις τρέχουν σαν μια τεράστια ραχοκοκαλιά κατά μήκος της δυτικής Νότιας Αμερικής, δίπλα στον Ειρηνικό Ωκεανό.',
      en: 'The Andes run like a giant backbone along the west of South America, next to the Pacific Ocean.',
    },
  },
  {
    q: { el: 'Τα Βραχώδη Όρη (Ρόκι) είναι η μεγάλη οροσειρά της Βόρειας Αμερικής. Ποιες χώρες διασχίζουν;', en: 'The Rocky Mountains (Rockies) are the great mountain range of North America. Which countries do they cross?' },
    options: {
      el: ['Τη Βραζιλία και την Αργεντινή', 'Το Μεξικό και τη Βραζιλία', 'Τον Καναδά και τις ΗΠΑ', 'Την Αυστραλία και τη Νέα Ζηλανδία'],
      en: ['Brazil and Argentina', 'Mexico and Brazil', 'Canada and the USA', 'Australia and New Zealand'],
    },
    correct: 2,
    explanation: {
      el: 'Τα Βραχώδη Όρη απλώνονται στα δυτικά του Καναδά και των ΗΠΑ. Οι Άνδεις είναι στη Νότια Αμερική — μην τα μπερδεύεις!',
      en: 'The Rockies stretch across the west of Canada and the USA. The Andes are in South America — don\'t mix them up!',
    },
  },

  // ── 9–13: Oceania ──────────────────────────────────────────────────────────
  {
    q: { el: 'Η Ωκεανία είναι η πιο μικρή ήπειρος. Ποια είναι η μεγαλύτερη χώρα της;', en: 'Oceania is the smallest continent. Which is its largest country?' },
    options: {
      el: ['Η Νέα Ζηλανδία', 'Η Αυστραλία', 'Η Ινδονησία', 'Η Παπούα Νέα Γουινέα'],
      en: ['New Zealand', 'Australia', 'Indonesia', 'Papua New Guinea'],
    },
    correct: 1,
    explanation: {
      el: 'Η Αυστραλία είναι τόσο μεγάλη που είναι ταυτόχρονα χώρα και το κύριο κομμάτι της ηπείρου. Γύρω της υπάρχουν χιλιάδες μικρά νησιά.',
      en: 'Australia is so big that it is both a country and the main part of the continent. Around it are thousands of small islands.',
    },
  },
  {
    q: { el: 'Ποια είναι η πρωτεύουσα της Αυστραλίας;', en: 'What is the capital of Australia?' },
    options: {
      el: ['Το Σίδνεϊ', 'Η Μελβούρνη', 'Η Καμπέρα', 'Το Ουέλινγκτον'],
      en: ['Sydney', 'Melbourne', 'Canberra', 'Wellington'],
    },
    correct: 2,
    explanation: {
      el: 'Η πρωτεύουσα της Αυστραλίας είναι η Καμπέρα. Το Σίδνεϊ με τη διάσημη Όπερα είναι η μεγαλύτερη πόλη, όχι η πρωτεύουσα.',
      en: 'The capital of Australia is Canberra. Sydney, with its famous Opera House, is the biggest city, not the capital.',
    },
  },
  {
    q: { el: 'Ποιος ωκεανός βρέχει την ανατολική Αυστραλία και χωρίζει την Αμερική από την Ασία;', en: 'Which ocean washes eastern Australia and separates the Americas from Asia?' },
    options: {
      el: ['Ο Ατλαντικός', 'Ο Ινδικός', 'Ο Αρκτικός', 'Ο Ειρηνικός'],
      en: ['The Atlantic', 'The Indian Ocean', 'The Arctic', 'The Pacific'],
    },
    correct: 3,
    explanation: {
      el: 'Ο Ειρηνικός είναι ο μεγαλύτερος ωκεανός της Γης. Απλώνεται από την Αμερική μέχρι την Ασία και την Αυστραλία.',
      en: 'The Pacific is the largest ocean on Earth. It stretches from the Americas all the way to Asia and Australia.',
    },
  },
  {
    q: { el: 'Η Νέα Ζηλανδία αποτελείται κυρίως από δύο μεγάλα νησιά. Πού βρίσκεται σε σχέση με την Αυστραλία;', en: 'New Zealand is made up mainly of two large islands. Where is it in relation to Australia?' },
    options: {
      el: ['Νοτιοανατολικά της Αυστραλίας', 'Βόρεια της Αυστραλίας', 'Ενωμένη με την Αυστραλία από στεριά', 'Δυτικά της Αυστραλίας'],
      en: ['South-east of Australia', 'North of Australia', 'Joined to Australia by land', 'West of Australia'],
    },
    correct: 0,
    explanation: {
      el: 'Η Νέα Ζηλανδία βρίσκεται νοτιοανατολικά της Αυστραλίας, πέρα από τη θάλασσα. Οι πρώτοι κάτοικοί της ήταν οι Μαορί.',
      en: 'New Zealand lies south-east of Australia, across the sea. Its first people were the Maori.',
    },
  },
  {
    q: { el: 'Το καγκουρό είναι το πιο γνωστό ζώο της Αυστραλίας. Τι το ξεχωρίζει;', en: 'The kangaroo is Australia\'s most famous animal. What makes it special?' },
    options: {
      el: ['Γεννά αυγά', 'Κουβαλά το μωρό του σε μια θήκη στην κοιλιά', 'Ζει μόνο στο νερό', 'Πετάει μικρές αποστάσεις'],
      en: ['It lays eggs', 'It carries its baby in a pouch on its belly', 'It lives only in water', 'It can fly short distances'],
    },
    correct: 1,
    explanation: {
      el: 'Το καγκουρό είναι μαρσιποφόρο: το μικρό του μεγαλώνει μέσα σε μια θήκη, τον μάρσιπο. Προχωρά με μεγάλα άλματα στα πίσω πόδια του.',
      en: 'The kangaroo is a marsupial: its baby grows inside a pouch. It moves with big hops on its back legs.',
    },
  },

  // ── 14–18: the Great Barrier Reef and putting it all together ──────────────
  {
    q: { el: 'Ο Μεγάλος Κοραλλιογενής Ύφαλος είναι ο μεγαλύτερος ύφαλος του κόσμου. Ποιος τον έφτιαξε;', en: 'The Great Barrier Reef is the largest reef in the world. What built it?' },
    options: {
      el: ['Ηφαίστεια που έσβησαν', 'Άνθρωποι, για να προστατεύουν την ακτή', 'Εκατομμύρια μικροσκοπικά ζώα, τα κοράλλια', 'Κύματα που κουβάλησαν άμμο'],
      en: ['Volcanoes that died out', 'People, to protect the coast', 'Millions of tiny animals, the corals', 'Waves that carried sand'],
    },
    correct: 2,
    explanation: {
      el: 'Τα κοράλλια είναι μικροσκοπικά ζώα που χτίζουν σκληρούς σκελετούς. Εκατομμύρια μαζί, για χιλιάδες χρόνια, έφτιαξαν τον ύφαλο.',
      en: 'Corals are tiny animals that build hard skeletons. Millions of them together, over thousands of years, built the reef.',
    },
  },
  {
    q: { el: 'Κοντά σε ποια ακτή της Αυστραλίας βρίσκεται ο Μεγάλος Κοραλλιογενής Ύφαλος;', en: 'Near which coast of Australia is the Great Barrier Reef?' },
    options: {
      el: ['Στη νοτιοδυτική ακτή', 'Στη βορειοανατολική ακτή', 'Στο κέντρο, σε μια μεγάλη λίμνη', 'Στην ακτή της Νέας Ζηλανδίας'],
      en: ['The south-west coast', 'The north-east coast', 'In the centre, in a big lake', 'The coast of New Zealand'],
    },
    correct: 1,
    explanation: {
      el: 'Ο ύφαλος απλώνεται κατά μήκος της βορειοανατολικής ακτής της Αυστραλίας, μέσα στα ζεστά νερά του Ειρηνικού. Είναι τόσο μεγάλος που φαίνεται από το διάστημα!',
      en: 'The reef runs along the north-east coast of Australia, in the warm waters of the Pacific. It is so big it can be seen from space!',
    },
  },
  {
    q: { el: 'Η Ελένη ταξιδεύει από το Μεξικό προς τον Καναδά. Ποια χώρα θα περάσει στη μέση;', en: 'Eleni travels from Mexico to Canada. Which country will she cross in the middle?' },
    options: {
      el: ['Τη Βραζιλία', 'Τις ΗΠΑ', 'Την Αργεντινή', 'Καμία, γιατί συνορεύουν'],
      en: ['Brazil', 'The USA', 'Argentina', 'None, they share a border'],
    },
    correct: 1,
    explanation: {
      el: 'Στη Βόρεια Αμερική, από νότο προς βορρά: Μεξικό, ΗΠΑ, Καναδάς. Οι ΗΠΑ βρίσκονται ανάμεσα.',
      en: 'In North America, from south to north: Mexico, USA, Canada. The USA sits in between.',
    },
  },
  {
    q: { el: 'Στην Ελλάδα είναι χειμώνας, Ιανουάριος. Τι εποχή είναι στην Αυστραλία;', en: 'In Greece it is winter, January. What season is it in Australia?' },
    options: {
      el: ['Χειμώνας, όπως παντού', 'Φθινόπωρο', 'Καλοκαίρι', 'Άνοιξη'],
      en: ['Winter, like everywhere', 'Autumn', 'Summer', 'Spring'],
    },
    correct: 2,
    explanation: {
      el: 'Η Αυστραλία βρίσκεται στο νότιο ημισφαίριο, κάτω από τον Ισημερινό. Εκεί οι εποχές είναι ανάποδα: όταν εμείς έχουμε χειμώνα, αυτοί έχουν καλοκαίρι!',
      en: 'Australia is in the southern hemisphere, below the Equator. The seasons are flipped there: when we have winter, they have summer!',
    },
  },
  {
    q: { el: 'Ο Νίκος έγραψε τέσσερα ζευγάρια «μέρος – ήπειρος». Ποιο ζευγάρι είναι ΛΑΘΟΣ;', en: 'Nikos wrote four "place – continent" pairs. Which pair is WRONG?' },
    options: {
      el: ['Αμαζόνιος – Νότια Αμερική', 'Βραχώδη Όρη – Βόρεια Αμερική', 'Καγκουρό – Ωκεανία', 'Άνδεις – Ωκεανία'],
      en: ['Amazon – South America', 'Rocky Mountains – North America', 'Kangaroo – Oceania', 'Andes – Oceania'],
    },
    correct: 3,
    explanation: {
      el: 'Οι Άνδεις είναι στη Νότια Αμερική, όχι στην Ωκεανία. Τα άλλα τρία ζευγάρια είναι σωστά.',
      en: 'The Andes are in South America, not Oceania. The other three pairs are correct.',
    },
  },
];
