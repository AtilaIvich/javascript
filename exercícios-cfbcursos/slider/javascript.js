const imgContainer  = document.getElementById('imgcontainer');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

btn1.addEventListener('click', () => pickImg(1));
btn2.addEventListener('click', () => pickImg(2));
btn3.addEventListener('click', () => pickImg(3));
btn4.addEventListener('click', () => pickImg(4));
btn5.addEventListener('click', () => pickImg(0));

var interval = setInterval(changeImg, 2000);
var imgs = [];
var initialImg = 0;

for (let i = 0; i < 5; i++) {
    imgs[i] = `imgs/slide${i}.jpg`;
}

function changeImg() {
    imgContainer.style.backgroundImage = `url('${imgs[initialImg]}')`;
    initialImg++;
    if (initialImg > imgs.length - 1) {
        initialImg = 0;
    }
}

function pickImg(x) {
    imgContainer.style.backgroundImage = `url('${imgs[x]}')`;
    clearInterval(interval);
    interval = setInterval(changeImg, 2000);
}