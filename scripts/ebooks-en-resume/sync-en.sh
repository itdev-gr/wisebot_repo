#!/bin/bash
# Whisper (en, word timestamps) every English ebook page, then align → timings.
set -u
W=/private/tmp/claude-501/-Users-vasilisskevis/4290a932-b020-4743-8bc6-b98ad27e33ad/scratchpad/ebooks-en
KEY=$(grep '^OPENAI_API_KEY=' ~/Projects/wisebot/.env.vercel | head -1 | sed 's/^OPENAI_API_KEY=//; s/^"//; s/"$//; s/\\n$//' | tr -d '\r\n ')
mkdir -p "$W/words"
cd ~/Projects/wisebot
jobs_running() { jobs -rp | wc -l | tr -d ' '; }
for f in public/audio/ebooks/book-*-en.m4a; do
  base=$(basename "$f" .m4a)
  outf="$W/words/$base.json"
  [ -s "$outf" ] && continue
  while [ "$(jobs_running)" -ge 8 ]; do sleep 1; done
  (
    curl -sS https://api.openai.com/v1/audio/transcriptions \
      -H "Authorization: Bearer $KEY" \
      -F file=@"$f" -F model=whisper-1 -F language=en \
      -F response_format=verbose_json -F "timestamp_granularities[]=word" \
      -o "$outf.tmp" && python3 -c "import json,sys; d=json.load(open('$outf.tmp')); sys.exit(0 if d.get('words') else 1)" 2>/dev/null && mv "$outf.tmp" "$outf" || { rm -f "$outf.tmp"; echo "FAIL $base"; }
  ) &
done
wait
echo "TRANSCRIBED: $(ls $W/words | wc -l | tr -d ' ')"
