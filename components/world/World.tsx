/**
 * WISEBOT WORLD — «πήρες τη σφραγίδα της χώρας» σε μία διαδρομή.
 * =============================================================
 * The only file App.tsx imports from this module. It owns the module's routing, its
 * six-language choice, and the wiring between the screens and the passport; every
 * screen below it is presentational and awards nothing on its own.
 *
 * Route shape, deliberately different from GameCenter's `?g=` query parameter: a game
 * is a mode, but a place is a page worth a shared link and a back gesture.
 *
 *   /world                                  the countries
 *   /world/passport                         the stamp book
 *   /world/:countryId                       one country and its cities
 *   /world/:countryId/:cityId               the city map and its places
 *   /world/:countryId/:cityId/:placeId      one place
 *   /world/:countryId/:cityId/:placeId/in   inside a museum
 *
 * Every award in this module costs the child something real. The country entry stamp used
 * to be the exception — it fired on arriving at a country's URL, so twenty-five countries
 * could be collected from the sofa in a minute. It now asks the phone where it is and
 * inks only if the answer is inside the country, the same bargain «Είμαι εδώ!» makes for
 * a place. Reading is never gated; only the stamp is.
 *
 * All of it is safe under React 19 StrictMode's double-invoked effects for the same
 * reason: `useWorldProgress` decides from a ref that has already been written, so a
 * second call returns null and pays nothing.
 */

import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Check, Globe, Loader2 } from 'lucide-react';

import {
  AVAILABLE_LANGS,
  CITIES,
  CITY_IDS,
  COUNTRIES,
  citiesOf,
  findCity,
  findCountry,
  loadCountries,
  loadCity,
  PLACE_COUNTS,
  translationsFor,
} from '../../data/world/registry';
import type {
  City,
  CityId,
  CityModule,
  Country,
  CountryId,
  LocText,
  Place,
  PlaceId,
  WorldLang,
} from '../../data/world/types';
import {
  LANG_LABELS,
  WORLD_STYLE,
  WorldLangContext,
  initialWorldLang,
  rememberWorldLang,
  ui,
  type UiText,
} from './worldUi';
import { COUNTRY_RADIUS_M, isNearAny, locateOnce, type GeoError } from '../../utils/geo';
import { today, useWorldProgress } from './useWorldProgress';
import { StampCeremony } from './PassportStamp';
import { CountryList, CountryView } from './CountryScreens';
import SealCeremony from './SealCeremony';
import { AnotherOne, saidEnoughToday } from './AnotherOne';
// Per-page title, description, canonical and JSON-LD, from the same functions the
// build-time prerender uses — so what Googlebot renders matches what it fetched.
import { WorldSeo } from './WorldSeo';
import { cityMeta, countryMeta, placeMeta, seoLang, worldMeta } from '../../data/world/seo';
// The older Explorer's city list, read only to bridge a country that has no World city
// yet to the cities it already has over there. Goes away when the last city has moved.
import { CITY_META as EXPLORER_CITIES } from '../../data/explore/registry';

const StampBook = React.lazy(() => import('./StampBook'));
const CityView = React.lazy(() => import('./CityView'));
const PlaceCard = React.lazy(() => import('./PlaceCard'));
const MuseumView = React.lazy(() => import('./MuseumView'));

