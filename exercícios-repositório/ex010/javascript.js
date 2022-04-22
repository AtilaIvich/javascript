var txt = document.getElementById('txt');

function clicar1() {
    txt.innerHTML += '<p>Você clicou no <span style="background-color: rgba(255, 0, 0, 0.1); font-variant: small-caps;">Primeiro Botão</span></p>';
}

function clicar2() {
    txt.innerHTML += '<p>Você clicou no <span style="background-color: rgba(0, 255, 0, 0.1); font-variant: small-caps;">Segundo Botão</span></p>';
}

function clicar3() {
    txt.innerHTML += '<p>Você clicou no <span style="background-color: rgba(0, 0, 255, 0.1); font-variant: small-caps;">Terceiro Botão</span></p>';
}

function clicar4() {
    txt.innerHTML += '<p>Você clicou no <span style="background-color: rgba(255, 255, 0, 0.1); font-variant: small-caps;">Quarto Botão</span></p>';
}