/**
 * WiseBot World — Berlin.
 *
 * Sixteen places, two of them museums with an interior. Converted from the Explorer
 * product in the same way as `paris.ts`: all ten of Explorer's Berlin spots are here,
 * their text reshaped to this module's lengths and voice, and six places were added.
 *
 * Every coordinate is copied from `data/world/coords/berlin.json`, field for field.
 * Nothing graded `D`. No place claims an `entrance`, because no door in this city has
 * been measured; the door guidance lives in `location.findIt`, which carries no licence
 * and comes from each venue's own page.
 *
 * The judgement calls, all of them:
 *
 *  - **Nothing at all is taken from Explorer's coordinates.** Three of its ten pins were
 *    matched to the wrong Wikidata item in `docs/world/research/explorer-pins.json` and a
 *    fourth was 507 m out. The Berliner Dom pin had been matched to the SECOND cathedral,
 *    the one of 1747–1894 that was demolished to clear the site for the present building;
 *    the Potsdamer Platz pin to the S-Bahn station under the square; the East Side Gallery
 *    to a point half a kilometre along the wall. All three were re-picked from Wikidata.
 *  - **Six additions**, because Explorer has no model for a museum a child walks into and
 *    its ten spots leave five of the eight categories empty: the Neues Museum and the
 *    Museum für Naturkunde (the two interiors), the Deutsches Technikmuseum (science), the
 *    Olympiastadion (sport), the Markthalle IX (food) and the Zoologischer Garten (nature).
 *  - **The Pergamonmuseum is deliberately absent**, famous as it is: it has been wholly
 *    closed for rebuilding since October 2023, and a museum a child cannot enter is the one
 *    thing this module's museums must not be.
 *  - **Explorer's `riddle`, `parentHint` and `onSite` fields are gone.** They belong to a
 *    GPS treasure hunt. The riddles here are a different object: they describe one exhibit
 *    inside a museum, in the first person, and are answered by tapping it.
 *
 * `el` and `en` only. The other four arrive as overlay files and never as extra keys here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------ brandenburger tor
  {
    id: 'berlin-brandenburg-gate',
    cityId: 'berlin',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πύλη του Βρανδεμβούργου', en: 'The Brandenburger Tor' },
    tagline: {
      el: 'Μια πύλη που για 28 χρόνια δεν άφηνε κανέναν να περάσει',
      en: 'A gateway that for 28 years let nobody through',
    },
    story: {
      el:
        'Η πύλη τελείωσε το 1791. Ο αρχιτέκτονας Καρλ Γκότχαρντ Λάνγκχανς δεν είχε πάει ' +
        'ποτέ στην Αθήνα, είχε όμως μελετήσει σχέδια των Προπυλαίων, της μεγάλης εισόδου ' +
        'της Ακρόπολης, και έδωσε στο Βερολίνο μια πύλη φτιαγμένη σαν εκείνη: έξι χοντρές ' +
        'κολόνες σε κάθε πλευρά και πέντε περάσματα ανάμεσά τους. Από το μεσαίο, το πιο ' +
        'φαρδύ, περνούσε παλιά μόνο η βασιλική οικογένεια. Στην κορυφή τρέχει η Quadriga, ' +
        'μια θεά σε άρμα που το σέρνουν τέσσερα άλογα. Το 1806 ο Ναπολέων νίκησε τους ' +
        'Πρώσους, ξήλωσε το άρμα και το πήγε στο Παρίσι. Οκτώ χρόνια αργότερα γύρισε πίσω ' +
        'και το Βερολίνο έκανε γιορτή. Μετά ήρθε το πιο δύσκολο κομμάτι της ζωής της. Από ' +
        'το 1961 ως το 1989 το Τείχος περνούσε λίγα μέτρα δυτικά, και η πύλη έμεινε ' +
        'κλεισμένη στην άδεια λωρίδα ανάμεσα στα δύο μισά της πόλης, εκεί που κανείς δεν ' +
        'μπορούσε να περπατήσει από κάτω της. Ξανάνοιξε στις 22 Δεκεμβρίου 1989. Μια πύλη ' +
        'είναι φτιαγμένη για να περνάς.',
      en:
        'The gate was finished in 1791. Its architect, Carl Gotthard Langhans, had never ' +
        'been to Athens, but he had studied drawings of the Propylaea, the great entrance of ' +
        'the Acropolis, and he gave Berlin a gateway shaped like it: six fat columns on each ' +
        'side, with five passages between them. Long ago only the royal family was allowed ' +
        'through the wide middle one. On top rides the Quadriga, a goddess in a chariot ' +
        'pulled by four horses. In 1806 Napoleon beat the Prussians, had the chariot taken ' +
        'down and carted it off to Paris. Eight years later it came home and Berlin threw a ' +
        'party. Then came the hardest part of its life. From 1961 to 1989 the Berlin Wall ' +
        'ran a few metres to the west, and the gate stood shut inside the empty strip ' +
        'between the two halves of the city, where nobody at all could walk under it. It ' +
        'opened again on 22 December 1989. A gate is made for going through.',
    },
    facts: [
      {
        el: 'Έξι κολόνες σε κάθε πλευρά, δώδεκα συνολικά, και πέντε περάσματα ανάμεσά τους.',
        en: 'Six columns on each side, twelve in all, with five passages between them.',
      },
      {
        el: 'Η Quadriga έλειψε οκτώ χρόνια στο Παρίσι, από το 1806 ως το 1814.',
        en: 'The Quadriga was away in Paris for eight years, from 1806 to 1814.',
      },
      {
        el: 'Η πύλη ξανάνοιξε στις 22 Δεκεμβρίου 1989, έξι εβδομάδες μετά την πτώση του Τείχους.',
        en: 'The gate reopened on 22 December 1989, six weeks after the Wall fell.',
      },
    ],
    location: {
      lat: 52.51627,
      lng: 13.37772,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q82425', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Brandenburg Gate', deltaM: 4 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Grade B because the OpenStreetMap fetch failed on this lookup, so the cross-check is missing. Wikidata and Wikipedia agree within 4 m.',
      findIt: {
        el: 'Στάσου στην Pariser Platz, στην ανατολική πλευρά: από εκεί η Quadriga έρχεται καταπάνω σου.',
        en: 'Stand on Pariser Platz, the eastern side: from there the Quadriga is driving straight at you.',
      },
    },
    question: {
      q: {
        el: 'Ποιο αρχαίο κτίριο αντέγραψε ο αρχιτέκτονας της πύλης;',
        en: 'Which ancient building did the gate’s architect copy?',
      },
      answers: [
        { el: 'Τα Προπύλαια της Ακρόπολης, στην Αθήνα', en: 'The Propylaea of the Acropolis' },
        { el: 'Το Κολοσσαίο, τη μεγάλη αρένα της Ρώμης', en: 'The Colosseum, the great arena of Rome' },
        { el: 'Τον Πύργο της Πίζας, που γέρνει στην Ιταλία', en: 'The Leaning Tower of Pisa, over in Italy' },
        { el: 'Μια πυραμίδα της Αιγύπτου', en: 'A pyramid from Giza, in Egypt' },
      ],
      explanation: {
        el:
          'Ο Λάνγκχανς δεν είχε πάει ποτέ στην Αθήνα. Δούλεψε από σχέδια των Προπυλαίων, ' +
          'και γι’ αυτό η πύλη του Βερολίνου φοράει ελληνικές κολόνες.',
        en:
          'Langhans had never been to Athens. He worked from drawings of the Propylaea, ' +
          'which is why a gate in Berlin wears Greek columns.',
      },
    },
  },

  // -------------------------------------------------------------------- reichstag
  {
    id: 'berlin-reichstag',
    cityId: 'berlin',
    emoji: '🪟',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ράιχσταγκ', en: 'The Reichstag' },
    tagline: {
      el: 'Το κοινοβούλιο φοράει γυάλινο καπέλο, και αυτό είναι μήνυμα',
      en: 'A parliament in a glass hat, and the glass is a message',
    },
    story: {
      el:
        'Κοινοβούλιο λέγεται η ομάδα ανθρώπων που διαλέγει ένας λαός για να μαλώνει για ' +
        'τους νόμους και μετά να τους ψηφίζει. Αυτό το κτίριο τελείωσε το 1894 για να ' +
        'στεγάσει το κοινοβούλιο της Γερμανίας, και το 1916 μπήκαν πάνω από τις κολόνες ' +
        'τέσσερις μπρούντζινες λέξεις: «Dem Deutschen Volke», δηλαδή «Στον γερμανικό λαό». ' +
        'Ο αιώνας που ακολούθησε ήταν σκληρός. Το 1933 μια φωτιά έκαψε τη μεγάλη του ' +
        'αίθουσα, ο πόλεμος το γέμισε τρύπες, και μετά έμεινε σαράντα χρόνια σχεδόν άδειο ' +
        'δίπλα στο Τείχος: ένα σπίτι κοινοβουλίου χωρίς κοινοβούλιο μέσα του. Το 1995 οι ' +
        'καλλιτέχνες Κρίστο και Ζαν-Κλοντ το τύλιξαν ολόκληρο με ασημένιο ύφασμα για δύο ' +
        'εβδομάδες, και εκατομμύρια άνθρωποι ήρθαν να δουν το ίδιο τους το κοινοβούλιο σαν ' +
        'τεράστιο δώρο. Ύστερα ο αρχιτέκτονας Νόρμαν Φόστερ του έβαλε γυάλινο θόλο. ' +
        'Ανεβαίνεις μια στριφογυριστή ράμπα μέσα του και κοιτάς από ψηλά τους βουλευτές να ' +
        'δουλεύουν. Αυτός ακριβώς είναι ο λόγος που ο θόλος είναι από γυαλί.',
      en:
        'A parliament is the group of people a country chooses to argue about its laws and ' +
        'then vote on them. This building was finished in 1894 to give Germany’s parliament ' +
        'a home, and in 1916 four bronze words were set above the columns: “Dem Deutschen ' +
        'Volke”, meaning “To the German People”. The century that followed was hard on it. ' +
        'A fire gutted its great hall in 1933, the war left it full of holes, and then it ' +
        'stood forty years almost empty beside the Wall: a parliament house with no ' +
        'parliament inside. In 1995 the artists Christo and Jeanne-Claude wrapped the whole ' +
        'thing in silver cloth for two weeks, and millions of people came to look at their ' +
        'own parliament as though it were an enormous present. Then the architect Norman ' +
        'Foster gave it a glass dome. You climb a spiral ramp inside it and look down at the ' +
        'members at work. That is exactly why the dome is made of glass.',
    },
    facts: [
      {
        el: 'Τελείωσε το 1894. Τα μπρούντζινα γράμματα «Dem Deutschen Volke» μπήκαν το 1916.',
        en: 'It was finished in 1894. The bronze letters “Dem Deutschen Volke” went up in 1916.',
      },
      {
        el: 'Το 1995 ο Κρίστο και η Ζαν-Κλοντ το τύλιξαν ολόκληρο με ύφασμα για δύο εβδομάδες.',
        en: 'In 1995 Christo and Jeanne-Claude wrapped the whole building in cloth for two weeks.',
      },
      {
        el: 'Η ανάβαση στον γυάλινο θόλο δεν κοστίζει τίποτα, θέλει όμως κράτηση από πριν.',
        en: 'Going up into the glass dome costs nothing, but you have to book ahead.',
      },
    ],
    location: {
      lat: 52.51861,
      lng: 13.37611,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q151897', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Reichstag building', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The building, not the legislature: Q151897 is the Reichstagsgebäude. Grade B because the OpenStreetMap fetch failed on this lookup; Wikidata and Wikipedia land on the same point.',
      findIt: {
        el: 'Η ουρά για τον θόλο ξεκινά από το λευκό περίπτερο ελέγχου στη δυτική πλευρά, πάνω στο γρασίδι.',
        en: 'The queue for the dome starts at the white security pavilion on the west side, out on the lawn.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έβαλαν γυάλινο θόλο πάνω από την αίθουσα;',
        en: 'Why is there a glass dome above the chamber?',
      },
      answers: [
        { el: 'Για να βλέπει ο κόσμος από ψηλά το κοινοβούλιο να δουλεύει', en: 'So that people up above can watch parliament working' },
        { el: 'Για να μπαίνει τόσο φως ώστε να μη χρειάζονται λάμπες', en: 'So enough daylight gets in' },
        { el: 'Για να ξαναγίνει το κτίριο ακριβώς όπως ήταν το 1894', en: 'To make it what it was in 1894' },
        { el: 'Για να ξεχωρίζει από μακριά σαν σήμα ολόκληρης της πόλης', en: 'To stand out as a city emblem' },
      ],
      explanation: {
        el:
          'Οι επισκέπτες περπατούν πάνω από την αίθουσα και κοιτάζουν μέσα. Το γυαλί λέει ' +
          'ότι εδώ δεν κρύβεται τίποτα: όποιος θέλει, μπορεί να δει.',
        en:
          'Visitors walk above the chamber and look down into it. The glass says that ' +
          'nothing here is hidden: anyone who wants to can look in.',
      },
    },
  },

  // ------------------------------------------------------------------ siegessäule
  {
    id: 'berlin-victory-column',
    cityId: 'berlin',
    emoji: '🥇',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Siegessäule, η Στήλη της Νίκης', en: 'The Siegessäule' },
    tagline: {
      el: 'Οι Βερολινέζοι τη φωνάζουν Χρυσή Έλσα και έχει 285 σκαλιά',
      en: 'Berliners call her Golden Elsie, and she has 285 steps',
    },
    story: {
      el:
        'Η στήλη στήθηκε το 1873, σε σχέδιο του Χάινριχ Στρακ, για να γιορτάσει τρεις ' +
        'νίκες σε τρεις πολέμους. Μέσα στις αυλακώσεις της οι χτίστες κάρφωσαν αληθινές ' +
        'κάννες από κανόνια που είχαν πάρει από τους ηττημένους στρατούς, και τις έβαψαν ' +
        'χρυσές. Στην κορυφή στέκεται η Βικτόρια, η θεά της νίκης: πάνω από οκτώ μέτρα ' +
        'ύψος και βάρος σαν έξι ελέφαντες μαζί. Οι Βερολινέζοι, που δεν σηκώνουν πολλή ' +
        'σοβαρότητα, τη λένε Goldelse, δηλαδή Χρυσή Έλσα. Η στήλη δεν στεκόταν πάντα εδώ. ' +
        'Το 1938 τη ξήλωσαν κομμάτι κομμάτι από την πλατεία μπροστά στο Ράιχσταγκ και την ' +
        'ξανάχτισαν στη μέση του πάρκου, προσθέτοντας άλλο ένα τμήμα ώστε να φτάσει τα 67 ' +
        'μέτρα. Αν ανέβεις τα 285 σκαλιά της, βλέπεις από ψηλά ολόκληρο τον Tiergarten, το ' +
        'δάσος όπου παλιά κυνηγούσαν οι βασιλιάδες και όπου σήμερα κάνουν πικνίκ όλοι.',
      en:
        'The column went up in 1873, designed by Heinrich Strack, to celebrate three ' +
        'victories in three wars. Into its grooves the builders set real cannon barrels ' +
        'taken from the defeated armies, and covered them in gold. On top stands Victoria, ' +
        'goddess of victory: over eight metres tall and as heavy as six elephants put ' +
        'together. Berliners, who do not put up with much solemnity, call her Goldelse, ' +
        'Golden Elsie. The column has not always stood here. In 1938 it was taken apart, ' +
        'piece by piece, from the square in front of the Reichstag and rebuilt in the middle ' +
        'of the park, with one extra section added to bring it up to 67 metres. Climb its ' +
        '285 steps and you look out over the whole Tiergarten, the forest where kings once ' +
        'went hunting and where everybody now goes for a picnic.',
    },
    facts: [
      {
        el: 'Έχει ύψος 67 μέτρα, αφού το 1938 της πρόσθεσαν άλλο ένα τμήμα.',
        en: 'It is 67 metres tall, after one more section was added to it in 1938.',
      },
      {
        el: 'Η χρυσή Βικτόρια στην κορυφή ξεπερνά τα οκτώ μέτρα ύψος.',
        en: 'The golden Victoria on top is more than eight metres tall.',
      },
      {
        el: 'Ως την κορυφή ανεβαίνεις με τα πόδια: 285 σκαλιά, χωρίς ασανσέρ.',
        en: 'You reach the top on foot: 285 steps, and no lift.',
      },
    ],
    location: {
      lat: 52.51451,
      lng: 13.35011,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q154987', deltaM: 0 },
        { kind: 'osm', ref: 'way/718035022', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Berlin Victory Column', deltaM: 10 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Η στήλη στέκεται σε νησίδα μέσα σε κυκλικό κόμβο. Πήγαινε με τα τέσσερα πεζά τούνελ, ποτέ πάνω από τον δρόμο.',
        en: 'The column stands on an island in a roundabout. Use the four pedestrian tunnels, never the road.',
      },
    },
    question: {
      q: {
        el: 'Τι είναι καρφωμένο μέσα στις αυλακώσεις της στήλης;',
        en: 'What is set into the grooves of the column?',
      },
      answers: [
        { el: 'Αληθινές κάννες κανονιών, βαμμένες χρυσές', en: 'Real cannon barrels, covered over in gold' },
        { el: 'Μαρμάρινα αντίγραφα κανονιών, φερμένα από την Ιταλία', en: 'Marble copies of cannons, brought over from Italy' },
        { el: 'Χάλκινοι σωλήνες που κρατούν τη στήλη όρθια στον αέρα', en: 'Copper pipes that hold the column upright in the wind' },
        { el: 'Χρυσά κλαδιά δάφνης, ένα για κάθε χρονιά της νίκης', en: 'Gold laurel branches, one for each year of victory' },
      ],
      explanation: {
        el:
          'Είναι αληθινές κάννες από κανόνια των ηττημένων στρατών. Τα όπλα δεν πετάχτηκαν: ' +
          'χρυσώθηκαν και μπήκαν στη στήλη για να τα βλέπουν όλοι.',
        en:
          'They are real barrels from the cannons of the defeated armies. The weapons were ' +
          'not thrown away: they were gilded and put on show.',
      },
    },
  },

  // -------------------------------------------------------------- potsdamer platz
  {
    id: 'berlin-potsdamer-platz',
    cityId: 'berlin',
    emoji: '🚦',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Η πλατεία Potsdamer Platz', en: 'Potsdamer Platz' },
    tagline: {
      el: 'Από την πιο πολυσύχναστη πλατεία σε χωράφι με κουνέλια',
      en: 'From the busiest square in Europe to a field of rabbits',
    },
    story: {
      el:
        'Πριν από εκατό χρόνια, στη δεκαετία του 1920, αυτή ήταν η πιο πολυσύχναστη ' +
        'πλατεία της Ευρώπης: τραμ, λεωφορεία, αυτοκίνητα, κάρα με άλογα και χιλιάδες ' +
        'πεζοί μπλέκονταν όλη μέρα. Το μπέρδεμα ήταν τόσο μεγάλο που το 1924 στήθηκε εδώ ' +
        'ένας πύργος με πέντε πλευρές και φανάρια σε κάθε πλευρά, με έναν αστυνομικό ' +
        'καθισμένο μέσα του να τα αλλάζει με το χέρι. Στον πόλεμο η πλατεία ισοπεδώθηκε, ' +
        'και μετά το Τείχος πέρασε ακριβώς από τη μέση της. Για περισσότερα από σαράντα ' +
        'χρόνια εδώ δεν υπήρχε σχεδόν τίποτα: χορτάρι, φράχτες και κουνέλια. Όταν έπεσε το ' +
        'Τείχος, το Βερολίνο ξανάχτισε την πλατεία από το μηδέν, και μέσα σε δέκα χρόνια ' +
        'φύτρωσαν ουρανοξύστες, κινηματογράφοι και μια πλατεία με σκεπή σαν τεράστια ' +
        'σκηνή. Ο πύργος με τα φανάρια που βλέπεις σήμερα είναι αντίγραφο του 1997. Ένα ' +
        'άδειο χωράφι μπορεί να ξαναγίνει καρδιά μιας πόλης.',
      en:
        'A hundred years ago, in the 1920s, this was the busiest square in Europe: trams, ' +
        'buses, cars, horse carts and thousands of people on foot tangled together all day. ' +
        'The muddle was so bad that in 1924 a tower with five sides was put up here, with ' +
        'traffic lights on every side and a policeman sitting inside switching them by hand. ' +
        'The war flattened the square, and afterwards the Wall ran straight through the ' +
        'middle of it. For more than forty years there was almost nothing here: grass, ' +
        'fences and rabbits. When the Wall came down, Berlin rebuilt the square from ' +
        'nothing, and within ten years there were towers, cinemas and a plaza roofed like an ' +
        'enormous tent. The traffic-light tower you see today is a copy made in 1997. An ' +
        'empty field can become the heart of a city all over again.',
    },
    facts: [
      {
        el: 'Το 1924 στήθηκε εδώ ένας πύργος με φανάρια σε πέντε πλευρές.',
        en: 'In 1924 a tower with traffic lights on five sides was put up here.',
      },
      {
        el: 'Το όνομά της το πήρε από την πύλη που οδηγούσε στον δρόμο για το Πότσνταμ.',
        en: 'It is named after the gate that led out onto the road to Potsdam.',
      },
      {
        el: 'Στη δεκαετία του 1990 ήταν το μεγαλύτερο εργοτάξιο ολόκληρης της Ευρώπης.',
        en: 'In the 1990s it was the largest building site in the whole of Europe.',
      },
    ],
    location: {
      lat: 52.50894,
      lng: 13.37633,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q152252', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Potsdamer Platz', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The square, not the station: the Explorer pin had been matched to Q106086519, the S-Bahn platforms underneath. Grade B because the OpenStreetMap fetch failed on this lookup.',
      findIt: {
        el: 'Βγες από τον σταθμό προς την έξοδο Potsdamer Platz: ο πύργος με τα φανάρια είναι στη νησίδα μπροστά σου.',
        en: 'Leave the station by the Potsdamer Platz exit: the traffic-light tower is on the island in front of you.',
      },
    },
    question: {
      q: {
        el: 'Τι δουλειά έκανε ο αστυνομικός μέσα στον πύργο του 1924;',
        en: 'What was the policeman inside the 1924 tower doing?',
      },
      answers: [
        { el: 'Άλλαζε ο ίδιος τα φανάρια με το χέρι', en: 'He switched the traffic lights by hand himself' },
        { el: 'Μετρούσε τα αυτοκίνητα', en: 'He counted the cars going past' },
        { el: 'Πουλούσε εισιτήρια για τα τραμ', en: 'He sold tickets for the trams' },
        { el: 'Φύλαγε το ρολόι της πόλης', en: 'He guarded the city clock' },
      ],
      explanation: {
        el:
          'Τα φανάρια δεν άλλαζαν μόνα τους. Ένας άνθρωπος καθόταν εκεί πάνω και κοίταζε ' +
          'την κίνηση, κι όποτε έκρινε, γύριζε τον διακόπτη.',
        en:
          'The lights did not change by themselves. A man sat up there, watched the traffic ' +
          'and turned the switch whenever he judged it was time.',
      },
    },
  },

  // ----------------------------------------------------------- checkpoint charlie
  {
    id: 'berlin-checkpoint-charlie',
    cityId: 'berlin',
    emoji: '🚧',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το φυλάκιο Checkpoint Charlie', en: 'Checkpoint Charlie' },
    tagline: {
      el: 'Το τρίτο φυλάκιο, και γι’ αυτό το λένε Τσάρλι',
      en: 'The third checkpoint, which is why it is Charlie',
    },
    story: {
      el:
        'Μετά τον Δεύτερο Παγκόσμιο Πόλεμο το Βερολίνο μοιράστηκε σε τέσσερα κομμάτια, που ' +
        'τα κρατούσαν η Αμερική, η Βρετανία, η Γαλλία και η Σοβιετική Ένωση. Όταν το 1961 ' +
        'σηκώθηκε το Τείχος και έκοψε την πόλη στα δύο, αυτό το μικρό φυλάκιο στη ' +
        'Friedrichstraße έγινε το πιο γνωστό πέρασμα ανάμεσα στο αμερικανικό και στο ' +
        'σοβιετικό κομμάτι. Οι στρατιώτες το είπαν Τσάρλι επειδή έτσι λένε το γράμμα C στο ' +
        'αλφάβητο που χρησιμοποιούν στον ασύρματο: ήταν το τρίτο φυλάκιο, μετά το Άλφα και ' +
        'το Μπράβο. Τον Οκτώβριο του 1961 αμερικανικά και σοβιετικά τανκς στάθηκαν εδώ ' +
        'μούρη με μούρη για δεκαέξι ώρες, ώσπου οι δύο πλευρές τραβήχτηκαν πίσω αργά, ένα ' +
        'τανκ τη φορά. Το σπιτάκι που βλέπεις σήμερα είναι αντίγραφο: το αληθινό το ' +
        'σήκωσε γερανός το 1990 και βρίσκεται σε μουσείο στο Νταλέμ. Ο δρόμος είναι ' +
        'ανοιχτός για όλους.',
      en:
        'After the Second World War, Berlin was split into four parts, held by America, ' +
        'Britain, France and the Soviet Union. When the Wall went up in 1961 and cut the ' +
        'city in two, this little hut on Friedrichstraße became the best known crossing ' +
        'between the American and the Soviet parts. Soldiers called it Charlie because that ' +
        'is how they say the letter C in the alphabet they use on the radio: it was the ' +
        'third checkpoint, after Alpha and Bravo. In October 1961 American and Soviet tanks ' +
        'faced each other here, nose to nose, for sixteen hours, until both sides slowly ' +
        'backed away, one tank at a time. The hut you see today is a copy: the real one was ' +
        'lifted off by crane in 1990 and now stands in a museum out in Dahlem. The street ' +
        'is open to everybody.',
    },
    facts: [
      {
        el: 'Ήταν το τρίτο συμμαχικό φυλάκιο, μετά το Άλφα και το Μπράβο.',
        en: 'It was the third Allied checkpoint, coming after Alpha and Bravo.',
      },
      {
        el: 'Τον Οκτώβριο του 1961 τανκς των δύο πλευρών στάθηκαν εδώ αντικριστά για δεκαέξι ώρες.',
        en: 'In October 1961 tanks from both sides stood facing each other here for sixteen hours.',
      },
      {
        el: 'Το αρχικό φυλάκιο μεταφέρθηκε το 1990 και εκτίθεται σε μουσείο στο Νταλέμ.',
        en: 'The original hut was moved in 1990 and is now shown in a museum in Dahlem.',
      },
    ],
    location: {
      lat: 52.5075,
      lng: 13.39028,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q68689', deltaM: 0 },
        { kind: 'osm', ref: 'node/417346627', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Checkpoint Charlie', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Είναι στη μέση της Friedrichstraße, στη διασταύρωση με τη Zimmerstraße, ανάμεσα στα αυτοκίνητα.',
        en: 'It is in the middle of Friedrichstraße, at the Zimmerstraße crossing, out among the traffic.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το φυλάκιο ονομάστηκε «Τσάρλι»;',
        en: 'Why was this checkpoint called “Charlie”?',
      },
      answers: [
        { el: 'Είναι το «C» στο αλφάβητο των στρατιωτών', en: 'It is “C” in the alphabet soldiers use' },
        { el: 'Ήταν το όνομα του πρώτου φρουρού που υπηρέτησε εδώ', en: 'It was the name of the first guard who served here' },
        { el: 'Το βάφτισαν έτσι προς τιμήν ενός Αμερικανού στρατηγού', en: 'It was named in honour of an American general' },
        { el: 'Έτσι έλεγαν τη Friedrichstraße', en: 'It was English for Friedrichstraße' },
      ],
      explanation: {
        el:
          'Άλφα, Μπράβο, Τσάρλι: το αλφάβητο του ασυρμάτου. Ήταν απλώς το τρίτο φυλάκιο, ' +
          'και το τρίτο γράμμα του κράτησε το όνομα για πάντα.',
        en:
          'Alpha, Bravo, Charlie: the radio alphabet. It was simply the third checkpoint, ' +
          'and the third letter gave it a name that stuck.',
      },
    },
  },

  // ---------------------------------------------------------------- gendarmenmarkt
  {
    id: 'berlin-gendarmenmarkt',
    cityId: 'berlin',
    emoji: '🎻',
    category: 'history',
    difficulty: 2,

    name: { el: 'Η πλατεία Gendarmenmarkt', en: 'Gendarmenmarkt' },
    tagline: {
      el: 'Δύο εκκλησίες σαν δίδυμες, χτισμένες από ανθρώπους που έφυγαν',
      en: 'Two churches like twins, built by people who had to leave home',
    },
    story: {
      el:
        'Πριν από περισσότερα από τριακόσια χρόνια το Βερολίνο άνοιξε τις πόρτες του σε ' +
        'χιλιάδες πρόσφυγες από τη Γαλλία, τους Ουγενότους, που στην πατρίδα τους δεν τους ' +
        'άφηναν να προσεύχονται με τον δικό τους τρόπο. Στη βόρεια πλευρά αυτής της ' +
        'πλατείας έχτισαν τη δική τους εκκλησία, και οι Γερμανοί έχτισαν τη δική τους ' +
        'απέναντι. Αργότερα ο βασιλιάς Φρειδερίκος ο Μέγας ήθελε η πλατεία του να μοιάζει ' +
        'με μια πλατεία της Ρώμης, κι έτσι έβαλε τον ίδιο αρχιτέκτονα να προσθέσει σε κάθε ' +
        'εκκλησία έναν ολόιδιο πύργο με θόλο. Έτσι έγιναν δίδυμες, χωρίς να είναι. Στη ' +
        'μέση στέκεται το Konzerthaus, η αίθουσα συναυλιών που σχεδίασε ο Καρλ Φρίντριχ ' +
        'Σίνκελ και άνοιξε το 1821, αφού το παλιό θέατρο είχε καεί. Μπροστά της κάθεται ' +
        'μαρμάρινος ο ποιητής Φρίντριχ Σίλερ. Γύρω στο 1700, ένας στους πέντε Βερολινέζους ' +
        'μιλούσε γαλλικά: όταν μια πόλη δέχεται ξένους, γίνεται πιο πλούσια.',
      en:
        'More than three hundred years ago Berlin opened its doors to thousands of refugees ' +
        'from France, the Huguenots, who at home were not allowed to pray their own way. On ' +
        'the north side of this square they built their own church, and the Germans built ' +
        'theirs facing it. Later King Frederick the Great wanted his square to look like a ' +
        'square in Rome, so he had one architect add a matching domed tower to each church. ' +
        'That is how they became twins without being related. In the middle stands the ' +
        'Konzerthaus, the concert hall designed by Karl Friedrich Schinkel, which opened in ' +
        '1821 after the old theatre burned down. In front of it the poet Friedrich Schiller ' +
        'sits in marble. Around 1700, one Berliner in five spoke French: when a city takes ' +
        'strangers in, the city gets richer.',
    },
    facts: [
      {
        el: 'Οι δύο πύργοι με τους θόλους προστέθηκαν στις εκκλησίες γύρω στο 1780.',
        en: 'The two domed towers were added onto the churches around 1780.',
      },
      {
        el: 'Το Konzerthaus του Σίνκελ άνοιξε το 1821, στη θέση ενός θεάτρου που είχε καεί.',
        en: 'Schinkel’s Konzerthaus opened in 1821, where a theatre had burned down.',
      },
      {
        el: 'Γύρω στο 1700 περίπου ένας στους πέντε κατοίκους του Βερολίνου μιλούσε γαλλικά.',
        en: 'Around 1700 about one Berliner in five spoke French.',
      },
    ],
    location: {
      lat: 52.51361,
      lng: 13.39278,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q170103', deltaM: 0 },
        { kind: 'osm', ref: 'way/844740667', deltaM: 33 },
        { kind: 'wikipedia', ref: 'Gendarmenmarkt', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin on the square. OpenStreetMap draws the paved area from a slightly different corner, 33 m away, which is why the grade is B rather than A.',
      findIt: {
        el: 'Στάσου στα σκαλιά του Konzerthaus, στη μέση: από εκεί βλέπεις και τους δύο θόλους ταυτόχρονα.',
        en: 'Stand on the steps of the Konzerthaus in the middle: from there you see both domes at once.',
      },
    },
    question: {
      q: {
        el: 'Γιατί μοιάζουν σαν δίδυμες οι δύο εκκλησίες;',
        en: 'Why do the two churches look like twins?',
      },
      answers: [
        { el: 'Ένας αρχιτέκτονας τους πρόσθεσε ολόιδιους πύργους', en: 'One architect added them two matching towers' },
        { el: 'Χτίστηκαν την ίδια χρονιά', en: 'They were built the same year' },
        { el: 'Ανήκαν στην ίδια κοινότητα', en: 'They belonged to one community' },
        { el: 'Αντιγράφτηκαν από εκκλησία της Ρώμης', en: 'They were copied from a church in Rome' },
      ],
      explanation: {
        el:
          'Οι εκκλησίες ήταν διαφορετικές και ανήκαν σε διαφορετικούς ανθρώπους. Τους ' +
          'πύργους τους έβαλε αργότερα ο ίδιος αρχιτέκτονας, και τους έκανε ίδιους.',
        en:
          'The churches were different and belonged to different people. The towers came ' +
          'later, from one architect, who made them the same.',
      },
    },
  },

  // ----------------------------------------------------------------- berliner dom
  {
    id: 'berlin-berliner-dom',
    cityId: 'berlin',
    emoji: '⛪',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Berliner Dom', en: 'The Berliner Dom' },
    tagline: {
      el: 'Πράσινος τρούλος, και μπροστά του μια πέτρινη γαβάθα',
      en: 'A green dome, with a stone bowl parked in front of it',
    },
    story: {
      el:
        'Η εκκλησία είναι πιο νέα απ’ όσο δείχνει: τελείωσε το 1905, όταν ο αυτοκράτορας ' +
        'Γουλιέλμος Β΄ θέλησε για το Βερολίνο έναν ναό τόσο μεγαλόπρεπο όσο οι μεγαλύτεροι ' +
        'της Ευρώπης. Ο τρούλος της είναι σκεπασμένος με χαλκό, κι ο χαλκός με τη βροχή και ' +
        'τον χρόνο πρασινίζει· γι’ αυτό το χρώμα του δεν το διάλεξε κανείς, το έφτιαξε ο ' +
        'καιρός. Στον πόλεμο χτυπήθηκε άσχημα και οι επισκευές κράτησαν δεκαετίες: ' +
        'ξανάνοιξε το 1993, χαμηλότερος από πριν. Μπροστά του, στο γρασίδι του Lustgarten, ' +
        'στέκεται μια τεράστια γαβάθα από γρανίτη, σκαλισμένη από έναν και μόνο βράχο. ' +
        'Τελείωσε το 1831, έχει άνοιγμα σχεδόν επτά μέτρα και ζυγίζει περίπου εβδομήντα ' +
        'πέντε τόνους. Την είχαν φτιάξει για να μπει μέσα στο διπλανό μουσείο, αλλά βγήκε ' +
        'τόσο μεγάλη που έμεινε έξω. Πίσω σου απλώνεται το Νησί των Μουσείων: πέντε μουσεία ' +
        'σε ένα νησί μέσα στο ποτάμι.',
      en:
        'The church is younger than it looks: it was finished in 1905, when Kaiser Wilhelm ' +
        'II wanted Berlin to have a church as grand as the greatest in Europe. Its dome is ' +
        'covered in copper, and copper turns green with rain and time; nobody chose that ' +
        'colour, the weather made it. The war hurt the building badly and the repairs took ' +
        'decades: it opened again in 1993, lower than it had been. In front of it, on the ' +
        'lawn of the Lustgarten, sits an enormous granite bowl carved out of one single ' +
        'boulder. It was finished in 1831, is almost seven metres across and weighs about ' +
        'seventy-five tonnes. It had been made to stand inside the museum next door, but it ' +
        'came out so big that it stayed outside instead. Behind you stretches the Museum ' +
        'Island: five museums on one island in the middle of the river.',
    },
    facts: [
      {
        el: 'Ο σημερινός ναός τελείωσε το 1905 και ξανάνοιξε μετά τις επισκευές το 1993.',
        en: 'The present church was finished in 1905 and reopened after repairs in 1993.',
      },
      {
        el: 'Η γρανιτένια γαβάθα του Lustgarten σκαλίστηκε από έναν μόνο βράχο και ζυγίζει περίπου 75 τόνους.',
        en: 'The granite bowl in the Lustgarten was cut from one boulder and weighs about 75 tonnes.',
      },
      {
        el: 'Το Νησί των Μουσείων πίσω από την εκκλησία είναι Μνημείο Παγκόσμιας Κληρονομιάς από το 1999.',
        en: 'The Museum Island behind the church has been a World Heritage Site since 1999.',
      },
    ],
    location: {
      lat: 52.51917,
      lng: 13.40111,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q154563', deltaM: 0 },
        { kind: 'osm', ref: 'way/313670734', deltaM: 11 },
        { kind: 'wikipedia', ref: 'Berlin Cathedral', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The church of 1905, Q154563. The Explorer pin had been matched to Q19950914, the second Berliner Dom of 1747–1894, which was pulled down to clear this site.',
      findIt: {
        el: 'Η είσοδος των επισκεπτών είναι στη δυτική πρόσοψη, αυτή που βλέπει το γρασίδι με τη γρανιτένια γαβάθα.',
        en: 'Visitors go in at the west front, the side that faces the lawn with the granite bowl.',
      },
    },
    question: {
      q: {
        el: 'Γιατί είναι πράσινος ο τρούλος;',
        en: 'Why is the dome green?',
      },
      answers: [
        { el: 'Ο χαλκός του πρασινίζει με τη βροχή και τον χρόνο', en: 'Its copper turns green with rain and time' },
        { el: 'Τον έβαψαν πράσινο από την πρώτη κιόλας μέρα', en: 'It was painted green at the start' },
        { el: 'Είναι σκεπασμένος με πράσινα κεραμίδια', en: 'It is covered in green clay tiles' },
        { el: 'Τον έχουν σκεπάσει βρύα', en: 'Moss has covered it, like a tree' },
      ],
      explanation: {
        el:
          'Ο χαλκός ξεκινά καφεκόκκινος και με τα χρόνια σκεπάζεται από ένα λεπτό πράσινο ' +
          'στρώμα. Το χρώμα δεν είναι μπογιά, είναι ηλικία.',
        en:
          'Copper starts out reddish brown and over the years grows a thin green skin. The ' +
          'colour is not paint, it is age.',
      },
    },
  },

  // ------------------------------------------------------------------ fernsehturm
  {
    id: 'berlin-fernsehturm',
    cityId: 'berlin',
    emoji: '📡',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Fernsehturm, ο τηλεοπτικός πύργος', en: 'The Fernsehturm' },
    tagline: {
      el: 'Μια μπάλα στα 200 μέτρα, με εστιατόριο που γυρίζει',
      en: 'A ball at 200 metres, with a restaurant that turns',
    },
    story: {
      el:
        'Το 1969 η Ανατολική Γερμανία ήθελε να δείξει σε όλο τον κόσμο τι μπορεί να ' +
        'χτίσει, και σήκωσε αυτόν τον πύργο των 368 μέτρων. Είναι ακόμα και σήμερα το ' +
        'ψηλότερο κατασκεύασμα της Γερμανίας. Η μπάλα κάθεται περίπου στα διακόσια μέτρα, ' +
        'και μέσα της ένα εστιατόριο γυρίζει αργά αργά, ώστε να βλέπεις ολόκληρη την πόλη ' +
        'χωρίς να σηκωθείς από την καρέκλα σου. Οι Βερολινέζοι του έδωσαν πολλά ' +
        'παρατσούκλια, και το αγαπημένο τους είναι «το τηλε-σπαράγγι». Όταν ο ήλιος χτυπά ' +
        'το ατσάλι της μπάλας, πάνω της εμφανίζεται ένας φωτεινός σταυρός. Αυτό δεν ήταν ' +
        'στα σχέδια και δεν άρεσε καθόλου στην τότε κυβέρνηση, που δεν συμπαθούσε τις ' +
        'εκκλησίες, οπότε στη Δυτική πλευρά το είπαν χαμογελώντας «η εκδίκηση του Πάπα». ' +
        'Στην πλατεία δίπλα στέκεται το Παγκόσμιο Ρολόι του 1969, που δείχνει την ώρα σε ' +
        '148 πόλεις, με ένα μικρό ηλιακό σύστημα στην κορυφή του που κάνει έναν γύρο κάθε ' +
        'λεπτό.',
      en:
        'In 1969 East Germany wanted to show the whole world what it could build, and it ' +
        'raised this tower of 368 metres. It is still the tallest structure in Germany. The ' +
        'ball sits about two hundred metres up, and inside it a restaurant turns very slowly, ' +
        'so that you see the entire city without getting out of your chair. Berliners gave ' +
        'the tower plenty of nicknames, and their favourite is “the tele-asparagus”. When ' +
        'the sun strikes the steel of the ball, a bright cross appears on it. That was not ' +
        'in the plans and the government of the day, which had little love for churches, ' +
        'did not enjoy it at all, so people on the western side smiled and called it “the ' +
        'Pope’s revenge”. On the square next door stands the World Clock of 1969, which ' +
        'shows the time in 148 cities, with a small solar system on top that turns once ' +
        'every minute.',
    },
    facts: [
      {
        el: 'Με 368 μέτρα, είναι το ψηλότερο κατασκεύασμα της Γερμανίας.',
        en: 'At 368 metres, it is the tallest structure in Germany.',
      },
      {
        el: 'Το εστιατόριο μέσα στη μπάλα γυρίζει αργά γύρω από τον άξονα του πύργου.',
        en: 'The restaurant inside the ball turns slowly around the tower’s axis.',
      },
      {
        el: 'Το Παγκόσμιο Ρολόι δίπλα δείχνει την ώρα σε 148 πόλεις του κόσμου.',
        en: 'The World Clock beside it shows the time in 148 cities.',
      },
    ],
    location: {
      lat: 52.52083,
      lng: 13.40944,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q151356', deltaM: 0 },
        { kind: 'osm', ref: 'way/556435241', deltaM: 2 },
        { kind: 'wikipedia', ref: 'Fernsehturm Berlin', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Η είσοδος για τα ασανσέρ είναι στο χαμηλό κτίριο στη βάση, από την πλευρά της Panoramastraße.',
        en: 'The lifts are entered from the low building at the base, on the Panoramastraße side.',
      },
    },
    question: {
      q: {
        el: 'Τι εμφανίζεται στη μπάλα όταν την χτυπά ο ήλιος;',
        en: 'What appears on the ball when the sun strikes it?',
      },
      answers: [
        { el: 'Ένας φωτεινός σταυρός πάνω στο ατσάλι', en: 'A bright cross drawn on the steel' },
        { el: 'Ένα ουράνιο τόξο ως το έδαφος', en: 'A rainbow down to the ground' },
        { el: 'Η σκιά του πύργου, τραβηγμένη σε όλη την πλατεία', en: 'The tower’s shadow, stretched across the square' },
        { el: 'Μια χρυσή κουκκίδα που φαίνεται από το Πότσνταμ', en: 'A gold dot that can be seen from Potsdam' },
      ],
      explanation: {
        el:
          'Οι ατσάλινες πλάκες της μπάλας ανακλούν το φως σε σχήμα σταυρού. Κανείς δεν το ' +
          'σχεδίασε: το έκανε το σχήμα και το υλικό.',
        en:
          'The steel plates of the ball reflect the light in the shape of a cross. Nobody ' +
          'designed it: the shape and the metal did it.',
      },
    },
  },

  // ---------------------------------------------------------------- nikolaiviertel
  {
    id: 'berlin-nikolaiviertel',
    cityId: 'berlin',
    emoji: '🐻',
    category: 'history',
    difficulty: 2,

    name: { el: 'Nikolaiviertel', en: 'The Nikolaiviertel' },
    tagline: {
      el: 'Η παλιότερη γωνιά της πόλης, ξαναχτισμένη πριν από σαράντα χρόνια',
      en: 'The city’s oldest corner, rebuilt only forty years ago',
    },
    story: {
      el:
        'Γύρω στο 1230, σχεδόν οκτακόσια χρόνια πριν, έμποροι και ψαράδες έχτισαν εδώ τα ' +
        'πρώτα σπίτια δίπλα στον ποταμό Σπρέε, μαζί με μια πέτρινη εκκλησία, τη ' +
        'Nikolaikirche. Στην αρχή υπήρχαν δύο μικρές πόλεις, το Βερολίνο σε αυτή την όχθη ' +
        'και το Κελν στην απέναντι, που αργότερα έγιναν μία. Στον πόλεμο η γειτονιά σχεδόν ' +
        'εξαφανίστηκε. Στη δεκαετία του 1980 το Ανατολικό Βερολίνο την ξανάχτισε για τα 750 ' +
        'χρόνια της πόλης, με στενά σοκάκια και μικρές πλατείες, ώστε να ξαναμοιάσει παλιά. ' +
        'Άξιζε να το ξέρεις: πολλά από τα «παλιά» σπίτια είναι στην πραγματικότητα έτοιμα ' +
        'τσιμεντένια πάνελ του 1980, ντυμένα σαν παλιά. Στην όχθη ο Άγιος Γεώργιος, ένας ' +
        'μπρούντζινος ιππότης του 1855, παλεύει με τον δράκο του. Και όπου κι αν κοιτάξεις ' +
        'σε κοιτάζει μια αρκούδα: είναι το σύμβολο της πόλης εδώ και αιώνες, παρότι το ' +
        'όνομα «Βερολίνο» μάλλον δεν έχει σχέση με αρκούδες.',
      en:
        'Around 1230, nearly eight hundred years ago, merchants and fishermen built the first ' +
        'houses here beside the river Spree, along with a stone church, the Nikolaikirche. At ' +
        'the start there were two small towns, Berlin on this bank and Cölln on the other, ' +
        'which later became one. The war almost wiped the quarter out. In the 1980s East ' +
        'Berlin rebuilt it for the city’s 750th birthday, with narrow lanes and little ' +
        'squares, so that it would look old again. It is worth knowing: many of the “old” ' +
        'houses are really ready-made concrete panels from the 1980s, dressed up to look ' +
        'ancient. Down on the riverbank Saint George, a bronze knight from 1855, is fighting ' +
        'his dragon. And wherever you look a bear is looking back at you: it has been the ' +
        'city’s symbol for centuries, even though the name “Berlin” probably has nothing to ' +
        'do with bears.',
    },
    facts: [
      {
        el: 'Οι πρώτες κατοικίες εδώ χτίστηκαν γύρω στο 1230, δίπλα στον ποταμό Σπρέε.',
        en: 'The first houses here went up around 1230, beside the river Spree.',
      },
      {
        el: 'Η γειτονιά ξαναχτίστηκε στη δεκαετία του 1980 για τα 750 χρόνια της πόλης.',
        en: 'The quarter was rebuilt in the 1980s for the city’s 750th birthday.',
      },
      {
        el: 'Ο μπρούντζινος Άγιος Γεώργιος στην όχθη φτιάχτηκε το 1855.',
        en: 'The bronze Saint George on the riverbank was made in 1855.',
      },
    ],
    location: {
      lat: 52.51667,
      lng: 13.40722,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q703927', deltaM: 0 },
        { kind: 'osm', ref: 'way/312391532', deltaM: 53 },
        { kind: 'wikipedia', ref: 'Nikolaiviertel', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin on the quarter, which is a few blocks wide. OpenStreetMap centres its outline 53 m away, which is normal for a neighbourhood and keeps the grade at B.',
      findIt: {
        el: 'Ξεκίνα από τους δύο μαύρους πύργους της Nikolaikirche και μπες στα σοκάκια γύρω τους.',
        en: 'Start at the two dark towers of the Nikolaikirche and walk into the lanes around them.',
      },
    },
    question: {
      q: {
        el: 'Από πού μάλλον βγαίνει το όνομα «Βερολίνο»;',
        en: 'Where does the name “Berlin” probably come from?',
      },
      answers: [
        { el: 'Από μια παλιά σλαβική λέξη για τον βάλτο', en: 'From an old Slavic word for a swamp' },
        { el: 'Από τη γερμανική λέξη «Bär», που θα πει αρκούδα', en: 'From the German word “Bär”, which means bear' },
        { el: 'Από το όνομα ενός ψαρά', en: 'From a fisherman’s name' },
        { el: 'Από τον ποταμό Σπρέε, στα λατινικά εκείνης της εποχής', en: 'From the river Spree, in the Latin of the time' },
      ],
      explanation: {
        el:
          'Το έδαφος εδώ ήταν βαλτώδες, και η λέξη μοιάζει να βγαίνει από εκεί. Η αρκούδα ' +
          'ήρθε αργότερα, σαν λογοπαίγνιο με το γερμανικό «Bär».',
        en:
          'The ground here was marshy, and the word seems to come from that. The bear ' +
          'arrived later, as a pun on the German “Bär”.',
      },
    },
  },

  // -------------------------------------------------------------- east side gallery
  {
    id: 'berlin-east-side-gallery',
    cityId: 'berlin',
    emoji: '🎨',
    category: 'art',
    difficulty: 2,

    name: { el: 'East Side Gallery', en: 'The East Side Gallery' },
    tagline: {
      el: 'Ένα κομμάτι Τείχους που έγινε ο μεγαλύτερος καμβάς της πόλης',
      en: 'A piece of the Wall that became the city’s biggest canvas',
    },
    story: {
      el:
        'Το Τείχος του Βερολίνου στάθηκε 28 χρόνια, από το 1961 ως τις 9 Νοεμβρίου 1989, ' +
        'τη νύχτα που άνοιξαν τα περάσματα και ο κόσμος χόρεψε πάνω του. Τους επόμενους ' +
        'μήνες σχεδόν όλο γκρεμίστηκε, αυτό όμως το κομμάτι, μήκους ενάμιση σχεδόν ' +
        'χιλιομέτρου, κρατήθηκε για κάτι άλλο. Την άνοιξη του 1990 έφτασαν εδώ 118 ' +
        'καλλιτέχνες από 21 χώρες με πινέλα και κουβάδες και το σκέπασαν με χρώματα, ' +
        'ελπίδες και αστεία. Ο πιο διάσημος πίνακας δείχνει δύο πολιτικούς, τους ηγέτες της ' +
        'Σοβιετικής Ένωσης και της Ανατολικής Γερμανίας, να δίνουν ο ένας στον άλλον ένα ' +
        'γερό φιλί, όπως χαιρετιόντουσαν τότε οι ηγέτες φιλικών χωρών· ο ζωγράφος το ' +
        'αντέγραψε από αληθινή φωτογραφία του 1979. Σε έναν άλλον, ένα μικρό Trabant, το ' +
        'αυτοκίνητο που οδηγούσαν σχεδόν όλοι στην Ανατολική Γερμανία, σπάει τον τοίχο και ' +
        'βγαίνει από την άλλη μεριά. Στην πινακίδα του γράφει την ημερομηνία που άνοιξε το ' +
        'Τείχος.',
      en:
        'The Berlin Wall stood for 28 years, from 1961 until 9 November 1989, the night the ' +
        'crossings opened and people danced on top of it. Over the following months nearly ' +
        'all of it was knocked down, but this stretch, almost a kilometre and a half long, ' +
        'was kept for something else. In the spring of 1990, 118 artists from 21 countries ' +
        'arrived with brushes and buckets and covered it in colours, hopes and jokes. The ' +
        'most famous painting shows two politicians, the leaders of the Soviet Union and of ' +
        'East Germany, giving each other a hearty kiss, the way leaders of friendly ' +
        'countries greeted each other then; the painter copied it from a real photograph of ' +
        '1979. In another, a little Trabant, the car almost everyone drove in East Germany, ' +
        'bursts through the wall and comes out the other side. Its number plate carries the ' +
        'date the Wall opened.',
    },
    facts: [
      {
        el: 'Το κομμάτι που σώθηκε έχει μήκος περίπου 1,3 χιλιόμετρα.',
        en: 'The stretch that was kept is about 1.3 kilometres long.',
      },
      {
        el: 'Το ζωγράφισαν την άνοιξη του 1990 εκατόν δεκαοκτώ καλλιτέχνες από είκοσι μία χώρες.',
        en: 'It was painted in the spring of 1990 by 118 artists from 21 countries.',
      },
      {
        el: 'Η πινακίδα του ζωγραφισμένου Trabant γράφει «NOV-9-89».',
        en: 'The painted Trabant’s number plate reads “NOV-9-89”.',
      },
    ],
    location: {
      lat: 52.50306,
      lng: 13.44472,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q313746', deltaM: 0 },
        { kind: 'osm', ref: 'relation/6807791', deltaM: 404 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Grade C: the gallery is a 1.3 km line, so OpenStreetMap centres its relation 404 m away — far outside the 30 m agreement window, which is why it counts as a listed source and not as agreement — and Wikipedia carries no coordinate at all. The point is Wikidata’s, roughly halfway along the painted side.',
      findIt: {
        el: 'Οι πίνακες είναι στην πλευρά που βλέπει τον δρόμο Mühlenstraße, όχι στην πλευρά του ποταμού.',
        en: 'The paintings are on the side facing Mühlenstraße, not on the river side.',
      },
    },
    question: {
      q: {
        el: 'Τι γράφει η πινακίδα του ζωγραφισμένου Trabant;',
        en: 'What does the painted Trabant’s number plate say?',
      },
      answers: [
        { el: 'Την ημερομηνία που άνοιξε το Τείχος', en: 'The date on which the Wall opened' },
        { el: 'Το όνομα της ζωγράφου που το ζωγράφισε', en: 'The name of the artist who painted it' },
        { el: 'Τον αριθμό των καλλιτεχνών που δούλεψαν εδώ', en: 'The number of artists who worked here' },
        { el: 'Το μήκος του τοίχου, γραμμένο σε μέτρα', en: 'The length of the wall, written in metres' },
      ],
      explanation: {
        el:
          'Γράφει «NOV-9-89»: 9 Νοεμβρίου 1989. Το αυτοκινητάκι δεν σπάει απλώς τον τοίχο, ' +
          'κουβαλάει πάνω του και τη μέρα που έγινε.',
        en:
          'It reads “NOV-9-89”: 9 November 1989. The little car does not just break the ' +
          'wall, it carries the date it happened.',
      },
    },
  },

  // ----------------------------------------------------------------- neues museum
  {
    id: 'berlin-neues-museum',
    cityId: 'berlin',
    emoji: '🏺',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Neues Museum', en: 'The Neues Museum' },
    tagline: {
      el: 'Έμεινε ερείπιο εξήντα χρόνια και τις ουλές του τις κράτησε',
      en: 'A ruin for sixty years, and it kept its scars on purpose',
    },
    story: {
      el:
        'Το μουσείο χτίστηκε από το 1843 ως το 1855 από τον αρχιτέκτονα Φρίντριχ Αύγουστο ' +
        'Στύλερ. Τον Φεβρουάριο του 1945 οι βόμβες γκρέμισαν τη βορειοδυτική του πτέρυγα, ' +
        'και μετά έγινε κάτι παράξενο: κανείς δεν το επισκεύασε. Για εξήντα σχεδόν χρόνια ' +
        'στεκόταν ανοιχτό στον ουρανό, με τη βροχή να μπαίνει από την τρύπα της στέγης και ' +
        'τα περιστέρια να φωλιάζουν στους τοίχους. Από το 1999 ο αρχιτέκτονας Ντέιβιντ ' +
        'Τσίπερφιλντ το ξανάχτισε, και άνοιξε πάλι τον Οκτώβριο του 2009. Δεν έκρυψε όμως ' +
        'τις ζημιές. Περπατάς δίπλα σε τοίχους γεμάτους σημάδια από σφαίρες, σε καμένα ' +
        'τούβλα και σε τοιχογραφίες που λείπουν στη μέση, και ακριβώς δίπλα τους υπάρχουν ' +
        'καινούργιοι, εντελώς λείοι τοίχοι. Έτσι το κτίριο διηγείται το ίδιο την ιστορία ' +
        'του. Μέσα ζουν δύο συλλογές: η αιγυπτιακή, με τη διάσημη προτομή της Νεφερτίτης, ' +
        'και η προϊστορική, με ένα καπέλο από ατόφιο χρυσάφι.',
      en:
        'The museum was built between 1843 and 1855 by the architect Friedrich August ' +
        'Stüler. In February 1945 bombs brought down its north-west wing, and then something ' +
        'strange happened: nobody repaired it. For almost sixty years it stood open to the ' +
        'sky, rain coming in through the hole in the roof and pigeons nesting in the walls. ' +
        'From 1999 the architect David Chipperfield rebuilt it, and it opened again in ' +
        'October 2009. But he did not hide the damage. You walk past walls pocked with ' +
        'bullet marks, scorched brick and wall paintings that stop halfway, and right beside ' +
        'them there are new walls, completely plain. That way the building tells its own ' +
        'story. Two collections live inside: the Egyptian one, with the famous bust of ' +
        'Nefertiti, and the prehistoric one, with a hat made of solid gold.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1843 ως το 1855 και ξανάνοιξε τον Οκτώβριο του 2009.',
        en: 'It was built from 1843 to 1855 and opened again in October 2009.',
      },
      {
        el: 'Έμεινε ερείπιο χωρίς στέγη για σχεδόν εξήντα χρόνια μετά τον πόλεμο.',
        en: 'It stood roofless as a ruin for almost sixty years after the war.',
      },
      {
        el: 'Στεγάζει δύο μουσεία: το Αιγυπτιακό Μουσείο και το Μουσείο Προϊστορίας.',
        en: 'It holds two museums: the Egyptian Museum and the Museum of Prehistory.',
      },
    ],
    location: {
      lat: 52.5202,
      lng: 13.3976,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q157316', deltaM: 0 },
        { kind: 'osm', ref: 'way/18578139', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Neues Museum', deltaM: 41 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Wikipedia’s point falls 41 m away, past the 30 m agreement threshold, so the grade is B on Wikidata and OpenStreetMap. All three sit on the same building.',
      findIt: {
        el: 'Η είσοδος δεν είναι στο ίδιο το κτίριο: μπαίνεις από τη γυάλινη James-Simon-Galerie, δίπλα στο ποτάμι.',
        en: 'You do not go in through the building itself: enter by the glass James-Simon-Galerie, beside the river.',
      },
    },
    question: {
      q: {
        el: 'Γιατί φαίνονται ακόμα οι ζημιές του πολέμου στους τοίχους;',
        en: 'Why is the war damage still visible on the walls?',
      },
      answers: [
        { el: 'Ο αρχιτέκτονας τις άφησε επίτηδες να φαίνονται', en: 'The architect left it showing on purpose' },
        { el: 'Δεν βρέθηκαν ποτέ τα λεφτά', en: 'The money was never found' },
        { el: 'Ένας νόμος απαγορεύει να αγγίξεις παλιό τοίχο', en: 'A law forbids touching old walls' },
        { el: 'Οι εργασίες σταμάτησαν νωρίς', en: 'The work stopped early' },
      ],
      explanation: {
        el:
          'Ο Τσίπερφιλντ θα μπορούσε να τα σοβατίσει όλα. Διάλεξε να μη σβήσει την ιστορία ' +
          'του κτιρίου, αλλά να τη βάλει δίπλα στο καινούργιο.',
        en:
          'Chipperfield could have plastered over everything. He chose not to erase the ' +
          'building’s history but to set it beside the new work.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ξεκίνα από τον πάνω όροφο, όσο τα πόδια σου αντέχουν, και κατέβα σιγά σιγά.',
        en: 'Start on the top floor, while your legs are fresh, and work your way down.',
      },
      rooms: [
        {
          id: 'berlin-neues-museum-egypt',
          emoji: '👑',
          name: { el: 'Η Αίγυπτος στον πάνω όροφο', en: 'Egypt upstairs' },
          intro: {
            el:
              'Εδώ ζει η πιο φωτογραφημένη κυρία της Γερμανίας, μαζί με ένα πράσινο κεφάλι ' +
              'και μια οικογένεια που ζωγραφίστηκε πριν από τρεισήμισι χιλιάδες χρόνια. ' +
              'Είναι μικρός χώρος, με λιγοστό φως και πολλή ησυχία. Μη βιαστείς: όλα εδώ ' +
              'είναι μικρότερα απ’ όσο περιμένεις, και γι’ αυτό πρέπει να τα πλησιάσεις.',
            en:
              'This is where the most photographed lady in Germany lives, along with a green ' +
              'head and a family portrait painted three and a half thousand years ago. It ' +
              'is a small space, low on light and heavy on quiet. Do not rush: everything ' +
              'here is smaller than you expect, which is exactly why you have to go close.',
          },
          exhibits: [
            {
              id: 'berlin-neues-museum-nefertiti',
              name: { el: 'Η προτομή της Νεφερτίτης', en: 'The bust of Nefertiti' },
              blurb: {
                el:
                  'Η Νεφερτίτη ήταν βασίλισσα της Αιγύπτου πριν από περίπου 3.350 χρόνια. Η ' +
                  'προτομή της βρέθηκε το 1912 στα ερείπια του εργαστηρίου ενός γλύπτη, ' +
                  'στην πόλη Αμάρνα, και είναι φτιαγμένη από ασβεστόλιθο σκεπασμένο με ' +
                  'γύψο και βαμμένο. Τα χρώματα κρατάνε ακόμα. Κοίτα προσεκτικά τα μάτια ' +
                  'της: το δεξί έχει ένα ένθετο από κρύσταλλο, το αριστερό δεν είχε ποτέ. ' +
                  'Κανείς δεν ξέρει σίγουρα γιατί. Ίσως το γλυπτό ήταν δείγμα εργασίας, ' +
                  'φτιαγμένο για να δείχνει σε μαθητευόμενους πώς γίνεται ένα πρόσωπο.',
                en:
                  'Nefertiti was a queen of Egypt about 3,350 years ago. Her bust was found ' +
                  'in 1912 in the ruins of a sculptor’s workshop in the city of Amarna, and ' +
                  'it is made of limestone covered in plaster and painted. The colours are ' +
                  'still there. Look carefully at her eyes: the right one has a crystal ' +
                  'inlay, the left never had one at all. Nobody is certain why. The piece ' +
                  'may have been a model, kept in the workshop to show apprentices how a ' +
                  'face is done.',
              },
              question: {
                q: {
                  el: 'Τι είναι περίεργο με τα μάτια της Νεφερτίτης;',
                  en: 'What is odd about Nefertiti’s eyes?',
                },
                answers: [
                  { el: 'Το ένα δεν έχει ποτέ πάρει ένθετο', en: 'One of them never got its inlay' },
                  { el: 'Είναι και τα δύο μπλε', en: 'They are both painted blue' },
                  { el: 'Κοιτάζουν αλλού το καθένα', en: 'Each looks a different way' },
                  { el: 'Είναι από χρυσάφι', en: 'They are made of gold' },
                ],
                explanation: {
                  el: 'Το δεξί μάτι έχει κρύσταλλο, το αριστερό είναι άδειο από την αρχή. Δεν έπεσε: δεν μπήκε ποτέ.',
                  en: 'The right eye has crystal, the left has been empty from the start. It did not fall out: it was never put in.',
                },
              },
            },
            {
              id: 'berlin-neues-museum-green-head',
              name: { el: 'Το Πράσινο Κεφάλι του Βερολίνου', en: 'The Berlin Green Head' },
              blurb: {
                el:
                  'Ένα μικρό κεφάλι από σκούρα πράσινη πέτρα, σκαλισμένο γύρω στο 100 με 50 ' +
                  'π.Χ. Δεν είναι βασιλιάς: είναι ένας ιερέας, με ξυρισμένο κεφάλι και ' +
                  'ρυτίδες που ο γλύπτης δεν προσπάθησε να κρύψει. Στην αρχαία Αίγυπτο τα ' +
                  'περισσότερα πρόσωπα φτιάχνονταν τέλεια και νεανικά, οπότε αυτό εδώ είναι ' +
                  'σπάνιο: δείχνει έναν αληθινό άνθρωπο που γέρασε. Η πέτρα είναι τόσο καλά ' +
                  'γυαλισμένη που μοιάζει βρεγμένη, αν και δεν την έχει αγγίξει νερό εδώ και ' +
                  'δύο χιλιάδες χρόνια.',
                en:
                  'A small head of dark green stone, carved somewhere around 100 to 50 BC. ' +
                  'It is not a king: it is a priest, with a shaved head and wrinkles the ' +
                  'sculptor made no attempt to hide. In ancient Egypt most faces were made ' +
                  'perfect and young, which makes this one rare: it shows a real person who ' +
                  'has grown old. The stone is polished so well that it looks wet, although ' +
                  'no water has touched it for two thousand years.',
              },
              question: {
                q: {
                  el: 'Γιατί ξεχωρίζει αυτό το κεφάλι από τα άλλα αιγυπτιακά;',
                  en: 'Why does this head stand out from other Egyptian ones?',
                },
                answers: [
                  { el: 'Δείχνει άνθρωπο που έχει γεράσει', en: 'It shows a person who has aged' },
                  { el: 'Είναι το μεγαλύτερο γλυπτό ολόκληρης της συλλογής', en: 'It is the largest sculpture in the whole collection' },
                  { el: 'Είναι το μόνο που έχει κρατήσει όλα του τα χρώματα', en: 'It is the only one that has kept all of its colours' },
                  { el: 'Το σκάλισε ένα παιδί', en: 'A child carved it' },
                ],
                explanation: {
                  el: 'Ρυτίδες σε αιγυπτιακό πορτρέτο είναι σπάνιο πράγμα. Ο γλύπτης έδειξε πρόσωπο, όχι ιδανικό.',
                  en: 'Wrinkles are rare in an Egyptian portrait. The sculptor showed a face, not an ideal.',
                },
              },
            },
            {
              id: 'berlin-neues-museum-amarna-family',
              name: { el: 'Η οικογένεια της Αμάρνα', en: 'The Amarna family' },
              blurb: {
                el:
                  'Ένα ανάγλυφο γύρω στο 1350 π.Χ. δείχνει τον φαραώ Ακενατόν και τη ' +
                  'Νεφερτίτη με τα παιδιά τους. Για την εποχή του ήταν σχεδόν σκάνδαλο: οι ' +
                  'φαραώ παριστάνονταν πάντα αυστηροί και ακίνητοι, ενώ εδώ κρατούν τα ' +
                  'παιδιά τους στα γόνατα. Ο Ακενατόν είχε αλλάξει τη θρησκεία της χώρας ' +
                  'του και είχε χτίσει καινούργια πρωτεύουσα, την Αμάρνα, και οι ' +
                  'καλλιτέχνες του άλλαξαν κι αυτοί τρόπο. Μετά τον θάνατό του η Αίγυπτος ' +
                  'γύρισε στα παλιά, και η καινούργια πόλη εγκαταλείφθηκε.',
                en:
                  'A carving from about 1350 BC shows the pharaoh Akhenaten and Nefertiti ' +
                  'with their children. For its time it was almost scandalous: pharaohs were ' +
                  'always shown stern and still, and here they have children on their knees. ' +
                  'Akhenaten had changed his country’s religion and built a new capital, ' +
                  'Amarna, and his artists changed their way of working too. After he died ' +
                  'Egypt went back to the old ways, and the new city was abandoned.',
              },
              question: {
                q: {
                  el: 'Τι ήταν ασυνήθιστο σε αυτή την εικόνα για την εποχή της;',
                  en: 'What was unusual about this picture in its own time?',
                },
                answers: [
                  { el: 'Οι φαραώ δείχνονται σαν οικογένεια', en: 'The pharaohs are shown as a family' },
                  { el: 'Είναι σκαλισμένη σε καθαρό χρυσάφι και όχι σε πέτρα', en: 'It is carved in pure gold instead of in stone' },
                  { el: 'Δεν υπάρχει πάνω της ούτε ένα ιερογλυφικό γράμμα', en: 'There is not one hieroglyph written anywhere on it' },
                  { el: 'Είναι μεγαλύτερη από κάθε άλλο ανάγλυφο της Αιγύπτου', en: 'It is bigger than any other carving made in Egypt' },
                ],
                explanation: {
                  el: 'Οι φαραώ παριστάνονταν σαν θεοί, ακίνητοι και μόνοι. Εδώ κρατούν παιδιά στα γόνατα.',
                  en: 'Pharaohs were shown as gods, still and alone. Here they have children on their knees.',
                },
              },
            },
          ],
        },
        {
          id: 'berlin-neues-museum-scars',
          emoji: '🧱',
          name: { el: 'Το κτίριο με τις ουλές', en: 'The building with the scars' },
          intro: {
            el:
              'Σε αυτή την αίθουσα το έκθεμα είναι το ίδιο το κτίριο. Κοίτα ψηλά, κοίτα ' +
              'τους τοίχους, κοίτα πού σταματάει η παλιά τοιχογραφία και πού αρχίζει το ' +
              'καινούργιο τσιμέντο. Ένα κτίριο που έχει περάσει πόλεμο μπορεί να ' +
              'ξαναχτιστεί με δύο τρόπους: να προσποιηθεί ότι δεν έγινε τίποτα, ή να το ' +
              'παραδεχτεί. Εδώ διάλεξαν το δεύτερο.',
            en:
              'In this room the exhibit is the building. Look up, look at the walls, look at ' +
              'where the old painting stops and the new concrete begins. A building that has ' +
              'been through a war can be rebuilt in two ways: it can pretend nothing ' +
              'happened, or it can admit it. Here they chose the second.',
          },
          exhibits: [
            {
              id: 'berlin-neues-museum-staircase',
              name: { el: 'Η μεγάλη σκάλα', en: 'The great staircase' },
              blurb: {
                el:
                  'Η αρχική σκάλα του μουσείου ήταν σκεπασμένη με ζωγραφιές και ' +
                  'διακοσμήσεις. Ο πόλεμος την εξαφάνισε εντελώς και άφησε μια τεράστια ' +
                  'άδεια τρύπα από τούβλα. Ο Τσίπερφιλντ έφτιαξε καινούργια σκάλα στο ίδιο ' +
                  'σχήμα, αλλά χωρίς ούτε ένα στολίδι: σκέτο ανοιχτόχρωμο τσιμέντο, ' +
                  'φτιαγμένο με τριμμένο μάρμαρο μέσα του. Έτσι, όποιος ανεβαίνει ' +
                  'καταλαβαίνει αμέσως δύο πράγματα ταυτόχρονα: πόσο μεγαλόπρεπη ήταν κάποτε ' +
                  'η αίθουσα, και ότι αυτό που πατάει είναι καινούργιο.',
                en:
                  'The museum’s first staircase was covered in paintings and ornament. The ' +
                  'war removed it completely and left an enormous empty shell of brick. ' +
                  'Chipperfield built a new stair in the same shape but without a single ' +
                  'decoration: plain pale concrete, mixed with crushed marble. Anyone ' +
                  'climbing it understands two things at once: how grand the hall once was, ' +
                  'and that what they are standing on is new.',
              },
              question: {
                q: {
                  el: 'Πώς είναι η καινούργια σκάλα σε σχέση με την παλιά;',
                  en: 'How does the new staircase compare with the old one?',
                },
                answers: [
                  { el: 'Ίδιο σχήμα, καθόλου στολίδια', en: 'Same shape, but no ornament at all' },
                  { el: 'Ολόιδια, αντιγραμμένη από παλιές φωτογραφίες', en: 'Identical, copied from old photographs of it' },
                  { el: 'Εντελώς διαφορετική, στριφογυριστή και από γυαλί', en: 'Completely different, spiral and made of glass' },
                  { el: 'Μικρότερη από πριν', en: 'Smaller than before' },
                ],
                explanation: {
                  el: 'Το σχήμα θυμίζει τι υπήρχε. Η γυμνή επιφάνεια λέει ξεκάθαρα ότι το υλικό είναι σημερινό.',
                  en: 'The shape remembers what was there. The bare surface says plainly that the material is of today.',
                },
              },
            },
            {
              id: 'berlin-neues-museum-scarred-wall',
              name: { el: 'Οι τοίχοι με τα σημάδια', en: 'The marked walls' },
              blurb: {
                el:
                  'Σε πολλές αίθουσες οι τοίχοι έχουν βαθουλώματα από θραύσματα, μαύρα ' +
                  'σημάδια από φωτιά και τοιχογραφίες που κόβονται στη μέση. Οι ' +
                  'αναστηλωτές τα καθάρισαν και τα στερέωσαν, αλλά δεν τα συμπλήρωσαν. Όπου ' +
                  'έλειπε τούβλο έβαλαν καινούργιο, φανερά πιο ανοιχτόχρωμο, ώστε να ' +
                  'ξεχωρίζει με το μάτι. Είναι το ίδιο σκεπτικό που ακολουθούν και οι ' +
                  'συντηρητές ενός σπασμένου αγγείου: κολλάς τα κομμάτια, αλλά δεν ' +
                  'ζωγραφίζεις πάνω τους αυτό που φαντάζεσαι ότι έλειπε.',
                en:
                  'In many rooms the walls carry dents from splinters, black smoke marks and ' +
                  'wall paintings that stop halfway. The restorers cleaned them and made ' +
                  'them safe, but did not fill them in. Where a brick was missing they put ' +
                  'in a new one, clearly paler, so that the eye can tell. It is the same ' +
                  'thinking a conservator uses on a broken pot: you glue the pieces, but you ' +
                  'do not paint in what you merely imagine was there.',
              },
              question: {
                q: {
                  el: 'Γιατί τα καινούργια τούβλα είναι πιο ανοιχτόχρωμα;',
                  en: 'Why are the new bricks a paler colour?',
                },
                answers: [
                  { el: 'Για να ξεχωρίζει τι είναι καινούργιο', en: 'So you can tell what is new' },
                  { el: 'Επειδή δεν βρέθηκε πηλός στο ίδιο χρώμα πουθενά', en: 'Because clay in the same colour was nowhere found' },
                  { el: 'Επειδή τα ανοιχτόχρωμα τούβλα είναι πιο γερά στη φωτιά', en: 'Because pale bricks stand up better to a fire' },
                  { el: 'Για να φωτίζονται οι αίθουσες', en: 'To light the dark rooms' },
                ],
                explanation: {
                  el: 'Είναι απόφαση τιμιότητας. Ο επισκέπτης πρέπει να μπορεί να δει τι είναι αρχικό και τι όχι.',
                  en: 'It is a decision about honesty. A visitor should be able to see what is original and what is not.',
                },
              },
            },
            {
              id: 'berlin-neues-museum-egyptian-courtyard',
              name: { el: 'Η Αιγυπτιακή Αυλή', en: 'The Egyptian Courtyard' },
              blurb: {
                el:
                  'Η αυλή αυτή είχε κάποτε ζωγραφισμένους τοίχους με αιγυπτιακά τοπία, σαν ' +
                  'να βρισκόσουν στην όχθη του Νείλου. Ο πόλεμος την κατέστρεψε ολοκληρωτικά ' +
                  'και δεν έμεινε αρκετό υλικό για να ξαναγίνει όπως ήταν. Έτσι εδώ ο ' +
                  'αρχιτέκτονας δεν προσπάθησε καθόλου να μιμηθεί το παλιό: έβαλε μια ' +
                  'ολοκάθαρα σύγχρονη κατασκευή από κολόνες και δοκάρια, που κρατάει ένα ' +
                  'πάτωμα μέσα στο κενό. Στέκεσαι σε ένα σημερινό δωμάτιο και κοιτάς ' +
                  'αντικείμενα τριών χιλιάδων ετών.',
                en:
                  'This courtyard once had walls painted with Egyptian landscapes, as though ' +
                  'you were standing on the bank of the Nile. The war destroyed it utterly ' +
                  'and too little was left to make it what it had been. So here the ' +
                  'architect made no attempt at imitation: he put in a frankly modern ' +
                  'structure of posts and beams, holding a floor inside the empty space. You ' +
                  'stand in a room of today and look at objects three thousand years old.',
              },
              question: {
                q: {
                  el: 'Γιατί η αυλή δεν ξαναχτίστηκε όπως ήταν;',
                  en: 'Why was the courtyard not rebuilt as it had been?',
                },
                answers: [
                  { el: 'Δεν είχε μείνει αρκετό από την παλιά', en: 'Too little of the old one was left' },
                  { el: 'Οι επισκέπτες ψήφισαν να γίνει σύγχρονη αντί για παλιά', en: 'Visitors voted for a modern one instead of an old' },
                  { el: 'Το παλιό της σχέδιο θεωρήθηκε επικίνδυνο για τα παιδιά', en: 'Its old design was judged unsafe for children' },
                  { el: 'Είχε ήδη χτιστεί κάτι εκεί', en: 'Another architect got there first' },
                ],
                explanation: {
                  el:
                    'Χωρίς αρκετά κομμάτια, μια ανακατασκευή θα ήταν εικασία. Προτίμησαν κάτι ' +
                    'φανερά καινούργιο από μια ωραία φαντασία.',
                  en:
                    'With too few pieces, a reconstruction would have been guesswork. They ' +
                    'chose something openly new over a handsome invention.',
                },
              },
            },
          ],
        },
        {
          id: 'berlin-neues-museum-ground',
          emoji: '⛏️',
          name: { el: 'Βγαλμένα από το χώμα', en: 'Dug out of the ground' },
          intro: {
            el:
              'Κάτω από την Αίγυπτο, στους ίδιους τοίχους, ζει η προϊστορία της Ευρώπης: ' +
              'πράγματα που κανείς δεν έγραψε σε βιβλίο, γιατί τότε δεν υπήρχαν βιβλία. ' +
              'Ό,τι ξέρουμε γι’ αυτά το ξέρουμε επειδή κάποιος έσκαψε και τα βρήκε. Τρία ' +
              'από αυτά θα σου μείνουν: ένα χρυσό καπέλο, ένα κρανίο, και μια συλλογή που ' +
              'είναι μοιρασμένη σε δύο χώρες.',
            en:
              'Below Egypt, inside the same walls, lives the prehistory of Europe: things ' +
              'nobody wrote down in a book, because there were no books yet. What we know ' +
              'about them we know because somebody dug and found them. Three of them will ' +
              'stay with you: a golden hat, a skull, and a collection split between two ' +
              'countries.',
          },
          exhibits: [
            {
              id: 'berlin-neues-museum-gold-hat',
              name: { el: 'Το Χρυσό Καπέλο του Βερολίνου', en: 'The Berlin Gold Hat' },
              blurb: {
                el:
                  'Ένας λεπτός χρυσός κώνος ύψους περίπου 75 εκατοστών, σφυρηλατημένος από ' +
                  'ένα κομμάτι χρυσού πριν από περίπου τρεις χιλιάδες χρόνια. Είναι σκεπασμένος ' +
                  'με σειρές από μικρούς κύκλους και ήλιους, χτυπημένους ένα ένα από μέσα ' +
                  'προς τα έξω. Οι ερευνητές μέτρησαν τους κύκλους και κατέληξαν σε κάτι ' +
                  'εκπληκτικό: τα σχήματα μοιάζουν να είναι ημερολόγιο, ένας τρόπος να ' +
                  'μετράς μήνες με το φεγγάρι και χρόνια με τον ήλιο. Πιθανότατα το ' +
                  'φορούσε ιερέας.',
                en:
                  'A thin gold cone about 75 centimetres tall, hammered out of a single ' +
                  'piece of gold roughly three thousand years ago. It is covered in rows of ' +
                  'small circles and suns, punched out one at a time from the inside. ' +
                  'Researchers counted the circles and reached something remarkable: the ' +
                  'pattern appears to be a calendar, a way of counting months by the moon ' +
                  'and years by the sun. It was most likely worn by a priest.',
              },
              question: {
                q: {
                  el: 'Τι φαίνεται να μετρούν οι κύκλοι πάνω στο καπέλο;',
                  en: 'What do the circles on the hat seem to count?',
                },
                answers: [
                  { el: 'Μήνες και χρόνια, σαν ημερολόγιο', en: 'Months and years, like a calendar' },
                  { el: 'Τα ζώα του κοπαδιού που είχε ο ιδιοκτήτης του', en: 'The animals in the herd its owner happened to own' },
                  { el: 'Τα χωριά που πλήρωναν φόρο στον βασιλιά τους', en: 'The villages that paid a tax to their own king' },
                  { el: 'Τα χρόνια του ιδιοκτήτη του', en: 'The years its owner lived' },
                ],
                explanation: {
                  el: 'Τα σχήματα δουλεύουν σαν πίνακας του φεγγαριού και του ήλιου. Είναι όργανο, όχι μόνο στολίδι.',
                  en: 'The pattern works like a table of moon and sun. It is an instrument, not only an ornament.',
                },
              },
            },
            {
              id: 'berlin-neues-museum-neanderthal',
              name: { el: 'Το κρανίο από το Λε Μουστιέ', en: 'The Le Moustier skull' },
              blurb: {
                el:
                  'Το κρανίο ενός νεαρού Νεάντερταλ, ηλικίας περίπου σαράντα πέντε χιλιάδων ' +
                  'ετών, που βρέθηκε σε βραχοσκεπή στη Γαλλία. Οι Νεάντερταλ δεν ήταν ' +
                  'πρόγονοί μας αλλά ξαδέρφια μας: ζούσαν στην Ευρώπη πολύ πριν από εμάς, ' +
                  'έφτιαχναν εργαλεία, άναβαν φωτιές και έθαβαν τους νεκρούς τους. Κοίτα τα ' +
                  'φρύδια του: η κοκαλένια γραμμή από πάνω από τα μάτια είναι πολύ πιο ' +
                  'χοντρή από τη δική σου. Το ίδιο το κρανίο έχει περάσει πόλεμο, χάθηκε ' +
                  'για χρόνια και ξαναβρέθηκε.',
                en:
                  'The skull of a young Neanderthal, about forty-five thousand years old, ' +
                  'found in a rock shelter in France. Neanderthals were not our ancestors ' +
                  'but our cousins: they lived in Europe long before we did, made tools, lit ' +
                  'fires and buried their dead. Look at the brow: the ridge of bone above ' +
                  'the eyes is far heavier than yours. The skull itself has been through a ' +
                  'war, was lost for years and was found again.',
              },
              question: {
                q: {
                  el: 'Τι ήταν οι Νεάντερταλ σε σχέση με εμάς;',
                  en: 'What were the Neanderthals to us?',
                },
                answers: [
                  { el: 'Ξαδέρφια μας, όχι πρόγονοί μας', en: 'Our cousins, not our ancestors' },
                  { el: 'Οι πρώτοι άνθρωποι που έφτασαν στην Αμερική', en: 'The first people who ever reached the Americas' },
                  { el: 'Ένα είδος μαϊμούς που δεν περπατούσε όρθιο', en: 'A kind of ape that did not walk upright at all' },
                  { el: 'Οι άνθρωποι που έχτισαν τα πρώτα χωριά της Ευρώπης', en: 'The people who built the first villages in Europe' },
                ],
                explanation: {
                  el: 'Είναι διαφορετικό κλαδί του ίδιου δέντρου. Έζησαν στην Ευρώπη χιλιάδες χρόνια πριν από εμάς.',
                  en: 'They are a different branch of the same tree. They lived in Europe thousands of years before us.',
                },
              },
            },
            {
              id: 'berlin-neues-museum-troy',
              name: { el: 'Τα ευρήματα της Τροίας', en: 'The Troy finds' },
              blurb: {
                el:
                  'Ο Χάινριχ Σλήμαν έσκαψε στα τέλη του 19ου αιώνα στον λόφο που πίστευε ' +
                  'ότι ήταν η Τροία, και χάρισε τα ευρήματά του σε αυτό το μουσείο. Η ' +
                  'συλλογή είναι σήμερα μοιρασμένη: τα χρυσά κοσμήματα τα πήρε ο Κόκκινος ' +
                  'Στρατός από το Βερολίνο το 1945 και βρίσκονται από τότε στη Μόσχα. Εδώ ' +
                  'έμειναν χιλιάδες αγγεία, εργαλεία και όπλα από πηλό και χαλκό. Είναι ' +
                  'λιγότερο λαμπερά, λένε όμως περισσότερα για το πώς ζούσαν πραγματικά οι ' +
                  'άνθρωποι εκείνης της πόλης.',
                en:
                  'Heinrich Schliemann dug in the late nineteenth century into the hill he ' +
                  'believed was Troy, and gave what he found to this museum. The collection ' +
                  'is now split: the gold jewellery was taken from Berlin by the Red Army in ' +
                  '1945 and has been in Moscow ever since. What stayed here is thousands of ' +
                  'pots, tools and weapons of clay and copper. They shine less, but they say ' +
                  'more about how the people of that city actually lived.',
              },
              question: {
                q: {
                  el: 'Πού βρίσκονται σήμερα τα χρυσά της Τροίας;',
                  en: 'Where is the gold from Troy today?',
                },
                answers: [
                  { el: 'Στη Μόσχα, όπου πήγαν το 1945', en: 'In Moscow, where they went in 1945' },
                  { el: 'Σε μουσείο της Τουρκίας', en: 'In a Turkish museum' },
                  { el: 'Χάθηκαν στον πόλεμο', en: 'They were lost in the war' },
                  { el: 'Σε ιδιωτική συλλογή', en: 'In a private collection' },
                ],
                explanation: {
                  el: 'Τα πήρε ο Κόκκινος Στρατός το 1945 και εκτίθενται στη Μόσχα. Το Βερολίνο κράτησε τα υπόλοιπα.',
                  en: 'The Red Army took them in 1945 and they are shown in Moscow. Berlin kept the rest.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'berlin-neues-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι το πιο φωτογραφημένο πρόσωπο αυτού του κτιρίου, όμως έχω μόνο ένα ' +
              'μάτι φτιαγμένο ως το τέλος. Με έβγαλαν από το χώμα ενός εργαστηρίου, στην ' +
              'Αίγυπτο, το 1912.',
            en:
              'I am the most photographed face in this building, and yet only one of my eyes ' +
              'was ever finished. They lifted me out of the floor of a workshop, in Egypt, ' +
              'in 1912.',
          },
          hint: {
            el: 'Φοράω ψηλό μπλε στέμμα και ήμουν βασίλισσα.',
            en: 'I wear a tall blue crown and I was a queen.',
          },
          answerExhibitId: 'berlin-neues-museum-nefertiti',
        },
        {
          id: 'berlin-neues-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι από ατόφιο χρυσάφι, ψηλός σαν το μπράτσο σου και λεπτός σαν φύλλο. Οι ' +
              'κύκλοι που με σκεπάζουν δεν είναι στολίδι: αν τους μετρήσεις σωστά, σου λένε ' +
              'πότε θα έρθει το φεγγάρι.',
            en:
              'I am solid gold, as tall as your arm and as thin as a leaf. The circles all ' +
              'over me are not decoration: counted properly, they tell you when the moon ' +
              'will come round again.',
          },
          hint: {
            el: 'Με φορούσαν στο κεφάλι, και είμαι μυτερός.',
            en: 'I was worn on a head, and I come to a point.',
          },
          answerExhibitId: 'berlin-neues-museum-gold-hat',
        },
        {
          id: 'berlin-neues-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Με ανεβαίνεις για να φτάσεις ψηλά και έχω το σχήμα που είχα πάντα, αλλά ούτε ' +
              'ένα από τα παλιά μου στολίδια. Είμαι γκρίζος, λείος και ολοκαίνουργιος μέσα ' +
              'σε γυμνά τούβλα.',
            en:
              'You climb me to get high up, and I keep the shape I always had, but not one ' +
              'of my old ornaments. I am grey, smooth and brand new inside a shell of bare ' +
              'brick.',
          },
          hint: {
            el: 'Δεν είμαι αντικείμενο σε βιτρίνα: είμαι μέρος του κτιρίου.',
            en: 'I am not an object in a case: I am part of the building.',
          },
          answerExhibitId: 'berlin-neues-museum-staircase',
        },
      ],
    },
  },

  // ------------------------------------------------------ museum für naturkunde
  {
    id: 'berlin-naturkundemuseum',
    cityId: 'berlin',
    emoji: '🦕',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Μουσείο Φυσικής Ιστορίας', en: 'The Museum für Naturkunde' },
    tagline: {
      el: 'Ο ψηλότερος στημένος σκελετός δεινοσαύρου στον κόσμο',
      en: 'The tallest mounted dinosaur skeleton anywhere in the world',
    },
    story: {
      el:
        'Το μουσείο ιδρύθηκε το 1810 και φυλάει πάνω από τριάντα εκατομμύρια αντικείμενα, ' +
        'από πέτρες και έντομα μέχρι σκελετούς φαλαινών. Μόλις μπεις, βρίσκεσαι κάτω από ' +
        'έναν σκελετό που σε κάνει να σωπάσεις: ένας γιγάντιος φυτοφάγος δεινόσαυρος, ' +
        'ύψους 13,27 μέτρων, ο ψηλότερος στημένος σκελετός δεινοσαύρου στον κόσμο. Τα κόκαλά ' +
        'του δεν βρέθηκαν εδώ. Ξεθάφτηκαν ανάμεσα στο 1909 και το 1913 στον λόφο Τεντάγκουρου, ' +
        'στη σημερινή Τανζανία, και κουβαλήθηκαν σε κιβώτια ως τη θάλασσα. Στην ίδια αίθουσα, ' +
        'σε μια σκοτεινή βιτρίνα, βρίσκεται μια πέτρα με ένα αποτύπωμα που άλλαξε τη ' +
        'βιολογία: ο Αρχαιοπτέρυξ του Βερολινού, ένα πλάσμα με δόντια, νύχια και φτερά. ' +
        'Πιο πέρα, πίσω από γυαλί, απλώνεται η υγρή συλλογή: ένα εκατομμύριο ζώα σε 276.000 ' +
        'βάζα με οινόπνευμα, αραδιασμένα σε ράφια ως το ταβάνι.',
      en:
        'The museum was founded in 1810 and looks after more than thirty million objects, ' +
        'from stones and insects to whale skeletons. The moment you walk in you are standing ' +
        'under a skeleton that makes people go quiet: an enormous plant-eating dinosaur, ' +
        '13.27 metres tall, the tallest mounted dinosaur skeleton in the world. Its bones ' +
        'were not found here. They were dug up between 1909 and 1913 at Tendaguru hill, in ' +
        'what is now Tanzania, and carried to the coast in crates. In the same hall, in a ' +
        'dark case, lies a slab of stone with an imprint that changed biology: the Berlin ' +
        'Archaeopteryx, a creature with teeth, claws and feathers. Further on, behind glass, ' +
        'stretches the wet collection: one million animals in 276,000 jars of alcohol, ' +
        'shelved to the ceiling.',
    },
    facts: [
      {
        el: 'Ο σκελετός του γιγάντιου δεινοσαύρου φτάνει τα 13,27 μέτρα ύψος.',
        en: 'The giant dinosaur skeleton stands 13.27 metres tall.',
      },
      {
        el: 'Τα κόκαλά του ξεθάφτηκαν στον λόφο Τεντάγκουρου, στη σημερινή Τανζανία.',
        en: 'Its bones were dug up at Tendaguru hill, in what is now Tanzania.',
      },
      {
        el: 'Η υγρή συλλογή έχει ένα εκατομμύριο ζώα μέσα σε 276.000 βάζα.',
        en: 'The wet collection holds one million animals inside 276,000 jars.',
      },
    ],
    location: {
      lat: 52.5302,
      lng: 13.3792,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q233098', deltaM: 0 },
        { kind: 'osm', ref: 'node/538692583', deltaM: 33 },
        { kind: 'wikipedia', ref: 'Museum für Naturkunde Berlin', deltaM: 28 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Wikidata has no separate item for the building, so the institution item is used; its point already sits on the museum on Invalidenstraße. OpenStreetMap’s node is 33 m off, just past the 30 m threshold, which holds the grade at B.',
      findIt: {
        el: 'Η είσοδος είναι στην Invalidenstraße 43, στη μέση της μακριάς κίτρινης πρόσοψης, πάνω από φαρδιά σκαλιά.',
        en: 'The way in is at Invalidenstraße 43, in the middle of the long yellow front, up a broad flight of steps.',
      },
    },
    question: {
      q: {
        el: 'Από πού ήρθαν τα κόκαλα του γιγάντιου δεινοσαύρου;',
        en: 'Where did the giant dinosaur’s bones come from?',
      },
      answers: [
        { el: 'Από έναν λόφο στη σημερινή Τανζανία', en: 'From a hill in what is now Tanzania' },
        { el: 'Από ένα λατομείο λίγα χιλιόμετρα έξω από το Βερολίνο', en: 'From a quarry a few kilometres outside Berlin' },
        { el: 'Από τις Άλπεις', en: 'From the Alps' },
        { el: 'Από τον βυθό της Βόρειας Θάλασσας, με δίχτυα ψαράδων', en: 'From the bed of the North Sea, in fishing nets' },
      ],
      explanation: {
        el:
          'Η ανασκαφή έγινε στον λόφο Τεντάγκουρου, από το 1909 ως το 1913, και τα κιβώτια ' +
          'με τα κόκαλα κουβαλήθηκαν με τα πόδια ως την ακτή.',
        en:
          'The dig was at Tendaguru hill, from 1909 to 1913, and the crates of bones were ' +
          'carried on foot all the way to the coast.',
      },
    },

    museum: {
      doorNote: {
        el: 'Η αίθουσα των δεινοσαύρων είναι αμέσως μετά την είσοδο. Κράτα λίγη ενέργεια για τα βάζα.',
        en: 'The dinosaur hall is straight past the entrance. Save some energy for the jars.',
      },
      rooms: [
        {
          id: 'berlin-naturkundemuseum-dinosaurs',
          emoji: '🦴',
          name: { el: 'Η αίθουσα των δεινοσαύρων', en: 'The dinosaur hall' },
          intro: {
            el:
              'Μια ψηλή αίθουσα με γυάλινη οροφή, γεμάτη σκελετούς που στέκονται ελεύθεροι ' +
              'χωρίς τζάμι μπροστά τους. Δεν χρειάζεται να διαβάσεις τίποτα για να ' +
              'καταλάβεις το μέγεθος: αρκεί να σηκώσεις το κεφάλι. Τα περισσότερα κόκαλα ' +
              'εδώ ήρθαν από την ίδια ανασκαφή, στην ίδια αφρικανική πλαγιά, μέσα σε ' +
              'ξύλινα κιβώτια.',
            en:
              'A tall hall under a glass roof, full of skeletons standing free with no glass ' +
              'in front of them. You do not have to read anything to grasp the size: just ' +
              'tip your head back. Most of the bones here came from one dig, on one African ' +
              'hillside, packed in wooden crates.',
          },
          exhibits: [
            {
              id: 'berlin-naturkundemuseum-giraffatitan',
              name: { el: 'Ο γιγάντιος δεινόσαυρος', en: 'The giant dinosaur' },
              blurb: {
                el:
                  'Ένας φυτοφάγος δεινόσαυρος με λαιμό σαν γερανό, στημένος σε ύψος 13,27 ' +
                  'μέτρων: πιο ψηλά από ένα σπίτι τεσσάρων ορόφων. Οι επιστήμονες τον ' +
                  'έλεγαν πρώτα Βραχιόσαυρο και σήμερα του δίνουν δικό του όνομα, ' +
                  'Γιραφατιτάνα, επειδή αποδείχτηκε αρκετά διαφορετικός από τον αμερικανικό ' +
                  'ξάδερφό του. Το 2007 τον ξαναέστησαν με το κεφάλι πιο ψηλά, όπως δείχνουν ' +
                  'οι νεότερες μελέτες για τη στάση του σώματός του. Μεγάλα ζώα σαν αυτό ' +
                  'έτρωγαν όλη μέρα, απλώς για να χορτάσουν.',
                en:
                  'A plant-eating dinosaur with a neck like a crane, mounted 13.27 metres ' +
                  'high: taller than a four-storey house. Scientists first called it a ' +
                  'Brachiosaurus and now give it a name of its own, Giraffatitan, because it ' +
                  'turned out to be quite different from its American cousin. In 2007 it was ' +
                  'remounted with its head held higher, as newer studies of its posture ' +
                  'suggest. Animals this big ate all day long, simply to get enough.',
              },
              question: {
                q: {
                  el: 'Γιατί άλλαξε το όνομα αυτού του δεινοσαύρου;',
                  en: 'Why did this dinosaur’s name change?',
                },
                answers: [
                  { el: 'Ήταν διαφορετικός από τον Βραχιόσαυρο', en: 'It differed from Brachiosaurus' },
                  { el: 'Το όνομα το είχε άλλο ζώο', en: 'Another animal had the name' },
                  { el: 'Το μουσείο θέλησε ένα όνομα πιο εύκολο για τα παιδιά', en: 'The museum wanted a name easier for children' },
                  { el: 'Ο επιστήμονας που το βάφτισε άλλαξε γνώμη αργότερα', en: 'The scientist who named it later changed his mind' },
                ],
                explanation: {
                  el: 'Όσο μελετούσαν τα κόκαλα, τόσο ξεχώριζε από τον αμερικανικό Βραχιόσαυρο. Ένα ξεχωριστό ζώο θέλει δικό του όνομα.',
                  en: 'The more the bones were studied, the less it matched the American Brachiosaurus. A separate animal needs a name of its own.',
                },
              },
            },
            {
              id: 'berlin-naturkundemuseum-kentrosaurus',
              name: { el: 'Ο δεινόσαυρος με τα αγκάθια', en: 'The spiky dinosaur' },
              blurb: {
                el:
                  'Δίπλα στον γίγαντα στέκεται ένα πολύ μικρότερο ζώο με διπλή σειρά ' +
                  'πλάκες στην πλάτη και μακριά μυτερά αγκάθια στην ουρά και στους ώμους. ' +
                  'Λέγεται Κεντρόσαυρος και ήρθε από την ίδια ανασκαφή στην Τανζανία, ' +
                  'δηλαδή έζησε στην ίδια περιοχή την ίδια εποχή με τον γίγαντα. Ήταν κι ' +
                  'αυτός φυτοφάγος. Τα αγκάθια δεν ήταν για κυνήγι, ήταν για να μη γίνει ο ' +
                  'ίδιος γεύμα κάποιου άλλου.',
                en:
                  'Beside the giant stands a much smaller animal with a double row of plates ' +
                  'down its back and long spikes on its tail and shoulders. It is called ' +
                  'Kentrosaurus and came from the same dig in Tanzania, which means it lived ' +
                  'in the same place at the same time as the giant. It was a plant-eater ' +
                  'too. The spikes were not for hunting, they were for not becoming ' +
                  'somebody else’s meal.',
              },
              question: {
                q: {
                  el: 'Σε τι χρησίμευαν τα αγκάθια του Κεντρόσαυρου;',
                  en: 'What were the Kentrosaurus’ spikes for?',
                },
                answers: [
                  { el: 'Στην άμυνα, όχι στο κυνήγι', en: 'Defence, and not hunting' },
                  { el: 'Στο να ξεριζώνει τα φυτά πιο εύκολα από το χώμα', en: 'Pulling plants out of the ground more easily' },
                  { el: 'Στο να κρατά ζεστό το σώμα του τις κρύες νύχτες', en: 'Keeping its body warm through the colder nights' },
                  { el: 'Στο να σκαρφαλώνει σε βράχους για να βρίσκει νερό', en: 'Climbing over rocks to find water further away' },
                ],
                explanation: {
                  el: 'Ήταν φυτοφάγος. Τα αγκάθια τον έκαναν δύσκολο στόχο για τα σαρκοφάγα της περιοχής.',
                  en: 'It ate plants. The spikes made it an awkward target for the meat-eaters around it.',
                },
              },
            },
            {
              id: 'berlin-naturkundemuseum-archaeopteryx',
              name: { el: 'Ο Αρχαιοπτέρυξ του Βερολίνου', en: 'The Berlin Archaeopteryx' },
              blurb: {
                el:
                  'Μια πλάκα ασβεστόλιθου από τη Βαυαρία με ένα ζώο αποτυπωμένο πάνω της ' +
                  'σαν φωτογραφία. Έχει δόντια στο στόμα, νύχια στα χέρια και μακριά ' +
                  'κοκαλένια ουρά, όλα από ερπετό. Έχει όμως και φτερά, καθαρά τυπωμένα ' +
                  'στην πέτρα. Είναι το δείγμα που κάνει ορατή μια αλλαγή: τα πουλιά είναι ' +
                  'συγγενείς των δεινοσαύρων. Λέγεται «δείγμα του Βερολίνου» και θεωρείται ' +
                  'το ομορφότερα διατηρημένο στον κόσμο. Μείνε λίγο μπροστά του: όσο ' +
                  'κοιτάς, τόσα φτερά βλέπεις.',
                en:
                  'A slab of Bavarian limestone with an animal printed on it like a ' +
                  'photograph. It has teeth in its mouth, claws on its hands and a long bony ' +
                  'tail, all of them reptile. It also has feathers, clearly pressed into the ' +
                  'stone. It is the specimen that makes a change visible: birds are ' +
                  'relatives of the dinosaurs. This one is called the Berlin specimen and is ' +
                  'reckoned the finest preserved anywhere. Stand in front of it a while: the ' +
                  'longer you look, the more feathers you see.',
              },
              question: {
                q: {
                  el: 'Τι κάνει τόσο σημαντικό αυτό το απολίθωμα;',
                  en: 'What makes this fossil so important?',
                },
                answers: [
                  { el: 'Έχει και δόντια και φτερά', en: 'It has both teeth and feathers' },
                  { el: 'Είναι το μεγαλύτερο απολίθωμα που βρέθηκε στη Βαυαρία', en: 'It is the largest fossil ever found in Bavaria' },
                  { el: 'Είναι το μοναδικό απολίθωμα που έχει κρατήσει χρώματα', en: 'It is the only fossil that has kept its colours' },
                  { el: 'Βρέθηκε σε νέο βράχο', en: 'It was found in young rock' },
                ],
                explanation: {
                  el: 'Δείχνει ερπετό και πουλί στο ίδιο σώμα. Γι’ αυτό λέμε ότι τα πουλιά είναι συγγενείς των δεινοσαύρων.',
                  en: 'It shows reptile and bird in one body. That is why we say birds are relatives of the dinosaurs.',
                },
              },
            },
            {
              id: 'berlin-naturkundemuseum-trex',
              name: { el: 'Ο Τυραννόσαυρος Τρίσταν', en: 'Tristan the Tyrannosaurus' },
              blurb: {
                el:
                  'Ένας από τους λίγους αληθινούς σκελετούς Τυραννόσαυρου που έχουν φτάσει ' +
                  'ποτέ στην Ευρώπη. Βρέθηκε στη Μοντάνα των Ηνωμένων Πολιτειών το 2010 και ' +
                  'σώθηκαν 170 από τα περίπου 300 κόκαλά του, ανάμεσά τους ένα εξαιρετικά ' +
                  'καλοδιατηρημένο κρανίο με δόντια σαν μπανάνες. Ζούσε πριν από περίπου 66 ' +
                  'εκατομμύρια χρόνια. Επειδή είναι δανεικός, ταξιδεύει κάθε τόσο σε άλλα ' +
                  'μουσεία, οπότε πριν πάτε καλό είναι να το τσεκάρετε.',
                en:
                  'One of the few real Tyrannosaurus skeletons ever to reach Europe. It was ' +
                  'found in Montana in the United States in 2010, and 170 of its roughly 300 ' +
                  'bones survived, among them a remarkably well kept skull with teeth like ' +
                  'bananas. It lived about 66 million years ago. Because it is on loan it ' +
                  'travels to other museums now and then, so it is worth checking before you ' +
                  'set out.',
              },
              question: {
                q: {
                  el: 'Γιατί μπορεί να μην τον βρεις εδώ όταν πας;',
                  en: 'Why might he not be here when you visit?',
                },
                answers: [
                  { el: 'Είναι δανεικός και ταξιδεύει', en: 'He is on loan and travels' },
                  { el: 'Τον βγάζουν από την έκθεση κάθε καλοκαίρι για καθάρισμα', en: 'He is taken out every summer to be cleaned' },
                  { el: 'Μπορούν να τον δουν μόνο ομάδες με κλεισμένο ραντεβού', en: 'Only groups with a booking are allowed to see him' },
                  { el: 'Είναι σε άλλο πάτωμα', en: 'He is on another floor' },
                ],
                explanation: {
                  el: 'Δεν ανήκει στο μουσείο. Οι δανεικοί σκελετοί πηγαινοέρχονται, γι’ αυτό αξίζει ένα τηλεφώνημα πριν.',
                  en: 'He does not belong to the museum. Loaned skeletons come and go, so a check beforehand is worth it.',
                },
              },
            },
          ],
        },
        {
          id: 'berlin-naturkundemuseum-behind-glass',
          emoji: '🫙',
          name: { el: 'Πίσω από το γυαλί', en: 'Behind the glass' },
          intro: {
            el:
              'Ένα μουσείο δεν είναι μόνο αυτά που εκθέτει. Είναι και μια τεράστια ' +
              'αποθήκη, όπου φυλάγονται πράγματα για επιστήμονες που δεν έχουν γεννηθεί ' +
              'ακόμα. Εδώ η αποθήκη έχει γίνει έκθεμα: κοιτάς μέσα από τζάμι και βλέπεις ' +
              'ράφια ως το ταβάνι. Δίπλα ζουν δύο ζώα που ολόκληρο το Βερολίνο τα ήξερε με ' +
              'το όνομά τους.',
            en:
              'A museum is not only what it puts on show. It is also an enormous store, ' +
              'holding things for scientists who have not been born yet. Here the store has ' +
              'become the exhibit: you look through glass at shelves that run to the ' +
              'ceiling. Beside it live two animals the whole of Berlin knew by name.',
          },
          exhibits: [
            {
              id: 'berlin-naturkundemuseum-wet-collection',
              name: { el: 'Η υγρή συλλογή', en: 'The wet collection' },
              blurb: {
                el:
                  'Ένας τοίχος από γυαλί, και πίσω του 276.000 βάζα με περίπου ένα ' +
                  'εκατομμύριο ζώα: ψάρια, φίδια, βατράχια, καβούρια, σκουλήκια. Δεν ' +
                  'κολυμπούν σε νερό αλλά σε οινόπνευμα, γιατί το νερό θα τα σάπιζε ενώ το ' +
                  'οινόπνευμα σταματά τα βακτήρια. Το φως είναι χαμηλό επίτηδες: το πολύ φως ' +
                  'ξεθωριάζει τα δείγματα. Πολλά από αυτά τα βάζα είναι πάνω από εκατό ' +
                  'χρόνων και περιέχουν ζώα από είδη που δεν υπάρχουν πια πουθενά.',
                en:
                  'A wall of glass, and behind it 276,000 jars holding about one million ' +
                  'animals: fish, snakes, frogs, crabs, worms. They do not float in water but ' +
                  'in alcohol, because water would rot them while alcohol stops the ' +
                  'bacteria. The light is kept low on purpose: too much light fades a ' +
                  'specimen. Many of these jars are over a hundred years old and hold animals ' +
                  'of species that no longer exist anywhere.',
              },
              question: {
                q: {
                  el: 'Γιατί τα ζώα φυλάγονται σε οινόπνευμα και όχι σε νερό;',
                  en: 'Why are the animals kept in alcohol and not in water?',
                },
                answers: [
                  { el: 'Το οινόπνευμα σταματά τα βακτήρια', en: 'Alcohol stops the bacteria' },
                  { el: 'Το οινόπνευμα κάνει τα ζώα να φαίνονται πιο καθαρά μέσα', en: 'Alcohol makes the animals look cleaner inside' },
                  { el: 'Είναι φθηνότερο από το νερό όταν το αγοράζεις χοντρικά', en: 'It is cheaper than water when bought in bulk' },
                  { el: 'Παγώνει πιο δύσκολα, οπότε τα βάζα δεν σπάνε τον χειμώνα', en: 'It freezes less, so the jars do not crack in winter' },
                ],
                explanation: {
                  el: 'Στο νερό ένα ζώο σαπίζει σε λίγες μέρες. Στο οινόπνευμα μπορεί να κρατήσει αιώνες.',
                  en: 'In water an animal rots in days. In alcohol it can last for centuries.',
                },
              },
            },
            {
              id: 'berlin-naturkundemuseum-bobby',
              name: { el: 'Ο Μπόμπι ο γορίλας', en: 'Bobby the gorilla' },
              blurb: {
                el:
                  'Ο Μπόμπι ήταν γορίλας του ζωολογικού κήπου του Βερολίνου στη δεκαετία ' +
                  'του 1930 και ο πιο διάσημος κάτοικος της πόλης μετά τους ανθρώπους της. ' +
                  'Είχε φτάσει μωρό και μεγάλωσε τεράστιος, και ο κόσμος έκανε ουρά για να ' +
                  'τον δει. Όταν πέθανε νέος, το 1935, ολόκληρο το Βερολίνο θρήνησε και οι ' +
                  'εφημερίδες έγραψαν γι’ αυτόν στην πρώτη σελίδα. Το μουσείο τον διατήρησε ' +
                  'και στέκεται εδώ όρθιος, με το πρόσωπο ενός ζώου που το ήξερε μια ' +
                  'ολόκληρη πόλη.',
                en:
                  'Bobby was a gorilla at the Berlin zoo in the 1930s and the most famous ' +
                  'resident of the city after its people. He had arrived as a baby and grew ' +
                  'enormous, and crowds queued to see him. When he died young, in 1935, the ' +
                  'whole of Berlin mourned and the newspapers put him on the front page. The ' +
                  'museum preserved him, and he stands here upright, with the face of an ' +
                  'animal a whole city knew.',
              },
              question: {
                q: {
                  el: 'Πού ζούσε ο Μπόμπι πριν έρθει στο μουσείο;',
                  en: 'Where did Bobby live before he came to the museum?',
                },
                answers: [
                  { el: 'Στον ζωολογικό κήπο του Βερολίνου', en: 'At the zoo here in Berlin' },
                  { el: 'Σε δάσος της Αφρικής, μέχρι που τον βρήκαν επιστήμονες', en: 'In an African forest, until scientists found him' },
                  { el: 'Σε τσίρκο της Γερμανίας', en: 'In a German circus' },
                  { el: 'Σε ιδιωτικό κήπο μιας οικογένειας έξω από την πόλη', en: 'In a family’s private garden outside the city' },
                ],
                explanation: {
                  el: 'Ήταν ζώο του ζωολογικού κήπου, λίγα χιλιόμετρα από εδώ, και τον ήξερε όλη η πόλη με το όνομά του.',
                  en: 'He was a zoo animal, a few kilometres from here, and the whole city knew him by name.',
                },
              },
            },
            {
              id: 'berlin-naturkundemuseum-knut',
              name: { el: 'Ο Κνουτ η πολική αρκούδα', en: 'Knut the polar bear' },
              blurb: {
                el:
                  'Ο Κνουτ γεννήθηκε στον ζωολογικό κήπο του Βερολίνου στις 5 Δεκεμβρίου ' +
                  '2006. Η μητέρα του δεν τον φρόντισε, οπότε τον μεγάλωσε με το μπιμπερό ' +
                  'ένας φύλακας, και ο κόσμος τρελάθηκε: τηλεοράσεις από όλη τη γη ήρθαν να ' +
                  'δουν ένα άσπρο κουτάβι αρκούδας. Πέθανε ξαφνικά το 2011, μόλις τεσσάρων ' +
                  'ετών, από αρρώστια στον εγκέφαλο. Το μουσείο τον διατήρησε ώστε να ' +
                  'μπορούν να τον μελετούν και να τον βλέπουν και τα παιδιά που γεννήθηκαν ' +
                  'πολύ μετά από εκείνον.',
                en:
                  'Knut was born at the Berlin zoo on 5 December 2006. His mother did not ' +
                  'look after him, so a keeper raised him with a bottle, and the world went ' +
                  'wild: television crews from everywhere came to see a white bear cub. He ' +
                  'died suddenly in 2011, only four years old, of an illness in his brain. ' +
                  'The museum preserved him so that he can be studied, and seen by children ' +
                  'born long after him.',
              },
              question: {
                q: {
                  el: 'Γιατί μεγάλωσε τον Κνουτ ένας φύλακας και όχι η μητέρα του;',
                  en: 'Why did a keeper raise Knut instead of his mother?',
                },
                answers: [
                  { el: 'Η μητέρα του δεν τον φρόντισε', en: 'His mother did not look after him' },
                  { el: 'Η μητέρα του είχε σταλεί σε άλλον ζωολογικό κήπο', en: 'His mother had been sent to another zoo abroad' },
                  { el: 'Γεννήθηκε πολύ νωρίς και χρειαζόταν θερμοκοιτίδα', en: 'He was born early and needed an incubator to live' },
                  { el: 'Οι φύλακες ήθελαν να τον μάθουν να μη φοβάται ανθρώπους', en: 'The keepers wanted him unafraid of human beings' },
                ],
                explanation: {
                  el: 'Συμβαίνει μερικές φορές στα ζώα. Χωρίς τον φύλακα και το μπιμπερό, ο Κνουτ δεν θα είχε επιβιώσει.',
                  en: 'It happens with animals sometimes. Without the keeper and the bottle, Knut would not have survived.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'berlin-naturkundemuseum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι το πρώτο πράγμα που βλέπεις και σε κάνω να σηκώσεις το κεφάλι. Ο ' +
              'λαιμός μου είναι γερανός, τα κόκαλά μου ήρθαν από την Αφρική σε κιβώτια, και ' +
              'κανένας άλλος στημένος σκελετός στον κόσμο δεν είναι πιο ψηλός.',
            en:
              'I am the first thing you see and I make you tip your head back. My neck is a ' +
              'crane, my bones came from Africa in crates, and no other mounted skeleton in ' +
              'the world stands taller than me.',
          },
          hint: {
            el: 'Έτρωγα μόνο φυτά, όλη μέρα.',
            en: 'I ate nothing but plants, all day long.',
          },
          answerExhibitId: 'berlin-naturkundemuseum-giraffatitan',
        },
        {
          id: 'berlin-naturkundemuseum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι πλακέ και ακίνητος σε μια σκοτεινή βιτρίνα. Έχω δόντια ερπετού και ' +
              'νύχια ερπετού, αλλά γύρω από τα κόκαλά μου η πέτρα κράτησε κάτι που κανένα ' +
              'ερπετό δεν έχει.',
            en:
              'I am flat and still inside a dark case. I have the teeth and the claws of a ' +
              'reptile, but around my bones the stone has kept something no reptile has.',
          },
          hint: {
            el: 'Το πράγμα που έχω το έχουν σήμερα όλα τα περιστέρια.',
            en: 'The thing I have, every pigeon has today.',
          },
          answerExhibitId: 'berlin-naturkundemuseum-archaeopteryx',
        },
        {
          id: 'berlin-naturkundemuseum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Γεννήθηκα εδώ κοντά, σε έναν κήπο με ζώα, και με τάισε άνθρωπος με μπιμπερό. ' +
              'Όλος ο πλανήτης ήθελε να με δει άσπρο και μικρό. Έζησα μόνο τέσσερα χρόνια.',
            en:
              'I was born close to here, in a garden of animals, and a person fed me from a ' +
              'bottle. The whole planet wanted to see me, small and white. I lived only four ' +
              'years.',
          },
          hint: {
            el: 'Το είδος μου ζει κανονικά στους πάγους.',
            en: 'My kind normally lives out on the ice.',
          },
          answerExhibitId: 'berlin-naturkundemuseum-knut',
        },
      ],
    },
  },

  // ------------------------------------------------------- deutsches technikmuseum
  {
    id: 'berlin-technikmuseum',
    cityId: 'berlin',
    emoji: '✈️',
    category: 'science',
    difficulty: 2,

    name: { el: 'Deutsches Technikmuseum', en: 'The Deutsches Technikmuseum' },
    tagline: {
      el: 'Ένα αεροπλάνο κρέμεται από τη στέγη, πάνω από τον δρόμο',
      en: 'An aeroplane hangs off the roof, out over the street',
    },
    story: {
      el:
        'Το μουσείο κάθεται πάνω στον παλιό σταθμό εμπορευμάτων του Anhalter Bahnhof, εκεί ' +
        'όπου κάποτε ξεφόρτωναν τρένα όλη μέρα. Δύο κυκλικές αποθήκες ατμομηχανών σώθηκαν ' +
        'και σήμερα είναι γεμάτες τρένα, με τριάντα τρεις γραμμές να ξεκινούν σαν ακτίνες ' +
        'από τη μέση. Το πιο παράξενο θέαμα είναι όμως στη στέγη: ένα αληθινό αεροπλάνο ' +
        'Douglas C-47 κρέμεται από την άκρη του κτιρίου, με τη μύτη έξω στον αέρα. Αυτός ο ' +
        'τύπος αεροσκάφους κράτησε ζωντανό το Δυτικό Βερολίνο το 1948 και το 1949, όταν οι ' +
        'δρόμοι προς την πόλη ήταν κλειστοί και όλα, από αλεύρι μέχρι κάρβουνο, έμπαιναν ' +
        'πετώντας. Τα παιδιά τα φώναζαν «βομβαρδιστικά της σταφίδας», επειδή μερικοί πιλότοι ' +
        'έριχναν γλυκά με μικρά αλεξίπτωτα από μαντήλια. Δίπλα υπάρχει το Spectrum, όπου ' +
        'όλα φτιάχτηκαν για να τα πιάσεις.',
      en:
        'The museum sits on the old goods yard of the Anhalter Bahnhof, where trains were ' +
        'unloaded all day long. Two round engine sheds survived and are now packed with ' +
        'trains, thirty-three tracks running out from the middle like spokes. The strangest ' +
        'sight, though, is on the roof: a real Douglas C-47 aeroplane hangs off the edge of ' +
        'the building with its nose out in the air. Aircraft of that type kept West Berlin ' +
        'alive in 1948 and 1949, when the roads into the city were shut and everything from ' +
        'flour to coal had to be flown in. Children called them “raisin bombers”, because ' +
        'some pilots dropped sweets on little parachutes made of handkerchiefs. Next door is ' +
        'the Spectrum, where everything was built to be touched.',
    },
    facts: [
      {
        el: 'Το μουσείο στέκεται στον παλιό σταθμό εμπορευμάτων του Anhalter Bahnhof.',
        en: 'The museum stands on the old goods yard of the Anhalter Bahnhof.',
      },
      {
        el: 'Οι δύο κυκλικές αποθήκες τρένων έχουν συνολικά τριάντα τρεις γραμμές.',
        en: 'The two round engine sheds have thirty-three tracks between them.',
      },
      {
        el: 'Το αεροπλάνο στη στέγη είναι ένα Douglas C-47, τύπος που πετούσε το 1948-49 στο Βερολίνο.',
        en: 'The aeroplane on the roof is a Douglas C-47, a type that flew into Berlin in 1948-49.',
      },
    ],
    location: {
      lat: 52.49861,
      lng: 13.3775,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q706530', deltaM: 0 },
        { kind: 'osm', ref: 'way/31622818', deltaM: 170 },
        { kind: 'wikipedia', ref: 'German Museum of Technology', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The resolver flagged OpenStreetMap as an outlier at 170 m. That is expected here: the museum covers a whole former goods yard, and the OSM outline is centred on the site while Wikidata and Wikipedia both point at the entrance building on Trebbiner Straße, where they agree exactly.',
      findIt: {
        el: 'Η είσοδος είναι στην Trebbiner Straße 9. Το αεροπλάνο στη στέγη φαίνεται από τη γέφυρα του δρόμου.',
        en: 'The way in is at Trebbiner Straße 9. The aeroplane on the roof shows from the road bridge.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έλεγαν «βομβαρδιστικά της σταφίδας» τα αεροπλάνα;',
        en: 'Why were the aeroplanes called “raisin bombers”?',
      },
      answers: [
        { el: 'Έριχναν γλυκά με μικρά αλεξίπτωτα', en: 'They dropped sweets on little parachutes' },
        { el: 'Μετέφεραν σταφίδες, το μόνο φαγητό που δεν χαλούσε', en: 'They carried raisins, the one food that did not spoil' },
        { el: 'Ήταν βαμμένα σαν σταφίδα', en: 'They were painted raisin-dark' },
        { el: 'Ήταν τόσα πολλά που έμοιαζαν με σμήνος από κουκκίδες', en: 'There were so many they looked like a swarm of dots' },
      ],
      explanation: {
        el:
          'Μερικοί πιλότοι έδεναν καραμέλες σε μαντήλια και τις έριχναν πριν προσγειωθούν. ' +
          'Το παρατσούκλι το έβγαλαν τα παιδιά που περίμεναν κάτω.',
        en:
          'Some pilots tied sweets to handkerchiefs and dropped them before landing. The ' +
          'nickname came from the children waiting below.',
      },
    },
  },

  // --------------------------------------------------------------- olympiastadion
  {
    id: 'berlin-olympiastadion',
    cityId: 'berlin',
    emoji: '🏟️',
    category: 'sport',
    difficulty: 3,

    name: { el: 'Ολυμπιακό Στάδιο', en: 'The Olympiastadion' },
    tagline: {
      el: 'Εδώ ένας δρομέας κέρδισε τέσσερα χρυσά σε πέντε μέρες',
      en: 'Here one runner won four golds in five days',
    },
    story: {
      el:
        'Το στάδιο χτίστηκε από το 1934 ως το 1936, σε σχέδιο του Βέρνερ Μαρχ, για τους ' +
        'Ολυμπιακούς Αγώνες του 1936. Η κυβέρνηση της Γερμανίας εκείνης της εποχής, η ' +
        'κυβέρνηση του Χίτλερ, ήθελε τους Αγώνες για να δείξει στον κόσμο τη δύναμή της και ' +
        'να αποδείξει ότι κάποιοι άνθρωποι αξίζουν περισσότερο από κάποιους άλλους. Και ' +
        'τότε, μπροστά της, ένας Αμερικανός δρομέας ονόματι Τζέσε Όουενς κέρδισε τέσσερα ' +
        'χρυσά μετάλλια: στα 100 μέτρα, στα 200 μέτρα, στο άλμα εις μήκος και στη σκυταλοδρομία. ' +
        'Ήταν μαύρος, και η απόδειξη ήρθε στη σκόνη του στίβου. Σήμερα ένας δρόμος έξω από ' +
        'το στάδιο φέρει το όνομά του. Το στάδιο χωράει σχεδόν εβδομήντα πέντε χιλιάδες ' +
        'θεατές, φιλοξενεί κάθε χρόνο τον τελικό του γερμανικού κυπέλλου και εδώ έγινε ο ' +
        'τελικός του Παγκοσμίου Κυπέλλου του 2006.',
      en:
        'The stadium was built from 1934 to 1936, designed by Werner March, for the Olympic ' +
        'Games of 1936. The German government of the day, Hitler’s government, wanted the ' +
        'Games in order to show the world its power and to prove that some people are worth ' +
        'more than others. And then, in front of it, an American runner called Jesse Owens ' +
        'won four gold medals: the 100 metres, the 200 metres, the long jump and the relay. ' +
        'He was Black, and the answer arrived in the dust of the track. Today a street ' +
        'outside the stadium carries his name. The stadium holds almost seventy-five ' +
        'thousand people, hosts the German cup final every year, and the World Cup final of ' +
        '2006 was played here.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1934 ως το 1936, για τους Ολυμπιακούς Αγώνες εκείνης της χρονιάς.',
        en: 'It was built from 1934 to 1936, for the Olympic Games of that year.',
      },
      {
        el: 'Χωράει 74.475 θεατές μετά την ανακαίνιση που τελείωσε το 2004.',
        en: 'It holds 74,475 people after the rebuilding finished in 2004.',
      },
      {
        el: 'Ο τελικός του Παγκοσμίου Κυπέλλου του 2006 παίχτηκε εδώ.',
        en: 'The 2006 World Cup final was played here.',
      },
    ],
    location: {
      lat: 52.51472,
      lng: 13.23944,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q151374', deltaM: 0 },
        { kind: 'osm', ref: 'way/38862723', deltaM: 36 },
        { kind: 'wikipedia', ref: 'Olympiastadion (Berlin)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'A centroid on the bowl itself, not on the Olympiapark around it. OpenStreetMap centres the outline 36 m away, just outside the 30 m agreement window, so the grade is B.',
      findIt: {
        el: 'Ο σταθμός Olympiastadion σε αφήνει στην πλατεία με τους δύο πέτρινους πύργους: αυτή είναι η κύρια είσοδος.',
        en: 'Olympiastadion station puts you on the square with the two stone towers: that is the main entrance.',
      },
    },
    question: {
      q: {
        el: 'Πόσα χρυσά μετάλλια κέρδισε εδώ ο Τζέσε Όουενς το 1936;',
        en: 'How many gold medals did Jesse Owens win here in 1936?',
      },
      answers: [
        { el: 'Τέσσερα, σε τέσσερα διαφορετικά αγωνίσματα', en: 'Four, in four different events' },
        { el: 'Δύο, στα 100 και στα 200 μέτρα', en: 'Two, the 100 and 200 metres' },
        { el: 'Ένα, μόνο στο άλμα εις μήκος', en: 'One, in the long jump only' },
        { el: 'Επτά, ρεκόρ που δεν έχει σπάσει ακόμα', en: 'Seven, still a record' },
      ],
      explanation: {
        el:
          '100 μέτρα, 200 μέτρα, άλμα εις μήκος και σκυταλοδρομία. Τέσσερις νίκες σε πέντε ' +
          'μέρες, μπροστά σε μια κυβέρνηση που ήθελε να αποδείξει το αντίθετο.',
        en:
          'The 100 metres, the 200 metres, the long jump and the relay. Four wins in five ' +
          'days, in front of a government that wanted to prove the opposite.',
      },
    },
  },

  // -------------------------------------------------------------- markthalle neun
  {
    id: 'berlin-markthalle-neun',
    cityId: 'berlin',
    emoji: '🥨',
    category: 'food',
    difficulty: 1,

    name: { el: 'Η αγορά Markthalle Neun', en: 'Markthalle Neun' },
    tagline: {
      el: 'Η ένατη σκεπαστή αγορά της πόλης, σωσμένη από τους γείτονες',
      en: 'The city’s ninth covered market, saved by its neighbours',
    },
    story: {
      el:
        'Η αγορά άνοιξε την 1η Οκτωβρίου 1891. Ήταν η ένατη από τις σκεπαστές αγορές που ' +
        'έχτισε το Βερολίνο για να μαζέψει τους πάγκους από τους δρόμους κάτω από μια ' +
        'στέγη, όπου το φαγητό μπορούσε να μένει δροσερό και καθαρό: εκείνη την εποχή δεν ' +
        'υπήρχαν ψυγεία, και το ψάρι στον ήλιο ήταν πρόβλημα υγείας για ολόκληρη τη ' +
        'γειτονιά. Το κτίριο με τα σιδερένια τόξα γλίτωσε από τον πόλεμο. Ως το 2011 όμως ' +
        'είχε σχεδόν αδειάσει και επρόκειτο να πουληθεί για να γίνει ένα ακόμη σουπερμάρκετ. ' +
        'Τότε τρεις άνθρωποι της γειτονιάς ζήτησαν από τον δήμο να την πουλήσει σε αυτούς, ' +
        'και το πέτυχαν. Σήμερα έχει φούρνους, τυριά, κρεοπωλεία και μικρή ζυθοποιία, και ' +
        'κάθε Πέμπτη βράδυ γεμίζει μαγείρους που δεν έχουν δικό τους εστιατόριο. Το πιο ' +
        'βερολινέζικο πιάτο, το Currywurst, γεννήθηκε στην πόλη το 1949.',
      en:
        'The market opened on 1 October 1891. It was the ninth of the covered markets Berlin ' +
        'built to get the stalls off the streets and under a roof, where food could stay ' +
        'cool and clean: there were no fridges then, and fish in the sun was a health ' +
        'problem for a whole neighbourhood. The building, with its iron arches, came through ' +
        'the war. By 2011, though, it had almost emptied and was about to be sold to become ' +
        'another supermarket. Three people from the neighbourhood asked the city to sell it ' +
        'to them instead, and they won. Today it has bakers, cheese, butchers and a small ' +
        'brewery, and every Thursday evening it fills with cooks who have no restaurant of ' +
        'their own. The most Berlin dish of all, Currywurst, was invented in the city in ' +
        '1949.',
    },
    facts: [
      {
        el: 'Άνοιξε την 1η Οκτωβρίου 1891 ως η ένατη σκεπαστή αγορά του Βερολίνου.',
        en: 'It opened on 1 October 1891 as Berlin’s ninth covered market.',
      },
      {
        el: 'Το 2011 σώθηκε από κατοίκους της γειτονιάς που την αγόρασαν από τον δήμο.',
        en: 'In 2011 it was saved by neighbours who bought it from the city.',
      },
      {
        el: 'Κάθε Πέμπτη το βράδυ η αγορά γεμίζει πάγκους με φαγητό του δρόμου.',
        en: 'Every Thursday evening the hall fills with street-food stalls.',
      },
    ],
    location: {
      lat: 52.5022,
      lng: 13.4315,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1226563', deltaM: 0 },
        { kind: 'osm', ref: 'relation/9503840', deltaM: 4 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Grade B on two sources: Wikipedia carries no coordinate for this hall. Wikidata files it as Markthalle IX, its official number, while Berlin writes Markthalle Neun; it is the same building.',
      findIt: {
        el: 'Η μεγάλη καμάρα της εισόδου είναι στην Eisenbahnstraße 42, ανάμεσα σε κανονικές πολυκατοικίες.',
        en: 'The big entrance arch is at Eisenbahnstraße 42, tucked between ordinary blocks of flats.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έχτισε το Βερολίνο σκεπαστές αγορές το 1891;',
        en: 'Why did Berlin build covered markets in 1891?',
      },
      answers: [
        { el: 'Για να μένει το φαγητό δροσερό και καθαρό', en: 'To keep the food cool and clean' },
        { el: 'Για να μη βρέχονται οι πελάτες όταν ψώνιζαν τον χειμώνα', en: 'So that shoppers would not get wet in the winter' },
        { el: 'Για να πληρώνουν οι έμποροι πιο εύκολα τους φόρους τους', en: 'So that traders could pay their taxes more easily' },
        { el: 'Για να χωρούν και τα κάρα', en: 'So that carts could fit inside' },
      ],
      explanation: {
        el:
          'Δεν υπήρχαν ψυγεία. Ένας πάγκος με ψάρι στον ήλιο αρρώσταινε κόσμο, οπότε η ' +
          'πόλη μάζεψε τους πάγκους κάτω από στέγη.',
        en:
          'There were no fridges. A fish stall in the sun made people ill, so the city ' +
          'gathered the stalls under a roof.',
      },
    },
  },

  // ------------------------------------------------------------------------- zoo
  {
    id: 'berlin-zoo',
    cityId: 'berlin',
    emoji: '🦛',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ζωολογικός Κήπος Βερολίνου', en: 'The Berlin Zoo' },
    tagline: {
      el: 'Ο παλαιότερος ζωολογικός κήπος της Γερμανίας, με μια πύλη ελεφάντων',
      en: 'Germany’s oldest zoo, with a gate held up by elephants',
    },
    story: {
      el:
        'Ο κήπος άνοιξε την 1η Αυγούστου 1844 και είναι ο παλαιότερος ζωολογικός κήπος της ' +
        'Γερμανίας. Τα πρώτα του ζώα ήρθαν από τα βασιλικά κοτέτσια και κλουβιά του ' +
        'Tiergarten, του μεγάλου πάρκου δίπλα. Σήμερα ζουν εδώ γύρω στα είκοσι χιλιάδες ' +
        'ζώα από περίπου χίλια τριακόσια ογδόντα διαφορετικά είδη, δηλαδή περισσότερα είδη ' +
        'από οποιονδήποτε άλλο ζωολογικό κήπο στον κόσμο. Η διάσημη Πύλη των Ελεφάντων του ' +
        '1899, με τους δύο πέτρινους ελέφαντες, καταστράφηκε στον πόλεμο και ξαναχτίστηκε ' +
        'το 1984 από τα αρχικά σχέδια. Το πιο δύσκολο κομμάτι της ιστορίας του είναι ' +
        'αληθινό και αξίζει να λέγεται: στο τέλος του πολέμου, από τα 3.715 ζώα του είχαν ' +
        'μείνει ζωντανά μόλις 91. Ανάμεσά τους ο ελέφαντας Σιάμ και ο ιπποπόταμος ' +
        'Κναούτσκε. Ο κήπος ξαναχτίστηκε γύρω από αυτά τα ενενήντα ένα ζώα.',
      en:
        'The zoo opened on 1 August 1844 and is the oldest in Germany. Its first animals ' +
        'came from the royal pens and cages in the Tiergarten, the big park next door. Today ' +
        'around twenty thousand animals live here, from about one thousand three hundred and ' +
        'eighty different species, which is more kinds of animal than any other zoo in the ' +
        'world. The famous Elephant Gate of 1899, with its two stone elephants, was ' +
        'destroyed in the war and rebuilt in 1984 from the original drawings. The hardest ' +
        'part of its story is true and worth telling: at the end of the war, of its 3,715 ' +
        'animals only 91 were still alive. Among them were the elephant Siam and the ' +
        'hippopotamus Knautschke. The zoo was built up again around those ninety-one ' +
        'animals.',
    },
    facts: [
      {
        el: 'Άνοιξε την 1η Αυγούστου 1844 και είναι ο παλαιότερος ζωολογικός κήπος της Γερμανίας.',
        en: 'It opened on 1 August 1844 and is the oldest zoo in Germany.',
      },
      {
        el: 'Φιλοξενεί περίπου 1.380 διαφορετικά είδη ζώων, περισσότερα από κάθε άλλο ζωολογικό κήπο.',
        en: 'It keeps about 1,380 different species, more than any other zoo.',
      },
      {
        el: 'Η Πύλη των Ελεφάντων του 1899 ξαναχτίστηκε το 1984 από τα αρχικά σχέδια.',
        en: 'The Elephant Gate of 1899 was rebuilt in 1984 from the original plans.',
      },
    ],
    location: {
      lat: 52.50833,
      lng: 13.3375,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q154828', deltaM: 0 },
        { kind: 'osm', ref: 'way/9393789', deltaM: 131 },
        { kind: 'wikipedia', ref: 'Berlin Zoo', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin: the zoo is a large park with two entrances far apart, so OpenStreetMap’s outline centre falls 131 m from Wikidata’s point. Both are inside the grounds; see findIt for the gate.',
      findIt: {
        el: 'Η Πύλη των Ελεφάντων είναι στη Budapester Straße: ψάξε τους δύο πέτρινους ελέφαντες που κρατούν τη στέγη.',
        en: 'The Elephant Gate is on Budapester Straße: look for the two stone elephants holding up the roof.',
      },
    },
    question: {
      q: {
        el: 'Τι έκανε ξεχωριστά δύσκολο το τέλος του πολέμου για τον κήπο;',
        en: 'What made the end of the war so hard for the zoo?',
      },
      answers: [
        { el: 'Από 3.715 ζώα είχαν μείνει μόλις 91', en: 'Of 3,715 animals, only 91 were left' },
        { el: 'Τα ζώα του μεταφέρθηκαν όλα σε κήπους άλλων πόλεων', en: 'All its animals were moved to zoos in other cities' },
        { el: 'Έμεινε κλειστός για δέκα ολόκληρα χρόνια μετά τον πόλεμο', en: 'It stayed shut for ten whole years after the war' },
        { el: 'Το Τείχος πέρασε από τη μέση του και τον έκοψε στα δύο', en: 'The Wall ran through it and cut it into two halves' },
      ],
      explanation: {
        el:
          'Οι βομβαρδισμοί κατέστρεψαν τα κλουβιά και τα περισσότερα ζώα χάθηκαν. Ο κήπος ' +
          'ξαναχτίστηκε γύρω από τα ενενήντα ένα που έζησαν.',
        en:
          'The bombing destroyed the enclosures and most of the animals were lost. The zoo ' +
          'was rebuilt around the ninety-one that lived.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'berlin-the-wall',
    cityId: 'berlin',
    emoji: '🧱',
    name: { el: 'Το Τείχος και οι δύο πλευρές του', en: 'The Wall and its two sides' },
    promise: {
      el: 'Μια πύλη που έκλεισε, ένα φυλάκιο με τανκς, μια πλατεία με κουνέλια και ένα τείχος γεμάτο χρώματα.',
      en: 'A gate that shut, a checkpoint with tanks, a square full of rabbits and a wall full of colour.',
    },
    placeIds: [
      'berlin-brandenburg-gate',
      'berlin-checkpoint-charlie',
      'berlin-potsdamer-platz',
      'berlin-east-side-gallery',
    ],
  },
  {
    id: 'berlin-the-island',
    cityId: 'berlin',
    emoji: '🏝️',
    name: { el: 'Το νησί και η παλιά πόλη', en: 'The island and the old town' },
    promise: {
      el: 'Ένας πράσινος τρούλος, μια βασίλισσα με ένα μάτι, τα πρώτα σοκάκια της πόλης και μια μπάλα στα διακόσια μέτρα.',
      en: 'A green dome, a queen with one eye, the city’s first lanes and a ball two hundred metres up.',
    },
    placeIds: [
      'berlin-berliner-dom',
      'berlin-neues-museum',
      'berlin-nikolaiviertel',
      'berlin-fernsehturm',
    ],
  },
  {
    id: 'berlin-bones-and-engines',
    cityId: 'berlin',
    emoji: '🦖',
    name: { el: 'Κόκαλα, μηχανές και ζώα', en: 'Bones, engines and animals' },
    promise: {
      el: 'Ο ψηλότερος σκελετός δεινοσαύρου του κόσμου, ένα αεροπλάνο στη στέγη και ο παλαιότερος ζωολογικός κήπος της χώρας.',
      en: 'The world’s tallest dinosaur skeleton, an aeroplane on a roof and the country’s oldest zoo.',
    },
    placeIds: [
      'berlin-naturkundemuseum',
      'berlin-technikmuseum',
      'berlin-zoo',
    ],
  },
  {
    id: 'berlin-stone-and-gold',
    cityId: 'berlin',
    emoji: '🥇',
    name: { el: 'Πέτρα, θόλοι και μια χρυσή κυρία', en: 'Stone, domes and a golden lady' },
    promise: {
      el: 'Δύο εκκλησίες σαν δίδυμες, ένα κοινοβούλιο με γυάλινο καπέλο και 285 σκαλιά ως τη Χρυσή Έλσα.',
      en: 'Two churches like twins, a parliament in a glass hat and 285 steps up to Golden Elsie.',
    },
    placeIds: [
      'berlin-gendarmenmarkt',
      'berlin-reichstag',
      'berlin-victory-column',
    ],
  },
  {
    id: 'berlin-out-of-the-middle',
    cityId: 'berlin',
    emoji: '🚇',
    name: { el: 'Έξω από το κέντρο', en: 'Out of the middle' },
    promise: {
      el: 'Μια μέρα με τρένο: ένα στάδιο με ιστορία, μια σκεπαστή αγορά και ένα τείχος που ζωγράφισαν 118 άνθρωποι.',
      en: 'A day on the train: a stadium with a history, a covered market and a wall painted by 118 people.',
    },
    placeIds: [
      'berlin-olympiastadion',
      'berlin-markthalle-neun',
      'berlin-east-side-gallery',
    ],
  },
];
