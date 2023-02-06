const express = require("express")
const PORT = 8000
const app = express()
const books = require("./public/books")
const auth = require("./auth")

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})
app.get("/bookshelf", (req, res) => {
    res.sendFile(__dirname + "/public/bookshelf.html")
})
app.get("/books", auth, (req, res) => {
    const newBooks = books.filter(book => book.price >= 14)

    res.json(newBooks)
})

app.listen(8000, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
})

