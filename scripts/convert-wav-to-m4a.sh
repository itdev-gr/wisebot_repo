#!/bin/bash
# Convert all WAV ebook files to M4A (AAC) for massive size reduction
# WAV ~1.1GB → M4A ~60-80MB

INPUT_DIR="public/audio/ebooks"
COUNT=0
TOTAL=$(ls "$INPUT_DIR"/*.wav 2>/dev/null | wc -l | tr -d ' ')

echo "🎵 Converting $TOTAL WAV files to M4A (AAC 128kbps)..."
echo ""

for wav in "$INPUT_DIR"/*.wav; do
  [ -f "$wav" ] || continue
  m4a="${wav%.wav}.m4a"

  if [ -f "$m4a" ]; then
    COUNT=$((COUNT + 1))
    continue
  fi

  afconvert "$wav" "$m4a" -f m4af -d aac -b 128000 -q 127 2>/dev/null

  if [ $? -eq 0 ]; then
    COUNT=$((COUNT + 1))
    WAV_SIZE=$(ls -la "$wav" | awk '{printf "%.1fMB", $5/1024/1024}')
    M4A_SIZE=$(ls -la "$m4a" | awk '{printf "%.1fMB", $5/1024/1024}')
    echo "  ✅ [$COUNT/$TOTAL] $(basename "$m4a") ($WAV_SIZE → $M4A_SIZE)"
  else
    echo "  ❌ Failed: $(basename "$wav")"
  fi
done

echo ""
echo "✅ Done! Converted $COUNT/$TOTAL files"
WAV_TOTAL=$(du -sh "$INPUT_DIR"/*.wav 2>/dev/null | tail -1 | awk '{print $1}')
M4A_TOTAL=$(du -sh "$INPUT_DIR"/*.m4a 2>/dev/null | tail -1 | awk '{print $1}')
echo "   WAV total: $(du -ch "$INPUT_DIR"/*.wav | tail -1 | awk '{print $1}')"
echo "   M4A total: $(du -ch "$INPUT_DIR"/*.m4a | tail -1 | awk '{print $1}')"
