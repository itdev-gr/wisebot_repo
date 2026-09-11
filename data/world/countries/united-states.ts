/**
 * WiseBot World — United States.
 *
 * Country only for now; the cities arrive later through the pipeline, so `cities` is
 * deliberately empty. Facts checked against the English Wikipedia articles for Denali,
 * the Grand Canyon, the flag of the United States, Yellowstone National Park and the
 * list of US national parks (September 2026). `stamp` is not localised, on purpose —
 * see greece.ts.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'united-states',
  code: 'US',
  flag: '🇺🇸',
  continent: 'americas',
  order: 7,

  name: {
    el: 'Ηνωμένες Πολιτείες',
    en: 'United States',
  },

  intro: {
    el:
      'Οι Ηνωμένες Πολιτείες είναι μια χώρα τόσο πλατιά που, όταν ξημερώνει στη Νέα Υόρκη, ' +
      'στη Χαβάη είναι ακόμα βαθιά νύχτα. Έχει πενήντα πολιτείες, και η καθεμιά μοιάζει ' +
      'λίγο με ξεχωριστή χώρα: ερήμους με κάκτους, βουνά με χιόνι, βάλτους με αλιγάτορες ' +
      'και δάση με δέντρα ψηλότερα από πολυκατοικίες. Στην Καλιφόρνια στέκεται το ' +
      'μεγαλύτερο δέντρο του κόσμου, και στο Γέλοουστοουν ένας θερμοπίδακας τινάζει ' +
      'καυτό νερό στον ουρανό περίπου κάθε ενενήντα λεπτά. Εδώ χτίστηκε ο πύραυλος που ' +
      'πήγε τους πρώτους ανθρώπους στη Σελήνη, κι εδώ άνοιξε το πρώτο πάρκο της Ντίσνεϊ.',
    en:
      'The United States is so wide that when the sun comes up in New York, it is still ' +
      'the middle of the night in Hawaii. It has fifty states, and each feels like a ' +
      'country of its own: deserts full of cactuses, snowy mountains, swamps with ' +
      'alligators, and forests of trees taller than blocks of flats. The biggest tree on ' +
      'Earth grows in California, and in Yellowstone a geyser throws boiling water into ' +
      'the sky roughly every ninety minutes. The rocket that carried the first people to ' +
      'the Moon was built here, and so was the first Disney park.',
  },

  facts: [
    {
      el: 'Το Ντενάλι στην Αλάσκα, το ψηλότερο βουνό της Βόρειας Αμερικής, φτάνει τα 6.190 μέτρα.',
      en: 'Denali in Alaska, the highest mountain in North America, reaches 6,190 metres.',
    },
    {
      el: 'Το Γκραν Κάνιον έχει μήκος 446 χιλιόμετρα και βάθος μέχρι 1.857 μέτρα.',
      en: 'The Grand Canyon is 446 kilometres long and up to 1,857 metres deep.',
    },
    {
      el: 'Η σημαία έχει 50 αστέρια, ένα για κάθε πολιτεία, και 13 ρίγες, μία για κάθε μία από τις πρώτες αποικίες.',
      en: 'The flag has 50 stars, one for each state, and 13 stripes, one for each of the first colonies.',
    },
    {
      el: 'Το Γέλοουστοουν έγινε το 1872 το πρώτο εθνικό πάρκο του κόσμου. Σήμερα η χώρα έχει 63.',
      en: 'Yellowstone became the world’s first national park in 1872. Today the country has 63 of them.',
    },
  ],

  stamp: {
    legend: 'U.S. IMMIGRATION',
    port: 'NEW YORK, NY',
    shape: 'rectangle',
    ink: '#2f4f9e',
  },
};

export const cities: City[] = [];
