/**
 * WiseBot World — Budapest.
 *
 * Sixteen places, two of them museums with an interior. The second city built by
 * conversion rather than by fresh writing: all ten spots of the Explorer product on
 * `origin/main` are carried over, reshaped to this module's lengths and voice, and given
 * sourced coordinates, museums and riddles. Explorer's `riddle`, `parentHint` and
 * `onSite` fields belong to a GPS treasure hunt and are not represented here at all.
 *
 * Every coordinate is copied from `data/world/coords/budapest.json`, field for field.
 * Nothing graded `D`. No place claims an `entrance`, because no door here has been
 * measured; every point is the centroid, area or viewpoint the resolver reported.
 *
 * Judgement calls a later reader would ask about:
 *
 *  - **Nothing was dropped.** All ten Explorer spots carry a real story and all ten ship.
 *  - **One was re-pinned.** Explorer's Gellért Hill spot is a hill, and a hill is not a
 *    place a child stands: its centroid is an average of a kilometre of slope, which is
 *    exactly how Athens' Lycabettus graded D. The pin moved to the Liberty Statue on the
 *    summit (Q933182), 167 m away, which is the thing you actually walk to. The story is
 *    still the hill's.
 *  - **Six were added**, because Explorer has no model for a museum interior and no
 *    place in its ten falls under art, science, sport or museum: the Hungarian National
 *    Museum and the Museum of Fine Arts (the two interiors), the Opera House (art), the
 *    Széchenyi Bath (science), the Zoo (nature) and the Hajós pool (sport).
 *  - **Overpass was failing through most of this pass**, with 429s, a 504 and then
 *    outright fetch failures. Where a `location.note` says so, that is what the resolver
 *    recorded. OSM is only a cross-check; a failed cross-check never moved a point.
 *  - **No operator data of any kind.** Not a stop, not a route, not a line name.
 *  - **Review pass.** An independent review caught four claims that were wrong or that no
 *    source would carry, and they were fixed rather than softened: Gellért Hill's 235 m is
 *    above sea level and the hill is dolomite; the basilica's great bell is in the south
 *    tower; the zoo's palm house is NOT Eiffel's work — the zoo's own history page and the
 *    Hungarian article credit Gyula Végh and name no Paris workshop, so the claim and the
 *    question built on it are gone, replaced by the Elephant House tower, which the zoo
 *    documents; and Beethoven's 1817 Broadwood has a six-octave compass, not eighty-five
 *    keys. The National Museum's Ottoman tent was replaced by the Ottoman sabre, which the
 *    museum's own Török kor page lists in the permanent exhibition; the tent could not be
 *    confirmed to be there at all.
 *  - **The coords json is the earlier run's output and is kept deliberately.** Re-running
 *    the resolver during the review returned the identical sixteen coordinates but a
 *    different set of OSM cross-checks — Overpass answered for two other places and not for
 *    these — which is the resolver's non-determinism, not a change in any point. The
 *    committed run was kept and the `location` blocks match it field for field.
 *
 * `el` and `en` only. The other four arrive as overlay files and never as extra keys here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ----------------------------------------------------------------- parliament
  {
    id: 'budapest-parliament',
    cityId: 'budapest',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Κοινοβούλιο (Országház)', en: 'The Parliament (Országház)' },
    tagline: {
      el: 'Ένα παλάτι από πέτρινη δαντέλα, και κανένας βασιλιάς μέσα',
      en: 'A palace of stone lace, with no king inside it',
    },
    story: {
      el:
        'Πριν από περισσότερα από εκατό χρόνια η Βουδαπέστη θέλησε ένα σπίτι για τους ' +
        'νόμους της, και το θέλησε τόσο όμορφο ώστε να το θαυμάζει όλος ο κόσμος. Ο ' +
        'αρχιτέκτονας Imre Steindl το σχεδίασε σαν παραμυθένιο παλάτι, με μυτερούς ' +
        'πυργίσκους παντού και έναν κόκκινο τρούλο στη μέση. Χιλιάδες χτίστες δούλεψαν ' +
        'σχεδόν είκοσι χρόνια, ως το 1904. Μέσα υπάρχουν 691 δωμάτια, και για τα στολίδια ' +
        'χρησιμοποιήθηκαν περίπου σαράντα κιλά χρυσάφι. Το ύψος του δεν είναι τυχαίο: 96 ' +
        'μέτρα, γιατί το 896 έφτασαν σε αυτή τη γη οι Μαγυάροι, οι πρόγονοι των Ούγγρων. ' +
        'Μέσα δεν μένει κανένας βασιλιάς. Δουλεύουν οι βουλευτές, οι άνθρωποι που διάλεξε ' +
        'ο λαός για να συζητούν και να ψηφίζουν τους νόμους. Από το 2000 φυλάγεται εδώ και ' +
        'το Ιερό Στέμμα, με το οποίο στέφονταν οι παλιοί βασιλιάδες. Ο Steindl έχασε το ' +
        'φως του πριν τελειώσει το έργο και δεν είδε ποτέ το κτίριό του ολοκληρωμένο.',
      en:
        'More than a hundred years ago Budapest wanted a house for its laws, and wanted it ' +
        'beautiful enough that the whole world would come and look. The architect Imre ' +
        'Steindl designed it like a fairy-tale palace, spiked with pointed spires and ' +
        'capped with a red dome in the middle. Thousands of builders worked on it for ' +
        'almost twenty years, until 1904. Inside are 691 rooms, and about forty kilograms ' +
        'of gold went into the decoration. Its height is not an accident: 96 metres, ' +
        'because in the year 896 the Magyars, the ancestors of the Hungarians, arrived in ' +
        'this land. No king lives inside. The people who work here are the members of ' +
        'parliament, chosen by the country to argue about the laws and then vote on them. ' +
        'Since the year 2000 the Holy Crown of the old kings has been kept here too. ' +
        'Steindl lost his sight before the work was done and never saw his building ' +
        'finished.',
    },
    facts: [
      {
        el: 'Έχει 691 δωμάτια και 29 σκάλες.',
        en: 'It has 691 rooms and 29 staircases.',
      },
      {
        el: 'Ο τρούλος του φτάνει τα 96 μέτρα, για να θυμίζει το 896, όταν ήρθαν οι Μαγυάροι.',
        en: 'Its dome rises 96 metres, a reminder of 896, the year the Magyars arrived.',
      },
      {
        el: 'Ο αρχιτέκτονάς του, ο Imre Steindl, τυφλώθηκε πριν τελειώσει το κτίριο.',
        en: 'Its architect, Imre Steindl, went blind before the building was finished.',
      },
    ],
    location: {
      lat: 47.50694,
      lng: 19.04556,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q11819', deltaM: 0 },
        { kind: 'osm', ref: 'relation/3199085', deltaM: 29 },
        { kind: 'wikipedia', ref: 'Hungarian Parliament Building', deltaM: 1 },
      ],
      verifiedAt: '2026-09-13',
      findIt: {
        el: 'Στην πλατεία Kossuth Lajos tér. Η πλευρά με τη μεγάλη σκάλα και τα λιοντάρια κοιτάζει την πλατεία, όχι το ποτάμι.',
        en: 'On Kossuth Lajos tér. The side with the great stair and the lions faces the square, not the river.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το κτίριο έχει ύψος ακριβώς 96 μέτρα;',
        en: 'Why is the building exactly 96 metres tall?',
      },
      answers: [
        {
          el: 'Θυμίζει το 896, όταν ήρθαν οι Μαγυάροι',
          en: 'It remembers 896, the year the Magyars came',
        },
        {
          el: 'Τόσο ψηλά έφταναν οι σκαλωσιές τους',
          en: 'That was as high as the scaffolding reached',
        },
        {
          el: 'Το μέτρησαν από το βάθος του Δούναβη δίπλα',
          en: 'They measured it from the depth of the Danube',
        },
        {
          el: 'Ένα μέτρο για κάθε δωμάτιο του πρώτου σχεδίου',
          en: 'One metre for every room in the first plan',
        },
      ],
      explanation: {
        el:
          'Το 896 οι Μαγυάροι εγκαταστάθηκαν σε αυτή τη γη. Χίλια χρόνια αργότερα η πόλη ' +
          'έχτισε δύο κτίρια ακριβώς 96 μέτρων, για να το θυμούνται όλοι.',
        en:
          'In 896 the Magyars settled in this land. A thousand years later the city built ' +
          'two buildings exactly 96 metres high, so that everyone would remember.',
      },
    },
  },

  // -------------------------------------------------------------------- basilica
  {
    id: 'budapest-basilica',
    cityId: 'budapest',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Βασιλική του Αγίου Στεφάνου', en: 'St Stephen’s Basilica' },
    tagline: {
      el: 'Ο τρούλος της έπεσε μια φορά και ξαναχτίστηκε πιο γερός',
      en: 'Its dome fell down once and was rebuilt stronger',
    },
    story: {
      el:
        'Γύρω στο έτος 1000 ο Στέφανος, Ίστβαν στα ουγγρικά, έγινε ο πρώτος βασιλιάς της ' +
        'Ουγγαρίας και έδωσε στους Μαγυάρους νόμους, εκκλησίες και μια πρωτεύουσα. ' +
        'Οκτακόσια χρόνια αργότερα η πόλη αποφάσισε να χτίσει τη μεγαλύτερη εκκλησία της ' +
        'στο όνομά του. Το έργο ξεκίνησε το 1851 και πήγαινε καλά, ώσπου το 1868 ο ' +
        'μισοτελειωμένος τρούλος γκρεμίστηκε με τρομερό πάταγο. Κανείς δεν σκοτώθηκε, ' +
        'αλλά οι χτίστες έπρεπε να αρχίσουν σχεδόν από την αρχή. Ένας νέος αρχιτέκτονας, ' +
        'ο Miklós Ybl, σχεδίασε τον τρούλο πιο γερό, και η εκκλησία τελείωσε το 1905: ' +
        'πάνω από πενήντα χρόνια δουλειάς. Ο τρούλος έφτασε τα 96 μέτρα, ακριβώς όσο και ' +
        'το Κοινοβούλιο, και για πολλά χρόνια κανένα κτίριο στο κέντρο δεν επιτρεπόταν να ' +
        'τα ξεπεράσει. Μέσα, σε ένα μικρό παρεκκλήσι, φυλάγεται το δεξί χέρι του βασιλιά ' +
        'Στεφάνου, και στον έναν πύργο κρέμεται η μεγαλύτερη καμπάνα της χώρας.',
      en:
        'Around the year 1000, Stephen — István in Hungarian — became the first king of ' +
        'Hungary and gave the Magyars laws, churches and a capital. Eight hundred years ' +
        'later the city decided to build its largest church in his name. Work began in ' +
        '1851 and went well, until in 1868 the half-finished dome came down with a ' +
        'terrible crash. Nobody was killed, but the builders had to start again almost ' +
        'from scratch. A new architect, Miklós Ybl, designed the dome stronger, and the ' +
        'church was finished in 1905: more than fifty years of work. The dome reached 96 ' +
        'metres, exactly the same as the Parliament, and for many years no building in the ' +
        'city centre was allowed to go higher than the two of them. Inside, in a small ' +
        'chapel, rests the right hand of King Stephen, and in one tower hangs the biggest ' +
        'bell in the country.',
    },
    facts: [
      {
        el: 'Χτιζόταν από το 1851 ως το 1905, με έναν γκρεμισμένο τρούλο στη μέση.',
        en: 'It was built from 1851 to 1905, with a collapsed dome in the middle of that.',
      },
      {
        el: 'Ο τρούλος της έχει ύψος 96 μέτρα, ίδιο με του Κοινοβουλίου.',
        en: 'Its dome is 96 metres high, the same as the Parliament’s.',
      },
      {
        el: 'Στον νότιο πύργο της κρέμεται η μεγαλύτερη καμπάνα της Ουγγαρίας.',
        en: 'The largest bell in Hungary hangs in its southern tower.',
      },
    ],
    location: {
      lat: 47.50083,
      lng: 19.05389,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q338665', deltaM: 0 },
        { kind: 'wikipedia', ref: "St. Stephen's Basilica", deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'Overpass answered 504 on this pass, so there is no OSM cross-check; Wikidata and Wikipedia land on the same point.',
      findIt: {
        el: 'Η είσοδος με τους δύο πύργους βλέπει στην πλατεία Szent István tér, στην πεζόδρομη πλευρά.',
        en: 'The entrance between the two towers faces Szent István tér, on the pedestrian side.',
      },
    },
    question: {
      q: {
        el: 'Τι έπαθε ο τρούλος της εκκλησίας το 1868;',
        en: 'What happened to the church’s dome in 1868?',
      },
      answers: [
        {
          el: 'Γκρεμίστηκε ολόκληρος και ξαναχτίστηκε πιο γερός',
          en: 'It collapsed completely and was rebuilt stronger',
        },
        {
          el: 'Τον χτύπησε κεραυνός και έμεινε μαύρος για χρόνια',
          en: 'Lightning struck it and left it black for years',
        },
        {
          el: 'Τον σκέπασαν με χρυσάφι για τη γιορτή του βασιλιά',
          en: 'It was gilded for the feast day of the first king',
        },
        {
          el: 'Τον μετακίνησαν για να χωρέσει η μεγάλη καμπάνα',
          en: 'It was moved to make room for the enormous bell',
        },
      ],
      explanation: {
        el:
          'Ο μισοτελειωμένος τρούλος έπεσε το 1868. Ο Miklós Ybl τον ξανασχεδίασε πιο ' +
          'γερό, και γι’ αυτό η εκκλησία άργησε πάνω από πενήντα χρόνια.',
        en:
          'The half-finished dome fell in 1868. Miklós Ybl redesigned it stronger, which ' +
          'is why the church took more than fifty years.',
      },
    },
  },

  // ------------------------------------------------------------------ chain bridge
  {
    id: 'budapest-chain-bridge',
    cityId: 'budapest',
    emoji: '🦁',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Η Γέφυρα των Αλυσίδων', en: 'The Chain Bridge' },
    tagline: {
      el: 'Χτίστηκε επειδή ένας άνθρωπος έχασε μια κηδεία',
      en: 'Built because one man missed a funeral',
    },
    story: {
      el:
        'Πριν από περίπου διακόσια χρόνια η Μπούντα και η Πέστη ήταν δύο ξεχωριστές ' +
        'πόλεις. Για να περάσεις απέναντι έπαιρνες βάρκα, και τον χειμώνα περπατούσες ' +
        'πάνω στον παγωμένο Δούναβη. Όταν όμως ο πάγος έσπαγε, δεν περνούσε τίποτα. Ο ' +
        'κόμης István Széchenyi έμεινε έτσι κολλημένος στη λάθος όχθη για μια βδομάδα ' +
        'και δεν πρόλαβε την κηδεία του πατέρα του απέναντι. Ορκίστηκε να φτιάξει μια ' +
        'γέφυρα που να στέκεται όλο τον χρόνο. Ο Άγγλος μηχανικός William Tierney ' +
        'Clark τη σχεδίασε κρεμασμένη από τεράστιες σιδερένιες αλυσίδες, και ένας Σκωτσέζος με το ίδιο επίθετο, ο Adam ' +
        'Clark, την έχτισε επί τόπου, χωρίς να είναι συγγενείς. Άνοιξε το 1849 και ήταν η ' +
        'πρώτη μόνιμη γέφυρα της πόλης. Στο τέλος του μεγάλου πολέμου, το 1945, ' +
        'ανατινάχτηκε. Οι κάτοικοι την ξαναέχτισαν και την άνοιξαν το 1949, ακριβώς εκατό ' +
        'χρόνια μετά την πρώτη φορά. Τέσσερα πέτρινα λιοντάρια φυλάνε ακόμα τις άκρες της.',
      en:
        'About two hundred years ago Buda and Pest were two separate towns. To cross you ' +
        'took a boat, and in winter you walked over the frozen Danube. But when the ice ' +
        'was breaking up, nothing crossed at all. Count István Széchenyi was stuck on the ' +
        'wrong bank for a week and missed his father’s funeral on the other side. He ' +
        'swore to build a bridge that would stand all year round. The English engineer ' +
        'William Tierney Clark designed it, hanging from enormous iron chains, and a Scot with the ' +
        'same surname, Adam Clark, built it on the spot — the two were no relation at all. ' +
        'It opened in 1849 as the city’s first permanent bridge. At the end of the great ' +
        'war, in 1945, it was blown up. The people of the city rebuilt it and opened it ' +
        'again in 1949, exactly one hundred years after the first time. Four stone lions ' +
        'still guard its ends.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1849 και ήταν η πρώτη μόνιμη γέφυρα ανάμεσα στην Μπούντα και την Πέστη.',
        en: 'It opened in 1849, the first permanent bridge between Buda and Pest.',
      },
      {
        el: 'Ανατινάχτηκε το 1945 και άνοιξε ξανά το 1949, εκατό χρόνια μετά την πρώτη φορά.',
        en: 'It was blown up in 1945 and reopened in 1949, a century after the first time.',
      },
      {
        el: 'Τα τέσσερα λιοντάρια της έχουν γλώσσες: απλώς δεν φαίνονται από κάτω.',
        en: 'Its four lions do have tongues: you simply cannot see them from below.',
      },
    ],
    location: {
      lat: 47.49891,
      lng: 19.04353,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q465534', deltaM: 0 },
        { kind: 'osm', ref: 'way/197110386', deltaM: 15 },
        { kind: 'wikipedia', ref: 'Széchenyi Chain Bridge', deltaM: 7 },
      ],
      verifiedAt: '2026-09-13',
      findIt: {
        el: 'Το σημείο είναι η μέση της γέφυρας. Τα λιοντάρια στέκονται στις δύο άκρες, στην πλατεία Széchenyi István tér και στην Clark Ádám tér.',
        en: 'The point is the middle of the bridge. The lions sit at the two ends, on Széchenyi István tér and Clark Ádám tér.',
      },
    },
    question: {
      q: {
        el: 'Τι έκαναν οι άνθρωποι τον χειμώνα, πριν υπάρξει η γέφυρα;',
        en: 'What did people do in winter, before the bridge existed?',
      },
      answers: [
        {
          el: 'Περπατούσαν πάνω στον παγωμένο Δούναβη',
          en: 'They walked across the frozen Danube',
        },
        {
          el: 'Έσκαβαν τούνελ κάτω από το ποτάμι',
          en: 'They dug a tunnel under the river',
        },
        {
          el: 'Έδεναν βάρκες τη μια δίπλα στην άλλη',
          en: 'They tied boats side by side',
        },
        {
          el: 'Περίμεναν στην όχθη ως την άνοιξη',
          en: 'They waited on the bank until the spring',
        },
      ],
      explanation: {
        el:
          'Ο Δούναβης πάγωνε και ο κόσμος περνούσε με τα πόδια. Όταν όμως ο πάγος έσπαγε ' +
          'σε κομμάτια, το πέρασμα σταματούσε για μέρες.',
        en:
          'The Danube froze and people crossed on foot. But when the ice broke into ' +
          'pieces, crossing stopped for days at a time.',
      },
    },
  },

  // ------------------------------------------------------------------- buda castle
  {
    id: 'budapest-buda-castle',
    cityId: 'budapest',
    emoji: '🦅',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Κάστρο της Μπούντα', en: 'Buda Castle' },
    tagline: {
      el: 'Γκρεμίστηκε και ξαναχτίστηκε περισσότερες φορές από όσες θυμάται κανείς',
      en: 'Wrecked and rebuilt more times than anyone can remember',
    },
    story: {
      el:
        'Πριν από περισσότερα από 750 χρόνια ο βασιλιάς Béla ο Δ΄ έχτισε κάστρο σε αυτόν ' +
        'τον λόφο, γιατί από ψηλά έβλεπε κάθε εχθρό που πλησίαζε από την πεδιάδα. Οι ' +
        'βασιλιάδες που ήρθαν μετά το μεγάλωσαν, και ο Ματθίας το έκανε ένα από τα πιο ' +
        'λαμπρά παλάτια της Ευρώπης, με βιβλιοθήκη, κήπους και σιντριβάνια. Ύστερα ' +
        'ήρθαν πολιορκίες, φωτιές και σεισμοί. Το κάστρο γκρεμίστηκε και ξαναχτίστηκε ' +
        'τόσες φορές που σήμερα σχεδόν τίποτα από αυτό που βλέπεις δεν είναι μεσαιωνικό: ' +
        'η τελευταία μεγάλη καταστροφή έγινε στον Β΄ Παγκόσμιο Πόλεμο, και η τελευταία ' +
        'μεγάλη αναστήλωση κράτησε δεκαετίες. Στην άκρη του λόφου στέκεται ένα μπρούντζινο ' +
        'πουλί με σπαθί στα νύχια: ο Turul, το μυθικό γεράκι που στους παλιούς θρύλους ' +
        'οδήγησε τους Μαγυάρους ως εδώ. Σήμερα στο παλάτι δεν μένει βασιλιάς — μέσα ' +
        'υπάρχουν μουσεία και βιβλιοθήκη — ενώ κάτω από τον λόφο απλώνονται χιλιόμετρα ' +
        'από σπηλιές και σήραγγες.',
      en:
        'More than 750 years ago King Béla IV built a castle on this hill, because from up ' +
        'here he could see any enemy coming across the plain. The kings who followed made ' +
        'it bigger, and Matthias turned it into one of the most splendid palaces in Europe, ' +
        'with a library, gardens and fountains. Then came sieges, fires and earthquakes. ' +
        'The castle was wrecked and rebuilt so many times that almost nothing you see today ' +
        'is medieval: the last great destruction was in the Second World War, and the last ' +
        'great restoration took decades. At the edge of the hill stands a bronze bird with ' +
        'a sword in its claws: the Turul, the mythical falcon that in the old legends led ' +
        'the Magyars here. No king lives in the palace now — inside there are museums and a ' +
        'library — while under the hill run kilometres of caves and tunnels.',
    },
    facts: [
      {
        el: 'Το πρώτο κάστρο χτίστηκε εδώ από τον βασιλιά Béla Δ΄ τον 13ο αιώνα.',
        en: 'The first castle here was built by King Béla IV in the 13th century.',
      },
      {
        el: 'Ο Turul, το μπρούντζινο γεράκι στην άκρη του λόφου, κρατάει σπαθί στα νύχια του.',
        en: 'The Turul, the bronze falcon at the edge of the hill, holds a sword in its claws.',
      },
      {
        el: 'Κάτω από τον λόφο υπάρχει λαβύρινθος από φυσικές σπηλιές, χιλιομέτρων.',
        en: 'Under the hill lies a labyrinth of natural caves, kilometres long.',
      },
    ],
    location: {
      lat: 47.49611,
      lng: 19.03972,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q46313', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Buda Castle', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'Overpass answered 429 on this pass, so there is no OSM cross-check. The point is the whole palace complex, not a door: it is an area on purpose.',
      findIt: {
        el: 'Ο λόφος έχει πολλές ανηφόρες. Ο σχοινοσιδηρόδρομος Sikló ξεκινάει από την Clark Ádám tér, στην άκρη της Γέφυρας των Αλυσίδων, και σε αφήνει δίπλα στον Turul.',
        en: 'The hill has many ways up. The Sikló funicular starts at Clark Ádám tér, at the end of the Chain Bridge, and leaves you beside the Turul.',
      },
    },
    question: {
      q: {
        el: 'Γιατί διάλεξε ο βασιλιάς αυτόν τον λόφο για το κάστρο του;',
        en: 'Why did the king choose this hill for his castle?',
      },
      answers: [
        {
          el: 'Από ψηλά έβλεπε τους εχθρούς να πλησιάζουν',
          en: 'From up there he could see enemies coming',
        },
        {
          el: 'Ήταν το μόνο σημείο με πηγή πόσιμου νερού',
          en: 'It was the only spot with a drinking spring',
        },
        {
          el: 'Ο λόφος είχε πέτρα που κοβόταν εύκολα σε τούβλα',
          en: 'The hill was stone that cut easily into blocks',
        },
        {
          el: 'Ήθελε να είναι κοντά στο παλιό μοναστήρι',
          en: 'He wanted to be close to the old monastery',
        },
      ],
      explanation: {
        el:
          'Ένα κάστρο σε λόφο βλέπει μακριά. Ο Béla Δ΄ ήθελε να μην μπορεί να τον ' +
          'πλησιάσει κανείς κρυφά μέσα από την πεδιάδα.',
        en:
          'A castle on a hill can see a long way. Béla IV wanted nobody to be able to ' +
          'creep up on him across the flat land.',
      },
    },
  },

  // --------------------------------------------------------------- matthias church
  {
    id: 'budapest-matthias-church',
    cityId: 'budapest',
    emoji: '🐦‍⬛',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο Ναός του Ματθία', en: 'Matthias Church' },
    tagline: {
      el: 'Στέγη σαν δέρμα δράκου και ένα κοράκι με δαχτυλίδι',
      en: 'A roof like dragon skin and a raven with a ring',
    },
    story: {
      el:
        'Αυτή η εκκλησία είναι περίπου 750 ετών και έχει αλλάξει πρόσωπο περισσότερες ' +
        'φορές από όσες θα φανταζόσουν. Ο βασιλιάς Ματθίας, που κυβέρνησε πριν από πάνω ' +
        'από πεντακόσια χρόνια, της έχτισε τον ψηλό πύργο και παντρεύτηκε εδώ και τις δύο ' +
        'γυναίκες του. Το σύμβολό του ήταν ένα κοράκι με δαχτυλίδι στο ράμφος, και θα το ' +
        'βρεις σκαλισμένο σε πολλά σημεία. Όταν ήρθαν οι Οθωμανοί, η εκκλησία έγινε τζαμί ' +
        'για σχεδόν εκατόν πενήντα χρόνια και οι τοιχογραφίες της σκεπάστηκαν με ασβέστη. ' +
        'Τον 19ο αιώνα ο αρχιτέκτονας Frigyes Schulek την ξανάφτιαξε σαν παραμυθένιο ναό: ' +
        'έβαλε πέτρινα τέρατα στους τοίχους και μια στέγη από χρωματιστά κεραμικά ' +
        'πλακάκια του εργοστασίου Zsolnay, που λάμπουν σε ρόμβους πράσινους, κίτρινους και ' +
        'καφέ. Εδώ στέφθηκε βασιλιάς της Ουγγαρίας ο αυτοκράτορας Φραγκίσκος Ιωσήφ το ' +
        '1867, και για τη στέψη ο Φραντς Λιστ έγραψε μια ολόκληρη λειτουργία.',
      en:
        'This church is about 750 years old and has changed its face more times than you ' +
        'would guess. King Matthias, who ruled more than five hundred years ago, gave it ' +
        'the tall tower and married both of his wives here. His emblem was a raven with a ' +
        'ring in its beak, and you will find it carved all over the place. When the ' +
        'Ottomans came, the church became a mosque for almost a hundred and fifty years and ' +
        'its wall paintings were covered with whitewash. In the 19th century the architect ' +
        'Frigyes Schulek made it over as a fairy-tale church: he put stone monsters on the ' +
        'walls and a roof of coloured ceramic tiles from the Zsolnay factory, glittering in ' +
        'diamonds of green, yellow and brown. Emperor Franz Joseph was crowned King of ' +
        'Hungary here in 1867, and for the coronation Franz Liszt wrote a whole mass.',
    },
    facts: [
      {
        el: 'Η στέγη της είναι στρωμένη με χρωματιστά κεραμικά πλακάκια Zsolnay.',
        en: 'Its roof is laid with coloured Zsolnay ceramic tiles.',
      },
      {
        el: 'Για σχεδόν 150 χρόνια, στα χρόνια των Οθωμανών, λειτουργούσε ως τζαμί.',
        en: 'For almost 150 years, under the Ottomans, it worked as a mosque.',
      },
      {
        el: 'Το επίσημο όνομά της είναι Ναός της Παναγίας, αλλά όλοι τη λένε με το όνομα του Ματθία.',
        en: 'Its official name is the Church of Our Lady, but everyone uses King Matthias’s name.',
      },
    ],
    location: {
      lat: 47.50194,
      lng: 19.03417,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q493133', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Matthias Church', deltaM: 1 },
      ],
      verifiedAt: '2026-09-13',
      note: 'Overpass answered 429 on this pass, so there is no OSM cross-check; Wikidata and Wikipedia agree to 1 m.',
      findIt: {
        el: 'Στην πλατεία Szentháromság tér. Η είσοδος των επισκεπτών είναι στο πλάι, όχι κάτω από τη μεγάλη ροζέτα.',
        en: 'On Szentháromság tér. The visitors’ door is at the side, not under the great rose window.',
      },
    },
    question: {
      q: {
        el: 'Τι κρατάει στο ράμφος του το κοράκι του βασιλιά Ματθία;',
        en: 'What does King Matthias’s raven hold in its beak?',
      },
      answers: [
        { el: 'Ένα δαχτυλίδι, από έναν παλιό θρύλο', en: 'A ring, from an old legend about him' },
        { el: 'Ένα κλειδί από τη βιβλιοθήκη του', en: 'A key from his palace library' },
        { el: 'Ένα φτερό γραφής, γιατί αγαπούσε τα βιβλία', en: 'A quill, because he loved his books' },
        { el: 'Ένα κόκκινο μούρο από τους κήπους', en: 'A red berry from the castle gardens' },
      ],
      explanation: {
        el:
          'Ένας θρύλος λέει ότι ένα κοράκι άρπαξε το δαχτυλίδι του μικρού Ματθία. Η ' +
          'οικογένειά του ονομάστηκε Corvinus, που στα λατινικά σημαίνει «κοράκι».',
        en:
          'A legend says a raven snatched young Matthias’s ring. His family took the name ' +
          'Corvinus, which is Latin for raven.',
      },
    },
  },

  // ------------------------------------------------------------ fisherman's bastion
  {
    id: 'budapest-fishermans-bastion',
    cityId: 'budapest',
    emoji: '🏰',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Ο Προμαχώνας των Ψαράδων', en: 'The Fisherman’s Bastion' },
    tagline: {
      el: 'Μοιάζει με κάστρο, αλλά δεν φύλαξε ποτέ τίποτα',
      en: 'It looks like a castle but never defended anything',
    },
    story: {
      el:
        'Μη σε ξεγελάσει η όψη του. Αυτό το κάτασπρο «κάστρο», με τους μυτερούς πύργους ' +
        'και τις στριφογυριστές σκάλες, δεν είδε ποτέ μάχη και δεν σχεδιάστηκε ποτέ για ' +
        'να δει. Χτίστηκε ανάμεσα στο 1895 και το 1902, όταν η Ουγγαρία γιόρταζε χίλια ' +
        'χρόνια από τον ερχομό των Μαγυάρων, και ο αρχιτέκτονας Frigyes Schulek το ' +
        'σκέφτηκε ως ένα τεράστιο μπαλκόνι: ένα μέρος όπου στέκεσαι και κοιτάς. Και ' +
        'πράγματι, από τις καμάρες του βλέπεις τον Δούναβη, τις γέφυρες και, ακριβώς ' +
        'απέναντι, το Κοινοβούλιο. Έχει επτά πύργους, έναν για κάθε φυλή που ήρθε με τα ' +
        'άλογά της το 896. Το όνομά του δεν έχει σχέση με βασιλιάδες: το πήρε από τη ' +
        'συντεχνία των ψαράδων, που στον Μεσαίωνα φύλαγε αυτό ακριβώς το κομμάτι του ' +
        'τείχους και είχε την ψαραγορά της λίγο πιο κάτω. Μπροστά του, πάνω σε μπρούντζινο ' +
        'άλογο, στέκεται ο βασιλιάς Στέφανος.',
      en:
        'Do not be fooled by the look of it. This snow-white “castle”, with its pointed ' +
        'towers and twisting stairs, never saw a battle and was never designed to. It was ' +
        'built between 1895 and 1902, while Hungary was celebrating a thousand years since ' +
        'the Magyars arrived, and the architect Frigyes Schulek thought of it as an ' +
        'enormous balcony: a place where you stand and look. And you do — from its arches ' +
        'you see the Danube, the bridges and, straight across the water, the Parliament. It ' +
        'has seven towers, one for each tribe that rode in during 896. Its name has nothing ' +
        'to do with kings: it comes from the fishermen’s guild, who in the Middle Ages ' +
        'guarded this exact stretch of wall and kept their fish market just below. In front ' +
        'of it, on a bronze horse, sits King Stephen.',
    },
    facts: [
      {
        el: 'Έχει επτά πύργους, έναν για κάθε φυλή των Μαγυάρων.',
        en: 'It has seven towers, one for each Magyar tribe.',
      },
      {
        el: 'Χτίστηκε από το 1895 ως το 1902, μόνο και μόνο για τη θέα.',
        en: 'It was built from 1895 to 1902, purely for the view.',
      },
      {
        el: 'Το όνομά του το πήρε από τη συντεχνία των ψαράδων του Μεσαίωνα.',
        en: 'Its name comes from the medieval fishermen’s guild.',
      },
    ],
    location: {
      lat: 47.50222,
      lng: 19.03472,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q493117', deltaM: 0 },
        { kind: 'osm', ref: 'relation/17948384', deltaM: 12 },
        { kind: 'wikipedia', ref: "Fisherman's Bastion", deltaM: 59 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The bastion is a long terrace, so Wikipedia\'s point sits 59 m along it. Two sources inside 30 m, hence B.',
      findIt: {
        el: 'Ακριβώς πίσω από τον Ναό του Ματθία, προς το ποτάμι. Οι κάτω βεράντες είναι ελεύθερες για όλους.',
        en: 'Directly behind Matthias Church, on the river side. The lower terraces are open to everyone.',
      },
    },
    question: {
      q: {
        el: 'Γιατί χτίστηκε ο προμαχώνας;',
        en: 'Why was the bastion built?',
      },
      answers: [
        {
          el: 'Για να στέκονται οι άνθρωποι και να κοιτάζουν',
          en: 'So that people could stand and look out',
        },
        {
          el: 'Για να κρύβονται μέσα του οι ψαράδες',
          en: 'So the fishermen could shelter inside',
        },
        {
          el: 'Για να σταματήσει τα κανόνια από απέναντι',
          en: 'To stop the cannon fire from across the river',
        },
        {
          el: 'Για να στηρίξει τον λόφο που γλιστρούσε',
          en: 'To hold up the hill, which was slipping',
        },
      ],
      explanation: {
        el:
          'Είναι μπαλκόνι, όχι οχυρό. Χτίστηκε για τη γιορτή των χιλίων χρόνων, με μοναδικό ' +
          'σκοπό να έχει η πόλη ένα ωραίο μέρος για να κοιτάει.',
        en:
          'It is a balcony, not a fort. It was built for the thousand-year celebrations, ' +
          'with no purpose except giving the city a fine place to look from.',
      },
    },
  },

  // ---------------------------------------------------- gellért hill and liberty
  {
    id: 'budapest-liberty-statue',
    cityId: 'budapest',
    emoji: '🌄',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Ο λόφος Gellért και το Άγαλμα της Ελευθερίας', en: 'Gellért Hill and the Liberty Statue' },
    tagline: {
      el: 'Ο λόφος με το ζεστό νερό στα πόδια του',
      en: 'The hill with hot water at its feet',
    },
    story: {
      el:
        'Ο λόφος υψώνεται 235 μέτρα πάνω από τη θάλασσα και είναι ένας τεράστιος βράχος ' +
        'από δολομίτη, γεμάτος ρωγμές. Πήρε το όνομά του από τον Gellért, έναν επίσκοπο ' +
        'από την Ιταλία που δίδασκε τον γιο του βασιλιά Στεφάνου και σκοτώθηκε εδώ σε μια ' +
        'εξέγερση, πριν από περίπου χίλια χρόνια. Στην κορυφή, οι Αυστριακοί έχτισαν το ' +
        '1854 ένα φρούριο, την Citadella, για να επιτηρούν την πόλη από ψηλά· οι κάτοικοι ' +
        'δεν το συμπάθησαν ποτέ. Δίπλα του, από το 1947, στέκεται μια γυναίκα από χαλκό ' +
        'που σηκώνει ψηλά ένα φύλλο φοίνικα, παλιό σύμβολο της ειρήνης. Το άγαλμα έχει ύψος ' +
        'δεκατέσσερα μέτρα και με το βάθρο του φτάνει τα σαράντα, οπότε φαίνεται από όλη ' +
        'την πόλη. Στα πόδια του λόφου συμβαίνει το πιο περίεργο: από τις ρωγμές του ' +
        'βράχου βγαίνει νερό ζεστό, όχι από τον ήλιο αλλά από τα βάθη της γης. Δύο λουτρά, ' +
        'το Rudas και το Gellért, γεμίζουν από αυτό εδώ και αιώνες.',
      en:
        'The hill rises 235 metres above sea level and is one enormous block of dolomite, ' +
        'full of cracks. It takes its name from Gellért, a bishop from Italy who taught ' +
        'King Stephen’s son and who was killed here in a revolt about a thousand years ago. ' +
        'On top, the Austrians built a fortress in 1854, the Citadella, to watch over the ' +
        'city from above; the people of Budapest never warmed to it. Beside it, since 1947, ' +
        'stands a woman made of bronze holding a palm leaf high over her head, an old sign ' +
        'of peace. The statue is fourteen metres tall and forty with its pedestal, so it ' +
        'can be seen from all over the city. The strangest thing happens at the foot of the ' +
        'hill: water comes out of the cracks in the rock already hot, warmed not by the sun ' +
        'but deep underground. Two bathhouses, the Rudas and the Gellért, have been filling ' +
        'from it for centuries.',
    },
    facts: [
      {
        el: 'Ο λόφος φτάνει τα 235 μέτρα πάνω από τη θάλασσα.',
        en: 'The hill reaches 235 metres above sea level.',
      },
      {
        el: 'Το άγαλμα είναι 14 μέτρα ψηλό και με το βάθρο του φτάνει τα 40.',
        en: 'The statue is 14 metres tall, and 40 metres with its pedestal.',
      },
      {
        el: 'Το λουτρό Rudas στη βάση του χτίστηκε από τους Οθωμανούς τον 16ο αιώνα.',
        en: 'The Rudas bath at its foot was built by the Ottomans in the 16th century.',
      },
    ],
    location: {
      lat: 47.48639,
      lng: 19.04806,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q933182', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Liberty Statue (Budapest)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The pin is the Liberty Statue on the summit (Q933182), not the hill (Q577122), whose centroid is an average of a kilometre of slope and is nowhere a child stands. The two points are 167 m apart. Overpass answered 429 on this pass, so there is no OSM cross-check.',
      findIt: {
        el: 'Τα σκαλοπάτια ξεκινούν από τη γέφυρα Erzsébet híd και από τη Szent Gellért tér. Η κυρία με το φύλλο φοίνικα φαίνεται από παντού: ανέβα προς αυτήν.',
        en: 'The stepped paths start at the Erzsébet híd bridge and at Szent Gellért tér. The lady with the palm leaf is visible from everywhere: climb towards her.',
      },
    },
    question: {
      q: {
        el: 'Γιατί βγαίνει ζεστό νερό στα πόδια του λόφου;',
        en: 'Why does hot water come out at the foot of the hill?',
      },
      answers: [
        {
          el: 'Ο βράχος βαθιά στη γη το ζεσταίνει',
          en: 'The rock deep underground heats it',
        },
        {
          el: 'Ο ήλιος ζεσταίνει τον βράχο όλη μέρα',
          en: 'The sun warms the rock all day long',
        },
        {
          el: 'Υπάρχει ηφαίστειο κάτω από την πόλη',
          en: 'There is a volcano under the city',
        },
        {
          el: 'Το βράζουν σε καζάνια μέσα στα λουτρά',
          en: 'It is boiled in tanks inside the baths',
        },
      ],
      explanation: {
        el:
          'Όσο πιο βαθιά πας, τόσο πιο ζεστά είναι τα πετρώματα. Το νερό της βροχής ' +
          'κατεβαίνει, ζεσταίνεται και ξαναβγαίνει: η Βουδαπέστη έχει πάνω από εκατό ' +
          'τέτοιες πηγές.',
        en:
          'The deeper you go, the hotter the rock. Rainwater sinks, warms up and comes back ' +
          'out: Budapest has more than a hundred springs like this.',
      },
    },
  },

  // --------------------------------------------------------------- heroes' square
  {
    id: 'budapest-heroes-square',
    cityId: 'budapest',
    emoji: '🐎',
    category: 'history',
    difficulty: 2,

    name: { el: 'Η Πλατεία των Ηρώων', en: 'Heroes’ Square' },
    tagline: {
      el: 'Δώρο γενεθλίων που άργησε τριάντα τρία χρόνια',
      en: 'A birthday present that arrived thirty-three years late',
    },
    story: {
      el:
        'Το 1896 η Ουγγαρία γιόρταζε χίλια χρόνια από τότε που οι Μαγυάροι ήρθαν σε αυτή ' +
        'τη γη, και αποφάσισε να χαρίσει στον εαυτό της μια πλατεία. Το μνημείο όμως ήταν ' +
        'τόσο μεγάλο που τελείωσε το 1929, τριάντα τρία χρόνια αργότερα: το δώρο έφτασε ' +
        'όταν τα παιδιά της γιορτής είχαν μεγαλώσει. Στη μέση υψώνεται κολόνα τριάντα έξι ' +
        'μέτρων με τον αρχάγγελο Γαβριήλ στην κορυφή, που κρατάει στέμμα στο ένα χέρι και ' +
        'διπλό σταυρό στο άλλο. Γύρω από τη βάση της στέκονται επτά καβαλάρηδες, οι ' +
        'αρχηγοί των επτά φυλών, με τον Árpád μπροστά από τους άλλους. Δεξιά και αριστερά ' +
        'απλώνονται δύο καμπύλες στοές με δεκατέσσερα αγάλματα βασιλιάδων και ηρώων. Δεν ' +
        'ήταν πάντα τα ίδια: μετά τον Β΄ Παγκόσμιο Πόλεμο τα αγάλματα των Αυστριακών ' +
        'αυτοκρατόρων αντικαταστάθηκαν από Ούγγρους. Μια πλατεία μπορεί να αλλάξει γνώμη ' +
        'για το ποιον θέλει να θυμάται.',
      en:
        'In 1896 Hungary was celebrating a thousand years since the Magyars came to this ' +
        'land, and decided to give itself a square. But the monument was so big that it was ' +
        'only finished in 1929, thirty-three years later: the present arrived after the ' +
        'children of the party had grown up. In the middle rises a column thirty-six metres ' +
        'high with the Archangel Gabriel on top, holding a crown in one hand and a double ' +
        'cross in the other. Around its base stand seven horsemen, the chiefs of the seven ' +
        'tribes, with Árpád in front of the rest. To left and right curve two galleries ' +
        'holding fourteen statues of kings and heroes. They have not always been the same ' +
        'ones: after the Second World War the statues of Austrian emperors were replaced ' +
        'with Hungarians. A square is allowed to change its mind about whom it remembers.',
    },
    facts: [
      {
        el: 'Η κολόνα στη μέση έχει ύψος 36 μέτρα.',
        en: 'The column in the middle is 36 metres high.',
      },
      {
        el: 'Ξεκίνησε το 1896 και τελείωσε το 1929: 33 χρόνια δουλειάς.',
        en: 'Started in 1896 and finished in 1929: 33 years of work.',
      },
      {
        el: 'Οι επτά καβαλάρηδες είναι οι αρχηγοί των επτά φυλών των Μαγυάρων.',
        en: 'The seven horsemen are the chiefs of the seven Magyar tribes.',
      },
    ],
    location: {
      lat: 47.51528,
      lng: 19.07806,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q299973', deltaM: 0 },
        { kind: 'wikipedia', ref: "Heroes' Square (Budapest)", deltaM: 38 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check, and Wikipedia sits 38 m away — which on a square this size is a different corner of the same place, not a disagreement. One agreeing source, hence C.',
      findIt: {
        el: 'Η πλατεία είναι ανοιχτή από παντού. Στάσου κάτω από την κολόνα με τον άγγελο και θα έχεις τους καβαλάρηδες γύρω σου.',
        en: 'The square is open on every side. Stand under the column with the angel and the horsemen are all around you.',
      },
    },
    question: {
      q: {
        el: 'Πόσοι είναι οι καβαλάρηδες γύρω από την κολόνα και γιατί;',
        en: 'How many horsemen stand around the column, and why?',
      },
      answers: [
        {
          el: 'Επτά, ένας για κάθε φυλή των Μαγυάρων',
          en: 'Seven, one for each Magyar tribe',
        },
        {
          el: 'Δώδεκα, όσοι και οι μήνες του χρόνου',
          en: 'Twelve, one for each month of the year',
        },
        {
          el: 'Τρεις, όσα και τα ποτάμια της χώρας',
          en: 'Three, one for each river of the country',
        },
        {
          el: 'Εννέα, όσα και τα χρόνια του χτισίματος',
          en: 'Nine, one for each year of the building work',
        },
      ],
      explanation: {
        el:
          'Επτά φυλές καβαλάρηδων έφτασαν εδώ από τις στέπες το 896, με τον Árpád ' +
          'επικεφαλής. Γι’ αυτό εκείνος στέκεται μπροστά από τους άλλους έξι.',
        en:
          'Seven tribes of horsemen arrived here from the steppes in 896, led by Árpád. ' +
          'That is why he stands in front of the other six.',
      },
    },
  },

  // ---------------------------------------------------------- vajdahunyad castle
  {
    id: 'budapest-vajdahunyad-castle',
    cityId: 'budapest',
    emoji: '🖋️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Κάστρο Vajdahunyad', en: 'Vajdahunyad Castle' },
    tagline: {
      el: 'Ένα κάστρο από χαρτόνι που έμεινε για πάντα',
      en: 'A cardboard castle that ended up staying for ever',
    },
    story: {
      el:
        'Για τη μεγάλη γιορτή του 1896 η πόλη ήθελε να δείξει με μια ματιά όλα τα διάσημα ' +
        'κτίρια της Ουγγαρίας. Ο αρχιτέκτονας Ignác Alpár σκέφτηκε ένα κόλπο: αντί να ' +
        'φτιάξει ένα κτίριο, κόλλησε μαζί κομμάτια από περισσότερα από είκοσι κάστρα, ' +
        'εκκλησίες και παλάτια. Έτσι, πύργοι του Μεσαίωνα ακουμπούν σε αίθουσες της ' +
        'Αναγέννησης και μια πτέρυγα μοιάζει με μπαρόκ παλάτι, όλα στο ίδιο κτίριο. ' +
        'Επειδή η έκθεση θα κρατούσε μόνο έναν χρόνο, το έφτιαξε από ξύλο και χαρτόνι, και ' +
        'μετά θα το γκρέμιζαν. Οι κάτοικοι όμως το αγάπησαν τόσο, που ζήτησαν να ' +
        'ξαναχτιστεί από πέτρα και τούβλο. Τελείωσε το 1908 και στέκεται από τότε. Στην ' +
        'αυλή του κάθεται ένα μπρούντζινο άγαλμα με κουκούλα που κρύβει το πρόσωπο: είναι ' +
        'ο Anonymus, ο άνθρωπος που έγραψε πρώτος την ιστορία των Ούγγρων πριν από ' +
        'οκτακόσια χρόνια και δεν είπε ποτέ πώς τον έλεγαν.',
      en:
        'For the great celebration of 1896 the city wanted to show all the famous buildings ' +
        'of Hungary at a single glance. The architect Ignác Alpár had a trick: instead of ' +
        'making one building, he glued together pieces of more than twenty castles, ' +
        'churches and palaces. So medieval towers lean on Renaissance halls and one wing ' +
        'looks like a baroque palace, all in the same place. Because the exhibition would ' +
        'only last a year, he made it of wood and cardboard, and afterwards it was to be ' +
        'pulled down. But people loved it so much that they asked for it to be rebuilt in ' +
        'stone and brick. It was finished in 1908 and has stood there ever since. In its ' +
        'courtyard sits a bronze figure in a hood that hides his face: Anonymus, the man ' +
        'who first wrote down the history of the Hungarians eight hundred years ago and ' +
        'never said what his name was.',
    },
    facts: [
      {
        el: 'Το πρώτο κτίριο, του 1896, ήταν από ξύλο και χαρτόνι.',
        en: 'The first building, in 1896, was made of wood and cardboard.',
      },
      {
        el: 'Αντιγράφει κομμάτια από περισσότερα από είκοσι κτίρια όλης της Ουγγαρίας.',
        en: 'It copies parts of more than twenty buildings from all over Hungary.',
      },
      {
        el: 'Η πένα του αγάλματος του Anonymus γυαλίζει από τα χέρια που την αγγίζουν.',
        en: 'The pen of the Anonymus statue shines from all the hands that touch it.',
      },
    ],
    location: {
      lat: 47.51528,
      lng: 19.08194,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1092030', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Vajdahunyad Castle', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check; Wikidata and Wikipedia land on the same point.',
      findIt: {
        el: 'Στο πάρκο Városliget, πίσω από την Πλατεία των Ηρώων. Περνάς μια μικρή γέφυρα πάνω από τη λίμνη και μπαίνεις από την πύλη.',
        en: 'In the Városliget park, behind Heroes’ Square. You cross a little bridge over the lake and go in through the gate.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το πρώτο κάστρο φτιάχτηκε από ξύλο και χαρτόνι;',
        en: 'Why was the first castle made of wood and cardboard?',
      },
      answers: [
        {
          el: 'Θα κρατούσε μόνο όσο η έκθεση, έναν χρόνο',
          en: 'It only had to last as long as the exhibition',
        },
        {
          el: 'Δεν είχε απομείνει πέτρα στα λατομεία της χώρας',
          en: 'No stone was left in the quarries of the country',
        },
        {
          el: 'Ήταν παιχνίδι, φτιαγμένο σε μέγεθος για παιδιά',
          en: 'It was a toy, built at a size that suited children',
        },
        {
          el: 'Έπρεπε να το τελειώσουν μέσα σε μία μόνο νύχτα',
          en: 'The whole thing had to be finished in a single night',
        },
      ],
      explanation: {
        el:
          'Ήταν σκηνικό για τη γιορτή του 1896 και θα γκρεμιζόταν. Ο κόσμος όμως το αγάπησε ' +
          'και ζήτησε να ξαναχτιστεί από πέτρα.',
        en:
          'It was a stage set for the party of 1896 and was to be pulled down. But people ' +
          'loved it and asked for it to be rebuilt in stone.',
      },
    },
  },

  // --------------------------------------------------------------- the market hall
  {
    id: 'budapest-great-market-hall',
    cityId: 'budapest',
    emoji: '🌶️',
    category: 'food',
    difficulty: 1,

    name: { el: 'Η Μεγάλη Αγορά', en: 'The Great Market Hall' },
    tagline: {
      el: 'Σιδερένιος σταθμός γεμάτος κόκκινες πιπεριές',
      en: 'An iron railway station full of red peppers',
    },
    story: {
      el:
        'Πριν από περισσότερα από εκατόν είκοσι χρόνια οι αγορές της Βουδαπέστης γίνονταν ' +
        'στους δρόμους, μέσα στη λάσπη και τη σκόνη. Η πόλη αποφάσισε να τις μαζέψει κάτω ' +
        'από μία στέγη, και ο αρχιτέκτονας Samu Pecz σχεδίασε ένα κτίριο με σιδερένιο ' +
        'σκελετό, πολύ ψηλό και γεμάτο φως, που μοιάζει περισσότερο με σιδηροδρομικό ' +
        'σταθμό παρά με μαγαζί. Λίγο πριν από τα εγκαίνια μια φωτιά κατέστρεψε τη στέγη, ' +
        'όμως την επισκεύασαν και η αγορά άνοιξε το 1897. Κάτω από το κτίριο περνούσε ' +
        'κανάλι: τα καράβια έμπαιναν από τον Δούναβη και ξεφόρτωναν μέσα στην αγορά, κάτι ' +
        'που σήμερα δεν γίνεται πια. Στο ισόγειο κρέμονται αρμαθιές από κόκκινες πιπεριές ' +
        'για πάπρικα, τη σκόνη που δίνει γεύση σχεδόν σε κάθε ουγγρικό φαγητό. Οι πιπεριές ' +
        'ήρθαν από την Αμερική πριν από πεντακόσια χρόνια και έγιναν η γεύση αυτής της ' +
        'χώρας. Στον επάνω όροφο μυρίζει lángos, τηγανητή ζύμη με σκόρδο και τυρί.',
      en:
        'More than a hundred and twenty years ago the markets of Budapest were held in the ' +
        'streets, in the mud and the dust. The city decided to gather them under one roof, ' +
        'and the architect Samu Pecz designed a building with an iron skeleton, very tall ' +
        'and full of light, that looks more like a railway station than a shop. Shortly ' +
        'before the opening a fire wrecked the roof, but it was repaired and the market ' +
        'opened in 1897. A canal ran under the building: boats came in from the Danube and ' +
        'unloaded inside the market, which no longer happens today. On the ground floor ' +
        'hang strings of red peppers for paprika, the powder that flavours almost every ' +
        'Hungarian dish. The peppers came from America five hundred years ago and became ' +
        'the taste of this country. Upstairs the whole floor smells of lángos, fried dough ' +
        'with garlic and cheese.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1897, αφού μια φωτιά κατέστρεψε τη στέγη λίγο πριν τα εγκαίνια.',
        en: 'It opened in 1897, after a fire wrecked the roof shortly before the opening.',
      },
      {
        el: 'Ένα κανάλι έφερνε τα καράβια από τον Δούναβη μέσα στο κτίριο.',
        en: 'A canal brought boats from the Danube right inside the building.',
      },
      {
        el: 'Η πάπρικα είναι σκόνη από αποξηραμένες κόκκινες πιπεριές.',
        en: 'Paprika is a powder made from dried red peppers.',
      },
    ],
    location: {
      lat: 47.48669,
      lng: 19.0588,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q195344', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Great Market Hall', deltaM: 7 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check; Wikidata and Wikipedia agree to 7 m.',
      findIt: {
        el: 'Στην πλατεία Fővám tér, δίπλα στην πράσινη γέφυρα Szabadság híd. Η μεγάλη πύλη με τη σκεπαστή καμάρα βλέπει στην πλατεία. Κλειστά τις Κυριακές.',
        en: 'On Fővám tér, beside the green Szabadság híd bridge. The big arched gateway faces the square. Closed on Sundays.',
      },
    },
    question: {
      q: {
        el: 'Πώς έφταναν παλιά τα εμπορεύματα μέσα στην αγορά;',
        en: 'How did goods once get inside the market?',
      },
      answers: [
        {
          el: 'Με καράβια, από κανάλι κάτω από το κτίριο',
          en: 'By boat, along a canal under the building',
        },
        {
          el: 'Με ένα μικρό τρένο που έμπαινε από την πύλη',
          en: 'By a small train that came in through the gate',
        },
        {
          el: 'Με ανελκυστήρες από αποθήκες στο υπόγειο',
          en: 'By lifts from storerooms in the basement',
        },
        {
          el: 'Με κάρα που ανέβαιναν ως τον πρώτο όροφο',
          en: 'By carts that drove up to the first floor',
        },
      ],
      explanation: {
        el:
          'Ένα κανάλι από τον Δούναβη περνούσε κάτω από την αγορά και τα καράβια ' +
          'ξεφόρτωναν μέσα. Σήμερα το κανάλι είναι κλειστό.',
        en:
          'A canal from the Danube ran under the market and the boats unloaded inside. ' +
          'Today the canal is closed off.',
      },
    },
  },

  // ------------------------------------------------------------- national museum
  {
    id: 'budapest-national-museum',
    cityId: 'budapest',
    emoji: '🏺',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Το Εθνικό Μουσείο της Ουγγαρίας', en: 'The Hungarian National Museum' },
    tagline: {
      el: 'Ξεκίνησε επειδή ένας κόμης χάρισε τα βιβλία του',
      en: 'It started because a count gave his books away',
    },
    story: {
      el:
        'Το 1802 ο κόμης Ferenc Széchényi έκανε κάτι ασυνήθιστο για την εποχή του: χάρισε ' +
        'ολόκληρη τη βιβλιοθήκη του, τους χάρτες του και τις συλλογές του όχι σε κάποιον ' +
        'βασιλιά αλλά στη χώρα του, ώστε να μπορεί να τα δει ο καθένας. Αυτό το δώρο έγινε ' +
        'το Εθνικό Μουσείο. Ο γιος του, ο István, έχτισε αργότερα τη Γέφυρα των Αλυσίδων· ' +
        'η οικογένεια είχε τη συνήθεια να χαρίζει πράγματα στην πόλη. Το κτίριο που ' +
        'βλέπεις σχεδιάστηκε από τον Mihály Pollack και τελείωσε το 1847: οκτώ τεράστιες ' +
        'κολόνες και μια πλατιά σκάλα, σαν αρχαίος ναός στη μέση της Πέστης. Μέσα ' +
        'φυλάγονται πράγματα που δεν μοιάζουν μεταξύ τους καθόλου: ρωμαϊκό ασήμι, ένα ' +
        'χρυσό ελάφι παλαιότερο από την Ακρόπολη, ένας μανδύας χιλίων ετών, ένα οθωμανικό ' +
        'σπαθί και ένα πιάνο που το έπαιξαν δύο διάσημοι μουσικοί. Και έξω, τα σκαλιά, που ' +
        'είναι τα ίδια διάσημα με ό,τι υπάρχει μέσα.',
      en:
        'In 1802 Count Ferenc Széchényi did something unusual for his time: he gave away ' +
        'his whole library, his maps and his collections, not to a king but to his country, ' +
        'so that anyone could come and look at them. That gift became the National Museum. ' +
        'His son István later built the Chain Bridge; giving things to the city ran in the ' +
        'family. The building you see was designed by Mihály Pollack and finished in 1847: ' +
        'eight enormous columns and a wide flight of steps, like an ancient temple dropped ' +
        'into the middle of Pest. Inside are things with almost nothing in common: Roman ' +
        'silver, a golden stag older than the Acropolis, a thousand-year-old cloak, an ' +
        'Ottoman sabre and a piano played by two famous musicians. And outside, the steps, ' +
        'which are as famous as anything kept indoors.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1802 από τη δωρεά του κόμη Ferenc Széchényi.',
        en: 'It began in 1802 with the gift of Count Ferenc Széchényi.',
      },
      {
        el: 'Το κτίριο του Mihály Pollack τελείωσε το 1847 και έχει οκτώ κολόνες μπροστά.',
        en: 'Mihály Pollack’s building was finished in 1847 and has eight columns in front.',
      },
      {
        el: 'Στη συλλογή του βρίσκεται ο μανδύας της στέψης, ραμμένος γύρω στο 1031.',
        en: 'Its collection holds the coronation mantle, sewn around the year 1031.',
      },
    ],
    location: {
      lat: 47.49111,
      lng: 19.06278,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q914141', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Hungarian National Museum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check; Wikidata and Wikipedia land on the same point. Q914141 carries «museum building» among its types, so this is the building on Múzeum körút and not the institution.',
      findIt: {
        el: 'Στη Múzeum körút. Ανεβαίνεις τα φαρδιά σκαλιά ανάμεσα στις οκτώ κολόνες· η είσοδος είναι πίσω από αυτές, στη μέση.',
        en: 'On Múzeum körút. You climb the wide steps between the eight columns; the door is behind them, in the middle.',
      },
    },
    question: {
      q: {
        el: 'Πώς ξεκίνησε αυτό το μουσείο;',
        en: 'How did this museum get started?',
      },
      answers: [
        {
          el: 'Ένας κόμης χάρισε τη βιβλιοθήκη του στη χώρα',
          en: 'A count gave his library away to the country',
        },
        {
          el: 'Ένας βασιλιάς άνοιξε τις αποθήκες του παλατιού',
          en: 'A king opened up the storerooms of his palace',
        },
        {
          el: 'Η πόλη αγόρασε μια συλλογή από την Αυστρία',
          en: 'The city bought a collection from Austria',
        },
        {
          el: 'Βρέθηκε θησαυρός στα θεμέλια του κτιρίου',
          en: 'A treasure turned up in the building’s foundations',
        },
      ],
      explanation: {
        el:
          'Ο Ferenc Széchényi έδωσε το 1802 τα βιβλία και τις συλλογές του στη χώρα, όχι ' +
          'σε κάποιον βασιλιά. Από εκείνη τη δωρεά προήλθε όλο το μουσείο.',
        en:
          'In 1802 Ferenc Széchényi gave his books and collections to the country rather ' +
          'than to a king. The whole museum grew out of that one gift.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ξεκίνα από τα σκαλιά έξω. Είναι μέρος της ιστορίας, όχι απλώς ο δρόμος προς την πόρτα.',
        en: 'Start on the steps outside. They are part of the story, not just the way to the door.',
      },
      rooms: [
        {
          id: 'budapest-national-museum-before-hungary',
          emoji: '🏺',
          name: { el: 'Πριν από την Ουγγαρία', en: 'Before Hungary' },
          intro: {
            el:
              'Πολύ πριν φτάσουν οι Μαγυάροι, εδώ ζούσαν άλλοι άνθρωποι και άφησαν πίσω ' +
              'τους πράγματα. Αυτή η αίθουσα είναι γεμάτη από ευρήματα που δεν τα έψαξε ' +
              'κανείς: τα έβγαλε ένα αλέτρι, μια σκαπάνη ή μια νεροποντή. Κοίτα τα σαν ' +
              'εκπλήξεις, γιατί ακριβώς αυτό ήταν για όποιον τα βρήκε πρώτος.',
            en:
              'Long before the Magyars arrived, other people lived here and left things ' +
              'behind. This room is full of finds nobody went looking for: a plough turned ' +
              'them up, or a spade, or a heavy rainstorm. Look at them as surprises, ' +
              'because a surprise is exactly what they were for whoever found them first.',
          },
          exhibits: [
            {
              id: 'budapest-national-museum-golden-stag',
              name: { el: 'Το χρυσό ελάφι', en: 'The golden stag' },
              blurb: {
                el:
                  'Ένα ελάφι από καθαρό χρυσάφι, μήκους περίπου τριάντα εφτά εκατοστών, ' +
                  'με τα πόδια διπλωμένα κάτω από το σώμα και κέρατα που κυματίζουν σαν ' +
                  'φλόγες. Το έφτιαξαν Σκύθες, νομάδες καβαλάρηδες, γύρω στον 6ο αιώνα ' +
                  'π.Χ., και δεν ήταν στολίδι για τοίχο: το είχαν καρφωμένο πάνω σε μια ' +
                  'σιδερένια ασπίδα. Βρέθηκε το 1928 στη Zöldhalompuszta, σε ένα χωράφι. ' +
                  'Είναι πιο παλιό από τον Παρθενώνα.',
                en:
                  'A stag of solid gold, about thirty-seven centimetres long, with its legs ' +
                  'folded under its body and antlers that ripple like flames. Scythians, ' +
                  'nomad horsemen, made it around the 6th century BC, and it was not an ' +
                  'ornament for a wall: it was fixed to the front of an iron shield. It was ' +
                  'found in 1928 at Zöldhalompuszta, in a field. It is older than the ' +
                  'Parthenon.',
              },
              question: {
                q: {
                  el: 'Πού ήταν στερεωμένο αυτό το χρυσό ελάφι;',
                  en: 'What was this golden stag fixed onto?',
                },
                answers: [
                  { el: 'Πάνω σε μια σιδερένια ασπίδα', en: 'Onto an iron shield' },
                  { el: 'Στην πόρτα ενός βασιλικού τάφου', en: 'Onto the door of a royal tomb' },
                  { el: 'Στην κορυφή ενός ξύλινου κονταριού', en: 'Onto the top of a wooden pole' },
                  { el: 'Στο μέτωπο ενός αλόγου, σαν μάσκα', en: 'Onto a horse’s brow, like a mask' },
                ],
                explanation: {
                  el: 'Ήταν το εμπρόσθιο κόσμημα μιας ασπίδας. Οι Σκύθες πολεμούσαν έφιπποι και στόλιζαν τον εξοπλισμό τους με ζώα.',
                  en: 'It was the front ornament of a shield. The Scythians fought on horseback and covered their gear with animals.',
                },
              },
            },
            {
              id: 'budapest-national-museum-seuso',
              name: { el: 'Το ασήμι του Seuso', en: 'The Seuso silver' },
              blurb: {
                el:
                  'Δεκατέσσερα ασημένια σκεύη από τη ρωμαϊκή εποχή, πιάτα, κανάτες και ' +
                  'λεκάνες, τόσο βαριά που μια πιατέλα χρειάζεται δύο χέρια. Στο ' +
                  'μεγαλύτερο πιάτο είναι χαραγμένο ένα όνομα, Seuso, μαζί με μια σκηνή ' +
                  'κυνηγιού και ένα γεύμα στην εξοχή. Ο θησαυρός βρέθηκε στην Ουγγαρία, ' +
                  'ταξίδεψε κρυφά σε άλλες χώρες και χάθηκε για δεκαετίες. Η Ουγγαρία τον ' +
                  'αγόρασε πίσω και τον έφερε σπίτι, σε δύο δόσεις, το 2014 και το 2017.',
                en:
                  'Fourteen pieces of Roman silver — plates, jugs and basins — so heavy ' +
                  'that one dish takes two hands. Cut into the largest plate is a name, ' +
                  'Seuso, together with a hunting scene and a picnic in the countryside. ' +
                  'The treasure was found in Hungary, travelled secretly to other countries ' +
                  'and disappeared for decades. Hungary bought it back and brought it home ' +
                  'in two batches, in 2014 and 2017.',
              },
              question: {
                q: {
                  el: 'Τι είναι χαραγμένο στο μεγαλύτερο πιάτο;',
                  en: 'What is cut into the largest plate?',
                },
                answers: [
                  { el: 'Ένα όνομα και μια σκηνή κυνηγιού', en: 'A name and a hunting scene' },
                  { el: 'Ένας χάρτης των δρόμων της Ρώμης', en: 'A map of the roads of Rome' },
                  { el: 'Το πρόσωπο ενός Ρωμαίου αυτοκράτορα', en: 'The face of a Roman emperor' },
                  { el: 'Οι οδηγίες για ένα ρωμαϊκό παιχνίδι', en: 'The rules of a Roman board game' },
                ],
                explanation: {
                  el: 'Το όνομα Seuso έδωσε στον θησαυρό το όνομά του. Γύρω του, ένα κυνήγι και ένα γεύμα στην εξοχή.',
                  en: 'The name Seuso is what the whole treasure is called after. Around it, a hunt and a meal outdoors.',
                },
              },
            },
            {
              id: 'budapest-national-museum-mosaic',
              name: { el: 'Το ρωμαϊκό δάπεδο', en: 'The Roman floor' },
              blurb: {
                el:
                  'Ένα ολόκληρο πάτωμα από μικρά χρωματιστά πετραδάκια, φτιαγμένο για μια ' +
                  'ρωμαϊκή αγροικία στην επαρχία που οι Ρωμαίοι έλεγαν Παννονία. Κάθε ' +
                  'κομματάκι είναι λίγο μεγαλύτερο από νύχι, και μαζί σχηματίζουν σχέδια ' +
                  'με γεωμετρικά πλαίσια και ζώα. Το δάπεδο σηκώθηκε προσεκτικά από το ' +
                  'χώμα και ξαναστρώθηκε εδώ. Ένα μωσαϊκό δεν είναι ζωγραφιά: είναι ' +
                  'παζλ χιλιάδων κομματιών που το πατούσαν καθημερινά με τα σανδάλια τους.',
                en:
                  'A whole floor made of small coloured stones, laid for a Roman farmhouse ' +
                  'in the province the Romans called Pannonia. Each piece is a little ' +
                  'bigger than a fingernail, and together they make patterns of geometric ' +
                  'borders and animals. The floor was lifted carefully out of the ground ' +
                  'and laid down again here. A mosaic is not a painting: it is a jigsaw of ' +
                  'thousands of pieces that people walked on every day in their sandals.',
              },
              question: {
                q: {
                  el: 'Από τι είναι φτιαγμένο ένα μωσαϊκό δάπεδο;',
                  en: 'What is a mosaic floor made of?',
                },
                answers: [
                  { el: 'Από χιλιάδες μικρά χρωματιστά πετραδάκια', en: 'From thousands of small coloured stones' },
                  { el: 'Από βαμμένα ξύλινα πλακάκια κολλημένα μαζί', en: 'From painted wooden tiles glued together' },
                  { el: 'Από χρωματιστό τσιμέντο χυμένο σε καλούπια', en: 'From coloured cement poured into moulds' },
                  { el: 'Από ένα στρώμα πηλού με σχέδια χαραγμένα', en: 'From a layer of clay with patterns scratched in' },
                ],
                explanation: {
                  el: 'Χιλιάδες πετραδάκια, ένα ένα, μπηγμένα σε στρώμα κονιάματος. Γι’ αυτό ένα μωσαϊκό αντέχει αιώνες κάτω από πατημασιές.',
                  en: 'Thousands of little stones, set one by one into mortar. That is why a mosaic survives centuries of being walked on.',
                },
              },
            },
          ],
        },
        {
          id: 'budapest-national-museum-first-kingdom',
          emoji: '👑',
          name: { el: 'Το πρώτο βασίλειο', en: 'The first kingdom' },
          intro: {
            el:
              'Εδώ αρχίζει η Ουγγαρία ως κράτος, με τον βασιλιά Στέφανο γύρω στο έτος ' +
              '1000. Τα αντικείμενα αυτής της αίθουσας είναι μικρά και εύθραυστα, όμως ' +
              'κρατούν πάνω τους μεγάλες αποφάσεις: τι φοράει ένας βασιλιάς για να ' +
              'στεφθεί, τι στέλνει ένας αυτοκράτορας ως δώρο, τι αφήνει πίσω του ένας ' +
              'στρατός όταν φεύγει.',
            en:
              'Hungary as a country starts here, with King Stephen around the year 1000. ' +
              'The objects in this room are small and fragile, and yet they carry big ' +
              'decisions on them: what a king wears to be crowned, what an emperor sends ' +
              'as a present, and what an army leaves behind when it goes.',
          },
          exhibits: [
            {
              id: 'budapest-national-museum-mantle',
              name: { el: 'Ο μανδύας της στέψης', en: 'The coronation mantle' },
              blurb: {
                el:
                  'Ένα ύφασμα από μετάξι, κεντημένο με χρυσή κλωστή γύρω στο 1031, δηλαδή ' +
                  'σχεδόν χίλια χρόνια πριν από σένα. Το χάρισαν ο βασιλιάς Στέφανος και ' +
                  'η βασίλισσα Gizella σε μια εκκλησία, και ήταν αρχικά ένα άμφιο, ρούχο ' +
                  'ιερέα. Αργότερα το έκοψαν και το έραψαν αλλιώς, ώστε να το φοράνε οι ' +
                  'βασιλιάδες την ημέρα της στέψης τους. Είναι από τα παλαιότερα ρούχα που ' +
                  'σώζονται στην Ευρώπη, και σήμερα το φυλάνε σε ειδική βιτρίνα με ' +
                  'ελεγχόμενο αέρα.',
                en:
                  'A piece of silk, embroidered with gold thread around the year 1031, ' +
                  'almost a thousand years before you. King Stephen and Queen Gizella gave ' +
                  'it to a church, and to begin with it was a chasuble, a priest’s robe. ' +
                  'Later it was cut and sewn differently so that kings could wear it on the ' +
                  'day they were crowned. It is one of the oldest garments surviving in ' +
                  'Europe, and it is kept now in a case with the air carefully controlled.',
              },
              question: {
                q: {
                  el: 'Τι ήταν αυτό το ύφασμα πριν γίνει βασιλικός μανδύας;',
                  en: 'What was this cloth before it became a royal mantle?',
                },
                answers: [
                  { el: 'Ένα ρούχο ιερέα για την εκκλησία', en: 'A priest’s robe for the church' },
                  { el: 'Μια κουρτίνα από την αίθουσα του θρόνου', en: 'A curtain from the throne room' },
                  { el: 'Μια σημαία που κρατούσαν στις μάχες', en: 'A banner carried into battle' },
                  { el: 'Ένα κάλυμμα για το άλογο του βασιλιά', en: 'A cover for the king’s own horse' },
                ],
                explanation: {
                  el: 'Ήταν άμφιο, δώρο σε εκκλησία. Το έκοψαν και το ξανάραψαν σε μανδύα, γιατί ένα ύφασμα μπορεί να αλλάξει δουλειά.',
                  en: 'It was a chasuble, given to a church. It was cut and resewn as a mantle, because a cloth can change its job.',
                },
              },
            },
            {
              id: 'budapest-national-museum-crown',
              name: { el: 'Το στέμμα από το χωράφι', en: 'The crown from a field' },
              blurb: {
                el:
                  'Επτά χρυσές πλάκες με χρωματιστό σμάλτο, που δείχνουν έναν βυζαντινό ' +
                  'αυτοκράτορα, την αυτοκράτειρα και χορεύτριες. Φτιάχτηκαν στην ' +
                  'Κωνσταντινούπολη γύρω στα μέσα του 11ου αιώνα, στα χρόνια του ' +
                  'Κωνσταντίνου Θ΄ Μονομάχου. Το 1860 ένας αγρότης τις έβγαλε με το αλέτρι ' +
                  'του, σκορπισμένες μέσα στο χώμα. Οι ειδικοί μαλώνουν ακόμη για το πώς ' +
                  'ήταν στημένες μεταξύ τους και τι ακριβώς στόλιζαν, οπότε αυτό το ' +
                  'έκθεμα είναι και ένα άλυτο πρόβλημα.',
                en:
                  'Seven gold plates in coloured enamel, showing a Byzantine emperor, his ' +
                  'empress and some dancers. They were made in Constantinople around the ' +
                  'middle of the 11th century, in the reign of Constantine IX Monomachos. ' +
                  'In 1860 a farmer turned them up with his plough, scattered through the ' +
                  'soil. Experts still argue about how they were fitted together and what ' +
                  'exactly they decorated, so this exhibit is also an unsolved problem.',
              },
              question: {
                q: {
                  el: 'Πώς βρέθηκαν οι χρυσές πλάκες;',
                  en: 'How were the gold plates found?',
                },
                answers: [
                  { el: 'Τις έβγαλε το αλέτρι ενός αγρότη', en: 'A farmer’s plough turned them up' },
                  { el: 'Τις ξέθαψαν αρχαιολόγοι σε ανασκαφή', en: 'Archaeologists dug them up on a site' },
                  { el: 'Τις βρήκαν σε κιβώτιο μιας εκκλησίας', en: 'They were found in a church strongbox' },
                  { el: 'Τις έφερε το ποτάμι σε μια πλημμύρα', en: 'A flood on the river washed them up' },
                ],
                explanation: {
                  el: 'Το 1860, μέσα σε ένα χωράφι. Πολλά από τα πιο πολύτιμα ευρήματα δεν τα βρήκε κανείς ψάχνοντας.',
                  en: 'In 1860, in the middle of a field. Many of the most precious finds were never being looked for.',
                },
              },
            },
            {
              id: 'budapest-national-museum-sabre',
              name: { el: 'Το οθωμανικό σπαθί', en: 'The Ottoman sabre' },
              blurb: {
                el:
                  'Ένα σπαθί με καμπύλη λάμα, φτιαγμένο στην Οθωμανική Αυτοκρατορία στις ' +
                  'αρχές του 17ου αιώνα. Η λαβή και η θήκη του είναι ντυμένες με ' +
                  'επιχρυσωμένο ασήμι και χρυσάφι και καρφωμένες με ρουμπίνια και ' +
                  'τιρκουάζ. Η καμπύλη δεν είναι στολίδι: ένα τέτοιο σπαθί κόβει καθώς ' +
                  'το τραβάς προς το μέρος σου, κάτι που μετράει όταν είσαι πάνω σε ' +
                  'άλογο. Όμως τόσα πετράδια δεν μπαίνουν σε εργαλείο. Μπαίνουν σε ' +
                  'κάτι που δείχνει ποιος είσαι, και που το φοράς για να το δουν οι ' +
                  'άλλοι πριν καν το βγάλεις από τη θήκη.',
                en:
                  'A sword with a curved blade, made in the Ottoman Empire in the early ' +
                  '17th century. Its hilt and scabbard are covered in gilt silver and ' +
                  'gold and studded with rubies and turquoise. The curve is not for show: ' +
                  'a blade like this cuts as you pull it towards you, which matters when ' +
                  'you are sitting on a horse. But nobody sets that many jewels into a ' +
                  'tool. They go into something that says who you are, worn so that other ' +
                  'people see it before it ever leaves the scabbard.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι καμπύλη η λάμα αυτού του σπαθιού;',
                  en: 'Why is the blade of this sword curved?',
                },
                answers: [
                  { el: 'Για να κόβει καθώς το τραβάς από το άλογο', en: 'So it cuts as you draw it from horseback' },
                  { el: 'Για να μπαίνει σε μικρότερη θήκη στη μέση', en: 'So it fits a shorter scabbard at the waist' },
                  { el: 'Για να λυγίζει και να μη σπάει στη μάχη', en: 'So it can bend instead of snapping in a fight' },
                  { el: 'Για να χωράει επάνω του περισσότερο χρυσάφι', en: 'To leave room for more gold along the blade' },
                ],
                explanation: {
                  el: 'Η καμπύλη λάμα κόβει με το τράβηγμα, ενώ η ίσια κόβει με το χτύπημα. Καβάλα σε άλογο που τρέχει, το τράβηγμα δουλεύει καλύτερα.',
                  en: 'A curved blade cuts by being drawn; a straight one cuts by being struck. On a moving horse, drawing works better.',
                },
              },
            },
          ],
        },
        {
          id: 'budapest-national-museum-sounds-and-steps',
          emoji: '🎹',
          name: { el: 'Ήχοι και σκαλιά', en: 'Sounds and steps' },
          intro: {
            el:
              'Τα πιο ζωντανά εκθέματα ενός μουσείου δεν είναι πάντα μέσα σε βιτρίνες. ' +
              'Σε αυτή την αίθουσα υπάρχει ένα όργανο που έβγαζε ήχο, μια οροφή που τη ' +
              'ζωγράφισαν για να την κοιτάς ανάποδα, και μια σκάλα που δεν είναι καν στο ' +
              'εσωτερικό: είναι έξω, και πάνω της συνέβη κάτι που η χώρα γιορτάζει κάθε ' +
              'χρόνο.',
            en:
              'The liveliest things in a museum are not always inside cases. This room has ' +
              'an instrument that once made a sound, a ceiling painted so that you would ' +
              'look at it upside down, and a staircase that is not even indoors: it is ' +
              'outside, and something happened on it that the country still marks every ' +
              'year.',
          },
          exhibits: [
            {
              id: 'budapest-national-museum-piano',
              name: { el: 'Το πιάνο με τους δύο ιδιοκτήτες', en: 'The piano with two owners' },
              blurb: {
                el:
                  'Ένα πιάνο με ουρά, φτιαγμένο στο Λονδίνο από το εργαστήριο Broadwood. ' +
                  'Το έστειλαν δώρο στον Λούντβιχ βαν Μπετόβεν το 1817, όταν εκείνος ' +
                  'άκουγε ήδη ελάχιστα, και έμεινε στο σπίτι του ως τον θάνατό του. ' +
                  'Αργότερα το απέκτησε ο Ούγγρος πιανίστας Φραντς Λιστ, ο πιο διάσημος ' +
                  'μουσικός της εποχής του, που στο τέλος το χάρισε σε αυτό εδώ το ' +
                  'μουσείο. Δύο άνθρωποι που δεν συναντήθηκαν ποτέ στα σοβαρά ακούμπησαν ' +
                  'τα ίδια πλήκτρα.',
                en:
                  'A grand piano, made in London in the Broadwood workshop. It was sent as ' +
                  'a present to Ludwig van Beethoven in 1817, by which time he could hardly ' +
                  'hear at all, and it stayed in his home until he died. Later it came to ' +
                  'the Hungarian pianist Franz Liszt, the most famous musician of his day, ' +
                  'who in the end gave it to this museum. Two people who never really met ' +
                  'touched the same keys.',
              },
              question: {
                q: {
                  el: 'Τι είχε συμβεί στον Μπετόβεν όταν του έστειλαν το πιάνο;',
                  en: 'What had happened to Beethoven by the time the piano arrived?',
                },
                answers: [
                  { el: 'Είχε χάσει σχεδόν όλη την ακοή του', en: 'He had lost nearly all of his hearing' },
                  { el: 'Είχε σταματήσει εντελώς να γράφει μουσική', en: 'He had stopped writing music altogether' },
                  { el: 'Είχε μετακομίσει από τη Βιέννη στη Βουδαπέστη', en: 'He had moved from Vienna to Budapest' },
                  { el: 'Είχε χαρίσει όλα τα άλλα όργανά του', en: 'He had given away all his other instruments' },
                ],
                explanation: {
                  el: 'Άκουγε ελάχιστα από το 1817 και μετά. Συνέχισε όμως να συνθέτει, νιώθοντας τους κραδασμούς μέσα από το ξύλο.',
                  en: 'He heard almost nothing from 1817 onwards. He went on composing anyway, feeling the vibration through the wood.',
                },
              },
            },
            {
              id: 'budapest-national-museum-dome-hall',
              name: { el: 'Η αίθουσα με τον θόλο', en: 'The domed hall' },
              blurb: {
                el:
                  'Ανεβαίνεις τη μεγάλη σκάλα και βρίσκεσαι σε μια στρογγυλή αίθουσα με ' +
                  'θόλο, ζωγραφισμένη από πάνω ως κάτω. Οι τοιχογραφίες φτιάχτηκαν από τον ' +
                  'Károly Lotz και τον Mór Than και δείχνουν σκηνές από την ιστορία της ' +
                  'χώρας, μαζί με φιγούρες που παριστάνουν τις τέχνες και τις επιστήμες. ' +
                  'Δεν υπάρχει τίποτα σε βιτρίνα εδώ. Η ίδια η αίθουσα είναι το έκθεμα, ' +
                  'και ο σωστός τρόπος να τη δεις είναι να σταθείς στη μέση και να ' +
                  'σηκώσεις το κεφάλι.',
                en:
                  'You climb the great staircase and come out in a round hall under a dome, ' +
                  'painted from top to bottom. The wall paintings were made by Károly Lotz ' +
                  'and Mór Than, and they show scenes from the history of the country ' +
                  'alongside figures standing for the arts and the sciences. Nothing here ' +
                  'is in a case. The hall itself is the exhibit, and the right way to see ' +
                  'it is to stand in the middle and tip your head back.',
              },
              question: {
                q: {
                  el: 'Ποιο είναι το έκθεμα σε αυτή την αίθουσα;',
                  en: 'What is the exhibit in this hall?',
                },
                answers: [
                  { el: 'Η ίδια η αίθουσα και η ζωγραφισμένη οροφή της', en: 'The hall itself and its painted ceiling' },
                  { el: 'Μια συλλογή από χρυσά νομίσματα σε βιτρίνες', en: 'A collection of gold coins in glass cases' },
                  { el: 'Ένα ομοίωμα της Βουδαπέστης σε μεγάλο τραπέζι', en: 'A model of Budapest on a very large table' },
                  { el: 'Τα εργαλεία των χτιστών που έφτιαξαν το κτίριο', en: 'The tools of the masons who built the place' },
                ],
                explanation: {
                  el: 'Ένα κτίριο μπορεί να είναι έκθεμα του εαυτού του. Εδώ κοιτάς ψηλά, όχι μέσα σε τζάμια.',
                  en: 'A building can be its own exhibit. Here you look upwards, not into glass.',
                },
              },
            },
            {
              id: 'budapest-national-museum-steps',
              name: { el: 'Τα σκαλιά της 15ης Μαρτίου', en: 'The steps of 15 March' },
              blurb: {
                el:
                  'Η φαρδιά σκάλα μπροστά από τις κολόνες. Στις 15 Μαρτίου 1848 μαζεύτηκε ' +
                  'εδώ πλήθος, στην αρχή μιας μεγάλης ουγγρικής εξέγερσης για ελευθερία ' +
                  'και ίσα δικαιώματα. Η ιστορία που λένε όλοι είναι ότι ο ποιητής Sándor ' +
                  'Petőfi στάθηκε σε αυτά τα σκαλιά και απήγγειλε το ποίημά του. Οι ' +
                  'ιστορικοί σήμερα λένε ότι μάλλον δεν έγινε ακριβώς έτσι. Και οι δύο ' +
                  'προτάσεις είναι χρήσιμες: η μία σου δείχνει τι έγινε, η άλλη τι θέλει ' +
                  'να θυμάται ο κόσμος.',
                en:
                  'The wide flight of steps in front of the columns. On 15 March 1848 a ' +
                  'crowd gathered here, at the start of a great Hungarian rising for ' +
                  'freedom and equal rights. The story everybody tells is that the poet ' +
                  'Sándor Petőfi stood on these steps and recited his poem. Historians now ' +
                  'think it probably did not happen quite like that. Both sentences are ' +
                  'useful: one tells you what happened, the other tells you what people ' +
                  'want to remember.',
              },
              question: {
                q: {
                  el: 'Τι λένε σήμερα οι ιστορικοί για τον ποιητή στα σκαλιά;',
                  en: 'What do historians now say about the poet on the steps?',
                },
                answers: [
                  { el: 'Ότι μάλλον δεν απήγγειλε ακριβώς εκεί', en: 'That he probably did not recite there' },
                  { el: 'Ότι απήγγειλε δύο φορές την ίδια μέρα', en: 'That he recited twice on the same day' },
                  { el: 'Ότι έγραψε το ποίημα πάνω στα σκαλιά', en: 'That he wrote the poem on the steps' },
                  { el: 'Ότι δεν υπήρξε ποτέ τέτοιος ποιητής', en: 'That no such poet ever really existed' },
                ],
                explanation: {
                  el: 'Το πλήθος ήρθε στο μουσείο, αυτό είναι βέβαιο. Η απαγγελία στα σκαλιά είναι ιστορία που μεγάλωσε αργότερα.',
                  en: 'The crowd did come to the museum, that much is certain. The recital on the steps is a story that grew later.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'budapest-national-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι από καθαρό χρυσάφι και έχω τα πόδια μου διπλωμένα. Τα κέρατά μου ' +
              'κυματίζουν σαν φλόγες. Δεν ήμουν στολίδι: με είχαν καρφωμένο μπροστά σε μια ' +
              'ασπίδα, πριν από δυόμισι χιλιάδες χρόνια.',
            en:
              'I am solid gold and my legs are folded under me. My antlers ripple like ' +
              'flames. I was not an ornament: I was fixed to the front of a shield, two and ' +
              'a half thousand years ago.',
          },
          hint: {
            el: 'Με έβγαλε ένα αλέτρι το 1928.',
            en: 'A plough turned me up in 1928.',
          },
          answerExhibitId: 'budapest-national-museum-golden-stag',
        },
        {
          id: 'budapest-national-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Ξεκίνησα ως ρούχο ιερέα και με έραψαν ξανά για βασιλιάδες. Είμαι μετάξι με ' +
              'χρυσή κλωστή, σχεδόν χίλια χρόνια παλιός, και με φυλάνε σε βιτρίνα με ' +
              'προσεκτικά ρυθμισμένο αέρα.',
            en:
              'I began as a priest’s robe and was sewn again for kings. I am silk worked ' +
              'with gold thread, almost a thousand years old, and I am kept in a case with ' +
              'carefully controlled air.',
          },
          hint: {
            el: 'Ένας βασιλιάς με φορούσε τη μέρα που στέφθηκε.',
            en: 'A king wore me on the day he was crowned.',
          },
          answerExhibitId: 'budapest-national-museum-mantle',
        },
        {
          id: 'budapest-national-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Ήρθα από το Λονδίνο δώρο σε έναν άνθρωπο που δεν με άκουγε πια. Ύστερα με ' +
              'πήρε ο πιο διάσημος πιανίστας της εποχής του, και εκείνος με χάρισε εδώ. ' +
              'Έχω ουρά και έξι οκτάβες πλήκτρων.',
            en:
              'I came from London as a present for a man who could no longer hear me. Then ' +
              'the most famous pianist of his time owned me, and he gave me away to this ' +
              'museum. I have a tail and six octaves of keys.',
          },
          hint: {
            el: 'Ο πρώτος μου ιδιοκτήτης έγραψε συμφωνίες.',
            en: 'My first owner wrote symphonies.',
          },
          answerExhibitId: 'budapest-national-museum-piano',
        },
      ],
    },
  },

  // ------------------------------------------------------------ museum of fine arts
  {
    id: 'budapest-fine-arts-museum',
    cityId: 'budapest',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Το Μουσείο Καλών Τεχνών', en: 'The Museum of Fine Arts' },
    tagline: {
      el: 'Ένας ελληνικός ναός με μούμιες και έναν κλεμμένο πίνακα',
      en: 'A Greek temple with mummies and a stolen painting',
    },
    story: {
      el:
        'Στην άκρη της Πλατείας των Ηρώων στέκεται ένα κτίριο που κάνει τον εαυτό του να ' +
        'μοιάζει με αρχαίο ναό: οκτώ κολόνες και ένα τριγωνικό αέτωμα γεμάτο μαρμάρινες ' +
        'μορφές που παλεύουν. Δεν είναι πρωτότυπο, και δεν προσποιείται ότι είναι: το ' +
        'αέτωμα είναι αντίγραφο του ναού του Δία στην Ολυμπία. Οι αρχιτέκτονες Albert ' +
        'Schickedanz και Fülöp Herzog το σχεδίασαν έτσι επίτηδες, για να καταλαβαίνει ' +
        'κανείς από τον δρόμο τι θα δει μέσα. Το μουσείο άνοιξε το 1906. Έχει μία από τις ' +
        'μεγαλύτερες συλλογές έργων του Ελ Γκρέκο έξω από την Ισπανία, μια αίθουσα με ' +
        'αιγυπτιακές μούμιες, και έναν πίνακα του Ραφαήλ που κλάπηκε το 1983 και βρέθηκε ' +
        'στην Ελλάδα. Έχει επίσης μια τεράστια αίθουσα που έμεινε κλειστή για πάνω από ' +
        'εβδομήντα χρόνια, επειδή χάλασε στον πόλεμο και κανείς δεν προλάβαινε να την ' +
        'επισκευάσει.',
      en:
        'At the edge of Heroes’ Square stands a building doing its best to look like an ' +
        'ancient temple: eight columns and a triangular pediment full of marble figures ' +
        'wrestling. It is not original, and it does not pretend to be: the pediment is a ' +
        'copy of the one on the temple of Zeus at Olympia. The architects Albert ' +
        'Schickedanz and Fülöp Herzog designed it that way on purpose, so that you could ' +
        'tell from the street what you would find inside. The museum opened in 1906. It ' +
        'holds one of the largest collections of El Greco outside Spain, a room of Egyptian ' +
        'mummies, and a painting by Raphael that was stolen in 1983 and found again in ' +
        'Greece. It also has an enormous hall that stayed shut for more than seventy years, ' +
        'because the war damaged it and nobody got round to the repairs.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1906, στην άκρη της Πλατείας των Ηρώων.',
        en: 'It opened in 1906, at the edge of Heroes’ Square.',
      },
      {
        el: 'Το αέτωμα της πρόσοψης αντιγράφει τον ναό του Δία στην Ολυμπία.',
        en: 'The pediment over its door copies the temple of Zeus at Olympia.',
      },
      {
        el: 'Έχει μία από τις πλουσιότερες συλλογές Ελ Γκρέκο έξω από την Ισπανία.',
        en: 'It has one of the richest El Greco collections outside Spain.',
      },
    ],
    location: {
      lat: 47.51587,
      lng: 19.07678,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q840886', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Museum of Fine Arts (Budapest)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check; Wikidata and Wikipedia land on the same point. It resolves 116 m from Heroes’ Square, which it stands on the edge of — well past the 25 m separation floor, so the two are separate pins rather than a declared adjacency.',
      findIt: {
        el: 'Είναι το κτίριο με τις κολόνες στη βόρεια πλευρά της Πλατείας των Ηρώων. Η είσοδος των επισκεπτών είναι από τη σκάλα κάτω από το αέτωμα.',
        en: 'It is the columned building on the north side of Heroes’ Square. Visitors go in up the steps under the pediment.',
      },
    },
    question: {
      q: {
        el: 'Τι αντιγράφει το τριγωνικό αέτωμα της πρόσοψης;',
        en: 'What does the triangular pediment over the door copy?',
      },
      answers: [
        {
          el: 'Τον ναό του Δία στην αρχαία Ολυμπία',
          en: 'The temple of Zeus at ancient Olympia',
        },
        {
          el: 'Την πρόσοψη του Κοινοβουλίου απέναντι',
          en: 'The front of the Parliament across town',
        },
        {
          el: 'Έναν πίνακα του Ελ Γκρέκο από τη συλλογή',
          en: 'An El Greco painting from the collection',
        },
        {
          el: 'Την είσοδο ενός αιγυπτιακού τάφου',
          en: 'The doorway of an Egyptian tomb',
        },
      ],
      explanation: {
        el:
          'Οι Κένταυροι που παλεύουν με τους Λαπίθες, από την Ολυμπία. Το κτίριο λέει από ' +
          'τον δρόμο ότι μέσα φυλάγεται τέχνη πολλών αιώνων.',
        en:
          'The centaurs fighting the Lapiths, from Olympia. From the street the building ' +
          'is announcing that it keeps art from many centuries inside.',
      },
    },

    museum: {
      doorNote: {
        el: 'Οι μεγάλες αίθουσες είναι στο ισόγειο και οι πίνακες πάνω. Τα σκαλιά είναι πολλά, οπότε διάλεξε σειρά.',
        en: 'The great halls are on the ground floor and the paintings above. There are a lot of stairs, so choose an order.',
      },
      rooms: [
        {
          id: 'budapest-fine-arts-museum-egypt',
          emoji: '⚱️',
          name: { el: 'Οι Αιγύπτιοι', en: 'The Egyptians' },
          intro: {
            el:
              'Αυτή η αίθουσα είναι πιο σκοτεινή από τις άλλες, και υπάρχει λόγος: το ' +
              'δυνατό φως ξεθωριάζει τα χρώματα που άντεξαν τρεις χιλιάδες χρόνια. Όλα ' +
              'εδώ έχουν σχέση με το τι πίστευαν οι Αιγύπτιοι ότι συμβαίνει μετά τη ζωή, ' +
              'και σχεδόν όλα φτιάχτηκαν για να μη τα δει ποτέ κανείς ζωντανός.',
            en:
              'This room is darker than the others, and there is a reason: strong light ' +
              'fades colours that have lasted three thousand years. Everything here is ' +
              'about what the Egyptians believed happens after a life ends, and almost all ' +
              'of it was made never to be seen by anyone living.',
          },
          exhibits: [
            {
              id: 'budapest-fine-arts-museum-coffin',
              name: { el: 'Το ζωγραφισμένο φέρετρο', en: 'The painted coffin' },
              blurb: {
                el:
                  'Ένα ξύλινο φέρετρο σε σχήμα ανθρώπου, βαμμένο σε έντονα χρώματα και ' +
                  'σκεπασμένο με ιερογλυφικά από πάνω ως κάτω. Το πρόσωπο στο καπάκι δεν ' +
                  'είναι πορτρέτο: είναι ένα ήρεμο, ιδανικό πρόσωπο, ίδιο για όλους. Οι ' +
                  'γραμμές των ιερογλυφικών δεν είναι διακόσμηση αλλά οδηγίες και ξόρκια ' +
                  'για το ταξίδι που πίστευαν ότι ακολουθεί. Ήταν, με άλλα λόγια, ένας ' +
                  'χάρτης γραμμένος πάνω στο ίδιο το κουτί.',
                en:
                  'A wooden coffin cut to the shape of a person, painted in strong colours ' +
                  'and covered in hieroglyphs from top to bottom. The face on the lid is ' +
                  'not a portrait: it is a calm, ideal face, much the same for everyone. ' +
                  'The lines of hieroglyphs are not decoration but instructions and spells ' +
                  'for the journey the Egyptians believed came next. It was, in other ' +
                  'words, a map written on the outside of the box.',
              },
              question: {
                q: {
                  el: 'Τι είναι τα ιερογλυφικά πάνω στο φέρετρο;',
                  en: 'What are the hieroglyphs on the coffin?',
                },
                answers: [
                  {
                    el: 'Οδηγίες και ξόρκια για τον δρόμο μετά',
                    en: 'Instructions and spells for the road after',
                  },
                  {
                    el: 'Η υπογραφή του τεχνίτη που το κατασκεύασε',
                    en: 'The signature of the craftsman who made it',
                  },
                  {
                    el: 'Ο κατάλογος όσων ήταν θαμμένα μαζί του',
                    en: 'A list of everything buried alongside it',
                  },
                  {
                    el: 'Απλή διακόσμηση, χωρίς κάποιο νόημα',
                    en: 'Simple decoration, without any meaning',
                  },
                ],
                explanation: {
                  el: 'Είναι κείμενο, όχι σχέδιο. Το φέρετρο κουβαλάει επάνω του τις οδηγίες που θεωρούσαν απαραίτητες.',
                  en: 'It is text, not pattern. The coffin carries the directions the Egyptians thought were needed.',
                },
              },
            },
            {
              id: 'budapest-fine-arts-museum-animal-mummies',
              name: { el: 'Οι μουμιοποιημένες γάτες', en: 'The mummified animals' },
              blurb: {
                el:
                  'Μικρά δεμάτια από λινές λωρίδες, μερικά σε σχήμα γάτας, άλλα μακρόστενα ' +
                  'σαν πουλί. Οι Αιγύπτιοι μουμιοποιούσαν ζώα με τον ίδιο προσεκτικό ' +
                  'τρόπο που μουμιοποιούσαν ανθρώπους. Άλλα ήταν αγαπημένα κατοικίδια, ' +
                  'άλλα προσφορές σε ναούς, όπου τα αγόραζε ο κόσμος όπως αγοράζει σήμερα ' +
                  'ένα κερί. Στις ακτινογραφίες μερικά δεμάτια αποδεικνύονται άδεια, γιατί ' +
                  'υπήρχαν και τότε άνθρωποι που πουλούσαν ψεύτικα. Οι αρχαιολόγοι λένε ' +
                  'ότι κάποιες μούμιες γάτας ήταν φτιαγμένες μόνο από πανί και λάσπη.',
                en:
                  'Small bundles of linen strips, some shaped like a cat, others long and ' +
                  'thin like a bird. The Egyptians mummified animals with the same care ' +
                  'they gave to people. Some were beloved pets, others were offerings ' +
                  'bought at temples much as people buy a candle today. Under an X-ray a ' +
                  'few of the bundles turn out to be empty, because there were people back ' +
                  'then who sold fakes too. Archaeologists say some cat mummies were made ' +
                  'of nothing but cloth and mud.',
              },
              question: {
                q: {
                  el: 'Τι δείχνουν οι ακτινογραφίες σε μερικά από αυτά τα δεμάτια;',
                  en: 'What do X-rays show inside some of these bundles?',
                },
                answers: [
                  {
                    el: 'Ότι μερικά είναι άδεια: κάποιοι πουλούσαν ψεύτικα',
                    en: 'That some are empty: people were selling fakes',
                  },
                  {
                    el: 'Ότι μέσα κρύβονταν μικρά χρυσά κοσμήματα',
                    en: 'That small gold jewels were hidden inside',
                  },
                  {
                    el: 'Ότι κάθε ζώο είχε το όνομά του γραμμένο',
                    en: 'That every animal had its name written on it',
                  },
                  {
                    el: 'Ότι όλα ανήκαν στην ίδια οικογένεια',
                    en: 'That they all belonged to one family',
                  },
                ],
                explanation: {
                  el: 'Μερικά δεμάτια δεν έχουν ζώο μέσα. Ο κόσμος τα αγόραζε ως προσφορές και δεν μπορούσε να ελέγξει τι υπήρχε στο εσωτερικό.',
                  en: 'Some bundles have no animal in them. People bought them as offerings and had no way to check what was inside.',
                },
              },
            },
            {
              id: 'budapest-fine-arts-museum-shabti',
              name: { el: 'Οι μικροί εργάτες', en: 'The little workers' },
              blurb: {
                el:
                  'Δεκάδες μικρές γαλάζιες φιγούρες, ύψους λίγων εκατοστών, με σταυρωμένα ' +
                  'χέρια και ένα εργαλείο ζωγραφισμένο επάνω τους. Λέγονται ushabti και ' +
                  'είχαν συγκεκριμένη δουλειά: αν κάποιος καλούσε τον νεκρό να δουλέψει ' +
                  'στα χωράφια του άλλου κόσμου, οι φιγούρες θα σηκώνονταν και θα πήγαιναν ' +
                  'στη θέση του. Σε πλούσιους τάφους βρέθηκαν πάνω από τριακόσιες: μία για ' +
                  'κάθε μέρα του χρόνου, συν μερικές παραπάνω που έκαναν τους επιστάτες ' +
                  'και κρατούσαν μαστίγιο αντί για εργαλείο.',
                en:
                  'Dozens of small blue-green figures, a few centimetres tall, with their ' +
                  'arms crossed and a tool painted on them. They are called ushabti and ' +
                  'they had one job: if anyone called the dead person to work in the fields ' +
                  'of the next world, the figures would get up and go instead. Rich tombs ' +
                  'have turned up more than three hundred of them: one for each day of the ' +
                  'year, plus a few extra who acted as foremen and carried a whip instead ' +
                  'of a tool.',
              },
              question: {
                q: {
                  el: 'Ποια ήταν η δουλειά αυτών των μικρών φιγούρων;',
                  en: 'What was the job of these little figures?',
                },
                answers: [
                  {
                    el: 'Να δουλεύουν στον άλλο κόσμο αντί γι’ αυτόν',
                    en: 'To work in the next world instead of him',
                  },
                  {
                    el: 'Να φυλάνε την πόρτα του τάφου από κλέφτες',
                    en: 'To guard the door of the tomb against thieves',
                  },
                  {
                    el: 'Να μετράνε τις μέρες μέχρι το επόμενο φεγγάρι',
                    en: 'To count the days until the next full moon',
                  },
                  {
                    el: 'Να δείχνουν πόσο πλούσια ήταν η οικογένεια',
                    en: 'To show how rich the family had been',
                  },
                ],
                explanation: {
                  el: 'Ήταν αντικαταστάτες. Το όνομά τους σημαίνει περίπου «αυτός που απαντά», γιατί απαντούσαν στο κάλεσμα αντί για τον νεκρό.',
                  en: 'They were stand-ins. Their name means something like «the one who answers», because they answered the call instead.',
                },
              },
            },
          ],
        },
        {
          id: 'budapest-fine-arts-museum-old-masters',
          emoji: '🎨',
          name: { el: 'Οι παλιοί ζωγράφοι', en: 'The old masters' },
          intro: {
            el:
              'Πάνω από χίλιοι πίνακες κρέμονται σε αυτούς τους ορόφους, και τρεις από ' +
              'αυτούς αξίζει να τους βρεις οπωσδήποτε. Ο ένας τον ζωγράφισε ένας Έλληνας ' +
              'που έζησε στην Ισπανία, ο άλλος έλειψε από τον τοίχο του για δύο μήνες που ' +
              'τους έμαθε όλος ο κόσμος, και ο τρίτος έχει τόσους ανθρώπους μέσα του που ' +
              'δεν τους μετράς.',
            en:
              'More than a thousand paintings hang on these floors, and three of them are ' +
              'worth hunting down. One was painted by a Greek who lived in Spain, one was ' +
              'missing from its wall for two months that the whole world heard about, and ' +
              'the third has so many people in it that you cannot count them.',
          },
          exhibits: [
            {
              id: 'budapest-fine-arts-museum-el-greco',
              name: { el: 'Ο Ελ Γκρέκο', en: 'The El Greco' },
              blurb: {
                el:
                  'Ο ζωγράφος λεγόταν Δομήνικος Θεοτοκόπουλος και γεννήθηκε στην Κρήτη. ' +
                  'Έζησε στη Βενετία, ύστερα στη Ρώμη, και τελικά εγκαταστάθηκε στο Τολέδο ' +
                  'της Ισπανίας, όπου οι ντόπιοι τον φώναζαν απλώς «ο Έλληνας»: El Greco. ' +
                  'Οι μορφές του είναι τραβηγμένες σε ύψος, σαν να τις κοιτάς σε καθρέφτη ' +
                  'πανηγυριού, και τα χρώματά του είναι κρύα και ηλεκτρικά. Στην εποχή του ' +
                  'θεωρήθηκε παράξενος. Τριακόσια χρόνια αργότερα οι ζωγράφοι τον ' +
                  'ανακάλυψαν ξανά και τον έκαναν ήρωα.',
                en:
                  'The painter was called Domenikos Theotokopoulos and he was born on ' +
                  'Crete. He lived in Venice, then Rome, and finally settled in Toledo in ' +
                  'Spain, where people simply called him «the Greek»: El Greco. His figures ' +
                  'are stretched tall, as though seen in a funfair mirror, and his colours ' +
                  'are cold and electric. In his own century he was thought odd. Three ' +
                  'hundred years later painters rediscovered him and made him a hero.',
              },
              question: {
                q: {
                  el: 'Γιατί τον έλεγαν «Ελ Γκρέκο»;',
                  en: 'Why was he called «El Greco»?',
                },
                answers: [
                  {
                    el: 'Στα ισπανικά σημαίνει «ο Έλληνας», και ήταν από την Κρήτη',
                    en: 'It is Spanish for «the Greek», and he came from Crete',
                  },
                  {
                    el: 'Ήταν το όνομα του δασκάλου του στη Βενετία',
                    en: 'It was the name of his teacher back in Venice',
                  },
                  {
                    el: 'Ζωγράφιζε μόνο σκηνές της αρχαίας Ελλάδας',
                    en: 'He painted nothing but scenes of ancient Greece',
                  },
                  {
                    el: 'Ήταν το όνομα του εργαστηρίου του στο Τολέδο',
                    en: 'It was the name of his workshop back in Toledo',
                  },
                ],
                explanation: {
                  el: 'Το πραγματικό του όνομα, Θεοτοκόπουλος, ήταν δύσκολο για τους Ισπανούς. Τον φώναξαν με την καταγωγή του και το όνομα έμεινε.',
                  en: 'His real name, Theotokopoulos, was hard for Spaniards. They called him by where he came from, and it stuck.',
                },
              },
            },
            {
              id: 'budapest-fine-arts-museum-esterhazy-madonna',
              name: { el: 'Η Παναγία Esterházy', en: 'The Esterházy Madonna' },
              blurb: {
                el:
                  'Ένας μικρός πίνακας του Ραφαήλ, ζωγραφισμένος γύρω στο 1508 και ποτέ ' +
                  'τελειωμένος: αν κοιτάξεις κοντά, τα ερείπια στο βάθος είναι ακόμη ' +
                  'σχέδιο. Τον Νοέμβριο του 1983 κλάπηκε από αυτό το μουσείο, μαζί με άλλα ' +
                  'έξι έργα, μέσα σε μία νύχτα. Οι πίνακες βρέθηκαν λίγους μήνες αργότερα ' +
                  'στην Ελλάδα, κοντά στο Αίγιο, και επέστρεψαν στη Βουδαπέστη. Είναι ένα ' +
                  'από τα λίγα έργα του Ραφαήλ που ταξίδεψαν κρυφά μέσα σε βαλίτσα.',
                en:
                  'A small painting by Raphael, made around 1508 and never finished: look ' +
                  'closely and the ruins in the background are still only drawing. In ' +
                  'November 1983 it was stolen from this museum, together with six other ' +
                  'works, in a single night. The paintings were found a few months later in ' +
                  'Greece, near Aigio, and came back to Budapest. It is one of the few ' +
                  'Raphaels ever to have travelled secretly inside a suitcase.',
              },
              question: {
                q: {
                  el: 'Πού βρέθηκε ο πίνακας μετά την κλοπή του 1983;',
                  en: 'Where was the painting found after the theft of 1983?',
                },
                answers: [
                  {
                    el: 'Στην Ελλάδα, κοντά στο Αίγιο',
                    en: 'In Greece, near the town of Aigio',
                  },
                  {
                    el: 'Σε μια αποθήκη στο ίδιο το μουσείο',
                    en: 'In a storeroom of the museum itself',
                  },
                  {
                    el: 'Στο βαγόνι ενός τρένου στην Αυστρία',
                    en: 'In a railway carriage over in Austria',
                  },
                  {
                    el: 'Σε παλαιοπωλείο του Λονδίνου, προς πώληση',
                    en: 'In a London antique shop, up for sale',
                  },
                ],
                explanation: {
                  el: 'Ταξίδεψε από τη Βουδαπέστη ως την Πελοπόννησο και γύρισε πίσω μέσα σε λίγους μήνες. Οι πολύ διάσημοι πίνακες είναι δύσκολο να πουληθούν.',
                  en: 'It travelled from Budapest to the Peloponnese and back within months. Very famous paintings are very hard to sell.',
                },
              },
            },
            {
              id: 'budapest-fine-arts-museum-bruegel',
              name: { el: 'Το πλήθος του Μπρίγκελ', en: 'Bruegel’s crowd' },
              blurb: {
                el:
                  'Ένας πίνακας του Πίτερ Μπρίγκελ του Πρεσβύτερου, από το 1566, που ' +
                  'δείχνει ένα τεράστιο πλήθος μαζεμένο σε ένα ξέφωτο για να ακούσει έναν ' +
                  'ομιλητή. Το αστείο είναι ότι ο ομιλητής χάνεται μέσα στους ανθρώπους. ' +
                  'Ο Μπρίγκελ ζωγράφισε το κοινό: παιδιά που σκαρφαλώνουν σε δέντρα, ' +
                  'κάποιον που κοιμάται, δύο που κουβεντιάζουν, έναν που διαβάζει την ' +
                  'παλάμη κάποιου άλλου. Είναι πίνακας που τον ψάχνεις σαν παιχνίδι, και ' +
                  'κάθε φορά βρίσκεις κάτι που δεν είχες προσέξει.',
                en:
                  'A painting by Pieter Bruegel the Elder, from 1566, showing an enormous ' +
                  'crowd gathered in a clearing to hear a speaker. The joke is that the ' +
                  'speaker is almost lost among them. What Bruegel painted is the audience: ' +
                  'children climbing trees, somebody asleep, two people chatting, one man ' +
                  'reading another’s palm. It is a painting you search like a game, and ' +
                  'every time you find something you had not noticed.',
              },
              question: {
                q: {
                  el: 'Τι είναι το πραγματικό θέμα αυτού του πίνακα;',
                  en: 'What is this painting really about?',
                },
                answers: [
                  {
                    el: 'Το πλήθος που ακούει, όχι αυτός που μιλάει',
                    en: 'The crowd listening, not the man speaking',
                  },
                  {
                    el: 'Το δάσος στο βάθος και τα ζώα του',
                    en: 'The wood behind and the animals in it',
                  },
                  {
                    el: 'Ο καιρός, που αλλάζει μέσα στην ίδια σκηνή',
                    en: 'The weather, changing across the same scene',
                  },
                  {
                    el: 'Η πόλη που φαίνεται μακριά, πίσω απ’ όλα',
                    en: 'The town visible far away, behind it all',
                  },
                ],
                explanation: {
                  el: 'Ο ομιλητής είναι σχεδόν κρυμμένος. Ο Μπρίγκελ ενδιαφερόταν για το τι κάνουν οι άνθρωποι όταν υποτίθεται ότι ακούν.',
                  en: 'The speaker is nearly hidden. Bruegel was interested in what people do while they are supposed to be listening.',
                },
              },
            },
          ],
        },
        {
          id: 'budapest-fine-arts-museum-the-building',
          emoji: '🏛️',
          name: { el: 'Το ίδιο το κτίριο', en: 'The building itself' },
          intro: {
            el:
              'Μερικά μουσεία είναι απλώς κουτιά που φυλάνε πράγματα. Αυτό όχι. Η ' +
              'πρόσοψή του αντιγράφει έναν ελληνικό ναό, μια αίθουσά του κοιμήθηκε ' +
              'εβδομήντα χρόνια πίσω από κλειστές πόρτες, και μέσα της στέκονται ' +
              'ολόκληρες πύλες εκκλησιών που δεν είναι εκκλησίες. Εδώ το κτίριο είναι ' +
              'μέρος της συλλογής.',
            en:
              'Some museums are just boxes that keep things safe. This one is not. Its ' +
              'front copies a Greek temple, one of its halls slept for seventy years ' +
              'behind locked doors, and standing inside that hall are whole church ' +
              'doorways that are not churches at all. Here the building is part of the ' +
              'collection.',
          },
          exhibits: [
            {
              id: 'budapest-fine-arts-museum-pediment',
              name: { el: 'Το αέτωμα από την Ολυμπία', en: 'The pediment from Olympia' },
              blurb: {
                el:
                  'Πάνω από τις οκτώ κολόνες της εισόδου υπάρχει ένα τρίγωνο γεμάτο ' +
                  'μορφές που παλεύουν: Κένταυροι, μισοί άλογα και μισοί άνθρωποι, ' +
                  'εναντίον των Λαπιθών. Η σκηνή δεν επινοήθηκε εδώ. Είναι αντίγραφο του ' +
                  'δυτικού αετώματος του ναού του Δία στην Ολυμπία, φτιαγμένου πριν από ' +
                  'δυόμισι χιλιάδες χρόνια. Οι αρχιτέκτονες δεν το έκρυψαν ποτέ, γιατί ' +
                  'ήθελαν ακριβώς αυτό: ένα κτίριο που δηλώνει τι κρύβει μέσα του πριν ' +
                  'καν μπεις.',
                en:
                  'Above the eight columns of the entrance is a triangle full of struggling ' +
                  'figures: centaurs, half horse and half man, against the Lapiths. The ' +
                  'scene was not invented here. It is a copy of the west pediment of the ' +
                  'temple of Zeus at Olympia, carved two and a half thousand years ago. The ' +
                  'architects never hid that, because it was the whole point: a building ' +
                  'that says what it is keeping before you even walk in.',
              },
              question: {
                q: {
                  el: 'Ποιοι παλεύουν στο αέτωμα πάνω από την είσοδο;',
                  en: 'Who is fighting in the pediment above the door?',
                },
                answers: [
                  {
                    el: 'Κένταυροι και Λαπίθες, όπως στην Ολυμπία',
                    en: 'Centaurs and Lapiths, just as at Olympia',
                  },
                  {
                    el: 'Οι επτά αρχηγοί των Μαγυάρων φυλών',
                    en: 'The seven chiefs of the Magyar tribes',
                  },
                  {
                    el: 'Οι θεοί του Ολύμπου σε ένα συμπόσιο',
                    en: 'The gods of Olympus at a great feast',
                  },
                  {
                    el: 'Στρατιώτες μιας ρωμαϊκής νίκης στην Παννονία',
                    en: 'Soldiers of a Roman victory in Pannonia',
                  },
                ],
                explanation: {
                  el: 'Είναι αντίγραφο του δυτικού αετώματος της Ολυμπίας. Το κτίριο δανείζεται μια αρχαία σκηνή για να πει τι είδους μέρος είναι.',
                  en: 'It copies the west pediment at Olympia. The building borrows an ancient scene to announce what kind of place it is.',
                },
              },
            },
            {
              id: 'budapest-fine-arts-museum-romanesque-hall',
              name: { el: 'Η αίθουσα που κοιμήθηκε', en: 'The hall that slept' },
              blurb: {
                el:
                  'Μια τεράστια αίθουσα με καμάρες, ζωγραφισμένη με χρώματα και σχέδια σε ' +
                  'κάθε εκατοστό τοίχου και οροφής. Άνοιξε μαζί με το μουσείο το 1906. ' +
                  'Στον Β΄ Παγκόσμιο Πόλεμο η στέγη της χάλασε, το νερό μπήκε μέσα, και ' +
                  'μετά την κλείδωσαν και τη χρησιμοποιούσαν ως αποθήκη. Έμεινε έτσι πάνω ' +
                  'από εβδομήντα χρόνια, με τους πίνακες στοιβαγμένους στο σκοτάδι. Την ' +
                  'επισκεύασαν και την άνοιξαν ξανά στο κοινό το 2018, με τα χρώματά της ' +
                  'καθαρισμένα.',
                en:
                  'An enormous arched hall, painted with colours and patterns over every ' +
                  'centimetre of wall and ceiling. It opened with the museum in 1906. In ' +
                  'the Second World War its roof was damaged, water got in, and afterwards ' +
                  'it was locked and used as a storeroom. It stayed that way for more than ' +
                  'seventy years, with pictures stacked in the dark. It was repaired and ' +
                  'opened to the public again in 2018, with its colours cleaned.',
              },
              question: {
                q: {
                  el: 'Τι έκανε αυτή η αίθουσα για πάνω από εβδομήντα χρόνια;',
                  en: 'What was this hall doing for more than seventy years?',
                },
                answers: [
                  {
                    el: 'Ήταν κλειδωμένη και δούλευε ως αποθήκη',
                    en: 'It was locked and used as a storeroom',
                  },
                  {
                    el: 'Φιλοξενούσε σχολείο για παιδιά της γειτονιάς',
                    en: 'It held a school for the local children',
                  },
                  {
                    el: 'Ήταν η αίθουσα με τα διάσημα αγάλματα',
                    en: 'It was the room with the famous statues',
                  },
                  {
                    el: 'Την είχαν γεμίσει με βιβλία της βιβλιοθήκης',
                    en: 'It was filled with the library’s books',
                  },
                ],
                explanation: {
                  el: 'Χάλασε στον πόλεμο, κλείδωσε και ξεχάστηκε. Χρειάστηκαν εβδομήντα χρόνια για να ξαναφτιαχτεί και να ανοίξει το 2018.',
                  en: 'The war damaged it, it was locked and forgotten. It took seventy years to repair and reopen it in 2018.',
                },
              },
            },
            {
              id: 'budapest-fine-arts-museum-casts',
              name: { el: 'Οι γύψινες πύλες', en: 'The plaster doorways' },
              blurb: {
                el:
                  'Μέσα στην αίθουσα με τις καμάρες στέκονται ολόκληρες πύλες μεσαιωνικών ' +
                  'εκκλησιών, σε φυσικό μέγεθος και σε κάθε λεπτομέρεια. Δεν είναι όμως ' +
                  'πέτρα: είναι γύψος. Πριν από τη φωτογραφία και το αεροπλάνο, ένας ' +
                  'φοιτητής της Βουδαπέστης δεν μπορούσε να πάει να δει μια πύλη στη ' +
                  'Γαλλία, οπότε έφερναν την πύλη σε αυτόν. Τα εκμαγεία ήταν η καλύτερη ' +
                  'μηχανή αντιγραφής της εποχής τους: ακριβή, τεράστια και φτιαγμένα για ' +
                  'να τα αγγίζεις με τα μάτια.',
                en:
                  'Standing inside the arched hall are whole doorways from medieval ' +
                  'churches, at full size and in every detail. They are not stone, though: ' +
                  'they are plaster. Before photography and aeroplanes, a student in ' +
                  'Budapest could not go and look at a doorway in France, so the doorway ' +
                  'was brought to the student. Casts were the best copying machine of their ' +
                  'age: exact, enormous, and made to be studied with your eyes.',
              },
              question: {
                q: {
                  el: 'Γιατί έφτιαχναν γύψινα αντίγραφα ολόκληρων πυλών;',
                  en: 'Why did they make plaster copies of whole doorways?',
                },
                answers: [
                  {
                    el: 'Για να τις μελετούν όσοι δεν μπορούσαν να ταξιδέψουν',
                    en: 'So that people who could not travel could study them',
                  },
                  {
                    el: 'Για να αντικαταστήσουν τις αληθινές που χάλασαν',
                    en: 'To replace the real ones that had been damaged',
                  },
                  {
                    el: 'Για να δοκιμάσουν αν αντέχει η στέγη το βάρος',
                    en: 'To test whether the roof could take the weight',
                  },
                  {
                    el: 'Για να τις πουλήσουν σε άλλα μουσεία της Ευρώπης',
                    en: 'To sell them on to other museums around Europe',
                  },
                ],
                explanation: {
                  el: 'Χωρίς φωτογραφίες και φτηνά ταξίδια, το εκμαγείο ήταν ο μόνος τρόπος να δεις κάτι μακρινό σε πραγματικό μέγεθος.',
                  en: 'With no photographs and no cheap travel, a cast was the only way to see something far away at its real size.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'budapest-fine-arts-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι ένα δεμάτι από λινές λωρίδες και έχω σχήμα ζώου. Με αγόρασε κάποιος ' +
              'σε ναό, πριν από χιλιάδες χρόνια, για να με αφήσει ως δώρο. Μερικοί σαν ' +
              'εμένα είναι άδειοι.',
            en:
              'I am a bundle of linen strips shaped like an animal. Someone bought me at a ' +
              'temple thousands of years ago to leave as a gift. A few of the ones like me ' +
              'turn out to be empty.',
          },
          hint: {
            el: 'Οι ακτινογραφίες αποκάλυψαν το μυστικό μου.',
            en: 'X-rays gave my secret away.',
          },
          answerExhibitId: 'budapest-fine-arts-museum-animal-mummies',
        },
        {
          id: 'budapest-fine-arts-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μικρός και δεν με τελείωσε ποτέ ο ζωγράφος μου. Μια νύχτα του 1983 με ' +
              'πήραν από τον τοίχο μου, και με ξαναβρήκαν λίγους μήνες αργότερα, στην ' +
              'Ελλάδα.',
            en:
              'I am small and my painter never finished me. One night in 1983 I was taken ' +
              'off my wall, and I was found again a few months later, in Greece.',
          },
          hint: {
            el: 'Στο βάθος μου τα ερείπια είναι ακόμη σχέδιο.',
            en: 'In my background the ruins are still only drawing.',
          },
          answerExhibitId: 'budapest-fine-arts-museum-esterhazy-madonna',
        },
        {
          id: 'budapest-fine-arts-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Δεν είμαι αντικείμενο, είμαι χώρος. Έχω καμάρες και ζωγραφιές σε κάθε ' +
              'εκατοστό μου. Ο πόλεμος μού χάλασε τη στέγη, με κλείδωσαν, και ξύπνησα ' +
              'ξανά μόλις το 2018.',
            en:
              'I am not an object, I am a space. I have arches and paint over every ' +
              'centimetre of me. The war broke my roof, I was locked up, and I only woke ' +
              'again in 2018.',
          },
          hint: {
            el: 'Για εβδομήντα χρόνια με χρησιμοποιούσαν ως αποθήκη.',
            en: 'For seventy years I was used as a storeroom.',
          },
          answerExhibitId: 'budapest-fine-arts-museum-romanesque-hall',
        },
      ],
    },
  },

  // -------------------------------------------------------------- széchenyi bath
  {
    id: 'budapest-szechenyi-bath',
    cityId: 'budapest',
    emoji: '♨️',
    category: 'science',
    difficulty: 2,

    name: { el: 'Τα λουτρά Széchenyi', en: 'The Széchenyi Baths' },
    tagline: {
      el: 'Το νερό τους ταξιδεύει ένα χιλιόμετρο προς τα πάνω',
      en: 'Their water travels a kilometre upwards to get here',
    },
    story: {
      el:
        'Στη μέση του πάρκου στέκεται ένα τεράστιο κίτρινο κτίριο με τρούλους και ' +
        'αγάλματα, και μέσα του υπάρχουν δεκαοκτώ πισίνες. Το πιο ενδιαφέρον όμως δεν ' +
        'φαίνεται καθόλου, γιατί βρίσκεται κάτω από τα πόδια σου. Το 1878 ο μηχανικός ' +
        'Vilmos Zsigmondy άνοιξε εδώ μια γεώτρηση και έφτασε σχεδόν χίλια μέτρα βάθος, ' +
        'ψάχνοντας ζεστό νερό. Το βρήκε. Αργότερα άνοιξε δεύτερο πηγάδι, ακόμη πιο βαθύ, ' +
        'και από εκεί ανεβαίνει νερό γύρω στους εβδομήντα πέντε βαθμούς. Δεν το ζεσταίνει ' +
        'κανείς: όσο κατεβαίνεις μέσα στη γη, τόσο πιο ζεστά είναι τα πετρώματα, και το ' +
        'νερό της βροχής που κατεβαίνει βαθιά επιστρέφει καυτό. Τα λουτρά άνοιξαν το 1913 ' +
        'και οι εξωτερικές πισίνες δουλεύουν όλο τον χρόνο. Τον χειμώνα ο ατμός τυλίγει ' +
        'τους κολυμβητές, και μερικοί ηλικιωμένοι παίζουν σκάκι μέσα στο νερό, με τη ' +
        'σκακιέρα να επιπλέει ανάμεσά τους.',
      en:
        'In the middle of the park stands an enormous yellow building with domes and ' +
        'statues, and inside it are eighteen pools. The most interesting part cannot be ' +
        'seen at all, though, because it is under your feet. In 1878 the engineer Vilmos ' +
        'Zsigmondy drilled a well here and went down almost a thousand metres, looking for ' +
        'hot water. He found it. Later a second well went deeper still, and water comes up ' +
        'from it at around seventy-five degrees. Nobody heats it: the further down you go ' +
        'into the earth the hotter the rock is, and rainwater that sinks deep comes back ' +
        'scalding. The baths opened in 1913 and the outdoor pools work all year. In winter ' +
        'the steam wraps around the swimmers, and some older people play chess in the ' +
        'water, with the board floating between them.',
    },
    facts: [
      {
        el: 'Το κτίριο άνοιξε το 1913 και έχει δεκαοκτώ πισίνες.',
        en: 'The building opened in 1913 and has eighteen pools.',
      },
      {
        el: 'Το νερό φτάνει στην επιφάνεια γύρω στους 75 βαθμούς Κελσίου.',
        en: 'The water reaches the surface at around 75 degrees Celsius.',
      },
      {
        el: 'Η πρώτη γεώτρηση, το 1878, έφτασε σχεδόν τα χίλια μέτρα βάθος.',
        en: 'The first well, in 1878, went down almost a thousand metres.',
      },
    ],
    location: {
      lat: 47.51833,
      lng: 19.08222,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q194783', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Széchenyi thermal bath', deltaM: 37 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check, and Wikipedia sits 37 m away, which on a bath complex of this size is a different wing rather than a disagreement. One agreeing source, hence C.',
      findIt: {
        el: 'Στο πάρκο Városliget. Η κύρια είσοδος είναι στην πλευρά που βλέπει προς το τσίρκο και τον ζωολογικό κήπο, κάτω από τον μεγάλο κίτρινο θόλο.',
        en: 'In the Városliget park. The main door is on the side facing the circus and the zoo, under the big yellow dome.',
      },
    },
    question: {
      q: {
        el: 'Πώς ζεσταίνεται το νερό αυτών των λουτρών;',
        en: 'How does the water in these baths get hot?',
      },
      answers: [
        {
          el: 'Από τα πετρώματα, ένα χιλιόμετρο κάτω',
          en: 'By the rock, a kilometre underground',
        },
        {
          el: 'Σε καζάνια στο υπόγειο του κτιρίου',
          en: 'In boilers in the building’s cellar',
        },
        {
          el: 'Από τον ήλιο, μέσα σε ρηχές δεξαμενές',
          en: 'By the sun, in shallow open tanks',
        },
        {
          el: 'Από ηφαίστειο κάτω από το πάρκο',
          en: 'By a volcano beneath the park',
        },
      ],
      explanation: {
        el:
          'Δεν υπάρχει θερμάστρα πουθενά. Το νερό κατεβαίνει, ζεσταίνεται από τη ζέστη ' +
          'της ίδιας της Γης και ξαναβγαίνει από γεώτρηση.',
        en:
          'There is no heater anywhere. The water sinks, is warmed by the heat of the ' +
          'Earth itself, and is drawn back up through a well.',
      },
    },
  },

  // ---------------------------------------------------------------- opera house
  {
    id: 'budapest-opera-house',
    cityId: 'budapest',
    emoji: '🎭',
    category: 'art',
    difficulty: 3,

    name: { el: 'Η Κρατική Όπερα', en: 'The State Opera House' },
    tagline: {
      el: 'Έπρεπε να είναι μικρότερη από της Βιέννης, όχι ασχημότερη',
      en: 'It had to be smaller than Vienna’s, not plainer',
    },
    story: {
      el:
        'Όταν η Βουδαπέστη ζήτησε δική της όπερα, μεγάλο μέρος των χρημάτων το έδωσε ο ' +
        'αυτοκράτορας Φραγκίσκος Ιωσήφ, με έναν όρο: το κτίριο δεν έπρεπε να είναι ' +
        'μεγαλύτερο από την Όπερα της Βιέννης. Ο αρχιτέκτονας Miklós Ybl δέχτηκε τον όρο ' +
        'κατά γράμμα και έκανε ό,τι δεν απαγόρευε: το έφτιαξε μικρότερο και πολύ πιο ' +
        'πλούσιο. Δούλεψε εννιά χρόνια και η όπερα άνοιξε το 1884. Στην είσοδο κάθονται ' +
        'δύο πέτρινες σφίγγες, και δεξιά κι αριστερά της πόρτας στέκονται τα αγάλματα δύο ' +
        'μουσικών, του Φραντς Λιστ και του Ferenc Erkel, που έγραψε τον εθνικό ύμνο της ' +
        'χώρας. Μέσα, η αίθουσα έχει σχήμα πετάλου και από την οροφή κρέμεται ένας ' +
        'μπρούντζινος πολυέλαιος τριών τόνων. Γύρω του, ο ζωγράφος Károly Lotz ζωγράφισε ' +
        'τους θεούς του Ολύμπου, οπότε το κοινό ακούει μουσική με τον Δία από πάνω του.',
      en:
        'When Budapest asked for an opera house of its own, much of the money came from ' +
        'Emperor Franz Joseph, on one condition: the building must not be bigger than the ' +
        'Vienna Opera. The architect Miklós Ybl took the condition literally and did ' +
        'everything it did not forbid: he made his building smaller and far richer. He ' +
        'worked on it for nine years and it opened in 1884. Two stone sphinxes sit at the ' +
        'entrance, and to either side of the door stand statues of two musicians, Franz ' +
        'Liszt and Ferenc Erkel, who wrote the country’s national anthem. Inside, the ' +
        'auditorium is shaped like a horseshoe and a bronze chandelier weighing three ' +
        'tonnes hangs from the ceiling. Around it the painter Károly Lotz put the gods of ' +
        'Olympus, so the audience listens with Zeus overhead.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1884, μετά από εννιά χρόνια δουλειάς.',
        en: 'It opened in 1884, after nine years of work.',
      },
      {
        el: 'Ο πολυέλαιος της αίθουσας ζυγίζει περίπου τρεις τόνους.',
        en: 'The chandelier in the auditorium weighs about three tonnes.',
      },
      {
        el: 'Στην οροφή ο Károly Lotz ζωγράφισε τους θεούς του Ολύμπου.',
        en: 'On the ceiling Károly Lotz painted the gods of Olympus.',
      },
    ],
    location: {
      lat: 47.50278,
      lng: 19.05833,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q36833', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Hungarian State Opera House', deltaM: 21 },
      ],
      verifiedAt: '2026-09-13',
      note: 'Q36833 is the building, «budapesti épület»; Q113044848 is the opera company of the same name and was not used. The Overpass fetch failed on this pass, so there is no OSM cross-check.',
      findIt: {
        el: 'Στη λεωφόρο Andrássy út. Θα την αναγνωρίσεις από τις δύο σφίγγες: η είσοδος είναι ανάμεσά τους, κάτω από τη σκεπαστή στοά για τις άμαξες.',
        en: 'On Andrássy út. You will know it by the two sphinxes: the door is between them, under the covered carriage porch.',
      },
    },
    question: {
      q: {
        el: 'Τι όρο έβαλε ο αυτοκράτορας για να πληρώσει το κτίριο;',
        en: 'What condition did the emperor set for paying for it?',
      },
      answers: [
        {
          el: 'Να μην είναι μεγαλύτερο από της Βιέννης',
          en: 'It must not be bigger than Vienna’s',
        },
        {
          el: 'Να παίζονται μόνο έργα Αυστριακών συνθετών',
          en: 'Only Austrian composers should be played there',
        },
        {
          el: 'Να τελειώσει μέσα σε τρία μόνο χρόνια δουλειάς',
          en: 'It had to be finished in only three years of work',
        },
        {
          el: 'Να έχει θέση με το όνομά του σε κάθε παράσταση',
          en: 'A seat with his name on it at every performance',
        },
      ],
      explanation: {
        el:
          'Ο όρος μιλούσε για μέγεθος και τίποτε άλλο. Ο Ybl τον τήρησε και ξόδεψε όλη ' +
          'του τη φαντασία στη διακόσμηση.',
        en:
          'The condition mentioned size and nothing else. Ybl obeyed it and spent all his ' +
          'imagination on the decoration instead.',
      },
    },
  },

  // ----------------------------------------------------------------------- zoo
  {
    id: 'budapest-zoo',
    cityId: 'budapest',
    emoji: '🐘',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ο Ζωολογικός Κήπος', en: 'The Zoo and Botanical Garden' },
    tagline: {
      el: 'Οι ελέφαντες ζουν σε κτίριο με πλακάκια και πυργάκι',
      en: 'The elephants live in a tiled house with a tower',
    },
    story: {
      el:
        'Άνοιξε το 1866 και είναι από τους παλαιότερους ζωολογικούς κήπους στον κόσμο. ' +
        'Τότε οι ζωολογικοί κήποι ήταν σειρές από κλουβιά· σήμερα η δουλειά τους είναι ' +
        'διαφορετική και εδώ φροντίζονται είδη που έχουν γίνει σπάνια στη φύση. Το ' +
        'εντυπωσιακό όμως είναι ότι τα ίδια τα κτίρια αξίζουν επίσκεψη. Το Σπίτι των ' +
        'Ελεφάντων, του 1912, είναι στολισμένο με γυαλιστερά κεραμικά Zsolnay, τα ίδια ' +
        'που έχει η στέγη του Ναού του Ματθία, και έχει έναν λεπτό πύργο σαν μιναρέ. Το ' +
        'Σπίτι των Πουλιών και το Φασιανοτροφείο τα σχεδίασαν ο Károly Kós και ο Dezső ' +
        'Zrumeczky με ξύλο και πέτρα, σαν να τα έφεραν από ορεινό χωριό. Το πυργάκι των ' +
        'ελεφάντων, πάντως, παραλίγο να χαθεί: κάποιοι το βρήκαν άπρεπο, μάλωσαν γι’ αυτό ' +
        'και το γκρέμισαν το 1915. Ξαναχτίστηκε ολόιδιο το 1997.',
      en:
        'It opened in 1866 and is one of the oldest zoos in the world. In those days a zoo ' +
        'was rows of cages; today the job is a different one, and animals that have become ' +
        'rare in the wild are looked after here. The surprising part is that the buildings ' +
        'are worth the visit by themselves. The Elephant House of 1912 is covered in shiny ' +
        'Zsolnay ceramics, the same ones on the roof of Matthias Church, and it has a slim ' +
        'tower like a minaret. The Bird House and the Pheasantry were designed by Károly ' +
        'Kós and Dezső Zrumeczky in wood and stone, as though carried in from a mountain ' +
        'village. The elephants’ little tower almost did not survive: ' +
        'some people thought it improper, argued about it, and pulled it down in 1915. It ' +
        'was rebuilt exactly as it had been in 1997.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1866, από τους παλαιότερους ζωολογικούς κήπους στον κόσμο.',
        en: 'It opened in 1866, one of the oldest zoos anywhere in the world.',
      },
      {
        el: 'Το Σπίτι των Ελεφάντων, του 1912, είναι ντυμένο με κεραμικά Zsolnay.',
        en: 'The Elephant House of 1912 is faced with Zsolnay ceramics.',
      },
      {
        el: 'Το πυργάκι των ελεφάντων γκρεμίστηκε το 1915 και ξαναχτίστηκε το 1997.',
        en: 'The elephants’ tower was pulled down in 1915 and rebuilt in 1997.',
      },
    ],
    location: {
      lat: 47.5191,
      lng: 19.0783,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q922178', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Budapest Zoo and Botanical Garden', deltaM: 134 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check. Wikipedia sits 134 m away, which for a park-sized area is another corner of the same grounds and is well inside the 500 m tolerance for an area. One agreeing source, hence C.',
      findIt: {
        el: 'Η πύλη με τους πέτρινους ελέφαντες βλέπει στη Állatkerti körút, δίπλα στα λουτρά Széchenyi.',
        en: 'The gate with the stone elephants faces Állatkerti körút, next door to the Széchenyi Baths.',
      },
    },
    question: {
      q: {
        el: 'Τι έπαθε το λεπτό πυργάκι του Σπιτιού των Ελεφάντων;',
        en: 'What happened to the Elephant House’s slim tower?',
      },
      answers: [
        {
          el: 'Γκρεμίστηκε το 1915 και ξαναχτίστηκε το 1997',
          en: 'It came down in 1915 and went back up in 1997',
        },
        {
          el: 'Έγινε καμπαναριό για την εκκλησία του κήπου',
          en: 'It became a bell tower for a park church',
        },
        {
          el: 'Οι φύλακες το είχαν για παρατηρητήριο',
          en: 'The keepers used it as a lookout post',
        },
        {
          el: 'Το έχτισαν οι ίδιοι οι Οθωμανοί πριν από αιώνες',
          en: 'The Ottomans themselves built it centuries ago',
        },
      ],
      explanation: {
        el:
          'Ο αρχιτέκτονας Kornél Neuschloss το έφτιαξε σαν μιναρέ, κάποιοι θύμωσαν και το ' +
          'γκρέμισαν. Ογδόντα δύο χρόνια αργότερα η πόλη το ξαναέφτιαξε ολόιδιο.',
        en:
          'The architect Kornél Neuschloss shaped it like a minaret, people took offence ' +
          'and it was demolished. Eighty-two years later the city put it back exactly.',
      },
    },
  },

  // ------------------------------------------------------------------ hajós pool
  {
    id: 'budapest-hajos-pool',
    cityId: 'budapest',
    emoji: '🏊',
    category: 'sport',
    difficulty: 2,

    name: { el: 'Το κολυμβητήριο Alfréd Hajós', en: 'The Alfréd Hajós Swimming Pool' },
    tagline: {
      el: 'Ο ολυμπιονίκης που σχεδίασε μόνος του την πισίνα',
      en: 'The Olympic champion who designed his own pool',
    },
    story: {
      el:
        'Το 1896, στους πρώτους σύγχρονους Ολυμπιακούς Αγώνες στην Αθήνα, δεν υπήρχε ' +
        'πισίνα. Οι κολυμβητές αγωνίστηκαν στην ανοιχτή θάλασσα, στον όρμο του Ζέα κοντά ' +
        'στον Πειραιά, με νερό παγωμένο και κύματα. Ένας δεκαοκτάχρονος από τη Βουδαπέστη, ' +
        'ο Alfréd Hajós, κέρδισε δύο αγώνες την ίδια μέρα. Αργότερα είπε ότι μέσα στο ' +
        'κρύο νερό η επιθυμία του να επιβιώσει είχε νικήσει την επιθυμία του να κερδίσει. ' +
        'Γυρίζοντας σπίτι δεν έγινε προπονητής: σπούδασε αρχιτεκτονική. Δούλεψε χρόνια ' +
        'σχεδιάζοντας κτίρια, και το 1930 άνοιξε στο νησί Margit-sziget ένα κολυμβητήριο ' +
        'που το είχε σχεδιάσει ο ίδιος. Είναι σπάνιο πράγμα: ο άνθρωπος που κέρδισε τους ' +
        'πρώτους ολυμπιακούς αγώνες κολύμβησης έφτιαξε με τα σχέδιά του το μέρος όπου ' +
        'προπονήθηκαν οι επόμενοι πρωταθλητές. Το 1924 κέρδισε και δεύτερο ολυμπιακό ' +
        'μετάλλιο, αυτή τη φορά χωρίς να μπει στο νερό: ήταν αργυρό, σε διαγωνισμό ' +
        'σχεδίων για αθλητικά κτίρια.',
      en:
        'At the first modern Olympic Games in Athens in 1896 there was no pool. The ' +
        'swimmers raced in the open sea, in the bay of Zea near Piraeus, in freezing water ' +
        'and waves. An eighteen-year-old from Budapest, Alfréd Hajós, won two races on the ' +
        'same day. He said afterwards that in that cold water his wish to stay alive had ' +
        'beaten his wish to win. When he came home he did not become a coach: he studied ' +
        'architecture. He spent years designing buildings, and in 1930 a swimming pool ' +
        'opened on Margit-sziget island that he had designed himself. It is a rare thing: ' +
        'the man who won the first Olympic swimming races drew the plans for the place ' +
        'where the champions after him trained. In 1924 he won a second Olympic medal ' +
        'without going near the water: a silver, in a competition for designs of sports ' +
        'buildings.',
    },
    facts: [
      {
        el: 'Στην Αθήνα του 1896 οι κολυμβητές αγωνίστηκαν στην ανοιχτή θάλασσα.',
        en: 'At Athens in 1896 the swimmers raced in the open sea.',
      },
      {
        el: 'Ο Alfréd Hajós κέρδισε δύο ολυμπιακούς αγώνες την ίδια μέρα, στα δεκαοκτώ του.',
        en: 'Alfréd Hajós won two Olympic races on the same day, aged eighteen.',
      },
      {
        el: 'Το κολυμβητήριο, δικό του σχέδιο, άνοιξε το 1930 στο νησί Margit-sziget.',
        en: 'The pool, to his own design, opened in 1930 on Margit-sziget island.',
      },
    ],
    location: {
      lat: 47.52139,
      lng: 19.04278,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q509841', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Alfréd Hajós National Swimming Stadium', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass fetch failed on this pass, so there is no OSM cross-check; Wikidata and Wikipedia land on the same point.',
      findIt: {
        el: 'Στο νησί Margit-sziget, στη δυτική πλευρά, κοντά στη γέφυρα Margit híd. Το κτίριο έχει μεγάλα τζάμια και φαίνεται από το μονοπάτι της όχθης.',
        en: 'On Margit-sziget island, on the west side near the Margit híd bridge. The building is glassy and shows from the riverside path.',
      },
    },
    question: {
      q: {
        el: 'Τι έκανε ο Alfréd Hajós μετά τη νίκη του στην Αθήνα;',
        en: 'What did Alfréd Hajós do after winning in Athens?',
      },
      answers: [
        {
          el: 'Έγινε αρχιτέκτονας και σχεδίασε αυτή την πισίνα',
          en: 'He became an architect and designed this pool',
        },
        {
          el: 'Έγινε προπονητής της εθνικής ομάδας κολύμβησης',
          en: 'He became coach of the national swimming team',
        },
        {
          el: 'Άνοιξε σχολή κολύμβησης στις όχθες του Δούναβη',
          en: 'He opened a swimming school on the Danube bank',
        },
        {
          el: 'Έγινε δάσκαλος σε σχολείο του νησιού Margit-sziget',
          en: 'He became a teacher at a school on Margit-sziget',
        },
      ],
      explanation: {
        el:
          'Σπούδασε αρχιτεκτονική και χρόνια αργότερα σχεδίασε το κολυμβητήριο που ' +
          'άνοιξε το 1930 και φέρει σήμερα το όνομά του.',
        en:
          'He studied architecture, and years later designed the pool that opened in 1930 ' +
          'and carries his name today.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'budapest-the-castle-hill',
    cityId: 'budapest',
    emoji: '🏰',
    name: { el: 'Ο λόφος και η γέφυρα', en: 'The hill and the bridge' },
    promise: {
      el: 'Η πρώτη γέφυρα της πόλης, ο λόφος των βασιλιάδων και ένα κάστρο που δεν φύλαξε ποτέ τίποτα.',
      en: 'The city’s first bridge, the hill of the kings, and a castle that never guarded anything.',
    },
    placeIds: [
      'budapest-chain-bridge',
      'budapest-buda-castle',
      'budapest-matthias-church',
      'budapest-fishermans-bastion',
    ],
  },
  {
    id: 'budapest-the-thousand-year-party',
    cityId: 'budapest',
    emoji: '🎉',
    name: { el: 'Η γιορτή των χιλίων χρόνων', en: 'The thousand-year party' },
    promise: {
      el: 'Πέντε πράγματα που έχτισε η Βουδαπέστη γύρω στα χίλια της γενέθλια, το 1896.',
      en: 'Five things Budapest built around its thousandth birthday, in 1896.',
    },
    placeIds: [
      'budapest-heroes-square',
      'budapest-vajdahunyad-castle',
      'budapest-fine-arts-museum',
      'budapest-great-market-hall',
      'budapest-fishermans-bastion',
    ],
  },
  {
    id: 'budapest-hot-water-cold-river',
    cityId: 'budapest',
    emoji: '♨️',
    name: { el: 'Ζεστό νερό, κρύο ποτάμι', en: 'Hot water, cold river' },
    promise: {
      el: 'Νερό που ανεβαίνει καυτό από ένα χιλιόμετρο βάθος, και ένας ολυμπιονίκης που κρύωσε στην Αθήνα.',
      en: 'Water that comes up scalding from a kilometre down, and a champion who froze in Athens.',
    },
    placeIds: [
      'budapest-szechenyi-bath',
      'budapest-hajos-pool',
      'budapest-liberty-statue',
    ],
  },
  {
    id: 'budapest-a-day-indoors',
    cityId: 'budapest',
    emoji: '🖼️',
    name: { el: 'Μια μέρα με βροχή', en: 'A day it rains' },
    promise: {
      el: 'Δύο μουσεία με μούμιες, χρυσάφι και έναν κλεμμένο πίνακα, και μία αίθουσα με τον Δία στην οροφή.',
      en: 'Two museums with mummies, gold and a stolen painting, and a hall with Zeus on the ceiling.',
    },
    placeIds: [
      'budapest-national-museum',
      'budapest-fine-arts-museum',
      'budapest-opera-house',
    ],
  },
  {
    id: 'budapest-the-pest-side',
    cityId: 'budapest',
    emoji: '🌶️',
    name: { el: 'Η επίπεδη πλευρά', en: 'The flat side' },
    promise: {
      el: 'Το σπίτι των νόμων, μια εκκλησία που ξαναχτίστηκε, και μια αγορά που μυρίζει πάπρικα.',
      en: 'The house of the laws, a church that was rebuilt, and a market that smells of paprika.',
    },
    placeIds: [
      'budapest-parliament',
      'budapest-basilica',
      'budapest-national-museum',
      'budapest-great-market-hall',
    ],
  },
];
