/**
 * WiseBot Explorer · Πράγα / Prague
 * ==================================
 * Ten spots in one long day or two halves: the Royal Route on foot, from the Powder Tower
 * across the bridge and up to the castle (spots 1–7), then Petřín by funicular and the
 * New Town (spots 8–10). Original text only, verified facts, language for a child of 7–12
 * in Greek and English. Czech names stay in Czech in both languages.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'prague',
  name: { el: 'Πράγα', en: 'Prague' },
  country: { el: 'Τσεχία', en: 'Czechia' },
  countryCode: 'CZ',
  emoji: '🕰️',
  center: { lat: 50.085, lng: 14.415 },
  zoom: 14,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στην Πράγα, την πόλη με τους εκατό πύργους! Εδώ ένα ρολόι έχει έναν σκελετό που χτυπάει καμπάνα, μια πέτρινη γέφυρα είναι γεμάτη αγάλματα και ένα τεράστιο κάστρο κοιτάζει την πόλη από τον λόφο του. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές της Πράγας!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Prague, the city of a hundred spires! Here a clock has a skeleton that rings a bell, a stone bridge is lined with statues, and a huge castle watches over the town from its hill. Solve my riddles, find the ten secret spots and become Prague explorers yourselves!',
  },
  route: [
    'powder-tower',
    'old-town-square',
    'astronomical-clock',
    'charles-bridge',
    'kampa-island',
    'lennon-wall',
    'prague-castle',
    'petrin-tower',
    'wenceslas-square',
    'dancing-house',
  ],
  spots: [
    // ── 1. Prašná brána ────────────────────────────────────────────────────────
    {
      id: 'powder-tower',
      name: { el: 'Prašná brána', en: 'Powder Tower' },
      emoji: '🧨',
      lat: 50.0873,
      lng: 14.4277,
      radiusM: 60,
      riddle: {
        el: 'Μια σκούρα, μυτερή πύλη από πέτρα φυλάει την είσοδο της παλιάς πόλης. Από εδώ ξεκινούσαν οι βασιλιάδες το ταξίδι τους για το στέμμα, και πολύ αργότερα η πύλη φύλαγε μέσα της κάτι που μπορούσε να κάνει μπαμ!',
        en: 'A dark, pointy stone gate guards the way into the old town. From here kings once set off to collect their crowns, and much later the gate kept something inside that could go bang!',
      },
      parentHint: {
        el: 'Είναι η Prašná brána (η Πύλη της Πυρίτιδας), δίπλα στο χρυσό Obecní dům (το Δημοτικό Μέγαρο). Ξεκινήστε από εδώ: ο σταθμός του μετρό Náměstí Republiky (γραμμή B) είναι 2 λεπτά με τα πόδια.',
        en: 'It is the Prašná brána, the Powder Tower, next to the golden Obecní dům (Municipal House). Start here: Náměstí Republiky metro station (line B) is a 2-minute walk away.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι η πύλη φύλαγε κάτι που κάνει μπαμ. Τι αποθήκευαν μέσα της, που της έδωσε και το όνομά της;', en: 'The riddle says the gate kept something that goes bang. What was stored inside, giving the tower its name?' },
        options: {
          el: ['Αλεύρι', 'Χρυσάφι', 'Μπαρούτι', 'Πάγο'],
          en: ['Flour', 'Gold', 'Gunpowder', 'Ice'],
        },
        correct: 2,
        explanation: {
          el: 'Τον 17ο αιώνα οι στρατιώτες αποθήκευαν εδώ μπαρούτι, δηλαδή πυρίτιδα, κι έτσι ο πύργος πήρε το όνομα Prašná brána, «Πύλη της Πυρίτιδας». Ευτυχώς δεν έκανε ποτέ μπαμ!',
          en: 'In the 17th century soldiers stored gunpowder here, and so the tower got its name, Prašná brána, the “Powder Gate”. Luckily it never went bang!',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στον πύργο και κοίταξε καλά την πέτρα του. Τι χρώμα έχει;', en: 'Stand in front of the tower and look closely at its stone. What colour is it?' },
        options: {
          el: ['Σκούρο, σχεδόν μαύρο', 'Κατάλευκο', 'Ροζ', 'Κατακόκκινο'],
          en: ['Dark, almost black', 'Bright white', 'Pink', 'Bright red'],
        },
        correct: 0,
        explanation: {
          el: 'Η πέτρα του πύργου μαύρισε από τους καπνούς και την αιθάλη εκατοντάδων χρόνων. Κοίτα τώρα δίπλα: το Obecní dům λάμπει με χρυσάφι και χρώματα, ενώ είναι περισσότερα από 400 χρόνια νεότερο!',
          en: 'The tower\'s stone turned dark from hundreds of years of smoke and soot. Now look next door: the Obecní dům gleams with gold and colours, and it is more than 400 years younger!',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 500 χρόνια, το 1475, οι κάτοικοι της Πράγας άρχισαν να χτίζουν αυτή την πύλη ως δώρο στον βασιλιά τους, τον Vladislav (Βλάντισλαβ), που έμενε στο παλάτι ακριβώς δίπλα. Ήταν μία από τις πύλες των τειχών της Παλιάς Πόλης, στολισμένη με αγάλματα βασιλιάδων. Από εδώ ξεκινούσε η Βασιλική Οδός: όταν ένας καινούργιος βασιλιάς πήγαινε να στεφθεί, η πομπή του περνούσε από αυτή την πύλη, διέσχιζε την πόλη και τη γέφυρα και ανέβαινε ως το κάστρο. Η τελευταία τέτοια πομπή πέρασε από εδώ το 1836. Αργότερα ο πύργος έγινε αποθήκη μπαρουτιού, γι\' αυτό λέγεται Πύλη της Πυρίτιδας. Το χρυσό κτίριο δίπλα του, το Obecní dům, χτίστηκε γύρω στο 1910 εκεί όπου παλιά ήταν το παλάτι.',
        en: 'More than 500 years ago, in 1475, the people of Prague began building this gate as a gift to their king, Vladislav, who lived in the palace right next door. It was one of the gates in the walls of the Old Town, decorated with statues of kings. The Royal Route started here: when a new king went to be crowned, his procession passed through this gate, crossed the town and the bridge and climbed up to the castle. The last such procession passed here in 1836. Later the tower became a store for gunpowder, which is why it is called the Powder Tower. The golden building beside it, the Obecní dům, was built around 1910 on the very spot where the old palace once stood.',
      },
      didYouKnow: {
        el: 'Ο πύργος είναι 65 μέτρα ψηλός και 186 σκαλοπάτια οδηγούν στη βεράντα του με τη θέα. Η μυτερή στέγη και πολλά από τα στολίδια δεν είναι μεσαιωνικά: τα πρόσθεσε ο αρχιτέκτονας Josef Mocker στα 1875–1886, αφού ο πύργος είχε μείνει για αιώνες μισοτελειωμένος.',
        en: 'The tower is 65 metres tall and 186 steps lead to its viewing gallery. The pointed roof and much of the decoration are not medieval: architect Josef Mocker added them in 1875–1886, after the tower had stood half-finished for centuries.',
      },
      quiz: [
        {
          q: { el: 'Ως δώρο σε ποιον άρχισαν να χτίζουν την πύλη το 1475;', en: 'The gate was started in 1475 as a gift to whom?' },
          options: {
            el: ['Στον δήμαρχο', 'Στον βασιλιά Vladislav', 'Σε έναν στρατηγό', 'Στον Πάπα'],
            en: ['The mayor', 'King Vladislav', 'A general', 'The Pope'],
          },
          correct: 1,
          explanation: {
            el: 'Η πόλη τη χάρισε στον βασιλιά Vladislav, που τότε έμενε στο παλάτι δίπλα στην πύλη.',
            en: 'The town gave it to King Vladislav, who lived in the palace beside the gate at the time.',
          },
        },
        {
          q: { el: 'Πού κατέληγε η Βασιλική Οδός που ξεκινούσε από αυτή την πύλη;', en: 'Where did the Royal Route that started at this gate end?' },
          options: {
            el: ['Στο ποτάμι', 'Στην αγορά', 'Σε ένα θέατρο', 'Στο κάστρο πάνω στον λόφο'],
            en: ['At the river', 'At the market', 'At a theatre', 'At the castle on the hill'],
          },
          correct: 3,
          explanation: {
            el: 'Η πομπή του καινούργιου βασιλιά περνούσε από την πόλη και τη γέφυρα και ανέβαινε ως το κάστρο, όπου γινόταν η στέψη.',
            en: 'The new king\'s procession crossed the town and the bridge and climbed to the castle, where the coronation took place.',
          },
        },
        {
          q: { el: 'Τι υπήρχε παλιά εκεί όπου στέκεται σήμερα το χρυσό Obecní dům;', en: 'What once stood where the golden Obecní dům is today?' },
          options: {
            el: ['Το παλάτι του βασιλιά', 'Ένα λιμάνι', 'Ένας ζωολογικός κήπος', 'Ένας σταθμός τρένου'],
            en: ['The king\'s palace', 'A harbour', 'A zoo', 'A train station'],
          },
          correct: 0,
          explanation: {
            el: 'Το παλάτι όπου έμεναν οι βασιλιάδες γκρεμίστηκε πριν από πολλά χρόνια, και γύρω στο 1910 χτίστηκε στη θέση του το Obecní dům.',
            en: 'The palace where the kings lived was pulled down long ago, and around 1910 the Obecní dům was built in its place.',
          },
        },
      ],
    },

    // ── 2. Staroměstské náměstí ────────────────────────────────────────────────
    {
      id: 'old-town-square',
      name: { el: 'Staroměstské náměstí', en: 'Old Town Square' },
      emoji: '🏘️',
      lat: 50.0876,
      lng: 14.4212,
      radiusM: 40,
      riddle: {
        el: 'Σε αυτή την πλατεία γίνεται παζάρι εδώ και σχεδόν 900 χρόνια. Πάνω από τα χρωματιστά σπίτια ξεπροβάλλουν δύο μυτεροί πύργοι που δεν είναι ακριβώς δίδυμοι, και έχουν τα ονόματα του πρώτου άντρα και της πρώτης γυναίκας από τη Βίβλο.',
        en: 'People have held markets in this square for almost 900 years. Above the colourful houses rise two pointy towers that are not quite twins, named after the first man and the first woman in the Bible.',
      },
      parentHint: {
        el: 'Είναι το Staroměstské náměstí (η Πλατεία της Παλιάς Πόλης) με την εκκλησία Týn. Από την Prašná brána περπατήστε 6 λεπτά δυτικά στην οδό Celetná και βγαίνετε κατευθείαν στην πλατεία.',
        en: 'It is Staroměstské náměstí, the Old Town Square, with the Týn church. From the Prašná brána walk 6 minutes west along Celetná street and it opens straight onto the square.',
      },
      unlockQuestion: {
        question: { el: 'Πώς λένε οι κάτοικοι της Πράγας τους δύο άνισους πύργους της εκκλησίας;', en: 'What do the people of Prague call the two unequal towers of the church?' },
        options: {
          el: ['Αδάμ και Εύα', 'Ρωμαίος και Ιουλιέτα', 'Χάνσελ και Γκρέτελ', 'Ο Λύκος και η Κοκκινοσκουφίτσα'],
          en: ['Adam and Eve', 'Romeo and Juliet', 'Hansel and Gretel', 'The Wolf and Red Riding Hood'],
        },
        correct: 0,
        explanation: {
          el: 'Ο ένας πύργος είναι λίγο πιο χοντρός από τον άλλον, κι έτσι ο κόσμος τούς έδωσε τα ονόματα Αδάμ και Εύα. Ο χοντρός είναι ο Αδάμ, και λένε ότι προστατεύει την Εύα από τον ήλιο!',
          en: 'One tower is a little thicker than the other, so people named them Adam and Eve. The thick one is Adam, and they say he shelters Eve from the sun!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά τους δύο πύργους της εκκλησίας με τις μυτερές κορυφές. Είναι ολόιδιοι;', en: 'Look up at the two towers of the church with the pointy tops. Are they exactly the same?' },
        options: {
          el: ['Ναι, είναι ολόιδιοι', 'Ο ένας δεν έχει κορυφή', 'Ο ένας είναι στρογγυλός', 'Όχι, ο ένας είναι πιο χοντρός'],
          en: ['Yes, they are identical', 'One has no top', 'One is round', 'No, one is thicker'],
        },
        correct: 3,
        explanation: {
          el: 'Οι μεσαιωνικοί χτίστες δεν νοιάζονταν να είναι όλα συμμετρικά. Οι δύο πύργοι είναι 80 μέτρα ψηλοί, και η καθεμιά από τις μυτερές κορυφές τους μοιάζει με μικρό δάσος από βελόνες.',
          en: 'Medieval builders did not mind if things were not symmetrical. The two towers are 80 metres tall, and each of their pointy tops looks like a little forest of needles.',
        },
      },
      story: {
        el: 'Αυτή η πλατεία είναι η καρδιά της Πράγας από τον 12ο αιώνα: εδώ έστηναν τα παζάρια τους οι έμποροι που έφταναν από μακριά, κι εδώ οι κάτοικοι μαζεύονταν για γιορτές, για σημαντικές ειδήσεις και για να δουν τι ώρα είναι. Κάθε σπίτι γύρω σου έχει διαφορετικό χρώμα και διαφορετική ηλικία· κάποια είναι από τον Μεσαίωνα, με ζωγραφιές στους τοίχους. Στη μέση στέκεται το μεγάλο μνημείο του Jan Hus (Γιαν Χους), ενός ιερέα που πριν από 600 χρόνια έλεγε πάντα αυτό που πίστευε, ακόμα κι όταν ήταν επικίνδυνο· η πόλη το έστησε το 1915, ακριβώς 500 χρόνια μετά τον θάνατό του. Ψάξε στο πλακόστρωτο μια μεταλλική γραμμή: είναι ο μεσημβρινός της Πράγας. Όταν η σκιά μιας ψηλής κολόνας έπεφτε πάνω της, ήταν ακριβώς μεσημέρι.',
        en: 'This square has been the heart of Prague since the 12th century: merchants from far away set up their stalls here, and the townspeople gathered for festivals, for big news and to check the time. Every house around you has a different colour and a different age; some are medieval, with paintings on their walls. In the middle stands the large monument to Jan Hus, a preacher who, 600 years ago, always said what he believed even when it was dangerous; the city put it up in 1915, exactly 500 years after his death. Look for a metal strip in the pavement: it is the Prague meridian. When the shadow of a tall column fell on it, it was exactly noon.',
      },
      didYouKnow: {
        el: 'Η ψηλή Στήλη της Παναγίας που έριχνε τη σκιά της στον μεσημβρινό στήθηκε το 1650, γκρεμίστηκε το 1918, λίγες μέρες μετά την ίδρυση της Τσεχοσλοβακίας, και ένα αντίγραφό της ξαναστήθηκε μόλις το 2020. Η λατινική επιγραφή δίπλα στη γραμμή λέει ότι μ\' αυτόν τον μεσημβρινό ρυθμιζόταν κάποτε η ώρα της Πράγας.',
        en: 'The tall Marian Column that cast its shadow onto the meridian was raised in 1650, torn down in 1918 a few days after Czechoslovakia was founded, and a replica was put back only in 2020. The Latin inscription beside the strip says that Prague time was once set by this meridian.',
      },
      quiz: [
        {
          q: { el: 'Από πότε γίνονται παζάρια σε αυτή την πλατεία;', en: 'Since when have markets been held in this square?' },
          options: {
            el: ['Από πέρυσι', 'Από το 1915', 'Από τον 12ο αιώνα', 'Από το 1650'],
            en: ['Since last year', 'Since 1915', 'Since the 12th century', 'Since 1650'],
          },
          correct: 2,
          explanation: {
            el: 'Οι έμποροι έστηναν τα παζάρια τους εδώ ήδη από τον 12ο αιώνα, δηλαδή πριν από σχεδόν 900 χρόνια.',
            en: 'Merchants were already setting up their stalls here in the 12th century, almost 900 years ago.',
          },
        },
        {
          q: { el: 'Ποιος είναι ο άνθρωπος του μεγάλου μνημείου στη μέση της πλατείας;', en: 'Who is the man of the big monument in the middle of the square?' },
          options: {
            el: ['Ο Jan Hus, ένας ιερέας που έλεγε πάντα αυτό που πίστευε', 'Ένας βασιλιάς πάνω σε άλογο', 'Ένας διάσημος ποδοσφαιριστής', 'Ένας ωρολογοποιός'],
            en: ['Jan Hus, a preacher who always said what he believed', 'A king on a horse', 'A famous footballer', 'A clockmaker'],
          },
          correct: 0,
          explanation: {
            el: 'Το μνημείο δείχνει τον Jan Hus. Στήθηκε το 1915, 500 χρόνια μετά τον θάνατό του.',
            en: 'The monument shows Jan Hus. It was put up in 1915, 500 years after his death.',
          },
        },
        {
          q: { el: 'Τι έδειχνε η μεταλλική γραμμή στο πλακόστρωτο;', en: 'What did the metal strip in the pavement show?' },
          options: {
            el: ['Τα σύνορα της πόλης', 'Πότε ήταν ακριβώς μεσημέρι', 'Πού να παρκάρουν οι άμαξες', 'Τον δρόμο για το κάστρο'],
            en: ['The border of the town', 'When it was exactly noon', 'Where carriages should park', 'The way to the castle'],
          },
          correct: 1,
          explanation: {
            el: 'Όταν η σκιά της ψηλής κολόνας έπεφτε πάνω στη γραμμή, ήταν ακριβώς μεσημέρι. Ήταν το ρολόι της πλατείας πριν από τα ρολόγια χειρός!',
            en: 'When the shadow of the tall column touched the strip, it was exactly noon. It was the square\'s clock before wristwatches!',
          },
        },
      ],
    },

    // ── 3. Orloj ───────────────────────────────────────────────────────────────
    {
      id: 'astronomical-clock',
      name: { el: 'Orloj', en: 'Astronomical Clock (Orloj)' },
      emoji: '⏰',
      lat: 50.0869,
      lng: 14.4210,
      radiusM: 40,
      riddle: {
        el: 'Στον τοίχο ενός πύργου, ένα ρολόι με χρυσά και μπλε καντράν δείχνει πολύ περισσότερα από την ώρα: τον ήλιο, το φεγγάρι και τα άστρα. Κάθε ώρα ένας κοκαλιάρης κύριος ζωντανεύει και δώδεκα φιγούρες παρελαύνουν σε δύο παραθυράκια.',
        en: 'On the wall of a tower, a clock with golden and blue dials shows far more than the time: the sun, the moon and the stars. Every hour a bony fellow springs to life and twelve figures parade past two little windows.',
      },
      parentHint: {
        el: 'Είναι το Orloj (το Αστρονομικό Ρολόι), στον πύργο του Παλιού Δημαρχείου, στη νοτιοδυτική γωνία της ίδιας πλατείας, 1 λεπτό με τα πόδια. Φτάστε λίγο πριν χτυπήσει η ώρα (9:00–23:00) για να δείτε τους Αποστόλους.',
        en: 'It is the Orloj, the Astronomical Clock, on the Old Town Hall tower at the south-west corner of the same square, a 1-minute walk. Arrive a little before the hour (9:00 to 23:00) to see the Apostles.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι κάθε ώρα δώδεκα φιγούρες παρελαύνουν στα παραθυράκια. Ποιοι είναι;', en: 'The riddle says twelve figures parade past the little windows every hour. Who are they?' },
        options: {
          el: ['Οι δώδεκα Απόστολοι', 'Οι δώδεκα μήνες', 'Δώδεκα βασιλιάδες', 'Δώδεκα ιππότες'],
          en: ['The twelve Apostles', 'The twelve months', 'Twelve kings', 'Twelve knights'],
        },
        correct: 0,
        explanation: {
          el: 'Είναι οι δώδεκα Απόστολοι, ξύλινες φιγούρες που περνούν ένας ένας από τα δύο παραθυράκια πάνω από το καντράν. Το ρολόι το έφτιαξε το 1410 ο ωρολογοποιός Mikuláš (Μίκουλας) από το Kadaň μαζί με τον αστρονόμο Jan Šindel (Γιαν Σίντελ)· ο μάστορας Hanuš (Χάνους) απλώς το επισκεύασε και το βελτίωσε πολλά χρόνια αργότερα.',
          en: 'They are the twelve Apostles, wooden figures that pass one by one through the two little windows above the dial. The clock was made in 1410 by the clockmaker Mikuláš of Kadaň together with the astronomer Jan Šindel; Master Hanuš simply repaired and improved it many years later.',
        },
      },
      onSite: {
        question: { el: 'Περίμενε να χτυπήσει η ώρα και κοίταξε τον σκελετό δεξιά από το πάνω καντράν. Τι κάνει;', en: 'Wait for the hour to strike and watch the skeleton to the right of the top dial. What does he do?' },
        options: {
          el: ['Χορεύει', 'Τραβάει ένα σχοινί και χτυπάει καμπάνα, ενώ γυρίζει μια κλεψύδρα', 'Παίζει τρομπέτα', 'Κουνάει μια σημαία'],
          en: ['He dances', 'He pulls a rope to ring a bell and turns an hourglass', 'He plays a trumpet', 'He waves a flag'],
        },
        correct: 1,
        explanation: {
          el: 'Ο σκελετός είναι ο Χρόνος που περνάει: χτυπάει την καμπάνα και γυρίζει την κλεψύδρα του. Οι άλλες τρεις φιγούρες δίπλα στο καντράν κουνιούνται κι αυτές: μία καμαρώνει σε έναν καθρέφτη, μία κουνάει ένα σακούλι με νομίσματα και μία κουνάει το κεφάλι της. Στο τέλος, ο χρυσός κόκορας από πάνω λαλεί.',
          en: 'The skeleton stands for time passing: he rings the bell and turns his hourglass. The other three figures beside the dial move too: one admires himself in a mirror, one shakes a bag of coins and one shakes his head. At the end, the golden rooster above crows.',
        },
      },
      story: {
        el: 'Αυτό το ρολόι ξεκίνησε να χτυπάει το 1410, πριν από περισσότερα από 600 χρόνια, και είναι το πιο παλιό αστρονομικό ρολόι στον κόσμο που δουλεύει ακόμα. Το έφτιαξαν ένας ωρολογοποιός, ο Mikuláš, και ένας αστρονόμος, ο Jan Šindel (Γιαν Σίντελ), που ήθελε το ρολόι να δείχνει πού βρίσκονται ο ήλιος, το φεγγάρι και τα ζώδια στον ουρανό. Το κάτω καντράν, το ημερολόγιο με τους μήνες, προστέθηκε αργότερα. Κάθε ώρα ανοίγουν δύο παραθυράκια και οι δώδεκα Απόστολοι περνούν ένας ένας. Το 1945, στις τελευταίες μέρες του πολέμου, το ρολόι κάηκε, όμως οι κάτοικοι το επισκεύασαν και σκάλισαν καινούργιους ξύλινους Αποστόλους. Έτσι, από το 1948 χτυπάει ξανά κάθε ώρα.',
        en: 'This clock first struck in 1410, more than 600 years ago, and it is the oldest astronomical clock in the world that still works. It was made by a clockmaker, Mikuláš, and an astronomer, Jan Šindel, who wanted the clock to show where the sun, the moon and the zodiac signs are in the sky. The lower dial, the calendar with the months, was added later. Every hour two little windows open and the twelve Apostles pass by one by one. In 1945, in the last days of the war, the clock was badly burned, but the people of Prague repaired it and carved new wooden Apostles. Since 1948 it has struck every hour again.',
      },
      didYouKnow: {
        el: 'Το αστρονομικό καντράν δείχνει ταυτόχρονα τρεις τρόπους μέτρησης της ώρας: τον σημερινό, τον παλιό βοημικό, που μετρά τις ώρες από το ηλιοβασίλεμα, και τον «βαβυλωνιακό», που τις μετρά από την ανατολή. Ο εξωτερικός δακτύλιος με τους χρυσούς αριθμούς γυρίζει σιγά σιγά μέσα στη χρονιά, ώστε το 24 να βρίσκεται πάντα εκεί όπου δύει ο ήλιος.',
        en: 'The astronomical dial shows three ways of telling time at once: modern hours, Old Bohemian hours, which count from sunset, and “Babylonian” hours, which count from sunrise. The outer ring with the golden numbers slowly turns through the year so that its 24 always sits where the sun is setting.',
      },
      quiz: [
        {
          q: { el: 'Πότε άρχισε να δουλεύει το ρολόι;', en: 'When did the clock start working?' },
          options: {
            el: ['Το 1410', 'Το 1910', 'Το 1948', 'Το 1200'],
            en: ['In 1410', 'In 1910', 'In 1948', 'In 1200'],
          },
          correct: 0,
          explanation: {
            el: 'Το ρολόι ξεκίνησε το 1410 και είναι το πιο παλιό αστρονομικό ρολόι που δουλεύει ακόμα.',
            en: 'The clock started in 1410 and is the oldest astronomical clock still working.',
          },
        },
        {
          q: { el: 'Τι δείχνει το ρολόι εκτός από την ώρα;', en: 'What does the clock show apart from the time?' },
          options: {
            el: ['Τον καιρό αύριο', 'Τα σκορ των αγώνων', 'Πού βρίσκονται ο ήλιος, το φεγγάρι και τα ζώδια', 'Τις τιμές στην αγορά'],
            en: ['Tomorrow\'s weather', 'Football scores', 'Where the sun, the moon and the zodiac signs are', 'Prices at the market'],
          },
          correct: 2,
          explanation: {
            el: 'Ο αστρονόμος Jan Šindel ήθελε το ρολόι να δείχνει τον ουρανό: τη θέση του ήλιου, του φεγγαριού και των ζωδίων.',
            en: 'The astronomer Jan Šindel wanted the clock to show the sky: the positions of the sun, the moon and the zodiac signs.',
          },
        },
        {
          q: { el: 'Τι έκαναν οι κάτοικοι της Πράγας μετά το 1945, όταν το ρολόι κάηκε;', en: 'What did the people of Prague do after 1945, when the clock was burned?' },
          options: {
            el: ['Το πέταξαν', 'Αγόρασαν ένα ψηφιακό', 'Το άφησαν σταματημένο', 'Το επισκεύασαν και σκάλισαν καινούργιους Αποστόλους'],
            en: ['They threw it away', 'They bought a digital one', 'They left it stopped', 'They repaired it and carved new Apostles'],
          },
          correct: 3,
          explanation: {
            el: 'Το επισκεύασαν με υπομονή και σκάλισαν καινούργιους ξύλινους Αποστόλους. Από το 1948 χτυπάει ξανά κάθε ώρα.',
            en: 'They patiently repaired it and carved new wooden Apostles. Since 1948 it has struck every hour again.',
          },
        },
      ],
    },

    // ── 4. Karlův most ─────────────────────────────────────────────────────────
    {
      id: 'charles-bridge',
      name: { el: 'Karlův most', en: 'Charles Bridge' },
      emoji: '🌉',
      lat: 50.0864,
      lng: 14.4138,
      radiusM: 80,
      riddle: {
        el: 'Μια πέτρινη γέφυρα με δεκαέξι καμάρες ενώνει τις δύο όχθες του ποταμού, και πάνω της στέκονται αγάλματα σαν φρουροί. Λένε ότι οι χτίστες ζήτησαν από όλα τα χωριά κάτι που κάνουν οι κότες, για να δέσει καλύτερα η λάσπη τους!',
        en: 'A stone bridge with sixteen arches joins the two banks of the river, and along it stand statues like guards. They say the builders asked every village for something hens make, to help their mortar set!',
      },
      parentHint: {
        el: 'Είναι ο Karlův most (η Γέφυρα του Καρόλου). Από το Orloj κατηφορίστε 7 λεπτά τη στενή οδό Karlova ως την πλατεία Křižovnické náměstí, στα πόδια του γοτθικού πύργου της γέφυρας.',
        en: 'It is the Karlův most, Charles Bridge. From the Orloj walk 7 minutes down the narrow Karlova street to Křižovnické náměstí, at the foot of the Gothic bridge tower.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι στη λάσπη της γέφυρας μπήκε κάτι που κάνουν οι κότες. Τι ήταν αυτό, σύμφωνα με τον θρύλο;', en: 'The riddle says something hens make went into the mortar. According to the legend, what was it?' },
        options: {
          el: ['Μέλι', 'Αυγά', 'Γάλα', 'Χιόνι'],
          en: ['Honey', 'Eggs', 'Milk', 'Snow'],
        },
        correct: 1,
        explanation: {
          el: 'Ο θρύλος λέει ότι ο βασιλιάς ζήτησε αυγά από όλα τα χωριά για να γίνει η λάσπη πιο γερή, και ένα χωριό, για να μη σπάσουν στον δρόμο, τα έστειλε βρασμένα! Επιστήμονες που εξέτασαν την παλιά λάσπη λένε ότι μάλλον υπήρχαν όντως αυγά μέσα.',
          en: 'Legend says the king asked every village for eggs to make the mortar stronger, and one village, afraid they would break on the way, sent them hard-boiled! Scientists who tested the old mortar say there probably really were eggs in it.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε όλη τη γέφυρα και μέτρησε τα αγάλματα και στις δύο πλευρές της. Πόσα είναι;', en: 'Walk the whole bridge and count the statues on both sides. How many are there?' },
        options: {
          el: ['Δέκα', 'Είκοσι', 'Τριάντα', 'Πενήντα'],
          en: ['Ten', 'Twenty', 'Thirty', 'Fifty'],
        },
        correct: 2,
        explanation: {
          el: 'Τριάντα αγάλματα, δεκαπέντε σε κάθε πλευρά. Τα περισσότερα στήθηκαν πριν από περίπου 300 χρόνια· σήμερα πολλά είναι αντίγραφα και τα αυθεντικά φυλάγονται σε μουσείο. Ψάξε τον άγιο με τα πέντε χρυσά αστέρια γύρω από το κεφάλι!',
          en: 'Thirty statues, fifteen on each side. Most were put up about 300 years ago; today many are copies, and the originals are kept safe in a museum. Look for the saint with five golden stars around his head!',
        },
      },
      story: {
        el: 'Ο βασιλιάς Κάρολος ο Δ΄ (Karel IV) αγαπούσε τους αριθμούς και τα άστρα. Έτσι, λένε, διάλεξε για τον πρώτο λίθο της γέφυρας μια πολύ ιδιαίτερη στιγμή: 9 Ιουλίου 1357, στις 5 και 31 το πρωί. Γράψε τους αριθμούς στη σειρά, 1-3-5-7-9-7-5-3-1, και διάβασέ τους ανάποδα: είναι οι ίδιοι! Η παλιά γέφυρα της πόλης είχε γκρεμιστεί από μια μεγάλη πλημμύρα, και η καινούργια έπρεπε να αντέξει για πάντα. Την έχτισε ο αρχιτέκτονας Peter Parler (Πέτερ Πάρλερ), και για περισσότερα από 400 χρόνια ήταν η μοναδική γέφυρα της Πράγας πάνω από τον ποταμό Vltava (τον Μολδάβα). Τα αγάλματα ήρθαν πολύ αργότερα. Ένα από αυτά είναι ο Άγιος Ιωάννης Nepomuk (Νεπομούκ): αν αγγίξεις τη γυαλιστερή μπρούντζινη πλάκα κάτω του, λένε ότι θα ξανάρθεις στην Πράγα!',
        en: 'King Charles IV loved numbers and stars. So, the story goes, he chose a very special moment for the first stone of the bridge: 9 July 1357, at 5:31 in the morning. Write the numbers in a row, 1-3-5-7-9-7-5-3-1, and read them backwards: they are the same! The old bridge of the town had been swept away by a great flood, and the new one had to last forever. The architect Peter Parler built it, and for more than 400 years it was Prague\'s only bridge over the river Vltava. The statues came much later. One of them is Saint John of Nepomuk: touch the shiny bronze plaque beneath him, and they say you will return to Prague!',
      },
      didYouKnow: {
        el: 'Για 500 χρόνια η γέφυρα λεγόταν απλώς «Πέτρινη Γέφυρα»· το όνομα του Καρόλου το πήρε επίσημα μόλις το 1870. Ο πύργος στην πλευρά της Παλιάς Πόλης, έργο του ίδιου Peter Parler που έχτισε και τον καθεδρικό ναό του κάστρου, θεωρείται από τους ωραιότερους γοτθικούς πύργους της Ευρώπης.',
        en: 'For 500 years the bridge was simply called the “Stone Bridge”; it officially took Charles\'s name only in 1870. The tower on the Old Town side, by the same Peter Parler who built the castle cathedral, is considered one of the finest Gothic towers in Europe.',
      },
      quiz: [
        {
          q: { el: 'Τι το ιδιαίτερο έχουν η ημερομηνία και η ώρα του πρώτου λίθου, 1357, 9/7, 5:31;', en: 'What is special about the date and time of the first stone, 1357, 9/7, 5:31?' },
          options: {
            el: ['Ήταν τα γενέθλια του βασιλιά', 'Ήταν Χριστούγεννα', 'Ήταν η πιο ζεστή μέρα του χρόνου', 'Οι αριθμοί διαβάζονται ίδιοι κι ανάποδα'],
            en: ['It was the king\'s birthday', 'It was Christmas', 'It was the hottest day of the year', 'The numbers read the same backwards'],
          },
          correct: 3,
          explanation: {
            el: '1-3-5-7-9-7-5-3-1: μπρος και πίσω το ίδιο! Ο βασιλιάς πίστευε ότι τέτοιοι αριθμοί φέρνουν τύχη.',
            en: '1-3-5-7-9-7-5-3-1: the same forwards and backwards! The king believed such numbers bring good luck.',
          },
        },
        {
          q: { el: 'Γιατί χρειαζόταν η Πράγα καινούργια γέφυρα;', en: 'Why did Prague need a new bridge?' },
          options: {
            el: ['Η παλιά ήταν πολύ μικρή για τα άλογα', 'Η παλιά είχε γκρεμιστεί από πλημμύρα', 'Η παλιά ήταν ξύλινη και σάπισε', 'Δεν υπήρχε καμία γέφυρα πριν'],
            en: ['The old one was too small for horses', 'The old one had been swept away by a flood', 'The old one was wooden and rotted', 'There was no bridge before'],
          },
          correct: 1,
          explanation: {
            el: 'Μια μεγάλη πλημμύρα είχε γκρεμίσει την παλιά γέφυρα, γι\' αυτό η καινούργια χτίστηκε από πέτρα, για να αντέξει για πάντα.',
            en: 'A great flood had swept away the old bridge, so the new one was built of stone, to last forever.',
          },
        },
        {
          q: { el: 'Για πόσα χρόνια ήταν η μοναδική γέφυρα της Πράγας;', en: 'For how long was it Prague\'s only bridge?' },
          options: {
            el: ['Για περισσότερα από 400 χρόνια', 'Για 10 χρόνια', 'Για 50 χρόνια', 'Ακόμα είναι η μοναδική'],
            en: ['For more than 400 years', 'For 10 years', 'For 50 years', 'It still is the only one'],
          },
          correct: 0,
          explanation: {
            el: 'Από τον Μεσαίωνα ως τον 19ο αιώνα, όποιος ήθελε να περάσει τον Vltava μέσα στην Πράγα έπρεπε να περάσει από εδώ. Σήμερα η πόλη έχει πολλές γέφυρες.',
            en: 'From the Middle Ages until the 19th century, anyone crossing the Vltava in Prague had to come this way. Today the city has many bridges.',
          },
        },
      ],
    },

    // ── 5. Kampa ───────────────────────────────────────────────────────────────
    {
      id: 'kampa-island',
      name: { el: 'Kampa', en: 'Kampa Island' },
      emoji: '👶',
      lat: 50.0840,
      lng: 14.4084,
      radiusM: 80,
      riddle: {
        el: 'Ένα μικρό νησί κρυμμένο κάτω από τη γέφυρα έχει το παρατσούκλι μιας διάσημης πόλης με κανάλια. Εδώ ένα ρυάκι με το όνομα του διαβόλου γυρίζει έναν παλιό μύλο, και στο γρασίδι σέρνονται μωρά πιο μεγάλα από τους γονείς σου!',
        en: 'A little island tucked under the bridge is nicknamed after a famous city of canals. Here a stream named after the devil turns an old mill wheel, and on the grass crawl babies bigger than your parents!',
      },
      parentHint: {
        el: 'Είναι το νησί Kampa (Κάμπα), με το ρυάκι Čertovka. Περάστε τη γέφυρα (5 λεπτά) και, λίγο πριν από τους πύργους στην απέναντι άκρη, κατεβείτε τα σκαλιά στα αριστερά· η πλατεία Na Kampě και το πάρκο με τα μωρά είναι μπροστά σας.',
        en: 'It is Kampa island, with the Čertovka stream. Cross the bridge (5 minutes) and, just before the towers at the far end, take the stairs down on the left; the Na Kampě square and the park with the babies are straight ahead.',
      },
      unlockQuestion: {
        question: { el: 'Ποιας διάσημης πόλης με κανάλια το παρατσούκλι έχει το νησί;', en: 'Which famous city of canals gives the island its nickname?' },
        options: {
          el: ['Της Βενετίας', 'Του Λονδίνου', 'Της Αθήνας', 'Της Μαδρίτης'],
          en: ['Venice', 'London', 'Athens', 'Madrid'],
        },
        correct: 0,
        explanation: {
          el: 'Το λένε «Βενετία της Πράγας» (Pražské Benátky), γιατί το ρυάκι Čertovka περνάει ανάμεσα στα σπίτια σαν κανάλι της Βενετίας. Η Βενετία όμως είναι μια ολόκληρη πόλη· εδώ είναι μόνο ένα νησάκι!',
          en: 'It is called the “Venice of Prague” (Pražské Benátky), because the Čertovka stream runs between the houses like a Venetian canal. Venice, though, is a whole city; here it is just one little island!',
        },
      },
      onSite: {
        question: { el: 'Βρες τα τεράστια μπρούντζινα μωρά που σέρνονται στο πάρκο. Πόσα είναι;', en: 'Find the giant bronze babies crawling in the park. How many are there?' },
        options: {
          el: ['Ένα', 'Τρία', 'Πέντε', 'Δέκα'],
          en: ['One', 'Three', 'Five', 'Ten'],
        },
        correct: 1,
        explanation: {
          el: 'Τρία μωρά, έργο του γλύπτη David Černý (Ντάβιντ Τσέρνι). Κοίταξε τα πρόσωπά τους: αντί για μάτια και μύτη έχουν μια σχισμή, σαν κουμπαράς! Δέκα ξαδέρφια τους σκαρφαλώνουν στον ψηλό πύργο της τηλεόρασης, στην άλλη άκρη της πόλης.',
          en: 'Three babies, by the sculptor David Černý. Look at their faces: instead of eyes and a nose they have a slot, like a piggy bank! Ten of their cousins climb the tall TV tower on the other side of town.',
        },
      },
      story: {
        el: 'Η Kampa δεν ήταν πάντα νησί. Πριν από περίπου 900 χρόνια, οι άνθρωποι έσκαψαν ένα κανάλι από τον ποταμό Vltava για να γυρίζει τους νερόμυλούς τους, κι έτσι αυτό το κομμάτι γης έμεινε ανάμεσα σε δύο νερά. Το κανάλι λέγεται Čertovka (Τσέρτοφκα), δηλαδή «Ρυάκι του Διαβόλου»: λένε ότι πήρε το όνομά του από μια γκρινιάρα κυρία που έμενε σε ένα σπίτι εδώ κοντά, «Στους Επτά Διαβόλους»! Οι μύλοι άλεθαν αλεύρι για τους φούρνους της πόλης, και ένας μεγάλος ξύλινος τροχός γυρίζει ακόμη. Το ποτάμι όμως δεν είναι πάντα ήρεμο: το καλοκαίρι του 2002 μια μεγάλη πλημμύρα σκέπασε το νησί, και οι κάτοικοι έπρεπε να καθαρίσουν και να φτιάξουν τα πάντα ξανά. Σήμερα το νησί είναι ένα ήσυχο πάρκο, με ένα μουσείο τέχνης σε έναν παλιό μύλο και τρία τεράστια μωρά που σέρνονται στο γρασίδι.',
        en: 'Kampa was not always an island. About 900 years ago, people dug a channel off the river Vltava to turn their water mills, and so this piece of land ended up between two waters. The channel is called Čertovka, the “Devil\'s Stream”: they say it got the name from a grumpy lady who lived in a house nearby called “At the Seven Devils”! The mills ground flour for the town\'s bakers, and one big wooden wheel still turns today. But the river is not always calm: in the summer of 2002 a great flood covered the island, and the people had to clean up and fix everything again. Today the island is a quiet park, with an art museum in an old mill and three giant babies crawling on the grass.',
      },
      didYouKnow: {
        el: 'Στην πλημμύρα του Αυγούστου 2002 ο Vltava ανέβηκε στο υψηλότερο επίπεδο εδώ και περίπου 500 χρόνια, και το νερό στην Kampa έφτασε πάνω από τα παράθυρα του ισογείου. Στους τοίχους του νησιού θα βρείτε χαραγμένα σημάδια με το ύψος του νερού από διάφορες χρονιές.',
        en: 'In the flood of August 2002 the Vltava rose to its highest level in about 500 years, and the water on Kampa reached above the ground-floor windows. On the island\'s walls you can find marks showing the water height in different years.',
      },
      quiz: [
        {
          q: { el: 'Γιατί οι άνθρωποι έσκαψαν το κανάλι Čertovka;', en: 'Why did people dig the Čertovka channel?' },
          options: {
            el: ['Για να κολυμπούν', 'Για να ψαρεύουν', 'Για να γυρίζει τους νερόμυλους', 'Για να πλένουν τα άλογα'],
            en: ['To swim in', 'To fish in', 'To turn the water mills', 'To wash the horses'],
          },
          correct: 2,
          explanation: {
            el: 'Το νερό του καναλιού γύριζε τους τροχούς των μύλων, που άλεθαν αλεύρι για την πόλη.',
            en: 'The water in the channel turned the mill wheels, which ground flour for the town.',
          },
        },
        {
          q: { el: 'Από πού λένε ότι πήρε το όνομά του το «Ρυάκι του Διαβόλου»;', en: 'Where do they say the “Devil\'s Stream” got its name?' },
          options: {
            el: ['Από ένα μαύρο ψάρι', 'Από ένα ηφαίστειο', 'Από μια νύχτα με καταιγίδα', 'Από μια γκρινιάρα κυρία που έμενε δίπλα'],
            en: ['From a black fish', 'From a volcano', 'From a stormy night', 'From a grumpy lady who lived next to it'],
          },
          correct: 3,
          explanation: {
            el: 'Ο θρύλος λέει ότι μια γκρινιάρα κυρία έμενε στο σπίτι «Στους Επτά Διαβόλους», και το ρυάκι πήρε το όνομα από εκείνη!',
            en: 'Legend says a grumpy lady lived in the house “At the Seven Devils”, and the stream was named after her!',
          },
        },
        {
          q: { el: 'Τι έγινε στο νησί το καλοκαίρι του 2002;', en: 'What happened on the island in the summer of 2002?' },
          options: {
            el: ['Έγινε μια μεγάλη γιορτή', 'Το σκέπασε μια μεγάλη πλημμύρα', 'Χτίστηκε ένας πύργος', 'Χιόνισε τον Αύγουστο'],
            en: ['There was a big festival', 'A great flood covered it', 'A tower was built', 'It snowed in August'],
          },
          correct: 1,
          explanation: {
            el: 'Ο ποταμός φούσκωσε και σκέπασε το νησί. Οι κάτοικοι καθάρισαν και έφτιαξαν τα πάντα ξανά: όταν κάτι χαλάει, το ξαναφτιάχνουμε!',
            en: 'The river swelled and covered the island. The people cleaned up and fixed everything again: when something breaks, we rebuild it!',
          },
        },
      ],
    },

    // ── 6. Lennonova zeď ───────────────────────────────────────────────────────
    {
      id: 'lennon-wall',
      name: { el: 'Lennonova zeď', en: 'Lennon Wall' },
      emoji: '☮️',
      lat: 50.0862,
      lng: 14.4067,
      radiusM: 60,
      riddle: {
        el: 'Ένας τοίχος που αλλάζει πρόσωπο κάθε μέρα: γεμάτος χρώματα, λουλούδια, καρδιές και μηνύματα για ειρήνη σε πολλές γλώσσες. Ανάμεσά τους θα βρεις το πρόσωπο ενός τραγουδιστή με στρογγυλά γυαλιά.',
        en: 'A wall that changes its face every day: full of colours, flowers, hearts and messages of peace in many languages. Somewhere among them you will find the face of a singer with round glasses.',
      },
      parentHint: {
        el: 'Είναι η Lennonova zeď (ο Τοίχος του Λένον), στη μικρή πλατεία Velkopřevorské náměstí. Από το πάρκο της Kampa περπατήστε 3 λεπτά βόρεια, περάστε το γεφυράκι πάνω από την Čertovka δίπλα στον νερόμυλο, και ο τοίχος είναι απέναντι από τη γαλλική πρεσβεία.',
        en: 'It is the Lennonova zeď, the Lennon Wall, on the small Velkopřevorské náměstí square. From Kampa park walk 3 minutes north, cross the little bridge over the Čertovka by the water wheel, and the wall is opposite the French embassy.',
      },
      unlockQuestion: {
        question: { el: 'Ο τραγουδιστής με τα στρογγυλά γυαλιά λεγόταν John Lennon. Σε ποιο διάσημο συγκρότημα τραγουδούσε;', en: 'The singer with the round glasses was called John Lennon. Which famous band did he sing in?' },
        options: {
          el: ['Στους ABBA', 'Στους Queen', 'Στους Beatles', 'Στους Rolling Stones'],
          en: ['ABBA', 'Queen', 'The Beatles', 'The Rolling Stones'],
        },
        correct: 2,
        explanation: {
          el: 'Ο John Lennon ήταν ένας από τους τέσσερις Beatles, το συγκρότημα από το Liverpool που έγραψε μερικά από τα πιο αγαπημένα τραγούδια του κόσμου. Το τραγούδι του «Imagine» μιλάει για έναν κόσμο με ειρήνη.',
          en: 'John Lennon was one of the four Beatles, the band from Liverpool that wrote some of the world\'s best-loved songs. His song “Imagine” is about a world at peace.',
        },
      },
      onSite: {
        question: { el: 'Ψάξε στον τοίχο ένα στρογγυλό σύμβολο που σημαίνει «ειρήνη». Τι έχει μέσα στον κύκλο του;', en: 'Search the wall for a round symbol that means “peace”. What is inside its circle?' },
        options: {
          el: ['Τρεις γραμμές, σαν πατημασιά πουλιού', 'Ένα αστέρι', 'Μια καρδιά', 'Το γράμμα L'],
          en: ['Three lines, like a bird\'s footprint', 'A star', 'A heart', 'The letter L'],
        },
        correct: 0,
        explanation: {
          el: 'Το σήμα της ειρήνης σχεδιάστηκε το 1958 στην Αγγλία. Οι γραμμές του είναι τα γράμματα N και D στη «γλώσσα» των σημαιών των ναυτικών, τα αρχικά των λέξεων «nuclear disarmament»: ένα αίτημα να αφήσει ο κόσμος τα πιο επικίνδυνα όπλα του.',
          en: 'The peace sign was designed in England in 1958. Its lines are the letters N and D in the sailors\' flag alphabet, standing for “nuclear disarmament”: a plea for the world to give up its most dangerous weapons.',
        },
      },
      story: {
        el: 'Το 1980 ο John Lennon, ο τραγουδιστής των Beatles που έγραφε τραγούδια για την ειρήνη, πέθανε ξαφνικά, και οι νέοι της Πράγας ήθελαν να τον θυμούνται. Κάποιος ζωγράφισε το πρόσωπό του σε αυτόν τον τοίχο, κι άλλοι πρόσθεσαν στίχους και ευχές. Εκείνα τα χρόνια όμως, στην Τσεχοσλοβακία δεν επιτρεπόταν να γράφεις ελεύθερα τη γνώμη σου. Η αστυνομία έβαφε τον τοίχο άσπρο, και την επόμενη μέρα τα μηνύματα ξαναεμφανίζονταν! Έτσι ο τοίχος έγινε σύμβολο: οι ιδέες δεν σβήνονται με μια βούρτσα. Σήμερα ανήκει στους Ιππότες της Μάλτας, που τον φροντίζουν, και επισκέπτες από όλον τον κόσμο αφήνουν ακόμη μηνύματα ειρήνης. Ό,τι βλέπεις σήμερα μπορεί αύριο να έχει αλλάξει!',
        en: 'In 1980 John Lennon, the Beatles singer who wrote songs about peace, died suddenly, and the young people of Prague wanted to remember him. Someone painted his face on this wall, and others added lyrics and wishes. In those years, though, people in Czechoslovakia were not allowed to write their opinions freely. The police painted the wall white, and the next day the messages were back! So the wall became a symbol: ideas cannot be wiped away with a brush. Today it belongs to the Knights of Malta, who look after it, and visitors from all over the world still leave messages of peace. What you see today may have changed by tomorrow!',
      },
      didYouKnow: {
        el: 'Ο τοίχος ανήκει στον κήπο του Μεγάλου Πριοράτου του Τάγματος της Μάλτας, γι\' αυτό η πλατεία λέγεται Velkopřevorské náměstí. Το 2019 το Τάγμα ανακαίνισε τον τοίχο και τον ανακήρυξε υπαίθρια γκαλερί, με κανόνες για το τι μπορούν να προσθέτουν οι επισκέπτες, οπότε καλύτερα να αφήσετε τα σπρέι στο σπίτι.',
        en: 'The wall belongs to the garden of the Grand Priory of the Order of Malta, which is why the square is called Velkopřevorské náměstí. In 2019 the Order restored the wall and declared it an open-air gallery, with rules about what visitors may add, so leave the spray cans at home.',
      },
      quiz: [
        {
          q: { el: 'Γιατί άρχισαν οι νέοι να ζωγραφίζουν αυτόν τον τοίχο το 1980;', en: 'Why did young people start painting this wall in 1980?' },
          options: {
            el: ['Γιατί ήταν άσχημος', 'Για να θυμούνται τον John Lennon', 'Για μια σχολική εργασία', 'Για να διαφημίσουν μια συναυλία'],
            en: ['Because it was ugly', 'To remember John Lennon', 'For a school project', 'To advertise a concert'],
          },
          correct: 1,
          explanation: {
            el: 'Ο John Lennon πέθανε το 1980, και οι νέοι ζωγράφισαν το πρόσωπό του και τα τραγούδια του για να τον θυμούνται.',
            en: 'John Lennon died in 1980, and young people painted his face and his songs to remember him.',
          },
        },
        {
          q: { el: 'Τι γινόταν όταν η αστυνομία έβαφε τον τοίχο άσπρο;', en: 'What happened when the police painted the wall white?' },
          options: {
            el: ['Τα μηνύματα ξαναεμφανίζονταν την επόμενη μέρα', 'Ο τοίχος έμενε άσπρος για πάντα', 'Ο τοίχος γκρεμιζόταν', 'Έβρεχε'],
            en: ['The messages were back the next day', 'The wall stayed white forever', 'The wall was knocked down', 'It rained'],
          },
          correct: 0,
          explanation: {
            el: 'Κάθε φορά που τον έβαφαν, ο κόσμος ξαναέγραφε. Οι ιδέες δεν σβήνονται με μια βούρτσα!',
            en: 'Every time it was painted over, people wrote again. Ideas cannot be wiped away with a brush!',
          },
        },
        {
          q: { el: 'Σε ποιους ανήκει ο τοίχος σήμερα;', en: 'Who owns the wall today?' },
          options: {
            el: ['Στους Beatles', 'Στον δήμαρχο της Πράγας', 'Σε έναν ζωγράφο', 'Στους Ιππότες της Μάλτας'],
            en: ['The Beatles', 'The mayor of Prague', 'A painter', 'The Knights of Malta'],
          },
          correct: 3,
          explanation: {
            el: 'Ο τοίχος ανήκει στους Ιππότες της Μάλτας, ένα πολύ παλιό τάγμα, που τον φροντίζουν και επιτρέπουν στον κόσμο να αφήνει μηνύματα ειρήνης.',
            en: 'The wall belongs to the Knights of Malta, a very old order, who look after it and let people leave messages of peace.',
          },
        },
      ],
    },

    // ── 7. Pražský hrad ────────────────────────────────────────────────────────
    {
      id: 'prague-castle',
      name: { el: 'Pražský hrad', en: 'Prague Castle' },
      emoji: '🏰',
      lat: 50.0905,
      lng: 14.4002,
      radiusM: 80,
      riddle: {
        el: 'Πάνω στον λόφο απλώνεται το μεγαλύτερο παλιό κάστρο του κόσμου, με αυλές, παλάτια και μια εκκλησία που χρειάστηκε σχεδόν 600 χρόνια για να τελειώσει. Κάποτε έμεναν εδώ βασιλιάδες· σήμερα εδώ δουλεύει ο αρχηγός της χώρας, και φρουροί ακίνητοι σαν αγάλματα φυλάνε τις πύλες.',
        en: 'On the hill spreads the biggest old castle in the world, with courtyards, palaces and a church that took almost 600 years to finish. Kings once lived here; today the leader of the country works here, and guards as still as statues watch the gates.',
      },
      parentHint: {
        el: 'Είναι το Pražský hrad (το Κάστρο της Πράγας) και η τρίτη αυλή του, μπροστά στον καθεδρικό ναό του Αγίου Βίτου. Από τον τοίχο του Λένον ανηφορίστε 20 λεπτά από την οδό Nerudova και τη ράμπα Ke Hradu, ή πάρτε το τραμ 22 από τη στάση Malostranské náměstí ως τη στάση Pražský hrad. Στην είσοδο γίνεται έλεγχος τσάντας· οι αυλές είναι δωρεάν.',
        en: 'It is Pražský hrad, Prague Castle, and its third courtyard in front of St Vitus Cathedral. From the Lennon Wall climb 20 minutes up Nerudova street and the Ke Hradu ramp, or take tram 22 from Malostranské náměstí to the Pražský hrad stop. Bags are checked at the entrance; the courtyards are free.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι σήμερα εδώ δουλεύει ο αρχηγός της χώρας. Ποιος είναι αυτός;', en: 'The riddle says the leader of the country works here today. Who is that?' },
        options: {
          el: ['Ο βασιλιάς', 'Ο δήμαρχος', 'Ένας μάγος', 'Ο Πρόεδρος της Τσεχίας'],
          en: ['The king', 'The mayor', 'A wizard', 'The President of Czechia'],
        },
        correct: 3,
        explanation: {
          el: 'Η Τσεχία δεν έχει βασιλιά εδώ και περισσότερα από 100 χρόνια. Ο Πρόεδρος της Δημοκρατίας έχει το γραφείο του μέσα στο κάστρο, και όταν βρίσκεται στη χώρα, μια ειδική σημαία κυματίζει στη στέγη.',
          en: 'Czechia has had no king for more than 100 years. The President of the Republic has his office inside the castle, and when he is in the country, a special flag flies from the roof.',
        },
      },
      onSite: {
        question: { el: 'Βρες έναν φρουρό του κάστρου σε μια πύλη. Τι χρώμα έχει η στολή του;', en: 'Find a castle guard at one of the gates. What colour is his uniform?' },
        options: {
          el: ['Κόκκινο', 'Μπλε', 'Πράσινο', 'Μαύρο'],
          en: ['Red', 'Blue', 'Green', 'Black'],
        },
        correct: 1,
        explanation: {
          el: 'Οι φρουροί φορούν μπλε: ανοιχτό το καλοκαίρι, σκούρο τον χειμώνα. Τις στολές σχεδίασε το 1990 ο Theodor Pištěk (Τέοντορ Πίστιεκ), ένας σχεδιαστής ρούχων για τον κινηματογράφο που είχε κερδίσει Όσκαρ. Κάθε μεσημέρι, στις 12, οι φρουροί αλλάζουν βάρδια με μουσική και σάλπιγγες.',
          en: 'The guards wear blue: light blue in summer, dark blue in winter. The uniforms were designed in 1990 by Theodor Pištěk, a film costume designer who had won an Oscar. Every day at noon the guards change shifts with music and trumpets.',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 1.100 χρόνια, ένας πρίγκιπας με το όνομα Bořivoj (Μπόρζιβοϊ) έχτισε ένα ξύλινο οχυρό σε αυτόν τον λόφο, πάνω από το ποτάμι. Από τότε, κάθε άρχοντας της Βοημίας πρόσθεσε κάτι: τείχη, παλάτια, εκκλησίες, κήπους. Σήμερα το κάστρο είναι μεγάλο όσο περίπου δέκα γήπεδα ποδοσφαίρου και είναι το μεγαλύτερο παλιό κάστρο στον κόσμο. Ο βασιλιάς Κάρολος ο Δ΄ ξεκίνησε το 1344 τον τεράστιο καθεδρικό ναό του Αγίου Βίτου, αλλά τα χρήματα τελείωναν, πόλεμοι ξεσπούσαν, και ο ναός έμενε μισός. Τελείωσε μόλις το 1929, σχεδόν 600 χρόνια αργότερα! Μέσα του φυλάγεται το χρυσό στέμμα των βασιλιάδων της Βοημίας, πίσω από μια πόρτα με επτά κλειδαριές· τα επτά κλειδιά τα έχουν επτά διαφορετικοί άνθρωποι, και για να ανοίξει η πόρτα πρέπει να έρθουν όλοι μαζί.',
        en: 'More than 1,100 years ago, a prince named Bořivoj built a wooden fort on this hill above the river. Since then, every ruler of Bohemia has added something: walls, palaces, churches, gardens. Today the castle covers about the area of ten football pitches and is the biggest old castle in the world. King Charles IV began the enormous St Vitus Cathedral in 1344, but money ran out, wars broke out, and the church stood half-finished. It was completed only in 1929, almost 600 years later! Inside, the golden crown of the kings of Bohemia is kept behind a door with seven locks; the seven keys belong to seven different people, and all of them must come together to open it.',
      },
      didYouKnow: {
        el: 'Οι τοίχοι του παρεκκλησίου του Αγίου Václav μέσα στον ναό είναι στολισμένοι με περισσότερους από 1.300 ημιπολύτιμους λίθους, αμέθυστους και άλλες πολύχρωμες πέτρες, και το στέμμα, που φτιάχτηκε για τον Κάρολο τον Δ΄ το 1347, φυλάγεται στο δωμάτιο ακριβώς από πάνω. Το κοινό το βλέπει σπάνια, περίπου μία φορά κάθε λίγα χρόνια.',
        en: 'The walls of the St Wenceslas Chapel inside the cathedral are set with more than 1,300 semi-precious stones, amethysts and other coloured gems, and the crown, made for Charles IV in 1347, is kept in the room directly above. The public sees it only rarely, about once every few years.',
      },
      quiz: [
        {
          q: { el: 'Ποιος έχτισε το πρώτο οχυρό σε αυτόν τον λόφο;', en: 'Who built the first fort on this hill?' },
          options: {
            el: ['Ο πρίγκιπας Bořivoj', 'Ο Κάρολος ο Δ΄', 'Ο Peter Parler', 'Ο Jan Hus'],
            en: ['Prince Bořivoj', 'Charles IV', 'Peter Parler', 'Jan Hus'],
          },
          correct: 0,
          explanation: {
            el: 'Ο πρίγκιπας Bořivoj έχτισε ένα ξύλινο οχυρό εδώ πριν από περισσότερα από 1.100 χρόνια. Οι επόμενοι άρχοντες πρόσθεσαν όλα τα υπόλοιπα.',
            en: 'Prince Bořivoj built a wooden fort here more than 1,100 years ago. Later rulers added everything else.',
          },
        },
        {
          q: { el: 'Πόσα χρόνια χρειάστηκε ο καθεδρικός ναός για να τελειώσει;', en: 'How long did the cathedral take to finish?' },
          options: {
            el: ['Δέκα χρόνια', 'Έναν χειμώνα', 'Σχεδόν 600 χρόνια', 'Ακόμα δεν έχει τελειώσει'],
            en: ['Ten years', 'One winter', 'Almost 600 years', 'It is still not finished'],
          },
          correct: 2,
          explanation: {
            el: 'Ξεκίνησε το 1344 και τελείωσε το 1929: σχεδόν 600 χρόνια, με πολλές παύσεις ανάμεσα.',
            en: 'It was started in 1344 and finished in 1929: almost 600 years, with many pauses in between.',
          },
        },
        {
          q: { el: 'Πόσες κλειδαριές έχει η πόρτα που φυλάει το στέμμα;', en: 'How many locks does the door guarding the crown have?' },
          options: {
            el: ['Μία', 'Επτά', 'Εκατό', 'Καμία, είναι ανοιχτή'],
            en: ['One', 'Seven', 'A hundred', 'None, it is open'],
          },
          correct: 1,
          explanation: {
            el: 'Επτά κλειδαριές και επτά κλειδιά σε επτά διαφορετικά χέρια. Το στέμμα βγαίνει μόνο όταν συμφωνούν όλοι μαζί!',
            en: 'Seven locks and seven keys in seven different hands. The crown comes out only when they all agree together!',
          },
        },
      ],
    },

    // ── 8. Petřínská rozhledna ─────────────────────────────────────────────────
    {
      id: 'petrin-tower',
      name: { el: 'Petřínská rozhledna', en: 'Petřín Tower' },
      emoji: '🗼',
      lat: 50.0835,
      lng: 14.3951,
      radiusM: 80,
      riddle: {
        el: 'Πάνω σε έναν καταπράσινο λόφο στέκεται η μικρή αδερφή ενός διάσημου πύργου του Παρισιού. Ένα βαγονάκι σε ανεβάζει ως εκεί, και δίπλα της ένα μικρό κτίριο κρύβει καθρέφτες που σε κάνουν κοντό, μακρύ ή στραβό!',
        en: 'On a leafy hill stands the little sister of a famous Paris tower. A tiny railway carriage pulls you up to it, and next door a small building hides mirrors that make you short, tall or wobbly!',
      },
      parentHint: {
        el: 'Είναι η Petřínská rozhledna (το Παρατηρητήριο του Πέτριν). Από το κάστρο πάρτε το τραμ 22 ως τη στάση Újezd και μετά το τελεφερίκ (lanová dráha, με απλό εισιτήριο συγκοινωνίας) ως την κορυφή, ή περπατήστε 25 λεπτά μέσα από το μοναστήρι Strahov. Ο πύργος είναι 3 λεπτά από τον σταθμό του τελεφερίκ.',
        en: 'It is the Petřínská rozhledna, the Petřín Lookout Tower. From the castle take tram 22 to the Újezd stop and then the funicular (lanová dráha, an ordinary transport ticket) to the top, or walk 25 minutes via the Strahov monastery. The tower is 3 minutes from the funicular station.',
      },
      unlockQuestion: {
        question: { el: 'Ποιου διάσημου πύργου του Παρισιού είναι η «μικρή αδερφή»;', en: 'Which famous Paris tower is it the “little sister” of?' },
        options: {
          el: ['Της Παναγίας των Παρισίων', 'Του Πύργου του Άιφελ', 'Της Αψίδας του Θριάμβου', 'Του Πύργου του Λονδίνου'],
          en: ['Notre-Dame', 'The Eiffel Tower', 'The Arc de Triomphe', 'The Tower of London'],
        },
        correct: 1,
        explanation: {
          el: 'Το 1889 ο Πύργος του Άιφελ εντυπωσίασε τον κόσμο. Μια παρέα από την Πράγα τον είδε και είπε: «Θέλουμε κι εμείς έναν!». Δύο χρόνια αργότερα, ο δικός τους πύργος ήταν έτοιμος.',
          en: 'In 1889 the Eiffel Tower amazed the world. A group from Prague saw it and said: “We want one too!” Two years later, their own tower was ready.',
        },
      },
      onSite: {
        question: { el: 'Δίπλα στον πύργο υπάρχει ένα μικρό κτίριο με λαβύρινθο από καθρέφτες μέσα. Με τι μοιάζει απ\' έξω;', en: 'Next to the tower there is a small building with a maze of mirrors inside. What does it look like from the outside?' },
        options: {
          el: ['Με γυάλινη πυραμίδα', 'Με στρογγυλή σκηνή τσίρκου', 'Με ξύλινη καλύβα', 'Με μικρό κάστρο με πολεμίστρες'],
          en: ['A glass pyramid', 'A round circus tent', 'A wooden log cabin', 'A tiny castle with battlements'],
        },
        correct: 3,
        explanation: {
          el: 'Το Zrcadlové bludiště (ο Λαβύρινθος των Καθρεφτών) χτίστηκε την ίδια χρονιά με τον πύργο, το 1891, σαν αντίγραφο μιας παλιάς πύλης του φρουρίου Vyšehrad. Μέσα, 31 καθρέφτες σε χάνουν στον λαβύρινθο και 14 παραμορφωτικοί σε κάνουν να γελάς.',
          en: 'The Zrcadlové bludiště, the Mirror Maze, was built in the same year as the tower, 1891, as a copy of an old gate of the Vyšehrad fortress. Inside, 31 mirrors lose you in the maze and 14 distorting ones make you laugh.',
        },
      },
      story: {
        el: 'Το 1891 η Πράγα ετοίμαζε μια μεγάλη έκθεση για να δείξει στον κόσμο τι ξέρει να φτιάχνει. Μερικοί κάτοικοι είχαν πάει στο Παρίσι, είχαν δει τον ολοκαίνουργιο Πύργο του Άιφελ και ήθελαν κι αυτοί έναν. Έτσι, σε λίγους μόνο μήνες, σηκώθηκε στην κορυφή του λόφου Petřín (Πέτριν) αυτός ο σιδερένιος πύργος, 63,5 μέτρα ψηλός. Είναι πέντε φορές πιο κοντός από τον Πύργο του Άιφελ, αλλά επειδή στέκεται πάνω σε λόφο, η κορυφή του είναι πιο ψηλά πάνω από τη θάλασσα απ\' ό,τι η κορυφή του Παρισιού! Για την ίδια έκθεση φτιάχτηκε και το τελεφερίκ, που τότε δούλευε με νερό. Ανέβα τα 299 σκαλοπάτια, ή πάρε το ασανσέρ, και θα δεις όλη την πόλη με τους εκατό πύργους της.',
        en: 'In 1891 Prague was preparing a great exhibition to show the world what it could make. Some of its people had been to Paris, seen the brand-new Eiffel Tower and wanted one of their own. So, in only a few months, this iron tower rose on top of Petřín hill, 63.5 metres tall. It is five times shorter than the Eiffel Tower, but because it stands on a hill, its top is higher above the sea than the top of the Paris tower! The funicular railway was built for the same exhibition, and back then it ran on water. Climb the 299 steps, or take the lift, and you will see the whole city with its hundred spires.',
      },
      didYouKnow: {
        el: 'Στον λόφο θα δείτε ένα παλιό τείχος: είναι το Hladová zeď, το «Τείχος της Πείνας», που έχτισε ο Κάρολος ο Δ΄ γύρω στο 1360. Ο θρύλος λέει ότι το παρήγγειλε σε χρονιά λιμού, όχι για άμυνα, αλλά για να δώσει δουλειά και ψωμί στους φτωχούς της πόλης.',
        en: 'On the hill you will see an old wall: the Hladová zeď, the “Hunger Wall”, built by Charles IV around 1360. Legend says he ordered it in a year of famine not for defence but to give the city\'s poor work and bread.',
      },
      quiz: [
        {
          q: { el: 'Γιατί χτίστηκε ο πύργος το 1891;', en: 'Why was the tower built in 1891?' },
          options: {
            el: ['Για να φυλάει την πόλη από εχθρούς', 'Για να στεγνώνουν τα ρούχα', 'Για να έχει σπίτι ο βασιλιάς', 'Για μια μεγάλη έκθεση, αφού οι κάτοικοι είδαν τον Πύργο του Άιφελ'],
            en: ['To guard the city from enemies', 'To dry laundry', 'As a home for the king', 'For a great exhibition, after people saw the Eiffel Tower'],
          },
          correct: 3,
          explanation: {
            el: 'Κάτοικοι της Πράγας θαύμασαν τον Πύργο του Άιφελ στο Παρίσι και έχτισαν τον δικό τους για την έκθεση του 1891.',
            en: 'People from Prague admired the Eiffel Tower in Paris and built their own for the 1891 exhibition.',
          },
        },
        {
          q: { el: 'Πώς γίνεται η κορυφή του να είναι πιο ψηλά από του Πύργου του Άιφελ, ενώ ο πύργος είναι πιο κοντός;', en: 'How can its top be higher than the Eiffel Tower\'s, when the tower is shorter?' },
          options: {
            el: ['Επειδή στέκεται πάνω σε λόφο', 'Επειδή έχει μια κεραία', 'Δεν είναι, είναι ψέμα', 'Επειδή ο Πύργος του Άιφελ κόντυνε'],
            en: ['Because it stands on a hill', 'Because it has an antenna', 'It is not, that is a fib', 'Because the Eiffel Tower shrank'],
          },
          correct: 0,
          explanation: {
            el: 'Ο λόφος Petřín είναι ψηλός, κι έτσι η κορυφή του πύργου βρίσκεται πιο ψηλά πάνω από τη θάλασσα απ\' ό,τι η κορυφή του Παρισιού.',
            en: 'Petřín hill is high, so the top of the tower sits higher above sea level than the top of the Paris tower.',
          },
        },
        {
          q: { el: 'Με τι δούλευε το τελεφερίκ στην αρχή;', en: 'What did the funicular run on at first?' },
          options: {
            el: ['Με άλογα', 'Με ηλεκτρισμό', 'Με νερό', 'Με πετάλια'],
            en: ['Horses', 'Electricity', 'Water', 'Pedals'],
          },
          correct: 2,
          explanation: {
            el: 'Το βαγόνι που κατέβαινε γέμιζε με νερό, γινόταν πιο βαρύ και τραβούσε προς τα πάνω το άλλο. Σήμερα δουλεύει με ηλεκτρισμό.',
            en: 'The carriage going down was filled with water, became heavier and pulled the other one up. Today it runs on electricity.',
          },
        },
      ],
    },

    // ── 9. Václavské náměstí ───────────────────────────────────────────────────
    {
      id: 'wenceslas-square',
      name: { el: 'Václavské náměstí', en: 'Wenceslas Square' },
      emoji: '🐎',
      lat: 50.0800,
      lng: 14.4289,
      radiusM: 40,
      riddle: {
        el: 'Το λένε πλατεία, αλλά μοιάζει με λεωφόρο: είναι τόσο μακρύ που χρειάζεσαι δέκα λεπτά για να το περπατήσεις. Στην πάνω άκρη του, μπροστά σε ένα κτίριο με τρούλο, ένας καλός βασιλιάς από ένα χριστουγεννιάτικο τραγούδι κάθεται καβάλα στο άλογό του.',
        en: 'They call it a square, but it looks like a boulevard: so long that it takes ten minutes to walk it. At its top end, in front of a building with a dome, a good king from a Christmas carol sits on his horse.',
      },
      parentHint: {
        el: 'Είναι το Václavské náměstí (η Πλατεία του Αγίου Βάτσλαβ), με το άγαλμα του Αγίου Václav μπροστά στο Εθνικό Μουσείο. Από τον λόφο κατεβείτε με το τελεφερίκ στο Újezd, πάρτε το τραμ 9 ως τη στάση Václavské náměstí και ανηφορίστε την πλατεία ως το άγαλμα (περίπου 25 λεπτά συνολικά).',
        en: 'It is Václavské náměstí, Wenceslas Square, with the statue of Saint Wenceslas in front of the National Museum. Ride the funicular down to Újezd, take tram 9 to the Václavské náměstí stop and walk up the square to the statue (about 25 minutes in all).',
      },
      unlockQuestion: {
        question: { el: 'Ο καλός βασιλιάς του γρίφου έχει το δικό του χριστουγεννιάτικο τραγούδι. Τι κάνει μέσα στο τραγούδι;', en: 'The good king in the riddle has his own Christmas carol. What does he do in the song?' },
        options: {
          el: ['Πολεμάει έναν δράκο', 'Χτίζει μια γέφυρα', 'Βγαίνει στο χιόνι για να πάει φαγητό και ξύλα σε έναν φτωχό', 'Χάνει το στέμμα του'],
          en: ['He fights a dragon', 'He builds a bridge', 'He goes out in the snow to bring a poor man food and firewood', 'He loses his crown'],
        },
        correct: 2,
        explanation: {
          el: 'Το τραγούδι «Good King Wenceslas» λέει πώς ο βασιλιάς βγήκε μια παγωμένη νύχτα για να πάει φαγητό και ξύλα σε έναν φτωχό χωρικό. Ο Wenceslas είναι ο Václav (Βάτσλαβ), ο προστάτης άγιος της Τσεχίας, που έζησε πριν από 1.100 χρόνια.',
          en: 'The carol “Good King Wenceslas” tells how the king went out on a freezing night to bring food and firewood to a poor peasant. Wenceslas is Václav, the patron saint of Czechia, who lived 1,100 years ago.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τον καβαλάρη στο άγαλμα. Τι κρατάει στο χέρι του;', en: 'Look at the rider on the statue. What is he holding in his hand?' },
        options: {
          el: ['Ένα μακρύ κοντάρι με σημαία', 'Ένα σπαθί', 'Ένα βιβλίο', 'Μια τρομπέτα'],
          en: ['A long lance with a flag', 'A sword', 'A book', 'A trumpet'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Václav κρατάει ένα κοντάρι με σημαία, σαν ιππότης έτοιμος να προστατέψει τη χώρα του. Γύρω από το άλογο στέκονται τέσσερις άγιοι, ανάμεσά τους η γιαγιά του, η Ludmila (Λουντμίλα), που τον μεγάλωσε.',
          en: 'Václav holds a lance with a banner, like a knight ready to protect his land. Around the horse stand four saints, among them his grandmother Ludmila, who raised him.',
        },
      },
      story: {
        el: 'Το 1348 ο Κάρολος ο Δ΄ ίδρυσε μια ολόκληρη καινούργια πόλη δίπλα στην παλιά, τη Nové Město (Νέα Πόλη), και σχεδίασε αυτή την τεράστια αγορά, 750 μέτρα μακριά, όπου οι έμποροι πουλούσαν άλογα: γι\' αυτό λεγόταν Αγορά των Αλόγων. Το 1848 πήρε το όνομα του Αγίου Václav, του καλού πρίγκιπα που κυβέρνησε τη Βοημία πριν από 1.100 χρόνια και έγινε ο προστάτης της χώρας. Το άγαλμά του, με τέσσερις αγίους γύρω του, στήθηκε το 1912 μπροστά στο Εθνικό Μουσείο. Από τότε, όποτε συμβαίνει κάτι σημαντικό, οι κάτοικοι της Πράγας μαζεύονται εδώ. Τον Νοέμβριο του 1989 εκατοντάδες χιλιάδες άνθρωποι γέμισαν την πλατεία, κουνώντας τα κλειδιά τους στον αέρα, και ζήτησαν ελευθερία, χωρίς καμία βία. Το πέτυχαν, και το είπαν «Βελούδινη Επανάσταση», γιατί ήταν απαλή σαν βελούδο.',
        en: 'In 1348 Charles IV founded a whole new town next to the old one, Nové Město, and laid out this enormous market, 750 metres long, where traders sold horses: that is why it was called the Horse Market. In 1848 it was renamed after Saint Václav, the good prince who ruled Bohemia 1,100 years ago and became the country\'s patron saint. His statue, with four saints around him, was placed in front of the National Museum in 1912. Ever since, whenever something important happens, the people of Prague gather here. In November 1989 hundreds of thousands filled the square, jingling their keys in the air, and asked for freedom without any violence. They succeeded, and they called it the Velvet Revolution, because it was as soft as velvet.',
      },
      didYouKnow: {
        el: 'Το Εθνικό Μουσείο στην κορυφή της πλατείας χτίστηκε στα 1885–1891 και ξανάνοιξε το 2018 μετά από επτά χρόνια ανακαίνισης· ο τρούλος του έχει τώρα εξώστη με θέα σε όλη την πλατεία. Ο γλύπτης Josef Václav Myslbek δούλεψε το άγαλμα του Αγίου Václav περισσότερα από 30 χρόνια, και ο τελευταίος από τους τέσσερις αγίους μπήκε στη θέση του μόλις το 1924.',
        en: 'The National Museum at the top of the square was built in 1885–1891 and reopened in 2018 after seven years of renovation; its dome now has a viewing gallery looking down the whole square. Sculptor Josef Václav Myslbek worked on the statue for more than 30 years, and the last of the four saints was put in place only in 1924.',
      },
      quiz: [
        {
          q: { el: 'Τι πουλούσαν παλιά σε αυτή την πλατεία;', en: 'What was once sold in this square?' },
          options: {
            el: ['Ψάρια', 'Άλογα', 'Βιβλία', 'Παπούτσια'],
            en: ['Fish', 'Horses', 'Books', 'Shoes'],
          },
          correct: 1,
          explanation: {
            el: 'Ήταν η Αγορά των Αλόγων της Νέας Πόλης που ίδρυσε ο Κάρολος ο Δ΄ το 1348.',
            en: 'It was the Horse Market of the New Town that Charles IV founded in 1348.',
          },
        },
        {
          q: { el: 'Τι κουνούσαν στον αέρα οι άνθρωποι τον Νοέμβριο του 1989;', en: 'What did people jingle in the air in November 1989?' },
          options: {
            el: ['Σημαίες', 'Ομπρέλες', 'Καπέλα', 'Τα κλειδιά τους'],
            en: ['Flags', 'Umbrellas', 'Hats', 'Their keys'],
          },
          correct: 3,
          explanation: {
            el: 'Κουνούσαν τα κλειδιά τους, σαν να έλεγαν «ώρα να ξεκλειδώσουμε την πόρτα προς την ελευθερία».',
            en: 'They jingled their keys, as if to say “time to unlock the door to freedom”.',
          },
        },
        {
          q: { el: 'Γιατί ονομάστηκε «Βελούδινη» η επανάσταση του 1989;', en: 'Why was the 1989 revolution called “Velvet”?' },
          options: {
            el: ['Γιατί όλοι φορούσαν βελούδο', 'Γιατί έγινε σε ένα εργοστάσιο υφασμάτων', 'Γιατί έγινε απαλά, χωρίς βία', 'Γιατί έγινε τον χειμώνα'],
            en: ['Because everyone wore velvet', 'Because it happened in a cloth factory', 'Because it was gentle, without violence', 'Because it happened in winter'],
          },
          correct: 2,
          explanation: {
            el: 'Οι άνθρωποι ζήτησαν ελευθερία ειρηνικά και το πέτυχαν χωρίς μάχες. Γι\' αυτό την είπαν απαλή σαν βελούδο.',
            en: 'People asked for freedom peacefully and won it without fighting. That is why they called it soft as velvet.',
          },
        },
      ],
    },

    // ── 10. Tančící dům ────────────────────────────────────────────────────────
    {
      id: 'dancing-house',
      name: { el: 'Tančící dům', en: 'Dancing House' },
      emoji: '💃',
      lat: 50.0756,
      lng: 14.4140,
      radiusM: 60,
      riddle: {
        el: 'Στην όχθη του ποταμού δύο πύργοι μοιάζουν να χορεύουν αγκαλιασμένοι, και ο ένας φοράει ένα κουβάρι από μέταλλο σαν καπέλο. Είναι το πιο καινούργιο σημείο του κυνηγιού μας, μόλις 30 χρόνων!',
        en: 'On the riverbank two towers seem to dance in each other\'s arms, and one of them wears a tangle of metal as a hat. It is the newest spot in our hunt, only about 30 years old!',
      },
      parentHint: {
        el: 'Είναι το Tančící dům (το Σπίτι που Χορεύει) στην προκυμαία Rašínovo nábřeží, στη γωνία της πλατείας Jiráskovo náměstí. Από το άγαλμα κατεβείτε την πλατεία ως το μετρό Můstek, πάρτε τη γραμμή B μία στάση ως το Karlovo náměstí και περπατήστε 5 λεπτά δυτικά από την οδό Resslova ως το ποτάμι (περίπου 20 λεπτά συνολικά).',
        en: 'It is the Tančící dům, the Dancing House, on the Rašínovo nábřeží embankment at the corner of Jiráskovo náměstí. From the statue walk down the square to Můstek metro, take line B one stop to Karlovo náměstí and walk 5 minutes west along Resslova street to the river (about 20 minutes in all).',
      },
      unlockQuestion: {
        question: { el: 'Το σπίτι στέκεται στην όχθη του ποταμού που περνάει μέσα από την Πράγα. Πώς λέγεται αυτό το ποτάμι;', en: 'The house stands on the bank of the river that flows through Prague. What is that river called?' },
        options: {
          el: ['Vltava', 'Δούναβης', 'Ρήνος', 'Τάμεσης'],
          en: ['Vltava', 'Danube', 'Rhine', 'Thames'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Vltava (ο Μολδάβας, όπως τον λέμε συχνά στα ελληνικά) είναι το μεγαλύτερο ποτάμι της Τσεχίας. Ένας Τσέχος μουσικός, ο Bedřich Smetana (Μπέντρζιχ Σμέτανα), έγραψε ένα διάσημο μουσικό κομμάτι που ακολουθεί το ποτάμι από τις πηγές του ως την Πράγα.',
          en: 'The Vltava (Moldau in German) is the longest river in Czechia. A Czech composer, Bedřich Smetana, wrote a famous piece of music that follows the river from its springs all the way to Prague.',
        },
      },
      onSite: {
        question: { el: 'Οι δύο πύργοι είναι ένα ζευγάρι χορευτών. Ποιος από τους δύο είναι η κυρία;', en: 'The two towers are a dancing couple. Which one is the lady?' },
        options: {
          el: ['Ο τσιμεντένιος με το καπέλο από μέταλλο', 'Κανένας, είναι δύο κύριοι', 'Ο γυάλινος, που ανοίγει σαν φούστα προς τα κάτω', 'Αυτός με την καμινάδα'],
          en: ['The concrete one with the metal hat', 'Neither, they are two gentlemen', 'The glass one, which flares out like a skirt at the bottom', 'The one with the chimney'],
        },
        correct: 2,
        explanation: {
          el: 'Ο γυάλινος πύργος στενεύει στη μέση, σαν μέση χορεύτριας, και ανοίγει σαν φούστα προς τα κάτω: είναι η Ginger. Ο τσιμεντένιος με το μεταλλικό καπέλο είναι ο Fred. Κοίταξε και τα παράθυρα: δεν είναι στη σειρά, για να φαίνεται ότι το κτίριο κουνιέται!',
          en: 'The glass tower narrows in the middle, like a dancer\'s waist, and flares out like a skirt at the bottom: that is Ginger. The concrete one with the metal hat is Fred. Look at the windows too: they are not in straight rows, so the building seems to move!',
        },
      },
      story: {
        el: 'Εδώ στη γωνία υπήρχε κάποτε ένα σπίτι σαν τα διπλανά. Στο τέλος του Β΄ Παγκοσμίου Πολέμου, το 1945, μια βόμβα έπεσε κατά λάθος και το γκρέμισε, και η γωνία έμεινε άδεια για σχεδόν 50 χρόνια. Ο Václav Havel (Βάτσλαβ Χάβελ), ένας συγγραφέας που έμενε στο διπλανό κτίριο και αργότερα έγινε Πρόεδρος της χώρας, ονειρευόταν από καιρό κάτι καινούργιο εδώ. Έτσι, δύο αρχιτέκτονες, ο Τσέχος Vlado Milunić (Βλάντο Μίλουνιτς) και ο διάσημος Frank Gehry (Φρανκ Γκέρι) από την Αμερική, σχεδίασαν ένα κτίριο που χορεύει! Χτίστηκε στα 1992–1996. Στην αρχή πολλοί έλεγαν ότι είναι παράξενο και δεν ταιριάζει με τα παλιά σπίτια. Σήμερα οι περισσότεροι το αγαπούν και το φωνάζουν «Fred και Ginger», από ένα διάσημο ζευγάρι χορευτών του παλιού κινηματογράφου. Κάποτε οι πιο τολμηρές ιδέες φαίνονται τρελές, μέχρι να τις συνηθίσουμε.',
        en: 'Once there was an ordinary house on this corner, like its neighbours. At the end of the Second World War, in 1945, a bomb fell here by mistake and destroyed it, and the corner stayed empty for almost 50 years. Václav Havel, a writer who lived in the building next door and later became President of the country, had long dreamed of something new here. So two architects, the Czech Vlado Milunić and the famous Frank Gehry from America, designed a building that dances! It was built in 1992–1996. At first many people said it was strange and did not fit in with the old houses. Today most people love it and call it “Fred and Ginger”, after a famous dancing couple from old films. Sometimes the boldest ideas look crazy, until we get used to them.',
      },
      didYouKnow: {
        el: 'Το κουβάρι από μεταλλικούς σωλήνες στην κορυφή έχει το παρατσούκλι «Μέδουσα», και η πρόσοψη αποτελείται από 99 τσιμεντένια πάνελ, το καθένα με διαφορετικό σχήμα. Η ταράτσα με το μπαρ και τη θέα στο ποτάμι είναι ανοιχτή στους επισκέπτες, και ο Frank Gehry σχεδίασε αμέσως μετά το περίφημο Μουσείο Guggenheim στο Μπιλμπάο.',
        en: 'The tangle of metal tubes on top is nicknamed “Medusa”, and the façade is made of 99 concrete panels, each a different shape. The rooftop bar with its river view is open to visitors, and Frank Gehry went straight on to design the famous Guggenheim Museum in Bilbao.',
      },
      quiz: [
        {
          q: { el: 'Γιατί η γωνία αυτή έμεινε άδεια για σχεδόν 50 χρόνια;', en: 'Why did this corner stay empty for almost 50 years?' },
          options: {
            el: ['Κανείς δεν ήθελε να μένει δίπλα στο ποτάμι', 'Ήταν πάρκο', 'Ήταν χώρος για άμαξες', 'Το σπίτι που υπήρχε εκεί γκρεμίστηκε από βόμβα το 1945'],
            en: ['Nobody wanted to live by the river', 'It was a park', 'It was a parking place for carriages', 'The house there was destroyed by a bomb in 1945'],
          },
          correct: 3,
          explanation: {
            el: 'Στο τέλος του πολέμου, το 1945, μια βόμβα έπεσε κατά λάθος και γκρέμισε το σπίτι. Η γωνία περίμενε μέχρι τη δεκαετία του 1990.',
            en: 'At the end of the war, in 1945, a bomb fell by mistake and destroyed the house. The corner waited until the 1990s.',
          },
        },
        {
          q: { el: 'Ποιοι σχεδίασαν το κτίριο;', en: 'Who designed the building?' },
          options: {
            el: ['Ο Peter Parler', 'Ο Vlado Milunić και ο Frank Gehry', 'Ο Κάρολος ο Δ΄', 'Ο David Černý'],
            en: ['Peter Parler', 'Vlado Milunić and Frank Gehry', 'Charles IV', 'David Černý'],
          },
          correct: 1,
          explanation: {
            el: 'Το σχεδίασαν μαζί ο Τσέχος αρχιτέκτονας Vlado Milunić και ο Αμερικανός Frank Gehry, και χτίστηκε στα 1992–1996.',
            en: 'The Czech architect Vlado Milunić and the American Frank Gehry designed it together, and it was built in 1992–1996.',
          },
        },
        {
          q: { el: 'Από πού πήρε το παρατσούκλι «Fred και Ginger»;', en: 'Where does the nickname “Fred and Ginger” come from?' },
          options: {
            el: ['Από ένα διάσημο ζευγάρι χορευτών του παλιού κινηματογράφου', 'Από τα παιδιά του αρχιτέκτονα', 'Από δύο γάτες που ζούσαν εκεί', 'Από δύο μπαχαρικά'],
            en: ['From a famous dancing couple in old films', 'From the architect\'s children', 'From two cats that lived there', 'From two spices'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Fred Astaire και η Ginger Rogers ήταν το πιο διάσημο ζευγάρι χορευτών του παλιού Χόλιγουντ, και οι δύο πύργοι μοιάζουν να χορεύουν σαν εκείνους.',
            en: 'Fred Astaire and Ginger Rogers were the most famous dancing couple of old Hollywood, and the two towers seem to dance just like them.',
          },
        },
      ],
    },
  ],
};
