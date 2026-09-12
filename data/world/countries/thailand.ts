/**
 * WiseBot World — Thailand.
 *
 * Same shape as `greece.ts`: the country plus the metadata for its cities. The cities
 * arrive later through the pipeline, so `cities` is empty for now.
 *
 * Facts checked on the English Wikipedia articles for Doi Inthanon (2,565 m, highest
 * mountain), Thai script (44 consonants, no spaces between words) and Bangkok (the
 * 168-letter ceremonial name and its Guinness record).
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'thailand',
  code: 'TH',
  flag: '🇹🇭',
  continent: 'asia',
  order: 15,

  name: {
    el: 'Ταϊλάνδη',
    en: 'Thailand',
  },

  intro: {
    el:
      'Η Ταϊλάνδη είναι μια χώρα όπου η ζωή γίνεται πάνω στο νερό. Στις αγορές της τα ' +
      'μαγαζιά είναι βάρκες, οι πωλητές κωπηλατούν ανάμεσα στους πελάτες, και το φαγητό ' +
      'μαγειρεύεται μέσα στη βάρκα. Στον βορρά τα βουνά είναι σκεπασμένα με ομίχλη και ' +
      'δάσος, στον νότο η θάλασσα έχει νησιά που μοιάζουν με πέτρινους πύργους βγαλμένους ' +
      'από το νερό. Οι ναοί της λάμπουν με χρυσό και σπασμένα γυαλιά που γυαλίζουν στον ' +
      'ήλιο. Και κάθε Απρίλιο, στην πρωτοχρονιά τους, ολόκληρη η χώρα βγαίνει στους ' +
      'δρόμους και κάνει τον μεγαλύτερο πόλεμο με νερό στον κόσμο.',
    en:
      'Thailand is a country where a lot of life happens on the water. At its floating ' +
      'markets the shops are boats, the sellers paddle between their customers, and lunch ' +
      'is cooked over a stove in the bottom of a canoe. In the north the mountains sit ' +
      'under mist and forest; in the south the sea is dotted with islands that rise out ' +
      'of the water like stone towers. Its temples glitter with gold leaf and thousands ' +
      'of tiny mirrors. And every April, for the Thai new year, the whole country steps ' +
      'outside and holds the biggest water fight on earth.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Ντόι Ιντανόν, φτάνει τα 2.565 μέτρα.',
      en: 'Its highest mountain, Doi Inthanon, reaches 2,565 metres.',
    },
    {
      el: 'Το ταϊλανδικό αλφάβητο έχει 44 σύμφωνα, και οι λέξεις γράφονται χωρίς κενά ανάμεσά τους.',
      en: 'The Thai alphabet has 44 consonants, and words are written with no spaces between them.',
    },
    {
      el: 'Το πλήρες όνομα της Μπανγκόκ έχει 168 γράμματα. Είναι το μακρύτερο όνομα πόλης στον κόσμο.',
      en: 'The full name of Bangkok is 168 letters long. It is the longest place name in the world.',
    },
  ],

  stamp: {
    legend: 'ราชอาณาจักรไทย · THAILAND',
    port: 'กรุงเทพฯ BANGKOK',
    shape: 'oval',
    ink: '#4b3f9e',
  },
};

export const cities: City[] = [];
