# SPEC — training-assistant

_Last updated: 2026-06-21_

## 1. What it is
A **reference-first, CROR-cited training assistant** for conductors. Three faces:
- **Resource** — look up any rule / signal / definition, fast, with its citation.
- **Tool** — drill yourself; surface weak spots.
- **Assistant** — eventually: tells you what to study next.

Audience: **you first** (CN re-qualification + interview/recert prep), but clean and
general enough to share (free/open, like `switch-list`). **Not a game** — `switch-list`
is the sim; this links to it. The two stay distinct: sim vs reference/drill.

## 2. The keystone — one content schema (lock this; everything reads it)
All rail knowledge is one shape (`js/schema.js`). Reference, drills, progress, and the
assistant all consume entries of this shape — so features are **additive** and the
foundation never gets re-poured (the lesson from switch-list's mid-build rewrites).

```
entry = {
  id        unique kebab id            "def-engine"
  domain    defs | signals | switching | operating
  ref       citation                   "CROR 113.5(a)" | "CROR — Definitions"
  source    where ref lives            "Canadian Rail Operating Rules — Jan 28, 2025"
  trust     rulebook | S.I. | SME      rulebook text · special instruction · SME/firsthand
  title     short name
  body      the text / digest
  tags?     string[]
  related?  id[]
  smeNote?  string                     SME caveat, shown apart from the rule
  aspect?   {}                         signals only — feeds the SVG renderer (L1)
  drill?    { override?, suppress? }   drills are DERIVED from the entry by default (L2)
}
```
**Single source of truth:** a rule entry becomes a lookup result AND a recall card; a
signal entry feeds the renderer AND a "name the aspect" drill; mastery + "study next"
attach to `id`s. Write knowledge once; every feature picks it up.

## 3. Architecture (conventions: vanilla JS · ES modules · NO build · static · data-driven)
```
index.html              app shell (sticky search bar + #view)
css/app.css             "clean rail-ops" theme — paper, ink, mono citations, trust chips
js/
  schema.js             the entry shape + validateEntry()  (browser + Node)
  data.js               load + index the registry
  search.js             keyword + rule-number lookup
  reference.js          list + detail render (trust + citation chips)
  router.js             hash routes  (#/  ·  #/e/<id>)
  main.js               boot
  signal.js             [L1] ported drawSignal() SVG renderer
  drills.js             [L2] derive questions from entries
  progress.js           [L3] localStorage mastery/gaps
  assistant.js          [L4] "study next"
content/
  index.js              registry — register a domain here
  defs.js               definitions (seeded)   · signals.js / switching.js / operating.js to come
tools/validate.mjs      schema + citation lint (CI; imports the same content)
sources/                CROR + reference PDFs — gitignored, local only
docs/                   SPEC · HANDOFF · DECISIONS · CHANGELOG
package.json            {"type":"module"} so Node can ESM-import content/ (static site unaffected)
```

## 4. Progression layers — each additive, each shippable
- **L0 — scaffold + schema + validator + defs seed + browse.** ← current
- **L1 — reference core.** Full search, list→detail, trust/citation chips, related-links,
  the signal SVG renderer; seed from the audited `cn-conductor-trainer` content (signals,
  switching rules 104/105/112/113/114, operating).
- **L2 — drills (derived).** Recall / multiple-choice / signal-aspect naming, generated from
  entries; pick a domain/tag to quiz. Authored overrides via `entry.drill`.
- **L3 — progress + gaps.** Per-entry mastery in localStorage; a "weak spots" view; mark-known.
- **L4 — adaptive assistant.** "Study next" surfaces weak/unseen entries; light spaced
  repetition; a curated **interview / recert prep** set.
- **L5 — polish.** Offline/PWA, printable cheat-sheets, link to switch-list, Observatory spoke,
  shareable cleanup.

L2–L5 are new modules over the **same fixed content** — no content rewrite, no schema change.

## 5. Correctness bar (non-negotiable; it's the moat)
- **Never author rule content from memory.** Quote + cite from the CROR (Jan 28 2025) or
  confirm with an SME / firsthand. Stub + flag anything unverifiable; don't guess.
- Every entry carries `ref` + `source` + `trust`. The trust chip is always visible.
- `tools/validate.mjs` is the gate (schema, unique ids, resolvable related-links).
- Source PDFs are no-redistribute → gitignored; cited digests are public. **Study aid,
  not the official rulebook.**

## 6. Locked decisions (see DECISIONS.md for the why)
Fresh standalone repo · reference-first · you-first-but-shareable · content = **JS data
modules** · seed domain = **definitions** · identity = **clean rail-ops theme** (not Glass
Archive) · drills derived from a single content source.
