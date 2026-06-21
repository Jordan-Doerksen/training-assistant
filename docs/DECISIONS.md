# DECISIONS — training-assistant (ADR-lite)

Newest first. Never rewrite history; if a decision changes, add a new one and mark the
old **Superseded**.

## 0006 · Drills are derived from a single content source
**Accepted 2026-06-21.** Drills (L2) generate from the same `content/*` entries the
reference uses; authored questions are overrides via `entry.drill`, not a parallel dataset.
Kills duplicate content + the stale-source problem.

## 0005 · Identity = clean rail-ops theme (not Glass Archive)
**Accepted 2026-06-21.** A fast, high-legibility field-guide look (paper, ink, mono
citations, colour-coded trust chips) — built for use under pressure, not the dark house
style. Glass Archive stays the portfolio/personal aesthetic; this is a tool.

## 0004 · Seed domain = definitions / glossary
**Accepted 2026-06-21.** Smallest, fastest domain to validate the schema + reference UX
before the big signal/rule content lift (L1).

## 0003 · Content stored as JS data modules
**Accepted 2026-06-21.** One `.js` per domain exporting entry objects. Reasons: no build
step (his convention); handles structured signal aspect-encodings cleanly; `tools/validate.mjs`
imports the *same* files (zero divergence, the switch-list solver pattern). Rejected: JSON
(painful to hand-author, rigid encodings) and Markdown+front-matter (needs a parser → breaks
no-build; encodings don't fit).

## 0002 · Reference-first, you-first-but-shareable
**Accepted 2026-06-21.** The primary daily use is fast cited lookup; drills/assistant layer
on top. Built around Jordan's recert/interview prep, but clean enough for peers (free/open).

## 0001 · Fresh standalone repo (not a rebuild of cn-conductor-trainer)
**Accepted 2026-06-21.** A clean repo reframes the project from "gamified PlayStore product"
to "training assistant," and cleanly divides the two: `switch-list` = the sim/game; this =
reference + drill + assistant. Links between them; no duplication. Re-houses the *audited
CROR citations* from `cn-conductor-trainer` as the content seed.
