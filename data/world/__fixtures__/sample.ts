/**
 * A complete, self-contained World fixture.
 *
 * Why it exists: the engine session builds every screen while the content session is
 * still writing the first city, so there is nothing real to render against. This is a
 * whole country — stamp, city, four places, one of them a museum with rooms, exhibits
 * and riddles — exercising every branch a screen can take.
 *
 * It is NOT content. It never enters the registry, it is never routed to in production,
 * and `Sampleland` is deliberately not a real place so that a leak is obvious on sight.
 * The tests in `data/world/world.test.ts` run their invariants over this file too, so
 * the fixture cannot drift away from the rules the real content must satisfy.
 */

import type { City, Country, Place, Trail } from '../types';

export const country: Country = {
  id: 'sampleland',
  code: 'ZZ',
  flag: '🏳️',
  continent: 'europe',
  name: { el: 'Δειγματία', en: 'Sampleland' },
  intro: {
    el: 'Η Δειγματία δεν υπάρχει σε κανέναν χάρτη. Είναι η χώρα που φτιάχτηκε για να δοκιμάζονται οι οθόνες πριν φτάσει το αληθινό περιεχόμενο, με μία πόλη, τέσσερα αξιοθέατα και ένα μουσείο που έχει μέσα του γρίφους. Αν τη δεις ποτέ στην εφαρμογή, κάτι πήγε στραβά.',
    en: 'Sampleland is on no map. It is the country built so the screens can be tested before the real content arrives: one city, four sights and a museum with riddles inside it. If you ever see it in the app, something went wrong.',
  },
  facts: [
    { el: 'Δεν υπάρχει.', en: 'It does not exist.' },
    { el: 'Έχει ακριβώς μία πόλη.', en: 'It has exactly one city.' },
  ],
  stamp: {
    legend: 'ΔΕΙΓΜΑΤΙΑ · SAMPLELAND',
    port: 'ΔΕΙΓΜΑΤΟΠΟΛΗ SAMPLETOWN',
    shape: 'circle',
    ink: '#1d4ed8',
  },
  order: 999,
};

export const cities: City[] = [
  {
    id: 'sampletown',
    countryId: 'sampleland',
    name: { el: 'Δειγματόπολη', en: 'Sampletown' },
    intro: {
      el: 'Μια πόλη με τέσσερα μέρη να δεις: έναν λόφο με θέα, μια γέφυρα, έναν κήπο και ένα μουσείο. Αρκετά για ένα απόγευμα, και αρκετά για να δοκιμαστεί κάθε οθόνη που έχει το World.',
      en: 'A town with four things to see: a hill with a view, a bridge, a garden and a museum. Enough for one afternoon, and enough to exercise every screen World has.',
    },
    emoji: '🏘️',
    map: {
      src: '/images/world/maps/sampletown.svg',
      alt: { el: 'Χάρτης της Δειγματόπολης', en: 'Map of Sampletown' },
      width: 1000,
      height: 700,
    },
    centre: { lat: 37.9, lng: 23.7 },
    order: 1,
  },
];

