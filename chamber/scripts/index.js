document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

const weatherIcon = document.querySelector("#weather-icon");
const currentInfos = document.querySelector("#weather-infos");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-23.03&lon=-46.97&units=metric&appid=bff1560d191c5bc6c0cc62775a0e100a`;


async function apiFetch(){
  try{
    const response = await fetch(apiUrl);
    if (response.ok){
      const data = await response.json();
      console.log(data)
    }else {
      throw Error(await response.text());
    }
  }catch (error){
    console.log(error);
  }
}

apiFetch();

function displayWeather(data){

}
