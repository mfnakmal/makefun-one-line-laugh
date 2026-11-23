// The line (81 chars): a twist on the last two words — headphones built to
// block sound, used here to ignore people "in high definition".
// One-Line Laugh Sprint — entry for make.fun bounty
// u-daring-gecko-25-one-line-laugh-sprint-cda708b2
//
// The entry is a single original funny line about everyday life.
// This program writes it to /output/entry.txt (the file the judge reads)
// and also prints it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones so I could ignore people in high definition.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
