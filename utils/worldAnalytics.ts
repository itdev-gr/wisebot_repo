/**
 * WiseBot World analytics — anonymous counters, nothing else.
 * ============================================================
 * The owner settled this on 13/9/2026 (docs/world/TICKETS.md, `world-analytics-minimum`):
 * the World sends **five counters per city and nothing else**. No on-site flag, no trip id,
 * no user id, no coordinate, no place id — a timestamped stream of place ids from one
 * device is a walk through Athens, and BUSINESS-PLAN §28/§29 forbid a child's location
 * history by name. City granularity cannot reconstruct a route; that is the line.
 *
 * Every helper here goes through `track()` in utils/analytics.ts, which is a no-op until
 * the parent accepts analytics cookies — so a refusing family sends nothing, and the pilot
 * number is a floor, not a rate, until the consent share is known.
 *
 * The five events and what each one counts
 *   wb_world_mission_completed { city_id }     a place's question answered (right or wrong)
 *   wb_world_stamp_earned      { city_id }     a place answered correctly — the stamp inks green
 *                              { country_id }  a country's entry stamp (the first time in)
 *   wb_world_another_one_yes   —               «Άλλη μία;» → yes
 *   wb_world_another_one_no    —               «Άλλη μία;» → enough for today (or dismissed)
 *   wb_world_second_city       —               the first stamp in a city other than the family's
 *                                              first city: the moment World became a habit
 *
 * What the §35 targets get from these
 *   missions per outing            → mission_completed, counted per day per city (GA4 date × city_id)
 *   share that keeps going         → another_one_yes ÷ (another_one_yes + another_one_no)
 *   second city                    → second_city ÷ distinct first-city stamp days (a floor)
 *   correct-answer share           → stamp_earned{city_id} ÷ mission_completed
 * What they CANNOT give, on purpose: time-to-first-stamp, on-site vs sofa, a per-child
 * funnel. Those need a history, and the World keeps none.
 *
 * `cleanWorldParams` is the wire guard: whatever a call site passes, only `city_id` and
 * `country_id` with id-shaped values survive. The test pins the guard and the five names.
 */
import { track } from './analytics';

export const WORLD_EVENTS = {
  missionCompleted: 'wb_world_mission_completed',
  stampEarned: 'wb_world_stamp_earned',
  anotherOneYes: 'wb_world_another_one_yes',
  anotherOneNo: 'wb_world_another_one_no',
  secondCity: 'wb_world_second_city',
} as const;

export type WorldEventName = (typeof WORLD_EVENTS)[keyof typeof WORLD_EVENTS];

/** The only parameter keys that may ever be on the wire. */
export const ALLOWED_PARAMS = ['city_id', 'country_id'] as const;
type AllowedParam = (typeof ALLOWED_PARAMS)[number];
export type WorldEventParams = Partial<Record<AllowedParam, string>>;

/** City and country ids are lowercase slugs; anything else is not an id and is dropped. */
const ID = /^[a-z0-9][a-z0-9-]{0,63}$/;

export function cleanWorldParams(params: Record<string, unknown> | undefined): WorldEventParams {
  const out: WorldEventParams = {};
  if (!params) return out;
  for (const key of ALLOWED_PARAMS) {
    const value = params[key];
    if (typeof value === 'string' && ID.test(value)) out[key] = value;
  }
  return out;
}

function send(name: WorldEventName, params?: Record<string, unknown>): void {
  const clean = cleanWorldParams(params);
  track(name, Object.keys(clean).length > 0 ? clean : undefined);
}

/** A place's question was answered, right or wrong. */
export const trackWorldMissionCompleted = (cityId: string): void =>
  send(WORLD_EVENTS.missionCompleted, { city_id: cityId });

/** A stamp that counts: a correct answer in a city, or the entry stamp of a country. */
export const trackWorldStampEarned = (where: { cityId: string } | { countryId: string }): void =>
  send(
    WORLD_EVENTS.stampEarned,
    'cityId' in where ? { city_id: where.cityId } : { country_id: where.countryId },
  );

/** The «Άλλη μία;» card: yes, or enough for today. */
export const trackWorldAnotherOne = (yes: boolean): void =>
  send(yes ? WORLD_EVENTS.anotherOneYes : WORLD_EVENTS.anotherOneNo);

/** First stamp in a city after the family's first city. */
export const trackWorldSecondCity = (): void => send(WORLD_EVENTS.secondCity);
