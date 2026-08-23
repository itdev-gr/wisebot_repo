# Real narration for ebooks (the kids reading)

Each page of a book can have a real recording instead of AI TTS. The reader
(`components/Ebooks.tsx` → `BookTTSPlayer`) looks for

    public/audio/ebooks/book-{id}-page-{n}-{lang}.m4a    the voice (mono AAC 48 kbps)
    public/audio/ebooks/book-{id}-page-{n}-{lang}.json   word timings for read-along

and falls back to cloud/browser TTS when a page has none. The JSON is
`{"v":1,"words":[[start,end],…]}` — one entry per word of the page text split on
whitespace (`text.split(/\s+/).filter(Boolean)`), seconds.

## From recording to page (done 23 Αυγούστου 2026 for book 1)

1. **Record** one file per page (any format; DJI mics give .m4a). If a page is
   recorded in two takes that continue each other, keep both — they get joined.
   Drop them in `~/Desktop/wisebot-voices-kids/` named `Wisebot bookN pageM.m4a`.

2. **Decode + join + compress** with macOS tools (no ffmpeg needed):
   ```bash
   afconvert -f WAVE -d LEI16@48000 -c 1 "Wisebot book1 page1.m4a" p1.wav
   # join two takes: python3 with the wave module (see align.py header), then
   afconvert -f m4af -d aac -b 48000 -q 127 -s 3 p1.wav book-1-page-1-el.m4a
   ```
   ~0.9 MB per 2-minute page.

3. **Transcribe with word timestamps** (OpenAI whisper-1, Greek):
   ```bash
   curl -s https://api.openai.com/v1/audio/transcriptions -H "Authorization: Bearer $OPENAI_API_KEY" \
     -F file=@"Wisebot book1 page1.m4a" -F model=whisper-1 -F language=el \
     -F response_format=verbose_json -F "timestamp_granularities[]=word" -o page1.json
   ```

4. **Align** transcript words to the page text with `align.py` (difflib on
   accent/punctuation-stripped tokens; unmatched words are interpolated between
   neighbours). It needs `pages.json` = array of the page texts (`text.el`), and the
   `sources` map at the bottom (file → offset in seconds when takes are joined).
   Expect 85–95 % exact matches; children skipping or re-reading a word is fine.

5. Copy the `.m4a` + `.json` into `public/audio/ebooks/`, open the book, press
   ΑΚΟΥΣΕ: the bar shows «🎙️ Διαβάζουν παιδιά», words light up, tapping a word seeks.
