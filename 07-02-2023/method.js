const express = require("express")
const app = express()
const books = require("./books")
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/api/books", (req, res) => {
    res.json(books)
})

app.post("/api/books/add", (req, res) => {
    const { id, title, author, price } = req.body
    if (!id || !title || !author || !price) {
        return res
            .status(400)
            .json({ success: false, msg: "Mancano dei dati al body" })
    }
    else {
        return res
            .status(200)
            .json({ success: true, books: { id: id, title: title, author: author, price: price } })
    }
})

app.listen(PORT, () => {
    console.log(`Server avviato sulla porta: ${PORT}`);
})

// ho fatto la ricerca sia sul mio json che sull'API data dal docente
// ho fatto gli screen sia per le chiamate sul mio file che sull'API.