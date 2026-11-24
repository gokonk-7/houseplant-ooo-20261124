// The Houseplant Out-of-Office — make.fun entry
// Writes a single out-of-office auto-reply line (117 chars, limit 120)
// to /output/entry.txt.
//
// The line: the fern on the desk answers its own email, and the joke turns on
// the plant's own deprivation — no water since March — so the email itself
// becomes the wettest thing in its life. It opens with "Out of office:" so it
// reads unmistakably as an auto-reply, names the plant ("this is the fern"),
// and lands a surprise punch instead of a stock office phrase.
//
// Variants tested and set aside:
// - "I've outlived three managers, two startups, and one ficus. Your email
//   will be answered when I'm watered." — good escalation, but the water only
//   shows up in the punch; the plant's life doesn't drive the whole joke.
// - "Your email has been received and will be photosynthesized into
//   resentment. Expected reply: never, unless watered." — strong subversion
//   of the auto-reply form, but "your email has been received" is a stock
//   phrase and the fern line's punch is sharper.
// - "I haven't been watered since March, so I'm forwarding your email to the
//   cactus. It doesn't care either." — the cactus handoff is already the most
//   common joke in this bounty; the fern line is more original.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: this is the fern. I have not been watered since March. Your email is now the wettest thing in my life.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const chars = [...ENTRY].length;
if (chars < 1 || chars > 120) {
  throw new Error(`entry must be 1-120 characters, got ${chars}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
console.log(`wrote ${OUT_FILE} (${chars} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`);
console.log(ENTRY);
