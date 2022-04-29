var numlist = document.getElementById('numlist');

var txt = document.getElementById('txt');

var button1 = document.getElementById('button1');
button1.addEventListener('click', add);

var button2 = document.getElementById('button2');
button2.addEventListener('click', finish);

var button3 = document.getElementById('button3');
button3.addEventListener('click', reset);

var numArray = [];

function add() {
    var num = document.getElementById('input');
    num = Number(num.value);
    
    if (num < 1 || num > 100) {
        alert('Digite um valor numérico maior ou igual a 1 e menor ou igual a 100 e tente novamente.');
    } else {
        if (numArray.indexOf(num) != -1) {
            alert('Este numéro já foi inserido! Tente outro valor.');
        } else {
            txt.innerHTML = '';

            var option = document.createElement('option');
            option.text = `O valor ${num} foi adicionado`;
            numlist.appendChild(option);

            numArray.push(num);
        }
    }

    document.getElementById('input').value = '';
}

function finish() {
    var numArraySum = 0;
    var numArrayAverage = 0;

    for (var c = 0; c <= numArray.length - 1; c++) {
        numArraySum += numArray[c];
        if (c == numArray.length - 1) {
            numArrayAverage = numArraySum / numArray.length;
        }
    }

    if (!Number.isInteger(numArrayAverage)) {
        numArrayAverage = numArrayAverage.toFixed(2);
    }

    numArray.sort((a,b) => {return a - b});

     txt.innerHTML = `<p>Ao todo, temos ${numArray.length} números registrados</p>
     <p>O maior valor informado foi ${numArray[numArray.length - 1]}</p>
     <p>O menor valor informado foi ${numArray[0]}</p>
     <p>Somando todos os valores, temos ${numArraySum}</p>
     <p>A média dos valores digitados é ${numArrayAverage.replace('.', ',')}</p>`;
}

function reset() {
    numlist.innerHTML = '';
    txt.innerHTML = '';
    document.getElementById('input').value = '';
}
