/**
 * WiseBot Explorer · Βιέννη / Vienna
 * ==================================
 * Ten spots in two days: the old town and the Ringstraße on foot (spots 1–8), then the
 * Prater by tram and Schönbrunn by metro (spots 9–10). Original text only, verified
 * facts, language for a child of 7–12 in Greek and English. German names stay in
 * German in both languages.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'vienna',
  name: { el: 'Βιέννη', en: 'Vienna' },
  country: { el: 'Αυστρία', en: 'Austria' },
  countryCode: 'AT',
  emoji: '🎻',
  center: { lat: 48.208, lng: 16.37 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στη Βιέννη, την πόλη των αυτοκρατόρων και των αυτοκρατειρών! Εδώ ο μικρός Mozart (Μότσαρτ) έπαιζε πιάνο στα παλάτια, τα ζευγάρια στροβιλίζονται ακόμη στο βαλς, και στα παλιά καφενεία η ζεστή σοκολάτα έρχεται με βουνά από σαντιγί. Θα ανεβούμε σε μια γιγάντια ρόδα, θα γνωρίσουμε άσπρα άλογα που χορεύουν και θα λύσουμε δέκα γρίφους. Έτοιμοι; Πάμε!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Vienna, the city of emperors and empresses! Here little Mozart played the piano in palaces, couples still spin round to the waltz, and in the old coffee houses hot chocolate comes with mountains of whipped cream. We will ride a giant wheel, meet white horses that dance and solve ten riddles. Ready? Off we go!',
  },
  route: [
    'stephansdom',
    'anker-clock',
    'hofburg-michaelerplatz',
    'mozart-statue-burggarten',
    'staatsoper',
    'karlskirche',
    'rathaus',
    'parliament',
    'prater-riesenrad',
    'schonbrunn-gardens',
  ],
  spots: [
    // ── 1. Stephansdom ─────────────────────────────────────────────────────────
    {
      id: 'stephansdom',
      name: { el: 'Stephansdom', en: 'Stephansdom' },
      emoji: '⛪',
      lat: 48.2083,
      lng: 16.3725,
      radiusM: 60,
      riddle: {
        el: 'Στην καρδιά της πόλης, μια εκκλησία φοράει στη στέγη της ένα χαλί από χιλιάδες χρωματιστά πλακάκια, και ο ψηλός μυτερός πύργος της φαίνεται από παντού. Ο δεύτερος πύργος της, όμως, δεν τελείωσε ποτέ!',
        en: 'In the heart of the city, a church wears a carpet of thousands of coloured tiles on its roof, and its tall pointed tower can be seen from everywhere. Its second tower, though, was never finished!',
      },
      parentHint: {
        el: 'Είναι ο Stephansdom (ο Καθεδρικός του Αγίου Στεφάνου) στη Stephansplatz. Ξεκινήστε από εδώ: ο σταθμός του μετρό Stephansplatz (γραμμές U1 και U3) σας βγάζει ακριβώς μπροστά στην εκκλησία.',
        en: 'It is the Stephansdom, St Stephen\'s Cathedral, on Stephansplatz. Start here: the Stephansplatz metro station (lines U1 and U3) brings you out right in front of the church.',
      },
      unlockQuestion: {
        question: { el: 'Η εκκλησία λέγεται Stephansdom, δηλαδή ναός του Αγίου Στεφάνου. Οι Βιεννέζοι φωνάζουν τον ψηλό πύργο της με ένα χαϊδευτικό όνομα, σαν παλιό φίλο. Ποιο;', en: 'The church is called Stephansdom, St Stephen\'s Cathedral. The Viennese call its tall tower by a pet name, like an old friend. Which one?' },
        options: {
          el: ['Hansi', 'Franzi', 'Steffl', 'Maxi'],
          en: ['Hansi', 'Franzi', 'Steffl', 'Maxi'],
        },
        correct: 2,
        explanation: {
          el: 'Ο πύργος λέγεται Steffl (Στεφλ), το χαϊδευτικό του Stephan, όπως λέμε «Στεφανάκης». Έχει ύψος 137 μέτρα, όσο περίπου ένα κτίριο 45 ορόφων, και για αιώνες ήταν το ψηλότερο κτίριο της πόλης.',
          en: 'The tower is called the Steffl, the pet form of Stephan, a bit like “Stevie”. It is 137 metres tall, about the height of a 45-storey building, and for centuries it was the tallest building in the city.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε κατά μήκος της δεξιάς (νότιας) πλευράς της εκκλησίας και κοίταξε ψηλά τη στέγη προς το πίσω μέρος. Ποιο πουλί βλέπεις εκεί;', en: 'Walk along the right-hand (south) side of the church and look up at the roof towards the back. Which bird can you see there?' },
        options: {
          el: ['Μια κουκουβάγια', 'Έναν αετό με στέμμα', 'Ένα περιστέρι', 'Έναν παπαγάλο'],
          en: ['An owl', 'An eagle with a crown', 'A dove', 'A parrot'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ο αετός των Αψβούργων, της οικογένειας που κυβέρνησε την Αυστρία για αιώνες. Στη μία πλευρά της στέγης έχει δύο κεφάλια και στέμμα, ενώ στην άλλη είναι ο αετός της Αυστρίας μαζί με τον θυρεό της Βιέννης. Η στέγη έχει περίπου 230.000 γυαλιστερά πλακάκια!',
          en: 'It is the eagle of the Habsburgs, the family that ruled Austria for centuries. On one side of the roof it has two heads and a crown, while on the other side you see the eagle of Austria next to the coat of arms of Vienna. The roof has about 230,000 glazed tiles!',
        },
      },
      story: {
        el: 'Ο Steffl, όπως τον λένε οι Βιεννέζοι, είναι το σύμβολο της πόλης. Οι χτίστες τελείωσαν τον ψηλό νότιο πύργο του το 1433, πριν από σχεδόν 600 χρόνια, και τον βόρειο τον ξεκίνησαν γεμάτοι όνειρα, αλλά τα χρήματα τελείωσαν και του έβαλαν ένα μικρό καπέλο στα 68 μέτρα. Αν ανέβεις τα 343 σκαλιά του ψηλού πύργου, θα δεις όλη τη Βιέννη! Στον κοντό πύργο κρέμεται η Pummerin (Πούμεριν), μια καμπάνα βαριά όσο τρεις ελέφαντες, που την πρωτοέχυσαν από παλιά κανόνια. Στο τέλος του Β΄ Παγκοσμίου Πολέμου μια φωτιά έκαψε τη στέγη, αλλά όλες οι περιοχές της Αυστρίας βοήθησαν να ξαναφτιαχτεί, κομμάτι κομμάτι. Όταν κάτι το αγαπάμε πολύ, το ξαναχτίζουμε μαζί.',
        en: 'The Steffl, as the Viennese call it, is the symbol of the city. Builders finished its tall south tower in 1433, almost 600 years ago, and started the north tower full of dreams, but the money ran out, so it got a small cap at 68 metres. Climb the 343 steps of the tall tower and you will see all of Vienna! In the short tower hangs the Pummerin, a bell as heavy as three elephants, first cast from old cannons. At the end of the Second World War a fire burned the roof, but every region of Austria helped to build it again, piece by piece. When we love something, we rebuild it together.',
      },
      didYouKnow: {
        el: 'Δίπλα στην κεντρική πύλη, το Riesentor, είναι καρφωμένες στον τοίχο δύο σιδερένιες ράβδοι: οι μεσαιωνικοί «πήχεις» της Βιέννης, με τους οποίους οι αγοραστές έλεγχαν αν ο έμπορος τους πούλησε ύφασμα με το σωστό μήκος. Στην άλλη πλευρά της πύλης είναι χαραγμένο το «O5», το μυστικό σύμβολο της αυστριακής αντίστασης στα χρόνια του πολέμου.',
        en: 'Beside the main door, the Riesentor, two iron bars are fixed to the wall: Vienna\'s medieval ells, which shoppers used to check whether a merchant had sold them cloth of the right length. On the other side of the door is carved the “O5”, the secret sign of the Austrian resistance during the war years.',
      },
      quiz: [
        {
          q: { el: 'Πώς φωνάζουν οι Βιεννέζοι τον ψηλό πύργο;', en: 'What do the Viennese call the tall tower?' },
          options: {
            el: ['Steffl', 'Pummerin', 'Riesentor', 'Wolfi'],
            en: ['Steffl', 'Pummerin', 'Riesentor', 'Wolfi'],
          },
          correct: 0,
          explanation: {
            el: 'Steffl είναι το χαϊδευτικό του Stephan. Έτσι λένε οι Βιεννέζοι τον ψηλό πύργο, και συχνά ολόκληρη την εκκλησία.',
            en: 'Steffl is the pet form of Stephan. That is what the Viennese call the tall tower, and often the whole church.',
          },
        },
        {
          q: { el: 'Γιατί ο βόρειος πύργος έμεινε κοντός;', en: 'Why did the north tower stay short?' },
          options: {
            el: ['Γιατί έπεσε σε σεισμό', 'Γιατί δεν άρεσε στον αυτοκράτορα', 'Γιατί τον χτύπησε κεραυνός', 'Γιατί τελείωσαν τα χρήματα'],
            en: ['It fell in an earthquake', 'The emperor did not like it', 'Lightning struck it', 'The money ran out'],
          },
          correct: 3,
          explanation: {
            el: 'Τα χρήματα τελείωσαν και το χτίσιμο σταμάτησε. Ο πύργος πήρε ένα μικρό καπέλο στα 68 μέτρα και έτσι έμεινε μέχρι σήμερα.',
            en: 'The money ran out and the building stopped. The tower got a small cap at 68 metres and has stayed that way ever since.',
          },
        },
        {
          q: { el: 'Από τι έχυσαν πρώτη φορά τη μεγάλη καμπάνα;', en: 'What was the great bell first cast from?' },
          options: {
            el: ['Από χρυσό', 'Από παλιά κλειδιά', 'Από κανόνια', 'Από νομίσματα'],
            en: ['Gold', 'Old keys', 'Cannons', 'Coins'],
          },
          correct: 2,
          explanation: {
            el: 'Η Pummerin χύθηκε πρώτη φορά το 1711 από κανόνια που είχε αφήσει πίσω του ένας στρατός που είχε πολιορκήσει την πόλη. Από όπλο, έγινε μουσική!',
            en: 'The Pummerin was first cast in 1711 from cannons left behind by an army that had besieged the city. From a weapon, it became music!',
          },
        },
      ],
    },

    // ── 2. Ankeruhr ────────────────────────────────────────────────────────────
    {
      id: 'anker-clock',
      name: { el: 'Ankeruhr', en: 'Ankeruhr' },
      emoji: '⏰',
      lat: 48.2114,
      lng: 16.3734,
      radiusM: 60,
      riddle: {
        el: 'Ένα ρολόι κρέμεται σαν γέφυρα ανάμεσα σε δύο κτίρια, και αντί για δείκτες έχει ανθρώπους: κάθε ώρα περνάει αργά αργά ένας αυτοκράτορας, ένας ιππότης ή ένας μουσικός. Όταν ο ήλιος είναι ψηλά, το μεσημέρι, βγαίνουν όλοι μαζί με μουσική!',
        en: 'A clock hangs like a bridge between two buildings, and instead of hands it has people: every hour an emperor, a knight or a musician glides slowly across. When the sun is highest, at midday, they all come out together with music!',
      },
      parentHint: {
        el: 'Είναι η Ankeruhr (Άνκερουρ, το ρολόι Anker) στην πλατεία Hoher Markt. Από τη Stephansplatz περπατήστε 5 λεπτά βόρεια κατά μήκος της Rotenturmstraße και στρίψτε αριστερά στη Lichtensteg· το ρολόι είναι στην ανατολική άκρη της πλατείας.',
        en: 'It is the Ankeruhr, the Anker clock, on the square Hoher Markt. From Stephansplatz walk 5 minutes north along Rotenturmstraße and turn left into Lichtensteg; the clock is at the eastern end of the square.',
      },
      unlockQuestion: {
        question: { el: 'Αν κάθε ώρα στο καντράν ενός ρολογιού (από τη 1 ως τις 12) έχει τη δική της φιγούρα, πόσες φιγούρες έχει το ρολόι συνολικά;', en: 'If every hour on a clock face (from 1 to 12) has its own figure, how many figures does the clock have in all?' },
        options: {
          el: ['Τέσσερις', 'Έξι', 'Εικοσιτέσσερις', 'Δώδεκα'],
          en: ['Four', 'Six', 'Twenty-four', 'Twelve'],
        },
        correct: 3,
        explanation: {
          el: 'Δώδεκα, όσες και οι ώρες στο καντράν ενός ρολογιού. Κάθε φιγούρα χρειάζεται μία ολόκληρη ώρα για να περάσει από τη μία άκρη στην άλλη. Ο Ρωμαίος αυτοκράτορας Marcus Aurelius ανοίγει τη μέρα στη μία, και ο μουσικός Joseph Haydn την κλείνει στις δώδεκα.',
          en: 'Twelve, as many as the hours on a clock face. Each figure needs a whole hour to travel from one end to the other. The Roman emperor Marcus Aurelius opens the day at one o\'clock, and the composer Joseph Haydn closes it at twelve.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε το ρολόι από κοντά. Πώς είναι γραμμένες οι ώρες πάνω από τη φιγούρα;', en: 'Look closely at the clock. How are the hours written above the figure?' },
        options: {
          el: ['Με ρωμαϊκούς αριθμούς, όπως I, V και X', 'Με ελληνικά γράμματα', 'Με ζωγραφιές ζώων', 'Με ολόκληρες λέξεις'],
          en: ['With Roman numerals, like I, V and X', 'With Greek letters', 'With pictures of animals', 'With whole words'],
        },
        correct: 0,
        explanation: {
          el: 'Οι ώρες είναι με ρωμαϊκούς αριθμούς, όπως στα παλιά ρολόγια, και τα λεπτά με κανονικούς αριθμούς στη σκάλα που διασχίζει η φιγούρα. Κάτω από κάθε φιγούρα γράφει το όνομά της, για να ξέρεις ποιον βλέπεις.',
          en: 'The hours are in Roman numerals, like on old clocks, and the minutes in ordinary numbers on the scale the figure crosses. Under each figure its name is written, so you know who you are looking at.',
        },
      },
      story: {
        el: 'Η Hoher Markt (Χόερ Μαρκτ, «Ψηλή Αγορά») είναι η πιο παλιά πλατεία της Βιέννης. Πριν από 2.000 χρόνια εδώ ήταν το στρατόπεδο των Ρωμαίων, που λεγόταν Vindobona (Βιντομπόνα), και τα σπίτια των αξιωματικών βρίσκονται ακόμη κάτω από τα πόδια σου, σε ένα μικρό μουσείο. Το ρολόι το έφτιαξε ο ζωγράφος Franz Matsch το 1914 για μια ασφαλιστική εταιρεία, την Anker, που είχε τα γραφεία της στα δύο κτίρια. Δώδεκα φιγούρες από την ιστορία της πόλης περνούν με τη σειρά: ο Ρωμαίος αυτοκράτορας Marcus Aurelius, ο Καρλομάγνος, η αυτοκράτειρα Maria Theresia, ο μουσικός Joseph Haydn. Στις δώδεκα το μεσημέρι παρελαύνουν όλες μαζί, και το ρολόι παίζει μουσική από την εποχή της κάθε μιας. Ένα ρολόι που, αντί να μετράει μόνο την ώρα, διηγείται 2.000 χρόνια ιστορίας!',
        en: 'Hoher Markt, the “High Market”, is the oldest square in Vienna. Two thousand years ago it was part of a Roman army camp called Vindobona, and the houses of the officers still lie beneath your feet, in a small museum. The clock was made in 1914 by the painter Franz Matsch for an insurance company, Anker, whose offices were in the two buildings. Twelve figures from the story of the city take turns: the Roman emperor Marcus Aurelius, Charlemagne, Empress Maria Theresia, the composer Joseph Haydn. At twelve noon they all parade together, and the clock plays music from each figure\'s own time. A clock that does not just tell the time, but tells 2,000 years of history!',
      },
      didYouKnow: {
        el: 'Την περίοδο των Χριστουγέννων το ρολόι παίζει το μεσημέρι κάλαντα αντί για την κανονική του μουσική. Ο Marcus Aurelius, η πρώτη φιγούρα, πέθανε σύμφωνα με πολλούς ιστορικούς ακριβώς εδώ, στη Vindobona, το 180 μ.Χ.',
        en: 'In the Christmas season the clock plays carols at noon instead of its usual tunes. Marcus Aurelius, the first figure, is believed by many historians to have died right here in Vindobona, in the year 180.',
      },
      quiz: [
        {
          q: { el: 'Πώς λεγόταν η Βιέννη όταν ήταν ρωμαϊκό στρατόπεδο;', en: 'What was Vienna called when it was a Roman army camp?' },
          options: {
            el: ['Λουτέτια', 'Vindobona', 'Ολίσιπο', 'Λοντίνιουμ'],
            en: ['Lutetia', 'Vindobona', 'Olisipo', 'Londinium'],
          },
          correct: 1,
          explanation: {
            el: 'Vindobona ήταν το όνομα του ρωμαϊκού στρατοπέδου. Τα άλλα είναι τα ρωμαϊκά ονόματα του Παρισιού, της Λισαβόνας και του Λονδίνου.',
            en: 'Vindobona was the name of the Roman camp. The others are the Roman names of Paris, Lisbon and London.',
          },
        },
        {
          q: { el: 'Τι ώρα παρελαύνουν όλες οι φιγούρες μαζί;', en: 'At what time do all the figures parade together?' },
          options: {
            el: ['Στις 7 το πρωί', 'Τα μεσάνυχτα', 'Στις 12 το μεσημέρι', 'Στις 6 το απόγευμα'],
            en: ['At 7 in the morning', 'At midnight', 'At 12 noon', 'At 6 in the evening'],
          },
          correct: 2,
          explanation: {
            el: 'Στις δώδεκα το μεσημέρι βγαίνουν και οι δώδεκα φιγούρες με τη σειρά, με μουσική. Αν είστε κοντά, αξίζει να περιμένετε!',
            en: 'At twelve noon all twelve figures come out one after another, with music. If you are nearby, it is worth the wait!',
          },
        },
        {
          q: { el: 'Ποιος έφτιαξε το ρολόι;', en: 'Who made the clock?' },
          options: {
            el: ['Ο ζωγράφος Franz Matsch', 'Ο Mozart', 'Ένας Ρωμαίος στρατιώτης', 'Ο Καρλομάγνος'],
            en: ['The painter Franz Matsch', 'Mozart', 'A Roman soldier', 'Charlemagne'],
          },
          correct: 0,
          explanation: {
            el: 'Ο ζωγράφος Franz Matsch σχεδίασε το ρολόι το 1914 για την εταιρεία Anker. Ήταν ζωγράφος, αλλά έφτιαξε ένα ρολόι που έγινε πιο διάσημο από τους πίνακές του!',
            en: 'The painter Franz Matsch designed the clock in 1914 for the Anker company. He was a painter, but he made a clock that became more famous than his paintings!',
          },
        },
      ],
    },

    // ── 3. Hofburg · Michaelerplatz ────────────────────────────────────────────
    {
      id: 'hofburg-michaelerplatz',
      name: { el: 'Hofburg', en: 'Hofburg' },
      emoji: '👑',
      lat: 48.2079,
      lng: 16.3670,
      radiusM: 60,
      riddle: {
        el: 'Μια οικογένεια αυτοκρατόρων έμεινε σε αυτό το παλάτι για περισσότερα από 600 χρόνια, και τα δωμάτιά του είναι τόσα, που δεν θα τα μετρούσες ούτε σε μια μέρα. Μπροστά στην πύλη του με τον πράσινο τρούλο περιμένουν άμαξες με άλογα, ενώ μέσα άσπρα άλογα χορεύουν με μουσική.',
        en: 'A family of emperors lived in this palace for more than 600 years, and it has so many rooms that you could not count them in a day. In front of its gate with the green dome, horse carriages wait, while inside white horses dance to music.',
      },
      parentHint: {
        el: 'Είναι το Hofburg (Χόφμπουργκ, το χειμερινό παλάτι των Αψβούργων) στη Michaelerplatz. Από τη Hoher Markt περπατήστε 10 λεπτά: Tuchlauben, μετά ο πεζόδρομος Graben και ο Kohlmarkt, που βγάζει ίσια στην πύλη με τον πράσινο τρούλο.',
        en: 'It is the Hofburg, the winter palace of the Habsburgs, on Michaelerplatz. From Hoher Markt walk 10 minutes: along Tuchlauben, then the pedestrian Graben and Kohlmarkt, which leads straight to the gate with the green dome.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι άσπρα άλογα χορεύουν με μουσική. Πώς λέγονται τα διάσημα άσπρα άλογα της Βιέννης;', en: 'The riddle says white horses dance to music. What are the famous white horses of Vienna called?' },
        options: {
          el: ['Lipizzaner', 'Πόνι', 'Μουστάνγκ', 'Μονόκεροι'],
          en: ['Lipizzaner', 'Ponies', 'Mustangs', 'Unicorns'],
        },
        correct: 0,
        explanation: {
          el: 'Τα Lipizzaner (Λιπιτσάνερ) εκπαιδεύονται για χρόνια στην Ισπανική Σχολή Ιππασίας, μέσα στο παλάτι, μέχρι να μάθουν να χοροπηδούν και να στριφογυρίζουν στον ρυθμό. Το μυστικό τους: γεννιούνται σκούρα, σχεδόν μαύρα, και ασπρίζουν καθώς μεγαλώνουν!',
          en: 'The Lipizzaner horses train for years at the Spanish Riding School, inside the palace, until they learn to leap and turn in rhythm. Their secret: they are born dark, almost black, and turn white as they grow up!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε στη μέση της πλατείας, μέσα στα κάγκελα. Τι υπάρχει εκεί, πιο χαμηλά από τον δρόμο;', en: 'Look at the middle of the square, inside the railings. What is there, lower than the street?' },
        options: {
          el: ['Ένα σιντριβάνι', 'Μια παιδική χαρά', 'Παλιοί πέτρινοι τοίχοι από τα ρωμαϊκά χρόνια', 'Μια πισίνα'],
          en: ['A fountain', 'A playground', 'Old stone walls from Roman times', 'A swimming pool'],
        },
        correct: 2,
        explanation: {
          el: 'Πριν από 35 περίπου χρόνια οι εργάτες έσκαψαν την πλατεία για να τη φτιάξουν και βρήκαν τοίχους σπιτιών από τη ρωμαϊκή εποχή. Οι αρχαιολόγοι τους άφησαν ανοιχτούς, για να τους βλέπουν όλοι. Κοίτα και τα δύο σιντριβάνια στους τοίχους του παλατιού: το ένα δείχνει τη δύναμη στη θάλασσα και το άλλο τη δύναμη στη στεριά.',
          en: 'About 35 years ago workers dug up the square to rebuild it and found walls of houses from Roman times. The archaeologists left them open for everyone to see. Look at the two fountains on the palace walls too: one shows power at sea and the other power on land.',
        },
      },
      story: {
        el: 'Το Hofburg δεν είναι ένα παλάτι, αλλά πολλά παλάτια ενωμένα: κάθε αυτοκράτορας πρόσθετε μια πτέρυγα, και έτσι, μετά από 600 και πλέον χρόνια, έφτασε να έχει περίπου 2.600 δωμάτια! Εδώ περνούσαν τον χειμώνα οι Habsburger (Αψβούργοι), η οικογένεια που κυβέρνησε την Αυστρία μέχρι το 1918. Η πιο γνωστή κάτοικος ήταν η αυτοκράτειρα Elisabeth, η Sisi (Σίσι), που αγαπούσε τα άλογα, τους μεγάλους περιπάτους και τα ποιήματα, και βαριόταν τους αυστηρούς κανόνες της αυλής. Σε μια αίθουσα με πολυελαίους, τα άσπρα άλογα Lipizzaner κάνουν ακόμη τα άλματα και τις στροφές τους, όπως εδώ και εκατοντάδες χρόνια. Η πύλη με τον πράσινο τρούλο τελείωσε μόλις το 1893, και σήμερα στο παλάτι έχει το γραφείο του ο Πρόεδρος της Αυστρίας. Οι άμαξες με τα άλογα, οι Fiaker (Φιάκερ), περιμένουν στην πλατεία για βόλτα, όπως στα χρόνια της Σίσι.',
        en: 'The Hofburg is not one palace but many joined together: each emperor added a wing, and after more than 600 years it ended up with about 2,600 rooms! This is where the Habsburgs, the family that ruled Austria until 1918, spent their winters. Its most famous resident was Empress Elisabeth, known as Sisi, who loved horses, long walks and poems, and found the strict rules of the court rather boring. In a hall with chandeliers, the white Lipizzaner horses still perform their leaps and turns, as they have for hundreds of years. The gate with the green dome was only finished in 1893, and today the President of Austria has his office in the palace. Horse carriages, the Fiaker, wait on the square for a ride, just as in Sisi\'s day.',
      },
      didYouKnow: {
        el: 'Απέναντι από την πύλη στέκεται το Looshaus του 1910, ένα κτίριο με τόσο απλή πρόσοψη, που οι Βιεννέζοι το είπαν «σπίτι χωρίς φρύδια», γιατί τα παράθυρά του δεν είχαν στολίδια. Λέγεται ότι ο αυτοκράτορας Franz Joseph ενοχλήθηκε τόσο, που απέφευγε να βγαίνει από αυτή την πύλη για να μην το βλέπει.',
        en: 'Across from the gate stands the Looshaus of 1910, a building with a facade so plain that the Viennese called it “the house without eyebrows”, because its windows had no decoration. It is said that Emperor Franz Joseph was so annoyed that he avoided leaving through this gate so as not to see it.',
      },
      quiz: [
        {
          q: { el: 'Περίπου πόσα δωμάτια έχει το παλάτι;', en: 'About how many rooms does the palace have?' },
          options: {
            el: ['26', '260', '10', 'Περίπου 2.600'],
            en: ['26', '260', '10', 'About 2,600'],
          },
          correct: 3,
          explanation: {
            el: 'Περίπου 2.600 δωμάτια, γιατί κάθε αυτοκράτορας πρόσθετε καινούργιες πτέρυγες. Θα ήθελες να ψάχνεις το δωμάτιό σου εκεί μέσα;',
            en: 'About 2,600 rooms, because every emperor added new wings. Would you like to look for your bedroom in there?',
          },
        },
        {
          q: { el: 'Ποια αυτοκράτειρα, που λατρεύουν οι Βιεννέζοι, έμενε εδώ και αγαπούσε τα άλογα και τα ποιήματα;', en: 'Which empress, adored by the Viennese, lived here and loved horses and poems?' },
          options: {
            el: ['Η Κλεοπάτρα', 'Η Ελισάβετ της Αγγλίας', 'Η Sisi', 'Η Χιονάτη'],
            en: ['Cleopatra', 'Elizabeth of England', 'Sisi', 'Snow White'],
          },
          correct: 2,
          explanation: {
            el: 'Η αυτοκράτειρα Elisabeth, η Sisi, έμενε εδώ τον χειμώνα. Ήταν πολύ καλή αναβάτρια και έγραφε ποιήματα, αλλά τους κανόνες της αυλής τους έβρισκε βαρετούς.',
            en: 'Empress Elisabeth, Sisi, lived here in winter. She was an excellent rider and wrote poems, but she found the rules of the court boring.',
          },
        },
        {
          q: { el: 'Ποιος έχει σήμερα το γραφείο του στο παλάτι;', en: 'Whose office is in the palace today?' },
          options: {
            el: ['Του βασιλιά', 'Του Προέδρου της Αυστρίας', 'Κανενός, είναι άδειο', 'Του Mozart'],
            en: ['The king\'s', 'The President of Austria\'s', 'Nobody\'s, it is empty', 'Mozart\'s'],
          },
          correct: 1,
          explanation: {
            el: 'Η Αυστρία δεν έχει πια αυτοκράτορα. Ο Πρόεδρος της χώρας έχει το γραφείο του στο παλάτι, ενώ πολλά δωμάτια είναι μουσεία που μπορείς να επισκεφτείς.',
            en: 'Austria no longer has an emperor. The President of the country has his office in the palace, while many rooms are museums you can visit.',
          },
        },
      ],
    },

    // ── 4. Mozart statue · Burggarten ──────────────────────────────────────────
    {
      id: 'mozart-statue-burggarten',
      name: { el: 'Άγαλμα του Mozart', en: 'Mozart Statue' },
      emoji: '🎼',
      lat: 48.2046,
      lng: 16.3662,
      radiusM: 40,
      riddle: {
        el: 'Σε έναν κήπο πίσω από το παλάτι στέκεται ένας μαρμάρινος άντρας που κάποτε ήταν παιδί-θαύμα: έγραψε την πρώτη του μουσική στα πέντε του χρόνια, πριν καν μάθει να γράφει καλά καλά γράμματα. Λίγο πιο πέρα, μέσα σε ένα σπίτι από γυαλί, πετούν πεταλούδες όλο τον χρόνο.',
        en: 'In a garden behind the palace stands a marble man who was once a wonder-child: he wrote his first music at the age of five, before he could even write letters properly. A little further on, butterflies fly all year round inside a house made of glass.',
      },
      parentHint: {
        el: 'Είναι το άγαλμα του Mozart στον Burggarten (Μπούργκαρτεν, τον κήπο του παλατιού). Από τη Michaelerplatz περάστε μέσα από τις αυλές του Hofburg και τη Heldenplatz, βγείτε στο Burgring και μπείτε στον κήπο από την πύλη του Ring: το άγαλμα είναι αμέσως μέσα (περίπου 10 λεπτά).',
        en: 'It is the Mozart statue in the Burggarten, the palace garden. From Michaelerplatz walk through the Hofburg courtyards and Heldenplatz, come out onto the Burgring and enter the garden through the gate on the Ring: the statue is right inside (about 10 minutes).',
      },
      unlockQuestion: {
        question: { el: 'Πόσων χρονών ήταν το παιδί του γρίφου όταν έγραψε την πρώτη του μουσική;', en: 'How old was the child in the riddle when he wrote his first music?' },
        options: {
          el: ['Πέντε', 'Δεκαπέντε', 'Είκοσι', 'Σαράντα'],
          en: ['Five', 'Fifteen', 'Twenty', 'Forty'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Wolfgang Amadeus Mozart (Μότσαρτ) έγραψε τα πρώτα του μικρά κομμάτια στα πέντε του, και ο μπαμπάς του τα σημείωνε σε ένα τετράδιο. Στα έξι έπαιζε ήδη μπροστά σε βασιλιάδες και αυτοκράτειρες.',
          en: 'Wolfgang Amadeus Mozart wrote his first little pieces at the age of five, and his father wrote them down in a notebook. By six he was already playing for kings and empresses.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε το παρτέρι με τα λουλούδια μπροστά στο άγαλμα. Τι σχήμα κάνουν τα λουλούδια;', en: 'Look at the flower bed in front of the statue. What shape do the flowers make?' },
        options: {
          el: ['Μια καρδιά', 'Ένα κλειδί του σολ, το σημάδι της μουσικής', 'Ένα αστέρι', 'Ένα βιολί'],
          en: ['A heart', 'A treble clef, the sign of music', 'A star', 'A violin'],
        },
        correct: 1,
        explanation: {
          el: 'Οι κηπουροί φυτεύουν κάθε χρόνο ένα κλειδί του σολ από λουλούδια, το σημάδι που μπαίνει στην αρχή κάθε παρτιτούρας. Είναι το πιο φωτογραφημένο παρτέρι της Βιέννης!',
          en: 'Every year the gardeners plant a treble clef made of flowers, the sign that opens every sheet of music. It is the most photographed flower bed in Vienna!',
        },
      },
      story: {
        el: 'Ο Wolfgang Amadeus Mozart γεννήθηκε το 1756 στο Salzburg (Σάλτσμπουργκ) και ήταν παιδί-θαύμα: στα τέσσερα έπαιζε πιάνο, στα πέντε έγραφε μουσική και στα έξι γύριζε την Ευρώπη με τον μπαμπά και την αδερφή του, παίζοντας για βασιλιάδες και αυτοκράτειρες. Στα 25 του ήρθε να ζήσει στη Βιέννη, όπου έγραψε τις πιο διάσημες όπερές του, όπως τον Μαγικό Αυλό. Έζησε μόνο 35 χρόνια, αλλά πρόλαβε να γράψει περισσότερα από 600 έργα! Το άγαλμά του φτιάχτηκε το 1896 και μεταφέρθηκε σε αυτόν τον κήπο μετά τον πόλεμο, το 1953. Δίπλα, το γυάλινο Palmenhaus (Πάλμενχαους) ήταν το θερμοκήπιο του αυτοκράτορα, και σήμερα μέσα του ζουν εκατοντάδες πεταλούδες. Το ταλέντο είναι δώρο, αλλά ο Mozart έκανε και εξάσκηση κάθε μέρα!',
        en: 'Wolfgang Amadeus Mozart was born in Salzburg in 1756 and was a wonder-child: at four he played the piano, at five he wrote music, and at six he was touring Europe with his father and sister, playing for kings and empresses. At 25 he moved to Vienna, where he wrote his most famous operas, such as The Magic Flute. He lived only 35 years, but he still managed to write more than 600 pieces! His statue was made in 1896 and moved to this garden after the war, in 1953. Next door, the glass Palmenhaus was the emperor\'s greenhouse, and today hundreds of butterflies live inside it. Talent is a gift, but Mozart also practised every single day!',
      },
      didYouKnow: {
        el: 'Το άγαλμα, έργο του γλύπτη Viktor Tilgner, στεκόταν αρχικά στην Albertinaplatz. Χτυπήθηκε από βόμβα το 1945, επισκευάστηκε και το 1953 βρήκε τη σημερινή του θέση. Το σπίτι όπου ο Mozart έγραψε τους «Γάμους του Φίγκαρο», στην Domgasse 5 πίσω από τον Stephansdom, είναι σήμερα μουσείο.',
        en: 'The statue, by the sculptor Viktor Tilgner, originally stood on Albertinaplatz. It was damaged by a bomb in 1945, repaired and given its present place in 1953. The house where Mozart wrote The Marriage of Figaro, at Domgasse 5 behind the Stephansdom, is now a museum.',
      },
      quiz: [
        {
          q: { el: 'Σε ποια πόλη γεννήθηκε ο Mozart;', en: 'In which city was Mozart born?' },
          options: {
            el: ['Στη Βιέννη', 'Στο Παρίσι', 'Στο Salzburg', 'Στην Αθήνα'],
            en: ['Vienna', 'Paris', 'Salzburg', 'Athens'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Mozart γεννήθηκε στο Salzburg, μια πόλη ανάμεσα στα βουνά της Αυστρίας, και ήρθε να ζήσει στη Βιέννη στα 25 του.',
            en: 'Mozart was born in Salzburg, a town among the mountains of Austria, and moved to Vienna at 25.',
          },
        },
        {
          q: { el: 'Πόσα έργα περίπου έγραψε ο Mozart στη σύντομη ζωή του;', en: 'About how many pieces did Mozart write in his short life?' },
          options: {
            el: ['Έξι', 'Εξήντα', 'Δεκαέξι', 'Περισσότερα από 600'],
            en: ['Six', 'Sixty', 'Sixteen', 'More than 600'],
          },
          correct: 3,
          explanation: {
            el: 'Περισσότερα από 600 έργα σε μόλις 35 χρόνια ζωής: συμφωνίες, όπερες, κοντσέρτα και μικρά κομμάτια για πιάνο.',
            en: 'More than 600 pieces in just 35 years of life: symphonies, operas, concertos and little piano pieces.',
          },
        },
        {
          q: { el: 'Τι ζει σήμερα μέσα στο γυάλινο Palmenhaus;', en: 'What lives inside the glass Palmenhaus today?' },
          options: {
            el: ['Πεταλούδες', 'Πιγκουίνοι', 'Άλογα', 'Δελφίνια'],
            en: ['Butterflies', 'Penguins', 'Horses', 'Dolphins'],
          },
          correct: 0,
          explanation: {
            el: 'Εκατοντάδες τροπικές πεταλούδες πετούν ελεύθερες μέσα στο ζεστό γυάλινο σπίτι, όλο τον χρόνο, ακόμη και όταν έξω χιονίζει.',
            en: 'Hundreds of tropical butterflies fly free inside the warm glass house all year round, even when it is snowing outside.',
          },
        },
      ],
    },

    // ── 5. Staatsoper ──────────────────────────────────────────────────────────
    {
      id: 'staatsoper',
      name: { el: 'Staatsoper', en: 'Staatsoper' },
      emoji: '🎭',
      lat: 48.2033,
      lng: 16.3686,
      radiusM: 40,
      riddle: {
        el: 'Σε αυτό το μεγαλόπρεπο κτίριο στον μεγάλο κυκλικό δρόμο κανείς δεν μιλάει: όλοι τραγουδούν! Πάνω από τα τόξα της εισόδου στέκονται μπρούντζινες φιγούρες, και στη στέγη δύο άλογα με φτερά είναι έτοιμα να πετάξουν.',
        en: 'In this grand building on the great ring road nobody speaks: everybody sings! Bronze figures stand above the arches of the entrance, and on the roof two horses with wings are ready to fly.',
      },
      parentHint: {
        el: 'Είναι η Wiener Staatsoper (η Κρατική Όπερα της Βιέννης). Από τον Burggarten βγείτε στο Opernring και περπατήστε 3 λεπτά ανατολικά· η μεγάλη πρόσοψη με τα τόξα κοιτάζει τον Ring.',
        en: 'It is the Wiener Staatsoper, the Vienna State Opera. From the Burggarten come out onto the Opernring and walk 3 minutes east; the big arched front faces the Ring.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι εδώ όλοι τραγουδούν. Πώς λέγεται μια παράσταση όπου οι ηθοποιοί λένε ολόκληρη την ιστορία τραγουδώντας, με ορχήστρα;', en: 'The riddle says everybody sings here. What do we call a show where the actors tell the whole story by singing, with an orchestra?' },
        options: {
          el: ['Τσίρκο', 'Κουκλοθέατρο', 'Ταινία', 'Όπερα'],
          en: ['A circus', 'A puppet show', 'A film', 'An opera'],
        },
        correct: 3,
        explanation: {
          el: 'Στην όπερα οι ηθοποιοί είναι τραγουδιστές και τραγουδούν όλα τα λόγια, ενώ η ορχήστρα παίζει σε ένα βαθούλωμα μπροστά στη σκηνή. Η όπερα γεννήθηκε στην Ιταλία πριν από περίπου 400 χρόνια, και ο Mozart έγραψε μερικές από τις πιο αγαπημένες.',
          en: 'In an opera the actors are singers and they sing every word, while the orchestra plays in a pit in front of the stage. Opera was born in Italy about 400 years ago, and Mozart wrote some of the best-loved ones.',
        },
      },
      onSite: {
        question: { el: 'Στάσου απέναντι από την είσοδο και μέτρησε τα τόξα του μεγάλου μπαλκονιού πάνω από τις πόρτες. Πόσα είναι;', en: 'Stand facing the entrance and count the arches of the big balcony above the doors. How many are there?' },
        options: {
          el: ['Δύο', 'Τρία', 'Τέσσερα', 'Πέντε'],
          en: ['Two', 'Three', 'Four', 'Five'],
        },
        correct: 3,
        explanation: {
          el: 'Πέντε τόξα, και μπροστά τους πέντε μπρούντζινες φιγούρες: ο Ηρωισμός, το Δράμα, η Φαντασία, η Κωμωδία και η Αγάπη, όλα όσα χρειάζεται μια όπερα. Πιο ψηλά, στη στέγη, δύο φτερωτά άλογα, οι Πήγασοι, φυλάνε το θέατρο.',
          en: 'Five arches, with five bronze figures in front of them: Heroism, Drama, Imagination, Comedy and Love, everything an opera needs. Higher up, on the roof, two winged horses, the Pegasi, guard the theatre.',
        },
      },
      story: {
        el: 'Η Όπερα άνοιξε τις πόρτες της το 1869 με ένα έργο του Mozart, τον Don Giovanni. Ήταν το πρώτο μεγάλο κτίριο στη Ringstraße (Ρίνγκστρασε), τον φαρδύ δρόμο που έγινε εκεί όπου παλιά στέκονταν τα τείχη της πόλης. Στην αρχή στους Βιεννέζους δεν άρεσε καθόλου και την κορόιδευαν, αλλά σιγά σιγά την αγάπησαν. Στο τέλος του Β΄ Παγκοσμίου Πολέμου μια βόμβα κατέστρεψε τη σκηνή και την αίθουσα, και οι Βιεννέζοι δούλεψαν δέκα χρόνια για να την ξαναχτίσουν· άνοιξε ξανά το 1955. Σήμερα δίνει περίπου 350 παραστάσεις τον χρόνο, σχεδόν κάθε βράδυ! Μια φορά τον χρόνο βγάζουν τα καθίσματα, και η αίθουσα γίνεται μια τεράστια πίστα χορού για τον Χορό της Όπερας. Την άνοιξη και τον Σεπτέμβριο μια μεγάλη οθόνη έξω δείχνει τις παραστάσεις δωρεάν σε όλους.',
        en: 'The Opera opened in 1869 with a work by Mozart, Don Giovanni. It was the first big building on the Ringstraße, the wide road built where the old city walls once stood. At first the Viennese did not like it at all and made fun of it, but little by little they grew to love it. At the end of the Second World War a bomb destroyed the stage and the hall, and the Viennese worked for ten years to build it again; it reopened in 1955. Today it gives about 350 performances a year, almost every evening! Once a year the seats are taken out and the hall becomes a giant dance floor for the Opera Ball. In spring and in September a big screen outside shows the performances to everyone for free.',
      },
      didYouKnow: {
        el: 'Κάθε βράδυ η Όπερα πουλάει εκατοντάδες εισιτήρια ορθίων για όσο κοστίζει μια πίτσα, και γι\' αυτό έξω από την είσοδο σχηματίζεται ουρά ώρες πριν. Η επανέναρξη του 1955 με τον Fidelio του Beethoven μεταδόθηκε από την τηλεόραση και έγινε σύμβολο της νέας, ελεύθερης Αυστρίας, λίγους μόνο μήνες μετά την αποχώρηση των ξένων στρατών.',
        en: 'Every evening the Opera sells hundreds of standing tickets for the price of a pizza, which is why a queue forms outside hours before. The reopening of 1955 with Beethoven\'s Fidelio was broadcast on television and became a symbol of the new, free Austria, only months after foreign troops had left the country.',
      },
      quiz: [
        {
          q: { el: 'Με ποιανού έργο άνοιξε η Όπερα το 1869;', en: 'Whose work opened the Opera in 1869?' },
          options: {
            el: ['Του Mozart', 'Του Beethoven', 'Του Strauss', 'Του Haydn'],
            en: ['Mozart\'s', 'Beethoven\'s', 'Strauss\'s', 'Haydn\'s'],
          },
          correct: 0,
          explanation: {
            el: 'Η πρώτη παράσταση ήταν ο Don Giovanni του Mozart, μια όπερα που είχε γραφτεί σχεδόν εκατό χρόνια νωρίτερα.',
            en: 'The first performance was Mozart\'s Don Giovanni, an opera written almost a hundred years earlier.',
          },
        },
        {
          q: { el: 'Τι γίνεται στην αίθουσα μια φορά τον χρόνο;', en: 'What happens in the hall once a year?' },
          options: {
            el: ['Γίνεται πισίνα', 'Γίνεται παγοδρόμιο', 'Βγαίνουν τα καθίσματα και γίνεται πίστα χορού', 'Γίνεται γήπεδο'],
            en: ['It becomes a swimming pool', 'It becomes an ice rink', 'The seats come out and it becomes a dance floor', 'It becomes a football pitch'],
          },
          correct: 2,
          explanation: {
            el: 'Για τον Χορό της Όπερας βγάζουν όλα τα καθίσματα, και η αίθουσα γίνεται πίστα όπου χιλιάδες άνθρωποι χορεύουν βαλς.',
            en: 'For the Opera Ball all the seats are removed, and the hall becomes a dance floor where thousands of people waltz.',
          },
        },
        {
          q: { el: 'Πότε άνοιξε ξανά η Όπερα μετά τον πόλεμο;', en: 'When did the Opera reopen after the war?' },
          options: {
            el: ['Το 1869', 'Το 2000', 'Το 1945', 'Το 1955'],
            en: ['In 1869', 'In 2000', 'In 1945', 'In 1955'],
          },
          correct: 3,
          explanation: {
            el: 'Χρειάστηκαν δέκα χρόνια δουλειάς, και το 1955 η Όπερα άνοιξε ξανά με μεγάλη γιορτή.',
            en: 'It took ten years of work, and in 1955 the Opera reopened with a great celebration.',
          },
        },
      ],
    },

    // ── 6. Karlskirche ─────────────────────────────────────────────────────────
    {
      id: 'karlskirche',
      name: { el: 'Karlskirche', en: 'Karlskirche' },
      emoji: '🏛️',
      lat: 48.1988,
      lng: 16.3716,
      radiusM: 40,
      riddle: {
        el: 'Όταν μια φοβερή αρρώστια χτύπησε την πόλη, ένας αυτοκράτορας έδωσε μια υπόσχεση, και αυτό είναι το αποτέλεσμά της: μια εκκλησία που φοράει στρογγυλό πράσινο καπέλο και καθρεφτίζεται σε μια λιμνούλα μπροστά της.',
        en: 'When a terrible sickness struck the city, an emperor made a promise, and this is what came of it: a church wearing a round green hat that admires itself in a pond out front.',
      },
      parentHint: {
        el: 'Είναι η Karlskirche (η εκκλησία του Αγίου Καρόλου) στην Karlsplatz. Από την Όπερα περπατήστε 8 λεπτά νότια κατά μήκος της Operngasse και περάστε το πάρκο της Karlsplatz· η λιμνούλα είναι μπροστά στην εκκλησία.',
        en: 'It is the Karlskirche, St Charles\'s Church, on Karlsplatz. From the Opera walk 8 minutes south along Operngasse and cross the Karlsplatz park; the pond is in front of the church.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί χτίστηκε αυτή η εκκλησία, σύμφωνα με τον γρίφο;', en: 'According to the riddle, why was this church built?' },
        options: {
          el: ['Για τον γάμο του αυτοκράτορα', 'Η υπόσχεση ενός αυτοκράτορα σε καιρό αρρώστιας', 'Για μια νίκη σε πόλεμο', 'Για να έχει η πόλη ρολόι'],
          en: ['For the emperor\'s wedding', 'An emperor\'s promise during a sickness', 'For a victory in war', 'So the city would have a clock'],
        },
        correct: 1,
        explanation: {
          el: 'Το 1713 η πανούκλα, μια πολύ επικίνδυνη αρρώστια, απλώθηκε στη Βιέννη. Ο αυτοκράτορας Karl VI υποσχέθηκε ότι, αν η αρρώστια περάσει, θα χτίσει μια εκκλησία για τον Άγιο Κάρολο Βορρομαίο, έναν άγιο που φρόντιζε τους αρρώστους. Και κράτησε τον λόγο του.',
          en: 'In 1713 the plague, a very dangerous sickness, spread through Vienna. Emperor Karl VI promised that if the sickness passed, he would build a church for Saint Charles Borromeo, a saint who cared for the sick. And he kept his word.',
        },
      },
      onSite: {
        question: { el: 'Μπροστά στην εκκλησία στέκονται ψηλές κολόνες σαν γιγάντιες καμινάδες, με σκαλισμένες εικόνες που τυλίγονται γύρω τους. Πόσες είναι;', en: 'In front of the church stand tall columns like giant chimneys, with carved pictures winding around them. How many are there?' },
        options: {
          el: ['Μία', 'Δύο', 'Τέσσερις', 'Έξι'],
          en: ['One', 'Two', 'Four', 'Six'],
        },
        correct: 1,
        explanation: {
          el: 'Δύο κολόνες, αντιγραμμένες από μια διάσημη κολόνα της αρχαίας Ρώμης. Οι εικόνες που ανεβαίνουν γύρω γύρω, σαν σκάλα, διηγούνται τη ζωή του Αγίου Καρόλου. Ανάμεσά τους, η είσοδος μοιάζει με αρχαίο ελληνικό ναό, με έξι κολόνες και ένα τρίγωνο από πάνω.',
          en: 'Two columns, copied from a famous column in ancient Rome. The pictures climbing round and round, like a staircase, tell the life of Saint Charles. Between them, the entrance looks like an ancient Greek temple, with six columns and a triangle on top.',
        },
      },
      story: {
        el: 'Το 1713 μια φοβερή αρρώστια, η πανούκλα, απλώθηκε στη Βιέννη. Ο αυτοκράτορας Karl VI (Κάρολος ο ΣΤ΄) υποσχέθηκε πως, όταν σταματήσει, θα χτίσει μια εκκλησία για τον Άγιο Κάρολο Βορρομαίο, που σχεδόν 150 χρόνια νωρίτερα είχε φροντίσει τους αρρώστους στο Μιλάνο. Ο αρχιτέκτονας Johann Bernhard Fischer von Erlach την σχεδίασε σαν παζλ από όλον τον κόσμο: είσοδος σαν ελληνικός ναός, κολόνες σαν της αρχαίας Ρώμης και ένας θόλος σαν της Ιταλίας. Ο ίδιος δεν πρόλαβε να τη δει τελειωμένη· την ολοκλήρωσε ο γιος του το 1737. Ο θόλος είναι ψηλός 72 μέτρα και σκεπασμένος με χαλκό, που με τα χρόνια έγινε πράσινος, όπως το Άγαλμα της Ελευθερίας. Η λιμνούλα μπροστά προστέθηκε πολύ αργότερα, για να καθρεφτίζεται μέσα της η εκκλησία. Μια υπόσχεση που κρατήθηκε στέκεται εδώ 300 χρόνια!',
        en: 'In 1713 a terrible sickness, the plague, spread through Vienna. Emperor Karl VI promised that when it ended he would build a church for Saint Charles Borromeo, who had cared for the sick in Milan almost 150 years earlier. The architect Johann Bernhard Fischer von Erlach designed it like a puzzle of pieces from around the world: an entrance like a Greek temple, columns like those of ancient Rome and a dome like the ones in Italy. He did not live to see it finished; his son completed it in 1737. The dome is 72 metres high and covered with copper, which turned green over the years, just like the Statue of Liberty. The pond in front was added much later, so the church could see its own reflection. A promise that was kept still stands here after 300 years!',
      },
      didYouKnow: {
        el: 'Μια αναμνηστική πλάκα κοντά στην εκκλησία θυμίζει τον Antonio Vivaldi, τον συνθέτη των «Τεσσάρων Εποχών»: πέθανε φτωχός στη Βιέννη το 1741 και θάφτηκε σε ένα νεκροταφείο που βρισκόταν ακριβώς εδώ δίπλα, εκεί όπου σήμερα είναι το Πολυτεχνείο. Η λιμνούλα με το γλυπτό του Henry Moore προστέθηκε το 1978.',
        en: 'A memorial plaque near the church remembers Antonio Vivaldi, the composer of The Four Seasons: he died poor in Vienna in 1741 and was buried in a cemetery that stood right next door, where the Technical University is today. The pond with the sculpture by Henry Moore was added in 1978.',
      },
      quiz: [
        {
          q: { el: 'Τι υποσχέθηκε ο αυτοκράτορας όταν η πόλη υπέφερε;', en: 'What did the emperor promise when the city was suffering?' },
          options: {
            el: ['Να χτίσει ένα κάστρο', 'Να ανοίξει ζωολογικό κήπο', 'Να χτίσει μια εκκλησία', 'Να φτιάξει ένα ρολόι'],
            en: ['To build a castle', 'To open a zoo', 'To build a church', 'To make a clock'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Karl VI υποσχέθηκε μια εκκλησία για τον Άγιο Κάρολο Βορρομαίο, και όταν η αρρώστια πέρασε, κράτησε τον λόγο του.',
            en: 'Karl VI promised a church for Saint Charles Borromeo, and when the sickness passed, he kept his word.',
          },
        },
        {
          q: { el: 'Γιατί ο θόλος είναι πράσινος;', en: 'Why is the dome green?' },
          options: {
            el: ['Γιατί είναι από χαλκό, που πρασίνισε με τα χρόνια', 'Γιατί τον έβαψαν πράσινο', 'Γιατί φύτρωσε γρασίδι επάνω του', 'Γιατί είναι από γυαλί'],
            en: ['Because it is copper, which turned green over the years', 'Because it was painted green', 'Because grass grew on it', 'Because it is made of glass'],
          },
          correct: 0,
          explanation: {
            el: 'Ο χαλκός, όταν μένει χρόνια στη βροχή και στον αέρα, αποκτά μια πράσινη κρούστα που τον προστατεύει. Το ίδιο έπαθε και το Άγαλμα της Ελευθερίας.',
            en: 'When copper spends years in the rain and air, it grows a green crust that protects it. The same thing happened to the Statue of Liberty.',
          },
        },
        {
          q: { el: 'Ποιος τελείωσε την εκκλησία;', en: 'Who finished the church?' },
          options: {
            el: ['Ο Mozart', 'Ο αυτοκράτορας μόνος του', 'Ένας Ρωμαίος αυτοκράτορας', 'Ο γιος του αρχιτέκτονα'],
            en: ['Mozart', 'The emperor himself', 'A Roman emperor', 'The architect\'s son'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Fischer von Erlach πέθανε πριν τελειώσει η εκκλησία, και ο γιος του, Joseph Emanuel, την ολοκλήρωσε το 1737.',
            en: 'Fischer von Erlach died before the church was finished, and his son, Joseph Emanuel, completed it in 1737.',
          },
        },
      ],
    },

    // ── 7. Rathaus ─────────────────────────────────────────────────────────────
    {
      id: 'rathaus',
      name: { el: 'Rathaus', en: 'Rathaus' },
      emoji: '🏰',
      lat: 48.2106,
      lng: 16.3588,
      radiusM: 40,
      riddle: {
        el: 'Μοιάζει με παραμυθένιο κάστρο με μυτερούς πύργους, αλλά μέσα δεν μένει βασιλιάς: εδώ αποφασίζουν οι άνθρωποι που φροντίζουν την πόλη. Στην κορυφή του πιο ψηλού πύργου στέκεται ένας μεταλλικός ιππότης με σημαία, και τον χειμώνα η πλατεία μπροστά του γίνεται πάγος για πατίνια.',
        en: 'It looks like a fairy-tale castle with pointed towers, but no king lives inside: this is where the people who look after the city make their decisions. On top of the tallest tower stands a metal knight with a flag, and in winter the square in front turns into ice for skating.',
      },
      parentHint: {
        el: 'Είναι το Rathaus (Ράτχαους, το Δημαρχείο) στη Rathausplatz. Από την Karlskirche περπατήστε 6 λεπτά πίσω ως την Όπερα και πάρτε το τραμ 1, D ή 71 από τη στάση Kärntner Ring/Oper για λίγες στάσεις κατά μήκος του Ring ως τη Rathausplatz/Burgtheater (περίπου 15 λεπτά συνολικά).',
        en: 'It is the Rathaus, the City Hall, on Rathausplatz. From the Karlskirche walk 6 minutes back to the Opera and take tram 1, D or 71 from the Kärntner Ring/Oper stop a few stops along the Ring to Rathausplatz/Burgtheater (about 15 minutes in all).',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι εδώ αποφασίζουν όσοι φροντίζουν την πόλη. Ποιος έχει το γραφείο του σε ένα τέτοιο κτίριο;', en: 'The riddle says the people who look after the city decide things here. Who has an office in a building like this?' },
        options: {
          el: ['Ο δήμαρχος', 'Ο αυτοκράτορας', 'Ο διευθυντής του σχολείου', 'Ο προπονητής της ομάδας'],
          en: ['The mayor', 'The emperor', 'The head teacher', 'The football coach'],
        },
        correct: 0,
        explanation: {
          el: 'Το Rathaus είναι το δημαρχείο. Εδώ εργάζεται ο δήμαρχος της Βιέννης και εδώ συνεδριάζει το δημοτικό συμβούλιο, που αποφασίζει για τα σχολεία, τα πάρκα, τα τραμ και τους δρόμους της πόλης.',
          en: 'The Rathaus is the city hall. The mayor of Vienna works here, and the city council meets here to decide about the schools, parks, trams and streets of the city.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τους πύργους στην πρόσοψη του κτιρίου, τον ψηλό και τους πιο μικρούς. Πόσοι είναι όλοι μαζί;', en: 'Count the towers on the front of the building, the tall one and the smaller ones. How many are there altogether?' },
        options: {
          el: ['Ένας', 'Τρεις', 'Πέντε', 'Επτά'],
          en: ['One', 'Three', 'Five', 'Seven'],
        },
        correct: 2,
        explanation: {
          el: 'Πέντε: ένας ψηλός στη μέση, 98 μέτρα, και δύο πιο μικροί σε κάθε πλευρά του. Στην κορυφή του ψηλού στέκεται ο Rathausmann (Ράτχαουσμαν), ένας μεταλλικός ιππότης με πανοπλία και σημαία, ψηλός 3,4 μέτρα, που κάνει τον πύργο ακόμα πιο ψηλό.',
          en: 'Five: one tall tower in the middle, 98 metres, and two smaller ones on each side of it. On top of the tall one stands the Rathausmann, a metal knight in armour with a flag, 3.4 metres tall, who makes the tower even taller.',
        },
      },
      story: {
        el: 'Πριν από 150 περίπου χρόνια η Βιέννη γκρέμισε τα παλιά της τείχη και στη θέση τους έφτιαξε τη Ringstraße. Ένα από τα μεγαλόπρεπα κτίριά της είναι το Rathaus, το δημαρχείο, που ολοκληρώθηκε το 1883 σε σχέδια του αρχιτέκτονα Friedrich von Schmidt. Το σχεδίασε να μοιάζει με εκκλησία του Μεσαίωνα, με μυτερούς πύργους και δαντελωτά παράθυρα, όπως τα παλιά δημαρχεία των περήφανων ελεύθερων πόλεων. Λένε πως ο αυτοκράτορας δεν ήθελε ο πύργος να είναι ψηλότερος από τη διπλανή Votivkirche, που έχει 99 μέτρα. Έτσι ο πύργος σταμάτησε στα 98 μέτρα, αλλά ένας σιδεράς χάρισε στην πόλη έναν μεταλλικό ιππότη, τον Rathausmann, που στάθηκε στην κορυφή και ξεπέρασε την εκκλησία! Τον χειμώνα η πλατεία μπροστά γίνεται παγοδρόμιο, τα Χριστούγεννα αγορά γεμάτη φωτάκια και το καλοκαίρι υπαίθριος κινηματογράφος. Ένα δημαρχείο για όλους, σε κάθε εποχή!',
        en: 'About 150 years ago Vienna pulled down its old city walls and built the Ringstraße in their place. One of its grand buildings is the Rathaus, the city hall, finished in 1883 by architect Friedrich von Schmidt. He made it look like a church from the Middle Ages, with pointed towers and lacy windows, like the old town halls of proud free cities. The story goes that the emperor did not want the tower taller than the 99-metre Votivkirche next door. So the tower stopped at 98 metres, but a master locksmith gave the city a metal knight, the Rathausmann, who stood on top and beat the church! In winter the square becomes an ice rink, at Christmas a market full of lights and in summer an open-air cinema. A city hall for everyone, in every season!',
      },
      didYouKnow: {
        el: 'Στο Rathauspark, τον κήπο δίπλα στο δημαρχείο, στέκεται ένα αντίγραφο του Rathausmann σε φυσικό μέγεθος, για να τον δείτε από κοντά: μαζί με το κοντάρι της σημαίας του φτάνει τα έξι περίπου μέτρα. Το κτίριο έχει περισσότερα από 1.500 δωμάτια και επτά εσωτερικές αυλές, η μεγαλύτερη από τις οποίες φιλοξενεί το καλοκαίρι συναυλίες.',
        en: 'In the Rathauspark, the garden beside the city hall, stands a life-size copy of the Rathausmann so you can see him up close: with his flagpole he is about six metres tall. The building has more than 1,500 rooms and seven inner courtyards, the largest of which hosts concerts in summer.',
      },
      quiz: [
        {
          q: { el: 'Με τι μοιάζει το δημαρχείο, σύμφωνα με την ιστορία;', en: 'What does the city hall look like, according to the story?' },
          options: {
            el: ['Με πυραμίδα', 'Με εκκλησία του Μεσαίωνα', 'Με καράβι', 'Με σύγχρονο ουρανοξύστη'],
            en: ['A pyramid', 'A church from the Middle Ages', 'A ship', 'A modern skyscraper'],
          },
          correct: 1,
          explanation: {
            el: 'Ο αρχιτέκτονας το έφτιαξε με μυτερούς πύργους και δαντελωτά παράθυρα, όπως οι εκκλησίες και τα δημαρχεία του Μεσαίωνα.',
            en: 'The architect gave it pointed towers and lacy windows, like the churches and town halls of the Middle Ages.',
          },
        },
        {
          q: { el: 'Ποιος στέκεται στην κορυφή του ψηλού πύργου;', en: 'Who stands on top of the tall tower?' },
          options: {
            el: ['Ο δήμαρχος', 'Μια κουκουβάγια', 'Ο αυτοκράτορας', 'Ένας μεταλλικός ιππότης, ο Rathausmann'],
            en: ['The mayor', 'An owl', 'The emperor', 'A metal knight, the Rathausmann'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Rathausmann, ο μεταλλικός ιππότης με τη σημαία, στέκεται στην κορυφή από το 1882 και έγινε το σύμβολο του δημαρχείου.',
            en: 'The Rathausmann, the metal knight with the flag, has stood on top since 1882 and became the symbol of the city hall.',
          },
        },
        {
          q: { el: 'Τι γίνεται η πλατεία μπροστά τον χειμώνα;', en: 'What does the square in front become in winter?' },
          options: {
            el: ['Γήπεδο ποδοσφαίρου', 'Λίμνη με βάρκες', 'Παγοδρόμιο', 'Παραλία'],
            en: ['A football pitch', 'A lake with boats', 'An ice rink', 'A beach'],
          },
          correct: 2,
          explanation: {
            el: 'Κάθε χειμώνα η πλατεία γίνεται ένα μεγάλο παγοδρόμιο με μονοπάτια από πάγο ανάμεσα στα δέντρα του πάρκου.',
            en: 'Every winter the square becomes a big ice rink, with icy paths winding between the trees of the park.',
          },
        },
      ],
    },

    // ── 8. Parlament ───────────────────────────────────────────────────────────
    {
      id: 'parliament',
      name: { el: 'Parlament', en: 'Parlament' },
      emoji: '🦉',
      lat: 48.2082,
      lng: 16.3600,
      radiusM: 40,
      riddle: {
        el: 'Ένα κτίριο που μοιάζει βγαλμένο από την αρχαία Αθήνα, με κολόνες σαν του Παρθενώνα! Μπροστά του, μια θεά με χρυσό κράνος στέκεται ψηλά πάνω σε ένα σιντριβάνι, και γεροδεμένοι άντρες παλεύουν να κρατήσουν άγρια άλογα στις ράμπες.',
        en: 'A building that looks as if it came straight from ancient Athens, with columns like the Parthenon! In front, a goddess with a golden helmet stands high above a fountain, and strong men struggle to hold wild horses on the ramps.',
      },
      parentHint: {
        el: 'Είναι το Parlament (η Βουλή της Αυστρίας) στο Dr.-Karl-Renner-Ring. Από τη Rathausplatz είναι 3 λεπτά με τα πόδια προς τα νότια, μέσα από το πάρκο· το σιντριβάνι της Αθηνάς βλέπει στον Ring.',
        en: 'It is the Parlament, the Austrian Parliament, on Dr.-Karl-Renner-Ring. From Rathausplatz it is a 3-minute walk south through the park; the Athena fountain faces the Ring.',
      },
      unlockQuestion: {
        question: { el: 'Η θεά του γρίφου φοράει χρυσό κράνος και είναι η θεά της σοφίας. Ποια είναι;', en: 'The goddess in the riddle wears a golden helmet and is the goddess of wisdom. Who is she?' },
        options: {
          el: ['Η Ήρα', 'Η Αθηνά', 'Η Αφροδίτη', 'Η Άρτεμη'],
          en: ['Hera', 'Athena', 'Aphrodite', 'Artemis'],
        },
        correct: 1,
        explanation: {
          el: 'Η Αθηνά, η θεά της σοφίας, που έδωσε το όνομά της στην Αθήνα. Την έβαλαν μπροστά στη Βουλή για να θυμίζει ότι οι αποφάσεις θέλουν σοφία. Και το ιερό της πουλί, όπως ξέρετε, είναι η κουκουβάγια!',
          en: 'Athena, the goddess of wisdom, who gave her name to Athens. She was placed in front of the Parliament as a reminder that decisions need wisdom. And her sacred bird, as you know, is the owl!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε την Αθηνά ψηλά στο σιντριβάνι. Τι κρατάει στο απλωμένο της χέρι;', en: 'Look at Athena high up on the fountain. What is she holding in her outstretched hand?' },
        options: {
          el: ['Ένα μικρό χρυσό αγαλματάκι με φτερά', 'Μια κουκουβάγια', 'Ένα βιβλίο', 'Ένα σπαθί'],
          en: ['A small golden statue with wings', 'An owl', 'A book', 'A sword'],
        },
        correct: 0,
        explanation: {
          el: 'Είναι η Νίκη, η φτερωτή θεά της νίκης, ολόχρυση. Στο άλλο χέρι η Αθηνά κρατάει το δόρυ της. Κάτω από τα πόδια της, τέσσερις ξαπλωμένες φιγούρες είναι τα μεγάλα ποτάμια της παλιάς αυτοκρατορίας, ανάμεσά τους ο Δούναβης.',
          en: 'It is Nike, the winged goddess of victory, all in gold. In her other hand Athena holds her spear. Below her feet, four reclining figures are the great rivers of the old empire, among them the Danube.',
        },
      },
      story: {
        el: 'Όταν η Αυστρία έχτιζε τη Βουλή της, από το 1874 ως το 1883, διάλεξε έναν αρχιτέκτονα από τη Δανία, τον Theophil Hansen, που είχε ζήσει χρόνια στην Αθήνα και είχε σχεδιάσει εκεί την Ακαδημία και το Ζάππειο. Ο Hansen έδωσε στο κτίριο τη μορφή αρχαίου ελληνικού ναού, για να θυμίζει ότι η δημοκρατία, δηλαδή το να αποφασίζει ο λαός, γεννήθηκε στην αρχαία Αθήνα. Μπροστά έβαλαν αργότερα τη θεά Αθηνά με χρυσό κράνος, να κρατάει τη Νίκη, και στις ράμπες τέσσερις άντρες που ημερεύουν άλογα: το μήνυμα είναι ότι μέσα πρέπει να ημερεύουν και τα νεύρα! Το κτίριο χτυπήθηκε στον πόλεμο και επισκευάστηκε, και πρόσφατα ανακαινίστηκε από πάνω ως κάτω. Σήμερα εδώ συνεδριάζουν οι 183 βουλευτές της Αυστρίας, και μπορείς να το επισκεφτείς κι εσύ. Μια ιδέα από την Αθήνα που ταξίδεψε ως τον Δούναβη!',
        en: 'When Austria built its Parliament, between 1874 and 1883, it chose an architect from Denmark, Theophil Hansen, who had lived in Athens for years and designed the Academy and the Zappeion there. Hansen shaped the building like an ancient Greek temple, as a reminder that democracy, the people deciding for themselves, was born in ancient Athens. Later, in front, they placed the goddess Athena with her golden helmet, holding Nike, and on the ramps four men taming horses: the message is that tempers inside should be tamed too! The building was hit in the war and repaired, and it was recently renovated from top to bottom. Today the 183 members of Austria\'s National Council meet here, and you can visit it too. An idea from Athens that travelled all the way to the Danube!',
      },
      didYouKnow: {
        el: 'Οι Βιεννέζοι αστειεύονται πως η Αθηνά στέκεται με την πλάτη γυρισμένη στη Βουλή «για να μη βλέπει τι γίνεται μέσα». Η ανακαίνιση του 2017–2023 κόστισε εκατοντάδες εκατομμύρια ευρώ και έδωσε στην αίθουσα των συνεδριάσεων νέα γυάλινη οροφή· στην ταράτσα λειτουργεί πλέον εστιατόριο με θέα στον Ring.',
        en: 'The Viennese joke that Athena stands with her back to the Parliament “so she does not have to see what goes on inside”. The 2017–2023 renovation cost hundreds of millions of euros and gave the debating chamber a new glass roof; a restaurant with a view over the Ring now sits on the rooftop.',
      },
      quiz: [
        {
          q: { el: 'Σε ποια πόλη είχε ζήσει και χτίσει ο αρχιτέκτονας πριν σχεδιάσει τη Βουλή;', en: 'In which city had the architect lived and built before he designed the Parliament?' },
          options: {
            el: ['Στη Ρώμη', 'Στο Λονδίνο', 'Στην Κοπεγχάγη', 'Στην Αθήνα'],
            en: ['Rome', 'London', 'Copenhagen', 'Athens'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Theophil Hansen έζησε στην Αθήνα και σχεδίασε εκεί την Ακαδημία και το Ζάππειο. Αν πάτε στην Αθήνα, ψάξτε τα!',
            en: 'Theophil Hansen lived in Athens and designed the Academy and the Zappeion there. If you go to Athens, look for them!',
          },
        },
        {
          q: { el: 'Γιατί το κτίριο μοιάζει με αρχαίο ελληνικό ναό;', en: 'Why does the building look like an ancient Greek temple?' },
          options: {
            el: ['Γιατί έμεναν εκεί αρχαίοι θεοί', 'Γιατί δεν υπήρχαν άλλα σχέδια', 'Γιατί η δημοκρατία γεννήθηκε στην αρχαία Αθήνα', 'Γιατί ήταν πιο φθηνό'],
            en: ['Because ancient gods lived there', 'Because there were no other designs', 'Because democracy was born in ancient Athens', 'Because it was cheaper'],
          },
          correct: 2,
          explanation: {
            el: 'Η δημοκρατία, το να αποφασίζει ο λαός για την πόλη του, γεννήθηκε στην αρχαία Αθήνα. Το κτίριο το θυμίζει σε όποιον περνάει.',
            en: 'Democracy, the people deciding about their own city, was born in ancient Athens. The building reminds everyone who passes by.',
          },
        },
        {
          q: { el: 'Τι μήνυμα δίνουν οι άντρες που ημερεύουν άλογα;', en: 'What message do the men taming horses give?' },
          options: {
            el: ['Ότι η Βουλή έχει στάβλους', 'Ότι μέσα πρέπει να ημερεύουν και τα νεύρα', 'Ότι απαγορεύονται τα άλογα', 'Ότι γίνονται ιπποδρομίες'],
            en: ['That the Parliament has stables', 'That tempers inside should be tamed too', 'That horses are not allowed', 'That horse races are held here'],
          },
          correct: 1,
          explanation: {
            el: 'Όπως οι άντρες κρατούν ήρεμα τα άγρια άλογα, έτσι και οι βουλευτές πρέπει να κρατούν ήρεμα τα νεύρα τους όταν συζητούν.',
            en: 'Just as the men keep the wild horses calm, the members of parliament should keep their tempers calm when they debate.',
          },
        },
      ],
    },

    // ── 9. Riesenrad · Prater ──────────────────────────────────────────────────
    {
      id: 'prater-riesenrad',
      name: { el: 'Riesenrad', en: 'Riesenrad' },
      emoji: '🎡',
      lat: 48.2164,
      lng: 16.3956,
      radiusM: 60,
      riddle: {
        el: 'Σε ένα πάρκο όπου κάποτε κυνηγούσαν μόνο οι αυτοκράτορες, μια γιγάντια ρόδα από την εποχή τους γυρίζει αργά αργά και ανεβάζει κόκκινα βαγονάκια ψηλά στον ουρανό. Από κάτω, ένα τρενάκι για λιλιπούτειους σφυρίζει ανάμεσα στα δέντρα.',
        en: 'In a park where once only emperors went hunting, a giant wheel from their time turns slowly and lifts little red wagons high into the sky. Down below, a train built for Lilliputians whistles between the trees.',
      },
      parentHint: {
        el: 'Είναι το Riesenrad (Ρίζενραντ, η Γιγάντια Ρόδα) στο Prater. Από τη Βουλή πάρτε το τραμ 1 με κατεύθυνση Prater Hauptallee από τη στάση Dr.-Karl-Renner-Ring ως το Praterstern (περίπου 15 λεπτά) και περπατήστε 5 λεπτά ως την είσοδο του λούνα παρκ· η ρόδα φαίνεται από μακριά.',
        en: 'It is the Riesenrad, the Giant Wheel, in the Prater. From the Parliament take tram 1 towards Prater Hauptallee from the Dr.-Karl-Renner-Ring stop to Praterstern (about 15 minutes), then walk 5 minutes to the entrance of the fun fair; the wheel is visible from afar.',
      },
      unlockQuestion: {
        question: { el: 'Πριν γίνει πάρκο για όλους, σε ποιον ανήκε αυτό το δάσος με τα δέντρα και τα ελάφια;', en: 'Before it became a park for everyone, who did this forest of trees and deer belong to?' },
        options: {
          el: ['Στον αυτοκράτορα, που κυνηγούσε εκεί', 'Σε έναν δράκο', 'Στους πειρατές', 'Στους μαθητές του σχολείου'],
          en: ['The emperor, who hunted there', 'A dragon', 'Pirates', 'The school children'],
        },
        correct: 0,
        explanation: {
          el: 'Το Prater (Πράτερ) ήταν για αιώνες το κυνηγετικό δάσος των αυτοκρατόρων. Το 1766 ο αυτοκράτορας Joseph II το άνοιξε σε όλους, και γρήγορα γέμισε καφενεία, κούνιες και θέατρα με μαριονέτες. Έτσι γεννήθηκε το λούνα παρκ!',
          en: 'For centuries the Prater was the hunting forest of the emperors. In 1766 Emperor Joseph II opened it to everyone, and it soon filled up with cafés, swings and puppet theatres. That is how the fun fair was born!',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τα βαγονάκια που κρέμονται από τη ρόδα. Πόσα είναι;', en: 'Count the cabins hanging from the wheel. How many are there?' },
        options: {
          el: ['Έξι', 'Δέκα', 'Δεκαπέντε', 'Τριάντα'],
          en: ['Six', 'Ten', 'Fifteen', 'Thirty'],
        },
        correct: 2,
        explanation: {
          el: 'Δεκαπέντε βαγονάκια, κόκκινα σαν παλιά βαγόνια τρένου. Όταν φτιάχτηκε η ρόδα είχε τριάντα, αλλά μετά τη φωτιά του πολέμου την ξανάφτιαξαν με τα μισά, για να είναι πιο ελαφριά και ασφαλής.',
          en: 'Fifteen cabins, red like old railway carriages. When the wheel was built it had thirty, but after the fire of the war it was rebuilt with half as many, to be lighter and safer.',
        },
      },
      story: {
        el: 'Η ρόδα γύρισε πρώτη φορά το 1897 και χτίστηκε από Άγγλους μηχανικούς για να γιορτάσει τα 50 χρόνια του αυτοκράτορα Franz Joseph στον θρόνο. Έχει ύψος 65 μέτρα, όσο ένα κτίριο 20 ορόφων, και για πολλά χρόνια ήταν η ψηλότερη ρόδα του κόσμου. Στην αρχή είχε 30 βαγονάκια, αλλά μια φωτιά στο τέλος του Β΄ Παγκοσμίου Πολέμου την κατέστρεψε σχεδόν ολόκληρη. Οι Βιεννέζοι δεν την άφησαν να χαθεί: το 1947 γύριζε ξανά, με 15 βαγονάκια. Γυρίζει τόσο αργά, όσο περπατάει κάποιος με την ησυχία του, για να χαζεύεις τον Δούναβη και την πόλη. Πολλές ταινίες γυρίστηκαν στα βαγονάκια της, ακόμη και μια του James Bond. Στο πάρκο γύρω της, που κάποτε ήταν το κυνηγετικό δάσος του αυτοκράτορα, το τρενάκι Liliputbahn (Λίλιπουτμπαν) κάνει βόλτες από το 1928.',
        en: 'The wheel first turned in 1897 and was built by English engineers to celebrate Emperor Franz Joseph\'s 50 years on the throne. It is 65 metres tall, like a building of 20 floors, and for many years it was the tallest wheel in the world. At first it had 30 cabins, but a fire at the end of the Second World War destroyed almost all of it. The Viennese would not let it disappear: by 1947 it was turning again, with 15 cabins. It moves as slowly as someone out for a stroll, so you can gaze at the Danube and the city. Many films were shot in its cabins, even a James Bond one. In the park around it, once the emperor\'s hunting forest, the little Liliputbahn train has given rides since 1928.',
      },
      didYouKnow: {
        el: 'Το 1916 δόθηκε άδεια να γκρεμιστεί η ρόδα, αλλά δεν υπήρχαν χρήματα για την κατεδάφιση, και έτσι σώθηκε! Στην ταινία «Ο Τρίτος Άνθρωπος» (1949) γυρίστηκε μέσα σε ένα βαγονάκι της μια από τις πιο διάσημες σκηνές του κινηματογράφου, και σήμερα μπορείτε να κλείσετε βαγονάκι για δείπνο ψηλά στον ουρανό.',
        en: 'In 1916 permission was given to demolish the wheel, but there was no money for the demolition, and so it survived! One of the most famous scenes in cinema, in The Third Man (1949), was filmed in one of its cabins, and today you can book a cabin for dinner high in the sky.',
      },
      quiz: [
        {
          q: { el: 'Γιατί χτίστηκε η ρόδα το 1897;', en: 'Why was the wheel built in 1897?' },
          options: {
            el: ['Για να στεγνώνουν ρούχα', 'Για τα 50 χρόνια του αυτοκράτορα στον θρόνο', 'Για μια ταινία', 'Για να μετράει τον άνεμο'],
            en: ['To dry clothes', 'For the emperor\'s 50 years on the throne', 'For a film', 'To measure the wind'],
          },
          correct: 1,
          explanation: {
            el: 'Η ρόδα ήταν δώρο γιορτής για τα 50 χρόνια του αυτοκράτορα Franz Joseph στον θρόνο. Έμεινε πολύ περισσότερο από τη γιορτή!',
            en: 'The wheel was a party gift for Emperor Franz Joseph\'s 50 years on the throne. It stayed much longer than the party!',
          },
        },
        {
          q: { el: 'Πόσα βαγονάκια είχε η ρόδα στην αρχή;', en: 'How many cabins did the wheel have at first?' },
          options: {
            el: ['Πέντε', 'Δεκαπέντε', 'Εκατό', 'Τριάντα'],
            en: ['Five', 'Fifteen', 'A hundred', 'Thirty'],
          },
          correct: 3,
          explanation: {
            el: 'Στην αρχή είχε 30 βαγονάκια. Μετά τη φωτιά του πολέμου την ξανάφτιαξαν με 15, τα μισά.',
            en: 'At first it had 30 cabins. After the fire of the war it was rebuilt with 15, half as many.',
          },
        },
        {
          q: { el: 'Τι ήταν το Prater πριν ανοίξει για όλους;', en: 'What was the Prater before it opened to everyone?' },
          options: {
            el: ['Το κυνηγετικό δάσος του αυτοκράτορα', 'Ένα λιμάνι', 'Μια έρημος', 'Ένα γήπεδο'],
            en: ['The emperor\'s hunting forest', 'A harbour', 'A desert', 'A stadium'],
          },
          correct: 0,
          explanation: {
            el: 'Ήταν το κυνηγετικό δάσος του αυτοκράτορα, μέχρι που το 1766 άνοιξε για όλους τους κατοίκους της πόλης.',
            en: 'It was the emperor\'s hunting forest, until it opened to all the people of the city in 1766.',
          },
        },
      ],
    },

    // ── 10. Schönbrunn gardens ─────────────────────────────────────────────────
    {
      id: 'schonbrunn-gardens',
      name: { el: 'Schönbrunn', en: 'Schönbrunn' },
      emoji: '🌻',
      lat: 48.1842,
      lng: 16.3122,
      radiusM: 80,
      riddle: {
        el: 'Ένα καλοκαιρινό παλάτι με πάνω από χίλια δωμάτια, όπου ένα αγοράκι έξι χρονών έπαιξε πιάνο για την αυτοκράτειρα και, λένε, πήδηξε στην αγκαλιά της. Πίσω του απλώνονται κήποι με λαβύρινθο, ο πιο παλιός ζωολογικός κήπος του κόσμου και, ψηλά στον λόφο, μια λευκή αψίδα που τα βλέπει όλα.',
        en: 'A summer palace with more than a thousand rooms, where a six-year-old boy played the piano for the empress and, so the story goes, jumped onto her lap. Behind it stretch gardens with a maze, the oldest zoo in the world and, high on the hill, a white archway that sees everything.',
      },
      parentHint: {
        el: 'Είναι το Schloss Schönbrunn (Σένμπρουν), το θερινό παλάτι των Αψβούργων. Από το Praterstern πάρτε το U1 δύο στάσεις ως το Schwedenplatz, αλλάξτε στο U4 προς Hütteldorf και κατεβείτε στη στάση Schönbrunn (περίπου 35 λεπτά)· από εκεί 8 λεπτά με τα πόδια ως την κεντρική πύλη και μέσα από την αυλή στους κήπους, που είναι δωρεάν.',
        en: 'It is Schloss Schönbrunn, the summer palace of the Habsburgs. From Praterstern take the U1 two stops to Schwedenplatz, change to the U4 towards Hütteldorf and get off at Schönbrunn (about 35 minutes); from there it is an 8-minute walk to the main gate and through the courtyard into the gardens, which are free.',
      },
      unlockQuestion: {
        question: { el: 'Το αγοράκι του γρίφου έγινε ένας από τους πιο διάσημους μουσικούς όλων των εποχών. Ποιος ήταν;', en: 'The little boy in the riddle became one of the most famous musicians of all time. Who was he?' },
        options: {
          el: ['Ο Beethoven', 'Ο Strauss', 'Ο Mozart', 'Ο Haydn'],
          en: ['Beethoven', 'Strauss', 'Mozart', 'Haydn'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Mozart ήρθε εδώ το 1762, στα έξι του, και έπαιξε για την αυτοκράτειρα Maria Theresia (Μαρία Θηρεσία). Ο θρύλος λέει ότι μετά πήδηξε στην αγκαλιά της και της έδωσε ένα φιλί!',
          en: 'Mozart came here in 1762, aged six, and played for Empress Maria Theresia. Legend says that afterwards he jumped onto her lap and gave her a kiss!',
        },
      },
      onSite: {
        question: { el: 'Στάσου στους κήπους και κοίταξε το παλάτι. Τι χρώμα έχουν οι τοίχοι του;', en: 'Stand in the gardens and look at the palace. What colour are its walls?' },
        options: {
          el: ['Ροζ', 'Άσπρο', 'Γαλάζιο', 'Κίτρινο'],
          en: ['Pink', 'White', 'Light blue', 'Yellow'],
        },
        correct: 3,
        explanation: {
          el: 'Το χρώμα αυτό είναι τόσο διάσημο, που έχει το δικό του όνομα: «κίτρινο του Schönbrunn». Αμέτρητα κτίρια της παλιάς αυτοκρατορίας βάφτηκαν το ίδιο, από τη Βιέννη ως την Ιταλία. Κοίτα και τα μονοπάτια των κήπων: ξεκινούν από το παλάτι και ανοίγουν σαν ακτίνες αστεριού.',
          en: 'This colour is so famous that it has its own name: “Schönbrunn yellow”. Countless buildings of the old empire were painted the same, from Vienna to Italy. Look at the garden paths too: they start from the palace and fan out like the rays of a star.',
        },
      },
      story: {
        el: 'Schönbrunn σημαίνει «όμορφη πηγή», γιατί, λέει ο θρύλος, ένας αυτοκράτορας βρήκε εδώ μια πηγή με κρυστάλλινο νερό. Το παλάτι με τα 1.441 δωμάτια ήταν το καλοκαιρινό σπίτι των Αψβούργων, και το αγαπούσε πιο πολύ από όλους η αυτοκράτειρα Maria Theresia, που κυβέρνησε 40 χρόνια και μεγάλωσε εδώ τα 16 παιδιά της! Η μικρότερη κόρη της έγινε βασίλισσα της Γαλλίας. Το 1762 ήρθε ο εξάχρονος Mozart και έπαιξε πιάνο μπροστά της· λένε πως γλίστρησε στο γυαλιστερό πάτωμα, μια μικρή πριγκίπισσα τον σήκωσε, και αυτός της υποσχέθηκε να την παντρευτεί! Ο άντρας της Maria Theresia άνοιξε στους κήπους έναν ζωολογικό κήπο το 1752, τον πιο παλιό που λειτουργεί ακόμη στον κόσμο. Ανεβείτε στον λόφο, ως τη λευκή Gloriette (Γκλοριέτ): από εκεί η θέα φτάνει ως το κέντρο της πόλης. Δέκα γρίφοι, δέκα θησαυροί: είστε πια εξερευνητές της Βιέννης!',
        en: 'Schönbrunn means “beautiful spring”, because, legend says, an emperor found a spring of clear water here. The palace with its 1,441 rooms was the summer home of the Habsburgs, and nobody loved it more than Empress Maria Theresia, who ruled for 40 years and raised her 16 children here! Her youngest daughter became queen of France. In 1762 six-year-old Mozart came and played the piano for her; they say he slipped on the polished floor, a little princess helped him up, and he promised to marry her! Maria Theresia\'s husband opened a zoo in the gardens in 1752, the oldest one still running in the world. Climb the hill to the white Gloriette: from there the view reaches the centre of the city. Ten riddles, ten treasures: you are now true explorers of Vienna!',
      },
      didYouKnow: {
        el: 'Ο ζωολογικός κήπος του Schönbrunn ξεκίνησε το 1752 ως ιδιωτική συλλογή ζώων του Franz Stephan, του συζύγου της Maria Theresia. Το μπαρόκ περίπτερο στο κέντρο του, όπου το αυτοκρατορικό ζευγάρι έπαιρνε το πρωινό του ανάμεσα στα ζώα, στέκεται ακόμη και σήμερα είναι καφέ. Η Gloriette χτίστηκε το 1775 και στεγάζει κι αυτή ένα καφέ με θέα.',
        en: 'Schönbrunn Zoo began in 1752 as the private menagerie of Franz Stephan, Maria Theresia\'s husband. The baroque pavilion at its centre, where the imperial couple took breakfast among the animals, still stands and is now a café. The Gloriette was built in 1775 and also houses a café with a view.',
      },
      quiz: [
        {
          q: { el: 'Πόσα παιδιά είχε η αυτοκράτειρα Maria Theresia;', en: 'How many children did Empress Maria Theresia have?' },
          options: {
            el: ['Δεκαέξι', 'Δύο', 'Έξι', 'Εκατό'],
            en: ['Sixteen', 'Two', 'Six', 'A hundred'],
          },
          correct: 0,
          explanation: {
            el: 'Δεκαέξι παιδιά! Η μικρότερη κόρη της, η Marie Antoinette, έγινε βασίλισσα της Γαλλίας.',
            en: 'Sixteen children! Her youngest daughter, Marie Antoinette, became queen of France.',
          },
        },
        {
          q: { el: 'Τι σημαίνει το όνομα Schönbrunn;', en: 'What does the name Schönbrunn mean?' },
          options: {
            el: ['Μεγάλο παλάτι', 'Όμορφη πηγή', 'Κίτρινο σπίτι', 'Λόφος με θέα'],
            en: ['Big palace', 'Beautiful spring', 'Yellow house', 'Hill with a view'],
          },
          correct: 1,
          explanation: {
            el: 'Schönbrunn σημαίνει «όμορφη πηγή». Ο θρύλος λέει ότι ένας αυτοκράτορας βρήκε εδώ μια πηγή με κρυστάλλινο νερό, όταν κυνηγούσε.',
            en: 'Schönbrunn means “beautiful spring”. Legend says an emperor found a spring of clear water here while he was out hunting.',
          },
        },
        {
          q: { el: 'Τι άνοιξε στους κήπους το 1752;', en: 'What opened in the gardens in 1752?' },
          options: {
            el: ['Ένα λούνα παρκ', 'Ένα σχολείο', 'Ένας ζωολογικός κήπος', 'Ένα σινεμά'],
            en: ['A fun fair', 'A school', 'A zoo', 'A cinema'],
          },
          correct: 2,
          explanation: {
            el: 'Ο ζωολογικός κήπος του Schönbrunn άνοιξε το 1752 και είναι ο πιο παλιός του κόσμου που λειτουργεί ακόμη.',
            en: 'Schönbrunn Zoo opened in 1752 and is the oldest zoo in the world that is still running.',
          },
        },
      ],
    },
  ],
};
