// InCAD — Program calendar data.
// This array is the single source of truth for the calendar table below.
// Swap this static array for a fetch() to your backend/admin API later —
// renderProgramsTable(list) is the only function that needs to keep working.
window.INCAD_PROGRAMS = [
  { year: 2026, name: "Training of Trainers (TOT) Programme", desc: "Build in-house training and facilitation capacity", dates: "24 – 28 Aug 2026", venue: "Morendat Hotel, Naivasha", regional: false, focus: "Trainer Development", category: "other" },
  { year: 2026, name: "Effective Communication & Presentation Skills", desc: "Sharpen professional communication and delivery", dates: "31 Aug – 4 Sept 2026", venue: "PrideInn Paradise, Mombasa", regional: false, focus: "Communication", category: "communication" },
  { year: 2026, name: "Labour Laws & Industrial Relations", desc: "Navigating employment law and workplace disputes", dates: "14 – 18 Sept 2026", venue: "Arusha, Tanzania", regional: true, focus: "Labour Relations", category: "labour" },
  { year: 2026, name: "HIV/AIDS Workplace Mainstreaming", desc: "Policy and practice for an inclusive workplace", dates: "28 Sept – 2 Oct 2026", venue: "Boma Inn, Eldoret", regional: false, focus: "Wellness", category: "wellness" },
  { year: 2026, name: "Occupational Safety & Health Management", desc: "Building safer, compliant work environments", dates: "12 – 16 Oct 2026", venue: "Lake Naivasha Resort", regional: false, focus: "Occupational Safety", category: "safety" },
  { year: 2026, name: "Drug & Substance Abuse Prevention", desc: "Practical prevention strategies for organizations", dates: "26 – 30 Oct 2026", venue: "Mombasa Beach Hotel", regional: false, focus: "Substance Abuse", category: "substance" },
  { year: 2026, name: "Pre-Retirement Planning", desc: "Financial and personal readiness for retirement", dates: "9 – 13 Nov 2026", venue: "Kampala, Uganda", regional: true, focus: "Retirement Planning", category: "other" },
  { year: 2026, name: "Strategic Leadership & Management Skills", desc: "Equipping managers with strategic decision tools", dates: "23 – 27 Nov 2026", venue: "Nairobi Serena Hotel", regional: false, focus: "Leadership", category: "leadership" },

  { year: 2027, name: "Tax Audit & Revenue Administration", desc: "Understanding audit processes and compliance", dates: "18 – 22 Jan 2027", venue: "Morendat, Naivasha", regional: false, focus: "Tax & Compliance", category: "tax" },
  { year: 2027, name: "Labour Relations & Collective Bargaining", desc: "Negotiation strategy for CBAs and disputes", dates: "8 – 12 Feb 2027", venue: "Arusha, Tanzania", regional: true, focus: "Labour Relations", category: "labour" },
  { year: 2027, name: "Pre-Retirement Planning", desc: "Financial and personal readiness for retirement", dates: "22 – 26 Feb 2027", venue: "Legacy Hotel & Suites, Nakuru", regional: false, focus: "Retirement Planning", category: "other" },
  { year: 2027, name: "HIV/AIDS, Mental Health & Workplace Wellness", desc: "A holistic approach to employee wellbeing", dates: "8 – 12 Mar 2027", venue: "Kyaka Hotel, Machakos", regional: false, focus: "Wellness", category: "wellness" },
  { year: 2027, name: "Drug & Substance Abuse Counselling Skills", desc: "Equipping counsellors and HR teams to respond", dates: "22 – 26 Mar 2027", venue: "Kyaka Hotel, Machakos", regional: false, focus: "Substance Abuse", category: "substance" },
  { year: 2027, name: "Training of Trainers (Advanced TOT)", desc: "Advanced facilitation and curriculum design", dates: "12 – 16 Apr 2027", venue: "Ciala Resort, Kisumu", regional: false, focus: "Trainer Development", category: "other" },
  { year: 2027, name: "Strategic Communication & Public Relations", desc: "Managing organizational image and messaging", dates: "3 – 7 May 2027", venue: "Mombasa Beach Hotel", regional: false, focus: "Communication", category: "communication" },
  { year: 2027, name: "Payroll Tax, PAYE & Statutory Deductions", desc: "Getting payroll compliance right", dates: "7 – 11 Jun 2027", venue: "Boma Inn, Eldoret", regional: false, focus: "Tax & Compliance", category: "tax" },
  { year: 2027, name: "Labour Dispute Resolution & Mediation", desc: "Conflict resolution skills for the workplace", dates: "21 – 25 Jun 2027", venue: "Morendat, Naivasha", regional: false, focus: "Labour Relations", category: "labour" },
  { year: 2027, name: "Occupational Health & Safety", desc: "Compliance and risk reduction on-site", dates: "5 – 9 Jul 2027", venue: "Lake Naivasha Resort", regional: false, focus: "Occupational Safety", category: "safety" },
  { year: 2027, name: "Gender Mainstreaming & Inclusion", desc: "Building equitable, inclusive institutions", dates: "19 – 23 Jul 2027", venue: "Boma Inn, Eldoret", regional: false, focus: "Gender & Inclusion", category: "other" },
  { year: 2027, name: "Leadership, Governance & Ethics", desc: "Principled leadership for public and private institutions", dates: "9 – 13 Aug 2027", venue: "Arusha, Tanzania", regional: true, focus: "Leadership", category: "leadership" },
  { year: 2027, name: "Training of Trainers (TOT) Programme", desc: "Build in-house training and facilitation capacity", dates: "23 – 27 Aug 2027", venue: "Kampala, Uganda", regional: true, focus: "Trainer Development", category: "other" },
  { year: 2027, name: "Collective Bargaining & Labour Law", desc: "Negotiation strategy for CBAs and disputes", dates: "6 – 10 Sept 2027", venue: "Kyaka Hotel, Machakos", regional: false, focus: "Labour Relations", category: "labour" },
  { year: 2027, name: "Drug & Substance Abuse Prevention", desc: "Practical prevention strategies for organizations", dates: "20 – 24 Sept 2027", venue: "Mombasa Beach Hotel", regional: false, focus: "Substance Abuse", category: "substance" },
  { year: 2027, name: "Annual Capacity Development Conference", desc: "InCAD's flagship annual gathering", dates: "4 – 8 Oct 2027", venue: "Morendat, Naivasha", regional: false, focus: "Flagship Event", category: "other" }
];

