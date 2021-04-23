const myListSection = document.querySelector(".myList");

export function displayMyList() {
    myListSection.classList.add("active");
    myListSection.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}