const Sequelize = require('sequelize')
// String de conexão parametros: nomeBanco, usuario e senha
const sequelize = new Sequelize('crud_node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// Código somente para testar a conexão com a base de dados
sequelize.authenticate().then(function () {
    console.log('Successfully connected')
}).catch(function (erro) {
    console.log('Failed to connect  ' + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}