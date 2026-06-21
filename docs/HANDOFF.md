# HANDOFF — training-assistant

_Last updated: 2026-06-21_ · **This is the working source of truth.** Read it before
building; update it the same session after any meaningful change (then bump the date).
A stale source of truth is worse than none.

## 1. Build / run
Static site, no build step.
- **Serve:** `python -m http.server 8095` → `http://localhost:8095` (press `/` to search).
- **Validate content:** `npm run validate` (= `node tools/validate.mjs`). Must exit 0 before committing content.
- Workflow: **one working copy on `main`, no branches** (solo, fast). Big rewrites expected.

## 2. Where things live
- `js/schema.js` — the entry shape (the keystone). Don't change lightly; everything depends on it.
- `content/index.js` — registry. **Add a domain** by writing `content/<domain>.js` and spreading it here.
- `content/defs.js` — seeded definitions (verbatim CROR, cited).
- `js/{data,search,reference,router,main}.js` — the reference core.
- `tools/validate.mjs` — the correctness gate.
- `sources/` — CROR + reference PDFs, **gitignored**, local only.
- Full design + roadmap: `docs/SPEC.md`.

## 3. Status
**L0 done:** schema, validator, defs domain (12 CROR definitions), reference shell
(search + list→detail + trust/citation chips + related-links, hash routing), rail-ops theme.

**L1 mostly done — signals + full definitions + switching:**
- **Signals** (`content/signals.js`) — all CROR 405–440 indications (42, 38 drawn) + the SVG
  renderer (`js/signal.js`); detail renders the aspect + study notes.
- **Definitions** (`content/defs.js`) — full CROR Definitions section: equipment/movements,
  track & territory, control systems, signals/blocks, bulletins, occupational terms, switches,
  and speeds (67 entries, all verbatim + cited).
- **Switching** (`content/switching.js`) — CROR 104 / 104.1 / 104.2 / 104.4 / 104.5 / 105 /
  112 / 113.0–113.7 / 114 / 115 (17 entries, faithful cited condensations; GP specifics flagged
  as S.I./SME, not invented).
- Detail view renders SVG aspects + study notes + SME notes; list has a **domain filter**.
- **126 entries, validator green.** Sourced from the Jan 2025 CROR PDF + the audited cn-conductor-trainer.

## 4. Roadmap (next)
- **Optional L1 extra — operating rules:** a few core operating/communication rules (hand
  signals, radio/communication, Rule 41 end-of-track) if wanted → `content/operating.js`.
- **L2 — drills (derived):** generate recall / multiple-choice / signal-aspect questions from
  the entries; pick a domain/tag to quiz. The content's ready for it.
- Then L3 progress/gaps · L4 adaptive study-next + recert mode · L5 polish.
- **L2** drills (derived) · **L3** progress/gaps · **L4** adaptive "study next" + recert prep ·
  **L5** polish (PWA, cheat-sheets, switch-list link, Observatory spoke).

## 5. Content discipline
- **Never from memory.** Source from `sources/Jan_2025_Canadian_rail_operating_rules_EN.pdf`
  (`pdftotext`/`pymupdf` available) or confirm with Kourtney; set `trust` accordingly.
- The audited citations in `C:\projects\CN Conductor Trainer` are the seed bank — re-house
  that verified work; don't re-derive it.
- Run `npm run validate` after any content edit.

## 6. Deploy
Not yet deployed. When ready: GitHub Pages (like switch-list) + an Observatory portfolio
card (entry already drafted in `jordan-doerksen.github.io/data/projects.json`).
