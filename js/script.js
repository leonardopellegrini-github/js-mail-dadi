/*

CONTROLLARE LE EMAIL

1- inserire un database di email
2- collegare l'input in modo da controllare il valore inserito
3- creare if per vedere se l'email inserita fa parte

*/

//inserisco database
const database = ['leonardo@gmail.com', 'franco@hotmail.com', 'bamba@hotmail.com','capo@capo.au', 'prova@prova.org', 'noname@hotmail.com', 'yolo@mail.it', 'lpg@account.com',];


//chiedo la mail
const lamiamail = prompt('Inserisci la tua mail');

//variabile per controllare che la mail sia presente all'interno del database
let emailtrovata = false;


//controllo che la mail sia presente all'interno del database
for (let i = 0; i < database.length; i++){
  console.log(database[i]);
  if (database[i] === lamiamail){
    emailtrovata = true;
  }
}

//inserisco variabile per stampare
let output;

//sceglie il messaggio da stampare a seconda del risultato
if (emailtrovata){
  output = 'Sei un membro';
}else{
  output = "Non fai parte del club";
}

//STAMPO IL RISULTATO NELL'H1
document.getElementById('output').innerHTML = output;


/*

LANCIA I DADI

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1- alla pressione del pulsante viene generato un numero compreso da 1 a 6 sia per il giocatore che per il computer
2- creare if per vedere se un numero è maggiore dell'altro.
3- stampare i valori e mostrare il testo con "HAI VINTO" o "HAI PERSO"

*/

