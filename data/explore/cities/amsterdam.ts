/**
 * WiseBot Explorer · Άμστερνταμ / Amsterdam
 * =========================================
 * Ten spots in one long day or two easy halves: the station, the Dam and the western canals
 * on foot (spots 1–5), the Amstel and the museum quarter (6–8), then a tram back towards
 * the harbour for NEMO and the old Nieuwmarkt (9–10). Original text only, verified facts,
 * language for a child of 7–12 in Greek and English. Dutch names stay in Dutch.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'amsterdam',
  name: { el: 'Άμστερνταμ', en: 'Amsterdam' },
  country: { el: 'Ολλανδία', en: 'Netherlands' },
  countryCode: 'NL',
  emoji: '🚲',
  center: { lat: 52.372, lng: 4.895 },
  zoom: 14,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στο Άμστερνταμ, μια πόλη που στέκεται πάνω σε χιλιάδες ξύλινους πασσάλους μπηγμένους βαθιά στο νερό! Εδώ λένε ότι τα ποδήλατα είναι περισσότερα από τους ανθρώπους, τα κανάλια είναι περισσότερα από εκατό, και οι τουλίπες πουλιούνται πάνω σε βάρκες. Σε ένα από τα σπίτια της, ένα κορίτσι έγραψε κάποτε ένα ημερολόγιο που διάβασε όλος ο κόσμος. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε εξερευνητές του Άμστερνταμ!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Amsterdam, a city standing on thousands of wooden poles pushed deep into the water! Here, they say, there are more bicycles than people, more than a hundred canals, and tulips are sold on boats. In one of its houses a girl once wrote a diary that the whole world has read. Solve my riddles, find the ten secret spots and become Amsterdam explorers!',
  },
  route: [
    'central-station',
    'dam-square',
    'westerkerk-and-canals',
    'anne-frank-house',
    'bloemenmarkt',
    'magere-brug',
    'rijksmuseum-museumplein',
    'vondelpark',
    'nemo-science-museum',
    'de-waag',
  ],
  spots: [
    // ── 1. Amsterdam Centraal ─────────────────────────────────────────────────
    {
      id: 'central-station',
      name: { el: 'Amsterdam Centraal', en: 'Amsterdam Centraal' },
      emoji: '🚂',
      lat: 52.3786,
      lng: 4.9002,
      radiusM: 60,
      riddle: {
        el: 'Το πρώτο πράγμα που βλέπουν οι περισσότεροι επισκέπτες μοιάζει με παλάτι, αλλά από μέσα του ξεκινούν τρένα. Στέκεται πάνω σε τρία νησιά που έφτιαξαν άνθρωποι, και πίσω του πλέουν φέρι μπότ χωρίς εισιτήριο.',
        en: 'The first thing most visitors see looks like a palace, but trains set off from inside it. It stands on three islands made by people, and behind it ferries sail without a ticket.',
      },
      parentHint: {
        el: 'Είναι ο κεντρικός σιδηροδρομικός σταθμός, το Amsterdam Centraal (Άμστερνταμ Σεντράλ). Ξεκινήστε από εδώ: σταθείτε στην πλατεία Stationsplein μπροστά στην πρόσοψη, με το νερό του IJ πίσω από το κτίριο.',
        en: 'It is the main railway station, Amsterdam Centraal. Start here: stand on Stationsplein in front of the façade, with the IJ waterway behind the building.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το κτίριο στέκεται πάνω σε νησιά που έφτιαξαν άνθρωποι. Πάνω σε τι στηρίζονται τα βαριά κτίρια του Άμστερνταμ για να μη βουλιάξουν στη λάσπη;', en: 'The riddle says the building stands on islands made by people. What do the heavy buildings of Amsterdam rest on, so they do not sink into the mud?' },
        options: {
          el: ['Σε μπαλόνια γεμάτα αέρα', 'Σε βράχους από τα βουνά', 'Σε ξύλινους πασσάλους μπηγμένους βαθιά στο χώμα', 'Σε τίποτα, απλώς επιπλέουν'],
          en: ['Balloons full of air', 'Rocks from the mountains', 'Wooden poles driven deep into the ground', 'Nothing, they just float'],
        },
        correct: 2,
        explanation: {
          el: 'Το έδαφος του Άμστερνταμ είναι μαλακό και υγρό. Γι\' αυτό οι χτίστες μπήγουν μακριούς ξύλινους (και σήμερα τσιμεντένιους) πασσάλους ως το σκληρό στρώμα άμμου από κάτω και χτίζουν πάνω τους. Ο σταθμός πατάει σε σχεδόν 9.000 τέτοιους πασσάλους!',
          en: 'The ground in Amsterdam is soft and wet. So builders drive long wooden (and nowadays concrete) poles down to the hard layer of sand underneath and build on top of them. The station rests on almost 9,000 of them!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τους δύο πύργους της πρόσοψης. Ο ένας έχει ρολόι. Τι δείχνει ο δίσκος στον άλλο πύργο;', en: 'Look at the two towers on the front. One has a clock. What does the dial on the other tower show?' },
        options: {
          el: ['Τη θερμοκρασία', 'Από πού φυσάει ο άνεμος', 'Τις ώρες των τρένων', 'Τη μέρα της εβδομάδας'],
          en: ['The temperature', 'Which way the wind is blowing', 'The train times', 'The day of the week'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ανεμοδείκτης: ένα πτερύγιο στη στέγη γυρίζει με τον άνεμο και κινεί τον δείκτη του δίσκου. Το Άμστερνταμ ήταν πόλη ναυτικών, και για τα ιστιοφόρα ο άνεμος ήταν πιο σημαντικός κι από την ώρα!',
          en: 'It is a wind dial: a vane on the roof turns with the wind and moves the pointer on the dial. Amsterdam was a city of sailors, and for sailing ships the wind mattered even more than the time!',
        },
      },
      story: {
        el: 'Πριν από το 1889 εδώ ήταν μόνο νερό: το IJ (Άι), το μεγάλο λιμάνι της πόλης. Για να χτίσουν τον σταθμό, οι μηχανικοί έφτιαξαν τρία τεχνητά νησιά και έμπηξαν στη λάσπη σχεδόν 9.000 ξύλινους πασσάλους. Ο αρχιτέκτονας Pierre Cuypers (Πιερ Κάιπερς) τον σχεδίασε σαν παλάτι από κόκκινο τούβλο, γεμάτο σκαλίσματα και χρωματιστές εικόνες, με ένα ρολόι στον έναν πύργο και έναν ανεμοδείκτη στον άλλο. Ο ίδιος σχεδίασε και το μεγάλο μουσείο της πόλης, γι\' αυτό τα δύο κτίρια μοιάζουν σαν αδέρφια. Πολλοί κάτοικοι τότε γκρίνιαξαν, γιατί ο σταθμός τούς έκρυψε τη θέα στο λιμάνι. Σήμερα περνούν από εδώ πολύ περισσότεροι από 100.000 ταξιδιώτες κάθε μέρα, κι ακόμη περισσότερα ποδήλατα σταθμεύουν γύρω του!',
        en: 'Before 1889 there was only water here: the IJ, the city\'s big harbour. To build the station, engineers made three artificial islands and drove almost 9,000 wooden poles into the mud. The architect Pierre Cuypers designed it like a palace of red brick, full of carvings and colourful pictures, with a clock on one tower and a wind dial on the other. He also designed the city\'s great museum, which is why the two buildings look like brother and sister. Many people grumbled at the time, because the station hid their view of the harbour. Today well over 100,000 travellers pass through every day, and even more bicycles park all around it!',
      },
      didYouKnow: {
        el: 'Το 2023 άνοιξε μπροστά στον σταθμό ένα υπόγειο πάρκινγκ ποδηλάτων χτισμένο κάτω από το νερό, με θέση για περίπου 7.000 ποδήλατα. Τα φέρι πίσω από τον σταθμό προς το Amsterdam-Noord είναι δωρεάν για πεζούς και ποδήλατα, μια ωραία βόλτα πέντε λεπτών με θέα στο λιμάνι.',
        en: 'In 2023 an underwater bicycle garage opened in front of the station, with room for about 7,000 bikes. The ferries behind the station to Amsterdam-Noord are free for pedestrians and cyclists, a lovely five-minute ride with a view of the harbour.',
      },
      quiz: [
        {
          q: { el: 'Πάνω σε τι χτίστηκε ο σταθμός;', en: 'What was the station built on?' },
          options: {
            el: ['Σε τρία τεχνητά νησιά', 'Σε έναν λόφο', 'Σε ένα παλιό κάστρο', 'Σε μια γέφυρα'],
            en: ['Three artificial islands', 'A hill', 'An old castle', 'A bridge'],
          },
          correct: 0,
          explanation: {
            el: 'Οι μηχανικοί έφτιαξαν τρία νησιά μέσα στο λιμάνι και τα στήριξαν με χιλιάδες ξύλινους πασσάλους.',
            en: 'Engineers made three islands in the harbour and held them up with thousands of wooden poles.',
          },
        },
        {
          q: { el: 'Ποιο άλλο διάσημο κτίριο σχεδίασε ο ίδιος αρχιτέκτονας;', en: 'Which other famous building did the same architect design?' },
          options: {
            el: ['Το Βασιλικό Παλάτι', 'Έναν ανεμόμυλο', 'Τον Πύργο του Άιφελ', 'Το μεγάλο μουσείο της πόλης, το Rijksmuseum'],
            en: ['The Royal Palace', 'A windmill', 'The Eiffel Tower', 'The city\'s great museum, the Rijksmuseum'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Pierre Cuypers σχεδίασε και το Rijksmuseum, που άνοιξε το 1885. Κοίτα τα δύο κτίρια: κόκκινο τούβλο, δύο πύργοι, πολλά στολίδια, σαν αδέρφια!',
            en: 'Pierre Cuypers also designed the Rijksmuseum, which opened in 1885. Look at the two buildings: red brick, two towers, lots of decorations, like siblings!',
          },
        },
        {
          q: { el: 'Γιατί γκρίνιαξαν κάποιοι κάτοικοι όταν χτίστηκε ο σταθμός;', en: 'Why did some people grumble when the station was built?' },
          options: {
            el: ['Γιατί τα τρένα ήταν πολύ αργά', 'Γιατί τους έκρυψε τη θέα στο λιμάνι', 'Γιατί ήταν πολύ μικρός', 'Γιατί δεν είχε ρολόι'],
            en: ['Because the trains were too slow', 'Because it hid their view of the harbour', 'Because it was too small', 'Because it had no clock'],
          },
          correct: 1,
          explanation: {
            el: 'Ο σταθμός στάθηκε ανάμεσα στην πόλη και στο νερό, και οι κάτοικοι δεν έβλεπαν πια τα καράβια. Σήμερα όμως τον αγαπούν!',
            en: 'The station stood between the city and the water, so people could no longer see the ships. Today they love it, though!',
          },
        },
      ],
    },

    // ── 2. Dam ────────────────────────────────────────────────────────────────
    {
      id: 'dam-square',
      name: { el: 'Πλατεία Dam', en: 'Dam Square' },
      emoji: '👑',
      lat: 52.3730,
      lng: 4.8930,
      radiusM: 40,
      riddle: {
        el: 'Εδώ, πριν από πολλά πολλά χρόνια, κάποιοι σώρευσαν χώμα για να σταματήσουν ένα ποτάμι, και μια ολόκληρη πόλη πήρε το όνομά της από αυτό. Σήμερα ένα παλάτι, μια λευκή κολόνα και εκατοντάδες περιστέρια μοιράζονται την ίδια μεγάλη πλατεία.',
        en: 'Here, long, long ago, people piled up earth to stop a river, and a whole city took its name from it. Today a palace, a white column and hundreds of pigeons share the same big square.',
      },
      parentHint: {
        el: 'Είναι η πλατεία Dam (Νταμ), η κεντρική πλατεία του Άμστερνταμ. Από τον σταθμό περπατήστε 10 λεπτά ευθεία νότια στον μεγάλο δρόμο Damrak, και η πλατεία ανοίγει μπροστά σας με το Βασιλικό Παλάτι στα δεξιά.',
        en: 'It is Dam Square, the heart of Amsterdam. From the station walk 10 minutes straight south along the wide Damrak, and the square opens in front of you with the Royal Palace on your right.',
      },
      unlockQuestion: {
        question: { el: 'Η πόλη πήρε το όνομά της από ένα φράγμα σε ένα ποτάμι. Ποιο ποτάμι κρύβεται μέσα στη λέξη «Άμστερνταμ»;', en: 'The city got its name from a barrier built across a river. Which river is hiding inside the word “Amsterdam”?' },
        options: {
          el: ['Ο Amstel', 'Ο Ρήνος', 'Ο Δούναβης', 'Ο Τάμεσης'],
          en: ['The Amstel', 'The Rhine', 'The Danube', 'The Thames'],
        },
        correct: 0,
        explanation: {
          el: 'Amstel + dam = Amsterdam! Το φράγμα (dam στα ολλανδικά) στον ποταμό Amstel (Άμστελ) χτίστηκε γύρω στο 1270, και το ψαροχώρι δίπλα του μεγάλωσε και έγινε η πόλη.',
          en: 'Amstel + dam = Amsterdam! The barrier (dam in Dutch) across the river Amstel was built around 1270, and the little fishing village beside it grew into the city.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά, στην κορυφή του στρογγυλού πυργίσκου πάνω στη στέγη του παλατιού. Τι σχήμα έχει ο ανεμοδείκτης εκεί πάνω;', en: 'Look up at the very top of the round tower on the palace roof. What shape is the weather vane up there?' },
        options: {
          el: ['Κόκορα', 'Αστέρι', 'Λιοντάρι', 'Καράβι'],
          en: ['A rooster', 'A star', 'A lion', 'A ship'],
        },
        correct: 3,
        explanation: {
          el: 'Είναι ένα παλιό εμπορικό καράβι, σαν αυτά που έκαναν το Άμστερνταμ πλούσιο. Αν κάνεις τον γύρο του παλατιού, στην πίσω πλευρά θα δεις κι έναν γίγαντα, τον Άτλαντα, που κρατάει τη Γη στους ώμους του.',
          en: 'It is an old merchant ship, like the ones that made Amsterdam rich. If you walk around the palace, on the back you will also spot a giant, Atlas, carrying the world on his shoulders.',
        },
      },
      story: {
        el: 'Γύρω στο 1270 κάποιοι ψαράδες έχτισαν ένα φράγμα στον ποταμό Amstel, για να κρατούν το νερό της θάλασσας μακριά από τα σπίτια τους. Το χωριό τους το είπαν «Amstelredamme», και από εκεί βγήκε το όνομα Άμστερνταμ. Τετρακόσια χρόνια αργότερα η πόλη είχε γίνει τόσο πλούσια από το εμπόριο, που έχτισε το πιο μεγαλόπρεπο δημαρχείο της Ευρώπης, πάνω σε 13.659 ξύλινους πασσάλους. Οι κάτοικοι το έλεγαν «το όγδοο θαύμα του κόσμου». Το 1808 ο αδερφός του Ναπολέοντα, που είχε γίνει βασιλιάς της Ολλανδίας, το έκανε παλάτι, και παλάτι έμεινε. Η ψηλή λευκή κολόνα είναι το Εθνικό Μνημείο, που θυμίζει τους ανθρώπους που χάθηκαν στον Δεύτερο Παγκόσμιο Πόλεμο. Και στην εκκλησία δίπλα, τη Nieuwe Kerk (Νίουε Κερκ, «Νέα Εκκλησία»), ορκίζονται ακόμη οι βασιλιάδες της Ολλανδίας.',
        en: 'Around 1270 some fishermen built a dam across the river Amstel to keep the sea water away from their houses. They called their village “Amstelredamme”, and that is where the name Amsterdam comes from. Four hundred years later the city had grown so rich from trade that it built the grandest town hall in Europe, on 13,659 wooden poles. People called it “the eighth wonder of the world”. In 1808 Napoleon\'s brother, who had become king of Holland, turned it into a palace, and a palace it stayed. The tall white column is the National Monument, which remembers the people lost in the Second World War. And in the church next door, the Nieuwe Kerk, the “New Church”, the kings and queens of the Netherlands still take their oath.',
      },
      didYouKnow: {
        el: 'Η Nieuwe Kerk λέγεται «Νέα», αν και είναι περίπου 600 ετών: πήρε το όνομα για να ξεχωρίζει από την Oude Kerk, την «Παλιά Εκκλησία», που είναι ακόμη πιο παλιά. Στο μαρμάρινο πάτωμα της μεγάλης αίθουσας του παλατιού είναι χαραγμένοι δύο τεράστιοι χάρτες του κόσμου, όπως τον ήξεραν οι ναυτικοί του 17ου αιώνα.',
        en: 'The Nieuwe Kerk is called “New” even though it is about 600 years old: it got the name to tell it apart from the Oude Kerk, the “Old Church”, which is older still. The marble floor of the palace\'s great hall has two enormous maps of the world set into it, showing the world as the sailors of the 17th century knew it.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν το Βασιλικό Παλάτι όταν χτίστηκε;', en: 'What was the Royal Palace when it was first built?' },
          options: {
            el: ['Ένα κάστρο', 'Μια εκκλησία', 'Το δημαρχείο της πόλης', 'Ένας σιδηροδρομικός σταθμός'],
            en: ['A castle', 'A church', 'The city\'s town hall', 'A railway station'],
          },
          correct: 2,
          explanation: {
            el: 'Χτίστηκε ως δημαρχείο, τόσο μεγαλόπρεπο που το έλεγαν όγδοο θαύμα του κόσμου. Παλάτι έγινε το 1808.',
            en: 'It was built as the town hall, so grand that people called it the eighth wonder of the world. It became a palace in 1808.',
          },
        },
        {
          q: { el: 'Γιατί έχτισαν οι ψαράδες το φράγμα στο ποτάμι;', en: 'Why did the fishermen build the dam across the river?' },
          options: {
            el: ['Για να ψαρεύουν πιο εύκολα', 'Για να κρατούν το νερό της θάλασσας μακριά από τα σπίτια τους', 'Για να φτιάξουν μια πλατεία', 'Για να περνούν τα τρένα'],
            en: ['To catch fish more easily', 'To keep the sea water away from their houses', 'To make a square', 'So that trains could cross'],
          },
          correct: 1,
          explanation: {
            el: 'Το νερό ανέβαινε συχνά. Το φράγμα κρατούσε τη θάλασσα έξω, και το χωριό μπόρεσε να μεγαλώσει με ασφάλεια.',
            en: 'The water often rose high. The dam kept the sea out, and the village could grow safely.',
          },
        },
        {
          q: { el: 'Πάνω σε πόσους ξύλινους πασσάλους στηρίζεται το παλάτι;', en: 'How many wooden poles hold up the palace?' },
          options: {
            el: ['Σε 13.659', 'Σε 100', 'Σε 12', 'Σε ένα εκατομμύριο'],
            en: ['13,659', '100', '12', 'One million'],
          },
          correct: 0,
          explanation: {
            el: 'Ακριβώς 13.659! Οι χτίστες τούς μέτρησαν έναν έναν. Χωρίς αυτούς το βαρύ κτίριο θα βούλιαζε σιγά σιγά στη λάσπη.',
            en: 'Exactly 13,659! The builders counted every single one. Without them the heavy building would slowly sink into the mud.',
          },
        },
      ],
    },

    // ── 3. Westerkerk & Prinsengracht ─────────────────────────────────────────
    {
      id: 'westerkerk-and-canals',
      name: { el: 'Westerkerk και Prinsengracht', en: 'Westerkerk and Prinsengracht' },
      emoji: '⛪',
      lat: 52.3744,
      lng: 4.8838,
      radiusM: 60,
      riddle: {
        el: 'Ο πιο ψηλός πύργος της πόλης φοράει στην κορυφή του ένα στέμμα, δώρο ενός αυτοκράτορα. Στα πόδια του κυλάει ένα κανάλι με σπίτια που γέρνουν μπροστά, σαν να σκύβουν να δουν το νερό.',
        en: 'The tallest tower in town wears a crown on its head, a gift from an emperor. At its feet runs a canal lined with houses that lean forward, as if bending to look at the water.',
      },
      parentHint: {
        el: 'Είναι η Westerkerk (Βέστερκερκ, η «Δυτική Εκκλησία») στο κανάλι Prinsengracht. Από την πλατεία Dam περπατήστε 8 λεπτά δυτικά στη Raadhuisstraat, περνώντας τρία κανάλια, ως την πλατεία Westermarkt στη βάση του πύργου.',
        en: 'It is the Westerkerk, the “Western Church”, on the Prinsengracht canal. From Dam Square walk 8 minutes west along Raadhuisstraat, crossing three canals, to the Westermarkt square at the foot of the tower.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι τα σπίτια δίπλα στο κανάλι γέρνουν μπροστά. Γιατί οι χτίστες τα έφτιαξαν έτσι επίτηδες;', en: 'The riddle says the houses by the canal lean forward. Why did the builders make them that way on purpose?' },
        options: {
          el: ['Για να βλέπουν καλύτερα οι κάτοικοι το κανάλι', 'Για να ανεβάζουν έπιπλα με σχοινί από έξω χωρίς να χτυπούν στον τοίχο', 'Γιατί ο άνεμος τα έσπρωξε', 'Για να φαίνονται πιο ψηλά'],
          en: ['So the people inside could see the canal better', 'To hoist furniture up from outside with a rope without bumping the wall', 'Because the wind pushed them', 'To make them look taller'],
        },
        correct: 1,
        explanation: {
          el: 'Οι σκάλες μέσα στα σπίτια είναι πολύ στενές και απότομες. Έτσι, κάθε σπίτι έχει ένα δοκάρι με γάντζο στην κορυφή: τα έπιπλα ανεβαίνουν με σχοινί από το παράθυρο, και το σπίτι γέρνει λίγο μπροστά για να μη χτυπούν στην πρόσοψη.',
          en: 'The stairs inside are very narrow and steep. So every house has a beam with a hook at the top: furniture goes up by rope through the window, and the house leans slightly forward so the load does not bump against the front.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε την κορυφή του πύργου. Τι χρώμα έχει το μεγάλο στέμμα;', en: 'Look at the top of the tower. What colour is the big crown?' },
        options: {
          el: ['Μπλε με χρυσό', 'Κόκκινο με άσπρο', 'Πράσινο', 'Ασημί'],
          en: ['Blue and gold', 'Red and white', 'Green', 'Silver'],
        },
        correct: 0,
        explanation: {
          el: 'Το στέμμα είναι μπλε και χρυσό, όπως το στέμμα του αυτοκράτορα Μαξιμιλιανού, που επέτρεψε στο Άμστερνταμ να το βάλει στο έμβλημά του το 1489. Από τότε η πόλη το φοράει με καμάρι, ακόμη και στην κορυφή των πύργων της.',
          en: 'The crown is blue and gold, like the crown of Emperor Maximilian, who allowed Amsterdam to put it on its coat of arms in 1489. Ever since, the city has worn it proudly, even on top of its towers.',
        },
      },
      story: {
        el: 'Πριν από 400 χρόνια το Άμστερνταμ γέμιζε κόσμο και δεν χωρούσε πια μέσα στα τείχη του. Έτσι, από το 1613, οι κάτοικοι έσκαψαν τρία μεγάλα κανάλια σε σχήμα μισοφέγγαρου γύρω από την παλιά πόλη: το Herengracht, το Keizersgracht και το Prinsengracht (Πρίνσενγκραχτ, «το Κανάλι του Πρίγκιπα»). Πάνω στις όχθες τους οι έμποροι έχτισαν ψηλά, στενά σπίτια με γάντζους στην κορυφή. Δίπλα σε αυτό το κανάλι σηκώθηκε το 1631 η Westerkerk, με τον πύργο της να φτάνει τα 85 μέτρα, τον πιο ψηλό της πόλης. Μέσα της θάφτηκε ο μεγάλος ζωγράφος Rembrandt (Ρέμπραντ), αν και κανείς δεν ξέρει ακριβώς πού. Ο δακτύλιος των καναλιών είναι σήμερα Μνημείο Παγκόσμιας Κληρονομιάς, και οι καμπάνες του πύργου παίζουν ακόμη μουσική πάνω από το νερό.',
        en: 'Four hundred years ago Amsterdam was filling up with people and no longer fitted inside its walls. So, from 1613, the citizens dug three great canals in the shape of a half-moon around the old town: the Herengracht, the Keizersgracht and the Prinsengracht, the “Prince\'s Canal”. Along their banks the merchants built tall, narrow houses with hooks at the top. Beside this canal the Westerkerk rose in 1631, its tower reaching 85 metres, the tallest in the city. The great painter Rembrandt was buried inside, although nobody knows exactly where. The ring of canals is now a World Heritage Site, and the bells of the tower still play music over the water.',
      },
      didYouKnow: {
        el: 'Η θέση του τάφου του Rembrandt στη Westerkerk είναι άγνωστη: πέθανε φτωχός το 1669 και θάφτηκε σε νοικιασμένο τάφο, που αργότερα χρησιμοποιήθηκε ξανά. Ο δακτύλιος των καναλιών μπήκε στον κατάλογο της UNESCO το 2010, και η πόλη έχει περισσότερες από 1.000 γέφυρες, περισσότερες από τη Βενετία.',
        en: 'Nobody knows where exactly Rembrandt lies in the Westerkerk: he died poor in 1669 and was buried in a rented grave that was later reused. The canal ring joined the UNESCO World Heritage list in 2010, and the city has more than 1,000 bridges, more than Venice.',
      },
      quiz: [
        {
          q: { el: 'Πότε άρχισαν οι κάτοικοι να σκάβουν τα τρία μεγάλα κανάλια;', en: 'When did the citizens start digging the three great canals?' },
          options: {
            el: ['Πέρυσι', 'Πριν από 100 χρόνια', 'Το 1889', 'Το 1613'],
            en: ['Last year', '100 years ago', 'In 1889', 'In 1613'],
          },
          correct: 3,
          explanation: {
            el: 'Το μεγάλο σκάψιμο άρχισε το 1613, πριν από περισσότερα από 400 χρόνια, γιατί η πόλη είχε γεμίσει κόσμο.',
            en: 'The big dig started in 1613, more than 400 years ago, because the city had filled up with people.',
          },
        },
        {
          q: { el: 'Τι σχήμα κάνουν τα τρία κανάλια γύρω από την παλιά πόλη;', en: 'What shape do the three canals make around the old town?' },
          options: {
            el: ['Τετράγωνο', 'Ίσια γραμμή', 'Μισοφέγγαρο', 'Αστέρι'],
            en: ['A square', 'A straight line', 'A half-moon', 'A star'],
          },
          correct: 2,
          explanation: {
            el: 'Τα κανάλια αγκαλιάζουν την παλιά πόλη σαν μισοφέγγαρο. Δες το στον χάρτη της εφαρμογής!',
            en: 'The canals hug the old town like a half-moon. Look at it on the map in the app!',
          },
        },
        {
          q: { el: 'Ποιος διάσημος ζωγράφος είναι θαμμένος στη Westerkerk;', en: 'Which famous painter is buried in the Westerkerk?' },
          options: {
            el: ['Ο Πικάσο', 'Ο Rembrandt', 'Ο Λεονάρντο ντα Βίντσι', 'Ο Βαν Γκογκ'],
            en: ['Picasso', 'Rembrandt', 'Leonardo da Vinci', 'Van Gogh'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Rembrandt, ο πιο διάσημος ζωγράφος της Ολλανδίας, θάφτηκε εδώ το 1669. Θα ξανασυναντήσουμε τους πίνακές του στο μεγάλο μουσείο!',
            en: 'Rembrandt, the most famous painter of the Netherlands, was buried here in 1669. We will meet his paintings again at the great museum!',
          },
        },
      ],
    },

    // ── 4. Anne Frank House ───────────────────────────────────────────────────
    {
      id: 'anne-frank-house',
      name: { el: 'Το Σπίτι της Anne Frank', en: 'Anne Frank House' },
      emoji: '📔',
      lat: 52.3752,
      lng: 4.8840,
      radiusM: 60,
      riddle: {
        el: 'Πίσω από μια βιβλιοθήκη που ήταν στην πραγματικότητα πόρτα, ένα κορίτσι κρυβόταν για δύο χρόνια και έγραφε τα όνειρά της σε ένα ημερολόγιο. Το σπίτι της είναι απλό και ήσυχο, ακριβώς δίπλα στον πύργο με το στέμμα.',
        en: 'Behind a bookcase that was really a door, a girl hid for two years and wrote her dreams in a diary. Her house is plain and quiet, right next to the tower with the crown.',
      },
      parentHint: {
        el: 'Είναι το Σπίτι της Anne Frank (Άννα Φρανκ), Prinsengracht 263, το αμέσως επόμενο κτίριο μετά την εκκλησία. Από τη Westerkerk περπατήστε ένα λεπτό κατά μήκος του καναλιού· η είσοδος του μουσείου είναι στη γωνία, και τα εισιτήρια κλείνονται μόνο online, συχνά εβδομάδες νωρίτερα.',
        en: 'It is the Anne Frank House, Prinsengracht 263, the building just past the church. From the Westerkerk walk one minute along the canal; the museum entrance is on the corner, and tickets are sold online only, often weeks in advance.',
      },
      unlockQuestion: {
        question: { el: 'Το κορίτσι του γρίφου έγινε διάσημο σε όλον τον κόσμο. Πώς λεγόταν;', en: 'The girl in the riddle became famous all over the world. What was her name?' },
        options: {
          el: ['Χάιντι', 'Η Πίπη η Φακιδομύτη', 'Η Αλίκη', 'Anne Frank'],
          en: ['Heidi', 'Pippi Longstocking', 'Alice', 'Anne Frank'],
        },
        correct: 3,
        explanation: {
          el: 'Η Anne Frank ήταν ένα αληθινό κορίτσι από τη Φρανκφούρτη που μεγάλωσε στο Άμστερνταμ. Οι άλλες τρεις είναι ηρωίδες βιβλίων. Το ημερολόγιό της έχει μεταφραστεί σε περισσότερες από 70 γλώσσες, και στα ελληνικά.',
          en: 'Anne Frank was a real girl from Frankfurt who grew up in Amsterdam. The other three are heroines of storybooks. Her diary has been translated into more than 70 languages, Greek among them.',
        },
      },
      onSite: {
        question: { el: 'Βρες την παλιά πόρτα του σπιτιού πάνω στο κανάλι. Ποιον αριθμό έχει;', en: 'Find the old front door of the house on the canal. What number does it have?' },
        options: {
          el: ['236', '263', '326', '632'],
          en: ['236', '263', '326', '632'],
        },
        correct: 1,
        explanation: {
          el: 'Prinsengracht 263. Από εδώ ακούγονται κάθε τέταρτο οι καμπάνες της Westerkerk. Η Anne έγραψε ότι της άρεσε ο ήχος τους, γιατί την έκανε να νιώθει ότι η κανονική ζωή συνεχίζεται εκεί έξω.',
          en: 'Prinsengracht 263. From here you can hear the Westerkerk bells every quarter of an hour. Anne wrote that she loved their sound, because it made her feel that ordinary life was going on outside.',
        },
      },
      story: {
        el: 'Η Anne Frank γεννήθηκε στη Γερμανία το 1929 και ήρθε μικρή στο Άμστερνταμ με τους γονείς της και την αδερφή της τη Margot. Στα δέκατα τρίτα γενέθλιά της πήρε δώρο ένα ημερολόγιο με καρό εξώφυλλο. Λίγες εβδομάδες αργότερα, το καλοκαίρι του 1942, η οικογένεια αναγκάστηκε να κρυφτεί στα πίσω δωμάτια του κτιρίου όπου δούλευε ο πατέρας της, γιατί ήταν Εβραίοι και εκείνα τα χρόνια του πολέμου οι Εβραίοι κινδύνευαν πολύ. Μια βιβλιοθήκη έκρυβε την πόρτα. Για δύο χρόνια η Anne έγραφε για τους καβγάδες και τα γέλια, για το όνειρό της να γίνει συγγραφέας, και για την καστανιά που έβλεπε από το παράθυρο της σοφίτας. Η Anne δεν επέζησε από τον πόλεμο, αλλά ο πατέρας της, ο Otto, βρήκε το ημερολόγιό της και το εξέδωσε. Το όνειρό της έγινε πραγματικότητα: εκατομμύρια παιδιά διαβάζουν τα λόγια της.',
        en: 'Anne Frank was born in Germany in 1929 and came to Amsterdam as a small girl with her parents and her sister Margot. For her thirteenth birthday she was given a diary with a checked cover. A few weeks later, in the summer of 1942, the family had to hide in the back rooms of the building where her father worked, because they were Jewish, and in those years of war Jewish people were in great danger. A bookcase hid the door. For two years Anne wrote about quarrels and laughter, about her dream of becoming a writer, and about the chestnut tree she could see from the attic window. Anne did not survive the war, but her father Otto found her diary and published it. Her dream came true: millions of children read her words.',
      },
      didYouKnow: {
        el: 'Η Anne έγραψε ότι, παρ\' όλα όσα ζούσε, εξακολουθούσε να πιστεύει πως οι άνθρωποι είναι κατά βάθος καλοί. Η καστανιά που έβλεπε από τη σοφίτα έπεσε το 2010, αλλά βλαστάρια της έχουν φυτευτεί σε σχολεία και πάρκα σε όλον τον κόσμο, ώστε το δέντρο της να ζει ακόμη.',
        en: 'Anne wrote that, in spite of everything she was living through, she still believed people were good at heart. The chestnut tree she watched from the attic fell in 2010, but saplings grown from it have been planted at schools and parks around the world, so her tree lives on.',
      },
      quiz: [
        {
          q: { el: 'Τι έκρυβε την πόρτα προς τα μυστικά δωμάτια;', en: 'What hid the door to the secret rooms?' },
          options: {
            el: ['Μια βιβλιοθήκη', 'Μια κουρτίνα', 'Ένας καθρέφτης', 'Ένα χαλί'],
            en: ['A bookcase', 'A curtain', 'A mirror', 'A carpet'],
          },
          correct: 0,
          explanation: {
            el: 'Μια βιβλιοθήκη που άνοιγε σαν πόρτα. Όποιος έμπαινε στο γραφείο έβλεπε μόνο βιβλία και φακέλους.',
            en: 'A bookcase that swung open like a door. Anyone coming into the office saw only books and files.',
          },
        },
        {
          q: { el: 'Τι ονειρευόταν να γίνει η Anne όταν μεγαλώσει;', en: 'What did Anne dream of becoming when she grew up?' },
          options: {
            el: ['Γιατρός', 'Ζωγράφος', 'Συγγραφέας', 'Καπετάνισσα'],
            en: ['A doctor', 'A painter', 'A writer', 'A ship\'s captain'],
          },
          correct: 2,
          explanation: {
            el: 'Η Anne ήθελε να γίνει συγγραφέας και δημοσιογράφος. Το βιβλίο της έγινε ένα από τα πιο πολυδιαβασμένα στον κόσμο.',
            en: 'Anne wanted to be a writer and a journalist. Her book became one of the most widely read in the world.',
          },
        },
        {
          q: { el: 'Ποιος βρήκε το ημερολόγιο και το εξέδωσε μετά τον πόλεμο;', en: 'Who found the diary and published it after the war?' },
          options: {
            el: ['Η αδερφή της, η Margot', 'Η δασκάλα της', 'Ένας βιβλιοπώλης', 'Ο πατέρας της, ο Otto'],
            en: ['Her sister Margot', 'Her teacher', 'A bookseller', 'Her father Otto'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Otto Frank γύρισε μετά τον πόλεμο, βρήκε τις σελίδες που είχαν φυλάξει οι φίλοι της οικογένειας και τις εξέδωσε το 1947, γιατί ήξερε ότι η Anne ήθελε να διαβαστούν τα λόγια της.',
            en: 'Otto Frank came back after the war, found the pages that family friends had kept safe, and published them in 1947, because he knew Anne wanted her words to be read.',
          },
        },
      ],
    },

    // ── 5. Bloemenmarkt ───────────────────────────────────────────────────────
    {
      id: 'bloemenmarkt',
      name: { el: 'Bloemenmarkt', en: 'Bloemenmarkt' },
      emoji: '🌷',
      lat: 52.3668,
      lng: 4.8910,
      radiusM: 60,
      riddle: {
        el: 'Σε αυτή την αγορά τα λουλούδια δεν φυτρώνουν στο χώμα, αλλά πουλιούνται πάνω στο νερό. Δίπλα της, ένας πύργος που κάποτε έφτιαχνε νομίσματα παίζει μουσική με τις καμπάνες του.',
        en: 'At this market the flowers do not grow in the ground but are sold on the water. Beside it, a tower that once made coins plays tunes with its bells.',
      },
      parentHint: {
        el: 'Είναι η Bloemenmarkt (Μπλούμενμαρκτ, η «Αγορά των Λουλουδιών») στο κανάλι Singel, ανάμεσα στις πλατείες Koningsplein και Muntplein. Από το Σπίτι της Anne Frank περπατήστε περίπου 15 λεπτά νότια κατά μήκος του Prinsengracht ή του Keizersgracht ως το Koningsplein· τα μαγαζάκια απλώνονται από εκεί ως τον Πύργο του Νομισματοκοπείου.',
        en: 'It is the Bloemenmarkt, the “Flower Market”, on the Singel canal between Koningsplein and Muntplein. From the Anne Frank House walk about 15 minutes south along the Prinsengracht or Keizersgracht to Koningsplein; the stalls line the canal from there to the Mint Tower.',
      },
      unlockQuestion: {
        question: { el: 'Ποιο λουλούδι είναι το πιο διάσημο της Ολλανδίας και βασιλεύει σε αυτή την αγορά;', en: 'Which flower is the most famous in the Netherlands and rules this market?' },
        options: {
          el: ['Το τριαντάφυλλο', 'Το ηλιοτρόπιο', 'Η τουλίπα', 'Η μαργαρίτα'],
          en: ['The rose', 'The sunflower', 'The tulip', 'The daisy'],
        },
        correct: 2,
        explanation: {
          el: 'Η τουλίπα! Ήρθε στην Ολλανδία πριν από περισσότερα από 400 χρόνια από τα μέρη της σημερινής Τουρκίας, και οι Ολλανδοί την αγάπησαν τόσο, που σήμερα καλλιεργούν δισεκατομμύρια βολβούς κάθε χρόνο.',
          en: 'The tulip! It arrived in the Netherlands more than 400 years ago from the lands of today\'s Turkey, and the Dutch loved it so much that today they grow billions of bulbs every year.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε προσεκτικά τα μαγαζάκια. Πάνω σε τι στέκονται;', en: 'Look closely at the stalls. What are they standing on?' },
        options: {
          el: ['Σε ρόδες, σαν καρότσια', 'Σε βάρκες δεμένες στο κανάλι', 'Σε μια ξύλινη γέφυρα', 'Σε ψηλά σιδερένια πόδια'],
          en: ['Wheels, like carts', 'Boats moored in the canal', 'A wooden bridge', 'Tall iron legs'],
        },
        correct: 1,
        explanation: {
          el: 'Κάθε μαγαζάκι πατάει σε μια βάρκα (μαούνα) δεμένη στην όχθη του Singel. Παλιά οι κηπουροί έφερναν τα λουλούδια με βάρκες από τα χωράφια και τα πουλούσαν κατευθείαν από το κατάστρωμα!',
          en: 'Every stall stands on a barge moored to the bank of the Singel. Long ago the growers brought their flowers by boat from the fields and sold them straight from the deck!',
        },
      },
      story: {
        el: 'Από το 1862 οι αγρότες έφερναν εδώ με βάρκες τα λουλούδια τους από τα χωράφια έξω από την πόλη και τα πουλούσαν πάνω στο νερό. Η αγορά έμεινε στο κανάλι, και τα μαγαζάκια της στέκονται ακόμη πάνω σε βάρκες. Το πιο διάσημο λουλούδι εδώ είναι η τουλίπα, που ήρθε από τα μέρη της σημερινής Τουρκίας πριν από περισσότερα από 400 χρόνια. Οι Ολλανδοί την αγάπησαν τόσο πολύ, που γύρω στο 1637 τρελάθηκαν κυριολεκτικά: ένας μόνο σπάνιος βολβός μπορούσε να κοστίζει όσο ένα ολόκληρο σπίτι! Μετά οι τιμές έπεσαν απότομα, και πολλοί έμειναν με έναν βολβό και άδεια τσέπη. Ο πύργος στην άκρη, η Munttoren (Μούντορεν, «ο Πύργος του Νομισματοκοπείου»), πήρε το όνομά του επειδή για λίγο καιρό έκοβαν εκεί νομίσματα. Και κάθε λίγο οι καμπάνες του παίζουν μελωδίες.',
        en: 'From 1862 farmers brought their flowers here by boat from the fields outside the city and sold them on the water. The market stayed on the canal, and its stalls still stand on barges. The most famous flower here is the tulip, which came from the lands of today\'s Turkey more than 400 years ago. The Dutch loved it so much that around 1637 they went quite crazy: a single rare bulb could cost as much as a whole house! Then prices crashed, and many people were left with one bulb and an empty purse. The tower at the end, the Munttoren, the “Mint Tower”, got its name because coins were made there for a short while. And every so often its bells play a tune.',
      },
      didYouKnow: {
        el: 'Η Munttoren ήταν αρχικά μέρος μιας μεσαιωνικής πύλης της πόλης. Μετά από πυρκαγιά το 1618 πήρε τη σημερινή κορυφή της, και το καριγιόν της, ένα «πιάνο από καμπάνες», φτιάχτηκε από τους αδερφούς Hemony, τους καλύτερους καμπανοποιούς του 17ου αιώνα. Νομίσματα κόπηκαν εδώ μόνο για δύο περίπου χρόνια, το 1672–1673.',
        en: 'The Munttoren was originally part of a medieval city gate. After a fire in 1618 it got its present spire, and its carillon, a “piano made of bells”, was cast by the Hemony brothers, the finest bell-makers of the 17th century. Coins were minted here for only about two years, in 1672–1673.',
      },
      quiz: [
        {
          q: { el: 'Πάνω σε τι στέκονται τα μαγαζάκια της αγοράς;', en: 'What do the market stalls stand on?' },
          options: {
            el: ['Σε τρένα', 'Σε βάρκες', 'Σε δέντρα', 'Σε ρόδες'],
            en: ['Trains', 'Boats', 'Trees', 'Wheels'],
          },
          correct: 1,
          explanation: {
            el: 'Σε βάρκες δεμένες στο κανάλι, όπως τότε που οι αγρότες έφερναν τα λουλούδια από τα χωράφια μέσω του νερού.',
            en: 'On boats moored in the canal, just as when the farmers brought their flowers from the fields by water.',
          },
        },
        {
          q: { el: 'Πόσο μπορούσε να κοστίζει ένας σπάνιος βολβός τουλίπας γύρω στο 1637;', en: 'How much could a rare tulip bulb cost around 1637?' },
          options: {
            el: ['Όσο ένα ολόκληρο σπίτι', 'Όσο ένα παγωτό', 'Όσο ένα ποδήλατο', 'Τίποτα, τους χάριζαν'],
            en: ['As much as a whole house', 'As much as an ice cream', 'As much as a bicycle', 'Nothing, they gave them away'],
          },
          correct: 0,
          explanation: {
            el: 'Οι πιο σπάνιοι βολβοί πουλήθηκαν για όσο ένα σπίτι στο κανάλι! Μετά οι τιμές έπεσαν. Όταν όλοι θέλουν το ίδιο πράγμα την ίδια στιγμή, οι τιμές τρελαίνονται.',
            en: 'The rarest bulbs sold for the price of a canal house! Then prices crashed. When everyone wants the same thing at the same time, prices go crazy.',
          },
        },
        {
          q: { el: 'Γιατί ο πύργος δίπλα στην αγορά λέγεται «Πύργος του Νομισματοκοπείου»;', en: 'Why is the tower next to the market called the “Mint Tower”?' },
          options: {
            el: ['Γιατί μοιάζει με νόμισμα', 'Γιατί είναι φτιαγμένος από χρυσό', 'Γιατί εκεί πλήρωναν τα εισιτήρια', 'Γιατί για λίγο καιρό έκοβαν εκεί νομίσματα'],
            en: ['Because it looks like a coin', 'Because it is made of gold', 'Because tickets were paid there', 'Because coins were made there for a short while'],
          },
          correct: 3,
          explanation: {
            el: 'Το 1672, μια χρονιά πολέμου, τα νομίσματα δεν μπορούσαν να φτιαχτούν στις συνηθισμένες πόλεις, κι έτσι για λίγο τα έκοβαν εδώ. Το όνομα έμεινε!',
            en: 'In 1672, a year of war, coins could not be made in the usual cities, so for a while they were made here instead. The name stuck!',
          },
        },
      ],
    },

    // ── 6. Magere Brug ────────────────────────────────────────────────────────
    {
      id: 'magere-brug',
      name: { el: 'Magere Brug', en: 'Magere Brug' },
      emoji: '🌉',
      lat: 52.3636,
      lng: 4.9017,
      radiusM: 60,
      riddle: {
        el: 'Μια λευκή ξύλινη γέφυρα ανοίγει στη μέση σαν να χασμουριέται, για να περάσουν οι βάρκες στο ποτάμι που έδωσε το όνομά του στην πόλη. Τη νύχτα λάμπει με εκατοντάδες μικρά φωτάκια.',
        en: 'A white wooden bridge opens in the middle as if it were yawning, to let boats pass along the river that gave the city its name. At night it glows with hundreds of tiny lights.',
      },
      parentHint: {
        el: 'Είναι η Magere Brug (Μάχερε Μπρουχ, η «Αδύνατη Γέφυρα») πάνω στον ποταμό Amstel. Από τη Muntplein ακολουθήστε την όχθη του Amstel προς τα νότια για περίπου 10 λεπτά· η γέφυρα ενώνει την Kerkstraat με τη Nieuwe Kerkstraat.',
        en: 'It is the Magere Brug, the “Skinny Bridge”, over the river Amstel. From Muntplein follow the bank of the Amstel south for about 10 minutes; the bridge links Kerkstraat with Nieuwe Kerkstraat.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι η γέφυρα ανοίγει στη μέση. Γιατί χρειάζεται να ανοίγει;', en: 'The riddle says the bridge opens in the middle. Why does it need to open?' },
        options: {
          el: ['Για να περνούν από κάτω τα καράβια', 'Για να μην περνούν οι γάτες', 'Για να φυσάει ο αέρας', 'Για να τη βάφουν πιο εύκολα'],
          en: ['So that boats can pass underneath', 'To keep cats from crossing', 'To let the wind through', 'To make it easier to paint'],
        },
        correct: 0,
        explanation: {
          el: 'Το Άμστερνταμ είναι γεμάτο κανάλια και βάρκες, και πολλές γέφυρες είναι πολύ χαμηλές. Γι\' αυτό η πόλη έχει δεκάδες γέφυρες που ανοίγουν: τα δύο φύλλα σηκώνονται και το ποτάμι γίνεται δρόμος για τα καράβια.',
          en: 'Amsterdam is full of canals and boats, and many bridges sit very low over the water. So the city has dozens of bridges that open: the two leaves swing up, and the river becomes a road for ships.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τη γέφυρα από την όχθη. Τι υπάρχει ψηλά, πάνω από το άνοιγμα στη μέση;', en: 'Look at the bridge from the bank. What is up high, above the opening in the middle?' },
        options: {
          el: ['Μια καμπάνα', 'Ένα ρολόι', 'Ξύλινα δοκάρια που σηκώνουν τα δύο μισά, σαν τραμπάλα', 'Μια σημαία'],
          en: ['A bell', 'A clock', 'Wooden beams that lift the two halves, like a seesaw', 'A flag'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι τα δοκάρια ζυγοστάθμισης: στη μία άκρη έχουν βαριά αντίβαρα, έτσι το ξύλινο κατάστρωμα σηκώνεται εύκολα, όπως το ένα παιδί σηκώνει το άλλο στην τραμπάλα. Πρόσεξε πώς η λευκή μπογιά ξεχωρίζει πάνω από το σκούρο νερό.',
          en: 'Those are the balance beams: they carry heavy counterweights at one end, so the wooden deck lifts easily, just like one child lifting another on a seesaw. Notice how the white paint stands out against the dark water.',
        },
      },
      story: {
        el: 'Η πρώτη γέφυρα εδώ χτίστηκε το 1691 και ήταν τόσο στενή, που δύο άνθρωποι δύσκολα περνούσαν ο ένας δίπλα στον άλλο· γι\' αυτό την είπαν «Αδύνατη». Ένας θρύλος όμως λέει κάτι άλλο: ότι δύο αδερφές με το επίθετο Mager, που σημαίνει «αδύνατος», έμεναν η μία απέναντι από την άλλη στο ποτάμι και έχτισαν τη γέφυρα για να επισκέπτονται η μία την άλλη. Η ξύλινη γέφυρα που βλέπεις σήμερα φτιάχτηκε το 1934, στο παλιό στιλ. Όταν έρχεται ένα ψηλό καράβι, τα δύο μισά της σηκώνονται και ο ποταμός Amstel ανοίγει σαν πόρτα. Για πολλά χρόνια ο γεφυροφύλακας την άνοιγε γυρίζοντας έναν μηχανισμό με το χέρι· σήμερα τη σηκώνει ένα μοτέρ. Μόνο πεζοί και ποδήλατα περνούν από πάνω της. Και το βράδυ ανάβουν περίπου 1.200 λαμπάκια, κι η γέφυρα γίνεται το πιο φωτογραφημένο στολίδι του ποταμού.',
        en: 'The first bridge here was built in 1691, and it was so narrow that two people could hardly pass each other, which is why it was called “Skinny”. A legend tells it differently: two sisters with the surname Mager, meaning “skinny”, lived on opposite banks of the river and had the bridge built so they could visit each other. The wooden bridge you see today was built in 1934 in the old style. When a tall boat comes, its two halves rise and the river Amstel opens like a door. For many years the bridge keeper cranked it open by hand; today a motor lifts it. Only walkers and cyclists may cross. And in the evening about 1,200 little lights come on, and the bridge becomes the most photographed jewel of the river.',
      },
      didYouKnow: {
        el: 'Η γέφυρα ανοίγει πολλές φορές τη μέρα για τις βάρκες, και οι δύο ξύλινες «πύλες» της με τα αντίβαρα είναι το κλασικό σχέδιο των ολλανδικών κινητών γεφυρών, ίδιο με τη γέφυρα που ζωγράφισε ο Van Gogh στην Arles, στη νότια Γαλλία. Αυτοκίνητα δεν περνούν από πάνω της εδώ και πολλά χρόνια· ανήκει στους πεζούς και στα ποδήλατα.',
        en: 'The bridge opens many times a day for boats, and its two wooden “gates” with counterweights are the classic design of Dutch drawbridges, the very type Van Gogh painted at Arles in the south of France. Cars have not been allowed across it for many years; it belongs to walkers and bikes.',
      },
      quiz: [
        {
          q: { el: 'Πότε χτίστηκε η πρώτη γέφυρα σε αυτό το σημείο;', en: 'When was the first bridge built at this spot?' },
          options: {
            el: ['Το 1934', 'Πέρυσι', 'Το 1889', 'Το 1691'],
            en: ['In 1934', 'Last year', 'In 1889', 'In 1691'],
          },
          correct: 3,
          explanation: {
            el: 'Η πρώτη «Αδύνατη» γέφυρα φτιάχτηκε το 1691. Αυτή που βλέπεις είναι από το 1934, φτιαγμένη στο παλιό στιλ.',
            en: 'The first “Skinny” bridge was built in 1691. The one you see is from 1934, made in the old style.',
          },
        },
        {
          q: { el: 'Ποιοι μπορούν να περάσουν σήμερα από τη γέφυρα;', en: 'Who may cross the bridge today?' },
          options: {
            el: ['Μόνο αυτοκίνητα', 'Πεζοί και ποδήλατα', 'Μόνο τρένα', 'Κανείς, είναι κλειστή'],
            en: ['Only cars', 'Walkers and cyclists', 'Only trains', 'Nobody, it is closed'],
          },
          correct: 1,
          explanation: {
            el: 'Η γέφυρα είναι μόνο για πεζούς και ποδήλατα. Έτσι μπορείς να σταθείς στη μέση της με την ησυχία σου και να κοιτάξεις το ποτάμι.',
            en: 'The bridge is for walkers and cyclists only. So you can stand in the middle in peace and look at the river.',
          },
        },
        {
          q: { el: 'Πώς ανοίγει η γέφυρα σήμερα;', en: 'How does the bridge open today?' },
          options: {
            el: ['Τη σπρώχνουν οι βαρκάρηδες', 'Τη σηκώνουν άλογα', 'Με ένα μοτέρ', 'Δεν ανοίγει ποτέ'],
            en: ['The boatmen push it', 'Horses lift it', 'With a motor', 'It never opens'],
          },
          correct: 2,
          explanation: {
            el: 'Παλιά ο γεφυροφύλακας την άνοιγε με το χέρι, γυρίζοντας έναν μηχανισμό. Σήμερα ένα μοτέρ σηκώνει τα δύο μισά, αλλά τα αντίβαρα βοηθούν ακόμη.',
            en: 'The bridge keeper once cranked it open by hand. Today a motor lifts the two halves, though the counterweights still help.',
          },
        },
      ],
    },

    // ── 7. Rijksmuseum & Museumplein ──────────────────────────────────────────
    {
      id: 'rijksmuseum-museumplein',
      name: { el: 'Rijksmuseum και Museumplein', en: 'Rijksmuseum and Museumplein' },
      emoji: '🖼️',
      lat: 52.3598,
      lng: 4.8853,
      radiusM: 60,
      riddle: {
        el: 'Ένα μουσείο-παλάτι κρύβει στην κοιλιά του ένα μυστικό: ένας δρόμος για ποδήλατα περνάει ακριβώς από τη μέση του! Μπροστά του απλώνεται ένα μεγάλο γρασίδι και μια λιμνούλα που τον χειμώνα παγώνει και γίνεται παγοδρόμιο.',
        en: 'A palace of a museum hides a secret in its belly: a path for bicycles runs right through the middle of it! In front, a big lawn stretches out beside a pond that freezes into a skating rink in winter.',
      },
      parentHint: {
        el: 'Είναι το Rijksmuseum (Ράικσμουζεουμ, το «Εθνικό Μουσείο») και η πλατεία Museumplein. Από τη Magere Brug περπατήστε περίπου 20 λεπτά δυτικά στη Weteringschans, περνώντας το Weteringcircuit, ώσπου να δείτε τους δύο πύργους· η πλατεία με το γρασίδι είναι στην πίσω πλευρά του μουσείου.',
        en: 'It is the Rijksmuseum, the National Museum, and the Museumplein. From the Magere Brug walk about 20 minutes west along Weteringschans, past the Weteringcircuit, until you see the two towers; the lawn is on the far side of the museum.',
      },
      unlockQuestion: {
        question: { el: 'Σε αυτό το μουσείο κρέμεται ο πιο διάσημος πίνακας της Ολλανδίας, η «Νυχτερινή Περίπολος». Ποιος τον ζωγράφισε;', en: 'The most famous painting in the Netherlands, the “Night Watch”, hangs in this museum. Who painted it?' },
        options: {
          el: ['Ο Βαν Γκογκ', 'Ο Rembrandt', 'Ο Πικάσο', 'Ο Μιχαήλ Άγγελος'],
          en: ['Van Gogh', 'Rembrandt', 'Picasso', 'Michelangelo'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Rembrandt τον ζωγράφισε το 1642. Ο πίνακας είναι τεράστιος, ψηλότερος από έναν ενήλικα και μακρύς όσο ένα αυτοκίνητο, και δείχνει φρουρούς της πόλης να ξεκινούν για περίπολο.',
          en: 'Rembrandt painted it in 1642. The picture is enormous, taller than a grown-up and as long as a car, and it shows the city guards setting off on patrol.',
        },
      },
      onSite: {
        question: { el: 'Πήγαινε στη μέση του μουσείου, εκεί που το κτίριο έχει μια μεγάλη σκεπαστή δίοδο. Τι περνάει από μέσα;', en: 'Go to the middle of the museum, where the building has a big covered passage. What goes through it?' },
        options: {
          el: ['Ένα κανάλι με βάρκες', 'Ένα τρένο', 'Ποδήλατα και πεζοί', 'Αυτοκίνητα'],
          en: ['A canal with boats', 'A train', 'Bicycles and walkers', 'Cars'],
        },
        correct: 2,
        explanation: {
          el: 'Ποδήλατα! Η δίοδος υπάρχει από την αρχή, το 1885, τότε για άμαξες. Όταν το μουσείο ανακαινίστηκε, οι ποδηλάτες της πόλης επέμειναν να την κρατήσουν, και κέρδισαν. Κοίτα ψηλά τα χρωματιστά στολίδια της οροφής καθώς περνάς.',
          en: 'Bicycles! The passage has been there since the start, in 1885, when it was meant for carriages. When the museum was renovated, the city\'s cyclists insisted on keeping it, and they won. Look up at the colourful decorations of the vault as you go through.',
        },
      },
      story: {
        el: 'Ο Pierre Cuypers, ο αρχιτέκτονας του σιδηροδρομικού σταθμού, σχεδίασε και αυτό το μουσείο, που άνοιξε το 1885 σαν μια πύλη στην άκρη της πόλης, με έναν δρόμο να περνάει από κάτω του. Μέσα φυλάσσονται οι θησαυροί της Ολλανδίας: πίνακες, μινιατούρες καραβιών, κουκλόσπιτα και ένας τεράστιος πίνακας του Rembrandt, η «Νυχτερινή Περίπολος», με φρουρούς που μοιάζουν να βγαίνουν από τον καμβά. Η ανακαίνιση του μουσείου κράτησε δέκα ολόκληρα χρόνια, ως το 2013. Στο γρασίδι της Museumplein (Μουζέουμπλαϊν, «η Πλατεία των Μουσείων») κάθονται σήμερα οικογένειες για πικνίκ, και τον χειμώνα η λιμνούλα γίνεται παγοδρόμιο. Ακριβώς δίπλα βρίσκεται το μουσείο του Van Gogh (Βαν Γκογκ), με τα ηλιοτρόπιά του. Μια ιδέα από το 1885 φιλοξενεί ακόμη ποδήλατα, παιδιά και αριστουργήματα!',
        en: 'Pierre Cuypers, the architect of the railway station, also designed this museum, which opened in 1885 like a gateway at the edge of the city, with a road running underneath it. Inside are the treasures of the Netherlands: paintings, model ships, dolls\' houses and a giant painting by Rembrandt, the “Night Watch”, with guards who seem to step out of the canvas. The renovation of the museum took ten whole years, until 2013. On the lawn of the Museumplein, the “Museum Square”, families picnic today, and in winter the pond turns into a skating rink. Right next door is the Van Gogh Museum, with his sunflowers. An idea from 1885 still welcomes bicycles, children and masterpieces!',
      },
      didYouKnow: {
        el: 'Η «Νυχτερινή Περίπολος» δεν είναι καν νυχτερινή σκηνή: τα σκούρα βερνίκια την έκαναν να φαίνεται σκοτεινή, και το όνομα έμεινε. Το 1715 ο πίνακας κόπηκε στις άκρες για να χωρέσει σε έναν τοίχο του δημαρχείου· το 2021 το μουσείο αναδημιούργησε τα χαμένα κομμάτια με τη βοήθεια υπολογιστή και ενός παλιού αντιγράφου.',
        en: 'The “Night Watch” is not even a night scene: layers of dark varnish made it look gloomy, and the name stuck. In 1715 the painting was trimmed on all sides to fit a wall in the town hall; in 2021 the museum recreated the missing strips with the help of a computer and an old copy.',
      },
      quiz: [
        {
          q: { el: 'Ποιος σχεδίασε το μουσείο;', en: 'Who designed the museum?' },
          options: {
            el: ['Ο Pierre Cuypers, ο αρχιτέκτονας του σταθμού', 'Ο Rembrandt', 'Ο Van Gogh', 'Ο Renzo Piano'],
            en: ['Pierre Cuypers, the architect of the station', 'Rembrandt', 'Van Gogh', 'Renzo Piano'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Cuypers σχεδίασε πρώτα το μουσείο (1885) και μετά τον σταθμό (1889). Γι\' αυτό μοιάζουν τόσο!',
            en: 'Cuypers designed the museum first (1885) and the station afterwards (1889). That is why they look so alike!',
          },
        },
        {
          q: { el: 'Πόσα χρόνια κράτησε η ανακαίνιση του μουσείου;', en: 'How many years did the museum\'s renovation take?' },
          options: {
            el: ['Ένα', 'Δύο μήνες', 'Πέντε', 'Δέκα'],
            en: ['One', 'Two months', 'Five', 'Ten'],
          },
          correct: 3,
          explanation: {
            el: 'Δέκα χρόνια, ως το 2013. Οι παλιές αίθουσες καθαρίστηκαν και ξαναβρήκαν τα χρώματά τους.',
            en: 'Ten years, until 2013. The old halls were cleaned and got their colours back.',
          },
        },
        {
          q: { el: 'Τι γίνεται η λιμνούλα της πλατείας τον χειμώνα;', en: 'What does the pond on the square become in winter?' },
          options: {
            el: ['Παγοδρόμιο', 'Πισίνα', 'Γήπεδο ποδοσφαίρου', 'Λαχανόκηπος'],
            en: ['A skating rink', 'A swimming pool', 'A football pitch', 'A vegetable garden'],
          },
          correct: 0,
          explanation: {
            el: 'Τον χειμώνα στήνεται εδώ ένα παγοδρόμιο, με τους πύργους του μουσείου για σκηνικό. Οι Ολλανδοί λατρεύουν το πατινάζ στον πάγο!',
            en: 'In winter a skating rink is set up here, with the museum\'s towers as a backdrop. The Dutch love ice skating!',
          },
        },
      ],
    },

    // ── 8. Vondelpark ─────────────────────────────────────────────────────────
    {
      id: 'vondelpark',
      name: { el: 'Vondelpark', en: 'Vondelpark' },
      emoji: '🦜',
      lat: 52.3616,
      lng: 4.8814,
      radiusM: 80,
      riddle: {
        el: 'Το πράσινο σαλόνι της πόλης πήρε το όνομά του από έναν ποιητή που στέκεται μέσα του ως άγαλμα. Ανάμεσα στα δέντρα του τρέχουν ποδήλατα, μυρίζουν τριαντάφυλλα και τσιρίζουν παπαγάλοι που κανείς δεν έφερε επίτηδες.',
        en: 'The city\'s green living room takes its name from a poet who stands inside it as a statue. Among its trees, bicycles whizz past, roses smell sweet and parrots screech that nobody brought here on purpose.',
      },
      parentHint: {
        el: 'Είναι το Vondelpark (Φόντελπαρκ), το μεγαλύτερο πάρκο του κέντρου. Περάστε μέσα από τη δίοδο του μουσείου προς τη Stadhouderskade και περπατήστε 5 λεπτά αριστερά κατά μήκος του δρόμου· η μεγάλη ανατολική πύλη του πάρκου είναι στα αριστερά σας.',
        en: 'It is the Vondelpark, the biggest park in the city centre. Go through the museum passage to the Stadhouderskade side and walk 5 minutes to the left along the road; the park\'s big eastern gate is on your left.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι στο πάρκο ζουν παπαγάλοι που κανείς δεν έφερε επίτηδες. Πώς βρέθηκαν, λοιπόν, παπαγάλοι σε μια βόρεια πόλη με κρύους χειμώνες;', en: 'The riddle says parrots live in the park that nobody brought on purpose. So how did parrots end up in a northern city with cold winters?' },
        options: {
          el: ['Ήρθαν πετώντας από την Αφρική', 'Τους έφερε ο ποιητής', 'Φυτρώνουν στα δέντρα', 'Δραπέτευσαν από κλουβιά, και τα εγγόνια τους ζουν τώρα ελεύθερα'],
          en: ['They flew here from Africa', 'The poet brought them', 'They grow on trees', 'They escaped from cages, and their grandchildren now live wild'],
        },
        correct: 3,
        explanation: {
          el: 'Είναι μικροί πράσινοι παπαγάλοι με ένα λεπτό δαχτυλίδι στον λαιμό. Πριν από περίπου 50 χρόνια μερικοί δραπέτευσαν ή αφέθηκαν ελεύθεροι, και σήμερα χιλιάδες ζουν στα πάρκα του Άμστερνταμ. Αντέχουν το κρύο, αρκεί να βρίσκουν φαγητό!',
          en: 'They are small green parakeets with a thin ring around the neck. About 50 years ago a few escaped or were set free, and today thousands live in Amsterdam\'s parks. They cope with the cold as long as they can find food!',
        },
      },
      onSite: {
        question: { el: 'Άκου και κοίταξε ψηλά στα δέντρα. Τι χρώμα έχουν οι παπαγάλοι του πάρκου;', en: 'Listen and look up into the trees. What colour are the park\'s parrots?' },
        options: {
          el: ['Κόκκινο', 'Μπλε', 'Πράσινο', 'Άσπρο'],
          en: ['Red', 'Blue', 'Green', 'White'],
        },
        correct: 2,
        explanation: {
          el: 'Πράσινοι σαν τα φύλλα, με κόκκινο ράμφος και μια λεπτή γραμμή στον λαιμό. Πετούν γρήγορα και τσιρίζουν δυνατά, γι\' αυτό συνήθως τους ακούς πριν τους δεις.',
          en: 'Green like the leaves, with a red beak and a thin ring around the neck. They fly fast and screech loudly, so you usually hear them before you see them.',
        },
      },
      story: {
        el: 'Το 1865 μερικοί πλούσιοι κάτοικοι του Άμστερνταμ αποφάσισαν ότι η πόλη χρειαζόταν ένα μέρος για βόλτες με τα πόδια και με τα άλογα. Αγόρασαν υγρά λιβάδια έξω από την πόλη και ζήτησαν από έναν αρχιτέκτονα κήπων, τον Jan David Zocher, να σχεδιάσει ένα πάρκο με λιμνούλες που στριφογυρίζουν, μεγάλα γρασίδια και μονοπάτια που κρύβουν εκπλήξεις. Δύο χρόνια αργότερα έστησαν στο πάρκο ένα άγαλμα του Joost van den Vondel (Γιοστ φαν ντεν Φόντελ), του μεγαλύτερου ποιητή της Ολλανδίας, και το πάρκο πήρε το όνομά του. Σήμερα έχει 47 εκτάρια, δηλαδή περίπου 65 γήπεδα ποδοσφαίρου, έναν κήπο με τριαντάφυλλα, ένα υπαίθριο θέατρο με δωρεάν παραστάσεις το καλοκαίρι, και πράσινους παπαγάλους στα δέντρα. Η πόλη μεγάλωσε γύρω του, και τώρα το πάρκο βρίσκεται στο κέντρο της, όπως το Central Park στη Νέα Υόρκη.',
        en: 'In 1865 some wealthy citizens of Amsterdam decided the city needed a place for walks and horse rides. They bought wet meadows outside the town and asked a garden architect, Jan David Zocher, to design a park with winding ponds, wide lawns and paths that hide surprises. Two years later a statue of Joost van den Vondel, the greatest poet of the Netherlands, was placed in the park, and the park took his name. Today it covers 47 hectares, about 65 football pitches, with a rose garden, an open-air theatre with free shows in summer and green parrots in the trees. The city grew all around it, so now the park sits in the middle, just like Central Park in New York.',
      },
      didYouKnow: {
        el: 'Το πάρκο βρίσκεται κάτω από το επίπεδο της θάλασσας, πάνω σε μαλακό τυρφώδες έδαφος, και βουλιάζει λίγο κάθε χρόνο· γι\' αυτό στις αρχές του 21ου αιώνα ανακαινίστηκε ολόκληρο, με νέα αποστράγγιση. Δέχεται περίπου 10 εκατομμύρια επισκέψεις τον χρόνο, και από το 1996 είναι επίσημα εθνικό μνημείο.',
        en: 'The park lies below sea level on soft peaty ground and sinks a little every year; that is why it was completely renovated in the early 21st century with new drainage. It gets about 10 million visits a year, and since 1996 it has officially been a national monument.',
      },
      quiz: [
        {
          q: { el: 'Από ποιον πήρε το όνομά του το πάρκο;', en: 'Who is the park named after?' },
          options: {
            el: ['Από έναν βασιλιά', 'Από έναν ποιητή', 'Από έναν ζωγράφο', 'Από έναν παπαγάλο'],
            en: ['A king', 'A poet', 'A painter', 'A parrot'],
          },
          correct: 1,
          explanation: {
            el: 'Από τον Joost van den Vondel, τον μεγαλύτερο ποιητή της Ολλανδίας. Το άγαλμά του στήθηκε στο πάρκο το 1867.',
            en: 'After Joost van den Vondel, the greatest poet of the Netherlands. His statue was placed in the park in 1867.',
          },
        },
        {
          q: { el: 'Πόσο μεγάλο είναι περίπου το πάρκο;', en: 'Roughly how big is the park?' },
          options: {
            el: ['Όσο ένα γήπεδο ποδοσφαίρου', 'Όσο μια αυλή σχολείου', 'Όσο 65 γήπεδα ποδοσφαίρου', 'Όσο μια ολόκληρη χώρα'],
            en: ['One football pitch', 'A school playground', 'About 65 football pitches', 'A whole country'],
          },
          correct: 2,
          explanation: {
            el: '47 εκτάρια, περίπου 65 γήπεδα ποδοσφαίρου. Χρειάζεσαι σχεδόν μία ώρα για να το περπατήσεις από άκρη σε άκρη και πίσω.',
            en: '47 hectares, about 65 football pitches. It takes almost an hour to walk from one end to the other and back.',
          },
        },
        {
          q: { el: 'Τι μπορείς να δεις δωρεάν στο πάρκο το καλοκαίρι;', en: 'What can you watch for free in the park in summer?' },
          options: {
            el: ['Παραστάσεις σε υπαίθριο θέατρο', 'Έναν ζωολογικό κήπο', 'Αγώνες αυτοκινήτων', 'Ένα τσίρκο με ελέφαντες'],
            en: ['Shows at the open-air theatre', 'A zoo', 'Car races', 'A circus with elephants'],
          },
          correct: 0,
          explanation: {
            el: 'Το υπαίθριο θέατρο του πάρκου ανεβάζει δωρεάν μουσική, χορό και θέατρο κάθε καλοκαίρι, εδώ και δεκαετίες.',
            en: 'The park\'s open-air theatre puts on free music, dance and plays every summer, and has done for decades.',
          },
        },
      ],
    },

    // ── 9. NEMO ───────────────────────────────────────────────────────────────
    {
      id: 'nemo-science-museum',
      name: { el: 'NEMO', en: 'NEMO Science Museum' },
      emoji: '🚢',
      lat: 52.3741,
      lng: 4.9123,
      radiusM: 60,
      riddle: {
        el: 'Ένα τεράστιο πράσινο καράβι μοιάζει να βγαίνει από το νερό του λιμανιού, αλλά δεν ταξιδεύει ποτέ. Το κατάστρωμά του είναι μια πλατεία με σκαλιά, και όποιος ανέβει βλέπει ολόκληρη την πόλη χωρίς εισιτήριο.',
        en: 'A giant green ship seems to rise out of the harbour water, but it never sails. Its deck is a square made of steps, and whoever climbs it sees the whole city without a ticket.',
      },
      parentHint: {
        el: 'Είναι το NEMO (Νέμο), το μουσείο επιστήμης, με τη δωρεάν ταράτσα. Από την ανατολική πύλη του Vondelpark περπατήστε 5 λεπτά ως τη Leidseplein και πάρτε τραμ ως τον σταθμό Centraal (η γραμμή 2 πηγαίνει εκεί)· από τον σταθμό περπατήστε 10 λεπτά ανατολικά κατά μήκος του νερού, περνώντας τη μεγάλη δημόσια βιβλιοθήκη, ως το πράσινο κτίριο.',
        en: 'It is NEMO, the science museum, with its free roof terrace. From the park\'s eastern gate walk 5 minutes to Leidseplein and take a tram to Centraal Station (line 2 goes there); from the station walk 10 minutes east along the water, past the big public library, to the green building.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το πράσινο καράβι βγαίνει από το νερό. Κάτω από αυτό περνάει κάτι από τη μια μεριά του λιμανιού στην άλλη. Τι;', en: 'The riddle says the green ship rises out of the water. Something passes underneath it from one side of the harbour to the other. What?' },
        options: {
          el: ['Μια γέφυρα', 'Ένα υποβρύχιο', 'Μια σήραγγα για αυτοκίνητα κάτω από το νερό', 'Ένα ποτάμι'],
          en: ['A bridge', 'A submarine', 'A tunnel for cars under the water', 'A river'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι η σήραγγα του IJ, που άνοιξε το 1968 και περνάει κάτω από το λιμάνι ως το Amsterdam-Noord. Ο αρχιτέκτονας Renzo Piano (Ρέντσο Πιάνο) σχεδίασε το κτίριο σαν καθρέφτη της σήραγγας: εκείνη βουτάει στο νερό, το κτίριο ανεβαίνει από αυτό.',
          en: 'It is the IJ tunnel, opened in 1968, which runs under the harbour to Amsterdam-Noord. The architect Renzo Piano designed the building as the tunnel\'s mirror image: the tunnel dives down into the water, and the building rises up out of it.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τους τοίχους του κτιρίου από κοντά. Τι χρώμα έχουν;', en: 'Look closely at the walls of the building. What colour are they?' },
        options: {
          el: ['Πράσινο', 'Κόκκινο', 'Άσπρο', 'Μαύρο'],
          en: ['Green', 'Red', 'White', 'Black'],
        },
        correct: 0,
        explanation: {
          el: 'Είναι ντυμένο με χαλκό, που στην αρχή ήταν καφέ-χρυσός. Ο αέρας και η βροχή τον έκαναν σιγά σιγά πράσινο, όπως το Άγαλμα της Ελευθερίας στη Νέα Υόρκη. Η φύση ζωγράφισε το κτίριο μόνη της!',
          en: 'It is covered in copper, which was brownish-gold at first. Air and rain slowly turned it green, just like the Statue of Liberty in New York. Nature painted the building all by itself!',
        },
      },
      story: {
        el: 'Το 1997 ένας διάσημος Ιταλός αρχιτέκτονας, ο Renzo Piano, έχτισε πάνω από την είσοδο της σήραγγας του λιμανιού ένα κτίριο που μοιάζει με τεράστιο καράβι έτοιμο να αποπλεύσει. Το έντυσε με χαλκό, που με τα χρόνια έγινε πράσινος. Μέσα του βρίσκεται το NEMO, το μεγαλύτερο μουσείο επιστήμης της Ολλανδίας, όπου τα παιδιά δεν κοιτάζουν απλώς, αλλά φυσούν σαπουνόφουσκες μεγάλες όσο ένας άνθρωπος και ξεκινούν αλυσιδωτές αντιδράσεις. Το πιο ωραίο όμως είναι το «κατάστρωμα»: μια ταράτσα με σκαλιά, ανοιχτή σε όλους δωρεάν, απ\' όπου βλέπεις τον σταθμό, τα καράβια και τις στέγες της πόλης. Το καλοκαίρι τρέχει εκεί νερό και τα παιδιά παίζουν με μικρά φράγματα και κανάλια, όπως κάνουν οι Ολλανδοί εδώ και αιώνες. Οι μεγάλες ιδέες ξεκινούν από την περιέργεια!',
        en: 'In 1997 a famous Italian architect, Renzo Piano, built a building over the entrance to the harbour tunnel that looks like a huge ship about to set sail. He covered it in copper, which turned green over the years. Inside is NEMO, the biggest science museum in the Netherlands, where children do not just look, but blow soap bubbles as big as themselves and set off chain reactions. The best part, though, is the “deck”: a roof of steps, open to everyone for free, from which you can see the station, the ships and the roofs of the city. In summer water runs across it and children play with little dams and canals, just as the Dutch have done for centuries. Big ideas start with curiosity!',
      },
      didYouKnow: {
        el: 'Η ταράτσα του NEMO είναι μια δημόσια πλατεία στον ουρανό, και η κλίση της είναι ίδια με την κλίση της σήραγγας από κάτω, μόνο ανάποδα. Το ίδιο το μουσείο ξεκίνησε το 1923 ως «Μουσείο της Εργασίας» και μετακόμισε σε αυτό το κτίριο 74 χρόνια αργότερα.',
        en: 'The roof of NEMO is a public square in the sky, and its slope matches the slope of the tunnel underneath, only upside down. The museum itself began in 1923 as the “Museum of Labour” and moved into this building 74 years later.',
      },
      quiz: [
        {
          q: { el: 'Ποιος σχεδίασε το πράσινο κτίριο;', en: 'Who designed the green building?' },
          options: {
            el: ['Ο Pierre Cuypers', 'Ο Rembrandt', 'Ο Joost van den Vondel', 'Ο Renzo Piano'],
            en: ['Pierre Cuypers', 'Rembrandt', 'Joost van den Vondel', 'Renzo Piano'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Ιταλός αρχιτέκτονας Renzo Piano, που βοήθησε να σχεδιαστεί και το διάσημο Κέντρο Πομπιντού στο Παρίσι.',
            en: 'The Italian architect Renzo Piano, who also helped design the famous Pompidou Centre in Paris.',
          },
        },
        {
          q: { el: 'Με τι είναι ντυμένο το κτίριο;', en: 'What is the building covered in?' },
          options: {
            el: ['Με ξύλο', 'Με χαλκό που έγινε πράσινος', 'Με πράσινο γυαλί', 'Με φύλλα δέντρων'],
            en: ['Wood', 'Copper that turned green', 'Green glass', 'Tree leaves'],
          },
          correct: 1,
          explanation: {
            el: 'Χαλκός: ένα μέταλλο που στην αρχή είναι καφέ-χρυσό και με τον καιρό πρασινίζει από τον αέρα και τη βροχή.',
            en: 'Copper: a metal that starts out brownish-gold and turns green over time from air and rain.',
          },
        },
        {
          q: { el: 'Τι μπορούν να κάνουν οι επισκέπτες στην ταράτσα δωρεάν;', en: 'What can visitors do on the roof for free?' },
          options: {
            el: ['Να κολυμπήσουν στο λιμάνι', 'Να πάρουν ένα καράβι', 'Να δουν την πόλη από ψηλά και το καλοκαίρι να παίξουν με νερό', 'Να μπουν στη σήραγγα'],
            en: ['Swim in the harbour', 'Catch a ship', 'See the city from above and, in summer, play with water', 'Walk into the tunnel'],
          },
          correct: 2,
          explanation: {
            el: 'Η ταράτσα είναι ανοιχτή σε όλους. Το καλοκαίρι τρέχει νερό στα σκαλιά της και τα παιδιά χτίζουν μικρά φράγματα, όπως οι Ολλανδοί μηχανικοί!',
            en: 'The roof is open to everyone. In summer water runs down its steps and children build little dams, just like Dutch engineers!',
          },
        },
      ],
    },

    // ── 10. De Waag ───────────────────────────────────────────────────────────
    {
      id: 'de-waag',
      name: { el: 'De Waag', en: 'De Waag' },
      emoji: '⚖️',
      lat: 52.3726,
      lng: 4.9002,
      radiusM: 40,
      riddle: {
        el: 'Το πιο παλιό κτίριο της πόλης που δεν είναι εκκλησία μοιάζει με μικρό κάστρο που φοράει μυτερά καπέλα. Κάποτε ήταν πύλη στα τείχη, και μετά έγινε μια γιγάντια ζυγαριά για βαριά εμπορεύματα.',
        en: 'The oldest building in town that is not a church looks like a little castle wearing pointed hats. Once it was a gate in the city walls, and later it became a giant set of scales for heavy goods.',
      },
      parentHint: {
        el: 'Είναι η De Waag (Ντε Βάαχ, «η Ζυγαριά») στην πλατεία Nieuwmarkt. Από το NEMO περπατήστε περίπου 15 λεπτά: γυρίστε προς τον σταθμό κατά μήκος του νερού, μετά στρίψτε αριστερά στο κανάλι Geldersekade, που οδηγεί κατευθείαν στην πλατεία· ο σταθμός του μετρό Nieuwmarkt είναι ακριβώς δίπλα.',
        en: 'It is De Waag, the “Weigh House”, on the Nieuwmarkt square. From NEMO walk about 15 minutes: head back towards the station along the water, then turn left down the Geldersekade canal, which leads straight to the square; the Nieuwmarkt metro stop is right beside it.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το κτίριο ήταν πύλη στα τείχη. Γιατί οι παλιές πόλεις είχαν τείχη με πύλες;', en: 'The riddle says the building was a gate in the walls. Why did old cities have walls with gates?' },
        options: {
          el: ['Για να μη βλέπουν τη θάλασσα', 'Για να προστατεύονται και να ελέγχουν ποιος μπαίνει', 'Για να κρεμούν σημαίες', 'Για να κρατούν τα κανάλια στη θέση τους'],
          en: ['To hide the sea', 'To protect themselves and check who came in', 'To hang flags', 'To keep the canals in place'],
        },
        correct: 1,
        explanation: {
          el: 'Στον Μεσαίωνα τα τείχη προστάτευαν την πόλη, και οι πύλες έκλειναν τη νύχτα. Αυτή η πύλη χτίστηκε το 1488· όταν η πόλη μεγάλωσε πέρα από τα τείχη, η πύλη έμεινε στη μέση της και βρήκε καινούργια δουλειά.',
          en: 'In the Middle Ages, walls protected the city and the gates were shut at night. This gate was built in 1488; when the city grew beyond its walls, the gate ended up in the middle of town and found a new job.',
        },
      },
      onSite: {
        question: { el: 'Κάνε τον γύρο του κτιρίου και μέτρησε τους πύργους με τις μυτερές στέγες. Πόσους βρήκες;', en: 'Walk around the building and count the towers with pointed roofs. How many did you find?' },
        options: {
          el: ['Έναν', 'Δύο', 'Τρεις', 'Περισσότερους από τέσσερις'],
          en: ['One', 'Two', 'Three', 'More than four'],
        },
        correct: 3,
        explanation: {
          el: 'Έχει αρκετούς στρογγυλούς πυργίσκους γύρω γύρω και έναν ψηλότερο στη μέση. Όταν ήταν πύλη, από τους πύργους οι φρουροί έβλεπαν ποιος πλησιάζει στον δρόμο έξω από τα τείχη.',
          en: 'It has several round turrets around the outside and a taller tower in the middle. When it was a gate, guards watched from the towers to see who was coming along the road outside the walls.',
        },
      },
      story: {
        el: 'Το 1488, όταν το Άμστερνταμ ήταν ακόμη μια μικρή πόλη με τείχη, χτίστηκε εδώ η Sint Antoniespoort (Σιντ Αντόνισπορτ, η «Πύλη του Αγίου Αντωνίου»). Οι αγρότες από τα χωριά περνούσαν από αυτήν με κάρα γεμάτα τυριά και λαχανικά. Εκατό χρόνια αργότερα η πόλη είχε απλωθεί πολύ πιο πέρα, τα τείχη γκρεμίστηκαν, και η πύλη βρέθηκε ξαφνικά στη μέση μιας πλατείας. Οι Ολλανδοί δεν πετάνε τίποτα: το 1617 την έκαναν Waag, δηλαδή δημόσια ζυγαριά, όπου ζύγιζαν τα εμπορεύματα για να είναι όλοι σίγουροι ότι κανείς δεν κλέβει. Στους πάνω ορόφους στεγάζονταν οι συντεχνίες, ανάμεσά τους οι χειρουργοί, που έκαναν εκεί τα μαθήματά τους. Ο Rembrandt ζωγράφισε ένα από αυτά τα μαθήματα το 1632, και ο πίνακας τον έκανε διάσημο. Σήμερα γύρω από την παλιά πύλη στήνεται ακόμη αγορά, όπως πριν από 500 χρόνια.',
        en: 'In 1488, when Amsterdam was still a small walled town, the Sint Antoniespoort, “Saint Anthony\'s Gate”, was built here. Farmers from the villages came through it with carts full of cheese and vegetables. A hundred years later the city had spread far beyond, the walls came down, and the gate suddenly stood in the middle of a square. The Dutch never waste anything: in 1617 they turned it into the Waag, a public weigh house, where goods were weighed so that everyone could be sure nobody was cheating. The upper floors housed the guilds, among them the surgeons, who held their lessons there. Rembrandt painted one of those lessons in 1632, and the picture made him famous. Today a market is still held around the old gate, just as it was 500 years ago.',
      },
      didYouKnow: {
        el: 'Ο πίνακας του Rembrandt «Το Μάθημα Ανατομίας του Δρ. Tulp» δεν βρίσκεται στο Άμστερνταμ αλλά στο μουσείο Mauritshuis της Χάγης. Στον κεντρικό πύργο της Waag, όπου ήταν το αμφιθέατρο των χειρουργών, σώζεται ακόμη η ζωγραφισμένη οροφή με τα οικόσημα των μελών της συντεχνίας.',
        en: 'Rembrandt\'s “Anatomy Lesson of Dr Tulp” is not in Amsterdam but at the Mauritshuis museum in The Hague. In the central tower of the Waag, where the surgeons had their lecture theatre, the painted ceiling with the coats of arms of the guild members still survives.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν το κτίριο όταν χτίστηκε το 1488;', en: 'What was the building when it was built in 1488?' },
          options: {
            el: ['Μια εκκλησία', 'Ένα σχολείο', 'Μια πύλη στα τείχη της πόλης', 'Ένα μουσείο'],
            en: ['A church', 'A school', 'A gate in the city walls', 'A museum'],
          },
          correct: 2,
          explanation: {
            el: 'Ήταν η Πύλη του Αγίου Αντωνίου, μία από τις εισόδους της τειχισμένης πόλης.',
            en: 'It was Saint Anthony\'s Gate, one of the entrances to the walled town.',
          },
        },
        {
          q: { el: 'Τι δουλειά έκανε το κτίριο από το 1617;', en: 'What job did the building do from 1617?' },
          options: {
            el: ['Ζύγιζε τα εμπορεύματα', 'Φύλαγε τα ποδήλατα', 'Έκοβε νομίσματα', 'Πουλούσε λουλούδια'],
            en: ['It weighed goods', 'It stored bicycles', 'It made coins', 'It sold flowers'],
          },
          correct: 0,
          explanation: {
            el: 'Έγινε η δημόσια ζυγαριά της πόλης. Έτσι αγοραστές και πωλητές ήξεραν ότι το βάρος ήταν σωστό.',
            en: 'It became the city\'s public weigh house. That way buyers and sellers knew the weight was fair.',
          },
        },
        {
          q: { el: 'Ποιος ζωγράφισε τους χειρουργούς στο μάθημά τους το 1632;', en: 'Who painted the surgeons at their lesson in 1632?' },
          options: {
            el: ['Ο Van Gogh', 'Ο Rembrandt', 'Ο Renzo Piano', 'Ο Pierre Cuypers'],
            en: ['Van Gogh', 'Rembrandt', 'Renzo Piano', 'Pierre Cuypers'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Rembrandt, που ήταν τότε μόλις 26 ετών. Ο πίνακας τον έκανε τον πιο περιζήτητο ζωγράφο του Άμστερνταμ.',
            en: 'Rembrandt, who was only 26 at the time. The painting made him the most sought-after painter in Amsterdam.',
          },
        },
      ],
    },
  ],
};
