const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardGen = (data, wrapper) => {
    const cardEl = cE("div");
    const cardImg = cE("img");
    const titleEl = cE("h2");
    const overviewEl = cE("p");
    const releaseDateEl = cE("p");

    overviewEl.textContent = data.overview;

    releaseDateEl.textContent = data.release_date;

    titleEl.textContent = data.name;
    titleEl.style.color = "black"
    cardEl.className = "card"
    cardEl.id = data.id;

    cardImg.className = "card__img";
    cardImg.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    cardImg.alt = data.name;

    cardEl.append(cardImg, titleEl, overviewEl, releaseDateEl)
    wrapper.append(cardEl)

}

export { cE, qS, cardGen }