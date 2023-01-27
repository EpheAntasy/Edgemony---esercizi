// Esercizio 1

// Sulla base dell'esercizio del giorno:

// - Creare un account su `https://developers.themoviedb.org/`
// - Ottenere una API KEY
// - creare una pagina web che effettui anche una sola 
// chiamata GET stavolta per renderizzare una lista di 
// serie tv, esempio `popular` o `top rated` o entrambe,
//  e visaulizzare a schermo con uno stile a piacere.



import { cE, qS, qSA, globalGET, cardGen } from "./utils.js";

const popularEl = qS("#popular");
const topRatedEl = qS("#top__rated");

Promise.all([
    globalGET("tv", "popular"),
    globalGET("tv", "top_rated")
])
    .then((data) => {
        data[0].results.map((series => popularEl.append(cardGen(series))));
        data[1].results.map((series => topRatedEl.append(cardGen(series))));
    })
