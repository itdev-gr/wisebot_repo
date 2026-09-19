/**
 * WiseBot World — Porto.
 *
 * Thirteen places, three of them museums with an interior. Like `paris.ts`, this city
 * was built by conversion rather than by fresh writing: the Explorer product on
 * `origin/main` holds ten spots for Porto, and their text is the raw material here,
 * reshaped to this module's lengths and voice.
 *
 * Every coordinate is copied from `data/world/coords/porto.json`, field for field.
 * Nothing graded `D`. No place claims an `entrance`: no door in Porto has been
 * measured, so every point is the centroid or area the resolver actually reports.
 *
 * The judgement calls, all of them:
 *
 *  - **One Explorer spot dropped: Praça da Ribeira.** Explorer pins the square itself,
 *    which sits between the Casa do Infante and the Palácio da Bolsa and would fail the
 *    separation audit as an undeclared neighbour of both. Its content is the best in the
 *    Explorer file, so it is not lost: the rabelo boats and the port-wine barrels are
 *    told at the Luís I bridge and at the Serra do Pilar, and the river quay where
 *    everything was landed and taxed is told at the Casa do Infante, which is the
 *    building that actually did the taxing.
 *  - **One Explorer spot split into two places.** Explorer treats the Carmo and the
 *    Carmelitas as a single stop. They are two churches, built a century and a half
 *    apart for two different communities, and the whole point of the pair is that they
 *    are two. They are 15 m apart, which is why the seed declares them in
 *    `adjacentPairs`.
 *  - **Three places added, all museums.** Explorer has no museum model at all, so the
 *    Casa do Infante, the Museu do Carro Eléctrico and the World of Discoveries were
 *    added to give this city an inside. Their coordinates were resolved by the same
 *    pipeline as the rest.
 *  - **No pin needed re-seeding.** The two problems the owner found by eye — the two
 *    Carmo churches landing on top of each other, and Bolhão two streets off — were
 *    already fixed in the seed before this file was written.
 *
 * Five places grade `A` and eight grade `B`; none grades `C` and none grades `D`. Every
 * `B` here is a `B` for the same reason: the Wikidata item has no Wikipedia article for
 * the resolver to cross-check against, so only two sources answer — or, for São Bento,
 * the Luís I bridge and the Clérigos tower, the third source lands more than 30 m away
 * because the place is long and its sources point at different ends of it. The Palácio
 * de Cristal is the one `area` anchor: it is a park, not a door.
 *
 * On the discoveries: the ships that left this river brought back spices and gold, and
 * they also carried people who had been captured and sold. That is said once, plainly,
 * in the World of Discoveries story, and it is not dwelt on. Leaving it out would make
 * the rest of the story a lie.
 *
 * `el` and `en` only. The other four arrive as overlay files.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------- são bento
  {
    id: 'porto-sao-bento',
    cityId: 'porto',
    emoji: '🚂',
    category: 'art',
    difficulty: 1,

    name: { el: 'Ο σταθμός Σάο Μπέντο', en: 'São Bento station' },
    tagline: {
      el: 'Είκοσι χιλιάδες ζωγραφισμένα πλακάκια περιμένουν μαζί σου',
      en: 'Twenty thousand painted tiles wait for the train with you',
    },
    story: {
      el:
        'Οι περισσότεροι σιδηροδρομικοί σταθμοί είναι μέρη όπου περιμένεις. Αυτός είναι ' +
        'μέρος όπου κοιτάς. Χτίστηκε πάνω στο οικόπεδο ενός παλιού μοναστηριού, του Σάο ' +
        'Μπέντο ντε Αβέ-Μαρία, και από εκεί κράτησε το όνομά του. Οι άνθρωποι του Πόρτο ' +
        'αποφάσισαν ότι όποιος περιμένει τρένο αξίζει να έχει κάτι να κοιτάξει, και ' +
        'ανέθεσαν τους τοίχους σε έναν ζωγράφο, τον Ζορζ Κολάσο. Δούλεψε πάνω από δέκα ' +
        'χρόνια και το 1916 η αίθουσα ήταν έτοιμη: περίπου είκοσι χιλιάδες ζωγραφισμένα ' +
        'πλακάκια, από το πάτωμα ως το ταβάνι. Δεν είναι διακόσμηση, είναι εικόνες με ' +
        'ιστορίες μέσα τους. Ψηλά θα βρεις ιππότες σε μάχη, έναν βασιλιά που μπαίνει στην ' +
        'πόλη με τη βασίλισσά του, αγρότες που μαζεύουν τη σοδειά, και μια χρωματιστή ' +
        'λωρίδα που δείχνει πώς ταξίδευαν οι άνθρωποι στους αιώνες, από τα βόδια ως τον ' +
        'ατμό. Αυτά τα πλακάκια η Πορτογαλία τα λέει αζουλέζους και τα έχει σε τοίχους ' +
        'παντού. Πουθενά αλλού όμως δεν είναι είκοσι χιλιάδες σε μια αίθουσα αναμονής.',
      en:
        'Most railway stations are somewhere you wait. This one is somewhere you look. It ' +
        'was built on the ground of an old convent, São Bento de Avé-Maria, and it kept the ' +
        'convent’s name. The people of Porto decided that anyone waiting for a train ' +
        'deserved something worth staring at, so they handed the walls to a painter called ' +
        'Jorge Colaço. He worked on them for more than ten years, and in 1916 the entrance ' +
        'hall was finished: about twenty thousand painted tiles, running from the floor to ' +
        'the ceiling. They are not decoration. They are pictures with stories inside them. ' +
        'Look up and you will find knights in a battle, a king riding into the city with ' +
        'his queen beside him, farmers bringing in the harvest, and a band of colour near ' +
        'the top showing how people travelled through the centuries, from oxen to steam. ' +
        'Portugal calls these painted tiles azulejos and puts them on walls everywhere. ' +
        'Nowhere else are there twenty thousand of them in a waiting room.',
    },
    facts: [
      {
        el: 'Ο Ζορζ Κολάσο ζωγράφισε περίπου 20.000 πλακάκια. Οι τοίχοι τελείωσαν το 1916.',
        en: 'Jorge Colaço painted about 20,000 tiles. The walls were finished in 1916.',
      },
      {
        el: 'Ο σταθμός στέκεται εκεί όπου ήταν το μοναστήρι Σάο Μπέντο ντε Αβέ-Μαρία.',
        en: 'The station stands where the convent of São Bento de Avé-Maria used to be.',
      },
      {
        el: 'Ο βασιλιάς Κάρλος Α΄ έβαλε τον θεμέλιο λίθο του σταθμού το 1900.',
        en: 'King Carlos I laid the foundation stone of the station in 1900.',
      },
    ],
    location: {
      lat: 41.14542,
      lng: -8.6104,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q579250', deltaM: 0 },
        { kind: 'osm', ref: 'node/5391639447', deltaM: 54 },
        { kind: 'wikipedia', ref: 'São Bento railway station', deltaM: 16 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el:
          'Η μεγάλη πόρτα βλέπει στην πλατεία Πράσα ντε Αλμέιντα Γκαρέτ, στο κάτω άκρο της ' +
          'λεωφόρου Αλιάδος. Μπες και σταμάτα αμέσως: η αίθουσα με τα πλακάκια είναι η πρώτη.',
        en:
          'The big door faces Praça de Almeida Garrett, at the bottom of Avenida dos ' +
          'Aliados. Walk in and stop at once: the tiled hall is the first room.',
      },
    },
    question: {
      q: {
        el: 'Γιατί σκέπασαν με ζωγραφισμένα πλακάκια μια αίθουσα σταθμού;',
        en: 'Why did they cover a station hall in painted tiles?',
      },
      answers: [
        {
          el: 'Για να έχει κάτι να κοιτάζει όποιος περιμένει το τρένο του',
          en: 'To give travellers waiting for a train something to stare at',
        },
        {
          el: 'Για να μη μαυρίζει η πέτρα από τον καπνό των ατμομηχανών',
          en: 'To stop the smoke of the steam engines blackening the stone',
        },
        {
          el: 'Για να βρίσκουν οι επιβάτες πιο εύκολα τη σωστή αποβάθρα',
          en: 'To help the passengers find the right platform more easily',
        },
        {
          el: 'Γιατί τα πλακάκια ήταν ο φθηνότερος τρόπος',
          en: 'Because tiles were the cheapest finish available',
        },
      ],
      explanation: {
        el:
          'Η αίθουσα είναι ένα βιβλίο με εικόνες: ιππότες, ένας γάμος βασιλιάδων, η ' +
          'σοδειά, και μια λωρίδα με όλα τα μέσα που κουβάλησαν ποτέ ανθρώπους.',
        en:
          'The hall is a picture book: knights, a royal wedding, the harvest, and a band ' +
          'showing every way people have ever been carried about.',
      },
    },
  },

  // ------------------------------------------------------------------- sé
  {
    id: 'porto-se-do-porto',
    cityId: 'porto',
    emoji: '🏰',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο καθεδρικός Σε', en: 'Porto Cathedral' },
    tagline: {
      el: 'Μοιάζει με κάστρο επειδή έπρεπε να είναι κάστρο',
      en: 'It looks like a castle because it had to be one',
    },
    story: {
      el:
        'Το Πόρτο άρχισε να χτίζει αυτόν τον καθεδρικό γύρω στο 1110, όταν η πόλη ήταν ' +
        'μικρή, καθόταν σε έναν λόφο πάνω από το ποτάμι και χρειαζόταν προστασία. Γι’ ' +
        'αυτό δεν μοιάζει με εκκλησία αλλά με φρούριο: χοντροί τοίχοι, δύο τετράγωνοι ' +
        'πύργοι, και επάνω μια σειρά από πέτρινα δόντια σαν κάστρου. Στους αιώνες που ' +
        'ακολούθησαν, κάθε εποχή πρόσθεσε κάτι δικό της. Ένα στρογγυλό παράθυρο σαν ' +
        'λουλούδι. Ένα γοτθικό περιστύλιο, που αργότερα ντύθηκε με μπλε πλακάκια. Μια ' +
        'φαρδιά σκάλα από πέτρα. Το 1387 ο βασιλιάς Ζοάο Α΄ παντρεύτηκε εδώ μια Αγγλίδα ' +
        'πριγκίπισσα, τη Φιλίππα του Λάνκαστερ, και ο γιος τους έγινε ο Ερρίκος ο ' +
        'Θαλασσοπόρος. Και μέσα κρύβεται μια ιστορία που μοιάζει με παραμύθι αλλά είναι ' +
        'αληθινή: όταν το 1809 ένας ξένος στρατός μπήκε στην πόλη, οι άνθρωποι του Πόρτο ' +
        'έχτισαν έναν ψεύτικο τοίχο μπροστά από το ασημένιο τους ρετάμπλ για να μην το ' +
        'βρει κανείς. Έπιασε.',
      en:
        'Porto began building this cathedral around 1110, when the city was small, sat on a ' +
        'hill above the river and needed protecting. That is why it does not look like a ' +
        'church but like a fortress: thick walls, two square towers, and a row of stone ' +
        'teeth along the top, exactly like a castle. Over the centuries that followed, each ' +
        'age added something of its own. A round window shaped like a flower. A Gothic ' +
        'cloister, later dressed in blue tiles. A wide stone staircase. In 1387 King João I ' +
        'married an English princess here, Philippa of Lancaster, and their son grew up to ' +
        'be Henry the Navigator. And inside there is a story that sounds like a fairy tale ' +
        'and is not one: in 1809, when a foreign army marched into the city, the people of ' +
        'Porto built a false wall in front of their silver altarpiece so that nobody would ' +
        'find it. It worked.',
    },
    facts: [
      {
        el: 'Άρχισε να χτίζεται γύρω στο 1110 και είναι από τα παλαιότερα κτίρια της πόλης.',
        en: 'Building began around 1110, making it one of the oldest buildings in the city.',
      },
      {
        el: 'Το 1387 έγινε εδώ ο γάμος του βασιλιά Ζοάο Α΄ με τη Φιλίππα του Λάνκαστερ.',
        en: 'In 1387 King João I married Philippa of Lancaster here.',
      },
      {
        el: 'Τα πλακάκια του περιστυλίου ζωγραφίστηκαν γύρω στο 1730 από τον Βαλεντίμ ντε Αλμέιδα.',
        en: 'The cloister tiles were painted around 1730 by Valentim de Almeida.',
      },
    ],
    location: {
      lat: 41.14282,
      lng: -8.6112,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1441255', deltaM: 0 },
        { kind: 'osm', ref: 'way/210461448', deltaM: 2 },
        { kind: 'wikipedia', ref: 'Porto Cathedral', deltaM: 9 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el:
          'Βγες στη μεγάλη πλατεία Τερέιρο ντα Σε, στην κορυφή του λόφου. Η είσοδος είναι ' +
          'ανάμεσα στους δύο τετράγωνους πύργους· η ψηλή στριφτή κολόνα στην πλατεία λέγεται πελουρίνιο.',
        en:
          'Come out onto the big square, the Terreiro da Sé, at the top of the hill. The way ' +
          'in is between the two square towers; the tall twisted column on the square is called a pelourinho.',
      },
    },
    question: {
      q: {
        el: 'Πώς γλίτωσε το ασημένιο ρετάμπλ του καθεδρικού το 1809;',
        en: 'How did the cathedral’s silver altarpiece survive in 1809?',
      },
      answers: [
        {
          el: 'Το έκρυψαν πίσω από έναν ψεύτικο τοίχο που έχτισαν βιαστικά',
          en: 'They hid it behind a false wall built in front of it',
        },
        {
          el: 'Το φόρτωσαν σε βάρκα και το έστειλαν στη θάλασσα',
          en: 'They loaded it on a boat and sent it to sea',
        },
        {
          el: 'Το κομμάτιασαν και το μοίρασαν σε σπίτια',
          en: 'They broke it up and shared the pieces out',
        },
        {
          el: 'Το έβαψαν με μαύρη μπογιά ώστε να μοιάζει με απλό ξύλο',
          en: 'They painted it black so that it would look like ordinary wood',
        },
      ],
      explanation: {
        el:
          'Οι κάτοικοι έχτισαν βιαστικά έναν τοίχο μπροστά του. Ο στρατός πέρασε από ' +
          'δίπλα και δεν κατάλαβε τίποτα.',
        en:
          'The people threw up a wall in front of it. The army walked past and never ' +
          'knew what was behind it.',
      },
    },
  },
  // ------------------------------------------------------- casa do infante
  {
    id: 'porto-casa-do-infante',
    cityId: 'porto',
    emoji: '🏠',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Το Σπίτι του Πρίγκιπα', en: 'Casa do Infante' },
    tagline: {
      el: 'Τελωνείο, νομισματοκοπείο, σπίτι — και από κάτω μια ρωμαϊκή αυλή',
      en: 'Customs house, mint, home — and a Roman floor underneath',
    },
    story: {
      el:
        'Κάτω στο ποτάμι, εκεί όπου η προκυμαία συναντά τα παλιά στενά, στέκεται ένα ' +
        'πέτρινο σπίτι με αυλή στη μέση. Έχει κάνει περισσότερες δουλειές από όσες ' +
        'προλαβαίνουν τα περισσότερα κτίρια. Ο βασιλιάς Αφόνσο Δ΄ το έχτισε το 1325 για ' +
        'βασιλικό τελωνείο: ό,τι ανέβαινε τον Δούρο με βάρκα, αλάτι, υφάσματα, ψάρια, ' +
        'κρασί, σίδερο, έμπαινε εδώ μέσα, ζυγιζόταν, γραφόταν σε κατάστιχο και ' +
        'φορολογούνταν. Για ένα διάστημα λειτούργησε και ως νομισματοκοπείο, εκεί όπου ' +
        'χτυπιόνταν τα νομίσματα. Και το 1394, αν η παλιά ιστορία λέει αλήθεια, γεννήθηκε ' +
        'σε ένα πάνω δωμάτιο ένα αγόρι που έγινε ο Ερρίκος ο Θαλασσοπόρος, ο πρίγκιπας ' +
        'που έστελνε καράβια όλο και πιο μακριά στις ακτές της Αφρικής. Έπειτα, στη ' +
        'δεκαετία του 1990, αρχαιολόγοι έσκαψαν κάτω από το πάτωμα και βρήκαν κάτι που ' +
        'δεν περίμενε κανείς: ψηφιδωτά ενός ρωμαϊκού κτιρίου, ήσυχα κάτω από ένα ' +
        'μεσαιωνικό τελωνείο. Σήμερα είναι μουσείο και μπορείς να στέκεσαι πάνω από όλα ' +
        'αυτά ταυτόχρονα.',
      en:
        'Down by the river, where the quay meets the old lanes, there is a stone house with ' +
        'a courtyard in the middle. It has held more jobs than most buildings ever get. King ' +
        'Afonso IV built it in 1325 as the royal customs house: everything that came up the ' +
        'Douro by boat — salt, cloth, fish, wine, iron — was carried in here, weighed, ' +
        'written into a ledger and taxed. For a while it was also the mint, where the city’s ' +
        'coins were struck. And in 1394, if the old story is true, a boy was born in an ' +
        'upstairs room who grew up to be Henry the Navigator, the prince who sent ships ' +
        'further and further down the coast of Africa. Then, in the 1990s, archaeologists ' +
        'dug beneath the floor and found something nobody had expected: the mosaics of a ' +
        'Roman building, lying quietly under a medieval customs house. Today it is a ' +
        'museum, and you can stand above all of it at once.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1325 από τον βασιλιά Αφόνσο Δ΄ ως το βασιλικό τελωνείο του Πόρτο.',
        en: 'It was built in 1325 by King Afonso IV as Porto’s royal customs house.',
      },
      {
        el: 'Για ένα διάστημα ήταν και νομισματοκοπείο: εδώ χτυπιόνταν νομίσματα.',
        en: 'For a time it was also the mint: coins were struck inside it.',
      },
      {
        el: 'Ανασκαφές στη δεκαετία του 1990 έφεραν στο φως ρωμαϊκά ψηφιδωτά κάτω από το κτίριο.',
        en: 'Excavations in the 1990s uncovered Roman mosaics underneath the building.',
      },
      {
        el: 'Σήμερα στεγάζει και το Ιστορικό Αρχείο της πόλης, με έγγραφα αιώνων.',
        en: 'It now also holds the city’s historical archive, with centuries of documents.',
      },
    ],
    location: {
      lat: 41.14069,
      lng: -8.61446,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q5047957', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2880925', deltaM: 17 },
        { kind: 'wikipedia', ref: 'Casa do Infante', deltaM: 13 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el:
          'Στη Ρούα ντα Αλφάντεγκα, ένα στενό πάνω από την προκυμαία της Ριμπέιρα. Ψάξε ' +
          'την πέτρινη γωνία με τα μεσαιωνικά παράθυρα· η πόρτα δίνει σε μια εσωτερική αυλή.',
        en:
          'On Rua da Alfândega, one lane up from the Ribeira quay. Look for the stone ' +
          'corner with the medieval windows; the door opens into an inner courtyard.',
      },
    },
    question: {
      q: {
        el: 'Ποια ήταν η δουλειά αυτού του κτιρίου το 1325;',
        en: 'What was this building’s job in 1325?',
      },
      answers: [
        {
          el: 'Να φορολογεί ό,τι ξεφόρτωναν από το ποτάμι στην προκυμαία',
          en: 'To tax everything that was unloaded from the river',
        },
        {
          el: 'Να φιλοξενεί τη βασιλική οικογένεια',
          en: 'To house the royal family on their visits',
        },
        {
          el: 'Να αποθηκεύει το σιτάρι που τάιζε την πόλη μέσα στον χειμώνα',
          en: 'To store the grain that fed the whole city through the winter',
        },
        {
          el: 'Να φυλάει τη γέφυρα που περνούσε τον Δούρο σε αυτό το σημείο',
          en: 'To guard the bridge that crossed the Douro at this exact spot',
        },
      ],
      explanation: {
        el:
          'Ήταν το βασιλικό τελωνείο. Κάθε φορτίο ζυγιζόταν, γραφόταν σε κατάστιχο και ' +
          'πλήρωνε φόρο πριν συνεχίσει στην πόλη.',
        en:
          'It was the royal customs house. Every cargo was weighed, written into a ledger ' +
          'and taxed before it could go on into the city.',
      },
    },

    museum: {
      doorNote: {
        el: 'Το κτίριο είναι το έκθεμα. Κοίτα πρώτα κάτω, μετά γύρω, και τελευταία πάνω.',
        en: 'The building is the exhibit. Look down first, then around, and upwards last.',
      },
      rooms: [
        {
          id: 'porto-casa-do-infante-under-the-floor',
          emoji: '🏺',
          name: { el: 'Κάτω από το πάτωμα', en: 'Under the floor' },
          intro: {
            el:
              'Το πρώτο πράγμα που βλέπεις εδώ δεν είναι στους τοίχους, είναι κάτω από τα ' +
              'πόδια σου. Όταν άνοιξαν το πάτωμα για επισκευές, βρήκαν από κάτω ένα ' +
              'ολόκληρο ρωμαϊκό κτίριο. Το μουσείο δεν το ξανάκλεισε. Το άφησε ανοιχτό και ' +
              'σε βάζει να περπατήσεις από πάνω του, βλέποντας δύο πόλεις τη μία πάνω στην άλλη.',
            en:
              'The first thing you see here is not on the walls, it is under your feet. When ' +
              'the floor was opened up for repairs, a whole Roman building turned up ' +
              'underneath. The museum did not close it again. It left it open and walks you ' +
              'over the top of it, so you can see two cities stacked one on the other.',
          },
          exhibits: [
            {
              id: 'porto-casa-do-infante-mosaic',
              name: { el: 'Το ρωμαϊκό ψηφιδωτό', en: 'The Roman mosaic' },
              blurb: {
                el:
                  'Ένα πάτωμα φτιαγμένο από χιλιάδες μικρές πέτρες, κομμένες σχεδόν σε ' +
                  'κύβους και βαλμένες μία μία σε σχέδιο. Οι Ρωμαίοι έφτιαχναν έτσι τα ' +
                  'πατώματα των σημαντικών δωματίων, γιατί ένα ψηφιδωτό δεν φθείρεται και ' +
                  'πλένεται εύκολα. Κοίτα πόσο μικρή είναι κάθε πέτρα και σκέψου πόσες ώρες ' +
                  'χρειάστηκαν. Ύστερα σκέψου ότι το πάτημα σταμάτησε, το κτίριο έπεσε, ' +
                  'μπήκαν χώματα από πάνω, και το σχέδιο περίμενε εκεί κάτω αιώνες χωρίς να ' +
                  'ξέρει κανείς ότι υπάρχει.',
                en:
                  'A floor made of thousands of little stones, cut almost into cubes and set ' +
                  'one at a time into a pattern. Romans floored their important rooms this ' +
                  'way, because a mosaic barely wears out and washes clean. Look at how small ' +
                  'each stone is and think how many hours that took. Then think that the ' +
                  'footsteps stopped, the building fell, soil came down on top of it, and the ' +
                  'pattern waited down there for centuries with nobody knowing it was there.',
              },
              question: {
                q: {
                  el: 'Γιατί έστρωναν οι Ρωμαίοι ψηφιδωτά στα σημαντικά δωμάτια;',
                  en: 'Why did Romans put mosaics in their important rooms?',
                },
                answers: [
                  {
                    el: 'Άντεχαν στο πάτημα και πλένονταν εύκολα με νερό',
                    en: 'They stood up to feet and washed clean with water',
                  },
                  {
                    el: 'Κρατούσαν το δωμάτιο ζεστό τον χειμώνα',
                    en: 'They kept the room warm through winter',
                  },
                  {
                    el: 'Ήταν φθηνότερα από ένα πάτωμα με σανίδες',
                    en: 'They cost less than a floor of planks',
                  },
                  {
                    el: 'Έκαναν τον ήχο των βημάτων πιο σιγανό μέσα στο σπίτι',
                    en: 'They made the sound of footsteps quieter inside the house',
                  },
                ],
                explanation: {
                  el:
                    'Πέτρα σε πέτρα, χωρίς σανίδες που σαπίζουν. Γι’ αυτό υπάρχουν ακόμα ' +
                    'ρωμαϊκά πατώματα και ελάχιστες ρωμαϊκές πόρτες.',
                  en:
                    'Stone on stone, with no planks to rot. That is why Roman floors survive ' +
                    'and almost no Roman doors do.',
                },
              },
            },
            {
              id: 'porto-casa-do-infante-layers',
              name: { el: 'Οι τοίχοι πάνω στους τοίχους', en: 'Walls on top of walls' },
              blurb: {
                el:
                  'Κοίτα προσεκτικά την ανασκαφή και θα δεις ότι οι πέτρες δεν είναι όλες ' +
                  'ίδιες. Άλλες είναι μεγάλες και κανονικές, άλλες μικρές και ανακατεμένες. ' +
                  'Κάθε στρώση είναι μια διαφορετική εποχή που έχτισε πάνω στα ερείπια της ' +
                  'προηγούμενης, γιατί ήταν πιο εύκολο από το να ισοπεδώσεις τα πάντα. Οι ' +
                  'αρχαιολόγοι διαβάζουν αυτές τις στρώσεις όπως διαβάζεις σελίδες: η ' +
                  'βαθύτερη είναι η παλαιότερη, και μια πέτρα που κάθεται πάνω σε άλλη είναι ' +
                  'πάντα νεότερη από αυτήν.',
                en:
                  'Look carefully at the dig and you will see that the stones are not all ' +
                  'alike. Some are big and neatly cut, others small and jumbled. Each layer ' +
                  'is a different age building on top of the ruins of the last one, because ' +
                  'that was easier than levelling everything first. Archaeologists read these ' +
                  'layers the way you read pages: the deepest is the oldest, and a stone ' +
                  'sitting on another stone is always younger than the one beneath it.',
              },
              question: {
                q: {
                  el: 'Πώς ξέρει ένας αρχαιολόγος ποια στρώση είναι παλαιότερη;',
                  en: 'How does an archaeologist know which layer is older?',
                },
                answers: [
                  {
                    el: 'Η βαθύτερη στρώση είναι πάντα και η παλαιότερη',
                    en: 'The deeper a layer lies, the older it has to be',
                  },
                  {
                    el: 'Από το χρώμα των πετρών, που σκουραίνει όσο περνούν οι αιώνες',
                    en: 'From the colour of the stones, which darkens over the centuries',
                  },
                  {
                    el: 'Από το μέγεθος του κτιρίου, αφού τα παλιά ήταν πάντα μικρότερα',
                    en: 'From the size of the building, since old ones were always smaller',
                  },
                  {
                    el: 'Μετρώντας το βάρος κάθε πέτρας',
                    en: 'By weighing each stone that comes out',
                  },
                ],
                explanation: {
                  el:
                    'Δεν μπορείς να χτίσεις κάτω από κάτι που υπάρχει ήδη. Άρα ό,τι είναι ' +
                    'από κάτω μπήκε πρώτο.',
                  en:
                    'You cannot build underneath something that is already there. So ' +
                    'whatever is below went in first.',
                },
              },
            },
            {
              id: 'porto-casa-do-infante-walkway',
              name: { el: 'Ο διάδρομος πάνω από τη σκαφή', en: 'The walkway over the dig' },
              blurb: {
                el:
                  'Το μουσείο είχε ένα πρόβλημα: ήθελε να δείξει την ανασκαφή, αλλά αν ' +
                  'περπατούσε ο κόσμος μέσα της θα την κατέστρεφε σε έναν μήνα. Η λύση ήταν ' +
                  'να μπει γυαλί ανάμεσα. Περνάς από πάνω, κοιτάς κάτω από τα πόδια σου, ' +
                  'βλέπεις τα πάντα και δεν ακουμπάς τίποτα. Είναι ένα μικρό μάθημα για το ' +
                  'πώς λειτουργούν τα μουσεία: ' +
                  'σχεδόν κάθε βιτρίνα, κάθε σχοινί και κάθε γεφυράκι υπάρχει για να ' +
                  'μπορέσει να το δει και το παιδί που θα έρθει σε πενήντα χρόνια.',
                en:
                  'The museum had a problem: it wanted to show the dig, but if people walked ' +
                  'through it they would wreck it inside a month. The answer was to put glass ' +
                  'in between. You cross above it, you look down past your own shoes, you see ' +
                  'everything and you touch nothing. It ' +
                  'is a small lesson in how museums work: nearly every glass case, every rope ' +
                  'and every little bridge exists so that the child who comes in fifty years ' +
                  'can still see the thing.',
              },
              question: {
                q: {
                  el: 'Γιατί περνάς από ψηλά αντί να περπατήσεις μέσα στην ανασκαφή;',
                  en: 'Why do you cross above the dig instead of walking in it?',
                },
                answers: [
                  {
                    el: 'Για να μη φθαρεί από τα χιλιάδες βήματα των επισκεπτών',
                    en: 'So that thousands of footsteps do not wear it away',
                  },
                  {
                    el: 'Γιατί το έδαφος εκεί κάτω δεν αντέχει το βάρος ενός ανθρώπου',
                    en: 'Because the ground down there cannot take a person’s weight',
                  },
                  {
                    el: 'Για να χωράνε περισσότεροι επισκέπτες',
                    en: 'So more visitors fit in the small room',
                  },
                  {
                    el: 'Γιατί από ψηλά ο φωτισμός πέφτει καλύτερα πάνω στις πέτρες',
                    en: 'Because from up there the light falls better on the old stones',
                  },
                ],
                explanation: {
                  el:
                    'Ένα ψηφιδωτό αντέχει αιώνες κάτω από χώμα και λίγους μήνες κάτω από ' +
                    'παπούτσια.',
                  en:
                    'A mosaic survives centuries under soil and a few months under shoes.',
                },
              },
            },
          ],
        },
        {
          id: 'porto-casa-do-infante-customs',
          emoji: '⚖️',
          name: { el: 'Το τελωνείο', en: 'The customs house' },
          intro: {
            el:
              'Αυτή είναι η δουλειά για την οποία χτίστηκε το σπίτι. Το Πόρτο ήταν λιμάνι ' +
              'ποταμού, και ένα λιμάνι βγάζει χρήματα με έναν τρόπο: κρατάει λίγο από ό,τι ' +
              'περνάει. Εδώ γινόταν αυτό το «λίγο». Κάθε φορτίο σταματούσε, ζυγιζόταν, ' +
              'γραφόταν και πλήρωνε, και μόνο τότε συνέχιζε ανηφορικά προς την πόλη.',
            en:
              'This is the job the house was built for. Porto was a river port, and a port ' +
              'makes its money one way: by keeping a little of everything that passes ' +
              'through. This is where that little was kept. Every cargo stopped, was weighed, ' +
              'was written down and paid, and only then went on up the hill into the city.',
          },
          exhibits: [
            {
              id: 'porto-casa-do-infante-lead-seals',
              name: { el: 'Τα μολυβένια σφραγίσματα', en: 'The lead seals' },
              blurb: {
                el:
                  'Ένα μικρό κομμάτι μόλυβδο, μαλακό σαν ζυμάρι, πιεσμένο πάνω στο δέμα με ' +
                  'μια τσιμπίδα που άφηνε επάνω του το σημάδι του τελωνείου. Αυτό ήταν η ' +
                  'απόδειξη ότι ο φόρος είχε πληρωθεί. Ο μόλυβδος διαλέχτηκε επειδή είναι ' +
                  'μαλακός: σφραγίζεται εύκολα, αλλά αν κάποιος τον ανοίξει δεν ξανακλείνει ' +
                  'ποτέ όπως ήταν. Στις βιτρίνες θα δεις δεκάδες τέτοια σφραγίσματα, και ' +
                  'δίπλα τους τα μεταλλικά μάρκα με τα οποία έκαναν τους λογαριασμούς τους ' +
                  'οι υπάλληλοι. Είναι ελάχιστα αντικείμενα, και κρατούσαν όρθιο ολόκληρο ' +
                  'το λιμάνι.',
                en:
                  'A little piece of lead, soft as dough, squeezed onto a bale with a pair of ' +
                  'pincers that left the customs mark in it. That was the proof that the duty ' +
                  'had been paid. Lead was chosen because it is soft: it takes a stamp easily, ' +
                  'but once somebody prises it open it never closes the same way again. In the ' +
                  'cases you will see dozens of these seals, and beside them the counting ' +
                  'tokens the clerks pushed around to do their sums. They are tiny objects, ' +
                  'and they held a whole port together.',
              },
              question: {
                q: {
                  el: 'Τι σου έλεγε ένα μολυβένιο σφράγισμα πάνω σε ένα δέμα;',
                  en: 'What did a lead seal on a bale tell you?',
                },
                answers: [
                  {
                    el: 'Ότι ο φόρος του είχε ήδη πληρωθεί',
                    en: 'That the tax on it had already been paid',
                  },
                  {
                    el: 'Ποιο πλοίο το είχε ανεβάσει στο ποτάμι',
                    en: 'Which ship had carried it up the river',
                  },
                  {
                    el: 'Πόσο ζύγιζε ολόκληρο το δέμα',
                    en: 'How much the whole bale weighed',
                  },
                  {
                    el: 'Ποιος έμπορος της πόλης το είχε παραγγείλει',
                    en: 'Which merchant in the city had ordered it',
                  },
                ],
                explanation: {
                  el:
                    'Σπασμένο σφράγισμα σήμαινε ότι κάποιος είχε ανοίξει το δέμα μετά το ' +
                    'τελωνείο — και τότε άρχιζαν οι ερωτήσεις.',
                  en:
                    'A broken seal meant somebody had opened the bale after the customs ' +
                    'house — and then the questions started.',
                },
              },
            },
            {
              id: 'porto-casa-do-infante-archive',
              name: { el: 'Το αρχείο της πόλης', en: 'The city’s archive' },
              blurb: {
                el:
                  'Στο ίδιο κτίριο φυλάσσεται σήμερα το ιστορικό αρχείο του Πόρτο: ράφια με ' +
                  'κατάστιχα, συμβόλαια, άδειες και καταλόγους, γραμμένα με το χέρι επί ' +
                  'αιώνες. Ακούγεται βαρετό και είναι το αντίθετο. Επειδή κάποιος υπάλληλος ' +
                  'σημείωνε πόσα βαρέλια μπήκαν σε ένα πλοίο μια Τρίτη του 1500, ξέρουμε ' +
                  'σήμερα τι έτρωγε η πόλη, με ποιον έκανε εμπόριο και πόσο κόστιζε το ψωμί. ' +
                  'Η ιστορία δεν γράφεται μόνο από βασιλιάδες. Γράφεται και από ανθρώπους ' +
                  'που κρατούσαν σημειώσεις.',
                en:
                  'The same building now holds Porto’s historical archive: shelves of ' +
                  'ledgers, contracts, licences and lists, written out by hand over ' +
                  'centuries. That sounds dull and it is the opposite. Because some clerk ' +
                  'noted how many barrels went onto a ship on a Tuesday in the 1500s, we know ' +
                  'today what the city ate, who it traded with and what bread cost. History ' +
                  'is not only written by kings. It is written by people who kept notes.',
              },
              question: {
                q: {
                  el: 'Τι μαθαίνουμε από τα παλιά κατάστιχα ενός λιμανιού;',
                  en: 'What do a port’s old ledgers teach us?',
                },
                answers: [
                  {
                    el: 'Τι έτρωγε η πόλη και με ποιους έκανε εμπόριο',
                    en: 'What the city ate, and who it traded with',
                  },
                  {
                    el: 'Πώς ακριβώς έμοιαζαν οι άνθρωποι που ζούσαν τότε στην πόλη',
                    en: 'Exactly what the people living in the city looked like then',
                  },
                  {
                    el: 'Ποια τραγούδια τραγουδούσαν οι ναυτικοί όσο φόρτωναν τα πλοία',
                    en: 'Which songs the sailors sang while they loaded up the ships',
                  },
                  {
                    el: 'Πόσο βαθύ ήταν το ποτάμι σε κάθε σημείο της παλιάς προκυμαίας',
                    en: 'How deep the river was at each point along the old stone quay',
                  },
                ],
                explanation: {
                  el:
                    'Ένας κατάλογος φορτίων είναι κατά λάθος και κατάλογος της ' +
                    'καθημερινής ζωής. Κανείς δεν τον έγραψε για εμάς.',
                  en:
                    'A list of cargoes is accidentally a list of daily life. Nobody wrote ' +
                    'it for us.',
                },
              },
            },
            {
              id: 'porto-casa-do-infante-mint',
              name: { el: 'Το νομισματοκοπείο', en: 'The mint' },
              blurb: {
                el:
                  'Για ένα διάστημα το ίδιο κτίριο χτυπούσε και νομίσματα. Ο τρόπος ήταν ' +
                  'χειρωνακτικός και θορυβώδης: ένας δίσκος μετάλλου έμπαινε ανάμεσα σε δύο ' +
                  'σκαλισμένες μήτρες και κάποιος χτυπούσε από πάνω με βαριά. Η εικόνα ' +
                  'αποτυπωνόταν και στις δύο πλευρές με μία κίνηση. Ένα νόμισμα δεν είναι ' +
                  'απλώς μέταλλο: είναι μια υπόσχεση ότι αυτό το κομμάτι αξίζει όσο λέει. ' +
                  'Γι’ αυτό ένα κράτος φυλάει τόσο αυστηρά ποιος επιτρέπεται να τα φτιάχνει.',
                en:
                  'For a while the same building also struck coins. The method was ' +
                  'hand-powered and loud: a blank disc of metal went between two carved dies ' +
                  'and somebody hit the top one with a hammer. The picture bit into both ' +
                  'faces in a single blow. A coin is not simply metal: it is a promise that ' +
                  'this piece is worth what it says. That is why a country guards so fiercely ' +
                  'the question of who is allowed to make them.',
              },
              question: {
                q: {
                  el: 'Πώς έμπαινε η εικόνα και στις δύο πλευρές ενός νομίσματος;',
                  en: 'How did the picture get onto both faces of a coin?',
                },
                answers: [
                  {
                    el: 'Με ένα χτύπημα ανάμεσα σε δύο σκαλισμένες μήτρες',
                    en: 'One hammer blow between two carved metal dies',
                  },
                  {
                    el: 'Με ένα λεπτό μαχαιράκι που τη σκάλιζε γραμμή προς γραμμή',
                    en: 'With a fine knife that carved it in line by line by hand',
                  },
                  {
                    el: 'Χύνοντας λιωμένο μέταλλο μέσα σε δύο ξεχωριστά καλούπια',
                    en: 'By pouring melted metal into two entirely separate moulds',
                  },
                  {
                    el: 'Με μια βούρτσα και μπογιά που στεγνώνει',
                    en: 'With a brush and a hard-drying paint',
                  },
                ],
                explanation: {
                  el:
                    'Δύο σκαλισμένες μήτρες, ένας δίσκος ανάμεσα, μία βαριά. Και τα δύο ' +
                    'πρόσωπα βγαίνουν μαζί.',
                  en:
                    'Two carved dies, a blank between them, one hammer. Both faces appear ' +
                    'at the same moment.',
                },
              },
            },
          ],
        },
        {
          id: 'porto-casa-do-infante-prince',
          emoji: '⛵',
          name: { el: 'Το αγόρι που έστειλε καράβια', en: 'The boy who sent out ships' },
          intro: {
            el:
              'Το σπίτι πήρε το όνομά του από ένα μωρό. Η παράδοση λέει ότι το 1394 ' +
              'γεννήθηκε εδώ ο Ερρίκος, γιος του βασιλιά Ζοάο Α΄ και της Φιλίππας του ' +
              'Λάνκαστερ. Δεν έγινε βασιλιάς και δεν ταξίδεψε σχεδόν πουθενά ο ίδιος. Έκανε ' +
              'κάτι άλλο: οργάνωσε ταξίδια, πλήρωσε πληρώματα και κράτησε ό,τι μάθαιναν.',
            en:
              'The house is named after a baby. Tradition says that in 1394 Henry was born ' +
              'here, son of King João I and Philippa of Lancaster. He never became king and ' +
              'he sailed almost nowhere himself. He did something else: he organised ' +
              'voyages, paid the crews and kept hold of everything they learned.',
          },
          exhibits: [
            {
              id: 'porto-casa-do-infante-many-faces',
              name: { el: 'Τα πολλά πρόσωπα του Ερρίκου', en: 'Henry’s many faces' },
              blurb: {
                el:
                  'Κανείς δεν ξέρει πώς έμοιαζε ο Ερρίκος. Δεν υπάρχει πορτρέτο φτιαγμένο ' +
                  'από κάποιον που τον είδε, και ακόμα και η πιο διάσημη μορφή του, ο ' +
                  'άντρας με το μεγάλο σκούρο καπέλο, αμφισβητείται. Το μουσείο βάζει στη ' +
                  'σειρά τις εικόνες του μέσα στους αιώνες, και το αστείο φαίνεται αμέσως: ' +
                  'κάθε εποχή τον ζωγράφισε να μοιάζει με τους δικούς της ανθρώπους. Άλλοτε ' +
                  'αυστηρός μοναχός, άλλοτε στρατηγός, άλλοτε επιστήμονας ανάμεσα σε ' +
                  'όργανα. Οι εικόνες δεν μας λένε πώς ήταν εκείνος. Μας λένε τι ήθελε να ' +
                  'δει η κάθε γενιά.',
                en:
                  'Nobody knows what Henry looked like. There is no portrait made by anyone ' +
                  'who met him, and even his most famous face, the man in the big dark hat, ' +
                  'is disputed. The museum lines up his pictures across the centuries and the ' +
                  'joke shows at once: every age painted him to look like its own people. ' +
                  'Sometimes a stern monk, sometimes a general, sometimes a scientist among ' +
                  'his instruments. The pictures do not tell us what he was like. They tell ' +
                  'us what each generation wanted to see.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν μοιάζουν μεταξύ τους τα πορτρέτα του Ερρίκου;',
                  en: 'Why do Henry’s portraits all look different?',
                },
                answers: [
                  {
                    el: 'Κάθε εποχή τον ζωγράφισε σαν άνθρωπό της',
                    en: 'Each century drew him like its own people',
                  },
                  {
                    el: 'Άλλαξε πάρα πολύ καθώς μεγάλωνε σε ηλικία',
                    en: 'He changed a great deal as he aged',
                  },
                  {
                    el: 'Έχει ξεθωριάσει η μπογιά στα παλιότερα',
                    en: 'The paint on the older ones has faded',
                  },
                  {
                    el: 'Μόνο ένας ζωγράφος είχε ποτέ άδεια να τον δει',
                    en: 'Only one artist was ever allowed to see him',
                  },
                ],
                explanation: {
                  el:
                    'Όταν δεν υπάρχει πορτρέτο εκ του φυσικού, ο καθένας ζωγραφίζει αυτό ' +
                    'που φαντάζεται. Και φαντάζεται με τα μάτια της εποχής του.',
                  en:
                    'When nobody drew him from life, everyone paints what they imagine. And ' +
                    'they imagine with the eyes of their own time.',
                },
              },
            },
            {
              id: 'porto-casa-do-infante-milestones',
              name: { el: 'Ο τοίχος με τις χρονολογίες', en: 'The wall of dates' },
              blurb: {
                el:
                  'Ένας τοίχος με χρονολογίες, τη μία κάτω από την άλλη, και δίπλα σε κάθε ' +
                  'μία λίγη ακόμα ακτή της Αφρικής. Έτσι δούλευε στ’ αλήθεια η εξερεύνηση: ' +
                  'όχι ένα μεγάλο ταξίδι, αλλά δεκάδες μικρά, το καθένα λίγο πιο κάτω από ' +
                  'το προηγούμενο. Ένα πλοίο έφτανε ως ένα ακρωτήρι, γύριζε πίσω και το ' +
                  'έλεγε, και το επόμενο ξεκινούσε από εκεί. Ένας χάρτης δεν δείχνει τον ' +
                  'κόσμο· δείχνει πόσο κόσμο έχει δει αυτός που τον έφτιαξε. Το λευκό χαρτί ' +
                  'από κάτω δεν ήταν άδεια θάλασσα, ήταν άγνοια.',
                en:
                  'A wall of dates, one under the other, and beside each one a little more of ' +
                  'the African coast. That is how exploring actually worked: not one great ' +
                  'voyage but dozens of small ones, each going a little further than the last. ' +
                  'A ship reached a headland, came home and said so, and the next ship set out ' +
                  'from there. A map does not show you the world; it shows you how much of the ' +
                  'world the person who drew it had seen. The blank paper below was not empty ' +
                  'sea. It was not-knowing.',
              },
              question: {
                q: {
                  el: 'Πώς μεγάλωνε η ακτή πάνω στους χάρτες;',
                  en: 'How did the coast on the maps get longer?',
                },
                answers: [
                  {
                    el: 'Κάθε ταξίδι πρόσθετε όσο είχε μόλις δει',
                    en: 'Each voyage added what it had just seen',
                  },
                  {
                    el: 'Οι βασιλιάδες τη διέταζαν μεγαλύτερη',
                    en: 'Kings ordered it drawn larger than it was',
                  },
                  {
                    el: 'Τα φύλλα του χαρτιού γίνονταν μεγαλύτερα',
                    en: 'The sheets of paper kept getting bigger',
                  },
                  {
                    el: 'Η Αφρική μεγάλωνε καθώς έπεφτε η θάλασσα',
                    en: 'Africa itself grew as the sea level fell',
                  },
                ],
                explanation: {
                  el:
                    'Κανείς δεν έκανε ένα ταξίδι ως την άκρη. Έκαναν πολλά, και το καθένα ' +
                    'παρέδιδε στο επόμενο λίγα μίλια ακόμα.',
                  en:
                    'Nobody made one voyage to the end. They made many, and each handed the ' +
                    'next one a few more miles.',
                },
              },
            },
            {
              id: 'porto-casa-do-infante-porcelain',
              name: {
                el: 'Ένα πιάτο που ταξίδεψε πιο μακριά από τον πρίγκιπα',
                en: 'A plate that travelled further than the prince',
              },
              blurb: {
                el:
                  'Στις βιτρίνες με τα κεραμικά υπάρχει πορσελάνη από την Κίνα. Σκέψου ' +
                  'πόσο δρόμο έκανε: φτιάχτηκε στην άλλη άκρη του κόσμου, μπήκε σε πλοίο, ' +
                  'γύρισε την Αφρική και ξεφορτώθηκε σε αυτή εδώ την προκυμαία. Δίπλα της ' +
                  'στέκονται πιατικά φτιαγμένα εδώ κοντά, στο Πόρτο και στη Βίλα Νόβα ντε ' +
                  'Γκάια. Βάλ’ τα το ένα δίπλα στο άλλο και βλέπεις τι έκαναν τα ταξίδια ' +
                  'στην καθημερινή ζωή: οι ντόπιοι κεραμιστές είδαν το άσπρο και μπλε της ' +
                  'Κίνας και άρχισαν να το δοκιμάζουν κι εκείνοι. Οι ιδέες ταξιδεύουν μέσα ' +
                  'στα κιβώτια, μαζί με τα πράγματα.',
                en:
                  'In the ceramics cases there is porcelain from China. Think how far it ' +
                  'came: made on the other side of the world, loaded onto a ship, carried ' +
                  'around Africa and unloaded on this very quay. Next to it stand dishes made ' +
                  'close by, in Porto and in Vila Nova de Gaia. Put them side by side and you ' +
                  'can see what the voyages did to everyday life: local potters saw the blue ' +
                  'and white of China and started trying it themselves. Ideas travel inside ' +
                  'the crates, along with the things.',
              },
              question: {
                q: {
                  el: 'Τι έγινε αφού έφτασε στο Πόρτο η κινέζικη πορσελάνη;',
                  en: 'What happened after Chinese porcelain reached Porto?',
                },
                answers: [
                  {
                    el: 'Οι κεραμιστές εδώ αντέγραψαν το άσπρο και μπλε',
                    en: 'Potters in Porto copied its blue and white',
                  },
                  {
                    el: 'Στάλθηκε αμέσως πίσω στην Κίνα',
                    en: 'It was sent straight back to China',
                  },
                  {
                    el: 'Η πόλη απαγόρευσε τα πήλινα πιατικά',
                    en: 'The city banned all dishes made of clay',
                  },
                  {
                    el: 'Οι ντόπιοι κεραμιστές σταμάτησαν τη δουλειά τους',
                    en: 'Local potters stopped working altogether then',
                  },
                ],
                explanation: {
                  el:
                    'Το εμπόριο δεν κουβαλάει μόνο αντικείμενα. Κουβαλάει και σχέδια, ' +
                    'χρώματα και ιδέες, και αυτά μένουν.',
                  en:
                    'Trade does not only carry objects. It carries patterns, colours and ' +
                    'ideas, and those stay.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'porto-casa-do-infante-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι φτιαγμένο από χιλιάδες μικρές πέτρες και είμαι πολύ παλαιότερο από ' +
              'το σπίτι που στέκεται από πάνω μου. Για αιώνες δεν με πάτησε κανείς, γιατί ' +
              'κανείς δεν ήξερε ότι υπάρχω.',
            en:
              'I am made of thousands of tiny stones and I am far older than the house ' +
              'standing above me. For centuries nobody walked on me, because nobody knew ' +
              'that I was there.',
          },
          hint: {
            el: 'Για να με δεις πρέπει να κοιτάξεις κάτω, όχι πάνω.',
            en: 'To see me you have to look down, not up.',
          },
          answerExhibitId: 'porto-casa-do-infante-mosaic',
        },
        {
          id: 'porto-casa-do-infante-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μικρό, γκρίζο και μαλακό, και με έσφιξαν πάνω σε ένα δέμα με ' +
              'υφάσματα. Όσο εγώ έμενα άθικτο, όλοι στον δρόμο ήξεραν ότι ο βασιλιάς ' +
              'είχε ήδη πληρωθεί.',
            en:
              'I am small, grey and soft, and I was squeezed shut onto a bale of cloth. ' +
              'For as long as I stayed unbroken, everyone along the road knew that the ' +
              'king had already been paid.',
          },
          hint: {
            el: 'Αν με σπάσεις, δεν ξανακλείνω ποτέ όπως ήμουν.',
            en: 'Break me and I never close the same way again.',
          },
          answerExhibitId: 'porto-casa-do-infante-lead-seals',
        },
        {
          id: 'porto-casa-do-infante-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι ο ίδιος άνθρωπος ζωγραφισμένος ξανά και ξανά, και καμιά δύο εικόνες ' +
              'μου δεν συμφωνούν μεταξύ τους. Κάθε αιώνας που με ζωγράφισε μού έδωσε το ' +
              'πρόσωπο και τα ρούχα των δικών του ανθρώπων.',
            en:
              'I am the same man drawn over and over, and no two of my pictures agree with ' +
              'each other. Every century that painted me gave me the face and the clothes ' +
              'of its own people.',
          },
          hint: {
            el: 'Κανένας από όσους με γνώρισαν δεν άφησε σχέδιό μου.',
            en: 'Nobody who ever met me left a drawing of me.',
          },
          answerExhibitId: 'porto-casa-do-infante-many-faces',
        },
      ],
    },
  },
  // -------------------------------------------------------- palácio da bolsa
  {
    id: 'porto-palacio-da-bolsa',
    cityId: 'porto',
    emoji: '💰',
    category: 'art',
    difficulty: 3,

    name: { el: 'Το Παλάτι του Χρηματιστηρίου', en: 'Palácio da Bolsa' },
    tagline: {
      el: 'Ένα παλάτι χωρίς βασιλιά, χτισμένο από εμπόρους',
      en: 'A palace with no king in it, built by merchants',
    },
    story: {
      el:
        'Το 1832 μια φωτιά κατέστρεψε μέρος του παλιού μοναστηριού του Σάο Φρανσίσκο και ' +
        'άφησε πίσω της ένα καμένο οικόπεδο δίπλα στο ποτάμι. Οι έμποροι του Πόρτο το ' +
        'ζήτησαν. Δεν ήθελαν ένα γραφείο· ήθελαν ένα κτίριο που θα έλεγε σε όποιον ' +
        'ερχόταν από τη θάλασσα ότι αυτή η πόλη είναι σοβαρή. Άρχισαν να χτίζουν το 1842 ' +
        'και δεν βιάστηκαν καθόλου: η διακόσμηση κράτησε τόσο που το παλάτι ολοκληρώθηκε ' +
        'γύρω στο 1910, σχεδόν εβδομήντα χρόνια αργότερα. Στη μέση υπάρχει μια αυλή με ' +
        'γυάλινη οροφή και ζωγραφισμένα εθνόσημα των χωρών με τις οποίες έκανε εμπόριο το ' +
        'Πόρτο. Πιο μέσα κρύβεται το Αραβικό Σαλόνι, ένα δωμάτιο που το στόλιζαν επί ' +
        'δεκαοκτώ χρόνια για να θυμίζει την Αλάμπρα της Ισπανίας, με χρυσά σχέδια σε κάθε ' +
        'εκατοστό τοίχου. Δεν έζησε ποτέ βασιλιάς εδώ. Το έχτισαν άνθρωποι που ζύγιζαν ' +
        'εμπορεύματα.',
      en:
        'In 1832 a fire destroyed part of the old monastery of São Francisco and left a ' +
        'burnt plot of ground beside the river. The merchants of Porto asked for it. They ' +
        'did not want an office; they wanted a building that would tell anyone arriving ' +
        'from the sea that this city was serious. They began in 1842 and were in no hurry ' +
        'at all: the decorating took so long that the palace was only truly finished around ' +
        '1910, nearly seventy years later. In the middle there is a courtyard under a glass ' +
        'roof, painted with the coats of arms of the countries Porto traded with. Deeper in ' +
        'hides the Arab Room, decorated over eighteen years to echo the Alhambra in Spain, ' +
        'with gold patterns on every centimetre of wall. No king ever lived here. It was ' +
        'built by people who weighed cargo for a living.',
    },
    facts: [
      {
        el: 'Το χτίσιμο άρχισε το 1842, αλλά η διακόσμηση τελείωσε γύρω στο 1910.',
        en: 'Building began in 1842, but the decoration was only finished around 1910.',
      },
      {
        el: 'Το Αραβικό Σαλόνι στολιζόταν επί περίπου δεκαοκτώ χρόνια, εμπνευσμένο από την Αλάμπρα.',
        en: 'The Arab Room took about eighteen years to decorate, inspired by the Alhambra.',
      },
      {
        el: 'Ο θεμέλιος λίθος του αγάλματος του Ερρίκου, μπροστά στον κήπο, μπήκε το 1894· το άγαλμα αποκαλύφθηκε το 1900.',
        en: 'The first stone of the Henry the Navigator statue in the garden was laid in 1894; the statue itself was unveiled in 1900.',
      },
    ],
    location: {
      lat: 41.14137,
      lng: -8.61569,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1371109', deltaM: 0 },
        { kind: 'osm', ref: 'node/2478836067', deltaM: 6 },
        { kind: 'wikipedia', ref: 'Palácio da Bolsa', deltaM: 22 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el:
          'Στη Ρούα Φερέιρα Μπόρζες, δίπλα στη μεγάλη εκκλησία του Σάο Φρανσίσκο. Η πόρτα ' +
          'βλέπει στον κήπο με το άγαλμα του πρίγκιπα που δείχνει προς τη θάλασσα.',
        en:
          'On Rua Ferreira Borges, next to the big São Francisco church. The door faces the ' +
          'garden with the statue of the prince pointing towards the sea.',
      },
    },
    question: {
      q: {
        el: 'Ποιοι έχτισαν αυτό το παλάτι και γιατί;',
        en: 'Who built this palace, and what for?',
      },
      answers: [
        {
          el: 'Οι έμποροι, για να δείξουν στον κόσμο πόσο μετράει η πόλη τους',
          en: 'The merchants, to show the world how much their city mattered',
        },
        {
          el: 'Ένας βασιλιάς, που ήθελε δεύτερη κατοικία κοντά στο ποτάμι',
          en: 'A king, who wanted a second home close to the river bank',
        },
        {
          el: 'Οι μοναχοί, για να αντικαταστήσουν το μοναστήρι που είχε καεί',
          en: 'The monks, to replace the monastery that had burned down',
        },
        {
          el: 'Η πόλη, για να στεγάσει το δημαρχείο της',
          en: 'The city, to house its town hall and offices',
        },
      ],
      explanation: {
        el:
          'Ήταν το χρηματιστήριο του Πόρτο. Οι έμποροι το έχτισαν για να συναντιούνται ' +
          'και για να εντυπωσιάζουν όποιον ερχόταν από τη θάλασσα.',
        en:
          'It was Porto’s stock exchange. The merchants built it to meet in, and to ' +
          'impress anyone who arrived from the sea.',
      },
    },
  },

  // --------------------------------------------------------- ponte luís i
  {
    id: 'porto-ponte-luis-i',
    cityId: 'porto',
    emoji: '🌉',
    category: 'science',
    difficulty: 2,

    name: { el: 'Η γέφυρα Λουίς Α΄', en: 'The Luís I Bridge' },
    tagline: {
      el: 'Μία σιδερένια καμάρα που κρατάει δύο δρόμους',
      en: 'One iron arch holding two roads at once',
    },
    story: {
      el:
        'Το Πόρτο πέρασε αυτή τη στροφή του Δούρου με τρεις γέφυρες μέσα σε ογδόντα ' +
        'χρόνια. Πρώτα με μια γέφυρα από βάρκες δεμένες τη μία με την άλλη, που το ποτάμι ' +
        'την ταρακουνούσε κάθε φορά που φούσκωνε. Ύστερα, από το 1843, με μια κρεμαστή ' +
        'γέφυρα δεμένη σε πέτρινους πύργους. Και το 1881 ξεκίνησε το χτίσιμο μιας ' +
        'σιδερένιας γέφυρας που σχεδίασε ο Τεοφίλ Σεϊρίγκ, μηχανικός που είχε δουλέψει με ' +
        'τον Γκυστάβ Άιφελ· η παλιά κρεμαστή ξηλώθηκε καθώς αυτή ανέβαινε, και το 1886 ' +
        'άνοιξε. Η ' +
        'ιδέα της είναι απλή και έξυπνη. Οι όχθες του Δούρου εδώ είναι απότομες και ' +
        'ψηλές, αλλά η παλιά πόλη είναι κάτω, στο νερό. Άρα χρειάζονταν δύο περάσματα: ' +
        'ένα ψηλά, από κορυφή σε κορυφή, και ένα χαμηλά, από προκυμαία σε προκυμαία. Ο ' +
        'Σεϊρίγκ έβαλε και τα δύο στην ίδια καμάρα, τη μία πάνω από την άλλη. Το τόξο ' +
        'έχει άνοιγμα 172 μέτρα και ήταν τότε από τα μεγαλύτερα σιδερένια τόξα στον ' +
        'κόσμο. Σήμερα από πάνω περνάει το μετρό και από κάτω τα αυτοκίνητα, και πεζοί ' +
        'και στα δύο.',
      en:
        'Porto crossed this bend of the Douro with three bridges in eighty years. First a ' +
        'bridge made of boats tied to each other, which the river shoved about every time ' +
        'it rose. Then, from 1843, a suspension bridge hung from stone towers. Then in ' +
        '1881 work began on an iron bridge designed by Théophile Seyrig, an engineer who ' +
        'had worked with Gustave Eiffel; the old suspension bridge was taken down as this ' +
        'one went up, and in 1886 it opened. Its idea is simple and clever. The banks of the ' +
        'Douro here are steep and high, but the old city is down at the water. So two ' +
        'crossings were needed: one up top, clifftop to clifftop, and one down low, quay to ' +
        'quay. Seyrig hung both of them on the same arch, one above the other. The arch ' +
        'spans 172 metres and was among the largest iron arches in the world at the time. ' +
        'Today the metro runs over the top and cars along the bottom, with people walking ' +
        'on both.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1886. Η μοναδική της καμάρα έχει άνοιγμα 172 μέτρα.',
        en: 'It opened in 1886. Its single arch spans 172 metres.',
      },
      {
        el: 'Τη σχεδίασε ο Τεοφίλ Σεϊρίγκ, συνεργάτης του Γκυστάβ Άιφελ σε παλιότερη γέφυρα του Πόρτο.',
        en: 'Théophile Seyrig designed it; he had partnered Gustave Eiffel on an earlier Porto bridge.',
      },
      {
        el: 'Έχει δύο καταστρώματα: το επάνω για το μετρό, το κάτω για τα αυτοκίνητα.',
        en: 'It has two decks: the upper one for the metro, the lower one for cars.',
      },
    ],
    location: {
      lat: 41.13972,
      lng: -8.60944,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1322447', deltaM: 0 },
        { kind: 'osm', ref: 'way/98835981', deltaM: 50 },
        { kind: 'wikipedia', ref: 'Dom Luís I Bridge', deltaM: 18 },
      ],
      verifiedAt: '2026-09-12',
      note:
        'The stored point is the middle of the arch, which is what Wikidata records for a ' +
        'bridge. The OSM way is the whole structure and its centre lands 50 m away, which ' +
        'is a bridge being long rather than a disagreement about where it is.',
      findIt: {
        el:
          'Το κάτω κατάστρωμα ξεκινάει από την προκυμαία της Ριμπέιρα, ανατολικά. Για το ' +
          'επάνω, ανέβα από την πλατεία δίπλα στον καθεδρικό· είναι το ίδιο τόξο, από ψηλά.',
        en:
          'The lower deck starts from the Ribeira quay, to the east. For the upper one, ' +
          'climb from the square by the cathedral; it is the same arch, seen from above.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έχει δύο καταστρώματα αυτή η γέφυρα;',
        en: 'Why does this bridge have two decks?',
      },
      answers: [
        {
          el: 'Η πόλη είναι και πάνω στην κορυφή και κάτω στο νερό',
          en: 'The city sits both on the clifftop and down at the water',
        },
        {
          el: 'Για να κλείνει το ένα όταν επισκευάζεται',
          en: 'So one deck can be closed for repairs',
        },
        {
          el: 'Για να ζυγίζει το βάρος ίσα στις δύο πλευρές της μεγάλης καμάρας',
          en: 'To balance the weight evenly on the two sides of the enormous arch',
        },
        {
          el: 'Επειδή τα τρένα και τα αυτοκίνητα δεν χωρούσαν ποτέ στο ίδιο πλάτος',
          en: 'Because trains and cars would never have fitted across one width',
        },
      ],
      explanation: {
        el:
          'Οι όχθες είναι απότομες. Χρειαζόταν πέρασμα από κορυφή σε κορυφή και δεύτερο ' +
          'από προκυμαία σε προκυμαία, οπότε μπήκαν και τα δύο στο ίδιο τόξο.',
        en:
          'The banks are steep. One crossing was needed clifftop to clifftop and another ' +
          'quay to quay, so both were hung on the same arch.',
      },
    },
  },

  // -------------------------------------------------------- serra do pilar
  {
    id: 'porto-serra-do-pilar',
    cityId: 'porto',
    emoji: '🔭',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Το μοναστήρι της Σέρα ντο Πιλάρ', en: 'The Monastery of Serra do Pilar' },
    tagline: {
      el: 'Στρογγυλή εκκλησία σε βράχο, με όλη την πόλη μπροστά της',
      en: 'A round church on a cliff, with the city in front',
    },
    story: {
      el:
        'Περνάς τη γέφυρα και βρίσκεσαι σε άλλη πόλη: τη Βίλα Νόβα ντε Γκάια, στην ' +
        'απέναντι όχθη. Ψηλά στον βράχο μοναχοί έχτισαν τον 16ο αιώνα ένα μοναστήρι με ' +
        'κάτι πολύ σπάνιο: η εκκλησία του είναι ολοστρόγγυλη, και το περιστύλιο δίπλα της ' +
        'είναι επίσης ένας τέλειος κύκλος. Στην Πορτογαλία δεν υπάρχει σχεδόν τίποτα άλλο ' +
        'σαν αυτό. Επειδή όμως στέκεται τόσο ψηλά, το μοναστήρι έκανε και μια δουλειά που ' +
        'δεν είχε σκεφτεί κανείς μοναχός: έγινε παρατηρητήριο. Το 1809 ένας στρατηγός ' +
        'στάθηκε εδώ και κοίταξε το ποτάμι πριν περάσει ο στρατός του απέναντι, και το ' +
        '1832 με 1833, όταν το Πόρτο πολιορκήθηκε σε έναν πόλεμο ανάμεσα σε δύο αδέρφια ' +
        'που ήθελαν και οι δύο τον θρόνο, ο βράχος κράτησε ξανά σκοπιά. Σήμερα η μόνη ' +
        'μάχη εδώ είναι για το καλύτερο σημείο στο κιγκλίδωμα.',
      en:
        'Cross the bridge and you are in another town: Vila Nova de Gaia, on the far bank. ' +
        'High on the cliff, monks built a monastery in the sixteenth century with something ' +
        'very rare about it: its church is completely round, and the cloister beside it is ' +
        'a perfect circle too. There is almost nothing else like it in Portugal. But ' +
        'because it stands so high, the monastery also did a job no monk had planned for: ' +
        'it became a lookout. In 1809 a general stood here and studied the river before his ' +
        'army crossed, and in 1832 and 1833, when Porto was besieged in a war between two ' +
        'brothers who both wanted the throne, the rock kept watch again. Today the only ' +
        'battle here is for the best spot at the railing.',
    },
    facts: [
      {
        el: 'Η εκκλησία και το περιστύλιο είναι και τα δύο κυκλικά, κάτι σπανιότατο στην Πορτογαλία.',
        en: 'Both the church and the cloister are circular, which is very rare in Portugal.',
      },
      {
        el: 'Βρίσκεται στη Βίλα Νόβα ντε Γκάια, απέναντι από το Πόρτο, όχι μέσα στην πόλη.',
        en: 'It stands in Vila Nova de Gaia, across the river from Porto, not in the city.',
      },
      {
        el: 'Κάτω από τον βράχο, οι μακριές στέγες είναι οι κάβες όπου ωριμάζει το κρασί Πόρτο.',
        en: 'Below the cliff, the long roofs are the cellars where port wine matures.',
      },
    ],
    location: {
      lat: 41.13833,
      lng: -8.6075,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q10332614', deltaM: 0 },
        { kind: 'osm', ref: 'relation/4673533', deltaM: 26 },
        { kind: 'wikipedia', ref: 'Monastery of Serra do Pilar', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el:
          'Πέρασε το κάτω κατάστρωμα της γέφυρας και ανέβα τα σκαλιά στη Γκάια. Το ' +
          'πλάτωμα με τη θέα είναι δίπλα στο μοναστήρι και είναι ανοιχτό ακόμα κι όταν η εκκλησία δεν είναι.',
        en:
          'Cross the lower deck of the bridge and climb the steps on the Gaia side. The ' +
          'terrace with the view is beside the monastery and is open even when the church is not.',
      },
    },
    question: {
      q: {
        el: 'Τι έκανε αυτό το μοναστήρι χρήσιμο στους στρατιώτες;',
        en: 'What made this monastery useful to soldiers?',
      },
      answers: [
        {
          el: 'Από τον βράχο του βλέπεις ολόκληρο το ποτάμι με μια ματιά',
          en: 'From its rock you can see the whole river at once',
        },
        {
          el: 'Είχε πολύ χοντρούς τοίχους για κανόνι',
          en: 'Its walls were far too thick for cannon',
        },
        {
          el: 'Βρισκόταν ακριβώς πάνω στον μοναδικό δρόμο που έβγαζε στο Πόρτο',
          en: 'It sat directly on the only road that led into the city of Porto',
        },
        {
          el: 'Οι μοναχοί του γνώριζαν κάθε μονοπάτι της περιοχής και τα έδειχναν',
          en: 'Its monks knew every path in the area and would point them all out',
        },
      ],
      explanation: {
        el:
          'Ένα παρατηρητήριο δεν χρειάζεται τείχη, χρειάζεται ύψος. Από εδώ φαίνονται η ' +
          'γέφυρα, το ποτάμι και ολόκληρη η πόλη.',
        en:
          'A lookout does not need walls, it needs height. From here you see the bridge, ' +
          'the river and the entire city.',
      },
    },
  },

  // ------------------------------------------------------------- clérigos
  {
    id: 'porto-clerigos',
    cityId: 'porto',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Ο πύργος των Κλέριγκος', en: 'The Clérigos Church and Tower' },
    tagline: {
      el: 'Φάρος χωρίς φως, στη μέση της πόλης',
      en: 'A lighthouse with no light, in the middle of town',
    },
    story: {
      el:
        'Αυτός ο πύργος είναι το ψηλότερο πράγμα της παλιάς πόλης: περίπου εβδομήντα ' +
        'πέντε μέτρα, όσο είκοσι σπίτια το ένα πάνω στο άλλο. Τον σχεδίασε ο Νικολάου ' +
        'Ναζόνι, ένας καλλιτέχνης που ήρθε από την Ιταλία, έμεινε στο Πόρτο και του ' +
        'χάρισε τα ωραιότερα κτίριά του. Ο πύργος τελείωσε το 1763 και για καιρό ήταν ο ' +
        'ψηλότερος σε ολόκληρη την Πορτογαλία. Είχε όμως και μια δουλειά που δεν φαίνεται ' +
        'από κάτω: τα καράβια που ανέβαιναν τον Δούρο τον έβλεπαν από μακριά και ' +
        'καταλάβαιναν ότι έφτασαν στο Πόρτο. Ήταν, ουσιαστικά, ένας φάρος χωρίς φως. ' +
        'Μέσα, μια στριφογυριστή σκάλα από πέτρα με πάνω από διακόσια σκαλιά ανεβαίνει ' +
        'ως τις καμπάνες, και στενεύει όσο ανεβαίνεις. Ο Ναζόνι αγάπησε τόσο πολύ αυτό το ' +
        'μέρος που ζήτησε να ταφεί μέσα στην εκκλησία του, και το 1773 έγινε ακριβώς αυτό.',
      en:
        'This tower is the tallest thing in the old city: about seventy-five metres, like ' +
        'twenty houses stacked on top of each other. It was designed by Nicolau Nasoni, an ' +
        'artist who came from Italy, stayed in Porto and gave it some of its finest ' +
        'buildings. The tower was finished in 1763 and for a long time it was the tallest ' +
        'in all of Portugal. But it also had a job you cannot see from below: ships coming ' +
        'up the Douro spotted it from far off and knew they had reached Porto. It was, in ' +
        'effect, a lighthouse with no light. Inside, a spiral stone staircase of more than ' +
        'two hundred steps climbs to the bells, narrowing as it goes. Nasoni loved the ' +
        'place so much that he asked to be buried inside his own church, and in 1773 that ' +
        'is exactly what happened.',
    },
    facts: [
      {
        el: 'Ο πύργος έχει ύψος περίπου 75 μέτρα και τελείωσε το 1763.',
        en: 'The tower is about 75 metres high and was finished in 1763.',
      },
      {
        el: 'Η εσωτερική σκάλα έχει πάνω από διακόσια σκαλιά και στενεύει προς τα πάνω.',
        en: 'The staircase inside has over two hundred steps and narrows as it rises.',
      },
      {
        el: 'Ο αρχιτέκτονάς του, ο Νικολάου Ναζόνι, θάφτηκε μέσα στην ίδια εκκλησία το 1773.',
        en: 'Its architect, Nicolau Nasoni, was buried inside the same church in 1773.',
      },
    ],
    location: {
      lat: 41.14587,
      lng: -8.61401,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q18642', deltaM: 0 },
        { kind: 'osm', ref: 'way/223780953', deltaM: 7 },
        { kind: 'wikipedia', ref: 'Clérigos Church', deltaM: 53 },
      ],
      verifiedAt: '2026-09-12',
      note:
        'The point is the church, which is what Wikidata holds. The Wikipedia article ' +
        'lands 53 m away, at the tower end of the same building: church and tower are one ' +
        'structure and their two halves are simply that far apart.',
      findIt: {
        el:
          'Η είσοδος για τη σκάλα του πύργου δεν είναι η πόρτα της εκκλησίας. Είναι στη ' +
          'Ρούα ντε Σάο Φιλίπε ντε Νέρι, στο πλάι, όπου συνήθως υπάρχει ουρά.',
        en:
          'The way into the tower stair is not the church door. It is on Rua de São Filipe ' +
          'de Nery, round the side, where there is usually a queue.',
      },
    },
    question: {
      q: {
        el: 'Γιατί λένε ότι ο πύργος ήταν φάρος χωρίς φως;',
        en: 'Why is the tower called a lighthouse with no light?',
      },
      answers: [
        {
          el: 'Τα καράβια το έβλεπαν από μακριά και ήξεραν ότι έφτασαν',
          en: 'Ships saw it from far off and knew they had arrived',
        },
        {
          el: 'Άναβαν φωτιά στην κορυφή του τις νύχτες',
          en: 'A fire burned at its top on foggy nights',
        },
        {
          el: 'Το άσπρο μάρμαρό του γυάλιζε υπερβολικά',
          en: 'Its white marble dazzled everyone looking',
        },
        {
          el: 'Οι καμπάνες του χτυπούσαν όποτε πλησίαζε πλοίο στο στόμιο του ποταμού',
          en: 'Its bells were rung whenever a ship approached the mouth of the river',
        },
      ],
      explanation: {
        el:
          'Ένας φάρος λέει «εδώ είναι η στεριά». Ο πύργος έλεγε το ίδιο, μόνο που το ' +
          'έλεγε με το ύψος του και όχι με λάμπα.',
        en:
          'A lighthouse says «land is here». The tower said the same thing, only it said ' +
          'it with its height instead of a lamp.',
      },
    },
  },
  // -------------------------------------------------------- igreja do carmo
  {
    id: 'porto-igreja-do-carmo',
    cityId: 'porto',
    emoji: '⛪',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Η εκκλησία του Κάρμο', en: 'Igreja do Carmo' },
    tagline: {
      el: 'Ένας ολόκληρος τοίχος που είναι μία εικόνα',
      en: 'A whole wall that is really one big picture',
    },
    story: {
      el:
        'Οι περισσότερες εκκλησίες κρατούν τα ωραία τους μέσα. Αυτή τα έβγαλε έξω. Ο ' +
        'μεγάλος πλαϊνός της τοίχος, αυτός που βλέπει στην πλατεία, είναι σκεπασμένος από ' +
        'πάνω ως κάτω με μπλε και άσπρα πλακάκια, και όλα μαζί δεν είναι μοτίβο αλλά μία ' +
        'ενιαία εικόνα. Μπήκαν το 1912, πολύ αργότερα από την ίδια την εκκλησία, που ' +
        'χτίστηκε στα μέσα του 18ου αιώνα. Στάσου απέναντι και δες πώς λειτουργεί: από ' +
        'κοντά είναι εκατοντάδες τετράγωνα κεραμικά, από μακριά είναι σκηνές με ' +
        'ανθρώπους, πλοία και σύννεφα. Είναι ένα πάζλ που κάποιος ζωγράφισε πριν κοπεί σε ' +
        'κομμάτια. Και υπάρχει ένα δεύτερο πράγμα να βρεις, πολύ μικρότερο: στην άκρη της ' +
        'εκκλησίας, εκεί που αρχίζει η διπλανή, στέκεται ένα σπίτι με πλάτος περίπου ένα ' +
        'μέτρο. Είναι πραγματικό σπίτι, με πόρτα, παράθυρα και πατώματα, και άνθρωποι ' +
        'έμεναν μέσα του μέχρι τη δεκαετία του 1980.',
      en:
        'Most churches keep their best bits inside. This one put them outside. Its big side ' +
        'wall, the one facing the square, is covered from top to bottom in blue and white ' +
        'tiles, and together they are not a pattern but a single picture. They went up in ' +
        '1912, long after the church itself, which was built in the middle of the ' +
        'eighteenth century. Stand across from it and watch how it works: close up it is ' +
        'hundreds of ceramic squares, far off it is scenes with people, ships and clouds. ' +
        'It is a jigsaw somebody painted before it was cut up. And there is a second thing ' +
        'to find, much smaller: at the end of the church, where the next one begins, stands ' +
        'a house about one metre wide. It is a real house, with a door, windows and floors, ' +
        'and people lived in it until the 1980s.',
    },
    facts: [
      {
        el: 'Ο πλαϊνός τοίχος ντύθηκε με μπλε και άσπρα αζουλέζους το 1912.',
        en: 'The side wall was dressed in blue and white azulejos in 1912.',
      },
      {
        el: 'Η εκκλησία χτίστηκε στα μέσα του 18ου αιώνα, περίπου 150 χρόνια πριν τα πλακάκια.',
        en: 'The church was built in the mid-1700s, about 150 years before the tiles.',
      },
      {
        el: 'Ανάμεσα στις δύο εκκλησίες υπάρχει σπίτι πλάτους περίπου ενός μέτρου, κατοικημένο ως τη δεκαετία του 1980.',
        en: 'Between the two churches sits a house about one metre wide, lived in until the 1980s.',
      },
    ],
    location: {
      lat: 41.14749,
      lng: -8.61627,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q10300891', deltaM: 0 },
        { kind: 'osm', ref: 'way/229772731', deltaM: 2 },
      ],
      verifiedAt: '2026-09-12',
      note:
        'Fifteen metres from porto-igreja-dos-carmelitas, which is under the audit’s 25 m ' +
        'floor. That is not an error: the two churches share a wall, and the pair is ' +
        'declared in `adjacentPairs` in scripts/world/seeds/porto.json. The resolver found ' +
        'no Wikipedia article to cross-check, so this grades B on two sources.',
      findIt: {
        el:
          'Στην πλατεία Πράσα ντε Γκόμες Τεϊσέιρα. Ο τοίχος με τα πλακάκια δεν είναι η ' +
          'πρόσοψη: είναι η δεξιά πλευρά, και τη βλέπεις καλύτερα από την απέναντι γωνία.',
        en:
          'On Praça de Gomes Teixeira. The tiled wall is not the front of the church: it is ' +
          'the right-hand side, and you see it best from the far corner of the square.',
      },
    },
    question: {
      q: {
        el: 'Τι είναι στην πραγματικότητα ο μεγάλος πλαϊνός τοίχος;',
        en: 'What is the big side wall of this church really?',
      },
      answers: [
        {
          el: 'Μία μοναδική εικόνα κομμένη σε εκατοντάδες πλακάκια',
          en: 'One single picture, cut up into hundreds of tiles',
        },
        {
          el: 'Ένα επαναλαμβανόμενο σχέδιο που το αντιγράφει κάθε πλακάκι ολόιδιο',
          en: 'A repeating pattern that every single tile copies exactly the same',
        },
        {
          el: 'Ένας τοίχος απλώς βαμμένος με μπογιά',
          en: 'A painted wall that only mimics ceramic',
        },
        {
          el: 'Ένα ψηφιδωτό από χρωματιστές πέτρες, όπως τα ρωμαϊκά πατώματα',
          en: 'A mosaic of coloured stones, like the floors the Romans used to lay',
        },
      ],
      explanation: {
        el:
          'Ζωγραφίστηκε ως μία σκηνή και ύστερα ψήθηκε σε ξεχωριστά πλακάκια. Γι’ αυτό ' +
          'από κοντά βλέπεις τετράγωνα και από μακριά ανθρώπους.',
        en:
          'It was painted as one scene and then fired as separate tiles. That is why up ' +
          'close you see squares and from a distance you see people.',
      },
    },
  },

  // -------------------------------------------------- igreja dos carmelitas
  {
    id: 'porto-igreja-dos-carmelitas',
    cityId: 'porto',
    emoji: '🕊️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Η εκκλησία των Καρμελιτών', en: 'Igreja dos Carmelitas' },
    tagline: {
      el: 'Η μεγαλύτερη σε ηλικία από τις δύο διπλανές αδελφές',
      en: 'The older of the two sisters standing side by side',
    },
    story: {
      el:
        'Από την πλατεία μοιάζουν με ένα κτίριο, αλλά είναι δύο. Αυτή εδώ, η εκκλησία των ' +
        'Καρμελιτών, είναι η παλαιότερη: χτίστηκε στις αρχές του 17ου αιώνα για μοναχούς ' +
        'του τάγματος του Κάρμηλου. Η διπλανή, η εκκλησία του Κάρμο, ήρθε περίπου εκατόν ' +
        'πενήντα χρόνια αργότερα και ανήκε σε άλλη κοινότητα. Αν κοιτάξεις προσεκτικά τις ' +
        'προσόψεις θα δεις τη διαφορά της εποχής: αυτή είναι πιο αυστηρή και ήσυχη, η ' +
        'γειτόνισσά της πιο φανταχτερή. Ανάμεσά τους στέκεται το πολύ στενό σπίτι, και ' +
        'εδώ αρχίζει μια ιστορία που λέγεται στο Πόρτο εδώ και γενιές: ότι το σπιτάκι ' +
        'μπήκε εκεί για να μη μοιράζονται τοίχο δύο διαφορετικές θρησκευτικές κοινότητες. ' +
        'Οι ιστορικοί δεν συμφωνούν όλοι, γιατί υπήρχαν και κανόνες που απαγόρευαν σε δύο ' +
        'εκκλησίες να ακουμπούν. Πάντως η αλήθεια είναι στα σίγουρα ότι το σπίτι υπάρχει, ' +
        'και ότι κάποιος ζούσε μέσα του.',
      en:
        'From the square they look like one building, but they are two. This one, the ' +
        'Carmelites’ church, is the older: it was built in the early 1600s for friars of the ' +
        'Carmelite order. The one next door, the Igreja do Carmo, arrived about a hundred ' +
        'and fifty years later and belonged to a different community. Look carefully at the ' +
        'two fronts and you can see the change in fashion: this one is plainer and quieter, ' +
        'its neighbour is showier. Between them stands the very narrow house, and here a ' +
        'story begins that Porto has told for generations: that the little house was put ' +
        'there so two different religious communities would never share a wall. Historians ' +
        'do not all agree, because there were also rules forbidding two churches to touch. ' +
        'What is certain is that the house is there, and that somebody lived in it.',
    },
    facts: [
      {
        el: 'Χτίστηκε στις αρχές του 17ου αιώνα για μοναχούς του τάγματος του Κάρμηλου.',
        en: 'It was built in the early 1600s for friars of the Carmelite order.',
      },
      {
        el: 'Είναι περίπου 150 χρόνια παλαιότερη από τη διπλανή εκκλησία του Κάρμο.',
        en: 'It is about 150 years older than the Igreja do Carmo next door.',
      },
      {
        el: 'Στο παλιό μοναστήρι δίπλα της στεγάζεται σήμερα η GNR, μία από τις αστυνομίες της Πορτογαλίας.',
        en: 'The old convent beside it is home today to the GNR, one of Portugal’s police forces.',
      },
    ],
    location: {
      lat: 41.14747,
      lng: -8.61645,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q10300948', deltaM: 0 },
        { kind: 'osm', ref: 'way/229772732', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      note:
        'The declared neighbour of porto-igreja-do-carmo, 15 m away. An English Wikidata ' +
        'search for these churches returns the wrong towns entirely; both q-ids were ' +
        'confirmed from Portuguese descriptions naming Porto.',
      findIt: {
        el:
          'Είναι η αριστερή από τις δύο εκκλησίες, όπως τις κοιτάς από την πλατεία. Ψάξε ' +
          'την πιο απλή πρόσοψη, χωρίς τον μεγάλο μπλε τοίχο στο πλάι.',
        en:
          'It is the left-hand church of the two as you face them from the square. Look ' +
          'for the plainer front, the one with no great blue wall down its side.',
      },
    },
    question: {
      q: {
        el: 'Ποια από τις δύο διπλανές εκκλησίες χτίστηκε πρώτη;',
        en: 'Which of the two neighbouring churches was built first?',
      },
      answers: [
        {
          el: 'Των Καρμελιτών, περίπου 150 χρόνια νωρίτερα',
          en: 'The Carmelites’ church, about 150 years earlier',
        },
        {
          el: 'Του Κάρμο, γιατί έχει τον μεγάλο τοίχο με τα μπλε πλακάκια',
          en: 'The Carmo, because it has the great wall of blue tiles on it',
        },
        {
          el: 'Χτίστηκαν και οι δύο την ίδια εποχή',
          en: 'Both at once, by the very same builders',
        },
        {
          el: 'Το στενό σπίτι που είναι ανάμεσά τους',
          en: 'The narrow house, which is older than both',
        },
      ],
      explanation: {
        el:
          'Οι Καρμελίτες είναι από τις αρχές του 17ου αιώνα. Ο Κάρμο ήρθε στα μέσα του ' +
          '18ου, και τα πλακάκια του ακόμα αργότερα, το 1912.',
        en:
          'The Carmelites’ church is early 1600s. The Carmo came in the mid-1700s, and its ' +
          'tiles later still, in 1912.',
      },
    },
  },

  // ------------------------------------------------------ mercado do bolhão
  {
    id: 'porto-mercado-do-bolhao',
    cityId: 'porto',
    emoji: '🍊',
    category: 'food',
    difficulty: 1,

    name: { el: 'Η αγορά του Μπολιάο', en: 'The Bolhão Market' },
    tagline: {
      el: 'Το όνομά της σημαίνει «μεγάλη φουσκάλα»',
      en: 'Its name means «the big bubble»',
    },
    story: {
      el:
        'Πολύ πριν από την αγορά, εδώ ήταν ένα βαλτώδες κοίλωμα όπου το νερό ανέβαινε ' +
        'μόνο του από το έδαφος και έκανε φουσκάλες. Οι κάτοικοι το έλεγαν μπολιάο, τη ' +
        'μεγάλη φουσκάλα, και όταν έστησαν εκεί πάγκους το όνομα έμεινε. Το κτίριο που ' +
        'βλέπεις άνοιξε το 1914: δύο όροφοι με σιδερένια κάγκελα γύρω από μια ανοιχτή ' +
        'αυλή, χωρίς σκεπή στη μέση, ώστε να μπαίνει φως και αέρας ανάμεσα στα ψάρια και ' +
        'τα λουλούδια. Επί εκατό χρόνια οι πωλητές στοίβαζαν εδώ πορτοκάλια, τυριά, ψωμί, ' +
        'ελιές, φρέσκο ψάρι, και φώναζαν ο ένας πιο δυνατά από τον άλλο. Ύστερα η αγορά ' +
        'κουράστηκε. Η πόλη μπορούσε να τη γκρεμίσει και να χτίσει κάτι καινούργιο· ' +
        'αντ’ αυτού την επισκεύασε κομμάτι κομμάτι και την ξανάνοιξε το 2022, με το ίδιο ' +
        'σίδερο, τον ίδιο γρανίτη και τους ίδιους πάγκους. Το σωστό είναι συχνά και το πιο δύσκολο.',
      en:
        'Long before the market, this was a marshy hollow where water pushed up out of the ' +
        'ground on its own and made bubbles. People called it the bolhão, the big bubble, ' +
        'and when stalls appeared here the name stuck. The building you see opened in 1914: ' +
        'two floors of iron railings around an open courtyard, with no roof in the middle, ' +
        'so that light and air could get in among the fish and the flowers. For a hundred ' +
        'years the sellers piled up oranges, cheese, bread, olives and fresh fish here, and ' +
        'shouted louder than each other. Then the market wore out. The city could have ' +
        'knocked it down and built something new; instead it repaired it piece by piece and ' +
        'reopened it in 2022, with the same iron, the same granite and the same stalls. The ' +
        'right thing is often also the harder one.',
    },
    facts: [
      {
        el: 'Το «μπολιάο» σημαίνει μεγάλη φουσκάλα, από την πηγή που ανέβλυζε εδώ.',
        en: '«Bolhão» means big bubble, after the spring that once welled up here.',
      },
      {
        el: 'Το κτίριο με τα σιδερένια κάγκελα άνοιξε το 1914 και έχει ανοιχτή αυλή χωρίς σκεπή.',
        en: 'The iron-railed building opened in 1914 and has an open courtyard with no roof.',
      },
      {
        el: 'Ξανάνοιξε το 2022 έπειτα από επισκευή που κράτησε τέσσερα χρόνια.',
        en: 'It reopened in 2022 after a repair that took four years.',
      },
    ],
    location: {
      lat: 41.14917,
      lng: -8.60694,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q10328805', deltaM: 0 },
        { kind: 'osm', ref: 'relation/3046626', deltaM: 24 },
      ],
      verifiedAt: '2026-09-12',
      note:
        'The owner’s eyeball test put an earlier pin for this market two streets off. The ' +
        'seed now names the market building itself and the OSM relation for the same ' +
        'building agrees to 24 m, which for a whole city block is the block, not a miss.',
      findIt: {
        el:
          'Η κύρια είσοδος βλέπει στη Ρούα Φορμόζα. Μπες και προχώρα ως τη μέση: εκεί ' +
          'είναι η αυλή χωρίς σκεπή, και από εκεί βλέπεις και τους δύο ορόφους.',
        en:
          'The main door faces Rua Formosa. Go in and walk to the middle: that is where the ' +
          'roofless courtyard is, and from there you can see both floors at once.',
      },
    },
    question: {
      q: {
        el: 'Από πού πήρε το όνομά της η αγορά;',
        en: 'Where did this market get its name from?',
      },
      answers: [
        {
          el: 'Από μια πηγή που έβγαζε φουσκάλες μέσα από το έδαφος',
          en: 'From a spring that once bubbled up out of the ground',
        },
        {
          el: 'Από τον έμπορο που έστησε τον πρώτο πάγκο',
          en: 'From the trader with the very first stall',
        },
        {
          el: 'Από το σχήμα της αυλής της, που είναι στρογγυλή σαν μεγάλη μπάλα',
          en: 'From the shape of its courtyard, which is round like a big ball',
        },
        {
          el: 'Από τα καλάθια που κουβαλούσαν οι αγοραστές παλιά στους ώμους τους',
          en: 'From the baskets shoppers once carried around on their own shoulders',
        },
      ],
      explanation: {
        el:
          'Νερό ανέβαινε από το έδαφος και έκανε φουσκάλες. Μπολιάο σημαίνει «μεγάλη ' +
          'φουσκάλα», και το όνομα έμεινε πάνω από έναν αιώνα μετά.',
        en:
          'Water pushed up out of the ground and bubbled. Bolhão means «big bubble», and ' +
          'the name outlasted the spring by more than a century.',
      },
    },
  },

  // ----------------------------------------------------- palácio de cristal
  {
    id: 'porto-palacio-de-cristal',
    cityId: 'porto',
    emoji: '🦚',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Οι κήποι του Κρυστάλλινου Παλατιού', en: 'The Gardens of the Palácio de Cristal' },
    tagline: {
      el: 'Παγώνια, δέντρα, και ένα παλάτι που δεν υπάρχει πια',
      en: 'Peacocks, trees, and a palace that is no longer there',
    },
    story: {
      el:
        'Το 1865 το Πόρτο έχτισε ένα παλάτι από σίδερο και γυαλί, σαν γιγάντιο ' +
        'θερμοκήπιο, για μια μεγάλη έκθεση όπου οι χώρες έδειχναν τις εφευρέσεις και τις ' +
        'τέχνες τους. Γύρω του, ένας Γερμανός σχεδιαστής κήπων, ο Εμίλ Νταβίντ, φύτεψε ' +
        'δέντρα, έστησε σιντριβάνια και έστρωσε μονοπάτια στον λόφο πάνω από το ποτάμι. ' +
        'Το γυάλινο παλάτι όμως πάλιωσε και το 1951 κατεδαφίστηκε· στη θέση του σηκώθηκε ' +
        'ένα τεράστιο στρογγυλό κτίριο με θόλο, που σήμερα φέρει το όνομα της Ρόζα Μότα, ' +
        'μιας μαραθωνοδρόμου από το Πόρτο που κέρδισε ολυμπιακό χρυσό. Οι κήποι όμως ' +
        'έμειναν, και μαζί τους τα παγώνια, που περπατούν στα μονοπάτια σαν να τους ' +
        'ανήκει ο τόπος και ανοίγουν την ουρά τους όποτε τους καπνίσει. Πήγαινε ως την ' +
        'άκρη του λόφου: από εκεί βλέπεις τον Δούρο να φεύγει ίσια προς τον Ατλαντικό.',
      en:
        'In 1865 Porto built a palace out of iron and glass, like a giant greenhouse, for a ' +
        'great exhibition where countries showed off their inventions and their crafts. ' +
        'Around it a German garden designer, Émile David, planted trees, set up fountains ' +
        'and laid paths across the hill above the river. The glass palace grew old, ' +
        'though, and in 1951 it was pulled down; in its place rose an enormous round ' +
        'building with a dome, which today carries the name of Rosa Mota, a marathon runner ' +
        'from Porto who won Olympic gold. The gardens stayed, and so did the peacocks, who ' +
        'walk the paths as though they own the place and fan out their tails whenever they ' +
        'feel like it. Go to the edge of the hill: from there you can watch the Douro head ' +
        'straight out to the Atlantic.',
    },
    facts: [
      {
        el: 'Το Κρυστάλλινο Παλάτι του 1865 ήταν από σίδερο και γυαλί. Κατεδαφίστηκε το 1951.',
        en: 'The 1865 Crystal Palace was iron and glass. It was demolished in 1951.',
      },
      {
        el: 'Τους κήπους σχεδίασε ο Γερμανός Εμίλ Νταβίντ, στον λόφο πάνω από τον Δούρο.',
        en: 'The gardens were designed by the German Émile David, on the hill above the Douro.',
      },
      {
        el: 'Ο θόλος στη θέση του παλατιού πήρε το όνομα της Ρόζα Μότα, ολυμπιονίκη μαραθωνοδρόμου.',
        en: 'The dome that replaced it is named after Rosa Mota, an Olympic marathon champion.',
      },
    ],
    location: {
      lat: 41.14706,
      lng: -8.62646,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q10306385', deltaM: 0 },
        { kind: 'osm', ref: 'way/244599647', deltaM: 5 },
      ],
      verifiedAt: '2026-09-12',
      note:
        'Anchor is `area`, not a door: this is a park of several hectares and the point is ' +
        'a position inside it rather than an entrance. No Wikipedia article existed for ' +
        'the resolver to use as a third source, so it grades B.',
      findIt: {
        el:
          'Η μεγάλη πύλη είναι στη Ρούα ντε Ντομ Μανουέλ Β΄. Μπες και κράτα δεξιά προς το ' +
          'ποτάμι: το σημείο με τη θέα είναι στην άκρη, πίσω από τα δέντρα.',
        en:
          'The big gate is on Rua de Dom Manuel II. Go in and keep right, towards the ' +
          'river: the viewpoint is at the far edge, behind the trees.',
      },
    },
    question: {
      q: {
        el: 'Τι στέκεται σήμερα εκεί όπου ήταν το γυάλινο παλάτι;',
        en: 'What stands today where the glass palace used to be?',
      },
      answers: [
        {
          el: 'Ένα στρογγυλό κτίριο με θόλο',
          en: 'A round building with a dome on top',
        },
        {
          el: 'Μια λίμνη με βαρκάκια, πιο πρόσφατη',
          en: 'A boating lake, dug out much later',
        },
        {
          el: 'Ένα ακριβές αντίγραφο, πάλι από γυαλί',
          en: 'An exact copy, built in glass again',
        },
        {
          el: 'Ένα μεγάλο άδειο λιβάδι με παγκάκια',
          en: 'A big empty meadow for the visitors',
        },
      ],
      explanation: {
        el:
          'Ο θόλος της Ρόζα Μότα. Πήρε το όνομα μιας μαραθωνοδρόμου από το Πόρτο που ' +
          'κέρδισε ολυμπιακό χρυσό μετάλλιο.',
        en:
          'The Rosa Mota dome. It was named after a marathon runner from Porto who won an ' +
          'Olympic gold medal.',
      },
    },
  },
  // ------------------------------------------------- museu do carro eléctrico
  {
    id: 'porto-carro-electrico',
    cityId: 'porto',
    emoji: '🚋',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Το Μουσείο του Τραμ', en: 'Museu do Carro Eléctrico' },
    tagline: {
      el: 'Ένα εργοστάσιο ρεύματος γεμάτο με ό,τι κάποτε τροφοδοτούσε',
      en: 'A power station full of the machines it used to feed',
    },
    story: {
      el:
        'Τα τραμ του Πόρτο χρειάζονταν ρεύμα, και το ρεύμα έπρεπε να φτιαχτεί κάπου. Έτσι ' +
        'η πόλη έχτισε ένα εργοστάσιο ηλεκτρισμού στο Μασαρέλος, ακριβώς δίπλα στο ' +
        'ποτάμι, και έκαιγε εκεί κάρβουνο για να γυρίζουν οι γεννήτριες που τροφοδοτούσαν ' +
        'το καλώδιο πάνω από τις ράγες. Όταν το κτίριο δεν χρειαζόταν πια για αυτή τη ' +
        'δουλειά, δεν εξαφανίστηκε. Το 1992 άνοιξε ξανά ως μουσείο για τις ίδιες ακριβώς ' +
        'μηχανές που κάποτε τροφοδοτούσε, πράγμα αρκετά τακτοποιημένο. Μέσα, κάτω από μια ' +
        'σιδερένια στέγη, στέκονται σειρές από βαγόνια: ξύλινα με ορειχάλκινες χειρολαβές, ' +
        'άλλα που πριν από τον ηλεκτρισμό τα τραβούσαν άλογα, και βαγόνια εργασίας που δεν ' +
        'μετέφεραν ποτέ κανέναν επιβάτη. Το Πόρτο έχει και μια σοβαρή αξίωση σε αυτή την ' +
        'ιστορία: το πρώτο ηλεκτρικό τραμ σε ολόκληρη την Ιβηρική χερσόνησο κύλησε εδώ, το ' +
        '1895. Και έξω από την πόρτα περνούν ακόμα αληθινά τραμ.',
      en:
        'Porto’s trams needed electricity, and electricity had to be made somewhere. So the ' +
        'city built a power station at Massarelos, right beside the river, and burned coal ' +
        'in it to spin the generators that fed the wire above the rails. When the building ' +
        'was no longer needed for that job, it did not disappear. In 1992 it opened again ' +
        'as a museum about the very machines it used to power, which is a tidy sort of ' +
        'recycling. Inside, under an iron roof, stand rows of cars: wooden ones with brass ' +
        'handles, older ones that horses pulled before electricity arrived, and works cars ' +
        'that never carried a single passenger in their lives. Porto has a serious claim in ' +
        'this story too: the first electric tram anywhere in the Iberian Peninsula ran in ' +
        'this city, in 1895. And real trams still pass the door outside.',
    },
    facts: [
      {
        el: 'Το 1895 κύλησε στο Πόρτο το πρώτο ηλεκτρικό τραμ της Ιβηρικής χερσονήσου.',
        en: 'In 1895 Porto ran the first electric tram in the Iberian Peninsula.',
      },
      {
        el: 'Το μουσείο στεγάζεται στο παλιό εργοστάσιο ηλεκτρισμού του Μασαρέλος.',
        en: 'The museum is housed in the old Massarelos electricity works.',
      },
      {
        el: 'Άνοιξε ως μουσείο το 1992, στο ίδιο κτίριο που έδινε ρεύμα στα τραμ.',
        en: 'It opened as a museum in 1992, in the same building that powered the trams.',
      },
    ],
    location: {
      lat: 41.1478,
      lng: -8.63279,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q908989', deltaM: 0 },
        { kind: 'osm', ref: 'way/332479849', deltaM: 27 },
        { kind: 'wikipedia', ref: 'Porto Tram Museum', deltaM: 11 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el:
          'Στην Αλαμέδα ντε Μπασίλιο Τελές, στην όχθη του ποταμού κάτω από τον λόφο. Το ' +
          'κτίριο είναι το μακρύ, τούβλινο, με τη σιδερένια στέγη· οι ράγες περνούν μπροστά του.',
        en:
          'On Alameda de Basílio Teles, on the riverbank below the hill. The building is the ' +
          'long brick one with the iron roof; the rails run right past its front.',
      },
    },
    question: {
      q: {
        el: 'Γιατί στεγάζεται ένα μουσείο τραμ μέσα σε εργοστάσιο ρεύματος;',
        en: 'Why is a tram museum housed inside a power station?',
      },
      answers: [
        {
          el: 'Το εργοστάσιο έφτιαχνε το ρεύμα με το οποίο κινούνταν τα τραμ',
          en: 'That station made the electricity the trams ran on',
        },
        {
          el: 'Ήταν η μεγαλύτερη άδεια αίθουσα που είχε απομείνει σε όλη την πόλη',
          en: 'It was the biggest empty hall left anywhere in the whole city',
        },
        {
          el: 'Εκεί μέσα κατασκευάζονταν τα βαγόνια',
          en: 'The cars themselves were built there',
        },
        {
          el: 'Ήταν δίπλα στην τελευταία ανοιχτή γραμμή',
          en: 'It stood beside the last open line',
        },
      ],
      explanation: {
        el:
          'Το κτίριο έκαιγε κάρβουνο για να γυρίζουν γεννήτριες, και οι γεννήτριες ' +
          'τροφοδοτούσαν το καλώδιο πάνω από τις ράγες.',
        en:
          'The building burned coal to spin generators, and the generators fed the wire ' +
          'above the rails.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μπες με σκυμμένο κεφάλι στα βαγόνια: οι πόρτες τους είναι για ανθρώπους του 1900.',
        en: 'Duck as you step into the cars: their doors were made for people of 1900.',
      },
      rooms: [
        {
          id: 'porto-carro-electrico-power-station',
          emoji: '⚡',
          name: { el: 'Το εργοστάσιο ρεύματος', en: 'The power station' },
          intro: {
            el:
              'Πριν κοιτάξεις ένα μόνο βαγόνι, κοίτα το κτίριο. Είναι η αιτία που υπάρχουν ' +
              'όλα τα υπόλοιπα. Ένα τραμ δεν κουβαλάει καύσιμο· παίρνει ρεύμα από ένα ' +
              'καλώδιο, και κάποιος πρέπει να το φτιάξει. Αυτό γινόταν ακριβώς εδώ, με ' +
              'κάρβουνο, ατμό και μηχανές που έκαναν θόρυβο μέρα νύχτα.',
            en:
              'Before you look at a single car, look at the building. It is the reason all ' +
              'the rest exist. A tram carries no fuel; it takes current from a wire, and ' +
              'somebody has to make that current. It was made right here, out of coal, steam ' +
              'and machines that were loud day and night.',
          },
          exhibits: [
            {
              id: 'porto-carro-electrico-generator-hall',
              name: { el: 'Η αίθουσα των γεννητριών', en: 'The generator hall' },
              blurb: {
                el:
                  'Ένας ψηλός χώρος με σιδερένιες δοκούς και μεγάλα παράθυρα ψηλά στους ' +
                  'τοίχους. Δεν χτίστηκε έτσι για ομορφιά: οι μηχανές ήταν τεράστιες, ' +
                  'έβγαζαν θερμότητα, και ο ζεστός αέρας έπρεπε να φύγει από κάπου. Τα ' +
                  'παράθυρα είναι ψηλά ώστε να μπαίνει φως χωρίς να μπαίνει κόσμος. Σήμερα ο ' +
                  'ίδιος χώρος κρατάει τα βαγόνια σε σειρές, και ταιριάζει τέλεια, γιατί ' +
                  'ένας χώρος φτιαγμένος για μεγάλα μηχανήματα δέχεται εύκολα άλλα μεγάλα ' +
                  'μηχανήματα.',
                en:
                  'A tall space with iron beams and big windows high up the walls. It was not ' +
                  'built that way for beauty: the machines were enormous, they threw out ' +
                  'heat, and the hot air had to leave somehow. The windows are high so that ' +
                  'light gets in without people getting in. Today the same space holds the ' +
                  'cars in rows, and it fits perfectly, because a hall built for big ' +
                  'machinery takes other big machinery without complaining.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι τόσο ψηλά τα παράθυρα αυτής της αίθουσας;',
                  en: 'Why are the windows of this hall set so high up?',
                },
                answers: [
                  {
                    el: 'Για φως και για να φεύγει προς τα πάνω ο ζεστός αέρας',
                    en: 'For daylight, and to let the hot air escape upwards',
                  },
                  {
                    el: 'Για να μπαίνει λιγότερος θόρυβος από τον δρόμο',
                    en: 'To keep the noise of the street outside',
                  },
                  {
                    el: 'Γιατί χαμηλότερα θα τα έσπαγαν οι σπίθες από τις γεννήτριες',
                    en: 'Because lower down the sparks from the machines would break them',
                  },
                  {
                    el: 'Για να χωράνε τα ράφια με τα εργαλεία κάτω από κάθε παράθυρο',
                    en: 'So the shelves of tools would fit underneath every one of them',
                  },
                ],
                explanation: {
                  el:
                    'Ο ζεστός αέρας ανεβαίνει. Ένα παράθυρο ψηλά είναι ταυτόχρονα λάμπα και ' +
                    'καμινάδα.',
                  en:
                    'Hot air rises. A window up high is a lamp and a chimney at the same ' +
                    'time.',
                },
              },
            },
            {
              id: 'porto-carro-electrico-coal-and-steam',
              name: { el: 'Το κάρβουνο και ο ατμός', en: 'Coal and steam' },
              blurb: {
                el:
                  'Ο ηλεκτρισμός δεν βγαίνει από το πουθενά. Εδώ η αλυσίδα ήταν: κάρβουνο ' +
                  'που καίγεται, νερό που βράζει, ατμός που σπρώχνει με δύναμη, μια μηχανή ' +
                  'που γυρίζει, και μια γεννήτρια που μετατρέπει το γύρισμα σε ρεύμα. Πέντε ' +
                  'βήματα, και στο τέλος ένα βαγόνι κινείται στην άλλη άκρη της πόλης χωρίς ' +
                  'να καίει τίποτα το ίδιο. Αυτό ήταν και το μεγάλο πλεονέκτημα του τραμ: ο ' +
                  'καπνός έμενε στο εργοστάσιο, όχι στον δρόμο όπου περπατούσε ο κόσμος.',
                en:
                  'Electricity does not come out of nowhere. Here the chain ran: coal burns, ' +
                  'water boils, steam pushes hard, an engine turns, and a generator turns the ' +
                  'turning into current. Five steps, and at the end a car moves on the far ' +
                  'side of the city without burning anything itself. That was the tram’s big ' +
                  'advantage: the smoke stayed at the works instead of in the street where ' +
                  'people were walking.',
              },
              question: {
                q: {
                  el: 'Ποιο ήταν το πλεονέκτημα του ηλεκτρικού τραμ στον δρόμο;',
                  en: 'What was the electric tram’s advantage out in the street?',
                },
                answers: [
                  {
                    el: 'Ο καπνός έμενε πίσω, στο εργοστάσιο δίπλα στο ποτάμι',
                    en: 'The smoke stayed behind at the works by the river',
                  },
                  {
                    el: 'Μπορούσε να κινηθεί και χωρίς ράγες όταν χρειαζόταν να στρίψει',
                    en: 'It could move without rails whenever it needed to turn a corner',
                  },
                  {
                    el: 'Ήταν φθηνότερο από ένα βαγόνι με άλογα',
                    en: 'It was cheaper to build than a horse car',
                  },
                  {
                    el: 'Δεν χρειαζόταν οδηγό, γιατί σταματούσε μόνο του σε κάθε στάση',
                    en: 'It needed no driver, because it stopped by itself at every stop',
                  },
                ],
                explanation: {
                  el:
                    'Το κάψιμο γινόταν σε ένα κτίριο δίπλα στο ποτάμι. Ο δρόμος έπαιρνε ' +
                    'μόνο την κίνηση.',
                  en:
                    'The burning happened in one building by the river. The street got only ' +
                    'the movement.',
                },
              },
            },
            {
              id: 'porto-carro-electrico-overhead-wire',
              name: { el: 'Το καλώδιο από πάνω', en: 'The wire overhead' },
              blurb: {
                el:
                  'Κοίτα την οροφή πάνω από τις ράγες και θα δεις ένα σύρμα. Από εκεί ' +
                  'παίρνει το ρεύμα το βαγόνι, με ένα κοντάρι ή έναν βραχίονα που ακουμπάει ' +
                  'από κάτω και γλιστράει καθώς προχωράει. Το ρεύμα κατεβαίνει, περνάει από ' +
                  'τον κινητήρα και επιστρέφει στο εργοστάσιο μέσα από τις ίδιες τις ράγες. ' +
                  'Γι’ αυτό χρειάζεται μόνο ένα καλώδιο πάνω και όχι δύο: το δεύτερο ' +
                  'καλώδιο είναι το σίδερο κάτω από τις ρόδες, και το πατάς κάθε φορά που ' +
                  'ανεβαίνεις.',
                en:
                  'Look at the roof above the rails and you will see a wire. That is where ' +
                  'the car takes its current, with a pole or an arm that touches it from ' +
                  'below and slides along as it goes. The current comes down, passes through ' +
                  'the motor and goes back to the works through the rails themselves. That is ' +
                  'why only one wire is needed up there instead of two: the second wire is ' +
                  'the iron under the wheels, and you step on it every time you board.',
              },
              question: {
                q: {
                  el: 'Από πού γυρίζει πίσω το ρεύμα ενός τραμ;',
                  en: 'How does a tram’s current get back to the power station?',
                },
                answers: [
                  {
                    el: 'Μέσα από τις ίδιες τις ράγες κάτω από τις ρόδες',
                    en: 'Back through the rails underneath the wheels',
                  },
                  {
                    el: 'Από ένα δεύτερο καλώδιο τεντωμένο δίπλα στο πρώτο',
                    en: 'Along a second wire strung beside the first',
                  },
                  {
                    el: 'Από μια μπαταρία που φορτίζει κάθε βράδυ',
                    en: 'From a battery in the car, recharged nightly',
                  },
                  {
                    el: 'Δεν γυρίζει πουθενά, καταναλώνεται όλο',
                    en: 'It does not go back, the current is all used up',
                  },
                ],
                explanation: {
                  el:
                    'Ένα κύκλωμα πρέπει να κλείνει. Το πάνω σύρμα το φέρνει, οι ράγες το ' +
                    'γυρίζουν, και ο κύκλος κλείνει.',
                  en:
                    'A circuit has to close. The wire above brings it, the rails carry it ' +
                    'back, and the loop is complete.',
                },
              },
            },
          ],
        },
        {
          id: 'porto-carro-electrico-before-electricity',
          emoji: '🐴',
          name: { el: 'Πριν από το ρεύμα', en: 'Before electricity' },
          intro: {
            el:
              'Τα τραμ είναι παλαιότερα από τον ηλεκτρισμό. Πριν από το καλώδιο, τα ίδια ' +
              'βαγόνια κυλούσαν στις ίδιες ράγες τραβηγμένα από άλογα. Η ιδέα δεν ήταν το ' +
              'ρεύμα, η ιδέα ήταν οι ράγες, και το ρεύμα ήρθε μετά για να λύσει το ' +
              'πρόβλημα που έχουν όλα τα άλογα: κουράζονται.',
            en:
              'Trams are older than electricity. Before the wire, the same sort of cars ran ' +
              'on the same rails pulled by horses. The idea was never the current, the idea ' +
              'was the rails, and the current arrived later to solve the problem every horse ' +
              'has: it gets tired.',
          },
          exhibits: [
            {
              id: 'porto-carro-electrico-horse-car',
              name: { el: 'Το βαγόνι με τα άλογα', en: 'The horse car' },
              blurb: {
                el:
                  'Ένα ελαφρύ ξύλινο βαγόνι με παράθυρα και πάγκους, και μπροστά του, εκεί ' +
                  'όπου σήμερα θα περίμενες μηχανή, δύο άλογα. Στο Πόρτο τέτοια βαγόνια ' +
                  'άρχισαν να κυκλοφορούν από το 1872. Ήταν ήσυχα, μύριζαν σαν στάβλος και ' +
                  'χρειάζονταν φροντίδα που καμιά μηχανή δεν ζητάει: φαγητό, νερό, ξεκούραση ' +
                  'και κτηνίατρο. Ένα άλογο δεν δουλεύει δώδεκα ώρες. Γι’ αυτό μια εταιρεία ' +
                  'έπρεπε να έχει πολλαπλάσια άλογα από βαγόνια, και αυτό κόστιζε πολύ.',
                en:
                  'A light wooden car with windows and benches, and in front of it, where you ' +
                  'would expect an engine today, two horses. Cars like this started running ' +
                  'in Porto from 1872. They were quiet, they smelled like a stable, and they ' +
                  'needed the sort of care no machine asks for: food, water, rest and a vet. ' +
                  'A horse does not work a twelve-hour day. So a company had to keep several ' +
                  'times more horses than cars, and that was expensive.',
              },
              question: {
                q: {
                  el: 'Γιατί χρειαζόταν μια εταιρεία πολύ περισσότερα άλογα από βαγόνια;',
                  en: 'Why did a company need many more horses than it had cars?',
                },
                answers: [
                  {
                    el: 'Ένα άλογο δεν αντέχει όλη τη μέρα',
                    en: 'A horse cannot work the whole day long',
                  },
                  {
                    el: 'Κάθε βαγόνι ήθελε τέσσερα άλογα στα ίσια',
                    en: 'Each car needed four horses on the flat',
                  },
                  {
                    el: 'Για να δουλεύει και όλη τη νύχτα',
                    en: 'So it could keep running through the night',
                  },
                  {
                    el: 'Τα άλογα φοβούνταν τα ίδια τα βαγόνια',
                    en: 'The horses were frightened of the cars',
                  },
                ],
                explanation: {
                  el:
                    'Οι βάρδιες. Το βαγόνι δουλεύει από το πρωί ως το βράδυ, το άλογο για ' +
                    'λίγες ώρες και μετά θέλει ξεκούραση.',
                  en:
                    'Shifts. The car works from morning to night, the horse for a few hours ' +
                    'and then it needs a rest.',
                },
              },
            },
            {
              id: 'porto-carro-electrico-rails-in-the-street',
              name: { el: 'Οι ράγες μέσα στον δρόμο', en: 'Rails in the street' },
              blurb: {
                el:
                  'Γιατί να στρώσεις σίδερο σε έναν δρόμο που ήδη υπάρχει; Επειδή μια ρόδα ' +
                  'πάνω σε λεία ράγα κυλάει πολύ πιο εύκολα από μια ρόδα σε λακκούβες και ' +
                  'λάσπη. Με τις ίδιες δύο πλευρές, ένα άλογο τραβούσε πολλαπλάσιο βάρος και ' +
                  'πολύ περισσότερους ανθρώπους. Οι ράγες έδιναν και κάτι δεύτερο: το βαγόνι ' +
                  'πηγαίνει πάντα εκεί που πάνε αυτές, οπότε ο κόσμος ήξερε από πού θα ' +
                  'περάσει και πού να σταθεί. Μια ράγα είναι ταυτόχρονα μηχανική και χάρτης.',
                en:
                  'Why lay iron in a street that already exists? Because a wheel on a smooth ' +
                  'rail rolls far more easily than a wheel in potholes and mud. With the same ' +
                  'two horses in front, a car could pull several times the weight and many ' +
                  'more people. Rails gave something else too: the car always goes where they ' +
                  'go, so people knew where it would pass and where to stand. A rail is ' +
                  'engineering and a map at the same time.',
              },
              question: {
                q: {
                  el: 'Τι κερδίζεις βάζοντας ράγες σε έναν λασπωμένο δρόμο;',
                  en: 'What do you gain by laying rails in a muddy street?',
                },
                answers: [
                  {
                    el: 'Η ρόδα κυλάει ευκολότερα, άρα το ίδιο άλογο τραβάει περισσότερα',
                    en: 'The wheel rolls easier, so the same horse pulls more',
                  },
                  {
                    el: 'Ο δρόμος δεν χρειάζεται πια καθάρισμα ούτε επισκευή ποτέ ξανά',
                    en: 'The street never needs cleaning or mending ever again after that',
                  },
                  {
                    el: 'Το βαγόνι πάει πιο γρήγορα από το άλογο',
                    en: 'The car goes faster than horses walk',
                  },
                  {
                    el: 'Οι επιβάτες κάθονται πιο άνετα επειδή το ξύλο δεν τρίζει καθόλου',
                    en: 'The passengers sit far better because the wood does not creak at all',
                  },
                ],
                explanation: {
                  el:
                    'Λιγότερη τριβή, ίδιο άλογο, πολλαπλάσιο φορτίο. Και ένα δεύτερο δώρο: ' +
                    'όλοι ξέρουν από πού θα περάσει.',
                  en:
                    'Less friction, the same horse, several times the load. And a second ' +
                    'gift: everyone knows where it will pass.',
                },
              },
            },
            {
              id: 'porto-carro-electrico-the-hill',
              name: { el: 'Το πρόβλημα του λόφου', en: 'The problem of the hill' },
              blurb: {
                el:
                  'Το Πόρτο δεν είναι επίπεδο. Κατεβαίνει απότομα προς το ποτάμι και ' +
                  'ανεβαίνει το ίδιο απότομα πίσω. Για ένα βαγόνι με άλογα αυτό ήταν σοβαρή ' +
                  'δυσκολία: στην ανηφόρα χρειάζονταν επιπλέον ζώα, που περίμεναν στη βάση ' +
                  'του λόφου και ζεύονταν μπροστά, και στην κατηφόρα το πρόβλημα ήταν το ' +
                  'αντίθετο, να μη σπρώξει το βαγόνι τα άλογα. Ο ηλεκτρισμός έλυσε και τα ' +
                  'δύο μαζί: ένας κινητήρας δεν λαχανιάζει στην ανηφόρα και κρατάει στην ' +
                  'κατηφόρα.',
                en:
                  'Porto is not flat. It drops steeply to the river and climbs back just as ' +
                  'steeply. For a horse car that was a serious difficulty: going up, extra ' +
                  'animals were needed, waiting at the bottom of the hill to be hitched on in ' +
                  'front, and going down the problem was the opposite, keeping the car from ' +
                  'shoving the horses along. Electricity solved both at once: a motor does ' +
                  'not get out of breath uphill and it holds back downhill.',
              },
              question: {
                q: {
                  el: 'Ποιο ήταν το πρόβλημα ενός βαγονιού με άλογα στην κατηφόρα;',
                  en: 'What was the problem for a horse car going down a hill?',
                },
                answers: [
                  {
                    el: 'Το βαγόνι έσπρωχνε τα άλογα από πίσω στην κατηφόρα',
                    en: 'The car kept shoving the horses along from behind',
                  },
                  {
                    el: 'Τα άλογα κουράζονταν πολύ περισσότερο απ’ ό,τι στην ανηφόρα',
                    en: 'The horses grew far more tired than they did on the way up',
                  },
                  {
                    el: 'Οι ράγες γλιστρούσαν στη βροχή',
                    en: 'The rails were slippery in the wet',
                  },
                  {
                    el: 'Οι επιβάτες έπρεπε να κατέβουν και να περπατήσουν ως τα κάτω',
                    en: 'The passengers had to get out and walk the rest of the way down',
                  },
                ],
                explanation: {
                  el:
                    'Ανηφόρα σημαίνει περισσότερα άλογα. Κατηφόρα σημαίνει φρένο, αλλιώς ' +
                    'το βάρος κατεβαίνει πιο γρήγορα από τα ζώα.',
                  en:
                    'Uphill means more horses. Downhill means a brake, or the weight comes ' +
                    'down faster than the animals do.',
                },
              },
            },
          ],
        },
        {
          id: 'porto-carro-electrico-the-cars',
          emoji: '🔧',
          name: { el: 'Τα βαγόνια από κοντά', en: 'The cars up close' },
          intro: {
            el:
              'Τώρα πλησίασε. Ένα τραμ του 1900 δεν είναι απλώς παλιό, είναι φτιαγμένο με ' +
              'άλλη λογική: ξύλο αντί για πλαστικό, ορείχαλκος αντί για κουμπιά, και ένας ' +
              'οδηγός που στέκεται όρθιος στο κρύο. Κοίτα τι είναι στη θέση του και ' +
              'σκέψου γιατί μπήκε εκεί.',
            en:
              'Now come closer. A tram of 1900 is not merely old, it is built on another ' +
              'logic: wood instead of plastic, brass instead of buttons, and a driver who ' +
              'stood up in the cold. Look at where each thing sits and think about why it ' +
              'was put there.',
          },
          exhibits: [
            {
              id: 'porto-carro-electrico-wooden-benches',
              name: { el: 'Οι ξύλινοι πάγκοι', en: 'The wooden benches' },
              blurb: {
                el:
                  'Μέσα στο βαγόνι δεν υπάρχουν πολυθρόνες, υπάρχουν σανίδες. Το ξύλο ' +
                  'διαλέχτηκε γιατί είναι ελαφρύ, φτηνό, επισκευάζεται με ένα καρφί, και ' +
                  'κυρίως γιατί καθαρίζεται με έναν κουβά νερό στο τέλος της μέρας. Πρόσεξε ' +
                  'ότι οι πάγκοι είναι στενοί και τα καθίσματα κοντά μεταξύ τους: ένα τραμ ' +
                  'δεν πληρώνεται με την άνεση αλλά με τον αριθμό των ανθρώπων που ' +
                  'μεταφέρει. Άνετο κάθισμα σημαίνει λιγότεροι επιβάτες, και λιγότεροι ' +
                  'επιβάτες σημαίνει ακριβότερο εισιτήριο.',
                en:
                  'Inside the car there are no armchairs, there are planks. Wood was chosen ' +
                  'because it is light, cheap, mendable with a nail, and above all because it ' +
                  'washes down with a bucket of water at the end of the day. Notice that the ' +
                  'benches are narrow and set close together: a tram is not paid for comfort ' +
                  'but for the number of people it moves. A comfortable seat means fewer ' +
                  'passengers, and fewer passengers means a dearer ticket.',
              },
              question: {
                q: {
                  el: 'Γιατί ήταν στενοί και κοντά ο ένας στον άλλο οι πάγκοι;',
                  en: 'Why were the benches narrow and set close together?',
                },
                answers: [
                  {
                    el: 'Για να χωράνε περισσότεροι επιβάτες στο ίδιο βαγόνι',
                    en: 'So that more passengers would fit into the same car',
                  },
                  {
                    el: 'Για να βλέπει ο οδηγός ως το πίσω μέρος',
                    en: 'So the driver could see to the back',
                  },
                  {
                    el: 'Γιατί το ξύλο εκείνης της εποχής δεν κοβόταν σε φαρδιές σανίδες',
                    en: 'Because the wood of the time could not be cut into wide planks',
                  },
                  {
                    el: 'Για να μη γλιστράνε οι επιβάτες όταν το βαγόνι φρέναρε απότομα',
                    en: 'So the passengers would not slide when the car braked suddenly',
                  },
                ],
                explanation: {
                  el:
                    'Το εισιτήριο πληρώνει ανά άνθρωπο. Κάθε εκατοστό άνεσης είναι ένας ' +
                    'επιβάτης λιγότερος.',
                  en:
                    'A ticket is paid per person. Every centimetre of comfort is one ' +
                    'passenger fewer.',
                },
              },
            },
            {
              id: 'porto-carro-electrico-driver-platform',
              name: { el: 'Η θέση του οδηγού', en: 'The driver’s platform' },
              blurb: {
                el:
                  'Ο οδηγός δεν καθόταν. Στεκόταν όρθιος σε μια μικρή ανοιχτή πλατφόρμα στην ' +
                  'άκρη του βαγονιού, συχνά χωρίς τζάμι μπροστά του, με έναν στρογγυλό μοχλό ' +
                  'στο ένα χέρι για το ρεύμα και μια μανιβέλα στο άλλο για το φρένο. Όρθιος ' +
                  'έβλεπε καλύτερα, αντιδρούσε γρηγορότερα και μπορούσε να ρίξει όλο του το ' +
                  'βάρος στο φρένο. Ήταν όμως και μια δύσκολη δουλειά: χειμώνα, βροχή και ' +
                  'άνεμο, ο οδηγός τα έπαιρνε όλα κατάμουτρα.',
                en:
                  'The driver did not sit. He stood on a small open platform at the end of ' +
                  'the car, often with no glass in front of him, a round handle in one hand ' +
                  'for the current and a crank in the other for the brake. Standing, he saw ' +
                  'better, reacted faster and could throw his whole weight onto the brake. It ' +
                  'was also a hard job: in winter, rain and wind, the driver took all of it ' +
                  'in the face.',
              },
              question: {
                q: {
                  el: 'Γιατί οδηγούσε όρθιος ο οδηγός του τραμ;',
                  en: 'Why did the tram driver drive standing up?',
                },
                answers: [
                  {
                    el: 'Έβλεπε καλύτερα και φρέναρε με όλο του το σώμα',
                    en: 'He saw better, and braked with his whole body weight',
                  },
                  {
                    el: 'Δεν υπήρχε καθόλου χώρος για κάθισμα',
                    en: 'There was no room at all for a seat',
                  },
                  {
                    el: 'Για να μπορούν οι επιβάτες να του μιλούν χωρίς να σκύβουν κάτω',
                    en: 'So that the passengers could speak to him without stooping down',
                  },
                  {
                    el: 'Γιατί το κάθισμα κρυώνει πολύ σε μια ανοιχτή πλατφόρμα το χειμώνα',
                    en: 'Because a seat gets very cold on an open platform in the winter',
                  },
                ],
                explanation: {
                  el:
                    'Ύψος για να βλέπει, βάρος για να φρενάρει. Ένα φρένο με μανιβέλα ' +
                    'θέλει ολόκληρο σώμα, όχι μόνο χέρι.',
                  en:
                    'Height to see with, weight to brake with. A crank brake needs a whole ' +
                    'body, not just an arm.',
                },
              },
            },
            {
              id: 'porto-carro-electrico-foot-gong',
              name: { el: 'Το κουδούνι με το πόδι', en: 'The foot gong' },
              blurb: {
                el:
                  'Κοίτα χαμηλά, στο πάτωμα της πλατφόρμας: υπάρχει ένα πεντάλ. Πατώντας το ' +
                  'χτυπάει ένα μεταλλικό κουδούνι κάτω από το βαγόνι. Ο λόγος είναι απλός ' +
                  'και εξαιρετικά πρακτικός. Τα δύο χέρια του οδηγού ήταν πάντα πιασμένα, το ' +
                  'ένα στο ρεύμα και το άλλο στο φρένο, οπότε το μόνο ελεύθερο μέλος ήταν το ' +
                  'πόδι. Ένα τραμ δεν μπορεί να κάνει στην άκρη· είναι δεμένο στις ράγες. ' +
                  'Άρα το μόνο που του μένει είναι να προειδοποιεί, και μάλιστα δυνατά.',
                en:
                  'Look down at the floor of the platform: there is a pedal. Pressing it ' +
                  'strikes a metal gong under the car. The reason is simple and very ' +
                  'practical. Both of the driver’s hands were always busy, one on the current ' +
                  'and one on the brake, so the only free limb was a foot. A tram cannot ' +
                  'swerve out of the way; it is tied to its rails. So the only thing left to ' +
                  'it is to warn people, and loudly.',
              },
              question: {
                q: {
                  el: 'Γιατί χτυπούσε ο οδηγός το κουδούνι με το πόδι;',
                  en: 'Why did the driver ring the gong with his foot?',
                },
                answers: [
                  {
                    el: 'Και τα δύο του χέρια ήταν πιασμένα',
                    en: 'Both of his hands were already busy',
                  },
                  {
                    el: 'Το κουδούνι ήταν κάτω από το πάτωμα',
                    en: 'The gong was fixed under the floor',
                  },
                  {
                    el: 'Το πόδι χτυπάει πιο δυνατά από το χέρι',
                    en: 'A foot strikes it harder than a hand',
                  },
                  {
                    el: 'Για να το χτυπάει σε σταθερό ρυθμό',
                    en: 'So he could ring it in a steady rhythm',
                  },
                ],
                explanation: {
                  el:
                    'Ρεύμα στο ένα χέρι, φρένο στο άλλο. Μένει το πόδι, και ένα τραμ που ' +
                    'δεν μπορεί να στρίψει χρειάζεται οπωσδήποτε φωνή.',
                  en:
                    'Current in one hand, brake in the other. That leaves a foot, and a ' +
                    'tram that cannot swerve badly needs a voice.',
                },
              },
            },
            {
              id: 'porto-carro-electrico-tower-car',
              name: { el: 'Το βαγόνι με τον πύργο', en: 'The tower car' },
              blurb: {
                el:
                  'Ανάμεσα στα βαγόνια των επιβατών στέκεται ένα που δεν έμοιαζε ποτέ με τα ' +
                  'άλλα: πάνω του έχει μια σκαλωτή εξέδρα, σαν μικρό πύργο. Δεν μετέφερε ' +
                  'ποτέ κανέναν. Η δουλειά του ήταν το καλώδιο πάνω από τις ράγες, που ' +
                  'σπάει, λασκάρει και θέλει συντήρηση. Οι τεχνικοί ανέβαιναν στον πύργο, το ' +
                  'βαγόνι κυλούσε αργά στη γραμμή και εκείνοι δούλευαν στο ύψος του σύρματος. ' +
                  'Κάθε δίκτυο μεταφορών έχει τέτοια οχήματα, και σχεδόν κανείς δεν τα ' +
                  'προσέχει: δουλεύουν νύχτα.',
                en:
                  'Among the passenger cars stands one that never looked like the others: it ' +
                  'carries a stepped platform on its roof, like a little tower. It never ' +
                  'carried anybody. Its job was the wire above the rails, which breaks, works ' +
                  'loose and needs maintaining. The linesmen climbed the tower, the car rolled ' +
                  'slowly along the track and they worked at the height of the wire. Every ' +
                  'transport network has vehicles like this and almost nobody notices them: ' +
                  'they work at night.',
              },
              question: {
                q: {
                  el: 'Ποια ήταν η δουλειά του βαγονιού με τον πύργο;',
                  en: 'What was the job of the car with the tower on it?',
                },
                answers: [
                  {
                    el: 'Η συντήρηση του καλωδίου πάνω από τις ράγες',
                    en: 'Maintaining the wire strung above the rails',
                  },
                  {
                    el: 'Να ανεβάζει επιβάτες για τη θέα από ψηλά',
                    en: 'Carrying passengers up high for the view',
                  },
                  {
                    el: 'Να τραβάει τα χαλασμένα βαγόνια στο αμαξοστάσιο',
                    en: 'Towing broken-down cars back to the depot',
                  },
                  {
                    el: 'Να καθαρίζει τα φύλλα του φθινοπώρου από τις ράγες',
                    en: 'Clearing the fallen autumn leaves off the rails',
                  },
                ],
                explanation: {
                  el:
                    'Το σύρμα είναι ψηλά, οπότε το συνεργείο πρέπει να ανέβει. Ο πύργος ' +
                    'είναι σκάλα που κυλάει στις ράγες.',
                  en:
                    'The wire is up high, so the crew must go up. The tower is a ladder ' +
                    'that rolls along the rails.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'porto-carro-electrico-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Έκανα τη δουλειά αυτού του μουσείου πριν από κάθε καλώδιο, και την έκανα ' +
              'με δύο καρδιές να χτυπούν μπροστά μου. Έτρωγαν σανό, κουράζονταν στην ' +
              'ανηφόρα και είχαν ονόματα.',
            en:
              'I did this museum’s job before there was any wire, and I did it with two ' +
              'hearts beating in front of me. They ate hay, they tired on the hill, and ' +
              'they had names.',
          },
          hint: {
            el: 'Δεν με βάζεις ποτέ στην πρίζα.',
            en: 'You never plug me in.',
          },
          answerExhibitId: 'porto-carro-electrico-horse-car',
        },
        {
          id: 'porto-carro-electrico-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Κυλάω στις ίδιες ράγες με όλους και δεν κουβάλησα ποτέ ούτε έναν επιβάτη. ' +
              'Με νοιάζει μόνο αυτό που περνάει πάνω από το κεφάλι σου, και γι’ αυτό ' +
              'κουβαλάω δικό μου μικρό πύργο.',
            en:
              'I run on the same rails as everyone else and I have never carried a single ' +
              'passenger. All I care about is the thing passing over your head, which is ' +
              'why I carry my own little tower.',
          },
          hint: {
            el: 'Κανείς δεν έβγαλε ποτέ εισιτήριο για μένα.',
            en: 'Nobody ever bought a ticket for me.',
          },
          answerExhibitId: 'porto-carro-electrico-tower-car',
        },
        {
          id: 'porto-carro-electrico-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι ο λόγος που αυτό το μουσείο βρίσκεται ακριβώς εδώ και όχι αλλού. ' +
              'Πολύ πριν σταθμεύσουν μέσα μου, εγώ έφτιαχνα από κάρβουνο και ατμό αυτό ' +
              'που τα έκανε να κινούνται.',
            en:
              'I am the reason this museum stands here and nowhere else. Long before they ' +
              'were parked inside me, I made from coal and steam the thing that made them ' +
              'move.',
          },
          hint: {
            el: 'Δεν είμαι όχημα. Είμαι δωμάτιο.',
            en: 'I am not a vehicle. I am a room.',
          },
          answerExhibitId: 'porto-carro-electrico-generator-hall',
        },
      ],
    },
  },
  // --------------------------------------------------- world of discoveries
  {
    id: 'porto-world-of-discoveries',
    cityId: 'porto',
    emoji: '🌍',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Ο Κόσμος των Ανακαλύψεων', en: 'World of Discoveries' },
    tagline: {
      el: 'Ένα μουσείο που το διασχίζεις με βάρκα',
      en: 'A museum you cross in a boat',
    },
    story: {
      el:
        'Η Πορτογαλία είναι μια μικρή χώρα στη δυτική άκρη της Ευρώπης, με τον Ατλαντικό ' +
        'μπροστά της και την Ισπανία πίσω της. Τον 15ο αιώνα έκανε κάτι που δεν είχε ' +
        'δοκιμάσει άλλος: έστελνε πλοία νότια, κατά μήκος της αφρικανικής ακτής, λίγο πιο ' +
        'μακριά κάθε φορά, για να δει τι υπάρχει εκεί. Αυτό το μουσείο, που άνοιξε το ' +
        '2014 σε παλιό κτίριο στη συνοικία Μιραγκάια δίπλα στο ποτάμι, είναι χτισμένο ' +
        'γύρω από εκείνη την ιστορία. Δεν έχει βιτρίνες με αντικείμενα· έχει σκηνικά, και ' +
        'ένα κομμάτι του το διασχίζεις μέσα σε μια βάρκα που περνάει αργά μπροστά από ' +
        'αναπαραστάσεις των τόπων όπου έφτασαν τα πλοία. Εκείνα τα ταξίδια έφεραν πίσω ' +
        'μπαχαρικά, χρυσό και φυτά που κανείς στην Ευρώπη δεν είχε δει. Μετέφεραν όμως ' +
        'και ανθρώπους που είχαν αρπαχτεί από τα σπίτια τους και πουληθεί. Αυτό ανήκει ' +
        'στην ίδια ιστορία, όχι σε άλλη. Και ένα μεγάλο μέρος της ξεκίνησε από αυτό εδώ ' +
        'το ποτάμι.',
      en:
        'Portugal is a small country on the western edge of Europe, with the Atlantic in ' +
        'front of it and Spain behind. In the fifteenth century it did something nobody ' +
        'else had tried: it sent ships south along the coast of Africa, a little further ' +
        'each time, to find out what was there. This museum, which opened in 2014 in an old ' +
        'building in the Miragaia district beside the river, is built around that story. It ' +
        'has no cases of objects; it has built scenes, and part of it you cross inside a ' +
        'boat that moves slowly past recreations of the places those ships reached. Those ' +
        'voyages brought back spices, gold and plants nobody in Europe had ever seen. They ' +
        'also carried people who had been seized from their homes and sold. That belongs to ' +
        'the same story, not to a different one. And a great deal of it started from this ' +
        'very river.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2014, στη συνοικία Μιραγκάια, κοντά στην όχθη του Δούρου.',
        en: 'It opened in 2014, in the Miragaia district, close to the bank of the Douro.',
      },
      {
        el: 'Ένα μέρος της επίσκεψης γίνεται μέσα σε βάρκα, ανάμεσα σε αναπαραστάσεις τόπων.',
        en: 'Part of the visit happens inside a boat, moving among recreated places.',
      },
      {
        el: 'Το 1498 πορτογαλικά πλοία έφτασαν στην Ινδία από τη θάλασσα, γυρίζοντας την Αφρική.',
        en: 'In 1498 Portuguese ships reached India by sea, by sailing around Africa.',
      },
    ],
    location: {
      lat: 41.14345,
      lng: -8.62085,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q19708475', deltaM: 0 },
        { kind: 'osm', ref: 'way/216386156', deltaM: 8 },
      ],
      verifiedAt: '2026-09-12',
      note:
        'Grades B because no Wikipedia article exists for this item; Wikidata and the OSM ' +
        'building outline agree to 8 m, which for a single building is the building.',
      findIt: {
        el:
          'Στη Ρούα ντε Μιραγκάια, κάτω από τον λόφο των κήπων, κοντά στο ποτάμι. Η ' +
          'είσοδος είναι στο μεγάλο παλιό κτίριο με τα ψηλά τόξινα παράθυρα.',
        en:
          'On Rua de Miragaia, below the gardens’ hill and near the river. The way in is ' +
          'through the big old building with the tall arched windows.',
      },
    },
    question: {
      q: {
        el: 'Τι έψαχναν τα πορτογαλικά πλοία κατεβαίνοντας την Αφρική;',
        en: 'What were Portuguese ships looking for down the coast of Africa?',
      },
      answers: [
        {
          el: 'Θαλάσσιο δρόμο προς τα μπαχαρικά της Ανατολής',
          en: 'A sea road to the spices of the East',
        },
        {
          el: 'Συντομότερο πέρασμα πάνω από τον Ατλαντικό προς την Ισλανδία',
          en: 'A shorter crossing over the Atlantic to reach Iceland faster',
        },
        {
          el: 'Καινούργια χωράφια, γιατί στην Πορτογαλία είχε τελειώσει το χώμα',
          en: 'New fields to farm, because Portugal had run out of good soil',
        },
        {
          el: 'Τα βουνά όπου γεννιούνται όλα τα μεγάλα ποτάμια της Ευρώπης',
          en: 'The mountains where all the great rivers of Europe are born',
        },
      ],
      explanation: {
        el:
          'Τα μπαχαρικά έρχονταν από στεριά, περνώντας από πολλά χέρια, και κόστιζαν ' +
          'περιουσία. Ένα πλοίο που γύριζε την Αφρική τα έκοβε όλα αυτά.',
        en:
          'Spices came overland through many hands and cost a fortune. A ship that could ' +
          'sail round Africa cut every one of those hands out.',
      },
    },

    museum: {
      doorNote: {
        el: 'Δεν είναι μουσείο με βιτρίνες, είναι μουσείο με σκηνικά. Μπες μέσα τους.',
        en: 'This is not a museum of glass cases but of built scenes. Step into them.',
      },
      rooms: [
        {
          id: 'porto-world-of-discoveries-shipyard',
          emoji: '🛠️',
          name: { el: 'Το ναυπηγείο', en: 'The shipyard' },
          intro: {
            el:
              'Κάθε ταξίδι ξεκινάει πολύ πριν από τη θάλασσα, σε μια αυλή με ξύλα, ' +
              'πριόνια και καπνό από πίσσα. Εδώ αναπαρίσταται αυτή η αυλή. Πριν ρωτήσεις ' +
              'πού πήγαν τα πλοία, αξίζει να δεις πώς φτιάχνεται ένα: με τι σειρά, με τι ' +
              'υλικά, και ποιο κομμάτι είναι αυτό που δεν επιτρέπεται να αστοχήσει.',
            en:
              'Every voyage begins long before the sea, in a yard full of timber, saws and ' +
              'the smoke of hot tar. That yard is what this room recreates. Before you ask ' +
              'where the ships went, it is worth seeing how one is made: in what order, out ' +
              'of what, and which part is the one that must not fail.',
          },
          exhibits: [
            {
              id: 'porto-world-of-discoveries-hull',
              name: { el: 'Ο σκελετός του πλοίου', en: 'The skeleton of the ship' },
              blurb: {
                el:
                  'Ένα ξύλινο πλοίο δεν χτίζεται σαν σπίτι, από κάτω προς τα πάνω. ' +
                  'Χτίζεται σαν ζώο: πρώτα η ραχοκοκαλιά, μια μακριά δοκός που λέγεται ' +
                  'καρίνα, μετά τα «πλευρά» δεξιά και αριστερά, και τελευταία το δέρμα, ' +
                  'δηλαδή οι σανίδες. Η καρίνα είναι το κρίσιμο κομμάτι: αν στραβώσει, ' +
                  'στραβώνει όλο το πλοίο και δεν διορθώνεται. Γι’ αυτό διάλεγαν γι’ αυτήν ' +
                  'το καλύτερο ξύλο του ναυπηγείου, συχνά από ένα μοναδικό, τεράστιο δέντρο.',
                en:
                  'A wooden ship is not built like a house, from the bottom upwards. It is ' +
                  'built like an animal: the backbone first, a long beam called the keel, ' +
                  'then the ribs on the right and the left, and last of all the skin, which ' +
                  'is the planking. The keel is the critical piece: if it goes crooked, the ' +
                  'whole ship goes crooked and cannot be put right. So they chose the best ' +
                  'timber in the yard for it, often from a single enormous tree.',
              },
              question: {
                q: {
                  el: 'Ποιο κομμάτι μπαίνει πρώτο σε ένα ξύλινο πλοίο;',
                  en: 'Which part of a wooden ship is put in place first?',
                },
                answers: [
                  {
                    el: 'Η καρίνα, η ραχοκοκαλιά του πλοίου',
                    en: 'The keel, which is the ship’s backbone',
                  },
                  {
                    el: 'Το κατάστρωμα, ώστε να έχουν οι μαστόροι πού να πατάνε',
                    en: 'The deck, so that the shipwrights have somewhere to stand',
                  },
                  {
                    el: 'Το κατάρτι, γιατί είναι το πιο ψηλό και το πιο δύσκολο',
                    en: 'The mast, because it is the tallest and the hardest part',
                  },
                  {
                    el: 'Οι σανίδες των πλευρών, που δίνουν στο σκάφος το σχήμα του',
                    en: 'The side planks, which give the vessel its actual shape',
                  },
                ],
                explanation: {
                  el:
                    'Πρώτα ραχοκοκαλιά, μετά πλευρά, τελευταία δέρμα. Ένα στραβό ξεκίνημα ' +
                    'δεν ισιώνει ποτέ αργότερα.',
                  en:
                    'Backbone first, ribs next, skin last. A crooked start never ' +
                    'straightens out later.',
                },
              },
            },
            {
              id: 'porto-world-of-discoveries-caulking',
              name: { el: 'Η πίσσα και το στουπί', en: 'Tar and oakum' },
              blurb: {
                el:
                  'Ανάμεσα σε δύο σανίδες υπάρχει πάντα μια χαραμάδα, και μια χαραμάδα ' +
                  'σημαίνει νερό. Η λύση ήταν παλιά και έξυπνη: σφήνωναν στις αρμούς ' +
                  'στριμμένες ίνες, το στουπί, και από πάνω έχυναν ζεστή πίσσα. Το ξύλο ' +
                  'ύστερα φουσκώνει από την υγρασία και σφίγγει ακόμα περισσότερο το γέμισμα. ' +
                  'Δηλαδή το πλοίο γίνεται πιο στεγανό αφού μπει στο νερό, όχι πριν. Ένα ' +
                  'καινούργιο σκαρί που στάζει λίγο τις πρώτες μέρες δεν είναι κατ’ ανάγκη ' +
                  'χαλασμένο.',
                en:
                  'Between two planks there is always a crack, and a crack means water. The ' +
                  'answer was old and clever: they hammered twisted fibre, called oakum, into ' +
                  'the seams and poured hot tar over the top. The wood then swells with the ' +
                  'damp and squeezes the packing tighter still. So the ship becomes more ' +
                  'watertight after it goes into the water, not before. A new hull that drips ' +
                  'a little in its first days is not necessarily a broken one.',
              },
              question: {
                q: {
                  el: 'Πότε γίνεται πιο στεγανό ένα καινούργιο ξύλινο σκαρί;',
                  en: 'When does a new wooden hull become more watertight?',
                },
                answers: [
                  {
                    el: 'Αφού μείνει λίγη ώρα μέσα στο νερό',
                    en: 'Once it has been in the water a while',
                  },
                  {
                    el: 'Όταν στεγνώσει εντελώς στον ήλιο',
                    en: 'When it dries in the sun for weeks',
                  },
                  {
                    el: 'Μόλις βαφτεί άσπρο από έξω με μπογιά',
                    en: 'As soon as it is painted white outside',
                  },
                  {
                    el: 'Όταν φορτωθεί πολύ βαριά με εμπόρευμα',
                    en: 'Once it is loaded heavily with cargo',
                  },
                ],
                explanation: {
                  el:
                    'Το βρεγμένο ξύλο διαστέλλεται. Ο αρμός κλείνει από μόνος του, και το ' +
                    'στουπί με την πίσσα κρατάνε.',
                  en:
                    'Wet wood expands. The seam closes itself, and the oakum and tar hold ' +
                    'it shut.',
                },
              },
            },
            {
              id: 'porto-world-of-discoveries-sails',
              name: { el: 'Τα πανιά', en: 'The sails' },
              blurb: {
                el:
                  'Υπάρχουν δύο βασικά σχήματα πανιού και κάνουν διαφορετική δουλειά. Το ' +
                  'τετράγωνο πανί είναι μεγάλο και δυνατό, αλλά θέλει τον άνεμο από πίσω. ' +
                  'Το τριγωνικό πανί είναι μικρότερο και επιτρέπει στο πλοίο να προχωράει ' +
                  'ακόμα και όταν ο άνεμος έρχεται λοξά, σε ζιγκ ζαγκ. Τα πλοία των ' +
                  'εξερευνήσεων συχνά είχαν και τα δύο, γιατί δεν ήξεραν τι καιρό θα ' +
                  'συναντήσουν. Το να μπορείς να γυρίσεις πίσω με αντίθετο άνεμο είναι πιο ' +
                  'σημαντικό από το να πας γρήγορα.',
                en:
                  'There are two basic sail shapes and they do different jobs. A square sail ' +
                  'is big and strong, but it wants the wind behind it. A triangular sail is ' +
                  'smaller and lets a ship keep going even when the wind comes at an angle, ' +
                  'in a zigzag. Exploring ships often carried both, because they had no idea ' +
                  'what weather they would meet. Being able to get home against the wind ' +
                  'matters more than going fast.',
              },
              question: {
                q: {
                  el: 'Τι μπορεί να κάνει ένα τριγωνικό πανί και δεν κάνει το τετράγωνο;',
                  en: 'What can a triangular sail do that a square one cannot?',
                },
                answers: [
                  {
                    el: 'Να προχωρά κι όταν ο άνεμος είναι λοξός',
                    en: 'Keep going with the wind at an angle',
                  },
                  {
                    el: 'Να πιάνει περισσότερο αέρα στη φουρτούνα',
                    en: 'Catch far more air in a stormy sea',
                  },
                  {
                    el: 'Να διπλώνεται μόνο του στον δυνατό αέρα',
                    en: 'Fold itself away in a very strong wind',
                  },
                  {
                    el: 'Να κρατάει ακίνητο το πλοίο στην άγκυρα',
                    en: 'Hold the ship still while at anchor',
                  },
                ],
                explanation: {
                  el:
                    'Με τετράγωνο πανί περιμένεις τον σωστό άνεμο. Με τριγωνικό ξεκινάς ' +
                    'ούτως ή άλλως και ελίσσεσαι.',
                  en:
                    'With a square sail you wait for the right wind. With a triangular one ' +
                    'you set off anyway and weave.',
                },
              },
            },
          ],
        },
        {
          id: 'porto-world-of-discoveries-voyage',
          emoji: '🧭',
          name: { el: 'Το ταξίδι', en: 'The voyage' },
          intro: {
            el:
              'Τώρα το πλοίο είναι έτοιμο και φεύγει. Από εδώ και πέρα τα προβλήματα δεν ' +
              'είναι ξυλουργικά. Είναι δύο: πού βρίσκομαι, και πόσο ακόμα αντέχω. Το ' +
              'πρώτο το λύνει ο ουρανός, το δεύτερο το ορίζουν τα βαρέλια στο αμπάρι. ' +
              'Όλες οι μεγάλες ανακαλύψεις κρέμονταν από αυτά τα δύο.',
            en:
              'Now the ship is ready and it leaves. From here on the problems are not ' +
              'carpentry. There are two of them: where am I, and how much longer can I last. ' +
              'The sky answers the first; the barrels in the hold decide the second. Every ' +
              'great discovery hung on those two questions.',
          },
          exhibits: [
            {
              id: 'porto-world-of-discoveries-astrolabe',
              name: { el: 'Ο αστρολάβος', en: 'The astrolabe' },
              blurb: {
                el:
                  'Ένας βαρύς μπρούντζινος δίσκος με μια κινητή ράβδο στη μέση και ' +
                  'σημάδια στο χείλος. Τον κρέμαγες, τον άφηνες να ισορροπήσει και ' +
                  'σημάδευες τον ήλιο ή ένα άστρο μέσα από δύο τρυπούλες. Το πόσο ψηλά ' +
                  'ήταν στον ουρανό σου έλεγε πόσο βόρεια ή νότια βρισκόσουν. Το ανατολικά ' +
                  'και δυτικά όμως δεν το έλυνε: για αυτό χρειαζόσουν ένα ακριβές ρολόι, ' +
                  'που δεν υπήρχε ακόμα. Οι ναυτικοί ήξεραν λοιπόν το μισό μόνο από τη θέση ' +
                  'τους, και το άλλο μισό το μάντευαν.',
                en:
                  'A heavy brass disc with a moving bar across the middle and marks around ' +
                  'the rim. You hung it up, let it settle level and sighted the sun or a star ' +
                  'through two tiny holes. How high it stood in the sky told you how far ' +
                  'north or south you were. East and west it could not answer: for that you ' +
                  'needed an accurate clock, and there was not one yet. So sailors knew ' +
                  'exactly half of their position and guessed the other half.',
              },
              question: {
                q: {
                  el: 'Τι μπορούσε να σου πει ο αστρολάβος;',
                  en: 'What could an astrolabe tell you?',
                },
                answers: [
                  {
                    el: 'Πόσο βόρεια ή νότια είχες φτάσει',
                    en: 'How far north or south of home you were',
                  },
                  {
                    el: 'Πόσο βαθιά ήταν η θάλασσα από κάτω',
                    en: 'How deep the water under you was',
                  },
                  {
                    el: 'Πόσο δυνατά φυσούσε εκεί ο αέρας',
                    en: 'How hard the wind out there was blowing',
                  },
                  {
                    el: 'Τι ώρα ήταν πάνω στο πλοίο τότε',
                    en: 'What time it was aboard the ship then',
                  },
                ],
                explanation: {
                  el:
                    'Το ύψος του ήλιου δίνει βορρά και νότο. Για ανατολή και δύση θέλεις ' +
                    'ακριβές ρολόι, και τότε δεν υπήρχε.',
                  en:
                    'The height of the sun gives you north and south. East and west need an ' +
                    'accurate clock, and there was none.',
                },
              },
            },
            {
              id: 'porto-world-of-discoveries-water-barrel',
              name: { el: 'Το βαρέλι με το νερό', en: 'The water barrel' },
              blurb: {
                el:
                  'Το πιο σημαντικό αντικείμενο σε ένα πλοίο εξερεύνησης δεν είναι ο ' +
                  'χάρτης ούτε η πυξίδα. Είναι το νερό. Ένας άνθρωπος αντέχει εβδομάδες ' +
                  'χωρίς φαγητό και μόνο μερικές μέρες χωρίς νερό, και η θάλασσα γύρω σου ' +
                  'δεν πίνεται. Άρα η πραγματική ακτίνα ενός ταξιδιού δεν ήταν το θάρρος ' +
                  'του καπετάνιου αλλά το πόσα βαρέλια χωρούσε το αμπάρι. Γι’ αυτό τα πλοία ' +
                  'κρατούσαν την ακτή: όχι από φόβο, αλλά για να ξέρουν πού θα ξαναγεμίσουν.',
                en:
                  'The most important object on an exploring ship is not the map or the ' +
                  'compass. It is water. A person can last weeks without food and only a few ' +
                  'days without water, and the sea around you cannot be drunk. So the real ' +
                  'range of a voyage was never the captain’s courage but how many barrels the ' +
                  'hold could take. That is why ships hugged the coast: not out of fear, but ' +
                  'so they knew where they could fill up again.',
              },
              question: {
                q: {
                  el: 'Τι όριζε στην πραγματικότητα πόσο μακριά έφτανε ένα πλοίο;',
                  en: 'What really decided how far a ship could go?',
                },
                answers: [
                  {
                    el: 'Πόσο νερό μπορούσε να κουβαλήσει',
                    en: 'How much water the ship could carry',
                  },
                  {
                    el: 'Πόσο σταθερά φυσούσαν οι άνεμοι',
                    en: 'How steadily the winds blew that year',
                  },
                  {
                    el: 'Πόσο έμπειρος ήταν ο καπετάνιος',
                    en: 'How experienced the captain really was',
                  },
                  {
                    el: 'Πόσο μεγάλα ήταν τα δύο πανιά του',
                    en: 'How large the two sails on it were',
                  },
                ],
                explanation: {
                  el:
                    'Χωρίς νερό γυρνάς πίσω, όσο καλός καπετάνιος κι αν είσαι. Τα βαρέλια ' +
                    'ήταν το πραγματικό όριο του χάρτη.',
                  en:
                    'Without water you turn back, however good a captain you are. The ' +
                    'barrels were the real edge of the map.',
                },
              },
            },
            {
              id: 'porto-world-of-discoveries-cargo',
              name: { el: 'Το φορτίο της επιστροφής', en: 'The cargo that came home' },
              blurb: {
                el:
                  'Όταν ένα πλοίο γύριζε, το αμπάρι του άλλαζε ολόκληρη την Ευρώπη. ' +
                  'Πιπέρι, κανέλα, γαρύφαλλο, ζάχαρη, χρυσός, και φυτά που κανείς εδώ δεν ' +
                  'είχε ξαναδεί. Ένα σακί μπαχαρικά μπορούσε να κάνει έναν έμπορο πλούσιο ' +
                  'για μια ζωή. Στα ίδια πλοία όμως ταξίδεψαν και άνθρωποι που είχαν ' +
                  'αρπαχτεί από τα σπίτια τους και πουληθεί σε άλλους ανθρώπους. Κανένας ' +
                  'από αυτούς δεν διάλεξε το ταξίδι. Αυτό δεν είναι μια άλλη ιστορία δίπλα ' +
                  'στην ιστορία των μπαχαρικών· είναι η ίδια, και λέγεται μαζί της.',
                en:
                  'When a ship came back, its hold changed the whole of Europe. Pepper, ' +
                  'cinnamon, cloves, sugar, gold, and plants nobody here had ever seen. One ' +
                  'sack of spices could make a merchant rich for life. But those same ships ' +
                  'also carried people who had been seized from their homes and sold to other ' +
                  'people. Not one of them chose the journey. This is not a separate story ' +
                  'standing beside the story of the spices; it is the same one, and it gets ' +
                  'told with it.',
              },
              question: {
                q: {
                  el: 'Γιατί άξιζε τόσο πολύ ένα σακί μπαχαρικά στην Ευρώπη;',
                  en: 'Why was one sack of spices worth so much in Europe?',
                },
                answers: [
                  {
                    el: 'Ερχόταν από πολύ μακριά και δεν φύτρωνε εδώ',
                    en: 'It came from very far off and would not grow here',
                  },
                  {
                    el: 'Γιατί οι βασιλιάδες είχαν απαγορεύσει σε όλους τους άλλους να το πουλούν',
                    en: 'Because kings had forbidden everybody else to sell any of it at all',
                  },
                  {
                    el: 'Γιατί χρειαζόταν ένα ολόκληρο πλοίο για να μεταφερθεί ένα μόνο σακί',
                    en: 'Because it took an entire ship to carry one single sack of the stuff',
                  },
                  {
                    el: 'Γιατί χαλούσε μέσα σε λίγες μέρες',
                    en: 'Because it spoiled within a few days',
                  },
                ],
                explanation: {
                  el:
                    'Το κλίμα της Ευρώπης δεν βγάζει πιπέρι ούτε κανέλα. Ό,τι δεν φυτρώνει ' +
                    'κοντά σου, το πληρώνεις ακριβά.',
                  en:
                    'Europe’s climate grows neither pepper nor cinnamon. Whatever will not ' +
                    'grow near you, you pay dearly for.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'porto-world-of-discoveries-riddle-1',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μπρούντζινος και βαρύς, και δουλεύω μόνο αν με αφήσεις να ' +
              'ισορροπήσω. Σημάδεψε τον ήλιο μέσα από τις τρύπες μου και θα σου πω πόσο ' +
              'βόρεια βρίσκεσαι. Ανατολικά δεν ξέρω.',
            en:
              'I am brass and heavy, and I only work if you let me hang level. Sight the ' +
              'sun through my two holes and I will tell you how far north you are. East I ' +
              'do not know.',
          },
          hint: {
            el: 'Χρειάζομαι τον ουρανό, όχι την ακτή.',
            en: 'I need the sky, not the shore.',
          },
          answerExhibitId: 'porto-world-of-discoveries-astrolabe',
        },
        {
          id: 'porto-world-of-discoveries-riddle-2',
          difficulty: 1,
          prompt: {
            el:
              'Δεν είμαι ούτε καταιγίδα ούτε τέρας, κι όμως εγώ αποφασίζω πότε τελειώνει ' +
              'το ταξίδι. Όταν αδειάσω, το πλοίο γυρίζει προς τη στεριά, ό,τι κι αν λέει ' +
              'ο καπετάνιος.',
            en:
              'I am neither a storm nor a monster, and yet I decide when the voyage ends. ' +
              'When I run empty the ship turns for land, whatever the captain has to say ' +
              'about it.',
          },
          hint: {
            el: 'Η θάλασσα γύρω σου είναι γεμάτη από κάτι που δεν πίνεται.',
            en: 'The sea around you is full of something you cannot drink.',
          },
          answerExhibitId: 'porto-world-of-discoveries-water-barrel',
        },
      ],
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'porto-down-to-the-river',
    cityId: 'porto',
    emoji: '🌉',
    name: { el: 'Κάτω στο ποτάμι', en: 'Down to the river' },
    promise: {
      el: 'Το τελωνείο ενός λιμανιού, ένα παλάτι εμπόρων, μια σιδερένια καμάρα και η καλύτερη θέα της πόλης.',
      en: 'A port’s customs house, a merchants’ palace, an iron arch and the best view in the city.',
    },
    placeIds: [
      'porto-casa-do-infante',
      'porto-palacio-da-bolsa',
      'porto-ponte-luis-i',
      'porto-serra-do-pilar',
    ],
  },
  {
    id: 'porto-stories-in-tiles',
    cityId: 'porto',
    emoji: '🔵',
    name: { el: 'Ιστορίες σε πλακάκια', en: 'Stories told in tiles' },
    promise: {
      el: 'Τρεις τοίχοι που διαβάζονται σαν βιβλίο με εικόνες, ζωγραφισμένοι σε μπλε και άσπρο.',
      en: 'Three walls that read like a picture book, painted in blue and white.',
    },
    placeIds: ['porto-sao-bento', 'porto-igreja-do-carmo', 'porto-se-do-porto'],
  },
  {
    id: 'porto-things-that-move',
    cityId: 'porto',
    emoji: '🚋',
    name: { el: 'Πράγματα που κινούνται', en: 'Things that move' },
    promise: {
      el: 'Τραμ που κυκλοφορούν ακόμα, μια γέφυρα με δύο καταστρώματα, και τα πλοία που έφυγαν από εδώ.',
      en: 'Trams still running, a bridge with two decks, and the ships that sailed from here.',
    },
    placeIds: [
      'porto-carro-electrico',
      'porto-ponte-luis-i',
      'porto-world-of-discoveries',
    ],
  },
  {
    id: 'porto-garden-market-tower',
    cityId: 'porto',
    emoji: '🦚',
    name: { el: 'Κήπος, αγορά και ένας πύργος', en: 'A garden, a market and a tower' },
    promise: {
      el: 'Παγώνια στα μονοπάτια, πορτοκάλια στους πάγκους, και διακόσια σκαλιά ως τις καμπάνες.',
      en: 'Peacocks on the paths, oranges on the stalls, and two hundred steps to the bells.',
    },
    placeIds: [
      'porto-palacio-de-cristal',
      'porto-mercado-do-bolhao',
      'porto-clerigos',
      'porto-igreja-dos-carmelitas',
    ],
  },
];
