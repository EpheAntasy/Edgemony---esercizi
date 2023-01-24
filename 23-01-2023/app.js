// Sulla base della lezione del giorno, 
// ricreare una funzione asincrona (utilizzando ASYNC / AWAIT) 
// che effettui una chiamata al seguente 
// endpoint: https://dummyjson.com/quotes.

// Lo stile è a scelta dell'utente e la quantità di quote 
// da visualizzare è soltanto 1. Per qualunque riferimento 
// utilizzare la documentazione presente al seguente 
// indirizzo: https://dummyjson.com/

import { cE } from "./utils.js";

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

// const quoteGet = async () => {
//     const res = await fetch("https://dummyjson.com/quotes/21");
//     const data = await res.json();

//     quoteEl.textContent = `"${data.quote}"`;
//     authorEl.textContent = `cit. ${data.author}`;

//     textWrapperEl.append(quoteEl, authorEl);
//     cardWrapperEl.appendChild(textWrapperEl);
//     document.body.appendChild(cardWrapperEl);
// }

// (quoteGet())

// PASSANDO DIRETTAMENTE L'ENDPOINT RANDOM DELL'API NELLA FETCH
// -----------------------------------------------------
// const quoteGet = async () => {
//     const res = await fetch("https://dummyjson.com/quotes/random");
//     const data = await res.json();

//     quoteEl.textContent = `"${data.quote}"`;
//     authorEl.textContent = `cit. ${data.author}`;

//     textWrapperEl.append(quoteEl, authorEl);
//     cardWrapperEl.appendChild(textWrapperEl);
//     document.body.append(cardWrapperEl, randomBtnEl);
// }

// (quoteGet())

// PASSANDO DIRETTAMENTE L'ENDPOINT COME PARAMETRO RANDOMICO
// -----------------------------------------------------

const quoteGet = async () => {
    const res = await fetch(`https://dummyjson.com/quotes/${parseInt(Math.random(1) * 30 + 1)}`);
    const data = await res.json();

    quoteEl.textContent = `"${(data.quote)}"`;
    authorEl.textContent = `cit. ${(data.author)}`;

    textWrapperEl.append(quoteEl, authorEl);
    cardWrapperEl.appendChild(textWrapperEl);
    document.body.append(cardWrapperEl, randomBtnEl);
}

randomBtnEl.onclick = () => {
    textWrapperEl.textContent = ""
    quoteGet();
}

quoteGet()

