/**
 * Ε' Δημοτικού · Γεωγραφία · Φύση, Ηφαίστεια & Σεισμοί
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–4   flora & fauna: what the words mean, Greek trees, animals (bear, loggerhead turtle)
 *   5–7   forests and wetlands: what a wetland is, why they matter, Prespa
 *   8–11  volcanoes: Santorini's caldera, Nisyros, what lava and ash are
 *   12–14 earthquakes: why Greece shakes, the Richter scale, what to do in class
 *   15–16 floods and wildfires: how they start, how to help prevent them
 *   17–18 national parks: Olympus, what protection means
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GEOGRAPHY_NATURE_AND_DISASTERS: QuizQuestion[] = [
  // ── 1–4: flora & fauna ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η λέξη «χλωρίδα»;', en: 'What does the word “flora” mean?' },
    options: { el: ['Όλα τα φυτά ενός τόπου', 'Όλα τα ζώα ενός τόπου', 'Τα ποτάμια ενός τόπου', 'Ο καιρός ενός τόπου'], en: ['All the plants of a place', 'All the animals of a place', 'The rivers of a place', 'The weather of a place'] },
    correct: 0,
    explanation: {
      el: 'Χλωρίδα = τα φυτά ενός τόπου. Πανίδα = τα ζώα. Θυμήσου: «χλωρό» σημαίνει πράσινο, όπως τα φυτά!',
      en: 'Flora = the plants of a place. Fauna = the animals. Remember: flora sounds like “flower”!',
    },
  },
  {
    q: { el: 'Ποιο από αυτά τα δέντρα φυτρώνει σχεδόν παντού στην Ελλάδα και μας δίνει λάδι;', en: 'Which of these trees grows almost everywhere in Greece and gives us oil?' },
    options: { el: ['Η σημύδα', 'Η ελιά', 'Ο φοίνικας', 'Η σεκόγια'], en: ['The birch', 'The olive tree', 'The palm tree', 'The sequoia'] },
    correct: 1,
    explanation: {
      el: 'Η ελιά αγαπά τον ήλιο και το ξηρό καλοκαίρι της Ελλάδας. Από τον καρπό της βγαίνει το ελαιόλαδο.',
      en: 'The olive tree loves the sun and the dry Greek summer. Its fruit gives us olive oil.',
    },
  },
  {
    q: { el: 'Ποιο μεγάλο άγριο ζώο ζει ακόμη στα δάση της Πίνδου και της Ροδόπης;', en: 'Which big wild animal still lives in the forests of Pindus and Rhodope?' },
    options: { el: ['Το λιοντάρι', 'Ο ελέφαντας', 'Η καφέ αρκούδα', 'Η καμηλοπάρδαλη'], en: ['The lion', 'The elephant', 'The brown bear', 'The giraffe'] },
    correct: 2,
    explanation: {
      el: 'Η καφέ αρκούδα ζει στα βουνά της βόρειας Ελλάδας. Είναι προστατευόμενο ζώο και κοιμάται τον χειμώνα.',
      en: 'The brown bear lives in the mountains of northern Greece. It is protected and sleeps through the winter.',
    },
  },
  {
    q: { el: 'Η θαλάσσια χελώνα καρέτα-καρέτα έρχεται στις ελληνικές παραλίες για να…', en: 'The loggerhead sea turtle (Caretta caretta) comes to Greek beaches to…' },
    options: { el: ['ψαρέψει', 'κοιμηθεί τον χειμώνα', 'βρει γλυκό νερό', 'γεννήσει τα αυγά της'], en: ['go fishing', 'sleep through the winter', 'find fresh water', 'lay its eggs'] },
    correct: 3,
    explanation: {
      el: 'Η καρέτα-καρέτα γεννά τα αυγά της στην άμμο, π.χ. στη Ζάκυνθο. Γι\' αυτό δεν πατάμε τις φωλιές της!',
      en: 'The loggerhead lays its eggs in the sand, for example on Zakynthos. That is why we never step on its nests!',
    },
  },

  // ── 5–7: forests and wetlands ─────────────────────────────────────────────
  {
    q: { el: 'Γιατί λέμε ότι τα δάση είναι «τα πνευμόνια της Γης»;', en: 'Why do we say forests are “the lungs of the Earth”?' },
    options: { el: ['Γιατί έχουν σχήμα πνεύμονα', 'Γιατί τα δέντρα δίνουν οξυγόνο', 'Γιατί μέσα τους φυσάει πολύ', 'Γιατί είναι πάντα υγρά'], en: ['Because they are shaped like lungs', 'Because trees give out oxygen', 'Because it is very windy inside them', 'Because they are always wet'] },
    correct: 1,
    explanation: {
      el: 'Τα δέντρα παίρνουν διοξείδιο του άνθρακα και δίνουν οξυγόνο — τον αέρα που αναπνέουμε.',
      en: 'Trees take in carbon dioxide and give out oxygen — the air we breathe.',
    },
  },
  {
    q: { el: 'Τι είναι ένας υγρότοπος;', en: 'What is a wetland?' },
    options: { el: ['Μια περιοχή με λίμνες, βάλτους ή δέλτα ποταμών', 'Μια ψηλή βουνοκορφή με χιόνι', 'Μια έρημος με άμμο', 'Μια πόλη δίπλα στη θάλασσα'], en: ['An area with lakes, marshes or river deltas', 'A high mountain peak with snow', 'A sandy desert', 'A city next to the sea'] },
    correct: 0,
    explanation: {
      el: 'Υγρότοπος = τόπος που σκεπάζεται από λίγο νερό: λίμνες, βάλτοι, δέλτα. Εκεί ζουν χιλιάδες πουλιά.',
      en: 'A wetland is land covered by shallow water: lakes, marshes, deltas. Thousands of birds live there.',
    },
  },
  {
    q: { el: 'Οι λίμνες των Πρεσπών είναι γνωστές γιατί εκεί φωλιάζουν πολλοί…', en: 'The Prespa lakes are famous because many of these nest there…' },
    options: { el: ['πιγκουίνοι', 'παπαγάλοι', 'πελεκάνοι', 'αετοί της θάλασσας'], en: ['penguins', 'parrots', 'pelicans', 'sea eagles'] },
    correct: 2,
    explanation: {
      el: 'Στις Πρέσπες ζει η μεγαλύτερη αποικία αργυροπελεκάνων στον κόσμο. Είναι τεράστια πουλιά με μεγάλο ράμφος!',
      en: 'Prespa has the biggest colony of Dalmatian pelicans in the world. They are huge birds with a big beak!',
    },
  },

  // ── 8–11: volcanoes ──────────────────────────────────────────────────────
  {
    q: { el: 'Το ζεστό, λιωμένο πέτρωμα που βγαίνει από ένα ηφαίστειο λέγεται…', en: 'The hot, melted rock that comes out of a volcano is called…' },
    options: { el: ['λάβα', 'χαλάζι', 'κάρβουνο', 'πηλός'], en: ['lava', 'hail', 'coal', 'clay'] },
    correct: 0,
    explanation: {
      el: 'Η λάβα είναι λιωμένη πέτρα. Όταν κρυώνει, γίνεται σκληρό, μαύρο πέτρωμα.',
      en: 'Lava is melted rock. When it cools down it turns into hard, black stone.',
    },
  },
  {
    q: { el: 'Ποιο ελληνικό νησί έχει το σχήμα μισοφέγγαρου, επειδή ένα μεγάλο ηφαίστειο εξερράγη εκεί πριν από χιλιάδες χρόνια;', en: 'Which Greek island is shaped like a crescent moon because a huge volcano erupted there thousands of years ago?' },
    options: { el: ['Η Κρήτη', 'Η Ρόδος', 'Η Κέρκυρα', 'Η Σαντορίνη'], en: ['Crete', 'Rhodes', 'Corfu', 'Santorini'] },
    correct: 3,
    explanation: {
      el: 'Η Σαντορίνη είναι ό,τι απέμεινε από ένα τεράστιο ηφαίστειο. Το μέσο του βούλιαξε και έγινε θάλασσα — η καλντέρα.',
      en: 'Santorini is what is left of a giant volcano. Its middle sank and filled with sea — the caldera.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το νησί των Δωδεκανήσων που είναι ολόκληρο ένα ηφαίστειο, με κρατήρες που αχνίζουν;', en: 'Which Dodecanese island is a whole volcano, with steaming craters you can walk into?' },
    options: { el: ['Η Σάμος', 'Η Νίσυρος', 'Η Κως', 'Η Πάτμος'], en: ['Samos', 'Nisyros', 'Kos', 'Patmos'] },
    correct: 1,
    explanation: {
      el: 'Η Νίσυρος είναι ενεργό ηφαίστειο. Μέσα στον κρατήρα Στέφανος η γη είναι ζεστή και μυρίζει σαν χαλασμένο αυγό!',
      en: 'Nisyros is an active volcano. Inside the Stefanos crater the ground is warm and smells like rotten eggs!',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει: «Η Μήλος έχει πολλές άσπρες πέτρες και θερμά νερά.» Τι έφτιαξε τέτοια πετρώματα;', en: 'Giorgos says: “Milos has lots of white rocks and hot springs.” What made rocks like these?' },
    options: { el: ['Οι παγετώνες', 'Ένας μεγάλος ποταμός', 'Παλιά ηφαιστειακή δράση', 'Το αλάτι της θάλασσας'], en: ['Glaciers', 'A big river', 'Old volcanic activity', 'Salt from the sea'] },
    correct: 2,
    explanation: {
      el: 'Η Μήλος, η Σαντορίνη και η Νίσυρος ανήκουν στο «ηφαιστειακό τόξο» του Αιγαίου. Τα παράξενα πετρώματα και τα θερμά νερά είναι δώρα των ηφαιστείων.',
      en: 'Milos, Santorini and Nisyros belong to the Aegean “volcanic arc”. The strange rocks and hot springs are gifts from volcanoes.',
    },
  },

  // ── 12–14: earthquakes ───────────────────────────────────────────────────
  {
    q: { el: 'Γιατί γίνονται συχνά σεισμοί στην Ελλάδα;', en: 'Why are there so many earthquakes in Greece?' },
    options: { el: ['Γιατί έχει πολλά βουνά', 'Γιατί κάτω από τη χώρα συναντιούνται μεγάλες πλάκες της Γης', 'Γιατί φυσάει δυνατός άνεμος', 'Γιατί έχει πολλά νησιά'], en: ['Because it has many mountains', 'Because big plates of the Earth meet under the country', 'Because the wind blows hard', 'Because it has many islands'] },
    correct: 1,
    explanation: {
      el: 'Ο φλοιός της Γης είναι κομμένος σε πλάκες που κινούνται αργά. Κάτω από την Ελλάδα δύο πλάκες σπρώχνονται — και η γη τραντάζεται.',
      en: 'The Earth\'s crust is cut into plates that move slowly. Under Greece two plates push against each other — and the ground shakes.',
    },
  },
  {
    q: { el: 'Η κλίμακα Ρίχτερ μας λέει…', en: 'The Richter scale tells us…' },
    options: { el: ['πόσο βαθιά είναι η θάλασσα', 'πόσο ψηλό είναι ένα βουνό', 'πόσο δυνατός ήταν ένας σεισμός', 'πόσο ζεστή είναι η λάβα'], en: ['how deep the sea is', 'how high a mountain is', 'how strong an earthquake was', 'how hot lava is'] },
    correct: 2,
    explanation: {
      el: 'Οι σεισμολόγοι μετρούν τη δύναμη του σεισμού σε βαθμούς Ρίχτερ. Όσο μεγαλύτερος ο αριθμός, τόσο πιο δυνατός ο σεισμός.',
      en: 'Seismologists measure an earthquake\'s strength in Richter degrees. The bigger the number, the stronger the quake.',
    },
  },
  {
    q: { el: 'Γίνεται σεισμός την ώρα του μαθήματος. Τι πρέπει να κάνει η Ελένη;', en: 'An earthquake happens during a lesson. What should Eleni do?' },
    options: { el: ['Να τρέξει στις σκάλες', 'Να σταθεί δίπλα στο παράθυρο', 'Να μπει στο ασανσέρ', 'Να καλυφθεί κάτω από το θρανίο και να κρατηθεί'], en: ['Run to the stairs', 'Stand next to the window', 'Get in the lift', 'Get under her desk and hold on'] },
    correct: 3,
    explanation: {
      el: 'Ο κανόνας είναι: «Πέφτω, καλύπτομαι, κρατιέμαι». Μένουμε κάτω από το θρανίο μέχρι να σταματήσει ο σεισμός και μετά βγαίνουμε ήρεμα.',
      en: 'The rule is “Drop, cover, hold on”. Stay under the desk until the shaking stops, then walk out calmly.',
    },
  },

  // ── 15–16: floods and wildfires ──────────────────────────────────────────
  {
    q: { el: 'Πότε πλημμυρίζει πιο εύκολα ένας δρόμος της πόλης;', en: 'When does a city street flood most easily?' },
    options: { el: ['Όταν βρέχει πολύ και τα φρεάτια είναι βουλωμένα από σκουπίδια', 'Όταν έχει πολύ ήλιο', 'Όταν φυσάει βοριάς', 'Όταν χιονίζει λίγο'], en: ['When it rains hard and the drains are blocked with rubbish', 'When it is very sunny', 'When a north wind blows', 'When it snows a little'] },
    correct: 0,
    explanation: {
      el: 'Το νερό της βροχής πρέπει να φεύγει από τα φρεάτια. Αν είναι βουλωμένα με σκουπίδια, το νερό μένει και ο δρόμος γίνεται ποτάμι.',
      en: 'Rainwater needs to run away through the drains. If rubbish blocks them, the water stays and the street becomes a river.',
    },
  },
  {
    q: { el: 'Πότε ξεκινούν οι περισσότερες πυρκαγιές στα ελληνικά δάση;', en: 'When do most wildfires start in Greek forests?' },
    options: { el: ['Τον χειμώνα με το χιόνι', 'Το καλοκαίρι, με ζέστη, ξηρασία και δυνατό αέρα', 'Την άνοιξη με τις βροχές', 'Τη νύχτα όταν κάνει κρύο'], en: ['In winter with the snow', 'In summer, with heat, drought and strong wind', 'In spring with the rains', 'At night when it is cold'] },
    correct: 1,
    explanation: {
      el: 'Το καλοκαίρι το χορτάρι είναι ξερό και ο αέρας σπρώχνει τη φωτιά. Γι\' αυτό δεν ανάβουμε ποτέ φωτιά στο δάσος και δεν πετάμε γυαλιά ή σκουπίδια.',
      en: 'In summer the grass is dry and the wind pushes the fire along. That is why we never light fires in the forest or drop glass and rubbish.',
    },
  },

  // ── 17–18: national parks ────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ήταν το πρώτο βουνό της Ελλάδας που έγινε Εθνικός Δρυμός;', en: 'Which Greek mountain was the first to become a National Park?' },
    options: { el: ['Ο Παρνασσός', 'Ο Ταΰγετος', 'Ο Όλυμπος', 'Η Πάρνηθα'], en: ['Parnassus', 'Taygetus', 'Olympus', 'Parnitha'] },
    correct: 2,
    explanation: {
      el: 'Ο Όλυμπος, το ψηλότερο βουνό της Ελλάδας και «σπίτι» των δώδεκα θεών στους μύθους, έγινε ο πρώτος Εθνικός Δρυμός της χώρας.',
      en: 'Olympus, the highest mountain in Greece and “home” of the twelve gods in the myths, became the country\'s first National Park.',
    },
  },
  {
    q: { el: 'Ο Νίκος επισκέπτεται έναν Εθνικό Δρυμό. Ποιο από αυτά ΕΠΙΤΡΕΠΕΤΑΙ να κάνει;', en: 'Nikos is visiting a National Park. Which of these is he ALLOWED to do?' },
    options: { el: ['Να κόψει σπάνια λουλούδια για τη μαμά του', 'Να περπατήσει στα μονοπάτια και να φωτογραφίσει ζώα', 'Να ανάψει φωτιά για σουβλάκια', 'Να πάρει ένα μικρό ζώο στο σπίτι του'], en: ['Pick rare flowers for his mum', 'Walk the trails and photograph animals', 'Light a fire for a barbecue', 'Take a small animal home'] },
    correct: 1,
    explanation: {
      el: 'Στον Εθνικό Δρυμό η φύση προστατεύεται από τον νόμο. Κοιτάμε, περπατάμε, φωτογραφίζουμε — αλλά δεν παίρνουμε τίποτα και δεν αφήνουμε τίποτα πίσω μας.',
      en: 'In a National Park nature is protected by law. We look, walk and take photos — but we take nothing and leave nothing behind.',
    },
  },
];
