// ----------------------------------------------------
//     Esercizio 1
// ----------------------------------------------------
//     Utilizzando sempre le seguenti Rest API:
// https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Creiamo una nuova pagina al nostro e - commerce che includa un form
// Questo form dovrà contenere i seguenti campi:
// title
// price
// category
// image(dove inseriremo un url ad immagine presente nel web)
// description
// aggiungiamo poi un addEventlistner al form che venga triggherato al submit.
// Questo evento dovrà stampare in console un oggetto che conterrà i seguenti valori

// {
// title: -valore preso dal form -,
//     price: -valore preso dal form -,
//         description: -valore preso dal form -,
//             categoryId: -valore preso dal form -,
//                 images: -valore preso dal form -
// }
// NB: per evitare che si riaggiorni al pagine utilizzare il metodo preventDefault()
// ----------------------------------------------------

// const userForm = document.querySelector("#form");
// const userTitle = document.querySelector("#title");
// const userPrice = document.querySelector("#price");
// const userDescription = document.querySelector("#description");
// const userCategory = document.querySelector("#categoryId");
// const userImage = document.querySelector("#images");

// userForm.addEventListener("submit", event => {
//     event.preventDefault();

//     const newProduct = {
//         title: userTitle.value,
//         price: parseInt(userPrice.value),
//         description: userDescription.value,
//         categoryId: parseInt(userCategory.value),
//         images: [userImage.value],
//     };

//     console.log(newProduct)
// })



// ----------------------------------------------------
//     Avanzato
// ----------------------------------------------------
//     Inviare l'oggetto creato in precedenza ad una funzione che faccia una fetch() con il metodo POST per caricare il nuovo elemento al database
// Gestite le risposte del POST in modo da dare un feedback all'utente
// NB: ricordate di stringhificare l'oggetto con il metodo JSON.stringify()
// ----------------------------------------------------

const userForm = document.querySelector("#form");
const userTitle = document.querySelector("#title");
const userPrice = document.querySelector("#price");
const userDescription = document.querySelector("#description");
const userCategory = document.querySelector("#categoryId");
const userImage = document.querySelector("#images");

userForm.addEventListener("submit", event => {
    event.preventDefault();

    const newProduct = {
        title: userTitle.value,
        price: parseInt(userPrice.value),
        description: userDescription.value,
        categoryId: parseInt(userCategory.value),
        images: [userImage.value],
    };

    userFormPost(newProduct);
})

const userFormPost = productBody => {
    fetch("https://api.escuelajs.co/api/v1/products",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productBody),
        })
        .then(res => alert("Oggetto caricato correttamente"))
        .catch(e => alert("Si è verificato un problema"))
}
