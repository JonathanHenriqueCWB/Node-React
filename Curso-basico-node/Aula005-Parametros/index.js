const express = require('express')
const app = express()

app.get("/", function (req, res) {
    res.send('Home Page - Trabalhando com parâmetros')
})

// Basta add o parametro com /:NomeParametro
// Pode ser passado mais de uma parametro
app.get('/ola/:nome/:sobrenome', function (req, res) {
    res.send(req.params)
    //res.send("Ola " + req.params.nome)
    //res.send("Ola " + req.params.sobrenome)
})

app.listen(8080, function () {
    console.log('Server is running on port 8080')
})
