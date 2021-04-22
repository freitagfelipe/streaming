const categoriesSection = document.querySelector(".categories");

export function displayCategories() {
    categoriesSection.classList.add("active");
    categoriesSection.style.animation = "slide_open_right_to_left .4s ease-in-out forwards";
}