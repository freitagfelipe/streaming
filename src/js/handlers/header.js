import { removeActive } from "./removeActive";
import { displayMyList } from "./main/myList";
import { displaySeasonal } from "./main/seasonal";
import { displayCategories } from "./main/categories";

const myListButton = document.querySelector(".header__button--myList");
const seasonalButton = document.querySelector(".header__button--seasonal");
const categoriesButton = document.querySelector(".header__button--categories");

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