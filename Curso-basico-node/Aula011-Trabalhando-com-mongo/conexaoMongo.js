// Importando ODM Mongoose => npm install --save mongoose
const mongoose = require('mongoose')

// Configurando conexão com MongoDB
mongoose.connect("mongodb://localhost/nomeBanco").then(() => {
    console.log('Conectado com sucesso!')
}).catch(err => {
    console.log('Erro ao conectar-se!' + err)
})

// Model para uma nova collection
const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }
})

// Collection
mongoose.model('users', UserSchema)

// Definir um usuario
const Mario = mongoose.model('users')
new Mario({
    nome: 'Super Mario',
    sobrenome: 'Bross',
    email: 'Supermario@email.com',
    idade: 29
}).save().then(() => {
    console.log('Usuario criado com sucesso!')
}).catch(err => {
    console.log('Erro ao criar usuario!' + err)
})

/**
    1 - Instalar e importar o mongoose npm install --save mongoose
    2 - Configurar a string de conexao
    3 - Definir ou importar a model que servirá com base de criação da collection
    4 - Definir a collection
    5 - Cadastrar usuario
 */