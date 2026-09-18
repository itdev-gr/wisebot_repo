/**
 * WiseBot World — Croatia.
 *
 * Same shape as `greece.ts`: the country plus the metadata of its cities. Facts checked
 * against the Wikipedia articles for Geography of Croatia, List of islands of Croatia,
 * Dinara, Plitvice Lakes National Park, Walls of Dubrovnik and Cravat (early),
 * 12 September 2026.
 *
 * Dubrovnik landed on 14 September 2026. Its `centre` is copied from
 * `data/world/coords/dubrovnik.json`, which is the resolver's echo of the seed's centre:
 * Wikidata's point for the walled Old City (Q910661), not for the municipality (Q1722),
 * whose own point sits out in Lapad two kilometres from every place in the city file.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'croatia',
  code: 'HR',
  flag: '🇭🇷',
  continent: 'europe',
  order: 19,

  name: {
    el: 'Κροατία',
    en: 'Croatia',
  },

  intro: {
    el:
      'Η Κροατία είναι μια χώρα με σχήμα μπούμερανγκ: το ένα της χέρι απλώνεται πάνω από ' +
      'πεδιάδες και ποτάμια, το άλλο κατεβαίνει την Αδριατική δίπλα σε πάνω από χίλια ' +
      'νησιά. Στη μέση της, δεκαέξι λίμνες χύνονται η μία μέσα στην άλλη με καταρράκτες ' +
      'που τους περπατάς από ξύλινες γέφυρες. Στο Ντουμπρόβνικ μπορείς να κάνεις τον ' +
      'γύρο μιας ολόκληρης πόλης περπατώντας πάνω στα τείχη της. Και κάθε φορά που ' +
      'κάποιος στον κόσμο φοράει γραβάτα, φοράει κάτι που ξεκίνησε από τους Κροάτες ' +
      'στρατιώτες πριν από τετρακόσια χρόνια.',
    en:
      'Croatia is shaped like a boomerang. One arm stretches inland over plains and ' +
      'rivers; the other runs down the Adriatic past more than a thousand islands. In ' +
      'the middle of the country, sixteen lakes spill one into the next over waterfalls ' +
      'that you cross on wooden walkways. In Dubrovnik you can walk all the way around ' +
      'a whole town on top of its walls, with the roofs on one side and the sea on the ' +
      'other. And whenever anyone anywhere puts on a necktie, they are wearing something ' +
      'Croatian soldiers started four hundred years ago.',
  },

  facts: [
    {
      el: 'Έχει 1.246 νησιά, νησίδες και βράχους, αλλά άνθρωποι μένουν μόνιμα μόνο σε 47 από αυτά.',
      en: 'It has 1,246 islands, islets and rocks, but people live all year round on only 47 of them.',
    },
    {
      el: 'Το ψηλότερο σημείο της, στο βουνό Ντινάρα, φτάνει τα 1.831 μέτρα.',
      en: 'Its highest point, on the mountain Dinara, reaches 1,831 metres.',
    },
    {
      el: 'Οι λίμνες Πλίτβιτσε είναι δεκαέξι, η μία πάνω από την άλλη, και έγιναν εθνικό πάρκο το 1949.',
      en: 'The Plitvice Lakes are sixteen lakes stacked one above the other, and became a national park in 1949.',
    },
    {
      el: 'Τα τείχη του Ντουμπρόβνικ έχουν μήκος περίπου 1.940 μέτρα και φτάνουν σε ύψος τα 25 μέτρα.',
      en: 'The walls of Dubrovnik run for about 1,940 metres and rise up to 25 metres high.',
    },
  ],

  stamp: {
    legend: 'REPUBLIKA HRVATSKA',
    port: 'DUBROVNIK',
    shape: 'oval',
    ink: '#3b3f9e',
  },
};

export const cities: City[] = [
  {
    id: 'dubrovnik',
    countryId: 'croatia',
    order: 1,
    emoji: '🏰',

    name: {
      el: 'Ντουμπρόβνικ',
      en: 'Dubrovnik',
    },

    intro: {
      el:
        'Το Ντουμπρόβνικ είναι μια ολόκληρη πόλη μέσα σε ένα τείχος, και το τείχος το ' +
        'περπατάς. Σχεδόν δύο χιλιόμετρα πέτρα, σε ύψος έως είκοσι πέντε μέτρων, με τις ' +
        'πορτοκαλί στέγες από τη μία μεριά και την Αδριατική από την άλλη. Για ' +
        'εκατοντάδες χρόνια λεγόταν Ραγούζα και ήταν μια μικρή δημοκρατία που έμεινε ' +
        'ελεύθερη περισσότερο με εμπόριο και προσεκτικές συμφωνίες παρά με στρατό. Ο κεντρικός ' +
        'της δρόμος ήταν κάποτε θάλασσα, και το φαρμακείο της ανοίγει κάθε πρωί από ' +
        'το 1317.',
      en:
        'Dubrovnik is a whole town inside one wall, and you can walk the wall. Almost two ' +
        'kilometres of stone, in places twenty-five metres high, with orange roofs on one ' +
        'side and the Adriatic on the other. For hundreds of years it was called Ragusa, a ' +
        'small republic that stayed free more through trade and careful agreements than ' +
        'through armies. Its main street used to be the sea, and its pharmacy has ' +
        'opened every morning since 1317.',
    },

    /** Copied from `data/world/coords/dubrovnik.json`. */
    centre: { lat: 42.6409, lng: 18.1091 },

    map: {
      src: '/images/world/maps/dubrovnik.svg',
      alt: {
        el:
          'Στυλιζαρισμένος χάρτης του Ντουμπρόβνικ, με τη ράχη του Srđ, την τειχισμένη ' +
          'παλιά πόλη στη θάλασσα και το νησί Lokrum.',
        en:
          'A stylised map of Dubrovnik, with the ridge of Srđ, the walled old town on the ' +
          'sea and the island of Lokrum.',
      },
      width: 940,
      height: 1000,
      /**
       * Wide enough to hold the summit cross on Srđ at the top and Fort Royal on Lokrum
       * at the bottom, which are the two furthest places in the city file, while leaving
       * the walled town its own space in the middle. About 2.46 km by 2.61 km, which is
       * the artwork's 940 × 1000 ratio, so nothing stretches.
       */
      bounds: { north: 42.6515, south: 42.628, east: 18.126, west: 18.096 },
    },
  },
];
