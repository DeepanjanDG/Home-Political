// utility-bar.js
class UtilityBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="utility-bar">
          <!-- Same HTML content as utility-bar.html -->
        </div>
      `;
      this.initFunctionality();
    }
  
    initFunctionality() {
      // Text Size Adjustments
      document.querySelectorAll('.text-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const size = btn.dataset.size;
          document.body.classList.remove('text-smaller', 'text-larger');
          if (size !== 'default') {
            document.body.classList.add(`text-${size}`);
          }
          localStorage.setItem('textSize', size);
        });
      });
  
      // Contrast Adjustments
      document.querySelectorAll('.contrast-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const theme = btn.dataset.theme;
          document.body.classList.remove('dark-theme', 'light-theme');
          if (theme !== 'default') {
            document.body.classList.add(`${theme}-theme`);
          }
          localStorage.setItem('contrastTheme', theme);
        });
      });
      
      // Spacing Adjustments
      document.querySelectorAll('.spacing-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const spacing = btn.dataset.spacing === 'wide';
          document.body.classList.toggle('wide-spacing', spacing);
          localStorage.setItem('characterSpacing', spacing ? 'on' : 'off');
        });
      });
  
      // Search Functionality
      document.getElementById('search-btn')?.addEventListener('click', () => {
        const query = document.getElementById('search-input').value.trim();
        if (query) {
          alert(`Search would look for: ${query}`);
        }
      });
  
      // Screen Reader Access
      document.getElementById('screen-reader-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        // Your screen reader modal logic here
      });
  
      // Skip Links
      document.querySelectorAll('.skip-link').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
          }
        });
      });
  
      // Load saved preferences
      this.loadPreferences();
    }
  
    loadPreferences() {
      // Text Size
      const savedSize = localStorage.getItem('textSize');
      if (savedSize) {
        document.body.classList.remove('text-smaller', 'text-larger');
        if (savedSize !== 'default') {
          document.body.classList.add(`text-${savedSize}`);
        }
      }
  
      // Contrast Mode
      const savedTheme = localStorage.getItem('contrastTheme');
      if (savedTheme && savedTheme !== 'default') {
        document.body.classList.add(`${savedTheme}-theme`);
      }
  
      // Character Spacing
      const savedSpacing = localStorage.getItem('characterSpacing');
      if (savedSpacing === 'on') {
        document.body.classList.add('wide-spacing');
      }
    }
  }
  
  customElements.define('utility-bar', UtilityBar);