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

    Categoria.find().lean().sort({ date: 'desc' }).then(categorias => {
        res.render('admin/categorias', { categorias: categorias })
    }).catch(err => {
        req.flash("error_msg", "Erro ao listar categorias")
        res.redirect("/admin")
    })

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

router.get('/categorias/edit/:id', (req, res) => {
    Categoria.findOne({ _id: req.params.id }).lean().then(categoria => {
        res.render("admin/editCategoria", { categoria: categoria })
    }).catch(err => {
        req.flash('error_msg', "categoria nao existe")
        res.redirect("/admin/categorias")
    })
})

router.post('/categorias/edit', (req, res) => {

    Categoria.findOne({ _id: req.body.id }).then(categoria => {

        categoria.nome = req.body.nome
        categoria.slug = req.body.slug

        categoria.save().then(() => {
            req.flash('success_msg', "Registro alterado com sucesso!")
            res.redirect("/admin/categorias")
        }).catch(err => {
            req.flash('error_msg', "Erro interno ao salvar edição")
            res.redirect("/admin/categorias")
        })
        
    }).catch(err => {
        req.flash("error_msg", "Erro ao editar a categoria")
        res.redirect("/admin/categorias")
    })

})

module.exports = router