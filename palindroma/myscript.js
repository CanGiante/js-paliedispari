//FUNZIONE PER VERIFICARE SE UNA PAROLA è PALINDROMA
function verificaParolaPalindroma(parola) {

  var parola = parola.toLowerCase();

  console.log("verifico se " + parola + " è una parola palindroma...");

  var isPalindroma = true;

  for (var i = 0; i < parola.length; i++) {

    if (parola[i] != parola[parola.length - 1 - i]) {

      isPalindroma = false;

    }

    console.log( "lettera num. " + (i + 1) );
    console.log( (parola[i]) );
    console.log( "lettera num. " + (parola.length - i) );
    console.log( (parola[parola.length - 1 - i]) );
    console.log(parola[i] === parola[parola.length - 1 - i]);

  }

  if (isPalindroma) {

    console.log(parola + " è una parola palindroma.");

  } else if (!isPalindroma) {

    console.log(parola + " NON è una parola palindroma.");

  }

  return isPalindroma;

}
//FINE FUNZIONE


////Test funzione
var parolaInserita = prompt("Scrivi una parola");
var test = verificaParolaPalindroma(parolaInserita);

if (test) {

  alert("la parola è palindroma");

} else {

  alert("la parola non è palindroma");

}

// verificaParolaPalindroma("eletazzineigienizzatele");
