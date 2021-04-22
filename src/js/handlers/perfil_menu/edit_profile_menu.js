const editProfileMenu = document.querySelector(".edit_profile_menu");
const closeButton = document.querySelector(".edit_profile_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeEditProfileMenu();
});

export function displayEditProfileMenu() {
    editProfileMenu.style.display = "block";
    editProfileMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closeEditProfileMenu() {
    editProfileMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";

    setTimeout(() => {
        editProfileMenu.style.display = "none";
    }, 400);
}