// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navMenu.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Smooth scroll (enhanced for browsers lacking native behavior on anchors)
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const targetId = link.getAttribute('href') || '';
  if (targetId.length <= 1) return;
  const target = document.querySelector(targetId);
  if (target){
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Reveal on scroll
const revealEls = Array.from(document.querySelectorAll('.reveal'));
if (revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  revealEls.forEach(el => io.observe(el));
}

// Back to top button
const toTop = document.getElementById('toTop');
if (toTop){
  window.addEventListener('scroll', () => {
    if (window.scrollY > 480){
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// WhatsApp chat integration
const whatsappButton = document.getElementById('whatsappButton');
if (whatsappButton){
  whatsappButton.addEventListener('click', () => {
    const phone = '9526327365';
    const message = encodeURIComponent('Hi TechAlfa! I would like to discuss a project.');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank', 'noopener');
  });
}

// Demo form handling (no backend)
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message){
      alert('Please fill out all fields.');
      return;
    }
    form.reset();
    alert('Thanks! Your message has been recorded (demo).');
  });
}