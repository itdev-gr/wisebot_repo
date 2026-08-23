/**
 * ΣΤ' Δημοτικού · Ιστορία · Η Ελλάδα τον 19ο Αιώνα
 * ==================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–4   the first king, Otto, arriving from Bavaria; Athens becomes the capital (1834)
 *   5–7   the 1843 uprising and the first constitution; Otto leaves
 *   8–10  King George I; the Ionian Islands join Greece (1864)
 *   11–14 Charilaos Trikoupis: railways, Corinth Canal, the «principle of declared confidence»
 *   15–18 Thessaly joins (1881); Crete's long road to union
 *
 * Distractors are the confusions children actually have: mixing up the two kings,
 * the wrong capital, the wrong region for each year, and Trikoupis vs. Deligiannis.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_HISTORY_GREECE_19TH_CENTURY: QuizQuestion[] = [
  // ── 1–4: Otto and the new capital ───────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο πρώτος βασιλιάς του ελληνικού κράτους;', en: 'Who was the first king of the Greek state?' },
    options: { el: ['Ο Όθωνας', 'Ο Γεώργιος Α\'', 'Ο Καποδίστριας', 'Ο Κωνσταντίνος'], en: ['Otto', 'George I', 'Kapodistrias', 'Constantine'] },
    correct: 0,
    explanation: {
      el: 'Ο πρώτος βασιλιάς της Ελλάδας ήταν ο Όθωνας. Ο Καποδίστριας ήταν κυβερνήτης, όχι βασιλιάς.',
      en: 'The first king of Greece was Otto. Kapodistrias was a governor, not a king.',
    },
  },
  {
    q: { el: 'Από ποια χώρα ήρθε ο Όθωνας στην Ελλάδα;', en: 'Which country did Otto come from?' },
    options: { el: ['Από τη Γαλλία', 'Από τη Βαυαρία', 'Από την Αγγλία', 'Από τη Ρωσία'], en: ['France', 'Bavaria', 'England', 'Russia'] },
    correct: 1,
    explanation: {
      el: 'Ο Όθωνας ήταν πρίγκιπας της Βαυαρίας, μιας περιοχής της σημερινής Γερμανίας. Ήρθε στην Ελλάδα πολύ νέος, μόλις 17 ετών.',
      en: 'Otto was a prince of Bavaria, a region of today\'s Germany. He came to Greece very young, only 17 years old.',
    },
  },
  {
    q: { el: 'Ποια πόλη ήταν η πρώτη πρωτεύουσα του ελληνικού κράτους, πριν από την Αθήνα;', en: 'Which city was the first capital of the Greek state, before Athens?' },
    options: { el: ['Η Θεσσαλονίκη', 'Η Πάτρα', 'Το Ναύπλιο', 'Η Κόρινθος'], en: ['Thessaloniki', 'Patras', 'Nafplio', 'Corinth'] },
    correct: 2,
    explanation: {
      el: 'Η πρώτη πρωτεύουσα ήταν το Ναύπλιο. Η Θεσσαλονίκη δεν ανήκε ακόμη στην Ελλάδα.',
      en: 'The first capital was Nafplio. Thessaloniki was not yet part of Greece.',
    },
  },
  {
    q: { el: 'Πότε έγινε η Αθήνα πρωτεύουσα της Ελλάδας;', en: 'When did Athens become the capital of Greece?' },
    options: { el: ['Το 1821', 'Το 1834', 'Το 1864', 'Το 1881'], en: ['In 1821', 'In 1834', 'In 1864', 'In 1881'] },
    correct: 1,
    explanation: {
      el: 'Το 1834 η πρωτεύουσα μεταφέρθηκε από το Ναύπλιο στην Αθήνα. Τότε η Αθήνα ήταν μια μικρή πόλη γύρω από την Ακρόπολη.',
      en: 'In 1834 the capital moved from Nafplio to Athens. Back then Athens was a small town around the Acropolis.',
    },
  },

  // ── 5–7: 1843 and the first constitution ────────────────────────────────────
  {
    q: { el: 'Τι ζήτησαν οι Έλληνες από τον Όθωνα στην εξέγερση της 3ης Σεπτεμβρίου 1843;', en: 'What did the Greeks demand from Otto in the uprising of 3 September 1843?' },
    options: { el: ['Να φύγει από την Ελλάδα', 'Να δώσει Σύνταγμα', 'Να αλλάξει πρωτεύουσα', 'Να φτιάξει σιδηρόδρομο'], en: ['To leave Greece', 'To grant a constitution', 'To change the capital', 'To build a railway'] },
    correct: 1,
    explanation: {
      el: 'Ο λαός και ο στρατός συγκεντρώθηκαν έξω από το παλάτι και ζήτησαν Σύνταγμα, δηλαδή νόμους που να ισχύουν και για τον βασιλιά.',
      en: 'The people and the army gathered outside the palace and demanded a constitution, meaning laws that apply to the king too.',
    },
  },
  {
    q: { el: 'Τι είναι το Σύνταγμα;', en: 'What is a constitution?' },
    options: { el: ['Ο βασικός νόμος που ορίζει πώς κυβερνάται μια χώρα', 'Ένας χάρτης της χώρας', 'Η λίστα με τους στρατιώτες', 'Το βιβλίο με τα σύνορα'], en: ['The basic law that says how a country is governed', 'A map of the country', 'The list of soldiers', 'The book of borders'] },
    correct: 0,
    explanation: {
      el: 'Το Σύνταγμα είναι ο ανώτερος νόμος μιας χώρας. Λέει ποια δικαιώματα έχουν οι πολίτες και πόση εξουσία έχει ο καθένας, ακόμη και ο βασιλιάς.',
      en: 'A constitution is a country\'s highest law. It says what rights citizens have and how much power each person holds, even the king.',
    },
  },
  {
    q: { el: 'Πώς ονομάζεται σήμερα η πλατεία μπροστά από το παλιό παλάτι, όπου έγινε η εξέγερση του 1843;', en: 'What is the square in front of the old palace, where the 1843 uprising happened, called today?' },
    options: { el: ['Πλατεία Ομονοίας', 'Πλατεία Κοτζιά', 'Πλατεία Συντάγματος', 'Πλατεία Μοναστηρακίου'], en: ['Omonia Square', 'Kotzia Square', 'Syntagma Square', 'Monastiraki Square'] },
    correct: 2,
    explanation: {
      el: 'Η πλατεία πήρε το όνομα «Σύνταγμα» από εκείνη τη μέρα. Το παλιό παλάτι είναι σήμερα η Βουλή των Ελλήνων.',
      en: 'The square was named “Syntagma” (Constitution) after that day. The old palace is today the Greek Parliament.',
    },
  },

  // ── 8–10: George I and the Ionian Islands ───────────────────────────────────
  {
    q: { el: 'Ποιος έγινε βασιλιάς μετά τον Όθωνα;', en: 'Who became king after Otto?' },
    options: { el: ['Ο Γεώργιος Α\'', 'Ο Λουδοβίκος', 'Ο Κωνσταντίνος', 'Ο Όθωνας Β\''], en: ['George I', 'Ludwig', 'Constantine', 'Otto II'] },
    correct: 0,
    explanation: {
      el: 'Ο Όθωνας έφυγε το 1862 και νέος βασιλιάς έγινε ο Γεώργιος Α\', ένας νεαρός πρίγκιπας από τη Δανία.',
      en: 'Otto left in 1862 and the new king was George I, a young prince from Denmark.',
    },
  },
  {
    q: { el: 'Ποια νησιά ενώθηκαν με την Ελλάδα το 1864;', en: 'Which islands joined Greece in 1864?' },
    options: { el: ['Οι Κυκλάδες', 'Τα Επτάνησα', 'Η Κρήτη', 'Τα Δωδεκάνησα'], en: ['The Cyclades', 'The Ionian Islands', 'Crete', 'The Dodecanese'] },
    correct: 1,
    explanation: {
      el: 'Τα Επτάνησα (Κέρκυρα, Ζάκυνθος, Κεφαλονιά και τα άλλα) ενώθηκαν με την Ελλάδα το 1864, λίγο μετά την άφιξη του Γεωργίου Α\'.',
      en: 'The Ionian Islands (Corfu, Zakynthos, Kefalonia and the others) joined Greece in 1864, soon after George I arrived.',
    },
  },
  {
    q: { el: 'Ποιοι κυβερνούσαν τα Επτάνησα πριν ενωθούν με την Ελλάδα;', en: 'Who ruled the Ionian Islands before they joined Greece?' },
    options: { el: ['Οι Οθωμανοί', 'Οι Γάλλοι', 'Οι Άγγλοι', 'Οι Ιταλοί'], en: ['The Ottomans', 'The French', 'The British', 'The Italians'] },
    correct: 2,
    explanation: {
      el: 'Τα Επτάνησα ήταν υπό αγγλική προστασία. Οι Άγγλοι τα παραχώρησαν στην Ελλάδα το 1864.',
      en: 'The Ionian Islands were under British protection. The British handed them to Greece in 1864.',
    },
  },

  // ── 11–14: Trikoupis ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος πολιτικός του 19ου αιώνα είναι γνωστός για τους σιδηροδρόμους και τα μεγάλα έργα;', en: 'Which 19th-century politician is known for railways and big public works?' },
    options: { el: ['Ο Χαρίλαος Τρικούπης', 'Ο Θεόδωρος Κολοκοτρώνης', 'Ο Ιωάννης Καποδίστριας', 'Ο Ελευθέριος Βενιζέλος'], en: ['Charilaos Trikoupis', 'Theodoros Kolokotronis', 'Ioannis Kapodistrias', 'Eleftherios Venizelos'] },
    correct: 0,
    explanation: {
      el: 'Ο Χαρίλαος Τρικούπης ήταν πρωθυπουργός πολλές φορές και ήθελε να εκσυγχρονίσει την Ελλάδα με σιδηροδρόμους, δρόμους και λιμάνια.',
      en: 'Charilaos Trikoupis was prime minister many times and wanted to modernise Greece with railways, roads and harbours.',
    },
  },
  {
    q: { el: 'Ποιο μεγάλο έργο ολοκληρώθηκε την εποχή του Τρικούπη και ένωσε δύο θάλασσες;', en: 'Which great project was completed in Trikoupis\' time and joined two seas?' },
    options: { el: ['Η γέφυρα Ρίου–Αντιρρίου', 'Η διώρυγα της Κορίνθου', 'Το λιμάνι της Θεσσαλονίκης', 'Το φράγμα του Μαραθώνα'], en: ['The Rio–Antirrio bridge', 'The Corinth Canal', 'The port of Thessaloniki', 'The Marathon dam'] },
    correct: 1,
    explanation: {
      el: 'Η διώρυγα της Κορίνθου άνοιξε το 1893 και ένωσε τον Σαρωνικό με τον Κορινθιακό κόλπο. Τα πλοία δεν χρειάζεται πια να κάνουν τον γύρο της Πελοποννήσου.',
      en: 'The Corinth Canal opened in 1893 and joined the Saronic Gulf with the Gulf of Corinth. Ships no longer need to sail around the Peloponnese.',
    },
  },
  {
    q: { el: 'Ο Τρικούπης ζήτησε ο βασιλιάς να δίνει την κυβέρνηση στο κόμμα που έχει την εμπιστοσύνη της Βουλής. Πώς λέγεται αυτή η αρχή;', en: 'Trikoupis asked that the king give the government to the party that has the confidence of Parliament. What is this principle called?' },
    options: { el: ['Αρχή της ισότητας', 'Αρχή της ελευθερίας', 'Αρχή της ανεξαρτησίας', 'Αρχή της δεδηλωμένης'], en: ['Principle of equality', 'Principle of freedom', 'Principle of independence', 'Principle of declared confidence'] },
    correct: 3,
    explanation: {
      el: 'Λέγεται «αρχή της δεδηλωμένης». Ο βασιλιάς έπρεπε να διαλέγει πρωθυπουργό αυτόν που είχε τη δηλωμένη υποστήριξη της πλειοψηφίας της Βουλής.',
      en: 'It is called the “principle of declared confidence”. The king had to choose as prime minister whoever had the declared support of the majority in Parliament.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο μεγάλος πολιτικός αντίπαλος του Τρικούπη;', en: 'Who was Trikoupis\' great political rival?' },
    options: { el: ['Ο Θεόδωρος Δηληγιάννης', 'Ο Γεώργιος Α\'', 'Ο Όθωνας', 'Ο Ιωάννης Κωλέττης'], en: ['Theodoros Deligiannis', 'George I', 'Otto', 'Ioannis Kolettis'] },
    correct: 0,
    explanation: {
      el: 'Ο Τρικούπης και ο Δηληγιάννης εναλλάσσονταν στην εξουσία για χρόνια. Ο Τρικούπης ήθελε έργα και οικονομία, ο Δηληγιάννης υποσχόταν λιγότερους φόρους.',
      en: 'Trikoupis and Deligiannis took turns in power for years. Trikoupis wanted public works and a strong economy; Deligiannis promised lower taxes.',
    },
  },

  // ── 15–18: Thessaly and Crete ───────────────────────────────────────────────
  {
    q: { el: 'Ποια περιοχή ενώθηκε με την Ελλάδα το 1881;', en: 'Which region joined Greece in 1881?' },
    options: { el: ['Η Μακεδονία', 'Η Ήπειρος', 'Η Θεσσαλία', 'Η Θράκη'], en: ['Macedonia', 'Epirus', 'Thessaly', 'Thrace'] },
    correct: 2,
    explanation: {
      el: 'Το 1881 η Θεσσαλία και ένα μικρό κομμάτι της Ηπείρου (η Άρτα) ενώθηκαν με την Ελλάδα, χωρίς πόλεμο, με συμφωνία.',
      en: 'In 1881 Thessaly and a small part of Epirus (Arta) joined Greece, without war, through an agreement.',
    },
  },
  {
    q: { el: 'Η Θεσσαλία ήταν πολύ σημαντική για την Ελλάδα γιατί…', en: 'Thessaly was very important for Greece because…' },
    options: { el: ['είχε μεγάλα λιμάνια', 'είχε μεγάλους κάμπους με σιτάρι', 'είχε χρυσωρυχεία', 'είχε πολλά νησιά'], en: ['it had big harbours', 'it had big plains with wheat', 'it had gold mines', 'it had many islands'] },
    correct: 1,
    explanation: {
      el: 'Η Θεσσαλία έχει τον μεγαλύτερο κάμπο της Ελλάδας. Το σιτάρι της βοήθησε να τραφεί η χώρα.',
      en: 'Thessaly has the largest plain in Greece. Its wheat helped feed the country.',
    },
  },
  {
    q: { el: 'Ποια ήταν η κατάσταση της Κρήτης στο μεγαλύτερο μέρος του 19ου αιώνα;', en: 'What was Crete\'s situation for most of the 19th century?' },
    options: { el: ['Ήταν ανεξάρτητο κράτος', 'Ανήκε ήδη στην Ελλάδα', 'Βρισκόταν υπό οθωμανική κυριαρχία', 'Ανήκε στην Ιταλία'], en: ['It was an independent state', 'It already belonged to Greece', 'It was under Ottoman rule', 'It belonged to Italy'] },
    correct: 2,
    explanation: {
      el: 'Η Κρήτη έμεινε υπό οθωμανική κυριαρχία σχεδόν όλο τον 19ο αιώνα. Οι Κρητικοί επαναστάτησαν πολλές φορές ζητώντας ένωση με την Ελλάδα.',
      en: 'Crete stayed under Ottoman rule for almost the whole 19th century. The Cretans rose up many times asking for union with Greece.',
    },
  },
  {
    q: { el: 'Βάλε στη σωστή σειρά: Επτάνησα, Θεσσαλία, Κρήτη. Ποια ενώθηκε με την Ελλάδα τελευταία;', en: 'Put them in order: Ionian Islands, Thessaly, Crete. Which joined Greece last?' },
    options: { el: ['Τα Επτάνησα', 'Η Θεσσαλία', 'Η Κρήτη', 'Όλες την ίδια χρονιά'], en: ['The Ionian Islands', 'Thessaly', 'Crete', 'All in the same year'] },
    correct: 2,
    explanation: {
      el: 'Σειρά: Επτάνησα (1864), Θεσσαλία (1881), Κρήτη (1913, μετά τους Βαλκανικούς πολέμους). Η Κρήτη πέρασε πρώτα από μια περίοδο αυτονομίας, από το 1898.',
      en: 'Order: Ionian Islands (1864), Thessaly (1881), Crete (1913, after the Balkan Wars). Crete first went through a period of autonomy, from 1898.',
    },
  },
];
