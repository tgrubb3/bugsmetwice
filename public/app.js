/* ============================================================
   CONTENT — everything you'd want to edit lives in this block.
   Add a project by appending an object. The grid, the count in
   the section head and the proof-row figure all follow it.
   ============================================================ */

const PROJECTS = [
  {
    name: 'Thrennel',
    status: 'Beta — 50 seats',
    dot: '#3f8f6b',
    blurb: 'An AI second brain that shows you the shape of your own thinking. You write; it draws the knowledge graph underneath.',
    tags: ['Web app', 'Knowledge graph'],
    shot: { graph: true, alt: 'Thrennel knowledge graph: thoughts orbiting topic clusters around a central core' },
    cta:  'Join the beta',
    href: '/thrennel/'
  },
  {
    name: 'TrackSense',
    status: 'Ongoing',
    dot: '#a8401d',
    blurb: 'iRacing telemetry in, driving coaching out. A small Windows agent records every lap; TrackSense lines it up against your reference by distance and tells you which corners to fix first, and exactly what to change.',
    tags: ['iRacing', 'AI coaching'],
    shot: { lap: true, alt: 'TrackSense lap replay at Lime Rock Park: your lap chasing the reference, with time lost building corner by corner' },
    cta:  'See the coaching',
    href: '/tracksense/'
  },
  {
    name: 'Automation',
    status: 'Running privately',
    dot: '#6b665b',
    blurb: 'A pre-market portfolio brief that writes and files itself every morning, plus the skill library that keeps the rest honest.',
    tags: ['Scheduled', 'Markdown out'],
    shot: { runlog: true, alt: 'A run log of the scheduled morning brief writing and filing itself' },
    cta:  'See how it runs',
    href: '/automation/'
  }
];

/* The Thrennel card's constellation. Fictional demo notes, never real
   journal data. Each cluster becomes a topic star; each note a leaf.
   `related` pairs draw the dashed cross-links (match note text exactly). */
const THRENNEL_GRAPH = {
  clusters: [
    { name: 'Ideas',         color: '#34D3D9', notes: ['Receipt auto-filer', 'Lap-delta overlay', 'Voice memo to tasks', 'Weekly review prompt', 'Garage parts tracker'] },
    { name: 'Work',          color: '#FF7A59', notes: ['Automate the recon', 'Q4 planning notes', 'Template the deck', 'Clean up shared drive'] },
    { name: 'Health',        color: '#52E0A8', notes: ['Zone 2 twice a week', 'Sleep before midnight', 'Stretch after sim', 'Meal prep Sundays'] },
    { name: 'Learning',      color: '#9B6DFF', notes: ['Trail braking basics', 'Force layouts', 'Read: Deep Work', 'Spaced repetition'] },
    { name: 'Creativity',    color: '#B57EE0', notes: ['Channel intro cut', 'Thumbnail style', 'Motion test in Remotion', 'Track map sketch'] },
    { name: 'Relationships', color: '#F06AA8', notes: ['Plan the summer trip', 'Birthday gift list', 'Dinner with friends'] }
  ],
  related: [
    ['Lap-delta overlay', 'Trail braking basics'],
    ['Lap-delta overlay', 'Track map sketch'],
    ['Force layouts', 'Motion test in Remotion'],
    ['Automate the recon', 'Receipt auto-filer'],
    ['Stretch after sim', 'Zone 2 twice a week']
  ]
};

/* The Automation card and window. The mechanics are real: a scheduled agent
   runs before the open, reads a positions file, searches for live numbers,
   writes these six sections in this order and files dated markdown, and a
   second skill audits the library. The numbers in the log and the section
   lines are a sample — no real holdings appear on this page. */
const AUTOMATION = {
  file: '2026-09-18_brief.md',
  folder: 'OneDrive\\Daily Briefs',
  steps: [
    { t: '06:45:00', text: 'scheduler → daily-portfolio-brief', kind: 'run', wait: 900 },
    { t: '06:45:02', text: 'read references/positions.md', wait: 700 },
    { t: '06:45:03', text: 'session check · US equities open today', wait: 900 },
    { t: '06:45:12', text: 'search · futures, overnight tape, crypto', wait: 1000 },
    { t: '06:45:26', text: 'write §1 executive summary', section: 0, wait: 800 },
    { t: '06:45:33', text: 'write §2 overnight & pre-market', section: 1, wait: 800 },
    { t: '06:45:47', text: 'write §3 position-by-position', section: 2, wait: 950 },
    { t: '06:46:04', text: 'write §4 macro & calendar', section: 3, wait: 800 },
    { t: '06:46:12', text: 'write §5 risk flags', section: 4, wait: 800 },
    { t: '06:46:20', text: 'write §6 sources · 9 urls', section: 5, wait: 950 },
    { t: '06:46:31', text: 'saved 2026-09-18_brief.md', kind: 'ok', wait: 1400 },
    { t: '06:46:33', text: 'skill-auditor · 26 skills · 0 blocking', kind: 'ok', wait: 2400 }
  ],
  sections: [
    { name: 'Executive Summary', line: 'One paragraph: the single thing worth knowing before the open, led by dollar impact.' },
    { name: 'Overnight & Pre-Market', line: 'Futures, the overseas tape and any holding that moved more than 3% while I was asleep.' },
    { name: 'Position-by-Position', line: 'Every holding walked in order of what it can cost me today. Quiet names get skipped, not padded.' },
    { name: 'Macro & Calendar', line: 'Releases, Fed speakers and earnings that can move the tape, with the times in ET.' },
    { name: 'Risk Flags', line: 'The concrete things that could go against the book today — concentration, event risk, macro prints.' },
    { name: 'Sources', line: 'Every claim above links to where it came from. No source, no claim.' }
  ]
};

/* TrackSense's demo session, as the app itself analyses it: two synthetic
   60 Hz laps of Lime Rock Park from its seed generator, a clean reference
   and yours with planted mistakes. Drives both the TrackSense card replay
   and the coaching section.
   - apexSpeed / dir / sigma / mistake regenerate the laps for the replay.
   - entryM / exitM / lostS and `advice` are TrackSense's own output for these
     laps (corner segmentation, time lost, and its rules-based coach, verbatim).
   - `short` is the one-line version the card readout shows. */
