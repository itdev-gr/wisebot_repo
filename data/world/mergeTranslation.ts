/**
 * Fold one language's overlay into a city's content.
 *
 * City modules carry Greek and English; `data/world/i18n/<city>.<lang>.json` carries
 * one more language, keyed by id. This function puts them together, and it is the only
 * place that knows how.
 *
 * Two rules it will not break:
 *
 *  1. **It never overwrites `el` or `en`.** An overlay can only add a language. A
 *     translation file cannot damage the source it was translated from, however wrong
 *     it is.
 *  2. **It never guesses.** A key the overlay does not mention is left exactly as it
 *     was, which is how a half-finished translation degrades into a partly-English
 *     city rather than into a crash. The test file separately refuses to ship a place
 *     that is only half translated, so this tolerance is a runtime safety net and not
 *     a licence to publish one.
 *
 * Pure and non-mutating: the city module is a frozen import shared across renders, so
 * writing into it would leak one language's text into another's view.
 */

import type {
  City,
  CityModule,
  CityTranslation,
  CountriesTranslation,
  Country,
  Exhibit,
  LocText,
  Place,
  Question,
  QuestionTranslation,
  Trail,
  WorldLang,
} from './types';

/** Add one language to a bilingual string, or hand it back untouched. */
function withLang(text: LocText, lang: WorldLang, value: string | undefined): LocText {
  if (typeof value !== 'string' || !value.trim()) return text;
  if (lang === 'el' || lang === 'en') return text;
  return { ...text, [lang]: value };
}

function mergeQuestion(
  question: Question,
  lang: WorldLang,
  t: QuestionTranslation | undefined,
): Question {
  if (!t) return question;
  const answers = question.answers.map((answer, i) =>
    withLang(answer, lang, t.answers?.[i]),
  ) as Question['answers'];
  return {
    q: withLang(question.q, lang, t.q),
    answers,
    explanation: withLang(question.explanation, lang, t.explanation),
  };
}

function mergeExhibit(
  exhibit: Exhibit,
  lang: WorldLang,
  t: NonNullable<NonNullable<CityTranslation['places'][string]['museum']>['exhibits']>[string] | undefined,
): Exhibit {
  if (!t) return exhibit;
  return {
    ...exhibit,
    name: withLang(exhibit.name, lang, t.name),
    blurb: withLang(exhibit.blurb, lang, t.blurb),
    question: mergeQuestion(exhibit.question, lang, t.question),
  };
}

function mergePlace(place: Place, lang: WorldLang, overlay: CityTranslation): Place {
  const t = overlay.places[place.id];
  if (!t) return place;

  const museum = place.museum
    ? {
        ...place.museum,
        doorNote: place.museum.doorNote
          ? withLang(place.museum.doorNote, lang, t.museum?.doorNote)
          : place.museum.doorNote,
        rooms: place.museum.rooms.map((room) => {
          const rt = t.museum?.rooms?.[room.id];
          return {
            ...room,
            name: withLang(room.name, lang, rt?.name),
            intro: withLang(room.intro, lang, rt?.intro),
            exhibits: room.exhibits.map((exhibit) =>
              mergeExhibit(exhibit, lang, t.museum?.exhibits?.[exhibit.id]),
            ),
          };
        }),
        riddles: place.museum.riddles.map((riddle) => {
          const rt = t.museum?.riddles?.[riddle.id];
          return {
            ...riddle,
            prompt: withLang(riddle.prompt, lang, rt?.prompt),
            hint: withLang(riddle.hint, lang, rt?.hint),
          };
        }),
      }
    : place.museum;

  return {
    ...place,
    name: withLang(place.name, lang, t.name),
    tagline: withLang(place.tagline, lang, t.tagline),
    story: withLang(place.story, lang, t.story),
    location: place.location.findIt
      ? { ...place.location, findIt: withLang(place.location.findIt, lang, t.findIt) }
      : place.location,
    facts: place.facts.map((fact, i) => withLang(fact, lang, t.facts?.[i])),
    question: mergeQuestion(place.question, lang, t.question),
    museum,
  };
}

function mergeTrail(trail: Trail, lang: WorldLang, overlay: CityTranslation): Trail {
  const t = overlay.trails?.[trail.id];
  if (!t) return trail;
  return {
    ...trail,
    name: withLang(trail.name, lang, t.name),
    promise: withLang(trail.promise, lang, t.promise),
  };
}

/**
 * The whole city in one more language.
 *
 * An overlay whose `cityId` disagrees with the module it is being applied to is
 * ignored rather than merged. That mismatch means a build wired the wrong file
 * together, and quietly pasting Thessaloniki's German over Athens would be a very
 * hard bug to see.
 */
export function mergeCityTranslation(
  module: CityModule,
  overlay: CityTranslation | null | undefined,
  cityId: string,
): CityModule {
  if (!overlay || overlay.cityId !== cityId) return module;
  const lang = overlay.lang;
  if (lang === 'el' || lang === 'en') return module;

  return {
    places: module.places.map((place) => mergePlace(place, lang, overlay)),
    trails: module.trails?.map((trail) => mergeTrail(trail, lang, overlay)),
  };
}

/**
 * The front door in one more language: country names, country intros, and the name and
 * intro of every city on a country's page.
 *
 * This is the text a child reads before they have chosen anything, so it is the text
 * that decides whether the app looks translated at all. A German child who lands on a
 * list headed DIE WELT and reads GREECE underneath has been told, in the first second,
 * that the German is skin deep.
 *
 * Same two rules as the city merge: `el` and `en` are never overwritten, and anything
 * the overlay does not mention is left exactly as it was.
 */
export function mergeCountriesTranslation(
  countries: Country[],
  cities: City[],
  overlay: CountriesTranslation | null | undefined,
): { countries: Country[]; cities: City[] } {
  if (!overlay) return { countries, cities };
  const lang = overlay.lang;
  if (lang === 'el' || lang === 'en') return { countries, cities };

  return {
    countries: countries.map((country) => {
      const t = overlay.countries[country.id];
      if (!t) return country;
      return {
        ...country,
        name: withLang(country.name, lang, t.name),
        intro: withLang(country.intro, lang, t.intro),
        facts: country.facts.map((fact, i) => withLang(fact, lang, t.facts?.[i])),
      };
    }),
    cities: cities.map((city) => {
      const t = overlay.countries[city.countryId]?.cities?.[city.id];
      if (!t) return city;
      return {
        ...city,
        name: withLang(city.name, lang, t.name),
        intro: withLang(city.intro, lang, t.intro),
      };
    }),
  };
}
