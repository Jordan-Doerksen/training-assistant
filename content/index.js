// ==========================================================================
// CONTENT REGISTRY — the one place every domain is registered. To add a domain
// (signals, switching, operating): write content/<domain>.js, import it here,
// and spread it into ENTRIES. Nothing else in the app needs to change.
// ==========================================================================

import { defs } from './defs.js';
// import { signals } from './signals.js';     // L1
// import { switching } from './switching.js'; // later
// import { operating } from './operating.js'; // later

export const ENTRIES = [...defs];
