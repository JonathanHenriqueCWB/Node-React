/**#################################<<< IMPORTS >>>####################################*/
const express = require('express') // Express
const app = express()
const Sequelize = require('sequelize') // ORM
const handlebars = require('express-handlebars') // Template engine

/**##############################<<< CONFIGURAÇÃO >>>###################################*/

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Conexão com banco de dados MySql
    const sequelize = new Sequelize('meu_blog', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    })

/**##############################<<< ROTAS >>>#########################################*/

app.get('/cad', function(req, res){
    res.render('formulario')
})

/**##############################<<< SERVIDOR >>>######################################*/

app.listen(8080, function(){
    console.log('Server is runnig on port 8080')
})

/**
 * handlebars é um template engine, serve para usar estruturas no html, tais como,
 * condicionais, repeticão e principalmente exibir dados que viram do backend no 
 * frontend.
 */