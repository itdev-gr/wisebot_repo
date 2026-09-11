/**
 * WiseBot World — Delphi.
 *
 * Thirteen places, two of them museums with an interior. Delphi is the smallest place in
 * this module and the most spread out, because a sanctuary alone cannot fill a city: the
 * bounds reach the summit of Parnassus, the Corycian Cave, Galaxidi on the sea, the
 * castle hill of Amfissa and the monastery of Hosios Loukas.
 *
 * Every coordinate is copied from `data/world/coords/delphi.json`. Nothing graded `D`.
 * Three entries changed, and the reasons are in `scripts/world/seeds/delphi.json`:
 * Parnassus became its summit, Arachova was dropped, and the sanctuary of Athena Pronaia
 * gave way to the Tholos inside it, 17 m away.
 *
 * No anchor claims an entrance. No door here has been measured, so none is asserted.
 *
 * `el` and `en` only. The other four languages arrive as overlay files and never as
 * extra keys in this one.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------- the site
  {
    id: 'delphi-site',
    cityId: 'delphi',
    emoji: '🔮',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ιερό των Δελφών', en: 'The Sanctuary of Delphi' },
    tagline: {
      el: 'Ο τόπος που οι αρχαίοι θεωρούσαν κέντρο του κόσμου',
      en: 'The place the ancients believed was the centre of the world',
    },
    story: {
      el:
        'Ο μύθος λέει ότι ο Δίας άφησε δύο αετούς να πετάξουν από τις δύο άκρες της γης ' +
        'και ότι συναντήθηκαν ακριβώς εδώ. Γι’ αυτό οι Δελφοί ονομάστηκαν ομφαλός, ' +
        'δηλαδή κέντρο του κόσμου. Εδώ βρισκόταν το πιο ξακουστό μαντείο της ' +
        'αρχαιότητας. Πόλεις ολόκληρες έστελναν αντιπροσώπους για να ρωτήσουν αν πρέπει ' +
        'να κάνουν πόλεμο, να χτίσουν αποικία ή να αλλάξουν νόμους, και περίμεναν σε ' +
        'σειρά. Η Πυθία καθόταν πάνω σε τρίποδα μέσα στον ναό και μιλούσε, και οι ιερείς ' +
        'κατέγραφαν τα λόγια της. Οι απαντήσεις ήταν συχνά διφορούμενες, δηλαδή ' +
        'διαβάζονταν με δύο τρόπους, και αυτό ήταν χρήσιμο σε όλους. Στον τοίχο του ναού ' +
        'ήταν γραμμένες δύο φράσεις που έμειναν για πάντα: «Γνώθι σαυτόν», δηλαδή μάθε ' +
        'τον εαυτό σου, και «Μηδέν άγαν», δηλαδή τίποτα υπερβολικά.',
      en:
        'The myth says Zeus released two eagles from the two ends of the earth and that ' +
        'they met exactly here. That is why Delphi was called the omphalos, the navel of ' +
        'the world. This was the most famous oracle in the ancient world. Whole cities sent ' +
        'representatives to ask whether they should go to war, found a colony or change ' +
        'their laws, and they queued for it. The Pythia sat on a tripod inside the temple ' +
        'and spoke, and priests wrote down her words. The answers were often ambiguous, ' +
        'meaning they could be read two ways, and that was useful to everybody. Two ' +
        'sentences were written on the temple wall and have lasted ever since: "Know ' +
        'thyself", and "Nothing in excess".',
    },
    facts: [
      {
        el: 'Οι αρχαίοι το θεωρούσαν ομφαλό, δηλαδή κέντρο του κόσμου.',
        en: 'The ancients considered it the omphalos, the navel of the world.',
      },
      {
        el: 'Στον ναό ήταν γραμμένα το «Γνώθι σαυτόν» και το «Μηδέν άγαν».',
        en: '"Know thyself" and "Nothing in excess" were written on the temple.',
      },
      {
        el: 'Κάτω από τον ναό περνούν δύο ρήγματα, και γεωλόγοι έχουν βρει ίχνη αερίων.',
        en: 'Two geological faults cross under the temple, and geologists have found traces of gas.',
      },
    ],
    location: {
      lat: 38.48201,
      lng: 22.50022,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q17652439', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'Grade C: the archaeological-site item carries no OSM match and no Wikipedia coordinate of its own. The monuments inside it resolve separately and better.',
    },
    question: {
      q: {
        el: 'Γιατί ονόμασαν τους Δελφούς ομφαλό της γης;',
        en: 'Why was Delphi called the navel of the earth?',
      },
      answers: [
        {
          el: 'Γιατί εκεί συναντήθηκαν δύο αετοί του Δία',
          en: 'Because two eagles of Zeus met there',
        },
        { el: 'Γιατί είναι το γεωγραφικό κέντρο της Ελλάδας', en: 'Because it is the geographical centre of Greece' },
        { el: 'Γιατί το έδαφος εκεί έχει σχήμα κύκλου', en: 'Because the ground there is shaped like a circle' },
        { el: 'Γιατί το αποφάσισαν οι Ρωμαίοι αυτοκράτορες', en: 'Because the Roman emperors decided so' },
      ],
      explanation: {
        el:
          'Ο Δίας τους άφησε από τις δύο άκρες του κόσμου. Όπου συναντήθηκαν, εκεί ήταν η ' +
          'μέση.',
        en:
          'Zeus released them from the two ends of the world. Where they met was the middle.',
      },
    },
  },

  // ----------------------------------------------------------------- the museum
  {
    id: 'delphi-museum',
    cityId: 'delphi',
    emoji: '🥉',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Αρχαιολογικό Μουσείο Δελφών', en: 'The Delphi Archaeological Museum' },
    tagline: {
      el: 'Ό,τι στεκόταν κάποτε πάνω στην Ιερά Οδό',
      en: 'Everything that once stood along the Sacred Way',
    },
    story: {
      el:
        'Κάθε πόλη που ρωτούσε το μαντείο και έπαιρνε αυτό που ήθελε, έστελνε δώρο. Και ' +
        'επειδή τα δώρα ήταν ανταγωνιστικά, το καθένα προσπαθούσε να είναι ακριβότερο, ' +
        'μεγαλύτερο ή εξυπνότερο από το προηγούμενο. Έτσι η Ιερά Οδός, ο δρόμος που ' +
        'ανεβαίνει προς τον ναό, γέμισε αγάλματα και μικρά μαρμάρινα κτίρια γεμάτα ' +
        'θησαυρούς. Όσα σώθηκαν βρίσκονται τώρα σε αυτό το μουσείο, λίγα μέτρα πιο κάτω. ' +
        'Δεν είναι μεγάλο, και αυτό είναι πλεονέκτημα: μπορείς να το δεις ολόκληρο και να ' +
        'θυμάσαι τι είδες. Υπάρχει ένας χάλκινος νέος που κρατάει ακόμα τα ηνία του, δύο ' +
        'αδέρφια από μάρμαρο, μια σφίγγα που καθόταν σε κολόνα δέκα μέτρων, και μια πέτρα ' +
        'που την έλεγαν κέντρο του κόσμου. Ο κανόνας εδώ είναι απλός: ό,τι βλέπεις ήταν ' +
        'κάποτε δώρο κάποιου που ήθελε κάτι πάρα πολύ.',
      en:
        'Every city that asked the oracle and got the answer it wanted sent a gift. And ' +
        'because the gifts were competitive, each one tried to be more expensive, larger or ' +
        'cleverer than the last. So the Sacred Way, the road climbing up to the temple, ' +
        'filled with statues and small marble buildings packed with treasure. What survived ' +
        'is now in this museum, a few metres downhill. It is not large, and that is an ' +
        'advantage: you can see all of it and still remember what you saw. There is a young ' +
        'man in bronze still holding his reins, two brothers in marble, a sphinx that once ' +
        'sat on a ten-metre column, and a stone that people called the centre of the world.',
    },
    facts: [
      {
        el: 'Τα εκθέματά του ήταν δώρα πόλεων προς το μαντείο.',
        en: 'Its exhibits were gifts sent to the oracle by cities.',
      },
      {
        el: 'Ο Ηνίοχος είναι ένα από τα ελάχιστα χάλκινα αγάλματα που σώθηκαν ολόκληρα.',
        en: 'The Charioteer is one of very few bronze statues to survive complete.',
      },
      {
        el: 'Βρίσκεται λίγα μέτρα κάτω από τον αρχαιολογικό χώρο.',
        en: 'It sits a few metres below the archaeological site.',
      },
    ],
    location: {
      lat: 38.48029,
      lng: 22.49984,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q636928', deltaM: 0 },
        { kind: 'osm', ref: 'way/145690078', deltaM: 15 },
        { kind: 'wikipedia', ref: 'Delphi Archaeological Museum', deltaM: 20 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Γιατί γέμισε η Ιερά Οδός αγάλματα και θησαυρούς;',
        en: 'Why did the Sacred Way fill up with statues and treasuries?',
      },
      answers: [
        {
          el: 'Γιατί κάθε πόλη έστελνε δώρο',
          en: 'Because every city sent a gift',
        },
        { el: 'Γιατί εκεί φύλαγαν τα λάφυρα των πολέμων', en: 'Because war spoils were stored there' },
        { el: 'Γιατί τα έφτιαχναν οι ιερείς μόνοι τους', en: 'Because the priests made them themselves' },
        { el: 'Γιατί ήταν εργαστήρια γλυπτών', en: 'Because they were sculptors’ workshops' },
      ],
      explanation: {
        el:
          'Ένα δώρο στο μαντείο το έβλεπε όλη η Ελλάδα. Ήταν ο καλύτερος τρόπος να δείξει ' +
          'μια πόλη πόσο δυνατή είναι.',
        en:
          'A gift to the oracle was seen by all of Greece. It was the best way for a city to ' +
          'show how strong it was.',
      },
    },

    museum: {
      doorNote: {
        el: 'Άφησε τον Ηνίοχο για το τέλος. Κερδίζει πιο εύκολα όταν έχεις δει τι υπήρχε πριν από αυτόν.',
        en: 'Leave the Charioteer for last. He wins more easily once you have seen what came before him.',
      },
      rooms: [
        {
          id: 'delphi-museum-before-bronze',
          emoji: '🗿',
          name: { el: 'Πριν από τον χαλκό', en: 'Before the bronze' },
          intro: {
            el:
              'Τα παλαιότερα δώρα είναι από μάρμαρο και στέκονται ακίνητα, με τα δύο ' +
              'πόδια ίσια και ένα μικρό χαμόγελο. Δεν είναι αδέξια: έτσι ήθελαν να ' +
              'μοιάζουν. Ένα άγαλμα τότε δεν έπρεπε να φαίνεται ότι κινείται, έπρεπε να ' +
              'φαίνεται ότι θα μείνει εκεί για πάντα.',
            en:
              'The oldest gifts are marble and stand perfectly still, both feet level and a ' +
              'small smile on the face. They are not clumsy: this is how they were meant to ' +
              'look. A statue then was not supposed to seem to move. It was supposed to seem ' +
              'as if it would stay there for ever.',
          },
          exhibits: [
            {
              id: 'delphi-museum-kleobis-biton',
              name: { el: 'Ο Κλέοβις και ο Βίτων', en: 'Kleobis and Biton' },
              blurb: {
                el:
                  'Δύο τεράστιοι νέοι από μάρμαρο, σχεδόν ίδιοι, φτιαγμένοι γύρω στο 580 ' +
                  'π.Χ. Η ιστορία που συνοδεύει τα ονόματά τους λέει για δύο αδέρφια που ' +
                  'έσυραν μόνοι τους την άμαξα της μητέρας τους σε έναν μακρύ ανηφορικό ' +
                  'δρόμο, όταν τα βόδια δεν έφτασαν στην ώρα τους. Οι κάτοικοι της πόλης ' +
                  'τους τους τίμησαν στέλνοντας τα αγάλματα στους Δελφούς, ώστε να τα δει ' +
                  'όλη η Ελλάδα. Πρόσεξε τα πόδια τους: πατάνε και τα δύο ολόκληρα, ' +
                  'ισοδύναμα, όπως όλα τα αγάλματα εκείνης της εποχής.',
                en:
                  'Two enormous young men in marble, almost identical, carved around 580 BC. ' +
                  'The story attached to their names tells of two brothers who pulled their ' +
                  'mother’s cart themselves up a long uphill road when the oxen did not ' +
                  'arrive in time. The people of their city honoured them by sending these ' +
                  'statues to Delphi so that all of Greece would see them. Look at their ' +
                  'feet: both are flat on the ground, taking equal weight, as in every statue ' +
                  'of that time.',
              },
              question: {
                q: {
                  el: 'Γιατί έστειλε η πόλη τους αυτά τα αγάλματα στους Δελφούς;',
                  en: 'Why did their city send these statues to Delphi?',
                },
                answers: [
                  { el: 'Για να τους δει όλη η Ελλάδα', en: 'So that all of Greece would see them' },
                  { el: 'Για να τα πουλήσει στους ιερείς', en: 'To sell them to the priests' },
                  { el: 'Γιατί δεν χωρούσαν στην πόλη τους', en: 'Because they did not fit in their own city' },
                  { el: 'Γιατί το ζήτησε η Πυθία', en: 'Because the Pythia asked for them' },
                ],
                explanation: {
                  el: 'Οι Δελφοί ήταν το μέρος όπου συναντιόταν όλος ο ελληνικός κόσμος. Ήταν η μεγάλη οθόνη της εποχής.',
                  en: 'Delphi was where the whole Greek world met. It was the big screen of its day.',
                },
              },
            },
            {
              id: 'delphi-museum-naxian-sphinx',
              name: { el: 'Η Σφίγγα των Ναξίων', en: 'The Sphinx of the Naxians' },
              blurb: {
                el:
                  'Ένα πλάσμα με κεφάλι γυναίκας, σώμα λιονταριού και φτερά αετού, ύψους ' +
                  'πάνω από δύο μέτρα. Δεν στεκόταν στο έδαφος: την είχαν ανεβάσει πάνω σε ' +
                  'μια κολόνα δέκα μέτρων, ώστε να φαίνεται από μακριά και να κοιτάζει από ' +
                  'ψηλά όποιον ανέβαινε την Ιερά Οδό. Το νησί της Νάξου την έστειλε γύρω ' +
                  'στο 560 π.Χ., όταν ήταν πλούσιο από τα μάρμαρά του. Η στάση της είναι ' +
                  'ήρεμη και το βλέμμα της κατευθείαν μπροστά, και ακριβώς αυτό την κάνει ' +
                  'ανησυχητική.',
                en:
                  'A creature with a woman’s head, a lion’s body and an eagle’s wings, over ' +
                  'two metres tall. It did not stand on the ground: it was raised on a ' +
                  'ten-metre column so it could be seen from far away and look down on anyone ' +
                  'coming up the Sacred Way. The island of Naxos sent it around 560 BC, when ' +
                  'it was rich from its marble. Its pose is calm and its gaze straight ahead, ' +
                  'and that is exactly what makes it unsettling.',
              },
              question: {
                q: {
                  el: 'Πού βρισκόταν αρχικά η Σφίγγα;',
                  en: 'Where did the Sphinx originally stand?',
                },
                answers: [
                  { el: 'Πάνω σε κολόνα περίπου δέκα μέτρων', en: 'On top of a column about ten metres high' },
                  { el: 'Μέσα στον ναό, δίπλα στην Πυθία', en: 'Inside the temple, beside the Pythia' },
                  { el: 'Στην είσοδο του σταδίου', en: 'At the entrance to the stadium' },
                  { el: 'Κάτω από το έδαφος, σε κρύπτη', en: 'Underground, in a crypt' },
                ],
                explanation: {
                  el: 'Γι’ αυτό είναι δουλεμένη προσεκτικά και από κάτω: ο κόσμος την έβλεπε μόνο από εκεί.',
                  en: 'That is why it is carefully finished underneath: from below was the only way anyone saw it.',
                },
              },
            },
            {
              id: 'delphi-museum-siphnian-frieze',
              name: { el: 'Η ζωφόρος των Σιφνίων', en: 'The Siphnian frieze' },
              blurb: {
                el:
                  'Οι Σίφνιοι είχαν χρυσωρυχεία και έχτισαν στους Δελφούς έναν μικρό αλλά ' +
                  'πανάκριβο θησαυρό, γύρω στο 525 π.Χ. Η μαρμάρινη ζωφόρος του δείχνει ' +
                  'μάχη θεών και γιγάντων, με τα σώματα σε τόσο υψηλό ανάγλυφο που ' +
                  'ξεκολλάνε από το φόντο. Δίπλα βρίσκεσαι σε απόσταση αναπνοής από ' +
                  'λιοντάρια που δαγκώνουν, ασπίδες που συγκρούονται και θεούς που ' +
                  'σπρώχνουν. Το νησί έχασε αργότερα τα μεταλλεία του, όταν η θάλασσα ' +
                  'πλημμύρισε τις στοές, και δεν ξαναέχτισε ποτέ κάτι τέτοιο.',
                en:
                  'The people of Siphnos had gold mines and built a small but hugely ' +
                  'expensive treasury at Delphi around 525 BC. Its marble frieze shows a ' +
                  'battle of gods and giants, the bodies in relief so high that they come ' +
                  'away from the background. Standing beside it you are within arm’s reach of ' +
                  'lions biting, shields colliding and gods shoving. The island later lost ' +
                  'its mines when the sea flooded the tunnels, and never built anything like ' +
                  'it again.',
              },
              question: {
                q: {
                  el: 'Από πού είχαν τα χρήματα οι Σίφνιοι για αυτό το κτίριο;',
                  en: 'Where did the people of Siphnos get the money for this building?',
                },
                answers: [
                  { el: 'Από χρυσωρυχεία στο νησί τους', en: 'From gold mines on their island' },
                  { el: 'Από το εμπόριο κρασιού', en: 'From the wine trade' },
                  { el: 'Από φόρους που εισέπρατταν από άλλα νησιά', en: 'From taxes they collected from other islands' },
                  { el: 'Από δωρεά του βασιλιά της Περσίας', en: 'From a gift by the king of Persia' },
                ],
                explanation: {
                  el: 'Τα μεταλλεία πλημμύρισαν αργότερα από τη θάλασσα, και ο πλούτος τελείωσε μαζί τους.',
                  en: 'The mines were later flooded by the sea, and the wealth ended with them.',
                },
              },
            },
          ],
        },
        {
          id: 'delphi-museum-charioteer-room',
          emoji: '🐎',
          name: { el: 'Ο Ηνίοχος και ο ομφαλός', en: 'The Charioteer and the omphalos' },
          intro: {
            el:
              'Αυτή η αίθουσα έχει τρία αντικείμενα που δεν μοιάζουν καθόλου μεταξύ τους ' +
              'και συνδέονται απόλυτα: ένας νικητής, ένα ζώο θυσίας από ασήμι, και μια ' +
              'πέτρα που δήλωνε πού βρίσκεται το κέντρο του κόσμου. Και τα τρία είναι ' +
              'δώρα, και τα τρία θάφτηκαν ή κρύφτηκαν, γι’ αυτό και σώθηκαν.',
            en:
              'This room holds three objects that look nothing like one another and belong ' +
              'together completely: a winner, a sacrificial animal made of silver, and a ' +
              'stone that marked where the centre of the world was. All three were gifts, ' +
              'and all three were buried or hidden, which is why they survived.',
          },
          exhibits: [
            {
              id: 'delphi-museum-charioteer',
              name: { el: 'Ο Ηνίοχος', en: 'The Charioteer' },
              blurb: {
                el:
                  'Ένας νέος από χαλκό, ύψους περίπου 1,80, όρθιος και ήρεμος, με τα ηνία ' +
                  'ακόμα στα χέρια του. Μόλις έχει κερδίσει αρματοδρομία, και δεν πανηγυρίζει ' +
                  'καθόλου. Φτιάχτηκε γύρω στο 470 π.Χ. Τα μάτια του δεν είναι μέταλλο: ' +
                  'είναι ένθετα, από πέτρα και γυαλί, και γι’ αυτό σε κοιτάζουν. Τα χείλη ' +
                  'και οι βλεφαρίδες του είναι από άλλο, πιο κόκκινο κράμα. Σώθηκε επειδή ' +
                  'τον έθαψε κατολίσθηση: ό,τι χάλκινο έμεινε στην επιφάνεια λιώθηκε ' +
                  'αιώνες αργότερα για να ξαναγίνει εργαλείο.',
                en:
                  'A young man in bronze, about 1.8 metres tall, upright and calm, the reins ' +
                  'still in his hands. He has just won a chariot race, and he is not ' +
                  'celebrating at all. He was made around 470 BC. His eyes are not metal: ' +
                  'they are inlaid from stone and glass, which is why they look at you. His ' +
                  'lips and eyelashes are a different, redder alloy. He survived because a ' +
                  'landslide buried him: any bronze left on the surface was melted down ' +
                  'centuries later to become tools again.',
              },
              question: {
                q: {
                  el: 'Γιατί σώθηκε ο Ηνίοχος ενώ χάθηκαν σχεδόν όλα τα χάλκινα αγάλματα;',
                  en: 'Why did the Charioteer survive when almost all bronze statues were lost?',
                },
                answers: [
                  { el: 'Γιατί τον έθαψε κατολίσθηση', en: 'Because a landslide buried him' },
                  { el: 'Γιατί ήταν κρυμμένος μέσα στον ναό', en: 'Because he was hidden inside the temple' },
                  { el: 'Γιατί ήταν πολύ βαρύς για να μεταφερθεί', en: 'Because he was too heavy to move' },
                  { el: 'Γιατί τον προστάτευε νόμος', en: 'Because a law protected him' },
                ],
                explanation: {
                  el:
                    'Ο χαλκός ήταν πολύτιμο υλικό. Ένα άγαλμα άξιζε περισσότερο λιωμένο ' +
                    'παρά όρθιο, και έτσι χάθηκαν σχεδόν όλα.',
                  en:
                    'Bronze was valuable material. A statue was worth more melted than ' +
                    'standing, which is how almost all of them disappeared.',
                },
              },
            },
            {
              id: 'delphi-museum-omphalos',
              name: { el: 'Ο ομφαλός', en: 'The omphalos' },
              blurb: {
                el:
                  'Μια πέτρα σε σχήμα μισού αυγού, σκεπασμένη με ένα ανάγλυφο πλέγμα από ' +
                  'μάλλινες ταινίες. Δήλωνε το σημείο που θεωρούνταν κέντρο του κόσμου. ' +
                  'Δεν είναι φυσικός βράχος: είναι σκαλισμένο αντικείμενο, φτιαγμένο για ' +
                  'να το δείχνεις. Αυτό που βλέπεις στο μουσείο είναι ρωμαϊκό αντίγραφο ' +
                  'ενός παλαιότερου. Η ιδέα ότι κάθε λαός έχει ένα σημείο που το θεωρεί ' +
                  'κέντρο της γης επαναλαμβάνεται σε πολλούς πολιτισμούς, και σχεδόν πάντα ' +
                  'το σημείο είναι μέσα στα δικά του σύνορα.',
                en:
                  'A stone shaped like half an egg, covered with a carved net of woollen ' +
                  'bands. It marked the spot considered the centre of the world. It is not a ' +
                  'natural rock: it is a carved object, made to be pointed at. What you see ' +
                  'in the museum is a Roman copy of an older one. The idea that a people has ' +
                  'a point it treats as the centre of the earth turns up in many cultures, ' +
                  'and the point is almost always inside their own borders.',
              },
              question: {
                q: {
                  el: 'Τι δήλωνε αυτή η πέτρα;',
                  en: 'What did this stone mark?',
                },
                answers: [
                  { el: 'Το κέντρο του κόσμου', en: 'The centre of the world' },
                  { el: 'Τον τάφο της πρώτης Πυθίας', en: 'The tomb of the first Pythia' },
                  { el: 'Το ύψος της στάθμης της θάλασσας', en: 'The height of sea level' },
                  { el: 'Το σύνορο ανάμεσα σε δύο πόλεις', en: 'The border between two cities' },
                ],
                explanation: {
                  el: 'Σχεδόν κάθε πολιτισμός έχει το δικό του κέντρο του κόσμου, και είναι πάντα σπίτι του.',
                  en: 'Almost every culture has its own centre of the world, and it is always at home.',
                },
              },
            },
            {
              id: 'delphi-museum-silver-bull',
              name: { el: 'Ο ασημένιος ταύρος', en: 'The silver bull' },
              blurb: {
                el:
                  'Ένας ταύρος σε φυσικό σχεδόν μέγεθος, φτιαγμένος από φύλλα ασημιού ' +
                  'καρφωμένα πάνω σε ξύλινο σκελετό, με χρυσές λεπτομέρειες στα κέρατα και ' +
                  'στις οπλές. Βρέθηκε κομματιασμένος μέσα σε έναν λάκκο μαζί με άλλα ' +
                  'πολύτιμα αντικείμενα: τα είχαν θάψει προσεκτικά, μάλλον μετά από φωτιά, ' +
                  'γιατί ό,τι είχε δοθεί στον θεό δεν επιτρεπόταν να πεταχτεί. Χρειάστηκαν ' +
                  'χρόνια υπομονετικής δουλειάς για να ξανασυναρμολογηθεί από εκατοντάδες ' +
                  'τσαλακωμένα κομμάτια.',
                en:
                  'A bull at almost life size, made from sheets of silver nailed over a ' +
                  'wooden frame, with gold details on the horns and hooves. It was found in ' +
                  'pieces in a pit together with other precious objects: they had been buried ' +
                  'carefully, probably after a fire, because anything given to the god could ' +
                  'not be thrown away. It took years of patient work to put it back together ' +
                  'from hundreds of crushed fragments.',
              },
              question: {
                q: {
                  el: 'Γιατί θάφτηκαν προσεκτικά τα καμένα πολύτιμα αντικείμενα;',
                  en: 'Why were the burnt precious objects carefully buried?',
                },
                answers: [
                  { el: 'Γιατί ό,τι δινόταν στον θεό δεν πεταγόταν', en: 'Because a gift to the god was never thrown away' },
                  { el: 'Για να τα κρύψουν από κλέφτες', en: 'To hide them from thieves' },
                  { el: 'Για να τα λιώσουν αργότερα', en: 'To melt them down later' },
                  { el: 'Γιατί έτσι πρόσταξε η Πυθία', en: 'Because the Pythia ordered it' },
                ],
                explanation: {
                  el: 'Αυτός ο κανόνας είναι ο λόγος που οι αρχαιολόγοι βρίσκουν γεμάτους λάκκους.',
                  en: 'That rule is the reason archaeologists find pits full of treasure.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'delphi-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Μόλις κέρδισα τον αγώνα και δεν χαμογελάω καθόλου. Κρατάω ακόμα τα λουριά ' +
              'μου, τα άλογά μου χάθηκαν, και τα μάτια μου δεν είναι από μέταλλο.',
            en:
              'I have just won the race and I am not smiling at all. I still hold my reins, ' +
              'my horses are gone, and my eyes are not made of metal.',
          },
          hint: {
            el: 'Με έσωσε μια κατολίσθηση.',
            en: 'A landslide saved me.',
          },
          answerExhibitId: 'delphi-museum-charioteer',
        },
        {
          id: 'delphi-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι ζώο και δεν έζησα ποτέ. Το δέρμα μου είναι ασήμι καρφωμένο σε ξύλο, ' +
              'και με βρήκαν σε χίλια κομμάτια μέσα σε έναν λάκκο.',
            en:
              'I am an animal and I never lived. My skin is silver nailed onto wood, and ' +
              'they found me in a thousand pieces inside a pit.',
          },
          hint: {
            el: 'Έχω κέρατα, και είναι χρυσά.',
            en: 'I have horns, and they are gold.',
          },
          answerExhibitId: 'delphi-museum-silver-bull',
        },
        {
          id: 'delphi-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι πέτρα σε σχήμα μισού αυγού και με σκεπάζει ένα πλεγμένο δίχτυ. Για ' +
              'αιώνες έδειχνα πού είναι η μέση του κόσμου, και η μέση ήταν πάντα εδώ.',
            en:
              'I am a stone shaped like half an egg and a woven net covers me. For centuries ' +
              'I showed where the middle of the world was, and the middle was always here.',
          },
          hint: {
            el: 'Το όνομά μου σημαίνει αφαλός.',
            en: 'My name means navel.',
          },
          answerExhibitId: 'delphi-museum-omphalos',
        },
      ],
    },
  },

  // ------------------------------------------------------------ athenian treasury
  {
    id: 'delphi-athenian-treasury',
    cityId: 'delphi',
    emoji: '🎼',
    category: 'history',
    difficulty: 2,

    name: { el: 'Θησαυρός των Αθηναίων', en: 'The Athenian Treasury' },
    tagline: {
      el: 'Στους τοίχους του είναι χαραγμένη η αρχαιότερη μουσική που σώζεται',
      en: 'The oldest surviving music in the world is carved on its walls',
    },
    story: {
      el:
        'Είναι ένα μικρό μαρμάρινο κτίριο στην ανηφόρα προς τον ναό, φτιαγμένο γύρω στο ' +
        '490 π.Χ. για να φυλάει τα δώρα που έστελναν οι Αθηναίοι. Στέκεται ολόκληρο ' +
        'σήμερα επειδή Γάλλοι αρχαιολόγοι το ξανασυναρμολόγησαν στις αρχές του 20ού αιώνα, ' +
        'κομμάτι κομμάτι, με τις δικές του πέτρες. Το εκπληκτικό όμως δεν φαίνεται από ' +
        'μακριά. Στους εξωτερικούς του τοίχους είναι χαραγμένοι δύο ύμνοι στον Απόλλωνα, ' +
        'και πάνω από τα γράμματα των λέξεων υπάρχουν κι άλλα γράμματα, μικρότερα. Αυτά ' +
        'τα από πάνω δεν διαβάζονται: ακούγονται. Είναι νότες. Είναι το αρχαιότερο ' +
        'κομμάτι μουσικής που σώζεται στον κόσμο μαζί με τα λόγια του, και έχει παιχτεί ' +
        'ξανά στα σημερινά όργανα. Δηλαδή μπορείς να ακούσεις, με αρκετή ακρίβεια, τι ' +
        'ακουγόταν εδώ πριν από δύο χιλιάδες χρόνια, και αυτό δεν ισχύει σχεδόν πουθενά ' +
        'αλλού στον κόσμο.',
      en:
        'It is a small marble building on the climb up to the temple, put up around 490 BC ' +
        'to hold the gifts the Athenians sent. It stands whole today because French ' +
        'archaeologists reassembled it in the early 20th century, piece by piece, from its ' +
        'own stones. The astonishing thing, though, is not visible from a distance. Two ' +
        'hymns to Apollo are carved on its outer walls, and above the letters of the words ' +
        'there are more letters, smaller ones. Those upper letters are not to be read: they ' +
        'are to be heard. They are notes. It is the oldest piece of music that survives ' +
        'anywhere complete with its words, and it has been played again on modern ' +
        'instruments. Which means you can hear, fairly accurately, what was heard here two ' +
        'thousand years ago, and that is true almost nowhere else on earth.',
    },
    facts: [
      {
        el: 'Χτίστηκε γύρω στο 490 π.Χ. για να φυλάει τα δώρα των Αθηναίων.',
        en: 'It was built around 490 BC to hold the gifts of the Athenians.',
      },
      {
        el: 'Στους τοίχους του είναι χαραγμένοι δύο ύμνοι με σημειωμένες νότες.',
        en: 'Two hymns with their musical notes are carved on its walls.',
      },
      {
        el: 'Ξαναστήθηκε στις αρχές του 20ού αιώνα από τις δικές του πέτρες.',
        en: 'It was rebuilt in the early 20th century from its own stones.',
      },
    ],
    location: {
      lat: 38.48184,
      lng: 22.50143,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q478011', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Athenian Treasury', deltaM: 5 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Τι είναι τα μικρά γράμματα πάνω από τις λέξεις στους τοίχους;',
        en: 'What are the small letters above the words on the walls?',
      },
      answers: [
        { el: 'Νότες: δείχνουν πώς τραγουδιόταν ο ύμνος', en: 'Notes: they show how the hymn was sung' },
        { el: 'Τα ονόματα των ανθρώπων που τον έγραψαν', en: 'The names of the people who wrote it' },
        { el: 'Οδηγίες για τους χτίστες', en: 'Instructions for the builders' },
        { el: 'Αριθμοί που μετρούν τις πέτρες', en: 'Numbers counting the stones' },
      ],
      explanation: {
        el:
          'Χωρίς αυτά τα γράμματα θα ξέραμε μόνο τα λόγια. Με αυτά, ξέρουμε και τη ' +
          'μελωδία.',
        en:
          'Without those letters we would have only the words. With them, we have the tune ' +
          'as well.',
      },
    },
  },

  // ---------------------------------------------------------------- castalian spring
  {
    id: 'delphi-castalian-spring',
    cityId: 'delphi',
    emoji: '💧',
    category: 'history',
    difficulty: 2,

    name: { el: 'Κασταλία Πηγή', en: 'The Castalian Spring' },
    tagline: {
      el: 'Κανείς δεν έμπαινε στο ιερό χωρίς να πλυθεί εδώ',
      en: 'Nobody entered the sanctuary without washing here first',
    },
    story: {
      el:
        'Ανάμεσα σε δύο απότομους βράχους βγαίνει νερό από τον Παρνασσό, και εκεί ' +
        'σταματούσαν όλοι πριν ανέβουν στο ιερό. Ο κανόνας ήταν απλός: δεν πλησιάζεις τον ' +
        'θεό βρόμικος. Οι προσκυνητές έπλεναν τα χέρια και τα μαλλιά τους, οι ιερείς ' +
        'πλένονταν ολόκληροι, και η Πυθία έπινε από αυτό το νερό πριν καθίσει στον ' +
        'τρίποδα. Σώζονται δύο κρήνες, μία αρχαϊκή με μαρμάρινη λεκάνη και μια ρωμαϊκή ' +
        'λαξευμένη κατευθείαν στον βράχο, με κόγχες όπου οι επισκέπτες άφηναν μικρά δώρα. ' +
        'Το νερό τρέχει ακόμα και είναι παγωμένο ακόμα και τον Αύγουστο. Μπορεί να ' +
        'ακούγεται τελετουργικό, αλλά είναι και πρακτικό: ένας τόπος που δεχόταν χιλιάδες ' +
        'κόσμο χρειαζόταν κάπου να πλένεται ο κόσμος. Και σε μια εποχή χωρίς φάρμακα, το ' +
        'πλύσιμο ήταν από τα λίγα πράγματα που όντως κρατούσαν τους ανθρώπους υγιείς.',
      en:
        'Between two sheer rocks, water comes out of Parnassus, and everyone stopped there ' +
        'before going up to the sanctuary. The rule was simple: you do not approach the god ' +
        'dirty. Pilgrims washed their hands and their hair, priests washed completely, and ' +
        'the Pythia drank this water before sitting on the tripod. Two fountain houses ' +
        'survive, an archaic one with a marble basin and a Roman one cut straight into the ' +
        'rock, with niches where visitors left small gifts. The water still runs and is ' +
        'freezing even in August. It may sound purely ceremonial, but it was practical too: ' +
        'a place taking in thousands of people needed somewhere for those people to wash. ' +
        'And in an age with no medicine, washing was one of the few things that genuinely ' +
        'kept people well.',
    },
    facts: [
      {
        el: 'Όλοι έπλεναν εδώ πριν μπουν στο ιερό.',
        en: 'Everyone washed here before entering the sanctuary.',
      },
      {
        el: 'Σώζονται δύο κρήνες, μία αρχαϊκή και μία λαξευμένη στον βράχο.',
        en: 'Two fountain houses survive, one archaic and one cut into the rock.',
      },
      {
        el: 'Το νερό κατεβαίνει από τον Παρνασσό και τρέχει ακόμα.',
        en: 'The water comes down from Parnassus and still runs.',
      },
    ],
    location: {
      lat: 38.48306,
      lng: 22.50556,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q152348', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Castalian Spring', deltaM: 1 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Γιατί σταματούσαν όλοι στην Κασταλία πριν ανέβουν;',
        en: 'Why did everyone stop at Castalia before going up?',
      },
      answers: [
        { el: 'Γιατί έπρεπε να πλυθούν πρώτα', en: 'Because they had to wash first' },
        { el: 'Γιατί εκεί πλήρωναν το εισιτήριο', en: 'Because that is where they paid to enter' },
        { el: 'Γιατί εκεί άφηναν τα ζώα τους', en: 'Because that is where they left their animals' },
        { el: 'Γιατί ήταν το μόνο σκιερό μέρος', en: 'Because it was the only shade' },
      ],
      explanation: {
        el: 'Ο κανόνας ήταν θρησκευτικός και ταυτόχρονα πρακτικός, όπως συμβαίνει συχνά.',
        en: 'The rule was religious and practical at the same time, as rules often are.',
      },
    },
  },

  // ---------------------------------------------------------------------- tholos
  {
    id: 'delphi-tholos',
    cityId: 'delphi',
    emoji: '⭕',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Θόλος των Δελφών', en: 'The Tholos of Delphi' },
    tagline: {
      el: 'Το ωραιότερο κτίριο των Δελφών, και κανείς δεν ξέρει τι ήταν',
      en: 'The loveliest building at Delphi, and nobody knows its purpose',
    },
    story: {
      el:
        'Λίγο πιο κάτω από το κεντρικό ιερό, σε μια πλαγιά με ελιές, στέκονται τρεις ' +
        'κολόνες που στηρίζουν ένα κυκλικό κομμάτι στέγης. Ανήκουν σε ένα στρογγυλό ' +
        'κτίριο του 4ου αιώνα π.Χ. που είχε είκοσι κολόνες γύρω γύρω. Είναι η πιο ' +
        'φωτογραφημένη εικόνα των Δελφών και το μεγαλύτερο ερωτηματικό του χώρου: κανείς ' +
        'δεν ξέρει σε τι χρησίμευε. Δεν ήταν ναός με τη συνηθισμένη έννοια, δεν ήταν ' +
        'θησαυρός, δεν βρέθηκε άγαλμα μέσα του. Ο αρχιτέκτονας που το σχεδίασε έγραψε ένα ' +
        'ολόκληρο βιβλίο γι’ αυτό, και το βιβλίο χάθηκε. Οι τρεις κολόνες που βλέπεις ' +
        'ξαναστήθηκαν το 1938. Οι υπόλοιπες είναι πεσμένες γύρω, σε κύκλο, και μπορείς να ' +
        'περπατήσεις ανάμεσά τους. Στους Δελφούς σχεδόν όλα εξηγούνται, γιατί κάποιος τα ' +
        'κατέγραψε. Αυτό εδώ όχι, και είναι το πιο όμορφο από όλα.',
      en:
        'A little below the main sanctuary, on a slope of olive trees, three columns stand ' +
        'holding up a curved piece of roof. They belong to a round building from the 4th ' +
        'century BC that had twenty columns all the way around it. It is the most ' +
        'photographed image of Delphi and the biggest question mark on the site: nobody ' +
        'knows what it was for. It was not a temple in the usual sense, it was not a ' +
        'treasury, and no statue was found inside it. The architect who designed it wrote a ' +
        'whole book about it, and the book is lost. The three columns you see were put back ' +
        'up in 1938. The rest lie around them, in a circle.',
    },
    facts: [
      {
        el: 'Είχε είκοσι κολόνες γύρω γύρω. Σήμερα στέκονται τρεις.',
        en: 'It had twenty columns all around. Three stand today.',
      },
      {
        el: 'Κανείς δεν ξέρει σε τι χρησίμευε.',
        en: 'Nobody knows what it was used for.',
      },
      {
        el: 'Οι τρεις κολόνες ξαναστήθηκαν το 1938.',
        en: 'The three columns were re-erected in 1938.',
      },
    ],
    location: {
      lat: 38.48015,
      lng: 22.5079,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q12013451', deltaM: 0 },
        { kind: 'osm', ref: 'way/145690071', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Tholos of Delphi', deltaM: 1 },
      ],
      verifiedAt: '2026-09-11',
      note: 'The Tholos itself. The sanctuary of Athena Pronaia that contains it (Q105394638) sits 17 m away, under the separation floor, so only one of the two can ship.',
    },
    question: {
      q: {
        el: 'Τι ξέρουμε σίγουρα για τη χρήση αυτού του κτιρίου;',
        en: 'What do we know for certain about what this building was for?',
      },
      answers: [
        { el: 'Τίποτα: κανείς δεν ξέρει σε τι χρησίμευε', en: 'Nothing: nobody knows what it was for' },
        { el: 'Ότι ήταν θησαυρός μιας πλούσιας πόλης', en: 'That it was the treasury of a rich city' },
        { el: 'Ότι εκεί καθόταν η Πυθία', en: 'That the Pythia sat there' },
        { el: 'Ότι ήταν τάφος του αρχιτέκτονά του', en: 'That it was its architect’s tomb' },
      ],
      explanation: {
        el:
          'Είναι από τα λίγα μεγάλα αρχαία κτίρια για τα οποία δεν έχουμε ούτε μία σίγουρη ' +
          'απάντηση. Το βιβλίο που το εξηγούσε χάθηκε.',
        en:
          'It is one of very few great ancient buildings for which we have no certain ' +
          'answer at all. The book that explained it is lost.',
      },
    },
  },

  // --------------------------------------------------------------------- stadium
  {
    id: 'delphi-stadium',
    cityId: 'delphi',
    emoji: '🏃',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Στάδιο των Δελφών', en: 'The Stadium of Delphi' },
    tagline: {
      el: 'Το καλύτερα σωζόμενο αρχαίο στάδιο, στο ψηλότερο σημείο',
      en: 'The best preserved ancient stadium, at the highest point',
    },
    story: {
      el:
        'Πάνω από όλα τα άλλα, στο ψηλότερο σημείο του χώρου, υπάρχει μια επίπεδη λωρίδα ' +
        'γης εκατόν εβδομήντα επτά μέτρων με πέτρινα καθίσματα γύρω της. Είναι το ' +
        'καλύτερα διατηρημένο αρχαίο στάδιο της Ελλάδας και χωρούσε περίπου έξι χιλιάδες ' +
        'πεντακόσιους θεατές. Εδώ γίνονταν τα Πύθια, αγώνες κάθε τέσσερα χρόνια, δεύτεροι ' +
        'σε σημασία μετά τους Ολυμπιακούς. Είχαν όμως και κάτι που η Ολυμπία δεν είχε: ' +
        'αγώνες μουσικής. Ο πρώτος διαγωνισμός των Πυθίων δεν ήταν τρέξιμο αλλά τραγούδι ' +
        'με κιθάρα. Στην αφετηρία σώζονται ακόμα οι πέτρινες πλάκες με τα αυλάκια όπου ' +
        'έμπαιναν τα δάχτυλα των δρομέων, ώστε να ξεκινούν όλοι από την ίδια γραμμή. ' +
        'Μπορείς να βάλεις τα πόδια σου εκεί και να καταλάβεις κάτι που δεν λέγεται με ' +
        'λόγια: το ύψος, ο αέρας και η ησυχία είναι ακριβώς τα ίδια με τότε.',
      en:
        'Above everything else, at the highest point of the site, there is a flat strip of ' +
        'ground a hundred and seventy-seven metres long with stone seats around it. It is ' +
        'the best preserved ancient stadium in Greece and held about six and a half ' +
        'thousand spectators. The Pythian Games were held here every four years, second in ' +
        'importance only to the Olympics. But they had something Olympia did not: music ' +
        'competitions. The first contest of the Pythian Games was not a race but singing to ' +
        'the lyre. At the start line, the stone slabs survive with grooves cut for the ' +
        'runners’ toes, so that everybody began from the same line. You can put your own ' +
        'feet in them, and understand something words do not carry: the height, the air and ' +
        'the quiet are exactly what they were.',
    },
    facts: [
      {
        el: 'Έχει μήκος 177 μέτρα και χωρούσε περίπου 6.500 θεατές.',
        en: 'It is 177 metres long and held about 6,500 spectators.',
      },
      {
        el: 'Στα Πύθια υπήρχαν και αγώνες μουσικής, όχι μόνο αθλήματα.',
        en: 'The Pythian Games included music contests, not only sport.',
      },
      {
        el: 'Στην αφετηρία σώζονται τα αυλάκια για τα δάχτυλα των δρομέων.',
        en: 'The grooves for the runners’ toes survive at the start line.',
      },
    ],
    location: {
      lat: 38.48227,
      lng: 22.49721,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q21705214', deltaM: 0 },
        { kind: 'osm', ref: 'way/145690087', deltaM: 69 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Grade C: the OSM outline centre is 69 m away, outside the 30 m agreement window for a second source, and there is no Wikipedia coordinate.',
    },
    question: {
      q: {
        el: 'Τι είχαν τα Πύθια που δεν είχαν οι Ολυμπιακοί Αγώνες;',
        en: 'What did the Pythian Games have that the Olympics did not?',
      },
      answers: [
        { el: 'Αγώνες μουσικής', en: 'Music contests' },
        { el: 'Αγώνες με άρματα', en: 'Chariot races' },
        { el: 'Γυναίκες αθλήτριες', en: 'Women athletes' },
        { el: 'Χειμερινά αθλήματα', en: 'Winter sports' },
      ],
      explanation: {
        el:
          'Ο τόπος ανήκε στον Απόλλωνα, θεό της μουσικής. Ήταν φυσικό ο πρώτος αγώνας να ' +
          'είναι τραγούδι.',
        en:
          'The place belonged to Apollo, god of music. It was natural that the first contest ' +
          'should be a song.',
      },
    },
  },

  // ---------------------------------------------------------------------- theatre
  {
    id: 'delphi-theatre',
    cityId: 'delphi',
    emoji: '🎭',
    category: 'art',
    difficulty: 1,

    name: { el: 'Αρχαίο θέατρο Δελφών', en: 'The Ancient Theatre of Delphi' },
    tagline: {
      el: 'Πέντε χιλιάδες θέσεις, και η καλύτερη θέα στο πίσω μέρος',
      en: 'Five thousand seats, and the best view from the back row',
    },
    story: {
      el:
        'Το θέατρο είναι σκαλισμένο στην πλαγιά ακριβώς πάνω από τον ναό, με τριάντα πέντε ' +
        'σειρές πέτρινα καθίσματα και χώρο για περίπου πέντε χιλιάδες ανθρώπους. Χτίστηκε ' +
        'τον 4ο αιώνα π.Χ. και φιλοξενούσε τους μουσικούς και θεατρικούς αγώνες των ' +
        'Πυθίων. Έχει κάτι που δεν έχουν σχεδόν καθόλου άλλα θέατρα: τις χειρότερες θέσεις ' +
        'τις θέλουν όλοι. Καθισμένος στην τελευταία σειρά, πίσω από όλους, βλέπεις πάνω ' +
        'από το κεφάλι των ηθοποιών ολόκληρο το ιερό, την κοιλάδα με τους ελαιώνες και, ' +
        'στο βάθος, τη θάλασσα. Οι αρχαίοι το ήξεραν και το σχεδίασαν έτσι επίτηδες. Η ' +
        'σκηνή δεν ήταν ποτέ το μόνο πράγμα που έβλεπε το κοινό. Σκέψου το λίγο: σε ένα ' +
        'σημερινό θέατρο σβήνουν τα φώτα για να μη βλέπεις τίποτα άλλο εκτός από τους ' +
        'ηθοποιούς. Εδώ έκαναν ακριβώς το αντίθετο, και το έκαναν επίτηδες.',
      en:
        'The theatre is cut into the slope just above the temple, with thirty-five rows of ' +
        'stone seats and room for about five thousand people. It was built in the 4th ' +
        'century BC and hosted the music and drama contests of the Pythian Games. It has ' +
        'something almost no other theatre has: everybody wants the worst seats. Sitting on ' +
        'the back row, behind everyone, you look over the actors’ heads at the whole ' +
        'sanctuary, the valley of olive trees and, far off, the sea. The ancients knew it ' +
        'and designed it that way on purpose. The stage was never the only thing the ' +
        'audience was looking at. Think about that for a moment: in a modern theatre the ' +
        'lights go down so you can see nothing but the actors. Here they did the exact ' +
        'opposite, and they did it on purpose.',
    },
    facts: [
      {
        el: 'Έχει 35 σειρές καθισμάτων και χωρούσε περίπου 5.000 θεατές.',
        en: 'It has 35 rows of seats and held about 5,000 people.',
      },
      {
        el: 'Από την τελευταία σειρά βλέπεις το ιερό, την κοιλάδα και τη θάλασσα.',
        en: 'From the back row you see the sanctuary, the valley and the sea.',
      },
      {
        el: 'Φιλοξενούσε τους μουσικούς και θεατρικούς αγώνες των Πυθίων.',
        en: 'It hosted the music and drama contests of the Pythian Games.',
      },
    ],
    location: {
      lat: 38.4825,
      lng: 22.50056,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q10378966', deltaM: 0 },
        { kind: 'osm', ref: 'way/145690058', deltaM: 6 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Γιατί είναι περιζήτητη η τελευταία σειρά σε αυτό το θέατρο;',
        en: 'Why is the back row the one everybody wants in this theatre?',
      },
      answers: [
        {
          el: 'Γιατί βλέπεις πάνω από τη σκηνή',
          en: 'Because you see out over the stage',
        },
        { el: 'Γιατί εκεί ακούγεται καλύτερα', en: 'Because the sound is better there' },
        { el: 'Γιατί έχει σκιά όλη μέρα', en: 'Because it is in shade all day' },
        { el: 'Γιατί τα καθίσματα είναι πιο φαρδιά', en: 'Because the seats are wider' },
      ],
      explanation: {
        el: 'Το τοπίο ήταν μέρος της παράστασης. Οι αρχαίοι διάλεγαν πλαγιές με θέα, όχι απλώς πλαγιές.',
        en: 'The landscape was part of the performance. The ancients chose slopes with a view, not just slopes.',
      },
    },
  },

  // ------------------------------------------------------- museum of the festivals
  {
    id: 'delphi-festivals-museum',
    cityId: 'delphi',
    emoji: '🧵',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Μουσείο Δελφικών Εορτών', en: 'The Museum of the Delphic Festivals' },
    tagline: {
      el: 'Το σπίτι δύο ανθρώπων που προσπάθησαν να ξυπνήσουν τους Δελφούς',
      en: 'The house of two people who tried to wake Delphi up',
    },
    story: {
      el:
        'Το 1927 ένας ποιητής, ο Άγγελος Σικελιανός, και η γυναίκα του, η Εύα Πάλμερ, ' +
        'έκαναν κάτι που όλοι θεώρησαν τρελό: ανέβασαν αρχαία τραγωδία στο αρχαίο θέατρο ' +
        'των Δελφών, μετά από δυόμισι χιλιάδες χρόνια σιωπής. Δεν είχαν χορηγούς. Η Εύα ' +
        'πούλησε την περιουσία της για να πληρώσει τα έξοδα. Δεν αγόρασε κοστούμια: ' +
        'μελέτησε τις μορφές πάνω σε αρχαία αγγεία, έφτιαξε αργαλειούς, έβαψε τα νήματα ' +
        'με φυτά και ύφανε η ίδια τα ρούχα, ένα ένα. Μαζί με την παράσταση οργάνωσαν ' +
        'αθλητικούς αγώνες, έκθεση λαϊκής τέχνης και παζάρι. Το έκαναν δύο φορές, το 1927 ' +
        'και το 1930, και μετά τα χρήματα τελείωσαν. Το σπίτι τους είναι σήμερα μουσείο ' +
        'και φυλάει ό,τι έφτιαξαν με τα χέρια τους. Η ιδέα τους δεν πέτυχε οικονομικά, ' +
        'αλλά από τότε το αρχαίο θέατρο δεν ξανασώπασε ποτέ για πολύ.',
      en:
        'In 1927 a poet, Angelos Sikelianos, and his wife, Eva Palmer, did something ' +
        'everybody thought was mad: they staged an ancient tragedy in the ancient theatre ' +
        'of Delphi, after two and a half thousand years of silence. They had no sponsors. ' +
        'Eva sold her property to pay for it. She did not buy costumes: she studied the ' +
        'figures painted on ancient vases, built looms, dyed the yarn with plants and wove ' +
        'the clothes herself, one at a time. Alongside the performance they organised ' +
        'athletic contests, an exhibition of folk craft and a market. They did it twice, in ' +
        '1927 and 1930, and then the money ran out. Their house is a museum now and keeps ' +
        'what they made with their hands.',
    },
    facts: [
      {
        el: 'Οι Δελφικές Εορτές έγιναν δύο φορές, το 1927 και το 1930.',
        en: 'The Delphic Festivals happened twice, in 1927 and 1930.',
      },
      {
        el: 'Η Εύα Πάλμερ ύφανε η ίδια τα κοστούμια, αντιγράφοντας μορφές από αρχαία αγγεία.',
        en: 'Eva Palmer wove the costumes herself, copying figures from ancient vases.',
      },
      {
        el: 'Το μουσείο στεγάζεται στο σπίτι όπου έζησε το ζευγάρι.',
        en: 'The museum is in the house where the couple lived.',
      },
    ],
    location: {
      lat: 38.47908,
      lng: 22.49712,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q59387697', deltaM: 0 },
        { kind: 'osm', ref: 'node/9295914724', deltaM: 5 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Από πού αντέγραψε η Εύα Πάλμερ τα σχέδια των κοστουμιών;',
        en: 'Where did Eva Palmer copy the designs of the costumes from?',
      },
      answers: [
        { el: 'Από μορφές ζωγραφισμένες σε αρχαία αγγεία', en: 'From figures painted on ancient vases' },
        { el: 'Από βιβλία μόδας του Παρισιού', en: 'From fashion books in Paris' },
        { el: 'Από ρούχα που βρέθηκαν σε τάφους', en: 'From clothes found in tombs' },
        { el: 'Από περιγραφές στα ποιήματα του άντρα της', en: 'From descriptions in her husband’s poems' },
      ],
      explanation: {
        el:
          'Ύφασμα δεν σώζεται σχεδόν ποτέ. Η ζωγραφική πάνω σε πηλό σώζεται, και γι’ αυτό ' +
          'ξέρουμε πώς έπεφταν τα ρούχα.',
        en:
          'Cloth almost never survives. Painting on clay does, which is why we know how the ' +
          'clothes hung.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μικρό μουσείο. Κοίτα τις λεπτομέρειες: όλα εδώ τα έφτιαξαν δύο άνθρωποι με τα χέρια τους.',
        en: 'A small museum. Look at the detail: two people made everything here by hand.',
      },
      rooms: [
        {
          id: 'delphi-festivals-museum-loom',
          emoji: '🪡',
          name: { el: 'Ο αργαλειός', en: 'The loom' },
          intro: {
            el:
              'Η πρώτη αίθουσα δεν έχει τέχνη, έχει εργαλεία και υλικά. Είναι το πιο ' +
              'χρήσιμο κομμάτι του μουσείου, γιατί δείχνει τη δουλειά πριν το αποτέλεσμα. ' +
              'Κάθε ύφασμα που θα δεις μετά ξεκίνησε εδώ, από νήμα, φυτά και πάρα πολλές ' +
              'ώρες δουλειάς που δεν φαίνονται πουθενά στο τελικό αποτέλεσμα.',
            en:
              'The first room has no art in it, only tools and materials. It is the most ' +
              'useful part of the museum, because it shows the work before the result. Every ' +
              'piece of cloth you will see later started here, from yarn, plants and a great ' +
              'many hours of somebody sitting still.',
          },
          exhibits: [
            {
              id: 'delphi-festivals-museum-costume',
              name: { el: 'Ένα υφαντό κοστούμι', en: 'A woven costume' },
              blurb: {
                el:
                  'Ένα μακρύ ρούχο από μαλλί, υφασμένο σε ένα κομμάτι, χωρίς ραφές στα ' +
                  'πλάγια. Έτσι ήταν φτιαγμένα και τα αρχαία: δεν έκοβαν το ύφασμα σε ' +
                  'σχήματα, το ύφαιναν στο τελικό μέγεθος και το τύλιγαν γύρω από το σώμα ' +
                  'με πόρπες και ζώνη. Πλησίασε και κοίτα την ύφανση στην άκρη: φαίνονται ' +
                  'τα σημεία όπου η υφάντρα άλλαξε χρώμα, και φαίνεται ότι τα έκανε με το ' +
                  'χέρι, γιατί οι γραμμές δεν είναι απόλυτα ίσιες.',
                en:
                  'A long garment in wool, woven in one piece, with no seams down the sides. ' +
                  'That is how ancient clothes were made too: they did not cut cloth into ' +
                  'shapes, they wove it to its final size and wrapped it around the body with ' +
                  'pins and a belt. Go close and look at the weave at the edge: you can see ' +
                  'where the weaver changed colour, and you can see it was done by hand, ' +
                  'because the lines are not perfectly straight.',
              },
              question: {
                q: {
                  el: 'Πώς φτιαχνόταν ένα αρχαίο ρούχο;',
                  en: 'How was an ancient garment made?',
                },
                answers: [
                  { el: 'Υφαινόταν σε ένα κομμάτι', en: 'Woven in a single piece' },
                  { el: 'Κοβόταν σε σχήματα και ραβόταν', en: 'Cut into shapes and sewn together' },
                  { el: 'Πλεκόταν με βελόνες', en: 'Knitted with needles' },
                  { el: 'Κολλιόταν με ρετσίνι', en: 'Glued together with resin' },
                ],
                explanation: {
                  el: 'Γι’ αυτό δεν υπάρχουν αρχαία «μεγέθη»: το ίδιο ύφασμα τυλιγόταν διαφορετικά.',
                  en: 'That is why there are no ancient sizes: the same cloth was wrapped differently.',
                },
              },
            },
            {
              id: 'delphi-festivals-museum-the-loom',
              name: { el: 'Ο αργαλειός της Εύας', en: 'Eva’s loom' },
              blurb: {
                el:
                  'Ένας ξύλινος αργαλειός, μεγάλος σαν πόρτα. Η Εύα Πάλμερ δεν βρήκε ' +
                  'έτοιμο αυτό που ήθελε, οπότε έστησε αργαλειούς και έμαθε να υφαίνει από ' +
                  'γυναίκες σε χωριά. Η δουλειά είναι αργή με τρόπο που δύσκολα ' +
                  'φαντάζεσαι: ένα ρούχο θέλει εβδομάδες. Για δύο παραστάσεις ' +
                  'χρειάστηκαν δεκάδες κοστούμια, και όλα πέρασαν από αυτό το ξύλο. Όταν ' +
                  'βλέπεις αργαλειό, βλέπεις χρόνο. Και ο χρόνος ήταν το μόνο πράγμα που ' +
                  'είχαν σε αφθονία, γιατί χρήματα δεν είχαν σχεδόν καθόλου.',
                en:
                  'A wooden loom, as big as a door. Eva Palmer could not find what she wanted ' +
                  'ready-made, so she set up looms and learned to weave from women in ' +
                  'villages. The work is slow in a way that is hard to picture: one garment ' +
                  'takes weeks. Two performances needed dozens of costumes, and all of them ' +
                  'went through this wood. When you look at a loom, you are looking at time.',
              },
              question: {
                q: {
                  el: 'Πόσο περίπου χρειάζεται για να υφανθεί ένα ρούχο σε αργαλειό;',
                  en: 'Roughly how long does it take to weave one garment on a loom?',
                },
                answers: [
                  { el: 'Εβδομάδες', en: 'Weeks' },
                  { el: 'Λίγα λεπτά', en: 'A few minutes' },
                  { el: 'Μία ώρα', en: 'An hour' },
                  { el: 'Χρόνια', en: 'Years' },
                ],
                explanation: {
                  el: 'Γι’ αυτό τα ρούχα ήταν ακριβά και περνούσαν από γενιά σε γενιά.',
                  en: 'That is why clothes were expensive and were handed down through generations.',
                },
              },
            },
            {
              id: 'delphi-festivals-museum-dyes',
              name: { el: 'Οι φυτικές βαφές', en: 'The plant dyes' },
              blurb: {
                el:
                  'Μικρά δοχεία με ρίζες, φλούδες, φύλλα και ξερά λουλούδια. Πριν από τα ' +
                  'χημικά χρώματα, κάθε βαφή έβγαινε από φυτό: κίτρινο από κρόκο ή ' +
                  'κρεμμύδι, κόκκινο από ρίζα ριζάρι, μπλε από λουλάκι, καφέ από φλούδα ' +
                  'καρυδιάς. Το χρώμα δεν πιάνει μόνο του, θέλει και ένα υλικό που το ' +
                  'κολλάει στο μαλλί. Γι’ αυτό η βαφή ήταν επάγγελμα και όχι κόλπο: αν ' +
                  'κάνεις λάθος, το χρώμα φεύγει στο πρώτο πλύσιμο.',
                en:
                  'Small jars of roots, bark, leaves and dried flowers. Before chemical ' +
                  'colours, every dye came from a plant: yellow from saffron or onion skins, ' +
                  'red from madder root, blue from indigo, brown from walnut husk. Colour ' +
                  'does not hold on its own; it needs something to fix it to the wool. That ' +
                  'is why dyeing was a trade and not a trick: get it wrong and the colour ' +
                  'goes in the first wash.',
              },
              question: {
                q: {
                  el: 'Τι χρειάζεται ένα χρώμα για να μείνει πάνω στο μαλλί;',
                  en: 'What does a colour need in order to stay on wool?',
                },
                answers: [
                  { el: 'Ένα υλικό που το στερεώνει στην ίνα', en: 'Something that fixes it to the fibre' },
                  { el: 'Πολύ ζεστό νερό και τίποτα άλλο', en: 'Very hot water and nothing else' },
                  { el: 'Ήλιο για τρεις μέρες', en: 'Three days of sunshine' },
                  { el: 'Αλάτι από τη θάλασσα μόνο', en: 'Sea salt and nothing more' },
                ],
                explanation: {
                  el: 'Χωρίς αυτό, το φυτό δίνει χρώμα στο νερό αλλά όχι στο ύφασμα.',
                  en: 'Without it, the plant colours the water but not the cloth.',
                },
              },
            },
          ],
        },
        {
          id: 'delphi-festivals-museum-two-festivals',
          emoji: '📷',
          name: { el: 'Δύο γιορτές', en: 'Two festivals' },
          intro: {
            el:
              'Η δεύτερη αίθουσα δείχνει τι έγινε πραγματικά εκείνες τις δύο χρονιές. ' +
              'Φωτογραφίες, προγράμματα, αφίσες και σημειώσεις. Τα πρόσωπα στις ' +
              'φωτογραφίες είναι χωρικοί της περιοχής, όχι επαγγελματίες ηθοποιοί, και ' +
              'αυτό ήταν μέρος της ιδέας: η γιορτή έπρεπε να ανήκει στον τόπο και όχι να ' +
              'έρχεται απέξω για μία βραδιά.',
            en:
              'The second room shows what actually happened in those two years. ' +
              'Photographs, programmes, posters and notes. The faces in the photographs are ' +
              'villagers from the area rather than professional actors, and that was part of ' +
              'the idea: the festival had to belong to the place, not arrive from outside ' +
              'for one evening.',
          },
          exhibits: [
            {
              id: 'delphi-festivals-museum-photographs',
              name: { el: 'Οι φωτογραφίες του 1927', en: 'The photographs of 1927' },
              blurb: {
                el:
                  'Ασπρόμαυρες φωτογραφίες από την παράσταση στο αρχαίο θέατρο: δεκάδες ' +
                  'μορφές με μακριά υφαντά ρούχα, στημένες σε σειρές στην ορχήστρα, με το ' +
                  'βουνό από πίσω. Δεν υπήρχαν φώτα ούτε μικρόφωνα. Η παράσταση γινόταν με ' +
                  'το φως της ημέρας και οι φωνές ακούγονταν όπως ακούγονταν και δυόμισι ' +
                  'χιλιάδες χρόνια πριν, χάρη στο σχήμα του θεάτρου. Στις φωτογραφίες ' +
                  'φαίνονται και θεατές καθισμένοι στα πέτρινα σκαλιά, πολλοί με τα ρούχα ' +
                  'της δουλειάς τους.',
                en:
                  'Black and white photographs of the performance in the ancient theatre: ' +
                  'dozens of figures in long woven clothes, lined up in the orchestra with ' +
                  'the mountain behind them. There were no lights and no microphones. The ' +
                  'performance took place in daylight and the voices carried the way they had ' +
                  'carried two and a half thousand years before, because of the shape of the ' +
                  'theatre. The photographs also show the audience on the stone steps, many ' +
                  'of them in their working clothes.',
              },
              question: {
                q: {
                  el: 'Πώς ακούγονταν οι ηθοποιοί χωρίς μικρόφωνα;',
                  en: 'How were the actors heard without microphones?',
                },
                answers: [
                  { el: 'Χάρη στο σχήμα του αρχαίου θεάτρου', en: 'Because of the shape of the ancient theatre' },
                  { el: 'Γιατί το κοινό ήταν πολύ λίγο', en: 'Because the audience was very small' },
                  { el: 'Γιατί φώναζαν όσο μπορούσαν', en: 'Because they shouted as loudly as they could' },
                  { el: 'Γιατί υπήρχαν κρυμμένα μεγάφωνα', en: 'Because loudspeakers were hidden' },
                ],
                explanation: {
                  el:
                    'Η καμπύλη των εδωλίων μαζεύει τον ήχο και τον στέλνει προς τα πάνω. ' +
                    'Είναι σχέδιο, όχι τύχη.',
                  en:
                    'The curve of the seating gathers the sound and sends it upwards. It is ' +
                    'design, not luck.',
                },
              },
            },
            {
              id: 'delphi-festivals-museum-programmes',
              name: { el: 'Τα προγράμματα', en: 'The programmes' },
              blurb: {
                el:
                  'Τυπωμένα φυλλάδια και αφίσες σε ελληνικά, γαλλικά και αγγλικά. ' +
                  'Δείχνουν κάτι που δεν φαίνεται από τις φωτογραφίες: οι Δελφικές Εορτές ' +
                  'δεν ήταν μόνο θέατρο. Είχαν αγώνες στο αρχαίο στάδιο, έκθεση με υφαντά ' +
                  'και κεραμικά από χωριά της περιοχής, και παζάρι όπου πουλούσαν οι ίδιοι ' +
                  'οι τεχνίτες. Η ιδέα ήταν ότι ένας τόπος δεν ζωντανεύει με μία ' +
                  'παράσταση, αλλά όταν δουλέψουν μαζί όλοι όσοι ζουν εκεί.',
                en:
                  'Printed leaflets and posters in Greek, French and English. They show ' +
                  'something the photographs do not: the Delphic Festivals were not only ' +
                  'theatre. There were contests in the ancient stadium, an exhibition of ' +
                  'weaving and pottery from villages nearby, and a market where the ' +
                  'craftspeople sold their own work. The idea was that a place does not come ' +
                  'alive through one performance, but when everybody who lives there works ' +
                  'together.',
              },
              question: {
                q: {
                  el: 'Τι άλλο περιλάμβαναν οι Δελφικές Εορτές εκτός από θέατρο;',
                  en: 'What else did the Delphic Festivals include besides theatre?',
                },
                answers: [
                  { el: 'Αγώνες, έκθεση τέχνης και παζάρι', en: 'Contests, a craft show and a market' },
                  { el: 'Μόνο συναυλίες κλασικής μουσικής', en: 'Only classical music concerts' },
                  { el: 'Μαθήματα αρχαίων ελληνικών', en: 'Ancient Greek lessons' },
                  { el: 'Τίποτα άλλο', en: 'Nothing else' },
                ],
                explanation: {
                  el: 'Ήθελαν να δουλέψει ολόκληρη η περιοχή, όχι να έρθει ένας θίασος και να φύγει.',
                  en: 'They wanted the whole area working, not a company arriving and leaving.',
                },
              },
            },
            {
              id: 'delphi-festivals-museum-notes',
              name: { el: 'Τα χειρόγραφα', en: 'The handwritten notes' },
              blurb: {
                el:
                  'Σελίδες με σημειώσεις, λογαριασμούς και γράμματα. Δείχνουν τη λιγότερο ' +
                  'ρομαντική πλευρά: πόσο κόστισε το μαλλί, ποιος δεν πλήρωσε, τι δεν ' +
                  'έφτασε στην ώρα του. Η Εύα πούλησε την περιουσία της για να γίνουν οι ' +
                  'δύο γιορτές, και μετά δεν υπήρχαν άλλα χρήματα. Είναι χρήσιμο έκθεμα ' +
                  'για ένα παιδί: κάθε ωραίο πράγμα που έγινε, έγινε επειδή κάποιος κάθισε ' +
                  'και έκανε λογαριασμούς.',
                en:
                  'Pages of notes, accounts and letters. They show the less romantic side: ' +
                  'what the wool cost, who did not pay, what did not arrive on time. Eva sold ' +
                  'her property so that the two festivals could happen, and after that there ' +
                  'was no more money. It is a useful exhibit for a child: every beautiful ' +
                  'thing that got made, got made because somebody sat down and did the sums.',
              },
              question: {
                q: {
                  el: 'Γιατί σταμάτησαν οι Δελφικές Εορτές μετά τη δεύτερη φορά;',
                  en: 'Why did the Delphic Festivals stop after the second time?',
                },
                answers: [
                  { el: 'Γιατί τελείωσαν τα χρήματα', en: 'Because the money ran out' },
                  { el: 'Γιατί τις απαγόρευσε το κράτος', en: 'Because the state banned them' },
                  { el: 'Γιατί δεν ήρθε κόσμος', en: 'Because nobody came' },
                  { el: 'Γιατί κάηκε το θέατρο', en: 'Because the theatre burned down' },
                ],
                explanation: {
                  el: 'Το ζευγάρι πλήρωσε σχεδόν τα πάντα μόνο του, και μια περιουσία δεν αντέχει για πάντα.',
                  en: 'The couple paid for almost all of it themselves, and one fortune does not last for ever.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'delphi-festivals-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι από ξύλο και είμαι μεγάλος σαν πόρτα. Δεν κάνω τίποτα μόνος μου, ' +
              'αλλά χωρίς εμένα κανένα από τα ρούχα αυτού του μουσείου δεν θα υπήρχε.',
            en:
              'I am wooden and as big as a door. I do nothing on my own, but without me not ' +
              'one of the clothes in this museum would exist.',
          },
          hint: {
            el: 'Δουλεύω με νήμα, και πολύ αργά.',
            en: 'I work with yarn, and very slowly.',
          },
          answerExhibitId: 'delphi-festivals-museum-the-loom',
        },
        {
          id: 'delphi-festivals-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι ασπρόμαυρος και σταμάτησα τον χρόνο σε μια μέρα του 1927. Μέσα μου ' +
              'δεκάδες άνθρωποι στέκονται σε αρχαίο θέατρο, χωρίς φώτα και χωρίς ' +
              'μικρόφωνα.',
            en:
              'I am black and white and I stopped time on a day in 1927. Inside me dozens of ' +
              'people stand in an ancient theatre, with no lights and no microphones.',
          },
          hint: {
            el: 'Δεν με ζωγράφισε κανείς. Με τράβηξαν.',
            en: 'Nobody painted me. I was taken.',
          },
          answerExhibitId: 'delphi-festivals-museum-photographs',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- parnassus
  {
    id: 'delphi-parnassus',
    cityId: 'delphi',
    emoji: '🏔️',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Λιάκουρα, η κορυφή του Παρνασσού', en: 'Liakoura, the summit of Parnassus' },
    tagline: {
      el: 'Δύο χιλιάδες τετρακόσια πενήντα επτά μέτρα πάνω από το μαντείο',
      en: 'Two thousand four hundred and fifty-seven metres above the oracle',
    },
    story: {
      el:
        'Ο Παρνασσός δεν είναι μία μυτερή κορυφή αλλά ένας ολόκληρος ορεινός όγκος, και ' +
        'το ψηλότερο σημείο του λέγεται Λιάκουρα, στα 2.457 μέτρα. Στους μύθους ήταν το ' +
        'βουνό των Μουσών και του Απόλλωνα, και όταν η μεγάλη πλημμύρα σκέπασε τον κόσμο, ' +
        'η κιβωτός του Δευκαλίωνα σταμάτησε εδώ. Στην πραγματικότητα είναι ασβεστολιθικό ' +
        'βουνό, γεμάτο σπηλιές και καταβόθρες, και το νερό της βροχής δεν κυλάει στην ' +
        'επιφάνειά του: μπαίνει μέσα του, ταξιδεύει στο σκοτάδι και βγαίνει πιο κάτω σε ' +
        'πηγές. Η Κασταλία είναι μία από αυτές. Δηλαδή το νερό που έπινε η Πυθία πριν ' +
        'μιλήσει είχε περάσει πρώτα μέσα από ολόκληρο το βουνό. Τον χειμώνα η κορυφή ' +
        'σκεπάζεται με χιόνι που κρατάει ως την άνοιξη, και από ψηλά βλέπεις ταυτόχρονα ' +
        'τον Κορινθιακό κόλπο στα νότια και τη Στερεά Ελλάδα να απλώνεται βόρεια.',
      en:
        'Parnassus is not one pointed peak but a whole massif, and its highest point is ' +
        'called Liakoura, at 2,457 metres. In the myths it was the mountain of the Muses ' +
        'and of Apollo, and when the great flood covered the world, Deucalion’s ark came to ' +
        'rest here. In reality it is a limestone mountain, full of caves and sinkholes, and ' +
        'rainwater does not run down its surface: it goes inside it, travels in the dark ' +
        'and comes out lower down as springs. Castalia is one of them. Which means the ' +
        'water the Pythia drank before speaking had first travelled through the whole ' +
        'mountain. In winter the summit is covered with snow that lasts into spring, and ' +
        'from the top you can see the Gulf of Corinth to the south and central Greece ' +
        'spreading away to the north at the same time.',
    },
    facts: [
      {
        el: 'Η κορυφή Λιάκουρα φτάνει τα 2.457 μέτρα.',
        en: 'The Liakoura summit reaches 2,457 metres.',
      },
      {
        el: 'Είναι ασβεστολιθικό βουνό: το νερό μπαίνει μέσα του αντί να κυλάει από πάνω.',
        en: 'It is limestone: water goes into it instead of running over it.',
      },
      {
        el: 'Στους μύθους ήταν το βουνό των Μουσών και εκεί σταμάτησε η κιβωτός του Δευκαλίωνα.',
        en: 'In myth it was the mountain of the Muses, where Deucalion’s ark came to rest.',
      },
    ],
    location: {
      lat: 38.5351,
      lng: 22.6224,
      anchor: 'viewpoint',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q25020974', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'The summit, not the massif. The mountain item (Q105261) graded D as a viewpoint, with OSM 525 m away and Wikipedia 722 m, because all three describe an area rather than a point. Third time this happened in Greece, after Lycabettus and Juktas.',
    },
    question: {
      q: {
        el: 'Τι κάνει το νερό της βροχής όταν πέφτει σε ασβεστολιθικό βουνό;',
        en: 'What does rainwater do when it falls on a limestone mountain?',
      },
      answers: [
        {
          el: 'Μπαίνει μέσα στο βουνό',
          en: 'It sinks into the mountain',
        },
        { el: 'Κυλάει στην επιφάνεια και φτιάχνει ποτάμια', en: 'It runs over the surface and makes rivers' },
        { el: 'Παγώνει αμέσως και μένει εκεί', en: 'It freezes at once and stays there' },
        { el: 'Εξατμίζεται πριν φτάσει στο έδαφος', en: 'It evaporates before reaching the ground' },
      ],
      explanation: {
        el:
          'Ο ασβεστόλιθος διαλύεται αργά από το νερό και γεμίζει τρύπες. Έτσι φτιάχνονται ' +
          'σπηλιές, και έτσι γεννιούνται πηγές.',
        en:
          'Limestone dissolves slowly in water and fills with holes. That is how caves are ' +
          'made, and how springs are born.',
      },
    },
  },

  // ---------------------------------------------------------------- corycian cave
  {
    id: 'delphi-corycian-cave',
    cityId: 'delphi',
    emoji: '🕳️',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Κωρύκειο Άντρο', en: 'The Corycian Cave' },
    tagline: {
      el: 'Μια σπηλιά ψηλά στο βουνό, γεμάτη δώρα χιλιάδων ετών',
      en: 'A cave high on the mountain, full of very old gifts',
    },
    story: {
      el:
        'Χίλια τριακόσια εξήντα μέτρα ψηλά, μέσα στον Παρνασσό, ανοίγει μια μεγάλη ' +
        'σπηλιά με σταλακτίτες και σταλαγμίτες. Ήταν ιερή του Πάνα και των Νυμφών, και σε ' +
        'αντίθεση με το μαντείο κάτω, εδώ δεν υπήρχαν ιερείς, ούτε ουρά, ούτε πληρωμή. ' +
        'Ερχόταν όποιος ήθελε και άφηνε ένα μικρό δώρο. Οι αρχαιολόγοι βρήκαν χιλιάδες ' +
        'τέτοια δώρα στο χώμα: πήλινα ειδώλια, λυχνάρια, δαχτυλίδια και πάρα πολλούς ' +
        'αστραγάλους, τα κοκάλινα παιχνίδια που έπαιζαν τα παιδιά. Μία φορά τον χρόνο ' +
        'ανέβαιναν εδώ γυναίκες από την περιοχή και χόρευαν όλη νύχτα με δάδες. Είναι το ' +
        'αντίθετο των Δελφών: το μαντείο ήταν επίσημο και ακριβό, η σπηλιά ήταν λαϊκή και ' +
        'δωρεάν. Για να φτάσεις χρειάζεται ανηφόρα αρκετών ωρών από τους Δελφούς, και ' +
        'αυτό δεν έχει αλλάξει καθόλου: ο δρόμος είναι ο ίδιος και το σκοτάδι μέσα επίσης.',
      en:
        'One thousand three hundred and sixty metres up, inside Parnassus, a big cave opens ' +
        'with stalactites and stalagmites. It was sacred to Pan and the Nymphs, and unlike ' +
        'the oracle below there were no priests here, no queue and no payment. Anyone who ' +
        'wanted came and left a small gift. Archaeologists found thousands of them in the ' +
        'soil: clay figurines, lamps, rings and a great many knucklebones, the little bone ' +
        'toys children played with. Once a year women from the area climbed up here and ' +
        'danced all night with torches. It is the opposite of Delphi: the oracle was ' +
        'official and expensive, the cave was ordinary people’s and free. Reaching it means ' +
        'several hours of climbing up from Delphi, and that has not changed at all: the ' +
        'route is the same and so is the dark inside.',
    },
    facts: [
      {
        el: 'Βρίσκεται στα 1.360 μέτρα, μέσα στον Παρνασσό.',
        en: 'It lies at 1,360 metres, inside Parnassus.',
      },
      {
        el: 'Ήταν ιερή του Πάνα και των Νυμφών, χωρίς ιερείς και χωρίς πληρωμή.',
        en: 'It was sacred to Pan and the Nymphs, with no priests and no payment.',
      },
      {
        el: 'Στο χώμα της βρέθηκαν χιλιάδες μικρά δώρα, ανάμεσά τους πολλοί αστράγαλοι.',
        en: 'Thousands of small gifts were found in its soil, many of them knucklebones.',
      },
    ],
    location: {
      lat: 38.515,
      lng: 22.52056,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2261709', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Corycian Cave', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Σε τι διέφερε η σπηλιά από το μαντείο των Δελφών;',
        en: 'How was the cave different from the oracle at Delphi?',
      },
      answers: [
        {
          el: 'Δεν είχε ιερείς ούτε πληρωμή',
          en: 'It had no priests and no payment',
        },
        { el: 'Ήταν ανοιχτή μόνο στους βασιλιάδες', en: 'It was open only to kings' },
        { el: 'Λειτουργούσε μόνο τον χειμώνα', en: 'It only worked in winter' },
        { el: 'Δεν επιτρεπόταν να αφήσεις τίποτα', en: 'You were not allowed to leave anything' },
      ],
      explanation: {
        el:
          'Γι’ αυτό τα ευρήματά της είναι μικρά και ταπεινά: τα άφηναν άνθρωποι που δεν ' +
          'είχαν να δώσουν άγαλμα.',
        en:
          'That is why its finds are small and humble: they were left by people who had no ' +
          'statue to give.',
      },
    },
  },

  // --------------------------------------------------------------------- galaxidi
  {
    id: 'delphi-galaxidi',
    cityId: 'delphi',
    emoji: '⛵',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Γαλαξίδι', en: 'Galaxidi' },
    tagline: {
      el: 'Ένα μικρό λιμάνι που είχε από τους μεγαλύτερους στόλους της Ελλάδας',
      en: 'A small harbour that once had one of Greece’s largest fleets',
    },
    story: {
      el:
        'Κοιτάζοντας το Γαλαξίδι σήμερα, ένα ήσυχο λιμανάκι με πέτρινα σπίτια, δύσκολα ' +
        'πιστεύεις ότι τον 19ο αιώνα ήταν από τα μεγαλύτερα ναυτικά κέντρα της χώρας. ' +
        'Είχε εκατοντάδες ιστιοφόρα και δικά του καρνάγια, δηλαδή μέρη όπου έχτιζαν ' +
        'καράβια με το χέρι, από ξύλο. Τα μεγάλα σπίτια που βλέπεις στα σοκάκια είναι ' +
        'καπετανόσπιτα, χτισμένα με τα κέρδη των ταξιδιών. Και μετά όλα τελείωσαν γρήγορα: ' +
        'ήρθαν τα ατμόπλοια, το ξύλο και το πανί δεν μπορούσαν να συναγωνιστούν τον ατμό, ' +
        'και ο στόλος έσβησε μέσα σε μία γενιά. Το ναυτικό μουσείο της πόλης φυλάει ' +
        'μοντέλα καραβιών, ναυτικά όργανα και χειρόγραφα ημερολόγια ταξιδιών. Είναι ένα μάθημα για το πώς μια ' +
        'τεχνολογία μπορεί να σβήσει έναν ολόκληρο τόπο μέσα σε λίγα χρόνια, χωρίς ' +
        'πόλεμο και χωρίς καταστροφή.',
      en:
        'Looking at Galaxidi today, a quiet little harbour of stone houses, it is hard to ' +
        'believe that in the 19th century it was one of the biggest seafaring centres in ' +
        'the country. It had hundreds of sailing ships and yards of its own, places where ' +
        'ships were built by hand, out of wood. The large houses you see in the lanes are ' +
        'captains’ houses, built with the profits of voyages. And then it all ended ' +
        'quickly: steamships arrived, wood and canvas could not compete with steam, and the ' +
        'fleet died out within one generation. The town’s maritime museum keeps models, ' +
        'instruments and ships’ logs. It is a lesson in how a technology can switch off a ' +
        'whole place in a few years, with no war and no disaster.',
    },
    facts: [
      {
        el: 'Τον 19ο αιώνα είχε εκατοντάδες ιστιοφόρα και δικά του καρνάγια.',
        en: 'In the 19th century it had hundreds of sailing ships and its own shipyards.',
      },
      {
        el: 'Τα μεγάλα σπίτια του χτίστηκαν από καπετάνιους με τα κέρδη των ταξιδιών.',
        en: 'Its big houses were built by captains with the profits of their voyages.',
      },
      {
        el: 'Ο στόλος έσβησε μέσα σε μία γενιά, όταν ήρθαν τα ατμόπλοια.',
        en: 'The fleet died out within a generation, once steamships arrived.',
      },
    ],
    location: {
      lat: 38.37667,
      lng: 22.38361,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q677906', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Galaxidi', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Γιατί έσβησε ο στόλος του Γαλαξιδίου;',
        en: 'Why did the fleet of Galaxidi die out?',
      },
      answers: [
        {
          el: 'Γιατί ήρθαν τα ατμόπλοια',
          en: 'Because steamships arrived',
        },
        { el: 'Γιατί μια καταιγίδα βύθισε όλα τα καράβια', en: 'Because a storm sank every ship' },
        { el: 'Γιατί τελείωσε το ξύλο στην περιοχή', en: 'Because the area ran out of wood' },
        { el: 'Γιατί το λιμάνι γέμισε άμμο', en: 'Because the harbour filled with sand' },
      ],
      explanation: {
        el:
          'Το ίδιο συνέβη σε δεκάδες ναυτικές πόλεις. Η αλλαγή τεχνολογίας δεν ρωτάει ' +
          'ποιος είναι καλός στη δουλειά του.',
        en:
          'The same happened to dozens of seafaring towns. A change of technology does not ' +
          'ask who is good at the job.',
      },
    },
  },

  // ---------------------------------------------------------------------- amfissa
  {
    id: 'delphi-amfissa',
    cityId: 'delphi',
    emoji: '🏯',
    category: 'history',
    difficulty: 3,

    name: { el: 'Κάστρο της Άμφισσας', en: 'The Castle of Amfissa' },
    tagline: {
      el: 'Μεσαιωνικοί πύργοι πάνω σε αρχαία τείχη, στο ίδιο κτίριο',
      en: 'Medieval towers on ancient walls, in one building',
    },
    story: {
      el:
        'Πάνω από την Άμφισσα, στον λόφο της αρχαίας ακρόπολης, στέκεται ένα κάστρο που ' +
        'διαβάζεται σαν βιβλίο αν κοιτάξεις από κάτω προς τα πάνω. Στη βάση του υπάρχουν ' +
        'τεράστιοι αρχαίοι ογκόλιθοι, δουλεμένοι ώστε να κουμπώνουν μεταξύ τους χωρίς ' +
        'λάσπη, σαν παζλ. Πάνω τους κάθονται μεσαιωνικοί τοίχοι από μικρότερες πέτρες και ' +
        'ασβέστη, και πιο ψηλά πύργοι που έχτισαν Φράγκοι τον 13ο αιώνα. Κανείς δεν ' +
        'γκρέμισε το προηγούμενο για να χτίσει το δικό του: ο καθένας πάτησε πάνω σε ' +
        'αυτό που βρήκε. Κάτω απλώνεται η κοιλάδα με τους ελαιώνες, ένας από τους ' +
        'μεγαλύτερους της Ελλάδας, με δέντρα που είναι κι αυτά εκατοντάδων ετών. Οι ' +
        'αρχαίες πέτρες στη βάση είναι τόσο καλά δουλεμένες που δεν μπορείς να περάσεις ' +
        'ούτε χαρτί ανάμεσά τους, και στέκονται ακόμα χωρίς τίποτα να τις κολλάει.',
      en:
        'Above Amfissa, on the hill of the ancient acropolis, stands a castle that reads ' +
        'like a book if you look at it from the bottom up. At its base are enormous ancient ' +
        'blocks, worked so that they lock together without mortar, like a puzzle. On top of ' +
        'them sit medieval walls of smaller stones and lime, and higher still, towers built ' +
        'by Frankish lords in the 13th century. Nobody pulled down what came before in ' +
        'order to build their own: each of them stood on what they found. Below spreads the ' +
        'valley of olive trees, one of the largest in Greece, with trees that are themselves ' +
        'hundreds of years old. The ancient blocks at the base are cut so precisely that ' +
        'you cannot slide paper between them, and they hold with nothing sticking them ' +
        'together.',
    },
    facts: [
      {
        el: 'Στη βάση του υπάρχουν αρχαίοι ογκόλιθοι χτισμένοι χωρίς λάσπη.',
        en: 'Ancient blocks built without mortar sit at its base.',
      },
      {
        el: 'Οι πύργοι του χτίστηκαν από Φράγκους τον 13ο αιώνα.',
        en: 'Its towers were built by Frankish lords in the 13th century.',
      },
      {
        el: 'Από κάτω απλώνεται ένας από τους μεγαλύτερους ελαιώνες της Ελλάδας.',
        en: 'One of the largest olive groves in Greece spreads out below it.',
      },
    ],
    location: {
      lat: 38.53116,
      lng: 22.3738,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q38281545', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'The archaeological site on the acropolis hill where the castle stands, not the modern town (Q470481) 700 m downhill. Only Wikidata carries a coordinate.',
    },
    question: {
      q: {
        el: 'Τι μαθαίνεις κοιτάζοντας το κάστρο από κάτω προς τα πάνω;',
        en: 'What do you learn by looking at the castle from the bottom up?',
      },
      answers: [
        {
          el: 'Ότι κάθε εποχή έχτισε πάνω στην προηγούμενη',
          en: 'That each age built on the one before',
        },
        { el: 'Ότι χτίστηκε ολόκληρο σε έναν χρόνο', en: 'That the whole thing was built in one year' },
        { el: 'Ότι το έχτισαν από πάνω προς τα κάτω', en: 'That it was built from the top downwards' },
        { el: 'Ότι είναι φτιαγμένο μόνο από μάρμαρο', en: 'That it is made only of marble' },
      ],
      explanation: {
        el:
          'Το χτίσιμο από την αρχή κοστίζει. Το να πατήσεις πάνω σε γερό αρχαίο τείχος ' +
          'είναι φθηνότερο και ασφαλέστερο.',
        en:
          'Building from scratch costs. Standing on a solid ancient wall is cheaper and ' +
          'safer.',
      },
    },
  },

  // ----------------------------------------------------------------- hosios loukas
  {
    id: 'delphi-hosios-loukas',
    cityId: 'delphi',
    emoji: '✨',
    category: 'art',
    difficulty: 3,

    name: { el: 'Μονή Οσίου Λουκά', en: 'The Monastery of Hosios Loukas' },
    tagline: {
      el: 'Χρυσά ψηφιδωτά σε έναν θόλο, χίλια χρόνια τώρα',
      en: 'Gold mosaics in a dome, for a thousand years',
    },
    story: {
      el:
        'Μισή ώρα ανατολικά των Δελφών, σε μια πλαγιά με αμυγδαλιές, στέκεται ένα ' +
        'μοναστήρι του 10ου και 11ου αιώνα που θεωρείται από τα σημαντικότερα βυζαντινά ' +
        'κτίρια στον κόσμο. Το ίδρυσε ένας ερημίτης, ο Λουκάς, που έζησε εκεί μόνος του ' +
        'και έγινε γνωστός στην περιοχή. Μπαίνεις μέσα και το πρώτο πράγμα που συμβαίνει ' +
        'είναι το φως: οι θόλοι είναι σκεπασμένοι με ψηφιδωτά σε χρυσό φόντο, και ο χρυσός ' +
        'δεν είναι επίπεδος. Κάθε μικρό κομμάτι έχει τοποθετηθεί με ελαφρώς διαφορετική ' +
        'κλίση, ώστε να πιάνει το φως σε άλλη γωνία. Το αποτέλεσμα είναι ότι ο τοίχος ' +
        'φαίνεται να τρεμοπαίζει καθώς περπατάς, σαν να αναπνέει. Είναι ένα τέχνασμα ' +
        'χιλίων ετών που δουλεύει ακόμα, και δεν χρειάζεται ρεύμα ούτε συντήρηση: ' +
        'χρειάζεται μόνο ένα παράθυρο και κάποιον που περπατάει.',
      en:
        'Half an hour east of Delphi, on a hillside of almond trees, stands a monastery of ' +
        'the 10th and 11th centuries counted among the most important Byzantine buildings ' +
        'in the world. It was founded by a hermit, Luke, who lived there alone and became ' +
        'known across the region. You walk in and the first thing that happens is the ' +
        'light: the domes are covered with mosaics on gold grounds, and the gold is not ' +
        'flat. Each small piece was set at a slightly different angle, so that it catches ' +
        'the light differently. The result is that the wall seems to flicker as you walk, as ' +
        'though it were breathing. It is a thousand-year-old trick and it still works, with ' +
        'no electricity and no maintenance: all it needs is a window and somebody walking.',
    },
    facts: [
      {
        el: 'Χτίστηκε τον 10ο και 11ο αιώνα και ιδρύθηκε από έναν ερημίτη.',
        en: 'It was built in the 10th and 11th centuries and founded by a hermit.',
      },
      {
        el: 'Τα χρυσά ψηφιδωτά του είναι τοποθετημένα σε διαφορετικές κλίσεις, για να παίζουν με το φως.',
        en: 'Its gold mosaics are set at varying angles, so they play with the light.',
      },
      {
        el: 'Είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO.',
        en: 'It is a UNESCO World Heritage Site.',
      },
    ],
    location: {
      lat: 38.39514,
      lng: 22.74632,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q844841', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Hosios Loukas', deltaM: 51 },
      ],
      verifiedAt: '2026-09-11',
      note: 'The monastery, not the settlement named after it (Q114490836) 60 m away. Grade C because Wikipedia is 51 m off, outside the 30 m agreement window.',
    },
    question: {
      q: {
        el: 'Γιατί μοιάζει να τρεμοπαίζει ο χρυσός στους θόλους;',
        en: 'Why does the gold in the domes seem to flicker?',
      },
      answers: [
        {
          el: 'Γιατί κάθε ψηφίδα γέρνει αλλιώς',
          en: 'Because every tile leans differently',
        },
        { el: 'Γιατί πίσω από τον τοίχο υπάρχουν κεριά', en: 'Because there are candles behind the wall' },
        { el: 'Γιατί ο χρυσός είναι βαμμένος με λάδι', en: 'Because the gold is painted with oil' },
        { el: 'Γιατί ο θόλος γυρίζει πολύ αργά', en: 'Because the dome turns very slowly' },
      ],
      explanation: {
        el:
          'Χιλιάδες μικροί καθρέφτες σε λίγο διαφορετικές γωνίες. Ο τοίχος αλλάζει επειδή ' +
          'κινείσαι εσύ.',
        en:
          'Thousands of tiny mirrors at slightly different angles. The wall changes because ' +
          'you are the one moving.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'delphi-sacred-way',
    cityId: 'delphi',
    emoji: '🔮',
    name: { el: 'Η Ιερά Οδός', en: 'The Sacred Way' },
    promise: {
      el: 'Η ανηφόρα που ανέβαινε όποιος είχε να ρωτήσει κάτι, και ό,τι άφησε πίσω του.',
      en: 'The climb everyone with a question made, and everything they left behind.',
    },
    placeIds: [
      'delphi-site',
      'delphi-athenian-treasury',
      'delphi-theatre',
      'delphi-stadium',
      'delphi-tholos',
      'delphi-museum',
    ],
  },
  {
    id: 'delphi-the-mountain',
    cityId: 'delphi',
    emoji: '🏔️',
    name: { el: 'Το βουνό από πάνω', en: 'The mountain above' },
    promise: {
      el: 'Από πού έρχεται το νερό, πού κατέληγε, και μια σπηλιά που δεν ζητούσε τίποτα.',
      en: 'Where the water comes from, where it ended up, and a cave that asked for nothing.',
    },
    placeIds: ['delphi-castalian-spring', 'delphi-corycian-cave', 'delphi-parnassus'],
  },
  {
    id: 'delphi-after-the-oracle',
    cityId: 'delphi',
    emoji: '🧵',
    name: { el: 'Μετά το μαντείο', en: 'After the oracle' },
    promise: {
      el: 'Χίλια χρόνια αργότερα: χρυσά ψηφιδωτά, ένα κάστρο σε στρώσεις, ένα λιμάνι και δύο υφαντές γιορτές.',
      en: 'A thousand years later: gold mosaics, a castle in layers, a harbour and two woven festivals.',
    },
    placeIds: [
      'delphi-hosios-loukas',
      'delphi-amfissa',
      'delphi-galaxidi',
      'delphi-festivals-museum',
    ],
  },
];
