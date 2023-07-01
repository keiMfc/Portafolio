//Btn Menú desplegable
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".menu__list");
const itemLink = document.querySelectorAll(".link");

function toggleMenu() {
    navMenu.classList.toggle("active");
}

function closeMenuOnResize() {
    if (window.innerWidth >= 768) {
        navMenu.classList.remove("active");
    }
}

navToggle.addEventListener("click", toggleMenu);
itemLink.forEach((link) => {
    link.addEventListener("click", (event) => {
        if (window.innerWidth < 768) {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute("href"));
            if (target) {
                toggleMenu();
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

window.addEventListener("resize", closeMenuOnResize);

//Enviar formulario
const formulario = document.querySelector("#form");
const btnMailTo = document.querySelector("#mail-to");

formulario.addEventListener("submit", procesarSubmit);

function procesarSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    btnMailTo.setAttribute("href", `mailto:keilin.michell@gmail.com?subject=${form.get("asunto")}&body=${form.get("mensaje")}`)
    btnMailTo.click();
    formulario.reset();
}
