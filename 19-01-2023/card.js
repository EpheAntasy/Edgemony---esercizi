import { cE, qS, images } from "./utils.js"

const hamburgerBtnEl = qS(".hamburger__btn");
const hamburgerBtnImgEl = qS(".ham__img");

const qntCounterEl = cE("p");
qntCounterEl.className = "qnt__counter";

const hamburgerContEl = qS(".hamburger__cont");

const hamFooterEl = cE("div");
hamFooterEl.className = "ham__footer";


const removeBtnFromCartEl = cE("p");
removeBtnFromCartEl.textContent = "";
removeBtnFromCartEl.className = "remove__btn__cart"

const totalPriceEl = cE("p");
totalPriceEl.textContent = "";

const sumProductsEl = cE("p");
sumProductsEl.textContent = "";

const cardContainerEl = cE("div");
cardContainerEl.className = "card__container"
cardContainerEl.textContent = "Caricamento dei prodotti..."

let cart = [];

fetch("https://api.escuelajs.co/api/v1/products")
    .then(prod => prod.json())
    .then(data => cardCreateEl(data.filter(category => category.category.id === 39)))
    .catch(e => {
        console.log(`Errore nel caricamento dell'API: ${e}`)
        cardContainerEl.textContent = "C'è stato un errore, prova ricaricando la pagina..."
    })

const cardCreateEl = (data) => {
    cardContainerEl.textContent = ""
    if (data) {
        data.forEach((item, index) => {

            const cardEl = cE("div");
            cardEl.className = "card";
            if (item && item.images[0]) {
                cardEl.style.background = `url(${item.images[0]}) center`
            }

            const categoryNameEl = cE("p");
            categoryNameEl.className = "cat__name";
            categoryNameEl.textContent = item.category.name;

            const cardProductTitleEl = cE("h2");
            cardProductTitleEl.className = "card__title";

            const cardProductDescEl = cE("p");
            cardProductDescEl.className = "card__desc";

            const cardBtnEl = cE("button");
            cardBtnEl.className = "card__btn";
            cardBtnEl.textContent = "Aggiungi al carrello";

            const overlayCardEl = cE("div");
            overlayCardEl.className = "overlay";

            cardProductTitleEl.textContent = `${item.title.slice(0, 10)} - ${item.price} €`;
            cardProductDescEl.textContent = item.description.slice(0, 30);

            cardEl.append(overlayCardEl, categoryNameEl, cardProductTitleEl, cardProductDescEl, cardBtnEl);
            cardContainerEl.appendChild(cardEl);

            cardBtnEl.onclick = () => {
                let itemCart = {
                    id: item.id,
                    title: item.title,
                    image: item.images[0],
                    price: item.price,
                    qnty: 1
                }

                let cartControl = cart.find(element => element.id === item.id);
                if (cartControl) {
                    cart = cart.map(element => {
                        if (element.id === item.id) {
                            element.qnty = element.qnty + 1;
                        }
                        return element
                    })
                }
                else {
                    cart.push(itemCart);
                    hamburgerBtnImgEl.src = "https://cdn-icons-png.flaticon.com/512/2169/2169826.png";
                }
                const cartSum = cart.reduce((total, value) => total + value.qnty, 0)
                qntTot(cartSum);
                hamburgerContEl.textContent = "";

                cart.forEach((product) => {

                    if (product) {
                        const cartItemContEl = cE("div");
                        cartItemContEl.className = "cart__item__cont"

                        const cartImg = cE("img");
                        cartImg.className = "cart__img";
                        cartImg.src = product.image;

                        const cartTitle = cE("h2");
                        cartTitle.className = "cart__title";
                        cartTitle.textContent = product.title.slice(0, 10);

                        const cartPrice = cE("p");
                        cartPrice.className = "cart__price"
                        cartPrice.textContent = "€" + product.price;

                        const cartQntyEl = cE("p")
                        cartQntyEl.className = "cart__qnty"
                        cartQntyEl.textContent = product.qnty;


                        const btnElimEl = cE("button");
                        btnElimEl.className = "btn__elim"
                        btnElimEl.textContent = "X"

                        cartItemContEl.append(cartImg, cartTitle, cartPrice, cartQntyEl, btnElimEl)
                        hamburgerContEl.appendChild(cartItemContEl)

                        btnElimEl.onclick = () => {
                            let cartControl = cart.some(element => element.id === product.id && element.qnty > 1);
                            if (cartControl) {
                                cart = cart.map(element => {
                                    if (element.id === product.id) {
                                        element.qnty = element.qnty - 1;
                                        cartQntyEl.textContent = product.qnty;
                                    }
                                    return element
                                })
                            }
                            else {
                                cart = cart.filter((productElim) => productElim.id != product.id)
                                cartItemContEl.remove()
                                if (cart.length === 0) {
                                    hamburgerBtnImgEl.src = "https://cdn-icons-png.flaticon.com/512/2169/2169842.png";
                                    qntCounterEl.remove()
                                }
                            }
                            const cartSum = cart.reduce((total, value) => total + value.qnty, 0)
                            qntTot(cartSum);
                        }
                    }
                })
                totalPriceEl.textContent = `Prezzo totale: ${cart.reduce((total, value) => total + (value.price * value.qnty), 0)}€`
                sumProductsEl.textContent = `Prodotti totali: ${cartSum}`;

                removeBtnFromCartEl.textContent = "Azzera carrello";
                removeBtnFromCartEl.onclick = () => {
                    cart = [];
                    hamburgerContEl.textContent = "";
                    hamburgerBtnImgEl.src = "https://cdn-icons-png.flaticon.com/512/2169/2169842.png";
                    qntCounterEl.remove()
                }
                hamFooterEl.append(totalPriceEl, sumProductsEl, removeBtnFromCartEl);
                hamburgerContEl.appendChild(hamFooterEl);
            }
        });
    }
}

const qntTot = (qnty) => {
    if (cart.length) {
        qntCounterEl.textContent = qnty
        hamburgerBtnEl.appendChild(qntCounterEl)
    }
}

hamburgerBtnEl.addEventListener("click", () => {
    hamburgerContEl.classList.toggle("display");
})

document.body.appendChild(cardContainerEl);