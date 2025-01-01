const date = new Date("5september2025");

const dayDOM = document.querySelector("#day");
const hourDOM = document.querySelector("#hour");
const minuteDOM = document.querySelector("#minute");
const secondDOM = document.querySelector("#second");

function updateDOM(){
    let now = new Date().getTime();
    let distance = date-now; //Distance in ms

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    dayDOM.innerHTML = Math.floor(distance/day);
    hourDOM.innerHTML = Math.floor(distance%day/hour);
    minuteDOM.innerHTML = Math.floor(distance%hour/minute);
    secondDOM.innerHTML = Math.floor(distance%minute/second);
}

setInterval(updateDOM, 1000)