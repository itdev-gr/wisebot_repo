/**
 * WiseBot World — Czechia.
 *
 * Same shape as `greece.ts`. Facts checked against the English Wikipedia articles for
 * Sněžka, Prague Castle, Charles Bridge and Robot (etymology), September 2026. The stamp
 * is inked in Czech on purpose — see the note in `greece.ts`.
 *
 * Prague arrived on 13 September 2026 as the country's first city. Its `centre` is copied
 * from `data/world/coords/prague.json`, which echoes the seed, and is Wikidata's point
 * for Malá Strana rather than for Prague itself: the city's own Wikidata coordinate is
 * character for character the coordinate of the Old Town Square, which would make the
 * audit report that square as a centroid mistake. The reasoning is written out in full in
 * `scripts/world/seeds/prague.json`.
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

export const cities: City[] = [
  {
    id: 'prague',
    countryId: 'czechia',
    order: 1,
    emoji: '🕰️',

    name: {
      el: 'Πράγα',
      en: 'Prague',
    },

    intro: {
      el:
        'Η Πράγα είναι μια πόλη που δεν γκρέμισε σχεδόν τίποτα. Γι’ αυτό ένα ρολόι του ' +
        '1410 χτυπάει ακόμα κάθε ώρα, μια συναγωγή του 1270 λειτουργεί ακόμα, και ένα ' +
        'κάστρο που άρχισε ως ξύλινο οχυρό είναι σήμερα το μεγαλύτερο αρχαίο κάστρο ' +
        'του κόσμου. Στη ' +
        'μέση κυλάει ο Vltava, με μια πέτρινη γέφυρα από το 1357 και ένα νησί που το ' +
        'έφτιαξαν άνθρωποι για να αλέθουν αλεύρι. Και όταν βαρεθείς τα παλιά, στην όχθη ' +
        'στέκονται δύο πύργοι που μοιάζουν να χορεύουν.',
      en:
        'Prague is a city that pulled almost nothing down. That is why a clock from 1410 ' +
        'still strikes every hour, a synagogue from 1270 is still in use, and a castle ' +
        'that began as a wooden fort is now the largest ancient castle in the world. ' +
        'The Vltava runs ' +
        'through the middle, with a stone bridge from 1357 and an island that people made ' +
        'themselves so they could grind flour. And when you tire of old things, two towers ' +
        'on the riverbank look as though they are dancing.',
    },

    /** Copied from `data/world/coords/prague.json`. */
    centre: { lat: 50.08806, lng: 14.40389 },

    map: {
      src: '/images/world/maps/prague.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης του κέντρου της Πράγας, με τον Vltava, το νησί του, τους λόφους της δύσης και τον βράχο του νότου.',
        en: 'A stylised map of central Prague, with the Vltava, its island, the western hills and the rock in the south.',
      },
      width: 900,
      height: 1000,
      /**
       * Taller than it is wide, because the places are: the Technical Museum sits in the
       * north on Letná and Vyšehrad in the south, 3.7 km apart, while the east–west
       * spread from the Strahov stadium to the National Museum is only 3.2 km. These
       * bounds hold all seventeen with a margin on every side.
       */
      bounds: { north: 50.1, south: 50.06, east: 14.438, west: 14.382 },
    },
  },
];
