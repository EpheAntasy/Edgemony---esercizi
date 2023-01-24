const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardGen = (elements, cardsContainerEl) => {
const { image, firstName, lastName, age, gender, bloodGroup } = elements

        const cardEl = cE("div");
        cardEl.className = "card__wrapper"
        const imgNamesWrapperEl = cE("div");
        imgNamesWrapperEl.className = "img__wrapper"
        const userImageEl = cE("img");
        const nameSurWrapperEl = cE("div");
        nameSurWrapperEl.className = "names__wrapper"
        const nameEl = cE("h2");
        const surnameEl = cE("h2");
        const infoWrapperEl = cE("div");
        infoWrapperEl.className = "info__wrapper"
        const genderEl = cE("p");
        const ageEl = cE("p");
        const bloodGroupEl = cE("p");

        userImageEl.src = image;
        nameEl.textContent = `Nome : ${firstName}`;
        surnameEl.textContent = `Cognome: ${lastName}`;
        genderEl.textContent = `Sesso: ${gender}`;
        ageEl.textContent = `Età: ${age}`;
        bloodGroupEl.textContent = `Gruppo sanguigno: ${bloodGroup}`

        nameSurWrapperEl.append(nameEl, surnameEl);
        imgNamesWrapperEl.append(userImageEl, nameSurWrapperEl);
        infoWrapperEl.append(ageEl, genderEl, bloodGroupEl);
        cardEl.append(imgNamesWrapperEl, infoWrapperEl)
        cardsContainerEl.appendChild(cardEl)
        
}

export { cE, qS, cardGen}