/* ---------------------------------------------------------------
   Render the calendar table — now with an Action column that emits
   a Register button per row. Data attributes carry every field the
   registration modal needs (programme, dates, venue, focus, year).
   --------------------------------------------------------------- */
function renderProgramsTable(list) {
  const body = document.getElementById('cal-table-body');
  const empty = document.getElementById('cal-empty');
  if (!body) return;
  body.innerHTML = '';
  if (!list.length) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  list.forEach(p => {
    const tr = document.createElement('tr');
    // Escape quotes in attributes so a program name with an apostrophe
    // (e.g. "InCAD's flagship…") never breaks the markup.
    const attr = (v) => String(v).replace(/"/g, '&quot;');

    tr.innerHTML = `
      <td data-label="Programme">
        <span class="cal-prog-name">${p.name}${p.regional ? '<span class="cal-badge">Regional</span>' : ''}</span>
        <span class="cal-prog-desc">${p.desc}</span>
      </td>
      <td data-label="Dates">${p.dates}</td>
      <td data-label="Venue">${p.venue}</td>
      <td data-label="Focus area"><span class="cal-chip">${p.focus}</span></td>
      <td data-label="Action" class="td-action">
        <button
          type="button"
          class="btn-register"
          data-program="${attr(p.name)}"
          data-dates="${attr(p.dates)}"
          data-venue="${attr(p.venue)}${p.regional ? ' (Regional)' : ''}"
          data-focus="${attr(p.focus)}"
          data-year="${attr(p.year)}"
        >
          <i class="fa-solid fa-pen-to-square"></i> Register
        </button>
      </td>
    `;
    body.appendChild(tr);
  });
}

function initProgramsCalendar() {
  const yearBtns = document.querySelectorAll('.cal-year-btn');
  const filterBtns = document.querySelectorAll('.cal-pill');
  if (!yearBtns.length) return;

  let currentYear = 2026;
  let currentFilter = 'all';

  const apply = () => {
    const filtered = window.INCAD_PROGRAMS.filter(p =>
      p.year === currentYear && (currentFilter === 'all' || p.category === currentFilter)
    );
    renderProgramsTable(filtered);
  };

  yearBtns.forEach(btn => btn.addEventListener('click', () => {
    yearBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentYear = parseInt(btn.getAttribute('data-year'), 10);
    apply();
  }));

  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentFilter = btn.getAttribute('data-filter');
    apply();
  }));

  apply();
}

