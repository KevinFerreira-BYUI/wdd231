document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

const apiCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=-23.03&lon=-46.97&units=metric&appid=bff1560d191c5bc6c0cc62775a0e100a`;
const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.03&lon=-46.97&units=metric&appid=bff1560d191c5bc6c0cc62775a0e100a`;

async function apiFetch(){
  try{
    const response1 = await fetch(apiCurrentWeather);
    const response2 = await fetch(apiForecast);
    if (response1.ok && response2.ok){
      const data1 = await response1.json();
      const data2 = await response2.json();
      console.log(data1)
      console.log(data2);
      displayWeather(data1);
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


function displayWeather(data1, data2){
  weatherIcon.src = `https://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`;
  degres.innerHTML = `<strong>${data1.main.temp} &deg;C</strong>`;
  desc.innerHTML = `${data1.weather[0].description}`;
  height.innerHTML = `Heigh: ${data1.main.temp_max} &deg;C`;
  low.innerHTML = `Low: ${data1.main.temp_min} &deg;C`;
  humidity.innerHTML = `Humidity: ${data1.main.humidity}%`;
  const sunriseTime = new Date(data1.sys.sunrise * 1000).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
  const sunsetTime = new Date(data1.sys.sunset * 1000).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
  sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
  sunset.innerHTML = `Sunset: ${sunsetTime}`;
}
