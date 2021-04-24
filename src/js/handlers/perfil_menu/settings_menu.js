import { displayPaymentMenu } from "./settings_menu/payment_menu";
import { displayPreferencesMenu} from "./settings_menu/preferences_menu";
import { displayDownloadMenu} from "./settings_menu/download_menu";
import { displayHelpMenu } from "./settings_menu/help_menu";

const settingsMenu = document.querySelector(".settings_menu");
const closeButton = settingsMenu.querySelector(".settings_menu__close_icon");
const paymentMenuButton = document.querySelector(".settings_menu--payment");
const preferencesMenuButton = document.querySelector(".settings_menu--preferences");
const downloadMenuButton = document.querySelector(".settings_menu--download");
const helpMenuButton = document.querySelector(".settings_menu--help");

closeButton.addEventListener("click", event => {
    closeSettingsMenu();
});

paymentMenuButton.addEventListener("click", event => {
    displayPaymentMenu();
});

preferencesMenuButton.addEventListener("click", event => {
    displayPreferencesMenu();
});

downloadMenuButton.addEventListener("click", event => {
    displayDownloadMenu();
});

helpMenuButton.addEventListener("click", event => {
    displayHelpMenu();
});

export function displaySettingsMenu() {
    settingsMenu.style.display = "block";
    settingsMenu.style.animation = "slide_open_left_to_right .4s ease-in-out forwards";
}

function closeSettingsMenu() {
    settingsMenu.style.animation = "slide_close_left_to_right .4s ease-in-out forwards";
    
    setTimeout(() => {
        settingsMenu.style.display = "none";
    }, 400);
}