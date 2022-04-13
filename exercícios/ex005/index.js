var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();
console.log(`Agora são exatamente ${hora}h${minuto}min.`);
if (hora >= 6 && hora < 13) {
    console.log('Bom dia, sr.');
} else {
    if (hora >= 13 && hora < 18) {
        console.log('Boa tarde, sr.')
    }
    else {
        if (hora >= 18 && hora < 24) {
            console.log('Boa noite, sr.')
        }
        else {
            console.log('Boa madrugada, sr.')
        }
    }
}