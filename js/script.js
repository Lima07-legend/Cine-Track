// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.textContent = "🌙";
    } else {
        themeIcon.textContent = "☀️";
    }

});