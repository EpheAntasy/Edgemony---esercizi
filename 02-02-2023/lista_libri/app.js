// Ciao @qui, Esercizio
// Ormai sai come impostare un progetto con npm e impostare le tue configurazioni 
// di avvio e tipicamente usando nodemon (ma ricordati che i veri nerd, duri e puri,
// amano spegnere e riaccendere il server
// manualmente ogni minima modifica...:faccia_supplicante: ) Ok, scherzo...:allegria: .
// Perciò, procedi alla creazione di una tua cartella progetto dal nome lista_libri
// Lista libri è una app che offre anche una comoda API per prelevare i dati di 
// alcuni volumi interessanti
// Quindi, dopo la creazione del progetto, crea un file json nel quale 
// inserirai la tua lista, bastano 5-6 elementi nei quali puoi gestire 
// titolo, autore, genere, prezzo
// Chiama il tuo file json come vuoi
// Ora crea due file html: un per il percorso di root della home page e uno chi-sono
// Crea ora un server e ricordati che dovrai gestire dei file esterni quindi 
// aggiungi tutti i moduli nativi di cui hai bisogno e il collegamento alla risorsa JSON
// Ora il server dovrà impostare 4 percorsi: root, percorso chi-sono, 
// percorso della tua api che puoi chiamare come vuoi
// Nel percorso api dovrai mostrare i dati del tuo file json
// Nella pagina home crea un menù con i corretti collegamenti alle tue pagine.
// Buon divertimento and enjoy Node!:faccia_che_festeggia:

const http = require("http")
const fs = require("fs")
const url = require("url")

const index = fs.readFileSync("./index.html")
const bio = fs.readFileSync("./bio.html")
const books = require("./hp_books")

const server = http.createServer((req, res) => {
    let page = url.parse(req.url).pathname;
    console.log(page);

    if (page === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(index)
    } else if (page === "/bio") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(bio)
    } else if (page === "/books") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(books))
    } else {
        res.writeHead(404)
        res.write("Page not found")
    }
}).listen(8000);