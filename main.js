//Btn Menú desplegable
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".menu__list");
const itemLink = document.querySelectorAll(".link");
const menuActive = document.querySelector(".menu__list__visible")

function toggleMenu() {
    navMenu.classList.toggle("menu__list__visible");
}

navToggle.addEventListener("click", toggleMenu);
itemLink.forEach((n) => n.addEventListener("click", toggleMenu));
