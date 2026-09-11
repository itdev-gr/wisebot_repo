/**
 * WiseBot Explorer · Λονδίνο / London
 * ===================================
 * Ten spots in two half-days: Westminster and the West End on foot (spots 1–7), then the
 * City and the river by tube (spots 8–10). Original text only, verified facts, language for
 * a child of 7–12 in Greek and English. English landmark names stay in English in both.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'london',
  name: { el: 'Λονδίνο', en: 'London' },
  country: { el: 'Ηνωμένο Βασίλειο', en: 'United Kingdom' },
  countryCode: 'GB',
  emoji: '🎡',
  center: { lat: 51.5074, lng: -0.115 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στο Λονδίνο, την πόλη με τα κόκκινα διώροφα λεωφορεία και τα μαύρα ταξί! Εδώ ο ποταμός Τάμεσης κυλάει δίπλα σε παλάτια βασιλιάδων και βασιλισσών, ένα γιγάντιο ρολόι χτυπάει τις ώρες και μια τεράστια ρόδα σηκώνει τους ανθρώπους ψηλά στον ουρανό. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές του Λονδίνου!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to London, the city of red double-decker buses and black cabs! Here the river Thames flows past the palaces of kings and queens, a giant clock chimes the hours and an enormous wheel lifts people high into the sky. Solve my riddles, find the ten secret spots and become London explorers yourselves!',
  },
  route: [
    'buckingham-palace',
    'westminster-abbey',
    'big-ben',
    'london-eye',
    'trafalgar-square',
    'covent-garden',
    'british-museum',
    'st-pauls-cathedral',
    'tower-of-london',
    'tower-bridge',
  ],
  spots: [
    // ── 1. Buckingham Palace ───────────────────────────────────────────────────
    {
      id: 'buckingham-palace',
      name: { el: 'Buckingham Palace', en: 'Buckingham Palace' },
      emoji: '👑',
      lat: 51.5017,
      lng: -0.1412,
      radiusM: 60,
      riddle: {
        el: 'Σε ένα σπίτι με εκατοντάδες δωμάτια μένει ένας βασιλιάς, και μια σημαία στη στέγη μαρτυράει αν είναι μέσα. Μπροστά του, μια χρυσή φιγούρα λάμπει στην κορυφή ενός λευκού μνημείου, ενώ στρατιώτες με ψηλά γούνινα καπέλα στέκονται ακίνητοι σαν αγάλματα.',
        en: 'A king lives in a house with hundreds of rooms, and a flag on the roof tells you whether he is at home. Out front, a golden figure shines on top of a white monument, while soldiers in tall furry hats stand as still as statues.',
      },
      parentHint: {
        el: 'Είναι το Buckingham Palace (τα Ανάκτορα του Μπάκιγχαμ) με το Victoria Memorial μπροστά του. Ξεκινήστε από εδώ: από τον σταθμό του μετρό Green Park περπατήστε 8 λεπτά μέσα από το πάρκο, ή 10 λεπτά από τον σταθμό Victoria. Η αλλαγή της φρουράς γίνεται στις 11 το πρωί, αλλά όχι κάθε μέρα, γι\' αυτό ελέγξτε το πρόγραμμα.',
        en: 'It is Buckingham Palace, with the Victoria Memorial in front of it. Start here: from Green Park tube station walk 8 minutes through the park, or 10 minutes from Victoria station. The Changing of the Guard is at 11 in the morning but not every day, so check the schedule first.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι μια σημαία δείχνει αν ο βασιλιάς είναι σπίτι. Όταν ο βασιλιάς λείπει, ποια σημαία κυματίζει στη θέση της δικής του;', en: 'The riddle says a flag shows whether the king is at home. When the King is away, which flag flies instead of his own?' },
        options: {
          el: ['Καμία σημαία', 'Η σημαία του Λονδίνου', 'Η Union Jack, η σημαία του Ηνωμένου Βασιλείου', 'Μια σημαία με μια κουκουβάγια'],
          en: ['No flag at all', 'The flag of London', 'The Union Jack, the flag of the United Kingdom', 'A flag with an owl on it'],
        },
        correct: 2,
        explanation: {
          el: 'Όταν ο βασιλιάς είναι σπίτι, στον ιστό κυματίζει το Royal Standard (το βασιλικό λάβαρο), μια σημαία χωρισμένη στα τέσσερα, με χρυσά λιοντάρια και μια άρπα. Όταν λείπει, τη θέση της παίρνει η Union Jack. Κοίτα λοιπόν ψηλά στη στέγη: η σημαία σού λέει ποιος είναι μέσα!',
          en: 'When the King is at home, the Royal Standard flies from the roof: a flag divided into four, with golden lions and a harp. When he is away, the Union Jack takes its place. So look up at the roof: the flag tells you who is in!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε το λευκό μνημείο μπροστά στο παλάτι. Τι έχει η χρυσή φιγούρα στην κορυφή του;', en: 'Look at the white monument in front of the palace. What does the golden figure on the very top have?' },
        options: {
          el: ['Μεγάλα χρυσά φτερά', 'Ένα στέμμα και ένα σπαθί', 'Ένα άλογο', 'Μια ομπρέλα'],
          en: ['Big golden wings', 'A crown and a sword', 'A horse', 'An umbrella'],
        },
        correct: 0,
        explanation: {
          el: 'Είναι η φτερωτή Νίκη, που στέκεται πάνω σε μια χρυσή σφαίρα. Από κάτω, στραμμένη προς τον μεγάλο δρόμο The Mall, κάθεται η βασίλισσα Βικτωρία σκαλισμένη σε άσπρο μάρμαρο: η πρώτη που έκανε αυτό το παλάτι σπίτι της. Το μνημείο εγκαινιάστηκε το 1911.',
          en: 'She is winged Victory, standing on a golden ball. Below her, facing the long avenue called The Mall, sits Queen Victoria carved in white marble, the first monarch to make this palace her home. The memorial was unveiled in 1911.',
        },
      },
      story: {
        el: 'Αυτό το παλάτι ξεκίνησε ως ένα πολύ μικρότερο σπίτι, χτισμένο πριν από περισσότερα από 300 χρόνια για έναν δούκα που λεγόταν Buckingham (Μπάκιγχαμ). Οι βασιλιάδες το αγόρασαν και το μεγάλωναν όλο και περισσότερο, αλλά ο πρώτος μονάρχης που έμεινε πραγματικά εδώ ήταν η βασίλισσα Βικτωρία, το 1837. Σήμερα έχει 775 δωμάτια, ανάμεσά τους 78 μπάνια. Τις μεγάλες μέρες η βασιλική οικογένεια χαιρετάει τον κόσμο από το διάσημο μπαλκόνι, και η αλλαγή της φρουράς, με μουσική και παρέλαση, γίνεται στην αυλή πίσω από τα κάγκελα, και εσύ την παρακολουθείς απ\' έξω. Κοίτα ψηλά τον ιστό: αν κυματίζει το Royal Standard, ο βασιλιάς είναι μέσα. Ακόμη κι ένα παλάτι ξεκινάει μικρό· τα μεγάλα πράγματα μεγαλώνουν ένα δωμάτιο τη φορά!',
        en: 'This palace began as a much smaller house, built more than 300 years ago for a duke called Buckingham. Kings bought it and made it bigger and bigger, but the first monarch who actually lived here was Queen Victoria, in 1837. Today it has 775 rooms, including 78 bathrooms. On big days the royal family waves from the famous balcony, and the Changing of the Guard, with music and marching, happens in the forecourt behind the railings, where you can watch it from outside. Look up at the flagpole: the Royal Standard means the King is inside. Even a palace starts small; big things grow one room at a time!',
      },
      didYouKnow: {
        el: 'Ο κήπος του παλατιού είναι ο μεγαλύτερος ιδιωτικός κήπος του Λονδίνου, περίπου 160 στρέμματα, με δική του λίμνη και πλατφόρμα για ελικόπτερα. Κάθε καλοκαίρι ο βασιλιάς οργανώνει εκεί γκάρντεν πάρτι (πάρτι στον κήπο) για χιλιάδες καλεσμένους, που πίνουν τσάι στο γρασίδι. Το παλάτι έχει μάλιστα και δικό του ταχυδρομείο.',
        en: 'The palace garden is the largest private garden in London, about 16 hectares with its own lake and a helicopter landing pad. Every summer the King hosts garden parties there for thousands of guests, who drink tea on the lawn. The palace even has its own post office.',
      },
      quiz: [
        {
          q: { el: 'Ποιος μονάρχης ήταν ο πρώτος που έμεινε πραγματικά στο παλάτι;', en: 'Who was the first monarch to actually live in the palace?' },
          options: {
            el: ['Ο βασιλιάς Ερρίκος Η΄', 'Η βασίλισσα Βικτωρία', 'Ο Γουλιέλμος ο Κατακτητής', 'Η βασίλισσα Ελισάβετ Β΄'],
            en: ['King Henry VIII', 'Queen Victoria', 'William the Conqueror', 'Queen Elizabeth II'],
          },
          correct: 1,
          explanation: {
            el: 'Η βασίλισσα Βικτωρία μετακόμισε εδώ το 1837, λίγες εβδομάδες αφότου έγινε βασίλισσα, και από τότε το παλάτι είναι το σπίτι των βασιλιάδων.',
            en: 'Queen Victoria moved in in 1837, a few weeks after she became queen, and the palace has been the monarch\'s home ever since.',
          },
        },
        {
          q: { el: 'Πόσα δωμάτια έχει το παλάτι;', en: 'How many rooms does the palace have?' },
          options: {
            el: ['75', '175', '7.750', '775'],
            en: ['75', '175', '7,750', '775'],
          },
          correct: 3,
          explanation: {
            el: 'Το παλάτι έχει 775 δωμάτια, ανάμεσά τους 78 μπάνια και 19 μεγάλες αίθουσες για επίσημες γιορτές.',
            en: 'The palace has 775 rooms, including 78 bathrooms and 19 grand State Rooms for official celebrations.',
          },
        },
        {
          q: { el: 'Τι σημαίνει το Royal Standard στον ιστό;', en: 'What does the Royal Standard on the flagpole mean?' },
          options: {
            el: ['Ο βασιλιάς είναι μέσα στο παλάτι', 'Το παλάτι είναι κλειστό', 'Βρέχει', 'Οι φρουροί έχουν διακοπές'],
            en: ['The King is inside the palace', 'The palace is closed', 'It is raining', 'The guards are on holiday'],
          },
          correct: 0,
          explanation: {
            el: 'Το Royal Standard είναι η προσωπική σημαία του βασιλιά. Όταν κυματίζει, ο βασιλιάς βρίσκεται μέσα στο παλάτι.',
            en: 'The Royal Standard is the King\'s own flag. When it flies, the King is inside the palace.',
          },
        },
      ],
    },

    // ── 2. Westminster Abbey ───────────────────────────────────────────────────
    {
      id: 'westminster-abbey',
      name: { el: 'Westminster Abbey', en: 'Westminster Abbey' },
      emoji: '⛪',
      lat: 51.4995,
      lng: -0.1286,
      radiusM: 50,
      riddle: {
        el: 'Σε αυτή την εκκλησία με τους δύο ψηλούς πύργους στέφθηκαν σχεδόν όλοι οι βασιλιάδες και οι βασίλισσες της χώρας εδώ και σχεδόν χίλια χρόνια. Μέσα της, σε μια γωνιά, αναπαύονται ποιητές, και κοντά τους ένας άνθρωπος που είδε ένα μήλο να πέφτει.',
        en: 'In this church with two tall towers, almost every king and queen of the land has been crowned for nearly a thousand years. Inside, poets rest in one corner, and near them lies a man who watched an apple fall.',
      },
      parentHint: {
        el: 'Είναι το Westminster Abbey (το Αβαείο του Γουέστμινστερ). Από το παλάτι περπατήστε 12 λεπτά ανατολικά μέσα από το St James\'s Park ή κατά μήκος της Birdcage Walk· η δυτική πρόσοψη με τους δύο πύργους βλέπει στην πλατεία Broad Sanctuary.',
        en: 'It is Westminster Abbey. From the palace walk 12 minutes east through St James\'s Park or along Birdcage Walk; the west front with the two towers faces Broad Sanctuary.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για έναν άνθρωπο που είδε ένα μήλο να πέφτει. Ποιος είναι;', en: 'The riddle mentions a man who watched an apple fall. Who is he?' },
        options: {
          el: ['Ο Ισαάκ Νεύτων, που εξήγησε τη βαρύτητα', 'Ο Κάρολος Δαρβίνος', 'Ο Ουίλιαμ Σαίξπηρ', 'Ο Ρομπέν των Δασών'],
          en: ['Isaac Newton, who explained gravity', 'Charles Darwin', 'William Shakespeare', 'Robin Hood'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Ισαάκ Νεύτων, ο επιστήμονας που εξήγησε γιατί τα πράγματα πέφτουν προς τα κάτω, είναι θαμμένος εδώ. Το ίδιο και ο Κάρολος Δαρβίνος, που μελέτησε πώς αλλάζουν τα ζώα με τον καιρό, και ο Στίβεν Χόκινγκ, που μελέτησε τα άστρα: μια ολόκληρη γωνιά με μεγάλους στοχαστές!',
          en: 'Isaac Newton, the scientist who explained why things fall down, is buried here. So is Charles Darwin, who studied how animals change over time, and Stephen Hawking, who studied the stars: a whole corner of great thinkers!',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στη μεγάλη δυτική πόρτα, ανάμεσα στους δύο πύργους. Ακριβώς πάνω από την καμάρα υπάρχει μια μακριά σειρά από σύγχρονα αγάλματα σε μικρές κόγχες (μη μετρήσεις τις τέσσερις μικρότερες φιγούρες πιο χαμηλά, δίπλα στην πόρτα). Μέτρησε τα αγάλματα αυτής της πάνω σειράς.', en: 'Stand in front of the big west door, between the two towers. Directly above the arch there is one long row of modern statues in little niches (ignore the four smaller figures lower down, beside the door). Count the statues in that top row.' },
        options: {
          el: ['Οκτώ', 'Έξι', 'Δέκα', 'Δώδεκα'],
          en: ['Eight', 'Six', 'Ten', 'Twelve'],
        },
        correct: 2,
        explanation: {
          el: 'Δέκα αγάλματα, και δεν είναι βασιλιάδες: είναι γενναίοι άνθρωποι του 20ού αιώνα που έχασαν τη ζωή τους για αυτά που πίστευαν, όπως ο Μάρτιν Λούθερ Κινγκ. Τοποθετήθηκαν εκεί το 1998, σε κόγχες που είχαν μείνει άδειες για εκατοντάδες χρόνια. Πιο χαμηλά υπάρχουν άλλες τέσσερις φιγούρες: η Ευσπλαχνία, η Αλήθεια, η Δικαιοσύνη και η Ειρήνη. Αν κάνεις τον γύρο ως την πλευρά της μεγάλης πλατείας, θα δεις και ένα τεράστιο στρογγυλό παράθυρο σαν λουλούδι.',
          en: 'Ten statues, and they are not kings: they are brave people of the 20th century who lost their lives for what they believed in, like Martin Luther King Jr. They were placed there in 1998, in niches that had stood empty for hundreds of years. Lower down are four more figures: Mercy, Truth, Justice and Peace. Walk round to the side facing the big square and you will also find a huge round window like a flower.',
        },
      },
      story: {
        el: 'Ανήμερα τα Χριστούγεννα του 1066, ο Γουλιέλμος ο Κατακτητής στέφθηκε βασιλιάς ακριβώς εδώ, και από τότε 40 βασιλιάδες και βασίλισσες πήραν το στέμμα τους σε αυτό το αβαείο. Εδώ και περισσότερα από 700 χρόνια σχεδόν όλοι κάθονται στην ίδια ξύλινη καρέκλα, την Καρέκλα της Στέψης. Την εκκλησία που βλέπεις σήμερα την ξεκίνησε ο βασιλιάς Ερρίκος Γ΄ πριν από περισσότερα από 750 χρόνια, και οι μυτερές καμάρες και τα ψηλά παράθυρά της φτιάχτηκαν για να σηκώνουν το βλέμμα σου προς τον ουρανό. Όμως το αβαείο είναι και τόπος ανάπαυσης: στη Γωνιά των Ποιητών (Poets\' Corner) βρίσκονται διάσημοι συγγραφείς, και κοντά τους οι επιστήμονες Ισαάκ Νεύτων και Κάρολος Δαρβίνος. Ένας τόπος με στέμματα, ποιήματα και μεγάλες ιδέες!',
        en: 'On Christmas Day in 1066, William the Conqueror was crowned king right here, and since then 40 kings and queens have received their crown in this abbey. For more than 700 years almost all of them have sat on the same wooden seat, the Coronation Chair. The church you see today was begun by King Henry III more than 750 years ago, and its pointed arches and tall windows were built to lift your eyes up to the sky. But the abbey is also a resting place: in Poets\' Corner lie famous writers, and nearby are the scientists Isaac Newton and Charles Darwin. A place of crowns, poems and big ideas!',
      },
      didYouKnow: {
        el: 'Η Καρέκλα της Στέψης, που φτιάχτηκε γύρω στο 1300 για τον βασιλιά Εδουάρδο Α΄, είναι γεμάτη σκαλίσματα: τον 18ο και τον 19ο αιώνα μαθητές του διπλανού σχολείου και επισκέπτες χάραξαν πάνω της τα ονόματά τους, και ένας έγραψε μάλιστα ότι κοιμήθηκε σε αυτήν μια ολόκληρη νύχτα.',
        en: 'The Coronation Chair, made around 1300 for King Edward I, is covered in graffiti: in the 18th and 19th centuries pupils from the school next door and visitors carved their names into it, and one even wrote that he had slept in it for a whole night.',
      },
      quiz: [
        {
          q: { el: 'Ποιος στέφθηκε εδώ τα Χριστούγεννα του 1066;', en: 'Who was crowned here on Christmas Day 1066?' },
          options: {
            el: ['Ο βασιλιάς Αρθούρος', 'Η βασίλισσα Βικτωρία', 'Ο Ερρίκος Η΄', 'Ο Γουλιέλμος ο Κατακτητής'],
            en: ['King Arthur', 'Queen Victoria', 'Henry VIII', 'William the Conqueror'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Γουλιέλμος ο Κατακτητής στέφθηκε εδώ τα Χριστούγεννα του 1066, και από τότε κάθε στέψη γίνεται σε αυτό το αβαείο.',
            en: 'William the Conqueror was crowned here on Christmas Day 1066, and every coronation since has taken place in this abbey.',
          },
        },
        {
          q: { el: 'Πού κάθονται οι βασιλιάδες και οι βασίλισσες όταν στέφονται;', en: 'What do kings and queens sit on when they are crowned?' },
          options: {
            el: ['Σε έναν χρυσό θρόνο με ρόδες', 'Σε μια ξύλινη καρέκλα πάνω από 700 ετών', 'Σε ένα άλογο', 'Σε ένα πέτρινο παγκάκι'],
            en: ['A golden throne with wheels', 'A wooden chair more than 700 years old', 'A horse', 'A stone bench'],
          },
          correct: 1,
          explanation: {
            el: 'Η Καρέκλα της Στέψης είναι ξύλινη και φτιάχτηκε γύρω στο 1300. Πάνω της κάθισαν οι βασιλιάδες για περισσότερα από 700 χρόνια.',
            en: 'The Coronation Chair is made of wood and was built around 1300. Kings and queens have sat on it for more than 700 years.',
          },
        },
        {
          q: { el: 'Ποιοι δύο επιστήμονες αναπαύονται στο αβαείο;', en: 'Which two scientists rest in the abbey?' },
          options: {
            el: ['Ο Γαλιλαίος και ο Κοπέρνικος', 'Ο Αρχιμήδης και ο Πυθαγόρας', 'Ο Ισαάκ Νεύτων και ο Κάρολος Δαρβίνος', 'Η Μαρία Κιουρί και ο Άλμπερτ Αϊνστάιν'],
            en: ['Galileo and Copernicus', 'Archimedes and Pythagoras', 'Isaac Newton and Charles Darwin', 'Marie Curie and Albert Einstein'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Νεύτων και ο Δαρβίνος, δύο από τους μεγαλύτερους επιστήμονες όλων των εποχών, είναι θαμμένοι μέσα στο αβαείο.',
            en: 'Newton and Darwin, two of the greatest scientists of all time, are buried inside the abbey.',
          },
        },
      ],
    },

    // ── 3. Big Ben ─────────────────────────────────────────────────────────────
    {
      id: 'big-ben',
      name: { el: 'Big Ben', en: 'Big Ben' },
      emoji: '🕰️',
      lat: 51.5009,
      lng: -0.1243,
      radiusM: 70,
      riddle: {
        el: 'Ένας ψηλός πύργος με τέσσερα πρόσωπα κοιτάζει προς κάθε κατεύθυνση και λέει σε όλη την πόλη τι ώρα είναι. Όλοι τον φωνάζουν με το όνομα της καμπάνας που κρύβει μέσα του, κι ας μην είναι δικό του.',
        en: 'A tall tower with four faces looks in every direction and tells the whole city the time. Everyone calls it by the name of the bell hidden inside it, even though that name is not really its own.',
      },
      parentHint: {
        el: 'Είναι το Big Ben, δηλαδή ο Elizabeth Tower (ο Πύργος της Ελισάβετ) του Κοινοβουλίου. Από το αβαείο περπατήστε 4 λεπτά μέσα από την Parliament Square· η καλύτερη θέα είναι από τη γωνία της Bridge Street ή από τη Westminster Bridge.',
        en: 'It is Big Ben, or rather the Elizabeth Tower of the Houses of Parliament. From the abbey walk 4 minutes across Parliament Square; the best view is from the corner of Bridge Street or from Westminster Bridge.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το παρατσούκλι του πύργου ανήκει σε κάτι που βρίσκεται μέσα του. Τι είναι στην πραγματικότητα το Big Ben;', en: 'The riddle says the tower\'s nickname really belongs to something inside it. What is Big Ben, actually?' },
        options: {
          el: ['Το ρολόι', 'Η μεγάλη καμπάνα', 'Ο πύργος', 'Ο άνθρωπος που τον έχτισε'],
          en: ['The clock', 'The great bell', 'The tower', 'The man who built it'],
        },
        correct: 1,
        explanation: {
          el: 'Big Ben (Μπιγκ Μπεν) είναι η γιγάντια καμπάνα που χτυπάει τις ώρες· ζυγίζει περίπου 13,7 τόνους, όσο δύο μεγάλοι ελέφαντες. Ο ίδιος ο πύργος λέγεται Elizabeth Tower, προς τιμήν της βασίλισσας Ελισάβετ Β΄, από το 2012.',
          en: 'Big Ben is the giant bell that strikes the hours; it weighs about 13.7 tonnes, as much as two big elephants. The tower itself is called the Elizabeth Tower, named after Queen Elizabeth II in 2012.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε προσεκτικά ένα από τα πρόσωπα του ρολογιού. Τι χρώμα έχουν οι δείκτες και οι αριθμοί;', en: 'Look closely at one of the clock faces. What colour are the hands and the numbers?' },
        options: {
          el: ['Μαύρο', 'Κόκκινο', 'Πράσινο', 'Μπλε'],
          en: ['Black', 'Red', 'Green', 'Blue'],
        },
        correct: 3,
        explanation: {
          el: 'Μπλε, με χρυσάφι ολόγυρα! Για πολλά χρόνια ήταν βαμμένα μαύρα, αλλά όταν ο πύργος καθαρίστηκε και επισκευάστηκε από το 2017 ως το 2022, οι τεχνίτες ανακάλυψαν ότι το αρχικό χρώμα ήταν μπλε και τα ξανάβαψαν έτσι. Κάθε πρόσωπο του ρολογιού έχει πλάτος 7 μέτρα, και είναι τέσσερα.',
          en: 'Blue, with gold all around! For many years they were painted black, but when the tower was cleaned and repaired between 2017 and 2022, the workers discovered the original colour was blue and painted them blue again. Each clock face is 7 metres wide, and there are four of them.',
        },
      },
      story: {
        el: 'Πριν από σχεδόν 200 χρόνια, το 1834, μια μεγάλη φωτιά κατέστρεψε το παλιό κτίριο του Κοινοβουλίου. Αντί να τα παρατήσουν, οι Λονδρέζοι έχτισαν ένα καινούργιο παλάτι με πάνω από χίλια δωμάτια και έναν πύργο ρολογιού 96 μέτρων. Μέσα του κρέμεται μια γιγάντια καμπάνα που όλοι τη λένε Big Ben· χτύπησε για πρώτη φορά το 1859. Κανείς δεν ξέρει σίγουρα από πού βγήκε το όνομα· πολλοί πιστεύουν ότι τιμά τον Benjamin Hall, τον μεγαλόσωμο κύριο που ήταν υπεύθυνος για τα έργα. Όταν το Κοινοβούλιο συνεδριάζει μετά τη δύση του ήλιου, ένα φως ανάβει στην κορυφή του πύργου, για να το ξέρει όλη η πόλη. Κοίτα ψηλά: ένας πύργος που λέει την ώρα, και ένα φως που λέει τα νέα!',
        en: 'Almost 200 years ago, in 1834, a great fire destroyed the old parliament building. Instead of giving up, Londoners built a new palace with more than a thousand rooms, and a clock tower 96 metres tall. Inside hangs a giant bell that everyone calls Big Ben; it first rang out in 1859. Nobody is sure where the name came from; many think it honours Benjamin Hall, the big man who was in charge of the works. When Parliament meets after dark, a light shines at the very top of the tower, so the whole city knows. Look up: a tower that tells time, and a light that tells news!',
      },
      didYouKnow: {
        el: 'Η μεγάλη καμπάνα ράγισε μόλις λίγους μήνες αφότου άρχισε να χτυπάει, το 1859. Αντί να την αντικαταστήσουν, οι μηχανικοί την περιέστρεψαν λίγο και έβαλαν ένα ελαφρύτερο σφυρί· η ρωγμή υπάρχει ακόμη και σήμερα, και σε αυτήν οφείλεται ο διάσημος, λίγο φάλτσος ήχος του Big Ben.',
        en: 'The great bell cracked only a few months after it started ringing in 1859. Instead of replacing it, engineers turned it slightly and fitted a lighter hammer; the crack is still there today, and it is what gives Big Ben its famous, slightly off-key tone.',
      },
      quiz: [
        {
          q: { el: 'Τι έπαθε το παλιό κτίριο του Κοινοβουλίου το 1834;', en: 'What happened to the old parliament building in 1834?' },
          options: {
            el: ['Το κατέστρεψε μια μεγάλη φωτιά', 'Το παρέσυρε το ποτάμι', 'Έγινε ζωολογικός κήπος', 'Τίποτα, είναι ακόμη εκεί'],
            en: ['A great fire destroyed it', 'The river swept it away', 'It was turned into a zoo', 'Nothing, it is still there'],
          },
          correct: 0,
          explanation: {
            el: 'Το 1834 μια μεγάλη φωτιά κατέστρεψε το παλιό Κοινοβούλιο. Στη θέση του χτίστηκε το σημερινό παλάτι με τον πύργο του ρολογιού.',
            en: 'In 1834 a great fire destroyed the old parliament. The palace you see today, with its clock tower, was built in its place.',
          },
        },
        {
          q: { el: 'Πόσο ψηλός είναι ο πύργος του ρολογιού;', en: 'How tall is the clock tower?' },
          options: {
            el: ['9 μέτρα', '960 μέτρα', '96 μέτρα', '19 μέτρα'],
            en: ['9 metres', '960 metres', '96 metres', '19 metres'],
          },
          correct: 2,
          explanation: {
            el: 'Ο πύργος έχει ύψος 96 μέτρα, όσο ένα κτίριο με περίπου 30 ορόφους.',
            en: 'The tower is 96 metres tall, about the height of a 30-storey building.',
          },
        },
        {
          q: { el: 'Τι σημαίνει το φως στην κορυφή του πύργου;', en: 'What does the light at the top of the tower mean?' },
          options: {
            el: ['Έρχεται ένα καράβι', 'Το Κοινοβούλιο συνεδριάζει μετά τη δύση', 'Ο βασιλιάς κοιμάται', 'Θα βρέξει'],
            en: ['A ship is coming', 'Parliament is meeting after dark', 'The King is asleep', 'It is going to rain'],
          },
          correct: 1,
          explanation: {
            el: 'Το φως στην κορυφή ανάβει όταν το Κοινοβούλιο συνεδριάζει μετά τη δύση του ήλιου, για να το βλέπει όλη η πόλη.',
            en: 'The light at the top shines when Parliament is meeting after sunset, so that the whole city can see.',
          },
        },
      ],
    },

    // ── 4. London Eye ──────────────────────────────────────────────────────────
    {
      id: 'london-eye',
      name: { el: 'London Eye', en: 'London Eye' },
      emoji: '🎡',
      lat: 51.5032,
      lng: -0.1198,
      radiusM: 50,
      riddle: {
        el: 'Μια γιγάντια ρόδα στέκεται στην όχθη του ποταμιού, αλλά δεν ανήκει σε κανένα αυτοκίνητο. Γυρίζει τόσο αργά που μοιάζει ακίνητη, και τα γυάλινα αυγά της σηκώνουν τους ανθρώπους πιο ψηλά κι από τα καμπαναριά.',
        en: 'A giant wheel stands on the riverbank, but it belongs to no car. It turns so slowly it seems to stand still, and its glass eggs carry people higher than the church towers.',
      },
      parentHint: {
        el: 'Είναι το London Eye (το Μάτι του Λονδίνου), η μεγάλη ρόδα. Από το Big Ben περάστε τη Westminster Bridge και στρίψτε αριστερά στην όχθη, 8 λεπτά περπάτημα. Για βόλτα με τη ρόδα, κλείστε εισιτήρια από πριν.',
        en: 'It is the London Eye, the big wheel. From Big Ben cross Westminster Bridge and turn left along the riverbank, an 8-minute walk. If you want to ride, book tickets ahead.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι η ρόδα σηκώνει τους ανθρώπους ψηλά. Ποια χρονιά χτίστηκε για να γιορτάσει;', en: 'The riddle says the wheel lifts people high. Which year was it built to celebrate?' },
        options: {
          el: ['Το 1900', 'Το 1666', 'Το 1500', 'Το 2000'],
          en: ['1900', '1666', '1500', '2000'],
        },
        correct: 3,
        explanation: {
          el: 'Χτίστηκε για το έτος 2000, την αρχή μιας νέας χιλιετίας, γι\' αυτό στην αρχή τη λέγανε Millennium Wheel, «Ρόδα της Χιλιετίας». Θα έμενε μόνο πέντε χρόνια, αλλά οι Λονδρέζοι την αγάπησαν τόσο που έμεινε για πάντα.',
          en: 'It was built for the year 2000, the start of a new millennium, which is why it was first called the Millennium Wheel. It was only meant to stay for five years, but Londoners loved it so much that it stayed for good.',
        },
      },
      onSite: {
        question: { el: 'Στάσου κοντά στη βάση της ρόδας και παρακολούθησε τους ανθρώπους που μπαίνουν σε μια καμπίνα. Σταματάει η ρόδα για να μπουν;', en: 'Stand near the bottom of the wheel and watch people getting into a capsule. Does the wheel stop for them?' },
        options: {
          el: ['Ναι, σταματάει για κάθε καμπίνα', 'Όχι, γυρίζει τόσο αργά που οι άνθρωποι μπαίνουν όσο κινείται', 'Σταματάει μόνο για τα παιδιά', 'Γυρίζει ανάποδα για να μπουν'],
          en: ['Yes, it stops for every capsule', 'No, it turns so slowly that people step in while it moves', 'It stops only for children', 'It turns backwards to let them in'],
        },
        correct: 1,
        explanation: {
          el: 'Συνεχίζει να γυρίζει με περίπου 26 εκατοστά το δευτερόλεπτο, πιο αργά από έναν άνθρωπο που περπατάει, κι έτσι οι επιβάτες απλώς μπαίνουν μέσα. Σταματάει μόνο για όποιον χρειάζεται λίγο παραπάνω χρόνο, για παράδειγμα με αναπηρικό αμαξίδιο. Μέτρησε και τις καμπίνες: είναι 32, και καθεμία χωράει ως 25 άτομα.',
          en: 'It keeps turning at about 26 centimetres per second, slower than a person walking, so passengers simply step in. It only stops for someone who needs a little extra time, for example with a wheelchair. Count the capsules too: there are 32, and each one carries up to 25 people.',
        },
      },
      story: {
        el: 'Αυτή η ρόδα χτίστηκε για να γιορτάσει το έτος 2000, και όταν άνοιξε ήταν η ψηλότερη ρόδα θέασης στον κόσμο: 135 μέτρα, πιο ψηλή από 30 διώροφα λεωφορεία το ένα πάνω στο άλλο. Την ιδέα την είχαν δύο αρχιτέκτονες, ο David Marks και η Julia Barfield. Η γιγάντια ρόδα ήρθε από το ποτάμι κομμάτι κομμάτι, συναρμολογήθηκε ξαπλωτή πάνω από το νερό και μετά σηκώθηκε όρθια. Έχει 32 γυάλινες καμπίνες, μία για καθέναν από τους 32 δήμους του Λονδίνου, και μια αργή περιστροφή κρατάει περίπου 30 λεπτά. Θα την ξήλωναν μετά από πέντε χρόνια, αλλά κανείς δεν ήθελε να την αποχαιρετήσει. Μια καλή ιδέα μπορεί να γίνει κάτι που μένει!',
        en: 'This wheel was built to celebrate the year 2000, and when it opened it was the tallest observation wheel in the world: 135 metres, taller than 30 double-decker buses stacked up. Two architects, David Marks and Julia Barfield, had the idea. The giant wheel came up the river in pieces, was put together lying flat over the water and then pulled upright. It has 32 glass capsules, one for each of London\'s 32 boroughs, and one slow turn takes about 30 minutes. It was supposed to be taken down after five years, but nobody wanted to say goodbye. A good idea can turn into something that lasts!',
      },
      didYouKnow: {
        el: 'Οι καμπίνες έχουν αριθμούς από το 1 ως το 33, αλλά είναι μόνο 32: το 13 το παρέλειψαν για γούρι. Κάθε καμπίνα ζυγίζει περίπου 10 τόνους και μένει πάντα οριζόντια χάρη σε μοτέρ, ώστε το πάτωμα να μη γέρνει ποτέ καθώς γυρίζει η ρόδα. Με καθαρό ουρανό, από την κορυφή βλέπεις περίπου 40 χιλιόμετρα μακριά.',
        en: 'The capsules are numbered 1 to 33 but there are only 32 of them: number 13 was skipped for luck. Each capsule weighs about 10 tonnes and is kept level by motors as the wheel turns, so the floor never tilts. On a clear day you can see about 40 kilometres from the top.',
      },
      quiz: [
        {
          q: { el: 'Πόσο κρατάει μια πλήρης περιστροφή της ρόδας;', en: 'How long does one full turn of the wheel take?' },
          options: {
            el: ['3 λεπτά', '3 ώρες', 'Περίπου 30 λεπτά', 'Μια ολόκληρη μέρα'],
            en: ['3 minutes', '3 hours', 'About 30 minutes', 'A whole day'],
          },
          correct: 2,
          explanation: {
            el: 'Μια πλήρης περιστροφή κρατάει περίπου 30 λεπτά: αρκετά για να δεις όλο το Λονδίνο από ψηλά.',
            en: 'One full turn takes about 30 minutes: enough time to see all of London from above.',
          },
        },
        {
          q: { el: 'Πόσες καμπίνες έχει η ρόδα, και γιατί τόσες;', en: 'How many capsules does the wheel have, and why that number?' },
          options: {
            el: ['32, μία για κάθε δήμο του Λονδίνου', '12, μία για κάθε μήνα', '7, μία για κάθε μέρα της εβδομάδας', '100, μία για κάθε χρόνο'],
            en: ['32, one for each London borough', '12, one for each month', '7, one for each day of the week', '100, one for each year'],
          },
          correct: 0,
          explanation: {
            el: 'Οι 32 καμπίνες αντιστοιχούν στους 32 δήμους του Λονδίνου, τις γειτονιές που μαζί φτιάχνουν την τεράστια πόλη.',
            en: 'The 32 capsules stand for London\'s 32 boroughs, the districts that together make up the huge city.',
          },
        },
        {
          q: { el: 'Πώς έφτασε η γιγάντια ρόδα στο Λονδίνο;', en: 'How did the giant wheel arrive in London?' },
          options: {
            el: ['Με ελικόπτερο', 'Χτίστηκε επιτόπου με τούβλα', 'Με τρένο', 'Κομμάτι κομμάτι από το ποτάμι, και μετά σηκώθηκε όρθια'],
            en: ['By helicopter', 'It was built on the spot from bricks', 'By train', 'In pieces up the river, then lifted upright'],
          },
          correct: 3,
          explanation: {
            el: 'Τα κομμάτια της ρόδας ήρθαν από το ποτάμι με φορτηγίδες, ενώθηκαν ξαπλωτά πάνω από το νερό και μετά η ρόδα σηκώθηκε όρθια σιγά σιγά.',
            en: 'The pieces came up the river on barges, were joined together lying flat over the water, and then the wheel was slowly pulled upright.',
          },
        },
      ],
    },

    // ── 5. Trafalgar Square ────────────────────────────────────────────────────
    {
      id: 'trafalgar-square',
      name: { el: 'Trafalgar Square', en: 'Trafalgar Square' },
      emoji: '🦁',
      lat: 51.508,
      lng: -0.1281,
      radiusM: 40,
      riddle: {
        el: 'Ένας ναύαρχος με ένα μόνο χέρι στέκεται στην κορυφή μιας πανύψηλης κολόνας, και τέσσερα τεράστια λιοντάρια από μπρούντζο φυλάνε τα πόδια της. Γύρω τους σιντριβάνια πιτσιλάνε νερό, και σε μια γωνιά ένα βάθρο αλλάζει άγαλμα κάθε λίγο.',
        en: 'An admiral with only one arm stands on top of a sky-high column, and four huge bronze lions guard its feet. Around them fountains splash, and in one corner a pedestal keeps changing its statue.',
      },
      parentHint: {
        el: 'Είναι η Trafalgar Square (η Πλατεία Τραφάλγκαρ) με τη Στήλη του Νέλσονα. Από το London Eye περάστε ξανά το ποτάμι από την πεζογέφυρα Golden Jubilee και ανεβείτε από το Charing Cross, περίπου 15 λεπτά, ή πάρτε την Bakerloo line από το Waterloo ως το Charing Cross.',
        en: 'It is Trafalgar Square, with Nelson\'s Column. From the London Eye cross back over the river on the Golden Jubilee footbridge and walk up past Charing Cross, about 15 minutes, or take the Bakerloo line from Waterloo to Charing Cross.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για έναν ναύαρχο. Τι διοικεί ένας ναύαρχος;', en: 'The riddle mentions an admiral. What does an admiral command?' },
        options: {
          el: ['Τα πλοία ενός στόλου', 'Έναν στρατό με άλογα', 'Μια χορωδία', 'Μια ομάδα μαγείρων'],
          en: ['A fleet of ships', 'An army of horses', 'A choir', 'A team of cooks'],
        },
        correct: 0,
        explanation: {
          el: 'Ο ναύαρχος διοικεί έναν στόλο από πολεμικά πλοία. Ο Horatio Nelson (Οράτιος Νέλσον) οδήγησε τον βρετανικό στόλο σε μια μεγάλη νίκη στη θάλασσα, κοντά στο ακρωτήριο Trafalgar της Ισπανίας, το 1805, και η πλατεία πήρε το όνομά της από εκείνη τη ναυμαχία.',
          en: 'An admiral commands a fleet of warships. Horatio Nelson led the British fleet to a great victory at sea near Cape Trafalgar in Spain in 1805, and the square was named after that battle.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τα μεγάλα σιντριβάνια της πλατείας. Πόσα είναι;', en: 'Count the big fountains in the square. How many are there?' },
        options: {
          el: ['Ένα', 'Τρία', 'Δύο', 'Τέσσερα'],
          en: ['One', 'Three', 'Two', 'Four'],
        },
        correct: 2,
        explanation: {
          el: 'Δύο μεγάλα σιντριβάνια, ένα σε κάθε πλευρά της κολόνας. Τα σημερινά φτιάχτηκαν τη δεκαετία του 1930· τα παλιά, από το 1845, ταξίδεψαν ως τον Καναδά, όπου παίζουν ακόμη με το νερό. Στη νοτιοανατολική γωνιά ψάξε και το μικροσκοπικό αστυνομικό φυλάκιο, με χώρο για έναν μόνο αστυνομικό!',
          en: 'Two big fountains, one on each side of the column. The ones you see were made in the 1930s; the old ones, from 1845, travelled all the way to Canada, where they still splash today. In the south-east corner, look for the tiny police post too, with room for just one officer!',
        },
      },
      story: {
        el: 'Αυτή η πλατεία θυμίζει μια ναυμαχία που έγινε το 1805 κοντά στο ακρωτήριο Trafalgar (Τραφάλγκαρ) της Ισπανίας, όπου ο ναύαρχος Nelson οδήγησε τον βρετανικό στόλο στη νίκη, αλλά έχασε τη ζωή του. Η πόλη του έχτισε μια κολόνα 52 μέτρων, για να στέκεται ψηλότερα σχεδόν από όλα γύρω του. Τα τέσσερα μπρούντζινα λιοντάρια στα πόδια της ήρθαν το 1867 και τα έφτιαξε ο Edwin Landseer, ένας ζωγράφος διάσημος για τα ζώα του. Στις γωνίες υπάρχουν τέσσερα βάθρα, και τα τρία κρατούν παλιά αγάλματα. Το τέταρτο έμεινε άδειο πάνω από 150 χρόνια, γιατί τελείωσαν τα χρήματα· σήμερα φιλοξενεί ένα καινούργιο έργο τέχνης κάθε δύο χρόνια περίπου. Σιντριβάνια, συναυλίες και πρωτοχρονιάτικες γιορτές: εδώ μαζεύεται το Λονδίνο!',
        en: 'This square remembers a sea battle fought in 1805 near Cape Trafalgar in Spain, where Admiral Nelson led the British fleet to victory but lost his life. The city built him a column 52 metres tall, so he stands higher than almost everything around him. The four bronze lions at its foot arrived in 1867 and were made by Edwin Landseer, a painter famous for his animals. In the corners are four pedestals, and three of them carry old statues. The fourth stood empty for more than 150 years because the money ran out; today it shows a new artwork every couple of years. Fountains, concerts and New Year parties: this is where London gathers!',
      },
      didYouKnow: {
        el: 'Κάθε Δεκέμβριο από το 1947, η πόλη του Όσλο στέλνει ένα τεράστιο χριστουγεννιάτικο δέντρο στην Trafalgar Square, ως ευχαριστώ για τη βοήθεια της Βρετανίας στον Β΄ Παγκόσμιο Πόλεμο. Και το μικρό στρογγυλό κιόσκι στη νοτιοανατολική γωνιά λέγεται συχνά «το μικρότερο αστυνομικό τμήμα της Βρετανίας»: χτίστηκε τη δεκαετία του 1920 και χωράει έναν μόνο αστυνομικό.',
        en: 'Every December since 1947 the city of Oslo has sent a huge Christmas tree to Trafalgar Square, as a thank-you for British support during the Second World War. And the little round box in the south-east corner is often called the smallest police station in Britain: built in the 1920s, it has room for one officer.',
      },
      quiz: [
        {
          q: { el: 'Τι θυμίζει αυτή η πλατεία;', en: 'What does the square remember?' },
          options: {
            el: ['Έναν ποδοσφαιρικό αγώνα', 'Μια ναυμαχία του 1805', 'Έναν βασιλικό γάμο', 'Τη Μεγάλη Πυρκαγιά'],
            en: ['A football match', 'A sea battle of 1805', 'A royal wedding', 'The Great Fire'],
          },
          correct: 1,
          explanation: {
            el: 'Η πλατεία πήρε το όνομά της από τη ναυμαχία του Trafalgar, το 1805, όπου νίκησε ο στόλος του ναυάρχου Nelson.',
            en: 'The square is named after the Battle of Trafalgar in 1805, won by Admiral Nelson\'s fleet.',
          },
        },
        {
          q: { el: 'Ποιος έφτιαξε τα τέσσερα μπρούντζινα λιοντάρια;', en: 'Who made the four bronze lions?' },
          options: {
            el: ['Ο Christopher Wren', 'Ο ίδιος ο ναύαρχος Nelson', 'Ο Ισαάκ Νεύτων', 'Ο Edwin Landseer, ένας ζωγράφος ζώων'],
            en: ['Christopher Wren', 'Admiral Nelson himself', 'Isaac Newton', 'Edwin Landseer, a painter of animals'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Edwin Landseer ήταν ζωγράφος, διάσημος για τις εικόνες του με ζώα. Τα λιοντάρια του τοποθετήθηκαν στην πλατεία το 1867.',
            en: 'Edwin Landseer was a painter, famous for his pictures of animals. His lions were placed in the square in 1867.',
          },
        },
        {
          q: { el: 'Γιατί το τέταρτο βάθρο έμεινε άδειο τόσο καιρό;', en: 'Why did the fourth pedestal stay empty for so long?' },
          options: {
            el: ['Τελείωσαν τα χρήματα', 'Κανείς δεν μπορούσε να το σκαρφαλώσει', 'Ήταν κρατημένο για τον βασιλιά', 'Δεν άρεσε στα λιοντάρια'],
            en: ['The money ran out', 'Nobody could climb it', 'It was reserved for the King', 'The lions did not like it'],
          },
          correct: 0,
          explanation: {
            el: 'Το βάθρο περίμενε ένα άγαλμα ενός βασιλιά πάνω σε άλογο, αλλά τα χρήματα τελείωσαν. Σήμερα φιλοξενεί σύγχρονα έργα τέχνης που αλλάζουν.',
            en: 'The pedestal was meant for a statue of a king on horseback, but the money ran out. Today it hosts modern artworks that change.',
          },
        },
      ],
    },

    // ── 6. Covent Garden ───────────────────────────────────────────────────────
    {
      id: 'covent-garden',
      name: { el: 'Covent Garden', en: 'Covent Garden' },
      emoji: '🎭',
      lat: 51.5118,
      lng: -0.1233,
      radiusM: 50,
      riddle: {
        el: 'Ένας κήπος χωρίς καθόλου γρασίδι, όπου παλιά οι αγρότες πουλούσαν μήλα και λάχανα, και σήμερα ζογκλέρ και μουσικοί κάνουν τον κόσμο να χειροκροτεί. Μια εκκλησία με μεγάλες κολόνες παρακολουθεί την παράσταση από την άκρη της πλατείας.',
        en: 'A garden with no grass at all, where farmers once sold apples and cabbages, and today jugglers and musicians make the crowd clap. A church with big columns watches the show from the edge of the square.',
      },
      parentHint: {
        el: 'Είναι η πλατεία του Covent Garden (Κόβεντ Γκάρντεν). Από την Trafalgar Square περπατήστε 8 λεπτά βορειοανατολικά από τη St Martin\'s Lane και την Garrick Street· οι καλλιτέχνες του δρόμου παίζουν συνήθως μπροστά στην εκκλησία St Paul, στη δυτική πλευρά της πλατείας.',
        en: 'It is the Covent Garden piazza. From Trafalgar Square walk 8 minutes north-east up St Martin\'s Lane and along Garrick Street; the street performers usually play in front of St Paul\'s church, on the west side of the square.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει αυτό το μέρος «κήπο». Τίνος κήπος ήταν, πολύ παλιά, πριν από την αγορά;', en: 'The riddle calls this place a garden. Whose garden was it, long ago, before the market?' },
        options: {
          el: ['Ο λαχανόκηπος του βασιλιά', 'Ο κήπος ενός αβαείου, ο «convent garden» των μοναχών', 'Ο κήπος ενός δράκου', 'Ένα γήπεδο ποδοσφαίρου'],
          en: ['The King\'s vegetable garden', 'The garden of an abbey, the monks\' "convent garden"', 'A dragon\'s garden', 'A football pitch'],
        },
        correct: 1,
        explanation: {
          el: 'Πριν από περισσότερα από 500 χρόνια αυτός ήταν ο «convent garden», ο κήπος του μοναστηριού του Westminster Abbey, όπου οι μοναχοί καλλιεργούσαν λαχανικά. Πες «convent garden» γρήγορα και θα ακούσεις «Covent Garden»!',
          en: 'More than 500 years ago this was the "convent garden" of Westminster Abbey, where the monks grew vegetables. Say "convent garden" quickly and you get "Covent Garden"!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τις μακριές στοές της αγοράς στη μέση της πλατείας. Από τι είναι φτιαγμένη η στέγη τους;', en: 'Look at the long market halls in the middle of the square. What is their roof made of?' },
        options: {
          el: ['Από άχυρο', 'Από ξύλινες σανίδες', 'Από κόκκινα κεραμίδια', 'Από σίδερο και γυαλί'],
          en: ['Straw', 'Wooden planks', 'Red tiles', 'Iron and glass'],
        },
        correct: 3,
        explanation: {
          el: 'Από σίδερο και γυαλί, σαν γιγάντιο θερμοκήπιο, για να πέφτει το φως του ήλιου στους πάγκους. Οι πέτρινες στοές χτίστηκαν το 1830 και οι γυάλινες στέγες προστέθηκαν περίπου 40 χρόνια αργότερα. Μέσα, η Apple Market (η Αγορά των Μήλων) πουλάει σήμερα χειροτεχνήματα, όχι μήλα.',
          en: 'Iron and glass, like a giant greenhouse, so that sunlight falls on the stalls. The stone halls were built in 1830 and the glass roofs were added about 40 years later. Inside, the Apple Market sells crafts today, not apples.',
        },
      },
      story: {
        el: 'Πριν από σχεδόν 400 χρόνια, ένας αρχιτέκτονας που λεγόταν Inigo Jones σχεδίασε εδώ την πρώτη αληθινή πλατεία του Λονδίνου, με κομψά σπίτια και μια εκκλησία, αφού είχε δει τις πιάτσες της Ιταλίας. Σύντομα ήρθαν αγρότες να πουλήσουν φρούτα, λαχανικά και λουλούδια, και για πάνω από 300 χρόνια αυτή ήταν η μεγάλη αγορά φρούτων και λαχανικών του Λονδίνου, που ξυπνούσε κάθε μέρα πριν βγει ο ήλιος. Το 1974 η αγορά μετακόμισε, και οι παλιές στοές σώθηκαν για μαγαζιά, καφέ και παραστάσεις. Καλλιτέχνες του δρόμου δίνουν παραστάσεις σε αυτή την πλατεία εδώ και αιώνες, και ακόμη και σήμερα ζογκλέρ και μουσικοί μαζεύουν κόσμο μπροστά στην εκκλησία. Από τα λάχανα στις τούμπες: ένας τόπος μπορεί να αλλάζει και να μένει ο εαυτός του!',
        en: 'Almost 400 years ago, an architect called Inigo Jones designed this as London\'s very first proper square, with elegant houses and a church, after seeing the piazzas of Italy. Soon farmers arrived to sell fruit, vegetables and flowers, and for more than 300 years this was London\'s great fruit and vegetable market, waking up before dawn every day. In 1974 the market moved away, and the old halls were saved for shops, cafes and shows. Street performers have played in this square for centuries, and today jugglers and musicians still draw a crowd in front of the church. From cabbages to cartwheels: a place can change and still stay itself!',
      },
      didYouKnow: {
        el: 'Το κουκλοθέατρο που είδε εδώ ο Samuel Pepys τον Μάιο του 1662 είναι η πρώτη καταγραμμένη παράσταση Punch and Judy στη Βρετανία, και μια πλάκα στον τοίχο της εκκλησίας το θυμίζει. Η εκκλησία St Paul του Covent Garden λέγεται «η εκκλησία των ηθοποιών», και κάθε Μάιο ένα φεστιβάλ κουκλοθεάτρου γιορτάζει ακόμη τα «γενέθλια» του Mr Punch.',
        en: 'The puppet show that Samuel Pepys saw here in May 1662 is the first recorded Punch and Judy performance in Britain, and a plaque on the church wall marks it. St Paul\'s Covent Garden is known as the actors\' church, and every May a puppet festival still celebrates Mr Punch\'s "birthday".',
      },
      quiz: [
        {
          q: { el: 'Τι πουλούσαν σε αυτή την πλατεία για περισσότερα από 300 χρόνια;', en: 'What was sold in this square for more than 300 years?' },
          options: {
            el: ['Αυτοκίνητα', 'Βιβλία', 'Φρούτα, λαχανικά και λουλούδια', 'Σπαθιά'],
            en: ['Cars', 'Books', 'Fruit, vegetables and flowers', 'Swords'],
          },
          correct: 2,
          explanation: {
            el: 'Για περισσότερα από 300 χρόνια οι αγρότες πουλούσαν εδώ φρούτα, λαχανικά και λουλούδια, μέχρι το 1974.',
            en: 'For more than 300 years farmers sold fruit, vegetables and flowers here, until 1974.',
          },
        },
        {
          q: { el: 'Ποιος σχεδίασε εδώ την πρώτη αληθινή πλατεία του Λονδίνου;', en: 'Who designed London\'s first proper square here?' },
          options: {
            el: ['Ο Inigo Jones', 'Η Eliza Doolittle', 'Η βασίλισσα Βικτωρία', 'Ο Ισαάκ Νεύτων'],
            en: ['Inigo Jones', 'Eliza Doolittle', 'Queen Victoria', 'Isaac Newton'],
          },
          correct: 0,
          explanation: {
            el: 'Ο αρχιτέκτονας Inigo Jones σχεδίασε την πλατεία τη δεκαετία του 1630, με ιδέες που έφερε από την Ιταλία.',
            en: 'The architect Inigo Jones designed the square in the 1630s, with ideas he brought back from Italy.',
          },
        },
        {
          q: { el: 'Τι έγινε το 1974;', en: 'What happened in 1974?' },
          options: {
            el: ['Πλημμύρισε η πλατεία', 'Η αγορά μετακόμισε', 'Χτίστηκε η εκκλησία', 'Ήρθε ο πρώτος καλλιτέχνης του δρόμου'],
            en: ['The square was flooded', 'The market moved away', 'The church was built', 'The first street performer arrived'],
          },
          correct: 1,
          explanation: {
            el: 'Το 1974 η αγορά μετακόμισε σε άλλη περιοχή του Λονδίνου, και οι παλιές στοές έγιναν μαγαζιά, καφέ και σκηνή για παραστάσεις.',
            en: 'In 1974 the market moved to another part of London, and the old halls became shops, cafes and a stage for shows.',
          },
        },
      ],
    },

    // ── 7. British Museum ──────────────────────────────────────────────────────
    {
      id: 'british-museum',
      name: { el: 'British Museum', en: 'British Museum' },
      emoji: '🏛️',
      lat: 51.5189,
      lng: -0.1269,
      radiusM: 50,
      riddle: {
        el: 'Πίσω από μια πρόσοψη που μοιάζει με αρχαίο ελληνικό ναό κρύβονται μούμιες, μια μαύρη πέτρα που έμαθε στον κόσμο να διαβάζει τα αιγυπτιακά, και μια αυλή με γυάλινη στέγη σαν κύμα. Και η είσοδος δεν κοστίζει τίποτα.',
        en: 'Behind a front that looks like an ancient Greek temple hide mummies, a black stone that taught the world to read Egyptian, and a courtyard with a glass roof like a wave. And getting in costs nothing at all.',
      },
      parentHint: {
        el: 'Είναι το British Museum (το Βρετανικό Μουσείο). Από το Covent Garden περπατήστε 10 λεπτά βόρεια από τη Neal Street και τη Museum Street ως την πύλη στην Great Russell Street. Η είσοδος είναι δωρεάν· τα Σαββατοκύριακα βοηθάει να κλείσετε δωρεάν εισιτήριο με ώρα από πριν.',
        en: 'It is the British Museum. From Covent Garden walk 10 minutes north along Neal Street and Museum Street to the gates on Great Russell Street. Entry is free; at weekends it helps to book a free timed ticket in advance.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για μια μαύρη πέτρα που έμαθε στον κόσμο να διαβάζει τα αιγυπτιακά. Πώς λέγεται αυτή η αρχαία γραφή;', en: 'The riddle mentions a black stone that taught the world to read Egyptian. What is that ancient writing called?' },
        options: {
          el: ['Αλφαβητόσουπα', 'Ρούνοι', 'Ιερογλυφικά', 'Κώδικας Μορς'],
          en: ['Alphabet soup', 'Runes', 'Hieroglyphs', 'Morse code'],
        },
        correct: 2,
        explanation: {
          el: 'Τα ιερογλυφικά είναι η γραφή με εικόνες της αρχαίας Αιγύπτου. Κανείς δεν μπορούσε να τα διαβάσει για περισσότερα από χίλια χρόνια, μέχρι που το 1799 βρέθηκε η Στήλη της Ροζέτας, με το ίδιο μήνυμα σε τρεις γραφές, η μία στα αρχαία ελληνικά. Οι μελετητές χρησιμοποίησαν τα ελληνικά για να σπάσουν τον κώδικα.',
          en: 'Hieroglyphs are the picture-writing of ancient Egypt. Nobody could read them for more than a thousand years, until the Rosetta Stone was found in 1799 with the same message in three scripts, one of them ancient Greek. Scholars used the Greek to crack the code.',
        },
      },
      onSite: {
        question: { el: 'Στάσου στην αυλή και κοίταξε τη μεγάλη είσοδο με την τριγωνική στέγη. Πόσες κολόνες την κρατούν στη σειρά, μπροστά μπροστά;', en: 'Stand in the forecourt and look at the big entrance porch with the triangle on top. How many columns hold it up in the front row?' },
        options: {
          el: ['Έξι', 'Οκτώ', 'Δέκα', 'Δώδεκα'],
          en: ['Six', 'Eight', 'Ten', 'Twelve'],
        },
        correct: 1,
        explanation: {
          el: 'Οκτώ κολόνες στέκονται στη σειρά κάτω από το τρίγωνο, σε ιωνικό ρυθμό όπως στην αρχαία Ελλάδα, με σπείρες στην κορυφή σαν τυλιγμένους παπύρους. Ολόκληρη η πρόσοψη έχει 44 κολόνες. Τα γλυπτά μέσα στο τρίγωνο δείχνουν τους ανθρώπους να ανεβαίνουν από την άγνοια στη γνώση.',
          en: 'Eight columns stand in a row under the triangle, in the Ionic style of ancient Greece, with curls at the top like rolled-up scrolls. The whole front has 44 columns. The sculptures inside the triangle show people rising from ignorance to knowledge.',
        },
      },
      story: {
        el: 'Όταν ο γιατρός και συλλέκτης Hans Sloane πέθανε το 1753, άφησε 71.000 θησαυρούς στο έθνος, και έτσι γεννήθηκε το πρώτο εθνικό μουσείο του κόσμου, δωρεάν για όλους από τότε που άνοιξε, το 1759. Σήμερα ζουν εδώ περίπου 8 εκατομμύρια αντικείμενα. Το πιο διάσημο είναι η Στήλη της Ροζέτας (Rosetta Stone), μια πέτρα με το ίδιο μήνυμα γραμμένο σε τρεις γραφές· επειδή η μία ήταν ελληνικά, ένας νεαρός Γάλλος, ο Champollion (Σαμπολιόν), κατάφερε με τη βοήθειά της να διαβάσει επιτέλους τα ιερογλυφικά το 1822. Εδώ βρίσκονται και τα μαρμάρινα γλυπτά του Παρθενώνα από την Αθήνα, που ήρθαν στο Λονδίνο πριν από περισσότερα από 200 χρόνια· η Ελλάδα ζητάει να γυρίσουν σπίτι τους, και η συζήτηση συνεχίζεται. Στη μέση, μια αυλή με κυματιστή γυάλινη στέγη αγκαλιάζει ένα στρογγυλό αναγνωστήριο. Η γνώση είναι για να μοιράζεται!',
        en: 'When the doctor and collector Hans Sloane died in 1753, he left 71,000 treasures to the nation, and so the world\'s first national museum was born, free for everyone since it opened in 1759. Today about 8 million objects live here. The most famous is the Rosetta Stone, carved with the same message in three scripts; because one was Greek, a young Frenchman called Champollion used it to read hieroglyphs at last in 1822. Here too are the marble sculptures from the Parthenon in Athens, brought to London more than 200 years ago; Greece asks for them to come home, and people still discuss it. In the middle, a courtyard with a wavy glass roof wraps around a round reading room. Knowledge is for sharing!',
      },
      didYouKnow: {
        el: 'Τη Στήλη της Ροζέτας τη βρήκαν Γάλλοι στρατιώτες το 1799, ενώ επισκεύαζαν ένα οχυρό στην Αίγυπτο, και ήρθε στο Λονδίνο αφού οι Βρετανοί τους νίκησαν εκεί. Η Μεγάλη Αυλή (Great Court), που άνοιξε το 2000, είναι η μεγαλύτερη στεγασμένη δημόσια πλατεία της Ευρώπης, και η στέγη της από 3.312 τζάμια σχεδιάστηκε με υπολογιστή, ώστε κάθε τζάμι να έχει το δικό του μοναδικό σχήμα.',
        en: 'The Rosetta Stone was found by French soldiers in 1799 while they were repairing a fort in Egypt, and it came to London after the British defeated them there. The Great Court, opened in 2000, is the largest covered public square in Europe, and its roof of 3,312 glass panes was designed by computer so that each pane has its own unique shape.',
      },
      quiz: [
        {
          q: { el: 'Τίνος η συλλογή ξεκίνησε το μουσείο;', en: 'Whose collection started the museum?' },
          options: {
            el: ['Της βασίλισσας Βικτωρίας', 'Του Champollion', 'Ενός πειρατή', 'Του Hans Sloane'],
            en: ['Queen Victoria\'s', 'Champollion\'s', 'A pirate\'s', 'Hans Sloane\'s'],
          },
          correct: 3,
          explanation: {
            el: 'Ο γιατρός Hans Sloane άφησε τους 71.000 θησαυρούς του στη χώρα, και έτσι γεννήθηκε το μουσείο το 1753.',
            en: 'The doctor Hans Sloane left his 71,000 treasures to the nation, and so the museum was born in 1753.',
          },
        },
        {
          q: { el: 'Γιατί ήταν τόσο χρήσιμη η Στήλη της Ροζέτας;', en: 'Why was the Rosetta Stone so useful?' },
          options: {
            el: ['Ήταν από χρυσάφι', 'Είχε το ίδιο μήνυμα σε τρεις γραφές, η μία στα ελληνικά', 'Μπορούσε να μιλήσει', 'Έδειχνε έναν χάρτη της Αιγύπτου'],
            en: ['It was made of gold', 'It had the same message in three scripts, one of them Greek', 'It could talk', 'It showed a map of Egypt'],
          },
          correct: 1,
          explanation: {
            el: 'Επειδή το μήνυμα ήταν και στα ελληνικά, που οι μελετητές ήξεραν, μπόρεσαν να συγκρίνουν τις γραφές και να διαβάσουν τα ιερογλυφικά.',
            en: 'Because the message was also in Greek, which scholars could read, they could compare the scripts and work out the hieroglyphs.',
          },
        },
        {
          q: { el: 'Πόσο κοστίζει η είσοδος στο μουσείο;', en: 'How much does it cost to enter the museum?' },
          options: {
            el: ['Τίποτα, είναι δωρεάν', 'Ένα χρυσό νόμισμα', 'Δέκα λίρες', 'Μία μούμια'],
            en: ['Nothing, it is free', 'One gold coin', 'Ten pounds', 'A mummy'],
          },
          correct: 0,
          explanation: {
            el: 'Η είσοδος είναι δωρεάν από την πρώτη μέρα, το 1759. Η γνώση είναι για όλους!',
            en: 'Entry has been free since the very first day, in 1759. Knowledge is for everyone!',
          },
        },
      ],
    },

    // ── 8. St Paul's Cathedral ─────────────────────────────────────────────────
    {
      id: 'st-pauls-cathedral',
      name: { el: 'St Paul\'s Cathedral', en: 'St Paul\'s Cathedral' },
      emoji: '🔔',
      lat: 51.5138,
      lng: -0.0999,
      radiusM: 50,
      riddle: {
        el: 'Μετά τη μεγάλη φωτιά, ένας αρχιτέκτονας έχτισε μια εκκλησία με έναν θόλο τόσο τεράστιο που φαίνεται από όλη την πόλη. Ψηλά μέσα στον θόλο, αν ψιθυρίσεις στον τοίχο, κάποιος στην απέναντι πλευρά σε ακούει.',
        en: 'After the great fire, an architect built a church with a dome so enormous you can see it from all over the city. High inside that dome, if you whisper to the wall, someone on the far side can hear you.',
      },
      parentHint: {
        el: 'Είναι ο St Paul\'s Cathedral (ο Καθεδρικός του Αγίου Παύλου). Από το British Museum πάρτε την Central line από το Holborn ως τον σταθμό St Paul\'s, 2 στάσεις, ή περπατήστε 25 λεπτά ανατολικά· η δυτική πρόσοψη με το άγαλμα της βασίλισσας Anne είναι μπροστά σας μόλις φτάσετε.',
        en: 'It is St Paul\'s Cathedral. From the British Museum take the Central line from Holborn to St Paul\'s station, 2 stops, or walk 25 minutes east; the west front with the statue of Queen Anne faces you as you arrive.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για μια μεγάλη φωτιά. Ποια χρονιά έγινε η Μεγάλη Πυρκαγιά του Λονδίνου;', en: 'The riddle mentions a great fire. In which year did the Great Fire of London happen?' },
        options: {
          el: ['Το 1066', 'Το 1966', 'Το 2000', 'Το 1666'],
          en: ['1066', '1966', '2000', '1666'],
        },
        correct: 3,
        explanation: {
          el: 'Η Μεγάλη Πυρκαγιά του Λονδίνου ξεκίνησε από έναν φούρνο τον Σεπτέμβριο του 1666 και έκαιγε τέσσερις μέρες. Κατέστρεψε τον παλιό καθεδρικό και το μεγαλύτερο μέρος της παλιάς πόλης, αλλά, παραδόξως, ελάχιστοι άνθρωποι καταγράφηκαν ως θύματα, και το Λονδίνο ξαναχτίστηκε πιο γερό, με τούβλα και πέτρα αντί για ξύλο.',
          en: 'The Great Fire of London started in a bakery in September 1666 and burned for four days. It destroyed the old cathedral and most of the old city, but amazingly very few people were recorded hurt, and London was rebuilt stronger, with brick and stone instead of wood.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στον καθεδρικό, δίπλα στο άγαλμα. Μέτρησε τους πύργους δεξιά και αριστερά της πρόσοψης.', en: 'Stand in front of the cathedral, by the statue. Count the towers on either side of the front.' },
        options: {
          el: ['Δύο', 'Τέσσερις', 'Έναν', 'Τρεις'],
          en: ['Two', 'Four', 'One', 'Three'],
        },
        correct: 0,
        explanation: {
          el: 'Δύο πύργοι, ένας σε κάθε πλευρά, και ανάμεσά τους μια είσοδος με ζευγάρια από κολόνες. Πίσω τους υψώνεται ο τεράστιος θόλος. Το άγαλμα μπροστά είναι η βασίλισσα Anne (Άννα), που βασίλευε όταν τελείωσε ο καθεδρικός το 1710· αυτό που βλέπεις είναι αντίγραφο του 1886, γιατί το αρχικό είχε φθαρεί.',
          en: 'Two towers, one on each side, and between them a porch with pairs of columns. The huge dome rises behind them. The statue in front is Queen Anne, who was queen when the cathedral was finished in 1710; the one you see is a copy made in 1886, because the original wore away.',
        },
      },
      story: {
        el: 'Το 1666 η Μεγάλη Πυρκαγιά σάρωσε το Λονδίνο και ο παλιός καθεδρικός κάηκε. Ο βασιλιάς ζήτησε από τον Christopher Wren (Κρίστοφερ Ρεν), που ήταν αστρονόμος και μαθηματικός εκτός από αρχιτέκτονας, να σχεδιάσει έναν καινούργιο. Ο Wren δούλεψε 35 χρόνια, και ο καθεδρικός τελείωσε το 1710 με έναν θόλο 111 μέτρων, από τους μεγαλύτερους στον κόσμο. Αν ανέβεις 257 σκαλιά φτάνεις στη Γαλαρία των Ψιθύρων (Whispering Gallery), όπου ένας ψίθυρος στον τοίχο ταξιδεύει γύρω γύρω ως την άλλη πλευρά. Στον Β΄ Παγκόσμιο Πόλεμο έπεφταν βόμβες ολόγυρα, αλλά εθελοντές φύλαγαν τη στέγη τις νύχτες και ο θόλος άντεξε· μια φωτογραφία του, όρθιου μέσα στους καπνούς, έδωσε κουράγιο σε όλη την πόλη. Ένα κτίριο μπορεί να γίνει σύμβολο ελπίδας!',
        en: 'In 1666 the Great Fire swept through London and the old cathedral burned down. The King asked Christopher Wren, who was an astronomer and mathematician as well as an architect, to design a new one. Wren worked on it for 35 years, and the cathedral was finished in 1710 with a dome 111 metres high, one of the biggest in the world. Climb 257 steps and you reach the Whispering Gallery, where a whisper against the wall travels round to the other side. During the Second World War, bombs fell all around, but volunteers guarded the roof at night and the dome survived; a photograph of it standing in the smoke gave the whole city courage. A building can be a symbol of hope!',
      },
      didYouKnow: {
        el: 'Ο Christopher Wren είναι θαμμένος στην κρύπτη κάτω από τον ίδιο του τον καθεδρικό, και αντί για μεγαλοπρεπές μνημείο ο τάφος του έχει μια λατινική φράση που λέει: «Αναγνώστη, αν ψάχνεις το μνημείο του, κοίταξε γύρω σου». Μετά την πυρκαγιά ξανάχτισε επίσης περισσότερες από 50 άλλες εκκλησίες του Λονδίνου.',
        en: 'Christopher Wren is buried in the crypt under his own cathedral, and instead of a grand monument his tomb carries a Latin line that says: "Reader, if you seek his monument, look around you." After the fire he also rebuilt more than 50 other London churches.',
      },
      quiz: [
        {
          q: { el: 'Ποιος σχεδίασε τον καθεδρικό μετά τη Μεγάλη Πυρκαγιά;', en: 'Who designed the cathedral after the Great Fire?' },
          options: {
            el: ['Ο Inigo Jones', 'Ο Christopher Wren', 'Ο Ισαάκ Νεύτων', 'Ο Edwin Landseer'],
            en: ['Inigo Jones', 'Christopher Wren', 'Isaac Newton', 'Edwin Landseer'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Christopher Wren, αρχιτέκτονας αλλά και αστρονόμος, σχεδίασε τον καινούργιο καθεδρικό μετά τη φωτιά του 1666.',
            en: 'Christopher Wren, architect and astronomer, designed the new cathedral after the fire of 1666.',
          },
        },
        {
          q: { el: 'Τι συμβαίνει στη Γαλαρία των Ψιθύρων;', en: 'What happens in the Whispering Gallery?' },
          options: {
            el: ['Κουνιέται το πάτωμα', 'Τραγουδούν πουλιά', 'Ένας ψίθυρος στον τοίχο ακούγεται στην άλλη πλευρά', 'Είναι πάντα σκοτεινά'],
            en: ['The floor moves', 'Birds sing', 'A whisper against the wall can be heard on the other side', 'It is always dark'],
          },
          correct: 2,
          explanation: {
            el: 'Ο στρογγυλός τοίχος της γαλαρίας μεταφέρει τον ήχο γύρω γύρω, κι έτσι ένας ψίθυρος φτάνει στην απέναντι πλευρά.',
            en: 'The round wall of the gallery carries sound all the way around, so a whisper reaches the far side.',
          },
        },
        {
          q: { el: 'Πόσα χρόνια δούλεψε ο Wren στον καθεδρικό;', en: 'How long did Wren work on the cathedral?' },
          options: {
            el: ['5 χρόνια', '1 χρόνο', '100 χρόνια', '35 χρόνια'],
            en: ['5 years', '1 year', '100 years', '35 years'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Wren δούλεψε 35 χρόνια, από το 1675 ως το 1710. Τα μεγάλα έργα θέλουν υπομονή!',
            en: 'Wren worked for 35 years, from 1675 to 1710. Great works take patience!',
          },
        },
      ],
    },

    // ── 9. Tower of London ─────────────────────────────────────────────────────
    {
      id: 'tower-of-london',
      name: { el: 'Tower of London', en: 'Tower of London' },
      emoji: '🏰',
      lat: 51.5081,
      lng: -0.078,
      radiusM: 80,
      riddle: {
        el: 'Ένα κάστρο σχεδόν χιλίων χρόνων φυλάει τα στέμματα του βασιλείου, και μαύρα πουλιά περπατούν καμαρωτά στο γρασίδι του σαν να είναι οι φύλακές του. Οι αληθινοί φύλακες φορούν κόκκινες και μπλε στολές και έχουν ένα παράξενο παρατσούκλι που θυμίζει φαγητό.',
        en: 'A castle almost a thousand years old guards the crowns of the kingdom, and black birds strut across its lawns as if they were its keepers. The real keepers wear red and blue uniforms and have a strange nickname that sounds like food.',
      },
      parentHint: {
        el: 'Είναι ο Tower of London (ο Πύργος του Λονδίνου). Από τον St Paul\'s πάρτε το μετρό ως το Tower Hill (Central line ως το Bank και μετά District ή Circle line), ή περπατήστε 25 λεπτά ανατολικά· η είσοδος και τα εκδοτήρια είναι στη δυτική πλευρά, δίπλα στο ποτάμι. Κλείστε εισιτήρια από πριν.',
        en: 'It is the Tower of London. From St Paul\'s take the tube to Tower Hill (Central line to Bank, then the District or Circle line), or walk 25 minutes east; the entrance and ticket office are on the west side, by the river. Book tickets ahead.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για μαύρα πουλιά που μοιάζουν να φυλάνε το κάστρο. Ποια πουλιά είναι;', en: 'The riddle mentions black birds that seem to guard the castle. Which birds are they?' },
        options: {
          el: ['Κοράκια', 'Πιγκουίνοι', 'Μαύροι κύκνοι', 'Κουκουβάγιες'],
          en: ['Ravens', 'Penguins', 'Black swans', 'Owls'],
        },
        correct: 0,
        explanation: {
          el: 'Τουλάχιστον έξι κοράκια ζουν πάντα στον Πύργο, και τα φροντίζει ένας φύλακας που λέγεται Ravenmaster. Ένας παλιός θρύλος λέει ότι αν τα κοράκια φύγουν ποτέ, το βασίλειο θα πέσει, γι\' αυτό κανείς δεν το ρισκάρει!',
          en: 'At least six ravens always live at the Tower, cared for by a keeper called the Ravenmaster. An old legend says that if the ravens ever leave, the kingdom will fall, so nobody takes any chances!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε το βαθύ, φαρδύ χαντάκι που τρέχει γύρω γύρω από τα εξωτερικά τείχη. Τι υπάρχει στον πάτο του σήμερα;', en: 'Look at the deep, wide ditch that runs all around the outer walls. What is at the bottom of it today?' },
        options: {
          el: ['Βαθύ νερό με βάρκες', 'Άμμος, σαν παραλία', 'Γρασίδι και φυτά, χωρίς νερό', 'Ένα πάρκινγκ'],
          en: ['Deep water with boats', 'Sand, like a beach', 'Grass and plants, no water', 'A car park'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι μια τάφρος, που σκάφτηκε τον 13ο αιώνα και γέμιζε με νερό από το ποτάμι για να κρατάει μακριά τους εχθρούς. Ως τον 19ο αιώνα το νερό είχε γίνει βρόμικο και ανθυγιεινό, κι έτσι το 1843 η τάφρος αδειάστηκε και έγινε γρασίδι. Κάποια καλοκαίρια γεμίζει αγριολούλουδα.',
          en: 'It is a moat, dug in the 1200s and filled with river water to keep enemies away. By the 1800s the water had become dirty and unhealthy, so in 1843 the moat was drained and turned into a lawn. Some summers it fills with wild flowers.',
        },
      },
      story: {
        el: 'Αφού κέρδισε την Αγγλία το 1066, ο Γουλιέλμος ο Κατακτητής ήθελε ένα φρούριο για να δείξει σε όλους ποιος κάνει κουμάντο, κι έτσι γύρω στο 1078 ξεκίνησε τον μεγάλο τετράγωνο πύργο στη μέση, που αργότερα βάφτηκε άσπρος και ονομάστηκε Λευκός Πύργος (White Tower). Στους αιώνες που ακολούθησαν οι βασιλιάδες πρόσθεσαν τείχη, πύργους και μια τάφρο, και το κάστρο έγινε παλάτι, θησαυροφυλάκιο, νομισματοκοπείο και φυλακή. Ήταν ακόμη και ζωολογικός κήπος: μια πολική αρκούδα έζησε κάποτε εδώ και την άφηναν να ψαρεύει στο ποτάμι δεμένη με ένα μακρύ σκοινί. Σήμερα τα Κοσμήματα του Στέμματος λάμπουν στο εσωτερικό, τα κοράκια χοροπηδούν στο γρασίδι και οι φρουροί, οι Yeoman Warders με το παρατσούκλι Beefeaters (Μπιφίτερς), μένουν εδώ με τις οικογένειές τους. Κάθε βράδυ, εδώ και περίπου 700 χρόνια, οι πύλες κλειδώνουν με την ίδια τελετή. Κάποιες παραδόσεις δεν σταματούν ποτέ!',
        en: 'After winning England in 1066, William the Conqueror wanted a fortress to show everyone who was in charge, so around 1078 he began the great square keep in the middle, later painted white and called the White Tower. Over the centuries kings added walls, towers and a moat, and the castle became a palace, a treasury, a mint for making coins and a prison. It was even a zoo: a polar bear once lived here and was allowed to fish in the river on a long rope. Today the Crown Jewels sparkle inside, ravens hop on the grass and the guards, the Yeoman Warders nicknamed Beefeaters, live here with their families. Every night for about 700 years the gates have been locked with the same ceremony. Some traditions never stop!',
      },
      didYouKnow: {
        el: 'Κάθε Yeoman Warder πρέπει να έχει υπηρετήσει τουλάχιστον 22 χρόνια στις ένοπλες δυνάμεις πριν κάνει αίτηση, και καθένας μένει μέσα στα τείχη του Πύργου με την οικογένειά του. Τα κοράκια τα φροντίζει ένας επίσημος «Ravenmaster», ο Αφέντης των Κορακιών, και κάθε πουλί έχει όνομα και τις δικές του αγαπημένες γωνιές.',
        en: 'Every Yeoman Warder must have served at least 22 years in the armed forces before applying, and each one lives inside the Tower walls with their family. The ravens are looked after by an official Ravenmaster, and each bird has a name and its own favourite corners.',
      },
      quiz: [
        {
          q: { el: 'Ποιος ξεκίνησε το χτίσιμο του κάστρου;', en: 'Who started building the castle?' },
          options: {
            el: ['Ο Γουλιέλμος ο Κατακτητής', 'Η βασίλισσα Βικτωρία', 'Ο Christopher Wren', 'Ο ναύαρχος Nelson'],
            en: ['William the Conqueror', 'Queen Victoria', 'Christopher Wren', 'Admiral Nelson'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Γουλιέλμος ο Κατακτητής ξεκίνησε τον Λευκό Πύργο γύρω στο 1078, για να δείξει σε όλους ποιος κυβερνούσε τώρα την Αγγλία.',
            en: 'William the Conqueror began the White Tower around 1078, to show everyone who now ruled England.',
          },
        },
        {
          q: { el: 'Ποιο ζώο ψάρευε κάποτε στο ποτάμι δεμένο με μακρύ σκοινί;', en: 'Which animal once fished in the river on a long rope?' },
          options: {
            el: ['Ένας κροκόδειλος', 'Μια καμηλοπάρδαλη', 'Ένας πιγκουίνος', 'Μια πολική αρκούδα'],
            en: ['A crocodile', 'A giraffe', 'A penguin', 'A polar bear'],
          },
          correct: 3,
          explanation: {
            el: 'Μια πολική αρκούδα, δώρο από τον βασιλιά της Νορβηγίας, ζούσε στον Πύργο και ψάρευε στον Τάμεση δεμένη με σκοινί.',
            en: 'A polar bear, a gift from the King of Norway, lived at the Tower and fished in the Thames on a rope.',
          },
        },
        {
          q: { el: 'Ποιο είναι το παρατσούκλι των Yeoman Warders;', en: 'What is the nickname of the Yeoman Warders?' },
          options: {
            el: ['Οι Τυροφάγοι', 'Οι Τσαγοπότες', 'Οι Beefeaters, «οι Κρεατοφάγοι»', 'Οι Ψαράδες'],
            en: ['Cheese-eaters', 'Tea-drinkers', 'Beefeaters', 'Fish-catchers'],
          },
          correct: 2,
          explanation: {
            el: 'Οι Yeoman Warders έχουν το παρατσούκλι Beefeaters, «κρεατοφάγοι». Κανείς δεν ξέρει σίγουρα από πού βγήκε, ίσως επειδή παλιά έπαιρναν μερίδες κρέατος από το παλάτι.',
            en: 'The Yeoman Warders are nicknamed Beefeaters. Nobody knows for sure where the name came from, perhaps because long ago they were given portions of beef from the palace.',
          },
        },
      ],
    },

    // ── 10. Tower Bridge ───────────────────────────────────────────────────────
    {
      id: 'tower-bridge',
      name: { el: 'Tower Bridge', en: 'Tower Bridge' },
      emoji: '🌉',
      lat: 51.5055,
      lng: -0.0754,
      radiusM: 80,
      riddle: {
        el: 'Δύο πέτρινοι πύργοι στέκονται μέσα στο ποτάμι, ενωμένοι ψηλά με διαδρόμους για πεζούς, ενώ ο δρόμος ανάμεσά τους ανοίγει στα δύο σαν ανοιχτό βιβλίο, για να περάσουν τα ψηλά καράβια.',
        en: 'Two stone towers stand in the river, joined high up by walkways, while the road between them splits open like a book, so that tall ships can sail through.',
      },
      parentHint: {
        el: 'Είναι η Tower Bridge (η Γέφυρα του Πύργου), όχι η London Bridge! Από τον Πύργο του Λονδίνου περπατήστε 5 λεπτά ανατολικά κατά μήκος του ποταμιού και ανεβείτε στη γέφυρα· οι ώρες που ανοίγει ανακοινώνονται από πριν, ρωτήστε στην έκθεση της γέφυρας (Tower Bridge Exhibition).',
        en: 'It is Tower Bridge, not London Bridge! From the Tower of London walk 5 minutes east along the river and up onto the bridge; lift times are announced in advance, ask at the Tower Bridge Exhibition.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ο δρόμος ανοίγει στη μέση. Γιατί ανοίγει η γέφυρα;', en: 'The riddle says the road opens in the middle. Why does the bridge open?' },
        options: {
          el: ['Για να φεύγει η βροχή', 'Για να περνούν τα ψηλά καράβια στο ποτάμι', 'Για να προσγειώνονται αεροπλάνα', 'Για να ξυπνούν τα ψάρια'],
          en: ['To let the rain drain away', 'To let tall ships pass along the river', 'To let planes land on it', 'To wake up the fish'],
        },
        correct: 1,
        explanation: {
          el: 'Τα δύο μισά του δρόμου, που λέγονται bascules, σηκώνονται για να περάσουν τα ψηλά καράβια. Αυτό γίνεται περίπου 800 φορές τον χρόνο· τα πλοία απλώς πρέπει να το ζητήσουν μία μέρα πριν, και η γέφυρα ανοίγει δωρεάν, ακόμη και για ένα μικρό ιστιοφόρο με ψηλό κατάρτι.',
          en: 'The two halves of the road, called bascules, tilt up so that tall ships can pass. It happens about 800 times a year; ships just have to ask a day in advance, and the bridge lifts for free, even for a small sailing boat with a tall mast.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τα μεταλλικά μέρη της γέφυρας. Με ποια χρώματα είναι βαμμένα;', en: 'Look at the metal parts of the bridge. What colours are they painted?' },
        options: {
          el: ['Κόκκινο και χρυσό', 'Πράσινο και μαύρο', 'Μόνο γκρι', 'Μπλε και άσπρο'],
          en: ['Red and gold', 'Green and black', 'Grey only', 'Blue and white'],
        },
        correct: 3,
        explanation: {
          el: 'Μπλε και άσπρο σήμερα, με λίγο κόκκινο. Όταν άνοιξε, το 1894, η γέφυρα ήταν βαμμένη καφέ σαν σοκολάτα! Το 1977 βάφτηκε κόκκινη, άσπρη και μπλε για τα 25 χρόνια της βασίλισσας Ελισάβετ στον θρόνο, και αργότερα το μπλε και το άσπρο έγιναν τα χρώματά της. Μέτρησε και τους πύργους: είναι δύο, ενωμένοι με τους ψηλούς διαδρόμους.',
          en: 'Blue and white today, with a little red. When it opened in 1894 the bridge was painted chocolate brown! In 1977 it was painted red, white and blue for Queen Elizabeth\'s 25 years on the throne, and later blue and white became its colours. Count the towers too: there are two, joined by the high walkways.',
        },
      },
      story: {
        el: 'Τη δεκαετία του 1880 τα λιμάνια του Λονδίνου είχαν τόση δουλειά που ο κόσμος χρειαζόταν μια καινούργια γέφυρα εδώ, αλλά μια κανονική γέφυρα θα έκλεινε τον δρόμο στα καράβια. Έτσι ο αρχιτέκτονας Horace Jones και ο μηχανικός John Wolfe Barry σχεδίασαν μια γέφυρα που ανοίγει: δύο μισά δρόμου που σηκώνονται σε περίπου πέντε λεπτά. Οι πέτρινοι πύργοι μοιάζουν με μεσαιωνικό κάστρο, για να ταιριάζουν με τον παλιό Πύργο δίπλα, αλλά μέσα τους κρύβουν ατσάλι και μηχανές, που πρώτα κινούνταν με ατμό και τώρα με ηλεκτρισμό. Οι δύο διάδρομοι ψηλά ψηλά έχουν σήμερα γυάλινο πάτωμα, για να βλέπεις τα αυτοκίνητα 42 μέτρα κάτω από τα πόδια σου. Άνοιξε το 1894 και σηκώνεται ακόμη περίπου 800 φορές τον χρόνο. Παλιά απ\' έξω, έξυπνη από μέσα!',
        en: 'By the 1880s London\'s docks were so busy that people needed a new bridge here, but a normal bridge would have blocked the ships. So the architect Horace Jones and the engineer John Wolfe Barry designed a bridge that opens: two halves of road that tilt up in about five minutes. The stone towers look like a medieval castle, to match the old Tower next door, but inside they hide steel and machines, first driven by steam and now by electricity. The two walkways high above now have glass floors, so you can watch the traffic 42 metres below your feet. It opened in 1894 and still lifts about 800 times a year. Old on the outside, clever on the inside!',
      },
      didYouKnow: {
        el: 'Τον Δεκέμβριο του 1952 ένα διώροφο λεωφορείο περνούσε τη γέφυρα όταν εκείνη άρχισε κατά λάθος να ανοίγει· ο οδηγός, ο Albert Gunter, πάτησε γκάζι και το λεωφορείο πήδηξε πάνω από το κενό που μεγάλωνε και προσγειώθηκε στην άλλη πλευρά. Μερικοί επιβάτες χτύπησαν, αλλά όλοι έγιναν καλά, και ο οδηγός πήρε ανταμοιβή δέκα λίρες.',
        en: 'In December 1952 a double-decker bus was crossing when the bridge began to open by mistake; the driver, Albert Gunter, put his foot down and the bus jumped the widening gap and landed on the other side. Some passengers were hurt, but everyone recovered, and the driver was given a reward of ten pounds.',
      },
      quiz: [
        {
          q: { el: 'Με τι δούλευαν στην αρχή οι μηχανές που σηκώνουν τη γέφυρα;', en: 'What did the machines that lift the bridge first run on?' },
          options: {
            el: ['Με άλογα', 'Με αέρα', 'Με ατμό', 'Με μπαταρίες'],
            en: ['Horses', 'Wind', 'Steam', 'Batteries'],
          },
          correct: 2,
          explanation: {
            el: 'Στην αρχή οι μηχανές δούλευαν με ατμό. Από το 1976 η γέφυρα σηκώνεται με ηλεκτρισμό.',
            en: 'At first the machines ran on steam. Since 1976 the bridge has been lifted by electricity.',
          },
        },
        {
          q: { el: 'Γιατί οι πύργοι μοιάζουν με μεσαιωνικό κάστρο;', en: 'Why do the towers look like a medieval castle?' },
          options: {
            el: ['Γιατί μέσα μένουν βασιλιάδες', 'Για να ταιριάζουν με τον παλιό Πύργο του Λονδίνου δίπλα', 'Γιατί οι χτίστες δεν είχαν άλλη πέτρα', 'Γιατί χτίστηκε τον Μεσαίωνα'],
            en: ['Because kings live inside', 'To match the old Tower of London next door', 'Because the builders had no other stone', 'Because it was built in the Middle Ages'],
          },
          correct: 1,
          explanation: {
            el: 'Οι πύργοι ντύθηκαν με πέτρα σαν κάστρο για να ταιριάζουν με τον Πύργο του Λονδίνου, που είναι σχεδόν χιλίων ετών, αν και μέσα τους είναι από ατσάλι.',
            en: 'The towers were dressed in stone like a castle to match the Tower of London next door, which is almost a thousand years old, even though inside they are made of steel.',
          },
        },
        {
          q: { el: 'Τι βλέπεις μέσα από το πάτωμα των ψηλών διαδρόμων;', en: 'What can you see through the floor of the high walkways?' },
          options: {
            el: ['Τα αυτοκίνητα και το ποτάμι πολύ χαμηλά', 'Το εσωτερικό ενός κάστρου', 'Μια πισίνα', 'Το φεγγάρι'],
            en: ['The traffic and the river far below', 'The inside of a castle', 'A swimming pool', 'The moon'],
          },
          correct: 0,
          explanation: {
            el: 'Οι ψηλοί διάδρομοι έχουν γυάλινο πάτωμα, 42 μέτρα πάνω από το ποτάμι, κι έτσι βλέπεις τα αυτοκίνητα και τα καράβια από κάτω σου.',
            en: 'The high walkways have glass floors, 42 metres above the river, so you can see the cars and boats beneath your feet.',
          },
        },
      ],
    },
  ],
};
