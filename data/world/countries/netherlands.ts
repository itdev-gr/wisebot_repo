/**
 * WiseBot World — Netherlands.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata for each of its cities.
 * Cities are empty for now and arrive through the pipeline.
 *
 * Facts checked against Wikipedia (Netherlands, Geography of the Netherlands, Afsluitdijk,
 * Cycling in the Netherlands) and the Dutch government's bicycle page (government.nl):
 * 26 % of the land below sea level, Vaalserberg 322.7 m, the Afsluitdijk 32 km (1932),
 * about 23 million bicycles for about 18 million people, 35,000 km of cycle paths.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'netherlands',
  code: 'NL',
  flag: '🇳🇱',
  continent: 'europe',
  order: 11,

  name: {
    el: 'Ολλανδία',
    en: 'Netherlands',
  },

  intro: {
    el:
      'Η Ολλανδία είναι μια χώρα που την έφτιαξαν οι άνθρωποι όσο και η φύση. Το ένα τέταρτο ' +
      'της βρίσκεται κάτω από τη στάθμη της θάλασσας, και για να μείνει στεγνό χρειάζονται ' +
      'αναχώματα, αντλίες και ανεμόμυλοι που για αιώνες τραβούσαν το νερό έξω. Εδώ οι ' +
      'άνθρωποι πηγαίνουν παντού με ποδήλατο: στο σχολείο, στη δουλειά, στην αγορά, ακόμα ' +
      'και με βροχή. Την άνοιξη ολόκληρα χωράφια γίνονται ριγέ από τουλίπες, κόκκινες, ' +
      'κίτρινες και μοβ, σαν κάποιος να ζωγράφισε τη γη με χάρακα. Και πάντα, κάπου κοντά, ' +
      'υπάρχει ένα κανάλι.',
    en:
      'The Netherlands is a country that people built almost as much as nature did. A ' +
      'quarter of it lies below the level of the sea, and it stays dry only because of dykes, ' +
      'pumps and the windmills that spent centuries hauling the water out. Everyone here ' +
      'goes everywhere by bicycle: to school, to work, to the market, even in the rain. In ' +
      'spring whole fields turn into stripes of tulips, red, yellow and purple, as if ' +
      'someone had painted the ground with a ruler. And wherever you stand, there is a ' +
      'canal not far away.',
  },

  facts: [
    {
      el: 'Περίπου το 26% της χώρας βρίσκεται κάτω από τη στάθμη της θάλασσας. Το χαμηλότερο σημείο της είναι 7 μέτρα κάτω από αυτήν.',
      en: 'About 26% of the country lies below sea level. Its lowest point is 7 metres under it.',
    },
    {
      el: 'Το ψηλότερο «βουνό» της ηπειρωτικής Ολλανδίας, το Φάαλσερμπεργκ, φτάνει μόλις τα 323 μέτρα.',
      en: 'The highest "mountain" on the Dutch mainland, the Vaalserberg, reaches only 323 metres.',
    },
    {
      el: 'Έχει περισσότερα ποδήλατα από ανθρώπους: περίπου 23 εκατομμύρια ποδήλατα για 18 εκατομμύρια κατοίκους, και 35.000 χιλιόμετρα ποδηλατόδρομων.',
      en: 'It has more bicycles than people: about 23 million bikes for 18 million residents, and 35,000 kilometres of cycle paths.',
    },
    {
      el: 'Το 1932 ένα φράγμα 32 χιλιομέτρων, το Άφσλαουτντεϊκ, έκλεισε έναν ολόκληρο κόλπο της θάλασσας και τον έκανε λίμνη με γλυκό νερό.',
      en: 'In 1932 a dam 32 kilometres long, the Afsluitdijk, closed off a whole bay of the sea and turned it into a freshwater lake.',
    },
  ],

  stamp: {
    legend: 'KONINKRIJK DER NEDERLANDEN',
    port: 'AMSTERDAM SCHIPHOL',
    shape: 'rectangle',
    ink: '#3d3a8c',
  },
};

export const cities: City[] = [];
