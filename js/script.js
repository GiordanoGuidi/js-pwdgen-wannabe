console.log('JS OK')

// Prendo l'elemento nell'html//
const paragraph= document.getElementById('password');
console.log(paragraph);

//Chiedo all'utente il nome e creo una variabile//
const firstname= prompt('Come ti chiami ', 'Giordano')
console.log(firstname)

//Chiedo all'utente il Cognome e creo una variabile//
const surname= prompt("Qual'è il tuo cognome?", 'Guidi')
console.log(surname)

//Chiedo all'utente il Colore preferito e creo una variabile//
const favouriteColor=prompt("Qual'è il tuo colore preferito?",'blu')
console.log(favouriteColor)

//Creo variabile password con somma delle variabili precedenti//
const password=`La tua password è: ${firstname}${surname}${favouriteColor}23`
console.log(password)

//Inserisco la password nell'elemento//
paragraph.innerText=(password)








