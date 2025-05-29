document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

const nonLevelModal = document.getElementById("nonLevelModal");

function displayModals(){
  nonLevelModal.innerHTML = "";
  nonLevelModal.innerHTML = `
    <button class="closeModal">✖</button>
    <h1>Ideal pra pequenos negócios que estão começando ou querem só marcar presença.</h1>
    <h2></h2>

  `;
}