const TRACKSENSE_LAP = {
  track: 'Lime Rock Park',
  car: 'Mazda MX-5 Cup',
  lengthM: 2462,
  lapMs: 68550,
  refMs: 67150,
  summary: "You're 1.400s off your personal best at Lime Rock Park, and 0.59s of that is recoverable in 4 corners. Big Bend is the priority: fix it first for 0.24s.",
  corners: [
    { name: 'Big Bend', apexM: 380, apexSpeed: 26.5, dir: 1, sigma: 55, mistake: { apexDelta: -1.1, decel: 7.4 },
      entryM: 236, exitM: 412, lostS: 0.243, short: 'braking 18 m early',
      advice: "You're braking ~18 m early — hold flat 18 m longer before committing to the pedal; peak brake pressure is 20% lower than the reference — hit the pedal harder initially, then trail off; minimum speed is 4 km/h low (91.4 vs 95.4 km/h) — carry more speed to the apex and trust the front end." },
    { name: 'Left Hander', apexM: 760, apexSpeed: 24.0, dir: -1, sigma: 35,
      entryM: 656, exitM: 788, lostS: 0, short: 'matching the reference',
      advice: 'Not flagged. TrackSense finds no recoverable time here, so it stays off the coaching list.' },
    { name: 'Uphill', apexM: 1120, apexSpeed: 27.5, dir: 1, sigma: 40, mistake: { apexDelta: -2.2 },
      entryM: 1030, exitM: 1146, lostS: 0.228, short: 'min speed 7.9 km/h low',
      advice: "You're braking ~8 m early — hold flat 8 m longer before committing to the pedal; minimum speed is 7.9 km/h low (91.1 vs 99.0 km/h) — carry more speed to the apex and trust the front end." },
    { name: 'West Bend', apexM: 1560, apexSpeed: 36.0, dir: 1, sigma: 45, mistake: { apexDelta: -0.6 },
      entryM: 1488, exitM: 1582, lostS: 0.038, short: 'a gear low at the apex',
      advice: "You're in a lower gear at the apex (4 vs 5) — match the reference gear for better drive off the corner." },
    { name: 'Downhill', apexM: 2000, apexSpeed: 31.0, dir: 1, sigma: 40, mistake: { apexDelta: -0.8, lagM: 16 },
      entryM: 1898, exitM: 2024, lostS: 0.078, short: 'throttle 14 m late',
      advice: 'Minimum speed is 2.9 km/h low (108.7 vs 111.6 km/h) — carry more speed to the apex and trust the front end; you\'re getting to throttle ~14 m later than the reference — start feeding power as soon as the car rotates.' }
  ]
};

const PROOF = [
  { n: () => PROJECTS.length, l: 'projects live or in beta' },
  { n: () => '1',             l: 'self-proclaimed coder' },
  { n: () => '24 Hours',      l: 'reply time (hopefully)' },
  { n: () => '∞',             l: 'coffees drank' }
];


/* ============================================================
   RENDER
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function shotMarkup(shot) {
  if (shot && shot.runlog) {
    return `<div class="frame frame--shot frame--run">
      <span class="graph-hud graph-hud--top" aria-hidden="true"><i></i>CRON · WEEKDAYS 06:45 ET</span>
      <div class="rl__log" role="img" aria-label="${esc(shot.alt || '')}"></div>
      <span class="rl__chip" hidden>● FILED</span>
    </div>`;
  }
  if (shot && shot.lap) {
    return `<div class="frame frame--shot frame--graph frame--lap">
      <canvas class="tslap" role="img" aria-label="${esc(shot.alt || '')}"></canvas>
      <span class="graph-hud graph-hud--top" aria-hidden="true"><i></i>REPLAY · LIME ROCK PARK</span>
      <span class="graph-hud graph-hud--top graph-hud--right" aria-hidden="true"></span>
      <span class="graph-hud graph-hud--foot" aria-hidden="true"></span>
    </div>`;
  }
  if (shot && shot.graph) {
    return `<div class="frame frame--shot frame--graph">
      <canvas class="tgraph" role="img" aria-label="${esc(shot.alt || '')}"></canvas>
      <span class="graph-hud graph-hud--top" aria-hidden="true"><i></i><span class="tgraph-count"></span></span>
      <span class="graph-hud graph-hud--foot" aria-hidden="true"></span>
    </div>`;
  }
  if (shot && typeof shot === 'object' && shot.img) {
    return `<div class="frame frame--shot"><img src="${esc(shot.img)}" alt="${esc(shot.alt || '')}"></div>`;
  }
  return `<div class="frame frame--shot">${esc(shot || '')}</div>`;
}

function renderProof() {
  $('#proof').innerHTML = PROOF.map((p, i) => `
    <div class="proof__item" style="--i:${i}">
      <span class="proof__n serif">${esc(p.n())}</span>
      <span class="proof__l">${esc(p.l)}</span>
    </div>`).join('');
}

function renderProjects() {
  $('#projectCount').textContent = `${PROJECTS.length} project${PROJECTS.length === 1 ? '' : 's'}`;
  $('#cards').innerHTML = PROJECTS.map((p, i) => `
    <article class="card" style="--i:${i}">
      <span class="badge"><span class="badge__dot" style="background:${esc(p.dot)}"></span>${esc(p.status)}</span>
      ${shotMarkup(p.shot)}
      <h3>${esc(p.name)}</h3>
      <p class="card__blurb">${esc(p.blurb)}</p>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      <a class="card__cta" href="${esc(p.href)}">${esc(p.cta)} →</a>
    </article>`).join('');
}

/* ---- TrackSense coaching chart ---- */
const CORNERS = TRACKSENSE_LAP.corners;
const PLOT_MAX = Math.max(...CORNERS.map((c) => c.lostS)) * 1.1;
let picked = CORNERS.reduce((worst, c, i) => (c.lostS > CORNERS[worst].lostS ? i : worst), 0);

function renderChart(root = document) {
  $('#lapStamp').textContent = `Demo session · ${TRACKSENSE_LAP.track} · ${TRACKSENSE_LAP.car}`;
  $('#lapSummary').textContent = TRACKSENSE_LAP.summary;

  $('#plot').innerHTML = CORNERS.map((c, i) => `
    <button class="corner" type="button" data-i="${i}"
            aria-pressed="${i === picked}"
            aria-label="${esc(c.name)}, ${c.lostS.toFixed(2)} seconds lost">
      <span class="bar" style="height:0px"></span>
    </button>`).join('');

  $('#plotLabels').innerHTML = CORNERS.map((c, i) =>
    `<span class="${i === picked ? 'on' : ''}">${esc(c.name)}</span>`).join('');

  growBars();
  const win = root.closest && root.closest('dialog.appwin');
  if (win) win.addEventListener('appwin:open', growBars);

  $('#plot').addEventListener('click', (e) => {
    const btn = e.target.closest('.corner');
    if (!btn) return;
    picked = Number(btn.dataset.i);
    syncChart();
  });
}

// Drop the bars to zero, then grow them over two frames so the height transition plays.
function growBars() {
  const bars = document.querySelectorAll('#plot .bar');
  bars.forEach((bar) => { bar.style.height = '0px'; });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    bars.forEach((bar, i) => {
      bar.style.height = Math.round((CORNERS[i].lostS / PLOT_MAX) * 186) + 6 + 'px';
    });
  }));
}

function syncChart() {
  document.querySelectorAll('#plot .corner').forEach((btn, i) =>
    btn.setAttribute('aria-pressed', String(i === picked)));
  document.querySelectorAll('#plotLabels span').forEach((s, i) =>
    s.classList.toggle('on', i === picked));
  renderReadout();
}

