/**
 * WiseBot World — Barcelona.
 *
 * Sixteen places, two of them museums with an interior. Ten of the sixteen are carried
 * over from the Explorer product on origin/main, whose stories were the raw material
 * and were rewritten here: longer, checked again, and without the treasure-hunt frame.
 * Their Explorer riddles, parent hints and on-site questions are kept aside in
 * `scripts/world/seeds/barcelona.explorer.json` until the model has a field for them.
 *
 * Written for a six- to twelve-year-old, which is a constraint on the writing and not
 * on the truth: a girl of thirteen died for her faith here, galleys were rowed by men in
 * chains, and a sailor on a column started a story that was not happy for everyone. All
 * of it is told plainly and briefly rather than dressed up or left out.
 *
 * Every coordinate in this file is copied from `data/world/coords/barcelona.json`, which
 * `scripts/world/resolve-coords.mjs` produced from Wikidata and cross-checked against
 * OpenStreetMap and Wikipedia. Nothing was typed by hand and nothing graded `D` is
 * present. No place claims an entrance, because no door has been measured from a source
 * we may use; where the venue's own page names the street, it is in `location.findIt`.
 *
 * Numbers were checked on 12 September 2026 against the venues' own pages (mmb.cat,
 * aquariumbcn.com, tibidabo.cat, parkguell.barcelona, sagradafamilia.org, zoobarcelona.cat,
 * lapedrera.com) and the English Wikipedia articles, plus Wikidata for dates and heights.
 * The Tower of Jesus Christ was finished on 20 February 2026 and inaugurated on 10 June
 * 2026; the Ictíneo I replica was taken down from the Museu Marítim's garden in February
 * 2023 because it had rotted past saving, so the exhibit here is the museum's model of
 * it, not the replica.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------ sagrada família
  {
    id: 'barcelona-sagrada-familia',
    cityId: 'barcelona',
    emoji: '🏗️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Σαγράδα Φαμίλια', en: 'The Sagrada Família' },
    tagline: {
      el: 'Η εκκλησία που χτίζεται εδώ και 144 χρόνια',
      en: 'The church that has been under construction for 144 years',
    },
    story: {
      el:
        'Το χτίσιμο αυτής της εκκλησίας ξεκίνησε το 1882, και έναν χρόνο αργότερα το ' +
        'ανέλαβε ένας νέος αρχιτέκτονας, ο Αντόνι Γκαουντί. Έβαλε τα παλιά σχέδια στην ' +
        'άκρη και σχεδίασε κάτι που δεν είχε ξαναδεί κανείς: δεκαοκτώ πύργους, κολόνες ' +
        'που ανοίγουν ψηλά σαν κλαδιά δέντρων, και παράθυρα που γεμίζουν το εσωτερικό με ' +
        'χρωματιστό φως. Ο Γκαουντί δούλεψε εδώ σαράντα τρία χρόνια. Ήξερε ότι δεν θα τη ' +
        'δει τελειωμένη, και όταν τον ρωτούσαν έλεγε ότι ο πελάτης του δεν βιάζεται. ' +
        'Πέθανε το 1926, αφού τον χτύπησε ένα τραμ, και τότε ήταν έτοιμη μόνο μία πρόσοψη ' +
        'και ένας πύργος. Οι χτίστες συνέχισαν από τότε, με χρήματα από τα εισιτήρια των ' +
        'επισκεπτών και από δωρεές. Το φθινόπωρο του 2025 ξεπέρασε την ψηλότερη εκκλησία ' +
        'της Γερμανίας και έγινε η ψηλότερη εκκλησία του κόσμου· τον Φεβρουάριο του 2026, ' +
        'εκατό χρόνια μετά τον θάνατο του Γκαουντί, μπήκε το τελευταίο κομμάτι του σταυρού ' +
        'και ο Πύργος του Ιησού Χριστού έφτασε τα 172,5 μέτρα του. Ο Γκαουντί ' +
        'διάλεξε αυτό το ύψος επίτηδες: είναι λίγο χαμηλότερο από τον λόφο Μοντζουίκ, ' +
        'δίπλα στην πόλη, γιατί πίστευε ότι ένα κτίριο δεν πρέπει να ξεπερνά αυτό που ' +
        'έφτιαξε η φύση.',
      en:
        'Work on this church began in 1882, and a year later a young architect named ' +
        'Antoni Gaudí took it over. He put the old plans away and drew something nobody ' +
        'had seen before: eighteen towers, columns that split at the top like the branches ' +
        'of a tree, and windows that fill the inside with coloured light. Gaudí worked ' +
        'here for forty-three years. He knew he would not live to see it finished, and ' +
        'when people asked him about it he said his client was in no hurry. He died in ' +
        '1926 after being hit by a tram, and by then only one façade and one tower were ' +
        'done. Builders have carried on ever since, paid for by visitors’ tickets and by ' +
        'donations. In the autumn of 2025 it passed the tallest church in Germany and ' +
        'became the tallest church in the world; in February 2026, a hundred years after ' +
        'Gaudí’s death, the last piece of the cross went on and the Tower of Jesus Christ ' +
        'reached its full 172.5 metres. Gaudí chose that height on ' +
        'purpose: it is a little lower than Montjuïc, the hill beside the city, because he ' +
        'believed a building should not stand taller than what nature made.',
    },
    facts: [
      {
        el: 'Το χτίσιμο ξεκίνησε το 1882. Ο Γκαουντί το ανέλαβε το 1883 και δούλεψε εδώ 43 χρόνια.',
        en: 'Building began in 1882. Gaudí took over in 1883 and worked here for 43 years.',
      },
      {
        el: 'Ο Πύργος του Ιησού Χριστού τελείωσε τον Φεβρουάριο του 2026: 172,5 μέτρα, η ψηλότερη εκκλησία του κόσμου.',
        en: 'The Tower of Jesus Christ was finished in February 2026: 172.5 metres, the tallest church in the world.',
      },
      {
        el: 'Ο ίδιος ο Γκαουντί είναι θαμμένος στην κρύπτη, κάτω από την εκκλησία.',
        en: 'Gaudí himself is buried in the crypt, underneath the church.',
      },
    ],
    location: {
      lat: 41.40369,
      lng: 2.17433,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q48435', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Sagrada Família', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.676, y: 0.417 },
      // sagradafamilia.org/en/schedules-how-to-get: individual visitors use the general
      // entrance on the Nativity façade, on Carrer de la Marina.
      findIt: {
        el: 'Η είσοδος για τους επισκέπτες είναι στην οδό Μαρίνα, μπροστά στην πρόσοψη της Γέννησης, την πλευρά που είναι γεμάτη αγάλματα.',
        en: 'The visitors’ entrance is on Carrer de la Marina, in front of the Nativity façade, the side covered in sculptures.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ο ψηλότερος πύργος έχει ακριβώς 172,5 μέτρα και όχι περισσότερα;',
        en: 'Why is the tallest tower exactly 172.5 metres and not taller?',
      },
      answers: [
        { el: 'Για να μην ξεπερνά τον λόφο Μοντζουίκ', en: 'So it stays lower than Montjuïc hill' },
        { el: 'Γιατί το έδαφος δεν άντεχε περισσότερο βάρος', en: 'Because the ground could not take more weight' },
        { el: 'Γιατί η πόλη απαγόρευε ψηλότερους πύργους', en: 'Because the city forbade any taller towers' },
        { el: 'Γιατί τελείωσαν τα χρήματα για την πέτρα', en: 'Because Gaudí ran out of money for stone' },
      ],
      explanation: {
        el:
          'Ο Γκαουντί πίστευε ότι ένα έργο ανθρώπων δεν πρέπει να στέκεται ψηλότερα από ' +
          'ό,τι έφτιαξε η φύση. Ο λόφος Μοντζουίκ είναι λίγο ψηλότερος, και εκεί σταμάτησε.',
        en:
          'Gaudí believed a human work should not stand taller than what nature made. ' +
          'Montjuïc hill is a little higher, and that is where he stopped.',
      },
    },
  },

  // --------------------------------------------------------------- casa batlló
  {
    id: 'barcelona-casa-batllo',
    cityId: 'barcelona',
    emoji: '🐉',
    category: 'art',
    difficulty: 2,

    name: { el: 'Κάζα Μπατλό', en: 'Casa Batlló' },
    tagline: {
      el: 'Ένα σπίτι με ράχη δράκου για στέγη',
      en: 'A house with a dragon’s back for a roof',
    },
    story: {
      el:
        'Το 1904 ένας πλούσιος βιομήχανος υφασμάτων, ο Ζουζέπ Μπατλό, ζήτησε από τον ' +
        'Γκαουντί να κάνει το συνηθισμένο σπίτι του, στο νούμερο 43 της λεωφόρου Πασέιτζ ' +
        'ντε Γκράσια, το πιο εντυπωσιακό του δρόμου. Ο Γκαουντί δεν το γκρέμισε· το ' +
        'μεταμόρφωσε. Έντυσε την πρόσοψη με κομμάτια σπασμένων πλακιδίων και γυαλιού που ' +
        'λαμπυρίζουν στον ήλιο, μια τεχνική που λέγεται τρενκαντίς. Γύρω από τα παράθυρα ' +
        'έβαλε κολόνες σαν κόκαλα, στα μπαλκόνια σιδερένιες μάσκες, και από πάνω μια ' +
        'στέγη με κεραμικά λέπια που κυματίζει σαν ράχη δράκου. Ο μικρός πύργος με τον ' +
        'σταυρό είναι το κοντάρι του Αγίου Γεωργίου, του προστάτη της Καταλονίας, που ' +
        'κατά τον θρύλο νίκησε έναν δράκο. Μέσα, ο φωταγωγός έχει πλακάκια σκούρα μπλε ' +
        'ψηλά και όλο και πιο ανοιχτά όσο κατεβαίνεις, με παράθυρα που μεγαλώνουν στους ' +
        'κάτω ορόφους, ώστε κάθε όροφος να παίρνει το ίδιο φως. Το σπίτι τελείωσε το ' +
        '1906. Οι γείτονες είχαν προσλάβει άλλους διάσημους αρχιτέκτονες, και το ' +
        'τετράγωνο ονομάστηκε «Τετράγωνο της Διχόνοιας», επειδή τα σπίτια του δεν ' +
        'συμφωνούν σε τίποτα μεταξύ τους.',
      en:
        'In 1904 a rich textile industrialist, Josep Batlló, asked Gaudí to turn his ' +
        'ordinary house at number 43 on the Passeig de Gràcia into the most striking one ' +
        'on the avenue. Gaudí did not knock it down; he transformed it. He dressed the ' +
        'front in pieces of broken tile and glass that shimmer in the sun, a technique ' +
        'called trencadís. Around the windows he put columns like bones, on the balconies ' +
        'iron masks, and on top a roof of ceramic scales that ripples like a dragon’s ' +
        'back. The little tower with the cross is the lance of Saint George, patron saint ' +
        'of Catalonia, who in the legend defeated a dragon. Inside, the light well is tiled ' +
        'dark blue at the top and paler and paler as you go down, with windows that get ' +
        'bigger on the lower floors, so that every floor receives the same amount of ' +
        'light. The house was finished in 1906. The neighbours had hired other famous ' +
        'architects, and the block came to be called the “Block of Discord”, because its ' +
        'houses agree on nothing at all.',
    },
    facts: [
      {
        el: 'Ο Γκαουντί το μεταμόρφωσε από το 1904 ως το 1906· δεν το έχτισε από την αρχή.',
        en: 'Gaudí transformed it between 1904 and 1906; he did not build it from scratch.',
      },
      {
        el: 'Είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO από το 2005.',
        en: 'It has been a UNESCO World Heritage Site since 2005.',
      },
      {
        el: 'Τα πλακάκια του φωταγωγού είναι σκούρα μπλε ψηλά και σχεδόν άσπρα χαμηλά.',
        en: 'The tiles of the light well are dark blue at the top and almost white at the bottom.',
      },
    ],
    location: {
      lat: 41.39158,
      lng: 2.16492,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q461371', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Casa Batlló', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.590, y: 0.579 },
      // Wikidata P6375 for Q461371 gives the street address, Passeig de Gràcia 43.
      findIt: {
        el: 'Η πόρτα είναι στη λεωφόρο Πασέιτζ ντε Γκράσια, στο νούμερο 43. Στάσου στο απέναντι πεζοδρόμιο για να δεις όλη τη στέγη.',
        en: 'The door is on the Passeig de Gràcia at number 43. Stand on the opposite pavement to see the whole roof.',
      },
    },
    question: {
      q: {
        el: 'Γιατί τα πλακάκια του φωταγωγού γίνονται πιο ανοιχτά όσο κατεβαίνεις;',
        en: 'Why do the tiles in the light well get paler the lower you go?',
      },
      answers: [
        { el: 'Για να παίρνει κάθε όροφος το ίδιο φως', en: 'So each floor is equally bright' },
        { el: 'Γιατί η μπλε μπογιά τέλειωσε στα μισά της δουλειάς', en: 'Because the blue paint ran out halfway' },
        { el: 'Για να φαίνεται το σπίτι πιο βαθύ από τη στέγη', en: 'So the house looks deeper from the roof' },
        { el: 'Γιατί τα κάτω πατώματα κόστιζαν λιγότερα χρήματα', en: 'Because the lower floors were cheaper' },
      ],
      explanation: {
        el:
          'Ψηλά μπαίνει πολύ φως, οπότε τα σκούρα πλακάκια το κρατούν. Χαμηλά μπαίνει λίγο, ' +
          'και τα ανοιχτά πλακάκια και τα μεγαλύτερα παράθυρα το πολλαπλασιάζουν.',
        en:
          'A lot of light comes in at the top, so dark tiles hold it back. Little reaches the ' +
          'bottom, and pale tiles and bigger windows make the most of it.',
      },
    },
  },

  // ------------------------------------------------------------------ casa milà
  {
    id: 'barcelona-casa-mila',
    cityId: 'barcelona',
    emoji: '🌊',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Κάζα Μιλά, «Λα Πεδρέρα»', en: 'Casa Milà, “La Pedrera”' },
    tagline: {
      el: 'Το κτίριο που η πόλη κορόιδεψε και το είπε λατομείο',
      en: 'The building the city laughed at and called a quarry',
    },
    story: {
      el:
        'Ο Πέρε Μιλά και η γυναίκα του, η Ρουζέρ, ήθελαν ένα σπίτι που θα το κοιτούσαν ' +
        'όλοι. Ο Γκαουντί τούς έχτισε, από το 1906 ως το 1912, στη γωνία της Πασέιτζ ντε ' +
        'Γκράσια με την οδό Προβένσα, ένα κτίριο από πέτρα που κυματίζει σαν βράχος που τον ' +
        'έγλειψαν τα κύματα, με σιδερένια μπαλκόνια σαν μπερδεμένα φύκια. Το μυστικό του ' +
        'είναι μέσα: το κτίριο στέκεται πάνω σε σιδερένιο σκελετό, και η πέτρινη πρόσοψη ' +
        'κρέμεται από αυτόν σαν κουρτίνα, χωρίς να κρατάει τίποτα. Έτσι οι ένοικοι ' +
        'μπορούσαν να μετακινούν τους τοίχους των δωματίων τους. Στο υπόγειο υπήρχε ένα ' +
        'από τα πρώτα γκαράζ της πόλης, σε μια εποχή που τα αυτοκίνητα ήταν σπάνια. Η ' +
        'σοφίτα στηρίζεται σε 270 τούβλινες καμάρες που μοιάζουν με τα πλευρά μιας φάλαινας, ' +
        'και στη στέγη 28 καμινάδες στέκονται σαν φρουροί με κράνη· οι ντόπιοι τις λένε ' +
        '«φοβέρες για μάγισσες». Οι Βαρκελωνέζοι στην αρχή γέλασαν και το είπαν Λα ' +
        'Πεδρέρα, «το λατομείο». Το όνομα έμεινε, και σήμερα το λένε με καμάρι. Ήταν το ' +
        'τελευταίο σπίτι που έχτισε ο Γκαουντί· μετά αφιερώθηκε μόνο στη Σαγράδα Φαμίλια.',
      en:
        'Pere Milà and his wife Roser wanted a home everyone would stare at. Between 1906 ' +
        'and 1912 Gaudí built them one on the corner of the Passeig de Gràcia and Carrer de ' +
        'Provença: a building of stone that ripples like a cliff licked by the waves, with ' +
        'iron balconies like tangled seaweed. Its secret is inside. The building stands on ' +
        'an iron frame, and the stone front hangs from it like a curtain, holding nothing ' +
        'up. That is why the tenants could move the walls of their rooms around. In the ' +
        'basement was one of the first garages in the city, at a time when cars were rare. ' +
        'The attic rests on 270 brick arches that look like the ribs of a whale, and on the ' +
        'roof 28 chimneys stand like guards in helmets; locals call them “witch-scarers”. ' +
        'At first the people of Barcelona laughed and called it La Pedrera, “the quarry”. ' +
        'The name stuck, and today they say it with pride. It was the last house Gaudí ' +
        'ever built; after it he worked only on the Sagrada Família.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1906 ως το 1912 και είναι Μνημείο της UNESCO από το 1984.',
        en: 'Built between 1906 and 1912, and a UNESCO World Heritage Site since 1984.',
      },
      {
        el: 'Η σοφίτα στηρίζεται σε 270 τούβλινες καμάρες.',
        en: 'The attic rests on 270 brick arches.',
      },
      {
        el: 'Στη στέγη στέκονται 28 καμινάδες, οι «φοβέρες για μάγισσες».',
        en: 'Twenty-eight chimneys stand on the roof, the “witch-scarers”.',
      },
    ],
    location: {
      lat: 41.39528,
      lng: 2.16167,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q207870', deltaM: 0 },
        { kind: 'wikipedia', ref: 'La Pedrera, Barcelona', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.561, y: 0.530 },
      // lapedrera.com (practical information and FAQs): the main entrance for visitors is on
      // Carrer de Provença, 261-265, round the corner from the Passeig de Gràcia.
      findIt: {
        el: 'Η είσοδος για τους επισκέπτες είναι στην οδό Προβένσα, στο νούμερο 261, ακριβώς μετά τη γωνία με την Πασέιτζ ντε Γκράσια.',
        en: 'The visitors’ entrance is on Carrer de Provença at number 261, just round the corner from the Passeig de Gràcia.',
      },
    },
    question: {
      q: {
        el: 'Τι κρατάει όρθιο το κτίριο;',
        en: 'What holds the building up?',
      },
      answers: [
        { el: 'Σιδερένιος σκελετός', en: 'An iron frame' },
        { el: 'Οι χοντροί πέτρινοι τοίχοι', en: 'Thick stone walls' },
        { el: 'Ξύλινα δοκάρια στη στέγη', en: 'Wooden roof beams' },
        { el: 'Τα σπίτια των γειτόνων', en: 'The houses next door' },
      ],
      explanation: {
        el:
          'Η πέτρινη πρόσοψη κρέμεται από τον σκελετό σαν κουρτίνα. Γι’ αυτό οι τοίχοι ' +
          'μέσα μπορούσαν να αλλάζουν θέση.',
        en:
          'The stone front hangs from the frame like a curtain. That is why the walls inside ' +
          'could be moved about.',
      },
    },
  },

  // ---------------------------------------------------------- font de canaletes
  {
    id: 'barcelona-font-de-canaletes',
    cityId: 'barcelona',
    emoji: '⛲',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Φοντ ντε Καναλέτες, στη Ράμπλα', en: 'Font de Canaletes, on La Rambla' },
    tagline: {
      el: 'Το σιντριβάνι που υπόσχεται ότι θα ξαναγυρίσεις',
      en: 'The fountain that promises you will come back',
    },
    story: {
      el:
        'Η Ράμπλα είναι ο περίπατος που κατεβαίνει από την πλατεία Καταλούνια ως το ' +
        'λιμάνι, 1,2 χιλιόμετρα κάτω από πλατάνια, ανάμεσα σε ανθοπωλεία, περίπτερα και ' +
        'μια μεγάλη όπερα, το Λισέου. Πριν από αιώνες εδώ, έξω από τα τείχη, κυλούσε ένα ' +
        'ρυάκι που είχε νερό μόνο όταν έβρεχε· οι Άραβες το έλεγαν «ράμλα», αμμουδερή ' +
        'κοίτη. Πριν από περίπου 250 χρόνια η πόλη το σκέπασε και φύτεψε δέντρα. Στην ' +
        'πραγματικότητα είναι πέντε περίπατοι στη σειρά, γι’ αυτό οι ντόπιοι λένε «Λες ' +
        'Ράμπλες», στον πληθυντικό. Στην κορυφή στέκεται ένα μικρό σιδερένιο σιντριβάνι ' +
        'με τέσσερις βρύσες και ένα φανάρι από πάνω, φτιαγμένο το 1892. Πήρε το όνομά του ' +
        'από τα μεσαιωνικά τείχη, που είχαν μέσα τους μικρά κανάλια, «καναλέτες», για το ' +
        'νερό της πόλης. Μια πλάκα στο πεζοδρόμιο λέει ότι όποιος πιει από εδώ θα ' +
        'ξαναγυρίσει στη Βαρκελώνη. Και από τη δεκαετία του 1930 οι φίλαθλοι της Μπαρτσελόνα ' +
        'πανηγυρίζουν εδώ κάθε νίκη: μια αθλητική εφημερίδα είχε τα γραφεία της δίπλα και ' +
        'έγραφε τα αποτελέσματα σε έναν πίνακα, κι ο κόσμος μαζευόταν για να τα μάθει.',
      en:
        'La Rambla is the walk that runs down from Plaça de Catalunya to the harbour, 1.2 ' +
        'kilometres under plane trees, past flower stalls, kiosks and a grand opera house, ' +
        'the Liceu. Centuries ago a stream ran here outside the city walls, carrying water ' +
        'only when it rained; the Arabs called it “ramla”, a sandy riverbed. About 250 years ' +
        'ago the city covered it over and planted trees. It is really five walks in a row, ' +
        'which is why locals say “Les Rambles”, in the plural. At the top stands a small ' +
        'iron fountain with four taps and a lamp on top, made in 1892. It takes its name ' +
        'from the medieval walls, which had little channels, “canaletes”, running through ' +
        'them to carry the city’s water. A plaque on the pavement says that whoever drinks ' +
        'here will come back to Barcelona. And since the 1930s the fans of FC Barcelona have ' +
        'celebrated every win on this spot: a sports newspaper had its offices next door ' +
        'and chalked the results onto a board, so people gathered here to find them out.',
    },
    facts: [
      {
        el: 'Το σημερινό σιντριβάνι φτιάχτηκε το 1892.',
        en: 'The present fountain was made in 1892.',
      },
      {
        el: 'Η Ράμπλα έχει μήκος περίπου 1,2 χιλιόμετρα, από την πλατεία Καταλούνια ως το λιμάνι.',
        en: 'La Rambla runs for about 1.2 kilometres, from Plaça de Catalunya to the harbour.',
      },
      {
        el: 'Οι φίλαθλοι της Μπαρτσελόνα πανηγυρίζουν εδώ από τη δεκαετία του 1930.',
        en: 'FC Barcelona’s fans have celebrated here since the 1930s.',
      },
    ],
    location: {
      lat: 41.38528,
      lng: 2.17014,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2723971', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Font de Canaletes', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.638, y: 0.663 },
    },
    question: {
      q: {
        el: 'Γιατί άρχισαν οι φίλαθλοι να μαζεύονται σε αυτό το σιντριβάνι;',
        en: 'Why did football fans first start gathering at this fountain?',
      },
      answers: [
        { el: 'Μια εφημερίδα κρεμούσε εδώ τα σκορ', en: 'A newspaper posted results here' },
        { el: 'Εδώ βρισκόταν το πρώτο γήπεδο της ομάδας', en: 'The team’s first stadium stood here' },
        { el: 'Οι παίκτες έπιναν από εδώ πριν τους αγώνες', en: 'The players drank from it before games' },
        { el: 'Ο ιδρυτής της ομάδας έμενε στο διπλανό σπίτι', en: 'The club’s founder lived in the next house' },
      ],
      explanation: {
        el:
          'Πριν από το ραδιόφωνο, τα αποτελέσματα τα μάθαινες όπου τα έγραφαν. Η ' +
          'εφημερίδα έφυγε, η συνήθεια έμεινε.',
        en:
          'Before radio, you learned the score wherever somebody wrote it up. The newspaper ' +
          'moved away; the habit stayed.',
      },
    },
  },

  // ------------------------------------------------------------------- boqueria
  {
    id: 'barcelona-boqueria',
    cityId: 'barcelona',
    emoji: '🍓',
    category: 'food',
    difficulty: 1,

    name: { el: 'Αγορά της Μποκερία', en: 'La Boqueria market' },
    tagline: {
      el: 'Σε αυτό το σημείο πουλάνε φαγητό εδώ και 800 χρόνια',
      en: 'Food has been sold on this spot for 800 years',
    },
    story: {
      el:
        'Το 1217 χωρικοί έστησαν τραπέζια έξω από την πύλη της πόλης, σε αυτό ακριβώς το ' +
        'σημείο, και πουλούσαν κρέας. Μέσα στα τείχη δεν υπήρχε χώρος, κι έτσι η αγορά ' +
        'έμεινε έξω και μεγάλωσε. Το όνομά της μάλλον βγαίνει από το «μποκ», που στα ' +
        'καταλανικά σημαίνει τράγος. Για αιώνες δίπλα της στεκόταν ένα μοναστήρι, το ' +
        'μοναστήρι του Αγίου Ιωσήφ, που γκρεμίστηκε το 1835. Στη θέση του η πόλη αποφάσισε ' +
        'να χτίσει κανονική αγορά, και ο θεμέλιος λίθος μπήκε στις 19 Μαρτίου 1840, ' +
        'ανήμερα της γιορτής του αγίου· γι’ αυτό το επίσημο όνομά της είναι Αγορά του Σαν ' +
        'Ζουζέπ. Το 1914 τη σκέπασαν με τη μεγάλη σιδερένια στέγη που βλέπεις σήμερα, και ' +
        'πάνω από την είσοδο έβαλαν μια επιγραφή από χρωματιστό γυαλί. Μέσα, εκατοντάδες ' +
        'πάγκοι πουλάνε φρούτα, χυμούς σε όλα τα χρώματα, ψάρια πάνω σε πάγο, γλυκά, ' +
        'ξηρούς καρπούς και χαμόν, το χοιρομέρι που αλατίζουν και το κρεμούν να στεγνώσει ' +
        'για μήνες. Οι μάγειρες των καλύτερων εστιατορίων ψωνίζουν εδώ νωρίς το πρωί. Τις ' +
        'Κυριακές η αγορά είναι κλειστή.',
      en:
        'In 1217 farmers set up tables outside the city gate on this very spot and sold ' +
        'meat. There was no room inside the walls, so the market stayed outside and kept ' +
        'growing. Its name probably comes from “boc”, the Catalan word for a goat. For ' +
        'centuries a convent stood beside it, the convent of Saint Joseph, which was pulled ' +
        'down in 1835. In its place the city decided to build a proper market, and the ' +
        'first stone was laid on 19 March 1840, the saint’s feast day; that is why its ' +
        'official name is the Mercat de Sant Josep. In 1914 it was covered with the big ' +
        'iron roof you see today, and a sign of coloured glass went up over the entrance. ' +
        'Inside, hundreds of stalls sell fruit, juices in every colour, fish on ice, sweets, ' +
        'nuts and jamón, the ham that is salted and hung up to dry for months. The chefs of ' +
        'the best restaurants shop here early in the morning. On Sundays the market is ' +
        'closed.',
    },
    facts: [
      {
        el: 'Η πρώτη αναφορά σε αγορά σε αυτό το σημείο είναι από το 1217.',
        en: 'The first mention of a market on this spot dates from 1217.',
      },
      {
        el: 'Ο θεμέλιος λίθος μπήκε στις 19 Μαρτίου 1840, τη γιορτή του Αγίου Ιωσήφ.',
        en: 'The first stone was laid on 19 March 1840, Saint Joseph’s day.',
      },
      {
        el: 'Η σιδερένια στέγη της είναι από το 1914.',
        en: 'Its iron roof dates from 1914.',
      },
    ],
    location: {
      lat: 41.3818,
      lng: 2.17155,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1334899', deltaM: 0 },
        { kind: 'wikipedia', ref: 'La Boqueria', deltaM: 37 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone. Wikipedia sits 37 m away, which is ordinary for a building this size.',
      map: { x: 0.650, y: 0.709 },
    },
    question: {
      q: {
        el: 'Τι υπήρχε σε αυτό το σημείο πριν χτιστεί η σκεπαστή αγορά;',
        en: 'What stood on this spot before the covered market was built?',
      },
      answers: [
        { el: 'Ένα μοναστήρι', en: 'A convent' },
        { el: 'Ένας πύργος κάστρου', en: 'A castle tower' },
        { el: 'Ένα ψαρολίμανο', en: 'A fish harbour' },
        { el: 'Ένας βασιλικός κήπος', en: 'A royal garden' },
      ],
      explanation: {
        el:
          'Το μοναστήρι του Αγίου Ιωσήφ γκρεμίστηκε το 1835. Πέντε χρόνια μετά, στη γιορτή ' +
          'του αγίου, μπήκε ο θεμέλιος λίθος της αγοράς που πήρε το όνομά του.',
        en:
          'The convent of Saint Joseph came down in 1835. Five years later, on the saint’s ' +
          'day, the first stone of the market that carries his name was laid.',
      },
    },
  },

  // ------------------------------------------------------------------ cathedral
  {
    id: 'barcelona-cathedral',
    cityId: 'barcelona',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Καθεδρικός της Βαρκελώνης', en: 'Barcelona Cathedral' },
    tagline: {
      el: 'Δεκατρείς χήνες ζουν στον κήπο του',
      en: 'Thirteen geese live in its garden',
    },
    story: {
      el:
        'Οι χτίστες ξεκίνησαν αυτή την εκκλησία το 1298 και δούλεψαν περίπου 150 χρόνια, ' +
        'με ψηλές καμάρες και λεπτές κολόνες, στο στιλ που λέμε γοτθικό· το περιστύλιο, ο ' +
        'σκεπαστός κήπος της, τελείωσε το 1448. Η μπροστινή όψη με τους μυτερούς πύργους ' +
        'είναι όμως πολύ πιο καινούργια: χτίστηκε από το 1887 ως το 1913, με σχέδια που ' +
        'είχαν μείνει στο συρτάρι από το 1408. Η εκκλησία είναι αφιερωμένη στην Αγία ' +
        'Ευλαλία, ένα κορίτσι από τη Βαρκελώνη που έζησε την εποχή των Ρωμαίων, πριν από ' +
        'περίπου 1.700 χρόνια. Ήταν δεκατριών χρονών όταν αρνήθηκε να απαρνηθεί την πίστη ' +
        'της, και πέθανε γι’ αυτό. Ο τάφος της βρίσκεται στην κρύπτη, κάτω από το ιερό. Γι’ ' +
        'αυτό στο περιστύλιο ζουν δεκατρείς άσπρες χήνες, μία για κάθε χρόνο της ζωής ' +
        'της· είναι εξαιρετικοί φύλακες, γιατί κακαρίζουν δυνατά μόλις πλησιάσει ξένος. ' +
        'Μία μέρα τον χρόνο, τη γιορτή της Αγίας Δωρεάς, ένα άδειο τσόφλι αυγού χορεύει ' +
        'πάνω στον πίδακα του σιντριβανιού του κήπου, μια συνήθεια που κρατάει από τον 16ο ' +
        'αιώνα. Και τις Κυριακές, στην πλατεία μπροστά, ο κόσμος πιάνεται χέρι χέρι και ' +
        'χορεύει σαρντάνα, τον χορό της Καταλονίας.',
      en:
        'Builders started this church in 1298 and worked for about 150 years, with tall ' +
        'arches and slender columns in the style we call Gothic; the cloister, its covered ' +
        'garden, was finished in 1448. The front with the pointed towers is much newer, ' +
        'though: it was built between 1887 and 1913, from drawings that had waited in a ' +
        'drawer since 1408. The church is dedicated to Saint Eulàlia, a girl from Barcelona ' +
        'who lived in Roman times, about 1,700 years ago. She was thirteen when she refused ' +
        'to give up her faith, and she died for it. Her tomb is in the crypt below the ' +
        'altar. That is why thirteen white geese live in the cloister, one for every year ' +
        'of her life; they make excellent guards, because they honk loudly the moment a ' +
        'stranger comes near. One day a year, at the feast of Corpus Christi, an empty ' +
        'eggshell is set dancing on the jet of the garden fountain, a custom kept since the ' +
        '16th century. And on Sundays, in the square in front, people join hands and dance ' +
        'the sardana, the dance of Catalonia.',
    },
    facts: [
      {
        el: 'Το χτίσιμο ξεκίνησε το 1298 και το περιστύλιο τελείωσε το 1448.',
        en: 'Building began in 1298 and the cloister was finished in 1448.',
      },
      {
        el: 'Η πρόσοψη με τους μυτερούς πύργους είναι από το 1887–1913, πάνω σε σχέδιο του 1408.',
        en: 'The front with the pointed towers dates from 1887–1913, based on a drawing of 1408.',
      },
      {
        el: 'Δεκατρείς χήνες ζουν στο περιστύλιο, όσα τα χρόνια της Αγίας Ευλαλίας.',
        en: 'Thirteen geese live in the cloister, one for each year of Saint Eulàlia’s life.',
      },
    ],
    location: {
      lat: 41.38389,
      lng: 2.17639,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q17155', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Barcelona Cathedral', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.694, y: 0.681 },
    },
    question: {
      q: {
        el: 'Γιατί οι χήνες στο περιστύλιο είναι ακριβώς δεκατρείς;',
        en: 'Why are there exactly thirteen geese in the cloister?',
      },
      answers: [
        { el: 'Μία για κάθε χρόνο της ζωής της', en: 'One for each year she lived' },
        { el: 'Μία για κάθε καμπάνα του καμπαναριού', en: 'One for each bell in the tower' },
        { el: 'Μία για κάθε παρεκκλήσι του περιστυλίου', en: 'One for each chapel in the cloister' },
        { el: 'Μία για κάθε παλιά πύλη της πόλης', en: 'One for each of the city’s old gates' },
      ],
      explanation: {
        el:
          'Η Αγία Ευλαλία ήταν δεκατριών χρονών. Οι χήνες μετράνε τα χρόνια της, και ' +
          'ταυτόχρονα φυλάνε τον κήπο.',
        en:
          'Saint Eulàlia was thirteen years old. The geese count her years, and guard the ' +
          'garden while they are at it.',
      },
    },
  },

  // ---------------------------------------------------------------- plaça reial
  {
    id: 'barcelona-placa-reial',
    cityId: 'barcelona',
    emoji: '🌴',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πλάσα Ρεϊάλ', en: 'Plaça Reial' },
    tagline: {
      el: 'Εδώ ξεκίνησε ο Γκαουντί, με δύο φανάρια',
      en: 'Where Gaudí’s career began, with two lamp posts',
    },
    story: {
      el:
        'Κάποτε εδώ υπήρχε ένα μοναστήρι Καπουτσίνων με μεγάλο κήπο. Γκρεμίστηκε το 1835, ' +
        'και η πόλη αποφάσισε να χτίσει στη θέση του μια μεγαλόπρεπη πλατεία με καμάρες ' +
        'γύρω γύρω, όπως στις πλατείες της Γαλλίας. Τη σχεδίασε ο αρχιτέκτονας Φρανσέσκ ' +
        'Ντανιέλ Μολίνα στα μέσα του 19ου αιώνα. Φύτεψαν ψηλούς φοίνικες, και στη μέση ' +
        'έβαλαν ένα σιντριβάνι με τις Τρεις Χάριτες, τις θεές της ομορφιάς και της χαράς ' +
        'από την ελληνική μυθολογία. Τον Μάρτιο του 1878 ένας νεαρός σπουδαστής της ' +
        'αρχιτεκτονικής, ο Αντόνι Γκαουντί, 25 χρονών, πήρε την πρώτη του δουλειά από τον ' +
        'δήμο δύο μήνες πριν πάρει καν το πτυχίο του: δύο φανάρια με έξι μπράτσα το ' +
        'καθένα. Στην κορυφή τους ' +
        'έβαλε ένα φτερωτό κράνος και δύο φίδια τυλιγμένα σε ραβδί, τα σύμβολα του Ερμή, ' +
        'του θεού των εμπόρων και των ταξιδιωτών, γιατί η πλατεία ήταν γεμάτη και από τους ' +
        'δύο. Σήμερα κάτω από τις καμάρες υπάρχουν καφέ και εστιατόρια, τις Κυριακές το ' +
        'πρωί συλλέκτες ανταλλάσσουν γραμματόσημα και νομίσματα, και τον Σεπτέμβριο, στη ' +
        'γιορτή της Μερσέ, η πλατεία γεμίζει συναυλίες. Όλοι ξεκινούν από κάπου. Ο ' +
        'Γκαουντί ξεκίνησε από ένα φανάρι.',
      en:
        'A Capuchin convent with a big garden once stood here. It was demolished in 1835, ' +
        'and the city decided to build a grand square in its place, with arcades all the ' +
        'way round like the squares of France. The architect Francesc Daniel Molina ' +
        'designed it in the middle of the 19th century. Tall palm trees were planted, and in ' +
        'the middle went a fountain of the Three Graces, the goddesses of beauty and joy ' +
        'from Greek mythology. In March 1878 a young architecture student, Antoni ' +
        'Gaudí, aged 25, got his first job from the city council two months before he was ' +
        'even given his degree: two lamp posts with six arms each. On top of them he put ' +
        'a winged helmet and two snakes wound around a ' +
        'staff, the symbols of Hermes, god of merchants and travellers, because the square ' +
        'was full of both. Today there are cafés and restaurants under the arcades, on ' +
        'Sunday mornings collectors swap stamps and coins, and in September, at the ' +
        'festival of La Mercè, the square fills with concerts. Everyone starts somewhere. ' +
        'Gaudí started with a lamp post.',
    },
    facts: [
      {
        el: 'Στη θέση της πλατείας υπήρχε μοναστήρι Καπουτσίνων, που γκρεμίστηκε το 1835.',
        en: 'A Capuchin convent stood where the square is; it was demolished in 1835.',
      },
      {
        el: 'Τα δύο φανάρια είναι η πρώτη δημόσια δουλειά του Γκαουντί, το 1878, πριν καν πάρει το πτυχίο του.',
        en: 'The two lamp posts were Gaudí’s first public commission, in 1878, before he even had his degree.',
      },
      {
        el: 'Το σιντριβάνι στη μέση δείχνει τις Τρεις Χάριτες.',
        en: 'The fountain in the middle shows the Three Graces.',
      },
    ],
    location: {
      lat: 41.38,
      lng: 2.175,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1519964', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Royal Square (Barcelona)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.682, y: 0.733 },
    },
    question: {
      q: {
        el: 'Ποια ήταν η πρώτη δουλειά του Γκαουντί για τον δήμο;',
        en: 'What was Gaudí’s very first job for the city?',
      },
      answers: [
        { el: 'Δύο φανάρια', en: 'Two lamp posts' },
        { el: 'Μια βρύση με πόσιμο νερό', en: 'A drinking fountain' },
        { el: 'Μια σειρά από παγκάκια', en: 'A row of park benches' },
        { el: 'Ο κήπος με τους φοίνικες', en: 'The palm-tree garden' },
      ],
      explanation: {
        el:
          'Ήταν 25 χρονών και πήρε το πτυχίο του δύο μήνες αργότερα. Το ' +
          'φτερωτό κράνος στην κορυφή είναι του Ερμή.',
        en:
          'He was 25, and his degree came through two months later. The winged helmet on ' +
          'top belongs to Hermes.',
      },
    },
  },

  // ---------------------------------------------------------- columbus monument
  {
    id: 'barcelona-columbus-monument',
    cityId: 'barcelona',
    emoji: '🧭',
    category: 'history',
    difficulty: 2,

    name: { el: 'Μνημείο του Κολόμβου', en: 'The Columbus Monument' },
    tagline: {
      el: 'Ένα μνημείο 60 μέτρων με έναν θαλασσοπόρο στην κορυφή',
      en: 'A 60-metre monument with a sailor on top',
    },
    story: {
      el:
        'Την άνοιξη του 1493 ο Χριστόφορος Κολόμβος γύρισε από το πρώτο του ταξίδι στην ' +
        'άλλη άκρη του ωκεανού και ήρθε στη Βαρκελώνη, όπου τον υποδέχτηκαν ο βασιλιάς ' +
        'Φερδινάνδος και η βασίλισσα Ισαβέλλα. Τους έδειξε παπαγάλους, άγνωστα φυτά και ' +
        'λίγο χρυσάφι. Είχε κάνει λάθος στους υπολογισμούς του: νόμιζε ότι πλέοντας δυτικά ' +
        'θα έφτανε στην Ινδία, και ανάμεσα βρισκόταν μια ολόκληρη ήπειρος. Τα ταξίδια του ' +
        'άλλαξαν τον κόσμο, αλλά για τους ανθρώπους που ζούσαν ήδη σε εκείνη την ήπειρο ' +
        'ό,τι ακολούθησε ήταν σκληρό, και γι’ αυτό σήμερα πολλές πόλεις συζητούν τι να ' +
        'κάνουν με αγάλματα σαν αυτό. Τετρακόσια χρόνια αργότερα, για την Παγκόσμια ' +
        'Έκθεση του 1888, η Βαρκελώνη έστησε στο τέλος της Ράμπλα αυτό το μνημείο: μια ' +
        'κολόνα με έναν μπρούντζινο Κολόμβο 7 μέτρων στην κορυφή, 60 μέτρα ψηλό όλο μαζί. ' +
        'Στη βάση της ' +
        'φυλάνε οκτώ μπρούντζινα λιοντάρια, και μέσα της ένα μικρό ασανσέρ ανεβάζει τους ' +
        'επισκέπτες σε ένα μπαλκονάκι κάτω από τα πόδια του. Το δάχτυλό του δείχνει προς ' +
        'τα νοτιοανατολικά, προς την ανοιχτή θάλασσα, από όπου ξεκινούν όλα τα ταξίδια, ' +
        'και όχι προς την Αμερική, που βρίσκεται πίσω του, στη δύση.',
      en:
        'In the spring of 1493 Christopher Columbus came back from his first voyage across ' +
        'the ocean and travelled to Barcelona, where King Ferdinand and Queen Isabella ' +
        'received him. He showed them parrots, unknown plants and a little gold. His sums ' +
        'had been wrong: he thought that by sailing west he would reach India, and a whole ' +
        'continent lay in between. His voyages changed the world, but for the people who ' +
        'already lived on that continent what followed was harsh, which is why many cities ' +
        'today argue about what to do with statues like this one. Four hundred years later, ' +
        'for the World’s Fair of 1888, Barcelona raised this monument at the bottom of La ' +
        'Rambla: a column with a 7-metre bronze Columbus on top, 60 metres tall all ' +
        'together. Eight bronze lions ' +
        'guard its base, and inside it a tiny lift carries visitors up to a little balcony ' +
        'beneath his feet. His finger points south-east, towards the open sea where every ' +
        'voyage begins, and not towards America, which lies behind him to the west.',
    },
    facts: [
      {
        el: 'Στήθηκε το 1888, για την Παγκόσμια Έκθεση της Βαρκελώνης.',
        en: 'It was raised in 1888, for the Barcelona World’s Fair.',
      },
      {
        el: 'Το μνημείο φτάνει συνολικά τα 60 μέτρα, και τα 7 από αυτά είναι ο μπρούντζινος Κολόμβος.',
        en: 'The monument reaches 60 metres in all, and 7 of those are the bronze Columbus.',
      },
      {
        el: 'Οκτώ μπρούντζινα λιοντάρια φυλάνε τις τέσσερις σκάλες της βάσης.',
        en: 'Eight bronze lions guard the four staircases of the base.',
      },
    ],
    location: {
      lat: 41.3758,
      lng: 2.17776,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2288815', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Columbus Monument, Barcelona', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.707, y: 0.789 },
    },
    question: {
      q: {
        el: 'Πού δείχνει ο Κολόμβος με το δάχτυλό του;',
        en: 'Where does Columbus point his finger?',
      },
      answers: [
        { el: 'Στη θάλασσα', en: 'Out to sea' },
        { el: 'Προς την Αμερική', en: 'Towards America' },
        { el: 'Προς τον καθεδρικό', en: 'At the cathedral' },
        { el: 'Ψηλά προς τον ουρανό', en: 'Up at the sky' },
      ],
      explanation: {
        el:
          'Δείχνει νοτιοανατολικά, προς την ανοιχτή θάλασσα. Η Αμερική είναι στην ' +
          'αντίθετη κατεύθυνση, πίσω από την πλάτη του.',
        en:
          'He points south-east, to the open sea. America is in the opposite direction, ' +
          'behind his back.',
      },
    },
  },

  // -------------------------------------------------------------- arc de triomf
  {
    id: 'barcelona-arc-de-triomf',
    cityId: 'barcelona',
    emoji: '🧱',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Αρκ ντε Τριόμφ', en: 'Arc de Triomf' },
    tagline: {
      el: 'Μια πύλη για γιορτή, όχι για στρατό',
      en: 'A gate built for a party, not for an army',
    },
    story: {
      el:
        'Το 1888 η Βαρκελώνη έκανε ένα τεράστιο πάρτι: την Παγκόσμια Έκθεση, όπου χώρες ' +
        'από όλο τον κόσμο έδειχναν τις πιο καινούργιες μηχανές και εφευρέσεις τους. Η ' +
        'γιορτή έγινε στο πάρκο Σιουταδέγια, εκεί όπου παλιά στεκόταν ένα τεράστιο ' +
        'φρούριο, χτισμένο μετά το 1714 από τον βασιλιά Φίλιππο τον Ε΄ για να επιτηρεί μια ' +
        'πόλη που είχε πολεμήσει εναντίον του· οι κάτοικοι δεν το συμπάθησαν ποτέ, και ' +
        'τον 19ο αιώνα το γκρέμισαν για να γίνει πάρκο. Αυτή η αψίδα ήταν η μπροστινή ' +
        'πόρτα της έκθεσης. Ο αρχιτέκτονας Ζουζέπ Βιλασέκα δεν διάλεξε άσπρο μάρμαρο, ' +
        'όπως στις αψίδες των Ρωμαίων, αλλά κόκκινα τούβλα και σχέδια σαν των αραβικών ' +
        'παλατιών της Ισπανίας. Είναι σχεδόν 30 μέτρα ψηλή. Στην πρόσοψη ένα πέτρινο ' +
        'ανάγλυφο δείχνει τη Βαρκελώνη να υποδέχεται τα έθνη, στην κορυφή στέκουν το ' +
        'οικόσημο της πόλης και τα οικόσημα των επαρχιών της Ισπανίας, και στις κολόνες ' +
        'είναι σκαλισμένες μικρές νυχτερίδες, παλιό τυχερό σύμβολο του βασιλιά Ζάουμε ' +
        'του Α΄. Όταν η έκθεση τελείωσε, η αψίδα έμεινε, σαν ενθύμιο από μια γιορτή. Είναι ' +
        'μνημείο όχι για μάχες, αλλά για ιδέες.',
      en:
        'In 1888 Barcelona threw a huge party: the World’s Fair, where countries from all ' +
        'over the world showed off their newest machines and inventions. The party took ' +
        'place in the Ciutadella park, where a giant fortress had once stood, built after ' +
        '1714 by King Philip V to keep watch over a city that had fought against him; the ' +
        'citizens never liked it, and in the 19th century it was pulled down to make a ' +
        'park. This arch was the front door of the fair. The architect Josep Vilaseca chose ' +
        'not white marble, like the arches of the Romans, but red brick and patterns like ' +
        'those of the Arab palaces of Spain. It is almost 30 metres tall. On the front a ' +
        'stone frieze shows Barcelona welcoming the nations, on top stand the shield of the ' +
        'city and the shields of the provinces of Spain, and on the pillars little bats are ' +
        'carved, an old lucky symbol of King Jaume I. When the fair was over, the arch ' +
        'stayed, as a souvenir of a celebration. It is a monument not to battles, but to ' +
        'ideas.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1888 ως η κύρια είσοδος της Παγκόσμιας Έκθεσης.',
        en: 'It was built in 1888 as the main entrance of the World’s Fair.',
      },
      {
        el: 'Είναι από κόκκινο τούβλο και φτάνει σχεδόν τα 30 μέτρα.',
        en: 'It is made of red brick and stands almost 30 metres tall.',
      },
      {
        el: 'Στις κολόνες της είναι σκαλισμένες νυχτερίδες, σύμβολο του βασιλιά Ζάουμε του Α΄.',
        en: 'Bats are carved on its pillars, a symbol of King Jaume I.',
      },
    ],
    location: {
      lat: 41.39111,
      lng: 2.18056,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q631075', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Arc de Triomf', deltaM: 31 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone. Wikipedia sits 31 m away, which is ordinary for a building this size.',
      map: { x: 0.732, y: 0.585 },
    },
    question: {
      q: {
        el: 'Για ποιον λόγο χτίστηκε αυτή η αψίδα;',
        en: 'What was this arch built as?',
      },
      answers: [
        { el: 'Η είσοδος μιας έκθεσης', en: 'The entrance to a fair' },
        { el: 'Μνημείο για μια μεγάλη μάχη', en: 'A monument to a famous battle' },
        { el: 'Πύλη στα παλιά τείχη της πόλης', en: 'A gate in the old city walls' },
        { el: 'Γέφυρα για μια σιδηροδρομική γραμμή', en: 'A bridge for a railway line' },
      ],
      explanation: {
        el:
          'Οι περισσότερες αψίδες του θριάμβου γιορτάζουν νίκες σε πολέμους. Αυτή γιόρτασε ' +
          'εφευρέσεις: ήταν η μπροστινή πόρτα της Παγκόσμιας Έκθεσης του 1888.',
        en:
          'Most triumphal arches celebrate victories in war. This one celebrated inventions: ' +
          'it was the front door of the World’s Fair of 1888.',
      },
    },
  },

  // ----------------------------------------------------------------- park güell
  {
    id: 'barcelona-park-guell',
    cityId: 'barcelona',
    emoji: '🦎',
    category: 'art',
    difficulty: 2,

    name: { el: 'Πάρκο Γκουέλ', en: 'Park Güell' },
    tagline: {
      el: 'Μια γειτονιά που δεν αγόρασε κανείς και έγινε πάρκο',
      en: 'A neighbourhood nobody bought, that became a park',
    },
    story: {
      el:
        'Γύρω στο 1900 ο Εουζέμπι Γκουέλ, πλούσιος επιχειρηματίας και ο καλύτερος φίλος ' +
        'του Γκαουντί, αγόρασε έναν γυμνό λόφο με θέα τη θάλασσα και του ζήτησε να ' +
        'σχεδιάσει μια γειτονιά με εξήντα οικόπεδα και σπίτια μέσα σε κήπους, όπως οι ' +
        'αγγλικές κηπουπόλεις· γι’ αυτό γράφεται «Park», με την αγγλική γραφή. Από το 1900 ' +
        'ως το 1914 ο Γκαουντί έφτιαξε δρόμους και γέφυρες πάνω σε γερτές πέτρινες κολόνες ' +
        'σαν κορμούς δέντρων, μια αίθουσα με 86 κολόνες που θα γινόταν η αγορά, και από ' +
        'πάνω της μια μεγάλη βεράντα με ένα κυματιστό παγκάκι 110 μέτρων, ντυμένο με ' +
        'σπασμένα πλακάκια μαζί με τον βοηθό του, τον Ζουζέπ Μαρία Ζουζόλ. Στη σκάλα ' +
        'περιμένει μια σαύρα από ψηφιδωτό, που όλοι τη λένε «ο δράκος». Η βεράντα είναι ' +
        'και μηχανή: το νερό της βροχής περνάει μέσα από την άμμο της, κατεβαίνει από τις ' +
        'κούφιες κολόνες και μαζεύεται σε μια υπόγεια δεξαμενή 1.200 κυβικών μέτρων. Όταν ' +
        'γεμίσει, το νερό που περισσεύει βγαίνει από το στόμα του δράκου. Όμως μόνο δύο ' +
        'σπίτια πουλήθηκαν: ο λόφος ήταν μακριά και απότομος. Ο ίδιος ο Γκαουντί έμεινε ' +
        'στο ένα από το 1906. Το 1926 η πόλη το έκανε δημόσιο πάρκο, και από το 1984 είναι ' +
        'Μνημείο της UNESCO.',
      en:
        'Around 1900 Eusebi Güell, a rich businessman and Gaudí’s best friend, bought a ' +
        'bare hill with a view of the sea and asked him to design a neighbourhood of sixty ' +
        'plots with houses set in gardens, like the English garden cities; that is why it ' +
        'is spelled “Park”, the English way. Between 1900 and 1914 Gaudí built roads and ' +
        'bridges on leaning stone columns like tree trunks, a hall of 86 columns that was to ' +
        'be the market, and above it a big terrace with a wavy bench 110 metres long, ' +
        'dressed in broken tiles together with his helper Josep Maria Jujol. On the ' +
        'staircase waits a mosaic lizard that everyone calls “the dragon”. The terrace is ' +
        'also a machine: rainwater seeps through its sand, runs down inside the hollow ' +
        'columns and gathers in an underground tank of 1,200 cubic metres. When the tank ' +
        'is full, the overflow comes out of the dragon’s mouth. But only two houses were ' +
        'ever sold: the hill was far away and steep. Gaudí himself lived in one of them ' +
        'from 1906. In 1926 the city turned it into a public park, and since 1984 it has ' +
        'been a UNESCO World Heritage Site.',
    },
    facts: [
      {
        el: 'Το σχέδιο είχε 60 οικόπεδα. Πουλήθηκαν μόνο δύο.',
        en: 'The plan had 60 plots. Only two were sold.',
      },
      {
        el: 'Η αίθουσα που θα γινόταν αγορά έχει 86 κολόνες.',
        en: 'The hall that was meant to be the market has 86 columns.',
      },
      {
        el: 'Έγινε δημόσιο πάρκο το 1926 και Μνημείο της UNESCO το 1984.',
        en: 'It became a public park in 1926 and a UNESCO World Heritage Site in 1984.',
      },
    ],
    location: {
      lat: 41.41361,
      lng: 2.15278,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q212867', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Park Güell', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.480, y: 0.285 },
      // parkguell.barcelona/en/planning-your-visit/how-to-get-there: recommended entrances are
      // Carretera del Carmel 23, Carrer de Larrard, and Avinguda del Santuari de Sant Josep
      // de la Muntanya, which has escalators up the hill.
      findIt: {
        el: 'Το πάρκο έχει πολλές πύλες. Για τη ζώνη με τον δράκο, οι πιο εύκολες είναι στην οδό Λαράρντ και στη λεωφόρο Σαντουάρι ντε Σαν Ζουζέπ ντε λα Μουντάνια, όπου κυλιόμενες σκάλες ανεβαίνουν τον λόφο.',
        en: 'The park has several gates. For the zone with the dragon, the easiest are on Carrer de Larrard and on Avinguda del Santuari de Sant Josep de la Muntanya, where escalators climb the hill.',
      },
    },
    question: {
      q: {
        el: 'Τι βγαίνει από το στόμα του δράκου όταν βρέχει πολύ;',
        en: 'What comes out of the dragon’s mouth when it rains a lot?',
      },
      answers: [
        { el: 'Νερό από μια δεξαμενή', en: 'Overflow from a tank' },
        { el: 'Καπνός από μια κρυμμένη καμινάδα', en: 'Smoke from a hidden chimney' },
        { el: 'Άμμος που ξεπλένεται από τη βεράντα', en: 'Sand washed off the terrace' },
        { el: 'Τίποτα, είναι μόνο ένα άγαλμα', en: 'Nothing, it is only a statue' },
      ],
      explanation: {
        el:
          'Η βεράντα μαζεύει τη βροχή, οι κούφιες κολόνες την κατεβάζουν, και η δεξαμενή ' +
          'από κάτω χωράει 1.200 κυβικά μέτρα. Ο δράκος είναι η υπερχείλιση.',
        en:
          'The terrace collects the rain, the hollow columns carry it down, and the tank ' +
          'underneath holds 1,200 cubic metres. The dragon is the overflow.',
      },
    },
  },

  // ----------------------------------------------------------------- cosmocaixa
  {
    id: 'barcelona-cosmocaixa',
    cityId: 'barcelona',
    emoji: '🔬',
    category: 'museum',
    difficulty: 2,

    name: { el: 'ΚοσμοΚάισα', en: 'CosmoCaixa' },
    tagline: {
      el: 'Ένα κομμάτι του Αμαζονίου μέσα σε μουσείο επιστήμης',
      en: 'A piece of the Amazon inside a science museum',
    },
    story: {
      el:
        'Το κτίριο στην πλαγιά του Τιμπιντάμπο χτίστηκε από το 1904 ως το 1909, από τον ' +
        'αρχιτέκτονα Ζουζέπ Ντουμένεκ ι Εστάπα, ως σπίτι για τυφλούς. Το 1981 έγινε ' +
        'μουσείο επιστήμης, και το 2004 ξανάνοιξε τέσσερις φορές μεγαλύτερο, με το ' +
        'περισσότερο κομμάτι του κάτω από τη γη. Μπαίνεις από ψηλά και κατεβαίνεις μια ' +
        'ράμπα που στριφογυρίζει γύρω από ένα αληθινό δέντρο του Αμαζονίου, μια ακαρικουάρα ' +
        'πάνω από 300 χρόνων, που πέθανε μόνη της στο δάσος και τη μετέφεραν εδώ. Στο ' +
        'βάθος σε περιμένει το Πλημμυρισμένο Δάσος: χίλια τετραγωνικά μέτρα Αμαζονίου με ' +
        'πάνω από εκατό είδη, όπου καπιμπάρες και καϊμάν κολυμπούν ανάμεσα στα φυτά, ' +
        'πιράνχας κοιτάζουν πίσω από το γυαλί και μυρμήγκια κουβαλούν κομμένα φύλλα, και ' +
        'όπου κάθε τόσο βρέχει. Λίγο πιο πέρα στέκεται ο Γεωλογικός Τοίχος, εφτά τεράστια ' +
        'κομμάτια αληθινού βράχου που δείχνουν πώς φτιάχτηκε ο πλανήτης, και ένα εκκρεμές ' +
        'με μακρύ σύρμα και βαριά μπάλα που αποδεικνύει ότι η Γη γυρίζει. Υπάρχει και ' +
        'πλανητάριο. Είναι ένα μουσείο όπου επιτρέπεται να αγγίζεις, και για παιδιά κάτω ' +
        'από 16 η είσοδος είναι δωρεάν.',
      en:
        'The building on the slope of Tibidabo went up between 1904 and 1909, designed by ' +
        'the architect Josep Domènech i Estapà as a home for blind people. In 1981 it became ' +
        'a science museum, and in 2004 it reopened four times bigger, with most of it ' +
        'underground. You enter at the top and walk down a ramp that spirals around a real ' +
        'Amazonian tree, an acariquara more than 300 years old, which died on its own in ' +
        'the forest and was brought here. At the bottom the Flooded Forest is waiting: a ' +
        'thousand square metres of Amazon with more than a hundred species, where capybaras ' +
        'and caimans swim among the plants, piranhas stare back through the glass, ants ' +
        'carry cut leaves, and every so often it rains. A little further on stands the ' +
        'Geological Wall, seven huge slabs of real rock that show how the planet was made, ' +
        'and a pendulum with a long wire and a heavy ball that proves the Earth is turning. ' +
        'There is a planetarium too. It is a museum where touching is allowed, and for ' +
        'children under 16 the entrance is free.',
    },
    facts: [
      {
        el: 'Ξανάνοιξε το 2004, μέσα και κάτω από ένα κτίριο του 1909.',
        en: 'It reopened in 2004, inside and underneath a building from 1909.',
      },
      {
        el: 'Το Πλημμυρισμένο Δάσος έχει 1.000 τετραγωνικά μέτρα και πάνω από 100 είδη.',
        en: 'The Flooded Forest covers 1,000 square metres and holds more than 100 species.',
      },
      {
        el: 'Ο Γεωλογικός Τοίχος είναι εφτά μεγάλα κομμάτια αληθινού βράχου.',
        en: 'The Geological Wall is seven big slabs of real rock.',
      },
    ],
    location: {
      lat: 41.41306,
      lng: 2.13111,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q2625747', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone. Wikipedia carries no coordinate for this article.',
      map: { x: 0.283, y: 0.293 },
      // The museum publishes its address as Carrer d’Isaac Newton 26; confirmed on the City
      // Council guide (guia.barcelona.cat) because cosmocaixa.org refused the fetch.
      findIt: {
        el: 'Η είσοδος είναι στην οδό Ισαάκ Νιούτον, στο νούμερο 26, στην ανηφόρα πάνω από τη λεωφόρο Τιμπιντάμπο.',
        en: 'The way in is on Carrer d’Isaac Newton at number 26, up the hill above Avinguda del Tibidabo.',
      },
    },
    question: {
      q: {
        el: 'Τι έχει μέσα του αυτό το μουσείο, που δεν θα το περίμενες σε πόλη;',
        en: 'What is inside this museum that you would not expect in a city?',
      },
      answers: [
        { el: 'Ένα κομμάτι ζούγκλας', en: 'A piece of rainforest' },
        { el: 'Έναν φάρο που λειτουργεί ακόμα', en: 'A working coastal lighthouse' },
        { el: 'Μια παγωμένη λίμνη για πατινάζ', en: 'A frozen lake for skating' },
        { el: 'Έναν υπόγειο σταθμό τρένου', en: 'An underground railway station' },
      ],
      explanation: {
        el:
          'Χίλια τετραγωνικά μέτρα Αμαζονίου, με αληθινά ζώα, αληθινά φυτά και αληθινή ' +
          'βροχή, πέντε ορόφους κάτω από την είσοδο.',
        en:
          'A thousand square metres of Amazon, with real animals, real plants and real ' +
          'rain, five floors below the entrance.',
      },
    },

    museum: {
      doorNote: {
        el: 'Η επίσκεψη ξεκινάει από ψηλά και κατεβαίνει. Μην πάρεις το ασανσέρ: η ράμπα είναι το πρώτο έκθεμα.',
        en: 'The visit starts at the top and goes down. Do not take the lift: the ramp is the first exhibit.',
      },
      rooms: [
        {
          id: 'barcelona-cosmocaixa-the-way-down',
          emoji: '🌀',
          name: { el: 'Ο δρόμος προς τα κάτω', en: 'The way down' },
          intro: {
            el:
              'Το μουσείο είναι σχεδόν ολόκληρο κάτω από τη γη, και η κάθοδος είναι μέρος της ' +
              'επίσκεψης. Εδώ συναντάς τρία πράγματα που δεν χωράνε σε βιτρίνα: ένα δέντρο ' +
              'από άλλη ήπειρο, έναν τοίχο από αληθινά βουνά, και μια μπάλα που κουνιέται ' +
              'όλη μέρα για να σου δείξει ότι ο πλανήτης δεν στέκεται ακίνητος.',
            en:
              'The museum is almost entirely underground, and going down is part of the ' +
              'visit. Here you meet three things that would not fit in a display case: a ' +
              'tree from another continent, a wall made of real mountains, and a ball that ' +
              'swings all day to show you the planet does not stand still.',
          },
          exhibits: [
            {
              id: 'barcelona-cosmocaixa-acariquara-tree',
              name: { el: 'Το δέντρο της ράμπας', en: 'The tree on the ramp' },
              blurb: {
                el:
                  'Η ράμπα κατεβαίνει πέντε ορόφους γυρίζοντας γύρω από έναν κορμό. Είναι μια ' +
                  'ακαρικουάρα, ένα δέντρο από το δάσος του Αμαζονίου στη Βραζιλία, πάνω από ' +
                  'τριακοσίων χρόνων. Δεν το έκοψε κανείς: πέθανε μόνο του, από γεράματα, και ' +
                  'μετά το μετέφεραν πάνω από τον ωκεανό για να σταθεί εδώ. Το ξύλο του είναι ' +
                  'τόσο σκληρό που στη Βραζιλία το χρησιμοποιούν για στύλους που μπαίνουν στο ' +
                  'χώμα και δεν σαπίζουν. Όσο κατεβαίνεις, το βλέπεις από τη ρίζα ως την κορυφή, ' +
                  'κάτι που μέσα στο δάσος είναι αδύνατο.',
                en:
                  'The ramp goes down five floors, turning around one trunk. It is an ' +
                  'acariquara, a tree from the Amazon forest in Brazil, more than three ' +
                  'hundred years old. Nobody cut it down: it died on its own, of old age, and ' +
                  'was then carried across the ocean to stand here. Its wood is so hard that ' +
                  'in Brazil it is used for posts that go into the ground and do not rot. As ' +
                  'you walk down you see it from the roots to the top, which inside a forest ' +
                  'is impossible.',
              },
              question: {
                q: {
                  el: 'Πώς έφτασε αυτό το δέντρο στο μουσείο;',
                  en: 'How did this tree end up in the museum?',
                },
                answers: [
                  { el: 'Πέθανε μόνο του στο δάσος', en: 'It died naturally in the forest' },
                  { el: 'Το φύτεψαν εδώ όταν άνοιξε το μουσείο', en: 'It was planted here when the museum opened' },
                  { el: 'Το έκοψαν ξυλοκόποι για τα έπιπλα', en: 'Loggers cut it down for making furniture' },
                  { el: 'Είναι φτιαγμένο από τσιμέντο και μπογιά', en: 'It is made out of concrete and paint' },
                ],
                explanation: {
                  el: 'Είναι αληθινό και πάνω από 300 χρόνων. Το μετέφεραν από τη Βραζιλία αφού πέθανε από γεράματα.',
                  en: 'It is real and more than 300 years old. It was brought from Brazil after it died of old age.',
                },
              },
            },
            {
              id: 'barcelona-cosmocaixa-foucault-pendulum',
              name: { el: 'Το εκκρεμές', en: 'The pendulum' },
              blurb: {
                el:
                  'Μια βαριά σιδερένια μπάλα κρέμεται από ένα σύρμα μακρύτερο από σαράντα ' +
                  'μέτρα και κουνιέται πέρα δώθε, αργά, όλη μέρα. Γύρω της, σε κύκλο, στέκονται ' +
                  'μικροί στύλοι. Κάθε λίγα λεπτά η μπάλα ρίχνει έναν. Δεν αλλάζει όμως αυτή ' +
                  'κατεύθυνση: ένα εκκρεμές κουνιέται πάντα στο ίδιο επίπεδο. Αυτό που γυρίζει ' +
                  'είναι το πάτωμα, μαζί με ολόκληρη τη Γη. Ο Γάλλος φυσικός Λεόν Φουκώ το ' +
                  'έδειξε πρώτος το 1851 στο Παρίσι. Δίπλα εκτίθεται και μια αυθεντική μπάλα ' +
                  'σαν εκείνες που χρησιμοποίησε.',
                en:
                  'A heavy iron ball hangs from a wire more than forty metres long and swings ' +
                  'to and fro, slowly, all day. Around it, in a circle, stand small posts. ' +
                  'Every few minutes the ball knocks one over. Yet the ball itself never ' +
                  'changes direction: a pendulum always swings in the same plane. What turns ' +
                  'is the floor, together with the whole Earth. The French physicist Léon ' +
                  'Foucault first showed this in 1851 in Paris. Beside it, an original bob of ' +
                  'the kind he used is on display.',
              },
              question: {
                q: {
                  el: 'Γιατί το εκκρεμές ρίχνει σιγά σιγά όλους τους στύλους γύρω του;',
                  en: 'Why does the pendulum slowly knock over all the posts around it?',
                },
                answers: [
                  { el: 'Η Γη γυρίζει από κάτω του', en: 'The Earth turns underneath it' },
                  { el: 'Ένας κινητήρας το στρίβει λίγο λίγο', en: 'A motor turns it a little at a time' },
                  { el: 'Ο αέρας από την πόρτα το σπρώχνει', en: 'The draught from the door pushes it' },
                  { el: 'Το σύρμα του ξετυλίγεται σιγά σιγά', en: 'Its wire slowly unwinds as it swings' },
                ],
                explanation: {
                  el: 'Το εκκρεμές κουνιέται πάντα στο ίδιο επίπεδο. Το πάτωμα, οι στύλοι και εσύ γυρίζετε μαζί με τον πλανήτη.',
                  en: 'The pendulum keeps swinging in one plane. The floor, the posts and you turn along with the planet.',
                },
              },
            },
            {
              id: 'barcelona-cosmocaixa-geological-wall',
              name: { el: 'Ο Γεωλογικός Τοίχος', en: 'The Geological Wall' },
              blurb: {
                el:
                  'Εφτά τεράστια κομμάτια βράχου, κομμένα από αληθινά βουνά και λατομεία, ' +
                  'στέκονται στη σειρά σαν σελίδες ενός βιβλίου. Το καθένα λέει και άλλη ' +
                  'ιστορία: πώς ένα ποτάμι έστρωσε άμμο στρώμα στρώμα, πώς η ζέστη και η πίεση ' +
                  'δίπλωσαν την πέτρα σαν χαρτί, πώς ένα ηφαίστειο πάγωσε μέσα σε μια ' +
                  'νύχτα. Το πιο παράξενο είναι ότι όλα αυτά συνέβησαν πολύ αργά, εκατομμύρια ' +
                  'χρόνια, και τώρα τα βλέπεις σε μια ματιά. Αν βρεις τις γραμμές μέσα στον ' +
                  'βράχο, μπορείς να μετρήσεις τα στρώματα σαν δαχτυλίδια δέντρου.',
                en:
                  'Seven enormous pieces of rock, cut from real mountains and quarries, stand ' +
                  'in a row like the pages of a book. Each tells a different story: how a ' +
                  'river laid down sand layer by layer, how heat and pressure folded stone ' +
                  'like paper, how a volcano froze in a single night. The strangest part is ' +
                  'that all of it happened very slowly, over millions of years, and now you ' +
                  'see it in one glance. If you find the lines in the rock, you can count the ' +
                  'layers like the rings of a tree.',
              },
              question: {
                q: {
                  el: 'Από τι είναι φτιαγμένος ο Γεωλογικός Τοίχος;',
                  en: 'What is the Geological Wall made of?',
                },
                answers: [
                  { el: 'Από αληθινό βράχο', en: 'Real rock' },
                  { el: 'Από βαμμένο γύψο', en: 'Painted plaster' },
                  { el: 'Από τσιμέντο με χρώμα', en: 'Coloured concrete' },
                  { el: 'Από μεγάλες φωτογραφίες', en: 'Large photographs' },
                ],
                explanation: {
                  el: 'Είναι εφτά μεγάλα κομμάτια αληθινού βράχου, το καθένα από άλλη γεωλογική διαδικασία.',
                  en: 'They are seven big slabs of real rock, each one shaped by a different geological process.',
                },
              },
            },
          ],
        },
        {
          id: 'barcelona-cosmocaixa-flooded-forest',
          emoji: '🌧️',
          name: { el: 'Το Πλημμυρισμένο Δάσος', en: 'The Flooded Forest' },
          intro: {
            el:
              'Στον Αμαζόνιο, όταν έρχονται οι βροχές, το ποτάμι φουσκώνει και το δάσος ' +
              'πλημμυρίζει για μήνες. Τα ψάρια κολυμπούν ανάμεσα στους κορμούς και τα ζώα ' +
              'μαθαίνουν να ζουν με νερό μέχρι τη μέση. Αυτή η αίθουσα είναι ένα κομμάτι ' +
              'εκείνου του δάσους, χίλια τετραγωνικά μέτρα, με αληθινή ζέστη, αληθινή υγρασία ' +
              'και βροχή που πέφτει κάθε τόσο από το ταβάνι.',
            en:
              'In the Amazon, when the rains come, the river swells and the forest floods for ' +
              'months. Fish swim between the trunks and the animals learn to live waist-deep ' +
              'in water. This hall is a piece of that forest, a thousand square metres of it, ' +
              'with real heat, real humidity, and rain that falls from the ceiling every so ' +
              'often.',
          },
          exhibits: [
            {
              id: 'barcelona-cosmocaixa-capybaras',
              name: { el: 'Οι καπιμπάρες', en: 'The capybaras' },
              blurb: {
                el:
                  'Μοιάζουν με τεράστια ινδικά χοιρίδια, και είναι ακριβώς αυτό: το ' +
                  'μεγαλύτερο τρωκτικό του κόσμου, συγγενής των ποντικών και των ' +
                  'χάμστερ, που φτάνει τα εξήντα κιλά. Ζουν πάντα κοντά στο νερό. Τα μάτια, ' +
                  'τα αυτιά και τα ρουθούνια τους είναι στην κορυφή του κεφαλιού, ώστε να ' +
                  'βλέπουν και να αναπνέουν ενώ το υπόλοιπο σώμα είναι βυθισμένο, και τα ' +
                  'πόδια τους έχουν μικρές μεμβράνες, σαν πάπιας. Κολυμπούν καλύτερα απ’ ' +
                  'ό,τι τρέχουν. Στο δάσος του μουσείου τις βλέπεις να βόσκουν στην όχθη ή ' +
                  'να περνούν αργά μέσα από το νερό.',
                en:
                  'They look like giant guinea pigs, and that is exactly what they are: the ' +
                  'largest rodent in the world, a relative of mice and hamsters, weighing up ' +
                  'to sixty kilos. They always live near water. Their eyes, ears and nostrils ' +
                  'sit on the top of the head, so they can see and breathe while the rest of ' +
                  'the body is underwater, and their feet are slightly webbed, like a duck’s. ' +
                  'They swim better than they run. In the museum’s forest you will see them ' +
                  'grazing on the bank or moving slowly through the water.',
              },
              question: {
                q: {
                  el: 'Ποιο είναι το κοντινότερο συγγενικό ζώο της καπιμπάρας;',
                  en: 'Which animal is the capybara’s closest relative?',
                },
                answers: [
                  { el: 'Ινδικό χοιρίδιο', en: 'A guinea pig' },
                  { el: 'Ένας νεαρός ιπποπόταμος', en: 'A young hippopotamus' },
                  { el: 'Ένα μικρό αγριογούρουνο', en: 'A small wild boar' },
                  { el: 'Μια μεγάλη ενυδρίδα ποταμού', en: 'A large river otter' },
                ],
                explanation: {
                  el: 'Είναι τρωκτικό, όπως το ινδικό χοιρίδιο και το ποντίκι, μόνο που ζυγίζει όσο ένας μεγάλος άνθρωπος.',
                  en: 'It is a rodent, like the guinea pig and the mouse, except that it weighs as much as a grown man.',
                },
              },
            },
            {
              id: 'barcelona-cosmocaixa-caimans',
              name: { el: 'Οι καϊμάν του Αμαζονίου', en: 'The caimans of the Amazon' },
              blurb: {
                el:
                  'Ο καϊμάν είναι ο αλιγάτορας της Νότιας Αμερικής, μικρότερος ξάδερφος του ' +
                  'κροκόδειλου. Στο πλημμυρισμένο δάσος περνά τις περισσότερες ώρες ' +
                  'ακίνητος, με μόνο τα μάτια και τα ρουθούνια πάνω από το νερό, σαν ' +
                  'κούτσουρο που επιπλέει. Δεν κυνηγάει τρέχοντας· περιμένει. Τα ψάρια, οι ' +
                  'βάτραχοι και τα πουλιά έρχονται μόνα τους. Στο μουσείο τους βλέπεις από ' +
                  'ψηλά, από τη γέφυρα, και από κάτω, μέσα από το γυαλί, όπου φαίνεται ' +
                  'ολόκληρο το σώμα τους να κρέμεται στο νερό, με τα πόδια να αιωρούνται.',
                en:
                  'The caiman is South America’s alligator, a smaller cousin of the ' +
                  'crocodile. In the flooded forest it spends most of the day motionless, ' +
                  'with only its eyes and nostrils above the water, like a floating log. It ' +
                  'does not hunt by chasing; it waits. The fish, the frogs and the birds come ' +
                  'to it. In the museum you see them from above, from the bridge, and from ' +
                  'below, through the glass, where the whole body can be seen hanging in the ' +
                  'water with the legs drifting.',
              },
              question: {
                q: {
                  el: 'Πώς κυνηγάει ο καϊμάν;',
                  en: 'How does a caiman hunt?',
                },
                answers: [
                  { el: 'Περιμένει ακίνητος', en: 'It lies still' },
                  { el: 'Τρέχει γρήγορα στην όχθη', en: 'It runs along the bank' },
                  { el: 'Σκαρφαλώνει στα δέντρα', en: 'It climbs into trees' },
                  { el: 'Κυνηγάει σε ομάδες τη νύχτα', en: 'It hunts in packs at night' },
                ],
                explanation: {
                  el: 'Μοιάζει με κούτσουρο, και όλοι πλησιάζουν ένα κούτσουρο. Αυτό είναι όλο το κόλπο.',
                  en: 'It looks like a log, and everything comes close to a log. That is the whole trick.',
                },
              },
            },
            {
              id: 'barcelona-cosmocaixa-piranhas',
              name: { el: 'Οι πιράνχας πίσω από το γυαλί', en: 'The piranhas behind the glass' },
              blurb: {
                el:
                  'Στο κάτω μέρος της αίθουσας, εκεί όπου βλέπεις το δάσος κάτω από το νερό, ' +
                  'κολυμπούν οι πιράνχας. Έχουν κοφτερά τριγωνικά δόντια και άσχημη φήμη, αλλά ' +
                  'η φήμη είναι μεγαλύτερη από τα ψάρια: οι περισσότερες είναι μικρότερες από ' +
                  'μια παλάμη και τρώνε κυρίως ψάρια, έντομα και φρούτα που πέφτουν στο νερό. ' +
                  'Ζουν σε κοπάδια, όχι για να επιτίθενται, αλλά για να προστατεύονται από ' +
                  'τους μεγαλύτερους. Δίπλα τους περνούν άλλα ψάρια του Αμαζονίου, και αν έχεις ' +
                  'υπομονή θα δεις ένα να αρπάζει κάτι από την επιφάνεια.',
                en:
                  'At the bottom of the hall, where you see the forest from under the water, ' +
                  'the piranhas swim. They have sharp triangular teeth and a bad reputation, ' +
                  'but the reputation is bigger than the fish: most are smaller than your ' +
                  'hand and eat mainly fish, insects and fruit that falls into the water. ' +
                  'They live in shoals, not in order to attack, but to be safe from bigger ' +
                  'animals. Other Amazon fish pass beside them, and if you are patient you ' +
                  'will see one snatch something from the surface.',
              },
              question: {
                q: {
                  el: 'Γιατί κολυμπούν οι πιράνχας σε κοπάδια;',
                  en: 'Why do piranhas swim in shoals?',
                },
                answers: [
                  { el: 'Για να προστατεύονται', en: 'To stay safe' },
                  { el: 'Για να κυνηγούν μεγάλα ζώα', en: 'To hunt bigger prey' },
                  { el: 'Γιατί βλέπουν άσχημα μόνες', en: 'They see poorly alone' },
                  { el: 'Για να ζεσταίνονται μαζί', en: 'To stay warm together' },
                ],
                explanation: {
                  el: 'Ένα μικρό ψάρι μέσα σε κοπάδι είναι πιο δύσκολο να πιαστεί. Η επίθεση σε κοπάδι είναι κυρίως παραμύθι.',
                  en: 'A small fish in a shoal is harder to catch. The pack attack is mostly a story.',
                },
              },
            },
            {
              id: 'barcelona-cosmocaixa-leafcutter-ants',
              name: { el: 'Τα μυρμήγκια που κόβουν φύλλα', en: 'The leaf-cutter ants' },
              blurb: {
                el:
                  'Μια γραμμή από μυρμήγκια περπατάει ασταμάτητα, και το καθένα κουβαλάει ένα ' +
                  'κομμάτι πράσινου φύλλου πάνω από το κεφάλι του, σαν σημαία. Τα φύλλα δεν ' +
                  'τα τρώνε. Τα κόβουν με τα σαγόνια τους, τα μεταφέρουν στη φωλιά, τα ' +
                  'μασάνε σε πολτό, και πάνω σε αυτόν τον πολτό καλλιεργούν έναν μύκητα. Αυτόν ' +
                  'τρώνε. Είναι δηλαδή αγρότες, και ήταν αγρότες εκατομμύρια χρόνια πριν από ' +
                  'τους ανθρώπους. Μια φωλιά μπορεί να έχει εκατομμύρια μυρμήγκια, με ' +
                  'διαφορετικές δουλειές για το καθένα: κόφτες, μεταφορείς, κηπουροί, φρουροί.',
                en:
                  'A line of ants walks without stopping, each one carrying a piece of green ' +
                  'leaf above its head like a flag. They do not eat the leaves. They cut them ' +
                  'with their jaws, carry them to the nest, chew them into a pulp, and on that ' +
                  'pulp they grow a fungus. That is what they eat. So they are farmers, and ' +
                  'they were farmers millions of years before people were. One nest can hold ' +
                  'millions of ants, each with a different job: cutters, carriers, gardeners, ' +
                  'guards.',
              },
              question: {
                q: {
                  el: 'Τι κάνουν τα μυρμήγκια με τα φύλλα που κουβαλούν;',
                  en: 'What do the ants do with the leaves they carry?',
                },
                answers: [
                  { el: 'Καλλιεργούν πάνω τους μύκητα', en: 'They grow a fungus on them' },
                  { el: 'Τα τρώνε το βράδυ στη φωλιά', en: 'They eat them at night in the nest' },
                  { el: 'Χτίζουν με αυτά τη στέγη της φωλιάς', en: 'They build the nest roof with them' },
                  { el: 'Τα δίνουν στη βασίλισσα για κρεβάτι', en: 'They give them to the queen as a bed' },
                ],
                explanation: {
                  el: 'Τα φύλλα είναι το λίπασμα. Ο μύκητας που φυτρώνει πάνω τους είναι το φαγητό. Είναι αγρότες.',
                  en: 'The leaves are the compost. The fungus that grows on them is the food. They are farmers.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'barcelona-cosmocaixa-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Κουνιέμαι πέρα δώθε όλη μέρα και δεν κουράζομαι ποτέ. Κάθε λίγα λεπτά ρίχνω ' +
              'κάτι κάτω, αλλά δεν φταίω εγώ: εγώ δεν άλλαξα κατεύθυνση. Εσύ άλλαξες, μαζί ' +
              'με το πάτωμα.',
            en:
              'I swing to and fro all day and never get tired. Every few minutes I knock ' +
              'something over, but it is not my fault: I never changed direction. You did, ' +
              'together with the floor.',
          },
          hint: {
            el: 'Ψάξε μια βαριά μπάλα σε πολύ μακρύ σύρμα.',
            en: 'Look for a heavy ball on a very long wire.',
          },
          answerExhibitId: 'barcelona-cosmocaixa-foucault-pendulum',
        },
        {
          id: 'barcelona-cosmocaixa-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι πιο παλιό από το κτίριο και μεγάλωσα σε άλλη ήπειρο. Πέθανα μόνο μου, ' +
              'χωρίς τσεκούρι. Τώρα οι άνθρωποι γυρίζουν γύρω μου πέντε ορόφους, και είναι ' +
              'ο μόνος τρόπος να με δουν ολόκληρο.',
            en:
              'I am older than the building and I grew up on another continent. I died on ' +
              'my own, with no axe. Now people circle me for five floors, and it is the only ' +
              'way to see all of me.',
          },
          hint: {
            el: 'Δεν είμαι σε βιτρίνα. Είμαι στη μέση της ράμπας.',
            en: 'I am not in a case. I am in the middle of the ramp.',
          },
          answerExhibitId: 'barcelona-cosmocaixa-acariquara-tree',
        },
        {
          id: 'barcelona-cosmocaixa-riddle-3',
          difficulty: 2,
          prompt: {
            el:
              'Τα ξαδέρφια μου χωράνε στην παλάμη σου, εγώ ζυγίζω όσο ένας άνθρωπος. Τα μάτια ' +
              'μου είναι στην κορυφή του κεφαλιού μου για να βλέπω ενώ κολυμπάω. Στο τρέξιμο ' +
              'είμαι μέτρια. Στο νερό, δεν με πιάνεις.',
            en:
              'My cousins fit in your palm; I weigh as much as a person. My eyes sit on top ' +
              'of my head so I can see while I swim. At running I am nothing special. In the ' +
              'water, you will not catch me.',
          },
          hint: {
            el: 'Ψάξε στην όχθη του δάσους ένα ζώο με τετράγωνη μουσούδα.',
            en: 'Look on the forest bank for an animal with a square snout.',
          },
          answerExhibitId: 'barcelona-cosmocaixa-capybaras',
        },
      ],
    },
  },

  // -------------------------------------------------------------- museu marítim
  {
    id: 'barcelona-museu-maritim',
    cityId: 'barcelona',
    emoji: '⚓',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Ναυτικό Μουσείο, στις Ντρασάνες', en: 'The Maritime Museum, in the Drassanes' },
    tagline: {
      el: 'Ένα μεσαιωνικό εργοστάσιο πλοίων με μια γαλέρα 60 μέτρων μέσα',
      en: 'A medieval ship factory with a 60-metre galley inside',
    },
    story: {
      el:
        'Οι Ντρασάνες Ρεϊάλς, τα Βασιλικά Ναυπηγεία, ξεκίνησαν να χτίζονται τον 13ο αιώνα ' +
        'πάνω στην παραλία, έξω από τα τείχη, στους πρόποδες του Μοντζουίκ. Εκεί οι ' +
        'βασιλιάδες της Αραγονίας έφτιαχναν τις πολεμικές τους γαλέρες. Είναι ένα ' +
        'τεράστιο πέτρινο κτίριο με μακριές αίθουσες και μυτερές καμάρες, και η θάλασσα ' +
        'έφτανε τότε ως τις πόρτες του, ώστε τα καινούργια πλοία να γλιστρούν κατευθείαν ' +
        'στο νερό. Πολλές γαλέρες χτίζονταν ταυτόχρονα, η μία δίπλα στην άλλη. Το 1568 ' +
        'βγήκε από εδώ η Βασιλική Γαλέρα, το πλοίο του Δον Χουάν της Αυστρίας στη ' +
        'ναυμαχία της Ναυπάκτου, το 1571. Από το 1941 το κτίριο είναι μουσείο, και το 1971, ' +
        'για τα τετρακόσια χρόνια από τη ναυμαχία, χτίστηκε μέσα του ένα αντίγραφο της ' +
        'γαλέρας σε φυσικό μέγεθος: 60 μέτρα μήκος, 59 κουπιά, 236 κωπηλάτες. Οι ' +
        'περισσότεροι από αυτούς δεν βρίσκονταν εκεί με τη θέλησή τους· ήταν φυλακισμένοι ' +
        'και σκλάβοι, δεμένοι στα παγκάκια. Μια γαλέρα ήταν κάτι όμορφο και κάτι φοβερό ' +
        'μαζί. Λίγο πιο πέρα, στο λιμάνι, το μουσείο κρατάει και ένα αληθινό ιστιοφόρο, ' +
        'τη Σάντα Εουλάλια του 1918, που ακόμα ταξιδεύει.',
      en:
        'The Drassanes Reials, the Royal Shipyards, began to be built in the 13th century ' +
        'on the beach outside the walls, at the foot of Montjuïc. There the kings of Aragon ' +
        'made their war galleys. It is a huge stone building of long halls and pointed ' +
        'arches, and in those days the sea came right up to its doors, so that new ships ' +
        'slid straight into the water. Many galleys were built at the same time, side by ' +
        'side. In 1568 the Royal Galley came out of here, the ship of Don John of Austria at ' +
        'the battle of Lepanto in 1571. Since 1941 the building has been a museum, and in ' +
        '1971, for the four hundredth anniversary of the battle, a full-size copy of the ' +
        'galley was built inside it: 60 metres long, 59 oars, 236 rowers. Most of those ' +
        'rowers were not there by choice; they were prisoners and enslaved men, chained to ' +
        'the benches. A galley was a beautiful thing and a terrible thing at once. A little ' +
        'further along, in the harbour, the museum also keeps a real sailing ship, the ' +
        'Santa Eulàlia of 1918, which still goes to sea.',
    },
    facts: [
      {
        el: 'Το ναυπηγείο ξεκίνησε τον 13ο αιώνα και είναι μουσείο από το 1941.',
        en: 'The shipyard dates from the 13th century and has been a museum since 1941.',
      },
      {
        el: 'Το αντίγραφο της Βασιλικής Γαλέρας έχει 60 μέτρα μήκος, 59 κουπιά και θέσεις για 236 κωπηλάτες.',
        en: 'The replica of the Royal Galley is 60 metres long, with 59 oars and places for 236 rowers.',
      },
      {
        el: 'Το ιστιοφόρο Σάντα Εουλάλια χτίστηκε το 1918 και ταξιδεύει ακόμα.',
        en: 'The schooner Santa Eulàlia was built in 1918 and still sails.',
      },
    ],
    location: {
      lat: 41.37527,
      lng: 2.17628,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q263924', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Barcelona Royal Shipyard', deltaM: 30 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.693, y: 0.796 },
      // mmb.cat (collection pages and plan-your-visit) gives the address as Avinguda de les
      // Drassanes, s/n, two minutes from Drassanes metro on line L3.
      findIt: {
        el: 'Η είσοδος είναι στη λεωφόρο Ντρασάνες, στο κάτω άκρο της Ράμπλα, δίπλα στην κολόνα του Κολόμβου· μετρό Ντρασάνες.',
        en: 'The way in is on Avinguda de les Drassanes, at the harbour end of La Rambla, beside the Columbus column; metro Drassanes.',
      },
    },
    question: {
      q: {
        el: 'Γιατί χτίστηκε το ναυπηγείο ακριβώς πάνω στην παραλία;',
        en: 'Why was the shipyard built right on the beach?',
      },
      answers: [
        { el: 'Για να γλιστρούν τα πλοία στο νερό', en: 'So new ships slid straight in' },
        { el: 'Γιατί η πέτρα κόστιζε λιγότερο δίπλα στη θάλασσα', en: 'Because stone was cheaper by the sea' },
        { el: 'Γιατί ο βασιλιάς έμενε πάνω στην παραλία', en: 'Because the king lived on the shore' },
        { el: 'Για να κοιμούνται οι ναύτες πάνω στην άμμο', en: 'So sailors could sleep on the sand' },
      ],
      explanation: {
        el:
          'Μια γαλέρα 60 μέτρων δεν μεταφέρεται. Χτίζεται εκεί όπου θα πλεύσει, με τη ' +
          'θάλασσα να φτάνει ως την πόρτα.',
        en:
          'A 60-metre galley cannot be carried anywhere. It is built where it will float, ' +
          'with the sea reaching the door.',
      },
    },

    museum: {
      doorNote: {
        el: 'Το κτίριο είναι το πρώτο έκθεμα: κοίτα τις καμάρες πριν κοιτάξεις τα πλοία.',
        en: 'The building is the first exhibit: look at the arches before you look at the ships.',
      },
      rooms: [
        {
          id: 'barcelona-museu-maritim-the-naves',
          emoji: '🏛️',
          name: { el: 'Οι μεγάλες αίθουσες', en: 'The great halls' },
          intro: {
            el:
              'Τα ναυπηγεία είναι μια σειρά από μακριές πέτρινες αίθουσες, τόσο ψηλές που ' +
              'χωρούσαν ένα πλοίο με τα κατάρτια του. Εδώ οι μάστορες πριόνιζαν, κάρφωναν ' +
              'και έπισσωναν, και εδώ σήμερα στέκεται μια γαλέρα, ένα υποβρύχιο από ξύλο ' +
              'ελιάς, και οι ίδιες οι καμάρες που τα σκεπάζουν εδώ και εφτακόσια χρόνια.',
            en:
              'The shipyards are a row of long stone halls, tall enough to hold a ship with ' +
              'its masts up. Here the craftsmen sawed, hammered and tarred, and here today ' +
              'stand a galley, a submarine made of olive wood, and the very arches that have ' +
              'covered them for seven hundred years.',
          },
          exhibits: [
            {
              id: 'barcelona-museu-maritim-royal-galley',
              name: { el: 'Η Βασιλική Γαλέρα', en: 'The Royal Galley' },
              blurb: {
                el:
                  'Γεμίζει μια ολόκληρη αίθουσα: 60 μέτρα μήκος, 59 κουπιά, και θέσεις για 236 ' +
                  'κωπηλάτες, τέσσερις σε κάθε κουπί. Η πρύμνη της είναι σκαλισμένη και ' +
                  'χρυσωμένη σαν παλάτι. Η αληθινή γαλέρα χτίστηκε εδώ το 1568 και ήταν η ' +
                  'ναυαρχίδα του Δον Χουάν της Αυστρίας στη ναυμαχία της Ναυπάκτου, στις 7 ' +
                  'Οκτωβρίου 1571. Αυτή που βλέπεις είναι αντίγραφο, φτιαγμένο από το 1968 ' +
                  'ως το 1971 για τα τετρακόσια χρόνια από τη μάχη, με ξύλο, μέταλλο, ύφασμα ' +
                  'και μπογιά. Δεν μπήκε ποτέ στη θάλασσα. Οι κωπηλάτες της αληθινής ήταν ' +
                  'κυρίως φυλακισμένοι, αλυσοδεμένοι στα παγκάκια τους.',
                en:
                  'It fills a whole hall: 60 metres long, 59 oars, and places for 236 rowers, ' +
                  'four to an oar. Its stern is carved and gilded like a palace. The real ' +
                  'galley was built here in 1568 and was the flagship of Don John of Austria ' +
                  'at the battle of Lepanto, on 7 October 1571. The one you see is a replica, ' +
                  'made between 1968 and 1971 for the four hundredth anniversary of the ' +
                  'battle, from wood, metal, cloth and paint. It has never touched the sea. ' +
                  'The rowers of the real one were mostly prisoners, chained to their ' +
                  'benches.',
              },
              question: {
                q: {
                  el: 'Πόσοι άνθρωποι τραβούσαν τα κουπιά της αληθινής γαλέρας;',
                  en: 'How many people pulled the oars of the real galley?',
                },
                answers: [
                  { el: '236 άντρες', en: '236 men' },
                  { el: '36 άντρες', en: '36 men' },
                  { el: '1.000 άντρες', en: '1,000 men' },
                  { el: '59 άντρες', en: '59 men' },
                ],
                explanation: {
                  el: 'Διακόσιοι τριάντα έξι άνθρωποι, τέσσερις σε καθένα από τα 59 κουπιά.',
                  en: 'Two hundred and thirty-six people, four on each of the 59 oars.',
                },
              },
            },
            {
              id: 'barcelona-museu-maritim-gothic-arches',
              name: { el: 'Οι καμάρες του ναυπηγείου', en: 'The shipyard’s arches' },
              blurb: {
                el:
                  'Κοίτα ψηλά. Οι μυτερές πέτρινες καμάρες που κρατούν τη στέγη είναι από τον ' +
                  '14ο αιώνα, όταν το ναυπηγείο πήρε τη σημερινή του μορφή. Οι πρώτες ' +
                  'αίθουσες χτίστηκαν δίπλα στη θάλασσα το 1378, άλλες οκτώ πιο μέσα, και τον ' +
                  '17ο αιώνα προστέθηκαν τρεις ακόμα. Δεν είναι εκκλησία, αν και μοιάζει: είναι ' +
                  'εργοστάσιο, χτισμένο τόσο ψηλό ώστε να χωράει ολόκληρο πλοίο. Κάθε αίθουσα ' +
                  'ήταν μια γραμμή παραγωγής, με μια γαλέρα να μεγαλώνει στη μέση της. Είναι ' +
                  'το καλύτερα διατηρημένο μεσαιωνικό ναυπηγείο που υπάρχει.',
                en:
                  'Look up. The pointed stone arches holding the roof date from the 14th ' +
                  'century, when the shipyard took the shape it has today. The first halls ' +
                  'were built beside the sea in 1378, eight more further inland, and in the ' +
                  '17th century three more were added. It is not a church, although it looks ' +
                  'like one: it is a factory, built this tall so a whole ship would fit ' +
                  'inside. Each hall was a production line, with a galley growing in the ' +
                  'middle of it. It is the best preserved medieval shipyard there is.',
              },
              question: {
                q: {
                  el: 'Γιατί χτίστηκαν οι αίθουσες τόσο ψηλές;',
                  en: 'Why were the halls built so tall?',
                },
                answers: [
                  { el: 'Για να χωράει ένα πλοίο', en: 'So a ship would fit inside' },
                  { el: 'Για να ακούγονται οι ψαλμωδίες', en: 'So the singing would echo better' },
                  { el: 'Για να φαίνονται από τη θάλασσα', en: 'So ships could see them from far away' },
                  { el: 'Για να μην μπαίνει η ζέστη', en: 'To keep the summer heat out of them' },
                ],
                explanation: {
                  el: 'Μοιάζει με εκκλησία, αλλά είναι εργοστάσιο. Το ύψος το ζητούσαν τα κατάρτια.',
                  en: 'It looks like a church, but it is a factory. The masts are what asked for the height.',
                },
              },
            },
            {
              id: 'barcelona-museu-maritim-ictineo-model',
              name: { el: 'Το Ικτίνεο, το πλοίο-ψάρι', en: 'The Ictíneo, the fish-ship' },
              blurb: {
                el:
                  'Το 1859 ένας Καταλανός εφευρέτης, ο Ναρσίς Μουντουριόλ, έριξε στο λιμάνι της ' +
                  'Βαρκελώνης ένα από τα πρώτα υποβρύχια του κόσμου. Το έλεγε Ικτίνεο, «πλοίο-' +
                  'ψάρι». Είχε 7 μέτρα μήκος, δύο κελύφη το ένα μέσα στο άλλο, φτιαγμένα από ' +
                  'σανίδες ξύλου ελιάς ντυμένες με χαλκό, και χωρούσε πέντε ανθρώπους. Ο ' +
                  'Μουντουριόλ δεν το έφτιαξε για πόλεμο: ήθελε να προστατέψει τους δύτες ' +
                  'που μάζευαν κοράλλι και πνίγονταν. Το μουσείο έχει το μοντέλο του, από ξύλο ' +
                  'και μέταλλο, φτιαγμένο την ίδια εποχή. Ένα αντίγραφο σε φυσικό μέγεθος ' +
                  'στεκόταν στον κήπο ως το 2023, όταν το είχε φάει ο καιρός και ' +
                  'χρειάστηκε να το κατεβάσουν.',
                en:
                  'In 1859 a Catalan inventor, Narcís Monturiol, launched one of the first ' +
                  'submarines in the world in Barcelona harbour. He called it Ictíneo, ' +
                  '“fish-ship”. It was 7 metres long, with two hulls one inside the other, ' +
                  'made of olive-wood planks covered in copper, and it held five people. ' +
                  'Monturiol did not build it for war: he wanted to protect the divers who ' +
                  'gathered coral and drowned doing it. The museum keeps his model of it, in ' +
                  'wood and metal, made at the time. A full-size copy stood in the garden ' +
                  'until 2023, when the weather had eaten it and it had to be taken down.',
              },
              question: {
                q: {
                  el: 'Για ποιον λόγο έφτιαξε ο Μουντουριόλ το υποβρύχιό του;',
                  en: 'Why did Monturiol build his submarine?',
                },
                answers: [
                  { el: 'Για να προστατέψει τους δύτες', en: 'To keep divers safe' },
                  { el: 'Για να βυθίζει εχθρικά πλοία', en: 'To sink enemy warships' },
                  { el: 'Για να ψάχνει βυθισμένους θησαυρούς', en: 'To hunt for sunken treasure' },
                  { el: 'Για να κερδίσει έναν αγώνα ταχύτητας', en: 'To win a race across the harbour' },
                ],
                explanation: {
                  el: 'Οι δύτες που μάζευαν κοράλλι πνίγονταν. Ο Μουντουριόλ ήθελε να τους κατεβάζει με ασφάλεια.',
                  en: 'Coral divers were drowning. Monturiol wanted a way to take them down safely.',
                },
              },
            },
          ],
        },
        {
          id: 'barcelona-museu-maritim-faces-of-ships',
          emoji: '🗿',
          name: { el: 'Πρόσωπα των πλοίων', en: 'The faces of ships' },
          intro: {
            el:
              'Για αιώνες κάθε ιστιοφόρο είχε ένα ξύλινο πρόσωπο στην πλώρη του, το ' +
              'ακρόπρωρο: μια γυναίκα, ένα λιοντάρι, έναν άγιο. Οι ναυτικοί πίστευαν ότι το ' +
              'πλοίο βλέπει με αυτό. Το μουσείο έχει δεκατέσσερα, και δίπλα τους ένα ολόκληρο ' +
              'πλοίο που κρατάει ακόμα το δικό του.',
            en:
              'For centuries every sailing ship had a wooden face at its bow, the figurehead: ' +
              'a woman, a lion, a saint. Sailors believed the ship saw through it. The museum ' +
              'keeps fourteen of them, and beside them a whole ship that still carries its ' +
              'own.',
          },
          exhibits: [
            {
              id: 'barcelona-museu-maritim-blanca-aurora',
              name: { el: 'Το ακρόπρωρο της Μπλάνκα Αουρόρα', en: 'The figurehead of the Blanca Aurora' },
              blurb: {
                el:
                  'Μια νεαρή γυναίκα από βαμμένο ξύλο, σκαλισμένη το 1848 από τον Φρανσέσκ ' +
                  'Πασκουάλ Γκρανές, γλύπτη από το Λιορέτ ντε Μαρ, για την πλώρη της κορβέτας ' +
                  'Μπλάνκα Αουρόρα, που χτίστηκε την ίδια χρονιά. Ο πλοιοκτήτης και καπετάνιος ' +
                  'της, ο Σιλβέστρε Παρές, είχε χάσει την κόρη του, τη Μαρία, πολύ νέα. Λένε ότι ' +
                  'ζήτησε να σκαλίσουν το ακρόπρωρο με το πρόσωπό της, για να την έχει πάντα ' +
                  'μπροστά του, και κράτησε το δικαίωμα να το πάρει πίσω. Το πλοίο άλλαξε ' +
                  'χέρια και τέλειωσε τη ζωή του στο Ρίο ντε Τζανέιρο. Τότε ο Παρές πήρε το ' +
                  'ακρόπρωρο και το έφερε πίσω στην Καταλονία.',
                en:
                  'A young woman in painted wood, carved in 1848 by Francesc Pascual Granés, ' +
                  'a sculptor from Lloret de Mar, for the bow of the corvette Blanca Aurora, ' +
                  'built the same year. The ship’s owner and captain, Silvestre Parés, had ' +
                  'lost his daughter Maria very young. The story goes that he asked for the ' +
                  'figurehead to be carved with her face, so he would always have her in ' +
                  'front of him, and kept the right to take it back. The ship changed hands ' +
                  'and ended its life in Rio de Janeiro. Then Parés recovered the figurehead ' +
                  'and brought it home to Catalonia.',
              },
              question: {
                q: {
                  el: 'Ποιαν δείχνει, σύμφωνα με την παράδοση, αυτό το ακρόπρωρο;',
                  en: 'Who does this figurehead show, according to tradition?',
                },
                answers: [
                  { el: 'Την κόρη του καπετάνιου', en: 'The captain’s daughter' },
                  { el: 'Τη βασίλισσα της Ισπανίας', en: 'The Queen of Spain at the time' },
                  { el: 'Την Αγία Ευλαλία της Βαρκελώνης', en: 'Saint Eulàlia of Barcelona' },
                  { el: 'Τη γυναίκα του γλύπτη', en: 'The wife of the sculptor who made it' },
                ],
                explanation: {
                  el: 'Η Μαρία Παρές πέθανε νέα. Ο πατέρας της την έβαλε στην πλώρη του πλοίου του, και όταν το πλοίο τέλειωσε, την πήρε σπίτι.',
                  en: 'Maria Parés died young. Her father put her at the bow of his ship, and when the ship was finished he took her home.',
                },
              },
            },
            {
              id: 'barcelona-museu-maritim-el-ninot',
              name: { el: 'Ελ Νινότ, το ακρόπρωρο-παιδί', en: 'El Ninot, the child figurehead' },
              blurb: {
                el:
                  'Ένα αγόρι από βαμμένο ξύλο, του 19ου αιώνα, με ένα χαρτί στο χέρι: το ' +
                  'δίπλωμα ενός μαθητευόμενου πλοηγού. Κάποτε στόλιζε την πλώρη ενός πλοίου. ' +
                  'Μετά το κατέβασαν και το κρέμασαν έξω από μια ταβέρνα στην οδό Βαλένσια, ' +
                  'και ο κόσμος άρχισε να λέει «πάμε στο Νινότ», στην κούκλα. Η ταβέρνα έγινε ' +
                  'τόσο γνωστή που η γειτονιά που χτίστηκε γύρω της πήρε το όνομά του, και ' +
                  'μια δημοτική αγορά εκεί λέγεται ακόμα Μερκάτ ντελ Νινότ, με ένα αντίγραφο ' +
                  'του στην είσοδο. Το αυθεντικό είναι εδώ.',
                en:
                  'A boy in painted wood, from the 19th century, holding a paper: the ' +
                  'certificate of a trainee pilot. It once decorated the bow of a ship. Later ' +
                  'it was taken down and hung outside a tavern on Carrer de València, and ' +
                  'people started saying “let’s go to the Ninot”, the doll. The tavern became ' +
                  'so well known that the neighbourhood that grew up around it took the name, ' +
                  'and a city market there is still called the Mercat del Ninot, with a copy ' +
                  'of him at the entrance. The original is here.',
              },
              question: {
                q: {
                  el: 'Τι πήρε το όνομά του από αυτό το ακρόπρωρο;',
                  en: 'What was named after this figurehead?',
                },
                answers: [
                  { el: 'Μια γειτονιά και η αγορά της', en: 'A district and its market' },
                  { el: 'Ένας σταθμός του μετρό της πόλης', en: 'A station on the city’s metro' },
                  { el: 'Ένα ρυμουλκό του λιμανιού', en: 'A tugboat that works the harbour' },
                  { el: 'Η ποδοσφαιρική ομάδα του λιμανιού', en: 'The football team of the port' },
                ],
                explanation: {
                  el: 'Κρεμόταν έξω από μια ταβέρνα. Η ταβέρνα έγινε διάσημη, και η γειτονιά γύρω της πήρε το όνομα της κούκλας.',
                  en: 'It hung outside a tavern. The tavern became famous, and the neighbourhood around it took the doll’s name.',
                },
              },
            },
            {
              id: 'barcelona-museu-maritim-santa-eulalia',
              name: { el: 'Η Σάντα Εουλάλια', en: 'The Santa Eulàlia' },
              blurb: {
                el:
                  'Λίγα λεπτά με τα πόδια από το μουσείο, στην προβλήτα Μολ ντε λα Φούστα, ' +
                  'είναι δεμένο ένα ιστιοφόρο με τρία κατάρτια. Χτίστηκε το 1918 στην ' +
                  'Τορεβιέχα, με το όνομα Κάρμεν Φλόρες, για να κουβαλάει φορτία στη ' +
                  'Μεσόγειο. Σε σχεδόν ογδόντα χρόνια δουλειάς άλλαξε όνομα τέσσερις φορές, ' +
                  'έγινε μηχανοκίνητο, και τελείωσε ως πλοίο υποστήριξης δυτών. Το 1997 το ' +
                  'μουσείο το αγόρασε σε δημοπρασία και το έφερε πίσω στη μορφή που είχε ' +
                  'όταν πρωτοταξίδεψε. Το επισκέπτεσαι από το κατάστρωμα, εκτός από τις μέρες ' +
                  'που λείπει: ακόμα σηκώνει πανιά.',
                en:
                  'A few minutes’ walk from the museum, at the Moll de la Fusta quay, a ' +
                  'three-masted sailing ship is moored. It was built in 1918 in Torrevieja, ' +
                  'under the name Carmen Flores, to carry cargo around the Mediterranean. In ' +
                  'almost eighty years of work it changed its name four times, was fitted ' +
                  'with an engine, and ended up as a support ship for divers. In 1997 the ' +
                  'museum bought it at auction and brought it back to the shape it had when ' +
                  'it first sailed. You visit it from the deck, except on the days it is ' +
                  'away: it still puts up its sails.',
              },
              question: {
                q: {
                  el: 'Πώς απέκτησε το μουσείο αυτό το πλοίο;',
                  en: 'How did the museum come to own this ship?',
                },
                answers: [
                  { el: 'Το αγόρασε σε δημοπρασία', en: 'It bought it at an auction' },
                  { el: 'Το έχτισε μόνο του στο ναυπηγείο', en: 'It built it itself in the shipyard' },
                  { el: 'Το βρήκε βυθισμένο στο λιμάνι', en: 'It found it sunk in the harbour' },
                  { el: 'Το χάρισε ο βασιλιάς της Ισπανίας', en: 'The King of Spain gave it as a gift' },
                ],
                explanation: {
                  el: 'Το 1997, όταν ήταν ένα κουρασμένο πλοίο υποστήριξης δυτών. Η αποκατάστασή του ήταν η πρώτη τέτοια στην Ισπανία.',
                  en: 'In 1997, when it was a tired diving-support ship. Its restoration was the first of its kind in Spain.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'barcelona-museu-maritim-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι εξήντα μέτρα μακριά και έχω πενήντα εννέα κουπιά, αλλά δεν άγγιξα ποτέ ' +
              'τη θάλασσα. Αντιγράφω ένα πλοίο που πολέμησε πριν από τετρακόσια πενήντα ' +
              'χρόνια, και η πρύμνη μου λάμπει σαν παλάτι.',
            en:
              'I am sixty metres long and have fifty-nine oars, but I have never touched the ' +
              'sea. I copy a ship that fought four hundred and fifty years ago, and my stern ' +
              'shines like a palace.',
          },
          hint: {
            el: 'Γεμίζω μια ολόκληρη αίθουσα μόνη μου.',
            en: 'I fill a whole hall on my own.',
          },
          answerExhibitId: 'barcelona-museu-maritim-royal-galley',
        },
        {
          id: 'barcelona-museu-maritim-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Έχω σχήμα ψαριού και είμαι από ξύλο ελιάς ντυμένο με χαλκό. Χωράω πέντε ' +
              'ανθρώπους και κατεβαίνω εκεί όπου τα άλλα πλοία φοβούνται. Δεν με έφτιαξαν ' +
              'για να βυθίζω κανέναν, αλλά για να μην πνίγεται κανείς.',
            en:
              'I am shaped like a fish and made of olive wood dressed in copper. I hold five ' +
              'people and I go down where other ships fear to go. I was not made to sink ' +
              'anyone, but so that nobody would drown.',
          },
          hint: {
            el: 'Ο εφευρέτης μου με πρωτοβούτηξε στο λιμάνι της Βαρκελώνης το 1859.',
            en: 'My inventor first dived me in Barcelona harbour in 1859.',
          },
          answerExhibitId: 'barcelona-museu-maritim-ictineo-model',
        },
        {
          id: 'barcelona-museu-maritim-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι ένα κορίτσι από ξύλο, και ο πατέρας μου με έβαλε μπροστά μπροστά στο ' +
              'πλοίο του για να με βλέπει. Ταξίδεψα ως τη Βραζιλία και γύρισα, ενώ το πλοίο ' +
              'μου έμεινε εκεί για πάντα.',
            en:
              'I am a girl made of wood, and my father put me right at the front of his ship ' +
              'so he could see me. I travelled as far as Brazil and came back, while my ship ' +
              'stayed there for good.',
          },
          hint: {
            el: 'Ψάξε ένα πρόσωπο που κοίταζε πάντα τη θάλασσα πρώτο.',
            en: 'Look for a face that always saw the sea first.',
          },
          answerExhibitId: 'barcelona-museu-maritim-blanca-aurora',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- camp nou
  {
    id: 'barcelona-camp-nou',
    cityId: 'barcelona',
    emoji: '⚽',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Καμπ Νόου', en: 'Camp Nou' },
    tagline: {
      el: 'Το μεγαλύτερο στάδιο της Ευρώπης, που ξαναχτίζεται γύρω από το γήπεδό του',
      en: 'Europe’s biggest stadium, being rebuilt around its own pitch',
    },
    story: {
      el:
        'Το όνομα σημαίνει απλώς «νέο γήπεδο» στα καταλανικά, γιατί όταν άνοιξε, στις 24 ' +
        'Σεπτεμβρίου 1957, αντικατέστησε το παλιό γήπεδο της Μπαρτσελόνα λίγους δρόμους ' +
        'πιο πέρα. Χωρούσε τότε πάνω από εκατό χιλιάδες θεατές, και για δεκαετίες ήταν το ' +
        'μεγαλύτερο στάδιο της Ευρώπης. Τον Ιούνιο του 2023 η ομάδα έφυγε για να ' +
        'ξαναχτιστεί το στάδιο σχεδόν από την αρχή: έμεινε το γήπεδο, έμειναν οι κάτω ' +
        'κερκίδες, και γύρω τους σηκώθηκαν καινούργιες, με στέγη. Στις 22 Νοεμβρίου 2025 η ' +
        'Μπαρτσελόνα γύρισε σπίτι της, με περίπου 45.000 θέσεις ανοιχτές και τους γερανούς ' +
        'να δουλεύουν ακόμα. Όταν τελειώσει, το 2027, θα χωράει κοντά 105.000 θεατές, ' +
        'περισσότερους από κάθε άλλο στάδιο της Ευρώπης. Το μουσείο της ομάδας, μέσα στο ' +
        'στάδιο, δέχεται πάνω από ένα εκατομμύριο επισκέπτες τον χρόνο και είναι από τα ' +
        'πιο πολυσύχναστα της Καταλονίας. Από το 2022 το στάδιο φέρει και το όνομα ενός ' +
        'χορηγού. Και όταν η ομάδα κερδίζει κάτι μεγάλο, οι φίλαθλοι δεν μένουν εδώ: ' +
        'κατεβαίνουν στο σιντριβάνι της Καναλέτες, στη Ράμπλα.',
      en:
        'The name simply means “new field” in Catalan, because when it opened, on 24 ' +
        'September 1957, it replaced FC Barcelona’s old ground a few streets away. It held ' +
        'more than a hundred thousand spectators then, and for decades it was the biggest ' +
        'stadium in Europe. In June 2023 the team moved out so the stadium could be rebuilt ' +
        'almost from scratch: the pitch stayed, the lower stands stayed, and new tiers with ' +
        'a roof rose around them. On 22 November 2025 Barcelona came home, with about ' +
        '45,000 seats open and the cranes still at work. When it is finished, in 2027, it ' +
        'will hold close to 105,000 people, more than any other stadium in Europe. The ' +
        'club’s museum, inside the stadium, receives more than a million visitors a year ' +
        'and is one of the most visited in Catalonia. Since 2022 the stadium has also ' +
        'carried a sponsor’s name. And when the team wins something big, the fans do not ' +
        'stay here: they go down to the Canaletes fountain on La Rambla.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 24 Σεπτεμβρίου 1957.',
        en: 'It opened on 24 September 1957.',
      },
      {
        el: 'Ξανάνοιξε μισοτελειωμένο τον Νοέμβριο του 2025· όταν ολοκληρωθεί θα χωράει κοντά 105.000 θεατές.',
        en: 'It reopened half-finished in November 2025; when complete it will hold close to 105,000 people.',
      },
      {
        el: 'Το μουσείο της ομάδας δέχεται πάνω από ένα εκατομμύριο επισκέπτες τον χρόνο.',
        en: 'The club museum receives more than a million visitors a year.',
      },
    ],
    location: {
      lat: 41.38083,
      lng: 2.12278,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q159848', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Camp Nou', deltaM: 4 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.207, y: 0.722 },
    },
    question: {
      q: {
        el: 'Τι σημαίνει «Καμπ Νόου» στα καταλανικά;',
        en: 'What does “Camp Nou” mean in Catalan?',
      },
      answers: [
        { el: 'Νέο γήπεδο', en: 'New field' },
        { el: 'Μεγάλο στάδιο', en: 'Big stadium' },
        { el: 'Γήπεδο των ονείρων', en: 'Field of dreams' },
        { el: 'Σπίτι των πρωταθλητών', en: 'Home of champions' },
      ],
      explanation: {
        el:
          'Ήταν «νέο» το 1957, σε σχέση με το παλιό γήπεδο της Λες Κορτς. Το όνομα ' +
          'έμεινε, κι ας είναι πια εβδομήντα χρόνων.',
        en:
          'It was “new” in 1957, compared with the old ground at Les Corts. The name stuck, ' +
          'even now that it is seventy years old.',
      },
    },
  },

  // ------------------------------------------------------------------------ zoo
  {
    id: 'barcelona-zoo',
    cityId: 'barcelona',
    emoji: '🦍',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ζωολογικός Κήπος της Βαρκελώνης', en: 'Barcelona Zoo' },
    tagline: {
      el: 'Εδώ έζησε 37 χρόνια ο μοναδικός άσπρος γορίλας',
      en: 'Where the only white gorilla lived for 37 years',
    },
    story: {
      el:
        'Ο ζωολογικός άνοιξε στις 24 Σεπτεμβρίου 1892, ανήμερα της Μερσέ, της γιορτής της ' +
        'πόλης, όταν ένας πλούσιος Βαρκελωνέζος, ο Λουίς Μαρτί ι Κοντουλάρ, χάρισε στην ' +
        'πόλη τη συλλογή ζώων που κρατούσε στο κτήμα του. Τα έβαλαν μέσα στο πάρκο ' +
        'Σιουταδέγια, όπου βρίσκονται ακόμα, σε δεκατρία εκτάρια. Το πιο διάσημο ζώο που ' +
        'έζησε εδώ ήταν ένας γορίλας. Το 1966 τον έφεραν από την Ισημερινή Γουινέα, ' +
        'μικρό, με άσπρο τρίχωμα και γαλάζια μάτια: ήταν αλμπίνος, ο μόνος άσπρος γορίλας ' +
        'που έχει δει ποτέ κανείς. Τον ονόμασαν Φλοκέτ ντε Νέου, Νιφάδα. Έζησε εδώ ως το ' +
        '2003, έγινε πατέρας 21 μικρών, όλα με κανονικό σκούρο τρίχωμα, και για δεκαετίες ' +
        'ήταν το πρόσωπο της πόλης. Το 2018 η πόλη αποφάσισε ότι η Βαρκελώνη δεν θα κρατά ' +
        'άλλα δελφίνια, και το καλοκαίρι του 2020 τα τρία τελευταία πέταξαν σε έναν ' +
        'ζωολογικό κήπο στην Αθήνα, γιατί μια δεξαμενή είναι πολύ μικρή ' +
        'για ζώα που κολυμπούν εκατό χιλιόμετρα τη μέρα. Σήμερα έχει μια σαβάνα με ' +
        'καμηλοπαρδάλεις, λιοντάρια και ελέφαντες, ένα από τα μεγαλύτερα ερπετάρια της ' +
        'Ευρώπης, και δουλεύει για να γυρίζουν ζώα που κινδυνεύουν πίσω στη φύση.',
      en:
        'The zoo opened on 24 September 1892, the day of La Mercè, the city’s festival, ' +
        'when a rich Barcelonan, Lluís Martí i Codolar, gave the city the collection of ' +
        'animals he kept on his estate. They were housed in the Ciutadella park, where the ' +
        'zoo still is, on thirteen hectares. The most famous animal ever to live here was a ' +
        'gorilla. In 1966 he was brought from Equatorial Guinea as a youngster, with white ' +
        'fur and blue eyes: he was an albino, the only white gorilla anyone has ever seen. ' +
        'He was named Floquet de Neu, Snowflake. He lived here until 2003, became the ' +
        'father of 21 young, all with ordinary dark fur, and for decades he was the face of ' +
        'the city. In 2018 the city decided Barcelona would keep no more dolphins, and in ' +
        'the summer of 2020 the last three flew to a zoo in Athens, because a tank is far ' +
        'too small for animals that swim a hundred kilometres ' +
        'a day. Today it has a savannah with giraffes, lions and elephants, one of the ' +
        'largest reptile houses in Europe, and it works on returning endangered animals to ' +
        'the wild.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 24 Σεπτεμβρίου 1892, τη γιορτή της Μερσέ.',
        en: 'It opened on 24 September 1892, on the feast of La Mercè.',
      },
      {
        el: 'Ο Φλοκέτ ντε Νέου, ο μοναδικός γνωστός άσπρος γορίλας, έζησε εδώ από το 1966 ως το 2003.',
        en: 'Snowflake, the only known white gorilla, lived here from 1966 to 2003.',
      },
      {
        el: 'Τα τελευταία δελφίνια έφυγαν το 2020, αφού η πόλη αποφάσισε το 2018 να μην κρατά άλλα.',
        en: 'The last dolphins left in 2020, after the city decided in 2018 to keep none.',
      },
    ],
    location: {
      lat: 41.38788,
      lng: 2.19119,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q220013', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Barcelona Zoo', deltaM: 139 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone. Wikipedia sits 139 m away, which is ordinary for a site this size.',
      map: { x: 0.829, y: 0.628 },
      // zoobarcelona.cat/en/planifica-la-teva-visita/how-to-arrive: access is through the
      // Parc de la Ciutadella entrance (the Carrer de Wellington gate was closed to visitors).
      findIt: {
        el: 'Μπαίνεις από μέσα από το πάρκο Σιουταδέγια: η είσοδος του ζωολογικού είναι στην άκρη του πάρκου, προς τη θάλασσα.',
        en: 'You go in through the Parc de la Ciutadella: the zoo entrance is at the edge of the park, on the side towards the sea.',
      },
    },
    question: {
      q: {
        el: 'Τι έκανε τον Φλοκέτ ντε Νέου διαφορετικό από κάθε άλλο γορίλα;',
        en: 'What made Snowflake different from every other gorilla?',
      },
      answers: [
        { el: 'Ήταν άσπρος', en: 'He was white' },
        { el: 'Ήξερε να μετράει', en: 'He could count' },
        { el: 'Γεννήθηκε εδώ', en: 'He was born here' },
        { el: 'Ήταν διπλάσιος', en: 'He was twice as big' },
      ],
      explanation: {
        el:
          'Ήταν αλμπίνος: το σώμα του δεν έφτιαχνε χρωστική. Τα 21 παιδιά του ήταν όλα ' +
          'σκούρα, όπως όλοι οι γορίλες.',
        en:
          'He was an albino: his body made no pigment. All 21 of his children were dark, ' +
          'like every other gorilla.',
      },
    },
  },

  // --------------------------------------------------------------------- aquarium
  {
    id: 'barcelona-aquarium',
    cityId: 'barcelona',
    emoji: '🦈',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Το Ενυδρείο της Βαρκελώνης', en: 'L’Aquàrium de Barcelona' },
    tagline: {
      el: 'Περπάτα κάτω από καρχαρίες σε ένα τούνελ 80 μέτρων',
      en: 'Walk under sharks in an 80-metre tunnel',
    },
    story: {
      el:
        'Το ενυδρείο άνοιξε στις 8 Σεπτεμβρίου 1995 στο παλιό λιμάνι, πάνω σε μια ' +
        'προβλήτα που τη φτάνεις από μια ξύλινη γέφυρα. Έχει περίπου τριάντα πέντε ' +
        'δεξαμενές με έντεκα χιλιάδες ζώα από τετρακόσια πενήντα είδη, και τα περισσότερα ' +
        'έρχονται από τη ' +
        'θάλασσα που είναι ακριβώς έξω από την πόρτα, τη Μεσόγειο: χταπόδια που κρύβονται ' +
        'σε πέτρες, σμέρνες που κοιτάζουν από τρύπες, ιππόκαμποι που κρατιούνται με την ' +
        'ουρά. Το κεντρικό κομμάτι είναι το Ωκεανάριο, μια στρογγυλή δεξαμενή 36 μέτρων ' +
        'με βάθος πέντε μέτρα και περίπου τέσσερα εκατομμύρια λίτρα νερό. Μέσα από αυτήν ' +
        'περνάει ένα γυάλινο τούνελ μήκους πάνω από ογδόντα μέτρα, και όσο το διασχίζεις ' +
        'πάνω από το κεφάλι σου περνούν δύο είδη καρχαρία, σαλάχια, ροφοί, τσιπούρες, και ' +
        'ένα από τα πιο παράξενα ψάρια της θάλασσας, ο φεγγαρόψαρος, που μοιάζει με ' +
        'τεράστιο κεφάλι χωρίς σώμα. Οι καρχαρίες φαίνονται τρομακτικοί και δεν είναι: ' +
        'τρώνε ψάρια, όχι ανθρώπους, και κολυμπούν ασταμάτητα γιατί έτσι αναπνέουν. Κάθε ' +
        'χρόνο το ενυδρείο περιθάλπει και χελώνες που τραυματίστηκαν στη θάλασσα.',
      en:
        'The aquarium opened on 8 September 1995 in the old harbour, on a quay you reach ' +
        'by a wooden walkway. It has about thirty-five tanks holding eleven thousand ' +
        'animals of four hundred and fifty species, and most of them come from the sea ' +
        'right outside the door, ' +
        'the Mediterranean: octopuses hiding among rocks, moray eels staring out of holes, ' +
        'seahorses holding on by their tails. The centrepiece is the Oceanarium, a round ' +
        'tank 36 metres across, five metres deep, with about four million litres of water. ' +
        'A glass tunnel more than eighty metres long runs through it, and as you cross, two ' +
        'kinds of shark pass over your head, along with rays, groupers, sea bream, and one ' +
        'of the strangest fish in the sea, the sunfish, which looks like a huge head with ' +
        'no body. The sharks look frightening and are not: they eat fish, not people, and ' +
        'they swim without stopping because that is how they breathe. Every year the ' +
        'aquarium also nurses sea turtles that were injured out at sea.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 8 Σεπτεμβρίου 1995, στο παλιό λιμάνι.',
        en: 'It opened on 8 September 1995, in the old harbour.',
      },
      {
        el: 'Το τούνελ μέσα από το Ωκεανάριο έχει μήκος πάνω από 80 μέτρα.',
        en: 'The tunnel through the Oceanarium is more than 80 metres long.',
      },
      {
        el: 'Έχει περίπου 35 δεξαμενές με 11.000 ζώα από 450 είδη.',
        en: 'It has about 35 tanks with 11,000 animals of 450 species.',
      },
    ],
    location: {
      lat: 41.37667,
      lng: 2.18417,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1200948', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Aquarium Barcelona', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.765, y: 0.778 },
      // aquariumbcn.com/en/about-us/presentation gives the address as Moll d’Espanya del Port
      // Vell, s/n.
      findIt: {
        el: 'Είναι στην προβλήτα Μολ ντ’Εσπάνια, στο παλιό λιμάνι: περνάς την ξύλινη γέφυρα που ξεκινάει δίπλα στην κολόνα του Κολόμβου.',
        en: 'It is on the Moll d’Espanya quay in the old harbour: cross the wooden walkway that starts beside the Columbus column.',
      },
    },
    question: {
      q: {
        el: 'Από ποια θάλασσα έρχονται τα περισσότερα ζώα του ενυδρείου;',
        en: 'Which sea do most of the aquarium’s animals come from?',
      },
      answers: [
        { el: 'Τη Μεσόγειο', en: 'The Mediterranean' },
        { el: 'Την Καραϊβική, κοντά στην Κούβα', en: 'The Caribbean, near Cuba' },
        { el: 'Την Ερυθρά Θάλασσα, δίπλα στην Αίγυπτο', en: 'The Red Sea, by Egypt' },
        { el: 'Τον Ειρηνικό Ωκεανό, κοντά στην Ιαπωνία', en: 'The Pacific, near Japan' },
      ],
      explanation: {
        el:
          'Είναι η θάλασσα που βρίσκεται ακριβώς έξω από την πόρτα. Το ενυδρείο είναι το ' +
          'μεγαλύτερο της Ευρώπης για είδη της Μεσογείου.',
        en:
          'It is the sea right outside the door. The aquarium is the largest in Europe for ' +
          'Mediterranean species.',
      },
    },
  },

  // ------------------------------------------------------------------- tibidabo
  {
    id: 'barcelona-tibidabo',
    cityId: 'barcelona',
    emoji: '🎡',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Λούνα παρκ του Τιμπιντάμπο', en: 'Tibidabo Amusement Park' },
    tagline: {
      el: 'Ένα λούνα παρκ στην κορυφή της πόλης, από το 1901',
      en: 'An amusement park on top of the city, since 1901',
    },
    story: {
      el:
        'Το Τιμπιντάμπο είναι η ψηλότερη κορυφή των λόφων πίσω από τη Βαρκελώνη, 512 ' +
        'μέτρα, και από εκεί πάνω βλέπεις ολόκληρη την πόλη ως τη θάλασσα. Στις 29 ' +
        'Οκτωβρίου 1901 άνοιξε το πρώτο τελεφερίκ σε ράγες της Ισπανίας, για να ανεβάζει ' +
        'τον κόσμο στην κορυφή, και μαζί του άνοιξε το λούνα παρκ: είναι το παλαιότερο της ' +
        'Ισπανίας και από τα παλαιότερα της Ευρώπης. Το παράξενο είναι ότι τα παλιά ' +
        'παιχνίδια δουλεύουν ακόμα. Ο Εναέριος Σιδηρόδρομος του 1915 κρέμεται έξω από τον ' +
        'γκρεμό. Η Ταλάια, ένας μεταλλικός πύργος 50 μέτρων από το 1921, σε ανεβάζει σε μια ' +
        'καμπίνα 551 μέτρα πάνω από τη θάλασσα. Και το Αβιό, από το 1928, είναι ένα ' +
        'κόκκινο αεροπλάνο, αντίγραφο εκείνου που έκανε την πρώτη πτήση Βαρκελώνη–' +
        'Μαδρίτη, που γυρίζει σε κύκλο κρεμασμένο από ένα μπράτσο πάνω από το κενό. Υπάρχει ' +
        'ένα μουσείο με αυτόματα, μηχανικά παιχνίδια των αρχών του 1900 που ζωντανεύουν με ' +
        'ένα κέρμα, και δίπλα στο λούνα παρκ μια εκκλησία με ένα άγαλμα στην κορυφή της. ' +
        'Από το 2021 ένα καινούργιο τελεφερίκ, η Κούκα ντε Λιουμ, η πυγολαμπίδα, ανεβαίνει ' +
        'σε τέσσερα λεπτά.',
      en:
        'Tibidabo is the highest peak of the hills behind Barcelona, 512 metres, and from ' +
        'up there you see the whole city down to the sea. On 29 October 1901 the first ' +
        'funicular railway in Spain opened to carry people to the top, and with it the ' +
        'amusement park opened: it is the oldest in Spain and one of the oldest in Europe. ' +
        'The strange thing is that the old rides still work. The Aerial Railway of 1915 ' +
        'hangs out over the drop. The Talaia, a 50-metre metal tower from 1921, lifts you ' +
        'in a cabin to 551 metres above the sea. And the Avió, from 1928, is a red ' +
        'aeroplane, a copy of the one that made the first Barcelona–Madrid flight, which ' +
        'circles on the end of an arm out over nothing. There is a museum of automata, ' +
        'mechanical toys from the early 1900s that come to life for a coin, and beside the ' +
        'park stands a church with a statue on its top. Since 2021 a new funicular, the Cuca ' +
        'de Llum, the glow-worm, climbs up in four minutes.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 29 Οκτωβρίου 1901, μαζί με το πρώτο τελεφερίκ σε ράγες της Ισπανίας.',
        en: 'It opened on 29 October 1901, together with the first funicular railway in Spain.',
      },
      {
        el: 'Το Αβιό, το αεροπλάνο, πετάει σε κύκλο από το 1928.',
        en: 'The Avió, the aeroplane ride, has flown in circles since 1928.',
      },
      {
        el: 'Η κορυφή του Τιμπιντάμπο έχει ύψος 512 μέτρα.',
        en: 'The summit of Tibidabo is 512 metres high.',
      },
    ],
    location: {
      lat: 41.42175,
      lng: 2.12004,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1138985', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Tibidabo Amusement Park', deltaM: 51 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OpenStreetMap did not answer in the resolver run (the fetch failed), so the grade rests on Wikidata and Wikipedia alone. Wikipedia sits 51 m away, which is ordinary for a site this size.',
      map: { x: 0.182, y: 0.177 },
      // tibidabo.cat/en/plan-the-visit/how-to-get-here: the Cuca de Llum funicular leaves from
      // Plaça del Doctor Andreu and arrives at the park in four minutes.
      findIt: {
        el: 'Πάρε το τελεφερίκ Κούκα ντε Λιουμ από την πλατεία Ντοκτόρ Αντρέου· σε τέσσερα λεπτά σε αφήνει στην πύλη του πάρκου.',
        en: 'Take the Cuca de Llum funicular from Plaça del Doctor Andreu; in four minutes it drops you at the park gate.',
      },
    },
    question: {
      q: {
        el: 'Τι αντιγράφει το Αβιό, το παιχνίδι που γυρίζει πάνω από το κενό;',
        en: 'What does the Avió, the ride that circles over the drop, copy?',
      },
      answers: [
        { el: 'Ένα παλιό αεροπλάνο', en: 'An early plane' },
        { el: 'Έναν πύραυλο από ταινία', en: 'A rocket from a film' },
        { el: 'Το πρώτο ελικόπτερο της χώρας', en: 'Spain’s first helicopter' },
        { el: 'Ένα αερόστατο του 19ου αιώνα', en: 'A balloon of the 1800s' },
      ],
      explanation: {
        el:
          'Είναι αντίγραφο του αεροπλάνου που έκανε την πρώτη πτήση Βαρκελώνη–Μαδρίτη. ' +
          'Πετάει από το 1928, πάντα σε κύκλο.',
        en:
          'It is a copy of the plane that made the first Barcelona–Madrid flight. It has ' +
          'been flying since 1928, always in a circle.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'barcelona-first-time',
    cityId: 'barcelona',
    emoji: '🎨',
    name: { el: 'Πρώτη φορά στη Βαρκελώνη', en: 'First time in Barcelona' },
    promise: {
      el: 'Τρία κτίρια του Γκαουντί, ο πιο διάσημος περίπατος της Ισπανίας, μια αγορά και δεκατρείς χήνες.',
      en: 'Three Gaudí buildings, the most famous walk in Spain, a market and thirteen geese.',
    },
    placeIds: [
      'barcelona-sagrada-familia',
      'barcelona-casa-batllo',
      'barcelona-casa-mila',
      'barcelona-font-de-canaletes',
      'barcelona-boqueria',
      'barcelona-cathedral',
    ],
  },
  {
    id: 'barcelona-two-hours-down-la-rambla',
    cityId: 'barcelona',
    emoji: '⏱️',
    name: { el: 'Δύο ώρες κατά μήκος της Ράμπλα', en: 'Two hours down La Rambla' },
    promise: {
      el: 'Από το σιντριβάνι στην κορυφή ως τον θαλασσοπόρο στην κολόνα, όλα με τα πόδια, κατηφορικά.',
      en: 'From the fountain at the top to the sailor on his column, all on foot, all downhill.',
    },
    placeIds: [
      'barcelona-font-de-canaletes',
      'barcelona-boqueria',
      'barcelona-placa-reial',
      'barcelona-columbus-monument',
    ],
  },
  {
    id: 'barcelona-rainy-day',
    cityId: 'barcelona',
    emoji: '☔',
    name: { el: 'Μια μέρα με βροχή', en: 'A rainy day' },
    promise: {
      el: 'Ένα δάσος όπου βρέχει επίτηδες, μια γαλέρα κάτω από καμάρες, καρχαρίες πάνω από το κεφάλι σου και ένα στάδιο με μουσείο.',
      en: 'A forest where it rains on purpose, a galley under stone arches, sharks over your head and a stadium with a museum.',
    },
    placeIds: [
      'barcelona-cosmocaixa',
      'barcelona-museu-maritim',
      'barcelona-aquarium',
      'barcelona-camp-nou',
    ],
  },
  {
    id: 'barcelona-up-high-and-down-by-the-park',
    cityId: 'barcelona',
    emoji: '🎡',
    name: { el: 'Ψηλά στους λόφους, κάτω στο πάρκο', en: 'Up on the hills, down in the park' },
    promise: {
      el: 'Δύο λόφοι με θέα τη θάλασσα, μια πύλη για γιορτή και ένας άσπρος γορίλας που θυμούνται όλοι.',
      en: 'Two hills with a view of the sea, a gate built for a party, and a white gorilla everyone remembers.',
    },
    placeIds: [
      'barcelona-tibidabo',
      'barcelona-park-guell',
      'barcelona-arc-de-triomf',
      'barcelona-zoo',
    ],
  },
];
