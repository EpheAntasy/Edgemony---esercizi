import { cE, qS, } from "./utils.js"

const userProdForm = qS("#product__form");
const userTitle = qS("#title");
const userPrice = qS("#price");
const userDescription = qS("#description");
const userCategory = qS("#categoryId");
const userImage = qS("#images");
const userCatForm = qS("#category__form");
const userCatName = qS("#cat__title");
const userCatImage = qS("#cat__images");

userProdForm.addEventListener("submit", event => {
    event.preventDefault();

    const newProduct = {
        title: userTitle.value,
        price: parseInt(userPrice.value),
        description: userDescription.value,
        categoryId: parseInt(userCategory.value),
        images: [userImage.value],
    };

    userFormPost(newProduct, "products");
})

userCatForm.addEventListener("submit", event => {
    event.preventDefault();

    const newCategory = {
        name: userCatName.value,
        image: userCatImage.value,
    };

    userFormPost(newCategory, "categories");
})

const userFormPost = (productBody, spec) => {
    fetch(`https://api.escuelajs.co/api/v1/` + spec,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productBody),
        })
        .then(res => alert(spec === "products" ? "Oggetto caricato correttamente" : "Categoria aggiunta correttamente"))
        .catch(e => alert("Si è verificato un errore"))
}