const T = {
  /**
   * The product's name, not a translation of it. «Ο Κόσμος» reads as a generic noun in
   * a menu of generic nouns; "WiseBot World" is the thing a child asks for by name and
   * a parent searches for. The localised phrase survives underneath as the subtitle,
   * which is where a description belongs.
   */
  title: {
    el: 'WISEBOT WORLD',
    en: 'WISEBOT WORLD',
    de: 'WISEBOT WORLD',
    fr: 'WISEBOT WORLD',
    es: 'WISEBOT WORLD',
    it: 'WISEBOT WORLD',
  },
  subtitle: {
    el: 'Ο Κόσμος',
    en: 'The World',
    de: 'Die Welt',
    fr: 'Le Monde',
    es: 'El Mundo',
    it: 'Il Mondo',
  },
  loading: {
    el: 'Φορτώνει…',
    en: 'Loading…',
    de: 'Lädt…',
    fr: 'Chargement…',
    es: 'Cargando…',
    it: 'Caricamento…',
  },
  notFound: {
    el: 'Δεν βρήκαμε αυτό το μέρος. Γύρνα πίσω στον χάρτη.',
    en: 'We could not find that place. Go back to the map.',
    de: 'Wir haben diesen Ort nicht gefunden. Geh zurück zur Karte.',
    fr: "On n'a pas trouvé cet endroit. Retourne à la carte.",
    es: 'No encontramos ese lugar. Vuelve al mapa.',
    it: 'Non abbiamo trovato questo posto. Torna alla mappa.',
  },
  back: { el: 'Πίσω', en: 'Back', de: 'Zurück', fr: 'Retour', es: 'Volver', it: 'Indietro' },
  langLabel: { el: 'Γλώσσα', en: 'Language', de: 'Sprache', fr: 'Langue', es: 'Idioma', it: 'Lingua' },
  notTranslated: {
    el: 'Αυτή η πόλη δεν έχει μεταφραστεί ακόμα. Τη διαβάζεις στα αγγλικά.',
    en: 'This city has not been translated yet. You are reading it in English.',
    de: 'Diese Stadt ist noch nicht übersetzt. Du liest sie auf Englisch.',
    fr: "Cette ville n'est pas encore traduite. Tu la lis en anglais.",
    es: 'Esta ciudad aún no está traducida. La estás leyendo en inglés.',
    it: 'Questa città non è ancora tradotta. La stai leggendo in inglese.',
  },
  imInCountry: {
    el: 'ΕΙΜΑΙ ΕΔΩ!',
    en: 'I’M HERE!',
    de: 'ICH BIN DA!',
    fr: 'JE SUIS LÀ !',
    es: '¡ESTOY AQUÍ!',
    it: 'SONO QUI!',
  },
  locating: {
    el: 'ΨΑΧΝΩ…',
    en: 'LOOKING…',
    de: 'SUCHE…',
    fr: 'JE CHERCHE…',
    es: 'BUSCANDO…',
    it: 'CERCO…',
  },
};

/**
 * What the country page says under the button, for every way asking can end.
 *
 * None of these is a telling-off. A child reading about Japan from a bedroom in Athens
 * has done nothing wrong — they simply have not earned a border stamp, and the sentence
 * says only that. The country, its cities and every story stay open either way.
 */
const ENTRY_NOTE: Record<EntryOutcome | 'idle', UiText<string>> = {
  idle: {
    el: 'Η σφραγίδα εισόδου μπαίνει όταν είσαι στη χώρα.',
    en: 'The entry stamp is inked when you are in the country.',
    de: 'Der Einreisestempel kommt, wenn du im Land bist.',
    fr: 'Le tampon d’entrée arrive quand tu es dans le pays.',
    es: 'El sello de entrada se pone cuando estás en el país.',
    it: 'Il timbro d’ingresso arriva quando sei nel Paese.',
  },
  far: {
    el: 'Δεν είσαι σε αυτή τη χώρα αυτή τη στιγμή. Η σφραγίδα σε περιμένει εκεί.',
    en: 'You are not in this country right now. The stamp is waiting for you there.',
    de: 'Du bist gerade nicht in diesem Land. Der Stempel wartet dort auf dich.',
    fr: 'Tu n’es pas dans ce pays en ce moment. Le tampon t’attend là-bas.',
    es: 'Ahora mismo no estás en este país. El sello te espera allí.',
    it: 'In questo momento non sei in questo Paese. Il timbro ti aspetta lì.',
  },
  denied: {
    el: 'Χρειάζομαι άδεια για την τοποθεσία μόνο για αυτή τη στιγμή. Δεν αποθηκεύεται ποτέ.',
    en: 'I need location permission just for this moment. It is never stored.',
    de: 'Ich brauche die Standortfreigabe nur für diesen Moment. Sie wird nie gespeichert.',
    fr: 'J’ai besoin de la position juste pour cet instant. Elle n’est jamais enregistrée.',
    es: 'Necesito el permiso de ubicación solo para este momento. Nunca se guarda.',
    it: 'Mi serve il permesso di posizione solo per questo momento. Non viene mai salvata.',
  },
  unavailable: {
    el: 'Το τηλέφωνο δεν βρήκε πού είσαι. Δοκίμασε ξανά σε λίγο.',
    en: 'The phone could not find where you are. Try again in a moment.',
    de: 'Das Handy hat nicht gefunden, wo du bist. Versuch es gleich noch einmal.',
    fr: 'Le téléphone n’a pas trouvé où tu es. Réessaie dans un instant.',
    es: 'El teléfono no encontró dónde estás. Inténtalo de nuevo en un momento.',
    it: 'Il telefono non ha trovato dove sei. Riprova tra poco.',
  },
  timeout: {
    el: 'Το τηλέφωνο άργησε να απαντήσει. Δοκίμασε ξανά.',
    en: 'The phone took too long to answer. Try again.',
    de: 'Das Handy hat zu lange gebraucht. Versuch es noch einmal.',
    fr: 'Le téléphone a mis trop de temps. Réessaie.',
    es: 'El teléfono tardó demasiado. Inténtalo otra vez.',
    it: 'Il telefono ci ha messo troppo. Riprova.',
  },
  unsupported: {
    el: 'Αυτή η συσκευή δεν μπορεί να πει πού είναι.',
    en: 'This device cannot tell where it is.',
    de: 'Dieses Gerät kann nicht sagen, wo es ist.',
    fr: 'Cet appareil ne peut pas dire où il est.',
    es: 'Este dispositivo no puede decir dónde está.',
    it: 'Questo dispositivo non può dire dove si trova.',
  },
  noCities: {
    el: 'Η σφραγίδα αυτής της χώρας μπαίνει όταν ανοίξει η πρώτη της πόλη.',
    en: 'This country’s stamp arrives when its first city opens.',
    de: 'Der Stempel dieses Landes kommt, wenn seine erste Stadt öffnet.',
    fr: 'Le tampon de ce pays arrivera à l’ouverture de sa première ville.',
    es: 'El sello de este país llegará cuando abra su primera ciudad.',
    it: 'Il timbro di questo Paese arriverà quando aprirà la sua prima città.',
  },
  stamped: {
    el: 'Πήρες τη σφραγίδα!',
    en: 'You earned the stamp!',
    de: 'Du hast den Stempel bekommen!',
    fr: 'Tu as eu le tampon !',
    es: '¡Conseguiste el sello!',
    it: 'Hai preso il timbro!',
  },
  already: {
    el: 'Έχεις ήδη τη σφραγίδα αυτής της χώρας.',
    en: 'You already have this country’s stamp.',
    de: 'Du hast den Stempel dieses Landes schon.',
    fr: 'Tu as déjà le tampon de ce pays.',
    es: 'Ya tienes el sello de este país.',
    it: 'Hai già il timbro di questo Paese.',
  },
};

