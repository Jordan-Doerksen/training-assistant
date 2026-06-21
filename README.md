# training-assistant

A reference-first, **CROR-cited** training assistant for conductors — search any
rule, signal, or definition and get a fast, sourced answer you can trust. Built
for re-qualification and interview/recert prep, but clean enough for anyone.

Not a game (that's [switch-list](https://github.com/Jordan-Doerksen/switch-list)).
This is the thing you keep open the night before a recert: a **resource** (look it
up), a **tool** (drill yourself), and eventually an **assistant** (it tells you
what to study next).

## What's here (L0)
- **Reference core** — search + browse entries, each showing its **citation** and a
  **trust chip** (`rulebook` · `S.I.` · `SME`).
- **One content schema** powers everything (reference now; drills/progress/assistant
  later) — see `js/schema.js`.
- **Seeded** with CROR definitions (verbatim, cited).

## Run it
It's a static site — no build. Serve the folder and open it:
```
python -m http.server 8095
```
Then visit `http://localhost:8095`. Press **/** to jump to search.

## Validate the content
```
npm run validate      # = node tools/validate.mjs
```
Fails on schema errors, duplicate ids, or broken related-links. A wrong or uncited
entry never ships.

## The rule that keeps it trustworthy
**Never author rule content from memory.** Quote + cite from the CROR (Jan 28 2025)
or confirm with an SME / firsthand. Source PDFs live in `sources/` and are
gitignored — only the cited digests are public. This is a study aid, **not** the
official rulebook.

## Where it's going
`docs/SPEC.md` has the full design + the additive layer plan (L0 → L5). `docs/HANDOFF.md`
is the working source of truth — read it before building, update it after.

MIT (code). Built by Jordan Doerksen.
