// Esercizio 1
// ----------------------------------------------------------
// Seguendo quello fatto oggi a lezione effettuate una chiamate
// fetch() alla seguente API web:
// https://api.escuelajs.co/api/v1/products
// e stampate in console nome e descrizione del
// prodotto simile a questo formato
// ----------------------------------------------------------

// --------------
//     Tasty Rubber Soap
// The Football Is Good For Training And Recreational Purposes
// --------------
//     Modern Bronze Chair
// New ABC 13 9370, 13.3, 5th Gen CoreA5 - 8250U,
// 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016

// State molto attenti all'asincronicità della PROMISE

// fetch("https://api.escuelajs.co/api/v1/products")
//     .then(prod => prod.json())
//     .then(data => products(data));

// const products = (data) =>
//     data.forEach((item) => {
//         console.log("--------------")
//         console.log(item.title)
//         console.log(item.description)
//     });


// ----------------------------------------------------------
// Avanzato
// ----------------------------------------------------------
// Crea delle card il più verosimili possibile ad un vero e -
// commerce e provate ad utilizzare un loader
// (puo anche essere un semplice messaggio) e la gestione degli errori
// ----------------------------------------------------------


import { cE } from "./utils.js"

const cardContainerEl = cE("div");
cardContainerEl.className = "card__container"
cardContainerEl.textContent = "Caricamento dei prodotti..."

fetch("https://api.escuelajs.co/api/v1/products")
    .then(prod => prod.json())
    .then(data => cardCreateEl(data))
    .catch(e => {
        console.log(`Errore nel caricamento dell'API: ${e}`)
        cardContainerEl.textContent = "C'è stato un errore, prova ricaricando la pagina..."
    })

const cardCreateEl = (data) => {
    cardContainerEl.textContent = ""
    if (data) {
        data.forEach((item) => {

            const cardEl = cE("div");
            cardEl.className = "card";
            if (item.category && item.category.image) {
                cardEl.style.background = `url(${item.category.image}) center`
            }

            const overlayCardEl = cE("div");
            overlayCardEl.className = "overlay";

            const cardProductTitleEl = cE("h2");
            cardProductTitleEl.className = "card__title";

            const cardProductDescEl = cE("p");
            cardProductDescEl.className = "card__desc";


            cardProductTitleEl.textContent = item.title;
            cardProductDescEl.textContent = item.description;

            cardEl.append(overlayCardEl, cardProductTitleEl, cardProductDescEl);
            cardContainerEl.appendChild(cardEl);
        });
    }
}


document.body.appendChild(cardContainerEl);