// ------------------------------------------------------------------ content

interface WorldContent {
  countries: Country[];
  cities: City[];
  placeCounts: Record<CityId, number>;
  load: (cityId: CityId, lang?: WorldLang) => Promise<CityModule>;
}

const REGISTRY_CONTENT: WorldContent = {
  countries: COUNTRIES,
  cities: CITIES,
  placeCounts: PLACE_COUNTS,
  load: loadCity,
};

/**
 * While the content session is still writing the first city the registry is empty, so
 * in development only the module falls back to `data/world/__fixtures__/sample.ts` —
 * a whole fake country that exercises every screen. `import.meta.env.DEV` is replaced
 * by `false` in a production build, so the branch and its dynamic import are dropped
 * from the bundle entirely.
 */
function useWorldContent(lang: WorldLang): WorldContent {
  const [content, setContent] = useState<WorldContent>(REGISTRY_CONTENT);

  // The front door in the child's language: country names, country intros and the name
  // and intro of every city card. One small file per language, because this screen
  // draws every country and every city at once — twenty separate requests to render
  // one list would be a visible stagger. Falls back to what the modules carry.
  useEffect(() => {
    if (COUNTRIES.length === 0) return undefined;
    let alive = true;
    loadCountries(lang)
      .then(({ countries, cities }) => {
        if (alive) setContent((prev) => ({ ...prev, countries, cities }));
      })
      .catch(() => {
        /* no front door in this language yet — English is the honest fallback */
      });
    return () => {
      alive = false;
    };
  }, [lang]);

  useEffect(() => {
    if (!import.meta.env.DEV || COUNTRIES.length > 0) return;
    let alive = true;
    import('../../data/world/__fixtures__/sample')
      .then((mod) => {
        if (!alive) return;
        setContent({
          countries: [mod.country],
          cities: mod.cities,
          placeCounts: { [mod.cities[0].id]: mod.places.length },
          load: async () => ({ places: mod.places, trails: mod.trails }),
        });
      })
      .catch(() => {
        /* no fixture, no problem — the empty state is a real state */
      });
    return () => {
      alive = false;
    };
  }, []);

  return content;
}

/**
 * One city's places and trails, loaded on demand and kept for the visit.
 *
 * Keyed by language as well as by city: Greek and English come out of the city module,
 * and every other language pulls its own overlay chunk on top. Switching language
 * therefore reloads, which is the point — a German child should not be downloading the
 * German text for cities they never open.
 */
function useCityContent(content: WorldContent, cityId?: CityId, lang?: WorldLang) {
  const [state, setState] = useState<{
    key?: string;
    module?: CityModule;
    failed?: boolean;
  }>({});
  const key = cityId ? `${cityId}.${lang}` : undefined;

  useEffect(() => {
    if (!cityId || !key) return;
    let alive = true;
    setState((prev) => (prev.key === key ? prev : {}));
    content
      .load(cityId, lang)
      .then((module) => alive && setState({ key, module }))
      .catch(() => alive && setState({ key, failed: true }));
    return () => {
      alive = false;
    };
  }, [content, cityId, lang, key]);

  return state.key === key ? state : {};
}

