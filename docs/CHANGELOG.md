# CHANGELOG — training-assistant

Phase log, newest first.

## L1 (definitions + switching) — 2026-06-21
- **Definitions filled out** (`content/defs.js`, 12 → 67) — the full CROR Definitions section:
  equipment/movements, track & territory, control systems (CTC/OCS/ABS/interlocking),
  signals/blocks, bulletins (GBO/DOB/ECM), occupational terms, switches, and speeds. All verbatim, cited.
- **Switching rules** (`content/switching.js`, 17) — CROR 104/104.1/104.2/104.4/104.5, 105, 112,
  113.0–113.7, 114, 115. Faithful cited condensations; site-specific numbers flagged S.I./SME.
- Cross-linked (kicking ↔ 113.4/113.5 ↔ def-kicking; speeds; switch types). **126 entries, validator green.**

## L1 (signals) — 2026-06-21
- Ported the audited signal **SVG renderer** (`js/signal.js`) from cn-conductor-trainer.
- **Signals domain** (`content/signals.js`): all CROR 405–440 indications — 42 entries, 38 with
  aspect drawings. Names + meanings are CROR rulebook; drawings reproduced from a study source +
  cross-checked vs the CROR (the rulebook governs; a caption says so).
- Detail view renders the **SVG aspect** + a study-notes block.
- List got a **domain filter** (All / Definitions / Signals, with counts).
- 54 entries total; `npm run validate` green.

## L0 — scaffold + reference shell — 2026-06-21
- Repo scaffolded: docs (SPEC/HANDOFF/DECISIONS/CHANGELOG), README, MIT license, .gitignore
  (source PDFs gitignored), `package.json` (`type: module`).
- **Content schema** locked (`js/schema.js`) — the keystone every feature reads.
- **Definitions domain seeded** (`content/defs.js`) — 12 verbatim CROR definitions, each cited
  (`trust: rulebook`), sourced from the Jan 28 2025 CROR Definitions section.
- **Reference shell:** search (keyword + rule-number), list→detail, **trust + citation chips**,
  related-links, hash routing; "clean rail-ops" theme (`css/app.css`).
- **Validator** (`tools/validate.mjs`) — schema + duplicate-id + related-link lint; the content gate.
