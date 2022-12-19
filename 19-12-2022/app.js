/* Sulla base della lezione del giorno, creare una piccola applicazione che:
chieda all'utente di inserire una operazione (string) ex. 'addizione'+ */

let userOper = prompt("Scegli un tipo di operazione (es. Addizione)");
let lowerUserOper = userOper.toLowerCase();
console.log("Hai scelto " + (lowerUserOper));

// chieda all'utente di inserire un primo numero //

let firstNum = prompt("Scegli un numero");
let parsedFirstNum = parseInt(firstNum);
console.log("Hai scelto il numero " + (firstNum));

// chieda all'utente di inserire un secondo numero //

let secondNum = prompt("Scegli un altro numero");
console.log("Hai scelto il numero " + (secondNum));
let parsedSecondNum = parseInt(secondNum);

// infine dare il risultato dell'operazione in console//

//con if, else if, else:

if (lowerUserOper === "addizione" || lowerUserOper === "+") {
    console.log("Il tuo risultato è: " + (parsedFirstNum + parsedSecondNum));
}
else if (lowerUserOper === "sottrazione" || lowerUserOper === "-") {
    console.log("Il tuo risultato è: " + (parsedFirstNum - parsedSecondNum));
}
else if (lowerUserOper === "moltiplicazione" || lowerUserOper === "*") {
    console.log("Il tuo risultato è: " + (parsedFirstNum * parsedSecondNum));
}
else if (lowerUserOper === "divisione" || lowerUserOper === "/") {
    console.log("Il tuo risultato è: " + (parsedFirstNum / parsedSecondNum));
}
else {
    alert("Non hai selezionato un'operazione valida, ricarica la pagina");
}

//con switch:

/*switch (lowerUserOper) {
    case "addizione":
    case "+":
        console.log("Il tuo risultato è: " + (parsedFirstNum + parsedSecondNum));
        break;
    case "sottrazione":
    case "-":
        console.log("Il tuo risultato è: " + (parsedFirstNum - parsedSecondNum));
        break;
    case "moltiplicazione":
    case "*":
        console.log("Il tuo risultato è: " + (parsedFirstNum * parsedSecondNum));
        break;
    case "divisione":
    case "/":
        console.log("Il tuo risultato è: " + (parsedFirstNum / parsedSecondNum));
        break;
    default:
        alert("Non hai selezionato un'operazione valida, ricarica la pagina");
}
*/