function renderReadout() {
  const c = CORNERS[picked];
  const flagged = CORNERS.filter((x) => x.lostS > 0);
  const total = flagged.reduce((sum, x) => sum + x.lostS, 0);
  $('#roName').textContent  = `${c.name} — time lost`;
  $('#roDelta').textContent = `+${c.lostS.toFixed(2)}s`;
  $('#roNote').textContent  = c.advice;
  $('#roLap').textContent   = `Lap ${tsLapClock(TRACKSENSE_LAP.lapMs / 1000)} · personal best ${tsLapClock(TRACKSENSE_LAP.refMs / 1000)}`;
  $('#roTotal').textContent = `Recoverable: ${total.toFixed(2)}s in ${flagged.length} corners`;
}

/* ---- Automation run log ----
   Replays one morning of the scheduled brief: the job wakes, reads the
   position list, searches, writes its six sections in order, files the dated
   markdown, and the auditor sweeps the skill library. DOM, not canvas — it is
   text. Runs only while on screen; a click on a section pins it. */
function initRunLog(root) {
  const log = root.querySelector('.rl__log');
  const doc = root.querySelector('.rl__doc');
  const chip = root.querySelector('.rl__chip');
  const steps = AUTOMATION.steps;
  const MAX_LINES = doc ? 14 : 6;          // the card shows only the tail
  let i = 0, timer = null, visible = false, pinned = null;

  if (doc) {
    doc.innerHTML = AUTOMATION.sections.map((sec, n) => `
      <button class="rl__sec" type="button" data-n="${n}" aria-pressed="false">
        <span class="rl__num">${n + 1}</span>
        <span class="rl__name">${esc(sec.name)}</span>
        <span class="rl__line-text">${esc(sec.line)}</span>
      </button>`).join('');
    doc.addEventListener('click', (e) => {
      const b = e.target.closest('.rl__sec');
      if (!b) return;
      const n = Number(b.dataset.n);
      pinned = pinned === n ? null : n;
      mark(pinned === null ? -1 : pinned);
      if (pinned !== null) stop(); else start();
    });
  }

  function mark(n) {
    if (!doc) return;
    [...doc.children].forEach((el, k) => {
      el.classList.toggle('on', k === n);
      el.setAttribute('aria-pressed', String(k === n));
      el.classList.toggle('done', k < n);
    });
  }

  function reset() {
    log.innerHTML = '';
    i = 0;
    mark(-1);
    if (chip) chip.hidden = true;
  }

  function push(step) {
    const el = document.createElement('div');
    el.className = 'rl__line' + (step.kind ? ' is-' + step.kind : '');
    el.innerHTML = `<span class="rl__t">${esc(step.t)}</span>${esc(step.text)}`;
    log.appendChild(el);
    while (log.children.length > MAX_LINES) log.removeChild(log.firstChild);
    if (step.section !== undefined && pinned === null) mark(step.section);
    if (step.kind === 'ok' && chip) chip.hidden = false;
  }

  function tick() {
    push(steps[i]);
    const wait = steps[i].wait || 700;
    i++;
    timer = setTimeout(i < steps.length ? tick : () => { reset(); tick(); }, i < steps.length ? wait : 4200);
  }

  function start() {
    if (timer || !visible || pinned !== null) return;
    if (tgReduced.matches) { still(); return; }
    if (i === 0) reset();
    timer = setTimeout(tick, 300);
  }
  function stop() { clearTimeout(timer); timer = null; }

  function still() {              // reduced motion: the finished run, all at once
    reset();
    steps.forEach(push);
    mark(AUTOMATION.sections.length - 1);
  }

  const onVisible = (v) => { visible = v; v ? start() : stop(); };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => onVisible(e.isIntersecting), { threshold: 0.15 }).observe(root);
  } else {
    onVisible(true);
  }
  document.addEventListener('visibilitychange', () => (document.visibilityState === 'visible' ? start() : stop()));
  tgReduced.addEventListener('change', () => { stop(); i = 0; start(); });
}

/* ---- Thrennel constellation ----
   A trimmed port of the graph engine in the Thrennel app (daily-thoughts/app.js):
   same radial layout, palette, star fills, coronas and link flow. No pan/zoom:
   it lives inside a card and must never hijack page scroll. It only animates
   while on screen, and holds a still frame under reduced motion. */
const TG_GOLD = '#F5C84B';
const TG_REACH = 345;   // graph-space radius the layout must fit inside the frame
const tgReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

