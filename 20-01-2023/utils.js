const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const images = [
    "./assets/img/1.jpg",
    "./assets/img/2.jpg",
    "./assets/img/3.jpg"
]

const globalFetch = (endpoint, method, body) => {
    return fetch(`https://api.escuelajs.co/api/v1/${endpoint}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body && JSON.stringify(body),
    }).then(prod => prod.json())
}

export { cE, qS, images, globalFetch }