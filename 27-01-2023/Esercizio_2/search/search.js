import { cE, qS, searchCardGen } from "./utils.js";

const searchWrapEl = qS(".search__wrapper");
const btnEl = qS("#search__btn")
const searchUserInput = qS("#user__input");

const searchGet = async (series) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=aaf3f723ac65f0e68c2363d746addff9&query=${series}`)
    const data = await res.json();

    return data
}

btnEl.addEventListener("click", async (e) => {
    searchWrapEl.textContent = ""
    const inputValue = searchUserInput.value;
    const data = await searchGet(inputValue)
    if (inputValue) {
        let results = data.results.filter(({ name }) => name.toLowerCase() === (inputValue.toLowerCase()))
        results.forEach(movie => { searchCardGen(movie, searchWrapEl) })
    }
    else {
        alert("No Series inserted")
    }
})



