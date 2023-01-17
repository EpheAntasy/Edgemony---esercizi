// ------------------------------------------------------------------
// Esercizio 1
// ------------------------------------------------------------------
// Utilizzando sempre le seguenti Rest API:
// https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Con il metodo giusto per la manipolazione delle stringe limitiamo
// il titolo della card a solo 10 caratteri e la descrizione della card a soli 30.
// Dovremo creare anche un addEventListner al pusante di aggiunta al carrello,
//  in modo da aggiungere l'elemento al vostro carrello const cart = []
//  facendo apparire un alert() che indichi l'avvenuta aggiunta al carrello dell'elemento.
//  NB: è gradita sempre la gestione degli errori per il metodo fetch() ed un loader.
// ------------------------------------------------------------------

import { cE, qS, images } from "./utils.js"

const hamburgerBtnEl = qS(".hamburger__btn");
const hamburgerContEl = qS(".hamburger__cont");
const heroEl = qS(".hero");
const heroImg = qS(".hero__img");
const leftBtnEl = qS(".leftBtn");
const centerBtnEl = qS(".centerBtn");
const rightBtnEl = qS(".rightBtn");
const cardContainerEl = cE("div");
cardContainerEl.className = "card__container"
cardContainerEl.textContent = "Caricamento dei prodotti..."

let i = 0
const cart = [];

const heroImgEl = (img) => {
    leftBtnEl.addEventListener('click', () => {
        heroImg.src = images[0];
        leftBtnEl.style.background = ('#1c251b')
        centerBtnEl.style.background = ('white')
        rightBtnEl.style.background = ('white')
    })

    centerBtnEl.addEventListener('click', () => {
        heroImg.src = images[1];
        leftBtnEl.style.background = ('white')
        centerBtnEl.style.background = ('#1c251b')
        rightBtnEl.style.background = ('white')
    })
    rightBtnEl.addEventListener('click', () => {
        heroImg.src = images[2];
        leftBtnEl.style.background = ('white')
        centerBtnEl.style.background = ('white')
        rightBtnEl.style.background = ('#1c251b')
    })
}

heroImgEl()

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

            const cardProductTitleEl = cE("h2");
            cardProductTitleEl.className = "card__title";

            const cardProductDescEl = cE("p");
            cardProductDescEl.className = "card__desc";

            const cardBtnEl = cE("button");
            cardBtnEl.className = "card__btn";
            cardBtnEl.textContent = "Aggiungi al carrello"

            const overlayCardEl = cE("div");
            overlayCardEl.className = "overlay";

            cardProductTitleEl.textContent = item.title.slice(0, 10);
            cardProductDescEl.textContent = item.description.slice(0, 30);

            cardEl.append(overlayCardEl, cardProductTitleEl, cardProductDescEl, cardBtnEl);
            cardContainerEl.appendChild(cardEl);

            cardBtnEl.addEventListener("click", () => {
                alert(`Hai aggiunto ${item.title.slice(0, 10)} al carrello!`)
            })
        });
    }
}

hamburgerBtnEl.addEventListener("click", () => {
    hamburgerContEl.classList.toggle("display");
})


document.body.appendChild(cardContainerEl);

// ------------------------------------------------------------------
// Avanzato
// ------------------------------------------------------------------
// Fare in modo che gli elementi dentro l'array const cart =
// [] vengano visualizzati nel DOM creando i rispettivi elementi e
// prevedere un pulsante che rimuova l'elemento selezionato dal carrello
// ------------------------------------------------------------------

// const hamburgerBtnEl = qS(".hamburger__btn");
// const hamburgerContEl = qS(".hamburger__cont");
// const heroEl = qS(".hero");
// const heroImg = qS(".hero__img");
// const leftBtnEl = qS(".leftBtn");
// const centerBtnEl = qS(".centerBtn");
// const rightBtnEl = qS(".rightBtn");
// const cardContainerEl = cE("div");
// cardContainerEl.className = "card__container"
// cardContainerEl.textContent = "Caricamento dei prodotti..."

