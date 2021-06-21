const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const home = require('./routes/home-route')
const product = require('./routes/product-route')

// CONFIGURAÇÃO VIEW ENGINE HANDLEBARS
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROTAS
app.use('/', home)
app.use('/products', product)

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})