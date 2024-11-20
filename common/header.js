const themeHeader = {
  initialize() {
    this.adjustHeader();
    this.bindEvents();
  },

  adjustHeader() {
    const header = document.querySelector('.d-header');
    if (header) {
      header.dataset.theme = 'modern';
    }
  },

  bindEvents() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.d-header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });
  }
};

export default themeHeader;
