const express = require('express')
const app = express()

// Criando uma rota com express
app.get("/", function (req, res) {
    res.send('Primeira rota em node')
});

app.get("/sobre", function (req, res) {
    res.send('Página About')
});

app.get("/contato", function(req, res){
    res.send('Página Contact')
});

// Rodar servidor - essa função obrigatóriamente a ultima linha no código
app.listen(8081, function () {
    console.log('Server running on port 8081')
})