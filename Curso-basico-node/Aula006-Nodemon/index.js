const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Home Page - Utilizando Nodemon...')
})

app.get('/sobre', function (req, res) {
    res.send("Instalar o nodemon globalmente: npm install nodemon -g")
})

app.listen(8080, function () {
    console.log('Server is running on port 8080')
})

/*
    Nodemon serve para atualizar automaticamente o servidor
    assim que ele detectar uma alteração irá recarregar o servidor
    tirando então a necessidade de ficar rodando o arquivo toda vez que
    alterado um arquivo
*/

// instalar o nodemon como global npm install nodemon -g
// basta executar o projeto com nodemon, e não mais como o node