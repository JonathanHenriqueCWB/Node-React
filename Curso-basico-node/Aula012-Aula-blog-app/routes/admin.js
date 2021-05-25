const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Home page - página principal painel administrador')
})

router.get('/posts', (req, res) => {
    res.send('Pagina de pots')
})

router.get('/categorias', (req, res) => {
    res.send('Pagina de categorias')
})

module.exports = router