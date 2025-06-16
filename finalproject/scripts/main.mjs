import { displayModal } from "./modal.mjs";
import { displayProductsIndex } from "./fetchProducts.mjs";
import { displayProducts } from "./fetchProducts.mjs";


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
        navigation.classList.remove("hiddenMenu");
        hambBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        hambBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        navigation.classList.add("hiddenMenu");
    });

    // Display modal
    displayModal();

    // Display products in the modal
    displayProductsIndex();

    // Display products in the products.html
    displayProducts();
});



// window.addEventListener("load", () => {
//   const currentPath = window.location.pathname.split("/").pop() || "index.html";
//   const navLinks = document.querySelectorAll(".menu a");

//   navLinks.forEach(link => {
//     const href = link.getAttribute("href");
//     if (href === currentPath || (currentPath === "" && href === "index.html")) {
//       link.classList.add("active");
//     }
//   });
// });
