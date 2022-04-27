
const grandezzaArray = 5 ;
const arrayRandom = [] ;
for (i=0; i < grandezzaArray; i++) {
    arrayRandom.push(numeriRandom(0, 100))
}
console.log(arrayRandom);
document.getElementById("numeri").innerHTML = arrayRandom ;



function numeriRandom(minimo, massimo) {
    min = Math.ceil(minimo);
    max = Math.floor(massimo);
    return Math.floor(Math.random() * (massimo - minimo + 1) + minimo); 
    ;
}