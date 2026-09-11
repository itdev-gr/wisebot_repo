/**
 * WiseBot World — Canada.
 *
 * Cities arrive later through the pipeline; for now this file carries only the country.
 * Facts checked on 12 September 2026 against Wikipedia ("Canada", "Geography of Canada",
 * "Mount Logan", "List of lakes of Canada"): the 243,042 km coastline is the Statistics
 * Canada figure, Mount Logan's 5,959 m is the 1992 GPS survey, and the lake count is the
 * conservative end of the range (lakes of 10 hectares or more).
 *
 * `stamp` is not localised on purpose — see greece.ts. Canada's old customs stamps were
 * ovals, and the legend carries both official languages, as the real ones do.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'canada',
  code: 'CA',
  flag: '🇨🇦',
  continent: 'americas',
  order: 17,

  name: {
    el: 'Καναδάς',
    en: 'Canada',
  },

  intro: {
    el:
      'Ο Καναδάς είναι μια χώρα τόσο πλατιά που, όταν ξημερώνει στην ανατολική της άκρη, ' +
      'στη δυτική είναι ακόμα βαθιά νύχτα. Έχει περισσότερες λίμνες από κάθε άλλη χώρα, ' +
      'δάση που τα διασχίζεις για μέρες, και έναν καταρράκτη, τον Νιαγάρα, που τον ακούς ' +
      'πριν τον δεις. Οι πινακίδες μιλούν δύο γλώσσες, αγγλικά και γαλλικά. Τον χειμώνα οι ' +
      'λίμνες παγώνουν και γίνονται γήπεδα χόκεϊ, και την άνοιξη οι άνθρωποι τρυπούν τα ' +
      'σφενδάμια για να μαζέψουν τον χυμό που γίνεται σιρόπι. Κι αν ανέβεις αρκετά βόρεια, ' +
      'ο ουρανός χορεύει πράσινος τη νύχτα.',
    en:
      'Canada is so wide that when the sun comes up on its east coast, its west coast is ' +
      'still deep in the night. It has more lakes than any other country, forests you could ' +
      'drive through for days, and a waterfall, Niagara, that you hear before you see. Road ' +
      'signs speak two languages, English and French. In winter the ponds freeze and turn ' +
      'into hockey rinks, and in spring people tap maple trees to collect the sap that ' +
      'becomes syrup. Go far enough north and the sky itself dances green at night.',
  },

  facts: [
    {
      el: 'Έχει τη μεγαλύτερη ακτογραμμή του κόσμου, περίπου 243.000 χιλιόμετρα.',
      en: 'It has the longest coastline in the world, about 243,000 kilometres.',
    },
    {
      el: 'Το ψηλότερο βουνό της, το Λόγκαν, φτάνει τα 5.959 μέτρα, πάνω από δύο Ολύμπους τον έναν πάνω στον άλλο.',
      en: 'Its highest mountain, Mount Logan, reaches 5,959 metres, more than two Olympuses stacked on top of each other.',
    },
    {
      el: 'Έχει περισσότερες λίμνες από κάθε άλλη χώρα: πάνω από 880.000 μόνο οι μεγάλες.',
      en: 'It has more lakes than any other country: over 880,000 counting just the big ones.',
    },
    {
      el: 'Είναι η δεύτερη μεγαλύτερη χώρα της Γης, με 10 επαρχίες και 3 εδάφη, και δύο επίσημες γλώσσες.',
      en: 'It is the second-largest country on Earth, with 10 provinces, 3 territories and two official languages.',
    },
  ],

  stamp: {
    legend: 'CANADA · CBSA · ASFC',
    port: 'TORONTO',
    shape: 'oval',
    ink: '#a4262c',
  },
};

export const cities: City[] = [];
