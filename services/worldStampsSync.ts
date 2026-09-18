/**
 * WiseBot World — the passport, across devices.
 *
 * Mirrors `wb_world_progress`'s place stamps into `public.world_stamps`, so the tablet at
 * home and the phone on the pavement show one passport instead of two, and signing out
 * stops being the thing that destroys it.
 *
 * Three rules, all of them from docs/world/specs/02-progress-and-rewards.md:
 *
 *  1. **Union, never overwrite.** A stamp is a fact that happened. Merging takes the
 *     earliest visit date and the more generous `correct`, and nothing here can ever
 *     remove a stamp. The database trigger enforces the same thing server-side, so a
 *     stale device cannot undo a newer one.
 *  2. **XP is never re-awarded on sync.** This file writes progress and nothing else. It
 *     does not import `useEconomy`, it does not call `earnXp`, and it must not start:
 *     every sign-in on a second device would pay the child again for places they had
 *     already earned.
 *  3. **Seals are derived, not stored.** A city is finished when every one of its places
 *     has a stamp, and a country when every one of its cities is finished. The hook
 *     derives them at the moment a stamp lands; this file re-derives them after a merge,
 *     because a merge can complete a city without any place being visited on this device.
 *
 * Guests are a no-op throughout: no session, no rows, and the passport stays local
 * exactly as it was.
 */

import { supabase, isSupabaseConfigured } from './supabaseClient';
import {
  readWorldProgress,
  writeWorldProgress,
  type PlaceStamp,
  type WorldProgress,
} from '../components/world/worldProgressStore';
import { CITIES, PLACE_COUNTS } from '../data/world/registry';
import type { PlaceId } from '../data/world/types';

/** Mirrors the table's CHECK constraint — junk must not poison a batch upsert. */
const isValidPlaceId = (id: string): boolean =>
  typeof id === 'string' && id.length >= 1 && id.length <= 120;

const isValidStamp = (s: PlaceStamp | undefined | null): s is PlaceStamp =>
  Boolean(s) && typeof s!.at === 'string' && s!.at.length > 0 && typeof s!.correct === 'boolean';

/**
 * Union of two stamp sets.
 *
 * Earliest `at` wins, because that is the day the child was actually there and a
 * late-syncing device must not move the date forward. `correct` is a high-water mark: a
 * child who got it right on one device got it right.
 *
 * Dates are compared as strings, which is correct for the `YYYY-MM-DD` the store writes
 * and stays correct for the ISO timestamps the table returns, since both sort
 * lexicographically. A malformed date loses to a well-formed one rather than winning by
 * being short.
 */
export function mergeWorldStamps(
  local: Record<PlaceId, PlaceStamp>,
  cloud: Record<PlaceId, PlaceStamp>,
): Record<PlaceId, PlaceStamp> {
  const merged: Record<PlaceId, PlaceStamp> = {};

  for (const [id, stamp] of Object.entries(local)) {
    if (isValidPlaceId(id) && isValidStamp(stamp)) merged[id] = { ...stamp };
  }

  for (const [id, stamp] of Object.entries(cloud)) {
    if (!isValidPlaceId(id) || !isValidStamp(stamp)) continue;
    const mine = merged[id];
    if (!mine) {
      merged[id] = { ...stamp };
      continue;
    }
    // Spread `mine` first so `onSite` survives the merge. `world_stamps` has no column for
    // it, so a cloud stamp never carries one; rebuilding the object from `at` and
    // `correct` alone erased the flag on every sign-in for every place both sides had.
    merged[id] = {
      ...mine,
      at: stamp.at < mine.at ? stamp.at : mine.at,
      correct: mine.correct || stamp.correct,
    };
  }

  return merged;
}

/**
 * Re-derive what the stamps imply, without loading a single city module.
 *
 * Place ids are prefixed by their city id — `data/world/world.test.ts` enforces it — so
 * counting the passport's own keys is enough, the same trick the country page uses.
 *
 * Entry stamps are widened too: a child who has a stamped place in a country plainly
 * entered that country, and after a merge that may be the only evidence left. The entry
 * date is the earliest stamp in the country, and an entry already on the device is never
 * moved. It is not a full country-entry sync — a country opened but never explored has no
 * row to carry — and `world_stamps` deliberately holds places only, per the spec.
 */
