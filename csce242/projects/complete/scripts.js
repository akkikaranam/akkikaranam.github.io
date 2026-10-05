//Hide-Show button appears when needed on small screens
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.onclick = () => {
    navLinks.classList.toggle("show");
};

const cursorGlow = document.createElement("div");
cursorGlow.id = "cursor-glow";

document.body.appendChild(cursorGlow);
document.onmousemove = (event) => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
};

