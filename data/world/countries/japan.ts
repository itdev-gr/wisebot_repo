/**
 * WiseBot World — Japan.
 *
 * Same shape as `greece.ts`. Cities arrive later through the pipeline, so `cities` is
 * empty for now. Facts checked on 12 September 2026 against Wikipedia: Mount Fuji
 * (3,776 m, last erupted 1707–1708), List of islands of Japan (14,125 islands in the
 * 2023 Geospatial Information Authority count) and Shinkansen (opened 1 October 1964,
 * runs at up to 320 km/h since 2014).
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'japan',
  code: 'JP',
  flag: '🇯🇵',
  continent: 'asia',
  order: 12,

  name: {
    el: 'Ιαπωνία',
    en: 'Japan',
  },

  intro: {
    el:
      'Η Ιαπωνία είναι μια χώρα φτιαγμένη από νησιά, πάνω από δεκατέσσερις χιλιάδες, αλλά ' +
      'σχεδόν όλοι οι άνθρωποι μένουν στα τέσσερα μεγάλα. Εδώ ένα τρένο περνά μπροστά σου με ' +
      'τριακόσια είκοσι χιλιόμετρα την ώρα και σχεδόν ποτέ δεν αργεί. Την άνοιξη οι κερασιές ' +
      'ανθίζουν για λίγες μέρες μόνο, και οι οικογένειες βγαίνουν στα πάρκα για να καθίσουν ' +
      'από κάτω τους. Ένα ηφαίστειο με χιόνι στην κορυφή φαίνεται από την πρωτεύουσα τις ' +
      'καθαρές μέρες. Και στα σχολεία τα παιδιά καθαρίζουν μόνα τους την τάξη τους κάθε ' +
      'απόγευμα, με σκούπες και πανιά.',
    en:
      'Japan is a country made of islands, more than fourteen thousand of them, though ' +
      'nearly everyone lives on the four big ones. Here a train flashes past you at three ' +
      'hundred and twenty kilometres an hour and is almost never late. In spring the cherry ' +
      'trees flower for only a few days, and families go out to the parks to sit beneath ' +
      'them. A volcano with snow on its top can be seen from the capital on a clear day. ' +
      'And in the schools, the children clean their own classroom every afternoon, with ' +
      'brooms and cloths.',
  },

  facts: [
    {
      el: 'Το Φούτζι, το ψηλότερο βουνό της, φτάνει τα 3.776 μέτρα. Είναι ηφαίστειο και ξύπνησε τελευταία φορά το 1707.',
      en: 'Mount Fuji, its highest peak, reaches 3,776 metres. It is a volcano, and it last woke up in 1707.',
    },
    {
      el: 'Το 2023 η Ιαπωνία μέτρησε ξανά τα νησιά της με νέους χάρτες και βρήκε 14.125, πάνω από τα διπλά από πριν.',
      en: 'In 2023 Japan counted its islands again with new maps and found 14,125, more than twice the old figure.',
    },
    {
      el: 'Το πρώτο τρένο-σφαίρα, το Σινκανσέν, ξεκίνησε το 1964. Σήμερα τρέχει με έως 320 χιλιόμετρα την ώρα.',
      en: 'The first bullet train, the Shinkansen, set off in 1964. Today it runs at up to 320 kilometres an hour.',
    },
  ],

  stamp: {
    legend: '日本国 JAPAN',
    port: '成田 NARITA',
    shape: 'rectangle',
    ink: '#b23a5c',
  },
};

export const cities: City[] = [];
