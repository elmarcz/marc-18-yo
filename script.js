let date = new Date("2025-09-05");

const dayDOM = document.querySelector("#day");
const hourDOM = document.querySelector("#hour");
const minuteDOM = document.querySelector("#minute");
const secondDOM = document.querySelector("#second");

// Actualiza los elementos del DOM con el tiempo restante
function updateDOM() {
    let now = new Date().getTime();
    let distance = date - now; // Distancia en ms

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    dayDOM.innerHTML = Math.floor(distance / day) + "d";
    hourDOM.innerHTML = Math.floor((distance % day) / hour) + "h";
    minuteDOM.innerHTML = Math.floor((distance % hour) / minute) + "m";
    secondDOM.innerHTML = Math.floor((distance % minute) / second) + "s";
}

setInterval(updateDOM, 1000);

// Barra de carga
const progress = document.querySelector(".progress");
const percentage = document.querySelector("#percentage");
let currentBar = "BTX";

progress.style.setProperty("--progress", "0%"); // Esta linea es para que la barra empieze desde 0 y tenga animación

function switchBar() {
    if (currentBar === "BTX") {
        currentBar = "Birthday";

        const pastBirthday = new Date("2024-09-05");
        const today = new Date();
        date = new Date("2025-09-05");

        let elapsedMs = today - pastBirthday;
        let elapsedDays = Math.round(elapsedMs / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 365) * 100;

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "blue");
        percentage.title = `${progressPercentage.toFixed(2)}%`;
        
    } else if (currentBar === "Birthday") {
        currentBar = "BTX";

        const pastBTX = new Date("2024-10-10");
        const today = new Date();
        date = new Date("2025-05-09");

        let elapsedMs = today - pastBTX;
        let elapsedDays = Math.round(elapsedMs / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 212) * 100; // 212 días entre BTX y el siguiente evento

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "yellow");
        percentage.title = `${progressPercentage.toFixed(2)}%`;
    }
}

switchBar();
progress.addEventListener("click", () => {
    switchBar();
});
