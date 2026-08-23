/**
 * Δ' Δημοτικού · Ιστορία · Πελοποννησιακός Πόλεμος
 * ==================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language
 * level: a child of 9–10. The unit follows the story in the order a Δ' class meets it:
 *   1–4   who fought whom: Athens and Sparta, their allies, the years 431–404 π.Χ.
 *   5–8   the first years: Pericles, the Long Walls, the plague, the peace of Nicias
 *   9–11  the Sicilian expedition: Alcibiades, Syracuse, the big loss
 *   12–13 the end of the war and the Spartan hegemony
 *   14–18 Thebes rises: Epaminondas, the Sacred Band, Leuctra, the oblique line
 * Distractors are the mix-ups children really make (Persian vs Peloponnesian War,
 * Marathon vs Leuctra, Leonidas vs Epaminondas). The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_HISTORY_PELOPONNESIAN_WAR: QuizQuestion[] = [
  // ── 1–4: who fought whom ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιες δύο πόλεις ήταν οι μεγάλες αντίπαλες στον Πελοποννησιακό Πόλεμο;', en: 'Which two cities were the big rivals in the Peloponnesian War?' },
    options: { el: ['Η Αθήνα και η Σπάρτη', 'Η Αθήνα και η Περσία', 'Η Σπάρτη και η Τροία', 'Η Κόρινθος και η Ρόδος'], en: ['Athens and Sparta', 'Athens and Persia', 'Sparta and Troy', 'Corinth and Rhodes'] },
    correct: 0,
    explanation: {
      el: 'Ο Πελοποννησιακός Πόλεμος ήταν πόλεμος ανάμεσα σε Έλληνες: η Αθήνα από τη μια και η Σπάρτη από την άλλη.',
      en: 'The Peloponnesian War was a war between Greeks: Athens on one side and Sparta on the other.',
    },
  },
  {
    q: { el: 'Γιατί ο πόλεμος λέγεται «Πελοποννησιακός»;', en: 'Why is the war called “Peloponnesian”?' },
    options: { el: ['Επειδή έγινε μόνο στη θάλασσα', 'Επειδή η Σπάρτη και οι σύμμαχοί της ήταν από την Πελοπόννησο', 'Επειδή τον ξεκίνησε ένας βασιλιάς με το όνομα Πέλοπας', 'Επειδή η Αθήνα βρίσκεται στην Πελοπόννησο'], en: ['Because it was fought only at sea', 'Because Sparta and its allies came from the Peloponnese', 'Because a king named Pelops started it', 'Because Athens is in the Peloponnese'] },
    correct: 1,
    explanation: {
      el: 'Η Σπάρτη ήταν αρχηγός της Πελοποννησιακής Συμμαχίας, των πόλεων της Πελοποννήσου. Από αυτήν πήρε το όνομά του ο πόλεμος.',
      en: 'Sparta led the Peloponnesian League, the cities of the Peloponnese. The war got its name from that.',
    },
  },
  {
    q: { el: 'Σε τι ήταν πιο δυνατή η Αθήνα;', en: 'What was Athens strongest at?' },
    options: { el: ['Στο ιππικό', 'Στους οπλίτες της στεριάς', 'Στον στόλο και τα πλοία', 'Στα άρματα'], en: ['Cavalry', 'Land soldiers (hoplites)', 'Its fleet and ships', 'Chariots'] },
    correct: 2,
    explanation: {
      el: 'Η Αθήνα είχε τον πιο δυνατό στόλο της Ελλάδας. Η Σπάρτη, αντίθετα, ήταν πιο δυνατή στη στεριά.',
      en: 'Athens had the strongest fleet in Greece. Sparta, on the other hand, was stronger on land.',
    },
  },
  {
    q: { el: 'Πόσα χρόνια περίπου κράτησε ο Πελοποννησιακός Πόλεμος (431–404 π.Χ.);', en: 'About how many years did the Peloponnesian War last (431–404 BC)?' },
    options: { el: ['Περίπου 3 χρόνια', 'Περίπου 10 χρόνια', 'Περίπου 27 χρόνια', 'Περίπου 100 χρόνια'], en: ['About 3 years', 'About 10 years', 'About 27 years', 'About 100 years'] },
    correct: 2,
    explanation: {
      el: 'Από το 431 ως το 404 π.Χ. είναι 27 χρόνια. Ένα παιδί που γεννήθηκε στην αρχή του, ήταν μεγάλος όταν τελείωσε!',
      en: 'From 431 to 404 BC is 27 years. A child born when it started was grown up when it ended!',
    },
  },

  // ── 5–8: the first years ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο αρχηγός της Αθήνας όταν ξεκίνησε ο πόλεμος;', en: 'Who was the leader of Athens when the war began?' },
    options: { el: ['Ο Λεωνίδας', 'Ο Περικλής', 'Ο Θεμιστοκλής', 'Ο Μέγας Αλέξανδρος'], en: ['Leonidas', 'Pericles', 'Themistocles', 'Alexander the Great'] },
    correct: 1,
    explanation: {
      el: 'Ο Περικλής ήταν ο πιο σημαντικός πολιτικός της Αθήνας. Αυτός έφτιαξε το σχέδιο για τον πόλεμο.',
      en: 'Pericles was the most important politician in Athens. He made the plan for the war.',
    },
  },
  {
    q: { el: 'Τι ήταν τα Μακρά Τείχη της Αθήνας;', en: 'What were the Long Walls of Athens?' },
    options: { el: ['Τείχη που ένωναν την Αθήνα με το λιμάνι του Πειραιά', 'Τείχη γύρω από την Ακρόπολη', 'Τείχη ανάμεσα στην Αθήνα και τη Σπάρτη', 'Τείχη που έχτισαν οι Πέρσες'], en: ['Walls joining Athens to the port of Piraeus', 'Walls around the Acropolis', 'Walls between Athens and Sparta', 'Walls built by the Persians'] },
    correct: 0,
    explanation: {
      el: 'Τα Μακρά Τείχη ένωναν την πόλη με το λιμάνι. Έτσι η Αθήνα έπαιρνε τρόφιμα από τη θάλασσα, ακόμα κι αν ο εχθρός ήταν έξω από τα τείχη.',
      en: 'The Long Walls joined the city to its port. That way Athens could get food by sea, even with the enemy outside the walls.',
    },
  },
  {
    q: { el: 'Τι μεγάλο κακό χτύπησε την Αθήνα στα πρώτα χρόνια του πολέμου;', en: 'What big disaster struck Athens in the first years of the war?' },
    options: { el: ['Ένας σεισμός', 'Μια πλημμύρα', 'Μια αρρώστια, ο λοιμός', 'Μια έκρηξη ηφαιστείου'], en: ['An earthquake', 'A flood', 'A sickness, the plague', 'A volcano erupting'] },
    correct: 2,
    explanation: {
      el: 'Πολλοί άνθρωποι είχαν μαζευτεί μέσα στα τείχη και απλώθηκε μια βαριά αρρώστια, ο λοιμός. Αρρώστησε και ο ίδιος ο Περικλής.',
      en: 'Many people were crowded inside the walls and a serious sickness, the plague, spread. Even Pericles himself fell ill.',
    },
  },
  {
    q: { el: 'Πώς λέγεται η συμφωνία ειρήνης που έκαναν Αθήνα και Σπάρτη στη μέση του πολέμου;', en: 'What is the peace deal Athens and Sparta made in the middle of the war called?' },
    options: { el: ['Η Νικίειος ειρήνη', 'Η Ανταλκίδειος ειρήνη', 'Η Περσική ειρήνη', 'Η ειρήνη του Λεωνίδα'], en: ['The Peace of Nicias', 'The Peace of Antalcidas', 'The Persian Peace', 'The Peace of Leonidas'] },
    correct: 0,
    explanation: {
      el: 'Το 421 π.Χ. ο Αθηναίος Νικίας υπέγραψε ειρήνη με τη Σπάρτη. Δεν κράτησε πολύ, όμως — ο πόλεμος ξανάρχισε.',
      en: 'In 421 BC the Athenian Nicias signed a peace with Sparta. It did not last long, though — the war started again.',
    },
  },

  // ── 9–11: the Sicilian expedition ──────────────────────────────────────────
  {
    q: { el: 'Πού έστειλε η Αθήνα έναν τεράστιο στόλο το 415 π.Χ.;', en: 'Where did Athens send a huge fleet in 415 BC?' },
    options: { el: ['Στην Κρήτη', 'Στη Σικελία', 'Στην Αίγυπτο', 'Στην Κύπρο'], en: ['To Crete', 'To Sicily', 'To Egypt', 'To Cyprus'] },
    correct: 1,
    explanation: {
      el: 'Η Αθήνα έστειλε τα πλοία της πολύ μακριά, στη Σικελία, ένα μεγάλο νησί κοντά στην Ιταλία. Λέμε «Σικελική εκστρατεία».',
      en: 'Athens sent its ships far away, to Sicily, a big island near Italy. We call it the “Sicilian expedition”.',
    },
  },
  {
    q: { el: 'Ποιος Αθηναίος έπεισε τους Αθηναίους να κάνουν τη Σικελική εκστρατεία;', en: 'Which Athenian convinced the Athenians to go on the Sicilian expedition?' },
    options: { el: ['Ο Περικλής', 'Ο Σωκράτης', 'Ο Αλκιβιάδης', 'Ο Επαμεινώνδας'], en: ['Pericles', 'Socrates', 'Alcibiades', 'Epaminondas'] },
    correct: 2,
    explanation: {
      el: 'Ο Αλκιβιάδης ήταν νέος, τολμηρός και μιλούσε πολύ ωραία. Έπεισε τη Συνέλευση, αλλά το σχέδιο ήταν πολύ ριψοκίνδυνο.',
      en: 'Alcibiades was young, bold and a great speaker. He convinced the Assembly, but the plan was very risky.',
    },
  },
  {
    q: { el: 'Πώς τελείωσε η Σικελική εκστρατεία για την Αθήνα;', en: 'How did the Sicilian expedition end for Athens?' },
    options: { el: ['Με μεγάλη νίκη', 'Με μια ισοπαλία', 'Με μεγάλη καταστροφή: χάθηκαν σχεδόν όλα τα πλοία', 'Οι Αθηναίοι δεν έφτασαν ποτέ'], en: ['With a great victory', 'With a draw', 'With a great disaster: almost all the ships were lost', 'The Athenians never got there'] },
    correct: 2,
    explanation: {
      el: 'Έξω από τις Συρακούσες η Αθήνα έχασε σχεδόν όλο τον στόλο της. Ήταν το μεγαλύτερο λάθος της στον πόλεμο.',
      en: 'Outside Syracuse Athens lost almost its whole fleet. It was its biggest mistake in the war.',
    },
  },

  // ── 12–13: the end of the war and the Spartan hegemony ─────────────────────
  {
    q: { el: 'Ποια πόλη κέρδισε τελικά τον Πελοποννησιακό Πόλεμο το 404 π.Χ.;', en: 'Which city finally won the Peloponnesian War in 404 BC?' },
    options: { el: ['Η Αθήνα', 'Η Θήβα', 'Η Κόρινθος', 'Η Σπάρτη'], en: ['Athens', 'Thebes', 'Corinth', 'Sparta'] },
    correct: 3,
    explanation: {
      el: 'Νίκησε η Σπάρτη. Η Αθήνα έχασε τον στόλο της και τα Μακρά Τείχη της γκρεμίστηκαν.',
      en: 'Sparta won. Athens lost its fleet and its Long Walls were torn down.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «σπαρτιατική ηγεμονία»;', en: 'What does “Spartan hegemony” mean?' },
    options: { el: ['Ότι η Σπάρτη ήταν το αφεντικό της Ελλάδας μετά τον πόλεμο', 'Ότι η Σπάρτη έγινε δημοκρατία', 'Ότι η Σπάρτη έχασε τη δύναμή της', 'Ότι όλες οι πόλεις ήταν ίσες'], en: ['That Sparta was the boss of Greece after the war', 'That Sparta became a democracy', 'That Sparta lost its power', 'That all cities were equal'] },
    correct: 0,
    explanation: {
      el: 'Ηγεμονία σημαίνει «να κάνεις κουμάντο». Μετά το 404 π.Χ. η Σπάρτη έβαζε τους κανόνες σε όλη την Ελλάδα, και πολλοί δεν το ήθελαν.',
      en: 'Hegemony means “being in charge”. After 404 BC Sparta set the rules for all Greece, and many did not like it.',
    },
  },

  // ── 14–18: Thebes rises ────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πόλη σηκώθηκε ενάντια στη Σπάρτη μετά από λίγα χρόνια και έγινε η νέα μεγάλη δύναμη;', en: 'Which city stood up to Sparta some years later and became the new great power?' },
    options: { el: ['Η Θήβα', 'Η Αθήνα', 'Η Σικελία', 'Η Τροία'], en: ['Thebes', 'Athens', 'Sicily', 'Troy'] },
    correct: 0,
    explanation: {
      el: 'Η Θήβα, η μεγαλύτερη πόλη της Βοιωτίας, βαρέθηκε τις διαταγές της Σπάρτης και έγινε για λίγα χρόνια η πιο δυνατή πόλη.',
      en: 'Thebes, the biggest city of Boeotia, got tired of Sparta\'s orders and for a few years became the strongest city.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο μεγάλος στρατηγός της Θήβας;', en: 'Who was the great general of Thebes?' },
    options: { el: ['Ο Λεωνίδας', 'Ο Επαμεινώνδας', 'Ο Λύσανδρος', 'Ο Μιλτιάδης'], en: ['Leonidas', 'Epaminondas', 'Lysander', 'Miltiades'] },
    correct: 1,
    explanation: {
      el: 'Ο Επαμεινώνδας ήταν σοφός, απλός και πολύ έξυπνος στρατηγός. Χάρη σε αυτόν η Θήβα νίκησε τη Σπάρτη.',
      en: 'Epaminondas was a wise, simple and very clever general. Thanks to him Thebes beat Sparta.',
    },
  },
  {
    q: { el: 'Σε ποια μάχη η Θήβα νίκησε τη Σπάρτη το 371 π.Χ.;', en: 'In which battle did Thebes defeat Sparta in 371 BC?' },
    options: { el: ['Στον Μαραθώνα', 'Στις Θερμοπύλες', 'Στα Λεύκτρα', 'Στη Σαλαμίνα'], en: ['At Marathon', 'At Thermopylae', 'At Leuctra', 'At Salamis'] },
    correct: 2,
    explanation: {
      el: 'Στα Λεύκτρα της Βοιωτίας οι Θηβαίοι νίκησαν τους Σπαρτιάτες. Ο Μαραθώνας, οι Θερμοπύλες και η Σαλαμίνα ήταν μάχες με τους Πέρσες, πολύ πιο παλιά.',
      en: 'At Leuctra in Boeotia the Thebans beat the Spartans. Marathon, Thermopylae and Salamis were battles against the Persians, much earlier.',
    },
  },
  {
    q: { el: 'Ποιο έξυπνο κόλπο χρησιμοποίησε ο Επαμεινώνδας στα Λεύκτρα;', en: 'What clever trick did Epaminondas use at Leuctra?' },
    options: { el: ['Έκρυψε στρατιώτες μέσα σε ένα ξύλινο άλογο', 'Έβαλε πολύ βαθιά παράταξη στη μία πλευρά, τη «λοξή φάλαγγα»', 'Έκαψε τα πλοία του για να μην γυρίσει πίσω', 'Πολέμησε μόνο τη νύχτα'], en: ['He hid soldiers inside a wooden horse', 'He made one side of his line very deep, the “oblique phalanx”', 'He burned his ships so he could not go back', 'He fought only at night'] },
    correct: 1,
    explanation: {
      el: 'Ο Επαμεινώνδας έβαλε τους καλύτερους στρατιώτες του πολλούς-πολλούς μαζί στη μία άκρη, σαν σφήνα. Αυτή η «λοξή φάλαγγα» έσπασε τη γραμμή των Σπαρτιατών.',
      en: 'Epaminondas packed his best soldiers many rows deep on one end, like a wedge. This “oblique phalanx” broke the Spartan line.',
    },
  },
  {
    q: { el: 'Τι άλλαξε στην Ελλάδα μετά τη μάχη στα Λεύκτρα;', en: 'What changed in Greece after the battle of Leuctra?' },
    options: { el: ['Η Σπάρτη έγινε πιο δυνατή από πριν', 'Η Αθήνα ξαναπήρε όλη την Ελλάδα', 'Η Θήβα έγινε για λίγα χρόνια η πρώτη δύναμη και η Σπάρτη έχασε την ηγεμονία', 'Τίποτα, όλα έμειναν ίδια'], en: ['Sparta became stronger than before', 'Athens took all of Greece back', 'Thebes became the top power for a few years and Sparta lost its hegemony', 'Nothing, everything stayed the same'] },
    correct: 2,
    explanation: {
      el: 'Μετά τα Λεύκτρα ήρθε η θηβαϊκή ηγεμονία. Κράτησε λίγο, ώσπου ο Επαμεινώνδας έπεσε στη μάχη της Μαντίνειας. Οι πόλεις είχαν κουραστεί από τους πολέμους μεταξύ τους.',
      en: 'After Leuctra came the Theban hegemony. It lasted only a short time, until Epaminondas fell at the battle of Mantinea. The cities were worn out from fighting each other.',
    },
  },
];
