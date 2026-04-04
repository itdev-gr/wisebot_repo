/**
 * POST-BUILD SEO PAGE GENERATOR
 *
 * Creates route-specific HTML files from the built index.html,
 * injecting correct <title>, <meta description>, <canonical>, and OG tags per route.
 *
 * Vercel serves these files for their respective routes BEFORE the SPA fallback rewrite,
 * so Google sees correct meta tags without executing JavaScript.
 *
 * Run: node scripts/generate-seo-pages.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const BASE_URL = 'https://wisebot.gr';

// SEO metadata per route (Greek primary, since target audience is Greek)
const ROUTES = [
  {
    path: '/academy',
    title: 'Ακαδημία — Μάθε για 90 Σπουδαίους Ανθρώπων | WiseBot Academy',
    description: 'Ανακάλυψε τις ιστορίες 90 σπουδαίων ανθρώπων! Από τον Αϊνστάιν μέχρι τη Frida Kahlo. Διαδραστικά μαθήματα με ήχο και quiz για παιδιά 6-13.',
    ogTitle: 'WiseBot Academy — Ακαδημία | Μάθε για 90 Σπουδαίους Ανθρώπους',
    noscript: `
      <h1>WiseBot Academy — Ακαδημία: Μάθε για 90 Σπουδαίους Ανθρώπους</h1>
      <p>Ανακάλυψε τις ιστορίες 90 σπουδαίων ανθρώπων που άλλαξαν τον κόσμο! Διαδραστικά μαθήματα με ήχο, εικόνες και quiz.</p>
      <p>Από τον Albert Einstein μέχρι τη Frida Kahlo, από τον Νικόλα Τέσλα μέχρι τη Marie Curie. Κάθε ιστορία γίνεται μάθημα ζωής.</p>
      <p><a href="${BASE_URL}/ebooks">📚 Ebooks</a> | <a href="${BASE_URL}/quiz">🧠 Quiz</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/ebooks',
    title: 'Ebooks — Διαδραστικά Βιβλία για Παιδιά με AI | WiseBot Academy',
    description: 'Διάβασε δωρεάν ebooks με αφήγηση AI! Ιστορίες για Αρχαία Ελλάδα, Διάστημα, Ζώα, Τεχνολογία και πολλά ακόμα. Κάθε βιβλίο έχει quiz!',
    ogTitle: 'WiseBot Academy — Ebooks | Διαδραστικά Βιβλία για Παιδιά',
    noscript: `
      <h1>WiseBot Academy — 26 Εκπαιδευτικά Ebooks για Παιδιά</h1>
      <p>Διάβασε 26 δωρεάν ebooks στα Ελληνικά και Αγγλικά! Κάθε βιβλίο έχει αφήγηση με AI text-to-speech και quiz στο τέλος.</p>
      <h2>Κατηγορίες Βιβλίων</h2>
      <ul>
        <li>🏛️ Αρχαία Ελλάδα & Μυθολογία</li>
        <li>🚀 Διάστημα & Αστρονομία</li>
        <li>🦁 Ζώα & Φύση</li>
        <li>💻 Τεχνολογία & Επιστήμη</li>
        <li>🎨 Τέχνη & Πολιτισμός</li>
        <li>🌍 Ιστορία & Γεωγραφία</li>
      </ul>
      <p><a href="${BASE_URL}/academy">🎓 Ακαδημία</a> | <a href="${BASE_URL}/quiz">🧠 Quiz</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/music',
    title: 'Music Studio — Φτιάξε Τραγούδια με AI | WiseBot Academy',
    description: 'Δημιούργησε τα δικά σου τραγούδια με τεχνητή νοημοσύνη! Επέλεξε στυλ μουσικής, γράψε στίχους και ο AI θα τραγουδήσει για σένα.',
    ogTitle: 'WiseBot Academy — Music Studio | Φτιάξε Τραγούδια με AI',
    noscript: `
      <h1>WiseBot Academy — Music Studio: Φτιάξε Τραγούδια με AI</h1>
      <p>Δημιούργησε τα δικά σου τραγούδια με τεχνητή νοημοσύνη! Γράψε στίχους, επίλεξε μουσικό στυλ (Pop, Rock, Hip-Hop, Electronic, Lullaby), και η AI δημιουργεί πραγματικά τραγούδια.</p>
      <p>3 τρόποι δημιουργίας: Guided Wizard, Custom Lyrics, ή Simple Description. Κατέβασε τα τραγούδια σου και μοιράσου τα!</p>
      <p><a href="${BASE_URL}/factory">🎨 Hero Factory</a> | <a href="${BASE_URL}/cinema">🎬 Cinema</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/game',
    title: 'Παιχνίδια — 16 Arcade Games για Παιδιά Δωρεάν | WiseBot Academy',
    description: 'Παίξε δωρεάν 16 arcade παιχνίδια! Snake, Tetris, Memory, Breakout, Tower Defense και πολλά ακόμα. Κέρδισε XP και credits παίζοντας!',
    ogTitle: 'WiseBot Academy — Παιχνίδια | 16 Δωρεάν Arcade Games',
    noscript: `
      <h1>WiseBot Academy — 16 Δωρεάν Παιδικά Παιχνίδια Online</h1>
      <p>Παίξε 16 δωρεάν arcade παιχνίδια και κέρδισε credits! Wizard Duel, Dungeon Explorer, AI Art Battle, Geometry Dash, Endless Runner, Tower Defense, Hero Fusion, Memory Cards, Tactical Football, Nebula Catch, Ball Rush, Puzzle, Broken Company, Sky Metropolis, Slingshot, Spot It.</p>
      <p><a href="${BASE_URL}/quiz">🧠 Quiz</a> | <a href="${BASE_URL}/ebooks">📚 Ebooks</a> | <a href="${BASE_URL}/academy">🎓 Ακαδημία</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/quiz',
    title: 'Quiz — Εκπαιδευτικά Quiz για Παιδιά | WiseBot Academy',
    description: 'Δοκίμασε τις γνώσεις σου με διασκεδαστικά quiz! Ιστορία, Επιστήμη, Γεωγραφία, Τεχνολογία και πολλά ακόμα θέματα.',
    ogTitle: 'WiseBot Academy — Quiz | Εκπαιδευτικά Quiz για Παιδιά',
    noscript: `
      <h1>WiseBot Academy — Εκπαιδευτικά Quiz για Παιδιά</h1>
      <p>Δοκίμασε τις γνώσεις σου με quiz σε πολλά θέματα: Ιστορία, Επιστήμη, Γεωγραφία, Τεχνολογία, Φύση, Τέχνη. Κέρδισε credits και XP με κάθε σωστή απάντηση!</p>
      <p><a href="${BASE_URL}/academy">🎓 Ακαδημία</a> | <a href="${BASE_URL}/ebooks">📚 Ebooks</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/factory',
    title: 'Hero Factory — Φτιάξε τον Ήρωά σου με AI | WiseBot Academy',
    description: 'Δημιούργησε μοναδικούς ήρωες με τεχνητή νοημοσύνη! Περίγραψε τον ήρωά σου και η AI θα τον ζωγραφίσει σε δευτερόλεπτα.',
    ogTitle: 'WiseBot Academy — Hero Factory | Δημιούργησε Ήρωες με AI',
    noscript: `
      <h1>WiseBot Academy — Hero Factory: Δημιούργησε Ήρωες με AI</h1>
      <p>Φτιάξε μοναδικούς ήρωες με τεχνητή νοημοσύνη! Γράψε μια περιγραφή ή ανέβασε φωτογραφία, και η AI δημιουργεί εικόνες σε δευτερόλεπτα. Μετάτρεψέ τους σε 3D μοντέλα ή video!</p>
      <p><a href="${BASE_URL}/3d-factory">🏗️ 3D Factory</a> | <a href="${BASE_URL}/cinema">🎬 Cinema</a> | <a href="${BASE_URL}/market">🏪 Hero Market</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/cinema',
    title: 'Cinema — Φτιάξε Video με AI | WiseBot Academy',
    description: 'Ζωντάνεψε τους ήρωές σου με AI video! Δώσε μια εικόνα και η AI θα φτιάξει ένα μαγικό video clip σε δευτερόλεπτα.',
    ogTitle: 'WiseBot Academy — Cinema | Δημιούργησε Video με AI',
    noscript: `
      <h1>WiseBot Academy — Cinema: Δημιούργησε Video με AI</h1>
      <p>Ζωντάνεψε τους ήρωές σου με AI video! Δώσε μια εικόνα, γράψε τι θέλεις να συμβεί, και η τεχνητή νοημοσύνη δημιουργεί μαγικά video clips.</p>
      <p><a href="${BASE_URL}/factory">🎨 Hero Factory</a> | <a href="${BASE_URL}/3d-factory">🏗️ 3D Factory</a> | <a href="${BASE_URL}/music">🎵 Music Studio</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/3d-factory',
    title: '3D Factory — Φτιάξε 3D Μοντέλα με AI | WiseBot Academy',
    description: 'Δημιούργησε 3D μοντέλα από τους ήρωές σου! Μετέτρεψε εικόνες σε 3D αντικείμενα με τεχνητή νοημοσύνη.',
    ogTitle: 'WiseBot Academy — 3D Factory | Δημιούργησε 3D Μοντέλα',
    noscript: `
      <h1>WiseBot Academy — 3D Factory: Δημιούργησε 3D Μοντέλα με AI</h1>
      <p>Μετάτρεψε τους ήρωές σου σε 3D μοντέλα! Ανέβασε μια εικόνα και η τεχνητή νοημοσύνη δημιουργεί ένα 3D αντικείμενο που μπορείς να περιστρέψεις και να κατεβάσεις.</p>
      <p><a href="${BASE_URL}/factory">🎨 Hero Factory</a> | <a href="${BASE_URL}/cinema">🎬 Cinema</a> | <a href="${BASE_URL}/music">🎵 Music Studio</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/business',
    title: 'Business Lab — Κάνε το Πρώτο σου Business | WiseBot Academy',
    description: 'Μάθε επιχειρηματικότητα παίζοντας! Δημιούργησε το δικό σου brand, φτιάξε λογότυπο με AI και γίνε CEO.',
    ogTitle: 'WiseBot Academy — Business Lab | Μάθε Επιχειρηματικότητα',
    noscript: `
      <h1>WiseBot Academy — Business Lab: Κάνε το Πρώτο σου Business</h1>
      <p>Μάθε επιχειρηματικότητα μέσα από παιχνίδι! Δημιούργησε το δικό σου brand, φτιάξε λογότυπο με AI, και γίνε CEO της εικονικής σου επιχείρησης.</p>
      <p><a href="${BASE_URL}/factory">🎨 Hero Factory</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/academy">🎓 Ακαδημία</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/market',
    title: 'Hero Market — Αγορά Ηρώων | WiseBot Academy',
    description: 'Ανακάλυψε ήρωες από άλλα παιδιά στο Hero Market! Δες τις δημιουργίες τους, αγόρασε και πούλησε ήρωες.',
    ogTitle: 'WiseBot Academy — Hero Market | Αγορά Ηρώων',
    noscript: `
      <h1>WiseBot Academy — Hero Market: Αγορά & Πώληση Ηρώων</h1>
      <p>Ανακάλυψε ήρωες από άλλα παιδιά! Αγόρασε, πούλησε και αντάλλαξε ήρωες στο Hero Market.</p>
      <p><a href="${BASE_URL}/factory">🎨 Hero Factory</a> | <a href="${BASE_URL}/wise-friends">🤝 Wise Friends</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/wise-friends',
    title: 'Wise Friends — Βρες Φίλους & Παίξε | WiseBot Academy',
    description: 'Γνώρισε άλλα παιδιά, πρόκαλέ τους σε quiz και μοιράσου τις δημιουργίες σου στο WiseBot Academy!',
    ogTitle: 'WiseBot Academy — Wise Friends | Κοινότητα',
    noscript: `
      <h1>WiseBot Academy — Wise Friends: Βρες Φίλους & Παίξε</h1>
      <p>Γνώρισε άλλα παιδιά, πρόκαλέ τους σε quiz, μοιράσου τους ήρωές σου! Ασφαλής κοινότητα χωρίς ελεύθερο chat.</p>
      <p><a href="${BASE_URL}/market">🏪 Hero Market</a> | <a href="${BASE_URL}/quiz">🧠 Quiz</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  // ═══ SEO LANDING PAGES ═══
  {
    path: '/ai-paidia',
    title: 'AI για Παιδιά — WiseBot Academy | Εκπαίδευση & Δημιουργία με Τεχνητή Νοημοσύνη',
    description: 'Ανακάλυψε τον κόσμο του AI για παιδιά! Φτιάξε τραγούδια, εικόνες, video, 3D μοντέλα. Μάθε ιστορίες 90 σπουδαίων ανθρώπων. Το 1ο Ελληνικό εκπαιδευτικό AI για παιδιά 6-13.',
    ogTitle: 'AI για Παιδιά — WiseBot Academy | Εκπαίδευση με Τεχνητή Νοημοσύνη',
    noscript: `
      <h1>AI για Παιδιά — WiseBot Academy: Μάθε, Δημιούργησε, Παίξε!</h1>
      <p>Η τεχνητή νοημοσύνη (AI) δεν είναι μόνο για ενήλικες. Το WiseBot Academy φέρνει τη δύναμη του AI στα χέρια παιδιών 6-13 ετών.</p>
      <h2>Τι μπορεί να κάνει ένα παιδί με AI;</h2>
      <ul>
        <li>🎵 Φτιάχνει δικά του τραγούδια με AI Music Studio</li>
        <li>🎨 Δημιουργεί εικόνες & ήρωες με Hero Factory</li>
        <li>🎬 Φτιάχνει AI video με Cinema</li>
        <li>🧊 Δημιουργεί 3D μοντέλα με 3D Factory</li>
        <li>📚 Μαθαίνει από ιστορίες 90 σπουδαίων ανθρώπων</li>
      </ul>
      <p><a href="${BASE_URL}/academy">🎓 Ακαδημία</a> | <a href="${BASE_URL}/music">🎵 Music Studio</a> | <a href="${BASE_URL}/game">🎮 Παιχνίδια</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/paidika-paixnidia',
    title: 'Παιδικά Παιχνίδια Online Δωρεάν — 16 Arcade Games | WiseBot Academy',
    description: '16 δωρεάν παιδικά παιχνίδια online! Wizard Duel, Dungeon Explorer, Memory Cards, Geometry Dash, Tower Defense. Κέρδισε credits & badges. Για παιδιά 6-13.',
    ogTitle: 'Παιδικά Παιχνίδια Online Δωρεάν — 16 Arcade Games | WiseBot',
    noscript: `
      <h1>Παιδικά Παιχνίδια Online — 16 Δωρεάν Arcade Games</h1>
      <p>Αναζητάς παιδικά παιχνίδια online δωρεάν; Το WiseBot Academy έχει 16 δωρεάν arcade games για παιδιά 6-13 ετών. Χωρίς διαφημίσεις, 100% ασφαλή.</p>
      <h2>Ποια παιχνίδια υπάρχουν;</h2>
      <ul>
        <li>⚔️ Wizard Duel — μάχη μαγείας</li>
        <li>🏰 Dungeon Explorer — εξερεύνηση μπουντρουμιών</li>
        <li>🧠 Memory Cards — παιχνίδι μνήμης</li>
        <li>🔷 Geometry Dash — endless runner</li>
        <li>🏰 Tower Defense — στρατηγική</li>
        <li>⚽ Tactical Football — ποδόσφαιρο</li>
      </ul>
      <p><a href="${BASE_URL}/game">🎮 Όλα τα Παιχνίδια</a> | <a href="${BASE_URL}/quiz">🧠 Quiz</a> | <a href="${BASE_URL}/academy">🎓 Ακαδημία</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/ekpaideutiko-ai',
    title: 'Εκπαιδευτικό AI για Παιδιά — Μάθε Ιστορία, Επιστήμη, Τέχνη | WiseBot Academy',
    description: 'Εκπαιδευτικό AI που μαθαίνει στα παιδιά 6-13 ετών. Ιστορίες 90 σπουδαίων ανθρώπων, ebooks, quiz, επιχειρηματικότητα. Αναγνωρισμένο από εκπαιδευτικούς.',
    ogTitle: 'Εκπαιδευτικό AI για Παιδιά — WiseBot Academy | Η Ακαδημία του Μέλλοντος',
    noscript: `
      <h1>Εκπαιδευτικό AI για Παιδιά — Η Ακαδημία του Μέλλοντος</h1>
      <p>Το WiseBot Academy είναι το πρώτο Ελληνικό εκπαιδευτικό AI platform για παιδιά. Συνδυάζει gamified μάθηση, τεχνητή νοημοσύνη και εκπαιδευτικό περιεχόμενο.</p>
      <h2>Τι μαθαίνουν τα παιδιά;</h2>
      <ul>
        <li>🧠 Ιστορίες 90 Σπουδαίων Ανθρώπων (Αϊνστάιν, Tesla, Curie, Da Vinci)</li>
        <li>📖 26 Εκπαιδευτικά Ebooks (Αρχαία Ελλάδα, Διάστημα, Ζώα, Τεχνολογία)</li>
        <li>❓ Quiz Γνώσεων σε Ιστορία, Γεωγραφία, Επιστήμη</li>
        <li>💼 Επιχειρηματικότητα — Δημιούργησε brand, φτιάξε λογότυπο</li>
      </ul>
      <p><a href="${BASE_URL}/academy">🎓 Ακαδημία</a> | <a href="${BASE_URL}/ebooks">📚 Ebooks</a> | <a href="${BASE_URL}/quiz">🧠 Quiz</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
  {
    path: '/ftiaxe-tragoudia-ai',
    title: 'Φτιάξε Τραγούδια με AI Δωρεάν — Music Studio για Παιδιά | WiseBot',
    description: 'Φτιάξε δικά σου τραγούδια με AI! Γράψε στίχους, επίλεξε Pop, Rock, Hip-Hop. Η AI τραγουδά για σένα. Δωρεάν AI Music Studio για παιδιά 6-13.',
    ogTitle: 'Φτιάξε Τραγούδια με AI — WiseBot Music Studio | Δωρεάν',
    noscript: `
      <h1>Φτιάξε Δικά σου Τραγούδια με AI — Δωρεάν!</h1>
      <p>Με το WiseBot Music Studio, κάθε παιδί μπορεί να γίνει δημιουργός μουσικής — χωρίς να ξέρει νότες!</p>
      <h2>3 τρόποι δημιουργίας τραγουδιών με AI</h2>
      <ul>
        <li>🧙 Guided Wizard — βήμα-βήμα οδηγός</li>
        <li>✏️ Custom Lyrics — γράψε τους δικούς σου στίχους</li>
        <li>💬 Simple Description — περίγραψε τι θέλεις</li>
      </ul>
      <h2>Στυλ μουσικής</h2>
      <p>Pop, Rock, Hip-Hop, Electronic, Lullaby, Classical και πολλά ακόμα!</p>
      <p><a href="${BASE_URL}/music">🎵 Music Studio</a> | <a href="${BASE_URL}/factory">🎨 Hero Factory</a> | <a href="${BASE_URL}/cinema">🎬 Cinema</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>
    `,
  },
];

function generatePage(baseHtml, route) {
  let html = baseHtml;
  const url = `${BASE_URL}${route.path}`;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${route.description}">`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${url}">`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${url}">`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${route.ogTitle}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${route.description}">`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${route.ogTitle}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${route.description}">`
  );

  // Replace noscript content with route-specific content
  if (route.noscript) {
    html = html.replace(
      /<!-- SEO: Rich noscript content for crawlers that don't run JS -->[\s\S]*?<\/noscript>/,
      `<!-- SEO: Route-specific noscript content -->\n  <noscript>\n    <div style="max-width:900px;margin:40px auto;padding:20px;font-family:system-ui,sans-serif;color:#333;line-height:1.8;">${route.noscript}\n      <p>© 2026 WiseBot Academy — <a href="${BASE_URL}">wisebot.gr</a></p>\n    </div>\n  </noscript>`
    );
  }

  return html;
}

async function main() {
  const indexPath = path.join(DIST, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  let created = 0;

  for (const route of ROUTES) {
    const dirPath = path.join(DIST, route.path.slice(1)); // e.g., dist/academy
    const filePath = path.join(dirPath, 'index.html');

    // Create directory
    fs.mkdirSync(dirPath, { recursive: true });

    // Generate and write page
    const pageHtml = generatePage(baseHtml, route);
    fs.writeFileSync(filePath, pageHtml, 'utf-8');
    created++;
    console.log(`  ✅ ${route.path} → ${filePath}`);
  }

  console.log(`\n🎉 Generated ${created} SEO pages in dist/`);
}

main().catch(err => {
  console.error('❌ SEO page generation failed:', err);
  process.exit(1);
});
