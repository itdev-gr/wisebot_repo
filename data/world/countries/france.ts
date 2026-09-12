/**
 * WiseBot World — France.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of each of its cities.
 * The city list is empty for now; cities arrive through the pipeline in their own pass.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia articles "Mont Blanc"
 * (4,807.3 m), "Eiffel Tower" (330 m, tallest human-made structure for 41 years), "TGV
 * world speed record" (574.8 km/h on 3 April 2007) and "Louvre" (about 35,000 works on
 * display), and against Wikidata Q243 for the tower's height.
 *
 * `stamp` is not localised on purpose — a real entry stamp is inked in French.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'france',
  code: 'FR',
  flag: '🇫🇷',
  continent: 'europe',
  order: 2,

  name: {
    el: 'Γαλλία',
    en: 'France',
  },

  intro: {
    el:
      'Η Γαλλία είναι μια χώρα που αλλάζει σχήμα κάθε λίγες ώρες δρόμου. Στα βόρεια, ένα ' +
      'μοναστήρι στέκεται πάνω σε βράχο που γίνεται νησί όταν ανεβαίνει η παλίρροια. Στο ' +
      'κέντρο, κάστρα με πύργους σαν από παραμύθι κοιτάζουν έναν ήρεμο ποταμό. Στον νότο, ' +
      'χωράφια με λεβάντα, και πιο πέρα οι Άλπεις με χιόνι στις κορυφές όλο τον χρόνο. ' +
      'Βαθιά στις σπηλιές της υπάρχουν ζωγραφιές από την εποχή που τα μαμούθ περπατούσαν ' +
      'ακόμα εδώ. Και σχεδόν σε κάθε δρόμο, ένας φούρνος που βγάζει ζεστό ψωμί κάθε πρωί.',
    en:
      'France is a country that changes shape every few hours down the road. In the north ' +
      'an abbey stands on a rock that turns into an island when the tide comes in. In the ' +
      'middle, castles with fairy-tale towers look down on a slow river. In the south there ' +
      'are fields of lavender, and beyond them the Alps, with snow on the tops all year ' +
      'round. Deep in its caves are paintings made when mammoths still walked here. And on ' +
      'almost every street, a bakery pulling warm bread out of the oven each morning.',
  },

  facts: [
    {
      el: 'Το Λευκό Όρος (Mont Blanc), το ψηλότερο βουνό των Άλπεων, φτάνει τα 4.807 μέτρα.',
      en: 'Mont Blanc, the highest mountain in the Alps, reaches 4,807 metres.',
    },
    {
      el: 'Ο Πύργος του Άιφελ έχει ύψος 330 μέτρα. Για 41 χρόνια ήταν το ψηλότερο κατασκεύασμα του κόσμου.',
      en: 'The Eiffel Tower is 330 metres tall. For 41 years it was the tallest structure humans had ever built.',
    },
    {
      el: 'Το 2007 ένα γαλλικό τρένο TGV έτρεξε με 574,8 χιλιόμετρα την ώρα, παγκόσμιο ρεκόρ για τρένο σε ράγες.',
      en: 'In 2007 a French TGV train ran at 574.8 kilometres per hour, a world record for a train on rails.',
    },
    {
      el: 'Το Λούβρο εκθέτει περίπου 35.000 έργα τέχνης. Για να τα δεις όλα, θα χρειαζόσουν μέρες.',
      en: 'The Louvre has about 35,000 works of art on display. Seeing every one would take days.',
    },
  ],

  stamp: {
    legend: 'RÉPUBLIQUE FRANÇAISE',
    port: 'PARIS · CDG',
    shape: 'rectangle',
    ink: '#5b3a8c',
  },
};

export const cities: City[] = [];
