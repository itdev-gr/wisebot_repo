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
 * The one award that is not triggered by a tap is the country entry stamp: it fires on
 * arriving at a country, because that IS the act of entering. It is safe under React 19
 * StrictMode's double-invoked effects for the same reason every other award here is —
 * `useWorldProgress` decides from a ref that has already been written, so a second call
 * returns null and pays nothing.
 */

import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Globe, Loader2 } from 'lucide-react';

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
} from './worldUi';
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
}> = ({ lang, available, onChange }) => (
  <div
    className="flex items-center gap-1 flex-wrap"
    role="group"
    aria-label={ui(T.langLabel, lang)}
  >
    {available.map((code) => {
      const meta = LANG_LABELS[code];
      const active = code === lang;
      return (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          aria-pressed={active}
          aria-label={meta.name}
          title={meta.name}
          className={
            active
              ? 'min-h-[44px] px-3 rounded-xl bg-white/[0.12] border border-white/25 text-white text-xs font-black tracking-widest'
              : 'min-h-[44px] px-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs font-black tracking-widest hover:text-white/80 transition-colors'
          }
        >
          <span aria-hidden="true" className="mr-1">
            {meta.flag}
          </span>
          {meta.short}
        </button>
      );
    })}
  </div>
);

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
 * It lives at the module root rather than on the country screen because a child can
 * arrive inside a country by any route — a shared link straight to a place, a browser
 * back, a refresh. Watching the URL instead of one screen means the stamp lands the
 * first time they are in the country at all, which is what a border does.
 *
 * Running the award from an effect is safe here, and only here, because `enterCountry`
 * decides from a ref it has already written: StrictMode's second invocation returns
 * null and pays nothing.
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

const CountryEntry: React.FC<{
  content: WorldContent;
  progress: ReturnType<typeof useWorldProgress>;
}> = ({ content, progress }) => {
  const { pathname } = useLocation();
  const [ceremony, setCeremony] = useState<Country | null>(null);
  const { enterCountry } = progress;

  // '/world/:countryId/...' — 'passport' is a screen, not a country.
  const segment = pathname.split('/')[2];
  const countryId = segment && segment !== 'passport' ? segment : undefined;
  const country = countryId
    ? content.countries.find((c) => c.id === countryId) ?? findCountry(countryId)
    : undefined;

  useEffect(() => {
    if (!country) return;
    const award = enterCountry(country);
    if (award?.enteredCountry) setCeremony(award.enteredCountry);
  }, [country, enterCountry]);

  if (!ceremony) return null;
  return (
    <StampCeremony
      country={ceremony}
      date={progress.progress.entries[ceremony.id] ?? today()}
      onDone={() => setCeremony(null)}
    />
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

  const isStamped = useCallback((id: PlaceId) => hasPlace(id), [hasPlace]);

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
      if (award && !saidEnoughToday()) {
        const stamped = progress.progress.places;
        setAskAnother(module.places.filter((p) => !stamped[p.id]).length);
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

  /** The next place in this city the child has not stamped yet. */
  const nextUnstamped = useCallback(() => {
    if (!module) return undefined;
    const stamped = progress.progress.places;
    return module.places.find((p) => p.id !== placeId && !stamped[p.id]);
  }, [module, progress, placeId]);

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
        <header className="flex items-center justify-between gap-4 flex-wrap py-6">
          <h1 className={`${WORLD_STYLE.display} text-3xl flex items-center gap-3`}>
            <Globe size={26} className="text-blue-400 not-italic" aria-hidden="true" />
            <span className="flex flex-col">
              {ui(T.title, lang)}
              <span className={`${WORLD_STYLE.label} not-italic mt-1`}>{ui(T.subtitle, lang)}</span>
            </span>
          </h1>
          <LangSwitcher lang={lang} available={available} onChange={setLang} />
        </header>

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

        <CountryEntry content={content} progress={progress} />
        <TranslationNote lang={lang} />
      </div>
    </WorldLangContext.Provider>
  );
};

export default World;