/* ---------------------------------------------------------------
   Program Registration Modal
   Uses event delegation on document so it keeps working after the
   calendar re-renders (year switch, filter change, future API swaps).
   Posts to the shared register.php backend as programs.html.
   --------------------------------------------------------------- */
function initProgramRegistration() {
  const regModal = document.getElementById('registerModal');
  const regOverlay = document.getElementById('registerModalOverlay');
  const regCloseBtn = document.getElementById('closeRegisterModal');
  const regForm = document.getElementById('registerForm');
  const regSendBtn = document.getElementById('regSendBtn');
  if (!regModal || !regForm) return;

  const elProgram = document.getElementById('regProgram');
  const elDates = document.getElementById('regDates');
  const elVenue = document.getElementById('regVenue');
  const elFocus = document.getElementById('regFocus');

  const hProgram = document.getElementById('regProgramHidden');
  const hDates = document.getElementById('regDatesHidden');
  const hVenue = document.getElementById('regVenueHidden');
  const hFocus = document.getElementById('regFocusHidden');
  const hYear = document.getElementById('regYearHidden');

  function openRegModal(data) {
    elProgram.textContent = data.program || '—';
    elDates.textContent = data.dates || '—';
    elVenue.textContent = data.venue || '—';
    elFocus.textContent = data.focus || '—';

    hProgram.value = data.program || '';
    hDates.value = data.dates || '';
    hVenue.value = data.venue || '';
    hFocus.value = data.focus || '';
    hYear.value = data.year || '';

    regModal.classList.add('active');
    regModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    setTimeout(() => {
      const first = document.getElementById('regFullName');
      if (first) first.focus();
    }, 120);
  }

  function closeRegModal() {
    regModal.classList.remove('active');
    regModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // Delegated click — catches Register buttons even after re-renders
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-register');
    if (!btn) return;
    e.preventDefault();
    openRegModal({
      program: btn.getAttribute('data-program'),
      dates: btn.getAttribute('data-dates'),
      venue: btn.getAttribute('data-venue'),
      focus: btn.getAttribute('data-focus'),
      year: btn.getAttribute('data-year'),
    });
  });

  if (regCloseBtn) regCloseBtn.addEventListener('click', closeRegModal);
  if (regOverlay) regOverlay.addEventListener('click', closeRegModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && regModal.classList.contains('active')) {
      closeRegModal();
    }
  });

  regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('regFullName');
    const phone = document.getElementById('regPhone');
    const email = document.getElementById('regEmail');
    const org = document.getElementById('regOrg');
    let valid = true;

    [fullName, phone, email].forEach((el) => {
      el.classList.remove('error');
      if (!el.value.trim()) {
        el.classList.add('error');
        valid = false;
      }
    });

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() && !emailRe.test(email.value.trim())) {
      email.classList.add('error');
      valid = false;
    }

    const alertFn = window.Swal
      ? window.Swal.fire.bind(window.Swal)
      : (opts) => alert(opts.title + (opts.text ? ' — ' + opts.text : ''));

    if (!valid) {
      alertFn({
        icon: 'warning',
        title: 'Please check your details',
        text: 'Full name, phone and a valid email are required.',
        confirmButtonColor: '#4d2682',
      });
      return;
    }

    const payload = {
      'Full Name': fullName.value.trim(),
      'Phone Number': phone.value.trim(),
      'Email': email.value.trim(),
      'Organisation': org.value.trim() || 'N/A',
      'Programme': hProgram.value,
      'Dates': hDates.value,
      'Venue': hVenue.value,
      'Focus Area': hFocus.value,
      'Year': hYear.value,
      'Source': 'Homepage Calendar',
      'Submitted At': new Date().toISOString(),
    };

    const originalHTML = regSendBtn.innerHTML;
    regSendBtn.disabled = true;
    regSendBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    fetch('register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        regSendBtn.disabled = false;
        regSendBtn.innerHTML = originalHTML;

        if (data && data.status === 'success') {
          alertFn({
            icon: 'success',
            title: 'Registration received!',
            html: "You're registered for <strong>" + payload['Programme'] + '</strong>.<br>We\'ll be in touch shortly.',
            confirmButtonColor: '#4d2682',
          });
          regForm.reset();
          closeRegModal();
        } else {
          throw new Error('Server responded with failure');
        }
      })
      .catch(() => {
        regSendBtn.disabled = false;
        regSendBtn.innerHTML = originalHTML;
        alertFn({
          icon: 'error',
          title: 'Registration not sent',
          text: 'Please try again or email info@incad.org directly.',
          confirmButtonColor: '#4d2682',
        });
      });
  });
}

