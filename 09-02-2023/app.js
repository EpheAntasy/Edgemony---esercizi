const express = require("express")
const hbs = require("hbs")
const myPref = require("./myPreferences")

const app = express()

const PORT = 8000

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public"))
app.use(express.json())

app.get("/", (req, res) => {
    res.render("index", {
        titleHome: "Home Page",
        myPref: myPref
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        titleAbout: "About"
    })
})

app.get("/mi_presento", (req, res) => {
    res.render("mi_presento", {
        titlePres: "Mi presento",
        name: "Valentina",
        surname: "Urzì",
        age: "34",
        hobbies: "Computer, Musica e Libri"
    })
})

app.post("/login", (req, res) => {
    const { name } = req.body
    if (name) {
        return res
            .status(200)
            .send(`Benvenuta ${name}`)
    }
    else {
        return res
            .status(400)
            .send(`Si è verificato un errore`)
    }
})

app.listen(PORT, () => {
    console.log(`Server attivo sulla porta ${PORT}`)
})