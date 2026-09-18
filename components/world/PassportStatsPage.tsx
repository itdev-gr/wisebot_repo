/**
 * WiseBot World — the passport's statistics page.
 * ================================================
 * The stamp book shows a child what they collected; this screen shows them how far they
 * have come, in one page they can hand to a parent. It is a sibling of the book, opened
 * from the book's cover, and it obeys the book's own rule: **it awards nothing and stores
 * nothing.** Every number arrives already computed by `passportStats.ts`; there is no
 * effect here, no localStorage write, no analytics event and no XP.
 *
 * What is deliberately NOT on this page, and why, is written at the top of
 * `passportStats.ts` — kilometres (§28), museums finished (no field yet), artifacts and
 * rare badges (decisions row §30–31, spec 02). Read that before adding a tile.
 *
 * Chrome strings are the local `T` and `S` dictionaries, read with `ui()`; every sentence
 * is written out whole in each of the six languages rather than assembled from fragments,
 * because the six do not agree on word order or on where the plural goes — French and
 * Italian inflect the participle after the noun, Greek inflects the noun after the number.
 * The root carries `lang={lang}` for the same reason `StampBook.tsx` does: Greek uppercase
 * loses its tonos only when the ELEMENT's language is Greek.
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  Building2,
  CalendarDays,
  Compass,
  Footprints,
  Globe,
  Landmark,
  MapPin,
  Puzzle,
  Route,
  Sofa,
  Trophy,
} from 'lucide-react';
import { WORLD_STYLE, say, ui } from './worldUi';
import type { City, Country, WorldLang } from '../../data/world/types';
import { WORLD_COUNTRY_COUNT, formatIsoDate, isEmptyPassport } from './passportStats';
import type { PassportStats as Stats } from './passportStats';

export interface PassportStatsProps {
  lang: WorldLang;
  stats: Stats;
  /** Every country World knows, in display order. Its length is "open today"; never a literal. */
  countries: Country[];
  /** Every city, for the best city's name and emoji. */
  cities: City[];
}

// ------------------------------------------------------------------ chrome

