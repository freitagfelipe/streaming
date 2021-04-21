const asideMenu = document.querySelector(".side_menu");
const closeButton = asideMenu.querySelector(".side_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeAsideMenu();
});

export function displayAsideMenu() {
    asideMenu.style.animation = "slide_open_right_to_left .4s ease-in-out forwards";
}

function closeAsideMenu() {
    asideMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";
}