/**
 * WiseBot World — Türkiye.
 *
 * Same shape as `greece.ts`. `cities` is empty for now; the city metadata arrives through
 * the pipeline. Facts checked against the English Wikipedia articles for Mount Ararat,
 * Geography of Turkey, Göbekli Tepe, the Grand Bazaar and the Derinkuyu underground city
 * (September 2026). `stamp` is inked in Turkish on purpose — see the note in `greece.ts`.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'turkey',
  code: 'TR',
  flag: '🇹🇷',
  continent: 'asia',
  order: 5,

  name: {
    el: 'Τουρκία',
    en: 'Türkiye',
  },

  intro: {
    el:
      'Η Τουρκία είναι η χώρα όπου η Ευρώπη και η Ασία αγγίζουν η μία την άλλη. Στην ' +
      'Κωνσταντινούπολη μπορείς να πάρεις πρωινό στη μία ήπειρο, να περάσεις μια γέφυρα και ' +
      'να φας μεσημεριανό στην άλλη. Στην Καππαδοκία οι άνθρωποι έσκαψαν σπίτια μέσα σε ' +
      'βράχους που μοιάζουν με καμινάδες, και κάθε πρωί δεκάδες αερόστατα σηκώνονται από ' +
      'πάνω τους. Στο Παμούκκαλε μια ολόκληρη πλαγιά είναι κάτασπρη, φτιαγμένη από ζεστό νερό ' +
      'που σιγά σιγά έγινε πέτρα. Και όπου κι αν καθίσεις, κάποιος θα σου προσφέρει τσάι σε ' +
      'ένα μικρό ποτήρι σε σχήμα τουλίπας.',
    en:
      'Türkiye is the country where Europe and Asia touch. In Istanbul you can eat breakfast ' +
      'on one continent, cross a bridge, and have lunch on the other. In Cappadocia people ' +
      'carved homes into rocks shaped like chimneys, and every morning dozens of hot-air ' +
      'balloons rise above them. At Pamukkale a whole hillside is pure white, made of warm ' +
      'spring water that slowly turned to stone. Under the fields there are whole cities dug ' +
      'by hand, deep enough to hide thousands of people. And wherever you sit, somebody ' +
      'will offer you tea in a small glass shaped like a tulip.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Αραράτ, φτάνει τα 5.137 μέτρα και έχει χιόνι όλο τον χρόνο.',
      en: 'Its highest mountain, Ararat, reaches 5,137 metres and keeps snow all year round.',
    },
    {
      el: 'Το Γκιομπεκλί Τεπέ χτίστηκε πριν από περίπου 11.500 χρόνια, πριν οι άνθρωποι φτιάξουν το πρώτο πήλινο δοχείο.',
      en: 'Göbekli Tepe was built about 11,500 years ago, before people had made their first clay pot.',
    },
    {
      el: 'Το Μεγάλο Παζάρι της Κωνσταντινούπολης έχει 61 σκεπαστούς δρόμους και περίπου 4.000 μαγαζιά.',
      en: 'The Grand Bazaar in Istanbul has 61 covered streets and about 4,000 shops.',
    },
    {
      el: 'Η υπόγεια πόλη Ντερίνκουγιου κατεβαίνει 85 μέτρα κάτω από τη γη και χωρούσε έως 20.000 ανθρώπους.',
      en: 'The underground city of Derinkuyu goes 85 metres down and could hold up to 20,000 people.',
    },
  ],

  stamp: {
    legend: 'TÜRKİYE CUMHURİYETİ',
    port: 'İSTANBUL · GİRİŞ',
    shape: 'rectangle',
    ink: '#4b2e83',
  },
};

export const cities: City[] = [
  {
    id: 'istanbul',
    countryId: 'turkey',
    order: 1,
    emoji: '🕌',

    name: {
      el: 'Κωνσταντινούπολη',
      en: 'Istanbul',
    },

    intro: {
      el:
        'Η Κωνσταντινούπολη είναι η μόνη μεγάλη πόλη που πατάει σε δύο ηπείρους: παίρνεις ' +
        'πρωινό στην Ευρώπη, μπαίνεις σε ένα πλοιάριο και τρως μεσημεριανό στην Ασία είκοσι ' +
        'λεπτά αργότερα. Για περισσότερα από χίλια χρόνια ήταν η Κωνσταντινούπολη των ' +
        'Βυζαντινών, και μετά για σχεδόν πεντακόσια η πρωτεύουσα των σουλτάνων· και οι δύο ' +
        'πόλεις είναι ακόμα εδώ, η μία πάνω στην άλλη. Ένας θόλος του 537 στέκεται δίπλα σε ' +
        'ένα παλάτι με τέσσερις αυλές, οι γλάροι κυνηγούν τα καράβια, και κάτω από τους ' +
        'δρόμους ένα δάσος από μαρμάρινες κολόνες κρατάει ακόμα το χώμα.',
      en:
        'Istanbul is the only big city that stands on two continents: you can have breakfast ' +
        'in Europe, step onto a ferry, and eat lunch in Asia twenty minutes later. For more ' +
        'than a thousand years it was Constantinople, capital of the Byzantine Greeks, and ' +
        'then for almost five hundred years the capital of the sultans, and both cities are ' +
        'still here, one on top of the other. A dome from the year 537 stands beside a ' +
        'palace of four courtyards, seagulls chase the ferries, and under the streets a ' +
        'forest of marble columns still holds up the ground.',
    },

    /**
     * Copied from `scripts/world/seeds/istanbul.json`. The resolver audits every place
     * against this exact point, so the two must not drift.
     */
    centre: { lat: 41.015, lng: 28.972 },

    map: {
      src: '/images/world/maps/istanbul.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Κωνσταντινούπολης με τον Κεράτιο Κόλπο, το στόμιο του Βοσπόρου και τη θάλασσα του Μαρμαρά.',
        en: 'A stylised map of Istanbul showing the Golden Horn, the mouth of the Bosphorus and the Sea of Marmara.',
      },
      width: 1000,
      height: 810,
      /**
       * The artwork is drawn to these bounds, and every `location.map` in
       * `cities/istanbul.ts` is the projection of that place's resolved coordinate into
       * them. The Chora sits on the west edge, the Rahmi M. Koç Museum on the north, the
       * Maiden's Tower on the east and the Blue Mosque on the south.
       */
      bounds: { north: 41.048, south: 40.998, east: 29.012, west: 28.93 },
    },
  },
  {
    id: 'antalya',
    countryId: 'turkey',
    order: 2,
    emoji: '🍊',

    name: {
      el: 'Αττάλεια',
      en: 'Antalya',
    },

    intro: {
      el:
        'Η Αττάλεια είναι μια πόλη πάνω σε βράχια, δίπλα σε έναν κόλπο που τον κλείνουν βουνά ' +
        'με χιόνι στις κορυφές ενώ κάτω κάνει ζέστη. Την ίδρυσε ένας Έλληνας βασιλιάς που ' +
        'έψαχνε λιμάνι, την επισκέφτηκε ένας Ρωμαίος αυτοκράτορας που του έχτισαν πύλη, και ' +
        'οι Σελτζούκοι της έδωσαν έναν μιναρέ με αυλάκια που έγινε το σύμβολό της. Εδώ ένα ' +
        'ποτάμι πηδάει από τα βράχια κατευθείαν στη θάλασσα, οι καρχαρίες περνούν πάνω από το ' +
        'κεφάλι σου σε ένα γυάλινο τούνελ, και η παραλία είναι επτά χιλιόμετρα βότσαλα.',
      en:
        'Antalya is a city on cliffs, beside a bay closed off by mountains with snow on their ' +
        'peaks while it is warm below. It was founded by a Greek king looking for a harbour, ' +
        'visited by a Roman emperor who was given a gate, and the Seljuks gave it a grooved ' +
        'minaret that became its symbol. Here a river leaps off the cliffs straight into the ' +
        'sea, sharks pass over your head in a glass tunnel, and the beach is seven kilometres ' +
        'of pebbles.',
    },

    /**
     * Copied from `scripts/world/seeds/antalya.json`, which takes it from Wikidata's own
     * point for the city (Q6487), north of the old town. The resolver audits every place
     * against this exact point and found nothing on it.
     */
    centre: { lat: 36.90812, lng: 30.69556 },

    map: {
      src: '/images/world/maps/antalya.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Αττάλειας, με τον κόλπο στα νότια, την παλιά πόλη στα βράχια πάνω από το λιμάνι, την παραλία στα δυτικά και τον καταρράκτη στα ανατολικά.',
        en: 'A stylised map of Antalya, with the bay to the south, the old town on its cliffs above the harbour, the beach to the west and the waterfall to the east.',
      },
      width: 1000,
      height: 627,
      /**
       * The artwork is drawn to these bounds, so pins are projected onto it rather than
       * placed by hand. Every one of the twelve places in `cities/antalya.ts` falls inside
       * them, with the beach at the bottom left, the old town in the middle and the Düden
       * falls at the bottom right.
       */
      bounds: { north: 36.895, south: 36.845, east: 30.79, west: 30.635 },
    },
  },
];
