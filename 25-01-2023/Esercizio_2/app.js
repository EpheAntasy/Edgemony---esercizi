// ---------------------------------------------
// Avanzato
// ---------------------------------------------
// Creare un grafico a piacere basato su una api 
// a scelta oppure su un mock costruito ad hoc.
// ---------------------------------------------

import { cE, qS } from "./utils.js";

const normalPokeEl = qS(".overlay__normal");
const waterPokeEl = qS(".overlay__water");
const firePokeEl = qS(".overlay__fire");
const lightningPokeEl = qS(".overlay__lightning");
const fightingPokeEl = qS(".overlay__fighting");
const grassPokeEl = qS(".overlay__grass");
const psychicPokeEl = qS(".overlay__psychic");

fetch("https://api.pokemontcg.io/v2/cards?q=set.id:base1")
    .then(res => res.json())
    .then(items => {
        const { data } = items
        const filteredPokeTypes = data.filter(({ types }) => types && types[0])
        const pokeTypes = filteredPokeTypes.map(({ types }) => types[0])
        const normalArray = checkType("Colorless", pokeTypes)
        const waterArray = checkType("Water", pokeTypes)
        const fireArray = checkType("Fire", pokeTypes)
        const lightningArray = checkType("Lightning", pokeTypes)
        const fightingArray = checkType("Fighting", pokeTypes)
        const grassArray = checkType("Grass", pokeTypes)
        const psychicArray = checkType("Psychic", pokeTypes)

        normalPokeEl.style.height = `${normalArray.length * 30}px`
        normalPokeEl.style.backgroundColor = "#ACAA7A"
        waterPokeEl.style.height = `${waterArray.length * 30}px`
        waterPokeEl.style.backgroundColor = "#6E8BC6"
        firePokeEl.style.height = `${fireArray.length * 30}px`
        firePokeEl.style.backgroundColor = "#F17F2D"
        lightningPokeEl.style.height = `${lightningArray.length * 30}px`
        lightningPokeEl.style.backgroundColor = "#F7D233"
        fightingPokeEl.style.height = `${fightingArray.length * 30}px`
        fightingPokeEl.style.backgroundColor = "#BA2E27"
        grassPokeEl.style.height = `${grassArray.length * 30}px`
        grassPokeEl.style.backgroundColor = "#79C251"
        psychicPokeEl.style.height = `${psychicArray.length * 30}px`
        psychicPokeEl.style.backgroundColor = "#C40080"
    })

const checkType = (type, array) => array.filter(item => item === type)


// 69