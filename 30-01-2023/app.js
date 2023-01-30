const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") /* la pagina iniziale viene indicata solo con lo "/", quindi il percorso per visualizzare la home sarà: localhost:3000/ */
        res.end("Home page del mio server")
    else if (req.url === "/studenti") /* il percorso della pagina degli studenti sarà: localhost:3000/studenti */
        res.end("Questi sono gli studenti del Coding Bootamp 6")
    else if (req.url === "/corsi") /* il percorso della pagina degli studenti sarà: localhost:3000/corsi */
        res.end("Questi sono tutti i corsi disponibili")
    else res.end("La pagina richiesta non e' stata trovata, effettua una nuova ricerca")
})

server.listen(3000)