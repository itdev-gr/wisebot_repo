import { Helmet } from 'react-helmet-async';
import { ACADEMY_STORY_COUNT, BOOK_COUNT, SCHOOL_MISSION_COUNT, SCHOOL_QUESTION_COUNT } from '../data/contentCounts';

interface SEOProps {
  lang: 'el' | 'en';
  page?: string;
}

interface PageMeta {
  title: { el: string; en: string };
  description: { el: string; en: string };
  keywords: { el: string; en: string };
  path: string;
  // Per-page structured data. Any {el, en} leaf inside is resolved to the active
  // language at render time (see localizeSchema) — the schema used to be Greek-only.
  jsonLd?: object;
  faq?: { q: { el: string; en: string }; a: { el: string; en: string } }[]; // FAQ schema
}

const BASE_URL = 'https://wisebot.gr';

const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: {
      el: "WiseBot Academy — Οι Ιδέες σου Γίνονται Πραγματικότητα | Σχολείο Α'–ΣΤ', Βιβλία & AI Δημιουργία για Παιδιά",
      en: 'WiseBot Academy — Your Ideas Become Real | School, Books & AI Creation for Kids 6–12',
    },
    description: {
      el: `Η ψηφιακή ακαδημία δημιουργών για παιδιά 6–12: Σχολείο Α'–ΣΤ' σε ${SCHOOL_MISSION_COUNT} αποστολές, ${BOOK_COUNT} βιβλία με αφήγηση, ${ACADEMY_STORY_COUNT} ιστορίες σπουδαίων ανθρώπων — δωρεάν. Ό,τι μαθαίνει το παιδί γίνεται δικές του δημιουργίες: ήρωες, τραγούδια, βίντεο, 3D, επιχείρηση. Ασφαλές, χωρίς ελεύθερο chat.`,
      en: `The digital maker academy for kids 6–12: a Grade 1–6 school track with ${SCHOOL_MISSION_COUNT} missions, ${BOOK_COUNT} narrated books, ${ACADEMY_STORY_COUNT} stories of great people — free. What a child learns becomes their own creations: heroes, songs, videos, 3D, a business. Safe, no open chat.`,
    },
    keywords: {
      el: 'παιδικά βιβλία με αφήγηση, σχολείο δημοτικού quiz, εκπαιδευτική εφαρμογή για παιδιά, ασφαλής εφαρμογή για παιδιά, μάθηση μέσα από παιχνίδι, WiseBot Academy, AI για παιδιά, wisebot',
      en: 'narrated books for kids, primary school quiz, educational app for kids, safe app for kids, learning through play, WiseBot Academy, AI for kids, wisebot',
    },
    path: '/',
  },
  academy: {
    title: {
      el: `Ακαδημία — Μάθε για ${ACADEMY_STORY_COUNT} Σπουδαίους Ανθρώπους | WiseBot Academy`,
      en: `Academy — Learn About ${ACADEMY_STORY_COUNT} Great People | WiseBot Academy`,
    },
    description: {
      el: `Ανακάλυψε τις ιστορίες ${ACADEMY_STORY_COUNT} σπουδαίων ανθρώπων! Από τον Αϊνστάιν μέχρι τη Frida Kahlo. Διαδραστικά μαθήματα με ήχο και quiz για παιδιά 6-12.`,
      en: `Discover the stories of ${ACADEMY_STORY_COUNT} great people! From Einstein to Frida Kahlo. Interactive lessons with audio and quizzes for kids 6-12.`,
    },
    keywords: {
      el: 'εκπαιδευτικές ιστορίες, σπουδαίοι άνθρωποι για παιδιά, μαθαίνω ιστορία, WiseBot Academy, quiz παιδιά, Αϊνστάιν, Τέσλα, Curie',
      en: 'educational stories, great people for kids, learn history, WiseBot Academy, kids quiz, Einstein, Tesla, Curie',
    },
    path: '/academy',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: { el: `WiseBot Academy - Ιστορίες ${ACADEMY_STORY_COUNT} Σπουδαίων Ανθρώπων`, en: `WiseBot Academy - Stories of ${ACADEMY_STORY_COUNT} Great People` },
      description: { el: `Διαδραστικά μαθήματα για ${ACADEMY_STORY_COUNT} σπουδαίους ανθρώπους με ήχο, εικόνες και quiz. Για παιδιά 6-12 ετών.`, en: `Interactive lessons about ${ACADEMY_STORY_COUNT} great people with audio, images and quizzes. For kids aged 6-12.` },
      provider: { '@type': 'Organization', name: 'WiseBot Academy', url: BASE_URL },
      audience: { '@type': 'EducationalAudience', educationalRole: 'student', suggestedMinAge: 6, suggestedMaxAge: 12 },
      isAccessibleForFree: true,
      inLanguage: ['el', 'en'],
      numberOfCredits: 90,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT30M' },
    },
    faq: [
      { q: { el: 'Τι μαθαίνουν τα παιδιά στην Ακαδημία;', en: 'What do kids learn in the Academy?' }, a: { el: `Ιστορίες ${ACADEMY_STORY_COUNT} σπουδαίων ανθρώπων - από επιστήμονες μέχρι καλλιτέχνες. Κάθε ιστορία γίνεται μάθημα ζωής με quiz στο τέλος.`, en: `Stories of ${ACADEMY_STORY_COUNT} great people - from scientists to artists. Every story becomes a life lesson with a quiz at the end.` } },
      { q: { el: 'Είναι δωρεάν η Ακαδημία;', en: 'Is the Academy free?' }, a: { el: 'Ναι! Η Ακαδημία είναι δωρεάν. Κερδίζεις XP και credits διαβάζοντας ιστορίες και απαντώντας σωστά σε quiz.', en: 'Yes! The Academy is free. You earn XP and credits by reading stories and answering quizzes correctly.' } },
    ],
  },
  school: {
    title: {
      el: `Σχολείο Α'–ΣΤ' Δημοτικού — ${SCHOOL_MISSION_COUNT} Αποστολές & Quiz Δωρεάν | WiseBot Academy`,
      en: `School Grades 1–6 — ${SCHOOL_MISSION_COUNT} Missions & Quizzes Free | WiseBot Academy`,
    },
    description: {
      el: `Όλο το Δημοτικό σε αποστολές: Μαθηματικά, Γλώσσα, Ιστορία, Μελέτη/Φυσικά, Γεωγραφία, Αγγλικά. ${SCHOOL_QUESTION_COUNT} πρωτότυπες ερωτήσεις με εξηγήσεις, αστέρια, διαγώνισμα και απολυτήριο ανά τάξη — δωρεάν, βασισμένο στα Προγράμματα Σπουδών.`,
      en: `All of primary school as missions: Math, Greek, History, Science, Geography, English. ${SCHOOL_QUESTION_COUNT} original questions with explanations, stars, a grade exam and a diploma per grade — free, aligned with the Greek national curriculum.`,
    },
    keywords: {
      el: "ασκήσεις δημοτικού, quiz δημοτικού δωρεάν, μαθηματικά δημοτικού, γλώσσα δημοτικού, ιστορία δημοτικού, επανάληψη δημοτικού, εξάσκηση για παιδιά δημοτικού, WiseBot Σχολείο",
      en: 'primary school exercises, elementary school quiz free, math practice kids, Greek school curriculum, WiseBot School',
    },
    path: '/school',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: { el: "WiseBot Σχολείο — Α'–ΣΤ' Δημοτικού", en: 'WiseBot School — Grades 1-6' },
      description: { el: `${SCHOOL_MISSION_COUNT} αποστολές με ${SCHOOL_QUESTION_COUNT} πρωτότυπες ερωτήσεις σε όλα τα μαθήματα του Δημοτικού, με αστέρια, διαγωνίσματα και απολυτήρια.`, en: `${SCHOOL_MISSION_COUNT} missions with ${SCHOOL_QUESTION_COUNT} original questions across all primary-school subjects, with stars, exams and diplomas.` },
      provider: { '@type': 'Organization', name: 'WiseBot Academy', url: BASE_URL },
      audience: { '@type': 'EducationalAudience', educationalRole: 'student', suggestedMinAge: 6, suggestedMaxAge: 12 },
      educationalLevel: 'Primary School',
      isAccessibleForFree: true,
      inLanguage: ['el', 'en'],
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
    },
    faq: [
      { q: { el: 'Ποιες τάξεις καλύπτει το Σχολείο;', en: 'Which grades does the School cover?' }, a: { el: `Όλες τις τάξεις του Δημοτικού, Α' έως ΣΤ', με ${SCHOOL_MISSION_COUNT} αποστολές οργανωμένες ανά μάθημα σύμφωνα με τα Προγράμματα Σπουδών.`, en: `All primary-school grades, 1 through 6, with ${SCHOOL_MISSION_COUNT} missions organized per subject following the Greek national curriculum.` } },
      { q: { el: 'Είναι δωρεάν;', en: 'Is it free?' }, a: { el: 'Ναι, το Σχολείο είναι εντελώς δωρεάν. Κάθε αποστολή δίνει 0–3 αστέρια και XP· με Master σε όλα τα μαθήματα ξεκλειδώνει το διαγώνισμα της τάξης και το απολυτήριο.', en: 'Yes, the School is completely free. Every mission gives 0-3 stars and XP; Master in all subjects unlocks the grade exam and the diploma.' } },
      { q: { el: 'Οι ερωτήσεις είναι από τα σχολικά βιβλία;', en: 'Are the questions taken from schoolbooks?' }, a: { el: `Όχι — και οι ${SCHOOL_QUESTION_COUNT} ερωτήσεις είναι πρωτότυπες, γραμμένες πάνω στη δομή της ύλης, με εξήγηση σε κάθε απάντηση, στα Ελληνικά και τα Αγγλικά.`, en: `No — all ${SCHOOL_QUESTION_COUNT} questions are original, written on the structure of the curriculum, with an explanation on every answer, in Greek and English.` } },
    ],
  },
  ebooks: {
    title: {
      el: 'Ebooks — 34 Διαδραστικά Βιβλία για Παιδιά | WiseBot Academy',
      en: 'Ebooks — 34 Interactive Books for Kids | WiseBot Academy',
    },
    description: {
      el: 'Διάβασε 34 δωρεάν ebooks με αφήγηση AI! Ιστορίες για Αρχαία Ελλάδα, Διάστημα, Ζώα, Τεχνολογία. Κάθε βιβλίο έχει quiz! Ελληνικά & Αγγλικά.',
      en: 'Read 34 free AI-narrated ebooks! Stories about Ancient Greece, Space, Animals, Technology. Every book includes a quiz! Greek & English.',
    },
    keywords: {
      el: 'παιδικά ebooks, δωρεάν βιβλία για παιδιά, ebooks με αφήγηση, εκπαιδευτικά βιβλία, WiseBot ebooks, ebooks ελληνικά',
      en: 'kids ebooks, free books for kids, narrated ebooks, educational books, WiseBot ebooks',
    },
    path: '/ebooks',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: { el: 'WiseBot Academy - 34 Εκπαιδευτικά Ebooks', en: 'WiseBot Academy - 34 Educational Ebooks' },
      description: { el: '34 δωρεάν εκπαιδευτικά ebooks με αφήγηση AI, quiz, Ελληνικά και Αγγλικά.', en: '34 free educational ebooks with AI narration and quizzes, in Greek and English.' },
      numberOfItems: 26,
      isAccessibleForFree: true,
      inLanguage: ['el', 'en'],
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: { el: 'Αρχαία Ελλάδα & Μυθολογία', en: 'Ancient Greece & Mythology' } },
          { '@type': 'ListItem', position: 2, name: { el: 'Διάστημα & Αστρονομία', en: 'Space & Astronomy' } },
          { '@type': 'ListItem', position: 3, name: { el: 'Ζώα & Φύση', en: 'Animals & Nature' } },
          { '@type': 'ListItem', position: 4, name: { el: 'Τεχνολογία & Επιστήμη', en: 'Technology & Science' } },
          { '@type': 'ListItem', position: 5, name: { el: 'Τέχνη & Πολιτισμός', en: 'Art & Culture' } },
          { '@type': 'ListItem', position: 6, name: { el: 'Ιστορία & Γεωγραφία', en: 'History & Geography' } },
        ],
      },
    },
    faq: [
      { q: { el: 'Πόσα ebooks υπάρχουν;', en: 'How many ebooks are there?' }, a: { el: '34 εκπαιδευτικά ebooks σε Ελληνικά και Αγγλικά. Καλύπτουν θέματα: Αρχαία Ελλάδα, Διάστημα, Ζώα, Τεχνολογία, Τέχνη, Ιστορία.', en: '34 educational ebooks in Greek and English. They cover Ancient Greece, Space, Animals, Technology, Art and History.' } },
      { q: { el: 'Μπορώ να τα ακούσω;', en: 'Can I listen to them?' }, a: { el: 'Ναι! Κάθε ebook έχει AI text-to-speech αφήγηση. Μπορείς να διαβάσεις ή να ακούσεις.', en: 'Yes! Every ebook has AI text-to-speech narration. You can read or listen.' } },
      { q: { el: 'Έχουν quiz;', en: 'Do they have quizzes?' }, a: { el: 'Ναι, κάθε βιβλίο έχει quiz στο τέλος. Κερδίζεις credits αν απαντήσεις σωστά!', en: 'Yes, every book has a quiz at the end. Answer correctly and you earn credits!' } },
    ],
  },
  music: {
    title: {
      el: 'Music Studio — Φτιάξε Τραγούδια με AI Δωρεάν | WiseBot Academy',
      en: 'Music Studio — Create Songs with AI Free | WiseBot Academy',
    },
    description: {
      el: 'Δημιούργησε τα δικά σου τραγούδια με AI! Γράψε στίχους, επίλεξε στυλ (Pop, Rock, Hip-Hop), και η AI τραγουδά για σένα. Δωρεάν!',
      en: 'Create your own songs with AI! Write lyrics, choose a style (Pop, Rock, Hip-Hop), and AI sings for you. Free!',
    },
    keywords: {
      el: 'φτιάξε τραγούδια AI, φτιάξε παιδικά τραγούδια, μουσική για παιδιά, AI τραγούδια, WiseBot Music Studio, δημιουργία μουσικής, τραγούδια μόνος σου',
      en: 'create songs AI, make kids songs, music for kids, AI songs, WiseBot Music Studio, music creation',
    },
    path: '/music',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'WiseBot Music Studio',
      applicationCategory: 'MusicApplication',
      description: { el: 'Φτιάξε τραγούδια με τεχνητή νοημοσύνη. Γράψε στίχους, επίλεξε στυλ μουσικής, η AI δημιουργεί πραγματικά τραγούδια.', en: 'Create songs with artificial intelligence. Write lyrics, choose a music style, and AI creates real songs.' },
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      featureList: ['AI Song Generation', 'Custom Lyrics', 'Guided Wizard', 'Multiple Music Styles', 'Download Songs'],
    },
    faq: [
      { q: { el: 'Πώς φτιάχνω τραγούδια;', en: 'How do I create songs?' }, a: { el: '3 τρόποι: Guided Wizard (βήμα-βήμα), Custom Lyrics (γράψε δικούς στίχους), ή Simple Description (περίγραψε τι θέλεις). Η AI δημιουργεί πραγματικά τραγούδια!', en: '3 ways: the Guided Wizard (step by step), Custom Lyrics (write your own), or a Simple Description of what you want. The AI creates real songs!' } },
      { q: { el: 'Τι στυλ μουσικής υπάρχουν;', en: 'What music styles are there?' }, a: { el: 'Pop, Rock, Hip-Hop, Electronic, Lullaby, Classical και πολλά ακόμα. Επιλέγεις εσύ!', en: 'Pop, Rock, Hip-Hop, Electronic, Lullaby, Classical and many more. You choose!' } },
    ],
  },
  game: {
    title: {
      el: 'Παιχνίδια — 16 Δωρεάν Arcade Games για Παιδιά | WiseBot Academy',
      en: 'Games — 16 Free Arcade Games for Kids | WiseBot Academy',
    },
    description: {
      el: 'Παίξε 16 δωρεάν arcade παιχνίδια! Wizard Duel, Dungeon Explorer, Geometry Dash, Tower Defense, Memory Cards. Κέρδισε credits παίζοντας!',
      en: 'Play 16 free arcade games! Wizard Duel, Dungeon Explorer, Geometry Dash, Tower Defense, Memory Cards. Earn credits by playing!',
    },
    keywords: {
      el: 'δωρεάν παιχνίδια για παιδιά, παιδικά παιχνίδια online, arcade games παιδιά, snake, tetris, memory game, WiseBot games, δωρεάν παιχνίδια online',
      en: 'free kids games, kids games online, arcade games kids, snake, tetris, memory game, WiseBot games, free online games',
    },
    path: '/game',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: { el: 'WiseBot Games - 16 Δωρεάν Παιδικά Παιχνίδια', en: 'WiseBot Games - 16 Free Kids Games' },
      description: { el: '16 δωρεάν arcade παιχνίδια: Wizard Duel, Dungeon Explorer, AI Art Battle, Geometry Dash, Tower Defense, Memory, Football, και άλλα.', en: '16 free arcade games: Wizard Duel, Dungeon Explorer, AI Art Battle, Geometry Dash, Tower Defense, Memory, Football, and more.' },
      numberOfItems: 16,
      isAccessibleForFree: true,
    },
    faq: [
      { q: { el: 'Πόσα παιχνίδια υπάρχουν;', en: 'How many games are there?' }, a: { el: '16 δωρεάν παιχνίδια: Wizard Duel, Dungeon Explorer, AI Art Battle, Geometry Dash, Endless Runner, Tower Defense, Hero Fusion, Memory Cards, Tactical Football, Nebula Catch, Ball Rush, Puzzle, Broken Company, Sky Metropolis, Slingshot, Spot It.', en: '16 free games: Wizard Duel, Dungeon Explorer, AI Art Battle, Geometry Dash, Endless Runner, Tower Defense, Hero Fusion, Memory Cards, Tactical Football, Nebula Catch, Ball Rush, Puzzle, Broken Company, Sky Metropolis, Slingshot, Spot It.' } },
      { q: { el: 'Κερδίζω κάτι παίζοντας;', en: 'Do I earn anything by playing?' }, a: { el: 'Ναι! Κερδίζεις credits και XP με κάθε παιχνίδι. Τα credits τα χρησιμοποιείς για AI δημιουργίες.', en: 'Yes! You earn credits and XP with every game. Credits are used for AI creations.' } },
    ],
  },
  quiz: {
    title: {
      el: 'Quiz — Εκπαιδευτικά Quiz για Παιδιά Δωρεάν | WiseBot Academy',
      en: 'Quiz — Free Educational Quizzes for Kids | WiseBot Academy',
    },
    description: {
      el: 'Δοκίμασε τις γνώσεις σου! Εκπαιδευτικά quiz σε Ιστορία, Επιστήμη, Γεωγραφία, Τεχνολογία. Κέρδισε credits με σωστές απαντήσεις!',
      en: 'Test your knowledge! Educational quizzes in History, Science, Geography, Technology. Earn credits with correct answers!',
    },
    keywords: {
      el: 'quiz για παιδιά, εκπαιδευτικά quiz, δωρεάν quiz online, quiz ιστορίας, quiz γνώσεων, WiseBot quiz',
      en: 'kids quiz, educational quiz, free online quiz, history quiz, knowledge quiz, WiseBot quiz',
    },
    path: '/quiz',
    faq: [
      { q: { el: 'Τι θέματα έχουν τα quiz;', en: 'What topics do the quizzes cover?' }, a: { el: 'Ιστορία, Επιστήμη, Γεωγραφία, Τεχνολογία, Φύση, Τέχνη, Αρχαία Ελλάδα, Διάστημα και πολλά ακόμα!', en: 'History, Science, Geography, Technology, Nature, Art, Ancient Greece, Space and much more!' } },
      { q: { el: 'Κερδίζω credits;', en: 'Do I earn credits?' }, a: { el: 'Ναι! Κάθε σωστή απάντηση σε quiz δίνει XP. Μπορείς να προκαλέσεις και φίλους!', en: 'Yes! Every correct quiz answer gives XP. You can also challenge your friends!' } },
    ],
  },
  factory: {
    title: {
      el: 'Hero Factory — Φτιάξε Εικόνες με AI Δωρεάν | WiseBot Academy',
      en: 'Hero Factory — Create AI Images Free | WiseBot Academy',
    },
    description: {
      el: 'Δημιούργησε μοναδικούς ήρωες με AI! Περίγραψε τον ήρωά σου ή ανέβασε φωτογραφία - η AI ζωγραφίζει σε δευτερόλεπτα. Μετατροπή σε 3D!',
      en: 'Create unique heroes with AI! Describe your hero or upload a photo - AI draws in seconds. Convert to 3D!',
    },
    keywords: {
      el: 'δημιουργία εικόνων AI, AI ζωγραφική παιδιά, φτιάξε ήρωα, WiseBot Hero Factory, AI art generator, δημιούργησε εικόνες',
      en: 'AI image creation, AI art kids, create hero, WiseBot Hero Factory, AI art generator, create images',
    },
    path: '/factory',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'WiseBot Hero Factory',
      applicationCategory: 'DesignApplication',
      description: { el: 'Δημιούργησε ήρωες με AI. Γράψε περιγραφή ή ανέβασε φωτογραφία, η AI φτιάχνει εικόνες και 3D μοντέλα.', en: 'Create heroes with AI. Write a description or upload a photo, and AI creates images and 3D models.' },
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    faq: [
      { q: { el: 'Πώς φτιάχνω ήρωα;', en: 'How do I create a hero?' }, a: { el: 'Γράψε μια περιγραφή ή ανέβασε φωτογραφία. Η AI δημιουργεί εικόνα σε δευτερόλεπτα! Μπορείς να τον κάνεις και 3D μοντέλο.', en: 'Write a description or upload a photo. The AI creates an image in seconds! You can also turn it into a 3D model.' } },
    ],
  },
  cinema: {
    title: {
      el: 'Cinema — Δημιούργησε Video με AI | WiseBot Academy',
      en: 'Cinema — Create Videos with AI | WiseBot Academy',
    },
    description: {
      el: 'Ζωντάνεψε τους ήρωές σου με AI video! Γράψε τι θέλεις να δεις και η AI φτιάχνει μαγικά video clips σε δευτερόλεπτα.',
      en: 'Bring your heroes to life with AI video! Write what you want to see and AI creates magic video clips in seconds.',
    },
    keywords: {
      el: 'AI video δημιουργία, φτιάξε video με AI, WiseBot Cinema, AI κινούμενα σχέδια, video για παιδιά',
      en: 'AI video creation, create video with AI, WiseBot Cinema, AI animation, video for kids',
    },
    path: '/cinema',
  },
  business: {
    title: {
      el: 'Business Lab — Μάθε Επιχειρηματικότητα Παίζοντας | WiseBot Academy',
      en: 'Business Lab — Learn Entrepreneurship by Playing | WiseBot Academy',
    },
    description: {
      el: 'Μάθε επιχειρηματικότητα παίζοντας! Δημιούργησε brand, φτιάξε λογότυπο με AI, γίνε CEO. Για παιδιά 6-12.',
      en: 'Learn entrepreneurship by playing! Create a brand, make a logo with AI, become CEO. For kids 6-12.',
    },
    keywords: {
      el: 'επιχειρηματικότητα παιδιά, business simulation παιδιά, AI λογότυπο, μάθε business, WiseBot Business Lab',
      en: 'kids entrepreneurship, business simulation kids, AI logo, learn business, WiseBot Business Lab',
    },
    path: '/business',
  },
  '3d-factory': {
    title: {
      el: '3D Factory — Φτιάξε 3D Μοντέλα με AI | WiseBot Academy',
      en: '3D Factory — Create 3D Models with AI | WiseBot Academy',
    },
    description: {
      el: 'Μετάτρεψε εικόνες σε 3D μοντέλα με AI! Περιέστρεψέ τα, κατέβασέ τα, εκτύπωσέ τα σε 3D printer. Για παιδιά 6-12.',
      en: 'Transform images into 3D models with AI! Rotate, download, 3D print. For kids 6-12.',
    },
    keywords: {
      el: 'AI 3D μοντέλα, δημιουργία 3D, 3D printing παιδιά, WiseBot 3D Factory',
      en: 'AI 3D models, 3D creation, 3D printing kids, WiseBot 3D Factory',
    },
    path: '/3d-factory',
  },
  market: {
    title: {
      el: 'Hero Market — Αγορά & Πώληση AI Ηρώων | WiseBot Academy',
      en: 'Hero Market — Buy & Sell AI Heroes | WiseBot Academy',
    },
    description: {
      el: 'Ανακάλυψε ήρωες από άλλα παιδιά! Αγόρασε, πούλησε, αντάλλαξε AI ήρωες στο Hero Market.',
      en: 'Discover heroes from other kids! Buy, sell, trade AI heroes in the Hero Market.',
    },
    keywords: {
      el: 'αγορά ηρώων AI, marketplace παιδιών, WiseBot Hero Market, ανταλλαγή ηρώων',
      en: 'AI heroes marketplace, kids marketplace, WiseBot Hero Market, hero trading',
    },
    path: '/market',
  },
  legal: {
    title: {
      el: 'Νομικά — Όροι Χρήσης & Πολιτική Απορρήτου | WiseBot Academy',
      en: 'Legal — Terms of Use & Privacy Policy | WiseBot Academy',
    },
    description: {
      el: 'Οι όροι χρήσης, η πολιτική απορρήτου και η προστασία προσωπικών δεδομένων του WiseBot Academy — γραμμένα καθαρά, για γονείς.',
      en: 'The terms of use, privacy policy and data protection of WiseBot Academy — written clearly, for parents.',
    },
    keywords: {
      el: 'όροι χρήσης WiseBot, πολιτική απορρήτου, προσωπικά δεδομένα παιδιών',
      en: 'WiseBot terms of use, privacy policy, children data protection',
    },
    path: '/legal',
  },
  privacy: {
    title: {
      el: 'Πολιτική Απορρήτου | WiseBot Academy',
      en: 'Privacy Policy | WiseBot Academy',
    },
    description: {
      el: 'Πώς προστατεύει το WiseBot Academy τα δεδομένα του παιδιού σας: τι συλλέγεται, πού αποθηκεύεται, και τα δικαιώματά σας ως γονέας.',
      en: "How WiseBot Academy protects your child's data: what is collected, where it is stored, and your rights as a parent.",
    },
    keywords: {
      el: 'πολιτική απορρήτου WiseBot, δεδομένα παιδιών, ασφάλεια παιδιών online',
      en: 'WiseBot privacy policy, children data, kids online safety',
    },
    path: '/privacy',
  },
  terms: {
    title: {
      el: 'Όροι Χρήσης | WiseBot Academy',
      en: 'Terms of Use | WiseBot Academy',
    },
    description: {
      el: 'Οι όροι χρήσης του WiseBot Academy: λογαριασμοί, credits, περιεχόμενο που δημιουργείται με AI, και οι κανόνες της πλατφόρμας.',
      en: 'The WiseBot Academy terms of use: accounts, credits, AI-generated content, and the platform rules.',
    },
    keywords: {
      el: 'όροι χρήσης WiseBot, κανόνες πλατφόρμας',
      en: 'WiseBot terms of use, platform rules',
    },
    path: '/terms',
  },
  login: {
    title: {
      el: 'Σύνδεση & Δωρεάν Εγγραφή | WiseBot Academy',
      en: 'Sign In & Free Registration | WiseBot Academy',
    },
    description: {
      el: 'Συνδέσου ή φτιάξε δωρεάν λογαριασμό WiseBot: το παιδί κρατά την πρόοδο και τις δημιουργίες του σε κάθε συσκευή, με email γονέα.',
      en: 'Sign in or create a free WiseBot account: your child keeps their progress and creations on every device, with a parent email.',
    },
    keywords: {
      el: 'WiseBot εγγραφή, WiseBot σύνδεση, δωρεάν λογαριασμός',
      en: 'WiseBot registration, WiseBot sign in, free account',
    },
    path: '/login',
  },
  'wise-friends': {
    title: {
      el: 'Wise Friends — Ασφαλής Κοινότητα για Παιδιά | WiseBot Academy',
      en: 'Wise Friends — Safe Community for Kids | WiseBot Academy',
    },
    description: {
      el: 'Γνώρισε άλλα παιδιά, πρόκαλέ τους σε quiz, μοιράσου δημιουργίες! Ασφαλής κοινότητα χωρίς ελεύθερο chat.',
      en: 'Meet other kids, challenge them in quizzes, share creations! Safe community with no open chat.',
    },
    keywords: {
      el: 'κοινότητα παιδιών, ασφαλές κοινωνικό δίκτυο παιδιά, WiseBot Friends, quiz challenges',
      en: 'kids community, safe social network kids, WiseBot Friends, quiz challenges',
    },
    path: '/wise-friends',
  },
};

