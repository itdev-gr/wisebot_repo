/**
 * WiseBot World — Thessaloniki.
 *
 * Seventeen places, two of them museums with an interior. The city is unusual for this
 * module because its layers are not buried: a Roman arch, a Byzantine church and a
 * working market sit within three streets of each other, all still in use. Where a
 * story involves a prison, an execution or the fire of 1917, it is told plainly and
 * briefly rather than skipped or softened.
 *
 * Every coordinate is copied from `data/world/coords/thessaloniki.json`, produced by
 * `scripts/world/resolve-coords.mjs`. Nothing graded `D`. Two places a child would
 * enjoy were left out because Wikidata has no item for them and a coordinate may not be
 * typed by hand: the Zongolopoulos Umbrellas on the waterfront, and the waterfront park
 * itself.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ----------------------------------------------------------------- white tower
  {
    id: 'thessaloniki-white-tower',
    cityId: 'thessaloniki',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Λευκός Πύργος', en: 'The White Tower' },
    tagline: {
      el: 'Το σήμα της πόλης, που κάποτε δεν ήταν καθόλου λευκό',
      en: 'The city’s emblem, which was once not white at all',
    },
    story: {
      el:
        'Ο Λευκός Πύργος στέκεται στην άκρη της παραλίας, στρογγυλός και χοντρός, ' +
        'τριάντα τέσσερα μέτρα ψηλός. Χτίστηκε γύρω στον 15ο αιώνα, στη γωνία όπου τα ' +
        'τείχη της πόλης συναντούσαν τη θάλασσα, και ήταν κομμάτι της άμυνας. Αργότερα ' +
        'έγινε φυλακή, και τότε τον έλεγαν με άλλα ονόματα, πολύ πιο σκοτεινά. Η ιστορία ' +
        'που λένε οι Θεσσαλονικείς είναι ότι στα τέλη του 19ου αιώνα ένας κρατούμενος ' +
        'ανέλαβε να τον ασβεστώσει ολόκληρο με αντάλλαγμα την ελευθερία του. Είτε έγινε ' +
        'έτσι είτε όχι, ο πύργος ασβεστώθηκε, το όνομα άλλαξε, και έμεινε Λευκός ακόμα και ' +
        'όταν ο ασβέστης ξεθώριασε. Σήμερα δεν κρατάει κανέναν: μέσα του ανεβαίνεις μια ' +
        'σπειροειδή ράμπα έξι ορόφων, με το μουσείο της πόλης γύρω σου, και βγαίνεις στην ' +
        'κορυφή για να δεις τον Θερμαϊκό και, τις καθαρές μέρες, τον Όλυμπο απέναντι.',
      en:
        'The White Tower stands at the end of the seafront, round and thick, thirty-four ' +
        'metres tall. It was built around the 15th century on the corner where the city ' +
        'walls met the sea, and it was part of the defences. Later it became a prison, and ' +
        'in those years it was called by other names, much darker ones. The story people in ' +
        'Thessaloniki tell is that in the late 19th century a prisoner offered to whitewash ' +
        'the whole thing in exchange for his freedom. Whether or not it happened that way, ' +
        'the tower was whitewashed, the name changed, and White it stayed even after the ' +
        'lime wore off. Today it holds nobody: inside you climb a spiral ramp through six ' +
        'floors with the city museum around you, and come out on top to see the Thermaic ' +
        'Gulf and, on clear days, Mount Olympus across the water.',
    },
    facts: [
      {
        el: 'Έχει ύψος περίπου 34 μέτρα και έξι ορόφους που ανεβαίνεις με ράμπα.',
        en: 'It is about 34 metres tall, with six floors you climb by a ramp.',
      },
      {
        el: 'Στεκόταν στη γωνία όπου τα τείχη της πόλης έφταναν στη θάλασσα.',
        en: 'It stood on the corner where the city walls reached the sea.',
      },
      {
        el: 'Το όνομα «Λευκός» ήρθε από ένα ασβέστωμα του 19ου αιώνα και έμεινε.',
        en: 'The name "White" came from a 19th-century whitewash and stuck.',
      },
    ],
    location: {
      lat: 40.62639,
      lng: 22.94833,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q550576', deltaM: 0 },
        { kind: 'osm', ref: 'way/730026417', deltaM: 8 },
        { kind: 'wikipedia', ref: 'White Tower of Thessaloniki', deltaM: 3 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Πώς πήρε το όνομά του ο Λευκός Πύργος;',
        en: 'How did the White Tower get its name?',
      },
      answers: [
        {
          el: 'Τον ασβέστωσαν τον 19ο αιώνα και το όνομα έμεινε',
          en: 'It was whitewashed in the 19th century and the name stuck',
        },
        {
          el: 'Είναι χτισμένος από λευκό μάρμαρο Πεντέλης',
          en: 'It is built from white marble from Mount Penteli',
        },
        {
          el: 'Το χιόνι τον σκεπάζει κάθε χειμώνα',
          en: 'Snow covers it every winter',
        },
        {
          el: 'Τον έχτισε ένας αρχιτέκτονας που λεγόταν Λευκός',
          en: 'It was built by an architect called Lefkos',
        },
      ],
      explanation: {
        el:
          'Ο ασβέστης έφυγε με τα χρόνια, το όνομα όχι. Έτσι γίνονται τα περισσότερα ' +
          'ονόματα πόλεων και κτιρίων.',
        en:
          'The lime came off over the years; the name did not. That is how most names of ' +
          'buildings and cities happen.',
      },
    },
  },

  // --------------------------------------------------------------------- rotunda
  {
    id: 'thessaloniki-rotunda',
    cityId: 'thessaloniki',
    emoji: '⭕',
    category: 'landmark',
    difficulty: 3,

    name: { el: 'Ροτόντα', en: 'The Rotunda' },
    tagline: {
      el: 'Ένα κυκλικό κτίριο που άλλαξε θρησκεία τρεις φορές',
      en: 'A round building that changed religion three times',
    },
    story: {
      el:
        'Η Ροτόντα είναι ένας τεράστιος κύλινδρος από τούβλα, χτισμένος γύρω στο 306 μ.Χ. ' +
        'για τον αυτοκράτορα Γαλέριο. Κανείς δεν ξέρει με βεβαιότητα τι ήθελε να είναι ' +
        'αρχικά: ναός, ή ο ίδιος του ο τάφος. Οι τοίχοι της έχουν πάχος πάνω από έξι ' +
        'μέτρα, και ο θόλος της είναι περίπου είκοσι τεσσεράμισι μέτρα φαρδύς. Αυτό το ' +
        'πάχος είναι ο λόγος που στέκεται ακόμα μετά από χίλια εφτακόσια χρόνια και μετά ' +
        'από σεισμούς που γκρέμισαν σχεδόν τα πάντα γύρω της. Έγινε χριστιανική εκκλησία ' +
        'και γέμισε ψηφιδωτά με χρυσό φόντο. Έγινε τζαμί στα χρόνια της Οθωμανικής ' +
        'αυτοκρατορίας, και δίπλα της χτίστηκε ένας μιναρές που στέκεται ακόμα, ο μόνος ' +
        'που έμεινε σε ολόκληρη τη Θεσσαλονίκη. Σήμερα είναι μνημείο και χώρος για ' +
        'εκθέσεις, και μπαίνεις μέσα σε έναν χώρο που δεν ανήκει πια σε καμία εποχή ' +
        'ξεχωριστά.',
      en:
        'The Rotunda is an enormous cylinder of brick, built around AD 306 for the emperor ' +
        'Galerius. Nobody knows for certain what it was meant to be: a temple, or his own ' +
        'tomb. Its walls are more than six metres thick and its dome is about twenty-four ' +
        'and a half metres across. That thickness is the reason it is still standing after ' +
        'seventeen hundred years and after earthquakes that brought down almost everything ' +
        'around it. It became a Christian church and filled with mosaics on gold ' +
        'backgrounds. It became a mosque under the Ottoman Empire, and a minaret was built ' +
        'beside it that is still there, the only one left in the whole of Thessaloniki. ' +
        'Today it is a monument and an exhibition space, and you walk into a room that no ' +
        'longer belongs to any one period.',
    },
    facts: [
      {
        el: 'Οι τοίχοι της έχουν πάχος πάνω από 6 μέτρα.',
        en: 'Its walls are more than 6 metres thick.',
      },
      {
        el: 'Ο θόλος της έχει διάμετρο περίπου 24,5 μέτρα.',
        en: 'Its dome is about 24.5 metres across.',
      },
      {
        el: 'Ο μιναρές δίπλα της είναι ο μόνος που σώζεται στη Θεσσαλονίκη.',
        en: 'The minaret beside it is the only one left standing in Thessaloniki.',
      },
    ],
    location: {
      lat: 40.6333,
      lng: 22.95285,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1584841', deltaM: 0 },
        { kind: 'osm', ref: 'way/14788383', deltaM: 10 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Wikipedia files the Rotunda together with the Arch of Galerius under one article, so it has no separate coordinate to cross-check against. OSM agrees with Wikidata to 10 m.',
    },
    question: {
      q: {
        el: 'Γιατί άντεξε η Ροτόντα σεισμούς που γκρέμισαν τα γύρω κτίρια;',
        en: 'Why did the Rotunda survive earthquakes that flattened the buildings around it?',
      },
      answers: [
        {
          el: 'Γιατί οι τοίχοι της έχουν πάχος πάνω από έξι μέτρα',
          en: 'Because its walls are more than six metres thick',
        },
        {
          el: 'Γιατί είναι χτισμένη πάνω σε λάστιχο',
          en: 'Because it is built on rubber',
        },
        {
          el: 'Γιατί είναι φτιαγμένη από ξύλο, που λυγίζει',
          en: 'Because it is made of wood, which bends',
        },
        {
          el: 'Γιατί την ξαναχτίζουν κάθε εκατό χρόνια',
          en: 'Because it is rebuilt every hundred years',
        },
      ],
      explanation: {
        el:
          'Ένας χοντρός κυκλικός τοίχος μοιράζει τις δυνάμεις παντού γύρω. Δεν έχει γωνία ' +
          'για να σπάσει.',
        en:
          'A thick circular wall spreads the forces all the way around. There is no corner ' +
          'for it to crack at.',
      },
    },
  },

  // ------------------------------------------------------------- arch of galerius
  {
    id: 'thessaloniki-arch-of-galerius',
    cityId: 'thessaloniki',
    emoji: '🏛️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Αψίδα του Γαλερίου', en: 'The Arch of Galerius' },
    tagline: {
      el: 'Η Καμάρα: μια πύλη πάνω στον δρόμο που ένωνε δύο θάλασσες',
      en: 'The Kamara: a gate over the road that joined two seas',
    },
    story: {
      el:
        'Οι Θεσσαλονικείς τη λένε απλώς Καμάρα, και είναι το πιο συνηθισμένο ραντεβού της ' +
        'πόλης: «στην Καμάρα, στις έξι». Χτίστηκε γύρω στο 299 μ.Χ. για να γιορτάσει μια ' +
        'νίκη του αυτοκράτορα Γαλέριου. Αρχικά δεν ήταν μία καμάρα αλλά ένα μεγάλο ' +
        'οικοδόμημα με οκτώ πεσσούς και τέσσερα ανοίγματα· σήμερα σώζεται μόνο ένα κομμάτι ' +
        'του. Πάνω στους πεσσούς υπάρχουν μαρμάρινες πλάκες σκαλισμένες σε σειρές, σαν ' +
        'κόμικ που διαβάζεται από κάτω προς τα πάνω: στρατιώτες, άλογα, ελέφαντες, ' +
        'πρεσβείες. Το σημαντικό είναι πού στεκόταν. Από κάτω περνούσε η Εγνατία Οδός, ο ' +
        'ρωμαϊκός δρόμος που ξεκινούσε από την Αδριατική και έφτανε ως το Βυζάντιο. Όποιος ' +
        'ταξίδευε από τη Ρώμη προς την Ανατολή, περνούσε από εδώ. Η ίδια διαδρομή υπάρχει ' +
        'ακόμα: η οδός Εγνατία περνάει δίπλα της.',
      en:
        'People in Thessaloniki just call it the Kamara, and it is the city’s most common ' +
        'meeting point: "at the Kamara, at six". It was built around AD 299 to celebrate a ' +
        'victory of the emperor Galerius. It was not originally one arch but a large ' +
        'structure with eight piers and four openings, and only a part of it survives. The ' +
        'piers carry marble panels carved in bands, like a comic strip read from the bottom ' +
        'upwards: soldiers, horses, elephants, ambassadors. What matters most is where it ' +
        'stood. The Via Egnatia ran underneath it, the Roman road that started on the ' +
        'Adriatic and ran all the way to Byzantium. Anyone travelling from Rome towards the ' +
        'east came through here. The route still exists: Egnatia Street runs right past it.',
    },
    facts: [
      {
        el: 'Χτίστηκε γύρω στο 299 μ.Χ. και σώζεται μόνο ένα μέρος της.',
        en: 'It was built around AD 299 and only part of it survives.',
      },
      {
        el: 'Κάτω από αυτήν περνούσε η Εγνατία Οδός, από την Αδριατική ως το Βυζάντιο.',
        en: 'The Via Egnatia ran beneath it, from the Adriatic to Byzantium.',
      },
      {
        el: 'Τα ανάγλυφά της διαβάζονται σε σειρές, από κάτω προς τα πάνω.',
        en: 'Its carvings are read in bands, from the bottom upwards.',
      },
    ],
    location: {
      lat: 40.63224,
      lng: 22.95174,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1258082', deltaM: 0 },
        { kind: 'osm', ref: 'way/135678907', deltaM: 7 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Wikidata files the arch and the Rotunda under one item because UNESCO lists them together; the coordinate is the arch, 150 m from the Rotunda’s own pin.',
    },
    question: {
      q: {
        el: 'Τι περνούσε από κάτω της όταν χτίστηκε;',
        en: 'What passed underneath it when it was built?',
      },
      answers: [
        {
          el: 'Η Εγνατία Οδός, ο ρωμαϊκός δρόμος προς την Ανατολή',
          en: 'The Via Egnatia, the Roman road heading east',
        },
        {
          el: 'Ένα ποτάμι με γέφυρα από ξύλο',
          en: 'A river with a wooden bridge',
        },
        {
          el: 'Ένα υδραγωγείο που έφερνε νερό στην πόλη',
          en: 'An aqueduct bringing water into the city',
        },
        {
          el: 'Ο δρόμος προς το λιμάνι και μόνο',
          en: 'The road to the harbour and nothing else',
        },
      ],
      explanation: {
        el:
          'Οι Ρωμαίοι έχτιζαν αψίδες πάνω σε δρόμους, ώστε να τις δει όποιος περνάει. Ήταν ' +
          'διαφήμιση σε μάρμαρο.',
        en:
          'The Romans built arches over roads so that everyone passing had to see them. It ' +
          'was advertising, carved in marble.',
      },
    },
  },

  // ------------------------------------------------------------- agios dimitrios
  {
    id: 'thessaloniki-agios-dimitrios',
    cityId: 'thessaloniki',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Άγιος Δημήτριος', en: 'The Church of Agios Dimitrios' },
    tagline: {
      el: 'Η μεγαλύτερη εκκλησία της χώρας, ξαναχτισμένη μετά από φωτιά',
      en: 'The country’s largest church, rebuilt after a fire',
    },
    story: {
      el:
        'Ο Άγιος Δημήτριος θεωρείται η μεγαλύτερη εκκλησία της Ελλάδας και είναι ' +
        'αφιερωμένη στον προστάτη της πόλης. Ο Δημήτριος ήταν αξιωματικός του ρωμαϊκού ' +
        'στρατού γύρω στο 300 μ.Χ., που αρνήθηκε να αλλάξει πίστη και θανατώθηκε γι’ αυτό. ' +
        'Η εκκλησία χτίστηκε πάνω από ένα ρωμαϊκό λουτρό, και κάτω από το δάπεδό της ' +
        'υπάρχει ακόμα η κρύπτη, ένας υπόγειος χώρος με κολόνες και νερό που στάζει. Τον ' +
        'Αύγουστο του 1917 μια τεράστια πυρκαγιά έκαψε το μισό κέντρο της Θεσσαλονίκης και ' +
        'μαζί την εκκλησία. Την ξαναέχτισαν, με δουλειά που κράτησε πάνω από είκοσι χρόνια, ' +
        'και κράτησαν όσα ψηφιδωτά είχαν σωθεί. Μερικά από αυτά είναι χίλια τετρακόσια ' +
        'χρόνων και δείχνουν ανθρώπους της πόλης, παιδιά ανάμεσά τους, όχι μόνο αγίους. ' +
        'Είναι από τα λίγα ψηφιδωτά της εποχής τους που σώθηκαν οπουδήποτε, και γι’ αυτό ' +
        'τα μελετούν ερευνητές από όλο τον κόσμο.',
      en:
        'Agios Dimitrios is considered the largest church in Greece, and it belongs to the ' +
        'city’s patron saint. Demetrius was an officer in the Roman army around AD 300 who ' +
        'refused to change his faith and was put to death for it. The church was built over ' +
        'a Roman bath, and under its floor the crypt is still there, an underground space of ' +
        'columns with water dripping through it. In August 1917 an enormous fire burned half ' +
        'the centre of Thessaloniki and the church with it. It was rebuilt over more than ' +
        'twenty years, keeping whatever mosaics had survived. Some of those are fourteen ' +
        'hundred years old and show people of the city, children among them, rather than ' +
        'only saints. They are among the very few mosaics of their time to survive ' +
        'anywhere, which is why researchers come from all over the world to study them.',
    },
    facts: [
      {
        el: 'Θεωρείται η μεγαλύτερη εκκλησία της Ελλάδας.',
        en: 'It is considered the largest church in Greece.',
      },
      {
        el: 'Κάηκε στη μεγάλη πυρκαγιά του 1917 και ξαναχτίστηκε.',
        en: 'It burned in the great fire of 1917 and was rebuilt.',
      },
      {
        el: 'Κάτω από το δάπεδό της υπάρχει κρύπτη, πάνω σε ρωμαϊκό λουτρό.',
        en: 'Beneath its floor lies a crypt, built over a Roman bath.',
      },
    ],
    location: {
      lat: 40.63882,
      lng: 22.94786,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q730019', deltaM: 0 },
        { kind: 'osm', ref: 'way/27406327', deltaM: 6 },
        { kind: 'wikipedia', ref: 'Hagios Demetrios', deltaM: 10 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Τι έπαθε η εκκλησία τον Αύγουστο του 1917;',
        en: 'What happened to the church in August 1917?',
      },
      answers: [
        {
          el: 'Κάηκε σε μεγάλη πυρκαγιά και ξαναχτίστηκε',
          en: 'It burned in a great fire and was rebuilt',
        },
        {
          el: 'Βυθίστηκε σε πλημμύρα και εγκαταλείφθηκε',
          en: 'It was flooded and abandoned',
        },
        {
          el: 'Μεταφέρθηκε πέτρα πέτρα σε άλλο σημείο',
          en: 'It was moved stone by stone to another spot',
        },
        {
          el: 'Έγινε μουσείο και έκλεισε για λατρεία',
          en: 'It became a museum and closed for worship',
        },
      ],
      explanation: {
        el:
          'Η φωτιά του 1917 έκαψε το μισό κέντρο της πόλης. Η εκκλησία ξαναχτίστηκε με τα ' +
          'κομμάτια που σώθηκαν.',
        en:
          'The 1917 fire burned half the city centre. The church was rebuilt using the ' +
          'pieces that survived.',
      },
    },
  },

  // ----------------------------------------------------------------- hagia sophia
  {
    id: 'thessaloniki-hagia-sophia',
    cityId: 'thessaloniki',
    emoji: '✨',
    category: 'history',
    difficulty: 3,

    name: { el: 'Αγία Σοφία', en: 'Hagia Sophia' },
    tagline: {
      el: 'Ένας θόλος με δύο ψηφιδωτά, το ένα κάτω από το άλλο',
      en: 'A dome with two mosaics, one beneath the other',
    },
    story: {
      el:
        'Η Αγία Σοφία της Θεσσαλονίκης είναι περίπου χίλια διακόσια χρόνων και έχει ένα ' +
        'μυστικό στον θόλο της. Σήμερα βλέπεις εκεί ψηφιδωτό με τον Χριστό, αγγέλους και ' +
        'αποστόλους, σε χρυσό φόντο. Από κάτω όμως, σε σημεία που φαίνονται ακόμα, υπάρχει ' +
        'ένα παλαιότερο ψηφιδωτό: ένας απλός σταυρός, χωρίς κανένα πρόσωπο. Ο λόγος είναι ' +
        'μια αληθινή διαμάχη που κράτησε πάνω από έναν αιώνα. Για ένα διάστημα, η ' +
        'αυτοκρατορία απαγόρευσε τις εικόνες ανθρώπων στις εκκλησίες. Όσοι ζωγράφιζαν ' +
        'πρόσωπα κινδύνευαν, και πολλά έργα καταστράφηκαν. Όταν η απαγόρευση τελείωσε, οι ' +
        'τεχνίτες σκέπασαν τον σταυρό με νέο ψηφιδωτό, αλλά δεν τον έσβησαν. Έτσι ο θόλος ' +
        'κρατάει και τις δύο αποφάσεις, τη μία πάνω στην άλλη, σαν σελίδα που ' +
        'ξαναγράφτηκε χωρίς να σβηστεί η προηγούμενη. Λίγα κτίρια στον κόσμο δείχνουν μια ' +
        'ολόκληρη διαφωνία αποτυπωμένη στο ίδιο τους το ταβάνι.',
      en:
        'Hagia Sophia in Thessaloniki is about twelve hundred years old and it keeps a ' +
        'secret in its dome. What you see up there now is a mosaic of Christ with angels and ' +
        'apostles on a gold ground. Underneath it, in patches that are still visible, there ' +
        'is an older mosaic: a plain cross, with no face anywhere on it. The reason is a real ' +
        'argument that lasted more than a century. For a time the empire banned pictures of ' +
        'people in churches. Anyone who painted a face was in danger, and a great deal of ' +
        'work was destroyed. When the ban ended, craftsmen covered the cross with a new ' +
        'mosaic but did not scrape it away. So the dome holds both decisions, one over the ' +
        'other, like a page rewritten without rubbing out what was there before.',
    },
    facts: [
      {
        el: 'Είναι περίπου 1.200 χρόνων και ανήκει στα μνημεία της UNESCO.',
        en: 'It is about 1,200 years old and is one of the UNESCO monuments here.',
      },
      {
        el: 'Στον θόλο σώζονται δύο ψηφιδωτά, το ένα κάτω από το άλλο.',
        en: 'Two mosaics survive in the dome, one underneath the other.',
      },
      {
        el: 'Το παλαιότερο δείχνει μόνο σταυρό, από την εποχή που απαγορεύονταν οι εικόνες.',
        en: 'The older one shows only a cross, from the time when images were forbidden.',
      },
    ],
    location: {
      lat: 40.63284,
      lng: 22.94709,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1568660', deltaM: 0 },
        { kind: 'osm', ref: 'way/27715355', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Hagia Sophia, Thessaloniki', deltaM: 15 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Searching Wikidata in Greek for "Αγία Σοφία Θεσσαλονίκης" returns Q21079931, a village. The church is Q1568660 and only the description separates them.',
    },
    question: {
      q: {
        el: 'Γιατί υπάρχει ένας σκέτος σταυρός κάτω από το ψηφιδωτό του θόλου;',
        en: 'Why is there a plain cross underneath the dome’s mosaic?',
      },
      answers: [
        {
          el: 'Γιατί για κάποια χρόνια απαγορεύονταν οι εικόνες ανθρώπων',
          en: 'Because for some years pictures of people were forbidden',
        },
        {
          el: 'Γιατί ο τεχνίτης δεν πρόλαβε να τελειώσει τη δουλειά',
          en: 'Because the craftsman ran out of time to finish',
        },
        {
          el: 'Γιατί ο σταυρός ήταν οδηγός για να μπουν τα υπόλοιπα ψηφιδωτά',
          en: 'Because the cross was a guide for placing the rest of the mosaic',
        },
        {
          el: 'Γιατί ο θόλος χτίστηκε δύο φορές, από δύο ομάδες',
          en: 'Because the dome was built twice, by two different teams',
        },
      ],
      explanation: {
        el:
          'Λέγεται εικονομαχία. Όταν τελείωσε, δεν έσβησαν το παλιό: έβαλαν το νέο από ' +
          'πάνω, και σώθηκαν και τα δύο.',
        en:
          'It is called iconoclasm. When it ended, the old work was not erased: the new one ' +
          'went on top, and both survived.',
      },
    },
  },

  // ------------------------------------------------------------------ roman agora
  {
    id: 'thessaloniki-roman-agora',
    cityId: 'thessaloniki',
    emoji: '🏟️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ρωμαϊκή Αγορά', en: 'The Roman Agora' },
    tagline: {
      el: 'Μια πλατεία δύο ορόφων που βρέθηκε κατά λάθος',
      en: 'A two-storey square that was found by accident',
    },
    story: {
      el:
        'Στη μέση της σημερινής πόλης υπάρχει ένα μεγάλο ορθογώνιο σκαμμένο κάτω από το ' +
        'επίπεδο του δρόμου. Είναι η ρωμαϊκή αγορά, η κεντρική πλατεία της Θεσσαλονίκης ' +
        'του 2ου αιώνα μ.Χ. Δεν την έψαχνε κανείς: τη βρήκαν το 1966, όταν έσκαβαν για να ' +
        'χτίσουν δικαστήρια. Το έργο σταμάτησε και τα δικαστήρια χτίστηκαν αλλού. Η αγορά ' +
        'είχε δύο επίπεδα. Στο πάνω υπήρχε η πλακόστρωτη πλατεία με στοές γύρω γύρω, και ' +
        'στο κάτω μια κρυπτή στοά, δηλαδή ένας σκεπαστός διάδρομος με καμάρες που ' +
        'χρησίμευε για αποθήκες και μαγαζιά. Στη μία άκρη σώζεται ένα μικρό θέατρο, το ' +
        'ωδείο, με χωρητικότητα γύρω στα τετρακόσια άτομα. Εκεί γίνονταν ακροάσεις, ' +
        'μουσική και διαγωνισμοί λόγου, και σήμερα γίνονται πάλι παραστάσεις το καλοκαίρι. ' +
        'Κάθεσαι δηλαδή σε μαρμάρινα σκαλιά που έχουν την ίδια δουλειά εδώ και δεκαοκτώ ' +
        'αιώνες.',
      en:
        'In the middle of the modern city there is a large rectangle cut down below street ' +
        'level. It is the Roman agora, the main square of 2nd-century Thessaloniki. Nobody ' +
        'was looking for it: it turned up in 1966 when workers were digging foundations for ' +
        'law courts. The project stopped and the courts were built somewhere else. The agora ' +
        'had two levels. The upper one was the paved square with colonnades around it, and ' +
        'the lower one was a cryptoporticus, a covered vaulted passage used for storerooms ' +
        'and shops. At one end a small theatre survives, the odeon, holding around four ' +
        'hundred people. Hearings, music and speaking contests happened there, and in summer ' +
        'there are performances in it again. You sit on marble steps that have been doing ' +
        'the same job for eighteen centuries.',
    },
    facts: [
      {
        el: 'Βρέθηκε το 1966, ενώ έσκαβαν για να χτίσουν δικαστήρια.',
        en: 'It was found in 1966, while foundations were being dug for law courts.',
      },
      {
        el: 'Το μικρό της θέατρο, το ωδείο, χωρούσε περίπου 400 άτομα.',
        en: 'Its small theatre, the odeon, held about 400 people.',
      },
      {
        el: 'Κάτω από την πλατεία υπάρχει σκεπαστός διάδρομος με καμάρες.',
        en: 'Beneath the square runs a covered passage with vaults.',
      },
    ],
    location: {
      lat: 40.63777,
      lng: 22.94577,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q16932289', deltaM: 0 },
        { kind: 'osm', ref: 'way/14788669', deltaM: 12 },
        { kind: 'wikipedia', ref: 'Roman Forum (Thessaloniki)', deltaM: 32 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Πώς βρέθηκε η ρωμαϊκή αγορά;',
        en: 'How was the Roman agora found?',
      },
      answers: [
        {
          el: 'Κατά λάθος, ενώ έσκαβαν για ένα νέο κτίριο',
          en: 'By accident, while digging for a new building',
        },
        {
          el: 'Από έναν χάρτη που βρέθηκε σε μοναστήρι',
          en: 'From a map discovered in a monastery',
        },
        {
          el: 'Μετά από σεισμό που άνοιξε το έδαφος',
          en: 'After an earthquake opened up the ground',
        },
        {
          el: 'Από φωτογραφίες που τραβήχτηκαν από αεροπλάνο',
          en: 'From photographs taken from an aeroplane',
        },
      ],
      explanation: {
        el:
          'Στη Θεσσαλονίκη, όπως και στην Αθήνα, κάθε βαθύ σκάψιμο είναι και μια πιθανή ' +
          'ανακάλυψη.',
        en:
          'In Thessaloniki, as in Athens, every deep excavation is also a possible ' +
          'discovery.',
      },
    },
  },

  // -------------------------------------------------------- archaeological museum
  {
    id: 'thessaloniki-archaeological-museum',
    cityId: 'thessaloniki',
    emoji: '🏺',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Αρχαιολογικό Μουσείο Θεσσαλονίκης', en: 'The Archaeological Museum of Thessaloniki' },
    tagline: {
      el: 'Ένας χάλκινος κρατήρας και το αρχαιότερο βιβλίο της Ευρώπης',
      en: 'A bronze krater and the oldest book in Europe',
    },
    story: {
      el:
        'Το μουσείο άνοιξε το 1962 και συγκεντρώνει ευρήματα από ολόκληρη τη Μακεδονία. ' +
        'Την ίδια ακριβώς χρονιά συνέβη κάτι που θα γέμιζε τις πιο σημαντικές του βιτρίνες. ' +
        'Λίγα χιλιόμετρα βόρεια, στο Δερβένι, συνεργεία που έφτιαχναν δρόμο έπεσαν πάνω σε ' +
        'τάφους του 4ου αιώνα π.Χ. Μέσα τους βρέθηκαν χρυσά στεφάνια, ασημένια αγγεία, ' +
        'ένας χάλκινος κρατήρας που δεν έμοιαζε με κανέναν άλλο, και κάτι που κανείς δεν ' +
        'περίμενε: ένας μισοκαμένος πάπυρος. Ήταν πεταμένος στα υπολείμματα μιας νεκρικής ' +
        'πυράς, και η φωτιά, αντί να τον καταστρέψει, τον απανθράκωσε και τον διατήρησε. ' +
        'Το μουσείο έχει και μια δεύτερη ιστορία να πει, πιο κοντινή: τα ψηφιδωτά, τα ' +
        'μάρμαρα και τα γυάλινα που βγήκαν κάτω από τα σπίτια της σημερινής Θεσσαλονίκης, ' +
        'από τη ρωμαϊκή πόλη που βρίσκεται ακριβώς από κάτω.',
      en:
        'The museum opened in 1962 and gathers finds from the whole of Macedonia. That same ' +
        'year something happened that would go on to fill its most important cases. A few ' +
        'kilometres north, at Derveni, a road crew cut into tombs from the 4th century BC. ' +
        'Inside were gold wreaths, silver vessels, a bronze krater like no other, and ' +
        'something nobody expected: a half-burnt papyrus roll. It had been thrown onto the ' +
        'remains of a funeral pyre, and the fire, instead of destroying it, charred it and ' +
        'preserved it. The museum has a second story to tell as well, a closer one: the ' +
        'mosaics, marbles and glass that came out from under the houses of modern ' +
        'Thessaloniki, from the Roman city lying directly beneath it.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1962, τη χρονιά που βρέθηκαν και οι τάφοι του Δερβενίου.',
        en: 'It opened in 1962, the same year the Derveni tombs were found.',
      },
      {
        el: 'Φυλάει τον πάπυρο του Δερβενίου, το αρχαιότερο βιβλίο που σώζεται στην Ευρώπη.',
        en: 'It keeps the Derveni papyrus, the oldest surviving book in Europe.',
      },
      {
        el: 'Συγκεντρώνει ευρήματα από όλη τη Μακεδονία, όχι μόνο από την πόλη.',
        en: 'It gathers finds from the whole of Macedonia, not only from the city.',
      },
    ],
    location: {
      lat: 40.625,
      lng: 22.95389,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q2658285', deltaM: 0 },
        { kind: 'osm', ref: 'relation/13081351', deltaM: 9 },
        { kind: 'wikipedia', ref: 'Archaeological Museum of Thessaloniki', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Πώς σώθηκε ο πάπυρος του Δερβενίου;',
        en: 'How did the Derveni papyrus survive?',
      },
      answers: [
        {
          el: 'Η φωτιά τον απανθράκωσε αντί να τον κάψει εντελώς',
          en: 'Fire charred it instead of burning it away completely',
        },
        {
          el: 'Ήταν κλεισμένος σε γυάλινο δοχείο με λάδι',
          en: 'It was sealed in a glass jar full of oil',
        },
        {
          el: 'Τον αντέγραφαν κάθε εκατό χρόνια μοναχοί',
          en: 'Monks copied it out every hundred years',
        },
        {
          el: 'Ήταν γραμμένος πάνω σε μέταλλο και όχι σε πάπυρο',
          en: 'It was written on metal rather than papyrus',
        },
      ],
      explanation: {
        el:
          'Ο απανθρακωμένος πάπυρος γίνεται σαν κάρβουνο: εύθραυστος, αλλά δεν σαπίζει ' +
          'πια. Γι’ αυτό έφτασε ως εμάς.',
        en:
          'Charred papyrus turns to something like charcoal: fragile, but it can no longer ' +
          'rot. That is why it reached us.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ξεκίνα από το Δερβένι. Τρία αντικείμενα εκεί εξηγούν όλα τα υπόλοιπα.',
        en: 'Start with Derveni. Three objects there explain everything else.',
      },
      rooms: [
        {
          id: 'thessaloniki-archaeological-museum-derveni',
          emoji: '🔥',
          name: { el: 'Τα ευρήματα του Δερβενίου', en: 'The Derveni finds' },
          intro: {
            el:
              'Όλα όσα βλέπεις εδώ βγήκαν από λίγους τάφους, σε ένα σημείο που κανείς δεν ' +
              'έψαχνε, μια μέρα του 1962. Ανήκαν σε πλούσιους ανθρώπους της Μακεδονίας του ' +
              '4ου αιώνα π.Χ., και κάηκαν μαζί τους στην πυρά. Η φωτιά κατέστρεψε πολλά, ' +
              'και ένα πράγμα το έσωσε.',
            en:
              'Everything here came out of a handful of tombs, at a spot nobody was ' +
              'searching, on a day in 1962. They belonged to wealthy Macedonians of the 4th ' +
              'century BC and were burned with them on the pyre. The fire destroyed a great ' +
              'deal, and saved one thing.',
          },
          exhibits: [
            {
              id: 'thessaloniki-archaeological-museum-derveni-krater',
              name: { el: 'Ο κρατήρας του Δερβενίου', en: 'The Derveni Krater' },
              blurb: {
                el:
                  'Ένα τεράστιο αγγείο σχεδόν ενενήντα εκατοστά ψηλό, φτιαγμένο από κράμα ' +
                  'χαλκού με πολύ κασσίτερο, που του δίνει χρώμα χρυσαφένιο χωρίς να έχει ' +
                  'καθόλου χρυσό. Ολόκληρη η επιφάνειά του είναι σκαλισμένη με μορφές που ' +
                  'χορεύουν, σε τόσο υψηλό ανάγλυφο που κάποιες ξεκολλάνε από το σώμα του. ' +
                  'Ένας κρατήρας φτιαχνόταν κανονικά για να ανακατεύουν κρασί με νερό σε ' +
                  'γιορτές. Αυτός όμως χρησιμοποιήθηκε τελικά ως τεφροδόχος, και μέσα του ' +
                  'βρέθηκαν καμένα οστά.',
                en:
                  'An enormous vessel almost ninety centimetres tall, made from a copper ' +
                  'alloy with a lot of tin in it, which gives it a golden colour without any ' +
                  'gold at all. Its whole surface is worked with dancing figures, in relief ' +
                  'so high that some of them come away from the body of the vase. A krater ' +
                  'was normally made for mixing wine with water at a feast. This one ended up ' +
                  'as a container for ashes, and burnt bones were found inside it.',
              },
              question: {
                q: {
                  el: 'Γιατί φαίνεται χρυσός ο κρατήρας, ενώ δεν έχει χρυσό;',
                  en: 'Why does the krater look golden when there is no gold in it?',
                },
                answers: [
                  {
                    el: 'Γιατί το κράμα του έχει πολύ κασσίτερο, που αλλάζει το χρώμα',
                    en: 'Because its alloy has a lot of tin in it, which changes the colour',
                  },
                  { el: 'Γιατί είναι βαμμένος με χρυσή μπογιά', en: 'Because it is painted with gold paint' },
                  { el: 'Γιατί τον γυάλισαν με λάδι και κερί', en: 'Because it was polished with oil and wax' },
                  { el: 'Γιατί τον σκέπασε η φωτιά με στάχτη', en: 'Because the fire coated it in ash' },
                ],
                explanation: {
                  el:
                    'Αλλάζοντας την αναλογία των μετάλλων, αλλάζει και το χρώμα. Ήταν ' +
                    'επιλογή του τεχνίτη, όχι σύμπτωση.',
                  en:
                    'Change the proportion of the metals and you change the colour. It was ' +
                    'the maker’s choice, not an accident.',
                },
              },
            },
            {
              id: 'thessaloniki-archaeological-museum-derveni-papyrus',
              name: { el: 'Ο πάπυρος του Δερβενίου', en: 'The Derveni Papyrus' },
              blurb: {
                el:
                  'Μοιάζει με κομμάτια καμένου χαρτιού, και είναι το αρχαιότερο βιβλίο που ' +
                  'σώζεται στην Ευρώπη. Γράφτηκε τον 4ο αιώνα π.Χ. και εξηγεί ένα παλιότερο ' +
                  'ποίημα, δηλαδή είναι βιβλίο για ένα άλλο βιβλίο. Βρέθηκε πεταμένο πάνω ' +
                  'στα υπολείμματα μιας νεκρικής πυράς. Επειδή τα άκρα του κάηκαν αλλά το ' +
                  'εσωτερικό μόνο απανθρακώθηκε, το κείμενο έμεινε διαβάσιμο. Από το 2015 ' +
                  'είναι καταγεγραμμένος στη Μνήμη του Κόσμου της UNESCO.',
                en:
                  'It looks like scraps of burnt paper, and it is the oldest surviving book ' +
                  'in Europe. It was written in the 4th century BC and explains an older ' +
                  'poem, which makes it a book about another book. It was found thrown onto ' +
                  'the remains of a funeral pyre. Because its edges burned but the inside was ' +
                  'only charred, the text stayed readable. Since 2015 it has been on UNESCO’s ' +
                  'Memory of the World register.',
              },
              question: {
                q: {
                  el: 'Τι είδους κείμενο είναι ο πάπυρος του Δερβενίου;',
                  en: 'What kind of text is the Derveni papyrus?',
                },
                answers: [
                  { el: 'Μια εξήγηση ενός παλαιότερου ποιήματος', en: 'An explanation of an older poem' },
                  { el: 'Ένας κατάλογος με φόρους και χρέη', en: 'A list of taxes and debts' },
                  { el: 'Ένα γράμμα ενός στρατιώτη στη μητέρα του', en: 'A letter from a soldier to his mother' },
                  { el: 'Ένας χάρτης της Μακεδονίας', en: 'A map of Macedonia' },
                ],
                explanation: {
                  el: 'Κάποιος πριν από 2.400 χρόνια έγραφε σχόλια για ένα κείμενο. Ακριβώς όπως σήμερα.',
                  en: 'Somebody 2,400 years ago was writing notes about a text. Exactly as people do now.',
                },
              },
            },
            {
              id: 'thessaloniki-archaeological-museum-gold-wreath',
              name: { el: 'Το χρυσό στεφάνι', en: 'The gold wreath' },
              blurb: {
                el:
                  'Ένα στεφάνι από λεπτό χρυσό, με φυλλαράκια και μικρά άνθη, φτιαγμένο να ' +
                  'μοιάζει με κλαδί που μόλις κόπηκε. Τα φύλλα είναι τόσο λεπτά που ' +
                  'τρέμουν με το παραμικρό. Τέτοια στεφάνια φοριούνταν σε γιορτές και ' +
                  'συνόδευαν τους νεκρούς στον τάφο, ως σημάδι τιμής. Ο χρυσός δεν σκουριάζει ' +
                  'ποτέ, οπότε ό,τι έβλεπε κάποιος το 330 π.Χ. είναι ακριβώς αυτό που ' +
                  'βλέπεις κι εσύ, χωρίς καμία διαφορά.',
                en:
                  'A wreath of thin gold with small leaves and flowers, made to look like a ' +
                  'branch just cut from a tree. The leaves are so fine that they tremble at ' +
                  'the slightest movement. Wreaths like this were worn at feasts and went ' +
                  'into the grave with the dead as a mark of honour. Gold never rusts, so ' +
                  'what somebody saw in 330 BC is exactly what you are seeing, with no ' +
                  'difference at all.',
              },
              question: {
                q: {
                  el: 'Γιατί μοιάζει σημερινό ένα χρυσό αντικείμενο 2.300 ετών;',
                  en: 'Why does a gold object 2,300 years old look new?',
                },
                answers: [
                  { el: 'Γιατί ο χρυσός δεν σκουριάζει', en: 'Because gold does not rust' },
                  { el: 'Γιατί το γυαλίζουν κάθε βδομάδα', en: 'Because it is polished every week' },
                  { el: 'Γιατί είναι αντίγραφο του πρωτότυπου', en: 'Because it is a copy of the original' },
                  { el: 'Γιατί το φυλάνε μέσα σε λάδι', en: 'Because it is kept in oil' },
                ],
                explanation: {
                  el: 'Γι’ αυτό ο χρυσός ήταν πάντα πολύτιμος: δεν αλλάζει, ό,τι κι αν του κάνει ο χρόνος.',
                  en: 'That is why gold was always precious: it does not change, whatever time does to it.',
                },
              },
            },
          ],
        },
        {
          id: 'thessaloniki-archaeological-museum-roman-city',
          emoji: '🧱',
          name: { el: 'Η πόλη κάτω από την πόλη', en: 'The city beneath the city' },
          intro: {
            el:
              'Αυτή η αίθουσα δεν μιλάει για μακρινά βασίλεια αλλά για το έδαφος κάτω από ' +
              'τα πόδια σου. Κάθε φορά που η Θεσσαλονίκη σκάβει για γκαράζ, για μετρό ή ' +
              'για θεμέλια, βγαίνει η ρωμαϊκή πόλη. Τα αντικείμενα εδώ ήταν πράγματα ' +
              'καθημερινά: πατώματα σπιτιών, πρόσωπα γειτόνων, ποτήρια.',
            en:
              'This room is not about distant kingdoms but about the ground under your feet. ' +
              'Every time Thessaloniki digs for a garage, a metro line or foundations, the ' +
              'Roman city comes up. The objects here were ordinary things: the floors of ' +
              'houses, the faces of neighbours, drinking glasses.',
          },
          exhibits: [
            {
              id: 'thessaloniki-archaeological-museum-mosaic-floor',
              name: { el: 'Το ψηφιδωτό δάπεδο', en: 'The mosaic floor' },
              blurb: {
                el:
                  'Ένα πάτωμα από χιλιάδες μικρές πέτρες, κομμένες σε κύβους και ' +
                  'τοποθετημένες μία μία. Βρισκόταν σε ρωμαϊκό σπίτι της Θεσσαλονίκης, και ' +
                  'σηκώθηκε ολόκληρο για να μπει στο μουσείο. Πλησίασε και θα δεις ότι οι ' +
                  'πέτρες δεν είναι όλες ίδιες: εκεί που χρειαζόταν λεπτομέρεια, όπως στα ' +
                  'μάτια ή στα δάχτυλα, ο τεχνίτης χρησιμοποιούσε πολύ μικρότερα κομμάτια. ' +
                  'Είναι η ίδια ιδέα με τα πίξελ σε μια οθόνη, δυόμισι χιλιάδες χρόνια ' +
                  'νωρίτερα.',
                en:
                  'A floor made of thousands of small stones, cut into cubes and set one at a ' +
                  'time. It lay in a Roman house in Thessaloniki and was lifted whole to come ' +
                  'into the museum. Go close and you will see the stones are not all the same ' +
                  'size: where detail was needed, in an eye or a finger, the craftsman used ' +
                  'much smaller pieces. It is the same idea as pixels on a screen, two and a ' +
                  'half thousand years earlier.',
              },
              question: {
                q: {
                  el: 'Πού χρησιμοποιούσε ο τεχνίτης τις πιο μικρές ψηφίδες;',
                  en: 'Where did the craftsman use the smallest tiles?',
                },
                answers: [
                  { el: 'Εκεί που χρειαζόταν λεπτομέρεια, όπως στα μάτια', en: 'Where detail was needed, such as in the eyes' },
                  { el: 'Στις άκρες του δαπέδου, για να μη σπάσουν', en: 'At the edges of the floor, so they would not crack' },
                  { el: 'Στο κέντρο, για να πατούν πάνω τους', en: 'In the centre, because people walked there' },
                  { el: 'Πουθενά: όλες ήταν ακριβώς ίδιες', en: 'Nowhere: they were all exactly the same' },
                ],
                explanation: {
                  el: 'Όσο μικρότερο το κομμάτι, τόσο πιο καθαρή η εικόνα. Ακριβώς όπως στις οθόνες.',
                  en: 'The smaller the piece, the sharper the picture. Exactly as on a screen.',
                },
              },
            },
            {
              id: 'thessaloniki-archaeological-museum-portraits',
              name: { el: 'Τα μαρμάρινα πρόσωπα', en: 'The marble faces' },
              blurb: {
                el:
                  'Σειρές από μαρμάρινα κεφάλια, σκαλισμένα πριν από περίπου δύο χιλιάδες ' +
                  'χρόνια. Δεν είναι θεοί. Είναι κάτοικοι της Θεσσαλονίκης, και φαίνεται: ' +
                  'άλλος έχει στραβή μύτη, άλλος διπλό πιγούνι, άλλη σφιγμένο στόμα. Οι ' +
                  'Ρωμαίοι δεν ήθελαν να ομορφύνουν τα πορτρέτα τους· ήθελαν να ' +
                  'αναγνωρίζονται. Μερικά κεφάλια έχουν λαξευμένες κόρες στα μάτια, κάτι ' +
                  'που δεν έκαναν οι παλαιότεροι γλύπτες, και γι’ αυτό το βλέμμα τους ' +
                  'μοιάζει να σε ακολουθεί.',
                en:
                  'Rows of marble heads carved about two thousand years ago. They are not ' +
                  'gods. They are people who lived in Thessaloniki, and it shows: one has a ' +
                  'crooked nose, another a double chin, another a tight mouth. The Romans did ' +
                  'not want their portraits prettified; they wanted them recognisable. Some ' +
                  'heads have pupils carved into the eyes, which earlier sculptors did not ' +
                  'do, and that is why their gaze seems to follow you.',
              },
              question: {
                q: {
                  el: 'Τι ήθελαν οι Ρωμαίοι από ένα πορτρέτο;',
                  en: 'What did the Romans want from a portrait?',
                },
                answers: [
                  { el: 'Να αναγνωρίζεται ο άνθρωπος, με τα ελαττώματά του', en: 'The person to be recognisable, flaws included' },
                  { el: 'Να δείχνει όλους νέους και όμορφους', en: 'Everyone to look young and beautiful' },
                  { el: 'Να μοιάζει με θεό του Ολύμπου', en: 'It to look like a god of Olympus' },
                  { el: 'Να μην ξεχωρίζει από τα υπόλοιπα', en: 'It to look the same as all the others' },
                ],
                explanation: {
                  el: 'Ένα πορτρέτο ήταν απόδειξη ταυτότητας. Αν δεν σου έμοιαζε, δεν έκανε τη δουλειά του.',
                  en: 'A portrait was proof of identity. If it did not look like you, it was not doing its job.',
                },
              },
            },
            {
              id: 'thessaloniki-archaeological-museum-glass',
              name: { el: 'Τα γυάλινα αγγεία', en: 'The glass vessels' },
              blurb: {
                el:
                  'Μικρά μπουκαλάκια και ποτήρια από γυαλί, λεπτά σαν φλούδα, που έχουν ' +
                  'πάρει με τον καιρό ιριδίζοντα χρώματα, σαν σαπουνόφουσκα. Αυτό το χρώμα ' +
                  'δεν ήταν εκεί: το δημιούργησε το χώμα, φθείροντας την επιφάνεια σε πολύ ' +
                  'λεπτές στρώσεις που σπάνε το φως. Οι Ρωμαίοι έμαθαν να φυσούν το γυαλί ' +
                  'και το έκαναν φθηνό, οπότε μέσα σε λίγες γενιές σταμάτησε να είναι είδος ' +
                  'πολυτελείας και έγινε το κανονικό ποτήρι του σπιτιού.',
                en:
                  'Small bottles and cups of glass, thin as a shell, which over time have ' +
                  'taken on iridescent colours like a soap bubble. That colour was not there ' +
                  'originally: the soil made it, wearing the surface into very thin layers ' +
                  'that split the light. The Romans learned to blow glass and made it cheap, ' +
                  'so within a few generations it stopped being a luxury and became the ' +
                  'ordinary cup in a house.',
              },
              question: {
                q: {
                  el: 'Από πού ήρθαν τα ιριδίζοντα χρώματα στο αρχαίο γυαλί;',
                  en: 'Where did the rainbow colours on ancient glass come from?',
                },
                answers: [
                  { el: 'Από τη φθορά της επιφάνειας μέσα στο χώμα', en: 'From the surface weathering while it lay in the soil' },
                  { el: 'Από χρωστικές που έριχναν στο λιωμένο γυαλί', en: 'From dyes added to the molten glass' },
                  { el: 'Από το κρασί που έμεινε μέσα τους', en: 'From wine left inside them' },
                  { el: 'Από τη φωτιά της νεκρικής πυράς', en: 'From the fire of the funeral pyre' },
                ],
                explanation: {
                  el: 'Είναι φθορά, όχι διακόσμηση. Το γυαλί βγήκε από το εργαστήριο διαφανές.',
                  en: 'It is damage, not decoration. The glass left the workshop clear.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'thessaloniki-archaeological-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Φαίνομαι χρυσός και δεν είμαι. Με έφτιαξαν για να ανακατεύω κρασί σε γιορτές, ' +
              'αλλά κατέληξα να κρατάω στάχτη. Πάνω μου χορεύουν μορφές που ξεκολλάνε από ' +
              'το σώμα μου.',
            en:
              'I look golden and I am not. I was made for mixing wine at feasts, but I ended ' +
              'up holding ashes. Figures dance on me, and some of them come away from my ' +
              'body.',
          },
          hint: {
            el: 'Είμαι σχεδόν ένα μέτρο ψηλός και είμαι μέταλλο.',
            en: 'I am almost a metre tall and I am made of metal.',
          },
          answerExhibitId: 'thessaloniki-archaeological-museum-derveni-krater',
        },
        {
          id: 'thessaloniki-archaeological-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Με πέταξαν στη φωτιά και εκείνη με έσωσε. Είμαι μαύρος, τσακισμένος και ' +
              'διαβάζομαι ακόμα. Κανένα άλλο βιβλίο στην Ευρώπη δεν είναι παλαιότερο από ' +
              'εμένα.',
            en:
              'I was thrown into a fire and the fire saved me. I am black, crumpled, and ' +
              'still readable. No other book in Europe is older than I am.',
          },
          hint: {
            el: 'Δεν είμαι από χαρτί ούτε από δέρμα.',
            en: 'I am made neither of paper nor of leather.',
          },
          answerExhibitId: 'thessaloniki-archaeological-museum-derveni-papyrus',
        },
      ],
    },
  },

  // ------------------------------------------------------------- byzantine museum
  {
    id: 'thessaloniki-byzantine-museum',
    cityId: 'thessaloniki',
    emoji: '👑',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Μουσείο Βυζαντινού Πολιτισμού', en: 'The Museum of Byzantine Culture' },
    tagline: {
      el: 'Χίλια χρόνια καθημερινής ζωής, όχι μόνο αυτοκρατόρων',
      en: 'A thousand years of daily life, not only of emperors',
    },
    story: {
      el:
        'Το Βυζάντιο ακούγεται μακρινό, και αυτό το μουσείο κάνει ακριβώς το αντίθετο: ' +
        'δείχνει πώς ζούσαν οι άνθρωποι. Άνοιξε το 1994, σε κτίριο που σχεδίασε ο Κυριάκος ' +
        'Κρόκος, και το 2005 πήρε το βραβείο Μουσείου του Συμβουλίου της Ευρώπης. Οι ' +
        'αίθουσές του δεν είναι βαλμένες κατά υλικό αλλά κατά θέμα: πώς έθαβαν, πώς ' +
        'έχτιζαν, πώς έτρωγαν, πώς αγόραζαν. Το εντυπωσιακότερο κομμάτι είναι οι ' +
        'παλαιοχριστιανικοί τάφοι, που μεταφέρθηκαν ολόκληροι μέσα στο μουσείο με τις ' +
        'τοιχογραφίες τους: μπαίνεις και στέκεσαι μέσα σε έναν τάφο, με τα χρώματα γύρω ' +
        'σου. Υπάρχουν επίσης νομίσματα, κοσμήματα, πιάτα με χαραγμένα σχέδια, και εικόνες. ' +
        'Το μουσείο εξηγεί κάτι που συχνά ξεχνιέται: η Θεσσαλονίκη ήταν η δεύτερη πόλη ' +
        'αυτής της αυτοκρατορίας για πάνω από χίλια χρόνια, δηλαδή για περισσότερο καιρό ' +
        'από όσο υπάρχουν οι περισσότερες σημερινές πρωτεύουσες.',
      en:
        'Byzantium sounds distant, and this museum does the opposite of that: it shows how ' +
        'people lived. It opened in 1994 in a building designed by Kyriakos Krokos, and in ' +
        '2005 it won the Council of Europe Museum Prize. Its galleries are arranged by theme ' +
        'rather than by material: how people buried their dead, how they built, how they ate, ' +
        'how they bought things. The most striking part is the early Christian tombs, moved ' +
        'into the museum whole with their wall paintings intact, so you step inside a tomb ' +
        'and stand there with the colours around you. There are also coins, jewellery, ' +
        'plates with incised patterns, and icons. The museum makes clear something easily ' +
        'forgotten: Thessaloniki was the second city of that empire for more than a thousand ' +
        'years.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1994 και βραβεύτηκε ως Μουσείο της Ευρώπης το 2005.',
        en: 'It opened in 1994 and won the Council of Europe Museum Prize in 2005.',
      },
      {
        el: 'Μεταφέρει ολόκληρους παλαιοχριστιανικούς τάφους, με τις τοιχογραφίες τους.',
        en: 'It holds whole early Christian tombs, moved in with their wall paintings.',
      },
      {
        el: 'Οι αίθουσές του είναι οργανωμένες κατά θέμα, όχι κατά υλικό.',
        en: 'Its galleries are organised by theme rather than by material.',
      },
    ],
    location: {
      lat: 40.6239,
      lng: 22.955,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3563158', deltaM: 0 },
        { kind: 'osm', ref: 'relation/13080751', deltaM: 21 },
        { kind: 'wikipedia', ref: 'Museum of Byzantine Culture', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Πώς είναι οργανωμένες οι αίθουσες αυτού του μουσείου;',
        en: 'How are this museum’s galleries organised?',
      },
      answers: [
        {
          el: 'Κατά θέμα: πώς έθαβαν, πώς έχτιζαν, πώς αγόραζαν',
          en: 'By theme: how people buried, built and bought',
        },
        {
          el: 'Κατά υλικό: μάρμαρα, μέταλλα, υφάσματα',
          en: 'By material: marble, metal, textiles',
        },
        {
          el: 'Κατά μέγεθος, από το μικρότερο στο μεγαλύτερο',
          en: 'By size, from smallest to largest',
        },
        {
          el: 'Αλφαβητικά, με το όνομα κάθε αντικειμένου',
          en: 'Alphabetically, by the name of each object',
        },
      ],
      explanation: {
        el:
          'Έτσι ένα νόμισμα, ένα πιάτο και ένας τοίχος μπορούν να στέκονται μαζί, γιατί ' +
          'μιλούν για το ίδιο πράγμα.',
        en:
          'That way a coin, a plate and a wall can stand together, because they are talking ' +
          'about the same thing.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μπες μέσα στους τάφους. Επιτρέπεται, και είναι ο μόνος τρόπος να τους δεις.',
        en: 'Walk into the tombs. You are allowed to, and it is the only way to see them.',
      },
      rooms: [
        {
          id: 'thessaloniki-byzantine-museum-tombs',
          emoji: '🕯️',
          name: { el: 'Οι ζωγραφισμένοι τάφοι', en: 'The painted tombs' },
          intro: {
            el:
              'Αυτή η αίθουσα είναι σκοτεινή επίτηδες, και δεν είναι τρομακτική. Οι τάφοι ' +
              'που βλέπεις ήταν κάποτε κάτω από τη γη, έξω από τα τείχη της πόλης. ' +
              'Μεταφέρθηκαν εδώ ολόκληροι, με τους τοίχους και τα χρώματά τους, ώστε να ' +
              'μπορείς να δεις τι ήθελαν να αφήσουν πίσω τους οι άνθρωποι.',
            en:
              'This room is dark on purpose, and it is not frightening. The tombs you see ' +
              'were once underground, outside the city walls. They were moved here whole, ' +
              'walls and colours together, so that you can see what people wanted to leave ' +
              'behind them.',
          },
          exhibits: [
            {
              id: 'thessaloniki-byzantine-museum-painted-tomb',
              name: { el: 'Ο τάφος με τον κήπο', en: 'The tomb with the garden' },
              blurb: {
                el:
                  'Ένας μικρός καμαρωτός τάφος, ζωγραφισμένος από μέσα σαν κήπος: κλαδιά, ' +
                  'πουλιά, λουλούδια, φως. Οι πρώτοι χριστιανοί της Θεσσαλονίκης δεν ' +
                  'ζωγράφιζαν τον θάνατο· ζωγράφιζαν έναν τόπο όπου ήθελαν να βρεθεί ' +
                  'κάποιος που αγαπούσαν. Οι τοίχοι έγιναν με νωπογραφία, δηλαδή με χρώμα ' +
                  'πάνω σε φρέσκο σοβά, και γι’ αυτό κράτησαν. Ο τάφος σηκώθηκε ολόκληρος ' +
                  'από το χώμα και μεταφέρθηκε στο μουσείο σε ένα κομμάτι.',
                en:
                  'A small vaulted tomb, painted inside like a garden: branches, birds, ' +
                  'flowers, light. The first Christians of Thessaloniki did not paint death; ' +
                  'they painted a place where they wanted someone they loved to be. The walls ' +
                  'were done in fresco, colour laid onto wet plaster, which is why they ' +
                  'lasted. The tomb was lifted out of the ground whole and brought into the ' +
                  'museum in one piece.',
              },
              question: {
                q: {
                  el: 'Τι ζωγράφιζαν μέσα σε αυτούς τους τάφους;',
                  en: 'What did they paint inside these tombs?',
                },
                answers: [
                  { el: 'Κήπους με πουλιά, λουλούδια και φως', en: 'Gardens with birds, flowers and light' },
                  { el: 'Μάχες με στρατιώτες και άλογα', en: 'Battles with soldiers and horses' },
                  { el: 'Χάρτες της πόλης και των τειχών της', en: 'Maps of the city and its walls' },
                  { el: 'Τίποτα: οι τοίχοι έμεναν λευκοί', en: 'Nothing: the walls were left white' },
                ],
                explanation: {
                  el: 'Είναι μια εικόνα ελπίδας, όχι φόβου. Γι’ αυτό η αίθουσα δεν είναι τρομακτική.',
                  en: 'It is a picture of hope, not of fear. That is why the room is not frightening.',
                },
              },
            },
            {
              id: 'thessaloniki-byzantine-museum-grave-goods',
              name: { el: 'Τα κτερίσματα', en: 'The grave goods' },
              blurb: {
                el:
                  'Μαζί με τους νεκρούς έμπαιναν στον τάφο μικρά αντικείμενα: ένα ' +
                  'δαχτυλίδι, ένα χτενάκι, ένα γυάλινο μπουκαλάκι με άρωμα, ένα νόμισμα. ' +
                  'Για τους αρχαιολόγους αυτά είναι πιο χρήσιμα από τα πλούσια ευρήματα, ' +
                  'γιατί ένα χτενάκι λέει πώς ζούσε κάποιος, ενώ ένα στέμμα λέει μόνο πόσα ' +
                  'είχε. Πολλά από αυτά είναι φθαρμένα από τη χρήση, πράγμα που σημαίνει ' +
                  'ότι δεν αγοράστηκαν για την κηδεία: ήταν τα δικά του πράγματα.',
                en:
                  'Small objects went into the grave with the dead: a ring, a comb, a little ' +
                  'glass bottle of scent, a coin. For archaeologists these are more useful ' +
                  'than rich finds, because a comb tells you how somebody lived while a crown ' +
                  'only tells you what they had. Many of them are worn from use, which means ' +
                  'they were not bought for the funeral: they were that person’s own things.',
              },
              question: {
                q: {
                  el: 'Τι μας λέει το ότι πολλά κτερίσματα είναι φθαρμένα;',
                  en: 'What does it tell us that many grave goods are worn?',
                },
                answers: [
                  { el: 'Ότι ήταν τα προσωπικά αντικείμενα του νεκρού', en: 'That they were the dead person’s own belongings' },
                  { el: 'Ότι ήταν φτηνά αντίγραφα', en: 'That they were cheap copies' },
                  { el: 'Ότι τα έκλεψαν και τα επέστρεψαν', en: 'That they were stolen and returned' },
                  { el: 'Ότι τα έφτιαξαν βιαστικά για την κηδεία', en: 'That they were made in a hurry for the funeral' },
                ],
                explanation: {
                  el: 'Η φθορά είναι απόδειξη χρήσης. Κάποιος τα κρατούσε στα χέρια του κάθε μέρα.',
                  en: 'Wear is proof of use. Somebody held these in their hands every day.',
                },
              },
            },
            {
              id: 'thessaloniki-byzantine-museum-lamps',
              name: { el: 'Τα λυχνάρια', en: 'The lamps' },
              blurb: {
                el:
                  'Μικρά πήλινα λυχνάρια που χωρούσαν λίγο λάδι και ένα φιτίλι. Έδιναν ' +
                  'φως όσο περίπου ένα κερί, και ήταν το μόνο φως που είχε ένα σπίτι μετά ' +
                  'τη δύση. Πολλά έχουν σχέδια πάνω τους: σταυρούς, ψάρια, φύλλα, μερικές ' +
                  'φορές και το όνομα του εργαστηρίου που τα έφτιαξε, σαν σήμα μάρκας. ' +
                  'Ήταν φθηνά, σπάγανε εύκολα και τα πετούσαν, γι’ αυτό βρίσκονται σήμερα ' +
                  'παντού και χρονολογούν τα στρώματα του χώματος.',
                en:
                  'Small clay lamps that held a little oil and a wick. They gave about as ' +
                  'much light as a candle, and they were the only light a house had after ' +
                  'sunset. Many carry patterns: crosses, fish, leaves, sometimes the name of ' +
                  'the workshop that made them, like a brand. They were cheap, broke easily ' +
                  'and were thrown away, which is why they turn up everywhere today and help ' +
                  'date the layers of soil.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι χρήσιμα στους αρχαιολόγους τα σπασμένα λυχνάρια;',
                  en: 'Why are broken lamps useful to archaeologists?',
                },
                answers: [
                  { el: 'Γιατί βρίσκονται παντού και βοηθούν να χρονολογηθεί το χώμα', en: 'Because they are everywhere and help date the soil' },
                  { el: 'Γιατί μέσα τους κρύβονταν νομίσματα', en: 'Because coins were hidden inside them' },
                  { el: 'Γιατί ήταν πολύ ακριβά αντικείμενα', en: 'Because they were very expensive objects' },
                  { el: 'Γιατί καίνε ακόμα αν βάλεις λάδι', en: 'Because they still burn if you add oil' },
                ],
                explanation: {
                  el:
                    'Ό,τι είναι φθηνό και σπάει συχνά, αλλάζει συχνά σχήμα. Η αλλαγή του ' +
                    'σχήματος γίνεται ρολόι.',
                  en:
                    'Anything cheap that breaks often also changes shape often. That change ' +
                    'of shape becomes a clock.',
                },
              },
            },
          ],
        },
        {
          id: 'thessaloniki-byzantine-museum-daily-life',
          emoji: '🍽️',
          name: { el: 'Η ζωή μιας μεγάλης πόλης', en: 'Life in a big city' },
          intro: {
            el:
              'Η Θεσσαλονίκη ήταν η δεύτερη πόλη της αυτοκρατορίας, με λιμάνι, αγορές και ' +
              'ανθρώπους από παντού. Αυτή η αίθουσα δείχνει τα αντικείμενα που περνούσαν ' +
              'από χέρι σε χέρι κάθε μέρα: πιάτα, κοσμήματα, νομίσματα. Είναι τα πιο ' +
              'ταπεινά πράγματα του μουσείου και τα πιο ομιλητικά.',
            en:
              'Thessaloniki was the empire’s second city, with a port, markets and people ' +
              'from everywhere. This room shows the objects that passed from hand to hand ' +
              'every day: plates, jewellery, coins. They are the humblest things in the ' +
              'museum and the most talkative.',
          },
          exhibits: [
            {
              id: 'thessaloniki-byzantine-museum-sgraffito',
              name: { el: 'Τα χαραγμένα πιάτα', en: 'The scratched plates' },
              blurb: {
                el:
                  'Πιάτα σκεπασμένα με λευκό πηλό και μετά χαραγμένα με βελόνα, ώστε να ' +
                  'φανεί το σκούρο χρώμα από κάτω. Η τεχνική λέγεται εγχάρακτη, και το ' +
                  'σχέδιο μπαίνει αφαιρώντας υλικό αντί να προσθέτει. Πάνω τους βρίσκεις ' +
                  'ψάρια, πουλιά, πολεμιστές, χορευτές, μερικές φορές και μια φιγούρα που ' +
                  'μοιάζει να αστειεύεται. Ήταν πιάτα καθημερινά, όχι λατρευτικά, και ' +
                  'φτιάχνονταν κατά χιλιάδες στα εργαστήρια της πόλης για να ταξιδέψουν με ' +
                  'τα καράβια.',
                en:
                  'Plates covered with white clay and then scratched with a needle so the ' +
                  'darker colour underneath shows through. The technique is called sgraffito, ' +
                  'and the picture is made by taking material away rather than adding it. You ' +
                  'find fish on them, birds, warriors, dancers, and sometimes a figure that ' +
                  'looks like it is joking. They were everyday plates, not holy ones, made by ' +
                  'the thousand in the city’s workshops to travel out on ships.',
              },
              question: {
                q: {
                  el: 'Πώς μπαίνει το σχέδιο σε ένα εγχάρακτο πιάτο;',
                  en: 'How is the pattern put onto a sgraffito plate?',
                },
                answers: [
                  { el: 'Χαράζοντας το λευκό στρώμα, για να φανεί το σκούρο από κάτω', en: 'By scratching the white layer so the dark shows through' },
                  { el: 'Ζωγραφίζοντας με πινέλο και χρυσό', en: 'By painting with a brush and gold' },
                  { el: 'Κολλώντας μικρά κομμάτια γυαλιού', en: 'By sticking on small pieces of glass' },
                  { el: 'Τυπώνοντας με ξύλινη σφραγίδα', en: 'By stamping with a wooden block' },
                ],
                explanation: {
                  el: 'Είναι σχέδιο με αφαίρεση. Ό,τι βλέπεις σκούρο, είναι εκεί που ο τεχνίτης έξυσε.',
                  en: 'It is drawing by removal. Everything dark is where the maker scraped.',
                },
              },
            },
            {
              id: 'thessaloniki-byzantine-museum-coins',
              name: { el: 'Τα νομίσματα', en: 'The coins' },
              blurb: {
                el:
                  'Μικροί δίσκοι από χρυσό, ασήμι ή χαλκό, με το πρόσωπο του αυτοκράτορα ' +
                  'στη μία πλευρά. Για τους περισσότερους ανθρώπους της αυτοκρατορίας, ' +
                  'αυτό ήταν το μόνο πορτρέτο του ηγεμόνα που θα έβλεπαν ποτέ: το νόμισμα ' +
                  'ήταν ταυτόχρονα χρήμα και είδηση. Όταν άλλαζε ο αυτοκράτορας, άλλαζε το ' +
                  'πρόσωπο, και η αλλαγή ταξίδευε με το εμπόριο. Οι αρχαιολόγοι τα αγαπούν ' +
                  'γιατί χρονολογούνται με ακρίβεια: κάθε πρόσωπο αντιστοιχεί σε ' +
                  'συγκεκριμένα χρόνια.',
                en:
                  'Small discs of gold, silver or copper with the emperor’s face on one side. ' +
                  'For most people in the empire this was the only portrait of their ruler ' +
                  'they would ever see: a coin was money and news at the same time. When the ' +
                  'emperor changed the face changed, and the change travelled along the trade ' +
                  'routes. Archaeologists love them because they date precisely: each face ' +
                  'belongs to a particular run of years.',
              },
              question: {
                q: {
                  el: 'Γιατί το νόμισμα ήταν και είδηση;',
                  en: 'Why was a coin also news?',
                },
                answers: [
                  {
                    el: 'Γιατί έδειχνε ποιος είναι ο αυτοκράτορας σε ανθρώπους που δεν τον έβλεπαν ποτέ',
                    en: 'Because it showed who the emperor was to people who never saw him',
                  },
                  { el: 'Γιατί πάνω του γράφονταν τα γεγονότα της χρονιάς', en: 'Because the year’s events were written on it' },
                  { el: 'Γιατί το μοίραζαν δωρεάν στους πολίτες', en: 'Because it was handed out free to citizens' },
                  { el: 'Γιατί το διάβαζαν φωναχτά στην αγορά', en: 'Because it was read aloud in the market' },
                ],
                explanation: {
                  el: 'Χωρίς εφημερίδες και φωτογραφίες, το νόμισμα ήταν το ταχύτερο μέσο που υπήρχε.',
                  en: 'With no newspapers and no photographs, a coin was the fastest medium there was.',
                },
              },
            },
            {
              id: 'thessaloniki-byzantine-museum-jewellery',
              name: { el: 'Τα κοσμήματα', en: 'The jewellery' },
              blurb: {
                el:
                  'Σκουλαρίκια με λεπτά συρματάκια, δαχτυλίδια με χαραγμένα ονόματα, ' +
                  'βραχιόλια από χαλκό για όσους δεν είχαν χρυσό. Ένα από τα πιο συχνά ' +
                  'ευρήματα είναι τα δαχτυλίδια-σφραγίδες: πάνω τους χαρασσόταν ανάποδα ' +
                  'ένα μονόγραμμα, και όταν το πίεζες σε κερί ή πηλό έβγαινε σωστά. Ήταν η ' +
                  'υπογραφή ενός ανθρώπου σε μια εποχή που οι περισσότεροι δεν ήξεραν να ' +
                  'γράφουν το όνομά τους. Το δαχτυλίδι δεν το έβγαζες ποτέ, γιατί χάνοντάς ' +
                  'το έχανες την ταυτότητά σου.',
                en:
                  'Earrings of fine twisted wire, rings with names cut into them, bracelets ' +
                  'of copper for people who had no gold. One of the commonest finds is the ' +
                  'signet ring: a monogram was cut into it back to front, and pressed into ' +
                  'wax or clay it came out the right way round. It was a person’s signature ' +
                  'in a time when most people could not write their own name.',
              },
              question: {
                q: {
                  el: 'Γιατί χαρασσόταν ανάποδα το μονόγραμμα στο δαχτυλίδι-σφραγίδα;',
                  en: 'Why was the monogram on a signet ring cut back to front?',
                },
                answers: [
                  { el: 'Για να βγαίνει σωστά όταν πιεζόταν σε κερί ή πηλό', en: 'So it came out the right way round when pressed into wax or clay' },
                  { el: 'Για να μην το διαβάζουν οι κλέφτες', en: 'So thieves could not read it' },
                  { el: 'Γιατί έτσι γραφόταν τότε η γλώσσα', en: 'Because the language was written that way then' },
                  { el: 'Για να χωράει περισσότερο κείμενο', en: 'So more text would fit' },
                ],
                explanation: {
                  el: 'Κάθε σφραγίδα δουλεύει έτσι, μέχρι σήμερα. Η εικόνα αντιστρέφεται στο αποτύπωμα.',
                  en: 'Every stamp works this way, right up to today. The image flips in the impression.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'thessaloniki-byzantine-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Ήμουν κάτω από τη γη, έξω από τα τείχη. Μέσα μου ζωγράφισαν πουλιά και ' +
              'κλαδιά, για να μη μοιάζω με σκοτάδι. Με σήκωσαν ολόκληρο και τώρα στέκομαι ' +
              'σε αίθουσα.',
            en:
              'I was underground, outside the walls. They painted birds and branches inside ' +
              'me so I would not look like darkness. They lifted me out whole and now I stand ' +
              'in a gallery.',
          },
          hint: {
            el: 'Μπορείς να μπεις μέσα μου, και επιτρέπεται.',
            en: 'You can step inside me, and you are allowed to.',
          },
          answerExhibitId: 'thessaloniki-byzantine-museum-painted-tomb',
        },
        {
          id: 'thessaloniki-byzantine-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μικρός και στρογγυλός, και κάποτε με έδιναν για ψωμί. Κουβαλούσα ένα ' +
              'πρόσωπο που ελάχιστοι είχαν δει από κοντά, και όταν εκείνο άλλαζε, άλλαζα ' +
              'κι εγώ.',
            en:
              'I am small and round, and once I was handed over for bread. I carried a face ' +
              'that very few had seen up close, and when that face changed, so did I.',
          },
          hint: {
            el: 'Μπορεί να είμαι από χρυσό, ασήμι ή χαλκό.',
            en: 'I may be gold, silver or copper.',
          },
          answerExhibitId: 'thessaloniki-byzantine-museum-coins',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- cinema museum
  {
    id: 'thessaloniki-cinema-museum',
    cityId: 'thessaloniki',
    emoji: '🎬',
    category: 'art',
    difficulty: 1,

    name: { el: 'Μουσείο Κινηματογράφου', en: 'The Cinema Museum' },
    tagline: {
      el: 'Μηχανές προβολής και αφίσες σε μια αποθήκη του λιμανιού',
      en: 'Projectors and posters inside a harbour warehouse',
    },
    story: {
      el:
        'Το μουσείο βρίσκεται μέσα στο λιμάνι, σε μια παλιά αποθήκη εμπορευμάτων που ' +
        'μετατράπηκε σε χώρο πολιτισμού. Άνοιξε το 1997, τη χρονιά που η Θεσσαλονίκη ήταν ' +
        'Πολιτιστική Πρωτεύουσα της Ευρώπης. Μέσα φυλάσσονται μηχανές προβολής με γρανάζια ' +
        'και μεταλλικά καρούλια, παλιές φωτογραφικές μηχανές, κοστούμια, σενάρια γραμμένα ' +
        'στο χέρι και εκατοντάδες αφίσες ζωγραφισμένες πριν υπάρξουν υπολογιστές. Το πιο ' +
        'διασκεδαστικό κομμάτι είναι τα μηχανήματα πριν από τον κινηματογράφο: δίσκοι που ' +
        'γυρίζουν, βιβλιαράκια που ξεφυλλίζεις γρήγορα, κουτιά με σχισμές. Όλα κάνουν το ' +
        'ίδιο κόλπο, που είναι και το κόλπο κάθε ταινίας: δείχνουν πολλές ακίνητες εικόνες ' +
        'τόσο γρήγορα, ώστε το μάτι νομίζει ότι βλέπει κίνηση. Η πόλη έχει και το δικό της ' +
        'φεστιβάλ κινηματογράφου, που γίνεται κάθε χρόνο από το 1960 και γεμίζει τις ' +
        'αίθουσες της πόλης για δέκα μέρες κάθε Νοέμβριο.',
      en:
        'The museum sits inside the port, in an old cargo warehouse turned into a cultural ' +
        'space. It opened in 1997, the year Thessaloniki was European Capital of Culture. ' +
        'Inside are projectors full of gears and metal reels, old cameras, costumes, ' +
        'handwritten scripts and hundreds of posters painted before computers existed. The ' +
        'most entertaining part is the machines from before cinema: spinning discs, little ' +
        'books you flick through fast, boxes with slots cut in them. They all do the same ' +
        'trick, which is the trick behind every film: they show many still pictures so ' +
        'quickly that the eye believes it is seeing movement. The city has its own film ' +
        'festival too, held every year since 1960, which fills the cinemas of the city for ' +
        'ten days every November.',
    },
    facts: [
      {
        el: 'Στεγάζεται σε παλιά αποθήκη του λιμανιού και άνοιξε το 1997.',
        en: 'It is housed in an old harbour warehouse and opened in 1997.',
      },
      {
        el: 'Φυλάει μηχανές που έδειχναν κίνηση πριν καν υπάρξει ο κινηματογράφος.',
        en: 'It keeps machines that showed movement before cinema even existed.',
      },
      {
        el: 'Το φεστιβάλ κινηματογράφου της πόλης γίνεται κάθε χρόνο από το 1960.',
        en: 'The city’s film festival has been held every year since 1960.',
      },
    ],
    location: {
      lat: 40.6329,
      lng: 22.9355,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q2613530', deltaM: 0 },
        { kind: 'osm', ref: 'way/28464187', deltaM: 8 },
        { kind: 'wikipedia', ref: 'Cinema Museum of Thessaloniki', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Ποιο είναι το κόλπο πίσω από κάθε ταινία;',
        en: 'What is the trick behind every film?',
      },
      answers: [
        {
          el: 'Πολλές ακίνητες εικόνες, τόσο γρήγορα που μοιάζουν με κίνηση',
          en: 'Many still pictures, shown so fast that they look like movement',
        },
        {
          el: 'Μία εικόνα που τεντώνεται και μεγαλώνει',
          en: 'One picture that stretches and grows',
        },
        {
          el: 'Καθρέφτες που αντανακλούν αληθινούς ηθοποιούς',
          en: 'Mirrors reflecting real actors',
        },
        {
          el: 'Ζωγραφιές που στεγνώνουν και αλλάζουν σχήμα',
          en: 'Paintings that dry and change shape',
        },
      ],
      explanation: {
        el:
          'Μια ταινία δεν κινείται ποτέ. Εμείς συμπληρώνουμε την κίνηση ανάμεσα στις ' +
          'εικόνες.',
        en:
          'A film never moves at all. We fill in the movement between the pictures ' +
          'ourselves.',
      },
    },
  },

  // ----------------------------------------------------------------------- walls
  {
    id: 'thessaloniki-walls',
    cityId: 'thessaloniki',
    emoji: '🧱',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Βυζαντινά τείχη', en: 'The Byzantine Walls' },
    tagline: {
      el: 'Πέτρα, τούβλο, πέτρα, τούβλο: χίλια εξακόσια χρόνια όρθια',
      en: 'Stone, brick, stone, brick: sixteen hundred years upright',
    },
    story: {
      el:
        'Τα τείχη της Θεσσαλονίκης ζώνουν την παλιά πόλη από τα τέλη του 4ου αιώνα μ.Χ. ' +
        'Στην αρχή είχαν μήκος περίπου οκτώ χιλιόμετρα και κατέβαιναν ως τη θάλασσα· ' +
        'σήμερα σώζεται περίπου το μισό, κυρίως στο πάνω μέρος της πόλης. Κοίτα τους από ' +
        'κοντά και θα δεις κάτι που επαναλαμβάνεται: μερικές σειρές πέτρας, μετά μια ζώνη ' +
        'από τούβλα, μετά πάλι πέτρα. Δεν είναι διακόσμηση. Τα τούβλα, που έχουν όλα ίδιο ' +
        'πάχος, ισιώνουν τη σειρά ώστε να μη γείρει ο τοίχος καθώς ανεβαίνει, και δίνουν ' +
        'στο τείχος λίγη ελαστικότητα όταν κουνηθεί η γη. Μέσα από αυτά τα τείχη βρίσκεται ' +
        'η Άνω Πόλη, η μόνη γειτονιά που γλίτωσε από τη μεγάλη φωτιά του 1917, επειδή ήταν ' +
        'ψηλότερα από αυτήν. Γι’ αυτό είναι και η μόνη με στενά δρομάκια και παλιά σπίτια ' +
        'με σαχνισιά.',
      en:
        'The walls of Thessaloniki have wrapped the old city since the end of the 4th ' +
        'century AD. They were about eight kilometres long to begin with and ran all the way ' +
        'down to the sea; about half survives today, mostly in the upper part of the city. ' +
        'Look closely and you will see something repeating: a few courses of stone, then a ' +
        'band of brick, then stone again. It is not decoration. The bricks, all the same ' +
        'thickness, level the courses so the wall does not lean as it rises, and they give ' +
        'it a little give when the ground shakes. Inside these walls is the Upper Town, the ' +
        'only neighbourhood that escaped the great fire of 1917, because it stood above it. ' +
        'That is why it is also the only one with narrow lanes and old houses with jettied ' +
        'upper floors.',
    },
    facts: [
      {
        el: 'Είχαν αρχικά μήκος περίπου 8 χιλιόμετρα. Σώζεται περίπου το μισό.',
        en: 'They were originally about 8 kilometres long. About half survives.',
      },
      {
        el: 'Οι ζώνες από τούβλα ισιώνουν τις σειρές και βοηθούν στους σεισμούς.',
        en: 'The bands of brick level the courses and help in earthquakes.',
      },
      {
        el: 'Η Άνω Πόλη μέσα στα τείχη γλίτωσε από τη φωτιά του 1917.',
        en: 'The Upper Town inside the walls escaped the fire of 1917.',
      },
    ],
    location: {
      lat: 40.6425,
      lng: 22.95444,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q7963249', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2903111', deltaM: 951 },
        { kind: 'wikipedia', ref: 'Walls of Thessaloniki', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
      note: 'The OSM relation traces the entire wall circuit, so its centre falls 951 m away, down in the modern city. Wikidata and Wikipedia agree exactly on the northern section, which is the part still standing.',
    },
    question: {
      q: {
        el: 'Γιατί έχουν ζώνες από τούβλα ανάμεσα στις πέτρες;',
        en: 'Why do the walls have bands of brick between the stones?',
      },
      answers: [
        {
          el: 'Για να ισιώνουν τις σειρές και να αντέχει ο τοίχος στους σεισμούς',
          en: 'To level the courses and help the wall survive earthquakes',
        },
        {
          el: 'Για να ξεχωρίζουν οι φρουροί πόσο ψηλά βρίσκονται',
          en: 'So the guards could tell how high up they were',
        },
        {
          el: 'Για να δείχνουν πόσα χρόνια πήρε το χτίσιμο',
          en: 'To show how many years the building took',
        },
        {
          el: 'Για να ζεσταίνεται ο τοίχος τον χειμώνα',
          en: 'To keep the wall warm in winter',
        },
      ],
      explanation: {
        el:
          'Οι πέτρες έχουν ακανόνιστο σχήμα και η σειρά στραβώνει. Τα τούβλα, όλα ίδια, ' +
          'την ξαναϊσιώνουν.',
        en:
          'Stones are irregular and a course goes crooked. Bricks, all identical, straighten ' +
          'it out again.',
      },
    },
  },

  // ----------------------------------------------------------------- heptapyrgion
  {
    id: 'thessaloniki-heptapyrgion',
    cityId: 'thessaloniki',
    emoji: '🏰',
    category: 'history',
    difficulty: 3,

    name: { el: 'Επταπύργιο', en: 'The Heptapyrgion' },
    tagline: {
      el: 'Το φρούριο στην ψηλότερη γωνία των τειχών',
      en: 'The fortress at the highest corner of the walls',
    },
    story: {
      el:
        'Στην ψηλότερη γωνία των τειχών στέκεται ένα φρούριο μέσα στο φρούριο. Το όνομά ' +
        'του σημαίνει «εφτά πύργοι», αν και οι πύργοι του είναι στην πραγματικότητα δέκα: ' +
        'το όνομα ήρθε από άλλο φρούριο και έμεινε. Χτίστηκε σε φάσεις, με βυζαντινά και ' +
        'οθωμανικά κομμάτια το ένα πάνω στο άλλο, και όποιος το κρατούσε έλεγχε ολόκληρη ' +
        'την πόλη από ψηλά. Έχει όμως και μια δεύτερη ιστορία, πιο πρόσφατη και πιο ' +
        'δύσκολη: από το 1890 ως το 1989 λειτουργούσε ως φυλακή. Επί εκατό χρόνια, ένα ' +
        'κτίριο χτισμένο για να κρατάει τους εχθρούς έξω, χρησιμοποιήθηκε για να κρατάει ' +
        'ανθρώπους μέσα. Έκλεισε ως φυλακή το 1989, και από τότε αποκαθίσταται σιγά σιγά ' +
        'ως μνημείο. Από την αυλή του βλέπεις τη Θεσσαλονίκη ολόκληρη, ως τον Θερμαϊκό, ' +
        'και καταλαβαίνεις αμέσως γιατί το ήθελαν τόσο πολύ όλοι.',
      en:
        'At the highest corner of the walls stands a fortress inside the fortress. Its name ' +
        'means "seven towers", although it actually has ten: the name travelled here from ' +
        'another fortress and stuck. It was built in stages, with Byzantine and Ottoman work ' +
        'one on top of the other, and whoever held it controlled the whole city from above. ' +
        'It has a second story too, more recent and harder: from 1890 until 1989 it was used ' +
        'as a prison. For a hundred years, a building made to keep enemies out was used to ' +
        'keep people in. It closed as a prison in 1989, and since then it has slowly been ' +
        'restored as a monument. From its courtyard you can see the whole of Thessaloniki, ' +
        'right out to the gulf.',
    },
    facts: [
      {
        el: 'Το όνομά του σημαίνει «εφτά πύργοι», αλλά έχει δέκα.',
        en: 'Its name means "seven towers", but it has ten.',
      },
      {
        el: 'Βρίσκεται στην ψηλότερη γωνία των τειχών της πόλης.',
        en: 'It sits at the highest corner of the city walls.',
      },
      {
        el: 'Λειτούργησε ως φυλακή από το 1890 ως το 1989.',
        en: 'It was used as a prison from 1890 until 1989.',
      },
    ],
    location: {
      lat: 40.64417,
      lng: 22.96194,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1572213', deltaM: 0 },
        { kind: 'osm', ref: 'way/978511541', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Heptapyrgion (Thessaloniki)', deltaM: 19 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Τι σημαίνει το όνομα «Επταπύργιο»;',
        en: 'What does the name "Heptapyrgion" mean?',
      },
      answers: [
        { el: 'Εφτά πύργοι', en: 'Seven towers' },
        { el: 'Εφτά πύλες', en: 'Seven gates' },
        { el: 'Εφτά λόφοι', en: 'Seven hills' },
        { el: 'Εφτά αδέλφια', en: 'Seven brothers' },
      ],
      explanation: {
        el:
          'Το «επτά» δεν μετράει τους πύργους του: τους έχει δέκα. Το όνομα ήρθε από αλλού ' +
          'και έμεινε.',
        en:
          'The "seven" does not count its towers: it has ten. The name came from somewhere ' +
          'else and stayed.',
      },
    },
  },

  // --------------------------------------------------------------------- vlatades
  {
    id: 'thessaloniki-vlatades',
    cityId: 'thessaloniki',
    emoji: '🦚',
    category: 'history',
    difficulty: 2,

    name: { el: 'Μονή Βλατάδων', en: 'Vlatades Monastery' },
    tagline: {
      el: 'Το μόνο βυζαντινό μοναστήρι της πόλης που λειτουργεί ακόμα',
      en: 'The city’s only Byzantine monastery still in use',
    },
    story: {
      el:
        'Ψηλά στην Άνω Πόλη, λίγο κάτω από τα τείχη, υπάρχει ένα μοναστήρι του 14ου αιώνα ' +
        'που δεν σταμάτησε ποτέ να λειτουργεί. Η Θεσσαλονίκη είχε πολλά βυζαντινά ' +
        'μοναστήρια· αυτό είναι το μόνο που έμεινε ζωντανό ως σήμερα. Στην αυλή του, κάτω ' +
        'από τα δέντρα, ζουν παγόνια που περπατούν ελεύθερα και ανοίγουν την ουρά τους ' +
        'χωρίς να δίνουν σημασία σε κανέναν. Είναι ο λόγος που τα παιδιά της πόλης ξέρουν ' +
        'αυτό το μοναστήρι πριν μάθουν οτιδήποτε για το Βυζάντιο. Το καθολικό, δηλαδή η ' +
        'κεντρική εκκλησία, κρατάει τοιχογραφίες του 14ου αιώνα. Και επειδή το μοναστήρι ' +
        'στέκεται στο ψηλότερο μέρος της παλιάς πόλης, από την αυλή του απλώνεται μπροστά ' +
        'σου ολόκληρη η Θεσσαλονίκη: τα κεραμίδια, το λιμάνι, ο Θερμαϊκός και, τις καθαρές ' +
        'μέρες, ο Όλυμπος στο βάθος.',
      en:
        'High in the Upper Town, just below the walls, there is a 14th-century monastery ' +
        'that has never stopped working. Thessaloniki had many Byzantine monasteries; this ' +
        'is the only one still alive today. In its courtyard, under the trees, peacocks walk ' +
        'about freely and open their tails without paying attention to anybody. That is why ' +
        'the children of the city know this monastery before they learn anything at all ' +
        'about Byzantium. The katholikon, the main church, keeps wall paintings from the ' +
        '14th century. And because the monastery stands on the highest part of the old city, ' +
        'the whole of Thessaloniki spreads out from its courtyard: the roof tiles, the port, ' +
        'the gulf and, on clear days, Olympus in the distance. It is the best view in the ' +
        'city, and it is free.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε τον 14ο αιώνα και λειτουργεί συνεχώς από τότε.',
        en: 'It was founded in the 14th century and has worked ever since.',
      },
      {
        el: 'Είναι το μόνο βυζαντινό μοναστήρι της πόλης που σώζεται ζωντανό.',
        en: 'It is the only Byzantine monastery of the city still in use.',
      },
      {
        el: 'Στην αυλή του ζουν παγόνια που κυκλοφορούν ελεύθερα.',
        en: 'Peacocks live loose in its courtyard.',
      },
    ],
    location: {
      lat: 40.64183,
      lng: 22.95447,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q962846', deltaM: 0 },
        { kind: 'osm', ref: 'way/161675415', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Vlatades Monastery', deltaM: 4 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Wikidata also has Q110914490 for the neighbourhood of the same name, 60 m away. This is the monastery itself.',
    },
    question: {
      q: {
        el: 'Ποιο ζώο θα συναντήσεις στην αυλή της μονής;',
        en: 'Which animal will you meet in the monastery courtyard?',
      },
      answers: [
        { el: 'Παγόνια', en: 'Peacocks' },
        { el: 'Ελάφια', en: 'Deer' },
        { el: 'Πελαργούς', en: 'Storks' },
        { el: 'Χελώνες', en: 'Tortoises' },
      ],
      explanation: {
        el:
          'Τα παγόνια ήταν από παλιά σύμβολο σε βυζαντινές παραστάσεις, και εδώ υπάρχουν ' +
          'και αληθινά.',
        en:
          'Peacocks were an old symbol in Byzantine imagery, and here there are real ones as ' +
          'well.',
      },
    },
  },

  // -------------------------------------------------------------- aristotelous sq
  {
    id: 'thessaloniki-aristotelous',
    cityId: 'thessaloniki',
    emoji: '🌊',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Πλατεία Αριστοτέλους', en: 'Aristotelous Square' },
    tagline: {
      el: 'Μια πλατεία σχεδιασμένη πάνω σε καμένη πόλη',
      en: 'A square designed on top of a burnt city',
    },
    story: {
      el:
        'Τον Αύγουστο του 1917 μια φωτιά έκαψε το μεγαλύτερο μέρος του κέντρου της ' +
        'Θεσσαλονίκης. Χιλιάδες άνθρωποι έμειναν χωρίς σπίτι. Αντί να ξαναχτιστούν τα ίδια ' +
        'στενά δρομάκια, αποφασίστηκε κάτι ασυνήθιστο: να σχεδιαστεί η πόλη από την αρχή. ' +
        'Επικεφαλής ήταν ο Γάλλος αρχιτέκτονας Ερνέστ Εμπράρ, και το σχέδιό του είχε στη ' +
        'μέση έναν μεγάλο άξονα που ξεκινά από τη θάλασσα και ανεβαίνει προς την Άνω Πόλη. ' +
        'Η Αριστοτέλους είναι αυτός ο άξονας. Το σχέδιο άργησε δεκαετίες να ολοκληρωθεί, ' +
        'και τα περισσότερα κτίρια γύρω από την πλατεία τελείωσαν στη δεκαετία του 1950. ' +
        'Το καλύτερο κόλπο της είναι απλό: στάσου στην κορυφή της και κοίτα ίσια προς τη ' +
        'θάλασσα. Τις καθαρές μέρες, στο τέλος του άξονα φαίνεται ο Όλυμπος, το βουνό των ' +
        'θεών, εβδομήντα χιλιόμετρα μακριά και απέναντι.',
      en:
        'In August 1917 a fire burned most of the centre of Thessaloniki. Thousands of ' +
        'people lost their homes. Instead of rebuilding the same narrow lanes, something ' +
        'unusual was decided: the city would be designed again from scratch. The French ' +
        'architect Ernest Hébrard led the work, and his plan had a great axis down the ' +
        'middle, starting at the sea and climbing towards the Upper Town. Aristotelous ' +
        'Square is that axis. The plan took decades to finish, and most of the buildings ' +
        'around the square were completed in the 1950s. Its best trick is a simple one: ' +
        'stand at the top of it and look straight out to sea. On a clear day, Mount Olympus ' +
        'appears at the end of the axis.',
    },
    facts: [
      {
        el: 'Σχεδιάστηκε μετά τη μεγάλη φωτιά του 1917, από τον Ερνέστ Εμπράρ.',
        en: 'It was designed after the great fire of 1917, by Ernest Hébrard.',
      },
      {
        el: 'Ο άξονάς της ξεκινά από τη θάλασσα και ανεβαίνει προς την Άνω Πόλη.',
        en: 'Its axis starts at the sea and climbs towards the Upper Town.',
      },
      {
        el: 'Τα περισσότερα κτίριά της ολοκληρώθηκαν στη δεκαετία του 1950.',
        en: 'Most of its buildings were completed in the 1950s.',
      },
    ],
    location: {
      lat: 40.63246,
      lng: 22.94119,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q667472', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Aristotelous Square', deltaM: 23 },
      ],
      verifiedAt: '2026-09-11',
      note: 'OpenStreetMap returned a server error on this pass, so the grade rests on Wikidata and Wikipedia, which agree to 23 m.',
    },
    question: {
      q: {
        el: 'Γιατί σχεδιάστηκε αυτή η πλατεία;',
        en: 'Why was this square designed?',
      },
      answers: [
        {
          el: 'Γιατί η φωτιά του 1917 έκαψε το κέντρο και η πόλη ξανασχεδιάστηκε',
          en: 'Because the 1917 fire burned the centre and the city was redesigned',
        },
        {
          el: 'Γιατί χρειαζόταν χώρος για τα αυτοκίνητα',
          en: 'Because space was needed for cars',
        },
        {
          el: 'Γιατί εκεί βρέθηκαν αρχαία και δεν μπορούσαν να χτίσουν',
          en: 'Because ancient remains were found there and nobody could build',
        },
        {
          el: 'Γιατί ήταν παλιά λιμάνι που μπαζώθηκε',
          en: 'Because it used to be a harbour that was filled in',
        },
      ],
      explanation: {
        el:
          'Είναι σπάνιο μια μεγάλη πόλη να ξανασχεδιαστεί ολόκληρη. Χρειάστηκε μια ' +
          'καταστροφή για να γίνει.',
        en:
          'It is rare for a big city to be planned again from scratch. It took a disaster ' +
          'for it to happen.',
      },
    },
  },

  // ---------------------------------------------------------------- modiano market
  {
    id: 'thessaloniki-modiano',
    cityId: 'thessaloniki',
    emoji: '🍅',
    category: 'food',
    difficulty: 2,

    name: { el: 'Αγορά Μοδιάνο', en: 'The Modiano Market' },
    tagline: {
      el: 'Σκεπαστή αγορά από σίδερο και γυαλί, ανοιχτή ξανά',
      en: 'A covered market of iron and glass, open again',
    },
    story: {
      el:
        'Η Αγορά Μοδιάνο χτίστηκε το 1922, λίγα χρόνια μετά τη μεγάλη φωτιά, πάνω στο ' +
        'σημείο όπου βρισκόταν ένα σχολείο που είχε καεί. Τη σχεδίασε ο Ελί Μοδιάνο, ' +
        'αρχιτέκτονας από την εβραϊκή κοινότητα της Θεσσαλονίκης, που ζούσε στην πόλη επί ' +
        'αιώνες. Είναι μια σκεπαστή αγορά: σιδερένιος σκελετός, γυάλινη οροφή, και από ' +
        'κάτω σειρές από πάγκους με ψάρια, τυριά, ελιές, μπαχαρικά και ταβερνάκια. Το φως ' +
        'μπαίνει από πάνω και πέφτει στους διαδρόμους, οπότε μέσα δεν χρειάζονται πολλές ' +
        'λάμπες ακόμα και τον χειμώνα. Για αρκετά χρόνια η αγορά είχε σχεδόν ερημώσει και ' +
        'κινδύνευε να κλείσει οριστικά. Αποκαταστάθηκε και άνοιξε ξανά το 2022, με το ' +
        'παλιό της κέλυφος στη θέση του. Δίπλα της λειτουργεί το Καπάνι, ακόμα παλαιότερη ' +
        'αγορά, χωρίς σκεπή, όπου οι πάγκοι απλώνονται κατευθείαν μέσα στα σοκάκια.',
      en:
        'The Modiano Market was built in 1922, a few years after the great fire, on the spot ' +
        'where a school had burned down. It was designed by Eli Modiano, an architect from ' +
        'Thessaloniki’s Jewish community, which had lived in the city for centuries. It is a ' +
        'covered market: an iron frame, a glass roof, and underneath it rows of stalls with ' +
        'fish, cheese, olives, spices and small tavernas. Light comes in from above and ' +
        'falls down the aisles, so even in winter it needs few lamps. For a good many years ' +
        'the market had almost emptied out and was close to closing for good. It was ' +
        'restored and opened again in 2022, with its old shell still in place. Beside it ' +
        'runs the Kapani, an even older market, with no roof at all.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1922 και τη σχεδίασε ο αρχιτέκτονας Ελί Μοδιάνο.',
        en: 'It was built in 1922 and designed by the architect Eli Modiano.',
      },
      {
        el: 'Η οροφή της είναι από γυαλί, ώστε να φωτίζεται από πάνω.',
        en: 'Its roof is glass, so it is lit from above.',
      },
      {
        el: 'Έκλεισε για χρόνια και άνοιξε ξανά, αποκαταστημένη, το 2022.',
        en: 'It closed for years and reopened, restored, in 2022.',
      },
    ],
    location: {
      lat: 40.6349,
      lng: 22.9418,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q15711710', deltaM: 0 },
        { kind: 'osm', ref: 'relation/17416084', deltaM: 7 },
        { kind: 'wikipedia', ref: 'Modiano Market', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Γιατί χρειάζεται λίγες λάμπες η αγορά ακόμα και τον χειμώνα;',
        en: 'Why does the market need few lamps even in winter?',
      },
      answers: [
        {
          el: 'Γιατί η οροφή της είναι από γυαλί και μπαίνει φως από πάνω',
          en: 'Because its roof is glass and light comes in from above',
        },
        {
          el: 'Γιατί οι πάγκοι είναι βαμμένοι άσπροι',
          en: 'Because the stalls are painted white',
        },
        {
          el: 'Γιατί κλείνει πριν σκοτεινιάσει',
          en: 'Because it closes before it gets dark',
        },
        {
          el: 'Γιατί έχει καθρέφτες στους τοίχους',
          en: 'Because it has mirrors on the walls',
        },
      ],
      explanation: {
        el:
          'Οι σκεπαστές αγορές του 19ου και 20ού αιώνα λύνουν έτσι το πρόβλημα: σίδερο για ' +
          'σκελετό, γυαλί για φως.',
        en:
          'Covered markets of the 19th and 20th centuries solved it this way: iron for the ' +
          'frame, glass for the light.',
      },
    },
  },

  // ----------------------------------------------------------------------- noesis
  {
    id: 'thessaloniki-noesis',
    cityId: 'thessaloniki',
    emoji: '🔬',
    category: 'science',
    difficulty: 1,

    name: { el: 'Κέντρο Διάδοσης Επιστημών «Νόησις»', en: 'The Noesis Science Center' },
    tagline: {
      el: 'Το μουσείο όπου τα εκθέματα θέλουν να τα πειράξεις',
      en: 'The museum whose exhibits want you to touch them',
    },
    story: {
      el:
        'Λίγα χιλιόμετρα έξω από την πόλη, προς τη Θέρμη, βρίσκεται ένα μουσείο που ' +
        'λειτουργεί ανάποδα από τα υπόλοιπα: εδώ δεν σου λένε «μην αγγίζεις». Τα εκθέματα ' +
        'είναι μηχανήματα και πειράματα που πρέπει να τα γυρίσεις, να τα σπρώξεις ή να ' +
        'τα πατήσεις για να καταλάβεις τι κάνουν. Υπάρχει πλανητάριο με θόλο, όπου ξαπλώνεις ' +
        'στην πλάτη και βλέπεις τον ουρανό, και μια αίθουσα με τεράστια οθόνη για ταινίες ' +
        'μεγάλου μεγέθους. Υπάρχει και προσομοιωτής που κουνιέται μαζί με την εικόνα. Το ' +
        'μουσείο τεχνολογίας δείχνει μηχανές που δούλευαν στα εργοστάσια και στα χωράφια ' +
        'της Ελλάδας πριν από ογδόντα χρόνια, και δίπλα τους ρομπότ. Η βασική ιδέα είναι ' +
        'μία: ένα πείραμα δεν το μαθαίνεις διαβάζοντάς το, το μαθαίνεις κάνοντάς το ο ίδιος, ' +
        'με τα χέρια σου και με τα λάθη σου.',
      en:
        'A few kilometres outside the city, towards Thermi, is a museum that works the ' +
        'opposite way round from the others: here nobody says "do not touch". The exhibits ' +
        'are machines and experiments you have to turn, push or stand on to understand what ' +
        'they do. There is a domed planetarium where you lie back and watch the sky, and a ' +
        'hall with a huge screen for large-format films. There is a simulator that moves ' +
        'along with the picture. The technology museum shows machines that worked in Greek ' +
        'factories and fields eighty years ago, and robots standing next to them. The idea ' +
        'behind all of it is one thing: you do not learn an experiment by reading it, you ' +
        'learn it by doing it.',
    },
    facts: [
      {
        el: 'Βρίσκεται έξω από την πόλη, προς τη Θέρμη.',
        en: 'It is outside the city, towards Thermi.',
      },
      {
        el: 'Έχει πλανητάριο με θόλο και αίθουσα με οθόνη μεγάλου μεγέθους.',
        en: 'It has a domed planetarium and a large-format screen.',
      },
      {
        el: 'Τα εκθέματά του είναι φτιαγμένα για να τα χειρίζεσαι, όχι για να τα κοιτάς.',
        en: 'Its exhibits are built to be handled rather than looked at.',
      },
    ],
    location: {
      lat: 40.5625,
      lng: 22.99528,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1271635', deltaM: 0 },
        { kind: 'osm', ref: 'way/40635488', deltaM: 36 },
        { kind: 'wikipedia', ref: 'Thessaloniki Science Center and Technology Museum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
      note: 'The furthest place from the city centre in this city file, which is correct: the centre is out at Thermi, not in Thessaloniki itself.',
    },
    question: {
      q: {
        el: 'Γιατί σε αφήνει αυτό το μουσείο να αγγίζεις τα εκθέματα;',
        en: 'Why does this museum let you touch the exhibits?',
      },
      answers: [
        {
          el: 'Γιατί ένα πείραμα το καταλαβαίνεις κάνοντάς το',
          en: 'Because you understand an experiment by doing it',
        },
        {
          el: 'Γιατί όλα τα εκθέματα είναι αντίγραφα χωρίς αξία',
          en: 'Because all the exhibits are worthless copies',
        },
        {
          el: 'Γιατί δεν υπάρχουν αρκετοί φύλακες',
          en: 'Because there are not enough guards',
        },
        {
          el: 'Γιατί τα εκθέματα καθαρίζονται κάθε βράδυ',
          en: 'Because the exhibits are cleaned every night',
        },
      ],
      explanation: {
        el:
          'Σε ένα αρχαιολογικό μουσείο το αντικείμενο είναι μοναδικό. Εδώ το αντικείμενο ' +
          'είναι εργαλείο, και τα εργαλεία θέλουν χέρια.',
        en:
          'In an archaeological museum the object is unique. Here the object is a tool, and ' +
          'tools need hands.',
      },
    },
  },

  // --------------------------------------------------------------------- ote tower
  {
    id: 'thessaloniki-ote-tower',
    cityId: 'thessaloniki',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πύργος του ΟΤΕ', en: 'The OTE Tower' },
    tagline: {
      el: 'Ο πύργος με τον όροφο που γυρίζει',
      en: 'The tower with the floor that turns',
    },
    story: {
      el:
        'Μέσα στον χώρο της Διεθνούς Έκθεσης στέκεται ένας λεπτός πύργος από μπετόν, ' +
        'εβδομήντα έξι μέτρα ψηλός, χτισμένος το 1966. Έμοιαζε τότε με κάτι από το μέλλον, ' +
        'και για δεκαετίες ήταν το ψηλότερο κτίριο της πόλης. Στην κορυφή του υπάρχει ένας ' +
        'κυκλικός χώρος με τζάμια ολόγυρα, και αυτός ο χώρος γυρίζει: κάνει μια πλήρη ' +
        'περιστροφή σε περίπου μία ώρα. Η κίνηση είναι τόσο αργή που δεν την αντιλαμβάνεσαι ' +
        'καθόλου. Παρατηρείς μόνο ότι, ενώ κάθεσαι ακίνητος, στην αρχή έβλεπες τη θάλασσα ' +
        'και τώρα βλέπεις τα βουνά. Είναι ένα μικρό μάθημα για την ταχύτητα: κάτι που ' +
        'κινείται πολύ αργά μοιάζει ακίνητο, ακριβώς όπως ο ήλιος στον ουρανό ή ο λεπτοδείκτης ' +
        'ενός ρολογιού, που ποτέ δεν τον πιάνεις να προχωράει αλλά πάντα τον βρίσκεις ' +
        'αλλού από εκεί που τον άφησες.',
      en:
        'Inside the grounds of the International Fair stands a slim concrete tower, ' +
        'seventy-six metres tall, built in 1966. It looked like something out of the future ' +
        'at the time, and for decades it was the tallest building in the city. At the top ' +
        'there is a circular space with glass all the way round, and that space turns: it ' +
        'makes one complete revolution in about an hour. The movement is so slow that you do ' +
        'not notice it at all. You only notice that, while sitting perfectly still, you ' +
        'started out looking at the sea and are now looking at the mountains. It is a small ' +
        'lesson about speed: something moving very slowly looks motionless, exactly like the ' +
        'sun in the sky or the minute hand of a clock, which you never catch moving.',
    },
    facts: [
      {
        el: 'Έχει ύψος 76 μέτρα και χτίστηκε το 1966.',
        en: 'It is 76 metres tall and was built in 1966.',
      },
      {
        el: 'Ο επάνω όροφός του κάνει μια πλήρη περιστροφή σε περίπου μία ώρα.',
        en: 'Its top floor makes one full turn in about an hour.',
      },
      {
        el: 'Στέκεται μέσα στον χώρο της Διεθνούς Έκθεσης Θεσσαλονίκης.',
        en: 'It stands inside the grounds of the Thessaloniki International Fair.',
      },
    ],
    location: {
      lat: 40.62621,
      lng: 22.95449,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q383061', deltaM: 0 },
        { kind: 'osm', ref: 'way/59717047', deltaM: 6 },
        { kind: 'wikipedia', ref: 'OTE Tower', deltaM: 12 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Γιατί δεν καταλαβαίνεις ότι ο επάνω όροφος γυρίζει;',
        en: 'Why can you not feel the top floor turning?',
      },
      answers: [
        {
          el: 'Γιατί κινείται πολύ αργά, μία στροφή την ώρα',
          en: 'Because it moves very slowly, one turn an hour',
        },
        {
          el: 'Γιατί γυρίζει μόνο όταν κοιμούνται οι επισκέπτες',
          en: 'Because it only turns when the visitors are asleep',
        },
        {
          el: 'Γιατί γυρίζουν τα τζάμια και όχι το πάτωμα',
          en: 'Because the glass turns and not the floor',
        },
        {
          el: 'Γιατί το πάτωμα είναι στρωμένο με μοκέτα',
          en: 'Because the floor is covered in carpet',
        },
      ],
      explanation: {
        el:
          'Το μάτι μας δεν πιάνει πολύ αργές κινήσεις. Καταλαβαίνουμε ότι κάτι κινήθηκε ' +
          'μόνο συγκρίνοντας πριν και μετά.',
        en:
          'Our eyes do not catch very slow movement. We only work out that something moved ' +
          'by comparing before and after.',
      },
    },
  },

  // ---------------------------------------------------------------- toumba stadium
  {
    id: 'thessaloniki-toumba-stadium',
    cityId: 'thessaloniki',
    emoji: '⚽',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Γήπεδο Τούμπας', en: 'Toumba Stadium' },
    tagline: {
      el: 'Το γήπεδο όπου οι εξέδρες ακουμπούν σχεδόν τον αγωνιστικό χώρο',
      en: 'The ground where the stands almost touch the pitch',
    },
    story: {
      el:
        'Το γήπεδο της Τούμπας άνοιξε το 1959, μέσα σε μια γειτονιά που χτίστηκε από ' +
        'πρόσφυγες, και είναι η έδρα του ΠΑΟΚ. Χωράει περίπου είκοσι οκτώ χιλιάδες ' +
        'ανθρώπους, που δεν είναι ρεκόρ, αλλά το γήπεδο έχει φήμη ως ένα από τα πιο ' +
        'θορυβώδη της Ευρώπης. Ο λόγος δεν είναι μόνο οι φίλαθλοι: είναι το σχήμα. Οι ' +
        'εξέδρες είναι χτισμένες σχεδόν κολλητά στον αγωνιστικό χώρο, χωρίς στίβο ανάμεσα, ' +
        'και ανεβαίνουν απότομα προς τα πάνω. Έτσι ο ήχος δεν σκορπίζει προς τα έξω· ' +
        'χτυπάει στα τσιμέντα και επιστρέφει στο κέντρο. Είναι ακριβώς η ίδια αρχή με ένα ' +
        'αρχαίο θέατρο, μόνο που εκεί ο σκοπός ήταν να ακούγεται ο ηθοποιός και εδώ να ' +
        'ακούγεται το πλήθος. Το γήπεδο είναι χτισμένο σε πλαγιά, οπότε μπαίνεις από ψηλά.',
      en:
        'Toumba Stadium opened in 1959 inside a neighbourhood built by refugees, and it is ' +
        'the home of PAOK. It holds about twenty-eight thousand people, which is no record, ' +
        'yet the ground has a reputation as one of the loudest in Europe. The reason is not ' +
        'only the fans: it is the shape. The stands are built almost right up against the ' +
        'pitch, with no running track in between, and they rise steeply. So the sound does ' +
        'not spill outwards; it hits the concrete and comes back to the middle. It is ' +
        'exactly the principle of an ancient theatre, except that there the point was to ' +
        'hear the actor and here it is to hear the crowd. The ground is built into a slope, ' +
        'so you go in from above.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1959 και χωράει περίπου 28.000 θεατές.',
        en: 'It opened in 1959 and holds about 28,000 spectators.',
      },
      {
        el: 'Δεν έχει στίβο, οπότε οι εξέδρες ακουμπούν σχεδόν στον αγωνιστικό χώρο.',
        en: 'It has no running track, so the stands sit almost on the pitch.',
      },
      {
        el: 'Οι απότομες εξέδρες στέλνουν τον ήχο πίσω στο κέντρο του γηπέδου.',
        en: 'The steep stands send the sound back to the middle of the ground.',
      },
    ],
    location: {
      lat: 40.61384,
      lng: 22.97242,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1141292', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Toumba Stadium', deltaM: 9 },
      ],
      verifiedAt: '2026-09-11',
      note: 'OpenStreetMap rate-limited this request, so the grade rests on Wikidata and Wikipedia, which agree to 9 m.',
    },
    question: {
      q: {
        el: 'Γιατί ακούγεται τόσο δυνατά αυτό το γήπεδο;',
        en: 'Why is this stadium so loud?',
      },
      answers: [
        {
          el: 'Γιατί οι απότομες εξέδρες γυρίζουν τον ήχο πίσω στο κέντρο',
          en: 'Because the steep stands send the sound back to the middle',
        },
        {
          el: 'Γιατί είναι το μεγαλύτερο γήπεδο της Ελλάδας',
          en: 'Because it is the largest stadium in Greece',
        },
        {
          el: 'Γιατί έχει μεγάφωνα κάτω από τα καθίσματα',
          en: 'Because it has loudspeakers under the seats',
        },
        {
          el: 'Γιατί είναι σκεπασμένο ολόκληρο με οροφή',
          en: 'Because it is completely covered by a roof',
        },
      ],
      explanation: {
        el:
          'Είναι ακουστική, όχι μέγεθος. Το ίδιο πλήθος σε ανοιχτό, πλατύ γήπεδο θα ' +
          'ακουγόταν πολύ πιο σιγά.',
        en:
          'It is acoustics, not size. The same crowd in an open, wide stadium would sound ' +
          'far quieter.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'thessaloniki-roman-day',
    cityId: 'thessaloniki',
    emoji: '🏛️',
    name: { el: 'Η πόλη των Ρωμαίων', en: 'The city of the Romans' },
    promise: {
      el: 'Μια αψίδα, ένας τεράστιος θόλος, μια πλατεία δύο ορόφων και όσα βγήκαν από κάτω τους.',
      en: 'An arch, an enormous dome, a two-storey square and everything dug out from under them.',
    },
    placeIds: [
      'thessaloniki-arch-of-galerius',
      'thessaloniki-rotunda',
      'thessaloniki-roman-agora',
      'thessaloniki-hagia-sophia',
      'thessaloniki-archaeological-museum',
    ],
  },
  {
    id: 'thessaloniki-upper-town',
    cityId: 'thessaloniki',
    emoji: '🧱',
    name: { el: 'Ανηφόρα στην Άνω Πόλη', en: 'Uphill to the Upper Town' },
    promise: {
      el: 'Η μόνη γειτονιά που γλίτωσε από τη φωτιά, με τα τείχη της και τα παγόνια της.',
      en: 'The one neighbourhood the fire missed, with its walls and its peacocks.',
    },
    placeIds: [
      'thessaloniki-agios-dimitrios',
      'thessaloniki-walls',
      'thessaloniki-vlatades',
      'thessaloniki-heptapyrgion',
    ],
  },
  {
    id: 'thessaloniki-after-the-fire',
    cityId: 'thessaloniki',
    emoji: '🔥',
    name: { el: 'Μετά τη φωτιά', en: 'After the fire' },
    promise: {
      el: 'Τρία κτίρια που υπάρχουν επειδή το 1917 η πόλη σχεδιάστηκε ξανά από την αρχή.',
      en: 'Three places that exist because in 1917 the city was planned all over again.',
    },
    placeIds: [
      'thessaloniki-aristotelous',
      'thessaloniki-modiano',
      'thessaloniki-cinema-museum',
    ],
  },
  {
    id: 'thessaloniki-outside-the-walls',
    cityId: 'thessaloniki',
    emoji: '🌊',
    name: { el: 'Έξω από τα τείχη', en: 'Outside the walls' },
    promise: {
      el: 'Από τη γωνία όπου τελείωναν τα τείχη ως ένα γήπεδο και έναν τεχνητό ουρανό.',
      en: 'From the corner where the walls ended out to a stadium and an artificial sky.',
    },
    placeIds: [
      'thessaloniki-white-tower',
      'thessaloniki-byzantine-museum',
      'thessaloniki-ote-tower',
      'thessaloniki-noesis',
      'thessaloniki-toumba-stadium',
    ],
  },
];