function tgRgba(hex, a) {
  const n = parseInt(hex.replace('#', ''), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
function tgRand(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function buildConstellation() {
  const rnd = tgRand(11);
  const nodes = [{ id: 'core', x: 0, y: 0, r: 13, color: TG_GOLD, label: 'THRENNEL', kind: 'core', phase: 0 }];
  const links = [];
  const clusters = THRENNEL_GRAPH.clusters;

  clusters.forEach((c, i) => {
    const a = (i / clusters.length) * Math.PI * 2 - Math.PI / 2;
    const tid = 'topic-' + i;
    nodes.push({ id: tid, x: Math.cos(a) * 185, y: Math.sin(a) * 185, r: 10,
      color: c.color, label: c.name, kind: 'topic', count: c.notes.length, phase: rnd() * 6 });
    links.push({ a: 'core', b: tid, flow: 0.7 });

    const step = Math.min(0.42, 1.8 / Math.max(c.notes.length, 1));
    c.notes.forEach((note, j) => {
      const la = a + (j - (c.notes.length - 1) / 2) * step;
      const lr = 300 + (j % 2) * 34;
      const id = `leaf-${i}-${j}`;
      nodes.push({ id, x: Math.cos(la) * lr, y: Math.sin(la) * lr, r: 4.5,
        color: c.color, label: note, topic: c.name, kind: 'leaf', phase: rnd() * 6 });
      links.push({ a: tid, b: id, flow: 0.55 });
    });
  });

  const idOf = Object.fromEntries(nodes.map((n) => [n.label, n.id]));
  THRENNEL_GRAPH.related.forEach(([a, b]) => {
    if (idOf[a] && idOf[b]) links.push({ a: idOf[a], b: idOf[b], related: true });
  });

  // boot outward from the core, one node every 22ms, as the app does on load
  nodes.forEach((n, i) => { n.delay = i * 0.022; });

  const specks = [...Array(90)].map(() => ({
    x: (rnd() - 0.5) * 820, y: (rnd() - 0.5) * 820,
    r: 0.4 + rnd() * 1.1, a: 0.06 + rnd() * 0.22, ph: rnd() * 6.28
  }));
  const nebulae = ['#B57EE0', '#34D3D9', '#9B6DFF'].map((col) => ({
    x: (rnd() - 0.5) * 520, y: (rnd() - 0.5) * 420, r: 200 + rnd() * 160, col, a: 0.07 + rnd() * 0.03
  }));

  return { nodes, links, specks, nebulae, byId: Object.fromEntries(nodes.map((n) => [n.id, n])) };
}

function initConstellation(canvas) {
  const g = buildConstellation();
  const ctx = canvas.getContext('2d');
  const frame = canvas.parentElement;
  const foot = frame.querySelector('.graph-hud--foot');
  const idle = window.matchMedia('(hover: hover)').matches ? 'HOVER A STAR' : 'TAP A STAR';
  const leafCount = g.nodes.filter((n) => n.kind === 'leaf').length;
  frame.querySelector('.tgraph-count').textContent = `LIVE · ${g.nodes.length} NODES`;

  let t = 0, last = 0, bornAt = null, running = false, visible = false;
  let hoverId = null, pinnedId = null;
  let pos = {}, rk = 1;

  // unit-radius gradients, scaled into place with transforms (cached, as in the app)
  const grads = {};
  function grad(kind, col) {
    const key = kind + col;
    if (grads[key]) return grads[key];
    let gr;
    if (kind === 'star') {
      gr = ctx.createRadialGradient(-0.2, -0.25, 0, 0, 0, 1.35);
      gr.addColorStop(0, '#FFF7E2'); gr.addColorStop(0.42, col); gr.addColorStop(1, tgRgba(col, 0.55));
    } else if (kind === 'corona') {
      gr = ctx.createRadialGradient(0, 0, 0.15, 0, 0, 1);
      gr.addColorStop(0, tgRgba(col, 0.35)); gr.addColorStop(1, tgRgba(col, 0));
    } else {
      gr = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      gr.addColorStop(0, tgRgba(col, 1)); gr.addColorStop(1, tgRgba(col, 0));
    }
    return (grads[key] = gr);
  }

  function neighbors(id) {
    const set = new Set([id]);
    g.links.forEach((l) => { if (l.a === id) set.add(l.b); if (l.b === id) set.add(l.a); });
    return set;
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.round(rect.width), H = Math.round(rect.height);
    if (canvas.width !== W * dpr || canvas.height !== H * dpr) {
      canvas.width = W * dpr; canvas.height = H * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    // stretch the round layout into the wide frame; node size scales separately
    const pad = 18;
    const sx = (W / 2 - pad) / TG_REACH, sy = (H / 2 - pad) / TG_REACH;
    const cx = W / 2, cy = H / 2;
    rk = Math.max(0.5, Math.min(1.15, Math.min(W, H) / 300));
    const still = tgReduced.matches;
    const wall = performance.now() / 1000;

    const ease = {};
    pos = {};
    g.nodes.forEach((n) => {
      const dx = Math.sin(t * 0.35 + n.phase) * 7;
      const dy = Math.cos(t * 0.3 + n.phase * 1.3) * 7;
      pos[n.id] = { x: cx + (n.x + dx) * sx, y: cy + (n.y + dy) * sy };
      if (still) { ease[n.id] = 1; return; }
      const k = bornAt === null ? 0 : Math.max(0, Math.min(1, (wall - bornAt - n.delay) / 0.55));
      ease[n.id] = 1 - Math.pow(1 - k, 3);
    });

    // atmosphere: soft nebulae + a shimmering dust field
    g.nebulae.forEach((nb) => {
      ctx.save();
      ctx.translate(cx + nb.x * sx, cy + nb.y * sy);
      ctx.scale(nb.r * sx, nb.r * sy);
      ctx.globalAlpha = nb.a;
      ctx.fillStyle = grad('nebula', nb.col);
      ctx.fillRect(-1, -1, 2, 2);
      ctx.restore();
    });
    g.specks.forEach((sp) => {
      const x = cx + sp.x * sx, y = cy + sp.y * sy;
      if (x < -2 || x > W + 2 || y < -2 || y > H + 2) return;
      ctx.globalAlpha = sp.a * (0.6 + 0.4 * Math.sin(t * 0.5 + sp.ph));
      ctx.beginPath();
      ctx.arc(x, y, sp.r, 0, Math.PI * 2);
      ctx.fillStyle = '#EDE7D8';
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    const activeId = hoverId || pinnedId;
    const hi = activeId ? neighbors(activeId) : null;

    // links, with a bead of light flowing outward along each
    g.links.forEach((l) => {
      const a = pos[l.a], b = pos[l.b];
      const lit = hi && hi.has(l.a) && hi.has(l.b);
      ctx.globalAlpha = (hi && !lit ? 0.1 : 1) * Math.min(ease[l.a], ease[l.b]);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      if (l.related) {
        ctx.setLineDash([3, 4]);
        ctx.strokeStyle = tgRgba(TG_GOLD, lit ? 0.6 : 0.16);
      } else {
        ctx.strokeStyle = tgRgba(TG_GOLD, lit ? 0.3 : 0.14);
      }
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
      if (!l.related && !still) {
        const f = (t * l.flow) % 1;
        ctx.beginPath();
        ctx.arc(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f, 1.6 * rk + 0.6, 0, Math.PI * 2);
        ctx.fillStyle = tgRgba(TG_GOLD, 0.8);
        ctx.shadowColor = TG_GOLD; ctx.shadowBlur = 8;
        ctx.fill(); ctx.shadowBlur = 0;
      }
    });
    ctx.globalAlpha = 1;

    g.nodes.forEach((n) => {
      const p = pos[n.id];
      const grow = ease[n.id];
      if (grow <= 0) return;
      const inFocus = !hi || hi.has(n.id);
      ctx.globalAlpha = (inFocus ? 1 : 0.15) * grow;
      const pulse = 1 + Math.sin(t * 2 + n.phase) * 0.12;
      const r = n.r * rk * pulse * grow;
      // a subset of leaves twinkle: a sharp, occasional flare
      const flare = !still && n.kind === 'leaf' && (n.phase * 7) % 1 < 0.35
        ? Math.pow(Math.max(0, Math.sin(t * 0.8 + n.phase * 5)), 24) : 0;

      if (n.kind !== 'leaf') {
        ctx.save();
        ctx.translate(p.x, p.y); ctx.scale(r * 2.7, r * 2.7);
        ctx.fillStyle = grad('corona', n.color);
        ctx.beginPath(); ctx.arc(0, 0, 1, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }

      ctx.save();
      ctx.translate(p.x, p.y); ctx.scale(r, r);
      ctx.beginPath(); ctx.arc(0, 0, 1, 0, Math.PI * 2);
      ctx.fillStyle = grad('star', n.color);
      ctx.shadowColor = n.color;
      ctx.shadowBlur = ((n.kind === 'leaf' ? 9 : 20) + flare * 22) * pulse;
      ctx.fill();
      ctx.restore();
      ctx.shadowBlur = 0;

      if (flare > 0.05) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * (0.5 + flare * 0.7), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.55 * flare})`;
        ctx.fill();
      }
      if (n.kind !== 'leaf') {   // hubs wear the gold instrument ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 5 * rk, 0, Math.PI * 2);
        ctx.strokeStyle = tgRgba(TG_GOLD, n.kind === 'core' ? 0.5 : 0.38);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      if (n.id === pinnedId) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 9 * rk, 0, Math.PI * 2);
        ctx.strokeStyle = tgRgba(TG_GOLD, 0.8);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      if (n.kind !== 'leaf') {   // leaf text goes in the footer readout instead
        ctx.font = "9px 'JetBrains Mono', Consolas, monospace";
        const w = ctx.measureText(n.label).width;
        ctx.fillStyle = '#EDE7D8';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, Math.max(w / 2 + 4, Math.min(W - w / 2 - 4, p.x)), p.y + r + 12);
      }
    });
    ctx.globalAlpha = 1;
  }

  function readout() {
    const n = g.byId[hoverId || pinnedId];
    if (!n) { foot.textContent = idle; return; }
    const text = n.kind === 'core' ? `THRENNEL · ${leafCount} THOUGHTS`
      : n.kind === 'topic' ? `${n.label.toUpperCase()} · ${n.count} THOUGHTS`
      : `${n.topic.toUpperCase()} — ${n.label}`;
    foot.innerHTML = `<i style="background:${esc(n.color)};color:${esc(n.color)}"></i>${esc(text)}`;
  }

  function changed() {
    readout();
    if (!running) draw();
  }

  function hitAt(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    for (let i = g.nodes.length - 1; i >= 0; i--) {
      const n = g.nodes[i], p = pos[n.id];
      if (!p) continue;
      const hr = Math.max(n.r * rk + 4, 10);
      if ((x - p.x) ** 2 + (y - p.y) ** 2 <= hr * hr) return n;
    }
    return null;
  }

  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const hit = hitAt(e);
    canvas.style.cursor = hit ? 'pointer' : '';
    const id = hit ? hit.id : null;
    if (id !== hoverId) { hoverId = id; changed(); }
  });
  canvas.addEventListener('pointerleave', () => {
    if (hoverId) { hoverId = null; changed(); }
  });
  canvas.addEventListener('click', (e) => {
    const hit = hitAt(e);
    pinnedId = hit && hit.id !== pinnedId ? hit.id : null;
    changed();
  });

  function tick(now) {
    if (!running) return;
    t += Math.min(0.1, (now - last) / 1000);
    last = now;
    draw();
    requestAnimationFrame(tick);
  }
  function setRunning(on) {
    on = on && !tgReduced.matches && document.visibilityState === 'visible';
    if (on === running) return;
    running = on;
    if (on) { last = performance.now(); requestAnimationFrame(tick); }
  }
  function onVisible(isVisible) {
    visible = isVisible;
    if (visible && bornAt === null) bornAt = performance.now() / 1000 + 0.25;
    setRunning(visible);
    if (!running) draw();
  }

  readout();
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => onVisible(entry.isIntersecting), { threshold: 0.2 }).observe(canvas);
  } else {
    onVisible(true);
  }
  document.addEventListener('visibilitychange', () => setRunning(visible));
  if ('ResizeObserver' in window) new ResizeObserver(() => { if (!running) draw(); }).observe(canvas);
  if (document.fonts) document.fonts.ready.then(() => { if (!running) draw(); });
  tgReduced.addEventListener('change', () => { setRunning(visible); draw(); });
}

/* ---- TrackSense lap replay ----
   A trimmed port of TrackSense (tracksense/apps/web): the seed's lap generator
   (curvature -> grip ceiling -> braking pass -> power pass), the delta trace
   aligned by distance, and the track map rebuilt from curvature with the
   same closure correction. Your lap (amber) chases the reference (cyan ghost)
   while the delta draws in beside it. Hover or tap to scrub. */
const TS_RED = '#e10600', TS_AMBER = '#ffb300', TS_CYAN = '#29b6f6';
const TS_PLAY = 9;     // replay speed vs. real time: a 68s lap runs in ~7.5s
const TS_HOLD = 2.6;   // seconds to hold the finished lap before going again
const TS_STEP = 6;     // meters per drawn point

function tsCurvature(d, corners, N) {
  let k = 0;
  for (const c of corners) {
    const r = (c.apexSpeed * c.apexSpeed) / 10.5;
    let dd = Math.abs(d - c.apexM);
    dd = Math.min(dd, N - dd);
    k += (c.dir / r) * Math.exp(-(dd * dd) / (2 * c.sigma * c.sigma));
  }
  return k;
}

// Seconds to reach each meter of the lap. `withMistakes` applies each corner's `mistake`.
function tsLapTimes(withMistakes) {
  const N = TRACKSENSE_LAP.lengthM;
  const V_TOP = 51, LAT_MAX = 10.5, A_MAX = 4.5, DECEL = 9.2;
  const corners = TRACKSENSE_LAP.corners.map((c) => {
    const m = (withMistakes && c.mistake) || {};
    return { ...c, apexSpeed: c.apexSpeed + (m.apexDelta || 0), decel: m.decel || DECEL, lagM: m.lagM || 0 };
  });

  const v = new Array(N);
  for (let i = 0; i < N; i++) {
    const k = Math.abs(tsCurvature(i, corners, N));
    v[i] = Math.min(V_TOP, k > 1e-6 ? Math.sqrt(LAT_MAX / k) : V_TOP);
  }
  corners.forEach((c) => { const a = Math.round(c.apexM) % N; v[a] = Math.min(v[a], c.apexSpeed); });

  const decelAt = (i) => {
    let d = DECEL;
    corners.forEach((c) => { let dd = c.apexM - i; if (dd < 0) dd += N; if (dd < 260) d = Math.min(d, c.decel); });
    return d;
  };
  const inLag = (i) => corners.some((c) => { let dd = i - c.apexM; if (dd < 0) dd += N; return dd < c.lagM; });

  for (let pass = 0; pass < 2; pass++) {            // braking: work backwards from each apex
    for (let j = 2 * N - 1; j >= 0; j--) {
      const i = j % N, next = (i + 1) % N;
      v[i] = Math.min(v[i], Math.sqrt(v[next] * v[next] + 2 * decelAt(i)));
    }
  }
  for (let pass = 0; pass < 2; pass++) {            // power: accelerate out, unless late to throttle
    for (let j = 0; j < 2 * N; j++) {
      const i = j % N, next = (i + 1) % N;
      const a = inLag(i) ? 0 : Math.max(0.2, A_MAX * (1 - v[i] / V_TOP));
      v[next] = Math.min(v[next], Math.sqrt(v[i] * v[i] + 2 * a));
    }
  }

  const t = new Float64Array(N + 1);
  for (let i = 0; i < N; i++) t[i + 1] = t[i] + 2 / (v[i] + v[(i + 1) % N]);
  return t;
}

function buildLapReplay() {
  const N = TRACKSENSE_LAP.lengthM;
  const ref = tsLapTimes(false), you = tsLapTimes(true);
  const n = Math.ceil(N / TS_STEP) + 1;
  const dist = [], delta = [], x = [], y = [];
  let heading = 0, px = 0, py = 0;
  for (let i = 0; i < n; i++) {
    const d = Math.min(N, i * TS_STEP);
    if (i > 0) {
      const ds = d - dist[i - 1];
      heading += tsCurvature(d, TRACKSENSE_LAP.corners, N) * ds;
      px += Math.cos(heading) * ds; py += Math.sin(heading) * ds;
    }
    dist.push(d); delta.push(you[d] - ref[d]); x.push(px); y.push(py);
  }

  // closure correction, then a unit box centred on the origin (as trackmap.ts)
  const gx = x[n - 1] - x[0], gy = y[n - 1] - y[0];
  for (let i = 0; i < n; i++) { const f = i / (n - 1); x[i] -= gx * f; y[i] -= gy * f; }
  const minX = Math.min(...x), maxX = Math.max(...x), minY = Math.min(...y), maxY = Math.max(...y);
  const s = 1 / Math.max(maxX - minX, maxY - minY);
  for (let i = 0; i < n; i++) { x[i] = (x[i] - (minX + maxX) / 2) * s; y[i] = (y[i] - (minY + maxY) / 2) * s; }

  const at = (d) => delta[Math.max(0, Math.min(n - 1, Math.round(d / TS_STEP)))];
  const corners = TRACKSENSE_LAP.corners;   // the app's own segmentation and time lost
  const worst = corners.reduce((a, b) => (b.lostS > a.lostS ? b : a));

  return { N, ref, you, n, dist, delta, x, y, at, corners, worst,
    maxDelta: Math.max(...delta), minDelta: Math.min(0, ...delta) };
}

// meters reached after `tau` seconds, from a seconds-per-meter table
function tsDistAt(t, tau) {
  let lo = 0, hi = t.length - 1;
  if (tau >= t[hi]) return hi;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (t[mid] <= tau) lo = mid; else hi = mid; }
  return lo + (tau - t[lo]) / (t[hi] - t[lo]);
}

const tsLapClock = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(3).padStart(6, '0')}`;
const tsSigned = (s, dp = 3) => `${s >= 0 ? '+' : '−'}${Math.abs(s).toFixed(dp)}s`;

function initLapReplay(canvas) {
  const L = buildLapReplay();
  const ctx = canvas.getContext('2d');
  const frame = canvas.parentElement;
  const foot = frame.querySelector('.graph-hud--foot');
  const live = frame.querySelector('.graph-hud--right');
  const lapEnd = L.you[L.N];

  let tau = 0, hold = 0, last = 0, started = false, running = false, visible = false;
  let hoverM = null, pinnedM = null;
  let box = null;   // layout from the last draw, for hit-testing
  let lastFoot = '', lastLive = '';

  function layout(W, H) {
    const top = 24, bottom = 22, pad = 10;
    const size = Math.min(H - top - bottom, W * 0.44);
    const map = { x: pad, y: top + (H - top - bottom - size) / 2, s: size };
    const chart = { x0: pad + size + 14, x1: W - pad, y0: top + 2, y1: H - bottom - 2 };
    return { map, chart };
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.round(rect.width), H = Math.round(rect.height);
    if (canvas.width !== W * dpr || canvas.height !== H * dpr) {
      canvas.width = W * dpr; canvas.height = H * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    box = layout(W, H);
    const { map, chart } = box;

    const scrubM = hoverM ?? pinnedM;
    const still = tgReduced.matches;
    // how much of the lap is "driven": all of it when scrubbing, finished, or still
    const youM = scrubM !== null || still ? L.N : tsDistAt(L.you, tau);
    const refM = tsDistAt(L.ref, Math.min(tau, L.ref[L.N]));
    const upto = Math.min(L.n - 1, Math.floor(youM / TS_STEP));

    // ---- track map ----
    const mx = (v) => map.x + map.s / 2 + v * (map.s - 10);
    const my = (v) => map.y + map.s / 2 + v * (map.s - 10);
    const trace = (from, to) => {
      ctx.beginPath();
      ctx.moveTo(mx(L.x[from]), my(L.y[from]));
      for (let i = from + 1; i <= to; i++) ctx.lineTo(mx(L.x[i]), my(L.y[i]));
    };
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = 6; ctx.strokeStyle = '#26262f';
    trace(0, L.n - 1); ctx.closePath(); ctx.stroke();

    // the driven part, coloured by where time went: red = losing, green = gaining
    ctx.lineWidth = 2.5;
    for (let i = 1; i <= upto; i++) {
      // emphasis curve: small straight-line losses stay dim so the corners stand out
      const v = Math.max(-1, Math.min(1, (L.delta[i] - L.delta[i - 1]) * 70));
      const a = (0.18 + 0.82 * Math.pow(Math.abs(v), 1.5)).toFixed(3);
      ctx.strokeStyle = v > 0 ? `rgba(225,6,0,${a})` : `rgba(0,210,106,${a})`;
      ctx.beginPath();
      ctx.moveTo(mx(L.x[i - 1]), my(L.y[i - 1]));
      ctx.lineTo(mx(L.x[i]), my(L.y[i]));
      ctx.stroke();
    }

    ctx.fillStyle = '#ffffff';                        // start / finish
    ctx.beginPath(); ctx.arc(mx(L.x[0]), my(L.y[0]), 2.5, 0, Math.PI * 2); ctx.fill();

    const pointAt = (m) => {
      const f = Math.max(0, Math.min(L.n - 1, m / TS_STEP));
      const i = Math.floor(f), j = Math.min(L.n - 1, i + 1), k = f - i;
      return { x: mx(L.x[i] + (L.x[j] - L.x[i]) * k), y: my(L.y[i] + (L.y[j] - L.y[i]) * k) };
    };
    const car = (p, col, r) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 10; ctx.fill(); ctx.shadowBlur = 0;
      ctx.lineWidth = 1.2; ctx.strokeStyle = '#0a0a0c'; ctx.stroke();
    };
    if (scrubM !== null) {
      car(pointAt(scrubM), TS_AMBER, 4);
    } else if (!still && tau < lapEnd) {
      car(pointAt(refM), TS_CYAN, 3);                  // reference ghost
      car(pointAt(youM), TS_AMBER, 3.5);               // you
    }

    // ---- delta chart ----
    const span = Math.max(0.1, L.maxDelta - L.minDelta);
    const lo = L.minDelta - span * 0.08, hi = L.maxDelta + span * 0.12;
    const X = (m) => chart.x0 + (m / L.N) * (chart.x1 - chart.x0);
    const Y = (s) => chart.y0 + (1 - (s - lo) / (hi - lo)) * (chart.y1 - chart.y0);
    const activeM = scrubM ?? youM;
    const inCorner = L.corners.find((c) => activeM >= c.entryM && activeM <= c.exitM && (scrubM !== null || tau < lapEnd));

    L.corners.forEach((c) => {
      ctx.fillStyle = c === inCorner ? 'rgba(255,179,0,0.14)' : 'rgba(255,179,0,0.05)';
      ctx.fillRect(X(c.entryM), chart.y0, X(c.exitM) - X(c.entryM), chart.y1 - chart.y0);
    });

    ctx.font = "8px 'JetBrains Mono', Consolas, monospace";
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'left';
    ctx.strokeStyle = '#26262f'; ctx.lineWidth = 1;
    const topS = Math.floor(L.maxDelta * 2) / 2;       // a round gridline under the peak
    ctx.beginPath(); ctx.moveTo(chart.x0, Y(topS)); ctx.lineTo(chart.x1, Y(topS)); ctx.stroke();
    ctx.fillText(`+${topS.toFixed(1)}s`, chart.x0 + 2, Y(topS) - 3);
    ctx.strokeStyle = '#4b5563'; ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(chart.x0, Y(0)); ctx.lineTo(chart.x1, Y(0)); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillText('0', chart.x0 + 2, Y(0) - 3);

    if (upto > 0) {
      ctx.beginPath();
      ctx.moveTo(X(0), Y(0));
      for (let i = 0; i <= upto; i++) ctx.lineTo(X(L.dist[i]), Y(L.delta[i]));
      ctx.lineTo(X(L.dist[upto]), Y(0));
      ctx.closePath();
      const gr = ctx.createLinearGradient(0, Y(hi), 0, Y(0));
      gr.addColorStop(0, 'rgba(225,6,0,0.30)'); gr.addColorStop(1, 'rgba(225,6,0,0.02)');
      ctx.fillStyle = gr; ctx.fill();

      ctx.beginPath();
      for (let i = 0; i <= upto; i++) {
        if (i === 0) ctx.moveTo(X(L.dist[i]), Y(L.delta[i]));
        else ctx.lineTo(X(L.dist[i]), Y(L.delta[i]));
      }
      ctx.strokeStyle = TS_AMBER; ctx.lineWidth = 1.6; ctx.stroke();
    }

    if (scrubM !== null) {
      const x = X(scrubM);
      ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, chart.y0); ctx.lineTo(x, chart.y1); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, Y(L.at(scrubM)), 3, 0, Math.PI * 2);
      ctx.fillStyle = TS_AMBER; ctx.fill();
    } else if (!still && tau < lapEnd && upto > 0) {
      ctx.beginPath(); ctx.arc(X(L.dist[upto]), Y(L.delta[upto]), 2.5, 0, Math.PI * 2);
      ctx.fillStyle = TS_AMBER; ctx.shadowColor = TS_AMBER; ctx.shadowBlur = 8; ctx.fill(); ctx.shadowBlur = 0;
    }

    // ---- readouts ----
    const liveText = tsSigned(scrubM !== null ? L.at(scrubM) : L.at(youM));
    if (liveText !== lastLive) { live.textContent = liveText; lastLive = liveText; }

    let dot = TS_AMBER, text;
    if (inCorner) {
      dot = TS_RED;
      text = `${inCorner.name.toUpperCase()} ${tsSigned(inCorner.lostS, 2)} — ${inCorner.short}`;
    } else if (scrubM === null && (still || tau >= lapEnd)) {
      dot = TS_RED;
      text = `FIX FIRST: ${L.worst.name.toUpperCase()} ${tsSigned(L.worst.lostS, 2)} — ${L.worst.short}`;
    } else {
      text = `PB ${tsLapClock(TRACKSENSE_LAP.refMs / 1000)} · YOU ${tsLapClock(TRACKSENSE_LAP.lapMs / 1000)}`;
    }
    const html = `<i style="background:${dot};color:${dot}"></i>${esc(text)}`;
    if (html !== lastFoot) { foot.innerHTML = html; lastFoot = html; }
  }

  // pointer → lap distance, from either the chart or the map
  function metersAt(e) {
    if (!box) return null;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    const { map, chart } = box;
    if (px >= chart.x0 && px <= chart.x1 && py >= chart.y0 - 6 && py <= chart.y1 + 6) {
      return ((px - chart.x0) / (chart.x1 - chart.x0)) * L.N;
    }
    let best = -1, bestD = 14 * 14;
    for (let i = 0; i < L.n; i++) {
      const dx = map.x + map.s / 2 + L.x[i] * (map.s - 10) - px;
      const dy = map.y + map.s / 2 + L.y[i] * (map.s - 10) - py;
      if (dx * dx + dy * dy < bestD) { bestD = dx * dx + dy * dy; best = i; }
    }
    return best < 0 ? null : L.dist[best];
  }

  function changed() { if (!running) draw(); }

  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const m = metersAt(e);
    canvas.style.cursor = m === null ? '' : 'crosshair';
    if (m !== hoverM) { hoverM = m; changed(); }
  });
  canvas.addEventListener('pointerleave', () => {
    if (hoverM !== null) { hoverM = null; changed(); }
  });
  canvas.addEventListener('click', (e) => {
    const m = metersAt(e);
    pinnedM = pinnedM === null && m !== null ? m : null;
    changed();
  });

  function tick(now) {
    if (!running) return;
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    if (hoverM === null && pinnedM === null) {         // scrubbing pauses the replay
      if (tau < lapEnd) tau = Math.min(lapEnd, tau + dt * TS_PLAY);
      else if ((hold += dt) > TS_HOLD) { tau = 0; hold = 0; }
    }
    draw();
    requestAnimationFrame(tick);
  }
  function setRunning(on) {
    on = on && started && !tgReduced.matches && document.visibilityState === 'visible';
    if (on === running) return;
    running = on;
    if (on) { last = performance.now(); requestAnimationFrame(tick); }
  }
  function onVisible(isVisible) {
    visible = isVisible;
    if (visible) started = true;
    setRunning(visible);
    if (!running) draw();
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => onVisible(entry.isIntersecting), { threshold: 0.2 }).observe(canvas);
  } else {
    onVisible(true);
  }
  document.addEventListener('visibilitychange', () => setRunning(visible));
  if ('ResizeObserver' in window) new ResizeObserver(() => { if (!running) draw(); }).observe(canvas);
  if (document.fonts) document.fonts.ready.then(() => { if (!running) draw(); });
  tgReduced.addEventListener('change', () => { setRunning(visible); draw(); });
}

/* ---- Scroll reveal ---- */
function initReveal() {
  const sections = document.querySelectorAll('.reveal');

  // Index direct children so they stagger.
  sections.forEach((s) => {
    [...s.children].forEach((child, i) => {
      if (!child.style.getPropertyValue('--i')) child.style.setProperty('--i', i);
    });
  });

  if (!('IntersectionObserver' in window)) {
    sections.forEach((s) => s.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);           // reveal once, never re-animate
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  sections.forEach((s) => io.observe(s));
}

/* ---- App windows ----
   Every project has a real URL (/thrennel/, /tracksense/, /automation/). On
   the home page each also has a <dialog class="appwin"> shell: a click on a
   link to one of those URLs (or an old #id link) opens the shell as a window
   over the page instead of navigating. The project page is fetched once, its
   section dropped into the shell and its demos started. The address bar shows
   the real URL while a window is open, so Back and refresh both behave, and
   with scripts off the links simply go to the pages. */
function initAppWindows() {
  const wins = [...document.querySelectorAll('dialog.appwin[data-src]')];
  if (!wins.length) return;
  const byPath = Object.fromEntries(wins.map((d) => [d.dataset.src, d]));
  const byId = Object.fromEntries(wins.map((d) => [d.id, d]));
  const OUT_MS = 260;
  const loads = {};

  function load(d) {
    if (!loads[d.id]) {
      loads[d.id] = fetch(d.dataset.src)
        .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.text(); })
        .then((html) => {
          const doc = new DOMParser().parseFromString(html, 'text/html');
          const section = doc.querySelector('[data-appwin-body]');
          if (!section) throw new Error('no project body');
          section.querySelectorAll('.page-only').forEach((el) => el.remove());
          const h1 = section.querySelector('h1');          // one h1 per page: demote inside the window
          if (h1) {
            const h2 = document.createElement('h2');
            for (const a of h1.attributes) h2.setAttribute(a.name, a.value);
            h2.innerHTML = h1.innerHTML;
            h1.replaceWith(h2);
          }
          const body = d.querySelector('.appwin__body');
          body.replaceChildren(document.adoptNode(section));
          initProjectContent(body);
        })
        .catch((err) => { delete loads[d.id]; throw err; });
    }
    return loads[d.id];
  }

  function open(d, push) {
    wins.forEach((w) => { if (w !== d && w.open) shut(w, true, false); });
    if (d.open) return;
    load(d).then(() => {
      if (d.open) return;
      d.showModal();
      requestAnimationFrame(() => d.classList.add('is-open'));
      d.dispatchEvent(new CustomEvent('appwin:open'));
      if (push) history.pushState({ appwin: d.id }, '', d.dataset.src);
    }).catch(() => { location.href = d.dataset.src; });   // the page itself always works
  }

  function shut(d, instant, unwind = true) {
    if (!d.open || d.dataset.closing) return;
    d.classList.remove('is-open');
    const done = () => {
      delete d.dataset.closing;
      d.close();
      if (unwind && history.state && history.state.appwin === d.id) history.back();
      else if (location.hash === '#' + d.id) history.replaceState(null, '', location.pathname + location.search);
    };
    if (instant || tgReduced.matches) return done();
    d.dataset.closing = '1';
    setTimeout(done, OUT_MS);
  }

  wins.forEach((d) => {
    d.querySelector('.appwin__close').addEventListener('click', () => shut(d));
    d.addEventListener('cancel', (e) => { e.preventDefault(); shut(d); });     // Esc
    d.addEventListener('click', (e) => { if (e.target === d) shut(d); });      // backdrop
  });

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    const target = byPath[url.pathname] || (url.hash && byId[url.hash.slice(1)]);
    if (target) { e.preventDefault(); open(target, true); }
  });

  // Back/Forward walk the windows the same way the clicks opened them
  window.addEventListener('popstate', (e) => {
    const id = e.state && e.state.appwin;
    if (id && byId[id]) open(byId[id], false);
    else wins.forEach((w) => { if (w.open) shut(w, false, false); });
  });

  // an old #thrennel link still opens the window
  if (byId[location.hash.slice(1)]) open(byId[location.hash.slice(1)], false);

  // fetch the three pages once the page is idle, so the first open is instant
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 1500));
  idle(() => wins.forEach((d) => load(d).catch(() => {})), { timeout: 2000 });
}

