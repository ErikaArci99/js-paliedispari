// esericizo 1

let word = prompt('Inserisci la parola da testare')

// funzione per capovolgere la parola
function rWord(string) {
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

// variabili utente
let pariDispari = prompt('Scegli tra pari e dispari e digitalo qui');
let numeroUtente = prompt('Sceglli un numero da 1 a 5');

// funzione numero random pc
function numberPc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// attivazione della funzione
let numeroComputer = numberPc(1, 5);
console.log(numeroComputer + ' '+ 'Numero computer')
console.log(numeroUtente + ' '+ 'Numero utente')

// funzione somma delle variabili
function sum(x, y, string) {
    let somma = x + y
    if (somma % 2 == 0) {
        if (string === 'pari') {
            console.log('Complimenti! La somma è pari! Hai vinto!')
        }
        else {
            console.log('Mi dispiace, la somma è pari, hai perso.')
        }
    }
    else if (somma % 2 != 0) {
        if (string === 'dispari') {
            console.log('Complimenti! La somma è dispari! Hai vinto!')
        }
        else {
            console.log('Mi dispiace, la somma è dispari, hai perso.')
        }
        }
    }

// attivo la funzione
sum(numeroUtente, numeroComputer, pariDispari);