const homeSection = document.querySelector(".home");

export function displayHome() {
    homeSection.classList.add("active");
    homeSection.style.animation = "slide_open_down_to_up .4s ease-in-out forwards";
}