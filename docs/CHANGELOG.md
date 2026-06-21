# CHANGELOG — training-assistant

Phase log, newest first.

## L5: PWA / offline — THE TOOL IS DONE — 2026-06-21
- **Installable + fully offline** (`manifest.webmanifest`, `sw.js`, `icon.svg`, registration in
  `js/main.js`). Add-to-home-screen gives it an icon + standalone (no browser chrome); the
  service worker precaches the whole app shell + content (24 assets) and serves
  stale-while-revalidate, so it opens with **zero signal** — yard, dead zone, head end.
- **Clean updates:** bump `CACHE` in `sw.js` (v1 → v2 …) on any content/code change to force
  every client to refresh on next load (activate deletes old caches; install skipWaiting +
  clients.claim). Icon is a scalable SVG (red signal lamp).
- Verified: SW registers + controls the page, cache `cror-v1` holds all 24 files, manifest valid,
  no console errors. Real airplane-mode test is on-device.
- **This was deliberately last** (service workers cache stale copies and mask whether changes
  work). With it in, the training-assistant is feature-complete.

## L5: switch-list cross-link — 2026-06-21
- **Companion-sim link** — a "take it to the yard" callout on the Guide page (and a contextual
  one-line note on the Switching domain view) linking to Switch List
  (jordan-doerksen.github.io/switch-list/, new tab). Reinforces the division: reference + drill
  here, live switching practice there. Hidden in print.

## L5: printable cheat-sheets — 2026-06-21
- **Print what you've filtered** (`js/reference.js` + print CSS) — a "⎙ Print cheat-sheet" button
  on the reference list prints the current domain/topic/search selection as a clean, compact
  two-column sheet (title + citation + a 3-line gist), no nav/chrome, with a scope+disclaimer
  header line. Build any cheat-sheet by filtering first (e.g. Operating → Control systems → Print).
  Screen-verified (button + dynamic scope label); printed layout is a `@media print` stylesheet.

## Content pull COMPLETE (conductor scope) — 2026-06-21
The remaining CROR operating content, pulled in four batches (250 → 305 entries):
- **A (+9):** grade crossings 103/103.1, passenger stops 107, inspection 111, radio 117/118/119;
  switching 104.3, 105.1.
- **B (+22):** general procedures 131–141/143/148, GBO 151–157 (incl. DOB 156, TGBO 157),
  and the four GBO Forms S/T/V/Y.
- **C (+15):** signal description 401–404 (+ a Description topic), SCT 360–364, CTC 577/577.1/578,
  Interlocking 620.
