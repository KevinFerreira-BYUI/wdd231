import { displayModal } from "./modal.mjs";

document.addEventListener("DOMContentLoaded", () => {

    // Current year and Last Modified
    const date = new Date();
    const currentYear = document.getElementById("currentYear").innerHTML = `${date.getFullYear()}`;
    const lastModified = document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

    // Menu button
    const hambBtn = document.getElementById("hambBtn");
    const closeBtn = document.getElementById("closeBtn");
    const navigation = document.querySelector(".nav-container")

    hambBtn.addEventListener("click", () => {
        navigation.classList.add("active");
        navigation.classList.remove("hidden");
        hambBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        hambBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        navigation.classList.add("hidden");
    });

    // Display the modal
    displayModal();

});