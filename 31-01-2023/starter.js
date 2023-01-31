const http = require('http')
const os = require('os')
const fs = require('fs')
const bios = fs.readFileSync("./bios.html")
const hobbies = fs.readFileSync("./hobbies.html")
const img = fs.readFileSync("./assets/img/me_and_my_dog.jpg")

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
<p> L'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data.getDay()}/${data.getMonth() + 1}/${data.getFullYear()}</b> usando la piattaforma: <b> ${piattaforma} </b></p>
<a href=http://localhost:3000/chisono>Vai alla Bio!</a>
<a href=http://localhost:3000/hobbies>Vai agli Hobbies!</a>
</body>
</html>`;


const server = http.createServer((req, res) => {
    if (req.url === '/')
        res.end(messaggio)
    else if (req.url === "/chisono")
        res.end(bios)
    else if (req.url === "/hobbies")
        res.end(hobbies)
    else if (req.url === "/meandmydog")
        res.end(img)
    else {
        res.writeHead(404)
        res.end("Pagina non trovata")
    }
})

server.listen(3000)