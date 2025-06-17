import { displayModal } from "./modal.mjs";
import { displayProductsIndex, displayProducts } from "./fetchProducts.mjs";
import { displayLocalStorage } from "./localStorage.mjs";


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

    // Wayfiding
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLink = document.querySelectorAll(".nav-menu a");
    navLink.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath){
            link.classList.add("wayfind");
        }
    });

    // Display modal
    if(document.getElementById("productModal")){
        displayModal();
    }

    // Display products in the modal
    if (document.querySelector(".productList")){
        displayProductsIndex();
    }

    // Display products in the products.html
    if (document.querySelector(".products-list-container")){
        displayProducts();
    }

    // Display local storage in thanks.html
    if (document.querySelector(".local-storage")){
        displayLocalStorage();
    }
});



