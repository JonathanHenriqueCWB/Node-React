const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model("categorias")

router.get('/', (req, res) => {
    res.render("admin/index")
})

router.get('/posts', (req, res) => {
    res.send('Pagina de pots')
})

router.get('/categorias', (req, res) => {
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addCategorias')
})

router.post('/categorias/nova', (req, res) => {

    // Recebe do formulario o nome e slug para salvar no banco
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    // Cria nova categoria
    new Categoria(novaCategoria).save().then(()=> {
        console.log('Categoria salva com sucesso')
    }).catch(err => {
        console.log('Erro ao salvar nova categoria!!')
    })
})

module.exports = router