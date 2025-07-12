// app.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.background = window.scrollY > 100
    ? 'rgba(15, 23, 42, 0.95)'
    : 'rgba(15, 23, 42, 0.8)';
});

// Animate on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Typing effect
const heroText = document.querySelector('.hero h1');
const originalText = heroText.textContent;
let index = 0;
function typeEffect() {
  if (index < originalText.length) {
    heroText.textContent = originalText.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.addEventListener('load', () => {
  heroText.textContent = '';
  setTimeout(typeEffect, 500);
});

// Project-card hover
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Progress bar animation
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.progress-fill');
      fill && (fill.style.animationPlayState = 'running');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => progressObserver.observe(card));

// Particle effect
function createParticle() {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position:absolute; width:4px; height:4px;
    background:rgba(59,130,246,0.6); border-radius:50%;
    left:${Math.random() * 100}%; top:100%;
    animation:particleRise ${Math.random() * 3 + 2}s linear forwards;
  `;
  document.querySelector('.hero').appendChild(particle);
  setTimeout(() => particle.remove(), 5000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes particleRise {
    to { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
setInterval(createParticle, 2000);
