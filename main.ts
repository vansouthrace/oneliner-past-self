import * as fs from "node:fs";

const entry = "Do not send that 2 a.m. email to your boss with just a few thoughts about the project.\nIt mattered because three paragraphs of tired honesty turned into a meeting you spent the next month undoing.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
