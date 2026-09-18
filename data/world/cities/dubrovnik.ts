/**
 * WiseBot World — Dubrovnik.
 *
 * Seventeen places, two of them museums with an interior: the Franciscan monastery with
 * its pharmacy, and the Rector's Palace with the Cultural History Museum inside it.
 * Built by conversion, like Paris: nine of the ten spots in the Explorer product on
 * origin/main are carried over here, reshaped to this module's lengths and voice and
 * given sourced coordinates, museums and riddles.
 *
 * Every coordinate is copied from `data/world/coords/dubrovnik.json`, field for field.
 * Nothing graded `D`. No place claims an `entrance`, because no door here has been
 * measured; every point is the centroid, area or viewpoint the resolver reported.
 * Explorer's own lat/lng were not consulted — replacing them is why this pipeline exists.
 *
 * Four judgement calls a later reader would otherwise have to reconstruct:
 *
 *  - **Explorer's Old Port is dropped as a pin.** The only Wikidata item for the harbour,
 *    Q18028117, carries no label and no description in any language, so there is nothing
 *    to read to confirm it is the right place. St John's Fortress stands on the harbour
 *    mouth, holds the Maritime Museum and the aquarium, and carries the harbour's story
 *    with a coordinate that can be checked. The Arsenal, the chain and Lokrum's legend
 *    all live inside its story and Lokrum's.
 *  - **Sponza Palace and the Clock Tower are one place, not two.** Explorer treats them
 *    as a single spot and the tower's own item sits 24 m from the palace's; that would be
 *    an undeclared neighbour. The tower is part of Sponza's story.
 *  - **Orlando's Column and Sponza Palace really are 24 m apart** and are declared in the
 *    seed's `adjacentPairs`. The column stands free on Luža square in front of Sponza's
 *    façade; they are different objects a century apart.
 *  - **Two pins were re-seeded from an area to a point on it**, the fix Athens made for
 *    Lycabettus. Lokrum's island item graded D — Wikipedia's point for the island sits
 *    717 m from Wikidata's, because a 700 m island has no single place a child stands —
 *    so the pin is Fort Royal on the summit. Srđ's ridge item is rounded to two decimals,
 *    so the pin is the white cross at the top.
 *
 * Seven places carry a `note` about a cross-check that did not answer: Overpass was
 * returning 429s and 504s through the run, and the item usually has no English Wikipedia
 * article with coordinates. Wikidata is the source of the point in every case; a failed
 * cross-check never moves anything, it only lowers the grade.
 *
 * `el` and `en` only. The other four arrive as overlay files and never as extra keys here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------ pile gate
  {
    id: 'dubrovnik-pile-gate',
    cityId: 'dubrovnik',
    emoji: '🚪',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Η Πύλη Pile', en: 'The Pile Gate' },
    tagline: {
      el: 'Δύο πύλες, με μια στροφή ανάμεσά τους',
      en: 'Two gates, with a bend in between them',
    },
    story: {
      el:
        'Για εκατοντάδες χρόνια αυτή ήταν η μόνη είσοδος στο Ντουμπρόβνικ από τη δύση. ' +
        'Πρώτα περνάς μια πέτρινη γέφυρα πάνω από μια τάφρο που δεν είχε ποτέ νερό, μόνο ' +
        'κήπο. Μετά έρχεται μια ξύλινη κινητή γέφυρα: κάθε βράδυ οι φρουροί τη σήκωναν με ' +
        'αλυσίδες, κλείδωναν την πύλη και παρέδιδαν τα κλειδιά στον άρχοντα της πόλης. Το ' +
        'πρωί τα έπαιρναν πίσω. Η πύλη δεν είναι μία αλλά δύο, μια εξωτερική του 1537 και ' +
        'μια παλαιότερη εσωτερική, και ανάμεσά τους ο δρόμος στρίβει. Η στροφή δεν είναι ' +
        'λάθος του χτίστη. Είναι όλη η ιδέα. Ένας εχθρός που περνούσε την πρώτη πύλη δεν ' +
        'μπορούσε να τρέξει ίσια μέσα· έπρεπε να σταματήσει, να στρίψει και να προχωρήσει ' +
        'αργά, ενώ οι φρουροί τον κοιτούσαν από ψηλά. Πάνω από την καμάρα στέκεται ο ' +
        'Άγιος Βλάσιος, ο Sveti Vlaho, κρατώντας ένα μικρό μοντέλο της πόλης στα χέρια ' +
        'του, σαν να τη φυλάει.',
      en:
        'For hundreds of years this was the only way into Dubrovnik from the west. First ' +
        'you cross a stone bridge over a moat that never held water, only a garden. Then ' +
        'comes a wooden drawbridge: every evening the guards pulled it up with chains, ' +
        'locked the gate and handed the keys to the ruler of the town. Every morning they ' +
        'got them back. The gate is not one gate but two, an outer one from 1537 and an ' +
        'older inner one, and between them the road turns. The bend is not a builder’s ' +
        'mistake. It is the whole idea. An enemy through the first gate could not run ' +
        'straight in; he had to stop, turn and walk slowly, while the guards watched him ' +
        'from above. Over the arch stands Saint Blaise, Sveti Vlaho, holding a small model ' +
        'of the town in his hands as though he were keeping it safe.',
    },
    facts: [
      {
        el: 'Η εξωτερική πύλη είναι του 1537. Η εσωτερική είναι ακόμα παλαιότερη.',
        en: 'The outer gate dates from 1537. The inner one is older still.',
      },
      {
        el: 'Η τάφρος κάτω από τη γέφυρα δεν κρατούσε ποτέ νερό, μόνο κήπους.',
        en: 'The moat under the bridge never held water, only gardens.',
      },
      {
        el: 'Το άγαλμα πάνω από την εσωτερική πύλη το σκάλισε ο γλύπτης Ivan Meštrović.',
        en: 'The statue over the inner gate was carved by the sculptor Ivan Meštrović.',
      },
    ],
    location: {
      lat: 42.64174,
      lng: 18.10685,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3509061', deltaM: 0 },
        { kind: 'osm', ref: 'way/668283215', deltaM: 1 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el:
          'Στη δυτική άκρη της παλιάς πόλης, στο τέλος της πέτρινης γέφυρας. Κοίταξε ψηλά ' +
          'πάνω από την καμάρα για τον άγιο με το μοντέλο της πόλης στα χέρια.',
        en:
          'At the western end of the old town, at the end of the stone bridge. Look up ' +
          'above the arch for the saint holding a model of the town in his hands.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ο δρόμος στρίβει ανάμεσα στις δύο πύλες;',
        en: 'Why does the road bend between the two gates?',
      },
      answers: [
        { el: 'Για να μην τρέχει ίσια μέσα ο εχθρός', en: 'So no enemy could run straight in' },
        { el: 'Για να χωρέσουν δύο ακόμα μαγαζιά', en: 'So that two more shops could fit' },
        { el: 'Για να μπαίνει λιγότερος ο αέρας', en: 'So that less wind would get inside' },
        { el: 'Για να μπορούν να γυρίζουν τα κάρα', en: 'So that carts could turn round here' },
      ],
      explanation: {
        el:
          'Όποιος περνούσε την πρώτη πύλη έπρεπε να σταματήσει και να στρίψει. Εκείνα τα ' +
          'δευτερόλεπτα τα κέρδιζαν οι φρουροί, που τον κοιτούσαν από ψηλά.',
        en:
          'Anyone through the first gate had to stop and turn. Those few seconds belonged ' +
          'to the guards, who were watching from above.',
      },
    },
  },

  // ----------------------------------------------------------- onofrio fountain
  {
    id: 'dubrovnik-onofrio-fountain',
    cityId: 'dubrovnik',
    emoji: '⛲',
    category: 'science',
    difficulty: 2,

    name: { el: 'Η Μεγάλη Κρήνη του Onofrio', en: 'Big Onofrio’s Fountain' },
    tagline: {
      el: 'Δώδεκα χιλιόμετρα κατηφόρα, χωρίς καμία αντλία',
      en: 'Twelve kilometres downhill, and not one pump',
    },
    story: {
      el:
        'Η παλιά πόλη πατάει πάνω σε βράχο, και ο βράχος δεν κρατάει νερό. Μέχρι το 1438 ' +
        'οι κάτοικοι μάζευαν τη βροχή σε στέρνες και μετρούσαν κάθε κουβά. Τότε η ' +
        'Δημοκρατία κάλεσε από τη Νάπολη έναν μηχανικό, τον Onofrio della Cava, και του ' +
        'ζήτησε κάτι δύσκολο: να φέρει νερό από τις πηγές του Šumet, δώδεκα χιλιόμετρα ' +
        'μακριά, χωρίς μηχανές. Η λύση ήταν ένα πέτρινο κανάλι που κατηφορίζει ελάχιστα σε ' +
        'κάθε μέτρο. Το νερό κυλάει μόνο του, με τη βαρύτητα, ακριβώς όπως το έκαναν οι ' +
        'Ρωμαίοι. Εδώ, μέσα στα τείχη, το κανάλι τελειώνει σε μια πέτρινη κρήνη με δεκαέξι ' +
        'πλευρές και έναν τρούλο. Δεκαέξι σκαλισμένα πρόσωπα βγάζουν νερό, και ο κόσμος ' +
        'γεμίζει ακόμα εδώ τα μπουκάλια του. Η κρήνη ήταν κάποτε φορτωμένη στολίδια· ο ' +
        'μεγάλος σεισμός του 1667 τα τίναξε σχεδόν όλα και άφησε τα πρόσωπα.',
      en:
        'The old town stands on rock, and rock holds no water. Until 1438 people collected ' +
        'rain in cisterns and counted every bucket. Then the Republic sent to Naples for an ' +
        'engineer, Onofrio della Cava, and asked him for something hard: bring water from ' +
        'the springs at Šumet, twelve kilometres away, with no machines at all. The answer ' +
        'was a stone channel that drops only a tiny amount every metre. The water runs by ' +
        'itself, on gravity, exactly the way the Romans did it. Here, inside the walls, the ' +
        'channel ends in a stone fountain with sixteen sides and a dome. Sixteen carved ' +
        'faces pour the water out, and people still fill their bottles at them. The ' +
        'fountain was once loaded with carving; the great earthquake of 1667 shook nearly ' +
        'all of it off and left the faces.',
    },
    facts: [
      {
        el: 'Το υδραγωγείο έχει μήκος περίπου 12 χιλιόμετρα και ξεκινά από τις πηγές του Šumet.',
        en: 'The aqueduct is about 12 kilometres long and starts at the springs of Šumet.',
      },
      {
        el: 'Η κρήνη έχει δεκαέξι πλευρές και δεκαέξι σκαλισμένα πρόσωπα που χύνουν νερό.',
        en: 'The fountain has sixteen sides and sixteen carved faces that pour out water.',
      },
      {
        el: 'Τελείωσε το 1438, σχεδιασμένη από τον Onofrio della Cava από τη Νάπολη.',
        en: 'It was finished in 1438, designed by Onofrio della Cava of Naples.',
      },
    ],
    location: {
      lat: 42.64153,
      lng: 18.10722,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2624621', deltaM: 0 },
        { kind: 'osm', ref: 'way/171862545', deltaM: 7 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el:
          'Μόλις περάσεις την Πύλη Pile, είναι αμέσως δεξιά σου, στην αρχή του κεντρικού ' +
          'δρόμου: ένα χαμηλό πέτρινο τύμπανο με τρούλο. Το νερό είναι πόσιμο.',
        en:
          'As soon as you are through the Pile Gate it is on your right, at the start of ' +
          'the main street: a low stone drum with a dome. The water is drinkable.',
      },
    },
    question: {
      q: {
        el: 'Πώς φτάνει εδώ το νερό από τα βουνά;',
        en: 'How does the water get here from the hills?',
      },
      answers: [
        { el: 'Κατηφορίζει μόνο του σε πέτρινο κανάλι', en: 'It runs down on its own in a stone channel' },
        { el: 'Το ανεβάζει ως εδώ μια δυνατή αντλία', en: 'A strong pump pushes it up as far as here' },
        { el: 'Το κουβαλούσαν κάθε πρωί με γαϊδούρια', en: 'It was carried up each morning by donkeys' },
        { el: 'Μαζεύεται από τη βροχή πάνω στον τρούλο', en: 'It is rain water collected on the dome' },
      ],
      explanation: {
        el:
          'Το κανάλι κατηφορίζει ελάχιστα σε κάθε μέτρο, οπότε το νερό κυλάει μόνο με τη ' +
          'βαρύτητα. Καμία μηχανή, εδώ και σχεδόν εξακόσια χρόνια.',
        en:
          'The channel drops a tiny amount every metre, so gravity alone moves the water. ' +
          'No machine, for almost six hundred years.',
      },
    },
  },

  // ------------------------------------------------------- franciscan monastery
  {
    id: 'dubrovnik-franciscan-monastery',
    cityId: 'dubrovnik',
    emoji: '💊',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Το Φραγκισκανικό Μοναστήρι', en: 'The Franciscan Monastery' },
    tagline: {
      el: 'Ένα φαρμακείο που δεν έκλεισε από το 1317',
      en: 'A pharmacy that has not closed since 1317',
    },
    story: {
      el:
        'Οι Φραγκισκανοί μοναχοί έφτασαν στο Ντουμπρόβνικ τον 13ο αιώνα και το 1317 ' +
        'άρχισαν να χτίζουν το μοναστήρι τους ακριβώς μέσα από την Πύλη Pile. Την ίδια ' +
        'χρονιά άνοιξαν φαρμακείο, πρώτα για τους ίδιους και αμέσως μετά για όλη την πόλη. ' +
        'Από τότε δεν έκλεισε ποτέ. Είναι από τα λίγα φαρμακεία στον κόσμο που δουλεύουν ' +
        'συνέχεια εδώ και εφτακόσια χρόνια, και ακόμα πουλάει κρέμες με παλιές συνταγές. ' +
        'Μέσα υπάρχουν βάζα, ζυγαριές και βιβλία που δείχνουν πώς έφτιαχναν φάρμακα από ' +
        'βότανα, μέλι και λουλούδια. Δίπλα ανοίγει ένα ήσυχο περιστύλιο με λεπτές διπλές ' +
        'κολόνες, όπου κανένα κιονόκρανο δεν είναι ίδιο με το άλλο. Ο σεισμός του 1667 ' +
        'γκρέμισε σχεδόν όλη την εκκλησία, όμως το σκάλισμα της Παναγίας πάνω από την ' +
        'πόρτα, φτιαγμένο το 1498, έμεινε στη θέση του και είναι ακόμα εκεί.',
      en:
        'The Franciscan friars reached Dubrovnik in the 13th century, and in 1317 they ' +
        'began building their monastery just inside the Pile Gate. That same year they ' +
        'opened a pharmacy, first for themselves and almost at once for the whole town. It ' +
        'has never closed since. It is one of the very few pharmacies in the world that ' +
        'have worked without a break for seven hundred years, and it still sells creams ' +
        'made to old recipes. Inside there are jars, scales and books showing how medicines ' +
        'were mixed from herbs, honey and flowers. Next door a quiet cloister opens up, ' +
        'with slim double columns where no two capitals are carved the same. The earthquake ' +
        'of 1667 brought down almost the whole church, but the carving of Mary above the ' +
        'door, made in 1498, stayed where it was and is still there.',
    },
    facts: [
      {
        el: 'Το φαρμακείο άνοιξε το 1317 και λειτουργεί ακόμη σήμερα.',
        en: 'The pharmacy opened in 1317 and is still open today.',
      },
      {
        el: 'Το περιστύλιο σκαλίστηκε γύρω στο 1360 από τον Mihoje Brajkov από το Bar.',
        en: 'The cloister was carved around 1360 by Mihoje Brajkov of Bar.',
      },
      {
        el: 'Η βιβλιοθήκη του μοναστηριού φυλάει πάνω από 20.000 τόμους.',
        en: 'The monastery library holds more than 20,000 volumes.',
      },
    ],
    location: {
      lat: 42.6418,
      lng: 18.1078,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3509032', deltaM: 0 },
        { kind: 'osm', ref: 'way/843131885', deltaM: 15 },
        { kind: 'wikipedia', ref: 'Franciscan friary, Dubrovnik', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el:
          'Στη βόρεια πλευρά του κεντρικού δρόμου, απέναντι από την κρήνη. Η πόρτα του ' +
          'φαρμακείου είναι μέσα στο στενό πέρασμα, δίπλα στη μεγάλη πόρτα της εκκλησίας.',
        en:
          'On the north side of the main street, across from the fountain. The pharmacy ' +
          'door is inside the narrow passage, next to the big church door.',
      },
    },
    question: {
      q: {
        el: 'Τι κάνει ξεχωριστό αυτό το φαρμακείο;',
        en: 'What makes this pharmacy so unusual?',
      },
      answers: [
        { el: 'Δουλεύει ασταμάτητα από το 1317', en: 'It has worked non-stop since 1317' },
        { el: 'Είναι το μεγαλύτερο της Ευρώπης', en: 'It is the largest one in Europe' },
        { el: 'Δίνει τα φάρμακα δωρεάν σε όλους', en: 'It gives out all its medicines free' },
        { el: 'Χτίστηκε ολόκληρο μέσα σε βράχο', en: 'It was cut straight into the rock' },
      ],
      explanation: {
        el:
          'Άνοιξε το 1317 και δεν σταμάτησε ποτέ, ούτε μετά τον σεισμό. Εφτακόσια χρόνια ' +
          'είναι πολύ μεγάλο διάλειμμα για να μην το κάνει κανείς.',
        en:
          'It opened in 1317 and never stopped, not even after the earthquake. Seven ' +
          'hundred years is a very long time to keep something open.',
      },
    },

    museum: {
      doorNote: {
        el: 'Το φαρμακείο-μουσείο και το περιστύλιο θέλουν εισιτήριο. Μέσα, μίλα σιγά.',
        en: 'The museum pharmacy and the cloister need a ticket. Inside, keep your voice low.',
      },
      rooms: [
        {
          id: 'dubrovnik-franciscan-pharmacy-room',
          emoji: '💊',
          name: { el: 'Το παλιό φαρμακείο', en: 'The old pharmacy' },
          intro: {
            el:
              'Ένα μικρό δωμάτιο με ξύλινα ράφια από τοίχο σε τοίχο, γεμάτα βάζα. Εδώ οι ' +
              'μοναχοί ζύγιζαν, έτριβαν και ανακάτευαν. Δεν υπήρχαν εργοστάσια φαρμάκων: ' +
              'κάθε αλοιφή γινόταν με το χέρι, από φυτά που τα ήξεραν με το όνομά τους, και ' +
              'γραφόταν σε ένα βιβλίο για να μπορεί να ξαναγίνει ακριβώς ίδια.',
            en:
              'A small room with wooden shelves from wall to wall, filled with jars. This ' +
              'is where the friars weighed, ground and mixed. There were no medicine ' +
              'factories: every ointment was made by hand, from plants they knew by name, ' +
              'and written down in a book so that it could be made the same way again.',
          },
          exhibits: [
            {
              id: 'dubrovnik-franciscan-jars',
              name: { el: 'Τα ζωγραφισμένα βάζα', en: 'The painted jars' },
              blurb: {
                el:
                  'Σειρές από πήλινα βάζα με γαλάζια και κίτρινα σχέδια, το καθένα με ένα ' +
                  'όνομα γραμμένο στη λαιμαριά του. Το όνομα είναι λατινικό, γιατί τα ' +
                  'λατινικά ήταν η γλώσσα που καταλάβαιναν όλοι οι φαρμακοποιοί της ' +
                  'Ευρώπης. Τα βάζα δεν είναι απλώς όμορφα: το πηλό δεν τον περνάει η ' +
                  'υγρασία και το καπάκι κρατάει έξω το φως, οπότε ένα ξερό βότανο ' +
                  'αντέχει μέσα του μήνες χωρίς να χαλάσει.',
                en:
                  'Rows of clay jars painted in blue and yellow, each with a name written ' +
                  'across the neck. The name is in Latin, because Latin was the language ' +
                  'every pharmacist in Europe could read. The jars are not only pretty: ' +
                  'damp cannot get through fired clay and the lid keeps the light out, so ' +
                  'a dried herb keeps inside one for months without spoiling.',
              },
              question: {
                q: {
                  el: 'Γιατί τα ονόματα στα βάζα είναι λατινικά;',
                  en: 'Why are the names on the jars in Latin?',
                },
                answers: [
                  { el: 'Το διάβαζαν οι φαρμακοποιοί παντού', en: 'Pharmacists everywhere could read it' },
                  { el: 'Ήταν η γλώσσα των ίδιων των βοτάνων', en: 'It was the language the herbs came in' },
                  { el: 'Το ζήτησαν οι έμποροι της Βενετίας', en: 'The merchants of Venice asked for it' },
                  { el: 'Χωρούσαν λιγότερα γράμματα στον πηλό', en: 'Fewer letters would fit on the clay' },
                ],
                explanation: {
                  el:
                    'Ένα βάζο μπορεί να ταξιδέψει. Με λατινικό όνομα, ο φαρμακοποιός σε ' +
                    'κάθε πόλη ήξερε τι ακριβώς είχε μέσα.',
                  en:
                    'A jar can travel. With a Latin name on it, a pharmacist in any town ' +
                    'knew exactly what was inside.',
                },
              },
            },
            {
              id: 'dubrovnik-franciscan-scales',
              name: { el: 'Η ζυγαριά με τα σταθμά', en: 'The scales and their weights' },
              blurb: {
                el:
                  'Μια μπρούντζινη ζυγαριά με δύο δίσκους και ένα κουτί με μικροσκοπικά ' +
                  'σταθμά, μερικά όσο ένας σπόρος. Σε ένα φαρμακείο η ποσότητα είναι το ' +
                  'παν: το ίδιο φυτό σε λίγο βοηθάει και σε πολύ βλάπτει, οπότε ο μοναχός ' +
                  'δεν μάντευε ποτέ. Ζύγιζε. Και επειδή κάθε πόλη είχε τα δικά της μέτρα, ' +
                  'τα σταθμά ελέγχονταν, ακριβώς όπως ελεγχόταν και το μέτρο των εμπόρων ' +
                  'στην πλατεία.',
                en:
                  'A brass balance with two pans and a box of tiny weights, some no bigger ' +
                  'than a seed. In a pharmacy the amount is everything: the same plant ' +
                  'helps in a little and harms in a lot, so the friar never guessed. He ' +
                  'weighed. And because every town had measures of its own, the weights ' +
                  'were checked, just as the merchants’ measure on the square was checked.',
              },
              question: {
                q: {
                  el: 'Γιατί ζύγιζαν τόσο προσεκτικά τα βότανα;',
                  en: 'Why were the herbs weighed so carefully?',
                },
                answers: [
                  { el: 'Σε λίγο βοηθούν, σε πολύ βλάπτουν', en: 'A little helps, a lot does harm' },
                  { el: 'Τα πλήρωναν με το γραμμάριο σε χρυσό', en: 'They were paid for in gold by the gram' },
                  { el: 'Η ζυγαριά έδειχνε πόσο παλιά ήταν', en: 'The balance showed how old they were' },
                  { el: 'Έπρεπε να γεμίζουν ακριβώς το βάζο', en: 'They had to fill the jar exactly' },
                ],
                explanation: {
                  el:
                    'Η δόση είναι η διαφορά ανάμεσα σε φάρμακο και δηλητήριο. Γι’ αυτό ο ' +
                    'μοναχός ζύγιζε αντί να μαντεύει.',
                  en:
                    'The dose is the difference between a medicine and a poison. That is ' +
                    'why the friar weighed instead of guessing.',
                },
              },
            },
            {
              id: 'dubrovnik-franciscan-recipe-books',
              name: { el: 'Τα βιβλία με τις συνταγές', en: 'The books of recipes' },
              blurb: {
                el:
                  'Χοντρά χειρόγραφα βιβλία, γραμμένα με πένα, όπου κάθε σελίδα είναι μια ' +
                  'συνταγή: τι μπαίνει, πόσο από το καθένα, πόση ώρα βράζει. Είναι το πιο ' +
                  'σημαντικό αντικείμενο του φαρμακείου, γιατί χωρίς αυτά η γνώση θα ' +
                  'πέθαινε μαζί με τον μοναχό που την ήξερε. Με αυτά, ένας καινούργιος ' +
                  'μοναχός μπορούσε να φτιάξει την ίδια αλοιφή εκατό χρόνια αργότερα. Ένα ' +
                  'βιβλίο συνταγών είναι μηχανή του χρόνου.',
                en:
                  'Thick handwritten books, made with a pen, where every page is one ' +
                  'recipe: what goes in, how much of each, how long it boils. They are the ' +
                  'most important thing in the pharmacy, because without them the knowledge ' +
                  'would die with the friar who had it. With them, a new friar could make ' +
                  'the same ointment a hundred years later. A recipe book is a time machine.',
              },
              question: {
                q: {
                  el: 'Γιατί ήταν τόσο πολύτιμα τα βιβλία των συνταγών;',
                  en: 'Why were the recipe books so valuable?',
                },
                answers: [
                  { el: 'Κρατούσαν τη γνώση ζωντανή μετά τον μοναχό', en: 'They kept the knowledge alive after the friar' },
                  { el: 'Ήταν γραμμένα με μελάνι από αληθινό χρυσό', en: 'They were written in ink made of real gold' },
                  { el: 'Τα πουλούσαν πολύ ακριβά στους εμπόρους', en: 'They were sold to merchants for a high price' },
                  { el: 'Έδειχναν πού φύτρωναν τα σπάνια βότανα', en: 'They showed where the rare herbs were growing' },
                ],
                explanation: {
                  el:
                    'Ό,τι γράφεται, μένει. Χάρη σε αυτά τα βιβλία η ίδια συνταγή φτιάχτηκε ' +
                    'ξανά και ξανά για εφτακόσια χρόνια.',
                  en:
                    'What gets written down survives. Thanks to these books the same recipe ' +
                    'was made again and again for seven hundred years.',
                },
              },
            },
          ],
        },
        {
          id: 'dubrovnik-franciscan-cloister-room',
          emoji: '🌿',
          name: { el: 'Το περιστύλιο', en: 'The cloister' },
          intro: {
            el:
              'Ένα τετράγωνο αίθριο με κήπο στη μέση και μια στοά γύρω γύρω. Το ' +
              'περιστύλιο ήταν ο δρόμος του μοναχού: εδώ περπατούσε, διάβαζε και ' +
              'σκεφτόταν, χωρίς να βγει από το μοναστήρι. Είναι από τα ελάχιστα κομμάτια ' +
              'του κτιρίου που έμειναν όρθια στον σεισμό του 1667, και είναι πάνω από ' +
              'εξακόσια χρόνια παλιότερο από ό,τι βλέπεις γύρω του.',
            en:
              'A square courtyard with a garden in the middle and a covered walk all the ' +
              'way round. The cloister was the friar’s street: here he walked, read and ' +
              'thought without ever leaving the monastery. It is one of the very few parts ' +
              'of the building left standing by the earthquake of 1667, and it is older by ' +
              'centuries than most of what stands around it.',
          },
          exhibits: [
            {
              id: 'dubrovnik-franciscan-columns',
              name: { el: 'Οι διπλές κολόνες', en: 'The double columns' },
              blurb: {
                el:
                  'Οι κολόνες της στοάς δεν είναι μία μία αλλά δύο δύο, κολλητά, σαν ' +
                  'αδέρφια. Δύο λεπτές κολόνες σηκώνουν το ίδιο βάρος με μία χοντρή, όμως ' +
                  'αφήνουν πολύ περισσότερο φως και αέρα να περάσει προς τον κήπο. Το ' +
                  'σχέδιο λέγεται ρομανικό, και εδώ είναι από τα ομορφότερα παραδείγματα ' +
                  'σε ολόκληρη την Αδριατική. Μέτρησε πόσα ζευγάρια χωράνε σε μία πλευρά ' +
                  'πριν στρίψεις στη γωνία.',
                en:
                  'The columns of the walk do not stand one by one but two by two, side by ' +
                  'side like brothers. Two slim columns hold up the same weight as one ' +
                  'thick one, but they let far more light and air through to the garden. ' +
                  'The design is called Romanesque, and this is one of the finest examples ' +
                  'anywhere on the Adriatic. Count how many pairs fit along one side before ' +
                  'you turn the corner.',
              },
              question: {
                q: {
                  el: 'Τι κερδίζεις με δύο λεπτές κολόνες αντί για μία χοντρή;',
                  en: 'What do two slim columns give you that one thick one does not?',
                },
                answers: [
                  { el: 'Περνάει περισσότερο φως στον κήπο', en: 'More light gets through to the garden' },
                  { el: 'Σηκώνουν πολύ μεγαλύτερο βάρος', en: 'They hold up a far heavier roof' },
                  { el: 'Κοστίζουν πολύ λιγότερη πέτρα', en: 'They use up much less stone' },
                  { el: 'Αντέχουν καλύτερα στους σεισμούς', en: 'They stand up better to earthquakes' },
                ],
                explanation: {
                  el:
                    'Το ίδιο βάρος, μισό εμπόδιο. Ανάμεσα στα ζευγάρια μένουν φαρδιά ' +
                    'ανοίγματα, και ο κήπος τα χρειάζεται.',
                  en:
                    'The same weight, half the obstacle. Wide openings are left between the ' +
                    'pairs, and the garden needs them.',
                },
              },
            },
            {
              id: 'dubrovnik-franciscan-capitals',
              name: { el: 'Τα σκαλισμένα κιονόκρανα', en: 'The carved capitals' },
              blurb: {
                el:
                  'Πάνω σε κάθε ζευγάρι κολόνες κάθεται ένα κιονόκρανο, και κανένα δεν ' +
                  'είναι ίδιο με το άλλο. Άλλο έχει φύλλα, άλλο πουλιά, άλλο σκυλιά, άλλο ' +
                  'ανθρώπινα πρόσωπα που κάνουν γκριμάτσες. Ένα από αυτά δείχνει ένα ' +
                  'κεφάλι με πρησμένο μάγουλο, σαν να πονάει το δόντι του. Οι σκαλιστές ' +
                  'δούλευαν μαζί αλλά ο καθένας έβαζε το δικό του αστείο, και έξι αιώνες ' +
                  'αργότερα το αστείο είναι ακόμα εκεί και το βλέπεις.',
                en:
                  'On top of every pair of columns sits a capital, and no two of them are ' +
                  'the same. One has leaves, one has birds, one has dogs, one has human ' +
                  'faces pulling expressions. One of them shows a head with a swollen ' +
                  'cheek, as though its tooth were aching. The carvers worked side by side ' +
                  'but each put in his own joke, and six centuries later the joke is still ' +
                  'up there where you can see it.',
              },
              question: {
                q: {
                  el: 'Τι ισχύει για τα κιονόκρανα του περιστυλίου;',
                  en: 'What is true of the capitals in the cloister?',
                },
                answers: [
                  { el: 'Κανένα δεν είναι ίδιο με το άλλο', en: 'No two of them are carved alike' },
                  { el: 'Είναι όλα ακριβώς ίδια μεταξύ τους', en: 'They are all exactly the same shape' },
                  { el: 'Είναι ζωγραφισμένα και όχι σκαλισμένα', en: 'They are painted rather than carved' },
                  { el: 'Τα έφτιαξαν όλα μετά τον σεισμό', en: 'They were all made after the earthquake' },
                ],
                explanation: {
                  el:
                    'Κάθε σκαλιστής άφησε το δικό του σημάδι. Γι’ αυτό ο γύρος του ' +
                    'περιστυλίου είναι σαν να ξεφυλλίζεις βιβλίο.',
                  en:
                    'Every carver left his own mark. That is why walking round the cloister ' +
                    'is like turning the pages of a book.',
                },
              },
            },
            {
              id: 'dubrovnik-franciscan-garden',
              name: { el: 'Ο κήπος στη μέση', en: 'The garden in the middle' },
              blurb: {
                el:
                  'Στο κέντρο του περιστυλίου υπάρχει ένας μικρός κήπος με πράσινα φυτά ' +
                  'και πορτοκαλιές. Δεν είναι διακόσμηση: ένα μοναστήρι που έφτιαχνε ' +
                  'φάρμακα χρειαζόταν φρέσκα φυτά κοντά, και ο κήπος ήταν το ντουλάπι του ' +
                  'φαρμακείου. Ταυτόχρονα το αίθριο δουλεύει σαν φυσικό κλιματιστικό: ο ' +
                  'ήλιος χτυπάει τη μέση, ο αέρας ανεβαίνει, και κάτω από τη στοά μένει ' +
                  'δροσιά ακόμα και μέσα στο καλοκαίρι.',
                en:
                  'In the centre of the cloister there is a small garden of green plants ' +
                  'and orange trees. It is not decoration: a monastery that made medicines ' +
                  'needed fresh plants close by, and the garden was the pharmacy’s cupboard. ' +
                  'At the same time the courtyard works as natural air conditioning: the ' +
                  'sun strikes the middle, the warm air rises, and it stays cool under the ' +
                  'covered walk even in the middle of summer.',
              },
              question: {
                q: {
                  el: 'Γιατί χρειαζόταν κήπο ένα μοναστήρι με φαρμακείο;',
                  en: 'Why did a monastery with a pharmacy need a garden?',
                },
                answers: [
                  { el: 'Για να έχει φρέσκα βότανα δίπλα του', en: 'To have fresh herbs right beside it' },
                  { el: 'Για να ταΐζει τα ζώα του μοναστηριού', en: 'To feed the animals of the monastery' },
                  { el: 'Για να κρύβει το νερό της βροχής', en: 'To hide away the water from the rain' },
                  { el: 'Για να παίζουν εκεί τα παιδιά της πόλης', en: 'To give the town’s children a playground' },
                ],
                explanation: {
                  el:
                    'Το φρέσκο φυτό είναι πιο δυνατό από το ξερό. Ο κήπος ήταν δέκα βήματα ' +
                    'από τον πάγκο όπου γινόταν η αλοιφή.',
                  en:
                    'A fresh plant is stronger than a dried one. The garden was ten paces ' +
                    'from the bench where the ointment was made.',
                },
              },
            },
          ],
        },
        {
          id: 'dubrovnik-franciscan-door-room',
          emoji: '⛪',
          name: { el: 'Η πόρτα και ο τοίχος', en: 'The door and the wall' },
          intro: {
            el:
              'Πριν μπεις ή αφού βγεις, στάσου έξω στον δρόμο και κοίτα τον τοίχο. Εδώ ' +
              'βρίσκονται τα δύο πιο διάσημα κομμάτια του μοναστηριού, και κανένα από τα ' +
              'δύο δεν είναι μέσα σε βιτρίνα: ένα σκάλισμα πάνω από τη μεγάλη πόρτα, και ' +
              'ένα μικροσκοπικό πέτρινο κεφάλι που εξέχει χαμηλά, στο ύψος του γόνατου.',
            en:
              'Before you go in, or after you come out, stand in the street and look at ' +
              'the wall. The two most famous pieces of the monastery are here, and neither ' +
              'of them is in a glass case: a carving above the big door, and a tiny stone ' +
              'head that sticks out low down, at about knee height.',
          },
          exhibits: [
            {
              id: 'dubrovnik-franciscan-pieta',
              name: { el: 'Η Παναγία του 1498', en: 'The carving of 1498' },
              blurb: {
                el:
                  'Πάνω από τη μεγάλη πόρτα της εκκλησίας, μια πέτρινη Παναγία κρατάει τον ' +
                  'γιο της, με δύο αγίους δίπλα της. Τη σκάλισαν το 1498 τα αδέρφια ' +
                  'Petrović. Είναι από τα λίγα κομμάτια της παλιάς εκκλησίας που δεν ' +
                  'έπεσαν στον σεισμό του 1667, όταν σχεδόν όλα τα υπόλοιπα γκρεμίστηκαν. ' +
                  'Δεν έμεινε επειδή ήταν πιο δυνατή, αλλά επειδή ήταν χαμηλά και βαθιά ' +
                  'μέσα στον τοίχο· ο τοίχος έπεσε γύρω της και εκείνη κρατήθηκε.',
                en:
                  'Above the big church door, a stone Mary holds her son, with two saints ' +
                  'beside her. The Petrović brothers carved it in 1498. It is one of the ' +
                  'few pieces of the old church that did not come down in the earthquake of ' +
                  '1667, when nearly everything else did. It survived not because it was ' +
                  'stronger, but because it sat low and deep in the wall; the wall fell ' +
                  'around it and it held.',
              },
              question: {
                q: {
                  el: 'Πότε σκαλίστηκε αυτό το κομμάτι;',
                  en: 'When was this carving made?',
                },
                answers: [
                  { el: 'Το 1498, πριν από τον σεισμό', en: 'In 1498, before the earthquake' },
                  { el: 'Το 1667, τη χρονιά του σεισμού', en: 'In 1667, the year of the quake' },
                  { el: 'Το 1715, μετά τον σεισμό', en: 'In 1715, after the earthquake' },
                  { el: 'Το 1991, ύστερα από τον πόλεμο', en: 'In 1991, following the war' },
                ],
                explanation: {
                  el:
                    'Είναι σχεδόν διακόσια χρόνια παλαιότερη από τον σεισμό, και τον ' +
                    'πέρασε όρθια εκεί που στέκεται σήμερα.',
                  en:
                    'It is almost two hundred years older than the earthquake, and it came ' +
                    'through it standing where it stands now.',
                },
              },
            },
            {
              id: 'dubrovnik-franciscan-stone-head',
              name: { el: 'Το πέτρινο κεφάλι στον τοίχο', en: 'The stone head in the wall' },
              blurb: {
                el:
                  'Χαμηλά στον εξωτερικό τοίχο, κοντά στην είσοδο, ένα μικρό πέτρινο ' +
                  'πρόσωπο εξέχει λίγα εκατοστά. Είναι πολύ φθαρμένο, γιατί το πιάνουν ' +
                  'χέρια εδώ και αιώνες. Στην πόλη λένε ότι όποιος καταφέρει να σταθεί ' +
                  'πάνω του με τα δύο πόδια θα έχει τύχη, και θα δεις κόσμο να δοκιμάζει ' +
                  'και να γλιστράει. Δεν είναι εύκολο: η πέτρα είναι γυαλισμένη σαν ' +
                  'σαπούνι από όλους όσους δοκίμασαν πριν από σένα.',
                en:
                  'Low down on the outside wall, near the entrance, a small stone face ' +
                  'sticks out a few centimetres. It is very worn, because hands have been ' +
                  'grabbing at it for centuries. People in the town say that whoever can ' +
                  'stand on it with both feet will have good luck, and you will see ' +
                  'visitors trying and sliding off. It is not easy: the stone has been ' +
                  'polished like soap by everyone who tried before you.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι τόσο γυαλισμένη η πέτρα του κεφαλιού;',
                  en: 'Why is the stone of this head so polished?',
                },
                answers: [
                  { el: 'Την τρίβουν χέρια και πόδια αιώνες τώρα', en: 'Hands and feet have rubbed it for centuries' },
                  { el: 'Την αλείφουν με λάδι κάθε Φεβρουάριο', en: 'It is rubbed with oil every February' },
                  { el: 'Είναι φτιαγμένη από γυαλί και όχι πέτρα', en: 'It is made out of glass and not of stone' },
                  { el: 'Τη γυάλισε η θάλασσα πριν τη χτίσουν', en: 'The sea polished it before it was built in' },
                ],
                explanation: {
                  el:
                    'Τίποτα δεν λειαίνει την πέτρα όσο οι άνθρωποι. Κάθε δοκιμή αφαιρεί ' +
                    'λίγη σκόνη, και οι δοκιμές είναι εκατομμύρια.',
                  en:
                    'Nothing smooths stone like people do. Every attempt takes off a little ' +
                    'dust, and there have been millions of attempts.',
                },
              },
            },
            {
              id: 'dubrovnik-franciscan-library',
              name: { el: 'Η βιβλιοθήκη', en: 'The library' },
              blurb: {
                el:
                  'Το μοναστήρι φυλάει πάνω από είκοσι χιλιάδες τόμους και πολλά ' +
                  'χειρόγραφα, ανάμεσά τους και παλιά βιβλία συνταγών του φαρμακείου. Σε ' +
                  'μια πόλη που κάηκε, σείστηκε και ξαναχτίστηκε, μια βιβλιοθήκη είναι ' +
                  'κάτι σαν θαύμα: το χαρτί είναι το πιο εύθραυστο πράγμα που έχει ένα ' +
                  'κτίριο. Οι μοναχοί τα κουβαλούσαν, τα στέγνωναν και τα έδεναν ξανά, ' +
                  'γενιά μετά τη γενιά, και γι’ αυτό υπάρχουν ακόμα.',
                en:
                  'The monastery keeps more than twenty thousand volumes and many ' +
                  'manuscripts, among them old recipe books from the pharmacy. In a town ' +
                  'that has burned, shaken and been rebuilt, a library is something close ' +
                  'to a miracle: paper is the most fragile thing a building holds. The ' +
                  'friars carried the books out, dried them and bound them again, one ' +
                  'generation after another, and that is why they still exist.',
              },
              question: {
                q: {
                  el: 'Τι κάνει τόσο εύθραυστη μια παλιά βιβλιοθήκη;',
                  en: 'What makes an old library so fragile a thing?',
                },
                answers: [
                  { el: 'Το χαρτί καίγεται και μουχλιάζει εύκολα', en: 'Paper burns and grows mould very easily' },
                  { el: 'Τα βιβλία είναι πολύ βαριά για τα ράφια', en: 'The books are far too heavy for the shelves' },
                  { el: 'Το μελάνι σβήνει μέσα σε λίγους μήνες', en: 'The ink fades away within a few months' },
                  { el: 'Οι τόμοι είναι δεμένοι με λεπτό γυαλί', en: 'The volumes are bound with very thin glass' },
                ],
                explanation: {
                  el:
                    'Φωτιά, νερό και υγρασία είναι οι τρεις εχθροί του χαρτιού, και η πόλη ' +
                    'τα γνώρισε και τα τρία.',
                  en:
                    'Fire, water and damp are the three enemies of paper, and this town has ' +
                    'met all three of them.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'dubrovnik-franciscan-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι μικρός και βγαίνω από τον τοίχο εκεί που φτάνει το γόνατό σου. Ο ' +
              'κόσμος προσπαθεί να σταθεί πάνω μου για να έχει τύχη, και γλιστράει, γιατί ' +
              'με έχουν γυαλίσει αιώνες παπούτσια.',
            en:
              'I am small and I stick out of the wall about where your knee is. People try ' +
              'to stand on me for luck and slide straight off, because centuries of shoes ' +
              'have polished me smooth.',
          },
          hint: {
            el: 'Δεν είμαι μέσα στο μουσείο. Είμαι έξω, στον δρόμο.',
            en: 'I am not inside the museum. I am outside, in the street.',
          },
          answerExhibitId: 'dubrovnik-franciscan-stone-head',
        },
        {
          id: 'dubrovnik-franciscan-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Στέκομαι σε σειρά με πολλούς αδερφούς μου σε ξύλινο ράφι. Είμαι από ψημένο ' +
              'πηλό, με γαλάζια σχέδια, και στη λαιμαριά μου γράφει ένα λατινικό όνομα που ' +
              'λέει τι κρύβω μέσα μου.',
            en:
              'I stand in a row with many brothers on a wooden shelf. I am fired clay with ' +
              'blue patterns, and across my neck is a Latin name that says what I am hiding ' +
              'inside me.',
          },
          hint: {
            el: 'Το καπάκι μου κρατάει έξω το φως και την υγρασία.',
            en: 'My lid keeps out both the light and the damp.',
          },
          answerExhibitId: 'dubrovnik-franciscan-jars',
        },
        {
          id: 'dubrovnik-franciscan-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαστε δεκάδες, καθόμαστε πάνω σε λεπτά ζευγάρια κολόνων, και δεν θα βρεις ' +
              'δύο από εμάς ίδιους. Άλλος έχει φύλλα, άλλος πουλιά, και ένας έχει πρησμένο ' +
              'μάγουλο σαν να πονάει το δόντι του.',
            en:
              'There are dozens of us, we sit on top of slim pairs of columns, and you will ' +
              'not find two of us alike. One has leaves, one has birds, and one has a ' +
              'swollen cheek as though its tooth were aching.',
          },
          hint: {
            el: 'Για να μας δεις πρέπει να κοιτάξεις ψηλά, στον γύρο του κήπου.',
            en: 'To see us you have to look up, all the way round the garden.',
          },
          answerExhibitId: 'dubrovnik-franciscan-capitals',
        },
      ],
    },
  },

  // -------------------------------------------------------------------- stradun
  {
    id: 'dubrovnik-stradun',
    cityId: 'dubrovnik',
    emoji: '🧱',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Stradun', en: 'The Stradun' },
    tagline: {
      el: 'Ο φαρδύτερος δρόμος της πόλης ήταν κάποτε θάλασσα',
      en: 'The widest street in town used to be the sea',
    },
    story: {
      el:
        'Το Stradun έχει μήκος περίπου τριακόσια μέτρα και είναι ο λόγος που υπάρχει το ' +
        'Ντουμπρόβνικ. Παλιά υπήρχαν εδώ δύο ξεχωριστές πόλεις: μία πάνω σε ένα βραχώδες ' +
        'νησί και μία απέναντι, στην κατάφυτη πλαγιά, με ένα ρηχό θαλάσσιο κανάλι ' +
        'ανάμεσά τους. Γύρω στον 11ο ή 12ο αιώνα οι κάτοικοι γέμισαν το κανάλι με χώμα ' +
        'και πέτρες. Οι δύο πόλεις έγιναν μία, και εκεί που κολυμπούσαν ψάρια άνοιξε ' +
        'δρόμος. Μετά τον σεισμό του 1667 η Δημοκρατία ψήφισε κανόνες για το ξαναχτίσιμο, ' +
        'και γι’ αυτό όλα τα σπίτια εδώ έχουν το ίδιο ύψος, την ίδια πέτρα και μαγαζιά με ' +
        'πόρτα και παράθυρο κάτω από μία καμάρα. Το πλακόστρωτο στρώθηκε το 1468 και έχει ' +
        'γυαλιστεί από τόσα πόδια που λάμπει σαν καθρέφτης. Μετά τη βροχή, πρόσεχε: ' +
        'γλιστράει πραγματικά.',
      en:
        'The Stradun is about three hundred metres long, and it is the reason Dubrovnik ' +
        'exists. Long ago there were two separate towns here: one on a rocky island and ' +
        'one opposite it on the wooded slope, with a shallow sea channel between them. ' +
        'Around the 11th or 12th century people filled the channel in with earth and ' +
        'stones. The two towns became one, and where fish had swum there was now a street. ' +
        'After the earthquake of 1667 the Republic passed rules for the rebuilding, which ' +
        'is why every house along it has the same height, the same stone and shops with a ' +
        'door and a window sharing one arch. The paving was laid in 1468 and has been ' +
        'polished by so many feet that it shines like a mirror. After rain, take care: it ' +
        'really is slippery.',
    },
    facts: [
      {
        el: 'Έχει μήκος περίπου 300 μέτρα και ενώνει τις δύο πύλες της παλιάς πόλης.',
        en: 'It is about 300 metres long and links the old town’s two gates.',
      },
      {
        el: 'Το ασβεστολιθικό πλακόστρωτο στρώθηκε το 1468.',
        en: 'The limestone paving was laid down in 1468.',
      },
      {
        el: 'Το επίσημο όνομα του δρόμου είναι Placa· «Stradun» είναι το παρατσούκλι του.',
        en: 'The street’s official name is Placa; “Stradun” is its nickname.',
      },
    ],
    location: {
      lat: 42.6414,
      lng: 18.1081,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1818100', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Stradun (street)', deltaM: 4 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Graded B: the OpenStreetMap cross-check returned 429 from Overpass during the run and was not made. The point is Wikidata’s, as always; a missing cross-check lowers the grade and moves nothing.',
      findIt: {
        el:
          'Δεν χρειάζεται να τον ψάξεις: είναι ο πλατύς, γυαλιστερός δρόμος που πάει ίσια ' +
          'από την Πύλη Pile ως τον Πύργο του Ρολογιού. Στάσου στη μέση και κοίτα πίσω σου.',
        en:
          'You will not need to look for it: it is the wide, shiny street running straight ' +
          'from the Pile Gate to the Clock Tower. Stand halfway along and look back.',
      },
    },
    question: {
      q: {
        el: 'Τι υπήρχε εδώ πριν γίνει δρόμος;',
        en: 'What was here before it became a street?',
      },
      answers: [
        { el: 'Ένα ρηχό κανάλι με θαλασσινό νερό', en: 'A shallow channel of sea water' },
        { el: 'Ένα δάσος από ψηλές βελανιδιές', en: 'A forest of tall old oak trees' },
        { el: 'Ένα λατομείο με άσπρη πέτρα', en: 'A quarry full of white stone' },
        { el: 'Ένα χωράφι με αμπέλια και συκιές', en: 'A field of vines and fig trees' },
      ],
      explanation: {
        el:
          'Το κανάλι χώριζε το νησί από τη στεριά. Όταν γεμίστηκε, οι δύο μικρές πόλεις ' +
          'έγιναν μία και ο δρόμος έγινε το κέντρο της.',
        en:
          'The channel separated the island from the mainland. When it was filled, the two ' +
          'small towns became one and the street became its middle.',
      },
    },
  },

  // ------------------------------------------------------------ orlando’s column
  {
    id: 'dubrovnik-orlando-column',
    cityId: 'dubrovnik',
    emoji: '🗡️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Η Στήλη του Orlando', en: 'Orlando’s Column' },
    tagline: {
      el: 'Το μπράτσο του ήταν το επίσημο μέτρο της πόλης',
      en: 'His forearm was the town’s official measure',
    },
    story: {
      el:
        'Στη μέση της κεντρικής πλατείας στέκεται ένας πέτρινος ιππότης με σπαθί και ' +
        'ασπίδα. Είναι ο Orlando, ο Ρολάνδος των παλιών ιστοριών, και η στήλη του στήθηκε ' +
        'το 1418. Τέτοιες στήλες υπήρχαν σε πολλές ελεύθερες εμπορικές πόλεις της Ευρώπης ' +
        'και σήμαιναν πάντα το ίδιο πράγμα: εδώ δεν διατάζει κανένας ξένος βασιλιάς. Τις ' +
        'μέρες των γιορτών κυμάτιζε από την κορυφή η λευκή σημαία της Δημοκρατίας με μία ' +
        'λέξη πάνω της, Libertas, δηλαδή Ελευθερία. Ο Orlando όμως είχε και μια πολύ ' +
        'πρακτική δουλειά. Το μπράτσο του, από τον αγκώνα ως τα δάχτυλα, ήταν το επίσημο ' +
        'μέτρο μήκους της Δημοκρατίας: πενήντα ένα κόμμα δύο εκατοστά, ο «πήχης του ' +
        'Ντουμπρόβνικ». Μια γραμμή με το ίδιο ακριβώς μήκος είναι σκαλισμένη στη βάση, ' +
        'ώστε όποιος αγόραζε ύφασμα να μπορεί να ελέγξει επιτόπου αν τον κλέβουν.',
      en:
        'In the middle of the main square stands a stone knight with a sword and a shield. ' +
        'He is Orlando, the Roland of the old stories, and his column was raised in 1418. ' +
        'Columns like this stood in many free trading towns of Europe and always meant the ' +
        'same thing: no foreign king gives orders here. On feast days the white flag of ' +
        'the Republic flew from the top with one word on it, Libertas, which means Freedom. ' +
        'But Orlando had a very practical job as well. His forearm, from elbow to ' +
        'fingertips, was the Republic’s official measure of length: fifty-one point two ' +
        'centimetres, the “Dubrovnik elbow”. A line of exactly that length is carved into ' +
        'the base, so that anyone buying cloth could check on the spot whether he was being ' +
        'cheated.',
    },
    facts: [
      {
        el: 'Η στήλη στήθηκε το 1418 και τη σκάλισε ο Bonino από το Μιλάνο.',
        en: 'The column was raised in 1418 and carved by Bonino of Milan.',
      },
      {
        el: 'Ο «πήχης του Ντουμπρόβνικ» ήταν 51,2 εκατοστά, όσο το μπράτσο του Orlando.',
        en: 'The “Dubrovnik elbow” was 51.2 centimetres, the length of Orlando’s forearm.',
      },
      {
        el: 'Το 1825 μια καταιγίδα έριξε τη στήλη· ξαναστήθηκε το 1878.',
        en: 'A storm blew the column down in 1825; it was put back up in 1878.',
      },
    ],
    location: {
      lat: 42.641,
      lng: 18.1103,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3442751', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C: the Overpass fetch failed with a 504 and the item has no English Wikipedia article carrying coordinates, so neither cross-check answered. Wikidata’s point stands unchanged. Declared in the seed’s adjacentPairs with Sponza Palace, 24 m away: the column stands free on the square in front of the palace and the two are genuinely neighbours.',
      findIt: {
        el:
          'Στην πλατεία στο ανατολικό άκρο του Stradun, μπροστά από την εκκλησία του ' +
          'Αγίου Βλασίου. Σκύψε στη βάση και ψάξε τη σκαλισμένη γραμμή του παλιού μέτρου.',
        en:
          'On the square at the eastern end of the Stradun, in front of St Blaise’s church. ' +
          'Crouch at the base and look for the carved line of the old measure.',
      },
    },
    question: {
      q: {
        el: 'Τι ήταν ο «πήχης του Ντουμπρόβνικ»;',
        en: 'What was the “Dubrovnik elbow”?',
      },
      answers: [
        { el: 'Το επίσημο μέτρο μήκους της πόλης', en: 'The town’s official measure of length' },
        { el: 'Το πιο ακριβό ύφασμα της αγοράς', en: 'The dearest cloth sold in the market' },
        { el: 'Ο τίτλος του αρχηγού των φρουρών', en: 'The title of the captain of the guard' },
        { el: 'Το νόμισμα που έκοβε η Δημοκρατία', en: 'The coin the Republic used to mint' },
      ],
      explanation: {
        el:
          'Πριν από τα μέτρα και τα εκατοστά, κάθε πόλη είχε το δικό της μήκος. Εδώ ήταν ' +
          'σκαλισμένο στην πέτρα, να το βλέπουν όλοι.',
        en:
          'Before metres and centimetres, every town had a length of its own. Here it was ' +
          'carved into the stone where everyone could see it.',
      },
    },
  },

  // -------------------------------------------------------------- sponza palace
  {
    id: 'dubrovnik-sponza-palace',
    cityId: 'dubrovnik',
    emoji: '🕰️',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το Παλάτι Sponza', en: 'The Sponza Palace' },
    tagline: {
      el: 'Το τελωνείο όπου ζύγιζε μαζί σου κι ο Θεός',
      en: 'The customs house where God weighed with you',
    },
    story: {
      el:
        'Το Sponza τελείωσε το 1522 και ήταν το πιο πολυσύχναστο κτίριο της Δημοκρατίας. ' +
        'Κάθε σακί σιτάρι, κάθε τόπι ύφασμα και κάθε βαρέλι που έμπαινε στην πόλη ' +
        'ζυγιζόταν εδώ, στο τελωνείο. Στον τοίχο του αίθριου υπάρχει μια λατινική ' +
        'επιγραφή που λέει στους υπαλλήλους ότι όταν ζυγίζουν τα εμπορεύματα ζυγίζει μαζί ' +
        'τους και ο Θεός: μια προειδοποίηση σκαλισμένη στην πέτρα, εκεί που δούλευε ο ' +
        'πειρασμός. Στον πάνω όροφο το νομισματοκοπείο έκοβε τα νομίσματα της πόλης. Όταν ' +
        'ο σεισμός του 1667 ισοπέδωσε σχεδόν τα πάντα, το Sponza έμεινε όρθιο, και γι’ ' +
        'αυτό είναι σήμερα σχεδόν το μόνο κτίριο που δείχνει πώς ήταν η πόλη πριν. Μέσα ' +
        'φυλάσσονται τα Κρατικά Αρχεία, με έγγραφα που φτάνουν ως τον 12ο αιώνα. Δίπλα ' +
        'υψώνεται ο Πύργος του Ρολογιού, όπου δύο μπρούντζινες φιγούρες χτυπούν την ' +
        'καμπάνα κάθε ώρα.',
      en:
        'Sponza was finished in 1522 and was the busiest building in the Republic. Every ' +
        'sack of grain, every roll of cloth and every barrel entering the town was weighed ' +
        'here, in the customs house. On the wall of its courtyard a Latin inscription tells ' +
        'the clerks that when they weigh the goods God is weighing with them: a warning cut ' +
        'into stone at the exact spot where the temptation was. Upstairs, the mint struck ' +
        'the town’s coins. When the earthquake of 1667 flattened almost everything, Sponza ' +
        'stayed standing, which is why it is now nearly the only building that shows what ' +
        'the town looked like before. Inside are the State Archives, with documents ' +
        'reaching back to the 12th century. Beside it rises the Clock Tower, where two ' +
        'bronze figures strike the bell on the hour.',
    },
    facts: [
      {
        el: 'Τελείωσε το 1522 και ήταν ταυτόχρονα τελωνείο και νομισματοκοπείο.',
        en: 'It was finished in 1522 and was both the customs house and the mint.',
      },
      {
        el: 'Έμεινε όρθιο στον σεισμό του 1667, όταν έπεσε σχεδόν όλη η πόλη.',
        en: 'It stayed standing in the 1667 earthquake, when almost all the town fell.',
      },
      {
        el: 'Σήμερα στεγάζει τα Κρατικά Αρχεία, με έγγραφα από τον 12ο αιώνα.',
        en: 'It now houses the State Archives, with documents from the 12th century.',
      },
    ],
    location: {
      lat: 42.64111,
      lng: 18.11056,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q2986276', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2301265', deltaM: 17 },
        { kind: 'wikipedia', ref: 'Sponza Palace', deltaM: 3 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Declared in the seed’s adjacentPairs with Orlando’s Column, 24 m away on the same square. The Clock Tower next door has its own Wikidata item, Q3509014, 24 m from this point; it is not a separate place here but part of this one’s story.',
      findIt: {
        el:
          'Στη βορειοανατολική γωνία της πλατείας Luža, δίπλα στη στήλη του Orlando. ' +
          'Μπες στο αίθριο με τις καμάρες: η είσοδος στην αυλή δεν κοστίζει τίποτα.',
        en:
          'In the north-east corner of Luža square, next to Orlando’s column. Step into the ' +
          'arched courtyard: getting into the courtyard costs nothing.',
      },
    },
    question: {
      q: {
        el: 'Τι έπαθε το Sponza στον μεγάλο σεισμό του 1667;',
        en: 'What happened to Sponza in the great earthquake of 1667?',
      },
      answers: [
        { el: 'Έμεινε όρθιο σχεδόν χωρίς ζημιά', en: 'It stayed up with almost no damage' },
        { el: 'Έπεσε και ξαναχτίστηκε από την αρχή', en: 'It fell and was rebuilt from scratch' },
        { el: 'Κάηκε ολόκληρο και χάθηκαν τα αρχεία', en: 'It burned down and the records were lost' },
        { el: 'Βούλιαξε λίγο και έγειρε προς το λιμάνι', en: 'It sank a little and leant to the harbour' },
      ],
      explanation: {
        el:
          'Είναι από τα ελάχιστα κτίρια που άντεξαν. Γι’ αυτό, όταν κοιτάς το Sponza, ' +
          'βλέπεις την πόλη όπως ήταν πριν από τον σεισμό.',
        en:
          'It is one of the very few buildings that held. That is why, looking at Sponza, ' +
          'you are seeing the town as it was before the quake.',
      },
    },
  },

  // ------------------------------------------------------------- st blaise church
  {
    id: 'dubrovnik-st-blaise-church',
    cityId: 'dubrovnik',
    emoji: '⛪',
    category: 'art',
    difficulty: 2,

    name: { el: 'Η Εκκλησία του Αγίου Βλασίου', en: 'The Church of St Blaise' },
    tagline: {
      el: 'Ο άγιος που κρατάει την πόλη στα χέρια του',
      en: 'The saint who holds the town in his hands',
    },
    story: {
      el:
        'Ο Άγιος Βλάσιος, ο Sveti Vlaho, είναι ο προστάτης του Ντουμπρόβνικ, και θα τον ' +
        'δεις παντού: στις πύλες, στα τείχη, στα παλιά νομίσματα. Ο θρύλος λέει ότι το ' +
        '971 βενετσιάνικα καράβια άραξαν έξω από την πόλη κάνοντας τους φίλους, και ότι ο ' +
        'άγιος εμφανίστηκε στο όνειρο ενός ιερέα, του Stojko, και τον προειδοποίησε. Οι ' +
        'πύλες έκλεισαν και η πόλη γλίτωσε. Από τότε τον γιορτάζουν κάθε 3 Φεβρουαρίου με ' +
        'μια πομπή γεμάτη σημαίες, μια γιορτή που από το 2009 βρίσκεται στον κατάλογο ' +
        'άυλης κληρονομιάς της UNESCO. Η εκκλησία που βλέπεις χτίστηκε από το 1706 ως το ' +
        '1715 από τον Βενετό αρχιτέκτονα Marino Gropelli, γιατί η προηγούμενη έπαθε ζημιές ' +
        'στον σεισμό και μετά κάηκε. Από εκείνη τη φωτιά σώθηκε ένα ασημένιο άγαλμα του ' +
        'αγίου, που κρατάει ένα μοντέλο της πόλης όπως ήταν πριν από τον σεισμό.',
      en:
        'Saint Blaise, Sveti Vlaho, is the protector of Dubrovnik, and you will see him ' +
        'everywhere: on the gates, on the walls, on the old coins. Legend says that in 971 ' +
        'Venetian ships anchored outside the town pretending to be friends, and that the ' +
        'saint appeared in a dream to a priest called Stojko and warned him. The gates were ' +
        'shut and the town was safe. Ever since, he has been celebrated every 3 February ' +
        'with a procession full of flags, a festival that has been on UNESCO’s intangible ' +
        'heritage list since 2009. The church you see was built between 1706 and 1715 by ' +
        'the Venetian architect Marino Gropelli, because the one before it was damaged in ' +
        'the earthquake and then burned. One thing survived that fire: a silver statue of ' +
        'the saint, holding a model of the town as it was before the quake.',
    },
    facts: [
      {
        el: 'Η σημερινή εκκλησία χτίστηκε από το 1706 ως το 1715 από τον Marino Gropelli.',
        en: 'The present church was built from 1706 to 1715 by Marino Gropelli.',
      },
      {
        el: 'Η γιορτή του αγίου, στις 3 Φεβρουαρίου, μπήκε στον κατάλογο της UNESCO το 2009.',
        en: 'The saint’s feast, on 3 February, joined the UNESCO list in 2009.',
      },
      {
        el: 'Το ασημένιο άγαλμα κρατάει μοντέλο της πόλης όπως ήταν πριν από το 1667.',
        en: 'The silver statue holds a model of the town as it was before 1667.',
      },
    ],
    location: {
      lat: 42.64056,
      lng: 18.11028,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2986286', deltaM: 0 },
        { kind: 'wikipedia', ref: "St Blaise's Church", deltaM: 16 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Graded B: the Overpass fetch failed with a 504 during the run, so the OpenStreetMap cross-check was not made. Wikipedia agrees with Wikidata to 16 m.',
      findIt: {
        el:
          'Στη νότια πλευρά της πλατείας Luža, με φαρδιά σκαλιά μπροστά της. Κοίτα στην ' +
          'κορυφή της πρόσοψης: ο άγιος εκεί ψηλά κρατάει τη μικρογραφία της πόλης.',
        en:
          'On the south side of Luža square, with wide steps in front of it. Look at the ' +
          'very top of the front: the saint up there is holding the town in miniature.',
      },
    },
    question: {
      q: {
        el: 'Τι δείχνει το μοντέλο στα χέρια του ασημένιου αγάλματος;',
        en: 'What does the model in the silver statue’s hands show?',
      },
      answers: [
        { el: 'Την πόλη όπως ήταν πριν τον σεισμό', en: 'The town as it stood before the quake' },
        { el: 'Την πόλη όπως σχεδίαζαν να τη χτίσουν', en: 'The town as they planned to rebuild it' },
        { el: 'Το καράβι που έφερε τον άγιο εδώ', en: 'The ship that brought the saint here' },
        { el: 'Το μοναστήρι στο νησί απέναντι', en: 'The monastery on the island opposite' },
      ],
      explanation: {
        el:
          'Το άγαλμα είναι παλαιότερο από τον σεισμό του 1667, οπότε το μοντέλο του είναι ' +
          'από τις ελάχιστες εικόνες της χαμένης πόλης.',
        en:
          'The statue is older than the 1667 earthquake, so its little model is one of the ' +
          'very few pictures of the town that was lost.',
      },
    },
  },

  // ------------------------------------------------------------- rector’s palace
  {
    id: 'dubrovnik-rectors-palace',
    cityId: 'dubrovnik',
    emoji: '🏛️',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Το Παλάτι του Ρέκτορα', en: 'The Rector’s Palace' },
    tagline: {
      el: 'Ο άρχοντας κυβερνούσε έναν μήνα και έμενε μέσα',
      en: 'The ruler governed for a month and lived in',
    },
    story: {
      el:
        'Η Δημοκρατία της Ραγούζας δεν είχε βασιλιά, και φρόντισε να μην αποκτήσει ποτέ. ' +
        'Ο άρχοντάς της, ο Ρέκτορας, εκλεγόταν ανάμεσα στους ευγενείς για έναν μόνο μήνα. ' +
        'Εκείνον τον μήνα ζούσε μέσα σε αυτό το παλάτι και έβγαινε μόνο για επίσημες ' +
        'υποχρεώσεις, και μετά δεν μπορούσε να ξαναεκλεγεί για δύο ολόκληρα χρόνια. Ένας ' +
        'μήνας δεν φτάνει για να γίνει κανείς παντοδύναμος: αυτό ήταν όλο το κόλπο, και ' +
        'κράτησε τη μικρή Δημοκρατία ελεύθερη ως το 1808. Το παλάτι χτίστηκε τον 15ο ' +
        'αιώνα και ξαναχτίστηκε δύο φορές, γιατί φύλαγε και μπαρούτι που εξερράγη· γι’ ' +
        'αυτό το κτίριο ανακατεύει γοτθικά και αναγεννησιακά κομμάτια. Πάνω από την πόρτα ' +
        'της αίθουσας του συμβουλίου είναι γραμμένο στα λατινικά: ξεχάστε τα δικά σας και ' +
        'φροντίστε τα κοινά. Στην αυλή στέκεται η μοναδική προτομή που έστησε ποτέ η ' +
        'Δημοκρατία για άνθρωπο.',
      en:
        'The Republic of Ragusa had no king, and it took care never to get one. Its ruler, ' +
        'the Rector, was chosen from among the noblemen for a single month. For that month ' +
        'he lived inside this palace and went out only on official duty, and afterwards he ' +
        'could not be elected again for two whole years. A month is not long enough for ' +
        'anyone to become all-powerful: that was the whole trick, and it kept the little ' +
        'Republic free until 1808. The palace was built in the 15th century and rebuilt ' +
        'twice, because it also stored gunpowder and the gunpowder exploded; that is why ' +
        'the building mixes Gothic and Renaissance pieces. Above the council hall door, in ' +
        'Latin, it says: forget your own affairs and take care of the public ones. In the ' +
        'courtyard stands the only bust the Republic ever raised to a person.',
    },
    facts: [
      {
        el: 'Ο Ρέκτορας κυβερνούσε έναν μήνα και δεν ξαναεκλεγόταν πριν περάσουν δύο χρόνια.',
        en: 'A Rector ruled for one month and could not be re-elected for two years.',
      },
      {
        el: 'Η Δημοκρατία της Ραγούζας κράτησε ελεύθερη ως το 1808.',
        en: 'The Republic of Ragusa stayed free until 1808.',
      },
      {
        el: 'Η προτομή στην αυλή δείχνει τον πλοιοκτήτη Miho Pracat και στήθηκε το 1638.',
        en: 'The bust in the courtyard is the shipowner Miho Pracat, put up in 1638.',
      },
    ],
    location: {
      lat: 42.64028,
      lng: 18.11083,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2497590', deltaM: 0 },
        { kind: 'wikipedia', ref: "Rector's Palace, Dubrovnik", deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'The building, not the institution: the Cultural History Museum inside it is Q16116657, whose point sits 15 m away and would have been an undeclared neighbour. Graded B because the Overpass fetch failed with a 504 during the run; Wikipedia lands on Wikidata’s point exactly.',
      findIt: {
        el:
          'Ένα λεπτό νότια από την πλατεία Luža, στον δρόμο προς τον καθεδρικό. Θα το ' +
          'γνωρίσεις από τη στοά με τις έξι καμάρες που βλέπει στον δρόμο.',
        en:
          'One minute south of Luža square, on the way to the cathedral. You will know it ' +
          'by the porch of six arches facing the street.',
      },
    },
    question: {
      q: {
        el: 'Γιατί άλλαζε άρχοντα κάθε μήνα η Δημοκρατία;',
        en: 'Why did the Republic change its ruler every month?',
      },
      answers: [
        { el: 'Για να μη γίνει κανείς πολύ δυνατός', en: 'So that no one could grow too strong' },
        { el: 'Γιατί η δουλειά πλήρωνε πολύ λίγα', en: 'Because the job was very badly paid' },
        { el: 'Για να προλάβουν όλοι οι ευγενείς', en: 'So that every nobleman got a turn' },
        { el: 'Γιατί το παλάτι ήταν πολύ μικρό', en: 'Because the palace was far too small' },
      ],
      explanation: {
        el:
          'Ένας μήνας είναι πολύ λίγος για να μαζέψει κανείς εξουσία. Έτσι η πόλη έμεινε ' +
          'χωρίς βασιλιά για εκατοντάδες χρόνια.',
        en:
          'A month is far too short to gather power in. That is how the town stayed with no ' +
          'king for hundreds of years.',
      },
    },

    museum: {
      doorNote: {
        el: 'Η στοά φαίνεται δωρεάν από τον δρόμο. Η αυλή και τα δωμάτια θέλουν εισιτήριο.',
        en: 'The porch can be seen free from the street. The courtyard and rooms need a ticket.',
      },
      rooms: [
        {
          id: 'dubrovnik-rectors-palace-courtyard-room',
          emoji: '🪨',
          name: { el: 'Η στοά και η αυλή', en: 'The porch and the courtyard' },
          intro: {
            el:
              'Το παλάτι δεν ξεκινάει με πόρτα αλλά με μια στοά ανοιχτή στον δρόμο. Αυτό ' +
              'ήταν σκόπιμο: ο κόσμος στεκόταν εδώ, στα ίσια, για να ζητήσει κάτι από τη ' +
              'διοίκηση. Πιο μέσα ανοίγει μια τετράγωνη αυλή με σκάλα, όπου γίνονταν οι ' +
              'επίσημες τελετές και όπου, τα καλοκαίρια, παίζεται ακόμα μουσική.',
            en:
              'The palace does not begin with a door but with a porch open to the street. ' +
              'That was deliberate: people stood here, on the level, to ask the government ' +
              'for something. Further in, a square courtyard with a staircase opens up, ' +
              'where the official ceremonies happened and where music is still played on ' +
              'summer evenings.',
          },
          exhibits: [
            {
              id: 'dubrovnik-rectors-palace-arches',
              name: { el: 'Οι έξι καμάρες', en: 'The six arches' },
              blurb: {
                el:
                  'Η στοά έχει έξι καμάρες, που πατούν σε πέντε κολόνες και σε δύο μισές ' +
                  'κολόνες στις άκρες. Μια στοά είναι σκεπή χωρίς τοίχο: σε προστατεύει ' +
                  'από τη βροχή και τον ήλιο, αλλά δεν σε κρύβει. Το παλάτι της Ραγούζας ' +
                  'επέλεξε να αρχίζει έτσι, με έναν χώρο όπου μπορούσε να μπει ο ' +
                  'οποιοσδήποτε χωρίς να ζητήσει άδεια, και αυτό λέει κάτι για την πόλη ' +
                  'που το έχτισε.',
                en:
                  'The porch has six arches, resting on five columns and two half-columns ' +
                  'at the ends. A porch is a roof without a wall: it keeps the rain and the ' +
                  'sun off you, but it does not hide you. The palace of Ragusa chose to ' +
                  'begin this way, with a space anyone could walk into without asking ' +
                  'permission, and that says something about the town that built it.',
              },
              question: {
                q: {
                  el: 'Τι κάνει μια στοά διαφορετική από ένα δωμάτιο;',
                  en: 'What makes a porch different from a room?',
                },
                answers: [
                  { el: 'Έχει σκεπή αλλά όχι κλειστό τοίχο', en: 'It has a roof but no closed wall' },
                  { el: 'Έχει τοίχους αλλά καθόλου σκεπή', en: 'It has walls but no roof at all' },
                  { el: 'Είναι πάντα κάτω από το έδαφος', en: 'It is always below ground level' },
                  { el: 'Χτίζεται μόνο από ξύλο και όχι πέτρα', en: 'It is built of wood and never of stone' },
                ],
                explanation: {
                  el:
                    'Σκεπή χωρίς τοίχο σημαίνει ότι μπαίνεις χωρίς να σου ανοίξει κανείς. ' +
                    'Γι’ αυτό οι στοές είναι χώροι του κόσμου.',
                  en:
                    'A roof with no wall means you walk in without anyone opening a door for ' +
                    'you. That is why porches belong to everybody.',
                },
              },
            },
            {
              id: 'dubrovnik-rectors-palace-aesculapius',
              name: { el: 'Το κιονόκρανο του Ασκληπιού', en: 'The Aesculapius capital' },
              blurb: {
                el:
                  'Στη δεξιά άκρη της στοάς, το κιονόκρανο της τελευταίας κολόνας δείχνει ' +
                  'έναν άντρα στο εργαστήριό του, ανάμεσα σε βάζα και σκεύη. Είναι ο ' +
                  'Ασκληπιός, ο αρχαίος θεός της ιατρικής. Ένας θεός των φαρμάκων ' +
                  'σκαλισμένος στο κυβερνείο δεν είναι τυχαίος: η πόλη ζούσε από το ' +
                  'εμπόριο και φοβόταν πιο πολύ την αρρώστια από τον στρατό, γιατί ένα ' +
                  'άρρωστο λιμάνι δεν έχει πελάτες.',
                en:
                  'At the right-hand end of the porch, the capital of the last column shows ' +
                  'a man in his workshop among jars and instruments. He is Aesculapius, the ' +
                  'ancient god of medicine. A god of medicines carved on the seat of ' +
                  'government is no accident: the town lived by trade and feared illness ' +
                  'more than armies, because a sick harbour has no customers.',
              },
              question: {
                q: {
                  el: 'Γιατί σκάλισαν έναν θεό της ιατρικής στο κυβερνείο;',
                  en: 'Why carve a god of medicine on the seat of government?',
                },
                answers: [
                  { el: 'Η αρρώστια απειλούσε το λιμάνι πιο πολύ', en: 'Illness was a bigger threat to the port' },
                  { el: 'Ο Ρέκτορας ήταν πάντοτε και γιατρός', en: 'The Rector was always a doctor as well' },
                  { el: 'Ο σκαλιστής μπέρδεψε τα σχέδιά του', en: 'The carver had mixed up his own drawings' },
                  { el: 'Το παλάτι ήταν κάποτε νοσοκομείο', en: 'The palace used to be a town hospital' },
                ],
                explanation: {
                  el:
                    'Μια πόλη-λιμάνι κερδίζει από τα καράβια και χάνεται από τις ' +
                    'επιδημίες. Η υγεία ήταν πολιτική, όχι απλώς ιατρική.',
                  en:
                    'A harbour town is made by ships and undone by disease. Health here was ' +
                    'politics, not only medicine.',
                },
              },
            },
            {
              id: 'dubrovnik-rectors-palace-pracat',
              name: { el: 'Η προτομή του Miho Pracat', en: 'The bust of Miho Pracat' },
              blurb: {
                el:
                  'Στην αυλή στέκεται μια μπρούντζινη προτομή που στήθηκε το 1638. Δείχνει ' +
                  'τον Miho Pracat, πλοιοκτήτη και έμπορο από το κοντινό νησί Λοπούντ, που ' +
                  'άφησε ολόκληρη την περιουσία του στην πόλη. Είναι το μοναδικό άγαλμα ' +
                  'που έστησε ποτέ η Δημοκρατία για έναν συγκεκριμένο άνθρωπο. Η πόλη ' +
                  'απέφευγε επίτηδες τα αγάλματα ανθρώπων: φοβόταν ότι όποιος αποκτήσει ' +
                  'άγαλμα, μετά θέλει και εξουσία.',
                en:
                  'In the courtyard stands a bronze bust put up in 1638. It shows Miho ' +
                  'Pracat, a shipowner and merchant from the nearby island of Lopud, who ' +
                  'left his whole fortune to the town. It is the only statue the Republic ' +
                  'ever raised to a named person. The town avoided statues of people on ' +
                  'purpose: it worried that whoever gets a statue starts wanting power next.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι σπάνια αυτή η προτομή;',
                  en: 'Why is this bust such a rare thing?',
                },
                answers: [
                  { el: 'Είναι το μόνο άγαλμα ανθρώπου της Δημοκρατίας', en: 'It is the Republic’s only statue of a person' },
                  { el: 'Είναι το πρώτο μπρούντζινο άγαλμα της Ευρώπης', en: 'It is the first bronze statue made in Europe' },
                  { el: 'Είναι το μοναδικό άγαλμα που άντεξε τον σεισμό', en: 'It is the only statue that survived the quake' },
                  { el: 'Είναι το πιο μικρό άγαλμα ολόκληρης της πόλης', en: 'It is the smallest statue in the whole town' },
                ],
                explanation: {
                  el:
                    'Η Ραγούζα τιμούσε θεσμούς, όχι πρόσωπα. Ο Pracat είναι η μοναδική ' +
                    'εξαίρεση σε εκατοντάδες χρόνια.',
                  en:
                    'Ragusa honoured institutions, not individuals. Pracat is the single ' +
                    'exception in hundreds of years.',
                },
              },
            },
            {
              id: 'dubrovnik-rectors-palace-staircase',
              name: { el: 'Η σκάλα της αυλής', en: 'The courtyard staircase' },
              blurb: {
                el:
                  'Από την αυλή ανεβαίνει μια φαρδιά πέτρινη σκάλα με σκαλιστά κάγκελα. ' +
                  'Δεν είναι απλώς τρόπος να πας πάνω: είναι σκηνή. Ο Ρέκτορας ' +
                  'εμφανιζόταν στην κορυφή της για να τον δουν όλοι, και οι επίσημοι ' +
                  'επισκέπτες ανέβαιναν αργά ενώ η αυλή τους κοιτούσε. Σε ένα κτίριο ' +
                  'εξουσίας, ακόμα και τα σκαλιά έχουν δουλειά: αποφασίζουν ποιος στέκεται ' +
                  'ψηλά και ποιος κοιτάζει από κάτω.',
                en:
                  'A wide stone staircase with carved rails climbs out of the courtyard. It ' +
                  'is not simply a way upstairs: it is a stage. The Rector appeared at the ' +
                  'top of it so that everyone could see him, and official visitors walked up ' +
                  'slowly while the courtyard watched. In a building of power, even the ' +
                  'steps have a job: they decide who stands high and who looks up.',
              },
              question: {
                q: {
                  el: 'Τι άλλο έκανε αυτή η σκάλα, εκτός από το να ανεβάζει;',
                  en: 'What else did this staircase do, besides go up?',
                },
                answers: [
                  { el: 'Έδειχνε ποιος στεκόταν πιο ψηλά', en: 'It showed who was standing higher' },
                  { el: 'Έκρυβε τη μυστική έξοδο του παλατιού', en: 'It hid the secret way out of the palace' },
                  { el: 'Μάζευε το νερό της βροχής στην αυλή', en: 'It gathered the rain water in the yard' },
                  { el: 'Ζύγιζε τα εμπορεύματα των καραβιών', en: 'It weighed the goods from the ships' },
                ],
                explanation: {
                  el:
                    'Το ύψος μιλάει χωρίς λόγια. Η σκάλα ήταν το μέρος όπου η πόλη έβλεπε ' +
                    'τον άρχοντά της, μία φορά τον μήνα.',
                  en:
                    'Height speaks without words. The staircase was where the town got to ' +
                    'look at its ruler, once a month.',
                },
              },
            },
          ],
        },
        {
          id: 'dubrovnik-rectors-palace-upstairs-room',
          emoji: '📜',
          name: { el: 'Επάνω, εκεί που κυβερνούσαν', en: 'Upstairs, where they governed' },
          intro: {
            el:
              'Ο πάνω όροφος ήταν μαζί γραφείο και σπίτι. Εδώ συνεδρίαζαν τα συμβούλια ' +
              'των ευγενών, εδώ υπέγραφαν, και εδώ κοιμόταν ο Ρέκτορας τον έναν μήνα του. ' +
              'Είναι ένα σπάνιο κτίριο: σχεδιάστηκε ώστε ο άνθρωπος που κυβερνά να ζει ' +
              'κλεισμένος μέσα στη δουλειά του, και να τη φύγει μετά από τριάντα μέρες.',
            en:
              'The upper floor was office and home at once. The councils of the noblemen ' +
              'met here, signed here, and here the Rector slept through his single month. ' +
              'It is a rare sort of building: it was designed so that the person governing ' +
              'lived shut inside the job, and walked away from it after thirty days.',
          },
          exhibits: [
            {
              id: 'dubrovnik-rectors-palace-inscription',
              name: { el: 'Η επιγραφή πάνω από την πόρτα', en: 'The inscription over the door' },
              blurb: {
                el:
                  'Πάνω από την πόρτα της μεγάλης αίθουσας του συμβουλίου είναι σκαλισμένα ' +
                  'τα λατινικά λόγια «Obliti privatorum publica curate»: ξεχάστε τα δικά ' +
                  'σας και φροντίστε τα κοινά. Δεν ήταν στολίδι. Ήταν το τελευταίο πράγμα ' +
                  'που διάβαζε κάθε ευγενής πριν μπει να ψηφίσει, τοποθετημένο ακριβώς εκεί ' +
                  'όπου δεν μπορούσες να το προσπεράσεις. Μια πόλη που δεν εμπιστεύεται ' +
                  'κανέναν απόλυτα, γράφει τους κανόνες στις πόρτες.',
                en:
                  'Above the door of the great council hall are carved the Latin words ' +
                  '“Obliti privatorum publica curate”: forget your own affairs and take care ' +
                  'of the public ones. It was not decoration. It was the last thing every ' +
                  'nobleman read before going in to vote, placed exactly where you could ' +
                  'not walk past it. A town that trusts nobody completely writes its rules ' +
                  'on the doorways.',
              },
              question: {
                q: {
                  el: 'Τι λέει η επιγραφή σε όποιον μπαίνει να κυβερνήσει;',
                  en: 'What does the inscription tell whoever goes in to govern?',
                },
                answers: [
                  { el: 'Να σκέφτεται την πόλη, όχι τον εαυτό του', en: 'To think of the town and not of himself' },
                  { el: 'Να μη μιλάει καθόλου μέσα στην αίθουσα', en: 'To say nothing at all inside the chamber' },
                  { el: 'Να πληρώνει τους φόρους του πριν μπει', en: 'To pay all his taxes before he goes in' },
                  { el: 'Να αφήσει τα όπλα του έξω στον διάδρομο', en: 'To leave his weapons out in the corridor' },
                ],
                explanation: {
                  el:
                    'Είναι εντολή, όχι ευχή. Και είναι σκαλισμένη σε πέτρα, εκεί που δεν ' +
                    'μπορείς να πεις ότι δεν την είδες.',
                  en:
                    'It is an order, not a wish. And it is cut into stone, where nobody can ' +
                    'claim they did not see it.',
                },
              },
            },
            {
              id: 'dubrovnik-rectors-palace-rector-rooms',
              name: { el: 'Τα δωμάτια του Ρέκτορα', en: 'The Rector’s own rooms' },
              blurb: {
                el:
                  'Λίγα, μικρά δωμάτια με έπιπλα της εποχής: εκεί έμενε ο άρχοντας για ' +
                  'τριάντα μέρες. Δεν έφερνε την οικογένειά του και δεν έβγαινε παρά μόνο ' +
                  'για επίσημες υποχρεώσεις. Ακούγεται τιμωρία, αλλά ήταν σχέδιο: όσο ' +
                  'λιγότερο ζούσε ο Ρέκτορας τη δική του ζωή, τόσο λιγότερους φίλους και ' +
                  'συμφωνίες μπορούσε να μαζέψει. Μετά τον μήνα του γυρνούσε σπίτι του και ' +
                  'γινόταν πάλι ένας από τους πολλούς.',
                en:
                  'A few small rooms with furniture of the period: this is where the ruler ' +
                  'stayed for thirty days. He did not bring his family and he did not go out ' +
                  'except on official business. It sounds like a punishment, but it was a ' +
                  'design: the less of his own life the Rector lived, the fewer friends and ' +
                  'private deals he could collect. After his month he went home and became ' +
                  'one of the many again.',
              },
              question: {
                q: {
                  el: 'Γιατί ο Ρέκτορας δεν έβγαινε ελεύθερα από το παλάτι;',
                  en: 'Why could the Rector not come and go as he pleased?',
                },
                answers: [
                  { el: 'Για να μη μαζεύει φίλους και συμφωνίες', en: 'So he could not collect friends and deals' },
                  { el: 'Γιατί οι δρόμοι ήταν πολύ επικίνδυνοι', en: 'Because the streets outside were dangerous' },
                  { el: 'Γιατί δεν του άρεσε καθόλου το περπάτημα', en: 'Because he did not enjoy walking anywhere' },
                  { el: 'Για να προλαβαίνει να διαβάζει τα χαρτιά', en: 'So he had time to read all of the papers' },
                ],
                explanation: {
                  el:
                    'Η εξουσία μαζεύεται με γνωριμίες. Κλείνοντας τον Ρέκτορα μέσα, η πόλη ' +
                    'έκοβε τις γνωριμίες στη ρίζα.',
                  en:
                    'Power is gathered through contacts. By shutting the Rector in, the town ' +
                    'cut the contacts off at the root.',
                },
              },
            },
            {
              id: 'dubrovnik-rectors-palace-council-hall',
              name: { el: 'Η αίθουσα του Μεγάλου Συμβουλίου', en: 'The Great Council hall' },
              blurb: {
                el:
                  'Στο Μεγάλο Συμβούλιο κάθονταν όλοι οι ενήλικοι άντρες των ευγενών ' +
                  'οικογενειών, και αυτοί εξέλεγαν τον Ρέκτορα. Δεν ήταν δημοκρατία όπως ' +
                  'τη λέμε σήμερα: οι περισσότεροι κάτοικοι, όλες οι γυναίκες και όλοι οι ' +
                  'ναυτικοί και τεχνίτες, δεν ψήφιζαν ποτέ. Ήταν όμως ένα σύστημα χωρίς ' +
                  'βασιλιά, σε μια εποχή γεμάτη βασιλιάδες, και κρατήθηκε πάνω από ' +
                  'τετρακόσια χρόνια χωρίς εμφύλιο πόλεμο.',
                en:
                  'In the Great Council sat every adult man of the noble families, and they ' +
                  'elected the Rector. It was not democracy as we mean it now: most of the ' +
                  'people who lived here, all the women and all the sailors and craftsmen, ' +
                  'never voted at all. But it was a system with no king, in an age full of ' +
                  'kings, and it held together for more than four hundred years without a ' +
                  'civil war.',
              },
              question: {
                q: {
                  el: 'Ποιοι ψήφιζαν στο Μεγάλο Συμβούλιο;',
                  en: 'Who was allowed to vote in the Great Council?',
                },
                answers: [
                  { el: 'Μόνο οι ενήλικοι άντρες των ευγενών', en: 'Only the adult men of the noble families' },
                  { el: 'Όλοι οι κάτοικοι μέσα από τα τείχη', en: 'Everyone who lived inside the town walls' },
                  { el: 'Οι καπετάνιοι των μεγάλων καραβιών', en: 'The captains of the biggest trading ships' },
                  { el: 'Όποιος πλήρωνε τον φόρο του λιμανιού', en: 'Anyone who paid the tax at the harbour' },
                ],
                explanation: {
                  el:
                    'Ήταν πολύ λιγότεροι από την πόλη, και είναι σημαντικό να το λέμε. ' +
                    'Ελεύθερη πόλη δεν σημαίνει ίση πόλη.',
                  en:
                    'They were far fewer than the town, and that matters. A free town is not ' +
                    'the same thing as an equal one.',
                },
              },
            },
            {
              id: 'dubrovnik-rectors-palace-two-styles',
              name: { el: 'Οι δύο πέτρες του κτιρίου', en: 'The building’s two styles' },
              blurb: {
                el:
                  'Αν κοιτάξεις προσεκτικά τα παράθυρα και τις κολόνες, θα δεις δύο ' +
                  'διαφορετικές μόδες πάνω στο ίδιο κτίριο: μυτερές γοτθικές καμάρες σε ' +
                  'ένα σημείο, στρογγυλές αναγεννησιακές παραδίπλα. Δεν είναι κακογουστιά. ' +
                  'Το παλάτι φύλαγε μπαρούτι, το μπαρούτι εξερράγη δύο φορές τον 15ο αιώνα, ' +
                  'και κάθε φορά το ξανάχτιζαν με τη μόδα εκείνης της στιγμής. Το κτίριο ' +
                  'είναι, κυριολεκτικά, η ιστορία των ατυχημάτων του.',
                en:
                  'Look carefully at the windows and the columns and you will see two ' +
                  'different fashions on the same building: pointed Gothic arches in one ' +
                  'place, round Renaissance ones next to them. This is not bad taste. The ' +
                  'palace stored gunpowder, the gunpowder exploded twice in the 15th ' +
                  'century, and each time it was rebuilt in the fashion of that moment. The ' +
                  'building is, quite literally, the history of its own accidents.',
              },
              question: {
                q: {
                  el: 'Γιατί το παλάτι ανακατεύει δύο διαφορετικά στιλ;',
                  en: 'Why does the palace mix two different styles?',
                },
                answers: [
                  { el: 'Ξαναχτίστηκε μετά από δύο εκρήξεις', en: 'It was rebuilt after two explosions' },
                  { el: 'Το χτίσανε δύο πόλεις μαζί, μισό μισό', en: 'Two towns built one half of it each' },
                  { el: 'Ο αρχιτέκτονας άλλαξε γνώμη στο τέλος', en: 'The architect changed his mind at the end' },
                  { el: 'Οι μισές πέτρες ήρθαν από τη Βενετία', en: 'Half of the stones came from Venice' },
                ],
                explanation: {
                  el:
                    'Το μπαρούτι που φυλαγόταν μέσα εξερράγη δύο φορές. Κάθε ξαναχτίσιμο ' +
                    'άφησε το σημάδι της εποχής του.',
                  en:
                    'The gunpowder kept inside blew up twice. Each rebuilding left the mark ' +
                    'of its own period behind.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'dubrovnik-rectors-palace-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι από μπρούντζο και στέκομαι στην αυλή από το 1638. Δεν ήμουν άρχοντας, ' +
              'ήμουν πλοιοκτήτης, και άφησα όλα μου τα λεφτά στην πόλη. Είμαι ο μόνος ' +
              'άνθρωπος που τιμήθηκε έτσι εδώ.',
            en:
              'I am made of bronze and I have stood in the courtyard since 1638. I was no ' +
              'ruler, I was a shipowner, and I left all my money to the town. I am the only ' +
              'person ever honoured this way here.',
          },
          hint: {
            el: 'Ήρθα από το κοντινό νησί Λοπούντ.',
            en: 'I came from the nearby island of Lopud.',
          },
          answerExhibitId: 'dubrovnik-rectors-palace-pracat',
        },
        {
          id: 'dubrovnik-rectors-palace-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι λατινικά, σκαλισμένος σε πέτρα, και κρέμομαι πάνω από μια πόρτα. Σε ' +
              'διαβάζουν όλοι πριν μπουν να ψηφίσουν, και τους λέω να ξεχάσουν τις δικές ' +
              'τους δουλειές.',
            en:
              'I am in Latin, cut into stone, and I hang above a doorway. Everyone reads me ' +
              'before they go in to vote, and I tell them to forget about their own private ' +
              'business.',
          },
          hint: {
            el: 'Δεν είμαι αντικείμενο. Είμαι λέξεις.',
            en: 'I am not an object at all. I am words.',
          },
          answerExhibitId: 'dubrovnik-rectors-palace-inscription',
        },
        {
          id: 'dubrovnik-rectors-palace-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Κάθομαι στην κορυφή της τελευταίας κολόνας και δείχνω έναν άντρα ανάμεσα σε ' +
              'βάζα και σύνεργα. Είμαι θεός των φαρμάκων σε ένα κτίριο εξουσίας, και αυτό ' +
              'δεν έγινε κατά λάθος.',
            en:
              'I sit on top of the last column and I show a man among jars and instruments. ' +
              'I am a god of medicine on a building of government, and that did not happen ' +
              'by accident.',
          },
          hint: {
            el: 'Ψάξε με στη δεξιά άκρη της στοάς.',
            en: 'Look for me at the right end of the porch.',
          },
          answerExhibitId: 'dubrovnik-rectors-palace-aesculapius',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ cathedral
  {
    id: 'dubrovnik-cathedral',
    cityId: 'dubrovnik',
    emoji: '🖼️',
    category: 'art',
    difficulty: 2,

    name: { el: 'Ο Καθεδρικός Ναός', en: 'Dubrovnik Cathedral' },
    tagline: {
      el: 'Τρεις καθεδρικοί, ο ένας πάνω στον άλλο',
      en: 'Three cathedrals, one on top of the other',
    },
    story: {
      el:
        'Ο θρύλος λέει ότι το 1192 ο βασιλιάς Ριχάρδος ο Λεοντόκαρδος γύριζε από τις ' +
        'Σταυροφορίες όταν μια καταιγίδα τον έριξε στο νησί Lokrum, απέναντι από την πόλη. ' +
        'Για να ευχαριστήσει που σώθηκε, υποσχέθηκε χρήματα για εκκλησία, και οι κάτοικοι ' +
        'τον έπεισαν να τη χτίσει καλύτερα μέσα στα τείχη. Η ρομανική εκκλησία εκείνη ' +
        'έπεσε στον σεισμό του 1667, και στη θέση της χτίστηκε η σημερινή, μπαρόκ, που ' +
        'τελείωσε το 1713. Και εδώ έρχεται το πιο ωραίο: τη δεκαετία του 1980, όταν ' +
        'έσκαψαν κάτω από το δάπεδο, βρήκαν τα θεμέλια μιας ακόμα παλαιότερης εκκλησίας, ' +
        'πολύ πριν από τον Ριχάρδο. Δηλαδή ο καθεδρικός δεν χτίστηκε τρεις φορές δίπλα ' +
        'δίπλα, αλλά τρεις φορές ο ένας πάνω στον άλλο, στο ίδιο ακριβώς σημείο. Μέσα ' +
        'κρέμεται μια μεγάλη Κοίμηση της Θεοτόκου, που αποδίδεται στο εργαστήριο του ' +
        'Τιτσιάνο.',
      en:
        'Legend says that in 1192 King Richard the Lionheart was sailing home from the ' +
        'Crusades when a storm threw him onto Lokrum, the island opposite the town. In ' +
        'thanks for surviving he promised money for a church, and the townspeople talked ' +
        'him into building it inside the walls instead. That Romanesque cathedral came down ' +
        'in the earthquake of 1667, and the baroque one you see now was built in its place ' +
        'and finished in 1713. Here is the best part: in the 1980s, digging under the ' +
        'floor, archaeologists found the foundations of an even older church, from long ' +
        'before Richard. So the cathedral was not built three times side by side but three ' +
        'times one on top of another, on exactly the same spot. Inside hangs a large ' +
        'Assumption of the Virgin, credited to Titian’s workshop.',
    },
    facts: [
      {
        el: 'Η σημερινή μπαρόκ εκκλησία τελείωσε το 1713, μετά τον σεισμό του 1667.',
        en: 'The baroque church standing now was finished in 1713, after the 1667 quake.',
      },
      {
        el: 'Ανασκαφές κάτω από το δάπεδο βρήκαν τα θεμέλια ακόμα παλαιότερου ναού.',
        en: 'Digs under the floor uncovered the foundations of an even older church.',
      },
      {
        el: 'Η μεγάλη Κοίμηση πάνω από την Αγία Τράπεζα αποδίδεται στο εργαστήριο του Τιτσιάνο.',
        en: 'The large Assumption over the altar is credited to Titian’s workshop.',
      },
    ],
    location: {
      lat: 42.6399,
      lng: 18.1104,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q584428', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Dubrovnik Cathedral', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Graded B: the Overpass fetch failed with a 504 during the run, so there is no OpenStreetMap cross-check. Wikipedia lands on Wikidata’s point exactly.',
      findIt: {
        el:
          'Λίγα βήματα νότια από το Παλάτι του Ρέκτορα, στη μικρή πλατεία με τον οβελίσκο. ' +
          'Η μεγάλη πόρτα βλέπει βόρεια, προς το παλάτι.',
        en:
          'A few steps south of the Rector’s Palace, on the small square with the obelisk. ' +
          'The big door faces north, towards the palace.',
      },
    },
    question: {
      q: {
        el: 'Τι βρήκαν οι αρχαιολόγοι κάτω από το δάπεδο;',
        en: 'What did archaeologists find under the floor?',
      },
      answers: [
        { el: 'Τα θεμέλια ακόμα παλαιότερης εκκλησίας', en: 'The foundations of an even older church' },
        { el: 'Έναν κρυμμένο θησαυρό από χρυσά νομίσματα', en: 'A hidden treasure of golden coins' },
        { el: 'Το ναυάγιο του καραβιού του Ριχάρδου', en: 'The wreck of King Richard’s own ship' },
        { el: 'Ένα υπόγειο πηγάδι με γλυκό νερό', en: 'An underground well of fresh water' },
      ],
      explanation: {
        el:
          'Ο καθεδρικός χτίστηκε τρεις φορές στο ίδιο σημείο. Το παλαιότερο κομμάτι είναι ' +
          'κάτω από τα πόδια σου, όχι δίπλα σου.',
        en:
          'The cathedral was built three times over on one spot. The oldest part is under ' +
          'your feet, not beside you.',
      },
    },
  },

  // ---------------------------------------------------------------- rupe granary
  {
    id: 'dubrovnik-rupe-granary',
    cityId: 'dubrovnik',
    emoji: '🌾',
    category: 'science',
    difficulty: 3,

    name: { el: 'Οι Σιταποθήκες Rupe', en: 'The Rupe Granary' },
    tagline: {
      el: 'Δεκαπέντε στεγνά πηγάδια, γεμάτα σιτάρι',
      en: 'Fifteen dry wells, every one full of grain',
    },
    story: {
      el:
        'Το Ντουμπρόβνικ ζούσε πάνω σε βράχο και δεν μπορούσε να θρέψει τον εαυτό του: το ' +
        'σιτάρι ερχόταν με καράβια από μακριά. Μια πόλη που εξαρτάται από καράβια έχει ένα ' +
        'μόνιμο άγχος, γιατί μια πολιορκία ή μια κακοκαιρία μπορεί να κόψει το φαγητό. Η ' +
        'απάντηση τελείωσε το 1590 και είναι αυτό το κτίριο. Στο ισόγειο, δεκαπέντε ' +
        'τεράστιοι λάκκοι είναι σκαμμένοι κατευθείαν μέσα στον βράχο, ο καθένας σαν ' +
        'πηγάδι, σοβατισμένος λείος για να μη γαντζώνεται τίποτα. Rupe σημαίνει «τρύπες». ' +
        'Μαζί χωρούσαν περίπου χίλιους διακόσιους τόνους σιτάρι. Ο βράχος κρατάει σταθερή ' +
        'δροσιά όλο τον χρόνο, ο αέρας περνούσε από ανοίγματα, και έτσι το σιτάρι έμενε ' +
        'στεγνό για χρόνια χωρίς ψυγείο και χωρίς ρεύμα. Σήμερα το κτίριο είναι ' +
        'εθνογραφικό μουσείο και κοιτάζεις μέσα στους άδειους λάκκους από ψηλά.',
      en:
        'Dubrovnik lived on rock and could not feed itself: its grain came in by ship from ' +
        'far away. A town that depends on ships carries a permanent worry, because a siege ' +
        'or a bad season can cut the food off. The answer was finished in 1590, and it is ' +
        'this building. On the ground floor, fifteen enormous pits are cut straight down ' +
        'into the living rock, each one like a well, plastered smooth so that nothing can ' +
        'catch. Rupe means “holes”. Together they held about one thousand two hundred ' +
        'tonnes of grain. The rock keeps a steady coolness all year, air moved through ' +
        'openings, and so the grain stayed dry for years with no fridge and no ' +
        'electricity. Today the building is an ethnographic museum and you look down into ' +
        'the empty pits from above.',
    },
    facts: [
      {
        el: 'Το κτίριο τελείωσε το 1590 και έχει δεκαπέντε λάκκους σκαμμένους στον βράχο.',
        en: 'The building was finished in 1590 and has fifteen pits cut into the rock.',
      },
      {
        el: 'Οι λάκκοι μαζί χωρούσαν περίπου 1.200 τόνους σιταριού.',
        en: 'Together the pits could hold about 1,200 tonnes of grain.',
      },
      {
        el: 'Η λέξη rupe σημαίνει «τρύπες» στα κροατικά.',
        en: 'The word rupe means “holes” in Croatian.',
      },
    ],
    location: {
      lat: 42.64035,
      lng: 18.10742,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q16114363', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C: the Overpass fetch failed with a 504 and the item has no English Wikipedia article with coordinates, so neither cross-check answered. A documented exception to picking the building over the institution: the 1590 granary has no Wikidata item of its own, and the ethnographic museum that occupies the whole of it does.',
      findIt: {
        el:
          'Στη νότια, ανηφορική πλευρά της παλιάς πόλης, κοντά στο τείχος. Ανέβα τα σκαλιά ' +
          'από τον κεντρικό δρόμο· είναι ένα μεγάλο απλό πέτρινο κτίριο χωρίς στολίδια.',
        en:
          'On the southern, uphill side of the old town, near the wall. Climb the steps ' +
          'from the main street; it is a big plain stone building with no decoration.',
      },
    },
    question: {
      q: {
        el: 'Γιατί φύλαγαν το σιτάρι σε λάκκους μέσα στον βράχο;',
        en: 'Why was the grain kept in pits cut into the rock?',
      },
      answers: [
        { el: 'Ο βράχος κρατάει δροσιά και το σιτάρι στεγνό', en: 'The rock stays cool and keeps the grain dry' },
        { el: 'Ήταν το μόνο σημείο που χωρούσε τόσα σακιά', en: 'It was the only place big enough for the sacks' },
        { el: 'Έτσι το σιτάρι φύτρωνε πάλι μέσα στον λάκκο', en: 'That way the grain could grow again in the pit' },
        { el: 'Ο βράχος έκρυβε το σιτάρι από τους εμπόρους', en: 'The rock hid the grain away from the merchants' },
      ],
      explanation: {
        el:
          'Σταθερή θερμοκρασία και κίνηση αέρα: αυτά ήταν όλα τα ψυγεία που υπήρχαν το ' +
          '1590, και δούλευαν για χρόνια.',
        en:
          'A steady temperature and moving air: that was every fridge available in 1590, ' +
          'and it worked for years at a time.',
      },
    },
  },

  // ------------------------------------------------------------- gundulić square
  {
    id: 'dubrovnik-gundulic-square',
    cityId: 'dubrovnik',
    emoji: '🍋',
    category: 'food',
    difficulty: 1,

    name: { el: 'Η Πλατεία Gundulić', en: 'Gundulić Square' },
    tagline: {
      el: 'Κάθε πρωί η πλατεία γίνεται λαϊκή αγορά',
      en: 'Every morning the square turns into a market',
    },
    story: {
      el:
        'Πίσω από τον καθεδρικό υπάρχει μια πλατεία που αλλάζει δουλειά δύο φορές τη μέρα. ' +
        'Νωρίς το πρωί γεμίζει πάγκους: σακούλες με λεβάντα, ξερά σύκα, μέλι, αμύγδαλα, ' +
        'λεμόνια και πορτοκάλια, και το τοπικό γλυκό που λέγεται arancini, δηλαδή φλούδα ' +
        'πορτοκαλιού βρασμένη σε ζάχαρη μέχρι να γίνει λαμπερή και σκληρή. Είναι ένα γλυκό ' +
        'από ανάγκη: κανείς εδώ δεν πετούσε τη φλούδα ενός καρπού που ήρθε από τον κήπο. ' +
        'Γύρω στο μεσημέρι οι πάγκοι μαζεύονται, η πλατεία σκουπίζεται και το απόγευμα ' +
        'γεμίζει παιδιά που παίζουν μπάλα. Στη μέση στέκεται το άγαλμα του Ivan Gundulić, ' +
        'ποιητή του 17ου αιώνα που έγραψε στα κροατικά σε μια εποχή που τα επίσημα ' +
        'γράμματα γράφονταν λατινικά ή ιταλικά. Στην ανηφορική άκρη ανεβαίνει μια φαρδιά ' +
        'μπαρόκ σκάλα.',
      en:
        'Behind the cathedral there is a square that changes job twice a day. Early in the ' +
        'morning it fills with stalls: bags of lavender, dried figs, honey, almonds, lemons ' +
        'and oranges, and the local sweet called arancini, which is orange peel boiled in ' +
        'sugar until it turns glassy and hard. It is a sweet born of thrift: nobody here ' +
        'threw away the skin of fruit that had come out of the garden. Around midday the ' +
        'stalls pack up, the square is swept, and in the afternoon it fills with children ' +
        'playing football. In the middle stands the statue of Ivan Gundulić, a poet of the ' +
        '17th century who wrote in Croatian at a time when official writing was done in ' +
        'Latin or Italian. At the uphill end a wide baroque staircase climbs away.',
    },
    facts: [
      {
        el: 'Τα arancini εδώ είναι φλούδα πορτοκαλιού βρασμένη σε ζάχαρη, όχι ρύζι.',
        en: 'Arancini here are orange peel boiled in sugar, not balls of rice.',
      },
      {
        el: 'Το άγαλμα στη μέση δείχνει τον ποιητή Ivan Gundulić.',
        en: 'The statue in the middle shows the poet Ivan Gundulić.',
      },
      {
        el: 'Η αγορά στήνεται νωρίς το πρωί και μαζεύεται γύρω στο μεσημέρι.',
        en: 'The market sets up early in the morning and packs away around midday.',
      },
    ],
    location: {
      lat: 42.6403,
      lng: 18.10999,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q18585224', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C: the Overpass fetch failed with a 504 and the item has no English Wikipedia article with coordinates, so neither cross-check answered. The item’s English label is the mangled “Gundulićs”; it was confirmed as the right square from its Croatian label, its P31 of “square” and its P131 of Dubrovnik.',
      findIt: {
        el:
          'Ένα στενό δυτικά από τον καθεδρικό, ανηφορικά. Αν βλέπεις πάγκους με λεβάντα ' +
          'και ένα άγαλμα ποιητή στη μέση, είσαι εκεί.',
        en:
          'One lane west of the cathedral, slightly uphill. If you can see stalls of ' +
          'lavender and a poet’s statue in the middle, you are there.',
      },
    },
    question: {
      q: {
        el: 'Τι είναι τα arancini εδώ στο Ντουμπρόβνικ;',
        en: 'What are arancini here in Dubrovnik?',
      },
      answers: [
        { el: 'Φλούδα πορτοκαλιού βρασμένη σε ζάχαρη', en: 'Orange peel boiled up in sugar' },
        { el: 'Μπαλάκια από ρύζι με τυρί μέσα', en: 'Rice balls with cheese inside them' },
        { el: 'Μικρά ψάρια τηγανητά με λεμόνι', en: 'Little fish fried with lemon on top' },
        { el: 'Ξερά σύκα περασμένα σε κλωστή', en: 'Dried figs threaded on a long string' },
      ],
      explanation: {
        el:
          'Στην Ιταλία τα arancini είναι ρύζι. Εδώ είναι η φλούδα του πορτοκαλιού, γιατί ' +
          'σε αυτή την πόλη δεν πεταγόταν τίποτα.',
        en:
          'In Italy arancini are rice. Here they are the skin of the orange, because in ' +
          'this town nothing was thrown away.',
      },
    },
  },

  // ----------------------------------------------------------------- city walls
  {
    id: 'dubrovnik-city-walls',
    cityId: 'dubrovnik',
    emoji: '🛡️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Τα Τείχη της Πόλης', en: 'The City Walls' },
    tagline: {
      el: 'Κάνεις τον γύρο μιας πόλης περπατώντας από πάνω',
      en: 'You walk right around a town along its top',
    },
    story: {
      el:
        'Τα τείχη του Ντουμπρόβνικ έχουν μήκος περίπου χίλια εννιακόσια σαράντα μέτρα και ' +
        'φτάνουν σε ύψος τα είκοσι πέντε μέτρα. Προς τη στεριά είναι χοντρά ως έξι μέτρα, ' +
        'προς τη θάλασσα πολύ λεπτότερα, γιατί από εκεί ο βράχος κάνει ήδη τη μισή δουλειά. ' +
        'Ανεβαίνεις με σκάλα, κάνεις τον γύρο προς μία κατεύθυνση και σε περίπου δύο ώρες ' +
        'έχεις δει την ίδια πόλη από κάθε γωνία: στέγες, αυλές, απλωμένα ρούχα, γάτες, και ' +
        'από την άλλη πλευρά ανοιχτή θάλασσα. Κανένας στρατός δεν πήρε ποτέ αυτά τα τείχη ' +
        'με έφοδο. Η Δημοκρατία τα επισκεύαζε συνεχώς και ταυτόχρονα πλήρωνε για ειρήνη, ' +
        'γιατί ήξερε ότι το τείχος αγοράζει χρόνο, όχι νίκη. Κοίταξε τις στέγες από ψηλά: ' +
        'τα πιο φωτεινά πορτοκαλί κεραμίδια είναι καινούργια, από το ξαναχτίσιμο μετά τους ' +
        'βομβαρδισμούς του 1991 και 1992. Τα πιο γκρίζα είναι τα παλιά που άντεξαν.',
      en:
        'The walls of Dubrovnik run for about one thousand nine hundred and forty metres ' +
        'and rise to twenty-five metres high. On the land side they are up to six metres ' +
        'thick, on the sea side much thinner, because there the cliff already does half the ' +
        'work. You go up a staircase, walk the circuit one way round, and in about two ' +
        'hours you have seen the same town from every angle: roofs, yards, washing lines, ' +
        'cats, and open sea on the other side. No army ever took these walls by storm. The ' +
        'Republic repaired them constantly and paid for peace at the same time, because it ' +
        'knew a wall buys time, not victory. Look down at the roofs: the brightest orange ' +
        'tiles are new, from the rebuilding after the shelling of 1991 and 1992. The greyer ' +
        'ones are the old tiles that survived.',
    },
    facts: [
      {
        el: 'Τα τείχη έχουν μήκος περίπου 1.940 μέτρα και ύψος έως 25 μέτρα.',
        en: 'The walls run about 1,940 metres and stand up to 25 metres high.',
      },
      {
        el: 'Προς τη στεριά φτάνουν σε πάχος τα 6 μέτρα· προς τη θάλασσα είναι πολύ λεπτότερα.',
        en: 'On the land side they reach 6 metres thick; on the sea side they are far thinner.',
      },
      {
        el: 'Ο γύρος τους γίνεται προς μία μόνο κατεύθυνση και θέλει περίπου δύο ώρες.',
        en: 'The circuit is walked in one direction only and takes about two hours.',
      },
    ],
    location: {
      lat: 42.64,
      lng: 18.108,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q931733', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C: the Overpass fetch failed with a 504 and the item has no English Wikipedia article with coordinates, so neither cross-check answered. The point is the ring’s own coordinate and is an area, not a door: the walls enclose the whole old town and are entered from three separate staircases.',
      findIt: {
        el:
          'Η πιο κοντινή σκάλα για τα τείχη είναι αμέσως αριστερά μόλις μπεις από την ' +
          'Πύλη Pile. Φόρα καπέλο: πάνω δεν υπάρχει σχεδόν καθόλου σκιά.',
        en:
          'The nearest staircase up to the walls is immediately on your left as you come ' +
          'in through the Pile Gate. Wear a hat: there is almost no shade up there.',
      },
    },
    question: {
      q: {
        el: 'Τι δείχνουν τα πιο φωτεινά πορτοκαλί κεραμίδια στις στέγες;',
        en: 'What do the brightest orange tiles on the roofs show?',
      },
      answers: [
        { el: 'Στέγες που ξαναχτίστηκαν μετά τον πόλεμο', en: 'Roofs that were rebuilt after the war' },
        { el: 'Σπίτια που ανήκουν σήμερα στην εκκλησία', en: 'Houses that belong to the church today' },
        { el: 'Κτίρια που άντεξαν τον σεισμό του 1667', en: 'Buildings that survived the 1667 quake' },
        { el: 'Σπίτια όπου μένουν ακόμα ψαράδες', en: 'Homes where fishermen still live now' },
      ],
      explanation: {
        el:
          'Το 1991 και το 1992 η πόλη βομβαρδίστηκε και πολλές στέγες κάηκαν. Τα ' +
          'καινούργια κεραμίδια δεν έχουν προλάβει ακόμα να ξεθωριάσουν.',
        en:
          'In 1991 and 1992 the town was shelled and many roofs burned. The new tiles have ' +
          'not had time to fade yet.',
      },
    },
  },

  // -------------------------------------------------------------- minčeta tower
  {
    id: 'dubrovnik-minceta',
    cityId: 'dubrovnik',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Ο Πύργος Minčeta', en: 'The Minčeta Tower' },
    tagline: {
      el: 'Το ψηλότερο σημείο ολόκληρου του τείχους',
      en: 'The highest point on the whole of the wall',
    },
    story: {
      el:
        'Ο Minčeta στέκεται στην πιο ψηλή και πιο εκτεθειμένη γωνία του τείχους, εκεί που ' +
        'η στεριά πλησιάζει περισσότερο. Ξεκίνησε το 1319 σαν τετράγωνος πύργος, σε ' +
        'οικόπεδο που έδωσε η οικογένεια Menčetić, και από εκεί πήρε το όνομά του. Ύστερα ' +
        'άλλαξαν τα όπλα. Όταν τα κανόνια έγιναν αρκετά δυνατά ώστε να σπάνε τοίχους, ένας ' +
        'τετράγωνος πύργος έγινε επικίνδυνος: η μπάλα χτυπάει την επίπεδη πλευρά κατάματα ' +
        'και σπάει την πέτρα. Ένας στρογγυλός πύργος όμως γλιστράει τη βολή στο πλάι. Έτσι ' +
        'η Δημοκρατία κάλεσε τον Φλωρεντινό αρχιτέκτονα Michelozzo, που τύλιξε τον παλιό ' +
        'τετράγωνο πύργο μέσα σε έναν καινούργιο, στρογγυλό, με τοίχους περίπου έξι μέτρα ' +
        'πάχος. Ο ντόπιος μάστορας Juraj Dalmatinac τον τελείωσε το 1464 με το ψηλό ' +
        'στεφάνι που βλέπεις σήμερα.',
      en:
        'Minčeta stands at the highest and most exposed corner of the wall, where the land ' +
        'comes closest. It began in 1319 as a square tower, on ground given by the Menčetić ' +
        'family, which is where its name comes from. Then the weapons changed. Once cannon ' +
        'grew strong enough to break walls, a square tower became a danger: the ball hits ' +
        'the flat side head-on and shatters the stone. A round tower, though, lets the shot ' +
        'glance away sideways. So the Republic sent for the Florentine architect Michelozzo, ' +
        'who wrapped the old square tower inside a new round one with walls about six metres ' +
        'thick. The local master builder Juraj Dalmatinac finished it in 1464 with the tall ' +
        'crown you can see today.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1319 ως τετράγωνος πύργος και έγινε στρογγυλός τον 15ο αιώνα.',
        en: 'It began in 1319 as a square tower and was made round in the 15th century.',
      },
      {
        el: 'Οι τοίχοι του στρογγυλού κελύφους έχουν πάχος περίπου έξι μέτρα.',
        en: 'The walls of the round shell are about six metres thick.',
      },
      {
        el: 'Τον τελείωσε το 1464 ο μάστορας Juraj Dalmatinac.',
        en: 'It was finished in 1464 by the master builder Juraj Dalmatinac.',
      },
    ],
    location: {
      lat: 42.64283,
      lng: 18.10859,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q674521', deltaM: 0 },
        { kind: 'osm', ref: 'way/172454061', deltaM: 21 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el:
          'Στη βορειοδυτική γωνία του τείχους, το ψηλότερο σημείο του γύρου. Δεν μπαίνεις ' +
          'από τον δρόμο: φτάνεις εκεί περπατώντας πάνω στα τείχη.',
        en:
          'At the north-west corner of the wall, the highest point of the circuit. You do ' +
          'not get in from the street: you reach it by walking the walls.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έγινε στρογγυλός ο τετράγωνος πύργος;',
        en: 'Why was the square tower made round?',
      },
      answers: [
        { el: 'Η στρογγυλή πέτρα γλιστράει τη μπάλα του κανονιού', en: 'A round wall makes a cannonball glance off it' },
        { el: 'Ο στρογγυλός πύργος χρειάζεται λιγότερους φρουρούς', en: 'A round tower needs far fewer guards on it' },
        { el: 'Η γωνία του τείχους δεν χωρούσε τετράγωνο πύργο', en: 'The corner had no room left for a square tower' },
        { el: 'Ο αρχιτέκτονας δούλευε πάντα με στρογγυλά σχέδια', en: 'The architect always worked with round designs' },
      ],
      explanation: {
        el:
          'Η επίπεδη πλευρά δέχεται όλη τη δύναμη της βολής. Η καμπύλη τη στέλνει στο ' +
          'πλάι, και η πέτρα αντέχει.',
        en:
          'A flat side takes the whole force of the shot. A curve sends it off sideways, ' +
          'and the stone holds.',
      },
    },
  },

  // ------------------------------------------------------------ fort lovrijenac
  {
    id: 'dubrovnik-lovrijenac',
    cityId: 'dubrovnik',
    emoji: '🪨',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Φρούριο Lovrijenac', en: 'Fort Lovrijenac' },
    tagline: {
      el: 'Χοντρό σαν σπίτι μπροστά, λεπτό σαν φράχτης πίσω',
      en: 'Thick as a house in front, thin as a fence behind',
    },
    story: {
      el:
        'Το Lovrijenac στέκεται πάνω σε βράχο περίπου τριάντα εφτά μέτρων, ακριβώς έξω από ' +
        'τα τείχη. Ο θρύλος λέει ότι γύρω στο έτος 1000 οι Βενετοί σχεδίαζαν να χτίσουν ' +
        'εκεί δικό τους φρούριο, οι κάτοικοι το έμαθαν και έχτισαν το δικό τους μέσα σε ' +
        'τρεις μήνες, ώστε όταν έφτασαν τα καράβια να είναι ήδη έτοιμο. Το φρούριο ' +
        'αναφέρεται σε έγγραφα από το 1301. Αλήθεια ή θρύλος, το έξυπνο μέρος είναι αλλού. ' +
        'Οι τοίχοι του προς τη θάλασσα φτάνουν τα δώδεκα μέτρα πάχος, αλλά ο τοίχος προς ' +
        'την πόλη είναι μόνο περίπου εξήντα εκατοστά. Αυτό είναι σκόπιμο: αν ποτέ το ' +
        'φρούριο έπεφτε σε εχθρικά χέρια, τα κανόνια της ίδιας της πόλης θα το γκρέμιζαν ' +
        'εύκολα. Για τον ίδιο λόγο ο διοικητής του άλλαζε κάθε μήνα και έπαιρνε τρόφιμα ' +
        'για έναν μόνο μήνα. Πάνω από την πόρτα γράφει ότι η ελευθερία δεν πουλιέται για ' +
        'όλο το χρυσάφι του κόσμου.',
      en:
        'Lovrijenac stands on a rock about thirty-seven metres high, just outside the city ' +
        'walls. Legend says that around the year 1000 the Venetians were planning a fort of ' +
        'their own up there, the townspeople heard of it and built theirs in three months, ' +
        'so that when the ships arrived it was already finished. The fort appears in written ' +
        'records from 1301. True or legend, the clever part is somewhere else. Its walls ' +
        'facing the sea are up to twelve metres thick, but the wall facing the town is only ' +
        'about sixty centimetres. That is on purpose: if the fort ever fell into enemy ' +
        'hands, the town’s own cannon could knock it down easily. For the same reason its ' +
        'commander was changed every month and issued food for one month only. Above the ' +
        'door it says that freedom is not sold for all the gold in the world.',
    },
    facts: [
      {
        el: 'Ο βράχος του έχει ύψος περίπου 37 μέτρα και βγαίνει ίσια από τη θάλασσα.',
        en: 'Its rock is about 37 metres high and rises straight out of the sea.',
      },
      {
        el: 'Προς τη θάλασσα οι τοίχοι φτάνουν τα 12 μέτρα· προς την πόλη είναι 60 εκατοστά.',
        en: 'Facing the sea the walls reach 12 metres; facing the town, 60 centimetres.',
      },
      {
        el: 'Αναφέρεται σε έγγραφα ήδη από το 1301.',
        en: 'It appears in written records as early as 1301.',
      },
    ],
    location: {
      lat: 42.64073,
      lng: 18.10441,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3396134', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C: the Overpass fetch failed with a 504 and the item has no English Wikipedia article carrying coordinates, so neither cross-check answered. Wikidata’s point stands unchanged.',
      findIt: {
        el:
          'Βγες από την Πύλη Pile, στρίψε αριστερά και κατέβα τα σκαλιά προς τον μικρό ' +
          'κόλπο. Το φρούριο είναι πάνω στον βράχο απέναντι, με μια μακριά σκάλα ως πάνω.',
        en:
          'Go out of the Pile Gate, turn left and take the steps down to the little bay. ' +
          'The fort is on the rock opposite, with a long stair climbing up to it.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ο τοίχος προς την πόλη είναι τόσο λεπτός;',
        en: 'Why is the wall facing the town so thin?',
      },
      answers: [
        { el: 'Για να το γκρεμίσει η πόλη αν το χάσει', en: 'So the town could destroy it if it fell' },
        { el: 'Για να περνάει ο αέρας μέσα στο φρούριο', en: 'So that air could pass through the fortress' },
        { el: 'Γιατί τελείωσε η πέτρα στη μέση της δουλειάς', en: 'Because the stone ran out halfway through' },
        { el: 'Για να βλέπουν οι φρουροί μέσα στην πόλη', en: 'So the guards could see into the town below' },
      ],
      explanation: {
        el:
          'Ένα φρούριο είναι επικίνδυνο και για τους δικούς του. Το λεπτό τείχος ήταν η ' +
          'ασφάλεια της πόλης απέναντι στο ίδιο της το φρούριο.',
        en:
          'A fortress is a danger to its own side too. The thin wall was the town’s ' +
          'insurance against its own fort.',
      },
    },
  },

  // ---------------------------------------------------------- st john’s fortress
  {
    id: 'dubrovnik-st-john-fortress',
    cityId: 'dubrovnik',
    emoji: '🐙',
    category: 'science',
    difficulty: 2,

    name: { el: 'Το Φρούριο του Αγίου Ιωάννη', en: 'St John’s Fortress' },
    tagline: {
      el: 'Μια αλυσίδα έκλεινε το λιμάνι κάθε βράδυ',
      en: 'A chain closed the harbour every evening',
    },
    story: {
      el:
        'Στο στόμιο του παλιού λιμανιού στέκεται μια τεράστια καμπύλη μάζα από πέτρα. Δεν ' +
        'χτίστηκε μονομιάς: μεγάλωσε σε αιώνες, πύργος πάνω σε πύργο, ώσπου έγινε ένα ' +
        'σώμα. Η δουλειά του ήταν να μη μπαίνει κανείς στο λιμάνι απρόσκλητος, και το ' +
        'έκανε με έναν πολύ απλό τρόπο: κάθε βράδυ τεντωνόταν μια βαριά αλυσίδα από εδώ ως ' +
        'τον απέναντι κυματοθραύστη. Ένα καράβι που δεν το περίμεναν, το πολύ να ακουμπούσε ' +
        'πάνω της. Μέσα από αυτό το λιμάνι έφευγαν καράβια για το Βυζάντιο, την Ελλάδα, την ' +
        'Αίγυπτο και την Ισπανία, φορτωμένα αλάτι, ύφασμα και ασήμι. Σήμερα το φρούριο έχει ' +
        'δύο ζωές: επάνω το Ναυτικό Μουσείο, με μοντέλα των καραβιών της Δημοκρατίας, και ' +
        'κάτω, στους θόλους στο επίπεδο της θάλασσας, ένα ενυδρείο όπου συναντάς τα ζώα ' +
        'που ζουν στο νερό ακριβώς έξω: χταπόδια, σμέρνες, ιππόκαμπους, σκορπιούς.',
      en:
        'At the mouth of the old harbour stands an enormous curved mass of stone. It was ' +
        'not built all at once: it grew over centuries, tower on top of tower, until it ' +
        'became one body. Its job was to keep anyone uninvited out of the harbour, and it ' +
        'did that in a very simple way: every evening a heavy chain was stretched from here ' +
        'across to the breakwater opposite. A ship that was not expected got no further than ' +
        'bumping into it. Out of this harbour, ships sailed for Byzantium, Greece, Egypt and ' +
        'Spain, loaded with salt, cloth and silver. Today the fortress has two lives: ' +
        'upstairs the Maritime Museum, with models of the Republic’s ships, and below, in ' +
        'the vaults at sea level, an aquarium where you meet the animals living in the water ' +
        'just outside: octopus, moray eels, sea horses, scorpionfish.',
    },
    facts: [
      {
        el: 'Κάθε βράδυ μια αλυσίδα τεντωνόταν από το φρούριο ως τον κυματοθραύστη.',
        en: 'Every evening a chain was stretched from the fort to the breakwater.',
      },
      {
        el: 'Επάνω στεγάζεται το Ναυτικό Μουσείο με μοντέλα καραβιών της Δημοκρατίας.',
        en: 'Upstairs is the Maritime Museum, with models of the Republic’s ships.',
      },
      {
        el: 'Στους θόλους στο επίπεδο της θάλασσας υπάρχει ενυδρείο με ζώα της Αδριατικής.',
        en: 'In the vaults at sea level there is an aquarium of Adriatic animals.',
      },
    ],
    location: {
      lat: 42.64009,
      lng: 18.11247,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q12644033', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C: the Overpass fetch failed with a 504 and the item has no English Wikipedia article with coordinates, so neither cross-check answered. This is the building; the Maritime Museum inside it is a separate institution with its own item, Q12640048, which is not pinned here.',
      findIt: {
        el:
          'Στο δεξί άκρο του παλιού λιμανιού, εκεί που τελειώνει η προκυμαία. Η πόρτα του ' +
          'ενυδρείου είναι χαμηλά, στο επίπεδο του νερού, και είναι πάντα δροσερή μέσα.',
        en:
          'At the right-hand end of the old harbour, where the quay runs out. The aquarium ' +
          'door is low down, at water level, and it is always cool inside.',
      },
    },
    question: {
      q: {
        el: 'Πώς έκλεινε το λιμάνι τη νύχτα;',
        en: 'How was the harbour closed at night?',
      },
      answers: [
        { el: 'Με βαριά αλυσίδα τεντωμένη στο στόμιο', en: 'With a heavy chain across its mouth' },
        { el: 'Με ξύλινη πόρτα που έπεφτε από ψηλά', en: 'With a wooden door dropped from above' },
        { el: 'Με βάρκες δεμένες τη μία δίπλα στην άλλη', en: 'With boats tied up one beside another' },
        { el: 'Με δίχτυα ριγμένα από τα δύο φρούρια', en: 'With nets thrown out from both forts' },
      ],
      explanation: {
        el:
          'Απλό και αποτελεσματικό. Η αλυσίδα δεν χρειαζόταν φρουρούς σε κάθε μέτρο, μόνο ' +
          'δύο σημεία για να δεθεί.',
        en:
          'Simple and effective. The chain needed no guards along every metre, only two ' +
          'points to be tied to.',
      },
    },
  },

  // --------------------------------------------------------------------- lokrum
  {
    id: 'dubrovnik-lokrum',
    cityId: 'dubrovnik',
    emoji: '🦚',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Το Νησί Lokrum', en: 'The Island of Lokrum' },
    tagline: {
      el: 'Ένα νησί με παγώνια και μια αλμυρή λιμνούλα',
      en: 'An island of peacocks and one salty pond',
    },
    story: {
      el:
        'Δέκα λεπτά με το καραβάκι από το παλιό λιμάνι, και είσαι σε άλλο κόσμο: πεύκα, ' +
        'αριές, μονοπάτια στη σκιά και καθόλου αυτοκίνητα. Ανάμεσα στα δέντρα περπατούν ' +
        'παγώνια που σε πλησιάζουν χωρίς φόβο. Δεν ήταν πάντα εδώ: τα έφερε τον 19ο αιώνα ' +
        'ο αρχιδούκας Μαξιμιλιανός των Αψβούργων, που μετέτρεψε το παλιό βενεδικτινό ' +
        'μοναστήρι σε εξοχική κατοικία και ξεκίνησε έναν βοτανικό κήπο, πριν φύγει για να ' +
        'γίνει αυτοκράτορας του Μεξικού. Στη μέση του νησιού υπάρχει μια μικρή λίμνη με ' +
        'αλμυρό νερό που τη λένε Mrtvo more, Νεκρή Θάλασσα. Δεν είναι κομμένη από τη ' +
        'θάλασσα: το νερό μπαινοβγαίνει μέσα από ρωγμές στον βράχο, γι’ αυτό είναι αλμυρό ' +
        'και ζεστό. Ψηλά στέκεται ένα στρογγυλό φρούριο που έχτισαν το 1806 οι Γάλλοι. ' +
        'Κανείς δεν μένει τη νύχτα: το τελευταίο καραβάκι τους παίρνει όλους πίσω.',
      en:
        'Ten minutes by boat from the old harbour, and you are in another world: pines, ' +
        'holm oaks, shady paths and no cars at all. Peacocks walk among the trees and come ' +
        'right up to you without fear. They were not always here: they were brought in the ' +
        '19th century by Archduke Maximilian of Habsburg, who turned the old Benedictine ' +
        'monastery into a summer house and started a botanical garden, before leaving to ' +
        'become Emperor of Mexico. In the middle of the island there is a small salty lake ' +
        'called Mrtvo more, the Dead Sea. It is not cut off from the sea: the water moves in ' +
        'and out through cracks in the rock, which is why it is salty and warm. High up ' +
        'stands a round fort the French built in 1806. Nobody stays the night: the last boat ' +
        'takes everyone back.',
    },
    facts: [
      {
        el: 'Τα παγώνια έφτασαν τον 19ο αιώνα με τον αρχιδούκα Μαξιμιλιανό των Αψβούργων.',
        en: 'The peacocks arrived in the 19th century with Archduke Maximilian of Habsburg.',
      },
      {
        el: 'Η μικρή λίμνη Mrtvo more επικοινωνεί με τη θάλασσα μέσα από τον βράχο.',
        en: 'The small lake Mrtvo more is joined to the sea through the rock.',
      },
      {
        el: 'Το νησί είναι προστατευόμενο και απαγορεύεται η διανυκτέρευση.',
        en: 'The island is protected and nobody is allowed to stay overnight.',
      },
    ],
    location: {
      lat: 42.62997,
      lng: 18.11674,
      anchor: 'viewpoint',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q111304707', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'The pin is Fort Royal, the French fort of 1806 on the island’s highest hill, not the island itself. The island’s own item, Q277389, graded D even as an area: Wikipedia’s point for Lokrum sits 717 m from Wikidata’s, because a 700 m island has no one place a visitor stands. Graded C here: the Overpass fetch failed with a 504 and the fort has no English Wikipedia article with coordinates.',
      findIt: {
        el:
          'Τα καραβάκια φεύγουν από το παλιό λιμάνι. Από την αποβάθρα του νησιού, ένα ' +
          'μονοπάτι με πινακίδες ανεβαίνει στο φρούριο σε περίπου είκοσι λεπτά.',
        en:
          'The boats leave from the old harbour. From the island jetty a signposted path ' +
          'climbs to the fort in about twenty minutes.',
      },
    },
    question: {
      q: {
        el: 'Γιατί είναι αλμυρή η μικρή λίμνη του νησιού;',
        en: 'Why is the island’s little lake salty?',
      },
      answers: [
        { el: 'Το νερό μπαίνει από ρωγμές στον βράχο', en: 'Sea water gets in through cracks in the rock' },
        { el: 'Ρίχνουν αλάτι μέσα κάθε καλοκαίρι', en: 'Salt is poured into it every summer' },
        { el: 'Ο ήλιος έχει στεγνώσει όλο το γλυκό νερό', en: 'The sun has dried all the fresh water away' },
        { el: 'Τα παγώνια πίνουν μόνο το γλυκό νερό της', en: 'The peacocks drink only its fresh water' },
      ],
      explanation: {
        el:
          'Η λίμνη είναι στην πραγματικότητα κομμάτι της θάλασσας που μπήκε μέσα στη ' +
          'στεριά. Το νερό ανεβοκατεβαίνει με την παλίρροια.',
        en:
          'The lake is really a piece of the sea that has come inland. Its water rises and ' +
          'falls with the tide.',
      },
    },
  },

  // ------------------------------------------------------------------ mount srđ
  {
    id: 'dubrovnik-srd',
    cityId: 'dubrovnik',
    emoji: '⛰️',
    category: 'nature',
    difficulty: 3,

    name: { el: 'Το Βουνό Srđ', en: 'Mount Srđ' },
    tagline: {
      el: 'Τετρακόσια δώδεκα μέτρα πάνω από τις στέγες',
      en: 'Four hundred and twelve metres above the roofs',
    },
    story: {
      el:
        'Πίσω από την πόλη σηκώνεται μια γυμνή ασβεστολιθική ράχη, τετρακόσια δώδεκα μέτρα ' +
        'ψηλή. Από πάνω η παλιά πόλη φαίνεται ολόκληρη, σαν μοντέλο πάνω σε τραπέζι: τα ' +
        'τείχη ένας κλειστός κύκλος, οι στέγες μια πορτοκαλιά κηλίδα, και γύρω σκέτη ' +
        'θάλασσα με το Lokrum να επιπλέει δίπλα. Το βουνό είναι γυμνό όχι από τη φύση του ' +
        'αλλά από εμάς: αιώνες κατσίκες και ξύλα για φωτιά πήραν τα δέντρα, και μια μεγάλη ' +
        'πυρκαγιά το 2007 έκαψε πολλά από όσα είχαν ξαναφυτρώσει. Πάνω στην κορυφή στέκεται ' +
        'ένας μεγάλος λευκός σταυρός, που καταστράφηκε στον πόλεμο και ξαναστήθηκε ' +
        'αργότερα, και δίπλα του ένα φρούριο που έχτισαν οι στρατιώτες του Ναπολέοντα. Το ' +
        'ζιγκ ζαγκ μονοπάτι στην πλαγιά είναι από την ίδια εποχή. Από το 1969 ανεβαίνει και ' +
        'τελεφερίκ· καταστράφηκε στον πόλεμο και ξανάνοιξε το 2010.',
      en:
        'Behind the town rises a bare limestone ridge, four hundred and twelve metres high. ' +
        'From the top the old town is visible whole, like a model on a table: the walls a ' +
        'closed ring, the roofs one orange patch, and around it nothing but sea, with ' +
        'Lokrum floating alongside. The hill is bare not by nature but because of us: ' +
        'centuries of goats and firewood took the trees, and a big fire in 2007 burned much ' +
        'of what had grown back. On the summit stands a large white cross, destroyed in the ' +
        'war and put back up afterwards, and next to it a fort built by Napoleon’s soldiers. ' +
        'The zigzag path up the hillside dates from the same time. A cable car has climbed ' +
        'it since 1969; it was destroyed in the war and reopened in 2010.',
    },
    facts: [
      {
        el: 'Η κορυφή του Srđ βρίσκεται 412 μέτρα πάνω από τη θάλασσα.',
        en: 'The summit of Srđ stands 412 metres above the sea.',
      },
      {
        el: 'Το τελεφερίκ άνοιξε το 1969, καταστράφηκε στον πόλεμο και ξανάνοιξε το 2010.',
        en: 'The cable car opened in 1969, was destroyed in the war and reopened in 2010.',
      },
      {
        el: 'Το φρούριο στην κορυφή το έχτισαν οι στρατιώτες του Ναπολέοντα.',
        en: 'The fort on the summit was built by Napoleon’s soldiers.',
      },
    ],
    location: {
      lat: 42.64878,
      lng: 18.11217,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q17147057', deltaM: 0 },
        { kind: 'osm', ref: 'node/821764626', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'The pin is the white cross on the summit, not the hill. The ridge’s own item, Q130591, carries a coordinate rounded to two decimal places and lands nowhere a visitor stands; this is the same fix Athens made for Lycabettus. Graded B: the item has no English Wikipedia article with coordinates, so only OpenStreetMap could cross-check, and it agrees exactly.',
      findIt: {
        el:
          'Ο σταθμός του τελεφερίκ είναι λίγο έξω από τα τείχη, στη βόρεια πλευρά. Στην ' +
          'κορυφή, ο λευκός σταυρός είναι λίγα βήματα από τον σταθμό της άφιξης.',
        en:
          'The cable car station is just outside the walls, on the north side. At the top, ' +
          'the white cross is a few steps from where the cabin arrives.',
      },
    },
    question: {
      q: {
        el: 'Γιατί είναι γυμνή από δέντρα η πλαγιά του Srđ;',
        en: 'Why is the slope of Srđ bare of trees?',
      },
      answers: [
        { el: 'Τα πήραν κατσίκες, ξυλεία και μια πυρκαγιά', en: 'Goats, firewood and a big fire took them' },
        { el: 'Ο βράχος είναι πολύ σκληρός για κάθε ρίζα', en: 'The rock is too hard for any root to enter' },
        { el: 'Το χιόνι της κορυφής παγώνει κάθε φυτό', en: 'The snow on top freezes every plant there' },
        { el: 'Τα έκοψαν για να χτιστούν τα τείχη κάτω', en: 'They were cut to build the walls down below' },
      ],
      explanation: {
        el:
          'Το βουνό ήταν κάποτε δασωμένο· το όνομα της πόλης βγαίνει από τη λέξη dubrava, ' +
          'το δάσος με τις βελανιδιές.',
        en:
          'The hill was wooded once; the town’s own name comes from the word dubrava, the ' +
          'oak forest that covered it.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'dubrovnik-straight-through',
    cityId: 'dubrovnik',
    emoji: '🚪',
    name: { el: 'Ίσια μέσα από την πόλη', en: 'Straight through the town' },
    promise: {
      el: 'Από την πύλη ως την πλατεία, τον δρόμο που ήταν κάποτε θάλασσα, σε μισή ώρα.',
      en: 'Gate to square along the street that used to be the sea, in half an hour.',
    },
    placeIds: [
      'dubrovnik-pile-gate',
      'dubrovnik-onofrio-fountain',
      'dubrovnik-stradun',
      'dubrovnik-orlando-column',
      'dubrovnik-sponza-palace',
    ],
  },
  {
    id: 'dubrovnik-up-on-the-walls',
    cityId: 'dubrovnik',
    emoji: '🛡️',
    name: { el: 'Πάνω στα τείχη', en: 'Up on the walls' },
    promise: {
      el: 'Δύο ώρες γύρω από μια ολόκληρη πόλη, με τις στέγες από τη μία και τη θάλασσα από την άλλη.',
      en: 'Two hours right around a town, roofs on one side and open sea on the other.',
    },
    placeIds: [
      'dubrovnik-city-walls',
      'dubrovnik-minceta',
      'dubrovnik-st-john-fortress',
      'dubrovnik-lovrijenac',
    ],
  },
  {
    id: 'dubrovnik-a-town-with-no-king',
    cityId: 'dubrovnik',
    emoji: '📜',
    name: { el: 'Μια πόλη χωρίς βασιλιά', en: 'A town with no king' },
    promise: {
      el: 'Πώς κρατήθηκε ελεύθερη μια μικρή πόλη: με μέτρα, ζυγαριές, κανόνες και σιτάρι.',
      en: 'How one small town stayed free: with measures, scales, rules and stored grain.',
    },
    placeIds: [
      'dubrovnik-rectors-palace',
      'dubrovnik-sponza-palace',
      'dubrovnik-orlando-column',
      'dubrovnik-rupe-granary',
    ],
  },
  {
    id: 'dubrovnik-herbs-and-miracles',
    cityId: 'dubrovnik',
    emoji: '💊',
    name: { el: 'Βότανα, πορτοκάλια και θαύματα', en: 'Herbs, oranges and miracles' },
    promise: {
      el: 'Ένα φαρμακείο εφτακοσίων ετών, μια αγορά με λεβάντα και δύο εκκλησίες με ιστορίες.',
      en: 'A seven-hundred-year-old pharmacy, a lavender market and two churches with stories.',
    },
    placeIds: [
      'dubrovnik-franciscan-monastery',
      'dubrovnik-gundulic-square',
      'dubrovnik-cathedral',
      'dubrovnik-st-blaise-church',
    ],
  },
  {
    id: 'dubrovnik-outside-the-walls',
    cityId: 'dubrovnik',
    emoji: '⛰️',
    name: { el: 'Έξω από τα τείχη', en: 'Outside the walls' },
    promise: {
      el: 'Ψηλά στη ράχη και πέρα στο νησί, για να δεις πόσο μικρή είναι στ’ αλήθεια η πόλη.',
      en: 'Up on the ridge and over to the island, to see how small the town really is.',
    },
    placeIds: ['dubrovnik-srd', 'dubrovnik-lokrum', 'dubrovnik-lovrijenac'],
  },
];
