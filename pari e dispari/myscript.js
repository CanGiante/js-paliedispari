//GIOCO "PARI E DISPARI"
var pariODispari = prompt("pari o dispari?");
console.log("hai scelto " + pariODispari);
var numScelto = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("hai scelto " + numScelto);

var numeroPari = sommaPari(numScelto);

if (numScelto < 1 || numScelto > 5) {

  alert("error 420");

} else {

  var vittoria = ((numeroPari && pariODispari === "pari") || (!numeroPari && pariODispari === "dispari"));

  if (vittoria) {

    alert("hai vinto");

  } else {

    alert("hai perso");

  }

}


//FUNZIONE PER STABILIRE SE LA SOMMA FRA IL NUMERO GENERATO DAL PC E IL NUMERO INSERITO DALL'UTENTE è PARI O DISPARI
//ovvero per stabilire se isPari è true
function sommaPari(numUtente) {

  var numRandomPc = Math.floor(Math.random() * (5)) + 1;
  console.log("il computer sceglie " + numRandomPc);

  var somma = numUtente + numRandomPc;
  console.log("la somma è " + somma);

  var isPari = somma % 2 === 0;

  if (isPari) {

    console.log("la somma è pari");

  } else {

    console.log("la somma è dispari");

  }

  console.log(isPari);
  return isPari;

}

// //inizio debug funzione
// var addendo = parseInt(prompt("Inserisci un numero da 1 a 5"));
// console.log("hai scelto " + addendo);
// sommaPari(addendo1);
// //fine debug funzione
//FINE FUNZIONE
