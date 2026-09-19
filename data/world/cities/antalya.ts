/**
 * WiseBot World — Antalya.
 *
 * Twelve places, two of them museums with an interior. Antalya is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/antalya.json`, field for field, and
 * `location.map` is projected from it onto the bounds declared in `countries/turkey.ts`.
 * Nothing graded `D`. No place claims an `entrance`, because no door here has been
 * measured.
 *
 * Every question is written so that the correct answer is neither the longest nor the
 * shortest of the four, in both languages, with the reasoning kept in the explanation.
 *
 * `el` and `en` only. The other languages arrive as overlay files.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // --------------------------------------------------------------- hadrian gate
  {
    id: 'antalya-hadrian-gate',
    cityId: 'antalya',
    emoji: '🏛️',
    category: 'history',
    difficulty: 1,

    name: { el: 'Η Πύλη του Αδριανού', en: 'Hadrian’s Gate' },
    tagline: {
      el: 'Μια μαρμάρινη πύλη για την επίσκεψη ενός αυτοκράτορα',
      en: 'A marble gate built for an emperor’s visit',
    },
    story: {
      el:
        'Το έτος 130 ο Ρωμαίος αυτοκράτορας Αδριανός ταξίδευε σε όλη την αυτοκρατορία του, ' +
        'και ήρθε και σε αυτή την πόλη, που τότε λεγόταν Αττάλεια. Για να τον υποδεχτούν, οι ' +
        'κάτοικοι έχτισαν στο τείχος μια πύλη από άσπρο μάρμαρο, με τρεις καμάρες, κολόνες ' +
        'και σκαλιστά λουλούδια και ρόδακες στα ταβάνια των καμαρών. Είναι η μόνη πύλη του ' +
        'παλιού τείχους που στέκεται ακόμα. Για αιώνες ήταν χτισμένη μέσα στο τείχος και ' +
        'κρυμμένη, γι’ αυτό σώθηκε τόσο καλά, μέχρι που την ξαναέβγαλαν στο φως τον 19ο ' +
        'αιώνα. Στις δύο πλευρές της έχει δύο πύργους, τον έναν ρωμαϊκό και τον άλλο από την ' +
        'εποχή των Σελτζούκων, χίλια χρόνια νεότερο. Αν κοιτάξεις κάτω, στο πέτρινο πάτωμα ' +
        'κάτω από τις καμάρες, θα δεις βαθιά αυλάκια: τα άνοιξαν οι ρόδες των αμαξιών που ' +
        'περνούσαν από εδώ για δύο χιλιάδες χρόνια. Σήμερα είναι η κύρια είσοδος στην παλιά ' +
        'πόλη.',
      en:
        'In the year 130 the Roman emperor Hadrian was travelling through his empire, and he ' +
        'came to this city, then called Attaleia. To welcome him, the people built a gate of ' +
        'white marble into the city wall, with three arches, columns and carved flowers and ' +
        'rosettes on the ceilings of the arches. It is the only gate of the old wall still ' +
        'standing. For centuries it was built into the wall and hidden, which is why it ' +
        'survived so well, until it was brought back into the light in the 19th century. On ' +
        'either side it has two towers, one Roman and the other from the time of the Seljuks, a ' +
        'thousand years younger. If you look down at the stone floor under the arches, you ' +
        'will see deep grooves: they were worn by the wheels of carts passing through here for ' +
        'two thousand years. Today it is the main entrance to the old town.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 130 για την επίσκεψη του αυτοκράτορα Αδριανού.',
        en: 'It was built in 130 for the visit of the emperor Hadrian.',
      },
      {
        el: 'Είναι η μόνη πύλη του παλιού τείχους που στέκεται ακόμα.',
        en: 'It is the only gate of the old wall still standing.',
      },
      {
        el: 'Στο πάτωμά της υπάρχουν αυλάκια από ρόδες αμαξιών.',
        en: 'Its floor has grooves worn by cart wheels.',
      },
    ],
    location: {
      lat: 36.88531,
      lng: 30.70835,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1283114', deltaM: 0 },
        { kind: 'osm', ref: 'way/91728341', deltaM: 18 },
        { kind: 'wikipedia', ref: 'Hadrian\'s Gate', deltaM: 17 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.473, y: 0.194 },
    },
    question: {
      q: { el: 'Τι είναι τα βαθιά αυλάκια στο πάτωμα της πύλης;', en: 'What are the deep grooves in the gate’s floor?' },
      answers: [
        { el: 'Σημάδια από ρόδες αμαξιών', en: 'Marks left by cart wheels' },
        { el: 'Ρωγμές', en: 'Cracks' },
        { el: 'Κανάλια για το νερό της βροχής', en: 'Channels for rainwater' },
        {
          el: 'Γραμμές που χάραξαν οι χτίστες για να μετρούν τις πέτρες',
          en: 'Lines that the builders scratched in order to measure the stones',
        },
      ],
      explanation: {
        el: 'Αμάξια περνούσαν από εδώ για δύο χιλιάδες χρόνια, και οι ρόδες έσκαψαν την πέτρα.',
        en: 'Carts passed through here for two thousand years, and the wheels wore into the stone.',
      },
    },
  },

  // ---------------------------------------------------------------- clock tower
  {
    id: 'antalya-clock-tower',
    cityId: 'antalya',
    emoji: '🕰️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Ο Πύργος του Ρολογιού', en: 'The Clock Tower' },
    tagline: {
      el: 'Ένας πύργος του τείχους που έγινε ρολόι',
      en: 'A tower of the city wall that became a clock',
    },
    story: {
      el:
        'Στην πλατεία της παλιάς πόλης στέκεται ένας χοντρός πέτρινος πύργος με ένα ρολόι στην ' +
        'κορυφή. Ο πύργος είναι πολύ πιο παλιός από το ρολόι του. Ήταν ένας από τους πύργους ' +
        'του τείχους που προστάτευε την πόλη, και η πλατεία γύρω του λέγεται ακόμα «Πλατεία ' +
        'του Κάστρου». Το ρολόι μπήκε στην κορυφή του γύρω στο 1900, την εποχή που η ' +
        'Οθωμανική Αυτοκρατορία έχτιζε πύργους με ρολόγια σε πολλές πόλεις της, για να μαθαίνει ' +
        'ο κόσμος την ώρα. Πριν από αυτό, οι άνθρωποι ήξεραν την ώρα από τον ήλιο και από τη ' +
        'φωνή που καλούσε σε προσευχή από τους μιναρέδες. Ο πύργος είναι το σημείο συνάντησης ' +
        'της πόλης: από εδώ ξεκινάει ο κατήφορος προς την παλιά πόλη και το λιμάνι, με στενά ' +
        'δρομάκια, ξύλινα σπίτια με μπαλκόνια και αυλές με πορτοκαλιές. Δίπλα του περνάει το ' +
        'παλιό τραμ, που πηγαίνει ως το μουσείο και την παραλία.',
      en:
        'On the old town square stands a stout stone tower with a clock on top. The tower is ' +
        'much older than its clock. It was one of the towers of the wall that protected the ' +
        'city, and the square around it is still called "Castle Square". The clock was put on ' +
        'top around 1900, at a time when the Ottoman Empire was building clock towers in many ' +
        'of its cities, so that people could learn the time. Before that, people knew the time ' +
        'from the sun and from the call to prayer from the minarets. The tower is the city’s ' +
        'meeting point: from here the slope leads down into the old town and the harbour, ' +
        'with narrow lanes, wooden houses with balconies and courtyards with orange trees. The ' +
        'old tram passes beside it, running to the museum and the beach.',
    },
    facts: [
      {
        el: 'Ο πύργος ήταν μέρος του τείχους της πόλης.',
        en: 'The tower was part of the city wall.',
      },
      {
        el: 'Το ρολόι μπήκε στην κορυφή του γύρω στο 1900.',
        en: 'The clock was added on top around 1900.',
      },
      {
        el: 'Η πλατεία γύρω του λέγεται «Πλατεία του Κάστρου».',
        en: 'The square around it is called "Castle Square".',
      },
    ],
    location: {
      lat: 36.887,
      lng: 30.7059,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q6060345', deltaM: 0 },
        { kind: 'osm', ref: 'way/431455145', deltaM: 19 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.457, y: 0.160 },
    },
    question: {
      q: { el: 'Τι ήταν ο πύργος πριν πάρει ρολόι;', en: 'What was the tower before it got a clock?' },
      answers: [
        { el: 'Πύργος του τείχους της πόλης', en: 'A tower of the city wall' },
        { el: 'Φάρος', en: 'A lighthouse' },
        { el: 'Μιναρές', en: 'A minaret' },
        {
          el: 'Ένα σπίτι που ανήκε στον πιο πλούσιο έμπορο της πόλης',
          en: 'A house belonging to the richest merchant in the city',
        },
      ],
      explanation: {
        el: 'Το ρολόι ήρθε γύρω στο 1900. Ο πύργος φύλαγε την πόλη αιώνες πριν.',
        en: 'The clock came around 1900. The tower had guarded the city for centuries before.',
      },
    },
  },

  // --------------------------------------------------------------- yivli minare
  {
    id: 'antalya-yivli-minare',
    cityId: 'antalya',
    emoji: '🕌',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Ο Αυλακωτός Μιναρές', en: 'The Fluted Minaret' },
    tagline: {
      el: 'Το σύμβολο της πόλης: ένας μιναρές με οκτώ αυλακιές',
      en: 'The city’s symbol: a minaret with eight grooves',
    },
    story: {
      el:
        'Ο μιναρές είναι ο ψηλός πύργος δίπλα σε ένα τζαμί, από όπου καλούνται οι πιστοί σε ' +
        'προσευχή. Αυτός εδώ είναι το σύμβολο της Αττάλειας, και το βλέπεις σε πινακίδες, ' +
        'σημαίες και σουβενίρ. Χτίστηκε στις αρχές του 13ου αιώνα από τους Σελτζούκους, έναν ' +
        'τουρκικό λαό που κυβέρνησε την περιοχή πριν από τους Οθωμανούς. Είναι τριάντα οκτώ ' +
        'μέτρα ψηλός, από κόκκινα τούβλα, και το σχήμα του είναι ασυνήθιστο: δεν είναι ' +
        'στρογγυλός αλλά αυλακωτός, με οκτώ μισές κολόνες κολλημένες γύρω γύρω, σαν ένα ' +
        'δεμάτι από καλάμια. Από αυτό πήρε το όνομά του, «γιβλί», που σημαίνει «με ' +
        'αυλάκια». Κάποτε ήταν σκεπασμένος με γαλάζια πλακάκια, από τα οποία σώζονται λίγα. ' +
        'Μέσα του μια σκάλα με ενενήντα σκαλοπάτια ανεβαίνει ως το μπαλκόνι. Γύρω του ' +
        'υπάρχει ένα παλιό τζαμί με έξι τρούλους, τάφοι Σελτζούκων πριγκίπων και ένα κτίριο ' +
        'όπου ζούσαν δερβίσηδες, μοναχοί που προσεύχονταν χορεύοντας σε κύκλο.',
      en:
        'A minaret is the tall tower beside a mosque, from which people are called to prayer. ' +
        'This one is the symbol of Antalya, and you see it on signs, flags and souvenirs. It ' +
        'was built in the early 13th century by the Seljuks, a Turkish people who ruled the ' +
        'region before the Ottomans. It is thirty-eight metres tall, made of red brick, and its ' +
        'shape is unusual: it is not round but fluted, with eight half-columns set all around ' +
        'it, like a bundle of reeds. That is where its name comes from, "yivli", which means ' +
        '"grooved". It was once covered in blue tiles, of which a few survive. Inside, a ' +
        'staircase of ninety steps climbs to the balcony. Around it are an old mosque with six ' +
        'domes, tombs of Seljuk princes and a building where dervishes lived, monks who prayed ' +
        'by turning in a circle.',
    },
    facts: [
      {
        el: 'Χτίστηκε στις αρχές του 13ου αιώνα από τους Σελτζούκους.',
        en: 'It was built in the early 13th century by the Seljuks.',
      },
      {
        el: 'Είναι 38 μέτρα ψηλός και έχει οκτώ αυλακιές.',
        en: 'It is 38 metres tall and has eight grooves.',
      },
      {
        el: '«Γιβλί» σημαίνει «με αυλάκια».',
        en: '"Yivli" means "grooved".',
      },
    ],
    location: {
      lat: 36.88639,
      lng: 30.70444,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1753844', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Yivli Minaret Mosque', deltaM: 0 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.448, y: 0.172 },
    },
    question: {
      q: { el: 'Τι σημαίνει το όνομα «γιβλί»;', en: 'What does the name "yivli" mean?' },
      answers: [
        { el: 'Με αυλάκια, σαν καλάμια', en: 'Grooved, like reeds' },
        { el: 'Ψηλός', en: 'Tall' },
        { el: 'Κόκκινος', en: 'Red' },
        {
          el: 'Ο πύργος που φαίνεται πρώτος από τη θάλασσα',
          en: 'The tower that is seen first from the sea',
        },
      ],
      explanation: {
        el: 'Οκτώ μισές κολόνες γύρω γύρω, σαν δεμάτι από καλάμια, του δίνουν το σχήμα και το όνομα.',
        en: 'Eight half-columns all round, like a bundle of reeds, give it its shape and its name.',
      },
    },
  },

  // -------------------------------------------------------------- kesik minare
  {
    id: 'antalya-kesik-minare',
    cityId: 'antalya',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο Κομμένος Μιναρές', en: 'The Broken Minaret' },
    tagline: {
      el: 'Ναός, εκκλησία, τζαμί: ένα κτίριο που άλλαξε τρεις φορές',
      en: 'Temple, church, mosque: one building that changed three times',
    },
    story: {
      el:
        'Στη μέση της παλιάς πόλης υπάρχει ένα κτίριο που λέει σχεδόν όλη την ιστορία της ' +
        'Αττάλειας. Στα ρωμαϊκά χρόνια εδώ στεκόταν ένας ναός για τους αρχαίους θεούς. Τον 5ο ' +
        'αιώνα, όταν οι κάτοικοι έγιναν χριστιανοί, στη θέση του χτίστηκε μια μεγάλη ' +
        'εκκλησία, με μαρμάρινες κολόνες και σκαλιστές πόρτες. Όταν η πόλη πέρασε στους ' +
        'Σελτζούκους, η εκκλησία έγινε τζαμί, και δίπλα της χτίστηκε ένας μιναρές. Για λίγο ' +
        'έγινε ξανά εκκλησία, και μετά ξανά τζαμί. Τον 19ο αιώνα μια μεγάλη φωτιά έκαψε τη ' +
        'στέγη και το πάνω μέρος του μιναρέ. Από τότε ο μιναρές στέκεται κομμένος, σαν ' +
        'ένα σπασμένο μολύβι, και το κτίριο πήρε το όνομά του από αυτόν. Για πάνω από εκατό ' +
        'χρόνια ήταν ερείπιο χωρίς στέγη, με τον ουρανό από πάνω. Πρόσφατα επισκευάστηκε και ' +
        'άνοιξε ξανά. Αν κοιτάξεις τους τοίχους του, θα βρεις πέτρες και κολόνες από όλες τις ' +
        'εποχές του, τη μία δίπλα στην άλλη.',
      en:
        'In the middle of the old town there is a building that tells almost the whole story of ' +
        'Antalya. In Roman times a temple to the ancient gods stood here. In the 5th century, ' +
        'when the people became Christians, a big church was built in its place, with marble ' +
        'columns and carved doorways. When the city passed to the Seljuks, the church became a ' +
        'mosque, and a minaret was built beside it. For a while it became a church again, and ' +
        'then a mosque again. In the 19th century a great fire burned the roof and the top of ' +
        'the minaret. Since then the minaret has stood cut short, like a broken pencil, and the ' +
        'building took its name from it. For more than a hundred years it was a ruin without a ' +
        'roof, open to the sky. Recently it was repaired and reopened. If you look at its ' +
        'walls, you will find stones and columns from all of its ages, side by side.',
    },
    facts: [
      {
        el: 'Ήταν ρωμαϊκός ναός, μετά εκκλησία και μετά τζαμί.',
        en: 'It was a Roman temple, then a church, then a mosque.',
      },
      {
        el: 'Ο μιναρές κόπηκε από μια φωτιά τον 19ο αιώνα.',
        en: 'The minaret was cut short by a fire in the 19th century.',
      },
      {
        el: 'Για πάνω από εκατό χρόνια δεν είχε στέγη.',
        en: 'For more than a hundred years it had no roof.',
      },
    ],
    location: {
      lat: 36.88258,
      lng: 30.70606,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q6395079', deltaM: 0 }],
      verifiedAt: '2026-09-19',
      note: 'Grade C: Wikidata alone; no English Wikipedia coordinate matched and Overpass answered 504.',
      map: { x: 0.458, y: 0.248 },
    },
    question: {
      q: { el: 'Γιατί ο μιναρές είναι «κομμένος»;', en: 'Why is the minaret "broken"?' },
      answers: [
        { el: 'Μια φωτιά έκαψε το πάνω μέρος του', en: 'A fire burned its upper part' },
        { el: 'Σεισμός', en: 'An earthquake' },
        { el: 'Δεν τελείωσε ποτέ', en: 'It was never finished' },
        {
          el: 'Τον έκοψαν επίτηδες για να μην είναι ψηλότερος από τον Αυλακωτό Μιναρέ',
          en: 'It was cut down on purpose so it would not be taller than the Fluted Minaret',
        },
      ],
      explanation: {
        el: 'Τον 19ο αιώνα. Από τότε στέκεται σαν σπασμένο μολύβι, και έδωσε το όνομα στο κτίριο.',
        en: 'In the 19th century. It has stood like a broken pencil since, and named the building.',
      },
    },
  },

  // -------------------------------------------------------------------- hidirlik
  {
    id: 'antalya-hidirlik',
    cityId: 'antalya',
    emoji: '🗼',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο Πύργος Χιντιρλίκ', en: 'Hıdırlık Tower' },
    tagline: {
      el: 'Ένας στρογγυλός ρωμαϊκός πύργος που κανείς δεν ξέρει τι ήταν',
      en: 'A round Roman tower that nobody knows the purpose of',
    },
    story: {
      el:
        'Στην άκρη της παλιάς πόλης, εκεί που τα βράχια πέφτουν στη θάλασσα, στέκεται ένας ' +
        'πέτρινος πύργος δεκατεσσάρων μέτρων: τετράγωνος στη βάση και στρογγυλός από πάνω. ' +
        'Τον έχτισαν οι Ρωμαίοι τον 2ο αιώνα, την ίδια εποχή με την Πύλη του Αδριανού. Το ' +
        'παράξενο είναι ότι κανείς δεν ξέρει σίγουρα σε τι χρησίμευε. Μερικοί λένε ότι ήταν ' +
        'φάρος, που με φωτιά στην κορυφή οδηγούσε τα πλοία στο λιμάνι. Άλλοι λένε ότι ήταν ' +
        'φρούριο για να φυλάει το λιμάνι, γιατί έχει πολύ χοντρούς τοίχους. Άλλοι πάλι ' +
        'πιστεύουν ότι ήταν ο τάφος ενός σημαντικού Ρωμαίου, γιατί έχει το σχήμα που είχαν ' +
        'τότε οι μεγάλοι τάφοι, και μέσα υπάρχει ένα δωμάτιο με ένα πέτρινο τραπέζι. Ίσως να ' +
        'ήταν πρώτα τάφος και μετά φάρος. Είναι ένα μυστήριο που μπορείς να το σκεφτείς κι ' +
        'εσύ. Το σίγουρο είναι ότι από εδώ έχεις μια από τις καλύτερες θέες της πόλης: τα ' +
        'βράχια, τη θάλασσα και τα βουνά απέναντι, ειδικά όταν δύει ο ήλιος.',
      en:
        'At the edge of the old town, where the cliffs drop into the sea, stands a stone tower ' +
        'fourteen metres tall: square at the base and round on top. The Romans built it in the ' +
        '2nd century, at the same time as Hadrian’s Gate. The strange thing is that nobody knows ' +
        'for certain what it was for. Some say it was a lighthouse, guiding ships into the ' +
        'harbour with a fire on top. Others say it was a fort to guard the harbour, because it ' +
        'has very thick walls. Others again believe it was the tomb of an important Roman, ' +
        'because it has the shape that big tombs had then, and inside there is a room with a ' +
        'stone table. Perhaps it was a tomb first and a lighthouse later. It is a mystery you ' +
        'can think about too. What is certain is that from here you have one of the best views ' +
        'in the city: the cliffs, the sea and the mountains across the bay, especially at ' +
        'sunset.',
    },
    facts: [
      {
        el: 'Χτίστηκε από τους Ρωμαίους τον 2ο αιώνα.',
        en: 'It was built by the Romans in the 2nd century.',
      },
      {
        el: 'Είναι τετράγωνος στη βάση και στρογγυλός από πάνω.',
        en: 'It is square at the base and round on top.',
      },
      {
        el: 'Κανείς δεν ξέρει σίγουρα αν ήταν φάρος, φρούριο ή τάφος.',
        en: 'Nobody knows for sure whether it was a lighthouse, a fort or a tomb.',
      },
    ],
    location: {
      lat: 36.88139,
      lng: 30.70361,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q218118', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Hidirlik Tower', deltaM: 0 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.443, y: 0.272 },
    },
    question: {
      q: { el: 'Τι ξέρουμε σίγουρα για τη χρήση αυτού του πύργου;', en: 'What do we know for sure about this tower’s purpose?' },
      answers: [
        { el: 'Τίποτα σίγουρο, είναι μυστήριο', en: 'Nothing for sure, it is a mystery' },
        { el: 'Ήταν φάρος', en: 'It was a lighthouse' },
        { el: 'Ήταν ένας τάφος', en: 'It was a tomb' },
        {
          el: 'Ήταν ο πύργος από όπου ο Αδριανός κοίταζε την πόλη του',
          en: 'It was the tower from which Hadrian looked out over his city',
        },
      ],
      explanation: {
        el: 'Φάρος, φρούριο ή τάφος: οι ειδικοί διαφωνούν, και ίσως ήταν περισσότερα από ένα.',
        en: 'Lighthouse, fort or tomb: experts disagree, and perhaps it was more than one.',
      },
    },
  },

  // ---------------------------------------------------------------- karaalioglu
  {
    id: 'antalya-karaalioglu',
    cityId: 'antalya',
    emoji: '🌴',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Πάρκο Καραλίογλου', en: 'Karaalioğlu Park' },
    tagline: {
      el: 'Ένα πάρκο στην άκρη των βράχων, με θέα βουνά και θάλασσα',
      en: 'A park on the cliff edge, facing mountains and sea',
    },
    story: {
      el:
        'Δίπλα στον ρωμαϊκό πύργο, κατά μήκος των βράχων, απλώνεται το μεγάλο πάρκο της ' +
        'Αττάλειας. Έχει φοίνικες ψηλούς σαν πολυκατοικίες, πεύκα, ευκάλυπτους, ' +
        'παρτέρια με λουλούδια που αλλάζουν κάθε εποχή, σιντριβάνια και μια παιδική χαρά. Το ' +
        'πιο ωραίο του σημείο είναι η άκρη: ένα πέτρινο στηθαίο πάνω από τον γκρεμό, με τη ' +
        'θάλασσα τριάντα μέτρα από κάτω. Απέναντι, πίσω από τον κόλπο, υψώνονται τα βουνά ' +
        'του Ταύρου, που τον χειμώνα έχουν χιόνι στις κορυφές ενώ εδώ κάτω κάνει ζέστη. Είναι ' +
        'από τα λίγα μέρη όπου μπορείς να κάνεις μπάνιο στη θάλασσα το πρωί και σκι το ' +
        'απόγευμα. Στο πάρκο υπάρχουν αγάλματα και ένα μεγάλο μνημείο του Ατατούρκ, του ' +
        'ιδρυτή της σύγχρονης Τουρκίας, πάνω σε άλογο. Το βράδυ οι οικογένειες της πόλης ' +
        'έρχονται εδώ για βόλτα, με παγωτό, και οι γάτες του πάρκου, που είναι πολλές, ' +
        'κοιμούνται στα παγκάκια.',
      en:
        'Beside the Roman tower, along the cliffs, stretches Antalya’s big park. It has palm ' +
        'trees as tall as apartment blocks, pines, eucalyptus, flower beds that change every ' +
        'season, fountains and a playground. Its best spot is the edge: a stone parapet above ' +
        'the cliff, with the sea thirty metres below. Across the bay rise the Taurus ' +
        'Mountains, which have snow on their peaks in winter while it is warm down here. It is ' +
        'one of the few places where you can swim in the sea in the morning and ski in the ' +
        'afternoon. In the park there are statues and a large monument to Atatürk, the founder ' +
        'of modern Turkey, on horseback. In the evening the city’s families come here to ' +
        'stroll, with ice cream, and the park’s cats, of which there are many, sleep on the ' +
        'benches.',
    },
    facts: [
      {
        el: 'Στέκεται πάνω σε βράχια τριάντα μέτρα πάνω από τη θάλασσα.',
        en: 'It stands on cliffs thirty metres above the sea.',
      },
      {
        el: 'Απέναντι φαίνονται τα βουνά του Ταύρου, χιονισμένα τον χειμώνα.',
        en: 'Across the bay you can see the Taurus Mountains, snowy in winter.',
      },
      {
        el: 'Έχει ένα μεγάλο μνημείο του Ατατούρκ πάνω σε άλογο.',
        en: 'It has a large monument to Atatürk on horseback.',
      },
    ],
    location: {
      lat: 36.88067,
      lng: 30.70397,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q6367585', deltaM: 0 },
        { kind: 'osm', ref: 'way/110321827', deltaM: 219 },
      ],
      verifiedAt: '2026-09-19',
      note: 'Grade C: OpenStreetMap\'s park outline centres 219 m away inside the same park; Wikidata\'s point is at the cliff-top end where visitors stand.',
      map: { x: 0.445, y: 0.287 },
    },
    question: {
      q: { el: 'Τι βλέπεις απέναντι από την άκρη του πάρκου;', en: 'What do you see across the bay from the park’s edge?' },
      answers: [
        { el: 'Βουνά με χιόνι τον χειμώνα', en: 'Mountains with snow in winter' },
        { el: 'Ένα νησί', en: 'An island' },
        { el: 'Μια άλλη πόλη', en: 'Another city' },
        {
          el: 'Ένα τεράστιο λιμάνι με πλοία που φορτώνουν πορτοκάλια για όλη την Ευρώπη',
          en: 'A huge port with ships loading oranges for the whole of Europe',
        },
      ],
      explanation: {
        el: 'Ο Ταύρος. Μπορείς να κάνεις μπάνιο το πρωί και σκι το απόγευμα.',
        en: 'The Taurus. You can swim in the morning and ski in the afternoon.',
      },
    },
  },

  // -------------------------------------------------------------------- harbour
  {
    id: 'antalya-harbour',
    cityId: 'antalya',
    emoji: '⛵',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το παλιό λιμάνι', en: 'The old harbour' },
    tagline: {
      el: 'Ένα μικρό λιμάνι κρυμμένο ανάμεσα σε βράχια',
      en: 'A little harbour hidden between cliffs',
    },
    story: {
      el:
        'Η Αττάλεια ιδρύθηκε πριν από δύο χιλιάδες διακόσια χρόνια από έναν Έλληνα βασιλιά, ' +
        'τον Άτταλο της Περγάμου, που έψαχνε το καλύτερο λιμάνι της ακτής. Το βρήκε εδώ: ένα ' +
        'φυσικό κοίλωμα στα βράχια, προστατευμένο από τους ανέμους, και του έδωσε το όνομά ' +
        'του. Για δύο χιλιάδες χρόνια αυτό το μικρό λιμάνι ήταν η καρδιά της πόλης. Από εδώ ' +
        'έφευγαν πλοία με ξύλο, σιτάρι και αργότερα πορτοκάλια, και εδώ έφταναν έμποροι, ' +
        'στρατιώτες και προσκυνητές. Ο Απόστολος Παύλος πέρασε από εδώ σε ένα από τα ταξίδια ' +
        'του. Σήμερα το λιμάνι είναι για μικρά καράβια: ψαρόβαρκες, ιστιοπλοϊκά και ξύλινες ' +
        'βάρκες που παίρνουν επισκέπτες για βόλτα κατά μήκος των βράχων, ως τον καταρράκτη ' +
        'που πέφτει στη θάλασσα. Γύρω από το λιμάνι υπάρχουν καφέ, και από πάνω κρέμονται οι ' +
        'παλιοί τοίχοι και τα σπίτια της παλιάς πόλης. Για να ανέβεις στην πόλη, παίρνεις ' +
        'σκαλιά ή έναν γυάλινο ανελκυστήρα μέσα στον βράχο.',
      en:
        'Antalya was founded two thousand two hundred years ago by a Greek king, Attalus of ' +
        'Pergamon, who was looking for the best harbour on the coast. He found it here: a ' +
        'natural hollow in the cliffs, sheltered from the winds, and he gave it his name. For ' +
        'two thousand years this little harbour was the heart of the city. Ships left from ' +
        'here with timber, grain and later oranges, and merchants, soldiers and pilgrims ' +
        'arrived. The Apostle Paul passed through here on one of his journeys. Today the ' +
        'harbour is for small craft: fishing boats, yachts and wooden boats that take visitors ' +
        'along the cliffs to the waterfall that drops into the sea. Around the harbour are ' +
        'cafés, and above it hang the old walls and the houses of the old town. To climb up ' +
        'into the town, you take steps or a glass lift set into the rock.',
    },
    facts: [
      {
        el: 'Η πόλη ιδρύθηκε από τον βασιλιά Άτταλο, που της έδωσε το όνομά του.',
        en: 'The city was founded by King Attalus, who gave it his name.',
      },
      {
        el: 'Ο Απόστολος Παύλος πέρασε από αυτό το λιμάνι.',
        en: 'The Apostle Paul passed through this harbour.',
      },
      {
        el: 'Ένας γυάλινος ανελκυστήρας ανεβαίνει από το λιμάνι στην πόλη.',
        en: 'A glass lift climbs from the harbour up to the town.',
      },
    ],
    location: {
      lat: 36.88437,
      lng: 30.70215,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q116369972', deltaM: 0 },
        { kind: 'osm', ref: 'node/1420290795', deltaM: 1 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.433, y: 0.213 },
    },
    question: {
      q: { el: 'Γιατί ο βασιλιάς Άτταλος διάλεξε αυτό το σημείο;', en: 'Why did King Attalus choose this spot?' },
      answers: [
        { el: 'Ήταν λιμάνι προστατευμένο από ανέμους', en: 'It was a harbour sheltered from the winds' },
        { el: 'Για τα πορτοκάλια', en: 'For the oranges' },
        { el: 'Γιατί είχε χρυσάφι', en: 'Because it had gold' },
        {
          el: 'Γιατί ένας χρησμός του είπε να χτίσει πόλη εκεί που θα έβλεπε βουνά με χιόνι',
          en: 'Because an oracle told him to build a city where he saw snowy mountains',
        },
      ],
      explanation: {
        el: 'Ένα φυσικό κοίλωμα στα βράχια. Έψαχνε το καλύτερο λιμάνι της ακτής.',
        en: 'A natural hollow in the cliffs. He was looking for the best harbour on the coast.',
      },
    },
  },

  // ----------------------------------------------------------------- toy museum
  {
    id: 'antalya-toy-museum',
    cityId: 'antalya',
    emoji: '🧸',
    category: 'art',
    difficulty: 1,

    name: { el: 'Μουσείο Παιχνιδιών', en: 'The Toy Museum' },
    tagline: {
      el: 'Παιχνίδια από όλο τον κόσμο, σε ένα σπίτι δίπλα στο λιμάνι',
      en: 'Toys from all over the world, in a house by the harbour',
    },
    story: {
      el:
        'Δίπλα στο παλιό λιμάνι, σε ένα παλιό πέτρινο σπίτι, υπάρχει ένα μουσείο μόνο για ' +
        'παιχνίδια. Άνοιξε το 2011 και έχει πάνω από τρεις χιλιάδες κομμάτια, από τα ' +
        'τελευταία διακόσια χρόνια και από πολλές χώρες. Υπάρχουν κούκλες από πορσελάνη με ' +
        'γυάλινα μάτια, τενεκεδένια αυτοκίνητα και τρένα που κουρδίζονται, αρκουδάκια, ' +
        'στρατιωτάκια, ξύλινα άλογα, κουκλόσπιτα με μικροσκοπικά έπιπλα, και παιχνίδια από τη ' +
        'δεκαετία του 1980 που ίσως τα ξέρουν οι γονείς σου. Υπάρχει και μια γωνιά με παλιά ' +
        'τουρκικά παιχνίδια, φτιαγμένα στο χέρι από ξύλο και πανί, και μια αίθουσα όπου τα ' +
        'παιδιά μπορούν να παίξουν και να φτιάξουν το δικό τους παιχνίδι. Το μουσείο θέλει να ' +
        'δείξει κάτι απλό: ότι τα παιδιά σε κάθε χώρα και κάθε εποχή παίζουν τα ίδια ' +
        'πράγματα, με άλλα υλικά. Ψάξε το πιο παλιό παιχνίδι που θα βρεις, και σκέψου ποιο ' +
        'παιδί το κρατούσε.',
      en:
        'Beside the old harbour, in an old stone house, there is a museum just for toys. It ' +
        'opened in 2011 and has more than three thousand pieces, from the last two hundred ' +
        'years and from many countries. There are porcelain dolls with glass eyes, tin cars ' +
        'and trains that wind up, teddy bears, toy soldiers, wooden horses, dolls’ houses ' +
        'with tiny furniture, and toys from the 1980s that your parents might know. There is ' +
        'also a corner of old Turkish toys, made by hand from wood and cloth, and a room where ' +
        'children can play and make a toy of their own. The museum wants to show something ' +
        'simple: that children in every country and every age play the same things, with ' +
        'different materials. Look for the oldest toy you can find, and think about which ' +
        'child once held it.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2011 σε ένα παλιό πέτρινο σπίτι δίπλα στο λιμάνι.',
        en: 'It opened in 2011 in an old stone house by the harbour.',
      },
      {
        el: 'Έχει πάνω από τρεις χιλιάδες παιχνίδια από πολλές χώρες.',
        en: 'It has more than three thousand toys from many countries.',
      },
      {
        el: 'Υπάρχει αίθουσα όπου τα παιδιά φτιάχνουν το δικό τους παιχνίδι.',
        en: 'There is a room where children make a toy of their own.',
      },
    ],
    location: {
      lat: 36.88549,
      lng: 30.7022,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q6055656', deltaM: 0 },
        { kind: 'osm', ref: 'node/2880832121', deltaM: 27 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.434, y: 0.190 },
    },
    question: {
      q: { el: 'Τι θέλει να δείξει αυτό το μουσείο;', en: 'What does this museum want to show?' },
      answers: [
        { el: 'Ότι τα παιδιά παντού παίζουν τα ίδια', en: 'That children everywhere play the same' },
        { el: 'Τιμές', en: 'Prices' },
        { el: 'Πώς φτιάχνεται ένα ρομπότ', en: 'How to build a robot' },
        {
          el: 'Ότι τα παλιά παιχνίδια ήταν πολύ καλύτερα από τα σημερινά',
          en: 'That old toys were much better than the ones children have today',
        },
      ],
      explanation: {
        el: 'Κούκλες, αυτοκίνητα, αρκουδάκια, σε κάθε χώρα και εποχή, με άλλα υλικά.',
        en: 'Dolls, cars, teddy bears, in every country and age, with different materials.',
      },
    },
  },

  // --------------------------------------------------------------------- museum
  {
    id: 'antalya-museum',
    cityId: 'antalya',
    emoji: '🏺',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Το Μουσείο της Αττάλειας', en: 'The Antalya Museum' },
    tagline: {
      el: 'Θεοί και ήρωες από μια αρχαία πόλη, με ολόκληρα αγάλματα',
      en: 'Gods and heroes from an ancient city, in whole statues',
    },
    story: {
      el:
        'Λίγα χιλιόμετρα από την Αττάλεια υπήρχε στα ρωμαϊκά χρόνια μια πλούσια πόλη, η ' +
        'Πέργη, με μεγάλους δρόμους, λουτρά, στάδιο και θέατρο. Όταν οι αρχαιολόγοι άρχισαν να ' +
        'τη σκάβουν, βρήκαν κάτι σπάνιο: δεκάδες μαρμάρινα αγάλματα σχεδόν ολόκληρα, όχι ' +
        'σπασμένα κομμάτια. Θεοί, θεές, αυτοκράτορες, χορεύτριες, ένας Ηρακλής που ακουμπάει ' +
        'κουρασμένος στο ρόπαλό του. Όλα αυτά βρίσκονται εδώ, σε ένα μουσείο που άνοιξε το ' +
        '1972 και είναι από τα μεγαλύτερα της Τουρκίας. Υπάρχουν αίθουσες με αντικείμενα από ' +
        'σπηλιές όπου ζούσαν άνθρωποι πριν από πενήντα χιλιάδες χρόνια, μαρμάρινες σαρκοφάγοι ' +
        'σκαλισμένες με σκηνές από μύθους, νομίσματα, κοσμήματα, και μια αίθουσα για παιδιά ' +
        'όπου μπορείς να ανακαλύψεις πώς δουλεύουν οι αρχαιολόγοι. Στον κήπο υπάρχουν ' +
        'κολόνες, αγάλματα και γάτες που κοιμούνται πάνω στα αρχαία μάρμαρα. Το μουσείο ' +
        'βρίσκεται στην άκρη της πόλης, δίπλα στη μεγάλη παραλία, και φτάνεις με το παλιό ' +
        'τραμ.',
      en:
        'A few kilometres from Antalya there was, in Roman times, a rich city, Perge, with wide ' +
        'streets, baths, a stadium and a theatre. When archaeologists began to dig it, they ' +
        'found something rare: dozens of marble statues almost whole, not broken fragments. ' +
        'Gods, goddesses, emperors, dancers, a Hercules leaning wearily on his club. All of ' +
        'them are here, in a museum that opened in 1972 and is one of the largest in Turkey. ' +
        'There are rooms with objects from caves where people lived fifty thousand years ago, ' +
        'marble sarcophagi carved with scenes from myths, coins, jewellery, and a children’s ' +
        'room where you can discover how archaeologists work. In the garden there are columns, ' +
        'statues and cats sleeping on the ancient marble. The museum is at the edge of the ' +
        'city, next to the big beach, and you reach it by the old tram.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1972 και είναι από τα μεγαλύτερα μουσεία της Τουρκίας.',
        en: 'It opened in 1972 and is one of the largest museums in Turkey.',
      },
      {
        el: 'Τα περισσότερα αγάλματά του ήρθαν από την αρχαία Πέργη.',
        en: 'Most of its statues came from ancient Perge.',
      },
      {
        el: 'Έχει αίθουσα για παιδιά για το πώς δουλεύουν οι αρχαιολόγοι.',
        en: 'It has a children’s room about how archaeologists work.',
      },
    ],
    location: {
      lat: 36.8856,
      lng: 30.6797,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q843241', deltaM: 0 }],
      verifiedAt: '2026-09-19',
      note: 'Grade C: Wikidata alone; Overpass answered 429 and no Wikipedia coordinate matched.',
      map: { x: 0.288, y: 0.188 },
    },
    question: {
      q: { el: 'Τι σπάνιο βρήκαν οι αρχαιολόγοι στην Πέργη;', en: 'What rare thing did archaeologists find at Perge?' },
      answers: [
        { el: 'Αγάλματα σχεδόν ολόκληρα', en: 'Statues almost whole' },
        { el: 'Χρυσάφι', en: 'Gold' },
        { el: 'Έναν δεινόσαυρο', en: 'A dinosaur skeleton' },
        {
          el: 'Ένα ολόκληρο πλοίο θαμμένο κάτω από το θέατρο της πόλης',
          en: 'A whole ship buried underneath the theatre of the city',
        },
      ],
      explanation: {
        el: 'Συνήθως βρίσκονται κομμάτια. Εδώ βρέθηκαν δεκάδες θεοί και ήρωες σχεδόν ακέραιοι.',
        en: 'Usually fragments turn up. Here dozens of gods and heroes were found almost intact.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ψάξε πρώτα τον Ηρακλή. Είναι κουρασμένος, και έχει μια ιστορία για το πώς γύρισε σπίτι.',
        en: 'Look for Hercules first. He is tired, and he has a story about how he came home.',
      },
      rooms: [
        {
          id: 'antalya-museum-gods',
          emoji: '🗿',
          name: { el: 'Η αίθουσα των θεών', en: 'The hall of the gods' },
          intro: {
            el:
              'Μια μεγάλη φωτεινή αίθουσα με μαρμάρινα αγάλματα σε κύκλο, όλα από την Πέργη. ' +
              'Στέκονται ψηλότερα από εσένα, και οι περισσότεροι είναι θεοί των αρχαίων ' +
              'Ελλήνων και Ρωμαίων. Κοίτα τα χέρια και τα πρόσωπα: κάθε θεός κρατάει κάτι που ' +
              'τον φανερώνει.',
            en:
              'A big, bright hall with marble statues in a circle, all from Perge. They stand ' +
              'taller than you, and most are gods of the ancient Greeks and Romans. Look at ' +
              'the hands and faces: each god holds something that gives away who he is.',
          },
          exhibits: [
            {
              id: 'antalya-museum-hercules',
              name: { el: 'Ο κουρασμένος Ηρακλής', en: 'The weary Hercules' },
              blurb: {
                el:
                  'Ένας γεροδεμένος άντρας με γένια ακουμπάει στο ρόπαλό του, κουρασμένος μετά ' +
                  'από τους δώδεκα άθλους του. Το άγαλμα έχει μια δική του περιπέτεια. Όταν ' +
                  'βρέθηκε στην Πέργη το 1980, το πάνω μισό του έλειπε: είχε κλαπεί και πουληθεί ' +
                  'κρυφά σε ένα μουσείο της Αμερικής. Για τριάντα χρόνια ο Ηρακλής ήταν ' +
                  'χωρισμένος στα δύο, με τα πόδια του εδώ και τον κορμό του πέρα από τον ' +
                  'ωκεανό. Το 2011 το αμερικανικό μουσείο τον επέστρεψε, και τα δύο μισά ' +
                  'ενώθηκαν ξανά.',
                en:
                  'A sturdy bearded man leans on his club, tired after his twelve labours. The ' +
                  'statue has an adventure of its own. When it was found at Perge in 1980, its ' +
                  'upper half was missing: it had been stolen and secretly sold to a museum in ' +
                  'America. For thirty years Hercules was split in two, with his legs here and ' +
                  'his torso across the ocean. In 2011 the American museum sent him back, and ' +
                  'the two halves were joined again.',
              },
              question: {
                q: { el: 'Πού ήταν το πάνω μισό του Ηρακλή για τριάντα χρόνια;', en: 'Where was Hercules’s upper half for thirty years?' },
                answers: [
                  { el: 'Σε ένα μουσείο της Αμερικής', en: 'In a museum in America' },
                  { el: 'Θαμμένο', en: 'Buried' },
                  { el: 'Στη θάλασσα', en: 'In the sea' },
                  {
                    el: 'Σε ένα σπίτι της Πέργης, όπου το χρησιμοποιούσαν ως τραπέζι',
                    en: 'In a house at Perge, where it was being used as a table',
                  },
                ],
                explanation: {
                  el: 'Είχε κλαπεί και πουληθεί. Το 2011 επέστρεψε, και τα δύο μισά ενώθηκαν.',
                  en: 'It had been stolen and sold. In 2011 it came back, and the halves were joined.',
                },
              },
            },
            {
              id: 'antalya-museum-dancer',
              name: { el: 'Η χορεύτρια', en: 'The dancer' },
              blurb: {
                el:
                  'Μια γυναίκα σε κίνηση, με το φόρεμά της να στροβιλίζεται γύρω της σαν να την ' +
                  'έπιασε ο αέρας. Είναι φτιαγμένη από δύο χρώματα μαρμάρου: το σώμα και το ' +
                  'πρόσωπο από άσπρο, το φόρεμα από σκούρο γκρίζο, ώστε το ύφασμα να ξεχωρίζει. ' +
                  'Οι γλύπτες της Πέργης ήταν διάσημοι για το πώς σκάλιζαν το ύφασμα: κοίτα τις ' +
                  'πτυχές, που μοιάζουν ελαφριές σαν μετάξι, παρόλο που είναι πέτρα. Δεν ξέρουμε ' +
                  'αν είναι θεά ή απλή χορεύτρια. Το άγαλμα βρέθηκε το 1972, την ίδια χρονιά ' +
                  'που άνοιξε το μουσείο.',
                en:
                  'A woman in motion, her dress swirling around her as if caught by the wind. ' +
                  'She is made of two colours of marble: the body and face in white, the dress ' +
                  'in dark grey, so that the cloth stands out. The sculptors of Perge were famous ' +
                  'for how they carved cloth: look at the folds, which seem as light as silk ' +
                  'though they are stone. We do not know whether she is a goddess or simply a ' +
                  'dancer. The statue was found in 1972, the same year the museum opened.',
              },
              question: {
                q: { el: 'Γιατί η χορεύτρια είναι από δύο χρώματα μαρμάρου;', en: 'Why is the dancer made of two colours of marble?' },
                answers: [
                  { el: 'Για να ξεχωρίζει το φόρεμα', en: 'So the dress stands out' },
                  { el: 'Έσπασε', en: 'It broke' },
                  { el: 'Τελείωσε το άσπρο', en: 'They ran out of white' },
                  {
                    el: 'Γιατί δύο διαφορετικοί γλύπτες δούλεψαν σε αυτήν χωρίς να συνεννοηθούν',
                    en: 'Because two different sculptors worked on it without talking to each other',
                  },
                ],
                explanation: {
                  el: 'Άσπρο για το σώμα, σκούρο για το ύφασμα. Οι γλύπτες της Πέργης αγαπούσαν τις πτυχές.',
                  en: 'White for the body, dark for the cloth. Perge’s sculptors loved folds.',
                },
              },
            },
            {
              id: 'antalya-museum-emperor',
              name: { el: 'Ο αυτοκράτορας με την πανοπλία', en: 'The emperor in armour' },
              blurb: {
                el:
                  'Ένας άντρας με σκαλιστή πανοπλία στέκεται με το ένα χέρι σηκωμένο, σαν να ' +
                  'μιλάει σε στρατιώτες. Είναι ο Ρωμαίος αυτοκράτορας Αδριανός, ο ίδιος για τον ' +
                  'οποίο χτίστηκε η πύλη στην πόλη. Πάνω στην πανοπλία του είναι σκαλισμένα ' +
                  'μικρά πρόσωπα και φτερωτές μορφές. Κάθε πόλη της αυτοκρατορίας είχε αγάλματα ' +
                  'του αυτοκράτορα, για να θυμίζουν σε όλους ποιος κυβερνάει, όπως σήμερα οι ' +
                  'φωτογραφίες. Ο Αδριανός ήταν ο πρώτος αυτοκράτορας με γένια, και από τότε τα ' +
                  'γένια έγιναν μόδα σε όλη τη Ρώμη.',
                en:
                  'A man in carved armour stands with one arm raised, as if speaking to soldiers. ' +
                  'He is the Roman emperor Hadrian, the same one the gate in the city was built ' +
                  'for. Small faces and winged figures are carved on his armour. Every city in ' +
                  'the empire had statues of the emperor, to remind everyone who ruled, the way ' +
                  'photographs do today. Hadrian was the first emperor with a beard, and after ' +
                  'him beards became the fashion throughout Rome.',
              },
              question: {
                q: { el: 'Γιατί κάθε πόλη είχε αγάλματα του αυτοκράτορα;', en: 'Why did every city have statues of the emperor?' },
                answers: [
                  { el: 'Για να θυμίζουν ποιος κυβερνάει', en: 'To remind people who ruled' },
                  { el: 'Για τύχη', en: 'For luck' },
                  { el: 'Για διακόσμηση', en: 'As decoration' },
                  {
                    el: 'Γιατί ο αυτοκράτορας τα έστελνε ως δώρο σε κάθε πόλη που επισκεπτόταν',
                    en: 'Because the emperor sent them as gifts to every city he visited',
                  },
                ],
                explanation: {
                  el: 'Δεν υπήρχαν φωτογραφίες. Το άγαλμα ήταν το πρόσωπο της εξουσίας.',
                  en: 'There were no photographs. The statue was the face of power.',
                },
              },
            },
          ],
        },
        {
          id: 'antalya-museum-stone-stories',
          emoji: '⚰️',
          name: { el: 'Ιστορίες σκαλισμένες σε πέτρα', en: 'Stories carved in stone' },
          intro: {
            el:
              'Σε αυτή την αίθουσα οι πέτρες λένε ιστορίες. Οι Ρωμαίοι έθαβαν τους πλούσιους ' +
              'σε μαρμάρινα κιβώτια, τις σαρκοφάγους, και τις σκάλιζαν με μύθους και σκηνές ' +
              'από τη ζωή. Και πολύ πριν από τους Ρωμαίους, άνθρωποι ζούσαν σε μια σπηλιά ' +
              'κοντά στην πόλη και άφησαν πίσω τους εργαλεία.',
            en:
              'In this room the stones tell stories. The Romans buried the rich in marble ' +
              'boxes, sarcophagi, and carved them with myths and scenes from life. And long ' +
              'before the Romans, people lived in a cave near the city and left their tools ' +
              'behind.',
          },
          exhibits: [
            {
              id: 'antalya-museum-sarcophagus',
              name: { el: 'Η σαρκοφάγος με τους άθλους', en: 'The sarcophagus of the labours' },
              blurb: {
                el:
                  'Ένα μεγάλο μαρμάρινο κιβώτιο, σκαλισμένο γύρω γύρω με τους δώδεκα άθλους του ' +
                  'Ηρακλή: παλεύει με το λιοντάρι, κόβει τα κεφάλια της Ύδρας, πιάνει το ' +
                  'ελάφι, κρατάει τον ουρανό στους ώμους του. Είναι μια σαρκοφάγος, δηλαδή ένα ' +
                  'φέρετρο από πέτρα, φτιαγμένο για μια πλούσια οικογένεια της Πέργης πριν από ' +
                  'χίλια οκτακόσια χρόνια. Ο Ηρακλής ήταν αγαπημένος για τους τάφους, γιατί ' +
                  'νίκησε τον θάνατο και έγινε θεός. Ψάξε πόσους από τους δώδεκα άθλους μπορείς ' +
                  'να αναγνωρίσεις.',
                en:
                  'A big marble box, carved all round with the twelve labours of Hercules: he ' +
                  'wrestles the lion, cuts off the Hydra’s heads, catches the deer, holds the sky ' +
                  'on his shoulders. It is a sarcophagus, a coffin made of stone, made for a rich ' +
                  'family of Perge one thousand eight hundred years ago. Hercules was a favourite ' +
                  'for tombs, because he defeated death and became a god. See how many of the ' +
                  'twelve labours you can recognise.',
              },
              question: {
                q: { el: 'Γιατί ο Ηρακλής ήταν αγαπημένος για τους τάφους;', en: 'Why was Hercules a favourite for tombs?' },
                answers: [
                  { el: 'Νίκησε τον θάνατο και έγινε θεός', en: 'He defeated death and became a god' },
                  { el: 'Ήταν δυνατός', en: 'He was strong' },
                  { el: 'Ήταν από την Πέργη', en: 'He came from Perge' },
                  {
                    el: 'Γιατί ήταν ο μόνος ήρωας που ήξεραν να σκαλίζουν οι τεχνίτες της Πέργης',
                    en: 'Because he was the only hero the craftsmen of Perge knew how to carve',
                  },
                ],
                explanation: {
                  el: 'Οι άθλοι του ήταν μια ελπίδα: ότι μετά τη ζωή έρχεται κάτι καλύτερο.',
                  en: 'His labours were a hope: that after life something better follows.',
                },
              },
            },
            {
              id: 'antalya-museum-cave',
              name: { el: 'Τα εργαλεία από τη σπηλιά', en: 'The tools from the cave' },
              blurb: {
                el:
                  'Σε μια βιτρίνα υπάρχουν πέτρες που μοιάζουν απλές, αλλά δεν είναι: είναι ' +
                  'εργαλεία, πελεκημένα από ανθρώπους. Βρέθηκαν σε μια σπηλιά λίγα χιλιόμετρα από ' +
                  'την πόλη, την Καραΐν, όπου άνθρωποι ζούσαν πριν από πενήντα χιλιάδες χρόνια, ' +
                  'πριν υπάρξουν σπίτια, χωριά ή γραφή. Με αυτές τις πέτρες έκοβαν κρέας, ' +
                  'έξυναν δέρματα και έφτιαχναν αιχμές για κυνήγι. Στη σπηλιά βρέθηκαν και ' +
                  'κόκαλα ζώων που δεν ζουν πια εδώ, όπως ελέφαντες και ιπποπόταμοι. Είναι από ' +
                  'τα πιο παλιά ίχνη ανθρώπων σε όλη την Τουρκία.',
                en:
                  'In one case there are stones that look plain, but are not: they are tools, ' +
                  'chipped into shape by people. They were found in a cave a few kilometres from ' +
                  'the city, Karain, where people lived fifty thousand years ago, before there ' +
                  'were houses, villages or writing. With these stones they cut meat, scraped ' +
                  'hides and made points for hunting. Bones of animals that no longer live here, ' +
                  'such as elephants and hippopotamuses, were also found in the cave. They are ' +
                  'among the oldest traces of people in the whole of Turkey.',
              },
              question: {
                q: { el: 'Τι ζώα ζούσαν εδώ πριν από πενήντα χιλιάδες χρόνια;', en: 'What animals lived here fifty thousand years ago?' },
                answers: [
                  { el: 'Ελέφαντες και ιπποπόταμοι', en: 'Elephants and hippopotamuses' },
                  { el: 'Γάτες', en: 'Cats' },
                  { el: 'Μόνο πουλιά', en: 'Only birds' },
                  {
                    el: 'Πιγκουίνοι, γιατί τότε όλη η περιοχή ήταν σκεπασμένη με πάγο',
                    en: 'Penguins, because back then the whole region was covered in ice',
                  },
                ],
                explanation: {
                  el: 'Τα κόκαλά τους βρέθηκαν στη σπηλιά, μαζί με τα πέτρινα εργαλεία.',
                  en: 'Their bones were found in the cave, together with the stone tools.',
                },
              },
            },
            {
              id: 'antalya-museum-coins',
              name: { el: 'Τα νομίσματα', en: 'The coins' },
              blurb: {
                el:
                  'Χιλιάδες μικρά νομίσματα από χρυσό, ασήμι και χαλκό, από την εποχή των ' +
                  'αρχαίων Ελλήνων ως τους Οθωμανούς. Τα νομίσματα είναι σαν μικρές αφίσες: ' +
                  'στη μία πλευρά έχουν το πρόσωπο ενός βασιλιά ή αυτοκράτορα, και στην άλλη ' +
                  'έναν θεό, ένα ζώο ή ένα κτίριο της πόλης που τα έκοψε. Έτσι οι αρχαιολόγοι ' +
                  'μαθαίνουν από ένα νόμισμα ποιος κυβερνούσε, πότε, και τι ήταν σημαντικό για ' +
                  'την πόλη. Πολλά βρέθηκαν σε πήλινα βάζα, θαμμένα από ανθρώπους που τα ' +
                  'έκρυψαν σε ώρα κινδύνου και δεν γύρισαν ποτέ να τα πάρουν.',
                en:
                  'Thousands of small coins of gold, silver and copper, from the time of the ' +
                  'ancient Greeks to the Ottomans. Coins are like tiny posters: on one side they ' +
                  'have the face of a king or emperor, and on the other a god, an animal or a ' +
                  'building of the city that struck them. So archaeologists learn from one coin ' +
                  'who ruled, when, and what mattered to the city. Many were found in clay ' +
                  'jars, buried by people who hid them in a time of danger and never came back ' +
                  'for them.',
              },
              question: {
                q: { el: 'Γιατί πολλά νομίσματα βρέθηκαν μέσα σε πήλινα βάζα;', en: 'Why were many coins found inside clay jars?' },
                answers: [
                  { el: 'Τα έκρυψαν σε ώρα κινδύνου', en: 'They were hidden in a time of danger' },
                  { el: 'Ήταν δώρα', en: 'They were gifts' },
                  { el: 'Ήταν τράπεζες', en: 'They were banks' },
                  {
                    el: 'Γιατί οι αρχαίοι πετούσαν τα παλιά νομίσματα στα σκουπίδια μέσα σε βάζα',
                    en: 'Because the ancients threw old coins in the rubbish inside jars',
                  },
                ],
                explanation: {
                  el: 'Όποιος τα έθαψε δεν γύρισε ποτέ να τα πάρει. Έτσι μένουν ως σήμερα.',
                  en: 'Whoever buried them never came back for them. So they remain to this day.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'antalya-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Έκανα δώδεκα άθλους και κουράστηκα. Για τριάντα χρόνια το μισό μου ζούσε πέρα ' +
              'από τον ωκεανό, μέχρι που γύρισε σπίτι.',
            en:
              'I did twelve labours and I am tired. For thirty years half of me lived across the ' +
              'ocean, until it came home.',
          },
          hint: { el: 'Ακουμπάω σε ένα ρόπαλο.', en: 'I lean on a club.' },
          answerExhibitId: 'antalya-museum-hercules',
        },
        {
          id: 'antalya-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Μοιάζω με απλή πέτρα, αλλά ένα χέρι με πελέκησε πριν από πενήντα χιλιάδες ' +
              'χρόνια, σε μια σπηλιά, δίπλα σε κόκαλα ελέφαντα.',
            en:
              'I look like a plain stone, but a hand chipped me into shape fifty thousand years ' +
              'ago, in a cave, beside the bones of an elephant.',
          },
          hint: { el: 'Είμαι εργαλείο.', en: 'I am a tool.' },
          answerExhibitId: 'antalya-museum-cave',
        },
        {
          id: 'antalya-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι ένα κιβώτιο από μάρμαρο, και γύρω γύρω μου ένας ήρωας παλεύει με λιοντάρι, ' +
              'κόβει κεφάλια φιδιού και κρατάει τον ουρανό.',
            en:
              'I am a box of marble, and all around me a hero wrestles a lion, cuts off a ' +
              'serpent’s heads and holds up the sky.',
          },
          hint: { el: 'Μέσα μου κοιμόταν κάποιος.', en: 'Someone once slept inside me.' },
          answerExhibitId: 'antalya-museum-sarcophagus',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- aquarium
  {
    id: 'antalya-aquarium',
    cityId: 'antalya',
    emoji: '🦈',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Το Ενυδρείο της Αττάλειας', en: 'The Antalya Aquarium' },
    tagline: {
      el: 'Ένα τούνελ κάτω από τους καρχαρίες, και χιόνι στη ζέστη',
      en: 'A tunnel underneath the sharks, and snow in the heat',
    },
    story: {
      el:
        'Στη δυτική άκρη της πόλης, δίπλα στην παραλία, βρίσκεται ένα από τα μεγαλύτερα ' +
        'ενυδρεία του κόσμου. Άνοιξε το 2012 και έχει σαράντα δεξαμενές, από μικρές γυάλινες ' +
        'μέχρι μία που χωράει πέντε εκατομμύρια λίτρα νερό. Το πιο διάσημο σημείο του είναι ' +
        'ένα γυάλινο τούνελ εκατόν τριάντα ένα μέτρων, από τα μακρύτερα του κόσμου: περπατάς ' +
        'μέσα από τη μεγάλη δεξαμενή, με το νερό γύρω και πάνω από το κεφάλι σου, και οι ' +
        'καρχαρίες, τα σαλάχια και τα κοπάδια ψαριών περνούν από πάνω σου. Οι δεξαμενές ' +
        'δείχνουν τη θάλασσα της Μεσογείου, αλλά και ποτάμια της Αμερικής και της Αφρικής, με ' +
        'πιράνχας και ψάρια που μοιάζουν με φύλλα. Στο ίδιο κτίριο υπάρχει και κάτι ' +
        'απροσδόκητο για μια πόλη όπου το καλοκαίρι φτάνει τους σαράντα βαθμούς: ένα δωμάτιο ' +
        'με αληθινό χιόνι και πάγο, όπου μπαίνεις με μπουφάν και ρίχνεις χιονόμπαλες. Ο ' +
        'χώρος έχει και μια έκθεση με τεράστια μοντέλα εντόμων.',
      en:
        'At the western edge of the city, next to the beach, is one of the largest aquariums ' +
        'in the world. It opened in 2012 and has forty tanks, from small glass ones to one that ' +
        'holds five million litres of water. Its most famous feature is a glass tunnel a ' +
        'hundred and thirty-one metres long, among the longest in the world: you walk through ' +
        'the big tank, with water around and above your head, and sharks, rays and shoals of ' +
        'fish pass over you. The tanks show the Mediterranean, but also rivers of America and ' +
        'Africa, with piranhas and fish that look like leaves. In the same building there is ' +
        'also something unexpected for a city where summer reaches forty degrees: a room with ' +
        'real snow and ice, where you go in wearing a jacket and throw snowballs. The place ' +
        'also has an exhibition of giant insect models.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2012 και έχει σαράντα δεξαμενές.',
        en: 'It opened in 2012 and has forty tanks.',
      },
      {
        el: 'Το γυάλινο τούνελ του είναι 131 μέτρα, από τα μακρύτερα του κόσμου.',
        en: 'Its glass tunnel is 131 metres long, among the longest in the world.',
      },
      {
        el: 'Έχει ένα δωμάτιο με αληθινό χιόνι.',
        en: 'It has a room with real snow.',
      },
    ],
    location: {
      lat: 36.87891,
      lng: 30.66068,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q20470397', deltaM: 0 },
        { kind: 'osm', ref: 'way/502752451', deltaM: 34 },
      ],
      verifiedAt: '2026-09-19',
      note: 'Grade C: OpenStreetMap\'s building outline is 34 m off, just outside the 30 m window, on the same building.',
      map: { x: 0.166, y: 0.322 },
    },
    question: {
      q: { el: 'Τι περνάει πάνω από το κεφάλι σου μέσα στο τούνελ;', en: 'What passes above your head inside the tunnel?' },
      answers: [
        { el: 'Καρχαρίες, σαλάχια και ψάρια', en: 'Sharks, rays and shoals of fish' },
        { el: 'Βάρκες', en: 'Boats' },
        { el: 'Δύτες με φώτα', en: 'Divers with lights' },
        {
          el: 'Δελφίνια που πηδάνε από τη μία πλευρά της δεξαμενής στην άλλη',
          en: 'Dolphins jumping from one side of the tank to the other',
        },
      ],
      explanation: {
        el: 'Το τούνελ περνάει μέσα από τη μεγάλη δεξαμενή, με το νερό γύρω και από πάνω.',
        en: 'The tunnel runs through the big tank, with water all round and above.',
      },
    },

    museum: {
      doorNote: {
        el: 'Στο τούνελ, σταμάτα και κοίτα ψηλά. Οι καρχαρίες περνούν από πάνω σου.',
        en: 'In the tunnel, stop and look up. The sharks pass right over you.',
      },
      rooms: [
        {
          id: 'antalya-aquarium-tunnel',
          emoji: '🌊',
          name: { el: 'Η μεγάλη δεξαμενή', en: 'The big tank' },
          intro: {
            el:
              'Η μεγαλύτερη δεξαμενή του ενυδρείου είναι σαν ένα κομμάτι θάλασσας μέσα σε ' +
              'κτίριο, με ένα βυθισμένο πλοίο και βράχους. Το γυάλινο τούνελ περνάει μέσα από ' +
              'αυτήν. Περπάτα αργά, κοίτα ψηλά και στα πλάγια, και προσπάθησε να ξεχωρίσεις ' +
              'τα ζώα μεταξύ τους.',
            en:
              'The aquarium’s biggest tank is like a piece of sea inside a building, with a ' +
              'sunken ship and rocks. The glass tunnel runs right through it. Walk slowly, look ' +
              'up and to the sides, and try to tell the animals apart.',
          },
          exhibits: [
            {
              id: 'antalya-aquarium-sharks',
              name: { el: 'Οι καρχαρίες', en: 'The sharks' },
              blurb: {
                el:
                  'Οι καρχαρίες της μεγάλης δεξαμενής κολυμπούν αργά και αδιάκοπα, γιατί οι ' +
                  'περισσότεροι καρχαρίες πρέπει να κινούνται συνέχεια για να περνάει νερό από τα ' +
                  'βράγχιά τους και να αναπνέουν. Ο σκελετός τους δεν είναι από κόκαλο αλλά από ' +
                  'χόνδρο, το ίδιο μαλακό υλικό που έχεις εσύ στη μύτη και στα αυτιά σου. Τα ' +
                  'δόντια τους βγαίνουν σε σειρές, και όταν πέφτει ένα, έρχεται το επόμενο από ' +
                  'πίσω. Οι καρχαρίες υπάρχουν στη Γη πριν από τους δεινοσαύρους, και τα ' +
                  'περισσότερα είδη δεν είναι καθόλου επικίνδυνα για τους ανθρώπους.',
                en:
                  'The sharks in the big tank swim slowly and without stopping, because most ' +
                  'sharks must keep moving so that water passes through their gills and they ' +
                  'can breathe. Their skeleton is not bone but cartilage, the same soft material ' +
                  'you have in your nose and ears. Their teeth grow in rows, and when one falls ' +
                  'out, the next one moves up from behind. Sharks have been on Earth since ' +
                  'before the dinosaurs, and most kinds are not dangerous to people at all.',
              },
              question: {
                q: { el: 'Από τι είναι ο σκελετός του καρχαρία;', en: 'What is a shark’s skeleton made of?' },
                answers: [
                  { el: 'Από χόνδρο, όπως η μύτη σου', en: 'Cartilage, like your nose' },
                  { el: 'Κόκαλο', en: 'Bone' },
                  { el: 'Από σκληρά λέπια', en: 'From hard scales' },
                  {
                    el: 'Δεν έχει σκελετό, γι’ αυτό πρέπει να κολυμπάει συνέχεια για να μη λυγίζει',
                    en: 'It has no skeleton, which is why it must keep swimming so it does not bend',
                  },
                ],
                explanation: {
                  el: 'Το ίδιο μαλακό υλικό που έχεις στη μύτη και στα αυτιά σου.',
                  en: 'The same soft material you have in your nose and ears.',
                },
              },
            },
            {
              id: 'antalya-aquarium-rays',
              name: { el: 'Τα σαλάχια', en: 'The rays' },
              blurb: {
                el:
                  'Τα σαλάχια μοιάζουν με χαλιά που πετούν μέσα στο νερό. Είναι συγγενείς των ' +
                  'καρχαριών, αλλά πλατιά και επίπεδα, με το στόμα από κάτω και τα μάτια από ' +
                  'πάνω. Όταν περνούν πάνω από το τούνελ, βλέπεις την άσπρη κοιλιά τους και το ' +
                  'στόμα τους, που μοιάζει να χαμογελάει. Ζουν στον βυθό, μισοθαμμένα στην άμμο, ' +
                  'και τρώνε μικρά ζώα που βρίσκουν εκεί. Μερικά είδη έχουν ένα αγκάθι στην ' +
                  'ουρά για να αμύνονται, γι’ αυτό στη θάλασσα δεν τα ενοχλούμε. Οι επισκέπτες ' +
                  'μπορούν να δουν πώς τρέφονται σε συγκεκριμένες ώρες.',
                en:
                  'Rays look like carpets flying through the water. They are relatives of the ' +
                  'sharks, but wide and flat, with the mouth underneath and the eyes on top. When ' +
                  'they pass over the tunnel you see their white belly and their mouth, which ' +
                  'seems to smile. They live on the seabed, half buried in sand, and eat the small ' +
                  'animals they find there. Some kinds have a sting in their tail to defend ' +
                  'themselves, which is why we leave them alone in the sea. Visitors can watch ' +
                  'them being fed at set times.',
              },
              question: {
                q: { el: 'Πού είναι το στόμα του σαλαχιού;', en: 'Where is a ray’s mouth?' },
                answers: [
                  { el: 'Από κάτω, στην κοιλιά του', en: 'Underneath, on its belly' },
                  { el: 'Μπροστά', en: 'At the front' },
                  { el: 'Στην άκρη της ουράς', en: 'At the tip of its tail' },
                  {
                    el: 'Δεν έχει στόμα, τρώει ρουφώντας νερό μέσα από το δέρμα του',
                    en: 'It has no mouth, it eats by sucking water in through its skin',
                  },
                ],
                explanation: {
                  el: 'Γι’ αυτό, όταν περνάει από πάνω σου, μοιάζει να σου χαμογελάει.',
                  en: 'That is why, when it passes over you, it seems to smile at you.',
                },
              },
            },
            {
              id: 'antalya-aquarium-wreck',
              name: { el: 'Το βυθισμένο πλοίο', en: 'The sunken ship' },
              blurb: {
                el:
                  'Στον πάτο της μεγάλης δεξαμενής υπάρχει ένα πλοίο, ξαπλωμένο στο πλάι, σαν ' +
                  'να ναυάγησε. Δεν είναι αληθινό ναυάγιο: το έφτιαξαν οι άνθρωποι του ενυδρείου ' +
                  'για να δείξουν κάτι που συμβαίνει και στην πραγματική θάλασσα. Όταν ένα πλοίο ' +
                  'βυθίζεται, σιγά σιγά γίνεται σπίτι: φύκια και κοράλλια πιάνονται στα σίδερά ' +
                  'του, μικρά ψάρια κρύβονται στις τρύπες του από τα μεγάλα, χταπόδια κάνουν φωλιά ' +
                  'στις καμπίνες. Σε λίγα χρόνια ένα ναυάγιο γεμίζει ζωή. Οι δύτες που ' +
                  'καθαρίζουν τη δεξαμενή περνούν συχνά δίπλα από αυτό.',
                en:
                  'At the bottom of the big tank there is a ship, lying on its side, as if it had ' +
                  'been wrecked. It is not a real wreck: the aquarium’s people built it to show ' +
                  'something that happens in the real sea too. When a ship sinks, it slowly ' +
                  'becomes a home: seaweed and corals take hold on its iron, small fish hide in ' +
                  'its holes from the big ones, octopuses nest in the cabins. In a few years a ' +
                  'wreck fills with life. The divers who clean the tank often swim past it.',
              },
              question: {
                q: { el: 'Τι γίνεται ένα πλοίο αφού βυθιστεί;', en: 'What does a ship become after it sinks?' },
                answers: [
                  { el: 'Σπίτι για ψάρια και κοράλλια', en: 'A home for fish and corals' },
                  { el: 'Σκουριά', en: 'Rust' },
                  { el: 'Ένα νησί', en: 'A new island' },
                  {
                    el: 'Ένα τεράστιο ψάρι, γιατί τα ξύλα του μεταμορφώνονται μέσα στο νερό',
                    en: 'A giant fish, because its timbers change shape inside the water',
                  },
                ],
                explanation: {
                  el: 'Μικρά ψάρια στις τρύπες, χταπόδια στις καμπίνες. Σε λίγα χρόνια γεμίζει ζωή.',
                  en: 'Small fish in the holes, octopuses in the cabins. In a few years it fills with life.',
                },
              },
            },
          ],
        },
        {
          id: 'antalya-aquarium-rivers',
          emoji: '🐟',
          name: { el: 'Ποτάμια, χιόνι και έντομα', en: 'Rivers, snow and insects' },
          intro: {
            el:
              'Πέρα από τη μεγάλη δεξαμενή, το ενυδρείο ταξιδεύει: σε ποτάμια της Νότιας ' +
              'Αμερικής, σε λίμνες της Αφρικής, και μετά σε ένα δωμάτιο όπου χιονίζει. Ντύσου ' +
              'ζεστά για το τελευταίο. Κοίτα πώς κάθε ζώο έχει έναν τρόπο να κρύβεται ή να ' +
              'προστατεύεται.',
            en:
              'Beyond the big tank, the aquarium travels: to rivers of South America, to lakes ' +
              'of Africa, and then to a room where it snows. Dress warmly for the last one. See ' +
              'how every animal has a way of hiding or protecting itself.',
          },
          exhibits: [
            {
              id: 'antalya-aquarium-piranhas',
              name: { el: 'Τα πιράνχας', en: 'The piranhas' },
              blurb: {
                el:
                  'Μικρά ασημένια ψάρια με κόκκινες κοιλιές κολυμπούν μαζί σε ένα κοπάδι, μέσα σε ' +
                  'μια δεξαμενή που μοιάζει με ποτάμι της ζούγκλας. Είναι πιράνχας, από τον ' +
                  'Αμαζόνιο. Έχουν φήμη τρομερών θηρίων, αλλά η αλήθεια είναι πιο ήσυχη: τα ' +
                  'περισσότερα τρώνε ψάρια, έντομα, ακόμα και φρούτα και σπόρους που πέφτουν στο ' +
                  'ποτάμι. Τα δόντια τους είναι όντως κοφτερά σαν ξυράφι, και κολυμπούν σε κοπάδι ' +
                  'για να προστατεύονται από τα μεγαλύτερα ζώα, όχι για να επιτίθενται. Οι ' +
                  'ιθαγενείς του Αμαζονίου χρησιμοποιούσαν τα δόντια τους ως εργαλεία.',
                en:
                  'Small silver fish with red bellies swim together in a shoal, in a tank that ' +
                  'looks like a jungle river. They are piranhas, from the Amazon. They have a ' +
                  'reputation as terrible beasts, but the truth is quieter: most eat fish, ' +
                  'insects, even fruit and seeds that fall into the river. Their teeth really are ' +
                  'razor sharp, and they swim in a shoal to protect themselves from bigger ' +
                  'animals, not to attack. The native people of the Amazon used their teeth as ' +
                  'tools.',
              },
              question: {
                q: { el: 'Γιατί τα πιράνχας κολυμπούν σε κοπάδι;', en: 'Why do piranhas swim in a shoal?' },
                answers: [
                  { el: 'Για να προστατεύονται από μεγαλύτερα ζώα', en: 'To protect themselves from bigger animals' },
                  { el: 'Για παρέα', en: 'For company' },
                  { el: 'Για να επιτίθενται μαζί', en: 'To attack together' },
                  {
                    el: 'Γιατί το ποτάμι είναι τόσο στενό που δεν χωράνε να κολυμπήσουν αλλιώς',
                    en: 'Because the river is so narrow that they cannot swim any other way',
                  },
                ],
                explanation: {
                  el: 'Η φήμη τους είναι χειρότερη από την αλήθεια. Τρώνε ακόμα και φρούτα.',
                  en: 'Their reputation is worse than the truth. They even eat fruit.',
                },
              },
            },
            {
              id: 'antalya-aquarium-snow',
              name: { el: 'Ο κόσμος του χιονιού', en: 'The snow world' },
              blurb: {
                el:
                  'Πίσω από μια βαριά πόρτα η θερμοκρασία πέφτει κάτω από το μηδέν. Μέσα ' +
                  'υπάρχει αληθινό χιόνι, πάγος, μια τσουλήθρα και μερικοί πιγκουίνοι, που είναι ' +
                  'αγάλματα, όχι ζωντανοί. Το χιόνι φτιάχνεται από μηχανές, όπως στα χιονοδρομικά ' +
                  'κέντρα, ψεκάζοντας νερό σε παγωμένο αέρα. Παίρνεις ένα μπουφάν στην είσοδο. ' +
                  'Για πολλά παιδιά της Αττάλειας, όπου σχεδόν ποτέ δεν χιονίζει, εδώ είναι το ' +
                  'πρώτο χιόνι που αγγίζουν. Μην μείνεις πολλή ώρα: μετά από λίγα λεπτά τα ' +
                  'δάχτυλα παγώνουν.',
                en:
                  'Behind a heavy door the temperature drops below zero. Inside there is real ' +
                  'snow, ice, a slide and a few penguins, which are statues, not live ones. The ' +
                  'snow is made by machines, as at ski resorts, by spraying water into freezing ' +
                  'air. You are given a jacket at the entrance. For many children of Antalya, ' +
                  'where it almost never snows, this is the first snow they ever touch. Do not ' +
                  'stay too long: after a few minutes your fingers freeze.',
              },
              question: {
                q: { el: 'Πώς φτιάχνεται το χιόνι σε αυτό το δωμάτιο;', en: 'How is the snow in this room made?' },
                answers: [
                  { el: 'Μηχανές ψεκάζουν νερό σε παγωμένο αέρα', en: 'Machines spray water into freezing air' },
                  { el: 'Από τα βουνά', en: 'From the mountains' },
                  { el: 'Είναι ψεύτικο, από πλαστικό', en: 'It is fake, made of plastic' },
                  {
                    el: 'Το φέρνουν κάθε πρωί με φορτηγά-ψυγεία από τη Ρωσία',
                    en: 'It is brought every morning in refrigerated lorries from Russia',
                  },
                ],
                explanation: {
                  el: 'Όπως στα χιονοδρομικά κέντρα. Για πολλά παιδιά εδώ είναι το πρώτο τους χιόνι.',
                  en: 'As at ski resorts. For many children here it is their first snow.',
                },
              },
            },
            {
              id: 'antalya-aquarium-insects',
              name: { el: 'Τα γιγάντια έντομα', en: 'The giant insects' },
              blurb: {
                el:
                  'Μια αίθουσα με έντομα μεγάλα σαν σκύλους: ένα μυρμήγκι, μια μέλισσα, ένας ' +
                  'σκορπιός, μια μαντίδα, μια αράχνη. Είναι μοντέλα, φτιαγμένα σε πολύ μεγάλο ' +
                  'μέγεθος για να μπορείς να δεις λεπτομέρειες που κανονικά χρειάζονται μικροσκόπιο: ' +
                  'τα σύνθετα μάτια της μέλισσας, φτιαγμένα από χιλιάδες μικρά μάτια, τα ' +
                  'τριχωτά πόδια της αράχνης, τα «αρπακτικά» μπροστινά πόδια της μαντίδας. Τα ' +
                  'έντομα είναι τα πιο πολυάριθμα ζώα της Γης: για κάθε άνθρωπο υπάρχουν ' +
                  'εκατοντάδες εκατομμύρια έντομα. Μερικά μοντέλα κινούνται και βγάζουν ήχους.',
                en:
                  'A room of insects as big as dogs: an ant, a bee, a scorpion, a mantis, a ' +
                  'spider. They are models, built at a very large size so you can see details that ' +
                  'normally need a microscope: the bee’s compound eyes, made of thousands of tiny ' +
                  'eyes, the spider’s hairy legs, the mantis’s grasping front legs. Insects are the ' +
                  'most numerous animals on Earth: for every person there are hundreds of millions ' +
                  'of insects. Some of the models move and make sounds.',
              },
              question: {
                q: { el: 'Γιατί τα μοντέλα των εντόμων είναι τόσο μεγάλα;', en: 'Why are the insect models so big?' },
                answers: [
                  { el: 'Για να βλέπεις λεπτομέρειες', en: 'So you can see the details' },
                  { el: 'Για να τρομάζουν', en: 'To scare people' },
                  { el: 'Είναι αληθινά', en: 'They are real' },
                  {
                    el: 'Γιατί τόσο μεγάλα ήταν τα έντομα την εποχή των δεινοσαύρων',
                    en: 'Because that is how big insects were in the time of the dinosaurs',
                  },
                ],
                explanation: {
                  el: 'Τα μάτια της μέλισσας, τα πόδια της αράχνης: κανονικά χρειάζονται μικροσκόπιο.',
                  en: 'The bee’s eyes, the spider’s legs: normally you would need a microscope.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'antalya-aquarium-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Μοιάζω με χαλί που πετάει μέσα στο νερό. Το στόμα μου είναι στην κοιλιά μου, ' +
              'και όταν περνάω από πάνω σου, νομίζεις ότι σου χαμογελάω.',
            en:
              'I look like a carpet flying through the water. My mouth is on my belly, and when ' +
              'I pass over you, you think I am smiling at you.',
          },
          hint: { el: 'Είμαι συγγενής του καρχαρία.', en: 'I am a relative of the shark.' },
          answerExhibitId: 'antalya-aquarium-rays',
        },
        {
          id: 'antalya-aquarium-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Σε μια πόλη που σχεδόν ποτέ δεν χιονίζει, εγώ χιονίζω κάθε μέρα. Οι πιγκουίνοι ' +
              'μου δεν κουνιούνται, αλλά τα δάχτυλά σου παγώνουν στ’ αλήθεια.',
            en:
              'In a city where it almost never snows, I snow every day. My penguins do not ' +
              'move, but your fingers really do freeze.',
          },
          hint: { el: 'Θα σου δώσουν μπουφάν.', en: 'They will give you a jacket.' },
          answerExhibitId: 'antalya-aquarium-snow',
        },
        {
          id: 'antalya-aquarium-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Ξάπλωσα στον πάτο σαν να ναυάγησα, αλλά κανείς δεν ταξίδεψε ποτέ μαζί μου. ' +
              'Τώρα τα ψάρια κρύβονται στις τρύπες μου και τα χταπόδια στις καμπίνες μου.',
            en:
              'I lie on the bottom as if I had been wrecked, but nobody ever sailed in me. Now ' +
              'fish hide in my holes and octopuses in my cabins.',
          },
          hint: { el: 'Είμαι στη μεγάλη δεξαμενή.', en: 'I am in the big tank.' },
          answerExhibitId: 'antalya-aquarium-wreck',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ konyaalti
  {
    id: 'antalya-konyaalti',
    cityId: 'antalya',
    emoji: '🏖️',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Η παραλία Κονιάαλτι', en: 'Konyaaltı Beach' },
    tagline: {
      el: 'Επτά χιλιόμετρα βότσαλα, με τα βουνά να πέφτουν στη θάλασσα',
      en: 'Seven kilometres of pebbles, with mountains dropping into the sea',
    },
    story: {
      el:
        'Δυτικά από τα βράχια της παλιάς πόλης, εκεί που η ακτή χαμηλώνει, αρχίζει μια παραλία ' +
        'επτά χιλιομέτρων. Δεν έχει άμμο αλλά μικρά, στρογγυλά, γκρίζα βότσαλα, που ζεσταίνονται ' +
        'στον ήλιο και κάνουν το νερό να είναι πεντακάθαρο, γιατί δεν σηκώνεται λάσπη. Το ' +
        'όνομά της σημαίνει «κάτω από το Ικόνιο», μια πόλη πίσω από τα βουνά, γιατί από εδώ ' +
        'ξεκινούσε ο παλιός δρόμος προς τα εκεί. Το πιο εντυπωσιακό δεν είναι η θάλασσα αλλά ' +
        'αυτό που βλέπεις πίσω της: τα βουνά του Ταύρου υψώνονται σχεδόν κατευθείαν μέσα από ' +
        'το νερό, στη δυτική άκρη του κόλπου, και τον χειμώνα οι κορυφές τους ασπρίζουν. ' +
        'Κατά μήκος της παραλίας υπάρχει ένας μακρύς πεζόδρομος με γρασίδι, φοίνικες, παιδικές ' +
        'χαρές και γήπεδα βόλεϊ. Το καλοκαίρι η θάλασσα φτάνει τους τριάντα βαθμούς, σαν ' +
        'μπανιέρα, και μπορείς να κολυμπάς από τον Απρίλιο ως τον Νοέμβριο.',
      en:
        'West of the cliffs of the old town, where the coast drops down, a beach seven ' +
        'kilometres long begins. It has no sand but small, round, grey pebbles, which warm up ' +
        'in the sun and keep the water crystal clear, because no mud is stirred up. Its name ' +
        'means "below Konya", a city beyond the mountains, because the old road there started ' +
        'from here. The most striking thing is not the sea but what you see behind it: the ' +
        'Taurus Mountains rise almost straight out of the water at the western end of the bay, ' +
        'and in winter their peaks turn white. Along the beach runs a long promenade with ' +
        'grass, palm trees, playgrounds and volleyball courts. In summer the sea reaches ' +
        'thirty degrees, like a bath, and you can swim from April to November.',
    },
    facts: [
      {
        el: 'Είναι επτά χιλιόμετρα μακριά και έχει βότσαλα, όχι άμμο.',
        en: 'It is seven kilometres long and has pebbles, not sand.',
      },
      {
        el: 'Τα βουνά του Ταύρου υψώνονται μέσα από τη θάλασσα στην άκρη της.',
        en: 'The Taurus Mountains rise out of the sea at its end.',
      },
      {
        el: 'Μπορείς να κολυμπάς από τον Απρίλιο ως τον Νοέμβριο.',
        en: 'You can swim from April to November.',
      },
    ],
    location: {
      lat: 36.865,
      lng: 30.64444,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q2493895', deltaM: 0 }],
      verifiedAt: '2026-09-19',
      note: 'Grade C: Wikidata alone for a seven-kilometre beach; the point sits on the beach itself.',
      map: { x: 0.061, y: 0.600 },
    },
    question: {
      q: { el: 'Γιατί το νερό εδώ είναι τόσο καθαρό;', en: 'Why is the water here so clear?' },
      answers: [
        { el: 'Τα βότσαλα δεν σηκώνουν λάσπη', en: 'The pebbles stir up no mud' },
        { el: 'Είναι κρύο', en: 'It is cold' },
        { el: 'Το καθαρίζουν κάθε πρωί', en: 'It is cleaned every morning' },
        {
          el: 'Γιατί το νερό έρχεται κατευθείαν από τα χιόνια των βουνών μέσα από τα βράχια',
          en: 'Because the water comes straight from the mountain snows through the rocks',
        },
      ],
      explanation: {
        el: 'Η άμμος θολώνει το νερό με κάθε κύμα. Τα βότσαλα μένουν στη θέση τους.',
        en: 'Sand clouds the water with every wave. Pebbles stay where they are.',
      },
    },
  },

  // ---------------------------------------------------------------- lower duden
  {
    id: 'antalya-lower-duden',
    cityId: 'antalya',
    emoji: '💦',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ο καταρράκτης Ντουντέν', en: 'The Düden Waterfall' },
    tagline: {
      el: 'Ένα ποτάμι που πηδάει από τα βράχια κατευθείαν στη θάλασσα',
      en: 'A river that leaps off the cliffs straight into the sea',
    },
    story: {
      el:
        'Στην ανατολική άκρη της πόλης συμβαίνει κάτι σπάνιο: ένα ολόκληρο ποτάμι φτάνει στην ' +
        'άκρη των βράχων και πέφτει σαράντα μέτρα κατευθείαν μέσα στη θάλασσα, με έναν ' +
        'βρόντο που ακούγεται από μακριά. Είναι ο Ντουντέν, ένα ποτάμι με παράξενη ζωή. ' +
        'Ξεκινάει από τα βουνά, χάνεται κάτω από τη γη, βγαίνει ξανά, φτιάχνει έναν πρώτο ' +
        'καταρράκτη μέσα σε ένα πάρκο βόρεια της πόλης, και τελειώνει εδώ, στη θάλασσα. Το ' +
        'νερό είναι λίγο αλμυρό από τα βράχια που διασχίζει. Μπορείς να τον δεις από πάνω, από ' +
        'ένα πάρκο με γρασίδι και παγκάκια στην άκρη του γκρεμού, όπου το νερό εξαφανίζεται ' +
        'κάτω από τα πόδια σου. Ή μπορείς να τον δεις από κάτω, από μια βάρκα που ξεκινάει από ' +
        'το παλιό λιμάνι και σε πηγαίνει ως τη βάση του, τόσο κοντά που σε βρέχουν οι ' +
        'σταγόνες. Όταν έχει ήλιο, στον αφρό σχηματίζεται ένα ουράνιο τόξο.',
      en:
        'At the eastern edge of the city something rare happens: a whole river reaches the ' +
        'edge of the cliffs and drops forty metres straight into the sea, with a roar you can ' +
        'hear from far away. It is the Düden, a river with a strange life. It starts in the ' +
        'mountains, disappears underground, comes out again, makes a first waterfall in a park ' +
        'north of the city, and ends here, in the sea. Its water is slightly salty from the ' +
        'rocks it passes through. You can see it from above, from a park with grass and ' +
        'benches on the cliff edge, where the water vanishes beneath your feet. Or you can see ' +
        'it from below, from a boat that leaves the old harbour and takes you to its foot, so ' +
        'close that the spray wets you. When the sun is out, a rainbow forms in the foam.',
    },
    facts: [
      {
        el: 'Το ποτάμι πέφτει σαράντα μέτρα κατευθείαν στη θάλασσα.',
        en: 'The river drops forty metres straight into the sea.',
      },
      {
        el: 'Ο Ντουντέν χάνεται κάτω από τη γη και βγαίνει ξανά.',
        en: 'The Düden vanishes underground and comes out again.',
      },
      {
        el: 'Μπορείς να τον δεις από πάνω, από ένα πάρκο, ή από κάτω, με βάρκα.',
        en: 'You can see it from above, from a park, or from below, by boat.',
      },
    ],
    location: {
      lat: 36.85097,
      lng: 30.78344,
      anchor: 'viewpoint',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q72177820', deltaM: 0 }],
      verifiedAt: '2026-09-19',
      note: 'Grade C: Wikidata alone for the falls; the point is at the cliff edge where the river drops.',
      map: { x: 0.958, y: 0.881 },
    },
    question: {
      q: { el: 'Πού πέφτει το νερό του καταρράκτη;', en: 'Where does the waterfall’s water land?' },
      answers: [
        { el: 'Κατευθείαν στη θάλασσα', en: 'Straight into the sea' },
        { el: 'Σε μια λίμνη', en: 'In a lake' },
        { el: 'Σε μια σπηλιά', en: 'Into a cave' },
        {
          el: 'Σε μια μεγάλη δεξαμενή που δίνει νερό σε όλη την πόλη',
          en: 'Into a big tank that supplies water to the whole city',
        },
      ],
      explanation: {
        el: 'Σαράντα μέτρα από τα βράχια. Με βάρκα φτάνεις τόσο κοντά που σε βρέχουν οι σταγόνες.',
        en: 'Forty metres off the cliffs. By boat you get so close that the spray wets you.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'antalya-old-town',
    cityId: 'antalya',
    emoji: '🕌',
    name: { el: 'Μέσα στα τείχη', en: 'Inside the walls' },
    promise: {
      el: 'Μια πύλη για αυτοκράτορα, ένας μιναρές με αυλάκια, ένας κομμένος μιναρές, ένας πύργος-μυστήριο και ένα λιμάνι κρυμμένο στα βράχια.',
      en: 'A gate for an emperor, a grooved minaret, a broken minaret, a mystery tower and a harbour hidden in the cliffs.',
    },
    placeIds: [
      'antalya-hadrian-gate',
      'antalya-clock-tower',
      'antalya-yivli-minare',
      'antalya-kesik-minare',
      'antalya-hidirlik',
      'antalya-harbour',
    ],
  },
  {
    id: 'antalya-park-and-toys',
    cityId: 'antalya',
    emoji: '🧸',
    name: { el: 'Πάρκο, παιχνίδια και βράχια', en: 'Park, toys and cliffs' },
    promise: {
      el: 'Βουνά με χιόνι απέναντι από φοίνικες, τρεις χιλιάδες παιχνίδια και ένα ποτάμι που πηδάει στη θάλασσα.',
      en: 'Snowy mountains across from palm trees, three thousand toys and a river that leaps into the sea.',
    },
    placeIds: ['antalya-karaalioglu', 'antalya-toy-museum', 'antalya-lower-duden'],
  },
  {
    id: 'antalya-west',
    cityId: 'antalya',
    emoji: '🦈',
    name: { el: 'Με το τραμ προς τα δυτικά', en: 'West by tram' },
    promise: {
      el: 'Ένας Ηρακλής που γύρισε σπίτι, καρχαρίες πάνω από το κεφάλι σου, χιόνι στη ζέστη και επτά χιλιόμετρα βότσαλα.',
      en: 'A Hercules who came home, sharks over your head, snow in the heat and seven kilometres of pebbles.',
    },
    placeIds: ['antalya-museum', 'antalya-aquarium', 'antalya-konyaalti'],
  },
];
