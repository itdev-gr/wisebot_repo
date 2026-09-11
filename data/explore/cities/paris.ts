/**
 * WiseBot Explorer · Παρίσι / Paris
 * =================================
 * Ten spots in two days: the Eiffel Tower, the Arc and the great axis to the Louvre (spots
 * 1–4), then the islands, the Latin Quarter and the Luxembourg garden on foot (spots 5–8),
 * and two metro hops to the Opéra and Montmartre (spots 9–10). Original text only, verified
 * facts, language for a child of 7–12 in Greek and English. French names stay in French.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'paris',
  name: { el: 'Παρίσι', en: 'Paris' },
  country: { el: 'Γαλλία', en: 'France' },
  countryCode: 'FR',
  emoji: '🗼',
  center: { lat: 48.86, lng: 2.33 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στο Παρίσι, την Πόλη του Φωτός! Εδώ ο ποταμός Σηκουάνας κυλάει κάτω από δεκάδες γέφυρες, τα φουρνάκια μοσχοβολούν ζεστά κρουασάν, και στους δρόμους περπάτησαν μεγάλοι ζωγράφοι και εφευρέτες που άλλαξαν τον κόσμο. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές του Παρισιού!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Paris, the City of Light! Here the river Seine flows under dozens of bridges, the bakeries smell of warm croissants, and great painters and inventors who changed the world once walked these streets. Solve my riddles, find the ten secret spots and become Paris explorers yourselves!',
  },
  route: [
    'eiffel-tower',
    'arc-de-triomphe',
    'place-de-la-concorde',
    'louvre-pyramid',
    'pont-neuf',
    'notre-dame',
    'pantheon-paris',
    'luxembourg-gardens',
    'palais-garnier',
    'sacre-coeur',
  ],
  spots: [
    // ── 1. Tour Eiffel ─────────────────────────────────────────────────────────
    {
      id: 'eiffel-tower',
      name: { el: 'Tour Eiffel', en: 'Tour Eiffel' },
      emoji: '🗼',
      lat: 48.8578,
      lng: 2.2955,
      radiusM: 80,
      riddle: {
        el: 'Μια σιδερένια κυρία στέκεται δίπλα στο ποτάμι και κοιτάζει όλη την πόλη από ψηλά. Χτίστηκε για μια γιορτή που κράτησε λίγους μήνες, αλλά ξέχασε να φύγει.',
        en: 'An iron lady stands by the river and looks down on the whole city. She was built for a party that lasted a few months, but she forgot to leave.',
      },
      parentHint: {
        el: 'Είναι ο Πύργος του Άιφελ (Tour Eiffel), στο πάρκο Champ de Mars. Ξεκινήστε από εδώ: κατεβείτε στον σταθμό Bir-Hakeim του μετρό (γραμμή 6) ή στον σταθμό Champ de Mars – Tour Eiffel του RER C και περπατήστε 5–10 λεπτά ως τα πόδια του πύργου.',
        en: 'It is the Eiffel Tower, on the Champ de Mars. Start here: get off at Bir-Hakeim metro station (line 6) or at Champ de Mars – Tour Eiffel on the RER C and walk 5–10 minutes to the foot of the tower.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι χτίστηκε για μια γιορτή. Τι γιορτή ήταν;', en: 'The riddle says she was built for a party. What kind of party was it?' },
        options: {
          el: ['Τα γενέθλια ενός βασιλιά', 'Ένα Παγκόσμιο Κύπελλο ποδοσφαίρου', 'Μια Παγκόσμια Έκθεση, όπου οι χώρες έδειχναν τις εφευρέσεις τους', 'Ένας βασιλικός γάμος'],
          en: ['A king\'s birthday', 'A football World Cup', 'A World\'s Fair, where countries showed off their inventions', 'A royal wedding'],
        },
        correct: 2,
        explanation: {
          el: 'Το 1889 το Παρίσι φιλοξένησε την Παγκόσμια Έκθεση, μια τεράστια γιορτή των εφευρέσεων, εκατό χρόνια μετά τη Γαλλική Επανάσταση. Ο πύργος ήταν η πύλη της έκθεσης και έγινε αμέσως το ψηλότερο κτίσμα του κόσμου.',
          en: 'In 1889 Paris hosted the World\'s Fair, a huge celebration of inventions, one hundred years after the French Revolution. The tower was the gateway of the fair and instantly became the tallest structure in the world.',
        },
      },
      onSite: {
        question: { el: 'Στάσου κάτω από τον πύργο και μέτρησε τα τεράστια πόδια του. Πόσα είναι;', en: 'Stand under the tower and count its enormous feet. How many are there?' },
        options: {
          el: ['Τέσσερα', 'Τρία', 'Έξι', 'Οκτώ'],
          en: ['Four', 'Three', 'Six', 'Eight'],
        },
        correct: 0,
        explanation: {
          el: 'Τέσσερα πόδια, ένα για κάθε σημείο του ορίζοντα: βόρειο, νότιο, ανατολικό και δυτικό. Κοίταξε τώρα ψηλά, γύρω γύρω από τον πρώτο όροφο: εκεί είναι γραμμένα με χρυσά γράμματα τα ονόματα 72 επιστημόνων και μηχανικών.',
          en: 'Four feet, one for each point of the compass: north, south, east and west. Now look up, all around the first floor: the names of 72 scientists and engineers are written there in golden letters.',
        },
      },
      story: {
        el: 'Το 1889 το Παρίσι έκανε μια τεράστια γιορτή, την Παγκόσμια Έκθεση, και ο μηχανικός Gustave Eiffel (Γκουστάβ Άιφελ) υποσχέθηκε για πύλη της τον ψηλότερο πύργο της Γης. Η ομάδα του ένωσε περίπου 18.000 σιδερένια κομμάτια με 2,5 εκατομμύρια καρφιά, τα πριτσίνια, και σε λίγο περισσότερο από δύο χρόνια ο πύργος έφτασε τα 300 μέτρα. Πολλοί Παριζιάνοι τον έβρισκαν άσχημο και ήθελαν να τον γκρεμίσουν· άλλωστε θα έμενε μόνο είκοσι χρόνια. Τότε όμως οι επιστήμονες ανακάλυψαν ότι ήταν ιδανικός για να στέλνει σήματα ραδιοφώνου, και ο πύργος σώθηκε. Σήμερα, μαζί με τις κεραίες του, φτάνει τα 330 μέτρα και βάφεται με το χέρι κάθε επτά χρόνια. Ένας πύργος που κανείς δεν ήθελε έγινε το σύμβολο μιας ολόκληρης χώρας: καμιά φορά η πιο παράξενη ιδέα είναι η καλύτερη!',
        en: 'In 1889 Paris threw a giant party, the World\'s Fair, and the engineer Gustave Eiffel promised the tallest tower on Earth as its gateway. His team fitted together about 18,000 iron pieces with 2.5 million rivets, and in just over two years the tower stood 300 metres high. Many Parisians thought it was ugly and wanted it gone; it was only meant to stay for twenty years. Then scientists discovered it was perfect for sending radio signals, and the tower was saved. Today, with its antennas, it reaches 330 metres and is painted by hand every seven years. A tower nobody wanted became the symbol of a whole country: sometimes the strangest idea turns out to be the best one!',
      },
      didYouKnow: {
        el: 'Τον καύσωνα ο πύργος ψηλώνει κατά 15 περίπου εκατοστά, γιατί το σίδερο διαστέλλεται με τη ζέστη, ενώ με δυνατό άνεμο ταλαντεύεται μερικά εκατοστά. Ο Gustave Eiffel είχε ένα μικρό ιδιωτικό διαμέρισμα κοντά στην κορυφή, όπου υποδέχτηκε ακόμη και τον Thomas Edison.',
        en: 'On a hot summer day the tower grows about 15 centimetres taller, because its iron expands in the heat, and in strong wind it sways a few centimetres. Gustave Eiffel kept a small private apartment near the top, where he received guests such as Thomas Edison.',
      },
      quiz: [
        {
          q: { el: 'Ποιος μηχανικός έδωσε το όνομά του στον πύργο;', en: 'Which engineer gave the tower its name?' },
          options: {
            el: ['Ο Louis Pasteur', 'Ο Gustave Eiffel', 'Ο Victor Hugo', 'Ο Charles Garnier'],
            en: ['Louis Pasteur', 'Gustave Eiffel', 'Victor Hugo', 'Charles Garnier'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Gustave Eiffel και η εταιρεία του σχεδίασαν και έχτισαν τον πύργο, γι\' αυτό έχει το όνομά του.',
            en: 'Gustave Eiffel and his company designed and built the tower, so it carries his name.',
          },
        },
        {
          q: { el: 'Τι έσωσε τον πύργο από το γκρέμισμα;', en: 'What saved the tower from being pulled down?' },
          options: {
            el: ['Ένα δικαστήριο', 'Ένας βασιλιάς που τον αγάπησε', 'Η όμορφη θέα του', 'Τα σήματα ραδιοφώνου που έστελνε'],
            en: ['A court of law', 'A king who loved it', 'Its beautiful view', 'The radio signals it could send'],
          },
          correct: 3,
          explanation: {
            el: 'Οι επιστήμονες ανακάλυψαν ότι από την κορυφή του μπορούσαν να στέλνουν σήματα ραδιοφώνου πολύ μακριά. Ένας πύργος τόσο χρήσιμος δεν γκρεμίζεται!',
            en: 'Scientists found that radio signals could be sent very far from its top. A tower that useful could not be knocked down!',
          },
        },
        {
          q: { el: 'Κάθε πόσα χρόνια βάφεται ο πύργος;', en: 'How often is the tower painted?' },
          options: {
            el: ['Κάθε επτά χρόνια', 'Κάθε χρόνο', 'Κάθε εκατό χρόνια', 'Ποτέ, δεν βάφεται'],
            en: ['Every seven years', 'Every year', 'Every hundred years', 'Never, it is not painted'],
          },
          correct: 0,
          explanation: {
            el: 'Κάθε επτά περίπου χρόνια ομάδες βαφέων ανεβαίνουν με σχοινιά και τον βάφουν με πινέλα, για να μη σκουριάσει το σίδερο.',
            en: 'About every seven years, teams of painters climb up on ropes and paint it with brushes, so the iron does not rust.',
          },
        },
      ],
    },

    // ── 2. Arc de Triomphe ─────────────────────────────────────────────────────
    {
      id: 'arc-de-triomphe',
      name: { el: 'Arc de Triomphe', en: 'Arc de Triomphe' },
      emoji: '⭐',
      lat: 48.8738,
      lng: 2.2950,
      radiusM: 80,
      riddle: {
        el: 'Μια πέτρινη πύλη τόσο μεγάλη που κάποτε ένα αεροπλάνο πέρασε από μέσα της. Δώδεκα φαρδιοί δρόμοι ξεκινούν από τα πόδια της σαν ακτίνες αστεριού.',
        en: 'A stone gateway so big that an aeroplane once flew right through it. Twelve wide roads spread out from its feet like the rays of a star.',
      },
      parentHint: {
        el: 'Είναι η Αψίδα του Θριάμβου (Arc de Triomphe), στην Place Charles-de-Gaulle. Από τον Πύργο του Άιφελ πάρτε το μετρό (γραμμή 6) από τον σταθμό Bir-Hakeim ως τον σταθμό Charles de Gaulle – Étoile (περίπου 10 λεπτά) και περάστε από την υπόγεια διάβαση για να φτάσετε κάτω από την αψίδα, ποτέ μέσα από τον κυκλικό δρόμο.',
        en: 'It is the Arc de Triomphe, on Place Charles-de-Gaulle. From the Eiffel Tower take metro line 6 from Bir-Hakeim to Charles de Gaulle – Étoile (about 10 minutes) and use the underground passage to reach the arch; never cross the roundabout on foot.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι οι δρόμοι ξεκινούν σαν ακτίνες αστεριού. Ποιος διάσημος αρχηγός διέταξε να χτιστεί αυτή η πύλη, για να τιμήσει τον στρατό του;', en: 'The riddle says the roads spread out like the rays of a star. Which famous leader ordered this gateway, to honour his army?' },
        options: {
          el: ['Ο Ναπολέων', 'Ο Ιούλιος Καίσαρας', 'Ο Μέγας Αλέξανδρος', 'Ο Λουδοβίκος ΙΔ΄'],
          en: ['Napoleon', 'Julius Caesar', 'Alexander the Great', 'Louis XIV'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Ναπολέων Βοναπάρτης τη διέταξε το 1806, μετά από μια μεγάλη νίκη, και υποσχέθηκε στους στρατιώτες του ότι θα γύριζαν σπίτι περνώντας κάτω από μια θριαμβευτική αψίδα. Οι αρχαίοι Ρωμαίοι έχτιζαν παρόμοιες αψίδες για τους στρατηγούς τους.',
          en: 'Napoleon Bonaparte ordered it in 1806, after a great victory, and promised his soldiers they would return home under a triumphal arch. The ancient Romans built similar arches for their generals.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε κάτω από την αψίδα. Τι βρίσκεις στο έδαφος, ανάμεσα στα λουλούδια και στα στεφάνια;', en: 'Walk under the arch. What do you find on the ground, among the flowers and wreaths?' },
        options: {
          el: ['Ένα πηγάδι', 'Ένα άγαλμα του Ναπολέοντα', 'Ένα σιντριβάνι', 'Μια φλόγα που δεν σβήνει ποτέ'],
          en: ['A well', 'A statue of Napoleon', 'A fountain', 'A flame that never goes out'],
        },
        correct: 3,
        explanation: {
          el: 'Είναι ο τάφος του Άγνωστου Στρατιώτη, ενός στρατιώτη του Α΄ Παγκοσμίου Πολέμου που κανείς δεν ξέρει το όνομά του. Συμβολίζει όλους τους στρατιώτες που δεν γύρισαν σπίτι. Η φλόγα καίει από το 1923, και κάθε βράδυ στις έξι και μισή κάποιος έρχεται να την αναζωπυρώσει.',
          en: 'This is the grave of the Unknown Soldier, a soldier of the First World War whose name nobody knows. He stands for all the soldiers who never came home. The flame has burned since 1923, and every evening at half past six someone comes to rekindle it.',
        },
      },
      story: {
        el: 'Το 1806 ο Ναπολέων, ο αυτοκράτορας της Γαλλίας, είχε μόλις κερδίσει μια μεγάλη μάχη και διέταξε μια τεράστια αψίδα, για να περνούν από κάτω της οι στρατιώτες του γυρίζοντας σπίτι. Το χτίσιμο κράτησε τριάντα χρόνια, πολύ περισσότερο από τη βασιλεία του, και ο Ναπολέων δεν την είδε ποτέ τελειωμένη. Η αψίδα έχει ύψος 50 μέτρα, όσο ένα κτίριο 16 ορόφων, και στους τοίχους της είναι σκαλισμένα τα ονόματα εκατοντάδων μαχών και στρατηγών. Γύρω της συναντιούνται δώδεκα λεωφόροι, γι\' αυτό η πλατεία λεγόταν παλιά Étoile (Ετουάλ), δηλαδή Αστέρι. Κάτω από την αψίδα βρίσκεται ο τάφος ενός άγνωστου στρατιώτη από τον Α΄ Παγκόσμιο Πόλεμο, και κάθε βράδυ αναζωπυρώνουν τη φλόγα που καίει για εκείνον μέρα και νύχτα. Μας θυμίζει ότι πίσω από κάθε νίκη υπάρχουν άνθρωποι που δεν πρέπει να ξεχνάμε.',
        en: 'In 1806 Napoleon, the emperor of France, had just won a great battle and ordered a giant arch so his soldiers could march home under it. Building it took thirty years, far longer than his rule, and Napoleon never saw it finished. The arch is 50 metres high, as tall as a 16-storey building, and the names of hundreds of battles and generals are carved on its walls. Twelve avenues meet around it, which is why the square was once called the Étoile, the Star. Under the arch lies the grave of an unknown soldier from the First World War, and every evening the flame that burns for him day and night is rekindled. It reminds everyone that behind every victory there are people we should never forget.',
      },
      didYouKnow: {
        el: 'Το 1919 ο πιλότος Charles Godefroy πέρασε με ένα διπλάνο μέσα από την αψίδα, με λίγα μόνο μέτρα ελεύθερα σε κάθε πλευρά, για να τιμήσει τους αεροπόρους του Α΄ Παγκοσμίου Πολέμου. Στην ταράτσα, περίπου 280 σκαλιά πιο πάνω, υπάρχει η καλύτερη θέα στις δώδεκα λεωφόρους.',
        en: 'In 1919 the pilot Charles Godefroy flew a biplane through the arch, with only a few metres to spare on each side, to honour the airmen of the First World War. The rooftop terrace, some 280 steps up, has the best view of the twelve avenues.',
      },
      quiz: [
        {
          q: { el: 'Πόσο κράτησε το χτίσιμο της αψίδας;', en: 'How long did it take to build the arch?' },
          options: {
            el: ['Ένα καλοκαίρι', 'Τρία χρόνια', 'Τριάντα χρόνια', 'Τριακόσια χρόνια'],
            en: ['One summer', 'Three years', 'Thirty years', 'Three hundred years'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Ναπολέων τη διέταξε το 1806, αλλά τελείωσε μόλις το 1836, τριάντα χρόνια αργότερα, πολύ μετά τον θάνατό του.',
            en: 'Napoleon ordered it in 1806, but it was finished only in 1836, thirty years later, long after his death.',
          },
        },
        {
          q: { el: 'Πόσες λεωφόροι συναντιούνται γύρω από την αψίδα;', en: 'How many avenues meet around the arch?' },
          options: {
            el: ['Δώδεκα', 'Δύο', 'Πέντε', 'Εκατό'],
            en: ['Twelve', 'Two', 'Five', 'A hundred'],
          },
          correct: 0,
          explanation: {
            el: 'Δώδεκα λεωφόροι ξεκινούν από την πλατεία σαν ακτίνες, γι\' αυτό τη λένε Étoile, Αστέρι.',
            en: 'Twelve avenues spread out from the square like rays, which is why it is called the Étoile, the Star.',
          },
        },
        {
          q: { el: 'Τι υπάρχει κάτω από την αψίδα;', en: 'What is under the arch?' },
          options: {
            el: ['Ένα μαγαζί με κρουασάν', 'Ο τάφος ενός άγνωστου στρατιώτη με μια φλόγα', 'Μια λίμνη', 'Ο θρόνος του Ναπολέοντα'],
            en: ['A croissant shop', 'The grave of an unknown soldier with a flame', 'A lake', 'Napoleon\'s throne'],
          },
          correct: 1,
          explanation: {
            el: 'Κάτω από την αψίδα αναπαύεται ένας άγνωστος στρατιώτης, και μια φλόγα καίει για εκείνον μέρα και νύχτα.',
            en: 'Beneath the arch rests an unknown soldier, and a flame burns for him day and night.',
          },
        },
      ],
    },

    // ── 3. Place de la Concorde ────────────────────────────────────────────────
    {
      id: 'place-de-la-concorde',
      name: { el: 'Place de la Concorde', en: 'Place de la Concorde' },
      emoji: '🏺',
      lat: 48.8656,
      lng: 2.3212,
      radiusM: 60,
      riddle: {
        el: 'Στη μεγαλύτερη πλατεία της πόλης στέκεται μια πέτρινη βελόνα που ήρθε ταξίδι από την Αίγυπτο, γεμάτη μυστικά σύμβολα, με χρυσή μύτη που λάμπει στον ήλιο. Δύο σιντριβάνια της κάνουν παρέα.',
        en: 'In the biggest square in town stands a stone needle that travelled all the way from Egypt, covered in secret symbols, with a golden tip that glitters in the sun. Two fountains keep it company.',
      },
      parentHint: {
        el: 'Είναι η Place de la Concorde (η Πλατεία της Ομόνοιας), με τον οβελίσκο του Λούξορ. Από την αψίδα κατεβείτε τη λεωφόρο Champs-Élysées με τα πόδια (περίπου 25 λεπτά, 2 χιλιόμετρα) ή πάρτε το μετρό (γραμμή 1) ως τον σταθμό Concorde.',
        en: 'It is the Place de la Concorde, with the Luxor obelisk. From the arch walk down the Champs-Élysées (about 25 minutes, 2 km) or take metro line 1 to Concorde station.',
      },
      unlockQuestion: {
        question: { el: 'Η πέτρινη βελόνα είναι ένας οβελίσκος. Ποιοι έφτιαχναν τέτοιους οβελίσκους πριν από χιλιάδες χρόνια;', en: 'The stone needle is an obelisk. Who made obelisks like this thousands of years ago?' },
        options: {
          el: ['Οι Βίκινγκ', 'Οι Ρωμαίοι', 'Οι Κινέζοι', 'Οι αρχαίοι Αιγύπτιοι'],
          en: ['The Vikings', 'The Romans', 'The Chinese', 'The ancient Egyptians'],
        },
        correct: 3,
        explanation: {
          el: 'Οι αρχαίοι Αιγύπτιοι έστηναν οβελίσκους μπροστά στους ναούς τους, για να τιμήσουν τον θεό του ήλιου και τους φαραώ. Αυτός εδώ στεκόταν στον ναό του Λούξορ, στον ποταμό Νείλο, για περισσότερα από 3.000 χρόνια.',
          en: 'The ancient Egyptians raised obelisks in front of their temples to honour the sun god and their pharaohs. This one stood at the temple of Luxor, on the river Nile, for more than 3,000 years.',
        },
      },
      onSite: {
        question: { el: 'Πλησίασε τον οβελίσκο και κοίταξε τα σκαλίσματά του. Τι βλέπεις πάνω στην πέτρα;', en: 'Go close to the obelisk and look at the carvings. What do you see on the stone?' },
        options: {
          el: ['Ελληνικά γράμματα', 'Μικρές ζωγραφιές, πουλιά και φίδια: τα ιερογλυφικά', 'Αριθμούς', 'Τίποτα, είναι λεία'],
          en: ['Greek letters', 'Little pictures, birds and snakes: hieroglyphs', 'Numbers', 'Nothing, it is smooth'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ιερογλυφικά, η γραφή της αρχαίας Αιγύπτου: κάθε ζωγραφιά είναι ένα γράμμα ή μια λέξη. Λένε πόσο σπουδαίος ήταν ο φαραώ Ραμσής ο Β΄. Στη βάση, ψάξε και τα σχέδια που δείχνουν πώς σήκωσαν τον οβελίσκο το 1836.',
          en: 'They are hieroglyphs, the writing of ancient Egypt: every picture is a letter or a word. They tell how great the pharaoh Ramses II was. On the pedestal, look for the drawings that show how the obelisk was raised in 1836.',
        },
      },
      story: {
        el: 'Αυτή είναι η μεγαλύτερη πλατεία του Παρισιού, τόσο φαρδιά που μοιάζει με πέτρινο λιβάδι. Χτίστηκε για τον βασιλιά Λουδοβίκο ΙΕ΄, αλλά στη Γαλλική Επανάσταση έγινε τόπος θλιβερών γεγονότων, και όταν ξαναγύρισε η ηρεμία πήρε καινούργιο όνομα: Concorde (Κονκόρντ), δηλαδή Ομόνοια, το να ζούμε μαζί ειρηνικά. Το 1836 έφτασε εδώ ένας πολύ ξεχωριστός επισκέπτης: ένας οβελίσκος 3.000 και πλέον ετών, δώρο από τον ηγεμόνα της Αιγύπτου. Ζυγίζει περίπου 230 τόνους και ταξίδεψε στη θάλασσα με ένα καράβι φτιαγμένο ειδικά για εκείνον, ενώ 200.000 άνθρωποι ήρθαν να τον δουν να σηκώνεται όρθιος. Η χρυσή του μύτη προστέθηκε το 1998. Τα δύο σιντριβάνια γιορτάζουν τα ποτάμια και τις θάλασσες. Κάποιες ιδέες ταξιδεύουν μακριά: μια πέτρα από τον Νείλο κοιτάζει τώρα τον Σηκουάνα!',
        en: 'This is the biggest square in Paris, so wide that it feels like a field of stone. It was built for King Louis XV, but during the French Revolution it became a place of sad events, and when calm returned it was given a new name: Concorde, which means living together in peace. In 1836 a very special visitor arrived: an obelisk more than 3,000 years old, a present from the ruler of Egypt. It weighs about 230 tonnes and was carried across the sea on a ship built just for it, and a crowd of 200,000 people came to watch it being raised. Its golden cap was added in 1998. The two fountains celebrate the rivers and the seas. Some ideas travel far: a stone from the Nile now watches over the Seine!',
      },
      didYouKnow: {
        el: 'Ο δίδυμος οβελίσκος στέκεται ακόμη στον ναό του Λούξορ: η Αίγυπτος είχε χαρίσει και τους δύο, αλλά η Γαλλία δεν πήρε ποτέ τον δεύτερο και το 1981 τον επέστρεψε επίσημα. Στο βάθρο, σχέδια δείχνουν βήμα βήμα τις μηχανές που κατέβασαν τον οβελίσκο στο Λούξορ και τον σήκωσαν στο Παρίσι.',
        en: 'The obelisk\'s twin still stands at the Luxor temple: Egypt had offered both, but France never collected the second one and formally gave it back in 1981. Diagrams on the pedestal show, step by step, the machines used to lower the obelisk in Luxor and raise it in Paris.',
      },
      quiz: [
        {
          q: { el: 'Τι σημαίνει το όνομα Concorde;', en: 'What does the name Concorde mean?' },
          options: {
            el: ['Ομόνοια, να ζούμε μαζί ειρηνικά', 'Μεγάλη πλατεία', 'Χρυσή μύτη', 'Πέτρινο λιβάδι'],
            en: ['Harmony, living together in peace', 'Big square', 'Golden tip', 'Field of stone'],
          },
          correct: 0,
          explanation: {
            el: 'Concorde σημαίνει ομόνοια, συμφωνία: το όνομα δόθηκε ως ευχή να ζουν οι άνθρωποι ειρηνικά, μετά τα δύσκολα χρόνια της Επανάστασης.',
            en: 'Concorde means harmony, agreement: the name was chosen as a wish for people to live in peace after the hard years of the Revolution.',
          },
        },
        {
          q: { el: 'Από πού ήρθε ο οβελίσκος;', en: 'Where did the obelisk come from?' },
          options: {
            el: ['Από την Ελλάδα', 'Από την Ιταλία', 'Από την Αίγυπτο', 'Από την Κίνα'],
            en: ['Greece', 'Italy', 'Egypt', 'China'],
          },
          correct: 2,
          explanation: {
            el: 'Ο οβελίσκος στεκόταν στον ναό του Λούξορ, στην Αίγυπτο, και ήταν δώρο του ηγεμόνα της Αιγύπτου στη Γαλλία.',
            en: 'The obelisk stood at the temple of Luxor, in Egypt, and was a gift from the ruler of Egypt to France.',
          },
        },
        {
          q: { el: 'Πώς ταξίδεψε ο οβελίσκος ως το Παρίσι;', en: 'How did the obelisk travel to Paris?' },
          options: {
            el: ['Με τρένο', 'Με αεροπλάνο', 'Τον κουβάλησαν ελέφαντες', 'Με ένα καράβι φτιαγμένο ειδικά για εκείνον'],
            en: ['By train', 'By plane', 'Elephants carried it', 'On a ship built just for it'],
          },
          correct: 3,
          explanation: {
            el: 'Ένα ειδικό καράβι, το «Luxor», φτιάχτηκε για να τον μεταφέρει από τον Νείλο, μέσα από τη θάλασσα και τον Σηκουάνα, ως το Παρίσι. Το καράβι έλειψε από τη Γαλλία περισσότερο από δύο χρόνια, και ο οβελίσκος στήθηκε όρθιος το 1836.',
            en: 'A special ship, the Luxor, was built to carry it from the Nile, over the sea and up the Seine to Paris. The ship was away from France for more than two years, and the obelisk was finally raised in 1836.',
          },
        },
      ],
    },

    // ── 4. Pyramide du Louvre ──────────────────────────────────────────────────
    {
      id: 'louvre-pyramid',
      name: { el: 'Pyramide du Louvre', en: 'Pyramide du Louvre' },
      emoji: '💎',
      lat: 48.8611,
      lng: 2.3358,
      radiusM: 60,
      riddle: {
        el: 'Μια πυραμίδα από γυαλί λάμπει στην αυλή ενός παλατιού που δεν έχει πια βασιλιάδες, μόνο χιλιάδες πίνακες και αγάλματα. Μέσα, μια κυρία με μυστηριώδες χαμόγελο περιμένει να τη γνωρίσεις.',
        en: 'A pyramid made of glass shines in the courtyard of a palace with no more kings, only thousands of paintings and statues. Inside, a lady with a mysterious smile is waiting to meet you.',
      },
      parentHint: {
        el: 'Είναι η Πυραμίδα του Λούβρου (Pyramide du Louvre), στην αυλή Cour Napoléon. Από την Concorde περπατήστε 15 λεπτά μέσα από τον κήπο Tuileries, περάστε κάτω από τη μικρή αψίδα Carrousel και είστε στην αυλή. Το μουσείο θέλει εισιτήριο με κράτηση· η αυλή είναι ελεύθερη.',
        en: 'It is the Pyramide du Louvre, in the Cour Napoléon. From Concorde walk 15 minutes through the Tuileries garden, pass under the little Carrousel arch and you are in the courtyard. The museum needs a timed ticket; the courtyard is free.',
      },
      unlockQuestion: {
        question: { el: 'Ποια είναι η κυρία με το μυστηριώδες χαμόγελο;', en: 'Who is the lady with the mysterious smile?' },
        options: {
          el: ['Η Χιονάτη', 'Η Μόνα Λίζα', 'Η Ιωάννα της Λωραίνης', 'Η βασίλισσα Μαρία Αντουανέτα'],
          en: ['Snow White', 'The Mona Lisa', 'Joan of Arc', 'Queen Marie Antoinette'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι η Μόνα Λίζα, ο πιο διάσημος πίνακας του κόσμου. Τη ζωγράφισε ο Leonardo da Vinci (Λεονάρντο ντα Βίντσι) πριν από περισσότερα από 500 χρόνια, και είναι πολύ πιο μικρή απ\' ό,τι φαντάζονται οι περισσότεροι: όσο μια μεγάλη αφίσα.',
          en: 'She is the Mona Lisa, the most famous painting in the world. Leonardo da Vinci painted her more than 500 years ago, and she is much smaller than most people expect: about the size of a big poster.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε γύρω από τη μεγάλη γυάλινη πυραμίδα. Πόσες μικρότερες πυραμίδες τη συνοδεύουν;', en: 'Look around the big glass pyramid. How many smaller pyramids keep it company?' },
        options: {
          el: ['Καμία', 'Μία', 'Τρεις', 'Επτά'],
          en: ['None', 'One', 'Three', 'Seven'],
        },
        correct: 2,
        explanation: {
          el: 'Τρεις μικρές πυραμίδες στέκονται γύρω από τη μεγάλη και φέρνουν φως στις αίθουσες από κάτω. Υπάρχει και μια τέταρτη, κρυμμένη: μια ανάποδη πυραμίδα που κρέμεται από το ταβάνι του υπόγειου εμπορικού κέντρου, λίγο πιο πέρα.',
          en: 'Three small pyramids stand around the big one and bring daylight into the rooms below. There is also a hidden fourth: an upside-down pyramid hanging from the ceiling of the underground shopping mall, a little further on.',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 800 χρόνια, ο βασιλιάς Philippe Auguste (Φίλιππος Αύγουστος) έχτισε εδώ ένα φρούριο για να φυλάει το Παρίσι, με χοντρούς τοίχους και έναν ψηλό στρογγυλό πύργο. Οι επόμενοι βασιλιάδες το έκαναν παλάτι με τις πιο όμορφες αίθουσες, ώσπου ο Λουδοβίκος ΙΔ΄ μετακόμισε στις Βερσαλλίες. Στη Γαλλική Επανάσταση ο λαός αποφάσισε ότι οι θησαυροί των βασιλιάδων ανήκουν σε όλους, και το 1793 το παλάτι άνοιξε ως μουσείο. Σήμερα είναι το μουσείο με τους περισσότερους επισκέπτες στον κόσμο, το σπίτι της Μόνα Λίζα και 35.000 περίπου άλλων έργων. Το 1989 ο αρχιτέκτονας I. M. Pei πρόσθεσε μια γυάλινη πυραμίδα, με 670 περίπου τζάμια, ως φωτεινή καινούργια είσοδο· πολλοί τη μίσησαν στην αρχή, και τώρα τη λατρεύουν. Βαθιά κάτω από την αυλή μπορείς ακόμη να περπατήσεις δίπλα στα τείχη του παλιού φρουρίου.',
        en: 'More than 800 years ago, King Philippe Auguste built a fortress here to guard Paris, with thick walls and a tall round tower. Later kings turned it into a palace of the finest rooms, until Louis XIV moved away to Versailles. During the Revolution the people decided that the royal treasures belonged to everyone, and in 1793 the palace opened as a museum. Today it is the most visited museum in the world, home to the Mona Lisa and about 35,000 other works. In 1989 the architect I. M. Pei added a glass pyramid, about 670 panes of glass, as a bright new entrance; many people hated it at first, and now they love it. Deep under the courtyard you can still walk beside the walls of the old fortress.',
      },
      didYouKnow: {
        el: 'Το 1911 τη Μόνα Λίζα την έκλεψε ένας πρώην εργάτης του μουσείου, ο Vincenzo Peruggia, που απλώς βγήκε από την πόρτα κρύβοντάς την κάτω από το παλτό του· βρέθηκε δύο χρόνια αργότερα στη Φλωρεντία. Και η φήμη ότι η πυραμίδα έχει 666 τζάμια είναι απλώς μύθος: έχει 673.',
        en: 'In 1911 the Mona Lisa was stolen by a former museum worker, Vincenzo Peruggia, who simply walked out of the door with it hidden under his coat; it was found two years later in Florence. And the rumour that the pyramid has 666 panes is just a myth: it has 673.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν το Λούβρο στην αρχή, πριν από περισσότερα από 800 χρόνια;', en: 'What was the Louvre at first, more than 800 years ago?' },
          options: {
            el: ['Ένα σχολείο', 'Ένα θέατρο', 'Ένα λιμάνι', 'Ένα φρούριο που φύλαγε το Παρίσι'],
            en: ['A school', 'A theatre', 'A harbour', 'A fortress guarding Paris'],
          },
          correct: 3,
          explanation: {
            el: 'Ο βασιλιάς Philippe Auguste το έχτισε ως φρούριο με χοντρούς τοίχους, για να προστατεύει το Παρίσι.',
            en: 'King Philippe Auguste built it as a fortress with thick walls to protect Paris.',
          },
        },
        {
          q: { el: 'Πότε άνοιξε το παλάτι ως μουσείο;', en: 'When did the palace open as a museum?' },
          options: {
            el: ['Το 1989', 'Το 1793, στη Γαλλική Επανάσταση', 'Το 1911', 'Πέρυσι'],
            en: ['In 1989', 'In 1793, during the French Revolution', 'In 1911', 'Last year'],
          },
          correct: 1,
          explanation: {
            el: 'Στην Επανάσταση ο λαός αποφάσισε ότι οι θησαυροί ανήκουν σε όλους, και το 1793 άνοιξε το μουσείο.',
            en: 'During the Revolution the people decided the treasures belonged to everyone, and in 1793 the museum opened.',
          },
        },
        {
          q: { el: 'Από τι είναι φτιαγμένη η πυραμίδα;', en: 'What is the pyramid made of?' },
          options: {
            el: ['Από πέτρα', 'Από χρυσό', 'Από γυαλί', 'Από ξύλο'],
            en: ['Stone', 'Gold', 'Glass', 'Wood'],
          },
          correct: 2,
          explanation: {
            el: 'Η πυραμίδα είναι από γυαλί και μέταλλο, με 670 περίπου τζάμια, για να μπαίνει το φως στην είσοδο από κάτω.',
            en: 'The pyramid is made of glass and metal, with about 670 panes, so that light pours into the entrance hall below.',
          },
        },
      ],
    },

    // ── 5. Pont Neuf ───────────────────────────────────────────────────────────
    {
      id: 'pont-neuf',
      name: { el: 'Pont Neuf', en: 'Pont Neuf' },
      emoji: '🌉',
      lat: 48.8575,
      lng: 2.3412,
      radiusM: 80,
      riddle: {
        el: 'Το όνομά της λέει «καινούργια», κι όμως είναι η πιο γριά απ\' όλες τις αδερφές της που περνούν το ποτάμι. Στα πλευρά της κρύβεται ένα μυστικό που βλέπεις μόνο από κάτω, και ένας βασιλιάς πάνω στο άλογό του φυλάει τη μέση της.',
        en: 'Her name says "new", yet she is the oldest of all her sisters that cross the river. A secret you can only see from below hides along her sides, and a king on his horse guards her middle.',
      },
      parentHint: {
        el: 'Είναι η Pont Neuf (Πον Νεφ, η «Καινούργια Γέφυρα»), με το άγαλμα του Ερρίκου Δ΄. Από την πυραμίδα περπατήστε 10 λεπτά: βγείτε προς το ποτάμι, ακολουθήστε την όχθη προς τα ανατολικά ως τη γέφυρα και σταθείτε στη μέση της, στη μικρή πλατεία με το άγαλμα.',
        en: 'It is the Pont Neuf, with the statue of Henri IV. From the pyramid walk 10 minutes: head to the river, follow the bank east to the bridge and stop halfway across, at the small square with the statue.',
      },
      unlockQuestion: {
        question: { el: 'Ποιο ποτάμι περνάει αυτή η γέφυρα;', en: 'Which river does this bridge cross?' },
        options: {
          el: ['Τον Σηκουάνα', 'Τον Τάμεση', 'Τον Ρήνο', 'Τον Δούναβη'],
          en: ['The Seine', 'The Thames', 'The Rhine', 'The Danube'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Σηκουάνας (Seine στα γαλλικά) περνάει μέσα από το Παρίσι και τον διασχίζουν περισσότερες από 35 γέφυρες. Αυτή είναι η πιο παλιά που στέκεται ακόμη.',
          en: 'The Seine flows right through Paris and more than 35 bridges cross it. This one is the oldest still standing.',
        },
      },
      onSite: {
        question: { el: 'Κατέβα τα σκαλιά πίσω από το άγαλμα στον μικρό κήπο και κοίταξε τα πλευρά της γέφυρας, ακριβώς κάτω από το πεζοδρόμιο. Τι είναι σκαλισμένο εκεί, το ένα δίπλα στο άλλο;', en: 'Go down the steps behind the statue to the little garden and look at the sides of the bridge, just below the pavement. What is carved there, one after another?' },
        options: {
          el: ['Ψάρια', 'Στέμματα', 'Λουλούδια', 'Αστεία πρόσωπα με γένια και γλώσσες έξω'],
          en: ['Fish', 'Crowns', 'Flowers', 'Funny faces with beards and tongues sticking out'],
        },
        correct: 3,
        explanation: {
          el: 'Είναι τα mascarons (μασκαρόν), πέτρινες μάσκες: 381 πρόσωπα, και κανένα δεν είναι ίδιο με το άλλο! Δείχνουν θεούς των δασών και των ποταμών, με γένια, κέρατα και γλώσσες έξω, και τα περισσότερα ξανασκαλίστηκαν όταν η γέφυρα επισκευάστηκε πριν από 170 περίπου χρόνια.',
          en: 'They are the mascarons, stone masks: 381 faces, and no two are alike! They show gods of the forests and rivers, with beards, horns and tongues sticking out, and most were carved again when the bridge was repaired about 170 years ago.',
        },
      },
      story: {
        el: 'Ο θεμέλιος λίθος μπήκε το 1578 από τον βασιλιά Ερρίκο Γ΄, και η γέφυρα τελείωσε το 1607 από τον βασιλιά Ερρίκο Δ΄. Ήταν η πιο καινούργια γέφυρα της πόλης, γι\' αυτό ο κόσμος την είπε «Καινούργια Γέφυρα», και το όνομα έμεινε, αν και σήμερα είναι η πιο παλιά που στέκεται ακόμη. Ήταν όμως και πολύ διαφορετική: οι άλλες γέφυρες εκείνης της εποχής ήταν σκεπασμένες με σπίτια και μαγαζιά, ενώ αυτή έμεινε ανοιχτή, κι έτσι για πρώτη φορά οι Παριζιάνοι μπορούσαν να σταθούν σε μια γέφυρα και να δουν πραγματικά το ποτάμι! Είχε μάλιστα πεζοδρόμια για τους περιπατητές, μια ολοκαίνουργια ιδέα. Η γέφυρα έγινε μια πολύβουη σκηνή, όπου έδιναν παραστάσεις ζογκλέρ, τραγουδιστές, ακόμη και πλανόδιοι οδοντογιατροί. Το άγαλμα στη μέση δείχνει τον Ερρίκο Δ΄, έναν πολύ αγαπητό βασιλιά. Από κάτω, ένας μικρός κήπος βουτάει τα πόδια του στο νερό.',
        en: 'The first stone was laid in 1578 by King Henri III, and the bridge was finished in 1607 by King Henri IV. It was the newest bridge in town, so people called it the New Bridge, and the name stuck even though it is now the oldest one still standing. It was also very different: the other bridges of that time were covered with houses and shops, but this one was left open, so for the first time Parisians could stand on a bridge and actually see the river! It even had pavements for walkers, a brand-new idea. The bridge became a busy stage where jugglers, singers and even travelling tooth-pullers performed. The statue in the middle shows Henri IV, a much-loved king. Below it, a little garden dips its toes into the water.',
      },
      didYouKnow: {
        el: 'Το πρώτο άγαλμα του Ερρίκου Δ΄, που στήθηκε εδώ το 1614, ήταν το πρώτο έφιππο άγαλμα βασιλιά σε δημόσιο χώρο στη Γαλλία· λιώθηκε στην Επανάσταση, και αυτό που βλέπετε είναι του 1818. Το 1985 οι καλλιτέχνες Christo και Jeanne-Claude τύλιξαν ολόκληρη τη γέφυρα με χρυσαφί ύφασμα για δύο εβδομάδες.',
        en: 'The first statue of Henri IV, placed here in 1614, was the first statue of a king on horseback ever set up in a public place in France; it was melted down during the Revolution, and the one you see dates from 1818. In 1985 the artists Christo and Jeanne-Claude wrapped the whole bridge in golden fabric for two weeks.',
      },
      quiz: [
        {
          q: { el: 'Γιατί τη λένε «Καινούργια Γέφυρα» αν είναι η πιο παλιά;', en: 'Why is it called the New Bridge if it is the oldest?' },
          options: {
            el: ['Γιατί την έβαψαν πρόσφατα', 'Γιατί όταν χτίστηκε ήταν η πιο καινούργια, και το όνομα έμεινε', 'Γιατί την ξαναέχτισαν πέρυσι', 'Γιατί το ζήτησε ο βασιλιάς'],
            en: ['Because it was painted recently', 'Because it was the newest when it was built, and the name stuck', 'Because it was rebuilt last year', 'Because the king asked for it'],
          },
          correct: 1,
          explanation: {
            el: 'Όταν τελείωσε, το 1607, ήταν η πιο καινούργια γέφυρα του Παρισιού. Οι άλλες γκρεμίστηκαν ή ξαναχτίστηκαν, κι έτσι η «καινούργια» έγινε η πιο παλιά!',
            en: 'When it was finished in 1607 it was the newest bridge in Paris. The others were pulled down or rebuilt, and so the "new" one became the oldest!',
          },
        },
        {
          q: { el: 'Τι είχαν οι άλλες γέφυρες εκείνης της εποχής και αυτή δεν είχε;', en: 'What did the other bridges of that time have that this one did not?' },
          options: {
            el: ['Σπίτια και μαγαζιά πάνω τους', 'Φανάρια', 'Αυτοκίνητα', 'Ποδηλατόδρομους'],
            en: ['Houses and shops on top', 'Street lights', 'Cars', 'Bike lanes'],
          },
          correct: 0,
          explanation: {
            el: 'Οι παλιές γέφυρες ήταν γεμάτες σπίτια και μαγαζιά. Αυτή έμεινε ανοιχτή, για να βλέπει ο κόσμος το ποτάμι.',
            en: 'The old bridges were crowded with houses and shops. This one was left open so people could see the river.',
          },
        },
        {
          q: { el: 'Ποιος βασιλιάς είναι το άγαλμα στη μέση της γέφυρας;', en: 'Which king is the statue in the middle of the bridge?' },
          options: {
            el: ['Ο Λουδοβίκος ΙΔ΄', 'Ο Ναπολέων', 'Ο Φίλιππος Αύγουστος', 'Ο Ερρίκος Δ΄'],
            en: ['Louis XIV', 'Napoleon', 'Philippe Auguste', 'Henri IV'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Ερρίκος Δ΄, που τελείωσε τη γέφυρα, καβαλάει το άλογό του στη μέση της. Ο μικρός κήπος από κάτω έχει το παρατσούκλι του, Vert-Galant.',
            en: 'Henri IV, who finished the bridge, rides his horse in the middle of it. The little garden below carries his nickname, Vert-Galant.',
          },
        },
      ],
    },

    // ── 6. Notre-Dame de Paris ─────────────────────────────────────────────────
    {
      id: 'notre-dame',
      name: { el: 'Notre-Dame de Paris', en: 'Notre-Dame de Paris' },
      emoji: '⛪',
      lat: 48.8534,
      lng: 2.3483,
      radiusM: 60,
      riddle: {
        el: 'Σε ένα νησί στη μέση του ποταμιού, δύο ψηλοί πύργοι και ένα σμήνος από πέτρινα τέρατα φυλάνε την εκκλησία όπου ζούσε ο καμπούρης του παλιού παραμυθιού. Μια φωτιά την πλήγωσε, μα σηκώθηκε ξανά πιο όμορφη.',
        en: 'On an island in the middle of the river, two tall towers and a flock of stone monsters guard the church where the hunchback of the old story lived. A fire hurt her badly, but she rose again more beautiful than ever.',
      },
      parentHint: {
        el: 'Είναι η Notre-Dame de Paris (Νοτρ Νταμ, η Παναγία των Παρισίων), στο νησί Île de la Cité. Από την Pont Neuf περπατήστε 8 λεπτά προς τα ανατολικά, μέσα από το νησί, ως την πλατεία μπροστά από την εκκλησία. Η είσοδος είναι δωρεάν, συχνά με ουρά.',
        en: 'It is Notre-Dame de Paris, on the Île de la Cité. From the Pont Neuf walk 8 minutes east along the island to the square in front of the cathedral. Entry is free, often with a queue.',
      },
      unlockQuestion: {
        question: { el: 'Ποιος συγγραφέας έγραψε την ιστορία του καμπούρη που ζούσε σε αυτή την εκκλησία;', en: 'Which writer told the story of the hunchback who lived in this church?' },
        options: {
          el: ['Ο Jules Verne', 'Ο Charles Perrault', 'Ο Victor Hugo', 'Ο Antoine de Saint-Exupéry'],
          en: ['Jules Verne', 'Charles Perrault', 'Victor Hugo', 'Antoine de Saint-Exupéry'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Victor Hugo (Βικτόρ Ουγκό) έγραψε το 1831 το μυθιστόρημα «Η Παναγία των Παρισίων», με ήρωα τον Κουασιμόδο, τον καλόκαρδο κωδωνοκρούστη. Το βιβλίο έκανε τους Γάλλους να αγαπήσουν ξανά την εκκλησία τους, που τότε ήταν ερειπωμένη, και να την επισκευάσουν.',
          en: 'Victor Hugo wrote the novel Notre-Dame de Paris in 1831, with Quasimodo, the kind-hearted bell-ringer, as its hero. The book made the French love their cathedral again, which was falling apart at the time, and they repaired it.',
        },
      },
      onSite: {
        question: { el: 'Ψάξε στο πάτωμα της πλατείας, λίγα βήματα μπροστά από την κεντρική πόρτα. Τι σχήμα έχει η μεταλλική πλάκα που θα βρεις;', en: 'Search the ground of the square, a few steps in front of the main door. What shape is the metal plaque you find?' },
        options: {
          el: ['Καρδιά', 'Αστέρι, σαν πυξίδα', 'Τετράγωνο με σταυρό', 'Μισοφέγγαρο'],
          en: ['A heart', 'A star, like a compass', 'A square with a cross', 'A crescent moon'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι το «point zéro», το σημείο μηδέν. Από εδώ ξεκινούν οι μεγάλοι δρόμοι της Γαλλίας: όταν μια πινακίδα λέει «Παρίσι 300 χιλιόμετρα», μετράει περίπου ως αυτό το αστέρι! Λένε ότι όποιος το πατήσει θα ξαναγυρίσει κάποτε στο Παρίσι.',
          en: 'This is the point zéro, point zero. The great roads of France start here: when a sign says "Paris 300 km", it is counting roughly to this star! People say that whoever steps on it will come back to Paris one day.',
        },
      },
      story: {
        el: 'Το χτίσιμο αυτής της εκκλησίας ξεκίνησε το 1163 και κράτησε σχεδόν 200 χρόνια. Οι δύο πύργοι της έχουν ύψος 69 μέτρα, και τα τρία στρογγυλά παράθυρά της, οι ρόδακες, λάμπουν σαν τεράστια λουλούδια από χρωματιστό γυαλί. Γύρω από τη στέγη κάθονται τα γκαργκόιλ, πέτρινα τέρατα που φτύνουν το νερό της βροχής μακριά από τους τοίχους. Το 1831 ο Victor Hugo έγραψε την ιστορία του Κουασιμόδου, του καλόκαρδου κωδωνοκρούστη, και όλος ο κόσμος αγάπησε την εκκλησία. Στις 15 Απριλίου 2019 μια φωτιά κατέστρεψε τη στέγη και το βέλος της· ο κόσμος έκλαιγε βλέποντάς την, αλλά ευτυχώς κανείς δεν χάθηκε. Μετά, δύο χιλιάδες περίπου ξυλουργοί, πετράδες και καλλιτέχνες δούλεψαν πέντε χρόνια, και τον Δεκέμβριο του 2024 οι πόρτες άνοιξαν ξανά. Όταν κάτι που αγαπάμε σπάει, μπορούμε να το ξαναχτίσουμε, με υπομονή και πολλά χέρια που βοηθούν.',
        en: 'Work on this cathedral began in 1163, and it took almost 200 years to finish. Its two towers are 69 metres tall, and its three round windows, the rose windows, glow like giant flowers made of coloured glass. Around the roof sit gargoyles, stone monsters that spit rainwater away from the walls. In 1831 Victor Hugo wrote a story about Quasimodo, the kind bell-ringer, and the whole world fell in love with the church. On 15 April 2019 a fire destroyed the roof and the spire; people watched in tears, but everyone was safe. Then around two thousand carpenters, stonecutters and artists worked for five years, and in December 2024 the doors opened again. When something we love breaks, we can build it back, with patience and lots of helping hands.',
      },
      didYouKnow: {
        el: 'Η σειρά με τους 28 βασιλιάδες πάνω από τις πόρτες δείχνει τους βασιλιάδες του Ιούδα από τη Βίβλο, αλλά στην Επανάσταση ο κόσμος τους πέρασε για Γάλλους βασιλιάδες και τους έκοψε τα κεφάλια· 21 από τα κεφάλια βρέθηκαν τυχαία το 1977 στην αυλή μιας τράπεζας και σήμερα εκτίθενται στο μουσείο Cluny. Η μεγάλη καμπάνα Emmanuel, χυμένη το 1686, γλίτωσε από τη φωτιά του 2019.',
        en: 'The row of 28 kings above the doors shows the kings of Judah from the Bible, but during the Revolution crowds mistook them for French kings and knocked their heads off; 21 of the heads were found by chance in 1977 under a bank courtyard and are now in the Cluny museum. The great bell Emmanuel, cast in 1686, survived the 2019 fire.',
      },
      quiz: [
        {
          q: { el: 'Τι είναι τα γκαργκόιλ;', en: 'What are gargoyles?' },
          options: {
            el: ['Πέτρινα τέρατα που φτύνουν το νερό της βροχής', 'Οι καμπάνες της εκκλησίας', 'Χρωματιστά παράθυρα', 'Οι ιερείς της εκκλησίας'],
            en: ['Stone monsters that spit out rainwater', 'The church bells', 'Coloured windows', 'The priests of the church'],
          },
          correct: 0,
          explanation: {
            el: 'Τα γκαργκόιλ είναι πέτρινες υδρορροές σε σχήμα τέρατος: η βροχή τρέχει από το στόμα τους μακριά από τους τοίχους.',
            en: 'Gargoyles are stone water spouts shaped like monsters: rain runs out of their mouths, away from the walls.',
          },
        },
        {
          q: { el: 'Τι έγινε τον Δεκέμβριο του 2024;', en: 'What happened in December 2024?' },
          options: {
            el: ['Ξέσπασε η φωτιά', 'Γράφτηκε το βιβλίο του Victor Hugo', 'Η εκκλησία άνοιξε ξανά μετά την επισκευή', 'Χτίστηκαν οι δύο πύργοι'],
            en: ['The fire broke out', 'Victor Hugo\'s book was written', 'The cathedral reopened after the repairs', 'The two towers were built'],
          },
          correct: 2,
          explanation: {
            el: 'Μετά από πέντε χρόνια δουλειάς, η εκκλησία άνοιξε ξανά τις πόρτες της τον Δεκέμβριο του 2024.',
            en: 'After five years of work, the cathedral opened its doors again in December 2024.',
          },
        },
        {
          q: { el: 'Πόσο κράτησε το χτίσιμο της εκκλησίας;', en: 'How long did it take to build the cathedral?' },
          options: {
            el: ['Έναν χρόνο', 'Σχεδόν 200 χρόνια', 'Πέντε χρόνια', 'Είκοσι χρόνια'],
            en: ['One year', 'Almost 200 years', 'Five years', 'Twenty years'],
          },
          correct: 1,
          explanation: {
            el: 'Το χτίσιμο ξεκίνησε το 1163 και κράτησε σχεδόν 200 χρόνια. Παππούδες, παιδιά και εγγόνια δούλεψαν όλοι στην ίδια εκκλησία!',
            en: 'Building started in 1163 and took almost 200 years. Grandparents, children and grandchildren all worked on the same church!',
          },
        },
      ],
    },

    // ── 7. Panthéon ────────────────────────────────────────────────────────────
    {
      id: 'pantheon-paris',
      name: { el: 'Panthéon', en: 'Panthéon' },
      emoji: '🏛️',
      lat: 48.8462,
      lng: 2.3452,
      radiusM: 60,
      riddle: {
        el: 'Ξεκίνησε ως εκκλησία, μα έγινε το σπίτι όπου αναπαύονται οι ήρωες μιας ολόκληρης χώρας: συγγραφείς, επιστήμονες, ένας άνθρωπος που έμαθε τους τυφλούς να διαβάζουν. Κάτω από τον μεγάλο τρούλο του, ένα εκκρεμές αποδεικνύει ότι η Γη γυρίζει.',
        en: 'It began as a church but became the resting place of a whole country\'s heroes: writers, scientists, a man who taught blind people to read. Beneath its great dome a swinging pendulum proves that the Earth spins.',
      },
      parentHint: {
        el: 'Είναι το Panthéon (Πάνθεον), στον λόφο της Sainte-Geneviève. Από τη Notre-Dame περάστε τη γέφυρα προς τη νότια όχθη και ανηφορίστε 12 λεπτά μέσα από το Quartier Latin, από τη Rue Saint-Jacques και τη Rue Soufflot. Το εσωτερικό θέλει εισιτήριο· μπροστά από τις κολόνες είναι ελεύθερα.',
        en: 'It is the Panthéon, on the Sainte-Geneviève hill. From Notre-Dame cross the bridge to the Left Bank and walk 12 minutes uphill through the Latin Quarter, up Rue Saint-Jacques and Rue Soufflot. The inside needs a ticket; the front steps are free.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για έναν άνθρωπο που έμαθε τους τυφλούς να διαβάζουν. Πώς λέγεται η γραφή με τις ανάγλυφες κουκκίδες που εφηύρε;', en: 'The riddle mentions a man who taught blind people to read. What is the writing of raised dots he invented called?' },
        options: {
          el: ['Μορς', 'Ιερογλυφικά', 'Λατινικά', 'Braille (Μπράιγ)'],
          en: ['Morse', 'Hieroglyphs', 'Latin', 'Braille'],
        },
        correct: 3,
        explanation: {
          el: 'Ο Louis Braille έχασε το φως του μετά από ένα ατύχημα, όταν ήταν τριών ετών. Στα δεκαπέντε του επινόησε ένα αλφάβητο από ανάγλυφες κουκκίδες που διαβάζεται με τα δάχτυλα. Σήμερα το χρησιμοποιούν τυφλοί σε όλον τον κόσμο, και εκείνος αναπαύεται εδώ, ανάμεσα στους ήρωες της Γαλλίας.',
          en: 'Louis Braille lost his sight after an accident when he was three. At fifteen he invented an alphabet of raised dots that is read with the fingertips. Blind people all over the world use it today, and he rests here among the heroes of France.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στις κολόνες και διάβασε τα μεγάλα γράμματα που είναι σκαλισμένα από πάνω τους. Τι λέει η επιγραφή;', en: 'Stand in front of the columns and read the big letters carved above them. What does the inscription say?' },
        options: {
          el: ['AUX GRANDS HOMMES LA PATRIE RECONNAISSANTE', 'LIBERTÉ, ÉGALITÉ, FRATERNITÉ', 'PANTHÉON DE PARIS', 'VIVE LA FRANCE'],
          en: ['AUX GRANDS HOMMES LA PATRIE RECONNAISSANTE', 'LIBERTÉ, ÉGALITÉ, FRATERNITÉ', 'PANTHÉON DE PARIS', 'VIVE LA FRANCE'],
        },
        correct: 0,
        explanation: {
          el: 'Σημαίνει «Στους μεγάλους άντρες, η ευγνώμων πατρίδα». Η φράση γράφτηκε πρώτη φορά το 1791, όταν η Επανάσταση αποφάσισε ότι εδώ θα τιμώνται οι σπουδαιότεροι Γάλλοι. Σήμερα αναπαύονται εδώ και μεγάλες γυναίκες, όπως η Marie Curie.',
          en: 'It means "To the great men, the grateful homeland". The words were first written in 1791, when the Revolution decided that the greatest French people would be honoured here. Today great women rest here too, like Marie Curie.',
        },
      },
      story: {
        el: 'Πριν από πολλά χρόνια, ο βασιλιάς Λουδοβίκος ΙΕ΄ αρρώστησε βαριά και υποσχέθηκε πως, αν γινόταν καλά, θα έχτιζε μια λαμπρή εκκλησία για την Αγία Γενοβέφα, την προστάτιδα του Παρισιού. Έγινε καλά, και ο αρχιτέκτονας Soufflot (Σουφλό) σχεδίασε ένα κτίριο με τρούλο που φαίνεται από πολύ μακριά. Μόλις όμως τελείωσε, ξέσπασε η Γαλλική Επανάσταση, και ο λαός αποφάσισε να το χρησιμοποιήσει αλλιώς: ως τόπο ανάπαυσης για τους σπουδαιότερους Γάλλους άντρες και, αργότερα, γυναίκες. Εδώ αναπαύονται οι συγγραφείς Voltaire (Βολταίρος) και Victor Hugo, ο Louis Braille και η επιστήμονας Marie Curie (Μαρία Κιουρί), που κέρδισε δύο βραβεία Νόμπελ. Το 1851 ο φυσικός Léon Foucault κρέμασε από τον τρούλο ένα μακρύ εκκρεμές και έδειξε στο πλήθος ότι η Γη γυρίζει από κάτω του. Η περιέργεια και οι τολμηρές ιδέες μπορούν να σου χαρίσουν μια θέση ανάμεσα στους ήρωες.',
        en: 'Long ago, King Louis XV fell very ill and promised that if he got better he would build a splendid church for Sainte Geneviève, the protector of Paris. He recovered, and the architect Soufflot designed a building with a dome you can see from far away. But just as it was finished, the French Revolution began, and the people decided to use it differently: as a resting place for the greatest French men and, later, women. Here lie the writers Voltaire and Victor Hugo, Louis Braille, and the scientist Marie Curie, who won two Nobel Prizes. In 1851 the physicist Léon Foucault hung a long pendulum from the dome and showed a crowd that the Earth turns beneath it. Curiosity and brave ideas can earn a place among the heroes.',
      },
      didYouKnow: {
        el: 'Το εκκρεμές του Foucault ταλαντεύεται ακόμη σήμερα κάτω από τον τρούλο: μια μπάλα 28 κιλών σε σύρμα 67 μέτρων, που αλλάζει σιγά σιγά κατεύθυνση μέσα στη μέρα, όχι επειδή γυρίζει αυτή, αλλά επειδή το κτίριο και ολόκληρη η Γη γυρίζουν από κάτω της. Η Marie Curie ήταν η πρώτη γυναίκα που τιμήθηκε εδώ για το δικό της έργο, το 1995.',
        en: 'Foucault\'s pendulum still swings under the dome today: a 28-kilogram ball on a 67-metre wire that slowly changes direction through the day, not because it turns but because the building and the whole Earth turn beneath it. Marie Curie was the first woman honoured here for her own achievements, in 1995.',
      },
      quiz: [
        {
          q: { el: 'Γιατί ο βασιλιάς Λουδοβίκος ΙΕ΄ ήθελε να χτίσει αυτό το κτίριο;', en: 'Why did King Louis XV want to build this?' },
          options: {
            el: ['Για να μένει εκεί', 'Για να φυλάει τους θησαυρούς του', 'Γιατί το υποσχέθηκε όταν αρρώστησε, αν γινόταν καλά', 'Για να ακούει μουσική'],
            en: ['To live in it', 'To keep his treasures', 'Because he promised it when he was ill, if he got better', 'To listen to music'],
          },
          correct: 2,
          explanation: {
            el: 'Ο βασιλιάς αρρώστησε βαριά και υποσχέθηκε μια εκκλησία για την Αγία Γενοβέφα, αν γινόταν καλά. Κράτησε τον λόγο του.',
            en: 'The king fell gravely ill and promised a church for Sainte Geneviève if he recovered. He kept his word.',
          },
        },
        {
          q: { el: 'Τι έδειξε ο Léon Foucault με το εκκρεμές του;', en: 'What did Léon Foucault show with his pendulum?' },
          options: {
            el: ['Ότι ο τρούλος είναι ψηλός', 'Ότι η ώρα περνάει', 'Ότι το σίδερο είναι βαρύ', 'Ότι η Γη γυρίζει'],
            en: ['That the dome is tall', 'That time passes', 'That iron is heavy', 'That the Earth turns'],
          },
          correct: 3,
          explanation: {
            el: 'Το εκκρεμές φαίνεται να αλλάζει κατεύθυνση, αλλά στην πραγματικότητα η Γη γυρίζει από κάτω του. Έτσι ο Foucault το απέδειξε μπροστά σε όλους, το 1851.',
            en: 'The pendulum seems to change direction, but really the Earth is turning beneath it. That is how Foucault proved it in front of everyone, in 1851.',
          },
        },
        {
          q: { el: 'Ποια επιστήμονας αναπαύεται εδώ και κέρδισε δύο βραβεία Νόμπελ;', en: 'Which scientist resting here won two Nobel Prizes?' },
          options: {
            el: ['Η Marie Curie', 'Η Ιωάννα της Λωραίνης', 'Η Μόνα Λίζα', 'Η Marie de Médicis'],
            en: ['Marie Curie', 'Joan of Arc', 'The Mona Lisa', 'Marie de Médicis'],
          },
          correct: 0,
          explanation: {
            el: 'Η Marie Curie κέρδισε το Νόμπελ Φυσικής και το Νόμπελ Χημείας για τις ανακαλύψεις της πάνω στη ραδιενέργεια.',
            en: 'Marie Curie won the Nobel Prize in Physics and the Nobel Prize in Chemistry for her discoveries about radioactivity.',
          },
        },
      ],
    },

    // ── 8. Jardin du Luxembourg ────────────────────────────────────────────────
    {
      id: 'luxembourg-gardens',
      name: { el: 'Jardin du Luxembourg', en: 'Jardin du Luxembourg' },
      emoji: '⛵',
      lat: 48.8474,
      lng: 2.3372,
      radiusM: 80,
      riddle: {
        el: 'Μια βασίλισσα που νοσταλγούσε την πατρίδα της έχτισε ένα παλάτι σαν εκείνα της Ιταλίας και έναν κήπο για να το αγκαλιάζει. Σήμερα μικρά ιστιοφόρα αρμενίζουν στη λιμνούλα του και οι παππούδες παίζουν σκάκι κάτω από τα δέντρα.',
        en: 'A queen who was homesick built a palace like the ones back home in Italy, and a garden to wrap around it. Today little sailing boats race across its pond and grandpas play chess under the trees.',
      },
      parentHint: {
        el: 'Είναι ο Jardin du Luxembourg (Ζαρντέν ντι Λουξεμπούρ, ο Κήπος του Λουξεμβούργου). Από το Panthéon κατεβείτε τη Rue Soufflot (5 λεπτά) και μπείτε από την πύλη απέναντι· η μεγάλη λιμνούλα είναι ακριβώς μπροστά σας. Είσοδος ελεύθερη· τα καραβάκια νοικιάζονται δίπλα στη λιμνούλα τα σαββατοκύριακα και τις σχολικές διακοπές, με καλό καιρό.',
        en: 'It is the Jardin du Luxembourg. From the Panthéon walk down Rue Soufflot (5 minutes) and enter through the gate opposite; the big pond is right in front of you. Entry is free; toy boats are rented beside the pond on weekends and school holidays, weather permitting.',
      },
      unlockQuestion: {
        question: { el: 'Από ποια χώρα ερχόταν η βασίλισσα που νοσταλγούσε την πατρίδα της;', en: 'Which country did the homesick queen come from?' },
        options: {
          el: ['Από την Ισπανία', 'Από την Ιταλία', 'Από την Αγγλία', 'Από την Ελλάδα'],
          en: ['Spain', 'Italy', 'England', 'Greece'],
        },
        correct: 1,
        explanation: {
          el: 'Η Marie de Médicis (Μαρία των Μεδίκων) μεγάλωσε στη Φλωρεντία της Ιταλίας, στο παλάτι Pitti. Όταν έγινε βασίλισσα της Γαλλίας, ήθελε ένα παλάτι και έναν κήπο που να της θυμίζουν τα παιδικά της χρόνια.',
          en: 'Marie de Médicis grew up in Florence, Italy, in the Pitti Palace. When she became queen of France she wanted a palace and a garden that reminded her of her childhood.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε γύρω από τη μεγάλη λιμνούλα όπου αρμενίζουν τα καραβάκια. Πόσες πλευρές έχει;', en: 'Walk around the big pond where the little boats sail. How many sides does it have?' },
        options: {
          el: ['Τέσσερις', 'Έξι', 'Οκτώ', 'Είναι ολοστρόγγυλη'],
          en: ['Four', 'Six', 'Eight', 'It is perfectly round'],
        },
        correct: 2,
        explanation: {
          el: 'Η λιμνούλα είναι οκτάγωνη, με οκτώ πλευρές. Οι κηπουροί των βασιλιάδων αγαπούσαν τα καθαρά γεωμετρικά σχήματα: κοίτα και τα παρτέρια γύρω σου, όλα σε ίσιες γραμμές και τέλειους κύκλους. Αυτό το στιλ λέγεται «γαλλικός κήπος».',
          en: 'The pond is an octagon, with eight sides. The royal gardeners loved neat geometric shapes: look at the flower beds around you, all in straight lines and perfect circles. This style is called the "French garden".',
        },
      },
      story: {
        el: 'Το 1612 η Marie de Médicis, η χήρα του βασιλιά Ερρίκου Δ΄, αγόρασε εδώ ένα μεγάλο κτήμα και ζήτησε ένα παλάτι σαν το παλάτι Pitti της Φλωρεντίας, όπου είχε μεγαλώσει. Έμεινε σε αυτό μόνο λίγα χρόνια, ο κήπος της όμως έμεινε και μεγάλωσε, και σήμερα είναι από τα πιο αγαπημένα πάρκα του Παρισιού. Το παλάτι είναι τώρα το σπίτι της Γερουσίας της Γαλλίας, όπου συζητιούνται οι νόμοι. Εδώ και εκατό περίπου χρόνια τα παιδιά αφήνουν ξύλινα καραβάκια στη μεγάλη λιμνούλα και τα σπρώχνουν με μακριά ξύλα. Ψάξε το σιντριβάνι των Μεδίκων που κρύβεται ανάμεσα στα δέντρα, τα αγάλματα των βασιλισσών της Γαλλίας γύρω από τις βεράντες, το κουκλοθέατρο, τα πόνι και τις κυψέλες στη γωνιά. Ένας κήπος μπορεί να είναι το δώρο μιας βασίλισσας σε μια ολόκληρη πόλη.',
        en: 'In 1612 Marie de Médicis, the widow of King Henri IV, bought a big piece of land here and asked for a palace like the Pitti Palace of Florence, where she had grown up. She only lived in it for a few years, but her garden stayed and grew, and today it is one of the best-loved parks in Paris. The palace is now the home of the French Senate, where laws are discussed. Children have sailed toy boats on the big pond for about a hundred years, pushing them across with long sticks. Look for the Medici fountain hidden among the trees, the statues of queens of France standing around the terraces, the puppet theatre, the pony rides and the beehives in the corner. A garden can be a queen\'s gift to a whole city.',
      },
      didYouKnow: {
        el: 'Ο κήπος έχει κυψέλες από το 1856 και λειτουργεί σχολή μελισσοκομίας· το μέλι του πουλιέται σε μια γιορτή κάθε φθινόπωρο. Ανάμεσα στα δέντρα στέκεται ένα μικρό μπρούντζινο Άγαλμα της Ελευθερίας, μοντέλο του ίδιου του Bartholdi, του γλύπτη του γιγάντιου αγάλματος της Νέας Υόρκης (το αρχικό μεταφέρθηκε το 2012 στο μουσείο Orsay και ένα αντίγραφο πήρε τη θέση του).',
        en: 'The garden has kept beehives since 1856 and runs a beekeeping school; its honey is sold at a festival every autumn. A small bronze Statue of Liberty stands among the trees, a model made by Bartholdi himself, the sculptor of the giant one in New York (the original casting moved to the Musée d\'Orsay in 2012 and a copy took its place).',
      },
      quiz: [
        {
          q: { el: 'Ποια ήταν η Marie de Médicis;', en: 'Who was Marie de Médicis?' },
          options: {
            el: ['Μια ζωγράφος', 'Μια κηπουρός', 'Η κόρη του Ναπολέοντα', 'Η χήρα του βασιλιά Ερρίκου Δ΄'],
            en: ['A painter', 'A gardener', 'Napoleon\'s daughter', 'The widow of King Henri IV'],
          },
          correct: 3,
          explanation: {
            el: 'Η Marie de Médicis ήταν η γυναίκα του Ερρίκου Δ΄, του βασιλιά με το άγαλμα στην Pont Neuf. Όταν εκείνος πέθανε, έχτισε εδώ το παλάτι της.',
            en: 'Marie de Médicis was the wife of Henri IV, the king with the statue on the Pont Neuf. After his death she built her palace here.',
          },
        },
        {
          q: { el: 'Τι στεγάζει σήμερα το παλάτι;', en: 'What is inside the palace today?' },
          options: {
            el: ['Ένα σχολείο', 'Τη Γερουσία της Γαλλίας', 'Ένα μουσείο παιχνιδιών', 'Το σπίτι του προέδρου'],
            en: ['A school', 'The French Senate', 'A toy museum', 'The president\'s home'],
          },
          correct: 1,
          explanation: {
            el: 'Στο παλάτι συνεδριάζει η Γερουσία, όπου συζητιούνται και ψηφίζονται οι νόμοι της Γαλλίας.',
            en: 'The palace is the seat of the Senate, where the laws of France are discussed and voted on.',
          },
        },
        {
          q: { el: 'Πώς σπρώχνουν τα παιδιά τα καραβάκια στη λιμνούλα;', en: 'How do children push the boats on the pond?' },
          options: {
            el: ['Με τηλεκοντρόλ', 'Φυσώντας', 'Με μακριά ξύλα', 'Με τα πόδια τους'],
            en: ['With a remote control', 'By blowing', 'With long sticks', 'With their feet'],
          },
          correct: 2,
          explanation: {
            el: 'Τα καραβάκια δεν έχουν μηχανή: τα παιδιά τα σπρώχνουν με μακριά ξύλα και ο άνεμος φουσκώνει τα πανιά τους.',
            en: 'The boats have no motor: children push them off with long sticks and the wind fills their sails.',
          },
        },
      ],
    },

    // ── 9. Palais Garnier ──────────────────────────────────────────────────────
    {
      id: 'palais-garnier',
      name: { el: 'Palais Garnier', en: 'Palais Garnier' },
      emoji: '🎭',
      lat: 48.8713,
      lng: 2.3318,
      radiusM: 60,
      riddle: {
        el: 'Ένα παλάτι για μουσική, με χρυσά αγάλματα στη στέγη και μαρμάρινες σκάλες σαν τούρτα γάμου. Λένε ότι στα υπόγειά του κρύβεται μια λίμνη και, ίσως, ένα φάντασμα με μάσκα.',
        en: 'A palace built for music, with golden statues on its roof and marble staircases like a wedding cake. They say a lake hides in its cellars, and maybe a ghost in a mask.',
      },
      parentHint: {
        el: 'Είναι η Όπερα Garnier (Palais Garnier), στην Place de l\'Opéra. Από τον κήπο του Λουξεμβούργου πάρτε το RER B από τον σταθμό Luxembourg ως τον Châtelet – Les Halles και μετά το μετρό (γραμμή 7) ως τον σταθμό Opéra, περίπου 20 λεπτά συνολικά. Σταθείτε στα σκαλιά της πρόσοψης.',
        en: 'It is the Opéra Garnier (Palais Garnier), on Place de l\'Opéra. From the Luxembourg garden take RER B from Luxembourg station to Châtelet – Les Halles, then metro line 7 to Opéra, about 20 minutes in all. Stand on the front steps.',
      },
      unlockQuestion: {
        question: { el: 'Ποια ιστορία, που έγινε και διάσημο μιούζικαλ, μιλάει για το φάντασμα με τη μάσκα σε αυτό το θέατρο;', en: 'Which story, later a famous musical, is about the masked ghost of this theatre?' },
        options: {
          el: ['Το Φάντασμα της Όπερας', 'Η Πεντάμορφη και το Τέρας', 'Οι Άθλιοι', 'Ο Γύρος του Κόσμου σε 80 Ημέρες'],
          en: ['The Phantom of the Opera', 'Beauty and the Beast', 'Les Misérables', 'Around the World in Eighty Days'],
        },
        correct: 0,
        explanation: {
          el: 'Ο συγγραφέας Gaston Leroux έγραψε το 1910 το «Φάντασμα της Όπερας», εμπνευσμένος από τη λίμνη κάτω από το θέατρο και από ένα αληθινό ατύχημα με τον πολυέλαιο. Το φάντασμα δεν υπάρχει, η λίμνη όμως ναι!',
          en: 'The writer Gaston Leroux wrote The Phantom of the Opera in 1910, inspired by the lake under the theatre and by a real accident with the chandelier. The ghost is not real, but the lake is!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά στην πρόσοψη, ανάμεσα στις κολόνες του πρώτου ορόφου: υπάρχουν χρυσές προτομές μεγάλων μουσικών, με τα ονόματά τους γραμμένα από κάτω. Ποιο από αυτά τα ονόματα μπορείς να διαβάσεις;', en: 'Look up at the front, between the columns of the first floor: there are golden busts of great musicians, with their names written beneath. Which of these names can you read?' },
        options: {
          el: ['BACH', 'VIVALDI', 'CHOPIN', 'MOZART'],
          en: ['BACH', 'VIVALDI', 'CHOPIN', 'MOZART'],
        },
        correct: 3,
        explanation: {
          el: 'Ο Mozart (Μότσαρτ) είναι εκεί, μαζί με τον Beethoven, τον Rossini και άλλους τέσσερις συνθέτες όπερας. Ο Garnier ήθελε το κτίριο να λέει από έξω τι γίνεται μέσα: μουσική, χορός και θέατρο.',
          en: 'Mozart is there, together with Beethoven, Rossini and four other opera composers. Garnier wanted the building to tell from the outside what happens inside: music, dance and theatre.',
        },
      },
      story: {
        el: 'Το 1861 ένας νεαρός αρχιτέκτονας, ο Charles Garnier (Σαρλ Γκαρνιέ), κέρδισε έναν διαγωνισμό για να χτίσει το πιο μεγαλοπρεπές θέατρο όπερας του κόσμου. Το χτίσιμο κράτησε δεκατέσσερα χρόνια, και επειδή το νερό πλημμύριζε συνέχεια τα θεμέλια, οι χτίστες έφτιαξαν μια τεράστια υπόγεια δεξαμενή: αυτή είναι η «λίμνη» των θρύλων. Η όπερα άνοιξε το 1875, λαμπερή από μάρμαρα, χρυσάφι και καθρέφτες· η μεγάλη σκάλα είναι από μόνη της παράσταση, εκεί όπου ο κόσμος πήγαινε για να δει και να τον δουν. Η σκηνή της είναι τόσο μεγάλη που έχουν ανέβει πάνω της αληθινά άλογα. Το 1964 ο ζωγράφος Marc Chagall (Μαρκ Σαγκάλ) γέμισε το ταβάνι πάνω από τους θεατές με χορευτές, μουσική και τα μνημεία του Παρισιού σε ζωηρά χρώματα. Και οι μικροί μαθητές μπαλέτου που εκπαιδεύονται εδώ λέγονται ακόμη «ποντικάκια»!',
        en: 'In 1861 a young architect named Charles Garnier won a contest to build the grandest opera house in the world. Building it took fourteen years, partly because water kept flooding the foundations; the builders made a huge underground water tank, which is the lake of the legends. The opera opened in 1875, glittering with marble, gold and mirrors; the great staircase alone is a show, where people came to see and be seen. Its stage is so big that real horses have appeared on it. In 1964 the painter Marc Chagall covered the ceiling above the audience with dancers, music and Paris landmarks in bright colours. And the young ballet students who train here are still called the little rats!',
      },
      didYouKnow: {
        el: 'Ο μπρούντζινος πολυέλαιος της αίθουσας ζυγίζει περίπου επτά τόνους. Το 1896 ένα από τα αντίβαρά του έπεσε στο κοινό, και το ατύχημα, μαζί με την υπόγεια δεξαμενή, έδωσε στον Gaston Leroux την ιδέα για το «Φάντασμα της Όπερας». Οι πυροσβέστες του Παρισιού χρησιμοποιούν ακόμη τη δεξαμενή για ασκήσεις κατάδυσης.',
        en: 'The bronze chandelier in the auditorium weighs about seven tonnes. In 1896 one of its counterweights fell into the audience, and the accident, together with the underground cistern, gave Gaston Leroux the idea for The Phantom of the Opera. Paris firefighters still use the cistern for diving practice.',
      },
      quiz: [
        {
          q: { el: 'Τι είναι στ\' αλήθεια η «λίμνη» κάτω από την όπερα;', en: 'What is the "lake" under the opera really?' },
          options: {
            el: ['Ένα ποτάμι που περνάει από κάτω', 'Μια τεράστια υπόγεια δεξαμενή νερού', 'Μια πισίνα για τους χορευτές', 'Ένας θρύλος, δεν υπάρχει νερό'],
            en: ['A river flowing underneath', 'A huge underground water tank', 'A swimming pool for the dancers', 'A legend, there is no water'],
          },
          correct: 1,
          explanation: {
            el: 'Το νερό πλημμύριζε τα θεμέλια, γι\' αυτό οι χτίστες έφτιαξαν μια τεράστια δεξαμενή για να το κρατούν. Υπάρχει ακόμη!',
            en: 'Water kept flooding the foundations, so the builders made a huge tank to hold it. It is still there!',
          },
        },
        {
          q: { el: 'Ποιος ζωγράφισε το ταβάνι της αίθουσας το 1964;', en: 'Who painted the ceiling of the auditorium in 1964?' },
          options: {
            el: ['Ο Marc Chagall', 'Ο Leonardo da Vinci', 'Ο Charles Garnier', 'Ο Victor Hugo'],
            en: ['Marc Chagall', 'Leonardo da Vinci', 'Charles Garnier', 'Victor Hugo'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Marc Chagall ζωγράφισε το ταβάνι με χορευτές, μουσικούς και τα μνημεία του Παρισιού, σε ζωηρά χρώματα.',
            en: 'Marc Chagall painted the ceiling with dancers, musicians and Paris landmarks in bright colours.',
          },
        },
        {
          q: { el: 'Πώς λέγονται οι μικροί μαθητές μπαλέτου της όπερας;', en: 'What are the young ballet students of the opera called?' },
          options: {
            el: ['Τα κουνελάκια', 'Οι πεταλούδες', 'Οι σπίνοι', 'Τα ποντικάκια'],
            en: ['The bunnies', 'The butterflies', 'The finches', 'The little rats'],
          },
          correct: 3,
          explanation: {
            el: 'Τα «ποντικάκια» της όπερας είναι τα παιδιά της σχολής χορού της. Λένε ότι το παρατσούκλι βγήκε επειδή τρέχουν παντού με μικρά, γρήγορα βήματα!',
            en: 'The "little rats" of the opera are the children of its dance school. One story says the nickname comes from the way they scurry about with tiny, quick steps!',
          },
        },
      ],
    },

    // ── 10. Sacré-Cœur ─────────────────────────────────────────────────────────
    {
      id: 'sacre-coeur',
      name: { el: 'Sacré-Cœur', en: 'Sacré-Cœur' },
      emoji: '🔔',
      lat: 48.8862,
      lng: 2.3431,
      radiusM: 80,
      riddle: {
        el: 'Στον πιο ψηλό λόφο της πόλης, μια κάτασπρη εκκλησία με τρούλους σαν μαρέγκες γίνεται πιο λευκή κάθε φορά που βρέχει. Ένα μικρό τρενάκι σε ανεβάζει με σχοινί, και λίγο πιο πέρα οι ζωγράφοι στήνουν τα καβαλέτα τους στην πλατεία.',
        en: 'On the highest hill in town, a snow-white church with domes like meringues gets whiter every time it rains. A tiny train on a cable carries you up, and just around the corner painters set up their easels in the square.',
      },
      parentHint: {
        el: 'Είναι η Sacré-Cœur (Σακρέ Κερ, η βασιλική της Ιερής Καρδιάς), στον λόφο της Montmartre (Μονμάρτρη). Από την Όπερα πάρτε το μετρό γραμμή 3 δύο στάσεις ως τον Saint-Lazare (ή περπατήστε 6 λεπτά), αλλάξτε στη γραμμή 12 ως τον σταθμό Abbesses και ανηφορίστε 7 λεπτά ακολουθώντας τις πινακίδες· ή από τη γραμμή 12 κατεβείτε στην Pigalle, πάρτε τη γραμμή 2 μία στάση ως τον σταθμό Anvers και ανεβείτε με το τελεφερίκ (δέχεται εισιτήριο μετρό).',
        en: 'It is the Sacré-Cœur basilica, on the hill of Montmartre. From the Opéra take metro line 3 two stops to Saint-Lazare (or walk 6 minutes), change to line 12 to Abbesses and follow the signs 7 minutes uphill; or get off line 12 at Pigalle, take line 2 one stop to Anvers and ride the funicular (a metro ticket works).',
      },
      unlockQuestion: {
        question: { el: 'Ο λόφος με τους ζωγράφους λέγεται Montmartre. Ποιος διάσημος ζωγράφος έζησε εκεί νέος και ζωγράφιζε με μπλε και ροζ χρώματα;', en: 'The painters\' hill is called Montmartre. Which famous painter lived there as a young man and painted in blues and pinks?' },
        options: {
          el: ['Ο Leonardo da Vinci', 'Ο Michelangelo', 'Ο Pablo Picasso', 'Ο Walt Disney'],
          en: ['Leonardo da Vinci', 'Michelangelo', 'Pablo Picasso', 'Walt Disney'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Pablo Picasso έμενε στη Montmartre σε ένα παλιό ξύλινο κτίριο, το Bateau-Lavoir, όταν ήταν είκοσι και κάτι χρονών. Πριν από εκείνον, στον λόφο είχαν ζήσει και ο Renoir και ο Van Gogh, γιατί τα σπίτια ήταν φτηνά και η θέα υπέροχη.',
          en: 'Pablo Picasso lived in Montmartre in an old wooden building called the Bateau-Lavoir when he was in his twenties. Before him, Renoir and Van Gogh had also lived on the hill, because the houses were cheap and the view was wonderful.',
        },
      },
      onSite: {
        question: { el: 'Πάνω από τις τρεις αψίδες της εισόδου, δύο καβαλάρηδες φυλάνε την πόρτα. Τι χρώμα έχουν;', en: 'Above the three arches of the entrance, two riders on horseback guard the door. What colour are they?' },
        options: {
          el: ['Χρυσό', 'Πράσινο', 'Άσπρο σαν την εκκλησία', 'Μαύρο'],
          en: ['Gold', 'Green', 'White like the church', 'Black'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι από μπρούντζο, που με τα χρόνια και τη βροχή πρασινίζει, όπως το Άγαλμα της Ελευθερίας. Ο ένας είναι ο βασιλιάς Λουδοβίκος Θ΄, ο Άγιος Λουδοβίκος, και η άλλη η Ιωάννα της Λωραίνης, η κοπέλα που οδήγησε τον γαλλικό στρατό όταν ήταν μόλις δεκαεπτά χρονών.',
          en: 'They are made of bronze, which turns green over the years in the rain, like the Statue of Liberty. One is King Louis IX, called Saint Louis, and the other is Joan of Arc, the girl who led the French army when she was only seventeen.',
        },
      },
      story: {
        el: 'Η Montmartre είναι ο ψηλότερος λόφος του Παρισιού, 130 μέτρα ψηλός, και για πολύ καιρό ήταν ένα χωριό με ανεμόμυλους και αμπέλια. Μετά από έναν οδυνηρό πόλεμο και δύσκολα χρόνια για την πόλη, τη δεκαετία του 1870, οι άνθρωποι υποσχέθηκαν να χτίσουν στον λόφο μια εκκλησία ως σημάδι ελπίδας, και την πλήρωσαν με αμέτρητες μικρές δωρεές. Το χτίσιμο ξεκίνησε το 1875 και κράτησε σχεδόν σαράντα χρόνια. Η πέτρα της έρχεται από ένα λατομείο νότια του Παρισιού και έχει ένα μυστικό: όταν την αγγίζει η βροχή, αφήνει μια άσπρη σκόνη, κι έτσι η εκκλησία πλένεται μόνη της και δεν γκριζάρει ποτέ. Η μεγαλύτερη καμπάνα της, η Savoyarde (Σαβουαγιάρντ), ζυγίζει περίπου 19 τόνους και ήρθε από τις Άλπεις πάνω σε ένα κάρο που το έσερναν 28 άλογα. Λίγο πιο πέρα, οι ζωγράφοι πουλάνε ακόμη τους πίνακές τους στην Place du Tertre.',
        en: 'Montmartre is the highest hill in Paris, 130 metres high, and for a long time it was a village of windmills and vineyards. After a painful war and hard years for the city in the 1870s, people promised to build a church on the hill as a sign of hope, and paid for it with countless small donations. Building started in 1875 and took almost forty years. The stone comes from a quarry south of Paris and has a secret: when rain touches it, it releases a white powder, so the church washes itself clean and never turns grey. Its biggest bell, the Savoyarde, weighs about 19 tonnes and came from the Alps on a cart pulled by 28 horses. Around the corner, painters still sell their pictures in the Place du Tertre.',
      },
      didYouKnow: {
        el: 'Η βασιλική στέκεται σε έναν λόφο γεμάτο παλιά λατομεία γύψου, γι\' αυτό οι χτίστες άνοιξαν 83 πηγάδια βάθους πάνω από 30 μέτρων και τα γέμισαν με μπετόν πριν βάλουν την πρώτη πέτρα· οι ντόπιοι αστειεύονταν ότι η εκκλησία στέκεται πάνω σε ξυλοπόδαρα. Από την κορυφή του τρούλου, με καθαρό καιρό, βλέπεις σε απόσταση περίπου 30 χιλιομέτρων.',
        en: 'The basilica sits on a hill riddled with old gypsum quarries, so its builders sank 83 concrete-filled shafts more than 30 metres deep before laying the first stone; locals joked that the church stood on stilts. From the top of the dome, on a clear day, you can see about 30 kilometres.',
      },
      quiz: [
        {
          q: { el: 'Γιατί η εκκλησία μένει πάντα άσπρη;', en: 'Why does the church always stay white?' },
          options: {
            el: ['Γιατί η πέτρα της αφήνει άσπρη σκόνη με τη βροχή και πλένεται μόνη της', 'Γιατί τη βάφουν κάθε μήνα', 'Γιατί είναι από μάρμαρο', 'Γιατί δεν βρέχει ποτέ στη Montmartre'],
            en: ['Because its stone releases a white powder in the rain and washes itself', 'Because it is painted every month', 'Because it is made of marble', 'Because it never rains in Montmartre'],
          },
          correct: 0,
          explanation: {
            el: 'Η πέτρα της, ένας τραβερτίνης, αφήνει με τη βροχή μια άσπρη ουσία που την καθαρίζει. Όσο πιο πολύ βρέχει, τόσο πιο άσπρη γίνεται!',
            en: 'Its stone, a travertine, releases a white substance in the rain that cleans it. The more it rains, the whiter it gets!',
          },
        },
        {
          q: { el: 'Πώς έφτασε η μεγάλη καμπάνα στον λόφο;', en: 'How did the great bell reach the hill?' },
          options: {
            el: ['Με ελικόπτερο', 'Με το τελεφερίκ', 'Με ένα κάρο που το έσερναν 28 άλογα', 'Την κουβάλησαν οι ζωγράφοι'],
            en: ['By helicopter', 'On the funicular', 'On a cart pulled by 28 horses', 'The painters carried it'],
          },
          correct: 2,
          explanation: {
            el: 'Η Savoyarde ζυγίζει περίπου 19 τόνους. Το 1895 την έσυραν στην ανηφόρα 28 άλογα, και όλη η γειτονιά βγήκε να δει.',
            en: 'The Savoyarde weighs about 19 tonnes. In 1895, 28 horses hauled it up the hill, and the whole neighbourhood came out to watch.',
          },
        },
        {
          q: { el: 'Τι υπήρχε παλιά στον λόφο της Montmartre;', en: 'What was on the hill of Montmartre long ago?' },
          options: {
            el: ['Ένα αεροδρόμιο', 'Ένα χωριό με ανεμόμυλους και αμπέλια', 'Μια παραλία', 'Ένα κάστρο'],
            en: ['An airport', 'A village with windmills and vineyards', 'A beach', 'A castle'],
          },
          correct: 1,
          explanation: {
            el: 'Η Montmartre ήταν ένα χωριό έξω από το Παρίσι, με ανεμόμυλους και αμπέλια. Δύο μύλοι και ένα μικρό αμπέλι υπάρχουν ακόμη!',
            en: 'Montmartre was a village outside Paris, with windmills and vineyards. Two windmills and a small vineyard are still there!',
          },
        },
      ],
    },
  ],
};
