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

    if(isNaN(distance)) {
        dayDOM.innerHTML = 0;
        hourDOM.innerHTML = 0;
        minuteDOM.innerHTML = 0;
        secondDOM.innerHTML = 0;
    } else {
        dayDOM.innerHTML = Math.floor(distance / day) + "d";
        hourDOM.innerHTML = Math.floor((distance % day) / hour) + "h";
        minuteDOM.innerHTML = Math.floor((distance % hour) / minute) + "m";
        secondDOM.innerHTML = Math.floor((distance % minute) / second) + "s";
    }
}

setInterval(updateDOM, 1000);

// Barra de carga
const progress = document.querySelector(".progress");
const percentage = document.querySelector("#percentage");

let emoji = "";
let barOptions = {
    option1: {
        name: "Birthday",
        active: true
    },
    option2: {
        name: "BTX",
        active: false
    },
    option3: {
        name: "PAU",
        active: false
    }
}

progress.style.setProperty("--progress", "0%"); // Esta linea es para que la barra empieze desde 0 y tenga animación

function switchBar() {
    if (barOptions.option1.active == true) {
        barOptions.option1.active = false;
        barOptions.option2.active = true;

        const pastBirthday = new Date("2024-09-05");
        const today = new Date();
        date = new Date("2025-09-05");

        let elapsedMs = today - pastBirthday;
        let elapsedDays = Math.round(elapsedMs / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 365) * 100;

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "blue");
        emoji = "🎉";
        
        percentage.title = `${emoji}${progressPercentage.toFixed(2)}%`;
        
    } else if (barOptions.option2.active == true) {
        barOptions.option2.active = false;
        barOptions.option3.active = true;

        const pastBTX = new Date("2024-10-10");
        const today = new Date();
        date = new Date("2025-05-09");

        let elapsedMs = today - pastBTX;
        let elapsedDays = Math.round(elapsedMs / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 212) * 100; // 212 días entre BTX y el siguiente evento

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "yellow");
        emoji = "🏫";
        
        percentage.title = `${emoji}${progressPercentage.toFixed(2)}%`;
    } else if (barOptions.option3.active == true) {
        barOptions.option3.active = false;
        barOptions.option1.active = true;

        const pastBTX = new Date("2025-05-09");
        const today = new Date();
        date = new Date("2025-17-06")

        let elapsedMs = today - pastBTX;
        let elapsedDays = Math.round(elapsedMs / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 365) * 100;

        if(progressPercentage < 0) {
            progressPercentage = 100;
        }

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "#f01851");
        emoji = "🎓";

        percentage.title = `${emoji}${progressPercentage.toFixed(2)}%`;
    }
}

switchBar();
progress.addEventListener("click", () => {
    switchBar();
});
