//Hide-Show button appears when needed on small screens
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.onclick = () => {
    navLinks.classList.toggle("show");
};