// Replace every {el, en} leaf in a schema object with the active language's string,
// so structured data follows the page language instead of being Greek-only.
const localizeSchema = (node: unknown, lang: 'el' | 'en'): unknown => {
  if (Array.isArray(node)) return node.map(item => localizeSchema(item, lang));
  if (node && typeof node === 'object') {
    const record = node as Record<string, unknown>;
    if (typeof record.el === 'string' && typeof record.en === 'string' && Object.keys(record).length === 2) {
      return record[lang];
    }
    return Object.fromEntries(Object.entries(record).map(([k, v]) => [k, localizeSchema(v, lang)]));
  }
  return node;
};

const SEO: React.FC<SEOProps> = ({ lang, page = 'home' }) => {
  const meta = PAGE_META[page] || PAGE_META.home;
  const baseUrl = BASE_URL;
  const fullUrl = `${baseUrl}${meta.path}`;

  // Build FAQ schema if available
  const faqSchema = meta.faq?.length ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: meta.faq.map(f => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
    })),
  }) : null;

  // Build per-page JSON-LD
  const pageSchema = meta.jsonLd ? JSON.stringify(localizeSchema(meta.jsonLd, lang)) : null;

  // Build per-page BreadcrumbList
  const breadcrumb = page !== 'home' ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'WiseBot Academy', item: baseUrl + '/' },
      { '@type': 'ListItem', position: 2, name: meta.title[lang].split(' — ')[0], item: fullUrl },
    ],
  }) : null;

  return (
    <Helmet>
      <title>{meta.title[lang]}</title>
      <meta name="description" content={meta.description[lang]} />
      <meta name="keywords" content={meta.keywords[lang]} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title[lang]} />
      <meta property="og:description" content={meta.description[lang]} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/images/wisebot-og.jpg`} />
      <meta property="og:locale" content={lang === 'el' ? 'el_GR' : 'en_US'} />
      <meta property="og:site_name" content="WiseBot Academy" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title[lang]} />
      <meta name="twitter:description" content={meta.description[lang]} />
      <meta name="twitter:image" content={`${baseUrl}/images/wisebot-og.jpg`} />

      {/* Per-page structured data */}
      {pageSchema && (
        <script type="application/ld+json">{pageSchema}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{faqSchema}</script>
      )}
      {breadcrumb && (
        <script type="application/ld+json">{breadcrumb}</script>
      )}
    </Helmet>
  );
};

export default SEO;
