const searchTab = document.querySelector(".search");
const closeButton = searchTab.querySelector(".search__close_button");

closeButton.addEventListener("click", event => {
    closeSearchTab();
});

export function displaySearchTab() {
    searchTab.style.display = "grid";
    searchTab.style.animation = "slide_open_down_to_up .4s ease-in-out forwards";
}

function closeSearchTab() {
    searchTab.style.animation = "slide_close_up_to_down .4s ease-in-out forwards";
    setTimeout(() => {
        searchTab.style.display = "none";
    }, 400);
}