var dx = 0;
var dy = 0;
var speed = 10;
var px = 0;
var py = 0;
var animation = requestAnimationFrame(move);

window.addEventListener('keydown', (e) => updateDir(e));
window.addEventListener('keyup', cancelMovement);

function updateDir(e) {
    switch(e.key) {
        case 'w':
            dy = -1;
            break;

        case 's':
            dy = 1;
            break;

        case 'a':
            dx = -1;
            break;

        case 'd':
            dx = 1
            break;
    }
}

function cancelMovement() {
    dx = 0;
    dy = 0;
}

function move() {
    px += dx * speed;
    py += dy * speed;
    car.style.left = `${px}px`;
    car.style.top = `${py}px`;

    animation = requestAnimationFrame(move);
}