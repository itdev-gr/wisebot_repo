/**
 * WiseBot World — Austria.
 *
 * Same shape as `greece.ts`: the country plus the metadata of its cities. The cities are
 * still empty; they land through the pipeline. Facts checked against the Wikipedia REST
 * summaries for Großglockner, Eisriesenwelt, Tiergarten Schönbrunn and Austria, and
 * cross-checked on Wikidata (Q3388 elevation, Q40 current shared borders: eight, once the
 * Q1277557 pre-1918 entry is set aside), 12 September 2026.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'austria',
  code: 'AT',
  flag: '🇦🇹',
  continent: 'europe',
  order: 10,

  name: {
    el: 'Αυστρία',
    en: 'Austria',
  },

  intro: {
    el:
      'Η Αυστρία είναι μια χώρα χωρίς θάλασσα, αλλά με βουνά σχεδόν παντού. Οι Άλπεις ' +
      'σκεπάζουν το μεγαλύτερο μέρος της, κι έτσι τα παιδιά εδώ μαθαίνουν σκι όπως αλλού ' +
      'μαθαίνουν ποδήλατο. Μέσα σε ένα βουνό κοντά στο Σάλτσμπουργκ κρύβεται μια σπηλιά ' +
      'από πάγο που δεν λιώνει ποτέ, ακόμα και το καλοκαίρι. Στη Βιέννη μια ρόδα του 1897 ' +
      'ανεβάζει ακόμα κόσμο πάνω από την πόλη, και ο πιο παλιός ζωολογικός κήπος του ' +
      'κόσμου ανοίγει κάθε πρωί εδώ και πάνω από διακόσια εβδομήντα χρόνια. Και ' +
      'σχεδόν σε κάθε πόλη, κάπου, κάποιος παίζει Μότσαρτ.',
    en:
      'Austria has no sea at all, but it has mountains almost everywhere. The Alps cover ' +
      'most of the country, so children here learn to ski the way children elsewhere learn ' +
      'to ride a bike. Inside a mountain near Salzburg there is a cave made of ice that ' +
      'never melts, not even in summer. In Vienna a Ferris wheel built in 1897 still lifts ' +
      'people over the rooftops, and the oldest zoo in the world has opened its gates every ' +
      'morning for more than two hundred and seventy years. And in nearly every town, ' +
      'somewhere, somebody is playing Mozart.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Γκροσγκλόκνερ, φτάνει τα 3.798 μέτρα.',
      en: 'Its highest mountain, the Grossglockner, reaches 3,798 metres.',
    },
    {
      el: 'Η Άιζριζενβελτ είναι η μεγαλύτερη σπηλιά πάγου στον κόσμο, με διαδρόμους πάνω από 42 χιλιόμετρα.',
      en: 'The Eisriesenwelt is the largest ice cave in the world, with passages running more than 42 kilometres.',
    },
    {
      el: 'Ο ζωολογικός κήπος του Σένμπρουν στη Βιέννη άνοιξε το 1752 και είναι ο παλαιότερος που λειτουργεί ακόμα.',
      en: 'Schönbrunn Zoo in Vienna opened in 1752 and is the oldest zoo still running anywhere.',
    },
    {
      el: 'Δεν έχει καθόλου θάλασσα, αλλά συνορεύει με οκτώ χώρες.',
      en: 'It has no coast at all, but it shares a border with eight countries.',
    },
  ],

  stamp: {
    legend: 'REPUBLIK ÖSTERREICH',
    port: 'WIEN',
    shape: 'rectangle',
    ink: '#b3262e',
  },
};

export const cities: City[] = [
  {
    id: 'vienna',
    countryId: 'austria',
    order: 1,
    emoji: '🎻',

    name: {
      el: 'Βιέννη',
      en: 'Vienna',
    },

    intro: {
      el:
        'Η Βιέννη είναι μια πόλη που κρατάει τα πάντα. Ο καθεδρικός της έχει έναν πύργο ' +
        'τελειωμένο και έναν μισό, γιατί κάποτε τελείωσαν τα χρήματα και κανείς δεν το ' +
        'διόρθωσε ποτέ. Στο Πράτερ γυρίζει ακόμα μια ρόδα του 1897. Δύο δίδυμα μουσεία ' +
        'κοιτάζονται από τις δύο πλευρές μιας πλατείας: στο ένα υπάρχουν δεινόσαυροι και ' +
        'μετεωρίτες, στο άλλο δώδεκα πίνακες του Μπρέγκελ. Και ένα ολόκληρο ποτάμι κυλάει ' +
        'κρυμμένο κάτω από μια αγορά ενάμισι χιλιομέτρου.',
      en:
        'Vienna is a city that keeps everything. Its cathedral has one finished tower and ' +
        'one half-built, because the money ran out once and nobody ever went back to fix ' +
        'it. A Ferris wheel from 1897 is still turning in the Prater. Two twin museums ' +
        'stare at each other across a square: one holds dinosaurs and meteorites, the other ' +
        'twelve paintings by Bruegel. And a whole river runs hidden underneath a market a ' +
        'kilometre and a half long.',
    },

    /** Copied from `data/world/coords/vienna.json`: the Innere Stadt, not Wikidata's Q1741. */
    centre: { lat: 48.20972, lng: 16.37 },

    map: {
      src: '/images/world/maps/vienna.svg',
      alt: {
        el:
          'Στυλιζαρισμένος χάρτης της Βιέννης, με τον δακτύλιο γύρω από την παλιά πόλη, το ' +
          'κανάλι του Δούναβη, το Πράτερ και το πάρκο του Σένμπρουν.',
        en:
          'A stylised map of Vienna, with the ring around the old town, the Danube canal, ' +
          'the Prater and the park of Schönbrunn.',
      },
      width: 1000,
      height: 626,
      /**
       * Wide enough to hold the zoo in the south-west corner and the Ferris wheel in the
       * north-east, which are the two extremes of the city file, with the Innere Stadt
       * centre point comfortably inside. 1000 × 626 is the true shape of that rectangle
       * on the ground at this latitude, so projected pins are not stretched.
       */
      bounds: { north: 48.222, south: 48.176, east: 16.404, west: 16.294 },
    },
  },
];
