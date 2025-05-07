// DOM Elements
const textSizeButtons = document.querySelectorAll('.utility-btn[data-size]');
const contrastButtons = document.querySelectorAll('.utility-btn[data-theme]');
const spacingButtons = document.querySelectorAll('.utility-btn[data-spacing]');
const searchBtn = document.querySelector('.search-btn');
const screenReaderBtn = document.getElementById('screen-reader-access');
const screenReaderModal = document.getElementById('screen-reader-modal');
const closeScreenReaderBtn = document.getElementById('close-screen-reader');

// Navigation scroll effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Skip if it's an external link
    if (this.getAttribute('href').startsWith('http') || 
        this.getAttribute('href').includes('.html')) {
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
document.addEventListener('DOMContentLoaded', function() {
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
    document.body.classList.remove('contrast-black', 'contrast-white');
    if (theme !== 'default') {
      document.body.classList.add(`contrast-${theme}`);
    }
    localStorage.setItem('contrastMode', theme);
  });
});

// Character Spacing Toggle
spacingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const spacing = button.dataset.spacing === 'on';
    document.body.classList.toggle('char-spacing', spacing);
    localStorage.setItem('charSpacing', spacing ? 'on' : 'off');
  });
});

// Search Functionality
searchBtn.addEventListener('click', () => {
  const query = document.getElementById('search-box').value.trim();
  if (query) {
    alert(`Search functionality would search for: ${query}`);
    // Implement actual search functionality here
  }
});

// Screen Reader Access
screenReaderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  screenReaderModal.style.display = 'flex';
});

closeScreenReaderBtn.addEventListener('click', () => {
  screenReaderModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === screenReaderModal) {
    screenReaderModal.style.display = 'none';
  }
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
  if (savedSpacing === 'on') {
    document.body.classList.add('char-spacing');
  }
});