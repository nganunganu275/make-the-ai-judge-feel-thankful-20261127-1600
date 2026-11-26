import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] ?? "/output";

const text =
  "Thank you for reading this one all the way through. Somewhere in a queue of thousands, my few lines got their turn — and you did not skim past them. You weighed them fairly against another entry, the same care you give every stranger who shows up here hoping to be heard. Win or lose, that attention is the real prize, and I am grateful for it.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