/* ---- Header shadow on scroll ---- */
function initHeader() {
  const header = $('#siteHeader');
  const onScroll = () => header.classList.toggle('stuck', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---- Thrennel waitlist ----
   Posts to Thrennel's own endpoint, the same call thrennel.com/request makes,
   so requests land in the owner's waitlist inside the app. The browser only
   allows it once thrennel.com permits this site's origin (CORS); until then,
   or if Thrennel is unreachable, the form sends people to the request page. */
const THRENNEL_WAITLIST = 'https://thrennel.com/api/waitlist';
const THRENNEL_REQUEST  = 'https://thrennel.com/request';

function initForm(root = document) {
  const form = root.querySelector('#betaForm');
  const msg  = root.querySelector('#formMsg');
  const btn  = form.querySelector('button');
  const fallback = (lead) => {
    msg.innerHTML = `${esc(lead)} <a href="${THRENNEL_REQUEST}">Request access on thrennel.com →</a>`;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = $('#email').value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "That doesn't look like an email address.";
      return;
    }

    msg.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(THRENNEL_WAITLIST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: $('#website').value })
      });
      if (res.ok) {
        form.hidden = true;
        $('#betaDone').hidden = false;
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (res.status === 400 && data.detail) msg.textContent = data.detail.charAt(0).toUpperCase() + data.detail.slice(1) + '.';
      else fallback(res.status === 429 ? 'Too many tries from here for now.' : "That didn't send.");
    } catch (err) {
      fallback("Couldn't reach Thrennel from here.");
    }
    btn.disabled = false;
  });
}

