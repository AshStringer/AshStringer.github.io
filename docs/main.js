// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙'; // Moon icon for light mode
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌞'; // Sun icon for dark mode
  }
});

// Typing Effect
const typingEffect = document.querySelector('.typing-effect');
const typingText = "Web Developer | UI/UX Enthusiast | JavaScript Lover";
let i = 0;

function typeWriter() {
  if (i < typingText.length) {
    typingEffect.textContent += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
