import { displayAsideMenu } from "./aside_menu";

const menuIcon = document.querySelector(".footer__button--bars");

menuIcon.addEventListener("click", event => {
    displayAsideMenu();
});

