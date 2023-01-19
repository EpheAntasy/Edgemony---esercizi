
import { cE, qS, images } from "./utils.js"

const heroEl = qS(".hero");
const heroImg = qS(".hero__img");
const leftBtnEl = qS(".leftBtn");
const centerBtnEl = qS(".centerBtn");
const rightBtnEl = qS(".rightBtn");

let i = 0

const heroImgEl = (img) => {
    leftBtnEl.addEventListener('click', () => {
        heroImg.src = images[0];
        leftBtnEl.style.background = ('#1c251b')
        centerBtnEl.style.background = ('white')
        rightBtnEl.style.background = ('white')
    })

    centerBtnEl.addEventListener('click', () => {
        heroImg.src = images[1];
        leftBtnEl.style.background = ('white')
        centerBtnEl.style.background = ('#1c251b')
        rightBtnEl.style.background = ('white')
    })
    rightBtnEl.addEventListener('click', () => {
        heroImg.src = images[2];
        leftBtnEl.style.background = ('white')
        centerBtnEl.style.background = ('white')
        rightBtnEl.style.background = ('#1c251b')
    })
}

heroImgEl()
