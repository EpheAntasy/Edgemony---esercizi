const express = require("express")
const router = express.Router()
const hbs = require("hbs")
const bodyParser = require("body-parser")
const session = require("cookie-session")

router.use(express.static("./public"))
router.use(session({ secret: "la mia sessione" }))
router.use(bodyParser.urlencoded({ extended: true }))

hbs.registerPartials(__dirname + "/views/partials")

router.get("/", (req, res) => {
    res.render("index",
        {
            pageTitle: "Home Page",
        })
})

router.get("/contatti", (req, res) => {
    res.render("contatti",
        {
            pageTitle: "Contatti",
        })
})

router.get("/about", (req, res) => {
    res.render("about",
        {
            pageTitle: "About",
        })
})

router.get("/formazione", (req, res) => {
    res.render("formazione",
        {
            pageTitle: "Formazione",
        })
})

router.get("/web-design", (req, res) => {
    res.render("web-design", {
        pageTitle: "Web Design",
    }
    )
})

router.get("/login", (req, res) => {
    res.render("login", {
        pageTitle: "Login"
    })
})

router.post("/login", (req, res) => {
    if (!req.body.name || !req.body.password) {
        res.status(400)
        res.render("login", { message: "Mancano dei dati richiesti" })
    }
    else {
        let name = "Valentina"
        let password = "pass"
        let userAuth = { name: name, password: password }

        if (name == req.body.name && password == req.body.password) {
            req.session.user = userAuth
            res.redirect("profilo")
        }
        else {
            res.status(400)
            res.redirect("warning")
        }
    }
})

const checLogin = (req, res, next) => {
    if (req.session.user) {
        next()
    }
    else {
        res.redirect("warning")
    }
}

router.get("/profilo", checLogin, (req, res) => {
    res.render("profilo", {
        pageTitle: "Profilo Utente"
    })
})

router.get("/warning", (req, res) => {
    res.render("warning", {
        pageTitle: "Warning"
    })
})

router.get("/logout", (req, res) => {
    res.render("index", {
        pageTitle: "Home Page",
    })
    console.log("Hai effettuato il logout con successo")
})

router.get("*", (req, res) => {
    res.render("error", {
        pageTitle: "404 - Not Found",
    })
})

module.exports = router