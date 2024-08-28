const mongoose = require('../db/conecta')
const {Schema} = mongoose

const Proteina = mongoose.model('Proteina',
new Schema({
    sku: {type: String, required: true},
    descricao :{type: String, required: true}},
    {timestamps:true},
))
module.exports = Proteina