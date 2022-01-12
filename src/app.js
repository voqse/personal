document.getElementById('theme-switcher').onclick = toggleTheme;

const lightTheme = 'light';
const darkTheme = 'dark';

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.body.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === darkTheme) {
    setTheme(lightTheme);
  } else {
    setTheme(darkTheme);
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === darkTheme || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme(darkTheme);
  } else {
    setTheme(lightTheme);
  }
})();
