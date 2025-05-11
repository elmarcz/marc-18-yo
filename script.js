let date = new Date("2025-09-05");

const dayDOM = document.querySelector("#day");
const hourDOM = document.querySelector("#hour");
const minuteDOM = document.querySelector("#minute");
const secondDOM = document.querySelector("#second");

function updateDOM() {
    const now = new Date().getTime();
    const target = date.getTime();
    const distance = target - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (isNaN(distance) || distance <= 0) {
        dayDOM.innerHTML = "0d";
        hourDOM.innerHTML = "0h";
        minuteDOM.innerHTML = "0m";
        secondDOM.innerHTML = "0s";
        return;
    }

    dayDOM.innerHTML = Math.floor(distance / day) + "d";
    hourDOM.innerHTML = Math.floor((distance % day) / hour) + "h";
    minuteDOM.innerHTML = Math.floor((distance % hour) / minute) + "m";
    secondDOM.innerHTML = Math.floor((distance % minute) / second) + "s";
}

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
};

progress.style.setProperty("--progress", "0%");

function switchBar() {
    const today = new Date();

    if (barOptions.option1.active) {
        barOptions.option1.active = false;
        barOptions.option2.active = true;

        const past = new Date("2024-09-05");
        date = new Date("2025-09-05");

        let elapsedDays = Math.round((today - past) / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 365) * 100;

        if (progressPercentage < 0) progressPercentage = 0;
        if (progressPercentage > 100) progressPercentage = 100;

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "blue");
        emoji = "🎉";
        percentage.title = `${emoji}${progressPercentage.toFixed(2)}%`;

    } else if (barOptions.option2.active) {
        barOptions.option2.active = false;
        barOptions.option3.active = true;

        const past = new Date("2024-10-10");
        date = new Date("2025-05-09");

        let elapsedDays = Math.round((today - past) / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 212) * 100;

        if (progressPercentage < 0) progressPercentage = 0;
        if (progressPercentage > 100) progressPercentage = 100;

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "yellow");
        emoji = "🏫";
        percentage.title = `${emoji}${progressPercentage.toFixed(2)}%`;

    } else {
        barOptions.option3.active = false;
        barOptions.option1.active = true;

        const past = new Date("2025-05-09");
        date = new Date("2025-06-11"); // ✅ Fecha corregida

        let elapsedDays = Math.round((today - past) / (1000 * 60 * 60 * 24));
        let progressPercentage = (elapsedDays / 39) * 100;

        if (progressPercentage < 0) progressPercentage = 0;
        if (progressPercentage > 100) progressPercentage = 100;

        progress.style.setProperty("--progress", `${progressPercentage}%`);
        progress.style.setProperty("--color", "#f01851");
        emoji = "🎓";
        percentage.title = `${emoji}${progressPercentage.toFixed(2)}%`;
    }

    updateDOM(); // 🟢 Actualizar el contador inmediatamente
}

switchBar(); // Configura evento inicial
setInterval(updateDOM, 1000); // Inicia cuenta atrás

progress.addEventListener("click", () => {
    switchBar();
});
