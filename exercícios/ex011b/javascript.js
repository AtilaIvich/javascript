var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

button1.addEventListener('click', add);
button2.addEventListener('click', reset);
button3.addEventListener('click', finish);

var input = document.getElementById('input');
var nList = document.getElementById('numlist');
var txt = document.getElementById('txt');

var numArray = [];

function add() {
    var num = document.getElementById('input');
    num = Number(num.value);

    input.value = '';
    input.focus();
    txt.innerHTML = '';

    if (isNaN(num) || num < 1 || num > 100) {
        alert('Digite um valor numérico maior ou igual a 1 e menor ou igual a 100 e tente novamente.');
    } else {
        if (numArray.indexOf(num) != -1) {
            alert('Este valor já foi inserido!');
        } else {
            var listItem = document.createElement('option');
            listItem.text = `O valor ${num} foi inserido`;
            nList.appendChild(listItem);

            numArray.push(num);
        }
    }
}

function finish() {
    function biggerValue(array) {
        big = array[0];

        for (i = 1; i < array.length; i++) {
            if (big < array[i]) {
                big = array[i];
            }
        }
        return big;
    }

    function bigger2ndValue(array) {
        big = array[0];

        for (i = 1; i < array.length; i++) {
            if (big < array[i]) {
                big = array[i];
            }
        }

        big2nd = 0;

        for (i = 0; i < array.length; i++) {
            if (big2nd < array[i]) {
                if (array[i] == big) {
                    big2nd = big2nd;
                } else {
                    big2nd = array[i];
                }
            }
        }
        return big2nd;
    }

    function minValue(array) {
        min = array[0];

        for (i = 1; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }

    var sum = 0;
    var average = 0;

    function numArraySum(array) {
        for (i = 0; i < array.length; i++) {
            sum += array[i];
        }

        average = sum / array.length;

        return sum;

    }

    txt.innerHTML = `<p>Temos ${numArray.length} valores registrados</p>
    <p>A soma dos valores é ${numArraySum(numArray)}</p>
    <p>O maior valor é ${biggerValue(numArray)}</p>
    <p>O menor valor é ${minValue(numArray)}</p>
    <p>O segundo maior valor é ${bigger2ndValue(numArray)}</p>
    <p>A média dos valores é igual a ${average}</p>`;
}

function reset() {
    input.value = '';
    nList.innerHTML = '';
    txt.innerHTML = '';
}

