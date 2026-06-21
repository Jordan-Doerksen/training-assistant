# HANDOFF — training-assistant

_Last updated: 2026-06-21 (in-app Guide + tour)_ · **This is the working source of truth.** Read it before
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

**L1 done — signals + definitions + switching + operating:**
- **Signals** (`content/signals.js`) — all CROR 405–440 indications (42, 38 drawn) + the SVG
  renderer (`js/signal.js`); detail renders the aspect + study notes.
- **Definitions** (`content/defs.js`) — full CROR Definitions section: equipment/movements,
  track & territory, control systems, signals/blocks, bulletins, occupational terms, switches,
  and speeds (67 entries, all verbatim + cited).
- **Switching** (`content/switching.js`) — CROR 104 / 104.1 / 104.2 / 104.4 / 104.5 / 105 /
  112 / 113.0–113.7 / 114 / 115 (17 entries, faithful cited condensations; GP specifics flagged
  as S.I./SME, not invented).
- **Operating** (`content/operating.js`) — signal-handling & communication rules: hand/bell/
  whistle (12/13/14), headlight (17), blue-signal protection (26), signal imperfectly displayed
  (27), speed compliance (33), fixed-signal recognition (34), emergency protection & flagging
  (35/36), track-work protection (41), crew rules (106/108/109/110), and the radio block
  (122/123/123.1/123.2/125/126/142/147) — 23 entries, faithful cited condensations.
- Detail view renders SVG aspects + study notes + SME notes; list has a **domain filter**.
- **149 entries, validator green.** Sourced from the Jan 2025 CROR PDF + the audited cn-conductor-trainer.

**L2 done — derived drills** (`js/drills.js`, route `#/drills`):
- Questions generated from the SAME `ENTRIES` (single source). Formats: **flashcard recall**
  (self-graded), **multiple choice** (same-domain distractors, auto), **rule-number match**
  (auto; skips defs with no number). Scope by **format + domain + tag + length**.
- Progress bar + score, correct/wrong marking, per-question "open the entry" link, and a
  results screen that lists what to review (linked). Reference / Drills nav in the top bar.
- Signal-aspect-ID format was deliberately deferred (additive — the renderer's already there).

**L3 done — progress + gaps** (`js/progress.js` model + `js/progressview.js`, route `#/progress`):
- Drill results persist to `localStorage` (`cror-progress-v1`) with a **Leitner box** per
  entry (0 new/missed … 5 mastered); correct promotes + streaks, a miss resets to 0.
- Progress page: overall mastery, bucket pills, per-domain bars, weakest entries (linked),
  Reset. Drills write to it and gained a **Focus weak spots** order + a setup "missing" panel.

**L4 done — adaptive study + exam** (`js/study.js` + scheduler in `js/progress.js`, route `#/study`):
- Spaced repetition: box intervals (0/1/3/7/14/30 d); `studyQueue` = due (most overdue) +
  capped new + weakest top-up. Study dashboard: due/new/in-rotation + one-tap Study now.
- Mock exam: 30 auto-graded Qs (MCQ + rule-number), coverage-balanced, no peeking, 80%
  PASS banner + review report. Drills `runEntries` powers both; results reschedule next time.

**Guide done — in-app teaching** (`js/guide.js` route `#/guide` + `js/tour.js`):
- Teaches the WORKFLOW (the 4-mode loop), not the rules — so it stays true as content grows
  (entry count is read live). Worked "a week with the assistant" example w/ deep links, 3 tips.
- Interactive tour spotlights the real UI via stable hooks; dismissible first-run nudge
  (`cror-seen-guide`). **Guide is the 5th nav tab** (Reference/Study/Drills/Progress/Guide).
- Stays valid as long as no NEW study *mode* is added (content + polish are additive).

## 3a. Content gap map (audited 2026-06-21 vs Jan 2025 CROR — MAP ONLY, not yet pulled)
Covered: **Definitions** (67) ✅ · **Signal indications 405–440** (38 drawn) ✅ · **Hand
switches 104–115** ✅ · **General Rules 1–27** ✅ · **Protection of track work 33–45** ✅
(33/34/35/36 + 40–45 — done 2026-06-21) · **Communication / foreman 120–153** ✅
(120/121/122/123/123.1/123.2/125/126/127/137/138/142/147/153 — done 2026-06-21) ·
**Operation of Movements 62–102** ✅ (62–66, 70, 80–85.1, 94, 101–102 — done 2026-06-21) ·
**Movement/crew** 106/108/109/110.
Gaps, by priority for when content is pulled:
- **P1 — backbone:** ✅ done (General Rules, track-work protection, comms/foreman, operation
  of movements). Minor leftovers: crew 100/103/107/111/116–119, 131/139/140/154–156 (RTC
  recording/GBO admin) if wanted.
- **P2 — territory operating (NEXT, biggest remaining gap):** OCS 300–315 → CTC 560–578 →
  ABS 500s → Interlocking 600–620. Only their definitions exist today.
- **P2 — territory operating (BIGGEST gap):** OCS 300–315 → CTC 560–578 → ABS 500s →
  Interlocking 600–620. We have the *definitions* of every control system but **none of the
  operating rules** for working on them.
- **P3:** GBO/TGBO procedures (160s), track-unit/track-work protection (800s), signal
  description 401–404.
Discipline unchanged: never from memory, cite + trust-flag, `npm run validate` green.

## 4. Roadmap (next)
- **L0–L4 + Guide + polish/motif done + deployed** (live at jordan-doerksen.github.io/training-assistant/).
- **L5 — polish:** PWA/offline (works with no signal), printable cheat-sheets, a switch-list
  cross-link. A signal-aspect-ID drill format is a small additive follow-on.
- Then L3 progress/gaps · L4 adaptive study-next + recert mode · L5 polish.
- **L2** drills (derived) · **L3** progress/gaps · **L4** adaptive "study next" + recert prep ·
  **L5** polish (PWA, cheat-sheets, switch-list link, Observatory spoke).

## 5. Content discipline
- **Never from memory.** Source from `sources/Jan_2025_Canadian_rail_operating_rules_EN.pdf`
  (`pdftotext`/`pymupdf` available) or confirm with an SME / firsthand; set `trust` accordingly.
- The audited citations in `C:\projects\CN Conductor Trainer` are the seed bank — re-house
  that verified work; don't re-derive it.
- Run `npm run validate` after any content edit.

## 6. Deploy
Not yet deployed. When ready: GitHub Pages (like switch-list) + an Observatory portfolio
card (entry already drafted in `jordan-doerksen.github.io/data/projects.json`).