- **D (+9):** the conductor-relevant subset of the 800s (TOP) — 801/802/803/849/850/851/852/853/864.
  (The rest of the 800s is the track-unit FOREMAN's section, deliberately out of scope.)
- **305 entries, validator green. The rulebook is now conductor-complete** — every method of
  control, plus general/protection/movement/comms/GBO/crossings/signals, is in.

## Browse: contextual topic chips — 2026-06-21
- **Progressive topic filter** (`js/reference.js`) — the 250-entry list was overwhelming on
  "All". Domain chips stay (5); selecting a domain now reveals a SECOND, lighter row of a few
  curated topic chips for that domain only (e.g. Operating → Control systems · Signals ·
  Communication · Protection · Authority & movement · Switching & securing · Crews & admin).
  All shows just the 5; chips with no entries are hidden; counts shown. Topics map to tags; a
  `TOPICS` taxonomy is defined per domain (defs/signals/switching/operating). Search unaffected.
- Changing domain resets the topic; mobile-verified (rows wrap cleanly). No schema change.

## Content pull: Interlocking + SCS — P2 COMPLETE — 2026-06-21
- **Full Interlocking section** (`content/operating.js`, +18, tag `interlocking`) — 601 Application,
  602 Proper Signal Indications, 604 Establishing/Changing Routes, 605 Timing Circuit, 606
  Approaching Limits, 607 Rule-applicable-at-stop table, 608 Manual, 609 Locally-Controlled,
  610 Remotely-Controlled, 611 Automatic (the knife-switch/box procedure), 612 Stopped Foul,
  614 Leaving in ABS/CTC, 615 Single Unit Restricted, 616 Damage, 617 Disconnecting Parts,
  618 Protect Against Foreman (+618.1 optional), 619 Transfer by Signalmen.
- **SCS section** (+3, tag `scs`) — 351 Application, 352 Supervision, 353 Special Instructions.
- **250 entries, validator green. P2 (all four methods of control + SCS) COMPLETE** — OCS,
  CTC, ABS, Interlocking now have operating rules, not just definitions.

## Content pull: ABS (Automatic Block Signal System) — 2026-06-21
- **Full ABS section** (`content/operating.js`, +5, tag `abs`) — 505 Application, 507 Withdrawal
  of Signals, 509 Instructions to Pass Signal Indicating Stop, 513 Entering Main Track (the
  five-minute switch wait), 515 Delayed in the Block. Cited + cross-linked. **229 entries, green.**

## Content pull: CTC (Centralized Traffic Control) — 2026-06-21
- **Full CTC section** (`content/operating.js`, +17, tag `ctc`) — 560 Supervision, 561 Suspended,
  563 Clearing Opposing Signals into Non-Signalled Sidings, 564 Authority to Pass Stop Signal,
  565 CTC→ABS, 566 Work Authority (+566.1 signal suspended while switching), 567 Joint Work
  Authority (+567.1 protect against foreman, 567.2 entering foreman's limits, 567.3 proceeding
  through work limits), 568 Signal/Permission to Enter Main Track, 569 Cancelling Authorities,
  570 Entering Between Signals, 571 Restoring Signals to Stop, 573 Reversing Direction,
  576 Switching at a Controlled Location. Cited + cross-linked. **224 entries, validator green.**

## Content pull: OCS (Occupancy Control System) — 2026-06-21
- **Full OCS section** (`content/operating.js`, +18) — the first P2 territory-operating block:
  301 Application/Supervision, 302 Clearance Required (+302.1/.2/.3 in-effect/superseding/
  cancelling), 303 Protection Against Following (+303.1 radio), 304 Restriction Before Leaving
  (+304.1 stopping clear), 305, 306 Track Use, 308 Work Clearance (+308.1 changing direction),
  309 Moving Through Working Limits, 310 Multiple Work Authorities, 311 Protecting Against a
  Foreman, 314 (optional), 315 Radio Broadcast Requirements. All tagged `ocs`, cited,
  cross-linked. **207 entries, validator green.**

## Content pull: Operation of Movements — 2026-06-21
- **Operation of Movements section** (`content/operating.js`, +18) — 62 Unattended Engines,
  63 Freight Train / 64 Transfer / 65 Engine-in-Yard-Service Requirements, 66 Securing After
  an Emergency Brake Application on Grade, 70 Remote Control Operation, 80 Main Track
  Authorization, 81 Designation of Multi-Track, 82 Limits of Authority, 83 Operating Bulletins,
  84 Reporting Delays, 85 Track Release Reports, 85.1 Location Reports, 94 Cautionary Limits,
  101 Protection Against Extraordinary Conditions, 101.1 Dimensional Traffic, 101.2 Equipment
  Left on Main Track, 102 Emergency Stop Protection. Cited + cross-linked to switching/defs.
  **189 entries, validator green.**

## Content pull: Radio / foreman comms — 2026-06-21
- **Communication block completed** (`content/operating.js`, +6) — 120 Radio Terms,
  121 Positive Identification, 127 Conducting Emergency Radio Test, 137 Foreman's
  Instructions, 138 Foreman's Instructions (Optional), 153 Confirmation to a Foreman.
  (122/123/123.1/123.2/125/126 + 142/147 already present; no rule 124 exists.) Cited +
  cross-linked. **171 entries, validator green.**

## Content pull: Track-work protection — 2026-06-21
- **Protection of Track Work & Track Conditions completed** (`content/operating.js`, +5) —
  added 40 General, 42 Planned Protection, 43 Slow Track Protection, 44 Unusual Track Signal
  Conditions, 45 Signal Placement Multi-Track (41 was already present). Form Y / Form V
  handling, the 30-minute Rule 42 window, and the yellow/green field-signal scheme, all cited
  + cross-linked. **165 entries, validator green.**

## Content pull: General Rules — 2026-06-21
- **General Rules section completed** (`content/operating.js`, +11) — added the missing
  CROR General Rules: 1 Time, 2 Watches, 3 Time in Effect, 4 Notice of Time Change,
  5 Employees on Duty When Time Changes, 6 Time Tables, 7 Notice of New Time Table or
  Supplement, 8 Symbols and Diagrams, 11 Fusees, 18 Headlight Failure, 19 Ditch Lights.
  (12/13/14/17/26/27 + 33–36 were already present.)
- Faithful condensations pulled from the Jan 2025 CROR source, cited (trust: rulebook),
  tagged (time/timetable/lights/signals/flagging/crew) and cross-linked. **160 entries,
  validator green.** Kept in the `operating` domain (no schema change) per the structure call.

## Polish pass + footer motif — 2026-06-21
- **Footer motif** — an endless side-profile train (`js/footer-train.js`, canvas): charcoal
  steam loco + a CN-red boxcar + a slate car with side-rod wheels, subtle smoke, scrolling
  rail/ties, distant pines, and the occasional passing signal (green/amber/red — on theme).
  Daytime + professional, descended from the portfolio night-train but restrained (no
  moon/stars/critters). Contained to content width; runs only on screen; reduced motion =
  one static frame. (Replaced an earlier SVG "infinity emblem" that didn't land.)
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
