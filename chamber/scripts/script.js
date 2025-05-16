
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
        name.textContent = `Member name: ${member.name}`;

        address.setAttribute("class", "memberAddress");
        address.textContent = `Address: ${member.address}`;

        phone.setAttribute("class", "memberPhone");
        phone.textContent = `Phone number: ${member.phone}`;

        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.textContent = "Visit Website";

        membershipLevel.setAttribute("class", "membershipLevel");
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(img);

        memberCards.appendChild(card);
    });
}

getMember();