/**
 * WiseBot World — Spain.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of each city. Cities
 * are empty for now and arrive through the pipeline. Facts were checked against the
 * English Wikipedia articles for Teide, the Sagrada Família, olive oil and the list of
 * World Heritage Sites in Spain, and Teide's elevation against Wikidata Q38954 (P2044).
 * `stamp` is deliberately not localised: it is inked the way Spain inks it.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'spain',
  code: 'ES',
  flag: '🇪🇸',
  continent: 'europe',
  order: 3,

  name: {
    el: 'Ισπανία',
    en: 'Spain',
  },

  intro: {
    el:
      'Η Ισπανία είναι μια χώρα όπου το μεσημεριανό τρώγεται στις τρεις και το βράδυ αργεί ' +
      'να τελειώσει. Έχει βουνά με χιόνι και παραλίες όπου ζεσταίνεσαι τον Δεκέμβριο, και ' +
      'μακριά στον Ατλαντικό έχει νησιά με ένα ηφαίστειο ψηλότερο από κάθε άλλη κορυφή της. ' +
      'Στη Βαρκελώνη μια εκκλησία χτίζεται εδώ και πάνω από εκατόν σαράντα χρόνια, στη ' +
      'Γρανάδα ένα παλάτι έχει τοίχους σκαλισμένους σαν δαντέλα, και στη Μαδρίτη τα παιδιά ' +
      'ζωγραφίζουν μπροστά σε πίνακες που φτιάχτηκαν πριν από τετρακόσια χρόνια. Και όπου ' +
      'κι αν πας, κάποιος θα σου προσφέρει ελιές.',
    en:
      'Spain is a country where lunch happens at three o’clock and the evening takes ' +
      'its time to end. It has mountains with snow and beaches warm enough for December, ' +
      'and far out in the Atlantic it has islands with a volcano taller than any other ' +
      'peak in the country. In Barcelona a church has been under construction for more than a ' +
      'hundred and forty years, in Granada a palace has walls carved as finely as lace, ' +
      'and in Madrid children sketch in front of paintings made four hundred ' +
      'years ago. And wherever you go, somebody will offer you olives.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Τέιδε, είναι ηφαίστειο στο νησί της Τενερίφης και φτάνει τα 3.715 μέτρα.',
      en: 'Its highest mountain, Teide, is a volcano on the island of Tenerife and reaches 3,715 metres.',
    },
    {
      el: 'Έχει 50 Μνημεία Παγκόσμιας Κληρονομιάς της UNESCO, τα πέμπτα περισσότερα στον κόσμο.',
      en: 'It has 50 UNESCO World Heritage Sites, the fifth most of any country in the world.',
    },
    {
      el: 'Η Σαγράδα Φαμίλια στη Βαρκελώνη χτίζεται από το 1882 και είναι η ψηλότερη εκκλησία του κόσμου, 172,5 μέτρα.',
      en: 'The Sagrada Família in Barcelona has been under construction since 1882 and is the tallest church in the world, at 172.5 metres.',
    },
    {
      el: 'Παράγει περισσότερο ελαιόλαδο από κάθε άλλη χώρα στον κόσμο.',
      en: 'It produces more olive oil than any other country in the world.',
    },
  ],

  stamp: {
    legend: 'ESPAÑA',
    port: 'MADRID-BARAJAS',
    shape: 'rectangle',
    ink: '#b8322f',
  },
};

export const cities: City[] = [
  {
    id: 'barcelona',
    countryId: 'spain',
    order: 1,
    emoji: '🎨',

    name: {
      el: 'Βαρκελώνη',
      en: 'Barcelona',
    },

    intro: {
      el:
        'Η Βαρκελώνη είναι μια πόλη ανάμεσα σε λόφους και θάλασσα, όπου ένας αρχιτέκτονας ' +
        'ονειρευόταν σπίτια σαν δράκους και μια εκκλησία που χτίζεται εδώ και 144 χρόνια ' +
        'και μόλις έγινε η ψηλότερη του κόσμου. Οι δρόμοι της παλιάς πόλης είναι στενοί και ' +
        'πέτρινοι, οι δρόμοι της καινούργιας είναι χαραγμένοι με χάρακα, και ένας μακρύς ' +
        'περίπατος με πλατάνια τα ενώνει με το λιμάνι. Εδώ μιλούν δύο γλώσσες, καταλανικά ' +
        'και ισπανικά, χορεύουν σε κύκλο μπροστά στον καθεδρικό, και οι φίλαθλοι ' +
        'πανηγυρίζουν σε ένα σιντριβάνι.',
      en:
        'Barcelona is a city between hills and sea, where an architect dreamed up houses ' +
        'like dragons and a church that has been under construction for 144 years and has ' +
        'just become the tallest in the world. The streets of the old town are narrow and ' +
        'made of stone, the streets of the new town are drawn with a ruler, and a long walk ' +
        'lined with plane trees joins them to the harbour. People here speak two languages, ' +
        'Catalan and Spanish, they dance in a circle in front of the cathedral, and ' +
        'football fans celebrate at a fountain.',
    },

    /**
     * Copied from `scripts/world/seeds/barcelona.json`, which takes it from Wikidata's own
     * point for the city (Q1492). The resolver audits every place against this exact point.
     */
    centre: { lat: 41.3825, lng: 2.17694 },

    map: {
      src: '/images/world/maps/barcelona.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Βαρκελώνης, με τη θάλασσα στα νοτιοανατολικά, τον Μοντζουίκ δίπλα στο λιμάνι και τον Τιμπιντάμπο στους λόφους από πίσω.',
        en: 'A stylised map of Barcelona, with the sea to the south-east, Montjuïc by the harbour and Tibidabo on the hills behind.',
      },
      width: 1000,
      height: 909,
      /**
       * The artwork is drawn to these bounds, so pins are projected onto it rather than
       * placed by hand. Every one of the sixteen places in `cities/barcelona.ts` falls
       * inside them, with Tibidabo in the top-left corner, the zoo on the right edge and
       * the Columbus column and the shipyard down by the water.
       */
      bounds: { north: 41.435, south: 41.36, east: 2.21, west: 2.1 },
    },
  },
];
