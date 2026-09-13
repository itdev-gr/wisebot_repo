/**
 * What to say when the phone will not even ask.
 * ===============================================
 * A location request can fail as «denied» in two very different situations, and the
 * old note treated them as one:
 *
 *   refused  — a prompt was shown just now and someone tapped «Don't Allow». Tapping the
 *              button again is enough where the browser asks again (Chrome after a
 *              dismissal), and costs nothing where it does not.
 *   blocked  — the browser did NOT ask and never will: Safari remembers «Don't Allow»
 *              for the whole site, Chrome blocks a site after repeated dismissals, or a
 *              phone-wide setting is off. No code can bring the prompt back. The only
 *              honest sentence is where a grown-up switches it on again — and that place
 *              differs per platform and per iOS version, so the path is chosen here.
 *
 * Two lines, on purpose. The first is for the child: the phone is the one saying no,
 * nobody did anything wrong, a grown-up can fix it. The second is for the grown-up: a
 * breadcrumb in the OS's own words for that language, so they can match it screen to
 * screen. Shared by the country page («Είμαι εδώ!» for the entry stamp) and the place
 * card («Είμαι εδώ!» for the place stamp) so both say the same thing in the same words.
 */
import type { WorldLang } from '../../data/world/types';
import { geoPermissionState, geoPlatform } from '../../utils/geo';
import { ui, type UiText } from './worldUi';

export type DeniedKind = 'refused' | 'blocked';

/**
 * After `locateOnce()` came back «denied»: did someone just say no to a prompt, or is
 * the site blocked so that no prompt appeared at all? Read from the Permissions API
 * without asking. When the browser cannot say (older Safari), assume blocked — that
 * note also says «tap again», so it is never wrong, only longer.
 */
export async function deniedKind(): Promise<DeniedKind> {
  const state = await geoPermissionState();
  return state === 'prompt' ? 'refused' : 'blocked';
}

/** The child's line. On a desktop the thing saying no is the browser, not a phone. */
const BLOCKED: Record<'phone' | 'desktop', UiText<string>> = {
  phone: {
    el: 'Το τηλέφωνο έχει κλειστή την τοποθεσία για αυτή τη σελίδα. Ένας μεγάλος μπορεί να την ανοίξει. Μετά ξαναπάτα.',
    en: 'The phone has location switched off for this page. A grown-up can switch it on. Then tap again.',
    de: 'Das Handy hat den Standort für diese Seite ausgeschaltet. Ein Erwachsener kann ihn einschalten. Dann tippe noch einmal.',
    fr: 'Le téléphone a coupé la position pour cette page. Un adulte peut la rallumer. Puis appuie encore.',
    es: 'El teléfono tiene la ubicación apagada para esta página. Un adulto puede encenderla. Luego pulsa otra vez.',
    it: 'Il telefono ha la posizione spenta per questa pagina. Un adulto può riaccenderla. Poi tocca di nuovo.',
  },
  desktop: {
    el: 'Ο browser έχει κλειστή την τοποθεσία για αυτή τη σελίδα. Άνοιξέ την και ξαναπάτα.',
    en: 'The browser has location switched off for this page. Switch it on and tap again.',
    de: 'Der Browser hat den Standort für diese Seite ausgeschaltet. Schalte ihn ein und tippe noch einmal.',
    fr: 'Le navigateur a coupé la position pour cette page. Rallume-la et appuie encore.',
    es: 'El navegador tiene la ubicación apagada para esta página. Enciéndela y pulsa otra vez.',
    it: 'Il browser ha la posizione spenta per questa pagina. Riaccendila e tocca di nuovo.',
  },
};

/**
 * The grown-up's line: where the switch is, in the labels the OS shows in that language.
 *   ios18   — Safari on iOS 18+, where Safari's settings moved under Settings → Apps.
 *   ios17   — Safari on iOS 17 and earlier: Settings → Safari → Location.
 *   iosApp  — the App Store shell; the permission is the app's own, not Safari's.
 *   android — Chrome (and the Play Store shell, which is Chrome underneath).
 *   desktop — any desktop browser: the icon left of the address bar.
 * `{host}` is the site as this browser names it in its per-site list.
 */
