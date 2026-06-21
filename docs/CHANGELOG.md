# CHANGELOG — training-assistant

Phase log, newest first.

## Polish pass + footer motif — 2026-06-21
- **Footer motif** — a clean "down the line forever" emblem: a circular medallion with rails
  converging to a center vanishing point, ties rushing toward the viewer, and a pulsing
  headlight. Pure SVG + CSS, contained in the footer, sitewide; honors prefers-reduced-motion
  (freezes to a static perspective ladder).
- **Validator** gained a drill-integrity lint — warns if two entries in a domain share an
  identical title/body (which would make a multiple-choice question ambiguous). Currently clean.
- **a11y** — `aria-current="page"` on the active nav tab, `aria-label` on the footer emblem,
  and the tour now moves keyboard focus to its primary action each step.
- **Quick wins** — inline SVG favicon (red signal lamp) + `theme-color` for mobile chrome.
- **Review (this pass):** systems audit clean (architecture additive, validator green);
  citation spot-checks vs the Jan 2025 CROR all faithful (R26/R113.5/R123/R123.2/R125);
  content gap map captured in HANDOFF — biggest gap is the control-system *operating* rules
  (OCS/ABS/CTC/Interlocking — only their definitions exist so far).

## Guide / onboarding — 2026-06-21
- **Guide tab** (`js/guide.js`, route `#/guide`) — teaches the *workflow*, not the rules:
  the 4-mode learning loop (Reference → Drills → Study → Exam), a worked "a week with the
  assistant" example with deep-link buttons into each mode, and three habit tips. Entry count
  is read live ("149 cited entries and growing") so growing the content can't make it stale.
- **Interactive tour** (`js/tour.js`) — a "Take the 1-minute tour" walkthrough that navigates
  the real UI and spotlights each mode, built against STABLE hooks (nav `data-nav`, button
  data-attrs) so cosmetic changes degrade gracefully instead of breaking it.
- **First-run nudge** — a dismissible "New here? Take the tour" banner on first visit
  (localStorage `cror-seen-guide`); taking or dismissing it sets the flag.
- Designed to stay true as the system grows: it teaches the loop, and content is additive.

## L4 (adaptive study + exam mode) — 2026-06-21
- **Spaced-repetition scheduler** (`js/progress.js`) — each Leitner box gets a wait
  (box0 now · box1 1d · box2 3d · box3 7d · box4 14d · box5 30d); a seen entry is "due" once
  it has waited its box's interval. `studyStats()` (due / new / in-rotation) and
  `studyQueue()` (everything due, most-overdue first, + capped new, topped up by weakest).
- **Study dashboard** (`js/study.js`, route `#/study`, new home tab) — due/new/in-rotation
  counts + a one-tap **Study now** that builds the ideal mix, and a **Mock exam**.
- **Mock exam** — 30 auto-graded questions (MCQ + rule-number only — no self-graded
  flashcards), coverage-balanced across every domain, no running score (no peeking), and a
  scored report with an 80% **PASS / NOT YET** banner + what to review.
- Drills runner generalized (`runEntries`) so study/exam sessions reuse it; results still
  write to the scheduler, so each session reschedules the next. Fix: a link to the hash
  you're already on (e.g. the Study tab mid-session) now re-renders instead of doing nothing.

## L3 (progress + gaps) — 2026-06-21
- **Progress model** (`js/progress.js`) — drill results persist to `localStorage`
  (`cror-progress-v1`) with a **Leitner box per entry** (0 new/missed … 5 mastered): a
  correct answer promotes the box + grows a streak, a miss drops it to 0. Aggregates to
  per-domain / per-tag mastery and a weakest-entries list.
- **Progress page** (`js/progressview.js`, route `#/progress`) — overall mastery, bucket
  pills (mastered/strong/learning/weak/unseen), a mastery bar per domain, your weakest
  entries (linked to their cited reference), and an arm-then-confirm Reset.
- **Drills now write to it** + gained a **Focus weak spots** order toggle (prioritizes
  missed + never-seen) and a compact "you keep missing" panel on the setup screen.
- New **Progress** top-bar tab. Fixed: opening Drills after finishing a quiz now lands on a
  fresh setup instead of the stale results screen.

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
