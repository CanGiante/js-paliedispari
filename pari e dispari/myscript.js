/*FUNZIONE PER STABILIRE SE LA SOMMA FRA IL NUMERO GENERATO DAL PC E IL NUMERO INSERITO DALL'UTENTE è PARI*/
function sommaPari(numUtente) {

  var numRandomPc = Math.floor(Math.random() * (5)) + 1;
  console.log("il computer sceglie " + numRandomPc);

  var somma = numUtente + numRandomPc;
  console.log("la somma è " + somma);

  var isPari = somma % 2 === 0;
  console.log("la somma è pari = " + isPari);

  return isPari;

}
//FINE FUNZIONE


//GIOCO "PARI E DISPARI"
var pariODispari = prompt("pari o dispari?");
console.log("hai scelto " + pariODispari);
var sceltaNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("hai scelto " + sceltaNumero);

var numeroPari = sommaPari(sceltaNumero, pariODispari);

if (sceltaNumero < 1 || sceltaNumero > 5) {

  alert("error 420");

} else {

  var vittoria = ((numeroPari && pariODispari === "pari") || (!numeroPari && pariODispari === "dispari"));

  if (vittoria) {

    alert("hai vinto");

  } else {

    alert("hai perso");

  }

}
