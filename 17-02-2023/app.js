require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const subRouter = require('./routes/subController')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', (error) => console.error)

db.once('open', () => console.log('Connesso al db'));

app.use(express.json())
app.use('/', subRouter)

app.listen(2000, () => {
    console.log('Server attivo');
})