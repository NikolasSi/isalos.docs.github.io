document.addEventListener('DOMContentLoaded', (event) => {
  const storedTheme = localStorage.getItem('theme');
  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

  if (storedTheme) {
      jtd.setTheme(storedTheme);
      toggleDarkMode.textContent = storedTheme === 'dark' ? '🌞' : '🌜';
      toggleDarkMode.setAttribute('aria-label', storedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  toggleDarkMode.style.fontSize = '1.5em';

  toggleDarkMode.addEventListener('click', function() {
      if (jtd.getTheme() === 'dark') {
          jtd.setTheme('light');
          toggleDarkMode.textContent = '🌜';
          toggleDarkMode.setAttribute('aria-label', 'Switch to dark mode');
          localStorage.setItem('theme', 'light');
      } else {
          jtd.setTheme('dark');
          toggleDarkMode.textContent = '🌞';
          toggleDarkMode.setAttribute('aria-label', 'Switch to light mode');
          localStorage.setItem('theme', 'dark');
      }
  });
});
