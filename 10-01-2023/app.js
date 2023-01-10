// ESERCIZIO 1
// _______________________________________________________________________________
// Sulla base della lezione del giorno, scrivere una funzione 
// che generi una hero dinamicamente tramite Javascript.
// Devo essere presenti i seguenti elementi:

// Image di sfondo
// Un titolo principale
// Un sottotitolo descrittivo breve

// const createHero = (img, title, desc) => {
//     const bodyEl = document.body;
//     const heroEl = document.createElement('div');
//     const heroImgEl = document.createElement('img');
//     const heroTitleEl = document.createElement('h1');
//     const heroDescEl = document.createElement('p');

//     heroEl.className = 'hero';

//     heroImgEl.className = 'hero__img';
//     heroImgEl.setAttribute('src', 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg');
//     heroImgEl.setAttribute('alt', 'super_mario');

//     heroTitleEl.className = 'hero__title';
//     heroTitleEl.textContent = 'Retro Games';

//     heroDescEl.className = 'hero__desc';
//     heroDescEl.textContent = 'I grandi classici del panorama videoludico';

//     heroEl.append(heroImgEl, heroTitleEl, heroDescEl);
//     bodyEl.appendChild(heroEl);

// }

// createHero()


// AVANZATO
// _______________________________________________________________________________

// Scrivere un applicazione piu ampia che includa la Hero
// dell'esercizio 1 e aggiunga anche una sezione relativa a dei prodotti
// (simile a quanto visto a lezione), attenzione a creare un contenitore
// che inglobi tutti i singoli prodotti (qualcosa simile a productListEl).

import { games } from './games.js'

const bodyEl = document.body;

const createHero = (img, title, description) => {

    const heroEl = document.createElement('div');
    const heroImgEl = document.createElement('img');
    const heroTitleEl = document.createElement('h1');
    const heroDescEl = document.createElement('p');

    heroEl.className = 'hero';

    heroImgEl.className = 'hero__img';
    heroImgEl.setAttribute('src', 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg');
    heroImgEl.setAttribute('alt', 'super_mario');

    heroTitleEl.className = 'hero__title';
    heroTitleEl.textContent = 'Retro Games';

    heroDescEl.className = 'hero__desc';
    heroDescEl.textContent = 'I grandi classici del panorama videoludico';

    heroEl.append(heroImgEl, heroTitleEl, heroDescEl);
    bodyEl.appendChild(heroEl);

}

createHero()

const vgCardContEl = document.createElement('div');
vgCardContEl.className = 'cont__card';

const createCard = (img, title, description) => {


    const vgCardEl = document.createElement('div');
    const vgImgEl = document.createElement('img');
    const vgTitleEl = document.createElement('h2');
    const vgDescEl = document.createElement('p');

    vgCardEl.className = 'card';

    vgImgEl.className = 'card__img';
    vgImgEl.setAttribute('src', img);
    vgImgEl.setAttribute('alt', title);

    vgTitleEl.className = 'card__title';
    vgTitleEl.textContent = title;

    vgDescEl.className = 'card__desc';
    vgDescEl.textContent = description;

    vgCardEl.append(vgImgEl, vgTitleEl, vgDescEl);
    vgCardContEl.appendChild(vgCardEl);
    bodyEl.appendChild(vgCardContEl);
}

for (let game of games) {
    createCard(game.img, game.title, game.description);
}

