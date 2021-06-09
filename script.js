var Houres = document.getElementById("houres");
var Minutes = document.getElementById("minutes");
var Seconds = document.getElementById("seconds");
var Start = document.getElementById("start");
var Pause = document.getElementById("pause");
var Reset = document.getElementById("reset");

var sec = 0;
var min = 0;
var hr = 0;
var sec1 = 0;
var min1 = 0;
var hr1 = 0;
var interval;

function start() {
    interval = setInterval(Stopwatch, 100);
    Start.disabled = true;
    Pause.disabled = false;
    Reset.disabled = false;
}

function Stopwatch() {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if (min == 60) {
            hr++;
            min = 0
        }
    }

    if (sec < 10) {
        sec1 = "0" + sec.toString();
    } else {
        sec1 = sec;
    }

    if (min < 10) {
        min1 = "0" + min.toString();
    } else {
        min1 = min;
    }

    if (hr < 10) {
        hr1 = "0" + hr.toString();
    } else {
        hr1 = hr;
    }

    Seconds.innerHTML = sec1;
    Minutes.innerHTML = min1;
    Houres.innerHTML = hr1;
}

function pause() {

    if (Pause.innerHTML == "Continue") {
        Pause.innerHTML = "Pause";
        interval = setInterval(Stopwatch, 100);
    } else {
        Pause.innerHTML = "Continue";
        clearInterval(interval); ///Here we are stop the setInterval
    }
}

function reset() {
    clearInterval(interval);
    Reset.disabled = true;
    Pause.disabled = true;
    Start.disabled = false;
    sec1 = "00";
    min1 = "00";
    hr1 = "00";
    sec = 0;
    min = 0;
    hr = 0;
    Seconds.innerHTML = sec1;
    Minutes.innerHTML = min1;
    Houres.innerHTML = hr1;
}