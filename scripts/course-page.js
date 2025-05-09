
const hamburguer = document.getElementById("hambButton")
const closeBtn = document.getElementById("closeButton")
const nav = document.querySelector("nav.main-nav")

hamburguer.addEventListener("click", () => {
    nav.classList.add("open");
    hamburguer.classList.add("hambHidden");
    closeBtn.classList.remove("closeHidden");
});

closeBtn.addEventListener("click" , () => {
    nav.classList.remove("open");
    hamburguer.classList.remove("hambHidden");
    closeBtn.classList.add("closeHidden");
});

