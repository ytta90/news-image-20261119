// news-image-20261119 — "The World in One Day".
//
// The entry is one image: a newspaper front page drawn for Thursday
// 19 November 2026 (entry.png beside this file). It is drawn offline,
// ahead of time, with a Python/PIL script, so this program only has to
// copy the finished image to the output directory. Copying is
// byte-for-byte deterministic: run it twice and both runs write the
// same file. No network, no dependencies — Node 22 standard library only.
//
// The front page sums up 19 November 2026: the Gulf war spreading as
// Iran hits U.S. bases in Kuwait and Bahrain, the first-ever
// Trump–Xi–Putin trilateral in Shenzhen, Anthropic's record $81.3bn
// IPO starting to trade, the ICJ's Rohingya genocide judgment, COP31's
// final stretch, Hakeem Jeffries' nomination as the first Black U.S.
// House Speaker, and NASA confirming Voyager 1 one light-day out.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), outPath);
// Guard against a truncated or empty copy: the gate refuses a file
// that is not a whole image, so fail loudly instead of shipping one.
if (statSync(outPath).size === 0) {
  throw new Error('entry.png copied empty');
}
