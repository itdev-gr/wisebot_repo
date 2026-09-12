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

export const cities: City[] = [];
