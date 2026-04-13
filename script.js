/* ── Navbar: scroll behaviour ──────────────────────────── */
const navbar = document.getElementById('navbar');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 40);
  lastY = y;
}, { passive: true });

/* ── Mobile menu ───────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

// Close on nav link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Smooth scroll for anchor links ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = 72; // navbar height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Intersection Observer: fade-up animations ─────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Counter animation for stat values ─────────────────── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  if (!target) return;
  const duration = 1600;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target.querySelector('[data-count]');
      if (el) animateCounter(el);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => counterObserver.observe(card));

/* ── Demo form: submit handler ─────────────────────────── */
// Formspree endpoint — sign up at formspree.io, create a form linked
// to info@svara-ai.com, then replace YOUR_FORM_ID with your 8-char ID.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrergzpp';

const form = document.getElementById('demoForm');
const success = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    btn.innerHTML = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.style.display = 'none';
        success.classList.add('show');
      } else {
        // Surface the error but don't expose internal details
        throw new Error(`Server responded with ${res.status}`);
      }
    } catch (err) {
      console.error('[SVARA] Demo form submission failed:', err);
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      // Friendly fallback — open email directly so no lead is lost
      alert('Something went wrong. Please email us directly at info@svara-ai.com and we\'ll get back to you within a day.');
    }
  });
}

/* ── Demo audio player ─────────────────────────────────── */
const audio       = document.getElementById('demoAudio');
const playBtn     = document.getElementById('playBtn');
const iconPlay    = document.getElementById('iconPlay');
const iconPause   = document.getElementById('iconPause');
const progressFill = document.getElementById('progressFill');
const progressWrap = document.getElementById('progressWrap');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl   = document.getElementById('totalTime');
const waveform    = document.getElementById('playerWaveform');

function formatTime(seconds) {
  if (!isFinite(seconds)) return '–:––';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

if (audio) {
  audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
  });

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      iconPlay.style.display  = 'none';
      iconPause.style.display = 'block';
      waveform.classList.add('playing');
    } else {
      audio.pause();
      iconPlay.style.display  = 'block';
      iconPause.style.display = 'none';
      waveform.classList.remove('playing');
    }
  });

  audio.addEventListener('timeupdate', () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progressFill.style.width = `${pct}%`;
  });

  // Click on progress bar to seek
  progressWrap.addEventListener('click', e => {
    const rect = progressWrap.getBoundingClientRect();
    const pct  = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  });

  audio.addEventListener('ended', () => {
    iconPlay.style.display  = 'block';
    iconPause.style.display = 'none';
    waveform.classList.remove('playing');
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
  });
}

/* ── Pause marquee on hover ────────────────────────────── */
document.querySelectorAll('.marquee-inner, .int-inner').forEach(el => {
  el.addEventListener('mouseenter', () => el.style.animationPlayState = 'paused');
  el.addEventListener('mouseleave', () => el.style.animationPlayState = 'running');
});

/* ── FAQ accordion ─────────────────────────────────────── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
