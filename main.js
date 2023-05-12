function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'night') {
        setTheme(' ');
    } else {
        setTheme('night');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'night') {
        setTheme('night');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('');
      document.getElementById('slider').checked = true;
    }
})();