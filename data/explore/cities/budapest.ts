/**
 * WiseBot Explorer · Βουδαπέστη / Budapest
 * =======================================
 * Ten spots in two days: Pest riverside and Castle Hill on foot (spots 1–6), Gellért Hill
 * (spot 7), then City Park by the little yellow metro and the market hall by tram (spots
 * 8–10). Original text only, verified facts, language for a child of 7–12 in Greek and
 * English. Hungarian names stay in Hungarian in both languages.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'budapest',
  name: { el: 'Βουδαπέστη', en: 'Budapest' },
  country: { el: 'Ουγγαρία', en: 'Hungary' },
  countryCode: 'HU',
  emoji: '♨️',
  center: { lat: 47.498, lng: 19.05 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στη Βουδαπέστη, μια πόλη που κάποτε ήταν δύο: η Buda (Βούδα) πάνω στους λόφους και η Pest (Πέστη) κάτω στην πεδιάδα, ενωμένες σήμερα με γέφυρες πάνω από τον Δούναβη. Κάτω από τα πόδια σας αναβλύζει ζεστό νερό που γεμίζει τα φημισμένα λουτρά της πόλης, και ένας παραμυθένιος προμαχώνας κοιτάζει από ψηλά το πιο όμορφο κοινοβούλιο που στάθηκε ποτέ σε όχθη ποταμού. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές της Βουδαπέστης!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Budapest, a city that used to be two: Buda up on the hills and Pest down on the flat, joined today by bridges over the Danube. Under your feet, hot water bubbles out of the ground to fill the famous baths, and a fairy-tale bastion looks down on the most beautiful parliament ever to stand on a riverbank. Solve my riddles, find the ten secret spots and become Budapest explorers yourselves!',
  },
  route: [
    'parliament',
    'st-stephens-basilica',
    'chain-bridge',
    'buda-castle',
    'matthias-church',
    'fishermans-bastion',
    'gellert-hill',
    'heroes-square',
    'vajdahunyad-castle',
    'great-market-hall',
  ],
  spots: [
    // ── 1. Országház · Parliament ──────────────────────────────────────────────
    {
      id: 'parliament',
      name: { el: 'Κοινοβούλιο (Országház)', en: 'Parliament (Országház)' },
      emoji: '🏛️',
      lat: 47.5068,
      lng: 19.0470,
      radiusM: 40,
      riddle: {
        el: 'Ένα τεράστιο παλάτι από πέτρινη δαντέλα, γεμάτο μυτερούς πυργίσκους, καθρεφτίζεται στο ποτάμι, κι όμως δεν μένει μέσα κανένας βασιλιάς. Βαθιά στην καρδιά του φυλάγεται ένα πανάρχαιο στέμμα.',
        en: 'A giant palace of stone lace, bristling with pointed spires, admires itself in the river, yet no king lives inside. Deep in its heart, an ancient crown is kept safe.',
      },
      parentHint: {
        el: 'Είναι το Κοινοβούλιο, το Országház (Όρσαγκχαζ, «το Σπίτι της Χώρας»), στην πλατεία Kossuth Lajos tér. Ξεκινήστε από εδώ: ο σταθμός Kossuth Lajos tér του μετρό M2 και το τραμ 2 σταματούν ακριβώς δίπλα στην πλατεία.',
        en: 'It is the Parliament, the Országház (“the House of the Country”), on Kossuth Lajos tér. Start here: the Kossuth Lajos tér station of metro M2 and tram 2 stop right beside the square.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι δεν μένει εκεί κανένας βασιλιάς. Ποιοι δουλεύουν μέσα σε αυτό το κτίριο;', en: 'The riddle says no king lives there. Who works inside this building?' },
        options: {
          el: ['Οι βασιλιάδες της Ουγγαρίας', 'Οι βουλευτές, που ψηφίζουν τους νόμους της χώρας', 'Οι πυροσβέστες της πόλης', 'Οι ψαράδες του ποταμού'],
          en: ['The kings of Hungary', 'The members of parliament, who vote on the laws of the country', 'The city firefighters', 'The river fishermen'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι το Κοινοβούλιο, δηλαδή η Βουλή της Ουγγαρίας. Εδώ συναντιούνται οι βουλευτές που διάλεξε ο λαός για να συζητούν και να ψηφίζουν τους νόμους, όπως γίνεται στη Βουλή στην Αθήνα.',
          en: 'It is the Parliament of Hungary. The representatives chosen by the people meet here to discuss and vote on the laws, just like in the parliament of your own country.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τον μεγάλο τρούλο στη μέση του κτιρίου. Τι χρώμα έχει;', en: 'Look at the big dome in the middle of the building. What colour is it?' },
        options: {
          el: ['Πράσινο', 'Χρυσό', 'Κόκκινο', 'Μπλε'],
          en: ['Green', 'Gold', 'Red', 'Blue'],
        },
        correct: 2,
        explanation: {
          el: 'Ο τρούλος είναι κόκκινος, σαν σκουριά, και φτάνει τα 96 μέτρα. Δοκίμασε τώρα να μετρήσεις τους μικρούς μυτερούς πυργίσκους γύρω του: οι ντόπιοι λένε ότι όλο το κτίριο έχει 365, έναν για κάθε μέρα του χρόνου!',
          en: 'The dome is red, the colour of rust, and it rises 96 metres. Now try to count the small pointed spires around it: locals say the whole building has 365 of them, one for every day of the year!',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από εκατό χρόνια η Βουδαπέστη ήθελε ένα σπίτι για τους νόμους της, τόσο όμορφο που να το θαυμάζει όλος ο κόσμος. Ο αρχιτέκτονας Imre Steindl (Ίμρε Στάιντλ) το σχεδίασε σαν παραμυθένιο παλάτι με μυτερούς πύργους, και ένας ολόκληρος στρατός από χτίστες δούλεψε σχεδόν είκοσι χρόνια, ως το 1904. Το κτίριο έχει 691 δωμάτια, και για τα στολίδια του χρησιμοποιήθηκαν περίπου 40 κιλά χρυσάφι! Το ύψος του είναι 96 μέτρα, γιατί το 896 έφτασαν σε αυτή τη γη οι Μαγυάροι, οι πρόγονοι των Ούγγρων. Από το 2000 φυλάγεται εδώ και το Ιερό Στέμμα των βασιλιάδων της Ουγγαρίας. Ο Steindl έχασε το φως του πριν τελειώσει το έργο και δεν είδε ποτέ το κτίριό του ολοκληρωμένο, αλλά η ιδέα του στέκεται ακόμη περήφανη στην όχθη του ποταμού.',
        en: 'More than a hundred years ago, Budapest wanted a house for its laws so beautiful that the whole world would admire it. The architect Imre Steindl designed it like a fairy-tale palace with pointed towers, and a whole army of builders worked for almost twenty years, until 1904. The building has 691 rooms, and about 40 kilograms of gold went into its decorations! It is 96 metres tall, because in the year 896 the Magyars, the ancestors of the Hungarians, arrived in this land. Since the year 2000 the Holy Crown of Hungary\'s kings has also been kept inside. Steindl lost his sight before the work was done and never saw his building finished, but his idea still stands proudly on the riverbank.',
      },
      didYouKnow: {
        el: 'Το κτίριο είναι απόλυτα συμμετρικό, με δύο ολόιδιες αίθουσες συνεδριάσεων δεξιά και αριστερά του τρούλου, αλλά σήμερα η Βουλή χρησιμοποιεί μόνο τη μία. Έξω από την αίθουσα υπάρχουν ακόμη αριθμημένες μπρούντζινες θήκες για πούρα: οι βουλευτές άφηναν εκεί το πούρο τους πριν μπουν να ψηφίσουν, και αν η συζήτηση ήταν βαρετή, το έβρισκαν μισοκαμένο.',
        en: 'The building is perfectly symmetrical, with two identical debating chambers on either side of the dome, but today\'s parliament uses only one of them. Outside the chamber you can still see numbered bronze cigar holders: members left their cigar there before going in to vote, and if the debate was dull they came back to find it half burned away.',
      },
      quiz: [
        {
          q: { el: 'Πόσα δωμάτια έχει το κτίριο;', en: 'How many rooms does the building have?' },
          options: {
            el: ['691', '96', '365', '40'],
            en: ['691', '96', '365', '40'],
          },
          correct: 0,
          explanation: {
            el: 'Το κτίριο έχει 691 δωμάτια. Αν κοιμόσουν κάθε βράδυ σε άλλο, θα χρειαζόσουν σχεδόν δύο χρόνια για να τα δοκιμάσεις όλα!',
            en: 'The building has 691 rooms. If you slept in a different one every night, it would take you almost two years to try them all!',
          },
        },
        {
          q: { el: 'Γιατί το κτίριο έχει ύψος ακριβώς 96 μέτρα;', en: 'Why is the building exactly 96 metres tall?' },
          options: {
            el: ['Γιατί τόσα χρήματα είχαν', 'Γιατί ο αρχιτέκτονας ήταν 96 ετών', 'Γιατί το 896 έφτασαν οι Μαγυάροι σε αυτή τη γη', 'Γιατί τόσο βαθύ είναι το ποτάμι'],
            en: ['Because that was all the money they had', 'Because the architect was 96 years old', 'Because the Magyars arrived in this land in the year 896', 'Because the river is that deep'],
          },
          correct: 2,
          explanation: {
            el: 'Το 896 οι Μαγυάροι, οι πρόγονοι των Ούγγρων, εγκαταστάθηκαν σε αυτή τη γη. Τα 96 μέτρα είναι ένας τρόπος να το θυμούνται όλοι.',
            en: 'In 896 the Magyars, the ancestors of the Hungarians, settled in this land. The 96 metres are a way for everyone to remember it.',
          },
        },
        {
          q: { el: 'Τι φυλάγεται μέσα στο κτίριο από το 2000;', en: 'What has been kept inside the building since the year 2000?' },
          options: {
            el: ['Ένας δεινόσαυρος', 'Το Ιερό Στέμμα των βασιλιάδων', 'Ένα παλιό καράβι', 'Ο θησαυρός ενός πειρατή'],
            en: ['A dinosaur', 'The Holy Crown of the kings', 'An old ship', 'A pirate\'s treasure'],
          },
          correct: 1,
          explanation: {
            el: 'Το Ιερό Στέμμα, με το οποίο στέφονταν οι βασιλιάδες της Ουγγαρίας για αιώνες, φυλάγεται κάτω από τον τρούλο από το 2000.',
            en: 'The Holy Crown, used to crown the kings of Hungary for centuries, has rested under the dome since 2000.',
          },
        },
      ],
    },

    // ── 2. Szent István Bazilika · St Stephen's Basilica ───────────────────────
    {
      id: 'st-stephens-basilica',
      name: { el: 'Βασιλική Szent István', en: 'Szent István Basilica' },
      emoji: '⛪',
      lat: 47.5007,
      lng: 19.0533,
      radiusM: 40,
      riddle: {
        el: 'Δύο πύργοι και ένας τρούλος ανάμεσά τους, ψηλός ακριβώς όσο το μεγάλο σπίτι των νόμων δίπλα στο ποτάμι, γιατί για πολλά χρόνια κανείς στο κέντρο της πόλης δεν επιτρεπόταν να χτίσει πιο ψηλά. Μέσα φυλάγεται το δεξί χέρι του πρώτου βασιλιά.',
        en: 'Two towers with a dome between them, exactly as tall as the great house of laws by the river, because for a long time nobody in the city centre was allowed to build higher. Inside rests the right hand of the very first king.',
      },
      parentHint: {
        el: 'Είναι η Βασιλική Szent István (Σεντ Ίστβαν, του Αγίου Στεφάνου). Από την πλατεία Kossuth Lajos tér περπατήστε 12 λεπτά νοτιοανατολικά, από τη Nádor utca και τη Hercegprímás utca, ως την πλατεία Szent István tér μπροστά στην είσοδο.',
        en: 'It is Szent István Basilica, St Stephen\'s. From Kossuth Lajos tér walk 12 minutes south-east along Nádor utca and Hercegprímás utca to Szent István tér, the square in front of the entrance.',
      },
      unlockQuestion: {
        question: { el: 'Ο τρούλος έχει ύψος 96 μέτρα, όσο και το Κοινοβούλιο. Ποια χρονιά θυμίζει ο αριθμός 96 στους Ούγγρους;', en: 'The dome is 96 metres tall, the same as the Parliament. Which year does the number 96 remind Hungarians of?' },
        options: {
          el: ['Το 1996', 'Το 1596', 'Το 1096', 'Το 896, όταν έφτασαν οι Μαγυάροι'],
          en: ['The year 1996', 'The year 1596', 'The year 1096', 'The year 896, when the Magyars arrived'],
        },
        correct: 3,
        explanation: {
          el: 'Το 896 οι Μαγυάροι έφτασαν σε αυτή τη γη. Χίλια χρόνια αργότερα, το 1896, η Βουδαπέστη γιόρτασε τα γενέθλιά της χτίζοντας παντού, και τα δύο πιο ψηλά κτίρια της έγιναν ακριβώς 96 μέτρα. Για περισσότερα από εκατό χρόνια ένας κανόνας έλεγε ότι κανένα κτίριο στο κέντρο της πόλης δεν επιτρέπεται να τα ξεπεράσει.',
          en: 'In 896 the Magyars arrived in this land. A thousand years later, in 1896, Budapest celebrated its birthday by building everywhere, and its two tallest buildings were made exactly 96 metres high. For more than a hundred years a rule said no building in the city centre could rise above them.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στην είσοδο και μέτρησε τους πύργους με τις καμπάνες, δεξιά κι αριστερά από τον τρούλο. Πόσοι είναι;', en: 'Stand in front of the entrance and count the bell towers to the left and right of the dome. How many are there?' },
        options: {
          el: ['Δύο', 'Τέσσερις', 'Ένας', 'Τρεις'],
          en: ['Two', 'Four', 'One', 'Three'],
        },
        correct: 0,
        explanation: {
          el: 'Δύο πύργοι αγκαλιάζουν τον τρούλο. Στον δεξιό κρέμεται η πιο μεγάλη καμπάνα της Ουγγαρίας, βαριά σαν αυτοκίνητο. Τώρα ψάξε πάνω από την πόρτα: εκεί στέκεται το άγαλμα του βασιλιά Stephen με το στέμμα του.',
          en: 'Two towers hug the dome. In the right-hand one hangs the biggest bell in Hungary, heavier than a car. Now look above the door: there stands the statue of King Stephen wearing his crown.',
        },
      },
      story: {
        el: 'Γύρω στο έτος 1000 ο Stephen (Ίστβαν στα ουγγρικά) έγινε ο πρώτος βασιλιάς της Ουγγαρίας και έκανε τους Μαγυάρους έθνος με νόμους, εκκλησίες και μια πρωτεύουσα. Οκτακόσια χρόνια αργότερα η πόλη αποφάσισε να χτίσει την πιο μεγάλη εκκλησία της προς τιμήν του. Το έργο ξεκίνησε το 1851, αλλά το 1868 ο μισοτελειωμένος τρούλος γκρεμίστηκε με τρομερό πάταγο και οι χτίστες έπρεπε να αρχίσουν σχεδόν από την αρχή. Ένας νέος αρχιτέκτονας, ο Miklós Ybl (Μίκλος Ιμπλ), σχεδίασε τον τρούλο πιο γερό και πιο όμορφο, και η εκκλησία τελείωσε το 1905, μετά από περισσότερα από πενήντα χρόνια. Μέσα, σε ένα μικρό παρεκκλήσι, φυλάγεται το δεξί χέρι του βασιλιά Stephen, το «Ιερό Δεξί», και κάθε 20 Αυγούστου το περιφέρουν γύρω από την εκκλησία με μεγάλη γιορτή. Όταν κάτι γκρεμίζεται, το ξαναχτίζουμε πιο γερό!',
        en: 'Around the year 1000, Stephen, István in Hungarian, became the first king of Hungary and turned the Magyars into a nation with laws, churches and a capital. Eight hundred years later the city decided to build its biggest church in his honour. Work began in 1851, but in 1868 the half-finished dome came crashing down and the builders had to start almost from scratch. A new architect, Miklós Ybl, designed the dome stronger and more beautiful, and the church was finished in 1905, after more than fifty years. Inside, in a small chapel, rests the right hand of King Stephen, the “Holy Right”, and every 20 August it is carried around the church in a great procession. When something falls down, we build it again, stronger!',
      },
      didYouKnow: {
        el: 'Το Ιερό Δεξί έχει ταξιδέψει πολύ: για αιώνες φυλασσόταν στο Dubrovnik της σημερινής Κροατίας και επέστρεψε στην Ουγγαρία το 1771, με εντολή της αυτοκράτειρας Μαρίας Θηρεσίας. Ο τρούλος έχει βεράντα με πανοραμική θέα, στην οποία ανεβαίνετε με ασανσέρ ή με περίπου 300 σκαλιά.',
        en: 'The Holy Right has travelled a lot: for centuries it was kept in Dubrovnik, in today\'s Croatia, and it returned to Hungary in 1771 on the orders of Empress Maria Theresa. The dome has a panorama terrace, reached by lift or by about 300 steps.',
      },
      quiz: [
        {
          q: { el: 'Τι έπαθε ο τρούλος το 1868;', en: 'What happened to the dome in 1868?' },
          options: {
            el: ['Τον έκλεψαν', 'Έγινε χρυσός', 'Τον πήρε ο άνεμος', 'Γκρεμίστηκε και έπρεπε να χτιστεί ξανά'],
            en: ['It was stolen', 'It turned to gold', 'The wind blew it away', 'It collapsed and had to be built again'],
          },
          correct: 3,
          explanation: {
            el: 'Ο μισοτελειωμένος τρούλος γκρεμίστηκε το 1868. Ο Miklós Ybl τον ξανασχεδίασε πιο γερό και πιο όμορφο.',
            en: 'The half-finished dome collapsed in 1868. Miklós Ybl redesigned it stronger and more beautiful.',
          },
        },
        {
          q: { el: 'Πόσα χρόνια περίπου χρειάστηκαν για να τελειώσει η εκκλησία;', en: 'About how many years did it take to finish the church?' },
          options: {
            el: ['Δύο χρόνια', 'Περισσότερα από πενήντα χρόνια', 'Μία εβδομάδα', 'Διακόσια χρόνια'],
            en: ['Two years', 'More than fifty years', 'One week', 'Two hundred years'],
          },
          correct: 1,
          explanation: {
            el: 'Το χτίσιμο άρχισε το 1851 και τελείωσε το 1905: περισσότερα από πενήντα χρόνια, με έναν γκρεμισμένο τρούλο στη μέση.',
            en: 'Building started in 1851 and ended in 1905: more than fifty years, with a collapsed dome in between.',
          },
        },
        {
          q: { el: 'Τι φυλάγεται μέσα στην εκκλησία;', en: 'What is kept inside the church?' },
          options: {
            el: ['Το δεξί χέρι του βασιλιά Stephen', 'Το σπαθί του Αττίλα', 'Ένα χρυσό ψάρι', 'Το πρώτο τραμ της πόλης'],
            en: ['The right hand of King Stephen', 'The sword of Attila', 'A golden fish', 'The city\'s first tram'],
          },
          correct: 0,
          explanation: {
            el: 'Το «Ιερό Δεξί», το δεξί χέρι του πρώτου βασιλιά, φυλάγεται σε ένα παρεκκλήσι και περιφέρεται με γιορτή κάθε 20 Αυγούστου.',
            en: 'The “Holy Right”, the right hand of the first king, rests in a chapel and is carried in a procession every 20 August.',
          },
        },
      ],
    },

    // ── 3. Széchenyi Lánchíd · Chain Bridge (Pest side) ────────────────────────
    {
      id: 'chain-bridge',
      name: { el: 'Γέφυρα των Αλυσίδων (Lánchíd)', en: 'Chain Bridge (Lánchíd)' },
      emoji: '🦁',
      lat: 47.4990,
      lng: 19.0455,
      radiusM: 60,
      riddle: {
        el: 'Τέσσερα πέτρινα λιοντάρια φυλάνε το πέρασμα που πρώτο ένωσε για πάντα τις δύο πόλεις πάνω από το μεγάλο ποτάμι. Τη νύχτα φοράει φωτάκια σαν κολιέ.',
        en: 'Four stone lions guard the crossing that first joined the two towns for good above the great river. At night it wears little lights like a necklace.',
      },
      parentHint: {
        el: 'Είναι η Széchenyi Lánchíd (Σέτσενι Λάντσχιντ, η Γέφυρα των Αλυσίδων). Από τη Βασιλική κατηφορίστε 8 λεπτά δυτικά τη Zrínyi utca, που οδηγεί ίσια στην πλατεία Széchenyi István tér, στην αρχή της γέφυρας.',
        en: 'It is the Széchenyi Lánchíd, the Chain Bridge. From the Basilica walk 8 minutes west down Zrínyi utca, which leads straight to Széchenyi István tér at the foot of the bridge.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για δύο πόλεις και ένα μεγάλο ποτάμι. Ποιο ποτάμι χωρίζει την Buda από την Pest;', en: 'The riddle talks about two towns and a great river. Which river separates Buda from Pest?' },
        options: {
          el: ['Ο Δούναβης', 'Ο Ρήνος', 'Ο Τάγος', 'Ο Νείλος'],
          en: ['The Danube', 'The Rhine', 'The Tagus', 'The Nile'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Δούναβης (Duna στα ουγγρικά) είναι το δεύτερο πιο μακρύ ποτάμι της Ευρώπης. Ξεκινάει από τη Γερμανία, περνάει από δέκα χώρες και χύνεται στη Μαύρη Θάλασσα. Εδώ είναι περίπου 300 μέτρα φαρδύς.',
          en: 'The Danube (Duna in Hungarian) is the second-longest river in Europe. It starts in Germany, flows through ten countries and empties into the Black Sea. Here it is about 300 metres wide.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε ως την άλλη άκρη της γέφυρας και μέτρησε τα πέτρινα λιοντάρια και στις δύο άκρες. Πόσα είναι όλα μαζί;', en: 'Walk to the far end of the bridge and count the stone lions at both ends. How many are there altogether?' },
        options: {
          el: ['Δύο', 'Έξι', 'Οκτώ', 'Τέσσερα'],
          en: ['Two', 'Six', 'Eight', 'Four'],
        },
        correct: 3,
        explanation: {
          el: 'Τέσσερα λιοντάρια, ένα ζευγάρι σε κάθε άκρη. Ένας παλιός θρύλος λέει ότι ο γλύπτης ξέχασε να τους φτιάξει γλώσσες. Δεν είναι αλήθεια: τις έχουν, απλώς από κάτω δεν φαίνονται!',
          en: 'Four lions, a pair at each end. An old legend says the sculptor forgot to give them tongues. It is not true: they have tongues, you just cannot see them from below!',
        },
      },
      story: {
        el: 'Πριν από περίπου 200 χρόνια η Buda και η Pest ήταν δύο διαφορετικές πόλεις, και για να περάσεις απέναντι έπαιρνες βάρκα, ή το χειμώνα περπατούσες πάνω στον πάγο. Έναν χειμώνα ο κόμης István Széchenyi (Ίστβαν Σέτσενι) περίμενε μέρες ολόκληρες στην όχθη, επειδή ο πάγος έσπαγε και δεν μπορούσε να περάσει. Τότε ορκίστηκε να χτίσει μια γέφυρα που να στέκεται όλο τον χρόνο. Ένας Άγγλος μηχανικός, ο William Tierney Clark, τη σχεδίασε, κρεμασμένη από τεράστιες σιδερένιες αλυσίδες, και το 1849 άνοιξε, η πρώτη μόνιμη γέφυρα της πόλης. Στο τέλος του μεγάλου πολέμου, το 1945, οι στρατιώτες την ανατίναξαν, όμως οι κάτοικοι την έχτισαν ξανά και την άνοιξαν το 1949, ακριβώς εκατό χρόνια μετά την πρώτη φορά. Μια γερή ιδέα αντέχει ακόμη κι όταν πέσει η γέφυρα!',
        en: 'About 200 years ago, Buda and Pest were two separate towns, and to get across you took a boat, or in winter you walked over the ice. One winter, Count István Széchenyi waited on the bank for days because the ice was breaking up and he could not cross. He swore then to build a bridge that would stand all year round. An English engineer, William Tierney Clark, designed it, hanging from enormous iron chains, and it opened in 1849 as the city\'s first permanent bridge. At the end of the great war, in 1945, soldiers blew it up, but the people built it again and reopened it in 1949, exactly one hundred years after the first time. A strong idea survives even when the bridge falls!',
      },
      didYouKnow: {
        el: 'Ο μηχανικός που έστησε τη γέφυρα επί τόπου, ο Σκωτσέζος Adam Clark, δεν είχε καμία συγγένεια με τον σχεδιαστή της William Tierney Clark, παρά το ίδιο επίθετο. Ο ίδιος άνοιξε και τη σήραγγα κάτω από τον λόφο του κάστρου (1857), και οι ντόπιοι αστειεύονται ότι φτιάχτηκε για να σπρώχνουν μέσα τη γέφυρα όταν βρέχει.',
        en: 'The engineer who built the bridge on site, the Scot Adam Clark, was no relation to its designer William Tierney Clark, despite the shared surname. He also dug the tunnel under Castle Hill (1857), and locals joke that it was made so the bridge could be pushed inside when it rains.',
      },
      quiz: [
        {
          q: { el: 'Πώς περνούσαν οι άνθρωποι το ποτάμι τον χειμώνα, πριν από τη γέφυρα;', en: 'How did people cross the river in winter, before the bridge?' },
          options: {
            el: ['Με αερόστατο', 'Κολυμπώντας', 'Περπατώντας πάνω στον πάγο', 'Με ελικόπτερο'],
            en: ['By hot-air balloon', 'By swimming', 'By walking over the ice', 'By helicopter'],
          },
          correct: 2,
          explanation: {
            el: 'Τον χειμώνα ο Δούναβης πάγωνε και οι άνθρωποι περπατούσαν πάνω στον πάγο, αλλά όταν ο πάγος έσπαγε, έμεναν για μέρες στην όχθη.',
            en: 'In winter the Danube froze and people walked across the ice, but when the ice was breaking up they were stuck on the bank for days.',
          },
        },
        {
          q: { el: 'Πότε άνοιξε η γέφυρα για πρώτη φορά;', en: 'When did the bridge first open?' },
          options: {
            el: ['Το 1849', 'Το 1949', 'Το 1649', 'Το 2009'],
            en: ['In 1849', 'In 1949', 'In 1649', 'In 2009'],
          },
          correct: 0,
          explanation: {
            el: 'Η γέφυρα άνοιξε το 1849. Μετά τον πόλεμο ξαναχτίστηκε και άνοιξε πάλι το 1949, ακριβώς εκατό χρόνια αργότερα.',
            en: 'The bridge opened in 1849. After the war it was rebuilt and opened again in 1949, exactly a hundred years later.',
          },
        },
        {
          q: { el: 'Από τι κρέμεται η γέφυρα;', en: 'What does the bridge hang from?' },
          options: {
            el: ['Από σχοινιά', 'Από κλαδιά δέντρων', 'Από χρυσά νήματα', 'Από τεράστιες σιδερένιες αλυσίδες'],
            en: ['Ropes', 'Tree branches', 'Golden threads', 'Enormous iron chains'],
          },
          correct: 3,
          explanation: {
            el: 'Τεράστιες σιδερένιες αλυσίδες κρατούν τη γέφυρα, γι\' αυτό λέγεται Γέφυρα των Αλυσίδων. Τη νύχτα τα φώτα της ακολουθούν το σχήμα τους.',
            en: 'Enormous iron chains hold the bridge up, which is why it is called the Chain Bridge. At night its lights follow their curve.',
          },
        },
      ],
    },

    // ── 4. Budai Vár · Buda Castle (funicular top, Sándor Palace) ─────────────
    {
      id: 'buda-castle',
      name: { el: 'Κάστρο της Buda (Budai Vár)', en: 'Buda Castle (Budai Vár)' },
      emoji: '🦅',
      lat: 47.4967,
      lng: 19.0384,
      radiusM: 60,
      riddle: {
        el: 'Ένα μυθικό πουλί με σπαθί στα νύχια του φυλάει έναν λόφο όπου κάποτε έμεναν βασιλιάδες. Ένα βαγονάκι σκαρφαλώνει την πλαγιά πάνω σε ράγες, για να μην ιδρώνει κανείς στα σκαλιά.',
        en: 'A mythical bird with a sword in its claws guards a hill where kings once lived. A little wagon climbs the slope on rails, so nobody has to sweat on the stairs.',
      },
      parentHint: {
        el: 'Είναι το Κάστρο της Buda, η Budai Vár (Μπουντάι Βαρ), στην πλατεία Szent György tér δίπλα στο Sándor Palota, το παλάτι του Προέδρου. Περάστε τη γέφυρα με τα πόδια (10 λεπτά) και από την πλατεία Clark Ádám tér ανεβείτε με το τελεφερίκ Sikló, ή με τα σκαλιά δίπλα του (10 λεπτά).',
        en: 'It is Buda Castle, the Budai Vár, at Szent György tér next to the Sándor Palota, the President\'s palace. Walk across the bridge (10 minutes) and from Clark Ádám tér ride the Sikló funicular up, or climb the steps beside it (10 minutes).',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ένα βαγονάκι σκαρφαλώνει τον λόφο πάνω σε ράγες. Πώς λέγεται ένα τέτοιο όχημα;', en: 'The riddle says a little wagon climbs the hill on rails. What is a vehicle like that called?' },
        options: {
          el: ['Υποβρύχιο', 'Τρόλεϊ', 'Τελεφερίκ (ή σχοινοσιδηρόδρομος)', 'Ζέπελιν'],
          en: ['A submarine', 'A trolleybus', 'A funicular', 'A zeppelin'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι το τελεφερίκ Sikló (Σίκλο): δύο βαγονάκια δεμένα με ένα συρματόσχοινο, που όταν το ένα ανεβαίνει, το άλλο κατεβαίνει. Άνοιξε το 1870 και ήταν το δεύτερο τέτοιο στην Ευρώπη.',
          en: 'It is the Sikló funicular: two little cars tied to one cable, so that when one goes up, the other comes down. It opened in 1870 and was only the second one in Europe.',
        },
      },
      onSite: {
        question: { el: 'Βρες το τεράστιο μπρούντζινο πουλί που στέκεται ψηλά σε μια κολόνα δίπλα στα σκαλιά. Τι κρατάει στα νύχια του;', en: 'Find the giant bronze bird perched high on a column near the steps. What is it holding in its claws?' },
        options: {
          el: ['Ένα ψάρι', 'Ένα σπαθί', 'Ένα στέμμα', 'Ένα κλαδί ελιάς'],
          en: ['A fish', 'A sword', 'A crown', 'An olive branch'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ο Turul (Τούρουλ), το μυθικό γεράκι των Μαγυάρων, και κρατάει ένα σπαθί. Στους παλιούς θρύλους ο Turul οδήγησε τις φυλές τους σε αυτή τη γη. Τα φτερά του ανοίγουν πολλά μέτρα!',
          en: 'It is the Turul, the mythical falcon of the Magyars, and it holds a sword. In the old legends the Turul guided their tribes to this land. Its wings spread several metres wide!',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 750 χρόνια ο βασιλιάς Béla IV (Μπέλα ο Δ΄) έχτισε ένα κάστρο σε αυτόν τον λόφο, γιατί από ψηλά μπορούσε να δει κάθε εχθρό που πλησίαζε. Οι επόμενοι βασιλιάδες το μεγάλωσαν και το στόλισαν, και ο Matthias (Μάτιας) το έκανε ένα από τα πιο λαμπρά παλάτια της Ευρώπης, με βιβλιοθήκη, κήπους και σιντριβάνια. Το κάστρο όμως πολιορκήθηκε και γκρεμίστηκε πολλές φορές, την τελευταία στον μεγάλο πόλεμο, και κάθε φορά οι Ούγγροι το έχτιζαν ξανά. Το 1870 ένα τελεφερίκ, το Sikló, άρχισε να ανεβάζει τους ανθρώπους στον λόφο, το δεύτερο στην Ευρώπη! Σήμερα στο παλάτι δεν μένει βασιλιάς: εκεί βρίσκονται μουσεία, ενώ στο μικρό παλάτι Sándor δίπλα σου δουλεύει ο Πρόεδρος της Ουγγαρίας, με φρουρούς στην πόρτα που αλλάζουν βάρδια κάθε ώρα.',
        en: 'More than 750 years ago, King Béla IV built a castle on this hill, because from up here he could spot any enemy coming. The kings who followed made it bigger and finer, and King Matthias turned it into one of the most splendid palaces in Europe, with a library, gardens and fountains. But the castle was besieged and wrecked many times, the last time in the great war, and each time the Hungarians built it again. In 1870 a funicular, the Sikló, began carrying people up the hill, only the second one in Europe! Today no king lives in the palace: it holds museums, while in the small Sándor Palace beside you the President of Hungary works, with guards at the door who change shifts every hour.',
      },
      didYouKnow: {
        el: 'Κάτω από τον λόφο απλώνεται ένας λαβύρινθος από φυσικές σπηλιές και σήραγγες μήκους χιλιομέτρων, που χρησιμοποιήθηκαν ως αποθήκες, καταφύγια και ακόμη και νοσοκομείο στον Β΄ Παγκόσμιο Πόλεμο. Το Sikló καταστράφηκε το 1945 και ξαναλειτούργησε μόλις το 1986, με τα βαγόνια του σχεδιασμένα όπως τα αρχικά.',
        en: 'Beneath the hill lies a labyrinth of natural caves and tunnels several kilometres long, used over the centuries as cellars, shelters and even a hospital during World War II. The Sikló was destroyed in 1945 and only ran again in 1986, with cars designed to look like the originals.',
      },
      quiz: [
        {
          q: { el: 'Γιατί ο βασιλιάς Béla IV έχτισε το κάστρο πάνω στον λόφο;', en: 'Why did King Béla IV build the castle on the hill?' },
          options: {
            el: ['Γιατί του άρεσε η θέα', 'Γιατί από ψηλά έβλεπε κάθε εχθρό που πλησίαζε', 'Γιατί κάτω υπήρχε λίμνη', 'Γιατί ήθελε να είναι κοντά στα αστέρια'],
            en: ['Because he liked the view', 'Because from up high he could spot any enemy coming', 'Because there was a lake below', 'Because he wanted to be closer to the stars'],
          },
          correct: 1,
          explanation: {
            el: 'Από τον λόφο φαίνεται όλη η πεδιάδα και το ποτάμι, έτσι κανένας εχθρός δεν μπορούσε να πλησιάσει κρυφά.',
            en: 'From the hill you can see the whole plain and the river, so no enemy could sneak up unnoticed.',
          },
        },
        {
          q: { el: 'Ποιος δουλεύει σήμερα στο μικρό παλάτι Sándor;', en: 'Who works today in the small Sándor Palace?' },
          options: {
            el: ['Ο βασιλιάς', 'Ένας μάγος', 'Ο οδηγός του τελεφερίκ', 'Ο Πρόεδρος της Ουγγαρίας'],
            en: ['The king', 'A wizard', 'The funicular driver', 'The President of Hungary'],
          },
          correct: 3,
          explanation: {
            el: 'Στο παλάτι Sándor δουλεύει ο Πρόεδρος της Ουγγαρίας. Οι φρουροί στην πόρτα του αλλάζουν βάρδια κάθε ώρα.',
            en: 'The Sándor Palace is where the President of Hungary works. The guards at its door change shifts every hour.',
          },
        },
        {
          q: { el: 'Πότε άρχισε να λειτουργεί το τελεφερίκ Sikló;', en: 'When did the Sikló funicular start running?' },
          options: {
            el: ['Το 1970', 'Το 2010', 'Το 1870', 'Το 1265'],
            en: ['In 1970', 'In 2010', 'In 1870', 'In 1265'],
          },
          correct: 2,
          explanation: {
            el: 'Το Sikló άνοιξε το 1870 και ήταν το δεύτερο τελεφερίκ στην Ευρώπη. Δουλεύει ακόμη, με βαγόνια που μοιάζουν με τα παλιά.',
            en: 'The Sikló opened in 1870 and was the second funicular in Europe. It still runs, with cars that look like the old ones.',
          },
        },
      ],
    },

    // ── 5. Mátyás-templom · Matthias Church ────────────────────────────────────
    {
      id: 'matthias-church',
      name: { el: 'Ναός Mátyás', en: 'Mátyás Church' },
      emoji: '🐦‍⬛',
      lat: 47.5015,
      lng: 19.0338,
      radiusM: 60,
      riddle: {
        el: 'Μια στέγη με πολύχρωμα πλακάκια λάμπει σαν το δέρμα δράκου πάνω από μια πλατεία, ένα κοράκι με δαχτυλίδι στο ράμφος κάθεται σε έναν ψηλό πύργο, και μέσα ένας δίκαιος βασιλιάς παντρεύτηκε δύο φορές.',
        en: 'A roof of coloured tiles glitters like dragon skin above a square, a raven with a ring in its beak perches on a tall tower, and inside a fair king got married, twice.',
      },
      parentHint: {
        el: 'Είναι ο Ναός Mátyás (Μάτιας, του Ματθία), η Mátyás-templom, στην πλατεία Szentháromság tér. Από την πλατεία Szent György tér περπατήστε 8 λεπτά βόρεια την Tárnok utca μέσα στην παλιά πόλη του κάστρου.',
        en: 'It is Mátyás Church, the Mátyás-templom, on Szentháromság tér. From Szent György tér walk 8 minutes north along Tárnok utca through the old castle town.',
      },
      unlockQuestion: {
        question: { el: 'Το κοράκι με το δαχτυλίδι είναι το σύμβολο του βασιλιά Mátyás, του ήρωα πολλών ουγγρικών παραμυθιών. Ποιο ήταν το αγαπημένο του κόλπο σε αυτές τις ιστορίες;', en: 'The raven with the ring is the emblem of King Mátyás, the hero of many Hungarian folk tales. What was his favourite trick in those stories?' },
        options: {
          el: ['Πετούσε πάνω σε ένα κοράκι', 'Ντυνόταν φτωχός και περπατούσε ανάμεσα στον λαό για να δει ποιος είναι δίκαιος', 'Κοιμόταν εκατό χρόνια', 'Μετέτρεπε τις πέτρες σε χρυσάφι'],
          en: ['He flew on a raven', 'He dressed as a poor man and walked among the people to find out who was fair', 'He slept for a hundred years', 'He turned stones into gold'],
        },
        correct: 1,
        explanation: {
          el: 'Στα παραμύθια, ο βασιλιάς Mátyás ο Δίκαιος ντυνόταν σαν φτωχός χωρικός, ανακάλυπτε ποιος αδικούσε τους απλούς ανθρώπους και μετά τους τιμωρούσε με εξυπνάδα. Οι Ούγγροι λένε ακόμη: «Πέθανε ο Mátyás, χάθηκε η δικαιοσύνη».',
          en: 'In the tales, King Mátyás the Just dressed up as a poor peasant, found out who was cheating ordinary people and then punished them cleverly. Hungarians still say: “Mátyás is dead, justice is gone.”',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά τη στέγη της εκκλησίας. Τι χρώμα έχουν τα πλακάκια της;', en: 'Look up at the roof of the church. What colour are its tiles?' },
        options: {
          el: ['Ένα μόνο χρώμα, κόκκινο', 'Κατάλευκα', 'Πολλά χρώματα σε σχέδια σαν ρόμβους', 'Μαύρα με χρυσές γραμμές'],
          en: ['Just one colour, red', 'Pure white', 'Many colours in diamond patterns', 'Black with gold lines'],
        },
        correct: 2,
        explanation: {
          el: 'Τα πλακάκια είναι πράσινα, κίτρινα, καφέ και άσπρα, σε σχέδια σαν ρόμβους, και φτιάχτηκαν στο εργοστάσιο Zsolnay (Ζόλναϊ), που έκανε κεραμικά τόσο γερά που δεν τα χαλάει ούτε το χιόνι. Τώρα ψάξε το κοράκι με το δαχτυλίδι στην κορυφή του πύργου!',
          en: 'The tiles are green, yellow, brown and white, laid in diamond patterns, and they were made at the Zsolnay factory, whose ceramics are so tough that even snow cannot harm them. Now look for the raven with the ring at the top of the tower!',
        },
      },
      story: {
        el: 'Αυτή η εκκλησία είναι περίπου 750 ετών, αλλά έχει αλλάξει πρόσωπο πολλές φορές. Ο βασιλιάς Mátyás, που κυβέρνησε πριν από περισσότερα από 500 χρόνια, της έχτισε ψηλό πύργο και παντρεύτηκε εδώ και τις δύο γυναίκες του. Το σύμβολό του ήταν ένα κοράκι με δαχτυλίδι: ένας θρύλος λέει ότι, όταν ήταν παιδί, ένα κοράκι του άρπαξε το δαχτυλίδι και εκείνος το κυνήγησε μέχρι που το πήρε πίσω. Όταν αργότερα ήρθαν οι Οθωμανοί, η εκκλησία έγινε τζαμί για σχεδόν 150 χρόνια και οι τοιχογραφίες της σκεπάστηκαν με ασβέστη. Τον 19ο αιώνα ο αρχιτέκτονας Frigyes Schulek (Φρίγκιες Σούλεκ) την ξανάχτισε σαν παραμυθένιο ναό, με τη στέγη από πολύχρωμα πλακάκια και πέτρινα τέρατα, τα γκαργκόιλ, που ξεπροβάλλουν από τους τοίχους. Εδώ στέφθηκε βασιλιάς της Ουγγαρίας ο αυτοκράτορας Franz Joseph το 1867.',
        en: 'This church is about 750 years old, but it has changed its face many times. King Mátyás, who ruled more than 500 years ago, gave it a tall tower and married both of his wives here. His emblem was a raven with a ring: a legend says that when he was a boy, a raven snatched his ring and he chased it until he got it back. When the Ottomans came later, the church became a mosque for almost 150 years and its wall paintings were covered with whitewash. In the 19th century the architect Frigyes Schulek rebuilt it as a fairy-tale church, with the roof of coloured tiles and stone monsters, gargoyles, poking out of the walls. Emperor Franz Joseph was crowned King of Hungary here in 1867.',
      },
      didYouKnow: {
        el: 'Για τη στέψη του 1867 ο Franz Liszt συνέθεσε τη «Λειτουργία της Στέψης», που παίχτηκε εδώ για πρώτη φορά. Το επίσημο όνομα της εκκλησίας είναι Ναός της Παναγίας (Nagyboldogasszony-templom), αλλά όλοι τη λένε με το όνομα του βασιλιά Mátyás.',
        en: 'For the coronation of 1867, Franz Liszt composed his “Coronation Mass”, first performed here. The church\'s official name is the Church of Our Lady (Nagyboldogasszony-templom), but everyone calls it by King Mátyás\'s name.',
      },
      quiz: [
        {
          q: { el: 'Ποιο ήταν το σύμβολο του βασιλιά Mátyás;', en: 'What was King Mátyás\'s emblem?' },
          options: {
            el: ['Ένα κοράκι με δαχτυλίδι', 'Ένα λιοντάρι με σπαθί', 'Ένας δράκος με στέμμα', 'Ένα ψάρι με κλειδί'],
            en: ['A raven with a ring', 'A lion with a sword', 'A dragon with a crown', 'A fish with a key'],
          },
          correct: 0,
          explanation: {
            el: 'Το κοράκι με το δαχτυλίδι ήταν το σύμβολο του Mátyás. Γι\' αυτό η οικογένειά του ονομάστηκε Corvinus, που σημαίνει «κοράκι» στα λατινικά.',
            en: 'The raven with the ring was Mátyás\'s emblem. That is why his family was called Corvinus, which means “raven” in Latin.',
          },
        },
        {
          q: { el: 'Τι έγινε η εκκλησία όταν ήρθαν οι Οθωμανοί;', en: 'What did the church become when the Ottomans came?' },
          options: {
            el: ['Σχολείο', 'Τζαμί', 'Στάβλος για άλογα', 'Βιβλιοθήκη'],
            en: ['A school', 'A mosque', 'A stable for horses', 'A library'],
          },
          correct: 1,
          explanation: {
            el: 'Για σχεδόν 150 χρόνια η εκκλησία ήταν τζαμί, και οι παλιές τοιχογραφίες της κρύφτηκαν κάτω από ασβέστη.',
            en: 'For almost 150 years the church was a mosque, and its old wall paintings were hidden under whitewash.',
          },
        },
        {
          q: { el: 'Πώς λέγονται τα πέτρινα τέρατα που ξεπροβάλλουν από τους τοίχους;', en: 'What are the stone monsters poking out of the walls called?' },
          options: {
            el: ['Τρολ', 'Γρύπες', 'Σφίγγες', 'Γκαργκόιλ'],
            en: ['Trolls', 'Griffins', 'Sphinxes', 'Gargoyles'],
          },
          correct: 3,
          explanation: {
            el: 'Τα γκαργκόιλ είναι πέτρινα τέρατα που συχνά έχουν και δουλειά: από το στόμα τους τρέχει το νερό της βροχής μακριά από τους τοίχους.',
            en: 'Gargoyles are stone monsters that often have a job too: rainwater runs out of their mouths, away from the walls.',
          },
        },
      ],
    },

    // ── 6. Halászbástya · Fisherman's Bastion ──────────────────────────────────
    {
      id: 'fishermans-bastion',
      name: { el: 'Προμαχώνας των Ψαράδων (Halászbástya)', en: 'Fisherman\'s Bastion (Halászbástya)' },
      emoji: '🏰',
      lat: 47.5025,
      lng: 19.0350,
      radiusM: 60,
      riddle: {
        el: 'Κάτασπροι πύργοι με μυτερά καπέλα, σκάλες που στριφογυρίζουν και μπαλκόνια πάνω από το ποτάμι: μοιάζει με κάστρο από παραμύθι, αλλά ποτέ δεν φύλαξε την πόλη από κανέναν εχθρό.',
        en: 'Snow-white towers with pointed hats, twisting stairways and balconies over the river: it looks like a storybook castle, but it never protected the city from a single enemy.',
      },
      parentHint: {
        el: 'Είναι η Halászbástya (Χάλας-μπάστια, ο Προμαχώνας των Ψαράδων), ακριβώς πίσω από τον Ναό Mátyás, προς το ποτάμι, ένα λεπτό με τα πόδια. Οι κάτω βεράντες είναι δωρεάν, για τους πάνω πύργους χρειάζεται εισιτήριο.',
        en: 'It is the Halászbástya, Fisherman\'s Bastion, right behind Mátyás Church on the river side, one minute on foot. The lower terraces are free; the upper towers need a ticket.',
      },
      unlockQuestion: {
        question: { el: 'Ο προμαχώνας έχει επτά πύργους, έναν για κάθε φυλή των πρώτων καβαλάρηδων που ήρθαν εδώ το 896. Ποιοι ήταν αυτοί οι καβαλάρηδες;', en: 'The bastion has seven towers, one for each tribe of the horsemen who first arrived here in 896. Who were these horsemen?' },
        options: {
          el: ['Οι Ρωμαίοι', 'Οι Βίκινγκ', 'Οι αρχαίοι Έλληνες', 'Οι Μαγυάροι, οι πρόγονοι των Ούγγρων'],
          en: ['The Romans', 'The Vikings', 'The ancient Greeks', 'The Magyars, the ancestors of the Hungarians'],
        },
        correct: 3,
        explanation: {
          el: 'Οι Μαγυάροι ήταν επτά φυλές καβαλάρηδων που ήρθαν από τα ανατολικά, από τις στέπες, και εγκαταστάθηκαν εδώ το 896. Οι Ούγγροι ακόμη λένε τη χώρα τους Magyarország, «η χώρα των Μαγυάρων».',
          en: 'The Magyars were seven tribes of horsemen who came from the east, from the great grasslands, and settled here in 896. Hungarians still call their country Magyarország, “the land of the Magyars”.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε κατά μήκος του προμαχώνα και μέτρησε τους πύργους με τα μυτερά καπέλα. Πόσοι είναι;', en: 'Walk along the bastion and count the towers with pointed hats. How many are there?' },
        options: {
          el: ['Επτά', 'Τρεις', 'Πέντε', 'Δέκα'],
          en: ['Seven', 'Three', 'Five', 'Ten'],
        },
        correct: 0,
        explanation: {
          el: 'Επτά πύργοι, όσες και οι φυλές των Μαγυάρων. Τώρα κοίτα απέναντι, πέρα από το ποτάμι: το τεράστιο κτίριο με τους μυτερούς πυργίσκους και τον κόκκινο τρούλο είναι το Κοινοβούλιο, εκεί που ξεκίνησε το κυνήγι σας!',
          en: 'Seven towers, one for each Magyar tribe. Now look across the river: the huge building with the pointed spires and the red dome is the Parliament, where your hunt began!',
        },
      },
      story: {
        el: 'Μη σε ξεγελάει η όψη του: αυτό το «κάστρο» δεν είδε ποτέ πόλεμο. Χτίστηκε από το 1895 ως το 1902, όταν η Ουγγαρία γιόρταζε τα χίλια χρόνια από τον ερχομό των Μαγυάρων, και ο αρχιτέκτονας Frigyes Schulek το σχεδίασε σαν ένα μεγάλο μπαλκόνι από παραμύθι, μόνο και μόνο για να στέκονται οι άνθρωποι και να θαυμάζουν τη θέα. Οι επτά πύργοι του θυμίζουν τις επτά φυλές που ήρθαν με τα άλογά τους πριν από περισσότερα από χίλια χρόνια. Το όνομά του το πήρε από τη συντεχνία των ψαράδων, που στον Μεσαίωνα φύλαγαν αυτό το κομμάτι του τείχους και είχαν την ψαραγορά τους λίγο πιο κάτω. Μπροστά του, πάνω στο μπρούντζινο άλογό του, στέκεται ο βασιλιάς Stephen, ο πρώτος βασιλιάς της Ουγγαρίας. Καμιά φορά η πιο ωραία ιδέα είναι απλώς ένα μέρος για να κοιτάς μακριά!',
        en: 'Do not let its looks fool you: this “castle” has never seen a battle. It was built between 1895 and 1902, when Hungary was celebrating a thousand years since the Magyars arrived, and the architect Frigyes Schulek designed it as a big fairy-tale balcony, simply for people to stand on and admire the view. Its seven towers stand for the seven tribes that rode in on their horses more than a thousand years ago. Its name comes from the fishermen\'s guild, who guarded this stretch of the wall in the Middle Ages and had their fish market just below. In front of it, on his bronze horse, stands King Stephen, the first king of Hungary. Sometimes the best idea is simply a place to look out from!',
      },
      didYouKnow: {
        el: 'Ο Schulek σχεδίασε τον προμαχώνα ταυτόχρονα με την αναστήλωση του διπλανού ναού, ώστε τα δύο κτίρια να μοιάζουν σαν ένα σύνολο. Μετά τον Β΄ Παγκόσμιο Πόλεμο ο γιος του, János Schulek, ανέλαβε να επισκευάσει το έργο του πατέρα του.',
        en: 'Schulek designed the bastion at the same time as his restoration of the church next door, so that the two would read as a single ensemble. After World War II it was his son, János Schulek, who repaired his father\'s work.',
      },
      quiz: [
        {
          q: { el: 'Γιατί χτίστηκε ο προμαχώνας;', en: 'Why was the bastion built?' },
          options: {
            el: ['Για να φυλάει την πόλη από τους εχθρούς', 'Για να μένουν οι ψαράδες', 'Για να στέκονται οι άνθρωποι και να θαυμάζουν τη θέα', 'Για να φυλάγεται το στέμμα'],
            en: ['To guard the city from enemies', 'For the fishermen to live in', 'For people to stand on and admire the view', 'To keep the crown safe'],
          },
          correct: 2,
          explanation: {
            el: 'Χτίστηκε μόνο για τη θέα, σαν ένα μεγάλο μπαλκόνι από παραμύθι, για τη γιορτή των χιλίων χρόνων της Ουγγαρίας.',
            en: 'It was built only for the view, like a big fairy-tale balcony, for Hungary\'s thousand-year celebrations.',
          },
        },
        {
          q: { el: 'Από ποιους πήρε το όνομά του ο προμαχώνας;', en: 'Who is the bastion named after?' },
          options: {
            el: ['Από τους βασιλιάδες', 'Από τους ιππότες', 'Από τους φούρναρηδες', 'Από τη συντεχνία των ψαράδων'],
            en: ['The kings', 'The knights', 'The bakers', 'The fishermen\'s guild'],
          },
          correct: 3,
          explanation: {
            el: 'Οι ψαράδες φύλαγαν στον Μεσαίωνα αυτό το κομμάτι του τείχους και είχαν την αγορά τους λίγο πιο κάτω.',
            en: 'In the Middle Ages the fishermen guarded this stretch of the wall and had their market just below it.',
          },
        },
        {
          q: { el: 'Ποιος στέκεται πάνω στο μπρούντζινο άλογο μπροστά από τον προμαχώνα;', en: 'Who sits on the bronze horse in front of the bastion?' },
          options: {
            el: ['Ο βασιλιάς Stephen', 'Ο βασιλιάς Mátyás', 'Ο κόμης Széchenyi', 'Ο αρχιτέκτονας Schulek'],
            en: ['King Stephen', 'King Mátyás', 'Count Széchenyi', 'The architect Schulek'],
          },
          correct: 0,
          explanation: {
            el: 'Είναι ο βασιλιάς Stephen, ο πρώτος βασιλιάς της Ουγγαρίας, με το στέμμα στο κεφάλι και το σταυρό στο χέρι.',
            en: 'It is King Stephen, the first king of Hungary, with the crown on his head and a cross in his hand.',
          },
        },
      ],
    },

    // ── 7. Gellért-hegy · Gellért Hill (Citadella and Liberty Statue) ─────────
    {
      id: 'gellert-hill',
      name: { el: 'Λόφος Gellért', en: 'Gellért Hill' },
      emoji: '🌄',
      lat: 47.4868,
      lng: 19.0470,
      radiusM: 80,
      riddle: {
        el: 'Ένας απότομος λόφος πάνω από το ποτάμι φοράει ένα πέτρινο φρούριο για καπέλο και μια γιγάντια κυρία που σηκώνει ένα φύλλο προς τον ουρανό. Στα πόδια του, ζεστό νερό αναβλύζει από τη γη.',
        en: 'A steep hill above the river wears a stone fortress for a hat and a giant lady lifting a leaf towards the sky. At its feet, warm water bubbles up out of the ground.',
      },
      parentHint: {
        el: 'Είναι ο λόφος Gellért (Γκέλερτ), η Gellért-hegy, με το φρούριο Citadella και το Άγαλμα της Ελευθερίας στην κορυφή. Από το κάστρο κατεβείτε στο ποτάμι στη γέφυρα Erzsébet híd (15 λεπτά) και ανεβείτε τα μονοπάτια με τα σκαλιά (25 λεπτά), ή με κουρασμένα παιδιά πάρτε το λεωφορείο 27 από τη Móricz Zsigmond körtér ως τη στάση Búsuló Juhász, 10 λεπτά κάτω από την κορυφή.',
        en: 'It is Gellért Hill, the Gellért-hegy, with the Citadella fortress and the Liberty Statue on top. From the castle walk down to the river at Erzsébet híd (15 minutes) and climb the stepped paths (25 minutes), or with tired children take bus 27 from Móricz Zsigmond körtér to the Búsuló Juhász stop, 10 minutes below the summit.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι στα πόδια του λόφου αναβλύζει ζεστό νερό. Γιατί είναι ζεστό;', en: 'The riddle says warm water bubbles up at the foot of the hill. Why is it warm?' },
        options: {
          el: ['Γιατί ζεσταίνεται βαθιά μέσα στη γη και ανεβαίνει από ρωγμές', 'Γιατί το ζεσταίνει ο ήλιος', 'Γιατί το βράζουν σε μεγάλα καζάνια', 'Γιατί περνάει μέσα από ένα ηφαίστειο'],
          en: ['Because it is heated deep inside the earth and rises through cracks', 'Because the sun warms it', 'Because it is boiled in big cauldrons', 'Because it flows through a volcano'],
        },
        correct: 0,
        explanation: {
          el: 'Όσο πιο βαθιά πας μέσα στη γη, τόσο πιο ζεστά είναι τα πετρώματα. Το νερό της βροχής κατεβαίνει βαθιά, ζεσταίνεται και ξανανεβαίνει από ρωγμές. Η Βουδαπέστη έχει περισσότερες από εκατό τέτοιες πηγές, γι\' αυτό είναι γεμάτη λουτρά.',
          en: 'The deeper you go into the earth, the hotter the rocks are. Rainwater sinks deep down, heats up and rises again through cracks. Budapest has more than a hundred such springs, which is why it is full of baths.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά τη γιγάντια κυρία στην κορυφή. Τι κρατάει πάνω από το κεφάλι της;', en: 'Look up at the giant lady on the top. What is she holding above her head?' },
        options: {
          el: ['Ένα σπαθί', 'Ένα φύλλο φοίνικα', 'Μια δάδα', 'Ένα στέμμα'],
          en: ['A sword', 'A palm leaf', 'A torch', 'A crown'],
        },
        correct: 1,
        explanation: {
          el: 'Κρατάει ένα φύλλο φοίνικα, από τα παλιά χρόνια σύμβολο της νίκης και της ειρήνης. Η ίδια η κυρία είναι 14 μέτρα ψηλή, και με το βάθρο της φτάνει τα 40. Γύρνα τώρα προς το ποτάμι και μέτρησε πόσες γέφυρες βλέπεις!',
          en: 'She holds a palm leaf, since ancient times a symbol of victory and peace. The lady herself is 14 metres tall, and with her pedestal she reaches 40. Now turn to the river and count how many bridges you can see!',
        },
      },
      story: {
        el: 'Ο λόφος έχει ύψος 235 μέτρα και πήρε το όνομά του από τον Gellért, έναν επίσκοπο από την Ιταλία που πριν από χίλια χρόνια δίδασκε τον γιο του βασιλιά Stephen. Ένας παλιός, λυπητερός θρύλος λέει ότι κάποιοι που δεν ήθελαν τη νέα πίστη τον έσπρωξαν από αυτόν τον λόφο μέσα σε ένα βαρέλι. Οι Αυστριακοί έχτισαν στην κορυφή το φρούριο Citadella το 1854, για να παρακολουθούν την πόλη μετά από μια εξέγερση, και οι κάτοικοι δεν το συμπάθησαν ποτέ. Το 1947 στήθηκε δίπλα του το Άγαλμα της Ελευθερίας, μια γυναίκα που σηκώνει ένα φύλλο φοίνικα, ορατή από κάθε γωνιά της πόλης. Στα πόδια του, ζεστό νερό βγαίνει από τα βράχια και γεμίζει τα λουτρά Gellért και Rudas, όπου οι άνθρωποι κολυμπούν από την εποχή των Οθωμανών. Από εδώ πάνω βλέπεις όλη τη Βουδαπέστη: το καλύτερο μπαλκόνι της πόλης!',
        en: 'The hill is 235 metres high and takes its name from Gellért, a bishop from Italy who taught King Stephen\'s son about a thousand years ago. An old, sad legend says that people who did not want the new faith pushed him down this hill inside a barrel. The Austrians built the Citadella fortress on top in 1854 to keep watch over the city after an uprising, and locals never liked it. In 1947 the Liberty Statue was raised beside it, a woman lifting a palm leaf, visible from every corner of the city. At its foot, hot water pours from the rocks into the Gellért and Rudas baths, where people have been bathing since Ottoman times. From up here you can see all of Budapest: the best balcony in town!',
      },
      didYouKnow: {
        el: 'Το λουτρό Rudas, στη βάση του λόφου, χτίστηκε από τους Οθωμανούς τον 16ο αιώνα και διατηρεί ακόμη τον αρχικό οκταγωνικό θόλο του με τα μικρά παράθυρα, από τα οποία το φως πέφτει στο νερό σαν αστέρια. Μέσα στον λόφο υπάρχει και μια εκκλησία-σπηλιά, που κλείστηκε με τσιμέντο το 1951 και ξανάνοιξε το 1989.',
        en: 'The Rudas bath at the base of the hill was built by the Ottomans in the 16th century and still keeps its original octagonal dome with small windows, through which light falls on the water like stars. Inside the hill there is also a cave church, sealed with concrete in 1951 and reopened in 1989.',
      },
      quiz: [
        {
          q: { el: 'Ποιος ήταν ο Gellért, που έδωσε το όνομά του στον λόφο;', en: 'Who was Gellért, who gave the hill its name?' },
          options: {
            el: ['Ένας βασιλιάς', 'Ένας επίσκοπος από την Ιταλία που δίδασκε τον γιο του βασιλιά', 'Ένας ψαράς', 'Ένας αρχιτέκτονας'],
            en: ['A king', 'A bishop from Italy who taught the king\'s son', 'A fisherman', 'An architect'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Gellért ήρθε από την Ιταλία πριν από χίλια χρόνια και έγινε δάσκαλος του γιου του βασιλιά Stephen και επίσκοπος.',
            en: 'Gellért came from Italy a thousand years ago and became a bishop and the teacher of King Stephen\'s son.',
          },
        },
        {
          q: { el: 'Ποιοι έχτισαν το φρούριο Citadella στην κορυφή;', en: 'Who built the Citadella fortress on the top?' },
          options: {
            el: ['Οι Αυστριακοί, για να παρακολουθούν την πόλη', 'Οι Ρωμαίοι', 'Οι ψαράδες', 'Οι Μαγυάροι, το 896'],
            en: ['The Austrians, to keep watch over the city', 'The Romans', 'The fishermen', 'The Magyars, in 896'],
          },
          correct: 0,
          explanation: {
            el: 'Οι Αυστριακοί έχτισαν την Citadella το 1854, μετά από μια εξέγερση, για να βλέπουν την πόλη από ψηλά. Οι κάτοικοι δεν τη συμπάθησαν ποτέ.',
            en: 'The Austrians built the Citadella in 1854, after an uprising, to watch the city from above. The people of Budapest never liked it.',
          },
        },
        {
          q: { el: 'Από πότε κολυμπούν οι άνθρωποι στα ζεστά νερά στη βάση του λόφου;', en: 'Since when have people been bathing in the hot waters at the foot of the hill?' },
          options: {
            el: ['Από πέρυσι', 'Από το 1947', 'Από την εποχή των Οθωμανών', 'Από ποτέ, απαγορεύεται'],
            en: ['Since last year', 'Since 1947', 'Since Ottoman times', 'Never, it is forbidden'],
          },
          correct: 2,
          explanation: {
            el: 'Οι Οθωμανοί έχτισαν τα πρώτα λουτρά εδώ πριν από περισσότερα από 400 χρόνια, και το λουτρό Rudas λειτουργεί ακόμη!',
            en: 'The Ottomans built the first baths here more than 400 years ago, and the Rudas bath is still open today!',
          },
        },
      ],
    },

    // ── 8. Hősök tere · Heroes' Square ─────────────────────────────────────────
    {
      id: 'heroes-square',
      name: { el: 'Πλατεία Ηρώων (Hősök tere)', en: 'Heroes\' Square (Hősök tere)' },
      emoji: '🐎',
      lat: 47.5149,
      lng: 19.0778,
      radiusM: 40,
      riddle: {
        el: 'Επτά άγριοι καβαλάρηδες φυλάνε μια κολόνα τόσο ψηλή που ο άγγελος στην κορυφή της σχεδόν αγγίζει τα σύννεφα, ενώ βασιλιάδες και ήρωες στέκονται στη σειρά σε δύο καμπύλες στοές.',
        en: 'Seven fierce horsemen guard a column so tall that the angel on top nearly touches the clouds, while kings and heroes line up in two curved galleries.',
      },
      parentHint: {
        el: 'Είναι η Hősök tere (Χέσεκ τέρε, η Πλατεία των Ηρώων). Από τον λόφο κατεβείτε στη Szent Gellért tér, πάρτε το μετρό M4 ως τη Deák Ferenc tér και αλλάξτε στο μικρό κίτρινο μετρό M1 ως τη στάση Hősök tere (περίπου 30 λεπτά).',
        en: 'It is Hősök tere, Heroes\' Square. From the hill walk down to Szent Gellért tér, take metro M4 to Deák Ferenc tér and change to the little yellow metro M1 to the Hősök tere stop (about 30 minutes).',
      },
      unlockQuestion: {
        question: { el: 'Η πλατεία άρχισε να χτίζεται το 1896, για μεγάλα γενέθλια της χώρας. Πόσα χρόνια γιόρταζε η Ουγγαρία;', en: 'The square was started in 1896, for a big birthday of the country. How many years was Hungary celebrating?' },
        options: {
          el: ['Εκατό χρόνια', 'Πεντακόσια χρόνια', 'Χίλια χρόνια', 'Δύο χιλιάδες χρόνια'],
          en: ['One hundred years', 'Five hundred years', 'One thousand years', 'Two thousand years'],
        },
        correct: 2,
        explanation: {
          el: 'Από το 896, όταν έφτασαν οι Μαγυάροι, ως το 1896 πέρασαν ακριβώς χίλια χρόνια. Η γιορτή λεγόταν Millennium, «χιλιετία», και η πόλη έχτισε γι\' αυτήν πλατείες, γέφυρες και το πρώτο μετρό της ηπειρωτικής Ευρώπης, το κίτρινο M1 που ίσως σας έφερε εδώ!',
          en: 'From 896, when the Magyars arrived, to 1896 is exactly a thousand years. The celebration was called the Millennium, and the city built squares, bridges and the first underground railway on the European mainland for it, the yellow M1 that may have brought you here!',
        },
      },
      onSite: {
        question: { el: 'Πήγαινε κάτω από την ψηλή κολόνα και μέτρησε τους καβαλάρηδες πάνω στα άλογά τους. Πόσοι είναι;', en: 'Go up to the tall column and count the horsemen on their horses. How many are there?' },
        options: {
          el: ['Τρεις', 'Πέντε', 'Δέκα', 'Επτά'],
          en: ['Three', 'Five', 'Ten', 'Seven'],
        },
        correct: 3,
        explanation: {
          el: 'Επτά καβαλάρηδες, οι αρχηγοί των επτά φυλών των Μαγυάρων, με τον Árpád (Άρπαντ) μπροστά. Κοίτα τώρα ψηλά: ο άγγελος στην κορυφή κρατάει ένα στέμμα και έναν διπλό σταυρό. Και μέτρησε τα αγάλματα στις δύο στοές: είναι 14, όλα βασιλιάδες και ήρωες της Ουγγαρίας.',
          en: 'Seven horsemen, the chiefs of the seven Magyar tribes, with Árpád at the front. Now look up: the angel on top holds a crown and a double cross. And count the statues in the two galleries: there are 14, all kings and heroes of Hungary.',
        },
      },
      story: {
        el: 'Το 1896 η Ουγγαρία γιόρταζε τα χίλια χρόνια από τότε που οι Μαγυάροι ήρθαν σε αυτή τη γη, και αποφάσισε να χτίσει μια πλατεία-γενέθλιο δώρο. Το μνημείο όμως ήταν τόσο μεγάλο που χρειάστηκαν 33 χρόνια για να τελειώσει! Στη μέση υψώνεται μια κολόνα 36 μέτρων με τον αρχάγγελο Γαβριήλ στην κορυφή. Ένας θρύλος λέει ότι ο Γαβριήλ εμφανίστηκε στον ύπνο του Πάπα και του είπε να στείλει στέμμα στον Stephen, γι\' αυτό κρατάει το στέμμα στο ένα χέρι. Γύρω από την κολόνα στέκονται οι επτά αρχηγοί των φυλών πάνω στα άλογά τους, με τον Árpád μπροστά. Στις δύο καμπύλες στοές βλέπεις 14 βασιλιάδες και ήρωες της Ουγγαρίας, και δεξιά κι αριστερά της πλατείας δύο μεγάλα μουσεία γεμάτα πίνακες. Οι μεγάλες ιδέες θέλουν χρόνο, αλλά αξίζουν την αναμονή!',
        en: 'In 1896 Hungary was celebrating a thousand years since the Magyars came to this land, and it decided to build a square as a birthday present. But the monument was so big that it took 33 years to finish! In the middle rises a 36-metre column with the Archangel Gabriel on top. A legend says Gabriel appeared to the Pope in a dream and told him to send a crown to Stephen, which is why the angel holds a crown in one hand. Around the column stand the seven chiefs of the tribes on their horses, with Árpád at the front. In the two curved galleries you can see 14 kings and heroes of Hungary, and on either side of the square stand two great museums full of paintings. Big ideas take time, but they are worth the wait!',
      },
      didYouKnow: {
        el: 'Το άγαλμα του Γαβριήλ, έργο του γλύπτη György Zala, κέρδισε το μεγάλο βραβείο στην Παγκόσμια Έκθεση του Παρισιού το 1900, πριν καν στηθεί στην κολόνα. Οι 14 φιγούρες των στοών δεν ήταν πάντα οι ίδιες: τα αγάλματα Αυστριακών αυτοκρατόρων αντικαταστάθηκαν μετά τον Β΄ Παγκόσμιο Πόλεμο από Ούγγρους ήρωες.',
        en: 'The statue of Gabriel, by the sculptor György Zala, won the grand prize at the Paris World Exhibition of 1900, before it was even placed on the column. The 14 figures in the galleries have not always been the same: statues of Austrian emperors were replaced after World War II with Hungarian heroes.',
      },
      quiz: [
        {
          q: { el: 'Πόσα χρόνια χρειάστηκαν για να τελειώσει το μνημείο;', en: 'How many years did it take to finish the monument?' },
          options: {
            el: ['Ένα χρόνο', 'Τρία χρόνια', 'Εκατό χρόνια', 'Τριάντα τρία χρόνια'],
            en: ['One year', 'Three years', 'A hundred years', 'Thirty-three years'],
          },
          correct: 3,
          explanation: {
            el: 'Το μνημείο ξεκίνησε το 1896 και τελείωσε το 1929: 33 χρόνια δουλειάς.',
            en: 'The monument was started in 1896 and finished in 1929: 33 years of work.',
          },
        },
        {
          q: { el: 'Ποιος στέκεται στην κορυφή της ψηλής κολόνας;', en: 'Who stands at the top of the tall column?' },
          options: {
            el: ['Ο βασιλιάς Stephen', 'Ο Árpád', 'Ο αρχάγγελος Γαβριήλ', 'Ένας δράκος'],
            en: ['King Stephen', 'Árpád', 'The Archangel Gabriel', 'A dragon'],
          },
          correct: 2,
          explanation: {
            el: 'Ο αρχάγγελος Γαβριήλ, με το στέμμα στο ένα χέρι και τον διπλό σταυρό στο άλλο, στέκεται 36 μέτρα πάνω από την πλατεία.',
            en: 'The Archangel Gabriel, with the crown in one hand and the double cross in the other, stands 36 metres above the square.',
          },
        },
        {
          q: { el: 'Ποιος είναι ο καβαλάρης μπροστά από τους άλλους;', en: 'Who is the horseman in front of the others?' },
          options: {
            el: ['Ο Franz Joseph', 'Ο Árpád, ο αρχηγός των αρχηγών', 'Ο Gellért', 'Ο Széchenyi'],
            en: ['Franz Joseph', 'Árpád, the chief of chiefs', 'Gellért', 'Széchenyi'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Árpád οδήγησε τις επτά φυλές των Μαγυάρων σε αυτή τη γη, γι\' αυτό στέκεται μπροστά από τους άλλους έξι αρχηγούς.',
            en: 'Árpád led the seven Magyar tribes into this land, which is why he stands in front of the other six chiefs.',
          },
        },
      ],
    },

    // ── 9. Vajdahunyad vára · Vajdahunyad Castle (City Park) ──────────────────
    {
      id: 'vajdahunyad-castle',
      name: { el: 'Κάστρο Vajdahunyad', en: 'Vajdahunyad Castle' },
      emoji: '🖋️',
      lat: 47.5148,
      lng: 19.0821,
      radiusM: 60,
      riddle: {
        el: 'Μέσα σε ένα πάρκο, ένα κάστρο που μοιάζει με δέκα κάστρα μαζί φτιάχτηκε στην αρχή από χαρτόνι, σαν σκηνικό για γενέθλια. Στην αυλή του κάθεται ένας άντρας με κουκούλα και πένα, που κρύβει το πρόσωπό του.',
        en: 'In a park, a castle that looks like ten castles in one was first built of cardboard, like a stage set for a birthday. In its courtyard sits a hooded man with a pen, hiding his face.',
      },
      parentHint: {
        el: 'Είναι το κάστρο Vajdahunyad (Βάιντα-χούνιαντ), η Vajdahunyad vára, στο πάρκο Városliget. Από την Πλατεία Ηρώων περπατήστε 5 λεπτά πίσω από το μνημείο, αριστερά, και περάστε τη μικρή γέφυρα πάνω από τη λίμνη ως την πύλη του κάστρου.',
        en: 'It is Vajdahunyad Castle, the Vajdahunyad vára, in the Városliget park. From Heroes\' Square walk 5 minutes behind the monument, to the left, and cross the little bridge over the lake to the castle gate.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το κάστρο φτιάχτηκε στην αρχή από χαρτόνι και ξύλο. Γιατί;', en: 'The riddle says the castle was first made of cardboard and wood. Why?' },
        options: {
          el: ['Γιατί δεν υπήρχαν πέτρες στην πόλη', 'Γιατί ήταν παιχνίδι για παιδιά', 'Γιατί το έχτισαν σε μία νύχτα', 'Γιατί έπρεπε να κρατήσει μόνο για μια έκθεση, έναν χρόνο'],
          en: ['Because there were no stones in the city', 'Because it was a toy for children', 'Because it was built in one night', 'Because it only had to last for one exhibition, one year'],
        },
        correct: 3,
        explanation: {
          el: 'Χτίστηκε για τη μεγάλη έκθεση των χιλίων χρόνων, το 1896, και θα γκρεμιζόταν μετά. Οι κάτοικοι όμως το αγάπησαν τόσο, που ζήτησαν να ξαναχτιστεί από πέτρα και τούβλο για πάντα.',
          en: 'It was built for the great thousand-year exhibition of 1896 and was meant to be pulled down afterwards. But people loved it so much that they asked for it to be rebuilt in stone and brick, to stay for ever.',
        },
      },
      onSite: {
        question: { el: 'Βρες τον καθιστό άντρα με την κουκούλα στην αυλή. Ποιο μέρος του αγάλματος λάμπει χρυσό, επειδή το άγγιξαν χιλιάδες χέρια;', en: 'Find the hooded man sitting in the courtyard. Which part of the statue shines gold, because thousands of hands have touched it?' },
        options: {
          el: ['Η μύτη του', 'Η πένα του', 'Το πόδι του', 'Η κουκούλα του'],
          en: ['His nose', 'His pen', 'His foot', 'His hood'],
        },
        correct: 1,
        explanation: {
          el: 'Η πένα του λάμπει, γιατί λένε ότι όποιος την αγγίξει γίνεται καλύτερος συγγραφέας. Είναι ο Anonymus (Ανώνυμος), ο πρώτος που έγραψε την ιστορία των Ούγγρων, πριν από 800 χρόνια, χωρίς ποτέ να πει το όνομά του. Άγγιξέ την κι εσύ!',
          en: 'His pen shines, because people say that anyone who touches it becomes a better writer. He is Anonymus, the first person to write down the history of the Hungarians, 800 years ago, without ever telling his name. Give it a touch yourself!',
        },
      },
      story: {
        el: 'Για τη μεγάλη γιορτή του 1896 η πόλη ήθελε να δείξει σε μια ματιά όλα τα διάσημα κτίρια της Ουγγαρίας. Ο αρχιτέκτονας Ignác Alpár (Ίγκνατς Άλπαρ) σκέφτηκε ένα κόλπο: ένωσε κομμάτια από περισσότερα από είκοσι κάστρα, εκκλησίες και παλάτια σε ένα μόνο κτίριο, με πύργους από τον Μεσαίωνα δίπλα σε αίθουσες από την Αναγέννηση και μια πτέρυγα σαν παλάτι μπαρόκ. Επειδή θα κρατούσε μόνο έναν χρόνο, το έφτιαξε από ξύλο και χαρτόνι. Οι άνθρωποι όμως το αγάπησαν τόσο πολύ, που ξαναχτίστηκε από πέτρα και τούβλο και τελείωσε το 1908. Στην αυλή κάθεται ο Anonymus, ο κουκουλοφόρος που έγραψε πρώτος την ιστορία των Ούγγρων και κράτησε κρυφό το όνομά του. Η λίμνη γύρω από το κάστρο έχει βαρκούλες το καλοκαίρι και τον χειμώνα γίνεται μια από τις μεγαλύτερες υπαίθριες πίστες πατινάζ της Ευρώπης!',
        en: 'For the great celebration of 1896, the city wanted to show all the famous buildings of Hungary at a single glance. The architect Ignác Alpár had a trick: he joined pieces of more than twenty castles, churches and palaces into one building, with towers from the Middle Ages beside Renaissance halls and a wing like a baroque palace. Since it only had to last a year, he made it of wood and cardboard. But people loved it so much that it was rebuilt in stone and brick, finished in 1908. In the courtyard sits Anonymus, the hooded man who first wrote down the history of the Hungarians and kept his own name a secret. The lake around the castle has little boats in summer, and in winter it turns into one of the largest outdoor ice rinks in Europe!',
      },
      didYouKnow: {
        el: 'Το κάστρο πήρε το όνομά του από το πραγματικό κάστρο Vajdahunyad στην Τρανσυλβανία (σήμερα Hunedoara, στη Ρουμανία), το σπίτι της οικογένειας του βασιλιά Mátyás, που το αντιγράφει η πιο εντυπωσιακή πτέρυγά του. Σήμερα στεγάζει το Μουσείο Γεωργίας της Ουγγαρίας, και η πίστα πατινάζ της λίμνης λειτουργεί από το 1870.',
        en: 'The castle takes its name from the real Vajdahunyad Castle in Transylvania (today Hunedoara, in Romania), the home of King Mátyás\'s family, which its most striking wing copies. Today it houses the Hungarian Museum of Agriculture, and the ice rink on the lake has been running since 1870.',
      },
      quiz: [
        {
          q: { el: 'Τι ήθελε να δείξει το κάστρο το 1896;', en: 'What was the castle meant to show in 1896?' },
          options: {
            el: ['Όλα τα διάσημα κτίρια της Ουγγαρίας σε ένα', 'Πώς ζούσαν οι δεινόσαυροι', 'Το σπίτι του βασιλιά', 'Ένα καινούργιο σχολείο'],
            en: ['All the famous buildings of Hungary in one', 'How dinosaurs lived', 'The king\'s house', 'A new school'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Ignác Alpár ένωσε κομμάτια από περισσότερα από είκοσι κάστρα, εκκλησίες και παλάτια, για να δει κανείς όλη την Ουγγαρία με μια ματιά.',
            en: 'Ignác Alpár joined pieces of more than twenty castles, churches and palaces, so you could see all of Hungary at a glance.',
          },
        },
        {
          q: { el: 'Από τι ήταν φτιαγμένο το κάστρο στην αρχή;', en: 'What was the castle first made of?' },
          options: {
            el: ['Από χρυσάφι', 'Από πάγο', 'Από γυαλί', 'Από ξύλο και χαρτόνι'],
            en: ['Gold', 'Ice', 'Glass', 'Wood and cardboard'],
          },
          correct: 3,
          explanation: {
            el: 'Επειδή θα κρατούσε μόνο έναν χρόνο, χτίστηκε από ξύλο και χαρτόνι. Μετά ξαναχτίστηκε από πέτρα και τούβλο, γιατί όλοι το αγάπησαν.',
            en: 'Because it only had to last a year, it was built of wood and cardboard. Later it was rebuilt in stone and brick, because everyone loved it.',
          },
        },
        {
          q: { el: 'Τι γίνεται η λίμνη τον χειμώνα;', en: 'What does the lake become in winter?' },
          options: {
            el: ['Πισίνα με ζεστό νερό', 'Μια τεράστια πίστα πατινάζ', 'Γήπεδο ποδοσφαίρου', 'Χιονοδρομικό κέντρο'],
            en: ['A hot-water pool', 'A huge ice rink', 'A football pitch', 'A ski slope'],
          },
          correct: 1,
          explanation: {
            el: 'Τον χειμώνα η λίμνη γίνεται μια από τις μεγαλύτερες υπαίθριες πίστες πατινάζ της Ευρώπης, ακριβώς κάτω από τους πύργους του κάστρου.',
            en: 'In winter the lake turns into one of the largest outdoor ice rinks in Europe, right below the castle towers.',
          },
        },
      ],
    },

    // ── 10. Nagyvásárcsarnok · Great Market Hall ───────────────────────────────
    {
      id: 'great-market-hall',
      name: { el: 'Μεγάλη Αγορά (Nagyvásárcsarnok)', en: 'Great Market Hall (Nagyvásárcsarnok)' },
      emoji: '🌶️',
      lat: 47.4873,
      lng: 19.0586,
      radiusM: 40,
      riddle: {
        el: 'Κάτω από μια στέγη με γυαλιστερά πλακάκια, σε ένα κτίριο που μοιάζει με σιδηροδρομικό σταθμό, κρέμονται παντού κόκκινες αρμαθιές από ένα καυτερό μπαχαρικό και η μυρωδιά τηγανητής ζύμης κατεβαίνει τις σκάλες. Απέξω, μια πράσινη γέφυρα με μπρούντζινα πουλιά πηδάει πάνω από το ποτάμι.',
        en: 'Under a roof of shiny tiles, in a building that looks like a railway station, red strings of a hot spice hang everywhere and the smell of fried dough drifts down the stairs. Outside, a green bridge with bronze birds leaps over the river.',
      },
      parentHint: {
        el: 'Είναι η Nagyvásárcsarnok (Νοτζ-βάσαρ-τσάρνοκ, η Μεγάλη Αγορά), στην πλατεία Fővám tér, δίπλα στη γέφυρα Szabadság híd. Από το πάρκο πάρτε το μετρό M1 πίσω ως τη Deák Ferenc tér και μετά το τραμ 47 ή 49 ως τη στάση Fővám tér, ακριβώς μπροστά στην αγορά (περίπου 30 λεπτά). Κλειστή τις Κυριακές.',
        en: 'It is the Nagyvásárcsarnok, the Great Market Hall, on Fővám tér, next to the Szabadság híd bridge. From the park take metro M1 back to Deák Ferenc tér and then tram 47 or 49 to the Fővám tér stop, right in front of the market (about 30 minutes). Closed on Sundays.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για ένα κόκκινο μπαχαρικό που οι Ούγγροι βάζουν σχεδόν σε όλα τα φαγητά τους. Ποιο είναι;', en: 'The riddle talks about a red spice that Hungarians put in almost every dish. Which one is it?' },
        options: {
          el: ['Η πάπρικα', 'Η κανέλα', 'Το κάρι', 'Η βανίλια'],
          en: ['Paprika', 'Cinnamon', 'Curry', 'Vanilla'],
        },
        correct: 0,
        explanation: {
          el: 'Η πάπρικα είναι σκόνη από αποξηραμένες κόκκινες πιπεριές. Οι πιπεριές ήρθαν από την Αμερική πριν από περίπου 500 χρόνια, και οι Ούγγροι τις αγάπησαν τόσο, που η πάπρικα έγινε η γεύση της χώρας τους: γλυκιά, καπνιστή ή καυτερή!',
          en: 'Paprika is a powder made from dried red peppers. The peppers came from America about 500 years ago, and Hungarians loved them so much that paprika became the taste of their country: sweet, smoky or hot!',
        },
      },
      onSite: {
        question: { el: 'Κάνε ένα βήμα πίσω και κοίταξε τη στέγη της αγοράς. Τι χρώμα έχουν τα πλακάκια της;', en: 'Step back and look at the roof of the market. What colour are its tiles?' },
        options: {
          el: ['Μόνο κόκκινα', 'Μπλε και άσπρα', 'Πράσινα και κίτρινα σε σχέδια', 'Μαύρα'],
          en: ['Only red', 'Blue and white', 'Green and yellow in patterns', 'Black'],
        },
        correct: 2,
        explanation: {
          el: 'Πράσινα και κίτρινα πλακάκια Zsolnay, από το ίδιο εργοστάσιο που έφτιαξε τη στέγη του Ναού Mátyás. Τώρα γύρνα προς το ποτάμι: η πράσινη γέφυρα Szabadság híd έχει στην κορυφή των πυλώνων της τέσσερα μπρούντζινα πουλιά Turul, σαν αυτό στο κάστρο!',
          en: 'Green and yellow Zsolnay tiles, from the same factory that made the roof of Mátyás Church. Now turn to the river: the green Szabadság híd bridge has four bronze Turul birds on top of its pillars, like the one at the castle!',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 120 χρόνια οι αγορές της Βουδαπέστης γίνονταν στους δρόμους, με τη βροχή, τη λάσπη και τις μύγες. Η πόλη αποφάσισε να χτίσει μια τεράστια σκεπαστή αγορά, και ο αρχιτέκτονας Samu Pecz (Σάμου Πετς) τη σχεδίασε με σιδερένιο σκελετό, σαν σιδηροδρομικό σταθμό, γεμάτη φως. Λίγο πριν ανοίξει, μια φωτιά κατέστρεψε τη στέγη, αλλά την επισκεύασαν γρήγορα και η αγορά άνοιξε το 1897. Τα καράβια έφερναν τα εμπορεύματα από τον Δούναβη κατευθείαν μέσα στο κτίριο, από ένα κανάλι που σήμερα έχει κλείσει. Στο ισόγειο κρέμονται αρμαθιές από κόκκινες πιπεριές και σαλάμια, και επάνω οι άνθρωποι τρώνε lángos (λάνγκος), μια τηγανητή ζύμη με σκόρδο και τυρί. Δίπλα, η πράσινη γέφυρα Szabadság híd (η Γέφυρα της Ελευθερίας) άνοιξε το 1896, και ο αυτοκράτορας Franz Joseph κάρφωσε ο ίδιος το τελευταίο, ασημένιο καρφί της.',
        en: 'More than 120 years ago, Budapest\'s markets were held in the streets, in the rain, the mud and the flies. The city decided to build an enormous covered market, and the architect Samu Pecz designed it with an iron skeleton, like a railway station, full of light. Shortly before it opened, a fire destroyed the roof, but it was quickly repaired and the market opened in 1897. Boats brought goods from the Danube straight into the building along a canal that is closed today. On the ground floor hang strings of red peppers and salamis, and upstairs people eat lángos, a fried dough with garlic and cheese. Next door, the green Szabadság híd (Liberty Bridge) opened in 1896, and Emperor Franz Joseph hammered in its last, silver rivet himself.',
      },
      didYouKnow: {
        el: 'Η πάπρικα χάρισε στην Ουγγαρία ένα βραβείο Νόμπελ: ο Albert Szent-Györgyi απομόνωσε τη βιταμίνη C χρησιμοποιώντας πιπεριές από το Szeged, επειδή περιείχαν πολύ περισσότερη από τα πορτοκάλια, και τιμήθηκε για αυτό το 1937. Η αγορά έχει τρία επίπεδα και το υπόγειό της φιλοξενούσε παλιά τα ψάρια, με πάγο από τον Δούναβη.',
        en: 'Paprika won Hungary a Nobel Prize: Albert Szent-Györgyi isolated vitamin C using peppers from Szeged, because they contained far more of it than oranges, and was honoured for it in 1937. The market has three levels, and its basement once held the fish stalls, cooled with ice from the Danube.',
      },
      quiz: [
        {
          q: { el: 'Πώς έφταναν παλιά τα εμπορεύματα μέσα στην αγορά;', en: 'How did goods once arrive inside the market?' },
          options: {
            el: ['Με αεροπλάνο', 'Με καμήλες', 'Με καράβια, από ένα κανάλι από τον Δούναβη', 'Με ελικόπτερο'],
            en: ['By aeroplane', 'By camel', 'By boat, along a canal from the Danube', 'By helicopter'],
          },
          correct: 2,
          explanation: {
            el: 'Ένα κανάλι έφερνε τα καράβια από τον Δούναβη κατευθείαν μέσα στο κτίριο. Σήμερα το κανάλι έχει κλείσει.',
            en: 'A canal brought boats from the Danube straight into the building. Today the canal is closed.',
          },
        },
        {
          q: { el: 'Τι είναι το lángos;', en: 'What is lángos?' },
          options: {
            el: ['Ένα ψάρι του Δούναβη', 'Μια τηγανητή ζύμη με σκόρδο και τυρί', 'Ένα είδος γέφυρας', 'Μια κόκκινη πιπεριά'],
            en: ['A Danube fish', 'A fried dough with garlic and cheese', 'A kind of bridge', 'A red pepper'],
          },
          correct: 1,
          explanation: {
            el: 'Το lángos είναι μια στρογγυλή τηγανητή ζύμη που οι Ούγγροι τρώνε ζεστή, με σκόρδο, ξινή κρέμα και τριμμένο τυρί.',
            en: 'Lángos is a round fried dough that Hungarians eat hot, with garlic, sour cream and grated cheese.',
          },
        },
        {
          q: { el: 'Ποιος κάρφωσε το τελευταίο, ασημένιο καρφί της πράσινης γέφυρας;', en: 'Who hammered in the last, silver rivet of the green bridge?' },
          options: {
            el: ['Ο αρχιτέκτονας Samu Pecz', 'Ο βασιλιάς Mátyás', 'Ένας ψαράς', 'Ο αυτοκράτορας Franz Joseph'],
            en: ['The architect Samu Pecz', 'King Mátyás', 'A fisherman', 'Emperor Franz Joseph'],
          },
          correct: 3,
          explanation: {
            el: 'Ο αυτοκράτορας Franz Joseph κάρφωσε ο ίδιος το τελευταίο καρφί το 1896, και στην αρχή η γέφυρα είχε το όνομά του.',
            en: 'Emperor Franz Joseph hammered in the last rivet himself in 1896, and at first the bridge carried his name.',
          },
        },
      ],
    },
  ],
};
