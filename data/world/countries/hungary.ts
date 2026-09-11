/**
 * WiseBot World — Hungary.
 *
 * Same shape as `greece.ts`. Cities arrive later through the pipeline, so `cities` is
 * empty for now. Numbers were checked against the English Wikipedia articles for
 * Lake Balaton, Kékes, the Hungarian Parliament Building, the Rubik's Cube and
 * Budapest (fetched September 2026). The stamp is inked in Hungarian on purpose.
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

export const cities: City[] = [];
