import { displayPerfilMenu } from "./perfil_menu";
import { removeActive } from "./removeActive";
import { displayMyList } from "./main/myList";
import { displaySeasonal } from "./main/seasonal";
import { displayCategories } from "./main/categories";

const perfilButton = document.querySelector(".header__button--perfil");
const myListButton = document.querySelector(".header__button--myList");
const seasonalButton = document.querySelector(".header__button--seasonal");
const categoriesButton = document.querySelector(".header__button--categories");

perfilButton.addEventListener("click", event => {
    displayPerfilMenu();
});

myListButton.addEventListener("click", event => {
    removeActive();
    displayMyList();
});

seasonalButton.addEventListener("click", event => {
    removeActive();
    displaySeasonal();
});

categoriesButton.addEventListener("click", event => {
    removeActive();
    displayCategories();
}); 