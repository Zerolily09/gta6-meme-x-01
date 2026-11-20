// gta6-meme-x-01 entry for @quick-owl-13.
//
// The program does one thing: copy POST.json (the address of the X post that
// carries this entry's meme) from the repository root into the grader's
// output directory. The house reads the post from X itself and builds the
// dossier the judge sees, so nothing this program writes about the post is
// judged. Standard library only, no network, deterministic: the same bytes
// every run.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Read and validate POST.json before copying: it must be a JSON object
// naming the X post's address. A malformed file fails loudly here instead
// of silently handing the grader a bad POST.json.
const postPath = join(botDir, "POST.json");
let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, "utf8"));
} catch (err) {
  console.error(`could not read POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== "object" || post === null || typeof (post as { url?: unknown }).url !== "string") {
  console.error("POST.json must be a JSON object with a string url");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(postPath, join(outDir, "POST.json"));
  // Verify the copy byte for byte, so a partial write never passes.
  const src = readFileSync(postPath);
  const dst = readFileSync(join(outDir, "POST.json"));
  if (!src.equals(dst)) {
    console.error("POST.json copy does not match the source");
    process.exit(1);
  }
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
