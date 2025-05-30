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

const memberInfo = new URLSearchParams(window.location.search);
console.log(memberInfo);

const displayInfos = document.getElementById("results");
displayInfos.innerHTML = `
    <p><strong>Name: </strong>${memberInfo.get("first-name")}</p>
    <p><strong>Last name: </strong>${memberInfo.get("last-name")}</p>
    <p><strong>Email: </strong>${memberInfo.get("email")}</p>
    <p><strong>Phone number: </strong>${memberInfo.get("mobile")}</p>
    <p><strong>Business name: </strong>${memberInfo.get("organization")}</p>
    <p><strong>Timestamp: </strong>${memberInfo.get("timestamp")}</p>
`;

