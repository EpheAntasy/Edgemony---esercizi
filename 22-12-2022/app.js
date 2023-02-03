// ESERCIZIO 1
// _________________________________________________________________

// Sulla base della lezione del giorno, creare una nuova funzione
// che funzioni esattamente come il metodo parseIntche
// preso un numero come parametro lo ritorni senza
// virgola, es: 23.23323 => 23

// Al fine di risolvere l'esercizio non utilizzare il parseInt
// chiaramente, ma trovare una alternativa possibile,
// già vista a lezione oppure nuova cercando sulla rete.

// L'esercizio inoltre deve svilupparsi nell'osservanza dei concetti
// riguardo allo scope in javascript, quindi attenzione alla tipologia
//  di varibili(var, let e const).

// ________________________________________________________________

//ESERCIZIO 1 - RISOLTO CON METODO TRUNC -
function numberInt(decimalNum) {
    return Math.trunc(decimalNum);
}

console.log(numberInt(10.5454353454))

// ________________________________________________________________

//ESERCIZIO 1 - RISOLTO CON METODO ROUND -
// function numberInt(decimalNum) {
//     return Math.round(decimalNum);
// }

// console.log(numberInt(724.7657645))

// AVANZATO
// ________________________________________________________________

// Creare un array di oggetti e processarne i valori.
// Bisogna creare una funzione che:
// preso come argomento l'array di oggetti,
// mostri in tre console.log le seguenti tipologie, per ogni oggetto:

// title
// price
// count

// function productInspect(id, title, price, description, category, image, rating) {
//     return {
//         id,
//         title,
//         price,
//         description,
//         category,
//         image,
//         rating: {
//             rate: rating.rate,
//             count: rating.count,
//         }
//     }
// }

// const productArray = []

// productArray.push()

// productArray.push(productInspect(1, "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 109.95, "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "men's clothing", "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", { rate: 3.9, count: 120 }))
// productArray.push(productInspect(2, "Mens Casual Premium Slim Fit T-Shirts ", 22.3, "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "men's clothing", "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", { rate: 4.1, count: 259 }))
// productArray.push(productInspect(3, "Mens Cotton Jacket", 55.99, "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "men's clothing", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", { rate: 4.7, count: 500 }))
// productArray.push(productInspect(4, "Mens Casual Slim Fit", 15.99, "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "men's clothing", "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", { rate: 2.1, count: 430 }))
// productArray.push(productInspect(5, "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", 695, "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", "jewelery", "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", { rate: 4.6, count: 400 }))

// for (let product of productArray) {
//     console.log("Title: " + product.title)
//     console.log("Price: " + product.price)
//     console.log("Count: " + product.rating.count)
//     console.log("-------------------");
// }




