/**
 * WiseBot World — Belgium.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of each city. Bruges
 * arrived on 14 September 2026 and is the first; the rest follow through the same
 * pipeline. Its `centre` and its map bounds are documented on the entry itself, because
 * neither is the obvious value. Facts were checked against the
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

export const cities: City[] = [
  {
    id: 'bruges',
    countryId: 'belgium',
    order: 1,
    emoji: '🦢',

    name: {
      el: 'Μπριζ',
      en: 'Bruges',
    },

    intro: {
      el:
        'Η Μπριζ είναι μια πόλη που την έσωσε η κακή της τύχη. Πριν από εξακόσια χρόνια ήταν ' +
        'από τις πλουσιότερες της Ευρώπης, με καράβια από την Ιταλία, την Ισπανία και τη ' +
        'Βαλτική. Μετά το κανάλι της προς τη θάλασσα γέμισε άμμο, τα καράβια έφυγαν, και ' +
        'κανείς δεν είχε λεφτά να γκρεμίσει τα παλιά για να χτίσει καινούργια. Έτσι έμεινε ' +
        'όρθια ολόκληρη μεσαιωνική πόλη: πύργος με σαράντα εφτά καμπάνες, κανάλια αντί για ' +
        'δρόμους, κύκνοι, ανεμόμυλοι στα τείχη και μια Παναγία σκαλισμένη από τον Μιχαήλ Άγγελο.',
      en:
        'Bruges is a city that its own bad luck saved. Six hundred years ago it was one of the ' +
        'richest in Europe, with ships arriving from Italy, Spain and the Baltic. Then the ' +
        'channel to the sea silted up, the ships stopped coming, and nobody had the money to ' +
        'pull the old buildings down and put up new ones. So a whole medieval town stayed ' +
        'standing: a tower with forty-seven bells, canals instead of streets, swans, windmills ' +
        'on the ramparts, and a Madonna carved by Michelangelo.',
    },

    /**
     * Copied from `data/world/coords/bruges.json`, which echoes the seed's centre. That
     * centre is Wikidata's point for the Historic Centre of Brugge (Q5762117) and not for
     * the city itself (Q12994), whose point sits 47 m from the Markt and made the audit
     * report the Markt as a centroid mistake.
     */
    centre: { lat: 51.20891, lng: 3.22527 },

    map: {
      src: '/images/world/maps/bruges.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της παλιάς Μπριζ, με το αυγό του κυκλικού καναλιού, τα reien και τη λίμνη Minnewater.',
        en: 'A stylised map of old Bruges, with the egg of its ring canal, the reien and the Minnewater lake.',
      },
      width: 920,
      height: 1000,
      /**
       * Framed on the ring canal, which still draws the outline of the medieval town.
       * Wide enough to hold the windmill bank on the eastern rampart and the Minnewater
       * in the south, the two furthest places in the city file.
       */
      bounds: { north: 51.22, south: 51.1955, east: 3.246, west: 3.21 },
    },
  },
];
