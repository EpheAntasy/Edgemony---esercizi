const auth = (req, res, next) => {
    const { user } = req.query

    if (user === "Valentina") {
        req.user = { name: "Valentina" }
        console.log(`Utente ${user} autorizzato`);
        next()
    }
    else {
        console.log(`L'utente ${user} non risulta autorizzato`)
        res.status(401).send(`${user} non sei autorizzato/a`)
    }
}

module.exports = auth