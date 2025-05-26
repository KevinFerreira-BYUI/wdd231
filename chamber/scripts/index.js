document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

const apiCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=-23.03&lon=-46.98&units=metric&appid=bff1560d191c5bc6c0cc62775a0e100a`;
const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.03&lon=-46.98&units=metric&appid=bff1560d191c5bc6c0cc62775a0e100a`;

async function apiFetch(){
  try{
    const response1 = await fetch(apiCurrentWeather);
    const response2 = await fetch(apiForecast);
    if (response1.ok && response2.ok){
      const data1 = await response1.json();
      const data2 = await response2.json();
      displayWeather(data1);
      displayForecast(data2);
      console.log(data2);
    }else {
      const text1 = await response1.text();
      const text2 = await response2.text();
      throw new Error(`${text1} | ${text2}`);
    }
  }catch (error){
    console.log(error);
  }
}

apiFetch();

const weatherIcon = document.querySelector("#weather-icon");
const degres = document.querySelector(".degres");
const desc = document.querySelector(".description");
const height = document.querySelector(".height");
const low = document.querySelector(".low");
const humidity = document.querySelector(".humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

const today = document.querySelector(".today");
const tomorrow = document.querySelector(".tomorrow");
const afterTomorrow = document.querySelector(".after-tomorrow");


function displayWeather(data1){
  weatherIcon.src = `https://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`;
  degres.innerHTML = `<strong>${Math.round(data1.main.temp)} &deg;C</strong>`;
  desc.innerHTML = `${data1.weather[0].description}`;
  height.innerHTML = `Heigh: ${Math.round(data1.main.temp_max)} &deg;C`;
  low.innerHTML = `Low: ${Math.round(data1.main.temp_min)} &deg;C`;
  humidity.innerHTML = `Humidity: ${data1.main.humidity}%`;
  const sunriseTime = new Date(data1.sys.sunrise * 1000).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
  const sunsetTime = new Date(data1.sys.sunset * 1000).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
  sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
  sunset.innerHTML = `Sunset: ${sunsetTime}`;
}

function displayForecast(data) {
  const forecasts = [];
  const currentDate = new Date();
  const validHours = [
    "15:00:00", "12:00:00", "18:00:00", "09:00:00", "21:00:00", "06:00:00", "03:00:00", "00:00:00"
  ];

  for (let i = 0; i < 3; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    const dateStr = date.toISOString().split("T")[0];

    let forecast = null;

    for (const hour of validHours) {
      forecast = data.list.find(item => item.dt_txt === `${dateStr} ${hour}`);
      if (forecast) break;
    }

    forecasts.push(forecast);
  }

  if (forecasts[0]) {
    today.innerHTML = `<strong>Today: </strong>${Math.round(forecasts[0].main.temp)} &deg;C`;
  }

  if (forecasts[1]) {
    const dayName = new Date(forecasts[1].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
    tomorrow.innerHTML = `<strong>${dayName}: </strong>${Math.round(forecasts[1].main.temp)} &deg;C`;
  }

  if (forecasts[2]) {
    const dayName = new Date(forecasts[2].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
    afterTomorrow.innerHTML = `<strong>${dayName}: </strong>${Math.round(forecasts[2].main.temp)} &deg;C`;
  }
}

async function loadRandomMembers() {
  const response = await fetch("scripts/members.json");
  const data = await response.json();

  const filteredMembers = data.members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);
  const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  const section = document.querySelector(".members-section > div");

  selected.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-highlight");

    const img = document.createElement("img");
    img.src = member.image;
    img.alt = `Logo of ${member.name}`;
    img.loading = "lazy";

    const info = document.createElement("div");
    info.classList.add("member-info");

    const name = document.createElement("h3");
    name.textContent = member.name;

    const tagline = document.createElement("p");
    tagline.textContent = member.tagline || "Business Tag Line";

    const email = document.createElement("p");
    email.innerHTML = `<strong>EMAIL:</strong> ${member.email}`;

    const phone = document.createElement("p");
    phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;

    const website = document.createElement("a");
    website.href = member.website;
    website.target = "_blank";
    website.textContent = "Visit Website";
    website.classList.add("visit-link");

    info.append(name, tagline, email, phone, website);
    card.append(img, info);
    section.appendChild(card);
  });
}

loadRandomMembers();


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