/** Short, already-uppercase captions. Safe to render through `WORLD_STYLE.label`. */
export const T = {
  // The cover button that opens this page. Lives here so the book imports one word.
  open: {
    el: 'ΣΤΑΤΙΣΤΙΚΑ',
    en: 'STATISTICS',
    de: 'STATISTIK',
    fr: 'STATISTIQUES',
    es: 'ESTADÍSTICAS',
    it: 'STATISTICHE',
  },
  kicker: {
    el: 'ΔΙΑΒΑΤΗΡΙΟ WISEBOT WORLD',
    en: 'WISEBOT WORLD PASSPORT',
    de: 'WISEBOT WORLD REISEPASS',
    fr: 'PASSEPORT WISEBOT WORLD',
    es: 'PASAPORTE WISEBOT WORLD',
    it: 'PASSAPORTO WISEBOT WORLD',
  },
  journey: {
    el: 'ΤΟ ΤΑΞΙΔΙ ΣΟΥ',
    en: 'YOUR JOURNEY',
    de: 'DEINE REISE',
    fr: 'TON VOYAGE',
    es: 'TU VIAJE',
    it: 'IL TUO VIAGGIO',
  },
  // The same three words the book's cover uses, so the two screens agree.
  countries: { el: 'ΧΩΡΕΣ', en: 'COUNTRIES', de: 'LÄNDER', fr: 'PAYS', es: 'PAÍSES', it: 'PAESI' },
  cities: { el: 'ΠΟΛΕΙΣ', en: 'CITIES', de: 'STÄDTE', fr: 'VILLES', es: 'CIUDADES', it: 'CITTÀ' },
  places: { el: 'ΜΕΡΗ', en: 'PLACES', de: 'ORTE', fr: 'LIEUX', es: 'LUGARES', it: 'LUOGHI' },
  missions: {
    el: 'ΑΠΟΣΤΟΛΕΣ',
    en: 'MISSIONS',
    de: 'MISSIONEN',
    fr: 'MISSIONS',
    es: 'MISIONES',
    it: 'MISSIONI',
  },
  // The museum words are MuseumView's, the trail word is CityView's — one vocabulary.
  exhibits: { el: 'ΕΚΘΕΜΑΤΑ', en: 'EXHIBITS', de: 'OBJEKTE', fr: 'OBJETS', es: 'OBJETOS', it: 'OGGETTI' },
  riddles: { el: 'ΓΡΙΦΟΙ', en: 'RIDDLES', de: 'RÄTSEL', fr: 'ÉNIGMES', es: 'ACERTIJOS', it: 'INDOVINELLI' },
  trails: { el: 'ΔΙΑΔΡΟΜΕΣ', en: 'TRAILS', de: 'ROUTEN', fr: 'PARCOURS', es: 'RUTAS', it: 'PERCORSI' },
  where: {
    el: 'ΠΟΥ ΣΦΡΑΓΙΣΕΣ',
    en: 'WHERE YOU STAMPED',
    de: 'WO DU GESTEMPELT HAST',
    fr: 'OÙ TU AS TAMPONNÉ',
    es: 'DÓNDE SELLASTE',
    it: 'DOVE HAI TIMBRATO',
  },
  onSite: {
    el: 'ΕΠΙ ΤΟΠΟΥ',
    en: 'ON SITE',
    de: 'VOR ORT',
    fr: 'SUR PLACE',
    es: 'EN EL LUGAR',
    it: 'SUL POSTO',
  },
  atHome: {
    el: 'ΑΠΟ ΤΟ ΣΠΙΤΙ',
    en: 'AT HOME',
    de: 'VON ZU HAUSE',
    fr: 'À LA MAISON',
    es: 'EN CASA',
    it: 'DA CASA',
  },
  bestCity: {
    el: 'Η ΚΑΛΥΤΕΡΗ ΣΟΥ ΠΟΛΗ',
    en: 'YOUR BEST CITY',
    de: 'DEINE BESTE STADT',
    fr: 'TA MEILLEURE VILLE',
    es: 'TU MEJOR CIUDAD',
    it: 'LA TUA CITTÀ MIGLIORE',
  },
  firstStamp: {
    el: 'Η ΠΡΩΤΗ ΣΦΡΑΓΙΔΑ',
    en: 'FIRST STAMP',
    de: 'ERSTER STEMPEL',
    fr: 'PREMIER TAMPON',
    es: 'PRIMER SELLO',
    it: 'PRIMO TIMBRO',
  },
  perCountry: {
    el: 'ΣΦΡΑΓΙΔΕΣ ΑΝΑ ΧΩΡΑ',
    en: 'STAMPS PER COUNTRY',
    de: 'STEMPEL PRO LAND',
    fr: 'TAMPONS PAR PAYS',
    es: 'SELLOS POR PAÍS',
    it: 'TIMBRI PER PAESE',
  },
};

