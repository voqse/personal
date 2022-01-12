document.getElementById('theme-switcher').onclick = toggleTheme;

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.body.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light');
    // document.body.classList.add('light')
    // document.body.classList.remove('dark')
  } else {
    setTheme('dark');
    // document.body.classList.add('dark')
    // document.body.classList.remove('light')
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
})();

