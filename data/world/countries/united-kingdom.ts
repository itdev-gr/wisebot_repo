/**
 * WiseBot World — United Kingdom.
 *
 * Same shape as `greece.ts`. London is the first city; its places live in
 * `data/world/cities/london.ts` and only its card metadata is here. Facts checked
 * against the Wikipedia API on 12 September 2026:
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

export const cities: City[] = [
  {
    id: 'london',
    countryId: 'united-kingdom',
    order: 1,
    emoji: '🎡',

    name: {
      el: 'Λονδίνο',
      en: 'London',
    },

    intro: {
      el:
        'Το Λονδίνο είναι μια πόλη χτισμένη γύρω από ένα ποτάμι που ανεβοκατεβαίνει με ' +
        'την παλίρροια δύο φορές τη μέρα. Στη μία όχθη ένα κάστρο χιλίων χρόνων φυλάει τα ' +
        'στέμματα, στην άλλη μια γιγάντια ρόδα σηκώνει τον κόσμο ψηλά, και ανάμεσά τους ' +
        'μια γέφυρα ανοίγει στα δύο για να περάσουν τα καράβια. Τα τρία μεγαλύτερα μουσεία ' +
        'της είναι δωρεάν: σε ένα ζει μια φάλαινα, σε άλλο μια κάψουλα που γύρισε από τη ' +
        'Σελήνη, και στο τρίτο μια μαύρη πέτρα που έμαθε στον κόσμο να διαβάζει τα ' +
        'ιερογλυφικά χάρη στα ελληνικά. Και στην κορυφή ενός λόφου, μια γραμμή στο έδαφος ' +
        'από όπου μετράει ο πλανήτης την ώρα του.',
      en:
        'London is a city built around a river that rises and falls with the tide twice a ' +
        'day. On one bank a thousand-year-old castle guards the crowns, on the other a giant ' +
        'wheel lifts people into the sky, and between them a bridge opens in two so that ' +
        'ships can pass. Its three biggest museums are free: one has a whale living in it, ' +
        'another a capsule that came back from the Moon, and the third a black stone that ' +
        'taught the world to read hieroglyphs thanks to the Greek written on it. And on top ' +
        'of a hill, a line on the ground from which the planet measures its time.',
    },

    /**
     * Copied from `scripts/world/seeds/london.json`. It is Wikidata's own point for
     * London (Q84), which is Charing Cross, the spot distances to London have always
     * been measured from. The resolver audits every place against this exact point.
     */
    centre: { lat: 51.50722, lng: -0.1275 },

    map: {
      src: '/images/world/maps/london.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης του Λονδίνου με τον Τάμεση να κυλάει από τα δυτικά ως το Γκρίνουιτς.',
        en: 'A stylised map of London with the Thames running from the west out to Greenwich.',
      },
      width: 1000,
      height: 612,
      /**
       * The artwork is drawn to these bounds, so pins are projected onto it rather than
       * placed by hand; every `location.map` in `cities/london.ts` was computed from its
       * coordinate and these four numbers. All seventeen places fall inside them, with
       * the zoo on the north edge, the two South Kensington museums on the west and the
       * meridian line at Greenwich in the south-east corner.
       */
      bounds: { north: 51.545, south: 51.468, east: 0.012, west: -0.19 },
    },
  },
];
