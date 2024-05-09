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

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


function scrollHeader () {
    const header = document.getElementById("header");
    if (this.scrollY >= 100) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);


//*imagem da mulher presente na home//

gsap.from('.home__cover', 1.5, {opacity: 0, y: 20, delay: 0.1});

gsap.from('.home__data', 1.8, {opacity: 0, x: -100, delay: 0.2});

gsap.from('.advantages__bank', 1.4, {opacity: 0, x: -130, delay: 0.8});
gsap.from('.advantages__pay', 1.4, {opacity: 0, x: -120, delay: 0.7});
gsap.from('.advantages__code', 1.4, {opacity: 0, x: -110, delay: 0.4});
gsap.from('.advantages__hour', 1.4, {opacity: 0, x: -100, delay: 0.6});

gsap.from(".advantages__tittle", 1.5, { opacity: 0, x: -150, delay: 0.2 });
gsap.from(".advantages__subittle", 1.5, { opacity: 0, x: 150, delay: 0.2 });


gsap.from('.advantages__blue', 1.4, {opacity: 0, x: 130, delay: 0.2});
gsap.from('.advantages__pink', 1.4, {opacity: 0, x: 120, delay: 0.1});
gsap.from('.advantages__silver', 1.4, {opacity: 0, x: 110, delay: 0.4});
gsap.from('.advantages__gold', 1.4, {opacity: 0, x: 100, delay: 0.6});

gsap.from(".footer__header", 1.5, { opacity: 0, y: -150, delay: 0.2 });
gsap.from(".footer__data", 1.5, { opacity: 0, y: 150, delay: 0.2 });

gsap.from(".footer__card", 1.5, { opacity: 0.3, y: 150, delay: 0.25 });


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".footer__button");
    const dataSections = document.querySelectorAll(".footer__data");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-target");
        const targetSection = document.querySelector(target);
  
        buttons.forEach((btn) => btn.classList.remove("active"));
        dataSections.forEach((section) => (section.style.display = "none"));
  
        this.classList.add("active");
        targetSection.style.display = "grid";
      });
    });
  });

