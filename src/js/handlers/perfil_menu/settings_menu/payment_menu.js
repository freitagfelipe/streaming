const paymentMenu = document.querySelector(".payment_menu");
const closeButton = paymentMenu.querySelector(".payment_menu__close_icon");

closeButton.addEventListener("click", event => {
    closePaymentMenu();
});

export function displayPaymentMenu() {
    paymentMenu.style.display = "block";
    paymentMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closePaymentMenu() {
    paymentMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";

    setTimeout(() => {
        paymentMenu.style.display = "none";
    }, 400);
}