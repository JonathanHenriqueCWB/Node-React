const Sequelize = require('sequelize')
// String de conexão parametros: nomeBanco, usuario e senha
const sequelize = new Sequelize('meu_blog', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// Criando os modelos
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING(20)
    },
    sobrenome: {
        type: Sequelize.STRING(20)
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING(40)
    }
})

// Executar esses comando apenas uma vez, caso contrario vai ficar recriando as tb
// Postagem.sync({force: true})
// Usuario.sync({force: true})

// Como inserir dados
Usuario.create({
    nome: 'Warren',
    sobrenome: 'Buffett',
    idade: 90,
    email: 'buffeet@email.com'
})