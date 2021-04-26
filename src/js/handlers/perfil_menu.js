import { displayEditProfileMenu } from "./perfil_menu/edit_profile_menu";
import { displayFriendsMenu } from "./perfil_menu/friends_menu";
import { displayHistoryMenu } from "./perfil_menu/history_menu";
import { displaySettingsMenu } from "./perfil_menu/settings_menu";

const perfilMenu = document.querySelector(".perfil_menu");
const closeMenu = perfilMenu.querySelector(".perfil_menu__close_icon");
const editProfileButton = document.querySelector(".perfil_menu__button--edit_profile");
const friendsButton = document.querySelector(".perfil_menu__button--friends");
const historyButton = document.querySelector(".perfil_menu__button--history");
const settingsButton = document.querySelector(".perfil_menu__button--settings");

editProfileButton.addEventListener("click", event => {
    displayEditProfileMenu();
});

friendsButton.addEventListener("click", event => {
    displayFriendsMenu();
});

historyButton.addEventListener("click", event => {
    displayHistoryMenu();
});

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