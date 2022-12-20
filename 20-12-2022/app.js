// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, 
// e aggiungere al suo interno dieci elementi di tipo string a scelta, 
// rispettando i seguenti punti:

// - utilizzare il ciclo for classico

// - sarà l'utente ad inserire queste stringhe (prompt)

// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console


let colors = [];

CICLO FOR SEMPLICE

for (let i = 0; i < 10; i++) {
    colors.push(prompt("Inserisci 10 colori"));
}
console.log(colors);


// Avanzato
// Riscrivere l'esercizio sopra utilizzando le altre due versioni
// minimal del ciclo for (for in e for of)

//FOR IN

// for (let i = 0; i < 10; i++) {
//     colors.push(prompt("Inserisci 10 colori"));
// }
// for (let colorIndex in colors) {
//     console.log(colorIndex);
// }

// FOR OF

// for (let i = 0; i < 10; i++) {
// colors.push(prompt("Inserisci 10 colori"));
// }
// for (let color of colors) {
//     console.log(color);
// }


//BONUS!!!


//CICLO FOR CON IF ANNIDATO

// for (let i = 0; i < 10; i++) {
// colors.push(prompt("Inserisci 10 colori"));
//     if (i >= 9) {
//  console.log(colors);
//   }
// }

//FOR IN E OF COMBINATI

// for (let i = 0; i < 10; i++) {
//     colors.push(prompt("Inserisci 10 colori"));
// }

// for (let colorIndex in colors) {
//     console.log(colorIndex + ": " + colors[colorIndex])
// }
