// ==========================================================================
// ROUTER — hash routes. "#/" (or empty) = the search/list view; "#/e/<id>" =
// an entry detail. Keeps the app a static file with no server rewrites.
// ==========================================================================

import { search } from './search.js';
import { renderList, renderEntry } from './reference.js';
import { renderDrills } from './drills.js';
import { renderProgress } from './progressview.js';

const view = () => document.getElementById('view');

function syncNav(h) {
  const active = h.startsWith('/drills') ? 'drills' : h.startsWith('/progress') ? 'progress' : 'ref';
  document.querySelectorAll('[data-nav]').forEach((a) =>
    a.classList.toggle('is-on', a.getAttribute('data-nav') === active));
}

export function route() {
  const h = location.hash.slice(1);
  syncNav(h);
  if (h.startsWith('/progress')) { renderProgress(view()); window.scrollTo(0, 0); return; }
  if (h.startsWith('/drills')) { renderDrills(view()); window.scrollTo(0, 0); return; }
  const m = h.match(/^\/e\/(.+)$/);
  if (m) { renderEntry(view(), decodeURIComponent(m[1])); window.scrollTo(0, 0); return; }
  const q = document.getElementById('q')?.value || '';
  renderList(view(), search(q), q);
}

export function initRouter() { addEventListener('hashchange', route); route(); }
