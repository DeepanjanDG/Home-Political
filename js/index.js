// DOM Elements
const textSizeButtons = document.querySelectorAll('.utility-btn[data-size]');
const contrastButtons = document.querySelectorAll('.utility-btn[data-theme]');
const spacingButtons = document.querySelectorAll('.utility-btn[data-spacing]');
const searchBtn = document.querySelector('.search-btn');
const screenReaderBtn = document.getElementById('screen-reader-access-btn'); // Fixed ID
const searchInput = document.getElementById('search-input');

// Navigation scroll effect
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scrolling for "Skip to main content" button
const skipToMainContentBtn = document.getElementById('skip-to-main-content-btn');
skipToMainContentBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth' });
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Skip if it's an external link
    if (this.getAttribute('href').startsWith('http') || this.getAttribute('href').includes('.html')) {
      return;
    }

    e.preventDefault();

    // Add active class
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');

    // Smooth scroll to target
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight current page in navigation
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Text Size Adjustment
textSizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const size = button.dataset.size;
    document.documentElement.style.fontSize =
      size === 'small' ? '14px' :
      size === 'large' ? '18px' : '16px';
    localStorage.setItem('textSize', size);
  });
});

// Contrast Mode Toggle
contrastButtons.forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    document.body.classList.remove('contrast-dark', 'contrast-light');
    if (theme !== 'default') {
      document.body.classList.add(`contrast-${theme}`);
    }
    localStorage.setItem('contrastMode', theme);
  });
});

// Character Spacing Toggle
spacingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const spacing = button.dataset.spacing === 'wide';
    document.body.classList.toggle('wide-spacing', spacing);
    localStorage.setItem('charSpacing', spacing ? 'wide' : 'normal');
  });
});

// Search Functionality
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Search functionality would search for: ${query}`);
    // Implement actual search functionality here
  }
});

// Screen Reader Access
screenReaderBtn.addEventListener('click', () => {
  window.location.href = 'screen.html'; // Redirect to screen.html
});

// Load saved preferences
window.addEventListener('DOMContentLoaded', () => {
  // Text Size
  const savedSize = localStorage.getItem('textSize');
  if (savedSize) {
    document.documentElement.style.fontSize =
      savedSize === 'small' ? '14px' :
      savedSize === 'large' ? '18px' : '16px';
  }

  // Contrast Mode
  const savedTheme = localStorage.getItem('contrastMode');
  if (savedTheme && savedTheme !== 'default') {
    document.body.classList.add(`contrast-${savedTheme}`);
  }

  // Character Spacing
  const savedSpacing = localStorage.getItem('charSpacing');
  if (savedSpacing === 'wide') {
    document.body.classList.add('wide-spacing');
  }
});