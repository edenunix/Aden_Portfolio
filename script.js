document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu');
  const navLinks = document.getElementById('navLinks');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isDisplayed = navLinks.style.display === 'flex';
      navLinks.style.display = isDisplayed ? 'none' : 'flex';
      if (!isDisplayed) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid var(--border)';
      }
    });
  }

  // Scroll Progress Bar & Footer Back to Top
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progress');
    if (progressBar) progressBar.style.width = scrolled + '%';
  });

  const topBtn = document.getElementById('top');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Current year auto-update
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});