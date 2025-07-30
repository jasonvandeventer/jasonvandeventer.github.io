document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      // Toggle the mobile nav visibility
      mainNav.classList.toggle('open');

      // Visual feedback for mobile menu interaction
      menuToggle.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
      setTimeout(() => {
        menuToggle.style.backgroundColor = '';
      }, 300);
    });
  }
});

// =========================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 80, // offset for sticky header
        behavior: 'smooth',
      });

      // Close mobile menu after clicking a link
      const mainNav = document.getElementById('main-nav');
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
    }
  });
});

// =========================
// SCROLL HEADER BACKGROUND CHANGE
// =========================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(15, 23, 42, 0.98)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.95)';
  }
});

// =========================
// ANIMATE-ON-SCROLL
// =========================
const animateElements = document.querySelectorAll('.animate-on-scroll');

function handleScrollAnimation() {
  const triggerBottom = window.innerHeight * 0.85;

  animateElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// =========================
// CARD HOVER EFFECTS
// =========================
document.querySelectorAll('.skill-card, .project-card').forEach((card) => {
  card.addEventListener('mouseenter', () => card.classList.add('hovered'));
  card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
});

// =========================
// FORM ENHANCEMENT
// =========================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const submitButton = this.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      // Re-enable after 3 seconds (form will likely redirect/refresh)
      setTimeout(() => {
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
      }, 3000);
    }
  });
}