// Esercizio 1
// ---------------------------------------------
// Sulla base della lezione del giorno, 
// creare un mock in formato JSON. 
// Riprendere uno degli esercizi passati 
// (es. generatore di una card prodotto), 
// eliminare eventuale chiamata fetch ed 
// utilizzare il mock JSON creato per popolare i dati.
// ---------------------------------------------

import { cE } from "./utils.js";
import my_aphorisms from "./my_aphorisms.json" assert {type: 'json'};

const cardWrapperEl = cE("div");
cardWrapperEl.className = "card__wrapper"
cardWrapperEl.style.backgroundImage = "url(./assets/img/landscape.jpg)"
const textWrapperEl = cE("div");
textWrapperEl.className = "text__wrapper"
const quoteEl = cE("h2");
const authorEl = cE("p");
const randomBtnEl = cE("button");
randomBtnEl.className = "btn";
randomBtnEl.textContent = "Genera un nuovo aforisma";

const quoteGet = () => {
    const { aphorisms } = my_aphorisms;
    const { cit, auth } = aphorisms[Math.floor(Math.random(1) * (aphorisms.length - 1))];
    quoteEl.textContent = `"${(cit)}"`;
    authorEl.textContent = `cit. ${(auth)}`;

    textWrapperEl.append(quoteEl, authorEl);
    cardWrapperEl.appendChild(textWrapperEl);
    document.body.append(cardWrapperEl, randomBtnEl);
}


randomBtnEl.onclick = () => {
    textWrapperEl.textContent = ""
    quoteGet();
}

quoteGet()

