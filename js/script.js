/*

CONTROLLARE LE EMAIL

1- inserire un database di email
2- collegare l'input in modo da controllare il valore inserito
3- creare if per vedere se l'email inserita fa parte

*/

//inserisco database
const database = ['leonardo@gmail.com', 'franco@hotmail.com', 'bamba@hotmail.com','capo@capo.au', 'prova@prova.org', 'noname@hotmail.com', 'yolo@mail.it', 'lpg@account.com',];


let lamiamail = prompt('Inserisci la tua mail');
let messaggio = document.getElementById('messaggio');
let emailtrovata = false;

for (let i = 0; i < database.length; i++){

  if(lamiamail = database[i]){
    emailtrovata = true;
  
  }

  if (emailtrovata = true) {
    document.getElementById('messaggio').innerHTML = 'Sei registrato';
  } else{
    document.getElementById('messaggio').innerHTML = 'Non sei registrato';
  }
}






/*

LANCIA I DADI

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1- alla pressione del pulsante viene generato un numero compreso da 1 a 6 sia per il giocatore che per il computer
2- creare if per vedere se un numero è maggiore dell'altro.
3- stampare i valori e mostrare il testo con "HAI VINTO" o "HAI PERSO"

*/

