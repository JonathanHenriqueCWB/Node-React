const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/', (req, res) => {
    Product.findAll({order: [['id', 'DESC']]}).then(function (produtos) {
        res.render('products/read', { produtos: produtos })
    })
})

router.get('/create', (req, res) => {
    res.render('products/create')
})

router.post('/create', (req, res) => {

    // Objeto a ser salvo
    const produto = {
        name: req.body.name,
        description: req.body.description
    }

    // Salvando o objeto
    Product.create(produto).then(() => {
        res.redirect('/')
    }).catch(err => {
        console.log('Erro ao cadastrar novo produto!')
    })
})

router.get('/update', (req, res) => {
    res.render('products/update')
})

router.get('/delete/:id', (req, res) => {
    Product.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Registro deletado com sucesso!')
    }).catch(function(erro){
        res.send('Erro ao apagar o registro!' + erro)
    })
})

module.exports = router