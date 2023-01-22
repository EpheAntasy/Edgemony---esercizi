import { globalFetch, qS, } from "../../utils.js"

const exportForms = () => {
    const userProdForm = qS("#product__form");
    const userCatForm = qS("#category__form");
    const userDelProdForm = qS("#product__del__form");
    const userModProdForm = qS("#product__mod__form");

    // CREAZIONE PRODOTTO

    userProdForm.addEventListener("submit", event => {
        event.preventDefault();

        const newProduct = {
            title: event.target.title.value,
            price: parseInt(event.target.price.value),
            description: event.target.description.value,
            categoryId: parseInt(event.target.categoryId.value),
            images: [event.target.images.value],
        };

        globalFetch("products", "POST", newProduct)
            .then(res => alert("Prodotto caricato correttamente"))
            .catch(e => alert("Si è verificato un errore"))
    })

    // CANCELLAZIONE PRODOTTO

    userDelProdForm.addEventListener("submit", event => {
        event.preventDefault();

        globalFetch(`products/${event.target.id__prod__del.value}`, "DELETE")
            .then(res => alert("Prodotto eliminato correttamente"))
            .catch(e => alert("Si è verificato un errore"))
    })

    // MODIFICA PRODOTTO

    userModProdForm.addEventListener("submit", event => {
        event.preventDefault();

        const newProduct = {
            title: event.target.title__mod.value,
            price: parseInt(event.target.price__mod.value),
            description: event.target.description__mod.value,
            categoryId: parseInt(event.target.categoryId__mod.value),
            images: [event.target.images__mod.value],
        };
        console.log(newProduct);

        globalFetch(`products/${event.target.id__prod__mod.value}`, "PUT", newProduct)
            .then(res => alert("Prodotto modificato correttamente"))
            .catch(e => alert("Si è verificato un errore"))
    })


    // CREAZIONE CATEGORIA

    userCatForm.addEventListener("submit", event => {
        event.preventDefault();

        const newCategory = {
            name: event.target.cat__title.value,
            image: event.target.cat__images.value,
        };

        globalFetch("categories", "POST", newCategory)
            .then(res => alert("Categoria aggiunta correttamente"))
            .catch(e => alert("Si è verificato un errore"))
    })
}

export default exportForms