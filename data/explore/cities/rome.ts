/**
 * WiseBot Explorer · Ρώμη / Rome
 * ==============================
 * Ten spots in one long day or two easy half-days: ancient Rome on foot (spots 1–4), the
 * fountains and squares of the old centre (spots 5–8), then across the Tiber to the castle
 * and the Vatican (spots 9–10). Original text only, verified facts, language for a child
 * of 7–12 in Greek and English. Italian names stay in Italian in both languages.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'rome',
  name: { el: 'Ρώμη', en: 'Rome' },
  country: { el: 'Ιταλία', en: 'Italy' },
  countryCode: 'IT',
  emoji: '🏛️',
  center: { lat: 41.8955, lng: 12.4823 },
  zoom: 14,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στη Ρώμη, την Αιώνια Πόλη! Ο θρύλος λέει ότι την ίδρυσαν δύο δίδυμα αδέλφια, ο Ρωμύλος και ο Ρέμος, που τα μεγάλωσε μια λύκαινα. Εδώ κυβέρνησαν αυτοκράτορες και πάλεψαν μονομάχοι, σε κάθε γωνιά τραγουδάει ένα σιντριβάνι και σε κάθε δρόμο περιμένει ένα παγωτό gelato. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές της Ρώμης!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Rome, the Eternal City! Legend says it was founded by twin brothers, Romulus and Remus, who were raised by a she-wolf. Emperors ruled here and gladiators fought here, a fountain sings on every corner and a gelato waits on every street. Solve my riddles, find the ten secret spots and become Rome explorers yourselves!',
  },
  route: [
    'colosseum',
    'roman-forum',
    'capitoline-hill',
    'bocca-della-verita',
    'pantheon',
    'trevi-fountain',
    'spanish-steps',
    'piazza-navona',
    'castel-sant-angelo',
    'st-peters-square',
  ],
  spots: [
    // ── 1. Colosseo ────────────────────────────────────────────────────────────
    {
      id: 'colosseum',
      name: { el: 'Colosseo', en: 'Colosseum' },
      emoji: '🦁',
      lat: 41.8901,
      lng: 12.4908,
      radiusM: 80,
      riddle: {
        el: 'Ένας πέτρινος γίγαντας, φτιαγμένος από αψίδα πάνω σε αψίδα, άνοιγε κάποτε τις ογδόντα πόρτες του για να χωρέσει 50.000 θεατές. Σήμερα του λείπει ένα μεγάλο κομμάτι από τον εξωτερικό του τοίχο, μα στέκεται ακόμη περήφανος.',
        en: 'A stone giant made of arch upon arch once opened its eighty doors to let in 50,000 spectators. Today a big piece of its outer wall is missing, but it still stands proud.',
      },
      parentHint: {
        el: 'Είναι το Colosseo (το Κολοσσαίο). Ξεκινήστε από εδώ: ο σταθμός του μετρό Colosseo (γραμμή B) βγαίνει ακριβώς απέναντι· το σημείο είναι η ανοιχτή πλατεία στη δυτική πλευρά, δίπλα στην Αψίδα του Κωνσταντίνου, όπου δεν χρειάζεται εισιτήριο.',
        en: 'It is the Colosseo, the Colosseum. Start here: Colosseo metro station (line B) comes out right opposite; the spot is the open plaza on the west side, next to the Arch of Constantine, where no ticket is needed.',
      },
      unlockQuestion: {
        question: { el: 'Ποιοι πάλευαν μέσα σε αυτή την τεράστια αρένα για να διασκεδάσουν το πλήθος;', en: 'Who fought inside this giant arena to entertain the crowd?' },
        options: {
          el: ['Ιππότες με πανοπλίες', 'Πειρατές', 'Μονομάχοι', 'Ποδοσφαιριστές'],
          en: ['Knights in armour', 'Pirates', 'Gladiators', 'Footballers'],
        },
        correct: 2,
        explanation: {
          el: 'Οι μονομάχοι (gladiatori) ήταν εκπαιδευμένοι μαχητές, συχνά αιχμάλωτοι ή σκλάβοι, που αγωνίζονταν μπροστά σε χιλιάδες θεατές. Οι πιο γενναίοι γίνονταν διάσημοι σαν τους σημερινούς αθλητές, και μερικοί κέρδιζαν την ελευθερία τους.',
          en: 'Gladiators were trained fighters, often prisoners or slaves, who competed in front of thousands of spectators. The bravest became as famous as sports stars are today, and some won their freedom.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στο ψηλότερο κομμάτι του εξωτερικού τοίχου. Πόσες σειρές από μεγάλες αψίδες βλέπεις, τη μία πάνω από την άλλη;', en: 'Stand in front of the tallest part of the outer wall. How many rows of big arches can you see, one above the other?' },
        options: {
          el: ['Δύο', 'Τρεις', 'Πέντε', 'Επτά'],
          en: ['Two', 'Three', 'Five', 'Seven'],
        },
        correct: 1,
        explanation: {
          el: 'Τρεις σειρές αψίδων και, από πάνω, ένας τέταρτος όροφος με μικρά παράθυρα. Οι 80 αψίδες του ισογείου ήταν οι είσοδοι: πάνω από μερικές διακρίνεις ακόμη σκαλισμένους λατινικούς αριθμούς, σαν τους αριθμούς στις θύρες ενός γηπέδου.',
          en: 'Three rows of arches, and above them a fourth storey with small windows. The 80 arches at ground level were the entrances: above some of them you can still spot carved Roman numerals, like the gate numbers in a stadium.',
        },
      },
      story: {
        el: 'Πριν από σχεδόν 2.000 χρόνια ο αυτοκράτορας Βεσπασιανός αποφάσισε να χτίσει τη μεγαλύτερη αρένα του κόσμου, εκεί όπου ο αυτοκράτορας Νέρωνας είχε κάποτε μια ιδιωτική λίμνη. Ο γιος του, ο Τίτος, την εγκαινίασε το 80 μ.Χ. με γιορτές που κράτησαν εκατό μέρες. Περίπου 50.000 θεατές έμπαιναν δωρεάν από τις αριθμημένες αψίδες, έβρισκαν τη θέση τους και έβλεπαν μονομάχους, κυνήγια με εξωτικά ζώα, ακόμη και ελέφαντες. Κάτω από την αρένα, διάδρομοι και ανελκυστήρες ανέβαζαν ζώα και σκηνικά μέσα από καταπακτές. Όταν έκαιγε ο ήλιος, ναύτες τραβούσαν τεράστια πανιά για σκιά. Αιώνες αργότερα, σεισμοί έριξαν ένα κομμάτι του τοίχου και οι Ρωμαίοι πήραν πέτρες για να χτίσουν παλάτια. Κι όμως, ο γίγαντας στέκεται ακόμη, γιατί ό,τι χτίζεται με έξυπνο σχέδιο αντέχει πολύ στον χρόνο.',
        en: 'Almost 2,000 years ago, Emperor Vespasian decided to build the biggest arena in the world, right where Emperor Nero once had a private lake. His son Titus opened it in 80 AD with games that lasted a hundred days. About 50,000 spectators came in for free through the numbered arches, found their seats and watched gladiators, hunts with exotic animals, even elephants. Under the arena, corridors and lifts raised animals and scenery through trapdoors. When the sun burned, sailors pulled huge sails across the top for shade. Centuries later, earthquakes brought down part of the wall, and Romans carried off stones to build palaces. Yet the giant still stands, because clever building lasts a very long time.',
      },
      didYouKnow: {
        el: 'Οι πέτρες του Κολοσσαίου ήταν δεμένες μεταξύ τους με σιδερένιους συνδέσμους. Οι χιλιάδες τρύπες που βλέπετε στους τοίχους άνοιξαν τον Μεσαίωνα, όταν οι κάτοικοι ξήλωσαν το πολύτιμο σίδερο για να το ξαναχρησιμοποιήσουν. Το όνομα «Colosseo» μάλλον προέρχεται από τον Κολοσσό, ένα άγαλμα του Νέρωνα ύψους περίπου 30 μέτρων που στεκόταν δίπλα.',
        en: 'The blocks were held together with iron clamps. The thousands of holes you see in the walls were made in the Middle Ages, when residents dug out the valuable iron to reuse it. The name “Colosseo” probably comes from the Colossus, a statue of Nero about 30 metres tall that once stood beside it.',
      },
      quiz: [
        {
          q: { el: 'Ποιος εγκαινίασε την αρένα το 80 μ.Χ.;', en: 'Who opened the arena in 80 AD?' },
          options: {
            el: ['Ο Τίτος', 'Ο Ιούλιος Καίσαρας', 'Ο Νέρωνας', 'Ο Μέγας Αλέξανδρος'],
            en: ['Titus', 'Julius Caesar', 'Nero', 'Alexander the Great'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Τίτος, ο γιος του Βεσπασιανού, εγκαινίασε την αρένα με γιορτές που κράτησαν εκατό μέρες.',
            en: 'Titus, the son of Vespasian, opened the arena with games that lasted a hundred days.',
          },
        },
        {
          q: { el: 'Πώς έμπαιναν οι θεατές μέσα;', en: 'How did the spectators get in?' },
          options: {
            el: ['Με σκάλες από την οροφή', 'Από ένα μοναδικό μεγάλο τούνελ', 'Με βάρκες από τη λίμνη', 'Από αριθμημένες αψίδες, δωρεάν'],
            en: ['By ladders from the roof', 'Through one single big tunnel', 'By boat across the lake', 'Through numbered arches, for free'],
          },
          correct: 3,
          explanation: {
            el: 'Κάθε θεατής είχε μια μάρκα με έναν αριθμό, έβρισκε την αψίδα με τον ίδιο αριθμό και από εκεί ανέβαινε στη θέση του. Η είσοδος ήταν δωρεάν.',
            en: 'Each spectator had a token with a number, found the arch with the same number and climbed from there to their seat. Entry was free.',
          },
        },
        {
          q: { el: 'Τι έκαναν οι ναύτες στην αρένα;', en: 'What did sailors do at the arena?' },
          options: {
            el: ['Πουλούσαν ψάρια', 'Τραβούσαν τεράστια πανιά για σκιά', 'Έπλεαν μέσα στην αρένα', 'Φύλαγαν τις πόρτες'],
            en: ['They sold fish', 'They pulled huge sails across the top for shade', 'They sailed inside the arena', 'They guarded the doors'],
          },
          correct: 1,
          explanation: {
            el: 'Οι ναύτες ήξεραν από σχοινιά και πανιά, γι\' αυτό εκείνοι άπλωναν την τεράστια τέντα που έριχνε σκιά στους θεατές.',
            en: 'Sailors knew all about ropes and sails, so they were the ones who spread the enormous awning that shaded the spectators.',
          },
        },
      ],
    },

    // ── 2. Foro Romano ─────────────────────────────────────────────────────────
    {
      id: 'roman-forum',
      name: { el: 'Foro Romano', en: 'Roman Forum' },
      emoji: '🏛️',
      lat: 41.8932,
      lng: 12.4868,
      radiusM: 60,
      riddle: {
        el: 'Μια κοιλάδα γεμάτη σπασμένες κολόνες και αψίδες ήταν κάποτε το πιο πολυσύχναστο μέρος του κόσμου: εδώ έβγαζαν λόγους, ψώνιζαν, έφτιαχναν νόμους και εδώ περνούσαν οι νικητές στρατηγοί με τα άρματά τους. Κοίταξέ την από ψηλά, από την άκρη ενός φαρδιού δρόμου.',
        en: 'A valley full of broken columns and archways was once the busiest place in the world: people made speeches here, went shopping, wrote laws, and victorious generals paraded through on their chariots. Look at it from above, from the edge of a wide road.',
      },
      parentHint: {
        el: 'Είναι το Foro Romano (η Ρωμαϊκή Αγορά). Από το Κολοσσαίο περπατήστε 6 λεπτά βορειοδυτικά στη Via dei Fori Imperiali· το σημείο είναι το πεζοδρόμιο-μπαλκόνι στα αριστερά, λίγο μετά τη διασταύρωση με τη Via Cavour, απ\' όπου βλέπετε όλη την Αγορά χωρίς εισιτήριο.',
        en: 'It is the Foro Romano, the Roman Forum. From the Colosseum walk 6 minutes north-west along Via dei Fori Imperiali; the spot is the pavement terrace on the left, just past the Via Cavour crossing, where you can look over the whole Forum without a ticket.',
      },
      unlockQuestion: {
        question: { el: 'Ένας διάσημος Ρωμαίος στρατηγός έβγαζε λόγους σε αυτή την πλατεία, και ένας μήνας του χρόνου έχει ακόμη το όνομά του. Ποιος είναι;', en: 'A famous Roman general gave speeches in this square, and a month of the year still carries his name. Who is he?' },
        options: {
          el: ['Ο Μέγας Αλέξανδρος', 'Ο Ιούλιος Καίσαρας', 'Ο Ναπολέων', 'Ο Οδυσσέας'],
          en: ['Alexander the Great', 'Julius Caesar', 'Napoleon', 'Odysseus'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Ιούλιος Καίσαρας: ο μήνας Ιούλιος πήρε το όνομά του. Ο επόμενος μήνας, ο Αύγουστος, ονομάστηκε από τον Αύγουστο, τον πρώτο αυτοκράτορα της Ρώμης.',
          en: 'Julius Caesar: the month of July was named after him. The next month, August, is named after Augustus, the first emperor of Rome.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα προς το βάθος των ερειπίων, προς τον λόφο. Θα δεις μια μεγάλη πέτρινη αψίδα. Πόσα περάσματα έχει;', en: 'Look towards the far end of the ruins, towards the hill. You will see a big stone archway. How many passages does it have?' },
        options: {
          el: ['Ένα', 'Δύο', 'Τρία', 'Τέσσερα'],
          en: ['One', 'Two', 'Three', 'Four'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι η Αψίδα του Σεπτιμίου Σεβήρου, με ένα μεγάλο πέρασμα στη μέση και δύο μικρότερα στα πλάγια. Χτίστηκε το 203 μ.Χ. για να γιορτάσει τις νίκες του αυτοκράτορα, και τα σκαλίσματά της διηγούνται τις μάχες του σαν κόμικ από πέτρα.',
          en: 'It is the Arch of Septimius Severus, with one big passage in the middle and two smaller ones at the sides. It was built in 203 AD to celebrate the emperor\'s victories, and its carvings tell the story of his battles like a comic strip in stone.',
        },
      },
      story: {
        el: 'Πριν από 2.000 χρόνια αυτή η κοιλάδα ήταν η καρδιά της Ρώμης. Οι γερουσιαστές συζητούσαν τους νόμους στην Κουρία, οι έμποροι πουλούσαν τα εμπορεύματά τους και οι ρήτορες ανέβαιναν σε ένα βήμα για να μιλήσουν στο πλήθος. Στη Via Sacra, τον «Ιερό Δρόμο», παρέλαυναν οι στρατηγοί που γύριζαν νικητές, με άρματα, θησαυρούς και μουσική. Εδώ έβγαζε λόγους και ο Ιούλιος Καίσαρας· όταν πέθανε, το 44 π.Χ., οι Ρωμαίοι τον τίμησαν σε αυτό το μέρος και του έχτισαν ναό. Με τους αιώνες τα κτίρια γκρέμισαν, το χώμα τα σκέπασε και για πολύ καιρό εδώ έβοσκαν αγελάδες! Οι αρχαιολόγοι έσκαψαν πολλά μέτρα κάτω και ξαναέφεραν στο φως τις κολόνες, τις αψίδες και τα πλακόστρωτα. Μεγάλες ιδέες, όπως οι νόμοι και η ψηφοφορία, ξεκίνησαν από πλατείες σαν αυτή.',
        en: 'Two thousand years ago this valley was the heart of Rome. Senators debated the laws in the Curia, merchants sold their goods, and speakers climbed a platform to talk to the crowd. Along the Via Sacra, the “Sacred Way”, victorious generals paraded home with chariots, treasures and music. Julius Caesar made speeches here too; when he died in 44 BC, the Romans honoured him on this spot and built him a temple. Over the centuries the buildings crumbled, earth covered them, and for a long time cows grazed here! Archaeologists dug several metres down and brought the columns, arches and paving stones back into the light. Big ideas, like laws and voting, started in squares like this one.',
      },
      didYouKnow: {
        el: 'Στο σημείο όπου κάηκε η σορός του Καίσαρα, μέσα στα ερείπια του ναού του, οι επισκέπτες αφήνουν ακόμη και σήμερα φρέσκα λουλούδια. Ο φαρδύς δρόμος που πατάτε, η Via dei Fori Imperiali, ανοίχτηκε το 1932 πάνω από άλλες, ακόμη μεγαλύτερες αρχαίες αγορές, που βρίσκονται θαμμένες κάτω από την άσφαλτο.',
        en: 'On the spot where Caesar\'s body was cremated, inside the ruins of his temple, visitors still leave fresh flowers today. The wide road you are standing on, Via dei Fori Imperiali, was opened in 1932 right over other, even larger ancient forums that still lie buried under the tarmac.',
      },
      quiz: [
        {
          q: { el: 'Πώς λεγόταν ο δρόμος όπου παρέλαυναν οι νικητές στρατηγοί;', en: 'What was the road called where the victorious generals paraded?' },
          options: {
            el: ['Via Appia', 'Via Cavour', 'Via del Corso', 'Via Sacra'],
            en: ['Via Appia', 'Via Cavour', 'Via del Corso', 'Via Sacra'],
          },
          correct: 3,
          explanation: {
            el: 'Η Via Sacra, ο «Ιερός Δρόμος», περνούσε μέσα από την Αγορά και ανέβαινε ως τον μεγάλο ναό στον λόφο του Καπιτωλίου.',
            en: 'The Via Sacra, the “Sacred Way”, ran through the Forum and climbed up to the great temple on the Capitoline Hill.',
          },
        },
        {
          q: { el: 'Ποια ζώα έβοσκαν εδώ όταν τα ερείπια ήταν θαμμένα;', en: 'Which animals grazed here when the ruins were buried?' },
          options: {
            el: ['Αγελάδες', 'Καμήλες', 'Πιγκουίνοι', 'Λιοντάρια'],
            en: ['Cows', 'Camels', 'Penguins', 'Lions'],
          },
          correct: 0,
          explanation: {
            el: 'Για αιώνες το μέρος λεγόταν Campo Vaccino, «το λιβάδι των αγελάδων», γιατί εδώ έβοσκαν κοπάδια πάνω από τα θαμμένα ερείπια.',
            en: 'For centuries the place was called Campo Vaccino, “the cow field”, because herds grazed here on top of the buried ruins.',
          },
        },
        {
          q: { el: 'Τι έκαναν οι γερουσιαστές στην Κουρία;', en: 'What did the senators do in the Curia?' },
          options: {
            el: ['Έπαιζαν θέατρο', 'Έψηναν ψωμί', 'Συζητούσαν τους νόμους', 'Εκπαίδευαν άλογα'],
            en: ['They put on plays', 'They baked bread', 'They debated the laws', 'They trained horses'],
          },
          correct: 2,
          explanation: {
            el: 'Η Κουρία ήταν το κτίριο της Γερουσίας. Εκεί οι γερουσιαστές συζητούσαν και αποφάσιζαν τους νόμους της Ρώμης. Το κτίριο στέκεται ακόμη, σχεδόν ολόκληρο.',
            en: 'The Curia was the Senate house. There the senators discussed and decided the laws of Rome. The building still stands, almost complete.',
          },
        },
      ],
    },

    // ── 3. Piazza del Campidoglio ──────────────────────────────────────────────
    {
      id: 'capitoline-hill',
      name: { el: 'Piazza del Campidoglio', en: 'Piazza del Campidoglio' },
      emoji: '🐺',
      lat: 41.8934,
      lng: 12.4829,
      radiusM: 40,
      riddle: {
        el: 'Ο καλλιτέχνης που ζωγράφισε την πιο διάσημη οροφή του κόσμου σχεδίασε αυτή την πλατεία στην κορυφή ενός λόφου. Στη μέση της, ένας χάλκινος αυτοκράτορας καβαλάει το άλογό του πάνω σε ένα αστέρι, και λίγο πιο πέρα μια λύκαινα ταΐζει δύο μωρά.',
        en: 'The artist who painted the most famous ceiling in the world designed this square on top of a hill. In the middle, a bronze emperor rides his horse over a star, and just nearby a she-wolf feeds two babies.',
      },
      parentHint: {
        el: 'Είναι η Piazza del Campidoglio (η Πλατεία του Καπιτωλίου), στον λόφο του Καπιτωλίου. Από το μπαλκόνι της Αγοράς περπατήστε 7 λεπτά δυτικά ως την Piazza Venezia, περάστε μπροστά από το λευκό μνημείο Vittoriano και ανεβείτε τη φαρδιά ράμπα με τα σκαλιά (την cordonata) που ξεκινά από την Piazza d\'Aracoeli.',
        en: 'It is the Piazza del Campidoglio, on the Capitoline Hill. From the Forum terrace walk 7 minutes west to Piazza Venezia, pass in front of the white Vittoriano monument and climb the wide stepped ramp (the cordonata) that starts at Piazza d\'Aracoeli.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι μια λύκαινα ταΐζει δύο μωρά. Ποια είναι τα μωρά, σύμφωνα με τον θρύλο;', en: 'The riddle says a she-wolf feeds two babies. Who are the babies, according to the legend?' },
        options: {
          el: ['Ο Κάστορας και ο Πολυδεύκης', 'Ο Ρωμαίος και η Ιουλιέτα', 'Ο Αχιλλέας και ο Έκτορας', 'Ο Ρωμύλος και ο Ρέμος'],
          en: ['Castor and Pollux', 'Romeo and Juliet', 'Achilles and Hector', 'Romulus and Remus'],
        },
        correct: 3,
        explanation: {
          el: 'Ο θρύλος λέει ότι τα δίδυμα, ο Ρωμύλος και ο Ρέμος, εγκαταλείφθηκαν σε ένα καλάθι στο ποτάμι, τα βρήκε μια λύκαινα και τα μεγάλωσε. Όταν μεγάλωσαν, ο Ρωμύλος ίδρυσε μια πόλη και της έδωσε το όνομά του: Ρώμη.',
          en: 'Legend says the twins, Romulus and Remus, were left in a basket on the river, and a she-wolf found and raised them. When they grew up, Romulus founded a city and gave it his name: Rome.',
        },
      },
      onSite: {
        question: { el: 'Στάσου στη μέση της πλατείας και κοίτα τις γραμμές στο πλακόστρωτο γύρω από το άγαλμα. Τι σχήμα σχεδιάζουν;', en: 'Stand in the middle of the square and look at the lines on the paving around the statue. What shape do they draw?' },
        options: {
          el: ['Μια σκακιέρα', 'Ένα αστέρι με πολλές ακτίνες', 'Μια σπείρα', 'Κύματα'],
          en: ['A chessboard', 'A star with many points', 'A spiral', 'Waves'],
        },
        correct: 1,
        explanation: {
          el: 'Ένα αστέρι με δώδεκα ακτίνες μέσα σε ένα οβάλ. Ο Μιχαήλ Άγγελος το σχεδίασε πριν από σχεδόν 500 χρόνια, αλλά στρώθηκε στο έδαφος μόλις το 1940. Το κέντρο του αστεριού είναι ακριβώς κάτω από το άλογο.',
          en: 'A star with twelve points inside an oval. Michelangelo drew it almost 500 years ago, but it was only laid on the ground in 1940. The centre of the star is right under the horse.',
        },
      },
      story: {
        el: 'Αυτός ο λόφος ήταν ο πιο ιερός της αρχαίας Ρώμης: εδώ στεκόταν ο ναός του Δία, όπου κατέληγαν οι θριαμβευτικές παρελάσεις. Αιώνες αργότερα η κορυφή του είχε γίνει ένα ακατάστατο μέρος με λάσπες και κατσίκια. Το 1536 ο Πάπας ζήτησε από τον Μιχαήλ Άγγελο, τον καλλιτέχνη που ζωγράφισε την οροφή της Καπέλα Σιξτίνα, να τον ομορφύνει ξανά. Εκείνος σχεδίασε την πλατεία, τις προσόψεις των παλατιών, το αστέρι στο πάτωμα και τη φαρδιά ράμπα, με σκαλιά τόσο χαμηλά που να τα ανεβαίνουν και τα άλογα. Ο χάλκινος καβαλάρης είναι ο Μάρκος Αυρήλιος, ένας αυτοκράτορας που έγραφε σοφές σκέψεις σε ένα ημερολόγιο. Το άγαλμά του σώθηκε επί 1.800 χρόνια επειδή οι άνθρωποι νόμιζαν ότι δείχνει έναν άλλον αυτοκράτορα, τον Κωνσταντίνο. Το πρωτότυπο φυλάγεται στο μουσείο δίπλα, το παλαιότερο δημόσιο μουσείο του κόσμου.',
        en: 'This hill was the most sacred in ancient Rome: the temple of Jupiter stood here, where the victory parades ended. Centuries later the hilltop had become a messy place of mud and goats. In 1536 the Pope asked Michelangelo, the artist who painted the ceiling of the Sistine Chapel, to make it beautiful again. He designed the square, the fronts of the palaces, the star on the ground and the wide ramp, with steps so low that even horses could climb them. The bronze rider is Marcus Aurelius, an emperor who wrote wise thoughts in a diary. His statue survived for 1,800 years because people believed it showed a different emperor, Constantine. The original is kept in the museum next door, the oldest public museum in the world.',
      },
      didYouKnow: {
        el: 'Η περίφημη χάλκινη λύκαινα, που για αιώνες θεωρούνταν ετρουσκική και 2.500 ετών, σύμφωνα με νεότερες μετρήσεις χρονολογείται πιθανότατα στον Μεσαίωνα, ενώ τα δίδυμα προστέθηκαν τον 15ο αιώνα. Το άγαλμα στην πλατεία είναι αντίγραφο, όπως και ο καβαλάρης (1997). Το Καπιτώλιο της Ουάσινγκτον, όπου συνεδριάζει το Κογκρέσο, πήρε το όνομά του από αυτόν τον λόφο.',
        en: 'The famous bronze she-wolf, long believed to be Etruscan and 2,500 years old, most likely dates from the Middle Ages according to recent tests, and the twins were added in the 15th century. The statue on the square is a copy, as is the rider (1997). The Capitol in Washington, where Congress meets, took its name from this hill.',
      },
      quiz: [
        {
          q: { el: 'Ποιος σχεδίασε την πλατεία;', en: 'Who designed the square?' },
          options: {
            el: ['Ο Λεονάρντο ντα Βίντσι', 'Ο Bernini', 'Ο Μιχαήλ Άγγελος', 'Ο Ιούλιος Καίσαρας'],
            en: ['Leonardo da Vinci', 'Bernini', 'Michelangelo', 'Julius Caesar'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Μιχαήλ Άγγελος, ο ίδιος που ζωγράφισε την οροφή της Καπέλα Σιξτίνα, σχεδίασε την πλατεία το 1536.',
            en: 'Michelangelo, the same artist who painted the ceiling of the Sistine Chapel, designed the square in 1536.',
          },
        },
        {
          q: { el: 'Γιατί τα σκαλιά της ράμπας είναι τόσο χαμηλά;', en: 'Why are the steps of the ramp so low?' },
          options: {
            el: ['Για να μη γλιστράνε τα παιδιά', 'Για να μπορούν να ανεβαίνουν και τα άλογα', 'Γιατί τελείωσαν οι πέτρες', 'Για να κυλάνε τα βαρέλια'],
            en: ['So children would not slip', 'So that horses could climb them too', 'Because the builders ran out of stone', 'So barrels could roll down'],
          },
          correct: 1,
          explanation: {
            el: 'Η cordonata έχει χαμηλά, φαρδιά σκαλιά, ώστε να ανεβαίνουν άνετα οι καβαλάρηδες με τα άλογά τους.',
            en: 'The cordonata has low, wide steps so that riders could climb it comfortably on horseback.',
          },
        },
        {
          q: { el: 'Γιατί σώθηκε το χάλκινο άγαλμα του καβαλάρη για 1.800 χρόνια;', en: 'Why did the bronze rider survive for 1,800 years?' },
          options: {
            el: ['Γιατί νόμιζαν ότι δείχνει τον αυτοκράτορα Κωνσταντίνο', 'Γιατί ήταν κρυμμένο στη θάλασσα', 'Γιατί ήταν πολύ βαρύ', 'Γιατί το φύλαγε μια λύκαινα'],
            en: ['Because people thought it showed Emperor Constantine', 'Because it was hidden in the sea', 'Because it was too heavy to move', 'Because a she-wolf guarded it'],
          },
          correct: 0,
          explanation: {
            el: 'Πολλά αρχαία χάλκινα αγάλματα λιώθηκαν για το μέταλλό τους. Αυτό γλίτωσε γιατί όλοι πίστευαν ότι δείχνει τον Κωνσταντίνο, τον πρώτο χριστιανό αυτοκράτορα.',
            en: 'Many ancient bronze statues were melted down for their metal. This one was spared because everyone believed it showed Constantine, the first Christian emperor.',
          },
        },
      ],
    },

    // ── 4. Bocca della Verità ──────────────────────────────────────────────────
    {
      id: 'bocca-della-verita',
      name: { el: 'Bocca della Verità', en: 'Bocca della Verità' },
      emoji: '🖐️',
      lat: 41.8882,
      lng: 12.4818,
      radiusM: 40,
      riddle: {
        el: 'Πίσω από μια σειρά κολόνες, ένα στρογγυλό πέτρινο πρόσωπο με ορθάνοιχτο στόμα περιμένει το χέρι σου. Πες ένα ψέμα, λένε, και... κρατς!',
        en: 'Behind a row of columns, a round stone face with a wide-open mouth is waiting for your hand. Tell a lie, they say, and... snap!',
      },
      parentHint: {
        el: 'Είναι η Bocca della Verità (το Στόμα της Αλήθειας), κάτω από τη στοά της εκκλησίας Santa Maria in Cosmedin. Από την Piazza del Campidoglio κατεβείτε ξανά τη ράμπα και περπατήστε 8 λεπτά νότια στη Via del Teatro di Marcello, δίπλα στο αρχαίο θέατρο, ως την πλατεία με τον στρογγυλό ναό· συχνά υπάρχει ουρά και ζητείται μια μικρή προσφορά.',
        en: 'It is the Bocca della Verità, the Mouth of Truth, under the portico of the church of Santa Maria in Cosmedin. From Piazza del Campidoglio go back down the ramp and walk 8 minutes south along Via del Teatro di Marcello, past the ancient theatre, to the square with the round temple; there is often a queue and a small donation is asked for.',
      },
      unlockQuestion: {
        question: { el: 'Σύμφωνα με τον θρύλο, ποιανού το χέρι δαγκώνει το πέτρινο στόμα;', en: 'According to the legend, whose hand does the stone mouth bite?' },
        options: {
          el: ['Όποιου λέει ψέματα', 'Όποιου τραγουδάει φάλτσα', 'Όποιου δεν πλένει τα χέρια του', 'Όποιου τρώει πολύ παγωτό'],
          en: ['Anyone who tells lies', 'Anyone who sings out of tune', 'Anyone who does not wash their hands', 'Anyone who eats too much ice cream'],
        },
        correct: 0,
        explanation: {
          el: 'Το στόμα, λέει ο θρύλος, κλείνει και δαγκώνει το χέρι όποιου λέει ψέματα. Οι Ρωμαίοι του Μεσαίωνα, λένε, το χρησιμοποιούσαν για να ελέγχουν αν κάποιος λέει την αλήθεια. Μην ανησυχείς: σε 2.000 χρόνια δεν έχει δαγκώσει κανέναν!',
          en: 'The mouth, says the legend, snaps shut on the hand of anyone who tells a lie. In the Middle Ages, people say, Romans used it to test whether someone was telling the truth. Do not worry: in 2,000 years it has never bitten anyone!',
        },
      },
      onSite: {
        question: { el: 'Κοίτα το πρόσωπο από κοντά. Από τι υλικό είναι φτιαγμένο;', en: 'Look closely at the face. What is it made of?' },
        options: {
          el: ['Από ξύλο', 'Από μπρούντζο', 'Από μάρμαρο', 'Από πηλό'],
          en: ['Wood', 'Bronze', 'Marble', 'Clay'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι ένας δίσκος από μάρμαρο, φαρδύς σχεδόν όσο είναι ψηλός ένας μεγάλος άνθρωπος, και ζυγίζει πάνω από έναν τόνο. Κοίτα τα μάτια, τη μύτη και το στόμα: είναι τρύπες που περνάνε ως την άλλη πλευρά, γι\' αυτό οι ειδικοί πιστεύουν ότι κάποτε ήταν καπάκι υπονόμου ή μέρος ενός σιντριβανιού.',
          en: 'It is a disc of marble, almost as wide as a tall grown-up is high, and it weighs more than a tonne. Look at the eyes, nose and mouth: they are holes that go right through, which is why experts think it was once a drain cover or part of a fountain.',
        },
      },
      story: {
        el: 'Αυτό το πέτρινο πρόσωπο είναι πιο παλιό από την εκκλησία που το φιλοξενεί: το σκάλισαν οι αρχαίοι Ρωμαίοι πριν από περίπου 2.000 χρόνια, ίσως για να σκεπάζει έναν υπόνομο ή για να τρέχει νερό από το στόμα του. Πολλοί πιστεύουν ότι δείχνει έναν θεό των ποταμών, με γένια σαν κύματα. Τον Μεσαίωνα γεννήθηκε ο θρύλος ότι δαγκώνει τους ψεύτες, και το 1632 ο δίσκος στήθηκε εδώ, κάτω από τη στοά. Η εκκλησία έχει ελληνική ιστορία: πριν από 1.200 χρόνια σε αυτή τη γειτονιά ζούσαν Έλληνες, και το όνομά της, Cosmedin, έρχεται από την ελληνική λέξη «κόσμημα», γιατί ήταν όμορφα στολισμένη. Το ψηλό καμπαναριό της με τα τοξωτά παράθυρα χτίστηκε πριν από περίπου 900 χρόνια. Το καλύτερο κόλπο για να μη σε δαγκώσει; Να λες πάντα την αλήθεια!',
        en: 'This stone face is older than the church that houses it: the ancient Romans carved it about 2,000 years ago, perhaps as a cover for a drain or so that water could pour out of its mouth. Many believe it shows a river god, with a beard like waves. In the Middle Ages the legend was born that it bites liars, and in 1632 the disc was set up here, under the portico. The church has a Greek story: 1,200 years ago Greeks lived in this neighbourhood, and its name, Cosmedin, comes from a Greek word for “ornament”, because it was so beautifully decorated. Its tall bell tower with the arched windows was built about 900 years ago. The best trick to avoid a bite? Always tell the truth!',
      },
      didYouKnow: {
        el: 'Η γειτονιά ονομαζόταν στον Μεσαίωνα Ripa Graeca, η «Ελληνική Όχθη», και η εκκλησία ήταν το κέντρο των Ελλήνων της Ρώμης· ακόμη και σήμερα ανήκει στους Ελληνοκαθολικούς. Το Στόμα της Αλήθειας έγινε παγκοσμίως διάσημο το 1953 με την ταινία «Διακοπές στη Ρώμη», όπου ο Gregory Peck έκανε πλάκα ότι του κόπηκε το χέρι και η Audrey Hepburn τρόμαξε στ\' αλήθεια.',
        en: 'In the Middle Ages the neighbourhood was called Ripa Graeca, the “Greek Bank”, and the church was the centre of Rome\'s Greek community; even today it belongs to the Greek Catholic rite. The Mouth of Truth became world-famous in 1953 through the film Roman Holiday, in which Gregory Peck pretended his hand had been bitten off and Audrey Hepburn\'s fright was real.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν πιθανότατα το πέτρινο πρόσωπο στην αρχαιότητα;', en: 'What was the stone face most probably in ancient times?' },
          options: {
            el: ['Μια ασπίδα', 'Καπάκι υπονόμου ή μέρος σιντριβανιού', 'Ένα πιάτο για γίγαντες', 'Ένα ρολόι'],
            en: ['A shield', 'A drain cover or part of a fountain', 'A plate for giants', 'A clock'],
          },
          correct: 1,
          explanation: {
            el: 'Οι τρύπες στα μάτια, στη μύτη και στο στόμα δείχνουν ότι από μέσα του περνούσε νερό: ήταν μάλλον καπάκι υπονόμου ή κομμάτι ενός σιντριβανιού.',
            en: 'The holes in the eyes, nose and mouth show that water passed through it: it was most likely a drain cover or part of a fountain.',
          },
        },
        {
          q: { el: 'Από ποια γλώσσα έρχεται το όνομα Cosmedin;', en: 'Which language does the name Cosmedin come from?' },
          options: {
            el: ['Από τα λατινικά', 'Από τα αραβικά', 'Από τα ισπανικά', 'Από τα ελληνικά'],
            en: ['Latin', 'Arabic', 'Spanish', 'Greek'],
          },
          correct: 3,
          explanation: {
            el: 'Cosmedin έρχεται από την ελληνική λέξη «κόσμημα»: η εκκλησία ήταν στολισμένη τόσο όμορφα, που οι Έλληνες της γειτονιάς την ονόμασαν έτσι.',
            en: 'Cosmedin comes from a Greek word for “ornament”: the church was decorated so beautifully that the Greeks of the neighbourhood named it that way.',
          },
        },
        {
          q: { el: 'Πότε στήθηκε ο δίσκος κάτω από τη στοά της εκκλησίας;', en: 'When was the disc set up under the church portico?' },
          options: {
            el: ['Πέρυσι', 'Το 80 μ.Χ.', 'Το 1632', 'Το 1953'],
            en: ['Last year', 'In 80 AD', 'In 1632', 'In 1953'],
          },
          correct: 2,
          explanation: {
            el: 'Ο δίσκος στήθηκε στη στοά το 1632, αλλά ο ίδιος είναι πολύ πιο παλιός, περίπου 2.000 ετών.',
            en: 'The disc was placed in the portico in 1632, but the disc itself is much older, about 2,000 years old.',
          },
        },
      ],
    },

    // ── 5. Pantheon ────────────────────────────────────────────────────────────
    {
      id: 'pantheon',
      name: { el: 'Pantheon', en: 'Pantheon' },
      emoji: '🌧️',
      lat: 41.8990,
      lng: 12.4768,
      radiusM: 40,
      riddle: {
        el: 'Ένας ναός για όλους τους θεούς μαζί έχει στέγη σαν τεράστια μπάλα κομμένη στη μέση, με ένα μάτι ανοιχτό στον ουρανό: από εκεί μπαίνουν ο ήλιος και η βροχή. Μπροστά του, δεκαέξι γιγάντιες κολόνες και μια πλατεία με σιντριβάνι.',
        en: 'A temple for all the gods at once has a roof like a giant ball cut in half, with an eye open to the sky: sunshine and rain both come in through it. In front of it stand sixteen giant columns and a square with a fountain.',
      },
      parentHint: {
        el: 'Είναι το Pantheon (το Πάνθεον), στην Piazza della Rotonda. Από τη Bocca della Verità περπατήστε 20 λεπτά βόρεια μέσα από το ιστορικό κέντρο (Via del Teatro di Marcello, Piazza Venezia, Via del Gesù και μετά η Piazza della Minerva με τον μικρό ελέφαντα που κουβαλάει οβελίσκο)· η πλατεία μπροστά είναι ελεύθερη, για το εσωτερικό οι ενήλικες πληρώνουν εισιτήριο.',
        en: 'It is the Pantheon, on Piazza della Rotonda. From the Bocca della Verità walk 20 minutes north through the old centre (Via del Teatro di Marcello, Piazza Venezia, Via del Gesù, then Piazza della Minerva with the little elephant carrying an obelisk); the square in front is free, adults pay a ticket to go inside.',
      },
      unlockQuestion: {
        question: { el: 'Το όνομα αυτού του ναού είναι ελληνικό: «παν» και «θεών». Τι σημαίνει;', en: 'The name of this temple is Greek: “pan” and “theon”. What does it mean?' },
        options: {
          el: ['Το μεγάλο σπίτι', 'Όλων των θεών', 'Η στρογγυλή στέγη', 'Το παλάτι του βασιλιά'],
          en: ['The big house', 'Of all the gods', 'The round roof', 'The king\'s palace'],
        },
        correct: 1,
        explanation: {
          el: 'Πάνθεον σημαίνει «όλων των θεών»: οι Ρωμαίοι τον αφιέρωσαν σε όλους τους θεούς τους μαζί. Οι Ρωμαίοι θαύμαζαν τους Έλληνες και δανείστηκαν πολλές ελληνικές λέξεις, θεούς και ιδέες.',
          en: 'Pantheon means “of all the gods”: the Romans dedicated it to all their gods at once. The Romans admired the Greeks and borrowed many Greek words, gods and ideas.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στην είσοδο και μέτρησε τις κολόνες της πρώτης σειράς. Πόσες είναι;', en: 'Stand in front of the entrance and count the columns in the front row. How many are there?' },
        options: {
          el: ['Έξι', 'Δέκα', 'Δώδεκα', 'Οκτώ'],
          en: ['Six', 'Ten', 'Twelve', 'Eight'],
        },
        correct: 3,
        explanation: {
          el: 'Οκτώ μπροστά και άλλες οκτώ πίσω τους, δεκαέξι συνολικά. Κάθε κολόνα είναι ένα μονοκόμματο κομμάτι γρανίτη, ψηλό όσο ένα τετραώροφο κτίριο, που ταξίδεψε από την Αίγυπτο με καράβι. Κοίτα και τη μεγάλη επιγραφή από πάνω: γράφει το όνομα του Αγρίππα, που έχτισε τον πρώτο ναό εδώ.',
          en: 'Eight in front and another eight behind them, sixteen in all. Each column is a single piece of granite, as tall as a four-storey building, that travelled from Egypt by ship. Look at the big inscription above too: it carries the name of Agrippa, who built the first temple here.',
        },
      },
      story: {
        el: 'Πριν από περίπου 1.900 χρόνια ο αυτοκράτορας Αδριανός ξανάχτισε έναν παλιό ναό του Αγρίππα και, από σεμνότητα, άφησε στην πρόσοψη το όνομα του Αγρίππα και όχι το δικό του. Οι χτίστες του έφτιαξαν κάτι που κανείς δεν είχε ξαναδεί: έναν θόλο από σκυρόδεμα, φαρδύ 43 μέτρα και εξίσου ψηλό, ώστε μια τεράστια μπάλα θα χωρούσε ακριβώς μέσα του. Στο κέντρο του υπάρχει ένα στρογγυλό άνοιγμα εννέα μέτρων, το «μάτι», χωρίς τζάμι: ο ήλιος μπαίνει σαν προβολέας που ταξιδεύει στους τοίχους, και όταν βρέχει, οι σταγόνες πέφτουν στο πάτωμα και φεύγουν από μικροσκοπικές τρύπες. Πριν από περίπου 1.400 χρόνια ο ναός έγινε εκκλησία, και γι\' αυτό σώθηκε ολόκληρος. Εδώ αναπαύεται ο ζωγράφος Ραφαήλ. Είναι ακόμη ο μεγαλύτερος θόλος από σκυρόδεμα χωρίς σίδερο στον κόσμο.',
        en: 'About 1,900 years ago Emperor Hadrian rebuilt an old temple of Agrippa and, out of modesty, left Agrippa\'s name on the front instead of his own. His builders made something nobody had seen before: a concrete dome 43 metres wide and just as tall, so a giant ball would fit inside it. In its centre is a round opening nine metres across, the “eye”, with no glass: the sun comes in like a spotlight that travels across the walls, and when it rains, the drops fall on the floor and drain away through tiny holes. About 1,400 years ago the temple became a church, and that is why it survived whole. The painter Raphael rests here. It is still the biggest unreinforced concrete dome in the world.',
      },
      didYouKnow: {
        el: 'Οι Ρωμαίοι μηχανικοί έκαναν τον θόλο όλο και πιο λεπτό και ελαφρύ προς την κορυφή: στη βάση το σκυρόδεμα έχει βαριά πέτρα και πάχος περίπου 6 μέτρα, ενώ κοντά στο «μάτι» έχει ελαφρόπετρα και μόλις 1,2 μέτρα. Οι δεκαέξι κολόνες της εισόδου λατομήθηκαν στην Αίγυπτο, κατέβηκαν τον Νείλο με σχεδίες και πέρασαν τη Μεσόγειο· καθεμιά ζυγίζει περίπου 60 τόνους.',
        en: 'Roman engineers made the dome thinner and lighter towards the top: at the base the concrete contains heavy stone and is about 6 metres thick, while near the “eye” it contains pumice and is only 1.2 metres thick. The sixteen columns of the porch were quarried in Egypt, floated down the Nile on rafts and shipped across the Mediterranean; each weighs about 60 tonnes.',
      },
      quiz: [
        {
          q: { el: 'Τίνος το όνομα άφησε ο Αδριανός στην πρόσοψη;', en: 'Whose name did Hadrian leave on the front?' },
          options: {
            el: ['Του Αγρίππα', 'Το δικό του', 'Του Ραφαήλ', 'Του Δία'],
            en: ['Agrippa\'s', 'His own', 'Raphael\'s', 'Jupiter\'s'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Αδριανός άφησε το όνομα του Αγρίππα, που είχε χτίσει τον πρώτο ναό σε αυτό το σημείο, αντί να γράψει το δικό του.',
            en: 'Hadrian left the name of Agrippa, who had built the first temple on this spot, instead of writing his own.',
          },
        },
        {
          q: { el: 'Τι γίνεται όταν βρέχει;', en: 'What happens when it rains?' },
          options: {
            el: ['Το μάτι κλείνει με ένα τζάμι', 'Η βροχή σταματάει πάνω από τον ναό', 'Η βροχή πέφτει μέσα και φεύγει από τρύπες στο πάτωμα', 'Ο θόλος γεμίζει νερό σαν πισίνα'],
            en: ['A glass closes the eye', 'The rain stops above the temple', 'Rain falls inside and drains through holes in the floor', 'The dome fills up like a pool'],
          },
          correct: 2,
          explanation: {
            el: 'Το άνοιγμα δεν έχει τζάμι. Η βροχή πέφτει στο μαρμάρινο πάτωμα, που έχει ελαφριά κλίση και μικρές τρύπες για να φεύγει το νερό.',
            en: 'The opening has no glass. The rain falls on the marble floor, which slopes slightly and has small holes to let the water drain away.',
          },
        },
        {
          q: { el: 'Γιατί σώθηκε ολόκληρος ο ναός;', en: 'Why did the temple survive whole?' },
          options: {
            el: ['Γιατί ήταν κρυμμένος κάτω από το χώμα', 'Γιατί έγινε εκκλησία', 'Γιατί ήταν πολύ μικρός', 'Γιατί τον φύλαγαν μονομάχοι'],
            en: ['Because it was hidden under the earth', 'Because it became a church', 'Because it was very small', 'Because gladiators guarded it'],
          },
          correct: 1,
          explanation: {
            el: 'Πριν από περίπου 1.400 χρόνια ο ναός έγινε εκκλησία. Έτσι κανείς δεν πήρε τις πέτρες του, όπως έγινε με τόσα άλλα αρχαία κτίρια.',
            en: 'About 1,400 years ago the temple became a church. So nobody took its stones away, as happened to so many other ancient buildings.',
          },
        },
      ],
    },

    // ── 6. Fontana di Trevi ────────────────────────────────────────────────────
    {
      id: 'trevi-fountain',
      name: { el: 'Fontana di Trevi', en: 'Trevi Fountain' },
      emoji: '🪙',
      lat: 41.9008,
      lng: 12.4834,
      radiusM: 60,
      riddle: {
        el: 'Ένας βασιλιάς της θάλασσας ξεπροβάλλει από τον τοίχο ενός παλατιού και οδηγεί δύο φτερωτά άλογα μέσα στους παφλασμούς. Το νερό του έρχεται από μια πηγή που βρέθηκε πριν από 2.000 χρόνια, και στον πάτο του λάμπουν χιλιάδες ευχές.',
        en: 'A king of the sea bursts out of the wall of a palace, driving two winged horses through the splashing water. His water comes from a spring found 2,000 years ago, and thousands of wishes glitter at the bottom.',
      },
      parentHint: {
        el: 'Είναι η Fontana di Trevi (η Κρήνη ντι Τρέβι). Από το Pantheon περπατήστε 8 λεπτά ανατολικά από τη Via del Seminario και τη Via delle Muratte· η μικρή πλατεία είναι πάντα γεμάτη κόσμο, οπότε πηγαίνετε νωρίς το πρωί ή μετά το δείπνο.',
        en: 'It is the Fontana di Trevi, the Trevi Fountain. From the Pantheon walk 8 minutes east along Via del Seminario and Via delle Muratte; the little square is always crowded, so go early in the morning or after dinner.',
      },
      unlockQuestion: {
        question: { el: 'Πώς ρίχνει κανείς σωστά το νόμισμα, σύμφωνα με την παράδοση;', en: 'How do you throw the coin properly, according to tradition?' },
        options: {
          el: ['Με το αριστερό χέρι πάνω από τον δεξιό ώμο', 'Με το δεξί χέρι πάνω από τον αριστερό ώμο, με την πλάτη στο σιντριβάνι', 'Με τα δύο χέρια ψηλά πάνω από το κεφάλι', 'Με μια κλωτσιά'],
          en: ['With your left hand over your right shoulder', 'With your right hand over your left shoulder, with your back to the fountain', 'With both hands high above your head', 'With a kick'],
        },
        correct: 1,
        explanation: {
          el: 'Γυρνάς την πλάτη στο σιντριβάνι και ρίχνεις το νόμισμα με το δεξί χέρι πάνω από τον αριστερό ώμο. Ένα νόμισμα, λέει η παράδοση, σημαίνει ότι θα ξαναγυρίσεις στη Ρώμη.',
          en: 'You turn your back to the fountain and throw the coin with your right hand over your left shoulder. One coin, tradition says, means you will come back to Rome.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα τη μεγάλη φιγούρα στη μέση. Πάνω σε τι στέκεται;', en: 'Look at the big figure in the middle. What is he standing on?' },
        options: {
          el: ['Σε ένα άρμα σε σχήμα κοχυλιού', 'Σε μια βάρκα με πανιά', 'Σε ένα δελφίνι', 'Σε έναν βράχο με σημαία'],
          en: ['A chariot shaped like a seashell', 'A boat with sails', 'A dolphin', 'A rock with a flag'],
        },
        correct: 0,
        explanation: {
          el: 'Ο Ωκεανός στέκεται σε ένα άρμα-κοχύλι που το τραβούν δύο φτερωτά θαλάσσια άλογα. Κοίτα τα προσεκτικά: το ένα είναι ήρεμο και το άλλο αφηνιασμένο, όπως η θάλασσα, που πότε είναι γαλήνια και πότε άγρια.',
          en: 'Oceanus stands on a seashell chariot pulled by two winged sea horses. Look at them closely: one is calm and one is wild, just like the sea, which is sometimes peaceful and sometimes stormy.',
        },
      },
      story: {
        el: 'Το νερό αυτού του σιντριβανιού έρχεται από πολύ παλιά. Το 19 π.Χ. ο Αγρίππας, ο ίδιος που έχτισε τον πρώτο ναό στο Pantheon, έφτιαξε ένα υδραγωγείο για να φέρνει καθαρό νερό από τους λόφους έξω από τη Ρώμη. Λένε ότι ένα κορίτσι έδειξε την πηγή σε διψασμένους στρατιώτες, γι\' αυτό το νερό ονομάστηκε «Παρθένο Νερό», Aqua Virgo. Το υδραγωγείο δουλεύει ακόμη, 2.000 χρόνια μετά! Το 1732 ο αρχιτέκτονας Nicola Salvi κέρδισε τον διαγωνισμό για ένα μεγαλοπρεπές σιντριβάνι στο τέλος του, όμως το έργο κράτησε τριάντα χρόνια και ο Salvi δεν πρόλαβε να το δει τελειωμένο, το 1762. Στη μέση στέκεται ο Ωκεανός, ο βασιλιάς όλων των νερών, με τα άλογά του. Κάθε μέρα χιλιάδες επισκέπτες ρίχνουν νομίσματα, και τα χρήματα μαζεύονται για να βοηθούν ανθρώπους που έχουν ανάγκη. Τα μεγάλα έργα θέλουν υπομονή, όπως και οι μεγάλες ευχές.',
        en: 'The water of this fountain comes from long ago. In 19 BC Agrippa, the same man who built the first temple at the Pantheon, made an aqueduct to bring clean water from the hills outside Rome. People say a young girl showed the spring to thirsty soldiers, so the water was named “Maiden Water”, Aqua Virgo. The aqueduct still works, 2,000 years later! In 1732 the architect Nicola Salvi won the competition for a grand fountain at the end of it, but the work took thirty years and Salvi never saw it finished, in 1762. In the middle stands Oceanus, the king of all waters, with his horses. Every day thousands of visitors throw coins, and the money is collected to help people in need. Big projects need patience, and so do big wishes.',
      },
      didYouKnow: {
        el: 'Τα νομίσματα μαζεύονται τακτικά και δίνονται σε φιλανθρωπικό οργανισμό της Ρώμης· φτάνουν περίπου το 1,5 εκατομμύριο ευρώ τον χρόνο. Το ίδιο αρχαίο υδραγωγείο, η Acqua Vergine, τροφοδοτεί και το σιντριβάνι-βάρκα της Piazza di Spagna και το Σιντριβάνι των Τεσσάρων Ποταμών στην Piazza Navona, τους επόμενους σταθμούς σας.',
        en: 'The coins are swept up regularly and given to a Roman charity; they add up to about 1.5 million euros a year. The same ancient aqueduct, the Acqua Vergine, also feeds the boat fountain at Piazza di Spagna and the Fountain of the Four Rivers in Piazza Navona, your next stops.',
      },
      quiz: [
        {
          q: { el: 'Ποιος έφτιαξε το υδραγωγείο που φέρνει το νερό;', en: 'Who built the aqueduct that brings the water?' },
          options: {
            el: ['Ο Salvi', 'Ο Bernini', 'Ο Νέρωνας', 'Ο Αγρίππας'],
            en: ['Salvi', 'Bernini', 'Nero', 'Agrippa'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Αγρίππας έφτιαξε το υδραγωγείο το 19 π.Χ., και το νερό του φτάνει ακόμη ως εδώ, 2.000 χρόνια μετά.',
            en: 'Agrippa built the aqueduct in 19 BC, and its water still reaches here, 2,000 years later.',
          },
        },
        {
          q: { el: 'Πόσο κράτησε το χτίσιμο του σιντριβανιού;', en: 'How long did it take to build the fountain?' },
          options: {
            el: ['Τρεις μήνες', 'Δύο χρόνια', 'Τριάντα χρόνια', 'Τριακόσια χρόνια'],
            en: ['Three months', 'Two years', 'Thirty years', 'Three hundred years'],
          },
          correct: 2,
          explanation: {
            el: 'Από το 1732 ως το 1762: τριάντα ολόκληρα χρόνια. Ο Salvi δεν πρόλαβε να δει το έργο του τελειωμένο.',
            en: 'From 1732 to 1762: thirty whole years. Salvi never got to see his work finished.',
          },
        },
        {
          q: { el: 'Πού πηγαίνουν τα νομίσματα;', en: 'Where do the coins go?' },
          options: {
            el: ['Στον δήμαρχο', 'Σε ανθρώπους που έχουν ανάγκη', 'Στη θάλασσα', 'Σε μια τράπεζα στην Αίγυπτο'],
            en: ['To the mayor', 'To help people in need', 'Into the sea', 'To a bank in Egypt'],
          },
          correct: 1,
          explanation: {
            el: 'Τα νομίσματα μαζεύονται και δίνονται σε έναν οργανισμό που βοηθάει ανθρώπους που έχουν ανάγκη. Έτσι κάθε ευχή κάνει και λίγο καλό!',
            en: 'The coins are collected and given to an organisation that helps people in need. So every wish does a little good too!',
          },
        },
      ],
    },

    // ── 7. Piazza di Spagna ────────────────────────────────────────────────────
    {
      id: 'spanish-steps',
      name: { el: 'Piazza di Spagna', en: 'Spanish Steps' },
      emoji: '🌸',
      lat: 41.9057,
      lng: 12.4822,
      radiusM: 60,
      riddle: {
        el: 'Μια πέτρινη σκάλα χύνεται από τον λόφο σαν καταρράκτης, από μια εκκλησία στην κορυφή ως ένα σιντριβάνι σε σχήμα βάρκας στο κάτω μέρος. Έχει το όνομα μιας χώρας, αλλά την πλήρωσε μια άλλη.',
        en: 'A stone staircase pours down the hill like a waterfall, from a church at the top to a boat-shaped fountain at the bottom. It carries the name of one country, but a different country paid for it.',
      },
      parentHint: {
        el: 'Είναι η Piazza di Spagna με τη Scalinata (την Ισπανική Σκάλα). Από την Fontana di Trevi περπατήστε 10 λεπτά βόρεια από τη Via della Stamperia και τη Via di Propaganda, ή πάρτε το μετρό (γραμμή A) ως τη στάση Spagna, που βγαίνει δίπλα στην πλατεία. Θυμηθείτε: απαγορεύεται να καθίσετε στα σκαλιά.',
        en: 'It is Piazza di Spagna with the Scalinata, the Spanish Steps. From the Trevi Fountain walk 10 minutes north along Via della Stamperia and Via di Propaganda, or take metro line A to Spagna, which comes out next to the square. Remember: sitting on the steps is not allowed.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί η σκάλα λέγεται «Ισπανική»;', en: 'Why is the staircase called “Spanish”?' },
        options: {
          el: ['Γιατί την έχτισε ένας Ισπανός βασιλιάς', 'Γιατί είναι βαμμένη κόκκινη και κίτρινη', 'Γιατί στην πλατεία από κάτω έμενε ο πρεσβευτής της Ισπανίας', 'Γιατί οδηγεί στην Ισπανία'],
          en: ['Because a Spanish king built it', 'Because it is painted red and yellow', 'Because the ambassador of Spain lived on the square below', 'Because it leads to Spain'],
        },
        correct: 2,
        explanation: {
          el: 'Η πλατεία στο κάτω μέρος πήρε το όνομά της από την πρεσβεία της Ισπανίας, που βρίσκεται εκεί εδώ και αιώνες. Τα χρήματα για τη σκάλα όμως τα άφησε ένας Γάλλος διπλωμάτης, γιατί η εκκλησία στην κορυφή ανήκε στους Γάλλους.',
          en: 'The square at the bottom took its name from the Spanish embassy, which has been there for centuries. The money for the staircase, though, was left by a French diplomat, because the church at the top belonged to the French.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα ψηλά, την εκκλησία στην κορυφή της σκάλας. Πόσους πύργους με καμπάνες έχει;', en: 'Look up at the church at the top of the steps. How many bell towers does it have?' },
        options: {
          el: ['Έναν', 'Δύο', 'Τρεις', 'Τέσσερις'],
          en: ['One', 'Two', 'Three', 'Four'],
        },
        correct: 1,
        explanation: {
          el: 'Δύο δίδυμοι πύργοι: είναι η Trinità dei Monti, η γαλλική εκκλησία, που τελείωσε πριν από περισσότερα από 400 χρόνια. Μπροστά της στέκεται ένας οβελίσκος, αντίγραφο ενός αιγυπτιακού που έφτιαξαν οι ίδιοι οι Ρωμαίοι.',
          en: 'Two twin towers: this is Trinità dei Monti, the French church, finished more than 400 years ago. In front of it stands an obelisk, a copy of an Egyptian one made by the Romans themselves.',
        },
      },
      story: {
        el: 'Πριν από 300 χρόνια η πλαγιά ανάμεσα στην πλατεία και στη γαλλική εκκλησία ήταν ένας λασπωμένος λόφος. Ένας Γάλλος διπλωμάτης άφησε χρήματα για μια σκάλα, και ο αρχιτέκτονας Francesco de Sanctis σχεδίασε 135 σκαλιά που ανεβαίνουν με καμπύλες, σαν παγωμένος καταρράκτης. Η σκάλα τελείωσε το 1725. Στο κάτω μέρος, το σιντριβάνι σε σχήμα βάρκας που βουλιάζει, η Barcaccia, είναι ακόμη πιο παλιό: το έφτιαξε το 1629 ο Pietro Bernini, ο πατέρας του πιο διάσημου γλύπτη της Ρώμης. Λένε ότι μια πλημμύρα του ποταμού είχε αφήσει εδώ μια αληθινή βάρκα, και έτσι του ήρθε η ιδέα. Την άνοιξη τα σκαλιά γεμίζουν ροζ αζαλέες. Εδώ συναντιόντουσαν ποιητές και ζωγράφοι από όλη την Ευρώπη, και ακόμη σήμερα είναι το πιο αγαπημένο σημείο συνάντησης της πόλης, αρκεί να μείνεις όρθιος!',
        en: 'Three hundred years ago the slope between the square and the French church was a muddy hillside. A French diplomat left money for a staircase, and the architect Francesco de Sanctis designed 135 steps that climb in curves, like a frozen waterfall. The steps were finished in 1725. At the bottom, the fountain shaped like a sinking boat, the Barcaccia, is even older: it was made in 1629 by Pietro Bernini, the father of Rome\'s most famous sculptor. People say a flood of the river once left a real boat stranded here, and that gave him the idea. In spring the steps fill with pink azaleas. Poets and painters from all over Europe used to meet here, and today it is still the city\'s favourite meeting place, as long as you stay on your feet!',
      },
      didYouKnow: {
        el: 'Στο σπίτι στα δεξιά της σκάλας, όπως κοιτάτε προς τα πάνω, πέθανε το 1821 ο Άγγλος ποιητής John Keats, μόλις 25 ετών· σήμερα είναι μουσείο. Από το 2019 όποιος κάθεται στα σκαλιά κινδυνεύει με πρόστιμο 250 ευρώ, για να προστατεύεται το μάρμαρο.',
        en: 'The English poet John Keats died in 1821, aged only 25, in the house to the right of the steps as you look up; today it is a museum. Since 2019 anyone sitting on the steps risks a fine of 250 euros, to protect the marble.',
      },
      quiz: [
        {
          q: { el: 'Πόσα σκαλιά έχει η σκάλα;', en: 'How many steps does the staircase have?' },
          options: {
            el: ['135', '35', '1.000', '12'],
            en: ['135', '35', '1,000', '12'],
          },
          correct: 0,
          explanation: {
            el: 'Η σκάλα έχει 135 σκαλιά, με πλατύσκαλα για ξεκούραση. Μέτρησέ τα καθώς ανεβαίνεις!',
            en: 'The staircase has 135 steps, with landings to rest on. Count them as you climb!',
          },
        },
        {
          q: { el: 'Τι σχήμα έχει το σιντριβάνι στο κάτω μέρος;', en: 'What shape is the fountain at the bottom?' },
          options: {
            el: ['Ενός κοχυλιού', 'Ενός λιονταριού', 'Ενός αστεριού', 'Μιας βάρκας που βουλιάζει'],
            en: ['A seashell', 'A lion', 'A star', 'A sinking boat'],
          },
          correct: 3,
          explanation: {
            el: 'Η Barcaccia, η «παλιοβάρκα», μοιάζει με βάρκα που βουλιάζει. Το νερό εδώ έφτανε με λίγη πίεση, γι\' αυτό το σιντριβάνι είναι χαμηλό.',
            en: 'The Barcaccia, the “old boat”, looks like a boat that is sinking. The water arrived here with little pressure, which is why the fountain is so low.',
          },
        },
        {
          q: { el: 'Ποιος έφτιαξε το σιντριβάνι-βάρκα;', en: 'Who made the boat fountain?' },
          options: {
            el: ['Ο Μιχαήλ Άγγελος', 'Ο Francesco de Sanctis', 'Ο Pietro Bernini, ο πατέρας του διάσημου γλύπτη', 'Ένας Ισπανός βασιλιάς'],
            en: ['Michelangelo', 'Francesco de Sanctis', 'Pietro Bernini, the father of the famous sculptor', 'A Spanish king'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Pietro Bernini το έφτιαξε το 1629. Ο γιος του, ο Gian Lorenzo, έγινε ο πιο διάσημος γλύπτης της Ρώμης και θα τον συναντήσετε στους επόμενους σταθμούς.',
            en: 'Pietro Bernini made it in 1629. His son, Gian Lorenzo, became the most famous sculptor in Rome, and you will meet him at the next stops.',
          },
        },
      ],
    },

    // ── 8. Piazza Navona ───────────────────────────────────────────────────────
    {
      id: 'piazza-navona',
      name: { el: 'Piazza Navona', en: 'Piazza Navona' },
      emoji: '🌊',
      lat: 41.8992,
      lng: 12.4731,
      radiusM: 40,
      riddle: {
        el: 'Κάποτε 30.000 θεατές ζητωκραύγαζαν εδώ τους δρομείς. Σήμερα ο στίβος έγινε μια μακρόστενη πλατεία με τρία σιντριβάνια, όπου τέσσερις πέτρινοι γίγαντες κάθονται κάτω από μια πέτρινη βελόνα.',
        en: 'Once, 30,000 spectators cheered the runners here. Today the racetrack has become a long, narrow square with three fountains, where four stone giants sit beneath a needle of stone.',
      },
      parentHint: {
        el: 'Είναι η Piazza Navona (η Πλατεία Ναβόνα). Από την Piazza di Spagna ο πιο εύκολος δρόμος είναι να γυρίσετε με τα πόδια ως το Pantheon (12 λεπτά, από τη Via Condotti και τη Via del Corso) και μετά 5 λεπτά δυτικά από τη Via Giustiniani και το Corso del Rinascimento· το σημείο είναι το κεντρικό σιντριβάνι με τον οβελίσκο.',
        en: 'It is Piazza Navona. From Piazza di Spagna the easiest way is to walk back to the Pantheon (12 minutes, via Via Condotti and Via del Corso) and then 5 minutes west along Via Giustiniani and Corso del Rinascimento; the spot is the central fountain with the obelisk.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί η πλατεία είναι τόσο μακρόστενη, με στρογγυλή τη μία της άκρη;', en: 'Why is the square so long and narrow, with one rounded end?' },
        options: {
          el: ['Γιατί χτίστηκε πάνω σε έναν αρχαίο στίβο για αγώνες δρόμου', 'Γιατί από εδώ περνούσε ένα ποτάμι', 'Γιατί ο αρχιτέκτονας αγαπούσε τα αυγά', 'Γιατί την έσπασε ένας σεισμός'],
          en: ['Because it was built on an ancient racetrack', 'Because a river used to flow here', 'Because the architect loved eggs', 'Because an earthquake broke it'],
        },
        correct: 0,
        explanation: {
          el: 'Η πλατεία έχει ακριβώς το σχήμα ενός αρχαίου σταδίου: τα σπίτια γύρω της στέκονται πάνω στις παλιές κερκίδες. Οι αγώνες που γίνονταν εδώ λέγονταν «agones», από την ελληνική λέξη «αγώνας», και από αυτή τη λέξη βγήκε με τον καιρό το όνομα Navona.',
          en: 'The square has exactly the shape of an ancient stadium: the houses around it stand on the old seating. The contests held here were called “agones”, from the Greek word for contest, and over time that word turned into the name Navona.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα την κορυφή της ψηλής πέτρινης βελόνας πάνω από το κεντρικό σιντριβάνι. Τι στέκεται εκεί πάνω;', en: 'Look at the very top of the tall stone needle above the central fountain. What stands up there?' },
        options: {
          el: ['Ένα αστέρι', 'Ένας σταυρός', 'Ένα περιστέρι', 'Μια μπάλα'],
          en: ['A star', 'A cross', 'A dove', 'A ball'],
        },
        correct: 2,
        explanation: {
          el: 'Ένα χάλκινο περιστέρι με ένα κλαδί ελιάς: ήταν το σύμβολο της οικογένειας του Πάπα Ιννοκέντιου Ι΄, που παρήγγειλε το σιντριβάνι το 1651. Το παλάτι της οικογένειάς του είναι ακριβώς δίπλα, στην πλατεία.',
          en: 'A bronze dove with an olive twig: it was the symbol of the family of Pope Innocent X, who ordered the fountain in 1651. His family\'s palace is right next to it, on the square.',
        },
      },
      story: {
        el: 'Το 86 μ.Χ. ο αυτοκράτορας Δομιτιανός έχτισε εδώ ένα στάδιο για αγώνες δρόμου, όπως αυτοί που έκαναν οι Έλληνες στην Ολυμπία. Χωρούσε περίπου 30.000 θεατές. Το στάδιο γκρεμίστηκε, αλλά το σχήμα του έμεινε: τα σπίτια χτίστηκαν πάνω στις κερκίδες και ο στίβος έγινε πλατεία. Το 1651 ο Gian Lorenzo Bernini έφτιαξε το Σιντριβάνι των Τεσσάρων Ποταμών: τέσσερις γίγαντες είναι τα μεγαλύτερα ποτάμια των τεσσάρων ηπείρων που γνώριζαν τότε, ο Νείλος, ο Γάγγης, ο Δούναβης και ο Ρίο ντε λα Πλάτα. Ο Νείλος σκεπάζει το πρόσωπό του με ένα πανί, γιατί τότε κανείς δεν ήξερε από πού πηγάζει το ποτάμι. Πάνω τους υψώνεται ένας οβελίσκος. Απέναντι στέκεται η εκκλησία της Αγίας Αγνής, έργο του Borromini, του μεγάλου αντιπάλου του Bernini. Τα Χριστούγεννα η πλατεία γεμίζει πάγκους με γλυκά και παιχνίδια, και όλο τον χρόνο ζωγράφους και ταχυδακτυλουργούς.',
        en: 'In 86 AD Emperor Domitian built a stadium here for running races, like the ones the Greeks held at Olympia. It held about 30,000 spectators. The stadium crumbled, but its shape stayed: houses were built on the seating and the track became a square. In 1651 Gian Lorenzo Bernini made the Fountain of the Four Rivers: four giants are the greatest rivers of the four continents known at the time, the Nile, the Ganges, the Danube and the Río de la Plata. The Nile covers his face with a cloth, because nobody then knew where the river began. Above them rises an obelisk. Opposite stands the church of Saint Agnes, by Borromini, Bernini\'s great rival. At Christmas the square fills with stalls of sweets and toys, and all year round with painters and street magicians.',
      },
      didYouKnow: {
        el: 'Από το 1652 ως το 1866, τα Σαββατοκύριακα του Αυγούστου έκλειναν τις αποχετεύσεις των σιντριβανιών και η πλατεία πλημμύριζε επίτηδες: γινόταν μια ρηχή λίμνη όπου οι Ρωμαίοι έμπαιναν με τις άμαξές τους για να δροσιστούν. Τα ερείπια του σταδίου του Δομιτιανού σώζονται περίπου 4,5 μέτρα κάτω από τον σημερινό δρόμο και επισκέπτονται από τη βόρεια άκρη της πλατείας.',
        en: 'From 1652 to 1866, on August weekends, the fountain drains were blocked and the square was deliberately flooded: it became a shallow lake where Romans drove their carriages to cool off. The remains of Domitian\'s stadium survive about 4.5 metres below today\'s street level and can be visited from the north end of the square.',
      },
      quiz: [
        {
          q: { el: 'Τι υπήρχε εδώ στην αρχαιότητα;', en: 'What was here in ancient times?' },
          options: {
            el: ['Ένα λιμάνι', 'Ένα στάδιο για αγώνες δρόμου', 'Ένα δάσος', 'Ένα παλάτι'],
            en: ['A harbour', 'A stadium for running races', 'A forest', 'A palace'],
          },
          correct: 1,
          explanation: {
            el: 'Ο αυτοκράτορας Δομιτιανός έχτισε εδώ ένα στάδιο το 86 μ.Χ., και η πλατεία κράτησε ακριβώς το σχήμα του.',
            en: 'Emperor Domitian built a stadium here in 86 AD, and the square kept exactly its shape.',
          },
        },
        {
          q: { el: 'Γιατί ο Νείλος σκεπάζει το πρόσωπό του;', en: 'Why does the Nile cover his face?' },
          options: {
            el: ['Γιατί κρυώνει', 'Γιατί ντρέπεται', 'Γιατί κοιμάται', 'Γιατί κανείς δεν ήξερε από πού πηγάζει το ποτάμι'],
            en: ['Because he is cold', 'Because he is shy', 'Because he is asleep', 'Because nobody knew where the river began'],
          },
          correct: 3,
          explanation: {
            el: 'Την εποχή του Bernini κανείς δεν είχε βρει τις πηγές του Νείλου. Το σκεπασμένο πρόσωπο σημαίνει «μυστήριο». Οι εξερευνητές τις βρήκαν 200 χρόνια αργότερα.',
            en: 'In Bernini\'s time nobody had found the source of the Nile. The covered face means “mystery”. Explorers found it 200 years later.',
          },
        },
        {
          q: { el: 'Ποιος έφτιαξε το Σιντριβάνι των Τεσσάρων Ποταμών;', en: 'Who made the Fountain of the Four Rivers?' },
          options: {
            el: ['Ο Bernini', 'Ο Borromini', 'Ο Δομιτιανός', 'Ο Μιχαήλ Άγγελος'],
            en: ['Bernini', 'Borromini', 'Domitian', 'Michelangelo'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Gian Lorenzo Bernini, ο γιος του γλύπτη της Barcaccia, έφτιαξε το σιντριβάνι το 1651. Ο Borromini, ο αντίπαλός του, έχτισε την εκκλησία απέναντι.',
            en: 'Gian Lorenzo Bernini, the son of the sculptor of the Barcaccia, made the fountain in 1651. Borromini, his rival, built the church opposite.',
          },
        },
      ],
    },

    // ── 9. Castel Sant'Angelo ──────────────────────────────────────────────────
    {
      id: 'castel-sant-angelo',
      name: { el: 'Castel Sant\'Angelo', en: 'Castel Sant\'Angelo' },
      emoji: '👼',
      lat: 41.9022,
      lng: 12.4665,
      radiusM: 80,
      riddle: {
        el: 'Ένας στρογγυλός γίγαντας στην όχθη του ποταμού ξεκίνησε ως τάφος αυτοκράτορα, έγινε κάστρο με μυστικό πέρασμα και πήρε το όνομά του από έναν άγγελο που έβαλε το σπαθί του στη θήκη. Για να φτάσεις, περνάς μια γέφυρα που τη φυλάνε άγγελοι.',
        en: 'A round giant on the riverbank began life as an emperor\'s tomb, became a castle with a secret passage, and got its name from an angel who put his sword away. To reach it, you cross a bridge guarded by angels.',
      },
      parentHint: {
        el: 'Είναι το Castel Sant\'Angelo (το Κάστρο του Αγίου Αγγέλου) με την Ponte Sant\'Angelo. Από την Piazza Navona περπατήστε 10 λεπτά δυτικά μέσα από τη Via dei Coronari ως τον ποταμό Τίβερη· το σημείο είναι πάνω στη γέφυρα με τους αγγέλους, μπροστά στο κάστρο. Η είσοδος στο κάστρο είναι με εισιτήριο, η γέφυρα είναι δωρεάν.',
        en: 'It is Castel Sant\'Angelo with the Ponte Sant\'Angelo. From Piazza Navona walk 10 minutes west along Via dei Coronari to the river Tiber; the spot is on the angel bridge, in front of the castle. Going inside the castle needs a ticket, the bridge is free.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι χτίστηκε ως τάφος για έναν αυτοκράτορα. Ποιον; Είναι ο ίδιος που ξανάχτισε τον ναό όλων των θεών.', en: 'The riddle says it was built as a tomb for an emperor. Which one? He is the same emperor who rebuilt the temple of all the gods.' },
        options: {
          el: ['Τον Νέρωνα', 'Τον Ιούλιο Καίσαρα', 'Τον Αδριανό', 'Τον Αύγουστο'],
          en: ['Nero', 'Julius Caesar', 'Hadrian', 'Augustus'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Αδριανός, που ξανάχτισε το Pantheon, ήθελε έναν τεράστιο στρογγυλό τάφο για τον ίδιο και την οικογένειά του. Τελείωσε το 139 μ.Χ., έναν χρόνο μετά τον θάνατό του.',
          en: 'Hadrian, who rebuilt the Pantheon, wanted a huge round tomb for himself and his family. It was finished in 139 AD, a year after he died.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε τη γέφυρα από τη μία άκρη ως την άλλη και μέτρησε τους αγγέλους πάνω στα κάγκελά της. Πόσοι είναι;', en: 'Walk the bridge from one end to the other and count the angels on its railings. How many are there?' },
        options: {
          el: ['Έξι', 'Οκτώ', 'Δώδεκα', 'Δέκα'],
          en: ['Six', 'Eight', 'Twelve', 'Ten'],
        },
        correct: 3,
        explanation: {
          el: 'Δέκα άγγελοι, πέντε σε κάθε πλευρά, και καθένας κρατάει κάτι διαφορετικό: μια κολόνα, ένα στεφάνι από αγκάθια, καρφιά, ένα σφουγγάρι. Τους σχεδίασε ο Bernini το 1668 και τους σκάλισαν οι μαθητές του. Στην άκρη προς την πόλη στέκονται δύο ακόμη αγάλματα, οι άγιοι Πέτρος και Παύλος.',
          en: 'Ten angels, five on each side, and each one holds something different: a column, a crown of thorns, nails, a sponge. Bernini designed them in 1668 and his pupils carved them. At the city end stand two more statues, Saint Peter and Saint Paul.',
        },
      },
      story: {
        el: 'Πριν από περίπου 1.900 χρόνια ο αυτοκράτορας Αδριανός έχτισε εδώ τον τάφο του: έναν τεράστιο πέτρινο κύλινδρο με κήπο από κυπαρίσσια στην κορυφή και ένα άγαλμα του ίδιου πάνω σε άρμα. Όταν όμως η Ρώμη χρειάστηκε προστασία, οι χοντροί τοίχοι του τάφου έγιναν κάστρο. Ο θρύλος λέει ότι το 590, όταν μια αρρώστια βασάνιζε την πόλη, ο Πάπας είδε στην κορυφή του έναν άγγελο να βάζει το σπαθί του στη θήκη, σημάδι ότι η αρρώστια τελείωνε· έτσι το κάστρο πήρε το όνομά του, και ένας χάλκινος άγγελος στέκεται ακόμη εκεί ψηλά. Οι Πάπες φύλαγαν εδώ τον θησαυρό τους και έχτισαν έναν κρυφό, υπερυψωμένο διάδρομο 800 μέτρων που οδηγεί στο Βατικανό, για να τρέχουν σε ασφαλές μέρος αν ερχόταν κίνδυνος. Η γέφυρα είναι κι αυτή του Αδριανού· οι άγγελοί της ήρθαν 1.500 χρόνια αργότερα. Ένα κτίριο μπορεί να ζήσει πολλές ζωές!',
        en: 'About 1,900 years ago Emperor Hadrian built his tomb here: a huge stone drum with a garden of cypress trees on top and a statue of himself on a chariot. But when Rome needed protection, the thick walls of the tomb became a castle. Legend says that in 590, when a sickness was troubling the city, the Pope saw an angel on the top putting his sword away, a sign that the sickness was ending; so the castle got its name, and a bronze angel still stands up there. The Popes kept their treasure here and built a secret raised corridor, 800 metres long, that leads to the Vatican, so they could run to safety if danger came. The bridge is Hadrian\'s too; its angels arrived 1,500 years later. A building can live many lives!',
      },
      didYouKnow: {
        el: 'Ο χάλκινος άγγελος στην κορυφή είναι του 1753· ο προηγούμενος, μαρμάρινος, του 1544, φυλάγεται σε μια αυλή μέσα στο κάστρο. Το κάστρο ήταν και φυλακή: το 1538 ο διάσημος χρυσοχόος Benvenuto Cellini δραπέτευσε κατεβαίνοντας τα τείχη με δεμένα σεντόνια, έσπασε το πόδι του και συνελήφθη ξανά.',
        en: 'The bronze angel on top dates from 1753; the earlier marble one, from 1544, is kept in a courtyard inside the castle. The castle also served as a prison: in 1538 the famous goldsmith Benvenuto Cellini escaped by climbing down the walls on knotted sheets, broke his leg and was caught again.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν το κάστρο στην αρχή;', en: 'What was the castle at first?' },
          options: {
            el: ['Ο τάφος του αυτοκράτορα Αδριανού', 'Ένας φάρος', 'Ένα στάδιο', 'Ένα σχολείο'],
            en: ['The tomb of Emperor Hadrian', 'A lighthouse', 'A stadium', 'A school'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Αδριανός το έχτισε ως τάφο για τον ίδιο και την οικογένειά του, με κήπο και άγαλμα στην κορυφή. Αργότερα έγινε κάστρο.',
            en: 'Hadrian built it as a tomb for himself and his family, with a garden and a statue on top. Later it became a castle.',
          },
        },
        {
          q: { el: 'Τι έκανε ο άγγελος που είδε ο Πάπας, σύμφωνα με τον θρύλο;', en: 'What was the angel doing that the Pope saw, according to the legend?' },
          options: {
            el: ['Έπαιζε τρομπέτα', 'Έβαζε το σπαθί του στη θήκη', 'Πετούσε πάνω από τον ποταμό', 'Έχτιζε τη γέφυρα'],
            en: ['Playing a trumpet', 'Putting his sword away', 'Flying over the river', 'Building the bridge'],
          },
          correct: 1,
          explanation: {
            el: 'Ο άγγελος έβαζε το σπαθί του στη θήκη: σημάδι ότι η αρρώστια τελείωνε. Από τότε το κάστρο λέγεται «του Αγίου Αγγέλου».',
            en: 'The angel was putting his sword away: a sign that the sickness was ending. Since then the castle has been called “of the Holy Angel”.',
          },
        },
        {
          q: { el: 'Πού οδηγεί ο κρυφός διάδρομος των 800 μέτρων;', en: 'Where does the 800-metre secret corridor lead?' },
          options: {
            el: ['Στο Κολοσσαίο', 'Στη θάλασσα', 'Στο Βατικανό', 'Στην Piazza Navona'],
            en: ['To the Colosseum', 'To the sea', 'To the Vatican', 'To Piazza Navona'],
          },
          correct: 2,
          explanation: {
            el: 'Ο διάδρομος, το Passetto, τρέχει πάνω σε ένα παλιό τείχος ως το Βατικανό. Το 1527 ένας Πάπας ξέφυγε από εκεί όταν εχθρικοί στρατιώτες μπήκαν στην πόλη.',
            en: 'The corridor, the Passetto, runs along the top of an old wall all the way to the Vatican. In 1527 a Pope escaped through it when enemy soldiers entered the city.',
          },
        },
      ],
    },

    // ── 10. Piazza San Pietro ──────────────────────────────────────────────────
    {
      id: 'st-peters-square',
      name: { el: 'Piazza San Pietro', en: 'St Peter\'s Square' },
      emoji: '🔑',
      lat: 41.9022,
      lng: 12.4573,
      radiusM: 60,
      riddle: {
        el: 'Δύο γιγάντια πέτρινα χέρια ανοίγουν διάπλατα για να αγκαλιάσουν όποιον φτάνει σε αυτή την πλατεία, στην πιο μικρή χώρα του κόσμου. Στη μέση στέκεται μια πέτρινη βελόνα που κάποτε έβλεπε αρματοδρομίες.',
        en: 'Two giant stone arms open wide to hug everyone who arrives in this square, in the smallest country in the world. In the middle stands a stone needle that once watched chariot races.',
      },
      parentHint: {
        el: 'Είναι η Piazza San Pietro (η Πλατεία του Αγίου Πέτρου), στο Βατικανό. Από το κάστρο περπατήστε 10 λεπτά δυτικά στη φαρδιά Via della Conciliazione, με τον τρούλο μπροστά σας. Η πλατεία είναι ανοιχτή και δωρεάν· για τη βασιλική υπάρχει έλεγχος ασφαλείας και ουρά, και οι ώμοι και τα γόνατα πρέπει να είναι καλυμμένα.',
        en: 'It is Piazza San Pietro, St Peter\'s Square, in the Vatican. From the castle walk 10 minutes west along the wide Via della Conciliazione, with the dome straight ahead of you. The square is open and free; for the basilica there is a security check and a queue, and shoulders and knees must be covered.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι η πλατεία βρίσκεται στην πιο μικρή χώρα του κόσμου. Ποια είναι;', en: 'The riddle says the square is in the smallest country in the world. Which one is it?' },
        options: {
          el: ['Το Μονακό', 'Ο Άγιος Μαρίνος', 'Το Βατικανό', 'Η Μάλτα'],
          en: ['Monaco', 'San Marino', 'Vatican City', 'Malta'],
        },
        correct: 2,
        explanation: {
          el: 'Το Βατικανό είναι ανεξάρτητο κράτος από το 1929, με έκταση μικρότερη από μισό τετραγωνικό χιλιόμετρο, πιο μικρό από πολλά πάρκα. Έχει όμως δικά του γραμματόσημα, δική του σημαία και δικούς του φρουρούς.',
          en: 'Vatican City has been an independent state since 1929, with an area of less than half a square kilometre, smaller than many parks. Yet it has its own stamps, its own flag and its own guards.',
        },
      },
      onSite: {
        question: { el: 'Βρες στο έδαφος έναν στρογγυλό μαρμάρινο δίσκο ανάμεσα στον οβελίσκο και σε ένα από τα δύο σιντριβάνια, και στάσου ακριβώς πάνω του. Κοίτα τις κολόνες. Τι βλέπεις;', en: 'Find a round marble disc on the ground between the obelisk and one of the two fountains, and stand right on it. Look at the colonnade. What do you see?' },
        options: {
          el: ['Οι κολόνες γυρίζουν σαν καρουζέλ', 'Οι τέσσερις σειρές κολόνες ευθυγραμμίζονται και μοιάζουν με μία', 'Οι κολόνες εξαφανίζονται', 'Οι κολόνες γίνονται χρυσές'],
          en: ['The columns spin like a carousel', 'The four rows of columns line up and look like a single row', 'The columns disappear', 'The columns turn gold'],
        },
        correct: 1,
        explanation: {
          el: 'Από αυτό το σημείο, το κέντρο του κύκλου της κιονοστοιχίας, οι τέσσερις σειρές κρύβονται η μία πίσω από την άλλη και βλέπεις μόνο μία. Ο Bernini το σχεδίασε έτσι πριν από περισσότερα από 350 χρόνια: γεωμετρία που κάνει μαγικά!',
          en: 'From this point, the centre of the colonnade\'s circle, the four rows hide one behind the other and you see only one. Bernini planned it that way more than 350 years ago: geometry doing magic!',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 350 χρόνια ο Bernini σχεδίασε αυτή την τεράστια πλατεία μπροστά στη μεγαλύτερη εκκλησία της Ρώμης. Οι δύο καμπύλες κιονοστοιχίες, με 284 κολόνες σε τέσσερις σειρές και 140 αγάλματα αγίων στην κορυφή, είναι, όπως είπε ο ίδιος, σαν δύο ανοιχτά χέρια που αγκαλιάζουν όποιον έρχεται. Ο οβελίσκος στη μέση ήρθε από την Αίγυπτο πριν από σχεδόν 2.000 χρόνια και στεκόταν σε έναν ρωμαϊκό ιππόδρομο εδώ δίπλα. Το 1586 χρειάστηκαν 900 άντρες, 140 άλογα και δεκάδες βαρούλκα για να τον μεταφέρουν εδώ και να τον στήσουν όρθιο, με διαταγή να μη μιλήσει κανείς. Δύο σιντριβάνια, ένα σε κάθε πλευρά, δροσίζουν την πλατεία. Το Βατικανό, το μικρότερο κράτος του κόσμου, έχει περίπου 800 κατοίκους, και το φυλάνε από το 1506 οι Ελβετοί Φρουροί με τις ριγέ μπλε, κίτρινες και κόκκινες στολές τους. Ο τρούλος από πάνω σχεδιάστηκε από τον Μιχαήλ Άγγελο.',
        en: 'More than 350 years ago Bernini designed this enormous square in front of the biggest church in Rome. The two curved colonnades, with 284 columns in four rows and 140 statues of saints on top, are like two open arms embracing everyone who comes. The obelisk in the middle came from Egypt almost 2,000 years ago and stood in a Roman racetrack nearby. In 1586 it took 900 men, 140 horses and dozens of winches to move it here and stand it up, with an order that nobody should speak. Two fountains, one on each side, cool the square. Vatican City, the smallest state in the world, has about 800 inhabitants and has been guarded since 1506 by the Swiss Guard in their striped blue, yellow and red uniforms. The dome above was designed by Michelangelo.',
      },
      didYouKnow: {
        el: 'Λένε συχνά ότι τις στολές των Ελβετών Φρουρών τις σχεδίασε ο Μιχαήλ Άγγελος, όμως η σημερινή τους μορφή είναι του 1914, έργο του διοικητή Jules Repond. Οι φρουροί πρέπει να είναι Ελβετοί πολίτες, ανύπαντροι άντρες 19 έως 30 ετών και τουλάχιστον 1,74 μ. ψηλοί. Το Βατικανό έχει δικό του ταχυδρομείο: μια κάρτα με γραμματόσημο του Βατικανού είναι ωραίο αναμνηστικό.',
        en: 'It is often said that Michelangelo designed the Swiss Guard uniforms, but their present form dates from 1914, the work of commander Jules Repond. Guards must be Swiss citizens, unmarried men aged 19 to 30 and at least 1.74 m tall. The Vatican has its own post office: a postcard with a Vatican stamp makes a lovely souvenir.',
      },
      quiz: [
        {
          q: { el: 'Με τι μοιάζουν οι δύο κιονοστοιχίες, σύμφωνα με τον Bernini;', en: 'What did Bernini say the two colonnades look like?' },
          options: {
            el: ['Με δύο πλοία', 'Με δύο βουνά', 'Με δύο φίδια', 'Με δύο ανοιχτά χέρια που αγκαλιάζουν'],
            en: ['Two ships', 'Two mountains', 'Two snakes', 'Two open arms giving a hug'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Bernini είπε ότι οι κιονοστοιχίες είναι σαν τα χέρια μιας μητέρας που αγκαλιάζει όποιον φτάνει στην πλατεία.',
            en: 'Bernini said the colonnades are like the arms of a mother embracing everyone who arrives in the square.',
          },
        },
        {
          q: { el: 'Από πού ήρθε ο οβελίσκος;', en: 'Where did the obelisk come from?' },
          options: {
            el: ['Από την Αίγυπτο', 'Από την Ελλάδα', 'Από την Ελβετία', 'Από το φεγγάρι'],
            en: ['Egypt', 'Greece', 'Switzerland', 'The moon'],
          },
          correct: 0,
          explanation: {
            el: 'Ο οβελίσκος ήρθε από την Αίγυπτο με πλοίο πριν από σχεδόν 2.000 χρόνια. Το 1586 τον μετέφεραν εδώ 900 άντρες και 140 άλογα.',
            en: 'The obelisk came from Egypt by ship almost 2,000 years ago. In 1586, 900 men and 140 horses moved it here.',
          },
        },
        {
          q: { el: 'Ποιοι φυλάνε το Βατικανό από το 1506;', en: 'Who has guarded the Vatican since 1506?' },
          options: {
            el: ['Οι μονομάχοι', 'Οι Ελβετοί Φρουροί', 'Οι πειρατές', 'Οι Ρωμαίοι λεγεωνάριοι'],
            en: ['Gladiators', 'The Swiss Guard', 'Pirates', 'Roman legionaries'],
          },
          correct: 1,
          explanation: {
            el: 'Οι Ελβετοί Φρουροί, με τις ριγέ μπλε, κίτρινες και κόκκινες στολές τους, φυλάνε τον Πάπα εδώ και περισσότερα από 500 χρόνια.',
            en: 'The Swiss Guard, in their striped blue, yellow and red uniforms, have protected the Pope for more than 500 years.',
          },
        },
      ],
    },
  ],
};
