import { displayPerfilMenu } from "./perfil_menu";

const perfilButton = document.querySelector(".header__button--perfil");
const myListButton = document.querySelector(".header__button--myList");
const seasonalButton = document.querySelector(".header__button--seasonal");
const categoriesButton = document.querySelector(".header__button--categories");

perfilButton.addEventListener("click", event => {
    displayPerfilMenu();
});