// DOM Elements
const textSizeButtons = document.querySelectorAll('.utility-btn[data-size]');
const contrastButtons = document.querySelectorAll('.utility-btn[data-theme]');
const spacingButtons = document.querySelectorAll('.utility-btn[data-spacing]');
const searchBtn = document.querySelector('.search-btn');
const screenReaderBtn = document.getElementById('screen-reader-access-btn');
const searchInput = document.getElementById('search-input');

// Smooth scrolling for "Skip to main content" button
const skipToMainContentBtn = document.getElementById('skip-to-main-content-btn');
if (skipToMainContentBtn) {
  skipToMainContentBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Text Size Adjustment
// textSizeButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const size = button.dataset.size;
//     document.documentElement.style.fontSize =
//       size === 'small' ? '14px' :
//       size === 'large' ? '18px' : '16px';
//     localStorage.setItem('textSize', size);
//   });
// });

// Contrast Mode Toggle
// contrastButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const theme = button.dataset.theme;
//     document.body.classList.remove('contrast-dark', 'contrast-light');
//     if (theme !== 'default') {
//       document.body.classList.add(`contrast-${theme}`);
//     }
//     localStorage.setItem('contrastMode', theme);
//   });
// });

// Character Spacing Toggle
// spacingButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const spacing = button.dataset.spacing === 'wide';
//     document.body.classList.toggle('wide-spacing', spacing);
//     localStorage.setItem('charSpacing', spacing ? 'wide' : 'normal');
//   });
// });

// Search Functionality
// if (searchBtn) {
//   searchBtn.addEventListener('click', () => {
//     const query = searchInput.value.trim();
//     if (query) {
//       alert(`Search functionality would search for: ${query}`);
//       // Implement actual search functionality here
//     }
//   });
// }

// Screen Reader Access
 if (screenReaderBtn) {
   screenReaderBtn.addEventListener('click', () => {
     window.location.href = 'screen.html'; // Redirect to screen.html
  });
 }

// Load saved preferences
// window.addEventListener('DOMContentLoaded', () => {
//   // Text Size
//   const savedSize = localStorage.getItem('textSize');
//   if (savedSize) {
//     document.documentElement.style.fontSize =
//       savedSize === 'small' ? '14px' :
//       savedSize === 'large' ? '18px' : '16px';
//   }


// Contrast Mode Toggle
contrastButtons.forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    // Remove all contrast classes
    document.body.classList.remove('contrast-yellow-black', 'contrast-black-white', 'contrast-default');
    // Apply selected contrast
    if (theme === 'yellow-black') {
      document.body.classList.add('contrast-yellow-black');
    } else if (theme === 'black-white') {
      document.body.classList.add('contrast-black-white');
    } else {
      document.body.classList.add('contrast-default');
    }
    localStorage.setItem('contrastMode', theme);
  });
});

// Load saved contrast preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('contrastMode');
  document.body.classList.remove('contrast-yellow-black', 'contrast-black-white', 'contrast-default');
  if (savedTheme === 'yellow-black') {
    document.body.classList.add('contrast-yellow-black');
  } else if (savedTheme === 'black-white') {
    document.body.classList.add('contrast-black-white');
  } else {
    document.body.classList.add('contrast-default');
  }
});


  // Character Spacing
const savedSpacing = localStorage.getItem('charSpacing');
if (savedSpacing === 'wide') {
  document.body.classList.add('wide-spacing');
}