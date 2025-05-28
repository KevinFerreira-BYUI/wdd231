

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

const results = document.getElementById("results");
results.innerHTML = `
    <p>Apointment for ${myInfo.get("first")} ${myInfo.get("last")} in the location ${myInfo.get("location")}</p>
    `;