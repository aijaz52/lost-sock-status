import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const status = `Status: Lost sock in the octopus tank. Eight arms, no match. I expected more from a creature with options.`;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), `${status}\n`, "utf8");
