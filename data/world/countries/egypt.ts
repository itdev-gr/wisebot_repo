/**
 * WiseBot World — Egypt.
 *
 * Same shape as `greece.ts`. Cities arrive through the pipeline in a later pass, so
 * `cities` is empty for now. Every number in `facts` was checked on 12 September 2026
 * against the English Wikipedia articles "Nile", "Great Pyramid of Giza" and "Egypt"
 * (via the Wikipedia API) and against Wikidata Q37200 (the Great Pyramid's height).
 * The stamp is inked in Arabic on purpose: a real entry stamp is not translated.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'egypt',
  code: 'EG',
  flag: '🇪🇬',
  continent: 'africa',
  order: 14,

  name: {
    el: 'Αίγυπτος',
    en: 'Egypt',
  },

  intro: {
    el:
      'Η Αίγυπτος είναι μια χώρα φτιαγμένη γύρω από ένα ποτάμι. Ο Νείλος περνάει από τη ' +
      'μέση της ερήμου σαν μια πράσινη λωρίδα, και σχεδόν όλοι οι άνθρωποι ζουν δίπλα ' +
      'του: λίγα χιλιόμετρα πιο πέρα αρχίζει η άμμος και δεν σταματά. Στην άκρη του ' +
      'Καΐρου στέκονται πυραμίδες που χτίστηκαν πριν από τεσσερισήμισι χιλιάδες χρόνια, ' +
      'και μέσα στα μουσεία της υπάρχουν παιχνίδια, σανδάλια και ψωμί από τότε. Οι ' +
      'αρχαίοι Αιγύπτιοι έγραφαν με μικρές εικόνες, πουλιά, φίδια και μάτια, και σήμερα ' +
      'μπορείς να διαβάσεις τι έλεγαν.',
    en:
      'Egypt is a country built around a river. The Nile runs through the middle of the ' +
      'desert like a long green ribbon, and nearly everyone lives beside it: a few ' +
      'kilometres away the sand begins and does not stop. On the edge of Cairo stand ' +
      'pyramids raised four and a half thousand years ago, and in the museums you can ' +
      'find toys, sandals and even loaves of bread from that time. The ancient Egyptians ' +
      'wrote with little pictures, birds, snakes and eyes, and today we can read what ' +
      'they were saying.',
  },

  facts: [
    {
      el: 'Ο Νείλος, το μακρύτερο ποτάμι του κόσμου, έχει μήκος πάνω από 6.600 χιλιόμετρα και κυλάει προς τον βορρά, ως τη Μεσόγειο.',
      en: 'The Nile, the longest river in the world, is more than 6,600 kilometres long and flows north all the way to the Mediterranean.',
    },
    {
      el: 'Η Μεγάλη Πυραμίδα της Γκίζας έχει περίπου 2,3 εκατομμύρια πέτρες. Όταν χτίστηκε είχε ύψος 146 μέτρα και έμεινε το ψηλότερο κτίσμα του κόσμου για πάνω από 3.700 χρόνια.',
      en: 'The Great Pyramid of Giza is made of about 2.3 million blocks. It stood 146 metres tall when it was built and stayed the tallest structure in the world for over 3,700 years.',
    },
    {
      el: 'Περίπου το 99% των Αιγυπτίων ζει σε μόλις 5% της χώρας, στην κοιλάδα και το δέλτα του Νείλου. Το υπόλοιπο είναι έρημος.',
      en: 'About 99% of Egyptians live on just 5% of the country, in the valley and delta of the Nile. The rest is desert.',
    },
  ],

  stamp: {
    legend: 'جمهورية مصر العربية · EGYPT',
    port: 'القاهرة CAIRO',
    shape: 'rectangle',
    ink: '#5b3fa0',
  },
};

export const cities: City[] = [];
