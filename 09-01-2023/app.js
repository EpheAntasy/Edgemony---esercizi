// ESERCIZIO 1 -----------------------------------------------
// Sulla base della lezione del giorno,
// ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

// nb.ogni singola operazione sara una arrow function

// Alla fine combinare le varie operazioni in una funzione piu ampia,
// dove all'utente viene data la possibilita di scegliere
// quale operazione effettuare. Siate liberi di aggiungere
// gli argomenti a piacere, come per esempio i numeri,
// se chiederli all'utente o meno.
// -----------------------------------------------------------

// const sum = (firstNum, secondNum) => firstNum + secondNum;
// console.log(sum(10, 5))

// const subtraction = (firstNum, secondNum) => firstNum - secondNum;
// console.log(subtraction(10, 5))

// const multiplication = (firstNum, secondNum) => firstNum * secondNum;
// console.log(multiplication(10, 5))

// const division = (firstNum, secondNum) => firstNum / secondNum;
// console.log(division(10, 5))


const calc = (operator, firstNum, secondNum) => {
    if (operator === "+") {
        return firstNum + secondNum
    }
    else if (operator === "-") {
        return firstNum - secondNum
    }
    else if (operator === "*") {
        return firstNum * secondNum
    }
    else if (operator === "/") {
        return firstNum / secondNum
    }
}

let userOperation = prompt("Scegli un'operazione (es. +, -, *, /)");
let userFirstNum = prompt("Scegli il primo numero");
let userParsedFirstNum = parseInt(userFirstNum);
let userSecondNum = prompt("Scegli il secondo numero");
let userParsedSecondNum = parseInt(userSecondNum);
let parsedResult = parseInt(calc());

console.log(`Il risultato è: ${calc(userOperation, userParsedFirstNum, userParsedSecondNum)}`)


// AVANZATO ------------------------------------------------------
// Provare a completare l'esercizio sopra applicando qualche callback.
// Anche qui non importa l'impostazione, siate creativi,
// l'importante che si verifichi il caso di una callback.
// ---------------------------------------------------------------


maxOrMin = (callback) => {
    if (callback() < 500) {
        return ("Il risultato è minore di 500!")
    }
    else if (callback() === 500) {
        return ("Il tuo risultato è uguale a 500!")
    }
    else {
        return ("Il risultato è maggiore di 500!")
    }
}

console.log(maxOrMin(() => calc(userOperation, userParsedFirstNum, userParsedSecondNum)));


