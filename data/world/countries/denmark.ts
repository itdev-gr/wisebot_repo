/**
 * WiseBot World — Denmark.
 *
 * Country only for now; `cities` is empty until the city pipeline delivers them. The
 * figures were checked against the English Wikipedia articles "Geography of Denmark"
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

export const cities: City[] = [];
