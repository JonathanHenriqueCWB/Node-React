// Módulos imports
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')

// Configurações
    // Body-parser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
    // Handlebars
        app.enabled('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine' , 'handlebars')

// Rotas
    app.get('/', (req, res) => {
        res.send('Home page - página principal')
    })

// Outros
    const port = 8080
    app.listen(port, () => {
        console.log('Server is running on port 8080')
    })

// DEPENDENCIAS
    // npm install --save express
    // npm install --save express-handlebars
    // npm install --save mongoose