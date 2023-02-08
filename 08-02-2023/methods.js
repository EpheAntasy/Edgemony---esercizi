const express = require("express")
const app = express()
const articles = require("./articoli")

const PORT = 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// GET
app.get("/api/articles", (req, res) => res.status(200).json(articles))

// POST visualizzando solo l'oggetto aggiunto
app.post("/api/articles", (req, res) => {
    const { id, title, body, userId, tags, reaction = 0 } = req.body

    if (!id || !title || !body || !userId || !tags) {
        return res
            .status(400)
            .json({ success: false, msg: "Mancano dei dati al body" })
    }
    else {
        return res
            .status(200)
            .json({ success: true, data: { id: id, title: title, body: body, userId: userId, tags: tags, reaction: reaction } })
    }
})

// POST visualizzando l'intero array con l'oggetto aggiunto
app.post("/api/articles/add", (req, res) => {
    const { id, title, body, userId, tags, reaction = 0 } = req.body

    if (!id || !title || !body || !userId || !tags) {
        return res
            .status(400)
            .json({ success: false, msg: "Mancano dei dati al body" })
    }
    else {
        return res
            .status(200)
            .json({ success: true, data: [...articles, { id: id, title: title, body: body, userId: userId, tags: tags, reaction: reaction }] })
    }
})

// PUT (con id assegnato ad una variabile)
app.put("/api/articles/:id", (req, res) => {
    const { id } = req.params
    const { title, body, tags } = req.body

    const article = articles.find((article) => article.id === Number(id))

    if (!article)
        return res
            .status(400)
            .json({ success: "false", msg: `Non esiste nessun articolo con l'id ${id}` })

    const newArticles = articles.map((article) => {
        if (article.id === Number(id)) {
            article.title = title
            article.body = body
            article.tags = tags
        }
        return article
    })
    res.status(200).json({ success: true, data: newArticles })


})

// DELETE (senza id assegnato alla variabile)
app.delete("/api/articles/:id", (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id))

    if (!article) {
        return res
            .status(400)
            .json({ success: false, msg: `Non esiste nessun articolo con l'id ${req.params.id}` })
    }

    const newArticles = articles.filter((article) => article.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newArticles })

})

// LOGIN con gestione status 400
app.post("/login/:name", (req, res) => {
    const { name } = req.params
    if (name === "Valentina") {
        return res
            .status(200)
            .send(`Benvenuta ${name}`)
    }
    else {
        return res
            .status(400)
            .send(`Si è verificato un errore, l'utente ${name} non è stato trovato`)
    }
})

app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
})