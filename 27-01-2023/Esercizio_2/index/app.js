// Avanzato

// Sulla base dell'immagine mockup avanzato presente 
// in questa repository, creare una pagina 
// (a parte rispetto all'esercizio 1) che incorpori 
// una casella input di ricerca e un pulsante che:

// - digitato il nome di un film sulla input
// - cliccando il pulsante 'Search'
// - effettui una chiamata GET al film specifico
// - renderizzi il risultato proprio sotto la input, 
// mostrando almeno immagine e titolo del film ricercato

import { cE, qS, qSA, globalGET, cardGen } from "./utils.js";
const todayEl = qS("#today");
const popularEl = qS("#popular");
const topRatedEl = qS("#top__rated");
const modalEl = qS("#modal");
const modalCardEl = qS("#modal__card");
const modalOverlayEl = qS("#modal__overlay");

Promise.all([
    globalGET("tv", "popular"),
    globalGET("tv", "top_rated"),
    globalGET("tv", "airing_today")
])
    .then((data) => {
        data[0].results.map((series => popularEl.append(cardGen(series))));
        data[1].results.map((series => topRatedEl.append(cardGen(series))));
        data[2].results.map((series => todayEl.append(cardGen(series))));
    })