/* ---- Boot ----
   Everything that carries a demo is started from `root`: the whole document
   on load, or one window's freshly loaded body. The home page also renders
   the stats and the cards first, so their small demos are in the document. */
function initProjectContent(root) {
  root.querySelectorAll('.thrennel-stage').forEach((el) => {
    el.innerHTML = shotMarkup({ graph: true, alt: 'Thrennel knowledge graph: thoughts orbiting topic clusters around a central core' });
  });
  root.querySelectorAll('.ts-stage').forEach((el) => {
    el.innerHTML = shotMarkup({ lap: true, alt: 'TrackSense lap replay at Lime Rock Park: your lap chasing the reference, with time lost building corner by corner' });
  });
  root.querySelectorAll('canvas.tgraph').forEach(initConstellation);
  root.querySelectorAll('canvas.tslap').forEach(initLapReplay);
  root.querySelectorAll('.automation-wrap, .card .frame--run').forEach(initRunLog);
  if (root.querySelector('#plot')) { renderChart(root); renderReadout(); }
  if (root.querySelector('#betaForm')) initForm(root);
}

if ($('#cards')) { renderProof(); renderProjects(); }
initProjectContent(document);
initReveal();
initHeader();
initAppWindows();

/* ---- Email link ----
   The address is split across data attributes and joined here, so it is
   never present as text in the served HTML for harvesters to read. */
document.querySelectorAll('a.js-email').forEach((a) => {
  a.href = `mailto:${a.dataset.u}@${a.dataset.d}`;
});
