/**
 * WiseBot Explorer · Λευκωσία
 * ===========================
 * Ten spots in one walking loop inside and around the Venetian walls (south part of the old town):
 * Eleftheria Square → Podocataro bastion & Liberty Monument → Famagusta Gate → Archbishop's Palace →
 * Pancyprian Gymnasium → Laiki Geitonia → Ledra Street → Faneromeni → Omeriye → Municipal Gardens.
 * Original text only, both languages, child level 7–12. Coordinates are where a family stands.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'nicosia',
  name: { el: 'Λευκωσία', en: 'Nicosia' },
  country: { el: 'Κύπρος', en: 'Cyprus' },
  countryCode: 'CY',
  emoji: '🌞',
  center: { lat: 35.1725, lng: 33.364 },
  zoom: 15,
  intro: {
    el: 'Γεια σου, εξερευνητή! Είμαι η WiseBot και σήμερα πετάμε στη Λευκωσία, την πρωτεύουσα της Κύπρου, την πόλη του ήλιου και του χαλλουμιού. Οι Ενετοί την έκλεισαν σε έναν τέλειο κύκλο από τείχη με έντεκα προμαχώνες σαν καρδιές, και μέσα στον κύκλο ζουν ακόμα σοκάκια με σπίτια από χρυσαφένια πέτρα και ξύλινα μπαλκόνια. Βυζαντινοί, Λουζινιανοί, Ενετοί, Οθωμανοί και Βρετανοί, όλοι άφησαν κάτι εδώ. Από τη δεκαετία του 1960, και οριστικά από το 1974, μια γραμμή χωρίζει την παλιά πόλη στα δύο, γι\' αυτό λένε πως είναι η τελευταία χωρισμένη πρωτεύουσα της Ευρώπης. Οι άνθρωποι ελπίζουν πως μια μέρα η γραμμή θα ανοίξει για πάντα. Εμείς θα παίξουμε στο νότιο κομμάτι, όπου έκρυψα δέκα φακέλους: λύσε τους γρίφους, περπάτα με τους γονείς σου και στο τέλος σου χρωστάω λουκουμάδες. Πάμε;',
    en: 'Hello, explorer! I am WiseBot, and today we are flying to Nicosia, the capital of Cyprus, the city of sunshine and halloumi. The Venetians wrapped it in a perfect circle of walls with eleven bastions shaped like hearts, and inside that circle there are still little lanes with houses of golden stone and wooden balconies. Byzantines, Lusignans, Venetians, Ottomans and the British all left something here. Since the 1960s, and for good since 1974, a line has divided the old town in two, which is why people call it the last divided capital of Europe. Everyone hopes that one day the line will open for good. We will play in the southern part, where I have hidden ten envelopes: solve the riddles, walk with your parents, and at the end I owe you a plate of loukoumades. Ready?',
  },
  route: [
    'eleftheria-square',
    'venetian-walls-podocataro',
    'famagusta-gate',
    'archbishops-palace',
    'pancyprian-gymnasium',
    'laiki-geitonia',
    'ledra-street',
    'faneromeni',
    'omeriye',
    'municipal-gardens',
  ],
  spots: [
    // ── 1. Πλατεία Ελευθερίας ────────────────────────────────────────────────
    {
      id: 'eleftheria-square',
      name: { el: 'Πλατεία Ελευθερίας', en: 'Eleftheria Square' },
      emoji: '🌉',
      lat: 35.1698,
      lng: 33.361,
      radiusM: 40,
      riddle: {
        el: 'Μια κατάλευκη πλατεία δεν πατάει στο χώμα: στέκεται σαν γέφυρα πάνω από μια παλιά τάφρο και ενώνει την παλιά πόλη με την καινούργια. Από ψηλά μοιάζει με ένα μεγάλο άσπρο κύμα.',
        en: 'A bright white square does not stand on the ground: it stretches like a bridge over an old moat and joins the old town to the new one. From above it looks like a big white wave.',
      },
      parentHint: {
        el: 'Είναι η Πλατεία Ελευθερίας, στη νότια άκρη της παλιάς πόλης, ανάμεσα στην οδό Λήδρας και τη λεωφόρο Μακαρίου. Ξεκινήστε από εδώ: σταθείτε στη μέση της άσπρης πλατφόρμας, δίπλα στο κάγκελο, κοιτώντας κάτω προς την τάφρο.',
        en: 'Eleftheria Square, at the southern edge of the old town, between Ledra Street and Makarios Avenue. Start here: stand in the middle of the white platform, by the railing, looking down into the moat.',
      },
      unlockQuestion: {
        question: { el: 'Η πλατεία είναι χτισμένη σαν γέφυρα πάνω από ένα βαθύ χαντάκι που κάνει τον γύρο της παλιάς πόλης. Γιατί σκάφτηκε αυτό το χαντάκι;', en: 'The square is built like a bridge over a deep ditch that runs all the way around the old town. Why was the ditch dug?' },
        options: {
          el: ['Για να περνάει από μέσα ένα ποτάμι', 'Για να προστατεύει τα τείχη από τους εχθρούς', 'Για να τρέχουν τρένα', 'Για να κολυμπούν οι κάτοικοι το καλοκαίρι'],
          en: ['So a river could flow through it', 'To protect the city walls from enemies', 'So trains could run in it', 'So people could swim in it in summer'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι η τάφρος των ενετικών τειχών. Οι εχθροί που ήθελαν να φτάσουν στα τείχη έπρεπε πρώτα να κατέβουν μέσα σε αυτό το βαθύ χαντάκι, όπου οι φρουροί τους έβλεπαν από ψηλά.',
          en: 'It is the moat of the Venetian walls. Enemies who wanted to reach the walls first had to climb down into this deep ditch, where the guards could see them from above.',
        },
      },
      onSite: {
        question: { el: 'Σκύψε πάνω από το κάγκελο και κοίτα κάτω, μέσα στην παλιά τάφρο. Τι υπάρχει εκεί σήμερα;', en: 'Lean over the railing and look down into the old moat. What is there today?' },
        options: {
          el: ['Ένα ποτάμι με βάρκες', 'Ένας δρόμος γεμάτος αυτοκίνητα', 'Ένας κήπος με μονοπάτια και δέντρα', 'Τίποτα, μόνο γυμνός βράχος'],
          en: ['A river with boats', 'A road full of cars', 'A garden with paths and trees', 'Nothing, just bare rock'],
        },
        correct: 2,
        explanation: {
          el: 'Η τάφρος δεν είχε ποτέ νερό, ήταν ένα ξερό χαντάκι. Σήμερα από κάτω υπάρχει κήπος με μονοπάτια, δέντρα και παγκάκια, και το σχέδιο είναι όλη η τάφρος γύρω από την παλιά πόλη να γίνει σιγά σιγά ένα μεγάλο πάρκο.',
          en: 'The moat never held water; it was always a dry ditch. Today there is a garden underneath, with paths, trees and benches, and the plan is for the whole moat around the old town to slowly become one long park.',
        },
      },
      story: {
        el: 'Αυτή η άσπρη πλατεία είναι ολοκαίνουργια: άνοιξε το 2021. Τη σχεδίασε η Ζάχα Χαντίντ, μια διάσημη αρχιτέκτονας που αγαπούσε τις καμπύλες και σχεδόν ποτέ δεν σχεδίαζε ίσιες γωνίες. Δυστυχώς δεν πρόλαβε να τη δει τελειωμένη. Η πλατεία δεν πατάει στο χώμα, αλλά στέκεται σαν γέφυρα πάνω από την τάφρο των παλιών τειχών. Έτσι, από τη μια μεριά έχεις την παλιά πόλη με τα σοκάκια και από την άλλη την καινούργια με τους μεγάλους δρόμους. Το όνομά της σημαίνει «Ελευθερία»: παλιά είχε άλλο όνομα, αλλά το 1974 οι κάτοικοι ψήφισαν και διάλεξαν αυτό. Μια γέφυρα που ενώνει το παλιό με το καινούργιο, ωραία αρχή για το κυνήγι μας!',
        en: 'This white square is brand new: it opened in 2021. It was designed by Zaha Hadid, a famous architect who loved curves and hardly ever drew a straight corner. Sadly, she did not live to see it finished. The square does not sit on the ground; it stands like a bridge over the moat of the old city walls. So on one side you have the old town with its narrow lanes, and on the other the new town with its wide avenues. Its name means Freedom: it used to have another name, but in 1974 the people of Nicosia voted and chose this one. A bridge that joins old and new is a fine start for our treasure hunt!',
      },
      didYouKnow: {
        el: 'Το έργο κράτησε πολύ: ο διαγωνισμός έγινε το 2005, οι εργασίες ξεκίνησαν γύρω στο 2012 και η πλατεία άνοιξε το 2021, πέντε χρόνια μετά τον θάνατο της Ζάχα Χαντίντ. Είναι το πρώτο κομμάτι ενός σχεδίου να μετατραπεί ολόκληρη η τάφρος των τειχών, μήκους περίπου 4,5 χιλιομέτρων, σε ένα γραμμικό πάρκο γύρω από την παλιά πόλη.',
        en: 'It was a long project: the competition was held in 2005, work began around 2012 and the square opened in 2021, five years after Zaha Hadid died. It is the first piece of a plan to turn the entire moat of the walls, roughly 4.5 kilometres long, into a linear park circling the old town.',
      },
      quiz: [
        {
          q: { el: 'Ποια σχεδίασε την άσπρη πλατεία;', en: 'Who designed the white square?' },
          options: {
            el: ['Ένας Ενετός μηχανικός', 'Η αρχιτέκτονας Ζάχα Χαντίντ', 'Ένας βασιλιάς της Κύπρου', 'Ένας Βρετανός στρατηγός'],
            en: ['A Venetian engineer', 'The architect Zaha Hadid', 'A king of Cyprus', 'A British general'],
          },
          correct: 1,
          explanation: {
            el: 'Η Ζάχα Χαντίντ, διάσημη για τα κτίρια της με τις καμπύλες, σχεδίασε την πλατεία αλλά δεν πρόλαβε να τη δει έτοιμη.',
            en: 'Zaha Hadid, famous for her curvy buildings, designed the square but did not live to see it completed.',
          },
        },
        {
          q: { el: 'Τι υπάρχει κάτω από την πλατεία;', en: 'What is underneath the square?' },
          options: {
            el: ['Μια σπηλιά', 'Ένα υπόγειο τρένο', 'Η θάλασσα', 'Η παλιά τάφρος των τειχών, που έγινε κήπος'],
            en: ['A cave', 'An underground train', 'The sea', 'The old moat of the walls, now a garden'],
          },
          correct: 3,
          explanation: {
            el: 'Η πλατεία στέκεται σαν γέφυρα πάνω από την τάφρο των ενετικών τειχών. Η τάφρος σήμερα είναι κήπος.',
            en: 'The square stands like a bridge over the moat of the Venetian walls. The moat is a garden today.',
          },
        },
        {
          q: { el: 'Πώς πήρε η πλατεία το όνομα «Ελευθερίας»;', en: 'How did the square get the name Eleftheria (Freedom)?' },
          options: {
            el: ['Οι κάτοικοι το ψήφισαν το 1974', 'Από ένα λουλούδι που φυτρώνει εκεί', 'Από το όνομα ενός βασιλιά', 'Επειδή η είσοδος είναι ελεύθερη'],
            en: ['The people of the city voted for it in 1974', 'After a flower that grows there', 'After the name of a king', 'Because entry is free'],
          },
          correct: 0,
          explanation: {
            el: 'Η πλατεία είχε παλιότερα άλλο όνομα. Το 1974 οι κάτοικοι της Λευκωσίας ψήφισαν και της έδωσαν το όνομα «Ελευθερίας».',
            en: 'The square used to have another name. In 1974 the people of Nicosia voted and named it Freedom Square.',
          },
        },
      ],
    },

    // ── 2. Ενετικά Τείχη & Μνημείο Ελευθερίας ────────────────────────────────
    {
      id: 'venetian-walls-podocataro',
      name: { el: 'Ενετικά Τείχη & Μνημείο Ελευθερίας', en: 'Venetian Walls & Liberty Monument' },
      emoji: '🗽',
      lat: 35.173,
      lng: 33.3697,
      radiusM: 80,
      riddle: {
        el: 'Πάνω σε μια πέτρινη καρδιά των τειχών, δύο άντρες ανοίγουν μια βαριά πόρτα και από μέσα βγαίνουν άνθρωποι που ήταν κλεισμένοι. Πιο ψηλά από όλους στέκεται μια γυναίκα και κοιτάζει μακριά.',
        en: 'On a stone heart of the old walls, two men are pulling open a heavy gate, and people who were locked inside are stepping out. Higher than everyone stands a woman gazing into the distance.',
      },
      parentHint: {
        el: 'Είναι το Μνημείο Ελευθερίας στον προμαχώνα Ποδοκάταρο, στο νοτιοανατολικό τμήμα των τειχών. Από την Πλατεία Ελευθερίας περπατήστε ανατολικά ακολουθώντας τα τείχη (λεωφόρος Κωνσταντίνου Παλαιολόγου από μέσα ή λεωφόρος Στασίνου από έξω) για περίπου 15 λεπτά. Το μνημείο στέκεται πάνω στον προμαχώνα, λίγο πριν από την Πύλη Αμμοχώστου.',
        en: 'The Liberty Monument on the Podocataro bastion, in the south-east of the walls. From Eleftheria Square walk east following the walls (Konstantinou Palaiologou Avenue on the inside or Stasinou Avenue on the outside) for about 15 minutes. The monument stands on top of the bastion, just before Famagusta Gate.',
      },
      unlockQuestion: {
        question: { el: 'Τα στρογγυλά τείχη της Λευκωσίας έχουν προμαχώνες σε σχήμα καρδιάς. Πόσους;', en: 'The round walls of Nicosia have heart-shaped bastions. How many?' },
        options: {
          el: ['3', '7', '11', '20'],
          en: ['3', '7', '11', '20'],
        },
        correct: 2,
        explanation: {
          el: 'Τα τείχη έχουν έντεκα προμαχώνες, και ο καθένας πήρε το όνομα μιας αρχοντικής οικογένειας της εποχής, Ενετών και Κυπρίων. Αυτός εδώ λέγεται Ποδοκάταρο. Από ψηλά τα τείχη μοιάζουν με αστέρι με έντεκα μύτες.',
          en: 'The walls have eleven bastions, each named after a noble family of the time, Venetian and Cypriot. This one is called Podocataro. From above, the walls look like a star with eleven points.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα καλά τους δύο άντρες που ανοίγουν την πόρτα της φυλακής. Τι τραβούν με τα χέρια τους;', en: 'Look closely at the two men opening the prison gate. What are they pulling with their hands?' },
        options: {
          el: ['Σχοινιά', 'Αλυσίδες', 'Κλαδιά δέντρου', 'Ένα σεντόνι'],
          en: ['Ropes', 'Chains', 'Tree branches', 'A bedsheet'],
        },
        correct: 1,
        explanation: {
          el: 'Τραβούν βαριές αλυσίδες για να ανοίξουν τα κάγκελα της φυλακής. Οι άνθρωποι που βγαίνουν είναι χωρικοί, εργάτες, ένας ιερέας, μια μητέρα, απλοί άνθρωποι της Κύπρου, και ψηλά στέκεται η Ελευθερία. Όλα τα αγάλματα είναι μπρούντζινα και φτιάχτηκαν στη Φλωρεντία της Ιταλίας.',
          en: 'They are pulling heavy chains to open the prison bars. The people stepping out are villagers, workers, a priest, a mother, ordinary people of Cyprus, and Liberty stands high above. All the statues are bronze and were cast in Florence, Italy.',
        },
      },
      story: {
        el: 'Τα τείχη γύρω σου τα έχτισαν οι Ενετοί το 1567, όταν ήταν αυτοί τα αφεντικά της Κύπρου. Τα έκαναν έναν τέλειο κύκλο, περίπου 4,5 χιλιόμετρα γύρω γύρω, με έντεκα μυτερούς προμαχώνες σαν καρδιές και μια βαθιά τάφρο απ\' έξω. Δεν είχαν όμως προλάβει να τα τελειώσουν όταν, το 1570, έφτασε ένας τεράστιος οθωμανικός στρατός και πήρε την πόλη. Το μνημείο πάνω στον προμαχώνα είναι πολύ πιο καινούργιο, από το 1973. Δείχνει τα χρόνια 1955 με 1959, όταν οι Κύπριοι αγωνίστηκαν για να μην τους κυβερνούν πια οι Βρετανοί. Δύο αγωνιστές ανοίγουν τη φυλακή, οι άνθρωποι βγαίνουν στο φως και ψηλά στέκεται η Ελευθερία. Το 1960 η Κύπρος έγινε δική της χώρα.',
        en: 'The walls around you were built by the Venetians in 1567, back when they were the masters of Cyprus. They made a perfect circle, about 4.5 kilometres all the way round, with eleven pointed bastions shaped like hearts and a deep moat outside. But they had not quite finished when, in 1570, a huge Ottoman army arrived and took the city. The monument on top of the bastion is much newer, from 1973. It tells of the years 1955 to 1959, when the people of Cyprus struggled so the British would no longer rule them. Two fighters open the prison, the people step out into the light, and Liberty stands high above. In 1960 Cyprus became a country of its own.',
      },
      didYouKnow: {
        el: 'Για να χτίσουν τον κύκλο, οι Ενετοί γκρέμισαν τα πολύ μεγαλύτερα μεσαιωνικά τείχη των Λουζινιανών, μαζί με εκκλησίες και παλάτια που έμεναν απ\' έξω, και εξέτρεψαν τον ποταμό Πεδιαίο ώστε να τρέχει έξω από την πόλη. Το σχέδιο ήταν του μηχανικού Τζούλιο Σαβορνιάν: από κάθε προμαχώνα οι φρουροί έβλεπαν ολόκληρο το κομμάτι του τείχους μέχρι τον επόμενο, ώστε κανένας εχθρός να μην μπορεί να κρυφτεί.',
        en: 'To build the circle, the Venetians tore down the much larger medieval walls of the Lusignans, along with churches and palaces left outside, and diverted the Pedieos river to run outside the city. The design was by the engineer Giulio Savorgnan: from every bastion the guards could see the whole stretch of wall to the next one, so no enemy could hide.',
      },
      quiz: [
        {
          q: { el: 'Ποιοι έχτισαν τα στρογγυλά τείχη της Λευκωσίας;', en: 'Who built the round walls of Nicosia?' },
          options: {
            el: ['Οι Βρετανοί', 'Οι αρχαίοι Έλληνες', 'Οι Ενετοί', 'Οι Ρωμαίοι'],
            en: ['The British', 'The ancient Greeks', 'The Venetians', 'The Romans'],
          },
          correct: 2,
          explanation: {
            el: 'Οι Ενετοί έχτισαν τα τείχη το 1567, λίγο πριν φτάσει ο οθωμανικός στρατός το 1570.',
            en: 'The Venetians built the walls in 1567, shortly before the Ottoman army arrived in 1570.',
          },
        },
        {
          q: { el: 'Τι σχήμα έχουν οι προμαχώνες των τειχών;', en: 'What shape are the bastions of the walls?' },
          options: {
            el: ['Σαν καρδιά', 'Σαν τετράγωνο κουτί', 'Σαν στρογγυλός πύργος', 'Σαν πυραμίδα'],
            en: ['Like a heart', 'Like a square box', 'Like a round tower', 'Like a pyramid'],
          },
          correct: 0,
          explanation: {
            el: 'Οι έντεκα προμαχώνες είναι μυτεροί σαν καρδιές, γι\' αυτό από ψηλά τα τείχη μοιάζουν με αστέρι.',
            en: 'The eleven bastions are pointed like hearts, which is why from above the walls look like a star.',
          },
        },
        {
          q: { el: 'Ποια χρονιά έγινε η Κύπρος δική της χώρα;', en: 'In which year did Cyprus become a country of its own?' },
          options: {
            el: ['1567', '1821', '1974', '1960'],
            en: ['1567', '1821', '1974', '1960'],
          },
          correct: 3,
          explanation: {
            el: 'Μετά τον αγώνα του 1955 με 1959, η Κύπρος έγινε ανεξάρτητη χώρα το 1960.',
            en: 'After the struggle of 1955 to 1959, Cyprus became an independent country in 1960.',
          },
        },
      ],
    },

    // ── 3. Πύλη Αμμοχώστου ───────────────────────────────────────────────────
    {
      id: 'famagusta-gate',
      name: { el: 'Πύλη Αμμοχώστου', en: 'Famagusta Gate' },
      emoji: '🚪',
      lat: 35.1731,
      lng: 33.3706,
      radiusM: 80,
      riddle: {
        el: 'Ένα μακρύ, δροσερό τούνελ τρυπάει τα χοντρά τείχη και βγάζει στην τάφρο. Παλιά περνούσαν από εδώ έμποροι με άλογα και γαϊδουράκια, ενώ σήμερα γίνονται μέσα του εκθέσεις και συναυλίες.',
        en: 'A long, cool tunnel bores through the thick walls and comes out in the moat. Long ago traders with horses and donkeys passed through it; today it hosts exhibitions and concerts.',
      },
      parentHint: {
        el: 'Είναι η Πύλη Αμμοχώστου, στην ανατολική άκρη της οδού Αθηνάς. Από το Μνημείο Ελευθερίας περπατήστε βόρεια κατά μήκος της εσωτερικής πλευράς των τειχών για περίπου 200 μέτρα. Η πύλη είναι το θολωτό τούνελ μέσα στο τείχος, απέναντι από το τέλος της οδού Αθηνάς. Περάστε από μέσα, τις μέρες που είναι ανοιχτή.',
        en: 'Famagusta Gate, at the east end of Athinas Street. From the Liberty Monument walk north along the inside of the walls for about 200 metres. The gate is the vaulted tunnel through the wall, opposite the end of Athinas Street. Walk through it on the days it is open.',
      },
      unlockQuestion: {
        question: { el: 'Τα τείχη είχαν τρεις πύλες, και η καθεμιά πήρε το όνομα μιας πόλης της Κύπρου προς την οποία κοιτούσε. Ποια από αυτές ΔΕΝ ήταν πύλη της Λευκωσίας;', en: 'The walls had three gates, each named after a town of Cyprus that lay in its direction. Which of these was NOT a gate of Nicosia?' },
        options: {
          el: ['Πύλη Αμμοχώστου', 'Πύλη Κερύνειας', 'Πύλη Λεμεσού', 'Πύλη Πάφου'],
          en: ['Famagusta Gate', 'Kyrenia Gate', 'Limassol Gate', 'Paphos Gate'],
        },
        correct: 2,
        explanation: {
          el: 'Οι τρεις πύλες ήταν της Αμμοχώστου στα ανατολικά, της Κερύνειας στα βόρεια και της Πάφου στα δυτικά. Πύλη Λεμεσού δεν υπήρξε ποτέ. Η Πύλη Αμμοχώστου ήταν η πιο μεγαλοπρεπής από τις τρεις.',
          en: 'The three gates were Famagusta Gate to the east, Kyrenia Gate to the north and Paphos Gate to the west. There was never a Limassol Gate. Famagusta Gate was the grandest of the three.',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στην πύλη από την πλευρά της πόλης και κοίτα το άνοιγμά της. Τι σχήμα έχει η κορυφή του;', en: 'Stand in front of the gate on the city side and look at its opening. What shape is the top of it?' },
        options: {
          el: ['Ίσια, σαν παράθυρο', 'Στρογγυλή καμάρα, σαν μισοφέγγαρο', 'Μυτερή, σαν βέλος', 'Τριγωνική, σαν στέγη'],
          en: ['Straight, like a window', 'A round arch, like a half-moon', 'Pointed, like an arrow', 'Triangular, like a roof'],
        },
        correct: 1,
        explanation: {
          el: 'Η είσοδος είναι μια μεγάλη στρογγυλή καμάρα από χοντρές πέτρες. Μέσα, το πέρασμα έχει πέτρινο θόλο και στη μέση έναν στρογγυλό τρούλο με ένα άνοιγμα ψηλά που αφήνει να μπαίνει φως, όπως το Πάνθεον της Ρώμης.',
          en: 'The entrance is a big round arch of thick stones. Inside, the passage has a stone vault and, in the middle, a round dome with an opening at the top that lets light in, like the Pantheon in Rome.',
        },
      },
      story: {
        el: 'Αυτή ήταν η πιο μεγάλη και η πιο όμορφη από τις τρεις πύλες των τειχών. Την έχτισαν οι Ενετοί το 1567 και την αντέγραψαν από μια πύλη στο Ηράκλειο της Κρήτης, που τότε ανήκε κι αυτό στη Βενετία. Το πέρασμα είναι ένα μακρύ τούνελ μέσα στο χοντρό τείχος, με πέτρινο θόλο από πάνω και, στη μέση, έναν στρογγυλό τρούλο με ένα άνοιγμα που αφήνει να μπαίνει το φως. Από εδώ έμπαιναν στην πόλη οι έμποροι που έρχονταν από την Αμμόχωστο, το μεγάλο λιμάνι στα ανατολικά. Το βράδυ οι φρουροί έκλειναν την πύλη και κανείς δεν έμπαινε ούτε έβγαινε. Πολύ αργότερα, τα χρόνια των Βρετανών, το τούνελ έγινε αποθήκη. Το 1981 το επισκεύασαν και σήμερα φιλοξενεί εκθέσεις, συναυλίες και γιορτές. Μια πύλη για στρατιώτες που έγινε πύλη για την τέχνη!',
        en: 'This was the biggest and the most beautiful of the three gates of the walls. The Venetians built it in 1567 and copied it from a gate in Heraklion, on Crete, which also belonged to Venice at the time. The passage is a long tunnel through the thick wall, with a stone vault above and, in the middle, a round dome with an opening that lets the light in. Traders coming from Famagusta, the big harbour to the east, entered the city through here. At night the guards shut the gate and nobody came in or out. Much later, in British times, the tunnel was used as a storeroom. In 1981 it was repaired, and today it hosts exhibitions, concerts and festivals. A gate built for soldiers that became a gate for art!',
      },
      didYouKnow: {
        el: 'Το πρότυπο της πύλης ήταν η Πύλη του Λαζαρέτου στον Χάνδακα, το σημερινό Ηράκλειο, σχεδιασμένη από τον αρχιτέκτονα Μικέλε Σανμικέλι. Το πρώτο της όνομα ήταν «Πόρτα Τζουλιάνα», προς τιμήν του μηχανικού Τζούλιο Σαβορνιάν. Η όψη προς την πόλη είναι επιβλητική, ενώ η όψη προς την τάφρο είναι σχεδόν γυμνή: η πύλη ήταν φτιαγμένη για να θαυμάζεται από μέσα.',
        en: 'The model for the gate was the Lazaretto Gate of Candia, today\'s Heraklion, designed by the architect Michele Sanmicheli. Its first name was Porta Giuliana, in honour of the engineer Giulio Savorgnan. The façade facing the city is imposing, while the side facing the moat is almost bare: the gate was made to be admired from inside.',
      },
      quiz: [
        {
          q: { el: 'Από ποιο νησί αντέγραψαν οι Ενετοί το σχέδιο της πύλης;', en: 'From which island did the Venetians copy the design of the gate?' },
          options: {
            el: ['Από τη Ρόδο', 'Από την Κρήτη', 'Από τη Μάλτα', 'Από τη Σικελία'],
            en: ['Rhodes', 'Crete', 'Malta', 'Sicily'],
          },
          correct: 1,
          explanation: {
            el: 'Η πύλη είναι αντίγραφο μιας πύλης στο Ηράκλειο της Κρήτης, που τότε ανήκε επίσης στη Βενετία.',
            en: 'The gate is a copy of a gate in Heraklion, Crete, which also belonged to Venice back then.',
          },
        },
        {
          q: { el: 'Πόσες πύλες είχαν τα τείχη της Λευκωσίας;', en: 'How many gates did the walls of Nicosia have?' },
          options: {
            el: ['Μία', 'Δύο', 'Τρεις', 'Έντεκα'],
            en: ['One', 'Two', 'Three', 'Eleven'],
          },
          correct: 2,
          explanation: {
            el: 'Τρεις: της Αμμοχώστου, της Κερύνειας και της Πάφου. Έντεκα είναι οι προμαχώνες, όχι οι πύλες.',
            en: 'Three: Famagusta, Kyrenia and Paphos. Eleven is the number of bastions, not gates.',
          },
        },
        {
          q: { el: 'Τι γίνεται μέσα στην πύλη σήμερα;', en: 'What happens inside the gate today?' },
          options: {
            el: ['Εκθέσεις και συναυλίες', 'Στάβλος για άλογα', 'Μαθήματα σχολείου', 'Φυλακή'],
            en: ['Exhibitions and concerts', 'A stable for horses', 'School lessons', 'A prison'],
          },
          correct: 0,
          explanation: {
            el: 'Από το 1981 η πύλη είναι πολιτιστικό κέντρο της πόλης, με εκθέσεις, συναυλίες και γιορτές.',
            en: 'Since 1981 the gate has been a cultural centre of the city, with exhibitions, concerts and festivals.',
          },
        },
      ],
    },

    // ── 4. Αρχιεπισκοπή & Άγιος Ιωάννης ──────────────────────────────────────
    {
      id: 'archbishops-palace',
      name: { el: 'Αρχιεπισκοπή & Άγιος Ιωάννης', en: 'Archbishop\'s Palace & St John\'s' },
      emoji: '⛪',
      lat: 35.1746,
      lng: 33.3672,
      radiusM: 40,
      riddle: {
        el: 'Ένα παλάτι με καμάρες μοιάζει πολύ παλιό, αλλά είναι πιο νέο από τον παππού σου. Μπροστά του στέκεται το άγαλμα ενός άντρα που ήταν ταυτόχρονα αρχιεπίσκοπος και ο πρώτος πρόεδρος της χώρας.',
        en: 'A palace with arches looks very old but is younger than your grandpa. In front of it stands the statue of a man who was at the same time an archbishop and the first president of the country.',
      },
      parentHint: {
        el: 'Είναι η Αρχιεπισκοπή στην πλατεία Αρχιεπισκόπου Κυπριανού, με τον μικρό καθεδρικό ναό του Αγίου Ιωάννη δίπλα της. Από την Πύλη Αμμοχώστου περπατήστε δυτικά στην οδό Αθηνάς για περίπου 5 λεπτά. Η πλατεία ανοίγει στα δεξιά σας, με το παλάτι και το άγαλμα του Μακαρίου μπροστά του.',
        en: 'The Archbishop\'s Palace on Archbishop Kyprianos Square, with the small cathedral of St John beside it. From Famagusta Gate walk west along Athinas Street for about 5 minutes. The square opens on your right, with the palace and the Makarios statue in front of it.',
      },
      unlockQuestion: {
        question: { el: 'Ο Μακάριος ήταν ο πρώτος πρόεδρος της Κύπρου. Τι άλλο ήταν ταυτόχρονα;', en: 'Makarios was the first president of Cyprus. What else was he at the same time?' },
        options: {
          el: ['Καπετάνιος πλοίου', 'Αρχιεπίσκοπος', 'Δάσκαλος μουσικής', 'Ποδοσφαιριστής'],
          en: ['A ship\'s captain', 'An archbishop', 'A music teacher', 'A footballer'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Μακάριος Γ΄ ήταν ο Αρχιεπίσκοπος της Κύπρου, δηλαδή ο αρχηγός της Εκκλησίας του νησιού, και το 1960 έγινε και ο πρώτος πρόεδρος της νέας χώρας. Γι\' αυτό το άγαλμά του στέκεται μπροστά στο παλάτι του αρχιεπισκόπου.',
          en: 'Makarios III was the Archbishop of Cyprus, the head of the island\'s Church, and in 1960 he also became the first president of the new country. That is why his statue stands in front of the archbishop\'s palace.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα το άγαλμα μπροστά στο παλάτι. Τι φοράει ο άντρας;', en: 'Look at the statue in front of the palace. What is the man wearing?' },
        options: {
          el: ['Στολή στρατιώτη', 'Κορώνα και μανδύα βασιλιά', 'Μακρύ ράσο ιερέα', 'Φανέλα ποδοσφαίρου'],
          en: ['A soldier\'s uniform', 'A king\'s crown and cape', 'A priest\'s long robe', 'A football shirt'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Μακάριος φορούσε πάντα το μακρύ ράσο του αρχιεπισκόπου, ακόμα και όταν ήταν πρόεδρος και συναντούσε αρχηγούς άλλων χωρών. Έτσι τον δείχνει και το άγαλμα.',
          en: 'Makarios always wore the long robe of an archbishop, even as president when he met the leaders of other countries. That is how the statue shows him too.',
        },
      },
      story: {
        el: 'Το παλάτι με τις καμάρες είναι το σπίτι του Αρχιεπισκόπου της Κύπρου. Μοιάζει παλιό, αλλά χτίστηκε γύρω στο 1960, με σχέδιο που θυμίζει τα βυζαντινά και τα ενετικά κτίρια. Δίπλα του, ο μικρός ναός του Αγίου Ιωάννη είναι πραγματικά παλιός: χτίστηκε το 1662 και μέσα οι τοίχοι του είναι γεμάτοι ζωγραφιές που λένε ιστορίες. Μπροστά στο παλάτι στέκεται ο Μακάριος Γ΄, αρχιεπίσκοπος και πρώτος πρόεδρος της Κύπρου από το 1960. Για είκοσι χρόνια εδώ στεκόταν ένα τεράστιο μπρούντζινο άγαλμά του, ψηλό όσο ένα τριώροφο σπίτι. Το 2008 το μετέφεραν στο Μοναστήρι του Κύκκου, στα βουνά, και στη θέση του ήρθε ένα μικρότερο άγαλμα. Ακόμα και τα αγάλματα ταξιδεύουν!',
        en: 'The palace with the arches is the home of the Archbishop of Cyprus. It looks old, but it was built around 1960, in a style that copies Byzantine and Venetian buildings. Next to it, the little church of St John is truly old: it was built in 1662, and inside, its walls are covered in paintings that tell stories. In front of the palace stands Makarios III, archbishop and first president of Cyprus from 1960. For twenty years a huge bronze statue of him stood here, as tall as a three-storey house. In 2008 it was moved to Kykkos Monastery, up in the mountains, and a smaller statue took its place. Even statues go travelling!',
      },
      didYouKnow: {
        el: 'Το μπρούντζινο άγαλμα του Μακαρίου, ύψους περίπου 10 μέτρων, στέκεται σήμερα στο Θρονί, κοντά στο Μοναστήρι του Κύκκου, όπου ο Μακάριος είχε πάει ως δόκιμος μοναχός σε ηλικία 13 ετών και όπου είναι θαμμένος. Οι τοιχογραφίες του Αγίου Ιωάννη, από τον 18ο αιώνα, δείχνουν μεταξύ άλλων την εύρεση του τάφου του Αποστόλου Βαρνάβα, τον λόγο που η Εκκλησία της Κύπρου είναι ανεξάρτητη από τα παλιά χρόνια.',
        en: 'The bronze Makarios, roughly 10 metres tall, now stands at Throni near Kykkos Monastery, where Makarios went as a novice monk at the age of 13 and where he is buried. The 18th-century wall paintings in St John\'s include the discovery of the tomb of the Apostle Barnabas, the reason the Church of Cyprus has been independent since ancient times.',
      },
      quiz: [
        {
          q: { el: 'Πότε χτίστηκε το παλάτι της Αρχιεπισκοπής;', en: 'When was the Archbishop\'s Palace built?' },
          options: {
            el: ['Στα χρόνια των Ενετών', 'Στα χρόνια των Βυζαντινών', 'Πριν από 500 χρόνια', 'Γύρω στο 1960, αν και μοιάζει παλιό'],
            en: ['In Venetian times', 'In Byzantine times', '500 years ago', 'Around 1960, though it looks old'],
          },
          correct: 3,
          explanation: {
            el: 'Το παλάτι χτίστηκε γύρω στο 1960 με σχέδιο που μιμείται τα παλιά βυζαντινά και ενετικά κτίρια, γι\' αυτό ξεγελάει.',
            en: 'The palace was built around 1960 in a style that imitates old Byzantine and Venetian buildings, which is why it fools people.',
          },
        },
        {
          q: { el: 'Πού πήγε το τεράστιο μπρούντζινο άγαλμα του Μακαρίου το 2008;', en: 'Where did the huge bronze statue of Makarios go in 2008?' },
          options: {
            el: ['Στον βυθό της θάλασσας', 'Στο Μοναστήρι του Κύκκου, στα βουνά', 'Στην Αθήνα', 'Σε ένα μουσείο του Λονδίνου'],
            en: ['To the bottom of the sea', 'To Kykkos Monastery, in the mountains', 'To Athens', 'To a museum in London'],
          },
          correct: 1,
          explanation: {
            el: 'Το μετέφεραν στο Μοναστήρι του Κύκκου στα βουνά, και στη θέση του μπροστά στο παλάτι ήρθε ένα μικρότερο άγαλμα.',
            en: 'It was moved to Kykkos Monastery in the mountains, and a smaller statue took its place in front of the palace.',
          },
        },
        {
          q: { el: 'Τι έχει μέσα ο μικρός ναός του Αγίου Ιωάννη;', en: 'What is inside the little church of St John?' },
          options: {
            el: ['Ένα ενυδρείο', 'Χρυσά νομίσματα', 'Τοιχογραφίες που λένε ιστορίες', 'Ένα παλιό αυτοκίνητο'],
            en: ['An aquarium', 'Gold coins', 'Wall paintings that tell stories', 'An old car'],
          },
          correct: 2,
          explanation: {
            el: 'Ο ναός, χτισμένος το 1662, έχει τους τοίχους του γεμάτους ζωγραφιές που λένε ιστορίες από την Εκκλησία της Κύπρου.',
            en: 'The church, built in 1662, has walls covered in paintings telling stories from the Church of Cyprus.',
          },
        },
      ],
    },

    // ── 5. Παγκύπριο Γυμνάσιο ────────────────────────────────────────────────
    {
      id: 'pancyprian-gymnasium',
      name: { el: 'Παγκύπριο Γυμνάσιο', en: 'Pancyprian Gymnasium' },
      emoji: '🎓',
      lat: 35.175,
      lng: 33.368,
      radiusM: 60,
      riddle: {
        el: 'Σε αυτό το σχολείο το κουδούνι χτυπάει εδώ και πάνω από 200 χρόνια. Είναι το πιο παλιό σχολείο του νησιού που κάνει ακόμα μάθημα, και μέσα του κρύβει μουσεία με πέτρες, κοχύλια και παλιά νομίσματα.',
        en: 'At this school the bell has been ringing for more than 200 years. It is the oldest school on the island still holding lessons, and inside it hides museums with rocks, shells and old coins.',
      },
      parentHint: {
        el: 'Είναι το Παγκύπριο Γυμνάσιο, το μεγάλο κτίριο από κίτρινη πέτρα στη βόρεια πλευρά της πλατείας Αρχιεπισκόπου Κυπριανού, απέναντι από την Αρχιεπισκοπή. Από το άγαλμα του Μακαρίου διασχίστε την πλατεία, περίπου 100 μέτρα, και σταθείτε μπροστά στην κεντρική είσοδο. Τα μουσεία του ανοίγουν συνήθως τα πρωινά των καθημερινών.',
        en: 'The Pancyprian Gymnasium, the big yellow-stone building on the north side of Archbishop Kyprianos Square, opposite the Archbishop\'s Palace. From the Makarios statue cross the square, about 100 metres, and stand in front of the main entrance. Its museums usually open on weekday mornings.',
      },
      unlockQuestion: {
        question: { el: 'Το σχολείο λειτουργεί εδώ και πάνω από 200 χρόνια. Ποια χρονιά άνοιξε;', en: 'The school has been working for more than 200 years. In which year did it open?' },
        options: {
          el: ['Το 1812', 'Το 1960', 'Το 1999', 'Πριν από 1.000 χρόνια'],
          en: ['In 1812', 'In 1960', 'In 1999', '1,000 years ago'],
        },
        correct: 0,
        explanation: {
          el: 'Το σχολείο άνοιξε το 1812, όταν την Κύπρο την κυβερνούσαν ακόμα οι Οθωμανοί. Είναι το παλαιότερο σχολείο της Κύπρου που λειτουργεί ακόμα.',
          en: 'The school opened in 1812, when Cyprus was still ruled by the Ottomans. It is the oldest school in Cyprus still in operation.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα τους τοίχους του σχολείου. Τι χρώμα έχει η πέτρα του;', en: 'Look at the walls of the school. What colour is its stone?' },
        options: {
          el: ['Άσπρο σαν μάρμαρο', 'Χρυσοκίτρινο, σαν την άμμο', 'Κόκκινο σαν τούβλο', 'Γκρι σαν τσιμέντο'],
          en: ['White like marble', 'Golden yellow, like sand', 'Red like brick', 'Grey like concrete'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ο ντόπιος πωρόλιθος, η «πουρόπετρα» όπως τη λένε στην Κύπρο, μια μαλακή πέτρα στο χρώμα της άμμου. Σχεδόν όλη η παλιά Λευκωσία είναι χτισμένη με αυτή, γι\' αυτό η πόλη λάμπει χρυσαφένια στον ήλιο.',
          en: 'It is the local sandstone, called pouropetra in Cyprus, a soft stone the colour of sand. Almost all of old Nicosia is built with it, which is why the city glows golden in the sun.',
        },
      },
      story: {
        el: 'Το 1812 ο Αρχιεπίσκοπος Κυπριανός άνοιξε εδώ ένα σχολείο, την «Ελληνική Σχολή», για να μαθαίνουν τα παιδιά της Κύπρου γράμματα. Από τότε δεν έκλεισε ποτέ, και σήμερα είναι το πιο παλιό σχολείο του νησιού που λειτουργεί ακόμα. Εδώ φοίτησαν ποιητές, επιστήμονες και πρόεδροι της Κύπρου. Το μεγάλο κτίριο από κίτρινη πέτρα, με τις κολόνες και τα ψηλά παράθυρα, χτίστηκε αργότερα, στο στιλ των αρχαίων ναών. Μέσα του, εκτός από τάξεις, υπάρχουν μουσεία: με πέτρες και κοχύλια, με αρχαία αγγεία, με νομίσματα και με πίνακες ζωγραφικής. Το πρωί στους διαδρόμους περπατούν μαθητές, όπως εδώ και 200 χρόνια. Φαντάσου να κάνεις μάθημα δίπλα σε ένα μουσείο!',
        en: 'In 1812 Archbishop Kyprianos opened a school here, the Greek School, so that the children of Cyprus could learn to read and write. It has never closed since, and today it is the oldest school on the island still in use. Poets, scientists and presidents of Cyprus were pupils here. The big yellow-stone building, with its columns and tall windows, was built later, in the style of ancient temples. Inside, besides classrooms, there are museums: one with rocks and shells, one with ancient pots, one with coins and one with paintings. In the mornings pupils walk the corridors, just as they have for 200 years. Imagine having lessons next door to a museum!',
      },
      didYouKnow: {
        el: 'Το σχολείο πήρε το σημερινό του όνομα, «Παγκύπριον Γυμνάσιον», γύρω στο 1893, όταν έγινε πλήρες εξατάξιο γυμνάσιο. Ο ιδρυτής του, ο Αρχιεπίσκοπος Κυπριανός, έχασε τη ζωή του το 1821 και τιμάται στο μαρμάρινο μαυσωλείο της Φανερωμένης, που θα δείτε πιο μετά. Δίπλα στο σχολείο βρίσκεται η Σεβέρειος Βιβλιοθήκη, του 1949, με χιλιάδες σπάνια βιβλία.',
        en: 'The school took its present name, Pancyprian Gymnasium, around 1893, when it became a full six-year secondary school. Its founder, Archbishop Kyprianos, lost his life in 1821 and is honoured at the marble mausoleum of Faneromeni, which you will see later on. Next to the school stands the Severios Library, from 1949, with thousands of rare books.',
      },
      quiz: [
        {
          q: { el: 'Ποιος άνοιξε το σχολείο το 1812;', en: 'Who opened the school in 1812?' },
          options: {
            el: ['Ο Αρχιεπίσκοπος Κυπριανός', 'Ένας Βρετανός κυβερνήτης', 'Ο Μακάριος', 'Ένας Ενετός δούκας'],
            en: ['Archbishop Kyprianos', 'A British governor', 'Makarios', 'A Venetian duke'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Αρχιεπίσκοπος Κυπριανός ίδρυσε το σχολείο το 1812 για να μαθαίνουν γράμματα τα παιδιά της Κύπρου.',
            en: 'Archbishop Kyprianos founded the school in 1812 so that the children of Cyprus could learn to read and write.',
          },
        },
        {
          q: { el: 'Πόσο παλιό είναι περίπου το σχολείο;', en: 'Roughly how old is the school?' },
          options: {
            el: ['Περίπου 50 χρόνων', 'Περίπου 100 χρόνων', 'Πάνω από 200 χρόνων', 'Πάνω από 1.000 χρόνων'],
            en: ['About 50 years old', 'About 100 years old', 'More than 200 years old', 'More than 1,000 years old'],
          },
          correct: 2,
          explanation: {
            el: 'Από το 1812 μέχρι σήμερα έχουν περάσει πάνω από 200 χρόνια, και το σχολείο δεν έκλεισε ποτέ.',
            en: 'More than 200 years have passed since 1812, and the school has never closed.',
          },
        },
        {
          q: { el: 'Τι υπάρχει μέσα στο σχολείο εκτός από τάξεις;', en: 'What is inside the school apart from classrooms?' },
          options: {
            el: ['Μια πισίνα', 'Μουσεία με συλλογές', 'Ένα σινεμά', 'Ένας ζωολογικός κήπος'],
            en: ['A swimming pool', 'Museums with collections', 'A cinema', 'A zoo'],
          },
          correct: 1,
          explanation: {
            el: 'Το σχολείο έχει μουσεία με πέτρες, κοχύλια, αρχαία αγγεία, νομίσματα και πίνακες.',
            en: 'The school has museums with rocks, shells, ancient pots, coins and paintings.',
          },
        },
      ],
    },

    // ── 6. Λαϊκή Γειτονιά ────────────────────────────────────────────────────
    {
      id: 'laiki-geitonia',
      name: { el: 'Λαϊκή Γειτονιά', en: 'Laiki Geitonia' },
      emoji: '🏘️',
      lat: 35.172,
      lng: 33.3625,
      radiusM: 60,
      riddle: {
        el: 'Στενά σοκάκια χωρίς αυτοκίνητα, σπίτια από κίτρινη πέτρα και ξύλινα μπαλκόνια που κρέμονται πάνω από το κεφάλι σου. Μυρίζει λουκουμάδες και τα μαγαζάκια πουλούν δαντέλες και κεραμικά.',
        en: 'Narrow lanes with no cars, houses of yellow stone and wooden balconies hanging above your head. It smells of honey doughnuts, and the little shops sell lace and pottery.',
      },
      parentHint: {
        el: 'Είναι η Λαϊκή Γειτονιά, η αναπαλαιωμένη πεζόδρομη συνοικία πίσω από το Δημαρχείο, ανάμεσα στην οδό Ονασαγόρου και τα τείχη, δύο λεπτά από την Πλατεία Ελευθερίας. Από το Παγκύπριο Γυμνάσιο περπατήστε δυτικά από την οδό Θησέως και την οδό Ιπποκράτους για περίπου 10 λεπτά. Τα σοκάκια αρχίζουν εκεί όπου η Ιπποκράτους συναντά την Ονασαγόρου. Σταθείτε στη μικρή πλατεία στη μέση των σοκακιών.',
        en: 'Laiki Geitonia, the restored pedestrian quarter behind the Town Hall, between Onasagorou Street and the walls, two minutes from Eleftheria Square. From the Pancyprian Gymnasium walk west along Thiseos Street and Ippokratous Street for about 10 minutes. The lanes begin where Ippokratous meets Onasagorou. Stand in the little square in the middle of the lanes.',
      },
      unlockQuestion: {
        question: { el: 'Η γειτονιά αυτή λέγεται «Λαϊκή Γειτονιά». Τι σημαίνει το όνομά της;', en: 'This quarter is called Laiki Geitonia. What does the name mean?' },
        options: {
          el: ['Η γειτονιά των βασιλιάδων', 'Η γειτονιά του λαού', 'Η γειτονιά των ψαράδων', 'Η καινούργια γειτονιά'],
          en: ['The neighbourhood of the kings', 'The neighbourhood of the people', 'The neighbourhood of the fishermen', 'The new neighbourhood'],
        },
        correct: 1,
        explanation: {
          el: '«Λαϊκή» σημαίνει «του λαού», δηλαδή των απλών ανθρώπων. Εδώ έμεναν και δούλευαν τεχνίτες και έμποροι, όχι βασιλιάδες ούτε άρχοντες.',
          en: 'Laiki means "of the people", the ordinary folk. Craftsmen and traders lived and worked here, not kings or nobles.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα ψηλά τα κλειστά μπαλκόνια που προεξέχουν από τους πάνω ορόφους. Από τι είναι φτιαγμένα;', en: 'Look up at the closed-in balconies sticking out from the upper floors. What are they made of?' },
        options: {
          el: ['Από σίδερο', 'Από γυαλί', 'Από ξύλο', 'Από μάρμαρο'],
          en: ['Iron', 'Glass', 'Wood', 'Marble'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι ξύλινα. Στην Κύπρο πολλοί τα λένε «κιόσκια». Από μέσα έβλεπες όλο τον δρόμο χωρίς να σε βλέπουν, και το καλοκαίρι έμπαινε από τα παραθυράκια τους λίγη δροσιά.',
          en: 'They are wooden. Many Cypriots call them kioskia. From inside you could watch the whole street without being seen, and in summer a little breeze came in through their small windows.',
        },
      },
      story: {
        el: 'Τα σπίτια εδώ είναι πάνω από 200 χρόνων, από τα χρόνια των Οθωμανών και των Βρετανών. Κάποτε ήταν ετοιμόρροπα, αλλά τη δεκαετία του 1980 η πόλη τα επισκεύασε ένα ένα, έκλεισε τα σοκάκια για τα αυτοκίνητα και τα γέμισε εργαστήρια, μαγαζάκια και ταβέρνες. Οι τοίχοι είναι από κίτρινη πουρόπετρα και τα ξύλινα μπαλκόνια σκύβουν πάνω από τον δρόμο. Εδώ θα δοκιμάσεις ό,τι πιο νόστιμο έχει η Κύπρος: χαλλούμι, το τυρί που ψήνεται στη σχάρα χωρίς να λιώνει, λουκουμάδες, ζεστές μπαλίτσες ζύμης με μέλι, και σιουσιούκκο (σουτζούκι), ένα γλυκό «σχοινί» από μούστο και αμύγδαλα. Μια γειτονιά που έζησε δεύτερη φορά. Και μυρίζει υπέροχα!',
        en: 'The houses here are more than 200 years old, from Ottoman and British times. They were once falling apart, but in the 1980s the city repaired them one by one, closed the lanes to cars and filled them with workshops, little shops and tavernas. The walls are of yellow sandstone, and the wooden balconies lean out over the street. Here you can try the tastiest things Cyprus has: halloumi, the cheese that can be grilled without melting; loukoumades, hot little balls of dough with honey; and soutzoukos, a sweet "rope" made of grape juice and almonds. A neighbourhood that got a second life. And it smells wonderful!',
      },
      didYouKnow: {
        el: 'Το χαλλούμι, που θα βρείτε σε κάθε ταβέρνα εδώ, πήρε το 2021 από την Ευρωπαϊκή Ένωση Προστατευόμενη Ονομασία Προέλευσης: μόνο τυρί που παράγεται στην Κύπρο με την παραδοσιακή συνταγή μπορεί να λέγεται έτσι. Ψήνεται χωρίς να λιώνει επειδή το τυρόπηγμα ζεματίζεται στον ορό του, κάτι που «κλειδώνει» τις πρωτεΐνες του.',
        en: 'Halloumi, which you will find in every taverna here, was granted Protected Designation of Origin status by the European Union in 2021: only cheese made in Cyprus by the traditional recipe may carry the name. It can be grilled without melting because the curd is scalded in its own whey, which "locks" its proteins.',
      },
      quiz: [
        {
          q: { el: 'Πότε επισκεύασε η πόλη τα παλιά σπίτια της γειτονιάς;', en: 'When did the city repair the old houses of the quarter?' },
          options: {
            el: ['Το 1567', 'Το 1812', 'Το 1960', 'Τη δεκαετία του 1980'],
            en: ['In 1567', 'In 1812', 'In 1960', 'In the 1980s'],
          },
          correct: 3,
          explanation: {
            el: 'Τη δεκαετία του 1980 η πόλη επισκεύασε τα σπίτια, έκλεισε τα σοκάκια για τα αυτοκίνητα και τα γέμισε μαγαζάκια.',
            en: 'In the 1980s the city repaired the houses, closed the lanes to cars and filled them with little shops.',
          },
        },
        {
          q: { el: 'Ποιο κυπριακό τυρί ψήνεται στη σχάρα χωρίς να λιώνει;', en: 'Which Cypriot cheese can be grilled without melting?' },
          options: {
            el: ['Το χαλλούμι', 'Η φέτα', 'Το μπλε τυρί', 'Το κασέρι'],
            en: ['Halloumi', 'Feta', 'Blue cheese', 'Kasseri'],
          },
          correct: 0,
          explanation: {
            el: 'Το χαλλούμι είναι το πιο διάσημο τυρί της Κύπρου και ψήνεται στη σχάρα ή στο τηγάνι χωρίς να λιώνει.',
            en: 'Halloumi is the most famous cheese of Cyprus, and it can be grilled or fried without melting.',
          },
        },
        {
          q: { el: 'Τι είναι οι λουκουμάδες;', en: 'What are loukoumades?' },
          options: {
            el: ['Μικρά ψωμάκια με ελιές', 'Αλμυρά μπισκότα', 'Ζεστές μπαλίτσες ζύμης με μέλι', 'Ένα είδος παγωτού'],
            en: ['Small olive rolls', 'Salty biscuits', 'Hot little balls of dough with honey', 'A kind of ice cream'],
          },
          correct: 2,
          explanation: {
            el: 'Οι λουκουμάδες είναι τηγανητές μπαλίτσες ζύμης, περιχυμένες με μέλι ή σιρόπι. Η WiseBot σου χρωστάει ένα πιάτο!',
            en: 'Loukoumades are fried little balls of dough, drizzled with honey or syrup. WiseBot owes you a plate!',
          },
        },
      ],
    },

    // ── 7. Οδός Λήδρας ───────────────────────────────────────────────────────
    {
      id: 'ledra-street',
      name: { el: 'Οδός Λήδρας', en: 'Ledra Street' },
      emoji: '🛍️',
      lat: 35.1733,
      lng: 33.3613,
      radiusM: 60,
      riddle: {
        el: 'Ο πιο πολυσύχναστος δρόμος της παλιάς πόλης δεν έχει ούτε ένα αυτοκίνητο, μόνο μαγαζιά και περαστικούς. Στη μέση του υψώνεται ένας πύργος που βλέπει όλη την πόλη, και στην άκρη του ο δρόμος φτάνει σε μια γραμμή όπου δείχνεις ταυτότητα για να συνεχίσεις.',
        en: 'The busiest street of the old town has not a single car, only shops and people strolling. Halfway along rises a tower that can see the whole city, and at its far end the street reaches a line where you show your ID to keep walking.',
      },
      parentHint: {
        el: 'Είναι η οδός Λήδρας, ο πεζόδρομος με τα μαγαζιά που ξεκινά από την Πλατεία Ελευθερίας και πηγαίνει βόρεια. Από τη Λαϊκή Γειτονιά βγείτε στην Ονασαγόρου και περάστε στη Λήδρας, δύο λεπτά. Σταθείτε κοντά στον ψηλό Πύργο Σιακόλα, στη γωνία με την οδό Αρσινόης, περίπου στη μέση του δρόμου. Το σημείο διέλευσης είναι στη βόρεια άκρη, 300 μέτρα πιο κάτω: μπορείτε να πάτε μέχρι εκεί και να κοιτάξετε. Για να περάσει κανείς χρειάζεται διαβατήριο ή ταυτότητα.',
        en: 'Ledra Street, the pedestrian shopping street running north from Eleftheria Square. From Laiki Geitonia come out onto Onasagorou and cross into Ledra Street, two minutes. Stand near the tall Shacolas Tower, at the corner with Arsinois Street, roughly halfway along. The crossing point is at the north end, 300 metres further: you can walk up to it and look. Going through requires a passport or ID card.',
      },
      unlockQuestion: {
        question: { el: 'Ο δρόμος αυτός λέγεται «Λήδρας». Από πού πήρε το όνομά του;', en: 'This street is called Ledra Street. Where does its name come from?' },
        options: {
          el: ['Από ένα λουλούδι', 'Από την αρχαία πόλη Λήδρα, που υπήρχε εδώ πριν από τη Λευκωσία', 'Από έναν Βρετανό βασιλιά', 'Από ένα είδος ψωμιού'],
          en: ['From a flower', 'From the ancient city of Ledra, which stood here before Nicosia', 'From a British king', 'From a kind of bread'],
        },
        correct: 1,
        explanation: {
          el: 'Πριν από περίπου 3.000 χρόνια εδώ υπήρχε μια μικρή αρχαία πόλη που λεγόταν Λήδρα. Η Λευκωσία μεγάλωσε πάνω της, και ο πιο παλιός δρόμος της πήρε το όνομά της.',
          en: 'About 3,000 years ago a small ancient city called Ledra stood here. Nicosia grew on top of it, and its oldest street took its name.',
        },
      },
      onSite: {
        question: { el: 'Βρες το πιο ψηλό κτίριο του δρόμου, αυτό που μοιάζει με πύργο. Μέτρησε τους ορόφους του. Περίπου πόσοι είναι;', en: 'Find the tallest building on the street, the one that looks like a tower. Count its floors. About how many are there?' },
        options: {
          el: ['Περίπου 3', 'Περίπου 6', 'Περίπου 11', 'Περίπου 30'],
          en: ['About 3', 'About 6', 'About 11', 'About 30'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Πύργος Σιακόλα έχει έντεκα ορόφους. Στον τελευταίο υπάρχει ένα παρατηρητήριο, από όπου βλέπεις ολόκληρη τη Λευκωσία, και το νότιο και το βόρειο κομμάτι, μέχρι τα βουνά.',
          en: 'The Shacolas Tower has eleven floors. On the top one there is an observatory from which you can see all of Nicosia, both the southern and the northern part, all the way to the mountains.',
        },
      },
      story: {
        el: 'Εδώ και εκατοντάδες χρόνια, από τα χρόνια των Οθωμανών, αυτός είναι ο δρόμος της αγοράς. Παλιά είχε παζάρια με υφάσματα και μπαχαρικά, σήμερα έχει μαγαζιά, καφέ και παγωτά, και είναι πεζόδρομος, χωρίς κανένα αυτοκίνητο. Το όνομά του έρχεται από τη Λήδρα, την αρχαία πόλη που υπήρχε εδώ πριν από τη Λευκωσία. Στη μέση του στέκεται ένας πύργος με έντεκα ορόφους και παρατηρητήριο στην κορυφή. Από το 1974 μια γραμμή χωρίζει τη Λευκωσία στα δύο: στο νότιο μέρος ζουν κυρίως Ελληνοκύπριοι και στο βόρειο κυρίως Τουρκοκύπριοι, και ανάμεσα υπάρχει μια λωρίδα που τη φυλάνε στρατιώτες του ΟΗΕ με γαλάζιους μπερέδες. Για πολλά χρόνια ο δρόμος ήταν κλειστός σε αυτό το σημείο. Το 2008 άνοιξε ένα πέρασμα, και τώρα οι άνθρωποι περνούν με την ταυτότητά τους. Όλοι ελπίζουν πως μια μέρα η πόλη θα είναι πάλι ολόκληρη.',
        en: 'For hundreds of years, since Ottoman times, this has been the market street. Long ago it had bazaars selling cloth and spices; today it has shops, cafés and ice cream, and it is pedestrian only, with no cars at all. Its name comes from Ledra, the ancient city that stood here before Nicosia. Halfway along stands a tower with eleven floors and an observatory at the top. Since 1974 a line has divided Nicosia in two: Greek Cypriots live mostly in the southern part and Turkish Cypriots mostly in the northern, and in between lies a strip guarded by United Nations soldiers in blue berets. For many years the street was closed at this point. In 2008 a crossing opened, and now people walk through with their ID cards. Everyone hopes that one day the city will be whole again.',
      },
      didYouKnow: {
        el: 'Το πέρασμα της οδού Λήδρας άνοιξε στις 3 Απριλίου 2008, ενώ ο δρόμος ήταν κλειστός σε αυτό το σημείο από τη δεκαετία του 1960. Η νεκρή ζώνη διασχίζει όλο το νησί, περίπου 180 χιλιόμετρα, και μέσα στην παλιά Λευκωσία στενεύει σε λίγα μόλις μέτρα: σε κάποια σοκάκια μπορείς να δεις τα δύο οδοφράγματα με ένα βλέμμα.',
        en: 'The Ledra Street crossing opened on 3 April 2008; the street had been closed at this point since the 1960s. The buffer zone runs across the whole island, roughly 180 kilometres, and inside old Nicosia it narrows to just a few metres: in some lanes you can see both checkpoints in a single glance.',
      },
      quiz: [
        {
          q: { el: 'Ποια οχήματα περνούν από την οδό Λήδρας;', en: 'Which vehicles use Ledra Street?' },
          options: {
            el: ['Λεωφορεία', 'Κανένα, είναι πεζόδρομος', 'Τρένα', 'Φορτηγά'],
            en: ['Buses', 'None, it is for walkers only', 'Trains', 'Lorries'],
          },
          correct: 1,
          explanation: {
            el: 'Η οδός Λήδρας είναι πεζόδρομος: μόνο άνθρωποι που περπατούν, μαγαζιά και καφέ.',
            en: 'Ledra Street is pedestrian only: just people walking, shops and cafés.',
          },
        },
        {
          q: { el: 'Τι μπορείς να κάνεις στην κορυφή του ψηλού πύργου;', en: 'What can you do at the top of the tall tower?' },
          options: {
            el: ['Να κολυμπήσεις', 'Να πάρεις το τρένο', 'Να κοιμηθείς σε σκηνή', 'Να δεις όλη την πόλη από ψηλά'],
            en: ['Go swimming', 'Catch a train', 'Sleep in a tent', 'See the whole city from above'],
          },
          correct: 3,
          explanation: {
            el: 'Στον τελευταίο όροφο του πύργου υπάρχει παρατηρητήριο, από όπου βλέπεις όλη τη Λευκωσία μέχρι τα βουνά.',
            en: 'On the top floor of the tower there is an observatory, from which you can see all of Nicosia as far as the mountains.',
          },
        },
        {
          q: { el: 'Τι έγινε στη βόρεια άκρη του δρόμου το 2008;', en: 'What happened at the north end of the street in 2008?' },
          options: {
            el: ['Άνοιξε ένα πέρασμα και οι άνθρωποι μπορούν πάλι να περνούν', 'Χτίστηκε ένας ψηλός πύργος', 'Έγινε παραλία', 'Έκλεισε ο δρόμος για τα αυτοκίνητα'],
            en: ['A crossing opened and people can walk through again', 'A tall tower was built', 'A beach was made', 'The street was closed to cars'],
          },
          correct: 0,
          explanation: {
            el: 'Το 2008 άνοιξε το πέρασμα της Λήδρας, και οι άνθρωποι περνούν από τη μία πλευρά της πόλης στην άλλη με την ταυτότητά τους.',
            en: 'In 2008 the Ledra crossing opened, and people walk from one side of the city to the other with their ID cards.',
          },
        },
      ],
    },

    // ── 8. Φανερωμένη ────────────────────────────────────────────────────────
    {
      id: 'faneromeni',
      name: { el: 'Πλατεία Φανερωμένης', en: 'Faneromeni Square' },
      emoji: '🔔',
      lat: 35.1748,
      lng: 33.3597,
      radiusM: 40,
      riddle: {
        el: 'Η μεγαλύτερη εκκλησία της παλιάς πόλης χτίστηκε με πέτρες από ένα παλιό κάστρο. Δίπλα της, ένα κατάλευκο μαρμάρινο μνημείο και ένα από τα πρώτα σχολεία για κορίτσια της Κύπρου κοιτούν μια πλατεία γεμάτη καφενεία.',
        en: 'The biggest church of the old town was built with stones from an old castle. Beside it, a snow-white marble monument and one of the first girls\' schools in Cyprus look out onto a square full of cafés.',
      },
      parentHint: {
        el: 'Είναι η Φανερωμένη, δυτικά της οδού Λήδρας. Από τον Πύργο Σιακόλα περπατήστε ένα λεπτό βόρεια στη Λήδρας, στρίψτε αριστερά στην οδό Φανερωμένης (ή σε όποιο σοκάκι πηγαίνει δυτικά) και σε περίπου 150 μέτρα φτάνετε στην πλατεία με τη μεγάλη εκκλησία. Το μαρμάρινο μαυσωλείο είναι δίπλα στην εκκλησία και το παλιό Παρθεναγωγείο απέναντι.',
        en: 'Faneromeni, west of Ledra Street. From the Shacolas Tower walk north along Ledra for a minute, turn left into Faneromenis Street (or any lane heading west), and in about 150 metres you reach the square with the big church. The marble mausoleum stands beside the church, the old girls\' school across from it.',
      },
      unlockQuestion: {
        question: { el: 'Η εκκλησία λέγεται «Παναγία Φανερωμένη». Σε ποιον είναι αφιερωμένη;', en: 'The church is called Panagia Faneromeni. Who is it dedicated to?' },
        options: {
          el: ['Στον Άγιο Ιωάννη', 'Στην Παναγία, τη μητέρα του Χριστού', 'Στον Άγιο Λάζαρο', 'Στον Απόστολο Βαρνάβα'],
          en: ['Saint John', 'The Virgin Mary, the mother of Christ', 'Saint Lazarus', 'The Apostle Barnabas'],
        },
        correct: 1,
        explanation: {
          el: '«Παναγία» είναι η Μαρία, η μητέρα του Χριστού, και «Φανερωμένη» σημαίνει «αυτή που φανερώθηκε». Λένε πως μια εικόνα της βρέθηκε εδώ σαν από θαύμα, και έτσι ονομάστηκε η εκκλησία.',
          en: 'Panagia is Mary, the mother of Christ, and Faneromeni means "the one who was revealed". The story goes that an icon of her was found here as if by a miracle, and that is how the church got its name.',
        },
      },
      onSite: {
        question: { el: 'Βρες το μνημείο-τάφο δίπλα στην εκκλησία. Από τι είναι φτιαγμένο;', en: 'Find the tomb-monument beside the church. What is it made of?' },
        options: {
          el: ['Από κόκκινο τούβλο', 'Από ξύλο', 'Από άσπρο μάρμαρο', 'Από γυαλί'],
          en: ['Red brick', 'Wood', 'White marble', 'Glass'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι ένα μαυσωλείο από άσπρο μάρμαρο, χτισμένο το 1930. Μέσα του φυλάγονται τα οστά του Αρχιεπισκόπου Κυπριανού, που ίδρυσε το Παγκύπριο Γυμνάσιο, και άλλων αρχηγών της Εκκλησίας που έχασαν τη ζωή τους το 1821.',
          en: 'It is a mausoleum of white marble, built in 1930. It holds the bones of Archbishop Kyprianos, who founded the Pancyprian Gymnasium, and of other Church leaders who lost their lives in 1821.',
        },
      },
      story: {
        el: 'Η Φανερωμένη είναι η πιο μεγάλη εκκλησία μέσα στα τείχη. Χτίστηκε το 1872 στη θέση μιας παλιότερης, μικρότερης εκκλησίας. Οι χτίστες χρησιμοποίησαν πέτρες από την παλιά εκκλησία, αλλά και από ένα γκρεμισμένο κάστρο των Λουζινιανών, της γαλλικής οικογένειας που ήταν βασιλιάδες της Κύπρου για 300 χρόνια. Έτσι μέσα στους τοίχους της κρύβονται πέτρες από τον Μεσαίωνα. Δίπλα της, το άσπρο μαρμάρινο μνημείο θυμίζει τον Αρχιεπίσκοπο Κυπριανό και άλλους αρχηγούς που έχασαν τη ζωή τους το 1821, μια πολύ δύσκολη χρονιά. Απέναντι, το Παρθεναγωγείο άνοιξε το 1857 και ήταν από τα πρώτα σχολεία για κορίτσια σε όλη την Κύπρο. Σήμερα η πλατεία είναι γεμάτη καφενεία και παιδιά που παίζουν.',
        en: 'Faneromeni is the biggest church inside the walls. It was built in 1872 on the site of an older, smaller church. The builders used stones from the old church, but also from a ruined castle of the Lusignans, the French family who were kings of Cyprus for 300 years. So stones from the Middle Ages are hidden inside its walls. Beside it, the white marble monument remembers Archbishop Kyprianos and other leaders who lost their lives in 1821, a very hard year. Across the square, the girls\' school opened in 1857 and was one of the first schools for girls in all of Cyprus. Today the square is full of cafés and children playing.',
      },
      didYouKnow: {
        el: 'Το μαυσωλείο χτίστηκε το 1930 για να δεχτεί τα οστά του Αρχιεπισκόπου Κυπριανού και των επισκόπων που εκτελέστηκαν τον Ιούλιο του 1821, λίγους μήνες μετά την έναρξη της Ελληνικής Επανάστασης. Η πλατεία της Φανερωμένης, με το σχολείο, την εκκλησία και τη μικρή βιβλιοθήκη της από τη δεκαετία του 1930, ήταν για έναν αιώνα το πνευματικό κέντρο της ελληνοκυπριακής Λευκωσίας.',
        en: 'The mausoleum was built in 1930 to receive the remains of Archbishop Kyprianos and the bishops executed in July 1821, a few months after the Greek War of Independence began. Faneromeni Square, with its school, its church and its small library from the 1930s, was for a century the intellectual heart of Greek-Cypriot Nicosia.',
      },
      quiz: [
        {
          q: { el: 'Από πού ήρθαν μερικές από τις πέτρες της εκκλησίας;', en: 'Where did some of the church\'s stones come from?' },
          options: {
            el: ['Από τη θάλασσα', 'Από το φεγγάρι', 'Από ένα παλιό κάστρο των Λουζινιανών', 'Από την Αθήνα'],
            en: ['From the sea', 'From the moon', 'From an old castle of the Lusignans', 'From Athens'],
          },
          correct: 2,
          explanation: {
            el: 'Οι χτίστες πήραν πέτρες από την παλιότερη εκκλησία και από ένα γκρεμισμένο κάστρο των Λουζινιανών βασιλιάδων.',
            en: 'The builders took stones from the older church and from a ruined castle of the Lusignan kings.',
          },
        },
        {
          q: { el: 'Ποιον αρχιεπίσκοπο, ιδρυτή του μεγάλου σχολείου, θυμίζει το μαρμάρινο μνημείο;', en: 'Which archbishop, founder of the big school, does the marble monument remember?' },
          options: {
            el: ['Τον Μακάριο', 'Τον Κυπριανό', 'Τον Νικηφόρο', 'Τον Βαρνάβα'],
            en: ['Makarios', 'Kyprianos', 'Nikiforos', 'Barnabas'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Αρχιεπίσκοπος Κυπριανός, που άνοιξε το Παγκύπριο Γυμνάσιο το 1812, έχασε τη ζωή του το 1821 και τιμάται εδώ.',
            en: 'Archbishop Kyprianos, who opened the Pancyprian Gymnasium in 1812, lost his life in 1821 and is honoured here.',
          },
        },
        {
          q: { el: 'Ποιοι πήγαιναν στο σχολείο απέναντι από την εκκλησία, όταν άνοιξε το 1857;', en: 'Who went to the school across from the church when it opened in 1857?' },
          options: {
            el: ['Μόνο αγόρια', 'Στρατιώτες', 'Μόνο δάσκαλοι', 'Κορίτσια'],
            en: ['Only boys', 'Soldiers', 'Only teachers', 'Girls'],
          },
          correct: 3,
          explanation: {
            el: 'Ήταν Παρθεναγωγείο, σχολείο για κορίτσια, από τα πρώτα στην Κύπρο.',
            en: 'It was a girls\' school, one of the first in Cyprus.',
          },
        },
      ],
    },

    // ── 9. Ομεριέ ────────────────────────────────────────────────────────────
    {
      id: 'omeriye',
      name: { el: 'Τζαμί & Χαμάμ Ομεριέ', en: 'Omeriye Mosque & Hammam' },
      emoji: '🕌',
      lat: 35.1712,
      lng: 33.3661,
      radiusM: 60,
      riddle: {
        el: 'Ένας ψηλός, λεπτός πύργος ξεφυτρώνει από ένα κτίριο με μυτερές πόρτες, που πριν από 700 χρόνια ήταν εκκλησία. Απέναντι, κάτω από στρογγυλούς θόλους, οι άνθρωποι κάνουν ακόμα ζεστό μπάνιο με ατμό.',
        en: 'A tall, thin tower springs from a building with pointed doorways that was a church 700 years ago. Across the way, under round domes, people still take hot steam baths.',
      },
      parentHint: {
        el: 'Είναι το Τζαμί Ομεριέ και το Χαμάμ Ομεριέ, στην πλατεία Τυλληρίας, στο νοτιοανατολικό μέρος της παλιάς πόλης. Από τη Φανερωμένη γυρίστε στη Λήδρας, περπατήστε νότια προς την Πλατεία Ελευθερίας, στρίψτε αριστερά (ανατολικά) στην οδό Τρικούπη και ακολουθήστε την για περίπου 5 λεπτά. Ο μιναρές φαίνεται μπροστά σας. Σταθείτε στην πλατεία ανάμεσα στο τζαμί και στα λουτρά.',
        en: 'The Omeriye Mosque and the Omeriye Hammam on Tyllirias Square, in the south-east of the old town. From Faneromeni return to Ledra Street, walk south towards Eleftheria Square, turn left (east) into Trikoupi Street and follow it for about 5 minutes. The minaret appears ahead of you. Stand in the square between the mosque and the baths.',
      },
      unlockQuestion: {
        question: { el: 'Τι ήταν αυτό το κτίριο πριν γίνει τζαμί;', en: 'What was this building before it became a mosque?' },
        options: {
          el: ['Ένα κάστρο', 'Μια εκκλησία', 'Ένα σχολείο', 'Μια αγορά'],
          en: ['A castle', 'A church', 'A school', 'A market'],
        },
        correct: 1,
        explanation: {
          el: 'Ήταν η εκκλησία της Παναγίας, που έχτισαν μοναχοί τον 14ο αιώνα, στα χρόνια των Λουζινιανών. Το 1571 έγινε τζαμί, δηλαδή χώρος όπου προσεύχονται οι μουσουλμάνοι.',
          en: 'It was the church of St Mary, built by monks in the 14th century, in Lusignan times. In 1571 it became a mosque, a place where Muslims pray.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα τη μεγάλη πόρτα του τζαμιού. Τι σχήμα έχει η κορυφή της καμάρας;', en: 'Look at the big doorway of the mosque. What shape is the top of the arch?' },
        options: {
          el: ['Ίσια, σαν πόρτα σπιτιού', 'Στρογγυλή, σαν μισοφέγγαρο', 'Μυτερή, σαν την άκρη ενός βέλους', 'Τριγωνική, σαν στέγη'],
          en: ['Straight, like a house door', 'Round, like a half-moon', 'Pointed, like the tip of an arrow', 'Triangular, like a roof'],
        },
        correct: 2,
        explanation: {
          el: 'Η καμάρα είναι μυτερή. Αυτός ο ρυθμός λέγεται γοτθικός και τον έφεραν από τη Γαλλία οι Λουζινιανοί. Οι μεγάλες εκκλησίες του Παρισιού έχουν ακριβώς τέτοιες μυτερές καμάρες. Οι πόρτες έμειναν ίδιες όταν το κτίριο έγινε τζαμί.',
          en: 'The arch is pointed. This style is called Gothic, and the Lusignans brought it from France. The great churches of Paris have exactly the same pointed arches. The doorways stayed as they were when the building became a mosque.',
        },
      },
      story: {
        el: 'Πριν από 700 χρόνια, όταν βασιλιάδες της Κύπρου ήταν οι Λουζινιανοί από τη Γαλλία, μοναχοί έχτισαν εδώ μια μεγάλη εκκλησία της Παναγίας με μυτερές καμάρες. Το 1570 η εκκλησία έπαθε μεγάλες ζημιές, όταν ο οθωμανικός στρατός πήρε την πόλη. Τον επόμενο χρόνο έγινε τζαμί, δηλαδή χώρος προσευχής των μουσουλμάνων, και δίπλα της υψώθηκε ο μιναρές, ο ψηλός λεπτός πύργος από όπου ακούγεται το κάλεσμα για προσευχή. Ονομάστηκε Ομεριέ επειδή οι άνθρωποι πίστευαν πως αιώνες πριν είχε ξεκουραστεί εδώ ο χαλίφης Ομάρ. Απέναντι, εκεί όπου ήταν το μοναστήρι, οι Οθωμανοί έχτισαν το χαμάμ, ένα λουτρό με θόλους και ζεστό ατμό, που λειτουργεί ακόμα σήμερα. Μια γαλλική εκκλησία, ένα τζαμί και ένα λουτρό, όλα σε μία πλατεία: αυτή είναι η Λευκωσία!',
        en: 'Seven hundred years ago, when the kings of Cyprus were the Lusignans from France, monks built a big church of St Mary here, with pointed arches. In 1570 the church was badly damaged when the Ottoman army took the city. The following year it became a mosque, a place of prayer for Muslims, and next to it rose the minaret, the tall thin tower from which the call to prayer is heard. It was named Omeriye because people believed that centuries earlier the caliph Omar had rested here. Across the square, where the monastery stood, the Ottomans built the hammam, a bathhouse with domes and hot steam, which is still working today. A French church, a mosque and a bathhouse, all on one square: that is Nicosia!',
      },
      didYouKnow: {
        el: 'Το Χαμάμ Ομεριέ, του 16ου αιώνα, αναστηλώθηκε το 2003 με 2004 και κέρδισε το 2006 βραβείο Europa Nostra, την πιο σημαντική ευρωπαϊκή διάκριση για την πολιτιστική κληρονομιά. Το τζαμί λειτουργεί κανονικά μέχρι σήμερα, και στο δάπεδό του χρησιμοποιήθηκαν παλιές ταφόπλακες από τα χρόνια των Λουζινιανών.',
        en: 'The 16th-century Omeriye Hammam was restored in 2003 to 2004 and won a Europa Nostra award in 2006, Europe\'s top prize for cultural heritage. The mosque is still in regular use today, and old gravestones from Lusignan times were used to pave its floor.',
      },
      quiz: [
        {
          q: { el: 'Ποιοι έχτισαν την αρχική εκκλησία πριν από 700 χρόνια;', en: 'Who built the original church 700 years ago?' },
          options: {
            el: ['Μοναχοί, στα χρόνια των Λουζινιανών βασιλιάδων', 'Οι Βρετανοί', 'Οι αρχαίοι Ρωμαίοι', 'Ο Μακάριος'],
            en: ['Monks, in the time of the Lusignan kings', 'The British', 'The ancient Romans', 'Makarios'],
          },
          correct: 0,
          explanation: {
            el: 'Μοναχοί την έχτισαν τον 14ο αιώνα, όταν την Κύπρο την κυβερνούσαν οι Λουζινιανοί από τη Γαλλία.',
            en: 'Monks built it in the 14th century, when Cyprus was ruled by the Lusignans from France.',
          },
        },
        {
          q: { el: 'Πώς λέγεται ο ψηλός λεπτός πύργος δίπλα στο τζαμί;', en: 'What is the tall thin tower next to the mosque called?' },
          options: {
            el: ['Καμπαναριό', 'Φάρος', 'Καμινάδα', 'Μιναρές'],
            en: ['Bell tower', 'Lighthouse', 'Chimney', 'Minaret'],
          },
          correct: 3,
          explanation: {
            el: 'Ο μιναρές είναι ο πύργος του τζαμιού, από όπου ακούγεται το κάλεσμα για προσευχή.',
            en: 'The minaret is the tower of a mosque, from which the call to prayer is heard.',
          },
        },
        {
          q: { el: 'Τι γίνεται ακόμα σήμερα μέσα στο χαμάμ;', en: 'What still happens inside the hammam today?' },
          options: {
            el: ['Μαθήματα σχολείου', 'Ζεστά μπάνια με ατμό', 'Αγώνες ποδοσφαίρου', 'Τίποτα, είναι ερείπιο'],
            en: ['School lessons', 'Hot steam baths', 'Football matches', 'Nothing, it is a ruin'],
          },
          correct: 1,
          explanation: {
            el: 'Το χαμάμ είναι λουτρό με ζεστό ατμό και λειτουργεί ακόμα, εδώ και εκατοντάδες χρόνια.',
            en: 'The hammam is a steam bathhouse and it is still working, as it has for hundreds of years.',
          },
        },
      ],
    },

    // ── 10. Δημοτικός Κήπος & Κυπριακό Μουσείο ───────────────────────────────
    {
      id: 'municipal-gardens',
      name: { el: 'Δημοτικός Κήπος & Κυπριακό Μουσείο', en: 'Municipal Gardens & Cyprus Museum' },
      emoji: '🌴',
      lat: 35.1712,
      lng: 33.3563,
      radiusM: 60,
      riddle: {
        el: 'Έξω από τα τείχη, ψηλοί φοίνικες και πεύκα ρίχνουν σκιά στον πιο παλιό κήπο της πόλης. Δίπλα του, ένα κτίριο με κολόνες φυλάει 2.000 πήλινα ανθρωπάκια που στέκονται σε ημικύκλιο, όπως τα βρήκαν μέσα στο χώμα.',
        en: 'Outside the walls, tall palms and pines shade the oldest garden in the city. Next to it, a building with columns keeps 2,000 little clay people standing in a half-circle, just as they were found in the ground.',
      },
      parentHint: {
        el: 'Είναι ο Δημοτικός Κήπος και το Κυπριακό Μουσείο, στην οδό Μουσείου, ακριβώς έξω από τα τείχη κοντά στην Πύλη Πάφου. Από το Ομεριέ γυρίστε δυτικά προς την Πλατεία Ελευθερίας (περίπου 10 λεπτά) και μετά ακολουθήστε την τάφρο από την έξω πλευρά των τειχών (λεωφόρος Ομήρου και έπειτα οδός Μουσείου) για άλλα 10 λεπτά. Ο κήπος είναι στα αριστερά σας και η είσοδος του μουσείου με τις κολόνες στην άκρη, δίπλα στο Δημοτικό Θέατρο. Σταθείτε στην πύλη του κήπου κοιτώντας το μουσείο.',
        en: 'The Municipal Gardens and the Cyprus Museum, on Museum Street just outside the walls near Paphos Gate. From Omeriye head west back to Eleftheria Square (about 10 minutes), then follow the moat along the outside of the walls (Omirou Avenue, then Museum Street) for another 10 minutes. The gardens are on your left and the museum\'s columned entrance is at the far end, next to the Municipal Theatre. Stand at the garden gate facing the museum.',
      },
      unlockQuestion: {
        question: { el: 'Τι είδους μουσείο είναι το Κυπριακό Μουσείο;', en: 'What kind of museum is the Cyprus Museum?' },
        options: {
          el: ['Μουσείο αυτοκινήτων', 'Αρχαιολογικό μουσείο, με πράγματα που βγήκαν από το χώμα της Κύπρου', 'Μουσείο ζωγραφικής', 'Μουσείο παιχνιδιών'],
          en: ['A car museum', 'An archaeological museum, with things dug out of the soil of Cyprus', 'A painting museum', 'A toy museum'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι το πιο παλιό και το πιο μεγάλο αρχαιολογικό μουσείο της Κύπρου. Φυλάει αγάλματα, αγγεία και εργαλεία που βρήκαν οι αρχαιολόγοι σε όλο το νησί, μερικά πάνω από 9.000 χρόνων.',
          en: 'It is the oldest and largest archaeological museum in Cyprus. It keeps statues, pots and tools that archaeologists found all over the island, some of them more than 9,000 years old.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα την είσοδο του μουσείου. Τι στέκεται μπροστά στην πόρτα του;', en: 'Look at the entrance of the museum. What stands in front of its door?' },
        options: {
          el: ['Μια σιδερένια γέφυρα', 'Ψηλές πέτρινες κολόνες', 'Ένας μεγάλος γυάλινος τοίχος', 'Δύο μαρμάρινα λιοντάρια'],
          en: ['An iron bridge', 'Tall stone columns', 'A big glass wall', 'Two marble lions'],
        },
        correct: 1,
        explanation: {
          el: 'Η είσοδος έχει ψηλές κολόνες που κρατούν μια στέγη, όπως οι αρχαίοι ναοί. Αυτός ο ρυθμός λέγεται νεοκλασικός: «νέο» επειδή το κτίριο είναι μόλις 100 χρόνων και «κλασικός» επειδή αντιγράφει τους ναούς των αρχαίων Ελλήνων.',
          en: 'The entrance has tall columns holding up a roof, just like ancient temples. This style is called neoclassical: "neo" because the building is only about 100 years old, and "classical" because it copies the temples of the ancient Greeks.',
        },
      },
      story: {
        el: 'Ο κήπος αυτός είναι ο πιο παλιός δημόσιος κήπος της Λευκωσίας, πάνω από εκατό χρόνων, από τα χρόνια των Βρετανών. Οι ψηλοί φοίνικες και τα πεύκα του δίνουν δροσιά ακριβώς έξω από τα τείχη, και δίπλα του βρίσκεται το θέατρο της πόλης. Το Κυπριακό Μουσείο ιδρύθηκε το 1882, όταν οι Κύπριοι ζήτησαν ένα σπίτι για τους θησαυρούς που έβγαιναν από το χώμα, ώστε να μη φεύγουν στο εξωτερικό. Μέσα του θα δεις τη μαρμάρινη Αφροδίτη από τους Σόλους, τη θεά που, όπως λέει ο μύθος, γεννήθηκε από τον αφρό της κυπριακής θάλασσας. Θα δεις και 2.000 πήλινα αγαλματάκια από την Αγία Ειρήνη: πολεμιστές, άρματα και ζώα, που στέκονταν σε ημικύκλιο γύρω από έναν βωμό όταν τα ανακάλυψαν το 1929. Το τέλος του κυνηγιού μας είναι η αρχή της ιστορίας της Κύπρου!',
        en: 'This is the oldest public garden in Nicosia, more than a hundred years old, from British times. Its tall palms and pines give shade right outside the walls, and the city theatre stands beside it. The Cyprus Museum was founded in 1882, when Cypriots asked for a home for the treasures coming out of the ground, so they would stop leaving the island. Inside you will see the marble Aphrodite from Soloi, the goddess who, as the myth says, was born from the foam of the Cypriot sea. You will also see 2,000 little clay figures from Agia Irini: warriors, chariots and animals, which stood in a half-circle around an altar when they were discovered in 1929. The end of our hunt is the beginning of the story of Cyprus!',
      },
      didYouKnow: {
        el: 'Το σταυρόσχημο ειδώλιο του Πωμού, ένα λίθινο αγαλματάκι περίπου 5.000 χρόνων που εικονίζεται στα κυπριακά κέρματα του 1 και των 2 ευρώ, φυλάγεται σε αυτό το μουσείο. Το σημερινό νεοκλασικό κτίριο χτίστηκε στις αρχές του 20ού αιώνα, με χρήματα που μάζεψαν οι ίδιοι οι Κύπριοι, ως μνημείο για τη βασίλισσα Βικτωρία.',
        en: 'The cross-shaped Pomos idol, a stone figurine roughly 5,000 years old that appears on the Cypriot 1 and 2 euro coins, is kept in this museum. The present neoclassical building was put up in the early 20th century, with money raised by the Cypriots themselves, as a memorial to Queen Victoria.',
      },
      quiz: [
        {
          q: { el: 'Πόσα πήλινα αγαλματάκια από την Αγία Ειρήνη φυλάει το μουσείο;', en: 'How many little clay figures from Agia Irini does the museum keep?' },
          options: {
            el: ['Περίπου 20', 'Περίπου 200', 'Περίπου 2.000', 'Περίπου 2.000.000'],
            en: ['About 20', 'About 200', 'About 2,000', 'About 2,000,000'],
          },
          correct: 2,
          explanation: {
            el: 'Περίπου 2.000 αγαλματάκια, πολεμιστές, άρματα και ζώα, βρέθηκαν το 1929 σε ημικύκλιο γύρω από έναν βωμό.',
            en: 'About 2,000 little figures, warriors, chariots and animals, were found in 1929 standing in a half-circle around an altar.',
          },
        },
        {
          q: { el: 'Τι δίνει σκιά στον κήπο;', en: 'What gives shade in the garden?' },
          options: {
            el: ['Ψηλοί φοίνικες και πεύκα', 'Μεγάλες ομπρέλες', 'Μια γυάλινη στέγη', 'Οι σκιές των τειχών μόνο'],
            en: ['Tall palms and pines', 'Big umbrellas', 'A glass roof', 'Only the shadow of the walls'],
          },
          correct: 0,
          explanation: {
            el: 'Ο κήπος έχει ψηλούς φοίνικες και πεύκα, πάνω από εκατό χρόνων, ακριβώς έξω από τα τείχη.',
            en: 'The garden has tall palms and pines, more than a hundred years old, right outside the walls.',
          },
        },
        {
          q: { el: 'Από πότε υπάρχει το Κυπριακό Μουσείο;', en: 'Since when has the Cyprus Museum existed?' },
          options: {
            el: ['Από πέρσι', 'Από το 1960', 'Από τα χρόνια των Ενετών', 'Από το 1882, πάνω από 140 χρόνια'],
            en: ['Since last year', 'Since 1960', 'Since Venetian times', 'Since 1882, more than 140 years'],
          },
          correct: 3,
          explanation: {
            el: 'Το μουσείο ιδρύθηκε το 1882, για να μένουν οι αρχαίοι θησαυροί της Κύπρου στο νησί. Είναι το πιο παλιό μουσείο της Κύπρου.',
            en: 'The museum was founded in 1882, so that the ancient treasures of Cyprus would stay on the island. It is the oldest museum in Cyprus.',
          },
        },
      ],
    },
  ],
};
