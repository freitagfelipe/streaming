const seasonalSection = document.querySelector(".seasonal");

export function displaySeasonal() {
    seasonalSection.classList.add("active");
    seasonalSection.style.animation = "slide_open_up_to_down .4s ease-in-out forwards";
}