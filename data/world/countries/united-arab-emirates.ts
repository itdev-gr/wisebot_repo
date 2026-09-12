/**
 * WiseBot World — United Arab Emirates.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of its cities. The
 * cities arrive through the pipeline later, so `cities` is empty for now.
 *
 * Facts checked against Wikipedia (Burj Khalifa, Jebel Jais, United Arab Emirates and
 * Geography of the United Arab Emirates) on 12 September 2026. The stamp is inked in
 * Arabic on purpose — see the note on `CountryStamp` in `../types.ts`.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'united-arab-emirates',
  code: 'AE',
  flag: '🇦🇪',
  continent: 'asia',
  order: 20,

  name: {
    el: 'Ηνωμένα Αραβικά Εμιράτα',
    en: 'United Arab Emirates',
  },

  intro: {
    el:
      'Τα Ηνωμένα Αραβικά Εμιράτα είναι μια χώρα που ξεφύτρωσε μέσα από την άμμο. Πριν ' +
      'από πενήντα χρόνια εδώ υπήρχαν ψαροχώρια και καραβάνια με καμήλες· σήμερα στέκεται ' +
      'ο ψηλότερος ουρανοξύστης του κόσμου, και το ασανσέρ του σε ανεβάζει πάνω από τα ' +
      'σύννεφα σε λιγότερο από δύο λεπτά. Λίγο έξω από την πόλη, οι κόκκινοι αμμόλοφοι ' +
      'συνεχίζουν μέχρι τον ορίζοντα, και στα ανατολικά γκρίζα βουνά κατεβαίνουν ίσια ' +
      'στη θάλασσα. Επτά μικρά κράτη ενώθηκαν το 1971 και έγιναν ένα, και στο Ντουμπάι ' +
      'ξύλινα καΐκια φορτώνουν ακόμα ψυγεία και πλυντήρια δίπλα σε γυάλινους πύργους.',
    en:
      'The United Arab Emirates is a country that grew up out of the sand. Fifty years ' +
      'ago this was fishing villages and camel caravans; today the tallest building on ' +
      'Earth stands here, and its lift carries you above the clouds in under two minutes. ' +
      'Just outside the city, red dunes roll on to the horizon, and in the east grey ' +
      'mountains drop straight into the sea. Seven small states joined together in 1971 ' +
      'to become one country, and in Dubai wooden boats still load fridges and washing ' +
      'machines on a creek lined with glass towers.',
  },

  facts: [
    {
      el: 'Το Μπουρτζ Χαλίφα στο Ντουμπάι είναι το ψηλότερο κτίριο του κόσμου: 828 μέτρα μέχρι την οροφή.',
      en: 'The Burj Khalifa in Dubai is the tallest building in the world: 828 metres to the roof.',
    },
    {
      el: 'Η χώρα φτιάχτηκε από επτά εμιράτα που ενώθηκαν το 1971. Το Άμπου Ντάμπι είναι η πρωτεύουσα.',
      en: 'The country is made of seven emirates that joined together in 1971. Abu Dhabi is the capital.',
    },
    {
      el: 'Το ψηλότερο σημείο της, στο βουνό Τζέμπελ Τζάις, φτάνει τα 1.892 μέτρα.',
      en: 'Its highest point, on the mountain Jebel Jais, reaches 1,892 metres.',
    },
    {
      el: 'Η ακτογραμμή της έχει μήκος περίπου 1.318 χιλιόμετρα, σχεδόν όλη στον Περσικό Κόλπο.',
      en: 'Its coastline is about 1,318 kilometres long, almost all of it on the Persian Gulf.',
    },
  ],

  stamp: {
    legend: 'الإمارات العربية المتحدة · UAE',
    port: 'دبي DUBAI',
    shape: 'oval',
    ink: '#2a6f3e',
  },
};

export const cities: City[] = [];
