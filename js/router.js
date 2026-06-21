// ==========================================================================
// ROUTER — hash routes. "#/" (or empty) = the search/list view; "#/e/<id>" =
// an entry detail. Keeps the app a static file with no server rewrites.
// ==========================================================================

import { search } from './search.js';
import { renderList, renderEntry } from './reference.js';

const view = () => document.getElementById('view');

export function route() {
  const h = location.hash.slice(1);
  const m = h.match(/^\/e\/(.+)$/);
  if (m) { renderEntry(view(), decodeURIComponent(m[1])); window.scrollTo(0, 0); return; }
  const q = document.getElementById('q')?.value || '';
  renderList(view(), search(q), q);
}

export function initRouter() { addEventListener('hashchange', route); route(); }
