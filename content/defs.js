// ==========================================================================
// CONTENT · DEFINITIONS — verbatim CROR definitions, each cited (trust:rulebook).
// Source: Canadian Rail Operating Rules, Jan 28 2025, "DEFINITIONS" section.
// The source PDF is gitignored (no-redistribute); the cited definition text
// lives here because being the cited reference IS the product.
// To add an entry: copy the D(...) pattern. Run `node tools/validate.mjs` after.
// ==========================================================================

const SRC = 'Canadian Rail Operating Rules — Jan 28, 2025';
const D = (id, title, body, tags = [], related = []) =>
  ({ id, domain: 'defs', ref: 'CROR — Definitions', source: SRC, trust: 'rulebook', title, body, tags, related });

export const defs = [
  D('def-engine', 'Engine',
    'A locomotive(s) operated from a single control or a cab control car, used in train, transfer or yard service.',
    ['equipment', 'yard'], ['def-engine-yard-service', 'def-equipment']),
  D('def-engine-yard-service', 'Engine in Yard Service',
    'An engine with or without cars utilized exclusively in switching, marshalling, humping, trimming and industrial switching.',
    ['yard', 'switching'], ['def-engine']),
  D('def-equipment', 'Equipment',
    'One or more engines and/or cars which can be handled on their own wheels in a movement.',
    ['equipment'], ['def-engine']),
  D('def-gravity-drop', 'Gravity Drop',
    'Releasing stationary equipment and permitting it to roll under its own momentum.',
    ['switching', 'kicking'], ['def-humping']),
  D('def-humping', 'Humping',
    'Pushing equipment at a regulated speed then releasing it under its own momentum, in an engineered environment where the route and speed are controlled through automated or assisted devices.',
    ['switching', 'yard'], ['def-gravity-drop']),
  D('def-block', 'Block',
    'A length of track of defined limits, the use of which by a movement is governed by block signals.',
    ['signals'], ['def-block-signal']),
  D('def-block-signal', 'Block Signal',
    'A fixed signal at the entrance to a block to govern a movement entering or using that block.',
    ['signals'], ['def-block', 'def-fixed-signal']),
  D('def-fixed-signal', 'Fixed Signal',
    'A signal or sign at a fixed location indicating a condition affecting the operation of a movement.',
    ['signals'], ['def-advance-signal', 'def-block-signal']),
  D('def-advance-signal', 'Advance Signal',
    'A fixed signal used in connection with one or more signals to govern the approach of a movement to such signal.',
    ['signals'], ['def-fixed-signal']),
  D('def-controlled-signal', 'Controlled Signal',
    'A CTC block signal which is capable of displaying a Stop indication until requested to display a less restrictive indication by the RTC.',
    ['signals', 'ctc'], ['def-block-signal']),
  D('def-crossover', 'Crossover',
    'A track joining adjacent main tracks, or a main track and another track.',
    ['track']),
  D('def-heavy-grade', 'Heavy Grade',
    'A portion of a track 2 miles in length or greater, with an average grade greater than 1.0%, and less than or equal to 1.8%.',
    ['track', 'grade']),
];
