/**
 * ΣΤ' Δημοτικού · Γεωγραφία · Βουνά, Ποτάμια & Λίμνες του Κόσμου
 * ================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12. Order, easiest → hardest:
 *   1–5   mountains: Himalayas, Everest, Andes, Alps (Mont Blanc)
 *   6–12  rivers: Nile, Amazon, Mississippi, Yangtze, Danube
 *   13–14 lakes: Caspian, Baikal
 *   15–18 deserts: Sahara, Antarctica, Atacama, Gobi
 * Distractors are the real mix-ups: wrong continent, neighbouring range, the
 * "second" record holder, the sea a river does NOT flow into.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GEOGRAPHY_WORLD_MOUNTAINS_RIVERS: QuizQuestion[] = [
  // ── 1–5: mountains ─────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποια ήπειρο βρίσκονται τα Ιμαλάια, τα ψηλότερα βουνά της Γης;', en: 'On which continent are the Himalayas, the highest mountains on Earth?' },
    options: { el: ['Στην Αφρική', 'Στην Ασία', 'Στην Ευρώπη', 'Στη Νότια Αμερική'], en: ['Africa', 'Asia', 'Europe', 'South America'] },
    correct: 1,
    explanation: {
      el: 'Τα Ιμαλάια απλώνονται στην Ασία, ανάμεσα στην Ινδία, το Νεπάλ και την Κίνα. Εκεί βρίσκονται οι πιο ψηλές κορυφές του πλανήτη.',
      en: 'The Himalayas stretch across Asia, between India, Nepal and China. The tallest peaks on the planet are there.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ψηλότερο βουνό του κόσμου;', en: 'Which is the highest mountain in the world?' },
    options: { el: ['Το Μον Μπλαν', 'Ο Όλυμπος', 'Το Έβερεστ', 'Το Κιλιμάντζαρο'], en: ['Mont Blanc', 'Mount Olympus', 'Mount Everest', 'Kilimanjaro'] },
    correct: 2,
    explanation: {
      el: 'Το Έβερεστ φτάνει σχεδόν τα 8.850 μέτρα — πάνω από 4 φορές τον Όλυμπο! Κανένα άλλο βουνό δεν το ξεπερνά.',
      en: 'Everest rises to almost 8,850 metres — more than 4 times Mount Olympus! No other mountain is taller.',
    },
  },
  {
    q: { el: 'Οι ορειβάτες που ανεβαίνουν στο Έβερεστ ξεκινούν συνήθως από μια μικρή ορεινή χώρα. Ποια είναι;', en: 'Climbers heading up Everest usually start from a small mountain country. Which one?' },
    options: { el: ['Το Νεπάλ', 'Η Ιαπωνία', 'Η Ελβετία', 'Το Περού'], en: ['Nepal', 'Japan', 'Switzerland', 'Peru'] },
    correct: 0,
    explanation: {
      el: 'Το Έβερεστ στέκεται στα σύνορα Νεπάλ και Κίνας. Οι περισσότερες αποστολές ξεκινούν από το Νεπάλ, με οδηγούς τους ντόπιους Σέρπα.',
      en: 'Everest stands on the border of Nepal and China. Most expeditions start from Nepal, guided by the local Sherpa people.',
    },
  },
  {
    q: { el: 'Οι Άνδεις είναι η πιο μακριά οροσειρά της Γης. Ποια ήπειρο διασχίζουν από τη μια άκρη ως την άλλη;', en: 'The Andes are the longest mountain range on Earth. Which continent do they run along from end to end?' },
    options: { el: ['Τη Βόρεια Αμερική', 'Την Αυστραλία', 'Την Αφρική', 'Τη Νότια Αμερική'], en: ['North America', 'Australia', 'Africa', 'South America'] },
    correct: 3,
    explanation: {
      el: 'Οι Άνδεις τρέχουν σαν ραχοκοκαλιά κατά μήκος της δυτικής Νότιας Αμερικής, πάνω από 7.000 χιλιόμετρα, από την Κολομβία ως τη Χιλή.',
      en: 'The Andes run like a backbone down western South America for over 7,000 kilometres, from Colombia to Chile.',
    },
  },
  {
    q: { el: 'Η Ελένη κάνει σκι στις Άλπεις. Ποια είναι η ψηλότερη κορυφή τους;', en: 'Eleni is skiing in the Alps. Which is their highest peak?' },
    options: { el: ['Το Μάτερχορν', 'Το Μον Μπλαν', 'Το Έβερεστ', 'Ο Όλυμπος'], en: ['The Matterhorn', 'Mont Blanc', 'Everest', 'Mount Olympus'] },
    correct: 1,
    explanation: {
      el: 'Το Μον Μπλαν («Λευκό Βουνό») στα σύνορα Γαλλίας–Ιταλίας φτάνει τα 4.810 μέτρα και είναι η κορυφή των Άλπεων. Το Έβερεστ είναι στην Ασία!',
      en: 'Mont Blanc (“White Mountain”) on the France–Italy border reaches 4,810 metres and is the top of the Alps. Everest is in Asia!',
    },
  },

  // ── 6–12: rivers ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νείλος πότιζε τη χώρα των Φαραώ. Σε ποια ήπειρο κυλάει;', en: 'The Nile watered the land of the Pharaohs. On which continent does it flow?' },
    options: { el: ['Στην Ασία', 'Στην Ευρώπη', 'Στην Αφρική', 'Στη Νότια Αμερική'], en: ['Asia', 'Europe', 'Africa', 'South America'] },
    correct: 2,
    explanation: {
      el: 'Ο Νείλος διασχίζει την Αφρική από τον νότο προς τον βορρά και περνά από την Αίγυπτο. Χωρίς αυτόν, η Αίγυπτος θα ήταν μόνο έρημος.',
      en: 'The Nile crosses Africa from south to north and passes through Egypt. Without it, Egypt would be nothing but desert.',
    },
  },
  {
    q: { el: 'Ο Νείλος κυλάει προς τον βορρά. Σε ποια θάλασσα χύνεται;', en: 'The Nile flows north. Which sea does it empty into?' },
    options: { el: ['Στη Μεσόγειο', 'Στην Ερυθρά Θάλασσα', 'Στον Ινδικό Ωκεανό', 'Στη Μαύρη Θάλασσα'], en: ['The Mediterranean Sea', 'The Red Sea', 'The Indian Ocean', 'The Black Sea'] },
    correct: 0,
    explanation: {
      el: 'Ο Νείλος καταλήγει στη Μεσόγειο, κοντά στην Αλεξάνδρεια, σχηματίζοντας ένα τεράστιο δέλτα σε σχήμα βεντάλιας.',
      en: 'The Nile ends in the Mediterranean near Alexandria, forming a huge fan-shaped delta.',
    },
  },
  {
    q: { el: 'Ο Αμαζόνιος κουβαλά περισσότερο νερό από κάθε άλλο ποτάμι. Μέσα από τι περνάει;', en: 'The Amazon carries more water than any other river. What does it flow through?' },
    options: { el: ['Από το μεγαλύτερο τροπικό δάσος', 'Από τη μεγαλύτερη έρημο', 'Από παγωμένες στέπες', 'Από ψηλά χιονισμένα οροπέδια'], en: ['The largest rainforest', 'The largest desert', 'Frozen steppes', 'High snowy plateaus'] },
    correct: 0,
    explanation: {
      el: 'Ο Αμαζόνιος διασχίζει το τροπικό δάσος του Αμαζονίου στη Βραζιλία, όπου βρέχει σχεδόν κάθε μέρα — γι\' αυτό έχει τόσο πολύ νερό.',
      en: 'The Amazon winds through the Amazon rainforest in Brazil, where it rains almost every day — that is why it carries so much water.',
    },
  },
  {
    q: { el: 'Ο Αμαζόνιος ξεκινά από τις Άνδεις και χύνεται σε έναν ωκεανό. Ποιον;', en: 'The Amazon starts in the Andes and empties into an ocean. Which one?' },
    options: { el: ['Στον Ειρηνικό', 'Στον Ινδικό', 'Στον Αρκτικό', 'Στον Ατλαντικό'], en: ['The Pacific', 'The Indian', 'The Arctic', 'The Atlantic'] },
    correct: 3,
    explanation: {
      el: 'Ο Αμαζόνιος κυλάει από τα δυτικά προς τα ανατολικά σε όλη τη Νότια Αμερική και χύνεται στον Ατλαντικό. Ο Ειρηνικός είναι πίσω από τις Άνδεις, στην άλλη πλευρά.',
      en: 'The Amazon flows west to east across South America and empties into the Atlantic. The Pacific is behind the Andes, on the other side.',
    },
  },
  {
    q: { el: 'Ο Νίκος ταξιδεύει με ποταμόπλοιο στον Μισισιπή. Σε ποια χώρα βρίσκεται;', en: 'Nikos is travelling on a riverboat down the Mississippi. Which country is he in?' },
    options: { el: ['Στον Καναδά', 'Στις Ηνωμένες Πολιτείες', 'Στο Μεξικό', 'Στη Βραζιλία'], en: ['Canada', 'The United States', 'Mexico', 'Brazil'] },
    correct: 1,
    explanation: {
      el: 'Ο Μισισιπής είναι ο μεγάλος ποταμός των ΗΠΑ: κυλάει από τον βορρά ως τον νότο της χώρας και χύνεται στον Κόλπο του Μεξικού.',
      en: 'The Mississippi is the great river of the USA: it runs from the north to the south of the country and empties into the Gulf of Mexico.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο μακρύτερος ποταμός της Ασίας;', en: 'Which is the longest river in Asia?' },
    options: { el: ['Ο Γάγγης', 'Ο Δούναβης', 'Ο Γιανγκτσέ', 'Ο Αμαζόνιος'], en: ['The Ganges', 'The Danube', 'The Yangtze', 'The Amazon'] },
    correct: 2,
    explanation: {
      el: 'Ο Γιανγκτσέ στην Κίνα είναι ο μακρύτερος ποταμός της Ασίας και ο τρίτος στον κόσμο. Ο Γάγγης είναι επίσης ασιατικός, αλλά πολύ πιο κοντός.',
      en: 'The Yangtze in China is the longest river in Asia and the third longest in the world. The Ganges is also Asian, but much shorter.',
    },
  },
  {
    q: { el: 'Ο Δούναβης περνά από περισσότερες χώρες από κάθε άλλο ποτάμι. Πού χύνεται;', en: 'The Danube passes through more countries than any other river. Where does it end?' },
    options: { el: ['Στη Μαύρη Θάλασσα', 'Στη Βόρεια Θάλασσα', 'Στη Μεσόγειο', 'Στη Βαλτική'], en: ['The Black Sea', 'The North Sea', 'The Mediterranean', 'The Baltic Sea'] },
    correct: 0,
    explanation: {
      el: 'Ο Δούναβης ξεκινά από τη Γερμανία, περνά από τη Βιέννη, τη Βουδαπέστη και το Βελιγράδι και καταλήγει στη Μαύρη Θάλασσα, στη Ρουμανία.',
      en: 'The Danube starts in Germany, passes Vienna, Budapest and Belgrade, and ends in the Black Sea, in Romania.',
    },
  },

  // ── 13–14: lakes ───────────────────────────────────────────────────────────
  {
    q: { el: 'Η Κασπία λέγεται «θάλασσα», αλλά δεν ενώνεται με κανέναν ωκεανό. Τι είναι στην πραγματικότητα;', en: 'The Caspian is called a “sea”, but it is not connected to any ocean. What is it really?' },
    options: { el: ['Ένας κόλπος', 'Ένας ποταμός', 'Η μεγαλύτερη λίμνη του κόσμου', 'Ένα κανάλι'], en: ['A gulf', 'A river', 'The largest lake in the world', 'A canal'] },
    correct: 2,
    explanation: {
      el: 'Η Κασπία είναι κλεισμένη από στεριά, άρα είναι λίμνη — η μεγαλύτερη στη Γη σε έκταση. Τη λένε θάλασσα επειδή είναι τεράστια και αλμυρή.',
      en: 'The Caspian is surrounded by land, so it is a lake — the biggest on Earth by area. People call it a sea because it is huge and salty.',
    },
  },
  {
    q: { el: 'Η Βαϊκάλη στη Σιβηρία κρατά ένα παγκόσμιο ρεκόρ. Ποιο;', en: 'Lake Baikal in Siberia holds a world record. Which one?' },
    options: { el: ['Είναι η πιο αλμυρή λίμνη', 'Είναι η βαθύτερη λίμνη', 'Είναι η πιο ζεστή λίμνη', 'Είναι η μεγαλύτερη λίμνη σε έκταση'], en: ['It is the saltiest lake', 'It is the deepest lake', 'It is the warmest lake', 'It is the largest lake by area'] },
    correct: 1,
    explanation: {
      el: 'Η Βαϊκάλη φτάνει σε βάθος πάνω από 1.600 μέτρα — η βαθύτερη λίμνη του κόσμου. Το νερό της είναι γλυκό και τόσο καθαρό που βλέπεις πολύ βαθιά.',
      en: 'Baikal is more than 1,600 metres deep — the deepest lake in the world. Its water is fresh and so clear you can see far down.',
    },
  },

  // ── 15–18: deserts ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η μεγαλύτερη ζεστή έρημος της Γης;', en: 'Which is the largest hot desert on Earth?' },
    options: { el: ['Η Γκόμπι', 'Η Ατακάμα', 'Η Σαχάρα', 'Η Αραβική'], en: ['The Gobi', 'The Atacama', 'The Sahara', 'The Arabian'] },
    correct: 2,
    explanation: {
      el: 'Η Σαχάρα σκεπάζει σχεδόν όλη τη βόρεια Αφρική — είναι περίπου όσο ολόκληρη η Ευρώπη! Αμμόλοφοι, βράχοι και λίγες οάσεις με φοίνικες.',
      en: 'The Sahara covers almost all of northern Africa — it is about the size of the whole of Europe! Dunes, rock and a few palm-tree oases.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει ότι η Ανταρκτική είναι έρημος. Έχει δίκιο;', en: 'Giorgos says Antarctica is a desert. Is he right?' },
    options: { el: ['Όχι, οι έρημοι είναι πάντα ζεστές', 'Ναι, γιατί εκεί πέφτει ελάχιστη βροχή ή χιόνι', 'Όχι, γιατί είναι σκεπασμένη με πάγο', 'Ναι, γιατί δεν ζει κανένα ζώο'], en: ['No, deserts are always hot', 'Yes, because very little rain or snow falls there', 'No, because it is covered in ice', 'Yes, because no animals live there'] },
    correct: 1,
    explanation: {
      el: 'Έρημος είναι ένας τόπος με ελάχιστη βροχή, όχι απαραίτητα ζεστός. Η Ανταρκτική είναι η μεγαλύτερη έρημος του κόσμου — και παγωμένη!',
      en: 'A desert is a place with almost no rain, not necessarily a hot one. Antarctica is the largest desert in the world — and a frozen one!',
    },
  },
  {
    q: { el: 'Ποια έρημος, δίπλα στις Άνδεις, θεωρείται η πιο ξερή του κόσμου;', en: 'Which desert, next to the Andes, is considered the driest in the world?' },
    options: { el: ['Η Σαχάρα', 'Η Καλαχάρι', 'Η Γκόμπι', 'Η Ατακάμα'], en: ['The Sahara', 'The Kalahari', 'The Gobi', 'The Atacama'] },
    correct: 3,
    explanation: {
      el: 'Η Ατακάμα στη Χιλή είναι τόσο ξερή που σε κάποια σημεία δεν έχει βρέξει για χρόνια. Οι Άνδεις σταματούν τα σύννεφα πριν φτάσουν εκεί.',
      en: 'The Atacama in Chile is so dry that in some spots it has not rained for years. The Andes stop the clouds before they get there.',
    },
  },
  {
    q: { el: 'Η έρημος Γκόμπι έχει καυτά καλοκαίρια και παγωμένους χειμώνες. Σε ποιες χώρες απλώνεται;', en: 'The Gobi Desert has scorching summers and freezing winters. Which countries does it cover?' },
    options: { el: ['Στην Αίγυπτο και τη Λιβύη', 'Στη Μογγολία και την Κίνα', 'Στη Χιλή και το Περού', 'Στην Αυστραλία'], en: ['Egypt and Libya', 'Mongolia and China', 'Chile and Peru', 'Australia'] },
    correct: 1,
    explanation: {
      el: 'Η Γκόμπι βρίσκεται στην Ασία, ανάμεσα στη Μογγολία και την Κίνα. Είναι ψυχρή έρημος: το χειμώνα χιονίζει πάνω στην άμμο!',
      en: 'The Gobi lies in Asia, between Mongolia and China. It is a cold desert: in winter it snows on the sand!',
    },
  },
];
