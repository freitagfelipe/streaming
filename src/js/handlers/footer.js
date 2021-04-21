import { displaySettingsMenu } from "./settings_menu";

const menuIcon = document.querySelector(".footer__button--bars");

menuIcon.addEventListener("click", event => {
    displaySettingsMenu();
});