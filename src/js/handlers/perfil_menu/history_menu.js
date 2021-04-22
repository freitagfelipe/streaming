const historyMenu = document.querySelector(".history_menu");
const closeButton = document.querySelector(".history_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeEditProfileMenu();
});

export function displayHistoryMenu() {
    historyMenu.style.display = "block";
    historyMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closeEditProfileMenu() {
    historyMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";

    setTimeout(() => {
        historyMenu.style.display = "none";
    }, 400);
}