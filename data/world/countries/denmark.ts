/**
 * WiseBot World — Denmark.
 *
 * One city so far, Copenhagen; the rest arrive through the pipeline in their own pass.
 * Copenhagen's `centre` and its map `bounds` are both copied from
 * `data/world/coords/copenhagen.json` — the centre is the resolver's own reference
 * point (Wikidata Q1748) and the bounds are the box that holds every resolved pin, from
 * the Harbour Bath in the south to the Little Mermaid in the north and Amager Bakke out
 * east. The figures were checked against the English Wikipedia articles "Geography of Denmark"
 * (52 km from the coast), "Møllehøj" (170.86 m), "Lego" (Ole Kirk Christiansen, Billund,
 * 1932, "leg godt") and "Flag of Denmark" (Guinness record, in continuous use since 1625).
 * The stamp is inked in Danish, as a real entry stamp is. `de`, `fr`, `es` and `it` land
 * in the second pass.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'denmark',
  code: 'DK',
  flag: '🇩🇰',
  continent: 'europe',
  order: 24,

  name: {
    el: 'Δανία',
    en: 'Denmark',
  },

  intro: {
    el:
      'Η Δανία είναι μια χώρα που τη φτιάχνει η θάλασσα από όλες τις μεριές. Είναι μια ' +
      'μακριά χερσόνησος και εκατοντάδες νησιά, δεμένα μεταξύ τους με πλοία, γέφυρες και ' +
      'μία γέφυρα τόσο μεγάλη που φτάνει ως τη Σουηδία. Δεν έχει ούτε ένα βουνό: το ' +
      'ψηλότερο σημείο ολόκληρης της χώρας είναι ένας λόφος που τον ανεβαίνεις πριν το ' +
      'μεσημεριανό. Γι’ αυτό όλοι πηγαίνουν παντού με ποδήλατο, και τα παιδιά, ακόμα και ' +
      'με χιόνι. Εδώ ένας ξυλουργός σε ένα μικρό χωριό έφτιαξε τα πρώτα τουβλάκια LEGO, ' +
      'κι εδώ ο Χανς Κρίστιαν Άντερσεν έγραψε τη Μικρή Γοργόνα και το Ασχημόπαπο.',
    en:
      'Denmark is a country the sea has shaped from every side. It is one long peninsula ' +
      'and hundreds of islands, tied together by ferries, bridges and one bridge so long it ' +
      'reaches Sweden. There is not a single mountain: the highest point in the whole ' +
      'country is a hill you can walk up before lunch. That is why everybody cycles ' +
      'everywhere, children included, even in the snow. A carpenter in a small village ' +
      'here made the first LEGO bricks, and Hans Christian Andersen sat here and wrote The ' +
      'Little Mermaid and The Ugly Duckling.',
  },

  facts: [
    {
      el: 'Το ψηλότερο φυσικό σημείο της, ο λόφος Μέλεχοϊ, φτάνει μόλις τα 171 μέτρα.',
      en: 'Its highest natural point, the hill Møllehøj, reaches just 171 metres.',
    },
    {
      el: 'Όπου κι αν σταθείς στη Δανία, η θάλασσα δεν είναι ποτέ πιο μακριά από 52 χιλιόμετρα.',
      en: 'Wherever you stand in Denmark, the sea is never more than 52 kilometres away.',
    },
    {
      el: 'Τα LEGO ξεκίνησαν το 1932 από έναν ξυλουργό στο Μπίλουντ. Το όνομα βγαίνει από το «leg godt», «παίξε καλά».',
      en: 'LEGO began in 1932 with a carpenter in Billund. The name comes from "leg godt", which means "play well".',
    },
    {
      el: 'Η σημαία της, το Ντάνεμπρογκ, χρησιμοποιείται χωρίς διακοπή από το 1625, περισσότερο από κάθε άλλη εθνική σημαία.',
      en: 'Its flag, the Dannebrog, has been in continuous use since 1625, longer than any other national flag.',
    },
  ],

  stamp: {
    legend: 'DANMARK',
    port: 'KØBENHAVN',
    shape: 'rectangle',
    ink: '#c8102e',
  },
};

export const cities: City[] = [
  {
    id: 'copenhagen',
    countryId: 'denmark',
    order: 1,
    emoji: '🧜',

    name: {
      el: 'Κοπεγχάγη',
      en: 'Copenhagen',
    },

    intro: {
      el:
        'Η Κοπεγχάγη είναι μια πόλη χτισμένη πάνω στο νερό, και το νερό της είναι τόσο ' +
        'καθαρό που τα παιδιά βουτάνε μέσα στο λιμάνι. Έχει έναν πύργο που τον ανεβαίνεις ' +
        'με ράμπα αντί για σκάλα, ένα εργοστάσιο σκουπιδιών με πίστα του σκι στη σκεπή, ' +
        'και ένα λούνα παρκ που άνοιξε πριν από σχεδόν δύο αιώνες. Εδώ έγραψε ο Χανς ' +
        'Κρίστιαν Άντερσεν τα πρώτα του παραμύθια, σε ένα κανάλι με σπίτια βαμμένα σαν ' +
        'κουτί με κραγιόνια. Και σχεδόν όλοι κυκλοφορούν με ποδήλατο, ακόμα και με χιόνι.',
      en:
        'Copenhagen is a city built on water, and its water is clean enough that children ' +
        'jump into the harbour. It has a tower you climb by ramp instead of stairs, a ' +
        'rubbish-burning power station with a ski slope on the roof, and a funfair that ' +
        'opened almost two centuries ago. Hans Christian Andersen wrote his first fairy ' +
        'tales here, on a canal lined with houses painted like a box of crayons. And ' +
        'almost everybody gets around by bicycle, even in the snow.',
    },

    /** Copied from `data/world/coords/copenhagen.json`. Wikidata Q1748. */
    centre: { lat: 55.67611, lng: 12.56889 },

    map: {
      src: '/images/world/maps/copenhagen.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Κοπεγχάγης, με το λιμάνι, τις λίμνες και το αστεροειδές φρούριο.',
        en: 'A stylised map of Copenhagen, with its harbour, its lakes and its star-shaped fort.',
      },
      width: 1000,
      height: 880,
      /**
       * The smallest north-aligned box that holds all seventeen resolved pins with a
       * margin: the Harbour Bath at Islands Brygge sets the south edge, the Little
       * Mermaid the north, Tivoli the west, and Amager Bakke — alone out on Amager —
       * the east.
       */
      bounds: { north: 55.698, south: 55.664, east: 12.628, west: 12.56 },
    },
  },
];
