// ==========================================================================
// MAIN — boots the app: wires the search box to the list view and starts the
// router. Press "/" anywhere to jump to the search field.
// ==========================================================================

import { initRouter, route } from './router.js';
import { search } from './search.js';
import { renderList, refState } from './reference.js';

function boot() {
  const q = document.getElementById('q');
  document.getElementById('view').addEventListener('click', (e) => {   // domain filter chips
    const chip = e.target.closest('[data-domain]');
    if (chip) { e.preventDefault(); refState.domain = chip.getAttribute('data-domain'); route(); }
  });
  // clicking a link to the hash you're already on (e.g. the Study tab while a
  // study/exam session is showing) won't fire hashchange — force a re-render so
  // it returns to that view's home instead of doing nothing.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href') === (location.hash || '#/')) route();
  });
  q.addEventListener('input', () => {
    if (location.hash && location.hash !== '#/' && location.hash !== '#') {
      location.hash = '#/';                                  // leave a detail view; router re-renders the list using q
    } else {
      renderList(document.getElementById('view'), search(q.value), q.value);
    }
  });
  addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); q.select(); }
  });
  initRouter();
}

if (document.readyState === 'loading') addEventListener('DOMContentLoaded', boot); else boot();
