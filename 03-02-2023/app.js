// Bene, quindi per oggi vi lascio con l'incarico di sviluppare una 
// semplice applicazione Express, quindi avviate tutto il 
// processo di installazione generale, create e avviate il server.
// La vostra app  deve gestire risorse statiche perchè lavoriamo con interfacce in html.
// Il sito riguarda un vostro hobby, quindi piena libertà del tema.
// Gestite 4 pagine html fra cui la 404
// Sviluppate un menu con i giusti collegamenti relativi al routing della vostra app.
//  Ovviamente la 404 non va collegata a livello di menu
// Le cartelle che contengono fogli di stile e immagini devono essere posti 
// in una sottocartella di public denominata assets => quindi occhio ai link relativi
// Buon lavoro, anzi no! Buon divertimento

const express = require("express")

const app = express()
const PORT = 8000

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})
app.get("/chi_sono", (req, res) => {
    res.sendFile(__dirname + "/public/chi_sono.html")
})
app.get("/prossime_uscite", (req, res) => {
    res.sendFile(__dirname + "/public/prossime_uscite.html")
})
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/error.html")
})

app.listen(PORT, console.log(`Server attivo sulla porta : ${PORT}`));