let date = new Date("5september2025");

const dayDOM = document.querySelector("#day");
const hourDOM = document.querySelector("#hour");
const minuteDOM = document.querySelector("#minute");
const secondDOM = document.querySelector("#second");

function updateDOM() {
    let now = new Date().getTime();
    let distance = date - now; //Distance in ms

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    dayDOM.innerHTML = Math.floor(distance / day) + "d";
    hourDOM.innerHTML = Math.floor(distance % day / hour) + "h";
    minuteDOM.innerHTML = Math.floor(distance % hour / minute) + "m";
    secondDOM.innerHTML = Math.floor(distance % minute / second) + "s";
}

setInterval(updateDOM, 1000)

// Barra de carga
const progress = document.querySelector(".progress")
const percentage = document.querySelector("#percentage")
let bar_now = "BTX";

function switchBar() {
    if(bar_now == "BTX"){
        bar_now = "Birthday";

        const date_past_birthday = new Date("5september2024");
        const date_today = new Date();
        date = new Date("5september2025");
    
        let result_ms = date_today - date_past_birthday;
        let result = Math.round(result_ms * (1.1574 * Math.pow(10, -8)));
    
        result = result * 0.2739; //0.2739% == 1d
        progress.style.setProperty("--progress", `${result}%`);
        progress.style.setProperty("--color", "blue");
        percentage.title = `${result.toFixed(2)}%`


    } else if(bar_now == "Birthday"){
        bar_now = "BTX";

        const date_past_BTX = new Date("10september2024");
        const date_today = new Date();
        date = new Date("7may2025");
    
        let result_ms = date_today - date_past_BTX;
        let result = Math.round(result_ms * (1.1574 * Math.pow(10, -8)));
    
        result = result * 0.418; //0.418% == 1d
        progress.style.setProperty("--progress", `${result}%`);
        progress.style.setProperty("--color", "yellow");
        percentage.title = `${result.toFixed(2)}%`
    }
 
}

switchBar();
progress.addEventListener("click", () => {
    switchBar();
})
