/**
 * WiseBot Explorer · Λισαβόνα / Lisbon
 * ====================================
 * Ten spots in two half-days: the Baixa and Alfama on foot (spots 1–7), then Belém by
 * tram 15 (spots 8–10). Original text only, verified facts, language for a child of 7–12
 * in Greek and English. Portuguese names stay in Portuguese in both languages.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'lisbon',
  name: { el: 'Λισαβόνα', en: 'Lisbon' },
  country: { el: 'Πορτογαλία', en: 'Portugal' },
  countryCode: 'PT',
  emoji: '🚋',
  center: { lat: 38.7100, lng: -9.1400 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι ο WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στη Λισαβόνα, την πόλη με τους επτά λόφους! Εδώ μικρά κίτρινα τραμ σκαρφαλώνουν στους στενούς δρόμους, και από αυτό το ποτάμι ξεκίνησαν πριν από περισσότερα από 500 χρόνια οι μεγάλοι θαλασσοπόροι για να γνωρίσουν τον κόσμο. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές της Λισαβόνας!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Lisbon, the city of seven hills! Here little yellow trams climb the narrow streets, and from this river the great sailors set off more than 500 years ago to explore the world. Solve my riddles, find the ten secret spots and become Lisbon explorers yourselves!',
  },
  route: [
    'praca-do-comercio',
    'arco-da-rua-augusta',
    'elevador-de-santa-justa',
    'rossio',
    'se-cathedral',
    'castelo-de-sao-jorge',
    'miradouro-de-santa-luzia',
    'torre-de-belem',
    'padrao-dos-descobrimentos',
    'mosteiro-dos-jeronimos',
  ],
  spots: [
    // ── 1. Praça do Comércio ───────────────────────────────────────────────────
    {
      id: 'praca-do-comercio',
      name: { el: 'Praça do Comércio', en: 'Praça do Comércio' },
      emoji: '🐎',
      lat: 38.7075,
      lng: -9.1364,
      radiusM: 40,
      riddle: {
        el: 'Ένας βασιλιάς καβάλα στο άλογό του κοιτάζει ένα ποτάμι τόσο φαρδύ που μοιάζει με θάλασσα. Γύρω του, κίτρινα κτίρια αγκαλιάζουν μια τεράστια πλατεία που από τη μία μεριά της είναι ανοιχτή στο νερό.',
        en: 'A king on horseback gazes at a river so wide it looks like the sea. Around him, yellow buildings hug a giant square that is open to the water on one side.',
      },
      parentHint: {
        el: 'Είναι η Praça do Comércio (η Πλατεία του Εμπορίου), δίπλα στον ποταμό Τάγο. Ξεκινήστε από εδώ: ο σταθμός του μετρό Terreiro do Paço και τα τραμ 15 και 25 σταματούν ακριβώς δίπλα στην πλατεία.',
        en: 'It is the Praça do Comércio, on the river Tagus. Start here: the Terreiro do Paço metro station and trams 15 and 25 stop right beside the square.',
      },
      unlockQuestion: {
        question: { el: 'Σε ποιο ποτάμι ανοίγει αυτή η πλατεία;', en: 'Which river does this square open onto?' },
        options: {
          el: ['Στον Δούναβη', 'Στον Τάγο', 'Στον Σηκουάνα', 'Στον Νείλο'],
          en: ['The Danube', 'The Tagus', 'The Seine', 'The Nile'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Τάγος (Tejo στα πορτογαλικά) είναι το μεγαλύτερο ποτάμι της Ιβηρικής Χερσονήσου. Στη Λισαβόνα γίνεται τόσο φαρδύς που οι ντόπιοι τον λένε «Θάλασσα από Άχυρο», γιατί λάμπει χρυσός στον ήλιο.',
          en: 'The Tagus (Tejo in Portuguese) is the longest river of the Iberian Peninsula. At Lisbon it grows so wide that locals call it the “Sea of Straw”, because it shines golden in the sun.',
        },
      },
      onSite: {
        question: { el: 'Πήγαινε στην ανοιχτή πλευρά της πλατείας, δίπλα στο νερό. Τι βρίσκεις εκεί;', en: 'Walk to the open side of the square, right by the water. What do you find there?' },
        options: {
          el: ['Έναν φάρο', 'Δύο πέτρινες κολόνες και σκαλιά που μπαίνουν στο νερό', 'Μια μεγάλη γέφυρα', 'Μια αμμουδιά'],
          en: ['A lighthouse', 'Two stone columns and steps going down into the water', 'A big bridge', 'A sandy beach'],
        },
        correct: 1,
        explanation: {
          el: 'Αυτό είναι το Cais das Colunas, η «Προβλήτα με τις Κολόνες». Παλιά οι βασιλιάδες και οι σημαντικοί επισκέπτες έφταναν με βάρκα και ανέβαιναν αυτά τα μαρμάρινα σκαλιά για να μπουν στην πόλη.',
          en: 'This is the Cais das Colunas, the “Pier of the Columns”. Long ago, kings and important visitors arrived by boat and climbed these marble steps to enter the city.',
        },
      },
      story: {
        el: 'Κάποτε, ακριβώς εδώ, δίπλα στο ποτάμι, στεκόταν το παλάτι του βασιλιά. Το πρωί της 1ης Νοεμβρίου 1755 ένας τρομερός σεισμός ταρακούνησε τη Λισαβόνα, και το παλάτι, μαζί με το μεγαλύτερο μέρος του κέντρου, χάθηκε. Οι άνθρωποι όμως δεν τα παράτησαν. Ένας έξυπνος υπουργός, ο Μαρκήσιος του Pombal, σχεδίασε ίσιους καινούργιους δρόμους και έχτισε αυτή την τεράστια πλατεία με τις κίτρινες στοές. Ο βασιλιάς πάνω στο άλογο είναι ο José I (Ζοζέ ο Α΄), που βασίλευε τότε. Η πλατεία έγινε τόσο μεγάλη για να υποδέχεται καράβια και εμπόρους από όλον τον κόσμο. Όταν κάτι σπάει, μπορούμε να το ξαναχτίσουμε, καμιά φορά και καλύτερο!',
        en: 'Once, a royal palace stood right here, by the river. On the morning of 1 November 1755, a terrible earthquake shook Lisbon, and the palace, with most of the city centre, was lost. But the people of Lisbon did not give up. A clever minister, the Marquis of Pombal, drew straight new streets and built this enormous square with yellow arcades. The king on the horse is José I, who ruled at the time. The square was made this big to welcome ships and merchants from all over the world. When something breaks, we can build it again, sometimes even better!',
      },
      didYouKnow: {
        el: 'Οι Πορτογάλοι ακόμη λένε την πλατεία Terreiro do Paço, «η Αυλή του Παλατιού», αν και το παλάτι χάθηκε πριν από περισσότερα από 260 χρόνια. Ο σεισμός του 1755 ήταν από τους ισχυρότερους που έχουν καταγραφεί ποτέ στην Ευρώπη, και το τεράστιο κύμα που προκάλεσε έφτασε ως τις ακτές της Αγγλίας και της Καραϊβικής.',
        en: 'Portuguese people still call the square Terreiro do Paço, “the Palace Ground”, even though the palace vanished more than 260 years ago. The 1755 earthquake was one of the strongest ever recorded in Europe, and the great wave it caused reached the coasts of England and even the Caribbean.',
      },
      quiz: [
        {
          q: { el: 'Τι υπήρχε σε αυτή την πλατεία πριν από το 1755;', en: 'What stood on this square before 1755?' },
          options: {
            el: ['Το παλάτι του βασιλιά', 'Ένα γήπεδο ποδοσφαίρου', 'Ένας φάρος', 'Ένα μεγάλο δάσος'],
            en: ['The royal palace', 'A football stadium', 'A lighthouse', 'A big forest'],
          },
          correct: 0,
          explanation: {
            el: 'Εδώ ήταν το παλάτι των βασιλιάδων της Πορτογαλίας, μέχρι που το γκρέμισε ο σεισμός του 1755.',
            en: 'The palace of the kings of Portugal stood here, until the earthquake of 1755 destroyed it.',
          },
        },
        {
          q: { el: 'Ποιος είναι ο βασιλιάς πάνω στο άλογο;', en: 'Who is the king on the horse?' },
          options: {
            el: ['Ο Manuel I', 'Ο Afonso Henriques', 'Ο José I', 'Ο Pedro IV'],
            en: ['Manuel I', 'Afonso Henriques', 'José I', 'Pedro IV'],
          },
          correct: 2,
          explanation: {
            el: 'Το άγαλμα δείχνει τον βασιλιά José I, που βασίλευε όταν έγινε ο σεισμός και όταν ξαναχτίστηκε η πόλη.',
            en: 'The statue shows King José I, who ruled when the earthquake struck and when the city was rebuilt.',
          },
        },
        {
          q: { el: 'Ποιος σχεδίασε τους ίσιους καινούργιους δρόμους μετά τον σεισμό;', en: 'Who planned the straight new streets after the earthquake?' },
          options: {
            el: ['Ο Vasco da Gama', 'Ο Μαρκήσιος του Pombal', 'Ο Ερρίκος ο Θαλασσοπόρος', 'Ο Gustave Eiffel'],
            en: ['Vasco da Gama', 'The Marquis of Pombal', 'Henry the Navigator', 'Gustave Eiffel'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Μαρκήσιος του Pombal ήταν ο υπουργός του βασιλιά. Σχεδίασε την καινούργια Λισαβόνα με ίσιους δρόμους και γερά κτίρια, για να αντέχουν σε άλλον σεισμό.',
            en: 'The Marquis of Pombal was the king\'s minister. He planned the new Lisbon with straight streets and sturdy buildings that could survive another earthquake.',
          },
        },
      ],
    },

    // ── 2. Arco da Rua Augusta ─────────────────────────────────────────────────
    {
      id: 'arco-da-rua-augusta',
      name: { el: 'Arco da Rua Augusta', en: 'Arco da Rua Augusta' },
      emoji: '🕰️',
      lat: 38.7084,
      lng: -9.1366,
      radiusM: 40,
      riddle: {
        el: 'Ένα πέτρινο τόξο, σαν πύλη γιορτής, στέκεται ανάμεσα στη μεγάλη πλατεία και στον πιο πολυσύχναστο πεζόδρομο της πόλης. Ψηλά πάνω του, ένα ρολόι μετράει την ώρα και μαρμάρινες φιγούρες κοιτάζουν τον κόσμο από κάτω.',
        en: 'A stone archway stands like a party gate between the big square and the busiest walking street in town. High above, a clock keeps time and marble figures watch the crowds below.',
      },
      parentHint: {
        el: 'Είναι η Arco da Rua Augusta (η Αψίδα της οδού Augusta), στη βόρεια πλευρά της Praça do Comércio. Περπατήστε ένα λεπτό μέσα από την πλατεία προς τον πεζόδρομο.',
        en: 'It is the Arco da Rua Augusta, on the north side of Praça do Comércio. Walk one minute across the square towards the pedestrian street.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί χτίστηκε αυτή η αψίδα;', en: 'Why was this arch built?' },
        options: {
          el: ['Για να γιορτάσει μια νίκη στο ποδόσφαιρο', 'Για να γιορτάσει το ξαναχτίσιμο της πόλης μετά τον σεισμό', 'Για να είναι η είσοδος ενός κάστρου', 'Για να κρεμάσουν μια μεγάλη καμπάνα'],
          en: ['To celebrate a football victory', 'To celebrate the rebuilding of the city after the earthquake', 'To be the entrance of a castle', 'To hang a giant bell'],
        },
        correct: 1,
        explanation: {
          el: 'Η αψίδα είναι ένα «μπράβο» από πέτρα: γιορτάζει ότι η Λισαβόνα σηκώθηκε ξανά μετά τον μεγάλο σεισμό του 1755.',
          en: 'The arch is a “well done” made of stone: it celebrates Lisbon rising again after the great earthquake of 1755.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τις ψηλές κολόνες στην πρόσοψη της αψίδας. Πόσες είναι;', en: 'Count the tall columns on the front of the arch. How many are there?' },
        options: {
          el: ['Δύο', 'Τέσσερις', 'Έξι', 'Οκτώ'],
          en: ['Two', 'Four', 'Six', 'Eight'],
        },
        correct: 2,
        explanation: {
          el: 'Έξι κολόνες κρατούν την αψίδα. Ανάμεσά τους στέκονται αγάλματα σπουδαίων Πορτογάλων, όπως ο θαλασσοπόρος Vasco da Gama και ο Μαρκήσιος του Pombal.',
          en: 'Six columns hold up the arch. Between them stand statues of famous Portuguese people, like the explorer Vasco da Gama and the Marquis of Pombal.',
        },
      },
      story: {
        el: 'Αυτή η αψίδα σχεδιάστηκε αμέσως μετά τον σεισμό, σαν μια πύλη που λέει: «Κοιτάξτε, η Λισαβόνα στέκεται ξανά!». Το χτίσιμο όμως κράτησε πάρα πολύ: τελείωσε μόλις το 1875, περισσότερα από εκατό χρόνια αργότερα. Στην κορυφή, μια γυναίκα που λέγεται Δόξα στεφανώνει δύο φιγούρες, την Ιδιοφυΐα και τη Γενναιότητα, δηλαδή την εξυπνάδα και το θάρρος: ακριβώς αυτά που χρειάστηκε η πόλη για να σηκωθεί. Πιο χαμηλά θα δεις σκαλισμένους στην πέτρα διάσημους Πορτογάλους, όπως τον εξερευνητή Vasco da Gama και τον Μαρκήσιο του Pombal. Σήμερα ένα ασανσέρ ανεβάζει τους επισκέπτες στην κορυφή, για να δουν από ψηλά τους ίσιους δρόμους της Baixa (Μπάισα, η «κάτω πόλη»).',
        en: 'This arch was planned right after the earthquake, as a gateway that says: “Look, Lisbon is standing again!” But building it took a very long time; it was finished only in 1875, more than a hundred years later. At the very top, a lady called Glory places crowns on two figures, Genius and Valour, meaning cleverness and courage: exactly what the city needed to rise again. Lower down, you can spot famous Portuguese people carved in stone, like the explorer Vasco da Gama and the Marquis of Pombal. Today a lift takes visitors to the top for a view down the straight streets of the Baixa, the “low town”.',
      },
      didYouKnow: {
        el: 'Το σύμπλεγμα στην κορυφή το σκάλισε ένας Γάλλος γλύπτης, ο Célestin Anatole Calmels, ενώ η ταράτσα της αψίδας άνοιξε για το κοινό μόλις το 2013. Το ρολόι προστέθηκε πολύ αργότερα από την ίδια την αψίδα, τον 20ό αιώνα.',
        en: 'The group at the top was carved by a French sculptor, Célestin Anatole Calmels, and the rooftop terrace only opened to the public in 2013. The clock was added long after the arch itself, in the 20th century.',
      },
      quiz: [
        {
          q: { el: 'Πότε τελείωσε η αψίδα;', en: 'When was the arch finished?' },
          options: {
            el: ['Την ίδια χρονιά με τον σεισμό', 'Το 1875, περισσότερα από εκατό χρόνια μετά τον σεισμό', 'Πέρυσι', 'Πριν από τον σεισμό'],
            en: ['The same year as the earthquake', 'In 1875, more than a hundred years after the earthquake', 'Last year', 'Before the earthquake'],
          },
          correct: 1,
          explanation: {
            el: 'Την αψίδα τη σχεδίασαν αμέσως μετά τον σεισμό, αλλά τελείωσε μόλις το 1875. Τα μεγάλα έργα θέλουν υπομονή!',
            en: 'The arch was planned right after the earthquake, but it was only finished in 1875. Big projects need patience!',
          },
        },
        {
          q: { el: 'Τι κάνει η γυναίκα στην κορυφή της αψίδας;', en: 'What is the lady at the top of the arch doing?' },
          options: {
            el: ['Χτυπάει μια καμπάνα', 'Κρατάει ένα καράβι', 'Στεφανώνει την Ιδιοφυΐα και τη Γενναιότητα', 'Ζωγραφίζει την αψίδα'],
            en: ['Ringing a bell', 'Holding a ship', 'Placing crowns on Genius and Valour', 'Painting the arch'],
          },
          correct: 2,
          explanation: {
            el: 'Η Δόξα στεφανώνει την Ιδιοφυΐα και τη Γενναιότητα. Με εξυπνάδα και θάρρος η πόλη ξαναχτίστηκε.',
            en: 'Glory crowns Genius and Valour. With cleverness and courage the city was rebuilt.',
          },
        },
        {
          q: { el: 'Ποιος εξερευνητής είναι σκαλισμένος στην αψίδα;', en: 'Which explorer is carved on the arch?' },
          options: {
            el: ['Ο Χριστόφορος Κολόμβος', 'Ο Μάρκο Πόλο', 'Ο Τζέιμς Κουκ', 'Ο Vasco da Gama'],
            en: ['Christopher Columbus', 'Marco Polo', 'James Cook', 'Vasco da Gama'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Vasco da Gama, ο Πορτογάλος θαλασσοπόρος που έφτασε στην Ινδία, έχει το δικό του άγαλμα ανάμεσα στις κολόνες.',
            en: 'Vasco da Gama, the Portuguese sailor who reached India, has his own statue between the columns.',
          },
        },
      ],
    },

    // ── 3. Elevador de Santa Justa ─────────────────────────────────────────────
    {
      id: 'elevador-de-santa-justa',
      name: { el: 'Elevador de Santa Justa', en: 'Elevador de Santa Justa' },
      emoji: '🛗',
      lat: 38.7123,
      lng: -9.1394,
      radiusM: 60,
      riddle: {
        el: 'Δεν είναι πύργος κάστρου, αλλά ένας σιδερένιος πύργος με δαντέλες, που ανεβάζει τους ανθρώπους από την κάτω πόλη στην πάνω πόλη σε λίγα δευτερόλεπτα.',
        en: 'It is not a castle tower but a lacy iron one, and it lifts people from the low town up to the high town in a few seconds.',
      },
      parentHint: {
        el: 'Είναι το Elevador de Santa Justa (το Ασανσέρ της Σάντα Ζούστα). Ανεβείτε τον πεζόδρομο Rua Augusta για 5 λεπτά και στρίψτε αριστερά στη Rua de Santa Justa.',
        en: 'It is the Elevador de Santa Justa, the iron lift. Walk up the pedestrian Rua Augusta for 5 minutes and turn left into Rua de Santa Justa.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι είναι σιδερένιος πύργος με δαντέλες. Ποιος διάσημος πύργος στο Παρίσι είναι φτιαγμένος από το ίδιο υλικό, την ίδια περίπου εποχή;', en: 'The riddle says it is a lacy iron tower. Which famous tower in Paris is made of the same material, from around the same time?' },
        options: {
          el: ['Το Μπιγκ Μπεν', 'Ο Πύργος του Άιφελ', 'Ο Πύργος της Πίζας', 'Ο Πύργος του Λονδίνου'],
          en: ['Big Ben', 'The Eiffel Tower', 'The Leaning Tower of Pisa', 'The Tower of London'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Πύργος του Άιφελ στο Παρίσι χτίστηκε το 1889 από σίδερο. Ο μηχανικός του ασανσέρ της Λισαβόνας αγαπούσε αυτό το στιλ και έφτιαξε κι αυτός έναν πύργο από σιδερένια «δαντέλα».',
          en: 'The Eiffel Tower in Paris was built of iron in 1889. The engineer of the Lisbon lift loved that style and built his own tower of iron “lace”.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε καλά τον πύργο. Τι χρώμα είναι βαμμένο το σίδερό του;', en: 'Look closely at the tower. What colour is its iron painted?' },
        options: {
          el: ['Πράσινο', 'Χρυσό', 'Γκρι', 'Κόκκινο'],
          en: ['Green', 'Gold', 'Grey', 'Red'],
        },
        correct: 2,
        explanation: {
          el: 'Ο πύργος είναι γκρι, το χρώμα του σίδερου. Κοίτα τα μυτερά στολίδια του: μοιάζουν με παλιά γοτθική εκκλησία, αλλά είναι όλα από μέταλλο!',
          en: 'The tower is grey, the colour of iron. Look at its pointed decorations: they look like an old Gothic church, but they are all made of metal!',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από εκατό χρόνια, το 1902, οι κάτοικοι της Λισαβόνας απέκτησαν ένα καινούργιο παιχνίδι: ένα σιδερένιο ασανσέρ! Η Λισαβόνα είναι χτισμένη πάνω σε λόφους, και για να ανέβεις από τα μαγαζιά της Baixa στη γειτονιά Chiado (Σιάντο) έπρεπε να σκαρφαλώσεις πάρα πολλά σκαλιά. Ένας μηχανικός, ο Raoul Mesnier du Ponsard, που θαύμαζε το σιδερένιο στιλ του Gustave Eiffel, σχεδίασε έναν πύργο 45 μέτρων με δύο ξύλινες καμπίνες. Στην αρχή τις ανέβαζε μια ατμομηχανή· λίγα χρόνια αργότερα έγιναν ηλεκτρικές. Από την κορυφή, μια γέφυρα οδηγεί στο Chiado και η θέα φτάνει ως το κάστρο, πάνω από τις κόκκινες στέγες.',
        en: 'More than a hundred years ago, in 1902, the people of Lisbon got a new toy: an iron lift! Lisbon is built on hills, and climbing from the shops of the Baixa up to the Chiado quarter meant many, many steps. An engineer called Raoul Mesnier du Ponsard, who admired the iron style of Gustave Eiffel, designed a tower 45 metres tall with two wooden cabins. At first a steam engine pulled them up; a few years later they became electric. From the top, a walkway leads to the Chiado and the view stretches over the red roofs all the way to the castle.',
      },
      didYouKnow: {
        el: 'Είναι το μόνο κατακόρυφο ασανσέρ δρόμου της Λισαβόνας που λειτουργεί ακόμη, και επίσημα ανήκει στα μέσα μαζικής μεταφοράς της πόλης, στην ίδια εταιρεία με τα τραμ. Οι δύο καμπίνες διατηρούν ακόμη το αρχικό ξύλινο εσωτερικό τους.',
        en: 'It is the only vertical street lift in Lisbon still in service, and it is officially part of the city\'s public transport, run by the same company as the trams. The two cabins still have their original wood-panelled interiors.',
      },
      quiz: [
        {
          q: { el: 'Πότε άνοιξε το ασανσέρ;', en: 'When did the lift open?' },
          options: {
            el: ['Το 1902', 'Το 2002', 'Το 1502', 'Το 1755'],
            en: ['In 1902', 'In 2002', 'In 1502', 'In 1755'],
          },
          correct: 0,
          explanation: {
            el: 'Το ασανσέρ άνοιξε το 1902, πριν από περισσότερα από εκατό χρόνια, και δουλεύει ακόμη κάθε μέρα.',
            en: 'The lift opened in 1902, more than a hundred years ago, and it still works every day.',
          },
        },
        {
          q: { el: 'Με τι λειτουργούσε το ασανσέρ στην αρχή;', en: 'What did the lift first run on?' },
          options: {
            el: ['Με άλογα', 'Με ατμό', 'Με αέρα', 'Με πετάλια'],
            en: ['Horses', 'Steam', 'Wind', 'Pedals'],
          },
          correct: 1,
          explanation: {
            el: 'Στην αρχή μια ατμομηχανή ανέβαζε τις καμπίνες. Μετά από λίγα χρόνια το ασανσέρ έγινε ηλεκτρικό.',
            en: 'At first a steam engine pulled the cabins up. After a few years the lift became electric.',
          },
        },
        {
          q: { el: 'Σε ποια γειτονιά φτάνεις όταν ανέβεις στην κορυφή;', en: 'Which quarter do you reach at the top?' },
          options: {
            el: ['Στην Belém', 'Στην Alfama', 'Στο Chiado', 'Στο Rossio'],
            en: ['Belém', 'Alfama', 'Chiado', 'Rossio'],
          },
          correct: 2,
          explanation: {
            el: 'Το ασανσέρ ενώνει την κάτω πόλη, την Baixa, με τη γειτονιά Chiado που είναι ψηλά στον λόφο.',
            en: 'The lift joins the low town, the Baixa, with the Chiado quarter high up on the hill.',
          },
        },
      ],
    },

    // ── 4. Rossio ─────────────────────────────────────────────────────────────
    {
      id: 'rossio',
      name: { el: 'Rossio', en: 'Rossio' },
      emoji: '⛲',
      lat: 38.7139,
      lng: -9.1394,
      radiusM: 40,
      riddle: {
        el: 'Σε αυτή την πλατεία το πάτωμα κυματίζει σαν θάλασσα, δύο σιντριβάνια παίζουν με το νερό και ένας βασιλιάς στέκεται ψηλά σε μια κολόνα κοιτάζοντας ένα θέατρο.',
        en: 'In this square the floor rolls like the sea, two fountains play with water and a king stands high on a column, looking at a theatre.',
      },
      parentHint: {
        el: 'Είναι η πλατεία Rossio (Ροσίου), που επίσημα λέγεται Praça D. Pedro IV. Από το ασανσέρ περπατήστε 3 λεπτά βόρεια, από τη Rua do Ouro ή τη Rua Augusta.',
        en: 'It is Rossio, officially the Praça D. Pedro IV. From the lift walk 3 minutes north along Rua do Ouro or Rua Augusta.',
      },
      unlockQuestion: {
        question: { el: 'Τα κύματα στο πάτωμα είναι φτιαγμένα από μικρές πέτρες. Ποια δύο χρώματα έχουν τα περίφημα πορτογαλικά πεζοδρόμια;', en: 'The waves on the floor are made of small stones. Which two colours do the famous Portuguese pavements have?' },
        options: {
          el: ['Κόκκινο και κίτρινο', 'Μαύρο και άσπρο', 'Μπλε και πράσινο', 'Χρυσό και ασημί'],
          en: ['Red and yellow', 'Black and white', 'Blue and green', 'Gold and silver'],
        },
        correct: 1,
        explanation: {
          el: 'Η calçada portuguesa (καλσάδα, το πορτογαλικό πεζοδρόμιο) φτιάχνεται από μικρές μαύρες και άσπρες πέτρες, μία μία με το χέρι. Θα τη δεις σε όλη τη Λισαβόνα.',
          en: 'The calçada portuguesa, the Portuguese pavement, is made of small black and white stones, laid one by one by hand. You will see it all over Lisbon.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε το πάτωμα της πλατείας. Τι σχήμα κάνουν οι μαύρες και οι άσπρες πέτρες;', en: 'Look at the floor of the square. What shape do the black and white stones make?' },
        options: {
          el: ['Λουλούδια', 'Τετράγωνα', 'Κύματα', 'Αστέρια'],
          en: ['Flowers', 'Squares', 'Waves', 'Stars'],
        },
        correct: 2,
        explanation: {
          el: 'Τα κύματα αυτά λέγονται «Mar Largo», δηλαδή «Ανοιχτή Θάλασσα». Θυμίζουν τον ωκεανό που διέσχισαν οι Πορτογάλοι ναυτικοί. Αν τα κοιτάξεις πολλή ώρα, ίσως νιώσεις ότι κουνιέσαι!',
          en: 'These waves are called “Mar Largo”, the “Wide Sea”. They remind everyone of the ocean the Portuguese sailors crossed. Stare at them long enough and you might feel the floor moving!',
        },
      },
      story: {
        el: 'Το Rossio είναι εδώ και εκατοντάδες χρόνια το σημείο συνάντησης της Λισαβόνας: εδώ γίνονταν παζάρια, γιορτές, ακόμη και ταυρομαχίες. Κοίτα κάτω: οι μαύρες και οι άσπρες πέτρες κάνουν κύματα, σαν τη θάλασσα που διέσχισαν οι Πορτογάλοι ναυτικοί. Το σχέδιο αυτό στρώθηκε το 1848 και από τότε τέτοια πεζοδρόμια απλώθηκαν σε όλη την πόλη. Τα δύο μπρούντζινα σιντριβάνια ήρθαν από τη Γαλλία, και η ψηλή κολόνα κρατάει τον βασιλιά Pedro IV (Πέδρο τον Δ΄), που έγινε και ο πρώτος αυτοκράτορας της Βραζιλίας. Στην πάνω μεριά της πλατείας στέκεται το Εθνικό Θέατρο, χτισμένο εκεί όπου παλιά υπήρχε ένα παλάτι. Το επίσημο όνομα της πλατείας είναι Praça D. Pedro IV, αλλά κανείς δεν τη λέει έτσι!',
        en: 'Rossio has been Lisbon\'s meeting place for hundreds of years: markets, festivals and even bullfights happened here. Look down: the black and white stones make waves, like the sea that Portuguese sailors crossed. This pattern was laid in 1848, and since then pavements like it have spread all over the city. The two bronze fountains came from France, and the tall column carries King Pedro IV, who also became the first emperor of Brazil. At the top of the square stands the National Theatre, built where an old palace once was. The official name of the square is Praça D. Pedro IV, but nobody calls it that!',
      },
      didYouKnow: {
        el: 'Ένας θρύλος λέει ότι το άγαλμα στην κολόνα είχε φτιαχτεί για τον αυτοκράτορα Μαξιμιλιανό του Μεξικού και πουλήθηκε στη Λισαβόνα όταν εκείνος έχασε τον θρόνο, επειδή οι δύο άντρες έμοιαζαν. Οι ιστορικοί αμφιβάλλουν, αλλά οι ντόπιοι λατρεύουν την ιστορία.',
        en: 'Legend has it that the statue on the column was made for Emperor Maximilian of Mexico and sold to Lisbon when he lost his throne, because the two men looked alike. Historians doubt it, but locals love the story.',
      },
      quiz: [
        {
          q: { el: 'Με τι μοιάζουν οι πέτρες στο πάτωμα της πλατείας;', en: 'What do the stones on the floor of the square look like?' },
          options: {
            el: ['Με κύματα της θάλασσας', 'Με βουνά', 'Με δέντρα', 'Με ψάρια'],
            en: ['Waves of the sea', 'Mountains', 'Trees', 'Fish'],
          },
          correct: 0,
          explanation: {
            el: 'Οι μαύρες και οι άσπρες πέτρες σχηματίζουν κύματα, για να θυμίζουν τη θάλασσα των Πορτογάλων ναυτικών.',
            en: 'The black and white stones form waves, to remind everyone of the sea of the Portuguese sailors.',
          },
        },
        {
          q: { el: 'Από πού ήρθαν τα δύο σιντριβάνια;', en: 'Where did the two fountains come from?' },
          options: {
            el: ['Από την Ισπανία', 'Από τη Βραζιλία', 'Από τη Γαλλία', 'Από την Ιταλία'],
            en: ['Spain', 'Brazil', 'France', 'Italy'],
          },
          correct: 2,
          explanation: {
            el: 'Τα δύο μπρούντζινα σιντριβάνια φτιάχτηκαν στη Γαλλία και ταξίδεψαν ως τη Λισαβόνα.',
            en: 'The two bronze fountains were made in France and travelled all the way to Lisbon.',
          },
        },
        {
          q: { el: 'Ο βασιλιάς Pedro IV έγινε και αυτοκράτορας μιας άλλης χώρας. Ποιας;', en: 'King Pedro IV also became emperor of another country. Which one?' },
          options: {
            el: ['Της Κίνας', 'Της Ινδίας', 'Της Ιαπωνίας', 'Της Βραζιλίας'],
            en: ['China', 'India', 'Japan', 'Brazil'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Pedro IV ήταν ο πρώτος αυτοκράτορας της Βραζιλίας, μιας τεράστιας χώρας που τότε ανήκε στην Πορτογαλία. Εκεί τον λένε Pedro I.',
            en: 'Pedro IV was the first emperor of Brazil, a huge country that then belonged to Portugal. There they call him Pedro I.',
          },
        },
      ],
    },

    // ── 5. Sé de Lisboa ────────────────────────────────────────────────────────
    {
      id: 'se-cathedral',
      name: { el: 'Sé de Lisboa', en: 'Sé de Lisboa' },
      emoji: '⛪',
      lat: 38.7098,
      lng: -9.1327,
      radiusM: 60,
      riddle: {
        el: 'Η πιο παλιά εκκλησία της πόλης μοιάζει περισσότερο με φρούριο: χοντροί τοίχοι και πύργοι φτιαγμένοι για να κρατούν τους εχθρούς έξω. Ένα μικρό κίτρινο τραμ περνάει ξυστά από την πόρτα της.',
        en: 'The oldest church in town looks more like a fortress, with thick walls and towers built to keep enemies out. A little yellow tram squeezes right past its door.',
      },
      parentHint: {
        el: 'Είναι η Sé (Σε), ο καθεδρικός ναός της Λισαβόνας. Από το Rossio περπατήστε 12 λεπτά πίσω μέσα από την Baixa και ανηφορίστε τη Rua de Santo António da Sé, ή πάρτε το τραμ 28 από την Praça da Figueira για λίγες στάσεις.',
        en: 'It is the Sé, Lisbon Cathedral. From Rossio walk 12 minutes back through the Baixa and up Rua de Santo António da Sé, or take tram 28 from Praça da Figueira for a few stops.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ένα διάσημο κίτρινο τραμ περνάει από μπροστά. Ποιον αριθμό έχει η πιο διάσημη παλιά γραμμή τραμ της Λισαβόνας;', en: 'The riddle says a famous yellow tram passes by. Which number is Lisbon\'s most famous old tram line?' },
        options: {
          el: ['Το 1', 'Το 15', 'Το 28', 'Το 100'],
          en: ['Number 1', 'Number 15', 'Number 28', 'Number 100'],
        },
        correct: 2,
        explanation: {
          el: 'Το τραμ 28 είναι το πιο γνωστό τραμ της Λισαβόνας. Τα μικρά κίτρινα βαγόνια του είναι σχεδόν εκατό ετών και στριφογυρίζουν στους στενούς δρόμους της Alfama.',
          en: 'Tram 28 is Lisbon\'s most famous tram. Its little yellow cars are almost a hundred years old and they wind through the narrow streets of Alfama.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τους πύργους με τις καμπάνες στην πρόσοψη της εκκλησίας. Πόσοι είναι;', en: 'Count the bell towers on the front of the church. How many are there?' },
        options: {
          el: ['Τρεις', 'Δύο', 'Τέσσερις', 'Ένας'],
          en: ['Three', 'Two', 'Four', 'One'],
        },
        correct: 1,
        explanation: {
          el: 'Δύο γεροί πύργοι φυλάνε την είσοδο. Ανάμεσά τους, πάνω από την πόρτα, βρίσκεται το στρογγυλό παράθυρο που λέγεται ρόδακας, γιατί μοιάζει με λουλούδι.',
          en: 'Two sturdy towers guard the entrance. Between them, above the door, is the round window called a rose window, because it looks like a flower.',
        },
      },
      story: {
        el: 'Αυτή είναι η πιο παλιά εκκλησία της Λισαβόνας. Άρχισε να χτίζεται το 1147. Εκείνη τη χρονιά ο Afonso Henriques (Αφόνσο Ενρίκες), ο πρώτος βασιλιάς της Πορτογαλίας, πήρε την πόλη από τους Μαυριτανούς, που την κυβερνούσαν περίπου 400 χρόνια, και ήθελε αμέσως μια μεγάλη εκκλησία. Οι καιροί ήταν ανήσυχοι, γι\' αυτό οι χτίστες την έκαναν γερή σαν κάστρο, με χοντρούς τοίχους και δύο πύργους απ\' όπου οι φρουροί κοιτούσαν μακριά. Ψάξε το στρογγυλό παράθυρο πάνω από την πόρτα: το φως του ήλιου περνάει από μέσα και ζωγραφίζει χρώματα στο εσωτερικό. Η εκκλησία άντεξε πολλούς σεισμούς, ακόμη και τον μεγάλο του 1755, όταν ένα κομμάτι της έπεσε αλλά ξαναχτίστηκε. Γεροί τοίχοι και υπομονή: έτσι στέκεται σχεδόν 900 χρόνια.',
        en: 'This is the oldest church in Lisbon, started in 1147. That year Afonso Henriques, the first king of Portugal, took the city from the Moors, who had ruled it for about 400 years, and he wanted a great church straight away. Times were uncertain, so the builders made it strong like a castle, with thick walls and two towers where guards could keep watch. Look for the round rose window above the door: sunlight passes through it and paints colours inside. The cathedral has survived several earthquakes, including the big one of 1755, when part of it fell but was rebuilt. Strong walls and patience: that is how it has stood for almost 900 years.',
      },
      didYouKnow: {
        el: 'Κάτω από το μοναστηριακό περιστύλιο οι αρχαιολόγοι έχουν φέρει στο φως στρώματα της ρωμαϊκής, της μαυριτανικής και της μεσαιωνικής Λισαβόνας: ένας ρωμαϊκός δρόμος βρίσκεται λίγα μέτρα κάτω από την εκκλησία. Σύμφωνα με την παράδοση, εδώ βαφτίστηκε ο Άγιος Αντώνιος, ο αγαπημένος άγιος της πόλης.',
        en: 'Beneath the cloister, archaeologists have uncovered layers of Roman, Moorish and medieval Lisbon: a Roman street lies just a few metres below the church. According to tradition, Saint Anthony, the city\'s beloved patron, was baptised here.',
      },
      quiz: [
        {
          q: { el: 'Πότε άρχισε να χτίζεται η εκκλησία;', en: 'When was the church started?' },
          options: {
            el: ['Το 1147', 'Το 1755', 'Το 1902', 'Το 1500'],
            en: ['In 1147', 'In 1755', 'In 1902', 'In 1500'],
          },
          correct: 0,
          explanation: {
            el: 'Το χτίσιμο άρχισε το 1147, την ίδια χρονιά που η Λισαβόνα έγινε πορτογαλική πόλη.',
            en: 'Building started in 1147, the same year Lisbon became a Portuguese city.',
          },
        },
        {
          q: { el: 'Ποιος πήρε τη Λισαβόνα το 1147;', en: 'Who took Lisbon in 1147?' },
          options: {
            el: ['Ο Vasco da Gama', 'Ο Μαρκήσιος του Pombal', 'Ο Afonso Henriques', 'Ο βασιλιάς José I'],
            en: ['Vasco da Gama', 'The Marquis of Pombal', 'Afonso Henriques', 'King José I'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Afonso Henriques, ο πρώτος βασιλιάς της Πορτογαλίας, πήρε την πόλη από τους Μαυριτανούς το 1147.',
            en: 'Afonso Henriques, the first king of Portugal, took the city from the Moors in 1147.',
          },
        },
        {
          q: { el: 'Γιατί η εκκλησία μοιάζει με κάστρο;', en: 'Why does the church look like a castle?' },
          options: {
            el: ['Γιατί έμενε μέσα ο βασιλιάς', 'Γιατί οι καιροί ήταν ανήσυχοι και έπρεπε να είναι γερή', 'Γιατί ήταν φυλακή', 'Γιατί τελείωσαν τα χρώματα'],
            en: ['Because the king lived inside', 'Because times were uncertain and it had to be strong', 'Because it was a prison', 'Because the builders ran out of paint'],
          },
          correct: 1,
          explanation: {
            el: 'Η πόλη μόλις είχε αλλάξει χέρια και κανείς δεν ήξερε τι θα γίνει. Έτσι η εκκλησία χτίστηκε γερή σαν φρούριο, με χοντρούς τοίχους.',
            en: 'The city had just changed hands and nobody knew what would happen next. So the church was built strong like a fortress, with thick walls.',
          },
        },
      ],
    },

    // ── 6. Castelo de São Jorge ────────────────────────────────────────────────
    {
      id: 'castelo-de-sao-jorge',
      name: { el: 'Castelo de São Jorge', en: 'Castelo de São Jorge' },
      emoji: '🏰',
      lat: 38.7139,
      lng: -9.1335,
      radiusM: 80,
      riddle: {
        el: 'Στον πιο ψηλό λόφο, παλιά τείχη με πολλούς πύργους φυλάνε την πόλη. Μέσα στους κήπους, πουλιά με μακριές, πολύχρωμες ουρές περπατούν καμαρωτά σαν να είναι αυτά οι βασιλιάδες.',
        en: 'On the highest hill, old walls with many towers guard the city. Inside, birds with long, colourful tails strut around the gardens as if they were the kings.',
      },
      parentHint: {
        el: 'Είναι το Castelo de São Jorge (το Κάστρο του Αγίου Γεωργίου). Από τη Sé ανηφορίστε 15 λεπτά μέσα από την Alfama ακολουθώντας τις πινακίδες «Castelo», ή πάρτε το μικρό λεωφορείο 737 από την Praça da Figueira. Εισιτήρια στην πύλη.',
        en: 'It is the Castelo de São Jorge. From the Sé climb 15 minutes uphill through Alfama following the “Castelo” signs, or take minibus 737 from Praça da Figueira. Tickets at the gate.',
      },
      unlockQuestion: {
        question: { el: 'Το κάστρο λέγεται São Jorge, δηλαδή Άγιος Γεώργιος. Για τι είναι διάσημος αυτός ο άγιος στις ιστορίες;', en: 'The castle is called São Jorge, which means Saint George. What is this saint famous for in the stories?' },
        options: {
          el: ['Έχτισε ένα καράβι', 'Νίκησε έναν δράκο', 'Ανακάλυψε την Ινδία', 'Ζωγράφισε τη θάλασσα'],
          en: ['He built a ship', 'He defeated a dragon', 'He discovered India', 'He painted the sea'],
        },
        correct: 1,
        explanation: {
          el: 'Στον θρύλο, ο Άγιος Γεώργιος είναι ο ιππότης που νίκησε έναν δράκο. Το κάστρο πήρε το όνομά του τον 14ο αιώνα, όταν οι Πορτογάλοι έγιναν φίλοι με τους Άγγλους, που τον αγαπούσαν πολύ.',
          en: 'In the legend, Saint George is the knight who defeated a dragon. The castle was named after him in the 14th century, when the Portuguese became friends with the English, who loved this saint.',
        },
      },
      onSite: {
        question: { el: 'Ανέβα στα τείχη και κοίταξε προς το ποτάμι. Τι χρώμα έχει η μεγάλη γέφυρα που βλέπεις μακριά;', en: 'Climb the walls and look towards the river. What colour is the big bridge you can see in the distance?' },
        options: {
          el: ['Άσπρη', 'Κόκκινη', 'Μπλε', 'Πράσινη'],
          en: ['White', 'Red', 'Blue', 'Green'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι η Ponte 25 de Abril, η «Γέφυρα της 25ης Απριλίου», που άνοιξε το 1966. Είναι βαμμένη κόκκινη, όπως η διάσημη γέφυρα Golden Gate στο Σαν Φρανσίσκο, και οι δύο μοιάζουν πολύ!',
          en: 'It is the Ponte 25 de Abril, the “25th of April Bridge”, opened in 1966. It is painted red, just like the famous Golden Gate Bridge in San Francisco, and the two look very alike!',
        },
      },
      story: {
        el: 'Οι Μαυριτανοί έχτισαν αυτά τα τείχη πριν από περίπου χίλια χρόνια, στον λόφο απ\' όπου έβλεπαν κάθε καράβι που ανέβαινε το ποτάμι. Το 1147 ο Afonso Henriques και οι στρατιώτες του πολιόρκησαν το κάστρο για μήνες, μέχρι που η πόλη παραδόθηκε και η Πορτογαλία απέκτησε καινούργια πρωτεύουσα. Αργότερα έμεναν εδώ οι βασιλιάδες, και το κάστρο πήρε το όνομα του Αγίου Γεωργίου, του ιππότη με τον δράκο, που ήταν ο αγαπημένος άγιος των Άγγλων φίλων της Πορτογαλίας. Περπάτησε πάνω στα τείχη και μέτρησε τους έντεκα πύργους! Σήμερα στους κήπους ζουν παγώνια, που ανοίγουν τις ουρές τους μπροστά στους επισκέπτες. Από εδώ ψηλά βλέπεις όλη την πόλη, το ποτάμι και τη μεγάλη κόκκινη γέφυρα: η καλύτερη βίγλα της Λισαβόνας.',
        en: 'The Moors built these walls about a thousand years ago, on the hill from which they could watch every ship coming up the river. In 1147 Afonso Henriques and his soldiers besieged the castle for months, until the city gave in and Portugal had a new capital. Later, kings lived here, and the castle was named after Saint George, the knight with the dragon, who was a favourite saint of the English friends of Portugal. Walk along the walls and count the eleven towers! Today peacocks live in the gardens, spreading their tails for the visitors. From up here you can see the whole city, the river and the great red bridge: the best lookout in Lisbon.',
      },
      didYouKnow: {
        el: 'Το κάστρο που βλέπετε είναι εν μέρει ανακατασκευή του 20ού αιώνα: μετά από αιώνες ως στρατώνας, αναστηλώθηκε σε μεγάλο βαθμό τη δεκαετία του 1940. Οι αρχαιολόγοι βρήκαν εδώ ευρήματα της Εποχής του Σιδήρου, ηλικίας περίπου 2.700 ετών, απόδειξη ότι ο λόφος κατοικούνταν πολύ πριν από τους Μαυριτανούς.',
        en: 'The castle you see is partly a 20th-century reconstruction: after centuries as a barracks, it was heavily restored in the 1940s. Archaeologists have found Iron Age remains here, about 2,700 years old, proof that people lived on this hill long before the Moors.',
      },
      quiz: [
        {
          q: { el: 'Ποιοι έχτισαν τα τείχη του κάστρου πριν από περίπου χίλια χρόνια;', en: 'Who built the castle walls about a thousand years ago?' },
          options: {
            el: ['Οι Ρωμαίοι', 'Οι Μαυριτανοί', 'Οι Έλληνες', 'Οι Βίκινγκ'],
            en: ['The Romans', 'The Moors', 'The Greeks', 'The Vikings'],
          },
          correct: 1,
          explanation: {
            el: 'Οι Μαυριτανοί, που κυβερνούσαν τη Λισαβόνα για αιώνες, έχτισαν τα τείχη στον ψηλότερο λόφο για να βλέπουν το ποτάμι.',
            en: 'The Moors, who ruled Lisbon for centuries, built the walls on the highest hill so they could watch the river.',
          },
        },
        {
          q: { el: 'Τι έγινε στο κάστρο το 1147;', en: 'What happened at the castle in 1147?' },
          options: {
            el: ['Κάηκε ολόκληρο', 'Χτίστηκε ένα ασανσέρ', 'Ο Afonso Henriques το πήρε μετά από μεγάλη πολιορκία', 'Έφτασαν τα πρώτα παγώνια'],
            en: ['It burned down', 'A lift was built', 'Afonso Henriques took it after a long siege', 'The first peacocks arrived'],
          },
          correct: 2,
          explanation: {
            el: 'Μετά από πολιορκία που κράτησε μήνες, ο Afonso Henriques πήρε το κάστρο και η Λισαβόνα έγινε η πρωτεύουσα της Πορτογαλίας.',
            en: 'After a siege that lasted for months, Afonso Henriques took the castle and Lisbon became the capital of Portugal.',
          },
        },
        {
          q: { el: 'Πόσους πύργους έχει το κάστρο;', en: 'How many towers does the castle have?' },
          options: {
            el: ['Έντεκα', 'Τρεις', 'Επτά', 'Είκοσι'],
            en: ['Eleven', 'Three', 'Seven', 'Twenty'],
          },
          correct: 0,
          explanation: {
            el: 'Το κάστρο έχει έντεκα πύργους πάνω στα τείχη του. Μπορείς να τους μετρήσεις περπατώντας γύρω γύρω!',
            en: 'The castle has eleven towers along its walls. You can count them by walking all the way round!',
          },
        },
      ],
    },

    // ── 7. Miradouro de Santa Luzia ────────────────────────────────────────────
    {
      id: 'miradouro-de-santa-luzia',
      name: { el: 'Miradouro de Santa Luzia', en: 'Miradouro de Santa Luzia' },
      emoji: '🖼️',
      lat: 38.7118,
      lng: -9.1303,
      radiusM: 60,
      riddle: {
        el: 'Μια μικρή βεράντα με λουλούδια που κρέμονται από τους τοίχους σού δείχνει μια θάλασσα από κόκκινες στέγες που κατεβαίνουν ως το ποτάμι. Στους τοίχους της, ζωγραφισμένα πλακάκια διηγούνται πώς ήταν η πόλη παλιά.',
        en: 'A little terrace with flowers hanging over its walls shows you a sea of red roofs tumbling down to the river. On its walls, painted tiles tell how the city looked long ago.',
      },
      parentHint: {
        el: 'Είναι το Miradouro de Santa Luzia (το Μπαλκόνι της Σάντα Λουζία) στην Alfama. Από το κάστρο κατηφορίστε 10 λεπτά από τη Rua de São Tomé ως το Largo de Santa Luzia, δίπλα στη μικρή εκκλησία και στη στάση του τραμ 28.',
        en: 'It is the Miradouro de Santa Luzia, in Alfama. From the castle walk 10 minutes downhill along Rua de São Tomé to Largo de Santa Luzia, next to the small church and the tram 28 stop.',
      },
      unlockQuestion: {
        question: { el: 'Ζωγραφισμένα πλακάκια σαν αυτά στολίζουν σπίτια σε όλη την Πορτογαλία. Πώς λέγονται στα πορτογαλικά;', en: 'Painted tiles like these decorate houses all over Portugal. What are they called in Portuguese?' },
        options: {
          el: ['Azulejos', 'Castanhas', 'Sardinhas', 'Pastéis'],
          en: ['Azulejos', 'Castanhas', 'Sardinhas', 'Pastéis'],
        },
        correct: 0,
        explanation: {
          el: 'Τα azulejos (αζουλέζους) είναι τα ζωγραφισμένα κεραμικά πλακάκια της Πορτογαλίας. Οι άλλες λέξεις σημαίνουν κάστανα, σαρδέλες και γλυκά, όλα νόστιμα, αλλά όχι για τους τοίχους!',
          en: 'Azulejos are the painted ceramic tiles of Portugal. The other words mean chestnuts, sardines and pastries, all delicious, but not for walls!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τα μεγάλα πάνελ με τα πλακάκια στον τοίχο. Τι χρώματα έχουν;', en: 'Look at the big tile panels on the wall. What colours are they?' },
        options: {
          el: ['Πράσινο και κίτρινο', 'Κόκκινο και χρυσό', 'Μαύρο και άσπρο', 'Μπλε και άσπρο'],
          en: ['Green and yellow', 'Red and gold', 'Black and white', 'Blue and white'],
        },
        correct: 3,
        explanation: {
          el: 'Μπλε και άσπρο είναι τα κλασικά χρώματα των azulejos. Το ένα πάνελ δείχνει την πλατεία με το παλάτι πριν από τον σεισμό και το άλλο τους στρατιώτες που σκαρφαλώνουν στα τείχη του κάστρου το 1147.',
          en: 'Blue and white are the classic colours of azulejos. One panel shows the palace square before the earthquake, and the other shows the soldiers climbing the castle walls in 1147.',
        },
      },
      story: {
        el: 'Καλώς ήρθες στην Alfama (Αλφάμα), την πιο παλιά γειτονιά της Λισαβόνας! Το όνομά της έρχεται από μια αραβική λέξη για τις θερμές πηγές, γιατί οι Μαυριτανοί που ζούσαν εδώ βρήκαν ζεστό νερό στο χώμα. Τα σοκάκια της είναι τόσο στενά και στριφογυριστά που δεν χωράνε αυτοκίνητα, και οι γείτονες μιλάνε από παράθυρο σε παράθυρο. Όταν ο μεγάλος σεισμός του 1755 ισοπέδωσε το κέντρο, η Alfama, χτισμένη πάνω σε σκληρό βράχο, έμεινε σχεδόν όρθια. Γι\' αυτό τα σπίτια της είναι πολύ πιο παλιά από την υπόλοιπη πόλη. Στους τοίχους αυτής της βεράντας, μπλε και άσπρα azulejos δείχνουν την πλατεία του παλατιού πριν από τον σεισμό και τους στρατιώτες που ανεβαίνουν στα τείχη του κάστρου το 1147. Ψάξε τις μικρές λεπτομέρειες: καράβια, σημαίες, σκάλες!',
        en: 'Welcome to Alfama, the oldest neighbourhood of Lisbon! Its name comes from an Arabic word for hot springs, because the Moors who lived here found warm water in the ground. The streets are so narrow and twisty that cars cannot pass, and neighbours chat from window to window. When the great earthquake of 1755 flattened the centre, Alfama, built on hard rock, stayed mostly standing. That is why its houses are much older than the rest of the city. On the walls of this terrace, blue and white azulejos show the palace square before the earthquake and the soldiers climbing the castle walls in 1147. Look for the little details: ships, flags, ladders!',
      },
      didYouKnow: {
        el: 'Η Alfama είναι η πατρίδα του fado, του μελαγχολικού τραγουδιού της Λισαβόνας, που η UNESCO συμπεριέλαβε στην άυλη πολιτιστική κληρονομιά της ανθρωπότητας το 2011. Η μικρή εκκλησία της Santa Luzia δίπλα στη βεράντα ανήκει εδώ και αιώνες στο Τάγμα της Μάλτας.',
        en: 'Alfama is the home of fado, Lisbon\'s melancholy song, which UNESCO added to its list of intangible cultural heritage in 2011. The little church of Santa Luzia next to the terrace has belonged to the Order of Malta for centuries.',
      },
      quiz: [
        {
          q: { el: 'Από πού έρχεται το όνομα Alfama;', en: 'Where does the name Alfama come from?' },
          options: {
            el: ['Από έναν Πορτογάλο βασιλιά', 'Από μια αραβική λέξη για τις θερμές πηγές', 'Από ένα είδος ψαριού', 'Από ένα διάσημο καράβι'],
            en: ['From a Portuguese king', 'From an Arabic word for hot springs', 'From a kind of fish', 'From a famous ship'],
          },
          correct: 1,
          explanation: {
            el: 'Οι Μαυριτανοί βρήκαν εδώ ζεστό νερό στο χώμα και ονόμασαν τη γειτονιά με την αραβική λέξη για τις θερμές πηγές.',
            en: 'The Moors found warm water in the ground here and named the neighbourhood with the Arabic word for hot springs.',
          },
        },
        {
          q: { el: 'Γιατί η Alfama άντεξε στον σεισμό του 1755;', en: 'Why did Alfama survive the earthquake of 1755?' },
          options: {
            el: ['Γιατί είχε τα πιο γερά τείχη', 'Γιατί ήταν άδεια', 'Γιατί είναι χτισμένη πάνω σε σκληρό βράχο', 'Γιατί είναι μακριά από την πόλη'],
            en: ['Because it had the strongest walls', 'Because it was empty', 'Because it is built on hard rock', 'Because it is far from the city'],
          },
          correct: 2,
          explanation: {
            el: 'Η Alfama στέκεται πάνω σε σκληρό βράχο, που δεν κουνήθηκε τόσο πολύ. Έτσι τα παλιά της σπίτια έμειναν όρθια.',
            en: 'Alfama stands on hard rock, which did not shake as much. So its old houses stayed standing.',
          },
        },
        {
          q: { el: 'Τι δείχνουν τα πάνελ με τα πλακάκια στη βεράντα;', en: 'What do the tile panels on the terrace show?' },
          options: {
            el: ['Τη σημερινή Λισαβόνα με αυτοκίνητα', 'Έναν αγώνα ποδοσφαίρου', 'Το φεγγάρι και τα αστέρια', 'Την παλιά πλατεία του παλατιού και τους στρατιώτες στα τείχη του κάστρου'],
            en: ['Modern Lisbon with cars', 'A football match', 'The moon and the stars', 'The old palace square and the soldiers at the castle walls'],
          },
          correct: 3,
          explanation: {
            el: 'Τα δύο πάνελ είναι σαν παράθυρα στο παρελθόν: η πλατεία με το παλάτι πριν από τον σεισμό και η μέρα που πάρθηκε το κάστρο, το 1147.',
            en: 'The two panels are like windows into the past: the palace square before the earthquake and the day the castle was taken, in 1147.',
          },
        },
      ],
    },

    // ── 8. Torre de Belém ──────────────────────────────────────────────────────
    {
      id: 'torre-de-belem',
      name: { el: 'Torre de Belém', en: 'Torre de Belém' },
      emoji: '⚓',
      lat: 38.6916,
      lng: -9.2160,
      radiusM: 60,
      riddle: {
        el: 'Ένας πέτρινος πύργος με τα πόδια του μέσα στο ποτάμι παρακολουθούσε κάποτε κάθε καράβι που έμπαινε ή έβγαινε από την πόλη. Οι τοίχοι του είναι τυλιγμένοι με σχοινιά... από πέτρα!',
        en: 'A stone tower with its feet in the river once watched every ship sailing in or out of the city. Its walls are wrapped in ropes... made of stone!',
      },
      parentHint: {
        el: 'Είναι ο Torre de Belém (ο Πύργος του Μπελέμ). Πάρτε το τραμ 15 με κατεύθυνση Algés από την Praça da Figueira ή την Praça do Comércio (περίπου 30 λεπτά), κατεβείτε στη στάση Largo da Princesa και περάστε τη σιδηροδρομική γραμμή προς το ποτάμι.',
        en: 'It is the Torre de Belém. Take tram 15 towards Algés from Praça da Figueira or Praça do Comércio (about 30 minutes), get off at the Largo da Princesa stop and cross the railway to the riverside.',
      },
      unlockQuestion: {
        question: { el: 'Ποια ήταν η δουλειά αυτού του πύργου, που χτίστηκε πριν από περισσότερα από 500 χρόνια;', en: 'What was the job of this tower, built more than 500 years ago?' },
        options: {
          el: ['Σχολείο για ναυτικούς', 'Φούρνος για ψωμί', 'Να φυλάει την είσοδο του ποταμού και το λιμάνι', 'Φάρος για τους ψαράδες'],
          en: ['A school for sailors', 'A bakery for bread', 'To guard the entrance of the river and the harbour', 'A lighthouse for fishermen'],
        },
        correct: 2,
        explanation: {
          el: 'Ο πύργος ήταν φρούριο: από εδώ οι φρουροί έβλεπαν ποιος ερχόταν από τη θάλασσα και προστάτευαν το λιμάνι της Λισαβόνας.',
          en: 'The tower was a fortress: from here the guards could see who was coming from the sea and protect the harbour of Lisbon.',
        },
      },
      onSite: {
        question: { el: 'Πήγαινε στην πλευρά του πύργου που κοιτάζει προς τη θάλασσα και κοίταξε κάτω από τον μικρό στρογγυλό πυργίσκο. Ποιο ζώο είναι σκαλισμένο στην πέτρα;', en: 'Walk round to the side of the tower facing the sea and look just under the little round turret. Which animal is carved in the stone?' },
        options: {
          el: ['Ένα λιοντάρι', 'Ένας ρινόκερος', 'Ένας δράκος', 'Ένας ελέφαντας'],
          en: ['A lion', 'A rhinoceros', 'A dragon', 'An elephant'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ένας ρινόκερος! Το 1515 έφτασε στη Λισαβόνα ένας αληθινός ρινόκερος, δώρο από την Ινδία στον βασιλιά Manuel I. Οι χτίστες τον είδαν με τα μάτια τους και τον σκάλισαν στον πύργο.',
          en: 'It is a rhinoceros! In 1515 a real rhinoceros arrived in Lisbon, a gift from India to King Manuel I. The stone carvers saw it with their own eyes and carved it on the tower.',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 500 χρόνια, τα πορτογαλικά καράβια ξεκινούσαν από αυτό το ποτάμι για την Ινδία, την Αφρική και τη Βραζιλία, και ο βασιλιάς Manuel I (Μανουέλ ο Α΄) ήθελε έναν γερό φύλακα στην πόρτα του λιμανιού. Έτσι χτίστηκε αυτός ο πύργος, που τελείωσε το 1519, με κανόνια στο κάτω μέρος και φρουρούς στην κορυφή. Το στιλ του λέγεται μανουελίνο, από το όνομα του βασιλιά: κοίτα τα σχοινιά, τους κόμπους και τις μικρές σφαίρες σκαλισμένα στην πέτρα, όλα θυμίζουν καράβια και θάλασσα. Παλιά ο πύργος στεκόταν σε ένα νησάκι· με τα χρόνια η όχθη πλησίασε και τώρα ακουμπάει στη στεριά. Για τους ναυτικούς που έφευγαν ήταν το τελευταίο κομμάτι πατρίδας, και για όσους γύριζαν, το πρώτο.',
        en: 'More than 500 years ago, Portuguese ships sailed from this river to India, Africa and Brazil, and King Manuel I wanted a strong guard at the door of the harbour. So this tower was built, finished in 1519, with cannons at the bottom and watchmen at the top. Its style is called Manueline, after the king: look at the ropes, knots and little spheres carved in the stone, all reminders of ships and the sea. The tower once stood on a small island; over the years the river bank crept closer, and now it touches the shore. For sailors leaving Lisbon it was the last piece of home, and for those returning, the first.',
      },
      didYouKnow: {
        el: 'Ο πέτρινος ρινόκερος του πύργου θεωρείται η πρώτη απεικόνιση ρινόκερου στην ευρωπαϊκή τέχνη μετά την αρχαιότητα. Το αληθινό ζώο, που έφτασε από την Ινδία το 1515, στάλθηκε αργότερα δώρο στον Πάπα και χάθηκε σε ναυάγιο στα ανοιχτά της Ιταλίας· η περίφημη ξυλογραφία του Dürer έγινε από περιγραφή, χωρίς να το δει ποτέ.',
        en: 'The tower\'s stone rhinoceros is thought to be the first depiction of a rhinoceros in European art since ancient times. The real animal, which arrived from India in 1515, was later sent as a gift to the Pope and was lost in a shipwreck off Italy; Dürer\'s famous woodcut was made from a description, without ever seeing it.',
      },
      quiz: [
        {
          q: { el: 'Ποιος βασιλιάς διέταξε να χτιστεί ο πύργος;', en: 'Which king ordered the tower to be built?' },
          options: {
            el: ['Ο José I', 'Ο Afonso Henriques', 'Ο Manuel I', 'Ο Pedro IV'],
            en: ['José I', 'Afonso Henriques', 'Manuel I', 'Pedro IV'],
          },
          correct: 2,
          explanation: {
            el: 'Ο βασιλιάς Manuel I ήθελε να φυλάει το λιμάνι απ\' όπου ξεκινούσαν τα καράβια του για μακρινά ταξίδια. Το στιλ του πύργου πήρε το όνομά του: μανουελίνο.',
            en: 'King Manuel I wanted to guard the harbour from which his ships left on long voyages. The style of the tower was named after him: Manueline.',
          },
        },
        {
          q: { el: 'Τι είναι σκαλισμένο στους τοίχους του πύργου;', en: 'What is carved on the walls of the tower?' },
          options: {
            el: ['Ζωγραφισμένα λουλούδια', 'Πέτρινα σχοινιά και κόμποι', 'Χρυσά αστέρια', 'Καθρέφτες'],
            en: ['Painted flowers', 'Stone ropes and knots', 'Golden stars', 'Mirrors'],
          },
          correct: 1,
          explanation: {
            el: 'Οι τεχνίτες σκάλισαν σχοινιά, κόμπους και σφαίρες στην πέτρα, για να θυμίζουν τα καράβια. Έτσι είναι το μανουελίνο στιλ.',
            en: 'The craftsmen carved ropes, knots and spheres in the stone, to remind everyone of ships. That is the Manueline style.',
          },
        },
        {
          q: { el: 'Πού στεκόταν ο πύργος όταν χτίστηκε;', en: 'Where did the tower stand when it was built?' },
          options: {
            el: ['Σε ένα νησάκι μέσα στο ποτάμι', 'Στην κορυφή του λόφου με το κάστρο', 'Στη μέση της πλατείας Rossio', 'Μέσα σε ένα δάσος'],
            en: ['On a small island in the river', 'On top of the castle hill', 'In the middle of Rossio', 'Inside a forest'],
          },
          correct: 0,
          explanation: {
            el: 'Ο πύργος χτίστηκε σε ένα νησάκι κοντά στην όχθη. Με τον καιρό η όχθη πλησίασε και σήμερα ο πύργος ακουμπάει στη στεριά.',
            en: 'The tower was built on a small island near the bank. Over time the bank crept closer, and today the tower touches the shore.',
          },
        },
      ],
    },

    // ── 9. Padrão dos Descobrimentos ───────────────────────────────────────────
    {
      id: 'padrao-dos-descobrimentos',
      name: { el: 'Padrão dos Descobrimentos', en: 'Padrão dos Descobrimentos' },
      emoji: '⛵',
      lat: 38.6936,
      lng: -9.2057,
      radiusM: 40,
      riddle: {
        el: 'Ένα γιγάντιο πέτρινο καράβι μοιάζει να σαλπάρει από την ακτή, αλλά δεν κουνιέται ποτέ. Στην πλώρη του ένας πρίγκιπας κρατάει ένα μικρό πλοίο, και πίσω του μια σειρά από γενναίους ταξιδιώτες περιμένει να ξεκινήσει.',
        en: 'A giant stone ship seems to sail out from the shore, but it never moves. At its bow a prince holds a tiny ship, and behind him a line of brave travellers waits to set sail.',
      },
      parentHint: {
        el: 'Είναι το Padrão dos Descobrimentos (το Μνημείο των Ανακαλύψεων). Από τον πύργο περπατήστε 12 λεπτά ανατολικά, κατά μήκος του ποταμού.',
        en: 'It is the Padrão dos Descobrimentos, the Monument to the Discoveries. From the tower walk 12 minutes east along the riverside promenade.',
      },
      unlockQuestion: {
        question: { el: 'Ποιος είναι ο πρίγκιπας στην πλώρη, που έστελνε τα πορτογαλικά καράβια σε άγνωστες θάλασσες;', en: 'Who is the prince at the bow, the one who sent the Portuguese ships into unknown seas?' },
        options: {
          el: ['Ο Ερρίκος ο Θαλασσοπόρος', 'Ο Afonso Henriques', 'Ο Pedro IV', 'Ο Manuel I'],
          en: ['Henry the Navigator', 'Afonso Henriques', 'Pedro IV', 'Manuel I'],
        },
        correct: 0,
        explanation: {
          el: 'Ο πρίγκιπας Ερρίκος (Infante D. Henrique) έζησε πριν από περίπου 600 χρόνια. Ο ίδιος δεν ταξίδεψε μακριά, αλλά μάζεψε χαρτογράφους και ναυτικούς και έστελνε καράβι μετά το καράβι να εξερευνήσουν τις ακτές της Αφρικής.',
          en: 'Prince Henry (Infante D. Henrique) lived about 600 years ago. He did not sail far himself, but he gathered mapmakers and sailors and sent ship after ship to explore the coasts of Africa.',
        },
      },
      onSite: {
        question: { el: 'Διάλεξε τη μία πλευρά του μνημείου και μέτρησε τις φιγούρες πίσω από τον πρίγκιπα. Πόσες είναι;', en: 'Pick one side of the monument and count the figures behind the prince. How many are there?' },
        options: {
          el: ['Οκτώ', 'Δώδεκα', 'Δεκαέξι', 'Είκοσι'],
          en: ['Eight', 'Twelve', 'Sixteen', 'Twenty'],
        },
        correct: 2,
        explanation: {
          el: 'Δεκαέξι σε κάθε πλευρά, και μπροστά ο πρίγκιπας: 33 άνθρωποι όλοι μαζί. Είναι ναυτικοί, χαρτογράφοι, μοναχοί, ένας ποιητής, ένας ζωγράφος, ακόμη και η μητέρα του πρίγκιπα, η βασίλισσα Philippa.',
          en: 'Sixteen on each side, plus the prince at the front: 33 people altogether. They are sailors, mapmakers, monks, a poet, a painter and even the prince\'s mother, Queen Philippa.',
        },
      },
      story: {
        el: 'Φαντάσου μια εποχή που κανείς στην Ευρώπη δεν ήξερε τι υπάρχει πέρα από τον ωκεανό. Ένας Πορτογάλος πρίγκιπας, ο Ερρίκος ο Θαλασσοπόρος, αποφάσισε να το μάθει. Μάζεψε χαρτογράφους, ναυπηγούς και ναυτικούς και έστελνε καράβι μετά το καράβι κατά μήκος της Αφρικής, και καθένα γύριζε με καινούργιες γνώσεις. Αυτό το μνημείο, σε σχήμα πλώρης καραβέλας, χτίστηκε το 1960, πεντακόσια χρόνια μετά τον θάνατο του Ερρίκου. Εκείνος στέκεται μπροστά με ένα μικρό πλοίο στα χέρια· πίσω του ακολουθούν ο Vasco da Gama, που έφτασε στην Ινδία, ο Μαγγελάνος, που η αποστολή του έκανε τον γύρο του κόσμου, ο Pedro Álvares Cabral, που έφτασε στη Βραζιλία, και πολλοί ακόμη. Περιέργεια και θάρρος: έτσι ξεκίνησαν τα μεγάλα ταξίδια.',
        en: 'Imagine a time when nobody in Europe knew what lay beyond the ocean. A Portuguese prince, Henry the Navigator, decided to find out. He gathered mapmakers, shipbuilders and sailors and sent ship after ship along the coast of Africa, and each one came back with new knowledge. This monument, shaped like the bow of a caravel, was built in 1960, five hundred years after Henry died. He stands at the front with a small ship in his hands; behind him follow Vasco da Gama, who reached India, Magellan, whose expedition sailed around the globe, Pedro Álvares Cabral, who landed in Brazil, and many more. Curiosity and courage: that is how the great journeys began.',
      },
      didYouKnow: {
        el: 'Το τεράστιο ανεμολόγιο με τον παγκόσμιο χάρτη στο πλακόστρωτο μπροστά από το μνημείο ήταν δώρο της Νότιας Αφρικής το 1960· ο χάρτης σημειώνει τις διαδρομές και τις χρονολογίες των πορτογαλικών ταξιδιών. Το μνημείο πρωτοστήθηκε το 1940 ως προσωρινή κατασκευή για μια μεγάλη έκθεση και ξαναχτίστηκε από μπετόν και πέτρα είκοσι χρόνια αργότερα.',
        en: 'The huge compass rose with the world map on the pavement in front of the monument was a gift from South Africa in 1960; the map marks the routes and dates of the Portuguese voyages. The monument was first put up in 1940 as a temporary structure for a great exhibition and rebuilt in concrete and stone twenty years later.',
      },
      quiz: [
        {
          q: { el: 'Τι σχήμα έχει το μνημείο;', en: 'What shape is the monument?' },
          options: {
            el: ['Φάρου', 'Πλώρης καραβιού', 'Πύργου κάστρου', 'Φάλαινας'],
            en: ['A lighthouse', 'The bow of a ship', 'A castle tower', 'A whale'],
          },
          correct: 1,
          explanation: {
            el: 'Το μνημείο μοιάζει με την πλώρη μιας καραβέλας, του καραβιού με το οποίο οι Πορτογάλοι εξερεύνησαν τις θάλασσες.',
            en: 'The monument looks like the bow of a caravel, the ship the Portuguese used to explore the seas.',
          },
        },
        {
          q: { el: 'Πότε χτίστηκε το μνημείο που βλέπεις σήμερα;', en: 'When was the monument you see today built?' },
          options: {
            el: ['Το 1960', 'Το 1755', 'Το 1147', 'Το 2020'],
            en: ['In 1960', 'In 1755', 'In 1147', 'In 2020'],
          },
          correct: 0,
          explanation: {
            el: 'Χτίστηκε το 1960, ακριβώς πεντακόσια χρόνια μετά τον θάνατο του Ερρίκου του Θαλασσοπόρου.',
            en: 'It was built in 1960, exactly five hundred years after the death of Henry the Navigator.',
          },
        },
        {
          q: { el: 'Ποιος εξερευνητής έφτασε στην Ινδία;', en: 'Which explorer reached India?' },
          options: {
            el: ['Ο Μαγγελάνος', 'Ο Pedro Álvares Cabral', 'Ο Ερρίκος ο Θαλασσοπόρος', 'Ο Vasco da Gama'],
            en: ['Magellan', 'Pedro Álvares Cabral', 'Henry the Navigator', 'Vasco da Gama'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Vasco da Gama έκανε τον γύρο της Αφρικής και έφτασε στην Ινδία το 1498. Ο Cabral έφτασε στη Βραζιλία και η αποστολή του Μαγγελάνου έκανε τον γύρο του κόσμου.',
            en: 'Vasco da Gama sailed around Africa and reached India in 1498. Cabral landed in Brazil, and Magellan\'s expedition sailed around the world.',
          },
        },
      ],
    },

    // ── 10. Mosteiro dos Jerónimos ─────────────────────────────────────────────
    {
      id: 'mosteiro-dos-jeronimos',
      name: { el: 'Mosteiro dos Jerónimos', en: 'Mosteiro dos Jerónimos' },
      emoji: '🍮',
      lat: 38.6979,
      lng: -9.2064,
      radiusM: 40,
      riddle: {
        el: 'Ένα κτίριο τόσο μακρύ που δεν βλέπεις και τις δύο άκρες του μαζί, με πέτρα σκαλισμένη σαν δαντέλα, που πληρώθηκε... με πιπέρι! Μέσα κοιμάται ένας θαλασσοπόρος που βρήκε τον θαλάσσιο δρόμο για την Ινδία, και δίπλα ένας φούρνος ψήνει μικρές τάρτες με κρέμα εδώ και σχεδόν 200 χρόνια.',
        en: 'A building so long that you cannot see both ends at once, with stone carved like lace and paid for... with pepper! Inside sleeps a sailor who found the sea road to India, and next door a bakery has been baking little custard tarts for almost 200 years.',
      },
      parentHint: {
        el: 'Είναι το Mosteiro dos Jerónimos (το Μοναστήρι των Ιερωνυμιτών). Από το μνημείο περάστε την υπόγεια διάβαση κάτω από τον δρόμο και τη σιδηροδρομική γραμμή, διασχίστε τους κήπους της Praça do Império και φτάνετε στην είσοδο (περίπου 8 λεπτά). Ο φούρνος Pastéis de Belém είναι 200 μέτρα δεξιά.',
        en: 'It is the Mosteiro dos Jerónimos. From the monument take the underpass beneath the road and the railway, cross the gardens of Praça do Império and you reach the entrance (about 8 minutes). The Pastéis de Belém bakery is 200 metres to the right.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το κτίριο πληρώθηκε με ένα μπαχαρικό. Ποιο;', en: 'The riddle says the building was paid for with a spice. Which one?' },
        options: {
          el: ['Με ζάχαρη', 'Με αλάτι', 'Με πιπέρι', 'Με βανίλια'],
          en: ['Sugar', 'Salt', 'Pepper', 'Vanilla'],
        },
        correct: 2,
        explanation: {
          el: 'Τα καράβια έφερναν πιπέρι και άλλα μπαχαρικά από την Ινδία, και ο βασιλιάς κρατούσε ένα μέρος από τα κέρδη για το χτίσιμο. Οι άνθρωποι το έλεγαν «τα λεφτά του πιπεριού».',
          en: 'The ships brought pepper and other spices from India, and the king kept a share of the profits for the building. People called it “the pepper money”.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε κατά μήκος της πρόσοψης του μοναστηριού, από τη μία άκρη ως την άλλη. Πόσο μακριά είναι;', en: 'Walk along the front of the monastery from one end to the other. How long is it?' },
        options: {
          el: ['Όσο ένα λεωφορείο', 'Όσο ένα γήπεδο ποδοσφαίρου', 'Όσο τρία γήπεδα ποδοσφαίρου στη σειρά', 'Όσο ένα ποδήλατο'],
          en: ['As long as a bus', 'As long as a football pitch', 'As long as three football pitches in a row', 'As long as a bicycle'],
        },
        correct: 2,
        explanation: {
          el: 'Η πρόσοψη έχει μήκος περίπου 300 μέτρα, όσο τρία γήπεδα ποδοσφαίρου! Καθώς περπατάς, κοίτα τη μεγάλη σκαλιστή πόρτα στη μέση, γεμάτη αγάλματα, φύλλα και μικρά ζώα.',
          en: 'The front is about 300 metres long, as long as three football pitches! As you walk, look at the great carved doorway in the middle, full of statues, leaves and little animals.',
        },
      },
      story: {
        el: 'Όταν τα καράβια του Vasco da Gama γύρισαν από την Ινδία το 1499 φορτωμένα πιπέρι και κανέλα, ο βασιλιάς Manuel I έγινε πλούσιος: όλη η Ευρώπη ήθελε μπαχαρικά. Ο βασιλιάς αποφάσισε να ξοδέψει ένα μέρος από «τα λεφτά του πιπεριού» για ένα μοναστήρι τόσο μεγαλόπρεπο που θα το θυμούνται όλοι. Οι χτίστες δούλεψαν περίπου εκατό χρόνια, σκαλίζοντας στην πέτρα σχοινιά, κοχύλια, κοράλλια και θαλάσσια τέρατα, στο μανουελίνο στιλ. Ο ίδιος ο Vasco da Gama είναι θαμμένος μέσα, κοντά στην είσοδο, σε έναν τάφο που τον κρατούν πέτρινα λιοντάρια. Λένε ότι πριν φύγει για την Ινδία, πέρασε τη νύχτα προσευχόμενος σε ένα μικρό εκκλησάκι ακριβώς σε αυτό το σημείο. Το μοναστήρι άντεξε τον σεισμό του 1755 σχεδόν ανέγγιχτο. Και οι μοναχοί είχαν ένα μυστικό: μια συνταγή για ταρτάκια με κρέμα, που ο φούρνος δίπλα ψήνει ακόμη σήμερα.',
        en: 'When Vasco da Gama\'s ships came back from India in 1499 loaded with pepper and cinnamon, King Manuel I became rich: all of Europe wanted spices. The king decided to spend part of that “pepper money” on a monastery so grand that everyone would remember it. Builders worked for about a hundred years, carving the stone with ropes, seashells, corals and sea monsters in the Manueline style. Vasco da Gama himself is buried inside, near the entrance, in a tomb held up by stone lions. The story goes that before leaving for India, he spent the night praying in a little chapel on this very spot. The monastery survived the earthquake of 1755 almost untouched. And the monks had a secret: a recipe for custard tarts, which the bakery next door still bakes today.',
      },
      didYouKnow: {
        el: 'Τα «λεφτά του πιπεριού» ήταν αληθινός φόρος: το ένα εικοστό των κερδών από το εμπόριο μπαχαρικών πήγαινε στο χτίσιμο του μοναστηριού. Η συνταγή των μοναχών για τα pastéis de nata παραμένει μυστική: ο φούρνος δίπλα, που λειτουργεί από το 1837, λέει ότι τη γνωρίζουν ελάχιστοι άνθρωποι, οι οποίοι δουλεύουν σε ένα κλειδωμένο δωμάτιο, την «Oficina do Segredo».',
        en: 'The “pepper money” was a real tax: one twentieth of the profits from the spice trade went to building the monastery. The monks\' recipe for pastéis de nata is still a secret: the bakery next door, open since 1837, says only a handful of people know it, and they work in a locked room called the “Oficina do Segredo”.',
      },
      quiz: [
        {
          q: { el: 'Με τι πληρώθηκε το χτίσιμο του μοναστηριού;', en: 'What paid for the building of the monastery?' },
          options: {
            el: ['Με χρυσό από ένα ορυχείο', 'Με λεφτά από το εμπόριο μπαχαρικών', 'Με εισιτήρια επισκεπτών', 'Με ένα λαχείο'],
            en: ['Gold from a mine', 'Money from the spice trade', 'Visitor tickets', 'A lottery'],
          },
          correct: 1,
          explanation: {
            el: 'Ο βασιλιάς κρατούσε ένα μέρος από τα κέρδη του πιπεριού και των άλλων μπαχαρικών που έφερναν τα καράβια από την Ινδία.',
            en: 'The king kept a share of the profits from the pepper and other spices that the ships brought from India.',
          },
        },
        {
          q: { el: 'Ποιος είναι θαμμένος μέσα στο μοναστήρι, κοντά στην είσοδο;', en: 'Who is buried inside the monastery, near the entrance?' },
          options: {
            el: ['Ο Ερρίκος ο Θαλασσοπόρος', 'Ο Μαγγελάνος', 'Ο Μαρκήσιος του Pombal', 'Ο Vasco da Gama'],
            en: ['Henry the Navigator', 'Magellan', 'The Marquis of Pombal', 'Vasco da Gama'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Vasco da Gama, ο θαλασσοπόρος που βρήκε τον δρόμο για την Ινδία, αναπαύεται σε έναν τάφο που τον κρατούν πέτρινα λιοντάρια.',
            en: 'Vasco da Gama, the sailor who found the way to India, rests in a tomb held up by stone lions.',
          },
        },
        {
          q: { el: 'Τι έφτιαχναν οι μοναχοί με τη μυστική τους συνταγή;', en: 'What did the monks make with their secret recipe?' },
          options: {
            el: ['Παγωτό', 'Ψωμί', 'Σοκολατόπιτα', 'Ταρτάκια με κρέμα'],
            en: ['Ice cream', 'Bread', 'Chocolate cake', 'Custard tarts'],
          },
          correct: 3,
          explanation: {
            el: 'Οι μοναχοί έφτιαχναν ταρτάκια με κρέμα, τα pastéis de nata. Ο φούρνος δίπλα στο μοναστήρι τα ψήνει με την ίδια μυστική συνταγή από το 1837.',
            en: 'The monks made custard tarts, the pastéis de nata. The bakery next to the monastery has baked them with the same secret recipe since 1837.',
          },
        },
      ],
    },
  ],
};
