const helpMenu = document.querySelector(".help_menu");
const closeButton = document.querySelector(".help_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeHelpMenu();
});

export function displayHelpMenu() {
    helpMenu.style.display = "block";
    helpMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closeHelpMenu() {
    helpMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";

    setTimeout(() => {
        helpMenu.style.display = "none";
    }, 400);
}