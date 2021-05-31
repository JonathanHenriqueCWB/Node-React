// Módulos imports
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const admin = require('./routes/admin')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

// Configurações
    // session
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    // Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash('sucess_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    // Body-parser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine' , 'handlebars')
    // Mongosse
        mongoose.connect('mongodb://localhost/blogapp', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log('Conectado ao banco de dados com sucesso!')
        }).catch((err) => {
            console.log('Erro ao conectar ao banco de dados' + err )
        })
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
    // npm install --save express-session
    // npm install --save connect-flash