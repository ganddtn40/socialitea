/* ============================================================
   SOCIALITEA — SHARED BEHAVIORS
   Navbar scroll state, mobile menu, scroll reveal (once),
   staggered entrances, menu category filter.
   ============================================================ */
(function () {
  'use strict';

  function $all(sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  }

  /* ---------- Lucide icons ---------- */
  if (window.lucide && lucide.createIcons) {
    lucide.createIcons();
  }

  /* ---------- Navbar scroll state (blur + border) ---------- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var ticking = false;
    function updateNav() {
      ticking = false;
      nav.classList.toggle('nav-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateNav);
      }
    }, { passive: true });
    updateNav();
  }

  /* ---------- Mobile menu (animated hamburger + slide panel) ---------- */
  var toggle = document.getElementById('mobile-menu-toggle');
  var panel = document.getElementById('mobile-menu');
  var hamburger = toggle ? toggle.querySelector('.hamburger') : null;
  if (toggle && panel) {
    function closeMenu() {
      panel.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('open');
      if (hamburger) hamburger.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $all('a', panel).forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- Scroll reveal: gentle fade-up, once, staggered ---------- */
  var reveals = $all('[data-reveal]');
  if (reveals.length) {
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
      reveals.forEach(function (el) {
        var grid = el.closest('[data-reveal-stagger]');
        var idx = grid ? $all('[data-reveal]', grid).indexOf(el) : 0;
        el.style.transitionDelay = (grid ? 70 : 0) * idx + 'ms';
        io.observe(el);
      });
    }
  }

  /* ---------- Menu category filter (menu page) ---------- */
  var chips = $all('.chip');
  if (chips.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var filter = chip.dataset.filter;
        $all('[data-category]').forEach(function (sec) {
          sec.style.display = (filter === 'all' || sec.dataset.category === filter) ? '' : 'none';
        });
      });
    });
  }
})();
