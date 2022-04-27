
const grandezzaArray = 5;
const numeriCasuali = [];
for (i = 0; i < grandezzaArray; i++) {
    numeriCasuali.push(numeriRandom(0, 100))
}

document.getElementById("numeri").innerHTML = numeriCasuali;


setTimeout(function () {
    nascondiNumeri();
}, 30000);


setTimeout(function () {
    let numeriUtente = inserisciNumeri();

    console.log(numeriUtente);
    let risultato = comparatoreArray(numeriCasuali, numeriUtente);
    document.getElementById("risultato").innerHTML = `Hai indovinato ${(risultato.length)} cifre, i numeri giusti erano ${risultato} `;
}, 30010);




//FUNZIONI

function comparatoreArray(numeriCasuali, numeriUtente) {
    let numeriGiusti = [];
    for (let i = 0; i < numeriCasuali.length; i++)
        if (numeriCasuali[i] === numeriUtente[i]) {
            numeriGiusti.push(numeriCasuali[i])
        }
    return numeriGiusti;
}

function numeriRandom(minimo, massimo) {
    min = Math.ceil(minimo);
    max = Math.floor(massimo);
    return Math.floor(Math.random() * (massimo - minimo + 1) + minimo);
}

function nascondiNumeri() {
    document.getElementById("numeri").innerHTML = "";
}

function inserisciNumeri() {
    let numeroUtente;
    const arrayUtente = [];
    do {
        numeroUtente = parseInt(prompt("Inserisci un numero"));
        arrayUtente.push(numeroUtente);
    } while (arrayUtente.length < 5);

    return arrayUtente;
}  