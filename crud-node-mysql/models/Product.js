const express = require('express')
const db = require('../routes/db')

const Product = db.sequelize.define('categories', {
    name: {
        type: db.Sequelize.STRING
    },
    description: {
        type: db.Sequelize.TEXT
    }
})

// Executar esses comando apenas uma vez, caso contrario vai ficar recriando as tb
// Product.sync({force: true})

module.exports = Product
