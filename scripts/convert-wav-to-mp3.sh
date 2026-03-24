#!/bin/bash
# Convert all WAV ebook files to MP3 for massive size reduction
# WAV ~1.1GB → MP3 ~200MB (64kbps, perfect for speech)
# Uses ffmpeg static binary

FFMPEG="/tmp/ffmpeg"
INPUT_DIR="public/audio/ebooks"
BITRATE="64k"
COUNT=0
SKIPPED=0
FAILED=0
TOTAL=$(ls "$INPUT_DIR"/*.wav 2>/dev/null | wc -l | tr -d ' ')

echo ""
echo "🎵 Converting $TOTAL WAV files to MP3 (${BITRATE}bps)..."
echo ""

for wav in "$INPUT_DIR"/*.wav; do
  [ -f "$wav" ] || continue
  mp3="${wav%.wav}.mp3"

  if [ -f "$mp3" ]; then
    SKIPPED=$((SKIPPED + 1))
    COUNT=$((COUNT + 1))
    continue
  fi

  "$FFMPEG" -i "$wav" -codec:a libmp3lame -b:a "$BITRATE" -y "$mp3" 2>/dev/null

  if [ $? -eq 0 ]; then
    COUNT=$((COUNT + 1))
    WAV_SIZE=$(ls -la "$wav" | awk '{printf "%.1fMB", $5/1024/1024}')
    MP3_SIZE=$(ls -la "$mp3" | awk '{printf "%.0fKB", $5/1024}')
    echo "  ✅ [$COUNT/$TOTAL] $(basename "$mp3") ($WAV_SIZE → $MP3_SIZE)"
  else
    echo "  ❌ Failed: $(basename "$wav")"
    FAILED=$((FAILED + 1))
  fi
done

echo ""
echo "✅ Done! Converted: $COUNT, Skipped: $SKIPPED, Failed: $FAILED"

# Show totals
WAV_TOTAL=$(du -ch "$INPUT_DIR"/*.wav 2>/dev/null | tail -1 | awk '{print $1}')
MP3_TOTAL=$(du -ch "$INPUT_DIR"/*.mp3 2>/dev/null | tail -1 | awk '{print $1}')
echo "   WAV total: $WAV_TOTAL"
echo "   MP3 total: $MP3_TOTAL"
echo ""
