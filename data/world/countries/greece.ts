/**
 * WiseBot World — Greece.
 *
 * One file per country. It carries the country itself and the metadata for each of its
 * cities: the parts the city list must render before any content chunk is downloaded.
 * The heavy per-city content stays in `data/world/cities/<city>.ts`, which is imported
 * on demand.
 *
 * Two things are deliberate here:
 *
 *  1. `stamp` is not localised, and that is the point. A real passport stamp is inked in
 *     the language of the country that issued it, so a Greek child collects ΕΛΛΑΣ, then
 *     ESPAÑA, then مصر. Translating it would throw away the whole object.
 *  2. `centre` is copied from `scripts/world/seeds/athens.json`, the same value the
 *     coordinate resolver audits every place against. It is not a second opinion about
 *     where Athens is; it is the same one.
 *
 * `de`, `fr`, `es` and `it` land in the second pass, per country. `el` and `en` are
 * mandatory and complete.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'greece',
  code: 'GR',
  flag: '🇬🇷',
  continent: 'europe',
  order: 1,

  name: {
    el: 'Ελλάδα',
    en: 'Greece',
  },

  intro: {
    el:
      'Η Ελλάδα είναι μια χώρα φτιαγμένη από βουνά και θάλασσα. Έχει περίπου έξι χιλιάδες ' +
      'νησιά και βραχονησίδες, αλλά άνθρωποι μένουν μόνο στα διακόσια περίπου. Εδώ ' +
      'γεννήθηκαν οι Ολυμπιακοί Αγώνες, το θέατρο και η λέξη «δημοκρατία». Ό,τι κι αν ' +
      'σκάψεις, κάτι βρίσκεις: κάτω από τα σπίτια της Αθήνας περνούν αρχαίοι δρόμοι, και ' +
      'δίπλα σε ένα σύγχρονο λιμάνι στέκεται ένας ναός δυόμισι χιλιάδων χρόνων. Είναι μια ' +
      'χώρα που δεν πέταξε ποτέ τίποτα από το παρελθόν της.',
    en:
      'Greece is a country built out of mountains and sea. It has around six thousand ' +
      'islands and rocky islets, and people live on only about two hundred of them. The ' +
      'Olympic Games began here, and so did theatre, and so did the word "democracy". Dig ' +
      'almost anywhere and you hit something: ancient streets run under the flats of ' +
      'Athens, and a temple two and a half thousand years old stands next to a working ' +
      'port. This is a country that never threw any of its past away.',
  },

  facts: [
    {
      el: 'Έχει τη μεγαλύτερη ακτογραμμή της Μεσογείου, περίπου 13.600 χιλιόμετρα.',
      en: 'It has the longest coastline in the Mediterranean, about 13,600 kilometres.',
    },
    {
      el: 'Ο Όλυμπος, το ψηλότερο βουνό της, φτάνει τα 2.917 μέτρα. Στους μύθους ήταν το σπίτι των θεών.',
      en: 'Mount Olympus, its highest peak, reaches 2,917 metres. In the myths it was the home of the gods.',
    },
    {
      el: 'Τα ελληνικά γράφονται με το ίδιο αλφάβητο εδώ και περίπου 2.800 χρόνια.',
      en: 'Greek has been written with the same alphabet for about 2,800 years.',
    },
  ],

  stamp: {
    legend: 'ΕΛΛΑΣ · HELLAS',
    port: 'ΑΘΗΝΑΙ ATHINAI',
    shape: 'circle',
    ink: '#1b4f9c',
  },
};

export const cities: City[] = [
  {
    id: 'athens',
    countryId: 'greece',
    order: 1,
    emoji: '🏛️',

    name: {
      el: 'Αθήνα',
      en: 'Athens',
    },

    intro: {
      el:
        'Η Αθήνα είναι μια πόλη με έναν βράχο στη μέση της. Πάνω στον βράχο στέκεται ένας ' +
        'ναός δυόμισι χιλιάδων χρόνων, και γύρω του απλώνεται μια σύγχρονη πόλη με μετρό, ' +
        'γήπεδα και λαϊκές αγορές. Οι δυο ζωές δεν χωρίζονται: το μετρό σταμάτησε για να ' +
        'σκάψουν οι αρχαιολόγοι, και τα ευρήματα εκτίθενται τώρα μέσα στους σταθμούς. Εδώ ' +
        'ψηφίστηκαν οι πρώτοι νόμοι που έγραψαν πολίτες, εδώ παίχτηκε το πρώτο θέατρο, και ' +
        'εδώ ξεκίνησαν ξανά οι Ολυμπιακοί Αγώνες το 1896.',
      en:
        'Athens is a city with a rock in the middle of it. On top of the rock stands a ' +
        'temple two and a half thousand years old, and around it spreads a modern city of ' +
        'metro lines, stadiums and street markets. The two lives are not kept apart: metro ' +
        'digging stopped so archaeologists could work, and what they found is now on show ' +
        'inside the stations. The first laws voted on by ordinary citizens were passed ' +
        'here, the first plays were staged here, and the Olympic Games started again here ' +
        'in 1896.',
    },

    /**
     * Copied from `scripts/world/seeds/athens.json`. The resolver audits every place
     * against this exact point, so the two must not drift.
     */
    centre: { lat: 37.98381, lng: 23.72754 },

    map: {
      src: '/images/world/maps/athens.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Αθήνας με τους δύο λόφους της, την Ακρόπολη και τον Λυκαβηττό.',
        en: 'A stylised map of Athens showing its two hills, the Acropolis and Lycabettus.',
      },
      width: 1000,
      height: 1110,
      /**
       * The artwork is drawn to these bounds, so pins are projected onto it rather than
       * placed by hand. Every one of the eighteen places in `cities/athens.ts` falls
       * inside them, with the Benaki Toy Museum on the south edge and the National
       * Archaeological Museum on the north.
       */
      bounds: { north: 37.995, south: 37.925, east: 23.76, west: 23.68 },
    },
  },
];
