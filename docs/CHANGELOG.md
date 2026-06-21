# CHANGELOG — training-assistant

Phase log, newest first.

## L2 (derived drills) — 2026-06-21
- **Drills layer** (`js/drills.js`) — quiz questions generated straight from the same
  `ENTRIES` (single source, zero duplicate content). Three formats:
  **flashcard recall** (self-graded "Got it / Missed it"), **multiple choice** (stem = the
  meaning/body, 3 distractors pulled from sibling entries in the same domain, auto-graded),
  and **rule-number match** (given "CROR 122", pick the rule; auto-graded, skipped for
  defs that have no rule number).
- **Session scoping:** pick formats + domain + a tag + length (10 / 20 / All). A running
  progress bar + score, an answer-marking state (correct green / wrong red), an "Open this
  entry →" link on every answered question, and a results screen that lists exactly what to
  review (each linking to its cited entry) with Run-again / New-quiz.
- New **Reference / Drills** nav in the top bar (`#/drills` route); on mobile the search box
  drops to its own full-width row so the nav no longer crowds it.
- No new dependencies, no build step; verified end-to-end in the preview.

## L1 (operating + comms) — 2026-06-21
- **Operating domain** (`content/operating.js`, 23) — signal-handling & comms rules:
  hand signals (12), bell/whistle (13/14), headlight (17), blue-signal protection (26),
  signal imperfectly displayed (27), speed compliance (33), fixed-signal recognition (34),
  emergency protection (35), decreased flagging distance (36), track-work protection (41),
  crew responsibilities/precautions (106/108/109/110), and the full radio block —
  content (122), repeat-back verification (123), radio-or-hand (123.1), switching by radio
  (123.2), emergency comms (125), restricted use (126), understanding & transfer (142/147).
- Faithful cited condensations of the operative clauses; cross-linked to defs & switching
  (e.g. blue-flag ↔ 113.5, switching-by-radio ↔ hand signals, Rule 41 ↔ foreman/cautionary limits).
- New domain filter chip **Operating 23**. **149 entries, validator green.**

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
