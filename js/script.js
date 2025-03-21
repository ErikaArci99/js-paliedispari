// esericizo 1

let word = prompt('Inserisci la parola da testare')

// funzione per capovolgere la parola
function rWord (string){
    let toLowerCaseWord = string.toLowerCase();
    let reverseWord = toLowerCaseWord.split('').reverse().join('');
    if (toLowerCaseWord === reverseWord) {
        console.log('Questa parola è palindroma');
    } else {
        console.log('Questa parola non è palindroma');
    }
}

// attivamento della funzione
rWord(word);


// esercizio 2

let pariDispari = prompt('Scegli tra pari e dispari e digitalo qui');
let numeroUtente = prompt ('Sceglli un numero da 1 a 5');

function numberPc (min,max){
    return Math.floor(math.random()*(max - min + 1) + min);
}

let numeroComputer = numberPc(1,5);

