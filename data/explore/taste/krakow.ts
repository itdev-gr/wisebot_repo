/**
 * WiseBot Explorer · Γεύσεις της Κρακοβίας / A taste of Kraków
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Nothing here is
 * adults-only — every card can be ticked by the kids.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'obwarzanek', emoji: '🥨', kind: 'snack', brave: 1,
    name: { el: 'Ομπβαζάνεκ (Obwarzanek krakowski)', en: 'Obwarzanek krakowski' },
    what: { el: 'Ένα στριφτό κουλούρι-δαχτυλίδι, πλεγμένο από δύο ή τρεις λωρίδες ζύμης που πρώτα βράζονται και μετά ψήνονται. Απ’ έξω γυαλιστερό και τραγανό, μέσα μαλακό, με αλάτι, σουσάμι ή παπαρουνόσπορο από πάνω.', en: 'A twisted bread ring, braided from two or three strands of dough that are boiled first and then baked. Shiny and crisp outside, soft inside, topped with salt, sesame or poppy seeds.' },
    kidTip: { el: 'Αγόρασέ το το πρωί, όσο είναι φρέσκο — ως το βράδυ σκληραίνει. Στο καροτσάκι πες «Poproszę z sezamem» (πο-πρό-σε ζ σε-ζά-μεμ) για σουσάμι, και «Dziękuję» (τζιεν-κού-γιε) για ευχαριστώ.', en: 'Buy it in the morning while it is fresh — by evening it goes hard. At the cart say “Poproszę z sezamem” (po-PRO-sheh z seh-ZAH-mem) for sesame, and “Dziękuję” (jen-KOO-yeh) for thank you.' },
    funFact: { el: 'Το όνομά του είναι προστατευμένο στην Ευρωπαϊκή Ένωση από το 2010: «obwarzanek krakowski» λέγεται μόνο όποιο ψήνεται στην Κρακοβία και στη γύρω περιοχή. Η παλιότερη γραπτή αναφορά του είναι από το 1394, στα λογιστικά βιβλία της αυλής της βασίλισσας Γιαντβίγκα.', en: 'Its name has been protected in the European Union since 2010: only a ring baked in Kraków and the area around it may be called “obwarzanek krakowski”. The oldest written mention is from 1394, in the account books of Queen Jadwiga’s court.' },
    where: { el: 'Στα μπλε καροτσάκια σε κάθε γωνιά της παλιάς πόλης, από νωρίς το πρωί.', en: 'From the blue carts on nearly every corner of the old town, from early morning.' },
  },
  {
    id: 'pierogi', emoji: '🥟', kind: 'dish', brave: 1,
    name: { el: 'Πιερόγκι (Pierogi)', en: 'Pierogi' },
    what: { el: 'Μισοφέγγαρα από ζύμη με γέμιση μέσα, βρασμένα ή ελαφρά τηγανισμένα. Τα «ruskie» έχουν πατάτα και άσπρο τυρί, και το καλοκαίρι υπάρχουν γλυκά, με φράουλες ή μύρτιλλα, με κρέμα και ζάχαρη από πάνω.', en: 'Half-moons of dough with a filling inside, boiled or lightly fried. The “ruskie” kind has potato and white cheese, and in summer there are sweet ones with strawberries or blueberries, topped with cream and sugar.' },
    kidTip: { el: 'Παράγγειλε «pierogi ruskie» (πιε-ρό-γκι ρού-σκιε) για την πιο απαλή γεύση, ή «z truskawkami» (ζ τρου-σκάφ-κα-μι) για φράουλες. Μια μερίδα έχει 8–10 κομμάτια — φτάνει για δύο.', en: 'Order “pierogi ruskie” (pye-RO-ghee ROO-skyeh) for the mildest taste, or “z truskawkami” (z troos-KAHF-kah-mee) for strawberries. A plate has 8–10 pieces — enough for two.' },
    funFact: { el: 'Τα «ruskie» δεν είναι «ρωσικά»: το όνομα έρχεται από την Ερυθρά Ρουθηνία (Ruś Czerwona), μια παλιά περιοχή γύρω από τη σημερινή πόλη Λβιβ της Ουκρανίας, που για αιώνες ανήκε στην Πολωνία — από εκεί ήρθε η γέμιση με πατάτα και τυρί.', en: 'The “ruskie” kind is not “Russian”: the name comes from Red Ruthenia (Ruś Czerwona), an old region around today’s Lviv in Ukraine that belonged to Poland for centuries — that is where the potato-and-cheese filling came from.' },
    where: { el: 'Σε κάθε ταβέρνα και σε μικρά μαγαζάκια που φτιάχνουν μόνο πιερόγκι (pierogarnia), όπου τα βλέπεις να πλάθονται στο χέρι.', en: 'In any tavern, and in little shops that make nothing but pierogi (pierogarnia), where you can watch them being folded by hand.' },
  },
  {
    id: 'zurek', emoji: '🍲', kind: 'dish', brave: 2,
    name: { el: 'Ζούρεκ (Żurek)', en: 'Żurek' },
    what: { el: 'Μια κρεμώδης, λίγο ξινή σούπα από αλεύρι σίκαλης, με κομμάτια άσπρου λουκάνικου και μισό βραστό αυγό μέσα. Καμιά φορά σερβίρεται μέσα σε ένα στρογγυλό ψωμί αντί για πιάτο!', en: 'A creamy, slightly sour soup made from rye flour, with pieces of white sausage and half a boiled egg inside. Sometimes it comes served inside a round loaf of bread instead of a bowl!' },
    kidTip: { el: 'Ζήτα το «w chlebie» (φ χλέ-μπιε), δηλαδή «μέσα στο ψωμί»: όταν τελειώσεις τη σούπα, τρως και το πιάτο. Αν η ξινίλα σού φαίνεται πολλή στην αρχή, βούτα λίγο ψωμί μέσα.', en: 'Ask for it “w chlebie” (f HLEH-byeh), meaning “in bread”: when the soup is finished, you eat the bowl. If the sourness is too much at first, dip some bread in.' },
    funFact: { el: 'Η ξινή γεύση δεν έρχεται από λεμόνι αλλά από το «zakwas»: αλεύρι σίκαλης και νερό που μένουν μερικές μέρες να ξινίσουν, ακριβώς όπως το προζύμι του ψωμιού. Είναι η παραδοσιακή σούπα του πασχαλινού πρωινού σε όλη την Πολωνία.', en: 'The sour taste does not come from lemon but from “zakwas”: rye flour and water left to ferment for a few days, just like a sourdough starter. It is the traditional soup of Easter breakfast all over Poland.' },
    where: { el: 'Σε ταβέρνες και στα παλιομοδίτικα «γαλακτομπάρ» (bar mleczny), τα φτηνά λαϊκά εστιατόρια της Πολωνίας, συνήθως ως πρώτο πιάτο.', en: 'In taverns and in the old-style “milk bars” (bar mleczny), Poland’s cheap canteen-style restaurants, usually as a starter.' },
  },
  {
    id: 'zapiekanka', emoji: '🥖', kind: 'snack', brave: 1,
    name: { el: 'Ζαπιεκάνκα (Zapiekanka)', en: 'Zapiekanka' },
    what: { el: 'Μισή μπαγκέτα, μακριά όσο το μπράτσο σου, ψημένη με μανιτάρια και λιωμένο τυρί από πάνω και μια γραμμή κέτσαπ στο τέλος. Σαν πίτσα πάνω σε ψωμί, που τρώγεται περπατώντας.', en: 'Half a baguette, as long as your forearm, toasted with mushrooms and melted cheese on top and a line of ketchup to finish. Like a pizza on bread that you eat while walking.' },
    kidTip: { el: 'Η κλασική είναι «z pieczarkami i serem» (ζ πιε-τσάρ-κα-μι ι σέ-ρεμ): μανιτάρια και τυρί. Πες «bez cebuli» (μπεζ τσε-μπού-λι) αν δεν θες κρεμμύδι. Μία φτάνει άνετα για δύο παιδιά.', en: 'The classic is “z pieczarkami i serem” (z pyeh-CHAR-kah-mee ee SEH-rem): mushrooms and cheese. Say “bez cebuli” (bez tseh-BOO-lee) if you do not want onion. One is easily enough for two kids.' },
    funFact: { el: 'Γεννήθηκε στα τέλη της δεκαετίας του 1970, όταν στην κομμουνιστική Πολωνία επιτρεπόταν να ανοίξουν μόνο μικροσκοπικά ιδιωτικά μαγαζάκια φαγητού: ψωμί, μανιτάρια και τυρί ήταν ό,τι έβρισκε κανείς εύκολα, κι έτσι έγινε το πιο αγαπημένο φαγητό του δρόμου σε όλη τη χώρα.', en: 'It was born in the late 1970s, when only tiny private snack stands were allowed to open in communist Poland: bread, mushrooms and cheese were what you could easily get, and so it became the country’s favourite street food.' },
    where: { el: 'Από τα παραθυράκια της στρογγυλής αγοράς στην πλατεία Plac Nowy, στη γειτονιά Kazimierz, και σε μικρά σνακ-μπαρ.', en: 'From the little windows of the round market hall on Plac Nowy, in the Kazimierz district, and at small snack bars.' },
  },
  {
    id: 'oscypek', emoji: '🧀', kind: 'snack', brave: 2,
    name: { el: 'Οστσίπεκ (Oscypek)', en: 'Oscypek' },
    what: { el: 'Ένα μικρό καπνιστό τυρί από πρόβειο γάλα, σε σχήμα αδραχτιού, με σκαλιστά σχέδια στην κρούστα του. Στην Κρακοβία το ψήνουν στη σχάρα και το σερβίρουν ζεστό με μαρμελάδα κράνμπερι: αλμυρό, καπνιστό και γλυκό μαζί.', en: 'A small smoked sheep’s-milk cheese, shaped like a spindle, with carved patterns on its crust. In Kraków it is grilled and served warm with cranberry jam: salty, smoky and sweet all at once.' },
    kidTip: { el: 'Ζήτα το «z żurawiną» (ζ ζου-ρα-βί-νο), με κράνμπερι: η γλυκιά μαρμελάδα μαλακώνει το καπνιστό. Κοίτα τα σχέδια πάνω του — τυπώνονται με ξύλινα καλούπια, και το καθένα είναι διαφορετικό.', en: 'Ask for it “z żurawiną” (z zhoo-rah-VEE-noh), with cranberry: the sweet jam softens the smokiness. Look at the patterns on it — they are pressed with wooden moulds, and each one is different.' },
    funFact: { el: 'Το φτιάχνουν οι βοσκοί των βουνών Τάτρα σε ξύλινες καλύβες, και από το 2008 το όνομά του είναι προστατευμένο στην Ευρωπαϊκή Ένωση: αληθινό oscypek γίνεται μόνο από τον Μάιο ως τον Σεπτέμβριο, όταν τα πρόβατα βόσκουν στα ορεινά λιβάδια.', en: 'It is made by the shepherds of the Tatra mountains in wooden huts, and since 2008 its name has been protected in the European Union: real oscypek can only be made from May to September, when the sheep graze in the high meadows.' },
    where: { el: 'Σε πάγκους στη Μεγάλη Πλατεία (Rynek Główny) και στις χριστουγεννιάτικες και πασχαλινές αγορές — τον μυρίζεις από τον καπνό της σχάρας.', en: 'At stalls on the Main Square (Rynek Główny) and at the Christmas and Easter markets — you find it by the smell of the grill.' },
  },
  {
    id: 'paczki', emoji: '🍩', kind: 'sweet', brave: 1,
    name: { el: 'Πόντσκι (Pączki)', en: 'Pączki' },
    what: { el: 'Αφράτα ντόνατ χωρίς τρύπα, τηγανισμένα μέχρι να γίνουν χρυσαφένια, γεμιστά με μαρμελάδα και σκεπασμένα με γλάσο ή ζάχαρη άχνη. Η παραδοσιακή γέμιση είναι μαρμελάδα από πέταλα τριαντάφυλλου!', en: 'Fluffy doughnuts with no hole, fried until golden, filled with jam and covered in icing or powdered sugar. The traditional filling is rose-petal jam!' },
    kidTip: { el: 'Ζήτα «z różą» (ζ ρού-ζο) για τριαντάφυλλο ή «z marmoladą» (ζ μαρ-μο-λά-ντο) για απλή μαρμελάδα. Το γλάσο έχει συχνά μικρά κομματάκια ζαχαρωμένης φλούδας πορτοκαλιού — δεν είναι λάθος, είναι η συνταγή.', en: 'Ask for “z różą” (z ROO-zhoh) for rose or “z marmoladą” (z mar-mo-LAH-doh) for plain jam. The icing often has tiny bits of candied orange peel — that is not a mistake, it is the recipe.' },
    funFact: { el: 'Την τελευταία Πέμπτη πριν από τη Σαρακοστή, την «Παχιά Πέμπτη» (Tłusty Czwartek), όλη η Πολωνία τρώει πόντσκι και οι ουρές έξω από τα ζαχαροπλαστεία φτάνουν ως τον δρόμο. Λέγεται ότι όποιος δεν φάει ούτε ένα εκείνη τη μέρα θα έχει γρουσουζιά όλο τον χρόνο.', en: 'On the last Thursday before Lent, “Fat Thursday” (Tłusty Czwartek), the whole of Poland eats pączki and the queues outside bakeries stretch into the street. The story goes that anyone who does not eat at least one that day will have bad luck all year.' },
    where: { el: 'Σε κάθε ζαχαροπλαστείο (cukiernia) και φούρνο (piekarnia) — καλύτερα νωρίς το πρωί, όσο είναι ακόμα ζεστά.', en: 'In every pastry shop (cukiernia) and bakery (piekarnia) — best early in the morning, while they are still warm.' },
  },
  {
    id: 'kremowka', emoji: '🍰', kind: 'sweet', brave: 1,
    name: { el: 'Κρεμούφκα (Kremówka)', en: 'Kremówka' },
    what: { el: 'Ένα ψηλό, τετράγωνο κομμάτι γλυκού: δύο φύλλα τραγανής σφολιάτας και ανάμεσά τους ένα παχύ στρώμα κρέμας βανίλιας, με ζάχαρη άχνη από πάνω. Μαλακό, δροσερό και πολύ κρεμώδες.', en: 'A tall square slice of cake: two sheets of crisp puff pastry with a thick layer of vanilla cream in between, dusted with powdered sugar. Soft, cool and very creamy.' },
    kidTip: { el: 'Τρώγεται με πιρούνι, όχι με το χέρι — η κρέμα ξεφεύγει από τα πλάγια. Σε άλλες πόλεις της Πολωνίας θα το δεις ως «napoleonka». Προφέρεται «κρε-ΜΟΥΦ-κα».', en: 'Eat it with a fork, not your fingers — the cream escapes from the sides. In other Polish cities you may see it called “napoleonka”. Say it “kre-MOOF-ka”.' },
    funFact: { el: 'Η «παπική» φήμη της είναι αληθινή ιστορία: τον Ιούνιο του 1999 ο Πάπας Ιωάννης Παύλος Β΄ επισκέφθηκε το Βαντοβίτσε, την πόλη όπου γεννήθηκε, και είπε στο πλήθος πως μετά τις απολυτήριες εξετάσεις του σχολείου πήγαινε με τους φίλους του για κρεμούφκες. Από τότε η πόλη πουλάει «papieska kremówka» — το γλυκό όμως υπήρχε σε όλη την Πολωνία πολύ πριν.', en: 'Its “papal” fame is a true story: in June 1999 Pope John Paul II visited Wadowice, the town where he was born, and told the crowd that after his school-leaving exams he and his friends used to go for kremówki. Ever since, the town sells “papieska kremówka” — though the cake existed all over Poland long before.' },
    where: { el: 'Σε κάθε ζαχαροπλαστείο (cukiernia) της Κρακοβίας — και στα καφέ γύρω από την κεντρική πλατεία του Βαντοβίτσε, μία ώρα από την πόλη.', en: 'In any pastry shop (cukiernia) in Kraków — and in the cafés around the main square of Wadowice, an hour from the city.' },
  },
  {
    id: 'golabki', emoji: '🥬', kind: 'dish', brave: 2,
    name: { el: 'Γκοουόμπκι (Gołąbki)', en: 'Gołąbki' },
    what: { el: 'Φύλλα λάχανου τυλιγμένα γύρω από κιμά και ρύζι, σιγομαγειρεμένα και σερβιρισμένα με σάλτσα ντομάτας. Μοιάζουν πολύ με τους δικούς μας λαχανοντολμάδες, αλλά είναι μεγαλύτερα και πιο κόκκινα.', en: 'Cabbage leaves wrapped around minced meat and rice, slowly cooked and served with tomato sauce. They look a lot like Greek stuffed cabbage leaves, only bigger and redder.' },
    kidTip: { el: 'Απαλή γεύση, χωρίς καθόλου καυτερό: αν σου αρέσουν οι ντολμάδες, θα σου αρέσουν κι αυτά. Ένα ή δύο φτάνουν — το καθένα είναι μεγάλο σαν γροθιά.', en: 'Mild and not at all spicy: if you like dolmades, you will like these. One or two is plenty — each is as big as your fist.' },
    funFact: { el: 'Το όνομα σημαίνει «περιστεράκια» (gołąb = περιστέρι), αλλά μέσα δεν έχει κανένα πουλί — μάλλον πήραν το όνομα από το σχήμα τους. Λέγεται ότι ο βασιλιάς Καζίμιρ Δ΄ τάισε τον στρατό του με γκοουόμπκι πριν από μια μεγάλη μάχη το 1465, και γι’ αυτό νίκησε.', en: 'The name means “little pigeons” (gołąb = pigeon), but there is no bird inside — most likely they were named for their shape. The story goes that King Casimir IV fed his army gołąbki before a big battle in 1465, and that is why he won.' },
    where: { el: 'Σε ταβέρνες με σπιτικό φαγητό και στα «γαλακτομπάρ» (bar mleczny), όπου το πιάτο της ημέρας γράφεται με κιμωλία σε έναν πίνακα.', en: 'In taverns with home-style cooking and in the “milk bars” (bar mleczny), where the dish of the day is chalked on a board.' },
  },
];