function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length < 2) return;
  let index = 0;
  const show = (i) => {
    slides.forEach((s, n) => s.classList.toggle('is-active', n === i));
    dots.forEach((d, n) => {
      d.classList.toggle('is-active', n === i);
      d.setAttribute('aria-selected', String(n === i));
    });
    index = i;
  };
  dots.forEach(d => d.addEventListener('click', () => show(parseInt(d.getAttribute('data-slide'), 10))));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => show((index + 1) % slides.length), 6000);
  }
}

function initTestimonials() {
  const cards = document.querySelectorAll('.testi-card');
  const dots = document.querySelectorAll('.testi-dot');
  const prev = document.querySelector('.testi-nav.prev');
  const next = document.querySelector('.testi-nav.next');
  if (!cards.length) return;
  let index = 0;
  const show = (i) => {
    index = (i + cards.length) % cards.length;
    cards.forEach((c, n) => c.classList.toggle('is-active', n === index));
    dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
  };
  dots.forEach(d => d.addEventListener('click', () => show(parseInt(d.getAttribute('data-testi'), 10))));
  if (prev) prev.addEventListener('click', () => show(index - 1));
  if (next) next.addEventListener('click', () => show(index + 1));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => show(index + 1), 7000);
  }
}

function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletter-email');
    const email = (input.value || '').trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const alertFn = window.Swal ? window.Swal.fire.bind(window.Swal) : (opts) => alert(opts.title + (opts.text ? ' — ' + opts.text : ''));
    if (!valid) {
      alertFn({ icon: 'error', title: 'Check that email address', text: 'Please enter a valid email so we can send you program updates.', confirmButtonColor: '#4d2682' });
      return;
    }
    alertFn({ icon: 'success', title: "You're subscribed!", text: "We'll email you before every new program opens for enrollment.", confirmButtonColor: '#4d2682' });
    form.reset();
  });
}

function initLogoGalleryModal() {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const modal = document.getElementById('gallery-modal');
  if (!modal || !items.length) return;
  const modalPhoto = modal.querySelector('.modal-photo');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDesc = modal.querySelector('.modal-desc');
  const closeBtn = modal.querySelector('.modal-close');
  const prevBtn = modal.querySelector('.modal-nav.prev');
  const nextBtn = modal.querySelector('.modal-nav.next');
  const overlay = modal.querySelector('.modal-overlay');
  let current = 0;
  let visible = items;

  function showIndex(i) {
    if (!visible.length) return;
    const idx = (i + visible.length) % visible.length;
    current = idx;
    const it = visible[idx];
    const full = it.getAttribute('data-full') || it.querySelector('img').src;
    const name = it.getAttribute('data-name') || '';
    const desc = it.getAttribute('data-desc') || '';
    modalPhoto.src = full;
    modalPhoto.alt = name;
    modalTitle.textContent = name;
    modalDesc.textContent = desc;
  }
  function openModal(i) {
    visible = items.filter(el => el.style.display !== 'none');
    const clicked = items[i];
    const idx = Math.max(0, visible.indexOf(clicked));
    showIndex(idx);
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  items.forEach((el, idx) => {
    el.addEventListener('click', () => openModal(idx));
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', () => showIndex(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showIndex(current + 1));
  document.addEventListener('keydown', (e) => {
    if (modal.getAttribute('aria-hidden') === 'false') {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showIndex(current - 1);
      if (e.key === 'ArrowRight') showIndex(current + 1);
    }
  });
}

function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filters .cal-pill');
  const items = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length || !items.length) return;
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.getAttribute('data-filter');
    items.forEach(item => {
      const match = filter === 'all' || item.getAttribute('data-category') === filter;
      item.style.display = match ? '' : 'none';
    });
  }));
}

