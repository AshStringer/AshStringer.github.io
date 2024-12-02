// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check if there's a stored theme preference
const storedTheme = localStorage.getItem('theme');

// Apply the stored theme on page load
if (storedTheme === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '🌞'; 
} else {
  document.body.removeAttribute('data-theme');
  themeToggle.textContent = '🌙'; 
}

// Toggle the theme on button click
themeToggle.addEventListener('click', () => {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙'; 
    localStorage.setItem('theme', 'light'); 
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌞'; 
    localStorage.setItem('theme', 'dark'); 
  }
});

