/**
 * WiseBot World — Cyprus.
 *
 * Same shape as `greece.ts`: the country plus the metadata of its cities. The cities
 * arrive through the pipeline later, so `cities` is empty for now.
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

export const cities: City[] = [];
