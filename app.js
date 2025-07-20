document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      // Toggle the mobile nav visibility
      mainNav.classList.toggle('open');

      // ✅ TEMP DEBUG: flash the hamburger button red to confirm JS runs
      menuToggle.style.backgroundColor = 'red';
      setTimeout(() => {
        menuToggle.style.backgroundColor = ''; // revert after 300ms
      }, 300);
    });
  } else {
    // Optional: log warning if elements not found
    console.warn('⚠️ menu-toggle or main-nav not found in DOM');
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
      if (mainNav.classList.contains('open')) {
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
    header.style.background = 'rgba(15, 23, 42, 0.95)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.85)';
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
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// =========================
// OPTIONAL: TYPING EFFECT
// =========================
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
  const text = typingElement.dataset.text || '';
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
}

// =========================
// OPTIONAL: CARD HOVER EFFECTS
// =========================
document.querySelectorAll('.skill-card, .project-card').forEach((card) => {
  card.addEventListener('mouseenter', () => card.classList.add('hovered'));
  card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
});

// =========================
// OPTIONAL: PROGRESS BAR ANIMATION
// =========================
const progressBars = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
  progressBars.forEach((bar) => {
    const targetWidth = bar.dataset.progress || '80%';
    bar.style.width = targetWidth;
  });
}

window.addEventListener('load', animateProgressBars);
