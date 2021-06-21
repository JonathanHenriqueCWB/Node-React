const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', function (req, res) {
    res.sendFile(__dirname + '/html/sobre/sobre.html')
})

app.listen(8080, function () {
    console.log('Server is running on port 8080')
})

// __dirname retorna o diretorio raiz da aplicação