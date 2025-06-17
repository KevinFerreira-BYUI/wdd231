
export function displayLocalStorage(){
    const formInfo = new URLSearchParams(window.location.search);
    const setitemsFromContact = document.querySelector(".local-storage");
    setitemsFromContact.innerHTML = `
        <p class="nameAndLast"><strong>Name:</strong> ${formInfo.get("name")} ${formInfo.get("lastName")}</p>
        <p class="PhoneNum"><strong>Phone:</strong> ${formInfo.get("phone")}</p>
        <p class="emailAddress"><strong>Email:</strong> ${formInfo.get("email")}</p>
        <p class="contactType"><strong>Contact Type:</strong> ${formInfo.get("contactType")}</p>
        <p class="massage"><strong>Message:</strong><br>${formInfo.get("massage")}</p>
    `;
}

