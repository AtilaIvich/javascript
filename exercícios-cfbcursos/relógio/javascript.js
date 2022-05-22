const output = document.getElementById('output');
const timeInterval = setInterval(getTime, 250);
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
btn1.addEventListener('click', start);
btn2.addEventListener('click', pause);

function getTime() {
    var h = new Date().getHours();
    if (h < 10) {
        h = `0${h}`
    }
    var min = new Date().getMinutes();
    if (min < 10) {
        min = `0${min}`
    }
    var sec = new Date().getSeconds();
    if (sec < 10) {
        sec = `0${sec}`
    }

    output.innerText = `${h}:${min}:${sec}`;
}

function start() {
    setInterval(getTime, 250);
}

function pause() {
    clearInterval(timeInterval);
}