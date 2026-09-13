/**
 * What to say when the phone will not even ask.
 * ===============================================
 * A location request can fail as «denied» in two very different situations, and the
 * old note treated them as one:
 *
 *   refused  — a sheet was shown just now and someone tapped «Don't Allow». Recognised
 *              by the time it took, not by the Permissions API: Safari answers «prompt»
 *              whatever it remembers (MDN browser-compat-data #25032, Apple forums
 *              751189), and since Safari 26 it answers «denied» only AFTER this document
 *              has been refused — so the API is read before the request, and only a
 *              «denied» known beforehand counts as a block.
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
 * must reload instead of asking, `reloadForRetry()` leaves a one-shot note for after the
 * reload («Ready! Tap once more.»), and the tap after the reload is the one that asks.
 * The App Store shell asks through the native plugin, which has no such memory, so
 * there the retry simply asks again.
 *
 * Two lines, on purpose. The first is for the child: the phone is the one saying no,
 * nobody did anything wrong, a grown-up can fix it. The second is for the grown-up: a
 * breadcrumb in the OS's own words for that language, so they can match it screen to
 * screen. On an iPhone there is a third, because the switch can also be phone-wide.
 * Shared by the country page («Είμαι εδώ!» for the entry stamp) and the place card
 * («Είμαι εδώ!» for the place stamp) so both say the same thing in the same words.
 */
import type { WorldLang } from '../../data/world/types';
import { geoPlatform, type GeoPermission } from '../../utils/geo';
import { ui, type UiText } from './worldUi';

export type DeniedKind = 'refused' | 'blocked';

/**
 * A remembered «no» lands in a few milliseconds. A sheet takes longer than this to
 * appear, be read and be refused — a child who refuses in under a second is told the
 * longer note, whose last words are still «then tap again», so it is never wrong.
 */
export const NO_PROMPT_MS = 1000;

/**
 * True once any web location request in this document has failed as «denied». Module
 * state on purpose: it lives exactly as long as the document, which is exactly as long
 * as WebKit's memory of the refusal.
 */
let deniedInThisDocument = false;

/**
 * After `locateOnce()` came back «denied», `elapsedMs` after the tap and with the
 * permission state as it was BEFORE the request: did someone just say no to a sheet,
 * or is the site blocked so that no sheet appeared at all? A «denied» known beforehand
 * is a block on every engine; otherwise the clock decides, because Safari says «prompt»
 * regardless and an absent API says nothing.
 */
export function deniedKind(elapsedMs: number, stateBefore: GeoPermission): DeniedKind {
  if (geoPlatform() !== 'iosApp') deniedInThisDocument = true;
  if (stateBefore === 'denied') return 'blocked';
  return elapsedMs < NO_PROMPT_MS ? 'blocked' : 'refused';
}

/** Must the retry reload the page before this browser will ask again? */
export function retryNeedsReload(): boolean {
  return deniedInThisDocument;
}

/**
 * The one-shot note across the reload. Stored in sessionStorage under the id of the
 * country or place that was being asked about — an id, never a position — and read
 * back exactly once by the screen that mounts after the reload. Without it the child
 * lands on the plain button with the idle note and concludes the app forgot.
 */
const RETRY_KEY = 'wb_world_geo_retry';

export function reloadForRetry(id: string): void {
  try {
    sessionStorage.setItem(RETRY_KEY, id);
  } catch {
    // Private mode or storage off: the note after the reload is skipped, nothing else.
  }
  window.location.reload();
}

/** True once, for the screen whose id was left by `reloadForRetry()`; always clears. */
export function consumeRetryReload(id: string): boolean {
  try {
    const stored = sessionStorage.getItem(RETRY_KEY);
    if (stored === null) return false;
    sessionStorage.removeItem(RETRY_KEY);
    return stored === id;
  } catch {
    return false;
  }
}

const AFTER_RELOAD: UiText<string> = {
  el: 'Έτοιμο! Πάτα «Είμαι εδώ!» ακόμη μία φορά.',
  en: 'Ready! Tap “I’m here!” once more.',
  de: 'Bereit! Tippe noch einmal auf „Ich bin da!“.',
  fr: 'C’est prêt ! Appuie encore une fois sur « Je suis là ! ».',
  es: '¡Listo! Pulsa «¡Estoy aquí!» una vez más.',
  it: 'Pronto! Tocca «Sono qui!» ancora una volta.',
};

/** The note shown after a retry reload: the one thing to do now. */
export const afterReloadNote = (lang: WorldLang): string => ui(AFTER_RELOAD, lang);

/**
 * The child's line. On a desktop the thing saying no is the browser, not a phone; in
 * the App Store or Play Store shell there is no «page», only the app.
 */