export const places: Place[] = [
  {
    id: 'sampletown-hill',
    cityId: 'sampletown',
    name: { el: 'Ο Λόφος', en: 'The Hill' },
    tagline: { el: 'Η θέα που εξηγεί την πόλη', en: 'The view that explains the town' },
    story: {
      el: 'Κάθε πόλη έχει ένα σημείο απ’ όπου βγάζει νόημα, και στη Δειγματόπολη είναι αυτός ο λόφος. Από ψηλά φαίνεται γιατί ο δρόμος στρίβει εκεί που στρίβει, γιατί η γέφυρα χτίστηκε εκεί και όχι τριακόσια μέτρα πιο κάτω, και γιατί ο κήπος έμεινε πράσινος ενώ γύρω του υψώθηκαν σπίτια. Οι άνθρωποι ανεβαίνουν εδώ όταν θέλουν να σκεφτούν, και τα παιδιά όταν θέλουν να τρέξουν κατηφόρα. Και τα δύο δουλεύουν.',
      en: 'Every town has one spot from which it makes sense, and in Sampletown it is this hill. From up here you can see why the road bends where it bends, why the bridge was built there and not three hundred metres downstream, and why the garden stayed green while houses rose all around it. People climb up when they want to think, and children when they want to run down. Both work.',
    },
    facts: [
      { el: 'Ύψος 120 μέτρα.', en: '120 metres high.' },
      { el: 'Το μονοπάτι έχει 312 σκαλιά.', en: 'The path has 312 steps.' },
    ],
    emoji: '⛰️',
    category: 'nature',
    difficulty: 1,
    location: {
      lat: 37.9052,
      lng: 23.7031,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [{ kind: 'wikidata', ref: 'Q0', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      map: { x: 0.22, y: 0.3 },
    },
    question: {
      q: { el: 'Γιατί ανεβαίνει κανείς στον λόφο;', en: 'Why would you climb the hill?' },
      answers: [
        { el: 'Για να δει όλη την πόλη', en: 'To see the whole town' },
        { el: 'Για να αγοράσει εισιτήριο', en: 'To buy a ticket' },
        { el: 'Για να περάσει το ποτάμι', en: 'To cross the river' },
        { el: 'Για να δει τα εκθέματα', en: 'To see the exhibits' },
      ],
      explanation: {
        el: 'Από ψηλά καταλαβαίνεις γιατί μια πόλη χτίστηκε έτσι κι όχι αλλιώς. Ο ποταμός, ο δρόμος και η γέφυρα εξηγούνται με μια ματιά.',
        en: 'From above you understand why a town was built the way it was. The river, the road and the bridge all explain themselves at a glance.',
      },
    },
  },
  {
    id: 'sampletown-bridge',
    cityId: 'sampletown',
    name: { el: 'Η Παλιά Γέφυρα', en: 'The Old Bridge' },
    tagline: { el: 'Χτίστηκε δύο φορές', en: 'Built twice' },
    story: {
      el: 'Η πρώτη γέφυρα ήταν ξύλινη και την πήρε το ποτάμι σε μια πλημμύρα. Η δεύτερη χτίστηκε από πέτρα, πιο ψηλά και πιο φαρδιά, και στέκει ακόμα. Αν κοιτάξεις κάτω από την τρίτη καμάρα θα δεις σκαλισμένη μια χρονολογία: είναι η χρονιά που τελείωσε το χτίσιμο, και τη σκάλισε ο μάστορας που το πλήρωσε ακριβά, γιατί δούλεψε δύο χειμώνες μέσα στο κρύο νερό.',
      en: 'The first bridge was wooden and the river took it in a flood. The second was built of stone, higher and wider, and it is still standing. If you look under the third arch you will find a date carved into it: the year the work was finished, cut there by the mason who paid dearly for it, because he worked two winters standing in cold water.',
    },
    facts: [
      { el: 'Πέντε καμάρες.', en: 'Five arches.' },
      { el: 'Η χρονολογία είναι στην τρίτη.', en: 'The date is on the third.' },
    ],
    emoji: '🌉',
    category: 'history',
    difficulty: 2,
    location: {
      lat: 37.8991,
      lng: 23.6987,
      anchor: 'centroid',
      confidence: 'A',
      sources: [{ kind: 'wikidata', ref: 'Q0', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      map: { x: 0.55, y: 0.62 },
    },
    question: {
      q: { el: 'Γιατί η δεύτερη γέφυρα χτίστηκε από πέτρα;', en: 'Why was the second bridge built of stone?' },
      answers: [
        { el: 'Για να αντέξει την πλημμύρα', en: 'So a flood could not take it' },
        { el: 'Γιατί η πέτρα ήταν φθηνότερη', en: 'Because stone was cheaper' },
        { el: 'Για να είναι πιο όμορφη', en: 'To make it prettier' },
        { el: 'Γιατί τελείωσε το ξύλο', en: 'Because the wood ran out' },
      ],
      explanation: {
        el: 'Το ξύλο επιπλέει και παρασύρεται. Η πέτρα κρατάει, και γι’ αυτό η δεύτερη γέφυρα στέκει ακόμα.',
        en: 'Wood floats and washes away. Stone holds, which is why the second bridge is still there.',
      },
    },
  },
  {
    id: 'sampletown-garden',
    cityId: 'sampletown',
    name: { el: 'Ο Κήπος', en: 'The Garden' },
    tagline: { el: 'Το πράσινο που δεν χτίστηκε', en: 'The green that was never built on' },
    story: {
      el: 'Όταν η πόλη μεγάλωσε, όλοι ήθελαν να χτίσουν εδώ. Το χώμα ήταν καλό, το νερό κοντά, ο δρόμος δίπλα. Μια δασκάλα μάζεψε υπογραφές και ζήτησε να μείνει ο κήπος ως έχει, για τα παιδιά. Πήρε τριακόσιες υπογραφές σε μια πόλη με χίλιους κατοίκους, κι ο κήπος έμεινε. Σήμερα έχει σαράντα δέντρα, δύο παγκάκια που όλοι διεκδικούν το απόγευμα, και το όνομά της σε μια μικρή πλάκα που τη βρίσκεις μόνο αν την ψάξεις.',
      en: 'When the town grew, everyone wanted to build here. The soil was good, the water close, the road right beside it. A schoolteacher collected signatures and asked that the garden be left as it was, for the children. She got three hundred names in a town of a thousand, and the garden stayed. Today it has forty trees, two benches everyone competes for in the afternoon, and her name on a small plaque you will only find if you look for it.',
    },
    facts: [
      { el: 'Σαράντα δέντρα.', en: 'Forty trees.' },
      { el: 'Τριακόσιες υπογραφές το έσωσαν.', en: 'Three hundred signatures saved it.' },
    ],
    emoji: '🌳',
    category: 'nature',
    difficulty: 1,
    location: {
      lat: 37.9018,
      lng: 23.7042,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q0', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      map: { x: 0.72, y: 0.4 },
    },
    question: {
      q: { el: 'Πώς σώθηκε ο κήπος;', en: 'How was the garden saved?' },
      answers: [
        { el: 'Μια δασκάλα μάζεψε υπογραφές', en: 'A teacher collected signatures' },
        { el: 'Τον αγόρασε ένας πλούσιος', en: 'A rich man bought it' },
        { el: 'Το χώμα ήταν κακό για χτίσιμο', en: 'The soil was bad for building' },
        { el: 'Ήταν πολύ μακριά από τον δρόμο', en: 'It was too far from the road' },
      ],
      explanation: {
        el: 'Τριακόσιοι άνθρωποι σε μια πόλη χιλίων ζήτησαν το ίδιο πράγμα, και αυτό αρκούσε.',
        en: 'Three hundred people in a town of a thousand asked for the same thing, and that was enough.',
      },
    },
  },
  {
    id: 'sampletown-museum',
    cityId: 'sampletown',
    name: { el: 'Το Μουσείο της Πόλης', en: 'The Town Museum' },
    tagline: { el: 'Δύο αίθουσες και δύο γρίφοι', en: 'Two rooms and two riddles' },
    story: {
      el: 'Το μουσείο στεγάζεται στο παλιό σχολείο, κι αυτό φαίνεται: οι αίθουσες είναι ψηλοτάβανες και τα παράθυρα ξεκινούν πάνω από το ύψος ενός παιδιού, ώστε να μην κοιτάζει έξω στο μάθημα. Μέσα φυλάγονται τα πράγματα που η πόλη αποφάσισε να κρατήσει: εργαλεία, χάρτες, ένα ρολόι που σταμάτησε και δεν το ξανακούρδισε κανείς. Κάθε αντικείμενο εδώ διαλέχτηκε από κάποιον που πίστεψε ότι κάποια μέρα θα θέλαμε να το δούμε.',
      en: 'The museum lives in the old school, and you can tell: the rooms are high-ceilinged and the windows start above a child’s head, so nobody could look out during lessons. Inside are the things the town decided to keep: tools, maps, a clock that stopped and was never wound again. Every object here was chosen by somebody who believed that one day we would want to see it.',
    },
    facts: [
      { el: 'Ήταν σχολείο ως το 1974.', en: 'It was a school until 1974.' },
      { el: 'Δύο αίθουσες, έξι εκθέματα.', en: 'Two rooms, six exhibits.' },
    ],
    emoji: '🏛️',
    category: 'museum',
    difficulty: 2,
    location: {
      lat: 37.9004,
      lng: 23.7008,
      anchor: 'centroid',
      confidence: 'A',
      sources: [{ kind: 'wikidata', ref: 'Q0', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      map: { x: 0.4, y: 0.48 },
    },
    question: {
      q: { el: 'Τι ήταν το κτίριο πριν γίνει μουσείο;', en: 'What was the building before it was a museum?' },
      answers: [
        { el: 'Σχολείο', en: 'A school' },
        { el: 'Νοσοκομείο', en: 'A hospital' },
        { el: 'Εργοστάσιο', en: 'A factory' },
        { el: 'Σιδηροδρομικός σταθμός', en: 'A railway station' },
      ],
      explanation: {
        el: 'Τα ψηλά παράθυρα το προδίδουν: χτίστηκαν έτσι ώστε τα παιδιά να μην κοιτάζουν έξω.',
        en: 'The high windows give it away: they were built so children could not look outside.',
      },
    },
    museum: {
      doorNote: {
        el: 'Η είσοδος είναι δωρεάν για παιδιά. Κλειστά τη Δευτέρα.',
        en: 'Children enter free. Closed on Mondays.',
      },
      rooms: [
        {
          id: 'sampletown-museum-tools',
          name: { el: 'Η Αίθουσα των Εργαλείων', en: 'The Tools Room' },
          emoji: '🔨',
          intro: {
            el: 'Εδώ είναι τα πράγματα με τα οποία φτιάχτηκε η πόλη. Τα περισσότερα είναι φθαρμένα ακριβώς εκεί που τα κρατούσε το χέρι, κι αυτή η φθορά είναι το πιο ενδιαφέρον κομμάτι τους.',
            en: 'These are the things the town was built with. Most are worn exactly where a hand held them, and that wear is the most interesting part of them.',
          },
          exhibits: [
            {
              id: 'sampletown-museum-hammer',
              name: { el: 'Το Σφυρί του Μάστορα', en: 'The Mason’s Hammer' },
              blurb: {
                el: 'Το σφυρί που χτύπησε τις πέτρες της γέφυρας. Το ξύλινο χερούλι έχει γυαλίσει στο σημείο που το έπιανε, και η κεφαλή είναι φαγωμένη από τη μία πλευρά, γιατί ο μάστορας ήταν αριστερόχειρας. Ένα εργαλείο κρατάει το σχήμα του ανθρώπου που το δούλεψε περισσότερο απ’ όσο νομίζουμε.',
                en: 'The hammer that shaped the stones of the bridge. Its wooden handle is polished where he gripped it, and its head is worn on one side only, because the mason was left-handed. A tool keeps the shape of the person who used it more faithfully than we expect.',
              },
              question: {
                q: { el: 'Τι μαρτυρά η φθορά στη μία πλευρά;', en: 'What does the wear on one side tell us?' },
                answers: [
                  { el: 'Ότι ο μάστορας ήταν αριστερόχειρας', en: 'That the mason was left-handed' },
                  { el: 'Ότι το σφυρί ήταν φθηνό', en: 'That the hammer was cheap' },
                  { el: 'Ότι έπεσε στο ποτάμι', en: 'That it fell in the river' },
                  { el: 'Ότι το χρησιμοποίησαν δύο άνθρωποι', en: 'That two people used it' },
                ],
                explanation: {
                  el: 'Χτυπούσε πάντα με την ίδια γωνία, και η γωνία δείχνει με ποιο χέρι.',
                  en: 'He always struck at the same angle, and the angle shows which hand.',
                },
              },
            },
            {
              id: 'sampletown-museum-saw',
              name: { el: 'Το Πριόνι', en: 'The Saw' },
              blurb: {
                el: 'Πριόνι δύο ανδρών: το κρατούσαν ένας από κάθε άκρη και τραβούσαν εναλλάξ. Δεν μπορείς να το δουλέψεις μόνος σου, όσο δυνατός κι αν είσαι, γιατί όταν σπρώχνεις λυγίζει. Είναι το εργαλείο που έκοψε τα δοκάρια της πρώτης, ξύλινης γέφυρας.',
                en: 'A two-man saw: one held each end and they pulled in turn. You cannot work it alone however strong you are, because it buckles when you push. This is the tool that cut the beams of the first, wooden bridge.',
              },
              question: {
                q: { el: 'Γιατί χρειάζεται δύο ανθρώπους;', en: 'Why does it need two people?' },
                answers: [
                  { el: 'Γιατί λυγίζει', en: 'Because it bends' },
                  { el: 'Γιατί είναι πολύ βαρύ', en: 'Because it is too heavy' },
                  { el: 'Γιατί έχει δύο λεπίδες', en: 'Because it has two blades' },
                  { el: 'Γιατί έτσι ήταν ο νόμος', en: 'Because the law said so' },
                ],
                explanation: {
                  el: 'Η λεπίδα κόβει μόνο όταν τραβιέται. Άρα κάποιος πρέπει να τραβάει πάντα από την άλλη μεριά.',
                  en: 'The blade only cuts when pulled. So somebody must always be pulling from the other end.',
                },
              },
            },
            {
              id: 'sampletown-museum-level',
              name: { el: 'Το Αλφάδι με το Νερό', en: 'The Water Level' },
              blurb: {
                el: 'Πριν από τα σημερινά αλφάδια, οι μάστορες χρησιμοποιούσαν έναν διάφανο σωλήνα γεμάτο νερό. Το νερό στα δύο άκρα στέκεται πάντα στο ίδιο ύψος, όσο μακριά κι αν είναι μεταξύ τους. Έτσι ίσιωσαν τις καμάρες της γέφυρας, με ένα κόλπο που δεν χαλάει ποτέ και δεν θέλει μπαταρία.',
                en: 'Before modern spirit levels, builders used a clear tube full of water. Water at the two ends always settles at the same height, however far apart they are. That is how the arches of the bridge were levelled, with a trick that never breaks and needs no battery.',
              },
              question: {
                q: { el: 'Γιατί δουλεύει το αλφάδι με νερό;', en: 'Why does a water level work?' },
                answers: [
                  { el: 'Το νερό ισοσταθμίζεται', en: 'Water levels itself' },
                  { el: 'Το νερό είναι βαρύ', en: 'Water is heavy' },
                  { el: 'Ο σωλήνας είναι ίσιος', en: 'The tube is straight' },
                  { el: 'Το νερό παγώνει ίσια', en: 'Water freezes flat' },
                ],
                explanation: {
                  el: 'Είναι νόμος της φύσης, όχι κατασκευή: το νερό βρίσκει πάντα την ίδια στάθμη.',
                  en: 'It is a law of nature, not a piece of engineering: water always finds the same level.',
                },
              },
            },
          ],
        },
        {
          id: 'sampletown-museum-time',
          name: { el: 'Η Αίθουσα του Χρόνου', en: 'The Time Room' },
          emoji: '⏳',
          intro: {
            el: 'Χάρτες, φωτογραφίες κι ένα ρολόι. Όλα δείχνουν το ίδιο πράγμα από διαφορετική γωνία: πώς άλλαξε η πόλη, και τι επέλεξε να κρατήσει.',
            en: 'Maps, photographs and a clock. All of them show the same thing from a different angle: how the town changed, and what it chose to keep.',
          },
          exhibits: [
            {
              id: 'sampletown-museum-clock',
              name: { el: 'Το Ρολόι που Σταμάτησε', en: 'The Clock That Stopped' },
              blurb: {
                el: 'Ήταν στο καμπαναριό και σταμάτησε στις 4:12 ένα πρωί του 1974, τη μέρα που έκλεισε το σχολείο. Κανείς δεν το κούρδισε ξανά. Θα μπορούσαν, το μηχανισμό τον έχουν ελέγξει και δουλεύει. Απλώς αποφάσισαν ότι ένα ρολόι σταματημένο σε μια συγκεκριμένη ώρα λέει την ιστορία καλύτερα από ένα που δείχνει σωστά.',
                en: 'It hung in the bell tower and stopped at 4:12 one morning in 1974, the day the school closed. Nobody wound it again. They could have; the mechanism has been checked and it works. They simply decided that a clock stopped at a particular hour tells the story better than one showing the right time.',
              },
              question: {
                q: { el: 'Γιατί δεν κούρδισαν ξανά το ρολόι;', en: 'Why was the clock never wound again?' },
                answers: [
                  { el: 'Για να θυμίζει εκείνη τη μέρα', en: 'To remember that day' },
                  { el: 'Γιατί χάλασε ο μηχανισμός', en: 'Because the mechanism broke' },
                  { el: 'Γιατί χάθηκε το κλειδί', en: 'Because the key was lost' },
                  { el: 'Γιατί κανείς δεν ήξερε πώς', en: 'Because nobody knew how' },
                ],
                explanation: {
                  el: 'Ο μηχανισμός δουλεύει μια χαρά. Η επιλογή ήταν να μείνει σταματημένο.',
                  en: 'The mechanism works perfectly well. Leaving it stopped was a choice.',
                },
              },
            },
            {
              id: 'sampletown-museum-map',
              name: { el: 'Ο Χάρτης του 1890', en: 'The 1890 Map' },
              blurb: {
                el: 'Ο παλαιότερος χάρτης της πόλης. Πάνω του η γέφυρα είναι σχεδιασμένη με διακεκομμένη γραμμή, γιατί όταν φτιάχτηκε ο χάρτης δεν είχε χτιστεί ακόμα: ο χαρτογράφος σχεδίασε αυτό που είχαν υποσχεθεί. Τα σπίτια είναι σαράντα. Σήμερα είναι πάνω από τετρακόσια, και ο κήπος είναι το μόνο σημείο που δεν έχει αλλάξει σχήμα.',
                en: 'The oldest map of the town. On it the bridge is drawn with a dotted line, because when the map was made it had not yet been built: the mapmaker drew what had been promised. There are forty houses. Today there are over four hundred, and the garden is the only shape on it that has not changed.',
              },
              question: {
                q: { el: 'Γιατί η γέφυρα είναι με διακεκομμένη γραμμή;', en: 'Why is the bridge drawn with a dotted line?' },
                answers: [
                  { el: 'Δεν υπήρχε ακόμα', en: 'It was not built yet' },
                  { el: 'Ήταν ξύλινη', en: 'It was wooden' },
                  { el: 'Είχε γκρεμιστεί', en: 'It had collapsed' },
                  { el: 'Ήταν μυστική', en: 'It was a secret' },
                ],
                explanation: {
                  el: 'Οι χαρτογράφοι σχεδίαζαν έτσι ό,τι ήταν σχέδιο και όχι πραγματικότητα.',
                  en: 'Mapmakers drew anything still only planned, rather than real, this way.',
                },
              },
            },
            {
              id: 'sampletown-museum-photo',
              name: { el: 'Η Σχολική Φωτογραφία', en: 'The School Photograph' },
              blurb: {
                el: 'Η τελευταία φωτογραφία της τάξης, τραβηγμένη στην αυλή που τώρα είναι η είσοδος του μουσείου. Είκοσι οκτώ παιδιά και μία δασκάλα. Η δασκάλα είναι η ίδια που είχε μαζέψει τις υπογραφές για τον κήπο, τριάντα χρόνια νωρίτερα, όταν ήταν καινούρια στην πόλη.',
                en: 'The last class photograph, taken in the yard that is now the museum entrance. Twenty-eight children and one teacher. The teacher is the same one who collected the signatures for the garden, thirty years earlier, when she was new in town.',
              },
              question: {
                q: { el: 'Ποια είναι η δασκάλα της φωτογραφίας;', en: 'Who is the teacher in the photograph?' },
                answers: [
                  { el: 'Αυτή που έσωσε τον κήπο', en: 'She saved the garden' },
                  { el: 'Η κόρη του μάστορα', en: 'The mason’s daughter' },
                  { el: 'Η χαρτογράφος του 1890', en: 'The mapmaker of 1890' },
                  { el: 'Δεν αναφέρεται πουθενά', en: 'Nobody knows' },
                ],
                explanation: {
                  el: 'Η ίδια γυναίκα, τριάντα χρόνια μετά τις υπογραφές. Το όνομά της είναι και στην πλάκα του κήπου.',
                  en: 'The same woman, thirty years after the signatures. Her name is on the garden plaque too.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'sampletown-museum-riddle-1',
          prompt: {
            el: 'Δούλεψα δύο χειμώνες μέσα στο κρύο νερό, μαζί με έναν άνθρωπο που κρατούσε πάντα με το ίδιο χέρι. Το ξύλο μου γυάλισε εκεί που με έπιανε. Ποιος είμαι;',
            en: 'I worked two winters in cold water beside a man who always held me with the same hand. My wood is polished where he gripped me. What am I?',
          },
          hint: {
            el: 'Ψάξε στην αίθουσα με τα εργαλεία, και κοίτα ποιο είναι φαγωμένο μόνο από τη μία πλευρά.',
            en: 'Look in the room of tools, and find the one worn on one side only.',
          },
          answerExhibitId: 'sampletown-museum-hammer',
          difficulty: 1,
        },
        {
          id: 'sampletown-museum-riddle-2',
          prompt: {
            el: 'Δείχνω κάτι που δεν υπήρχε ακόμα όταν με έφτιαξαν, και το δείχνω με κουκκίδες. Πάνω μου η πόλη είναι δέκα φορές μικρότερη από σήμερα. Ποιος είμαι;',
            en: 'I show something that did not exist when I was made, and I show it with dots. On me the town is ten times smaller than it is today. What am I?',
          },
          hint: {
            el: 'Δεν είναι ρολόι και δεν είναι φωτογραφία. Είναι το πιο παλιό πράγμα στην αίθουσα του χρόνου.',
            en: 'Not a clock and not a photograph. It is the oldest thing in the room of time.',
          },
          answerExhibitId: 'sampletown-museum-map',
          difficulty: 2,
        },
      ],
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'sampletown-water-and-stone',
    cityId: 'sampletown',
    name: { el: 'Νερό και Πέτρα', en: 'Water and Stone' },
    promise: {
      el: 'Θα δεις γιατί η πόλη χτίστηκε ακριβώς εδώ.',
      en: 'You will see why the town was built exactly here.',
    },
    emoji: '💧',
    placeIds: ['sampletown-hill', 'sampletown-bridge', 'sampletown-museum'],
  },
];
