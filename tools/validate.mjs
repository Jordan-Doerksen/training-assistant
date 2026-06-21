// ==========================================================================
// VALIDATE — schema + citation lint for all content. Imports the SAME files the
// app uses (zero divergence). Run: `node tools/validate.mjs` (or `npm run validate`).
// Fails (exit 1) on: schema errors, duplicate ids, or related links that don't
// resolve. This is the correctness gate — a wrong/uncited entry never ships.
// ==========================================================================

import { ENTRIES } from '../content/index.js';
import { validateEntry } from '../js/schema.js';

let fails = 0;
const ids = new Set();

for (const e of ENTRIES) {
  const errs = validateEntry(e);
  if (ids.has(e.id)) errs.push(`duplicate id "${e.id}"`);
  ids.add(e.id);
  if (errs.length) { fails += errs.length; console.error(`  x ${e.id || '(no id)'}: ${errs.join('; ')}`); }
}
for (const e of ENTRIES) for (const r of (e.related || [])) {
  if (!ids.has(r)) { fails += 1; console.error(`  x ${e.id}: related "${r}" not found`); }
}

if (fails) { console.error(`\nFAIL - ${fails} problem(s) across ${ENTRIES.length} entries.`); process.exit(1); }
console.log(`OK - ${ENTRIES.length} entries valid; citations present; related links resolve.`);
