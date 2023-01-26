// Esercizio 1
// Sulla base della lezione di oggi,
// creare un intervallo temporale che
// simuli un conto alla rovescia, che dopo n secondi:

// - mostra il timer in schermo, come visto a lezione;
// - che allo scadere del timer la pagina deve
//   cambiare colore e il timer stesso deve scomparire;
// - la presenza di un pulsante STOP interrompe
//   il flusso temporale, tramite il relativo clearInterval.

import { cE, qS } from "./utils.js";

const wrapperEl = cE("div");
const countdownTextEl = cE("h2");
const videoEl = qS("video");
const btnEl = qS("button")

wrapperEl.className = "wrapper"

countdownTextEl.className = "text"


let secCounter = 5

const mycountDown = setInterval(() => {
    countdownTextEl.textContent = secCounter
    secCounter--
    if (secCounter === -1) {
        countdownTextEl.textContent = "BUON ANNO!"
        videoEl.style.opacity = "1"
    }

    if (secCounter === -2) {
        countdownTextEl.remove()
    }
    // l'ho messo per dimostrare il funzionamento del bottone
    console.log(secCounter)
}, 1000);

btnEl.addEventListener("click", () => {
    clearInterval(mycountDown)
})

wrapperEl.appendChild(countdownTextEl)
document.body.appendChild(wrapperEl)