// -------------------------------------------------------------------- chrome

const Loading: React.FC<{ lang: WorldLang }> = ({ lang }) => (
  <div className="flex items-center justify-center py-24 text-white/50">
    <Loader2 size={20} className="animate-spin mr-3" />
    <span className={WORLD_STYLE.label}>{ui(T.loading, lang)}</span>
  </div>
);

const NotFound: React.FC<{ lang: WorldLang; onBack: () => void }> = ({ lang, onBack }) => (
  <div className={`${WORLD_STYLE.card} p-8 text-center max-w-md mx-auto`}>
    <div className="text-4xl mb-3" aria-hidden="true">
      🧭
    </div>
    <p className={`${WORLD_STYLE.body} mb-5`}>{ui(T.notFound, lang)}</p>
    <button type="button" onClick={onBack} className={WORLD_STYLE.ghost}>
      {ui(T.back, lang)}
    </button>
  </div>
);

/**
 * Only languages that have something behind them.
 *
 * Greek and English are in every city module. The other four appear once at least one
 * overlay exists, and an overlay that is missing a single string fails the test suite,
 * so a language offered here is finished for the cities it covers. A city it does not
 * cover falls back to English, which is honest; a lit-up German flag over a page that
 * is entirely in English is not — it reads as broken rather than as unfinished.
 */
