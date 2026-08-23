/**
 * Ε' Δημοτικού · Ιστορία · Το Βυζάντιο & οι Γείτονές του
 * =======================================================
 * 18 original questions (curriculum topics only — no textbook text). Language level: 10–11.
 *
 * What the unit covers, in the order the class meets it:
 *   1–2   the Persians in the east and the Avars from the north; the siege of the City
 *   3–5   Emperor Heraclius: beating the Persians, Greek becomes the language of the state
 *   6–9   the Arabs, the two sieges of Constantinople, Greek fire and its secret recipe
 *   10–12 the Akritai guarding the borders; Digenis Akritas and the akritic songs
 *   13–15 Cyril and Methodius from Thessaloniki, the Slavs and the alphabet they were given
 *   16–18 the Bulgarians, the Rus of Kiev, and what the neighbours took from Byzantium
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_HISTORY_BYZANTIUM_NEIGHBOURS: QuizQuestion[] = [
  // ── 1–2: Persians and Avars ────────────────────────────────────────────────
  {
    q: { el: 'Ποια ήταν η πρωτεύουσα του Βυζαντίου, η «Πόλη» που όλοι οι γείτονες ήθελαν να πάρουν;', en: 'What was the capital of Byzantium, the “City” all the neighbours wanted to take?' },
    options: { el: ['Η Αθήνα', 'Η Κωνσταντινούπολη', 'Η Ρώμη', 'Η Θεσσαλονίκη'], en: ['Athens', 'Constantinople', 'Rome', 'Thessaloniki'] },
    correct: 1,
    explanation: {
      el: 'Η Κωνσταντινούπολη ήταν η πρωτεύουσα του Βυζαντίου. Είχε τεράστια τείχη και θάλασσα γύρω της, γι\' αυτό άντεξε σε πολλές πολιορκίες.',
      en: 'Constantinople was the capital of Byzantium. It had huge walls and sea around it, which is why it survived many sieges.',
    },
  },
  {
    q: { el: 'Οι Πέρσες ήταν οι μεγάλοι αντίπαλοι του Βυζαντίου. Από ποια μεριά ζούσαν;', en: 'The Persians were Byzantium\'s great rivals. On which side did they live?' },
    options: { el: ['Στα δυτικά, κοντά στη Ρώμη', 'Στα βόρεια, πέρα από τον Δούναβη', 'Στα ανατολικά, πέρα από τη Μικρά Ασία', 'Στα νότια, στην Αφρική'], en: ['To the west, near Rome', 'To the north, beyond the Danube', 'To the east, beyond Asia Minor', 'To the south, in Africa'] },
    correct: 2,
    explanation: {
      el: 'Οι Πέρσες ζούσαν στα ανατολικά, στη σημερινή περιοχή του Ιράν. Βυζάντιο και Περσία πολεμούσαν για τα σύνορά τους εκατοντάδες χρόνια.',
      en: 'The Persians lived to the east, in the area of today\'s Iran. Byzantium and Persia fought over their borders for hundreds of years.',
    },
  },

  // ── 3–5: the siege of 626 and Emperor Heraclius ───────────────────────────
  {
    q: { el: 'Οι Άβαροι ήρθαν καβάλα στα άλογά τους και πολιόρκησαν την Κωνσταντινούπολη. Από πού είχαν έρθει;', en: 'The Avars rode in on their horses and besieged Constantinople. Where had they come from?' },
    options: { el: ['Από τον βορρά, πέρα από τον Δούναβη', 'Από την Αίγυπτο', 'Από την Ισπανία', 'Από τα νησιά του Αιγαίου'], en: ['From the north, beyond the Danube', 'From Egypt', 'From Spain', 'From the Aegean islands'] },
    correct: 0,
    explanation: {
      el: 'Οι Άβαροι ήταν νομάδες καβαλάρηδες που κατέβηκαν από τον βορρά. Το 626 έζωσαν την Πόλη από τη στεριά, ενώ οι Πέρσες περίμεναν απέναντι, αλλά τα τείχη άντεξαν.',
      en: 'The Avars were nomad horsemen who came down from the north. In 626 they surrounded the City by land while the Persians waited across the water, but the walls held.',
    },
  },
  {
    q: { el: 'Ποιος αυτοκράτορας οδήγησε ο ίδιος τον στρατό του μακριά στην Ανατολή και νίκησε τους Πέρσες;', en: 'Which emperor led his own army far into the East and defeated the Persians?' },
    options: { el: ['Ο Μέγας Αλέξανδρος', 'Ο Ηράκλειος', 'Ο Ιουστινιανός', 'Ο Μέγας Κωνσταντίνος'], en: ['Alexander the Great', 'Heraclius', 'Justinian', 'Constantine the Great'] },
    correct: 1,
    explanation: {
      el: 'Ο Ηράκλειος δεν έμεινε στο παλάτι: πήγε ο ίδιος με τον στρατό του μέσα στην Περσία και τη νίκησε. Έτσι το Βυζάντιο πήρε πίσω τις χαμένες περιοχές του.',
      en: 'Heraclius did not stay in the palace: he marched with his army into Persia himself and won. That is how Byzantium got its lost lands back.',
    },
  },
  {
    q: { el: 'Ο Ηράκλειος άλλαξε και κάτι στα γραφεία του κράτους. Ποια γλώσσα έγινε η επίσημη γλώσσα του Βυζαντίου;', en: 'Heraclius also changed something in the state offices. Which language became the official language of Byzantium?' },
    options: { el: ['Τα λατινικά', 'Τα περσικά', 'Τα αραβικά', 'Τα ελληνικά'], en: ['Latin', 'Persian', 'Arabic', 'Greek'] },
    correct: 3,
    explanation: {
      el: 'Μέχρι τότε τα έγγραφα γράφονταν στα λατινικά, τη γλώσσα της παλιάς Ρώμης. Ο Ηράκλειος έκανε επίσημη γλώσσα τα ελληνικά, που μιλούσε ήδη ο περισσότερος κόσμος.',
      en: 'Until then documents were written in Latin, the language of old Rome. Heraclius made Greek the official language, which most people already spoke.',
    },
  },

  // ── 6–9: the Arabs and Greek fire ─────────────────────────────────────────
  {
    q: { el: 'Λίγο μετά τις νίκες του Ηρακλείου εμφανίστηκε ένας νέος, δυνατός γείτονας από την έρημο. Ποιοι ήταν;', en: 'Soon after Heraclius\'s victories, a new, powerful neighbour appeared from the desert. Who were they?' },
    options: { el: ['Οι Άραβες', 'Οι Γότθοι', 'Οι Ούννοι', 'Οι Βίκινγκ'], en: ['The Arabs', 'The Goths', 'The Huns', 'The Vikings'] },
    correct: 0,
    explanation: {
      el: 'Οι Άραβες ξεκίνησαν από την Αραβία και σε λίγα χρόνια πήραν από το Βυζάντιο τη Συρία, την Παλαιστίνη και την Αίγυπτο.',
      en: 'The Arabs set out from Arabia and within a few years took Syria, Palestine and Egypt from Byzantium.',
    },
  },
  {
    q: { el: 'Οι Άραβες έφτασαν με τα πλοία τους δύο φορές μπροστά στην Κωνσταντινούπολη. Τι έγινε;', en: 'The Arabs arrived with their ships in front of Constantinople twice. What happened?' },
    options: { el: ['Πήραν την Πόλη και τις δύο φορές', 'Η Πόλη άντεξε και τις δύο φορές', 'Την πήραν τη δεύτερη φορά', 'Οι Βυζαντινοί τούς παρέδωσαν την Πόλη'], en: ['They took the City both times', 'The City held out both times', 'They took it the second time', 'The Byzantines handed the City over'] },
    correct: 1,
    explanation: {
      el: 'Και στις δύο πολιορκίες η Κωνσταντινούπολη άντεξε. Τα τείχη, ο στόλος και ένα μυστικό όπλο κράτησαν τους Άραβες μακριά.',
      en: 'In both sieges Constantinople held out. The walls, the fleet and a secret weapon kept the Arabs away.',
    },
  },
  {
    q: { el: 'Το μυστικό όπλο των Βυζαντινών ήταν το «υγρό πυρ». Τι το έκανε τόσο τρομερό;', en: 'The Byzantines\' secret weapon was “Greek fire”. What made it so terrifying?' },
    options: { el: ['Έκανε πολύ δυνατό θόρυβο', 'Έκαιγε ακόμα και πάνω στο νερό', 'Έριχνε τεράστιες πέτρες', 'Έκανε τα πλοία αόρατα'], en: ['It made a very loud noise', 'It burned even on the water', 'It hurled huge stones', 'It made the ships invisible'] },
    correct: 1,
    explanation: {
      el: 'Το υγρό πυρ ήταν μια φλόγα που έβγαινε από σωλήνες στα βυζαντινά πλοία και δεν έσβηνε με το νερό. Για τους εχθρούς έμοιαζε με μαγεία!',
      en: 'Greek fire was a flame shot from tubes on Byzantine ships, and water could not put it out. To the enemies it looked like magic!',
    },
  },
  {
    q: { el: 'Γιατί κανένας γείτονας δεν κατάφερε να φτιάξει δικό του υγρό πυρ;', en: 'Why did no neighbour manage to make their own Greek fire?' },
    options: { el: ['Γιατί χρειαζόταν χρυσάφι για να φτιαχτεί', 'Γιατί η συνταγή του ήταν αυστηρά κρατικό μυστικό', 'Γιατί το έφτιαχναν μόνο οι Πέρσες', 'Γιατί έσβηνε μόλις έβγαινε από την Πόλη'], en: ['Because it needed gold to be made', 'Because its recipe was a strict state secret', 'Because only the Persians made it', 'Because it went out as soon as it left the City'] },
    correct: 1,
    explanation: {
      el: 'Η συνταγή του υγρού πυρός ήταν από τα πιο καλά κρυμμένα μυστικά του Βυζαντίου. Την ήξεραν ελάχιστοι, και δεν τη γράψανε ποτέ σε βιβλίο.',
      en: 'The recipe for Greek fire was one of Byzantium\'s best-kept secrets. Only a handful of people knew it, and it was never written in a book.',
    },
  },

  // ── 10–12: Akritai and Digenis ────────────────────────────────────────────
  {
    q: { el: 'Ποιοι ήταν οι Ακρίτες;', en: 'Who were the Akritai?' },
    options: { el: ['Οι φύλακες του παλατιού', 'Στρατιώτες που φύλαγαν τα σύνορα της αυτοκρατορίας', 'Οι ναύτες των πολεμικών πλοίων', 'Οι δάσκαλοι των παιδιών του αυτοκράτορα'], en: ['The guards of the palace', 'Soldiers who guarded the empire\'s borders', 'The sailors of the warships', 'The teachers of the emperor\'s children'] },
    correct: 1,
    explanation: {
      el: 'Οι Ακρίτες ζούσαν στις «άκρες» της αυτοκρατορίας, δηλαδή στα σύνορα, και τα φύλαγαν από τις επιδρομές. Από τη λέξη «άκρη» πήραν το όνομά τους.',
      en: 'The Akritai lived at the “edges” of the empire, that is at the borders, and guarded them from raids. Their name comes from the Greek word for “edge”.',
    },
  },
  {
    q: { el: 'Σε ποια περιοχή φύλαγαν κυρίως οι Ακρίτες;', en: 'Which area did the Akritai mainly guard?' },
    options: { el: ['Τα ανατολικά σύνορα, στη Μικρά Ασία, απέναντι από τους Άραβες', 'Τα τείχη της Κωνσταντινούπολης', 'Τα νησιά του Ιονίου', 'Τα σύνορα με την Ιταλία'], en: ['The eastern borders in Asia Minor, facing the Arabs', 'The walls of Constantinople', 'The Ionian islands', 'The borders with Italy'] },
    correct: 0,
    explanation: {
      el: 'Οι Ακρίτες φύλαγαν κυρίως τα ανατολικά σύνορα, στη Μικρά Ασία, εκεί που γίνονταν συνέχεια επιδρομές από τους Άραβες.',
      en: 'The Akritai mainly guarded the eastern borders in Asia Minor, where Arab raids happened all the time.',
    },
  },
  {
    q: { el: 'Ο Διγενής Ακρίτας είναι ο πιο διάσημος ήρωας των ακριτικών τραγουδιών. Γιατί τον έλεγαν «Διγενή»;', en: 'Digenis Akritas is the most famous hero of the akritic songs. Why was he called “Digenis”?' },
    options: { el: ['Γιατί είχε δύο σπαθιά', 'Γιατί γεννήθηκε δύο φορές', 'Γιατί καταγόταν από δύο λαούς', 'Γιατί είχε δύο άλογα'], en: ['Because he had two swords', 'Because he was born twice', 'Because he came from two peoples', 'Because he had two horses'] },
    correct: 2,
    explanation: {
      el: '«Διγενής» σημαίνει «από δύο γένη»: η μητέρα του ήταν Βυζαντινή και ο πατέρας του Άραβας. Στα τραγούδια παλεύει με θηρία και δράκους και νικάει τους πάντες.',
      en: '“Digenis” means “of two races”: his mother was Byzantine and his father an Arab. In the songs he wrestles beasts and dragons and beats everyone.',
    },
  },

  // ── 13–15: Cyril, Methodius and the Slavs ─────────────────────────────────
  {
    q: { el: 'Οι Σλάβοι ήρθαν από τον βορρά και εγκαταστάθηκαν σε βυζαντινά εδάφη. Πού εγκαταστάθηκαν κυρίως;', en: 'The Slavs came from the north and settled on Byzantine lands. Where did they mainly settle?' },
    options: { el: ['Στη Μικρά Ασία', 'Στη Βαλκανική χερσόνησο', 'Στην Αίγυπτο', 'Στη Σικελία'], en: ['In Asia Minor', 'In the Balkan peninsula', 'In Egypt', 'In Sicily'] },
    correct: 1,
    explanation: {
      el: 'Οι Σλάβοι πέρασαν τον Δούναβη και εγκαταστάθηκαν στα Βαλκάνια, ως χωρικοί και κτηνοτρόφοι. Με τον καιρό πολλοί έγιναν υπήκοοι του Βυζαντίου.',
      en: 'The Slavs crossed the Danube and settled in the Balkans as farmers and herders. Over time many became subjects of Byzantium.',
    },
  },
  {
    q: { el: 'Ο Κύριλλος και ο Μεθόδιος ήταν δύο αδέλφια που έγιναν διάσημα. Από ποια πόλη κατάγονταν;', en: 'Cyril and Methodius were two brothers who became famous. Which city did they come from?' },
    options: { el: ['Από την Αθήνα', 'Από τη Ρώμη', 'Από τη Θεσσαλονίκη', 'Από την Αλεξάνδρεια'], en: ['From Athens', 'From Rome', 'From Thessaloniki', 'From Alexandria'] },
    correct: 2,
    explanation: {
      el: 'Ο Κύριλλος και ο Μεθόδιος ήταν από τη Θεσσαλονίκη. Εκεί ζούσαν πολλοί Σλάβοι, γι\' αυτό τα αδέλφια ήξεραν καλά τη γλώσσα τους.',
      en: 'Cyril and Methodius came from Thessaloniki. Many Slavs lived there, which is why the brothers knew their language well.',
    },
  },
  {
    q: { el: 'Τι μεγάλο έργο έκαναν ο Κύριλλος και ο Μεθόδιος για τους Σλάβους;', en: 'What great thing did Cyril and Methodius do for the Slavs?' },
    options: { el: ['Τους έχτισαν μια νέα πρωτεύουσα', 'Τους έδωσαν ένα αλφάβητο για να γράφουν τη γλώσσα τους', 'Τους έμαθαν να φτιάχνουν υγρό πυρ', 'Τους έφεραν ελληνικά νομίσματα'], en: ['They built them a new capital', 'They gave them an alphabet to write their language', 'They taught them to make Greek fire', 'They brought them Greek coins'] },
    correct: 1,
    explanation: {
      el: 'Οι Σλάβοι δεν είχαν γραφή. Τα δύο αδέλφια έφτιαξαν ένα αλφάβητο για τη γλώσσα τους και μετέφρασαν βιβλία. Το σημερινό «κυριλλικό» αλφάβητο πήρε το όνομά του από τον Κύριλλο.',
      en: 'The Slavs had no writing. The two brothers created an alphabet for their language and translated books. Today\'s “Cyrillic” alphabet is named after Cyril.',
    },
  },

  // ── 16–18: Bulgarians, Rus, and what the neighbours kept ──────────────────
  {
    q: { el: 'Οι Βούλγαροι έφτιαξαν δικό τους κράτος δίπλα στο Βυζάντιο. Πού βρισκόταν;', en: 'The Bulgarians made a state of their own next to Byzantium. Where was it?' },
    options: { el: ['Στα βόρεια Βαλκάνια, κοντά στον Δούναβη', 'Στη Μικρά Ασία, κοντά στους Άραβες', 'Στη νότια Ιταλία', 'Στην Κρήτη'], en: ['In the northern Balkans, near the Danube', 'In Asia Minor, near the Arabs', 'In southern Italy', 'In Crete'] },
    correct: 0,
    explanation: {
      el: 'Το κράτος των Βουλγάρων ήταν στα βόρεια Βαλκάνια, κοντά στον Δούναβη. Άλλοτε πολεμούσε με το Βυζάντιο και άλλοτε έκανε ειρήνη και εμπόριο μαζί του.',
      en: 'The Bulgarian state was in the northern Balkans, near the Danube. Sometimes it fought Byzantium and sometimes it made peace and traded with it.',
    },
  },
  {
    q: { el: 'Οι Ρως ταξίδευαν από το Κίεβο ως την Κωνσταντινούπολη. Πώς έφταναν εκεί;', en: 'The Rus travelled from Kiev all the way to Constantinople. How did they get there?' },
    options: { el: ['Με καμήλες μέσα από την έρημο', 'Με βάρκες στα ποτάμια και μετά μέσα από τη Μαύρη Θάλασσα', 'Με άλογα μέσα από τη Μικρά Ασία', 'Με πλοία από τη Μεσόγειο'], en: ['On camels through the desert', 'By boat down the rivers and then across the Black Sea', 'On horses through Asia Minor', 'By ship from the Mediterranean'] },
    correct: 1,
    explanation: {
      el: 'Οι Ρως κατέβαιναν με βάρκες τα μεγάλα ποτάμια, έβγαιναν στη Μαύρη Θάλασσα και έφταναν στην Πόλη. Έφερναν γούνες και μέλι και έπαιρναν μετάξι και μπαχαρικά.',
      en: 'The Rus rowed down the great rivers, came out into the Black Sea and reached the City. They brought furs and honey and took back silk and spices.',
    },
  },
  {
    q: { el: 'Οι Βούλγαροι και οι Ρως δεν πήραν ποτέ την Κωνσταντινούπολη. Τι όμως πήραν από το Βυζάντιο και κρατούν μέχρι σήμερα;', en: 'The Bulgarians and the Rus never took Constantinople. But what did they take from Byzantium that they still keep today?' },
    options: { el: ['Τη συνταγή του υγρού πυρός', 'Τα τείχη της Πόλης', 'Το αλφάβητο, τη θρησκεία και την τέχνη του', 'Τη γλώσσα του, τα ελληνικά'], en: ['The recipe for Greek fire', 'The walls of the City', 'Its alphabet, its religion and its art', 'Its language, Greek'] },
    correct: 2,
    explanation: {
      el: 'Οι Σλάβοι, οι Βούλγαροι και οι Ρως πήραν από το Βυζάντιο το κυριλλικό αλφάβητο, τη χριστιανική θρησκεία και τον τρόπο που έχτιζαν και ζωγράφιζαν τις εκκλησίες. Γι\' αυτό ο πολιτισμός τους μοιάζει με τον βυζαντινό ως σήμερα.',
      en: 'The Slavs, Bulgarians and Rus took from Byzantium the Cyrillic alphabet, the Christian religion and the way churches were built and painted. That is why their culture still resembles the Byzantine one today.',
    },
  },
];
