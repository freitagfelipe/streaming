import { displaySettingsMenu } from "./settings_menu";
import { removeActive } from "./removeActive";
import { displayHome } from "./main/home";

const menuIcon = document.querySelector(".footer__button--bars");
const homeButton = document.querySelector(".footer__button--home");
const homeSection = document.querySelector(".home");

menuIcon.addEventListener("click", event => {
    displaySettingsMenu();
});

homeButton.addEventListener("click", event => {
    if (!(homeSection.classList.contains("active"))) {
        removeActive();
        displayHome();
    }
});