export function deriveFromStamps(progress: WorldProgress): WorldProgress {
  const places = progress.places;
  const stampedIds = Object.keys(places);

  const citiesDone = new Set(progress.citiesDone);
  for (const city of CITIES) {
    const total = PLACE_COUNTS[city.id] ?? 0;
    if (total <= 0) continue;
    const stamped = stampedIds.filter((id) => id.startsWith(`${city.id}-`)).length;
    if (stamped >= total) citiesDone.add(city.id);
  }

  const countriesDone = new Set(progress.countriesDone);
  const byCountry = new Map<string, string[]>();
  for (const city of CITIES) {
    const list = byCountry.get(city.countryId) ?? [];
    list.push(city.id);
    byCountry.set(city.countryId, list);
  }
  for (const [countryId, cityIds] of byCountry) {
    if (cityIds.length > 0 && cityIds.every((id) => citiesDone.has(id))) {
      countriesDone.add(countryId);
    }
  }

  const entries = { ...progress.entries };
  const earliestByCountry = new Map<string, string>();
  for (const city of CITIES) {
    const earliest = stampedIds
      .filter((id) => id.startsWith(`${city.id}-`))
      .map((id) => places[id]?.at)
      .filter((at): at is string => Boolean(at))
      .sort()[0];
    if (!earliest) continue;
    const current = earliestByCountry.get(city.countryId);
    if (!current || earliest < current) earliestByCountry.set(city.countryId, earliest);
  }
  // Only fill a country the device has no entry date for. A date already on the device is
  // the one the child saw printed on their stamp, and must not move.
  for (const [countryId, at] of earliestByCountry) {
    if (!entries[countryId]) entries[countryId] = at;
  }

  return {
    ...progress,
    entries,
    citiesDone: [...citiesDone],
    countriesDone: [...countriesDone],
  };
}

interface StampRow {
  place_id: string;
  visited_at: string;
  correct: boolean;
}

/** The table stores a timestamptz; the passport prints a calendar day. */
const toCalendarDay = (iso: string): string => {
  const day = String(iso).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : '';
};

async function pullWorldStamps(userId: string): Promise<Record<PlaceId, PlaceStamp> | null> {
  const { data, error } = await supabase
    .from('world_stamps')
    .select('place_id, visited_at, correct')
    .eq('user_id', userId);
  if (error) {
    console.warn('[Sync] World stamps pull error:', error.message);
    return null;
  }
  const out: Record<PlaceId, PlaceStamp> = {};
  for (const row of (data || []) as StampRow[]) {
    const at = toCalendarDay(row.visited_at);
    if (!isValidPlaceId(row.place_id) || !at) continue;
    out[row.place_id] = { at, correct: Boolean(row.correct) };
  }
  return out;
}

async function upsertWorldStamps(
  userId: string,
  stamps: Record<PlaceId, PlaceStamp>,
): Promise<boolean> {
  const rows = Object.entries(stamps)
    .filter(([id, s]) => isValidPlaceId(id) && isValidStamp(s))
    .map(([placeId, s]) => ({
      user_id: userId,
      place_id: placeId,
      visited_at: `${s.at}T12:00:00Z`,
      correct: s.correct,
    }));
  if (rows.length === 0) return true;
  const { error } = await supabase
    .from('world_stamps')
    .upsert(rows, { onConflict: 'user_id,place_id' });
  if (error) {
    console.warn('[Sync] World stamps push error:', error.message);
    return false;
  }
  return true;
}

/**
 * Full two-way sync, called once on login from AuthContext's SyncBridge.
 *
 * Pull, union, re-derive the seals the union just earned, write the passport back, then
 * push everything so a place the cloud had never seen lands there. The push is
 * unconditional rather than diffed: the table's trigger drops anything that would not
 * widen a row, so sending a stamp the cloud already holds costs one no-op statement and
 * removes a whole class of "which side was newer" bugs.
 */
export async function syncWorldStamps(userId: string): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;
  try {
    const cloud = await pullWorldStamps(userId);
    if (cloud === null) return false;

    const local = readWorldProgress();
    const places = mergeWorldStamps(local.places, cloud);
    writeWorldProgress(deriveFromStamps({ ...local, places }));

    return await upsertWorldStamps(userId, places);
  } catch (err) {
    console.error('[Sync] World stamps sync error:', err);
    return false;
  }
}

/**
 * Fire-and-forget push of one freshly earned stamp.
 *
 * Called from the hook the moment a place is stamped, which is what makes signing out
 * safe: `AuthContext.signOut` clears every `wb_*` key, so a passport that had never been
 * pushed would be gone. Guests have no session and this returns without a request.
 */
export async function pushWorldStamp(placeId: PlaceId, stamp: PlaceStamp): Promise<void> {
  if (!isSupabaseConfigured()) return;
  if (!isValidPlaceId(placeId) || !isValidStamp(stamp)) return;
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return;
    await upsertWorldStamps(userId, { [placeId]: stamp });
  } catch (err) {
    console.warn('[Sync] World stamp push error:', err);
  }
}
