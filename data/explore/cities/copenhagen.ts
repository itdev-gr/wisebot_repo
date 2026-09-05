/**
 * WiseBot Explorer · Κοπεγχάγη / Copenhagen
 * =========================================
 * Ten spots in one long day on foot: Rådhuspladsen and Tivoli, up the Strøget to the
 * Round Tower, Kongens Nytorv and Nyhavn, the royal quarter, Kastellet and the mermaid
 * (spots 1–9), then a metro or harbour-bus hop to Christianshavn for the spiral spire
 * (spot 10). Original text only, verified facts, language for a child of 7–12 in Greek
 * and English. Danish names stay Danish in both languages, glossed in Greek once.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'copenhagen',
  name: { el: 'Κοπεγχάγη', en: 'Copenhagen' },
  country: { el: 'Δανία', en: 'Denmark' },
  countryCode: 'DK',
  emoji: '🧜',
  center: { lat: 55.6810, lng: 12.5830 },
  zoom: 14,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στην Κοπεγχάγη, την πόλη των παραμυθιών! Εδώ έζησε ο Χανς Κρίστιαν Άντερσεν και έγραψε για το Ασχημόπαπο και τη Μικρή Γοργόνα. Παντού τρέχουν ποδήλατα, ένας βασιλιάς έχτισε πύργους με χρυσές κορυφές, και πριν από χίλια χρόνια από αυτά τα νερά ξεκινούσαν τα καράβια των Βίκινγκ. Λένε ότι οι Δανοί είναι από τους πιο χαρούμενους ανθρώπους του κόσμου. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία, και στο τέλος μια γοργόνα σας περιμένει δίπλα στο νερό!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Copenhagen, the city of fairy tales! Hans Christian Andersen lived here and wrote about the Ugly Duckling and the Little Mermaid. Bicycles whizz everywhere, a king built towers with golden tops, and a thousand years ago Viking ships set sail from these waters. People say the Danes are among the happiest people in the world. Solve my riddles, find the ten secret spots, and at the end a mermaid is waiting for you by the water!',
  },
  route: [
    'city-hall-square',
    'tivoli-gate',
    'stroget-storks',
    'round-tower',
    'kongens-nytorv',
    'nyhavn',
    'amalienborg',
    'kastellet',
    'little-mermaid',
    'our-saviour-spire',
  ],
  spots: [
    // ── 1. Rådhuspladsen ──────────────────────────────────────────────────────
    {
      id: 'city-hall-square',
      name: { el: 'Rådhuspladsen', en: 'Rådhuspladsen' },
      emoji: '🏛️',
      lat: 55.6759,
      lng: 12.5697,
      radiusM: 40,
      riddle: {
        el: 'Σε μια μεγάλη πλατεία, δύο μπρούντζινοι άντρες ψηλά σε μια κολόνα φυσούν τεράστιες καμπυλωτές τρομπέτες, ενώ ένας κύριος με ψηλό καπέλο κάθεται και κοιτάζει προς τα λούνα παρκ. Πίσω τους, ένα κόκκινο κτίριο με έναν πανύψηλο πύργο μετράει την ώρα της πόλης.',
        en: 'In a big square, two bronze men high on a column blow enormous curved trumpets, while a gentleman in a tall hat sits and gazes towards a funfair. Behind them, a red brick building with a very tall tower keeps time for the whole city.',
      },
      parentHint: {
        el: 'Είναι η Rådhuspladsen (η Πλατεία του Δημαρχείου), μπροστά από το Δημαρχείο της Κοπεγχάγης. Ξεκινήστε από εδώ: ο σταθμός του μετρό Rådhuspladsen (γραμμή M3) βγάζει πάνω στην πλατεία, και ο κεντρικός σιδηροδρομικός σταθμός απέχει 5 λεπτά με τα πόδια.',
        en: 'It is Rådhuspladsen, the City Hall Square, in front of Copenhagen City Hall. Start here: the Rådhuspladsen metro station (line M3) opens onto the square, and the central railway station is a 5-minute walk away.',
      },
      unlockQuestion: {
        question: { el: 'Ο κύριος με το ψηλό καπέλο στον γρίφο είναι ο πιο διάσημος συγγραφέας της Δανίας. Ποιο από αυτά τα παραμύθια έγραψε;', en: 'The gentleman in the tall hat in the riddle is the most famous writer of Denmark. Which of these fairy tales did he write?' },
        options: {
          el: ['Την Κοκκινοσκουφίτσα', 'Το Ασχημόπαπο', 'Τον Πινόκιο', 'Τον Πίτερ Παν'],
          en: ['Little Red Riding Hood', 'The Ugly Duckling', 'Pinocchio', 'Peter Pan'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Χανς Κρίστιαν Άντερσεν έγραψε το Ασχημόπαπο, τη Μικρή Γοργόνα, τη Βασιλοπούλα και το Μπιζέλι και πάνω από 150 άλλα παραμύθια. Η Κοκκινοσκουφίτσα είναι παλιό γαλλικό και γερμανικό παραμύθι, ο Πινόκιο ιταλικός και ο Πίτερ Παν σκωτσέζικος.',
          en: 'Hans Christian Andersen wrote The Ugly Duckling, The Little Mermaid, The Princess and the Pea and more than 150 other tales. Little Red Riding Hood is an old French and German tale, Pinocchio is Italian and Peter Pan is Scottish.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στη μεγάλη πόρτα του Δημαρχείου και κοίτα ψηλά. Ποιον βλέπεις να λάμπει χρυσός πάνω από την είσοδο;', en: 'Stand in front of the big door of the City Hall and look up. Who do you see shining in gold above the entrance?' },
        options: {
          el: ['Μια γοργόνα', 'Έναν βασιλιά με σπαθί', 'Έναν επίσκοπο με ραβδί', 'Μια κουκουβάγια'],
          en: ['A mermaid', 'A king with a sword', 'A bishop with a staff', 'An owl'],
        },
        correct: 2,
        explanation: {
          el: 'Ο χρυσός άντρας είναι ο επίσκοπος Absalon (Άμπσαλον). Το 1167 έχτισε ένα μικρό κάστρο σε ένα νησάκι εδώ κοντά, και από εκείνο το κάστρο γεννήθηκε η Κοπεγχάγη. Γι\' αυτό τον λένε ιδρυτή της πόλης!',
          en: 'The golden man is Bishop Absalon. In 1167 he built a small castle on an islet nearby, and from that castle Copenhagen grew. That is why he is called the founder of the city!',
        },
      },
      story: {
        el: 'Το Δημαρχείο της Κοπεγχάγης άνοιξε το 1905, και ο πύργος του φτάνει τα 105 μέτρα περίπου: για χρόνια ήταν το πιο ψηλό κτίριο της πόλης. Οι δύο άντρες πάνω στην κολόνα φυσούν λούρους, μπρούντζινες τρομπέτες που έφτιαχναν οι άνθρωποι εδώ πριν από 3.000 χρόνια, στην Εποχή του Χαλκού. Πολλές τέτοιες βρέθηκαν θαμμένες μέσα στους βάλτους της Δανίας, και μερικές παίζουν ακόμη! Στη γωνία της πλατείας κάθεται το άγαλμα του Χανς Κρίστιαν Άντερσεν, του συγγραφέα των παραμυθιών. Κοιτάζει προς το λούνα παρκ Tivoli, που το αγαπούσε πολύ. Ψάξε και την «Κοπέλα του Καιρού», μια χρυσή φιγούρα ψηλά σε ένα κτίριο, που βγαίνει με ποδήλατο όταν έχει λιακάδα και με ομπρέλα όταν βρέχει.',
        en: 'Copenhagen City Hall opened in 1905, and its tower rises about 105 metres: for many years it was the tallest building in the city. The two men on the column are blowing lurs, bronze horns that people here made 3,000 years ago, in the Bronze Age. Many were found buried in the bogs of Denmark, and some of them can still be played! At the corner of the square sits the statue of Hans Christian Andersen, the writer of fairy tales. He is looking towards the Tivoli amusement park, which he loved. Look also for the Weather Girl, a golden figure high on a building, who comes out on a bicycle when it is sunny and with an umbrella when it rains.',
      },
      didYouKnow: {
        el: 'Μέσα στο Δημαρχείο βρίσκεται το Παγκόσμιο Ρολόι του Jens Olsen, ένα αστρονομικό ρολόι με χιλιάδες εξαρτήματα που ολοκληρώθηκε το 1955 και δείχνει, ανάμεσα σε άλλα, τις θέσεις των πλανητών· ο πιο αργός μηχανισμός του χρειάζεται περίπου 25.000 χρόνια για να κάνει μία πλήρη περιστροφή. Ρωτήστε στην είσοδο του Δημαρχείου για την επίσκεψη στην αίθουσα του ρολογιού.',
        en: 'Inside the City Hall stands Jens Olsen\'s World Clock, an astronomical clock with thousands of parts, completed in 1955, that shows among other things the positions of the planets; its slowest gear takes about 25,000 years to complete one turn. Ask at the City Hall entrance about visiting the clock room.',
      },
      quiz: [
        {
          q: { el: 'Πότε άνοιξε το Δημαρχείο της Κοπεγχάγης;', en: 'When did Copenhagen City Hall open?' },
          options: {
            el: ['Το 1905', 'Το 1167', 'Το 1843', 'Το 2005'],
            en: ['In 1905', 'In 1167', 'In 1843', 'In 2005'],
          },
          correct: 0,
          explanation: {
            el: 'Το Δημαρχείο άνοιξε το 1905, πριν από περισσότερα από εκατό χρόνια, με τον ψηλό πύργο των 105 περίπου μέτρων.',
            en: 'The City Hall opened in 1905, more than a hundred years ago, with its tall tower of about 105 metres.',
          },
        },
        {
          q: { el: 'Τι είναι οι λούροι που φυσούν οι άντρες στην κολόνα;', en: 'What are the lurs that the men on the column are blowing?' },
          options: {
            el: ['Φλογέρες από ξύλο', 'Κοχύλια της θάλασσας', 'Μπρούντζινες τρομπέτες από την Εποχή του Χαλκού', 'Σφυρίχτρες ποδοσφαίρου'],
            en: ['Wooden flutes', 'Seashells', 'Bronze horns from the Bronze Age', 'Football whistles'],
          },
          correct: 2,
          explanation: {
            el: 'Οι λούροι είναι μπρούντζινες τρομπέτες ηλικίας 3.000 ετών. Βρέθηκαν θαμμένες στους βάλτους της Δανίας και μερικές παίζουν ακόμη.',
            en: 'Lurs are bronze horns about 3,000 years old. They were found buried in the bogs of Denmark, and some can still be played.',
          },
        },
        {
          q: { el: 'Προς τα πού κοιτάζει το άγαλμα του Άντερσεν;', en: 'Where is the statue of Andersen looking?' },
          options: {
            el: ['Προς τη θάλασσα', 'Προς το λούνα παρκ Tivoli', 'Προς τον σιδηροδρομικό σταθμό', 'Προς τον ουρανό'],
            en: ['Towards the sea', 'Towards the Tivoli amusement park', 'Towards the railway station', 'Towards the sky'],
          },
          correct: 1,
          explanation: {
            el: 'Ο συγγραφέας κάθεται και κοιτάζει προς το Tivoli, το λούνα παρκ που αγαπούσε και επισκεπτόταν συχνά.',
            en: 'The writer sits looking towards Tivoli, the amusement park he loved and often visited.',
          },
        },
      ],
    },

    // ── 2. Tivoli Gardens ─────────────────────────────────────────────────────
    {
      id: 'tivoli-gate',
      name: { el: 'Tivoli', en: 'Tivoli Gardens' },
      emoji: '🎡',
      lat: 55.6739,
      lng: 12.5680,
      radiusM: 40,
      riddle: {
        el: 'Πίσω από μια μεγάλη πύλη κρύβεται ένας κήπος όπου τα τρενάκια ουρλιάζουν, οι κούνιες πετούν και τη νύχτα ανάβουν χιλιάδες φαναράκια. Ένας διάσημος κύριος που έφτιαχνε κινούμενα σχέδια ήρθε από την Αμερική, το είδε και πήρε ιδέες για το δικό του πάρκο!',
        en: 'Behind a big gate hides a garden where little trains scream, swings fly and thousands of lanterns glow at night. A famous gentleman who made cartoons came all the way from America, saw it and took ideas home for a park of his own!',
      },
      parentHint: {
        el: 'Είναι η κεντρική είσοδος του Tivoli (Τίβολι), του παλιού λούνα παρκ, στην οδό Vesterbrogade. Από την Rådhuspladsen περπατήστε 2 λεπτά νοτιοδυτικά, με το Δημαρχείο στα αριστερά σας. Ο γρίφος λύνεται απ\' έξω· η είσοδος στο πάρκο κοστίζει.',
        en: 'It is the main entrance of Tivoli, the old amusement park, on Vesterbrogade. From Rådhuspladsen walk 2 minutes south-west, keeping the City Hall on your left. The spot works from outside the gate; going in costs a ticket.',
      },
      unlockQuestion: {
        question: { el: 'Ο «κύριος που έφτιαχνε κινούμενα σχέδια» και επισκέφθηκε το πάρκο και κράτησε σημειώσεις έφτιαξε μετά το δικό του πάρκο. Ποιος ήταν;', en: 'The “gentleman who made cartoons” who visited the park and took notes then built a park of his own. Who was he?' },
        options: {
          el: ['Ο Χανς Κρίστιαν Άντερσεν', 'Ο Τσάρος Πέτρος ο Μέγας', 'Ο Άλμπερτ Αϊνστάιν', 'Ο Γουόλτ Ντίσνεϊ'],
          en: ['Hans Christian Andersen', 'Tsar Peter the Great', 'Albert Einstein', 'Walt Disney'],
        },
        correct: 3,
        explanation: {
          el: 'Ο Γουόλτ Ντίσνεϊ, που έφτιαχνε κινούμενα σχέδια, επισκέφθηκε το Tivoli τη δεκαετία του 1950. Του άρεσαν τόσο η καθαριότητα, τα λουλούδια και η μουσική, που πήρε ιδέες για το δικό του πάρκο, που άνοιξε το 1955.',
          en: 'Walt Disney, who made cartoons, visited Tivoli in the 1950s. He loved how clean it was, with flowers and music everywhere, and took ideas home for a park of his own, which opened in 1955.',
        },
      },
      onSite: {
        question: { el: 'Στάσου απέναντι από την κεντρική είσοδο και κοίτα την καλά. Τι σχήμα έχει το άνοιγμα της πύλης και τι είναι γραμμένο πάνω της;', en: 'Stand across from the main entrance and look at it carefully. What shape is the opening of the gate, and what is written on it?' },
        options: {
          el: ['Ένα τετράγωνο άνοιγμα με το όνομα του βασιλιά', 'Μια μεγάλη στρογγυλή αψίδα με το όνομα του πάρκου με μεγάλα γράμματα', 'Μια μυτερή πύλη κάστρου χωρίς γράμματα', 'Τρεις μικρές πόρτες με αριθμούς'],
          en: ['A square opening with the name of the king', 'A big rounded arch with the name of the park in large letters', 'A pointed castle gate with no letters', 'Three small doors with numbers'],
        },
        correct: 1,
        explanation: {
          el: 'Η κεντρική πύλη είναι μια μεγάλη στρογγυλή αψίδα με το όνομα TIVOLI γραμμένο ψηλά, που τη νύχτα φωτίζεται. Χτίστηκε γύρω στο 1890, σχεδόν πενήντα χρόνια μετά το άνοιγμα του πάρκου.',
          en: 'The main gate is a big rounded arch with the name TIVOLI written high up, lit at night. It was built around 1890, almost fifty years after the park opened.',
        },
      },
      story: {
        el: 'Το Tivoli άνοιξε το καλοκαίρι του 1843, και είναι από τα πιο παλιά λούνα παρκ του κόσμου που λειτουργούν ακόμη. Το πιο παλιό απ\' όλα βρίσκεται λίγο έξω από την Κοπεγχάγη! Ο ιδρυτής του, ο Georg Carstensen (Γκέοργκ Κάρστενσεν), έπεισε τον βασιλιά λέγοντάς του ότι όταν ο κόσμος διασκεδάζει, δεν σκέφτεται τις έγνοιες του. Μέσα υπάρχει ένα ξύλινο τρενάκι του 1914 που τρέχει ακόμη, και σε κάθε διαδρομή ένας άνθρωπος, ο φρεναδόρος, στέκεται στο βαγόνι και φρενάρει με το χέρι. Τα βράδια ανάβουν χιλιάδες λαμπάκια και φαναράκια ανάμεσα στα λουλούδια και τη λίμνη. Ο Χανς Κρίστιαν Άντερσεν ερχόταν συχνά, και λένε ότι ο κινέζικος κήπος του πάρκου τού έδωσε την ιδέα για το παραμύθι «Το Αηδόνι».',
        en: 'Tivoli opened in the summer of 1843, and it is one of the oldest amusement parks in the world that is still running. The very oldest is just outside Copenhagen! Its founder, Georg Carstensen, convinced the king by telling him that people who are having fun forget their worries. Inside there is a wooden roller coaster from 1914 that still runs, and on every ride a person called the brakeman stands in the train and works the brakes by hand. In the evenings thousands of lamps and lanterns light up among the flowers and the lake. Hans Christian Andersen came here often, and it is said that the park\'s Chinese garden gave him the idea for his tale “The Nightingale”.',
      },
      didYouKnow: {
        el: 'Το ξύλινο τρενάκι Rutschebanen (1914) είναι από τα ελάχιστα στον κόσμο που λειτουργούν ακόμη με φρεναδόρο πάνω στο τρένο, και το Tivoli είναι ίσως το μοναδικό λούνα παρκ που έχει δική του συμφωνική ορχήστρα και δική του φρουρά από παιδιά, την Tivoli-Garden, που παρελαύνει με στολές από το 1844.',
        en: 'The wooden Rutschebanen roller coaster (1914) is one of very few in the world still operated with a brakeman riding on the train, and Tivoli may be the only amusement park with its own symphony orchestra and its own guard of children, the Tivoli Boys Guard, which has paraded in uniform since 1844.',
      },
      quiz: [
        {
          q: { el: 'Πότε άνοιξε το Tivoli;', en: 'When did Tivoli open?' },
          options: {
            el: ['Το 1955', 'Το 1914', 'Το 1905', 'Το 1843'],
            en: ['In 1955', 'In 1914', 'In 1905', 'In 1843'],
          },
          correct: 3,
          explanation: {
            el: 'Το Tivoli άνοιξε το καλοκαίρι του 1843 και είναι από τα πιο παλιά λούνα παρκ του κόσμου που λειτουργούν ακόμη. Το πιο παλιό απ\' όλα βρίσκεται λίγο έξω από την Κοπεγχάγη!',
            en: 'Tivoli opened in the summer of 1843 and is one of the oldest amusement parks in the world that is still running. The very oldest is just outside Copenhagen!',
          },
        },
        {
          q: { el: 'Τι κάνει ο φρεναδόρος στο ξύλινο τρενάκι;', en: 'What does the brakeman do on the wooden roller coaster?' },
          options: {
            el: ['Πουλάει εισιτήρια', 'Στέκεται στο τρένο και φρενάρει με το χέρι', 'Βάφει τα βαγόνια', 'Παίζει μουσική'],
            en: ['Sells tickets', 'Stands in the train and works the brakes by hand', 'Paints the cars', 'Plays music'],
          },
          correct: 1,
          explanation: {
            el: 'Το τρενάκι του 1914 δεν έχει αυτόματα φρένα. Ένας άνθρωπος ταξιδεύει σε κάθε διαδρομή και φρενάρει ο ίδιος.',
            en: 'The 1914 roller coaster has no automatic brakes. A person rides along on every trip and works the brakes.',
          },
        },
        {
          q: { el: 'Πώς έπεισε ο ιδρυτής του πάρκου τον βασιλιά;', en: 'How did the founder of the park convince the king?' },
          options: {
            el: ['Είπε ότι όταν ο κόσμος διασκεδάζει δεν σκέφτεται τις έγνοιες του', 'Του χάρισε ένα τρενάκι', 'Του υποσχέθηκε χρυσάφι', 'Του έγραψε ένα παραμύθι'],
            en: ['He said that people who are having fun forget their worries', 'He gave him a roller coaster', 'He promised him gold', 'He wrote him a fairy tale'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Georg Carstensen είπε στον βασιλιά ότι όταν ο κόσμος διασκεδάζει, δεν σκέφτεται τις έγνοιες του. Ο βασιλιάς του έδωσε την άδεια και τη γη.',
            en: 'Georg Carstensen told the king that people who are having fun forget their worries. The king gave him permission and the land.',
          },
        },
      ],
    },

    // ── 3. Strøget & Storkespringvandet ───────────────────────────────────────
    {
      id: 'stroget-storks',
      name: { el: 'Strøget', en: 'Strøget' },
      emoji: '🦩',
      lat: 55.6786,
      lng: 12.5787,
      radiusM: 60,
      riddle: {
        el: 'Ένας πολύ μακρύς δρόμος όπου δεν περνάει ούτε ένα αυτοκίνητο σε φέρνει σε μια πλατεία με ένα σιντριβάνι. Πάνω του, μεγάλα πουλιά με μακριά πόδια και μακρύ ράμφος ανοίγουν τα φτερά τους σαν να θέλουν να πετάξουν.',
        en: 'A very long street where not a single car passes leads you to a square with a fountain. On top of it, big birds with long legs and long beaks spread their wings as if about to fly away.',
      },
      parentHint: {
        el: 'Είναι το Σιντριβάνι με τους Πελαργούς (Storkespringvandet) στην πλατεία Amagertorv, πάνω στον πεζόδρομο Strøget (Στρόγιετ). Από την πύλη του Tivoli γυρίστε στην Rådhuspladsen και μπείτε στον πεζόδρομο από την οδό Frederiksberggade· περπατήστε ίσια 10–12 λεπτά.',
        en: 'It is the Stork Fountain (Storkespringvandet) on Amagertorv square, on the pedestrian street Strøget. From the Tivoli gate go back to Rådhuspladsen and enter the pedestrian street at Frederiksberggade; walk straight on for 10–12 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Ο δρόμος του γρίφου είναι από τους πιο μακρείς πεζόδρομους της Ευρώπης. Τι σημαίνει «πεζόδρομος»;', en: 'The street in the riddle is one of the longest pedestrian streets in Europe. What does “pedestrian street” mean?' },
        options: {
          el: ['Δρόμος μόνο για ποδήλατα', 'Δρόμος μόνο για ανθρώπους που περπατούν', 'Δρόμος μόνο για τραμ', 'Δρόμος που περνάει κάτω από τη γη'],
          en: ['A street only for bicycles', 'A street only for people on foot', 'A street only for trams', 'A street that runs underground'],
        },
        correct: 1,
        explanation: {
          el: 'Πεζόδρομος είναι ένας δρόμος μόνο για πεζούς, δηλαδή για ανθρώπους που περπατούν. Το Strøget έκλεισε για τα αυτοκίνητα το 1962, και σήμερα έχει μήκος περίπου 1,1 χιλιόμετρα.',
          en: 'A pedestrian street is a street only for pedestrians, that is, people on foot. Strøget was closed to cars in 1962, and today it is about 1.1 kilometres long.',
        },
      },
      onSite: {
        question: { el: 'Γύρνα γύρω γύρω από το σιντριβάνι και μέτρησε τα μεγάλα πουλιά. Πόσα είναι;', en: 'Walk all the way round the fountain and count the big birds. How many are there?' },
        options: {
          el: ['Ένα', 'Δύο', 'Τρία', 'Πέντε'],
          en: ['One', 'Two', 'Three', 'Five'],
        },
        correct: 2,
        explanation: {
          el: 'Τρεις πελαργοί ανοίγουν τα φτερά τους πάνω στο σιντριβάνι του 1894. Μερικοί λένε ότι στην πραγματικότητα είναι ερωδιοί, αλλά όλη η πόλη τους φωνάζει πελαργούς!',
          en: 'Three storks spread their wings on the fountain from 1894. Some people say they are really herons, but the whole city calls them storks!',
        },
      },
      story: {
        el: 'Strøget σημαίνει περίπου «το κομμάτι του δρόμου», και είναι ένας δρόμος μήκους 1,1 χιλιομέτρων περίπου, από την Πλατεία του Δημαρχείου ως τη Νέα Πλατεία του Βασιλιά. Το 1962 η πόλη έδιωξε τα αυτοκίνητα για μια δοκιμή· ο κόσμος το αγάπησε τόσο, που από τότε ο δρόμος έμεινε για πάντα στους πεζούς, και πολλές άλλες πόλεις τον αντέγραψαν. Το σιντριβάνι με τους πελαργούς στήθηκε το 1894 ως δώρο για τα 25 χρόνια γάμου (τους «ασημένιους γάμους») ενός πρίγκιπα. Υπάρχει και μια παράδοση: οι νέες μαίες, δηλαδή οι γυναίκες που βοηθούν τα μωρά να γεννηθούν, όταν τελείωναν τις σπουδές τους χόρευαν γύρω από το σιντριβάνι! Δίπλα στέκεται ένα σπίτι από το 1616 με σκαλιστό αέτωμα, χτισμένο για έναν δήμαρχο στο στιλ των Ολλανδών.',
        en: 'Strøget means roughly “the stretch”, and it is a street about 1.1 kilometres long, running from the City Hall Square to the King\'s New Square. In 1962 the city sent the cars away as an experiment; people loved it so much that the street stayed car-free for ever, and many other cities copied the idea. The Stork Fountain was put up in 1894 as a gift for the silver wedding of a prince. There is even a tradition: new midwives, the women who help babies to be born, used to dance around the fountain when they finished their studies! Next to it stands a house from 1616 with a carved gable, built for a mayor in the style of the Dutch.',
      },
      didYouKnow: {
        el: 'Το Strøget δεν είναι ένας δρόμος αλλά πέντε στη σειρά (Frederiksberggade, Nygade, Vimmelskaftet, Amagertorv, Østergade), και η πεζοδρόμηση του 1962 θεωρήθηκε τόσο ριζοσπαστική που εφημερίδες προέβλεπαν ότι θα κατέστρεφε το εμπόριο. Ο Δανός αρχιτέκτονας Jan Gehl μελέτησε εδώ πώς οι άνθρωποι χρησιμοποιούν τους δρόμους, και η δουλειά του άλλαξε πόλεις σε όλο τον κόσμο.',
        en: 'Strøget is not one street but five in a row (Frederiksberggade, Nygade, Vimmelskaftet, Amagertorv, Østergade), and the 1962 pedestrianisation was thought so radical that newspapers predicted it would ruin the shops. The Danish architect Jan Gehl studied here how people use streets, and his work has changed cities all over the world.',
      },
      quiz: [
        {
          q: { el: 'Τι έγινε στο Strøget το 1962;', en: 'What happened on Strøget in 1962?' },
          options: {
            el: ['Χτίστηκε ένας πύργος', 'Στήθηκε το σιντριβάνι', 'Έδιωξαν τα αυτοκίνητα και έγινε πεζόδρομος', 'Έπεσε ένα δέντρο'],
            en: ['A tower was built', 'The fountain was put up', 'The cars were sent away and it became a pedestrian street', 'A tree fell down'],
          },
          correct: 2,
          explanation: {
            el: 'Το 1962 η πόλη έκλεισε τον δρόμο για τα αυτοκίνητα, στην αρχή για δοκιμή. Ο κόσμος το αγάπησε και ο δρόμος έμεινε πεζόδρομος.',
            en: 'In 1962 the city closed the street to cars, at first as an experiment. People loved it and the street stayed pedestrian.',
          },
        },
        {
          q: { el: 'Ποιοι χόρευαν γύρω από το σιντριβάνι όταν τελείωναν τις σπουδές τους;', en: 'Who used to dance around the fountain when they finished their studies?' },
          options: {
            el: ['Οι νέες μαίες', 'Οι ναύτες', 'Οι βασιλιάδες', 'Οι δάσκαλοι'],
            en: ['New midwives', 'Sailors', 'Kings', 'Teachers'],
          },
          correct: 0,
          explanation: {
            el: 'Οι μαίες, οι γυναίκες που βοηθούν τα μωρά να γεννηθούν, γιόρταζαν το τέλος των σπουδών τους χορεύοντας γύρω από τους πελαργούς.',
            en: 'Midwives, the women who help babies to be born, celebrated the end of their studies by dancing around the storks.',
          },
        },
        {
          q: { el: 'Από ποια χρονιά είναι το παλιό σπίτι με το σκαλιστό αέτωμα δίπλα στο σιντριβάνι;', en: 'From which year is the old house with the carved gable next to the fountain?' },
          options: {
            el: ['Από το 1962', 'Από το 1894', 'Από το 1905', 'Από το 1616'],
            en: ['From 1962', 'From 1894', 'From 1905', 'From 1616'],
          },
          correct: 3,
          explanation: {
            el: 'Το σπίτι χτίστηκε το 1616 για έναν δήμαρχο της πόλης, στο στιλ που αγαπούσαν τότε οι Ολλανδοί.',
            en: 'The house was built in 1616 for a mayor of the city, in the style the Dutch loved at the time.',
          },
        },
      ],
    },

    // ── 4. Rundetaarn ─────────────────────────────────────────────────────────
    {
      id: 'round-tower',
      name: { el: 'Rundetaarn', en: 'Rundetaarn' },
      emoji: '🔭',
      lat: 55.6813,
      lng: 12.5758,
      radiusM: 60,
      riddle: {
        el: 'Ένας χοντρός στρογγυλός πύργος χωρίς ούτε ένα σκαλοπάτι: ανεβαίνεις στριφογυρίζοντας σαν σε κοχύλι, και κάποτε ένας τσάρος ανέβηκε ως την κορυφή καβάλα στο άλογό του. Ο βασιλιάς που τον έχτισε ήθελε να κοιτάζει τα άστρα.',
        en: 'A fat round tower without a single step: you climb it by twisting round and round like inside a seashell, and once a tsar rode all the way to the top on his horse. The king who built it wanted to look at the stars.',
      },
      parentHint: {
        el: 'Είναι το Rundetaarn (ο Στρογγυλός Πύργος) στην οδό Købmagergade. Από το σιντριβάνι με τους πελαργούς πάρτε την Købmagergade προς τα βόρεια· 4–5 λεπτά περπάτημα. Ο γρίφος λύνεται από την πρόσοψη· η άνοδος έχει μικρό εισιτήριο.',
        en: 'It is the Rundetaarn, the Round Tower, on Købmagergade. From the Stork Fountain take Købmagergade northwards; a 4–5 minute walk. The spot works from the façade; climbing to the top costs a small ticket.',
      },
      unlockQuestion: {
        question: { el: 'Ο βασιλιάς έχτισε τον πύργο για να κοιτάζει τα άστρα. Πώς λέγεται ένας τέτοιος πύργος;', en: 'The king built the tower to look at the stars. What is such a tower called?' },
        options: {
          el: ['Φάρος', 'Αστεροσκοπείο', 'Καμπαναριό', 'Ανεμόμυλος'],
          en: ['A lighthouse', 'An observatory', 'A bell tower', 'A windmill'],
        },
        correct: 1,
        explanation: {
          el: 'Αστεροσκοπείο είναι ένα μέρος από όπου οι αστρονόμοι παρατηρούν τον ουρανό. Ο πύργος τελείωσε το 1642 και είναι από τα πιο παλιά αστεροσκοπεία της Ευρώπης που λειτουργούν ακόμη.',
          en: 'An observatory is a place where astronomers watch the sky. The tower was finished in 1642 and is one of the oldest observatories in Europe still in use.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα ψηλά στην πρόσοψη του πύργου, πάνω από την είσοδο. Ανάμεσα στα χρυσά γράμματα υπάρχουν και μικρές εικόνες. Ποιες είναι;', en: 'Look high up on the front of the tower, above the entrance. Among the golden letters there are little pictures too. What are they?' },
        options: {
          el: ['Ένα καράβι και ένα ψάρι', 'Ένα σπαθί, μια καρδιά και ένα στέμμα', 'Ένας ήλιος και ένα φεγγάρι', 'Μια κουκουβάγια και ένα κλειδί'],
          en: ['A ship and a fish', 'A sword, a heart and a crown', 'A sun and a moon', 'An owl and a key'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ένας γρίφος με εικόνες, ένα ρέμπους! Το σπαθί σημαίνει «δικαιοσύνη», η καρδιά «στην καρδιά» και το στέμμα «στεφανωμένος». Όλο μαζί λέει: «Οδήγησε, Θεέ, τη γνώση και τη δικαιοσύνη στην καρδιά του στεφανωμένου βασιλιά Χριστιανού Δ΄, 1642».',
          en: 'It is a picture puzzle, a rebus! The sword means “justice”, the heart “in the heart” and the crown “crowned”. All together it reads: “Lead, God, learning and justice into the heart of the crowned King Christian IV, 1642”.',
        },
      },
      story: {
        el: 'Ο βασιλιάς Χριστιανός ο Δ΄ αγαπούσε να χτίζει: πύργους, κάστρα, ολόκληρες γειτονιές. Το 1642 τελείωσε αυτόν τον στρογγυλό πύργο για τους αστρονόμους του πανεπιστημίου, για να κοιτάζουν τα άστρα από ψηλά, μακριά από τον καπνό της πόλης. Αντί για σκάλα, μέσα υπάρχει μια ράμπα που στριφογυρίζει εφτάμισι φορές, μήκους περίπου 209 μέτρων. Έτσι ένα άλογο με κάρο μπορούσε να ανεβάσει βαριά όργανα και βιβλία ως την κορυφή. Το 1716 ο Τσάρος Πέτρος ο Μέγας της Ρωσίας ανέβηκε καβάλα στο άλογό του, και λένε ότι η τσαρίνα τον ακολούθησε με άμαξα! Ο πύργος είναι περίπου 35 μέτρα ψηλός, και από την κορυφή του βλέπεις όλες τις πράσινες στέγες και τις χρυσές κορυφές της παλιάς πόλης.',
        en: 'King Christian IV loved to build: towers, castles, whole neighbourhoods. In 1642 he finished this round tower for the astronomers of the university, so they could watch the stars from high up, away from the smoke of the city. Instead of stairs, inside there is a ramp that spirals round seven and a half times, about 209 metres long. That way a horse and cart could carry heavy instruments and books up to the top. In 1716 Tsar Peter the Great of Russia rode up on his horse, and it is said that the tsarina followed him in a carriage! The tower is about 35 metres tall, and from the top you can see all the green roofs and golden spires of the old town.',
      },
      didYouKnow: {
        el: 'Ο πύργος ήταν μέρος ενός τριπλού συγκροτήματος του Χριστιανού Δ΄ (εκκλησία, πανεπιστημιακή βιβλιοθήκη και αστεροσκοπείο μαζί), και η βιβλιοθήκη πάνω από την εκκλησία είναι σήμερα εκθεσιακός χώρος. Κατά καιρούς διοργανώνεται αγώνας μονόκυκλου πάνω-κάτω στη ράμπα, και το ρεκόρ είναι κάτω από δύο λεπτά.',
        en: 'The tower was part of a triple complex built by Christian IV (church, university library and observatory all in one), and the library hall above the church is now an exhibition space. From time to time a unicycle race is held up and down the ramp, and the record is under two minutes.',
      },
      quiz: [
        {
          q: { el: 'Τι υπάρχει μέσα στον πύργο αντί για σκάλα;', en: 'What is inside the tower instead of stairs?' },
          options: {
            el: ['Ένα ασανσέρ', 'Μια ράμπα που στριφογυρίζει', 'Μια τσουλήθρα', 'Ένα σχοινί'],
            en: ['A lift', 'A spiralling ramp', 'A slide', 'A rope'],
          },
          correct: 1,
          explanation: {
            el: 'Μια ράμπα μήκους περίπου 209 μέτρων στριφογυρίζει εφτάμισι φορές ως την κορυφή, για να ανεβαίνει άλογο με κάρο.',
            en: 'A ramp about 209 metres long spirals seven and a half times to the top, so that a horse and cart could climb up.',
          },
        },
        {
          q: { el: 'Ποιος ανέβηκε στον πύργο καβάλα στο άλογό του το 1716;', en: 'Who rode up the tower on horseback in 1716?' },
          options: {
            el: ['Ο Χανς Κρίστιαν Άντερσεν', 'Ο Γουόλτ Ντίσνεϊ', 'Ο επίσκοπος Absalon', 'Ο Τσάρος Πέτρος ο Μέγας'],
            en: ['Hans Christian Andersen', 'Walt Disney', 'Bishop Absalon', 'Tsar Peter the Great'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Τσάρος Πέτρος ο Μέγας της Ρωσίας ανέβηκε τη ράμπα με το άλογό του, και λένε ότι η τσαρίνα ακολούθησε με άμαξα.',
            en: 'Tsar Peter the Great of Russia rode up the ramp on his horse, and it is said the tsarina followed in a carriage.',
          },
        },
        {
          q: { el: 'Γιατί έχτισε ο βασιλιάς τον πύργο;', en: 'Why did the king build the tower?' },
          options: {
            el: ['Για να φυλακίζει τους εχθρούς του', 'Για να χτυπούν οι καμπάνες', 'Για να κοιτάζουν οι αστρονόμοι τα άστρα', 'Για να βλέπει τα καράβια'],
            en: ['To lock up his enemies', 'To ring the bells', 'So astronomers could watch the stars', 'To watch the ships'],
          },
          correct: 2,
          explanation: {
            el: 'Ο πύργος χτίστηκε ως αστεροσκοπείο για τους αστρονόμους του πανεπιστημίου, ψηλά και μακριά από τον καπνό της πόλης.',
            en: 'The tower was built as an observatory for the astronomers of the university, high up and away from the smoke of the city.',
          },
        },
      ],
    },

    // ── 5. Kongens Nytorv ─────────────────────────────────────────────────────
    {
      id: 'kongens-nytorv',
      name: { el: 'Kongens Nytorv', en: 'Kongens Nytorv' },
      emoji: '🐎',
      lat: 55.6805,
      lng: 12.5855,
      radiusM: 60,
      riddle: {
        el: 'Στο τέλος του μακριού πεζόδρομου ανοίγεται η πιο μεγάλη πλατεία της πόλης. Στη μέση της, μέσα σε έναν στρογγυλό κήπο, ένας βασιλιάς ντυμένος σαν Ρωμαίος καβαλάει το άλογό του, και απέναντι ένα θέατρο περιμένει τους χορευτές του.',
        en: 'At the end of the long walking street opens the biggest square in town. In the middle, inside a round garden, a king dressed like a Roman rides his horse, and across from him a theatre waits for its dancers.',
      },
      parentHint: {
        el: 'Είναι η Kongens Nytorv (η Νέα Πλατεία του Βασιλιά). Από τον Στρογγυλό Πύργο γυρίστε στο Strøget και συνεχίστε ανατολικά στην Østergade μέχρι το τέλος του πεζόδρομου· περίπου 10 λεπτά.',
        en: 'It is Kongens Nytorv, the King\'s New Square. From the Round Tower go back to Strøget and continue east along Østergade to the end of the pedestrian street; about 10 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Το θέατρο της πλατείας είναι διάσημο σε όλον τον κόσμο για έναν τύπο παράστασης χωρίς λόγια. Ποιον;', en: 'The theatre on the square is famous all over the world for one kind of show without words. Which one?' },
        options: {
          el: ['Το τσίρκο', 'Το μπαλέτο', 'Το κουκλοθέατρο', 'Τα μαγικά κόλπα'],
          en: ['The circus', 'Ballet', 'Puppet theatre', 'Magic tricks'],
        },
        correct: 1,
        explanation: {
          el: 'Το Βασιλικό Θέατρο έχει ένα από τα πιο παλιά και διάσημα μπαλέτα του κόσμου. Ο χορογράφος August Bournonville έφτιαξε εδώ, πριν από σχεδόν 200 χρόνια, χορούς που παίζονται ακόμη.',
          en: 'The Royal Theatre has one of the oldest and most famous ballet companies in the world. Almost 200 years ago the choreographer August Bournonville created dances here that are still performed today.',
        },
      },
      onSite: {
        question: { el: 'Βρες το θέατρο με τις κολόνες. Μπροστά του κάθονται δύο μπρούντζινοι κύριοι. Τι κάνουν;', en: 'Find the theatre with the columns. Two bronze gentlemen sit in front of it. What are they doing?' },
        options: {
          el: ['Παίζουν σκάκι', 'Κάθονται σε καρέκλες, ο καθένας μόνος του', 'Χορεύουν μαζί', 'Καβαλούν άλογα'],
          en: ['Playing chess', 'Sitting in chairs, each one alone', 'Dancing together', 'Riding horses'],
        },
        correct: 1,
        explanation: {
          el: 'Οι δύο καθιστοί κύριοι είναι ο Ludvig Holberg, που έγραψε κωμωδίες, και ο Adam Oehlenschläger, που έγραψε ποιήματα. Θεωρούνται οι «πατέρες» του δανέζικου θεάτρου και της δανέζικης ποίησης.',
          en: 'The two seated gentlemen are Ludvig Holberg, who wrote comedies, and Adam Oehlenschläger, who wrote poems. They are called the “fathers” of Danish theatre and Danish poetry.',
        },
      },
      story: {
        el: 'Το 1670 ο βασιλιάς Χριστιανός ο Ε΄ αποφάσισε ότι η πόλη χρειαζόταν μια μεγάλη, όμορφη πλατεία, σαν αυτές που είχε δει στο Παρίσι. Την έφτιαξε εδώ, εκεί όπου παλιά ήταν τα τείχη της πόλης, και τη γέμισε με παλάτια. Στη μέση έβαλε το άγαλμα του εαυτού του πάνω σε άλογο, ντυμένος σαν Ρωμαίος αυτοκράτορας. Οι κάτοικοι το φωνάζουν απλώς «το Άλογο». Το πρώτο άγαλμα ήταν από μολύβι και με τα χρόνια άρχισε να λυγίζει, γι\' αυτό το 1946 φτιάχτηκε αντίγραφο από μπρούντζο. Γύρω από το άλογο υπάρχει ένας στρογγυλός κήπος που λέγεται Krinsen. Στην πλατεία βρίσκεται και το Βασιλικό Θέατρο, όπου το μπαλέτο της Δανίας χορεύει εδώ και περισσότερα από 250 χρόνια.',
        en: 'In 1670 King Christian V decided that the city needed a big, beautiful square, like the ones he had seen in Paris. He made it here, where the old city walls used to be, and filled it with palaces. In the middle he placed a statue of himself on a horse, dressed as a Roman emperor. The locals simply call it “the Horse”. The first statue was made of lead and over the years it started to sag, so in 1946 a copy was cast in bronze. Around the horse there is a round garden called Krinsen. On the square also stands the Royal Theatre, where the ballet of Denmark has danced for more than 250 years.',
      },
      didYouKnow: {
        el: 'Το αρχικό μολύβδινο άγαλμα (1688) ήταν τόσο βαρύ που σιγά σιγά παραμορφωνόταν και ο βασιλιάς «έγερνε», γι\' αυτό αντικαταστάθηκε από μπρούντζινο αντίγραφο το 1946. Κάτω από την πλατεία σήμερα διασταυρώνονται οι γραμμές του μετρό, και η ανασκαφή για τον σταθμό (2010–2019) έφερε στο φως κομμάτια των μεσαιωνικών τειχών.',
        en: 'The original lead statue (1688) was so heavy that it slowly deformed and the king began to lean, which is why it was replaced by a bronze copy in 1946. Under the square the metro lines now cross, and the excavation for the station (2010–2019) uncovered pieces of the medieval city walls.',
      },
      quiz: [
        {
          q: { el: 'Ποιος βασιλιάς έφτιαξε την πλατεία το 1670;', en: 'Which king made the square in 1670?' },
          options: {
            el: ['Ο Χριστιανός ο Ε΄', 'Ο Χριστιανός ο Δ΄', 'Ο Φρειδερίκος ο Ε΄', 'Ο Πέτρος ο Μέγας'],
            en: ['Christian V', 'Christian IV', 'Frederik V', 'Peter the Great'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Χριστιανός ο Ε΄ έφτιαξε την πλατεία το 1670 και έβαλε στη μέση το άγαλμα του εαυτού του πάνω σε άλογο.',
            en: 'Christian V made the square in 1670 and placed a statue of himself on horseback in the middle.',
          },
        },
        {
          q: { el: 'Από τι ήταν φτιαγμένο το πρώτο άγαλμα του βασιλιά;', en: 'What was the first statue of the king made of?' },
          options: {
            el: ['Από μάρμαρο', 'Από μολύβι', 'Από ξύλο', 'Από χρυσό'],
            en: ['Marble', 'Lead', 'Wood', 'Gold'],
          },
          correct: 1,
          explanation: {
            el: 'Το πρώτο άγαλμα ήταν από μολύβι, ένα μαλακό μέταλλο, και σιγά σιγά λύγιζε. Το 1946 έγινε αντίγραφο από μπρούντζο.',
            en: 'The first statue was made of lead, a soft metal, and it slowly sagged. In 1946 a bronze copy was made.',
          },
        },
        {
          q: { el: 'Πώς λέγεται ο στρογγυλός κήπος γύρω από το άγαλμα;', en: 'What is the round garden around the statue called?' },
          options: {
            el: ['Tivoli', 'Strøget', 'Nyhavn', 'Krinsen'],
            en: ['Tivoli', 'Strøget', 'Nyhavn', 'Krinsen'],
          },
          correct: 3,
          explanation: {
            el: 'Ο στρογγυλός κήπος στη μέση της πλατείας λέγεται Krinsen, που σημαίνει περίπου «ο κύκλος».',
            en: 'The round garden in the middle of the square is called Krinsen, which means roughly “the ring”.',
          },
        },
      ],
    },

    // ── 6. Nyhavn ─────────────────────────────────────────────────────────────
    {
      id: 'nyhavn',
      name: { el: 'Nyhavn', en: 'Nyhavn' },
      emoji: '⛵',
      lat: 55.6798,
      lng: 12.5908,
      radiusM: 60,
      riddle: {
        el: 'Ένα κανάλι σκαμμένο με φτυάρια πριν από 350 χρόνια, με ξύλινα καράβια στη σειρά και σπίτια βαμμένα σαν κουτί με κραγιόνια. Σε τρία από αυτά τα σπίτια έμενε ένας συγγραφέας που εδώ έγραψε τα πρώτα του παραμύθια.',
        en: 'A canal dug by hand 350 years ago, lined with wooden ships and houses painted like a box of crayons. In three of these houses lived a writer who wrote his very first fairy tales here.',
      },
      parentHint: {
        el: 'Είναι το Nyhavn (Νίχαουν, «το Νέο Λιμάνι»), το κανάλι με τα χρωματιστά σπίτια. Ξεκινάει ακριβώς από τη βορειοανατολική γωνία της Kongens Nytorv· 2 λεπτά με τα πόδια. Περπατήστε στην ηλιόλουστη πλευρά, με τα χρωματιστά σπίτια.',
        en: 'It is Nyhavn, the “New Harbour”, the canal with the colourful houses. It begins right at the north-east corner of Kongens Nytorv; a 2-minute walk. Stroll along the sunny side with the colourful houses.',
      },
      unlockQuestion: {
        question: { el: 'Τι σημαίνει το όνομα του καναλιού στα δανέζικα;', en: 'What does the name of the canal mean in Danish?' },
        options: {
          el: ['Παλιό Κάστρο', 'Νέο Λιμάνι', 'Μεγάλη Γέφυρα', 'Σπίτι του Βασιλιά'],
          en: ['Old Castle', 'New Harbour', 'Big Bridge', 'King\'s House'],
        },
        correct: 1,
        explanation: {
          el: 'Ny σημαίνει «νέο» και havn «λιμάνι». Το «Νέο Λιμάνι» σκάφτηκε το 1670–1673, για να φτάνουν τα καράβια με τα εμπορεύματα ως τη μεγάλη πλατεία. Σήμερα είναι ήδη 350 χρόνων!',
          en: 'Ny means “new” and havn means “harbour”. The “New Harbour” was dug in 1670–1673, so that ships with goods could sail right up to the big square. Today it is already 350 years old!',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε ως το τέλος του καναλιού, εκεί όπου ανοίγει στο μεγάλο λιμάνι. Τι τεράστιο αντικείμενο στέκεται εκεί;', en: 'Walk to the end of the canal, where it opens into the big harbour. What huge object stands there?' },
        options: {
          el: ['Μια άγκυρα', 'Ένα κανόνι', 'Ένας φάρος', 'Ένα άγαλμα βασιλιά'],
          en: ['An anchor', 'A cannon', 'A lighthouse', 'A statue of a king'],
        },
        correct: 0,
        explanation: {
          el: 'Η μεγάλη άγκυρα είναι ένα μνημείο. Θυμίζει τους Δανούς ναυτικούς που χάθηκαν στη θάλασσα σε έναν μεγάλο πόλεμο. Παλιά ανήκε σε μια πραγματική φρεγάτα, ένα μεγάλο ιστιοφόρο.',
          en: 'The big anchor is a memorial. It remembers the Danish sailors who were lost at sea during a great war. It once belonged to a real frigate, a large sailing ship.',
        },
      },
      story: {
        el: 'Πριν από 350 χρόνια ο βασιλιάς Χριστιανός ο Ε΄ έβαλε στρατιώτες και αιχμαλώτους να σκάψουν ένα κανάλι από το λιμάνι ως τη νέα του πλατεία, για να φτάνουν τα καράβια με τα ξύλα, τα ψάρια και τα μπαχαρικά. Γύρω του έχτισαν στενά ψηλά σπίτια, και λένε ότι το καθένα είχε άλλο χρώμα για να τα ξεχωρίζουν οι ναύτες. Το πιο παλιό, στον αριθμό 9, στέκεται από το 1681! Ο Χανς Κρίστιαν Άντερσεν έμεινε σε τρία σπίτια του καναλιού: στον αριθμό 20 έγραψε το 1835 τα πρώτα του παραμύθια, όπως τη Βασιλοπούλα και το Μπιζέλι, και αργότερα έζησε στο 67 και στο 18. Τα ξύλινα καράβια που βλέπεις είναι παλιά και αληθινά, και σήμερα οι ναύτες γίνανε τουρίστες με παγωτό στο χέρι.',
        en: 'Some 350 years ago King Christian V set soldiers and prisoners to dig a canal from the harbour to his new square, so that ships could bring in timber, fish and spices. Along it, people built tall narrow houses, and people say each was painted a different colour so the sailors could tell them apart. The oldest, at number 9, has stood since 1681! Hans Christian Andersen lived in three houses on the canal: at number 20 he wrote his first fairy tales in 1835, such as The Princess and the Pea, and later he lived at number 67 and number 18. The wooden ships you see are old and real, and today the sailors have been replaced by visitors holding ice creams.',
      },
      didYouKnow: {
        el: 'Το κανάλι σκάφτηκε σε μεγάλο βαθμό από Σουηδούς αιχμαλώτους πολέμου (1670–1673), και για αιώνες ήταν η κακόφημη συνοικία των ναυτών, με ταβέρνες και καπηλειά. Τα σπίτια αναπαλαιώθηκαν και το κανάλι έγινε πεζόδρομος το 1980· τα ιστορικά ξύλινα σκάφη που δένουν εδώ αποτελούν πλωτό μουσείο.',
        en: 'The canal was dug largely by Swedish prisoners of war (1670–1673), and for centuries it was the rough sailors\' quarter, full of taverns. The houses were restored and the quay became pedestrian only in 1980; the historic wooden vessels moored here form a floating museum.',
      },
      quiz: [
        {
          q: { el: 'Γιατί λένε ότι τα σπίτια έχουν διαφορετικά χρώματα;', en: 'Why do people say the houses have different colours?' },
          options: {
            el: ['Γιατί το ζήτησε ο βασιλιάς', 'Γιατί έτσι ήθελε ο Άντερσεν', 'Για να τα ξεχωρίζουν οι ναύτες', 'Γιατί τελείωσε το άσπρο χρώμα'],
            en: ['Because the king ordered it', 'Because Andersen wanted it', 'So the sailors could tell them apart', 'Because they ran out of white paint'],
          },
          correct: 2,
          explanation: {
            el: 'Λένε ότι τα χρώματα βοηθούσαν τους ναύτες να βρίσκουν εύκολα το σπίτι τους ανάμεσα σε τόσα ίδια στενά κτίρια.',
            en: 'People say the colours helped sailors find their own house easily among so many similar narrow buildings.',
          },
        },
        {
          q: { el: 'Από ποια χρονιά είναι το πιο παλιό σπίτι του καναλιού;', en: 'From which year is the oldest house on the canal?' },
          options: {
            el: ['Από το 1905', 'Από το 1835', 'Από το 1843', 'Από το 1681'],
            en: ['From 1905', 'From 1835', 'From 1843', 'From 1681'],
          },
          correct: 3,
          explanation: {
            el: 'Το σπίτι στον αριθμό 9 χτίστηκε το 1681, λίγα χρόνια αφού σκάφτηκε το κανάλι.',
            en: 'The house at number 9 was built in 1681, a few years after the canal was dug.',
          },
        },
        {
          q: { el: 'Σε ποιον αριθμό έγραψε ο Άντερσεν τα πρώτα του παραμύθια;', en: 'At which number did Andersen write his first fairy tales?' },
          options: {
            el: ['Στον αριθμό 20', 'Στον αριθμό 9', 'Στον αριθμό 100', 'Στον αριθμό 1'],
            en: ['Number 20', 'Number 9', 'Number 100', 'Number 1'],
          },
          correct: 0,
          explanation: {
            el: 'Στο σπίτι με τον αριθμό 20 ο Άντερσεν έγραψε το 1835 τα πρώτα του παραμύθια. Αργότερα έζησε στο 67 και στο 18.',
            en: 'At number 20 Andersen wrote his first fairy tales in 1835. Later he lived at 67 and at 18.',
          },
        },
      ],
    },

    // ── 7. Amalienborg ────────────────────────────────────────────────────────
    {
      id: 'amalienborg',
      name: { el: 'Amalienborg', en: 'Amalienborg' },
      emoji: '👑',
      lat: 55.6840,
      lng: 12.5929,
      radiusM: 40,
      riddle: {
        el: 'Τέσσερα ολόιδια παλάτια κοιτάζουν ένα άλογο στη μέση μιας πλατείας με οκτώ πλευρές. Στρατιώτες με ψηλά μαύρα καπέλα από γούνα περπατούν πέρα δώθε, και από πίσω ξεπροβάλλει ένας τεράστιος πράσινος τρούλος.',
        en: 'Four identical palaces face a horse in the middle of a square with eight sides. Soldiers in tall black fur hats march back and forth, and behind them peeks an enormous green dome.',
      },
      parentHint: {
        el: 'Είναι το Amalienborg (Αμάλιενμποργκ), το παλάτι της βασιλικής οικογένειας. Από την άκρη του Nyhavn περπατήστε βόρεια κατά μήκος του νερού (Larsens Plads) για 8–10 λεπτά και στρίψτε αριστερά στην πλατεία. Η αλλαγή φρουράς γίνεται στις 12:00 το μεσημέρι.',
        en: 'It is Amalienborg, the palace of the royal family. From the harbour end of Nyhavn walk north along the water (Larsens Plads) for 8–10 minutes and turn left into the square. The changing of the guard is at 12 noon.',
      },
      unlockQuestion: {
        question: { el: 'Ποιος μένει σε αυτά τα παλάτια σήμερα;', en: 'Who lives in these palaces today?' },
        options: {
          el: ['Ο δήμαρχος της Κοπεγχάγης', 'Η βασιλική οικογένεια της Δανίας', 'Κανείς, είναι μουσείο', 'Οι φοιτητές του πανεπιστημίου'],
          en: ['The mayor of Copenhagen', 'The royal family of Denmark', 'Nobody, it is a museum', 'The students of the university'],
        },
        correct: 1,
        explanation: {
          el: 'Εδώ μένει ο βασιλιάς της Δανίας με την οικογένειά του. Η Δανία έχει από τις πιο παλιές βασιλικές οικογένειες του κόσμου: οι βασιλιάδες της συνεχίζονται εδώ και περισσότερα από χίλια χρόνια, από την εποχή των Βίκινγκ.',
          en: 'The King of Denmark lives here with his family. Denmark has one of the oldest royal families in the world: its line of kings goes back more than a thousand years, to the time of the Vikings.',
        },
      },
      onSite: {
        question: { el: 'Στάσου δίπλα στο άγαλμα του αλόγου και γύρνα αργά γύρω γύρω. Πόσα μεγάλα παλάτια μετράς γύρω από την πλατεία;', en: 'Stand next to the statue of the horse and turn slowly all the way round. How many big palaces can you count around the square?' },
        options: {
          el: ['Ένα', 'Δύο', 'Τέσσερα', 'Οκτώ'],
          en: ['One', 'Two', 'Four', 'Eight'],
        },
        correct: 2,
        explanation: {
          el: 'Τέσσερα ολόιδια παλάτια στέκονται στις τέσσερις γωνίες της οκτάγωνης πλατείας. Κοίτα και τους φρουρούς: φορούν ψηλά καπέλα από μαύρη γούνα αρκούδας και στολή μπλε τις απλές μέρες, κόκκινη στις γιορτές.',
          en: 'Four identical palaces stand at the four corners of the octagonal square. Look at the guards too: they wear tall hats of black bearskin and a blue uniform on ordinary days, red on special days.',
        },
      },
      story: {
        el: 'Τα τέσσερα παλάτια χτίστηκαν τη δεκαετία του 1750 για τέσσερις πλούσιες οικογένειες ευγενών, γύρω από μια πλατεία με οκτώ πλευρές. Ο βασιλιάς Φρειδερίκος ο Ε΄ ήθελε μια γειτονιά τόσο όμορφη που να θαυμάζουν όλοι, γι\' αυτό στη μέση στέκεται το άγαλμά του πάνω στο άλογο. Το 1794 το παλιό παλάτι των βασιλιάδων κάηκε, και η βασιλική οικογένεια μετακόμισε εδώ, όπου μένει μέχρι σήμερα. Οι στρατιώτες με τα ψηλά καπέλα από γούνα αρκούδας είναι η Βασιλική Σωματοφυλακή. Κάθε μέρα στις 11:30 ξεκινούν από το κάστρο Rosenborg, περπατούν μέσα από την πόλη και στις 12 ακριβώς αλλάζουν βάρδια εδώ, με τύμπανα και μουσική. Πίσω από την πλατεία υψώνεται ο πράσινος τρούλος της Μαρμάρινης Εκκλησίας, που χρειάστηκε σχεδόν 150 χρόνια για να τελειώσει.',
        en: 'The four palaces were built in the 1750s for four wealthy noble families, around a square with eight sides. King Frederik V wanted a neighbourhood so beautiful that everyone would admire it, which is why his statue on horseback stands in the middle. In 1794 the old royal palace burned down, and the royal family moved here, where they still live today. The soldiers in the tall bearskin hats are the Royal Life Guards. Every day at 11:30 they set out from Rosenborg Castle, march through the city and change shifts here at 12 noon sharp, with drums and music. Behind the square rises the green dome of the Marble Church, which took almost 150 years to finish.',
      },
      didYouKnow: {
        el: 'Το έφιππο άγαλμα του Φρειδερίκου Ε΄ (1771), έργο του Γάλλου γλύπτη Jacques Saly, λέγεται ότι κόστισε σχεδόν όσο ένα από τα παλάτια. Ο τρούλος της Μαρμάρινης Εκκλησίας έχει διάμετρο περίπου 31 μέτρων, από τους μεγαλύτερους της Σκανδιναβίας, και η εκκλησία ξεκίνησε το 1749 αλλά τελείωσε μόλις το 1894, αφού τα χρήματα τελείωσαν και το εργοτάξιο έμεινε ερείπιο για δεκαετίες.',
        en: 'The equestrian statue of Frederik V (1771), by the French sculptor Jacques Saly, is said to have cost almost as much as one of the palaces. The dome of the Marble Church is about 31 metres across, one of the largest in Scandinavia; the church was begun in 1749 but only finished in 1894, after the money ran out and the site stood as a ruin for decades.',
      },
      quiz: [
        {
          q: { el: 'Για ποιους χτίστηκαν στην αρχή τα τέσσερα παλάτια;', en: 'Who were the four palaces first built for?' },
          options: {
            el: ['Για τους φρουρούς', 'Για τέσσερις πλούσιες οικογένειες ευγενών', 'Για τους ναύτες', 'Για τον Άντερσεν'],
            en: ['For the guards', 'For four wealthy noble families', 'For the sailors', 'For Andersen'],
          },
          correct: 1,
          explanation: {
            el: 'Τα παλάτια χτίστηκαν τη δεκαετία του 1750 για τέσσερις οικογένειες ευγενών. Η βασιλική οικογένεια ήρθε αργότερα, το 1794.',
            en: 'The palaces were built in the 1750s for four noble families. The royal family came later, in 1794.',
          },
        },
        {
          q: { el: 'Γιατί μετακόμισε η βασιλική οικογένεια εδώ το 1794;', en: 'Why did the royal family move here in 1794?' },
          options: {
            el: ['Γιατί το παλιό τους παλάτι κάηκε', 'Γιατί ήθελαν να είναι κοντά στη θάλασσα', 'Γιατί το ζήτησε ο λαός', 'Γιατί βαρέθηκαν το παλιό'],
            en: ['Because their old palace burned down', 'Because they wanted to be near the sea', 'Because the people asked them to', 'Because they were bored of the old one'],
          },
          correct: 0,
          explanation: {
            el: 'Το 1794 το παλιό παλάτι των βασιλιάδων καταστράφηκε από φωτιά, και η οικογένεια ήρθε να μείνει εδώ.',
            en: 'In 1794 the old royal palace was destroyed by fire, and the family came to live here.',
          },
        },
        {
          q: { el: 'Τι ώρα αλλάζουν βάρδια οι φρουροί;', en: 'At what time do the guards change shifts?' },
          options: {
            el: ['Στις 8 το πρωί', 'Στις 6 το απόγευμα', 'Στις 12 το μεσημέρι', 'Τα μεσάνυχτα'],
            en: ['At 8 in the morning', 'At 6 in the evening', 'At 12 noon', 'At midnight'],
          },
          correct: 2,
          explanation: {
            el: 'Κάθε μέρα στις 12 το μεσημέρι οι φρουροί φτάνουν από το κάστρο Rosenborg και αλλάζουν βάρδια με τύμπανα και μουσική.',
            en: 'Every day at 12 noon the guards arrive from Rosenborg Castle and change shifts with drums and music.',
          },
        },
      ],
    },

    // ── 8. Kastellet ──────────────────────────────────────────────────────────
    {
      id: 'kastellet',
      name: { el: 'Kastellet', en: 'Kastellet' },
      emoji: '⭐',
      lat: 55.6908,
      lng: 12.5928,
      radiusM: 80,
      riddle: {
        el: 'Από ψηλά μοιάζει με αστέρι με πέντε μύτες, από κάτω με πράσινους λόφους και νερό γύρω γύρω. Μέσα του, μακριά κόκκινα σπίτια στέκονται σε σειρές σαν στρατιώτες, και ένας μύλος γυρίζει τα φτερά του στον άνεμο.',
        en: 'From above it looks like a star with five points; from below, like green hills with water all around. Inside, long red houses stand in rows like soldiers, and a mill turns its sails in the wind.',
      },
      parentHint: {
        el: 'Είναι το Kastellet (Καστέλετ, «το Φρούριο»), το αστεροειδές φρούριο. Από το Amalienborg περπατήστε βόρεια από την Amaliegade και μέσα από το πάρκο Churchillparken· 10–12 λεπτά ως τη νότια πύλη. Είναι ανοιχτό και δωρεάν για περιπάτους.',
        en: 'It is Kastellet, the star-shaped fortress. From Amalienborg walk north along Amaliegade and through Churchillparken; 10–12 minutes to the south gate. It is open and free to walk around.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί οι μηχανικοί έχτιζαν φρούρια σε σχήμα αστεριού;', en: 'Why did engineers build fortresses in the shape of a star?' },
        options: {
          el: ['Για να φαίνονται όμορφα από τον ουρανό', 'Για να μπορούν οι φρουροί να βλέπουν κάθε τοίχο από τις μύτες του αστεριού', 'Γιατί το ζήτησε ένας μάγος', 'Για να μοιάζουν με χριστουγεννιάτικο στολίδι'],
          en: ['So they would look pretty from the sky', 'So the guards could watch every wall from the points of the star', 'Because a wizard asked for it', 'So they would look like a Christmas ornament'],
        },
        correct: 1,
        explanation: {
          el: 'Από κάθε μύτη του αστεριού, που λέγεται προμαχώνας, οι φρουροί έβλεπαν τους τοίχους δίπλα τους. Έτσι κανένας εχθρός δεν μπορούσε να κρυφτεί κοντά στα τείχη. Τέτοια φρούρια χτίζονταν σε όλη την Ευρώπη τον 17ο αιώνα.',
          en: 'From each point of the star, called a bastion, the guards could see the walls next to it. That way no enemy could hide close to the walls. Fortresses like this were built all over Europe in the 17th century.',
        },
      },
      onSite: {
        question: { el: 'Μπες από την πύλη και ανέβα στον πράσινο λόφο των τειχών. Τι παράξενο κτίριο στέκεται πάνω στα τείχη;', en: 'Go through the gate and climb the green hill of the ramparts. What unusual building stands on top of the walls?' },
        options: {
          el: ['Ένας φάρος', 'Ένας ανεμόμυλος', 'Μια εκκλησία με τρούλο', 'Ένας πύργος ρολογιού'],
          en: ['A lighthouse', 'A windmill', 'A church with a dome', 'A clock tower'],
        },
        correct: 1,
        explanation: {
          el: 'Ο ανεμόμυλος χτίστηκε το 1847 στη θέση ενός πιο παλιού. Σε καιρό πολιορκίας οι στρατιώτες έπρεπε να αλέθουν μόνοι τους το σιτάρι για το ψωμί τους, γι\' αυτό είχαν δικό τους μύλο μέσα στο φρούριο.',
          en: 'The windmill was built in 1847 in place of an older one. In a siege the soldiers had to grind their own grain for bread, so they kept their own mill inside the fortress.',
        },
      },
      story: {
        el: 'Το Kastellet χτίστηκε τη δεκαετία του 1660, όταν οι Σουηδοί είχαν μόλις πολιορκήσει την Κοπεγχάγη και ο βασιλιάς Φρειδερίκος ο Γ΄ ήθελε ένα φρούριο που να φυλάει το λιμάνι. Έχει σχήμα αστεριού με πέντε μύτες, τους προμαχώνες, και καθένας έχει όνομα: του Βασιλιά, της Βασίλισσας, του Πρίγκιπα, της Πριγκίπισσας και του Κόμη. Γύρω του υπάρχει τάφρος με νερό, και μέσα του μακριά κόκκινα κτίρια όπου κοιμόντουσαν οι στρατιώτες, μια εκκλησία και ένας ανεμόμυλος για το αλεύρι. Είναι από τα καλύτερα διατηρημένα αστεροειδή φρούρια της Ευρώπης. Ακόμη και σήμερα ο στρατός έχει γραφεία εδώ, αλλά οι πύλες είναι ανοιχτές, και οι κάτοικοι κάνουν τζόκινγκ πάνω στα τείχη ανάμεσα σε πάπιες και κύκνους.',
        en: 'Kastellet was built in the 1660s, just after the Swedes had besieged Copenhagen and King Frederik III wanted a fortress to guard the harbour. It is shaped like a star with five points, the bastions, and each one has a name: the King, the Queen, the Prince, the Princess and the Count. Around it runs a moat full of water, and inside are long red buildings where the soldiers slept, a church and a windmill for flour. It is one of the best-preserved star fortresses in Europe. Even today the army has offices here, but the gates are open, and locals go jogging along the ramparts among the ducks and swans.',
      },
      didYouKnow: {
        el: 'Το Kastellet παραμένει ενεργή στρατιωτική εγκατάσταση (στεγάζει, μεταξύ άλλων, υπηρεσίες του υπουργείου Άμυνας), γι\' αυτό ισχύουν κανόνες: κλείνει τη νύχτα και δεν επιτρέπονται ποδήλατα στους προμαχώνες. Η εκκλησία του (1704) είχε πίσω της φυλακή, με τρύπες στον τοίχο για να ακούν οι κρατούμενοι τη λειτουργία.',
        en: 'Kastellet remains an active military site (it houses, among others, offices of the Ministry of Defence), so rules apply: it closes at night and cycling on the bastions is not allowed. Its church (1704) had a prison built behind it, with holes in the wall so the prisoners could hear the service.',
      },
      quiz: [
        {
          q: { el: 'Πόσες μύτες έχει το αστέρι του φρουρίου;', en: 'How many points does the star of the fortress have?' },
          options: {
            el: ['Τρεις', 'Τέσσερις', 'Οκτώ', 'Πέντε'],
            en: ['Three', 'Four', 'Eight', 'Five'],
          },
          correct: 3,
          explanation: {
            el: 'Το φρούριο έχει πέντε μύτες, τους προμαχώνες: του Βασιλιά, της Βασίλισσας, του Πρίγκιπα, της Πριγκίπισσας και του Κόμη.',
            en: 'The fortress has five points, the bastions: the King, the Queen, the Prince, the Princess and the Count.',
          },
        },
        {
          q: { el: 'Ποιοι είχαν πολιορκήσει την Κοπεγχάγη λίγο πριν χτιστεί το φρούριο;', en: 'Who had besieged Copenhagen shortly before the fortress was built?' },
          options: {
            el: ['Οι Ρωμαίοι', 'Οι Γάλλοι', 'Οι Σουηδοί', 'Οι Βίκινγκ'],
            en: ['The Romans', 'The French', 'The Swedes', 'The Vikings'],
          },
          correct: 2,
          explanation: {
            el: 'Οι Σουηδοί, οι γείτονες απέναντι από τη θάλασσα, είχαν πολιορκήσει την πόλη. Ο βασιλιάς ήθελε ένα γερό φρούριο για το λιμάνι.',
            en: 'The Swedes, the neighbours across the sea, had besieged the city. The king wanted a strong fortress for the harbour.',
          },
        },
        {
          q: { el: 'Τι χρώμα έχουν τα μακριά κτίρια όπου κοιμόντουσαν οι στρατιώτες;', en: 'What colour are the long buildings where the soldiers slept?' },
          options: {
            el: ['Άσπρο', 'Κόκκινο', 'Μπλε', 'Κίτρινο'],
            en: ['White', 'Red', 'Blue', 'Yellow'],
          },
          correct: 1,
          explanation: {
            el: 'Οι στρατώνες, τα μακριά σπίτια των στρατιωτών, είναι βαμμένοι κόκκινοι και στέκονται σε σειρές μέσα στο φρούριο.',
            en: 'The barracks, the long houses of the soldiers, are painted red and stand in rows inside the fortress.',
          },
        },
      ],
    },

    // ── 9. Den Lille Havfrue ──────────────────────────────────────────────────
    {
      id: 'little-mermaid',
      name: { el: 'Η Μικρή Γοργόνα', en: 'The Little Mermaid' },
      emoji: '🧜',
      lat: 55.6928,
      lng: 12.5991,
      radiusM: 80,
      riddle: {
        el: 'Δίπλα στο νερό, μια κοπέλα από μπρούντζο κάθεται πάνω σε μια πέτρα και περιμένει κάποιον που δεν έρχεται. Είναι πολύ πιο μικρή απ\' όσο νομίζεις, και έδωσε τη φωνή της για να ζήσει ανάμεσα στους ανθρώπους.',
        en: 'By the water, a bronze girl sits on a stone and waits for someone who never comes. She is much smaller than you think, and she gave away her voice to live among humans.',
      },
      parentHint: {
        el: 'Είναι το άγαλμα της Μικρής Γοργόνας (Den Lille Havfrue) στην προκυμαία Langelinie. Από το Kastellet βγείτε από τη βόρεια πύλη (Norgesporten) και ακολουθήστε τον περίπατο δίπλα στο νερό προς τα δεξιά· 5–7 λεπτά. Το πρωί έχει λιγότερο κόσμο.',
        en: 'It is the statue of the Little Mermaid (Den Lille Havfrue) on the Langelinie promenade. From Kastellet leave by the north gate (Norgesporten) and follow the waterside path to the right; 5–7 minutes. Mornings are less crowded.',
      },
      unlockQuestion: {
        question: { el: 'Στο παραμύθι του Άντερσεν, τι έδωσε η γοργόνα στη μάγισσα της θάλασσας για να αποκτήσει πόδια;', en: 'In Andersen\'s fairy tale, what did the mermaid give the sea witch in order to get legs?' },
        options: {
          el: ['Τα μαλλιά της', 'Το στέμμα της', 'Τη φωνή της', 'Τον καθρέφτη της'],
          en: ['Her hair', 'Her crown', 'Her voice', 'Her mirror'],
        },
        correct: 2,
        explanation: {
          el: 'Η γοργόνα έδωσε την όμορφη φωνή της για να πάρει ανθρώπινα πόδια και να βρει τον πρίγκιπα. Στο παραμύθι του Άντερσεν, που γράφτηκε το 1837, το τέλος είναι πολύ πιο λυπητερό από την ταινία.',
          en: 'The mermaid gave up her lovely voice to get human legs and find the prince. In Andersen\'s tale, written in 1837, the ending is much sadder than in the film.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα τη γοργόνα προσεκτικά. Πόσο μεγάλη είναι;', en: 'Look carefully at the mermaid. How big is she?' },
        options: {
          el: ['Τεράστια, σαν σπίτι', 'Ψηλή σαν έναν μεγάλο', 'Περίπου όσο ένα παιδί', 'Μικροσκοπική, σαν κούκλα'],
          en: ['Enormous, like a house', 'As tall as a grown-up', 'About the size of a child', 'Tiny, like a doll'],
        },
        correct: 2,
        explanation: {
          el: 'Το άγαλμα είναι μόλις 1,25 μέτρα ψηλό, όσο ένα παιδί περίπου. Πολλοί επισκέπτες ξαφνιάζονται που είναι τόσο μικρό. Κοίτα και τα πόδια της: έχει ανθρώπινα πόδια, αλλά τελειώνουν σε πτερύγια ψαριού!',
          en: 'The statue is only 1.25 metres tall, about the size of a child. Many visitors are surprised that it is so small. Look at her legs too: she has human legs, but they end in fish fins!',
        },
      },
      story: {
        el: 'Το 1909 ένας πλούσιος ζυθοποιός, ο Carl Jacobsen (Καρλ Γιάκομπσεν), είδε στο Βασιλικό Θέατρο ένα μπαλέτο για τη Μικρή Γοργόνα του Άντερσεν και συγκινήθηκε τόσο, που παρήγγειλε ένα άγαλμα για την πόλη. Ο γλύπτης Edvard Eriksen (Έντβαρντ Έρικσεν) πήρε το πρόσωπο από την μπαλαρίνα που χόρευε τη γοργόνα και το σώμα από τη γυναίκα του. Το μπρούντζινο άγαλμα στήθηκε πάνω σε έναν βράχο μέσα στο νερό το 1913. Είναι μόνο 1,25 μέτρα ψηλό, αλλά έγινε το πιο διάσημο σύμβολο της Δανίας. Η γοργόνα του παραμυθιού έδωσε τη φωνή της για να αποκτήσει πόδια, και ο γλύπτης τής έδωσε και τα δύο: πόδια που τελειώνουν σε πτερύγια. Κάθεται και κοιτάζει σκεφτική, όπως στο παραμύθι, περιμένοντας τον πρίγκιπά της.',
        en: 'In 1909 a wealthy brewer, Carl Jacobsen, saw a ballet about Andersen\'s Little Mermaid at the Royal Theatre and was so moved that he ordered a statue for the city. The sculptor Edvard Eriksen took the face from the ballerina who danced the mermaid and the body from his own wife. The bronze statue was placed on a rock in the water in 1913. It is only 1.25 metres tall, yet it became the most famous symbol of Denmark. The mermaid of the tale gave up her voice to get legs, and the sculptor gave her both: legs that end in fins. She sits gazing thoughtfully, as in the story, waiting for her prince.',
      },
      didYouKnow: {
        el: 'Η μπαλαρίνα Ellen Price, που ενέπνευσε το πρόσωπο, αρνήθηκε να ποζάρει γυμνή, γι\' αυτό το σώμα ανήκει στη σύζυγο του γλύπτη, Eline Eriksen. Το 2010 το άγαλμα ταξίδεψε για πρώτη φορά εκτός Δανίας, στην Παγκόσμια Έκθεση της Σαγκάης, και στη θέση του μπήκε προσωρινά μια οθόνη που έδειχνε ζωντανά τη γοργόνα από την Κίνα.',
        en: 'The ballerina Ellen Price, who inspired the face, refused to pose nude, so the body belongs to the sculptor\'s wife, Eline Eriksen. In 2010 the statue left Denmark for the first time, travelling to the World Expo in Shanghai, and a screen was temporarily placed on the rock showing the mermaid live from China.',
      },
      quiz: [
        {
          q: { el: 'Ποιος παρήγγειλε το άγαλμα της γοργόνας;', en: 'Who ordered the statue of the mermaid?' },
          options: {
            el: ['Ένας πλούσιος ζυθοποιός', 'Ο βασιλιάς', 'Ο Χανς Κρίστιαν Άντερσεν', 'Μια μπαλαρίνα'],
            en: ['A wealthy brewer', 'The king', 'Hans Christian Andersen', 'A ballerina'],
          },
          correct: 0,
          explanation: {
            el: 'Ο ζυθοποιός Carl Jacobsen συγκινήθηκε από ένα μπαλέτο και πλήρωσε για το άγαλμα, που χάρισε στην πόλη.',
            en: 'The brewer Carl Jacobsen was moved by a ballet and paid for the statue, which he gave to the city.',
          },
        },
        {
          q: { el: 'Πόσο ψηλό είναι το άγαλμα;', en: 'How tall is the statue?' },
          options: {
            el: ['12 μέτρα', '5 μέτρα', '3 μέτρα', '1,25 μέτρα'],
            en: ['12 metres', '5 metres', '3 metres', '1.25 metres'],
          },
          correct: 3,
          explanation: {
            el: 'Το άγαλμα είναι μόλις 1,25 μέτρα, όσο ένα παιδί περίπου. Μικρό, αλλά διάσημο σε όλον τον κόσμο!',
            en: 'The statue is only 1.25 metres, about the size of a child. Small, but famous all over the world!',
          },
        },
        {
          q: { el: 'Από ποιον πήρε ο γλύπτης το πρόσωπο της γοργόνας;', en: 'Whose face did the sculptor use for the mermaid?' },
          options: {
            el: ['Της βασίλισσας', 'Της μπαλαρίνας που χόρευε τη γοργόνα', 'Της κόρης του', 'Ενός ναύτη'],
            en: ['The queen\'s', 'The ballerina who danced the mermaid', 'His daughter\'s', 'A sailor\'s'],
          },
          correct: 1,
          explanation: {
            el: 'Το πρόσωπο είναι της μπαλαρίνας που χόρευε τη γοργόνα στο Βασιλικό Θέατρο· το σώμα είναι της γυναίκας του γλύπτη.',
            en: 'The face is that of the ballerina who danced the mermaid at the Royal Theatre; the body is the sculptor\'s wife\'s.',
          },
        },
      ],
    },

    // ── 10. Vor Frelsers Kirke ────────────────────────────────────────────────
    {
      id: 'our-saviour-spire',
      name: { el: 'Vor Frelsers Kirke', en: 'Church of Our Saviour' },
      emoji: '🌀',
      lat: 55.6729,
      lng: 12.5938,
      radiusM: 60,
      riddle: {
        el: 'Ένας μαύρος πύργος με χρυσή σκάλα που στριφογυρίζει απ\' έξω, σαν φίδι που ανεβαίνει προς τον ουρανό. Στην κορυφή, μια χρυσή μπάλα και μια φιγούρα με σημαία κοιτάζουν όλη την πόλη από ψηλά.',
        en: 'A black tower with a golden staircase twisting around the outside, like a snake climbing up to the sky. At the very top, a golden ball and a figure with a flag watch over the whole city.',
      },
      parentHint: {
        el: 'Είναι η Vor Frelsers Kirke (η Εκκλησία του Σωτήρος) στη συνοικία Christianshavn, οδός Sankt Annæ Gade. Από τη Μικρή Γοργόνα περπατήστε 10 λεπτά ως τον σταθμό Østerport, πάρτε το μετρό M3 ως Kongens Nytorv και αλλάξτε σε M1 ή M2 για μία στάση, Christianshavn· από εκεί 5 λεπτά περπάτημα. Εναλλακτικά, το θαλάσσιο λεωφορείο από τη στάση Nordre Toldbod ως τη στάση Knippelsbro. Η άνοδος στη σκάλα έχει εισιτήριο και κλείνει με άσχημο καιρό.',
        en: 'It is Vor Frelsers Kirke, the Church of Our Saviour, in the Christianshavn district, on Sankt Annæ Gade. From the Little Mermaid walk 10 minutes to Østerport station, take metro M3 to Kongens Nytorv and change to M1 or M2 for one stop, Christianshavn; then a 5-minute walk. Alternatively, take the harbour bus from the Nordre Toldbod stop to the Knippelsbro stop. Climbing the spire needs a ticket and is closed in bad weather.',
      },
      unlockQuestion: {
        question: { el: 'Ένα σύνολο από πολλές καμπάνες που παίζουν μελωδίες, σαν ένα τεράστιο μουσικό όργανο, πώς λέγεται;', en: 'A set of many bells that play tunes together, like a giant musical instrument, is called what?' },
        options: {
          el: ['Ακορντεόν', 'Καριγιόν', 'Ξυλόφωνο', 'Αρμόνιο'],
          en: ['An accordion', 'A carillon', 'A xylophone', 'A harmonium'],
        },
        correct: 1,
        explanation: {
          el: 'Καριγιόν λέγεται ένα μουσικό όργανο από πολλές καμπάνες που παίζονται με πλήκτρα. Το καριγιόν αυτής της εκκλησίας έχει 48 καμπάνες και παίζει μελωδίες κάθε ώρα, από το πρωί ως τα μεσάνυχτα.',
          en: 'A carillon is a musical instrument made of many bells played from a keyboard. The carillon of this church has 48 bells and plays tunes every hour, from morning until midnight.',
        },
      },
      onSite: {
        question: { el: 'Στάσου κάτω από τον πύργο και κοίτα την πιο ψηλή κορυφή του. Τι στέκεται εκεί πάνω;', en: 'Stand below the tower and look at its very top. What stands up there?' },
        options: {
          el: ['Ένας κόκορας', 'Ένας σταυρός', 'Μια χρυσή μπάλα με μια φιγούρα που κρατάει σημαία', 'Ένα ρολόι'],
          en: ['A rooster', 'A cross', 'A golden ball with a figure holding a flag', 'A clock'],
        },
        correct: 2,
        explanation: {
          el: 'Στην κορυφή υπάρχει μια χρυσή σφαίρα και πάνω της μια χρυσή φιγούρα του Χριστού που κρατάει σημαία, ψηλή περίπου 3 μέτρα. Η σκάλα φτάνει μέχρι κάτω από τη σφαίρα, όπου το σκαλοπάτι γίνεται τόσο στενό που δεν χωράει άλλο!',
          en: 'At the top there is a golden globe and on it a golden figure of Christ holding a flag, about 3 metres tall. The staircase reaches just below the globe, where the steps become so narrow that they simply stop!',
        },
      },
      story: {
        el: 'Η εκκλησία χτίστηκε γύρω στο 1696, αλλά ο παράξενος πύργος της προστέθηκε το 1752 από τον αρχιτέκτονα Lauritz de Thurah (Λάουριτς ντε Τούρα). Είναι μαύρος με χρυσά κάγκελα, και η σκάλα του στριφογυρίζει από την έξω πλευρά, όλο και πιο στενή προς την κορυφή. Για να φτάσεις ψηλά, ανεβαίνεις περίπου 400 σκαλοπάτια, και τα τελευταία 150 είναι έξω, στον αέρα, με θέα σε όλη την Κοπεγχάγη! Η σκάλα τυλίγεται προς τα αριστερά, δηλαδή αντίθετα από τους δείκτες του ρολογιού. Ο πύργος φτάνει τα 90 μέτρα περίπου, και στην κορυφή του λάμπει μια χρυσή σφαίρα με μια φιγούρα που κρατάει σημαία. Μέσα στον πύργο κρέμονται 48 καμπάνες, που παίζουν μελωδίες κάθε ώρα.',
        en: 'The church was built around 1696, but its strange spire was added in 1752 by the architect Lauritz de Thurah. It is black with golden railings, and its staircase winds around the outside, getting narrower and narrower towards the top. To reach the top you climb about 400 steps, and the last 150 are outside, in the open air, with a view over all of Copenhagen! The staircase twists to the left, that is, anticlockwise. The spire is about 90 metres tall, and at its tip shines a golden globe with a figure holding a flag. Inside the tower hang 48 bells, which play tunes every hour.',
      },
      didYouKnow: {
        el: 'Το καριγιόν των 48 καμπανών είναι από τα μεγαλύτερα της Βόρειας Ευρώπης και παίζεται και με το χέρι από καριγιονίστα. Ένας παλιός θρύλος λέει ότι ο αρχιτέκτονας έπεσε από τον πύργο όταν είδε ότι η σκάλα έστριβε προς τη «λάθος» μεριά· στην πραγματικότητα ο de Thurah πέθανε στο κρεβάτι του, επτά χρόνια αργότερα.',
        en: 'The 48-bell carillon is one of the largest in Northern Europe and is also played by hand by a carillonneur. An old legend says the architect fell from the spire when he saw the stairs turned the "wrong" way; in fact de Thurah died peacefully seven years later.',
      },
      quiz: [
        {
          q: { el: 'Πού βρίσκονται τα τελευταία 150 σκαλοπάτια του πύργου;', en: 'Where are the last 150 steps of the spire?' },
          options: {
            el: ['Κάτω από τη γη', 'Μέσα σε έναν σωλήνα', 'Έξω, γύρω από τον πύργο', 'Μέσα στην εκκλησία'],
            en: ['Underground', 'Inside a tube', 'Outside, winding around the tower', 'Inside the church'],
          },
          correct: 2,
          explanation: {
            el: 'Από τα 400 περίπου σκαλοπάτια, τα τελευταία 150 είναι έξω, στον αέρα, και τυλίγονται γύρω από τον πύργο ως την κορυφή.',
            en: 'Of the roughly 400 steps, the last 150 are outside, in the open air, winding around the tower to the top.',
          },
        },
        {
          q: { el: 'Ποια δύο χρώματα έχει ο πύργος;', en: 'Which two colours does the spire have?' },
          options: {
            el: ['Κόκκινο και άσπρο', 'Μαύρο και χρυσό', 'Πράσινο και ασημί', 'Μπλε και κίτρινο'],
            en: ['Red and white', 'Black and gold', 'Green and silver', 'Blue and yellow'],
          },
          correct: 1,
          explanation: {
            el: 'Ο πύργος είναι μαύρος με χρυσά κάγκελα, και στην κορυφή του λάμπει η χρυσή σφαίρα.',
            en: 'The spire is black with golden railings, and the golden globe shines at the top.',
          },
        },
        {
          q: { el: 'Πόσες καμπάνες κρέμονται μέσα στον πύργο;', en: 'How many bells hang inside the tower?' },
          options: {
            el: ['12', '150', '400', '48'],
            en: ['12', '150', '400', '48'],
          },
          correct: 3,
          explanation: {
            el: 'Μέσα στον πύργο κρέμονται 48 καμπάνες, που μαζί φτιάχνουν ένα καριγιόν και παίζουν μελωδίες κάθε ώρα.',
            en: 'Inside the tower hang 48 bells, which together form a carillon and play tunes every hour.',
          },
        },
      ],
    },
  ],
};
