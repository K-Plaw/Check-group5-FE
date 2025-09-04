const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

function toggleNav() {
  navLinks.classList.toggle("active");
}

// Works for both click and touch
hamburger.addEventListener("click", toggleNav);
hamburger.addEventListener("touchstart", toggleNav);
