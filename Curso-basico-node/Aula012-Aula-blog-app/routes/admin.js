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

    // Validações formulario
    var erros = []

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ texto: 'Nome invalido' })
    }
    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
        erros.push({ texto: "Slug invalido" })
    }
    if (req.body.nome.length < 2) {
        erros.push({ texto: "Nome da categoria muito pequeno" })
    }

    if (erros.length > 0) {
        res.render("admin/addCategorias", { erros: erros })
    } else {
        // Recebe do formulario o nome e slug para salvar no banco
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }

        // Cria nova categoria
        new Categoria(novaCategoria).save().then(() => {
            req.flash("success_msg", "categoria criada com sucesso")
            res.redirect('/admin/categorias')
        }).catch(err => {
            req.flash("error_msg", "Erro ao criar categoria")
            res.redirect('/admin')
        })
    }
})

module.exports = router