const friendsMenu = document.querySelector(".friends_menu");
const closeButton = document.querySelector(".friends_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeFriendsMenu();
});

export function displayFriendsMenu() {
    friendsMenu.style.display = "block";
    friendsMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closeFriendsMenu() {
    friendsMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";

    setTimeout(() => {
        friendsMenu.style.display = "none";
    }, 400);
}