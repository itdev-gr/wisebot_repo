/**
 * WiseBot World — Cyprus.
 *
 * Same shape as `greece.ts`: the country plus the metadata of its cities. Nicosia landed
 * on 14 September 2026; any further Cypriot cities arrive through the pipeline later.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia articles for
 * Geography of Cyprus (9,251 km², third-largest Mediterranean island, 648 km of coast),
 * Mount Olympus (Cyprus) (1,952 m, highest point, also called Chionistra), Copper
 * (etymology: Latin aes cyprium, "metal of Cyprus") and Akamas (turtle hatchery at Lara).
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'cyprus',
  code: 'CY',
  flag: '🇨🇾',
  continent: 'europe',
  order: 21,

  name: {
    el: 'Κύπρος',
    en: 'Cyprus',
  },

  intro: {
    el:
      'Η Κύπρος είναι ένα νησί με ένα βουνό στη μέση του. Τον χειμώνα η κορυφή του Τροόδους ' +
      'ασπρίζει από χιόνι, ενώ λίγα χιλιόμετρα πιο κάτω η θάλασσα μένει τόσο καθαρή που ' +
      'βλέπεις τα πόδια σου στον βυθό. Στα βράχια της Πάφου ένας μύθος λέει ότι από τον αφρό ' +
      'γεννήθηκε η Αφροδίτη, και στην παραλία της Λάρας οι θαλάσσιες χελώνες σκάβουν κάθε ' +
      'καλοκαίρι τις φωλιές τους στην άμμο. Το χαλλούμι, το τυρί που τρίζει στα δόντια όταν ' +
      'το ψήσεις, γεννήθηκε εδώ. Και το ίδιο το όνομα του χαλκού ξεκίνησε από αυτό το νησί.',
    en:
      'Cyprus is an island with a mountain in the middle of it. In winter the top of Troodos ' +
      'turns white with snow, while a short drive downhill the sea stays so clear you can ' +
      'see your own feet on the bottom. On the rocks near Paphos, a myth says, Aphrodite ' +
      'rose out of the foam, and on the beach at Lara sea turtles dig their nests into the ' +
      'sand every summer. Halloumi, the cheese that squeaks between your teeth when you grill ' +
      'it, was born here. And the very word "copper" began on this island.',
  },

  facts: [
    {
      el: 'Είναι το τρίτο μεγαλύτερο νησί της Μεσογείου, με έκταση 9.251 τετραγωνικά χιλιόμετρα.',
      en: 'It is the third-largest island in the Mediterranean, with an area of 9,251 square kilometres.',
    },
    {
      el: 'Η ψηλότερη κορυφή της, ο Όλυμπος ή Χιονίστρα, φτάνει τα 1.952 μέτρα και χιονίζει κάθε χειμώνα.',
      en: 'Its highest peak, Olympus, also called Chionistra, reaches 1,952 metres and gets snow every winter.',
    },
    {
      el: 'Η λέξη «copper» για τον χαλκό προέρχεται από το λατινικό «aes cyprium», δηλαδή «μέταλλο της Κύπρου».',
      en: 'The word "copper" comes from the Latin "aes cyprium", meaning "metal of Cyprus".',
    },
    {
      el: 'Η ακτογραμμή της έχει μήκος περίπου 648 χιλιόμετρα, οπότε πουθενά δεν είσαι μακριά από τη θάλασσα.',
      en: 'Its coastline is about 648 kilometres long, so nowhere on the island is far from the sea.',
    },
  ],

  stamp: {
    legend: 'ΚΥΠΡΙΑΚΗ ΔΗΜΟΚΡΑΤΙΑ · CYPRUS',
    port: 'ΛΑΡΝΑΚΑ LARNAKA',
    shape: 'oval',
    ink: '#2a6f97',
  },
};

export const cities: City[] = [
  {
    id: 'nicosia',
    countryId: 'cyprus',
    order: 1,
    emoji: '🌞',

    name: {
      el: 'Λευκωσία',
      en: 'Nicosia',
    },

    intro: {
      el:
        'Η Λευκωσία βρίσκεται μακριά από τη θάλασσα, ' +
        'στη μέση μιας πεδιάδας, κλεισμένη μέσα σε έναν κύκλο τειχών με έντεκα μυτερούς ' +
        'προμαχώνες σαν καρδιές, και όλη η παλιά πόλη είναι χτισμένη με την ίδια ' +
        'χρυσοκίτρινη πέτρα. Μια γοτθική εκκλησία εδώ έγινε τζαμί, ένα οθωμανικό λουτρό ' +
        'δουλεύει ακόμα, και ένα σχολείο κάνει μάθημα από το 1812 χωρίς διακοπή. Από τη ' +
        'δεκαετία του 1960, και οριστικά από το 1974, μια γραμμή χωρίζει την παλιά πόλη στα δύο, και οι άνθρωποι περνούν ' +
        'δείχνοντας ταυτότητα.',
      en:
        'Nicosia lies far from the sea, in the ' +
        'middle of a plain, closed inside a ring of walls with eleven pointed bastions ' +
        'shaped like hearts, and the whole old town is built from the same golden-yellow ' +
        'stone. A Gothic church here became a mosque, an Ottoman bathhouse still works, and ' +
        'a school has been holding lessons since 1812 without a break. Since the 1960s, and for ' +
        'good since 1974, a line has divided the old town in two, and people cross it by showing an ID card.',
    },

    /** Copied from `scripts/world/seeds/nicosia.json`. */
    centre: { lat: 35.16953, lng: 33.36087 },

    map: {
      src: '/images/world/maps/nicosia.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Λευκωσίας, με τον κύκλο των τειχών, τους έντεκα προμαχώνες του και την τάφρο.',
        en: 'A stylised map of Nicosia, with the ring of its walls, its eleven bastions and its moat.',
      },
      width: 1000,
      height: 760,
      /**
       * Wide enough east to hold Famagusta Gate and the eastern rampart, wide enough west
       * to hold the Municipal Gardens, and deep enough south to hold the Leventis Gallery
       * outside the walls, without shrinking the walled city — which is where eleven of
       * the fifteen places are — to a blob.
       */
      bounds: { north: 35.1805, south: 35.165, east: 33.3745, west: 33.3495 },
    },
  },
];
