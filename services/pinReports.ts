/**
 * «Λάθος σημείο» — filing one.
 *
 * A parent in the street is the only person who can tell us a pin is wrong. This sends
 * the place and one of three reasons, and nothing else: no coordinate, no accuracy, no
 * free text. Brief §28 forbids storing a child's location and §29 lists child-location
 * history by name, so a report says which pin and which of three faults, never where the
 * person reporting it was standing.
 *
 * One report per place per device. Not a rate limit — a courtesy: a parent who taps twice
 * because nothing visibly happened should not file twice, and a family walking past the
 * same wrong pin every day is still one fault.
 */

import { supabase, isSupabaseConfigured } from './supabaseClient';

/** The three, and only three. Each maps onto a field the data model already has. */
export type PinReportReason =
  /** Right place, wrong door — `anchor` / a measured entrance, and the `findIt` note. */
  | 'entrance'
  /** Sent us somewhere else entirely — the wrong Wikidata q-id in the seed. */
  | 'wrong'
  /** Closed or moved — `location.note` and a fresh `verifiedAt`. */
  | 'gone';

export const PIN_REPORT_REASONS: PinReportReason[] = ['entrance', 'wrong', 'gone'];

const KEY_PREFIX = 'wb_world_pin_reported_';

/** Mirrors the table's CHECK: lowercase, dash-separated, 3–120 characters. */
const isValidPlaceId = (id: string): boolean =>
  typeof id === 'string' && id.length >= 3 && id.length <= 120 && /^[a-z0-9]+(-[a-z0-9]+)+$/.test(id);

export function alreadyReported(placeId: string): boolean {
  try {
    return Boolean(localStorage.getItem(KEY_PREFIX + placeId));
  } catch {
    return false;
  }
}

function rememberReported(placeId: string, reason: PinReportReason): void {
  try {
    localStorage.setItem(KEY_PREFIX + placeId, reason);
  } catch {
    /* full, or blocked in a private window — the thank-you still shows */
  }
}

/**
 * File a report. Resolves true when it reached the table, false when it did not.
 *
 * The caller thanks the parent either way. A report that failed to send is worth less
 * than a parent who feels ignored while standing in the rain, and the device remembers it
 * regardless so they are not asked to repeat themselves.
 */
export async function reportWrongPin(placeId: string, reason: PinReportReason): Promise<boolean> {
  if (!isValidPlaceId(placeId) || !PIN_REPORT_REASONS.includes(reason)) return false;
  rememberReported(placeId, reason);
  if (!isSupabaseConfigured()) return false;

  try {
    // A signed-in parent files as themselves so a follow-up is possible; a visitor files
    // anonymously. The RLS policy accepts exactly these two shapes and no other.
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id ?? null;

    const { error } = await supabase
      .from('world_pin_reports')
      .insert({ place_id: placeId, reason, user_id: userId });

    if (error) {
      console.warn('[World] Pin report failed:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('[World] Pin report failed:', err);
    return false;
  }
}