// let i = 0
// let cart = [];

// const heroImgEl = (img) => {
//     leftBtnEl.addEventListener('click', () => {
//         heroImg.src = images[0];
//         leftBtnEl.style.background = ('#1c251b')
//         centerBtnEl.style.background = ('white')
//         rightBtnEl.style.background = ('white')
//     })

//     centerBtnEl.addEventListener('click', () => {
//         heroImg.src = images[1];
//         leftBtnEl.style.background = ('white')
//         centerBtnEl.style.background = ('#1c251b')
//         rightBtnEl.style.background = ('white')
//     })
//     rightBtnEl.addEventListener('click', () => {
//         heroImg.src = images[2];
//         leftBtnEl.style.background = ('white')
//         centerBtnEl.style.background = ('white')
//         rightBtnEl.style.background = ('#1c251b')
//     })
// }

// heroImgEl()

// fetch("https://api.escuelajs.co/api/v1/products")
//     .then(prod => prod.json())
//     .then(data => cardCreateEl(data))
//     .catch(e => {
//         console.log(`Errore nel caricamento dell'API: ${e}`)
//         cardContainerEl.textContent = "C'è stato un errore, prova ricaricando la pagina..."
//     })

// const cardCreateEl = (data) => {
//     cardContainerEl.textContent = ""
//     if (data) {
//         data.forEach((item, index) => {

//             const cardEl = cE("div");
//             cardEl.className = "card";
//             if (item.category && item.category.image) {
//                 cardEl.style.background = `url(${item.category.image}) center`
//             }

//             const cardProductTitleEl = cE("h2");
//             cardProductTitleEl.className = "card__title";

//             const cardProductDescEl = cE("p");
//             cardProductDescEl.className = "card__desc";

//             const cardBtnEl = cE("button");
//             cardBtnEl.className = "card__btn";
//             cardBtnEl.textContent = "Aggiungi al carrello"

//             const overlayCardEl = cE("div");
//             overlayCardEl.className = "overlay";

//             cardProductTitleEl.textContent = item.title.slice(0, 10);
//             cardProductDescEl.textContent = item.description.slice(0, 30);

//             cardEl.append(overlayCardEl, cardProductTitleEl, cardProductDescEl, cardBtnEl);
//             cardContainerEl.appendChild(cardEl);

//             cardBtnEl.onclick = () => {
//                 let itemCart = {
//                     id: item.id,
//                     title: item.title,
//                     image: item.category.image,
//                     price: item.price
//                 }
//                 cart.push(itemCart);
//                 hamburgerContEl.textContent = "";
//                 cart.forEach((product) => {

//                     if (product) {
//                         const cartItemContEl = cE("div");
//                         cartItemContEl.className = "cart__item__cont"

//                         const cartImg = cE("img");
//                         cartImg.className = "cart__img";
//                         cartImg.src = product.image;

//                         const cartTitle = cE("h2");
//                         cartTitle.className = "cart__title";
//                         cartTitle.textContent = product.title.slice(0, 10);

//                         const cartPrice = cE("p");
//                         cartPrice.className = "cart__price"
//                         cartPrice.textContent = "€" + product.price;

//                         const btnElimEl = cE("button");
//                         btnElimEl.className = "btn__elim"
//                         btnElimEl.textContent = "X"

//                         const placeHolder = cE("div");

//                         cartItemContEl.append(cartImg, cartTitle, cartPrice, btnElimEl)
//                         hamburgerContEl.appendChild(cartItemContEl)

//                         btnElimEl.onclick = () => {
//                             cart = cart.filter((productElim) => productElim.id != product.id)
//                             cartItemContEl.remove()
//                         }
//                     }
//                 })
//             }
//         });
//     }
// }



// hamburgerBtnEl.addEventListener("click", () => {
//     hamburgerContEl.classList.toggle("display");
// })

// document.body.appendChild(cardContainerEl);
