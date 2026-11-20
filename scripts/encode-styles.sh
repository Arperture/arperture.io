#!/usr/bin/env bash
# Make web copies and poster images of the 15-second motion-style clips for the
# /motion gallery.
#
# Usage: scripts/encode-styles.sh <folder with the Drive clips> [site public folder]
#   e.g. scripts/encode-styles.sh \
#          ~/Library/CloudStorage/GoogleDrive-*/My\ Drive/Motion\ Graphics/15\ Sec\ Explainers\ -\ Final\ With\ Audio
#
# Source: Google Drive, "Motion Graphics/15 Sec Explainers - Final With Audio".
# Writes, for every *_15s.mp4, keeping the exact Drive file name:
#   public/media/styles/<name>.mp4          720p H.264 + AAC, faststart
#   public/media/styles/posters/<name>.jpg  frame at 3 s, 640 px wide
# Then run `node scripts/motion-styles.mjs` so the gallery picks the clips up.
#
# Tiles always play muted. The audio track is kept so the full-size viewer's
# controls can unmute it; add -an to the first ffmpeg call to strip it.
# Clips that are already encoded are skipped; delete the mp4 to redo one.
set -euo pipefail
SRC="${1:?source folder}"; PUB="${2:-$(cd "$(dirname "$0")/.." && pwd)/public}"; OUT="$PUB/media/styles"
mkdir -p "$OUT/posters"
shopt -s nullglob
for f in "$SRC"/*_15s.mp4; do
  n="$(basename "$f" .mp4)"
  if [ -s "$OUT/$n.mp4" ] && [ -s "$OUT/posters/$n.jpg" ]; then echo "-- $n (already encoded)"; continue; fi
  ffmpeg -y -loglevel error -i "$f" -vf "scale=-2:720,fps=30" \
    -c:v libx264 -preset slow -crf 27 -maxrate 1.2M -bufsize 2.4M -pix_fmt yuv420p \
    -c:a aac -b:a 96k -ac 2 -movflags +faststart "$OUT/$n.mp4"
  ffmpeg -y -loglevel error -ss 3 -i "$f" -frames:v 1 -vf "scale=640:-2" -q:v 5 "$OUT/posters/$n.jpg"
  echo "== $n  $(du -h "$OUT/$n.mp4" | cut -f1)"
done
echo "Done. Now run: node scripts/motion-styles.mjs"
