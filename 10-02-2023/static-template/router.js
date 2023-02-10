const express = require("express")
const router = express.Router()
const hbs = require("hbs")

router.use(express.static("./public"))

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

router.get("*", (req, res) => {
    res.render("error", {
        pageTitle: "404 - Not Found",
    })
})

module.exports = router