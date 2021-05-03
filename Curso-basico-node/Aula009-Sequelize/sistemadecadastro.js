const Sequelize = require('sequelize')
// String de conexão parametros: nomeBanco, usuario e senha
const sequelize = new Sequelize('sistemadecadastro', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// Verefica/autentica a conexão
/*
sequelize.authenticate().then(function () {
    console.log('Successfully connected')
}).catch(function (erro) {
    console.log('Failed to connect  ' + erro)
})
*/