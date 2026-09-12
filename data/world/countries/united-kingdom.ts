/**
 * WiseBot World — United Kingdom.
 *
 * Same shape as `greece.ts`. Cities arrive later through the pipeline, so `cities` is
 * empty for now. Facts checked against the Wikipedia API on 12 September 2026:
 * Ben Nevis (1,345 m), London Underground (opened 1863, 272 stations), Big Ben (the
 * Great Bell weighs 13.7 tonnes, 334 steps to the belfry) and Stonehenge (sarsen circle
 * raised about 2600–2400 BC, largest stones around 25 tons). The stamp copies the
 * modern "UK BORDER" entry stamp: a rectangle, port of entry on the second line.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'united-kingdom',
  code: 'GB',
  flag: '🇬🇧',
  continent: 'europe',
  order: 6,

  name: {
    el: 'Ηνωμένο Βασίλειο',
    en: 'United Kingdom',
  },

  intro: {
    el:
      'Το Ηνωμένο Βασίλειο είναι τέσσερις χώρες σε ένα νησί και λίγο ακόμα: Αγγλία, ' +
      'Σκωτία, Ουαλία και Βόρεια Ιρλανδία. Εδώ τα αυτοκίνητα οδηγούν αριστερά, τα ' +
      'λεωφορεία είναι κόκκινα και διώροφα, και το τρένο μπορεί να περάσει κάτω από ' +
      'τη θάλασσα για να βγει στη Γαλλία. Στο Λονδίνο μπορείς να δεις δεινόσαυρους, ' +
      'μούμιες και ένα ρολόι που ακούγεται σε όλη την πόλη. Πιο μακριά, κάστρα ' +
      'στέκονται πάνω σε βράχους, λίμνες κρύβουν θρύλους, και πέτρες στημένες πριν ' +
      'από χιλιάδες χρόνια περιμένουν ακόμα κάποιον να εξηγήσει γιατί.',
    en:
      'The United Kingdom is four countries sharing one island and a bit more: England, ' +
      'Scotland, Wales and Northern Ireland. Cars drive on the left here, the buses are ' +
      'red with an upstairs, and a train can run under the sea and come out in France. ' +
      'In London you can meet dinosaurs, mummies and a clock the whole city can hear. ' +
      'Further out, castles stand on cliffs, deep lakes keep their legends, and stones ' +
      'raised thousands of years ago are still waiting for someone to explain why.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό του, το Μπεν Νέβις στη Σκωτία, φτάνει τα 1.345 μέτρα.',
      en: 'Its highest mountain, Ben Nevis in Scotland, reaches 1,345 metres.',
    },
    {
      el: 'Το μετρό του Λονδίνου είναι το παλαιότερο στον κόσμο: άνοιξε το 1863 και σήμερα έχει 272 σταθμούς.',
      en: 'The London Underground is the oldest in the world: it opened in 1863 and today has 272 stations.',
    },
    {
      el: 'Η καμπάνα του Μπιγκ Μπεν ζυγίζει 13,7 τόνους, και για να φτάσεις κοντά της ανεβαίνεις 334 σκαλιά.',
      en: 'The bell of Big Ben weighs 13.7 tonnes, and it takes 334 steps to climb up to it.',
    },
    {
      el: 'Οι μεγάλες πέτρες του Στόουνχεντζ στήθηκαν πριν από περίπου 4.500 χρόνια. Κάθε μία ζυγίζει γύρω στους 25 τόνους.',
      en: 'The big stones of Stonehenge were raised about 4,500 years ago. Each one weighs around 25 tons.',
    },
  ],

  stamp: {
    legend: 'UK BORDER · UNITED KINGDOM',
    port: 'LONDON HEATHROW',
    shape: 'rectangle',
    ink: '#8b1e3f',
  },
};

export const cities: City[] = [];
