const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const qSA = (element) => document.querySelectorAll(element);

const globalGET = async (category, request) => {
    const res = await fetch(`https://api.themoviedb.org/3/${category}/${request}?api_key=aaf3f723ac65f0e68c2363d746addff9`)
    const data = await res.json();
    return data

}

const cardGen = (data) => {
    const cardEl = cE("div");
    const cardImg = cE("img");

    cardEl.className = "card"
    cardEl.id = data.id;

    cardImg.className = "card__img";
    cardImg.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    cardImg.alt = data.name;

    cardEl.append(cardImg)

    return cardEl
}

export { cE, qS, qSA, globalGET, cardGen, }