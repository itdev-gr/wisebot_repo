/**
 * WiseBot World — Portugal.
 *
 * Same shape as `greece.ts`: the country plus the metadata of its cities. The cities
 * arrive through the pipeline later, so `cities` is empty for now.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia articles for Mount
 * Pico (2,351 m, highest point of Portugal), Cork (Portugal ≈ 49.6 % of world output,
 * stripped every nine years), the Vasco da Gama Bridge (17.2 km, longest in the EU) and
 * Livraria Bertrand (founded 1732, Guinness oldest operating bookshop, 2011).
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'portugal',
  code: 'PT',
  flag: '🇵🇹',
  continent: 'europe',
  order: 9,

  name: {
    el: 'Πορτογαλία',
    en: 'Portugal',
  },

  intro: {
    el:
      'Η Πορτογαλία είναι μια χώρα που κοιτάζει τον ωκεανό. Από εδώ ξεκίνησαν τα πλοία που ' +
      'πρωτοέφτασαν στην Ινδία από τη θάλασσα, και στη Λισαβόνα σχεδόν κάθε ανηφόρα τελειώνει ' +
      'με θέα στο νερό. Τα πεζοδρόμιά της είναι στρωμένα με άσπρες και μαύρες πέτρες σε ' +
      'σχέδια, οι τοίχοι είναι ντυμένοι με γαλάζια πλακάκια, και κίτρινα τραμ ανεβαίνουν ' +
      'τρίζοντας τους λόφους. Σχεδόν ο μισός φελλός του κόσμου ξεφλουδίζεται από τα δέντρα ' +
      'της. Και στο Κάμπο ντα Ρόκα, τον τελευταίο βράχο της ηπειρωτικής Ευρώπης, μπροστά ' +
      'σου δεν υπάρχει τίποτα άλλο παρά νερό, μέχρι την Αμερική.',
    en:
      'Portugal is a country that faces the ocean. The ships that first reached India by sea ' +
      'set sail from here, and in Lisbon nearly every uphill street ends with a view of the ' +
      'water. Its pavements are laid in patterns of black and white stones, its walls are ' +
      'dressed in blue-painted tiles, and yellow trams creak their way up the hills. Nearly ' +
      'half of the world’s cork is peeled from the bark of its trees. And at Cabo da Roca, ' +
      'the last cliff of mainland Europe, there is nothing ahead of you but water, all the ' +
      'way to America.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Πίκο, είναι ένα ηφαίστειο 2.351 μέτρων σε ένα νησί των Αζορών, στη μέση του Ατλαντικού.',
      en: 'Its highest mountain, Pico, is a 2,351-metre volcano on an island in the Azores, in the middle of the Atlantic.',
    },
    {
      el: 'Σχεδόν ο μισός φελλός του κόσμου έρχεται από εδώ. Ο φλοιός ξεφλουδίζεται κάθε 9 χρόνια και το δέντρο συνεχίζει να ζει.',
      en: 'Nearly half of the world’s cork comes from here. The bark is stripped every 9 years and the tree goes on living.',
    },
    {
      el: 'Η γέφυρα Βάσκο ντα Γκάμα στη Λισαβόνα έχει μήκος 17,2 χιλιόμετρα, η μακρύτερη της Ευρωπαϊκής Ένωσης.',
      en: 'The Vasco da Gama Bridge in Lisbon is 17.2 kilometres long, the longest in the European Union.',
    },
    {
      el: 'Το βιβλιοπωλείο Bertrand στη Λισαβόνα ανοίγει από το 1732: είναι το παλαιότερο βιβλιοπωλείο του κόσμου που λειτουργεί ακόμα.',
      en: 'The Bertrand bookshop in Lisbon has been open since 1732: it is the oldest bookshop in the world still trading.',
    },
  ],

  stamp: {
    legend: 'PORTUGAL',
    port: 'LISBOA',
    shape: 'rectangle',
    ink: '#4a3c8c',
  },
};

export const cities: City[] = [];
