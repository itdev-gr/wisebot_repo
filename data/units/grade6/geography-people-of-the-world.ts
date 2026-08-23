/**
 * ΣΤ' Δημοτικού · Γεωγραφία · Οι Άνθρωποι της Γης
 * ================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–4   population: how many we are, where people live (and where they don't), why
 *   5–7   languages: many languages, the most-spoken ones, English as a bridge
 *   8–9   religions: the world has many, respect for all — no doctrine
 *   10–12 life in hot deserts: water, clothes, nomads, oases
 *   13–14 life in the polar regions: the Inuit, the long night
 *   15–16 life in tropical forests: rain, rivers, houses on stilts
 *   17–18 temperate zones: four seasons, why most people live there
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GEOGRAPHY_PEOPLE_OF_THE_WORLD: QuizQuestion[] = [
  // ── 1–4: population and where people live ──────────────────────────────────
  {
    q: { el: 'Περίπου πόσοι άνθρωποι ζουν σήμερα στη Γη;', en: 'About how many people live on Earth today?' },
    options: { el: ['8 εκατομμύρια', '800 εκατομμύρια', '8 δισεκατομμύρια', '80 δισεκατομμύρια'], en: ['8 million', '800 million', '8 billion', '80 billion'] },
    correct: 2,
    explanation: {
      el: 'Η Γη έχει πάνω από 8 δισεκατομμύρια κατοίκους — δηλαδή 8.000 εκατομμύρια! Ο αριθμός μεγαλώνει κάθε χρόνο.',
      en: 'Earth has more than 8 billion people — that is 8,000 million! The number grows every year.',
    },
  },
  {
    q: { el: 'Ποια ήπειρος έχει τους περισσότερους κατοίκους;', en: 'Which continent has the most people?' },
    options: { el: ['Η Ευρώπη', 'Η Ασία', 'Η Αφρική', 'Η Αμερική'], en: ['Europe', 'Asia', 'Africa', 'America'] },
    correct: 1,
    explanation: {
      el: 'Στην Ασία ζουν περισσότεροι από τους μισούς ανθρώπους της Γης. Εκεί βρίσκονται η Ινδία και η Κίνα, οι δύο πολυπληθέστερες χώρες.',
      en: 'More than half of all people on Earth live in Asia. India and China, the two most populous countries, are there.',
    },
  },
  {
    q: { el: 'Οι άνθρωποι είναι μοιρασμένοι στη Γη…', en: 'People are spread across the Earth…' },
    options: { el: ['ίσα παντού', 'άνισα: πολλοί σε κάποια μέρη, ελάχιστοι σε άλλα', 'μόνο κοντά στη θάλασσα', 'μόνο στα βουνά'], en: ['equally everywhere', 'unequally: many in some places, very few in others', 'only near the sea', 'only in the mountains'] },
    correct: 1,
    explanation: {
      el: 'Ο πληθυσμός είναι άνισα μοιρασμένος. Κάποιες περιοχές είναι γεμάτες πόλεις, ενώ έρημοι, πόλοι και ψηλά βουνά είναι σχεδόν άδεια.',
      en: 'Population is spread unequally. Some regions are full of cities, while deserts, the poles and high mountains are almost empty.',
    },
  },
  {
    q: { el: 'Ο Νίκος ψάχνει στον χάρτη ένα μέρος όπου ζουν πολλοί άνθρωποι. Πού είναι πιο πιθανό να το βρει;', en: 'Nikos is looking on the map for a place where many people live. Where is he most likely to find one?' },
    options: { el: ['Σε μια παγωμένη περιοχή', 'Σε μια πεδιάδα δίπλα σε μεγάλο ποτάμι', 'Στη μέση μιας ερήμου', 'Στην κορυφή ενός ψηλού βουνού'], en: ['In a frozen region', 'On a plain next to a big river', 'In the middle of a desert', 'On the top of a high mountain'] },
    correct: 1,
    explanation: {
      el: 'Οι άνθρωποι μαζεύονται εκεί που υπάρχει νερό, εύφορη γη και ήπιο κλίμα — γι\' αυτό οι πεδιάδες κοντά σε ποτάμια έχουν πολλές πόλεις.',
      en: 'People gather where there is water, fertile soil and a mild climate — that is why plains near rivers have many cities.',
    },
  },

  // ── 5–7: languages ─────────────────────────────────────────────────────────
  {
    q: { el: 'Περίπου πόσες γλώσσες μιλιούνται σήμερα στον κόσμο;', en: 'About how many languages are spoken in the world today?' },
    options: { el: ['Περίπου 70', 'Περίπου 700', 'Περίπου 7.000', 'Περίπου 70.000'], en: ['About 70', 'About 700', 'About 7,000', 'About 70,000'] },
    correct: 2,
    explanation: {
      el: 'Στον κόσμο μιλιούνται γύρω στις 7.000 γλώσσες! Πολλές από αυτές τις μιλούν λίγοι άνθρωποι και κινδυνεύουν να χαθούν.',
      en: 'Around 7,000 languages are spoken in the world! Many of them are spoken by few people and are in danger of disappearing.',
    },
  },
  {
    q: { el: 'Ποια γλώσσα έχει τους περισσότερους ανθρώπους που τη μιλούν ως μητρική;', en: 'Which language has the most native speakers?' },
    options: { el: ['Τα Αγγλικά', 'Τα Ισπανικά', 'Τα Κινεζικά (Μανδαρινικά)', 'Τα Ελληνικά'], en: ['English', 'Spanish', 'Chinese (Mandarin)', 'Greek'] },
    correct: 2,
    explanation: {
      el: 'Τα Μανδαρινικά Κινεζικά είναι η μητρική γλώσσα για πάνω από 900 εκατομμύρια ανθρώπους, γιατί η Κίνα έχει τεράστιο πληθυσμό.',
      en: 'Mandarin Chinese is the native language of more than 900 million people, because China has a huge population.',
    },
  },
  {
    q: { el: 'Η Ελένη από την Ελλάδα γνωρίζει στις διακοπές ένα παιδί από την Ιαπωνία. Σε ποια γλώσσα είναι πιο πιθανό να συνεννοηθούν;', en: 'Eleni from Greece meets a child from Japan on holiday. In which language are they most likely to communicate?' },
    options: { el: ['Στα Αγγλικά', 'Στα Ιαπωνικά', 'Στα Λατινικά', 'Στα Ελληνικά'], en: ['In English', 'In Japanese', 'In Latin', 'In Greek'] },
    correct: 0,
    explanation: {
      el: 'Τα Αγγλικά είναι η πιο διαδεδομένη «γλώσσα-γέφυρα»: τα μαθαίνουν παιδιά σε όλο τον κόσμο για να μιλούν με ανθρώπους από άλλες χώρες.',
      en: 'English is the most common “bridge language”: children all over the world learn it to talk with people from other countries.',
    },
  },

  // ── 8–9: religions ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω θρησκείες έχει τους περισσότερους πιστούς στον κόσμο;', en: 'Which of these religions has the most followers in the world?' },
    options: { el: ['Ο Βουδισμός', 'Ο Χριστιανισμός', 'Ο Ινδουισμός', 'Ο Ιουδαϊσμός'], en: ['Buddhism', 'Christianity', 'Hinduism', 'Judaism'] },
    correct: 1,
    explanation: {
      el: 'Ο Χριστιανισμός έχει τους περισσότερους πιστούς (πάνω από 2 δισεκατομμύρια). Ακολουθούν το Ισλάμ, ο Ινδουισμός και ο Βουδισμός.',
      en: 'Christianity has the most followers (over 2 billion). Islam, Hinduism and Buddhism come next.',
    },
  },
  {
    q: { el: 'Ο Γιώργος μαθαίνει ότι ο συμμαθητής του έχει διαφορετική θρησκεία. Τι μας διδάσκει η Γεωγραφία για αυτό;', en: 'Giorgos learns that his classmate has a different religion. What does Geography teach us about this?' },
    options: { el: ['Ότι όλοι οι άνθρωποι πρέπει να έχουν την ίδια θρησκεία', 'Ότι η Γη έχει πολλές θρησκείες και όλες αξίζουν σεβασμό', 'Ότι κάθε χώρα έχει μόνο μία θρησκεία', 'Ότι η θρησκεία εξαρτάται από το κλίμα'], en: ['That all people should have the same religion', 'That the world has many religions and all deserve respect', 'That every country has only one religion', 'That religion depends on the climate'] },
    correct: 1,
    explanation: {
      el: 'Στη Γη υπάρχουν πολλές θρησκείες, και συχνά πολλές μαζί στην ίδια χώρα. Σεβόμαστε τις πεποιθήσεις όλων, όπως θέλουμε να σέβονται τις δικές μας.',
      en: 'There are many religions on Earth, often several in the same country. We respect everyone’s beliefs, as we want ours respected.',
    },
  },

  // ── 10–12: life in hot deserts ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το μεγαλύτερο πρόβλημα για όποιον ζει σε μια ζεστή έρημο, όπως η Σαχάρα;', en: 'What is the biggest problem for someone living in a hot desert, like the Sahara?' },
    options: { el: ['Το πολύ κρύο τη μέρα', 'Η έλλειψη νερού', 'Τα πολλά δέντρα', 'Οι συνεχείς βροχές'], en: ['The great cold during the day', 'The lack of water', 'The many trees', 'The constant rain'] },
    correct: 1,
    explanation: {
      el: 'Στην έρημο βρέχει ελάχιστα, γι\' αυτό το νερό είναι ο μεγάλος θησαυρός. Οι άνθρωποι ζουν κοντά σε πηγάδια και οάσεις.',
      en: 'It hardly ever rains in the desert, so water is the great treasure. People live near wells and oases.',
    },
  },
  {
    q: { el: 'Γιατί οι κάτοικοι της ερήμου φορούν μακριά, φαρδιά ρούχα και καλύπτουν το κεφάλι τους;', en: 'Why do desert people wear long, loose clothes and cover their heads?' },
    options: { el: ['Για να προστατεύονται από τον ήλιο και την άμμο', 'Γιατί κάνει πάντα κρύο', 'Για να μην τους βλέπουν τα ζώα', 'Γιατί βρέχει συνέχεια'], en: ['To protect themselves from the sun and the sand', 'Because it is always cold', 'So the animals cannot see them', 'Because it rains all the time'] },
    correct: 0,
    explanation: {
      el: 'Τα φαρδιά, ανοιχτόχρωμα ρούχα κρατούν τον καυτό ήλιο μακριά από το δέρμα και σταματούν την άμμο που σηκώνει ο άνεμος.',
      en: 'Loose, light-coloured clothes keep the burning sun off the skin and stop the sand that the wind blows around.',
    },
  },
  {
    q: { el: 'Πώς λέγονται οι άνθρωποι της ερήμου που μετακινούνται συνεχώς με τα ζώα τους, ψάχνοντας νερό και βοσκή;', en: 'What do we call the desert people who keep moving with their animals, looking for water and grazing land?' },
    options: { el: ['Αγρότες', 'Ψαράδες', 'Νομάδες', 'Ορειβάτες'], en: ['Farmers', 'Fishermen', 'Nomads', 'Mountaineers'] },
    correct: 2,
    explanation: {
      el: 'Οι νομάδες δεν έχουν μόνιμο σπίτι. Ζουν σε σκηνές και ταξιδεύουν με καμήλες και κατσίκες από όαση σε όαση.',
      en: 'Nomads have no permanent home. They live in tents and travel with camels and goats from oasis to oasis.',
    },
  },

  // ── 13–14: life in the polar regions ───────────────────────────────────────
  {
    q: { el: 'Πώς ονομάζονται οι λαοί που ζουν εδώ και αιώνες στις παγωμένες περιοχές της Αρκτικής, όπως στη Γροιλανδία και τον Καναδά;', en: 'What are the peoples called who have lived for centuries in the frozen Arctic regions, such as Greenland and Canada?' },
    options: { el: ['Οι Βεδουίνοι', 'Οι Ινουίτ', 'Οι Μαορί', 'Οι Ίνκας'], en: ['The Bedouins', 'The Inuit', 'The Maori', 'The Incas'] },
    correct: 1,
    explanation: {
      el: 'Οι Ινουίτ ζουν στην Αρκτική. Παραδοσιακά ψάρευαν και κυνηγούσαν φώκιες, και έφτιαχναν ζεστά ρούχα από γούνες. Οι Βεδουίνοι είναι λαός της ερήμου.',
      en: 'The Inuit live in the Arctic. Traditionally they fished and hunted seals, and made warm clothes from furs. The Bedouins are a desert people.',
    },
  },
  {
    q: { el: 'Τι παράξενο συμβαίνει τον χειμώνα κοντά στον Βόρειο Πόλο;', en: 'What strange thing happens in winter near the North Pole?' },
    options: { el: ['Ο ήλιος δεν ανατέλλει για εβδομάδες ή και μήνες', 'Βρέχει κάθε μέρα', 'Η θερμοκρασία φτάνει τους 40 °C', 'Η θάλασσα γίνεται ζεστή'], en: ['The sun does not rise for weeks or even months', 'It rains every day', 'The temperature reaches 40 °C', 'The sea becomes warm'] },
    correct: 0,
    explanation: {
      el: 'Στις πολικές περιοχές ο χειμώνας έχει «πολική νύχτα»: ο ήλιος μένει κάτω από τον ορίζοντα για πολύ καιρό. Το καλοκαίρι γίνεται το αντίθετο — ο ήλιος δεν δύει!',
      en: 'In the polar regions winter brings the “polar night”: the sun stays below the horizon for a long time. In summer the opposite happens — the sun never sets!',
    },
  },

  // ── 15–16: life in tropical forests ────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το μεγαλύτερο τροπικό δάσος της Γης;', en: 'Which is the largest tropical forest on Earth?' },
    options: { el: ['Το δάσος του Αμαζονίου στη Νότια Αμερική', 'Το δάσος της Σαχάρας στην Αφρική', 'Τα δάση της Σιβηρίας στη Ρωσία', 'Τα δάση της Πίνδου στην Ελλάδα'], en: ['The Amazon forest in South America', 'The Sahara forest in Africa', 'The forests of Siberia in Russia', 'The forests of Pindus in Greece'] },
    correct: 0,
    explanation: {
      el: 'Ο Αμαζόνιος στη Νότια Αμερική είναι το μεγαλύτερο τροπικό δάσος του κόσμου. Είναι ζεστό, υγρό και γεμάτο ζώα και φυτά. (Η Σαχάρα είναι έρημος, όχι δάσος!)',
      en: 'The Amazon in South America is the largest tropical forest in the world. It is hot, humid and full of animals and plants. (The Sahara is a desert, not a forest!)',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει φωτογραφία από ένα χωριό σε τροπικό δάσος: τα σπίτια είναι χτισμένα πάνω σε ψηλά ξύλινα πόδια. Γιατί;', en: 'Maria sees a photo of a village in a tropical forest: the houses are built on tall wooden legs. Why?' },
    options: { el: ['Για να βλέπουν μακριά', 'Για να προστατεύονται από τα νερά της βροχής και των ποταμών', 'Γιατί δεν υπάρχει ξύλο χαμηλά', 'Για να είναι πιο κοντά στον ήλιο'], en: ['So they can see far away', 'To protect them from rainwater and flooding rivers', 'Because there is no wood lower down', 'To be closer to the sun'] },
    correct: 1,
    explanation: {
      el: 'Στα τροπικά δάση βρέχει σχεδόν κάθε μέρα και τα ποτάμια φουσκώνουν. Τα σπίτια σε πασσάλους μένουν στεγνά και δροσερά.',
      en: 'In tropical forests it rains almost every day and the rivers swell. Houses on stilts stay dry and cool.',
    },
  },

  // ── 17–18: temperate zones ─────────────────────────────────────────────────
  {
    q: { el: 'Η Ελλάδα βρίσκεται στην εύκρατη ζώνη. Τι σημαίνει αυτό για το κλίμα της;', en: 'Greece is in the temperate zone. What does that mean for its climate?' },
    options: { el: ['Έχει πάντα πάγο και χιόνι', 'Έχει τέσσερις εποχές, χωρίς ακραία ζέστη ή κρύο', 'Βρέχει κάθε μέρα όλο τον χρόνο', 'Δεν βρέχει ποτέ'], en: ['It always has ice and snow', 'It has four seasons, without extreme heat or cold', 'It rains every day all year', 'It never rains'] },
    correct: 1,
    explanation: {
      el: 'Η εύκρατη ζώνη βρίσκεται ανάμεσα στην τροπική και την πολική ζώνη. Έχει άνοιξη, καλοκαίρι, φθινόπωρο και χειμώνα, και ούτε πολύ ζέστη ούτε πολύ κρύο.',
      en: 'The temperate zone lies between the tropical and the polar zones. It has spring, summer, autumn and winter, and is neither very hot nor very cold.',
    },
  },
  {
    q: { el: 'Γιατί οι περισσότεροι άνθρωποι της Γης ζουν στις εύκρατες ζώνες και όχι στις ερήμους ή τους πόλους;', en: 'Why do most people on Earth live in the temperate zones and not in the deserts or at the poles?' },
    options: { el: ['Γιατί εκεί ο ήλιος δεν δύει ποτέ', 'Γιατί το ήπιο κλίμα και η βροχή επιτρέπουν καλλιέργειες και εύκολη ζωή', 'Γιατί απαγορεύεται να ζουν αλλού', 'Γιατί εκεί δεν υπάρχουν καθόλου βουνά'], en: ['Because the sun never sets there', 'Because the mild climate and rain allow farming and an easier life', 'Because living elsewhere is forbidden', 'Because there are no mountains there at all'] },
    correct: 1,
    explanation: {
      el: 'Στην εύκρατη ζώνη το κλίμα είναι ήπιο και βρέχει αρκετά, άρα φυτρώνουν σιτάρι, λαχανικά και φρούτα. Όπου υπάρχει τροφή και νερό, χτίζονται πόλεις.',
      en: 'In the temperate zone the climate is mild and there is enough rain, so wheat, vegetables and fruit grow. Where there is food and water, cities are built.',
    },
  },
];
