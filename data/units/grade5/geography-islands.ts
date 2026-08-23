/**
 * Ε' Δημοτικού · Γεωγραφία · Τα Νησιά της Ελλάδας
 * ================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 10–11.
 * What the unit covers, in order:
 *   1–3   Crete and Evia — the two biggest islands, where they are, what makes them special
 *   4–8   the island groups of the Aegean: Cyclades, Dodecanese (Rhodes), Sporades, Lesvos
 *   9–12  the Ionian islands and Corfu, how islands differ from the mainland
 *   13–18 island life: boats, fishing, water, tourism, and what islanders do in summer and winter
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GEOGRAPHY_ISLANDS: QuizQuestion[] = [
  // ── 1–3: Crete and Evia ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το μεγαλύτερο νησί της Ελλάδας;', en: 'Which is the largest island of Greece?' },
    options: { el: ['Η Ρόδος', 'Η Κρήτη', 'Η Κέρκυρα', 'Η Λέσβος'], en: ['Rhodes', 'Crete', 'Corfu', 'Lesvos'] },
    correct: 1,
    explanation: {
      el: 'Η Κρήτη είναι το μεγαλύτερο νησί της Ελλάδας. Βρίσκεται στο νότιο άκρο της χώρας, μέσα στο Κρητικό πέλαγος.',
      en: 'Crete is the largest island of Greece. It lies at the southern edge of the country, in the Cretan Sea.',
    },
  },
  {
    q: { el: 'Ποιο ψηλό βουνό της Κρήτης έχει χιόνι ακόμη και την άνοιξη;', en: 'Which tall mountain of Crete still has snow in spring?' },
    options: { el: ['Ο Όλυμπος', 'Ο Παρνασσός', 'Ο Ψηλορείτης', 'Ο Ταΰγετος'], en: ['Mount Olympus', 'Mount Parnassus', 'Psiloritis', 'Mount Taygetus'] },
    correct: 2,
    explanation: {
      el: 'Ο Ψηλορείτης (ή Ίδη) είναι το ψηλότερο βουνό της Κρήτης. Στον μύθο, εκεί μεγάλωσε κρυμμένος ο μικρός Δίας.',
      en: 'Psiloritis (also called Ida) is the highest mountain of Crete. In the myth, baby Zeus grew up hidden there.',
    },
  },
  {
    q: { el: 'Η Εύβοια είναι το δεύτερο μεγαλύτερο νησί της Ελλάδας. Πώς μπορείς να πας εκεί από τη Χαλκίδα;', en: 'Evia is the second largest island of Greece. How can you get there from Chalkida?' },
    options: { el: ['Μόνο με αεροπλάνο', 'Περπατώντας πάνω από μια γέφυρα', 'Μόνο με μεγάλο πλοίο', 'Δεν μπορείς, είναι πολύ μακριά'], en: ['Only by plane', 'By walking across a bridge', 'Only by a big ship', 'You cannot, it is too far'] },
    correct: 1,
    explanation: {
      el: 'Η Εύβοια είναι τόσο κοντά στη στεριά που τη συνδέουν γέφυρες. Στη Χαλκίδα η θάλασσα ανάμεσα είναι στενή σαν ποτάμι!',
      en: 'Evia is so close to the mainland that bridges connect them. At Chalkida the sea in between is as narrow as a river!',
    },
  },

  // ── 4–8: the Aegean island groups ──────────────────────────────────────────
  {
    q: { el: 'Σε ποιο πέλαγος βρίσκονται οι Κυκλάδες;', en: 'In which sea are the Cyclades?' },
    options: { el: ['Στο Ιόνιο πέλαγος', 'Στο Αιγαίο πέλαγος', 'Στη Μαύρη Θάλασσα', 'Στον Ατλαντικό ωκεανό'], en: ['In the Ionian Sea', 'In the Aegean Sea', 'In the Black Sea', 'In the Atlantic Ocean'] },
    correct: 1,
    explanation: {
      el: 'Οι Κυκλάδες είναι στη μέση του Αιγαίου. Λέγονται έτσι γιατί σχηματίζουν έναν κύκλο γύρω από το ιερό νησί της Δήλου.',
      en: 'The Cyclades are in the middle of the Aegean. They got their name because they form a circle around the sacred island of Delos.',
    },
  },
  {
    q: { el: 'Η Μαρία πήγε διακοπές σε ένα νησί με άσπρα σπιτάκια, μπλε παράθυρα και ανεμόμυλους. Σε ποια ομάδα νησιών ήταν;', en: 'Maria went on holiday to an island with little white houses, blue windows and windmills. Which island group was she in?' },
    options: { el: ['Στις Κυκλάδες', 'Στα Επτάνησα', 'Στις Σποράδες', 'Στα Δωδεκάνησα'], en: ['The Cyclades', 'The Ionian Islands', 'The Sporades', 'The Dodecanese'] },
    correct: 0,
    explanation: {
      el: 'Τα άσπρα σπίτια με τα μπλε παράθυρα και οι ανεμόμυλοι είναι η «σφραγίδα» των Κυκλάδων, όπως η Μύκονος και η Σαντορίνη.',
      en: 'White houses with blue windows and windmills are the trademark of the Cyclades, like Mykonos and Santorini.',
    },
  },
  {
    q: { el: 'Η Σαντορίνη έχει σχήμα μισοφέγγαρου. Τι της έδωσε αυτό το σχήμα;', en: 'Santorini is shaped like a crescent moon. What gave it this shape?' },
    options: { el: ['Τα κύματα της θάλασσας', 'Ένα ηφαίστειο', 'Οι άνθρωποι που έσκαψαν', 'Ένας μεγάλος ποταμός'], en: ['The waves of the sea', 'A volcano', 'People who dug it out', 'A big river'] },
    correct: 1,
    explanation: {
      el: 'Η Σαντορίνη είναι ηφαίστειο! Πριν από χιλιάδες χρόνια μια τεράστια έκρηξη βούλιαξε τη μέση του νησιού και έμεινε το μισοφέγγαρο.',
      en: 'Santorini is a volcano! Thousands of years ago a huge eruption sank the middle of the island and left the crescent shape.',
    },
  },
  {
    q: { el: 'Ποιο είναι το μεγαλύτερο νησί των Δωδεκανήσων;', en: 'Which is the largest island of the Dodecanese?' },
    options: { el: ['Η Κως', 'Η Πάτμος', 'Η Ρόδος', 'Η Κάρπαθος'], en: ['Kos', 'Patmos', 'Rhodes', 'Karpathos'] },
    correct: 2,
    explanation: {
      el: 'Η Ρόδος είναι το μεγαλύτερο νησί των Δωδεκανήσων. Στα αρχαία χρόνια είχε το τεράστιο άγαλμα του Κολοσσού, ένα από τα επτά θαύματα του κόσμου.',
      en: 'Rhodes is the largest island of the Dodecanese. In ancient times it had the giant statue of the Colossus, one of the seven wonders of the world.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ταξιδεύει με το πλοίο από τον Βόλο στη Σκιάθο και τη Σκόπελο. Σε ποια νησιά πάει;', en: 'George is sailing from Volos to Skiathos and Skopelos. Which islands is he going to?' },
    options: { el: ['Στις Κυκλάδες', 'Στα Δωδεκάνησα', 'Στα Επτάνησα', 'Στις Σποράδες'], en: ['The Cyclades', 'The Dodecanese', 'The Ionian Islands', 'The Sporades'] },
    correct: 3,
    explanation: {
      el: 'Η Σκιάθος, η Σκόπελος και η Αλόννησος είναι οι Σποράδες, καταπράσινα νησιά στο βόρειο Αιγαίο, κοντά στον Βόλο.',
      en: 'Skiathos, Skopelos and Alonnisos are the Sporades, very green islands in the northern Aegean, close to Volos.',
    },
  },

  // ── 9–12: Lesvos, the Ionian islands, islands vs mainland ──────────────────
  {
    q: { el: 'Η Λέσβος είναι γνωστή για ένα δάσος που έγινε πέτρα πριν από εκατομμύρια χρόνια. Πώς λέγεται;', en: 'Lesvos is known for a forest that turned to stone millions of years ago. What is it called?' },
    options: { el: ['Το Απολιθωμένο Δάσος', 'Το Μαγεμένο Δάσος', 'Το Βυθισμένο Δάσος', 'Το Χρυσό Δάσος'], en: ['The Petrified Forest', 'The Enchanted Forest', 'The Sunken Forest', 'The Golden Forest'] },
    correct: 0,
    explanation: {
      el: 'Στη Λέσβο, ένα ηφαίστειο σκέπασε ένα ολόκληρο δάσος με στάχτη. Οι κορμοί έγιναν πέτρα: είναι το Απολιθωμένο Δάσος!',
      en: 'On Lesvos, a volcano covered a whole forest in ash. The trunks turned to stone: that is the Petrified Forest!',
    },
  },
  {
    q: { el: 'Τα νησιά του Ιονίου λέγονται και «Επτάνησα». Γιατί;', en: 'The Ionian islands are also called “Eptanisa”. Why?' },
    options: { el: ['Γιατί έχουν επτά λιμάνια', 'Γιατί τα κύρια νησιά είναι επτά', 'Γιατί είναι επτά ώρες μακριά', 'Γιατί έχουν επτά βουνά'], en: ['Because they have seven ports', 'Because the main islands are seven', 'Because they are seven hours away', 'Because they have seven mountains'] },
    correct: 1,
    explanation: {
      el: '«Επτά» + «νησιά» = Επτάνησα. Τα κύρια νησιά είναι επτά: Κέρκυρα, Παξοί, Λευκάδα, Ιθάκη, Κεφαλονιά, Ζάκυνθος και Κύθηρα.',
      en: '“Epta” (seven) + “nisia” (islands) = Eptanisa. The main islands are seven: Corfu, Paxos, Lefkada, Ithaca, Kefalonia, Zakynthos and Kythira.',
    },
  },
  {
    q: { el: 'Γιατί η Κέρκυρα και τα άλλα Επτάνησα είναι πιο πράσινα από τις Κυκλάδες;', en: 'Why are Corfu and the other Ionian islands greener than the Cyclades?' },
    options: { el: ['Γιατί βρέχει περισσότερο εκεί', 'Γιατί έχουν περισσότερους κήπους', 'Γιατί είναι πιο κοντά στον Βορρά', 'Γιατί δεν έχουν θάλασσα γύρω τους'], en: ['Because it rains more there', 'Because they have more gardens', 'Because they are closer to the North', 'Because they have no sea around them'] },
    correct: 0,
    explanation: {
      el: 'Στο Ιόνιο πέφτει πολύ περισσότερη βροχή απ\' ό,τι στο Αιγαίο. Γι\' αυτό η Κέρκυρα είναι γεμάτη ελιές, κυπαρίσσια και πράσινο.',
      en: 'Much more rain falls in the Ionian than in the Aegean. That is why Corfu is full of olive trees, cypresses and greenery.',
    },
  },
  {
    q: { el: 'Στην Ιθάκη ζούσε ένας ξακουστός ήρωας που ταξίδεψε δέκα χρόνια για να γυρίσει σπίτι. Ποιος ήταν;', en: 'A famous hero lived on Ithaca and sailed for ten years to get back home. Who was he?' },
    options: { el: ['Ο Ηρακλής', 'Ο Αχιλλέας', 'Ο Οδυσσέας', 'Ο Θησέας'], en: ['Heracles', 'Achilles', 'Odysseus', 'Theseus'] },
    correct: 2,
    explanation: {
      el: 'Ο Οδυσσέας ήταν βασιλιάς της Ιθάκης, ενός μικρού νησιού του Ιονίου. Στον γυρισμό από την Τροία συνάντησε Κύκλωπες και Σειρήνες!',
      en: 'Odysseus was king of Ithaca, a small island in the Ionian Sea. On his way home from Troy he met Cyclopes and Sirens!',
    },
  },

  // ── 13–18: island life and tourism ────────────────────────────────────────
  {
    q: { el: 'Πώς φτάνουν συνήθως τα φρούτα, τα φάρμακα και τα γράμματα σε ένα μικρό νησί;', en: 'How do fruit, medicine and letters usually reach a small island?' },
    options: { el: ['Με τρένο', 'Με πλοίο', 'Με λεωφορείο', 'Με ποδήλατο'], en: ['By train', 'By ship', 'By bus', 'By bicycle'] },
    correct: 1,
    explanation: {
      el: 'Ένα νησί έχει θάλασσα γύρω-γύρω, άρα δεν περνούν δρόμοι ή ράγες. Σχεδόν όλα έρχονται με το πλοίο — γι\' αυτό το λιμάνι είναι η καρδιά του νησιού.',
      en: 'An island has sea all around it, so no roads or rails reach it. Almost everything arrives by ship — that is why the port is the heart of the island.',
    },
  },
  {
    q: { el: 'Ο θείος του Νίκου ζει σε ένα νησί και ξεκινάει τη δουλειά του πριν ξημερώσει, με το καΐκι του. Τι δουλειά κάνει μάλλον;', en: 'Nikos\' uncle lives on an island and starts work before sunrise in his small boat. What is his job, most likely?' },
    options: { el: ['Ψαράς', 'Οδηγός τρένου', 'Ανθρακωρύχος', 'Δασοφύλακας'], en: ['Fisherman', 'Train driver', 'Coal miner', 'Forest ranger'] },
    correct: 0,
    explanation: {
      el: 'Το ψάρεμα είναι μια παλιά δουλειά των νησιωτών. Οι ψαράδες βγαίνουν νύχτα με το καΐκι τους και γυρίζουν το πρωί με ψάρια για την αγορά.',
      en: 'Fishing is an old island job. Fishermen go out at night in their caique (small boat) and return in the morning with fish for the market.',
    },
  },
  {
    q: { el: 'Γιατί πολλά μικρά νησιά των Κυκλάδων έχουν πρόβλημα με το νερό το καλοκαίρι;', en: 'Why do many small Cycladic islands have a water problem in summer?' },
    options: { el: ['Γιατί το νερό τους είναι πολύ κρύο', 'Γιατί βρέχει λίγο και δεν έχουν μεγάλα ποτάμια', 'Γιατί οι τουρίστες παίρνουν το νερό μαζί τους', 'Γιατί η θάλασσα είναι πολύ μακριά'], en: ['Because their water is too cold', 'Because little rain falls and they have no big rivers', 'Because tourists take the water with them', 'Because the sea is too far away'] },
    correct: 1,
    explanation: {
      el: 'Στις Κυκλάδες βρέχει λίγο και τα νησιά είναι μικρά, χωρίς ποτάμια. Γι\' αυτό μαζεύουν το βρόχινο νερό σε στέρνες και προσέχουν να μην το σπαταλούν.',
      en: 'In the Cyclades it rains little and the islands are small, with no rivers. So people collect rainwater in cisterns and are careful not to waste it.',
    },
  },
  {
    q: { el: 'Τι είναι ο τουρισμός;', en: 'What is tourism?' },
    options: { el: ['Όταν οι κάτοικοι φεύγουν για πάντα από το νησί', 'Όταν άνθρωποι επισκέπτονται έναν τόπο για διακοπές', 'Όταν τα πλοία μεταφέρουν εμπορεύματα', 'Όταν οι αγρότες πουλούν τα προϊόντα τους'], en: ['When the residents leave the island for good', 'When people visit a place for a holiday', 'When ships carry goods', 'When farmers sell their produce'] },
    correct: 1,
    explanation: {
      el: 'Τουρισμός είναι τα ταξίδια που κάνουν οι άνθρωποι για διακοπές. Οι τουρίστες μένουν σε ξενοδοχεία, τρώνε σε ταβέρνες και δίνουν δουλειά σε πολλούς νησιώτες.',
      en: 'Tourism is the travelling people do for holidays. Tourists stay in hotels, eat in tavernas and give work to many islanders.',
    },
  },
  {
    q: { el: 'Η Ελένη μένει σε ένα νησί. Πότε έχει το νησί της τους περισσότερους επισκέπτες;', en: 'Eleni lives on an island. When does her island have the most visitors?' },
    options: { el: ['Τον χειμώνα', 'Το καλοκαίρι', 'Το φθινόπωρο', 'Όλο τον χρόνο το ίδιο'], en: ['In winter', 'In summer', 'In autumn', 'The same all year round'] },
    correct: 1,
    explanation: {
      el: 'Οι περισσότεροι τουρίστες έρχονται το καλοκαίρι για τον ήλιο και τη θάλασσα. Τον χειμώνα πολλά ξενοδοχεία κλείνουν και το νησί ησυχάζει.',
      en: 'Most tourists come in summer for the sun and the sea. In winter many hotels close and the island becomes quiet.',
    },
  },
  {
    q: { el: 'Ένα νησί γεμίζει κάθε καλοκαίρι με τουρίστες. Ποιο από τα παρακάτω είναι ένα ΠΡΟΒΛΗΜΑ που μπορεί να φέρει ο πολύς τουρισμός;', en: 'An island fills with tourists every summer. Which of these is a PROBLEM that too much tourism can bring?' },
    options: { el: ['Περισσότερες δουλειές για τους κατοίκους', 'Περισσότερα χρήματα για τα μαγαζιά', 'Πολλά σκουπίδια και λίγο νερό για όλους', 'Περισσότερα πλοία προς το νησί'], en: ['More jobs for the residents', 'More money for the shops', 'Lots of rubbish and too little water for everyone', 'More ships to the island'] },
    correct: 2,
    explanation: {
      el: 'Ο τουρισμός φέρνει δουλειές και χρήματα, αλλά όταν οι επισκέπτες είναι πάρα πολλοί, το νερό δεν φτάνει και τα σκουπίδια γεμίζουν το νησί. Χρειάζεται μέτρο!',
      en: 'Tourism brings jobs and money, but when there are far too many visitors, the water runs short and rubbish piles up on the island. Balance is needed!',
    },
  },
];
