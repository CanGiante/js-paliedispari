//chiedo di inserire una parola
var parola = prompt("Scrivi una parola")

//prendo il valore inserito e lo splitto in un array
parola = parola.split("");
console.log(parola);

//creo un ciclo per vagliare ogni singolo dato dell'array
for (var i = 0; i < parola.length; i++) {

  console.log(parola[i]);

}

//se il ciclo contrario è identico la parola è palindroma
for (var j = parola.length; j >= 0; j--) {

  console.log(parola[j]);

}

//stampo affermazione/negazione che sia palindroma
