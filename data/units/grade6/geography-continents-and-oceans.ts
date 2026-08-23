/**
 * ΣΤ' Δημοτικού · Γεωγραφία · Ήπειροι & Ωκεανοί
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–6   the seven continents: how many, the largest, the smallest, the icy one, where Greece is
 *   7–10  the five oceans: how many, the Pacific is the largest, the Atlantic, the Arctic
 *   11–12 the atmosphere: the layer of air around the Earth, the oxygen we breathe
 *   13–14 climate zones: tropical, temperate, polar — and where Greece belongs
 *   15–16 vegetation zones: rainforest near the equator, tundra near the poles
 *   17–18 relief: what the word means, the Himalayas and Everest
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GEOGRAPHY_CONTINENTS_AND_OCEANS: QuizQuestion[] = [
  // ── 1–6: the seven continents ──────────────────────────────────────────────
  {
    q: { el: 'Πόσες ήπειροι υπάρχουν στη Γη;', en: 'How many continents are there on Earth?' },
    options: { el: ['5', '6', '7', '9'], en: ['5', '6', '7', '9'] },
    correct: 2,
    explanation: {
      el: 'Οι ήπειροι είναι 7: Ασία, Αφρική, Βόρεια Αμερική, Νότια Αμερική, Ανταρκτική, Ευρώπη και Ωκεανία.',
      en: 'There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe and Oceania.',
    },
  },
  {
    q: { el: 'Ποια είναι η μεγαλύτερη ήπειρος του κόσμου;', en: 'Which is the largest continent in the world?' },
    options: { el: ['Η Αφρική', 'Η Ασία', 'Η Βόρεια Αμερική', 'Η Ευρώπη'], en: ['Africa', 'Asia', 'North America', 'Europe'] },
    correct: 1,
    explanation: {
      el: 'Η Ασία είναι η μεγαλύτερη ήπειρος σε έκταση και σε πληθυσμό. Δεύτερη έρχεται η Αφρική.',
      en: 'Asia is the largest continent in both area and population. Africa comes second.',
    },
  },
  {
    q: { el: 'Σε ποια ήπειρο βρίσκεται η Ελλάδα;', en: 'On which continent is Greece?' },
    options: { el: ['Στην Ασία', 'Στην Αφρική', 'Στην Ευρώπη', 'Στην Ωκεανία'], en: ['Asia', 'Africa', 'Europe', 'Oceania'] },
    correct: 2,
    explanation: {
      el: 'Η Ελλάδα βρίσκεται στη νοτιοανατολική άκρη της Ευρώπης, πολύ κοντά στην Ασία και στην Αφρική.',
      en: 'Greece is at the south-eastern edge of Europe, very close to Asia and Africa.',
    },
  },
  {
    q: { el: 'Ποια ήπειρος είναι σκεπασμένη με πάγο και δεν έχει μόνιμους κατοίκους, μόνο επιστήμονες και πιγκουίνους;', en: 'Which continent is covered in ice and has no permanent residents, only scientists and penguins?' },
    options: { el: ['Η Ωκεανία', 'Η Ανταρκτική', 'Η Νότια Αμερική', 'Η Βόρεια Αμερική'], en: ['Oceania', 'Antarctica', 'South America', 'North America'] },
    correct: 1,
    explanation: {
      el: 'Η Ανταρκτική βρίσκεται γύρω από τον Νότιο Πόλο. Είναι η πιο κρύα ήπειρος και κανείς δεν ζει εκεί μόνιμα.',
      en: 'Antarctica lies around the South Pole. It is the coldest continent and nobody lives there permanently.',
    },
  },
  {
    q: { el: 'Ποια είναι η μικρότερη ήπειρος;', en: 'Which is the smallest continent?' },
    options: { el: ['Η Ευρώπη', 'Η Ωκεανία', 'Η Ανταρκτική', 'Η Νότια Αμερική'], en: ['Europe', 'Oceania', 'Antarctica', 'South America'] },
    correct: 1,
    explanation: {
      el: 'Η Ωκεανία, με την Αυστραλία και χιλιάδες νησιά, είναι η μικρότερη ήπειρος. Η Ευρώπη είναι η δεύτερη μικρότερη.',
      en: 'Oceania, with Australia and thousands of islands, is the smallest continent. Europe is the second smallest.',
    },
  },
  {
    q: { el: 'Η Σαχάρα, η μεγαλύτερη ζεστή έρημος του κόσμου, βρίσκεται σε ποια ήπειρο;', en: 'The Sahara, the largest hot desert in the world, is on which continent?' },
    options: { el: ['Στην Αφρική', 'Στην Ασία', 'Στην Ωκεανία', 'Στη Νότια Αμερική'], en: ['Africa', 'Asia', 'Oceania', 'South America'] },
    correct: 0,
    explanation: {
      el: 'Η Σαχάρα απλώνεται στο βόρειο μέρος της Αφρικής. Είναι σχεδόν τόσο μεγάλη όσο ολόκληρη η Ευρώπη!',
      en: 'The Sahara stretches across the north of Africa. It is almost as big as the whole of Europe!',
    },
  },

  // ── 7–10: the five oceans ──────────────────────────────────────────────────
  {
    q: { el: 'Πόσοι ωκεανοί υπάρχουν στη Γη;', en: 'How many oceans are there on Earth?' },
    options: { el: ['3', '4', '5', '7'], en: ['3', '4', '5', '7'] },
    correct: 2,
    explanation: {
      el: 'Οι ωκεανοί είναι 5: Ειρηνικός, Ατλαντικός, Ινδικός, Νότιος και Αρκτικός. Όλοι μαζί ενώνονται σε μία τεράστια θάλασσα.',
      en: 'There are 5 oceans: Pacific, Atlantic, Indian, Southern and Arctic. Together they join into one huge sea.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο μεγαλύτερος ωκεανός του κόσμου;', en: 'Which is the largest ocean in the world?' },
    options: { el: ['Ο Ατλαντικός', 'Ο Ινδικός', 'Ο Ειρηνικός', 'Ο Αρκτικός'], en: ['The Atlantic', 'The Indian', 'The Pacific', 'The Arctic'] },
    correct: 2,
    explanation: {
      el: 'Ο Ειρηνικός είναι ο μεγαλύτερος και ο βαθύτερος ωκεανός. Είναι πιο μεγάλος από όλες τις στεριές της Γης μαζί!',
      en: 'The Pacific is the largest and deepest ocean. It is bigger than all the land on Earth put together!',
    },
  },
  {
    q: { el: 'Ο Νίκος ταξιδεύει με πλοίο από την Ευρώπη στη Βόρεια Αμερική. Ποιον ωκεανό θα περάσει;', en: 'Nikos sails by ship from Europe to North America. Which ocean will he cross?' },
    options: { el: ['Τον Ειρηνικό', 'Τον Ατλαντικό', 'Τον Ινδικό', 'Τον Νότιο'], en: ['The Pacific', 'The Atlantic', 'The Indian', 'The Southern'] },
    correct: 1,
    explanation: {
      el: 'Ο Ατλαντικός ωκεανός βρίσκεται ανάμεσα στην Ευρώπη και στην Αφρική από τη μία μεριά και στην Αμερική από την άλλη.',
      en: 'The Atlantic Ocean lies between Europe and Africa on one side and the Americas on the other.',
    },
  },
  {
    q: { el: 'Ποιος ωκεανός βρίσκεται γύρω από τον Βόρειο Πόλο και είναι σκεπασμένος με πάγο τον περισσότερο χρόνο;', en: 'Which ocean lies around the North Pole and is covered in ice most of the year?' },
    options: { el: ['Ο Νότιος', 'Ο Ατλαντικός', 'Ο Ινδικός', 'Ο Αρκτικός'], en: ['The Southern', 'The Atlantic', 'The Indian', 'The Arctic'] },
    correct: 3,
    explanation: {
      el: 'Ο Αρκτικός ωκεανός είναι ο μικρότερος και ο πιο κρύος ωκεανός. Ο Νότιος ωκεανός είναι στην άλλη άκρη, γύρω από την Ανταρκτική.',
      en: 'The Arctic Ocean is the smallest and coldest ocean. The Southern Ocean is at the other end, around Antarctica.',
    },
  },

  // ── 11–12: the atmosphere ──────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι η ατμόσφαιρα;', en: 'What is the atmosphere?' },
    options: { el: ['Το νερό των ωκεανών', 'Το στρώμα αέρα που περιβάλλει τη Γη', 'Το καυτό εσωτερικό της Γης', 'Μόνο τα σύννεφα'], en: ['The water of the oceans', 'The layer of air that surrounds the Earth', 'The hot inside of the Earth', 'Only the clouds'] },
    correct: 1,
    explanation: {
      el: 'Η ατμόσφαιρα είναι το στρώμα αέρα που τυλίγει τη Γη σαν μια αόρατη κουβέρτα. Μας δίνει αέρα να αναπνέουμε και μας προστατεύει από τον Ήλιο.',
      en: 'The atmosphere is the layer of air that wraps the Earth like an invisible blanket. It gives us air to breathe and protects us from the Sun.',
    },
  },
  {
    q: { el: 'Ποιο αέριο της ατμόσφαιρας χρειαζόμαστε για να αναπνέουμε και να ζούμε;', en: 'Which gas in the atmosphere do we need to breathe and stay alive?' },
    options: { el: ['Το οξυγόνο', 'Το διοξείδιο του άνθρακα', 'Το ήλιο', 'Το υδρογόνο'], en: ['Oxygen', 'Carbon dioxide', 'Helium', 'Hydrogen'] },
    correct: 0,
    explanation: {
      el: 'Εισπνέουμε οξυγόνο και εκπνέουμε διοξείδιο του άνθρακα. Τα φυτά κάνουν το αντίθετο, γι\' αυτό τα δάση λέγονται «πνεύμονες της Γης».',
      en: 'We breathe in oxygen and breathe out carbon dioxide. Plants do the opposite, which is why forests are called the “lungs of the Earth”.',
    },
  },

  // ── 13–14: climate zones ───────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη ζει στην Ελλάδα, όπου τα καλοκαίρια είναι ζεστά και οι χειμώνες ήπιοι. Σε ποια κλιματική ζώνη βρίσκεται;', en: 'Eleni lives in Greece, where summers are hot and winters are mild. Which climate zone is she in?' },
    options: { el: ['Στην πολική ζώνη', 'Στην τροπική ζώνη', 'Στην εύκρατη ζώνη', 'Στην ερημική ζώνη'], en: ['The polar zone', 'The tropical zone', 'The temperate zone', 'The desert zone'] },
    correct: 2,
    explanation: {
      el: 'Η Ελλάδα ανήκει στην εύκρατη ζώνη: ούτε πολύ ζεστά όλο τον χρόνο, ούτε παγωμένα. Η εύκρατη ζώνη έχει τέσσερις εποχές.',
      en: 'Greece belongs to the temperate zone: not hot all year round, not frozen either. The temperate zone has four seasons.',
    },
  },
  {
    q: { el: 'Ποια κλιματική ζώνη βρίσκεται γύρω από τον Ισημερινό, όπου κάνει ζέστη όλο τον χρόνο;', en: 'Which climate zone lies around the Equator, where it is hot all year round?' },
    options: { el: ['Η τροπική ζώνη', 'Η εύκρατη ζώνη', 'Η πολική ζώνη', 'Η ορεινή ζώνη'], en: ['The tropical zone', 'The temperate zone', 'The polar zone', 'The mountain zone'] },
    correct: 0,
    explanation: {
      el: 'Κοντά στον Ισημερινό οι ακτίνες του Ήλιου πέφτουν κάθετα, γι\' αυτό η τροπική ζώνη είναι η πιο ζεστή. Όσο πάμε προς τους πόλους, τόσο πιο κρύο κάνει.',
      en: 'Near the Equator the Sun\'s rays fall straight down, so the tropical zone is the hottest. The closer we go to the poles, the colder it gets.',
    },
  },

  // ── 15–16: vegetation zones ────────────────────────────────────────────────
  {
    q: { el: 'Κοντά στον Ισημερινό κάνει ζέστη και βρέχει σχεδόν κάθε μέρα. Τι βλάστηση φυτρώνει εκεί;', en: 'Near the Equator it is hot and it rains almost every day. What vegetation grows there?' },
    options: { el: ['Τούνδρα', 'Τροπικό δάσος', 'Έρημος', 'Πευκοδάσος'], en: ['Tundra', 'Tropical rainforest', 'Desert', 'Pine forest'] },
    correct: 1,
    explanation: {
      el: 'Με πολλή ζέστη και πολλή βροχή φυτρώνουν πυκνά τροπικά δάση, όπως ο Αμαζόνιος. Εκεί ζουν περισσότερα είδη ζώων από οπουδήποτε αλλού.',
      en: 'Lots of heat and lots of rain grow thick tropical rainforests, like the Amazon. More kinds of animals live there than anywhere else.',
    },
  },
  {
    q: { el: 'Στις παγωμένες περιοχές κοντά στους πόλους δεν φυτρώνουν ψηλά δέντρα, μόνο βρύα και χαμηλά φυτά. Πώς λέγεται αυτή η βλάστηση;', en: 'In the frozen lands near the poles no tall trees grow, only moss and low plants. What is this vegetation called?' },
    options: { el: ['Σαβάνα', 'Τροπικό δάσος', 'Τούνδρα', 'Μεσογειακή βλάστηση'], en: ['Savanna', 'Tropical rainforest', 'Tundra', 'Mediterranean vegetation'] },
    correct: 2,
    explanation: {
      el: 'Η τούνδρα είναι η βλάστηση της πολικής ζώνης: το έδαφος είναι παγωμένο σχεδόν όλο τον χρόνο, γι\' αυτό μεγαλώνουν μόνο βρύα, λειχήνες και μικροί θάμνοι.',
      en: 'Tundra is the vegetation of the polar zone: the ground is frozen almost all year, so only moss, lichen and small bushes can grow.',
    },
  },

  // ── 17–18: relief ──────────────────────────────────────────────────────────
  {
    q: { el: 'Όταν οι γεωγράφοι λένε «ανάγλυφο», τι εννοούν;', en: 'When geographers say “relief”, what do they mean?' },
    options: { el: ['Τον καιρό μιας περιοχής', 'Τα ζώα που ζουν σε μια περιοχή', 'Τους ανθρώπους μιας περιοχής', 'Τη μορφή της επιφάνειας: βουνά, λόφους, πεδιάδες'], en: ['The weather of an area', 'The animals that live in an area', 'The people of an area', 'The shape of the land: mountains, hills, plains'] },
    correct: 3,
    explanation: {
      el: 'Το ανάγλυφο είναι το «πρόσωπο» της Γης: τα βουνά, οι λόφοι, οι πεδιάδες και οι κοιλάδες. Σε έναν χάρτη το δείχνουμε με χρώματα — καφέ για τα βουνά, πράσινο για τις πεδιάδες.',
      en: 'Relief is the “face” of the Earth: mountains, hills, plains and valleys. On a map we show it with colours — brown for mountains, green for plains.',
    },
  },
  {
    q: { el: 'Το Έβερεστ, η ψηλότερη κορυφή του κόσμου, βρίσκεται σε ποια οροσειρά;', en: 'Everest, the highest peak in the world, is in which mountain range?' },
    options: { el: ['Στις Άλπεις', 'Στις Άνδεις', 'Στα Ιμαλάια', 'Στην Πίνδο'], en: ['The Alps', 'The Andes', 'The Himalayas', 'The Pindus'] },
    correct: 2,
    explanation: {
      el: 'Το Έβερεστ βρίσκεται στα Ιμαλάια, στην Ασία, και φτάνει σχεδόν τα 9 χιλιόμετρα ύψος. Οι Άλπεις είναι στην Ευρώπη, οι Άνδεις στη Νότια Αμερική και η Πίνδος στην Ελλάδα.',
      en: 'Everest is in the Himalayas, in Asia, and rises almost 9 kilometres high. The Alps are in Europe, the Andes in South America and the Pindus in Greece.',
    },
  },
];