/** Whole sentences. Written six times, never concatenated from pieces. */
const S = {
  title: {
    el: 'Τα στατιστικά σου',
    en: 'Your statistics',
    de: 'Deine Statistik',
    fr: 'Tes statistiques',
    es: 'Tus estadísticas',
    it: 'Le tue statistiche',
  },
  subtitle: {
    el: 'Πόσο μακριά έφτασες, σε αριθμούς.',
    en: 'How far you have come, in numbers.',
    de: 'Wie weit du gekommen bist, in Zahlen.',
    fr: 'Le chemin parcouru, en chiffres.',
    es: 'Lo lejos que has llegado, en números.',
    it: 'Quanta strada hai fatto, in numeri.',
  },
  empty: {
    el: 'Το διαβατήριό σου είναι ακόμα λευκό, οπότε δεν υπάρχει τίποτα να μετρήσουμε. Άνοιξε την πρώτη σου χώρα και πάρε την πρώτη σφραγίδα.',
    en: 'Your passport is still blank, so there is nothing to count yet. Open your first country and take your first stamp.',
    de: 'Dein Reisepass ist noch leer, also gibt es noch nichts zu zählen. Öffne dein erstes Land und hol dir deinen ersten Stempel.',
    fr: 'Ton passeport est encore vide, il n’y a donc rien à compter. Ouvre ton premier pays et prends ton premier tampon.',
    es: 'Tu pasaporte todavía está en blanco, así que no hay nada que contar. Abre tu primer país y consigue tu primer sello.',
    it: 'Il tuo passaporto è ancora vuoto, quindi non c’è niente da contare. Apri il tuo primo Paese e prendi il tuo primo timbro.',
  },
  // "X of 195" exactly as §12 writes it, and then how many are open today — a number
  // that arrives from the content, never a literal.
  ofWorld: {
    el: (world: number, open: number) =>
      open === 1
        ? `Από τις ${world} χώρες του κόσμου. Μία από αυτές είναι ανοιχτή στο WiseBot World σήμερα.`
        : `Από τις ${world} χώρες του κόσμου. ${open} από αυτές είναι ανοιχτές στο WiseBot World σήμερα.`,
    en: (world: number, open: number) =>
      open === 1
        ? `Of the ${world} countries in the world. One of them is open in WiseBot World today.`
        : `Of the ${world} countries in the world. ${open} of them are open in WiseBot World today.`,
    de: (world: number, open: number) =>
      open === 1
        ? `Von den ${world} Ländern der Welt. Eines davon ist heute in WiseBot World geöffnet.`
        : `Von den ${world} Ländern der Welt. ${open} davon sind heute in WiseBot World geöffnet.`,
    fr: (world: number, open: number) =>
      open === 1
        ? `Sur les ${world} pays du monde. Un seul est ouvert dans WiseBot World aujourd’hui.`
        : `Sur les ${world} pays du monde. ${open} d’entre eux sont ouverts dans WiseBot World aujourd’hui.`,
    es: (world: number, open: number) =>
      open === 1
        ? `De los ${world} países del mundo. Uno de ellos está abierto hoy en WiseBot World.`
        : `De los ${world} países del mundo. ${open} de ellos están abiertos hoy en WiseBot World.`,
    it: (world: number, open: number) =>
      open === 1
        ? `Dei ${world} Paesi del mondo. Uno di loro è aperto oggi in WiseBot World.`
        : `Dei ${world} Paesi del mondo. ${open} di loro sono aperti oggi in WiseBot World.`,
  },
  countriesSealed: {
    el: (n: number) =>
      n === 1 ? 'Μία χώρα σφραγισμένη ολόκληρη.' : `${n} χώρες σφραγισμένες ολόκληρες.`,
    en: (n: number) =>
      n === 1 ? 'One country sealed from end to end.' : `${n} countries sealed from end to end.`,
    de: (n: number) =>
      n === 1 ? 'Ein Land komplett gestempelt.' : `${n} Länder komplett gestempelt.`,
    fr: (n: number) =>
      n === 1 ? 'Un pays tamponné en entier.' : `${n} pays tamponnés en entier.`,
    es: (n: number) =>
      n === 1 ? 'Un país sellado por completo.' : `${n} países sellados por completo.`,
    it: (n: number) =>
      n === 1 ? 'Un Paese timbrato per intero.' : `${n} Paesi timbrati per intero.`,
  },
  // The cities tile carries BOTH numbers, distinctly worded: visited above, sealed below.
  // One ambiguous "cities" number would always be wrong for the child reading it.
  citiesVisited: {
    el: 'Πόλεις όπου πήρες τουλάχιστον μία σφραγίδα.',
    en: 'Cities where you took at least one stamp.',
    de: 'Städte, in denen du mindestens einen Stempel geholt hast.',
    fr: 'Les villes où tu as pris au moins un tampon.',
    es: 'Ciudades donde conseguiste al menos un sello.',
    it: 'Città dove hai preso almeno un timbro.',
  },
  citiesSealed: {
    el: (n: number) =>
      n === 0
        ? 'Καμία πόλη σφραγισμένη ακόμα.'
        : n === 1
          ? 'Μία πόλη σφραγισμένη: όλα τα μέρη της έχουν σφραγίδα.'
          : `${n} πόλεις σφραγισμένες: όλα τα μέρη τους έχουν σφραγίδα.`,
    en: (n: number) =>
      n === 0
        ? 'No city sealed yet.'
        : n === 1
          ? 'One city sealed: every place in it stamped.'
          : `${n} cities sealed: every place in them stamped.`,
    de: (n: number) =>
      n === 0
        ? 'Noch keine Stadt gestempelt.'
        : n === 1
          ? 'Eine Stadt gestempelt: jeder Ort darin hat seinen Stempel.'
          : `${n} Städte gestempelt: jeder Ort darin hat seinen Stempel.`,
    fr: (n: number) =>
      n === 0
        ? 'Pas encore de ville tamponnée.'
        : n === 1
          ? 'Une ville tamponnée : chacun de ses lieux a son tampon.'
          : `${n} villes tamponnées : chacun de leurs lieux a son tampon.`,
    es: (n: number) =>
      n === 0
        ? 'Todavía ninguna ciudad sellada.'
        : n === 1
          ? 'Una ciudad sellada: todos sus lugares tienen sello.'
          : `${n} ciudades selladas: todos sus lugares tienen sello.`,
    it: (n: number) =>
      n === 0
        ? 'Ancora nessuna città timbrata.'
        : n === 1
          ? 'Una città timbrata: ogni suo luogo ha il timbro.'
          : `${n} città timbrate: ogni loro luogo ha il timbro.`,
  },
  // The one definition of "mission" on this page. See passportStats.ts.
  missionsDefined: {
    el: 'Μέρη με σφραγίδα, εκθέματα που βρήκες, γρίφοι που έλυσες και διαδρομές που τελείωσες, όλα μαζί.',
    en: 'Places stamped, exhibits found, riddles solved and trails finished, all added together.',
    de: 'Gestempelte Orte, gefundene Objekte, gelöste Rätsel und geschaffte Routen, alles zusammengezählt.',
    fr: 'Les lieux tamponnés, les objets trouvés, les énigmes résolues et les parcours terminés, tout additionné.',
    es: 'Lugares sellados, objetos encontrados, acertijos resueltos y rutas terminadas, todo sumado.',
    it: 'Luoghi timbrati, oggetti trovati, indovinelli risolti e percorsi finiti, tutti insieme.',
  },
  // The plural sits on a different word in each language: Greek and Spanish on the
  // total, French and Italian on the count. Each branch is a finished sentence.
  correctFirstTry: {
    el: (c: number, t: number) =>
      t === 1
        ? `Απάντησες σωστά με την πρώτη σε ${c} από 1 ερώτηση.`
        : `Απάντησες σωστά με την πρώτη σε ${c} από ${t} ερωτήσεις.`,
    en: (c: number, t: number) =>
      t === 1
        ? `You answered ${c} of 1 question right on the first try.`
        : `You answered ${c} of ${t} questions right on the first try.`,
    de: (c: number, t: number) =>
      t === 1
        ? `Du hast ${c} von 1 Frage beim ersten Versuch richtig beantwortet.`
        : `Du hast ${c} von ${t} Fragen beim ersten Versuch richtig beantwortet.`,
    fr: (c: number, t: number) =>
      c > 1
        ? `Tu as répondu juste du premier coup à ${c} questions sur ${t}.`
        : `Tu as répondu juste du premier coup à ${c} question sur ${t}.`,
    es: (c: number, t: number) =>
      t === 1
        ? `Acertaste a la primera ${c} de 1 pregunta.`
        : `Acertaste a la primera ${c} de ${t} preguntas.`,
    it: (c: number, t: number) =>
      c === 1
        ? `Hai risposto bene al primo colpo a 1 domanda su ${t}.`
        : `Hai risposto bene al primo colpo a ${c} domande su ${t}.`,
  },
  // «I'm here!» is quoted exactly as PlaceCard's button prints it in each language.
  whereNote: {
    el: 'Επί τόπου σημαίνει ότι πάτησες «Είμαι εδώ!» μπροστά στο μέρος. Από το σπίτι σημαίνει ότι διάβασες την ιστορία στον καναπέ.',
    en: 'On site means you tapped «I’m here!» standing at the place. At home means you read the story on the sofa.',
    de: 'Vor Ort heißt, du hast «Ich bin da!» direkt am Ort gedrückt. Von zu Hause heißt, du hast die Geschichte auf dem Sofa gelesen.',
    fr: 'Sur place veut dire que tu as touché « Je suis là ! » devant le lieu. À la maison veut dire que tu as lu l’histoire sur le canapé.',
    es: 'En el lugar significa que tocaste «¡Estoy aquí!» delante del sitio. En casa significa que leíste la historia en el sofá.',
    it: 'Sul posto vuol dire che hai toccato «Sono qui!» davanti al luogo. Da casa vuol dire che hai letto la storia sul divano.',
  },
  // Stamps from before the flag existed. Unknown — some of those were walked — so the
  // page says so rather than quietly filing them under "at home".
  unknownSite: {
    el: (n: number) =>
      n === 1
        ? 'Μία σφραγίδα μπήκε πριν αρχίσει το διαβατήριο να σημειώνει πού ήσουν.'
        : `${n} σφραγίδες μπήκαν πριν αρχίσει το διαβατήριο να σημειώνει πού ήσουν.`,
    en: (n: number) =>
      n === 1
        ? 'One stamp went in before the passport started noting where you were.'
        : `${n} stamps went in before the passport started noting where you were.`,
    de: (n: number) =>
      n === 1
        ? 'Ein Stempel kam hinein, bevor der Reisepass festhielt, wo du warst.'
        : `${n} Stempel kamen hinein, bevor der Reisepass festhielt, wo du warst.`,
    fr: (n: number) =>
      n === 1
        ? 'Un tampon est arrivé avant que le passeport note où tu étais.'
        : `${n} tampons sont arrivés avant que le passeport note où tu étais.`,
    es: (n: number) =>
      n === 1
        ? 'Un sello entró antes de que el pasaporte apuntara dónde estabas.'
        : `${n} sellos entraron antes de que el pasaporte apuntara dónde estabas.`,
    it: (n: number) =>
      n === 1
        ? 'Un timbro è entrato prima che il passaporto segnasse dove eri.'
        : `${n} timbri sono entrati prima che il passaporto segnasse dove eri.`,
  },
  // Under the best city: how much of it is done. `total` is 0 when the registry does
  // not know the city, and then only the stamps are named.
  bestCityLine: {
    el: (n: number, t: number) =>
      t === 0
        ? n === 1
          ? 'Μία σφραγίδα εδώ.'
          : `${n} σφραγίδες εδώ.`
        : t === 1
          ? `${n} από 1 μέρος με σφραγίδα.`
          : `${n} από ${t} μέρη με σφραγίδα.`,
    en: (n: number, t: number) =>
      t === 0
        ? n === 1
          ? 'One stamp here.'
          : `${n} stamps here.`
        : t === 1
          ? `${n} of 1 place stamped.`
          : `${n} of ${t} places stamped.`,
    de: (n: number, t: number) =>
      t === 0
        ? n === 1
          ? 'Ein Stempel hier.'
          : `${n} Stempel hier.`
        : t === 1
          ? `${n} von 1 Ort gestempelt.`
          : `${n} von ${t} Orten gestempelt.`,
    fr: (n: number, t: number) =>
      t === 0
        ? n > 1
          ? `${n} tampons ici.`
          : 'Un tampon ici.'
        : n > 1
          ? `${n} lieux tamponnés sur ${t}.`
          : `${n} lieu tamponné sur ${t}.`,
    es: (n: number, t: number) =>
      t === 0
        ? n === 1
          ? 'Un sello aquí.'
          : `${n} sellos aquí.`
        : t === 1
          ? `${n} de 1 lugar sellado.`
          : `${n} de ${t} lugares sellados.`,
    it: (n: number, t: number) =>
      t === 0
        ? n === 1
          ? 'Un timbro qui.'
          : `${n} timbri qui.`
        : n === 1
          ? `1 luogo timbrato su ${t}.`
          : `${n} luoghi timbrati su ${t}.`,
  },
  // Days since the first stamp. Today and yesterday get their own words: "0 days ago"
  // is not something a child says.
  since: {
    el: (n: number) =>
      n === 0
        ? 'Η πρώτη σου σφραγίδα μπήκε σήμερα!'
        : n === 1
          ? 'Η πρώτη σου σφραγίδα μπήκε χθες.'
          : `Η πρώτη σου σφραγίδα μπήκε πριν από ${n} ημέρες.`,
    en: (n: number) =>
      n === 0
        ? 'Your first stamp went in today!'
        : n === 1
          ? 'Your first stamp went in yesterday.'
          : `Your first stamp went in ${n} days ago.`,
    de: (n: number) =>
      n === 0
        ? 'Dein erster Stempel kam heute hinein!'
        : n === 1
          ? 'Dein erster Stempel kam gestern hinein.'
          : `Dein erster Stempel kam vor ${n} Tagen hinein.`,
    fr: (n: number) =>
      n === 0
        ? 'Ton premier tampon est arrivé aujourd’hui !'
        : n === 1
          ? 'Ton premier tampon est arrivé hier.'
          : `Ton premier tampon est arrivé il y a ${n} jours.`,
    es: (n: number) =>
      n === 0
        ? '¡Tu primer sello entró hoy!'
        : n === 1
          ? 'Tu primer sello entró ayer.'
          : `Tu primer sello entró hace ${n} días.`,
    it: (n: number) =>
      n === 0
        ? 'Il tuo primo timbro è entrato oggi!'
        : n === 1
          ? 'Il tuo primo timbro è entrato ieri.'
          : `Il tuo primo timbro è entrato ${n} giorni fa.`,
  },
  // One row per country. Four shapes: entered with nothing yet, one city, many cities.
  countryRow: {
    el: (s: number, c: number) =>
      s === 0
        ? 'Μπήκες, αλλά καμία σφραγίδα ακόμα.'
        : c === 1
          ? s === 1
            ? '1 σφραγίδα σε 1 πόλη.'
            : `${s} σφραγίδες σε 1 πόλη.`
          : `${s} σφραγίδες σε ${c} πόλεις.`,
    en: (s: number, c: number) =>
      s === 0
        ? 'Entered, no stamp yet.'
        : c === 1
          ? s === 1
            ? '1 stamp in 1 city.'
            : `${s} stamps in 1 city.`
          : `${s} stamps in ${c} cities.`,
    de: (s: number, c: number) =>
      s === 0
        ? 'Betreten, noch kein Stempel.'
        : c === 1
          ? s === 1
            ? '1 Stempel in 1 Stadt.'
            : `${s} Stempel in 1 Stadt.`
          : `${s} Stempel in ${c} Städten.`,
    fr: (s: number, c: number) =>
      s === 0
        ? 'Entré, pas encore de tampon.'
        : c === 1
          ? s === 1
            ? '1 tampon dans 1 ville.'
            : `${s} tampons dans 1 ville.`
          : `${s} tampons dans ${c} villes.`,
    es: (s: number, c: number) =>
      s === 0
        ? 'Entraste, pero todavía sin sello.'
        : c === 1
          ? s === 1
            ? '1 sello en 1 ciudad.'
            : `${s} sellos en 1 ciudad.`
          : `${s} sellos en ${c} ciudades.`,
    it: (s: number, c: number) =>
      s === 0
        ? 'Sei entrato, ma ancora nessun timbro.'
        : c === 1
          ? s === 1
            ? '1 timbro in 1 città.'
            : `${s} timbri in 1 città.`
          : `${s} timbri in ${c} città.`,
  },
  // The §28 line, in the child's words, for the parent reading over their shoulder.
  privacy: {
    el: 'Το διαβατήριο δεν κρατάει πού βρέθηκες. Κάθε αριθμός εδώ βγαίνει μόνο από τις σφραγίδες σου.',
    en: 'The passport keeps no record of where you were. Every number here comes from your stamps alone.',
    de: 'Der Reisepass merkt sich nicht, wo du warst. Jede Zahl hier kommt allein aus deinen Stempeln.',
    fr: 'Le passeport ne garde pas trace d’où tu étais. Chaque chiffre ici vient seulement de tes tampons.',
    es: 'El pasaporte no guarda dónde estuviste. Cada número de aquí sale solo de tus sellos.',
    it: 'Il passaporto non tiene traccia di dove sei stato. Ogni numero qui viene solo dai tuoi timbri.',
  },
};

