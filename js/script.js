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
