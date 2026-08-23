/**
 * Ε' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Ηλεκτρισμός
 * ==============================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–3   electrons and static electricity: the tiny charges that move
 *   4–8   the simple circuit: battery, bulb, wires, the closed loop, the switch
 *   9–13  conductors and insulators: metals vs plastic, rubber, wood, and water
 *   14–18 electrical safety at home, near water, and outdoors
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_SCIENCE_ELECTRICITY: QuizQuestion[] = [
  // ── 1–3: electrons and static electricity ─────────────────────────────────
  {
    q: { el: 'Ο ηλεκτρισμός φτιάχνεται από πολύ μικρά σωματίδια που κινούνται. Πώς λέγονται;', en: 'Electricity is made by tiny particles that move. What are they called?' },
    options: { el: ['Ηλεκτρόνια', 'Σταγόνες', 'Μόρια νερού', 'Σπίθες'], en: ['Electrons', 'Droplets', 'Water molecules', 'Sparks'] },
    correct: 0,
    explanation: {
      el: 'Τα ηλεκτρόνια είναι τόσο μικρά που δεν τα βλέπουμε. Όταν κινούνται μέσα σε ένα σύρμα, έχουμε ηλεκτρικό ρεύμα.',
      en: 'Electrons are so tiny we cannot see them. When they move through a wire, we have an electric current.',
    },
  },
  {
    q: { el: 'Ο Νίκος τρίβει ένα μπαλόνι στα μαλλιά του και μετά το μπαλόνι κολλάει στον τοίχο. Τι συνέβη;', en: 'Nikos rubs a balloon on his hair and then the balloon sticks to the wall. What happened?' },
    options: { el: ['Το μπαλόνι ζεστάθηκε και έλιωσε λίγο', 'Το μπαλόνι φορτίστηκε με στατικό ηλεκτρισμό', 'Ο τοίχος είναι μαγνήτης', 'Τα μαλλιά έχουν κόλλα'], en: ['The balloon got warm and melted a little', 'The balloon got charged with static electricity', 'The wall is a magnet', 'Hair has glue in it'] },
    correct: 1,
    explanation: {
      el: 'Με το τρίψιμο, ηλεκτρόνια περνούν από τα μαλλιά στο μπαλόνι. Το μπαλόνι φορτίζεται και έλκει τον τοίχο — αυτό είναι ο στατικός ηλεκτρισμός.',
      en: 'Rubbing moves electrons from the hair to the balloon. The balloon becomes charged and pulls toward the wall — that is static electricity.',
    },
  },
  {
    q: { el: 'Η Ελένη βγάζει το μάλλινο πουλόβερ της στο σκοτάδι και ακούει μικρά «κρακ» και βλέπει μικροσκοπικές σπίθες. Τι είναι αυτές;', en: 'Eleni takes off her wool sweater in the dark and hears little crackles and sees tiny sparks. What are they?' },
    options: { el: ['Μικροσκοπικοί κεραυνοί από στατικό ηλεκτρισμό', 'Φωτιά από την τριβή', 'Ίνες που σπάνε', 'Σκόνη που λάμπει'], en: ['Tiny lightning bolts from static electricity', 'Fire from the rubbing', 'Threads breaking', 'Dust that glows'] },
    correct: 0,
    explanation: {
      el: 'Το πουλόβερ και το σώμα φορτίζονται με το τρίψιμο. Τα φορτία πηδούν ξαφνικά από το ένα στο άλλο — μια πολύ μικρή σπίθα, όπως ένας μικροσκοπικός κεραυνός.',
      en: 'The sweater and the body get charged by rubbing. The charges suddenly jump across — a tiny spark, like a miniature lightning bolt.',
    },
  },

  // ── 4–8: the simple circuit ───────────────────────────────────────────────
  {
    q: { el: 'Σε ένα απλό κύκλωμα, ποιο εξάρτημα δίνει την ενέργεια για να κινηθούν τα ηλεκτρόνια;', en: 'In a simple circuit, which part gives the energy that makes the electrons move?' },
    options: { el: ['Το λαμπάκι', 'Το σύρμα', 'Η μπαταρία', 'Ο διακόπτης'], en: ['The bulb', 'The wire', 'The battery', 'The switch'] },
    correct: 2,
    explanation: {
      el: 'Η μπαταρία είναι η «αντλία» του κυκλώματος: σπρώχνει τα ηλεκτρόνια μέσα από τα σύρματα. Χωρίς αυτή, τίποτα δεν κινείται.',
      en: 'The battery is the “pump” of the circuit: it pushes the electrons through the wires. Without it, nothing moves.',
    },
  },
  {
    q: { el: 'Ο Γιώργος συνδέει ένα σύρμα μόνο στον έναν πόλο της μπαταρίας και το άλλο άκρο του στο λαμπάκι. Το λαμπάκι δεν ανάβει. Γιατί;', en: 'Giorgos connects a wire to only one end of the battery and the other end of the wire to the bulb. The bulb does not light. Why?' },
    options: { el: ['Η μπαταρία είναι πολύ μικρή', 'Το κύκλωμα δεν είναι κλειστό', 'Το λαμπάκι θέλει δύο μπαταρίες', 'Το σύρμα είναι πολύ μακρύ'], en: ['The battery is too small', 'The circuit is not closed', 'The bulb needs two batteries', 'The wire is too long'] },
    correct: 1,
    explanation: {
      el: 'Το ρεύμα χρειάζεται έναν ολόκληρο κύκλο: από τον έναν πόλο της μπαταρίας, μέσα από το λαμπάκι, πίσω στον άλλο πόλο. Αν ο κύκλος έχει κενό, δεν περνάει ρεύμα.',
      en: 'Current needs a complete loop: from one end of the battery, through the bulb, and back to the other end. If the loop has a gap, no current flows.',
    },
  },
  {
    q: { el: 'Τι κάνει ο διακόπτης όταν τον πατάμε για να σβήσει το φως;', en: 'What does a switch do when we press it to turn the light off?' },
    options: { el: ['Αδειάζει την μπαταρία', 'Ανοίγει ένα κενό στο κύκλωμα', 'Κάνει το σύρμα πιο κρύο', 'Γυρίζει τα ηλεκτρόνια ανάποδα'], en: ['It empties the battery', 'It opens a gap in the circuit', 'It makes the wire colder', 'It turns the electrons around'] },
    correct: 1,
    explanation: {
      el: 'Ο διακόπτης είναι μια μικρή «γέφυρα». Όταν ανοίγει, το κύκλωμα κόβεται και το ρεύμα σταματά. Όταν κλείνει, η γέφυρα ενώνεται και το φως ανάβει.',
      en: 'A switch is a little “bridge”. When it opens, the circuit is broken and the current stops. When it closes, the bridge joins and the light turns on.',
    },
  },
  {
    q: { el: 'Η Μαρία φτιάχνει ένα κύκλωμα με μπαταρία, δύο σύρματα και λαμπάκι. Το λαμπάκι ανάβει. Τι λέμε για αυτό το κύκλωμα;', en: 'Maria builds a circuit with a battery, two wires, and a bulb. The bulb lights up. What do we call this circuit?' },
    options: { el: ['Ανοιχτό κύκλωμα', 'Κλειστό κύκλωμα', 'Σπασμένο κύκλωμα', 'Κύκλωμα χωρίς ρεύμα'], en: ['An open circuit', 'A closed circuit', 'A broken circuit', 'A circuit with no current'] },
    correct: 1,
    explanation: {
      el: 'Όταν ο κύκλος είναι ολόκληρος και το ρεύμα περνάει, το κύκλωμα λέγεται κλειστό. Αν υπάρχει κενό, λέγεται ανοιχτό και το λαμπάκι μένει σβηστό.',
      en: 'When the loop is complete and current flows, we call the circuit closed. If there is a gap, it is open and the bulb stays off.',
    },
  },
  {
    q: { el: 'Σε ένα κύκλωμα, το λαμπάκι ξαφνικά έσβησε ενώ ο διακόπτης είναι κλειστός. Ποια είναι η πιο πιθανή αιτία;', en: 'In a circuit, the bulb suddenly went off while the switch is closed. What is the most likely reason?' },
    options: { el: ['Τα ηλεκτρόνια τελείωσαν μέσα στο σύρμα', 'Το λαμπάκι κάηκε και το κύκλωμα άνοιξε', 'Το σύρμα έγινε μονωτής', 'Ο διακόπτης χρειάζεται μπαταρία'], en: ['The electrons in the wire ran out', 'The bulb burned out and opened the circuit', 'The wire turned into an insulator', 'The switch needs a battery'] },
    correct: 1,
    explanation: {
      el: 'Μέσα στο λαμπάκι υπάρχει ένα λεπτό νήμα. Αν σπάσει, το κύκλωμα αποκτά κενό — σαν να άνοιξε ένας διακόπτης — και το ρεύμα σταματά.',
      en: 'Inside the bulb there is a thin filament. If it breaks, the circuit gets a gap — just like an open switch — and the current stops.',
    },
  },

  // ── 9–13: conductors and insulators ──────────────────────────────────────
  {
    q: { el: 'Πώς λέγονται τα υλικά που αφήνουν το ρεύμα να περνάει εύκολα;', en: 'What do we call materials that let current pass through easily?' },
    options: { el: ['Μονωτές', 'Αγωγοί', 'Μαγνήτες', 'Φορτιστές'], en: ['Insulators', 'Conductors', 'Magnets', 'Chargers'] },
    correct: 1,
    explanation: {
      el: 'Οι αγωγοί είναι σαν ανοιχτοί δρόμοι για τα ηλεκτρόνια. Τα μέταλλα, όπως ο χαλκός και το σίδερο, είναι πολύ καλοί αγωγοί.',
      en: 'Conductors are like open roads for electrons. Metals such as copper and iron are very good conductors.',
    },
  },
  {
    q: { el: 'Ο Νίκος βάζει διάφορα αντικείμενα ανάμεσα σε δύο σύρματα για να δει αν ανάβει το λαμπάκι. Με ποιο ΔΕΝ θα ανάψει;', en: 'Nikos puts different objects between two wires to see if the bulb lights. With which one will it NOT light?' },
    options: { el: ['Ένα σιδερένιο κλειδί', 'Ένα χάλκινο νόμισμα', 'Ένα πλαστικό καπάκι', 'Ένας συνδετήρας'], en: ['An iron key', 'A copper coin', 'A plastic lid', 'A paper clip'] },
    correct: 2,
    explanation: {
      el: 'Το πλαστικό είναι μονωτής: δεν αφήνει το ρεύμα να περάσει. Το κλειδί, το νόμισμα και ο συνδετήρας είναι μεταλλικά, άρα αγωγοί.',
      en: 'Plastic is an insulator: it does not let current through. The key, the coin, and the paper clip are metal, so they are conductors.',
    },
  },
  {
    q: { el: 'Γιατί τα καλώδια στο σπίτι έχουν απέξω ένα πλαστικό κάλυμμα;', en: 'Why do the cables at home have a plastic cover on the outside?' },
    options: { el: ['Για να είναι πιο όμορφα', 'Για να κρατούν το ρεύμα μέσα και να μας προστατεύουν', 'Για να περνάει το ρεύμα πιο γρήγορα', 'Για να μην σκουριάζει το πλαστικό'], en: ['To look nicer', 'To keep the current inside and protect us', 'To make the current flow faster', 'So the plastic does not rust'] },
    correct: 1,
    explanation: {
      el: 'Μέσα στο καλώδιο υπάρχει μεταλλικό σύρμα (αγωγός). Το πλαστικό απέξω είναι μονωτής: κρατά το ρεύμα μέσα και δεν μας αφήνει να το αγγίξουμε.',
      en: 'Inside the cable there is a metal wire (a conductor). The plastic on the outside is an insulator: it keeps the current in and stops us from touching it.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι μονωτής;', en: 'Which of these is an insulator?' },
    options: { el: ['Αλουμινόχαρτο', 'Λαστιχένιο γάντι', 'Σύρμα από χαλκό', 'Σιδερένιο καρφί'], en: ['Aluminium foil', 'A rubber glove', 'Copper wire', 'An iron nail'] },
    correct: 1,
    explanation: {
      el: 'Το λάστιχο δεν αφήνει το ρεύμα να περάσει, γι\' αυτό οι ηλεκτρολόγοι φορούν λαστιχένια γάντια. Τα μέταλλα είναι αγωγοί.',
      en: 'Rubber does not let current pass, which is why electricians wear rubber gloves. Metals are conductors.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «Το ξύλο είναι μονωτής, το νερό της βρύσης είναι αγωγός». Έχει δίκιο;', en: 'Eleni says: “Wood is an insulator, tap water is a conductor.” Is she right?' },
    options: { el: ['Ναι, και για τα δύο', 'Όχι, το ξύλο είναι αγωγός', 'Όχι, το νερό είναι μονωτής', 'Όχι, και τα δύο είναι μονωτές'], en: ['Yes, on both counts', 'No, wood is a conductor', 'No, water is an insulator', 'No, both are insulators'] },
    correct: 0,
    explanation: {
      el: 'Το στεγνό ξύλο είναι μονωτής. Το νερό της βρύσης όμως έχει μέσα του άλατα και περνάει ρεύμα — γι\' αυτό νερό και ηλεκτρισμός δεν πάνε ποτέ μαζί.',
      en: 'Dry wood is an insulator. Tap water, though, has salts in it and conducts electricity — that is why water and electricity never mix.',
    },
  },

  // ── 14–18: electrical safety ──────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος βγήκε από το μπάνιο με βρεγμένα χέρια και θέλει να ανάψει το σεσουάρ. Τι πρέπει να κάνει πρώτα;', en: 'Giorgos came out of the shower with wet hands and wants to turn on the hair dryer. What should he do first?' },
    options: { el: ['Να σκουπίσει καλά τα χέρια του', 'Να βάλει περισσότερο νερό', 'Να πιάσει το καλώδιο με τα δόντια', 'Τίποτα, δεν πειράζει'], en: ['Dry his hands well', 'Add more water', 'Hold the cable with his teeth', 'Nothing, it is fine'] },
    correct: 0,
    explanation: {
      el: 'Το νερό είναι αγωγός. Με βρεγμένα χέρια το ρεύμα μπορεί να περάσει στο σώμα μας. Πάντα στεγνά χέρια κοντά στις συσκευές!',
      en: 'Water is a conductor. With wet hands the current can pass into our body. Always dry hands near appliances!',
    },
  },
  {
    q: { el: 'Η φέτα του ψωμιού κόλλησε μέσα στην τοστιέρα. Τι είναι το σωστό;', en: 'A slice of bread got stuck inside the toaster. What is the right thing to do?' },
    options: { el: ['Να τη βγάλεις με ένα μεταλλικό πιρούνι', 'Να βγάλεις πρώτα την τοστιέρα από την πρίζα και να φωνάξεις έναν μεγάλο', 'Να ρίξεις λίγο νερό μέσα', 'Να βάλεις το χέρι σου γρήγορα'], en: ['Pull it out with a metal fork', 'Unplug the toaster first and call an adult', 'Pour a little water inside', 'Reach in quickly with your hand'] },
    correct: 1,
    explanation: {
      el: 'Το πιρούνι είναι μέταλλο, δηλαδή αγωγός — το ρεύμα μπορεί να περάσει σε εσένα. Πρώτα βγάζουμε τη συσκευή από την πρίζα και ζητάμε βοήθεια.',
      en: 'A fork is metal, so it is a conductor — the current could pass into you. First unplug the appliance, then ask for help.',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει ένα καλώδιο με σκισμένο πλαστικό και γυμνό σύρμα. Τι πρέπει να κάνει;', en: 'Maria sees a cable with torn plastic and bare wire showing. What should she do?' },
    options: { el: ['Να το τυλίξει με χαρτί', 'Να το δοκιμάσει με το δάχτυλο για να δει αν έχει ρεύμα', 'Να μην το αγγίξει και να το πει σε έναν μεγάλο', 'Να το κόψει με ψαλίδι'], en: ['Wrap it in paper', 'Test it with her finger to see if it has current', 'Not touch it and tell an adult', 'Cut it with scissors'] },
    correct: 2,
    explanation: {
      el: 'Χωρίς το πλαστικό κάλυμμα, το γυμνό σύρμα είναι επικίνδυνο. Δεν το πιάνουμε ποτέ — το λέμε αμέσως σε έναν μεγάλο για να το αλλάξει.',
      en: 'Without its plastic cover, a bare wire is dangerous. We never touch it — we tell an adult right away so it can be replaced.',
    },
  },
  {
    q: { el: 'Ο Νίκος παίζει με τον χαρταετό του. Ποιο μέρος πρέπει να αποφύγει;', en: 'Nikos is flying his kite. Which place should he avoid?' },
    options: { el: ['Μια ανοιχτή παραλία', 'Κοντά σε καλώδια ρεύματος', 'Ένα μεγάλο λιβάδι', 'Ένα γήπεδο'], en: ['An open beach', 'Near power lines', 'A big meadow', 'A sports field'] },
    correct: 1,
    explanation: {
      el: 'Τα καλώδια της ΔΕΗ έχουν πολύ ισχυρό ρεύμα. Αν ο χαρταετός μπλεχτεί πάνω τους, το ρεύμα μπορεί να κατέβει από το νήμα. Πετάμε χαρταετό σε ανοιχτά μέρη.',
      en: 'Power lines carry a very strong current. If the kite tangles in them, current can travel down the string. Fly kites in wide open places.',
    },
  },
  {
    q: { el: 'Γιατί είναι επικίνδυνο να βάζουμε πολλές συσκευές μαζί σε ένα πολύπριζο;', en: 'Why is it dangerous to plug many appliances into one power strip?' },
    options: { el: ['Επειδή οι συσκευές μπερδεύονται μεταξύ τους', 'Επειδή τα ηλεκτρόνια τελειώνουν', 'Επειδή περνάει πολύ ρεύμα, τα καλώδια ζεσταίνονται και μπορεί να πάρουν φωτιά', 'Επειδή το πολύπριζο αδειάζει σαν μπαταρία'], en: ['Because the appliances get mixed up', 'Because the electrons run out', 'Because too much current flows, the cables heat up and could start a fire', 'Because the power strip drains like a battery'] },
    correct: 2,
    explanation: {
      el: 'Όσο περισσότερο ρεύμα περνάει από ένα καλώδιο, τόσο πιο πολύ ζεσταίνεται. Πολλές συσκευές μαζί = πολύ ρεύμα = κίνδυνος. Λίγες συσκευές σε κάθε πρίζα!',
      en: 'The more current flows through a cable, the hotter it gets. Many appliances together = lots of current = danger. Keep it to a few appliances per socket!',
    },
  },
];
