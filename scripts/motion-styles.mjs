#!/usr/bin/env node
// Keeps lib/motion-styles.json (the /motion style gallery) in step with the
// clips on disk.
//
//   node scripts/motion-styles.mjs                 mark which styles have media
//   node scripts/motion-styles.mjs path/_Index.csv also add rows that are new in
//                                                  the Drive index
//
// A style shows in the gallery only when both of these exist:
//   public/media/styles/<file>.mp4
//   public/media/styles/posters/<file>.jpg
// (make them with scripts/encode-styles.sh). New rows get a number, a name and
// a "good for" line derived from the CSV; tidy the wording in the JSON by hand.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const jsonPath = join(root, "lib/motion-styles.json");
const media = join(root, "public/media/styles");
const styles = JSON.parse(readFileSync(jsonPath, "utf8"));

const csvPath = process.argv[2];
if (csvPath) {
  const known = new Set(styles.map((s) => s.file));
  let next = Math.max(0, ...styles.map((s) => s.n)) + 1;
  const words = (s) => s.replace(/-/g, " ");
  for (const line of readFileSync(csvPath, "utf8").split(/\r?\n/).slice(1)) {
    const [file, type, style, niche] = line.replace(/\\_/g, "_").split(",").map((c) => c.trim());
    if (!file || !file.endsWith(".mp4")) continue;
    const base = file.slice(0, -4);
    if (known.has(base)) continue;
    const n = words(niche || "");
    styles.push({ n: next++, name: words(style), type, goodFor: n.charAt(0) + n.slice(1).toLowerCase(), file: base, ready: false });
    console.log(`added ${base}`);
  }
}

let ready = 0;
for (const s of styles) {
  s.ready = existsSync(join(media, `${s.file}.mp4`)) && existsSync(join(media, "posters", `${s.file}.jpg`));
  if (s.ready) ready++;
}
writeFileSync(jsonPath, JSON.stringify(styles, null, 2) + "\n");
console.log(`${ready} of ${styles.length} styles have media and will show in the gallery.`);
const missing = styles.filter((s) => !s.ready).map((s) => `  ${String(s.n).padStart(2, "0")} ${s.file}`);
if (missing.length) console.log(`Waiting on clips:\n${missing.join("\n")}`);
