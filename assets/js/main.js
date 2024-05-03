const navMenu = document.getElementById( "nav-menu"),
navToggle = document.getElementById( "nav-toggle"),
navClose = document.getElementById( "nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

function scrollHeader () {
    const header = document.getElementById("header");
    if (this.scrollY >= 100) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);