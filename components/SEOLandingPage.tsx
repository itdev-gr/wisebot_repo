/**
 * SEOLandingPage — Rich content landing pages targeting Greek/English search queries
 * Routes: /ai-paidia, /paidika-paixnidia, /ekpaideutiko-ai, /ftiaxe-tragoudia-ai
 * Each page has: H1, H2, H3, paragraphs, FAQ, internal links, structured data
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Music, Gamepad2, HelpCircle, Wand2, Film, Cuboid, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { ACADEMY_STORY_COUNT } from '../data/contentCounts';

interface SEOLandingPageProps {
  lang: 'el' | 'en';
  variant: 'ai-paidia' | 'paidika-paixnidia' | 'ekpaideutiko-ai' | 'ftiaxe-tragoudia-ai';
}

const CONTENT = {
  'ai-paidia': {
    title: {
      el: 'AI για Παιδιά — WiseBot Academy | Εκπαίδευση & Δημιουργία με Τεχνητή Νοημοσύνη',
      en: 'AI for Kids — WiseBot Academy | Education & Creation with Artificial Intelligence',
    },
    description: {
      el: `Ανακάλυψε τον κόσμο του AI για παιδιά! Φτιάξε τραγούδια, εικόνες, video, 3D μοντέλα. Μάθε ιστορίες ${ACADEMY_STORY_COUNT} σπουδαίων ανθρώπων. Το 1ο Ελληνικό εκπαιδευτικό AI για παιδιά 6-13.`,
      en: `Discover the world of AI for kids! Create songs, images, videos, 3D models. Learn stories of ${ACADEMY_STORY_COUNT} great people. The 1st Greek educational AI for kids 6-13.`,
    },
    path: '/ai-paidia',
    h1: { el: 'AI για Παιδιά — Μάθε, Δημιούργησε, Παίξε!', en: 'AI for Kids — Learn, Create, Play!' },
    intro: {
      el: 'Η τεχνητή νοημοσύνη (AI) δεν είναι μόνο για ενήλικες. Το WiseBot Academy φέρνει τη δύναμη του AI στα χέρια παιδιών 6-13 ετών — με ασφαλή, εκπαιδευτικό και διασκεδαστικό τρόπο.',
      en: 'Artificial intelligence (AI) is not just for adults. WiseBot Academy puts the power of AI in the hands of kids aged 6-13 — in a safe, educational and fun way.',
    },
    sections: [
      {
        h2: { el: 'Τι μπορεί να κάνει ένα παιδί με AI;', en: 'What can a child do with AI?' },
        items: [
          { icon: '🎵', h3: { el: 'Φτιάχνει δικά του τραγούδια', en: 'Creates their own songs' }, text: { el: 'Γράφει στίχους, επιλέγει στυλ μουσικής (Pop, Rock, Hip-Hop) και η AI δημιουργεί πραγματικά τραγούδια σε δευτερόλεπτα.', en: 'Writes lyrics, chooses music style (Pop, Rock, Hip-Hop) and AI creates real songs in seconds.' }, link: '/music' },
          { icon: '🎨', h3: { el: 'Δημιουργεί εικόνες & ήρωες', en: 'Creates images & heroes' }, text: { el: 'Περιγράφει έναν ήρωα και η AI ζωγραφίζει. Μπορεί ακόμα να ανεβάσει φωτογραφία και να γίνει superhero!', en: 'Describes a hero and AI draws it. Can even upload a photo and become a superhero!' }, link: '/factory' },
          { icon: '🎬', h3: { el: 'Φτιάχνει AI video', en: 'Creates AI videos' }, text: { el: 'Γράφει τι θέλει να δει και η AI το ζωντανεύει. Μοναδικά video clips σε λίγα δευτερόλεπτα.', en: 'Writes what they want to see and AI brings it to life. Unique video clips in seconds.' }, link: '/cinema' },
          { icon: '🧊', h3: { el: 'Δημιουργεί 3D μοντέλα', en: 'Creates 3D models' }, text: { el: 'Μετατρέπει εικόνες σε 3D μοντέλα που μπορεί να περιστρέψει, να κατεβάσει ή ακόμα και να τυπώσει σε 3D printer!', en: 'Converts images to 3D models that can be rotated, downloaded or even printed on a 3D printer!' }, link: '/3d-factory' },
        ],
      },
      {
        h2: { el: 'Γιατί το WiseBot Academy είναι διαφορετικό;', en: 'Why is WiseBot Academy different?' },
        items: [
          { icon: '🇬🇷', h3: { el: 'Ελληνικό & Αγγλικό περιεχόμενο', en: 'Greek & English content' }, text: { el: 'Το μόνο εκπαιδευτικό AI platform με πλήρες Ελληνικό περιεχόμενο. Τα παιδιά μαθαίνουν και στις δύο γλώσσες.', en: 'The only educational AI platform with full Greek content. Kids learn in both languages.' }, link: '/academy' },
          { icon: '🔒', h3: { el: '100% Ασφαλές για παιδιά', en: '100% Safe for kids' }, text: { el: 'Δεν υπάρχει ελεύθερο chat. Γονεϊκό dashboard. GDPR compliant. Φτιαγμένο για παιδιά από παιδαγωγούς.', en: 'No open chat. Parental dashboard. GDPR compliant. Made for kids by educators.' }, link: '/wise-friends' },
          { icon: '🎮', h3: { el: 'Gamified μάθηση', en: 'Gamified learning' }, text: { el: 'Credits, XP, levels, badges, daily missions. Τα παιδιά θέλουν να μαθαίνουν γιατί είναι σαν παιχνίδι!', en: 'Credits, XP, levels, badges, daily missions. Kids want to learn because it feels like a game!' }, link: '/game' },
        ],
      },
    ],
    faq: [
      { q: { el: 'Για ποιες ηλικίες είναι το WiseBot Academy;', en: 'What ages is WiseBot Academy for?' }, a: { el: 'Για παιδιά 6-13 ετών. Κάθε λειτουργία έχει σχεδιαστεί με βάση την ηλικία.', en: 'For kids aged 6-13. Every feature is designed with age in mind.' } },
      { q: { el: 'Κοστίζει κάτι;', en: 'Does it cost anything?' }, a: { el: 'Η βασική χρήση είναι ΔΩΡΕΑΝ! Υπάρχουν και premium δυνατότητες με συνδρομή.', en: 'Basic use is FREE! There are also premium features with a subscription.' } },
      { q: { el: 'Πώς είναι ασφαλές για παιδιά;', en: 'How is it safe for kids?' }, a: { el: 'Δεν υπάρχει ελεύθερο chat. Οι γονείς έχουν dashboard ελέγχου. Ακολουθούμε GDPR και COPPA.', en: 'No open chat. Parents have a control dashboard. We follow GDPR and COPPA.' } },
    ],
  },
  'paidika-paixnidia': {
    title: {
      el: 'Παιδικά Παιχνίδια Online Δωρεάν — 16 Arcade Games | WiseBot Academy',
      en: 'Free Kids Games Online — 16 Arcade Games | WiseBot Academy',
    },
    description: {
      el: '16 δωρεάν παιδικά παιχνίδια online! Wizard Duel, Dungeon Explorer, Memory Cards, Geometry Dash, Tower Defense. Κέρδισε credits & badges. Για παιδιά 6-13.',
      en: '16 free kids games online! Wizard Duel, Dungeon Explorer, Memory Cards, Geometry Dash, Tower Defense. Earn credits & badges. For kids 6-13.',
    },
    path: '/paidika-paixnidia',
    h1: { el: 'Παιδικά Παιχνίδια Online — 16 Δωρεάν Arcade Games', en: 'Kids Games Online — 16 Free Arcade Games' },
    intro: {
      el: 'Αναζητάς παιδικά παιχνίδια online δωρεάν; Το WiseBot Academy έχει 16 δωρεάν arcade games ειδικά για παιδιά 6-13 ετών. Χωρίς διαφημίσεις, χωρίς in-app purchases, 100% ασφαλή.',
      en: 'Looking for free kids games online? WiseBot Academy has 16 free arcade games specially for kids 6-13. No ads, no in-app purchases, 100% safe.',
    },
    sections: [
      {
        h2: { el: 'Ποια παιχνίδια υπάρχουν;', en: 'What games are available?' },
        items: [
          { icon: '⚔️', h3: { el: 'Wizard Duel', en: 'Wizard Duel' }, text: { el: 'Μάχη μαγείας! Πέταξε ξόρκια και νίκησε τον αντίπαλό σου σε αυτό το παιχνίδι στρατηγικής.', en: 'Magic battle! Cast spells and defeat your opponent in this strategy game.' }, link: '/game' },
          { icon: '🏰', h3: { el: 'Dungeon Explorer', en: 'Dungeon Explorer' }, text: { el: 'Εξερεύνησε σκοτεινά μπουντρούμια, μάζεψε θησαυρούς και ξεφύγε από τέρατα!', en: 'Explore dark dungeons, collect treasures and escape from monsters!' }, link: '/game' },
          { icon: '🧠', h3: { el: 'Memory Cards', en: 'Memory Cards' }, text: { el: 'Βρες τα ζευγάρια! Το κλασικό παιχνίδι μνήμης με εκπαιδευτικές εικόνες από την ακαδημία.', en: 'Find the pairs! The classic memory game with educational images from the academy.' }, link: '/game' },
          { icon: '🔷', h3: { el: 'Geometry Dash', en: 'Geometry Dash' }, text: { el: 'Πήδα, τρέξε, αποφύγε εμπόδια! Το πιο εθιστικό runner παιχνίδι για παιδιά.', en: 'Jump, run, avoid obstacles! The most addictive runner game for kids.' }, link: '/game' },
        ],
      },
      {
        h2: { el: 'Γιατί τα παιχνίδια στο WiseBot είναι εκπαιδευτικά;', en: 'Why are games at WiseBot educational?' },
        items: [
          { icon: '📚', h3: { el: 'Κερδίζεις γνώση παίζοντας', en: 'Gain knowledge by playing' }, text: { el: 'Πολλά παιχνίδια βασίζονται σε ερωτήσεις από την Ακαδημία. Μαθαίνεις ιστορία, επιστήμη, γεωγραφία.', en: 'Many games are based on questions from the Academy. Learn history, science, geography.' }, link: '/academy' },
          { icon: '🏆', h3: { el: 'Credits & XP', en: 'Credits & XP' }, text: { el: 'Κάθε παιχνίδι δίνει XP και επίπεδα. Τα credits για AI δημιουργίες τα αγοράζει ο γονιός — ή τα κερδίζεις με ολόκληρα βιβλία.', en: 'Every game gives XP and levels. Credits for AI creations are bought by a parent — or earned with whole books.' }, link: '/game' },
          { icon: '👫', h3: { el: 'Πρόκαλε φίλους', en: 'Challenge friends' }, text: { el: 'Πρόκαλε φίλους σε quiz και παιχνίδια. Δες ποιος είναι καλύτερος!', en: 'Challenge friends to quizzes and games. See who is better!' }, link: '/wise-friends' },
        ],
      },
    ],
    faq: [
      { q: { el: 'Είναι δωρεάν τα παιχνίδια;', en: 'Are the games free?' }, a: { el: 'Ναι! Όλα τα arcade παιχνίδια είναι δωρεάν. Δεν χρειάζεσαι κάρτα.', en: 'Yes! All arcade games are free. No card needed.' } },
      { q: { el: 'Υπάρχουν διαφημίσεις;', en: 'Are there ads?' }, a: { el: 'Όχι! Το WiseBot Academy δεν έχει διαφημίσεις. Ασφαλές περιβάλλον για παιδιά.', en: 'No! WiseBot Academy has no ads. Safe environment for kids.' } },
      { q: { el: 'Χρειάζεται εγγραφή;', en: 'Does it require registration?' }, a: { el: 'Μπορείς να δεις τα παιχνίδια και χωρίς λογαριασμό. Για να παίξεις και να κερδίζεις credits χρειάζεσαι λογαριασμό - δωρεάν!', en: 'You can browse games without an account. To play and earn credits you need an account - free!' } },
    ],
  },
  'ekpaideutiko-ai': {
    title: {
      el: 'Εκπαιδευτικό AI για Παιδιά — Μάθε Ιστορία, Επιστήμη, Τέχνη | WiseBot Academy',
      en: 'Educational AI for Kids — Learn History, Science, Art | WiseBot Academy',
    },
    description: {
      el: `Εκπαιδευτικό AI που μαθαίνει στα παιδιά 6-13 ετών. Ιστορίες ${ACADEMY_STORY_COUNT} σπουδαίων ανθρώπων, ebooks, quiz, επιχειρηματικότητα. Αναγνωρισμένο από εκπαιδευτικούς.`,
      en: `Educational AI that teaches kids aged 6-13. Stories of ${ACADEMY_STORY_COUNT} great people, ebooks, quizzes, entrepreneurship. Recognized by educators.`,
    },
    path: '/ekpaideutiko-ai',
    h1: { el: 'Εκπαιδευτικό AI για Παιδιά — Η Ακαδημία του Μέλλοντος', en: 'Educational AI for Kids — The Academy of the Future' },
    intro: {
      el: 'Το WiseBot Academy είναι το πρώτο Ελληνικό εκπαιδευτικό AI platform για παιδιά. Συνδυάζει gamified μάθηση, τεχνητή νοημοσύνη και εκπαιδευτικό περιεχόμενο για να κάνει τη μάθηση διασκεδαστική.',
      en: 'WiseBot Academy is the first Greek educational AI platform for kids. It combines gamified learning, artificial intelligence and educational content to make learning fun.',
    },
    sections: [
      {
        h2: { el: 'Τι μαθαίνουν τα παιδιά;', en: 'What do kids learn?' },
        items: [
          { icon: '🧠', h3: { el: `Ιστορίες ${ACADEMY_STORY_COUNT} Σπουδαίων Ανθρώπων`, en: `Stories of ${ACADEMY_STORY_COUNT} Great People` }, text: { el: 'Αϊνστάιν, Tesla, Curie, Da Vinci, Mandela — διαδραστικές ιστορίες με ήχο, εικόνες και quiz.', en: 'Einstein, Tesla, Curie, Da Vinci, Mandela — interactive stories with audio, images and quizzes.' }, link: '/academy' },
          { icon: '📖', h3: { el: '34 Εκπαιδευτικά Ebooks', en: '34 Educational Ebooks' }, text: { el: 'Αρχαία Ελλάδα, Διάστημα, Ζώα, Τεχνολογία — κάθε βιβλίο έχει AI αφήγηση και quiz.', en: 'Ancient Greece, Space, Animals, Technology — every book has AI narration and quiz.' }, link: '/ebooks' },
          { icon: '❓', h3: { el: 'Quiz Γνώσεων', en: 'Knowledge Quizzes' }, text: { el: 'Ιστορία, Γεωγραφία, Επιστήμη, Τέχνη. Κερδίζεις credits και XP με κάθε σωστή απάντηση!', en: 'History, Geography, Science, Art. Earn credits and XP with every correct answer!' }, link: '/quiz' },
          { icon: '💼', h3: { el: 'Επιχειρηματικότητα για Παιδιά', en: 'Entrepreneurship for Kids' }, text: { el: 'Δημιούργησε brand, φτιάξε λογότυπο με AI, γίνε CEO. Μαθαίνεις business σκέψη παίζοντας!', en: 'Create a brand, make a logo with AI, become CEO. Learn business thinking by playing!' }, link: '/business' },
        ],
      },
      {
        h2: { el: 'Πώς δουλεύει η εκπαιδευτική AI;', en: 'How does educational AI work?' },
        items: [
          { icon: '🎯', h3: { el: 'Personalized μάθηση', en: 'Personalized learning' }, text: { el: 'Η AI προσαρμόζεται στο επίπεδο κάθε παιδιού. Δυσκολεύει ή εύκολεύει ανάλογα με την πρόοδο.', en: 'AI adapts to each child\'s level. Gets harder or easier based on progress.' }, link: '/academy' },
          { icon: '🏆', h3: { el: 'Gamification', en: 'Gamification' }, text: { el: 'Credits, XP, levels, daily missions, badges. Τα παιδιά κινητοποιούνται γιατί η μάθηση μοιάζει με παιχνίδι!', en: 'Credits, XP, levels, daily missions, badges. Kids are motivated because learning feels like a game!' }, link: '/game' },
        ],
      },
    ],
    faq: [
      { q: { el: 'Αντικαθιστά το σχολείο το WiseBot Academy;', en: 'Does WiseBot Academy replace school?' }, a: { el: 'Όχι — το συμπληρώνει! Ενισχύει ό,τι μαθαίνουν στο σχολείο με διασκεδαστικό τρόπο.', en: 'No — it complements it! Reinforces what they learn at school in a fun way.' } },
      { q: { el: 'Τι λένε οι εκπαιδευτικοί;', en: 'What do educators say?' }, a: { el: 'Το WiseBot Academy συνδυάζει αποδεδειγμένες παιδαγωγικές μεθόδους με τη δύναμη του AI. Παιδιά που το χρησιμοποιούν δείχνουν αυξημένη περιέργεια και κριτική σκέψη.', en: 'WiseBot Academy combines proven pedagogical methods with the power of AI. Kids who use it show increased curiosity and critical thinking.' } },
    ],
  },
  'ftiaxe-tragoudia-ai': {
    title: {
      el: 'Φτιάξε Τραγούδια με AI Δωρεάν — Music Studio για Παιδιά | WiseBot',
      en: 'Create Songs with AI Free — Music Studio for Kids | WiseBot',
    },
    description: {
      el: 'Φτιάξε δικά σου τραγούδια με AI! Γράψε στίχους, επίλεξε Pop, Rock, Hip-Hop. Η AI τραγουδά για σένα. Δωρεάν AI Music Studio για παιδιά 6-13.',
      en: 'Create your own songs with AI! Write lyrics, choose Pop, Rock, Hip-Hop. AI sings for you. Free AI Music Studio for kids 6-13.',
    },
    path: '/ftiaxe-tragoudia-ai',
    h1: { el: 'Φτιάξε Δικά σου Τραγούδια με AI — Δωρεάν!', en: 'Create Your Own Songs with AI — Free!' },
    intro: {
      el: 'Φαντάσου να γράφεις τους στίχους σου και η AI να τους τραγουδά! Με το WiseBot Music Studio, κάθε παιδί μπορεί να γίνει δημιουργός μουσικής — χωρίς να ξέρει νότες, χωρίς να ξέρει μουσική.',
      en: 'Imagine writing your lyrics and having AI sing them! With WiseBot Music Studio, every child can become a music creator — without knowing notes, without knowing music.',
    },
    sections: [
      {
        h2: { el: 'Πώς φτιάχνεις τραγούδια με AI;', en: 'How do you create songs with AI?' },
        items: [
          { icon: '🧙', h3: { el: 'Guided Wizard', en: 'Guided Wizard' }, text: { el: 'Βήμα-βήμα οδηγός. Επιλέγεις θέμα, ήρωα, συναίσθημα. Η AI φτιάχνει στίχους και μουσική!', en: 'Step-by-step guide. Choose theme, hero, feeling. AI creates lyrics and music!' }, link: '/music' },
          { icon: '✏️', h3: { el: 'Custom Lyrics', en: 'Custom Lyrics' }, text: { el: 'Γράψε τους δικούς σου στίχους και η AI τους τραγουδά στο στυλ που επιλέγεις.', en: 'Write your own lyrics and AI sings them in the style you choose.' }, link: '/music' },
          { icon: '💬', h3: { el: 'Simple Description', en: 'Simple Description' }, text: { el: 'Απλά περίγραψε τι θέλεις ("ένα rock τραγούδι για τον σκύλο μου") και η AI κάνει τα υπόλοιπα!', en: 'Just describe what you want ("a rock song about my dog") and AI does the rest!' }, link: '/music' },
        ],
      },
      {
        h2: { el: 'Τι στυλ μουσικής υπάρχουν;', en: 'What music styles are available?' },
        items: [
          { icon: '🎵', h3: { el: 'Pop, Rock, Hip-Hop', en: 'Pop, Rock, Hip-Hop' }, text: { el: 'Τα πιο δημοφιλή στυλ για νέους. Δημιούργησε τα δικά σου pop hits ή hip-hop brats!', en: 'The most popular styles for young people. Create your own pop hits or hip-hop tracks!' }, link: '/music' },
          { icon: '🌙', h3: { el: 'Lullaby & Classical', en: 'Lullaby & Classical' }, text: { el: 'Νανουρίσματα για μικρά αδέρφια ή κλασική μουσική για χαλάρωση!', en: 'Lullabies for little siblings or classical music for relaxation!' }, link: '/music' },
          { icon: '⚡', h3: { el: 'Electronic & EDM', en: 'Electronic & EDM' }, text: { el: 'Ηλεκτρονικά beats για τους μικρούς DJ!', en: 'Electronic beats for little DJs!' }, link: '/music' },
        ],
      },
    ],
    faq: [
      { q: { el: 'Χρειάζομαι μουσικές γνώσεις;', en: 'Do I need musical knowledge?' }, a: { el: 'Καθόλου! Ούτε νότες, ούτε τίποτα. Αρκεί να γράψεις τι θέλεις και η AI κάνει τα υπόλοιπα.', en: 'Not at all! No notes, nothing. Just write what you want and AI does the rest.' } },
      { q: { el: 'Μπορώ να κατεβάσω τα τραγούδια;', en: 'Can I download the songs?' }, a: { el: 'Ναι! Κατεβάζεις MP3 και μοιράζεσαι με φίλους και οικογένεια.', en: 'Yes! Download MP3 and share with friends and family.' } },
      { q: { el: 'Πόσα τραγούδια μπορώ να φτιάξω;', en: 'How many songs can I create?' }, a: { el: 'Κάθε δημιουργία κοστίζει credits. Κερδίζεις credits παίζοντας παιχνίδια και απαντώντας quiz!', en: 'Each creation costs credits. Earn credits by playing games and answering quizzes!' } },
    ],
  },
};

const SEOLandingPage: React.FC<SEOLandingPageProps> = ({ lang, variant }) => {
  const c = CONTENT[variant];
  const baseUrl = 'https://wisebot.gr';
  const fullUrl = `${baseUrl}${c.path}`;

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map(f => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
    })),
  });

  const articleSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.h1[lang],
    description: c.description[lang],
    url: fullUrl,
    publisher: {
      '@type': 'Organization',
      name: 'WiseBot Academy',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/images/wisebot-og.jpg` },
    },
    inLanguage: lang === 'el' ? 'el-GR' : 'en-US',
  });

  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'WiseBot Academy', item: baseUrl + '/' },
      { '@type': 'ListItem', position: 2, name: c.h1[lang], item: fullUrl },
    ],
  });

  return (
    <div className="relative w-full min-h-full pb-32">
      <Helmet>
        <title>{c.title[lang]}</title>
        <meta name="description" content={c.description[lang]} />
        <link rel="canonical" href={fullUrl} />
        <meta property="og:title" content={c.title[lang]} />
        <meta property="og:description" content={c.description[lang]} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${baseUrl}/images/wisebot-og.jpg`} />
        <meta property="og:locale" content={lang === 'el' ? 'el_GR' : 'en_US'} />
        <meta property="og:site_name" content="WiseBot Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.title[lang]} />
        <meta name="twitter:description" content={c.description[lang]} />
        <meta name="twitter:image" content={`${baseUrl}/images/wisebot-og.jpg`} />
        <script type="application/ld+json">{articleSchema}</script>
        <script type="application/ld+json">{faqSchema}</script>
        <script type="application/ld+json">{breadcrumbSchema}</script>
      </Helmet>

      {/* HERO */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-8">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
          <Star size={12} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">WISEBOT ACADEMY</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-tight mb-4">
          {c.h1[lang]}
        </h1>

        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          {c.intro[lang]}
        </p>

        <Link
          to="/portal"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-[900] uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl"
        >
          {lang === 'el' ? 'Ξεκίνα Δωρεάν' : 'Start Free'}
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* SECTIONS */}
      <div className="max-w-4xl mx-auto px-4 space-y-12 pb-12">
        {c.sections.map((section, si) => (
          <section key={si}>
            <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6">
              {section.h2[lang]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item, ii) => (
                <Link
                  key={ii}
                  to={item.link}
                  className="group block p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-all no-underline"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="text-sm font-[900] text-white uppercase italic tracking-tight mb-1">
                        {item.h3[lang]}
                      </h3>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {item.text[lang]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6">
            {lang === 'el' ? 'Συχνές Ερωτήσεις' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {c.faq.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <h3 className="text-sm font-[900] text-white mb-2 flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                  {item.q[lang]}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed pl-6">
                  {item.a[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8 border border-white/10 rounded-3xl bg-white/[0.02]">
          <h2 className="text-xl md:text-2xl font-[1000] text-white uppercase italic tracking-tight mb-3">
            {lang === 'el' ? 'Έτοιμος να ξεκινήσεις;' : 'Ready to start?'}
          </h2>
          <p className="text-white/40 text-sm mb-6">
            {lang === 'el' ? 'Δωρεάν εγγραφή · Χωρίς κάρτα · Για παιδιά 6-13' : 'Free registration · No card · For kids 6-13'}
          </p>
          <Link
            to="/portal"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-[900] uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl"
          >
            {lang === 'el' ? 'Εγγραφή Δωρεάν' : 'Register Free'}
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* INTERNAL LINKS */}
        <nav aria-label={lang === 'el' ? 'Εξερεύνησε επίσης' : 'Explore also'}>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4">
            {lang === 'el' ? '🔎 ΕΞΕΡΕΥΝΗΣΕ ΕΠΙΣΗΣ' : '🔎 EXPLORE ALSO'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { path: '/academy', label: { el: 'Ακαδημία', en: 'Academy' }, icon: '📚' },
              { path: '/ebooks', label: { el: 'Ebooks', en: 'Ebooks' }, icon: '📖' },
              { path: '/music', label: { el: 'Music Studio', en: 'Music Studio' }, icon: '🎵' },
              { path: '/game', label: { el: 'Παιχνίδια', en: 'Games' }, icon: '🎮' },
              { path: '/quiz', label: { el: 'Quiz', en: 'Quiz' }, icon: '❓' },
              { path: '/factory', label: { el: 'Hero Factory', en: 'Hero Factory' }, icon: '🎨' },
              { path: '/cinema', label: { el: 'Cinema', en: 'Cinema' }, icon: '🎬' },
              { path: '/3d-factory', label: { el: '3D Factory', en: '3D Factory' }, icon: '🧊' },
              { path: '/business', label: { el: 'Business Lab', en: 'Business Lab' }, icon: '💼' },
            ].map(p => (
              <Link key={p.path} to={p.path} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.08] text-white/70 text-xs font-bold no-underline hover:text-white transition-all">
                <span>{p.icon}</span> {p.label[lang]}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SEOLandingPage;
