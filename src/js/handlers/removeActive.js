const mainSections = document.querySelectorAll("main section");

export function removeActive() {
    mainSections.forEach(i => {
        i.classList.remove("active");
    });
}