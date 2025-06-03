// DOM Elements
const contrastButtons = document.querySelectorAll('.utility-btn[data-theme]');
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

// Text Size Functionality
const textSizeButtons = document.querySelectorAll('.text-size-btn');
let fontSizeLevels = [14, 16, 18, 20, 22]; // px
let currentLevel = 1; // Default is 16px (index 1)

function applyFontSize(level) {
  document.documentElement.style.fontSize = fontSizeLevels[level] + 'px';
  localStorage.setItem('fontSizeLevel', level);
}


textSizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const size = btn.dataset.size;
    if (size === 'small' && currentLevel > 0) {
      currentLevel--;
    } else if (size === 'large' && currentLevel < fontSizeLevels.length - 1) {
      currentLevel++;
    } else if (size === 'default') {
      currentLevel = 1;
    }
    applyFontSize(currentLevel);
  });
});


// Load saved font size on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedLevel = localStorage.getItem('fontSizeLevel');
  if (savedLevel !== null) {
    currentLevel = parseInt(savedLevel, 10);
    applyFontSize(currentLevel);
  }
});


// Character Spacing Functionality
const spacingButtons = document.querySelectorAll('.spacing-btn');
spacingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.spacing === 'wide') {
      document.body.classList.add('wide-spacing');
      localStorage.setItem('charSpacing', 'wide');
    } else {
      document.body.classList.remove('wide-spacing');
      localStorage.setItem('charSpacing', 'normal');
    }
  });
});


// Load saved character spacing on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedSpacing = localStorage.getItem('charSpacing');
  if (savedSpacing === 'wide') {
    document.body.classList.add('wide-spacing');
  } else {
    document.body.classList.remove('wide-spacing');
  }
});


// Search Functionality
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Search functionality would search for: ${query}`);
      // Implement actual search functionality here
    }
  });
}


// Screen Reader Access
 if (screenReaderBtn) {
   screenReaderBtn.addEventListener('click', () => {
     window.location.href = 'screen.html'; // Redirect to screen.html
  });
 }


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


// JavaScript for expandable key subjects
  document.addEventListener('DOMContentLoaded', function() {
  // Function to handle expand/collapse
  function setupExpandButton(expandBtn, container) {
    expandBtn.addEventListener('click', function() {
      container.classList.toggle('key-subjects-expanded');
      
      // Update button text based on current language
      if (container.classList.contains('key-subjects-expanded')) {
        if (document.documentElement.lang === 'hi') {
          expandBtn.innerHTML = 'कम विषय दिखाएं <span class="icon">▲</span>';
        } else {
          expandBtn.innerHTML = 'Show Less Subjects <span class="icon">▲</span>';
        }
      } else {
        if (document.documentElement.lang === 'hi') {
          expandBtn.innerHTML = 'और विषय दिखाएं <span class="icon">▼</span>';
        } else {
          expandBtn.innerHTML = 'Show More Subjects <span class="icon">▼</span>';
        }
      }
    });
  }

  // Set up buttons for both languages
  const englishExpandBtn = document.querySelector('.english-content .expand-subjects-btn');
  const englishContainer = document.querySelector('.english-content .key-subjects-container');
  if (englishExpandBtn && englishContainer) {
    setupExpandButton(englishExpandBtn, englishContainer);
  }

  const hindiExpandBtn = document.querySelector('.hindi-content .expand-subjects-btn');
  const hindiContainer = document.querySelector('.hindi-content .key-subjects-container');
  if (hindiExpandBtn && hindiContainer) {
    setupExpandButton(hindiExpandBtn, hindiContainer);
  }
});