/**
 * WiseBot World — Czechia.
 *
 * Same shape as `greece.ts`. Cities arrive later through the pipeline, so `cities` is
 * empty for now. Facts checked against the English Wikipedia articles for Sněžka,
 * Prague Castle, Charles Bridge and Robot (etymology), September 2026. The stamp is
 * inked in Czech on purpose — see the note in `greece.ts`.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'czechia',
  code: 'CZ',
  flag: '🇨🇿',
  continent: 'europe',
  order: 22,

  name: {
    el: 'Τσεχία',
    en: 'Czechia',
  },

  intro: {
    el:
      'Η Τσεχία είναι μια χώρα χωρίς θάλασσα, αλλά γεμάτη κάστρα. Πάνω από την Πράγα ' +
      'στέκεται το μεγαλύτερο αρχαίο κάστρο του κόσμου, και από κάτω μια πέτρινη γέφυρα ' +
      'με τριάντα αγάλματα περνάει τον ποταμό εδώ και εξακόσια χρόνια. Σε μια πλατεία ' +
      'ένα ρολόι από το 1410 δείχνει ακόμα πού είναι ο ήλιος και το φεγγάρι. Και κάτι ' +
      'ακόμα: η λέξη «ρομπότ» γεννήθηκε εδώ, σε ένα θεατρικό έργο του 1920. Χωρίς την ' +
      'Τσεχία, ο WiseBot δεν θα είχε καν όνομα.',
    en:
      'Czechia has no sea at all, but it makes up for it with castles. Above Prague ' +
      'stands the largest ancient castle in the world, and below it a stone bridge lined ' +
      'with thirty statues has carried people over the river for six hundred years. In one ' +
      'square a clock built in 1410 still shows where the sun and moon are. And here is the ' +
      'best part: the word "robot" was invented here, in a play from 1920. Without Czechia, ' +
      'WiseBot would not even have a name.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, η Σνιέζκα, φτάνει τα 1.603 μέτρα και η κορυφή του μοιράζεται με την Πολωνία.',
      en: 'Its highest mountain, Sněžka, reaches 1,603 metres, and its summit is shared with Poland.',
    },
    {
      el: 'Το Κάστρο της Πράγας απλώνεται σε σχεδόν 70.000 τετραγωνικά μέτρα, όσο δέκα γήπεδα ποδοσφαίρου.',
      en: 'Prague Castle spreads over almost 70,000 square metres, about ten football pitches.',
    },
    {
      el: 'Η Γέφυρα του Καρόλου έχει μήκος 516 μέτρα, 16 καμάρες και 30 αγάλματα στη σειρά.',
      en: 'Charles Bridge is 516 metres long, with 16 arches and a row of 30 statues.',
    },
    {
      el: 'Η λέξη «ρομπότ» εμφανίστηκε πρώτη φορά το 1920, στο θεατρικό έργο R.U.R. του Κάρελ Τσάπεκ.',
      en: 'The word "robot" first appeared in 1920, in the play R.U.R. by Karel Čapek.',
    },
  ],

  stamp: {
    legend: 'ČESKÁ REPUBLIKA',
    port: 'PRAHA',
    shape: 'rectangle',
    ink: '#5b3a8a',
  },
};

export const cities: City[] = [];
