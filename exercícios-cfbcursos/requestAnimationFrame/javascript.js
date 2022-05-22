const square = document.getElementById('square');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const animation = requestAnimationFrame(move);

btn1.addEventListener('click', start);
btn2.addEventListener('click', pause);
square.addEventListener('click', toggle);

var dx = 0;
var dy = 0;
var px = 0;
var py = 0;
var vel = 10;
var toggleVar = 0;

function move() {
    px += dx * vel;
    if (px >= window.innerWidth - 105) {
        dx = -1;
    } else if (px <= 0) {
        dx = 1;
    }
    py += dy * vel;
    square.style.top = py + 'px';
    square.style.left = px + 'px';
    requestAnimationFrame(move);
}

function start() {
    if (toggleVar) {
        toggleVar = 0;
        dx = 1;
        if (px >= window.innerWidth - 105) {
            dx = -1;
        } else if (px <= 0) {
            dx = 1;
        }
    }
}

function pause() {
    if (toggleVar == 0) {
        toggleVar = 1;
        dx = 0;
    }
}

function toggle() {
    if (toggleVar) {
        start();
    } else {
        pause();
    }
}