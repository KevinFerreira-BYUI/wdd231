document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});





const jPath = "scripts/members.json";
const memberCards = document.querySelector(".memberCard");

async function getMember() {
  const response = await fetch(jPath);
  const data = await response.json();
  console.table(data.members);
  displayMembers(data.members);
}