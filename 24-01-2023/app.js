// Esercizio 1
// Sulla base della lezione del giorno, creare una paginetta che effettui 
// una chiamata di tipo GET all'endpoint https://dummyjson.com/users, 
// renderizzare la lista di utenti, creando delle cards con i valori 
// a vostra scelta (es. nome, cognome, ecc...)



import { cE, qS, cardGen } from "./utils.js";

// const cardsContainerEl = cE("div");
// cardsContainerEl.className = "cards__container"

// const cardCreateEl = async () => {
//     const res = await fetch("https://dummyjson.com/users");
//     const data = await res.json();
//     data.users.forEach(elements => cardGen(elements, cardsContainerEl));
// }

// cardCreateEl()

// document.body.appendChild(cardsContainerEl);



// Avanzato
// Sulla base dell'esercizio 1, creare un filtro tramite input che vada a
// filtrare la lista degli utenti per nome e/o cognome

const cardsContainerEl = cE("div");
cardsContainerEl.className = "cards__container"

const searchUserInput = qS("#searchUser");

const cardCreateEl = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    data.users.forEach(elements => cardGen(elements, cardsContainerEl));

    searchUserInput.addEventListener("input", (e) => {

        if (e.target.value) {
            cardsContainerEl.textContent = "";
            let users = data.users.filter(name => name.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
            users.forEach(elements => cardGen(elements, cardsContainerEl));
            console.log(e.target.value)
        }
    })

}

cardCreateEl()


document.body.appendChild(cardsContainerEl);

