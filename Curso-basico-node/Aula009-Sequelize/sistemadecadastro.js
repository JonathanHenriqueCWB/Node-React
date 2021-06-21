const Sequelize = require('sequelize')

// CONEXÃO
    const sequelize = new Sequelize('meu_blog', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    })

// TESTAR CONEXÃO COM BANCO DE DADOS
    sequelize.authenticate().then(() => {
        console.log('CONEXÃO BEM SUCEDIDA!')
    }).catch(err => {
        console.log('FALHA NA CONEXAO COM BANCO DE DADOS - ' + err )
    })

// MODELOS
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

// CRIA TABELAS A PARTIR DO MODELO - Executar esses comando apenas uma vez, caso contrario vai ficar recriando as tb
    Postagem.sync({force: true})
    Usuario.sync({force: true})

// INSERT
    Usuario.create({
        nome: 'Warren',
        sobrenome: 'Buffett',
        idade: 90,
        email: 'buffeet@email.com'
    })