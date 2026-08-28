/* Preview behaviours — vanilla JS, no dependencies, no build step.
   Mirrors the reference portfolio's scroll interface (progress bar,
   scrollspy nav, reveal-on-scroll, project filters) without React. */

function toggleNav(btn) {
  var menu = document.getElementById('nav-menu');
  if (!menu) return;
  var open = menu.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeNav() {
  var menu = document.getElementById('nav-menu');
  if (menu) menu.classList.remove('open');
  var btn = document.querySelector('.nav-toggle');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function openLetter(src, name) {
  var box = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = name;
  document.getElementById('lightbox-cap').textContent = name;
  box.classList.add('is-open');
}
function closeLetter() {
  document.getElementById('lightbox').classList.remove('is-open');
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLetter();
});

document.addEventListener('DOMContentLoaded', function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress, sticky-nav shadow, back-to-top ───────────── */
  var bar = document.getElementById('progress-bar');
  var nav = document.querySelector('.sitenav');
  var toTop = document.getElementById('to-top');
  var ticking = false;

  function onScroll() {
    ticking = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    if (bar) bar.style.transform = 'scaleX(' + pct + ')';
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 20);
    if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 600);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ── Reveal on scroll, staggered inside .stagger grids ─────────── */
  var items = [].slice.call(document.querySelectorAll('.reveal'));
  document.querySelectorAll('.stagger').forEach(function (grid) {
    grid.querySelectorAll('.reveal').forEach(function (el, i) {
      el.dataset.delay = Math.min(i * 70, 420);
    });
  });
  document.querySelectorAll('#home .reveal').forEach(function (el, i) {
    el.dataset.delay = Math.min(i * 80, 640);
  });

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
        el.classList.add('is-in');
        el.addEventListener('transitionend', function () { el.style.transitionDelay = ''; }, { once: true });
        o.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    items.forEach(function (el) { obs.observe(el); });
  }

  /* ── Scrollspy: highlight the nav link for the section in view ──── */
  var links = [].slice.call(document.querySelectorAll('[data-nav]'));
  var sections = [].slice.call(document.querySelectorAll('main section[id]'));

  function spy() {
    var line = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= line) current = s; });
    links.forEach(function (a) {
      a.classList.toggle('is-active', current && a.getAttribute('href') === '#' + current.id);
    });
  }
  window.addEventListener('scroll', spy, { passive: true });
  window.addEventListener('resize', spy);
  spy();

  /* ── Project filters ───────────────────────────────────────────── */
  var cards = [].slice.call(document.querySelectorAll('.proj'));
  var empty = document.getElementById('filter-empty');

  document.querySelectorAll('.filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var want = btn.dataset.filter;
      document.querySelectorAll('.filter').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      var shown = 0;
      cards.forEach(function (card) {
        var match = want === 'all' || card.dataset.cat.split(' ').indexOf(want) !== -1;
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });

  /* ── Night-mode toggle (preview only — swaps tokens, nothing else) ── */
  var themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var night = document.documentElement.getAttribute('data-theme') === 'night';
      if (night) {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.textContent = 'Night mode';
      } else {
        document.documentElement.setAttribute('data-theme', 'night');
        themeBtn.textContent = 'Day mode';
      }
    });
  }
});