// ------------------------------------------------------------------ pieces

/** One number with its caption — the same tile the book's cover draws, plus room for a note. */
const Tile: React.FC<{
  icon: React.ReactNode;
  value: number;
  label: string;
  note?: React.ReactNode;
  tone?: 'plain' | 'earned';
}> = ({ icon, value, label, note, tone = 'plain' }) => (
  <div
    className={
      tone === 'earned'
        ? `rounded-2xl border px-3 py-3.5 ${WORLD_STYLE.earned}`
        : `${WORLD_STYLE.card} px-3 py-3.5`
    }
  >
    <div className="flex items-center gap-2 text-white/40">
      {icon}
      <span className={`${WORLD_STYLE.label} min-w-0 truncate`}>{label}</span>
    </div>
    <div className={`${WORLD_STYLE.display} mt-2 text-3xl sm:text-4xl`}>{value}</div>
    {note && <div className="mt-1.5 text-[11px] font-bold leading-relaxed text-white/45">{note}</div>}
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-7">
    <h2 className={`${WORLD_STYLE.label} mb-3 block`}>{title}</h2>
    {children}
  </section>
);

// -------------------------------------------------------------------- page

const PassportStatsPage: React.FC<PassportStatsProps> = ({ lang, stats, countries, cities }) => {
  const reduced = useReducedMotion();
  const all = Array.isArray(countries) ? countries : [];
  const cityList = Array.isArray(cities) ? cities : [];

  const best = stats.bestCity ? cityList.find((city) => city.id === stats.bestCity?.cityId) : undefined;
  // The two known halves of the bar; the unknown third is named in a sentence below it,
  // not drawn, because a bar with a grey "we don't know" segment reads as a bug.
  const known = stats.onSite + stats.atHome;
  const onSitePct = known > 0 ? Math.round((stats.onSite / known) * 100) : 0;

  return (
    <motion.div
      lang={lang}
      initial={{ opacity: 0, y: reduced ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.4 }}
    >
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5 text-center sm:p-8">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl"
          aria-hidden
        />
        <p className={WORLD_STYLE.label}>{ui(T.kicker, lang)}</p>
        <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-[1.25rem] border-2 border-white/20 bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl">
          <BarChart3 size={30} className="text-white" aria-hidden />
        </div>
        <h1 className={`${WORLD_STYLE.display} mt-4 text-3xl uppercase sm:text-4xl`}>
          {ui(S.title, lang)}
        </h1>
        <p className="mt-2 text-sm font-bold italic text-white/50">{ui(S.subtitle, lang)}</p>
      </section>

      {isEmptyPassport(stats) ? (
        <div className={`${WORLD_STYLE.card} mt-6 px-5 py-10 text-center`}>
          <div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-white/15"
            aria-hidden
          >
            <Globe size={26} className="text-white/20" />
          </div>
          <p className="mx-auto max-w-sm text-sm font-bold italic leading-relaxed text-white/50">
            {ui(S.empty, lang)}
          </p>
        </div>
      ) : (
        <>
          {/* ── JOURNEY: countries and cities, each with both of its numbers ── */}
          <Section title={ui(T.journey, lang)}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              <Tile
                icon={<Globe size={14} aria-hidden />}
                value={stats.countriesEntered}
                label={ui(T.countries, lang)}
                note={
                  <>
                    <span className="block">{ui(S.ofWorld, lang)(WORLD_COUNTRY_COUNT, all.length)}</span>
                    {stats.countriesSealed > 0 && (
                      <span className="mt-1 block text-emerald-300/80">
                        {ui(S.countriesSealed, lang)(stats.countriesSealed)}
                      </span>
                    )}
                  </>
                }
              />
              <Tile
                icon={<Building2 size={14} aria-hidden />}
                value={stats.citiesVisited}
                label={ui(T.cities, lang)}
                note={
                  <>
                    <span className="block">{ui(S.citiesVisited, lang)}</span>
                    <span
                      className={`mt-1 block ${stats.citiesSealed > 0 ? 'text-emerald-300/80' : ''}`}
                    >
                      {ui(S.citiesSealed, lang)(stats.citiesSealed)}
                    </span>
                  </>
                }
              />
            </div>
          </Section>

          {/* ── MISSIONS: the total, then the four things it is made of ── */}
          <Section title={ui(T.missions, lang)}>
            <div className={`${WORLD_STYLE.card} px-4 py-4`}>
              <div className="flex items-end gap-3">
                <div className={`${WORLD_STYLE.display} text-5xl`}>{stats.missions}</div>
                <p className="mb-1 min-w-0 flex-1 text-[11px] font-bold leading-relaxed text-white/45">
                  {ui(S.missionsDefined, lang)}
                </p>
              </div>
              {/* Label above, number below: side by side the Greek and German words for
                  "trails" and "exhibits" do not fit a half-width row on a 375px screen. */}
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {(
                  [
                    [<MapPin key="p" size={14} aria-hidden />, stats.placesStamped, T.places],
                    [<Landmark key="e" size={14} aria-hidden />, stats.exhibitsAnswered, T.exhibits],
                    [<Puzzle key="r" size={14} aria-hidden />, stats.riddlesSolved, T.riddles],
                    [<Route key="t" size={14} aria-hidden />, stats.trailsDone, T.trails],
                  ] as const
                ).map(([icon, value, label]) => (
                  <li
                    key={label.en}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5"
                  >
                    <span className="flex min-w-0 items-center gap-2 text-white/40">
                      {icon}
                      <span className={`${WORLD_STYLE.label} truncate`}>{ui(label, lang)}</span>
                    </span>
                    <span className={`${WORLD_STYLE.display} mt-1.5 block text-2xl`}>{value}</span>
                  </li>
                ))}
              </ul>
              {stats.placesStamped > 0 && (
                <p className="mt-3 text-[11px] font-bold leading-relaxed text-white/45">
                  {ui(S.correctFirstTry, lang)(stats.correct, stats.placesStamped)}
                </p>
              )}
            </div>
          </Section>

          {/* ── WHERE: on site against at home, from the one boolean the stamp keeps ── */}
          {stats.placesStamped > 0 && (
            <Section title={ui(T.where, lang)}>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Tile
                  icon={<Footprints size={14} aria-hidden />}
                  value={stats.onSite}
                  label={ui(T.onSite, lang)}
                  tone={stats.onSite > 0 ? 'earned' : 'plain'}
                />
                <Tile
                  icon={<Sofa size={14} aria-hidden />}
                  value={stats.atHome}
                  label={ui(T.atHome, lang)}
                />
              </div>
              {known > 0 && (
                <div
                  className="mt-2 flex h-2 w-full overflow-hidden rounded-full bg-white/[0.06]"
                  role="img"
                  aria-label={`${ui(T.onSite, lang)} ${stats.onSite} · ${ui(T.atHome, lang)} ${stats.atHome}`}
                >
                  <div className="h-full bg-emerald-400/70" style={{ width: `${onSitePct}%` }} />
                </div>
              )}
              <p className="mt-2 text-[11px] font-bold leading-relaxed text-white/40">
                {ui(S.whereNote, lang)}
              </p>
              {stats.unknownSite > 0 && (
                <p className="mt-1.5 text-[11px] font-bold leading-relaxed text-white/40">
                  {ui(S.unknownSite, lang)(stats.unknownSite)}
                </p>
              )}
            </Section>
          )}

          {/* ── BEST CITY and FIRST STAMP, side by side where the screen allows ── */}
          {(stats.bestCity || stats.firstStampAt) && (
            <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              {stats.bestCity && (
                <section>
                  <h2 className={`${WORLD_STYLE.label} mb-3 block`}>{ui(T.bestCity, lang)}</h2>
                  <div className={`${WORLD_STYLE.card} flex items-center gap-3 px-4 py-3.5`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl">
                      <span aria-hidden>{best?.emoji ?? <Trophy size={20} className="text-amber-300" />}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-base font-black text-white/85">
                        {best ? say(best.name, lang) : stats.bestCity.cityId}
                      </div>
                      <div className="mt-0.5 text-[11px] font-bold leading-relaxed text-white/45">
                        {ui(S.bestCityLine, lang)(stats.bestCity.stamps, stats.bestCity.total)}
                      </div>
                    </div>
                    <div className={`${WORLD_STYLE.display} shrink-0 text-3xl`}>{stats.bestCity.stamps}</div>
                  </div>
                </section>
              )}
              {stats.firstStampAt && (
                <section>
                  <h2 className={`${WORLD_STYLE.label} mb-3 block`}>{ui(T.firstStamp, lang)}</h2>
                  <div className={`${WORLD_STYLE.card} flex items-center gap-3 px-4 py-3.5`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/50">
                      <CalendarDays size={22} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-base font-black text-white/85">
                        {formatIsoDate(stats.firstStampAt, lang)}
                      </div>
                      {stats.daysSince !== null && (
                        <div className="mt-0.5 text-[11px] font-bold leading-relaxed text-white/45">
                          {ui(S.since, lang)(stats.daysSince)}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )}
            </div>
          )}

          {/* ── PER COUNTRY: the small list, most stamps first ── */}
          {stats.perCountry.length > 0 && (
            <Section title={ui(T.perCountry, lang)}>
              <ul className="space-y-2">
                {stats.perCountry.map((row) => {
                  const country = all.find((c) => c.id === row.countryId);
                  return (
                    <li
                      key={row.countryId}
                      className={`${WORLD_STYLE.card} flex items-center gap-3 px-4 py-3`}
                    >
                      <span className="text-2xl leading-none" aria-hidden>
                        {country?.flag ?? <Compass size={20} className="text-white/40" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-black text-white/80">
                          {country ? say(country.name, lang) : row.countryId}
                        </div>
                        <div className="text-[11px] font-bold leading-relaxed text-white/45">
                          {ui(S.countryRow, lang)(row.stamps, row.cities)}
                        </div>
                      </div>
                      <div className={`${WORLD_STYLE.display} shrink-0 text-2xl`}>{row.stamps}</div>
                    </li>
                  );
                })}
              </ul>
            </Section>
          )}
        </>
      )}

      <p className="mt-7 text-center text-[11px] font-bold italic leading-relaxed text-white/35">
        {ui(S.privacy, lang)}
      </p>
    </motion.div>
  );
};

export default PassportStatsPage;
