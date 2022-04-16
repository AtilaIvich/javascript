var res = document.getElementById('sexage');
var img = document.getElementById('container').style;

function verify() {
    var anoatual = new Date().getFullYear();
    anoatual = Number(anoatual);
    var anonascimento = document.getElementById('nascimento');
    anonascimento = Number(anonascimento.value);
    var idade = anoatual - anonascimento;
    var sex = document.getElementsByName('sexo');

    if (anonascimento > anoatual || anonascimento == ' ') {
        alert('[ERRO] Ano de nascimento inválido.')
    } else {
        if (sex[0].checked) {
            sex = 'homem';
        } else if (sex[1].checked) {
            sex = 'mulher';
        }
        res.style.textAlign = 'center';
        res.innerText = `Detectamos um(a) ${sex} com ${idade} anos.`;
        img.display = 'block';
        if (idade <= 3) {
            if (sex == 'homem') {
                img.backgroundImage = "url('imagens/mbebê.jpg')";
            } else if (sex == 'mulher') {
                img.backgroundImage = "url('imagens/fbebê.jpg')";
            }  
        } else if (idade <= 13) {
            if (sex == 'homem') {
                img.backgroundImage = "url('imagens/mcriança.jpg')";
            } else if (sex == 'mulher') {
                img.backgroundImage = "url('imagens/fcriança.jpg')";
            }
        } else if (idade <= 19) {
            if (sex == 'homem') {
                img.backgroundImage = "url('imagens/madolescente.jpg')";
            } else if (sex == 'mulher') {
                img.backgroundImage = "url('imagens/fadolescente.jpg')";
            }
        } else if (idade <= 59) {
            if (sex == 'homem') {
                img.backgroundImage = "url('imagens/madulto.jpg')";
            } else if (sex == 'mulher') {
                img.backgroundImage = "url('imagens/fadulto.jpg')";
            }
        } else if (idade >= 60) {
            if (sex == 'homem') {
                img.backgroundImage = "url('imagens/midoso.jpg')";
            } else if (sex == 'mulher') {
                img.backgroundImage = "url('imagens/fidoso.jpg')";
            }
        } 
    }
    anonascimento = 'a';
    idade = 'idade inválida';
}

function zerar() {
    anonascimento = 'a';
    idade = 'idade inválida'
}