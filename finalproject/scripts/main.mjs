document.addEventListener("DOMContentLoaded", () => {

    const hambBtn = document.getElementById("hambBtn");
    const closeBtn = document.getElementById("closeBtn");
    const navigation = document.querySelector(".nav-container")

    hambBtn.addEventListener("click", () => {
        navigation.classList.add("active");
        navigation.classList.remove("hidden");
        hambBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        hambBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        navigation.classList.add("hidden");
    });

});