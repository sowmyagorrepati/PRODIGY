let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;

function start() {
    timer = setInterval(display, 10);
    document.getElementById("start").disabled = true;
}

function display() {
    milliseconds++;
    
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let displayhrs = hours < 10 ? "0" + hours : hours;
    let displaymin = minutes < 10 ? "0" + minutes : minutes;
    let displaysec = seconds < 10 ? "0" + seconds : seconds;
    let displaymillisec = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    document.getElementById("timedisplay").innerText = `${displayhrs} : ${displaymin} : ${displaysec} : ${displaymillisec}`;
}

function pause() {
    clearInterval(timer);
    document.getElementById("start").disabled = false;
}

function lap() {
    let displayhrs = hours < 10 ? "0" + hours : hours;
    let displaymin = minutes < 10 ? "0" + minutes : minutes;
    let displaysec = seconds < 10 ? "0" + seconds : seconds;
    let displaymillisec = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    let lapTime = `${displayhrs} : ${displaymin} : ${displaysec} : ${displaymillisec}`;
    let lapDisplay = document.createElement("div");
    lapDisplay.innerText = `Lap ${lapCount}: ${lapTime}`; 
    document.getElementById("laps").appendChild(lapDisplay);
    lapCount++;
}

function reset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 1; 
    document.getElementById("timedisplay").innerText = "00 : 00 : 00 : 00";
    document.getElementById("start").disabled = false;
    document.getElementById("laps").innerHTML = ""; 
}
