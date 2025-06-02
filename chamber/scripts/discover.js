document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

window.addEventListener("load", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".menu a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});


const visitMsg = document.querySelector(".visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days < 1) {
    visitMsg.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
    visitMsg.textContent = "You last visited 1 day ago.";
    } else {
    visitMsg.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

fetch("scripts/places.json")
  .then((res) => res.json())
  .then((data) => {
    const cardsSection = document.querySelector(".discover-cards");

    data.places.forEach((place) => {
      const card = document.createElement("article");
      card.classList.add("discover-card");

      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
          <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <a href="#" class="btn">Learn More</a>
      `;

      cardsSection.appendChild(card);
    });
});