const BLOCKED: Record<'phone' | 'app' | 'desktop', UiText<string>> = {
  phone: {
    el: 'Το τηλέφωνο έχει κλειστή την τοποθεσία για αυτή τη σελίδα. Ένας μεγάλος μπορεί να την ανοίξει. Μετά ξαναπάτα.',
    en: 'The phone has location switched off for this page. A grown-up can switch it on. Then tap again.',
    de: 'Das Handy hat den Standort für diese Seite ausgeschaltet. Ein Erwachsener kann ihn einschalten. Dann tippe noch einmal.',
    fr: 'Le téléphone a coupé la position pour cette page. Un adulte peut la rallumer. Puis appuie encore.',
    es: 'El teléfono tiene la ubicación apagada para esta página. Un adulto puede encenderla. Luego pulsa otra vez.',
    it: 'Il telefono ha la posizione spenta per questa pagina. Un adulto può riaccenderla. Poi tocca di nuovo.',
  },
  app: {
    el: 'Το τηλέφωνο έχει κλειστή την τοποθεσία για το WiseBot. Ένας μεγάλος μπορεί να την ανοίξει. Μετά άνοιξε ξανά το WiseBot και ξαναπάτα.',
    en: 'The phone has location switched off for WiseBot. A grown-up can switch it on. Then open WiseBot again and tap again.',
    de: 'Das Handy hat den Standort für WiseBot ausgeschaltet. Ein Erwachsener kann ihn einschalten. Dann öffne WiseBot noch einmal und tippe noch einmal.',
    fr: 'Le téléphone a coupé la position pour WiseBot. Un adulte peut la rallumer. Puis rouvre WiseBot et appuie encore.',
    es: 'El teléfono tiene la ubicación apagada para WiseBot. Un adulto puede encenderla. Luego abre WiseBot otra vez y pulsa otra vez.',
    it: 'Il telefono ha la posizione spenta per WiseBot. Un adulto può riaccenderla. Poi riapri WiseBot e tocca di nuovo.',
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
 *   ios18         — Safari on iOS 18 and later, where Safari's settings moved under
 *                   Settings → Apps. iOS 26 is the same path.
 *   ios17         — Safari on iOS 17 and earlier: Settings → Safari → Location.
 *   iosPrivacy    — the phone-wide switch for every website in Safari, which the per-site
 *                   path cannot reach; a third line under the two above.
 *   iosApp18/17   — an app's own Location permission on the phone: the App Store shell
 *                   (`{app}` = «WiseBot Academy») or another browser on iPhone (Chrome,
 *                   Firefox, Edge — the switch is that app's, not Safari's).
 *   iosAppPrivacy — the phone-wide switch, third line for those.
 *   android       — Chrome with an address bar (and any Android browser's site info).
 *   androidApp    — the Play Store shell or an installed PWA: no address bar, so the
 *                   path goes through the Chrome app's own settings.
 *   desktop       — any desktop browser: the icon left of the address bar.
 * `{host}` is the site as this browser names it in its per-site list.
 */
type PathKey = 'ios18' | 'ios17' | 'iosApp18' | 'iosApp17' | 'android' | 'androidApp' | 'desktop';

const PATH: Record<PathKey | 'iosPrivacy' | 'iosAppPrivacy', UiText<string>> = {
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
  iosApp18: {
    el: 'Ρυθμίσεις → Εφαρμογές → {app} → Τοποθεσία → «Κατά τη χρήση της εφαρμογής»',
    en: 'Settings → Apps → {app} → Location → “While Using the App”',
    de: 'Einstellungen → Apps → {app} → Standort → „Beim Verwenden der App“',
    fr: 'Réglages → Apps → {app} → Position → « Lorsque l’app est active »',
    es: 'Ajustes → Apps → {app} → Ubicación → «Al usar la app»',
    it: 'Impostazioni → App → {app} → Posizione → «Mentre usi l’app»',
  },
  iosApp17: {
    el: 'Ρυθμίσεις → {app} → Τοποθεσία → «Κατά τη χρήση της εφαρμογής»',
    en: 'Settings → {app} → Location → “While Using the App”',
    de: 'Einstellungen → {app} → Standort → „Beim Verwenden der App“',
    fr: 'Réglages → {app} → Position → « Lorsque l’app est active »',
    es: 'Ajustes → {app} → Ubicación → «Al usar la app»',
    it: 'Impostazioni → {app} → Posizione → «Mentre usi l’app»',
  },
  iosAppPrivacy: {
    el: 'Αν πάλι όχι: Ρυθμίσεις → Απόρρητο και ασφάλεια → Υπηρεσίες τοποθεσίας → ανοιχτό',
    en: 'Still no? Settings → Privacy & Security → Location Services → on',
    de: 'Immer noch nicht? Einstellungen → Datenschutz & Sicherheit → Ortungsdienste → ein',
    fr: 'Toujours rien ? Réglages → Confidentialité et sécurité → Service de localisation → activé',
    es: '¿Sigue sin ir? Ajustes → Privacidad y seguridad → Localización → activada',
    it: 'Ancora no? Impostazioni → Privacy e sicurezza → Localizzazione → attiva',
  },
  android: {
    el: 'Chrome: το εικονίδιο δίπλα στη διεύθυνση → Άδειες → Τοποθεσία → «Να επιτρέπεται»',
    en: 'Chrome: the icon next to the address → Permissions → Location → “Allow”',
    de: 'Chrome: Symbol neben der Adresse → Berechtigungen → Standort → „Zulassen“',
    fr: 'Chrome : icône à côté de l’adresse → Autorisations → Position → « Autoriser »',
    es: 'Chrome: icono junto a la dirección → Permisos → Ubicación → «Permitir»',
    it: 'Chrome: icona accanto all’indirizzo → Autorizzazioni → Posizione → «Consenti»',
  },
  androidApp: {
    el: 'Chrome → ⋮ → Ρυθμίσεις → Ρυθμίσεις ιστότοπου → Τοποθεσία → {host} → «Να επιτρέπεται»',
    en: 'Chrome → ⋮ → Settings → Site settings → Location → {host} → “Allow”',
    de: 'Chrome → ⋮ → Einstellungen → Website-Einstellungen → Standort → {host} → „Zulassen“',
    fr: 'Chrome → ⋮ → Paramètres → Paramètres des sites → Position → {host} → « Autoriser »',
    es: 'Chrome → ⋮ → Configuración → Configuración de sitios → Ubicación → {host} → «Permitir»',
    it: 'Chrome → ⋮ → Impostazioni → Impostazioni sito → Posizione → {host} → «Consenti»',
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

/** The App Store shell's name on the phone, as in its Info.plist `CFBundleDisplayName`. */
const SHELL_APP_NAME = 'WiseBot Academy';

const ua = (): string => (typeof navigator === 'undefined' ? '' : navigator.userAgent);

/**
 * iPhone Safari still reports the real iOS version ("CPU iPhone OS 18_1 like Mac OS X");
 * an iPad, or an iPhone with Request Desktop Website, says "Macintosh" and only carries
 * "Version/17.6". Unknown means current.
 */
function iosMajor(): number {
  const m = /OS (\d+)_/.exec(ua()) ?? /Version\/(\d+)/.exec(ua());
  return m ? Number(m[1]) : 18;
}

/** Chrome, Firefox, Edge and Opera on iPhone: the Location switch is the app's, not Safari's. */
function otherIosBrowser(): string | null {
  const m = /(CriOS|FxiOS|EdgiOS|OPT)\//.exec(ua());
  if (!m) return null;
  return { CriOS: 'Chrome', FxiOS: 'Firefox', EdgiOS: 'Edge', OPT: 'Opera' }[m[1]] ?? m[1];
}

/** Installed as an app (Play Store shell, home-screen PWA): there is no address bar to point at. */
function standalone(): boolean {
  try {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches) return true;
    return typeof document !== 'undefined' && document.referrer.startsWith('android-app://');
  } catch {
    return false;
  }
}

function pathKey(): { key: PathKey; app: string } {
  const platform = geoPlatform();
  const modern = iosMajor() >= 18;
  if (platform === 'iosApp') return { key: modern ? 'iosApp18' : 'iosApp17', app: SHELL_APP_NAME };
  if (platform === 'ios') {
    const browser = otherIosBrowser();
    if (browser) return { key: modern ? 'iosApp18' : 'iosApp17', app: browser };
    return { key: modern ? 'ios18' : 'ios17', app: 'Safari' };
  }
  if (platform === 'android') return { key: standalone() ? 'androidApp' : 'android', app: 'Chrome' };
  return { key: 'desktop', app: '' };
}

export interface BlockedNote {
  /** For the child. */
  note: string;
  /** For the grown-up: the breadcrumb to the switch. */
  path: string;
  /** iPhone only: the phone-wide switch, in case the per-app or per-site one was not it. */
  more?: string;
}

/** The sentences for «the phone will not ask», for the platform this is running on. */
export function blockedNote(lang: WorldLang): BlockedNote {
  const { key, app } = pathKey();
  const host = typeof location !== 'undefined' && location.hostname ? location.hostname : 'wisebot.gr';
  const isApp = key === 'androidApp' || geoPlatform() === 'iosApp';
  const isIosApp = key === 'iosApp18' || key === 'iosApp17';
  const isIosSafari = key === 'ios18' || key === 'ios17';
  return {
    note: ui(BLOCKED[key === 'desktop' ? 'desktop' : isApp ? 'app' : 'phone'], lang),
    path: ui(PATH[key], lang).replace('{host}', host).replace('{app}', app),
    more: isIosSafari ? ui(PATH.iosPrivacy, lang) : isIosApp ? ui(PATH.iosAppPrivacy, lang) : undefined,
  };
}
