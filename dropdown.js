// Dropdown text and navigation handler
const DropdownHandler = {
  init() {
    this.bindEvents();
    this.updateDropdownText();
  },

  getDropdownButton() {
    return document.querySelector('.dropdown-sistema button');
  },

  updateDropdownText() {
    const button = this.getDropdownButton();
    if (!button) return;

    const path = window.location.pathname;
    const text = path.includes('Pro6') ? 'Pro 6' : 
                 path.includes('Prox') ? 'Pro X' : 
                 'Sistema';
    
    button.textContent = text;
  },

  bindEvents() {
    // Update on page load
    document.addEventListener('DOMContentLoaded', () => {
      this.updateDropdownText();
      
      // Handle dropdown item clicks
      document.querySelectorAll('.sistema-dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
          const button = this.getDropdownButton();
          if (button) {
            button.textContent = e.target.textContent;
          }
        });
      });
    });

    // Handle browser navigation
    window.addEventListener('popstate', () => {
      setTimeout(() => this.updateDropdownText(), 100);
    });

    // Handle programmatic navigation
    const observer = new MutationObserver(() => {
      this.updateDropdownText();
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true
    });
  }
};

// Initialize the handler
DropdownHandler.init();