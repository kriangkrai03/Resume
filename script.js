// Particles.js Configuration
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#ff4655" },
      shape: { type: "circle" },
      opacity: { value: 0.4, random: true },
      size: { value: 2, random: true },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    },
    retina_detect: true
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (!target) return;
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const offsetTop = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      // Close mobile menu
      document.getElementById('mobile-menu').classList.add('translate-x-full');
    });
  });

  // Toggle mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
  });

  // Hide/show nav on scroll
  let lastScrollTop = 0;
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop <= 0) {
      navbar.classList.remove('translate-y-[-100%]');
    } else if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
      navbar.classList.add('translate-y-[-100%]');
    } else if (currentScrollTop < lastScrollTop) {
      navbar.classList.remove('translate-y-[-100%]');
    }
    lastScrollTop = currentScrollTop;
  });
});