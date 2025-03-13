// Dark Mode Toggle
const darkModeToggle = document.querySelector('.switch input');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
});

// Ensure the initial state is dark mode
body.classList.add('dark-mode');