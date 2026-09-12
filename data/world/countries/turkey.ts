/**
 * WiseBot World — Türkiye.
 *
 * Same shape as `greece.ts`. `cities` is empty for now; the city metadata arrives through
 * the pipeline. Facts checked against the English Wikipedia articles for Mount Ararat,
 * Geography of Turkey, Göbekli Tepe, the Grand Bazaar and the Derinkuyu underground city
 * (September 2026). `stamp` is inked in Turkish on purpose — see the note in `greece.ts`.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'turkey',
  code: 'TR',
  flag: '🇹🇷',
  continent: 'asia',
  order: 5,

  name: {
    el: 'Τουρκία',
    en: 'Türkiye',
  },

  intro: {
    el:
      'Η Τουρκία είναι η χώρα όπου η Ευρώπη και η Ασία αγγίζουν η μία την άλλη. Στην ' +
      'Κωνσταντινούπολη μπορείς να πάρεις πρωινό στη μία ήπειρο, να περάσεις μια γέφυρα και ' +
      'να φας μεσημεριανό στην άλλη. Στην Καππαδοκία οι άνθρωποι έσκαψαν σπίτια μέσα σε ' +
      'βράχους που μοιάζουν με καμινάδες, και κάθε πρωί δεκάδες αερόστατα σηκώνονται από ' +
      'πάνω τους. Στο Παμούκκαλε μια ολόκληρη πλαγιά είναι κάτασπρη, φτιαγμένη από ζεστό νερό ' +
      'που σιγά σιγά έγινε πέτρα. Και όπου κι αν καθίσεις, κάποιος θα σου προσφέρει τσάι σε ' +
      'ένα μικρό ποτήρι σε σχήμα τουλίπας.',
    en:
      'Türkiye is the country where Europe and Asia touch. In Istanbul you can eat breakfast ' +
      'on one continent, cross a bridge, and have lunch on the other. In Cappadocia people ' +
      'carved homes into rocks shaped like chimneys, and every morning dozens of hot-air ' +
      'balloons rise above them. At Pamukkale a whole hillside is pure white, made of warm ' +
      'spring water that slowly turned to stone. Under the fields there are whole cities dug ' +
      'by hand, deep enough to hide thousands of people. And wherever you sit, somebody ' +
      'will offer you tea in a small glass shaped like a tulip.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Αραράτ, φτάνει τα 5.137 μέτρα και έχει χιόνι όλο τον χρόνο.',
      en: 'Its highest mountain, Ararat, reaches 5,137 metres and keeps snow all year round.',
    },
    {
      el: 'Το Γκιομπεκλί Τεπέ χτίστηκε πριν από περίπου 11.500 χρόνια, πριν οι άνθρωποι φτιάξουν το πρώτο πήλινο δοχείο.',
      en: 'Göbekli Tepe was built about 11,500 years ago, before people had made their first clay pot.',
    },
    {
      el: 'Το Μεγάλο Παζάρι της Κωνσταντινούπολης έχει 61 σκεπαστούς δρόμους και περίπου 4.000 μαγαζιά.',
      en: 'The Grand Bazaar in Istanbul has 61 covered streets and about 4,000 shops.',
    },
    {
      el: 'Η υπόγεια πόλη Ντερίνκουγιου κατεβαίνει 85 μέτρα κάτω από τη γη και χωρούσε έως 20.000 ανθρώπους.',
      en: 'The underground city of Derinkuyu goes 85 metres down and could hold up to 20,000 people.',
    },
  ],

  stamp: {
    legend: 'TÜRKİYE CUMHURİYETİ',
    port: 'İSTANBUL · GİRİŞ',
    shape: 'rectangle',
    ink: '#4b2e83',
  },
};

export const cities: City[] = [];
