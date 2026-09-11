/**
 * WiseBot World — China.
 *
 * Same shape as `greece.ts`. Cities arrive later through the pipeline, so `cities` is
 * empty for now. Facts checked on 12 September 2026 against Wikipedia: Great Wall of
 * China (21,196 km in the 2012 national survey), Mount Everest (8,848.86 m, 2020 joint
 * China–Nepal measurement, on the China–Nepal border), Terracotta Army (more than 8,000
 * soldiers, found by farmers digging a well in 1974) and Giant panda (1,864 in the wild
 * in the fourth national survey, 99% bamboo, 9–14 kg a day).
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'china',
  code: 'CN',
  flag: '🇨🇳',
  continent: 'asia',
  order: 16,

  name: {
    el: 'Κίνα',
    en: 'China',
  },

  intro: {
    el:
      'Η Κίνα είναι μια χώρα τόσο μεγάλη, που έχει ερήμους, ζούγκλες, ορυζώνες και το ' +
      'ψηλότερο βουνό του κόσμου στα σύνορά της. Πάνω από λόφους και γκρεμούς τρέχει ένα ' +
      'τείχος που χτίζονταν επί δύο χιλιάδες χρόνια, και σε ένα χωράφι κοντά στην Σιάν ' +
      'στέκεται ολόκληρος πήλινος στρατός, θαμμένος για να φυλάει έναν αυτοκράτορα. Στα ' +
      'δάση με τα μπαμπού ζουν τα πάντα, που τρώνε σχεδόν όλη μέρα. Εδώ εφευρέθηκαν το ' +
      'χαρτί, ο χαρταετός και η πυξίδα. Και τα παιδιά μαθαίνουν γράμματα που δεν είναι ' +
      'γράμματα αλλά μικρές εικόνες, χιλιάδες από αυτές.',
    en:
      'China is a country so big that it has deserts, jungles, rice terraces and the ' +
      'highest mountain on Earth along its border. A wall that took two thousand years to ' +
      'build climbs over hills and cliffs, and in a field near Xi\'an a whole army made of ' +
      'clay stands underground, buried to guard an emperor. In the bamboo forests live ' +
      'the pandas, which spend most of the day eating. Paper, the kite and the compass ' +
      'were all invented here. And the children learn characters that are not letters at ' +
      'all but tiny pictures, thousands of them.',
  },

  facts: [
    {
      el: 'Το Σινικό Τείχος, με όλα τα κομμάτια του, μετρήθηκε το 2012 και βγήκε 21.196 χιλιόμετρα.',
      en: 'The Great Wall, counting all its pieces, was measured in 2012 and came to 21,196 kilometres.',
    },
    {
      el: 'Το Έβερεστ, στα σύνορα Κίνας και Νεπάλ, είναι το ψηλότερο βουνό του κόσμου: 8.848,86 μέτρα.',
      en: 'Everest, on the border of China and Nepal, is the highest mountain in the world: 8,848.86 metres.',
    },
    {
      el: 'Ο Πήλινος Στρατός έχει πάνω από 8.000 στρατιώτες. Τον βρήκαν αγρότες το 1974 ενώ έσκαβαν πηγάδι.',
      en: 'The Terracotta Army has more than 8,000 soldiers. Farmers found it in 1974 while digging a well.',
    },
    {
      el: 'Στη φύση ζουν περίπου 1.864 πάντα. Καθένα τρώει 9 με 14 κιλά μπαμπού την ημέρα.',
      en: 'About 1,864 pandas live in the wild. Each one eats 9 to 14 kilograms of bamboo a day.',
    },
  ],

  stamp: {
    legend: '中国边检 · CHINA',
    port: '北京 BEIJING',
    shape: 'oval',
    ink: '#5a3d9a',
  },
};

export const cities: City[] = [];
