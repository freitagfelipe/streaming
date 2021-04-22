const seasonalSection = document.querySelector(".seasonal");

export function displaySeasonal() {
    seasonalSection.classList.add("active");
    seasonalSection.style.animation = "slide_open_right_to_left .4s ease-in-out forwards";
}