/**
 * WiseBot World — Poland.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of its cities. The
 * cities arrive later through the pipeline, so `cities` is empty for now.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia articles on Rysy,
 * the Vistula, the Geography of Poland, Białowieża Forest, the Wieliczka Salt Mine and
 * St. Mary's Trumpet Call, and against the mine's own visitor guides for the tunnel
 * length and depth. The stamp follows the Polish entry stamp used at Kraków's airport.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'poland',
  code: 'PL',
  flag: '🇵🇱',
  continent: 'europe',
  order: 18,

  name: {
    el: 'Πολωνία',
    en: 'Poland',
  },

  intro: {
    el:
      'Η Πολωνία είναι μια χώρα που κρύβει τα πιο παράξενα πράγματά της κάτω από το ' +
      'χώμα. Κοντά στην Κρακοβία υπάρχει ένα ορυχείο αλατιού με εκκλησίες, πολυελαίους ' +
      'και αγάλματα, όλα σκαλισμένα από αλάτι, ενώ στην πόλη ένας σαλπιγκτής παίζει ' +
      'κάθε ώρα την ίδια μελωδία από τον ψηλότερο πύργο. Στα βόρεια απλώνονται ' +
      'αμμουδιές στη Βαλτική, στα νότια βουνά με λίμνες σαν καθρέφτες, και στα ' +
      'ανατολικά ένα δάσος τόσο παλιό που μέσα του ζουν ακόμα βίσωνες. Είναι μια χώρα ' +
      'επίπεδη σαν τραπέζι, που όμως δεν τελειώνει ποτέ.',
    en:
      'Poland keeps its strangest things underground. Near Kraków there is a salt mine ' +
      'with chapels, chandeliers and statues in it, every one of them carved out of salt, ' +
      'and up in the city a trumpeter plays the same short tune from the tallest tower ' +
      'every hour, in four directions. In the north there are sandy beaches on the ' +
      'Baltic, in the south mountains with lakes as still as mirrors, and in the east a ' +
      'forest so old that wild bison still walk through it. It is a country as flat as a ' +
      'table, and it never seems to end.',
  },

  facts: [
    {
      el: 'Ο Βιστούλας, το μεγαλύτερο ποτάμι της, έχει μήκος 1.047 χιλιόμετρα και περνά από την Κρακοβία και τη Βαρσοβία πριν φτάσει στη Βαλτική.',
      en: 'The Vistula, its longest river, runs for 1,047 kilometres and passes through Kraków and Warsaw on its way to the Baltic.',
    },
    {
      el: 'Το ορυχείο αλατιού της Βιελίτσκα έχει περίπου 287 χιλιόμετρα διαδρόμους και φτάνει 327 μέτρα κάτω από τη γη.',
      en: 'The Wieliczka salt mine has about 287 kilometres of tunnels and goes 327 metres below the ground.',
    },
    {
      el: 'Στο δάσος της Μπιαλοβιέζα ζουν πάνω από 800 ευρωπαϊκοί βίσωνες, το βαρύτερο άγριο ζώο της Ευρώπης.',
      en: 'More than 800 European bison, the heaviest wild land animal in Europe, live in the Białowieża Forest.',
    },
    {
      el: 'Το ψηλότερο σημείο της είναι η κορυφή Ρίσι στα Τάτρα, σχεδόν 2.500 μέτρα, ακριβώς πάνω στα σύνορα με τη Σλοβακία.',
      en: 'Its highest point is the peak of Rysy in the Tatras, almost 2,500 metres, right on the border with Slovakia.',
    },
  ],

  stamp: {
    legend: 'RZECZPOSPOLITA POLSKA',
    port: 'KRAKÓW-BALICE',
    shape: 'rectangle',
    ink: '#5b3a8a',
  },
};

export const cities: City[] = [];
