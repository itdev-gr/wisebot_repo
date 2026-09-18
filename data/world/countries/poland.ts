/**
 * WiseBot World — Poland.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of its cities. The
 * cities arrive later through the pipeline, so `cities` is empty for now.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia articles on Rysy,
 * the Vistula, the Geography of Poland, Białowieża Forest, the Wieliczka Salt Mine and
 * St. Mary's Trumpet Call, and against the mine's own visitor guides for the tunnel
 * length and depth. The stamp follows the Polish entry stamp used at Kraków's airport.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'poland',
  code: 'PL',
  flag: '🇵🇱',
  continent: 'europe',
  order: 18,

  name: {
    el: 'Πολωνία',
    en: 'Poland',
  },

  intro: {
    el:
      'Η Πολωνία είναι μια χώρα που κρύβει τα πιο παράξενα πράγματά της κάτω από το ' +
      'χώμα. Κοντά στην Κρακοβία υπάρχει ένα ορυχείο αλατιού με εκκλησίες, πολυελαίους ' +
      'και αγάλματα, όλα σκαλισμένα από αλάτι, ενώ στην πόλη ένας σαλπιγκτής παίζει ' +
      'κάθε ώρα την ίδια μελωδία από τον ψηλότερο πύργο. Στα βόρεια απλώνονται ' +
      'αμμουδιές στη Βαλτική, στα νότια βουνά με λίμνες σαν καθρέφτες, και στα ' +
      'ανατολικά ένα δάσος τόσο παλιό που μέσα του ζουν ακόμα βίσωνες. Είναι μια χώρα ' +
      'επίπεδη σαν τραπέζι, που όμως δεν τελειώνει ποτέ.',
    en:
      'Poland keeps its strangest things underground. Near Kraków there is a salt mine ' +
      'with chapels, chandeliers and statues in it, every one of them carved out of salt, ' +
      'and up in the city a trumpeter plays the same short tune from the tallest tower ' +
      'every hour, in four directions. In the north there are sandy beaches on the ' +
      'Baltic, in the south mountains with lakes as still as mirrors, and in the east a ' +
      'forest so old that wild bison still walk through it. It is a country as flat as a ' +
      'table, and it never seems to end.',
  },

  facts: [
    {
      el: 'Ο Βιστούλας, το μεγαλύτερο ποτάμι της, έχει μήκος 1.047 χιλιόμετρα και περνά από την Κρακοβία και τη Βαρσοβία πριν φτάσει στη Βαλτική.',
      en: 'The Vistula, its longest river, runs for 1,047 kilometres and passes through Kraków and Warsaw on its way to the Baltic.',
    },
    {
      el: 'Το ορυχείο αλατιού της Βιελίτσκα έχει περίπου 287 χιλιόμετρα διαδρόμους και φτάνει 327 μέτρα κάτω από τη γη.',
      en: 'The Wieliczka salt mine has about 287 kilometres of tunnels and goes 327 metres below the ground.',
    },
    {
      el: 'Στο δάσος της Μπιαλοβιέζα ζουν πάνω από 800 ευρωπαϊκοί βίσωνες, το βαρύτερο άγριο ζώο της Ευρώπης.',
      en: 'More than 800 European bison, the heaviest wild land animal in Europe, live in the Białowieża Forest.',
    },
    {
      el: 'Το ψηλότερο σημείο της είναι η κορυφή Ρίσι στα Τάτρα, σχεδόν 2.500 μέτρα, ακριβώς πάνω στα σύνορα με τη Σλοβακία.',
      en: 'Its highest point is the peak of Rysy in the Tatras, almost 2,500 metres, right on the border with Slovakia.',
    },
  ],

  stamp: {
    legend: 'RZECZPOSPOLITA POLSKA',
    port: 'KRAKÓW-BALICE',
    shape: 'rectangle',
    ink: '#5b3a8a',
  },
};

export const cities: City[] = [
  {
    id: 'krakow',
    countryId: 'poland',
    order: 1,
    emoji: '🐉',

    name: {
      el: 'Κρακοβία',
      en: 'Kraków',
    },

    intro: {
      el:
        'Η Κρακοβία είναι μια πόλη που κρατάει τα παλιά της πράγματα και τα ' +
        'χρησιμοποιεί. Η μεγαλύτερη μεσαιωνική πλατεία της Ευρώπης είναι ακόμα η αγορά ' +
        'της. Από τον ψηλότερο πύργο μια σάλπιγγα παίζει κάθε ώρα και κόβεται στη μέση, ' +
        'όπως πριν από αιώνες. Κάτω από το κάστρο υπάρχει αληθινή σπηλιά και μπροστά της ' +
        'ένας μπρούντζινος δράκος που βγάζει φωτιά. Και σε ένα σκοτεινό δωμάτιο μια ' +
        'κοπέλα με μια ερμίνα γυρίζει το κεφάλι της εδώ και πεντακόσια χρόνια.',
      en:
        'Kraków is a city that keeps its old things and goes on using them. The largest ' +
        'medieval square in Europe is still its marketplace. From the tallest tower a ' +
        'trumpet plays every hour and breaks off in the middle, exactly as it did ' +
        'centuries ago. Under the castle there is a real cave, and in front of it a ' +
        'bronze dragon that breathes fire. And in one dark room a girl holding an ermine ' +
        'has been turning her head for five hundred years.',
    },

    /**
     * Copied from `data/world/coords/krakow.json`, which takes it from the seed. It is
     * Wikidata's point for the Old Town district, not for the city: the city's own
     * coordinate sits 34 m from the Cloth Hall and made the audit call that place a
     * centroid mistake. The seed's `note` records the whole reasoning.
     */
    centre: { lat: 50.0666, lng: 19.9401 },

    map: {
      src: '/images/world/maps/krakow.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Κρακοβίας, με τη Wisła, τον λόφο Wawel, την πλατεία και το πράσινο δαχτυλίδι των Planty.',
        en: 'A stylised map of Kraków, with the Wisła, Wawel hill, the main square and the green ring of the Planty.',
      },
      width: 1000,
      height: 667,
      /**
       * Wide enough to hold the Kościuszko Mound in the west, which is the furthest
       * place in the city file, and the footbridge in the south-east corner.
       */
      bounds: { north: 50.071, south: 50.043, east: 19.953, west: 19.888 },
    },
  },
];