// InCAD — interaction script
document.addEventListener('DOMContentLoaded', () => {

  initHeroCarousel();
  initProgramsCalendar();
  initProgramRegistration();   // ← NEW: register modal for calendar
  initTestimonials();
  initNewsletter();
  initLogoGalleryModal();
  initGalleryFilter();


  /* Mobile / tablet nav drawer.
     Matches --bp-nav (1024px) in styles.css — kept as a JS constant here
     too so resize handling and the CSS breakpoint can't drift apart. */
  const NAV_BREAKPOINT = 1024;
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const topbarEl = document.querySelector('.topbar');
  const headerEl = document.getElementById('site-header');

  /* The topbar/header switch to position:fixed below NAV_BREAKPOINT, which
     takes them out of flow — CSS can't know their real height on its own,
     so we measure and publish it as --topbar-h/--header-h. This keeps the
     drawer, the backdrop, and the body's top padding pixel-accurate even
     when icon fonts finish loading late, text wraps differently, or the
     fluid root font-size shrinks everything on very small screens. */
  function syncBarHeights() {
    if (topbarEl) {
      document.documentElement.style.setProperty('--topbar-h', topbarEl.offsetHeight + 'px');
    }
    if (headerEl) {
      document.documentElement.style.setProperty('--header-h', headerEl.offsetHeight + 'px');
    }
  }
  syncBarHeights();
  window.addEventListener('resize', debounce(syncBarHeights, 150));
  window.addEventListener('orientationchange', () => setTimeout(syncBarHeights, 200));
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncBarHeights).catch(() => { });
  }
  // Icons (Font Awesome) can also arrive after first paint and change height.
  window.addEventListener('load', syncBarHeights);

  function debounce(fn, wait) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
  }

  if (toggle && links) {
    // Standard mobile-drawer UX: a dimmed backdrop behind the panel that
    // closes it on tap, built once here so none of the 13 HTML pages had
    // to be touched to add it.
    let backdrop = document.querySelector('.nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'nav-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    const setOpen = (open) => {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
      backdrop.classList.toggle('visible', open);
      if (open) {
        const firstLink = links.querySelector('a');
        if (firstLink) firstLink.focus({ preventScroll: true });
      } else if (document.activeElement && links.contains(document.activeElement)) {
        toggle.focus();
      }
    };

    toggle.addEventListener('click', () => {
      setOpen(!links.classList.contains('open'));
    });

    backdrop.addEventListener('click', () => setOpen(false));

    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('open')) setOpen(false);
    });

    // If the viewport grows past the nav breakpoint while the drawer is
    // open (rotating a tablet, resizing a browser window), close it and
    // unlock scroll rather than leaving a hidden-but-still-open drawer.
    window.addEventListener('resize', () => {
      if (window.innerWidth > NAV_BREAKPOINT && links.classList.contains('open')) setOpen(false);
    });
  }

  /* Active nav link by current page */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === path);
  });

  /* Sticky header shadow on scroll */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
    const backBtn = document.getElementById('back-to-top');
    if (backBtn) backBtn.classList.toggle('visible', window.scrollY > 480);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Footer year */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Back to top */
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* Scroll-triggered reveal (single subtle pass, not per-hover) */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('is-visible'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => io.observe(el));
    }
  }

  /* Animated counters (hero metrics) */
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
      if (prefersReducedMotion()) { el.textContent = target; return; }
      const duration = 1200;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(el => cio.observe(el));
    } else {
      counters.forEach(animateCounter);
    }
  }
});