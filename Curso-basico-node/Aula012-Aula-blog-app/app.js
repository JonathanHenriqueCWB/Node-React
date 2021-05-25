// Módulos imports
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const admin = require('./routes/admin')
const path = require('path')

// Configurações
    // Body-parser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine' , 'handlebars')
    // Mongosse
    // Public
        app.use(express.static(path.join(__dirname,"public")))

// Rotas
    app.use('/admin', admin)

// Outros
    const port = 8080
    app.listen(port, () => {
        console.log('Server is running on port 8080')
    })

// DEPENDENCIAS
    // npm install --save express
    // npm install --save express-handlebars
    // npm install --save mongoose