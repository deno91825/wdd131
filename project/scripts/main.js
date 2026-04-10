const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const scrollFade = document.querySelector(".scroll-fade");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;

    // calculate fade intensity (0 → 1)
    let fade = scrollY / heroHeight;

    if (fade > 1) fade = 1;

    scrollFade.style.opacity = fade;
});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});