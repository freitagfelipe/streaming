import { displaySettingsMenu } from "./settings_menu";

const perfilMenu = document.querySelector(".perfil_menu");
const closeMenu = document.querySelector(".perfil_menu__close_icon");
const settingsButton = document.querySelector(".perfil_menu__button--settings");

settingsButton.addEventListener("click", event => {
    displaySettingsMenu();
});

closeMenu.addEventListener("click", event => {
    closePerfilMenu();
});

export function displayPerfilMenu() {
    perfilMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closePerfilMenu() {
    perfilMenu.style.animation = "slide_close_right_to_left .4s ease-in-out forwards";
}