import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const status = `Lost sock update: Inside the dog. They're spending $4,000 to get me back. Who's the good boy now?`;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), `${status}\n`, "utf8");
