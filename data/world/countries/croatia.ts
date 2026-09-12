/**
 * WiseBot World — Croatia.
 *
 * Same shape as `greece.ts`: the country plus the metadata of its cities. The cities are
 * still empty; they land through the pipeline. Facts checked against the Wikipedia
 * articles for Geography of Croatia, List of islands of Croatia, Dinara, Plitvice Lakes
 * National Park, Walls of Dubrovnik and Cravat (early), 12 September 2026.
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

export const cities: City[] = [];
