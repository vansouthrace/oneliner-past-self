import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines to Your Past Self: a warning about one specific moment, and why it mattered.
const entry = [
  "Past me: never deploy on Friday at 4:58 PM just because the tests are green.",
  "That one deploy cost me the whole weekend, my sleep, and my faith in the color green.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
