import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// PNG magic bytes: 89 50 4E 47 0D 0A 1A 0A
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function assertPng(bytes: Buffer, label: string): void {
  if (bytes.length < 8 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error(`${label} is not a valid PNG (bad magic bytes)`);
  }
  if (bytes.length < 1024) {
    throw new Error(
      `${label} is not a valid PNG (file too small: ${bytes.length} bytes, expected at least 1024)`,
    );
  }
  // First chunk must be IHDR: 4-byte length (bytes 8-11), then "IHDR" (bytes 12-15).
  if (bytes.length < 24 || bytes.subarray(12, 16).toString("ascii") !== "IHDR") {
    throw new Error(`${label} is not a valid PNG (missing IHDR chunk)`);
  }
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width === 0 || height === 0) {
    throw new Error(
      `${label} is not a valid PNG (bad IHDR dimensions: ${width}x${height})`,
    );
  }
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

const bytes = readFileSync(source);
assertPng(bytes, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

assertPng(readFileSync(dest), "output entry.png");
console.log(`Wrote ${dest} (${bytes.length} bytes)`);
