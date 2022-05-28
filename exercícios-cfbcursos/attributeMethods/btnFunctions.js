const car = document.querySelector('#car');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', setCarImg);
btn2.addEventListener('click', removeCarImg);
btn3.addEventListener('click', verifyCarImg);

function setCarImg() {
    car.setAttribute('class', 'car');
}

function removeCarImg() {
    car.removeAttribute('class');
}

function verifyCarImg() {
    if (car.hasAttribute('class')) {
        alert('This car has style');
    } else {
        alert('Where is the car?');
    }
}