const categoriesSection = document.querySelector(".categories");

export function displayCategories() {
    categoriesSection.classList.add("active");
    categoriesSection.style.animation = "slide_open_up_to_down .4s ease-in-out forwards";
}