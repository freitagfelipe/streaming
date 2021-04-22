import { displayPerfilMenu } from "./perfil_menu";
import { removeActive } from "./removeActive";
import { displayHome } from "./main/home";

const perfilButton = document.querySelector(".footer__button--perfil");
const homeButton = document.querySelector(".footer__button--home");
const homeSection = document.querySelector(".home");

perfilButton.addEventListener("click", event => {
    displayPerfilMenu();
});

homeButton.addEventListener("click", event => {
    if (!(homeSection.classList.contains("active"))) {
        removeActive();
        displayHome();
    }
});