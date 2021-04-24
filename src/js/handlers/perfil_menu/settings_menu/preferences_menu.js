const preferencesMenu = document.querySelector(".preferences_menu");
const closeButton = preferencesMenu.querySelector(".preferences_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeAppConfigurationMenu();
});

export function displayPreferencesMenu() {
    preferencesMenu.style.display = "block";
    preferencesMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}


function closeAppConfigurationMenu() {
    preferencesMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";

    setTimeout(() => {
        preferencesMenu.style.display = "none";
    }, 400);
}