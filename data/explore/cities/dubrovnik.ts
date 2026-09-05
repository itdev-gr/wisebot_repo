/**
 * WiseBot Explorer · Ντουμπρόβνικ / Dubrovnik
 * ==========================================
 * Ten spots in one walk inside the walls: Pile Gate to the Old Port along the Stradun
 * (spots 1–9), then back out to the little Pile bay for Fort Lovrijenac (spot 10).
 * Original text only, verified facts, language for a child of 7–12 in Greek and English.
 * Croatian names stay Croatian in both languages, with a Greek gloss the first time.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'dubrovnik',
  name: { el: 'Ντουμπρόβνικ', en: 'Dubrovnik' },
  country: { el: 'Κροατία', en: 'Croatia' },
  countryCode: 'HR',
  emoji: '🏰',
  center: { lat: 42.6410, lng: 18.1085 },
  zoom: 15,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στο Ντουμπρόβνικ, το «μαργαριτάρι της Αδριατικής»! Εδώ ψηλά πέτρινα τείχη αγκαλιάζουν μια πόλη με πορτοκαλί στέγες που ακουμπάει στη θάλασσα. Για εκατοντάδες χρόνια η πόλη λεγόταν Ραγούζα (Ragusa) και ήταν μια μικρή δημοκρατία που έμεινε ελεύθερη όχι με σπαθιά, αλλά με εξυπνάδα, εμπόριο και καλές συμφωνίες· η λέξη της ήταν Libertas, δηλαδή Ελευθερία. Τα καράβια της έφταναν ως το Βυζάντιο και τα ελληνικά νησιά. Ένας μεγάλος σεισμός το 1667 και μια δύσκολη εποχή το 1991 πλήγωσαν την πόλη, αλλά οι κάτοικοι την ξανάχτισαν πέτρα πέτρα. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε εξερευνητές του Ντουμπρόβνικ!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Dubrovnik, the “pearl of the Adriatic”! Here tall stone walls hug a city of orange roofs that leans on the sea. For hundreds of years the city was called Ragusa, a tiny republic that stayed free not with swords but with cleverness, trade and good agreements; its motto was Libertas, which means Freedom. Its ships sailed as far as Byzantium and the Greek islands. A great earthquake in 1667 and a hard time in 1991 wounded the city, but its people rebuilt it stone by stone. Solve my riddles, find the ten secret spots and become Dubrovnik explorers!',
  },
  route: [
    'pile-gate',
    'onofrio-fountain',
    'franciscan-pharmacy',
    'stradun',
    'orlando-column',
    'sponza-palace',
    'st-blaise-church',
    'rectors-palace',
    'old-port',
    'fort-lovrijenac',
  ],
  spots: [
    // ── 1. Pile Gate ───────────────────────────────────────────────────────────
    {
      id: 'pile-gate',
      name: { el: 'Πύλη Pile', en: 'Pile Gate' },
      emoji: '🚪',
      lat: 42.6414,
      lng: 18.1064,
      radiusM: 60,
      riddle: {
        el: 'Για να μπεις στην πόλη περνάς κάτω από έναν άγιο που κρατάει στα χέρια του... ολόκληρη την πόλη! Παλιά, κάθε βράδυ, οι φρουροί κλείδωναν αυτή την είσοδο.',
        en: 'To enter the city you pass beneath a saint who holds... the whole city in his hands! Long ago, every evening, the guards locked this entrance.',
      },
      parentHint: {
        el: 'Είναι η Πύλη Pile (Πίλε), η κύρια δυτική είσοδος της παλιάς πόλης. Ξεκινήστε από εδώ: σχεδόν όλα τα λεωφορεία της πόλης σταματούν στη στάση Pile, ακριβώς έξω από την πύλη. Σταθείτε στην αρχή της πέτρινης γέφυρας, με την πύλη μπροστά σας.',
        en: 'It is the Pile Gate, the main western entrance to the old town. Start here: almost all city buses stop at the Pile stop, right outside the gate. Stand at the start of the stone bridge, facing the gate.',
      },
      unlockQuestion: {
        question: { el: 'Ο άγιος πάνω από την πύλη είναι ο προστάτης της πόλης. Γιατί, λες, τον έφτιαξαν να κρατάει ένα μικρό μοντέλο της πόλης;', en: 'The saint above the gate is the protector of the city. Why do you think he was made holding a little model of the city?' },
        options: {
          el: ['Γιατί ήταν αρχιτέκτονας', 'Για να δείξουν ότι κρατάει την πόλη ασφαλή στα χέρια του', 'Γιατί την έχασε και την έψαχνε', 'Γιατί ήταν το παιχνίδι του'],
          en: ['Because he was an architect', 'To show that he keeps the city safe in his hands', 'Because he lost it and was looking for it', 'Because it was his toy'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Άγιος Βλάσιος, στα κροατικά Sveti Vlaho (Σβέτι Βλάχο), είναι ο προστάτης του Ντουμπρόβνικ. Κρατάει το μοντέλο της πόλης σαν να τη φυλάει. Θα τον δεις παντού: σε πύλες, σε τείχη, ακόμη και σε παλιά νομίσματα.',
          en: 'Saint Blaise, Sveti Vlaho in Croatian, is the protector of Dubrovnik. He holds the model of the city as if guarding it. You will see him everywhere: on gates, on walls, even on old coins.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στην πύλη και κοίταξε από πού περνάς για να μπεις. Τι υπάρχει ανάμεσα στον δρόμο και στην πύλη;', en: 'Stand in front of the gate and look at what you walk over to get in. What is there between the street and the gate?' },
        options: {
          el: ['Μια σκάλα από σχοινί', 'Μια πέτρινη γέφυρα με μια ξύλινη κινητή γέφυρα στο τέλος', 'Μια αμμουδιά', 'Ένα γυάλινο πάτωμα'],
          en: ['A rope ladder', 'A stone bridge with a wooden drawbridge at the end', 'A sandy beach', 'A glass floor'],
        },
        correct: 1,
        explanation: {
          el: 'Η πέτρινη γέφυρα περνάει πάνω από την παλιά τάφρο, που ποτέ δεν είχε νερό, μόνο κήπους. Το τελευταίο κομμάτι είναι ξύλινο: η κινητή γέφυρα, που παλιά σηκωνόταν κάθε βράδυ με αλυσίδες. Κοίταξε ψηλά και θα δεις τις τρύπες για τις αλυσίδες.',
          en: 'The stone bridge crosses the old moat, which never held water, only gardens. The last part is wooden: the drawbridge, which was pulled up every evening with chains. Look up and you can spot the holes for the chains.',
        },
      },
      story: {
        el: 'Καλώς ήρθες στην εξώπορτα του Ντουμπρόβνικ! Για εκατοντάδες χρόνια, αυτή ήταν η μόνη είσοδος από τη δύση. Πρώτα περνάς μια πέτρινη γέφυρα πάνω από μια τάφρο που δεν είχε ποτέ νερό, μόνο κήπο. Μετά έρχεται μια ξύλινη κινητή γέφυρα: κάθε βράδυ οι φρουροί τη σήκωναν με αλυσίδες, κλείδωναν την πύλη και έδιναν τα κλειδιά στον άρχοντα της πόλης. Πάνω από την καμάρα στέκεται ο Άγιος Βλάσιος, ο Sveti Vlaho, ο προστάτης του Ντουμπρόβνικ, κρατώντας ένα μικρό μοντέλο της πόλης σαν να τη φυλάει στα χέρια του. Η πύλη είναι στην πραγματικότητα δύο πύλες: μια εξωτερική από το 1537 και μια πιο παλιά εσωτερική, με μια στροφή ανάμεσά τους, για να μην μπορούν οι εχθροί να τρέξουν ίσια μέσα.',
        en: 'Welcome to the front door of Dubrovnik! For hundreds of years, this was the only way in from the west. First you cross a stone bridge over a moat that never held water, only a garden. Then comes a wooden drawbridge: every evening the guards pulled it up with chains, locked the gate and handed the keys to the ruler of the city. Above the arch stands Saint Blaise, Sveti Vlaho, the protector of Dubrovnik, holding a small model of the city as if keeping it safe in his hands. The gate is really two gates, an outer one from 1537 and an older inner one, with a bend between them so that enemies could not run straight in.',
      },
      didYouKnow: {
        el: 'Το άγαλμα του αγίου πάνω από την εσωτερική πύλη είναι έργο του Ivan Meštrović, του πιο γνωστού Κροάτη γλύπτη του 20ού αιώνα· αυτό πάνω από την εξωτερική πύλη είναι από τον 16ο αιώνα. Τα κλειδιά της πόλης παραδίδονταν κάθε βράδυ στον Ρέκτορα και επέστρεφαν στους φρουρούς το πρωί.',
        en: 'The statue of the saint above the inner gate is by Ivan Meštrović, the best-known Croatian sculptor of the 20th century; the one above the outer gate dates from the 16th century. The city keys were handed to the Rector every night and returned to the guards each morning.',
      },
      quiz: [
        {
          q: { el: 'Τι έκαναν οι φρουροί με την κινητή γέφυρα κάθε βράδυ;', en: 'What did the guards do with the drawbridge every evening?' },
          options: {
            el: ['Την άφηναν κάτω', 'Τη σήκωναν με αλυσίδες', 'Την έβαφαν', 'Την έριχναν στη θάλασσα'],
            en: ['Left it down', 'Pulled it up with chains', 'Painted it', 'Threw it into the sea'],
          },
          correct: 1,
          explanation: {
            el: 'Κάθε βράδυ η γέφυρα σηκωνόταν με αλυσίδες και η πύλη κλείδωνε. Έτσι κανείς δεν έμπαινε στην πόλη τη νύχτα.',
            en: 'Every evening the bridge was pulled up with chains and the gate was locked. That way nobody could enter the city at night.',
          },
        },
        {
          q: { el: 'Ποιος είναι ο άγιος πάνω από την πύλη;', en: 'Who is the saint above the gate?' },
          options: {
            el: ['Ο Άγιος Γεώργιος', 'Ο Άγιος Νικόλαος', 'Ο Άγιος Πέτρος', 'Ο Άγιος Βλάσιος'],
            en: ['Saint George', 'Saint Nicholas', 'Saint Peter', 'Saint Blaise'],
          },
          correct: 3,
          explanation: {
            el: 'Είναι ο Άγιος Βλάσιος, ο Sveti Vlaho, ο προστάτης του Ντουμπρόβνικ, με το μοντέλο της πόλης στα χέρια του.',
            en: 'It is Saint Blaise, Sveti Vlaho, the protector of Dubrovnik, with the model of the city in his hands.',
          },
        },
        {
          q: { el: 'Γιατί υπάρχουν δύο πύλες με μια στροφή ανάμεσά τους;', en: 'Why are there two gates with a bend between them?' },
          options: {
            el: ['Για να μην μπορούν οι εχθροί να τρέξουν ίσια μέσα', 'Για να χωράνε δύο μαγαζιά', 'Γιατί οι χτίστες μπερδεύτηκαν', 'Για να παρκάρουν τα αυτοκίνητα'],
            en: ['So that enemies could not run straight in', 'To fit two shops', 'Because the builders got confused', 'So that cars could park'],
          },
          correct: 0,
          explanation: {
            el: 'Η στροφή ανάμεσα στις δύο πύλες έκανε τους εχθρούς να σταματούν και να στρίβουν, ενώ οι φρουροί τους έβλεπαν από ψηλά.',
            en: 'The bend between the two gates made enemies stop and turn, while the guards watched them from above.',
          },
        },
      ],
    },

    // ── 2. Big Onofrio's Fountain ──────────────────────────────────────────────
    {
      id: 'onofrio-fountain',
      name: { el: 'Μεγάλη Κρήνη του Onofrio', en: 'Big Onofrio\'s Fountain' },
      emoji: '⛲',
      lat: 42.6413,
      lng: 18.1074,
      radiusM: 40,
      riddle: {
        el: 'Πέτρινα πρόσωπα φτύνουν νερό κάτω από έναν στρογγυλό τρούλο. Το νερό τους ταξίδεψε δώδεκα χιλιόμετρα από τα βουνά για να φτάσει εδώ, και μπορείς να το πιεις!',
        en: 'Stone faces spit water beneath a round dome. Their water travelled twelve kilometres from the hills to get here, and you can drink it!',
      },
      parentHint: {
        el: 'Είναι η Μεγάλη Κρήνη του Onofrio (Velika Onofrijeva fontana). Μόλις περάσετε την Πύλη Pile, είναι αμέσως δεξιά σας, στην αρχή του κεντρικού δρόμου, 1 λεπτό.',
        en: 'It is the Big Onofrio\'s Fountain (Velika Onofrijeva fontana). As soon as you pass through the Pile Gate, it is immediately on your right, at the start of the main street, 1 minute.',
      },
      unlockQuestion: {
        question: { el: 'Πώς έφτανε το νερό από τα βουνά ως εδώ, πριν από σχεδόν 600 χρόνια, χωρίς αντλίες και ηλεκτρισμό;', en: 'How did the water get from the hills all the way here, almost 600 years ago, without pumps or electricity?' },
        options: {
          el: ['Με κουβάδες πάνω σε γαϊδουράκια', 'Έβρεχε μέσα στην κρήνη', 'Μέσα από ένα υδραγωγείο, ένα πέτρινο κανάλι που κατηφορίζει', 'Με καράβια'],
          en: ['In buckets carried by donkeys', 'It rained inside the fountain', 'Through an aqueduct, a stone channel running downhill', 'By ship'],
        },
        correct: 2,
        explanation: {
          el: 'Ένα υδραγωγείο είναι ένα κανάλι που κατηφορίζει πολύ πολύ λίγο σε κάθε μέτρο. Το νερό κυλάει μόνο του, μόνο με τη βαρύτητα, από την πηγή ως την πόλη. Οι αρχαίοι Ρωμαίοι το έκαναν ίδιο.',
          en: 'An aqueduct is a channel that slopes down just a tiny bit every metre. The water flows by itself, using only gravity, from the spring to the city. The ancient Romans did exactly the same.',
        },
      },
      onSite: {
        question: { el: 'Κάνε τον γύρο της κρήνης και μέτρησε τα πέτρινα πρόσωπα που βγάζουν νερό. Πόσα είναι;', en: 'Walk all the way round the fountain and count the stone faces that pour out water. How many are there?' },
        options: {
          el: ['Οκτώ', 'Δώδεκα', 'Δεκαέξι', 'Είκοσι'],
          en: ['Eight', 'Twelve', 'Sixteen', 'Twenty'],
        },
        correct: 2,
        explanation: {
          el: 'Δεκαέξι πρόσωπα, ένα σε κάθε πλευρά της κρήνης. Λέγονται maskeroni (μασκερόνι), δηλαδή «μεγάλες μάσκες». Κάποτε η κρήνη είχε πολύ περισσότερα στολίδια, αλλά ο σεισμός του 1667 τα γκρέμισε.',
          en: 'Sixteen faces, one on each side of the fountain. They are called maskeroni, “big masks”. The fountain once had many more decorations, but the earthquake of 1667 knocked them off.',
        },
      },
      story: {
        el: 'Μέχρι το 1438, το νερό ήταν μεγάλη έγνοια στο Ντουμπρόβνικ: η πόλη πατάει πάνω σε βράχο, και οι άνθρωποι μάζευαν το νερό της βροχής σε στέρνες. Έτσι η Δημοκρατία κάλεσε έναν μηχανικό από τη Νάπολη, τον Onofrio della Cava (Ονόφριο ντέλα Κάβα), να χτίσει ένα υδραγωγείο: ένα πέτρινο κανάλι περίπου 12 χιλιομέτρων, που έφερνε νερό από τις πηγές του Šumet (Σούμετ) μέσα στα τείχη. Αυτή η μεγάλη κρήνη, σαν τύμπανο με δεκαέξι πλευρές και τρούλο, ήταν το σημείο όπου έφτανε το νερό. Δεκαέξι σκαλισμένα πρόσωπα το χύνουν, και οι άνθρωποι γεμίζουν ακόμη τα μπουκάλια τους εδώ. Η κρήνη ήταν κάποτε γεμάτη στολίδια, αλλά ο μεγάλος σεισμός του 1667 τα έριξε σχεδόν όλα. Μια μικρή αδερφή της, από τον ίδιο Onofrio, στέκεται στην άλλη άκρη του κεντρικού δρόμου.',
        en: 'Until 1438, water was a worry in Dubrovnik: the city sits on rock, and people collected rain in cisterns. So the Republic hired an engineer from Naples, Onofrio della Cava, to build an aqueduct, a stone channel about 12 km long that brought spring water from the hills of Šumet right inside the walls. This big fountain, shaped like a drum with sixteen sides and a dome, is where the water arrived. Sixteen carved faces pour it out, and people still fill their bottles here today. The fountain was once covered in rich decoration, but the great earthquake of 1667 shook most of it away. A small sister fountain by the same Onofrio stands at the other end of the main street.',
      },
      didYouKnow: {
        el: 'Το υδραγωγείο του Onofrio, σχεδόν 600 ετών, τροφοδοτεί ακόμη και σήμερα με νερό μέρος της παλιάς πόλης. Ο ίδιος μηχανικός ξανάχτισε την ίδια εποχή και το Παλάτι του Ρέκτορα. Η Δημοκρατία τον πλήρωσε γενναιόδωρα, γιατί το νερό ήταν το πιο πολύτιμο πράγμα σε μια πόλη που θα μπορούσε να πολιορκηθεί.',
        en: 'Onofrio\'s aqueduct, almost 600 years old, still feeds water into part of the old town today. The same engineer also rebuilt the Rector\'s Palace at about the same time. The Republic paid him generously, because water was the most precious thing in a city that might one day be besieged.',
      },
      quiz: [
        {
          q: { el: 'Πόσο μακρύ ήταν περίπου το υδραγωγείο;', en: 'About how long was the aqueduct?' },
          options: {
            el: ['1 χιλιόμετρο', '100 χιλιόμετρα', 'Περίπου 12 χιλιόμετρα', '1.000 χιλιόμετρα'],
            en: ['1 kilometre', '100 kilometres', 'About 12 kilometres', '1,000 kilometres'],
          },
          correct: 2,
          explanation: {
            el: 'Το κανάλι είχε μήκος περίπου 12 χιλιόμετρα, από τις πηγές του Šumet ως την κρήνη, όλο κατηφόρα.',
            en: 'The channel was about 12 kilometres long, from the springs of Šumet down to the fountain, all downhill.',
          },
        },
        {
          q: { el: 'Από πού ήρθε ο μηχανικός Onofrio;', en: 'Where did the engineer Onofrio come from?' },
          options: {
            el: ['Από τη Νάπολη', 'Από την Αθήνα', 'Από τη Βενετία', 'Από το Λονδίνο'],
            en: ['From Naples', 'From Athens', 'From Venice', 'From London'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Onofrio della Cava ήρθε από τη Νάπολη της Ιταλίας. Η Δημοκρατία συχνά καλούσε τους καλύτερους τεχνίτες από μακριά.',
            en: 'Onofrio della Cava came from Naples in Italy. The Republic often invited the best craftsmen from far away.',
          },
        },
        {
          q: { el: 'Τι απέγιναν τα πολλά στολίδια της κρήνης;', en: 'What happened to the fountain\'s many decorations?' },
          options: {
            el: ['Τα έκλεψαν πειρατές', 'Τα γκρέμισε ο σεισμός του 1667', 'Έλιωσαν στον ήλιο', 'Είναι όλα ακόμη εκεί'],
            en: ['Pirates stole them', 'The earthquake of 1667 knocked them off', 'They melted in the sun', 'They are all still there'],
          },
          correct: 1,
          explanation: {
            el: 'Ο μεγάλος σεισμός του 1667 έριξε σχεδόν όλα τα στολίδια. Έμειναν τα δεκαέξι πρόσωπα και ο τρούλος.',
            en: 'The great earthquake of 1667 knocked almost all the decorations off. The sixteen faces and the dome remained.',
          },
        },
      ],
    },

    // ── 3. Franciscan Monastery & Pharmacy ─────────────────────────────────────
    {
      id: 'franciscan-pharmacy',
      name: { el: 'Φραγκισκανικό Μοναστήρι και Φαρμακείο', en: 'Franciscan Monastery & Pharmacy' },
      emoji: '💊',
      lat: 42.6415,
      lng: 18.1078,
      radiusM: 60,
      riddle: {
        el: 'Πίσω από μια πόρτα στην αρχή του μεγάλου δρόμου, μοναχοί φτιάχνουν φάρμακα εδώ και 700 χρόνια. Χαμηλά στον τοίχο, ένα μικρό πέτρινο πρόσωπο προκαλεί τα παιδιά να ισορροπήσουν πάνω του.',
        en: 'Behind a door at the start of the big street, monks have been making medicines for 700 years. Low on the wall, a little stone face dares children to balance on it.',
      },
      parentHint: {
        el: 'Είναι το Φραγκισκανικό Μοναστήρι (Franjevački samostan) με το παλιό φαρμακείο του, στη δυτική άκρη του Stradun, στη βόρεια πλευρά, δίπλα στην κρήνη του Onofrio. Από την κρήνη, ακριβώς απέναντι, 1 λεπτό. Το μικρό πέτρινο κεφάλι εξέχει από τον εξωτερικό τοίχο, κοντά στην είσοδο, στο ύψος του γόνατου. Το φαρμακείο-μουσείο μέσα έχει εισιτήριο.',
        en: 'It is the Franciscan Monastery (Franjevački samostan) with its old pharmacy, at the western end of the Stradun, on the north side, next to Onofrio\'s fountain. From the fountain it is right across the way, 1 minute. The little stone head sticks out of the outer wall near the entrance, at knee height. The museum pharmacy inside needs a ticket.',
      },
      unlockQuestion: {
        question: { el: 'Το φαρμακείο άνοιξε το 1317. Πόσα χρόνια περίπου λειτουργεί;', en: 'The pharmacy opened in 1317. About how many years has it been open?' },
        options: {
          el: ['Περίπου 70', 'Περίπου 200', 'Περίπου 700', 'Περίπου 2.000'],
          en: ['About 70', 'About 200', 'About 700', 'About 2,000'],
        },
        correct: 2,
        explanation: {
          el: 'Από το 1317 μέχρι σήμερα είναι περισσότερα από 700 χρόνια! Είναι από τα πιο παλιά φαρμακεία στον κόσμο που δουλεύουν ακόμη, και πουλάει ακόμη κρέμες με παλιές συνταγές.',
          en: 'From 1317 until today is more than 700 years! It is one of the oldest pharmacies in the world still working, and it still sells creams made from old recipes.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε πάνω από τη μεγάλη πόρτα της εκκλησίας, αυτή που βλέπει στον δρόμο. Τι είναι σκαλισμένο εκεί;', en: 'Look above the big church door, the one facing the street. What is carved there?' },
        options: {
          el: ['Ένα καράβι με πανιά', 'Μια μητέρα που κρατάει τον γιο της στην αγκαλιά της', 'Ένα λιοντάρι', 'Ένα ρολόι'],
          en: ['A ship with sails', 'A mother holding her son in her lap', 'A lion', 'A clock'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι η Παναγία που κρατάει τον Χριστό, μια Pietà (Πιετά), σκαλισμένη το 1498 από τους αδελφούς Petrović. Είναι από τα λίγα κομμάτια της παλιάς εκκλησίας που άντεξαν τον σεισμό του 1667. Δίπλα της στέκονται δύο άγιοι.',
          en: 'It is Mary holding Jesus, a Pietà, carved in 1498 by the Petrović brothers. It is one of the few pieces of the old church that survived the earthquake of 1667. Two saints stand beside her.',
        },
      },
      story: {
        el: 'Οι Φραγκισκανοί μοναχοί ήρθαν στο Ντουμπρόβνικ τον 13ο αιώνα και το 1317 άρχισαν να χτίζουν το μοναστήρι τους ακριβώς δίπλα στην Πύλη Pile. Την ίδια χρονιά άνοιξαν ένα φαρμακείο για τους ίδιους και για όλη την πόλη, και από τότε δεν έκλεισε ποτέ: είναι από τα πιο παλιά φαρμακεία στον κόσμο που λειτουργούν ακόμη. Μέσα, παλιά βάζα, ζυγαριές και βιβλία με συνταγές δείχνουν πώς έφτιαχναν φάρμακα από βότανα, μέλι και λουλούδια. Το μοναστήρι έχει και ένα ήσυχο περιστύλιο με λεπτές διπλές κολόνες, όπου κάθε κιονόκρανο έχει διαφορετικό σκαλισμένο πρόσωπο ή ζώο. Πάνω από την πόρτα της εκκλησίας, μια σκαλισμένη Παναγία από το 1498 άντεξε τον σεισμό του 1667 που γκρέμισε σχεδόν όλη την εκκλησία. Έξω, κοντά στην είσοδο, ένα μικρό πέτρινο κεφάλι εξέχει από τον τοίχο: λένε ότι όποιος ισορροπήσει πάνω του θα έχει τύχη!',
        en: 'The Franciscan monks came to Dubrovnik in the 13th century and in 1317 began building their monastery right beside the Pile Gate. That same year they opened a pharmacy for themselves and for the whole town, and it has never closed: it is one of the oldest working pharmacies in the world. Inside, old jars, scales and recipe books show how medicines were mixed from herbs, honey and flowers. The monastery also has a quiet cloister with slim double columns, where each capital has a different carved face or animal. Above the church door, a carving of Mary from 1498 survived the earthquake of 1667 that destroyed most of the church. Outside, near the entrance, a small stone head sticks out of the wall: they say whoever balances on it will have good luck!',
      },
      didYouKnow: {
        el: 'Η βιβλιοθήκη του μοναστηριού φυλάει περισσότερους από 20.000 τόμους και πολλά χειρόγραφα, ανάμεσά τους παλιά βιβλία συνταγών του φαρμακείου. Το περιστύλιο σκαλίστηκε γύρω στο 1360 από τον Mihoje Brajkov από το Bar, και είναι από τα ελάχιστα μέρη του μοναστηριού που έμειναν όρθια το 1667.',
        en: 'The monastery library holds more than 20,000 volumes and many manuscripts, including old recipe books of the pharmacy. The cloister was carved around 1360 by Mihoje Brajkov of Bar, and it is one of the few parts of the monastery that stayed standing in 1667.',
      },
      quiz: [
        {
          q: { el: 'Πότε άνοιξε το φαρμακείο;', en: 'When did the pharmacy open?' },
          options: {
            el: ['Το 1317', 'Το 1667', 'Το 1991', 'Το 1817'],
            en: ['In 1317', 'In 1667', 'In 1991', 'In 1817'],
          },
          correct: 0,
          explanation: {
            el: 'Το φαρμακείο άνοιξε το 1317 και δουλεύει ακόμη, περισσότερα από 700 χρόνια αργότερα.',
            en: 'The pharmacy opened in 1317 and is still working, more than 700 years later.',
          },
        },
        {
          q: { el: 'Από τι έφτιαχναν οι μοναχοί τα φάρμακα;', en: 'What did the monks make their medicines from?' },
          options: {
            el: ['Από πλαστικό και μέταλλο', 'Μόνο από θαλασσινό νερό', 'Από βότανα, μέλι και λουλούδια', 'Από σοκολάτα'],
            en: ['Plastic and metal', 'Only sea water', 'Herbs, honey and flowers', 'Chocolate'],
          },
          correct: 2,
          explanation: {
            el: 'Τα φάρμακα γίνονταν από βότανα, μέλι και λουλούδια, με συνταγές γραμμένες σε παλιά βιβλία.',
            en: 'The medicines were made from herbs, honey and flowers, following recipes written in old books.',
          },
        },
        {
          q: { el: 'Τι δείχνει το σκάλισμα πάνω από την πόρτα της εκκλησίας;', en: 'What does the carving above the church door show?' },
          options: {
            el: ['Έναν ιππότη', 'Έναν δράκο', 'Ένα καράβι', 'Την Παναγία που κρατάει τον Χριστό'],
            en: ['A knight', 'A dragon', 'A ship', 'Mary holding Jesus'],
          },
          correct: 3,
          explanation: {
            el: 'Η σκαλισμένη Παναγία με τον Χριστό είναι από το 1498 και άντεξε τον μεγάλο σεισμό του 1667.',
            en: 'The carving of Mary holding Jesus dates from 1498 and survived the great earthquake of 1667.',
          },
        },
      ],
    },

    // ── 4. Stradun ─────────────────────────────────────────────────────────────
    {
      id: 'stradun',
      name: { el: 'Stradun', en: 'Stradun' },
      emoji: '🧱',
      lat: 42.6410,
      lng: 18.1088,
      radiusM: 60,
      riddle: {
        el: 'Κάποτε εδώ κολυμπούσαν ψάρια: ο πιο φαρδύς δρόμος της πόλης ήταν θάλασσα που χώριζε ένα νησί από τη στεριά. Σήμερα οι πέτρες του γυαλίζουν σαν καθρέφτης από τα εκατομμύρια βήματα.',
        en: 'Fish once swam here: the widest street in town was a sea channel dividing an island from the mainland. Today its stones shine like a mirror from millions of footsteps.',
      },
      parentHint: {
        el: 'Είναι το Stradun (Στραντούν), που επίσημα λέγεται Placa (Πλάτσα), ο κεντρικός δρόμος της παλιάς πόλης. Από το μοναστήρι περπατήστε ανατολικά και σταθείτε περίπου στη μέση του δρόμου, 2 λεπτά.',
        en: 'It is the Stradun, officially called Placa, the main street of the old town. From the monastery walk east to about halfway along the street, 2 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ο δρόμος ήταν κάποτε θάλασσα. Πώς έγινε δρόμος;', en: 'The riddle says the street was once the sea. How did it become a street?' },
        options: {
          el: ['Η θάλασσα στέγνωσε από τον ήλιο', 'Οι άνθρωποι γέμισαν το κανάλι με χώμα και πέτρες', 'Έχτισαν μια γέφυρα πάνω από το νερό', 'Η θάλασσα πάγωσε'],
          en: ['The sea dried up in the sun', 'People filled the channel with earth and stones', 'A bridge was built over the water', 'The sea froze'],
        },
        correct: 1,
        explanation: {
          el: 'Το ρηχό κανάλι γεμίστηκε με χώμα και πέτρες γύρω στον 11ο–12ο αιώνα. Έτσι το νησί και η στεριά ενώθηκαν σε μία πόλη, και το κανάλι έγινε ο κεντρικός δρόμος.',
          en: 'The shallow channel was filled with earth and stones around the 11th or 12th century. That joined the island and the mainland into one city, and the channel became the main street.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τις πόρτες των μαγαζιών δεξιά και αριστερά στον δρόμο. Τι σχήμα έχουν;', en: 'Look at the shop fronts on both sides of the street. What shape are they?' },
        options: {
          el: ['Μια τετράγωνη πόρτα με ένα στρογγυλό παράθυρο από πάνω', 'Μια πόρτα και ένα παράθυρο μαζί, κάτω από μία καμάρα', 'Μια τριγωνική πόρτα', 'Μια στρογγυλή πόρτα σαν φινιστρίνι καραβιού'],
          en: ['A square door with a round window above it', 'A door and a window together under one arch', 'A triangular door', 'A round door like a ship\'s porthole'],
        },
        correct: 1,
        explanation: {
          el: 'Αυτό το σχήμα λέγεται na koljeno (να κόλιενο), «στο γόνατο». Η πόρτα είναι στη μία πλευρά και το παράθυρο στην άλλη, κάτω από την ίδια καμάρα. Ο έμπορος πουλούσε πάνω από το περβάζι του παραθύρου, σαν πάγκο!',
          en: 'This shape is called na koljeno, “at the knee”. The door is on one side and the window on the other, under the same arch. The shopkeeper sold goods over the window ledge, like a counter!',
        },
      },
      story: {
        el: 'Το Stradun έχει μήκος περίπου 300 μέτρα, και είναι ο λόγος που υπάρχει το Ντουμπρόβνικ. Παλιά υπήρχαν δύο πόλεις: μία πάνω σε ένα βραχώδες νησί και μία στην κατάφυτη πλαγιά απέναντι, με ένα ρηχό θαλάσσιο κανάλι ανάμεσά τους. Γύρω στον 11ο–12ο αιώνα το κανάλι γεμίστηκε, οι δύο πόλεις έγιναν μία και γεννήθηκε ο καινούργιος δρόμος. Μετά τον μεγάλο σεισμό του 1667 τα σπίτια του ξαναχτίστηκαν όλα με τον ίδιο τρόπο: ίδιο ύψος, ίδια πέτρα, και μαγαζιά με πόρτα και παράθυρο κάτω από μία καμάρα, ένα στιλ που λέγεται na koljeno. Το ασβεστολιθικό πλακόστρωτο, που στρώθηκε το 1468, έχει γυαλιστεί από τόσα πόδια που λάμπει σαν γυαλί, ειδικά μετά τη βροχή. Πρόσεχε, γλιστράει!',
        en: 'The Stradun is about 300 metres long, and it is the reason Dubrovnik exists. Long ago there were two towns: one on a rocky island, the other on the wooded slope opposite, with a shallow sea channel between them. Around the 11th or 12th century the channel was filled in, the two towns became one, and the new street was born. After the great earthquake of 1667 the houses along it were all rebuilt the same way: same height, same stone, and shops with a door and a window sharing one arch, a style called na koljeno. The limestone paving, laid in 1468, has been polished by so many feet that it shines like glass, especially after rain. Watch your step, it can be slippery!',
      },
      didYouKnow: {
        el: 'Το επίσημο όνομα του δρόμου είναι Placa· «Stradun» είναι παρατσούκλι από την ιταλική λέξη stradone, «μεγάλος δρόμος». Το όνομα Dubrovnik προέρχεται από το dubrava, το δάσος από βελανιδιές που κάλυπτε την πλαγιά, ενώ η Ragusa ήταν το όνομα του νησιού. Τα ομοιόμορφα σπίτια οφείλονται σε κανόνες που ψήφισε η Δημοκρατία μετά το 1667, ώστε η πόλη να ξαναχτιστεί γρήγορα και με τάξη.',
        en: 'The street\'s official name is Placa; “Stradun” is a nickname from the Italian stradone, “big street”. The name Dubrovnik comes from dubrava, the oak forest that once covered the slope, while Ragusa was the name of the island. The uniform houses are the result of rules passed by the Republic after 1667, so that the city could be rebuilt quickly and in good order.',
      },
      quiz: [
        {
          q: { el: 'Τι υπήρχε εδώ πριν γίνει δρόμος;', en: 'What was here before it became a street?' },
          options: {
            el: ['Ένα δάσος', 'Ένα βουνό', 'Ένα γήπεδο', 'Ένα θαλάσσιο κανάλι'],
            en: ['A forest', 'A mountain', 'A football field', 'A sea channel'],
          },
          correct: 3,
          explanation: {
            el: 'Ένα ρηχό θαλάσσιο κανάλι χώριζε το νησί από τη στεριά. Όταν γεμίστηκε, οι δύο πόλεις έγιναν μία.',
            en: 'A shallow sea channel separated the island from the mainland. When it was filled in, the two towns became one.',
          },
        },
        {
          q: { el: 'Πότε στρώθηκε το πέτρινο πλακόστρωτο;', en: 'When was the stone paving laid?' },
          options: {
            el: ['Το 1067', 'Το 1468', 'Το 1991', 'Το 2010'],
            en: ['In 1067', 'In 1468', 'In 1991', 'In 2010'],
          },
          correct: 1,
          explanation: {
            el: 'Το πλακόστρωτο στρώθηκε το 1468, και από τότε το γυαλίζουν τα βήματα των ανθρώπων.',
            en: 'The paving was laid in 1468, and people\'s footsteps have been polishing it ever since.',
          },
        },
        {
          q: { el: 'Τι περιγράφουν οι λέξεις «na koljeno»;', en: 'What do the words “na koljeno” describe?' },
          options: {
            el: ['Ένα είδος καραβιού', 'Μια καμπάνα', 'Ένα μαγαζί με πόρτα και παράθυρο κάτω από μία καμάρα', 'Μια κρήνη'],
            en: ['A kind of ship', 'A bell', 'A shop with a door and a window under one arch', 'A fountain'],
          },
          correct: 2,
          explanation: {
            el: 'Na koljeno σημαίνει «στο γόνατο»: πόρτα και παράθυρο μαζί κάτω από μία καμάρα, με το περβάζι του παραθύρου για πάγκο.',
            en: 'Na koljeno means “at the knee”: a door and a window together under one arch, with the window ledge used as a counter.',
          },
        },
      ],
    },

    // ── 5. Orlando's Column ────────────────────────────────────────────────────
    {
      id: 'orlando-column',
      name: { el: 'Στήλη του Orlando', en: 'Orlando\'s Column' },
      emoji: '🗡️',
      lat: 42.6408,
      lng: 18.1103,
      radiusM: 40,
      riddle: {
        el: 'Ένας πέτρινος ιππότης στέκεται στη μέση της πλατείας εδώ και 600 χρόνια. Το μπράτσο του ήταν το μέτρο της πόλης: αγόραζες τόσο ύφασμα όσο ήταν μακρύ το χέρι του!',
        en: 'A stone knight has stood in the middle of the square for 600 years. His arm was the city\'s ruler: you bought cloth by the length of his forearm!',
      },
      parentHint: {
        el: 'Είναι η Στήλη του Orlando (Orlandov stup) στην πλατεία Luža (Λούζα), στην ανατολική άκρη του Stradun. Περπατήστε όλο το Stradun προς τα ανατολικά, 4 λεπτά· η στήλη στέκεται μπροστά στην εκκλησία του Αγίου Βλασίου.',
        en: 'It is Orlando\'s Column (Orlandov stup) in Luža square, at the eastern end of the Stradun. Walk the whole Stradun eastwards, 4 minutes; the column stands in front of the church of St Blaise.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το μπράτσο του ιππότη ήταν το μέτρο της πόλης. Γιατί χρειαζόταν μια πόλη ένα επίσημο μέτρο;', en: 'The riddle says the knight\'s forearm was the city\'s measure. Why did a city need an official measure?' },
        options: {
          el: ['Για να μετράνε όλοι το ίδιο και να μην κλέβουν οι έμποροι', 'Για να ξέρουν πόσο ψηλός ήταν ο ιππότης', 'Για να μετρήσουν τη θάλασσα', 'Για να χτίσουν μια πισίνα'],
          en: ['So that everyone measured the same and merchants could not cheat', 'To know how tall the knight was', 'To measure the sea', 'To build a swimming pool'],
        },
        correct: 0,
        explanation: {
          el: 'Πριν από τα μέτρα και τα εκατοστά, κάθε πόλη είχε το δικό της μέτρο. Ο «πήχης του Ντουμπρόβνικ» ήταν 51,2 εκατοστά, όσο το μπράτσο του Orlando, και ήταν σκαλισμένος στη βάση της στήλης για να τον ελέγχει όποιος ήθελε.',
          en: 'Before metres and centimetres, every city had its own measure. The “Dubrovnik elbow” was 51.2 centimetres, the length of Orlando\'s forearm, and it was carved at the base of the column so that anyone could check it.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε καλά τον ιππότη. Τι κρατάει στα χέρια του;', en: 'Look closely at the knight. What is he holding in his hands?' },
        options: {
          el: ['Μια σημαία και μια τρομπέτα', 'Ένα βιβλίο και μια πένα', 'Ένα σπαθί και μια ασπίδα', 'Ένα ψάρι και ένα δίχτυ'],
          en: ['A flag and a trumpet', 'A book and a pen', 'A sword and a shield', 'A fish and a net'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Orlando κρατάει το σπαθί του όρθιο και μια ασπίδα. Είναι ιππότης-φύλακας: δείχνει ότι η πόλη είναι ελεύθερη και έτοιμη να υπερασπιστεί τον εαυτό της. Ψάξε και τη σκαλισμένη γραμμή στη βάση, το παλιό μέτρο!',
          en: 'Orlando holds his sword upright and a shield. He is a guardian knight: he shows that the city is free and ready to defend itself. Look for the carved line at the base too, the old measure!',
        },
      },
      story: {
        el: 'Αυτός ο ιππότης είναι ο Orlando (Ορλάντο), δηλαδή ο Ρολάνδος, ένας διάσημος ήρωας παλιών ιστοριών, και η στήλη του στήθηκε το 1418 στη μέση της κεντρικής πλατείας. Τέτοιες στήλες υπήρχαν σε πολλές ελεύθερες εμπορικές πόλεις της Ευρώπης, και το Ντουμπρόβνικ έστησε τη δική του για να πει: είμαστε ελεύθεροι και εμπορευόμαστε με όλους. Τις μέρες των γιορτών, από την κορυφή κυμάτιζε η λευκή σημαία της Δημοκρατίας με τη λέξη Libertas. Το μπράτσο του Orlando είχε και μια πολύ πρακτική δουλειά: ήταν το επίσημο μέτρο της Δημοκρατίας, ο «πήχης του Ντουμπρόβνικ», 51,2 εκατοστά. Μια γραμμή με το ίδιο μήκος είναι σκαλισμένη στη βάση, για να την ελέγχει ο έμπορος που πουλούσε ύφασμα. Το 1825 μια καταιγίδα έριξε τη στήλη· η πόλη την έστησε ξανά με προσοχή.',
        en: 'This knight is Orlando, in French Roland, a famous hero of old stories, and his column was raised in 1418 in the middle of the main square. Columns like this stood in many free trading towns of Europe, and Dubrovnik put one up to say: we are free and we trade with everyone. On feast days the white flag of the Republic with the word Libertas flew from the top. Orlando\'s forearm had a very practical job too: it was the official measure of the Republic, the “Dubrovnik elbow” of 51.2 centimetres. A line of the same length is carved at the base, so that a merchant selling cloth could check it right there. In 1825 a storm blew the column down; the city carefully put it back up.',
      },
      didYouKnow: {
        el: 'Ο τοπικός θρύλος λέει ότι ο Ρολάνδος βοήθησε το Ντουμπρόβνικ να νικήσει Σαρακηνούς πειρατές, αν και ο πραγματικός Ρολάνδος πέθανε το 778 στα Πυρηναία, πριν καν υπάρξει η πόλη ως δύναμη· η ιστορία «δανείστηκε» για να δώσει στη στήλη έναν ήρωα. Το άγαλμα σκάλισε ο Bonino από το Μιλάνο, και μετά την πτώση του 1825 η στήλη ξαναστήθηκε το 1878.',
        en: 'Local legend says Roland helped Dubrovnik defeat Saracen pirates, although the real Roland died in 778 in the Pyrenees, long before the city was a power; the story was “borrowed” to give the column a hero. The statue was carved by Bonino of Milan, and after its fall in 1825 the column was re-erected in 1878.',
      },
      quiz: [
        {
          q: { el: 'Πότε στήθηκε η στήλη;', en: 'When was the column raised?' },
          options: {
            el: ['Το 2018', 'Το 1418', 'Το 971', 'Το 1667'],
            en: ['In 2018', 'In 1418', 'In 971', 'In 1667'],
          },
          correct: 1,
          explanation: {
            el: 'Η στήλη του Orlando στήθηκε το 1418, πριν από περισσότερα από 600 χρόνια.',
            en: 'Orlando\'s column was raised in 1418, more than 600 years ago.',
          },
        },
        {
          q: { el: 'Τι είναι ο «πήχης του Ντουμπρόβνικ»;', en: 'What is the “Dubrovnik elbow”?' },
          options: {
            el: ['Το επίσημο μέτρο της Δημοκρατίας', 'Ένα σάντουιτς', 'Ένας χορός', 'Ένα φρούριο'],
            en: ['The official measure of the Republic', 'A sandwich', 'A dance', 'A fort'],
          },
          correct: 0,
          explanation: {
            el: 'Ο πήχης του Ντουμπρόβνικ ήταν το επίσημο μέτρο μήκους, 51,2 εκατοστά, όσο το μπράτσο του Orlando.',
            en: 'The Dubrovnik elbow was the official measure of length, 51.2 centimetres, the length of Orlando\'s forearm.',
          },
        },
        {
          q: { el: 'Τι κυμάτιζε από την κορυφή της στήλης τις μέρες των γιορτών;', en: 'What flew from the top of the column on feast days?' },
          options: {
            el: ['Ένας χαρταετός', 'Ένα φανάρι', 'Μια πειρατική σημαία', 'Η λευκή σημαία της Δημοκρατίας με τη λέξη Libertas'],
            en: ['A kite', 'A lantern', 'A pirate flag', 'The white flag of the Republic with the word Libertas'],
          },
          correct: 3,
          explanation: {
            el: 'Η λευκή σημαία με τη λέξη Libertas, «Ελευθερία», κυμάτιζε από τη στήλη τις μεγάλες γιορτές.',
            en: 'The white flag with the word Libertas, “Freedom”, flew from the column on the big feast days.',
          },
        },
      ],
    },

    // ── 6. Sponza Palace & Clock Tower ─────────────────────────────────────────
    {
      id: 'sponza-palace',
      name: { el: 'Παλάτι Sponza και Πύργος του Ρολογιού', en: 'Sponza Palace & Clock Tower' },
      emoji: '🕰️',
      lat: 42.6410,
      lng: 18.1105,
      radiusM: 40,
      riddle: {
        el: 'Δύο πράσινοι χάλκινοι άντρες χτυπούν μια καμπάνα ψηλά σε έναν πύργο, και δίπλα ένα παλάτι με καμάρες άντεξε τον σεισμό που γκρέμισε σχεδόν όλα τα άλλα.',
        en: 'Two green bronze men strike a bell high on a tower, and beside it a building of arches survived the earthquake that knocked down almost everything else.',
      },
      parentHint: {
        el: 'Είναι το Παλάτι Sponza (Σπόντζα) και ο Πύργος του Ρολογιού, στη βορειοανατολική γωνία της πλατείας Luža, ακριβώς δίπλα στη στήλη του Orlando, 30 δευτερόλεπτα. Ο πύργος είναι ο ψηλός που κλείνει το Stradun στην ανατολική άκρη.',
        en: 'It is the Sponza Palace and the Clock Tower, in the north-east corner of Luža square, right beside Orlando\'s column, 30 seconds. The tower is the tall one closing off the Stradun at its eastern end.',
      },
      unlockQuestion: {
        question: { el: 'Οι δύο φιγούρες στον πύργο είναι από μπρούντζο. Γιατί, λες, έχουν γίνει πράσινες;', en: 'The two figures on the tower are made of bronze. Why do you think they have turned green?' },
        options: {
          el: ['Τις έβαψαν πράσινες για τη γιορτή', 'Ο μπρούντζος πρασινίζει με τον καιρό και τον θαλασσινό αέρα', 'Είναι φτιαγμένες από χορτάρι', 'Ζηλεύουν την καμπάνα'],
          en: ['They were painted green for the festival', 'Bronze turns green with time and sea air', 'They are made of grass', 'They are jealous of the bell'],
        },
        correct: 1,
        explanation: {
          el: 'Ο μπρούντζος, όταν μένει χρόνια στον αέρα και στην υγρασία, αποκτά ένα πράσινο στρώμα που λέγεται πατίνα. Το ίδιο έχει πάθει το Άγαλμα της Ελευθερίας! Οι ντόπιοι λένε τις φιγούρες Zelenci (Ζελέντσι), «οι πράσινοι».',
          en: 'Bronze that stays in the open air and damp for years grows a green layer called patina. The Statue of Liberty has the same! Locals call the figures Zelenci, “the green ones”.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά στον πύργο, δίπλα στην καμπάνα. Τι κρατούν οι δύο πράσινες φιγούρες;', en: 'Look high up on the tower, next to the bell. What are the two green figures holding?' },
        options: {
          el: ['Σφυριά', 'Σπαθιά', 'Τρομπέτες', 'Σημαίες'],
          en: ['Hammers', 'Swords', 'Trumpets', 'Flags'],
        },
        correct: 0,
        explanation: {
          el: 'Κρατούν σφυριά και χτυπούν την καμπάνα κάθε ώρα. Οι ντόπιοι τους λένε Maro και Baro. Αυτές που βλέπεις είναι αντίγραφα· οι αυθεντικές, πολύ παλιές, φυλάγονται μέσα στο Παλάτι Sponza.',
          en: 'They hold hammers and strike the bell every hour. Locals call them Maro and Baro. The ones you see are copies; the very old originals are kept inside the Sponza Palace.',
        },
      },
      story: {
        el: 'Το Παλάτι Sponza τελείωσε το 1522 και ήταν το πιο πολυσύχναστο κτίριο της Δημοκρατίας. Κάθε σακί σιτάρι, κάθε τόπι ύφασμα και κάθε βαρέλι που έμπαινε στο Ντουμπρόβνικ ζυγιζόταν εδώ, στο τελωνείο· στον τοίχο, μια λατινική επιγραφή προειδοποιεί ότι η ζυγαριά δεν πρέπει ποτέ να κλέβει, γιατί ζυγίζει και ο ίδιος ο Θεός. Στον πάνω όροφο το νομισματοκοπείο έφτιαχνε τα νομίσματα της πόλης, και το παλάτι φύλαγε και το θησαυροφυλάκιο. Όταν ο σεισμός του 1667 ισοπέδωσε το μεγαλύτερο μέρος της πόλης, το Sponza έμεινε όρθιο, γι\' αυτό σήμερα μοιάζει σχεδόν όπως πριν από 500 χρόνια. Δίπλα του υψώνεται ο Πύργος του Ρολογιού, περίπου 31 μέτρα. Δύο μπρούντζινες φιγούρες, οι Zelenci, χτυπούν την καμπάνα κάθε ώρα, και κάτω από το στρογγυλό καντράν η ώρα φαίνεται με αριθμούς, σαν ψηφιακό ρολόι φτιαγμένο πολύ πριν από τον ηλεκτρισμό.',
        en: 'Sponza Palace was finished in 1522 and was the busiest building in the Republic. Every sack of grain, every roll of cloth and every barrel that came into Dubrovnik was weighed here, in the customs house; on the wall a Latin inscription warns that the scales must never cheat, because God himself is weighing too. Upstairs the mint made the city\'s coins, and the palace also kept the treasury. When the earthquake of 1667 flattened most of the city, Sponza stayed standing, so today it looks much as it did 500 years ago. Beside it rises the Clock Tower, about 31 metres tall. Two bronze figures, the Zelenci, hammer the bell every hour, and below the round dial the hour appears as numbers, like a digital clock made long before electricity.',
      },
      didYouKnow: {
        el: 'Η επιγραφή στο αίθριο του Sponza λέει: «Τα ζύγια μας δεν μας αφήνουν ούτε να εξαπατούμε ούτε να εξαπατηθούμε· όταν ζυγίζω τα εμπορεύματα, ο ίδιος ο Θεός ζυγίζει μαζί μου». Σήμερα το παλάτι στεγάζει τα Κρατικά Αρχεία, με έγγραφα που φτάνουν ως τον 12ο αιώνα. Ο Πύργος του Ρολογιού χτίστηκε το 1444, αλλά ξαναχτίστηκε το 1929 επειδή είχε αρχίσει να γέρνει.',
        en: 'The inscription in the Sponza atrium reads: “Our weights forbid us to cheat and to be cheated; when I weigh the goods, God himself weighs with me.” Today the palace houses the State Archives, with documents going back to the 12th century. The Clock Tower was built in 1444 but rebuilt in 1929 because it had started to lean.',
      },
      quiz: [
        {
          q: { el: 'Σε τι χρησίμευε το Παλάτι Sponza;', en: 'What was the Sponza Palace used for?' },
          options: {
            el: ['Για πισίνα', 'Για στάβλο', 'Για τελωνείο και νομισματοκοπείο', 'Για φάρο'],
            en: ['A swimming pool', 'A stable', 'A customs house and mint', 'A lighthouse'],
          },
          correct: 2,
          explanation: {
            el: 'Στο Sponza ζύγιζαν τα εμπορεύματα που έμπαιναν στην πόλη και έκοβαν τα νομίσματα της Δημοκρατίας.',
            en: 'At Sponza the goods entering the city were weighed, and the Republic\'s coins were made.',
          },
        },
        {
          q: { el: 'Τι έπαθε το Sponza στον σεισμό του 1667;', en: 'What happened to Sponza in the earthquake of 1667?' },
          options: {
            el: ['Βούλιαξε', 'Κάηκε', 'Γύρισε ανάποδα', 'Έμεινε όρθιο'],
            en: ['It sank', 'It burned', 'It turned upside down', 'It stayed standing'],
          },
          correct: 3,
          explanation: {
            el: 'Το Sponza ήταν από τα λίγα κτίρια που έμειναν όρθια το 1667, γι\' αυτό μοιάζει ακόμη όπως πριν από 500 χρόνια.',
            en: 'Sponza was one of the few buildings that stayed standing in 1667, which is why it still looks as it did 500 years ago.',
          },
        },
        {
          q: { el: 'Τι το ιδιαίτερο έχει το ρολόι του πύργου;', en: 'What is special about the clock on the tower?' },
          options: {
            el: ['Πηγαίνει ανάποδα', 'Δείχνει την ώρα με αριθμούς, σαν ψηφιακό ρολόι', 'Είναι από σοκολάτα', 'Δουλεύει μόνο τη νύχτα'],
            en: ['It runs backwards', 'It shows the hour as numbers, like a digital clock', 'It is made of chocolate', 'It only works at night'],
          },
          correct: 1,
          explanation: {
            el: 'Κάτω από το στρογγυλό καντράν, η ώρα φαίνεται με αριθμούς, όπως σε ψηφιακό ρολόι, αν και το ρολόι είναι εκατοντάδων ετών.',
            en: 'Below the round dial, the hour is shown as numbers, like a digital clock, even though the clock is hundreds of years old.',
          },
        },
      ],
    },

    // ── 7. Church of St Blaise ─────────────────────────────────────────────────
    {
      id: 'st-blaise-church',
      name: { el: 'Εκκλησία του Αγίου Βλασίου', en: 'Church of St Blaise' },
      emoji: '⛪',
      lat: 42.6407,
      lng: 18.1099,
      radiusM: 40,
      riddle: {
        el: 'Στην κορυφή αυτής της εκκλησίας με τα φαρδιά σκαλιά στέκεται ο προστάτης της πόλης. Λένε ότι ένα βράδυ, πριν από χίλια χρόνια, ξύπνησε τους κατοίκους για να τους σώσει.',
        en: 'On top of this church with the wide steps stands the city\'s protector. They say that one night, a thousand years ago, he woke the townsfolk to save them.',
      },
      parentHint: {
        el: 'Είναι η Εκκλησία του Αγίου Βλασίου (Crkva svetog Vlaha), στην πλατεία Luža, απέναντι από το Sponza και πίσω από τη στήλη του Orlando. Περάστε απλώς την πλατεία, 30 δευτερόλεπτα, και σταθείτε στα σκαλιά της.',
        en: 'It is the Church of St Blaise (Crkva svetog Vlaha), on Luža square, opposite Sponza and behind Orlando\'s column. Just cross the square, 30 seconds, and stand at its steps.',
      },
      unlockQuestion: {
        question: { el: 'Σύμφωνα με τον θρύλο, από ποιον κίνδυνο προειδοποίησε ο άγιος την πόλη το 971;', en: 'According to the legend, what danger did the saint warn the city about in 971?' },
        options: {
          el: ['Από έναν δράκο', 'Από καράβια της Βενετίας που ετοίμαζαν επίθεση', 'Από μια πλημμύρα', 'Από ποντίκια'],
          en: ['A dragon', 'Ships from Venice preparing an attack', 'A flood', 'Mice'],
        },
        correct: 1,
        explanation: {
          el: 'Ο θρύλος λέει ότι βενετσιάνικα καράβια άραξαν έξω από την πόλη κάνοντας τους φίλους. Ο άγιος εμφανίστηκε στο όνειρο ενός ιερέα και τον προειδοποίησε. Οι πύλες έκλεισαν, και η πόλη σώθηκε. Από τότε τον γιορτάζουν κάθε 3 Φεβρουαρίου.',
          en: 'The legend says Venetian ships anchored outside the city pretending to be friends. The saint appeared in a priest\'s dream and warned him. The gates were shut, and the city was saved. Since then he has been celebrated every 3 February.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε την κορυφή της πρόσοψης της εκκλησίας. Τι κρατάει ο άγιος εκεί ψηλά;', en: 'Look at the very top of the church front. What is the saint up there holding?' },
        options: {
          el: ['Ένα μικρό μοντέλο της πόλης', 'Ένα ψάρι', 'Ένα σπαθί', 'Μια καμπάνα'],
          en: ['A small model of the city', 'A fish', 'A sword', 'A bell'],
        },
        correct: 0,
        explanation: {
          el: 'Όπως και στην πύλη, ο Άγιος Βλάσιος κρατάει το Ντουμπρόβνικ στα χέρια του. Ψάξε τα τείχη και τους πύργους σε μικρογραφία!',
          en: 'Just like at the gate, Saint Blaise holds Dubrovnik in his hands. Look for the walls and towers in miniature!',
        },
      },
      story: {
        el: 'Ο Άγιος Βλάσιος, ο Sveti Vlaho, είναι ο προστάτης του Ντουμπρόβνικ. Ο θρύλος λέει ότι το 971 βενετσιάνικα καράβια άραξαν κοντά στην πόλη κάνοντας τους φίλους, αλλά ο άγιος εμφανίστηκε στο όνειρο ενός ιερέα, του Stojko (Στόικο), και τον προειδοποίησε. Οι πύλες έκλεισαν, τα τείχη φυλάχτηκαν, και η πόλη σώθηκε. Από τότε το Ντουμπρόβνικ τον τιμά κάθε 3 Φεβρουαρίου με μια μεγάλη πομπή γεμάτη σημαίες. Αυτή η εκκλησία χτίστηκε από το 1706 ως το 1715 από έναν Βενετό αρχιτέκτονα, αφού η παλιότερη έπαθε ζημιές στον σεισμό του 1667 και μετά κάηκε το 1706. Ένας θησαυρός γλίτωσε από εκείνη τη φωτιά: ένα ασημένιο άγαλμα του αγίου με ένα μοντέλο της πόλης, που φυλάγεται ακόμη μέσα. Το μοντέλο δείχνει το Ντουμπρόβνικ όπως ήταν πριν από τον σεισμό.',
        en: 'Saint Blaise, Sveti Vlaho, is the protector of Dubrovnik. The legend says that in 971 Venetian ships anchored near the city pretending to be friends, but the saint appeared in a dream to a priest named Stojko and warned him. The gates were shut, the walls were guarded, and the city was safe. Since then Dubrovnik has honoured him every 3 February with a great procession full of flags. This church was built between 1706 and 1715 by a Venetian architect, after an older church was damaged by the earthquake of 1667 and then burned in 1706. One treasure survived that fire: a silver statue of the saint holding a model of the city, still kept inside. The model shows Dubrovnik as it looked before the earthquake.',
      },
      didYouKnow: {
        el: 'Η γιορτή του Αγίου Βλασίου (Festa svetog Vlaha) είναι από το 2009 στον κατάλογο άυλης πολιτιστικής κληρονομιάς της UNESCO. Το ασημένιο άγαλμα του 15ου αιώνα, με το μοντέλο της πόλης πριν από το 1667, είναι από τις ελάχιστες εικόνες που δείχνουν πώς ήταν το Ντουμπρόβνικ πριν από τον σεισμό. Αρχιτέκτονας της εκκλησίας ήταν ο Marino Gropelli από τη Βενετία.',
        en: 'The Festival of Saint Blaise (Festa svetog Vlaha) has been on UNESCO\'s list of intangible cultural heritage since 2009. The 15th-century silver statue, with its model of the pre-1667 city, is one of the very few images showing what Dubrovnik looked like before the earthquake. The church\'s architect was Marino Gropelli of Venice.',
      },
      quiz: [
        {
          q: { el: 'Ποιον προειδοποίησε ο άγιος στον θρύλο;', en: 'Who did the saint warn in the legend?' },
          options: {
            el: ['Έναν ιερέα που τον έλεγαν Stojko', 'Έναν ψαρά που τον έλεγαν Marko', 'Έναν βασιλιά', 'Έναν πειρατή'],
            en: ['A priest named Stojko', 'A fisherman named Marko', 'A king', 'A pirate'],
          },
          correct: 0,
          explanation: {
            el: 'Ο άγιος εμφανίστηκε στο όνειρο του ιερέα Stojko και του είπε για τα καράβια που ετοίμαζαν επίθεση.',
            en: 'The saint appeared in the dream of the priest Stojko and told him about the ships preparing an attack.',
          },
        },
        {
          q: { el: 'Πότε γιορτάζει η πόλη τον άγιο;', en: 'When does the city celebrate the saint?' },
          options: {
            el: ['Την 1η Ιανουαρίου', 'Στις 25 Δεκεμβρίου', 'Στις 3 Φεβρουαρίου', 'Στις 15 Αυγούστου'],
            en: ['On 1 January', 'On 25 December', 'On 3 February', 'On 15 August'],
          },
          correct: 2,
          explanation: {
            el: 'Κάθε 3 Φεβρουαρίου μια μεγάλη πομπή με σημαίες περνάει από την πόλη για τον Άγιο Βλάσιο.',
            en: 'Every 3 February a great procession with flags passes through the city for Saint Blaise.',
          },
        },
        {
          q: { el: 'Τι γλίτωσε από τη φωτιά του 1706;', en: 'What survived the fire of 1706?' },
          options: {
            el: ['Η στέγη', 'Το ασημένιο άγαλμα του αγίου με το μοντέλο της πόλης', 'Οι καμπάνες', 'Οι πόρτες'],
            en: ['The roof', 'The silver statue of the saint with the model of the city', 'The bells', 'The doors'],
          },
          correct: 1,
          explanation: {
            el: 'Το ασημένιο άγαλμα με το μοντέλο της παλιάς πόλης σώθηκε από τη φωτιά και φυλάγεται ακόμη μέσα στην εκκλησία.',
            en: 'The silver statue with the model of the old city was saved from the fire and is still kept inside the church.',
          },
        },
      ],
    },

    // ── 8. Rector's Palace ─────────────────────────────────────────────────────
    {
      id: 'rectors-palace',
      name: { el: 'Παλάτι του Ρέκτορα', en: 'Rector\'s Palace' },
      emoji: '🏛️',
      lat: 42.6404,
      lng: 18.1104,
      radiusM: 60,
      riddle: {
        el: 'Σε αυτό το κτίριο ο άρχοντας της πόλης κυβερνούσε μόνο για έναν μήνα και δεν επιτρεπόταν να βγει έξω. Πάνω από μια πόρτα, τα λόγια λένε: «Ξεχάστε τα δικά σας, φροντίστε τα κοινά».',
        en: 'In this building the ruler of the city governed for just one month and was not allowed to go out. Above a door, the words say: “Forget your own affairs, take care of public ones.”',
      },
      parentHint: {
        el: 'Είναι το Παλάτι του Ρέκτορα (Knežev dvor, το Παλάτι του Κνεζ), στον δρόμο Pred Dvorom, 1 λεπτό νότια από την πλατεία Luža, μετά το Δημαρχείο, προς τον Καθεδρικό. Η στοά με τις κολόνες φαίνεται δωρεάν από τον δρόμο· το μουσείο μέσα έχει εισιτήριο.',
        en: 'It is the Rector\'s Palace (Knežev dvor), on the street Pred Dvorom, 1 minute south of Luža square, past the Town Hall, towards the Cathedral. The porch with its columns can be seen for free from the street; the museum inside needs a ticket.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί, λες, η Δημοκρατία της Ραγούζας άλλαζε άρχοντα κάθε μήνα;', en: 'Why do you think the Republic of Ragusa changed its ruler every month?' },
        options: {
          el: ['Γιατί η δουλειά ήταν βαρετή', 'Για να μην μπορεί κανείς να γίνει βασιλιάς και να κρατήσει όλη την εξουσία', 'Γιατί είχαν πάρα πολλούς άρχοντες', 'Γιατί το παλάτι ήταν μικρό'],
          en: ['Because the job was boring', 'So that nobody could become a king and keep all the power', 'Because they had too many rulers', 'Because the palace was small'],
        },
        correct: 1,
        explanation: {
          el: 'Ένας μήνας είναι πολύ λίγος για να γίνει κάποιος παντοδύναμος. Έτσι η μικρή Δημοκρατία έμεινε ελεύθερη και χωρίς βασιλιά για εκατοντάδες χρόνια.',
          en: 'A month is far too short for anyone to become all-powerful. That is how the little Republic stayed free, with no king, for hundreds of years.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τις καμάρες της στοάς μπροστά στο παλάτι. Πόσες είναι;', en: 'Count the arches of the porch in front of the palace. How many are there?' },
        options: {
          el: ['Τέσσερις', 'Πέντε', 'Έξι', 'Οκτώ'],
          en: ['Four', 'Five', 'Six', 'Eight'],
        },
        correct: 2,
        explanation: {
          el: 'Έξι καμάρες, πάνω σε πέντε κολόνες και δύο μισές κολόνες στις άκρες. Κοίταξε τα σκαλιστά κιονόκρανα: αυτό στη δεξιά άκρη δείχνει τον Ασκληπιό, τον αρχαίο θεό της ιατρικής, στο εργαστήριό του.',
          en: 'Six arches, resting on five columns and two half-columns at the ends. Look at the carved capitals: the one at the right-hand end shows Aesculapius, the ancient god of medicine, in his workshop.',
        },
      },
      story: {
        el: 'Η Δημοκρατία της Ραγούζας δεν είχε βασιλιά. Ο άρχοντάς της, ο Ρέκτορας (στα κροατικά Knez, Κνεζ), εκλεγόταν ανάμεσα στους ευγενείς για έναν μόνο μήνα, και εκείνον τον μήνα ζούσε σε αυτό το παλάτι και έβγαινε μόνο για επίσημες υποχρεώσεις. Μετά έπαιρνε τη θέση του κάποιος άλλος. Έτσι κανείς δεν γινόταν ποτέ πολύ δυνατός, και η μικρή Δημοκρατία έμεινε ελεύθερη για περίπου 450 χρόνια, ως το 1808. Το παλάτι χτίστηκε τον 15ο αιώνα από τον Onofrio, τον ίδιο μηχανικό που έφτιαξε την κρήνη, και ξαναχτίστηκε περισσότερες από μία φορές. Πάνω από την πόρτα της μεγάλης αίθουσας του συμβουλίου είναι γραμμένα τα λατινικά λόγια «Obliti privatorum publica curate»: ξεχάστε τις δικές σας δουλειές και φροντίστε το κοινό καλό. Στην αυλή στέκεται το μοναδικό άγαλμα που έστησε ποτέ η Δημοκρατία για έναν άνθρωπο: η προτομή του Miho Pracat, ενός πλούσιου πλοιοκτήτη και εμπόρου που άφησε την περιουσία του στην πόλη.',
        en: 'The Republic of Ragusa had no king. Its ruler, the Rector (Knez in Croatian), was chosen from the noblemen for a single month, and during that month he lived in this palace, going out only for official duties. Then someone else took his place. So nobody could ever grow too powerful, and the little Republic stayed free for about 450 years, until 1808. The palace was built in the 15th century by Onofrio, the engineer of the fountain, and rebuilt more than once. Above the door of the great council hall are the Latin words “Obliti privatorum publica curate”: forget your private business and look after the public good. In the courtyard stands the only statue the Republic ever raised to a person: a bust of Miho Pracat, a rich ship-owner and merchant who left his fortune to the city.',
      },
      didYouKnow: {
        el: 'Ένας Ρέκτορας δεν μπορούσε να εκλεγεί ξανά πριν περάσουν δύο χρόνια, και τον εξέλεγε το Μεγάλο Συμβούλιο όλων των ενήλικων ευγενών. Το παλάτι φύλαγε κάποτε και μπαρούτι, που εξερράγη δύο φορές τον 15ο αιώνα και ανάγκασε σε ξαναχτίσιμο· γι\' αυτό το κτίριο ανακατεύει γοτθικό και αναγεννησιακό στιλ. Η προτομή του Miho Pracat στήθηκε το 1638.',
        en: 'A Rector could not be elected again until two years had passed, and he was chosen by the Great Council of all adult noblemen. The palace once also stored gunpowder, which exploded twice in the 15th century and forced rebuilding; that is why the building mixes Gothic and Renaissance styles. The bust of Miho Pracat was put up in 1638.',
      },
      quiz: [
        {
          q: { el: 'Για πόσο καιρό κυβερνούσε ένας Ρέκτορας;', en: 'How long did a Rector rule for?' },
          options: {
            el: ['Έναν χρόνο', 'Δέκα χρόνια', 'Όλη του τη ζωή', 'Έναν μήνα'],
            en: ['One year', 'Ten years', 'All his life', 'One month'],
          },
          correct: 3,
          explanation: {
            el: 'Μόνο έναν μήνα! Μετά έπαιρνε τη θέση του άλλος ευγενής, για να μη γίνει κανείς πολύ δυνατός.',
            en: 'Only one month! Then another nobleman took his place, so that nobody could become too powerful.',
          },
        },
        {
          q: { el: 'Τι λένε τα λόγια πάνω από την πόρτα στους άρχοντες;', en: 'What do the words above the door tell the rulers?' },
          options: {
            el: ['Να τρώνε καλά', 'Να ξεχάσουν τις δικές τους δουλειές και να φροντίζουν το κοινό καλό', 'Να κοιμούνται νωρίς', 'Να χτίσουν κι άλλα τείχη'],
            en: ['To eat well', 'To forget their private business and look after the public good', 'To go to bed early', 'To build more walls'],
          },
          correct: 1,
          explanation: {
            el: '«Obliti privatorum publica curate»: όποιος μπαίνει να κυβερνήσει πρέπει να σκέφτεται την πόλη, όχι τον εαυτό του.',
            en: '“Obliti privatorum publica curate”: whoever enters to govern must think of the city, not of himself.',
          },
        },
        {
          q: { el: 'Ποιον δείχνει η προτομή στην αυλή;', en: 'Who does the bust in the courtyard show?' },
          options: {
            el: ['Τον Miho Pracat, έναν πλούσιο πλοιοκτήτη και έμπορο που άφησε την περιουσία του στην πόλη', 'Τον ιππότη Orlando', 'Τον Άγιο Βλάσιο', 'Τον μηχανικό Onofrio'],
            en: ['Miho Pracat, a rich ship-owner and merchant who left his fortune to the city', 'Orlando the knight', 'Saint Blaise', 'Onofrio the engineer'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Miho Pracat ήταν ένας πλούσιος πλοιοκτήτης και έμπορος που άφησε τα χρήματά του στην πόλη. Είναι ο μόνος άνθρωπος που τίμησε η Δημοκρατία με άγαλμα.',
            en: 'Miho Pracat was a rich ship-owner and merchant who left his money to the city. He is the only person the Republic ever honoured with a statue.',
          },
        },
      ],
    },

    // ── 9. Old Port ────────────────────────────────────────────────────────────
    {
      id: 'old-port',
      name: { el: 'Παλιό Λιμάνι', en: 'Old Port' },
      emoji: '⚓',
      lat: 42.6405,
      lng: 18.1118,
      radiusM: 80,
      riddle: {
        el: 'Εδώ τα καράβια της πόλης χτίζονταν μέσα σε μεγάλες πέτρινες καμάρες, και απέναντι ένα πράσινο νησί γεμάτο παγώνια κρύβει τον θρύλο ενός ναυαγισμένου βασιλιά.',
        en: 'Here the city\'s ships were built inside great stone arches, and across the water a green island full of peacocks hides the legend of a shipwrecked king.',
      },
      parentHint: {
        el: 'Είναι το Παλιό Λιμάνι (Stara luka). Από το Παλάτι του Ρέκτορα γυρίστε στην πλατεία Luža και περάστε μέσα από την καμαρωτή πύλη δίπλα στον Πύργο του Ρολογιού· το λιμάνι είναι ακριβώς πίσω της, 2 λεπτά. Οι τρεις καμάρες του παλιού Ναυπηγείου, που σήμερα στεγάζουν την καφετέρια της πόλης, είναι στα δεξιά σας καθώς μπαίνετε στο λιμάνι.',
        en: 'It is the Old Port (Stara luka). From the Rector\'s Palace go back to Luža square and pass through the arched gateway beside the Clock Tower; the harbour is right behind it, 2 minutes. The three arches of the old Arsenal, which now hold the city café, are on your right as you enter the harbour.',
      },
      unlockQuestion: {
        question: { el: 'Ο θρύλος λέει ότι ένας διάσημος βασιλιάς ναυάγησε στο νησί απέναντι το 1192, γυρίζοντας από ένα μακρινό ταξίδι. Ποιος ήταν;', en: 'The legend says a famous king was shipwrecked on the island opposite in 1192, on his way home from a faraway journey. Who was he?' },
        options: {
          el: ['Ο Ριχάρδος ο Λεοντόκαρδος της Αγγλίας', 'Ο Μέγας Αλέξανδρος', 'Ο Ναπολέων', 'Ο βασιλιάς Αρθούρος'],
          en: ['Richard the Lionheart of England', 'Alexander the Great', 'Napoleon', 'King Arthur'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Ριχάρδος ο Λεοντόκαρδος γύριζε από τις Σταυροφορίες όταν, λέει ο θρύλος, μια καταιγίδα τον έριξε στο νησί Lokrum (Λόκρουμ). Για να ευχαριστήσει που σώθηκε, έδωσε χρήματα για μια εκκλησία, και οι κάτοικοι τον έπεισαν να τη χτίσει μέσα στην πόλη.',
          en: 'Richard the Lionheart was returning from the Crusades when, so the legend says, a storm threw him onto the island of Lokrum. In thanks for being saved he gave money for a church, and the townsfolk persuaded him to build it inside the city.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε το μεγάλο πέτρινο κτίριο στην άκρη του λιμανιού, εκεί που τώρα είναι η καφετέρια. Πόσες μεγάλες καμάρες έχει προς το νερό;', en: 'Look at the big stone building at the edge of the harbour, where the café is now. How many big arches does it have facing the water?' },
        options: {
          el: ['Δύο', 'Τρεις', 'Τέσσερις', 'Έξι'],
          en: ['Two', 'Three', 'Four', 'Six'],
        },
        correct: 1,
        explanation: {
          el: 'Τρεις καμάρες. Αυτό ήταν το Ναυπηγείο (Arsenal): τα καράβια χτίζονταν μέσα και γλιστρούσαν στο νερό μέσα από τις καμάρες. Αργότερα οι καμάρες κλείστηκαν, και σήμερα εκεί πίνουν καφέ.',
          en: 'Three arches. This was the Arsenal: ships were built inside and slid into the water through the arches. Later the arches were walled up, and today people drink coffee there.',
        },
      },
      story: {
        el: 'Αυτό το μικρό λιμάνι είναι εκεί όπου ξεκίνησε η ιστορία του Ντουμπρόβνικ. Τα καράβια χτίζονταν μέσα στο Ναυπηγείο, το μεγάλο κτίριο με τις τρεις καμάρες, και γλιστρούσαν κατευθείαν στο νερό. Από εδώ τα εμπορικά καράβια έπλεαν για το Βυζάντιο, την Ελλάδα, την Αίγυπτο και την Ισπανία, φορτωμένα αλάτι, υφάσματα και ασήμι. Για να προστατέψει το λιμάνι, η Δημοκρατία έχτισε τον 15ο αιώνα τον κυματοθραύστη Kaše (Κάσε), και αργότερα τον μακρύ μόλο Porporela (Πορπορέλα), όπου σήμερα οι άνθρωποι κάθονται και κοιτάζουν τις βάρκες. Το νησί απέναντι είναι το Lokrum, σκεπασμένο με πεύκα και σπίτι μιας οικογένειας από παγώνια. Ο θρύλος λέει ότι το 1192 ο βασιλιάς Ριχάρδος ο Λεοντόκαρδος της Αγγλίας ναυάγησε εκεί γυρίζοντας από τις Σταυροφορίες και, για να ευχαριστήσει που σώθηκε, έδωσε χρήματα για τον καθεδρικό ναό της πόλης.',
        en: 'This little harbour is where the story of Dubrovnik began. Ships were built inside the Arsenal, the big building with three arches, and slid straight into the water. From here merchant ships sailed to Byzantium, Greece, Egypt and Spain, loaded with salt, cloth and silver. To protect the port, the Republic built the Kaše breakwater in the 15th century, and later the long Porporela pier, where people now sit and watch the boats. The island opposite is Lokrum, covered in pine trees and home to a family of peacocks. Legend says that in 1192 King Richard the Lionheart of England was shipwrecked there on his way home from the Crusades and, in thanks for being saved, gave money for the city\'s cathedral.',
      },
      didYouKnow: {
        el: 'Τα παγώνια του Lokrum έφτασαν τον 19ο αιώνα με τον αρχιδούκα Μαξιμιλιανό των Αψβούργων, που έφτιαξε εκεί εξοχική κατοικία πριν γίνει αυτοκράτορας του Μεξικού. Το νησί είναι σήμερα προστατευόμενο φυσικό πάρκο, με ένα βενεδικτινό μοναστήρι του 11ου αιώνα και έναν βοτανικό κήπο, και κανείς δεν επιτρέπεται να διανυκτερεύσει εκεί.',
        en: 'Lokrum\'s peacocks arrived in the 19th century with Archduke Maximilian of Habsburg, who built a summer residence there before becoming Emperor of Mexico. The island is now a protected nature reserve, with an 11th-century Benedictine monastery and a botanical garden, and nobody is allowed to stay overnight.',
      },
      quiz: [
        {
          q: { el: 'Τι χτιζόταν μέσα στο Ναυπηγείο;', en: 'What was built inside the Arsenal?' },
          options: {
            el: ['Σπίτια', 'Ψωμί', 'Καράβια', 'Καμπάνες'],
            en: ['Houses', 'Bread', 'Ships', 'Bells'],
          },
          correct: 2,
          explanation: {
            el: 'Τα καράβια της πόλης χτίζονταν μέσα στο Ναυπηγείο και έβγαιναν στο νερό μέσα από τις τρεις καμάρες.',
            en: 'The city\'s ships were built inside the Arsenal and went out into the water through the three arches.',
          },
        },
        {
          q: { el: 'Ποια ζώα ζουν στο νησί Lokrum;', en: 'Which animals live on the island of Lokrum?' },
          options: {
            el: ['Παγώνια', 'Πιγκουίνοι', 'Καμήλες', 'Καγκουρό'],
            en: ['Peacocks', 'Penguins', 'Camels', 'Kangaroos'],
          },
          correct: 0,
          explanation: {
            el: 'Μια οικογένεια από παγώνια περπατάει ελεύθερη ανάμεσα στα πεύκα του Lokrum.',
            en: 'A family of peacocks walks freely among the pine trees of Lokrum.',
          },
        },
        {
          q: { el: 'Σύμφωνα με τον θρύλο, τι έδωσε ο Ριχάρδος ο Λεοντόκαρδος στην πόλη;', en: 'According to the legend, what did Richard the Lionheart give the city?' },
          options: {
            el: ['Ένα άλογο', 'Ένα σπαθί', 'Ένα στέμμα', 'Χρήματα για τον καθεδρικό ναό'],
            en: ['A horse', 'A sword', 'A crown', 'Money for the cathedral'],
          },
          correct: 3,
          explanation: {
            el: 'Ο θρύλος λέει ότι, για να ευχαριστήσει που σώθηκε από το ναυάγιο, ο βασιλιάς έδωσε χρήματα για τον καθεδρικό ναό.',
            en: 'The legend says that, in thanks for surviving the shipwreck, the king gave money for the cathedral.',
          },
        },
      ],
    },

    // ── 10. Fort Lovrijenac (from Pile bay) ────────────────────────────────────
    {
      id: 'fort-lovrijenac',
      name: { el: 'Φρούριο Lovrijenac', en: 'Fort Lovrijenac' },
      emoji: '🪨',
      lat: 42.6409,
      lng: 18.1052,
      radiusM: 80,
      riddle: {
        el: 'Έξω από τα τείχη, ένα φρούριο φυλάει την πόλη από ψηλά. Οι τοίχοι του προς τη θάλασσα είναι χοντροί σαν σπίτι, προς την πόλη όμως λεπτοί σαν φράχτης. Μαντεύεις γιατί;',
        en: 'Outside the walls, a fortress guards the city from up high. Its walls facing the sea are as thick as a house, but facing the city they are as thin as a fence. Can you guess why?',
      },
      parentHint: {
        el: 'Είναι το Φρούριο Lovrijenac (Λόβριενατς), που το βλέπετε από τον μικρό κόλπο του Pile. Γυρίστε πίσω όλο το Stradun και βγείτε από την Πύλη Pile (περίπου 8 λεπτά), μετά στρίψτε αριστερά και κατεβείτε τα σκαλιά προς τον μικρό κόλπο ανάμεσα στα τείχη και στο φρούριο. Το φρούριο είναι πάνω στον βράχο απέναντι. Αν θέλετε να ανεβείτε, το εισιτήριο των τειχών το περιλαμβάνει.',
        en: 'It is Fort Lovrijenac, seen from the little Pile bay. Walk back along the whole Stradun and out through the Pile Gate (about 8 minutes), then turn left and follow the steps down towards the small bay between the walls and the fort. The fort is on the rock across the water. If you want to climb it, the city-walls ticket includes it.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί, λες, έχτισαν τους τοίχους του φρουρίου προς την πόλη τόσο λεπτούς;', en: 'Why do you think they built the fort\'s walls facing the city so thin?' },
        options: {
          el: ['Τους τελείωσε η πέτρα', 'Για να μπορεί η πόλη να το γκρεμίσει εύκολα με τα κανόνια της, αν το έπαιρναν εχθροί', 'Για να κάνουν οικονομία για μια γιορτή', 'Γιατί ο άνεμος έρχεται από τη θάλασσα'],
          en: ['They ran out of stone', 'So that the city could easily knock it down with its cannons if enemies captured it', 'To save money for a party', 'Because the wind comes from the sea'],
        },
        correct: 1,
        explanation: {
          el: 'Προς τη θάλασσα οι τοίχοι φτάνουν τα 12 μέτρα πάχος, προς την πόλη μόνο περίπου 60 εκατοστά. Έτσι, ακόμη κι αν ένας εχθρός έπαιρνε το φρούριο, δεν θα μπορούσε ποτέ να το χρησιμοποιήσει εναντίον του Ντουμπρόβνικ.',
          en: 'Towards the sea the walls are up to 12 metres thick, towards the city only about 60 centimetres. So even if an enemy captured the fort, it could never be used against Dubrovnik.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε το φρούριο απέναντι. Πάνω σε τι είναι χτισμένο;', en: 'Look at the fort across the water. What is it built on?' },
        options: {
          el: ['Σε μια αμμουδιά', 'Σε ένα επίπεδο χωράφι', 'Σε έναν ψηλό βράχο που βγαίνει ίσια από τη θάλασσα', 'Σε ένα μικρό νησί μακριά'],
          en: ['On a sandy beach', 'On a flat field', 'On a tall rock rising straight out of the sea', 'On a small island far away'],
        },
        correct: 2,
        explanation: {
          el: 'Ο βράχος έχει ύψος περίπου 37 μέτρα, και το φρούριο ανεβαίνει πάνω του σε σκαλοπάτια, με τη θάλασσα να χτυπάει από κάτω. Κανένα καράβι δεν μπορούσε να το πλησιάσει από εκεί.',
          en: 'The rock is about 37 metres high, and the fort climbs up it in steps, with the sea crashing below. No ship could ever approach it from that side.',
        },
      },
      story: {
        el: 'Το Φρούριο Lovrijenac στέκεται πάνω σε έναν βράχο ύψους περίπου 37 μέτρων, ακριβώς έξω από τα τείχη της πόλης. Ο θρύλος λέει ότι γύρω στο έτος 1000 οι Βενετοί ήθελαν να χτίσουν ένα φρούριο σε αυτόν τον βράχο, για να ελέγχουν το Ντουμπρόβνικ. Οι κάτοικοι το έμαθαν και έχτισαν το δικό τους φρούριο σε μόλις τρεις μήνες, και όταν έφτασαν τα βενετσιάνικα καράβια, το φρούριο ήταν ήδη έτοιμο. Αλήθεια ή όχι, το φρούριο ήταν έξυπνο. Οι τοίχοι του προς τη θάλασσα φτάνουν τα 12 μέτρα πάχος, αλλά ο τοίχος προς την πόλη είναι μόνο περίπου 60 εκατοστά, ώστε, αν ποτέ το έπαιρναν εχθροί, τα κανόνια της πόλης να το γκρεμίσουν εύκολα. Πάνω από την είσοδο τα λατινικά λόγια λένε: «Non bene pro toto libertas venditur auro», η ελευθερία δεν πουλιέται για όλο το χρυσάφι του κόσμου. Αυτό ήταν το σύνθημα ολόκληρης της Δημοκρατίας.',
        en: 'Fort Lovrijenac stands on a rock about 37 metres high, just outside the city walls. Legend says that around the year 1000 the Venetians wanted to build a fort on this rock to control Dubrovnik. The townspeople found out and built their own fort in only three months, and when the Venetian ships arrived, the fort was already finished. True or not, the fort was clever. Its walls facing the sea are up to 12 metres thick, but the wall facing the city is only about 60 centimetres, so that if enemies ever captured it, the city\'s cannons could easily knock it down. Above the entrance the Latin words say: “Non bene pro toto libertas venditur auro”, freedom is not sold for all the gold in the world. That was the motto of the whole Republic.',
      },
      didYouKnow: {
        el: 'Ο διοικητής του φρουρίου άλλαζε κάθε μήνα και έπαιρνε τρόφιμα μόνο για έναν μήνα, ώστε κανείς να μην μπορεί να σχεδιάσει να το κρατήσει για τον εαυτό του. Το φρούριο αναφέρεται πρώτη φορά σε έγγραφα του 1301, και σήμερα οι τρεις ταράτσες του γίνονται κάθε καλοκαίρι υπαίθρια σκηνή θεάτρου, με παραστάσεις έργων του Σαίξπηρ.',
        en: 'The fort\'s commander was replaced every month and given supplies for only one month, so that nobody could plan to keep it for himself. The fort is first mentioned in documents in 1301, and today its three terraces become an open-air theatre stage every summer, with performances of Shakespeare\'s plays.',
      },
      quiz: [
        {
          q: { el: 'Σύμφωνα με τον θρύλο, σε πόσο καιρό χτίστηκε το φρούριο;', en: 'According to the legend, how long did it take to build the fort?' },
          options: {
            el: ['Σε τριάντα χρόνια', 'Σε τρεις μήνες', 'Σε μία μέρα', 'Σε εκατό χρόνια'],
            en: ['Thirty years', 'Three months', 'One day', 'A hundred years'],
          },
          correct: 1,
          explanation: {
            el: 'Ο θρύλος λέει ότι οι κάτοικοι το έχτισαν σε μόλις τρεις μήνες, για να προλάβουν τους Βενετούς.',
            en: 'The legend says the townspeople built it in just three months, to beat the Venetians to it.',
          },
        },
        {
          q: { el: 'Γιατί είναι λεπτός ο τοίχος προς την πόλη;', en: 'Why is the wall facing the city thin?' },
          options: {
            el: ['Γιατί οι χτίστες κουράστηκαν', 'Για να μπαίνει φως', 'Για να περνάει ο θαλασσινός αέρας', 'Για να μπορεί η πόλη να το γκρεμίσει, αν το έπαιρναν εχθροί'],
            en: ['Because the builders got tired', 'To let in light', 'So the sea breeze could pass', 'So that the city could knock it down if enemies captured it'],
          },
          correct: 3,
          explanation: {
            el: 'Με τοίχο μόνο 60 εκατοστών προς την πόλη, τα κανόνια του Ντουμπρόβνικ μπορούσαν να γκρεμίσουν το φρούριο αν έπεφτε σε λάθος χέρια.',
            en: 'With a wall only 60 centimetres thick towards the city, Dubrovnik\'s cannons could knock the fort down if it fell into the wrong hands.',
          },
        },
        {
          q: { el: 'Τι λένε τα λόγια πάνω από την είσοδο;', en: 'What do the words above the entrance say?' },
          options: {
            el: ['Καλώς ήρθατε, ναυτικοί', 'Προσοχή, σκύλος', 'Η ελευθερία δεν πουλιέται για όλο το χρυσάφι του κόσμου', 'Η θάλασσα είναι βαθιά'],
            en: ['Welcome, sailors', 'Beware of the dog', 'Freedom is not sold for all the gold in the world', 'The sea is deep'],
          },
          correct: 2,
          explanation: {
            el: '«Non bene pro toto libertas venditur auro»: η ελευθερία δεν πουλιέται για όλο το χρυσάφι του κόσμου. Το σύνθημα της Δημοκρατίας της Ραγούζας.',
            en: '“Non bene pro toto libertas venditur auro”: freedom is not sold for all the gold in the world. The motto of the Republic of Ragusa.',
          },
        },
      ],
    },
  ],
};
