/**
 * Ε' Δημοτικού · ELA · Ελληνικές & Λατινικές Ρίζες / Greek & Latin Roots
 * =======================================================================
 * Original questions for a native English-speaking child of 10–11 (US Grade 5 / UK Year 5–6).
 * The «el» side is a faithful Greek translation for a Greek-speaking parent, and it proudly
 * points to the Greek words the roots come from (τῆλε, φωνή, γράφω, βίος, γῆ, λόγος…).
 *
 * What the unit covers, in order:
 *   1–5   what a root is; tele- (far), -phone (sound), -graph (write); building "telephone"
 *   6–9   bio- (life), geo- (earth), aqua- (water, Latin), -ology (study of)
 *   10–13 micro / macro, auto- (self), photo- (light); building "microscope"
 *   14–16 the meaning of whole words: telescope, biology, autograph
 *   17–18 build a word from its parts: photograph, geology
 *
 * Distractors are roots that are easy to mix up (phone/photo, graph/scope, geo/bio)
 * and words that share one part but not the other (biography vs biology).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ELA_GREEK_AND_LATIN_ROOTS: QuizQuestion[] = [
  // ── 1–5: what a root is; tele-, -phone, -graph ─────────────────────────────
  {
    q: { el: 'Τι είναι η ρίζα μιας λέξης;', en: 'What is a word root?' },
    options: {
      el: ['Το τελευταίο γράμμα μιας λέξης', 'Ένα κομμάτι της λέξης που κουβαλάει την κύρια σημασία', 'Μια λέξη που κάνει ομοιοκαταληξία με άλλη', 'Ο πληθυντικός μιας λέξης'],
      en: ['The last letter of a word', 'A word part that carries the main meaning', 'A word that rhymes with another word', 'The plural form of a word'],
    },
    correct: 1,
    explanation: {
      el: 'Η ρίζα είναι ο πυρήνας της λέξης που κρατάει τη σημασία της, όπως το bio (ζωή) στο biology. Πάρα πολλές αγγλικές ρίζες έρχονται κατευθείαν από τα ελληνικά και τα λατινικά, οπότε αν τις ξέρεις ξεκλειδώνεις εκατοντάδες λέξεις.',
      en: 'A root is the core piece of a word that holds its meaning, like bio (life) in biology. Many English roots come straight from Greek and Latin, so knowing them unlocks hundreds of words.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η ελληνική ρίζα tele-;', en: 'What does the Greek root tele- mean?' },
    options: { el: ['far', 'near', 'sound', 'light'], en: ['far', 'near', 'sound', 'light'] },
    correct: 0,
    explanation: {
      el: 'Το tele- έρχεται από το αρχαίο ελληνικό «τῆλε», που σημαίνει «μακριά». Το telephone μεταφέρει τον ήχο μακριά, και η television φέρνει εικόνες από μακριά.',
      en: 'Tele- comes from the Greek word τῆλε (tele), meaning "far away". A telephone carries sound far, and a television brings pictures from far away.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η ρίζα -phone, όπως στο telephone και στο microphone;', en: 'What does the root -phone mean, as in telephone and microphone?' },
    options: { el: ['write', 'see', 'earth', 'sound'], en: ['write', 'see', 'earth', 'sound'] },
    correct: 3,
    explanation: {
      el: 'Το -phone έρχεται από την ελληνική λέξη «φωνή». Το microphone κάνει έναν μικρό ήχο πιο δυνατό, και το phone μεταφέρει τη φωνή σου.',
      en: '-phone comes from the Greek φωνή (phoni), which means "voice" or "sound". A microphone makes a small sound bigger, and a phone carries your voice.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η ρίζα -graph, όπως στο autograph και στο paragraph;', en: 'What does the root -graph mean, as in autograph and paragraph?' },
    options: { el: ['sound', 'far', 'write or draw', 'water'], en: ['sound', 'far', 'write or draw', 'water'] },
    correct: 2,
    explanation: {
      el: 'Το -graph έρχεται από το ελληνικό «γράφω». Ο telegraph έγραφε μηνύματα από απόσταση, και ο γραφικός σου χαρακτήρας είναι η graphology σου!',
      en: '-graph comes from the Greek γράφω (grapho), "to write". A telegraph wrote messages across a distance, and your handwriting is your graphology!',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «ήχος από μακριά»;', en: 'Which word means "sound from far away"?' },
    options: { el: ['telescope', 'telegraph', 'telephone', 'television'], en: ['telescope', 'telegraph', 'telephone', 'television'] },
    correct: 2,
    explanation: {
      el: 'Tele- (μακριά) + phone (ήχος, φωνή) = telephone, συσκευή που μεταφέρει φωνές σε απόσταση. Το telegraph είναι μακριά + γράψιμο, και η television μακριά + όραση.',
      en: 'Tele- (far) + phone (sound) = telephone, a device that carries voices over a distance. Telegraph is far + writing, and television is far + seeing.',
    },
  },

  // ── 6–9: bio-, geo-, aqua-, -ology ─────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει το bio-, όπως στο biology και στο biography;', en: 'What does bio- mean, as in biology and biography?' },
    options: { el: ['life', 'earth', 'water', 'study'], en: ['life', 'earth', 'water', 'study'] },
    correct: 0,
    explanation: {
      el: 'Το bio- έρχεται από το ελληνικό «βίος», δηλαδή ζωή. Η biography είναι η γραπτή ιστορία της ζωής κάποιου, και η biology η επιστήμη των ζωντανών οργανισμών.',
      en: 'Bio- comes from the Greek βίος (bios), "life". A biography is the written story of someone\'s life, and biology is the study of living things.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το geo-, όπως στο geography και στο geology;', en: 'What does geo- mean, as in geography and geology?' },
    options: { el: ['earth', 'sky', 'star', 'sea'], en: ['earth', 'sky', 'star', 'sea'] },
    correct: 0,
    explanation: {
      el: 'Το geo- έρχεται από το ελληνικό «γῆ». Η geography περιγράφει τους τόπους της γης, και η geology μελετά τα πετρώματά της.',
      en: 'Geo- comes from the Greek γῆ (ge), "earth". Geography describes the earth\'s places, and geology studies its rocks.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το aqua-, όπως στο aquarium και στο aquatic;', en: 'What does aqua- mean, as in aquarium and aquatic?' },
    options: { el: ['air', 'fire', 'water', 'land'], en: ['air', 'fire', 'water', 'land'] },
    correct: 2,
    explanation: {
      el: 'Το aqua- είναι λατινικό και σημαίνει «νερό». Το aquarium είναι δεξαμενή με νερό για ψάρια, και τα aquatic ζώα ζουν στο νερό. Αυτή η ρίζα είναι λατινική, όχι ελληνική· η ελληνική λέξη για το νερό είναι hydro (ύδωρ), όπως στο hydrant.',
      en: 'Aqua- is Latin for "water". An aquarium is a tank of water for fish, and aquatic animals live in water. This one is Latin, not Greek; the Greek word for water is hydro (ύδωρ), as in hydrant.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η κατάληξη -ology, όπως στο zoology;', en: 'What does the ending -ology mean, as in zoology?' },
    options: { el: ['fear of', 'lover of', 'maker of', 'study of'], en: ['fear of', 'lover of', 'maker of', 'study of'] },
    correct: 3,
    explanation: {
      el: 'Το -ology έρχεται από το ελληνικό «λόγος», και στα αγγλικά σημαίνει «η μελέτη του». Η zoology είναι η μελέτη των ζώων, η geology η μελέτη της γης.',
      en: '-ology comes from the Greek λόγος (logos), "word" or "reason", and in English it means "the study of". Zoology is the study of animals, geology the study of the earth.',
    },
  },

  // ── 10–13: micro / macro, auto-, photo- ────────────────────────────────────
  {
    q: { el: 'Ποια είναι η διαφορά ανάμεσα στο micro- και στο macro-;', en: 'What is the difference between micro- and macro-?' },
    options: {
      el: ['micro = μεγάλο, macro = μικρό', 'micro = μικρό, macro = μεγάλο', 'micro = γρήγορο, macro = αργό', 'micro = παλιό, macro = καινούργιο'],
      en: ['micro = big, macro = small', 'micro = small, macro = big', 'micro = fast, macro = slow', 'micro = old, macro = new'],
    },
    correct: 1,
    explanation: {
      el: 'Και τα δύο είναι ελληνικά: «μικρός» σημαίνει μικρός και «μακρός» σημαίνει μακρύς ή μεγάλος. Το microscope σε αφήνει να δεις πολύ μικρά πράγματα.',
      en: 'Both are Greek: μικρός (mikros) means "small" and μακρός (makros) means "long" or "large". A microscope lets you see tiny things.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το auto-, όπως στο automatic και στο autobiography;', en: 'What does auto- mean, as in automatic and autobiography?' },
    options: { el: ['other', 'self', 'far', 'again'], en: ['other', 'self', 'far', 'again'] },
    correct: 1,
    explanation: {
      el: 'Το auto- έρχεται από το ελληνικό «αὐτός», δηλαδή ο ίδιος. Μια automatic πόρτα ανοίγει από μόνη της, και η autobiography είναι η ιστορία μιας ζωής γραμμένη από το ίδιο το πρόσωπο.',
      en: 'Auto- comes from the Greek αὐτός (autos), "self". An automatic door opens by itself, and an autobiography is a life story written by the person themselves.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το photo-, όπως στο photograph και στο photosynthesis;', en: 'What does photo- mean, as in photograph and photosynthesis?' },
    options: { el: ['picture', 'camera', 'color', 'light'], en: ['picture', 'camera', 'color', 'light'] },
    correct: 3,
    explanation: {
      el: 'Το photo- έρχεται από το ελληνικό «φῶς, φωτός». Η photograph είναι κυριολεκτικά «γράψιμο με φως», επειδή η φωτογραφική μηχανή καταγράφει το φως. Η photosynthesis είναι ο τρόπος που τα φυτά φτιάχνουν τροφή με το φως.',
      en: 'Photo- comes from the Greek φῶς, φωτός (phos, photos), "light". A photograph is literally "light-writing", because a camera records light. Photosynthesis is how plants make food using light.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «όργανο για να βλέπεις πολύ μικρά πράγματα»;', en: 'Which word means "an instrument for seeing very small things"?' },
    options: { el: ['telescope', 'periscope', 'microscope', 'macroscope'], en: ['telescope', 'periscope', 'microscope', 'macroscope'] },
    correct: 2,
    explanation: {
      el: 'Micro- (μικρό) + scope (κοιτάζω) = microscope. Το telescope, αντίθετα, είναι για να κοιτάζεις πράγματα που βρίσκονται μακριά.',
      en: 'Micro- (small) + scope (to look at) = microscope. A telescope, on the other hand, is for looking at things far away.',
    },
  },

  // ── 14–16: the meaning of whole words ──────────────────────────────────────
  {
    q: { el: 'Σύμφωνα με τις ρίζες του, τι σημαίνει telescope;', en: 'Using its roots, what does telescope mean?' },
    options: {
      el: ['όργανο για να βλέπεις μακριά', 'όργανο για να ακούς μακριά', 'μηχανή που γράφει από μακριά', 'μικρή συσκευή θέασης'],
      en: ['an instrument for seeing far', 'an instrument for hearing far', 'a machine that writes from far away', 'a small viewer'],
    },
    correct: 0,
    explanation: {
      el: 'Το tele- σημαίνει «μακριά» και το -scope έρχεται από το ελληνικό «σκοπέω», κοιτάζω. Άρα το telescope είναι εργαλείο για να κοιτάζεις μακρινά πράγματα, όπως οι πλανήτες.',
      en: 'Tele- means "far" and -scope comes from the Greek σκοπέω (skopeo), "to look". So a telescope is a tool for looking at faraway things like planets.',
    },
  },
  {
    q: { el: 'Ποια λέξη σημαίνει «η μελέτη της ζωής»;', en: 'Which word means "the study of life"?' },
    options: { el: ['geology', 'biography', 'biology', 'biosphere'], en: ['geology', 'biography', 'biology', 'biosphere'] },
    correct: 2,
    explanation: {
      el: 'Bio- (ζωή) + -ology (μελέτη) = biology. Η biography είναι η ιστορία μιας ζωής, και η biosphere το κομμάτι της γης όπου υπάρχει ζωή.',
      en: 'Bio- (life) + -ology (study of) = biology. A biography is a life story, and the biosphere is the part of the earth where life exists.',
    },
  },
  {
    q: { el: 'Τι είναι το autograph;', en: 'What is an autograph?' },
    options: {
      el: ['Μια φωτογραφία του εαυτού σου', 'Μια ζωγραφιά αυτοκινήτου', 'Μια ιστορία για τη ζωή σου', 'Ένα όνομα γραμμένο από το ίδιο το πρόσωπο'],
      en: ['A photo of yourself', 'A drawing of a car', 'A story about your life', 'A name written by the person themselves'],
    },
    correct: 3,
    explanation: {
      el: 'Auto- (ο ίδιος) + -graph (γράφω) = autograph, το όνομά σου γραμμένο με το δικό σου χέρι. Η ιστορία της δικής σου ζωής είναι autobiography.',
      en: 'Auto- (self) + -graph (write) = autograph, your name written in your own hand. A story about your own life is an autobiography.',
    },
  },

  // ── 17–18: build a word from its parts ─────────────────────────────────────
  {
    q: { el: 'Φτιάξε τη λέξη που σημαίνει «γράψιμο με φως» (μια εικόνα από φωτογραφική μηχανή).', en: 'Build the word that means "writing with light" (a picture made by a camera).' },
    options: { el: ['photograph', 'phonograph', 'telegraph', 'biograph'], en: ['photograph', 'phonograph', 'telegraph', 'biograph'] },
    correct: 0,
    explanation: {
      el: 'Photo- (φως) + -graph (γράψιμο) = photograph. Ο phonograph, αντίθετα, ήταν μια παλιά μηχανή που έπαιζε ηχογραφημένο ήχο (phono = φωνή, ήχος).',
      en: 'Photo- (light) + -graph (writing) = photograph. A phonograph, on the other hand, was an old machine that played recorded sound (phono = sound).',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι φτιαγμένη από «γη» + «μελέτη»;', en: 'Which word is built from "earth" + "study of"?' },
    options: { el: ['geography', 'geology', 'biology', 'geometry'], en: ['geography', 'geology', 'biology', 'geometry'] },
    correct: 1,
    explanation: {
      el: 'Geo- (γη) + -ology (μελέτη) = geology, η μελέτη των πετρωμάτων και του πώς είναι φτιαγμένη η γη. Η geometry είναι «μέτρηση της γης» (μετρέω = μετρώ) και η geography «γράψιμο για τη γη».',
      en: 'Geo- (earth) + -ology (study of) = geology, the study of rocks and how the earth is made. Geometry is "earth-measuring" (μετρέω = to measure) and geography is "earth-writing".',
    },
  },
];
