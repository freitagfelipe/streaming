const perfilMenu = document.querySelector(".perfil_menu");
const closeMenu = document.querySelector(".perfil_menu__close_icon");

closeMenu.addEventListener("click", event => {
    closePerfilMenu();
});

export function displayPerfilMenu() {
    perfilMenu.style.animation = "slide_open .4s ease-in-out forwards";
}

function closePerfilMenu() {
    perfilMenu.style.animation = "slide_close .4s ease-in-out forwards";
}