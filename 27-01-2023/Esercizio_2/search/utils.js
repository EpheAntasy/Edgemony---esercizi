const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const searchCardGen = (data, wrapper) => {
    const cardEl = cE("div");
    const cardImgEl = cE("img");
    const wrapperEl = cE("div");
    const textWrapperEl = cE("div");
    const titleEl = cE("h2");
    const overviewEl = cE("p");
    const releaseDateEl = cE("p");

    wrapperEl.className = "search__card__wrapper"

    textWrapperEl.className = "search__text__wrapper"

    overviewEl.className = "search__desc"
    overviewEl.textContent = data.overview;

    releaseDateEl.className = "release__date"
    releaseDateEl.textContent = `First episode ${data.first_air_date}`;

    titleEl.className = "search__title"
    titleEl.textContent = data.name;
    titleEl.style.color = "black"

    cardEl.className = "search__card"
    cardEl.id = data.id;

    cardImgEl.className = "search__card__img";
    cardImgEl.src = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png";
    cardImgEl.alt = data.name;

    cardEl.appendChild(cardImgEl)
    textWrapperEl.append(titleEl, overviewEl, releaseDateEl)
    wrapperEl.append(cardEl, textWrapperEl,)
    wrapper.append(wrapperEl)

}

export { cE, qS, searchCardGen }