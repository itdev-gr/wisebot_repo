/**
 * WiseBot World — Mexico.
 *
 * Same shape as `greece.ts`: the country plus the metadata for its cities. The cities
 * arrive later through the pipeline, so `cities` is empty for now and the country stands
 * on its own. Facts checked against the English Wikipedia articles for Pico de Orizaba,
 * El Castillo (Chichen Itza), the list of World Heritage Sites in Mexico and monarch
 * butterfly migration, September 2026. The stamp is inked in Spanish, as a real one is.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'mexico',
  code: 'MX',
  flag: '🇲🇽',
  continent: 'americas',
  order: 13,

  name: {
    el: 'Μεξικό',
    en: 'Mexico',
  },

  intro: {
    el:
      'Το Μεξικό είναι μια χώρα που χτίστηκε πάνω σε άλλες χώρες. Η πρωτεύουσά του ' +
      'στέκεται εκεί όπου κάποτε ήταν μια λίμνη με μια πόλη στη μέση της, και όταν ' +
      'σκάβουν για το μετρό βρίσκουν ναούς. Στη ζούγκλα του νότου υψώνονται πυραμίδες ' +
      'με σκαλοπάτια που μετρούν τις μέρες του χρόνου. Κάθε φθινόπωρο εκατομμύρια ' +
      'πεταλούδες φτάνουν εδώ από τον Καναδά και γεμίζουν ολόκληρα δάση. Και το ' +
      'κακάο, οι ντομάτες, το καλαμπόκι και οι τσίλι πιπεριές ταξίδεψαν από εδώ σε ' +
      'όλο τον κόσμο, οπότε λίγο Μεξικό υπάρχει σε κάθε κουζίνα.',
    en:
      'Mexico is a country built on top of other countries. Its capital stands where a ' +
      'lake once lay with a city in the middle of it, and when the metro is dug out, ' +
      'temples turn up. In the jungle of the south, pyramids rise with staircases that ' +
      'count the days of the year. Every autumn millions of butterflies arrive from ' +
      'Canada and fill whole forests. Chocolate, tomatoes, corn and chilli peppers all ' +
      'set out from here to the rest of the world, so there is a little Mexico in every ' +
      'kitchen.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό του, το Πίκο ντε Οριζάμπα, είναι ηφαίστειο και φτάνει τα 5.636 μέτρα.',
      en: 'Its highest mountain, Pico de Orizaba, is a volcano and reaches 5,636 metres.',
    },
    {
      el: 'Η πυραμίδα της Τσιτσέν Ιτσά έχει 91 σκαλοπάτια σε κάθε πλευρά. Με την κορυφή, βγαίνουν 365, όσες οι μέρες του χρόνου.',
      en: 'The pyramid at Chichen Itza has 91 steps on each side. Add the top and you get 365, one for every day of the year.',
    },
    {
      el: 'Έχει 36 Μνημεία Παγκόσμιας Κληρονομιάς της UNESCO, περισσότερα από κάθε άλλη χώρα της Αμερικής.',
      en: 'It has 36 UNESCO World Heritage Sites, more than any other country in the Americas.',
    },
  ],

  stamp: {
    legend: 'ESTADOS UNIDOS MEXICANOS · INM',
    port: 'CIUDAD DE MÉXICO',
    shape: 'rectangle',
    ink: '#1f7a4d',
  },
};

export const cities: City[] = [];
