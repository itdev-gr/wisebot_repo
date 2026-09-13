/**
 * WiseBot World — Hungary.
 *
 * Same shape as `greece.ts`. Numbers were checked against the English Wikipedia articles
 * for Lake Balaton, Kékes, the Hungarian Parliament Building, the Rubik's Cube and
 * Budapest (fetched September 2026). The stamp is inked in Hungarian on purpose.
 *
 * Budapest joined on 13 September 2026, with sixteen places in
 * `data/world/cities/budapest.ts`. Its `centre` is copied from
 * `data/world/coords/budapest.json`, which took it from Wikidata's own point for the
 * city (Q1781); it sits 213 m from the nearest place in the city file, so unlike
 * Vienna's it needed no substitute.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'hungary',
  code: 'HU',
  flag: '🇭🇺',
  continent: 'europe',
  order: 23,

  name: {
    el: 'Ουγγαρία',
    en: 'Hungary',
  },

  intro: {
    el:
      'Η Ουγγαρία είναι μια χώρα χωρίς θάλασσα, αλλά γεμάτη νερό. Κάτω από τη Βουδαπέστη ' +
      'αναβλύζουν ζεστές πηγές, και οι άνθρωποι κολυμπούν σε λουτρά που δουλεύουν εδώ και ' +
      'εκατοντάδες χρόνια, ακόμα κι όταν χιονίζει πάνω από την πισίνα. Στη μέση της χώρας ' +
      'απλώνεται η Μπάλατον, μια λίμνη τόσο μεγάλη που οι Ούγγροι τη λένε «θάλασσά» τους. ' +
      'Ο Δούναβης περνάει μέσα από την πρωτεύουσα και τη χωρίζει στα δύο: τη λοφώδη Βούδα ' +
      'από τη μία όχθη και την επίπεδη Πέστη από την άλλη. Και εδώ, το 1974, ένας Ούγγρος ' +
      'δάσκαλος έφτιαξε τον πιο γνωστό κύβο-γρίφο του κόσμου.',
    en:
      'Hungary has no sea, but it is full of water. Hot springs bubble up under Budapest, ' +
      'and people swim in bathhouses that have been open for hundreds of years, even while ' +
      'snow falls on the pool. In the middle of the country lies Balaton, a lake so wide ' +
      'that Hungarians call it their sea. The Danube runs straight through the capital and ' +
      'splits it in two: hilly Buda on one bank, flat Pest on the other. And in 1974 a ' +
      'Hungarian teacher working in Budapest invented the most famous puzzle cube in the ' +
      'world.',
  },

  facts: [
    {
      el: 'Η λίμνη Μπάλατον είναι η μεγαλύτερη της Κεντρικής Ευρώπης: περίπου 78 χιλιόμετρα μήκος και 600 τετραγωνικά χιλιόμετρα.',
      en: 'Lake Balaton is the largest lake in Central Europe: about 78 kilometres long and 600 square kilometres.',
    },
    {
      el: 'Το ψηλότερο σημείο της, ο Κέκες, φτάνει μόλις τα 1.014 μέτρα. Η χώρα είναι σχεδόν ολόκληρη πεδιάδα.',
      en: 'Its highest point, Kékes, reaches just 1,014 metres. The country is almost all flat plain.',
    },
    {
      el: 'Το Κοινοβούλιο στη Βουδαπέστη έχει 691 δωμάτια και 29 σκάλες, και ο θόλος του φτάνει τα 96 μέτρα.',
      en: 'The Parliament in Budapest has 691 rooms and 29 staircases, and its dome rises 96 metres.',
    },
    {
      el: 'Ο κύβος του Ρούμπικ εφευρέθηκε στη Βουδαπέστη το 1974. Έχουν πουληθεί περίπου 500 εκατομμύρια.',
      en: "The Rubik's Cube was invented in Budapest in 1974. About 500 million have been sold.",
    },
  ],

  stamp: {
    legend: 'MAGYARORSZÁG',
    port: 'BUDAPEST LISZT FERENC',
    shape: 'rectangle',
    ink: '#2f6f3e',
  },
};

export const cities: City[] = [
  {
    id: 'budapest',
    countryId: 'hungary',
    order: 1,
    emoji: '♨️',

    name: {
      el: 'Βουδαπέστη',
      en: 'Budapest',
    },

    intro: {
      el:
        'Η Βουδαπέστη ήταν κάποτε δύο πόλεις: η Βούδα στους λόφους και η Πέστη στην ' +
        'πεδιάδα, και ο Δούναβης ανάμεσά τους. Τις ένωσε μια γέφυρα με αλυσίδες, επειδή ' +
        'ένας άνθρωπος κουράστηκε να περιμένει τον πάγο. Κάτω από τα πόδια σου το νερό ' +
        'είναι ζεστό και ανεβαίνει μόνο του από ένα χιλιόμετρο βάθος, γεμίζοντας λουτρά ' +
        'όπου ο κόσμος κολυμπάει ακόμα και μέσα στο χιόνι. Και στην κορυφή του λόφου ένα ' +
        'κάτασπρο κάστρο δεν φύλαξε ποτέ κανέναν: το έχτισαν μόνο για τη θέα.',
      en:
        'Budapest was once two towns: Buda up on the hills and Pest down on the flat, with ' +
        'the Danube between them. A bridge hung from iron chains joined them, because one ' +
        'man got tired of waiting for the ice. Under your feet the water is hot and climbs ' +
        'up by itself from a kilometre down, filling baths where people swim even while it ' +
        'snows. And on top of the hill a snow-white castle never guarded anybody: it was ' +
        'built purely for the view.',
    },

    /** Copied from `data/world/coords/budapest.json`, which took it from Wikidata Q1781. */
    centre: { lat: 47.49833, lng: 19.04083 },

    map: {
      src: '/images/world/maps/budapest.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Βουδαπέστης, με τον Δούναβη, το νησί του, τον λόφο του κάστρου και το μεγάλο πάρκο.',
        en: 'A stylised map of Budapest, with the Danube, its island, the castle hill and the great park.',
      },
      width: 1000,
      height: 1025,
      /**
       * Wide enough to hold the Hajós pool on Margit-sziget in the north and the market
       * hall and Gellért Hill in the south, with the Városliget in the eastern corner.
       * The two spans are almost equal on the ground — about 4,780 m north to south and
       * 4,660 m east to west — which is where the 1000 × 1025 artwork comes from.
       */
      bounds: { north: 47.525, south: 47.482, east: 19.09, west: 19.028 },
    },
  },
];
