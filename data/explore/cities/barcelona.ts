/**
 * WiseBot Explorer · Βαρκελώνη / Barcelona
 * =======================================
 * Ten spots in two half-days: Gaudí's Eixample and the old town down to the port on foot
 * (spots 1–8), then the Arc de Triomf and Park Güell by metro (spots 9–10). Original text
 * only, verified facts, language for a child of 7–12 in Greek and English. Catalan names
 * stay in Catalan in both languages.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'barcelona',
  name: { el: 'Βαρκελώνη', en: 'Barcelona' },
  country: { el: 'Ισπανία', en: 'Spain' },
  countryCode: 'ES',
  emoji: '🎨',
  center: { lat: 41.39, lng: 2.172 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στη Βαρκελώνη, την πόλη δίπλα στη θάλασσα όπου ένας αρχιτέκτονας ονειρευόταν σπίτια σαν δράκους και μια εκκλησία σαν κάστρο από άμμο! Εδώ θα περπατήσουμε στη μεγάλη Ράμπλα με τα λουλούδια, θα δοκιμάσουμε τάπας, δηλαδή μικρά πιατάκια με νόστιμες λιχουδιές, και θα μάθουμε γιατί οι φίλαθλοι πανηγυρίζουν σε ένα σιντριβάνι. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές της Βαρκελώνης!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Barcelona, the city by the sea where an architect dreamed up houses like dragons and a church like a sandcastle! Here we will stroll down the great Rambla with its flower stalls, taste tapas, those little plates of tasty bites, and find out why football fans celebrate at a fountain. Solve my riddles, find the ten secret spots and become Barcelona explorers yourselves!',
  },
  route: [
    'sagrada-familia',
    'casa-batllo',
    'casa-mila',
    'la-rambla',
    'boqueria-market',
    'barcelona-cathedral',
    'placa-reial',
    'columbus-monument',
    'arc-de-triomf',
    'park-guell',
  ],
  spots: [
    // ── 1. Sagrada Família ─────────────────────────────────────────────────────
    {
      id: 'sagrada-familia',
      name: { el: 'Sagrada Família', en: 'Sagrada Família' },
      emoji: '🏗️',
      lat: 41.4042,
      lng: 2.1755,
      radiusM: 60,
      riddle: {
        el: 'Μια εκκλησία με πύργους σαν κάστρα από άμμο χτίζεται εδώ και περισσότερα από 140 χρόνια και ακόμη έχει γερανούς στην κορυφή της. Στη μία της πόρτα, πέτρινα ζώα και φυτά σκαρφαλώνουν ανάμεσα στα αγάλματα.',
        en: 'A church with towers like sandcastles has been growing for more than 140 years and still has cranes on top. On one of its doors, stone animals and plants climb between the statues.',
      },
      parentHint: {
        el: 'Είναι η Sagrada Família (η «Ιερή Οικογένεια»), η βασιλική του Gaudí. Ξεκινήστε από εδώ: ο σταθμός του μετρό Sagrada Família (γραμμές L2 και L5) βγάζει ακριβώς μπροστά της· σταθείτε στην Plaça de Gaudí, τη μικρή πλατεία με τη λιμνούλα, απέναντι από την πρόσοψη της Γέννησης.',
        en: 'It is the Sagrada Família, Gaudí\'s basilica. Start here: the Sagrada Família metro station (lines L2 and L5) comes out right in front of it; stand in Plaça de Gaudí, the little square with the pond, facing the Nativity façade.',
      },
      unlockQuestion: {
        question: { el: 'Ποιος αρχιτέκτονας σχεδίασε αυτή την εκκλησία που δεν έχει τελειώσει ακόμη;', en: 'Which architect designed this church that is still not finished?' },
        options: {
          el: ['Ο Pablo Picasso', 'Ο Antoni Gaudí', 'Ο Leonardo da Vinci', 'Ο Gustave Eiffel'],
          en: ['Pablo Picasso', 'Antoni Gaudí', 'Leonardo da Vinci', 'Gustave Eiffel'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Antoni Gaudí (Γκαουντί) ήταν ο αρχιτέκτονας που αγαπούσε τη φύση: οι κολόνες του μοιάζουν με δέντρα και οι πύργοι του με κάστρα από άμμο. Ο Picasso ήταν ζωγράφος που έζησε κι αυτός στη Βαρκελώνη, αλλά δεν έχτισε ποτέ εκκλησία!',
          en: 'Antoni Gaudí was the architect who loved nature: his columns look like trees and his towers like sandcastles. Picasso was a painter who also lived in Barcelona, but he never built a church!',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στην πρόσοψη της Γέννησης, αυτή με τα πολλά αγάλματα. Στη βάση των δύο μεγάλων κολόνων, δίπλα στις πόρτες, κρύβονται δύο ζώα. Ποια είναι;', en: 'Stand in front of the Nativity façade, the one covered in statues. At the bottom of the two big columns beside the doors, two animals are hiding. What are they?' },
        options: {
          el: ['Λιοντάρια', 'Άλογα', 'Χελώνες', 'Δράκοι'],
          en: ['Lions', 'Horses', 'Turtles', 'Dragons'],
        },
        correct: 2,
        explanation: {
          el: 'Δύο χελώνες κρατούν τις κολόνες στην πλάτη τους: μια θαλάσσια χελώνα στην πλευρά που κοιτάζει τη θάλασσα και μια χερσαία στην πλευρά του βουνού. Ο Gaudí ήθελε η εκκλησία να είναι γεμάτη ζώα και φυτά, όπως η φύση. Ψάξε και τους χαμαιλέοντες στις άκρες της πρόσοψης!',
          en: 'Two turtles carry the columns on their backs: a sea turtle on the side that faces the sea and a land tortoise on the mountain side. Gaudí wanted the church full of animals and plants, like nature itself. Look for the chameleons at the edges of the façade too!',
        },
      },
      story: {
        el: 'Το 1882 άρχισε να χτίζεται μια μεγάλη εκκλησία σε αυτό το σημείο, και έναν χρόνο αργότερα τη δουλειά ανέλαβε ένας νέος αρχιτέκτονας, ο Antoni Gaudí (Γκαουντί). Εκείνος άφησε στην άκρη τα παλιά σχέδια και ονειρεύτηκε κάτι που δεν είχε ξαναδεί κανείς: δεκαοκτώ πύργους σαν κάστρα από άμμο, κολόνες που ανοίγουν ψηλά σαν κλαδιά δέντρων και παράθυρα που γεμίζουν τον χώρο με χρωματιστό φως. Ο Gaudí δούλεψε εδώ 43 ολόκληρα χρόνια. Ήξερε ότι δεν θα δει το έργο τελειωμένο, αλλά έλεγε ότι ο πελάτης του, ο Θεός, δεν βιάζεται. Όταν πέθανε το 1926, μετά από ένα ατύχημα με τραμ, ήταν έτοιμη μόνο μία πρόσοψη κι ένας πύργος. Οι χτίστες συνεχίζουν το όνειρό του ως σήμερα, και ο ψηλότερος πύργος θα φτάσει τα 172,5 μέτρα. Τα μεγάλα όνειρα θέλουν υπομονή, και μπορείς να ξεκινήσεις κάτι που θα το τελειώσουν άλλοι!',
        en: 'In 1882 work began on a big church on this spot, and a year later a young architect took over: Antoni Gaudí. He set the old plans aside and dreamed up something nobody had ever seen: eighteen towers like sandcastles, columns that branch out at the top like trees, and windows that fill the space with coloured light. Gaudí worked here for 43 whole years. He knew he would never see it finished, but he said his client, God, was in no hurry. When he died in 1926, after an accident with a tram, only one façade and a single tower were complete. Builders have carried on his dream ever since, and the tallest tower will reach 172.5 metres. Big dreams need patience, and you can start something that others will finish!',
      },
      didYouKnow: {
        el: 'Ο Gaudí ήθελε ο ψηλότερος πύργος να φτάνει τα 172,5 μέτρα, λίγο χαμηλότερα από τον λόφο Montjuïc, γιατί πίστευε ότι ένα ανθρώπινο έργο δεν πρέπει να ξεπερνά αυτό που έφτιαξε ο Θεός. Ο ίδιος ο Gaudí είναι θαμμένος στην κρύπτη, κάτω από τη βασιλική, και το κτίριο χτίζεται ακόμη μόνο με δωρεές και εισιτήρια επισκεπτών.',
        en: 'Gaudí wanted the tallest tower to reach 172.5 metres, just below the height of Montjuïc hill, because he believed a human work should not rise above what God had made. Gaudí himself is buried in the crypt beneath the basilica, and the building is still paid for only by donations and visitors\' tickets.',
      },
      quiz: [
        {
          q: { el: 'Πότε άρχισε να χτίζεται η εκκλησία;', en: 'When did building start?' },
          options: {
            el: ['Το 1882', 'Το 1982', 'Το 1492', 'Το 2010'],
            en: ['In 1882', 'In 1982', 'In 1492', 'In 2010'],
          },
          correct: 0,
          explanation: {
            el: 'Το χτίσιμο άρχισε το 1882, πριν από περισσότερα από 140 χρόνια, και συνεχίζεται ακόμη.',
            en: 'Building started in 1882, more than 140 years ago, and it is still going on.',
          },
        },
        {
          q: { el: 'Με τι μοιάζουν οι κολόνες μέσα στην εκκλησία;', en: 'What do the columns inside the church look like?' },
          options: {
            el: ['Με σπαθιά', 'Με κεριά', 'Με πύργους κάστρου', 'Με δέντρα που ανοίγουν κλαδιά'],
            en: ['Swords', 'Candles', 'Castle towers', 'Trees with branches'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Gaudí αντέγραψε τη φύση: οι κολόνες ανοίγουν ψηλά σαν κλαδιά, και η οροφή μοιάζει με δάσος.',
            en: 'Gaudí copied nature: the columns branch out at the top and the ceiling looks like a forest.',
          },
        },
        {
          q: { el: 'Πόσα χρόνια δούλεψε ο Gaudí σε αυτή την εκκλησία;', en: 'How many years did Gaudí work on this church?' },
          options: {
            el: ['Δύο χρόνια', '43 χρόνια', 'Έναν μήνα', '100 χρόνια'],
            en: ['Two years', '43 years', 'One month', '100 years'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Gaudí δούλεψε εδώ 43 χρόνια, μέχρι το τέλος της ζωής του, το 1926.',
            en: 'Gaudí worked here for 43 years, until the end of his life in 1926.',
          },
        },
      ],
    },

    // ── 2. Casa Batlló ─────────────────────────────────────────────────────────
    {
      id: 'casa-batllo',
      name: { el: 'Casa Batlló', en: 'Casa Batlló' },
      emoji: '🐉',
      lat: 41.3916,
      lng: 2.1649,
      radiusM: 60,
      riddle: {
        el: 'Ένα σπίτι που μοιάζει φτιαγμένο από κόκαλα, με μπαλκόνια σαν μάσκες καρναβαλιού και μια στέγη που κυματίζει σαν τη ράχη ενός δράκου που κοιμάται στον πιο κομψό δρόμο της πόλης.',
        en: 'A house that looks as if it were made of bones, with balconies like carnival masks and a roof that curves like the back of a dragon sleeping on the smartest street in town.',
      },
      parentHint: {
        el: 'Είναι η Casa Batlló (το «Σπίτι Μπατγιό») του Gaudí, στη λεωφόρο Passeig de Gràcia 43. Από τη Sagrada Família πάρτε το μετρό L2 από τον σταθμό Sagrada Família ως τον σταθμό Passeig de Gràcia (4 στάσεις) και θα το δείτε μόλις βγείτε· σταθείτε στο απέναντι πεζοδρόμιο για να δείτε όλη τη στέγη.',
        en: 'It is Gaudí\'s Casa Batlló, at Passeig de Gràcia 43. From the Sagrada Família take metro L2 from the Sagrada Família station to Passeig de Gràcia (4 stops) and you will see it as you come out; stand on the opposite pavement to see the whole roof.',
      },
      unlockQuestion: {
        question: { el: 'Ένας δράκος κοιμάται στη στέγη. Ποιος ιππότης, σύμφωνα με τον θρύλο, νίκησε έναν δράκο και είναι ο προστάτης άγιος της Καταλονίας;', en: 'A dragon sleeps on the roof. According to the legend, which knight defeated a dragon and is the patron saint of Catalonia?' },
        options: {
          el: ['Ο Άγιος Νικόλαος', 'Ο Άγιος Γεώργιος', 'Ο Άγιος Πατρίκιος', 'Ο Άγιος Ανδρέας'],
          en: ['Saint Nicholas', 'Saint George', 'Saint Patrick', 'Saint Andrew'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Άγιος Γεώργιος, Sant Jordi στα καταλανικά, είναι ο προστάτης της Καταλονίας. Στη γιορτή του, στις 23 Απριλίου, οι άνθρωποι χαρίζουν ο ένας στον άλλον βιβλία και τριαντάφυλλα. Ο πύργος με τον σταυρό στη στέγη είναι το κοντάρι του, καρφωμένο στη ράχη του δράκου!',
          en: 'Saint George, Sant Jordi in Catalan, is the patron saint of Catalonia. On his feast day, 23 April, people give each other books and roses. The tower with the cross on the roof is his lance, plunged into the dragon\'s back!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά, στην αριστερή πλευρά της στέγης. Ο μικρός πύργος τελειώνει με έναν σταυρό. Πόσα μπράτσα έχει ο σταυρός;', en: 'Look up at the left side of the roof. The little tower ends in a cross. How many arms does the cross have?' },
        options: {
          el: ['Δύο', 'Τρία', 'Έξι', 'Τέσσερα'],
          en: ['Two', 'Three', 'Six', 'Four'],
        },
        correct: 3,
        explanation: {
          el: 'Ο σταυρός έχει τέσσερα μπράτσα, ένα για κάθε σημείο του ορίζοντα: βορρά, νότο, ανατολή και δύση. Ο Gaudí έβαζε τέτοιους σταυρούς σε πολλά κτίριά του. Πρόσεξε και τα «λέπια» της στέγης: είναι κεραμικά πλακάκια που αλλάζουν από πράσινο σε μπλε και πορτοκαλί, σαν το δέρμα του δράκου.',
          en: 'The cross has four arms, one for each point of the compass: north, south, east and west. Gaudí put crosses like this on many of his buildings. Notice the “scales” of the roof too: they are ceramic tiles that shift from green to blue and orange, like a dragon\'s skin.',
        },
      },
      story: {
        el: 'Το 1904 ένας πλούσιος έμπορος υφασμάτων, ο Josep Batlló (Μπατγιό), ζήτησε από τον Gaudí να κάνει το συνηθισμένο σπίτι του το πιο εντυπωσιακό στη λεωφόρο. Ο Gaudí δεν το γκρέμισε· το μεταμόρφωσε. Έντυσε την πρόσοψη με κομμάτια σπασμένων πλακιδίων και γυαλιού που λαμπυρίζουν στον ήλιο, μια τεχνική που λέγεται trencadís (τρενκαντίς). Έβαλε κολόνες σαν κόκαλα γύρω από τα παράθυρα, μπαλκόνια σαν μάσκες και μια στέγη σαν ράχη δράκου, με τον πύργο-κοντάρι του Αγίου Γεωργίου καρφωμένο πάνω της. Μέσα δεν υπάρχει σχεδόν καμία ίσια γραμμή. Οι γείτονές του είχαν ήδη προσλάβει διάσημους αρχιτέκτονες, και ο καθένας ήθελε το πιο εντυπωσιακό σπίτι· γι\' αυτό το τετράγωνο ονομάστηκε «Τετράγωνο της Διχόνοιας». Το σπίτι τελείωσε το 1906. Μην φοβάσαι να είσαι διαφορετικός: αυτό που ξαφνιάζει σήμερα, αύριο μπορεί να θαυμάζεται!',
        en: 'In 1904 a rich cloth merchant, Josep Batlló, asked Gaudí to turn his ordinary house into the most eye-catching one on the avenue. Gaudí did not knock it down; he transformed it. He dressed the front in pieces of broken tiles and glass that shimmer in the sun, a technique called trencadís. He added columns like bones around the windows, balconies like masks and a roof like a dragon\'s back, with Saint George\'s lance-tower plunged into it. Inside, there is hardly a straight line anywhere. His neighbours had already hired famous architects, and each owner wanted the most eye-catching house, which is why the block is nicknamed the “Block of Discord”. The house was finished in 1906. Never be afraid to be different: what surprises people today may be admired tomorrow!',
      },
      didYouKnow: {
        el: 'Ο Gaudí σχεδίασε το εσωτερικό φωταγωγό του σπιτιού με πλακάκια που είναι σκούρα μπλε ψηλά και σχεδόν άσπρα χαμηλά, και με παράθυρα που μικραίνουν όσο ανεβαίνεις, ώστε κάθε όροφος να παίρνει την ίδια ποσότητα φωτός. Το κτίριο είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO από το 2005.',
        en: 'Gaudí designed the house\'s inner light well with tiles that are dark blue at the top and almost white at the bottom, and with windows that get smaller the higher you go, so that every floor receives the same amount of light. The building has been a UNESCO World Heritage Site since 2005.',
      },
      quiz: [
        {
          q: { el: 'Τι είναι το trencadís;', en: 'What is trencadís?' },
          options: {
            el: ['Ένα γλυκό της Καταλονίας', 'Ένας χορός', 'Μια τεχνική με κομμάτια σπασμένων πλακιδίων', 'Ένα είδος δράκου'],
            en: ['A Catalan sweet', 'A dance', 'A technique using pieces of broken tiles', 'A kind of dragon'],
          },
          correct: 2,
          explanation: {
            el: 'Το trencadís είναι η τεχνική του Gaudí: σπασμένα πλακάκια και γυαλιά κολλημένα σαν ψηφιδωτό, που λαμπυρίζουν στον ήλιο.',
            en: 'Trencadís is Gaudí\'s technique: broken tiles and glass glued together like a mosaic, shimmering in the sun.',
          },
        },
        {
          q: { el: 'Ποιος ζήτησε από τον Gaudí να μεταμορφώσει το σπίτι;', en: 'Who asked Gaudí to transform the house?' },
          options: {
            el: ['Ο Josep Batlló, ένας έμπορος υφασμάτων', 'Ο βασιλιάς της Ισπανίας', 'Ένας ποδοσφαιριστής', 'Ο Άγιος Γεώργιος'],
            en: ['Josep Batlló, a cloth merchant', 'The King of Spain', 'A footballer', 'Saint George'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Josep Batlló, πλούσιος έμπορος υφασμάτων, ήθελε το πιο εντυπωσιακό σπίτι της λεωφόρου, και το πέτυχε!',
            en: 'Josep Batlló, a rich cloth merchant, wanted the most eye-catching house on the avenue, and he got it!',
          },
        },
        {
          q: { el: 'Γιατί το τετράγωνο λέγεται «Τετράγωνο της Διχόνοιας»;', en: 'Why is the block called the “Block of Discord”?' },
          options: {
            el: ['Γιατί οι κάτοικοι μαλώνουν κάθε μέρα', 'Γιατί έγινε μια μεγάλη μάχη εκεί', 'Γιατί ο δράκος γκρέμισε τα διπλανά σπίτια', 'Γιατί οι γείτονες προσέλαβαν διάσημους αρχιτέκτονες για να ξεπεράσουν ο ένας τον άλλον'],
            en: ['Because the residents argue every day', 'Because a big battle happened there', 'Because the dragon knocked down the houses next door', 'Because the neighbours hired famous architects to outdo each other'],
          },
          correct: 3,
          explanation: {
            el: 'Τρεις γείτονες προσέλαβαν τρεις διάσημους αρχιτέκτονες, και τα σπίτια τους «διαφωνούν» μεταξύ τους στο στιλ. Γι\' αυτό το τετράγωνο πήρε αυτό το αστείο όνομα.',
            en: 'Three neighbours hired three famous architects, and their houses “disagree” with each other in style. That is how the block got its funny name.',
          },
        },
      ],
    },

    // ── 3. Casa Milà (La Pedrera) ──────────────────────────────────────────────
    {
      id: 'casa-mila',
      name: { el: 'Casa Milà (La Pedrera)', en: 'Casa Milà (La Pedrera)' },
      emoji: '🌊',
      lat: 41.3952,
      lng: 2.1618,
      radiusM: 60,
      riddle: {
        el: 'Στη γωνία μιας λεωφόρου, ένα κτίριο μοιάζει με βράχο που τον έγλειψαν τα κύματα: η πέτρα του κυματίζει, τα μπαλκόνια του είναι σιδερένια φύκια και στη στέγη του φρουροί με κράνη κοιτάζουν τον ουρανό.',
        en: 'On a corner of a wide avenue, a building looks like a cliff licked by the waves: its stone ripples, its balconies are iron seaweed, and on its roof helmeted guards stare at the sky.',
      },
      parentHint: {
        el: 'Είναι η Casa Milà (το «Σπίτι Μιλά»), γνωστή ως La Pedrera (Λα Πεδρέρα, «το Λατομείο»), στη γωνία Passeig de Gràcia 92 και Carrer de Provença. Από την Casa Batlló περπατήστε 6 λεπτά ανηφορικά στην ίδια λεωφόρο, στην ίδια πλευρά του δρόμου.',
        en: 'It is Casa Milà, better known as La Pedrera (“the Quarry”), on the corner of Passeig de Gràcia 92 and Carrer de Provença. From Casa Batlló walk 6 minutes up the same avenue, on the same side of the street.',
      },
      unlockQuestion: {
        question: { el: 'Οι κάτοικοι της πόλης έδωσαν σε αυτό το κτίριο το παρατσούκλι «το Λατομείο». Τι είναι το λατομείο;', en: 'The people of the city nicknamed this building “the Quarry”. What is a quarry?' },
        options: {
          el: ['Ένας φούρνος για ψωμί', 'Ένα είδος καραβιού', 'Ένα μέρος όπου κόβουν πέτρα από τη γη', 'Ένα γλυκό με κρέμα'],
          en: ['An oven for bread', 'A kind of ship', 'A place where stone is cut out of the ground', 'A cream cake'],
        },
        correct: 2,
        explanation: {
          el: 'Το λατομείο είναι ο τόπος όπου οι άνθρωποι κόβουν μεγάλες πέτρες από τον βράχο για να χτίσουν. Οι Βαρκελωνέζοι είδαν την τραχιά, κυματιστή πρόσοψη και κορόιδεψαν: «Μοιάζει με λατομείο!». Το όνομα έμεινε, και σήμερα το λένε με καμάρι.',
          en: 'A quarry is a place where people cut big stones out of the rock for building. The people of Barcelona saw the rough, rippling front and joked: “It looks like a quarry!” The name stuck, and today they say it with pride.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τα σιδερένια κάγκελα των μπαλκονιών. Με τι μοιάζουν;', en: 'Look at the iron railings of the balconies. What do they look like?' },
        options: {
          el: ['Με ίσια κάγκελα φυλακής', 'Με μπερδεμένα φύκια και φύλλα', 'Με μικρά ζωάκια', 'Με γράμματα της αλφαβήτου'],
          en: ['Straight prison bars', 'Tangled seaweed and leaves', 'Little animals', 'Letters of the alphabet'],
        },
        correct: 1,
        explanation: {
          el: 'Τα κάγκελα μοιάζουν με φύκια που στριφογυρίζουν στο νερό. Τα σφυρηλάτησε ο βοηθός του Gaudí, ο Josep Maria Jujol (Ζουζόλ), και κανένα δεν είναι ίδιο με το άλλο. Τώρα ψάξε μια ίσια γραμμή στην πρόσοψη: δύσκολο, ε;',
          en: 'The railings look like seaweed swirling in the water. Gaudí\'s helper Josep Maria Jujol hammered them into shape, and no two are the same. Now try to find a straight line on the front: not easy, is it?',
        },
      },
      story: {
        el: 'Ο Pere Milà (Μιλά) και η γυναίκα του, η Roser, ήθελαν ένα σπίτι που θα το κοιτούσαν όλοι. Ο Gaudí τούς έχτισε, από το 1906 ως το 1912, ένα κτίριο από πέτρα που κυματίζει σαν τη θάλασσα ή σαν βράχος στην ακτή, χωρίς σχεδόν καμία ίσια γραμμή. Το μυστικό του: οι τοίχοι δεν κρατούν το κτίριο, το κρατούν σιδερένιες κολόνες, γι\' αυτό οι ένοικοι μπορούσαν να μετακινούν τους τοίχους όπως ήθελαν! Στη στέγη, οι καμινάδες μοιάζουν με στρατιώτες με κράνη, και οι ντόπιοι τις λένε «φοβέρες για μάγισσες». Οι Βαρκελωνέζοι στην αρχή γέλασαν και το είπαν La Pedrera, «το Λατομείο». Ήταν το τελευταίο μεγάλο σπίτι του Gaudí: μετά αφιερώθηκε μόνο στη Sagrada Família. Αυτό που κοροϊδεύουν σήμερα, αύριο μπορεί να γίνει διάσημο!',
        en: 'Pere Milà and his wife Roser wanted a home that everyone would stare at. Between 1906 and 1912 Gaudí built them a building of stone that ripples like the sea or a cliff on the coast, with hardly a straight line anywhere. Its secret: the walls do not hold the building up, iron columns do, so the tenants could move the walls around as they liked! On the roof, the chimneys look like soldiers in helmets, and locals call them “witch-scarers”. At first the people of Barcelona laughed and called it La Pedrera, “the Quarry”. It was Gaudí\'s last big house: afterwards he worked only on the Sagrada Família. What people laugh at today may be famous tomorrow!',
      },
      didYouKnow: {
        el: 'Η κυματιστή πέτρινη πρόσοψη κρέμεται από τον σιδερένιο σκελετό σαν κουρτίνα και δεν στηρίζει τίποτα. Το κτίριο είχε ένα από τα πρώτα υπόγεια γκαράζ της πόλης, την εποχή που τα αυτοκίνητα ήταν ακόμη σπάνια, και η σοφίτα του στηρίζεται σε περίπου 270 τούβλινες καμάρες που μοιάζουν με σκελετό φάλαινας.',
        en: 'The rippling stone front hangs from the iron skeleton like a curtain and supports nothing. The building had one of the first underground garages in the city, at a time when cars were still rare, and its attic rests on about 270 brick arches that look like the ribs of a whale.',
      },
      quiz: [
        {
          q: { el: 'Τι κρατάει όρθιο το κτίριο;', en: 'What holds the building up?' },
          options: {
            el: ['Οι χοντροί πέτρινοι τοίχοι', 'Ξύλινα δοκάρια', 'Σχοινιά', 'Σιδερένιες κολόνες'],
            en: ['Thick stone walls', 'Wooden beams', 'Ropes', 'Iron columns'],
          },
          correct: 3,
          explanation: {
            el: 'Σιδερένιες κολόνες κρατούν το κτίριο, όχι οι τοίχοι. Έτσι οι ένοικοι μπορούσαν να αλλάζουν τους τοίχους των δωματίων τους.',
            en: 'Iron columns hold the building up, not the walls. That is why the tenants could change the walls of their rooms.',
          },
        },
        {
          q: { el: 'Τι σημαίνει La Pedrera;', en: 'What does La Pedrera mean?' },
          options: {
            el: ['Το Λατομείο', 'Ο Δράκος', 'Το Κύμα', 'Η Θάλασσα'],
            en: ['The Quarry', 'The Dragon', 'The Wave', 'The Sea'],
          },
          correct: 0,
          explanation: {
            el: 'La Pedrera σημαίνει «το Λατομείο». Ήταν ένα πείραγμα των Βαρκελωνέζων για την τραχιά πέτρα, που έγινε το επίσημο παρατσούκλι.',
            en: 'La Pedrera means “the Quarry”. It began as a joke about the rough stone and became the official nickname.',
          },
        },
        {
          q: { el: 'Με τι μοιάζουν οι καμινάδες στη στέγη;', en: 'What do the chimneys on the roof look like?' },
          options: {
            el: ['Με λουλούδια', 'Με καράβια', 'Με στρατιώτες με κράνη', 'Με πουλιά'],
            en: ['Flowers', 'Ships', 'Soldiers in helmets', 'Birds'],
          },
          correct: 2,
          explanation: {
            el: 'Οι καμινάδες μοιάζουν με φρουρούς με κράνη που φυλάνε τη στέγη. Οι ντόπιοι τις λένε «φοβέρες για μάγισσες».',
            en: 'The chimneys look like helmeted guards keeping watch over the roof. Locals call them “witch-scarers”.',
          },
        },
      ],
    },

    // ── 4. La Rambla (Font de Canaletes) ───────────────────────────────────────
    {
      id: 'la-rambla',
      name: { el: 'La Rambla', en: 'La Rambla' },
      emoji: '💐',
      lat: 41.3861,
      lng: 2.1701,
      radiusM: 60,
      riddle: {
        el: 'Ένας μακρύς περίπατος με δέντρα, όπου κάποτε κυλούσε ένα ρυάκι με άμμο, κατεβαίνει από μια μεγάλη πλατεία ως τη θάλασσα. Στην αρχή του, ένα σιντριβάνι υπόσχεται σε όποιον πιει νερό ότι θα ξαναγυρίσει στην πόλη.',
        en: 'A long tree-lined walk, where a sandy stream once ran, slopes down from a big square all the way to the sea. At its top, a fountain promises that whoever drinks from it will come back to the city.',
      },
      parentHint: {
        el: 'Είναι η La Rambla (η Ράμπλα), στο σημείο του σιντριβανιού Font de Canaletes, λίγα μέτρα κάτω από την Plaça de Catalunya. Από την Casa Milà πάρτε το μετρό L3 από τον σταθμό Diagonal ως τον σταθμό Catalunya (2 στάσεις) ή περπατήστε 15 λεπτά κατηφορικά στην Passeig de Gràcia· το σιντριβάνι είναι στη δεξιά πλευρά, στην αρχή της Ράμπλα, όπως κατεβαίνετε.',
        en: 'It is La Rambla, at the Font de Canaletes fountain, a few metres below Plaça de Catalunya. From Casa Milà take metro L3 from Diagonal station to Catalunya (2 stops) or walk 15 minutes down Passeig de Gràcia; the fountain is on the right-hand side at the very top of La Rambla as you walk down.',
      },
      unlockQuestion: {
        question: { el: 'Το όνομα «Rambla» έρχεται από μια αραβική λέξη. Τι υπήρχε εδώ πριν από τον περίπατο;', en: 'The name “Rambla” comes from an Arabic word. What was here before the promenade?' },
        options: {
          el: ['Ένα ρυάκι με άμμο που έτρεχε μόνο όταν έβρεχε', 'Ένα κάστρο', 'Ένα γήπεδο ποδοσφαίρου', 'Μια παραλία'],
          en: ['A sandy stream that ran only when it rained', 'A castle', 'A football pitch', 'A beach'],
        },
        correct: 0,
        explanation: {
          el: 'Ramla στα αραβικά σημαίνει «αμμουδερή κοίτη». Εδώ, έξω από τα παλιά τείχη, κυλούσε ένα ρυάκι που γέμιζε νερό με τις βροχές. Όταν η πόλη μεγάλωσε, το σκέπασαν, φύτεψαν δέντρα και έγινε ο πιο διάσημος περίπατος της Ισπανίας.',
          en: 'Ramla is Arabic for “sandy riverbed”. A stream ran here, outside the old city walls, filling with water whenever it rained. When the city grew, it was covered over, trees were planted and it became the most famous promenade in Spain.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τα ψηλά δέντρα που στέκονται σε δύο σειρές κατά μήκος του περιπάτου. Πώς είναι ο κορμός τους;', en: 'Look at the tall trees standing in two rows along the walk. What is their trunk like?' },
        options: {
          el: ['Λείος και άσπρος σαν σημύδα', 'Καλυμμένος με μακριά αγκάθια', 'Με φλούδα που ξεφλουδίζει σε μπαλώματα, σαν παζλ', 'Τριχωτός σαν φοίνικας'],
          en: ['Smooth and white like a birch', 'Covered in long thorns', 'Bark peeling off in patches, like a jigsaw', 'Hairy like a palm tree'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι πλάτανοι. Η φλούδα τους πέφτει σε κομμάτια και αφήνει ανοιχτόχρωμα μπαλώματα, σαν στολή καμουφλάζ. Έτσι το δέντρο καθαρίζεται από τη σκόνη της πόλης, γι\' αυτό οι πλάτανοι είναι ιδανικοί για λεωφόρους.',
          en: 'They are plane trees. Their bark falls off in pieces and leaves pale patches, like a camouflage suit. This is how the tree cleans itself of city dust, which makes plane trees perfect for avenues.',
        },
      },
      story: {
        el: 'Πριν από πολλούς αιώνες, εδώ έξω από τα τείχη της πόλης κυλούσε ένα ρυάκι που είχε νερό μόνο όταν έβρεχε· οι Άραβες το έλεγαν ramla, «αμμουδερή κοίτη». Πριν από περίπου 250 χρόνια η πόλη το σκέπασε, φύτεψε δέντρα και το έκανε περίπατο. Στην πραγματικότητα είναι πέντε περίπατοι στη σειρά, γι\' αυτό οι ντόπιοι λένε «Les Rambles», στον πληθυντικό: 1,2 χιλιόμετρα από την Plaça de Catalunya ως το λιμάνι, με ανθοπωλεία, περίπτερα, ζωντανά αγάλματα και μια μεγάλη όπερα, το Liceu. Στην αρχή του στέκεται το σιντριβάνι Canaletes. Ο θρύλος λέει ότι όποιος πιει το νερό του θα ξαναγυρίσει στη Βαρκελώνη. Και όταν η ποδοσφαιρική ομάδα της πόλης κερδίζει, χιλιάδες φίλαθλοι μαζεύονται ακριβώς εδώ για να πανηγυρίσουν. Περπάτα αργά: όποιος βιάζεται, δεν βλέπει τίποτα!',
        en: 'Many centuries ago, a stream ran here outside the city walls, carrying water only when it rained; the Arabs called it ramla, “sandy riverbed”. About 250 years ago the city covered it, planted trees and turned it into a promenade. It is really five walks in a row, which is why locals say “Les Rambles”, in the plural: 1.2 kilometres from Plaça de Catalunya to the harbour, with flower stalls, kiosks, living statues and a grand opera house, the Liceu. At the top stands the Canaletes fountain. Legend says that whoever drinks its water will come back to Barcelona. And when the city\'s football team wins, thousands of fans gather right here to celebrate. Walk slowly: those who hurry see nothing!',
      },
      didYouKnow: {
        el: 'Η παράδοση των φιλάθλων ξεκίνησε τη δεκαετία του 1930: μια αθλητική εφημερίδα είχε τα γραφεία της δίπλα στο σιντριβάνι και έγραφε τα αποτελέσματα των αγώνων σε έναν πίνακα, κι έτσι ο κόσμος μαζευόταν εδώ για να τα μάθει. Λίγο πιο κάτω, στο Pla de l\'Os, θα πατήσετε πάνω σε ένα ψηφιδωτό του ζωγράφου Joan Miró (1976), δώρο του στην πόλη όπου γεννήθηκε.',
        en: 'The football tradition began in the 1930s: a sports newspaper had its offices next to the fountain and chalked up match results on a board, so people gathered here to find out the scores. A little further down, at Pla de l\'Os, you will walk over a pavement mosaic by the painter Joan Miró (1976), his gift to the city where he was born.',
      },
      quiz: [
        {
          q: { el: 'Τι σημαίνει η λέξη ramla;', en: 'What does the word ramla mean?' },
          options: {
            el: ['Λουλούδι', 'Αμμουδερή κοίτη', 'Μεγάλος δρόμος', 'Σιντριβάνι'],
            en: ['Flower', 'Sandy riverbed', 'Big road', 'Fountain'],
          },
          correct: 1,
          explanation: {
            el: 'Ramla είναι η αραβική λέξη για την αμμουδερή κοίτη ενός ρυακιού. Εδώ κυλούσε νερό μόνο όταν έβρεχε.',
            en: 'Ramla is the Arabic word for the sandy bed of a stream. Water ran here only when it rained.',
          },
        },
        {
          q: { el: 'Τι λέει ο θρύλος για όποιον πιει νερό από το σιντριβάνι Canaletes;', en: 'What does the legend say about whoever drinks from the Canaletes fountain?' },
          options: {
            el: ['Θα γίνει ποδοσφαιριστής', 'Θα μιλάει καταλανικά', 'Θα βρει έναν θησαυρό', 'Θα ξαναγυρίσει στη Βαρκελώνη'],
            en: ['They will become a footballer', 'They will speak Catalan', 'They will find a treasure', 'They will come back to Barcelona'],
          },
          correct: 3,
          explanation: {
            el: 'Όποιος πιει από το σιντριβάνι θα ξαναγυρίσει στη Βαρκελώνη, λέει ο θρύλος. Μια γουλιά δεν βλάπτει!',
            en: 'Whoever drinks from the fountain will return to Barcelona, says the legend. One sip does no harm!',
          },
        },
        {
          q: { el: 'Πού καταλήγει ο περίπατος;', en: 'Where does the promenade end?' },
          options: {
            el: ['Στο λιμάνι, δίπλα στη θάλασσα', 'Σε ένα βουνό', 'Σε ένα κάστρο', 'Σε ένα γήπεδο'],
            en: ['At the harbour, by the sea', 'On a mountain', 'At a castle', 'At a stadium'],
          },
          correct: 0,
          explanation: {
            el: 'Η Ράμπλα κατηφορίζει 1,2 χιλιόμετρα και τελειώνει στο λιμάνι, όπου στέκεται ο Κολόμβος πάνω στην κολόνα του.',
            en: 'La Rambla slopes down for 1.2 kilometres and ends at the harbour, where Columbus stands on his column.',
          },
        },
      ],
    },

    // ── 5. La Boqueria ─────────────────────────────────────────────────────────
    {
      id: 'boqueria-market',
      name: { el: 'Mercat de la Boqueria', en: 'Mercat de la Boqueria' },
      emoji: '🍓',
      lat: 41.3818,
      lng: 2.1718,
      radiusM: 60,
      riddle: {
        el: 'Κάτω από μια σιδερένια στέγη, βουνά από φρούτα, χυμοί σε όλα τα χρώματα του ουράνιου τόξου, ψάρια πάνω σε πάγο και πόδια από χοιρομέρι κρεμασμένα από το ταβάνι. Εδώ πουλάνε φαγητό εδώ και περισσότερα από 800 χρόνια.',
        en: 'Under an iron roof: mountains of fruit, juices in every colour of the rainbow, fish on ice and legs of ham hanging from the ceiling. Food has been sold here for more than 800 years.',
      },
      parentHint: {
        el: 'Είναι η αγορά La Boqueria (Μποκερία), στη La Rambla 91. Από το σιντριβάνι Canaletes κατηφορίστε τη Ράμπλα 6 λεπτά· η μεγάλη είσοδος με την πολύχρωμη γυάλινη επιγραφή είναι στη δεξιά πλευρά. Κλειστή τις Κυριακές.',
        en: 'It is La Boqueria market, at La Rambla 91. From the Canaletes fountain walk 6 minutes down La Rambla; the big entrance with the colourful glass sign is on the right-hand side. Closed on Sundays.',
      },
      unlockQuestion: {
        question: { el: 'Το jamón, που κρέμεται από το ταβάνι της αγοράς, είναι ένα διάσημο ισπανικό φαγητό. Τι είναι;', en: 'Jamón, which hangs from the ceiling of the market, is a famous Spanish food. What is it?' },
        options: {
          el: ['Ένα γλυκό με σοκολάτα', 'Ένας χυμός φρούτων', 'Ένα τυρί από κατσικίσιο γάλα', 'Χοιρομέρι που το αλατίζουν και το αφήνουν να στεγνώσει για μήνες'],
          en: ['A chocolate cake', 'A fruit juice', 'A cheese made of goat\'s milk', 'A ham that is salted and left to dry for months'],
        },
        correct: 3,
        explanation: {
          el: 'Το jamón (χαμόν) είναι χοιρομέρι που αλατίζεται και κρεμιέται να στεγνώσει για πολλούς μήνες, μερικές φορές και χρόνια. Οι πωλητές το κόβουν σε πολύ λεπτές φέτες με ένα μακρύ μαχαίρι.',
          en: 'Jamón is a leg of pork that is salted and hung up to dry for many months, sometimes years. The sellers slice it paper-thin with a long knife.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά, την πολύχρωμη επιγραφή με το όνομα της αγοράς πάνω από την είσοδο. Από τι είναι φτιαγμένη;', en: 'Look up at the colourful sign with the market\'s name above the entrance. What is it made of?' },
        options: {
          el: ['Από βαμμένο ξύλο', 'Από κομμάτια χρωματιστού γυαλιού', 'Από μάρμαρο', 'Από λουλούδια'],
          en: ['Painted wood', 'Pieces of coloured glass', 'Marble', 'Flowers'],
        },
        correct: 1,
        explanation: {
          el: 'Η επιγραφή είναι από χρωματιστό γυαλί, σαν τα βιτρό των εκκλησιών, στερεωμένο σε σιδερένιο σκελετό. Μέτρησε τα χρώματά της, και μετά μπες μέσα και μέτρησε τα χρώματα των χυμών: ποιο νούμερο είναι μεγαλύτερο;',
          en: 'The sign is made of coloured glass, like the stained-glass windows of a church, held in an iron frame. Count its colours, then go inside and count the colours of the juices: which number is bigger?',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 800 χρόνια, το 1217, χωρικοί έστηναν τραπέζια έξω από την πύλη της πόλης, σε αυτό ακριβώς το σημείο, και πουλούσαν κρέας. Μέσα στα τείχη δεν υπήρχε χώρος, κι έτσι η αγορά έμεινε έξω και μεγάλωσε. Πολύ αργότερα, όταν ένα παλιό μοναστήρι που στεκόταν εδώ γκρεμίστηκε, η πόλη έχτισε στη θέση του μια κανονική αγορά, το 1840, και το 1914 τη σκέπασε με μια μεγάλη σιδερένια στέγη. Σήμερα περίπου 300 πάγκοι πουλάνε φρούτα, χυμούς σε όλα τα χρώματα, ψάρια, jamón, γλυκά και ξηρούς καρπούς. Οι μάγειρες των καλύτερων εστιατορίων ψωνίζουν εδώ νωρίς το πρωί. Δοκίμασε ένα φρούτο που δεν έχεις ξαναφάει: οι εξερευνητές δοκιμάζουν τα πάντα!',
        en: 'More than 800 years ago, in 1217, farmers set up tables outside the city gate on this very spot and sold meat. There was no room inside the walls, so the market stayed outside and kept growing. Much later, when an old convent that stood here was pulled down, the city built a proper market in its place, in 1840, and in 1914 covered it with a big iron roof. Today about 300 stalls sell fruit, juices in every colour, fish, jamón, sweets and nuts. The chefs of the best restaurants shop here early in the morning. Try a fruit you have never eaten before: explorers taste everything!',
      },
      didYouKnow: {
        el: 'Το επίσημο όνομα της αγοράς είναι Mercat de Sant Josep, από το μοναστήρι του Αγίου Ιωσήφ που στεκόταν εδώ μέχρι το 1835. Ο θεμέλιος λίθος της αγοράς μπήκε στις 19 Μαρτίου 1840, ανήμερα της γιορτής του αγίου.',
        en: 'The market\'s official name is Mercat de Sant Josep, after the convent of Saint Joseph that stood here until 1835. Its first stone was laid on 19 March 1840, the saint\'s feast day.',
      },
      quiz: [
        {
          q: { el: 'Πότε πρωτοπούλησαν φαγητό σε αυτό το σημείο;', en: 'When was food first sold on this spot?' },
          options: {
            el: ['Το 1217, πριν από περισσότερα από 800 χρόνια', 'Το 1914', 'Πέρυσι', 'Το 1840'],
            en: ['In 1217, more than 800 years ago', 'In 1914', 'Last year', 'In 1840'],
          },
          correct: 0,
          explanation: {
            el: 'Από το 1217 χωρικοί πουλούσαν κρέας έξω από την πύλη της πόλης. Η αγορά είναι πιο παλιά από τους περισσότερους δρόμους γύρω της!',
            en: 'From 1217, farmers sold meat outside the city gate. The market is older than most of the streets around it!',
          },
        },
        {
          q: { el: 'Τι σκέπασε την αγορά το 1914;', en: 'What covered the market in 1914?' },
          options: {
            el: ['Μια τέντα', 'Μια ξύλινη στέγη', 'Μια μεγάλη σιδερένια στέγη', 'Ένας γυάλινος θόλος'],
            en: ['A tent', 'A wooden roof', 'A big iron roof', 'A glass dome'],
          },
          correct: 2,
          explanation: {
            el: 'Το 1914 η αγορά απέκτησε τη μεγάλη σιδερένια στέγη της, που προστατεύει πάγκους και αγοραστές από τον ήλιο και τη βροχή.',
            en: 'In 1914 the market got its big iron roof, which shelters stalls and shoppers from sun and rain.',
          },
        },
        {
          q: { el: 'Πόσοι πάγκοι υπάρχουν περίπου στην αγορά σήμερα;', en: 'About how many stalls are there in the market today?' },
          options: {
            el: ['Δέκα', 'Τριάντα', 'Τρεις χιλιάδες', 'Περίπου τριακόσιοι'],
            en: ['Ten', 'Thirty', 'Three thousand', 'About three hundred'],
          },
          correct: 3,
          explanation: {
            el: 'Περίπου 300 πάγκοι, ο ένας δίπλα στον άλλον. Αν σταθείς ένα λεπτό σε καθέναν, θα χρειαστείς πέντε ώρες!',
            en: 'About 300 stalls, side by side. If you spent one minute at each, you would need five hours!',
          },
        },
      ],
    },

    // ── 6. Barcelona Cathedral ─────────────────────────────────────────────────
    {
      id: 'barcelona-cathedral',
      name: { el: 'Catedral de Barcelona', en: 'Catedral de Barcelona' },
      emoji: '⛪',
      lat: 41.3839,
      lng: 2.1760,
      radiusM: 70,
      riddle: {
        el: 'Μια εκκλησία με μυτερούς πύργους σαν βελόνες, όπου άσπρες χήνες φυλάνε έναν κήπο με φοίνικες. Τις Κυριακές, μπροστά της, οι άνθρωποι πιάνονται χέρι χέρι και χορεύουν σε κύκλο.',
        en: 'A church with pointed towers like needles, where white geese guard a garden of palm trees. On Sundays, in front of it, people join hands and dance in a circle.',
      },
      parentHint: {
        el: 'Είναι ο Καθεδρικός Ναός της Βαρκελώνης (Catedral de Barcelona), στην πλατεία Pla de la Seu, στην καρδιά της Γοτθικής Συνοικίας. Από τη La Boqueria διασχίστε τη Ράμπλα και περπατήστε 8 λεπτά από την Carrer de la Portaferrissa και μετά την Carrer del Bisbe. Το περιστύλιο με τις χήνες έχει είσοδο και από την Carrer del Bisbe. Το περιστύλιο είναι δωρεάν μόνο τις πρωινές (8:30–12:30) και βραδινές ώρες λατρείας· το μεσημέρι χρειάζεται εισιτήριο.',
        en: 'It is Barcelona Cathedral (Catedral de Barcelona), on the Pla de la Seu square in the heart of the Gothic Quarter. From La Boqueria cross La Rambla and walk 8 minutes along Carrer de la Portaferrissa and then Carrer del Bisbe. The cloister with the geese also has an entrance from Carrer del Bisbe. The cloister is free only during morning (8:30–12:30) and evening worship hours; at midday it needs a ticket.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι τις Κυριακές οι άνθρωποι χορεύουν σε κύκλο μπροστά στην εκκλησία. Πώς λέγεται αυτός ο χορός της Καταλονίας;', en: 'The riddle says that on Sundays people dance in a circle in front of the church. What is this Catalan dance called?' },
        options: {
          el: ['Φλαμένκο', 'Σαρντάνα', 'Τάνγκο', 'Συρτάκι'],
          en: ['Flamenco', 'Sardana', 'Tango', 'Sirtaki'],
        },
        correct: 1,
        explanation: {
          el: 'Η σαρντάνα (sardana) είναι ο χορός της Καταλονίας: μικροί και μεγάλοι πιάνονται χέρι χέρι σε κύκλο και μετρούν τα βήματα με προσοχή, ενώ μια μπάντα με πνευστά, η cobla, παίζει τη μουσική. Το φλαμένκο είναι από τον νότο της Ισπανίας, και το συρτάκι, το ξέρεις, από την Ελλάδα!',
          en: 'The sardana is the dance of Catalonia: young and old join hands in a circle and count their steps carefully while a wind band called a cobla plays the music. Flamenco comes from the south of Spain, and sirtaki, as you know, from Greece!',
        },
      },
      onSite: {
        question: { el: 'Μπες στο περιστύλιο, τον σκεπαστό κήπο της εκκλησίας, και μέτρησε τις άσπρες χήνες. Πόσες είναι;', en: 'Go into the cloister, the church\'s covered garden, and count the white geese. How many are there?' },
        options: {
          el: ['Τρεις', 'Επτά', 'Δεκατρείς', 'Είκοσι'],
          en: ['Three', 'Seven', 'Thirteen', 'Twenty'],
        },
        correct: 2,
        explanation: {
          el: 'Δεκατρείς χήνες, μία για κάθε χρόνο της ζωής της Αγίας Ευλαλίας, που ήταν 13 ετών. Χήνες ζουν εδώ εδώ και αιώνες και είναι εξαιρετικοί φύλακες: κακαρίζουν δυνατά μόλις πλησιάσει κάποιος ξένος!',
          en: 'Thirteen geese, one for each year of the life of Saint Eulàlia, who was 13 years old. Geese have lived here for centuries and make excellent guards: they honk loudly the moment a stranger comes near!',
        },
      },
      story: {
        el: 'Οι χτίστες άρχισαν αυτή την εκκλησία το 1298 και δούλεψαν περίπου 150 χρόνια για να τη σηκώσουν, με ψηλές καμάρες και λεπτές κολόνες, στο στιλ που λέμε γοτθικό. Η μπροστινή όψη με τους μυτερούς πύργους όμως είναι πολύ πιο καινούργια: προστέθηκε γύρω στο 1890, πάνω από 100 χρόνια πριν, με σχέδια που είχαν μείνει στο συρτάρι από τον Μεσαίωνα. Η εκκλησία είναι αφιερωμένη στην Αγία Ευλαλία, ένα κορίτσι από τη Βαρκελώνη που έζησε πριν από περίπου 1.700 χρόνια, την εποχή των Ρωμαίων, και είχε το θάρρος να μην αρνηθεί την πίστη της, αν και ήταν μόλις 13 ετών. Γι\' αυτό στον κήπο της εκκλησίας ζουν 13 άσπρες χήνες. Κάθε Κυριακή, στην πλατεία μπροστά, ο κόσμος πιάνεται χέρι χέρι και χορεύει σαρντάνα. Το θάρρος δεν έχει ηλικία!',
        en: 'Builders started this church in 1298 and worked for about 150 years to raise it, with tall arches and slender columns in the style we call Gothic. The front with the pointed towers, though, is much newer: it was added around 1890, more than 100 years ago, using drawings that had waited in a drawer since the Middle Ages. The church is dedicated to Saint Eulàlia, a girl from Barcelona who lived about 1,700 years ago, in Roman times, and had the courage to stand by her faith even though she was only 13. That is why 13 white geese live in the church garden. Every Sunday, on the square in front, people join hands and dance the sardana. Courage has no age!',
      },
      didYouKnow: {
        el: 'Κάθε χρόνο, τη γιορτή του Corpus Christi (της Αγίας Δωρεάς), ένα άδειο τσόφλι αυγού χορεύει πάνω στον πίδακα του σιντριβανιού στο περιστύλιο, το «l\'ou com balla» (το αυγό που χορεύει), μια παράδοση που κρατά από τον 16ο αιώνα. Η νεογοτθική πρόσοψη βασίστηκε σε σχέδιο του 1408.',
        en: 'Every year on the feast of Corpus Christi, an empty eggshell is set dancing on the jet of the cloister fountain, “l\'ou com balla” (the dancing egg), a tradition kept since the 16th century. The neo-Gothic front was based on a drawing from 1408.',
      },
      quiz: [
        {
          q: { el: 'Πόσων χρονών ήταν η Αγία Ευλαλία;', en: 'How old was Saint Eulàlia?' },
          options: {
            el: ['Εξήντα', 'Τριάντα', 'Πέντε', 'Δεκατριών'],
            en: ['Sixty', 'Thirty', 'Five', 'Thirteen'],
          },
          correct: 3,
          explanation: {
            el: 'Η Ευλαλία ήταν μόλις 13 ετών, γι\' αυτό 13 χήνες ζουν στον κήπο της εκκλησίας.',
            en: 'Eulàlia was only 13, which is why 13 geese live in the church garden.',
          },
        },
        {
          q: { el: 'Πότε προστέθηκε η μπροστινή όψη με τους μυτερούς πύργους;', en: 'When was the front with the pointed towers added?' },
          options: {
            el: ['Γύρω στο 1890, πολύ αργότερα από την υπόλοιπη εκκλησία', 'Το 1298, μαζί με την υπόλοιπη εκκλησία', 'Την εποχή των Ρωμαίων', 'Πέρυσι'],
            en: ['Around 1890, much later than the rest of the church', 'In 1298, with the rest of the church', 'In Roman times', 'Last year'],
          },
          correct: 0,
          explanation: {
            el: 'Η πρόσοψη προστέθηκε γύρω στο 1890, με σχέδια από τον Μεσαίωνα που περίμεναν εκατοντάδες χρόνια.',
            en: 'The front was added around 1890, using medieval drawings that had waited for hundreds of years.',
          },
        },
        {
          q: { el: 'Ποιος είναι ο χορός που χορεύουν τις Κυριακές στην πλατεία;', en: 'Which dance do people dance on the square on Sundays?' },
          options: {
            el: ['Το βαλς', 'Η σαρντάνα', 'Το φλαμένκο', 'Το χιπ χοπ'],
            en: ['The waltz', 'The sardana', 'Flamenco', 'Hip hop'],
          },
          correct: 1,
          explanation: {
            el: 'Η σαρντάνα, ο χορός της Καταλονίας, χορεύεται σε κύκλο, χέρι χέρι, από μικρούς και μεγάλους.',
            en: 'The sardana, the dance of Catalonia, is danced in a circle, hand in hand, by young and old.',
          },
        },
      ],
    },

    // ── 7. Plaça Reial ─────────────────────────────────────────────────────────
    {
      id: 'placa-reial',
      name: { el: 'Plaça Reial', en: 'Plaça Reial' },
      emoji: '🌴',
      lat: 41.3800,
      lng: 2.1750,
      radiusM: 50,
      riddle: {
        el: 'Μια πλατεία κρυμμένη πίσω από τις καμάρες της, με ψηλούς φοίνικες, ένα σιντριβάνι με τρεις κοπέλες στη μέση και δύο φανάρια που φορούν φτερωτό κράνος και έχουν φίδια τυλιγμένα γύρω τους. Τα σχεδίασε ένας νεαρός που έγινε αργότερα ο πιο διάσημος αρχιτέκτονας της πόλης.',
        en: 'A square hidden behind its arcades, with tall palm trees, a fountain of three young ladies in the middle and two lamp posts wearing a winged helmet with snakes wound around them. A young man designed them who later became the most famous architect in town.',
      },
      parentHint: {
        el: 'Είναι η Plaça Reial (η «Βασιλική Πλατεία»), ακριβώς δίπλα στη Ράμπλα. Από τον καθεδρικό κατηφορίστε 8 λεπτά από την Carrer del Bisbe και την Carrer de Ferran· η είσοδος της πλατείας είναι στα αριστερά, λίγο πριν φτάσετε στη Ράμπλα.',
        en: 'It is Plaça Reial, right next to La Rambla. From the cathedral walk 8 minutes down Carrer del Bisbe and along Carrer de Ferran; the entrance to the square is on the left, just before you reach La Rambla.',
      },
      unlockQuestion: {
        question: { el: 'Τα φανάρια της πλατείας έχουν στην κορυφή ένα φτερωτό κράνος και δύο φίδια τυλιγμένα σε ένα ραβδί. Ποιος θεός της ελληνικής μυθολογίας φορούσε φτερωτό κράνος και κρατούσε τέτοιο ραβδί;', en: 'The lamp posts of the square are topped with a winged helmet and two snakes wound around a staff. Which god of Greek mythology wore a winged helmet and carried a staff like that?' },
        options: {
          el: ['Ο Δίας', 'Ο Ποσειδώνας', 'Ο Ερμής', 'Ο Άρης'],
          en: ['Zeus', 'Poseidon', 'Hermes', 'Ares'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Ερμής, ο φτερωτός αγγελιοφόρος των θεών, ήταν ο προστάτης των ταξιδιωτών και των εμπόρων. Το ραβδί του με τα δύο φίδια λέγεται κηρύκειο. Ο Gaudí διάλεξε τα σύμβολά του για μια πλατεία γεμάτη εμπόρους και ταξιδιώτες.',
          en: 'Hermes, the winged messenger of the gods, was the protector of travellers and merchants. His staff with the two snakes is called the caduceus. Gaudí chose his symbols for a square full of traders and travellers.',
        },
      },
      onSite: {
        question: { el: 'Βρες τα δύο ψηλά φανάρια στη μέση της πλατείας, δίπλα στο σιντριβάνι, αυτά με τα έξι μπράτσα. Τι υπάρχει στην κορυφή τους;', en: 'Find the two tall lamp posts in the middle of the square, beside the fountain, the ones with six arms. What is at the very top?' },
        options: {
          el: ['Ένα κράνος με φτερά', 'Μια κορώνα', 'Ένα αστέρι', 'Ένα πουλί'],
          en: ['A helmet with wings', 'A crown', 'A star', 'A bird'],
        },
        correct: 0,
        explanation: {
          el: 'Ένα φτερωτό κράνος, όπως του Ερμή, και πιο κάτω δύο φίδια τυλιγμένα στο ραβδί. Είναι τα πρώτα έργα του Gaudí για την πόλη, το 1879, όταν ήταν μόλις 26 ετών. Κοίτα και τους φοίνικες: πολλοί από αυτούς είναι ψηλότεροι από τα κτίρια!',
          en: 'A winged helmet, like the one Hermes wore, and lower down two snakes wound around the staff. These were Gaudí\'s first works for the city, in 1879, when he was only 26. Look at the palm trees too: many of them are taller than the buildings!',
        },
      },
      story: {
        el: 'Κάποτε εδώ υπήρχε ένα μοναστήρι με έναν μεγάλο κήπο. Πριν από περίπου 180 χρόνια η πόλη αποφάσισε να χτίσει στη θέση του μια μεγαλόπρεπη πλατεία, με καμάρες γύρω γύρω όπως στις πλατείες της Γαλλίας, και οι εργασίες κράτησαν περίπου δέκα χρόνια. Φύτεψαν φοίνικες και στη μέση έβαλαν ένα σιντριβάνι με τις Τρεις Χάριτες, τις θεές της ομορφιάς και της χαράς. Το 1879 ένας νεαρός αρχιτέκτονας που μόλις είχε τελειώσει τις σπουδές του, ο Antoni Gaudí, πήρε την πρώτη του δουλειά από τον δήμο: δύο φανάρια με έξι μπράτσα το καθένα, ένα φτερωτό κράνος στην κορυφή και δύο φίδια, τα σύμβολα του Ερμή, του προστάτη των εμπόρων. Σήμερα η πλατεία είναι γεμάτη καφέ κάτω από τις καμάρες, και τις Κυριακές συλλέκτες ανταλλάσσουν γραμματόσημα. Όλοι ξεκινούν από κάπου: ακόμη κι ο Gaudí ξεκίνησε από ένα φανάρι!',
        en: 'Once a convent with a big garden stood here. About 180 years ago the city decided to build a grand square in its place, with arcades all the way round like the squares of France, and the work took about ten years. Palm trees were planted, and in the middle went a fountain of the Three Graces, the goddesses of beauty and joy. In 1879 a young architect fresh out of school, Antoni Gaudí, got his first job from the city council: two lamp posts with six arms each, a winged helmet on top and two snakes, the symbols of Hermes, protector of merchants. Today the square is full of cafés under the arcades, and on Sundays collectors swap stamps. Everyone starts somewhere: even Gaudí started with a lamp post!',
      },
      didYouKnow: {
        el: 'Η πλατεία χτίστηκε στη θέση ενός μοναστηριού Καπουτσίνων που γκρεμίστηκε τη δεκαετία του 1830. Τα δύο φανάρια είναι η πρώτη δημόσια παραγγελία του Gaudí: ήταν 26 ετών και είχε πάρει το πτυχίο του μόλις έναν χρόνο νωρίτερα. Ο ίδιος σχεδίασε και τα τρίφωτα φανάρια της Pla de Palau, κοντά στο λιμάνι.',
        en: 'The square was built on the site of a Capuchin convent demolished in the 1830s. The two lamp posts were Gaudí\'s first public commission: he was 26 and had received his degree only a year earlier. He also designed the three-armed lamp posts of Pla de Palau, near the harbour.',
      },
      quiz: [
        {
          q: { el: 'Τι υπήρχε στη θέση της πλατείας πριν χτιστεί;', en: 'What stood here before the square was built?' },
          options: {
            el: ['Ένα λιμάνι', 'Ένα μοναστήρι με κήπο', 'Ένα κάστρο', 'Μια αγορά ψαριών'],
            en: ['A harbour', 'A convent with a garden', 'A castle', 'A fish market'],
          },
          correct: 1,
          explanation: {
            el: 'Ένα μοναστήρι με μεγάλο κήπο στεκόταν εδώ. Στη θέση του η πόλη έχτισε την πλατεία με τις καμάρες.',
            en: 'A convent with a big garden stood here. The city built the arcaded square in its place.',
          },
        },
        {
          q: { el: 'Ποια ήταν η πρώτη δουλειά του Gaudí για την πόλη;', en: 'What was Gaudí\'s first job for the city?' },
          options: {
            el: ['Ένα σιντριβάνι', 'Μια εκκλησία', 'Μια γέφυρα', 'Δύο φανάρια'],
            en: ['A fountain', 'A church', 'A bridge', 'Two lamp posts'],
          },
          correct: 3,
          explanation: {
            el: 'Το 1879 ο νεαρός Gaudí σχεδίασε δύο φανάρια με έξι μπράτσα για αυτή την πλατεία. Ήταν η πρώτη του παραγγελία από τον δήμο.',
            en: 'In 1879 young Gaudí designed two six-armed lamp posts for this square. It was his first commission from the city council.',
          },
        },
        {
          q: { el: 'Ποιες δείχνει το σιντριβάνι στη μέση της πλατείας;', en: 'Who does the fountain in the middle of the square show?' },
          options: {
            el: ['Τρεις βασίλισσες', 'Τρεις ναυτικούς', 'Τις Τρεις Χάριτες', 'Τρεις χήνες'],
            en: ['Three queens', 'Three sailors', 'The Three Graces', 'Three geese'],
          },
          correct: 2,
          explanation: {
            el: 'Οι Τρεις Χάριτες ήταν στην ελληνική μυθολογία οι θεές της ομορφιάς, της χαράς και της καλοσύνης.',
            en: 'In Greek mythology the Three Graces were the goddesses of beauty, joy and kindness.',
          },
        },
      ],
    },

    // ── 8. Columbus Monument ───────────────────────────────────────────────────
    {
      id: 'columbus-monument',
      name: { el: 'Monument a Colom', en: 'Monument a Colom' },
      emoji: '🧭',
      lat: 41.3758,
      lng: 2.1776,
      radiusM: 60,
      riddle: {
        el: 'Στο τέλος του μεγάλου περιπάτου, ένας θαλασσοπόρος στέκεται στην κορυφή μιας κολόνας ψηλής όσο ένα κτίριο 20 ορόφων και δείχνει με το δάχτυλό του τη θάλασσα. Στα πόδια της κολόνας, μπρούντζινα λιοντάρια φυλάνε το λιμάνι.',
        en: 'At the end of the long promenade, a sailor stands on top of a column as tall as a 20-storey building and points his finger at the sea. At the foot of the column, bronze lions guard the harbour.',
      },
      parentHint: {
        el: 'Είναι το Μνημείο του Κολόμβου (Monument a Colom), στην Plaça del Portal de la Pau, στο κάτω άκρο της Ράμπλα. Από την Plaça Reial βγείτε στη Ράμπλα και κατηφορίστε 8 λεπτά ως το λιμάνι· περάστε από τις διαβάσεις για να φτάσετε στη νησίδα γύρω από το μνημείο.',
        en: 'It is the Columbus Monument (Monument a Colom), on Plaça del Portal de la Pau at the bottom end of La Rambla. From Plaça Reial step out onto La Rambla and walk 8 minutes down to the harbour; use the crossings to reach the island around the monument.',
      },
      unlockQuestion: {
        question: { el: 'Ο Κολόμβος ξεκίνησε το 1492 να διασχίσει τον ωκεανό. Τι ήθελε να βρει;', en: 'In 1492 Columbus set out to cross the ocean. What was he looking for?' },
        options: {
          el: ['Χρυσό στην Αφρική', 'Έναν θαλάσσιο δρόμο για την Ινδία πλέοντας προς τα δυτικά', 'Τον Βόρειο Πόλο', 'Ένα καλό μέρος για ψάρεμα'],
          en: ['Gold in Africa', 'A sea route to India by sailing west', 'The North Pole', 'A good fishing spot'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Κολόμβος πίστευε ότι, αν έπλεε δυτικά, θα έφτανε γρήγορα στην Ινδία και στα μπαχαρικά της. Είχε κάνει λάθος στους υπολογισμούς του: η Γη είναι πολύ μεγαλύτερη, και ανάμεσα βρισκόταν μια ολόκληρη ήπειρος, η Αμερική.',
          en: 'Columbus believed that by sailing west he would quickly reach India and its spices. His sums were wrong: the Earth is much bigger, and a whole continent, America, lay in between.',
        },
      },
      onSite: {
        question: { el: 'Κάνε τον γύρο της βάσης του μνημείου και μέτρησε τα μπρούντζινα λιοντάρια. Πόσα είναι;', en: 'Walk around the base of the monument and count the bronze lions. How many are there?' },
        options: {
          el: ['Δύο', 'Έξι', 'Οκτώ', 'Τέσσερα'],
          en: ['Two', 'Six', 'Eight', 'Four'],
        },
        correct: 3,
        explanation: {
          el: 'Τέσσερα λιοντάρια φυλάνε τη βάση. Ανάμεσά τους θα δεις φτερωτές φιγούρες και σκαλισμένες σκηνές από τα ταξίδια του Κολόμβου. Τώρα κοίταξε ψηλά: πού δείχνει το δάχτυλό του;',
          en: 'Four lions guard the base. Between them you will find winged figures and carved scenes from Columbus\'s voyages. Now look up: where is his finger pointing?',
        },
      },
      story: {
        el: 'Την άνοιξη του 1493 ο Χριστόφορος Κολόμβος γύρισε από το πρώτο του ταξίδι στην άλλη άκρη του ωκεανού και ήρθε στη Βαρκελώνη, όπου τον υποδέχτηκαν ο βασιλιάς Φερδινάνδος και η βασίλισσα Ισαβέλλα στο παλάτι τους. Τους έδειξε παπαγάλους, περίεργα φυτά και μικρά κομμάτια χρυσού από τα μακρινά νησιά. Τετρακόσια χρόνια αργότερα, το 1888, η Βαρκελώνη οργάνωσε μια μεγάλη Παγκόσμια Έκθεση και έστησε στο λιμάνι αυτή την κολόνα, ψηλή 60 μέτρα, με τον Κολόμβο στην κορυφή. Το άγαλμά του δείχνει τη θάλασσα, από όπου ξεκινούν όλα τα ταξίδια, και όχι την Αμερική, που βρίσκεται πίσω του, προς τη δύση. Μέσα στην κολόνα ένα μικρό ασανσέρ ανεβάζει τους επισκέπτες σε ένα μπαλκονάκι κάτω από τα πόδια του. Ο Κολόμβος έκανε λάθος στους υπολογισμούς του, αλλά είχε το θάρρος να πλεύσει στο άγνωστο.',
        en: 'In the spring of 1493 Christopher Columbus returned from his first voyage across the ocean and came to Barcelona, where King Ferdinand and Queen Isabella received him in their palace. He showed them parrots, strange plants and small pieces of gold from the faraway islands. Four hundred years later, in 1888, Barcelona held a great World\'s Fair and raised this column at the harbour, 60 metres tall, with Columbus on top. His statue points to the sea, where every voyage begins, and not to America, which lies behind him, to the west. Inside the column a tiny lift carries visitors up to a little balcony beneath his feet. Columbus got his sums wrong, but he had the courage to sail into the unknown.',
      },
      didYouKnow: {
        el: 'Το δάχτυλο του Κολόμβου δείχνει προς τα νοτιοανατολικά, προς την ανοιχτή θάλασσα και τη Μαγιόρκα, όχι προς την Αμερική, που βρίσκεται στην ακριβώς αντίθετη κατεύθυνση. Το μπρούντζινο άγαλμα έχει ύψος 7 μέτρα, και το ασανσέρ μέσα στην κολόνα ανεβάζει ακόμη επισκέπτες στο μπαλκόνι, περίπου 50 μέτρα πάνω από το έδαφος.',
        en: 'Columbus\'s finger points south-east, towards the open sea and Mallorca, not towards America, which lies in exactly the opposite direction. The bronze statue is 7 metres tall, and the lift inside the column still carries visitors up to the balcony about 50 metres above the ground.',
      },
      quiz: [
        {
          q: { el: 'Πότε στήθηκε η κολόνα και για ποια γιορτή;', en: 'When was the column put up, and for what occasion?' },
          options: {
            el: ['Το 1888, για μια μεγάλη Παγκόσμια Έκθεση', 'Το 1493, όταν γύρισε ο Κολόμβος', 'Το 1992, για τους Ολυμπιακούς Αγώνες', 'Το 1217, για την αγορά'],
            en: ['In 1888, for a great World\'s Fair', 'In 1493, when Columbus returned', 'In 1992, for the Olympic Games', 'In 1217, for the market'],
          },
          correct: 0,
          explanation: {
            el: 'Η κολόνα στήθηκε το 1888, όταν η Βαρκελώνη οργάνωσε την Παγκόσμια Έκθεση και ήθελε να εντυπωσιάσει τους επισκέπτες της.',
            en: 'The column was raised in 1888, when Barcelona held its World\'s Fair and wanted to impress its visitors.',
          },
        },
        {
          q: { el: 'Ποιος υποδέχτηκε τον Κολόμβο στη Βαρκελώνη το 1493;', en: 'Who received Columbus in Barcelona in 1493?' },
          options: {
            el: ['Ο Gaudí', 'Ένας καπετάνιος', 'Ο βασιλιάς Φερδινάνδος και η βασίλισσα Ισαβέλλα', 'Ο Άγιος Γεώργιος'],
            en: ['Gaudí', 'A ship captain', 'King Ferdinand and Queen Isabella', 'Saint George'],
          },
          correct: 2,
          explanation: {
            el: 'Ο βασιλιάς Φερδινάνδος και η βασίλισσα Ισαβέλλα τον υποδέχτηκαν στο παλάτι τους, και εκείνος τους έδειξε παπαγάλους και χρυσό.',
            en: 'King Ferdinand and Queen Isabella received him in their palace, and he showed them parrots and gold.',
          },
        },
        {
          q: { el: 'Πού δείχνει ο Κολόμβος με το δάχτυλό του;', en: 'Where does Columbus point his finger?' },
          options: {
            el: ['Στην Αμερική', 'Στη θάλασσα', 'Στη Sagrada Família', 'Στον ουρανό'],
            en: ['At America', 'At the sea', 'At the Sagrada Família', 'At the sky'],
          },
          correct: 1,
          explanation: {
            el: 'Δείχνει τη θάλασσα, από όπου ξεκινούν τα ταξίδια. Η Αμερική είναι πίσω του, προς τη δύση!',
            en: 'He points to the sea, where voyages begin. America is behind him, to the west!',
          },
        },
      ],
    },

    // ── 9. Arc de Triomf ───────────────────────────────────────────────────────
    {
      id: 'arc-de-triomf',
      name: { el: 'Arc de Triomf', en: 'Arc de Triomf' },
      emoji: '🧱',
      lat: 41.3910,
      lng: 2.1805,
      radiusM: 40,
      riddle: {
        el: 'Μια πύλη από κόκκινα τούβλα στέκεται στην κορυφή ενός φαρδιού περιπάτου με φοίνικες, αλλά κανένας στρατός δεν πέρασε ποτέ από κάτω της: χτίστηκε για να πει «καλώς ήρθατε» σε όλον τον κόσμο.',
        en: 'A gate of red bricks stands at the top of a wide walk lined with palm trees, but no army ever marched beneath it: it was built to say “welcome” to the whole world.',
      },
      parentHint: {
        el: 'Είναι η Arc de Triomf (η «Αψίδα του Θριάμβου»), στην αρχή του περιπάτου Passeig de Lluís Companys, προς το πάρκο Ciutadella. Από το Μνημείο του Κολόμβου πάρτε το μετρό L3 από τον σταθμό Drassanes ως τον σταθμό Catalunya, αλλάξτε στη γραμμή L1 και κατεβείτε στον σταθμό Arc de Triomf (δύο στάσεις)· ή περπατήστε 25 λεπτά κατά μήκος του λιμανιού και μέσα από τη γειτονιά Born.',
        en: 'It is the Arc de Triomf, at the top of the Passeig de Lluís Companys promenade leading to the Ciutadella park. From the Columbus Monument take metro L3 from Drassanes to Catalunya, change to line L1 and get off at Arc de Triomf (two stops); or walk 25 minutes along the harbour and through the Born quarter.',
      },
      unlockQuestion: {
        question: { el: 'Οι περισσότερες αψίδες του θριάμβου γιορτάζουν μια νίκη σε πόλεμο. Για ποιο γεγονός χτίστηκε αυτή, το 1888;', en: 'Most triumphal arches celebrate a victory in war. What event was this one built for, in 1888?' },
        options: {
          el: ['Για μια μεγάλη έκθεση όπου χώρες από όλον τον κόσμο έδειχναν τις εφευρέσεις τους', 'Για έναν τελικό ποδοσφαίρου', 'Για τον γάμο ενός βασιλιά', 'Για μια ταυρομαχία'],
          en: ['A great fair where countries from all over the world showed their inventions', 'A football final', 'A royal wedding', 'A bullfight'],
        },
        correct: 0,
        explanation: {
          el: 'Το 1888 η Βαρκελώνη οργάνωσε μια Παγκόσμια Έκθεση: μια τεράστια γιορτή με περίπτερα από πολλές χώρες, καινούργιες μηχανές και εφευρέσεις. Η αψίδα ήταν η μεγάλη είσοδός της, γι\' αυτό μοιάζει με πύλη που λέει «περάστε!».',
          en: 'In 1888 Barcelona held a World\'s Fair: a giant celebration with pavilions from many countries, new machines and inventions. The arch was its grand entrance, which is why it looks like a gate saying “come in!”.',
        },
      },
      onSite: {
        question: { el: 'Από τι είναι χτισμένη η αψίδα και τι χρώμα έχει;', en: 'What is the arch built of, and what colour is it?' },
        options: {
          el: ['Από άσπρο μάρμαρο', 'Από κόκκινα τούβλα', 'Από γκρίζα πέτρα', 'Από κίτρινη άμμο'],
          en: ['White marble', 'Red bricks', 'Grey stone', 'Yellow sand'],
        },
        correct: 1,
        explanation: {
          el: 'Κόκκινα τούβλα, με σχέδια που θυμίζουν τα παλάτια των Αράβων της Ισπανίας. Κοίταξε ψηλά: πάνω από την καμάρα θα δεις σκαλισμένα οικόσημα και, αν ψάξεις καλά, μικρές νυχτερίδες, ένα παλιό τυχερό σύμβολο των βασιλιάδων αυτής της περιοχής.',
          en: 'Red bricks, with patterns that recall the palaces of the Arabs in Spain. Look up: above the arch you will see carved coats of arms and, if you look carefully, little bats, an old lucky symbol of the kings of this region.',
        },
      },
      story: {
        el: 'Το 1888 η Βαρκελώνη έκανε ένα τεράστιο πάρτι: την Παγκόσμια Έκθεση, όπου χώρες από όλον τον κόσμο έδειχναν τις πιο καινούργιες μηχανές και εφευρέσεις τους. Η γιορτή έγινε στο πάρκο Ciutadella (Σιουταδέγια), εκεί όπου παλιά υπήρχε ένα τεράστιο φρούριο, και αυτή η αψίδα ήταν η μπροστινή της πόρτα. Ο αρχιτέκτονας Josep Vilaseca δεν διάλεξε άσπρο μάρμαρο, όπως στις αψίδες των Ρωμαίων, αλλά κόκκινα τούβλα και σχέδια σαν των αραβικών παλατιών. Στην πρόσοψη, πέτρινες φιγούρες δείχνουν τη Βαρκελώνη να υποδέχεται τα έθνη, και ψηλά στέκουν τα οικόσημα της πόλης και των επαρχιών της Ισπανίας. Όταν η έκθεση τελείωσε, η αψίδα έμεινε, σαν ενθύμιο μιας μεγάλης γιορτής. Ένα μνημείο όχι για μάχες, αλλά για ιδέες!',
        en: 'In 1888 Barcelona threw a huge party: the World\'s Fair, where countries from all over the world showed off their newest machines and inventions. The party took place in the Ciutadella park, where a giant fortress once stood, and this arch was its front door. The architect Josep Vilaseca chose not white marble, like the arches of the Romans, but red bricks and patterns like those of Arab palaces. On the front, stone figures show Barcelona welcoming the nations, and high up stand the coats of arms of the city and of the provinces of Spain. When the fair was over, the arch stayed, as a souvenir of a great celebration. A monument not to battles, but to ideas!',
      },
      didYouKnow: {
        el: 'Το πάρκο Ciutadella, όπου οδηγεί ο περίπατος, πήρε το όνομά του από ένα φρούριο (ciutadella σημαίνει ακρόπολη) που έχτισε ο βασιλιάς Φίλιππος ο Ε΄ μετά το 1714 για να επιτηρεί την πόλη· οι κάτοικοι δεν το συμπάθησαν ποτέ, και τον 19ο αιώνα γκρεμίστηκε για να γίνει πάρκο. Στο μεγάλο σιντριβάνι του πάρκου, την Cascada, δούλεψε ως φοιτητής ο νεαρός Gaudí.',
        en: 'The Ciutadella park at the end of the promenade is named after a fortress (ciutadella means citadel) built by King Philip V after 1714 to keep watch over the city; the citizens never liked it, and in the 19th century it was demolished to make way for the park. A young Gaudí, still a student, worked on the park\'s great fountain, the Cascada.',
      },
      quiz: [
        {
          q: { el: 'Από τι είναι φτιαγμένη η αψίδα;', en: 'What is the arch made of?' },
          options: {
            el: ['Από άσπρο μάρμαρο', 'Από σίδερο', 'Από κόκκινα τούβλα', 'Από ξύλο'],
            en: ['White marble', 'Iron', 'Red bricks', 'Wood'],
          },
          correct: 2,
          explanation: {
            el: 'Ο αρχιτέκτονας διάλεξε κόκκινα τούβλα και σχέδια σαν των αραβικών παλατιών, αντί για το μάρμαρο των ρωμαϊκών αψίδων.',
            en: 'The architect chose red bricks and patterns like those of Arab palaces, instead of the marble of Roman arches.',
          },
        },
        {
          q: { el: 'Τι υπήρχε παλιά στο πάρκο όπου έγινε η έκθεση;', en: 'What once stood in the park where the fair was held?' },
          options: {
            el: ['Μια παραλία', 'Ένα δάσος', 'Ένα στάδιο', 'Ένα τεράστιο φρούριο'],
            en: ['A beach', 'A forest', 'A stadium', 'A giant fortress'],
          },
          correct: 3,
          explanation: {
            el: 'Στο πάρκο Ciutadella υπήρχε παλιά ένα τεράστιο φρούριο. Γκρεμίστηκε και στη θέση του φτιάχτηκε το πάρκο.',
            en: 'A giant fortress once stood in the Ciutadella park. It was pulled down and the park was built in its place.',
          },
        },
        {
          q: { el: 'Τι δείχνουν οι πέτρινες φιγούρες στην πρόσοψη της αψίδας;', en: 'What do the stone figures on the front of the arch show?' },
          options: {
            el: ['Τη Βαρκελώνη να υποδέχεται τα έθνη', 'Μια μάχη με δράκους', 'Ναυτικούς σε καράβι', 'Παιδιά που παίζουν ποδόσφαιρο'],
            en: ['Barcelona welcoming the nations', 'A battle with dragons', 'Sailors on a ship', 'Children playing football'],
          },
          correct: 0,
          explanation: {
            el: 'Οι φιγούρες δείχνουν τη Βαρκελώνη να καλωσορίζει τα έθνη του κόσμου στη μεγάλη γιορτή της.',
            en: 'The figures show Barcelona welcoming the nations of the world to its great celebration.',
          },
        },
      ],
    },

    // ── 10. Park Güell ─────────────────────────────────────────────────────────
    {
      id: 'park-guell',
      name: { el: 'Park Güell', en: 'Park Güell' },
      emoji: '🦎',
      lat: 41.4130,
      lng: 2.1527,
      radiusM: 80,
      riddle: {
        el: 'Σε έναν λόφο με θέα τη θάλασσα, μια σαύρα από χίλια χρωματιστά κομματάκια περιμένει στη σκάλα, δύο σπιτάκια μοιάζουν βγαλμένα από παραμύθι με μελόψωμο και ένα παγκάκι στριφογυρίζει σαν φίδι. Έμελλε να γίνει γειτονιά, μα κανείς δεν ήθελε να μείνει εκεί.',
        en: 'On a hill with a view of the sea, a lizard made of a thousand coloured pieces waits on the staircase, two little houses look straight out of a gingerbread fairy tale, and a bench wriggles like a snake. It was meant to be a neighbourhood, but nobody wanted to live there.',
      },
      parentHint: {
        el: 'Είναι το Park Güell (το «Πάρκο Γκουέλ»), κεντρική είσοδος στην Carrer d\'Olot. Από την Arc de Triomf πάρτε το μετρό L1 ως τον σταθμό Catalunya, αλλάξτε στη γραμμή L3 ως τον σταθμό Lesseps και περπατήστε 15 λεπτά ανηφορικά ακολουθώντας τις πινακίδες, ή πάρτε το λεωφορείο 24 από την Plaça de Catalunya, που σταματά δίπλα στο πάρκο. Η ζώνη με τη σαύρα και το παγκάκι θέλει εισιτήριο· κλείστε το από πριν στο διαδίκτυο.',
        en: 'It is Park Güell, main entrance on Carrer d\'Olot. From the Arc de Triomf take metro L1 to Catalunya, change to line L3 to Lesseps and walk 15 minutes uphill following the signs, or take bus 24 from Plaça de Catalunya, which stops next to the park. The zone with the lizard and the bench needs a ticket; book it online in advance.',
      },
      unlockQuestion: {
        question: { el: 'Ο Gaudí έντυσε το κυματιστό παγκάκι και τις στέγες με κομμάτια σπασμένων πλακιδίων αντί για ολόκληρα πλακάκια. Γιατί;', en: 'Gaudí covered the wavy bench and the roofs with pieces of broken tiles instead of whole tiles. Why?' },
        options: {
          el: ['Γιατί τα σπασμένα πλακάκια είναι πιο βαριά', 'Γιατί ήθελε να τα κρύψει', 'Γιατί τα μικρά κομμάτια ακολουθούν τις καμπύλες, ενώ τα ίσια πλακάκια όχι', 'Γιατί δεν του άρεσαν τα χρώματα'],
          en: ['Because broken tiles are heavier', 'Because he wanted to hide them', 'Because small pieces can follow curves, while flat tiles cannot', 'Because he did not like colours'],
        },
        correct: 2,
        explanation: {
          el: 'Ένα ίσιο πλακάκι δεν κολλάει πάνω σε μια καμπύλη· εκατό μικρά κομμάτια όμως ναι! Έτσι ο Gaudí μπορούσε να ντύνει κυματιστές επιφάνειες, και επιπλέον χρησιμοποιούσε σπασμένα πλακάκια που τα εργοστάσια πετούσαν. Η τεχνική λέγεται trencadís.',
          en: 'A flat tile will not stick to a curve, but a hundred small pieces will! That is how Gaudí could dress wavy surfaces, and he also used up broken tiles that factories threw away. The technique is called trencadís.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τα δύο σπιτάκια δεξιά και αριστερά από την κεντρική είσοδο. Πώς είναι οι στέγες τους;', en: 'Look at the two little houses on either side of the main entrance. What are their roofs like?' },
        options: {
          el: ['Επίπεδες σαν ταράτσα', 'Μυτερές σαν καπέλο μάγισσας', 'Από άχυρο', 'Κυματιστές, ντυμένες με χρωματιστά πλακάκια, σαν καπέλο μανιταριού'],
          en: ['Flat like a terrace', 'Pointed like a witch\'s hat', 'Made of straw', 'Wavy, covered in coloured tiles, like a mushroom cap'],
        },
        correct: 3,
        explanation: {
          el: 'Οι στέγες κυματίζουν και είναι ντυμένες με ψηφιδωτό από σπασμένα πλακάκια, σαν καπέλα μανιταριού. Το ένα σπιτάκι έχει κι έναν ψηλό πύργο με σταυρό. Ήταν το σπίτι του φύλακα και το γραφείο υποδοχής της γειτονιάς που δεν έγινε ποτέ.',
          en: 'The roofs ripple and are dressed in a mosaic of broken tiles, like mushroom caps. One of the little houses also has a tall tower with a cross. They were the gatekeeper\'s home and the reception office of the neighbourhood that never came to be.',
        },
      },
      story: {
        el: 'Ο κόμης Eusebi Güell (Γκουέλ), ένας πλούσιος επιχειρηματίας και ο καλύτερος φίλος του Gaudí, αγόρασε γύρω στο 1900 έναν γυμνό λόφο με θέα τη θάλασσα και του ζήτησε να σχεδιάσει μια γειτονιά με 60 σπίτια μέσα σε κήπους, όπως οι αγγλικές κηπουπόλεις· γι\' αυτό λέγεται «Park», με την αγγλική γραφή. Ο Gaudí έφτιαξε δρόμους και γέφυρες πάνω σε γερτές πέτρινες κολόνες σαν κορμούς δέντρων, μια αίθουσα με 86 κολόνες που θα γινόταν η αγορά, από πάνω της μια βεράντα με ένα κυματιστό παγκάκι από χρωματιστά κομματάκια και μια σκάλα που τη φυλάει μια σαύρα από ψηφιδωτό. Όμως μόνο δύο σπίτια πουλήθηκαν: ο λόφος ήταν μακριά και απότομος. Ο ίδιος ο Gaudí έμεινε στο ένα από αυτά για σχεδόν 20 χρόνια. Το 1926 η πόλη το έκανε δημόσιο πάρκο. Ακόμη κι ένα σχέδιο που αποτυγχάνει μπορεί να γίνει κάτι υπέροχο!',
        en: 'Count Eusebi Güell, a rich businessman and Gaudí\'s best friend, bought a bare hill with a view of the sea around 1900 and asked him to design a neighbourhood of 60 houses with gardens, like the English garden cities; that is why it is spelled “Park”, the English way. Gaudí built roads and bridges on leaning stone columns like tree trunks, a hall of 86 columns that was to be the market, above it a terrace with a wavy bench of coloured pieces, and a staircase guarded by a mosaic lizard. But only two houses were sold: the hill was far away and steep. Gaudí lived in one of them for almost 20 years. In 1926 the city turned it into a public park. Even a plan that fails can become something wonderful!',
      },
      didYouKnow: {
        el: 'Η μεγάλη βεράντα είναι και συλλέκτης βρόχινου νερού: το νερό περνάει μέσα από την άμμο του δαπέδου, κατεβαίνει μέσα από τις κούφιες κολόνες της αίθουσας και μαζεύεται σε μια υπόγεια δεξαμενή 1.200 κυβικών μέτρων. Όταν η δεξαμενή γεμίσει, το νερό που περισσεύει βγαίνει από το στόμα της σαύρας στη σκάλα.',
        en: 'The big terrace is also a rainwater collector: water seeps through the sand of the floor, runs down inside the hollow columns of the hall and gathers in an underground tank of 1,200 cubic metres. When the tank is full, the overflow comes out of the lizard\'s mouth on the staircase.',
      },
      quiz: [
        {
          q: { el: 'Πόσα σπίτια έπρεπε να χτιστούν στον λόφο και πόσα πουλήθηκαν τελικά;', en: 'How many houses were planned on the hill, and how many were sold in the end?' },
          options: {
            el: ['Έξι, και πουλήθηκαν όλα', '60, και πουλήθηκαν μόνο δύο', '600, και πουλήθηκαν 100', 'Κανένα, ήταν πάντα πάρκο'],
            en: ['Six, and all were sold', '60, and only two were sold', '600, and 100 were sold', 'None, it was always a park'],
          },
          correct: 1,
          explanation: {
            el: 'Το σχέδιο ήταν για 60 σπίτια, αλλά πουλήθηκαν μόνο δύο. Στο ένα έμεινε ο ίδιος ο Gaudí.',
            en: 'The plan was for 60 houses, but only two were sold. Gaudí himself lived in one of them.',
          },
        },
        {
          q: { el: 'Με τι μοιάζουν οι γερτές πέτρινες κολόνες που κρατούν τις γέφυρες του πάρκου;', en: 'What do the leaning stone columns holding up the park\'s bridges look like?' },
          options: {
            el: ['Με κεριά', 'Με σπαθιά', 'Με κορμούς δέντρων', 'Με καμινάδες'],
            en: ['Candles', 'Swords', 'Tree trunks', 'Chimneys'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Gaudí έφτιαξε τις κολόνες γερτές και τραχιές σαν κορμούς δέντρων, για να χάνονται μέσα στον λόφο σαν να φύτρωσαν εκεί.',
            en: 'Gaudí made the columns leaning and rough like tree trunks, so they blend into the hill as if they had grown there.',
          },
        },
        {
          q: { el: 'Πότε έγινε ο λόφος δημόσιο πάρκο;', en: 'When did the hill become a public park?' },
          options: {
            el: ['Το 1900', 'Το 1882', 'Το 2000', 'Το 1926'],
            en: ['In 1900', 'In 1882', 'In 2000', 'In 1926'],
          },
          correct: 3,
          explanation: {
            el: 'Το 1926, τη χρονιά που πέθανε ο Gaudí, η πόλη άνοιξε τον λόφο για όλους ως πάρκο.',
            en: 'In 1926, the year Gaudí died, the city opened the hill to everyone as a park.',
          },
        },
      ],
    },
  ],
};