const LangSwitcher: React.FC<{
  lang: WorldLang;
  available: WorldLang[];
  onChange: (lang: WorldLang) => void;
}> = ({ lang, available, onChange }) => {
  /**
   * One button, not six.
   *
   * Six chips wrapped onto two rows on a phone and cost 92 of the 812 points a child
   * has — more than the city's name, the map and the first place put together, spent on
   * a choice most families make once and never revisit. The brief asks for this in so
   * many words: «Όχι 30 σημαίες. 🌐 selector».
   */
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const current = LANG_LABELS[lang];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={box}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ui(T.langLabel, lang)}
        className="min-h-[44px] flex items-center gap-2 px-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white text-xs font-black tracking-widest hover:bg-white/[0.1] transition-colors"
      >
        <Globe size={15} className="text-blue-400" aria-hidden="true" />
        <span aria-hidden="true">{current.flag}</span>
        {current.short}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ui(T.langLabel, lang)}
          className="absolute right-0 z-30 mt-2 min-w-[190px] overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0B0F1A] p-1 shadow-2xl"
        >
          {available.map((code) => {
            const meta = LANG_LABELS[code];
            const active = code === lang;
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(code);
                    setOpen(false);
                  }}
                  className={`flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-bold transition-colors ${
                    active ? 'bg-white/[0.12] text-white' : 'text-white/60 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  <span aria-hidden="true" className="text-base">
                    {meta.flag}
                  </span>
                  <span className="flex-1">{meta.name}</span>
                  {active && <Check size={15} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

// --------------------------------------------------------------------- pages

const CountriesPage: React.FC<{
  lang: WorldLang;
  content: WorldContent;
  progress: ReturnType<typeof useWorldProgress>;
}> = ({ lang, content, progress }) => {
  const navigate = useNavigate();

  const items = useMemo(
    () =>
      content.countries.map((country) => {
        const cities = content.cities.filter((c) => c.countryId === country.id);
        return {
          country,
          cityCount: cities.length,
          placeCount: cities.reduce((sum, c) => sum + (content.placeCounts[c.id] ?? 0), 0),
          entered: Boolean(progress.progress.entries[country.id]),
          done: progress.progress.countriesDone.includes(country.id),
        };
      }),
    [content, progress.progress],
  );

  return (
    <>
      <WorldSeo meta={worldMeta(content.countries, content.cities, content.placeCounts, seoLang(lang))} />
      <CountryList
        lang={lang}
        items={items}
        stampsCollected={Object.keys(progress.progress.places).length}
        onOpenCountry={(id) => navigate(`/world/${id}`)}
        onOpenPassport={() => navigate('/world/passport')}
      />
    </>
  );
};

const CountryPage: React.FC<{
  lang: WorldLang;
  content: WorldContent;
  progress: ReturnType<typeof useWorldProgress>;
}> = ({ lang, content, progress }) => {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();
  const country = content.countries.find((c) => c.id === countryId) ?? findCountry(countryId ?? '');
  const { attempt, asking } = useWorldEntry();
  const [outcome, setOutcome] = useState<EntryOutcome | null>(null);

  if (!country) return <NotFound lang={lang} onBack={() => navigate('/world')} />;

  // How many of each city's places are stamped, without loading a single city module.
  // Place ids are prefixed by their city id — `data/world/world.test.ts` enforces that
  // — so the passport's own keys are enough to count, and the country page stays as
  // cheap as the city list it sits above.
  const stampedIds = Object.keys(progress.progress.places);
  const cities = content.cities
    .filter((c) => c.countryId === country.id)
    .map((city) => ({
      city,
      placeCount: content.placeCounts[city.id] ?? 0,
      stamped: stampedIds.filter((id) => id.startsWith(`${city.id}-`)).length,
    }));

  // A country that is open but whose cities have not been converted yet still has
  // them on the old engine. Offer those, labelled, rather than an empty page.
  const legacyCities =
    cities.length === 0
      ? EXPLORER_CITIES.filter((c) => c.countryCode === country.code).map((c) => ({
          id: c.id,
          name: c.name,
          emoji: c.emoji,
          spotCount: c.spotCount,
        }))
      : [];

  return (
    <>
      <WorldSeo
        meta={countryMeta(
          country,
          cities.map((c) => c.city),
          content.placeCounts,
          seoLang(lang),
        )}
      />
      <CountryView
        lang={lang}
        country={country}
        entryDate={progress.progress.entries[country.id]}
        entry={{
          label: ui(T.imInCountry, lang),
          askingLabel: ui(T.locating, lang),
          note: ui(ENTRY_NOTE[outcome ?? 'idle'], lang),
          asking,
          onAsk: () => {
            void attempt(country).then(setOutcome);
          },
        }}
        cities={cities}
        legacyCities={legacyCities}
        onOpenCity={(id) => navigate(`/world/${country.id}/${id}`)}
        onOpenLegacy={(id) => navigate(`/explore?city=${id}`)}
        onBack={() => navigate('/world')}
      />
    </>
  );
};

/**
 * The entry stamp, and the moment that inks it.
 *
 * It used to land on arriving at the country's URL, which meant a child on the sofa
 * could collect twenty-five countries in a minute and the stamp meant nothing. A border
 * stamp has to cost a border. It now works the way «Είμαι εδώ!» works for a place: the
 * phone is asked where it is, and the stamp is inked only if the answer is inside the
 * country — within 150 km of a city we actually have content for.
 *
 * The position is compared in memory and thrown away, like every other location check in
 * this app. Nothing is stored, and a refusal costs the child nothing: the country, its
 * cities and every story stay open to read from anywhere.
 */
/**
 * Says so when the city on screen has not been translated into the language the child
 * picked.
 *
 * The switcher only offers languages that exist somewhere, and the build refuses a
 * half-translated city, so the one remaining honest gap is a city with no overlay at
 * all. That falls back to English, which is the right behaviour and the wrong silence:
 * a French child looking at an English page needs to be told it is not broken.
 */
const TranslationNote: React.FC<{ lang: WorldLang }> = ({ lang }) => {
  const { pathname } = useLocation();
  const cityId = pathname.split('/')[3];

  if (!cityId || lang === 'el' || lang === 'en') return null;
  if (!CITY_IDS.includes(cityId)) return null;
  if (translationsFor(cityId).includes(lang)) return null;

  return (
    <p className={`${WORLD_STYLE.label} mt-8 text-center`}>{ui(T.notTranslated, lang)}</p>
  );
};

/** What came of asking the phone where it is, for the screen that asked. */
export type EntryOutcome =
  /** Inked. The ceremony is already on screen. */
  | 'stamped'
  /** The child already had this country's stamp. */
  | 'already'
  /** The phone answered, and it is not in this country. */
  | 'far'
  /** This country has no city with content yet, so there is nothing to be near. */
  | 'noCities'
  /** The phone refused or could not answer. */
  | GeoError;

interface WorldEntry {
  /** Ask the phone, and ink the stamp if the answer is inside the country. */
  attempt: (country: Country) => Promise<EntryOutcome>;
  /** True while the phone is being asked, so a button can say «Ψάχνω…». */
  asking: boolean;
  /** Has this country's stamp already been earned? */
  entered: (countryId: CountryId) => boolean;
}

const WorldEntryContext = React.createContext<WorldEntry>({
  attempt: async () => 'unavailable',
  asking: false,
  entered: () => false,
});

export const useWorldEntry = (): WorldEntry => React.useContext(WorldEntryContext);

/**
 * Holds the one ceremony and owns the one place the entry stamp can be awarded.
 *
 * Two screens ask: the city page, the moment a child opens a city, because opening a
 * city in the country you are standing in is the honest moment; and the country page's
 * «Είμαι εδώ!» button, for a child who wants it before choosing a city.
 */
const CountryEntryProvider: React.FC<{
  content: WorldContent;
  progress: ReturnType<typeof useWorldProgress>;
  children: React.ReactNode;
}> = ({ content, progress, children }) => {
  const [ceremony, setCeremony] = useState<Country | null>(null);
  const [asking, setAsking] = useState(false);
  const { enterCountry, hasEntered } = progress;

  const attempt = useCallback(
    async (country: Country): Promise<EntryOutcome> => {
      if (hasEntered(country.id)) return 'already';

      // Only cities we actually have content for. A country whose cities are not written
      // yet has nothing to stand near, and saying so is more honest than a silent no.
      const centres = content.cities.filter((c) => c.countryId === country.id).map((c) => c.centre);
      if (centres.length === 0) return 'noCities';

      setAsking(true);
      try {
        const fix = await locateOnce();
        if (typeof fix === 'string') return fix;
        if (!isNearAny(fix, fix.accuracyM, centres, COUNTRY_RADIUS_M)) return 'far';

        const award = enterCountry(country);
        if (award?.enteredCountry) {
          setCeremony(award.enteredCountry);
          return 'stamped';
        }
        // Another screen got there first between the check and the award.
        return 'already';
      } finally {
        setAsking(false);
      }
    },
    [content, enterCountry, hasEntered],
  );

  const value = useMemo<WorldEntry>(
    () => ({ attempt, asking, entered: hasEntered }),
    [attempt, asking, hasEntered],
  );

  return (
    <WorldEntryContext.Provider value={value}>
      {children}
      {ceremony && (
        <StampCeremony
          country={ceremony}
          date={progress.progress.entries[ceremony.id] ?? today()}
          onDone={() => setCeremony(null)}
        />
      )}
    </WorldEntryContext.Provider>
  );
};

const CityPage: React.FC<{
  lang: WorldLang;
  content: WorldContent;
  progress: ReturnType<typeof useWorldProgress>;
}> = ({ lang, content, progress }) => {
  const { countryId, cityId } = useParams<{ countryId: string; cityId: string }>();
  const navigate = useNavigate();
  const city = content.cities.find((c) => c.id === cityId) ?? findCity(cityId ?? '');
  const country = content.countries.find((c) => c.id === countryId) ?? findCountry(countryId ?? '');
  const { module, failed } = useCityContent(content, cityId, lang);
  const { hasPlace } = progress;
  const { attempt, entered } = useWorldEntry();

  const isStamped = useCallback((id: PlaceId) => hasPlace(id), [hasPlace]);

  /**
   * Opening a city is the moment worth asking about: a child who taps into Rome while
   * standing in Rome has crossed the border this stamp records. Asked once per country,
   * and never again once it is earned, so the permission prompt is not a tax on browsing.
   *
   * A refusal is free — nothing here reads the result. The country page's «Είμαι εδώ!»
   * button is the retry, and it is the one that explains what happened.
   */
  const countryIdForEntry = country?.id;
  useEffect(() => {
    if (!country || !countryIdForEntry || entered(countryIdForEntry)) return;
    void attempt(country);
  }, [country, countryIdForEntry, entered, attempt]);

  if (!city || !country || failed) return <NotFound lang={lang} onBack={() => navigate('/world')} />;
  if (!module) return <Loading lang={lang} />;

  return (
    <>
      <WorldSeo meta={cityMeta(country, city, module, seoLang(lang))} />
      <CityView
        lang={lang}
        city={city}
        country={country}
        places={module.places}
        trails={module.trails ?? []}
        isStamped={isStamped}
        onOpenPlace={(id) => navigate(`/world/${country.id}/${city.id}/${id}`)}
        onBack={() => navigate(`/world/${country.id}`)}
      />
    </>
  );
};

const PlacePage: React.FC<{
  lang: WorldLang;
  content: WorldContent;
  progress: ReturnType<typeof useWorldProgress>;
  inside?: boolean;
}> = ({ lang, content, progress, inside }) => {
  const { countryId, cityId, placeId } = useParams<{
    countryId: string;
    cityId: string;
    placeId: string;
  }>();
  const navigate = useNavigate();
  const city = content.cities.find((c) => c.id === cityId);
  const country = content.countries.find((c) => c.id === countryId) ?? findCountry(countryId ?? '');
  const { module, failed } = useCityContent(content, cityId, lang);
  const place: Place | undefined = module?.places.find((p) => p.id === placeId);

  const cityUrl = `/world/${countryId}/${cityId}`;
  const { visitPlace, answerExhibit, solveRiddle, completeTrail } = progress;

  const countryCityIds = useMemo(
    () => content.cities.filter((c) => c.countryId === countryId).map((c) => c.id),
    [content, countryId],
  );

  // The seal the last visit earned, held so the ceremony can show it. `visitPlace` has
  // been returning `citySealed` and `countrySealed` since the first day and nothing
  // read them: a child finished a city, was paid 50 XP, and saw nothing happen.
  const [seal, setSeal] = useState<{
    city: City;
    country?: Country;
    xp: number;
    trailName?: LocText;
  } | null>(null);

  // «Άλλη μία;» — asked after a place is finished, never before. It cannot change what
  // was paid: by the time it is set, `visitPlace` has already returned and committed.
  const [askAnother, setAskAnother] = useState<number | null>(null);

  const handleComplete = useCallback(
    (correct: boolean) => {
      if (!place || !city || !module) return;
      const award = visitPlace(
        place,
        correct,
        city,
        module.places.map((p) => p.id),
        countryCityIds,
      );

      // Trails are checked after the stamp lands: a trail can only finish on the visit
      // that completes it, and `completeTrail` refuses if any of its places is missing.
      let trailName: LocText | undefined;
      let trailXp = 0;
      for (const trail of module.trails ?? []) {
        const done = completeTrail(trail);
        if (done) {
          trailName = trail.name;
          trailXp += done.xp;
        }
      }

      // Revisiting pays nothing and asks nothing: `visitPlace` returns null when the
      // stamp was already there, and a child rereading a story is not finishing a
      // mission. A child who already said «αρκετά για σήμερα» is not asked again either.
      // Counted through `hasPlace`, not `progress.progress`. The stamp that was just
      // earned is in the hook's ref synchronously but not yet in the state this render
      // closed over, so reading the state here counts the place the child just finished
      // as still to do — «μένουν 18» on a city of 18, one second after finishing one.
      if (award && !saidEnoughToday()) {
        setAskAnother(module.places.filter((p) => !progress.hasPlace(p.id)).length);
      }

      if (!award?.citySealed) return;
      setSeal({
        city,
        country: award.countrySealed
          ? content.countries.find((c) => c.id === award.countrySealed)
          : undefined,
        xp: award.xp + trailXp,
        trailName,
      });
    },
    [place, city, module, countryCityIds, content, visitPlace, completeTrail, progress],
  );

  /** The next place in this city the child has not stamped yet. Same ref, same reason. */
  const nextUnstamped = useCallback(
    () => module?.places.find((p) => p.id !== placeId && !progress.hasPlace(p.id)),
    [module, progress, placeId],
  );

  if (failed) return <NotFound lang={lang} onBack={() => navigate(cityUrl)} />;
  if (!module) return <Loading lang={lang} />;
  if (!place || !city) return <NotFound lang={lang} onBack={() => navigate(cityUrl)} />;

  const seo = country ? <WorldSeo meta={placeMeta(country, city, place, seoLang(lang))} /> : null;

  if (inside) {
    if (!place.museum) return <Navigate to={`${cityUrl}/${place.id}`} replace />;
    return (
      <>
        {seo}
        <MuseumView
          lang={lang}
          place={place}
          answeredExhibits={progress.progress.exhibits}
          solvedRiddles={progress.progress.riddles}
          onExhibitAnswer={answerExhibit}
          onRiddleSolved={solveRiddle}
          onBack={() => navigate(`${cityUrl}/${place.id}`)}
        />
      </>
    );
  }

  return (
    <>
      {seo}
      <PlaceCard
        lang={lang}
        place={place}
        cityName={city.name}
        stamp={progress.progress.places[place.id]}
        onComplete={handleComplete}
        onEnterMuseum={place.museum ? () => navigate(`${cityUrl}/${place.id}/in`) : undefined}
        onBack={() => navigate(cityUrl)}
      />
      {seal && (
        <SealCeremony
          lang={lang}
          city={seal.city}
          country={seal.country}
          date={today()}
          xp={seal.xp}
          trailName={seal.trailName}
          onDone={() => setSeal(null)}
        />
      )}
      {/* After the ceremony, never on top of it: finishing a city is the bigger moment
          and a question over it would step on the rosette. */}
      {askAnother !== null && !seal && (
        <AnotherOne
          lang={lang}
          remaining={askAnother}
          onYes={() => {
            const next = nextUnstamped();
            setAskAnother(null);
            navigate(next ? `${cityUrl}/${next.id}` : cityUrl);
          }}
          onEnough={() => {
            setAskAnother(null);
            navigate(cityUrl);
          }}
        />
      )}
    </>
  );
};

const PassportPage: React.FC<{
  lang: WorldLang;
  content: WorldContent;
  progress: ReturnType<typeof useWorldProgress>;
}> = ({ lang, content, progress }) => {
  const navigate = useNavigate();
  const cityLookup = useCallback(
    (countryId: CountryId) =>
      content.countries.length > 0
        ? content.cities.filter((c) => c.countryId === countryId)
        : citiesOf(countryId),
    [content],
  );

  return (
    <StampBook
      lang={lang}
      countries={content.countries}
      entries={progress.progress.entries}
      citiesDone={progress.progress.citiesDone}
      countriesDone={progress.progress.countriesDone}
      citiesOf={cityLookup}
      placesStamped={Object.keys(progress.progress.places).length}
      onBack={() => navigate('/world')}
    />
  );
};

// ---------------------------------------------------------------------- root

const World: React.FC<{ lang: 'el' | 'en' }> = ({ lang: appLang }) => {
  const [lang, setLangState] = useState<WorldLang>(() => initialWorldLang(appLang));
  const progress = useWorldProgress();
  const content = useWorldContent(lang);

  const setLang = useCallback((next: WorldLang) => {
    setLangState(next);
    rememberWorldLang(next);
  }, []);

  const langValue = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  // `/world` and `/world/` are the front door; anything deeper is a page the child
  // navigated to and already knows the name of.
  const { pathname } = useLocation();
  const atFrontDoor = pathname.replace(/\/+$/, '') === '/world';

  // Offered languages come from what is translated, not from the six the module could
  // one day hold. Filtered through LANG_LABELS so an overlay in a language World does
  // not know about cannot put an unlabelled button on the screen.
  const available = useMemo(
    () => AVAILABLE_LANGS.filter((code): code is WorldLang => code in LANG_LABELS),
    [],
  );

  return (
    <WorldLangContext.Provider value={langValue}>
      {/* `lang` on the module root, not merely on <html>.
          World picks its own language out of six while App.tsx keeps
          document.documentElement.lang on the app's 'el' | 'en'. Without this
          attribute a browser applies the wrong casing rules to any descendant with
          `text-transform: uppercase` — Greek uppercase drops its accents, so «Το
          Βιβλίο» must render ΤΟ ΒΙΒΛΙΟ and not ΤΟ ΒΙΒΛΊΟ — and a screen reader reads
          German content in a Greek voice. One attribute fixes every screen below. */}
      <div lang={lang} className="max-w-6xl mx-auto px-4 pb-24">
        {/*
          The product's name is a front door, not a hat worn on every screen.
          On a phone the full title plus its subtitle cost 65 points on every page, and
          on a city page the child had already been told where they are by the country
          page they tapped through. Inside, it shrinks to a line you can get home by; at
          `/world` it stays the thing it is.
        */}
        <header className="flex items-center justify-between gap-4 py-4 sm:py-6">
          {atFrontDoor ? (
            <h1 className={`${WORLD_STYLE.display} text-3xl flex items-center gap-3`}>
              <Globe size={26} className="text-blue-400 not-italic" aria-hidden="true" />
              <span className="flex flex-col">
                {ui(T.title, lang)}
                <span className={`${WORLD_STYLE.label} not-italic mt-1`}>{ui(T.subtitle, lang)}</span>
              </span>
            </h1>
          ) : (
            <Link
              to="/world"
              className="flex min-h-[44px] items-center gap-2 text-white/45 transition-colors hover:text-white/80"
            >
              <Globe size={15} className="text-blue-400" aria-hidden="true" />
              <span className="text-[11px] font-black uppercase tracking-widest">{ui(T.title, lang)}</span>
            </Link>
          )}
          <LangSwitcher lang={lang} available={available} onChange={setLang} />
        </header>

        <CountryEntryProvider content={content} progress={progress}>
        <Suspense fallback={<Loading lang={lang} />}>
          <Routes>
            <Route index element={<CountriesPage lang={lang} content={content} progress={progress} />} />
            <Route path="passport" element={<PassportPage lang={lang} content={content} progress={progress} />} />
            <Route path=":countryId" element={<CountryPage lang={lang} content={content} progress={progress} />} />
            <Route path=":countryId/:cityId" element={<CityPage lang={lang} content={content} progress={progress} />} />
            <Route
              path=":countryId/:cityId/:placeId"
              element={<PlacePage lang={lang} content={content} progress={progress} />}
            />
            <Route
              path=":countryId/:cityId/:placeId/in"
              element={<PlacePage lang={lang} content={content} progress={progress} inside />}
            />
            <Route path="*" element={<Navigate to="/world" replace />} />
          </Routes>
        </Suspense>
        </CountryEntryProvider>

        <TranslationNote lang={lang} />
      </div>
    </WorldLangContext.Provider>
  );
};

export default World;
