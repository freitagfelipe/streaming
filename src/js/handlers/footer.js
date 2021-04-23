import { displayPerfilMenu } from "./perfil_menu";
import { removeActive } from "./removeActive";
import { displayHome } from "./main/home";
import { displaySearchTab } from "./search";

const perfilButton = document.querySelector(".footer__button--perfil");
const homeButton = document.querySelector(".footer__button--home");
const homeSection = document.querySelector(".home");

const searchButton = document.querySelector(".footer__button--search");

searchButton.addEventListener("click", event => {
    displaySearchTab();
});

perfilButton.addEventListener("click", event => {
    displayPerfilMenu();
});

homeButton.addEventListener("click", event => {
    if (!(homeSection.classList.contains("active"))) {
        removeActive();
        displayHome();
    }
});