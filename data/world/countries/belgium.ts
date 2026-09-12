/**
 * WiseBot World — Belgium.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of each city. Cities
 * are empty for now and arrive through the pipeline. Facts were checked against the
 * English Wikipedia articles for Belgium, Signal de Botrange, the Coast Tram and
 * Belgian comics, and Botrange's elevation against Wikidata Q322824 (P2044).
 * `stamp` is deliberately not localised: it is inked the way Belgium inks it.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'belgium',
  code: 'BE',
  flag: '🇧🇪',
  continent: 'europe',
  order: 25,

  name: {
    el: 'Βέλγιο',
    en: 'Belgium',
  },

  intro: {
    el:
      'Το Βέλγιο είναι μια μικρή χώρα που χωράει σε μια μέρα οδήγησης, αλλά αλλάζει γλώσσα ' +
      'στη μέση της διαδρομής: στον βορρά μιλούν ολλανδικά, στον νότο γαλλικά, και σε μια ' +
      'γωνιά στα ανατολικά γερμανικά. Εδώ γεννήθηκαν ο Τεντέν και τα Στρουμφάκια, και στις ' +
      'Βρυξέλλες οι ήρωες των κόμικς είναι ζωγραφισμένοι σε ολόκληρους τοίχους. Οι σοκολατιέρηδες ' +
      'έχουν μαγαζιά σχεδόν σε κάθε πλατεία, οι πατάτες τηγανίζονται δύο φορές, και στην ' +
      'Μπριζ οι δρόμοι είναι κανάλια. Κι από τη μία άκρη της παραλίας ως την άλλη πηγαίνεις ' +
      'με ένα και μόνο τραμ.',
    en:
      'Belgium is a small country you can drive across in a day, yet it changes language ' +
      'halfway: Dutch in the north, French in the south, and German in a corner to the ' +
      'east. Tintin and the Smurfs were born here, and in Brussels comic-book heroes are ' +
      'painted across whole walls. Chocolate makers have shops on almost every square, the ' +
      'chips are fried twice, and in Bruges the streets are canals. And you can ride from one ' +
      'end of the beach to the other on a single tram.',
  },

  facts: [
    {
      el: 'Το ψηλότερο σημείο του, το Σινιάλ ντε Μποτράνζ, φτάνει μόλις τα 694 μέτρα.',
      en: 'Its highest point, the Signal de Botrange, reaches only 694 metres.',
    },
    {
      el: 'Η ακτή του έχει μήκος 67 χιλιόμετρα, και ένα τραμ με 67 στάσεις τη διατρέχει ολόκληρη.',
      en: 'Its coast is 67 kilometres long, and one tram with 67 stops runs the whole length of it.',
    },
    {
      el: 'Έχει τρεις επίσημες γλώσσες: ολλανδικά, γαλλικά και γερμανικά.',
      en: 'It has three official languages: Dutch, French and German.',
    },
    {
      el: 'Τα βιβλία του Τεντέν έχουν πουλήσει περίπου 200 εκατομμύρια αντίτυπα σε όλο τον κόσμο.',
      en: 'The Tintin books have sold around 200 million copies around the world.',
    },
  ],

  stamp: {
    legend: 'BELGIQUE · BELGIË',
    port: 'BRUGGE',
    shape: 'oval',
    ink: '#2a3f8f',
  },
};

export const cities: City[] = [];
