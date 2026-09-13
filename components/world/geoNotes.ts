/**
 * What to say when the phone will not even ask.
 * ===============================================
 * A location request can fail as «denied» in two very different situations, and the
 * old note treated them as one:
 *
 *   refused  — a sheet was shown just now and someone tapped «Don't Allow». Recognised
 *              by the time it took, not by the Permissions API: Safari answers «prompt»
 *              whatever it remembers (MDN browser-compat-data #25032, Apple forums
 *              751189), so only the clock can tell a sheet from a memory.
 *   blocked  — the browser did NOT ask and never will: Safari remembers «Don't Allow»
 *              for the whole site (or Location Services → Safari Websites is «Never»),
 *              Chrome blocks a site after repeated dismissals, or a phone-wide switch is
 *              off. The answer lands in a few milliseconds. No code can bring the sheet
 *              back; the only honest sentence is where a grown-up switches it on again,
 *              and that place differs per platform and per iOS version.
 *
 * And one WebKit rule that shapes the retry: once a request has been denied in a
 * document, every later request in that document is answered from memory until the
 * page is reloaded — WebCore's own comment reads "the permission state can not change
 * again in the lifetime of this page". Whatever a grown-up fixes in Settings, the next
 * tap fails unless the page reloads first. So `retryNeedsReload()` says when the retry
 * must reload instead of asking, and the tap after the reload is the one that asks.
 *
 * Two lines, on purpose. The first is for the child: the phone is the one saying no,
 * nobody did anything wrong, a grown-up can fix it. The second is for the grown-up: a
 * breadcrumb in the OS's own words for that language, so they can match it screen to
 * screen. On an iPhone there is a third, because the switch can also be phone-wide.
 * Shared by the country page («Είμαι εδώ!» for the entry stamp) and the place card
 * («Είμαι εδώ!» for the place stamp) so both say the same thing in the same words.
 */
import type { WorldLang } from '../../data/world/types';
import { geoPermissionState, geoPlatform } from '../../utils/geo';
import { ui, type UiText } from './worldUi';

export type DeniedKind = 'refused' | 'blocked';

/**
 * A remembered «no» lands in a few milliseconds. A sheet takes longer than this to
 * appear, be read and be refused — a child who refuses in under a second is told the
 * longer note, whose last words are still «then tap again», so it is never wrong.
 */
export const NO_PROMPT_MS = 1000;

/**
 * True once any location request in this document has failed as «denied». Module
 * state on purpose: it lives exactly as long as the document, which is exactly as long
 * as WebKit's memory of the refusal.
 */
let deniedInThisDocument = false;

/**
 * After `locateOnce()` came back «denied», `elapsedMs` after the tap: did someone just
 * say no to a sheet, or is the site blocked so that no sheet appeared at all? The
 * Permissions API is believed when it says «denied» (Chrome, Firefox); otherwise the
 * clock decides, because Safari says «prompt» regardless and an absent API says nothing.
 */
export async function deniedKind(elapsedMs: number): Promise<DeniedKind> {
  deniedInThisDocument = true;
  const state = await geoPermissionState();
  if (state === 'denied') return 'blocked';
  return elapsedMs < NO_PROMPT_MS ? 'blocked' : 'refused';
}

/** Must the retry reload the page before this browser will ask again? */
export function retryNeedsReload(): boolean {
  return deniedInThisDocument;
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
 * The grown-up's line: where the switch is, in the labels the OS shows in that language
 * (Apple's iPhone User Guide, el-gr and en-us, iOS 17 / 18 / 26; Google's Chrome help).
 *   ios18      — Safari on iOS 18 and later, where Safari's settings moved under
 *                Settings → Apps. iOS 26 is the same path.
 *   ios17      — Safari on iOS 17 and earlier: Settings → Safari → Location.
 *   iosPrivacy — the phone-wide switch for every website in Safari, which the per-site
 *                path cannot reach; shown as a third line on iOS web only.
 *   iosApp     — the App Store shell; the permission is the app's own, not Safari's.
 *   android    — Chrome (and the Play Store shell, which is Chrome underneath).
 *   desktop    — any desktop browser: the icon left of the address bar.
 * `{host}` is the site as this browser names it in its per-site list.
 */
type PathKey = 'ios18' | 'ios17' | 'iosApp' | 'android' | 'desktop';

const PATH: Record<PathKey | 'iosPrivacy', UiText<string>> = {
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
  iosPrivacy: {
    el: 'Αν πάλι όχι: Ρυθμίσεις → Απόρρητο και ασφάλεια → Υπηρεσίες τοποθεσίας → Ιστότοποι Safari → «Κατά τη χρήση της εφαρμογής»',
    en: 'Still no? Settings → Privacy & Security → Location Services → Safari Websites → “While Using the App”',
    de: 'Immer noch nicht? Einstellungen → Datenschutz & Sicherheit → Ortungsdienste → Safari-Websites → „Beim Verwenden der App“',
    fr: 'Toujours rien ? Réglages → Confidentialité et sécurité → Service de localisation → Sites web Safari → « Lorsque l’app est active »',
    es: '¿Sigue sin ir? Ajustes → Privacidad y seguridad → Localización → Sitios web de Safari → «Al usar la app»',
    it: 'Ancora no? Impostazioni → Privacy e sicurezza → Localizzazione → Siti web Safari → «Mentre usi l’app»',
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
  /** iPhone in Safari only: the phone-wide switch, in case the per-site one was not it. */
  more?: string;
}

/** The sentences for «the phone will not ask», for the platform this is running on. */
export function blockedNote(lang: WorldLang): BlockedNote {
  const key = pathKey();
  const host = typeof location !== 'undefined' && location.hostname ? location.hostname : 'wisebot.gr';
  return {
    note: ui(BLOCKED[key === 'desktop' ? 'desktop' : 'phone'], lang),
    path: ui(PATH[key], lang).replace('{host}', host),
    more: key === 'ios18' || key === 'ios17' ? ui(PATH.iosPrivacy, lang) : undefined,
  };
}
