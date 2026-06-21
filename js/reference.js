// ==========================================================================
// REFERENCE — renders the list (search results, with a domain filter) and the
// entry detail. Every surface shows the TRUST chip + citation. Signal entries
// render their aspect via the SVG renderer, with a study notes block.
// ==========================================================================

import { get, all } from './data.js';
import { drawSignal } from './signal.js';

export const refState = { domain: 'all' };

const DOMAIN_LABEL = { defs: 'Definitions', signals: 'Signals', switching: 'Switching', operating: 'Operating' };
const esc = (s) => (s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const chip = (e) => {
  const cls = e.trust === 'rulebook' ? 't-rule' : e.trust === 'S.I.' ? 't-si' : 't-sme';
  const t = e.trust === 'rulebook' ? 'CROR rulebook text' : e.trust === 'S.I.' ? 'Special Instruction' : 'SME — verified by Kourtney / firsthand';
  return `<span class="chip ${cls}" title="${esc(t)}">${esc(e.trust)}</span>`;
};
const tags = (e) => ((e.tags || []).length ? `<span class="tags">${e.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</span>` : '');

function filterBar() {
  const counts = { all: all().length };
  for (const e of all()) counts[e.domain] = (counts[e.domain] || 0) + 1;
  const doms = ['all', ...Object.keys(DOMAIN_LABEL).filter((d) => counts[d])];
  return `<div class="filters">${doms.map((d) => {
    const on = refState.domain === d ? ' is-on' : '';
    const label = d === 'all' ? 'All' : DOMAIN_LABEL[d];
    return `<button class="fchip${on}" data-domain="${d}">${esc(label)} <span class="fn">${counts[d] || 0}</span></button>`;
  }).join('')}</div>`;
}

export function renderList(view, results, q) {
  if (refState.domain !== 'all') results = results.filter((e) => e.domain === refState.domain);
  view.innerHTML = `
    ${filterBar()}
    <p class="count">${results.length} ${results.length === 1 ? 'entry' : 'entries'}${q ? ` · “${esc(q)}”` : ''}</p>
    <ul class="list">${results.map((e) => `
      <li><a class="card" href="#/e/${encodeURIComponent(e.id)}">
        <span class="card-head"><span class="card-title">${esc(e.title)}</span>${chip(e)}</span>
        <span class="card-ref">${esc(e.ref)}</span>
        <span class="card-body">${esc(e.body)}</span>
        ${tags(e)}
      </a></li>`).join('')}</ul>
    ${results.length === 0 ? '<p class="empty">No match. Try a rule number, a signal name, or a keyword.</p>' : ''}`;
}

export function renderEntry(view, id) {
  const e = get(id);
  if (!e) { view.innerHTML = `<p class="count">Not found. <a href="#/">← all entries</a></p>`; return; }
  const rel = (e.related || []).map(get).filter(Boolean);
  view.innerHTML = `
    <a class="back" href="#/">← all entries</a>
    <article class="entry">
      <header class="entry-head"><h1>${esc(e.title)}</h1>${chip(e)}</header>
      <p class="entry-ref"><span class="ref-num">${esc(e.ref)}</span><span class="src">${esc(e.source)}</span></p>
      ${e.aspect ? `<figure class="aspect">${drawSignal(e.aspect)}<figcaption>Aspect reproduced from a study source &amp; cross-checked vs the CROR — the rulebook governs.</figcaption></figure>` : ''}
      <p class="entry-body">${esc(e.body)}</p>
      ${e.detail ? `<div class="detail"><h2>Notes</h2><p>${esc(e.detail)}</p></div>` : ''}
      ${e.smeNote ? `<p class="sme"><b>SME</b> — ${esc(e.smeNote)}</p>` : ''}
      ${tags(e)}
      ${rel.length ? `<section class="related"><h2>Related</h2><ul>${rel.map((r) => `<li><a href="#/e/${encodeURIComponent(r.id)}"><span>${esc(r.title)}</span><span class="card-ref">${esc(r.ref)}</span></a></li>`).join('')}</ul></section>` : ''}
    </article>`;
}
