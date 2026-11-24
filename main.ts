// Funniest Time Machine Warning Label — entry program.
// Writes one warning label line (<=120 chars) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: If you meet yourself, do not lend yourself money. You already know how this ends.";

const MAX_CHARS = 120;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify: the file must hold exactly the gated line, nothing else.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt does not match the gated line");
}
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
