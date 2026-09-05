(function () {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad2 = (n) => String(n).padStart(2, '0');
  const hashQ = new URLSearchParams((location.hash.split('?')[1] || ''));
  if (location.hash.startsWith('#flat')) document.body.classList.add('flat');

  /* ---- hero ---- */
  $('#meta-loc').textContent = D.person.location;
  const words = ['helpdesk tickets', 'Windows and VMware', 'SAP HANA on Linux', 'SAP cloud services', 'a four-cloud estate', 'Kubernetes platforms', 'AI operations'];
  const w = $('#hero-word'); let wi = 0;
  if (!reduced) setInterval(() => { w.classList.add('out'); setTimeout(() => { wi = (wi + 1) % words.length; w.textContent = words[wi]; w.classList.remove('out'); }, 300); }, 2600);
  const img = $('#portrait-img'); img.src = 'assets/img/portrait.jpg';
  img.onload = () => { img.hidden = false; $('#portrait .mono-fallback').style.display = 'none'; $('#portrait').classList.add('has-img'); };
  const portrait = $('#portrait');
  if (!reduced) addEventListener('scroll', () => { const y = Math.min(scrollY, 900); portrait.style.setProperty('--py', (y * 0.08) + 'px'); }, { passive: true });

  /* ---- contact links ---- */
  $('#link-email').href = 'mailto:' + D.person.links.email; $('#link-linkedin').href = D.person.links.linkedin;
  $('#link-credly').href = D.person.links.credly; $('#link-yangonai').href = D.person.links.yangonai; $('#link-github').href = D.person.links.github;
  $('#f-github').href = D.person.links.github; $('#f-linkedin').href = D.person.links.linkedin; $('#f-credly').href = D.person.links.credly;

  /* ---- contact buttons: the amber pill glides to whichever button is hovered or focused ---- */
  (function glide() {
    const box = $('#contact-ctas'); if (!box) return;
    const g = box.querySelector('.glider'), btns = [...box.querySelectorAll('.btn')]; let home = btns[0];
    const moveTo = (b) => { btns.forEach(x => x.classList.toggle('on', x === b)); g.style.width = b.offsetWidth + 'px'; g.style.height = b.offsetHeight + 'px'; g.style.transform = `translate(${b.offsetLeft}px, ${b.offsetTop}px)`; };
    btns.forEach(b => { b.addEventListener('mouseenter', () => moveTo(b)); b.addEventListener('focus', () => moveTo(b)); });
    box.addEventListener('mouseleave', () => moveTo(home)); box.addEventListener('focusout', (e) => { if (!box.contains(e.relatedTarget)) moveTo(home); });
    const settle = () => { g.style.transition = 'none'; moveTo(home); requestAnimationFrame(() => { g.style.transition = ''; }); };
    addEventListener('resize', settle); addEventListener('load', settle); setTimeout(settle, 50); setTimeout(settle, 900);
  })();
  $('#yr').textContent = new Date().getFullYear();

  /* ---- about ---- */
  const pr = $('#promises');
  D.about.forEach((a, i) => { const c = el('div', 'promise reveal', `<div class="n">0${i + 1}</div><h3>${a.h}</h3><p>${a.p}</p>`); c.style.setProperty('--d', (i * 90) + 'ms'); pr.appendChild(c); });

  /* ---- journey ---- */
  const chs = $('#chapters'), rail = $('#rail'), J = D.journey;
  J.forEach((c, i) => {
    const a = el('article', 'chapter' + (c.hobby ? ' hobby' : '')); a.id = 'ch-' + c.id; a.dataset.i = i;
    a.innerHTML = `<span class="kicker">${c.kicker}</span><h2>${c.title}</h2><div class="org">${c.org}</div><div class="place">${c.place}</div>
      <p class="narr">${c.narrative}</p>${c.points.length ? `<ul>${c.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
      <div class="tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      ${c.link ? `<a class="more" href="${c.link.href}" target="_blank" rel="noopener">${c.link.label} →</a>` : ''}
      ${c.cta ? `<div class="ctas" style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-amber" href="#contact">Get in touch</a><a class="btn btn-ghost" href="#analytics">See the analytics</a></div>` : ''}`;
    chs.appendChild(a);
    const b = el('button', c.hobby ? 'hobby' : '', `<i></i>${c.year} · ${c.kicker}`); b.onclick = () => a.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); rail.appendChild(b);
  });
  const pYear = $('#p-year'), pSpan = $('#p-span'), pIdx = $('#p-idx'), mYear = $('#m-year'), mSpan = $('#m-span'), mIdx = $('#m-idx');
  let active = -1;
  function setActive(i) {
    if (i === active) return; active = i; const c = J[i];
    const flip = () => { pYear.textContent = c.year; mYear.textContent = c.year; pSpan.textContent = c.span; mSpan.textContent = c.span; pIdx.textContent = `${pad2(i + 1)} / ${pad2(J.length)}`; mIdx.textContent = pIdx.textContent; };
    if (reduced) flip(); else { pYear.classList.add('flip'); setTimeout(() => { flip(); pYear.classList.remove('flip'); }, 180); }
    [...chs.children].forEach((n, j) => { n.classList.toggle('active', j === i); if (j <= i) n.classList.add('seen'); });
    [...rail.children].forEach((n, j) => n.classList.toggle('active', j === i));
  }
  const jio = new IntersectionObserver((ents) => { ents.forEach(e => { if (e.isIntersecting) setActive(+e.target.dataset.i); }); }, { rootMargin: '-42% 0px -42% 0px', threshold: 0 });
  [...chs.children].forEach(n => jio.observe(n)); setActive(0);

  /* ---- proof stats (count-up) ---- */
  const pg = $('#proof-grid');
  D.stats.forEach((s, i) => {
    const pre = s.prefixSuffix ? `<span class="sfx">${s.suffix}</span>` : '', post = s.prefixSuffix ? '' : `<span class="sfx">${s.suffix}</span>`;
    const c = el('div', 'item reveal', `<div class="num">${pre}<span data-count="${s.value}">0</span>${post}</div><div class="lbl">${s.label}</div>`); c.style.setProperty('--d', (i * 60) + 'ms'); pg.appendChild(c);
  });
  const countUp = (node) => { const target = +node.dataset.count, dur = reduced ? 0 : 1300, t0 = performance.now(); const step = (t) => { const p = dur ? Math.min(1, (t - t0) / dur) : 1, e = 1 - Math.pow(1 - p, 3); node.textContent = Math.round(target * e); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); };

  /* ---- work / skills / certs / faq ---- */
  const wg = $('#work-grid');
  D.work.forEach((wk, i) => { const c = el('article', 'wcard reveal', `<div class="era">${wk.era}</div><h3>${wk.title}</h3><dl><dt>Problem</dt><dd>${wk.problem}</dd><dt>Built</dt><dd>${wk.built}</dd><dt>Result</dt><dd>${wk.result}</dd></dl>${wk.link ? `<a class="more" href="${wk.link}" target="_blank" rel="noopener">Open project →</a>` : ''}`); c.style.setProperty('--d', (i % 3) * 90 + 'ms'); wg.appendChild(c); });
  const sg = $('#skill-grid');
  Object.entries(D.skills).forEach(([k, arr], i) => { const c = el('div', 'skill reveal', `<h4>${k}</h4><div class="tags">${arr.map(t => `<span class="tag">${t}</span>`).join('')}</div>`); c.style.setProperty('--d', (i % 3) * 80 + 'ms'); sg.appendChild(c); });
  const cg = $('#certs');
  D.certs.forEach((ct, i) => { const c = el('a', 'cert reveal', `<span class="chk">✓</span><span>${ct.name}</span>`); c.href = ct.url; c.target = '_blank'; c.rel = 'noopener'; c.style.setProperty('--d', (i % 3) * 60 + 'ms'); cg.appendChild(c); });
  const fl = $('#faq-list');
  D.faq.forEach(f => { const d = el('details', 'reveal', `<summary><span>${f.q}</span><span class="pm">+</span></summary><div class="a">${f.a}</div>`); fl.appendChild(d); });

  /* ---- reveal observer ---- */
  let analyticsStarted = false;
  const io = new IntersectionObserver((ents) => { ents.forEach(en => { if (!en.isIntersecting) return; en.target.classList.add('in'); en.target.querySelectorAll('[data-count]').forEach(countUp); if (en.target.id === 'analytics' && !analyticsStarted) startAnalytics(); io.unobserve(en.target); }); }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, #analytics').forEach(n => io.observe(n));

  /* ---- analytics: real eras (no hobby) + a labelled projection stop ---- */
  let radar, mix, stream, cur = 0, timer = null;
  const amber = '#F6821F', cyan = '#22D3EE';
  const palette = ['#8C96A8', '#3B82F6', '#5A6578', '#22D3EE', '#F59E0B', '#F6821F', '#10B981', '#A855F7'];
  const gridC = 'rgba(228,232,239,0.12)', tickC = '#8C96A8';
  const ERAS = D.eras.filter(e => !e.hobby), PROJ = D.projection, STOPS = PROJ ? [...ERAS, PROJ] : ERAS;
  const LAST = ERAS[ERAS.length - 1];
  function startAnalytics() {
    analyticsStarted = true;
    if (typeof Chart === 'undefined') { $('#ro-role').textContent = 'Charts need network access to load.'; return; }
    Chart.defaults.font.family = "'Inter Tight', system-ui, sans-serif"; Chart.defaults.color = tickC;
    const anim = reduced ? false : { duration: 700, easing: 'easeOutQuart' };
    radar = new Chart($('#radar'), { type: 'radar', data: { labels: D.skillAxes.map(a => a.label), datasets: [{ data: [], borderColor: amber, backgroundColor: 'rgba(246,130,31,0.22)', pointBackgroundColor: amber, borderWidth: 2 }] }, options: { animation: anim, plugins: { legend: { display: false } }, scales: { r: { min: 0, max: 10, ticks: { display: false, stepSize: 2 }, grid: { color: gridC }, angleLines: { color: gridC }, pointLabels: { color: '#E4E8EF', font: { size: 11 } } } } } });
    mix = new Chart($('#mix'), { type: 'bar', data: { labels: D.mixKeys.map(k => k.label), datasets: [{ data: [], backgroundColor: D.mixKeys.map((_, i) => palette[i]), borderRadius: 6 }] }, options: { indexAxis: 'y', animation: anim, plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => c.parsed.x + '% of time' } } }, scales: { x: { min: 0, max: 80, grid: { color: gridC }, ticks: { callback: v => v + '%' } }, y: { grid: { display: false }, ticks: { color: '#E4E8EF', font: { size: 11 } } } } } });
    // timeline: era start years, the end of the last real era (2026), then the projection
    const labels = [...ERAS.map(e => e.short), '2026', ...(PROJ ? [PROJ.short] : [])];
    const realN = ERAS.length + 1; // points 0..realN-1 are real
    stream = new Chart($('#stream'), { type: 'line', data: { labels, datasets: D.mixKeys.map((k, i) => ({ label: k.label, data: [...ERAS.map(e => e.mix[k.key]), LAST.mix[k.key], ...(PROJ ? [PROJ.mix[k.key]] : [])], fill: true, backgroundColor: palette[i] + 'AA', borderColor: palette[i], borderWidth: 1, tension: 0.4, pointRadius: 0,
      segment: { borderDash: c => c.p1DataIndex >= realN ? [6, 4] : undefined, backgroundColor: c => c.p1DataIndex >= realN ? palette[i] + '55' : palette[i] + 'AA' } })) },
      options: { animation: reduced ? false : { duration: 1400 }, interaction: { mode: 'index', intersect: false }, plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } }, tooltip: { callbacks: { title: items => items[0].label + (items[0].dataIndex >= realN ? ' (projection)' : '') } } }, scales: { x: { grid: { color: gridC }, ticks: { color: '#E4E8EF' } }, y: { stacked: true, min: 0, max: 100, grid: { color: gridC }, ticks: { callback: v => v + '%' } } } } });
    const sc = $('#scrubber');
    STOPS.forEach((e, i) => { const b = el('button', e.projected ? 'proj' : '', e.label || e.short); b.onclick = () => { stop(); show(i); }; sc.appendChild(b); });
    const play = el('button', 'play', '▶ play'); play.onclick = () => (timer ? stop() : run()); sc.appendChild(play);
    const want = parseInt(hashQ.get('stop'), 10);
    if (!isNaN(want) && STOPS[want]) show(want); else { show(0); if (!reduced) run(); }
    function show(i) {
      cur = i; const e = STOPS[i], p = !!e.projected, col = p ? cyan : amber, ds = radar.data.datasets[0];
      ds.data = D.skillAxes.map(a => e.skills[a.key]); ds.borderColor = col; ds.pointBackgroundColor = col; ds.borderDash = p ? [6, 4] : []; ds.backgroundColor = p ? 'rgba(34,211,238,0.14)' : 'rgba(246,130,31,0.22)'; radar.update();
      mix.data.datasets[0].data = D.mixKeys.map(k => e.mix[k.key]); mix.update();
      $('#ro-role').textContent = e.role; $('#ro-years').textContent = e.years; $('#ro-org').textContent = p ? e.org : (e.org + ' · ' + e.chapter);
      $('#pet').hidden = !p;
      [...sc.querySelectorAll('button:not(.play)')].forEach((b, j) => b.classList.toggle('active', j === i));
    }
    function run() { play.classList.add('on'); play.textContent = '❚❚ pause'; timer = setInterval(() => show((cur + 1) % STOPS.length), 2600); }
    function stop() { clearInterval(timer); timer = null; play.classList.remove('on'); play.textContent = '▶ play'; }
  }
})();
