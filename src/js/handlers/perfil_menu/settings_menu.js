const settingsMenu = document.querySelector(".settings_menu");
const closeButton = settingsMenu.querySelector(".settings_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeSettingsMenu();
});

export function displaySettingsMenu() {
    settingsMenu.style.display = "block";
    settingsMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closeSettingsMenu() {
    settingsMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";
    
    setTimeout(() => {
        settingsMenu.style.display = "none";
    }, 400);
}