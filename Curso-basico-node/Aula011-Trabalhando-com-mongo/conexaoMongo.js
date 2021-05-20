// Importando ODM Mongoose => npm install --save mongoose
const mongoose = require('mongoose')

// Configurando conexão com MongoDB
mongoose.connect("mongodb://localhost/nomeBanco", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
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

// Cria uma nova collection
const User = mongoose.model('users', UserSchema)

// Cadastrando um usuario na nova collection
const Luigi = new User({
    nome: 'Luigi',
    sobrenome: 'Bross',
    email: 'Luigi@email.com',
    idade: 25
})

Luigi.save().then(() => {
    console.log('Usuario cadastrado com sucesso!')
}).catch(err => {
    console.log('Erro ao cadastrar usuario!' + err)
})

/**
    1 - Instalar e importar o mongoose npm install --save mongoose
    2 - Configurar a string de conexao
    3 - Definir ou importar a model que servirá com base de criação da collection
    4 - Criar nova collection
    5 - Cadastrar usuario na collection
 */