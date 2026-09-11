/**
 * WiseBot World — Italy.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata for each of its cities.
 * `cities` is empty for now; the city entries arrive through the seed pipeline.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia API extracts for
 * "Mont Blanc", "Vatican City", "Regions of Italy" and "Italy", and the page
 * "List of World Heritage Sites in Italy" (62 sites, the most of any country).
 *
 * `de`, `fr`, `es` and `it` land in the second pass. `el` and `en` are mandatory.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'italy',
  code: 'IT',
  flag: '🇮🇹',
  continent: 'europe',
  order: 4,

  name: {
    el: 'Ιταλία',
    en: 'Italy',
  },

  intro: {
    el:
      'Η Ιταλία είναι μια χώρα σε σχήμα μπότας, που μοιάζει να κλωτσάει ένα νησί μέσα στη ' +
      'Μεσόγειο. Στην κορυφή της έχει τις χιονισμένες Άλπεις, στο τέλος της ένα ηφαίστειο ' +
      'που καπνίζει ακόμα, και ανάμεσά τους πόλεις που η καθεμιά μοιάζει με άλλη εποχή: η ' +
      'Ρώμη με τα ρωμαϊκά της ερείπια, η Βενετία με κανάλια αντί για δρόμους, η Φλωρεντία ' +
      'με τους ζωγράφους της. Οι Ρωμαίοι έχτισαν δρόμους και υδραγωγεία που στέκονται ' +
      'ακόμα, και οι Ιταλοί αργότερα έφτιαξαν την πίτσα και το πιάνο. Όπου κι αν σταθείς, ' +
      'κάτι παλιό και κάτι νόστιμο είναι πάντα κοντά.',
    en:
      'Italy is shaped like a boot, and the boot looks as if it is kicking an island out ' +
      'into the Mediterranean. Snowy Alps sit at the top, a volcano that still smokes sits ' +
      'near the bottom, and in between are cities that each feel like a different ' +
      'century: Rome with its Roman ruins, Venice with canals instead of streets, Florence ' +
      'with its painters. The Romans built roads and aqueducts that are still standing, ' +
      'and Italians later invented pizza and the piano. Wherever you stop, something old ' +
      'and something delicious is never far away.',
  },

  facts: [
    {
      el: 'Έχει 62 Μνημεία Παγκόσμιας Κληρονομιάς της UNESCO, περισσότερα από κάθε άλλη χώρα στον κόσμο.',
      en: 'It has 62 UNESCO World Heritage Sites, more than any other country in the world.',
    },
    {
      el: 'Μέσα στη Ρώμη βρίσκεται το Βατικανό, το μικρότερο κράτος του κόσμου: μόλις 44 εκτάρια, όσο περίπου 60 γήπεδα ποδοσφαίρου.',
      en: 'Inside Rome sits Vatican City, the smallest country in the world: just 44 hectares, about the size of 60 football pitches.',
    },
    {
      el: 'Το ψηλότερο βουνό της, το Μον Μπλαν, φτάνει τα 4.807 μέτρα και το μοιράζεται με τη Γαλλία.',
      en: 'Its highest mountain, Mont Blanc, reaches 4,807 metres and is shared with France.',
    },
    {
      el: 'Χωρίζεται σε 20 περιφέρειες, και η καθεμιά έχει τις δικές της συνταγές και τη δική της προφορά.',
      en: 'It is divided into 20 regions, and each one has its own recipes and its own accent.',
    },
  ],

  stamp: {
    legend: 'ITALIA · POLIZIA DI FRONTIERA',
    port: 'ROMA FIUMICINO',
    shape: 'rectangle',
    ink: '#8b2346',
  },
};

export const cities: City[] = [];
