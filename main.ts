import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const status = `Missing sock update: The dog ate me. Vet quoted $4,000. Tell the cashmere I've made it.`;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${status}\n`, "utf8");
