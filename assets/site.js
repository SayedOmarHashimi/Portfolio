/* Shared behaviour for every pane. One file, no dependencies, no build step.
   Each block no-ops on panes that don't contain the elements it looks for. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Accent hue ────────────────────────────────────────────────────
     The stored choice is applied by a tiny inline script in each page's
     <head> so it paints correctly on first frame; this only handles the
     rail itself and persisting a new choice across panes. */
  var rail = document.querySelector('.hue-rail');
  if (rail) {
    var active = document.documentElement.getAttribute('data-hue') || 'orange';
    rail.querySelectorAll('.hue').forEach(function (b) {
      b.classList.toggle('is-on', b.dataset.hue === active);
      b.setAttribute('aria-pressed', b.dataset.hue === active ? 'true' : 'false');
      b.addEventListener('click', function () {
        document.documentElement.setAttribute('data-hue', b.dataset.hue);
        try { localStorage.setItem('hue', b.dataset.hue); } catch (e) {}
        rail.querySelectorAll('.hue').forEach(function (o) {
          o.classList.toggle('is-on', o === b);
          o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
        });
      });
    });
  }

  /* ── Mobile menu ───────────────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  if (burger && navlinks) {
    burger.addEventListener('click', function () {
      var open = navlinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!navlinks.contains(e.target) && !burger.contains(e.target)) {
        navlinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navlinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Sticky-nav shadow + back to top ───────────────────────────── */
  var nav = document.getElementById('topnav');
  var totop = document.getElementById('totop');
  var ticking = false;
  function onScroll() {
    ticking = false;
    if (nav) nav.classList.toggle('stuck', window.scrollY > 20);
    if (totop) totop.classList.toggle('on', window.scrollY > 500);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ── Reveal on scroll ──────────────────────────────────────────── */
  var items = [].slice.call(document.querySelectorAll('.reveal'));
  document.querySelectorAll('.stagger').forEach(function (g) {
    g.querySelectorAll('.reveal').forEach(function (n, i) { n.dataset.d = Math.min(i * 70, 420); });
  });
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (n) { n.classList.add('in'); });
  } else {
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target;
        n.style.transitionDelay = (n.dataset.d || 0) + 'ms';
        n.classList.add('in');
        n.addEventListener('transitionend', function () { n.style.transitionDelay = ''; }, { once: true });
        o.unobserve(n);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    items.forEach(function (n) { obs.observe(n); });
  }

  /* ── Typewriter (home pane only) ───────────────────────────────── */
  var typed = document.getElementById('typed');
  if (typed) {
    var roles = ['Business Analyst', 'MIS Graduate', 'Dashboard Builder', 'Market Researcher', 'Systems Analyst'];
    if (reduced) {
      typed.textContent = roles[0];
    } else {
      var ri = 0, ci = 0, del = false;
      (function tick() {
        var w = roles[ri];
        ci += del ? -1 : 1;
        typed.textContent = w.slice(0, ci);
        var wait = del ? 40 : 85;
        if (!del && ci === w.length) { del = true; wait = 1500; }
        else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; wait = 320; }
        setTimeout(tick, wait);
      })();
    }
  }

  /* ── Project filters (projects pane only) ──────────────────────── */
  var filters = document.querySelectorAll('.filt');
  if (filters.length) {
    var cards = [].slice.call(document.querySelectorAll('.proj'));
    var empty = document.getElementById('empty');
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var want = btn.dataset.f, shown = 0;
        filters.forEach(function (b) {
          b.classList.toggle('is-on', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        cards.forEach(function (c) {
          var hit = want === 'all' || c.dataset.cat.split(' ').indexOf(want) !== -1;
          c.hidden = !hit;
          if (hit) shown++;
        });
        if (empty) empty.hidden = shown !== 0;
      });
    });
  }

  /* ── Letter lightbox (recommendations pane only) ───────────────── */
  var lb = document.getElementById('lb');
  if (lb) {
    var lbImg = document.getElementById('lb-img');
    var lbCap = document.getElementById('lb-cap');
    var lastFocus = null;
    function openLetter(fig) {
      lastFocus = fig;
      lbImg.src = fig.dataset.src;
      lbImg.alt = fig.dataset.name;
      lbCap.textContent = fig.dataset.name;
      lb.classList.add('on');
      document.body.classList.add('lb-open'); /* stops iOS scrolling the page behind */
      var x = document.getElementById('lb-x');
      if (x) x.focus();
    }
    function closeLetter() {
      lb.classList.remove('on');
      document.body.classList.remove('lb-open');
      if (lastFocus) lastFocus.focus();
    }
    document.querySelectorAll('.letter').forEach(function (fig) {
      fig.addEventListener('click', function () { openLetter(fig); });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLetter(fig); }
      });
    });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLetter(); });
    var lbx = document.getElementById('lb-x');
    if (lbx) lbx.addEventListener('click', closeLetter);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('on')) closeLetter();
    });
  }

  /* ── Contact form (contact pane only) ──────────────────────────────
     Static site, so submissions are relayed by Web3Forms, which emails
     them to omarhashimi12@gmail.com. The access key is not a secret: it
     is submission-only and tied to the destination address, which is how
     Web3Forms is designed to be used. */
  var form = document.getElementById('contact-form');
  if (form) {
    var KEY = '04441617-a73c-433f-adad-c2769980aead';
    var statusEl = document.getElementById('cf-status');
    var btn = document.getElementById('cf-submit');
    var label = document.getElementById('cf-submit-label');
    var fields = {
      name: { el: document.getElementById('cf-name') },
      email: { el: document.getElementById('cf-email') },
      message: { el: document.getElementById('cf-message') }
    };
    var sending = false;

    function setError(k, bad) {
      fields[k].el.closest('.form-field').classList.toggle('show-error', bad);
      fields[k].el.classList.toggle('invalid', bad);
      fields[k].el.setAttribute('aria-invalid', bad ? 'true' : 'false');
    }
    function valid(k, v) {
      return k === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) : v.length > 0;
    }
    function show(kind, msg) {
      statusEl.className = 'form-status on ' + (kind === 'success' ? 'ok' : 'bad');
      statusEl.textContent = msg;
    }
    Object.keys(fields).forEach(function (k) {
      fields[k].el.addEventListener('input', function () {
        if (fields[k].el.classList.contains('invalid')) setError(k, !valid(k, fields[k].el.value.trim()));
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (sending) return;
      statusEl.className = 'form-status';

      var values = {}, ok = true, first = null;
      Object.keys(fields).forEach(function (k) {
        values[k] = fields[k].el.value.trim();
        var bad = !valid(k, values[k]);
        setError(k, bad);
        if (bad) { ok = false; if (!first) first = fields[k].el; }
      });
      if (!ok) { if (first) first.focus(); return; }
      if (document.getElementById('cf-botcheck').checked) return;

      sending = true;
      btn.disabled = true;
      label.innerHTML = '<span class="spinner" aria-hidden="true"></span>Sending…';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: KEY,
          subject: 'New message from your portfolio contact form',
          from_name: 'Portfolio Contact Form',
          name: values.name, email: values.email, message: values.message, botcheck: false
        })
      })
      .then(function (res) { return res.json().then(function (d) { return { ok: res.ok, data: d }; }); })
      .then(function (r) {
        if (r.ok && r.data && r.data.success) {
          form.reset();
          show('success', 'Thanks, ' + values.name.split(' ')[0] + ", your message has been sent. I'll be in touch soon.");
        } else {
          show('error', (r.data && r.data.message) ? r.data.message : 'Something went wrong sending your message. Please try again, or email me directly at omarhashimi12@gmail.com.');
        }
      })
      .catch(function () {
        show('error', "Couldn't reach the mail service. Please check your connection and try again, or email me directly at omarhashimi12@gmail.com.");
      })
      .finally(function () {
        sending = false;
        btn.disabled = false;
        label.textContent = 'Send message';
      });
    });
  }
})();