type PathKey = 'ios18' | 'ios17' | 'iosApp' | 'android' | 'desktop';

const PATH: Record<PathKey, UiText<string>> = {
  ios18: {
    el: 'Ρυθμίσεις → Εφαρμογές → Safari → Τοποθεσία → {host} → «Ερώτηση»',
    en: 'Settings → Apps → Safari → Location → {host} → “Ask”',
    de: 'Einstellungen → Apps → Safari → Standort → {host} → „Fragen“',
    fr: 'Réglages → Apps → Safari → Position → {host} → « Demander »',
    es: 'Ajustes → Apps → Safari → Ubicación → {host} → «Preguntar»',
    it: 'Impostazioni → App → Safari → Posizione → {host} → «Chiedi»',
  },
  ios17: {
    el: 'Ρυθμίσεις → Safari → Τοποθεσία → {host} → «Ερώτηση»',
    en: 'Settings → Safari → Location → {host} → “Ask”',
    de: 'Einstellungen → Safari → Standort → {host} → „Fragen“',
    fr: 'Réglages → Safari → Position → {host} → « Demander »',
    es: 'Ajustes → Safari → Ubicación → {host} → «Preguntar»',
    it: 'Impostazioni → Safari → Posizione → {host} → «Chiedi»',
  },
  iosApp: {
    el: 'Ρυθμίσεις → Εφαρμογές → WiseBot → Τοποθεσία → «Κατά τη χρήση της εφαρμογής»',
    en: 'Settings → Apps → WiseBot → Location → “While Using the App”',
    de: 'Einstellungen → Apps → WiseBot → Standort → „Beim Verwenden der App“',
    fr: 'Réglages → Apps → WiseBot → Position → « Lorsque l’app est active »',
    es: 'Ajustes → Apps → WiseBot → Ubicación → «Al usar la app»',
    it: 'Impostazioni → App → WiseBot → Posizione → «Mentre usi l’app»',
  },
  android: {
    el: 'Chrome: το εικονίδιο δίπλα στη διεύθυνση → Άδειες → Τοποθεσία → «Να επιτρέπεται»',
    en: 'Chrome: the icon next to the address → Permissions → Location → “Allow”',
    de: 'Chrome: Symbol neben der Adresse → Berechtigungen → Standort → „Zulassen“',
    fr: 'Chrome : icône à côté de l’adresse → Autorisations → Position → « Autoriser »',
    es: 'Chrome: icono junto a la dirección → Permisos → Ubicación → «Permitir»',
    it: 'Chrome: icona accanto all’indirizzo → Autorizzazioni → Posizione → «Consenti»',
  },
  desktop: {
    el: 'Το εικονίδιο αριστερά από τη διεύθυνση → Τοποθεσία → «Να επιτρέπεται»',
    en: 'The icon left of the address → Location → “Allow”',
    de: 'Symbol links neben der Adresse → Standort → „Zulassen“',
    fr: 'Icône à gauche de l’adresse → Position → « Autoriser »',
    es: 'Icono a la izquierda de la dirección → Ubicación → «Permitir»',
    it: 'Icona a sinistra dell’indirizzo → Posizione → «Consenti»',
  },
};

/** iPhone Safari still reports the real iOS version: "CPU iPhone OS 18_1 like Mac OS X". */
function iosMajor(): number | null {
  if (typeof navigator === 'undefined') return null;
  const m = /OS (\d+)_/.exec(navigator.userAgent);
  return m ? Number(m[1]) : null;
}

function pathKey(): PathKey {
  const platform = geoPlatform();
  if (platform === 'ios') return (iosMajor() ?? 18) >= 18 ? 'ios18' : 'ios17';
  return platform;
}

export interface BlockedNote {
  /** For the child. */
  note: string;
  /** For the grown-up: the breadcrumb to the switch. */
  path: string;
}

/** The two sentences for «the phone will not ask», for the platform this is running on. */
export function blockedNote(lang: WorldLang): BlockedNote {
  const key = pathKey();
  const host = typeof location !== 'undefined' && location.hostname ? location.hostname : 'wisebot.gr';
  return {
    note: ui(BLOCKED[key === 'desktop' ? 'desktop' : 'phone'], lang),
    path: ui(PATH[key], lang).replace('{host}', host),
  };
}
