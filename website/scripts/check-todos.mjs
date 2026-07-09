/**
 * Lists every fact the college has not supplied yet.
 * Reads src/config/site.ts as text so it runs without a TS toolchain.
 */
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/config/site.ts', import.meta.url), 'utf8');

// Skip the TODO() helper definition itself; only match call sites.
const calls = [...src.matchAll(/TODO\(\s*'([^']+)'\s*\)/g)].map((m) => m[1]);

if (calls.length === 0) {
  console.log('\n✅ No TODOs. Every fact is filled. Site is launch-ready.\n');
  process.exit(0);
}

console.log(`\n❌ ${calls.length} fact(s) still needed from the college:\n`);
for (const c of calls) console.log(`   • ${c}`);
console.log('\nSee docs/06-PRIORITY-ANSWERS.md\n');
process.exit(1);
