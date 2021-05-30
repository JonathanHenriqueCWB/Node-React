// Por padrão se cria modelos no singular e com a primeira letra em caixa alta!
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    nome: {
        type: String,
        rquired: true
    },
    slug: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Categoria = mongoose.model('categorias', Categoria)