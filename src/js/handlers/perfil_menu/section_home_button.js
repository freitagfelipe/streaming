const sectionHomeButton = document.querySelectorAll(".section_home_button");
const perfilMenu = document.querySelector(".perfil_menu");
const settingsMenu = document.querySelector(".settings_menu");
const sectionsSettingsMenu = document.querySelectorAll(".settings_menu section");

sectionHomeButton.forEach(i => {
    i.addEventListener("click", event => {
        displayHome(event.target);
    });
});

function displayHome(button) {
    button.parentElement.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";
    settingsMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";
    sectionsSettingsMenu.forEach(i => {
        i.style.animation = "slide_close_left_to_right .4s ease-in-out";
    });

    setTimeout(() => {
        sectionsSettingsMenu.forEach(i => {
            i.style.display = "none";
        });

        settingsMenu.style.display = "none";
        button.parentElement.style.display = "none";
        perfilMenu.style.animation = "slide_close_right_to_left .4s ease-in-out forwards";
    }, 400);
}