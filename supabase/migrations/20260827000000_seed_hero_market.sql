-- Seed the Hero Market with the founder's children's own creations.
-- =================================================================
-- These 20 characters were genuinely made by Filippos, Alexandra and Eleftheria
-- in the Hero Factory — the same three children whose voices narrate the ebooks
-- and whose school days became the stories. Until now they sat unused in
-- public/images/ under pseudonyms; this credits them by name so other children
-- see real work by real kids and get ideas of their own.
--
-- The images are already served from wisebot.gr/images/, so nothing is uploaded
-- to the market bucket. Listings are inserted 'approved' because the admin
-- review they exist for has happened: every image was reviewed for the 6-12
-- audience before this migration was written.
--
-- Six further images are deliberately NOT seeded here, pending the owner's call:
--   weapon-forward  — WiseBot_Hero_kefala, _sniki, _sniki-2, _let_
--   render defects  — WiseBot_Hero_igu (garbled equation), _pirc (broken wings)
--
-- seller_id is the family account (market_listings.seller_id → profiles.id, NOT
-- NULL); seller_name carries the individual child, which is what other children
-- see. Re-running is safe: the WHERE NOT EXISTS guard keeps it idempotent.

insert into public.market_listings (seller_id, seller_name, type, title, image_url, price, status, reviewed_at)
select p.id, v.seller_name, 'image', v.title, v.image_url, 3, 'approved', now()
from public.profiles p
cross join (values
  ('Φίλιππος',   'Λέο ο Φλογερός',      'https://wisebot.gr/images/WiseBot_Hero_Leo.webp'),
  ('Φίλιππος',   'Καθηγητής Μάριο',     'https://wisebot.gr/images/WiseBot_Hero_Mario.webp'),
  ('Φίλιππος',   'Κάγκου',              'https://wisebot.gr/images/WiseBot_Hero_kagu.webp'),
  ('Φίλιππος',   'Μαϊμουδάκι Πιλότος',  'https://wisebot.gr/images/WiseBot_Hero_monkey.webp'),
  ('Φίλιππος',   'Ράκος',               'https://wisebot.gr/images/WiseBot_Hero_rakos_.webp'),
  ('Φίλιππος',   'Σπαρκ',               'https://wisebot.gr/images/WiseBot_Hero_spark.webp'),
  ('Φίλιππος',   'Πάικ',                'https://wisebot.gr/images/WiseBot_Hero_pike.webp'),
  ('Αλεξάνδρα',  'Έλος ο Μάγος',        'https://wisebot.gr/images/WiseBot_Hero_elos.webp'),
  ('Αλεξάνδρα',  'Λίον Κουίν',          'https://wisebot.gr/images/WiseBot_Hero_lion_quin.webp'),
  ('Αλεξάνδρα',  'Ρούμπι',              'https://wisebot.gr/images/WiseBot_Hero_rubi.webp'),
  ('Αλεξάνδρα',  'Σκουίζ ο Μάγος',      'https://wisebot.gr/images/WiseBot_Hero_skuiz.webp'),
  ('Αλεξάνδρα',  'Σοφό Φιδάκι',         'https://wisebot.gr/images/WiseBot_Hero_snake.webp'),
  ('Αλεξάνδρα',  'Κοχύλι',              'https://wisebot.gr/images/WiseBot_Hero_koxil.webp'),
  ('Αλεξάνδρα',  'Τίγρης Καλλιτέχνης',  'https://wisebot.gr/images/WiseBot_Hero_tiger.webp'),
  ('Ελευθερία',  'Μονκ',                'https://wisebot.gr/images/WiseBot_Hero_monk.webp'),
  ('Ελευθερία',  'Μούρι',               'https://wisebot.gr/images/WiseBot_Hero_muri.webp'),
  ('Ελευθερία',  'Όκτα',                'https://wisebot.gr/images/WiseBot_Hero_octa.webp'),
  ('Ελευθερία',  'Όρι της Ζούγκλας',    'https://wisebot.gr/images/WiseBot_Hero_ori.webp'),
  ('Ελευθερία',  'Έρικ ο Εφευρέτης',    'https://wisebot.gr/images/WiseBot_Hero_%CE%B5%CF%81%CE%B9%CE%BA.webp'),
  ('Ελευθερία',  'Καμίλ',               'https://wisebot.gr/images/WiseBot_Hero_%CE%BA%CE%B1%CE%BC%CE%B9%CE%BB.webp')
) as v(seller_name, title, image_url)
where p.parent_email = 'vskevis@itdev.gr'
  and not exists (
    select 1 from public.market_listings ml where ml.image_url = v.image_url
  );
