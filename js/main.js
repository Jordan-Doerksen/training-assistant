// ==========================================================================
// MAIN — boots the app: wires the search box to the list view and starts the
// router. Press "/" anywhere to jump to the search field.
// ==========================================================================

import { initRouter } from './router.js';
import { search } from './search.js';
import { renderList } from './reference.js';

function boot() {
  const q = document.getElementById('q');
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
