const downloadMenu = document.querySelector(".download_menu");
const closeButton = downloadMenu.querySelector(".download_menu__close_icon");

closeButton.addEventListener("click", event => {
    closeDownloadMenu();
});

export function displayDownloadMenu() {
    downloadMenu.style.display = "block";
    downloadMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closeDownloadMenu() {
    downloadMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";

    setTimeout(() => {
        downloadMenu.style.display = "none";
    }, 400);
}