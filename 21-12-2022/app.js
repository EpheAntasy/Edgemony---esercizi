// ESERCIZIO 1
// Sulla base della lezione del giorno:

// scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola bootcamp;


// function greetings(saluto) {
//     console.log(saluto + " benvenuto/a al bootcamp!");
// }

// greetings("Ciao")

// ______________________________________________________________________
// ESERCIZIO 2
// scrivere un oggetto col vostro nome che vi identifichi in
// proprietà(nome, cognome, ecc...) e per
// metodi(es.possono anche essere semplici console.log di voi che eseguite un hobby)


// const myPerson = {
//     name: "Valentina",
//     surname: "Urzì",
//     età: "34",
//     sesso: "F",
//     professione: "Front-End Developer Student",
//     hobbies: [" Giocare ai videogames", " Programmare", " Leggere libri", " Ascoltare musica", " Praticare sport"],
//     motto: function () {
//         console.log("Non è mai troppo tardi!");
//     }
// }

// console.log(myPerson);
// myPerson.motto();

// console.log("Questi sono i miei hobbies: " + myPerson.hobbies)
// console.log("Ma tra tutti preferisco è" + myPerson.hobbies[0]);


// ______________________________________________________________________
// AVANZATO 1
// Scrivere una funzione calculator che preso come argomento
// una operazione e due numeri, ritorni alla fine il numero
// risultato dall'operazione scelta.

// function calculator(calc, num1, num2) {
//     let parsedNum1 = parseInt(num1);
//     let parsedNum2 = parseInt(num2);

//     if (calc === "+") {
//         console.log(parsedNum1 + parsedNum2);
//     }
//     else if (calc === "-") {
//         console.log(parsedNum1 - parsedNum2);
//     }
//     else if (calc === "*") {
//         console.log(parsedNum1 * parsedNum2);
//     }
//     else if (calc === "/") {
//         console.log(parsedNum1 / parsedNum2);
//     }
// }
// calculator("+", 100, 5);
// calculator("-", 100, 5);
// calculator("*", 100, 5);
// calculator("/", 100, 5);


// ______________________________________________________________________
// AVANZATO 2
// Provare ad aggiungere i due numeri singolarmente(num1, num2)
// e anche in coppia dentro un array([num1, num2]).

function cond(lowerCasedCalc, num1, num2) {
    let parsedNum1 = parseInt(num1);
    let parsedNum2 = parseInt(num2);

    if (lowerCasedCalc === "+" || lowerCasedCalc === "addizione") {
        console.log(parsedNum1 + parsedNum2);
    }
    else if (lowerCasedCalc === "-" || lowerCasedCalc === "sottrazione") {
        console.log(parsedNum1 - parsedNum2);
    }
    else if (lowerCasedCalc === "*" || lowerCasedCalc === "moltiplicazione") {
        console.log(parsedNum1 * parsedNum2);
    }
    else if (lowerCasedCalc === "/" || lowerCasedCalc === "divisione") {
        console.log(parsedNum1 / parsedNum2);
    }
    else {
        console.log("Non hai scelto un'operazione valida");
    }
}

// ______________________________________________________________________
// AVANZATO 2-A - NUMERI INSERITI SINGOLARMENTE


// function calculatorSimple() {
//     let calc = prompt("Scegli un'operazione (es. Addizione o +)");
//     let lowerCasedCalc = calc.toLowerCase();
//     let num1 = prompt("Scegli il primo numero");
//     let num2 = prompt("Scegli il secondo numero");

//     cond(lowerCasedCalc, num1, num2);
// }

// calculatorSimple();

// ______________________________________________________________________
// AVANZATO 2-B - NUMERI INSERITI CON ARRAY

// function calculatorArray() {
//     let calc = prompt("Scegli un'operazione (es. Addizione o +)");
//     let lowerCasedCalc = calc.toLowerCase();
//     let numbers = [];
//     for (let i = 0; i < 2; i++) {
//         numbers.push(prompt("Inserisci 2 numeri"));
//     }

//     cond(lowerCasedCalc, numbers[0], numbers[1]);
// }

// calculatorArray();


