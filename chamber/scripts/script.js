
const jPath = "scripts/members.json";
const memberCards = document.querySelector(".memberCard");

async function getMember(){
    const response = await fetch(jPath);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let content = document.createElement("div");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let img = document.createElement("img");
        let membershipLevel = document.createElement("p");

        img.setAttribute("src", member.image);
        img.setAttribute("alt", `Image of ${member.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "340");
        img.setAttribute("height", "440");
        img.setAttribute("class", "memberImg")

        name.setAttribute("class", "memberName");
        name.textContent = `${member.name}`;

        address.setAttribute("class", "memberAddress");
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;

        phone.setAttribute("class", "memberPhone");
        phone.innerHTML = `<strong>Phone number:</strong> ${member.phone}`;

        membershipLevel.setAttribute("class", "membershipLevel");
        membershipLevel.innerHTML = `<strong>Membership Level:</strong> ${member.membershipLevel}`;

        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.textContent = "Visit the Website";

        content.appendChild(name);
        content.appendChild(address);
        content.appendChild(phone);
        content.appendChild(membershipLevel);
        content.appendChild(website);

        card.appendChild(img);
        card.appendChild(content);
        
        memberCards.appendChild(card);
    });
}

getMember();

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector(".memberCard");

gridBtn.addEventListener("click", () => {
    
    display.classList.add("memberCard");
    display.classList.remove("list");

    const contentDivs = document.querySelectorAll("section > div");
    contentDivs.forEach(div => div.classList.remove("cardContent"));
});

listBtn.addEventListener("click", () => {
    display.classList.remove("memberCard");
    display.classList.add("list");

    const contentDivs = document.querySelectorAll("section > div");
    contentDivs.forEach(div => div.classList.add("cardContent"));
});

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
    menuNav.classList.toggle("open");
});