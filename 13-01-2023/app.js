import { cE, qS, images, status } from './utils.js'

// const cardImgEl = qS('.card__img');
// const leftBtnEl = qS('.left__btn');
// const centerBtnEl = qS('.center__btn');
// const rightBtnEl = qS('.right__btn');
// const titleEl = qS('.title');

// cardImgEl.src = cardImgEl.src = images[1];
// titleEl.textContent = status[1];
// centerBtnEl.style.background = ('#1c251b')


// leftBtnEl.addEventListener('click', () => {
//     cardImgEl.src = images[0];
//     titleEl.textContent = status[0]
//     leftBtnEl.style.background = ('#1c251b')
//     centerBtnEl.style.background = ('white')
//     rightBtnEl.style.background = ('white')
// })

// centerBtnEl.addEventListener('click', () => {
//     cardImgEl.src = images[1];
//     titleEl.textContent = status[1]
//     leftBtnEl.style.background = ('white')
//     centerBtnEl.style.background = ('#1c251b')
//     rightBtnEl.style.background = ('white')
// })
// rightBtnEl.addEventListener('click', () => {
//     cardImgEl.src = images[2];
//     titleEl.textContent = status[2]
//     leftBtnEl.style.background = ('white')
//     centerBtnEl.style.background = ('white')
//     rightBtnEl.style.background = ('#1c251b')
// })

// ________________________________________________________________
// Avanzato
// Creare il template dello slider cui
// sopra completamente dinamico(via Javascript).
// ________________________________________________________________
// NB. Per far funzionare l'avanzato ho commentato l'index.html
// ________________________________________________________________

const pageTitleEl = cE('h1');
const shapeOvalEl = cE('div');
const cardContainerEl = cE('div');
const cardImgEl = cE('img');
const leftBtnEl = cE('button');
const centerBtnEl = cE('button');
const rightBtnEl = cE('button');
const titleEl = cE('h2');
const btnWrapperEl = cE('div');

leftBtnEl.className = ('btn left__btn');
centerBtnEl.className = ('btn center__btn');
rightBtnEl.className = ('btn center__btn');
cardContainerEl.className = ('card__container');
cardImgEl.className = ('card__img');
btnWrapperEl.className = ('btns__wrapper');
pageTitleEl.textContent = 'Come ti senti oggi?';
shapeOvalEl.className = ('oval');
cardImgEl.src = cardImgEl.src = images[1];
titleEl.textContent = status[1];
centerBtnEl.style.background = ('#1c251b')


btnWrapperEl.append(leftBtnEl, centerBtnEl, rightBtnEl);
cardContainerEl.append(cardImgEl, btnWrapperEl, titleEl);
document.body.append(pageTitleEl, shapeOvalEl, cardContainerEl);

leftBtnEl.addEventListener('click', () => {
    cardImgEl.src = images[0];
    titleEl.textContent = status[0]
    leftBtnEl.style.background = ('#1c251b')
    centerBtnEl.style.background = ('white')
    rightBtnEl.style.background = ('white')
})

centerBtnEl.addEventListener('click', () => {
    cardImgEl.src = images[1];
    titleEl.textContent = status[1]
    leftBtnEl.style.background = ('white')
    centerBtnEl.style.background = ('#1c251b')
    rightBtnEl.style.background = ('white')
})
rightBtnEl.addEventListener('click', () => {
    cardImgEl.src = images[2];
    titleEl.textContent = status[2]
    leftBtnEl.style.background = ('white')
    centerBtnEl.style.background = ('white')
    rightBtnEl.style.background = ('#1c251b')
})


