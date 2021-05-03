const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Home Page - Utilizando o Sequelize e mysql2')
})

app.listen(8080, function () {
    console.log('Server is running on port 8080')
})

// Instalar as ferramentas
/*
    npm install --save sequelize
    npm install --save mysql2

    Sequelize é um Node.js ORM baseado em promise para Postgres, 
    MySQL, MariaDB, SQLite e Microsoft SQL Server. Ele oferece suporte 
    a transações sólidas, relações, carregamento rápido e lento, replicação 
    de leitura e muito mais.
*/