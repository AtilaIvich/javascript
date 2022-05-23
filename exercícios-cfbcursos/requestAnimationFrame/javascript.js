const square = document.getElementById('square');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const animation = requestAnimationFrame(move);

btn1.addEventListener('click', start);
btn2.addEventListener('click', pause);
square.addEventListener('click', toggle);

var dx = 0;
//dx == direction x
//controls the direction of movement on the x-axis of the square element

var dy = 0;
//dy == direction y
//controls the direction of movement on the y-axis of the square element

var px = 0;
//px == position x
//x-coordinates of the square element

var py = 0;
//py == position y
//y-coordinates of the square element

var speed = 10;
var toggleVar = 0;
var currentXDirection;

function move() {
    px += dx * speed;
    if (px >= window.innerWidth - 105) {
        dx = -1;
    } else if (px <= 0) {
        dx = 1;
    }
    py += dy * speed;
    square.style.top = py + 'px';
    square.style.left = px + 'px';
    requestAnimationFrame(move);
}

function start() {
    if (toggleVar) {
        toggleVar = 0;
        dx = currentXDirection;
    }
}

function pause() {
    if (toggleVar == 0) {
        toggleVar = 1;
        currentXDirection = dx;
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